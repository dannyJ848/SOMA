/**
 * Vital Signs - Physical Examination
 *
 * Comprehensive content on vital signs assessment including temperature, pulse,
 * respiration, blood pressure, oxygen saturation, and pain assessment.
 */

import { EducationalContent } from '../../types';

export const vitalSigns: EducationalContent = {
  id: 'physical-exam-general-survey-vital-signs',
  type: 'topic',
  name: 'Vital Signs',
  alternateNames: ['Cardinal Signs', 'Physiological Parameters', 'Patient Vitals'],

  levels: {
    1: {
      level: 1,
      summary: 'Vital signs are important measurements doctors take to see how your body is working.',
      explanation: `Vital signs are like a health dashboard for your body. They tell doctors how well your heart, lungs, and other body parts are working. Just like a car has a dashboard showing speed, temperature, and fuel, your body has important measurements too.

**The Main Vital Signs:**

**1. Temperature**
- Shows how hot or cold your body is inside
- Normal is around 98.6°F (37°C)
- A fever means your body is fighting germs

**2. Pulse (Heart Rate)**
- How many times your heart beats in one minute
- Normal adults: 60-100 beats per minute
- You can feel it on your wrist or neck

**3. Breathing Rate**
- How many breaths you take in one minute
- Normal adults: 12-20 breaths per minute
- Babies breathe much faster than adults

**4. Blood Pressure**
- Shows how hard blood pushes against blood vessel walls
- Two numbers: top (pumping) and bottom (resting)
- Normal: around 120/80

**5. Oxygen Level**
- How much oxygen is in your blood
- Normal: 95-100%
- Measured with a small clip on your finger

**6. Pain**
- How much hurt you feel
- Doctors ask you to rate it from 0-10
- Helps them know if you need medicine

**Why Vitals Matter:**
- Find sickness early
- See if treatments are working
- Help in emergencies
- Keep you safe during doctor visits`,
      keyTerms: [
        { term: 'temperature', definition: 'How hot or cold your body is' },
        { term: 'pulse', definition: 'Your heartbeat felt in different places on your body' },
        { term: 'respiration', definition: 'Another word for breathing' },
        { term: 'blood pressure', definition: 'The force of blood moving through your body' },
        { term: 'oxygen saturation', definition: 'How much oxygen is in your blood' },
        { term: 'fever', definition: 'When your body temperature is higher than normal' },
      ],
      analogies: [
        'Vital signs are like a car dashboard - they show important information about how your body is running.',
        'Your heart is like a pump that pushes blood through pipes called blood vessels.',
        'Taking your temperature is like checking if your house is too hot or too cold.',
      ],
      examples: [
        'When you run and play, your heart beats faster and you breathe quicker - this is normal!',
        'If you have the flu, you might get a fever as your body fights the germs.',
        'A small clip on your finger can tell doctors if your blood has enough oxygen.',
        'Doctors can feel your pulse on your wrist to count your heartbeats.',
      ],
      patientCounselingPoints: [
        'Rest for 5 minutes before having vitals taken for the most accurate reading.',
        'Tell your doctor if you feel sick or in pain when they check your vitals.',
        'Normal vital signs can be different for each person - talk to your doctor about your normal.',
        'If you take blood pressure medicine, take it as prescribed and keep track of your numbers at home.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vital signs are objective measurements of basic body functions that provide essential information about a patient\'s physiological status.',
      explanation: `## Overview of Vital Signs

Vital signs are measurements of the body's basic functions. They help healthcare providers assess general health, detect medical problems, and monitor progress.

**The Six Vital Signs:**

| Vital Sign | What It Measures | Normal Range | How It's Measured |
|------------|------------------|--------------|-------------------|
| Temperature | Body heat | 97.8-99.1°F oral | Thermometer |
| Pulse | Heart rate | 60-100 bpm | Felt at pulse points |
| Respiration | Breathing rate | 12-20/min | Observation of chest |
| Blood Pressure | Circulatory pressure | <120/80 mmHg | Cuff and stethoscope |
| Oxygen Saturation | Blood oxygen | 95-100% | Pulse oximeter on finger |
| Pain | Subjective discomfort | 0/10 (scale) | Patient self-report |

## Temperature

**Measurement Sites:**
- Oral (mouth): Most common for adults
- Rectal: Most accurate, especially for children
- Axillary (armpit): Less accurate but easy
- Tympanic (ear): Quick, convenient
- Temporal (forehead): Non-invasive

**Fever Categories:**
- Low-grade: 99.1-100.4°F
- Fever: 100.4-100.9°F
- High fever: 101-103°F
- Very high fever: Above 103°F

## Pulse (Heart Rate)

**Normal Pulse Rates by Age:**
- Adults: 60-100 bpm
- Children (6-12): 70-110 bpm
- Toddlers (1-2): 80-130 bpm
- Infants: 90-150 bpm

**Where to Feel Pulse:**
- Radial pulse (wrist) - most common
- Carotid pulse (neck) - used in emergencies
- Brachial pulse (inner elbow) - used for infants
- Femoral pulse (groin) - used in emergencies

## Respiration Rate

**Normal Breathing Rates by Age:**
- Adults: 12-20 breaths per minute
- School-age children: 16-25 breaths per minute
- Preschoolers: 20-25 breaths per minute
- Toddlers: 20-30 breaths per minute
- Infants: 25-45 breaths per minute

**What to Observe:**
- How fast the person is breathing
- How deep the breaths are
- Is breathing regular or irregular?
- Any effort or difficulty breathing?

## Blood Pressure

**Understanding the Numbers:**
- Systolic (top): Pressure when heart beats
- Diastolic (bottom): Pressure when heart rests
- Measured in mmHg (millimeters of mercury)

**Categories:**
| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | Less than 120 | Less than 80 |
| Elevated | 120-129 | Less than 80 |
| High Stage 1 | 130-139 | 80-89 |
| High Stage 2 | 140 or higher | 90 or higher |
| Crisis | Higher than 180 | Higher than 120 |

## Oxygen Saturation

**Understanding SpO2:**
- 95-100%: Normal
- 91-94%: Low - watch carefully
- 90% or below: Too low - needs treatment

**What Affects Accuracy:**
- Cold hands
- Dark nail polish
- Poor circulation
- Movement during measurement

## Pain Assessment

**Pain Scale (0-10):**
- 0: No pain
- 1-3: Mild pain
- 4-6: Moderate pain
- 7-10: Severe pain

**Characteristics to Describe:**
- Location: Where does it hurt?
- Quality: Is it sharp, dull, burning, throbbing?
- Severity: How bad on a scale of 0-10?
- Duration: How long does it last?
- What makes it better or worse?`,
      keyTerms: [
        { term: 'systolic', definition: 'The top number in blood pressure reading; pressure when heart contracts', pronunciation: 'sis-TOL-ik' },
        { term: 'diastolic', definition: 'The bottom number in blood pressure reading; pressure when heart relaxes', pronunciation: 'dy-ah-STOL-ik' },
        { term: 'bradycardia', definition: 'Heart rate slower than 60 beats per minute', pronunciation: 'brad-ee-KAR-dee-ah' },
        { term: 'tachycardia', definition: 'Heart rate faster than 100 beats per minute', pronunciation: 'tak-ee-KAR-dee-ah' },
        { term: 'hypertension', definition: 'High blood pressure', pronunciation: 'hy-per-TEN-shun' },
        { term: 'hypotension', definition: 'Low blood pressure', pronunciation: 'hy-po-TEN-shun' },
        { term: 'SpO2', definition: 'The percentage of oxygen saturation in the blood' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a hose - it needs to be strong enough to reach everywhere but not so strong it damages the pipes.',
        'Your heart rate is like the RPM gauge on a car - it goes up when you work hard and down when you rest.',
        'Oxygen saturation is like a fuel gauge showing how much oxygen your blood is carrying.',
      ],
      examples: [
        'An athlete might have a resting heart rate of 50 bpm, which is healthy for them.',
        'A person with a fever of 102°F might have a faster heart rate and breathe more quickly.',
        'Blood pressure of 150/95 would be classified as Stage 2 hypertension.',
        'An SpO2 of 88% would need oxygen therapy.',
      ],
      patientCounselingPoints: [
        'Know your normal blood pressure and keep track of it at home.',
        'Sit quietly for 5 minutes before having blood pressure measured.',
        'Don\'t drink caffeine or exercise 30 minutes before blood pressure measurement.',
        'Always be honest about your pain level - it helps doctors help you.',
        'If you measure temperature at home, wait 15 minutes after eating or drinking before using an oral thermometer.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vital signs are objective physiological measurements that reflect fundamental body functions including cardiovascular performance, respiratory status, thermoregulation, and tissue oxygenation.',
      explanation: `## Physiological Basis of Vital Signs

Vital signs measure the body\'s most basic functions and provide critical information about health status. Abnormal values indicate potential pathophysiology requiring systematic evaluation.

## Temperature

**Thermoregulation:**
- Controlled by the hypothalamus (body\'s thermostat)
- Normal set point: approximately 37°C (98.6°F)
- Heat production: metabolism, muscle activity, shivering
- Heat loss: radiation, convection, conduction, evaporation

**Circadian Variation:**
- Lowest: 4-6 AM
- Highest: 4-8 PM
- Normal daily variation: 0.5-1°C (0.9-1.8°F)

**Fever vs Hyperthermia:**
| Feature | Fever | Hyperthermia |
|---------|-------|--------------|
| Cause | Hypothalamic set point increase | Failure of thermoregulation |
| Example | Infection, inflammation | Heat stroke, malignant hyperthermia |
| Response to antipyretics | Yes | No |
| Set point | Elevated | Normal |

**Temperature Measurement Sites:**
| Site | Normal Range | Accuracy Compared to Rectal |
|------|--------------|----------------------------|
| Rectal | 36.6-37.8°C | Gold standard |
| Oral | 35.8-37.3°C | 0.6°C lower |
| Axillary | 35.5-37.0°C | 1.0°C lower |
| Tympanic | 36.4-37.8°C | Variable |
| Temporal | 35.8-37.8°C | Variable |

## Pulse (Heart Rate)

**Physiology:**
- SA node (pacemaker) generates electrical impulses
- Intrinsic rate: 60-100 bpm
- Influenced by autonomic nervous system:
  - Parasympathetic (vagus): slows HR
  - Sympathetic: increases HR

**Factors Affecting Heart Rate:**
| Factor | Effect |
|--------|--------|
| Exercise | Increases |
| Fever | Increases ~10 bpm per 1°C |
| Anxiety/Stress | Increases |
| Medications | Varies (beta blockers decrease, albuterol increases) |
| Athletic conditioning | Decreases resting HR |
| Age | Decreases with age |

**Pulse Assessment:**
- Rate: beats per minute
- Rhythm: regular or irregular
- Strength: bounding, normal, weak, thready
- Equality: same on both sides

**Common Rhythm Abnormalities:**
- Sinus arrhythmia: varies with breathing (normal in young people)
- Premature beats: extra, early beats
- Atrial fibrillation: irregularly irregular
- Bradycardia: <60 bpm (may be normal in athletes)

## Respiration Rate

**Respiratory Center:**
- Medulla oblongata generates basic rhythm
- Pons modulates breathing pattern
- Chemoreceptors respond to:
  - CO2 levels (primary driver)
  - O2 levels (secondary driver)
  - pH levels

**Normal Breathing:**
- Eupnea: normal, quiet breathing
- Diaphragm is primary muscle
- Accessory muscles at rest: minimal
- I:E ratio approximately 1:2

**Abnormal Breathing Patterns:**
| Pattern | Description | Causes |
|---------|-------------|--------|
| Tachypnea | >20/min adults | Fever, hypoxia, acidosis, anxiety |
| Bradypnea | <12/min adults | Narcotics, increased ICP, hypothyroidism |
| Apnea | No breathing | Sleep apnea, CNS depression |
| Cheyne-Stokes | Crescendo-decrescendo with apnea | Heart failure, stroke |
| Kussmaul | Deep, rapid | Metabolic acidosis (DKA) |

## Blood Pressure

**Determinants of Blood Pressure:**
MAP = CO × SVR
- MAP = Mean Arterial Pressure
- CO = Cardiac Output (HR × SV)
- SVR = Systemic Vascular Resistance

**MAP Calculation:**
MAP = DBP + (1/3 × (SBP - DBP))
- Normal MAP: 70-100 mmHg
- MAP <65 indicates inadequate organ perfusion

**Blood Pressure Classification (ACC/AHA 2017):**
| Category | SBP | DBP |
|----------|-----|-----|
| Normal | <120 | <80 |
| Elevated | 120-129 | <80 |
| Stage 1 Hypertension | 130-139 | 80-89 |
| Stage 2 Hypertension | ≥140 | ≥90 |
| Hypertensive Crisis | >180 | >120 |

**White Coat Hypertension:**
- BP elevated in medical setting
- Normal at home
- Requires confirmation with home/ambulatory monitoring

**Masked Hypertension:**
- BP normal in medical setting
- Elevated at home
- Associated with increased cardiovascular risk

## Oxygen Saturation

**Physiology:**
- Hemoglobin carries oxygen in blood
- Each hemoglobin molecule binds 4 oxygen molecules
- SpO2 measures percentage of hemoglobin binding sites occupied by oxygen

**Oxyhemoglobin Dissociation Curve:**
- Sigmoid curve relating PaO2 to SaO2
- Factors causing right shift (more O2 release):
  - Acidosis (low pH)
  - Hypercapnia (high CO2)
  - Increased temperature
  - Increased 2,3-DPG
- Factors causing left shift (more O2 binding):
  - Alkalosis (high pH)
  - Hypothermia
  - Decreased 2,3-DPG

**SpO2 Interpretation:**
| SpO2 | Interpretation |
|------|----------------|
| 95-100% | Normal |
| 91-94% | Mild hypoxemia - monitor |
| ≤90% | Moderate-severe hypoxemia - treat |

## Pain Assessment

**Pain Assessment Framework (PQRST):**
- P: Provocation/Palliation - What causes it? What helps?
- Q: Quality - Sharp, dull, burning, aching, throbbing?
- R: Region/Radiation - Where? Does it spread?
- S: Severity - 0-10 scale
- T: Timing - When did it start? Constant or intermittent?

**Types of Pain:**
- Nociceptive: Tissue damage (somatic, visceral)
- Neuropathic: Nerve damage or dysfunction
- Inflammatory: Mediated by inflammatory response
- Functional: Abnormal processing without clear tissue damage`,
      keyTerms: [
        { term: 'hypothalamus', definition: 'Brain region that regulates body temperature and other autonomic functions' },
        { term: 'SA node', definition: 'Sinoatrial node; the heart\'s natural pacemaker located in the right atrium' },
        { term: 'eupnea', definition: 'Normal, quiet, effortless breathing' },
        { term: 'MAP', definition: 'Mean Arterial Pressure; average pressure in the arteries during one cardiac cycle' },
        { term: 'cardiac output', definition: 'Volume of blood pumped by the heart per minute; CO = HR × SV' },
        { term: 'systemic vascular resistance', definition: 'Resistance to blood flow in the systemic circulation' },
        { term: 'oxyhemoglobin dissociation curve', definition: 'Graph showing relationship between blood oxygen saturation and partial pressure' },
        { term: 'nociceptive pain', definition: 'Pain from actual or potential tissue damage' },
      ],
      clinicalNotes: 'Always measure vital signs after at least 5 minutes of rest. Compare to previous values and patient\'s baseline when available. Trends over time are more informative than single measurements.',
    },
    4: {
      level: 4,
      summary: 'Advanced vital sign interpretation integrates physiologic understanding with pattern recognition to identify occult deterioration, guide resuscitation, and predict clinical outcomes.',
      explanation: `## Advanced Vital Sign Analysis

### Temperature Patterns

**Fever Curves and Clinical Correlations:**
| Pattern | Description | Classic Associations |
|---------|-------------|---------------------|
| Continuous | Elevated with minimal fluctuation | Typhoid fever, lobar pneumonia |
| Remittent | Elevated with daily fluctuations >1°C | Viral infections, tuberculosis |
| Intermittent | Febrile episodes with normal periods | Malaria, abscess |
| Relapsing | Febrile periods alternating with afebrile | Hodgkin lymphoma, relapsing fever |
| Hectic | Wide fluctuations with rigors | Empyema, septicemia |

**Temperature Etiology Clues:**
| Temperature Range | Likely Causes |
|-------------------|---------------|
| <38°C (100.4°F) | Viral URI, mild bacterial infection |
| 38-38.9°C (100.4-102°F) | Typical bacterial, viral infections |
| 39-39.9°C (102-103.9°F) | Influenza, bacterial pneumonia, pyelonephritis |
| ≥40°C (104°F) | Bacteremia, meningitis, heat stroke, drug fever |

**Fever of Unknown Origin (FUO) Classification:**
- Classic: 3 weeks of outpatient or 1 week of inpatient investigation without diagnosis
- Nosocomial: Fever in hospitalized patient not present on admission
- Neutropenic: Fever in patient with neutrophil count <500/mm³
- HIV-associated: Fever in HIV patient with varied etiology

### Pulse Analysis

**Heart Rate Variability (HRV):**
- Variation in time between heartbeats
- Higher HRV indicates healthy autonomic function
- Decreased HRV associated with:
  - Increased mortality after MI
  - Heart failure progression
  - Sepsis severity
  - Diabetic neuropathy
  - Aging

**Pulse Character Assessment:**
| Pulse Quality | Description | Clinical Significance |
|---------------|-------------|----------------------|
| Bounding | Full, increased amplitude | Aortic regurgitation, hyperkinetic states |
| Normal | Moderate strength | Healthy cardiovascular system |
| Weak/Thready | Difficult to palpate | Hypovolemia, shock, peripheral vascular disease |
| Alternans | Alternating strong/weak beats | Severe LV dysfunction |

**Heart Rate Response to Orthostasis:**
| Age | Normal Increase | Abnormal Response |
|-----|----------------|-------------------|
| Young adult | <20 bpm | >30 bpm suggests hypovolemia |
| Elderly | <10 bpm | >20 bpm significant |
| On beta-blocker | <5 bpm | May not show typical response |

### Respiration Pattern Recognition

**Comprehensive Respiratory Pattern Assessment:**
| Pattern | Rate | Depth | Rhythm | Associated Conditions |
|---------|------|-------|--------|----------------------|
| Eupnea | 12-20 | Normal | Regular | Healthy |
| Tachypnea | >20 | Normal/variable | Regular | Fever, acidosis, pain |
| Hyperpnea | Normal/↑ | Deep | Regular | Exercise, metabolic acidosis |
| Kussmaul | >20 | Deep, rapid | Regular | DKA, renal failure |
| Cheyne-Stokes | Variable | Variable | Cyclical with apnea | Heart failure, stroke |
| Biot\'s | Variable | Variable | Irregular with apnea | Brain injury, meningitis |
| Apneustic | Variable | Prolonged inspiration | Irregular | Pontine lesion |

**Respiratory Rate as Early Warning Sign:**
- RR >20 often precedes hypotension in sepsis
- RR >27 strongly associated with increased mortality
- Most sensitive vital sign for clinical deterioration
- Changes in RR predict cardiac arrest 6-12 hours before event

### Advanced Blood Pressure Analysis

**Pulse Pressure Assessment:**
PP = SBP - DBP
- Normal: 30-50 mmHg

**Wide Pulse Pressure (>50 mmHg):**
- Aortic regurgitation
- Arteriosclerosis (isolated systolic hypertension)
- Hyperthyroidism
- Anemia
- Pregnancy
- PDA, AV fistula

**Narrow Pulse Pressure (<25 mmHg):**
- Hypovolemia
- Cardiac tamponade
- Severe heart failure
- Aortic stenosis

**Orthostatic Vital Sign Interpretation:**
| Finding | Systolic Drop | Diastolic Drop | HR Increase | Interpretation |
|----------|---------------|----------------|-------------|----------------|
| Normal | <10 | <5 | <10 | Euvolemic |
| Mild depletion | 10-20 | 5-10 | 10-20 | Mild hypovolemia |
| Severe depletion | >20 | >10 | >20 | Significant hypovolemia |

*Note: Orthostatic vitals have limited sensitivity and specificity. Clinical context is essential.*

**Pulsus Paradoxus:**
- Exaggerated (>10 mmHg) BP drop during inspiration
- Normal: <10 mmHg variation
- Causes:
  - Cardiac tamponade (classic)
  - Severe asthma/COPD
  - Constrictive pericarditis
  - Tension pneumothorax

### Oxygenation Assessment

**A-a Gradient:**
A-a gradient = PAO2 - PaO2

Where PAO2 = (FiO2 × 713) - (PaCO2/0.8)

Normal A-a gradient = Age/4 + 4

**Interpretation:**
- Increased gradient: V/Q mismatch, shunt, diffusion defect
- Normal gradient: Hypoventilation, low FiO2

**Causes of Hypoxemia with Normal vs Increased A-a Gradient:**

| Normal A-a Gradient | Increased A-a Gradient |
|---------------------|------------------------|
| Hypoventilation | V/Q mismatch |
| High altitude | Intrapulmonary shunting |
| Low FiO2 | Diffusion impairment |

**SpO2-PaO2 Correlation:**
| SpO2 | Approximate PaO2 |
|------|------------------|
| 90% | 60 mmHg |
| 80% | 45 mmHg |
| 70% | 35 mmHg |

### Pain Assessment in Complex Patients

**Special Populations:**
- **Elderly:** May present with atypical pain (confusion, decreased appetite)
- **Cognitively impaired:** Use behavioral scales (PAINAD, CPAINT)
- **Neonates:** Physiological indicators (HR, BP, O2 saturation changes)
- **Chronic pain patients:** Distinguish acute exacerbation vs baseline

**Red Flag Symptoms with Pain:**
- Fever with back pain (epidural abscess)
- Pain with neurological deficits (spinal cord compression)
- Chest pain with diaphoresis (acute coronary syndrome)
- Headache with focal deficits (space-occupying lesion)`,
      keyTerms: [
        { term: 'FUO', definition: 'Fever of Unknown Origin; prolonged fever without diagnosis despite investigation' },
        { term: 'Heart Rate Variability', definition: 'Variation in time intervals between heartbeats; marker of autonomic function' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated drop in BP during inspiration (>10 mmHg)', pronunciation: 'PAR-ah-DOK-sus' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen gradient; measures gas exchange efficiency' },
        { term: 'orthostasis', definition: 'Postural change; relating to upright position from lying down' },
        { term: 'pulse pressure', definition: 'Difference between systolic and diastolic blood pressure' },
      ],
      clinicalNotes: 'Trends in vital signs are more valuable than isolated measurements. Serial measurements showing deterioration should trigger escalation before critical thresholds are reached.',
    },
    5: {
      level: 5,
      summary: 'Expert-level vital sign integration for clinical decision-making, prognostication, and resuscitation guidance in critical care settings.',
      explanation: `## Critical Applications of Vital Signs

### Resuscitation Endpoints

**MAP Targets by Condition:**
| Condition | Target MAP | Evidence Base |
|-----------|-----------|---------------|
| Septic shock | ≥65 mmHg | Autoregulation preserved >65 |
| Hypertensive emergency | Reduce 25% first hour | Prevent cerebral hypoperfusion |
| Spinal cord injury | 85-90 mmHg × 7 days | Improves cord perfusion |
| Traumatic brain injury | ≥80 mmHg | Prevents secondary injury |
| Intracerebral hemorrhage | <130 SBP | Reduces hematoma expansion |

**Permissive Hypotension:**
- Trauma without TBI: Target SBP 80-90 mmHg
- Rationale: Prevents clot dislodgment until bleeding controlled
- Contraindications: TBI, spinal cord injury

**Permissive Hypercapnia:**
- ARDS: Allow PaCO2 up to 100 mmHg if pH ≥7.15
- Reduces ventilator-induced lung injury
- Contraindications: Increased ICP, pulmonary hypertension

### Early Warning Scores and Mortality Prediction

**NEWS2 (National Early Warning Score 2):**
| Parameter | 3 | 2 | 1 | 0 | 1 | 2 | 3 |
|-----------|---|---|---|---|---|---|---|
| RR | ≤8 | | 9-11 | 12-20 | | 21-24 | ≥25 |
| SpO2 | ≤91 | 92-93 | 94-95 | ≥96 | | | |
| Supplemental O2 | | | Yes | No | | | |
| SBP | ≤90 | 91-100 | 101-110 | 111-219 | | | ≥220 |
| Pulse | ≤40 | | 41-50 | 51-90 | | 91-110 | 111-130 | ≥131 |
| LOC | | | | Alert | Voice | Pain | Unresponsive |
| Temp | ≤35.0 | | 35.1-36.0 | 36.1-38.0 | 38.1-39.0 | ≥39.1 | |

**NEWS2 Mortality Correlation:**
| Score | 24-hour Risk | 48-hour Risk |
|-------|--------------|--------------|
| 0-4 | 0.4% | 0.6% |
| 5-6 | 3.1% | 4.2% |
| 7-8 | 7.6% | 10.1% |
| ≥9 | 22.1% | 28.0% |

**SOFA Score for Sepsis:**
| Score | Respiratory | Coagulation | Liver | Cardiovascular | CNS | Renal |
|-------|-------------|-------------|-------|----------------|-----|-------|
| 0 | ≥400 | ≥150 | <1.2 | ≥70 | 15 | <1.2 |
| 1 | 300-399 | 100-149 | 1.2-1.9 | <70 | 13-14 | 1.2-1.9 |
| 2 | 200-299 | 50-99 | 2-5.9 | Dopamine ≤5 | 10-12 | 2.0-3.4 |
| 3 | 100-199 | 20-49 | 6-11.9 | Dopamine >5 | 6-9 | 3.5-4.9 |
| 4 | <100 | <20 | >12 | Epi >0.1 | <6 | ≥5.0 |

**qSOFA (Quick SOFA):**
- Respiratory rate ≥22
- Altered mentation
- Systolic BP ≤100
- Score ≥2: High sepsis risk

### Advanced Hemodynamic Monitoring

**Fluid Responsiveness Assessment:**
| Method | Positive Predictor | Limitations |
|--------|-------------------|-------------|
| Stroke volume variation | >10-13% | Sinus rhythm, controlled ventilation |
| Pulse pressure variation | >13% | Same as above |
| Passive leg raise | CO increase ≥10% | Works with arrhythmias, spontaneous breathing |
| End-expiratory occlusion | CO increase ≥5% | Controlled ventilation only |
| CVP change | Not predictive | Not recommended |

**Cardiac Output Methods:**
1. Thermodilution (PAC) - Gold standard, invasive
2. Arterial waveform analysis - Less invasive
3. Esophageal Doppler - Minimally invasive
4. Bioreactance (NICOM) - Non-invasive

**Shock Classification by Vitals + CO/SVR:**
| Type | CO | SVR | CVP | Typical Scenario |
|------|----|-----|-----|-----------------|
| Cardiogenic | ↓ | ↑ | ↑ | Pump failure |
| Distributive (early) | ↑ | ↓ | ↓/N | Sepsis, anaphylaxis |
| Distributive (late) | ↓ | ↓ | ↑ | Septic shock |
| Hypovolemic | ↓ | ↑ | ↓ | Hemorrhage |
| Obstructive | ↓ | ↑ | ↑ | PE, tamponade |

### Special Population Considerations

**Pregnancy Physiologic Changes:**
| Parameter | Non-pregnant | Pregnant | Change |
|-----------|-------------|----------|--------|
| HR | 70 | 85 | +15-20 bpm |
| SBP | 110 | 105 | -5 to -10 |
| DBP | 70 | 55 | -10 to -15 |
| RR | 12-16 | 16-20 | +2-4 |
| Temp | Normal | +0.6°C | Slight increase |

**Geriatric Considerations:**
- Blunted febrile response (may not mount fever with infection)
- Reduced HR variability
- Impaired thermoregulation
- Baseline hypertension common
- Compensated until late deterioration

**Pediatric Age-Specific Norms:**
| Age | HR | RR | SBP |
|-----|----|----|-----|
| Newborn | 100-160 | 30-60 | 60-90 |
| Infant (1-12 mo) | 90-150 | 25-45 | 70-100 |
| Toddler (1-2 yr) | 80-130 | 20-30 | 80-100 |
| Preschool (3-5 yr) | 70-130 | 20-25 | 85-110 |
| School-age (6-12 yr) | 65-110 | 18-25 | 90-120 |
| Adolescent | 60-90 | 12-20 | 100-135 |

### Limitations and Pitfalls

**Technical Limitations:**
- NIBP: Motion artifact, wrong cuff size, arrhythmias
- Pulse ox: Poor perfusion, CO poisoning, skin pigmentation concerns
- Temperature: Variable accuracy by site and device
- Electronic vs. manual: Manual auscultation gold standard for BP

**Clinical Interpretation Pitfalls:**
- Treating numbers instead of patient
- Over-reliance on normal ranges
- Missing compensated shock in young, healthy patients
- Assuming normal vitals = wellness
- Missing vital sign lag (tissue hypoperfusion precedes vitals changes)

**Tissue Perfusion Markers (Superior to Vitals):**
- Serum lactate: Marker of anaerobic metabolism
- ScvO2/SvO2: Global oxygen delivery
- Venous-to-arterial PCO2 gap: Tissue perfusion
- Capillary refill time (with caveats)

### Integration with Clinical Assessment

**The "Sick vs. Not Sick" Recognition:**
- Pattern recognition of illness severity
- Combines vitals with appearance
- More accurate than vitals alone

**Vital Sign Bundle for Deterioration Detection:**
| Parameter | Deterioration Sign |
|-----------|-------------------|
| HR | Increasing trend >20% from baseline |
| RR | >20 or increasing trend |
| SBP | <100 or decreasing trend >20% |
| SpO2 | <94% or decreasing trend |
| Temp | >38°C or <36°C |
| Pain | New or worsening |

**Expert Clinical Pearls:**
1. Trends matter more than absolute values
2. The most abnormal vital sign is often most important
3. Young, healthy patients compensate until late (crash)
4. Elderly have minimal reserve (deteriorate early)
5. Beta-blockers blunt tachycardic response
6. Always obtain baseline when possible
7. Correlate with clinical appearance
8. Shock index (HR/SBP) >0.9 predicts mortality better than BP alone
9. "Treat the patient, not the monitor"
10. Normal vitals don\'t rule out serious illness`,
      keyTerms: [
        { term: 'permissive hypotension', definition: 'Accepting lower than normal BP in trauma until bleeding controlled' },
        { term: 'permissive hypercapnia', definition: 'Ventilation strategy accepting elevated CO2 to reduce lung injury' },
        { term: 'autoregulation', definition: 'Organ ability to maintain constant blood flow despite BP changes' },
        { term: 'fluid responsiveness', definition: 'Increase in cardiac output after fluid challenge' },
        { term: 'CVP', definition: 'Central Venous Pressure; pressure in thoracic vena cava near right atrium' },
        { term: 'shock index', definition: 'HR divided by SBP; >0.9 indicates shock even if BP normal' },
        { term: 'lactate', definition: 'Marker of anaerobic metabolism; elevated in tissue hypoperfusion' },
      ],
      clinicalNotes: `Expert Clinical Pearls:
1. The most abnormal vital sign in a set is often the most important
2. Trends matter more than absolute values - deterioration is actionable
3. Compensated patients may have normal vitals despite critical illness
4. In trauma, "normal" vitals can exist with significant blood loss in young, healthy patients
5. Always ask about patient's baseline when interpreting vitals
6. SpO2 can be normal with significant respiratory distress
7. Shock index (HR/SBP) >0.9 predicts mortality better than BP alone
8. Never withhold antibiotics for sepsis while waiting for cultures if vitals abnormal
9. Digital BP cuffs overestimate BP in atrial fibrillation (manual auscultation preferred)
10. "Treating the monitor" vs treating the patient - always correlate with clinical assessment`,
    },
  },

  media: [
    {
      id: 'vital-signs-reference-table',
      type: 'diagram',
      filename: 'vital-signs-reference-table.svg',
      title: 'Vital Signs Normal Ranges Reference',
      description: 'Quick reference table for vital signs by age group',
    },
    {
      id: 'blood-pressure-cuff-technique',
      type: 'image',
      filename: 'blood-pressure-technique.jpg',
      title: 'Blood Pressure Measurement Technique',
      description: 'Proper positioning for blood pressure measurement',
    },
    {
      id: 'pulse-points-anatomy',
      type: 'diagram',
      filename: 'pulse-points-anatomy.svg',
      title: 'Palpable Pulse Points',
      description: 'Anatomical locations for palpating peripheral pulses',
    },
  ],

  citations: [
    {
      id: 'bates-vital-signs',
      type: 'textbook',
      title: 'The Physical Examination: General Survey, Vital Signs, and Pain',
      authors: ['Bickley, L.S.'],
      source: "Bates' Guide to Physical Examination and History Taking, 14th Edition",
      chapter: '4',
    },
    {
      id: 'acc-aha-hypertension',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton, P.K.', 'Carey, R.M.', 'Aronow, W.S.', 'et al.'],
      source: 'Hypertension, 2018, Vol 71, pp e13-e115',
    },
    {
      id: 'news2-rcp',
      type: 'article',
      title: 'National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS',
      authors: ['Royal College of Physicians'],
      source: 'RCP London, 2017',
    },
    {
      id: 'sepsis-campaign',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      authors: ['Evans, L.', 'Rhodes, A.', 'Alhazzani, W.', 'et al.'],
      source: 'Critical Care Medicine, 2021, Vol 49(11), pp e1069-e1135',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-general-survey-appearance', targetType: 'concept', relationship: 'sibling', label: 'General Appearance' },
    { targetId: 'cardiovascular-system', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
    { targetId: 'respiratory-system', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'condition-shock', targetType: 'condition', relationship: 'related', label: 'Shock' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'nervous'],
    topics: ['physical-examination', 'vital-signs', 'clinical-assessment', 'monitoring', 'patient-evaluation'],
    keywords: ['blood pressure', 'heart rate', 'respiratory rate', 'temperature', 'SpO2', 'pulse oximetry', 'pain assessment'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'family-medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vitalSigns;
