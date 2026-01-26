/**
 * Respiratory Rate - Vital Signs
 *
 * Comprehensive content on respiratory rate assessment, patterns,
 * abnormalities, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const respiratoryRate: EducationalContent = {
  id: 'physical-exam-vital-signs-respiratory-rate',
  type: 'concept',
  name: 'Respiratory Rate',
  alternateNames: ['RR', 'Breathing Rate', 'Ventilatory Rate'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory rate counts how many breaths you take in one minute.',
      explanation: `Breathing is how you get oxygen into your body and carbon dioxide out. Counting how many times you breathe in one minute is called your respiratory rate.

**Normal Breathing:**
- Adults: 12-20 breaths per minute
- Children breathe faster than adults
- Babies breathe even faster

**How to Count Breaths:**
- Watch the chest rise and fall
- Each rise AND fall counts as one breath
- Count for a full minute, or count for 30 seconds and multiply by 2
- It helps if the person doesn't know you're counting (so they breathe normally)

**Fast Breathing (Tachypnea):**
- More than 20 breaths per minute in adults
- Causes: Exercise, fever, anxiety, lung problems, pain

**Slow Breathing (Bradypnea):**
- Fewer than 12 breaths per minute in adults
- Causes: Sleep, some medications, brain problems

**When to Worry:**
- Breathing very fast when not exercising
- Breathing very slowly
- Working hard to breathe (using shoulder muscles, flaring nostrils)
- Lips or fingernails turning blue
- Unable to speak full sentences without pausing for breath`,
      keyTerms: [
        { term: 'respiratory rate', definition: 'The number of breaths taken in one minute' },
        { term: 'tachypnea', definition: 'Breathing faster than normal' },
        { term: 'bradypnea', definition: 'Breathing slower than normal' },
        { term: 'dyspnea', definition: 'Difficulty breathing or feeling short of breath' },
      ],
      analogies: [
        'Your lungs are like balloons that fill up with air when you breathe in and deflate when you breathe out.',
        'Breathing rate is like the speed on a fan - it can go faster or slower depending on how much air your body needs.',
      ],
      examples: [
        'After running, you breathe faster to get more oxygen to your tired muscles.',
        'When you have a fever, you breathe faster because your body is working harder.',
      ],
    },
    2: {
      level: 2,
      summary: 'Respiratory rate reflects the balance between oxygen demand and delivery, with abnormal patterns indicating respiratory, metabolic, or neurological dysfunction.',
      explanation: `## Respiratory Rate Fundamentals

Respiratory rate (RR) is the number of breaths per minute. It is often called the "neglected vital sign" but is a sensitive marker of clinical deterioration.

**Normal Ranges:**
| Age | Normal Range (breaths/min) |
|-----|---------------------------|
| Newborn | 30-60 |
| Infant (1-12 mo) | 30-50 |
| Toddler (1-3 yr) | 24-40 |
| Preschool (3-5 yr) | 22-34 |
| School age (6-12 yr) | 18-30 |
| Adolescent | 12-20 |
| Adult | 12-20 |

## Assessment Technique

**Proper Measurement:**
1. Patient should be at rest, unaware of measurement if possible
2. Observe chest rise and fall
3. Count for 30-60 seconds
4. Note rhythm, depth, and effort

**Components to Assess:**
- **Rate:** Breaths per minute
- **Rhythm:** Regular vs. irregular
- **Depth:** Tidal volume (shallow, normal, deep)
- **Effort:** Use of accessory muscles, retractions

## Abnormal Respiratory Rates

**Tachypnea (RR >20 in adults):**
| Category | Causes |
|----------|--------|
| Respiratory | Pneumonia, asthma, PE, COPD exacerbation |
| Cardiovascular | Heart failure, pulmonary edema |
| Metabolic | Metabolic acidosis (DKA, sepsis) |
| Other | Pain, anxiety, fever, anemia |

**Bradypnea (RR <12 in adults):**
- Opioid overdose
- CNS depression (stroke, trauma, drugs)
- Hypothyroidism
- Sleep

## Abnormal Breathing Patterns

| Pattern | Description | Associated Conditions |
|---------|-------------|----------------------|
| Kussmaul | Deep, rapid | Metabolic acidosis (DKA) |
| Cheyne-Stokes | Crescendo-decrescendo with apnea | Heart failure, stroke |
| Biot's | Irregular with apnea | Brainstem lesion |
| Apneustic | Prolonged inspiration | Pontine lesion |
| Agonal | Gasping, irregular | Near death, cardiac arrest |

## Signs of Respiratory Distress

**Inspection Findings:**
- Accessory muscle use (SCM, scalenes, intercostals)
- Nasal flaring
- Pursed-lip breathing
- Tripod positioning
- Suprasternal/supraclavicular retractions
- Intercostal/subcostal retractions

**Concerning Signs:**
- Cyanosis (central or peripheral)
- Inability to speak in full sentences
- Altered mental status
- Paradoxical breathing (chest falls with inspiration)`,
      keyTerms: [
        { term: 'tachypnea', definition: 'Respiratory rate greater than 20 breaths per minute in adults', pronunciation: 'tak-ip-NEE-ah' },
        { term: 'bradypnea', definition: 'Respiratory rate less than 12 breaths per minute in adults', pronunciation: 'brad-ip-NEE-ah' },
        { term: 'dyspnea', definition: 'Subjective sensation of difficulty breathing or breathlessness', pronunciation: 'DISP-nee-ah' },
        { term: 'Kussmaul breathing', definition: 'Deep, rapid breathing pattern associated with metabolic acidosis' },
        { term: 'accessory muscles', definition: 'Muscles not normally used for breathing that activate during respiratory distress' },
      ],
    },
    3: {
      level: 3,
      summary: 'Respiratory rate is controlled by brainstem respiratory centers responsive to chemical and mechanical inputs, with pattern abnormalities localizing neurological lesions.',
      explanation: `## Respiratory Control Physiology

**Central Control Centers:**
\`\`\`
Cortex (voluntary control)
         ↓
Pontine Centers:
  - Pneumotaxic center (upper pons): Limits inspiration
  - Apneustic center (lower pons): Prolongs inspiration
         ↓
Medullary Centers:
  - Dorsal respiratory group (DRG): Inspiratory pacemaker
  - Ventral respiratory group (VRG): Expiratory + forceful inspiration
         ↓
Spinal cord → Respiratory muscles
\`\`\`

**Chemical Control:**

| Receptor | Location | Stimulus | Response |
|----------|----------|----------|----------|
| Central chemoreceptors | Medulla (ventral surface) | ↑CO2 (via ↓pH in CSF) | ↑Ventilation |
| Peripheral chemoreceptors | Carotid body, aortic body | ↓PaO2 (<60), ↑CO2, ↓pH | ↑Ventilation |

**Normal Response to CO2:**
- 1 mmHg ↑PaCO2 → ~2-3 L/min ↑minute ventilation
- Most sensitive driver of ventilation (at normal O2 levels)
- Response blunted in chronic hypercapnia (COPD)

**Hypoxic Ventilatory Response:**
- Minimal until PaO2 <60 mmHg
- In chronic CO2 retention: Becomes primary drive ("hypoxic drive")
- Caution with supplemental O2 in severe COPD

## Mechanical Reflexes

**Hering-Breuer Reflex:**
- Stretch receptors in airways → vagal afferents → terminate inspiration
- Protective against overinflation
- Active mainly during exercise and in infants

**Irritant Receptors:**
- Located in airway epithelium
- Respond to irritants, particles, chemicals
- Trigger cough, bronchoconstriction

**J Receptors (Juxtacapillary):**
- Located in alveolar walls near capillaries
- Respond to interstitial edema, emboli
- Cause rapid, shallow breathing and dyspnea

## Respiratory Pattern Analysis

**Localizing Lesions by Pattern:**

| Pattern | Location | Mechanism |
|---------|----------|-----------|
| Cheyne-Stokes | Bilateral hemispheric or diencephalic | Delayed feedback to chemoreceptors |
| Central neurogenic hyperventilation | Midbrain/upper pons | Loss of cortical inhibition |
| Apneustic | Lower pons | Loss of pneumotaxic "off switch" |
| Cluster breathing | Lower pons/medulla | Irregular respiratory drive |
| Ataxic (Biot's) | Medulla | Random medullary neuron firing |
| Agonal | Severe medullary injury | Minimal brainstem function |

**Cheyne-Stokes Pathophysiology:**
1. Apnea → ↑CO2, ↓O2
2. Chemoreceptor stimulation → hyperventilation
3. ↓CO2 below apneic threshold → apnea
4. Cycle repeats
5. Prolonged circulation time enhances oscillation (heart failure)

## Clinical Assessment

**Work of Breathing:**
| Sign | Indicates |
|------|-----------|
| Nasal flaring | Increased airway resistance |
| Tracheal tug | Large negative intrathoracic pressure |
| Intercostal retractions | Decreased lung compliance |
| Subcostal retractions | Diaphragmatic descent impeded |
| Paradoxical breathing | Diaphragm fatigue |

**Quantifying Respiratory Distress:**
Various scores exist (RASS, Richmond, etc.) but clinical gestalt includes:
- Speaking in words vs. sentences
- Positioning preference
- Mental status
- Accessory muscle use
- Respiratory rate trend (more valuable than single measurement)

## Mechanical Ventilation Concepts

**Minute Ventilation (VE):**
\`\`\`
VE = RR × VT
Normal: ~6-8 L/min
\`\`\`

**Alveolar Ventilation (VA):**
\`\`\`
VA = RR × (VT - VD)
VD = Dead space (~150 mL in adults)
\`\`\`

**Dead Space Considerations:**
- Anatomic: Conducting airways
- Alveolar: Ventilated but not perfused alveoli
- Physiologic: Anatomic + alveolar
- ↑Dead space → need ↑VE to maintain VA`,
      keyTerms: [
        { term: 'dorsal respiratory group', definition: 'Medullary neurons primarily responsible for inspiratory rhythm generation' },
        { term: 'central chemoreceptors', definition: 'Medullary neurons responding to CSF pH (reflecting CO2) to regulate ventilation' },
        { term: 'Hering-Breuer reflex', definition: 'Vagal reflex from pulmonary stretch receptors inhibiting inspiration at high lung volumes' },
        { term: 'J receptors', definition: 'Juxtacapillary receptors sensing interstitial congestion, causing rapid shallow breathing' },
        { term: 'minute ventilation', definition: 'Total volume of air moved per minute; respiratory rate × tidal volume' },
        { term: 'dead space', definition: 'Volume of ventilated gas not participating in gas exchange' },
      ],
      clinicalNotes: 'In patients with chronic CO2 retention, the hypoxic drive may become the primary ventilatory stimulus. Give supplemental O2 cautiously but do not withhold necessary oxygen.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding integrates respiratory mechanics, control system dynamics, and pathophysiology to guide assessment and intervention in complex respiratory failure.',
      explanation: `## Neural Networks in Respiratory Control

### Pre-Bötzinger Complex
- Located in ventrolateral medulla
- Contains essential rhythm-generating neurons
- Expresses NK1 receptors (substance P responsive)
- Lesion causes fatal apnea
- Target for opioid-induced respiratory depression

### Bötzinger Complex
- Expiratory neurons
- Inhibits inspiratory neurons at end of inspiration
- Active expiration during exercise

### Parafacial Respiratory Group (pFRG)
- Involved in active expiration
- Rhythm-generating capacity
- May provide "backup" rhythm

## Integrated Control Model

**Feedback Loop:**
\`\`\`
                    Setpoint (determined by sleep/wake state,
                              cortical input, metabolic demand)
                                    ↓
    ┌──────────────────────────────────────────────────────────┐
    │                   Controller (brainstem)                  │
    │   - Responds to error signal (actual vs. setpoint)       │
    │   - Adjusts rate and depth                               │
    └────────────────────────┬─────────────────────────────────┘
                             ↓
    ┌──────────────────────────────────────────────────────────┐
    │                   Effectors (muscles)                     │
    │   - Diaphragm, intercostals, accessory muscles           │
    └────────────────────────┬─────────────────────────────────┘
                             ↓
    ┌──────────────────────────────────────────────────────────┐
    │                   Plant (lungs, airways)                  │
    │   - Gas exchange occurs                                   │
    └────────────────────────┬─────────────────────────────────┘
                             ↓
    ┌──────────────────────────────────────────────────────────┐
    │                   Sensors (chemoreceptors)                │
    │   - Measure PaO2, PaCO2, pH                              │
    │   - Feedback to controller                               │
    └──────────────────────────────────────────────────────────┘
\`\`\`

## Advanced Pathophysiology

### Loop Gain in Periodic Breathing
- Loop gain = response magnitude / disturbance magnitude
- High loop gain → unstable system → periodic breathing
- Contributors to high loop gain:
  - High chemosensitivity (hypercapnic response)
  - Low functional residual capacity (rapid PCO2 changes)
  - Long circulation time (delayed feedback)
- Heart failure: All three factors may be present

### Central Sleep Apnea Pathophysiology
- Respiratory control instability
- CO2 reserve: Difference between resting PCO2 and apneic threshold
- ↓CO2 reserve → easier to drop below apneic threshold
- Treatment: Optimize heart failure, consider ASV (adaptive servo-ventilation)

### Neuromuscular Respiratory Failure

**Diaphragm Weakness Assessment:**
| Parameter | Normal | Weakness |
|-----------|--------|----------|
| MIP (maximal inspiratory pressure) | >-80 cmH2O | >-60 cmH2O |
| Sniff nasal pressure | >70 cmH2O | <40 cmH2O |
| Paradoxical breathing | Absent | Present |
| FVC sitting vs. supine | <10% drop | >25% drop |

**Respiratory Failure in Neuromuscular Disease:**
1. Reduced vital capacity → CO2 retention
2. Weak cough → secretion retention → atelectasis
3. Sleep-disordered breathing (REM hypoventilation first)
4. Daytime respiratory failure

### Dyspnea Mechanisms

**Efferent-Reafferent Mismatch:**
- Brain expects certain afferent input for given motor command
- Mismatch between expected and actual → dyspnea sensation
- Explains dyspnea with:
  - Increased respiratory load (asthma, COPD)
  - Decreased muscle capacity
  - Mechanical disadvantage (hyperinflation)

**Afferent Sources of Dyspnea:**
| Source | Mechanism |
|--------|-----------|
| Chest wall mechanoreceptors | Sense muscle tension, displacement |
| Pulmonary C-fibers | Interstitial congestion |
| Irritant receptors | Airway inflammation |
| Chemoreceptors | Hypercapnia, hypoxia |
| Metaboreceptors (muscles) | Metabolic acidosis during exercise |

## Assessment Tools

### Capnography
**Waveform Analysis:**
- Phase I: Anatomic dead space (no CO2)
- Phase II: Mixing dead space and alveolar gas
- Phase III: Alveolar plateau (EtCO2)

**Clinical Applications:**
| Finding | Significance |
|---------|--------------|
| ↑EtCO2 slope | Airway obstruction (V/Q mismatch) |
| No plateau | Severe obstruction |
| Sudden ↓EtCO2 | PE, cardiac arrest, circuit disconnect |
| Gradual ↓EtCO2 | Hyperventilation, ↓cardiac output |
| Curare cleft | Return of spontaneous ventilation |

### Ventilator Waveforms
**Flow-Time:**
- Assess inspiratory flow pattern
- Detect auto-PEEP (flow doesn't reach zero)

**Pressure-Time:**
- Plateau pressure: Alveolar distending pressure
- Driving pressure: Plateau - PEEP (correlates with outcomes)
- Stress index: Concave up = over-distension

**Flow-Volume Loops:**
- Assess response to bronchodilators
- Detect upper airway obstruction

## Respiratory Rate as Prognostic Marker

**Early Warning Scores:**
- NEWS2, MEWS: RR heavily weighted
- RR >25 often precedes clinical deterioration
- Trend more important than single value

**Sepsis Recognition:**
- qSOFA: RR ≥22 is one criterion
- Elevated RR may be earliest sign of sepsis
- Often precedes hypotension by hours`,
      keyTerms: [
        { term: 'pre-Bötzinger complex', definition: 'Essential rhythm-generating region in ventrolateral medulla; site of opioid respiratory depression' },
        { term: 'loop gain', definition: 'Ratio of ventilatory response to disturbance; high loop gain predisposes to periodic breathing' },
        { term: 'CO2 reserve', definition: 'Difference between resting PaCO2 and apneic threshold; reduced in central sleep apnea' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; correlates with ARDS outcomes' },
        { term: 'efferent-reafferent mismatch', definition: 'Discordance between motor command and sensory feedback causing dyspnea sensation' },
      ],
      clinicalNotes: 'Respiratory rate >25 breaths/min is one of the strongest predictors of clinical deterioration and should prompt urgent evaluation.',
    },
    5: {
      level: 5,
      summary: 'Expert-level understanding integrates advanced ventilator management, weaning protocols, novel monitoring technologies, and evidence-based management of respiratory failure.',
      explanation: `## Advanced Ventilatory Management

### Ventilator-Induced Lung Injury (VILI)
**Mechanisms:**
| Type | Cause | Prevention |
|------|-------|------------|
| Volutrauma | Overdistension | Limit VT to 6 mL/kg PBW |
| Atelectrauma | Cyclic opening/closing | Appropriate PEEP |
| Biotrauma | Inflammatory mediator release | Lung-protective ventilation |
| Stress concentration | Regional heterogeneity | Prone positioning |

**ARDSNet Protocol:**
- VT: 6 mL/kg predicted body weight
- Plateau pressure: ≤30 cmH2O
- PEEP/FiO2 tables (low vs. high PEEP strategy)
- Target: pH 7.30-7.45, SpO2 88-95%

### Driving Pressure-Guided Ventilation
**Evidence:**
- Amato 2015: Driving pressure most strongly associated with survival
- ΔP = VT / Crs (compliance)
- Target: ΔP <15 cmH2O
- Adjusting VT to minimize ΔP may improve outcomes

### PEEP Optimization Strategies

| Method | Approach | Considerations |
|--------|----------|----------------|
| PEEP/FiO2 table | Protocol-based | Simple but not individualized |
| Best compliance | Incremental PEEP trial | May identify "open lung" |
| Stress index | Pressure-time curve analysis | Requires expertise |
| Transpulmonary pressure | Esophageal manometry | Accounts for chest wall |
| EIT | Regional ventilation imaging | Research/advanced |

### Transpulmonary Pressure Monitoring
**Concept:**
- Ptp = Paw - Ppl (esophageal approximates pleural)
- Ptp reflects actual lung stress
- Particularly useful in obesity, abdominal compartment syndrome

**EPVent-2 Trial:**
- Esophageal pressure-guided PEEP vs. high PEEP
- No difference in mortality
- May be useful in selected populations (obesity, abdominal HTN)

### Weaning and Liberation

**Daily Spontaneous Breathing Trial (SBT) Protocol:**
1. Screen for readiness: FiO2 ≤40%, PEEP ≤8, minimal vasopressors
2. SBT method: T-piece, PSV ≤8, or CPAP ≤5
3. Duration: 30-120 minutes
4. Success criteria: No distress, RR <35, stable HR/BP, SpO2 ≥90%

**Rapid Shallow Breathing Index (RSBI):**
\`\`\`
RSBI = RR / VT (in liters)
<105: Predicts successful weaning
>105: Predicts failure
\`\`\`
- Sensitivity 97%, specificity 64%
- Single measurement less reliable than trend

**Difficult Weaning Causes:**
| Category | Examples |
|----------|----------|
| Respiratory | Secretions, bronchospasm, atelectasis |
| Cardiac | Ischemia, LV failure (preload increase with SBT) |
| Neurological | Delirium, sedation, critical illness polyneuropathy |
| Metabolic | Electrolyte abnormalities, hypothyroidism |
| Psychological | Anxiety, delirium |

### Advanced Monitoring

**Electrical Impedance Tomography (EIT):**
- Non-invasive, bedside imaging
- Assesses regional ventilation distribution
- Applications: PEEP optimization, detect overdistension, guide positioning

**Diaphragm Ultrasound:**
- Thickening fraction: (Thickness at TLC - Thickness at FRC) / Thickness at FRC
- Normal >20%
- Diaphragm dysfunction: <20%
- Predicts weaning outcome

### Novel Ventilatory Modes

**NAVA (Neurally Adjusted Ventilatory Assist):**
- Trigger and support proportional to electrical activity of diaphragm (Edi)
- Improves patient-ventilator synchrony
- May reduce sedation requirements

**Proportional Assist Ventilation (PAV+):**
- Flow and volume assist proportional to patient effort
- Automatic adjustment based on resistance and elastance
- Maintains patient control of breathing pattern

### High-Frequency Oscillatory Ventilation (HFOV)
**Mechanism:**
- Frequency 3-15 Hz (180-900/min)
- Small VT (1-3 mL/kg)
- Gas exchange via alternative mechanisms

**Evidence:**
- OSCAR, OSCILLATE trials: No benefit, possible harm in ARDS
- Limited to rescue therapy and pediatrics

### Extracorporeal Support

**ECMO Indications in ARDS:**
- EOLIA criteria: PaO2/FiO2 <50 for >3 hours, or <80 for >6 hours
- Murray score ≥3
- Refractory to prone positioning, NMB

**Extracorporeal CO2 Removal (ECCO2R):**
- Lower blood flow than VV-ECMO
- Allows ultraprotective ventilation (VT 3-4 mL/kg)
- Clinical trials ongoing

### Respiratory Rate in Critical Care Prognostication

**Predictive Value:**
| Context | Significance |
|---------|--------------|
| Sepsis (qSOFA) | RR ≥22: Independent mortality predictor |
| ICU admission | RR correlates with APACHE II score |
| Spontaneous breathing trial | RR >35: Weaning failure likely |
| Palliative care | Increasing RR may indicate end-of-life |

**Continuous RR Monitoring:**
- Impedance pneumography: Chest wall movement
- Capnography: EtCO2 waveform analysis
- Acoustic monitoring: Breath sounds
- Camera-based: Computer vision algorithms

### Future Directions

**Closed-Loop Ventilation:**
- Automated FiO2 adjustment
- Adaptive pressure support
- SmartCare, IntelliVent-ASV
- Potential for improved outcomes with reduced workload

**Machine Learning in Respiratory Monitoring:**
- Predict respiratory deterioration
- Identify optimal ventilator settings
- Phenotype ARDS patients for targeted therapy`,
      keyTerms: [
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP (ΔP); strong mortality predictor in ARDS when kept <15 cmH2O' },
        { term: 'transpulmonary pressure', definition: 'Airway pressure minus pleural pressure; true measure of lung stress independent of chest wall' },
        { term: 'RSBI', definition: 'Rapid Shallow Breathing Index (RR/VT); <105 predicts weaning success' },
        { term: 'NAVA', definition: 'Neurally Adjusted Ventilatory Assist; diaphragm EMG-proportional ventilatory support' },
        { term: 'ECCO2R', definition: 'Extracorporeal CO2 Removal; lower-flow CO2 removal allowing ultraprotective ventilation' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Driving pressure <15 cmH2O should be a ventilation target alongside plateau <30
2. Daily SBT screening reduces ventilator days - protocolize it
3. RSBI is helpful but should be interpreted in clinical context
4. Diaphragm ultrasound can identify patients at risk for prolonged weaning
5. High-frequency oscillation is not routine for ARDS; rescue only
6. Respiratory rate trends are more valuable than single measurements
7. Consider cardiac cause (weaning-induced pulmonary edema) in difficult liberation`,
    },
  },

  media: [
    {
      id: 'breathing-patterns',
      type: 'diagram',
      filename: 'breathing-patterns.svg',
      title: 'Abnormal Breathing Patterns',
      description: 'Visual comparison of Cheyne-Stokes, Kussmaul, Biot, apneustic, and agonal breathing',
    },
    {
      id: 'respiratory-control',
      type: 'diagram',
      filename: 'respiratory-control.svg',
      title: 'Respiratory Control Centers',
      description: 'Brainstem respiratory control centers and afferent/efferent pathways',
    },
  ],

  citations: [
    {
      id: 'ardsnet',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes for Acute Lung Injury and ARDS',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJM200005043421801',
    },
    {
      id: 'west-physiology',
      type: 'textbook',
      title: 'Respiratory Physiology: The Essentials',
      authors: ['West, J.B.'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'parent', label: 'Vital Signs' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' },
  ],

  tags: {
    systems: ['respiratory', 'nervous'],
    topics: ['physical-examination', 'vital-signs', 'clinical-skills', 'critical-care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'critical-care', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryRate;
