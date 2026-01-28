/**
 * Mechanical Ventilation Basics - Clinical Respiratory Medicine
 *
 * Fundamentals of mechanical ventilation including modes, settings,
 * monitoring, and management of ventilated patients.
 */

import { EducationalContent } from '../../types';

export const mechanicalVentilationBasicsContent: EducationalContent = {
  id: 'clinical-mechanical-ventilation-basics',
  type: 'concept',
  name: 'Mechanical Ventilation Basics',
  alternateNames: ['Ventilator Management', 'Respiratory Support', 'Mechanical Breathing'],

  levels: {
    1: {
      level: 1,
      summary: 'A mechanical ventilator is a machine that helps people breathe when they cannot breathe enough on their own, pushing air into the lungs through a tube.',
      explanation: `## What Is a Mechanical Ventilator?

A mechanical ventilator is a machine that helps people breathe. It pushes air with oxygen into the lungs and helps remove carbon dioxide. People who are very sick or have had surgery may need this help.

### Why Do People Need Ventilators?

**Short-term reasons:**
- After surgery when waking up from anesthesia
- During a severe illness like pneumonia
- After a serious injury
- When having trouble breathing on their own

**Longer-term reasons:**
- Severe lung disease
- Weak breathing muscles
- Brain or spinal cord injuries

### How Does It Work?

**The Breathing Tube:**
- A tube goes through the mouth or nose into the windpipe
- This is called intubation
- The tube connects to the ventilator machine
- The tube has a small balloon cuff to seal the airway

**What the Machine Does:**
- Delivers oxygen-rich air
- Controls how much air goes in
- Controls how fast the person breathes
- Helps push carbon dioxide out

### Being on a Ventilator

**Sedation:**
- Most people are sleepy or sedated while on the ventilator
- This helps them rest and not fight the machine
- The level of sedation can be adjusted

**Communication:**
- Cannot talk while the breathing tube is in place
- May use hand signals, writing, or communication boards
- Nurse and family help with communication

### Getting Off the Ventilator

**Weaning:**
- Doctors slowly reduce ventilator support
- Patient takes more breaths on their own
- Eventually breathes without the machine
- Tube is removed when ready

**Recovery:**
- May need oxygen for a while after
- Breathing exercises help strengthen muscles
- Full recovery takes time`,
      keyTerms: [
        { term: 'ventilator', definition: 'A machine that helps people breathe by pushing air into the lungs' },
        { term: 'breathing tube', definition: 'A plastic tube placed in the windpipe to deliver air from the ventilator' },
        { term: 'intubation', definition: 'The procedure of placing a breathing tube into the windpipe' },
        { term: 'oxygen', definition: 'A gas in the air that the body needs to survive' },
        { term: 'weaning', definition: 'The process of gradually reducing ventilator support so the patient can breathe on their own' },
      ],
      analogies: [
        'A ventilator is like a bellows for a fireplace - it pushes air in and out to keep the fire (your body) going.',
        'Think of the ventilator as a bicycle with training wheels - it helps you breathe until you can do it on your own again.',
      ],
      examples: [
        'A person having major surgery might be on a ventilator for a few hours while waking up from anesthesia.',
        'Someone with severe pneumonia might need a ventilator for several days until the infection improves.',
      ],
    },
    2: {
      level: 2,
      summary: 'Mechanical ventilation supports breathing through positive pressure delivery. Basic modes include assist-control, SIMV, and pressure support, with settings for rate, tidal volume, FiO2, and PEEP adjusted to patient needs.',
      explanation: `## Ventilator Modes

### Assist-Control (AC) Volume Control
**How it works:**
- Patient receives preset tidal volume with each breath
- If patient does not initiate breath, ventilator delivers at set rate
- Every breath gets the full tidal volume

**Settings:**
- Tidal volume (Vt): 6-8 mL/kg ideal body weight
- Respiratory rate: 12-20 breaths/min
- FiO2: 21-100%
- PEEP: 5-15 cm H2O

**Best for:**
- Patients who need full ventilator support
- Paralyzed or heavily sedated patients
- Acute respiratory failure

### Synchronized Intermittent Mandatory Ventilation (SIMV)
**How it works:**
- Set number of mandatory breaths delivered by ventilator
- Patient can take additional spontaneous breaths
- Spontaneous breaths may or may not get pressure support

**Best for:**
- Weaning patients from ventilator
- Patients with some respiratory drive

### Pressure Support Ventilation (PSV)
**How it works:**
- Patient triggers every breath
- Ventilator delivers preset pressure during inspiration
- No set rate - patient controls breathing

**Best for:**
- Weaning from ventilator
- Spontaneous breathing trials
- Patients with adequate respiratory drive

## Key Ventilator Settings

### Oxygen Settings
| Parameter | Description | Typical Range |
|-----------|-------------|---------------|
| FiO2 | Fraction of inspired oxygen | 21-100% |
| SpO2 target | Oxygen saturation goal | 88-96% (varies) |

### Ventilation Settings
| Parameter | Description | Typical Range |
|-----------|-------------|---------------|
| Tidal Volume | Amount of air per breath | 6-8 mL/kg IBW |
| Respiratory Rate | Breaths per minute | 12-30/min |
| PEEP | Pressure at end-expiration | 5-15 cm H2O |
| I:E ratio | Inspiration to expiration | 1:2 to 1:3 |

## Ventilator Alarms

**High Pressure Alarm:**
- Causes: Secretions, coughing, bronchospasm, kinked tube
- Action: Suction, check tubing, assess patient

**Low Pressure Alarm:**
- Causes: Disconnection, cuff leak, extubation
- Action: Check all connections, verify tube position

**Apnea Alarm:**
- Patient not triggering breaths
- Check sedation level and respiratory effort

## Basic Monitoring

**Pulse Oximetry (SpO2):**
- Continuous oxygen saturation monitoring
- Target usually 90-96%
- May be lower in COPD patients (88-92%)

**Ventilator Graphics:**
- Waveforms show pressure, flow, volume
- Help assess synchrony and adequacy

**Physical Assessment:**
- Chest rise and fall
- Breath sounds
- Secretions
- Comfort level`,
      keyTerms: [
        { term: 'tidal volume', definition: 'Amount of air moved into or out of lungs during a normal breath' },
        { term: 'FiO2', definition: 'Fraction of inspired oxygen; percentage of oxygen in the air being breathed' },
        { term: 'PEEP', definition: 'Positive end-expiratory pressure; pressure maintained in lungs at end-expiration' },
        { term: 'respiratory rate', definition: 'Number of breaths per minute' },
        { term: 'I:E ratio', definition: 'Ratio of inspiration time to expiration time' },
      ],
      analogies: [
        'Assist-control mode is like an escalator - it keeps moving at a set speed but you can step on and get a ride.',
        'PEEP is like leaving a small balloon partially inflated - it keeps the airways open so they do not collapse.',
      ],
      examples: [
        'A patient with pneumonia might be on AC mode with rate 16, tidal volume 450 mL, FiO2 60%, PEEP 10.',
        'During a spontaneous breathing trial, pressure support of 5 cm H2O and PEEP of 5 cm H2O is commonly used.',
      ],
    },
    3: {
      level: 3,
      summary: 'Mechanical ventilation requires understanding of respiratory mechanics including compliance, resistance, and pressure measurements. Lung protective strategies minimize ventilator-induced lung injury while optimizing gas exchange.',
      explanation: `## Respiratory Mechanics

### Compliance
**Definition:** Change in volume / Change in pressure (mL/cm H2O)
**Normal:** 50-100 mL/cm H2O

**Static Compliance:**
- Measured during no-flow conditions (plateau pressure)
- Reflects elastic properties of lung and chest wall
- Calculation: Vt / (Plateau - PEEP)

**Dynamic Compliance:**
- Measured during active ventilation (peak pressure)
- Includes airway resistance component
- Calculation: Vt / (Peak - PEEP)

### Airway Resistance
**Definition:** Opposition to airflow (cm H2O/L/sec)
**Normal:** 0.6-2.4 cm H2O/L/sec

**Factors Increasing Resistance:**
- Bronchospasm
- Secretions
- Small endotracheal tube
- Kinked tubing

### Pressure Measurements

**Peak Inspiratory Pressure (PIP):**
- Maximum pressure during inspiration
- Reflects airway resistance + compliance
- Normal: <35 cm H2O

**Plateau Pressure (Pplat):**
- Pressure at end-inspiration with no flow
- Reflects alveolar pressure and compliance
- Target: <30 cm H2O (ARDS)

**Driving Pressure:**
- Pplat - PEEP
- Surrogate for strain
- Target: <15 cm H2O

## Lung Protective Ventilation

**Rationale:**
- Prevent ventilator-induced lung injury (VILI)
- Minimize volutrauma, barotrauma, atelectrauma

**Strategy:**
- Tidal volume: 6 mL/kg predicted body weight
- Plateau pressure: <30 cm H2O
- Driving pressure: <15 cm H2O
- Appropriate PEEP
- Permissive hypercapnia if needed

**Predicted Body Weight:**
- Men: 50 + 0.91(height in cm - 152.4)
- Women: 45.5 + 0.91(height in cm - 152.4)

## Ventilator-Induced Lung Injury (VILI)

**Mechanisms:**

| Type | Mechanism | Prevention |
|------|-----------|------------|
| Volutrauma | Excessive tidal volume | Low Vt ventilation |
| Barotrauma | Excessive pressure | Pressure limits |
| Atelectrauma | Cyclic opening/closing | Adequate PEEP |
| Biotrauma | Inflammatory mediators | All of above |

## Oxygenation Strategies

**FiO2 and PEEP Titration:**
- Use lowest FiO2 to maintain adequate SpO2
- Increase PEEP to recruit alveoli
- Balance oxygenation vs hemodynamics

**ARDSNet PEEP/FiO2 Table:**
- Guides PEEP adjustment based on FiO2 needs
- Higher PEEP for higher FiO2 requirements

**Rescue Therapies for Refractory Hypoxemia:**
- Prone positioning
- Neuromuscular blockade
- Inhaled vasodilators
- ECMO

## Ventilator Graphics Interpretation

**Pressure-Time Curve:**
- Shows pressure changes during breath
- Plateau indicates static compliance
- Peak indicates resistance

**Flow-Time Curve:**
- Shape indicates flow pattern
- Decelerating flow in pressure control
- Square wave in volume control

**Volume-Time Curve:**
- Shows tidal volume delivery
- Accumulation indicates air trapping

## Weaning Parameters

**Readiness Criteria:**
- Resolution of underlying cause
- Hemodynamic stability
- Adequate oxygenation (PaO2/FiO2 >150-200)
- Minimal ventilator support

**Weaning Predictors:**
| Parameter | Threshold |
|-----------|-----------|
| RSBI | <105 |
| NIF | >-20 to -30 cm H2O |
| Vital capacity | >10 mL/kg |
| Minute ventilation | <10 L/min |

**Spontaneous Breathing Trial (SBT):**
- T-piece or low pressure support (5-8 cm H2O)
- Observe for 30-120 minutes
- Monitor for distress, fatigue, desaturation`,
      keyTerms: [
        { term: 'compliance', definition: 'Measure of lung distensibility; change in volume per unit change in pressure' },
        { term: 'plateau pressure', definition: 'Airway pressure at end-inspiration during a breath hold; reflects alveolar pressure' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; tidal volume normalized to compliance' },
        { term: 'volutrauma', definition: 'Lung injury caused by excessive tidal volumes' },
        { term: 'RSBI', definition: 'Rapid shallow breathing index; respiratory rate divided by tidal volume in liters' },
      ],
      clinicalNotes: 'Plateau pressure is a critical safety limit in mechanical ventilation. If plateau exceeds 30 cm H2O, reduce tidal volume even below 6 mL/kg if needed. Driving pressure (plateau - PEEP) has emerged as a stronger predictor of survival than tidal volume alone in ARDS.',
    },
    4: {
      level: 4,
      summary: 'Advanced ventilator management includes recognition and treatment of patient-ventilator asynchrony, management of refractory hypoxemia, non-invasive ventilation strategies, and specialized modes for specific clinical scenarios.',
      explanation: `## Patient-Ventilator Asynchrony

### Types of Asynchrony

**Trigger Asynchrony:**
- **Ineffective triggering:** Patient effort fails to trigger breath
  - Causes: Auto-PEEP, weak effort, insensitive trigger
  - Solution: Adjust trigger sensitivity, reduce auto-PEEP

- **Auto-triggering:** Ventilator delivers breath without patient effort
  - Causes: Cardiac oscillations, leaks, condensation
  - Solution: Check for leaks, adjust trigger

**Flow Asynchrony:**
- Patient demand does not match ventilator flow delivery
- Causes: Inadequate flow setting, changing patient demands
- Solution: Increase peak flow, switch to pressure control

**Cycle Asynchrony:**
- Premature termination: Breath ends before patient exhalation
- Delayed termination: Prolonged inspiration causing active exhalation
- Solution: Adjust flow cycle threshold, consider pressure control

### Auto-PEEP (Intrinsic PEEP)

**Mechanism:**
- Incomplete expiration before next breath
- Gas trapping increases end-expiratory pressure
- Common in obstructive diseases (asthma, COPD)

**Detection:**
- End-expiratory flow does not return to zero
- Esophageal pressure measurement
- Expiratory hold maneuver

**Management:**
- Prolong expiratory time
- Reduce respiratory rate
- Reduce tidal volume
- Increase inspiratory flow
- Consider bronchodilators

## Non-Invasive Ventilation (NIV)

### BiPAP (Bilevel Positive Airway Pressure)
**Settings:**
- IPAP (inspiratory positive airway pressure): 10-20 cm H2O
- EPAP (expiratory positive airway pressure): 5-8 cm H2O
- Difference determines tidal volume

**Indications:**
- COPD exacerbation with respiratory acidosis
- Cardiogenic pulmonary edema
- Hypoxemic respiratory failure (selected)
- Prevention of intubation

**Contraindications:**
- Respiratory or cardiac arrest
- Unable to protect airway
- Severe encephalopathy
- Hemodynamic instability
- Facial trauma or deformity

### High-Flow Nasal Cannula (HFNC)
**Features:**
- Flow rates up to 60 L/min
- Heated and humidified oxygen
- FiO2 up to 100%
- Creates low-level PEEP (2-6 cm H2O)

**Benefits:**
- Better comfort than NIV
- washes out dead space
- Reduces work of breathing
- Allows eating and talking

## Specialized Ventilator Modes

### Airway Pressure Release Ventilation (APRV)
**Concept:**
- Extended time at high pressure (Phigh)
- Brief release to low pressure (Plow)
- Spontaneous breathing at Phigh encouraged

**Settings:**
- Phigh: 20-30 cm H2O
- Plow: 0-5 cm H2O
- Thigh: 4-6 seconds
- Tlow: 0.2-0.8 seconds

**Advantages:**
- Improved oxygenation
- Reduced sedation needs
- Better hemodynamics

**Disadvantages:**
- Complex management
- Risk of hypoventilation
- Not for all patients

### Pressure Control Ventilation (PCV)
**Characteristics:**
- Pressure limited, time cycled
- Tidal volume varies with compliance
- Decelerating flow pattern

**Advantages:**
- Better comfort
- Pressure limit prevents barotrauma
- Good for poor compliance

**Disadvantages:**
- Variable tidal volume
- Less control over minute ventilation

### Neurally Adjusted Ventilatory Assist (NAVA)
**Principle:**
- Uses diaphragmatic electrical activity (Edi)
- Proportional to patient neural drive
- Improved synchrony

**Advantages:**
- Excellent patient-ventilator synchrony
- Adapts to patient demand
- Useful in difficult-to-wean patients

## Refractory Hypoxemia Management

**Prone Positioning:**
- Improves V/Q matching
- Reduces ventral-dorsal pressure gradient
- Minimum 16 hours daily
- Requires trained team

**Neuromuscular Blockade:**
- Prevents patient-ventilator dyssynchrony
- Reduces oxygen consumption
- Early use in severe ARDS
- Limit to 48 hours if possible

**Inhaled Vasodilators:**
- Nitric oxide: 5-40 ppm
- Epoprostenol: 10-50 ng/kg/min
- Improve V/Q matching
- May improve oxygenation

**ECMO:**
- VV-ECMO for respiratory failure
- Consider when lung protective ventilation fails
- Bridge to recovery or transplant

## Ventilation in Special Populations

**Obesity:**
- Higher pressures needed
- Esophageal pressure monitoring helpful
- Prone positioning challenging

**Pregnancy:**
- Higher minute ventilation
- Lower PaCO2 normally (30-32 mmHg)
- Left lateral positioning
- Fetal monitoring

**Neuromuscular Disease:**
- Watch for respiratory muscle fatigue
- May need prolonged weaning
- Consider tracheostomy early

**COPD:**
- Permissive hypercapnia
- Long expiratory times
- Monitor for auto-PEEP`,
      keyTerms: [
        { term: 'auto-PEEP', definition: 'Intrinsic positive end-expiratory pressure from incomplete exhalation; gas trapping' },
        { term: 'APRV', definition: 'Airway pressure release ventilation; mode with extended high pressure and brief releases' },
        { term: 'NAVA', definition: 'Neurally adjusted ventilatory assist; mode using diaphragmatic electrical activity' },
        { term: 'double triggering', definition: 'Two ventilator breaths triggered by single patient effort due to inadequate tidal volume' },
        { term: 'reverse triggering', definition: 'Patient effort triggered by ventilator breath rather than initiating it' },
      ],
      clinicalNotes: 'Ineffective triggering is the most common form of patient-ventilator asynchrony. Check for auto-PEEP in patients with obstructive lung disease, as it is a common cause. Adjusting trigger sensitivity alone will not solve the problem if auto-PEEP is present.',
    },
    5: {
      level: 5,
      summary: 'Expert ventilator management integrates advanced monitoring including esophageal manometry and electrical impedance tomography, personalized ventilation strategies based on lung morphology, and extracorporeal support for the most challenging cases.',
      explanation: `## Advanced Respiratory Monitoring

### Esophageal Pressure Monitoring
**Principle:**
- Esophageal pressure approximates pleural pressure
- Allows calculation of transpulmonary pressure (Ptp = Paw - Pes)
- Guides safe ventilation in complex patients

**Clinical Applications:**
- PEEP titration (maintain positive end-expiratory Ptp)
- Assessment of lung stress (keep Ptp <20 cm H2O)
- Identification of patient effort
- Obesity and chest wall stiffness

**Interpretation:**
- End-inspiratory Ptp <20 cm H2O (safety limit)
- End-expiratory Ptp >0 (prevention of collapse)
- Negative Pes swings indicate patient effort

### Electrical Impedance Tomography (EIT)
**Technology:**
- 16-electrode belt around chest
- Measures impedance changes with ventilation
- Real-time regional ventilation imaging

**Applications:**
- PEEP titration based on collapse/overdistention
- Assessment of prone positioning response
- Detection of pendelluft
- Monitoring of secretion mobilization

**Findings:**
- Regional compliance distribution
- Optimal PEEP determination
- Recruitment assessment

### Advanced Ventilator Strategies

**Personalized PEEP Selection:**

| Method | Approach |
|--------|----------|
| Stress index | Target near 1.0 on pressure-time curve |
| P/V curve | PEEP above lower inflection point |
| EIT | PEEP minimizing collapse + overdistention |
| Transpulmonary pressure | PEEP maintaining positive end-expiratory Ptp |
| Esophageal manometry | PEEP offsetting negative Pes |

**Esophageal Pressure-Guided PEEP:**
- Target transpulmonary pressure 0-10 cm H2O at end-expiration
- Prevents atelectasis while minimizing overdistention
- Particularly useful in obesity

### ECCO2R and Ultra-Lung Protection

**Extracorporeal CO2 Removal:**
- Lower flow (400-1000 mL/min) than ECMO
- Removes CO2 via membrane lung
- Allows ultra-protective ventilation

**Ventilation Strategy with ECCO2R:**
- Tidal volumes 1-2 mL/kg
- Respiratory rates 2-4/min
- Very low airway pressures
- Reduces mechanical ventilation injury

**Indications:**
- Severe ARDS with refractory hypercapnia
- Bridge to lung recovery
- Prevention of intubation in selected cases

### Advanced Mode Selection

**APRV Optimization:**
- Time-controlled adaptive ventilation (TCAV)
- Personalized Tlow based on flow curve
- Target Tlow at 50-75% of peak expiratory flow
- Maintains open lung while allowing ventilation

**Neurally Adjusted Ventilatory Assist (NAVA):**
- Edi catheter placement
- NAVA level titration (1-3 cm H2O/microvolt)
- Self-regulating support based on neural drive
- Improved synchrony and comfort

### Mechanical Power

**Concept:**
- Cumulative energy delivered to respiratory system
- Mechanical Power = (RR x Vt) x (Ppeak - 0.5 x driving pressure)
- Reflects risk of VILI

**Clinical Application:**
- Target <17 J/min for lung protection
- Better predictor than any single parameter
- Guides overall ventilator strategy

### Personalized Ventilation by Phenotype

**Focal ARDS:**
- Predominant consolidation in dependent regions
- Prone to hyperinflation of non-dependent lung
- Lower PEEP, careful recruitment
- Monitor for overdistention

**Non-Focal ARDS:**
- Diffuse edematous lung
- More recruitable
- Higher PEEP beneficial
- Recruitment maneuvers may help

### Artificial Intelligence in Ventilation

**Current Applications:**
- Automated weaning protocols
- Prediction of liberation success
- Detection of asynchrony
- Optimization of settings

**Emerging Technologies:**
- Machine learning for PEEP selection
- Predictive models for ARDS progression
- Automated closed-loop ventilation

### Weaning and Liberation

**Automated Weaning:**
- SmartCare/PS: Automated PS adjustment
- Adaptive support ventilation: Automatic adjustments
- Reduces duration of ventilation

**Extubation Prediction:**
- Integrative weaning indices
- Diaphragm ultrasound
- Cuff leak test
- Secretion assessment
- Swallow evaluation

**Post-Extubation Support:**
- Prophylactic NIV (high-risk patients)
- High-flow nasal cannula
- Early mobilization protocols

### Long-Term Ventilator Considerations

**Tracheostomy Timing:**
- Early (3-7 days) vs late
- Benefits: comfort, mobilization, weaning
- Patient selection critical

**Ventilator Liberation in Chronic Respiratory Failure:**
- Progressive weaning protocols
- Diaphragm pacing
- Home ventilation transition
- Quality of life considerations`,
      keyTerms: [
        { term: 'transpulmonary pressure', definition: 'Pressure difference between airway and pleural space; the true distending pressure for the lung' },
        { term: 'mechanical power', definition: 'Total energy delivered to the respiratory system by the ventilator; cumulative risk factor for VILI' },
        { term: 'EIT', definition: 'Electrical impedance tomography; non-invasive imaging of regional ventilation and perfusion' },
        { term: 'TCAV', definition: 'Time-controlled adaptive ventilation; method to optimize APRV settings' },
        { term: 'Edi', definition: 'Diaphragmatic electrical activity; measured via esophageal catheter for NAVA ventilation' },
      ],
      clinicalNotes: `Key clinical pearls for expert ventilator management:

1. **Transpulmonary pressure:** In patients with elevated chest wall elastance (obesity, ascites, chest wall edema), targeting plateau pressure <30 cm H2O may still result in excessive lung stress. Use esophageal manometry to guide safe ventilation.

2. **Mechanical power:** Consider the cumulative energy delivered, not just single parameters. A patient with moderate tidal volume but high rate and pressure may have higher injury risk than one with larger tidal volume but lower rate.

3. **ECCO2R timing:** Consider early for patients requiring injurious ventilation settings. The goal is to prevent VILI, not just treat refractory cases.

4. **NAVA benefits:** In patients with difficult asynchrony or variable respiratory drive, NAVA can improve comfort and reduce sedation needs while maintaining adequate ventilation.

5. **EIT for PEEP:** Use electrical impedance tomography to identify the PEEP level that minimizes both collapse and overdistention rather than relying on population-based tables.

6. **Weaning readiness:** Daily assessment with spontaneous awakening and breathing trials reduces ventilation duration. Do not delay extubation due to conservative practices.

7. **Post-extubation failure:** Prophylactic NIV or high-flow nasal cannula in high-risk patients (elderly, COPD, CHF) reduces reintubation rates.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ardsnet-2000',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes',
      authors: ['ARDS Network'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJM200005043421801',
    },
    {
      id: 'amato-2015',
      type: 'article',
      title: 'Driving Pressure and Survival in Acute Respiratory Distress Syndrome',
      authors: ['Amato MB', 'Meade MO', 'Slutsky AS', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMsa1410639',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-respiratory-failure', targetType: 'concept', relationship: 'related', label: 'Respiratory Failure' },
    { targetId: 'clinical-pulmonary-function-tests', targetType: 'concept', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['critical-care', 'pulmonology', 'mechanical-ventilation'],
    keywords: ['mechanical ventilation', 'ventilator', 'PEEP', 'tidal volume', 'ARDS', 'NIV', 'weaning'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'critical-care', 'anesthesia'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mechanicalVentilationBasicsContent;
