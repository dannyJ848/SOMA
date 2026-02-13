/**
 * Type 1 Diabetes Mellitus
 *
 * Comprehensive content on T1DM pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const TYPE_1_DIABETES: EducationalContent = {
  id: 'endocrine-diabetes-type1',
  type: 'condition',
  name: 'Type 1 Diabetes Mellitus',
  alternateNames: ['T1DM', 'Insulin-dependent diabetes', 'Juvenile diabetes', 'Autoimmune diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Type 1 diabetes is a condition where your body cannot make insulin, a hormone needed to use sugar from food for energy.',
      explanation: `Imagine your body is like a house, and sugar (glucose) from food is like the fuel that keeps everything running. Insulin is like the key that unlocks the doors to let that fuel into your cells.

In Type 1 diabetes, your immune system (which normally fights germs) makes a mistake. It attacks the cells in your pancreas that make insulin. Without insulin, sugar builds up in your blood instead of going into your cells.

**What happens:**
- Your body cannot make insulin anymore
- Sugar stays in your blood instead of being used for energy
- You feel tired, thirsty, and need to pee a lot
- You lose weight even when eating normally

**Treatment:**
People with Type 1 diabetes need to take insulin every day through shots or a pump. They also check their blood sugar regularly to make sure it stays in a healthy range.

**Important to know:**
- It is NOT caused by eating too much sugar
- It is NOT anyone's fault
- With proper treatment, people live full, active lives`,
      keyTerms: [
        { term: 'insulin', definition: 'A hormone that helps sugar get from your blood into your cells for energy' },
        { term: 'pancreas', definition: 'An organ near your stomach that makes insulin' },
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'immune system', definition: 'Your body\'s defense system that fights germs' },
      ],
      analogies: [
        'Insulin is like a key that unlocks cell doors to let sugar in for energy.',
        'The pancreas is like a factory that makes insulin, but in Type 1 diabetes, the factory has shut down.',
        'Without insulin, sugar is like a delivery truck that cannot unload its cargo - it just keeps driving around (staying in the blood).',
      ],
      examples: [
        'A child who suddenly becomes very thirsty, loses weight, and feels tired may have Type 1 diabetes.',
        'Someone with Type 1 diabetes checks their blood sugar before meals and takes insulin to keep their levels healthy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 1 diabetes is an autoimmune disease where the body\'s immune system destroys insulin-producing beta cells in the pancreas, requiring lifelong insulin therapy.',
      explanation: `Type 1 diabetes occurs when the immune system mistakenly identifies the beta cells in the pancreas as foreign and destroys them. Beta cells are the only cells that produce insulin.

**Causes and Risk Factors:**
- Genetic predisposition (certain HLA genes increase risk)
- Environmental triggers (possibly viruses, toxins)
- Autoimmune process usually starts months to years before symptoms
- NOT caused by diet, obesity, or lifestyle

**Signs and Symptoms (The "Classic Triad"):**
1. **Polyuria** - Frequent urination (high blood sugar spills into urine, pulling water with it)
2. **Polydipsia** - Excessive thirst (body trying to replace lost fluids)
3. **Polyphagia** - Increased hunger (cells starving despite high blood sugar)

**Additional symptoms:**
- Unexplained weight loss
- Fatigue and weakness
- Blurred vision
- Slow wound healing

**Diagnosis:**
- Fasting blood sugar ≥126 mg/dL
- Random blood sugar ≥200 mg/dL with symptoms
- HbA1c ≥6.5%
- Often positive for autoantibodies (GAD65, IA-2, IAA, ZnT8)

**Treatment Goals:**
- Replace missing insulin through injections or pump
- Monitor blood sugar regularly
- Maintain HbA1c typically <7% (individualized)
- Prevent short-term and long-term complications`,
      keyTerms: [
        { term: 'autoimmune disease', definition: 'A condition where the immune system attacks the body\'s own healthy cells' },
        { term: 'beta cells', definition: 'Cells in the pancreas that produce insulin; located in the islets of Langerhans' },
        { term: 'HbA1c', definition: 'A blood test showing average blood sugar over 2-3 months; also called glycated hemoglobin', pronunciation: 'H-B-A-one-C' },
        { term: 'hyperglycemia', definition: 'High blood sugar levels' },
        { term: 'hypoglycemia', definition: 'Low blood sugar levels, often from too much insulin' },
      ],
      analogies: [
        'Beta cells are like insulin factories in your pancreas. In Type 1 diabetes, the immune system has destroyed these factories.',
        'HbA1c is like a report card showing how well blood sugar has been controlled over the past few months.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type 1 diabetes mellitus results from T-cell mediated autoimmune destruction of pancreatic beta cells, leading to absolute insulin deficiency. Management requires intensive insulin therapy with basal-bolus regimens or continuous subcutaneous insulin infusion.',
      explanation: `**Pathophysiology:**

T1DM is a T-cell mediated autoimmune disease with a preclinical phase lasting months to years before symptomatic presentation.

*Immunological Process:*
1. Environmental trigger in genetically susceptible individual
2. Autoreactive CD4+ and CD8+ T cells infiltrate pancreatic islets (insulitis)
3. Progressive beta cell destruction
4. Clinical diabetes when >80-90% of beta cells are destroyed
5. Residual C-peptide may persist for years after diagnosis ("honeymoon period")

**Genetic Factors:**
- HLA-DR3 and HLA-DR4: Present in >90% of patients
- HLA-DQ8 (DQB1*0302): Strong risk allele
- Non-HLA genes: INS, PTPN22, CTLA4, IL2RA
- Concordance rate: 30-50% in identical twins

**Autoantibodies (Diagnostic Markers):**
| Autoantibody | Target | Notes |
|--------------|--------|-------|
| GAD65 (GADA) | Glutamic acid decarboxylase | Most sensitive in adults |
| IA-2 (ICA512) | Tyrosine phosphatase | High specificity |
| IAA | Insulin | More common in children |
| ZnT8 | Zinc transporter 8 | Added diagnostic value |

**Insulin Therapy:**

*Basal-Bolus Regimen:*
- Basal insulin: Long-acting (glargine, detemir, degludec) once or twice daily
- Bolus insulin: Rapid-acting (lispro, aspart, glulisine) before meals
- Total daily dose: 0.4-1.0 units/kg (varies widely)

*Insulin Pump (CSII):*
- Continuous subcutaneous insulin infusion
- Only rapid-acting insulin used
- Programmable basal rates
- User-initiated boluses for meals/corrections

**Blood Glucose Monitoring:**
- Self-monitoring of blood glucose (SMBG): 4-10 times daily
- Continuous glucose monitoring (CGM): Real-time glucose data
- Hybrid closed-loop systems ("artificial pancreas"): CGM + algorithm-controlled pump

**Targets:**
- Preprandial glucose: 80-130 mg/dL
- Peak postprandial (<2h): <180 mg/dL
- HbA1c: <7% (individualized; <6.5% if achievable without significant hypoglycemia)
- Time in range (70-180 mg/dL): >70%`,
      keyTerms: [
        { term: 'insulitis', definition: 'Inflammatory infiltration of pancreatic islets by immune cells in early T1DM' },
        { term: 'C-peptide', definition: 'Byproduct of insulin production; marker of endogenous insulin secretion' },
        { term: 'HLA', definition: 'Human leukocyte antigen; genetic markers influencing immune response and autoimmune risk', pronunciation: 'H-L-A' },
        { term: 'basal-bolus', definition: 'Insulin regimen mimicking physiological secretion with background (basal) and meal-time (bolus) insulin' },
        { term: 'CSII', definition: 'Continuous subcutaneous insulin infusion via an insulin pump' },
        { term: 'CGM', definition: 'Continuous glucose monitoring; device providing real-time interstitial glucose readings' },
      ],
      clinicalNotes: 'The honeymoon period refers to partial remission after T1DM diagnosis, where residual beta cell function reduces insulin requirements. Duration varies (weeks to years). C-peptide measurement helps distinguish T1DM from T2DM in ambiguous cases.',
    },
    4: {
      level: 4,
      summary: 'T1DM pathogenesis involves complex interactions between HLA-associated genetic susceptibility, environmental triggers, and immune dysregulation culminating in beta cell destruction. Contemporary management emphasizes technology-assisted intensive therapy targeting glucose time-in-range.',
      explanation: `**Advanced Immunopathogenesis:**

*Genetic Architecture:*
- HLA class II (chromosome 6p21): ~50% of genetic risk
  - DR3-DQ2 (DRB1*0301-DQA1*0501-DQB1*0201)
  - DR4-DQ8 (DRB1*0401-DQA1*0301-DQB1*0302)
  - Heterozygous DR3/DR4 highest risk (1:15 lifetime risk)
- INS gene (chromosome 11p15): VNTR polymorphisms affect thymic insulin expression
- PTPN22 (R620W): T cell activation threshold
- CTLA4: T cell regulation
- IL2RA (CD25): Regulatory T cell function

*Environmental Factors:*
- Enteroviruses (especially Coxsackie B): Molecular mimicry, beta cell tropism
- Gut microbiome alterations precede disease
- Vitamin D deficiency association
- Hygiene hypothesis considerations

*Immunological Mechanisms:*
1. Loss of tolerance to islet antigens
2. Antigen presentation by dendritic cells to autoreactive T cells
3. CD8+ cytotoxic T cells: Direct beta cell killing via perforin/granzyme
4. CD4+ T helper cells: IFN-γ and TNF-α mediated inflammation
5. Role of regulatory T cells (Tregs): Impaired suppression

*Beta Cell Death Pathways:*
- Cytokine-induced apoptosis (IL-1β, TNF-α, IFN-γ)
- Endoplasmic reticulum stress
- Metabolic exhaustion

**Disease Staging (Insel-Eisenbarth Model):**

| Stage | Autoantibodies | Dysglycemia | Clinical |
|-------|----------------|-------------|----------|
| Stage 1 | ≥2 antibodies | Normal | Asymptomatic |
| Stage 2 | ≥2 antibodies | Impaired | Asymptomatic |
| Stage 3 | Positive or negative | Diabetes | Symptomatic |

*Screening in high-risk populations:*
- First-degree relatives: ~5% lifetime risk
- TrialNet and similar programs identify Stage 1-2 disease
- Teplizumab: Anti-CD3 antibody delays progression from Stage 2 to Stage 3

**Advanced Insulin Pharmacology:**

*Insulin Analogs - Pharmacokinetics:*

| Insulin | Onset | Peak | Duration | Structure Modification |
|---------|-------|------|----------|----------------------|
| Lispro | 5-15 min | 1-2 hr | 3-5 hr | B28-B29 swap (Pro-Lys→Lys-Pro) |
| Aspart | 5-15 min | 1-2 hr | 3-5 hr | B28 Pro→Asp |
| Glulisine | 5-15 min | 1-2 hr | 3-5 hr | B3 Asn→Lys, B29 Lys→Glu |
| Glargine | 2-4 hr | None | 20-24 hr | A21 Asn→Gly, B31-32 Arg-Arg |
| Detemir | 1-2 hr | Flat | 12-24 hr | B30 removed, B29 C14 fatty acid |
| Degludec | 1 hr | None | >42 hr | B30 removed, B29 glutamic acid-C16 |

*Inhaled Insulin (Technosphere):*
- Afrezza: Ultra-rapid acting inhaled human insulin
- Onset: ~12 minutes; duration: ~1.5-3 hours
- Contraindicated in chronic lung disease

**Hybrid Closed-Loop Systems:**

Current FDA-approved systems:
- Medtronic 780G
- Tandem Control-IQ
- Omnipod 5
- Beta Bionics iLet

Algorithm features:
- Auto-adjustment of basal rate based on CGM
- Automated correction boluses
- Target glucose typically 100-120 mg/dL
- Suspend-before-low function
- Still requires user meal bolusing

**Adjunctive Therapies:**
- Pramlintide (Symlin): Amylin analog; delays gastric emptying, reduces glucagon
- SGLT2 inhibitors: Off-label use with caution (increased DKA risk)
- Metformin: May reduce insulin requirements in overweight patients`,
      keyTerms: [
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody that delays T1DM onset in high-risk individuals; first disease-modifying therapy' },
        { term: 'molecular mimicry', definition: 'Immune response to foreign antigen cross-reacts with self-antigens due to structural similarity' },
        { term: 'time in range', definition: 'Percentage of time glucose is within target range (typically 70-180 mg/dL); emerging glycemic metric' },
        { term: 'hybrid closed-loop', definition: 'Automated insulin delivery system using CGM-directed algorithm; requires user input for meals' },
        { term: 'pramlintide', definition: 'Synthetic amylin analog used as adjunct to insulin; slows gastric emptying and reduces glucagon' },
      ],
      clinicalNotes: 'Teplizumab (Tzield) represents a paradigm shift as the first FDA-approved therapy to delay T1DM clinical onset. It targets the autoimmune process rather than glucose control. Administered as a 14-day IV infusion in Stage 2 T1DM, it delayed progression to Stage 3 by median 2 years in clinical trials.',
    },
    5: {
      level: 5,
      summary: 'T1DM represents a heterogeneous autoimmune disorder with distinct endotypes, emerging immunotherapeutic interventions for disease modification, and evolving technology for glucose management approaching the goal of a fully automated closed-loop system.',
      explanation: `**T1DM Heterogeneity and Endotypes:**

*Age-Related Phenotypes:*
- Childhood-onset: Aggressive beta cell destruction, higher HLA risk alleles
- Adult-onset (LADA): Slower progression, GAD65 predominance, may be misdiagnosed as T2DM
- Fulminant T1DM (Asia): Rapid onset, minimal insulitis, often viral prodrome

*Endotype Classification (proposed):*
- T1DE1: Early onset, HLA-DR4, IA-2/ZnT8 positive, rapid progression
- T1DE2: Later onset, HLA-DR3, GAD65 dominant, slower progression

**Immunotherapy Approaches:**

*Approved:*
- Teplizumab (anti-CD3): Depletes/modulates effector T cells; delayed Stage 2→3 by 24 months

*Investigational:*
| Agent | Mechanism | Trial Status |
|-------|-----------|--------------|
| Golimumab (anti-TNF) | Anti-inflammatory | Preserved C-peptide in new-onset |
| Abatacept (CTLA4-Ig) | Blocks T cell costimulation | Modest beta cell preservation |
| Rituximab (anti-CD20) | B cell depletion | Temporary benefit |
| Low-dose IL-2 | Tregs expansion | Phase 2 studies |
| GAD-alum vaccine | Antigen-specific tolerance | Mixed results |
| Combination immunotherapy | Multiple targets | Ongoing trials |

*Stem Cell and Regenerative Approaches:*
- Cadaveric islet transplantation: Edmonton protocol (portal vein infusion)
  - Limitations: Immunosuppression required, limited donor supply
- Stem cell-derived beta cells (VX-880, VX-264): Phase 1/2 trials showing C-peptide production
- Encapsulation devices: Protect cells from immune attack without systemic immunosuppression

**Precision Glucose Management:**

*CGM Metrics (International Consensus):*
| Metric | Target | Clinical Significance |
|--------|--------|----------------------|
| Time in range (70-180) | >70% | Primary glycemic outcome |
| Time below 70 | <4% | Hypoglycemia risk |
| Time below 54 | <1% | Serious hypoglycemia |
| Time above 180 | <25% | Hyperglycemia exposure |
| Time above 250 | <5% | Significant hyperglycemia |
| GMI | Individualized | CGM-derived HbA1c estimate |
| GV (CV%) | <36% | Glycemic variability |

*Algorithm Evolution:*
- First generation: Suspend-on-low
- Current (hybrid closed-loop): Auto-basal, auto-correction
- Next generation: Fully automated (no meal announcement)
- Dual-hormone: Insulin + glucagon systems in development

**Complication Prevention - Emerging Evidence:**

*Glycemic Memory:*
- DCCT/EDIC: Intensive control in DCCT → persistent benefit 30+ years later
- Mechanism: Epigenetic modifications (histone acetylation, DNA methylation)
- Clinical implication: Early aggressive control provides lasting protection

*Beyond HbA1c:*
- Glycemic variability independently associated with complications
- Time in range correlates with microvascular outcomes
- Continuous glucose metrics increasingly recognized in guidelines

**Pregnancy in T1DM:**

*Preconception:*
- Target HbA1c <6.5% (ideally <6.0%) before conception
- Folic acid 5mg daily (high dose)
- Optimize retinopathy, nephropathy status
- Review medications (discontinue ACEi/ARB, statin)

*During Pregnancy:*
- Insulin requirements increase 50-100% in 2nd-3rd trimester
- CGM recommended (CONCEPTT trial: reduced macrosomia, neonatal hypoglycemia)
- Target: Time in range (63-140) >70%
- Weekly antenatal surveillance in 3rd trimester

*Delivery:*
- Planned delivery 37-38+6 weeks if no complications
- IV insulin infusion during labor
- Postpartum: Insulin requirements drop rapidly (return to pre-pregnancy doses)

**Special Populations:**

*Cystic Fibrosis-Related Diabetes (CFRD):*
- Unique pathophysiology: Islet destruction, incretin deficiency
- Treatment: Insulin (oral agents generally not recommended)
- Screening: Annual OGTT starting age 10

*Post-Transplant Diabetes (PTDM):*
- Risk factors: Tacrolimus > cyclosporine, steroids, hepatitis C
- Management: Insulin preferred; may transition to oral agents`,
      keyTerms: [
        { term: 'LADA', definition: 'Latent autoimmune diabetes in adults; slower-onset T1DM often initially misdiagnosed as T2DM' },
        { term: 'fulminant T1DM', definition: 'Rapid-onset T1DM subtype with minimal insulitis, prevalent in Asia; often post-viral' },
        { term: 'Edmonton protocol', definition: 'Islet transplantation procedure infusing donor islets into portal vein; requires immunosuppression' },
        { term: 'glycemic memory', definition: 'Lasting effects of early glycemic control on long-term complication risk, mediated by epigenetic changes' },
        { term: 'GMI', definition: 'Glucose Management Indicator; CGM-derived metric estimating HbA1c equivalent' },
        { term: 'VX-880', definition: 'Stem cell-derived pancreatic islet cell therapy in clinical trials for T1DM' },
      ],
      clinicalNotes: 'The treatment landscape for T1DM is rapidly evolving. Teplizumab approval marks the beginning of disease modification era. Closed-loop systems have transformed daily management, with time in range emerging as a key outcome metric. Stem cell-derived beta cell therapies (VX-880) showing early promise may eventually offer functional cure. Clinicians should discuss evolving options with patients while emphasizing that current technology can achieve excellent outcomes.',
    },
  },

  media: [
    {
      id: 't1dm-pathogenesis-1',
      type: 'diagram',
      filename: 't1dm-autoimmune-pathogenesis.svg',
      title: 'T1DM Autoimmune Pathogenesis',
      description: 'Immune mechanisms leading to beta cell destruction',
    },
    {
      id: 't1dm-insulin-regimen-1',
      type: 'diagram',
      filename: 't1dm-basal-bolus-regimen.svg',
      title: 'Basal-Bolus Insulin Regimen',
      description: 'Physiological insulin replacement strategy',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
      license: 'Copyrighted',
    },
    {
      id: 'atkinson-t1dm-2014',
      type: 'article',
      title: 'Type 1 Diabetes',
      authors: ['Atkinson MA', 'Eisenbarth GS', 'Michels AW'],
      source: 'Lancet 2014;383:69-82',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-dka', targetType: 'condition', relationship: 'see-also', label: 'Diabetic Ketoacidosis' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'endocrine-insulin-types', targetType: 'topic', relationship: 'see-also', label: 'Insulin Types' },
    { targetId: 'endocrine-hypoglycemia', targetType: 'condition', relationship: 'see-also', label: 'Hypoglycemia' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'autoimmune', 'insulin therapy'],
    keywords: ['T1DM', 'type 1 diabetes', 'insulin', 'autoimmune diabetes', 'beta cells', 'CGM', 'insulin pump'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
