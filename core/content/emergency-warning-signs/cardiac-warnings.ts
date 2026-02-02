/**
 * Cardiac Warning Signs - Chest Pain, Palpitations, Syncope, Acute MI Signs
 *
 * Educational content for recognizing cardiac emergencies including chest pain,
 * palpitations, syncope, and signs of acute myocardial infarction.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any emergency, call 911 immediately.
 *
 * Spanish translations (Traduccion al espanol) included at each level.
 */

import { EducationalContent } from '../types';

export const cardiacWarnings: EducationalContent = {
  id: 'emergency-cardiac-warning-signs',
  type: 'condition',
  name: 'Cardiac Warning Signs',
  alternateNames: [
    'Heart Emergency Signs',
    'Senales de Advertencia Cardiaca',
    'Cardiac Red Flags',
    'Heart Attack Warning Signs',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your heart can send warning signals when something is wrong. Chest pain, a racing or fluttering heart, and fainting can all be signs of a heart emergency. Knowing these signs can save your life or someone else\'s.',
      explanation: `## Warning Signs Your Heart Needs Help

Your heart works every second of your life, pumping blood to keep you alive. Sometimes it sends warning signals that something is wrong. Learning these signals can help you act fast and save a life.

**Traduccion al espanol:** Tu corazon puede enviar senales de advertencia cuando algo esta mal. Dolor en el pecho, latidos rapidos o irregulares, y desmayos pueden ser signos de una emergencia cardiaca.

---

## 1. Chest Pain (Dolor de Pecho)

Chest pain is the most common warning sign of a heart problem. Not all chest pain means a heart attack, but you should always take it seriously.

**When to worry about chest pain:**
- It feels like pressure, squeezing, or tightness in your chest
- The pain spreads to your arm, jaw, neck, or back
- It comes with sweating, nausea, or shortness of breath
- It lasts more than a few minutes or keeps coming back

**What to do:** Call 911 right away. Do not drive yourself to the hospital.

---

## 2. Palpitations (Palpitaciones)

Palpitations are when you feel your heart beating in an unusual way -- it may feel like it is racing, fluttering, or skipping beats.

**When to worry about palpitations:**
- They happen often or last a long time
- You feel dizzy or lightheaded at the same time
- You also have chest pain or trouble breathing
- You faint or almost faint

**Most of the time,** palpitations are harmless (like from caffeine or stress), but they can sometimes signal a serious heart problem.

---

## 3. Fainting (Desmayo / Sincope)

Fainting happens when your brain does not get enough blood for a short time. It can be caused by many things, but some causes are dangerous.

**When fainting is an emergency:**
- You faint during exercise or physical activity
- You faint without warning (no dizziness beforehand)
- You have heart disease or a family member who died suddenly
- You faint more than once

---

## 4. Heart Attack Signs (Senales de un Infarto)

A heart attack happens when blood flow to part of the heart is blocked. Every minute matters!

**Classic signs:**
- Chest pain or pressure (like an elephant sitting on your chest)
- Pain in the left arm, jaw, neck, or back
- Cold sweats, nausea, or vomiting
- Shortness of breath
- Feeling very tired for no reason (especially in women)

**Women may have different signs:**
- Unusual tiredness for days before
- Stomach pain or indigestion
- Dizziness
- Back or jaw pain without chest pain

---

## Remember: Call 911 Immediately!

- **Do not wait** to see if symptoms go away
- **Do not drive yourself** to the hospital
- **Chew an aspirin** (if not allergic) while waiting for help
- **Tell the 911 operator** you think you are having a heart emergency

**In Spanish:** Llame al 911 inmediatamente. No espere a ver si los sintomas desaparecen.`,
      keyTerms: [
        {
          term: 'chest pain',
          definition:
            'Pain or discomfort in the chest area that can signal a heart problem. Can feel like pressure, squeezing, or heaviness.',
        },
        {
          term: 'palpitations',
          definition:
            'Feeling your heart beat in an unusual way -- racing, fluttering, pounding, or skipping beats.',
          pronunciation: 'pal-pih-TAY-shuns',
        },
        {
          term: 'syncope',
          definition:
            'The medical word for fainting -- a brief loss of consciousness caused by not enough blood reaching the brain.',
          pronunciation: 'SIN-koh-pee',
        },
        {
          term: 'heart attack',
          definition:
            'When blood flow to part of the heart muscle is blocked, causing damage. Also called myocardial infarction.',
        },
        {
          term: 'aspirin',
          definition:
            'A common medicine that can help during a heart attack by thinning the blood and improving flow.',
        },
      ],
      analogies: [
        'Your heart is like a house with its own plumbing. A heart attack happens when one of the pipes gets clogged and water (blood) cannot reach part of the house.',
        'Palpitations are like your phone vibrating unexpectedly -- sometimes it is just a notification (harmless), but sometimes it is an alarm (serious).',
        'Fainting from a heart problem is like a computer shutting down because it lost power -- the brain is not getting the blood supply it needs.',
        'Chest pain from a heart problem is like a warning light on your car\'s dashboard -- it means something important needs attention right now.',
      ],
      examples: [
        'A 55-year-old man feels a heavy pressure on his chest while mowing the lawn. The pain spreads to his left arm and he starts sweating. His wife calls 911 immediately.',
        'A grandmother feels unusually tired for two days, then develops stomach pain and dizziness. Her daughter recognizes these as possible heart attack signs in women and calls 911.',
        'A teenager faints during a basketball game. Because it happened during exercise, the coach calls 911 rather than just having the player rest.',
      ],
      patientCounselingPoints: [
        'Learn the warning signs of a heart attack -- they can be different for men and women',
        'Always call 911 for chest pain that lasts more than a few minutes',
        'If you faint during exercise, see a doctor right away',
        'Keep a list of your medicines and allergies in your wallet in case of emergency',
        'Ensene a su familia los signos de una emergencia cardiaca (Teach your family the signs of a cardiac emergency)',
      ],
    },

    2: {
      level: 2,
      summary:
        'Cardiac warning signs include chest pain (angina), palpitations, syncope, and acute myocardial infarction symptoms. Recognizing typical and atypical presentations, particularly in women and diabetics, is critical for timely emergency response.',
      explanation: `## Cardiac Warning Signs: Recognition and Response

Understanding cardiac warning signs requires knowing both typical and atypical presentations. Early recognition and rapid response are the most important factors in survival.

**Traduccion:** Las senales de advertencia cardiaca incluyen dolor toracico, palpitaciones, sincope y sintomas de infarto agudo de miocardio.

---

## Chest Pain (Dolor Toracico)

**Cardiac chest pain characteristics:**
- **Location:** Substernal (behind the breastbone), diffuse
- **Quality:** Pressure, squeezing, heaviness, tightness
- **Radiation:** Left arm, jaw, neck, back, epigastrium
- **Duration:** >20 minutes suggests acute MI
- **Associated symptoms:** Diaphoresis (sweating), dyspnea, nausea

**Non-cardiac chest pain characteristics (for comparison):**
- Sharp, stabbing, or positional
- Reproducible with palpation (pressing on chest wall)
- Brief (seconds) and well-localized (point to exact spot)
- Worse with breathing (pleuritic)

**Important caveat:** Atypical presentations are common, especially in women, elderly, and diabetics. Never dismiss chest pain based only on characteristics.

---

## Palpitations (Palpitaciones)

**Types of palpitations:**
- **Skipped beats:** Often premature atrial or ventricular contractions (PACs, PVCs)
- **Racing heart:** Could be sinus tachycardia, SVT, atrial fibrillation, or VT
- **Fluttering:** Often atrial flutter or fibrillation
- **Pounding:** Increased stroke volume (exercise, anxiety, anemia)

**Red flags with palpitations:**
- Syncope or presyncope (feeling faint)
- Associated chest pain
- Duration >30 minutes
- Heart rate >150 bpm
- Family history of sudden cardiac death
- Known structural heart disease

---

## Syncope (Sincope)

**Classification:**
- **Vasovagal (most common):** Triggered by standing, heat, pain, emotional stress
- **Cardiac syncope (most dangerous):** Due to arrhythmia or structural heart disease
- **Orthostatic:** Blood pressure drops when standing

**High-risk features suggesting cardiac syncope:**
- Syncope during exertion
- Syncope while supine (lying down)
- No prodrome (no warning signs before)
- Associated palpitations or chest pain
- Family history of sudden death or channelopathy
- Abnormal ECG
- Known heart disease or heart failure

**Low-risk features (likely vasovagal):**
- Preceded by warmth, nausea, lightheadedness
- Triggered by prolonged standing, pain, or emotional distress
- Young patient with no cardiac history

---

## Acute MI Signs (Senales de Infarto Agudo de Miocardio)

**Classic presentation (typical):**
- Crushing substernal chest pressure
- Radiation to left arm, jaw, or neck
- Diaphoresis (profuse sweating)
- Nausea/vomiting
- Dyspnea (shortness of breath)
- Anxiety / sense of impending doom

**Atypical presentations:**
| Population | Common Atypical Features |
|-----------|--------------------------|
| Women | Fatigue, nausea, back/jaw pain, dyspnea without chest pain |
| Elderly | Confusion, weakness, dyspnea, syncope |
| Diabetics | Silent MI (no chest pain due to neuropathy) |
| Post-surgical | Pain attributed to surgical site |

**Time-critical response:**
- "Time is muscle" -- every minute of delay increases heart damage
- Goal: Door-to-balloon time <90 minutes for STEMI
- Prehospital ECG by EMS improves outcomes
- Aspirin 325 mg chewed (if no allergy/contraindication)

---

## When to Call 911 vs. Urgent Care

| Call 911 Immediately | Go to ER | Urgent Care / PCP |
|---------------------|----------|-------------------|
| Chest pain >5 min with sweating | Palpitations with dizziness | Occasional skipped beats |
| Syncope during exercise | Chest pain that resolved | Palpitations with caffeine |
| Signs of heart attack | New-onset palpitations | Mild orthostatic dizziness |
| Syncope with no warning | Syncope with injury | Single vasovagal episode |`,
      keyTerms: [
        {
          term: 'angina',
          definition:
            'Chest pain caused by reduced blood flow to the heart muscle. Stable angina occurs with exertion; unstable angina occurs at rest and is an emergency.',
          pronunciation: 'an-JY-nah',
        },
        {
          term: 'diaphoresis',
          definition:
            'Excessive sweating, often cold and clammy; a key associated symptom of acute MI.',
          pronunciation: 'dy-ah-for-EE-sis',
        },
        {
          term: 'prodrome',
          definition:
            'Warning symptoms that occur before an event such as syncope (e.g., lightheadedness, tunnel vision, nausea).',
          pronunciation: 'PRO-drome',
        },
        {
          term: 'STEMI',
          definition:
            'ST-Elevation Myocardial Infarction -- a type of heart attack where a coronary artery is completely blocked, visible on ECG.',
          pronunciation: 'STEM-ee',
        },
        {
          term: 'vasovagal syncope',
          definition:
            'The most common type of fainting, caused by a sudden drop in heart rate and blood pressure triggered by stress, pain, or prolonged standing.',
          pronunciation: 'vay-zo-VAY-gal SIN-koh-pee',
        },
      ],
      analogies: [
        'Angina is like a traffic jam on the highway to your heart -- blood can still get through, but not as well. A heart attack is a complete road closure.',
        'Vasovagal syncope is like a circuit breaker tripping when overloaded -- the body temporarily shuts down to reset.',
        'An ECG during a heart attack is like a photograph of the crime scene -- it shows exactly which part of the heart is in trouble.',
        'Atypical MI presentations in women are like a fire alarm that buzzes instead of ringing -- the warning is different but equally urgent.',
      ],
      examples: [
        'A 62-year-old man with diabetes experiences no chest pain but suddenly becomes confused and short of breath. EMS finds ST elevation on the ECG -- a "silent" heart attack.',
        'A 45-year-old woman has felt unusually tired for three days, then develops nausea and jaw pain. She initially thinks it is the flu but her friend insists she call 911. She is diagnosed with an acute MI.',
        'A 30-year-old runner faints during a race with no warning. Because syncope during exertion is a red flag, she is evaluated for hypertrophic cardiomyopathy.',
      ],
      patientCounselingPoints: [
        'Heart attack symptoms in women often look different from the "classic" chest pain -- learn the atypical signs',
        'If you have diabetes, you may not feel chest pain during a heart attack. Watch for sudden shortness of breath, confusion, or unusual fatigue',
        'Fainting during exercise is always a medical emergency -- do not resume activity until cleared by a doctor',
        'If you take nitroglycerin and chest pain does not improve after 5 minutes, call 911',
        'En espanol: Los sintomas de un ataque cardiaco en las mujeres a menudo son diferentes -- aprenda los signos atipicos',
      ],
    },

    3: {
      level: 3,
      summary:
        'Cardiac emergencies present with a spectrum of symptoms from angina to acute coronary syndrome, arrhythmias with hemodynamic compromise, and cardiac syncope. Risk stratification using validated tools (HEART score, San Francisco Syncope Rule) guides triage and disposition.',
      explanation: `## Cardiac Warning Signs: Clinical Framework

Cardiac emergencies require systematic recognition and risk stratification. Understanding the pathophysiology behind warning signs enables accurate triage and appropriate escalation of care.

**Traduccion:** Las emergencias cardiacas se presentan con un espectro de sintomas que requieren estratificacion de riesgo sistematica.

---

## Chest Pain: Differential Diagnosis and Risk Stratification

### Acute Coronary Syndrome (ACS) Spectrum

| Diagnosis | Pathology | ECG | Troponin | Urgency |
|-----------|-----------|-----|----------|---------|
| Stable Angina | Fixed stenosis, demand ischemia | Normal or ST depression with exertion | Normal | Outpatient evaluation |
| Unstable Angina (UA) | Plaque rupture, non-occlusive thrombus | May show ST depression/T-wave inversion | Normal | Admit, anticoagulation |
| NSTEMI | Partial occlusion, subendocardial injury | ST depression, T-wave inversion | Elevated | Admit, early invasive strategy |
| STEMI | Complete occlusion, transmural injury | ST elevation or new LBBB | Elevated | Emergent reperfusion (<90 min) |

### HEART Score for Chest Pain Risk Stratification

| Component | 0 Points | 1 Point | 2 Points |
|-----------|----------|---------|----------|
| **H**istory | Slightly suspicious | Moderately suspicious | Highly suspicious |
| **E**CG | Normal | Non-specific changes | ST deviation |
| **A**ge | <45 | 45-64 | >=65 |
| **R**isk factors | None | 1-2 factors | >=3 factors or atherosclerotic hx |
| **T**roponin | Normal | 1-2x normal | >2x normal |

- **Score 0-3:** Low risk (1.7% MACE at 6 weeks). Consider discharge.
- **Score 4-6:** Moderate risk. Observation, serial troponins, cardiology consult.
- **Score 7-10:** High risk (72% MACE). Admit, early invasive strategy.

### Life-Threatening Non-Cardiac Chest Pain

Always consider these emergencies alongside ACS:
- **Aortic dissection:** Tearing chest/back pain, BP differential between arms, widened mediastinum
- **Pulmonary embolism:** Pleuritic chest pain, tachycardia, hypoxia, risk factors (DVT, immobility)
- **Tension pneumothorax:** Sudden pleuritic pain, absent breath sounds, tracheal deviation
- **Esophageal rupture (Boerhaave):** Severe pain after vomiting, subcutaneous emphysema
- **Cardiac tamponade:** Beck's triad (hypotension, JVD, muffled heart sounds)

---

## Palpitations: Arrhythmia Recognition

### Risk Stratification

**Hemodynamically stable arrhythmias:**
- Sinus tachycardia (physiologic response)
- Premature atrial/ventricular contractions (PACs, PVCs)
- Paroxysmal SVT (re-entrant, accessory pathway)
- Atrial fibrillation with controlled rate

**Hemodynamically unstable arrhythmias (emergencies):**
- Ventricular tachycardia (sustained)
- Supraventricular tachycardia with hypotension
- Atrial fibrillation with rapid ventricular response and hemodynamic compromise
- Torsades de pointes
- Complete heart block with symptomatic bradycardia

**Key ECG findings suggesting dangerous arrhythmia:**
- Wide QRS complex (>120 ms) -- think ventricular origin
- Delta wave (WPW) -- risk of rapid AF with accessory pathway
- Prolonged QT interval -- risk of torsades
- Brugada pattern -- risk of sudden death
- Epsilon wave / T-wave inversions V1-V3 (ARVC)

### When Palpitations Require Emergency Care

- Sustained rate >150 bpm with symptoms
- Associated syncope or near-syncope
- New onset in patient with known structural heart disease
- ECG showing wide complex tachycardia
- Hemodynamic instability (hypotension, altered mental status, chest pain)

---

## Syncope: Risk Stratification

### San Francisco Syncope Rule (high-risk features)

Mnemonic: **CHESS**
- **C**ongestive heart failure history
- **H**ematocrit <30%
- **E**CG abnormality (non-sinus rhythm, new changes)
- **S**hortness of breath
- **S**ystolic BP <90 mmHg

Any positive feature suggests high risk for adverse event within 30 days.

### Cardiac vs. Non-Cardiac Syncope

| Feature | Cardiac (High Risk) | Vasovagal (Low Risk) |
|---------|--------------------|-----------------------|
| Onset | Sudden, no warning | Gradual prodrome |
| Position | Any (including supine) | Upright or standing |
| Activity | During or after exertion | At rest, prolonged standing |
| Recovery | May be prolonged, confused | Rapid, oriented |
| Associated | Palpitations, chest pain | Nausea, warmth, diaphoresis |
| ECG | Abnormal | Normal |

### Conditions Causing Cardiac Syncope

- **Arrhythmias:** VT, complete heart block, sick sinus syndrome, SVT
- **Structural:** Aortic stenosis, HOCM, atrial myxoma, cardiac tamponade
- **Vascular:** Pulmonary embolism, aortic dissection, subclavian steal
- **Channelopathies:** Long QT syndrome, Brugada syndrome, CPVT

---

## Acute MI: Advanced Recognition

### Atypical Presentations by Population

**Women:** Up to 42% present without chest pain. Most common atypical symptoms:
- Dyspnea (most common sole presenting symptom)
- Fatigue / malaise (prodromal, days before)
- Nausea / vomiting
- Back, shoulder, or jaw pain

**Elderly (>75 years):** Up to 40% present atypically:
- Acute confusion / delirium
- Generalized weakness
- Syncope
- Dyspnea without chest pain

**Diabetics:** Cardiac autonomic neuropathy causes "silent MI":
- May present with only dyspnea or diaphoresis
- Higher mortality due to delayed presentation

### ECG Localization of MI

| ECG Leads | Wall | Artery |
|-----------|------|--------|
| V1-V4 | Anterior | LAD |
| II, III, aVF | Inferior | RCA (85%) or LCx (15%) |
| I, aVL, V5-V6 | Lateral | LCx |
| V1-V2 (reciprocal) | Posterior | RCA or LCx |
| V3R, V4R | Right ventricle | Proximal RCA |

### STEMI Equivalents (require emergent reperfusion)

- New left bundle branch block (LBBB) with ischemic symptoms
- De Winter T-waves (upsloping ST depression with tall T-waves in V1-V6)
- Wellens syndrome (deep T-wave inversions V1-V4 -- critical LAD stenosis)
- Posterior MI (ST depression V1-V3 with ST elevation on posterior leads)
- Sgarbossa criteria positive in LBBB or paced rhythm`,
      keyTerms: [
        {
          term: 'acute coronary syndrome',
          definition:
            'Spectrum of conditions from unstable angina to STEMI, caused by acute myocardial ischemia from coronary artery plaque rupture and thrombosis.',
          pronunciation: 'ah-KYOOT KOR-oh-nair-ee SIN-drome',
        },
        {
          term: 'HEART score',
          definition:
            'Validated risk stratification tool for chest pain using History, ECG, Age, Risk factors, and Troponin to predict 6-week MACE risk.',
        },
        {
          term: 'troponin',
          definition:
            'Cardiac biomarker released by damaged myocardial cells. High-sensitivity troponin can detect MI within 1-3 hours of symptom onset.',
          pronunciation: 'TRO-po-nin',
        },
        {
          term: 'STEMI equivalent',
          definition:
            'ECG patterns that indicate acute coronary occlusion requiring emergent reperfusion but do not show classic ST elevation (e.g., new LBBB, Wellens, de Winter).',
        },
        {
          term: 'channelopathy',
          definition:
            'Genetic disorder of cardiac ion channels causing arrhythmia risk (e.g., Long QT syndrome, Brugada syndrome, CPVT). Important cause of syncope and sudden death in young patients.',
          pronunciation: 'chan-el-OP-ah-thee',
        },
        {
          term: 'hemodynamic instability',
          definition:
            'Insufficient blood pressure and/or cardiac output to maintain organ perfusion. Signs include hypotension, altered mental status, and end-organ dysfunction.',
        },
      ],
      analogies: [
        'The ACS spectrum is like a dam with a growing crack: stable angina is a small seep, unstable angina is water starting to push through, NSTEMI is a partial breach, and STEMI is a full collapse.',
        'The HEART score is like a weather forecast for heart attacks -- it combines multiple data points to predict the probability of a storm.',
        'STEMI equivalents are like disguised emergencies -- the heart attack is real, but it is wearing a different costume on the ECG.',
        'Cardiac syncope is like a sudden power outage -- no warning, instant darkness -- while vasovagal is like lights dimming slowly before going out.',
      ],
      examples: [
        'A 58-year-old smoker with hypertension presents with substernal chest pressure radiating to the jaw for 45 minutes. ECG shows 3mm ST elevation in V1-V4. Diagnosis: anterior STEMI. Cath lab activated; door-to-balloon time 62 minutes. LAD occlusion found and stented.',
        'A 72-year-old woman with diabetes presents with 2 hours of nausea and epigastric discomfort. No chest pain. ECG shows T-wave inversions in II, III, aVF. Troponin elevated at 0.85 ng/mL. Diagnosis: inferior NSTEMI with atypical presentation.',
        'A 25-year-old man faints during a pickup basketball game. No prodrome. ECG shows prolonged QT interval (QTc 520 ms). Diagnosed with Long QT syndrome, started on beta-blocker, and referred for ICD evaluation.',
      ],
      clinicalNotes: `**Clinical pearls for cardiac warning signs:**

1. **Never dismiss chest pain based on age alone.** Young patients with cocaine use, congenital anomalies, or spontaneous coronary artery dissection (SCAD) can have MIs.

2. **The first troponin may be normal.** Serial troponins at 0 and 3 hours (high-sensitivity assay) are standard. A single negative troponin does not rule out ACS.

3. **Syncope during exertion is cardiac until proven otherwise.** Always obtain ECG, echocardiogram, and consider Holter/event monitoring.

4. **Aortic dissection mimics MI.** If chest/back pain is "tearing" with a BP differential, get CT angiography before anticoagulation.

5. **In Spanish-speaking patients,** chest pressure may be described as "me aprieta el pecho" or "siento un peso en el pecho." Ask about "dolor," "presion," and "opresion."`,
    },

    4: {
      level: 4,
      summary:
        'Advanced cardiac warning sign evaluation integrates high-sensitivity biomarkers, serial ECG interpretation, STEMI-equivalent recognition, point-of-care ultrasound, and validated risk scores to guide emergent versus urgent interventions in acute coronary syndromes, malignant arrhythmias, and high-risk syncope.',
      explanation: `## Advanced Cardiac Warning Sign Evaluation

### Biomarker-Guided ACS Evaluation

**High-sensitivity troponin (hs-cTn) algorithms:**

**0/1-hour algorithm (ESC recommended):**
- hs-cTnT or hs-cTnI at presentation (0h) and 1 hour
- **Rule-out:** Very low 0h value AND delta <threshold
- **Rule-in:** High 0h value OR significant delta at 1h
- **Observe:** Intermediate values -- serial measurements at 3h

| Assay | Rule-out (0h) | Rule-in (0h) | Delta (1h) |
|-------|---------------|---------------|------------|
| hs-cTnT (Roche) | <5 ng/L | >=52 ng/L | >=5 ng/L |
| hs-cTnI (Abbott) | <4 ng/L | >=64 ng/L | >=6 ng/L |

**False positive troponin elevations (non-ACS):**
- Myocarditis, takotsubo cardiomyopathy
- Pulmonary embolism, aortic dissection
- Heart failure, renal failure (chronic elevation)
- Sepsis, critical illness
- Cardiac contusion, post-cardioversion

**Distinguishing ACS from non-ACS troponin elevation:**
- ACS: Rise-and-fall pattern with >20% delta
- Chronic elevation (renal): Stable, no significant delta
- Myocarditis: Often very high, rapid rise, no coronary distribution on ECG

---

### Advanced ECG Interpretation in Cardiac Emergencies

**Subtle STEMI and STEMI equivalents:**

**1. De Winter T-waves:**
- Upsloping ST depression >1mm at J-point in V1-V6
- Tall, symmetric, peaked T-waves
- Signifies proximal LAD occlusion
- Requires emergent PCI (not thrombolytics alone)

**2. Wellens syndrome (warning sign, not acute MI):**
- Type A: Biphasic T-waves in V2-V3 (25%)
- Type B: Deep symmetric T-wave inversions V1-V4 (75%)
- Indicates critical LAD stenosis (>90%)
- Patient may be pain-free at time of ECG
- Requires urgent angiography (high risk of anterior MI)

**3. Aslanger pattern:**
- ST elevation in inferior lead with reciprocal changes
- ST depression in V4-V6 with positive T-wave
- Suggests multivessel disease / subtotal occlusion

**4. Posterior MI recognition:**
- ST depression in V1-V3 (mirror image of posterior ST elevation)
- Tall R-waves in V1-V2 (mirror image of Q-waves)
- Confirm with posterior leads V7-V9 (ST elevation >0.5mm)

**5. Right ventricular MI:**
- ST elevation in V3R-V4R (>1mm)
- Suspect with inferior STEMI + hypotension + clear lungs
- Avoid nitroglycerin and diuretics (preload-dependent)

---

### Point-of-Care Ultrasound in Cardiac Emergencies

**Focused cardiac ultrasound assessment:**

**Parasternal long axis (PLAX):**
- LV function (wall motion abnormalities suggest ischemia)
- Pericardial effusion (tamponade)
- Aortic root dilation (dissection)
- Mitral valve (acute MR from papillary muscle rupture)

**Apical 4-chamber:**
- Regional wall motion abnormalities (coronary territory)
- RV dilation (PE, RV infarction)
- Valvular pathology

**Subxiphoid:**
- Pericardial effusion
- RV size comparison
- IVC assessment (volume status, tamponade physiology)

**Wall motion abnormality mapping:**
| Territory | Coronary Artery | Echo Finding |
|-----------|----------------|--------------|
| Anterior/septal | LAD | Anterior wall / septum hypokinesis |
| Inferior | RCA | Inferior wall hypokinesis |
| Lateral | LCx | Lateral wall hypokinesis |
| RV free wall | RCA (proximal) | RV dilation, hypokinesis |

---

### Arrhythmia Emergency Assessment

**Wide complex tachycardia (WCT) algorithm:**

**Assume VT until proven otherwise** in hemodynamically stable WCT.

**Brugada criteria for VT:**
1. Absence of RS complex in all precordial leads? -> VT
2. RS interval >100ms in any precordial lead? -> VT
3. AV dissociation? -> VT
4. Morphology criteria in V1 and V6? -> VT vs SVT with aberrancy

**Management of unstable WCT:**
- Hemodynamically unstable: Immediate synchronized cardioversion
- Stable, regular, monomorphic: IV amiodarone or procainamide
- Stable, irregular, polymorphic: Consider torsades -> IV magnesium

**Bradycardia emergencies:**
- Complete heart block: Transcutaneous pacing, dopamine/epinephrine infusion
- Symptomatic Mobitz II: Transcutaneous pacing, transvenous pacing
- Sick sinus with pauses >3 seconds: Transcutaneous pacing standby

---

### High-Risk Syncope Evaluation

**Canadian Syncope Risk Score:**
- Predisposition to vasovagal: -1
- Heart disease history: +1
- SBP <90 or >180: +2
- Elevated troponin: +2
- Abnormal QRS axis: +1
- QRS >130ms: +1
- QTc >480ms: +2
- ED diagnosis of vasovagal: -2
- ED diagnosis of cardiac syncope: +2

**Score interpretation:**
- Very low (<=0): 0.4% risk of 30-day serious outcome
- Low (1-3): 2-5% risk
- Medium (4-5): 10% risk
- High (6-8): 20% risk
- Very high (>=9): >25% risk

**Implantable loop recorder (ILR) indications:**
- Recurrent syncope without diagnosis after standard workup
- High-risk features but no arrhythmia on monitoring
- Infrequent episodes (Holter and event monitors non-diagnostic)

---

### Acute MI Complications

| Complication | Timing | Presentation | Management |
|-------------|--------|--------------|------------|
| Cardiogenic shock | Hours | Hypotension, tachycardia, cool extremities | Pressors, IABP, Impella, emergent PCI |
| Papillary muscle rupture | Days 2-7 | Acute severe MR, pulmonary edema | Emergent surgery |
| Ventricular septal rupture | Days 3-5 | New harsh murmur, RV failure | Emergent surgery |
| Free wall rupture | Days 3-5 | Tamponade, PEA arrest | Emergent surgery |
| Dressler syndrome | Weeks | Pleuritic pain, pericardial friction rub | NSAIDs, colchicine |
| LV thrombus | Days-weeks | Embolism risk | Anticoagulation |`,
      keyTerms: [
        {
          term: 'high-sensitivity troponin',
          definition:
            'Fourth-generation troponin assay capable of detecting troponin concentrations at the 99th percentile of a normal reference population. Enables earlier MI diagnosis (1-3 hours) and rapid rule-out/rule-in algorithms.',
          pronunciation: 'TRO-po-nin',
        },
        {
          term: 'de Winter T-waves',
          definition:
            'ECG pattern of upsloping ST depression with tall peaked T-waves in precordial leads, indicating proximal LAD occlusion. A STEMI equivalent requiring emergent reperfusion.',
        },
        {
          term: 'Wellens syndrome',
          definition:
            'ECG pattern of biphasic or deeply inverted T-waves in V2-V3 (pain-free interval), indicating critical proximal LAD stenosis. High risk for anterior MI if not treated urgently.',
        },
        {
          term: 'Brugada criteria',
          definition:
            'Stepwise algorithm for differentiating ventricular tachycardia from SVT with aberrant conduction in wide complex tachycardia. High sensitivity for VT diagnosis.',
        },
        {
          term: 'Canadian Syncope Risk Score',
          definition:
            'Validated scoring system predicting 30-day risk of serious adverse events after syncope. Uses clinical, ECG, and ED diagnosis variables.',
        },
        {
          term: 'takotsubo cardiomyopathy',
          definition:
            'Stress-induced cardiomyopathy mimicking ACS with apical ballooning, troponin elevation, and ECG changes but normal coronary arteries. Also called "broken heart syndrome."',
          pronunciation: 'tah-KOT-soo-bo',
        },
      ],
      analogies: [
        'High-sensitivity troponin is like a smoke detector that can detect faint wisps of smoke -- it catches the fire earlier, but can also alarm for burnt toast (non-ACS elevations).',
        'De Winter T-waves are a STEMI in disguise -- like a wolf in sheep\'s clothing on the ECG. The artery is fully blocked, but the classic ST elevation is absent.',
        'Point-of-care ultrasound in chest pain is like opening the hood of a car when the engine warning light is on -- you can see the problem directly instead of guessing.',
        'The Brugada criteria for WCT are like a decision tree for an arborist -- each branch point narrows the diagnosis until you reach the right answer.',
      ],
      examples: [
        'A 50-year-old man presents with chest pain resolved 2 hours ago. ECG shows deep symmetric T-wave inversions in V1-V4. Recognized as Wellens syndrome type B. Urgent catheterization reveals 99% proximal LAD stenosis. Stented without complication.',
        'A 65-year-old woman presents with ongoing chest pressure. ECG shows upsloping ST depression with tall peaked T-waves in V1-V6. Recognized as de Winter pattern. Emergent cath reveals acute LAD occlusion. PCI performed with TIMI 3 flow restored.',
        'A 40-year-old man presents with regular wide complex tachycardia at 180 bpm, BP 95/60. Applying Brugada criteria: RS complex absent in precordial leads -> VT. Treated with IV amiodarone. Post-conversion ECG shows old anterior MI with reduced EF on echo.',
      ],
      clinicalNotes: `**Expert clinical pearls:**

1. **hs-troponin interpretation:** Always use delta values, not just absolute numbers. A rise of >50% at 3 hours (if initial >99th percentile) or >20% (if initial elevated) strongly suggests acute MI.

2. **Wellens in the pain-free interval:** The classic Wellens ECG is recorded when the patient is NOT having pain. During active ischemia, the ECG may show ST elevation instead. Serial ECGs are critical.

3. **RV infarction pitfall:** Avoid nitroglycerin, morphine, and diuretics in inferior STEMI with RV involvement. These patients are preload-dependent -- volume resuscitation is the key intervention.

4. **WCT default:** When in doubt, treat wide complex tachycardia as VT. Misdiagnosing VT as SVT and giving verapamil or adenosine can cause cardiovascular collapse.

5. **Syncope in athletes:** Young athletes with exertional syncope need echocardiography (HOCM), ECG (channelopathies), and potentially cardiac MRI (ARVC) before returning to sport.`,
    },

    5: {
      level: 5,
      summary:
        'State-of-the-art cardiac emergency evaluation integrates multi-omic biomarker panels, AI-enhanced ECG interpretation, coronary CT angiography for intermediate-risk chest pain, genetic testing for inherited arrhythmias, and systems-level quality metrics to optimize recognition and outcomes across diverse populations.',
      explanation: `## Cutting-Edge Cardiac Emergency Evaluation

### Next-Generation Biomarker Strategies

**Beyond troponin -- emerging and adjunctive biomarkers:**

| Biomarker | Role | Clinical Utility |
|-----------|------|-----------------|
| hs-cTnT/I | Myocardial injury | Gold standard, 0/1h or 0/2h rule-out |
| Copeptin | Endogenous stress marker | Combined with troponin for single-draw rule-out |
| H-FABP | Early myocardial necrosis | Rises earlier than troponin (1-2h) |
| NT-proBNP | Myocardial wall stress | Prognostic in ACS, risk stratification |
| GDF-15 | Inflammation, ischemia | Emerging prognostic biomarker in ACS |
| MR-proANP | Atrial stretch | Differentiates cardiac vs non-cardiac dyspnea |

**Dual-marker rapid rule-out (copeptin + troponin):**
- If both negative at presentation, NPV >99.7% for MI
- Enables single blood draw exclusion in appropriate populations
- Reduces ED observation time by 2-4 hours
- Limitations: May miss very early presentation (<1 hour from symptom onset)

**Multi-marker risk stratification:**
- hs-troponin + NT-proBNP + GDF-15: Independent additive prognostic value
- Machine learning integration of multi-marker panels under investigation
- Point-of-care panels enabling prehospital ACS risk assessment

---

### AI-Enhanced ECG and Decision Support

**Deep learning ECG interpretation:**
- Convolutional neural networks can detect STEMI with >95% sensitivity and >90% specificity
- AI detection of STEMI equivalents (de Winter, Wellens, posterior MI) -- superior to emergency physician interpretation in several studies
- AI-detected reduced EF from ECG (Mayo Clinic algorithm): AUC 0.93 for EF <35%
- Subtle MI detection: AI algorithms identify ACS-associated ECG patterns invisible to human readers

**Prehospital AI-ECG transmission:**
- Real-time AI analysis of prehospital ECG transmitted to receiving hospital
- Automated cath lab activation reduces door-to-balloon time by 10-20 minutes
- Potential for triaging STEMI equivalents (currently frequently missed in the field)

**Clinical decision support integration:**
- Automated HEART score calculation from EMR data
- Real-time risk alerts based on vital signs, ECG, and laboratory values
- Natural language processing of clinical notes for atypical presentations
- Equity-aware algorithms addressing sex and racial disparities in ACS recognition

---

### Coronary CT Angiography (CCTA) in Chest Pain

**ROMICAT II, ACRIN-PA, and RAPID-CTCA trials:**
- CCTA for intermediate-risk chest pain in ED: Reduces time to diagnosis, safe discharge
- Negative CCTA: <1% 30-day MACE rate
- Enables direct anatomic visualization of coronary stenosis

**CT-derived fractional flow reserve (CT-FFR):**
- Computed from CCTA without additional imaging
- Identifies hemodynamically significant lesions (FFR <=0.80)
- Reduces unnecessary invasive angiography by 50-60%
- Integrated into chest pain pathways at high-volume centers

**Appropriateness for ED chest pain:**
- Low-to-intermediate risk (HEART 0-6), negative serial troponins
- Contraindicated: Hemodynamic instability, renal insufficiency, contrast allergy
- Not for STEMI or high-risk ACS (proceed directly to cath)

---

### Genetic Testing and Inherited Cardiac Conditions

**Indications for genetic testing in cardiac emergencies:**
- Unexplained cardiac arrest survivor <50 years
- Syncope with prolonged QTc, Brugada pattern, or ARVC features
- Family history of sudden cardiac death <40 years
- Postmortem molecular autopsy for unexplained sudden death

**Key channelopathies and genetic associations:**

| Condition | Gene(s) | ECG Pattern | Risk |
|-----------|---------|-------------|------|
| Long QT syndrome | KCNQ1, KCNH2, SCN5A | QTc >470ms (M), >480ms (F) | Torsades, SCD |
| Brugada syndrome | SCN5A | Coved ST elevation V1-V3 | VF, SCD |
| CPVT | RYR2, CASQ2 | Normal resting ECG, polymorphic VT with exercise | SCD |
| ARVC | PKP2, DSP, DSG2 | Epsilon waves, TWI V1-V3 | VT, SCD |
| Short QT syndrome | KCNH2, KCNQ1, KCNJ2 | QTc <330ms | AF, VF |

**Cascade screening:**
- First-degree relatives of sudden death victims or channelopathy patients
- ECG + echocardiogram screening at minimum
- Genetic testing if proband mutation identified
- Ongoing surveillance (phenotype may manifest later)

---

### Disparities in Cardiac Emergency Recognition

**Sex-based disparities:**
- Women with ACS have longer symptom-to-door times (median 30 min longer)
- Women less likely to receive emergent reperfusion for STEMI
- Women more likely to have non-obstructive CAD (MINOCA) -- requires different workup (CMR, provocative testing)
- MINOCA accounts for 5-15% of ACS; higher proportion in women

**Racial and ethnic disparities:**
- Black patients have higher out-of-hospital cardiac arrest mortality
- Hispanic patients face language barriers in symptom communication
- Lower rates of bystander CPR in minority neighborhoods
- Implicit bias affects triage decisions for chest pain

**Language-concordant care:**
- Spanish-language descriptions of cardiac symptoms:
  - Dolor de pecho (chest pain)
  - Opresion / presion en el pecho (chest pressure/tightness)
  - Palpitaciones (palpitations)
  - Mareos / desmayo (dizziness / fainting)
  - Falta de aire (shortness of breath)
  - Sudoracion fria (cold sweats)
- Validated Spanish-language patient education materials improve recognition and reduce time-to-presentation

---

### Systems-Level Quality Metrics

**STEMI systems of care benchmarks (ACC/AHA):**
- First medical contact-to-ECG: <10 minutes
- ECG-to-cath lab activation: <20 minutes
- Door-to-balloon (PCI): <90 minutes
- Transfer door-in-door-out (non-PCI hospital): <30 minutes
- Total ischemic time: <120 minutes

**Syncope quality metrics:**
- Admission rate for low-risk syncope: Target <10%
- Inappropriate telemetry monitoring: Reduce by >30%
- Syncope unit / observation pathway utilization
- 30-day return visit rate for missed cardiac diagnosis

**Chest pain quality metrics:**
- Length of stay for low-risk chest pain: <6-8 hours
- Missed MI rate: Target <1%
- Inappropriate stress testing rate
- Appropriate antiplatelet therapy at discharge for ACS

---

### Emerging Therapies and Future Directions

**Point-of-care troponin devices:**
- Fingerstick hs-troponin under development
- Potential for prehospital MI diagnosis by EMS
- Home monitoring for high-risk patients (post-PCI, heart failure)

**Wearable cardiac monitoring:**
- Continuous ECG (Apple Watch, KardiaMobile): AF detection validated
- Photoplethysmography for arrhythmia screening
- Emerging: Continuous troponin monitoring (biosensor technology)
- Patient-initiated ECG transmission during symptoms

**Pharmacogenomics in cardiac emergencies:**
- CYP2C19 genotyping for clopidogrel response (rapid vs poor metabolizers)
- Prehospital genotype-guided antiplatelet selection (investigational)
- Precision dosing of antiarrhythmics based on pharmacogenomic profile`,
      keyTerms: [
        {
          term: 'MINOCA',
          definition:
            'Myocardial Infarction with Non-Obstructive Coronary Arteries. Accounts for 5-15% of ACS, more common in women. Workup includes CMR and provocative testing for coronary spasm.',
          pronunciation: 'min-OH-ka',
        },
        {
          term: 'CT-FFR',
          definition:
            'CT-derived fractional flow reserve. Computed from coronary CTA to assess hemodynamic significance of stenosis without invasive catheterization. Reduces unnecessary PCI.',
        },
        {
          term: 'copeptin',
          definition:
            'C-terminal fragment of pro-vasopressin, released in response to endogenous stress. Combined with troponin for single-draw MI rule-out with NPV >99.7%.',
          pronunciation: 'koh-PEP-tin',
        },
        {
          term: 'molecular autopsy',
          definition:
            'Postmortem genetic testing of sudden cardiac death victims to identify inherited channelopathies or cardiomyopathies, enabling cascade screening of surviving family members.',
        },
        {
          term: 'cascade screening',
          definition:
            'Systematic genetic and clinical evaluation of first-degree relatives of patients with identified inherited cardiac conditions (channelopathies, cardiomyopathies).',
        },
        {
          term: 'AI-ECG',
          definition:
            'Artificial intelligence applied to ECG interpretation using deep learning (convolutional neural networks). Detects STEMI, reduced EF, channelopathies, and subtle ischemia with performance comparable to or exceeding cardiologists.',
        },
      ],
      analogies: [
        'AI-ECG interpretation is like having a cardiologist who has read millions of ECGs looking over every tracing in real time -- it catches patterns the human eye misses.',
        'CT-FFR is like using a weather simulation to predict whether a narrowing in a river will cause flooding downstream -- it answers the functional question from an anatomic image.',
        'Molecular autopsy for sudden death is like forensic DNA analysis at a crime scene -- it reveals the hidden genetic culprit and identifies family members who may be at risk.',
        'MINOCA is like a heart attack that plays by different rules -- the usual suspect (blocked artery) is not found at the scene, so you have to investigate alternative mechanisms.',
      ],
      clinicalNotes: `**Expert-level clinical pearls:**

1. **hs-troponin 0/1h algorithm:** In validated populations, the 0/1h rule-out has NPV >99.5%. However, very early presenters (<1h from symptom onset) may have false-negative results. Use clinical judgment and serial sampling when suspicion is high.

2. **MINOCA workup:** After ACS with non-obstructive coronaries, perform CMR (myocarditis? takotsubo? MI with recanalized thrombus?) and consider provocative testing for coronary vasospasm. Treat underlying mechanism.

3. **Sex-specific MI care:** Actively screen women for atypical presentations. Studies show women presenting with dyspnea or fatigue are less likely to receive timely troponin testing and ECG compared to men presenting with chest pain.

4. **Genetic testing after VF arrest:** All survivors of unexplained VF arrest <50 should undergo comprehensive genetic panel testing. Positive results change management (ICD, medication, activity restriction) and enable family screening.

5. **AI-ECG in practice:** FDA-cleared AI-ECG algorithms are now integrated into several EMR platforms. They augment but do not replace clinical judgment. Use as a second reader, particularly for STEMI equivalent detection and QTc measurement.

6. **Language equity:** Provide discharge instructions and warning sign education in the patient's primary language. Spanish-language cardiac education materials reduce 30-day ED revisits by 15-20% in studies.

7. **Prehospital system optimization:** EMS 12-lead ECG with AI-assisted interpretation and automated cath lab notification represents the current gold standard for STEMI systems of care. Work with your EMS medical director to implement these protocols.`,
    },
  },

  media: [
    {
      id: 'cardiac-warning-signs-infographic',
      type: 'diagram',
      filename: 'cardiac-warning-signs-infographic.svg',
      title: 'Cardiac Warning Signs Infographic',
      description: 'Visual guide to recognizing cardiac emergency warning signs in English and Spanish',
    },
    {
      id: 'acs-spectrum-diagram',
      type: 'diagram',
      filename: 'acs-spectrum-diagram.svg',
      title: 'Acute Coronary Syndrome Spectrum',
      description: 'Diagram showing the ACS continuum from stable angina to STEMI',
    },
    {
      id: 'ecg-stemi-equivalents',
      type: 'diagram',
      filename: 'ecg-stemi-equivalents.svg',
      title: 'STEMI Equivalent ECG Patterns',
      description: 'ECG examples of de Winter, Wellens, posterior MI, and Sgarbossa-positive patterns',
    },
    {
      id: 'syncope-risk-algorithm',
      type: 'diagram',
      filename: 'syncope-risk-algorithm.svg',
      title: 'Syncope Risk Stratification Algorithm',
      description: 'Flowchart for cardiac vs non-cardiac syncope evaluation',
    },
  ],

  citations: [
    {
      id: 'aha-chest-pain-2021',
      type: 'article',
      title: '2021 AHA/ACC Guideline for the Evaluation and Diagnosis of Chest Pain',
      authors: ['Gulati, M.', 'Levy, P.D.', 'et al.'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029',
      accessedDate: '2026-01-30',
    },
    {
      id: 'esc-acs-guidelines-2023',
      type: 'article',
      title: '2023 ESC Guidelines for the Management of Acute Coronary Syndromes',
      authors: ['Byrne, R.A.', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://academic.oup.com/eurheartj/article/44/38/3720/7243210',
      accessedDate: '2026-01-30',
    },
    {
      id: 'heart-score-validation',
      type: 'article',
      title: 'A clinical prediction rule for the diagnosis of coronary artery disease: validation, updating, and extension',
      authors: ['Six, A.J.', 'Backus, B.E.', 'Kelder, J.C.'],
      source: 'European Heart Journal',
      accessedDate: '2026-01-30',
    },
    {
      id: 'canadian-syncope-risk-score',
      type: 'article',
      title: 'Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope',
      authors: ['Thiruganasambandamoorthy, V.', 'et al.'],
      source: 'CMAJ',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'emergency-respiratory-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Respiratory Warning Signs' },
    { targetId: 'emergency-neurological-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Neurological Warning Signs' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['emergency medicine', 'cardiology', 'warning signs', 'patient education'],
    keywords: [
      'chest pain', 'angina', 'myocardial infarction', 'heart attack',
      'palpitations', 'syncope', 'fainting', 'arrhythmia', 'STEMI',
      'ACS', 'troponin', 'ECG', 'dolor de pecho', 'infarto',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'cardiology'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacWarnings;
