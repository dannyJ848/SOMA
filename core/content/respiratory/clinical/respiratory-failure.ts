/**
 * Respiratory Failure - Clinical Respiratory Medicine
 *
 * Comprehensive coverage of respiratory failure types, pathophysiology,
 * diagnosis, and management including hypoxemic and hypercapnic failure.
 */

import { EducationalContent } from '../../types';

export const respiratoryFailureContent: EducationalContent = {
  id: 'clinical-respiratory-failure',
  type: 'concept',
  name: 'Respiratory Failure',
  alternateNames: ['Respiratory Insufficiency', 'Acute Respiratory Failure', 'ARF'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory failure is when your lungs cannot get enough oxygen into your blood or cannot remove enough carbon dioxide, making it hard to breathe.',
      explanation: `## What Is Respiratory Failure?

Respiratory failure happens when your lungs are not working well enough to keep your blood oxygen at healthy levels or to remove carbon dioxide properly. It is a serious condition that needs medical attention.

### Two Main Types

**Type 1 - Low Oxygen:**
- The blood does not have enough oxygen
- The person may feel short of breath
- Skin might look blue (especially lips and fingertips)
- Called "hypoxemic" respiratory failure

**Type 2 - High Carbon Dioxide:**
- The blood has too much carbon dioxide
- Carbon dioxide is a waste gas your body needs to breathe out
- The person may feel very sleepy or confused
- Called "hypercapnic" respiratory failure

### What Causes Respiratory Failure?

**Lung Problems:**
- Pneumonia (lung infection)
- Asthma attack
- COPD flare-up
- Pulmonary edema (fluid in lungs)

**Other Causes:**
- Chest injury
- Weak breathing muscles
- Overdose of certain medicines
- Brain or spinal cord injury

### Warning Signs
- Severe shortness of breath
- Fast breathing
- Blue lips or fingernails
- Confusion or extreme sleepiness
- Chest pain

### Treatment
- Oxygen therapy
- Medicines to treat the cause
- Breathing machine (ventilator) for severe cases
- Treatment in the hospital, often in the ICU`,
      keyTerms: [
        { term: 'respiratory failure', definition: 'A condition where the lungs cannot provide enough oxygen or remove enough carbon dioxide from the blood' },
        { term: 'oxygen', definition: 'A gas in the air that your body needs to survive' },
        { term: 'carbon dioxide', definition: 'A waste gas produced by your body that you breathe out' },
        { term: 'hypoxemic', definition: 'Having too little oxygen in the blood' },
        { term: 'hypercapnic', definition: 'Having too much carbon dioxide in the blood' },
      ],
      analogies: [
        'The lungs are like air filters for your body - respiratory failure is like clogged filters that cannot move enough air.',
        'Think of your blood like a delivery truck - oxygen is the cargo it needs to deliver, and respiratory failure means the truck is not getting loaded properly.',
      ],
      examples: [
        'A person with severe pneumonia may develop respiratory failure because their lungs fill with fluid and cannot absorb oxygen.',
        'Someone with a drug overdose might have respiratory failure because the medicine slows their breathing too much.',
      ],
    },
    2: {
      level: 2,
      summary: 'Respiratory failure is classified as Type 1 (hypoxemic, PaO2 <60 mmHg) or Type 2 (hypercapnic, PaCO2 >45 mmHg). It results from impaired gas exchange, ventilation-perfusion mismatch, or inadequate ventilation.',
      explanation: `## Classification of Respiratory Failure

### Type 1: Hypoxemic Respiratory Failure
**Definition:** PaO2 <60 mmHg on room air
**Key Feature:** Low oxygen with normal or low CO2
**Mechanism:** Problem with oxygen transfer across alveoli

**Common Causes:**
- Pneumonia
- Pulmonary edema (cardiogenic or ARDS)
- Pulmonary embolism
- Interstitial lung disease
- Severe asthma or COPD exacerbation

### Type 2: Hypercapnic Respiratory Failure
**Definition:** PaCO2 >45 mmHg
**Key Feature:** High CO2, may have low or normal oxygen
**Mechanism:** Inadequate alveolar ventilation

**Common Causes:**
- COPD (chronic and acute)
- Severe asthma
- Drug overdose (opioids, sedatives)
- Neuromuscular disease
- Chest wall abnormalities
- Brainstem stroke

### Mixed Types
Many patients have features of both types simultaneously.

## Pathophysiology

### Mechanisms of Hypoxemia

| Mechanism | Description | Response to Oxygen |
|-----------|-------------|-------------------|
| V/Q mismatch | Ventilation and perfusion not matched | Good response |
| Shunt | Blood bypasses ventilated alveoli | Poor response |
| Diffusion limitation | Thick alveolar membrane | Partial response |
| Hypoventilation | Reduced overall ventilation | Good response |
| Low FiO2 | Low inspired oxygen | Excellent response |

### Causes of Hypercapnia
**Decreased Ventilatory Drive:**
- Central nervous system depression
- Drug overdose
- Brain injury

**Neuromuscular Failure:**
- Guillain-Barre syndrome
- Myasthenia gravis
- ALS
- Muscular dystrophy
- Critical illness myopathy

**Mechanical Problems:**
- Severe COPD or asthma
- Chest wall trauma
- Kyphoscoliosis
- Morbid obesity

## Clinical Assessment

### Physical Examination
- Respiratory rate and pattern
- Use of accessory muscles
- Chest auscultation
- Mental status (CO2 narcosis)
- Cyanosis

### Diagnostic Testing
**Arterial Blood Gas (ABG):**
- Gold standard for diagnosis
- Shows PaO2, PaCO2, pH, HCO3

**Additional Tests:**
- Chest X-ray
- CT scan
- Echocardiogram
- Pulmonary function tests
- Toxicology screen`,
      keyTerms: [
        { term: 'PaO2', definition: 'Partial pressure of oxygen in arterial blood; normal is 80-100 mmHg' },
        { term: 'PaCO2', definition: 'Partial pressure of carbon dioxide in arterial blood; normal is 35-45 mmHg' },
        { term: 'V/Q mismatch', definition: 'Mismatch between ventilation (air reaching alveoli) and perfusion (blood reaching alveoli)' },
        { term: 'shunt', definition: 'Blood that passes through the lungs without being oxygenated' },
        { term: 'CO2 narcosis', definition: 'Confusion and sedation caused by high carbon dioxide levels' },
      ],
      analogies: [
        'V/Q mismatch is like having some windows open but the fans off in some rooms - air and blood are not meeting properly.',
        'A shunt is like a bypass road that goes around the lungs - blood takes a shortcut without picking up oxygen.',
      ],
      examples: [
        'A patient with ARDS has severe V/Q mismatch and shunt, requiring high levels of supplemental oxygen.',
        'A patient with COPD exacerbation may have both hypoxemia and hypercapnia due to impaired gas exchange and hypoventilation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Respiratory failure involves complex pathophysiology including ventilation-perfusion relationships, shunt physiology, and dead space. Management requires understanding of oxygen delivery devices, non-invasive ventilation, and indications for mechanical ventilation.',
      explanation: `## Advanced Pathophysiology

### Alveolar Gas Equation
PAO2 = FiO2(Pb - PH2O) - (PaCO2/R)

**Key Points:**
- Alveolar PO2 depends on inspired oxygen and alveolar ventilation
- High PaCO2 lowers alveolar PO2
- A-a gradient distinguishes hypoventilation from other causes

### A-a Gradient
**Calculation:** PAO2 - PaO2
**Normal:** <10-15 mmHg (young), <20-25 mmHg (elderly)

**Interpretation:**
- Normal A-a + low PaO2: Hypoventilation or low FiO2
- Elevated A-a + low PaO2: V/Q mismatch, shunt, or diffusion limitation

### Shunt Equation
Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)

Normal shunt: <5%
Significant shunt: >15-20% (often refractory to oxygen)

### Oxygen Delivery Devices

| Device | FiO2 Range | Flow Rate | Best For |
|--------|-----------|-----------|----------|
| Nasal cannula | 24-44% | 1-6 L/min | Mild hypoxemia |
| Simple mask | 35-50% | 5-10 L/min | Moderate hypoxemia |
| Non-rebreather | 60-90% | 10-15 L/min | Severe hypoxemia |
| High-flow nasal cannula | Up to 100% | Up to 60 L/min | Hypoxemic failure, comfort |

### Non-Invasive Ventilation (NIV)

**BiPAP (Bilevel Positive Airway Pressure):**
- IPAP: Assists inspiration
- EPAP: Maintains airway patency, improves oxygenation
- Difference (IPAP - EPAP) determines tidal volume

**Indications:**
- COPD exacerbation with respiratory acidosis
- Cardiogenic pulmonary edema
- Hypoxemic failure (selected cases)
- Prevention of intubation

**Contraindications:**
- Cardiac or respiratory arrest
- Unable to protect airway
- Severe encephalopathy
- Hemodynamic instability
- Facial trauma

### Mechanical Ventilation Basics

**Indications:**
- Refractory hypoxemia
- Severe respiratory acidosis
- Altered mental status
- Hemodynamic instability
- Excessive work of breathing

**Modes:**
- Assist-control (AC)
- Synchronized intermittent mandatory ventilation (SIMV)
- Pressure support ventilation (PSV)
- Pressure control ventilation (PCV)

**Lung Protective Strategy:**
- Tidal volume: 6 mL/kg ideal body weight
- Plateau pressure <30 cm H2O
- Appropriate PEEP
- Permissive hypercapnia acceptable

## Management Approach

### Immediate Stabilization
1. Airway assessment
2. Supplemental oxygen
3. Cardiac monitoring
4. IV access
5. Arterial blood gas

### Specific Treatments by Cause

**COPD Exacerbation:**
- Bronchodilators
- Corticosteroids
- Antibiotics if indicated
- NIV for respiratory acidosis

**Cardiogenic Pulmonary Edema:**
- NIV (CPAP or BiPAP)
- Diuretics
- Nitrates
- Treat underlying cause

**ARDS:**
- Lung protective ventilation
- PEEP optimization
- Conservative fluid strategy
- Prone positioning for severe cases`,
      keyTerms: [
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen gradient; measures efficiency of oxygen transfer from alveoli to blood' },
        { term: 'shunt fraction', definition: 'Percentage of cardiac output that bypasses ventilated alveoli' },
        { term: 'BiPAP', definition: 'Bilevel positive airway pressure; non-invasive ventilation with different inspiratory and expiratory pressures' },
        { term: 'PEEP', definition: 'Positive end-expiratory pressure; pressure maintained at end-expiration to prevent alveolar collapse' },
        { term: 'permissive hypercapnia', definition: 'Allowing elevated PaCO2 to avoid high tidal volumes and lung injury' },
      ],
      clinicalNotes: 'A normal A-a gradient in the setting of hypoxemia points to hypoventilation or low inspired oxygen as the cause. An elevated A-a gradient indicates intrinsic lung disease, V/Q mismatch, or shunt.',
    },
    4: {
      level: 4,
      summary: 'Advanced respiratory failure management requires understanding of ARDS pathophysiology, ventilator strategies including prone positioning and ECMO, differentiation of shock types, and recognition of patient-ventilator asynchrony.',
      explanation: `## Acute Respiratory Distress Syndrome (ARDS)

### Berlin Definition
**Timing:** Within 1 week of known insult
**Chest Imaging:** Bilateral opacities not fully explained by effusions, collapse, or nodules
**Origin:** Not from cardiac failure or fluid overload
**Oxygenation:**
- Mild: PaO2/FiO2 200-300 mmHg
- Moderate: PaO2/FiO2 100-200 mmHg
- Severe: PaO2/FiO2 <100 mmHg

### Pathophysiology
**Exudative Phase (Days 1-7):**
- Alveolar-capillary membrane injury
- Protein-rich edema fluid
- Neutrophilic inflammation
- Hyaline membrane formation

**Proliferative Phase (Days 7-21):**
- Type II pneumocyte proliferation
- Fibroblast activation
- Organization of exudate

**Fibrotic Phase (After Day 14):**
- Collagen deposition
- Lung remodeling
- May lead to fibrosis

### Ventilator Management in ARDS

**ARDSNet Protocol:**
- Low tidal volume: 6 mL/kg predicted body weight
- Target plateau pressure <30 cm H2O
- Wean FiO2 and PEEP according to protocol table
- Allow permissive hypercapnia (pH >7.25)

**Refractory Hypoxemia Options:**
- Prone positioning (PaO2/FiO2 <150)
- Neuromuscular blockade (early, severe)
- Inhaled vasodilators (nitric oxide, epoprostenol)
- ECMO (severe, refractory cases)

### Prone Positioning
**Mechanism:**
- Reduces ventral-dorsal transpulmonary pressure gradient
- Improves V/Q matching
- Promotes alveolar recruitment
- Facilitates secretion drainage

**Implementation:**
- Minimum 16 hours per day
- Requires trained team
- Contraindications: spinal instability, increased ICP, pregnancy

### ECMO for Respiratory Failure

**VV-ECMO (Venovenous):**
- Provides gas exchange only
- Blood drained from vein, oxygenated, returned to vein
- Patient must have adequate cardiac function

**Indications:**
- Severe ARDS refractory to optimal management
- Bridge to recovery or transplant
- Severe air leak syndromes

**Contraindications:**
- Irreversible lung disease (without transplant option)
- Severe bleeding risk
- Multi-organ failure

### Patient-Ventilator Asynchrony

**Types:**
- Trigger asynchrony: Delayed or missed efforts
- Flow asynchrony: Inadequate or excessive flow
- Cycle asynchrony: Early or late termination

**Clinical Impact:**
- Increased work of breathing
- Prolonged ventilation
- Patient discomfort
- Dynamic hyperinflation

**Management:**
- Adjust trigger sensitivity
- Optimize flow rates
- Adjust cycling criteria
- Consider mode change
- Sedation adjustment

### Weaning from Mechanical Ventilation

**Readiness Assessment:**
- Resolution of underlying cause
- Hemodynamic stability
- Adequate oxygenation (PaO2/FiO2 >150-200, PEEP <=8)
- Spontaneous breathing trial (SBT) tolerance

**SBT Methods:**
- T-piece trial
- Low-level pressure support (5-8 cm H2O)
- Automatic tube compensation

**Weaning Failure Predictors:**
- Rapid shallow breathing index (RSBI) >105
- Negative inspiratory force <20 cm H2O
- Minute ventilation >15 L/min
- Vital capacity <10 mL/kg

### Long-Term Outcomes
- Mortality: 30-40% for ARDS
- Cognitive impairment common
- ICU-acquired weakness
- PTSD and depression
- Pulmonary function usually recovers`,
      keyTerms: [
        { term: 'ARDS', definition: 'Acute respiratory distress syndrome; acute onset bilateral infiltrates with hypoxemia not due to cardiac failure' },
        { term: 'transpulmonary pressure', definition: 'Pressure difference between alveoli and pleural space; true lung-distending pressure' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation; provides gas exchange outside the body' },
        { term: 'patient-ventilator asynchrony', definition: 'Mismatches between patient breathing effort and ventilator support timing' },
        { term: 'RSBI', definition: 'Rapid shallow breathing index; respiratory rate/tidal volume ratio predicting weaning success' },
      ],
      clinicalNotes: 'In ARDS, keep plateau pressure below 30 cm H2O even if tidal volumes must be reduced below 6 mL/kg. Proning should be considered early in severe ARDS (PaO2/FiO2 <150) rather than waiting until refractory hypoxemia develops.',
    },
    5: {
      level: 5,
      summary: 'Expert respiratory failure management integrates advanced monitoring including esophageal manometry and EIT, personalized mechanical ventilation strategies, extracorporeal support modalities, and emerging therapies for refractory cases.',
      explanation: `## Advanced Respiratory Monitoring

### Esophageal Pressure Monitoring
**Principle:** Esophageal pressure (Pes) approximates pleural pressure
**Applications:**
- Calculate transpulmonary pressure (Ptp = Paw - Pes)
- Assess lung stress and strain
- Guide PEEP selection
- Identify patient effort

**Clinical Use:**
- Target transpulmonary pressure <20 cm H2O
- Maintain positive end-expiratory transpulmonary pressure
- Particularly useful in obesity, chest wall stiffness

### Electrical Impedance Tomography (EIT)
**Principle:** Measures thoracic impedance changes with ventilation
**Applications:**
- Real-time regional ventilation distribution
- PEEP titration based on collapse/overdistention
- Assess response to prone positioning
- Monitor pendelluft phenomenon

### Advanced Ventilator Strategies

**Airway Pressure Release Ventilation (APRV):**
- Extended time at high pressure (Phigh)
- Brief releases to low pressure (Plow)
- Spontaneous breathing encouraged at Phigh
- May improve oxygenation and cardiac output

**High-Frequency Oscillatory Ventilation (HFOV):**
- Very small tidal volumes at high frequency
- Active inspiration and expiration
- Controversial in ARDS (OSCAR/OSCILLATE trials)
- May have role in rescue therapy

**Neurally Adjusted Ventilatory Assist (NAVA):**
- Uses diaphragmatic electrical activity (Edi)
- Proportional to neural respiratory drive
- Improved synchrony
- Useful in difficult-to-wean patients

### Extracorporeal Support

**ECCO2R (Extracorporeal CO2 Removal):**
- Lower flow than ECMO (400-1000 mL/min)
- Primarily removes CO2
- Allows ultra-protective ventilation
- Minimizes ventilator-induced lung injury

**Lung Rest Strategy with ECCO2R:**
- Very low tidal volumes (1-2 mL/kg)
- Very low respiratory rates
- Minimal airway pressures
- May improve outcomes in severe ARDS

### Rescue Therapies for Refractory Hypoxemia

**Inhaled Pulmonary Vasodilators:**
| Agent | Dose | Duration | Monitoring |
|-------|------|----------|------------|
| Nitric oxide | 5-40 ppm | Continuous | Methemoglobin |
| Epoprostenol | 10-50 ng/kg/min | Continuous | Systemic hypotension |
| Iloprost | 2.5-5 mcg | Q2-4h | Systemic hypotension |

**Benefits:**
- Improved V/Q matching
- Reduced pulmonary artery pressure
- Improved oxygenation (variable)

**Surfactant Therapy:**
- Limited role in adult ARDS
- May have benefit in specific populations
- Delivery method challenges

### Personalized Ventilation

**Stratification by Phenotype:**
- Focal ARDS: recruitable, prone to overdistention
- Non-focal: diffuse, edematous, recruitable with PEEP
- CT-guided management

**Stress Index:**
- Assesses pressure-volume curve during constant flow
- Stress index <1: Recruitment
- Stress index >1: Overdistention
- Target stress index near 1

**Driving Pressure:**
- Plateau pressure - PEEP
- Surrogate for strain
- Target <15 cm H2O
- Strong predictor of survival in ARDS

### Ventilator-Induced Lung Injury (VILI)

**Mechanisms:**
- Volutrauma: excessive volume
- Barotrauma: excessive pressure
- Atelectrauma: cyclic opening/closing
- Biotrauma: inflammatory mediator release

**Prevention Strategies:**
- Lung protective ventilation
- Adequate PEEP
- Prone positioning
- Conservative fluid management
- Early mobilization

### Emerging Therapies

**Mesenchymal Stem Cells:**
- Anti-inflammatory and reparative properties
- Early phase clinical trials
- Potential for epithelial restoration

**Artificial Intelligence:**
- Ventilator mode selection
- Prediction of weaning success
- Early detection of deterioration
- Automated adjustments

**Liquid Ventilation:**
- Perfluorocarbon as medium
- Improved gas exchange
- Investigational status`,
      keyTerms: [
        { term: 'transpulmonary pressure', definition: 'Pressure distending the lung (alveolar pressure minus pleural pressure); better indicator of lung stress than airway pressure alone' },
        { term: 'EIT', definition: 'Electrical impedance tomography; non-invasive imaging of regional ventilation distribution' },
        { term: 'NAVA', definition: 'Neurally adjusted ventilatory assist; mode using diaphragmatic electrical activity to trigger and cycle breaths' },
        { term: 'ECCO2R', definition: 'Extracorporeal carbon dioxide removal; low-flow extracorporeal circuit for CO2 removal' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; reflects tidal volume normalized to respiratory system compliance' },
      ],
      clinicalNotes: `Key clinical pearls for respiratory failure management:

1. **Driving pressure matters:** In ARDS, driving pressure (plateau - PEEP) is a stronger predictor of mortality than tidal volume alone. Target <15 cm H2O.

2. **Personalized PEEP:** Use esophageal manometry or EIT to optimize PEEP rather than relying solely on FiO2/PEEP tables.

3. **ECMO timing:** For severe ARDS, consider ECMO referral before irreversible organ failure develops. The EOLIA trial showed a trend toward benefit with modern ECMO techniques.

4. **Prone early:** Do not wait for refractory hypoxemia. Proning is most beneficial when started within 36 hours of diagnosis in severe ARDS.

5. **Patient self-inflicted lung injury:** In spontaneously breathing patients with strong efforts, consider neuromuscular blockade to prevent large transpulmonary pressure swings.

6. **Weaning readiness:** Daily spontaneous breathing trials with sedation interruption reduce ventilation duration. Use protocols to avoid delays.

7. **Long-term outcomes:** ARDS survivors often have significant cognitive and functional impairment. Early rehabilitation and follow-up are essential.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ardsnet-protocol',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury',
      authors: ['ARDS Network'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJM200005043421801',
    },
    {
      id: 'eolia-trial',
      type: 'article',
      title: 'ECMO for Severe Acute Respiratory Distress Syndrome',
      authors: ['Combes A', 'Hajage D', 'Capellier G', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1800385',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-mechanical-ventilation-basics', targetType: 'concept', relationship: 'related', label: 'Mechanical Ventilation' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['critical-care', 'pulmonology', 'respiratory-failure'],
    keywords: ['respiratory failure', 'ARDS', 'hypoxemia', 'hypercapnia', 'mechanical ventilation', 'ECMO'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'critical-care', 'pulmonology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryFailureContent;
