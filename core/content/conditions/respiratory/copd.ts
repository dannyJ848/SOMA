/**
 * COPD (Chronic Obstructive Pulmonary Disease) - Comprehensive Educational Content
 *
 * Covers pathophysiology, diagnosis, staging, and management of COPD.
 */

import { EducationalContent } from '../../types';

export const copd: EducationalContent = {
  id: 'condition-copd',
  type: 'condition',
  name: 'Chronic Obstructive Pulmonary Disease',
  alternateNames: ['COPD', 'Chronic Bronchitis', 'Emphysema'],
  hpoId: 'HP:0006510',

  levels: {
    1: {
      level: 1,
      summary: 'COPD is a lung disease that makes it hard to breathe because the airways and air sacs in your lungs are damaged, usually from smoking.',
      explanation: `COPD makes it harder and harder to breathe over time. It's usually caused by years of smoking, though breathing in other harmful things like pollution or chemicals can also cause it.

**What happens in COPD?**
Your lungs have two main problems:
1. **Chronic bronchitis** - The airways (breathing tubes) become inflamed and make too much mucus, causing a long-lasting cough
2. **Emphysema** - The tiny air sacs where oxygen enters your blood get damaged and can't work properly

**Common symptoms:**
- Shortness of breath, especially with activity
- A cough that won't go away
- Coughing up mucus (phlegm)
- Wheezing
- Feeling tired
- Frequent chest infections

**Main causes:**
- Smoking (the #1 cause)
- Secondhand smoke
- Air pollution
- Workplace dust and chemicals
- Rare genetic conditions

**Treatment:**
- Quitting smoking (most important step!)
- Inhalers to open airways
- Pulmonary rehabilitation (exercise training)
- Oxygen therapy if needed
- Preventing lung infections with vaccines`,
      keyTerms: [
        { term: 'COPD', definition: 'A lung disease that blocks airflow and makes breathing difficult' },
        { term: 'chronic bronchitis', definition: 'Ongoing inflammation of the airways with excess mucus production' },
        { term: 'emphysema', definition: 'Damage to the tiny air sacs in the lungs' },
        { term: 'pulmonary rehabilitation', definition: 'Exercise and education programs to help people with lung disease' },
      ],
      analogies: [
        'Breathing with COPD is like trying to blow air through a partially crushed straw.',
        'Emphysema is like having a sponge with big holes instead of small ones - it can\'t hold as much oxygen.',
      ],
      examples: [
        'A 60-year-old who smoked for 40 years might have COPD and feel short of breath walking upstairs.',
        'Someone with COPD might have a "smoker\'s cough" every morning with mucus.',
      ],
    },
    2: {
      level: 2,
      summary: 'COPD is a progressive lung disease characterized by persistent airflow limitation from chronic bronchitis and/or emphysema, primarily caused by tobacco smoke exposure, with management focused on symptom relief, exacerbation prevention, and slowing disease progression.',
      explanation: `## Understanding COPD

COPD includes two main conditions that often occur together:

**Chronic Bronchitis:**
- Defined as cough with sputum production for at least 3 months per year for 2 consecutive years
- Airway inflammation and excess mucus
- Narrowed airways due to scarring

**Emphysema:**
- Destruction of alveoli (air sacs)
- Loss of elastic recoil
- Air trapping and hyperinflation

## Risk Factors

- Cigarette smoking (80-90% of cases)
- Occupational exposures (dust, chemicals)
- Indoor air pollution (biomass fuel burning)
- Alpha-1 antitrypsin deficiency (genetic)
- Childhood respiratory infections
- Asthma history

## GOLD Staging (Based on FEV1)

| Stage | FEV1 (% predicted) | Description |
|-------|-------------------|-------------|
| GOLD 1 | ≥80% | Mild |
| GOLD 2 | 50-79% | Moderate |
| GOLD 3 | 30-49% | Severe |
| GOLD 4 | <30% | Very Severe |

## Symptoms

- **Dyspnea** - Progressive, worse with exertion
- **Chronic cough** - May be intermittent, often productive
- **Sputum production** - Various qualities
- **Wheezing and chest tightness**
- **Fatigue and weight loss** - In advanced disease

## Diagnosis

1. **Spirometry** (Required for diagnosis):
   - Post-bronchodilator FEV1/FVC <0.70
   - Limited reversibility with bronchodilator

2. **Assessment:**
   - Symptom severity (CAT or mMRC scores)
   - Exacerbation history
   - Comorbidities

## Treatment Goals

1. Reduce symptoms
2. Improve exercise tolerance
3. Prevent and treat exacerbations
4. Slow disease progression
5. Reduce mortality

## Medications

**Bronchodilators:**
- Short-acting beta-agonists (SABA)
- Short-acting muscarinic antagonists (SAMA)
- Long-acting beta-agonists (LABA)
- Long-acting muscarinic antagonists (LAMA)

**Anti-inflammatory:**
- Inhaled corticosteroids (ICS) - for frequent exacerbators
- Not used alone in COPD (unlike asthma)

## Non-Pharmacologic Management

- **Smoking cessation** - Most effective intervention
- **Pulmonary rehabilitation**
- **Vaccinations** - Influenza, pneumococcal, COVID-19
- **Oxygen therapy** - If SpO2 ≤88% at rest
- **Nutritional support**`,
      keyTerms: [
        { term: 'FEV1', definition: 'Forced expiratory volume in 1 second; the amount of air forcefully exhaled in the first second' },
        { term: 'FVC', definition: 'Forced vital capacity; total amount of air that can be forcefully exhaled' },
        { term: 'GOLD', definition: 'Global Initiative for Chronic Obstructive Lung Disease; international guidelines organization' },
        { term: 'LAMA', definition: 'Long-acting muscarinic antagonist; bronchodilator that relaxes airway muscles' },
        { term: 'exacerbation', definition: 'Sudden worsening of COPD symptoms requiring additional treatment' },
      ],
      analogies: [
        'The airways in COPD are like rusty pipes that have become narrowed and clogged over time.',
        'Air trapping in emphysema is like trying to empty a balloon that has lost its stretchiness.',
      ],
    },
    3: {
      level: 3,
      summary: 'COPD involves an abnormal inflammatory response to noxious particles causing airway remodeling and parenchymal destruction, classified by GOLD ABE assessment combining spirometry with symptoms and exacerbation risk, managed with stepwise bronchodilator therapy and targeted ICS use.',
      explanation: `## Pathophysiology

### Inflammatory Response
- Neutrophil predominant (unlike asthma)
- CD8+ T lymphocyte infiltration
- Macrophage activation with MMP release
- Oxidative stress from cigarette smoke
- Protease-antiprotease imbalance

### Structural Changes

**Small Airways (<2mm):**
- Fibrosis and narrowing
- Goblet cell metaplasia
- Smooth muscle hypertrophy
- Loss of small airways (early disease)

**Lung Parenchyma:**
- Alveolar wall destruction
- Centrilobular emphysema (smoking-related)
- Panlobular emphysema (alpha-1 antitrypsin deficiency)
- Paraseptal emphysema

**Pulmonary Vasculature:**
- Intimal hyperplasia
- Smooth muscle hypertrophy
- Pulmonary hypertension

### Systemic Effects
- Skeletal muscle dysfunction
- Cardiovascular disease
- Osteoporosis
- Depression/anxiety
- Metabolic syndrome

## GOLD ABE Assessment (2023+)

### Components
1. **Spirometry**: Confirms diagnosis (FEV1/FVC <0.7) and severity grade
2. **Symptoms**: CAT ≥10 or mMRC ≥2 = more symptoms
3. **Exacerbation history**: ≥2 moderate or ≥1 hospitalization = high risk

### Groups
| Group | Exacerbations | Symptoms |
|-------|---------------|----------|
| A | 0-1 moderate, no hospitalization | mMRC 0-1, CAT <10 |
| B | 0-1 moderate, no hospitalization | mMRC ≥2, CAT ≥10 |
| E | ≥2 moderate OR ≥1 hospitalization | Any |

## Pharmacotherapy

### Initial Treatment by Group

**Group A:**
- Bronchodilator (SABA, SAMA, LABA, or LAMA)

**Group B:**
- LABA + LAMA combination preferred
- Single long-acting bronchodilator if symptoms mild

**Group E:**
- LABA + LAMA
- Consider adding ICS if eosinophils ≥300 cells/μL

### Escalation/De-escalation

**Add ICS when:**
- Blood eosinophils ≥300 cells/μL
- Previous asthma diagnosis or asthma features
- Recurrent exacerbations on LABA/LAMA

**Consider ICS withdrawal when:**
- Pneumonia
- Eosinophils <100 cells/μL
- Lack of exacerbation history

### Other Pharmacotherapy
- **Roflumilast**: PDE4 inhibitor for chronic bronchitis phenotype with exacerbations
- **Azithromycin**: Macrolide for frequent exacerbators (non-smokers)
- **N-acetylcysteine**: Mucolytic, antioxidant (limited evidence)

## Acute Exacerbation (AECOPD)

### Definition
Acute worsening of respiratory symptoms requiring additional therapy

### Severity
- **Mild**: Managed with short-acting bronchodilators only
- **Moderate**: Requires antibiotics and/or oral corticosteroids
- **Severe**: Requires hospitalization or ED visit

### Treatment
1. Increased short-acting bronchodilators
2. Systemic corticosteroids (prednisone 40 mg x 5 days)
3. Antibiotics if:
   - Increased sputum purulence
   - Two of: increased dyspnea, sputum volume, purulence
   - Mechanical ventilation required
4. Oxygen therapy (target SpO2 88-92%)
5. Non-invasive ventilation if indicated

### Antibiotic Selection
- Amoxicillin-clavulanate
- Respiratory fluoroquinolone
- Azithromycin or doxycycline

## Comorbidity Management
- Cardiovascular: Cardioselective beta-blockers safe
- Osteoporosis: Screening and treatment
- Anxiety/depression: Pulmonary rehab, pharmacotherapy
- Lung cancer: Screening in eligible patients`,
      keyTerms: [
        { term: 'protease-antiprotease imbalance', definition: 'Excess proteolytic enzymes (like elastase) relative to protective inhibitors, causing lung tissue destruction' },
        { term: 'alpha-1 antitrypsin', definition: 'Protease inhibitor protecting lungs from neutrophil elastase; genetic deficiency causes early emphysema' },
        { term: 'roflumilast', definition: 'Phosphodiesterase-4 inhibitor reducing inflammation in COPD with chronic bronchitis phenotype' },
        { term: 'CAT score', definition: 'COPD Assessment Test; 8-question validated symptom questionnaire (0-40 scale)' },
        { term: 'triple therapy', definition: 'Combination of ICS + LABA + LAMA in a single or multiple inhalers' },
      ],
      clinicalNotes: 'Blood eosinophils ≥300 cells/μL predicts ICS benefit; <100 cells/μL suggests ICS unlikely to help and may increase pneumonia risk. For exacerbations, short course steroids (5 days) are as effective as longer courses with fewer side effects.',
    },
    4: {
      level: 4,
      summary: 'COPD pathogenesis involves accelerated lung aging, inflammaging, and cellular senescence, with phenotypic heterogeneity requiring precision approaches, attention to treatable traits, and consideration of emerging therapies including biologics for eosinophilic COPD.',
      explanation: `## Advanced Pathophysiology

### Accelerated Lung Aging
- Telomere shortening in alveolar cells
- Increased senescence markers (p16, p21)
- Senescence-associated secretory phenotype (SASP)
- Impaired stem cell function
- Defective autophagy

### Inflammaging
- Persistent low-grade inflammation
- Elevated CRP, IL-6, fibrinogen
- Contributes to systemic manifestations
- Shared pathway with cardiovascular disease

### Oxidative Stress
- Cigarette smoke contains 10^15 free radicals per puff
- Overwhelms antioxidant defenses (glutathione)
- Activates NF-κB inflammatory pathways
- Inactivates alpha-1 antitrypsin

### Small Airway Disease
- Up to 50% loss of terminal bronchioles in mild COPD
- Precedes emphysema development
- Not detectable on standard spirometry
- Assessed by:
  - Impulse oscillometry
  - CT parametric response mapping
  - FEF25-75% (variably reliable)

## COPD Phenotypes and Treatable Traits

### Classic Phenotypes
| Phenotype | Features | Treatment Implications |
|-----------|----------|----------------------|
| Emphysema-predominant | Dyspnea, hyperinflation, low BMI | Consider LVRS if heterogeneous |
| Chronic bronchitis | Cough, sputum, recurrent infections | Roflumilast, mucolytics |
| Frequent exacerbator | ≥2 exacerbations/year | Triple therapy, consider biologics |
| Asthma-COPD overlap | Variable airflow, eosinophilia | ICS essential |

### Eosinophilic COPD
- ~20-40% of COPD patients
- Blood eosinophils ≥300 cells/μL
- Predicts ICS response
- May benefit from biologics (emerging)
- Lower pneumonia risk with ICS than non-eosinophilic

### Treatable Traits Framework
**Pulmonary:**
- Airflow limitation → Bronchodilators
- Eosinophilic inflammation → ICS, biologics
- Airway infection/colonization → Antibiotics
- Mucus hypersecretion → Mucolytics, roflumilast

**Extrapulmonary:**
- Frailty/sarcopenia → Pulmonary rehab, nutrition
- Depression → Treatment, rehab
- Poor nutrition → Dietitian, supplements
- Cardiovascular disease → Cardiology co-management

## Advanced Pharmacotherapy

### Blood Eosinophil-Guided ICS

| Eosinophil Count | ICS Recommendation |
|------------------|-------------------|
| <100 cells/μL | ICS not recommended |
| 100-300 cells/μL | Consider if frequent exacerbations |
| ≥300 cells/μL | ICS likely beneficial |

### Biologics in COPD

**Dupilumab (FDA approved 2024):**
- First biologic for COPD
- For moderate-severe COPD with eosinophils ≥300
- Reduced exacerbations by ~30%
- Improved FEV1 and quality of life
- BOREAS and NOTUS trials

**Other Biologics Studied:**
| Agent | Target | Status |
|-------|--------|--------|
| Mepolizumab | IL-5 | Inconsistent results |
| Benralizumab | IL-5R | Negative in primary outcome |
| Itepekimab | IL-33 | Phase 3 ongoing |
| Tezepelumab | TSLP | Under investigation |

### Interventional Approaches

**Lung Volume Reduction Surgery (LVRS):**
- Upper lobe predominant emphysema
- Low exercise capacity
- Improves FEV1, exercise tolerance, survival

**Bronchoscopic Lung Volume Reduction:**
- Endobronchial valves (Zephyr)
- For severe hyperinflation with low collateral ventilation
- Coils for non-upper-lobe emphysema

**Bronchial Rheoplasty:**
- Pulsed electric fields to airways
- Reduces mucus hypersecretion
- Phase 2/3 trials ongoing

## Exacerbation Prevention Strategies

### Risk Stratification
- Previous exacerbations strongest predictor
- Higher eosinophils may predict treatable exacerbations
- Imaging features (emphysema extent, airway wall thickening)

### Prevention Bundle
1. Optimal pharmacotherapy
2. Vaccinations (influenza, pneumococcal, COVID-19, RSV)
3. Pulmonary rehabilitation
4. Self-management action plans
5. Smoking cessation
6. Consider azithromycin in selected patients

### Azithromycin Evidence
- MACRO trial: 250 mg daily reduced exacerbations
- Best in former smokers (ongoing smoking may select resistant organisms)
- Monitor QTc, hearing
- Potential for macrolide resistance

## Oxygen and Ventilatory Support

### Long-Term Oxygen Therapy (LTOT)
**Indications:**
- PaO2 ≤55 mmHg or SpO2 ≤88% at rest
- PaO2 55-59 mmHg with cor pulmonale, polycythemia, or pulmonary hypertension
- Use ≥15 hours/day for mortality benefit

### High-Flow Nasal Cannula (HFNC)
- Emerging role in stable COPD with chronic hypercapnia
- May reduce exacerbations
- More comfortable than NIV for some patients

### Home Non-Invasive Ventilation (NIV)
- For chronic hypercapnic COPD (PaCO2 ≥52 mmHg)
- HOT-HMV trial: Improved survival with nocturnal NIV + O2
- Target reduction in PaCO2`,
      keyTerms: [
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory cytokines and proteases secreted by senescent cells' },
        { term: 'small airway disease', definition: 'Pathology in airways <2mm diameter; earliest site of COPD but not detected by spirometry' },
        { term: 'bronchoscopic lung volume reduction', definition: 'Minimally invasive procedures (valves, coils) to reduce hyperinflation in selected emphysema patients' },
        { term: 'treatable traits', definition: 'Individual phenotypic characteristics that can be targeted for personalized COPD management' },
        { term: 'collateral ventilation', definition: 'Airflow between lung segments through non-bronchial pathways; presence limits endobronchial valve efficacy' },
      ],
      clinicalNotes: 'Dupilumab is now the first biologic approved for COPD, but only for eosinophilic phenotype (≥300 cells/μL). For bronchoscopic interventions, CT-based lobar volume analysis and fissure integrity assessment (Chartis system) are essential for patient selection. Always consider home NIV for patients with persistent hypercapnia after exacerbation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary COPD management requires molecular phenotyping, biomarker-guided therapy, consideration of disease heterogeneity through multi-omics approaches, and integration of emerging therapies targeting senescence, regeneration, and precision anti-inflammatory pathways.',
      explanation: `## Molecular Mechanisms and Therapeutic Targets

### Cellular Senescence and Senotherapeutics
- Senescent cells accumulate in COPD lungs
- SASP perpetuates inflammation
- Potential interventions:
  - **Senolytics** (dasatinib + quercetin): Clear senescent cells
  - **Senomorphics**: Suppress SASP without killing cells
  - Early clinical trials in COPD underway

### Protease-Antiprotease Rebalancing
**Alpha-1 Antitrypsin Augmentation:**
- IV augmentation therapy for Pi*ZZ deficiency
- Slows FEV1 decline and emphysema progression
- RAPID trial: CT densitometry showed benefit

**Novel Approaches:**
- Neutrophil elastase inhibitors (alvelestat)
- MMP inhibitors (broad failure due to side effects)
- Gene therapy for AAT deficiency

### Oxidative Stress Modulation
- Nrf2 pathway activators (sulforaphane)
- Mitochondria-targeted antioxidants
- N-acetylcysteine (modest evidence)

### Epithelial Regeneration
- Airway basal stem cell dysfunction in COPD
- Wnt pathway dysregulation
- Potential targets:
  - Retinoic acid (alveolar regeneration)
  - FGF/HGF signaling
  - Stem cell therapies (early stage)

## Multi-Omics and Precision Medicine

### Transcriptomic Subtypes
- Cluster analyses identify molecular subtypes
- Not directly aligned with clinical phenotypes
- May identify differential treatment response

### Metabolomics
- Amino acid perturbations (systemic effects)
- Lipid mediators of inflammation
- Potential biomarkers of exacerbation risk

### Proteomics
- Sputum proteomics for phenotyping
- Plasma proteins for systemic inflammation assessment
- Biomarker panels for exacerbation prediction

### Imaging Biomarkers
**Quantitative CT:**
- Emphysema extent (LAA%)
- Airway wall thickness (Pi10)
- Small airway disease (parametric response mapping)
- Vascular pruning (emerging cardiovascular link)

**Functional Imaging:**
- Xenon-129 MRI for ventilation
- Regional lung function assessment
- Research tool becoming clinical

## Emerging and Pipeline Therapies

### Biologics Landscape

| Agent | Target | COPD Status | Key Data |
|-------|--------|-------------|----------|
| Dupilumab | IL-4Rα | Approved (2024) | BOREAS/NOTUS: 30% exacerbation reduction |
| Itepekimab | IL-33 | Phase 3 | AERIFY-1/2 ongoing |
| Tezepelumab | TSLP | Phase 2 complete | Mixed results; may need biomarker selection |
| Astegolimab | IL-33 | Phase 2 | Reduced exacerbations in eosinophilic subset |

### Novel Small Molecules

**JAK Inhibitors:**
- Broad anti-inflammatory effects
- Inhaled formulations in development
- Balance efficacy vs. infection risk

**P38 MAPK Inhibitors:**
- Target inflammation and corticosteroid resistance
- Losmapimod failed in Phase 3
- Inhaled forms under study

**PI3K Inhibitors:**
- Nemiralisib (inhaled PI3Kδ)
- May reduce exacerbations
- Targeting corticosteroid insensitivity

### Regenerative Medicine

**Mesenchymal Stem Cells (MSCs):**
- Anti-inflammatory and immunomodulatory
- Mixed clinical results
- Optimal cell source/dosing unknown

**Lung Progenitor Cell Therapy:**
- Autologous lung stem/progenitor cells
- Very early clinical development
- Ethical and technical challenges

### Bronchoscopic Innovations

**Targeted Lung Denervation (TLD):**
- Ablates parasympathetic nerves to airways
- AIRFLOW-2 trial: Improved respiratory quality of life
- May reduce mucus and bronchoconstriction

**Metered Cryospray:**
- Reduces chronic bronchitis symptoms
- Cryoablation of airway epithelium
- Regeneration with less mucus-producing cells

## Comorbidity Integration

### Cardiovascular-Pulmonary Crosstalk
- Shared inflammation pathways
- Vascular pruning on CT predicts mortality
- Statins: No COPD exacerbation benefit (STATCOPE)
- Beta-blockers: Safe and may reduce exacerbations

### Lung Cancer Screening
- COPD is independent risk factor
- Annual LDCT for eligible patients (30+ pack-years, 50-80 years)
- Combined COPD + cancer surveillance

### Frailty and Multimorbidity
- Comprehensive geriatric assessment
- Palliative care integration for advanced disease
- Advance care planning essential

## Future Directions

### Disease Modification Goals
- Slow or halt FEV1 decline
- Prevent disease progression
- Regenerate damaged tissue
- Currently no approved disease-modifying therapy

### Precision Exacerbation Management
- Biomarker-guided antibiotic and steroid use
- Point-of-care CRP and procalcitonin
- Eosinophil-guided corticosteroids

### Digital Health Integration
- Remote monitoring of symptoms and physiology
- AI prediction of exacerbations
- Telerehabilitation
- Inhaler adherence tracking

### Clinical Trial Innovations
- Adaptive platform trials
- Biomarker-enriched populations
- PRO (patient-reported outcome) endpoints
- Composite endpoints beyond FEV1`,
      keyTerms: [
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent cells to reduce chronic inflammation and tissue dysfunction' },
        { term: 'AAT augmentation', definition: 'Intravenous replacement of alpha-1 antitrypsin for patients with genetic deficiency' },
        { term: 'targeted lung denervation', definition: 'Bronchoscopic ablation of parasympathetic nerves to reduce bronchoconstriction and mucus production' },
        { term: 'parametric response mapping', definition: 'CT imaging technique detecting small airway disease before visible emphysema' },
        { term: 'vascular pruning', definition: 'Loss of small pulmonary blood vessels visible on CT; associated with mortality in COPD' },
      ],
      clinicalNotes: `Key clinical considerations for advanced COPD management:

1. **Dupilumab eligibility**: Blood eosinophils ≥300 cells/μL on two occasions; Type 2 biomarker elevation. Unlike asthma, IgE levels not relevant.

2. **Bronchoscopic interventions**: Endobronchial valves require complete fissure on CT and low collateral ventilation (Chartis). Refer to specialized centers.

3. **AAT testing**: Screen once in all COPD patients, especially early-onset, lower lobe emphysema, or family history. Genetic testing preferred over phenotyping.

4. **Home NIV**: Consider in stable hypercapnic COPD (PaCO2 ≥52 mmHg) especially post-exacerbation. Target reduction in PaCO2 by ≥20% or to <48 mmHg.

5. **Palliative care**: Integrate early for symptom management; COPD often under-referred despite high symptom burden.

6. **Exacerbation biomarkers**: FeNO may predict eosinophilic exacerbations; procalcitonin can guide antibiotic decisions.

7. **Frailty assessment**: Physical frailty common; consider comprehensive geriatric assessment for multimorbid patients.`,
    },
  },

  media: [
    {
      id: 'copd-pathology',
      type: 'diagram',
      filename: 'copd-airway-alveoli.svg',
      title: 'COPD Pathological Changes',
      description: 'Comparison of normal and COPD airways and alveoli',
    },
    {
      id: 'gold-abe-chart',
      type: 'diagram',
      filename: 'gold-abe-assessment.svg',
      title: 'GOLD ABE Assessment Tool',
      description: 'Classification grid for COPD management groups',
    },
  ],

  citations: [
    {
      id: 'gold-2024',
      type: 'website',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD (GOLD 2024)',
      source: 'Global Initiative for Chronic Obstructive Lung Disease',
      url: 'https://goldcopd.org',
    },
    {
      id: 'boreas-trial',
      type: 'article',
      title: 'Dupilumab for COPD with Blood Eosinophil Evidence of Type 2 Inflammation',
      source: 'New England Journal of Medicine',
      authors: ['Bhatt SP', 'Rabe KF', 'Hanania NA', 'et al.'],
      url: 'https://doi.org/10.1056/NEJMoa2303951',
    },
  ],

  crossReferences: [
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-lung-cancer', targetType: 'condition', relationship: 'related', label: 'Lung Cancer' },
    { targetId: 'condition-pulmonary-hypertension', targetType: 'condition', relationship: 'related', label: 'Pulmonary Hypertension' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'chronic disease', 'smoking'],
    keywords: ['COPD', 'emphysema', 'chronic bronchitis', 'spirometry', 'bronchodilators', 'exacerbation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default copd;
