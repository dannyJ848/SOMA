/**
 * Pulmonary Function Tests - Comprehensive Educational Content
 *
 * Covers spirometry, lung volumes, diffusing capacity, bronchoprovocation,
 * and interpretation of pulmonary function tests for diagnosis and
 * management of respiratory disease.
 */

import { EducationalContent } from '../../types';

export const pulmonaryFunctionTests: EducationalContent = {
  id: 'topic-pulmonary-function-tests',
  type: 'topic',
  name: 'Pulmonary Function Tests',
  alternateNames: [
    'PFTs',
    'Pulmonary Function Testing',
    'Spirometry and Lung Volumes',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary function tests (PFTs) are breathing tests that measure how well your lungs are working by checking how much air you can breathe in and out and how fast you can do it.',
      explanation: `**What Are Pulmonary Function Tests?**

Pulmonary function tests (PFTs) are a group of tests that measure how well your lungs work. They check:

- How much air your lungs can hold
- How quickly you can move air in and out
- How well your lungs put oxygen into your blood

**Why Are PFTs Done?**

Doctors order PFTs to:
- Find out why you're having trouble breathing
- Diagnose lung diseases like asthma or COPD
- Check how well lung medicines are working
- See how your lungs are doing over time
- Prepare for surgery

**What Happens During a PFT?**

**Before the Test:**
- Wear loose, comfortable clothes
- Don't eat a heavy meal beforehand
- Don't smoke for several hours before
- Ask about your medicines (some may need to be paused)

**During the Test:**
You'll sit in a chair and breathe through a mouthpiece connected to a machine. The technician will ask you to:

1. **Breathe normally**: Just relaxed breathing
2. **Take a deep breath in**: Fill your lungs completely
3. **Blow out hard and fast**: Blow ALL the air out as fast as you can
4. **Keep blowing**: Even when you feel empty, keep blowing!
5. **Repeat**: You'll do this several times to get good measurements

**The technician will coach you:**
- "Bigger breath!"
- "Faster!"
- "Keep blowing, blow, blow, blow!"

**Different Types of Breathing Tests**

**Spirometry (most common):**
- Measures how much and how fast you can breathe out
- Takes about 10-15 minutes
- Used to diagnose asthma, COPD

**Lung Volume Tests:**
- Measure total amount of air your lungs can hold
- May involve sitting in a clear box (body plethysmograph)
- Takes about 30 minutes

**Diffusion Test:**
- Measures how well oxygen moves from your lungs into your blood
- You breathe in a special gas mixture
- Takes about 15 minutes

**Is It Safe?**

Yes, PFTs are very safe. You might feel:
- A little dizzy from deep breathing
- Lightheaded for a moment
- Slightly tired from the effort

**Understanding Your Results**

Your doctor will look at:
- **FVC**: How much air you can blow out total
- **FEV1**: How much air you can blow out in the first second
- **The ratio**: How these numbers compare to each other

Normal results depend on your:
- Age
- Height
- Gender
- Race/ethnicity

**What Do Abnormal Results Mean?**

- **Obstructive disease**: Air gets trapped (asthma, COPD)
- **Restrictive disease**: Can't fill lungs completely (pulmonary fibrosis)
- **Mixed**: Both problems present

**Tips for a Good Test:**
- Give it your best effort!
- Listen carefully to instructions
- Don't give up too soon when blowing out
- Ask questions if you don't understand`,
      keyTerms: [
        { term: 'spirometry', definition: 'A test that measures how much and how fast air moves out of your lungs', pronunciation: 'spy-ROM-eh-tree' },
        { term: 'FVC', definition: 'Forced Vital Capacity; the total amount of air you can blow out after taking a deep breath' },
        { term: 'FEV1', definition: 'Forced Expiratory Volume in 1 second; the amount of air you can blow out in the first second' },
        { term: 'obstructive disease', definition: 'Lung disease where air flow is blocked (asthma, COPD)' },
        { term: 'restrictive disease', definition: 'Lung disease where lungs can\'t fill completely (fibrosis)' },
      ],
      analogies: [
        'Your lungs are like balloons - PFTs check how big the balloons are and how easily air goes in and out.',
        'Blowing into a PFT machine is like blowing out candles on a birthday cake, but keeping the air going much longer.',
      ],
      examples: [
        'A person with asthma might show obstruction on PFTs that gets better after using an inhaler.',
        'Someone with lung scarring (fibrosis) might show restriction - smaller lung volumes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary function tests include spirometry, lung volume measurement, and diffusing capacity assessment. These tests distinguish between obstructive patterns (reduced flow rates) and restrictive patterns (reduced volumes), guiding diagnosis and management of respiratory disease.',
      explanation: `## Components of PFTs

### Spirometry

**Measurements:**
- **FVC**: Forced Vital Capacity - total air exhaled
- **FEV1**: Forced Expiratory Volume in 1 second
- **FEV1/FVC Ratio**: Proportion of FVC exhaled in first second
- **FEF25-75**: Forced Expiratory Flow between 25-75% of FVC

**Quality Indicators:**
- Good start of test (sharp rise)
- No coughing, especially in first second
- No early termination
- End of test plateau (3 seconds of minimal flow)
- Three acceptable maneuvers, two reproducible (within 150 mL)

### Lung Volumes

**Measurements:**
- **TLC**: Total Lung Capacity - total air in lungs
- **RV**: Residual Volume - air left after maximal exhalation
- **FRC**: Functional Residual Capacity - air at rest
- **VC**: Vital Capacity - difference between TLC and RV

**Methods:**
- **Body plethysmography**: Gold standard, measures all volumes
- **Helium dilution**: Measures communicating volumes only
- **Nitrogen washout**: Alternative gas dilution method

### Diffusing Capacity (DLCO)

**What it measures:**
- Gas transfer from alveoli to blood
- Reflects alveolar surface area and capillary blood volume
- Uses carbon monoxide (which binds hemoglobin tightly)

**Interpretation:**
- Decreased in: emphysema, pulmonary fibrosis, pulmonary hypertension
- Increased in: polycythemia, pulmonary hemorrhage, heart failure

## Patterns of Abnormality

### Obstructive Pattern

**Spirometry findings:**
- FEV1/FVC ratio < 0.70 (or < lower limit of normal)
- FVC may be normal or decreased
- FEV1 decreased disproportionately

**Causes:**
- Asthma (often reversible)
- COPD (not fully reversible)
- Bronchiectasis
- Cystic fibrosis

**Severity staging (COPD):**
| Stage | FEV1 % Predicted |
|-------|------------------|
| Mild | ≥80% |
| Moderate | 50-79% |
| Severe | 30-49% |
| Very Severe | <30% |

### Restrictive Pattern

**Spirometry findings:**
- FVC decreased
- FEV1/FVC ratio normal or increased
- Both FEV1 and FVC reduced proportionally

**Lung volumes:**
- TLC decreased (definitive for restriction)
- RV decreased
- FRC decreased

**Causes:**
- Pulmonary fibrosis
- Chest wall deformities
- Neuromuscular disease
- Pleural effusion
- Obesity (mild restriction)

### Mixed Pattern

**Features of both:**
- FEV1/FVC ratio low
- TLC decreased
- Suggests combined pathology

## Reversibility Testing (Bronchodilator Response)

**Method:**
1. Baseline spirometry
2. Administer bronchodilator (albuterol)
3. Repeat spirometry after 15 minutes

**Significant Response:**
- FEV1 increase >12% AND >200 mL
- Suggests asthma or responsive COPD

**Clinical utility:**
- Distinguishes asthma from COPD
- Guides therapeutic decisions
- Predicts response to bronchodilators

## Bronchoprovocation Testing

**Purpose:** Identify airway hyperresponsiveness (asthma)

**Methods:**
- **Methacholine challenge**: Serial methacholine inhalations with spirometry
- **Exercise challenge**: Spirometry before/after exercise
- **Mannitol challenge**: Similar to methacholine

**Positive test:**
- 20% drop in FEV1 (PC20)
- Diagnoses or excludes asthma

## Indications for PFTs

**Diagnostic:**
- Evaluate dyspnea of unknown cause
- Assess chronic cough
- Diagnose obstructive vs restrictive disease
- Evaluate suspected asthma or COPD

**Monitoring:**
- Disease progression
- Treatment response
- Pre-operative assessment
- Disability evaluation

**Contraindications:**
- Recent myocardial infarction (<1 month)
- Recent eye, chest, or abdominal surgery
- Uncontrolled hypertension
- Active respiratory infection
- Pneumothorax`,
      keyTerms: [
        { term: 'TLC', definition: 'Total Lung Capacity; maximum amount of air lungs can hold' },
        { term: 'RV', definition: 'Residual Volume; air remaining after maximal exhalation' },
        { term: 'FRC', definition: 'Functional Residual Capacity; air in lungs at rest' },
        { term: 'DLCO', definition: 'Diffusing capacity of Lung for Carbon Monoxide; measures gas transfer' },
        { term: 'bronchodilator response', definition: 'Improvement in lung function after bronchodilator medication' },
        { term: 'bronchoprovocation', definition: 'Test that provokes airway narrowing to diagnose asthma' },
      ],
      analogies: [
        'Obstructive disease is like breathing through a straw - air gets in but can\'t get out quickly.',
        'Restrictive disease is like having smaller balloons - they can\'t hold as much air.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary function testing integrates spirometry, lung volume measurement, and diffusing capacity assessment to characterize respiratory physiology. Accurate interpretation requires understanding of test quality, reference equations, and pattern recognition to distinguish obstructive, restrictive, and mixed ventilatory defects.',
      explanation: `## Test Quality Assessment

**Acceptability Criteria (ATS/ERS):**

1. **Good start of test**: Sharp rise, no hesitation
2. **No artifacts**: No cough, especially in first second
3. **Sustained exhalation**: Minimum 6 seconds in adults, 3 seconds in children
4. **End of test plateau**: Volume change <25 mL for 1 second
5. **Three acceptable maneuvers**: With two meeting reproducibility criteria

**Reproducibility:**
- Two highest FVC within 150 mL
- Two highest FEV1 within 150 mL

**If criteria not met:**
- Continue testing (up to 8 maneuvers)
- Consider technical issues
- Document why testing stopped

## Spirometry Interpretation

**Step 1: Assess quality**
- Start/end of test
- Reproducibility
- Acceptable maneuvers

**Step 2: Compare to reference**
- Use appropriate reference equations (GLI recommended)
- Adjust for: age, height, gender, race/ethnicity
- Express as % predicted

**Step 3: Identify pattern**

| Measurement | Normal | Obstructive | Restrictive |
|-------------|--------|------------|-------------|
| FVC | ≥80% | Normal/↓ | ↓ |
| FEV1 | ≥80% | ↓↓ | ↓ |
| FEV1/FVC | ≥0.70 (LLN) | ↓ | Normal/↑ |

**Step 4: Grade severity**
- Based on FEV1 % predicted for obstruction
- Based on FVC and TLC for restriction
- Consider DLCO for complete picture

## Lung Volume Interpretation

**Volume Relationships:**

\`\`\`
TLC (Total Lung Capacity)
├── VC (Vital Capacity)
│   ├── IC (Inspiratory Capacity)
│   │   └── TV (Tidal Volume)
│   └── ERV (Expiratory Reserve Volume)
└── RV (Residual Volume)
\`\`\`

**Abnormal Patterns:**

**Hyperinflation (obstruction):**
- ↑ TLC, ↑ RV, ↑ FRC
- RV/TLC ratio increased (>40%)

**Restriction:**
- ↓ TLC, ↓ RV, ↓ FRC
- All volumes reduced proportionally

**Air Trapping:**
- ↑ RV, normal TLC
- RV/TLC ratio elevated

## DLCO Interpretation

**Factors affecting DLCO:**
- Alveolar surface area (emphysema ↓)
- Capillary blood volume (pulmonary embolism ↓)
- Hemoglobin (anemia ↓, polycythemia ↑)
- Ventilation-perfusion matching

**Patterns:**

| Condition | DLCO | Spirometry | Lung Volumes |
|-----------|------|------------|--------------|
| Emphysema | ↓↓ | Obstructive | ↑ TLC |
| Asthma | Normal | Obstructive | Normal |
| Pulmonary fibrosis | ↓↓ | Restrictive | ↓ TLC |
| Pulmonary hypertension | ↓ | Normal/Restrictive | Normal/↓ TLC |
| CHF (interstitial edema) | ↓ | Restrictive | ↓ TLC |

**Clinical applications:**
- Emphysema vs. chronic bronchitis differentiation
- Exercise capacity prediction
- Lung resection surgery planning
- Disease monitoring (IPF, scleroderma lung)

## Reference Equations

**Global Lung Function Initiative (GLI):**
- Recommended standard
- Multi-ethnic (includes multiple populations)
- Ages 3-95 years
- Covers spirometry, lung volumes, DLCO

**Historical equations (still used in some labs):**
- Hankinson (NHANES III)
- Knudson
- Morris
- Crapo

**Important:**
- Use consistent equations for follow-up
- Know which equations your lab uses
- Reference values affect interpretation

## Special Considerations

**Age-related changes:**
- FEV1 declines ~30 mL/year after age 20
- FVC declines less than FEV1
- DLCO declines ~4-5% per decade
- Chest wall compliance decreases

**Obesity:**
- Mild restriction common
- Decreased ERV, FRC
- DLCO may appear low (relative to volume)
- Weight loss can improve PFTs

**Pregnancy:**
- TLC decreases later in pregnancy
- FRC decreases (uterus displaces diaphragm)
- DLCO unchanged or slightly increased
- Consider radiation exposure if chest imaging needed

**Neuromuscular Disease:**
- Weak cough, reduced flows
- Restrictive pattern
- May have nocturnal hypoventilation
- Serial measurements track progression`,
      keyTerms: [
        { term: 'GLI', definition: 'Global Lung Function Initiative; modern reference equations for pulmonary function' },
        { term: 'lower limit of normal (LLN)', definition: '5th percentile of reference population; below this is abnormal' },
        { term: 'air trapping', definition: 'Air retained in lungs at end of exhalation; elevated RV' },
        { term: 'hyperinflation', definition: 'Increased lung volumes; TLC elevated' },
        { term: 'FRC', definition: 'Functional Residual Capacity; lung volume at resting expiratory position' },
        { term: 'ERS', definition: 'European Respiratory Society; sets standards for PFTs with ATS' },
      ],
      clinicalNotes: 'Always assess test quality before interpreting. Poor effort can mimic disease. Obstructive disease defined by FEV1/FVC < LLN (not just <0.70). Restriction requires lung volume measurement (TLC < LLN). DLCO helps distinguish between causes of obstruction and restriction.',
    },
    4: {
      level: 4,
      summary: 'Advanced PFT interpretation integrates spirometry, lung volumes, diffusing capacity, bronchial provocation, and exercise testing to characterize complex respiratory physiology. Understanding technical factors, disease-specific patterns, and clinical context optimizes diagnostic accuracy.',
      explanation: `## Technical Factors Affecting Results

**Equipment Calibration:**
- Daily volume calibration with 3L syringe
- Leak testing
- Temperature and barometric pressure correction (BTPS)
- Linearity verification

**Patient Factors:**

| Factor | Effect | Mitigation |
|--------|--------|------------|
| Poor effort | Reduced volumes, flows | Coaching, encouragement |
| Cough | Artifact, especially early in test | Repeat maneuver, water |
| Glottis closure | Plateau, reduced FEV1 | Coach to keep blowing |
| Leaks at mouthpiece | Volume loss | Check seal, use nose clips |
| Obesity | Restrictive pattern | Use arm span for height |

**Reference Population Issues:**
- Race adjustment controversial
- GLI moving away from race-based adjustment
- Use appropriate equations for patient population

## Complex Patterns

**Upper Airway Obstruction:**

**Characteristics:**
- Flattening of inspiratory and expiratory flow-volume loops
- Plateau in both phases
- FEV1 may be preserved initially

**Causes:**
- Vocal cord dysfunction
- Tracheal stenosis
- Goiter
- Tumors

**Variable Extrathoracic Obstruction:**
- Blunted inspiratory loop
- Normal expiratory flow
- Stridor, often positional

**Variable Intrathoracic Obstruction:**
- Blunted expiratory loop
- Normal inspiratory flow
- Classic asthma pattern

## Disease-Specific Patterns

**COPD Phenotypes:**

| Phenotype | Spirometry | DLCO | HRCT Finding |
|-----------|------------|------|--------------|
| Emphysema-predominant | Obstruction | ↓↓ | Air trapping, low attenuation |
| Chronic bronchitis | Obstruction | Normal/mildly ↓ | Bronchial wall thickening |
| Combined | Obstruction | ↓ | Both findings |

**Asthma vs COPD:**

| Feature | Asthma | COPD |
|---------|--------|------|
| Onset | Younger | Older, smoker |
| Reversibility | Significant (>12% and 200mL) | Minimal |
| DLCO | Normal | Reduced (emphysema) |
| Diurnal variation | Significant | Minimal |
| Smoking history | Not required | Required |

**Interstitial Lung Diseases:**

| Pattern | PFT Findings | Correlation |
|---------|--------------|-------------|
| IPF | Restriction, ↓↓ DLCO | Surgical risk ↑ |
| Sarcoidosis | Restriction, variable DLCO | May normalize |
| Hypersensitivity pneumonitis | Restriction, ↓ DLCO | Chronic changes |
| Connective tissue disease | Restriction, ↓ DLCO | May be mild |

**Neuromuscular Disease Patterns:**

| Disease | Pattern | Features |
|---------|---------|----------|
| ALS | Progressive restriction | Weak respiratory muscles |
| Duchenne MD | Restriction + obstruction | Scoliosis contributes |
| Myasthenia Gravis | Variable, may be normal | Fluctuating weakness |
| Spinal cord injury | Restriction | Diaphragm involvement |

## Bronchoprovocation Testing Details

**Methacholine Challenge:**
- Direct bronchoconstrictor
- Dose-response: 0.025 to 16 mg/mL
- Positive: PC20 ≤8 mg/mL (or 20% drop)
- Sensitivity: High, specificity moderate

**Mannitol Challenge:**
- Indirect bronchoconstrictor
- More specific for asthma
- Similar interpretation

**Exercise Challenge:**
- Preferred for exercise-induced bronchoconstriction
- Target heart rate 80-90% predicted
- Positive: ↓FEV1 ≥10-15%
- May need to repeat with sport-specific stimulus

**Challenge Testing Indications:**
- Symptoms suggesting asthma with normal spirometry
- Exercise-induced symptoms
- Cough variant asthma
- Occupational asthma evaluation

## Exercise Testing

**Cardiopulmonary Exercise Testing (CPET):**

**Measurements:**
- VO2 max (oxygen consumption)
- Anaerobic threshold
- Ventilatory reserve
- Cardiac output
- Breathing reserve

**Patterns:**
- **Cardiac limitation**: Early anaerobic threshold, normal breathing reserve
- **Pulmonary limitation**: Reduced breathing reserve, abnormal ventilatory response
- **Deconditioning**: Low VO2 max, normal anaerobic threshold
- **Normal**: Normal parameters

**Six-Minute Walk Test:**
- Distance walked in 6 minutes
- Desaturation during walk
- Borg dyspnea score
- Prognostic in pulmonary hypertension, IPF

## Preoperative Assessment

**Lung Resection Planning:**

**Predicted Postoperative (PPO) Values:**
- PPO FEV1 = Preop FEV1 × (1 - fraction of lung removed)
- PPO DLCO = Preop DLCO × (1 - fraction of lung removed)

**Thresholds:**
- PPO FEV1 <0.8 L: High risk
- PPO DLCO <40% predicted: High risk
- Consider exercise testing if borderline

**Risk Stratification:**
- Low risk: PPO >60%
- Intermediate: 30-60% (cardiopulmonary exercise testing)
- High: <30% (generally not surgical candidates)

**Pneumonectomy considerations:**
- Perfusion scan improves prediction
- Exercise testing functional assessment
- Right pneumonectomy higher risk than left

## Quality Assurance

**Technician Training:**
- Certification programs
- Ongoing education
- Regular competency assessment

**Lab Proficiency:**
- Inter-laboratory comparisons
- Quality control procedures
- Equipment maintenance schedules`,
      keyTerms: [
        { term: 'upper airway obstruction', definition: 'Fixed narrowing above thoracic inlet; flow plateaus on both inspiration and expiration' },
        { term: 'variable extrathoracic obstruction', definition: 'Airway obstruction outside chest that worsens with inspiration; vocal cord dysfunction' },
        { term: 'BTPS', definition: 'Body Temperature and Pressure, Saturated; correction factor for gas volumes' },
        { term: 'PC20', definition: 'Provocative concentration of methacholine causing 20% drop in FEV1' },
        { term: 'VO2 max', definition: 'Maximum oxygen consumption during exercise; measure of cardiopulmonary fitness' },
        { term: 'PPO', definition: 'Predicted Postoperative; calculation of lung function after resection' },
      ],
      clinicalNotes: 'Upper airway obstruction produces a distinctive flow-volume loop pattern with plateauing. Consider vocal cord dysfunction in young athletes with exertional dyspnea. Pneumonectomy candidates need careful risk assessment with PPO calculations and often exercise testing.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive pulmonary function assessment integrates multiple testing modalities with advanced imaging and clinical context to characterize respiratory disease, predict outcomes, guide therapeutic decisions, and optimize patient management across the spectrum of respiratory disorders.',
      explanation: `## Advanced Interpretive Strategies

### Integrative PFT Interpretation

**Systematic Approach:**

1. **Quality verification**: Acceptability and reproducibility
2. **Pattern recognition**: Obstructive, restrictive, mixed
3. **Severity grading**: Based on appropriate classifications
4. **DLCO integration**: Adds pathophysiologic insight
5. **Bronchodilator response**: Reversibility assessment
6. **Clinical correlation**: Match findings with presentation

**Complex Scenarios:**

**Combined Pulmonary Fibrosis and Emphysema (CPFE):**
- Relatively preserved spirometry (emphysema increases volume, fibrosis decreases)
- Disproportionately reduced DLCO
- High pulmonary hypertension risk
- Poor prognosis

**Obstructive-restriction overlap:**
- FEV1/FVC ratio low (obstructive)
- TLC reduced (restrictive)
- Common in:
  - Sarcoidosis with airway involvement
  - CF with bronchiectasis/fibrosis
  - Advanced COPD with fibrosis

**Neuromuscular with obstruction:**
- Restrictive pattern from weakness
- Obstructive from scoliosis/bulbar dysfunction
- Complex management implications

## Emerging Applications

**PFTs in Systemic Disease:**

**Connective Tissue Diseases:**
- Progressive systemic sclerosis: DLCO most sensitive early marker
- Rheumatoid arthritis: Restrictive pattern from ILD
- Sjögren's: Lymphocytic interstitial pneumonitis
- Inflammatory myopathy: Weakness-related restriction

**Hematologic/Oncologic:**
- Pre-transplant assessment
- Chemotherapy toxicity monitoring
- Radiation-induced lung injury
- Graft-versus-host disease

**Metabolic Diseases:**
- Storage diseases (Gaucher, Niemann-Pick)
- Mitochondrial disorders
- Amyloidosis

**Sleep Medicine Integration:**
- PFTs in OSA evaluation
- Restrictive lung disease → hypoventilation risk
- Neuromuscular → nocturnal desaturation
- Obesity hypoventilation syndrome

## Controversies and Evolving Concepts

**Race-Based Reference Equations:**
- Traditional adjustment based on self-identified race
- GLI 2022 moving toward race-neutral approach
- Ongoing debate about appropriate methodology
- Clinical implications of equation changes

**Airflow Limitation Definition:**
- Fixed ratio (FEV1/FVC <0.70): Simple, consistent
- Lower limit of normal (LLN): Age-adjusted, more specific
- GOLD uses fixed ratio; others prefer LLN
- Impacts "mild obstruction" diagnosis in elderly

**Small Airways Disease:**
- FEF25-75% historically used
- Limited sensitivity and specificity
- Oscillometry emerging as alternative
- Impulse oscillometry (IOS) measures resistance at multiple frequencies

## Specialized Testing

**Impulse Oscillometry (IOS):**
- Measures respiratory resistance and reactance
- Requires only tidal breathing (good for children, elderly)
- Detects small airways dysfunction
- May be abnormal before spirometry in early disease

**Fractional Exhaled Nitric Oxide (FeNO):**
- Measures airway inflammation
- Th2-high (eosinophilic) asthma: FeNO elevated
- Guides biologic therapy decisions
- Predicts steroid responsiveness

**Multiple Breath Washout:**
- Measures ventilation inhomogeneity
- Lung Clearance Index (LCI)
- Sensitive early marker in cystic fibrosis
- Detects small airways disease

**Forced Oscillation Technique (FOT):**
- Similar to IOS
- Measures respiratory impedance
- Tidal breathing required
- Emerging applications

## Prognostic Applications

**COPD Assessment:**
- **BODE index**: BMI, Obstruction, Dyspnea, Exercise capacity
- **GOLD groups**: Symptoms, exacerbation history, spirometry
- **CAT score**: Quality of life impact
- ** mMRC**: Dyspnea scale

**Pulmonary Fibrosis Assessment:**
- **CPI (Composite Physiologic Index)**: Integrates PFT, HRCT
- **DLCO** predicts mortality
- **FVC decline** predicts progression
- GAP index: Gender, Age, Physiology

**Pulmonary Hypertension:**
- DLCO disproportionately reduced
- Exercise capacity reduced
- PFTs help with prognostication

## Laboratory Management

**Quality Assurance Programs:**
- Daily calibration verification
- Weekly temperature/pressure checks
- Biological control subjects
- Inter-laboratory comparisons
- Proficiency testing participation

**Standardization Initiatives:**
- ATS/ERS standards for procedures
- GLI reference equations
- Quality metrics reporting
- Accreditation requirements

**Future Directions:**
- AI-assisted quality assessment
- Automated interpretation
- Home monitoring applications
- Wearable integration

## Clinical Decision Support

**Algorithmic Approaches:**
- Sequential interpretation steps
- Pattern recognition algorithms
- Bayesian probability integration
- Clinical-PFT correlation tools

**Reporting Standards:**
- Interpretive comments
- Technical quality statement
- Comparison with prior studies
- Recommendations for further testing

**Electronic Health Record Integration:**
- Automated reference calculation
- Trend analysis
- Decision support alerts
- Population health reporting`,
      keyTerms: [
        { term: 'CPFE', definition: 'Combined Pulmonary Fibrosis and Emphysema syndrome; distinctive clinical-radiographic syndrome' },
        { term: 'IOS', definition: 'Impulse Oscillometry; measures respiratory resistance during tidal breathing' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; marker of Th2 airway inflammation' },
        { term: 'LCI', definition: 'Lung Clearance Index; measure of ventilation inhomogeneity from multiple breath washout' },
        { term: 'BODE index', definition: 'Multidimensional COPD prognostic index: BMI, Obstruction, Dyspnea, Exercise capacity' },
        { term: 'CPI', definition: 'Composite Physiologic Index; combines PFT and HRCT for ILD prognosis' },
      ],
      clinicalNotes: `Expert interpretation tips:

1. **Always assess quality first**: Poor effort produces misleading results

2. **Use appropriate references**: GLI equations are current standard

3. **Look beyond FEV1**: DLCO adds important pathophysiologic information

4. **Correlate clinically**: PFT findings should match symptoms and imaging

5. **Trends matter more than single values**: Serial measurements track progression

6. **Consider testing limitations**: Anxiety, pain, musculoskeletal issues affect results

7. **Use bronchoprovocation appropriately**: When asthma suspected with normal spirometry

8. **Pre-operative assessment**: PPO calculations essential for lung resection planning`,
    },
  },

  media: [
    {
      id: 'spirometry-loop',
      type: 'diagram',
      filename: 'flow-volume-loop.svg',
      title: 'Flow-Volume Loop Patterns',
      description: 'Normal, obstructive, restrictive, and upper airway obstruction patterns',
    },
    {
      id: 'lung-volumes',
      type: 'diagram',
      filename: 'lung-volume-compartments.svg',
      title: 'Lung Volume Relationships',
      description: 'TLC, VC, RV, FRC, TV, ERV relationships',
    },
    {
      id: 'pft-interpretation-algorithm',
      type: 'diagram',
      filename: 'pft-interpretation-algorithm.svg',
      title: 'PFT Interpretation Algorithm',
      description: 'Stepwise approach to interpreting pulmonary function tests',
    },
  ],

  citations: [
    {
      id: 'ers-ats-spirometry-2019',
      type: 'article',
      title: 'Standardisation of Spirometry',
      authors: ['Graham BL', 'Steenbruggen I', 'Miller MR', 'et al.'],
      source: 'European Respiratory Journal',
      chapter: '54(2)',
    },
    {
      id: 'gli-2012-reference',
      type: 'article',
      title: 'Global Lung Function Initiative Reference Values for Spirometry',
      authors: ['Quanjer PH', 'Stanojevic S', 'Cole TJ', 'et al.'],
      source: 'European Respiratory Journal',
      chapter: '40(6)',
    },
    {
      id: 'gold-2023',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      source: 'Gold Guidelines',
    },
  ],

  crossReferences: [
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-interstitial-lung-diseases', targetType: 'condition', relationship: 'related', label: 'Interstitial Lung Disease' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'diagnostics', 'physiology', 'testing'],
    keywords: ['spirometry', 'DLCO', 'lung volumes', 'obstructive', 'restrictive', 'flow-volume loop'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryFunctionTests;
