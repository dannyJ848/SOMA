/**
 * COPD Overview - Chronic Disease Education
 *
 * Comprehensive patient education about Chronic Obstructive Pulmonary Disease,
 * including its causes, symptoms, and management strategies.
 */

import { EducationalContent } from '../../types';

export const COPD_OVERVIEW: EducationalContent = {
  id: 'chronic-disease-copd-overview',
  type: 'condition',
  name: 'COPD Overview',
  alternateNames: ['Chronic Obstructive Pulmonary Disease', 'COPD', 'Chronic bronchitis and emphysema', 'Chronic obstructive lung disease', 'CORD'],

  levels: {
    1: {
      level: 1,
      summary: 'COPD is a lung disease that makes it hard to breathe. It is usually caused by smoking and gets worse over time, but treatments can help you breathe easier and live better.',
      explanation: `**What Is COPD?**

COPD stands for Chronic Obstructive Pulmonary Disease. It is a lung disease that makes breathing difficult and gets worse over time. COPD includes two main conditions:
- Chronic bronchitis (frequent cough with mucus)
- Emphysema (damage to air sacs in lungs)

**What Causes COPD?**

The main cause is smoking. Other causes include:
- Second-hand smoke
- Air pollution
- Chemical fumes or dust at work
- Rare genetic condition (alpha-1 antitrypsin deficiency)

**Common Signs of COPD:**

Common Symptoms:
---------------------------------
• Shortness of breath, especially with activity
• Frequent cough (sometimes called "smoker's cough")
• Coughing up mucus (phlegm)
• Wheezing (whistling sound when breathing)
• Chest tightness
• Frequent respiratory infections
• Feeling tired or low energy
---------------------------------

**How COPD Affects Breathing:**

Think of your lungs like a stretchy balloon that inflates and deflates easily. In COPD:
- The airways become narrowed (like a kinked hose)
- The air sacs lose their stretchiness (like a used balloon)
- Air gets trapped in the lungs
- It becomes harder to breathe in and out

**How Is COPD Diagnosed?**

Doctors use:
- Breathing tests (spirometry)
- Chest X-ray or CT scan
- Blood tests (sometimes)
- Listening to your lungs

**Treatments That Help:**

Management Options:
---------------------------------
• Quit smoking (most important!)
• Inhaled medications (bronchodilators)
• Oxygen therapy (if needed)
• Pulmonary rehabilitation
• Vaccinations (flu, pneumonia)
• Breathing exercises
• Healthy lifestyle
---------------------------------

**Living with COPD:**

- Learn breathing techniques
- Stay active within your limits
- Eat healthy foods
• Avoid triggers (smoke, pollution, cold air)
- Follow your treatment plan
- Keep regular doctor appointments

**When to Call Your Doctor:**

- More short of breath than usual
- Coughing more than usual
• Fever or chills
- Change in mucus color (yellow, green, or bloody)
- Chest pain
- Sudden worsening of symptoms

**Remember:** Quitting smoking is the most important thing you can do to help your lungs!`,
      keyTerms: [
        { term: 'COPD', definition: 'Chronic Obstructive Pulmonary Disease; a lung disease that blocks airflow' },
        { term: 'chronic bronchitis', definition: 'Long-term inflammation of the bronchial tubes causing cough and mucus' },
        { term: 'emphysema', definition: 'Damage to the air sacs in the lungs making breathing difficult' },
        { term: 'spirometry', definition: 'A breathing test that measures how well your lungs work' },
        { term: 'bronchodilator', definition: 'Medication that opens the airways to make breathing easier' },
      ],
      analogies: [
        'COPD is like breathing through a straw - the airways are narrowed making it hard to get air in and out.',
        'Healthy lungs are like sponges that spring back when squeezed. Lungs with emphysema are like old sponges that stay collapsed.',
      ],
      examples: [
        'Robert smoked for 40 years and now has COPD. Since quitting, his breathing has stabilized and he has fewer infections.',
        'Maria was diagnosed with COPD after having shortness of breath for years. She uses inhaled medicines and does breathing exercises daily.',
      ],
      patientCounselingPoints: [
        'It is never too late to quit smoking - your lungs will benefit even with COPD.',
        'Use your inhalers exactly as prescribed - technique matters!',
        'Stay as active as you can - physical activity strengthens your breathing muscles.',
        'Get vaccinated against flu and pneumonia to prevent infections.',
        'Join a pulmonary rehabilitation program if recommended by your doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'COPD is a progressive lung disease characterized by persistent respiratory symptoms and airflow limitation due to airway and/or alveolar abnormalities, usually caused by significant exposure to noxious particles or gases.',
      explanation: `**Understanding COPD:**

COPD (Chronic Obstructive Pulmonary Disease) is a leading cause of morbidity and mortality worldwide. It is characterized by persistent respiratory symptoms and airflow limitation that is not fully reversible.

**Pathophysiology:**

COPD Components:
-----------------------------------------
Chronic Bronchitis:
  • Inflammation of bronchial tubes
  • Excessive mucus production
  • Chronic cough for ≥3 months/year
  • Occurs for ≥2 consecutive years

Emphysema:
  • Destruction of alveolar walls
  • Loss of lung elasticity
  • Air trapping and hyperinflation
  • Reduced surface area for gas exchange

Small Airway Disease:
  • Inflammation and narrowing
  • Fibrosis and obstruction
  • Contributes to airflow limitation
-----------------------------------------

**Risk Factors:**

Risk Factors for COPD:
-----------------------------------------
Tobacco Smoking (primary cause):
  • Cigarette smoking (80-90% of cases)
  • Pipe and cigar smoking
  • Second-hand smoke exposure

Occupational Exposures:
  • Dust (coal, silica, grain)
  • Chemicals (vapors, irritants)
  • Fumes (welding, diesel)

Environmental:
  • Indoor air pollution (biomass fuel)
  • Outdoor air pollution
  • Poor ventilation housing

Genetic:
  • Alpha-1 antitrypsin deficiency
  • Family history of COPD

Other:
  • Asthma history
  • Low birth weight
  • Respiratory infections in childhood
-----------------------------------------

**Clinical Presentation:**

*Symptoms:*
- Chronic cough (often "smoker's cough")
- Sputum production
- Dyspnea on exertion (progressive)
- Wheezing
- Chest tightness

*Physical Examination Findings:*
- Prolonged expiration
- Wheezing (may be absent)
- Decreased breath sounds
- Barrel chest (advanced)
- Use of accessory muscles
- Cyanosis (late)
- Edema (cor pulmonale)

**Diagnosis:**

*Spirometry (Required for diagnosis):*
Spirometry Criteria:
-----------------------------------------
Post-bronchodilator FEV1/FVC < 0.70
  → Confirms airflow obstruction

Severity Classification (GOLD):
  FEV1 % Predicted
  ----------------------------------
  Mild (GOLD 1):    ≥80%
  Moderate (GOLD 2): 50-79%
  Severe (GOLD 3):   30-49%
  Very Severe (GOLD 4): <30%

FEV1 = Forced expiratory volume in 1 second
FVC = Forced vital capacity
-----------------------------------------

*Additional Tests:*
- Chest X-ray (rule out other conditions)
- CT scan (emphysema assessment, lung cancer screening)
- Alpha-1 antitrypsin testing (young patients, family history)
- Arterial blood gases (advanced disease)
- Echocardiogram (assess pulmonary hypertension)

**Treatment:**

COPD Management Pyramid:
-----------------------------------------
        Smoking Cessation
                ↓
        Vaccinations
                ↓
      Bronchodilator Therapy
                ↓
        Pulmonary Rehabilitation
                ↓
       Oxygen (if indicated)
                ↓
    Surgical Options (selected patients)
-----------------------------------------

*Bronchodilator Therapy:*
- Short-acting: as needed for symptoms (SABA, SAMA)
- Long-acting: regular for persistent symptoms (LABA, LAMA)
- LAMA + LABA for more severe symptoms
- Inhaled corticosteroids (ICS) added for frequent exacerbations

**Exacerbations:**

An acute worsening of respiratory symptoms requiring additional therapy. Causes:
- Respiratory infections (most common)
- Air pollution
- Temperature changes
- Medication non-adherence
- Comorbid conditions`,
      keyTerms: [
        { term: 'FEV1', definition: 'Forced expiratory volume in 1 second; measures how much air you can exhale' },
        { term: 'FVC', definition: 'Forced vital capacity; total amount of air exhaled' },
        { term: 'dyspnea', definition: 'Medical term for shortness of breath or difficulty breathing' },
        { term: 'LABA', definition: 'Long-acting beta-agonist; long-acting bronchodilator' },
        { term: 'LAMA', definition: 'Long-acting muscarinic antagonist; long-acting bronchodilator' },
        { term: 'SABA', definition: 'Short-acting beta-agonist; rescue inhaler' },
        { term: 'cor pulmonale', definition: 'Right heart failure caused by lung disease' },
      ],
      analogies: [
        'COPD is like trying to breathe through a hose that someone is stepping on.',
        'The FEV1/FVC ratio is like checking how much air you can blow out quickly compared to your total lung capacity.',
      ],
      clinicalNotes: 'COPD is the third leading cause of death worldwide. Spirometry is required for diagnosis. Smoking cessation is the only intervention that slows disease progression.',
      patientCounselingPoints: [
        'If you smoke, quitting is the most important step you can take for your lungs.',
        'Learn proper inhaler technique - ask your healthcare provider to check your technique.',
        'Pulmonary rehabilitation can significantly improve your quality of life.',
        'Get your annual flu shot and pneumonia vaccine as recommended.',
        'Recognize exacerbation symptoms and have an action plan ready.',
      ],
    },
    3: {
      level: 3,
      summary: 'COPD is a preventable and treatable disease characterized by persistent airflow limitation that is usually progressive and associated with an enhanced chronic inflammatory response in the airways and lungs to noxious particles or gases.',
      explanation: `**Definition and Epidemiology:**

*GOLD Definition:*
COPD is a common, preventable, and treatable disease that is characterized by persistent respiratory symptoms and airflow limitation due to airway and/or alveolar abnormalities usually caused by significant exposure to noxious particles or gases.

*Global Burden:*
- Prevalence: ~10% of adults aged 40+
- Third leading cause of death worldwide
- Higher prevalence in smokers
- Underdiagnosis is common

**Pathophysiology:**

*Inflammatory Pathways:*
COPD Inflammation:
-------------------------------------------------
Noxious Particle Exposure (smoke, pollutants)
      ↓
Activation of Innate Immunity
  • Macrophages, neutrophils, CD8+ T-cells
      ↓
Inflammatory Mediator Release
  • IL-8, TNF-α, LTB4, proteases
      ↓
Structural Damage:
  • Mucus gland hyperplasia (bronchitis)
  • Protease-antiprotease imbalance (emphysema)
  • Fibrosis and narrowing (small airways)
      ↓
Airflow Limitation + Gas Exchange Abnormality
-------------------------------------------------

*Emphysema Pathogenesis:*
Protease-Antiprotease Imbalance:
-------------------------------------------------
Normal:
  Alpha-1 antitrypsin (A1AT)
  ↓ Neutralizes
  Neutrophil elastase

Emphysema:
  Smoking → ↑ Neutrophils/Macrophages
          → Elastase release
          → A1AT inactivation
          → Unchecked elastase activity
          → Elastin destruction
          → Alveolar wall destruction
-------------------------------------------------

*Panacinar vs Centriacinar:*
Emphysema Patterns:
-------------------------------------------------
Centriacinar (Centrilobular):
  • Upper lobe predominance
  • Respiratory bronchioles involved
  • Smoker-related

Panacinar (Panlobular):
  • Lower lobe predominance
  • Entire acinus involved
  • A1AT deficiency-related

Paraseptal:
  • Peripheral lobule
  • Adjacent to pleura
  • Spontaneous pneumothorax risk
-------------------------------------------------

**Diagnosis:**

*Diagnostic Criteria:*
Confirming COPD Diagnosis:
-------------------------------------------------
Required:
  Post-bronchodilator FEV1/FVC < 0.70

Symptomatic:
  Chronic cough, sputum, dyspnea

Exposure History:
  Smoking, occupational, biomass

Consider Alternative Diagnoses If:
  • Atypical presentation
  • Early age of onset
  • Minimal smoking history
  • Poor response to bronchodilators
-------------------------------------------------

*Comprehensive Assessment:*
GOLD ABCD Assessment Tool:
-------------------------------------------------
Symptom Assessment (mMRC or CAT):
  mMRC ≥2 or CAT ≥10 = Symptomatic

Exacerbation Risk:
  • ≥2 exacerbations/year OR
  • ≥1 hospitalization = High risk

Categories:
  A: Low symptoms, Low risk
  B: High symptoms, Low risk
  C: Low symptoms, High risk
  D: High symptoms, High risk
  → Guides initial treatment selection
-------------------------------------------------

**Management:**

*Pharmacologic Therapy:*
Bronchodilator Recommendations:
-------------------------------------------------
Group A:
  SABA or SAMA prn OR
  LAMA or LABA

Group B:
  LAMA or LABA (single therapy)
  Consider dual therapy if symptoms persist

Group C:
  LAMA (preferred over LABA)
  Consider LABA/LAMA if symptoms

Group D:
  LABA/LAMA (dual bronchodilation)
  Consider adding ICS if:
    • Exacerbations despite dual therapy
    • Blood eosinophils ≥300 cells/μL
    • Asthma-COPD overlap
-------------------------------------------------

*Inhaler Device Selection:*
- MDI (metered dose inhaler)
- DPI (dry powder inhaler)
- SMI (soft mist inhaler)
- Nebulizer (selected patients)
- Patient preference and ability to use

**Oxygen Therapy:**

Indications:
- PaO2 ≤55 mm Hg
- SpO2 ≤88%
- PaO2 56-59 mm Hg with:
  - Pulmonary hypertension
  - Cor pulmonale
  - Polycythemia

Target: SpO2 88-92% (avoid hypercapnia)

**Pulmonary Rehabilitation:**

Rehabilitation Components:
-------------------------------------------------
Exercise Training:
  • Endurance training (walking, cycling)
  • Strength training (upper/lower extremity)
  • Flexibility exercises

Education:
  • Disease understanding
  • Breathing techniques
  • Medication use
  • Action plan for exacerbations

Behavioral:
  • Smoking cessation
  • Nutritional counseling
  • Psychological support

Benefits:
  • Improved exercise capacity
  • Reduced dyspnea
  • Better quality of life
  • Reduced hospitalizations
-------------------------------------------------

**Comorbidities:**

Common COPD Comorbidities:
- Cardiovascular disease (ischemic heart disease, HF)
- Osteoporosis
- Depression/anxiety
- Lung cancer
- Diabetes
- Gastroesophageal reflux
- Muscle wasting

**Lung Volume Reduction:**

*Indications:*
- Upper-lobe predominant emphysema
- FEV1 15-45% predicted
- PaCO2 <55 mm Hg
- Significant hyperinflation

*Options:*
- Surgical LVRS
- Bronchoscopic lung volume reduction (valves)
- Lung transplantation (selected patients)`,
      keyTerms: [
        { term: 'A1AT', definition: 'Alpha-1 antitrypsin; protease inhibitor that protects lung tissue' },
        { term: 'mMRC', definition: 'Modified Medical Research Council dyspnea scale' },
        { term: 'CAT', definition: 'COPD Assessment Test; symptom questionnaire' },
        { term: 'GOLD', definition: 'Global Initiative for Chronic Obstructive Lung Disease' },
        { term: 'ICS', definition: 'Inhaled corticosteroid' },
        { term: 'hypercapnia', definition: 'Elevated carbon dioxide in blood' },
        { term: 'LVRS', definition: 'Lung volume reduction surgery' },
      ],
      clinicalNotes: 'COPD is underdiagnosed - consider spirometry in any adult with respiratory symptoms. ICS should not be used alone in COPD. A1AT deficiency screening recommended for all COPD patients.',
      patientCounselingPoints: [
        'Your COPD severity may not match your symptoms - regular assessment helps guide treatment.',
        'Triple therapy (LABA/LAMA/ICS) is reserved for patients with frequent exacerbations.',
        'The CAT questionnaire helps your doctor understand how COPD affects your daily life.',
        'Pulmonary rehabilitation is one of the most effective treatments for COPD.',
        'Weight management is important - both underweight and overweight affect outcomes.',
      ],
    },
    4: {
      level: 4,
      summary: 'COPD encompasses a heterogeneous group of lung diseases characterized by chronic inflammation, small airway disease, and parenchymal destruction, leading to progressive airflow limitation with systemic manifestations requiring comprehensive, phenotype-directed management strategies.',
      explanation: `**Advanced Pathophysiology:**

*Heterogeneity of COPD:*
COPD Phenotypes:
-------------------------------------------------
Airway-Predominant:
  • Chronic bronchitis symptoms
  • Mucus hypersecretion
  • Frequent exacerbations
  • Better prognosis than emphysema

Emphysema-Predominant:
  • Significant dyspnea
  • Low BMI, muscle wasting
  • Hyperinflation
  • Worse prognosis
  • May benefit from LVRS

Frequent Exacerbator:
  • ≥2 exacerbations/year
  • Inflammatory phenotype
  • Higher mortality
  • May benefit from ICS

ACO (Asthma-COPD Overlap):
  • Features of both diseases
  • Higher eosinophils
  • Better bronchodilator response
  • ICS more beneficial

Alpha-1 Antitrypsin Deficiency:
  • Younger age at onset
  • Basal emphysema predominance
  • Family history
  • Enzyme replacement therapy
-------------------------------------------------

*Molecular Pathogenesis:*
Inflammatory Mediators in COPD:
-------------------------------------------------
Proteases:
  • Neutrophil elastase
  • Matrix metalloproteinases (MMPs)
  • Cathepsins
  → Tissue destruction

Oxidative Stress:
  • Cigarette smoke free radicals
  • Reactive oxygen species (ROS)
  → Cellular damage, mucus hypersecretion

Apoptosis:
  • Epithelial and endothelial cell death
  → Emphysema development

Autoimmunity:
  • Autoantibodies against lung tissue
  • T-cell mediated damage
  → Progressive inflammation
-------------------------------------------------

**Advanced Management:**

*Triple Inhaled Therapy:*
LABA/LAMA/ICS Indications:
-------------------------------------------------
When to Consider Triple Therapy:
  • Persistent dyspnea on dual therapy
  • ≥1 moderate exacerbation on dual
  • ≥1 severe exacerbation on dual
  • Blood eosinophils ≥300 cells/μL

Evidence:
  • IMPACT trial: Triple vs LABA/LAMA
    - Reduced exacerbations (rate ratio 0.85)
    - Improved SGRQ scores
    - Increased pneumonia risk

  • KRONOS trial: Triple vs dual therapy
    - Improved lung function
    - Similar exacerbation reduction

ICS Considerations:
  Benefits:
    • Reduced exacerbations in high eosinophils
    • Possible mortality benefit in very severe
  Risks:
    • Pneumonia (1.5-2x increase)
    • Pneumonia severity
    • Oral candidiasis
    • Dysphonia
-------------------------------------------------

*Biomarker-Guided Therapy:*
Emerging Biomarkers:
-------------------------------------------------
Blood Eosinophils:
  • Predicts ICS response
  • ≥300: ICS benefit likely
  • <100: ICS unlikely to help

Fibrinogen:
  • Inflammatory marker
  • Predicts exacerbations
  • Predicts mortality

Periostin:
  • Type 2 inflammation marker
  • Investigational in COPD

Alpha-1 Antitrypsin:
  • Deficiency indicates replacement therapy
  • Screening recommended for all COPD
-------------------------------------------------

**Exacerbation Management:**

*Antibiotic Selection:*
Evidence-Based Antibiotic Choices:
-------------------------------------------------
Simple Exacerbation (no risk factors):
  • Amoxicillin/clavulanate
  • Doxycycline
  • Macrolide (if low resistance)

Complex Exacerbations:
  • Recent antibiotic or hospitalization
  • High risk of resistance (Pseudomonas)
  • Comorbidities
  Options:
    • Respiratory fluoroquinolone
    • Cephalosporin + macrolide
    • Piperacillin-tazobactam

Duration:
  • Standard: 5-7 days
  • Extended: Up to 14 days based on response
-------------------------------------------------

*Systemic Corticosteroids:*
- Prednisone 40 mg daily × 5 days
- Longer duration not more effective
- Higher doses not more effective
- Taper not required for short courses

**Surgical Interventions:**

*Lung Volume Reduction:*
LVRS Patient Selection:
-------------------------------------------------
Ideal Candidate:
  • FEV1 15-45% predicted
  • Upper lobe emphysema
  • Low exercise capacity
  • Heterogeneous emphysema on CT
  • PaCO2 <55 mm Hg
  • Not frail

Benefits:
  • Improved survival in selected
  • Increased exercise capacity
  • Improved quality of life

Bronchoscopic Options:
  • Endobronchial valves (Zephyr)
  • Lung coils
  • Vaping
  • Similar benefits, less invasive
-------------------------------------------------

**Systemic Manifestations:**

*Skeletal Muscle Dysfunction:*
COPD Myopathy:
-------------------------------------------------
Pathogenesis:
  • Systemic inflammation
  • Oxidative stress
  • Corticosteroid use
  • Disuse atrophy
  • Malnutrition

Clinical Impact:
  • Exercise intolerance
  • Reduced quality of life
  • Worse prognosis

Management:
  • Pulmonary rehabilitation
  • Nutritional support
  • Adequate protein intake
  • Resistance training
  • Minimize systemic steroids
-------------------------------------------------

*Cachexia vs Obesity:*
- Cachexia: <20% body weight loss, poor prognosis
- Obesity: COPD obesity paradox - overweight patients may live longer

**Comprehensive Care:**

*Palliative Care Integration:*
- Dyspnea management
- Advance care planning
- Goals of care discussions
- Psychosocial support
- Hospice referral for end-stage

*Transitional Care:*
- Exacerbation follow-up within 1-2 weeks
- Medication reconciliation
- Pulmonary rehabilitation referral
- Home oxygen assessment
- Action plan review`,
      keyTerms: [
        { term: 'SGRQ', definition: 'St. George\'s Respiratory Questionnaire; COPD quality of life measure' },
        { term: 'ACO', definition: 'Asthma-COPD Overlap; patients with features of both diseases' },
        { term: 'blood eosinophils', definition: 'Biomarker predicting ICS response in COPD' },
        { term: 'cachexia', definition: 'Severe weight loss and muscle wasting' },
        { term: 'obesity paradox', definition: 'Observation that overweight COPD patients have better survival' },
      ],
      clinicalNotes: 'The IMPACT trial established triple therapy benefits in exacerbation reduction. Blood eosinophils help guide ICS use. Early palliative care integration improves quality of life.',
      patientCounselingPoints: [
        'Your COPD may be different from others - treatment is personalized to your specific type.',
        'Triple therapy may be recommended if you continue to have exacerbations on dual therapy.',
        'Pneumonia risk increases with ICS - report any fever or worsening breathing.',
        'Muscle weakness is common in COPD - pulmonary rehabilitation can help rebuild strength.',
        'Advance care planning should be discussed early, even if you feel stable.',
      ],
    },
    5: {
      level: 5,
      summary: 'COPD represents a complex, heterogeneous syndrome characterized by persistent airflow limitation resulting from interactions between genetic susceptibility, environmental exposures, and aging, with distinct molecular phenotypes requiring precision medicine approaches to optimize outcomes.',
      explanation: `**Emerging Concepts:**

*COPD Endotypes:*
Molecular Endotypes (Research Stage):
--------------------------------------------------------
Inflammatory Endotypes:
  • Neutrophilic (↑ IL-8, LTB4)
    - Mucus hypersecretion
    - Frequent exacerbations
    - May respond to CXCR2 antagonists

  • Eosinophilic (↑ IL-5, IL-13)
    - ACO overlap
    - ICS responsiveness
    - May respond to biologics

  • Pauci-inflammatory
    - Minimal sputum inflammation
    - Alternative diagnoses likely

Clinical Endotypes:
  • Frequent exacerbator phenotype
  • Systemic inflammation phenotype
  • Comorbidities phenotype
  • Rapid decliner phenotype
--------------------------------------------------------

**Precision Therapeutics:**

*Biologics in COPD:*
Investigational Biologic Agents:
--------------------------------------------------------
Anti-IL-5 (mepolizumab, benralizumab):
  • Targeting eosinophilic COPD
  • Mixed results in trials
  • Possible benefit in ACO

Anti-IL-4R (dupilumab):
  • Type 2 inflammation
  • Ongoing trials

Anti-IL-1β (canakinumab):
  • Systemic inflammation
  • Negative cardiovascular trials

Anti-CXCR2:
  • Neutrophil chemotaxis
  • Reduced exacerbations in trials
--------------------------------------------------------

*Novel Bronchodilators:*
\`\`\
Next-Generation Bronchodilators:
--------------------------------------------------------
Ultra-LABAs:
  • Once-daily dosing
  • Faster onset
  • Longer duration (24-36 hours)

Ultra-LAMAs:
  • Glycopyrronium (already available)
  • Revefenacin (nebulized, once-daily)

Triple Fixed-Dose Combinations:
  • LABA/LAMA/ICS single inhaler
  • Improved adherence
  • Multiple options now available

Bronchodilator Reversal:
  • New approaches to airway remodeling
--------------------------------------------------------

**Lung Regeneration:**

*Stem Cell Approaches:*
Regenerative Medicine Strategies:
--------------------------------------------------------
Endogenous Repair:
  • Retinoic acid (animal studies only)
  • Growth factors
  • Mesenchymal stem cells
    - Modulate inflammation
    - Reduce emphysema (animal)
    - Early human trials

Exogenous Stem Cells:
  • Bone marrow MSCs
  • Adipose-derived stem cells
  • Induced pluripotent stem cells
  → Clinical trials ongoing, not yet proven
--------------------------------------------------------

**Advanced Diagnostics:**

*CT-Based Phenotyping:*
Quantitative CT Analysis:
--------------------------------------------------------
Airway Wall Thickness:
  • Pi10 (square root of wall thickness)
  • Airway-dominant disease
  • Predicts exacerbations

Emphysema Quantification:
  • Low attenuation areas
  • % emphysema at -950 HU
  • Distribution pattern
  • Predicts LVRS response

Air Trapping:
  • Expiratory CT
  • Small airway disease marker

Pulmonary Vascular:
  • Pulmonary artery/aorta ratio
  • Predicts pulmonary hypertension
  • Mortality risk
--------------------------------------------------------

*Exhaled Breath Analysis:*
- Volatile organic compounds (VOCs)
- FeNO (fractional exhaled NO)
- Breath condensate biomarkers
- Non-invasive inflammation monitoring

**Systems Biology:**

*Multi-Omics Approaches:*
Precision COPD Research:
--------------------------------------------------------
Genomics:
  • Multiple genetic loci identified
  • FAM13A, HHIP, CHRNA3/5
  • Polygenic risk scores

Proteomics:
  • Blood protein signatures
  • Predicts progression
  • Phenotype identification

Metabolomics:
  • Metabolic profiles
  • Biomarker discovery

Microbiomics:
  • Lung microbiome changes
  • Gut-lung axis
  • Dysbiosis in exacerbations
--------------------------------------------------------

**Artificial Intelligence:**

*Machine Learning Applications:*
AI in COPD Management:
--------------------------------------------------------
Risk Prediction:
  • Exacerbation prediction
  • Mortality risk stratification
  • Hospital readmission prediction

Imaging Analysis:
  • Automated CT quantification
  • Pattern recognition
  • Change detection over time

Exacerbation Detection:
  • Wearable sensors
  • Home spirometry + AI
  • Early intervention

Personalized Treatment:
  • Phenotype identification
  • Treatment response prediction
  • Optimal inhaler selection
--------------------------------------------------------

**Future Directions:**

*Gene Therapy:*
- A1AT gene therapy (investigational)
- Anti-protease enhancement
- Anti-inflammatory gene modulation

*Anti-Fibrotic Approaches:*
- Small airway fibrosis
- Pirfenidone, nintedanib (investigational)

*Precision Prevention:*
- Genetic risk stratification
- Biomarker screening for at-risk
- Personalized smoking cessation strategies`,
      keyTerms: [
        { term: 'endotype', definition: 'Disease subtype defined by distinct biological mechanisms' },
        { term: 'phenotype', definition: 'Observable characteristics of a disease' },
        { term: 'CXCR2', definition: 'Chemokine receptor; target for neutrophilic inflammation' },
        { term: 'quantitative CT', definition: 'Computerized measurement of lung abnormalities' },
        { term: 'microbiome', definition: 'Community of microorganisms in a particular environment' },
      ],
      clinicalNotes: 'COPD endotypes guide precision medicine approaches. Biologics have shown limited success except in eosinophilic phenotype. AI is transforming risk prediction and exacerbation detection.',
      patientCounselingPoints: [
        'Research into different COPD types may lead to more personalized treatments.',
        'Clinical trials are investigating new treatments - ask your doctor if you are eligible.',
        'Wearable technology may soon help detect exacerbations earlier.',
        'Your COPD is unique - treatment is becoming more personalized.',
        'Advances in regenerative medicine may offer new treatments in the future.',
      ],
    },
  },

  media: [
    {
      id: 'copd-lungs-diagram',
      type: 'diagram',
      filename: 'copd-healthy-vs-diseased-lung.svg',
      title: 'Healthy Lung vs COPD',
      description: 'Comparison of healthy lung and COPD-affected lung',
    },
    {
      id: 'copd-spirometry',
      type: 'diagram',
      filename: 'copd-spirometry-curve.svg',
      title: 'Spirometry Flow-Volume Loop in COPD',
      description: 'Typical spirometry pattern in COPD',
    },
  ],

  citations: [
    {
      id: 'gold-2024',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease',
      source: 'GOLD Report 2024',
    },
    {
      id: 'copd-prevalence',
      type: 'article',
      title: 'Burden of COPD',
      source: 'Lancet Respiratory Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-chronic-bronchitis', targetType: 'condition', relationship: 'child', label: 'Chronic Bronchitis' },
    { targetId: 'chronic-disease-emphysema', targetType: 'condition', relationship: 'child', label: 'Emphysema' },
    { targetId: 'chronic-disease-copd-exacerbations', targetType: 'condition', relationship: 'related', label: 'COPD Exacerbations' },
  ],

  tags: {
    systems: ['respiratory'],
    structures: ['lungs', 'bronchi', 'alveoli'],
    topics: ['COPD', 'respiratory', 'smoking', 'lung disease'],
    keywords: ['COPD', 'chronic bronchitis', 'emphysema', 'spirometry', 'airflow limitation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
