/**
 * Pulmonary Function Tests (PFTs) - Clinical Respiratory Medicine
 *
 * Comprehensive coverage of spirometry, lung volumes, diffusion capacity,
 * and their interpretation in respiratory disease diagnosis and monitoring.
 */

import { EducationalContent } from '../../types';

export const pulmonaryFunctionTestsContent: EducationalContent = {
  id: 'clinical-pulmonary-function-tests',
  type: 'concept',
  name: 'Pulmonary Function Tests',
  alternateNames: ['PFTs', 'Spirometry', 'Lung Function Tests', 'Pulmonary Function Testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary function tests are special breathing tests that measure how well your lungs work, like checking how much air you can breathe in and out and how fast you can blow it out.',
      explanation: `## What Are Pulmonary Function Tests?

Pulmonary function tests, or PFTs, are simple breathing tests that help doctors understand how well your lungs are working. They are painless and non-invasive.

### What These Tests Measure

**1. How Much Air Your Lungs Can Hold**
- Think of your lungs like balloons - these tests measure how big they can get
- This is called "lung volume"

**2. How Fast You Can Blow Air Out**
- Like blowing out birthday candles - how strong is your blow?
- This is called "airflow"

**3. How Well Oxygen Moves Into Your Blood**
- This checks if oxygen can pass from your lungs into your bloodstream
- This is called "gas exchange"

### Common Breathing Tests

**Spirometry (The Most Common Test)**
- You take a deep breath in
- Then blow out as hard and fast as you can into a tube
- The machine measures how much air you blow out and how fast

**Peak Flow Test**
- Measures how fast you can blow air out
- Often used at home for people with asthma
- Like a speedometer for your breathing

### Why Doctors Order These Tests

- To find out why someone has trouble breathing
- To check if treatments are working
- To see how lungs are working before surgery
- To check for lung diseases like asthma or COPD

### What to Expect

- You may sit or stand while doing the tests
- You will breathe through a mouthpiece
- A nose clip keeps you from breathing through your nose
- You may need to do each test several times
- The whole process takes about 30-60 minutes`,
      keyTerms: [
        { term: 'pulmonary function tests', definition: 'Breathing tests that measure how well your lungs are working' },
        { term: 'spirometry', definition: 'A common breathing test where you blow into a tube to measure lung function' },
        { term: 'lung volume', definition: 'The amount of air your lungs can hold' },
        { term: 'peak flow', definition: 'A measurement of how fast you can blow air out of your lungs' },
      ],
      analogies: [
        'Your lungs are like a car engine - PFTs are like diagnostic tests to see how well the engine is running.',
        'Spirometry is like a speed test for your breathing - measuring how much and how fast you can move air.',
        'Lung capacity is like the size of a gas tank - it tells you the maximum amount it can hold.',
      ],
      examples: [
        'A person with asthma might have normal lung volume but reduced airflow during an attack.',
        'Someone with emphysema might have larger lung volumes but poor gas exchange.',
        'Athletes often have better PFT results than non-athletes because their lungs are stronger.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary function tests assess lung mechanics through spirometry (FEV1, FVC), lung volumes, and diffusion capacity. These measurements help classify respiratory disorders as obstructive or restrictive and monitor disease progression.',
      explanation: `## Types of Pulmonary Function Tests

### Spirometry - The Foundation

**Key Measurements:**

| Measurement | Description | Normal Value |
|-------------|-------------|--------------|
| FVC | Forced Vital Capacity - Total air exhaled forcefully | >80% predicted |
| FEV1 | Forced Expiratory Volume in 1 second | >80% predicted |
| FEV1/FVC | Ratio of FEV1 to FVC | >0.70 (70%) |
| PEF | Peak Expiratory Flow - Maximum flow rate | Variable |

**Interpreting the FEV1/FVC Ratio:**
- **Normal:** >0.70
- **Reduced:** <0.70 suggests airway obstruction
- The lower the ratio, the more severe the obstruction

### Lung Volume Tests

Measured using body plethysmography or helium dilution:

| Volume | Definition | Normal Range |
|--------|------------|--------------|
| TLC | Total Lung Capacity - Air in lungs at full inhalation | 4-6 liters |
| RV | Residual Volume - Air remaining after full exhalation | 1-1.5 liters |
| VC | Vital Capacity - Maximum air that can be exhaled | 3-5 liters |
| FRC | Functional Residual Capacity - Air at rest | 2-3 liters |

### Diffusion Capacity (DLCO)

Measures gas exchange across the alveolar-capillary membrane:
- **Principle:** Small amount of carbon monoxide inhaled; measures how much transfers to blood
- **Normal:** >80% predicted
- **Reduced in:** Emphysema, interstitial lung disease, pulmonary vascular disease

### Bronchodilator Response Testing

- Baseline spirometry performed
- Bronchodilator (albuterol) given
- Spirometry repeated after 15-20 minutes
- **Significant response:** FEV1 or FVC increases by >12% and >200 mL
- Suggests reversible airway obstruction (asthma)

### Pattern Recognition

**Obstructive Pattern:**
- Reduced FEV1/FVC ratio (<0.70)
- FEV1 reduced more than FVC
- Increased RV and TLC (air trapping)
- Examples: Asthma, COPD, bronchiectasis

**Restrictive Pattern:**
- Normal or increased FEV1/FVC ratio
- Both FEV1 and FVC reduced proportionally
- Reduced TLC
- Examples: Interstitial lung disease, chest wall disorders, neuromuscular disease`,
      keyTerms: [
        { term: 'FEV1', definition: 'Forced Expiratory Volume in 1 second - amount of air exhaled in the first second of forced expiration', pronunciation: 'EF-EE-VEE-ONE' },
        { term: 'FVC', definition: 'Forced Vital Capacity - total amount of air forcibly exhaled after maximum inhalation' },
        { term: 'DLCO', definition: 'Diffusing capacity of the Lung for Carbon Monoxide - measures gas exchange efficiency' },
        { term: 'obstructive pattern', definition: 'PFT pattern with reduced airflow, typically FEV1/FVC <0.70' },
        { term: 'restrictive pattern', definition: 'PFT pattern with reduced lung volumes but preserved airflow ratio' },
        { term: 'bronchodilator response', definition: 'Improvement in lung function after bronchodilator medication, suggesting reversible obstruction' },
      ],
      analogies: [
        'FEV1 is like the "acceleration" of your lungs - how fast you can get air out, while FVC is like the "total distance" you can travel.',
        'Obstructive disease is like a narrowed straw - you can still take a big breath in, but it is hard to get air out quickly.',
        'Restrictive disease is like a smaller balloon - there is less room for air overall, but what is there moves normally.',
      ],
      examples: [
        'A patient with COPD might show FEV1 60% predicted, FVC 80% predicted, FEV1/FVC 0.55 (obstructive).',
        'A patient with pulmonary fibrosis might show FEV1 65% predicted, FVC 65% predicted, normal FEV1/FVC (restrictive).',
        'An asthmatic might show 15% improvement in FEV1 after albuterol (significant bronchodilator response).',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary function testing employs standardized techniques and reference equations to assess respiratory mechanics. Interpretation requires understanding of predicted values, bronchoprovocation testing, and differentiation between obstructive and restrictive pathophysiology.',
      explanation: `## Spirometry Technique and Quality

### Acceptability Criteria (ATS/ERS Standards)

**For Each Maneuver:**
1. **Good start:** Extrapolated volume <5% of FVC or <150 mL
2. **No coughing:** Especially in first second
3. **No early termination:** At least 6 seconds of exhalation (or plateau)
4. **No leaks:** Around mouthpiece
5. **No variable effort:** Consistent performance

**Reproducibility:**
- Three acceptable maneuvers required
- Two largest FVC values within 150 mL
- Two largest FEV1 values within 150 mL

### Reference Equations

PFT results expressed as percent predicted based on:
- Age
- Sex
- Height
- Ethnicity

Common reference sets: NHANES III, GLI (Global Lung Initiative)

### Advanced Spirometry Measurements

**Flow-Volume Loops:**
- Visual representation of expiratory and inspiratory flows
- Characteristic patterns for different diseases

**Maximal Voluntary Ventilation (MVV):**
- Patient breathes deeply and rapidly for 12-15 seconds
- Measures ventilatory capacity
- Important preoperative assessment

### Bronchoprovocation Testing

**Methacholine Challenge:**
- For diagnosing asthma when baseline PFTs normal
- Increasing methacholine concentrations inhaled
- PC20: Concentration causing 20% FEV1 drop
- PC20 <8 mg/mL = positive (airway hyperresponsiveness)

**Exercise-Induced Bronchospasm Testing:**
- Spirometry at baseline
- Standardized exercise protocol
- Spirometry at 1, 5, 10, 15, 30 minutes post-exercise
- >10% FEV1 drop = positive

### Complete PFT Battery Interpretation

**Step 1: Assess Spirometry**
- Check FEV1/FVC ratio
- Classify as normal, obstructive, or restrictive pattern

**Step 2: Assess Lung Volumes (if available)**
- Confirm restrictive pattern with reduced TLC
- Assess for air trapping (increased RV, RV/TLC)

**Step 3: Assess DLCO**
- Low DLCO + obstructive pattern = emphysema
- Low DLCO + restrictive pattern = interstitial lung disease
- Normal DLCO + restrictive pattern = chest wall/neuromuscular disorder

**Step 4: Assess Bronchodilator Response**
- Determines reversibility of obstruction

### Severity Grading (Based on FEV1 % predicted)

| Severity | FEV1 % Predicted |
|----------|------------------|
| Normal | >80% |
| Mild | 70-79% |
| Moderate | 60-69% |
| Moderately Severe | 50-59% |
| Severe | 35-49% |
| Very Severe | <35% |

### Common Clinical Scenarios

**COPD:**
- FEV1/FVC <0.70
- Reduced FEV1
- Minimal bronchodilator response
- Reduced DLCO (if emphysema predominant)

**Asthma:**
- Variable obstruction
- Significant bronchodilator response
- May be normal between attacks
- Positive bronchoprovocation

**Interstitial Lung Disease:**
- Restrictive pattern
- Reduced DLCO
- Reduced compliance`,
      keyTerms: [
        { term: 'PC20', definition: 'Provocative concentration causing 20% fall in FEV1; used in bronchoprovocation testing' },
        { term: 'flow-volume loop', definition: 'Graphical representation of airflow versus lung volume during forced expiration and inspiration' },
        { term: 'air trapping', definition: 'Incomplete emptying of alveoli during exhalation; manifests as increased residual volume' },
        { term: 'body plethysmography', definition: 'Method to measure lung volumes using a sealed chamber and Boyle\'s law' },
        { term: 'MVV', definition: 'Maximum Voluntary Ventilation; maximal breathing capacity measured over 12-15 seconds' },
      ],
      clinicalNotes: 'Quality spirometry is essential for accurate diagnosis. Always check acceptability and reproducibility before interpretation. A single poor-quality test can lead to misdiagnosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced pulmonary function interpretation integrates multiple test parameters, recognizes complex patterns, and applies clinical context. Specialized tests include bronchoprovocation, lung compliance measurements, and cardiopulmonary exercise testing for comprehensive respiratory assessment.',
      explanation: `## Advanced PFT Interpretation

### Complex Patterns

**Mixed Obstructive-Restrictive Pattern:**
- FEV1/FVC reduced (obstructive)
- TLC reduced (restrictive)
- Seen in: COPD with obesity, advanced fibrosis with bronchiectasis

**Upper Airway Obstruction:**
- Variable extrathoracic: Inspiratory flow limitation (vocal cord dysfunction)
- Variable intrathoracic: Expiratory flow limitation (tracheomalacia)
- Fixed: Both inspiratory and expiratory limitation (tracheal stenosis)
- Recognized by: Flattened flow-volume loop

**Non-Specific Pattern:**
- Reduced FEV1 and FVC
- Normal FEV1/FVC
- Normal TLC
- Poorly understood; may represent early obstruction or submaximal effort

### Lung Mechanics Assessment

**Compliance Measurement:**
- Static compliance: Change in volume / Change in pressure (plateau pressure)
- Dynamic compliance: Tidal volume / (Peak pressure - PEEP)
- Reduced in: ARDS, pulmonary fibrosis
- Increased in: emphysema

**Airway Resistance (Raw):**
- Measured by body plethysmography
- Increased in obstructive diseases
- Decreased in restrictive diseases

### Specialized PFTs

**Fractional Exhaled Nitric Oxide (FeNO):**
- Marker of eosinophilic airway inflammation
- Elevated in allergic asthma
- Guides corticosteroid therapy
- Normal: <25 ppb (adults), <35 ppb (children)

**Oscillometry (Forced Oscillation Technique):**
- Measures respiratory impedance during tidal breathing
- Useful when spirometry not possible (young children, ICU patients)
- Measures resistance and reactance at different frequencies

**Six-Minute Walk Test:**
- Functional assessment, not strictly PFT
- Distance walked correlates with survival in many lung diseases
- Oxygen desaturation during walk significant

**Cardiopulmonary Exercise Testing (CPET):**
- Comprehensive assessment of exercise limitation
- Determines if limitation is cardiac, pulmonary, or deconditioning
- Key parameters: VO2 max, anaerobic threshold, VE/VCO2 slope

### Preoperative Pulmonary Assessment

**Risk Factors for Postoperative Complications:**
- FEV1 <2 L (or <40% predicted)
- DLCO <40% predicted
- Maximum oxygen consumption <15 mL/kg/min

**Lung Cancer Resection:**
- Predicted postoperative FEV1 (ppoFEV1) >40% = acceptable risk
- ppoFEV1 = Preop FEV1 x (1 - % functional lung removed)
- Quantitative V/Q scan for precise calculation

### Pediatric Considerations

- Reference equations different from adults
- Technique-dependent: Young children may not perform acceptable maneuvers
- Peak flow meters useful for home monitoring in asthma
- spirometry typically possible by age 6-7

### Quality Assurance

**Equipment Calibration:**
- Daily calibration with 3-liter syringe
- Weekly linearity checks
- Temperature, humidity, altitude corrections

**Technician Certification:**
- NIOSH-approved spirometry courses
- Regular competency assessment

### PFTs in Specific Diseases

**Cystic Fibrosis:**
- Progressive obstructive pattern
- Monitor for acute decline
- Bronchodilator response variable

**Neuromuscular Disease:**
- Restrictive pattern
- Reduced VC, MIP, MEP
- Serial measurements track progression

**Pulmonary Vascular Disease:**
- Often normal spirometry
- Reduced DLCO
- Exercise-induced hypoxemia
- Elevated VE/VCO2 on CPET`,
      keyTerms: [
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of eosinophilic airway inflammation' },
        { term: 'VO2 max', definition: 'Maximal oxygen uptake during exercise; measure of cardiorespiratory fitness' },
        { term: 'VE/VCO2 slope', definition: 'Ventilatory efficiency during exercise; elevated in heart failure and pulmonary vascular disease' },
        { term: 'ppoFEV1', definition: 'Predicted postoperative FEV1; used to assess surgical risk for lung resection' },
        { term: 'respiratory impedance', definition: 'Opposition to airflow during oscillometry; includes resistance and reactance components' },
      ],
      clinicalNotes: 'In patients with normal spirometry but persistent respiratory symptoms, consider bronchoprovocation testing for asthma, CPET for exercise limitation, or specialized testing for pulmonary vascular disease.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pulmonary function interpretation requires integration of complex physiological principles, recognition of technical limitations, and application of evidence-based guidelines. Advanced applications include ICU monitoring, longitudinal tracking, and research methodologies.',
      explanation: `## Physiological Principles in PFTs

### Gas Compression Artifacts

In body plethysmography:
- Thoracic gas volume measured at mouth
- Compression of thoracic gas during effort affects measurement
- "Shutter technique" minimizes artifact
- Important in severe obstruction where gas compression significant

### Closing Volume and Airway Closure

- Small airways close at low lung volumes
- Closing volume increases with age and disease
- May explain gas exchange abnormalities despite normal spirometry
- Measured by nitrogen washout or inert gas bolus techniques

### Ventilation-Perfusion Relationships

**Dead Space:**
- Anatomical: Conducting airways (~150 mL)
- Alveolar: Ventilated but not perfused alveoli
- Physiological: Sum of both
- VD/VT ratio increases with lung disease

**Shunt:**
- Perfusion without ventilation
- Physiological (bronchial, Thebesian veins)
- Pathological (pneumonia, atelectasis)

### Research and Emerging Techniques

**Multiple Breath Nitrogen Washout:**
- Measures ventilation heterogeneity
- LCI (Lung Clearance Index): Sensitive marker of small airway disease
- Useful in early cystic fibrosis, asthma

**Impulse Oscillometry Refinements:**
- Frequency dependence of resistance
- Reactance area (AX)
- Sensitive to peripheral airway changes

**Hyperpolarized Gas MRI:**
- Helium-3 or xenon-129 imaging
- Ventilation distribution assessment
- Research tool for regional lung function

### PFTs in Critical Care

**Bedside Spirometry:**
- MIP/MEP: Neuromuscular function
- VC: Trend for weaning assessment
- Cuff leak test: Laryngeal edema before extubation

**Esophageal Manometry:**
- Direct pleural pressure measurement
- Transpulmonary pressure (Ptp = Palv - Pes)
- Guides mechanical ventilation in ARDS
- Assessment of respiratory effort

### Longitudinal Tracking and Reference Change Value

**Reference Change Value (RCV):**
- Statistically significant change between tests
- Accounts for biological and measurement variability
- For FEV1: approximately 12% change is significant

**Annual Decline:**
- Normal: ~30 mL/year (FEV1)
- Accelerated in COPD: >60 mL/year
- Smoking cessation slows decline

### Evidence-Based Guidelines

**GOLD COPD Strategy:**
- Spirometry required for diagnosis
- FEV1/FVC <0.70 post-bronchodilator
- Severity classification guides treatment

**ATS/ERS Interpretation Guidelines:**
- Lower limit of normal (LLN) vs fixed ratio debate
- LLN: 5th percentile of healthy population
- Fixed ratio (0.70): May overdiagnose in elderly, underdiagnose in young

**Asthma Guidelines (GINA):**
- Spirometry preferred diagnostic test
- Bronchodilator reversibility
- Variability in lung function over time
- Alternative: Bronchoprovocation

### Special Populations

**Obesity:**
- Reduces FRC and ERV
- May reduce TLC in extreme obesity
- FEV1/FVC usually preserved or increased
- Obesity-hypoventilation syndrome: reduced VC

**Pregnancy:**
- FRC reduced (20%)
- TV increased
- MV increased (progesterone effect)
- DLCO increased (increased blood volume)

**Athletes:**
- Larger lung volumes
- Higher DLCO (increased blood volume)
- Exercise-induced bronchoconstriction common in elite athletes

### Quality Metrics and Outcomes

**Diagnostic Yield:**
- Appropriate test ordering
- Pre-test probability
- Post-test probability
- Clinical utility assessment

**PFTs as Biomarkers:**
- Clinical trial endpoints
- Drug development
- Population health studies

### Teaching and Competency

**Interpretation Competencies:**
- Pattern recognition
- Clinical correlation
- Quality assessment
- Communication of results

**Common Pitfalls:**
- Over-interpretation of minor abnormalities
- Failure to recognize technical errors
- Ignoring clinical context
- Inadequate bronchodilator wait time`,
      keyTerms: [
        { term: 'LCI', definition: 'Lung Clearance Index; measure of ventilation heterogeneity from multiple breath washout' },
        { term: 'reactance area', definition: 'Low-frequency reactance area on oscillometry; reflects elastic properties and peripheral airway function' },
        { term: 'transpulmonary pressure', definition: 'Pressure difference between alveoli and pleural space; true lung-distending pressure' },
        { term: 'reference change value', definition: 'Statistically significant change accounting for biological and measurement variability' },
        { term: 'lower limit of normal', definition: '5th percentile of reference population; statistically robust threshold vs fixed ratio' },
      ],
      clinicalNotes: 'The choice between fixed ratio (FEV1/FVC <0.70) and lower limit of normal for diagnosing obstruction remains debated. Fixed ratio may overdiagnose in elderly, underdiagnose in young. LLN more statistically rigorous but more complex to apply.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ats-ers-pft-guidelines',
      type: 'article',
      title: 'Standardization of Spirometry 2019 Update',
      authors: ['Stanojevic S', 'Kaminsky DA', 'Miller MR', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.201908-1590ST',
    },
    {
      id: 'gold-report-2024',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease (2024 Report)',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease'],
      source: 'GOLD',
      url: 'https://goldcopd.org',
    },
    {
      id: 'gina-asthma-2024',
      type: 'article',
      title: 'Global Strategy for Asthma Management and Prevention (2024 Update)',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA',
      url: 'https://ginasthma.org',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-pulmonary-fibrosis', targetType: 'condition', relationship: 'related', label: 'Pulmonary Fibrosis' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'diagnostic-testing', 'clinical-medicine'],
    keywords: ['spirometry', 'FEV1', 'FVC', 'DLCO', 'lung function', 'pulmonary function tests'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryFunctionTestsContent;
