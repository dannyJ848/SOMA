/**
 * Ventilation Mechanics - Respiratory Physiology
 *
 * Mechanics of breathing including pressure relationships, lung volumes,
 * compliance, resistance, and work of breathing.
 */

import { EducationalContent } from '../../types';

export const ventilationMechanicsContent: EducationalContent = {
  id: 'physiology-ventilation-mechanics',
  type: 'concept',
  name: 'Ventilation Mechanics',
  alternateNames: ['Mechanics of Breathing', 'Lung Mechanics', 'Respiratory Mechanics'],

  levels: {
    1: {
      level: 1,
      summary: 'Breathing works like a pump - your diaphragm and chest muscles create pressure changes that draw air into and push air out of your lungs.',
      explanation: `## How Breathing Works

Breathing is the process of moving air in and out of your lungs. It works like a simple pump system that brings in fresh oxygen and removes waste carbon dioxide.

### The Pump System

**Inhalation (Breathing In):**
- Your diaphragm (main breathing muscle) contracts and moves down
- Your rib muscles lift your chest up and out
- This makes your chest cavity larger
- Air pressure inside drops
- Air rushes in from outside to fill the space

**Exhalation (Breathing Out):**
- Your diaphragm relaxes and moves up
- Your chest muscles relax
- Chest cavity gets smaller
- Air pressure inside increases
- Air is pushed out of the lungs

### Why Air Moves

**Pressure Differences:**
- Air always moves from high pressure to low pressure
- When lung pressure drops below atmospheric pressure, air enters
- When lung pressure rises above atmospheric pressure, air exits
- It is like letting air out of a balloon or sucking through a straw

### The Diaphragm

**Main Breathing Muscle:**
- Dome-shaped muscle under lungs
- Separates chest from abdomen
- Contracts to pull air in
- Relaxes to push air out
- Does most of the work of breathing

### Accessory Muscles

**Help During Hard Breathing:**
- Neck muscles (sternocleidomastoid)
- Chest muscles (intercostals)
- Shoulder muscles
- Used during exercise or lung disease

### Lung Volumes

**Tidal Volume:**
- Amount of air in a normal breath
- About 500 mL for adults

**Total Capacity:**
- Maximum air lungs can hold
- About 6 liters for adults

### Why This Matters

**Healthy Lungs:**
- Easy to breathe
- Muscles work efficiently
- Pressure changes happen smoothly

**Diseased Lungs:**
- Harder to breathe
- Muscles work harder
- Pressure changes are difficult
- May need extra oxygen`,
      keyTerms: [
        { term: 'diaphragm', definition: 'The main muscle of breathing located between chest and abdomen' },
        { term: 'inhalation', definition: 'Breathing air into the lungs' },
        { term: 'exhalation', definition: 'Breathing air out of the lungs' },
        { term: 'pressure', definition: 'Force that pushes air to move from high to low areas' },
        { term: 'tidal volume', definition: 'Amount of air moved in a normal breath' },
      ],
      analogies: [
        'The lungs and chest are like a bicycle pump - pulling the handle out draws air in, pushing it in forces air out.',
        'The diaphragm is like a plunger in a syringe - when it moves down it creates suction, when it moves up it creates pressure.',
        'Breathing is like a bellows for a fire - the same back-and-forth motion to move air.',
      ],
      examples: [
        'During exercise, breathing rate increases from about 12 breaths per minute to 30-40 breaths per minute.',
        'In asthma, narrowed airways increase resistance, making it harder to move air and requiring more muscle work.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ventilation mechanics involves pressure gradients between atmosphere and alveoli, lung volumes and capacities, compliance, airway resistance, and the work required for breathing.',
      explanation: `## Pressure Relationships

**Atmospheric Pressure:**
- 760 mmHg at sea level
- Reference point (zero)

**Intrapleural Pressure:**
- Pressure in pleural space
- Negative relative to atmospheric: -5 cm H2O at rest
- Becomes more negative during inspiration (-8 cm H2O)
- Prevents lung collapse

**Alveolar Pressure:**
- Pressure inside alveoli
- Zero at end-expiration
- Negative during inspiration (-1 cm H2O)
- Positive during expiration (+1 cm H2O)

**Transpulmonary Pressure:**
- Distending pressure of lung
- Palv - Pip (alveolar minus intrapleural)
- Approximately +5 cm H2O at rest
- Keeps lungs inflated

## Lung Volumes and Capacities

### Static Volumes

| Volume | Definition | Normal Value |
|--------|-----------|--------------|
| Tidal Volume (TV) | Air per normal breath | 500 mL |
| Inspiratory Reserve (IRV) | Additional air that can be inhaled | 3000 mL |
| Expiratory Reserve (ERV) | Additional air that can be exhaled | 1100 mL |
| Residual Volume (RV) | Air remaining after maximal exhalation | 1200 mL |

### Capacities (Combinations)

| Capacity | Calculation | Normal Value |
|----------|-------------|--------------|
| Inspiratory Capacity (IC) | TV + IRV | 3500 mL |
| Functional Reserve (FRC) | ERV + RV | 2300 mL |
| Vital Capacity (VC) | IRV + TV + ERV | 4600 mL |
| Total Lung Capacity (TLC) | VC + RV | 5800 mL |

### Spirometry

**Measured:**
- FVC (forced vital capacity)
- FEV1 (forced expiratory volume in 1 second)
- FEV1/FVC ratio

**Obstructive Pattern:**
- Reduced FEV1/FVC (<0.70)
- FEV1 reduced
- Air trapping (increased RV)

**Restrictive Pattern:**
- Normal or increased FEV1/FVC
- Both FVC and FEV1 reduced
- Reduced TLC

## Compliance

**Definition:**
Change in volume per unit change in pressure
C = delta V / delta P

**Normal Values:**
- Lung compliance: 200 mL/cm H2O
- Chest wall compliance: 200 mL/cm H2O
- Total compliance: 100 mL/cm H2O

**Factors Affecting Compliance:**
- Elastic recoil
- Surface tension
- Lung volume
- Disease states

**Static vs Dynamic:**
- Static: Measured with no flow
- Dynamic: Measured during breathing

## Airway Resistance

**Definition:**
Opposition to airflow (pressure difference / flow rate)
R = delta P / Flow

**Normal:**
- 0.5-2 cm H2O/L/sec
- Mostly in upper airways
- Airways >2 mm contribute 80%

**Poiseuille\'s Law:**
Resistance proportional to:
- Length (linear)
- 1/radius^4 (very sensitive)

**Factors Increasing Resistance:**
- Bronchospasm
- Secretions
- Edema
- Foreign bodies
- Small airways disease

## Work of Breathing

**Components:**
1. Elastic work (overcoming lung and chest wall elasticity)
2. Resistive work (overcoming airway resistance)
3. Tissue viscous resistance

**Normal:**
- 0.5-1.0 J/L of ventilation
- 2-3% of total body oxygen consumption at rest
- Increases significantly with exercise

**Factors Increasing Work:**
- Decreased compliance
- Increased resistance
- Increased minute ventilation
- Abnormal breathing patterns`,
      keyTerms: [
        { term: 'compliance', definition: 'Measure of lung expandability; change in volume per unit pressure' },
        { term: 'resistance', definition: 'Opposition to airflow through airways' },
        { term: 'intrapleural pressure', definition: 'Pressure in the pleural space between lung and chest wall' },
        { term: 'transpulmonary pressure', definition: 'Pressure difference across the lung wall that keeps it inflated' },
        { term: 'residual volume', definition: 'Air remaining in lungs at maximal exhalation' },
      ],
      analogies: [
        'Compliance is like the stretchiness of a balloon - high compliance stretches easily, low compliance is stiff.',
        'Airway resistance is like the diameter of a pipe - small changes in radius cause big changes in resistance.',
        'Work of breathing is like the effort to blow up a balloon - stiff balloons (low compliance) take more work.',
      ],
      examples: [
        'In pulmonary fibrosis, compliance is decreased (stiff lungs) so more pressure is needed for the same volume change.',
        'In COPD, airway resistance increases and FRC increases due to air trapping behind narrowed airways.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced ventilation mechanics includes surface tension and surfactant function, dynamic compression of airways, flow-volume relationships, and the analysis of pressure-volume curves.',
      explanation: `## Surface Tension and Surfactant

### Surface Tension

**Laplace Law:**
Pressure = (2 x surface tension) / radius
- Smaller alveoli have higher pressure without surfactant
- Would cause alveolar collapse
- Surfactant reduces surface tension

**Surfactant Function:**
- Reduces surface tension
- Increases compliance
- Prevents alveolar collapse
- Stabilizes alveoli of different sizes

**Composition:**
- Dipalmitoylphosphatidylcholine (DPPC)
- Surfactant proteins (SP-A, B, C, D)
- Made by Type II pneumocytes

**Surfactant Deficiency:**
- Neonatal respiratory distress syndrome
- Acute respiratory distress syndrome (ARDS)
- Decreased compliance
- Atelectasis

### Dynamic Compression of Airways

**Equal Pressure Point:**
- Point where intrabronchial = intrapleural pressure
- Downstream from this point, airways narrow
- Limits expiratory flow

**Forced Expiratory Flow:**
- Effort-independent at high effort
- Determined by lung recoil and airway resistance
- Creates characteristic flow-volume curve

**Clinical Significance:**
- Airway collapse in emphysema
- Dynamic hyperinflation
- Air trapping
- Expiratory flow limitation

## Flow-Volume Loops

### Normal Pattern
- Peak expiratory flow early
- Gradual decline
- Inspiratory limb symmetric
- "Teardrop" shape

### Obstructive Pattern
- Scooped expiratory limb
- Reduced peak flow
- Prolonged expiration
- "Ski slope" appearance

### Restrictive Pattern
- Reduced size (all volumes)
- Normal or increased ratio
- Steep slope
- "Small teardrop"

### Fixed Upper Airway Obstruction
- Reduced inspiratory and expiratory flow
- Flattened loop
- Equal limitation both directions

### Variable Extrathoracic Obstruction
- Inspiratory limitation greater
- Flattened inspiratory limb
- Normal expiratory
- Vocal cord dysfunction

### Variable Intrathoracic Obstruction
- Expiratory limitation greater
- Flattened expiratory limb
- Normal inspiratory
- Tracheomalacia

## Pressure-Volume Curves

### Hysteresis
- Different inflation and deflation curves
- Due to surfactant and tissue properties
- Area between curves = work of hysteresis

### Lower Inflection Point
- Indicates alveolar recruitment
- Used to set PEEP in ARDS
- Above this point: compliant region

### Upper Inflection Point
- Indicates overdistention
- Risk of volutrauma above
- Below this point: safe ventilation

### Compliance Measurement
- Slope of PV curve
- Static compliance
- Dynamic compliance
- Specific compliance (normalized to FRC)

## Time Constants

**Definition:**
Time for lung unit to fill or empty to 63%
Time constant = Resistance x Compliance

**Importance:**
- Determines filling/emptying rates
- Heterogeneity causes V/Q mismatch
- Fast units (low R x C)
- Slow units (high R x C)

**Clinical Relevance:**
- Auto-PEEP (gas trapping)
- Inadequate emptying
- Short expiratory time
- COPD and asthma

## Chest Wall Mechanics

**Compliance:**
- Chest wall contributes to total compliance
- Obesity decreases chest wall compliance
- Kyphoscoliosis affects mechanics
- Pleural disease restricts movement

**Static Pressure-Volume:**
- Chest wall recoil outward (negative pressure)
- Lung recoil inward (positive pressure)
- Balance at FRC
- Disrupted in pneumothorax

**Work Distribution:**
- Normally equal between lung and chest wall
- Changes in disease states
- Obesity: increased chest wall work
- Emphysema: decreased lung work

### Mechanics in Disease

**COPD:**
- Decreased elastic recoil
- Increased compliance
- Increased airway resistance
- Dynamic hyperinflation
- Auto-PEEP

**Pulmonary Fibrosis:**
- Increased elastic recoil
- Decreased compliance
- Increased work of breathing
- Rapid, shallow breathing pattern
- Reduced lung volumes

**Obesity:**
- Decreased chest wall compliance
- Reduced FRC
- Increased work
- Basal atelectasis
- Exaggerated by supine position`,
      keyTerms: [
        { term: 'surfactant', definition: 'Surface-active substance that reduces surface tension in alveoli' },
        { term: 'equal pressure point', definition: 'Point in airway where intraluminal pressure equals intrapleural pressure' },
        { term: 'time constant', definition: 'Product of resistance and compliance; determines rate of alveolar filling/emptying' },
        { term: 'auto-PEEP', definition: 'Unintended positive end-expiratory pressure from incomplete exhalation' },
        { term: 'hysteresis', definition: 'Difference between inspiration and expiration pressure-volume curves' },
      ],
      clinicalNotes: 'The equal pressure point concept explains why patients with emphysema have expiratory flow limitation. As lung recoil decreases in emphysema, the equal pressure point moves upstream toward smaller airways, causing premature airway closure and air trapping.',
    },
    4: {
      level: 4,
      summary: 'Clinical ventilation mechanics includes mechanical ventilation principles, patient-ventilator interactions, bedside monitoring, and optimization of respiratory support in various disease states.',
      explanation: `## Mechanical Ventilation Mechanics

### Modes and Parameters

**Volume Control:**
- Set tidal volume
- Pressure varies with compliance
- Constant flow or decelerating
- Risk of barotrauma if compliance poor

**Pressure Control:**
- Set inspiratory pressure
- Volume varies with compliance
- Decelerating flow
- Better for poor compliance

**Pressure Support:**
- Patient-triggered
- Pressure assists inspiration
- Spontaneous breathing
- Weaning mode

### Respiratory System Compliance

**Calculation:**
Crs = Vt / (Pplat - PEEP)
- Normal: 50-100 mL/cm H2O
- Decreased in ARDS, fibrosis
- Measured at plateau pressure

**Chest Wall Component:**
Ccw = Vt / (Pplat - Pes)
- Esophageal manometry needed
- Distinguishes lung vs chest wall
- Important in obesity, ascites

**Transpulmonary Pressure:**
Ptp = Paw - Pes
- True distending pressure
- Target <20 cm H2O
- Prevents atelectasis and overdistention

### Driving Pressure

**Definition:**
Delta P = Pplat - PEEP
- Tidal volume normalized to compliance
- Reflects strain
- Strong predictor of survival in ARDS

**Target:**
- <15 cm H2O
- Minimize lung injury
- Adjust PEEP and Vt

### Esophageal Pressure Monitoring

**Technique:**
- Esophageal balloon catheter
- Positioned 30-40 cm from nares
- Validated by cardiac oscillations

**Applications:**
- Calculate transpulmonary pressure
- Set PEEP
- Assess patient effort
- Detect asynchrony

**Clinical Targets:**
- End-inspiratory Ptp <20 cm H2O
- End-expiratory Ptp >0 cm H2O
- Pes swings indicate effort

### Monitoring Respiratory Mechanics

**At Bedside:**
- Plateau pressure
- Peak pressure
- PEEP
- Tidal volume
- Flow waveforms

**Derived Parameters:**
- Compliance
- Resistance
- Time constants
- Work of breathing
- Occlusion pressure (P0.1)

**Graphics Analysis:**
- Pressure-time
- Flow-time
- Volume-time
- Pressure-volume loops
- Flow-volume loops

### Patient-Ventilator Asynchrony

**Types:**
- Trigger asynchrony
- Flow asynchrony
- Cycle asynchrony
- Mode asynchrony

**Detection:**
- Waveform analysis
- Esophageal pressure
- Clinical assessment
- Patient comfort

**Management:**
- Adjust trigger sensitivity
- Change flow pattern
- Modify cycling criteria
- Mode change

### Disease-Specific Considerations

**ARDS:**
- Low tidal volume (6 mL/kg)
- Pplat <30 cm H2O
- PEEP to recruit
- Driving pressure <15
- Prone positioning

**COPD/Asthma:**
- Long expiratory time
- Low respiratory rate
- Monitor auto-PEEP
- Permissive hypercapnia
- Bronchodilators

**Neuromuscular Disease:**
- Weak respiratory muscles
- May need full support
- Watch for atelectasis
- Cough assist
- Weaning assessment

**Obesity:**
- Elevated pressures
- Reduced FRC
- Atelectasis risk
- Higher PEEP needed
- Esophageal monitoring helpful

### Non-Invasive Ventilation

**BiPAP Mechanics:**
- IPAP supports inspiration
- EPAP recruits alveoli
- Difference determines Vt
- Titration based on:
  - Tidal volume
  - Comfort
  - ABGs

**High-Flow Nasal Cannula:**
- Flow-dependent pressure
- Approximate PEEP: 0.5-1 cm H2O per 10 L/min
- Washout of dead space
- Reduces work of breathing`,
      keyTerms: [
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; reflects strain on the lung' },
        { term: 'transpulmonary pressure', definition: 'Pressure difference across the lung; alveolar minus pleural pressure' },
        { term: 'esophageal manometry', definition: 'Measurement of esophageal pressure to estimate pleural pressure' },
        { term: 'asynchrony', definition: 'Mismatches between patient effort and ventilator support timing' },
        { term: 'P0.1', definition: 'Airway pressure generated 100 milliseconds after occlusion; reflects respiratory drive' },
      ],
      clinicalNotes: 'Driving pressure (plateau - PEEP) has emerged as a critical parameter in ARDS management. Unlike tidal volume alone, driving pressure accounts for the available lung compliance and is more predictive of mortality. Keep driving pressure below 15 cm H2O when possible.',
    },
    5: {
      level: 5,
      summary: 'Expert ventilation mechanics integrates advanced monitoring technologies, computational modeling, personalized mechanical ventilation strategies, and the physiology of novel ventilator modes and adjunctive therapies.',
      explanation: `## Advanced Monitoring Technologies

### Electrical Impedance Tomography (EIT)

**Principle:**
- 16-electrode belt
- Measures thoracic impedance changes
- Real-time regional ventilation imaging

**Applications:**
- PEEP titration
- Recruitment assessment
- Proning response
- Detect pendelluft
- Regional compliance

**Clinical Use:**
- Optimal PEEP selection
- Collapse vs overdistention
- Asynchrony detection
- Secretion mobilization

### Forced Oscillation Technique (FOT)

**Principle:**
- External oscillations applied
- Measures respiratory impedance
- Frequency-dependent
- No special breathing maneuvers

**Parameters:**
- Resistance (Rrs)
- Reactance (Xrs)
- Frequency dependence
- Reactance area (AX)

**Clinical Applications:**
- Small airway assessment
- Bronchodilator response
- Asthma monitoring
- Sleep studies

### Multiple Breath Nitrogen Washout

**Principle:**
- Measures ventilation heterogeneity
- LCI (lung clearance index)
- Phase III slope analysis
- Conducting vs acinar airways

**Lung Clearance Index:**
- Cumulative expired N2 to clear FRC
- Sensitive marker of small airway disease
- Normal <7
- Elevated in early disease

**Clinical Applications:**
- Cystic fibrosis
- Asthma
- COPD
- Pediatric assessment

## Computational Modeling

### Computational Fluid Dynamics (CFD)

**Applications:**
- Airflow patterns
- Drug delivery modeling
- Aerosol deposition
- Mechanical ventilation optimization

**Patient-Specific Modeling:**
- CT-based reconstruction
- Boundary conditions
- Flow simulation
- Treatment planning

### Compartment Models

**Multi-Compartment Analysis:**
- Fast and slow compartments
- Time constant heterogeneity
- Parallel lung units
- V/Q mismatch modeling

**Parameter Estimation:**
- Forced expiration modeling
- Optimal ventilation strategies
- Patient-specific parameters
- Inverse modeling

## Personalized Mechanical Ventilation

### Strain and Stress

**Global Strain:**
- Vt/FRC ratio
- Reflects tissue deformation
- Target <2

**Regional Strain:**
- EIT assessment
- CT analysis
- Varies with position

**Mechanical Power:**
- Cumulative energy delivered
- Cx time x driving pressure
- <17 J/min target

### Recruitment Strategies

**Recruitment Maneuvers:**
- Sustained inflation
- Stepwise increases
- Pressure-controlled
- PEEP increments

**Recruitment Assessment:**
- EIT
- P/V curves
- CT imaging
- Oxygenation response

**Personalized PEEP:**
- Maximum compliance
- Driving pressure minimum
- EIT-guided
- Transpulmonary pressure-guided

### Artificial Intelligence

**Closed-Loop Ventilation:**
- Automated adjustments
- Target-driven
- Safety limits
- Adaptive support

**Predictive Analytics:**
- Weaning prediction
- Deterioration detection
- Mode selection
- Optimal settings

**Image Analysis:**
- Automated CT analysis
- EIT interpretation
- Pattern recognition
- Clinical decision support

## Novel Ventilation Strategies

### Airway Pressure Release Ventilation (APRV)

**Mechanics:**
- Time-cycled pressure
- Spontaneous breathing
- Prolonged Phigh
- Brief Tlow release

**Optimization:**
- Tlow set by flow curve
- Expiratory flow termination
- 50-75% of peak flow
- TCAV approach

### Neurally Adjusted Ventilatory Assist (NAVA)

**Principle:**
- Diaphragmatic electrical activity (Edi)
- Proportional to neural drive
- Self-regulating
- Improved synchrony

**Advantages:**
- Better patient-ventilator coupling
- Adapts to demand
- Reduces asynchrony
- Useful in difficult cases

### Proportional Assist Ventilation (PAV)

**Principle:**
- Unloading of elastic and resistive work
- Patient determines pattern
- Amplifies patient effort
- Respiratory mechanics-based

### Extracorporeal Support

**ECCO2R:**
- Low-flow CO2 removal
- Ultra-protective ventilation
- Tidal volume 1-2 mL/kg
- Lung rest strategy

**VV-ECMO:**
- Gas exchange support
- Allows lung rest
- Ventilator-induced lung injury prevention
- Bridge to recovery

## Respiratory Muscle Physiology

### Diaphragm Assessment

**Ultrasound:**
- Diaphragm thickness
- Thickening fraction
- Excursion
- Contractility assessment

**Electromyography:**
- Edi (NAVA catheter)
- Surface EMG
- Phrenic nerve stimulation
- Fatigue assessment

### Respiratory Muscle Weakness

**ICU-Acquired Weakness:**
- Diaphragm atrophy
- Critical illness myopathy
- Prolonged ventilation
- Difficult weaning

**Prevention Strategies:**
- Early mobilization
- Appropriate sedation
- Nutrition
- Spontaneous breathing trials

### Weaning Mechanics

**Readiness:**
- Respiratory drive adequate
- Muscle strength adequate
- Load/capacity balance
- Oxygenation acceptable

**Predictors:**
- RSBI <105
- NIF < -20 to -30
- Rapid shallow breathing index
- Integrative weaning index

### Respiratory Drive

**P0.1:**
- Occlusion pressure
- Respiratory center output
- Not effort-dependent
- Predicts weaning

**Edi:**
- Neural drive
- Direct measurement
- NAVA mode
- Clinical assessment`,
      keyTerms: [
        { term: 'mechanical power', definition: 'Total energy delivered to respiratory system by ventilator' },
        { term: 'lung clearance index', definition: 'Measure of ventilation heterogeneity from multiple breath washout' },
        { term: 'NAVA', definition: 'Neurally adjusted ventilatory assist; mode using diaphragmatic electrical activity' },
        { term: 'TCAV', definition: 'Time-controlled adaptive ventilation; APRV optimization method' },
        { term: 'EIT', definition: 'Electrical impedance tomography; real-time imaging of regional ventilation' },
      ],
      clinicalNotes: `Key concepts in advanced ventilation mechanics:

1. **Mechanical power:** The cumulative energy delivered by the ventilator is a unifying concept that accounts for tidal volume, respiratory rate, PEEP, and driving pressure. Keep mechanical power below 17 J/min to minimize VILI.

2. **Transpulmonary pressure:** Direct measurement via esophageal manometry allows true lung-distending pressure calculation, essential in obese patients and those with chest wall abnormalities.

3. **Personalized PEEP:** Rather than using population-based tables, optimal PEEP should be individualized based on EIT, esophageal pressure, or driving pressure minimization.

4. **Driving pressure:** The tidal volume normalized to compliance (Pplat - PEEP) is a stronger predictor of survival in ARDS than tidal volume alone. Target <15 cm H2O.

5. **ECCO2R:** Ultra-low tidal volume ventilation (1-2 mL/kg) with extracorporeal CO2 removal may be the ultimate lung-protective strategy for severe ARDS.

6. **Patient-ventilator asynchrony:** Common and associated with worse outcomes. Esophageal manometry and careful waveform analysis can identify and guide management.

7. **Lung rest:** For severe lung injury, allowing the lung to "rest" with minimal ventilation while providing gas exchange support (ECMO/ECCO2R) may improve outcomes.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'west-respiratory',
      type: 'textbook',
      title: 'West\'s Respiratory Physiology: The Essentials',
      authors: ['West JB'],
      source: 'Lippincott Williams & Wilkins',
    },
    {
      id: 'amato-driving-pressure',
      type: 'article',
      title: 'Driving Pressure and Survival in the Acute Respiratory Distress Syndrome',
      authors: ['Amato MB', 'Meade MO', 'Slutsky AS', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-gas-exchange', targetType: 'concept', relationship: 'related', label: 'Gas Exchange' },
    { targetId: 'clinical-pulmonary-function-tests', targetType: 'concept', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physiology', 'pulmonology', 'critical-care'],
    keywords: ['ventilation', 'mechanics', 'compliance', 'resistance', 'lung volumes'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'physiology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ventilationMechanicsContent;
