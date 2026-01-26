import { LegacyEducationalContent } from '../../../types'

export const asthmaAllergy: LegacyEducationalContent = {
  id: 'asthma-allergy',
  title: 'Asthma and Allergy',
  specialty: 'allergy-immunology',
  category: 'allergic-conditions',

  levels: {
    1: {
      title: 'Introduction to Asthma',
      description: 'Basic understanding of asthma and its relationship to allergies',
      content: `
# What is Asthma?

Asthma is a chronic condition that affects the airways in the lungs. It causes inflammation and narrowing of the airways, making it difficult to breathe.

## Common Symptoms

- Wheezing (whistling sound when breathing)
- Shortness of breath
- Chest tightness
- Coughing, especially at night or early morning

## Asthma and Allergies

Many people with asthma also have allergies. Common allergic triggers include:
- Pollen
- Dust mites
- Pet dander
- Mold

## Other Asthma Triggers

- Cold air
- Exercise
- Smoke or strong odors
- Respiratory infections
- Stress

## Managing Asthma

- Take medications as prescribed
- Identify and avoid triggers
- Monitor symptoms
- Have an asthma action plan
      `
    },

    beginner: {
      title: 'Understanding Asthma',
      description: 'Learn about asthma types, symptoms, and basic management',
      content: `
# Understanding Asthma

## What Happens in Asthma?

During an asthma episode, the following occurs in the airways:
1. **Inflammation**: The lining of airways becomes swollen
2. **Bronchoconstriction**: Muscles around airways tighten
3. **Mucus production**: Excess mucus clogs the airways

## Types of Asthma

### Allergic Asthma
- Most common type
- Triggered by allergens
- Often starts in childhood
- Family history of allergies common

### Non-Allergic Asthma
- Triggered by factors other than allergens
- Exercise, cold air, infections, stress
- Often develops in adulthood

### Other Classifications
- **Exercise-induced bronchoconstriction (EIB)**: Triggered by physical activity
- **Occupational asthma**: Workplace exposures
- **Cough-variant asthma**: Cough is the primary symptom

## Diagnosis

### Medical History
- Symptom patterns (worse at night/early morning)
- Trigger identification
- Family history
- Impact on daily activities

### Diagnostic Tests
- **Spirometry**: Measures lung function
- **Peak flow monitoring**: Daily home measurements
- **Fractional exhaled nitric oxide (FeNO)**: Measures inflammation
- **Allergy testing**: Identify allergic triggers

## Basic Treatment Principles

### Quick-Relief (Rescue) Medications
- Short-acting bronchodilators (albuterol)
- Used as needed for symptoms
- Relax muscles around airways

### Long-Term Control Medications
- Inhaled corticosteroids (ICS)
- Taken daily to prevent symptoms
- Reduce inflammation
- Long-acting bronchodilators (LABA) used with ICS

## Asthma Action Plans

A written plan that includes:
- Daily medications
- How to recognize worsening symptoms
- When to use rescue medications
- When to seek emergency care
      `
    },

    intermediate: {
      title: 'Clinical Management of Asthma',
      description: 'Comprehensive approach to asthma diagnosis and treatment',
      content: `
# Clinical Management of Asthma

## Diagnostic Assessment

### Spirometry with Bronchodilator

**Key Measurements**
- **FEV1**: Forced expiratory volume in 1 second
- **FVC**: Forced vital capacity
- **FEV1/FVC ratio**: Normally >0.75-0.80
- **Reversibility**: ≥12% and ≥200mL improvement after bronchodilator

**Interpretation**
- Obstruction: Reduced FEV1/FVC ratio
- Severity based on FEV1 % predicted
- Reversibility confirms asthma diagnosis

### Bronchoprovocation Testing

**Indications**
- Normal spirometry but clinical suspicion remains
- Exercise-induced asthma evaluation
- Occupational asthma assessment

**Types**
- Methacholine challenge
- Exercise challenge
- Mannitol challenge

### Additional Diagnostic Tools

**Fractional Exhaled Nitric Oxide (FeNO)**
- Marker of eosinophilic inflammation
- Predicts corticosteroid response
- Levels: <20 (low), 20-49 (intermediate), ≥50 (high)

**Peak Expiratory Flow (PEF) Monitoring**
- Home monitoring of airflow
- Diurnal variability >20% suggests asthma
- Useful for tracking response to therapy

**Impulse Oscillometry**
- Useful in children unable to perform spirometry
- Measures airway resistance and reactance

## Asthma Severity Classification

### Based on Impairment

**Intermittent**
- Daytime symptoms ≤2 days/week
- Nighttime awakenings ≤2/month
- SABA use ≤2 days/week
- Normal FEV1 between episodes

**Mild Persistent**
- Symptoms >2 days/week but not daily
- Nighttime awakenings 3-4/month
- FEV1 ≥80% predicted

**Moderate Persistent**
- Daily symptoms
- Nighttime awakenings >1/week but not nightly
- FEV1 60-80% predicted

**Severe Persistent**
- Symptoms throughout the day
- Nighttime awakenings often 7/week
- FEV1 <60% predicted

### Risk Assessment

- Exacerbations requiring oral corticosteroids
- Emergency visits or hospitalizations
- Progressive loss of lung function
- Treatment side effects

## Pharmacologic Management

### Controller (Maintenance) Medications

**Inhaled Corticosteroids (ICS)**
- First-line for persistent asthma
- Fluticasone, Budesonide, Mometasone, Beclomethasone
- Dose-response relationship plateaus at moderate doses
- Local side effects: dysphonia, oral candidiasis (use spacer/rinse)

**Inhaled Corticosteroids/Long-Acting Beta-Agonists (ICS/LABA)**
- Preferred combination for moderate-severe asthma
- Never use LABA as monotherapy
- Fixed-dose combinations improve adherence
- Options: Fluticasone/Salmeterol, Budesonide/Formoterol, Mometasone/Formoterol

**Leukotriene Receptor Antagonists (LTRA)**
- Montelukast, Zafirlukast
- Alternative to ICS for mild persistent asthma
- Add-on therapy for inadequate control
- Useful for allergic rhinitis comorbidity

**Long-Acting Muscarinic Antagonists (LAMA)**
- Tiotropium
- Add-on for severe asthma
- Alternative to LABA add-on

**Biologics for Severe Asthma**
- Omalizumab (anti-IgE)
- Mepolizumab, Reslizumab, Benralizumab (anti-IL-5)
- Dupilumab (anti-IL-4Rα)

### Reliever (Rescue) Medications

**Short-Acting Beta-Agonists (SABA)**
- Albuterol, Levalbuterol
- As-needed for symptoms
- Over-reliance indicates poor control

**Anticholinergics**
- Ipratropium (SAMA)
- Alternative for SABA-intolerant patients

### SMART/MART Therapy

- Single inhaler: ICS/LABA used both maintenance and reliever
- Budesonide/Formoterol or Mometasone/Formoterol
- Reduces exacerbations compared to SABA reliever

## Management of Special Situations

### Exercise-Induced Bronchoconstriction

**Prevention Strategies**
- Pre-exercise SABA (15-30 min before)
- Regular ICS if frequent symptoms
- Leukotriene modifier
- Warm-up period before intense exercise

### Pregnancy

- Goals: Maintain adequate oxygenation, prevent exacerbations
- Continue ICS (benefits > risks)
- SABA safe
- Avoid leukotriene modifiers if possible
- Monitor closely

### Perioperative Management

- Continue ICS up to surgery
- Preoperative systemic corticosteroids if severe/recent exacerbation
- Postoperative respiratory monitoring

## Asthma Exacerbation Management

### Home Management

**Early Warning Signs**
- Increased SABA use
- Worsening symptoms
- Drop in PEF
- Poor sleep due to symptoms

**Action Steps**
- Increase SABA frequency
- Increase ICS dose (2-4x) if in plan
- Consider oral corticosteroids (prednisone 40-60mg × 5 days)

### When to Seek Emergency Care

- SABA not providing relief
- Walking difficult due to shortness of breath
- Peak flow <50% personal best
- Lips or fingernails blue
- Mental status changes

### Emergency Department Management

- SABA via nebulizer or MDI with spacer
- Systemic corticosteroids
- Oxygen to maintain SpO2 ≥90%
- Consider ipratropium for severe exacerbations
- Magnesium sulfate for severe cases
      `
    },

    advanced: {
      title: 'Advanced Asthma Management',
      description: 'Complex cases, severe asthma, and special populations',
      content: `
# Advanced Asthma Management

## Severe Asthma

### Definition

Asthma that requires:
- High-dose ICS/LABA plus a second controller (and/or systemic corticosteroids)
- To prevent it from becoming uncontrolled or that remains uncontrolled despite this therapy

### Phenotyping Severe Asthma

**Type 2 (T2) Inflammation**
- **Allergic phenotype**: Atopy, elevated IgE, early-onset
- **Eosinophilic phenotype**: Blood/sputum eosinophils, later-onset
- Biomarkers: FeNO, blood eosinophils, periostin

**Non-Type 2 Inflammation**
- **Neutrophilic**: Sputum neutrophils, obesity-related
- **Pauci-granulocytic**: Minimal inflammatory cells
- Often respond poorly to corticosteroids

### Biologic Therapy Selection

**Anti-IgE (Omalizumab)**
- Indication: Moderate-severe allergic asthma (IgE 30-700 IU/mL)
- Dosing based on IgE and weight
- Reduces exacerbations by ~25%
- Consider in patients with perennial allergen sensitization

**Anti-IL-5 (Mepolizumab, Reslizumab, Benralizumab)**
- Indication: Severe eosinophilic asthma (blood eosinophils ≥150/μL)
- Mepolizumab: 100mg SC q4weeks
- Reslizumab: 3mg/kg IV q4weeks
- Benralizumab: 30mg SC q4-8weeks (directly depletes eosinophils)
- Reduce exacerbations by 40-50%

**Anti-IL-4Rα (Dupilumab)**
- Indication: Moderate-severe eosinophilic asthma or oral steroid-dependent
- 400mg SC q2weeks (then q4weeks)
- Also improves comorbid atopic dermatitis, CRSwNP
- Significant improvement in FEV1

**Anti-TSLP (Tezepelumab)**
- Indication: Severe asthma (not limited to T2)
- Works upstream of T2 inflammation
- May benefit non-T2 phenotypes

### Biologic Selection Algorithm

1. Confirm severe asthma with adherence optimized
2. Identify phenotype (T2 vs. non-T2)
3. For T2-high:
   - Allergic: Omalizumab
   - Eosinophilic: Anti-IL-5 or Dupilumab
   - Consider comorbid conditions (AD, CRSwNP)
4. For T2-low: Clinical trial or consider Tezepelumab

## Difficult-to-Treat Asthma

### Evaluation of "Difficult" Asthma

**Before Severe Asthma Diagnosis**
1. Confirm diagnosis (spirometry, objective data)
2. Assess adherence and inhaler technique
3. Identify ongoing triggers (allergen, irritant)
4. Screen for comorbidities
5. Evaluate for alternative diagnoses

### Common Comorbidities Affecting Control

**Upper Airway Disease**
- Allergic rhinitis: Treat with nasal steroids, antihistamines
- Chronic rhinosinusitis: ENT evaluation, consider surgery
- Nasal polyps: Dupilumab or surgery

**Gastroesophageal Reflux**
- Consider pH monitoring, impedance testing
- Trial of PPI if symptomatic

**Obstructive Sleep Apnea**
- Screen with STOP-BANG questionnaire
- Polysomnography if suspected

**Psychological Factors**
- Anxiety/depression: Screen with PHQ-9, GAD-7
- Poor symptom perception
- dysfunctional breathing

**Obesity**
- Mechanical effects on lung function
- Systemic inflammation
- Reduced steroid responsiveness

### Alternative Diagnoses to Consider

**Vocal Cord Dysfunction**
- Stridor, throat tightness
- Normal spirometry, flattened inspiratory loop
- Laryngoscopy for diagnosis

**Dysfunctional Breathing**
- Throat symptoms, air hunger
- Nijmegen questionnaire screening
- Breathing retherapy

**Cardiovascular Causes**
- CHF, arrhythmias
- BNP, echocardiography

**COPD/Asthma Overlap**
- Age >40, significant smoking history
- Fixed obstruction with reversibility

**Bronchiectasis**
- Recurrent infections
- CT chest for diagnosis

**Foreign Body Aspiration**
- Sudden-onset unilateral symptoms
- CT or bronchoscopy

## Special Populations

### Pediatric Asthma

**Age-Specific Considerations**
- <5 years: Diagnosis challenging (spirometry not possible)
- Viral-induced wheezing common
- Episodic vs. persistent phenotypes

**Treatment Approaches**
- Intermittent ICS for viral-induced wheeze (controversial)
- Daily ICS for persistent symptoms
- Nebulizer vs. MDI with spacer: spacer preferred

**Prognosis**
- Many improve with age
- Risk factors for persistence: severe symptoms, atopy, parental asthma
- Lung function trajectory concerns

### Elderly

**Diagnostic Challenges**
- COPD overlap
- Comorbidities
- Reduced perception of symptoms

**Treatment Considerations**
- Increased steroid side effects (osteoporosis, cataracts)
- Polypharmacy and drug interactions
- Physical limitations affecting device use

### Athletes

**High Prevalence of EIB**
- Up to 50% in elite athletes
- Winter sports: skiing, figure skating
- Chlorinated pool exposure

**Management**
- Pre-exercise SABA or LABA
- Daily ICS if frequent
- Doping regulations (therapeutic use exemption)

## Occupational Asthma

### Types

**Immunologic (Sensitizer-Induced)**
- Latex, flour, wood dust, isocyanates
- Latency period between exposure and symptoms
- May persist after exposure cessation

**Non-Immunologic (Irritant-Induced)**
- Reactive Airways Dysfunction Syndrome (RADS)
- Single high-dose exposure
- No latency period

### Evaluation

- Detailed occupational history
- Serial PEF monitoring at work vs. away
- Specific inhalation challenge (gold standard, limited availability)
- Methacholine challenge

### Management

- Remove from exposure if possible
- Standard asthma medications
- Early removal improves prognosis

## Steroid-Sparing Strategies

### Indications for Steroid Sparing

- Chronic oral corticosteroid use
- Significant steroid side effects
- Osteoporosis, diabetes, hypertension, cataracts

### Options

1. **Optimize ICS dose**: Ensure proper technique, adherence
2. **Add LAMA**: Tiotropium add-on
3. **Macrolide antibiotics**: Azithromycin (anti-inflammatory)
4. **Biologics**: Can eliminate steroid requirement
5. **Bronchial thermoplasty**: For severe refractory cases

### Bronchial Thermoplasty

- Radiofrequency energy to airway smooth muscle
- 3 procedures, 3 weeks apart
- Reduces exacerbations in select patients
- Not for T2-high, biomarker-elevated patients
      `
    },

    expert: {
      title: 'Expert-Level Asthma Knowledge',
      description: 'Current research, emerging therapies, and future directions',
      content: `
# Expert-Level Perspectives on Asthma

## Molecular Mechanisms and Pathogenesis

### Epithelial-Mesenchymal Trophic Unit (EMTU)

**Structural Interactions**
- Airway epithelium → fibroblasts → smooth muscle
- Dysregulated repair and remodeling
- Growth factors: TGF-β, FGF, PDGF
- Matrix metalloproteinases (MMPs) and TIMPs

**Epithelial Alarmins**
- TSLP (thymic stromal lymphopoietin)
- IL-33
- IL-25
- Bridge innate and adaptive immunity
- Therapeutic targets

### Airway Remodeling Pathophysiology

**Components**
- Subepithelial fibrosis (reticular basement membrane thickening)
- Increased smooth muscle mass
- Angiogenesis
- Goblet cell hyperplasia
- Mucus gland hypertrophy

**Consequences**
- Fixed airflow obstruction
- Reduced bronchodilator reversibility
- Accelerated FEV1 decline
- Corticosteroid resistance

### Genetics and Epigenetics

**GWAS-Identified Loci**
- IL33, IL1RL1, TSLP, RORA, ORM1L3
- ORMDL3 (eosinophil regulation)
- CDHR3 (rhinovirus susceptibility)

**Epigenetic Regulation**
- DNA methylation changes
- Histone modifications
- MicroRNA regulation (miR-21, miR-146a)
- Transgenerational effects

**Pharmacogenetics**
- ADRB2 polymorphisms (Arg16Gly)
- CRHR1 variants (steroid response)
- TBX21 promoter polymorphisms

## Precision Medicine and Biomarkers

### Biomarker-Driven Therapy

**Type 2 Inflammation Biomarkers**

*Blood Eosinophils*
- Readily available
- Cut-points: ≥150, ≥300, ≥500/μL
- Predicts response to anti-IL-5, ICS
- Limitations: diurnal variation, steroid effect

*Fractional Exhaled Nitric Oxide (FeNO)*
- T2 inflammation marker
- Predicts ICS response
- Less affected by steroids
- Limitations: smoking, technique

*Sputum Eosinophils*
- Gold standard for airway inflammation
- Direct measurement
- Limited availability, technically demanding
- Serial measurements guide therapy (sputum-guided)

*Serum Periostin*
- T2 inflammation marker
- Predicts steroid and biologic response
- Limited clinical availability
- Variability and cutoff issues

**Composite Biomarker Approaches**
- Combining multiple T2 markers improves prediction
- Blood eosinophils + FeNO + IgE
- Machine learning integration

### Omics-Based Stratification

**Transcriptomics**
- Airway epithelial gene signatures
- T2-high vs. T2-low endotypes
- Predicts biologic response

**Proteomics**
- Sputum proteomic profiles
- Inflammatory protein clusters
- Novel therapeutic targets

**Metabolomics**
- Breath volatile organic compounds
- Exhaled breath condensate
- Lipid mediator profiles

### Machine Learning Applications

**Phenotype Clustering**
- Unsupervised learning identifies novel subgroups
- sputum transcriptomics (SARP, U-BIOPRED)
- Clinical parameter clustering
- Overcomes traditional classification limitations

**Predictive Models**
- Exacerbation risk prediction
- Treatment response forecasting
- Biomarker integration

## Therapeutic Innovation Frontiers

### Novel Biologic Targets

**Anti-Alarmins**
- Tezepelumab (anti-TSLP): Approved
- Itepekimab (anti-IL-33): Phase 3
- Brodalumab (anti-IL-17RA): Being evaluated

**Anti-TSLP Mechanism**
- Most upstream T2 target
- Blocks multiple downstream pathways
- Benefits non-T2 phenotypes
- Potential for early intervention

**Other Targets in Development**
- Anti-IL-13 (Tralokinumab, Lebrikizumab)
- Anti-OX40/OX40L
- Anti-TSLP + IL-33 combinations

### Small Molecule Innovations

**CRTH2 Antagonists**
- Fevipiprant, Tibrofan
- Reduce eosinophil recruitment
- Oral administration

**JAK Inhibitors**
- Baricitinib, Tofacitinib
- Broad anti-inflammatory
- Safety concerns

**Prostaglandin D2 Receptor Antagonists**
- Fevipiprant (CRTH2)
- Reduces eosinophilic inflammation

### Novel Delivery Systems

**Nanoparticle Delivery**
- Targeted airway delivery
- Reduced systemic absorption
- Prolonged release

**Inhaler Technology**
- Smart inhalers with adherence monitoring
- Dry powder inhaler optimization
- Soft mist inhalers

**Gene Therapy Approaches**
- IL-10 gene transfer
- Anti-sense oligonucleotides
- CRISPR applications (future)

### Microbiome Modulation

**Gut-Lung Axis**
- Gut microbiome affects airway inflammation
- Antibiotics and diet impact
- Probiotic/prebiotic interventions

**Airway Microbiome**
- Dysbiosis in asthma
- Haemophilus, Moraxella dominance in severe asthma
- Bacteriophage therapy potential

**Therapeutic Approaches**
- Prebiotics
- Probiotics (Lactobacillus, Bifidobacterium)
- Fecal microbiota transplantation (experimental)
- Bacteriophage therapy

## Prevention Strategies

### Primary Prevention

**Allergen Avoidance**
- House dust mite: Mixed evidence
- Pet exposure: Timing critical (first year vs. later)
- Evidence for early allergen exposure (tolerance induction)

**Microbial Exposures**
- Farm effect: Endotoxin exposure
- Older siblings
- Daycare attendance
- Antibiotic avoidance in early life

**Dietary Factors**
- Mediterranean diet: Protective
- Omega-3 fatty acids: Mixed results
- Vitamin D: Supplementation under study
- Breastfeeding: Some protective effect

**Environmental Interventions**
- Air pollution reduction
- Tobacco smoke avoidance
- Green spaces

### Secondary Prevention

**Allergen Immunotherapy**
- Prevents allergic march
- Reduces new sensitisations
- May prevent asthma in children with rhinitis

**Early Intervention**
- Pre-symptomatic biomarker-guided therapy
- High-risk infant identification

## Controversies and Unanswered Questions

### Anti-Inflammatory Dosing

**Low vs. High Dose ICS**
- Efficacy plateau at moderate doses
- High dose: minimal additional benefit, more side effects
- Biomarker-guided dosing?

**Intermittent vs. Daily IICS**
- Pediatric mild intermittent asthma
- MART approach
- Personalized approaches

### SABA Use Controversy

**SABA-Only Risks**
- Increased exacerbation risk
- Mast cell priming
- ICS-formoterol as reliever preferred

### Asthma-COPD Overlap (ACO)

**Definition Issues**
- Lack of consensus criteria
- Heterogeneous populations
- Optimal treatment unknown

**Biologic Response in ACO**
- Overlap patients respond to anti-IL-5
- FeNO and eosinophils predictive

### Long-Term Biologic Therapy

**Duration**
- How long to continue?
- Predictors of remission
- Biomarker-guided discontinuation?

**Cost-Effectiveness**
- High medication costs
- Value-based pricing
- Biomarker-driven selection improves

## Future Directions

### Single-Cell Applications
- Airway epithelial single-cell RNA-seq
- Immune cell heterogeneity
- Novel cell populations

### Organoid Models
- Airway organoids
- Personalized drug testing
- Mechanistic studies

### Digital Health Integration
- Wearable sensors
- Home monitoring
- AI-powered prediction

### Population Health Approaches
- Precision public health
- Geographic variation
- Social determinants of health
      `
    }
  }
}
