/**
 * Lung Function - Respiratory Physiology
 *
 * Comprehensive coverage of lung volumes, capacities, spirometry,
 * and pulmonary function testing.
 */

import { EducationalContent } from '../../types';

export const lungFunctionContent: EducationalContent = {
  id: 'respiratory-lung-function',
  type: 'concept',
  name: 'Lung Function',
  alternateNames: ['Pulmonary Function', 'Lung Volumes and Capacities', 'Spirometry Basics'],

  levels: {
    1: {
      level: 1,
      summary: 'Lung function describes how well your lungs can hold air and move it in and out of your body, which doctors measure using special breathing tests.',
      explanation: `## What Is Lung Function?

Lung function is how well your lungs work at their main job: bringing oxygen into your body and getting rid of carbon dioxide.

### How Your Lungs Work

**Breathing In:**
- Air enters through your nose or mouth
- Travels down your windpipe (trachea)
- Enters your lungs
- Fills tiny air sacs called alveoli
- Oxygen moves into your blood

**Breathing Out:**
- Carbon dioxide leaves your blood
- Enters the air sacs
- Travels back up and out
- Waste gas removed from body

### Measuring Lung Function

**Spirometry:**
- A breathing test
- You blow into a tube
- Measures how much air you can blow out
- Measures how fast you can blow

**What Doctors Measure:**
- Total amount of air in your lungs
- How fast you can push air out
- How much air stays in after breathing out
- How well air flows through airways

### Why It Matters

**Healthy Lungs:**
- Can hold lots of air
- Move air quickly and easily
- Exchange gases efficiently
- Support exercise and activity

**When Lungs Don't Work Well:**
- Less air can be held
- Breathing feels harder
- May get tired easily
- May need treatment

### Common Tests

**Blowing Test (Spirometry):**
- Take a deep breath
- Blow out as hard and fast as possible
- Machine records the results
- Repeated a few times

**Peak Flow:**
- Simple handheld device
- Blow into it quickly
- Shows how open your airways are
- Often used at home`,
      keyTerms: [
        { term: 'spirometry', definition: 'A breathing test that measures how much air you can blow out and how fast' },
        { term: 'lung capacity', definition: 'The total amount of air your lungs can hold' },
        { term: 'airways', definition: 'The tubes that carry air to and from your lungs' },
        { term: 'peak flow', definition: 'The fastest speed at which you can blow air out of your lungs' },
        { term: 'oxygen', definition: 'The gas in air that your body needs to live' },
      ],
      analogies: [
        'Your lungs are like balloons - they expand when you breathe in and shrink when you breathe out.',
        'Spirometry is like measuring how much water you can pour from a pitcher and how fast you can pour it.',
        'Airways are like straws - if they get narrow, it is harder to blow air through them.',
      ],
      examples: [
        'When you blow out birthday candles, you are using your lungs at their maximum speed - this is similar to what a spirometry test measures.',
        'Athletes often have better lung function because their lungs are trained to work efficiently.',
      ],
      patientCounselingPoints: [
        'Spirometry tests are safe and do not hurt',
        'You may need to repeat the test a few times to get the best result',
        'Your doctor uses these tests to check if your lungs are healthy',
      ],
    },
    2: {
      level: 2,
      summary: 'Lung function testing measures lung volumes, capacities, and airflow rates using spirometry and other techniques to assess respiratory health and diagnose lung diseases.',
      explanation: `## Understanding Lung Function

Lung function refers to the mechanical and physiological performance of the respiratory system, measured through various tests.

### Lung Volumes

**Tidal Volume (TV):**
- Air breathed in and out during normal breathing
- About 500 mL in adults
- Represents quiet breathing

**Inspiratory Reserve Volume (IRV):**
- Extra air you can breathe in after a normal breath
- About 3,000 mL
- Used during deep breathing

**Expiratory Reserve Volume (ERV):**
- Extra air you can push out after a normal breath
- About 1,100 mL
- Used when blowing hard

**Residual Volume (RV):**
- Air left in lungs after maximum exhalation
- About 1,200 mL
- Prevents lung collapse
- Cannot be measured by spirometry

### Lung Capacities

**Vital Capacity (VC):**
- Maximum air you can exhale after maximum inhalation
- VC = TV + IRV + ERV
- About 4,600 mL

**Total Lung Capacity (TLC):**
- Total air lungs can hold
- TLC = VC + RV
- About 5,800 mL

**Functional Residual Capacity (FRC):**
- Air in lungs at end of normal breath
- FRC = ERV + RV
- About 2,300 mL

**Inspiratory Capacity (IC):**
- Maximum air inhaled from normal resting level
- IC = TV + IRV
- About 3,500 mL

### Spirometry Measurements

**FEV1 (Forced Expiratory Volume in 1 second):**
- Air exhaled in first second of forced exhalation
- Key measurement for airway obstruction
- Normal: about 80% of predicted

**FVC (Forced Vital Capacity):**
- Total air exhaled during forced exhalation
- Used to assess restriction

**FEV1/FVC Ratio:**
- Percentage of FVC exhaled in first second
- Normal: 70-80%
- Low ratio suggests obstruction

### Types of Lung Disease Patterns

**Obstructive Pattern:**
- Hard to push air out
- FEV1 reduced more than FVC
- Low FEV1/FVC ratio
- Examples: asthma, COPD

**Restrictive Pattern:**
- Lungs cannot expand fully
- Both FEV1 and FVC reduced
- Normal or high FEV1/FVC ratio
- Examples: pulmonary fibrosis, chest wall problems

### Other Tests

**Peak Expiratory Flow (PEF):**
- Maximum speed of exhalation
- Used to monitor asthma
- Done with peak flow meter

**Diffusion Capacity (DLCO):**
- How well oxygen moves from lungs to blood
- Uses carbon monoxide test gas
- Reduced in emphysema, fibrosis`,
      keyTerms: [
        { term: 'tidal volume', definition: 'The amount of air moved in and out during normal breathing' },
        { term: 'vital capacity', definition: 'The maximum amount of air that can be exhaled after a maximum inhalation' },
        { term: 'FEV1', definition: 'Forced Expiratory Volume in 1 second; the air exhaled in the first second of a forced breath' },
        { term: 'FVC', definition: 'Forced Vital Capacity; the total air exhaled during a forced exhalation' },
        { term: 'residual volume', definition: 'The air remaining in the lungs after maximum exhalation' },
      ],
      analogies: [
        'Lung volumes are like measuring cups of different sizes - tidal volume is a small cup for regular sips, while vital capacity is the largest pitcher.',
        'The FEV1/FVC ratio is like timing how quickly you can empty a bucket - a healthy person empties most of it in the first second.',
        'Residual volume is like the water that always stays at the bottom of a bottle - you cannot get it all out.',
      ],
      examples: [
        'A patient with asthma might have FEV1 of 65% predicted and FEV1/FVC of 60%, showing an obstructive pattern.',
        'A patient with pulmonary fibrosis might have FEV1 of 60% predicted and FEV1/FVC of 85%, showing a restrictive pattern.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary function testing encompasses spirometry, lung volumes, diffusion capacity, and flow-volume loops to diagnose and monitor obstructive and restrictive lung diseases.',
      explanation: `## Comprehensive Pulmonary Function Testing

### Spirometry Interpretation

**Quality Criteria:**
- Acceptability: good start, no cough, no leak
- Reproducibility: two best FEV1 within 150 mL
- At least 3 acceptable efforts
- Exhalation for at least 6 seconds

**Predicted Values:**
- Based on age, sex, height, ethnicity
- NHANES III or GLI-2012 reference equations
- Results expressed as % predicted
- Lower limit of normal (LLN) more accurate than fixed ratios

**Bronchodilator Response:**
- FEV1 or FVC increase ≥12% AND ≥200 mL
- Suggests reversible obstruction
- Characteristic of asthma
- May occur in COPD

### Flow-Volume Loops

**Normal Loop:**
- Rapid rise to peak expiratory flow
- Gradual linear decline
- Inspiration is semicircular
- Symmetric appearance

**Obstructive Pattern:**
- Scooped appearance (concave)
- Reduced peak flow
- Prolonged exhalation
- Maintained inspiratory loop

**Restrictive Pattern:**
- Smaller overall size
- Normal shape (miniaturized)
- Peak flow may be normal
- Reduced FVC

**Upper Airway Obstruction:**
- Variable extrathoracic: flattened inspiratory limb
- Variable intrathoracic: flattened expiratory limb
- Fixed obstruction: both limbs flattened

### Lung Volume Measurement

**Plethysmography:**
- Gold standard for lung volumes
- Body box measurement
- Applies Boyle's law
- Measures TLC, RV, FRC

**Helium Dilution:**
- Closed-circuit technique
- Measures only communicating gas
- May underestimate in obstruction
- Simpler equipment

**Nitrogen Washout:**
- Open-circuit technique
- Patient breathes 100% O2
- Nitrogen washed out and measured
- Calculates FRC

### Diffusion Capacity (DLCO)

**Technique:**
- Single-breath carbon monoxide
- 10-second breath hold
- Measures gas transfer
- Corrected for hemoglobin

**Interpretation:**
- Low DLCO + obstruction = emphysema
- Low DLCO + restriction = fibrosis
- Normal DLCO + restriction = chest wall disease
- Elevated DLCO: pulmonary hemorrhage, polycythemia

**Factors Affecting DLCO:**
- Alveolar-capillary membrane thickness
- Capillary blood volume
- Hemoglobin concentration
- V/Q matching

### Disease Patterns

**Obstructive Diseases:**
- Asthma: reversible obstruction
- COPD: fixed obstruction, hyperinflation
- Bronchiectasis: obstruction, variable reversibility
- CF: progressive obstruction

**Restrictive Diseases:**
- Parenchymal: ILD, fibrosis
- Extraparenchymal: obesity, kyphoscoliosis
- Neuromuscular: muscle weakness
- Pleural: effusion, thickening

### Special Tests

**Bronchial Provocation:**
- Methacholine or mannitol challenge
- Diagnoses airway hyperreactivity
- PC20: concentration causing 20% FEV1 drop
- Positive if PC20 < 4 mg/mL

**Exercise Testing:**
- Cardiopulmonary exercise testing
- VO2 max determination
- Ventilatory threshold
- Identifies limiting factors

**Maximal Inspiratory/Expiratory Pressures:**
- MIP and MEP
- Respiratory muscle strength
- Neuromuscular disease assessment`,
      keyTerms: [
        { term: 'flow-volume loop', definition: 'Graphic representation of airflow versus volume during forced breathing maneuvers' },
        { term: 'DLCO', definition: 'Diffusing capacity for carbon monoxide; measures gas transfer across the alveolar membrane' },
        { term: 'plethysmography', definition: 'Body box technique for measuring lung volumes including trapped gas' },
        { term: 'bronchial provocation', definition: 'Challenge testing to diagnose airway hyperreactivity' },
        { term: 'lower limit of normal', definition: 'Statistical threshold (5th percentile) for defining abnormality' },
      ],
      clinicalNotes: 'When interpreting PFTs, always use the lower limit of normal (LLN) rather than fixed cutoffs like 80% predicted, as fixed cutoffs lead to overdiagnosis in the elderly and underdiagnosis in young adults.',
    },
    4: {
      level: 4,
      summary: 'Advanced pulmonary function assessment includes complex physiological principles, sophisticated testing protocols, and integration of multiple modalities for comprehensive respiratory evaluation.',
      explanation: `## Advanced Pulmonary Physiology

### Mechanics of Breathing

**Compliance:**
- Change in volume per change in pressure
- Static vs dynamic compliance
- Lung compliance: 200 mL/cmH2O
- Chest wall compliance: 200 mL/cmH2O
- Total system: 100 mL/cmH2O

**Elastance:**
- Reciprocal of compliance
- Elastic recoil forces
- Increased in fibrosis
- Decreased in emphysema

**Resistance:**
- Airway resistance (Raw)
- Tissue resistance
- Normal Raw: 0.5-2.5 cmH2O/L/s
- Increased in obstruction

**Work of Breathing:**
- Elastic work (compliance)
- Resistive work (resistance)
- Increased in lung disease
- Leads to respiratory muscle fatigue

### Pressure-Volume Relationships

**Static P-V Curve:**
- Sigmoid shape
- Upper inflection point
- Lower inflection point
- Hysteresis between inspiration/expiration

**Dynamic P-V Curve:**
- Includes resistance effects
- Work of breathing calculation
- Auto-PEEP assessment
- Ventilator optimization

**Specific Compliance:**
- Compliance normalized to FRC
- Allows size-independent comparison
- Important in pediatrics

### Gas Distribution

**Single-Breath Nitrogen Washout:**
- Phase I: dead space
- Phase II: transition
- Phase III: alveolar plateau
- Phase IV: closing volume

**Closing Volume and Capacity:**
- Airway closure in dependent zones
- Increases with age
- Elevated in small airways disease
- Related to V/Q mismatch

**Multiple-Breath Washout:**
- Lung clearance index (LCI)
- Sensitive to early obstruction
- Valuable in CF monitoring
- Research applications

### Respiratory Muscle Function

**Transdiaphragmatic Pressure:**
- Pdi = Pga - Pes
- Gold standard for diaphragm function
- Invasive measurement
- Research and specialized clinical use

**Sniff Nasal Inspiratory Pressure:**
- Non-invasive surrogate
- Sniff test through one nostril
- Normal >70 cmH2O (men), >60 (women)
- Used in neuromuscular disease

**Maximum Static Pressures:**
- MIP (at RV): inspiratory strength
- MEP (at TLC): expiratory strength
- Reduced in muscle weakness
- Predicts ventilatory failure

### Ventilation-Perfusion Assessment

**Dead Space Measurement:**
- Bohr equation: VD/VT
- Normal: 0.2-0.35
- Elevated in PE, emphysema
- Arterial-end tidal CO2 gradient

**Shunt Calculation:**
- 100% O2 method
- Physiologic shunt equation
- Elevated in ARDS, pneumonia
- Refractory hypoxemia

**V/Q Scanning:**
- Nuclear medicine technique
- Identifies V/Q mismatch
- PE diagnosis
- Pre-operative assessment

### Altitude and Hypoxic Responses

**Hypoxic Ventilatory Response:**
- Carotid body sensitivity
- Individual variation
- Blunted in chronic hypoxia
- Important for altitude adaptation

**Hypercapnic Ventilatory Response:**
- Central chemoreceptor sensitivity
- Reduced in chronic CO2 retention
- Predicts ventilatory failure
- Sleep apnea relevance

### Oscillometry

**Impulse Oscillometry:**
- Measures impedance
- Resistance at different frequencies
- Reactance (elastic properties)
- Minimal cooperation required

**Interpretation:**
- R5: total resistance
- R20: central airway resistance
- R5-R20: peripheral resistance
- X5: reactance (compliance)

### Quality Assurance

**ATS/ERS Standards:**
- Equipment calibration
- Biological controls
- Technician training
- Interpretation guidelines

**Sources of Error:**
- Suboptimal effort
- Air leaks
- Cough or glottic closure
- Equipment malfunction`,
      keyTerms: [
        { term: 'compliance', definition: 'The ease with which the lungs expand; change in volume per unit change in pressure' },
        { term: 'elastance', definition: 'The tendency of the lung to recoil; reciprocal of compliance' },
        { term: 'closing volume', definition: 'The lung volume at which small airways begin to close in dependent lung zones' },
        { term: 'impulse oscillometry', definition: 'Technique measuring respiratory impedance using sound waves without forced maneuvers' },
        { term: 'transdiaphragmatic pressure', definition: 'Pressure difference across the diaphragm, measuring diaphragm strength' },
      ],
      clinicalNotes: 'In patients with neuromuscular disease, supine vital capacity that drops >20% compared to upright suggests significant diaphragm weakness and may predict need for non-invasive ventilation.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pulmonary function integrates advanced physiological concepts, specialized testing protocols, emerging technologies, and sophisticated interpretation frameworks for complex clinical scenarios.',
      explanation: `## Expert Pulmonary Function Assessment

### Advanced Interpretation Paradigms

**Global Lung Initiative (GLI) Equations:**
- Multi-ethnic reference equations
- All-age spirometry (3-95 years)
- Z-score approach
- LLN at -1.645 z-score

**Pattern Recognition Algorithms:**
- Obstruction grading: mild to very severe
- Mixed patterns: obstruction + restriction
- Nonspecific patterns
- Bronchodilator responsiveness phenotypes

### Complex Flow-Volume Analysis

**Small Airways Disease:**
- FEF25-75 reduction
- Concavity of expiratory limb
- Frequency dependence of resistance
- Impulse oscillometry sensitivity

**Expiratory Flow Limitation:**
- Negative expiratory pressure technique
- Forced oscillation during tidal breathing
- Present in severe COPD
- Dynamic hyperinflation mechanism

**Maximal Expiratory Flow-Static Recoil:**
- Upstream resistance calculation
- Differentiates intrinsic vs loss of elastic recoil
- Wave speed theory application

### Specialized Testing Protocols

**Fractional Exhaled Nitric Oxide (FeNO):**
- Marker of eosinophilic inflammation
- Standardized 50 mL/s flow rate
- High FeNO: >50 ppb (adults)
- Guides ICS therapy in asthma

**Cardiopulmonary Exercise Testing:**
- VO2 peak and AT determination
- VE/VCO2 slope
- Oxygen pulse
- Exercise oscillatory ventilation
- Prognostic in heart failure and PAH

**High-Altitude Simulation Testing:**
- Hypoxic challenge (15% O2)
- Predict in-flight hypoxemia
- SpO2 <85% suggests supplemental O2 need

### Multiple Inert Gas Elimination (MIGET)

**Technique:**
- Six gases of varying solubility
- V/Q distribution recovery
- Research gold standard
- Quantifies shunt and dead space

**Applications:**
- ARDS pathophysiology
- COPD phenotyping
- Drug effect studies
- Exercise V/Q changes

### Imaging-Function Correlation

**CT Densitometry:**
- Emphysema quantification
- -950 HU threshold
- Airway wall thickness
- Air trapping on expiration

**Hyperpolarized Gas MRI:**
- He-3 or Xe-129
- Ventilation imaging
- ADC for acinar structure
- Research applications

**Electrical Impedance Tomography:**
- Real-time ventilation monitoring
- Regional assessment
- Ventilator optimization
- Bedside availability

### Special Populations

**Pediatric Considerations:**
- Age-specific reference equations
- Raised volume rapid thoracoabdominal compression
- Multiple-breath washout sensitivity
- Cooperation challenges

**Geriatric Assessment:**
- Age-related changes vs disease
- Appropriate reference values
- Cognitive/physical limitations
- Dyspnea discordance

**Obesity Effects:**
- ERV reduction
- Normal to reduced FVC
- Preserved FEV1/FVC
- Breathing pattern changes

### Perioperative Assessment

**Risk Stratification:**
- Predictive postoperative FEV1 (ppo-FEV1)
- DLCO prognostic value
- Exercise capacity thresholds
- Anatomic vs physiologic assessment

**Lung Resection Evaluation:**
- Segment counting
- Quantitative V/Q scanning
- ppo-FEV1 >40% predicted favorable
- DLCO independent predictor

### Emerging Technologies

**Forced Oscillation Technique Advances:**
- Within-breath analysis
- Intra-breath reactance changes
- Airway closure detection
- Preschool feasibility

**Computational Modeling:**
- CFD airflow simulation
- Patient-specific models
- Virtual bronchoscopy planning
- Drug deposition prediction

**Artificial Intelligence:**
- Automated quality assessment
- Pattern recognition
- Outcome prediction
- Integration with imaging

### Research Applications

**Biomarker Integration:**
- Exhaled breath condensate
- Volatile organic compounds
- Proteomics and metabolomics
- Precision medicine approaches

**Longitudinal Phenotyping:**
- Rate of decline analysis
- Trajectory identification
- Treatment response prediction
- Natural history studies

**Clinical Trial Endpoints:**
- Regulatory acceptance
- Minimal clinically important difference
- Composite endpoints
- Novel outcome measures`,
      keyTerms: [
        { term: 'GLI equations', definition: 'Global Lung Initiative multi-ethnic reference equations for spirometry interpretation' },
        { term: 'MIGET', definition: 'Multiple Inert Gas Elimination Technique; research method quantifying V/Q distribution' },
        { term: 'hyperpolarized gas MRI', definition: 'Advanced imaging using noble gases to visualize lung ventilation' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of eosinophilic airway inflammation' },
        { term: 'ppo-FEV1', definition: 'Predicted postoperative FEV1; used for surgical risk assessment' },
      ],
      clinicalNotes: `Key clinical pearls in pulmonary function:

1. **GLI 2012 equations:** Now recommended over NHANES III for multi-ethnic applicability and all-age range coverage.

2. **Bronchodilator response phenotypes:** Some patients show volume response (FVC increase) without flow response, suggesting air trapping reversal.

3. **DLCO discordance:** When DLCO is disproportionately low relative to FEV1 in COPD, consider emphysema predominance or pulmonary vascular disease.

4. **Flow-volume loop patterns:** Expiratory oscillations may indicate tracheobronchomalacia; inspiratory plateau with expiratory scooping suggests obesity.

5. **Small airways assessment:** Impulse oscillometry may detect early dysfunction before spirometric changes in asthma and COPD.

6. **Preoperative evaluation:** DLCO <60% predicted is an independent risk factor for complications and mortality after lung resection.

7. **FeNO clinical utility:** Best validated for predicting ICS response and identifying eosinophilic asthma phenotype; less reliable in smokers.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ats-spirometry-2019',
      type: 'article',
      title: 'Standardization of Spirometry 2019 Update',
      authors: ['Graham BL', 'Steenbruggen I', 'Miller MR', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
    },
    {
      id: 'gli-2012',
      type: 'article',
      title: 'Multi-ethnic Reference Values for Spirometry',
      authors: ['Quanjer PH', 'Stanojevic S', 'Cole TJ', 'et al.'],
      source: 'European Respiratory Journal',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-gas-exchange', targetType: 'concept', relationship: 'related', label: 'Gas Exchange' },
    { targetId: 'respiratory-mechanics', targetType: 'concept', relationship: 'related', label: 'Respiratory Mechanics' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physiology', 'pulmonology', 'diagnostics'],
    keywords: ['spirometry', 'lung volumes', 'pulmonary function', 'FEV1', 'FVC', 'DLCO'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default lungFunctionContent;
