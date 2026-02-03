/**
 * Chronic Bronchitis - Chronic Disease Education
 *
 * Comprehensive patient education about chronic bronchitis,
 * a type of COPD characterized by inflammation and mucus production.
 */

import { EducationalContent } from '../../types';

export const CHRONIC_BRONCHITIS: EducationalContent = {
  id: 'chronic-disease-chronic-bronchitis',
  type: 'condition',
  name: 'Chronic Bronchitis',
  alternateNames: ['Smoker\'s cough', 'Chronic bronchitis', 'Productive cough', 'Blue bloaters'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic bronchitis is a condition where the bronchial tubes that carry air to your lungs are constantly irritated and inflamed, causing a cough with mucus that lasts for months.',
      explanation: `**What Is Chronic Bronchitis?**

Chronic bronchitis is a long-term condition where the breathing tubes (bronchi) in your lungs are constantly irritated and inflamed. This causes a cough that produces mucus (phlegm) and lasts for a long time.

**How Is It Diagnosed?**

You have chronic bronchitis if:
- You have a cough with mucus most days for at least 3 months
- This happens for 2 or more years in a row

**Common Symptoms:**

Main Symptoms:
---------------------------------
• Cough that produces mucus (clear, white,
  yellow, or green)
• Shortness of breath, especially with activity
• Wheezing (whistling sound when breathing)
• Chest tightness
• Frequent respiratory infections
---------------------------------

**What Causes It?**

- Smoking (most common cause)
- Second-hand smoke
- Air pollution
- Chemical fumes or dust at work
- Repeated lung infections

**How It Affects Your Lungs:**

Think of your breathing tubes like streets. In chronic bronchitis:
- The streets are narrowed (like construction zones)
- There is too much "traffic" (mucus) blocking the way
- The air has trouble getting through

**Treatment:**

Management Options:
---------------------------------
• Quit smoking (most important!)
• Inhaled medications to open airways
• Medications to thin mucus
• Breathing exercises
• Drinking plenty of water
• Avoiding lung irritants
• Getting vaccinated (flu, pneumonia)
---------------------------------

**Living with Chronic Bronchitis:**

- Avoid smoke and pollution
- Use a humidifier if air is dry
- Wash hands often to prevent infections
- Stay active within your limits
- Eat healthy foods
- Get enough rest

**When to Call Your Doctor:**

- Fever over 100.4°F (38°C)
- Coughing up blood
- Mucus changes color or amount
- Increased shortness of breath
- Chest pain
- Confusion or extreme tiredness

**Remember:** Quitting smoking can slow down the disease and help you feel better!`,
      keyTerms: [
        { term: 'bronchi', definition: 'The main tubes that carry air into your lungs' },
        { term: 'mucus', definition: 'Thick fluid produced in the lungs and airways; also called phlegm or sputum' },
        { term: 'wheezing', definition: 'High-pitched whistling sound when breathing' },
        { term: 'inflammation', definition: 'Redness and swelling caused by irritation or infection' },
      ],
      analogies: [
        'Your airways in chronic bronchitis are like a hallway filled with stuff - it is hard to walk through.',
        'Mucus in your airways is like traffic on a highway - it slows everything down.',
      ],
      examples: [
        'Tom smoked for 30 years and has a morning cough with mucus every day. His doctor diagnosed chronic bronchitis.',
        'Linda worked in a factory with chemical fumes for years. She now has chronic bronchitis with daily cough.',
      ],
      patientCounselingPoints: [
        'Quitting smoking is the single most important thing you can do for your lungs.',
        'Drinking plenty of water helps thin mucus so it is easier to cough up.',
        'Get your annual flu shot and pneumonia vaccine to prevent infections.',
        'Learn breathing techniques that can help clear mucus from your lungs.',
        'Avoid cold air if it makes your symptoms worse - wear a scarf over your mouth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic bronchitis is defined as a productive cough lasting at least 3 months for 2 consecutive years, caused by bronchial inflammation and excessive mucus production, typically resulting from tobacco smoke exposure.',
      explanation: `**Definition and Clinical Presentation:**

*Diagnostic Criteria:*
Chronic Bronchitis Definition:
-----------------------------------------
Productive cough for:
  • At least 3 months per year
  • For 2 or more consecutive years
  • In the absence of other causes

Clinical Features:
  • Chronic sputum production
  • Dyspnea on exertion (later)
  • Wheezing
  • Recurrent infections
  • Cyanosis (late)
  • Edema (cor pulmonale)
-----------------------------------------

**Pathophysiology:**

Disease Process:
-----------------------------------------
Chronic Irritation (smoke, fumes)
      ↓
Bronchial Inflammation
      ↓
  • Hypertrophy of mucus glands
  • Increased goblet cells
  • Squamous metaplasia
      ↓
Excessive Mucus Production
      ↓
  • Obstruction of airways
  • Impaired clearance
      ↓
  • Air trapping
  • Hypoventilation
  • Hypoxemia → Hypercapnia
-----------------------------------------

**Clinical Findings:**

*Physical Examination:*
- Coarse crackles (rales)
- Wheezing
- Prolonged expiration
- Cyanosis (bluish skin color)
- Clubbing of fingers (sometimes)
- Peripheral edema (right heart failure)

*Classic Presentation:*
- "Blue bloater" (vs emphysema "pink puffer")
- Overweight/normal weight
- Cyanotic from chronic hypoxemia
- Edematous from cor pulmonale

**Diagnosis:**

*Pulmonary Function Tests:*
Spirometry Findings:
-----------------------------------------
FEV1/FVC < 0.70 (airflow obstruction)

Pattern:
  • Reduced FEV1
  • Reduced FVC (less than emphysema)
  • May improve with bronchodilator
  • Air trapping: increased RV, TLC
-----------------------------------------

*Chest X-ray Findings:*
- Increased bronchovascular markings
- Cardiomegaly (if cor pulmonale)
- Normal or increased lung volumes

**Management:**

*Pharmacologic Therapy:*
Medication Options:
-----------------------------------------
Bronchodilators (mainstay):
  • Short-acting: albuterol, ipratropium (prn)
  • Long-acting: LABA, LAMA, or LABA/LAMA
  → Reduce dyspnea, improve exercise

Mucolytics (selected patients):
  • Guaifenesin
  • N-acetylcysteine
  • Consider if thick mucus, frequent infections

Antibiotics (not for chronic use):
  • Only for acute exacerbations
  • Prophylactic macrolides in frequent
    exacerbators (specialist decision)

Corticosteroids:
  • Inhaled: added if frequent exacerbations
  • Oral: only for acute exacerbations
-----------------------------------------

*Mucus Clearance Techniques:*
- Active cycle of breathing technique
- Chest physiotherapy/percussion
- Positive expiratory pressure devices
- Flutter valve, Acapella device
- Adequate hydration

**Exacerbations:**

An acute worsening of symptoms requiring additional therapy.

*Triggers:*
- Respiratory infections (most common)
- Air pollution
- Temperature changes
- Nonadherence to medications

*Infectious Causes:*
- Viral: influenza, RSV, rhinovirus
- Bacterial: H. influenzae, S. pneumoniae, M. catarrhalis

**Complications:**

- Recurrent infections (bronchitis, pneumonia)
- Cor pulmonale (right heart failure)
- Respiratory failure
- Weight loss (advanced disease)
- Pulmonary hypertension`,
      keyTerms: [
        { term: 'dyspnea', definition: 'Shortness of breath or difficulty breathing' },
        { term: 'cyanosis', definition: 'Bluish discoloration of skin from low oxygen' },
        { term: 'cor pulmonale', definition: 'Right heart failure caused by lung disease' },
        { term: 'clubbing', definition: 'Fingertip enlargement and nail bed angle change' },
        { term: 'RV', definition: 'Residual volume; air left in lungs after full exhalation' },
        { term: 'TLC', definition: 'Total lung capacity; total air in lungs after full inhalation' },
      ],
      analogies: [
        'The "blue bloater" appearance comes from fluid retention (bloat) and low oxygen (blue).',
      ],
      clinicalNotes: 'Chronic bronchitis is one component of COPD. Smoking cessation is the only intervention that slows progression. Consider bronchiectasis if sputum is copious and recurrent infections.',
      patientCounselingPoints: [
        'Recognize your exacerbation triggers and avoid them when possible.',
        'Have an action plan for what to do when symptoms worsen.',
        'Chest physiotherapy techniques can help clear mucus effectively.',
        'Annual vaccinations against flu and pneumonia prevent complications.',
        'Join a pulmonary rehabilitation program to improve your breathing and strength.',
      ],
    },
    3: {
      level: 3,
      summary: 'Chronic bronchitis is a clinical syndrome characterized by persistent productive cough due to bronchial inflammation, mucus gland hypertrophy, and impaired mucociliary clearance, resulting in airflow obstruction and frequent infections.',
      explanation: `**Pathophysiology:**

*Morphologic Changes:*
Airway Remodeling in Chronic Bronchitis:
-----------------------------------------------------
Large Airways (Bronchi):
  • Mucus gland hypertrophy (Reid Index > 0.4)
  • Increased goblet cells (hyperplasia, metaplasia)
  • Submucosal inflammation and fibrosis
  • Squamous metaplasia of epithelium

Small Airways (<2mm):
  • Inflammation and edema
  • Fibrosis and narrowing
  • Peribronchiolar fibrosis
  → Major site of airflow obstruction

Both:
  • Impaired mucociliary clearance
  • Mucus plugging
  • Bacterial colonization
-----------------------------------------------------

*Reid Index:*
- Ratio of gland thickness to bronchial wall
- Normal: <0.4
- Chronic bronchitis: >0.4
- Measures mucus gland hypertrophy

**Mucociliary Dysfunction:**

Normal vs Impaired Clearance:
-----------------------------------------------------
Normal:
  Cilia beat frequency: 12-15 Hz
  Mucus layer: optimal viscosity
  → Efficient particle clearance

Chronic Bronchitis:
  ↓ Ciliary beat frequency (smoking damage)
  ↑ Mucus production (goblet cell hyperplasia)
  ↑ Mucus viscosity (dehydrated)
  → Stasis, bacterial colonization
  → Chronic infection → inflammation cycle
-----------------------------------------------------

**Gas Exchange Abnormalities:**

*V/Q Mismatch:*
- Hypoventilation of affected lung units
- Persistent perfusion of poorly ventilated areas
- V/Q mismatch → hypoxemia
- Eventually: hypercapnia (CO2 retention)

*Hypoventilation:*
- Reduced alveolar ventilation
- PaCO2 elevation (>45 mm Hg)
- Respiratory acidosis (compensated or acute)

**Clinical Assessment:**

*Sputum Analysis:*
Sputum Characteristics:
-----------------------------------------------------
Mucoid:
  • Clear/white
  • Chronic bronchitis baseline

Mucopurulent:
  • Yellow/green
  • Neutrophils present
  • Possible infection

Purulent:
  • Dark yellow/green
  • Bacterial infection likely

Hemoptysis:
  • Blood in sputum
  • Requires evaluation
  • Exclude malignancy, TB
-----------------------------------------------------

*Microbiology:*
Common pathogens:
- Haemophilus influenzae
- Streptococcus pneumoniae
- Moraxella catarrhalis
- Pseudomonas (advanced disease, frequent exacerbations)

**Management:**

*Bronchodilator Selection:*
Evidence-Based Approach:
-----------------------------------------------------
Initial:
  SABA or SAMA prn for symptoms

Persistent Symptoms:
  LAMA monotherapy OR
  LABA monotherapy (if concomitant asthma)

Symptomatic on LAMA/LABA:
  LABA/LAMA combination

Frequent Exacerbations:
  Consider adding ICS if:
    • Blood eosinophils ≥100 cells/μL
    • Asthma-COPD overlap
    • Prior exacerbations despite dual therapy
-----------------------------------------------------

*Chronic Macrolide Therapy:*
Azithromycin for Frequent Exacerbators:
-----------------------------------------------------
Indications:
  • ≥2 moderate exacerbations/year OR
  • ≥1 severe exacerbation/year
  • Despite optimal inhaled therapy

Evidence:
  • REDUCE trial: 27% exacerbation reduction
  • Improved quality of life

Dosing:
  • Azithromycin 250 mg daily
  • OR 500 mg 3x/week

Monitoring Required:
  • QTc prolongation
  • Hepatic function
  • Hearing
  • Antibiotic resistance
-----------------------------------------------------

**Complications:**

*Cor Pulmonale:*
Right Heart Failure Pathophysiology:
-----------------------------------------------------
Hypoxemia + Hypercapnia
      ↓
Pulmonary Vasoconstriction
      ↓
Pulmonary Hypertension
      ↓
Right Ventricular Hypertrophy
      ↓
Right Ventricular Failure (Cor Pulmonale)
      ↓
Peripheral Edema, JVD, Hepatomegaly
-----------------------------------------------------

*Treatment:*
- Long-term oxygen therapy (LTOT) - most important
- Diuretics for volume overload
- Pulmonary vasodilators (limited benefit in COPD-PH)

**Prognosis:**

*BODE Index Components:*
Prognostic Factors:
-----------------------------------------------------
B - BMI: Weight loss associated with worse prognosis
O - Obstruction: Lower FEV1 = higher mortality
D - Dyspnea: Higher mMRC = worse outcomes
E - Exercise capacity: Lower 6MWD = higher risk
-----------------------------------------------------

*Poor Prognostic Indicators:*
- Low BMI (<21 kg/m²)
- FEV1 <30% predicted
- Severe hypoxemia (PaO2 <55 mm Hg)
- Hypercapnia (PaCO2 >50 mm Hg)
- Cor pulmonale
- Frequent exacerbations`,
      keyTerms: [
        { term: 'Reid Index', definition: 'Ratio of mucus gland thickness to bronchial wall' },
        { term: 'mucociliary clearance', definition: 'Natural cleaning mechanism of the airways' },
        { term: 'V/Q mismatch', definition: 'Ventilation-perfusion mismatch; impaired gas exchange' },
        { term: 'LTOT', definition: 'Long-term oxygen therapy' },
        { term: 'BODE', definition: 'Body mass index, Obstruction, Dyspnea, Exercise capacity index' },
        { term: '6MWD', definition: 'Six-minute walk distance; measure of exercise capacity' },
      ],
      clinicalNotes: 'Chronic bronchitis patients are more prone to exacerbations than emphysema-dominant patients. Chronic macrolide therapy reduces exacerbations but requires monitoring for QT prolongation and hearing loss.',
      patientCounselingPoints: [
        'Your exacerbation risk can be reduced with appropriate inhaled therapy and possibly chronic macrolides.',
        'Long-term oxygen therapy improves survival if your oxygen is consistently low.',
        'Regular exercise helps maintain your strength and breathing capacity.',
        'Good nutrition helps maintain muscle and prevent weight loss.',
        'Pulmonary rehabilitation teaches techniques to breathe more efficiently.',
      ],
    },
    4: {
      level: 4,
      summary: 'Chronic bronchitis represents an airway-predominant COPD phenotype characterized by bronchial inflammation, mucus gland hypertrophy, and impaired mucociliary clearance, leading to chronic cough, frequent infections, and progressive airflow obstruction requiring targeted management strategies.',
      explanation: `**Advanced Pathophysiology:**

*Inflammatory Cascade:*
Molecular Pathogenesis:
-----------------------------------------------------
Cigarette Smoke / Noxious Stimuli
      ↓
Epithelial Injury + Oxidative Stress
      ↓
Release of:
  • IL-8, LTB4 → Neutrophil chemotaxis
  • TNF-α, IL-1β → Inflammation
  • TGF-β → Fibrosis
      ↓
Neutrophil Elastase Release
      ↓
Mucus Gland Hyperplasia + Ciliary Dysfunction
      ↓
Mucus Hypersecretion + Impaired Clearance
      ↓
Airway Obstruction + Bacterial Colonization
      ↓
Vicious Cycle of Infection and Inflammation
-----------------------------------------------------

*Phenotype Characteristics:*
Chronic Bronchitis vs Emphysema Phenotype:
-----------------------------------------------------
                Chronic Bronchitis    Emphysema
-----------------------------------------------------
Symptom:        Cough dominant         Dyspnea dominant
Sputum:         Copious                Minimal
Chest X-ray:    ↑ markings             Hyperinflated
Body habitus:   Normal/overweight      Underweight
ABG:            Hypoxemia +           Hypoxemia (early)
                hypercapnia
DLCO:           Mild ↓                 Marked ↓
Resp drive:     ↓ (CO2 retainer)      ↑ (pink puffer)
Prognosis:      Worse with            Better with
                exacerbations          exercise
-----------------------------------------------------

**Exacerbation Phenotype:**

*Frequent Exacerbator:*
Characteristics:
-----------------------------------------------------
Definition:
  ≥2 exacerbations/year or
  ≥1 hospitalization/year

Features:
  • Higher sputum inflammatory markers
  • Higher sputum bacterial load
  • Worse quality of life
  • Faster FEV1 decline
  • Higher mortality

Risk Factors:
  • History of exacerbations
  • Severe airflow limitation
  • Chronic bronchitis phenotype
  • GERD
  • Poor medication adherence

Management:
  • LABA/LAMA baseline
  • Add ICS if eosinophils ≥100
  • Consider chronic macrolide
  • Roflumilast (if severe + chronic bronchitis)
  • Phosphodiesterase-4 inhibitor
-----------------------------------------------------

*Roflumilast:*
PDE-4 Inhibitor (Daliresp):
-----------------------------------------------------
Indications:
  • Severe COPD (FEV1 <50%)
  • Chronic bronchitis phenotype
  • Frequent exacerbations

Mechanism:
  • Reduces inflammation
  • Decreases exacerbations

Dosing:
  • 500 mcg daily

Side Effects:
  • Diarrhea (common)
  • Nausea, weight loss
  • Headache
  • Psychiatric effects

Consider:
  • Weight loss already present
  • History of depression
-----------------------------------------------------

**Advanced Diagnostic:**

*CT Imaging:*
Bronchitis Patterns on CT:
-----------------------------------------------------
Bronchial Wall Thickening:
  • Large airway involvement
  • Reid Index correlation
  • Predicts symptoms and exacerbations

Mucus Plugging:
  • Filling of airways with mucus
  • May cause post-obstructive pneumonia

Air Trapping:
  • Expiratory scans show mosaic pattern
  • Small airway disease marker

Centrilobular Nodules:
  • Peribronchiolar inflammation
  • May represent early disease
-----------------------------------------------------

*Exhaled Biomarkers:*
- FeNO (fractional exhaled nitric oxide)
- Exhaled breath condensate
- Volatile organic compounds
- Sputum cell counts (eosinophils vs neutrophils)

**Systemic Manifestations:**

*Cachexia vs Obesity:*
Body Composition Effects:
-----------------------------------------------------
Cachexia:
  • Weight loss, muscle wasting
  • ↑ Energy expenditure (breathing work)
  • Systemic inflammation
  • ↑ Mortality risk

Obesity Paradox:
  • Overweight patients may have better survival
  • Possible protective effect during exacerbations
  • But worse symptoms and exercise capacity
-----------------------------------------------------

**Management:**

*Antibiotic Strategies:*
Risk-Adapted Approach:
-----------------------------------------------------
Low Risk (no prior resistant organisms):
  • Amoxicillin/clavulanate
  • Doxycycline
  • Standard duration: 5-7 days

High Risk (resistance risk factors):
  • Frequent exacerbations
  • Prior resistant organisms
  • Multiple hospitalizations
  • Poor response to first-line
  Options:
    • Respiratory fluoroquinolone
    • Cephalosporin + macrolide
    • Piperacillin-tazobactam

Pseudomonas Coverage (if colonization):
  • Ciprofloxacin
  • Levofloxacin
  • Consider ID consultation
-----------------------------------------------------

*Mucus Management:*
Advanced Airway Clearance:
-----------------------------------------------------
Active Cycle of Breathing Technique:
  1. Breathing control (rest)
  2. Deep breathing exercises
  3. Forced expiration technique (huff)
  → Repeat cycles

Positive Expiratory Pressure:
  • PEP masks/devices
  • Oscillatory PEP (Flutter, Acapella)
  • High-frequency chest wall oscillation

Techniques:
  • Postural drainage (modified positions)
  • Autogenic drainage
  • Chest physiotherapy (percussion, vibration)
-----------------------------------------------------`,
      keyTerms: [
        { term: 'DLCO', definition: 'Diffusing capacity for carbon monoxide; measures gas exchange' },
        { term: 'GERD', definition: 'Gastroesophageal reflux disease; can worsen COPD' },
        { term: 'PDE-4', definition: 'Phosphodiesterase-4; enzyme targeted by roflumilast' },
        { term: 'huff coughing', definition: 'Forced expiration technique for mucus clearance' },
        { term: 'postural drainage', definition: 'Positioning to use gravity to drain mucus' },
      ],
      clinicalNotes: 'Chronic bronchitis patients benefit from regular airway clearance techniques. ICS use should be reserved for patients with frequent exacerbations or elevated eosinophils.',
      patientCounselingPoints: [
        'Airway clearance techniques can be very effective at preventing infections.',
        'If you have frequent exacerbations, ask your doctor about roflumilast or chronic macrolides.',
        'Maintaining a healthy weight is important - both too little and too much weight cause problems.',
        'Roflumilast can cause weight loss and diarrhea - tell your doctor if these occur.',
        'Good oral hygiene may reduce bacteria entering your lungs.',
      ],
    },
    5: {
      level: 5,
      summary: 'Chronic bronchitis represents an airway-predominant COPD endotype characterized by neutrophilic inflammation, mucus hypersecretion, and impaired mucociliary clearance, with distinct molecular signatures requiring phenotype-directed therapeutic approaches.',
      explanation: `**Precision Phenotyping:**

*Molecular Endotypes:*

Inflammatory Endotypes:
-----------------------------------------------------
Neutrophilic (Classic Chronic Bronchitis):
  • Sputum neutrophils >61%
  • ↑ IL-8, IL-1β, TNF-α
  • ↑ Matrix metalloproteinases (MMP-9, MMP-12)
  • Mucus hypersecretion dominant
  • Frequent exacerbations
  • Poor response to ICS
  → May respond to:
    - CXCR2 antagonists (investigational)
    - Macrolides (anti-inflammatory)
    - Roflumilast (PDE4 inhibition)

Eosinophilic (Overlap Phenotype):
  • Sputum eosinophils >2-3%
  • Blood eosinophils often ≥100
  • Type 2 inflammation
  • Better ICS response
  • Similar to asthma pathophysiology
  → Responds to:
    - ICS-containing regimens
    - Biologics (anti-IL-5, anti-IL-4R)

Pauci-inflammatory:
  • Minimal sputum inflammation
  • Alternative diagnoses likely:
    - Heart failure
    - GERD
    - Bronchiectasis
-----------------------------------------------------

**Emerging Therapeutics:**

*Novel Anti-Inflammatory Agents:*
Investigational Therapies:
-----------------------------------------------------
CXCR2 Antagonists:
  • Danirixin, navarixin
  • Reduce neutrophil migration
  • Mixed results in trials
  • Possible benefit in sputum neutrophilia

Anti-IL-1β:
  • Canakinumab
  • Limited benefit shown
  • Cardiovascular benefit confirmed

Anti-TNF:
  • Infliximab (negative trial)
  • Not beneficial in COPD

Phosphodiesterase Inhibitors:
  • Roflumilast (approved)
  • Targets neutrophilic inflammation
  • Reduces exacerbations in chronic bronchitis
-----------------------------------------------------

*Biomarker-Guided Therapy:*
Precision Medicine Approach:
-----------------------------------------------------
Blood Eosinophils:
  • ≥300 cells/μL: Strong ICS consideration
  • 100-300: Possible ICS benefit
  • <100: ICS unlikely to help

Fibrinogen:
  • >350 mg/L: High exacerbation risk
  • May guide biologic therapy

Sputum Neutrophils:
  • >61%: Neutrophilic phenotype
  • Consider PDE4 inhibitors

Alpha-1 Antitrypsin:
  • Deficiency: Replacement therapy
  • Screening all chronic bronchitis patients
-----------------------------------------------------

**Systems Biology:**

*Multi-Omics Integration:*
Research Approaches:
-----------------------------------------------------
Genomics:
  • Multiple susceptibility loci
  • FAM13A, HHIP, CHRNA3/5
  • May guide future targeted therapies

Transcriptomics:
  • Airway epithelial gene expression
  • Inflammatory signatures
  • Phenotype identification

Proteomics:
  • Sputum protein signatures
  • Biomarker discovery
  • Exacerbation prediction

Metabolomics:
  • Metabolic profiles
  • Lung microenvironment analysis
-----------------------------------------------------

**Advanced Imaging:**

*Quantitative CT:*
CT-Based Phenotyping:
-----------------------------------------------------
Airway Wall Metrics:
  • Wall thickness % (WT%)
  • Lumen diameter (LD)
  • Wall area (WA)
  → Predicts symptoms, exacerbations

Airway Count:
  • Airway count <6th percentile
  • Small airway destruction
  → Correlates with airflow obstruction

Texture Analysis:
  • Mucus plugging identification
  • Peribronchial fibrosis
  • Heterogeneity assessment
-----------------------------------------------------

**Future Directions:**

*Mucus Modulators:*
Targeting Mucus Production:
-----------------------------------------------------
ENaC Inhibitors:
  • Block epithelial sodium channel
  • Increase airway surface liquid
  • Improve mucociliary clearance
  • Clinical trials ongoing

Mucolytic Enhancement:
  • Novel N-acetylcysteine formulations
  • Hypertonic saline
  • Mannitol dry powder

Goblet Cell Metaplasia:
  • NOTCH pathway inhibitors
  • SPDEF inhibition
  • Preclinical investigation
-----------------------------------------------------

*Microbiome Modulation:*
Lung Microbiome in Chronic Bronchitis:
-----------------------------------------------------
Dysbiosis:
  • Reduced diversity
  • Proteobacteria dominance
  • Haemophilus, Moraxella overgrowth

Interventions:
  • Probiotics (investigational)
  • Phage therapy (preclinical)
  • Bacteriophage targeting Pseudomonas
-----------------------------------------------------

*Gene Therapy:*
- A1AT gene augmentation (deficiency)
- Anti-protease enhancement
- Anti-inflammatory gene delivery`,
      keyTerms: [
        { term: 'endotype', definition: 'Disease subtype defined by distinct pathophysiology' },
        { term: 'CXCR2', definition: 'Chemokine receptor 2; neutrophil chemotaxis' },
        { term: 'ENaC', definition: 'Epithelial sodium channel; regulates airway surface liquid' },
        { term: 'NOTCH', definition: 'Signaling pathway involved in cell differentiation' },
        { term: 'SPDEF', definition: 'Transcription factor regulating goblet cell differentiation' },
      ],
      clinicalNotes: 'Eosinophilic COPD phenotype responds better to ICS. Neutrophilic phenotype may benefit from roflumilast or chronic macrolides. Sputum cell analysis helps guide phenotype-directed therapy.',
      patientCounselingPoints: [
        'Research into different COPD types is leading to more personalized treatments.',
        'Blood tests may help predict which medications will work best for you.',
        'New treatments targeting mucus production are being studied.',
        'Clinical trials may offer access to cutting-edge therapies.',
        'Your COPD treatment may change as research advances.',
      ],
    },
  },

  media: [
    {
      id: 'chronic-bronchitis-pathogenesis',
      type: 'diagram',
      filename: 'chronic-bronchitis-pathogenesis.svg',
      title: 'Chronic Bronchitis Pathogenesis',
      description: 'Diagram showing how chronic bronchitis develops',
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
    { targetId: 'chronic-disease-emphysema', targetType: 'condition', relationship: 'sibling', label: 'Emphysema' },
  ],

  tags: {
    systems: ['respiratory'],
    structures: ['bronchi', 'bronchioles'],
    topics: ['COPD', 'chronic bronchitis', 'cough', 'mucus'],
    keywords: ['chronic bronchitis', 'smoker\'s cough', 'productive cough', 'COPD'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
