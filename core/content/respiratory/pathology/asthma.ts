/**
 * Asthma - Respiratory Pathology
 *
 * Comprehensive coverage of asthma pathophysiology, clinical features,
 * diagnosis, and management across all complexity levels.
 */

import { EducationalContent } from '../../types';

export const asthmaContent: EducationalContent = {
  id: 'respiratory-asthma',
  type: 'condition',
  name: 'Asthma',
  alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease', 'Asthmatic Bronchitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Asthma is a condition where the airways in your lungs get swollen, narrow, and make extra mucus, making it hard to breathe.',
      explanation: `## What Is Asthma?

Asthma is a lung condition that makes breathing difficult. It happens when the airways (tubes that carry air to your lungs) react too strongly to certain things.

### What Happens in Your Airways

**Normal Airways:**
- Wide open tubes
- Air flows easily
- No extra mucus
- Breathing feels normal

**During an Asthma Attack:**
- Airway walls swell up
- Muscles around airways tighten
- Extra sticky mucus is made
- Airways become very narrow
- Hard to get air in and out

### Common Triggers

**Things That Start Attacks:**
- Dust and dust mites
- Pet fur or feathers
- Pollen from plants
- Cold air
- Exercise
- Smoke
- Strong smells
- Colds and flu

### Signs and Symptoms

**What You Might Feel:**
- Wheezing (whistling sound when breathing)
- Coughing, especially at night
- Chest feels tight
- Short of breath
- Hard time doing activities

**Severe Attack Warning Signs:**
- Very hard to breathe
- Cannot talk in full sentences
- Lips or fingernails turn blue
- Quick relief medicine does not help

### Treatment

**Quick-Relief Medicines:**
- Used during attacks
- Work in minutes
- Open up airways fast
- Often in an inhaler

**Controller Medicines:**
- Taken every day
- Prevent attacks
- Reduce swelling
- Keep airways calm

**Avoiding Triggers:**
- Know your triggers
- Stay away from them
- Keep home clean
- Plan for exercise

### Living with Asthma

**What You Can Do:**
- Take medicines as prescribed
- Keep rescue inhaler nearby
- Know your action plan
- Track your symptoms
- See your doctor regularly`,
      keyTerms: [
        { term: 'airways', definition: 'The tubes in your lungs that carry air' },
        { term: 'trigger', definition: 'Something that starts an asthma attack' },
        { term: 'inhaler', definition: 'A device that sends medicine directly into your lungs' },
        { term: 'wheezing', definition: 'A whistling sound when breathing out' },
        { term: 'asthma attack', definition: 'When asthma symptoms suddenly get much worse' },
      ],
      analogies: [
        'Airways during an asthma attack are like a garden hose being squeezed - less space for air to flow through.',
        'Mucus in asthma is like traffic blocking a road - it makes it harder for air to get where it needs to go.',
        'Quick-relief inhalers are like firefighters putting out a fire - they work fast in emergencies.',
      ],
      examples: [
        'A child might have an asthma attack after playing with a friend who has a cat.',
        'Someone with asthma might cough more at night or early morning when symptoms often get worse.',
      ],
      patientCounselingPoints: [
        'Always carry your rescue inhaler with you',
        'Take controller medicines every day, even when you feel fine',
        'Know your triggers and try to avoid them',
        'Have an asthma action plan and share it with family and school',
      ],
    },
    2: {
      level: 2,
      summary: 'Asthma is a chronic inflammatory airway disease characterized by reversible bronchoconstriction, airway hyperreactivity, and variable airflow obstruction.',
      explanation: `## Understanding Asthma

### Definition and Pathophysiology

**Key Features:**
- Chronic airway inflammation
- Bronchial hyperresponsiveness
- Variable airflow obstruction
- Usually reversible

**What Happens in the Airways:**
- Inflammation causes swelling
- Smooth muscle contracts
- Mucus glands produce excess mucus
- Airway wall thickening
- All combine to narrow airways

### Types of Asthma

**Allergic (Extrinsic) Asthma:**
- Triggered by allergens
- Often starts in childhood
- Associated with allergies, eczema
- IgE-mediated response

**Non-Allergic (Intrinsic) Asthma:**
- Not triggered by allergens
- Often starts in adulthood
- May be triggered by infections, exercise, cold
- Different inflammatory pattern

**Exercise-Induced Bronchoconstriction:**
- Triggered by physical activity
- Usually worse in cold, dry air
- Symptoms during or after exercise
- Preventable with proper treatment

### Risk Factors

**Host Factors:**
- Family history of asthma
- Personal history of allergies
- Obesity
- Genetic predisposition

**Environmental Factors:**
- Indoor allergens (dust mites, pets, mold)
- Outdoor allergens (pollen)
- Tobacco smoke exposure
- Air pollution
- Respiratory infections

### Symptoms

**Classic Symptoms:**
- Recurrent episodes of wheezing
- Shortness of breath
- Chest tightness
- Cough (especially at night)
- Symptoms vary over time

**Symptom Patterns:**
- Often worse at night
- Triggered by specific exposures
- Improve with bronchodilators
- May be seasonal

### Diagnosis

**Spirometry:**
- FEV1/FVC ratio reduced (<0.70)
- Shows airflow obstruction
- Reversibility with bronchodilator
- FEV1 improvement ≥12% and 200 mL

**Peak Flow Monitoring:**
- Measures airflow at home
- Variability suggests asthma
- Helps track control

**Allergy Testing:**
- Skin prick tests
- Blood tests for specific IgE
- Identifies triggers

### Treatment Goals

**Control Objectives:**
- Minimal or no symptoms
- No nighttime awakenings
- Normal activity levels
- Minimal rescue inhaler use
- Near-normal lung function
- No exacerbations

### Medications

**Relievers (Rescue Medications):**
- Short-acting beta-agonists (SABA)
- Work within minutes
- Albuterol most common
- For acute symptoms

**Controllers (Maintenance Medications):**
- Inhaled corticosteroids (ICS)
- Reduce inflammation
- Taken daily
- Foundation of asthma control

**Combination Therapies:**
- ICS + long-acting beta-agonist (LABA)
- For moderate-severe asthma
- Better control than high-dose ICS alone

### Severity Classification

**Intermittent:**
- Symptoms ≤2 days/week
- Night symptoms ≤2x/month
- SABA use ≤2 days/week

**Persistent (Mild, Moderate, Severe):**
- More frequent symptoms
- Greater impact on daily life
- Requires step-up in controller therapy`,
      keyTerms: [
        { term: 'bronchoconstriction', definition: 'Tightening of the muscles around the airways causing narrowing' },
        { term: 'hyperresponsiveness', definition: 'Airways that react too easily to triggers' },
        { term: 'reversibility', definition: 'Improvement in lung function after bronchodilator treatment' },
        { term: 'inhaled corticosteroids', definition: 'Anti-inflammatory medications breathed into the lungs to control asthma' },
        { term: 'exacerbation', definition: 'A worsening of asthma symptoms requiring change in treatment' },
      ],
      analogies: [
        'Bronchial hyperresponsiveness is like having an overly sensitive car alarm that goes off at the slightest touch.',
        'Controller medications are like taking vitamins - they work best when taken regularly, not just when you feel sick.',
        'The step-wise approach to asthma treatment is like a ladder - you go up when needed and back down when controlled.',
      ],
      examples: [
        'A teenager with allergic asthma might have worse symptoms in spring when pollen counts are high.',
        'Someone with exercise-induced bronchoconstriction might use their rescue inhaler 15 minutes before sports.',
      ],
    },
    3: {
      level: 3,
      summary: 'Asthma involves complex immunological mechanisms with type 2 inflammation, airway remodeling, and distinct phenotypes requiring targeted therapeutic approaches.',
      explanation: `## Asthma Pathobiology

### Immunological Mechanisms

**Type 2 (T2) Inflammation:**
- IL-4, IL-5, IL-13 dominant
- Eosinophilic infiltration
- IgE production
- Most common in allergic asthma

**Th2 Pathway:**
- Allergen presentation by dendritic cells
- Th2 cell activation
- Cytokine release cascade
- Eosinophil recruitment and activation
- IgE-mediated mast cell degranulation

**Non-T2 Inflammation:**
- Neutrophilic or paucigranulocytic
- Less responsive to corticosteroids
- Different treatment considerations
- Often associated with severe asthma

### Airway Remodeling

**Structural Changes:**
- Epithelial damage and shedding
- Subepithelial fibrosis
- Smooth muscle hypertrophy/hyperplasia
- Goblet cell hyperplasia
- Neovascularization
- Potentially irreversible

**Consequences:**
- Fixed airflow obstruction
- Reduced corticosteroid response
- Disease progression
- Reduced lung function over time

### Phenotypes and Endotypes

**T2-High Asthma:**
- Eosinophilic inflammation
- Allergic triggers common
- Better ICS response
- Biomarkers: high FeNO, blood eosinophils

**T2-Low Asthma:**
- Non-eosinophilic (neutrophilic/paucigranulocytic)
- Often later onset
- Poor ICS response
- May respond to macrolides

**Specific Phenotypes:**
- Early-onset allergic
- Late-onset eosinophilic
- Exercise-induced
- Obesity-related
- Aspirin-exacerbated respiratory disease (AERD)

### Advanced Diagnostics

**Biomarkers:**
- Blood eosinophils (≥300 cells/μL suggests T2)
- Fractional exhaled nitric oxide (FeNO)
- Total and specific IgE
- Sputum eosinophils (research/specialized)

**Pulmonary Function:**
- Pre/post bronchodilator spirometry
- Bronchoprovocation testing
- Methacholine or mannitol challenge
- Exercise challenge testing

**Imaging:**
- CT: air trapping, bronchial wall thickening
- Not routine but may identify complications

### Pharmacotherapy

**GINA Step Approach:**
- Step 1: As-needed low-dose ICS-formoterol
- Step 2: Daily low-dose ICS or as-needed ICS-formoterol
- Step 3: Low-dose ICS-LABA
- Step 4: Medium-dose ICS-LABA
- Step 5: High-dose ICS-LABA + add-on therapies

**Controller Options:**
- Inhaled corticosteroids (beclomethasone, budesonide, fluticasone)
- LABAs (formoterol, salmeterol, vilanterol)
- LAMAs (tiotropium)
- Leukotriene modifiers (montelukast)
- Theophylline (limited use)

**Biologics for Severe Asthma:**
- Omalizumab (anti-IgE)
- Mepolizumab, benralizumab (anti-IL-5/IL-5R)
- Dupilumab (anti-IL-4Rα)
- Tezepelumab (anti-TSLP)

### Acute Exacerbation Management

**Assessment:**
- Severity classification
- Peak flow or FEV1
- Oxygen saturation
- Speaking ability

**Treatment:**
- High-flow oxygen
- Repeated SABA
- Systemic corticosteroids
- Ipratropium in severe cases
- Magnesium sulfate if needed
- Avoid sedatives

### Special Populations

**Asthma in Pregnancy:**
- Maintain optimal control
- ICS considered safe
- Uncontrolled asthma greater risk than medications

**Occupational Asthma:**
- Sensitizer-induced vs irritant-induced
- Early diagnosis critical
- Removal from exposure essential

**Asthma-COPD Overlap:**
- Features of both diseases
- Variable response to treatment
- Requires individualized approach`,
      keyTerms: [
        { term: 'T2 inflammation', definition: 'Type 2 immune response driven by IL-4, IL-5, IL-13 with eosinophilic inflammation' },
        { term: 'airway remodeling', definition: 'Structural changes in the airway wall from chronic inflammation' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of eosinophilic airway inflammation' },
        { term: 'phenotype', definition: 'Observable characteristics of asthma presentation' },
        { term: 'endotype', definition: 'Distinct disease mechanism defining a subtype of asthma' },
      ],
      clinicalNotes: 'FeNO levels >50 ppb in adults suggest T2 inflammation and good ICS response. Blood eosinophils >300 cells/μL identify patients who may benefit from anti-IL-5 biologics if inadequately controlled.',
    },
    4: {
      level: 4,
      summary: 'Advanced asthma pathophysiology encompasses complex neuroimmune interactions, genetic determinants, severe asthma phenotyping, and precision medicine approaches.',
      explanation: `## Advanced Asthma Pathophysiology

### Molecular Pathways

**ILC2 Biology:**
- Innate lymphoid cells
- TSLP, IL-25, IL-33 activation
- Type 2 cytokine production
- Bridge innate and adaptive immunity
- Corticosteroid-resistant features

**Epithelial Barrier:**
- Epithelial-derived alarmins
- TSLP, IL-25, IL-33
- Defective barrier function
- Environmental sensing
- Therapeutic target

**Neurogenic Inflammation:**
- Substance P and neurokinin A
- CGRP release
- Sensory nerve sensitization
- Cough and dyspnea mechanisms

### Genetic Determinants

**GWAS Findings:**
- ORMDL3/GSDMB (17q21)
- IL33 and IL1RL1
- TSLP
- HLA region
- Epithelial genes

**Gene-Environment Interactions:**
- Childhood viral infections
- Tobacco smoke exposure
- Microbiome influences
- Allergen sensitization timing

**Pharmacogenomics:**
- ADRB2 polymorphisms
- GLCCI1 (corticosteroid response)
- CYP2D6 (leukotriene pathway)
- Personalized therapy potential

### Severe Asthma

**Definition:**
- Requires GINA Step 4-5 therapy
- Or systemic corticosteroids >50% of year
- Or uncontrolled despite maximum therapy
- After addressing modifiable factors

**Systematic Evaluation:**
- Confirm diagnosis
- Assess adherence and technique
- Identify and treat comorbidities
- Optimize modifiable factors
- Phenotype determination

**Comorbidities:**
- GERD
- Obesity
- OSA
- Chronic rhinosinusitis
- Vocal cord dysfunction
- Anxiety/depression

### Biologic Selection

**Anti-IgE (Omalizumab):**
- IgE ≥30-1500 IU/mL
- Positive aeroallergen sensitization
- Reduces exacerbations 25-50%

**Anti-IL-5 Pathway:**
- Mepolizumab: anti-IL-5
- Benralizumab: anti-IL-5Rα (direct eosinophil depletion)
- Blood eosinophils ≥150-300 cells/μL
- Reduces exacerbations 50%

**Anti-IL-4Rα (Dupilumab):**
- Blocks IL-4 and IL-13
- Eosinophilic phenotype
- Also effective in atopic dermatitis
- Improves lung function

**Anti-TSLP (Tezepelumab):**
- Broad mechanism
- Effective across phenotypes
- May benefit T2-low asthma
- Emerging data

### Bronchial Thermoplasty

**Mechanism:**
- Radiofrequency energy
- Reduces smooth muscle mass
- Three bronchoscopy sessions
- Targets medium-sized airways

**Evidence:**
- Modest exacerbation reduction
- Improved quality of life
- Careful patient selection
- Limited long-term data

### Difficult-to-Treat vs Severe

**Difficult-to-Treat:**
- Modifiable factors present
- Poor adherence
- Incorrect technique
- Untreated comorbidities
- May improve with optimization

**True Severe Asthma:**
- Remains uncontrolled after optimization
- Requires biologic or additional therapy
- About 5-10% of asthma population
- Disproportionate healthcare utilization

### Future Directions

**Novel Targets:**
- Anti-IL-33 (itepekimab, etokimab)
- Anti-CRTH2 (fevipiprant)
- JAK inhibitors
- Epithelial repair strategies

**Precision Medicine:**
- Biomarker-guided treatment
- Composite algorithms
- Prediction of response
- Treatment de-escalation strategies

### Asthma Emergencies

**Status Asthmaticus:**
- Life-threatening exacerbation
- Not responding to initial treatment
- Requires intensive care

**Near-Fatal Asthma:**
- Hypercapnia or respiratory arrest
- Identifies high-risk patients
- Requires aggressive management plan

**Risk Factors for Death:**
- Previous near-fatal attack
- ICU admission for asthma
- Poor adherence
- Excessive SABA use
- Lack of ICS use
- Psychosocial factors`,
      keyTerms: [
        { term: 'ILC2', definition: 'Type 2 innate lymphoid cells that produce type 2 cytokines without antigen-specific receptors' },
        { term: 'alarmins', definition: 'Epithelial-derived cytokines (TSLP, IL-25, IL-33) that initiate type 2 inflammation' },
        { term: 'bronchial thermoplasty', definition: 'Bronchoscopic procedure using radiofrequency to reduce airway smooth muscle' },
        { term: 'status asthmaticus', definition: 'Severe, life-threatening asthma attack not responding to standard treatment' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response' },
      ],
      clinicalNotes: 'Before initiating biologics for severe asthma, systematically address treatable traits including inhaler technique, adherence, smoking cessation, weight management, and treatment of comorbidities. Many patients improve with optimization alone.',
    },
    5: {
      level: 5,
      summary: 'Expert-level asthma management integrates cutting-edge research on disease mechanisms, treatable traits paradigm, biomarker-guided precision therapy, and health systems approaches to severe disease.',
      explanation: `## Expert Asthma Management

### Advanced Pathobiology

**Epithelial-Mesenchymal Unit:**
- Epithelial injury and repair
- Subepithelial fibroblast activation
- Myofibroblast differentiation
- TGF-β signaling
- EMT in severe disease

**Smooth Muscle Biology:**
- Phenotype switching
- Secretory functions
- Proliferation mechanisms
- Calcium signaling
- Novel therapeutic targets

**Nerve-Immune Interactions:**
- Neuropeptide release
- Neurogenic switching
- Mast cell-nerve interactions
- Itch and cough pathways

### Single-Cell Perspectives

**Epithelial Heterogeneity:**
- Basal, ciliated, secretory cells
- Club cells and neuroendocrine cells
- Tuft cells and ionocytes
- Disease-specific populations

**Immune Cell Landscape:**
- Resident memory T cells
- Regulatory T cell dysfunction
- Macrophage polarization
- Dendritic cell subsets

### Treatable Traits Approach

**Pulmonary Traits:**
- Airflow limitation
- Eosinophilic inflammation
- Exercise limitation
- Sputum production

**Extrapulmonary Traits:**
- Nasal disease
- GERD
- Obesity
- OSA
- Anxiety/depression
- Vocal cord dysfunction

**Behavioral/Risk Factors:**
- Smoking
- Poor adherence
- Incorrect technique
- Environmental exposures

### Biomarker-Guided Therapy

**Composite Biomarkers:**
- Blood eosinophils + FeNO + IgE
- Periostin (tissue eosinophilia)
- DPP-4 as IL-13 marker
- Predictive algorithms

**Treatment Response Prediction:**
- Baseline eosinophils predict anti-IL-5 response
- FeNO predicts ICS response
- Periostin predicts lebrikizumab response
- Emerging machine learning approaches

**Treatment Monitoring:**
- Biomarker changes with therapy
- Optimal targets unknown
- Personalized goals

### Remission as a Goal

**Clinical Remission:**
- No symptoms
- No exacerbations
- Stable lung function
- Minimal medication requirements

**Deep Remission:**
- Normal FeNO
- Normal sputum eosinophils
- Absence of inflammation
- Disease modification potential

**Complete Remission:**
- Off all medications
- Sustained absence of disease
- Rare with current therapies
- Future goal

### Severe Asthma Networks

**Registry Importance:**
- Severe Asthma Research Program (SARP)
- U-BIOPRED
- UBIOPRED clustering
- Real-world evidence

**Cluster Analysis:**
- Data-driven phenotyping
- Treatment response patterns
- Outcome prediction
- Novel subgroups

### Health Systems Approaches

**Severe Asthma Centers:**
- Multidisciplinary teams
- Systematic evaluation
- Biologic access
- Research integration

**Quality Indicators:**
- Exacerbation rates
- OCS exposure
- Healthcare utilization
- Patient-reported outcomes

**Cost-Effectiveness:**
- Biologic therapy value
- Direct vs indirect costs
- Quality-adjusted life years
- Societal perspective

### Research Frontiers

**Disease Modification:**
- Early intervention trials
- Preventing progression
- Reversing remodeling
- Allergen immunotherapy

**Novel Biologics:**
- Anti-IL-33 trials
- Bispecific antibodies
- Next-generation anti-IL-5
- Oral biologics

**Small Molecules:**
- JAK inhibitors
- PI3K inhibitors
- PDE4 inhibitors
- Novel anti-inflammatories

**Digital Health:**
- Smart inhalers
- Remote monitoring
- Prediction algorithms
- Personalized feedback

### Global Perspectives

**GINA Implementation:**
- Resource-tiered recommendations
- Essential medicines
- Primary care capacity
- Specialist referral criteria

**Disparities:**
- Racial/ethnic differences
- Socioeconomic factors
- Environmental justice
- Access to biologics

**Emerging Markets:**
- Generic biologics (biosimilars)
- Novel delivery systems
- Telemedicine integration
- Capacity building

### Future Paradigms

**Precision Medicine:**
- Multi-omic profiling
- AI-driven prediction
- N-of-1 trials
- Adaptive algorithms

**Prevention:**
- Birth cohort studies
- Microbiome modification
- Early allergen exposure
- Viral prophylaxis

**Cure Potential:**
- Tolerance induction
- Regulatory T cell therapy
- Gene editing approaches
- Tissue regeneration`,
      keyTerms: [
        { term: 'treatable traits', definition: 'Identifiable therapeutic targets across pulmonary, extrapulmonary, and behavioral domains' },
        { term: 'clinical remission', definition: 'Absence of symptoms, exacerbations, and airway inflammation with minimal treatment' },
        { term: 'U-BIOPRED', definition: 'Unbiased BIOmarkers for the PREDiction of respiratory disease outcomes; major European severe asthma cohort' },
        { term: 'biosimilars', definition: 'Biologic medicines highly similar to approved reference products with no clinically meaningful differences' },
        { term: 'disease modification', definition: 'Treatment that alters the underlying disease course rather than just managing symptoms' },
      ],
      clinicalNotes: `Key clinical insights in asthma management:

1. **Biologic selection:** While multiple biologics show similar efficacy in population-level trials, individual response varies. Consider overlap indications (dupilumab for atopic dermatitis, omalizumab for chronic urticaria) when selecting therapy.

2. **Super-responders:** Some patients show dramatic response to biologics with near-complete disease control. Identifying predictors of super-response is an active research area.

3. **Biologic sequencing:** Limited data guides switching between biologics. Consider mechanism of action, baseline biomarker profile, and comorbidities. Wash-out may not be necessary.

4. **Stepping down therapy:** After 12 months of good control, consider reducing ICS dose (not stopping) while maintaining biologic. Step-down of biologics under investigation.

5. **T2-low severe asthma:** Remains a therapeutic challenge. Macrolides may help some patients. Anti-TSLP shows promise across phenotypes.

6. **Vocal cord dysfunction:** Common mimic and comorbidity. Speech pathology referral and laryngoscopy essential for diagnosis.

7. **Patient-reported outcomes:** Asthma Control Test (ACT), Asthma Quality of Life Questionnaire (AQLQ) essential for comprehensive assessment beyond spirometry.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'gina-2024',
      type: 'website',
      title: 'Global Strategy for Asthma Management and Prevention',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA',
      url: 'https://ginasthma.org',
    },
    {
      id: 'lancet-severe-asthma',
      type: 'article',
      title: 'Severe asthma',
      authors: ['Chung KF', 'Wenzel SE', 'Brozek JL', 'et al.'],
      source: 'European Respiratory Journal',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'allergy-allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
    { targetId: 'respiratory-lung-function', targetType: 'concept', relationship: 'related', label: 'Lung Function' },
    { targetId: 'pharmacology-bronchodilators', targetType: 'concept', relationship: 'related', label: 'Bronchodilators' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pulmonology', 'allergy', 'immunology'],
    keywords: ['asthma', 'bronchoconstriction', 'wheeze', 'inhaler', 'corticosteroids', 'biologics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default asthmaContent;
