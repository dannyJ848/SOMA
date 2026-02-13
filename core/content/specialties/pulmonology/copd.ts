/**
 * COPD - Comprehensive Educational Content
 *
 * Covers chronic obstructive pulmonary disease including chronic bronchitis
 * and emphysema phenotypes, pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const copd: EducationalContent = {
  id: 'condition-copd',
  type: 'condition',
  name: 'Chronic Obstructive Pulmonary Disease (COPD)',
  alternateNames: ['COPD', 'Chronic Bronchitis', 'Emphysema', 'Chronic Airflow Limitation'],

  levels: {
    1: {
      level: 1,
      summary: 'COPD is a lung disease that makes it hard to breathe because the airways and air sacs in your lungs are damaged, usually from smoking.',
      explanation: `Imagine your lungs are like a tree. The trunk splits into branches (airways), and at the end of the smallest branches are tiny balloons (air sacs) where oxygen enters your blood.

**In COPD, two things go wrong:**

1. **Chronic Bronchitis (the "Blue Bloater"):**
   - The airways get swollen and make lots of sticky mucus
   - It's like having a constant chest cold
   - People cough a lot and bring up phlegm
   - The mucus blocks airflow

2. **Emphysema (the "Pink Puffer"):**
   - The tiny air sacs at the end of airways get destroyed
   - It's like balloons that pop and merge into bigger, floppy bags
   - These damaged sacs can't get oxygen into your blood well
   - Air gets trapped in the lungs

**What causes COPD?**
- **Smoking** is the #1 cause (about 85-90% of cases)
- Breathing in pollution, dust, or chemicals for many years
- Rarely, it runs in families

**Symptoms:**
- Feeling short of breath, especially when active
- Coughing a lot, often with mucus
- Wheezing
- Feeling tired
- Getting chest colds more often

**Treatment:**
- The most important thing is to **STOP SMOKING**
- Inhalers to help open airways and reduce swelling
- Oxygen therapy if oxygen levels are very low
- Exercise programs to build strength
- Vaccines to prevent lung infections`,
      keyTerms: [
        { term: 'chronic', definition: 'Something that lasts a long time, usually forever' },
        { term: 'airways', definition: 'The tubes that carry air through your lungs' },
        { term: 'air sacs', definition: 'Tiny balloon-like structures where oxygen enters your blood (also called alveoli)' },
        { term: 'phlegm', definition: 'Thick, sticky mucus that you cough up from your lungs' },
      ],
      analogies: [
        'Emphysema is like popping bubbles in bubble wrap - many small air sacs merge into fewer, larger, useless spaces.',
        'Chronic bronchitis is like a garden hose with gunk built up inside - less water (air) can flow through.',
        'Breathing with COPD is like trying to breathe through a narrow straw that keeps getting narrower.',
      ],
      examples: [
        'A 65-year-old who smoked for 40 years and now gets short of breath walking up stairs.',
        'A factory worker who breathed in dust for decades and now coughs every morning.',
      ],
    },
    2: {
      level: 2,
      summary: 'COPD is a progressive lung disease characterized by persistent airflow limitation caused by chronic inflammation of the airways and destruction of lung tissue, primarily from cigarette smoke.',
      explanation: `## What is COPD?

COPD is an umbrella term for two overlapping conditions:

### Chronic Bronchitis
**Definition:** Productive cough for at least 3 months per year for 2 consecutive years.

**What happens:**
- Airways become inflamed and swollen
- Mucus-producing cells multiply (goblet cell hyperplasia)
- Excess mucus blocks airflow
- Cilia (tiny hair-like cleaners) are damaged and can't clear mucus

**Classic presentation:** "Blue bloater"
- Overweight
- Bluish skin color (cyanosis) from low oxygen
- Productive cough with lots of sputum
- Frequent respiratory infections

### Emphysema
**What happens:**
- Tiny air sacs (alveoli) are destroyed
- Walls between alveoli break down
- Larger, less effective air spaces form
- Lungs lose their elastic recoil
- Air gets trapped, making exhaling difficult

**Classic presentation:** "Pink puffer"
- Thin
- Pink skin color (maintains oxygen by breathing fast)
- Pursed lip breathing
- Barrel-shaped chest from trapped air
- Little to no cough

### Risk Factors
- **Smoking** (most important - 15-20% of smokers develop COPD)
- Secondhand smoke
- Occupational dust and chemicals
- Air pollution
- Alpha-1 antitrypsin deficiency (genetic cause)
- Childhood respiratory infections

### Symptoms
- Progressive shortness of breath (dyspnea)
- Chronic cough
- Sputum production
- Wheezing
- Chest tightness
- Fatigue
- Frequent respiratory infections
- Weight loss (advanced disease)

### Diagnosis
- **Spirometry:** FEV1/FVC < 0.70 confirms airflow obstruction
- **FEV1:** Used to grade severity
- **Chest X-ray:** May show hyperinflation, flat diaphragm
- **Bronchodilator test:** Limited reversibility (unlike asthma)

### GOLD Classification (Severity)
| Stage | FEV1 (% predicted) |
|-------|-------------------|
| GOLD 1 (Mild) | ≥80% |
| GOLD 2 (Moderate) | 50-79% |
| GOLD 3 (Severe) | 30-49% |
| GOLD 4 (Very Severe) | <30% |

### Treatment Goals
1. Relieve symptoms
2. Improve exercise tolerance
3. Prevent exacerbations
4. Slow disease progression
5. Reduce mortality

### Treatment Options
- **Smoking cessation** (most important!)
- Bronchodilators (short and long-acting)
- Inhaled corticosteroids (for frequent exacerbations)
- Pulmonary rehabilitation
- Supplemental oxygen (if hypoxemic)
- Vaccines (flu, pneumonia, COVID-19)`,
      keyTerms: [
        { term: 'FEV1', definition: 'Forced Expiratory Volume in 1 second - how much air you can blow out in one second', pronunciation: 'F-E-V-one' },
        { term: 'FVC', definition: 'Forced Vital Capacity - the total amount of air you can blow out after a deep breath' },
        { term: 'goblet cells', definition: 'Cells in the airways that produce mucus' },
        { term: 'cyanosis', definition: 'Bluish color of the skin from low oxygen levels', pronunciation: 'sy-ah-NO-sis' },
        { term: 'exacerbation', definition: 'A flare-up when COPD symptoms suddenly get worse', pronunciation: 'ex-AS-er-BAY-shun' },
        { term: 'spirometry', definition: 'A breathing test that measures lung function', pronunciation: 'spy-ROM-eh-tree' },
      ],
      analogies: [
        'Emphysematous lungs are like an old sponge that has lost its springiness - it can\'t squeeze air out effectively.',
        'The loss of elastic recoil in emphysema is like an old rubber band that has lost its snap.',
      ],
    },
    3: {
      level: 3,
      summary: 'COPD is a heterogeneous, progressive respiratory syndrome characterized by persistent airflow limitation resulting from chronic inflammatory responses to noxious particles, with distinct chronic bronchitis and emphysema phenotypes that often coexist.',
      explanation: `## Pathophysiology

### Chronic Bronchitis
**Inflammatory cascade:**
1. Inhaled irritants (cigarette smoke) activate epithelial cells
2. Release of chemokines (IL-8) attracts neutrophils
3. Neutrophils release proteases and oxidants
4. Mucus gland hypertrophy (Reid index >50%)
5. Goblet cell hyperplasia extends to small airways
6. Squamous metaplasia of bronchial epithelium
7. Impaired mucociliary clearance
8. Chronic infection and inflammation

**Key changes:**
- Thickened airway walls
- Excess mucus production
- Ciliary dysfunction
- Small airway fibrosis

### Emphysema
**Protease-antiprotease imbalance:**
1. Cigarette smoke recruits inflammatory cells
2. Neutrophils and macrophages release proteases:
   - Neutrophil elastase
   - Matrix metalloproteinases (MMPs)
   - Cathepsins
3. These enzymes destroy elastin and collagen
4. Alpha-1 antitrypsin (antiprotease) is overwhelmed or deficient
5. Alveolar wall destruction ensues

**Oxidant-antioxidant imbalance:**
- Cigarette smoke contains oxidants
- Inflammatory cells produce reactive oxygen species
- Oxidants inactivate antiproteases
- Cellular damage and apoptosis

**Types of emphysema:**
| Type | Location | Association |
|------|----------|-------------|
| Centriacinar (Centrilobular) | Proximal acinus (respiratory bronchioles) | Smoking, upper lobe predominant |
| Panacinar (Panlobular) | Entire acinus uniformly | Alpha-1 antitrypsin deficiency, lower lobe |
| Paraseptal (Distal acinar) | Distal acinus, near pleura | Young adults, causes spontaneous pneumothorax |

### Clinical Consequences
**Air trapping and hyperinflation:**
- Loss of elastic recoil reduces expiratory driving pressure
- Small airways collapse during expiration (dynamic airway compression)
- Residual volume increases
- Diaphragm flattens, reducing efficiency

**Gas exchange abnormalities:**
- V/Q mismatch
- Emphysema: Increased dead space (ventilation without perfusion)
- Chronic bronchitis: Shunting (perfusion without ventilation)
- Hypoxemia ± hypercapnia

### Systemic Effects
COPD is not just a lung disease:
- Skeletal muscle dysfunction
- Cardiovascular disease (shared inflammation)
- Osteoporosis
- Depression
- Cachexia
- Anemia of chronic disease

## Diagnosis

### Spirometry
- **Diagnostic criterion:** Post-bronchodilator FEV1/FVC < 0.70
- FEV1 alone grades severity but doesn't predict symptoms
- Bronchodilator response: <12% or <200 mL improvement

### Additional Testing
- **Body plethysmography:** Increased TLC, RV, RV/TLC ratio
- **DLCO:** Reduced in emphysema (alveolar destruction)
- **ABG:** Hypoxemia, ± hypercapnia
- **CT chest:** Identifies emphysema pattern, bronchiectasis
- **Alpha-1 antitrypsin level:** Screen all COPD patients once

### Assessment Tools
- **mMRC dyspnea scale:** 0-4 rating of breathlessness
- **CAT (COPD Assessment Test):** 8-item quality of life measure
- **BODE index:** BMI, Obstruction, Dyspnea, Exercise capacity - predicts mortality

## GOLD 2023 Classification

### ABCD Assessment (now ABE)
Based on exacerbation history and symptoms:
- **Group A:** Low risk, fewer symptoms (0-1 moderate exacerbation, mMRC 0-1 or CAT <10)
- **Group B:** Low risk, more symptoms (0-1 moderate exacerbation, mMRC ≥2 or CAT ≥10)
- **Group E:** High risk (≥2 moderate exacerbations OR ≥1 hospitalization)

### Treatment by Group
**Group A:** Bronchodilator (any)
**Group B:** LAMA or LABA (LAMA preferred)
**Group E:** LAMA + LABA ± ICS (if eosinophils ≥300)

### Pharmacologic Classes
| Class | Examples | Mechanism |
|-------|----------|-----------|
| SABA | Albuterol | β2 agonist, quick relief |
| SAMA | Ipratropium | Muscarinic antagonist |
| LABA | Salmeterol, formoterol, indacaterol | β2 agonist, 12-24h |
| LAMA | Tiotropium, umeclidinium, glycopyrrolate | Muscarinic antagonist, 24h |
| ICS | Fluticasone, budesonide | Anti-inflammatory |

### When to Add ICS
- Blood eosinophils ≥300 cells/μL
- History of asthma or atopy
- ≥2 moderate exacerbations per year
- ≥1 hospitalization for exacerbation

## Acute Exacerbations (AECOPD)

**Definition:** Acute worsening of respiratory symptoms requiring additional therapy.

**Triggers:**
- Respiratory infections (viral > bacterial)
- Air pollution
- Pulmonary embolism
- Unknown (30%)

**Treatment:**
- Increase bronchodilators (nebulized SABA + SAMA)
- Systemic corticosteroids: Prednisone 40 mg × 5 days
- Antibiotics if purulent sputum or requiring mechanical ventilation
- Oxygen: Target SpO2 88-92% (avoid over-oxygenation → hypercapnia)
- NIV for acute respiratory acidosis (pH <7.35, PaCO2 >45)`,
      keyTerms: [
        { term: 'protease-antiprotease imbalance', definition: 'Excess tissue-destroying enzymes (proteases) overwhelming protective antiproteases, leading to alveolar destruction' },
        { term: 'Reid index', definition: 'Ratio of mucous gland thickness to bronchial wall thickness; >50% indicates chronic bronchitis' },
        { term: 'centriacinar emphysema', definition: 'Emphysema affecting the center of the lung lobule (respiratory bronchioles), associated with smoking' },
        { term: 'alpha-1 antitrypsin', definition: 'Antiprotease enzyme that protects lung tissue from neutrophil elastase; deficiency causes panacinar emphysema', pronunciation: 'AL-fah one an-ti-TRIP-sin' },
        { term: 'DLCO', definition: 'Diffusing capacity for carbon monoxide; measures gas transfer across alveolar membrane' },
        { term: 'BODE index', definition: 'Multidimensional prognostic tool incorporating BMI, Obstruction (FEV1), Dyspnea, and Exercise capacity' },
      ],
      clinicalNotes: 'The FEV1/FVC ratio of 0.70 may over-diagnose COPD in elderly (use lower limit of normal). Eosinophil count guides ICS therapy - avoid ICS if eosinophils <100 due to pneumonia risk without benefit.',
    },
    4: {
      level: 4,
      summary: 'COPD represents a complex, heterogeneous syndrome with multiple phenotypes and endotypes characterized by accelerated lung function decline, systemic inflammation, and comorbid disease burden, requiring phenotype-directed therapy and integrated disease management.',
      explanation: `## Advanced Pathobiology

### Cellular and Molecular Mechanisms

**Epithelial dysfunction:**
- Impaired barrier function
- Abnormal repair responses (epithelial-mesenchymal transition)
- Reduced secretory IgA production
- Altered innate immune responses
- Mucin hypersecretion (MUC5AC, MUC5B overexpression)

**Inflammatory cell infiltration:**

| Cell Type | Role in COPD |
|-----------|--------------|
| Neutrophils | Protease release (elastase, MMP-8, MMP-9), oxidative stress |
| Macrophages | Defective phagocytosis, MMP-12 production, cytokine release |
| CD8+ T cells | Cytotoxic effects on alveolar walls, IFN-γ production |
| ILC3/Th17 | IL-17 production, neutrophil recruitment |
| Eosinophils | Subgroup with T2 inflammation; ICS-responsive |

**Key inflammatory mediators:**
- TNF-α: Systemic effects, cachexia
- IL-6: Acute phase response, CRP elevation
- IL-8 (CXCL8): Neutrophil chemotaxis
- LTB4: Neutrophil activation
- TGF-β: Fibrosis, small airway remodeling

### Accelerated Lung Aging

COPD exhibits hallmarks of accelerated aging:
- Telomere shortening
- Cellular senescence
- Stem cell exhaustion
- Mitochondrial dysfunction
- Impaired autophagy
- Epigenetic alterations

**Senescence-associated secretory phenotype (SASP):**
- Senescent cells release inflammatory cytokines
- Perpetuates inflammation independent of ongoing exposure
- Explains disease progression after smoking cessation

### Small Airway Disease

The "quiet zone" of COPD:
- Airways <2mm diameter contribute most to airflow limitation
- Mucosal thickening, fibrosis
- Goblet cell metaplasia
- Loss of terminal bronchioles
- Precedes emphysema development

## Phenotypes and Treatable Traits

### Clinical Phenotypes

**Frequent Exacerbator:**
- ≥2 moderate or ≥1 severe exacerbations/year
- Stable trait over time
- Higher inflammatory markers
- Faster FEV1 decline
- Treatment: Triple therapy, consider PDE4 inhibitor, macrolide

**Asthma-COPD Overlap (ACO):**
- Features of both conditions
- Greater variability in airflow limitation
- Often elevated eosinophils
- Better ICS response
- Treatment: ICS-containing regimens essential

**Emphysema-Predominant:**
- Severe hyperinflation
- Low DLCO
- Cachexia
- Potential surgical candidates (LVRS, valves)

**Chronic Bronchitis-Predominant:**
- Chronic productive cough
- Higher exacerbation frequency
- May benefit from mucolytics, PDE4 inhibitors

**Alpha-1 Antitrypsin Deficiency:**
- Panacinar, basal emphysema
- Earlier onset (40-50 years)
- Consider augmentation therapy
- Family screening indicated

### Biomarker-Guided Therapy

**Blood eosinophils:**
| Level (cells/μL) | ICS Recommendation |
|------------------|-------------------|
| <100 | Avoid ICS (pneumonia risk, no benefit) |
| 100-300 | Consider if exacerbator |
| ≥300 | ICS recommended |

**Other biomarkers:**
- CRP: Systemic inflammation, exacerbation risk
- Fibrinogen: Mortality predictor, now FDA-qualified
- Procalcitonin: Guides antibiotic use in exacerbations
- Club cell protein (CC-16): Reflects small airway injury

## Advanced Therapeutics

### Triple Therapy (ICS/LAMA/LABA)
- IMPACT trial: 25% reduction in exacerbations vs LAMA/LABA
- ETHOS trial: 24% reduction; mortality benefit suggested
- Greatest benefit with eosinophils ≥300

### Roflumilast (PDE4 Inhibitor)
- Indicated for severe COPD with chronic bronchitis and frequent exacerbations
- Reduces exacerbations 15-20%
- Side effects: Diarrhea, nausea, weight loss, psychiatric symptoms

### Macrolide Therapy
- Azithromycin 250 mg daily or 3x/week
- Reduces exacerbations by 27%
- Best in former smokers
- Risks: Hearing loss, QT prolongation, resistance

### Biologics (Emerging)
- **Dupilumab:** Phase 3 trials showing benefit in eosinophilic COPD (eos ≥300)
- **Mepolizumab:** METREX/METREO trials - modest benefit
- **Benralizumab:** GALATHEA/TERRANOVA - did not meet endpoints

### Interventional Therapies

**Lung Volume Reduction Surgery (LVRS):**
- Upper lobe emphysema + low exercise capacity
- Improves survival, exercise capacity, quality of life
- Contraindicated: FEV1 <20% with DLCO <20% or homogeneous emphysema

**Bronchoscopic Lung Volume Reduction:**
- Endobronchial valves (Zephyr)
- Indicated for heterogeneous emphysema, intact fissures
- Target lobe volume reduction
- Complications: Pneumothorax (25%), exacerbation

**Lung Transplantation:**
- BODE index ≥7
- Progressive decline despite maximal therapy
- Single or bilateral lung transplant

## Acute Exacerbation Management

### Severity Assessment
**Mild:** Managed with increased bronchodilators
**Moderate:** Requires steroids and/or antibiotics
**Severe:** Requires hospitalization or ED visit

### Hospital Management
1. **Oxygen:** Target SpO2 88-92%
   - Avoid hyperoxia → V/Q worsening → hypercapnia → respiratory acidosis
2. **Bronchodilators:** Nebulized SABA + SAMA q4-6h
3. **Systemic steroids:** Prednisone 40 mg × 5 days (equivalent efficacy to 14 days)
4. **Antibiotics:** If increased dyspnea + sputum volume + sputum purulence
   - Agents: Amoxicillin-clavulanate, fluoroquinolone, azithromycin
5. **NIV:** Bilevel positive pressure for pH <7.35, PaCO2 >45 mmHg
   - Reduces mortality, intubation rate

### Post-Discharge Bundle
- Inhaler technique education
- Smoking cessation
- Pulmonary rehabilitation referral
- Follow-up within 30 days
- Reduce 30-day readmission (20-30% without intervention)`,
      keyTerms: [
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory cytokines released by senescent cells perpetuating tissue damage' },
        { term: 'ACO', definition: 'Asthma-COPD overlap; syndrome with features of both conditions requiring ICS-containing therapy' },
        { term: 'LVRS', definition: 'Lung volume reduction surgery; resection of emphysematous lung to improve respiratory mechanics' },
        { term: 'endobronchial valve', definition: 'One-way valve placed bronchoscopically to achieve lung volume reduction without surgery' },
        { term: 'roflumilast', definition: 'Phosphodiesterase-4 inhibitor reducing inflammation; add-on therapy for severe COPD with chronic bronchitis', pronunciation: 'ro-FLOO-mi-last' },
        { term: 'BODE index', definition: 'Multidimensional grading system (BMI, Obstruction, Dyspnea, Exercise) predicting mortality in COPD' },
      ],
      clinicalNotes: 'Before escalating COPD therapy, verify adherence, inhaler technique, and assess for treatable traits (anxiety, deconditioning, cardiac disease). ICS increases pneumonia risk; balance against exacerbation reduction, especially if eosinophils <100. NIV is first-line for AECOPD with respiratory acidosis - reduces mortality by 50%.',
    },
    5: {
      level: 5,
      summary: 'Contemporary COPD management integrates precision phenotyping, biomarker-guided therapy selection, and a treatable traits framework to deliver individualized care addressing pulmonary and extrapulmonary manifestations while optimizing outcomes across the disease trajectory.',
      explanation: `## Precision Medicine in COPD

### Disease Heterogeneity and Endotypes

COPD is increasingly recognized as a syndrome with distinct molecular endotypes:

**Type 2 High COPD:**
- Blood eosinophils ≥300 cells/μL
- May have features of asthma overlap
- ICS-responsive
- Biologic candidates (dupilumab, others in development)

**Neutrophilic/Th17-Driven:**
- IL-17 pathway activation
- Poor corticosteroid response
- Macrolide may provide benefit
- Targeted therapies in development

**Senescence-Predominant:**
- Accelerated aging phenotype
- Telomere shortening
- Senolytic therapies under investigation

### Biomarker Evolution

**Validated Biomarkers:**
| Biomarker | Use | Threshold | Evidence |
|-----------|-----|-----------|----------|
| Blood eosinophils | ICS response prediction | ≥300 cells/μL | IMPACT, ETHOS, KRONOS |
| Fibrinogen | Prognosis, FDA-qualified | >350 mg/dL | ECLIPSE |
| CRP | Exacerbation risk | >3 mg/L | Multiple observational |

**Emerging Biomarkers:**
- **sRAGE (soluble receptor for advanced glycation end-products):** Reflects emphysema burden
- **Desmosine/isodesmosine:** Elastin degradation products
- **MMP-9/TIMP-1 ratio:** Protease-antiprotease balance
- **Surfactant protein D:** Epithelial injury marker
- **Circulating cfDNA:** Cellular injury marker

### Imaging Phenotyping

**Quantitative CT Analysis:**
- Percent emphysema (LAA-950): <950 HU voxels
- Percent air trapping (LAA-856): Expiratory CT
- Airway wall thickness (Pi10): Small airway disease
- Pulmonary artery:aorta ratio: Pulmonary hypertension

**Parametric Response Mapping (PRM):**
- Distinguishes functional small airway disease (PRMfSAD) from emphysema
- Better predictor of FEV1 decline than either alone
- Identifies early disease in smokers with preserved FEV1

## Biologic Therapy in COPD

### Dupilumab (BOREAS/NOTUS Trials)
- Anti-IL-4Rα blocking IL-4 and IL-13
- BOREAS: 30% reduction in moderate/severe exacerbations
- Inclusion: Blood eos ≥300, FEV1 30-70%, ≥1 exacerbation on triple therapy
- FDA approved 2024 for eosinophilic COPD
- First biologic approved for COPD in US

### Anti-IL-5 Pathway
**Mepolizumab:**
- METREX/METREO: 18-20% exacerbation reduction
- Eosinophilic phenotype (≥150 at screening or ≥300 during exacerbation)
- Approved in some countries, not US

**Benralizumab:**
- GALATHEA/TERRANOVA: Failed to meet primary endpoints
- Post-hoc analyses suggest benefit in highest eosinophil tertile

### Investigational Agents
- **Itepekimab (anti-IL-33):** Phase 2 in former smokers
- **Astegolimab (anti-ST2):** IL-33 receptor blockade
- **Tezepelumab (anti-TSLP):** Phase 3 COURSE trial ongoing
- **Anti-IL-17:** Multiple agents in development

## Advanced Management Strategies

### Treatable Traits Implementation

**Pulmonary Traits:**
| Trait | Assessment | Intervention |
|-------|------------|--------------|
| Eosinophilic inflammation | Blood eos ≥300 | ICS, biologics |
| Frequent exacerbations | ≥2/year | Triple therapy, PDE4i, macrolide |
| Chronic bronchitis | Daily productive cough | Mucolytics, PDE4i, macrolide |
| Hyperinflation | RV/TLC >60% | LAMA, LVRS, valves |
| Hypoxemia | PaO2 <55 or <60 + cor pulmonale | LTOT |
| Chronic respiratory failure | PaCO2 >52 + prior hospitalization | Home NIV |

**Extrapulmonary Traits:**
| Trait | Prevalence | Management |
|-------|------------|------------|
| Cardiovascular disease | 20-50% | Cardiology optimization, cardioselective β-blockers safe |
| Osteoporosis | 30-50% | DEXA, bisphosphonates, minimize OCS |
| Muscle dysfunction | Universal | Pulmonary rehabilitation |
| Depression/anxiety | 40% | Screening, treatment |
| GERD | 30-60% | PPIs, lifestyle |

### Long-Term Oxygen Therapy (LTOT)

**Indications (resting hypoxemia):**
- PaO2 ≤55 mmHg or SpO2 ≤88%
- PaO2 56-59 + cor pulmonale, polycythemia, or pulmonary hypertension

**LOTT Trial Findings:**
- Moderate hypoxemia (SpO2 89-93%) or exertional desaturation: No benefit from supplemental O2

### Home Non-Invasive Ventilation

**HOT-HMV and RESCUE Trials:**
- Persistent hypercapnia (PaCO2 >52) after AECOPD
- High-intensity NIV (IPAP ≥20, targeting normocapnia)
- Reduces readmissions and mortality

**Settings:**
- Pressure support titrated to normalize PaCO2
- Typical: IPAP 20-30, EPAP 4-6
- Backup rate 12-14
- Minimum 5 hours nightly use

### Lung Volume Reduction

**Surgical (LVRS) - NETT Trial:**
| Characteristic | Outcome |
|----------------|---------|
| Upper lobe emphysema + low exercise capacity | Survival benefit |
| Upper lobe emphysema + high exercise capacity | QoL benefit, no survival |
| Non-upper lobe, low capacity | No benefit |
| Non-upper lobe, high capacity | Increased mortality |
| FEV1 <20% + DLCO <20% or homogeneous | High mortality (excluded) |

**Bronchoscopic (Endobronchial Valves):**
- LIBERATE, TRANSFORM trials: Improved FEV1, 6MWD, quality of life
- Requirements: Heterogeneous emphysema, complete fissure integrity
- Quantitative CT analysis essential
- 25% pneumothorax rate

**Bronchoscopic Alternatives:**
- Lung coils (limited evidence, not widely available)
- Vapor ablation (thermal injury to induce fibrosis)

### Lung Transplantation

**Timing and Selection:**
- BODE index 7-10
- FEV1 <25% predicted
- Resting hypoxemia or hypercapnia
- Frequent exacerbations or pulmonary hypertension
- Functional decline despite maximal therapy

**Outcomes:**
- Median survival ~6 years
- 1-year survival 90%, 5-year 55%
- Quality of life improvement

## Special Populations

### Alpha-1 Antitrypsin Deficiency

**Screening:** ALL COPD patients, one-time AAT level

**Severe deficiency (PiZZ):**
- AAT level <11 μM (50 mg/dL)
- Consider augmentation therapy
- Prolastin, Aralast, Zemaira, Glassia

**Augmentation Therapy Evidence:**
- RAPID trial: Reduced lung density decline on CT
- No clear FEV1 preservation
- Weekly IV infusions, lifelong
- Consider in FEV1 35-65% predicted

### COPD in Never Smokers

- 25-45% of COPD globally
- Risk factors: Biomass fuel exposure, TB, childhood respiratory illness, air pollution
- Often underdiagnosed
- May have different inflammatory profile

### Pre-COPD and PRISm

**Pre-COPD:**
- Respiratory symptoms without airflow limitation
- May have emphysema on CT, abnormal DLCO
- High risk for progression

**PRISm (Preserved Ratio Impaired Spirometry):**
- FEV1 <80% but FEV1/FVC ≥0.70
- Heterogeneous group (obesity, restriction, early obstruction)
- Higher mortality than normal spirometry
- 30% progress to COPD

## Clinical Pearls for Practice

1. **Blood eosinophils** should be checked in all COPD patients to guide ICS therapy. Values fluctuate - use highest recent value or trend.

2. **ICS withdrawal** is appropriate in patients with eosinophils <300 without frequent exacerbations. WISDOM trial showed minimal risk if on dual bronchodilators.

3. **Pulmonary rehabilitation** has the strongest evidence for improving symptoms and exercise capacity - comparable to pharmacotherapy but vastly underutilized.

4. **Smoking cessation** remains the only intervention proven to alter disease trajectory. NRT + behavioral support has 30% success rate.

5. **COPD-asthma differentiation:** Consider ACO if bronchodilator response >400 mL, eosinophils persistently >300, history of atopy/asthma, or significant variability.

6. **Exacerbation prevention** is the key metric - each severe exacerbation accelerates FEV1 decline by ~25 mL and increases mortality.

7. **Comorbidities kill COPD patients** - cardiovascular disease is the leading cause of death in mild-moderate COPD. Optimize cardiac care.

8. **Triple therapy mortality benefit** was demonstrated in IMPACT (borderline) and ETHOS trials. Consider escalation to triple in appropriate patients.`,
      keyTerms: [
        { term: 'PRISm', definition: 'Preserved Ratio Impaired Spirometry; reduced FEV1 with normal ratio, representing heterogeneous pathology', pronunciation: 'PRIZM' },
        { term: 'PRM', definition: 'Parametric Response Mapping; CT-based technique distinguishing functional small airway disease from emphysema' },
        { term: 'treatable traits', definition: 'Framework identifying modifiable disease characteristics across pulmonary, extrapulmonary, and behavioral domains' },
        { term: 'BODE index', definition: 'BMI, Obstruction (FEV1), Dyspnea (mMRC), Exercise (6MWD) - multidimensional mortality predictor' },
        { term: 'augmentation therapy', definition: 'Intravenous infusion of alpha-1 antitrypsin for severe deficiency to protect lungs from protease injury' },
        { term: 'high-intensity NIV', definition: 'Home ventilation with pressures targeting normocapnia (IPAP ≥20), shown to reduce readmissions in chronic hypercapnic COPD' },
      ],
      clinicalNotes: `Key practice points:

1. **GOLD 2024 updates:** Group E now encompasses all high-exacerbation risk patients (previously C+D). Initial therapy is LAMA/LABA, adding ICS if eosinophils ≥300.

2. **Triple therapy indication:** Eosinophils ≥300 + exacerbator phenotype. IMPACT and ETHOS showed mortality benefit signal.

3. **Dupilumab for COPD:** First FDA-approved biologic (2024). Consider in eosinophilic COPD (≥300) with frequent exacerbations despite triple therapy.

4. **Endobronchial valves:** Require multidisciplinary evaluation with quantitative CT (StratX or similar) to assess fissure integrity and target lobe.

5. **Chronic NIV:** Consider in stable patients with PaCO2 >52 mmHg, especially after AECOPD requiring acute NIV. Target normocapnia.

6. **Annual screening:** All COPD patients need annual AAT level (once), DEXA (if risk factors), and depression screening.`,
    },
  },

  media: [
    {
      id: 'copd-pathophysiology',
      type: 'diagram',
      filename: 'copd-pathophysiology.svg',
      title: 'COPD Pathophysiology',
      description: 'Comparison of chronic bronchitis and emphysema mechanisms',
    },
    {
      id: 'emphysema-types',
      type: 'diagram',
      filename: 'emphysema-types.svg',
      title: 'Types of Emphysema',
      description: 'Centriacinar vs panacinar vs paraseptal emphysema patterns',
    },
    {
      id: 'copd-treatment-algorithm',
      type: 'diagram',
      filename: 'copd-gold-algorithm.svg',
      title: 'GOLD Treatment Algorithm',
      description: 'GOLD 2024 ABE assessment and treatment escalation pathway',
    },
  ],

  citations: [
    {
      id: 'gold-2024',
      type: 'website',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease'],
      source: 'GOLD',
      url: 'https://goldcopd.org',
      accessedDate: '2024-01-01',
    },
    {
      id: 'impact-trial',
      type: 'article',
      title: 'Triple Therapy in COPD: The IMPACT Trial',
      authors: ['Lipson DA', 'Barnhart F', 'Brealey N', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa1713901',
    },
    {
      id: 'boreas-trial',
      type: 'article',
      title: 'Dupilumab for COPD with Blood Eosinophil Evidence of Type 2 Inflammation',
      authors: ['Bhatt SP', 'Rabe KF', 'Hanania NA', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa2303951',
    },
  ],

  crossReferences: [
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'topic-pulmonary-function-tests', targetType: 'topic', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'topic-respiratory-medications', targetType: 'topic', relationship: 'related', label: 'Respiratory Medications' },
    { targetId: 'condition-lung-cancer', targetType: 'condition', relationship: 'related', label: 'Lung Cancer' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'chronic disease', 'smoking-related'],
    keywords: ['COPD', 'emphysema', 'chronic bronchitis', 'airflow obstruction', 'smoking', 'alpha-1 antitrypsin'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default copd;
