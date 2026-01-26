import { EducationalContent } from '../../types';

export const pediatricAsthma: EducationalContent = {
  id: 'pediatrics-asthma',
  type: 'condition',
  name: 'Pediatric Asthma',
  alternateNames: ['Childhood Asthma', 'Reactive Airway Disease', 'Pediatric Wheezing'],

  levels: {
    1: {
      level: 1,
      summary: 'Asthma is a common condition where the airways in the lungs get tight and swollen, making it hard to breathe. It can be controlled with the right medicines.',
      explanation: `Asthma is one of the most common chronic diseases in children. Understanding it helps kids and parents manage it well!

**What Happens in Asthma?**

When a child with asthma breathes in triggers (like dust, pollen, or cold air), three things happen:
1. **Airways swell** (inflammation) - like a swollen ankle
2. **Muscles around airways tighten** (bronchospasm) - like a clenched fist
3. **Extra mucus** forms - makes airways even narrower

This makes it hard to move air in and out, causing the symptoms.

**Common Symptoms:**
- Wheezing (whistling sound when breathing)
- Coughing (especially at night or early morning)
- Shortness of breath
- Chest tightness
- Getting tired quickly during exercise

**Common Triggers:**
- Colds and other viruses (biggest trigger in kids!)
- Allergies (dust mites, pollen, pet dander, mold)
- Exercise
- Cold air
- Cigarette smoke
- Strong emotions (laughing, crying)

**Types of Asthma Medicines:**

**1. Quick-Relief (Rescue) Medicine:**
- Albuterol (Ventolin, ProAir) - inhaler
- Works in minutes to open airways
- Use when symptoms start or before exercise
- Think: "Emergency medicine"

**2. Controller (Preventive) Medicine:**
- Inhaled corticosteroids (Flovent, QVAR, Pulmicort)
- Taken every day to prevent symptoms
- Takes weeks to work fully
- Think: "Daily protection"

**Using an Inhaler:**

*With a Spacer (recommended for kids):*
1. Shake the inhaler
2. Attach to spacer
3. Breathe out
4. Press inhaler and breathe in slowly
5. Hold breath for 10 seconds
6. Wait 1 minute between puffs

**Asthma Action Plan:**

Every child with asthma should have a written plan from their doctor:
- **Green Zone** (doing well): Take regular medicines
- **Yellow Zone** (getting worse): Add rescue inhaler, may increase controller
- **Red Zone** (emergency): Use rescue inhaler, call doctor or go to ER

**When to Get Emergency Help:**
- Rescue inhaler not helping
- Can't talk in full sentences
- Ribs showing when breathing
- Lips or fingernails turning blue
- Child seems very scared or confused`,
      keyTerms: [
        { term: 'asthma', definition: 'A condition where airways become swollen and tight, causing breathing problems' },
        { term: 'wheeze', definition: 'A whistling sound made when air moves through narrow airways' },
        { term: 'trigger', definition: 'Something that causes asthma symptoms to start' },
        { term: 'inhaler', definition: 'A device that delivers medicine directly into the lungs' },
        { term: 'spacer', definition: 'A tube attached to an inhaler that helps medicine get deep into the lungs' },
      ],
      analogies: [
        'Airways during an asthma attack are like a garden hose that someone is stepping on - air can\'t flow through well.',
        'Controller medicine is like sunscreen - you have to use it every day before problems happen, not just when you\'re already burned.',
        'The asthma action plan is like a traffic light - green means go, yellow means caution, red means stop and get help.',
      ],
      examples: [
        'A child who coughs every night might have asthma, even if they don\'t wheeze.',
        'A child who can\'t keep up in soccer and gets out of breath quickly might have exercise-induced asthma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pediatric asthma is characterized by chronic airway inflammation and bronchial hyperreactivity, managed with stepwise therapy based on symptom frequency, with different phenotypes affecting prognosis and treatment response.',
      explanation: `Asthma in children requires understanding of disease patterns and evidence-based management approaches.

**Pathophysiology:**

1. **Chronic airway inflammation:**
   - Eosinophils, mast cells, T-lymphocytes
   - Inflammatory mediators (histamine, leukotrienes)

2. **Bronchial hyperreactivity:**
   - Exaggerated bronchoconstriction to triggers
   - Airway smooth muscle contraction

3. **Airway remodeling (with chronic disease):**
   - Basement membrane thickening
   - Smooth muscle hypertrophy
   - Mucus gland hyperplasia

**Diagnosis:**

*Clinical Criteria:*
- Recurrent wheeze, cough, dyspnea, chest tightness
- Symptoms worse at night or early morning
- Triggered by specific factors
- Response to bronchodilators

*Supporting Evidence:*
- Family history of asthma/atopy
- Personal history of eczema, allergic rhinitis
- Symptom pattern consistent with asthma

*Spirometry (age 5+):*
- FEV1/FVC ratio reduced (<0.85 in children)
- Bronchodilator responsiveness: ≥12% improvement in FEV1

**Classification by Severity (Before Treatment):**

| Severity | Symptoms | Nighttime | FEV1 |
|----------|----------|-----------|------|
| Intermittent | ≤2 days/week | ≤2x/month | >80% |
| Mild Persistent | >2 days/week | 3-4x/month | >80% |
| Moderate Persistent | Daily | >1x/week | 60-80% |
| Severe Persistent | Throughout day | Frequent | <60% |

**Stepwise Management (NAEPP Guidelines):**

*Step 1:* Intermittent asthma
- SABA as needed only

*Step 2:* Low-dose ICS (preferred)
- Alternative: LTRA (montelukast)

*Step 3:* Low-dose ICS + LABA OR medium-dose ICS
- LABA: Salmeterol, formoterol (always with ICS)

*Step 4:* Medium-dose ICS + LABA

*Step 5:* High-dose ICS + LABA

*Step 6:* Add oral corticosteroids and/or biologics

**Medications:**

*Inhaled Corticosteroids (ICS):*
| Drug | Low Dose (mcg/day) | Medium | High |
|------|-------------------|--------|------|
| Fluticasone HFA | 88-176 | 176-352 | >352 |
| Budesonide DPI | 180-360 | 360-720 | >720 |
| Beclomethasone | 80-160 | 160-320 | >320 |

*Long-Acting Beta Agonists (LABA):*
- Never use as monotherapy
- Always combined with ICS (FDA black box warning)

*Leukotriene Receptor Antagonists:*
- Montelukast: 4 mg (2-5 yr), 5 mg (6-14 yr), 10 mg (≥15 yr)
- FDA boxed warning regarding neuropsychiatric effects

**Acute Exacerbation Management:**

*Mild-Moderate:*
- Albuterol 4-8 puffs via MDI with spacer q20min x 3
- Consider oral prednisone 1-2 mg/kg

*Severe:*
- Continuous albuterol nebulization
- Ipratropium (first hour)
- Systemic corticosteroids
- Magnesium sulfate IV
- Consider ICU if not responding

**Special Populations:**

*Viral-Induced Wheeze (Preschoolers):*
- Common phenotype
- Often outgrown
- Intermittent ICS during viral illnesses may help

*Exercise-Induced Bronchoconstriction:*
- SABA 15 minutes before exercise
- Warm-up may help
- Consider daily ICS if frequent`,
      keyTerms: [
        { term: 'bronchial hyperreactivity', definition: 'Exaggerated airway narrowing in response to triggers' },
        { term: 'ICS', definition: 'Inhaled corticosteroids; anti-inflammatory controller medications' },
        { term: 'LABA', definition: 'Long-acting beta agonist; long-duration bronchodilator (must use with ICS)' },
        { term: 'SABA', definition: 'Short-acting beta agonist; quick-relief bronchodilator (albuterol)' },
        { term: 'spirometry', definition: 'Lung function test measuring airflow; confirms asthma diagnosis in older children' },
      ],
      analogies: [
        'ICS is the fire extinguisher preventing the fire (inflammation); SABA opens the escape route (bronchodilation) when you\'re already in trouble.',
        'Stepping up and down treatment is like adjusting the thermostat - you find the lowest setting that keeps things comfortable.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive asthma management integrates phenotype-based assessment, biomarker utilization, and understanding of allergic versus non-allergic pathways to optimize controller therapy, while recognizing factors affecting treatment response and disease trajectory.',
      explanation: `Evidence-based asthma care requires phenotype recognition and individualized management strategies.

**Asthma Phenotypes in Children:**

**1. Allergic Asthma (Most Common):**
- Onset in early childhood
- Associated with eczema, allergic rhinitis (atopic march)
- Elevated IgE, positive allergen skin testing
- Eosinophilic inflammation
- Generally good response to ICS
- Often persists into adulthood

**2. Viral-Induced Wheeze:**
- Triggers: Rhinovirus, RSV most common
- Preschool age predominant
- Often resolves by school age
- May not respond well to daily ICS
- Intermittent ICS during viral illness may help

**3. Exercise-Induced Bronchoconstriction:**
- Symptoms during/after exercise
- May be isolated or part of overall asthma
- Airway dehydration and cooling trigger bronchospasm

**4. Obesity-Related Asthma:**
- Non-eosinophilic inflammation
- Reduced response to ICS
- Weight management key component

**Biomarkers:**

*Fractional Exhaled Nitric Oxide (FeNO):*
- Reflects eosinophilic airway inflammation
- Normal: <25 ppb (children), <50 ppb (adults)
- Elevated: Suggests allergic/eosinophilic asthma
- Uses: Diagnosis support, monitoring adherence, predicting ICS response

*Blood Eosinophils:*
- >300 cells/μL suggests type 2 inflammation
- Predicts response to ICS and biologics

*Serum IgE:*
- Elevated in allergic asthma
- Guides omalizumab dosing

**Diagnostic Evaluation:**

*Spirometry (Age 5+):*
- FEV1/FVC <0.85 suggests obstruction
- Bronchodilator response: ≥12% increase in FEV1
- Repeat periodically to assess control

*Bronchoprovocation Testing:*
- Methacholine challenge: Positive if PC20 <4 mg/mL
- Exercise challenge: ≥10% fall in FEV1

*Allergy Testing:*
- Skin prick testing or specific IgE
- Identifies triggers for avoidance
- Guides allergen immunotherapy decisions

**Control Assessment:**

*Well-Controlled (all of):*
- Symptoms ≤2 days/week
- Nighttime symptoms ≤2x/month
- No activity limitation
- SABA use ≤2 days/week
- FEV1 >80% predicted

*Assessment Tools:*
- Childhood Asthma Control Test (C-ACT): Age 4-11
- Asthma Control Test (ACT): Age 12+
- Score ≥20 indicates well-controlled

**Step-Up/Step-Down Strategies:**

*Before Stepping Up, Consider:*
1. Adherence (electronic monitors show 50% non-adherence common)
2. Inhaler technique
3. Ongoing trigger exposure
4. Comorbidities (rhinitis, GERD, obesity)
5. Alternative diagnosis

*Stepping Down:*
- After 3 months of good control
- Reduce step every 3 months
- Do not stop ICS completely in persistent asthma
- Monitor closely after any step-down

**Comorbidities:**

*Allergic Rhinitis:*
- Present in 75-80% of allergic asthma
- Treating rhinitis improves asthma control
- Intranasal steroids, antihistamines

*Gastroesophageal Reflux:*
- Association with asthma, but treating asymptomatic GERD doesn't improve asthma
- Treat if symptomatic

*Obesity:*
- Increases asthma severity
- Reduces medication response
- Weight management improves control

**Severe Asthma Considerations:**

*Definition:*
- Requires Step 4-5 therapy to maintain control, OR
- Remains uncontrolled despite Step 4-5 therapy

*Evaluation:*
- Confirm diagnosis (not VCD, cardiac, etc.)
- Assess adherence, technique, triggers
- Phenotype assessment (biomarkers)
- Consider specialty referral

*Biologic Therapies:*
- Omalizumab (anti-IgE): Age ≥6, allergic asthma
- Dupilumab (anti-IL-4/IL-13): Age ≥6, moderate-severe with type 2 inflammation
- Mepolizumab (anti-IL-5): Age ≥6, severe eosinophilic
- Benralizumab (anti-IL-5R): Age ≥12`,
      keyTerms: [
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of eosinophilic airway inflammation' },
        { term: 'atopic march', definition: 'Progression from eczema in infancy to allergic rhinitis and asthma in childhood' },
        { term: 'phenotype', definition: 'Observable characteristics of disease; guides treatment selection in asthma' },
        { term: 'type 2 inflammation', definition: 'Immune response involving IL-4, IL-5, IL-13, eosinophils; responds to ICS and biologics' },
      ],
      clinicalNotes: 'FeNO >35 ppb in a symptomatic child strongly supports asthma diagnosis and predicts good ICS response. Persistently elevated FeNO despite ICS suggests non-adherence, ongoing allergen exposure, or need for step-up therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced asthma management integrates understanding of type 2 versus non-type 2 endotypes, precision medicine approaches using biomarkers for treatment selection, and management of severe and refractory asthma including biologic selection and assessment of treatment response.',
      explanation: `Complex asthma care requires endotype-specific approaches and individualized therapeutic strategies.

**Molecular Endotypes:**

**Type 2 (T2-High) Asthma:**

*Pathophysiology:*
- TH2 lymphocyte activation
- IL-4: IgE class switching
- IL-5: Eosinophil maturation and survival
- IL-13: Mucus production, airway remodeling

*Subtypes:*
- Allergic (IgE-mediated)
- Eosinophilic (IL-5-driven)
- Often overlap

*Biomarker Profile:*
- Elevated FeNO (>25-35 ppb)
- Blood eosinophils >300 cells/μL
- Elevated IgE

**Non-Type 2 (T2-Low) Asthma:**

*Characteristics:*
- Normal FeNO and eosinophils
- Neutrophilic or paucigranulocytic
- Often obesity-associated
- Less responsive to ICS

*Management Challenges:*
- No approved biologics
- LAMA may be helpful
- Treat comorbidities (obesity, GERD)
- Macrolides (azithromycin) in some adults (limited pediatric data)

**Biologic Selection:**

| Biologic | Target | Indication | Key Biomarkers |
|----------|--------|------------|----------------|
| Omalizumab | IgE | Allergic asthma | IgE 30-1300, positive allergen testing |
| Dupilumab | IL-4Rα | Type 2 inflammation | FeNO ≥25, eos ≥150, or OCS-dependent |
| Mepolizumab | IL-5 | Eosinophilic | Eos ≥150 (or ≥300 in past year) |
| Benralizumab | IL-5Rα | Eosinophilic | Eos ≥150 |
| Tezepelumab | TSLP | Severe asthma | Broad efficacy (T2 and some non-T2) |

**Biologic Response Assessment:**
- Evaluate at 4-6 months
- Primary outcomes: Exacerbation reduction, OCS reduction
- Secondary: Symptoms, FEV1, QoL
- If inadequate response, consider switching or overlap phenotype

**Severe Asthma Workup:**

*Confirm Diagnosis:*
- Review spirometry, challenge testing if needed
- Consider alternatives: VCD, cardiac, bronchiolitis obliterans

*Assess Modifiable Factors:*
- Adherence monitoring (electronic, pharmacy refills)
- Inhaler technique assessment
- Trigger identification and avoidance
- Comorbidity management

*Phenotype/Endotype Assessment:*
- FeNO
- Blood eosinophils
- Serum IgE and allergen-specific IgE
- Consider sputum induction in research settings

**Acute Severe Asthma (Status Asthmaticus):**

*Initial Management:*
- Continuous albuterol (10-20 mg/hour)
- Ipratropium q20min x 3 (first hour)
- Systemic steroids (methylprednisolone 2 mg/kg, max 60 mg)
- Oxygen to maintain SpO2 >92%

*Adjunctive Therapies:*
- Magnesium sulfate IV: 25-50 mg/kg (max 2 g) over 20 min
- Terbutaline IV: If not responding to inhaled
- Heliox: May reduce work of breathing
- Ketamine: Bronchodilator properties, sedation

*Ventilation Considerations:*
- NIV: May avoid intubation in some
- Intubation: Large ETT, low RR, long expiratory time
- Permissive hypercapnia acceptable
- Watch for dynamic hyperinflation, pneumothorax

**Long-Term Outcomes:**

*Factors Predicting Persistence:*
- Severity of early symptoms
- Allergic sensitization
- Reduced lung function
- Family history
- Low SES

*Airway Remodeling:*
- Begins early in disease
- Subepithelial fibrosis
- Smooth muscle hypertrophy
- May be partially preventable with early ICS

**Transition to Adult Care:**

*Challenges:*
- Loss to follow-up common
- Decline in adherence
- New triggers (smoking, occupational)
- Pregnancy planning

*Best Practices:*
- Begin planning at 12-14 years
- Gradual transfer of self-management
- Written transition plan
- Ensure adult provider identified`,
      keyTerms: [
        { term: 'endotype', definition: 'Subtype of disease defined by distinct underlying molecular pathway; guides targeted therapy' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; epithelial cytokine upstream of type 2 inflammation' },
        { term: 'status asthmaticus', definition: 'Severe asthma exacerbation unresponsive to standard bronchodilator therapy' },
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping with inadequate exhalation time; complication of mechanical ventilation in asthma' },
      ],
      clinicalNotes: 'Before adding biologic therapy, ensure: diagnosis confirmed, adherence optimized, inhaler technique checked, comorbidities treated, and ongoing allergen exposure addressed. Consider phenotype overlap - some patients may benefit from switching biologics.',
    },
    5: {
      level: 5,
      summary: 'Contemporary asthma science integrates epithelial biology, innate immunity, and understanding of the airway microbiome with novel therapeutic targets, while precision medicine approaches leverage multi-omics data for treatment optimization and disease modification strategies.',
      explanation: `State-of-the-art asthma management reflects advances in understanding disease heterogeneity and molecular mechanisms.

**Epithelial Immunity and Alarmins:**

*Epithelial-Derived Cytokines:*
- TSLP: Activates dendritic cells, promotes TH2 differentiation
- IL-25: Activates ILC2s
- IL-33: Released by epithelial damage, activates ILC2s

*Therapeutic Implications:*
- Tezepelumab (anti-TSLP): Efficacy across phenotypes
- Anti-IL-33: Itepekimab in trials
- Targeting alarmins may benefit non-T2 phenotypes

*Epithelial Barrier Dysfunction:*
- Filaggrin mutations (eczema, asthma link)
- Tight junction abnormalities
- Increased allergen penetration

**Innate Lymphoid Cells (ILCs):**

*ILC2s in Asthma:*
- Respond to epithelial alarmins
- Produce IL-5, IL-13 (type 2 cytokines)
- Steroid-responsive
- Tissue-resident, respond rapidly

*Clinical Relevance:*
- ILC2s contribute to non-allergic eosinophilic asthma
- May explain eosinophilia without allergen sensitization
- Target for novel therapies

**Airway Microbiome:**

*Dysbiosis in Asthma:*
- Reduced diversity compared to healthy controls
- Proteobacteria (Haemophilus, Moraxella) more common
- Early-life microbiome influences asthma development

*The "Hygiene Hypothesis" Evolution:*
- Farm exposure protective
- Microbial diversity during critical window
- Bacterial metabolites (short-chain fatty acids) influence immunity

*Therapeutic Potential:*
- Probiotic interventions (limited evidence to date)
- Bacterial lysates (OM-85) under study
- Fecal microbiota transplantation (research stage)

**Precision Medicine:**

*Treatable Traits Approach:*
- Identify individual characteristics driving disease
- Pulmonary traits: Airflow limitation, airway hyperresponsiveness
- Extrapulmonary traits: Rhinitis, obesity, GERD
- Behavioral traits: Adherence, inhaler technique

*Biomarker-Guided Therapy:*
- FeNO-guided ICS dosing (some evidence for benefit)
- Blood eosinophil thresholds for biologic selection
- Composite biomarker scores under development

*Pharmacogenomics:*
- ADRB2 variants: Theoretical impact on LABA response
- FCER2 variants: ICS response variability
- Not yet standard clinical practice

**Emerging Therapeutics:**

*Novel Biologics:*
- Anti-IL-33: Itepekimab (Phase 2 positive results)
- Anti-TSLP: Tezepelumab (FDA approved)
- Combination approaches being studied

*Small Molecules:*
- JAK inhibitors: Block cytokine signaling
- PDE4 inhibitors: Anti-inflammatory
- CRTH2 antagonists: Block prostaglandin D2 effects

*Bronchial Thermoplasty:*
- Radiofrequency ablation of airway smooth muscle
- For severe refractory asthma in adults
- Not approved in children

**Disease Modification:**

*Early Intervention Concept:*
- Window of opportunity in early childhood
- Early ICS may modify disease course (debated)
- PARK and PEAK studies inform practice

*Allergen Immunotherapy:*
- SCIT and SLIT for allergic asthma
- May modify disease course if started early
- Prevention studies (PAT, MSTOPS) show promise

*Vitamin D and Asthma:*
- Prenatal and early-life sufficiency may be protective
- Supplementation trials mixed results
- Biological plausibility for immune modulation

**Severe Asthma Research Frontiers:**

*Treatable Pathways:*
- Non-type 2 molecular targets needed
- Neutrophilic asthma: CXCR2 antagonists, macrolides
- Airway smooth muscle: Biologics targeting smooth muscle

*Digital Health:*
- Smart inhalers tracking use and technique
- Machine learning for exacerbation prediction
- Remote monitoring platforms

*Future Therapies:*
- Gene therapy approaches
- CAR-T for allergic disease (very early research)
- Precision prevention strategies

**Pediatric-Specific Considerations:**

*Preschool Wheeze:*
- API (Asthma Predictive Index) for risk stratification
- Intermittent vs. daily ICS strategies
- Natural history variable

*Growth Effects of ICS:*
- Modest reduction in adult height (approximately 1 cm)
- Benefits outweigh risks in persistent asthma
- Use lowest effective dose

*School-Based Management:*
- Stock albuterol policies
- Asthma action plans
- Physical education accommodations

**Global Health Perspectives:**

*Asthma Burden:*
- 14% of children affected globally
- Mortality highest in low/middle-income countries
- Access to ICS remains a challenge

*Environmental Factors:*
- Air pollution increasing asthma
- Climate change affecting pollen seasons
- Traffic-related air pollution near schools concerning`,
      keyTerms: [
        { term: 'alarmin', definition: 'Damage-associated epithelial cytokines (TSLP, IL-25, IL-33) that initiate type 2 immune responses' },
        { term: 'ILC2', definition: 'Group 2 innate lymphoid cells; tissue-resident cells that produce type 2 cytokines independent of antigen specificity' },
        { term: 'treatable traits', definition: 'Approach identifying specific, modifiable characteristics across pulmonary, extrapulmonary, and behavioral domains' },
        { term: 'bronchial thermoplasty', definition: 'Interventional procedure using radiofrequency energy to reduce airway smooth muscle mass' },
        { term: 'Asthma Predictive Index', definition: 'Clinical tool predicting likelihood that preschool wheezer will develop persistent asthma' },
      ],
      clinicalNotes: `**Current Practice Pearls:**
- Tezepelumab (anti-TSLP) shows efficacy across phenotypes including some T2-low patients
- Blood eosinophils ≥150 cells/μL and/or FeNO ≥20 ppb predict biologic response in severe asthma
- Early-life factors (antibiotics, microbiome, vitamin D) may influence asthma development
- Smart inhalers can objectively assess adherence before escalating therapy
- Allergen immunotherapy may have disease-modifying effects if initiated in childhood`,
    },
  },

  media: [
    {
      id: 'asthma-pathophysiology',
      type: 'diagram',
      filename: 'asthma-pathophysiology.svg',
      title: 'Asthma Pathophysiology',
      description: 'Illustration of airway inflammation, bronchospasm, and remodeling in asthma',
    },
    {
      id: 'stepwise-asthma-management',
      type: 'diagram',
      filename: 'asthma-stepwise-management.svg',
      title: 'Stepwise Asthma Management',
      description: 'NAEPP stepwise approach to asthma therapy in children',
    },
  ],
  citations: [
    {
      id: 'naepp-guidelines',
      type: 'article',
      title: 'NAEPP Expert Panel Report 4: Guidelines for the Diagnosis and Management of Asthma',
      source: 'National Heart, Lung, and Blood Institute',
      url: 'https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines-2020-updates',
    },
    {
      id: 'gina-2023',
      type: 'website',
      title: 'Global Initiative for Asthma (GINA) Report',
      source: 'GINA',
      url: 'https://ginasthma.org/',
    },
    {
      id: 'nelson-asthma',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW'],
      source: 'Elsevier',
      chapter: 'Childhood Asthma',
    },
  ],
  crossReferences: [
    { targetId: 'pulmonology-asthma', targetType: 'topic', relationship: 'related', label: 'Asthma (Adult)' },
    { targetId: 'pediatrics-emergencies', targetType: 'topic', relationship: 'related', label: 'Pediatric Emergencies' },
    { targetId: 'respiratory-system', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
  ],
  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pediatrics', 'pulmonology', 'allergy-immunology'],
    keywords: ['asthma', 'wheeze', 'bronchospasm', 'ICS', 'biologic', 'exacerbation', 'controller'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pediatricAsthma;
