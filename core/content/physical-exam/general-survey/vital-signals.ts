/**
 * Vital Signs Overview - Physical Examination
 *
 * Comprehensive content on the fundamental vital signs: blood pressure,
 * heart rate, respiratory rate, temperature, and oxygen saturation.
 */

import { EducationalContent } from '../../types';

export const vitalSignalsOverview: EducationalContent = {
  id: 'physical-exam-general-survey-vital-signals',
  type: 'concept',
  name: 'Vital Signs Overview',
  alternateNames: ['Vital Signs', 'Cardinal Signs', 'Physiological Parameters'],

  levels: {
    1: {
      level: 1,
      summary: 'Vital signs are important measurements that tell doctors how your body is working.',
      explanation: `Vital signs are like the dashboard of your body - they show important numbers that tell doctors how well your body is working. Just like a car shows speed, fuel, and temperature, your body has important measurements too.

**The Five Main Vital Signs:**

**1. Blood Pressure**
- Shows how hard your heart is pumping blood
- Two numbers: top (when heart pumps) and bottom (when heart rests)
- Normal: around 120/80 or lower

**2. Heart Rate (Pulse)**
- How many times your heart beats in one minute
- Normal adults: 60-100 beats per minute
- Athletes often have slower heart rates (this is healthy!)

**3. Respiratory Rate**
- How many breaths you take in one minute
- Normal adults: 12-20 breaths per minute
- Babies breathe much faster than adults

**4. Temperature**
- Shows how hot or cold your body is
- Normal: around 98.6°F (37°C)
- Fever means your body is fighting sickness

**5. Oxygen Saturation**
- How much oxygen is in your blood
- Normal: 95-100%
- Measured with a small clip on your finger

**Why Vital Signs Matter:**
- Help doctors find problems early
- Show if someone is very sick
- Track how treatments are working
- Can save lives in emergencies`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against blood vessel walls' },
        { term: 'pulse', definition: 'The heartbeat felt in arteries; shows how fast the heart is beating' },
        { term: 'respiratory rate', definition: 'How many breaths a person takes per minute' },
        { term: 'oxygen saturation', definition: 'The percentage of oxygen carried by red blood cells' },
        { term: 'fever', definition: 'When body temperature is higher than normal, usually from illness' },
      ],
      analogies: [
        'Vital signs are like a car dashboard - they give you important information about how the engine is running.',
        'Your heart is like a pump - vital signs tell you if it\'s pumping at the right speed.',
      ],
      examples: [
        'When you run fast, your heart rate goes up - this is normal.',
        'If someone has a fever, their doctor checks vital signs to see how sick they are.',
        'A pulse oximeter clip on the finger tells doctors if someone needs extra oxygen.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vital signs are objective physiological measurements that provide essential information about a patient\'s clinical status and guide medical decision-making.',
      explanation: `## The Five Vital Signs

| Vital Sign | Normal Adult Range | Measurement Method |
|------------|-------------------|-------------------|
| Blood Pressure | <120/80 mmHg | Sphygmomanometer, automatic cuff |
| Heart Rate | 60-100 bpm | Pulse palpation, ECG monitor |
| Respiratory Rate | 12-20 breaths/min | Observation, chest movement |
| Temperature | 97.8-99.1°F (36.5-37.3°C) oral | Thermometer (oral, rectal, tympanic, temporal) |
| Oxygen Saturation | 95-100% | Pulse oximetry |

## Blood Pressure

**Understanding the Numbers:**
- **Systolic (top number)**: Pressure when heart contracts
- **Diastolic (bottom number)**: Pressure when heart relaxes
- **Measured in**: mmHg (millimeters of mercury)

**Categories:**
| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | <120 | <80 |
| Elevated | 120-129 | <80 |
| Hypertension Stage 1 | 130-139 | 80-89 |
| Hypertension Stage 2 | ≥140 | ≥90 |
| Hypertensive Crisis | >180 | >120 |

**Hypotension Definition**: <90/60 mmHg (context-dependent)

## Heart Rate

**Normal Ranges by Age:**
| Age Group | Normal Range |
|-----------|-------------|
| Newborns | 100-160 bpm |
| Infants | 90-150 bpm |
| Toddlers | 80-140 bpm |
| Preschoolers | 70-130 bpm |
| School-age | 65-110 bpm |
| Adolescents | 60-90 bpm |
| Adults | 60-100 bpm |
| Well-trained athletes | 40-60 bpm |

**Abnormal Patterns:**
- **Tachycardia**: >100 bpm (resting)
- **Bradycardia**: <60 bpm (resting)
- **Irregular rhythm**: May indicate arrhythmia

## Respiratory Rate

**Normal Ranges:**
| Age | Normal Range |
|-----|-------------|
| Newborn | 30-60 breaths/min |
| Infant (1-12 mo) | 25-45 |
| Toddler (1-2 yr) | 20-30 |
| Preschool (3-5 yr) | 20-25 |
| School-age (6-12 yr) | 18-25 |
| Adolescent | 12-20 |
| Adult | 12-20 |

**Abnormal Patterns:**
- **Tachypnea**: >20 breaths/min (adults), >40 (infants)
- **Bradypnea**: <12 breaths/min (adults)
- **Apnea**: Absence of breathing for >20 seconds

## Temperature

**Normal Ranges by Site:**
- Oral: 97.8-99.1°F (36.5-37.3°C)
- Rectal: 0.5-1°F higher than oral
- Axillary: 0.5-1°F lower than oral
- Tympanic: Similar to oral
- Temporal: Similar to oral

**Fever Definition**: ≥100.4°F (38°C) oral
**Hypothermia Definition**: <95°F (35°C)

## Oxygen Saturation

**Interpretation:**
| SpO2 Level | Interpretation |
|-----------|----------------|
| 95-100% | Normal |
| 91-94% | Hypoxemia; monitor |
| ≤90% | Severe hypoxemia; treatment needed |

**Factors Affecting Accuracy:**
- Poor circulation, cold hands, nail polish
- Carbon monoxide poisoning (falsely normal)
- Motion artifact`,
      keyTerms: [
        { term: 'systolic', definition: 'The top number in blood pressure; pressure during heart contraction', pronunciation: 'sis-TOL-ik' },
        { term: 'diastolic', definition: 'The bottom number in blood pressure; pressure during heart relaxation', pronunciation: 'dy-ah-STOL-ik' },
        { term: 'tachycardia', definition: 'Heart rate faster than 100 beats per minute at rest', pronunciation: 'tak-ee-KAR-dee-ah' },
        { term: 'bradycardia', definition: 'Heart rate slower than 60 beats per minute at rest', pronunciation: 'brad-ee-KAR-dee-ah' },
        { term: 'tachypnea', definition: 'Respiratory rate faster than 20 breaths per minute', pronunciation: 'tak-ip-NEE-ah' },
        { term: 'hypoxemia', definition: 'Low oxygen levels in the blood', pronunciation: 'hy-POK-see-mee-ah' },
      ],
      analogies: [
        'Blood pressure is like water pressure in pipes - too high can damage, too low won\'t reach everywhere.',
        'Your heart rate is like an engine RPM - higher when working hard, lower when resting.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vital signs reflect fundamental physiological processes including cardiovascular function, respiratory status, thermoregulation, and tissue oxygenation, with abnormal values indicating potential pathophysiology requiring systematic evaluation.',
      explanation: `## Physiological Basis of Vital Signs

### Blood Pressure Physiology

**Determinants of BP (MAP = CO × SVR):**
- MAP = Mean Arterial Pressure
- CO = Cardiac Output (HR × SV)
- SVR = Systemic Vascular Resistance

**MAP Calculation:**
MAP = Diastolic + 1/3(Systolic - Diastolic)
- Normal MAP: 70-100 mmHg
- MAP <65 indicates inadequate organ perfusion

**Autonomic Regulation:**
- Baroreceptors (carotid sinus, aortic arch) → Brainstem
- Sympathetic: Increases HR, contractility, SVR
- Parasympathetic: Decreases HR via vagus nerve
- Renin-angiotensin-aldosterone system: Long-term BP regulation

### Heart Rate Physiology

**SA Node Pacemaker:**
- Intrinsic rate: 60-100 bpm
- Influenced by:
  - Parasympathetic (vagus): Slows HR
  - Sympathetic (catecholamines): Increases HR
  - Temperature: ↑Temp → ↑HR (roughly 10 bpm/°C)

**Pulse Deficit:**
- Difference between apical and peripheral pulse
- Indicates weak peripheral pulses or arrhythmia

### Respiratory Rate Physiology

**Respiratory Centers:**
- Medullary center: Basic rhythm generation
- Pontine centers: Modulate breathing pattern
- Chemoreceptors:
  - Central (medulla): Respond to CO2/pH
  - Peripheral (carotid/aortic): Respond to O2, CO2, pH

**Normal Breathing Pattern:**
- Quiet breathing: Diaphragm (inspiration), elastic recoil (expiration)
- Ratio: ~1:2 (inspiration:expiration)

### Temperature Physiology

**Thermoregulation (Hypothalamus):**
- Set point: ~37°C (98.6°F)
- Heat production: Metabolism, muscle activity, shivering
- Heat loss: Radiation, convection, conduction, evaporation

**Circadian Variation:**
- Lowest: 4-6 AM
- Highest: 4-8 PM
- Variation: 0.5-1°C

### Oxygen Saturation Physiology

**Oxyhemoglobin Dissociation Curve:**
- P50: Partial pressure at 50% saturation
- Normal P50: 26-27 mmHg
- Factors shifting curve:
  - Right shift (O2 release): Acidosis, hypercapnia, fever, increased 2,3-DPG
  - Left shift (O2 binding): Alkalosis, hypothermia, decreased 2,3-DPG

## Vital Sign Interpretation Patterns

### Sepsis Screening (qSOFA Criteria)
| Criteria | Points |
|----------|--------|
| Respiratory rate ≥22 | 1 |
| Altered mentation | 1 |
| Systolic BP ≤100 | 1 |
| Score ≥2: High sepsis risk | |

### Systemic Inflammatory Response Syndrome (SIRS)
Requires ≥2 of:
1. Temperature >38°C or <36°C
2. Heart rate >90 bpm
3. Respiratory rate >20 or PaCO2 <32 mmHg
4. WBC >12,000 or <4,000 or >10% bands

### Shock Index
SI = HR / SBP
- Normal: 0.5-0.7
- >0.9: Indicates shock (early, before hypotension)

## Age-Specific Considerations

**Pediatric Vital Signs (Emergency Reference):**
| Age | HR (awake) | HR (sleeping) | RR | SBP |
|-----|-----------|---------------|----|-----|
| <1 yr | 100-160 | 80-140 | 25-45 | 70-100 |
| 1-3 yr | 90-150 | 70-110 | 20-30 | 80-100 |
| 3-8 yr | 80-120 | 65-100 | 18-25 | 85-110 |
| 8-12 yr | 70-110 | 60-90 | 15-20 | 90-120 |
| >12 yr | 60-100 | 50-90 | 12-20 | 100-135 |

**Geriatric Considerations:**
- Blunted febrile response (may not mount fever despite infection)
- Reduced HR variability
- Baseline hypertension common
- Orthostatic vital changes important`,
      keyTerms: [
        { term: 'MAP', definition: 'Mean Arterial Pressure; average pressure in arteries during cardiac cycle' },
        { term: 'pulse deficit', definition: 'Difference between apical heart rate and peripheral pulse rate' },
        { term: 'baroreceptors', definition: 'Pressure sensors in carotid sinus and aorta that regulate BP', pronunciation: 'bar-oh-ree-SEP-tors' },
        { term: 'orthostatic', definition: 'Relating to changes in position (lying to standing); vitals taken positionally', pronunciation: 'or-THO-stat-ik' },
        { term: 'shock index', definition: 'Heart rate divided by systolic BP; >0.9 suggests shock even if BP normal' },
      ],
      clinicalNotes: 'Vital signs should be measured after at least 5 minutes of rest. Orthostatic vitals (lying, sitting, standing) help evaluate volume status and autonomic function.',
    },
    4: {
      level: 4,
      summary: 'Advanced interpretation of vital signs integrates physiologic understanding with pattern recognition, identifying occult deterioration, and guiding resuscitation endpoints through systematic analysis of trends and interrelationships.',
      explanation: `## Advanced Vital Sign Analysis

### Blood Pressure Patterns

**Pulse Pressure Analysis:**
PP = SBP - DBP
- Normal: 30-50 mmHg
- **Wide PP (>50)**:
  - Aortic regurgitation
  - Arteriosclerosis (isolated systolic HTN)
  - Hyperthyroidism
  - Anemia, pregnancy
  - PDA, AV fistula
- **Narrow PP (<25)**:
  - Hypovolemia
  - Cardiac tamponade
  - Severe heart failure
  - Aortic stenosis

**Orthostatic Vital Signs:**
| Finding | Systolic Change | Diastolic Change | HR Change | Interpretation |
|----------|----------------|------------------|-----------|----------------|
| Normal | <10 drop | <5 drop | <10 increase | Euvolemic |
| Mild depletion | 10-20 drop | 5-10 drop | 10-20 increase | Mild hypovolemia |
| Severe depletion | >20 drop | >10 drop | >20 increase | Significant hypovolemia |

*Note: Orthostatic vitals have poor sensitivity/specificity; use clinical context.*

### Heart Rate Analysis

**Heart Rate Variability (HRV):**
- Higher HRV = Better autonomic function, generally healthier
- Decreased HRV = Worse prognosis (heart failure, post-MI, sepsis)
- Measured by SDNN, RMSSD, frequency domain analysis

**Sinus Arrhythmia:**
- Normal variation: HR increases with inspiration, decreases with expiration
- More pronounced in young, healthy individuals
- Disappears with aging, autonomic dysfunction

**Pulsus Alternans:**
- Alternating strong and weak pulses
- Indicates severe LV dysfunction
- Poor prognostic sign

**Pulsus Paradoxus:**
- Exaggerated (>10 mmHg) BP drop during inspiration
- Cardiac tamponade, severe asthma/COPD, constrictive pericarditis

### Respiratory Patterns

**Abnormal Breathing Patterns:**
| Pattern | Description | Causes |
|---------|-------------|--------|
| Cheyne-Stokes | Periodic breathing with crescendo-decrescendo | Heart failure, stroke, brain injury |
| Biot's | Irregular, variable depth and rate | Brain injury, meningitis |
| Apneustic | Prolonged inspiratory pause | Pontine lesions |
| Kussmaul | Deep, rapid, labored | DKA, metabolic acidosis |
| Agonal | Gasping, irregular breathing | Terminal event, cardiac arrest |

**Respiratory Rate as Early Warning:**
- RR >20 often precedes hypotension in sepsis
- RR >27 associated with increased mortality
- Most sensitive vital sign for clinical deterioration

### Temperature Patterns

**Fever Curves:**
| Pattern | Description | Classic Associations |
|---------|-------------|---------------------|
| Continuous | Elevated with minimal variation | Typhoid, lobar pneumonia |
| Remittent | Elevated with daily fluctuations >1°C | Viral infections, TB |
| Intermittent | Febrile episodes with normal periods | Malaria, abscess |
| Relapsing | Febrile and afebrile periods | Hodgkin lymphoma, relapsing fever |
| Hectic | Wide swings with rigors | Empyema, sepsis |

**Temperature Toxin Relationships:**
| Temp Range | Likely Etiology |
|------------|----------------|
| <38.5°C | Viral, mild bacterial |
| 38.5-39.5°C | Typical bacterial, viral |
| >39.5°C | Influenza, bacterial, meningitis |
| >41°C | Heat stroke, malignant hyperthermia |

### Oxygenation and Ventilation

**SpO2-PaO2 Correlation:**
- SpO2 90% ≈ PaO2 60 mmHg
- SpO2 80% ≈ PaO2 45 mmHg
- SpO2 70% ≈ PaO2 35 mmHg

**Oxygen Desaturation Index:**
- ODI = number of desaturations ≥4% per hour
- Used for sleep apnea assessment

**A-a Gradient:**
A-a gradient = PAO2 - PaO2
- PAO2 = (FiO2 × 713) - (PaCO2/0.8)
- Normal A-a gradient = Age/4 + 4
- Increased gradient: V/Q mismatch, shunt, diffusion defect
- Normal gradient: Hypoventilation, low FiO2

## Early Warning Scores

**NEWS2 (National Early Warning Score 2):**
| Parameter | 3 | 2 | 1 | 0 | 1 | 2 | 3 |
|-----------|---|---|---|---|---|---|---|
| RR | ≤8 | | 9-11 | 12-20 | | 21-24 | ≥25 |
| SpO2 | ≤91 | 92-93 | 94-95 | ≥96 | | | |
| Supplemental O2 | | | Yes | No | | | |
| SBP | ≤90 | 91-100 | 101-110 | 111-219 | | | ≥220 |
| Pulse | ≤40 | | 41-50 | 51-90 | | 91-110 | 111-130 | ≥131 |
| Level of consciousness | | | | Alert | Voice | Pain | Unresponsive |
| Temp | ≤35.0 | | 35.1-36.0 | 36.1-38.0 | 38.1-39.0 | ≥39.1 | |

*Score ≥5: Consider sepsis; ≥7: Critical risk*

## Pediatric Advanced Assessment

**PEWS (Pediatric Early Warning Score):**
- Age-adjusted parameters
- Includes work of breathing, perfusion, mental status
- Higher RR baseline than adults

**Compensated Shock in Children:**
- Maintains BP until late (≥30% blood loss)
- Signs: Tachycardia, delayed capillary refill, decreased urine output
- Hypotension = late, pre-arrest sign`,
      keyTerms: [
        { term: 'pulse pressure', definition: 'Difference between systolic and diastolic blood pressure' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated (>10mmHg) drop in BP during inspiration', pronunciation: 'PAR-ah-DOK-sus' },
        { term: 'pulsus alternans', definition: 'Alternating strong and weak pulse beats; indicates severe LV dysfunction' },
        { term: 'Cheyne-Stokes respiration', definition: 'Periodic breathing with crescendo-decrescendo pattern and apneic periods' },
        { term: 'Kussmaul breathing', definition: 'Deep, rapid, labored breathing from metabolic acidosis' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen gradient; evaluates gas exchange efficiency' },
      ],
      clinicalNotes: 'Vital sign trends are more valuable than single measurements. Serial measurements showing deterioration (e.g., rising RR, dropping BP, rising HR) should trigger escalation before critical thresholds are reached.',
    },
    5: {
      level: 5,
      summary: 'Expert-level vital sign analysis integrates physiologic monitoring with pattern recognition, prognostication, and resuscitation guidance, recognizing limitations and using advanced metrics for clinical decision-making.',
      explanation: `## Critical Care Vital Sign Applications

### Resuscitation Endpoints

**MAP Targets by Condition:**
| Condition | Target MAP | Rationale |
|-----------|-----------|-----------|
| Septic shock | ≥65 mmHg | Autoregulation preserved >65 |
| Hypertensive emergency | Reduce 25% in first hour | Prevent cerebral hypoperfusion |
| Spinal cord injury | 85-90 mmHg for 7 days | Improves cord perfusion |
| Traumatic brain injury | ≥80 mmHg | Prevent secondary injury |
| Intracerebral hemorrhage | <130 SBP | Reduce hematoma expansion |

**Fluid Responsiveness Assessment:**
| Method | Positive Predictor | Limitations |
|--------|-------------------|-------------|
| Stroke volume variation | >10-13% | Requires sinus rhythm, controlled ventilation |
| Pulse pressure variation | >13% | Same as above |
| Passive leg raise | CO increase ≥10% | Works with spontaneous breathing, arrhythmias |
| End-expiratory occlusion | CO increase ≥5% | Requires controlled ventilation |
| CVP change | Not predictive | Not recommended |

### Advanced Hemodynamic Monitoring

**Cardiac Output Measurement:**
1. **Thermodilution (PAC)**: Gold standard, invasive
2. **Arterial waveform analysis**: Less invasive
3. **Esophageal Doppler**: Minimally invasive
4. **Bioreactance (NICOM)**: Non-invasive

**Shock Classification by Vitals + CO/SVR:**
| Type | CO | SVR | CVP | Typical Scenario |
|------|----|-----|-----|-----------------|
| Cardiogenic | ↓ | ↑ | ↑ | Pump failure |
| Distributive (early) | ↑ | ↓ | ↓/N | Sepsis, anaphylaxis |
| Distributive (late) | ↓ | ↓ | ↑ | Septic shock |
| Hypovolemic | ↓ | ↑ | ↓ | Hemorrhage |
| Obstructive | ↓ | ↑ | ↑ | PE, tamponade |

### Prognostic Vital Sign Patterns

**Predictive Vital Sign Scores:**

**SOFA Score (Sepsis-Related Organ Failure):**
| Parameter | 0 | 1 | 2 | 3 | 4 |
|-----------|---|---|---|---|---|
| Respiratory (PaO2/FiO2) | ≥400 | 300-399 | 200-299 | 100-199 (with resp. support) | <100 (with resp. support) |
| Coagulation (platelets) | ≥150 | 100-149 | 50-99 | 20-49 | <20 |
| Liver (bilirubin) | <1.2 | 1.2-1.9 | 2-5.9 | 6-11.9 | >12 |
| Cardiovascular (MAP) | ≥70 | <70 | Dopamine ≤5 or dobutamine | Dopamine >5 or epi ≤0.1 | Dopamine >15 or epi >0.1 |
| CNS (GCS) | 15 | 13-14 | 10-12 | 6-9 | <6 |
| Renal (creatinine) | <1.2 | 1.2-1.9 | 2.0-3.4 | 3.5-4.9 | >5.0 |

**NEWS2 Mortality Correlation:**
| Score | 24-hour Risk | 48-hour Risk |
|-------|-------------|--------------|
| 0-4 | 0.4% | 0.6% |
| 5-6 | 3.1% | 4.2% |
| 7-8 | 7.6% | 10.1% |
| ≥9 | 22.1% | 28.0% |

### Advanced Concepts

**Physiologic Reserve:**
- Young patients maintain vitals until critical (crash vs. gradual decline)
- Elderly/chronically ill have reduced reserve (vitals abnormal earlier)
- Frail patients have limited compensatory ability

**Vital Sign Lag:**
- Vital signs lag behind tissue hypoperfusion
- Serum lactate: Better marker of tissue hypoxia
- ScvO2/SvO2: Global oxygen delivery marker
- Central venous-to-arterial PCO2 gap: Tissue perfusion marker

**Permissive Hypotension:**
- Trauma: Target SBP 80-90 (until bleeding controlled)
- Prevents dislodging clots, worsening hemorrhage
- Contraindicated in TBI, spinal cord injury

**Permissive Hypercapnia:**
- ARDS: Allow PaCO2 up to 100 (if pH ≥7.15)
- Reduces ventilator-induced lung injury
- Contra: Increased ICP, pulmonary hypertension

### Special Populations

**Pregnancy Vital Sign Changes:**
| Parameter | Non-pregnant | Pregnant | Change |
|-----------|-------------|----------|--------|
| HR | 70 | 85 | +15-20 |
| SBP | 110 | 105 | -5 to -10 |
| DBP | 70 | 55 | -10 to -15 |
| RR | 12-16 | 16-20 | +2-4 |
| Temp | Normal | +0.6°C baseline | Slight increase |

**Neonatal Vital Signs:**
- HR: 100-160 (can be 80-160 during sleep)
- RR: 30-60 (periodic breathing normal)
- BP: Mean gestational age + weeks of life
- Preterm: Lower baseline BP

### Limitations and Pitfalls

**Technical Limitations:**
- NIBP: Motion artifact, wrong cuff size, arrhythmias
- Pulse ox: Poor perfusion, CO poisoning, dark skin pigmentation (accuracy concerns)
- Temporal thermometers: Variable accuracy
- Electronic vs. manual: Manual auscultation gold standard for BP

**Clinical Interpretation Pitfalls:**
- Treating numbers, not patient (treat the patient, not the monitor)
- Over-reliance on normal ranges (context matters)
- Missing compensatory tachycardia in beta-blocked patients
- Assuming normal vitals = wellness (occult sepsis)`,
      keyTerms: [
        { term: 'stroke volume variation', definition: 'Respiratory variation in stroke volume during mechanical ventilation; predicts fluid responsiveness' },
        { term: 'pulse pressure variation', definition: 'Respiratory variation in pulse pressure; predicts fluid responsiveness in ventilated patients' },
        { term: 'passive leg raise', definition: 'Auto-transfusion of ~300mL blood from legs; reversibly tests fluid responsiveness' },
        { term: 'permissive hypotension', definition: 'Accepting lower than normal BP in trauma until bleeding controlled' },
        { term: 'permissive hypercapnia', definition: 'Accepting elevated CO2 in ARDS to reduce ventilator injury' },
        { term: 'autoregulation', definition: 'Organ ability to maintain constant blood flow despite BP changes; cerebral, renal' },
      ],
      clinicalNotes: `Expert Clinical Pearls:
1. The most abnormal vital sign in a set is often the most important
2. Trends matter more than absolute values - deterioration is actionable
3. Compensated patients may have normal vitals despite critical illness
4. In trauma patients, "normal" vitals can exist with significant blood loss (young, healthy compensate until late)
5. Always ask about patient's baseline when interpreting vitals
6. SpO2 can be normal with significant respiratory distress (patient compensating)
7. Shock index (HR/SBP) >0.9 predicts mortality better than BP alone
8. Never withhold antibiotics for sepsis while waiting for cultures if vitals abnormal
9. Digital BP cuffs overestimate BP in atrial fibrillation (manual auscultation preferred)
10. "Treating the monitor" vs. treating the patient - always correlate with clinical assessment`,
    },
  },

  media: [
    {
      id: 'vital-signs-reference',
      type: 'diagram',
      filename: 'vital-signs-reference.pdf',
      title: 'Vital Signs Normal Ranges Reference',
      description: 'Quick reference table for vital signs by age group',
    },
    {
      id: 'orthostatic-vitals',
      type: 'diagram',
      filename: 'orthostatic-vitals.svg',
      title: 'Orthostatic Vital Sign Measurement',
      description: 'Technique for measuring orthostatic changes',
    },
  ],

  citations: [
    {
      id: 'bates-vital-signs',
      type: 'textbook',
      title: 'Vital Signs and Measurements',
      authors: ['Bickley, L.S.'],
      source: "Bates' Guide to Physical Examination and History Taking",
      chapter: '4',
    },
    {
      id: 'news2-guideline',
      type: 'article',
      title: 'National Early Warning Score (NEWS) 2',
      authors: ['Royal College of Physicians'],
      source: 'RCP London',
    },
    {
      id: 'sepsis-guidelines',
      type: 'article',
      title: 'Surviving Sepsis Campaign',
      authors: ['Society of Critical Care Medicine', 'European Society of Intensive Care Medicine'],
      source: 'Critical Care Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-temperature', targetType: 'topic', relationship: 'related', label: 'Temperature Measurement' },
    { targetId: 'physical-exam-vital-signs-bp', targetType: 'topic', relationship: 'related', label: 'Blood Pressure' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'condition-shock', targetType: 'condition', relationship: 'related', label: 'Shock' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'thermoregulatory'],
    topics: ['physical-examination', 'vital-signs', 'clinical-assessment', 'monitoring'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'critical-care', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vitalSignalsOverview;
