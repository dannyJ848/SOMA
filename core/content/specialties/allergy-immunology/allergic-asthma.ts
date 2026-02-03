import { EducationalContent } from '../../types';

export const allergicAsthmaContent: EducationalContent = {
  id: 'allergy-immunology-allergic-asthma',
  type: 'condition',
  name: 'Allergic Asthma',
  alternateNames: ['Atopic Asthma', 'Extrinsic Asthma', 'IgE-Mediated Asthma'],

  levels: {
    1: {
      level: 1,
      summary: 'Allergic asthma is a type of asthma triggered by allergens like pollen, dust mites, or pet dander, causing airways to become inflamed and narrowed, making breathing difficult.',
      explanation: `Allergic asthma is the most common type of asthma, affecting about 60% of people with asthma. It happens when allergens trigger an asthma attack.

**Common Triggers:**
1. **Dust mites** - Tiny bugs in bedding and furniture
2. **Pollen** - From trees, grasses, and weeds
3. **Pet dander** - Skin flakes from cats, dogs
4. **Mold** - Grows in damp areas
5. **Cockroach particles**

**What Happens During an Attack:**
1. You breathe in an allergen
2. Your immune system overreacts
3. Airways become inflamed and swollen
4. Muscles around airways tighten
5. Extra mucus is produced
6. Breathing becomes difficult

**Symptoms:**
- Wheezing (whistling sound when breathing)
- Shortness of breath
- Chest tightness
- Coughing (especially at night or early morning)

**Treatment Goals:**
- Prevent asthma attacks
- Control symptoms
- Maintain normal activity levels

**Medications:**
- **Quick-relief (rescue)**: Inhaler for immediate symptoms
- **Long-term control**: Daily medications to prevent attacks
- **Allergy medications**: Reduce allergic response

**Prevention Tips:**
- Identify and avoid your triggers
- Use dust mite covers on bedding
- Keep pets out of bedroom
- Use air purifiers
- Take medications as prescribed`,
      keyTerms: [
        { term: 'asthma', definition: 'A lung disease that makes airways narrow and inflamed' },
        { term: 'allergen', definition: 'A substance that triggers an allergic reaction' },
        { term: 'wheezing', definition: 'A whistling sound when breathing due to narrowed airways' },
        { term: 'inhaler', definition: 'A device that delivers medicine directly to the lungs' },
      ],
      analogies: [
        'Asthma airways are like garden hoses that get kinked and filled with gunk when exposed to allergens, making it hard for air to flow through.',
        'An asthma attack is like trying to breathe through a coffee stirrer instead of a straw - much harder work.',
      ],
      examples: [
        'A child with allergic asthma has wheezing and coughing every spring when tree pollen counts are high.',
        'Someone\'s asthma gets worse when they visit a home with cats because they\'re allergic to cat dander.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergic asthma is characterized by IgE-mediated airway inflammation in response to aeroallergens, presenting with variable airflow obstruction and bronchial hyperresponsiveness, managed with inhaled corticosteroids and bronchodilators.',
      explanation: `Allergic asthma represents the most common asthma phenotype, characterized by type 2 (T2) inflammation driven by allergen-specific IgE.

**Epidemiology:**
- Most common asthma phenotype (~60-80% of children, ~50% of adults)
- Often begins in childhood
- Associated with other atopic diseases (rhinitis, eczema)
- Family history of atopy common

**Pathophysiology:**

*Early Phase Response:*
- Allergen inhalation
- IgE crosslinking on mast cells
- Immediate bronchoconstriction
- Peak at 15-30 minutes

*Late Phase Response:*
- Eosinophil recruitment (4-8 hours)
- Continued inflammation
- Prolonged symptoms
- Contributes to airway hyperresponsiveness

**Key Features:**
- Variable airflow obstruction (reversible)
- Bronchial hyperresponsiveness
- Airway inflammation (eosinophilic)
- Structural changes (remodeling)

**Clinical Presentation:**

| Symptom | Characteristics |
|---------|----------------|
| Wheezing | Expiratory, polyphonic |
| Dyspnea | Variable, worse with triggers |
| Cough | Often nocturnal |
| Chest tightness | May be only symptom |

**Diagnosis:**

*Spirometry:*
- FEV1/FVC <0.70 suggests obstruction
- Bronchodilator response: ≥12% and ≥200mL improvement in FEV1

*Allergy Evaluation:*
- Skin prick testing
- Serum-specific IgE
- Total IgE (often elevated)

*Other Tests:*
- FeNO (fractional exhaled nitric oxide): Elevated in T2 inflammation
- Blood eosinophils: Elevated in T2 asthma

**Treatment:**

**Controller Medications:**
- Inhaled corticosteroids (ICS): Foundation of treatment
- Long-acting beta-agonists (LABA): Added if ICS insufficient
- Leukotriene receptor antagonists (LTRA): Alternative add-on

**Reliever Medications:**
- Short-acting beta-agonists (SABA): Albuterol
- For acute symptoms

**Add-on Therapies:**
- Long-acting muscarinic antagonists (LAMA)
- Biologics for severe asthma
- Allergen immunotherapy

**Asthma Control:**
- Symptom frequency
- Night-time awakening
- Rescue inhaler use
- Activity limitation`,
      keyTerms: [
        { term: 'bronchial hyperresponsiveness', definition: 'Exaggerated bronchoconstriction in response to triggers' },
        { term: 'FEV1', definition: 'Forced expiratory volume in 1 second; key spirometry measurement' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; marker of eosinophilic airway inflammation' },
        { term: 'ICS', definition: 'Inhaled corticosteroid; first-line controller medication for asthma' },
        { term: 'LABA', definition: 'Long-acting beta-agonist; bronchodilator added to ICS for better control' },
      ],
      analogies: [
        'Early phase response is like an immediate alarm, while late phase is the full emergency response team arriving hours later.',
        'ICS is like a fire prevention system, while SABA is the fire extinguisher for emergencies.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergic asthma is driven by Th2-mediated inflammation with IgE sensitization to aeroallergens, characterized by eosinophilic airway inflammation, elevated FeNO, and variable airflow limitation, managed with stepwise therapy including biologics targeting type 2 pathways in severe disease.',
      explanation: `Allergic asthma represents T2-high asthma characterized by specific immunologic mechanisms that inform diagnosis and targeted treatment.

**Type 2 Inflammation Paradigm:**

*Key Cytokines:*
- IL-4: Th2 differentiation, IgE class switching
- IL-5: Eosinophil maturation and survival
- IL-13: Mucus production, bronchial hyperresponsiveness, IgE production

*Type 2 Biomarkers:*
- Blood eosinophils ≥150-300 cells/μL
- FeNO ≥20-25 ppb
- Serum total IgE elevated
- Allergen-specific IgE positive

**Pathophysiology - Detailed:**

*Sensitization:*
- Allergen exposure → dendritic cell uptake
- Th2 polarization (GATA3)
- B cell class switching to IgE
- IgE binds FcεRI on mast cells

*Early Asthmatic Response (EAR):*
- Allergen crosslinks surface IgE
- Mast cell degranulation
- Histamine, tryptase, PGD2, LTC4
- Bronchoconstriction within minutes
- Resolves in 1-2 hours

*Late Asthmatic Response (LAR):*
- Begins 3-4 hours after exposure
- Peak at 6-12 hours
- Eosinophil, basophil, Th2 cell influx
- Continued inflammation
- More clinically significant

*Airway Remodeling:*
- Chronic inflammation → structural changes
- Subepithelial fibrosis
- Smooth muscle hypertrophy
- Goblet cell hyperplasia
- Angiogenesis

**Diagnosis:**

**Spirometry:**
- FEV1/FVC ratio below lower limit of normal
- Bronchodilator reversibility: ≥12% AND ≥200mL FEV1 improvement
- If normal, consider bronchial challenge

**Bronchoprovocation Testing:**
- Methacholine challenge: PC20 <4 mg/mL
- Confirms bronchial hyperresponsiveness
- Not specific for asthma

**FeNO Measurement:**
- <25 ppb: Less likely T2 inflammation
- 25-50 ppb: Intermediate
- >50 ppb: Strong T2 inflammation, likely steroid-responsive

**Allergy Evaluation:**
- Skin prick testing to relevant aeroallergens
- Serum-specific IgE
- Confirms atopic status, identifies triggers

**Stepwise Treatment (GINA 2023):**

**Step 1: Mild Intermittent**
- As-needed low-dose ICS-formoterol (preferred track)
- OR as-needed SABA with ICS taken whenever SABA used

**Step 2: Mild Persistent**
- Daily low-dose ICS + as-needed SABA
- OR low-dose ICS-formoterol as-needed

**Step 3: Moderate**
- Low-dose ICS-LABA maintenance
- OR medium-dose ICS

**Step 4: Moderate-Severe**
- Medium-dose ICS-LABA
- Consider adding LAMA (tiotropium)

**Step 5: Severe**
- High-dose ICS-LABA
- Add-on LAMA
- Consider biologics
- Phenotype-guided therapy

**Biologics for Severe Allergic Asthma:**

| Biologic | Target | Eligibility |
|----------|--------|-------------|
| Omalizumab | IgE | IgE-mediated, sensitized |
| Mepolizumab | IL-5 | Eosinophils ≥150 |
| Benralizumab | IL-5Rα | Eosinophils ≥150 |
| Dupilumab | IL-4Rα | T2 (eos or FeNO) |
| Tezepelumab | TSLP | Severe asthma |

**Role of Allergen Immunotherapy:**
- May reduce asthma symptoms
- Reduces medication need
- Subcutaneous or sublingual
- Consider in allergic asthma with clear triggers`,
      keyTerms: [
        { term: 'T2-high asthma', definition: 'Asthma phenotype characterized by type 2 inflammation with eosinophilia and elevated FeNO' },
        { term: 'early asthmatic response', definition: 'Immediate bronchoconstriction after allergen exposure, mediated by mast cells' },
        { term: 'late asthmatic response', definition: 'Delayed inflammation 3-12 hours after allergen exposure, mediated by eosinophils' },
        { term: 'PC20', definition: 'Provocative concentration of methacholine causing 20% FEV1 drop' },
        { term: 'GINA', definition: 'Global Initiative for Asthma; international guidelines for asthma management' },
        { term: 'airway remodeling', definition: 'Structural airway changes from chronic inflammation including fibrosis and smooth muscle hypertrophy' },
      ],
      clinicalNotes: 'FeNO >50 ppb suggests steroid-responsive disease. ICS-formoterol as maintenance and reliever (MART) is preferred in GINA. Blood eosinophils ≥300 cells/μL predicts response to anti-IL-5 biologics. Omalizumab requires positive allergen sensitization and IgE 30-1500 IU/mL.',
    },
    4: {
      level: 4,
      summary: 'Allergic asthma pathogenesis involves IgE-mediated mast cell activation and Th2-driven eosinophilic inflammation, with epithelial alarmins (TSLP, IL-33, IL-25) orchestrating type 2 responses, requiring phenotype-endotype classification for precision biologic selection targeting specific inflammatory pathways.',
      explanation: `Allergic asthma represents a complex T2-high endotype with multiple therapeutic targets requiring precision medicine approaches for optimal management.

**Comprehensive Immunopathogenesis:**

**Epithelial-Driven Inflammation:**

*Barrier Dysfunction:*
- Tight junction disruption
- Increased allergen penetration
- Proteolytic allergens damage epithelium

*Alarmin Signaling:*
- TSLP: Activates dendritic cells, promotes Th2, blocks Treg function
- IL-33: Activates ILC2s and Th2 cells, promotes IL-5/IL-13
- IL-25: Enhances Th2 responses

**Innate Immune Contribution:**

*ILC2s:*
- Respond to IL-33, IL-25
- Produce IL-5, IL-13 rapidly
- Allergen-independent
- Amplify adaptive response

*Mast Cells:*
- Tissue-resident, IgE-sensitized
- Immediate degranulation: Histamine, tryptase, PGD2, LTC4
- Contribute to early and late responses

**Adaptive Immunity:**

*Th2 Cells:*
- GATA3+ CD4+ T cells
- IL-4 → IgE production, Th2 amplification
- IL-5 → Eosinophil maturation
- IL-13 → Mucus, AHR, remodeling

*IgE Production:*
- Allergen-specific B cell activation
- Tfh cell help in germinal centers
- Class switch recombination
- High-affinity IgE

**Effector Mechanisms:**

*Eosinophils:*
- Major effector cell in allergic asthma
- Major basic protein → epithelial damage
- Eosinophil peroxidase → oxidative damage
- Cytokine and lipid mediator release

*Structural Cells:*
- Smooth muscle: Contraction, hypertrophy
- Epithelium: Mucus secretion, barrier repair
- Fibroblasts: Collagen deposition

**Phenotype-Endotype Classification:**

| Phenotype | T2 Markers | Features | Biologics |
|-----------|-----------|----------|-----------|
| T2-high allergic | IgE+, eos+, FeNO+ | Atopy, early onset | Omalizumab, dupilumab |
| T2-high eosinophilic | Eos+, FeNO± | May be non-allergic | Anti-IL-5, dupilumab |
| T2-low | Eos-, FeNO- | Neutrophilic or pauci | Limited biologic options |

**Biologic Mechanisms:**

**Omalizumab (Anti-IgE):**
- Binds free IgE (Cε3 domain)
- Prevents IgE binding to FcεRI
- Downregulates FcεRI on mast cells/basophils
- Reduces allergen-induced responses

*Eligibility:*
- Positive skin test or sIgE to perennial aeroallergen
- Total IgE 30-1500 IU/mL (dosing based on IgE and weight)
- Moderate-severe persistent asthma

**Anti-IL-5 Pathway:**

*Mepolizumab:*
- Binds IL-5
- Reduces eosinophil production and survival
- ~50% reduction in exacerbations

*Benralizumab:*
- Binds IL-5Rα
- ADCC of eosinophils (direct depletion)
- Near-complete eosinophil reduction

*Eligibility:*
- Blood eosinophils ≥150-300 cells/μL (depending on guideline)
- Severe asthma with exacerbations

**Dupilumab (Anti-IL-4Rα):**
- Blocks IL-4 and IL-13 signaling
- Reduces T2 inflammation broadly
- Improves lung function
- Approved for moderate-severe T2 asthma

*Eligibility:*
- Blood eosinophils ≥150 cells/μL OR FeNO ≥25 ppb
- Oral corticosteroid-dependent asthma

**Tezepelumab (Anti-TSLP):**
- Blocks upstream alarmin
- Effective across T2-high and some T2-low
- Broadest asthma indication

*Mechanism:*
- Prevents TSLP-mediated DC activation
- Reduces downstream T2 inflammation
- May affect ILC2s and Th2 cells

**Allergen Immunotherapy in Asthma:**

**Evidence:**
- SCIT reduces asthma symptoms and medication use
- SLIT (tablet) for house dust mite reduces exacerbations
- May have disease-modifying effects

**Patient Selection:**
- Clear allergen trigger identified
- Sensitization confirmed
- Mild-moderate allergic asthma
- Controlled before initiating AIT

**Considerations:**
- Risk of anaphylaxis (especially SCIT)
- Contraindicated in severe uncontrolled asthma
- May be used with biologics in some cases

**Monitoring and Outcomes:**

**Assessment of Control:**
- ACQ (Asthma Control Questionnaire)
- ACT (Asthma Control Test)
- Exacerbation frequency
- Lung function (FEV1)

**Biomarker Monitoring:**
- Blood eosinophils
- FeNO
- Predict response and guide therapy`,
      keyTerms: [
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; epithelial alarmin that initiates type 2 inflammation' },
        { term: 'ILC2', definition: 'Group 2 innate lymphoid cells; produce IL-5 and IL-13 rapidly in response to alarmins' },
        { term: 'endotype', definition: 'Disease subtype defined by underlying molecular mechanism' },
        { term: 'ADCC', definition: 'Antibody-dependent cellular cytotoxicity; mechanism of benralizumab-mediated eosinophil depletion' },
        { term: 'MART', definition: 'Maintenance and reliever therapy; ICS-formoterol for both daily use and rescue' },
        { term: 'Cε3 domain', definition: 'Region of IgE bound by omalizumab, preventing FcεRI binding' },
      ],
      clinicalNotes: 'Biologic selection: Consider specific sensitization (omalizumab), eosinophil count (anti-IL-5), FeNO (dupilumab), or broadest spectrum (tezepelumab). Assess response at 4-6 months. Overlap patients may qualify for multiple biologics. HDM SLIT approved for allergic asthma. Anti-TSLP may benefit T2-low patients.',
    },
    5: {
      level: 5,
      summary: 'Allergic asthma represents a T2-high endotype characterized by IgE-mediated mast cell activation, Th2/ILC2-driven eosinophilic inflammation, and epithelial alarmin amplification, requiring comprehensive phenotyping with biomarkers (eosinophils, FeNO, IgE) to guide precision biologic selection targeting IgE, IL-5, IL-4/IL-13, or TSLP pathways for disease modification.',
      explanation: `Optimal management of allergic asthma requires integration of molecular endotyping, biomarker-guided therapy selection, and understanding of therapeutic mechanisms.

**Systems-Level Pathophysiology:**

**The Allergic Asthma Network:**

*Level 1: Initiation*
- Allergen exposure at mucosal surfaces
- Epithelial sensing and alarmin release
- Dendritic cell activation and migration

*Level 2: Sensitization and Amplification*
- Th2 priming in lymph nodes
- IgE production by B cells
- ILC2 activation by alarmins
- Memory cell generation

*Level 3: Effector Phase*
- IgE-mediated mast cell activation
- Eosinophil recruitment and activation
- Structural cell responses

*Level 4: Chronicity and Remodeling*
- Persistent inflammation
- Smooth muscle hypertrophy
- Subepithelial fibrosis
- Fixed airflow obstruction

**Precision Medicine Framework:**

**Biomarker Integration:**

| Biomarker | Cut-off | Significance |
|-----------|---------|--------------|
| Blood eosinophils | ≥150 cells/μL | T2, anti-IL-5 candidate |
| Blood eosinophils | ≥300 cells/μL | Strong T2, exacerbation risk |
| FeNO | ≥25 ppb | T2, ICS/dupilumab responsive |
| FeNO | ≥50 ppb | High T2, likely steroid responsive |
| Total IgE | 30-1500 IU/mL | Omalizumab dosing range |
| Perennial sensitization | Positive | Omalizumab eligible |

**Biologic Selection Algorithm:**

*Allergic phenotype + eosinophils ≥150:*
- Consider omalizumab or dupilumab
- Anti-IL-5 if eosinophil-predominant

*Eosinophilic + not clearly allergic:*
- Mepolizumab, benralizumab, or dupilumab
- Consider tezepelumab

*High FeNO:*
- Dupilumab particularly effective
- ICS optimization if not done

*Oral corticosteroid-dependent:*
- Dupilumab has strong OCS-sparing data
- Anti-IL-5 agents also effective

*Broad T2 inflammation:*
- Tezepelumab (upstream target)
- May benefit some T2-low patients

**Mechanisms and Evidence:**

**Omalizumab:**
- Mechanism: IgE neutralization, FcεRI downregulation
- Effect: 25-50% exacerbation reduction
- Unique: Approved for allergic asthma, urticaria, food allergy
- Considerations: Weight/IgE-based dosing, injection every 2-4 weeks

**Mepolizumab:**
- Mechanism: IL-5 neutralization
- Effect: ~50% exacerbation reduction, OCS sparing
- Unique: Also approved for EGPA, HES
- Dose: 100 mg SQ monthly

**Benralizumab:**
- Mechanism: IL-5Rα binding + ADCC
- Effect: ~50% exacerbation reduction, near-complete eosinophil depletion
- Unique: Every 8 weeks after loading
- May be preferred when rapid eosinophil reduction needed

**Dupilumab:**
- Mechanism: IL-4Rα blockade (IL-4 and IL-13)
- Effect: 50-70% exacerbation reduction, significant FEV1 improvement
- Unique: Broad T2 blocking, approved for AD, CRSwNP, EoE
- Considerations: Eosinophilia may transiently increase

**Tezepelumab:**
- Mechanism: TSLP neutralization (upstream alarmin)
- Effect: ~56-70% exacerbation reduction across phenotypes
- Unique: Effective in T2-low and severe exacerbators
- Broadest approved indication (severe asthma regardless of phenotype)

**Emerging Concepts:**

**Treatable Traits:**
- Beyond phenotype to individual characteristics
- Airway inflammation (T2 biomarkers)
- Structural (airway remodeling)
- Comorbidities (rhinitis, GERD, obesity)
- Behavioral (adherence, inhaler technique)

**Remission as Goal:**
- No symptoms
- No exacerbations
- Stable lung function
- Minimal/no medication
- Achievable in some patients with biologics + optimization

**Combination Biologics:**
- Investigational: Combining mechanisms
- Targeting multiple pathways
- For super-refractory patients

**Special Considerations:**

**Allergic Bronchopulmonary Aspergillosis (ABPA):**
- IgE-mediated reaction to Aspergillus
- Elevated total IgE (often >1000 IU/mL)
- Aspergillus-specific IgE and IgG
- Central bronchiectasis
- Treat with corticosteroids ± antifungals
- Omalizumab may be beneficial

**Aspirin-Exacerbated Respiratory Disease (AERD):**
- Asthma + nasal polyps + NSAID sensitivity
- T2-high, often eosinophilic
- Dupilumab effective (approved for CRSwNP)
- Aspirin desensitization considered

**Occupational Asthma:**
- IgE-mediated (sensitizer-induced): High molecular weight agents
- Remove from exposure when possible
- Biologics if severe and exposure ongoing

**Pediatric Considerations:**
- Biologics approved down to age 6 (omalizumab, dupilumab, mepolizumab, benralizumab)
- Tezepelumab approved 12+
- Early biologic use may prevent remodeling

**Comprehensive Management:**

*Pharmacotherapy:*
- ICS-LABA backbone
- Add LAMA if needed
- Biologic based on phenotype
- Consider AIT if appropriate

*Non-Pharmacologic:*
- Allergen avoidance
- Smoking cessation
- Weight management
- Treat comorbidities

*Monitoring:*
- Symptom control (ACT/ACQ)
- Exacerbation history
- Lung function (FEV1, FVC)
- Biomarkers (eosinophils, FeNO)
- Side effects`,
      keyTerms: [
        { term: 'treatable traits', definition: 'Personalized medicine approach identifying specific characteristics that can be targeted therapeutically' },
        { term: 'clinical remission', definition: 'State of no symptoms, no exacerbations, and stable lung function with minimal therapy' },
        { term: 'ABPA', definition: 'Allergic bronchopulmonary aspergillosis; IgE-mediated hypersensitivity to Aspergillus colonization' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; triad of asthma, nasal polyps, and NSAID sensitivity' },
        { term: 'super-refractory asthma', definition: 'Severe asthma not responding to high-dose therapy including biologics' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- T2-high asthma: Eosinophils ≥150 OR FeNO ≥25 ppb OR IgE-mediated
- FeNO >50 ppb predicts ICS responsiveness
- Omalizumab: IgE 30-1500, perennial sensitization required
- Anti-IL-5: Blood eos ≥150-300, exacerbations despite ICS-LABA
- Dupilumab: Broadest T2 coverage, OCS-sparing, also for AD/CRSwNP
- Tezepelumab: Upstream (TSLP), works across phenotypes
- ABPA: Total IgE often >1000, Aspergillus IgE+, central bronchiectasis
- AERD: Biologics (dupilumab) or aspirin desensitization
- Assess biologic response at 4-6 months
- Goal: Reduce exacerbations, improve QoL, spare OCS`,
    },
  },

  media: [
    {
      id: 'asthma-inflammation',
      type: 'diagram',
      filename: 'allergic-asthma-pathophysiology.svg',
      title: 'Allergic Asthma Pathophysiology',
      description: 'Type 2 inflammation cascade in allergic asthma',
    },
    {
      id: 'biologic-selection',
      type: 'diagram',
      filename: 'asthma-biologic-algorithm.svg',
      title: 'Biologic Selection for Severe Asthma',
      description: 'Algorithm for choosing biologics based on phenotype',
    },
  ],
  citations: [
    {
      id: 'gina-2023',
      type: 'article',
      title: 'Global Strategy for Asthma Management and Prevention',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA Report',
    },
    {
      id: 'asthma-biologics-review',
      type: 'article',
      title: 'Biologics for severe asthma: current evidence and future directions',
      authors: ['Holguin F', 'Cardet JC', 'Chung KF'],
      source: 'Journal of Allergy and Clinical Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-environmental-allergies', targetType: 'condition', relationship: 'related', label: 'Environmental Allergies' },
    { targetId: 'allergy-immunology-anaphylaxis', targetType: 'condition', relationship: 'see-also', label: 'Anaphylaxis' },
    { targetId: 'allergy-immunology-immunotherapy', targetType: 'concept', relationship: 'see-also', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['immune', 'respiratory'],
    topics: ['immunology', 'allergy', 'pulmonology'],
    keywords: ['allergic asthma', 'eosinophilic asthma', 'biologics', 'ICS', 'T2 inflammation', 'omalizumab'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default allergicAsthmaContent;
