/**
 * Respiratory Rate - Vital Signs
 *
 * Comprehensive content on respiratory rate measurement, normal ranges,
 * tachypnea, bradypnea, and clinical significance.
 */

import { EducationalContent } from '../types';

export const respiratoryRate: EducationalContent = {
  id: 'vitals-respiratory-rate',
  type: 'concept',
  name: 'Respiratory Rate',
  alternateNames: ['Breathing Rate', 'RR', 'Respiration Rate'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory rate is how many breaths you take in one minute, showing how fast or slow you are breathing.',
      explanation: `Breathing is how your body gets oxygen in and carbon dioxide out. Every breath counts!

**What is Respiratory Rate?**
It's the number of times you breathe in and out in one minute. One breath = breathing in (inhale) plus breathing out (exhale).

**Normal Breathing:**
- Adults: 12-20 breaths per minute when resting
- Children: Breathe faster than adults
- Babies: Breathe even faster

**How to Count Breaths:**
1. Watch someone's chest rise and fall
2. Each rise-and-fall = one breath
3. Count for 30 seconds and multiply by 2
4. Or count for a full minute

**When Breathing Gets Faster:**
- During exercise
- When you're scared or excited
- If you have a fever
- When something is wrong with your lungs or heart

**When Breathing Gets Slower:**
- When you're sleeping
- When you're very relaxed
- Sometimes when you're very sick

**Warning Signs to Tell an Adult:**
- Very fast breathing when you're not exercising
- Trouble catching your breath
- Noisy breathing (wheezing, whistling)
- Lips or fingernails turning blue
- Chest hurting when breathing
- Feeling like you can't get enough air`,
      keyTerms: [
        { term: 'respiratory rate', definition: 'How many breaths you take in one minute' },
        { term: 'inhale', definition: 'Breathing in' },
        { term: 'exhale', definition: 'Breathing out' },
        { term: 'shortness of breath', definition: 'When breathing feels hard or you can\'t get enough air' },
      ],
      analogies: [
        'Your lungs are like balloons that fill up when you breathe in and empty when you breathe out.',
        'Breathing is like a pump that brings fresh air in and pushes old air out.',
        'Fast breathing when exercising is like a car engine revving up when going uphill.',
      ],
      examples: [
        'When you run fast, you breathe faster to get more oxygen to your muscles.',
        'At night when you sleep, your breathing slows down because your body is resting.',
        'When you have a cold and stuffy nose, you might breathe through your mouth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Respiratory rate reflects the body\'s oxygen demand and carbon dioxide production, with normal adult rates of 12-20 breaths per minute at rest, and deviations indicating respiratory or systemic illness.',
      explanation: `## Understanding Respiratory Rate

Respiratory rate is the number of breaths per minute (bpm). One breath includes both inspiration (inhaling) and expiration (exhaling).

## Normal Respiratory Rates by Age

| Age Group | Normal Rate (breaths/min) |
|-----------|--------------------------|
| Newborns | 30-60 |
| Infants (1-12 months) | 30-50 |
| Toddlers (1-3 years) | 24-40 |
| Preschool (3-5 years) | 22-34 |
| School age (6-12 years) | 18-30 |
| Adolescents (13-18 years) | 12-20 |
| Adults | 12-20 |
| Elderly | 12-28 |

## How to Measure Respiratory Rate

**Observation Method:**
1. Patient should be at rest, unaware of measurement (to avoid conscious breathing)
2. Watch chest or abdomen rise and fall
3. Count for 30-60 seconds
4. Multiply as needed to get breaths per minute
5. Note depth and pattern of breathing

**What to Observe:**
- Rate: How fast?
- Depth: Shallow or deep?
- Pattern: Regular or irregular?
- Effort: Easy or labored?

## Abnormal Respiratory Rates

**Tachypnea (Fast Breathing):**
Definition: >20 breaths/min in adults

Common Causes:
- Fever (increase of 4 breaths/min per 1°C rise)
- Pain or anxiety
- Lung infections (pneumonia, bronchitis)
- Asthma attacks
- Heart failure
- Anemia
- Metabolic acidosis (diabetic ketoacidosis)
- Pulmonary embolism

**Bradypnea (Slow Breathing):**
Definition: <12 breaths/min in adults

Common Causes:
- Deep sleep
- Medications (opioids, sedatives)
- Brain injury
- Hypothyroidism
- Hypothermia
- Drug overdose

## Signs of Respiratory Distress

**Work of Breathing:**
- Nasal flaring (nostrils opening wide)
- Retractions (skin pulling in at neck, ribs, or below sternum)
- Using neck and shoulder muscles to breathe
- Head bobbing (in infants)
- Tripod positioning (leaning forward on hands)

**Other Warning Signs:**
- Cyanosis (blue lips, fingernails, or skin)
- Inability to speak full sentences
- Grunting with each breath
- Stridor (high-pitched sound when breathing in)
- Wheezing (whistling sound when breathing out)

## When to Seek Medical Care

**Call 911 or go to ER:**
- Severe difficulty breathing
- Blue lips or face
- Confusion or drowsiness from breathing trouble
- Inability to speak
- Choking
- Respiratory rate >24 with distress
- Sudden onset shortness of breath

**Call Doctor Soon:**
- Breathing faster than normal without clear cause
- Cough that's getting worse
- Fever with breathing problems
- Wheezing that doesn't improve with medication`,
      keyTerms: [
        { term: 'tachypnea', definition: 'Abnormally fast breathing rate (>20/min in adults)', pronunciation: 'tak-ip-NEE-ah' },
        { term: 'bradypnea', definition: 'Abnormally slow breathing rate (<12/min in adults)', pronunciation: 'bray-dip-NEE-ah' },
        { term: 'dyspnea', definition: 'The sensation of difficulty breathing or shortness of breath', pronunciation: 'DISP-nee-ah' },
        { term: 'retractions', definition: 'Visible sinking of skin between ribs or at the neck during labored breathing' },
        { term: 'cyanosis', definition: 'Blue discoloration of skin or lips due to lack of oxygen' },
        { term: 'stridor', definition: 'High-pitched breathing sound indicating upper airway obstruction' },
      ],
      analogies: [
        'Retractions are like seeing the effort of trying to suck a thick milkshake through a thin straw - you can see the work.',
        'The respiratory system is like a bellows that pumps air in and out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Respiratory rate is controlled by central and peripheral chemoreceptors responding to CO2, pH, and O2, with clinical patterns reflecting underlying pathophysiology of respiratory, cardiovascular, or metabolic disorders.',
      explanation: `## Respiratory Control Physiology

**Central Control:**
- **Medullary respiratory center:**
  - Dorsal respiratory group (DRG): Inspiration
  - Ventral respiratory group (VRG): Expiration
  - Pre-Bötzinger complex: Rhythm generation

- **Pontine centers:**
  - Pneumotaxic center: Fine-tunes rate
  - Apneustic center: Promotes inspiration

**Chemoreceptor Regulation:**

| Receptor | Location | Primary Stimulus | Response |
|----------|----------|------------------|----------|
| Central | Medulla | CO2 (via H+) | Increase ventilation |
| Peripheral (carotid) | Carotid bodies | O2, CO2, pH | Increase ventilation |
| Peripheral (aortic) | Aortic arch | O2, CO2, pH | Minor contribution |

**Hypercapnic Drive:**
- Primary stimulus for ventilation
- 1 mmHg increase in PaCO2 → 2-3 L/min increase in ventilation
- Response blunted in chronic hypercapnia (COPD)

**Hypoxic Drive:**
- Peripheral chemoreceptors
- Activated when PaO2 <60 mmHg
- Becomes primary drive in chronic hypercapnia

## Abnormal Breathing Patterns

| Pattern | Description | Causes |
|---------|-------------|--------|
| Tachypnea | Rate >20, normal depth | Fever, pain, anxiety, early pneumonia |
| Kussmaul | Deep, rapid, labored | Metabolic acidosis (DKA) |
| Cheyne-Stokes | Crescendo-decrescendo with apnea | Heart failure, stroke, high altitude |
| Biot's (ataxic) | Irregular depth and rate with pauses | Brain stem lesion |
| Apneustic | Prolonged inspiration with brief expiration | Pontine lesion |
| Agonal | Slow, shallow, gasping | Near death, severe brain injury |

## Tachypnea Differential Diagnosis

**Respiratory Causes:**
- Pneumonia
- Pulmonary embolism
- Asthma/COPD exacerbation
- Pneumothorax
- Pleural effusion
- ARDS

**Cardiovascular Causes:**
- Congestive heart failure
- Pulmonary edema
- Cardiac tamponade

**Metabolic Causes:**
- Metabolic acidosis (compensatory hyperventilation)
- Diabetic ketoacidosis
- Sepsis
- Thyrotoxicosis

**Other Causes:**
- Fever
- Pain
- Anxiety/panic
- Anemia
- Pregnancy

## Respiratory Rate as Predictor

**Early Warning Scores:**
- RR is one of the most sensitive vital sign changes
- Often earliest indicator of deterioration
- Part of NEWS (National Early Warning Score):
  - RR ≤8 or ≥25: Score 3 (highest)
  - RR 21-24: Score 2
  - RR 9-11: Score 1
  - RR 12-20: Score 0 (normal)

**Sepsis Identification (qSOFA):**
- Respiratory rate ≥22
- Plus altered mental status or SBP ≤100

## Assessment of Breathing Work

**Accessory Muscle Use:**
- Sternocleidomastoid
- Scalenes
- Trapezius
- Pectorals

**Inspiratory Signs:**
- Tracheal tug
- Supraclavicular retractions
- Intercostal retractions
- Subcostal retractions (abdominal)

**Expiratory Signs:**
- Prolonged expiration (>1:2 ratio)
- Pursed lip breathing
- Active abdominal contraction

## Pediatric Considerations

**Age-Specific Concern Thresholds:**
| Age | Tachypnea Threshold |
|-----|-------------------|
| <2 months | >60/min |
| 2-12 months | >50/min |
| 1-5 years | >40/min |
| >5 years | >30/min |

**WHO IMCI Danger Signs:**
- Unable to drink/breastfeed
- Vomiting everything
- Convulsions
- Lethargic or unconscious
- Chest indrawing`,
      keyTerms: [
        { term: 'Kussmaul respiration', definition: 'Deep, rapid, labored breathing pattern seen in metabolic acidosis' },
        { term: 'Cheyne-Stokes respiration', definition: 'Cyclic pattern of crescendo-decrescendo breathing with periods of apnea' },
        { term: 'central chemoreceptors', definition: 'Medullary neurons sensing CSF pH (reflecting CO2) to regulate ventilation' },
        { term: 'hypoxic drive', definition: 'Peripheral chemoreceptor-mediated increase in ventilation when PaO2 falls below 60 mmHg' },
        { term: 'qSOFA', definition: 'Quick Sequential Organ Failure Assessment; screening tool for sepsis' },
        { term: 'accessory muscles', definition: 'Neck and chest muscles recruited during labored breathing' },
      ],
      clinicalNotes: 'Respiratory rate is often called the "neglected vital sign" but is one of the earliest and most sensitive indicators of clinical deterioration. Always count for a full 30-60 seconds; estimation is unreliable.',
    },
    4: {
      level: 4,
      summary: 'Respiratory rate abnormalities reflect complex interactions between respiratory mechanics, gas exchange, and neural control, with clinical patterns guiding diagnosis and management of acute and chronic respiratory failure.',
      explanation: `## Advanced Respiratory Physiology

**Minute Ventilation (VE):**
\`\`\`
VE = Respiratory Rate × Tidal Volume
Normal: 5-8 L/min
\`\`\`

**Alveolar Ventilation (VA):**
\`\`\`
VA = RR × (VT - VD)
Where VD = Dead space volume (~150 mL)
\`\`\`

**Ventilatory Response to Hypercapnia:**
- Linear relationship (2-3 L/min per 1 mmHg PaCO2)
- Shifted by:
  - Hypoxemia (increased slope)
  - Sleep (decreased slope)
  - Opioids (decreased slope)
  - Chronic hypercapnia (decreased slope)

## Respiratory Failure Classification

**Type I (Hypoxemic):**
- PaO2 <60 mmHg
- Normal or low PaCO2
- Increased RR (compensatory)
- Causes: Pneumonia, ARDS, pulmonary embolism, pulmonary edema

**Type II (Hypercapnic):**
- PaCO2 >50 mmHg (with pH <7.35 if acute)
- Variable PaO2
- RR may be decreased, normal, or increased
- Causes: COPD, neuromuscular disease, obesity hypoventilation, CNS depression

**Acute vs. Chronic:**
| Parameter | Acute | Chronic |
|-----------|-------|---------|
| pH change | Large (0.08 per 10 mmHg CO2) | Minimal (compensated) |
| HCO3 change | 1 mEq/L per 10 mmHg CO2 | 3.5 mEq/L per 10 mmHg CO2 |
| Symptoms | Severe | Often minimal |

## Respiratory Rate in Specific Conditions

**Pulmonary Embolism:**
- Tachypnea >20 in 70%
- May be only abnormal vital sign
- Sensitivity 74%, specificity 40%
- Use with pretest probability (Wells, PERC)

**Pneumonia:**
- RR ≥22 predicts adverse outcome
- Part of CURB-65 (confusion, urea, RR, BP, age ≥65)
- Part of PSI (Pneumonia Severity Index)

**Heart Failure:**
- Tachypnea correlates with congestion
- Orthopnea, PND indicate severity
- RR >24 associated with worse outcomes

**COPD Exacerbation:**
- Baseline RR may be elevated
- Acute change more significant
- RR >25 indicates severity
- Paradoxical breathing (chest/abdomen asynchrony) is ominous

## Work of Breathing Quantification

**Indices:**
- Rapid Shallow Breathing Index (RSBI) = RR/VT (L)
  - RSBI <105: Likely to wean successfully
  - RSBI >105: Likely to fail weaning

**Oxygen Cost of Breathing:**
- Normal: 1-2% of total O2 consumption
- Respiratory failure: Up to 50%
- Fatigue ensues when supply/demand imbalance

## Monitoring Technologies

**Impedance Pneumography:**
- Electrodes measure chest impedance changes
- Standard in most cardiac monitors
- Prone to artifact

**Capnography:**
- Measures exhaled CO2
- Provides RR and ETCO2
- Detects apnea earlier than SpO2

**Acoustic Monitoring:**
- Neck sensors detect airflow sounds
- Less artifact than impedance
- Promising in post-operative setting

**Remote Monitoring:**
- Radar-based respiration detection
- Ballistocardiography (bed sensors)
- Smartphone accelerometer

## Ventilator-Induced Lung Injury

**Importance of RR in Mechanical Ventilation:**
- High RR with low VT may reduce VILI
- But higher rates increase power (mechanical energy)
- Optimal: Balance VT and RR for target ventilation

**Mechanical Power:**
\`\`\`
Power = 0.098 × RR × VT × (Peak pressure - PEEP/2)
\`\`\`
- Higher power associated with VILI
- Target: <12 J/min if possible

## Dyspnea Assessment

**Multidimensional:**
- Sensory intensity (how much)
- Sensory quality (what type)
- Affective distress (emotional response)

**Scales:**
- Borg scale (0-10)
- Modified Medical Research Council (mMRC) dyspnea scale
- Baseline Dyspnea Index / Transition Dyspnea Index

**Dyspnea-RR Dissociation:**
- High RR, low dyspnea: Early compensated respiratory illness
- Low RR, high dyspnea: Neuromuscular weakness, severe fatigue
- Normal RR, high dyspnea: Cardiac, deconditioning, anxiety`,
      keyTerms: [
        { term: 'alveolar ventilation', definition: 'Fresh gas reaching the alveoli per minute; equals minute ventilation minus dead space ventilation' },
        { term: 'RSBI', definition: 'Rapid Shallow Breathing Index; ratio of respiratory rate to tidal volume, used to predict weaning success' },
        { term: 'CURB-65', definition: 'Pneumonia severity score: Confusion, Urea, Respiratory rate, Blood pressure, Age ≥65' },
        { term: 'type I respiratory failure', definition: 'Hypoxemic failure (low O2, normal or low CO2); V/Q mismatch or shunt' },
        { term: 'type II respiratory failure', definition: 'Hypercapnic failure (high CO2); due to alveolar hypoventilation' },
        { term: 'mechanical power', definition: 'Energy delivered to respiratory system per unit time; correlates with ventilator-induced lung injury' },
      ],
      clinicalNotes: 'The Rapid Shallow Breathing Index (RR/VT) remains one of the best predictors of successful extubation. Calculate at bedside before weaning trials.',
    },
    5: {
      level: 5,
      summary: 'Expert-level respiratory rate analysis integrates sophisticated ventilatory physiology, precision monitoring, and evidence-based management of respiratory failure with attention to lung-protective strategies and patient-ventilator synchrony.',
      explanation: `## Neural Control Networks

**Brainstem Respiratory Network:**
- Pre-Bötzinger complex (preBötC): Inspiratory rhythm generator
- Bötzinger complex: Expiratory neurons
- Parafacial respiratory group (pFRG): Active expiration, sighs

**Central Pattern Generator:**
- Pacemaker neurons (voltage-gated currents)
- Network oscillations (reciprocal inhibition)
- Neuromodulation (serotonin, substance P, opioids)

**Higher Control:**
- Cortex: Voluntary breathing, speech
- Limbic: Emotional breathing (fear, anxiety)
- Hypothalamus: Thermoregulation, exercise

## Advanced Chemoreceptor Physiology

**Central Chemoreception:**
- Retrotrapezoid nucleus (RTN): Primary CO2 sensors
- Raphe serotonergic neurons
- Locus coeruleus
- Astrocyte involvement (pH sensing)

**Peripheral Chemoreceptor Response:**
- Type I glomus cells in carotid body
- TASK channels sense hypoxia
- Neurotransmitters: ATP, ACh, dopamine
- Millisecond response time

**Integrated Response:**
| Stimulus | Peripheral | Central | Combined |
|----------|------------|---------|----------|
| Hypoxia | +++ | 0 | Synergistic with CO2 |
| Hypercapnia | ++ | +++ | Additive |
| Acidosis | + | ++ | Additive |

## Sleep-Disordered Breathing Physiology

**Obstructive Sleep Apnea:**
- Pharyngeal collapse during sleep
- Arousal terminates apnea
- Cyclic desaturation, sympathetic activation
- Loop gain concept: High gain → unstable breathing

**Central Sleep Apnea:**
- Cheyne-Stokes in heart failure: Circulation time delay
- Treatment-emergent (complex): After PAP initiation
- High loop gain: Hyperventilation → apnea cycle

**Loop Gain Components:**
\`\`\`
Loop Gain = Controller Gain × Plant Gain
\`\`\`
- Controller: Chemoreceptor sensitivity
- Plant: Efficiency of ventilation in changing blood gases

## ARDS Ventilation Strategies

**Lung-Protective Parameters:**
| Parameter | Target | Rationale |
|-----------|--------|-----------|
| Tidal volume | 4-8 mL/kg PBW | Reduce volutrauma |
| Plateau pressure | <30 cm H2O | Limit barotrauma |
| Driving pressure | <15 cm H2O | Best outcome predictor |
| PEEP | Titrate to FiO2 | Prevent atelectrauma |
| Respiratory rate | Permissive hypercapnia | Balance minute ventilation |

**Mechanical Power Optimization:**
- Components: Driving pressure, PEEP, RR, inspiratory flow
- Target: <17 J/min (some suggest <12)
- Reducing RR alone may not reduce power if other parameters increase

**Prone Positioning:**
- Improves V/Q matching
- May reduce respiratory rate requirements
- 16+ hours daily in severe ARDS

## Patient-Ventilator Asynchrony

**Types and Recognition:**

| Type | Definition | RR Effect |
|------|------------|-----------|
| Trigger asynchrony | Delayed or missed breaths | Apparent bradypnea |
| Ineffective efforts | Patient effort not triggering vent | Underestimates true RR |
| Double triggering | Two breaths from one effort | Overestimates true RR |
| Auto-triggering | Vent triggers without patient effort | Artifactual tachypnea |
| Flow asynchrony | Flow mismatch | Normal RR, distress |
| Cycling asynchrony | Timing mismatch | Normal RR, distress |

**Asynchrony Index:**
- Ineffective efforts / Total respiratory cycles
- >10% associated with worse outcomes
- Reduce with appropriate settings, sedation adjustment

## Emerging Monitoring Technologies

**Electrical Impedance Tomography (EIT):**
- Real-time imaging of ventilation distribution
- Optimize PEEP, detect overdistension
- Guide recruitment maneuvers

**Diaphragmatic Ultrasound:**
- Thickening fraction correlates with effort
- Predict weaning outcomes
- Detect diaphragm dysfunction

**Esophageal Pressure Monitoring:**
- Transpulmonary pressure calculation
- Guide PEEP in ARDS
- Assess patient effort (P0.1, Pocc)

**Machine Learning Applications:**
- Asynchrony detection from waveforms
- Prediction of respiratory failure
- Optimal ventilator setting recommendations

## Extubation Prediction

**Integrated Assessment:**
| Parameter | Favorable | Unfavorable |
|-----------|-----------|-------------|
| RSBI | <105 | >105 |
| P0.1 | <4 cm H2O | >6 cm H2O |
| NIF (MIP) | <-30 cm H2O | >-20 cm H2O |
| Cough peak flow | >60 L/min | <60 L/min |
| Diaphragm thickening | >30% | <30% |

**Modern Approach:**
- SBT success alone has 85-90% PPV
- Combine with cough strength, secretion volume
- Consider extubation to NIV in high-risk patients

## Palliative Care Considerations

**Dyspnea Management in Terminal Illness:**
- Opioids: First-line (reduce respiratory drive, dyspnea perception)
- Benzodiazepines: Adjunct for anxiety
- Oxygen: Only if hypoxemic or subjective relief
- Fan: Facial cooling provides relief

**Terminal Weaning:**
- Gradual withdrawal of ventilatory support
- Anticipatory symptom management
- Focus on comfort, not respiratory rate`,
      keyTerms: [
        { term: 'pre-Bötzinger complex', definition: 'Brainstem region containing neurons essential for inspiratory rhythm generation' },
        { term: 'loop gain', definition: 'Ventilatory control system stability measure; high gain promotes breathing instability' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; surrogate for lung stress; target <15 cm H2O' },
        { term: 'asynchrony index', definition: 'Proportion of breaths with patient-ventilator asynchrony; >10% associated with poor outcomes' },
        { term: 'P0.1', definition: 'Airway pressure generated in first 0.1 sec of occluded inspiration; measure of respiratory drive' },
        { term: 'EIT', definition: 'Electrical Impedance Tomography; non-invasive imaging of regional ventilation distribution' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Driving pressure (<15 cm H2O) is the strongest predictor of mortality in ARDS ventilation strategies
2. In mechanically ventilated patients, watch for ineffective efforts - the displayed RR may not reflect true patient respiratory rate
3. High loop gain predicts central sleep apnea response to CPAP; may need adaptive servo-ventilation
4. Esophageal pressure monitoring can guide PEEP in ARDS when standard tables fail
5. P0.1 >4 cm H2O suggests high respiratory drive - consider causes before increasing sedation
6. In palliative setting, respiratory rate is less important than symptom management; don't let tachypnea prevent adequate opioid dosing`,
    },
  },

  media: [
    {
      id: 'breathing-patterns',
      type: 'diagram',
      filename: 'breathing-patterns.svg',
      title: 'Abnormal Breathing Patterns',
      description: 'Visual representation of Kussmaul, Cheyne-Stokes, Biot\'s, and other patterns',
    },
    {
      id: 'respiratory-control',
      type: 'diagram',
      filename: 'respiratory-control.svg',
      title: 'Respiratory Control Centers',
      description: 'Brainstem respiratory centers and chemoreceptor pathways',
    },
  ],

  citations: [
    {
      id: 'ards-network',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury',
      authors: ['ARDS Network'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJM200005043421801',
    },
    {
      id: 'news-score',
      type: 'article',
      title: 'National Early Warning Score (NEWS): Standardising the assessment of acute-illness severity in the NHS',
      source: 'Royal College of Physicians',
    },
  ],

  crossReferences: [
    { targetId: 'vitals-oxygen-saturation', targetType: 'topic', relationship: 'sibling', label: 'Oxygen Saturation' },
    { targetId: 'respiratory-system', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['vital-signs', 'clinical-skills', 'critical-care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'critical-care', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryRate;
