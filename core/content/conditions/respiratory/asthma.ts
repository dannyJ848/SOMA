/**
 * Asthma - Comprehensive Educational Content
 *
 * Covers pathophysiology, triggers, diagnosis, and management of asthma.
 */

import { EducationalContent } from '../../types';

export const asthma: EducationalContent = {
  id: 'condition-asthma',
  type: 'condition',
  name: 'Asthma',
  nameEs: 'Asma',
  alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease'],
  hpoId: 'HP:0002099',

  levels: {
    1: {
      level: 1,
      summary: 'Asthma is a condition where your airways get narrow and swollen, making it hard to breathe, especially during an attack.',
      explanation: `Imagine your airways (breathing tubes) are like flexible straws. In asthma, these straws can get squeezed, swollen, and filled with sticky mucus, making it hard for air to get through.

**What happens during an asthma attack?**
- Your airways get tight and narrow
- The lining of your airways swells up
- Extra mucus clogs the airways
- You may wheeze, cough, and feel short of breath

**Common triggers:**
- Allergies (dust, pollen, pet dander)
- Cold air
- Exercise
- Smoke or pollution
- Colds and flu
- Strong emotions or stress

**Warning signs:**
- Wheezing (whistling sound when breathing)
- Coughing, especially at night
- Chest tightness
- Shortness of breath

**Treatment:**
- Quick-relief inhalers (rescue inhalers) for attacks
- Daily controller medicines to prevent attacks
- Avoiding your triggers
- Having an asthma action plan`,
      keyTerms: [
        { term: 'airways', definition: 'The tubes that carry air in and out of your lungs' },
        { term: 'inhaler', definition: 'A device that sprays medicine directly into your airways' },
        { term: 'trigger', definition: 'Something that can start an asthma attack' },
        { term: 'wheeze', definition: 'A high-pitched whistling sound when breathing' },
      ],
      analogies: [
        'Asthma is like trying to breathe through a coffee stirrer instead of a regular straw.',
        'During an attack, airways act like a garden hose with a kink in it - air can barely get through.',
      ],
      examples: [
        'A child who starts coughing and wheezing during gym class may have exercise-induced asthma.',
        'Someone with allergic asthma might have attacks when around cats or during pollen season.',
      ],
    },
    2: {
      level: 2,
      summary: 'Asthma is a chronic inflammatory disease of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and inflammation, presenting with recurrent episodes of wheezing, breathlessness, chest tightness, and coughing.',
      explanation: `## Understanding Asthma

**Three Key Features:**
1. **Airway inflammation** - Airways are constantly inflamed
2. **Bronchial hyperresponsiveness** - Airways overreact to triggers
3. **Reversible airflow obstruction** - Narrowing that improves with treatment

## Types of Asthma

**Allergic (Atopic) Asthma:**
- Most common type
- Triggered by allergens
- Often starts in childhood
- Associated with eczema and allergic rhinitis (atopic triad)

**Non-Allergic Asthma:**
- Triggered by exercise, cold air, stress, infections
- May develop in adulthood

**Occupational Asthma:**
- Caused by workplace exposures
- Improves away from work

## Asthma Severity Classification

| Severity | Symptoms | Nighttime Symptoms | Lung Function |
|----------|----------|-------------------|---------------|
| Intermittent | ≤2 days/week | ≤2x/month | FEV1 ≥80% |
| Mild Persistent | >2 days/week | 3-4x/month | FEV1 ≥80% |
| Moderate Persistent | Daily | >1x/week | FEV1 60-80% |
| Severe Persistent | Throughout day | Often nightly | FEV1 <60% |

## Diagnosis

- **Spirometry** - Measures how much and how fast you can exhale
- **Peak flow meter** - Portable device to monitor airflow at home
- **Bronchodilator response** - Improvement after inhaler confirms diagnosis
- **Allergy testing** - Identifies specific triggers

## Treatment Approach

**Quick-Relief (Rescue) Medications:**
- Short-acting beta-agonists (SABA) like albuterol
- Used during attacks or before exercise

**Long-Term Control Medications:**
- Inhaled corticosteroids (ICS) - reduce inflammation
- Long-acting beta-agonists (LABA) - keep airways open
- Leukotriene modifiers - block inflammatory chemicals
- Combination inhalers (ICS + LABA)`,
      keyTerms: [
        { term: 'bronchial hyperresponsiveness', definition: 'When airways overreact to triggers that would not affect normal airways' },
        { term: 'spirometry', definition: 'A breathing test that measures lung function by how much and how fast air can be exhaled' },
        { term: 'FEV1', definition: 'Forced expiratory volume in one second; amount of air exhaled in the first second of a forced breath' },
        { term: 'inhaled corticosteroid', definition: 'Anti-inflammatory medicine breathed directly into the lungs to prevent asthma symptoms' },
      ],
      analogies: [
        'Bronchial hyperresponsiveness is like having a super-sensitive smoke alarm that goes off when you toast bread.',
        'Controller medications are like daily vitamins for your airways - they work best when taken every day, not just when you feel sick.',
      ],
    },
    3: {
      level: 3,
      summary: 'Asthma involves complex type 2 inflammation with mast cell activation, eosinophilic infiltration, and structural airway remodeling, managed through stepwise pharmacotherapy based on symptom control and risk assessment.',
      explanation: `## Pathophysiology

### Type 2 Inflammatory Response

**Early Phase (Minutes):**
1. Allergen/trigger exposure
2. Mast cell degranulation
3. Release of histamine, leukotrienes, prostaglandins
4. Immediate bronchoconstriction

**Late Phase (4-8 hours):**
1. Recruitment of inflammatory cells
2. Eosinophil infiltration
3. T-helper 2 (Th2) cell activation
4. Cytokine release (IL-4, IL-5, IL-13)
5. Sustained inflammation and mucus hypersecretion

### Airway Remodeling

Chronic inflammation leads to:
- Subepithelial fibrosis
- Smooth muscle hypertrophy
- Goblet cell hyperplasia
- Angiogenesis
- Fixed airway obstruction (irreversible component)

## Diagnosis

### Spirometry Criteria
- FEV1/FVC ratio <0.70 (or below lower limit of normal)
- **Bronchodilator reversibility**: ≥12% AND ≥200 mL increase in FEV1

### Additional Testing
- **Methacholine challenge**: PC20 <4 mg/mL indicates hyperresponsiveness
- **FeNO (Fractional exhaled nitric oxide)**: >50 ppb suggests eosinophilic inflammation
- **Peak expiratory flow variability**: >20% diurnal variation

### Phenotyping
| Phenotype | Characteristics | Biomarkers |
|-----------|----------------|------------|
| Allergic eosinophilic | Atopy, childhood onset | High IgE, eosinophils, FeNO |
| Non-allergic eosinophilic | Adult onset, severe | Eosinophils, FeNO |
| Neutrophilic | Adult onset, smoking-related | Neutrophils, low FeNO |
| Paucigranulocytic | Obesity-related | Low eosinophils/neutrophils |

## Pharmacotherapy

### Stepwise Treatment (GINA Guidelines)

**Step 1:** PRN low-dose ICS-formoterol (preferred) or PRN SABA

**Step 2:** Low-dose ICS + PRN SABA or low-dose ICS-formoterol PRN

**Step 3:** Low-dose ICS-LABA maintenance + PRN SABA or ICS-formoterol PRN

**Step 4:** Medium-dose ICS-LABA + PRN SABA

**Step 5:** High-dose ICS-LABA, add-on therapies (LAMA, biologics)

### Biologic Therapies

| Biologic | Target | Indication |
|----------|--------|------------|
| Omalizumab | IgE | Allergic asthma with elevated IgE |
| Mepolizumab | IL-5 | Severe eosinophilic asthma |
| Benralizumab | IL-5 receptor | Severe eosinophilic asthma |
| Dupilumab | IL-4/IL-13 | Moderate-severe eosinophilic or OCS-dependent |
| Tezepelumab | TSLP | Severe asthma regardless of phenotype |

## Acute Exacerbation Management

**Severity Assessment:**
- Speak in sentences vs. words
- Respiratory rate
- Oxygen saturation
- Peak flow (if obtainable)
- Use of accessory muscles

**Treatment:**
- Repeated SABA (nebulized or MDI with spacer)
- Early systemic corticosteroids
- Ipratropium for severe exacerbations
- Oxygen to maintain SpO2 94-98%
- Magnesium sulfate IV for severe cases`,
      keyTerms: [
        { term: 'Th2 inflammation', definition: 'T-helper type 2 immune response characterized by IL-4, IL-5, IL-13 production, driving eosinophilic inflammation' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of eosinophilic airway inflammation' },
        { term: 'ICS-formoterol', definition: 'Combination of inhaled corticosteroid with fast-acting LABA for maintenance and reliever therapy (MART)' },
        { term: 'airway remodeling', definition: 'Structural changes in airways from chronic inflammation including fibrosis and smooth muscle hypertrophy' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; epithelial cytokine that initiates allergic inflammation' },
      ],
      clinicalNotes: 'FeNO >50 ppb in adults suggests eosinophilic inflammation likely to respond to ICS. Consider biologics when uncontrolled on Step 4-5 therapy with appropriate phenotype. SABA-only treatment is no longer recommended due to increased severe exacerbation risk.',
    },
    4: {
      level: 4,
      summary: 'Asthma encompasses heterogeneous endotypes defined by underlying molecular mechanisms, requiring precision medicine approaches with biomarker-guided therapy, understanding of the type 2-high vs type 2-low paradigm, and management of severe asthma with biologic agents.',
      explanation: `## Advanced Pathophysiology

### Epithelial Barrier Dysfunction

**Alarmin Release:**
- TSLP, IL-25, IL-33 released from damaged epithelium
- Initiate type 2 cascade independent of allergen sensitization
- Target for tezepelumab (anti-TSLP)

**Epithelial-Mesenchymal Crosstalk:**
- Defective barrier function
- Increased permeability to allergens/pollutants
- Reduced antimicrobial peptide production
- Communication with subepithelial fibroblasts

### Type 2-High vs Type 2-Low Asthma

**Type 2-High (50-70% of asthma):**
- Eosinophilic inflammation
- Elevated FeNO, blood eosinophils, periostin
- Responsive to corticosteroids
- Candidates for type 2 biologics

**Type 2-Low (30-50% of asthma):**
- Neutrophilic or paucigranulocytic
- Normal FeNO and eosinophils
- Often corticosteroid-resistant
- Associated with obesity, smoking, infection
- Limited targeted therapy options

### Endotypes

| Endotype | Mechanism | Biomarkers | Treatment |
|----------|-----------|------------|-----------|
| Early-onset allergic | IgE-mediated, Th2 | IgE, eosinophils, FeNO | ICS, omalizumab |
| Late-onset eosinophilic | IL-5-driven, non-allergic | Eosinophils, FeNO | ICS, anti-IL-5 |
| Aspirin-exacerbated (AERD) | COX-1 inhibition, CysLT | Nasal polyps, eosinophils | LTRAs, aspirin desensitization |
| Obesity-related | Mechanical, oxidative stress | Low eosinophils | Weight loss, uncertain |
| Neutrophilic | IL-17, infection-related | Neutrophils | Macrolides?, uncertain |

## Severe Asthma Workup

### Definition (ERS/ATS)
Asthma requiring Step 4-5 therapy to maintain control OR uncontrolled despite this therapy

### Systematic Assessment
1. **Confirm diagnosis** - Spirometry, alternative diagnoses
2. **Assess adherence** - Prescription refill data, FeNO suppression test
3. **Optimize comorbidities** - GERD, rhinosinusitis, obesity, anxiety
4. **Identify triggers** - Occupational, environmental, medications
5. **Phenotype/endotype** - Blood eosinophils, FeNO, IgE, sputum if available

### Biomarker Thresholds for Biologics

| Biomarker | Threshold | Significance |
|-----------|-----------|--------------|
| Blood eosinophils | ≥150 cells/μL (≥300 stronger) | Type 2 inflammation |
| FeNO | ≥25 ppb | Eosinophilic, steroid-responsive |
| Total IgE | 30-1300 IU/mL | Omalizumab eligibility |
| Periostin | Elevated | Type 2 inflammation |

## Biologic Selection Algorithm

**High eosinophils + high FeNO:**
- Anti-IL-5/5R or dupilumab

**High eosinophils + normal FeNO:**
- Anti-IL-5/5R

**Normal eosinophils + high FeNO:**
- Dupilumab

**Allergic + elevated IgE:**
- Omalizumab (or dupilumab if eosinophilic)

**Severe, phenotype-agnostic:**
- Tezepelumab

## Special Considerations

### Asthma-COPD Overlap (ACO)
- Features of both diseases
- Greater symptom burden, more exacerbations
- ICS indicated (unlike pure COPD)
- Consider triple therapy early

### Exercise-Induced Bronchoconstriction
- Occurs during or after exercise
- Related to airway water/heat loss
- Pre-treatment with SABA or ICS-formoterol
- Warm-up may induce refractory period

### Aspirin-Exacerbated Respiratory Disease (AERD)
- Triad: Asthma, nasal polyps, NSAID sensitivity
- Overproduction of cysteinyl leukotrienes
- Management: Leukotriene modifiers, aspirin desensitization, dupilumab
- Avoid all COX-1 inhibitors

### Pregnancy
- Uncontrolled asthma riskier than medications
- Continue ICS (budesonide preferred)
- Step up as needed
- Monitor closely in third trimester`,
      keyTerms: [
        { term: 'alarmin', definition: 'Epithelial-derived cytokines (TSLP, IL-25, IL-33) that initiate type 2 inflammation in response to epithelial damage' },
        { term: 'type 2-low asthma', definition: 'Asthma phenotype without eosinophilic inflammation, often corticosteroid-resistant with limited biologic options' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; clinical triad of asthma, nasal polyps, and NSAID hypersensitivity' },
        { term: 'endotype', definition: 'Subtype of disease defined by distinct underlying molecular mechanism, guiding targeted therapy' },
        { term: 'periostin', definition: 'Matricellular protein elevated in type 2 inflammation, biomarker for IL-13-driven disease' },
      ],
      clinicalNotes: 'Blood eosinophils ≥300 cells/μL is a strong predictor of biologic response. FeNO drops rapidly with ICS adherence - can be used to assess compliance (FeNO suppression test). For AERD, aspirin desensitization at specialized centers can significantly reduce polyp recurrence and improve asthma control.',
    },
    5: {
      level: 5,
      summary: 'Contemporary asthma management integrates molecular phenotyping, treatable traits assessment, precision biologic selection, and emerging therapies targeting novel pathways, with attention to difficult-to-treat asthma complexities, comorbidity management, and optimization of type 2-low disease.',
      explanation: `## Cutting-Edge Pathophysiology

### Neuroimmune Interactions
- Sensory nerves express receptors for type 2 cytokines
- Neuropeptides (substance P, CGRP) amplify inflammation
- Vagal reflexes contribute to bronchoconstriction
- Potential for neuromodulation therapies

### Airway Smooth Muscle Dysfunction
- Intrinsic hypercontractility beyond neural stimulation
- Altered calcium handling
- Proliferative/synthetic phenotype switch
- Bronchial thermoplasty targets ASM reduction

### Microbiome in Asthma
- Reduced airway microbial diversity in severe asthma
- Proteobacteria enrichment associated with corticosteroid resistance
- Gut-lung axis: Early-life antibiotic exposure increases asthma risk
- Potential for microbiome-modulating interventions

### Trained Innate Immunity
- Epigenetic reprogramming of innate immune cells
- "Memory" in ILC2s and mast cells
- Sustained inflammation independent of continued allergen exposure
- May explain persistent inflammation despite allergen avoidance

## Treatable Traits Approach

### Pulmonary Traits
- Airflow limitation → Bronchodilators, biologics
- Eosinophilic inflammation → ICS, anti-IL-5
- Type 2 biomarkers → Dupilumab, tezepelumab
- Mucus hypersecretion → Consider mucolytics
- Bronchiectasis → Airway clearance, treat infections

### Extrapulmonary Traits
- Obesity → Weight management, bariatric surgery
- GERD → PPI therapy, lifestyle modifications
- Rhinosinusitis → Intranasal steroids, surgery, dupilumab
- Anxiety/depression → Mental health support
- Obstructive sleep apnea → CPAP
- Vocal cord dysfunction → Speech therapy

### Behavioral/Risk Traits
- Poor adherence → Electronic monitoring, education
- Poor inhaler technique → Training, device selection
- Smoking → Cessation programs
- Environmental exposures → Remediation, avoidance

## Advanced Biologics and Novel Therapies

### Approved Biologics - Deep Dive

**Omalizumab:**
- Binds free IgE, reduces FcεRI expression
- Dosing based on IgE level and weight
- Reduces mast cell and basophil reactivity
- May have remodeling effects with long-term use

**Anti-IL-5 Pathway:**
- Mepolizumab (anti-IL-5): 100 mg SC monthly
- Reslizumab (anti-IL-5): Weight-based IV q4 weeks
- Benralizumab (anti-IL-5Rα): Induces eosinophil apoptosis (ADCC)
  - Faster eosinophil depletion
  - Every 8 weeks after loading

**Dupilumab:**
- Blocks IL-4Rα (IL-4 and IL-13 signaling)
- Broad type 2 effects: reduces eosinophils, IgE, FeNO
- Approved for asthma, atopic dermatitis, nasal polyps, EoE
- Hypereosinophilia can occur (usually transient)

**Tezepelumab:**
- Anti-TSLP: Upstream epithelial alarmin blockade
- Effective across phenotypes including low eosinophil
- Reduces exacerbations regardless of baseline biomarkers
- First biologic for non-type-2 asthma

### Pipeline Therapies

| Agent | Target | Status | Notes |
|-------|--------|--------|-------|
| Itepekimab | IL-33 | Phase 3 | Alarmin; may help type 2-low |
| Astegolimab | IL-33/ST2 | Phase 3 | Alarmin blocker |
| Fevipiprant | PGD2/CRTH2 | Discontinued | Th2 cell migration |
| Imatinib | c-KIT | Phase 2 | Mast cell inhibition |
| Azithromycin | Immunomodulatory | Used off-label | Neutrophilic asthma |

### Bronchial Thermoplasty

**Mechanism:**
- Radiofrequency ablation of airway smooth muscle
- Three bronchoscopy sessions
- Reduces ASM mass and airway hyperresponsiveness

**Evidence:**
- AIR2 trial: Reduced severe exacerbations, improved AQLQ
- Effects persist at 5-10 years
- Careful patient selection required (not on OCS, FEV1 >60%)

## Difficult-to-Treat vs Severe Asthma

### Distinguishing Features
- **Difficult-to-treat**: Uncontrolled due to modifiable factors
  - Poor adherence (up to 50% of "refractory" patients)
  - Poor technique
  - Untreated comorbidities
  - Persistent triggers
- **Severe asthma**: True refractory despite optimization
  - ~5-10% of all asthma
  - Candidates for biologics/advanced therapies

### Assessment Protocol
1. Electronic monitoring of adherence (>80% = adherent)
2. Observed inhaler technique
3. FeNO suppression test (FeNO should drop with ICS adherence)
4. Systematic comorbidity assessment
5. Bronchoscopy/sputum analysis if available

## Type 2-Low Severe Asthma

### Challenges
- Limited targeted therapies
- Poor corticosteroid response
- Often neutrophilic or paucigranulocytic
- Associated with obesity, smoking, infections

### Current Strategies
- Optimize ICS/LABA (some response possible)
- Add LAMA (tiotropium)
- Consider azithromycin (long-term, reduces exacerbations)
- Weight loss for obesity-related phenotype
- Tezepelumab (only biologic with some type 2-low data)

### Emerging Approaches
- Anti-IL-17 (secukinumab) - Mixed results
- Anti-IL-6 - Under investigation
- JAK inhibitors - Oral, broad anti-inflammatory
- Anti-CXCR2 (neutrophil chemotaxis) - Phase 2

## Precision Medicine and Biomarkers

### Composite Biomarker Scores
- Combined eosinophils + FeNO for treatment decisions
- Periostin, DPP-4 as complementary markers
- Gene expression signatures (e.g., Th2 gene mean)

### Predicting Biologic Response
- Baseline eosinophils strongest predictor for anti-IL-5
- FeNO may predict dupilumab response
- OCS dependence predicts benefit from multiple biologics
- No clear predictors for type 2-low response

### Future Directions
- Single-cell RNA sequencing of airway samples
- Metabolomics/proteomics for endotyping
- AI-driven treatment selection algorithms
- Biomarker-guided step-down protocols`,
      keyTerms: [
        { term: 'treatable traits', definition: 'Precision medicine approach identifying and treating individual phenotypic characteristics contributing to disease burden' },
        { term: 'bronchial thermoplasty', definition: 'Bronchoscopic radiofrequency ablation of airway smooth muscle for severe asthma' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; upstream epithelial alarmin targeted by tezepelumab' },
        { term: 'ILC2', definition: 'Type 2 innate lymphoid cells; tissue-resident cells producing IL-5 and IL-13 without antigen specificity' },
        { term: 'FeNO suppression test', definition: 'Assessment of adherence by measuring FeNO reduction following observed ICS use' },
      ],
      clinicalNotes: `Key clinical pearls for severe asthma:

1. **Rule out pseudo-refractory asthma**: Up to 50% of patients referred to severe asthma clinics are non-adherent. Use electronic monitoring and FeNO suppression testing.

2. **Biologic selection**: For eosinophilic asthma with comorbidities (nasal polyps, AD), dupilumab may treat multiple conditions. For pure eosinophilic asthma, anti-IL-5 agents have strong track record.

3. **Tezepelumab niche**: Consider for patients without clear type 2 biomarkers or those who failed other biologics.

4. **Biologics reduce OCS**: A key goal is OCS elimination. Benralizumab and dupilumab have strongest OCS-sparing data.

5. **Bronchial thermoplasty**: Reserve for highly selected patients (stable, no OCS dependence, adequate lung function) who prefer non-pharmacologic approach.

6. **Azithromycin for neutrophilic asthma**: 250-500 mg three times weekly can reduce exacerbations; monitor for QT prolongation and hearing loss.

7. **Pregnancy counseling**: Biologics have limited but reassuring safety data. Continue if needed for severe asthma control.`,
    },
  },

  media: [
    {
      id: 'asthma-airway-anatomy',
      type: 'diagram',
      filename: 'asthma-airway-comparison.svg',
      title: 'Normal vs Asthmatic Airway',
      description: 'Cross-section showing inflammation, mucus, and bronchoconstriction in asthma',
    },
    {
      id: 'asthma-type2-pathway',
      type: 'diagram',
      filename: 'asthma-type2-inflammation.svg',
      title: 'Type 2 Inflammatory Cascade',
      description: 'Pathway showing alarmins, Th2 cells, eosinophils, and therapeutic targets',
    },
  ],

  citations: [
    {
      id: 'gina-2023',
      type: 'website',
      title: 'Global Strategy for Asthma Management and Prevention (GINA 2023)',
      source: 'Global Initiative for Asthma',
      url: 'https://ginasthma.org',
    },
    {
      id: 'lancet-asthma-2018',
      type: 'article',
      title: 'Asthma',
      authors: ['Papi A', 'Brightling C', 'Pedersen SE', 'Reddel HK'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(17)33311-1',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
    { targetId: 'condition-eczema', targetType: 'condition', relationship: 'related', label: 'Atopic Dermatitis' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pulmonology', 'allergy', 'immunology', 'chronic disease'],
    keywords: ['asthma', 'bronchospasm', 'wheezing', 'inhaler', 'biologics', 'eosinophils'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default asthma;
