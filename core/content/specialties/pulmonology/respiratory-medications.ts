/**
 * Respiratory Medications - Comprehensive Educational Content
 *
 * Covers bronchodilators, corticosteroids, mucolytics, leukotriene
 * modifiers, biologics, and other pharmacotherapies for respiratory
 * diseases including asthma, COPD, and pulmonary hypertension.
 */

import { EducationalContent } from '../../types';

export const respiratoryMedications: EducationalContent = {
  id: 'topic-respiratory-medications',
  type: 'topic',
  name: 'Respiratory Medications',
  alternateNames: [
    'Pulmonary Pharmacology',
    'Respiratory Drugs',
    'Bronchodilators and Anti-Inflammatories',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory medications are drugs that help people breathe better by opening airways, reducing swelling, or thinning mucus in the lungs. They are commonly used for asthma, COPD, and other lung problems.',
      explanation: `**What Are Respiratory Medications?**

Respiratory medications are medicines that help your lungs work better. They treat conditions like asthma, COPD (chronic obstructive pulmonary disease), and other breathing problems.

**Main Types of Respiratory Medicines:**

**1. Quick-Relief Inhalers (Rescue Medicines)**
- Work fast to open airways
- Used when you have trouble breathing
- Examples: albuterol, levalbuterol
- Sometimes called "bronchodilators"

**2. Long-Term Control Inhalers**
- Used every day to prevent breathing problems
- Reduce swelling in airways
- Keep airways open over time
- Examples: fluticasone, budesonide, salmeterol
- Must be used regularly to work

**3. Pills for Breathing:**
- Montelukast (Singulair) - helps with allergies and asthma
- Theophylline - opens airways (less common now)
- Steroid pills - for severe breathing attacks

**4. Other Medicines:**
- Mucolytics - thin mucus so it's easier to cough up
- Antibiotics - for lung infections
- Oxygen - when lungs can't get enough oxygen from air

**How to Use Inhalers:**

**Metered-Dose Inhaler (MDI):**
- Shake the inhaler
- Breathe out completely
- Put mouthpiece in mouth, seal lips
- Press down while breathing in slowly
- Hold breath for 10 seconds
- Wait before next puff

**Dry Powder Inhaler (DPI):**
- Don't shake
- Breathe out completely (away from inhaler)
- Put in mouth
- Breathe in quickly and deeply
- Hold breath

**Nebulizer Machine:**
- Liquid medicine turned into mist
- Breathe in through mask or mouthpiece
- Takes 10-15 minutes
- Used at home, often for severe symptoms

**Important Tips:**

**Use Correctly:**
- Ask your doctor or nurse to watch you use your inhaler
- Practice in front of a mirror
- Use a spacer (chamber) with MDI if available

**Take as Directed:**
- Quick-relief: only when needed
- Control medicines: every day, even when feeling well
- Never share your inhaler with others

**Rinse Mouth:**
- After using steroid inhalers, rinse with water
- Spit out the water (don't swallow)
- Prevents thrush (yeast infection in mouth)

**Keep Track:**
- Note when inhaler is running low
- Get refills before empty
- Keep rescue inhaler with you at all times

**When to Call Your Doctor:**
- Using rescue inhaler more than usual
- Rescue inhaler not helping
- Waking up at night with breathing problems
- Can't do normal activities because of breathing`,
      keyTerms: [
        { term: 'bronchodilator', definition: 'Medicine that opens airways by relaxing muscles around airways', pronunciation: 'brong-ko-DY-lay-ter' },
        { term: 'inhaler', definition: 'Device that delivers medicine directly to lungs as a mist or powder' },
        { term: 'steroid', definition: 'Medicine that reduces swelling and inflammation' },
        { term: 'spacer', definition: 'Tube that holds medicine from inhaler so you can breathe it in more easily' },
        { term: 'nebulizer', definition: 'Machine that turns liquid medicine into mist for breathing' },
      ],
      analogies: [
        'Bronchodilators are like opening a curtain - they pull the airway muscles open to let air flow.',
        'Inhaled steroids are like putting anti-itch cream on a rash - they reduce swelling directly in the airways.',
        'A spacer is like a hallway that gives medicine time to slow down so more gets into your lungs.',
      ],
      examples: [
        'A person with asthma uses albuterol inhaler when they have an asthma attack at school.',
        'Someone with COPD uses two inhalers every day to prevent breathing problems and carries a rescue inhaler.',
      ],
    },
    2: {
      level: 2,
      summary: 'Respiratory pharmacology includes bronchodilators (beta-agonists, anticholinergics), corticosteroids, leukotriene modifiers, and mucolytics. These medications are delivered via inhalers, nebulizers, or oral routes to treat obstructive lung diseases like asthma and COPD.',
      explanation: `## Major Drug Classes

### Short-Acting Bronchodilators (Rescue)

**Short-Acting Beta-Agonists (SABAs):**
- Albuterol (Proventil, Ventolin, ProAir)
- Levalbuterol (Xopenex)
- Onset: Minutes, Duration: 4-6 hours
- Use: As-needed relief of acute symptoms
- Side effects: Tremor, tachycardia, palpitations

**Short-Acting Anticholinergics (SAMAs):**
- Ipratropium (Atrovent)
- Onset: 15-30 minutes, Duration: 4-6 hours
- Use: COPD, alternative for those who can't tolerate SABAs
- Side effects: Dry mouth, urinary retention

### Long-Acting Bronchodilators (Maintenance)

**Long-Acting Beta-Agonists (LABAs):**
- Salmeterol (Serevent)
- Formoterol (Foradil, Perforomist)
- Onset: Formoterol rapid, salmeterol slower
- Duration: 12 hours
- WARNING: Never use alone in asthma (always with steroid)

**Long-Acting Anticholinergics (LAMAs):**
- Tiotropium (Spiriva)
- Umeclidinium (Incruse)
- Glycopyrrolate (Lonhala)
- Duration: 24 hours
- Use: COPD maintenance

**Ultra-LABAs:**
- Indacaterol (Arcapta)
- Olodaterol (Striverdi)
- Duration: 24 hours

### Inhaled Corticosteroids (ICS)

**Drugs:**
- Fluticasone (Flovent)
- Budesonide (Pulmicort)
- Mometasone (Asmanex)
- Beclomethasone (QVAR)
- Ciclesonide (Alvesco)

**Use:**
- Asthma maintenance
- COPD (in combination)
- Reduce airway inflammation
- Decrease exacerbations

**Side effects:**
- Oral candidiasis (thrush) - rinse mouth after use
- Dysphonia (hoarseness)
- Bruising
- Systemic effects at high doses

### Combination Inhalers

**ICS + LABA:**
- Fluticasone/Salmeterol (Advair)
- Budesonide/Formoterol (Symbicort)
- Fluticasone/Vilanterol (Breo)
- Mometasone/Formoterol (Dulera)

**LABA + LAMA:**
- Vilanterol/Umeclidinium (Anoro)
- Olodaterol/Tiotropium (Stioli)
- Formoterol/Glycopyrrolate (Bevespi)

**ICS + LABA + LAMA (Triple Therapy):**
- Fluticasone/Umeclidinium/Vilanterol (Trelegy)

### Other Controllers

**Leukotriene Modifiers:**
- Montelukast (Singulair)
- Zafirlukast (Accolate)
- Zileuton (Zyflo)
- Use: Asthma, allergic rhinitis
- Oral route

**Mast Cell Stabilizers:**
- Cromolyn (Intal)
- Nedocromil (Tilade)
- Rarely used now

**Methylxanthines:**
- Theophylline
- Narrow therapeutic window
- Many drug interactions
- Rarely used due to safety concerns

**Antibodies (Biologics):**
- Omalizumab (Xolair): Anti-IgE
- Mepolizumab (Nucala): Anti-IL-5
- Reslizumab (Cinqair): Anti-IL-5
- Benralizumab (Fasenra): Anti-IL-5 receptor

## Delivery Devices

**Metered-Dose Inhaler (MDI):**
- Propellant-driven
- Requires coordination
- Spacer recommended

**Dry Powder Inhaler (DPI):**
- Breath-activated
- No propellant
- Requires adequate inspiratory flow

**Nebulizer:**
- For severe disease or poor technique
- No coordination required
- Takes 10-15 minutes

## Disease-Specific Therapy

**Asthma:**
- SABA for rescue
- ICS for maintenance (step-up/step-down)
- Consider LABA only with ICS
- Biologics for severe asthma

**COPD:**
- LAMA or LABA first-line
- LAMA + LABA for moderate-severe
- Triple therapy (ICS + LABA + LAMA) for frequent exacerbators
- RoFlumilast (Daliresp) for chronic bronchitis phenotype`,
      keyTerms: [
        { term: 'SABA', definition: 'Short-Acting Beta-Agonist; quick-relief bronchodilator' },
        { term: 'LABA', definition: 'Long-Acting Beta-Agonist; maintenance bronchodilator' },
        { term: 'ICS', definition: 'Inhaled Corticosteroid; anti-inflammatory maintenance medication' },
        { term: 'LAMA', definition: 'Long-Acting Muscarinic Antagonist; anticholinergic bronchodilator' },
        { term: 'candidiasis', definition: 'Thrush; fungal infection in mouth from inhaled steroids', pronunciation: 'kan-dih-DY-ah-sis' },
      ],
      analogies: [
        'SABAs are like firefighter extinguishers - for emergencies only.',
        'ICS are like garden sprinklers - they work continuously to prevent problems.',
        'LABAs are like slow- fertilizers - they maintain effect over long periods.',
      ],
    },
    3: {
      level: 3,
      summary: 'Respiratory pharmacology encompasses multiple drug classes with distinct mechanisms affecting airway smooth muscle tone, inflammation, and mucus secretion. Understanding receptor pharmacology, pharmacokinetics, and evidence-based guidelines for asthma and COPD management optimizes therapeutic outcomes.',
      explanation: `## Pharmacologic Mechanisms

### Beta-Agonists

**Receptor Pharmacology:**
- β2-adrenergic receptors on airway smooth muscle
- Gs-coupled → cAMP increase → protein kinase A activation
- Myosin light chain kinase inhibition → smooth muscle relaxation
- Bronchodilation and mast cell stabilization

**Structure-Activity Relationships:**
| Drug | R-isomer | S-isomer | Notes |
|------|----------|----------|-------|
| Albuterol | Active | Less active | Racemic mixture |
| Levalbuterol | Active only | N/A | Pure R-isomer |
| Salmeterol | Active | Active | Long lipophilic tail |

**Pharmacokinetics:**
- SABA onset: <5 minutes
- Formoterol onset: <5 minutes (unique among LABAs)
- Salmeterol onset: 15-30 minutes
- Duration related to lipophilicity and receptor binding

### Anticholinergics

**Mechanism:**
- Block M3 muscarinic receptors
- Prevent acetylcholine-induced bronchoconstriction
- Reduce mucus secretion
- Vagal tone is major bronchoconstrictor in COPD

**Selectivity:**
- Ipratropium: Non-selective (M1, M2, M3)
- Tiotropium: M1, M3 selective (spares M2)
- Glycopyrrolate: M3 selective

**Systemic effects minimal** due to poor absorption

### Corticosteroids

**Mechanism of Action:**
- Cytoplasmic glucocorticoid receptor binding
- Translocation to nucleus
- Anti-inflammatory gene transcription
- Inhibition of NF-κB, AP-1

**Effects:**
- Reduce cytokine production (IL-4, IL-5, IL-13)
- Decrease inflammatory cell recruitment
- Upregulate β2-receptor expression
- Reduce edema and mucus production

**Why inhaled:**
- Direct delivery to airways
- Minimal systemic effects at low doses
- High doses can cause systemic effects

### Leukotriene Modifiers

**Cysteinyl Leukotrienes (LTC4, LTD4, LTE4):**
- Products of arachidonic acid metabolism
- Cause bronchoconstriction, mucus secretion, vascular permeability
- CysLT1 receptor mediates effects

**Montelukast:**
- CysLT1 receptor antagonist
- Alternative to inhaled steroids
- Less effective than ICS for moderate-severe asthma
- Useful for aspirin-exacerbated respiratory disease

## Asthma Pharmacotherapy

### Stepwise Approach (GINA 2022)

**Preferred Controller Options:**

| Step | Preferred Options | Alternative |
|------|------------------|-------------|
| 1 | As-needed low-dose ICS-formoterol | Regular low-dose ICS + as-needed SABA |
| 2 | Regular low-dose ICS + as-needed ICS-formoterol | Regular medium-dose ICS + as-needed SABA |
| 3 | Medium-dose ICS + LABA | Add LTRA |
| 4 | High-dose ICS + LABA | Add LTRA, consider taper |
| 5 | Refer for specialist care | Add biologic |

**Key Concepts:**
- As-needed ICS-formoterol is now preferred over SABA alone
- SABA-only no longer recommended (increases exacerbation risk)
- Stepping up: Assess adherence, technique, environment first
- Stepping down: Consider after 3 months of control

### Severe Asthma (Biologics)

| Biologic | Target | Indication | Key Feature |
|----------|--------|------------|-------------|
| Omalizumab | IgE | Allergic asthma | Serum IgE level needed |
| Mepolizumab | IL-5 | Eosinophilic asthma | Blood eosinophils ≥150 |
| Reslizumab | IL-5 | Eosinophilic asthma | Blood eosinophils ≥400 |
| Benralizumab | IL-5R | Eosinophilic asthma | Depletes eosinophils |
| Dupilumab | IL-4Rα | T2-high asthma | Also for eczema, polyps |

## COPD Pharmacotherapy

### Initial Therapy (GOLD 2023)

**Group A (Low symptoms, low risk):**
- LAMA or SABA PRN

**Group B (High symptoms, low risk):**
- LAMA or LABA
- LAMA + LABA if symptoms persist

**Group C (Low symptoms, high risk):**
- LAMA + LABA
- ICS + LABA if eosinophils ≥300

**Group D (High symptoms, high risk):**
- LAMA + LABA (preferred)
- Triple therapy (ICS + LABA + LAMA) if:
  - Exacerbations despite dual bronchodilator
  - Blood eosinophils ≥300
- RoFlumilast for chronic bronchitis with exacerbations

### ICS in COPD

**Indications:**
- History of frequent exacerbations
- Blood eosinophils ≥300 cells/μL
- Asthma-COPD overlap
- Consider withdrawal if no benefit

**ICS withdrawal criteria:**
- No exacerbations in past year
- Low eosinophils (<100)
- No asthma component

## Device Selection

**Considerations:**
- Patient preference
- Inspiratory flow (DPI requires adequate flow)
- Manual dexterity (MDI requires coordination)
- Cognitive ability
- Cost

**Spacer/Valved Holding Chamber Benefits:**
- Reduces need for coordination
- Decreases oropharyngeal deposition
- Improves lung delivery
- Essential for MDI in acute settings

## Side Effects and Management

**Common SABA side effects:**
- Tremor: β2-mediated
- Tachycardia: β1 effect at high doses
- Hypokalemia: Intracellular shift
- Tolerance: Tachyphylaxis with overuse

**ICS side effects:**
- Dysphonia: Use spacer, reduce frequency
- Oral candidiasis: Rinse mouth, use spacer
- Bruising: Consider dose reduction
- Systemic effects at high doses: Adrenal suppression, osteoporosis, cataracts

**Anticholinergic side effects:**
- Dry mouth: Most common
- Urinary retention: Especially in men with BPH
- Glaucoma: Theoretical risk, not well-established
- Tachycardia: With high-dose nebulized`,
      keyTerms: [
        { term: 'β2 receptor', definition: 'Beta-2 adrenergic receptor on airway smooth muscle; target of beta-agonists' },
        { term: 'cAMP', definition: 'Cyclic AMP; second messenger that causes smooth muscle relaxation' },
        { term: 'NF-κB', definition: 'Nuclear Factor kappa B; inflammatory transcription factor inhibited by steroids' },
        { term: 'GINA', definition: 'Global Initiative for Asthma; evidence-based asthma guidelines' },
        { term: 'GOLD', definition: 'Global Initiative for Chronic Obstructive Lung Disease; COPD guidelines' },
        { term: 'CysLT1', definition: 'Cysteinyl leukotriene type 1 receptor; target of montelukast' },
      ],
      clinicalNotes: 'ICS-containing inhalers always require mouth rinsing to prevent thrush. LABAs should never be used alone in asthma. Monitor for steroid side effects at high doses. Assess inhaler technique at every visit.',
    },
    4: {
      level: 4,
      summary: 'Advanced respiratory pharmacology integrates understanding of molecular mechanisms, pharmacogenomics, drug interactions, comorbidity considerations, and emerging therapies to optimize management of complex respiratory disease while minimizing adverse effects.',
      explanation: `## Pharmacogenomics and Personalized Medicine

### Beta-Agonist Response Genetics

**ADRB2 Polymorphisms:**
- Arg16Gly (rs1042713)
- Gly16 associated with:
  - Enhanced down-regulation with regular SABA use
  - Possible decreased response
  - Controversial clinical significance

- Gln27Glu (rs1042714)
- May affect bronchodilator response
- Impact modest in clinical practice

### Steroid Pharmacogenomics

**GLCCI1 (rs37973):**
- Associated with steroid response
- Risk allele: Reduced response to ICS
- Potential for personalized steroid dosing

**CRHR1 (rs242941):**
- Corticotropin-releasing hormone receptor
- Predicts steroid response in some studies

### Leukotriene Modifier Genetics

**LTC4 Synthase Promoter:**
- Certain alleles associated with response
- Montelukast response variability
- Limited clinical application currently

## Special Populations

### Pregnancy

**Safe Medications:**
- SABAs: Albuterol (category C)
- ICS: Budesonide preferred (category B)
- Inhaled steroids generally safe
- Systemic steroids: Use only if clearly indicated

**Avoid:**
- Montelukast: Limited data
- Omalizumab: Insufficient data

**Goals:**
- Maintain maternal oxygenation
- Prevent exacerbations (risk to fetus)
- Use medications with known safety

### Hepatic/Renal Impairment

**Hepatic:**
- Metabolism affected for:
  - LABAs (some metabolism)
  - LTRAs (montelukast)
  - RoFlumilast (contraindicated in cirrhosis)
- Inhaled agents generally safe

**Renal:**
- Minimal impact on inhaled drugs
- Theophylline: Dose adjustment
- Systemic steroids: Use caution

### Comorbidities

**Cardiovascular Disease:**
- Beta-agonists: Tachycardia, arrhythmias risk
- Use lowest effective dose
- Consider anticholinergic first in COPD with CAD
- Avoid LABA monotherapy in asthma

**Glaucoma:**
- Anticholinergics: Theoretical risk of angle-closure
- Generally safe with inhaled route
- Monitor in susceptible patients

**BPH:**
- Anticholinergics: Urinary retention risk
- Monitor symptoms
- May need alternative in severe cases

**Osteoporosis:**
- ICS at high doses: Bone loss
- Use lowest effective dose
- Consider monitoring bone density
- Calcium and vitamin D supplementation

## Drug Interactions

### Beta-Agonists

**Contraindicated/Use Caution:**
- Non-selective beta-blockers (propranolol): Bronchoconstriction
- Cardioselective beta-blockers: Generally safe
- MAO inhibitors, TCAs: Potentiate sympathetic stimulation
- Diuretics: Hypokalemia additive

### Theophylline

**Numerous Interactions:**
- Inducers: Smoking, phenobarbital, rifampin → decreased levels
- Inhibitors: Cimetidine, ciprofloxacin, erythromycin → increased levels
- Narrow therapeutic window (10-20 mcg/mL)
- Levels checked if used

### Montelukast

**CYP Interactions:**
- Metabolized by CYP3A4, 2C9
- Inhibitors may increase levels
- Inducers may decrease levels
- Generally minimal clinical interaction

## Advanced Biologics

### Severe Asthma (T2-High)

**Omalizumab (Anti-IgE):**
- Indication: Moderate-severe allergic asthma
- Perennial aeroallergen sensitivity
- Serum IgE 30-700 IU/mL
- Dosing based on IgE and weight
- Effective for nasal polyps

**Anti-IL-5 Family:**
- Mepolizumab, Reslizumab, Benralizumab
- Indication: Severe eosinophilic asthma
- Blood eosinophils ≥150 (mepolizumab, benralizumab)
- Blood eosinophils ≥400 (reslizumab)
- Reduces exacerbations 50%
- OCS-sparing effect

**Anti-IL-4Rα:**
- Dupilumab
- Indication: Moderate-severe asthma, T2-high
- Also effective for eczema, nasal polyps
- Reduces exacerbations, improves FEV1
- Eosinophil elevation expected

### Newer Biologics

**Tezepelumab (Anti-TSLP):**
- Thymic stromal lymphopoietin inhibitor
- Indication: Severe asthma
- Works for both T2-high and T2-low
- Reduces exacerbations

**Mepolizumab for EGPA:**
- Churg-Strauss syndrome
- Eosinophilic granulomatosis with polyangiitis
- Indication for eosinophilic GRPA

## Emerging Therapies

**Bronchial Thermoplasty:**
- Radiofrequency ablation of airway smooth muscle
- For severe persistent asthma
- Reduces exacerbations
- Not for acute management

**Gene Therapy:**
- CFTR modulators for cystic fibrosis:
  - Ivacaftor (Kalydeco)
  - Lumacaftor/Ivacaftor (Orkambi)
  - Elexacaftor/Tezacaftor/Ivacaftor (Trikafta)

**Antifibrotic Agents:**
- For IPF: Nintedanib, Pirfenidone
- Slow decline in lung function
- Used in interstitial lung disease

## Systemic Corticosteroids

**Indications:**
- Acute severe exacerbations
- Maintenance for severe refractory disease
- Bridge while starting biologics

**Complications:**
- Hyperglycemia
- Adrenal suppression
- Osteoporosis
- Weight gain
- Cataracts
- Mood changes
- Muscle weakness

**Osteoporosis Prevention:**
- Calcium 1,000-1,200 mg/day
- Vitamin D 800-1,000 IU/day
- Bisphosphonates if high-risk
- Bone density monitoring

**Steroid-Sparing Strategies:**
- Optimize inhaled therapy
- Add LABA, LAMA
- Use biologics
- Consider macrolides (azithromycin)`,
      keyTerms: [
        { term: 'ADRB2', definition: 'Beta-2 adrenergic receptor gene; polymorphisms affect bronchodilator response' },
        { term: 'GLCCI1', definition: 'Gene variant affecting response to inhaled corticosteroids' },
        { term: 'T2-high', definition: 'Th2-high asthma; eosinophilic/allergic inflammation phenotype' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; cytokine target for severe asthma' },
        { term: 'bronchial thermoplasty', definition: 'Procedure using heat to reduce airway smooth muscle in severe asthma' },
        { term: 'CFTR modulator', definition: 'Medication correcting CFTR protein defect in cystic fibrosis' },
      ],
      clinicalNotes: 'ICS-sparing strategies reduce long-term complications. Biologics selected based on phenotype (allergic vs eosinophilic). Assess steroid exposure annually. Consider osteoporosis screening with chronic steroid use.',
    },
    5: {
      level: 5,
      summary: 'Contemporary respiratory therapeutics integrate novel biologics targeting specific inflammatory pathways, precision medicine approaches based on biomarkers and genomics, evidence-based guideline implementation, and emerging delivery systems to optimize outcomes across the spectrum of respiratory disease.',
      explanation: `## Precision Phenotyping in Respiratory Medicine

### Asthma Endotypes

**T2-High (Type 2 Inflammation):**
- Biomarkers: Blood eosinophils ≥150, FeNO ≥25 ppb
- Sputum: Eosinophils ≥2%
- Responsive to: ICS, biologics
- Subtypes: Allergic, eosinophilic

**T2-Low:**
- Biomarkers: Low eosinophils, low FeNO
- Sputum: Neutrophils or paucigranulocytic
- Poor steroid response
- Subtypes: Neutrophilic, paucigranulocytic
- Biologic options limited

### Biomarker-Guided Therapy

**Blood Eosinophils:**
- ≥150 cells/μL: Consider anti-IL-5
- ≥300 cells/μL: ICS benefit in COPD
- <100 cells/μL: Consider ICS withdrawal

**FeNO (Fractional Exhaled Nitric Oxide):**
- ≥50 ppb: T2 inflammation, steroid responsive
- 25-50 ppb: Indeterminate
- <25 ppb: Unlikely T2-high

**Periostin:**
- T2 inflammation marker
- Predicts biologic response
- Limited clinical use

**Serum IgE:**
- Guides omalizumab dosing
- ≥30 IU/mL: Omalizumab candidate
- ≥70 IU/mL: Strong allergic component

## Advanced Biologics Selection

### Algorithmic Approach

**Step 1: Confirm T2-High**
- Blood eosinophils ≥150 OR FeNO ≥25 OR IgE elevated

**Step 2: Characterize phenotype**

| Phenotype | Preferred Biologic | Alternative |
|-----------|-------------------|-------------|
| Allergic (IgE ↑) | Omalizumab | Dupilumab |
| Eosinophilic | Anti-IL-5 family | Dupilumab, Tezepelumab |
| Nasal polyps | Dupilumab, Omalizumab | Anti-IL-5 |
| Late-onset eosinophilic | Anti-IL-5 family | Tezepelumab |

### Biologic Selection Factors

**Comorbidities guide choice:**
- Atopic dermatitis: Dupilumab
- Nasal polyps: Dupilumab, Omalizumab
- EGPA: Mepolizumab
- Chronic urticaria: Omalizumab

**Practical considerations:**
- Injection frequency (monthly vs. every 2-8 weeks)
- Site of administration (home vs. clinic)
- Cost/insurance coverage
- Monitoring requirements

## COPD Precision Therapy

### Inflammatory Phenotypes

**Eosinophilic:**
- Blood eosinophils ≥300 cells/μL
- Predicts ICS responsiveness
- Higher exacerbation rate on ICS withdrawal
- Consider triple therapy

**Frequent Exacerbator:**
- ≥2 moderate or ≥1 severe exacerbation/year
- Triple therapy consideration
- RoFlumilast for chronic bronchitis phenotype

### Blood Eosinophil Thresholds

| Threshold | Implication |
|-----------|-------------|
| <100 | ICS unlikely beneficial, avoid ICS |
| 100-300 | ICS may be beneficial |
| >300 | ICS likely beneficial, reduces exacerbations |

### Alpha-1 Antitrypsin Deficiency

**Screening:**
- All COPD patients
- Family history
- Early-onset COPD
- Basal panacinar emphysema

**Replacement Therapy:**
- Augmentation therapy (Prolastin, others)
- IV weekly or monthly
- Slows emphysema progression
- Expensive, specialized centers

## Emerging Therapeutics

### Newer Biologics

**Tezepelumab (Anti-TSLP):**
- Cytokine at top of T2 cascade
- Effective in T2-high and some T2-low
- Reduces exacerbations regardless of biomarker
- Monthly subcutaneous injection

**Itacitinib (JAK inhibitor):**
- Under investigation for asthma
- Oral administration
- Multiple cytokine pathway inhibition

### Gene Therapy for CF

**Triple Combination (elexacaftor/tezacaftor/ivacaftor):**
- 90% of CF patients have at least one eligible mutation
- Improves FEV1 10-15%
- Reduces exacerbations 63%
- Improves quality of life

### Antifibrotics

**Nintedanib:**
- Tyrosine kinase inhibitor
- Indicated for IPF, other progressive fibrosing ILDs
- Slows FVC decline by ~50%
- Side effects: Diarrhea, liver toxicity

**Pirfenidone:**
- Mechanism not fully understood
- Indicated for IPF
- Similar efficacy to nintedanib
- Side effects: Photosensitivity, nausea

## Implementation Science

### Guideline-Directed Therapy

**GINA 2022 Highlights:**
- As-needed ICS-formoterol preferred over SABA alone
- SABA-only no longer recommended
- MART (maintenance and reliever therapy) concept
- Track 1 (preferred) vs Track 2 (alternative)

**GOLD 2023 Updates:**
- Non-diagnostic table for diagnosis (symptoms + risk factors)
- Blood eosinophils guide ICS use
- Single inhaler triple therapy
- Exacerbation prevention emphasis

### Digital Health Technologies

**Smart Inhalers:**
- Track adherence
- Remind patients to use
- Detect inhalation technique
- Transmit data to clinicians

**Telemedicine for Respiratory:**
- Virtual visits for stable disease
- Home monitoring platforms
- Remote symptom tracking
- Digital spirometry

### Adherence Strategies

**Simplification:**
- Once-daily dosing when possible
- Single inhaler vs. multiple
- Align with daily routine

**Education:**
- Teach-back technique
- Regular technique review
- Understanding benefits

**Monitoring:**
- Prescription refill records
- Digital inhaler data
- Rescue inhaler use frequency

## Future Directions

**Gene Editing:**
- CRISPR for CF mutations
- Early-stage research

**Regenerative Medicine:**
- Lung transplantation alternatives
- Stem cell therapy

**Vaccines:**
- RSV vaccines for adults
- COVID-19 boosters
- Universal flu vaccines

**Novel Delivery Systems:**
- Nanoparticle delivery
- Long-acting formulations (monthly, quarterly)
- Targeted lung delivery`,
      keyTerms: [
        { term: 'T2-high', definition: 'Type 2 high asthma phenotype; allergic/eosinophilic inflammation' },
        { term: 'endotype', definition: 'Subtype of disease defined by distinct pathophysiological mechanisms' },
        { term: 'MART', definition: 'Maintenance and Reliever Therapy; using ICS-formoterol for both maintenance and rescue' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of T2 inflammation' },
        { term: 'augmentation therapy', definition: 'IV replacement of alpha-1 antitrypsin in deficiency' },
        { term: 'smart inhaler', definition: 'Inhaler with electronic monitoring of use and adherence' },
      ],
      clinicalNotes: `Clinical implementation:

1. **Phenotype before prescribing biologics**: Assess biomarkers, comorbidities

2. **Monitor adherence**: Digital inhalers, pharmacy refill data, self-report

3. **Review inhaler technique**: At every visit; most patients have errors

4. **Deprescribe when appropriate**: ICS withdrawal in COPD if low eosinophils and no exacerbations

5. **Consider comorbidities**: Eczema, nasal polyps guide biologic selection

6. **Steroid minimization**: Goal of biologic therapy is OCS reduction

7. **Vaccinate**: All respiratory patients should receive pneumococcal, influenza, COVID, RSV (if eligible) vaccines`,
    },
  },

  media: [
    {
      id: 'respiratory-inhaler-types',
      type: 'diagram',
      filename: 'inhaler-types.svg',
      title: 'Respiratory Inhaler Types',
      description: 'MDI, DPI, and nebulizer delivery systems',
    },
    {
      id: 'asthma-stepwise-approach',
      type: 'diagram',
      filename: 'asthma-stepwise-approach.svg',
      title: 'Asthma Stepwise Treatment Approach',
      description: 'GINA stepwise approach to asthma management',
    },
    {
      id: 'copd-treatment-algorithm',
      type: 'diagram',
      filename: 'copd-treatment-algorithm.svg',
      title: 'COPD Treatment Algorithm',
      description: 'GOLD groups and treatment recommendations',
    },
  ],

  citations: [
    {
      id: 'gina-2022',
      type: 'article',
      title: 'Global Strategy for Asthma Management and Prevention',
      source: 'Global Initiative for Asthma',
      url: 'https://ginasthma.org',
    },
    {
      id: 'gold-2023',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      source: 'Global Initiative for Chronic Obstructive Lung Disease',
      url: 'https://goldcopd.org',
    },
    {
      id: 'ers-asthma-guidelines',
      type: 'article',
      title: 'ERS/ATS Guidelines on Severe Asthma',
      source: 'European Respiratory Journal',
    },
  ],

  crossReferences: [
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
    { targetId: 'condition-interstitial-lung-diseases', targetType: 'condition', relationship: 'related', label: 'Interstitial Lung Disease' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'pharmacology', 'asthma', 'COPD', 'therapeutics'],
    keywords: ['bronchodilator', 'steroid', 'inhaler', 'biologic', 'LABA', 'LAMA', 'ICS'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryMedications;
