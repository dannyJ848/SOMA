/**
 * COPD Exacerbations - Chronic Disease Education
 *
 * Comprehensive patient education about COPD exacerbations,
 * acute worsening of COPD symptoms requiring treatment changes.
 */

import { EducationalContent } from '../../types';

export const COPD_EXACERBATIONS: EducationalContent = {
  id: 'chronic-disease-copd-exacerbations',
  type: 'condition',
  name: 'COPD Exacerbations',
  alternateNames: ['COPD flare-up', 'Acute exacerbation of COPD', 'AECOPD', 'COPD attack'],

  levels: {
    1: {
      level: 1,
      summary: 'A COPD exacerbation is when your COPD symptoms suddenly get worse. This may mean more coughing, more mucus, or more shortness of breath than usual. Knowing what to do can help you recover faster.',
      explanation: `**What Is a COPD Exacerbation?**

A COPD exacerbation (also called a flare-up or attack) is when your COPD symptoms suddenly get worse. This can be scary, but knowing what to do can help you recover and avoid going to the hospital.

**Common Signs of an Exacerbation:**


Warning Signs:
---------------------------------
- More shortness of breath than usual
- More coughing than usual
- More mucus (sputum) than usual
- Mucus changes color (yellow, green)
- Mucus becomes thicker
- Fever (may or may not be present)
- Chest tightness
- More wheezing
- Confusion or extreme tiredness
---------------------------------


**What Causes Exacerbations?**

Common triggers:
- Respiratory infections (colds, flu, pneumonia)
- Air pollution
- Cold or hot weather
- Not taking medications as prescribed
- Smoke or second-hand smoke
- Allergens

**When to Call Your Doctor:**

Call your doctor if:
- You have trouble breathing even at rest
- You use your rescue inhaler more than usual
- Your symptoms are getting worse, not better
- You have a fever over 100.4°F (38°C)
- You are confused or very sleepy
- You have chest pain
- Your lips or fingernails look blue

**What to Do During an Exacerbation:**


Action Steps:
---------------------------------
1. Use your rescue inhaler as directed
2. Start your action plan if you have one
3. Increase your fluid intake (water)
4. Rest, but try to move around some
5. Avoid smoke and other triggers
6. Call your doctor if symptoms worsen
7. Go to ER if emergency signs occur
---------------------------------


**Emergency Signs - Go to ER:**

- Severe shortness of breath at rest
- Confusion or difficulty staying awake
- Lips or fingernails turning blue
- Chest pain
- Cannot speak in full sentences
- Rescue inhaler is not helping

**Preventing Exacerbations:**


Prevention Tips:
---------------------------------
- Get annual flu shot
- Get pneumonia vaccine
- Wash hands often
- Avoid sick people
- Take medications as prescribed
- Avoid smoke and pollution
- Have an action plan ready
- Keep rescue medications available
---------------------------------


**Remember:** Quick action during an exacerbation can help you recover faster and avoid hospitalization!`,
      keyTerms: [
        { term: 'exacerbation', definition: 'A sudden worsening of disease or symptoms' },
        { term: 'flare-up', definition: 'Another term for an exacerbation or attack' },
        { term: 'rescue inhaler', definition: 'Quick-relief inhaler used during symptom flare-ups' },
        { term: 'action plan', definition: 'A written plan of what to do when symptoms worsen' },
      ],
      analogies: [
        'A COPD exacerbation is like a car overheating - your system is under stress and needs attention right away.',
        'Think of an exacerbation like a storm - having a plan helps you weather it safely.',
      ],
      examples: [
        'Bill noticed his mucus turning green and his breathing getting worse. He called his doctor and started his action plan.',
        'Sofia woke up feeling very short of breath and confused. Her husband called 911 and she was treated in the ER.',
      ],
      patientCounselingPoints: [
        'Work with your doctor to create a written COPD action plan.',
        'Keep your rescue inhaler with you at all times.',
        'Get vaccinated against flu and pneumonia to prevent infections.',
        'Know the signs that mean you need emergency care.',
        'Call your doctor early when symptoms worsen - don\'t wait until you are very sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'A COPD exacerbation is an acute worsening of respiratory symptoms beyond normal day-to-day variation, requiring additional therapy, most commonly triggered by respiratory infections and leading to significant morbidity and mortality.',
      explanation: `**Definition:**

A COPD exacerbation is defined as an acute event characterized by a worsening of the patient's respiratory symptoms that is beyond normal day-to-day variation and leads to a change in medication.

**Exacerbation Severity:**


Severity Classification:
-----------------------------------------
Mild:
  - Treated with short-acting bronchodilators only

Moderate:
  - Requires treatment with antibiotics and/or
    oral corticosteroids
  - May require emergency room visit
  - Usually managed at home

Severe:
  - Requires hospitalization
  - May need intensive care
  - May require mechanical ventilation
-----------------------------------------


**Triggers and Causes:**


Common Exacerbation Triggers:
-----------------------------------------
Infections (50-70% of cases):
  - Viral: influenza, RSV, rhinovirus
  - Bacterial: H. influenzae, S. pneumoniae,
    M. catarrhalis
  - Atypical bacteria

Environmental Factors:
  - Air pollution
  - Cold or hot temperatures
  - High humidity
  - Allergens

Other Factors:
  - Medication non-adherence
  - Heart failure (can mimic or trigger)
  - Pulmonary embolism
  - Arrhythmias
-----------------------------------------


**Clinical Presentation:**

*Typical Symptoms:*
- Increased dyspnea
- Increased sputum volume
- Change in sputum color (purulence)
- Increased cough
- Wheezing
- Chest tightness
- Fever (may be absent, especially in elderly)

*Anthonisen Criteria:*

Exacerbation Types (by symptoms):
-----------------------------------------
Type 1 (Severe):
  All three symptoms present:
  - Increased dyspnea
  - Increased sputum volume
  - Increased sputum purulence

Type 2 (Moderate):
  Two of three symptoms present

Type 3 (Mild):
  One of three symptoms PLUS:
  - Upper respiratory infection
  - Fever without other cause
  - Increased wheezing
  - Increased cough or respiratory rate
-----------------------------------------


**Management:**

*Home Management (Mild-Moderate):*

Home Treatment Options:
-----------------------------------------
Bronchodilators:
  - Increase frequency of SABA
  - May add SAMA or combine
  - Consider starting LABA/LAMA if not on

Antibiotics:
  - Amoxicillin/clavulanate
  - Doxycycline
  - Macrolide (azithromycin)
  → Duration: 5-7 days

Corticosteroids:
  - Prednisone 40 mg daily × 5 days
  - No taper needed for short course
  - Consider if exacerbation history

Supportive Care:
  - Increased fluids
  - Rest with some activity
  - Monitor symptoms closely
-----------------------------------------


*Hospital Indicators:*

When Hospitalization Is Needed:
-----------------------------------------
- Severe dyspnea at rest
- Inadequate response to home therapy
- New or worsening hypoxemia
- New or worsening hypercapnia
- Confusion or lethargy
- Inability to eat or sleep
- Comorbid conditions (heart disease)
- Poor home support
-----------------------------------------


**Prevention:**

Prevention Strategies:
-----------------------------------------
Vaccinations:
  - Annual influenza vaccine
  - Pneumococcal vaccine (PCV20 or PCV15+PPSV23)
  - Tdap vaccine (once)
  - RSV vaccine (if age 60+)
  - COVID-19 vaccine and boosters

Pharmacologic:
  - Regular bronchodilator use
  - Consider ICS if frequent exacerbations
  - Consider roflumilast (chronic bronchitis)
  - Consider azithromycin (frequent exacerbators)

Lifestyle:
  - Smoking cessation
  - Hand hygiene
  - Avoid sick people
  - Air quality awareness
  - Pulmonary rehabilitation
-----------------------------------------`,
      keyTerms: [
        { term: 'AECOPD', definition: 'Acute Exacerbation of COPD' },
        { term: 'purulence', definition: 'Pus in the sputum, indicating infection' },
        { term: 'hypoxemia', definition: 'Low oxygen in the blood' },
        { term: 'hypercapnia', definition: 'High carbon dioxide in the blood' },
        { term: 'Anthonisen criteria', definition: 'Classification system for COPD exacerbations' },
      ],
      analogies: [
        'Think of exacerbations as "lung attacks" similar to heart attacks - urgent medical attention is needed.',
      ],
      clinicalNotes: 'Exacerbations accelerate lung function decline and increase mortality. Prompt treatment with antibiotics and steroids reduces treatment failure and hospitalization. Prevention is crucial.',
      patientCounselingPoints: [
        'Have a written COPD action plan that tells you exactly what to do when symptoms worsen.',
        'Start antibiotics and steroids early if prescribed for home use.',
        'Do not wait until you are very sick to call your doctor.',
        'Hospital care may be needed for severe exacerbations.',
        'Recovery can take weeks - be patient and rest as needed.',
      ],
    },
    3: {
      level: 3,
      summary: 'COPD exacerbations are acute events characterized by sustained worsening of dyspnea, cough, and sputum purulence beyond normal day-to-day variation, requiring therapeutic intervention and most commonly triggered by respiratory infections.',
      explanation: `**Definition and Impact:**

*Definition:*
An acute exacerbation of COPD is an event characterized by dyspnea and/or cough and sputum that worsen over <14 days, which may be accompanied by tachypnea and/or tachycardia, and is often triggered by an infection.

*Clinical Significance:*

Impact of Exacerbations:
-----------------------------------------------------
Short-term:
  - Increased symptoms
  - Reduced quality of life
  - Healthcare resource utilization
  - Treatment side effects

Long-term:
  - Accelerated FEV1 decline
  - Increased mortality risk
  - Reduced exercise capacity
  - More frequent future exacerbations
    (exacerbation susceptibility)

Healthcare Costs:
  - Most common cause of COPD hospitalization
  - Readmission common (20% within 30 days)
  - Significant economic burden
-----------------------------------------------------


**Etiology:**

*Infectious Triggers:*

Pathogen Distribution:
-----------------------------------------------------
Viral (30-40%):
  - Rhinovirus (most common)
  - Influenza
  - RSV
  - Adenovirus
  - Human metapneumovirus
  - COVID-19

Bacterial (40-50%):
  - Haemophilus influenzae (most common)
  - Streptococcus pneumoniae
  - Moraxella catarrhalis
  - Pseudomonas aeruginosa (advanced disease)
  - Staphylococcus aureus (rare)

Viral + Bacterial Co-infection:
  - ~25% of exacerbations
  - More severe disease
-----------------------------------------------------


*Non-Infectious Triggers:*
- Air pollution (PM2.5, ozone, nitrogen dioxide)
- Temperature extremes
- Ambient humidity changes
- Medication non-adherence
- Heart failure (mimics exacerbation)
- Pulmonary embolism (consider if atypical)
- Arrhythmias (especially AF with RVR)

**Clinical Assessment:**

*Severity Assessment:*
Clinical Scoring Systems:
-----------------------------------------------------
DECAF Score (predicts mortality):
  - eMRCD score
  - Eosinopenia
  - Consolidation on CXR
  - Acidemia (low pH)
  - Atrial fibrillation

BAP-65 (predicts need for mechanical ventilation):
  - BUN >25 mg/dL
  - Altered mental status
  - Pulse >109
  - age >65

ABG Interpretation:
  - pH <7.35: Respiratory acidosis
    - Mild: 7.30-7.35
    - Moderate: 7.25-7.30
    - Severe: <7.25
  - PaCO2: Hypercapnia severity
  - HCO3: Compensation (chronic)
-----------------------------------------------------


**Management:**

*Pharmacologic Therapy:*

Evidence-Based Treatment:
-----------------------------------------------------
Bronchodilators:
  - SABA (albuterol) + SAMA (ipratropium)
  - Frequent dosing initially (q4-6h)
  - May use nebulization if severe

Corticosteroids:
  - Prednisone 40 mg PO daily × 5 days
  - Equivalent IV methylprednisolone if unable to take PO
  - NO taper needed for short course
  - Reduces treatment failure, improves lung function
  - Increases length of stay if >5 days

Antibiotics:
  Indicated if:
    - Increased sputum purulence
    - Increased sputum volume
    - Need for mechanical ventilation
  Options:
    - Amoxicillin/clavulanate
    - Doxycycline
    - Respiratory fluoroquinolone (if risk factors)
    - Duration: 5-7 days

Antibiotics for Pseudomonas (if colonization):
  - Ciprofloxacin
  - Levofloxacin
  - Ceftazidime, piperacillin-tazobactam (severe)
-----------------------------------------------------


*Ventilatory Support:*
Respiratory Support Indications:
-----------------------------------------------------
Oxygen:
  - Target SpO2 88-92%
  - Avoid hyperoxia in CO2 retainers
  - Venturi mask preferred for precise control

Non-Invasive Ventilation (NIV):
  Indications:
    - pH 7.25-7.35
    - PaCO2 >45 mm Hg
    - Respiratory rate >25
  Contraindications:
    - Respiratory arrest
    - Altered mental status
    - Inability to protect airway
    - Hemodynamic instability
    - Facial abnormalities
  Benefits:
    - Reduces mortality
    - Reduces intubation rate
    - Reduces hospital length of stay

Invasive Mechanical Ventilation:
  - Failed NIV
  - Severe respiratory acidosis (pH <7.25)
  - Altered mental status
  - Respiratory arrest
-----------------------------------------------------


**Prevention:**

*Pharmacologic Prevention:*

Exacerbation Prevention Strategies:
-----------------------------------------------------
Regular Bronchodilators:
  - LABA/LAMA combination
  - Reduces exacerbations by 15-25%

ICS-Containing Regimens:
  - For patients with:
    - Blood eosinophils ≥100 cells/μL
    - History of frequent exacerbations
  - Reduces moderate/severe exacerbations

Roflumilast:
  - For severe COPD + chronic bronchitis
  - Reduces moderate-severe exacerbations

Chronic Macrolides:
  - Azithromycin 250 mg daily (or 500 mg 3x/week)
  - For frequent exacerbators (≥2/year)
  - Reduces exacerbations by 20-30%
  - Monitor: QTc, hearing, liver, resistance
-----------------------------------------------------


**Prognosis:**

*Predictors of Poor Outcome:*
- Older age
- Low FEV1
- Prior exacerbations
- Comorbidities (heart disease)
- Low BMI
- Purulent sputum
- Acidosis (low pH)
- Need for mechanical ventilation

*Readmission Risk:*
- Prior hospitalization
- Severe airflow limitation
- Comorbidities
- Poor home support
- Incomplete recovery
- Requiring NIV`,
      keyTerms: [
        { term: 'DECAF', definition: 'Prognostic score for COPD exacerbations' },
        { term: 'BAP-65', definition: 'Risk score for respiratory failure in COPD exacerbation' },
        { term: 'NIV', definition: 'Non-invasive ventilation; CPAP or BiPAP' },
        { term: 'eMRCD', definition: 'modified Medical Research Council dyspnea score' },
        { term: 'RVR', definition: 'Rapid ventricular response; AF with fast heart rate' },
      ],
      clinicalNotes: 'NIV is first-line for respiratory failure in COPD exacerbations (strong evidence). ICS should be added for frequent exacerbators with elevated eosinophils. Chronic macrolides require monitoring.',
      patientCounselingPoints: [
        'Frequent exacerbations warrant preventive therapy - ask your doctor about options.',
        'NIV (BiPAP mask) helps many people avoid the need for a breathing tube.',
        'Recovery from a severe exacerbation can take weeks to months.',
        'Each exacerbation can permanently reduce your lung function.',
        'Preventing exacerbations is a key goal of COPD treatment.',
      ],
    },
    4: {
      level: 4,
      summary: 'COPD exacerbations represent acute decompensation events characterized by sustained symptom worsening, most commonly triggered by respiratory infections, requiring prompt recognition and aggressive management to prevent respiratory failure and reduce the risk of future events.',
      explanation: `**Pathophysiology of Exacerbations:**

*Inflammatory Cascade:*

Exacerbation Pathophysiology:
-----------------------------------------------------
Trigger (infection, pollution)
      ↓
Airway Inflammation ↑
  - Neutrophils, eosinophils, lymphocytes
  - Inflammatory mediators (IL-6, IL-8, TNF-α)
      ↓
Airway Edema + Mucus Hypersecretion
      ↓
Increased Airway Resistance
      ↓
Dynamic Hyperinflation
      ↓
      ├-→ Increased work of breathing
      ├-→ Respiratory muscle fatigue
      └-→ Ventilation-perfusion mismatch
            ↓
      Hypoxemia ± Hypercapnia
            ↓
      Respiratory Acidosis (if severe)
-----------------------------------------------------


*Biomarkers:*

Useful Biomarkers:
-----------------------------------------------------
Procalcitonin:
  - Distinguishes bacterial vs viral
  - Threshold <0.1: viral, antibiotics not needed
  - Threshold >0.25: bacterial, antibiotics indicated
  - Reduces antibiotic exposure
  - Controversial utility

C-Reactive Protein:
  - Elevation indicates inflammation
  - Non-specific
  - May predict severity/outcome

Eosinophils:
  - Blood eosinophils:
    - High (≥300): ICS responsiveness, steroid benefit
    - Low (<100): May indicate different phenotype
  - Sputum eosinophils:
    - Predict steroid response

Cardiac Biomarkers (BNP/NT-proBNP):
  - Distinguish cardiac vs pulmonary cause
  - Cardiac comorbidity common
-----------------------------------------------------


**Advanced Management:**

*Antibiotic Selection Strategy:*

Risk-Adapted Antibiotic Therapy:
-----------------------------------------------------
Low Risk (no resistant organisms):
  First-line:
    - Amoxicillin/clavulanate 500/125 TID × 5-7 days
    - Doxycycline 100 mg BID × 5-7 days
    - Azithromycin 500 mg day 1, then 250 mg × 4 days
    (if local resistance low)

High Risk (resistance risk factors):
  Risk factors:
    - Frequent exacerbations
    - Multiple antibiotic courses
    - Prior resistant organisms
    - Hospitalization in past 90 days
    - Severe airflow limitation
  Options:
    - Levofloxacin 750 mg daily × 5 days
    - Moxifloxacin 400 mg daily × 5 days
    - Ceftriaxone + azithromycin (inpatient)
    - Piperacillin-tazobactam (if Pseudomonas risk)

Pseudomonas Coverage (documented colonization):
  - Ciprofloxacin 400-500 mg BID
  - Levofloxacin 750 mg daily
  - Ceftazidime 2 g IV q8h
  - Consider ID consultation
-----------------------------------------------------


*Corticosteroid Considerations:*

Steroid-Responsive Phenotypes:
-----------------------------------------------------
Eosinophilic Phenotype:
  - Blood eosinophils ≥100 cells/μL
  - Better steroid response
  - Reduced treatment failure
  - Reduced length of stay
  - Lower mortality

Non-Eosinophilic Phenotype:
  - Blood eosinophils <100 cells/μL
  - May have reduced steroid benefit
  - Consider alternative diagnoses if poor response

Dosing:
  - Prednisone 40 mg daily × 5 days (standard)
  - Higher doses (60 mg) if eosinophilic
  - Taper not needed for ≤14 days
  - Consider extended taper if on chronic oral steroids
-----------------------------------------------------


**Ventilatory Management:**

*Advanced NIV Strategies:*

Optimizing NIV:
-----------------------------------------------------
Initial Settings (BiPAP):
  - IPAP: 8-12 cm H2O (titrate to effect)
  - EPAP: 4-6 cm H2O
  - Backup rate: 10-15 bpm
  - FiO2: Titrate to SpO2 88-92%

Success Indicators:
  - Improved pH within 1-2 hours
  - Decreased respiratory rate
  - Reduced PaCO2
  - Patient comfort

Failure Predictors:
  - pH <7.25 despite NIV
  - No improvement in PaCO2 after 2 hours
  - Inability to tolerate interface
  - Excessive secretions
  - Altered mental status
-----------------------------------------------------


**Prevention:**

*Exacerbation Phenotype:*

Frequent Exacerbator Phenotype:
-----------------------------------------------------
Definition:
  - ≥2 moderate exacerbations/year OR
  - ≥1 severe exacerbation/year

Characteristics:
  - Worse quality of life
  - Faster FEV1 decline
  - Higher mortality
  - Higher healthcare costs

Management Strategy:
  - Ensure adherence to baseline therapy
  - Optimize bronchodilation (LABA/LAMA)
  - Add ICS if eosinophils ≥100
  - Consider rofllumilast (if chronic bronchitis)
  - Consider chronic azithromycin
  - Vaccinations crucial
  - Action plan education
  - Early intervention at symptom onset
-----------------------------------------------------


*Chronic Macrolide Strategy:*

Azithromycin for Prevention:
-----------------------------------------------------
Evidence:
  - Reduces exacerbations by 20-30%
  - Improves quality of life
  - May improve mortality

Patient Selection:
  - Despite maximal inhaled therapy
  - Frequent exacerbator phenotype
  - Non-eosinophilic
  - Not colonized with macrolide-resistant organisms

Monitoring Required:
  - Baseline and periodic ECG (QTc)
  - Liver function tests
  - Hearing test if symptoms
  - Monitor for resistance

Dosing:
  - 250 mg daily OR
  - 500 mg 3 times per week
  - Continue if benefit
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'procalcitonin', definition: 'Biomarker for bacterial infection' },
        { term: 'dynamic hyperinflation', definition: 'Air trapping during exacerbation worsens breathing work' },
        { term: 'BiPAP', definition: 'Bilevel positive airway pressure; type of NIV' },
        { term: 'IPAP', definition: 'Inspiratory positive airway pressure' },
        { term: 'EPAP', definition: 'Expiratory positive airway pressure' },
      ],
      clinicalNotes: 'Frequent exacerbators warrant aggressive preventive therapy. Procalcitonin guidance can reduce antibiotic use. NIV failure after 2 hours should prompt intubation consideration.',
      patientCounselingPoints: [
        'Being a frequent exacerbator is a specific phenotype that needs targeted treatment.',
        'Chronic azithromycin can reduce exacerbations but requires monitoring.',
        'Your blood eosinophil count helps predict if steroids will help during exacerbations.',
        'Prevention is key - each exacerbation damages your lungs further.',
        'NIV (BiPAP) is highly effective and preferred over a breathing tube when possible.',
      ],
    },
    5: {
      level: 5,
      summary: 'COPD exacerbations represent acute inflammatory events triggered by infections and environmental factors, characterized by heterogeneous phenotypes and inflammatory endotypes requiring biomarker-directed therapy and precision prevention strategies.',
      explanation: `**Precision Approach to Exacerbations:**

*Endotypes:*

Exacerbation Inflammatory Endotypes:
------------------------------------------------------------
Eosinophilic:
  - Blood eosinophils ≥300 cells/μL
  - Type 2 inflammation
  - Better steroid response
  - Often triggered by viruses
  → ICS beneficial

Neutrophilic:
  - Blood eosinophils <100 cells/μL
  - IL-8, LTB4 mediated
  - Poor steroid response
  - Often bacterial triggers
  → Consider macrolides, PDE4 inhibitors

Pauci-inflammatory:
  - Minimal biomarker elevation
  - Consider alternative diagnoses:
    - Heart failure
    - Pulmonary embolism
    - Pneumonia
------------------------------------------------------------


*Biomarker-Guided Therapy:*

Emerging Biomarker Applications:
------------------------------------------------------------
Procalcitonin Algorithm:
  - <0.1: No antibiotics
  - 0.1-0.25: Consider antibiotics
  - >0.25: Antibiotics indicated
  - Reassess if clinical deterioration
  - Reduces antibiotic exposure by 30-50%

FeNO (Fractional Exhaled NO):
  - Type 2 inflammation marker
  - May guide ICS use
  - Limited data in COPD

Exhaled Breath Volatiles:
  - VOC profiles
  - Bacterial vs viral differentiation
  - Research stage

Microbiome Analysis:
  - Sputum microbiome
  - Airway dysbiosis patterns
  - Predicts treatment response
------------------------------------------------------------


**Advanced Therapeutics:**

*Antibiotic Stewardship:*

Precision Antibiotic Approach:
------------------------------------------------------------
Local Resistance Pattern Awareness:
  - Know local antibiogram
  - Prior colonization history
  - Previous antibiotic exposures

Duration Optimization:
  - Standard: 5-7 days
  - Extended: Up to 14 days if:
    - Pseudomonas
    - Slow response
    - Complications
  - Shorter: 3-5 days if rapid response

De-escalation:
  - Culture-directed therapy
  - From broad to narrow spectrum
  - Stop if non-bacterial etiology confirmed
------------------------------------------------------------


*Biologics in Exacerbation Prevention:*

Investigational Biologics:
------------------------------------------------------------
Anti-IL-5 (Mepolizumab):
  - Eosinophilic COPD
  - Limited benefit shown
  - Possible ACO overlap

Anti-IL-4R (Dupilumab):
  - Type 2 inflammation
  - Ongoing trials

Anti-IL-1β (Canakinumab):
  - Inflammation reduction
  - Negative cardiovascular trials

Anti-CXCR2:
  - Neutrophil chemotaxis inhibition
  - Reduced exacerbations in trials
------------------------------------------------------------


**Systems Biology:**

*Multi-Omics in Exacerbations:*
Research Approaches:
------------------------------------------------------------
Transcriptomics:
  - Host response signatures
  - Viral vs bacterial differentiation
  - Severity prediction

Proteomics:
  - Inflammatory protein patterns
  - Biomarker discovery
  - Phenotype identification

Metabolomics:
  - Metabolic profiles during exacerbation
  - Recovery patterns

Microbiomics:
  - Airway microbiome shifts
  - Dysbiosis patterns
  - Treatment response prediction
------------------------------------------------------------


**AI in Exacerbation Management:**

*Prediction and Early Detection:*

Artificial Intelligence Applications:
------------------------------------------------------------
Exacerbation Prediction:
  - Home spirometry + AI
  - Wearable sensors
  - Symptom tracking apps
  - Weather/pollution integration
  - Early intervention possible

Severity Assessment:
  - Automated clinical scoring
  - Risk stratification
  - Treatment response prediction
  - Readmission risk

Ventilation Management:
  - Automated NIV titration
  - Extubation prediction
  - Weaning protocols
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'endotype', definition: 'Disease subtype defined by distinct biological mechanism' },
        { term: 'VOC', definition: 'Volatile organic compounds' },
        { term: 'antibiogram', definition: 'Profile of antibiotic resistance in a specific setting' },
        { term: 'dysbiosis', definition: 'Imbalance in microbial communities' },
      ],
      clinicalNotes: 'Eosinophilic exacerbations respond better to steroids. Procalcitonguided therapy reduces unnecessary antibiotics. CXCR2 antagonists show promise for neutrophilic exacerbations.',
      patientCounselingPoints: [
        'Your blood eosinophil count helps determine which treatments will work best for you.',
        'AI-powered apps may help predict exacerbations before they become severe.',
        'Personalized medicine is improving how we treat exacerbations.',
        'Research into different exacerbation types is leading to better treatments.',
        'Ask about clinical trials for new prevention strategies.',
      ],
    },
  },

  media: [
    {
      id: 'copd-action-plan',
      type: 'diagram',
      filename: 'copd-exacerbation-action-plan.svg',
      title: 'COPD Exacerbation Action Plan',
      description: 'Step-by-step guide for managing COPD exacerbations at home',
    },
    {
      id: 'niv-ventilation',
      type: 'diagram',
      filename: 'bipap-niv-copd.svg',
      title: 'Non-Invasive Ventilation for COPD',
      description: 'Illustration of BiPAP/NIV use in COPD exacerbations',
    },
  ],

  citations: [
    {
      id: 'gold-2024',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease',
      source: 'GOLD Report 2024',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-copd-overview', targetType: 'condition', relationship: 'parent', label: 'COPD Overview' },
    { targetId: 'chronic-disease-copd-management', targetType: 'concept', relationship: 'related', label: 'COPD Management' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['COPD', 'exacerbation', 'infection', 'respiratory failure'],
    keywords: ['COPD exacerbation', 'AECOPD', 'flare-up', 'respiratory infection'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
