/**
 * COPD - Respiratory Pathology
 *
 * Comprehensive coverage of chronic obstructive pulmonary disease including
 * pathophysiology, clinical features, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const copdContent: EducationalContent = {
  id: 'respiratory-copd',
  type: 'condition',
  name: 'COPD',
  alternateNames: ['Chronic Obstructive Pulmonary Disease', 'Chronic Bronchitis', 'Emphysema', 'Chronic Airflow Limitation'],

  levels: {
    1: {
      level: 1,
      summary: 'COPD is a lung disease that makes it hard to breathe because the airways are damaged and blocked, usually from smoking cigarettes.',
      explanation: `## What Is COPD?

COPD stands for Chronic Obstructive Pulmonary Disease. It is a lung condition that makes it hard to breathe and gets worse over time.

### What Happens in COPD

**Two Main Problems:**

**Chronic Bronchitis:**
- Airways are swollen and irritated
- Too much mucus is made
- Mucus blocks the airways
- Causes coughing and phlegm

**Emphysema:**
- Tiny air sacs (alveoli) are damaged
- Air gets trapped in the lungs
- Hard to push air out
- Less oxygen gets into blood

### Main Cause

**Smoking:**
- Cigarette smoke damages the lungs
- Years of smoking causes permanent harm
- The more you smoke, the higher the risk
- Quitting smoking helps at any age

**Other Causes:**
- Secondhand smoke
- Air pollution
- Dust and chemicals at work
- Rare genetic condition (alpha-1 antitrypsin deficiency)

### Signs and Symptoms

**What You Might Notice:**
- Shortness of breath (especially during activities)
- Chronic cough that does not go away
- Mucus that you cough up
- Wheezing
- Feeling tired
- Chest tightness

**As It Gets Worse:**
- Breathing problems during simple tasks
- Frequent lung infections
- Swollen ankles
- Weight loss
- Less energy

### Treatment

**Quitting Smoking:**
- Most important step
- Stops further damage
- Help available (patches, counseling)

**Medications:**
- Inhalers to open airways
- Medicine to reduce swelling
- Antibiotics for infections

**Oxygen Therapy:**
- For people with low oxygen levels
- Helps you feel better
- Worn at home or during activity

**Pulmonary Rehabilitation:**
- Exercise programs
- Breathing techniques
- Learning about your condition

### Living with COPD

**What You Can Do:**
- Take medicines as prescribed
- Stay active with approved exercises
- Avoid smoke and pollution
- Get flu and pneumonia vaccines
- Eat healthy foods
- Report symptoms to your doctor`,
      keyTerms: [
        { term: 'chronic', definition: 'A condition that lasts a long time and does not go away' },
        { term: 'obstructive', definition: 'Something that blocks or gets in the way' },
        { term: 'bronchitis', definition: 'Swelling and irritation of the airways with too much mucus' },
        { term: 'emphysema', definition: 'Damage to the tiny air sacs in the lungs' },
        { term: 'mucus', definition: 'Thick, sticky fluid that your airways make' },
      ],
      analogies: [
        'In emphysema, the air sacs are like balloons that have lost their stretchiness - they cannot push air out properly.',
        'Chronic bronchitis is like having a clogged drain - the mucus blocks the airways like gunk blocks a pipe.',
        'Breathing with COPD is like trying to blow through a straw that keeps getting narrower.',
      ],
      examples: [
        'Someone with COPD might need to rest after walking just a short distance.',
        'A person with chronic bronchitis might have a cough that has lasted for months or years.',
      ],
      patientCounselingPoints: [
        'Quitting smoking is the most important thing you can do for your lungs',
        'Keep taking your medicines even when you feel okay',
        'Stay as active as you can - gentle exercise helps your lungs',
        'Get your flu shot every year to prevent lung infections',
      ],
    },
    2: {
      level: 2,
      summary: 'COPD is a chronic, progressive lung disease characterized by persistent airflow limitation due to chronic bronchitis and/or emphysema, primarily caused by tobacco smoke exposure.',
      explanation: `## Understanding COPD

### Definition

COPD is a common, preventable, and treatable disease characterized by persistent respiratory symptoms and airflow limitation due to airway and/or alveolar abnormalities caused by exposure to noxious particles or gases.

### Pathophysiology

**Chronic Bronchitis:**
- Inflammation of bronchial tubes
- Mucus gland hypertrophy
- Goblet cell hyperplasia
- Increased mucus production
- Impaired mucociliary clearance
- Clinical definition: cough with sputum ≥3 months/year for 2 years

**Emphysema:**
- Destruction of alveolar walls
- Loss of elastic recoil
- Air trapping
- Enlargement of airspaces
- Pathological definition (not clinical)

**Combined Effects:**
- Airflow obstruction
- Gas exchange impairment
- Respiratory muscle dysfunction
- Systemic effects

### Risk Factors

**Primary:**
- Tobacco smoking (80-90% of cases)
- Pack-years correlation with risk

**Secondary:**
- Occupational exposures
- Indoor air pollution (biomass fuels)
- Outdoor air pollution
- Childhood respiratory infections
- Genetic factors (alpha-1 antitrypsin deficiency)

### Clinical Presentation

**Symptoms:**
- Progressive dyspnea
- Chronic cough
- Sputum production
- Wheezing
- Chest tightness

**Physical Examination:**
- Barrel chest
- Pursed lip breathing
- Use of accessory muscles
- Prolonged expiration
- Decreased breath sounds
- Wheezes and rhonchi

### Diagnosis

**Spirometry (Required):**
- Post-bronchodilator FEV1/FVC <0.70
- Confirms airflow limitation
- FEV1 determines severity

**Severity Classification (GOLD):**
- GOLD 1 (Mild): FEV1 ≥80% predicted
- GOLD 2 (Moderate): 50% ≤ FEV1 <80%
- GOLD 3 (Severe): 30% ≤ FEV1 <50%
- GOLD 4 (Very Severe): FEV1 <30%

**Additional Tests:**
- Chest X-ray: hyperinflation, flat diaphragms
- Arterial blood gas: in severe disease
- Alpha-1 antitrypsin level: in young patients

### ABCD Assessment Tool

**Based on:**
- Symptoms (CAT or mMRC)
- Exacerbation history

**Groups:**
- A: Low symptoms, low exacerbation risk
- B: High symptoms, low exacerbation risk
- E: Any exacerbation history (≥2 moderate or ≥1 hospitalization)

### Treatment Principles

**Non-Pharmacological:**
- Smoking cessation (essential)
- Pulmonary rehabilitation
- Vaccinations (influenza, pneumococcal, COVID-19)
- Physical activity
- Nutrition

**Pharmacological:**
- Bronchodilators: SABA, SAMA, LABA, LAMA
- Inhaled corticosteroids (selected patients)
- Triple therapy (ICS + LABA + LAMA)
- Roflumilast (PDE4 inhibitor)

**Oxygen Therapy:**
- For chronic hypoxemia
- PaO2 ≤55 mmHg or SaO2 ≤88%
- Improves survival

### Exacerbations

**Definition:**
- Acute worsening of respiratory symptoms
- Requires additional therapy

**Triggers:**
- Respiratory infections (viral most common)
- Air pollution
- Unknown in many cases

**Treatment:**
- Bronchodilators
- Systemic corticosteroids
- Antibiotics (if indicated)
- Supplemental oxygen
- Non-invasive ventilation if needed`,
      keyTerms: [
        { term: 'airflow limitation', definition: 'Reduced ability to move air in and out of the lungs' },
        { term: 'FEV1', definition: 'Forced expiratory volume in 1 second; key measure of airflow' },
        { term: 'exacerbation', definition: 'A sudden worsening of COPD symptoms' },
        { term: 'pack-years', definition: 'Number of packs per day times years smoked; measures smoking exposure' },
        { term: 'GOLD', definition: 'Global Initiative for Chronic Obstructive Lung Disease; international COPD guidelines' },
      ],
      analogies: [
        'Emphysema is like a sponge losing its holes - the smaller spaces merge into bigger ones and lose their function.',
        'The FEV1/FVC ratio is like a race - in COPD, the lungs cannot empty quickly enough.',
        'An exacerbation is like a fire - quick action prevents it from getting out of control.',
      ],
      examples: [
        'A 60-year-old with a 40 pack-year smoking history presenting with progressive dyspnea and chronic cough.',
        'A patient with FEV1 of 45% predicted has GOLD stage 3 (severe) COPD.',
      ],
    },
    3: {
      level: 3,
      summary: 'COPD pathogenesis involves protease-antiprotease imbalance, oxidative stress, and chronic inflammation leading to small airway disease and parenchymal destruction with distinct clinical phenotypes.',
      explanation: `## COPD Pathobiology

### Pathogenic Mechanisms

**Protease-Antiprotease Imbalance:**
- Neutrophil elastase
- Matrix metalloproteinases (MMPs)
- Cathepsins
- Alpha-1 antitrypsin deficiency as model
- Elastin and collagen degradation

**Oxidative Stress:**
- Cigarette smoke oxidants
- Reactive oxygen species (ROS)
- Inflammatory cell production
- Reduced antioxidant capacity
- DNA damage and cell senescence

**Chronic Inflammation:**
- Neutrophils predominant
- CD8+ T lymphocytes
- Macrophages (polarized)
- Inflammatory mediators
- Systemic inflammation

### Small Airway Disease

**Pathology:**
- Bronchiolitis
- Peribronchiolar fibrosis
- Goblet cell metaplasia
- Smooth muscle hypertrophy
- Luminal mucus plugging

**Physiological Impact:**
- Increased peripheral airway resistance
- Air trapping
- Early expiratory flow limitation
- FEF25-75 reduction

### Emphysema Classification

**Centriacinar (Centrilobular):**
- Affects respiratory bronchioles
- Upper lobe predominant
- Smoking-related
- Most common type

**Panacinar (Panlobular):**
- Involves entire acinus
- Lower lobe predominant
- Alpha-1 antitrypsin deficiency
- Also in severe smoking-related disease

**Paraseptal (Distal Acinar):**
- Subpleural distribution
- Associated with bullae
- Spontaneous pneumothorax risk
- Often in young adults

### Clinical Phenotypes

**Exacerbator Phenotype:**
- ≥2 moderate or ≥1 severe exacerbation/year
- Associated with worse outcomes
- May benefit from ICS
- Consider macrolides, roflumilast

**Chronic Bronchitis Phenotype:**
- Prominent cough and sputum
- More frequent exacerbations
- May respond to mucolytics
- Roflumilast consideration

**Emphysema-Predominant:**
- Severe dyspnea
- Hyperinflation
- Low BMI
- May benefit from lung volume reduction

**Asthma-COPD Overlap:**
- Features of both conditions
- Eosinophilic inflammation
- Better ICS response
- Variable obstruction

### Advanced Diagnostics

**CT Imaging:**
- Emphysema quantification (-950 HU threshold)
- Air trapping on expiratory scan
- Airway wall thickness
- Phenotype classification

**Body Plethysmography:**
- Lung volumes (TLC, RV, FRC)
- Air trapping (elevated RV/TLC)
- Hyperinflation quantification

**DLCO:**
- Reduced in emphysema
- Normal in bronchitis-predominant
- Correlates with emphysema severity

**Cardiopulmonary Exercise Testing:**
- Ventilatory limitation
- Dynamic hyperinflation
- Cardiovascular comorbidity
- Prognosis assessment

### Pharmacotherapy

**Bronchodilators:**
- LAMAs: tiotropium, umeclidinium, glycopyrronium
- LABAs: formoterol, salmeterol, indacaterol, vilanterol, olodaterol
- LAMA/LABA combinations

**ICS Indications:**
- Eosinophils ≥300 cells/μL
- History of asthma
- Frequent exacerbations with eosinophilia
- Not first-line for most patients

**Triple Therapy:**
- ICS + LABA + LAMA
- For high-risk exacerbators
- Single inhaler options available

**Additional Therapies:**
- Roflumilast: PDE4 inhibitor for frequent exacerbations, chronic bronchitis
- Azithromycin: exacerbation reduction (non-smokers)
- N-acetylcysteine: mucolytic, some exacerbation reduction

### Prognosis

**BODE Index:**
- BMI
- Obstruction (FEV1)
- Dyspnea (mMRC)
- Exercise capacity (6MWD)
- Predicts mortality

**Other Predictors:**
- Exacerbation frequency
- Comorbidities
- Lung function decline rate
- Quality of life`,
      keyTerms: [
        { term: 'protease-antiprotease imbalance', definition: 'Excess of enzymes that break down lung tissue relative to protective inhibitors' },
        { term: 'centriacinar emphysema', definition: 'Emphysema affecting the center of the lung acinus, upper-lobe predominant, smoking-related' },
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping during exercise leading to increased operating lung volumes' },
        { term: 'BODE index', definition: 'Multidimensional prognostic index using BMI, obstruction, dyspnea, and exercise capacity' },
        { term: 'phenotype', definition: 'Observable clinical characteristics defining subgroups with different outcomes and treatment responses' },
      ],
      clinicalNotes: 'Blood eosinophils help guide ICS use: counts ≥300 cells/μL support ICS, while counts <100 suggest minimal benefit. Eosinophils 100-299 represent a gray zone requiring clinical judgment.',
    },
    4: {
      level: 4,
      summary: 'Advanced COPD management encompasses molecular phenotyping, lung volume reduction strategies, transplant evaluation, and integration of systemic comorbidities in a multidisciplinary approach.',
      explanation: `## Advanced COPD Management

### Molecular Pathogenesis

**Epigenetic Modifications:**
- DNA methylation changes
- Histone modifications
- HDAC2 reduction (corticosteroid resistance)
- MicroRNA dysregulation

**Cellular Senescence:**
- Accelerated lung aging
- Telomere shortening
- Senescence-associated secretory phenotype (SASP)
- p16/p21 pathway activation

**Mitochondrial Dysfunction:**
- Impaired oxidative phosphorylation
- Increased ROS production
- Mitophagy defects
- Energy metabolism impairment

### Systemic Manifestations

**Cardiovascular:**
- Coronary artery disease
- Heart failure
- Atrial fibrillation
- Increased cardiovascular mortality

**Skeletal Muscle:**
- Myopathy
- Reduced oxidative capacity
- Type I to II fiber shift
- Cachexia pathogenesis

**Metabolic:**
- Diabetes risk
- Metabolic syndrome
- Osteoporosis
- Systemic inflammation links

**Neuropsychiatric:**
- Depression
- Anxiety
- Cognitive impairment
- Sleep disturbances

### Lung Volume Reduction

**Surgical Lung Volume Reduction (LVRS):**
- Upper lobe emphysema
- Low exercise capacity
- Heterogeneous disease
- NETT trial evidence

**Bronchoscopic Interventions:**
- Endobronchial valves
- Complete fissure required
- Coils
- Thermal vapor ablation

**Patient Selection:**
- CT analysis of emphysema distribution
- Fissure integrity assessment
- Physiological testing
- Exclusion criteria

### Lung Transplantation

**Indications:**
- BODE index 7-10
- FEV1 <20% with DLCO <20% or homogeneous emphysema
- History of hospitalization with hypercapnia
- Pulmonary hypertension

**Contraindications:**
- Active smoking
- Severe comorbidities
- Poor rehabilitation potential
- Psychosocial barriers

**Outcomes:**
- Median survival 5-6 years
- Quality of life improvement
- Single vs bilateral considerations

### Acute Exacerbation Management

**Severity Assessment:**
- Mild: increased symptoms, treated outpatient
- Moderate: requires systemic corticosteroids and/or antibiotics
- Severe: requires hospitalization or ED visit

**Hospital Management:**
- Controlled oxygen (target 88-92%)
- Bronchodilators (nebulized or MDI)
- Systemic corticosteroids (prednisone 40mg x 5 days)
- Antibiotics if indicated
- VTE prophylaxis

**Non-Invasive Ventilation:**
- Respiratory acidosis (pH <7.35)
- Reduces intubation
- Reduces mortality
- First-line for acute respiratory failure

**Invasive Ventilation:**
- Failed NIV
- Altered mental status
- Aspiration risk
- Severe acidosis

### Palliative Care Integration

**Symptom Management:**
- Dyspnea (opioids, fans, positioning)
- Anxiety and depression
- Fatigue
- Sleep disturbance

**Advance Care Planning:**
- Prognosis discussions
- Goals of care
- DNR/DNI discussions
- Hospice referral timing

**End-of-Life Care:**
- Hospice eligibility criteria
- Comfort measures
- Family support
- Bereavement care

### Emerging Therapies

**Anti-Inflammatory:**
- PDE4 inhibitors (ensifentrine)
- Anti-IL-5 (eosinophilic COPD)
- P38 MAPK inhibitors
- Anti-TSLP

**Disease-Modifying:**
- Retinoids (alveolar regeneration)
- Anti-aging interventions
- Stem cell therapies
- Lung regeneration research

**Precision Medicine:**
- Biomarker-guided therapy
- Treatable traits approach
- Phenotype-targeted treatment
- Genetic testing integration

### Quality Improvement

**Care Bundles:**
- Smoking cessation
- Inhaler technique
- Pulmonary rehabilitation referral
- Vaccination
- Action plans

**Reducing Readmissions:**
- Transition care
- Early follow-up
- Self-management education
- Telehealth monitoring`,
      keyTerms: [
        { term: 'HDAC2', definition: 'Histone deacetylase 2; enzyme reduced in COPD contributing to corticosteroid resistance' },
        { term: 'endobronchial valves', definition: 'One-way valves placed bronchoscopically to achieve lung volume reduction' },
        { term: 'NETT trial', definition: 'National Emphysema Treatment Trial; landmark study of lung volume reduction surgery' },
        { term: 'treatable traits', definition: 'Identifiable characteristics that can be targeted with specific interventions' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory state of senescent cells' },
      ],
      clinicalNotes: 'For bronchoscopic lung volume reduction with valves, complete fissure integrity (assessed by CT) is essential for success. Patients with collateral ventilation across fissures will not respond to valve therapy.',
    },
    5: {
      level: 5,
      summary: 'Expert COPD management integrates cutting-edge research on disease mechanisms, precision phenotyping, novel therapeutics, and health systems approaches to optimize outcomes across the disease spectrum.',
      explanation: `## Expert COPD Management

### Advanced Pathobiology

**Inflammasome Activation:**
- NLRP3 inflammasome
- IL-1β and IL-18 release
- Pyroptosis
- Therapeutic targeting potential

**Autophagy Dysregulation:**
- Impaired autophagic clearance
- Ciliophagy defects
- Mitophagy failure
- Aggregate accumulation

**Microbiome Alterations:**
- Lung microbiome changes
- Haemophilus and Moraxella predominance
- Exacerbation associations
- Potential therapeutic target

### Single-Cell Insights

**Epithelial Remodeling:**
- Basal cell dysfunction
- Goblet cell metaplasia pathways
- Club cell reduction
- Neuroendocrine cell changes

**Immune Cell Landscape:**
- Resident macrophage dysfunction
- T cell exhaustion
- Regulatory T cell defects
- ILC responses

### Precision Phenotyping

**Biomarker Clusters:**
- Blood eosinophils
- Fibrinogen
- CRP
- sRAGE
- Composite scores

**Imaging Phenotypes:**
- Quantitative CT analysis
- Parametric response mapping
- Machine learning classification
- Functional-structural correlation

**Molecular Endotypes:**
- Transcriptomic signatures
- Metabolomic profiles
- Proteomic patterns
- Multi-omic integration

### Novel Therapeutics

**Biologic Therapies:**
- Benralizumab (eosinophilic COPD)
- Dupilumab trials
- Anti-TSLP
- IL-33 pathway inhibitors

**Small Molecules:**
- Ensifentrine (dual PDE3/4)
- CXCR2 antagonists
- p38 MAPK inhibitors
- JAK inhibitors

**Regenerative Approaches:**
- Mesenchymal stem cells
- Lung progenitor cells
- Growth factor therapy
- Scaffold-based regeneration

### Bronchoscopic Interventions

**Endobronchial Valves:**
- Zephyr and Spiration systems
- Fissure integrity assessment
- Chartis collateral ventilation measurement
- Target lobe selection

**Lung Volume Reduction Coils:**
- Heterogeneous and homogeneous emphysema
- Fissure-independent
- Mechanical effects
- Patient selection refinement

**Thermal Vapor Ablation:**
- Targeted upper lobe treatment
- Inflammatory response
- Long-term outcomes emerging

**Targeted Lung Denervation:**
- Parasympathetic nerve ablation
- Bronchodilation mechanism
- Ongoing clinical trials

### Health Systems Perspectives

**Implementation Science:**
- Guidelines to practice gaps
- Barriers to optimal care
- Quality metrics
- Value-based care

**Telehealth Integration:**
- Remote monitoring
- Exacerbation prediction
- Self-management support
- Pulmonary rehabilitation

**Global Health:**
- Biomass fuel exposure
- Resource-limited settings
- Essential medicines
- Diagnostic access

### Research Frontiers

**Prevention:**
- Early detection strategies
- Smoking cessation optimization
- Environmental interventions
- High-risk screening

**Early Disease:**
- Pre-COPD stages
- Preserved ratio impaired spirometry (PRISm)
- CT abnormalities without spirometric COPD
- Intervention timing

**Disease Modification:**
- Halting progression
- Regeneration potential
- Aging pathway intervention
- Senolytic therapy

### Complex Care Models

**Integrated Care:**
- Multidisciplinary teams
- Care coordination
- Specialty integration
- Primary care partnerships

**End-of-Life:**
- Prognostic models
- Goals of care discussions
- Hospice transition
- Caregiver support

**Survivorship:**
- Lung cancer surveillance
- Cardiovascular optimization
- Function maintenance
- Quality of life

### Clinical Trial Landscape

**Endpoints Evolution:**
- Exacerbation definition standardization
- Patient-reported outcomes
- Biomarker endpoints
- Composite measures

**Adaptive Designs:**
- Biomarker enrichment
- Platform trials
- Basket and umbrella trials
- Real-world evidence integration

**Regulatory Pathways:**
- Disease-modifying claim
- Accelerated approval
- Post-marketing requirements
- Global harmonization`,
      keyTerms: [
        { term: 'NLRP3 inflammasome', definition: 'Multi-protein complex that activates inflammatory responses through IL-1β and IL-18' },
        { term: 'PRISm', definition: 'Preserved Ratio Impaired Spirometry; low FEV1 with normal FEV1/FVC ratio, representing a pre-COPD state' },
        { term: 'parametric response mapping', definition: 'CT technique identifying regional emphysema, air trapping, and small airway disease' },
        { term: 'senolytic therapy', definition: 'Drugs that selectively eliminate senescent cells to counteract aging-related pathology' },
        { term: 'Chartis', definition: 'System for measuring collateral ventilation to predict endobronchial valve response' },
      ],
      clinicalNotes: `Key clinical insights in advanced COPD management:

1. **Triple therapy:** IMPACT and ETHOS trials showed mortality benefit with ICS-LABA-LAMA in appropriate patients, particularly those with eosinophils ≥100 cells/μL.

2. **Eosinophil-guided therapy:** Blood eosinophils ≥300 predict ICS benefit for exacerbation reduction; counts <100 suggest ICS withdrawal may be safe.

3. **Exacerbation phenotype:** Previous exacerbation history is the strongest predictor of future exacerbations, independent of FEV1.

4. **Bronchoscopic LVR:** Endobronchial valves can achieve meaningful improvements (FEV1 increase >100 mL) in carefully selected patients with heterogeneous emphysema and complete fissures.

5. **Azithromycin:** Reduces exacerbation frequency by about 30% in selected patients but increases hearing impairment risk and has unclear effects on antimicrobial resistance.

6. **Palliative care:** Early integration improves quality of life and may reduce healthcare utilization without hastening death.

7. **Cardiovascular risk:** COPD patients have 2-3 fold increased cardiovascular mortality; aggressive risk factor management is essential.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'gold-2024',
      type: 'website',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease'],
      source: 'GOLD',
      url: 'https://goldcopd.org',
    },
    {
      id: 'nejm-copd-review',
      type: 'article',
      title: 'Chronic Obstructive Pulmonary Disease',
      authors: ['Vogelmeier CF', 'Criner GJ', 'Martinez FJ', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'respiratory-lung-function', targetType: 'concept', relationship: 'related', label: 'Lung Function' },
    { targetId: 'respiratory-emphysema', targetType: 'condition', relationship: 'related', label: 'Emphysema' },
    { targetId: 'addiction-smoking-cessation', targetType: 'concept', relationship: 'related', label: 'Smoking Cessation' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'chronic-disease', 'smoking'],
    keywords: ['COPD', 'emphysema', 'chronic bronchitis', 'smoking', 'exacerbation', 'spirometry'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default copdContent;
