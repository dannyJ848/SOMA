/**
 * Asthma - Comprehensive Educational Content
 *
 * Covers pathophysiology, triggers, classification, diagnosis, and management
 * of asthma across all severity levels and phenotypes.
 */

import { EducationalContent } from '../../types';

export const asthma: EducationalContent = {
  id: 'condition-asthma',
  type: 'condition',
  name: 'Asthma',
  alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Asthma is a condition where the airways in your lungs get tight and swollen, making it hard to breathe.',
      explanation: `Imagine your airways (the tubes that carry air to your lungs) are like straws. When you have asthma, three things happen that make it hard for air to get through:

1. **The straw gets squeezed**: The muscles around your airways tighten up, making the opening smaller
2. **The straw gets puffy**: The inside walls swell up, taking up more space
3. **The straw gets sticky**: Your body makes extra mucus that clogs things up

This is why people with asthma might wheeze (make a whistling sound when breathing), cough a lot, or feel like they can't catch their breath.

**What causes asthma attacks?**
Different things can trigger asthma in different people:
- Allergies (pollen, dust, pet fur)
- Catching a cold or flu
- Exercise
- Cold air
- Smoke or strong smells
- Feeling very stressed or upset

**How is asthma treated?**
People with asthma use special medicines, usually through inhalers:
- **Rescue inhalers** (usually blue): Work fast to open airways during an attack
- **Controller inhalers** (often orange or purple): Used every day to prevent attacks

The good news is that with the right treatment, most people with asthma can do everything others can do - including sports!`,
      keyTerms: [
        { term: 'airways', definition: 'The tubes that carry air from your nose and mouth to your lungs' },
        { term: 'inhaler', definition: 'A device that helps you breathe medicine directly into your lungs' },
        { term: 'trigger', definition: 'Something that causes an asthma attack to happen' },
        { term: 'wheeze', definition: 'A whistling or squeaky sound when breathing, caused by narrow airways' },
      ],
      analogies: [
        'Your airways are like a garden hose - when someone steps on it or it gets kinked, less water can flow through. In asthma, your airways get "kinked" by tight muscles and swelling.',
        'An asthma attack is like rush hour traffic - everything slows down because the road (airway) is too crowded.',
      ],
      examples: [
        'A child who starts coughing and wheezing when they play with a friend\'s cat has asthma triggered by pet allergies.',
        'A soccer player who uses their inhaler before games to prevent breathing problems during exercise.',
      ],
    },
    2: {
      level: 2,
      summary: 'Asthma is a chronic inflammatory disease of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway inflammation.',
      explanation: `## What is Asthma?

Asthma is a long-term (chronic) lung disease affecting the bronchial tubes - the airways that carry air in and out of your lungs. It involves three main processes:

### The Three Components of Asthma

1. **Bronchoconstriction**: The smooth muscle around airways contracts, narrowing the airway
2. **Airway Inflammation**: The airway lining becomes red, swollen, and irritated
3. **Mucus Hypersecretion**: Excess mucus is produced, further blocking airflow

### Common Triggers

**Allergic Triggers (most common):**
- Dust mites
- Pollen (trees, grass, weeds)
- Mold spores
- Animal dander (skin flakes, saliva)
- Cockroach allergens

**Non-Allergic Triggers:**
- Respiratory infections (colds, flu)
- Exercise (especially in cold, dry air)
- Cold air
- Tobacco smoke and air pollution
- Strong odors and irritants
- Stress and strong emotions
- Certain medications (aspirin, beta-blockers)
- GERD (acid reflux)

### Symptoms

- Wheezing (high-pitched whistling during breathing)
- Shortness of breath
- Chest tightness
- Coughing (often worse at night or early morning)
- Symptoms that vary over time and in intensity

### Diagnosis

- **Spirometry**: Measures how much and how fast you can blow air out
- **Peak flow meter**: Portable device to measure airflow at home
- **Bronchodilator reversibility**: Improvement after using rescue inhaler confirms asthma
- **Allergy testing**: Identifies specific triggers

### Treatment Approach

**Quick-Relief (Rescue) Medications:**
- Short-acting beta-agonists (SABAs) like albuterol
- Work within minutes to relax airway muscles

**Long-Term Control Medications:**
- Inhaled corticosteroids (ICS): Reduce inflammation
- Long-acting beta-agonists (LABAs): Keep airways open
- Often combined in one inhaler

### Asthma Action Plan

Every asthma patient should have a written plan with:
- Daily medications
- How to recognize worsening symptoms
- What to do during an attack
- When to seek emergency care`,
      keyTerms: [
        { term: 'bronchoconstriction', definition: 'Tightening of the muscles around the airways, causing them to narrow', pronunciation: 'BRON-ko-kun-STRIK-shun' },
        { term: 'bronchial hyperresponsiveness', definition: 'Airways that are overly sensitive and react strongly to triggers', pronunciation: 'BRON-kee-al HY-per-re-SPON-siv-ness' },
        { term: 'spirometry', definition: 'A breathing test that measures how much air you can breathe out and how fast', pronunciation: 'spy-ROM-eh-tree' },
        { term: 'inhaled corticosteroid', definition: 'Anti-inflammatory medicine breathed into the lungs to prevent asthma symptoms', pronunciation: 'KOR-ti-ko-STEER-oyd' },
        { term: 'SABA', definition: 'Short-acting beta-agonist; a quick-relief medication that opens airways fast' },
      ],
      analogies: [
        'Inhaled steroids are like using sunscreen every day to prevent sunburn, rather than treating a burn after it happens.',
      ],
    },
    3: {
      level: 3,
      summary: 'Asthma is a heterogeneous chronic inflammatory airway disease defined by variable expiratory airflow limitation and respiratory symptoms, driven primarily by type 2 (T2) inflammation involving eosinophils, mast cells, and IgE-mediated pathways.',
      explanation: `## Pathophysiology

### Inflammatory Cascade

**Type 2 (T2-high) Asthma:**
1. Allergen exposure activates epithelial cells
2. Release of alarmins (IL-25, IL-33, TSLP)
3. Activation of innate lymphoid cells type 2 (ILC2s) and Th2 cells
4. Production of type 2 cytokines (IL-4, IL-5, IL-13)
5. Downstream effects:
   - IL-4: IgE class switching in B cells
   - IL-5: Eosinophil recruitment and survival
   - IL-13: Mucus hypersecretion, airway hyperresponsiveness

**Non-T2 (T2-low) Asthma:**
- Neutrophilic or paucigranulocytic inflammation
- Th1/Th17 pathway involvement
- Less responsive to corticosteroids

### Airway Remodeling

Chronic inflammation leads to structural changes:
- Subepithelial fibrosis
- Smooth muscle hypertrophy and hyperplasia
- Goblet cell hyperplasia
- Angiogenesis
- Epithelial basement membrane thickening

These changes can cause fixed (irreversible) airflow obstruction.

## Classification

### By Severity (Treatment-Naive)

| Severity | Symptoms | Night Symptoms | FEV1 |
|----------|----------|----------------|------|
| Intermittent | ≤2 days/week | ≤2x/month | ≥80% |
| Mild Persistent | >2 days/week | 3-4x/month | ≥80% |
| Moderate Persistent | Daily | >1x/week | 60-80% |
| Severe Persistent | Throughout day | Often nightly | <60% |

### By Control Level

- **Well-controlled**: Symptoms ≤2 days/week, no nocturnal symptoms, no activity limitation
- **Not well-controlled**: Symptoms >2 days/week, some nocturnal symptoms, some limitation
- **Very poorly controlled**: Symptoms throughout day, frequent nocturnal symptoms, extremely limited

### Phenotypes

1. **Allergic asthma**: Early onset, atopic, T2-high, IgE-mediated
2. **Non-allergic asthma**: Adult onset, often eosinophilic but not IgE-mediated
3. **Late-onset eosinophilic**: Severe, often requires oral corticosteroids
4. **Obesity-related**: Prominent symptoms, less eosinophilic
5. **Neutrophilic asthma**: Smoking-related, poor steroid response

## Diagnosis

### Spirometry Criteria

- **Airflow limitation**: FEV1/FVC < 0.70 (or below lower limit of normal)
- **Reversibility**: FEV1 increase ≥12% AND ≥200 mL after bronchodilator
- **Variability**: Diurnal peak flow variability >10%

### Additional Testing

- **Methacholine challenge**: PC20 <8 mg/mL suggests hyperresponsiveness
- **FeNO (fractional exhaled nitric oxide)**: >50 ppb suggests eosinophilic inflammation
- **Sputum eosinophils**: ≥3% indicates eosinophilic asthma
- **Serum IgE and specific IgE**: Identifies allergic sensitization
- **Blood eosinophils**: ≥300 cells/μL suggests T2 inflammation

## Stepwise Treatment (GINA 2023)

### Step 1-2: Mild Asthma
- PRN low-dose ICS-formoterol (preferred)
- Alternative: PRN SABA + daily low-dose ICS

### Step 3: Moderate Asthma
- Low-dose ICS-LABA maintenance + PRN ICS-formoterol
- Alternative: Medium-dose ICS or ICS + LTRA

### Step 4: Moderate-Severe Asthma
- Medium-dose ICS-LABA maintenance + PRN ICS-formoterol
- Consider adding LAMA (tiotropium)

### Step 5: Severe Asthma
- High-dose ICS-LABA + LAMA
- Phenotype-targeted biologics:
  - Anti-IgE (omalizumab)
  - Anti-IL-5/IL-5R (mepolizumab, benralizumab)
  - Anti-IL-4R (dupilumab)
  - Anti-TSLP (tezepelumab)
- Consider low-dose OCS (last resort)

## Acute Exacerbation Management

**Mild-Moderate:**
- SABA 4-10 puffs via MDI + spacer q20min x3
- Oral corticosteroids: Prednisone 40-50 mg daily x5-7 days

**Severe (Emergency):**
- Continuous nebulized SABA
- Ipratropium bromide
- Systemic corticosteroids
- Consider IV magnesium sulfate
- Monitor for respiratory failure`,
      keyTerms: [
        { term: 'type 2 inflammation', definition: 'Immune response involving Th2 cells, ILC2s, and cytokines (IL-4, IL-5, IL-13) driving eosinophilic inflammation' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; a biomarker of eosinophilic airway inflammation', pronunciation: 'FEE-no' },
        { term: 'ICS-formoterol', definition: 'Combination of inhaled corticosteroid with a fast-acting LABA used for both maintenance and relief' },
        { term: 'LAMA', definition: 'Long-acting muscarinic antagonist; anticholinergic bronchodilator (e.g., tiotropium)' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; an epithelial alarmin that initiates type 2 inflammation', pronunciation: 'tee-slp' },
        { term: 'airway remodeling', definition: 'Structural changes from chronic inflammation including fibrosis, smooth muscle hypertrophy, and goblet cell hyperplasia' },
      ],
      clinicalNotes: 'The GINA 2019 update removed SABA-only therapy from Step 1 due to increased exacerbation risk. PRN ICS-formoterol is now preferred for mild asthma. Blood eosinophils ≥300 cells/μL predicts response to ICS and biologics.',
    },
    4: {
      level: 4,
      summary: 'Asthma represents a syndrome of airway inflammation and hyperresponsiveness with multiple endotypes defined by distinct immunopathological mechanisms, requiring phenotype-directed therapy and biomarker-guided biologic selection for severe disease.',
      explanation: `## Advanced Pathophysiology

### Epithelial-Immune Crosstalk

The airway epithelium serves as both barrier and immunological sensor:

**Epithelial Barrier Dysfunction:**
- Reduced E-cadherin expression in asthmatic airways
- Impaired tight junctions allow allergen penetration
- Defective interferon responses to viral infections
- Altered epithelial repair mechanisms

**Alarmin Signaling:**
- **TSLP**: Activates dendritic cells → Th2 polarization
- **IL-25**: Expands ILC2 populations, enhances Th2 responses
- **IL-33**: Most potent ILC2 activator; drives eosinophilia independent of adaptive immunity

These pathways explain why tezepelumab (anti-TSLP) works across phenotypes.

### Cellular Immunology

**Eosinophils:**
- Terminal effector cells in T2 inflammation
- Produce major basic protein (MBP), eosinophil cationic protein (ECP)
- Release lipid mediators (leukotrienes, prostaglandins)
- Contribute to airway remodeling via TGF-β

**Mast Cells:**
- IgE-mediated immediate hypersensitivity
- Release histamine, tryptase, chymase
- Synthesize PGD2 and LTC4
- Found within airway smooth muscle in asthma (unique feature)

**ILC2s:**
- Innate source of IL-5 and IL-13
- Respond to epithelial alarmins without prior sensitization
- Important in non-allergic eosinophilic asthma
- Relatively corticosteroid-resistant

### Smooth Muscle Pathology

- Increased smooth muscle mass (hyperplasia > hypertrophy)
- Enhanced contractility to bronchoconstrictors
- Reduced response to bronchodilators
- Secretion of inflammatory cytokines and chemokines
- Expression of mast cell adhesion molecules

### Neural Dysregulation

- Enhanced cholinergic tone
- Neurogenic inflammation via substance P, neurokinin A
- Reduced VIP (vasoactive intestinal peptide) activity
- Airway sensory nerve hypersensitivity

## Endotype Classification

### T2-High Endotypes

| Endotype | Biomarkers | Clinical Features | Targeted Therapy |
|----------|------------|-------------------|------------------|
| Allergic | High IgE, +SPT | Early onset, atopy, rhinitis | Omalizumab |
| Eosinophilic | Eos ≥300, FeNO ≥25 | Variable onset, sinusitis, nasal polyps | Anti-IL-5/5R, dupilumab |
| Mixed allergic-eosinophilic | High IgE + eos | Features of both | Dupilumab, tezepelumab |

### T2-Low Endotypes

| Endotype | Features | Pathophysiology | Treatment Challenges |
|----------|----------|-----------------|---------------------|
| Neutrophilic | Sputum neut ≥61% | Th17, IL-8, smoking | Poor ICS response |
| Paucigranulocytic | Low eos AND neut | Structural, neural | Limited options |
| Obesity-related | High BMI, low T2 markers | Mechanical, metabolic | Weight loss critical |

## Biomarker-Guided Therapy

### Blood Eosinophils

| Level (cells/μL) | Interpretation | Treatment Implications |
|------------------|----------------|----------------------|
| <150 | T2-low likely | Consider non-ICS approaches |
| 150-300 | Indeterminate | Trial of ICS; recheck on treatment |
| ≥300 | T2-high | ICS response likely; biologic candidates |
| ≥500 | Strongly T2-high | Consider anti-IL-5 biologics |

### FeNO

| Level (ppb) | Interpretation |
|-------------|----------------|
| <25 | Low T2 inflammation |
| 25-50 | Intermediate; consider ICS adherence |
| >50 | High T2; eosinophilic phenotype |

### Composite Assessment

The combination of blood eosinophils, FeNO, and IgE predicts:
- ICS responsiveness
- Exacerbation risk
- Biologic selection
- Steroid-sparing potential

## Severe Asthma Management

### Definition (ERS/ATS)

Asthma requiring GINA Step 4-5 treatment to maintain control, OR remaining uncontrolled despite this treatment.

### Biologic Selection Algorithm

1. **Assess T2 biomarkers**: Eos, FeNO, IgE, allergy status
2. **Consider comorbidities**:
   - Chronic rhinosinusitis with nasal polyps → dupilumab
   - Atopic dermatitis → dupilumab
   - Allergic sensitization + symptoms → omalizumab
3. **Evaluate for eosinophilic pattern**:
   - Pure eosinophilic → anti-IL-5/5R
   - Eosinophilic + other T2 features → dupilumab
4. **Broad T2 inflammation** → tezepelumab

### Bronchial Thermoplasty

- Radiofrequency ablation of airway smooth muscle
- Reduces smooth muscle mass
- Indicated for severe asthma despite optimal medical therapy
- Modest benefits; requires careful patient selection

## Special Populations

### Pregnancy
- Asthma control critical for fetal outcomes
- ICS, LABA, SABA safe in pregnancy
- Step down after delivery not recommended in 3rd trimester

### Exercise-Induced Bronchoconstriction (EIB)
- Peak symptoms 5-10 min post-exercise
- Pre-exercise SABA or ICS-formoterol
- Daily ICS reduces frequency

### Aspirin-Exacerbated Respiratory Disease (AERD)
- Triad: Asthma + nasal polyps + NSAID sensitivity
- Leukotriene-driven; consider montelukast and aspirin desensitization`,
      keyTerms: [
        { term: 'endotype', definition: 'A subtype of disease defined by distinct pathobiological mechanisms; guides therapy selection' },
        { term: 'alarmin', definition: 'Danger signals (IL-25, IL-33, TSLP) released by damaged epithelium to initiate immune responses' },
        { term: 'ILC2', definition: 'Innate lymphoid cells type 2; innate immune cells producing IL-5 and IL-13 in response to epithelial alarmins' },
        { term: 'bronchial thermoplasty', definition: 'Interventional procedure using radiofrequency energy to reduce airway smooth muscle mass' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; syndrome of asthma, nasal polyps, and NSAID sensitivity' },
        { term: 'paucigranulocytic', definition: 'Asthma subtype with low eosinophil and neutrophil counts; often steroid-resistant', pronunciation: 'PAW-see-gran-yoo-loh-SIT-ik' },
      ],
      clinicalNotes: 'Before initiating biologics, confirm adherence (prescription refills, FeNO on treatment), correct inhaler technique, and address comorbidities. Blood eosinophils may be suppressed by recent OCS use; recheck after ≥4 weeks off steroids. Dupilumab is the only biologic with efficacy data in T2-low asthma with elevated FeNO.',
    },
    5: {
      level: 5,
      summary: 'Contemporary asthma management integrates precision medicine approaches using multimodal biomarker assessment, treatable traits paradigms, and mechanistic understanding of airway inflammation to deliver individualized therapy optimizing both symptom control and long-term outcomes.',
      explanation: `## Precision Medicine in Asthma

### Treatable Traits Paradigm

The treatable traits approach identifies modifiable factors across three domains:

**Pulmonary Traits:**
- Airflow limitation (bronchodilators, biologics)
- Eosinophilic inflammation (ICS, biologics)
- Type 2 inflammation (targeted biologics)
- Airway infection (macrolides, antimicrobials)
- Airway hyperresponsiveness (ICS, thermoplasty)

**Extrapulmonary Traits:**
- Chronic rhinosinusitis (topical steroids, surgery, biologics)
- GERD (PPIs, lifestyle)
- Obesity (weight management)
- OSA (CPAP)
- Anxiety/depression (psychological support)
- Vocal cord dysfunction (speech therapy)

**Behavioral/Risk Factor Traits:**
- Poor inhaler technique (education, device selection)
- Non-adherence (digital monitoring, simplification)
- Continued allergen exposure (avoidance, immunotherapy)
- Smoking (cessation support)

### Advanced Biomarker Integration

**Sputum Analysis:**
- Gold standard for inflammatory phenotyping
- Eosinophils ≥3% = eosinophilic asthma
- Neutrophils ≥61% = neutrophilic asthma
- Limitations: Technical expertise, patient tolerance

**FeNO Interpretation Nuances:**
| Factor | Effect on FeNO |
|--------|---------------|
| ICS use | ↓ (suppression) |
| Smoking | ↓ (oxidative stress) |
| Viral infection | ↑ (transient) |
| Height | ↑ (larger airways) |
| Atopy | ↑ (even without asthma) |
| Nitrate-rich diet | ↑ |

**Emerging Biomarkers:**
- Periostin: Epithelial-derived, correlates with IL-13 activity
- DPP-4 (CD26): Serum marker of ILC2 activation
- Urinary LTE4: Cysteinyl leukotriene pathway activity
- MicroRNAs: miR-21, miR-126 associated with T2 inflammation

### Biologic Therapy: Evidence and Selection

**Omalizumab (Anti-IgE):**
- Binds free IgE, downregulates FcεRI
- Indications: Allergic asthma, IgE 30-1500 IU/mL, perennial allergen sensitization
- Dosing: Weight and IgE-based; q2-4 weeks SC
- Unique: Only biologic with long-term safety data (>15 years)
- Response predictors: Baseline eosinophils ≥260, FeNO ≥20, childhood onset

**Mepolizumab (Anti-IL-5):**
- Prevents IL-5 from binding IL-5Rα
- Dosing: 100 mg SC q4 weeks
- Response predictors: Blood eos ≥300 (better at ≥500), ≥2 exacerbations/year
- Added benefit: CRSwNP, EGPA (higher doses)

**Benralizumab (Anti-IL-5Rα):**
- Binds IL-5Rα, induces ADCC (antibody-dependent cellular cytotoxicity)
- Near-complete eosinophil depletion
- Dosing: 30 mg SC q4 weeks x3, then q8 weeks
- Faster onset than mepolizumab
- Preferred if immediate eosinophil reduction needed

**Dupilumab (Anti-IL-4Rα):**
- Blocks IL-4 and IL-13 signaling
- Broadest efficacy across T2 phenotypes
- Also approved for atopic dermatitis, CRSwNP, EoE
- Dosing: 200 or 300 mg SC q2 weeks (after loading)
- Unique: Efficacy in patients with eos <300 if FeNO ≥25
- Adverse effect: Transient eosinophilia (rarely EGPA-like syndrome)

**Tezepelumab (Anti-TSLP):**
- Blocks upstream epithelial signal
- Efficacy independent of baseline biomarkers
- Only biologic with Phase 3 data in low T2 patients
- Dosing: 210 mg SC q4 weeks
- May be preferred when phenotype unclear

### Biologic Response Assessment

**Timeline:**
- Clinical improvement: 4-8 weeks
- Full assessment: 4-6 months
- Super-responder identification: 12 months

**Response Criteria:**
- ≥50% reduction in exacerbations
- Clinically significant improvement in ACQ/ACT (MCID: ACQ ≥0.5, ACT ≥3)
- OCS reduction (≥50% or discontinuation)
- Improved lung function (FEV1 ≥200 mL)

**Non-Response Management:**
1. Confirm diagnosis (consider alternative diagnoses)
2. Verify adherence and technique
3. Address treatable traits
4. Consider phenotype re-assessment
5. Switch biologic class (e.g., anti-IL-5 to dupilumab)

### Emerging Therapeutic Strategies

**Anti-IL-33:**
- Itepekimab: Phase 2 data promising in eos-high asthma
- Targets upstream of IL-5 and IL-13

**Anti-ST2:**
- Astegolimab: Blocks IL-33 receptor
- Phase 2b showed exacerbation reduction

**JAK Inhibitors:**
- Block multiple cytokine pathways
- Oral administration advantage
- Safety concerns (VTE, malignancy) limit use

**CRTH2 Antagonists:**
- Block PGD2 receptor on Th2 cells and eosinophils
- Fevipiprant: Mixed results in Phase 3

### Severe Asthma Phenotyping Algorithm

\`\`\`
                    Severe Uncontrolled Asthma
                              |
                    Confirm diagnosis, adherence, technique
                              |
                    Assess biomarkers (eos, FeNO, IgE, SPT)
                              |
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
         T2-High           Mixed            T2-Low
     (eos≥300 or FeNO>50)                (eos<150, FeNO<25)
            |                 |                 |
    ┌───────┼───────┐        |           Consider:
    ▼       ▼       ▼        ▼           - Macrolides
 Allergic  Eos    Both   Tezepelumab    - Thermoplasty
    |       |       |                    - Alternative dx
Omalizumab Anti-IL-5 Dupilumab
           or
        Dupilumab
\`\`\`

## Clinical Pearls for Practice

1. **PRN ICS-formoterol** reduces severe exacerbations by 60% vs PRN SABA in mild asthma

2. **SMART therapy** (Single Maintenance and Reliever Therapy) with budesonide-formoterol reduces exacerbations vs fixed-dose ICS-LABA + SABA

3. **Blood eosinophils** are dynamic: Check when clinically stable, off OCS for ≥4 weeks

4. **Biologic discontinuation**: After 2+ years of control, consider trial of discontinuation with close monitoring; many patients relapse within 12 months

5. **OCS stewardship**: Every burst increases cumulative toxicity risk; steroid-sparing biologics are preferred over chronic low-dose OCS

6. **Inhaler selection**: Consider patient factors (dexterity, inspiratory flow) and formulary. DPIs require inspiratory flow ≥30 L/min; consider pMDI + spacer if flow limited

7. **AERD management**: Aspirin desensitization after biologics optimize control; reduces need for revision sinus surgery`,
      keyTerms: [
        { term: 'treatable traits', definition: 'Identifiable and modifiable clinical characteristics across pulmonary, extrapulmonary, and behavioral domains that guide personalized management' },
        { term: 'SMART therapy', definition: 'Single Maintenance and Reliever Therapy using ICS-formoterol for both daily maintenance and as-needed relief' },
        { term: 'ADCC', definition: 'Antibody-dependent cellular cytotoxicity; mechanism by which benralizumab depletes eosinophils via NK cell engagement' },
        { term: 'super-responder', definition: 'Patient achieving complete control, OCS elimination, and near-normalization of lung function on biologic therapy' },
        { term: 'alarmin', definition: 'Epithelial-derived cytokines (IL-25, IL-33, TSLP) released upon cellular damage that initiate and amplify type 2 inflammation' },
        { term: 'DPI', definition: 'Dry powder inhaler; requires adequate inspiratory flow (typically ≥30 L/min) for effective drug delivery' },
      ],
      clinicalNotes: `Key practice recommendations:

1. **Biomarker-guided biologic initiation**: Baseline eos ≥300 cells/μL OR FeNO ≥25 ppb supports T2-targeted therapy. Check both to maximize identification of responders.

2. **Comorbidity-driven selection**: CRSwNP or atopic dermatitis → dupilumab (FDA-approved for both). EGPA → mepolizumab (FDA-approved at 300 mg).

3. **Insurance navigation**: Pre-authorization typically requires documentation of Step 4/5 therapy failure, elevated biomarkers, and exacerbation history. FeNO testing in-office strengthens documentation.

4. **Monitoring on biologics**: Check blood eosinophils, FeNO, lung function, and ACT at each visit. Suppression of biomarkers confirms biological effect. Persistent elevation suggests non-response or non-adherence.

5. **Real-world effectiveness**: Registry data (CHRONICLE, XPORT) show ~70% of patients achieve ≥50% exacerbation reduction. Consider switching biologics for inadequate response at 4-6 months rather than adding OCS.`,
    },
  },

  media: [
    {
      id: 'asthma-pathophysiology',
      type: 'diagram',
      filename: 'asthma-pathophysiology.svg',
      title: 'Asthma Pathophysiology',
      description: 'Inflammatory cascade showing epithelial damage, T2 inflammation, and airway remodeling',
    },
    {
      id: 'asthma-treatment-stepwise',
      type: 'diagram',
      filename: 'asthma-stepwise-therapy.svg',
      title: 'GINA Stepwise Treatment',
      description: 'Visual representation of GINA 2023 stepwise treatment approach',
    },
    {
      id: 'biologic-selection-algorithm',
      type: 'diagram',
      filename: 'asthma-biologic-selection.svg',
      title: 'Biologic Selection Algorithm',
      description: 'Decision tree for selecting appropriate biologic therapy in severe asthma',
    },
  ],

  citations: [
    {
      id: 'gina-2023',
      type: 'website',
      title: 'Global Strategy for Asthma Management and Prevention',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA',
      url: 'https://ginasthma.org',
      accessedDate: '2024-01-01',
    },
    {
      id: 'naepp-epr4',
      type: 'article',
      title: 'Expert Panel Report 4: Guidelines for the Diagnosis and Management of Asthma',
      source: 'NHLBI/NAEPP',
    },
    {
      id: 'lancet-severe-asthma',
      type: 'article',
      title: 'Severe asthma',
      authors: ['Holguin F', 'Cardet JC', 'Chung KF', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(21)00392-4',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'topic-pulmonary-function-tests', targetType: 'topic', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'topic-respiratory-medications', targetType: 'topic', relationship: 'related', label: 'Respiratory Medications' },
    { targetId: 'condition-allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pulmonology', 'allergy', 'immunology', 'chronic disease'],
    keywords: ['asthma', 'wheezing', 'bronchospasm', 'eosinophilia', 'biologics', 'inhaled corticosteroids'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default asthma;
