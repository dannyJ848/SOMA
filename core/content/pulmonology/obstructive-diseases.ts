/**
 * Obstructive Lung Diseases
 *
 * Comprehensive content covering asthma, COPD, and bronchiectasis -
 * diseases characterized by airflow limitation due to airway narrowing.
 */

import { EducationalContent } from '../types';

export const obstructiveDiseasesContent: EducationalContent = {
  id: 'pulmonology-obstructive-diseases',
  type: 'topic',
  name: 'Obstructive Lung Diseases',
  nameEs: 'Enfermedades Pulmonares Obstructivas',
  alternateNames: [
    'Obstructive Airway Diseases',
    'Chronic Airflow Limitation',
    'Airway Obstruction Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Obstructive lung diseases are conditions where the airways become too narrow, making it hard to breathe air out. The three main types are asthma, COPD, and bronchiectasis.',
      explanation: `## Airways That Get Too Narrow

Your lungs have tubes called airways that carry air in and out. In obstructive lung diseases, these tubes become too narrow, so air gets trapped inside your lungs and it is hard to breathe out.

## The Three Main Diseases

### Asthma
- Airways swell up and tighten when triggered
- Comes and goes (you can feel fine between attacks)
- Common triggers: allergies, exercise, cold air, smoke
- Usually starts in childhood
- A rescue inhaler can open the airways quickly

### COPD (Chronic Obstructive Pulmonary Disease)
- Airways and air sacs are permanently damaged
- Usually caused by years of smoking
- Gets worse over time and does not fully go away
- Two types:
  - **Emphysema**: Air sacs (tiny balloons) are destroyed
  - **Chronic Bronchitis**: Airways are constantly inflamed with extra mucus

### Bronchiectasis
- Airways become stretched out and floppy like old rubber bands
- Mucus collects in the stretched airways and causes infections
- Can be caused by repeated lung infections or other conditions
- Leads to chronic cough with lots of mucus

## How They Are Similar

All three diseases:
- Make it hard to push air out of your lungs
- Can cause wheezing, coughing, and shortness of breath
- Are long-term conditions that need ongoing treatment
- Can get worse during flare-ups (exacerbations)

## How They Are Different

| Feature | Asthma | COPD | Bronchiectasis |
|---------|--------|------|----------------|
| Age | Often children | Usually over 40 | Any age |
| Cause | Allergies/genes | Smoking | Infections/other |
| Reversible? | Yes | Mostly no | No |
| Main symptom | Wheezing attacks | Constant breathlessness | Chronic productive cough |`,

      keyTerms: [
        {
          term: 'Airway',
          definition: 'A tube that carries air into and out of the lungs',
        },
        {
          term: 'Obstruction',
          definition: 'A blockage that prevents air from flowing freely',
        },
        {
          term: 'Wheezing',
          definition:
            'A whistling sound when breathing caused by narrow airways',
        },
        {
          term: 'Mucus',
          definition:
            'A thick, sticky substance that lines the airways and can block them',
        },
        {
          term: 'Exacerbation',
          definition:
            'A flare-up when symptoms suddenly get much worse',
        },
      ],
      analogies: [
        'Think of your airways like garden hoses. In asthma, someone squeezes the hose so water can barely get through. In COPD, the hose is permanently kinked and cracked. In bronchiectasis, the hose is stretched out and saggy so water pools inside.',
        'Breathing with obstructive lung disease is like trying to blow air through a coffee stirrer instead of a regular straw.',
        'An asthma attack is like a traffic jam that clears up. COPD is like a road that is permanently narrowed by construction.',
      ],
      examples: [
        'A child who wheezes and coughs during soccer practice (asthma)',
        'A 65-year-old former smoker who gets winded walking upstairs (COPD)',
        'A person who coughs up cups of mucus every morning (bronchiectasis)',
      ],
      patientCounselingPoints: [
        'If you have trouble breathing, see a doctor - these conditions can be managed.',
        'Smoking is the number one cause of COPD. Quitting at any age helps.',
        'Always carry your rescue inhaler if you have asthma.',
        'Staying active helps your lungs even when you have a lung disease.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Obstructive diseases share airflow limitation demonstrated by reduced FEV1/FVC ratio on spirometry. Asthma features reversible bronchospasm, COPD shows fixed obstruction, and bronchiectasis involves permanent airway dilation with chronic infection.',
      explanation: `## Understanding Airflow Obstruction

### Spirometry Basics
Spirometry is the key test for obstructive diseases:
- **FEV1**: Volume of air exhaled in the first second of a forced breath
- **FVC**: Total volume of air exhaled during a forced breath
- **FEV1/FVC ratio**: Normally >0.70; ratio <0.70 defines obstruction
- **Flow-volume loop**: Shows characteristic scooped-out (concave) pattern in obstruction

### Three Mechanisms of Obstruction
1. **Bronchospasm**: Airway smooth muscle contracts, narrowing the lumen
2. **Inflammation & Edema**: Airway wall swells with inflammatory cells and fluid
3. **Mucus Hypersecretion**: Goblet cells produce excess mucus that plugs airways

## Asthma: Reversible Obstruction

**Pathophysiology:**
- Chronic airway inflammation (eosinophilic)
- Bronchial hyperresponsiveness to triggers
- Reversible bronchospasm
- Mucus plugging during exacerbations

**Diagnosis:**
- Spirometry showing obstruction (FEV1/FVC <0.70)
- Bronchodilator reversibility: FEV1 improves >12% AND >200 mL after albuterol
- Methacholine challenge if baseline spirometry normal (PC20 <8 mg/mL)
- FeNO >25 ppb suggests eosinophilic inflammation

**Classification by Severity:**
- Intermittent: Symptoms ≤2 days/week, nighttime ≤2x/month
- Mild Persistent: >2 days/week, 3-4 nights/month
- Moderate Persistent: Daily symptoms, >1 night/week
- Severe Persistent: Continual symptoms, frequent nights

## COPD: Fixed Obstruction

**Pathophysiology:**
- Chronic inflammation (neutrophilic)
- Airway fibrosis and narrowing (chronic bronchitis)
- Alveolar wall destruction (emphysema)
- Loss of elastic recoil leads to air trapping

**Two Phenotypes:**
- **Emphysema ("Pink Puffer")**: Thin, barrel chest, pursed-lip breathing, dyspnea predominant
- **Chronic Bronchitis ("Blue Bloater")**: Overweight, cyanotic, productive cough, cor pulmonale

**Diagnosis:**
- Post-bronchodilator FEV1/FVC <0.70
- Limited or no bronchodilator reversibility
- CXR: Hyperinflation, flattened diaphragms (emphysema)
- CT: Upper-lobe predominant emphysema, airway thickening

## Bronchiectasis: Airway Destruction

**Pathophysiology:**
- Vicious cycle: Infection → inflammation → airway damage → impaired clearance → more infection
- Permanent dilation and destruction of bronchial walls
- Loss of mucociliary clearance
- Chronic bacterial colonization (Pseudomonas, H. influenzae)

**Causes:**
- Post-infectious (TB, pneumonia, pertussis)
- Cystic fibrosis (most common genetic cause)
- Primary ciliary dyskinesia
- Immunodeficiency
- Allergic bronchopulmonary aspergillosis (ABPA)

**Diagnosis:**
- High-resolution CT (HRCT): Dilated airways, "signet ring sign"
- Sputum culture: Identify colonizing organisms
- Spirometry: Obstructive pattern
- Workup for underlying cause`,

      keyTerms: [
        {
          term: 'FEV1',
          definition:
            'Forced Expiratory Volume in 1 second - the amount of air you can forcefully exhale in one second',
          pronunciation: 'F-E-V-one',
        },
        {
          term: 'FVC',
          definition:
            'Forced Vital Capacity - total amount of air you can forcefully exhale',
        },
        {
          term: 'Bronchospasm',
          definition:
            'Sudden tightening of airway smooth muscle causing narrowing',
        },
        {
          term: 'Bronchial hyperresponsiveness',
          definition:
            'Airways that overreact and narrow in response to triggers',
        },
        {
          term: 'Signet ring sign',
          definition:
            'CT finding where a dilated bronchus appears larger than its adjacent artery, like a ring with a stone',
        },
        {
          term: 'FeNO',
          definition:
            'Fractional exhaled Nitric Oxide - a breath test measuring eosinophilic airway inflammation',
        },
      ],
      analogies: [
        'Spirometry is like measuring how fast and how much you can blow through a tube - obstruction means the air comes out slowly.',
        'Emphysema is like popping the small bubbles in bubble wrap - once destroyed, the air sacs cannot be repaired.',
        'Bronchiectasis airways are like stretched-out socks that no longer spring back to shape, collecting debris inside.',
      ],
      examples: [
        'A 25-year-old with episodic wheezing shows FEV1/FVC of 0.65, improving to 0.78 after albuterol (asthma)',
        'A 60-year-old smoker with FEV1/FVC 0.55 that does not improve with bronchodilator (COPD)',
        'A 40-year-old with recurrent pneumonias and HRCT showing dilated airways (bronchiectasis)',
      ],
      clinicalNotes:
        'Always obtain post-bronchodilator spirometry for COPD diagnosis. Asthma-COPD overlap (ACO) exists in patients with features of both. In bronchiectasis, Pseudomonas colonization is associated with worse outcomes and accelerated lung function decline.',
    },

    3: {
      level: 3,
      summary:
        'Obstructive diseases involve distinct inflammatory pathways: Type 2 inflammation (IL-4/5/13, eosinophils, IgE) drives allergic asthma, while COPD involves neutrophilic inflammation with protease-antiprotease imbalance. GOLD classification guides COPD management. Step therapy is standard for asthma.',
      explanation: `## Type 2 Inflammation in Asthma

### The Type 2 Cascade
1. **Epithelial alarmins** (TSLP, IL-25, IL-33) released by damaged epithelium
2. **Dendritic cells** present allergens to naive T cells
3. **Th2 differentiation** produces key cytokines:
   - **IL-4**: IgE class switching in B cells, Th2 differentiation
   - **IL-5**: Eosinophil recruitment, activation, and survival
   - **IL-13**: Mucus hypersecretion, airway hyperresponsiveness, goblet cell metaplasia
4. **IgE** binds mast cells → degranulation on re-exposure → histamine, leukotrienes, prostaglandins
5. **Eosinophils** release major basic protein, eosinophil cationic protein → epithelial damage

### Innate Type 2 Pathway
- ILC2 (Innate Lymphoid Cells type 2) respond to alarmins
- Produce IL-5 and IL-13 without antigen presentation
- Drive non-allergic eosinophilic asthma
- Important in late-onset severe asthma

### Biomarkers
| Biomarker | Threshold | Significance |
|-----------|-----------|-------------|
| Blood eosinophils | ≥150 cells/μL | Suggests eosinophilic phenotype |
| FeNO | ≥25 ppb | IL-13-driven inflammation |
| Total IgE | 30-700 IU/mL | Allergic phenotype (omalizumab range) |
| Periostin | Elevated | Th2 activity marker |

## COPD Phenotypes and Classification

### Emphysema vs. Chronic Bronchitis

**Emphysema:**
- Destruction of alveolar walls → enlarged airspaces
- Loss of elastic recoil → air trapping
- Reduced DLCO
- Centrilobular (smoking-related, upper lobes) vs. panlobular (alpha-1 antitrypsin, lower lobes)

**Chronic Bronchitis:**
- Productive cough ≥3 months/year for ≥2 consecutive years
- Goblet cell hyperplasia, submucosal gland hypertrophy
- Reid index increased (gland-to-wall thickness ratio >0.5)
- Small airway disease with mucus plugging

### GOLD Classification (2024)

**Spirometric Severity:**
- GOLD 1 (Mild): FEV1 ≥80% predicted
- GOLD 2 (Moderate): 50% ≤ FEV1 <80%
- GOLD 3 (Severe): 30% ≤ FEV1 <50%
- GOLD 4 (Very Severe): FEV1 <30%

**ABE Assessment (replaces ABCD):**
- Group A: 0-1 moderate exacerbations, mMRC 0-1 or CAT <10
- Group B: 0-1 moderate exacerbations, mMRC ≥2 or CAT ≥10
- Group E: ≥2 moderate OR ≥1 hospitalized exacerbation

**Initial Pharmacotherapy:**
- Group A: Bronchodilator (SABA, SAMA, LABA, or LAMA)
- Group B: LABA + LAMA
- Group E: LABA + LAMA (consider + ICS if eos ≥300)

### Asthma Step Therapy (GINA 2024)

**Preferred Track (ICS-formoterol):**
- Steps 1-2: As-needed low-dose ICS-formoterol
- Step 3: Low-dose ICS-formoterol maintenance + reliever
- Step 4: Medium-dose ICS-formoterol maintenance + reliever
- Step 5: High-dose ICS-LABA, add LAMA, refer for phenotyping + biologics

**Key Principles:**
- ICS is the cornerstone of controller therapy
- SABA-only treatment is no longer recommended at any step
- Anti-inflammatory reliever (ICS-formoterol) preferred over SABA alone
- Step up if uncontrolled after 2-3 months; step down after 3 months of good control

## Bronchiectasis Management

### Airway Clearance
- Chest physiotherapy, oscillatory PEP devices
- Hypertonic saline nebulization (7%)
- Dornase alfa (CF only - harmful in non-CF bronchiectasis)

### Antimicrobial Strategy
- Acute exacerbations: 14-day targeted antibiotics
- Chronic Pseudomonas: Inhaled tobramycin or aztreonam
- Chronic macrolide (azithromycin 3x/week): Reduces exacerbations
- Eradication protocols for new Pseudomonas isolation`,

      keyTerms: [
        {
          term: 'Type 2 inflammation',
          definition:
            'Immune response driven by Th2 cells and ILC2s producing IL-4, IL-5, and IL-13, leading to eosinophilia, IgE production, and mucus hypersecretion',
        },
        {
          term: 'GOLD classification',
          definition:
            'Global Initiative for Chronic Obstructive Lung Disease - standardized system for staging COPD severity based on spirometry and exacerbation history',
        },
        {
          term: 'TSLP',
          definition:
            'Thymic Stromal Lymphopoietin - epithelial alarmin that initiates Type 2 inflammation upstream of all other Th2 cytokines',
        },
        {
          term: 'ILC2',
          definition:
            'Innate Lymphoid Cells type 2 - innate immune cells that produce Type 2 cytokines without requiring antigen presentation',
        },
        {
          term: 'Reid index',
          definition:
            'Ratio of submucosal gland thickness to bronchial wall thickness; >0.5 indicates chronic bronchitis',
        },
        {
          term: 'Centrilobular emphysema',
          definition:
            'Destruction of respiratory bronchioles in the center of the lobule, predominantly in upper lobes, associated with smoking',
        },
      ],
      analogies: [
        'Type 2 inflammation is like a cascade of dominos: epithelial damage tips the first domino (alarmins), which triggers Th2 cells, then each cytokine knocks over the next pathway (IgE, eosinophils, mucus).',
        'GOLD staging is like grading the severity of a road narrowing: GOLD 1 is a slight squeeze, GOLD 4 is barely passable.',
        'The vicious cycle of bronchiectasis is like a drain that gets wider the more clogged it becomes - the damage causes more pooling which causes more damage.',
      ],
      examples: [
        'A patient with blood eosinophils of 450 and FeNO of 40 ppb has Type 2 high asthma amenable to biologic therapy',
        'A COPD patient with FEV1 45% predicted and 3 exacerbations last year is GOLD 3, Group E',
        'A bronchiectasis patient with chronic Pseudomonas started on inhaled tobramycin and azithromycin',
      ],
      clinicalNotes:
        'The GOLD 2024 ABE assessment replaced the former ABCD tool. Blood eosinophils ≥300 in COPD predict ICS response and reduced exacerbations. In bronchiectasis, the Bronchiectasis Severity Index (BSI) and FACED score predict mortality and hospitalization risk.',
    },

    4: {
      level: 4,
      summary:
        'Advanced pathophysiology of obstructive diseases includes airway remodeling, smooth muscle hypertrophy, protease-antiprotease imbalance, oxidative stress mechanisms, small airway disease as the silent zone, and the emerging treatable traits approach to management.',
      explanation: `## Airway Remodeling in Asthma

### Structural Changes
- **Subepithelial fibrosis**: Collagen deposition beneath basement membrane (reticular basement membrane thickening)
- **Smooth muscle hypertrophy and hyperplasia**: Increased mass of airway smooth muscle (ASM), with proliferative and synthetic phenotype shifts
- **Goblet cell metaplasia**: Replacement of ciliated epithelium with mucus-secreting cells driven by IL-13 via STAT6/SPDEF pathway
- **Angiogenesis**: New blood vessel formation in airway wall (VEGF-mediated)
- **Neural remodeling**: Increased substance P and neurokinin A, reduced VIP; contributes to neurogenic inflammation

### Molecular Drivers of Remodeling
- TGF-beta: Master fibrogenic cytokine from eosinophils, epithelial cells, and fibroblasts
- Matrix metalloproteinases (MMP-9): ECM degradation and remodeling
- ADAM33: Genetic susceptibility to accelerated remodeling
- Mechanical stress from bronchoconstriction itself promotes remodeling (mechanotransduction)

### Clinical Implications
- Remodeling begins early (detectable in preschool wheezers)
- Partially irreversible: leads to fixed airflow obstruction
- May explain "asthma-COPD overlap" in long-standing asthma
- Anti-IL-5 and anti-IL-4R biologics may partially reverse remodeling

## Protease-Antiprotease Imbalance in COPD

### The Paradigm
- **Proteases** (neutrophil elastase, MMP-9, MMP-12, cathepsins): Degrade elastin and collagen in alveolar walls
- **Antiproteases** (alpha-1 antitrypsin, SLPI, TIMPs): Protect lung parenchyma
- Smoking tips the balance: Recruits neutrophils (neutrophil elastase), activates macrophages (MMP-9/12), and oxidatively inactivates alpha-1 antitrypsin

### Alpha-1 Antitrypsin Deficiency
- PiZZ genotype: AAT level <11 μmol/L (57 mg/dL)
- Panlobular emphysema (lower lobe predominant)
- Liver disease (polymerized Z-protein accumulation)
- Screen all COPD patients diagnosed <45 years or with lower-lobe emphysema
- Augmentation therapy: IV pooled human AAT (Prolastin)

### Oxidative Stress
- Cigarette smoke: >4,700 chemicals, 10^15 free radicals per puff
- Nrf2 pathway exhaustion → reduced antioxidant defenses (glutathione, SOD)
- Oxidants activate NF-κB → amplify inflammation
- Carbonyl stress: Reactive aldehydes modify proteins → autoimmune responses
- Steroid resistance in COPD partly due to oxidative inactivation of HDAC2

## Small Airway Disease: The Silent Zone

### Why "Silent"?
- Small airways (<2 mm diameter) contribute <10% of total airway resistance
- Extensive disease can exist with minimal changes on standard spirometry
- By the time FEV1 falls, >70% of small airways may be destroyed

### Assessment
- **FEF25-75%**: Effort-dependent, variable; historically used but limited utility
- **Impulse oscillometry (IOS)**: Measures resistance at different frequencies; R5-R20 reflects small airway resistance
- **Nitrogen washout (LCI)**: Detects ventilation inhomogeneity early
- **Parametric response mapping (PRM) on CT**: Differentiates functional small airway disease from emphysema
- **Micro-CT**: Research tool revealing small airway loss precedes emphysema

### Clinical Significance
- Small airway disease is the earliest site of COPD pathology
- Explains persistent symptoms despite normal FEV1
- Extra-fine particle ICS (MMAD <2 μm) may better reach small airways
- Air trapping (RV/TLC ratio) reflects small airway dysfunction

## Treatable Traits Approach

### Paradigm Shift
Instead of disease labels, identify and treat specific treatable traits across three domains:

**Pulmonary Traits:**
- Eosinophilic inflammation → ICS, biologics
- Type 2 biomarker-high → anti-IL4R, anti-IL5, anti-TSLP
- Airflow limitation → bronchodilators
- Airway infection → targeted antibiotics, macrolides
- Mucus hypersecretion → mucolytics, airway clearance
- Air trapping → LAMA, lung volume reduction

**Extrapulmonary Traits:**
- Obesity → weight management, bariatric surgery
- Deconditioning → pulmonary rehabilitation
- GERD → PPI, lifestyle modification
- OSA → CPAP
- Anxiety/depression → behavioral therapy, pharmacotherapy
- Cardiovascular comorbidity → appropriate management

**Behavioral/Risk Factor Traits:**
- Ongoing smoking → cessation programs, pharmacotherapy
- Poor inhaler technique → education, device selection
- Non-adherence → simplify regimens, motivational interviewing
- Environmental exposures → avoidance, occupational assessment

### Implementation
- Comprehensive phenotyping at initial assessment
- Biomarker-guided treatment decisions
- Regular reassessment of trait status
- Personalized combination strategies`,

      keyTerms: [
        {
          term: 'Airway remodeling',
          definition:
            'Structural changes in the airway wall including fibrosis, smooth muscle hypertrophy, and goblet cell metaplasia that lead to fixed obstruction',
        },
        {
          term: 'Protease-antiprotease imbalance',
          definition:
            'Disruption of the balance between tissue-destructive enzymes and their inhibitors, leading to emphysematous destruction',
        },
        {
          term: 'Alpha-1 antitrypsin deficiency',
          definition:
            'Genetic condition (PiZZ genotype) causing reduced antiprotease protection, leading to early-onset panlobular emphysema and liver disease',
        },
        {
          term: 'Small airway disease',
          definition:
            'Pathology in airways <2 mm diameter that is the earliest site of COPD and can be extensive before detected by standard spirometry',
        },
        {
          term: 'Treatable traits',
          definition:
            'A precision medicine approach that identifies individual pulmonary, extrapulmonary, and behavioral characteristics that can be specifically targeted with therapy',
        },
        {
          term: 'Impulse oscillometry',
          definition:
            'Lung function test using sound waves to measure airway resistance at different frequencies; R5-R20 difference reflects small airway disease',
        },
        {
          term: 'HDAC2',
          definition:
            'Histone deacetylase 2 - enzyme required for corticosteroid anti-inflammatory action; oxidatively inactivated in COPD, explaining steroid resistance',
        },
        {
          term: 'Mechanotransduction',
          definition:
            'Process by which mechanical forces (e.g., bronchoconstriction) are converted to biological signals that promote airway remodeling',
        },
      ],
      analogies: [
        'Protease-antiprotease balance is like a tug-of-war between demolition crews (proteases) and construction workers (antiproteases). Smoking sends in extra demolition crews while disabling the construction workers.',
        'Small airways are the "silent zone" because losing them is like losing individual threads in a rope - you do not notice until most are gone and the rope is about to snap.',
        'Treatable traits is like a mechanic diagnosing every individual problem with a car instead of just knowing the make and model - two cars with the same name may need completely different repairs.',
      ],
      examples: [
        'A 38-year-old non-smoker with lower-lobe emphysema found to have PiZZ alpha-1 antitrypsin deficiency, started on IV augmentation therapy',
        'A patient with "controlled" asthma but persistent air trapping detected by oscillometry, prompting switch to extra-fine particle ICS',
        'A COPD patient assessed for treatable traits: eosinophils 350 (add ICS), BMI 34 (weight program), poor technique (switch device), ongoing smoking (varenicline)',
      ],
      clinicalNotes:
        'Airway remodeling in asthma may begin before symptom onset and is detectable even in preschool wheezers on endobronchial biopsy. The ECLIPSE study demonstrated that frequent exacerbator phenotype in COPD is stable over time and is the best predictor of future exacerbations. Parametric response mapping on CT can differentiate functional small airway disease (fSAD) from emphysema and may identify early COPD before spirometric changes.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge management of obstructive diseases includes biologic therapies targeting specific inflammatory pathways, bronchial thermoplasty, optimized LABA/LAMA/ICS triple therapy, COPD exacerbation phenotyping, and lung volume reduction strategies.',
      explanation: `## Biologic Therapies for Severe Asthma

### Anti-IgE: Omalizumab (Xolair)
- **Mechanism**: Binds free IgE, prevents FcεRI binding on mast cells/basophils
- **Indication**: Moderate-severe allergic asthma, IgE 30-1500 IU/mL, positive aeroallergen sensitization
- **Dosing**: SC every 2-4 weeks based on IgE and weight
- **Efficacy**: 25-50% reduction in exacerbations, steroid-sparing
- **Unique**: Also approved for chronic urticaria, nasal polyps

### Anti-IL-5/IL-5R
**Mepolizumab (Nucala):**
- Anti-IL-5 monoclonal antibody
- Blood eos ≥150 cells/μL (≥300 for optimal response)
- 100 mg SC every 4 weeks
- 50% exacerbation reduction, OCS-sparing

**Reslizumab (Cinqair):**
- Anti-IL-5, IV formulation
- Weight-based dosing (3 mg/kg IV every 4 weeks)
- Blood eos ≥400 cells/μL
- FEV1 improvement in addition to exacerbation reduction

**Benralizumab (Fasenra):**
- Anti-IL-5Rα, induces direct eosinophil apoptosis via ADCC (enhanced antibody-dependent cellular cytotoxicity)
- Near-complete eosinophil depletion
- 30 mg SC every 4 weeks x3, then every 8 weeks
- Blood eos ≥300; also effective in OCS-dependent asthma

### Anti-IL-4Rα: Dupilumab (Dupixent)
- **Mechanism**: Blocks IL-4 and IL-13 signaling via shared IL-4Rα subunit
- **Indication**: Moderate-severe eosinophilic OR OCS-dependent asthma; eos ≥150 or FeNO ≥25 ppb
- **Dosing**: 200-300 mg SC every 2 weeks (loading dose 400-600 mg)
- **Efficacy**: 50-70% exacerbation reduction, significant FEV1 improvement, OCS elimination in many
- **Breadth**: Also approved for atopic dermatitis, CRSwNP, EoE, prurigo nodularis, COPD (2024)
- **Note**: May transiently increase blood eosinophils (blocked tissue migration)

### Anti-TSLP: Tezepelumab (Tezspire)
- **Mechanism**: Blocks thymic stromal lymphopoietin upstream of all Type 2 pathways
- **Indication**: Severe asthma regardless of phenotype (first biologic not requiring biomarker threshold)
- **Dosing**: 210 mg SC every 4 weeks
- **Efficacy**: Reduces exacerbations across all inflammatory phenotypes including Type 2-low
- **Significance**: Broadest mechanism; works in patients who failed other biologics

### Biologic Selection Algorithm
1. Allergic + elevated IgE → omalizumab
2. Eosinophilic (eos ≥300) → mepolizumab, benralizumab, or dupilumab
3. Eosinophilic + atopic dermatitis/CRSwNP → dupilumab (treats comorbidities)
4. OCS-dependent → benralizumab or dupilumab (best OCS-sparing data)
5. Type 2-low or failed other biologics → tezepelumab
6. Overlap features → dupilumab (broadest Type 2 coverage)

## Bronchial Thermoplasty

### Procedure
- Radiofrequency energy (65°C) delivered to airway walls via bronchoscope
- Targets airways 3-10 mm diameter
- Three sessions, 3 weeks apart (RLL, LLL, both upper lobes)
- Ablates airway smooth muscle mass

### Evidence
- AIR2 trial: Reduced severe exacerbations, ED visits, days lost from work
- BT10+ study: Benefits maintained at 10 years
- Modest FEV1 improvement; primary benefit is symptom reduction
- Risk: Short-term exacerbation, atelectasis, hemoptysis post-procedure
- Patient selection: Severe refractory asthma despite maximal pharmacotherapy, predominantly ASM-driven symptoms

## COPD Triple Therapy: LABA/LAMA/ICS

### Landmark Trials
- **IMPACT** (fluticasone furoate/umeclidinium/vilanterol): 15% mortality reduction vs. LAMA/LABA
- **ETHOS** (budesonide/glycopyrrolate/formoterol): 46% mortality reduction (high-dose ICS arm)
- **KRONOS**: Benefits seen regardless of exacerbation history

### ICS in COPD: When to Add
- Blood eosinophils ≥300 cells/μL: Strong recommendation
- Blood eosinophils 100-300 + ≥2 moderate exacerbations: Consider
- Blood eosinophils <100: Avoid ICS (no benefit, pneumonia risk)
- Asthma-COPD overlap features: Add ICS
- Prior mycobacterial infection or recurrent pneumonia: Avoid ICS

### ICS Withdrawal in COPD
- Consider if low eosinophils (<100), recurrent pneumonia, or no exacerbation benefit
- Step down gradually with monitoring
- WISDOM and SUNSET trials support safe withdrawal in selected patients

## COPD Exacerbation Phenotyping

### Classification
- **Bacterial**: Purulent sputum, elevated procalcitonin → antibiotics
- **Eosinophilic**: Blood eos ≥200 at exacerbation → systemic corticosteroids
- **Viral**: URI prodrome, lymphocytic → supportive care, consider antivirals
- **Pauci-inflammatory**: Minimal inflammation → optimize bronchodilation, assess for PE/HF

### Biomarker-Guided Treatment
- CRP >40-50 mg/L: Consider antibiotics
- Procalcitonin: Guides antibiotic duration
- Blood eosinophils: Guide corticosteroid use (withhold if eos <200 at exacerbation - CORTICO-COP trial concept)
- Point-of-care testing: Enables precision exacerbation management

## Lung Volume Reduction

### Surgical Lung Volume Reduction (LVRS)
- NETT trial: Improved survival in upper-lobe emphysema + low exercise capacity
- Contraindicated: FEV1 <20% predicted + either DLCO <20% or homogeneous emphysema
- Mechanism: Improves elastic recoil, diaphragm mechanics, V/Q matching

### Bronchoscopic Lung Volume Reduction
**Endobronchial Valves (Zephyr):**
- One-way valves in target lobe bronchi
- Requires intact fissures (no collateral ventilation)
- Chartis system assesses collateral ventilation
- LIBERATE trial: FEV1 improvement of 100 mL at 12 months
- Risk: Pneumothorax (25%), valve migration

**Endobronchial Coils:**
- Nitinol coils compress emphysematous tissue
- Works despite collateral ventilation
- RENEW trial: Modest improvement in 6MWD
- Less robust data than valves

**Thermal Vapor Ablation:**
- Steam delivered to emphysematous segments
- Inflammatory response → fibrosis → volume reduction
- STEP-UP trial: Improved FEV1 and quality of life
- Risk: COPD exacerbation, pneumonia

### Emerging Therapies
- **Targeted lung denervation**: Ablation of parasympathetic airway nerves
- **Anti-IL-33/TSLP in COPD**: Early trials showing reduced exacerbations
- **Dupilumab in COPD**: BOREAS/NOTUS trials - approved 2024 for COPD with Type 2 inflammation (eos ≥300)
- **Itepekimab (anti-IL-33)**: Phase 2 data in COPD and asthma
- **CRISPR-based approaches**: Preclinical for AAT deficiency correction
- **Mesenchymal stem cells**: Phase 1/2 trials in emphysema regeneration`,

      keyTerms: [
        {
          term: 'Omalizumab',
          definition:
            'Anti-IgE monoclonal antibody for moderate-severe allergic asthma; binds free IgE to prevent mast cell activation',
          pronunciation: 'oh-ma-LIZ-oo-mab',
        },
        {
          term: 'Mepolizumab',
          definition:
            'Anti-IL-5 monoclonal antibody that reduces eosinophil production; for severe eosinophilic asthma with blood eos ≥150',
          pronunciation: 'meh-poh-LIZ-oo-mab',
        },
        {
          term: 'Dupilumab',
          definition:
            'Anti-IL-4Rα antibody blocking both IL-4 and IL-13; broadest Type 2 coverage, approved for asthma, atopic dermatitis, CRSwNP, COPD',
          pronunciation: 'doo-PIL-oo-mab',
        },
        {
          term: 'Tezepelumab',
          definition:
            'Anti-TSLP antibody that blocks the most upstream epithelial alarmin; first biologic effective across all asthma phenotypes',
          pronunciation: 'tez-eh-PEL-oo-mab',
        },
        {
          term: 'Bronchial thermoplasty',
          definition:
            'Bronchoscopic procedure using radiofrequency energy to ablate airway smooth muscle in severe refractory asthma',
        },
        {
          term: 'Endobronchial valve',
          definition:
            'One-way valve placed bronchoscopically to deflate hyperinflated emphysematous lung segments; requires absence of collateral ventilation',
        },
        {
          term: 'ADCC',
          definition:
            'Antibody-Dependent Cellular Cytotoxicity - mechanism by which benralizumab directly kills eosinophils via NK cell engagement, unlike mepolizumab which only blocks recruitment',
        },
        {
          term: 'Collateral ventilation',
          definition:
            'Airflow between lung segments through pores of Kohn and channels of Lambert; must be absent for endobronchial valves to work',
        },
      ],
      analogies: [
        'Biologics are precision-guided missiles: omalizumab targets IgE, mepolizumab targets IL-5, dupilumab blocks the IL-4/IL-13 gateway, and tezepelumab cuts the power at the main breaker (TSLP) before any downstream signals even start.',
        'Endobronchial valves are like one-way doors in a building - air can leave the overinflated room but cannot get back in, allowing the room to deflate and give space to healthy rooms.',
        'Bronchial thermoplasty is like removing the excess muscle insulation from around pipes so they stop squeezing shut.',
      ],
      examples: [
        'A severe eosinophilic asthma patient (eos 800, FeNO 65) with nasal polyps started on dupilumab - controls asthma, polyps, and comorbid atopic dermatitis simultaneously',
        'A COPD patient with FEV1 28%, upper-lobe emphysema, and intact fissures undergoes endobronchial valve placement with FEV1 improvement of 120 mL',
        'A COPD patient with eos 450 and frequent exacerbations added to LABA/LAMA/ICS triple therapy; considered for dupilumab based on BOREAS trial data',
        'Severe refractory asthma patient failing omalizumab and mepolizumab switched to tezepelumab with significant exacerbation reduction',
      ],
      clinicalNotes:
        'The biologic landscape is rapidly evolving. Key principles: (1) Assess biomarkers before biologic selection - eos, IgE, FeNO, and comorbidities all guide choice. (2) Allow 4-6 months for full biologic effect assessment. (3) Dupilumab may transiently raise eosinophils; monitor and consider switching to anti-IL-5 if hypereosinophilia develops. (4) The BOREAS and NOTUS trials established dupilumab as the first biologic approved for COPD (eos ≥300). (5) For lung volume reduction, Chartis assessment of collateral ventilation is mandatory before endobronchial valve placement. (6) The treatable traits paradigm is shifting management from disease labels to individual precision phenotyping.',
    },
  },

  media: [],
  citations: [
    {
      id: 'gina-2024',
      type: 'website',
      title: 'Global Strategy for Asthma Management and Prevention',
      authors: ['Global Initiative for Asthma (GINA)'],
      source: 'GINA',
      url: 'https://ginasthma.org',
      accessedDate: '2025-01-28',
    },
    {
      id: 'gold-2024',
      type: 'website',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease (GOLD)'],
      source: 'GOLD',
      url: 'https://goldcopd.org',
      accessedDate: '2025-01-28',
    },
    {
      id: 'ers-bronchiectasis-2017',
      type: 'article',
      title: 'European Respiratory Society guidelines for the management of adult bronchiectasis',
      authors: ['Polverino, E.', 'Goeminne, P.C.', 'McDonnell, M.J.'],
      source: 'European Respiratory Journal',
      url: 'https://doi.org/10.1183/13993003.00629-2017',
    },
  ],
  crossReferences: [
    {
      targetId: 'pulmonology-asthma',
      targetType: 'topic',
      relationship: 'related',
      label: 'Asthma (detailed)',
    },
    {
      targetId: 'pulmonology-copd',
      targetType: 'topic',
      relationship: 'related',
      label: 'COPD (detailed)',
    },
    {
      targetId: 'pulmonology-restrictive-diseases',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Restrictive Lung Diseases',
    },
    {
      targetId: 'pulmonology-pulmonary-vascular',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Pulmonary Vascular Diseases',
    },
  ],
  tags: {
    systems: ['respiratory'],
    topics: [
      'pulmonology',
      'asthma',
      'COPD',
      'bronchiectasis',
      'obstructive',
      'spirometry',
      'biologics',
    ],
    keywords: [
      'airflow obstruction',
      'FEV1',
      'bronchospasm',
      'emphysema',
      'chronic bronchitis',
      'airway remodeling',
      'Type 2 inflammation',
      'eosinophilic',
      'GOLD classification',
      'step therapy',
      'treatable traits',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
