import { EducationalContent } from '../../types';

export const autoimmuneBasicsContent: EducationalContent = {
  id: 'clinical-autoimmune-basics',
  type: 'concept',
  name: 'Autoimmune Disease Basics',
  alternateNames: ['Autoimmunity', 'Self-reactive immunity', 'Autoimmune disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Autoimmune diseases happen when the body\'s defense system mistakenly attacks its own healthy cells and tissues.',
      explanation: `Normally, your immune system protects you by fighting germs like bacteria and viruses. But sometimes it gets confused and attacks parts of your own body instead. This is called autoimmunity.

**What Happens in Autoimmune Disease:**

1. **The Mistake**
   - Immune cells cannot tell the difference between germs and body cells
   - They attack healthy tissues by mistake
   - This causes inflammation and damage

2. **What Gets Affected**
   - Joints (causing pain and swelling)
   - Skin (causing rashes)
   - Organs like the thyroid or pancreas
   - Many different body parts

**Why It Happens:**
- Sometimes runs in families
- Can be triggered by infections
- More common in women than men
- Not contagious - you cannot catch it from someone

**Common Examples:**
- Type 1 Diabetes (attacks the pancreas)
- Rheumatoid Arthritis (attacks joints)
- Lupus (can affect many organs)`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When the immune system attacks the body\'s own healthy tissues' },
        { term: 'inflammation', definition: 'Redness, swelling, heat, and pain that happens when the body is injured or fighting infection' },
        { term: 'immune system', definition: 'The body\'s defense system that normally fights germs' },
      ],
      analogies: [
        'Autoimmunity is like a security guard who cannot tell the difference between employees and intruders, so they attack everyone.',
        'Think of it as friendly fire in the military - your own troops accidentally attacking each other instead of the enemy.',
      ],
      examples: [
        'In Type 1 Diabetes, the immune system destroys insulin-making cells in the pancreas.',
        'In Celiac Disease, eating gluten triggers the immune system to attack the small intestine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Autoimmune diseases result from loss of immune tolerance, where the immune system produces autoantibodies and self-reactive T cells that attack the body\'s own tissues.',
      explanation: `Autoimmune diseases occur when self-tolerance mechanisms fail, leading to adaptive immune responses against self-antigens. This results in chronic inflammation and tissue damage.

**Immunological Mechanisms:**

1. **Loss of Self-Tolerance**
   - Central tolerance: Failed deletion in thymus/bone marrow
   - Peripheral tolerance: Failed regulation outside primary lymphoid organs
   - Molecular mimicry: Pathogen antigens resemble self-antigens
   - Epitope spreading: Response spreads to additional self-epitopes

2. **Autoantibody Production**
   - B cells produce antibodies against self-proteins
   - Immune complexes deposit in tissues
   - Complement activation causes damage
   - Example: Anti-dsDNA in lupus

3. **Cell-Mediated Autoimmunity**
   - Self-reactive T cells attack tissues
   - CD4+ T helper cells recruit inflammation
   - CD8+ cytotoxic T cells kill target cells
   - Th1, Th17 subsets often involved

**Classification of Autoimmune Diseases:**

1. **Organ-Specific**
   - Type 1 Diabetes Mellitus (pancreatic beta cells)
   - Hashimoto Thyroiditis (thyroid)
   - Graves Disease (thyroid)
   - Multiple Sclerosis (myelin)
   - Autoimmune Hemolytic Anemia (RBCs)

2. **Systemic**
   - Systemic Lupus Erythematosus (multiple organs)
   - Rheumatoid Arthritis (joints, systemic)
   - Scleroderma (connective tissue)
   - Sjogren Syndrome (exocrine glands)
   - Polymyositis/Dermatomyositis (muscle)

**Risk Factors:**
- Genetic: HLA associations, polygenic risk
- Female sex (2-10x higher risk)
- Environmental triggers: infections, UV light, smoking
- Hormonal factors`,
      keyTerms: [
        { term: 'self-tolerance', definition: 'The immune system\'s ability to recognize and not attack the body\'s own cells' },
        { term: 'autoantibody', definition: 'An antibody that targets the individual\'s own tissues or cells' },
        { term: 'molecular mimicry', definition: 'When pathogen antigens resemble self-antigens, triggering cross-reactive immune responses' },
        { term: 'epitope spreading', definition: 'Expansion of immune response from initial epitope to additional epitopes' },
        { term: 'HLA', definition: 'Human Leukocyte Antigen; genes encoding MHC molecules, strongly associated with autoimmune risk' },
      ],
      analogies: [
        'Central tolerance is like a training program for security guards to recognize employees. If it fails, guards attack employees they should recognize.',
        'Molecular mimicry is like two people who look very similar - the security system might mistake one for the other.',
      ],
    },
    3: {
      level: 3,
      summary: 'Autoimmune diseases involve complex interactions between genetic susceptibility, environmental triggers, and dysregulated immune tolerance mechanisms, leading to tissue-specific or systemic inflammatory pathology.',
      explanation: `Autoimmunity arises from a combination of genetic predisposition, environmental factors, and stochastic events that disrupt the tightly regulated mechanisms of immune tolerance.

**Genetic Factors:**

1. **HLA Associations**
   - Strongest genetic risk factor
   - HLA-DRB1*04:01 in rheumatoid arthritis
   - HLA-DQ2/DQ8 in celiac disease
   - HLA-B27 in ankylosing spondylitis
   - Mechanism: Altered peptide presentation

2. **Non-HLA Genes**
   - PTPN22: T cell receptor signaling
   - CTLA4: T cell activation checkpoint
   - IL23R: Th17 differentiation
   - TNFAIP3: NF-kB regulation
   - Multiple SNPs with modest individual effects

**Mechanisms of Tolerance Breakdown:**

1. **Central Tolerance Defects**
   - Failed negative selection in thymus
   - AIRE mutations (APS-1)
   - FOXP3 mutations (IPEX)
   - Autoreactive T cells released to periphery

2. **Peripheral Tolerance Failures**
   
   *Regulatory T Cell Dysfunction:*
   - Reduced Treg numbers or function
   - Impaired suppression of autoreactive cells
   - Treg instability (exFoxp3 cells)
   
   *Anergy Induction Failure:*
   - Costimulation requirements not met
   - Autoreactive cells remain functional
   
   *Activation-Induced Cell Death:*
   - Fas/FasL pathway defects
   - APECED (Autoimmune Polyendocrinopathy)

3. **Environmental Triggers**
   
   *Infections:*
   - Molecular mimicry: Coxsackie virus and diabetes
   - Bystander activation: Viral infection activates APCs
   - Epitope spreading: Response diversifies
   
   *Other Triggers:*
   - UV light (lupus flares)
   - Smoking (rheumatoid arthritis)
   - Diet (gluten in celiac disease)
   - Medications (procainamide-induced lupus)

**Effector Mechanisms:**

1. **Type II Hypersensitivity**
   - Autoantibodies against cell surface antigens
   - Complement-mediated lysis
   - Antibody-dependent cellular cytotoxicity
   - Example: Autoimmune hemolytic anemia

2. **Type III Hypersensitivity**
   - Immune complex deposition
   - Complement activation
   - Neutrophil recruitment
   - Example: Lupus nephritis

3. **Type IV Hypersensitivity**
   - T cell-mediated tissue damage
   - Macrophage activation
   - Cytotoxic T cell killing
   - Example: Type 1 diabetes, MS`,
      keyTerms: [
        { term: 'AIRE', definition: 'Autoimmune Regulator; transcription factor for promiscuous gene expression in thymus' },
        { term: 'Treg', definition: 'Regulatory T cell; CD4+CD25+Foxp3+ cells that suppress immune responses' },
        { term: 'IPEX', definition: 'Immune dysregulation Polyendocrinopathy Enteropathy X-linked syndrome; FOXP3 deficiency' },
        { term: 'APECED', definition: 'Autoimmune PolyEndocrinopathy-Candidiasis-Ectodermal Dystrophy; AIRE deficiency' },
        { term: 'bystander activation', definition: 'Activation of autoreactive T cells during inflammatory response to infection' },
      ],
      clinicalNotes: 'Autoimmune diseases often have overlapping features. ANA is sensitive but not specific for lupus. Consider screening for other autoimmune diseases when one is diagnosed (polyautoimmunity).',
    },
    4: {
      level: 4,
      summary: 'Autoimmune diseases involve multifactorial pathogenesis with genetic susceptibility loci, environmental triggers, and dysregulated innate and adaptive immunity, requiring targeted immunomodulatory therapies.',
      explanation: `The pathogenesis of autoimmune diseases involves complex gene-environment interactions disrupting immune homeostasis. Understanding these mechanisms enables rational therapeutic targeting.

**Genetic Architecture:**

1. **HLA Associations**
   
   *Shared Epitope Hypothesis:*
   - RA: HLA-DRB1*04:01, *04:04, *01:01
   - Common amino acid sequence (QKRAA/QRRAA)
   - Affects peptide binding and T cell selection
   - Also associated with anti-CCP positivity
   
   *Other HLA Associations:*
   - T1D: HLA-DQ2, DQ8 risk; DQ6 protective
   - Celiac: HLA-DQ2 (>90%), DQ8
   - MS: HLA-DRB1*15:01
   - Mechanisms: TCR repertoire, thymic selection

2. **Genome-Wide Association Studies**
   - Hundreds of risk loci identified
   - Most have modest effect sizes (OR 1.1-1.3)
   - Immune genes enriched: cytokines, receptors, signaling
   - Non-coding variants in regulatory regions
   
   *Key Pathways:*
   - T cell activation (PTPN22, CTLA4, CD28)
   - Cytokine signaling (IL2RA, IL23R, STAT4)
   - Innate immunity (IRF5, TNFAIP3)
   - B cell function (BLK, BANK1)

**Innate Immune Dysregulation:**

1. **Type I Interferon Pathway**
   
   *SLE:*
   - Interferon signature in blood
   - Plasmacytoid dendritic cells overactive
   - TLR7/9 stimulated by immune complexes
   - IFN-alpha promotes autoreactive B cells
   
   *Therapeutic Targeting:*
   - Anifrolumab (anti-IFNAR) approved for SLE
   - Other biologics in development

2. **Inflammasome Activation**
   - NLRP3 inflammasome in multiple diseases
   - IL-1beta and IL-18 production
   - Role in RA, MS, T1D
   - Canakinumab trials in cardiovascular disease

3. **Metabolic Changes**
   - Aerobic glycolysis in activated T cells
   - Mitochondrial dysfunction in SLE
   - Metabolic checkpoints as therapeutic targets

**Therapeutic Approaches:**

1. **B Cell Targeting**
   
   *Rituximab (anti-CD20):*
   - Depletes mature B cells
   - Used in RA, SLE, vasculitis, MS
   - Risk of infections, hypogammaglobulinemia
   
   *Belimumab (anti-BAFF):*
   - Inhibits B cell survival
   - Approved for SLE
   - Reduces B cell activation

2. **Cytokine Blockade**
   
   *TNF Inhibitors:*
   - Adalimumab, infliximab, etanercept
   - Transformative for RA, IBD, psoriasis
   - Risk of infections, demyelination
   
   *IL-6 Receptor Blockade:*
   - Tocilizumab, sarilumab
   - RA, giant cell arteritis
   - Cytokine storm treatment
   
   *IL-17/IL-23 Axis:*
   - Secukinumab, ixekizumab (IL-17)
   - Ustekinumab, guselkumab (IL-12/23, IL-23)
   - Psoriasis, psoriatic arthritis

3. **Co-stimulation Blockade**
   - Abatacept (CTLA4-Ig)
   - Blocks CD28-B7 interaction
   - RA, JIA, psoriasis

4. **JAK Inhibitors**
   - Tofacitinib, baricitinib, upadacitinib
   - Oral small molecules
   - Multiple cytokine pathways affected
   - RA, psoriatic arthritis, IBD, SLE`,
      keyTerms: [
        { term: 'shared epitope', definition: 'Common amino acid sequence in HLA-DRB1 alleles associated with rheumatoid arthritis risk' },
        { term: 'interferon signature', definition: 'Upregulation of type I interferon-stimulated genes in peripheral blood cells' },
        { term: 'BAFF', definition: 'B cell Activating Factor; cytokine essential for B cell survival and maturation' },
        { term: 'JAK inhibitor', definition: 'Small molecule blocking Janus kinase signaling pathways used by multiple cytokine receptors' },
        { term: 'Treg instability', definition: 'Loss of Foxp3 expression in regulatory T cells, converting them to effector cells' },
      ],
      clinicalNotes: 'Consider screening for latent TB before biologics. Live vaccines contraindicated during immunosuppressive therapy. Combination therapy often superior to monotherapy in RA (MTX + biologic).',
    },
    5: {
      level: 5,
      summary: 'Autoimmune diseases represent complex immune dysregulation requiring precision medicine approaches integrating genetic risk stratification, biomarker-guided therapy selection, and novel targeted interventions including cellular therapies and immune tolerance induction.',
      explanation: `Advances in immunology, genetics, and biotechnology have transformed the approach to autoimmune diseases, moving from broad immunosuppression to precision therapeutics and potential cures.

**Precision Medicine in Autoimmunity:**

1. **Risk Stratification**
   
   *Genetic Risk Scores:*
   - Polygenic risk scores for T1D prediction
   - Predictive value for disease development
   - Population screening applications
   - HLA-genotyping for celiac risk
   
   *Biomarker-Guided Therapy:*
   - Anti-CCP positivity predicts MTX response in RA
   - IFN signature predicts anifrolumab response in SLE
   - IL-17/IL-23 pathway markers for psoriasis
   - Personalized treatment algorithms

2. **Novel Therapeutic Modalities**
   
   *CAR-T Cell Therapy:*
   - Anti-CD19 CAR-T for SLE (early trials)
   - Deep B cell depletion
   - Potential for durable remission
   - Toxicity concerns being evaluated
   
   *Regulatory Cell Therapies:*
   - Ex vivo expanded Tregs
   - Antigen-specific suppression
   - Phase I/II trials in T1D, MS, Crohn\'s
   
   *Tolerogenic Approaches:*
   - Peptide immunotherapy (T1D)
   - Nanoparticle-delivered antigens
   - Liver-targeted tolerance induction

3. **Immune Tolerance Induction**
   
   *Mechanisms:*
   - Deletion of autoreactive clones
   - Anergy induction
   - Treg expansion and function
   - Immune deviation (Th1 to Th2/Tr1)
   
   *Clinical Applications:*
   - Allergen immunotherapy models
   - T1D prevention trials (Teplizumab)
   - Oral tolerance protocols
   - Mesenchymal stem cell therapy

**Emerging Concepts:**

1. **Trained Immunity**
   - Innate immune memory
   - Metabolic and epigenetic changes
   - Role in chronic inflammation
   - BCG vaccine effects in autoimmune diseases

2. **Microbiome-Immune Interactions**
   - Gut dysbiosis in multiple diseases
   - Fecal microbiota transplantation
   - Microbiome-modifying therapies
   - Metabolite-mediated effects (SCFAs)

3. **Epigenetic Dysregulation**
   - DNA methylation changes in SLE
   - Histone modifications
   - miRNA dysregulation
   - Environmental epigenetics

**Special Clinical Scenarios:**

1. **Pregnancy and Autoimmunity**
   - Disease activity varies by condition
   - Medication safety considerations
   - Anti-Ro/SSA and neonatal lupus
   - Preeclampsia risk

2. **Infections and Autoimmunity**
   - COVID-19 triggering autoimmunity
   - Post-infectious syndromes
   - Vaccine-associated phenomena
   - Immune reconstitution inflammatory syndrome

3. **Aging and Autoimmunity**
   - Immunosenescence effects
   - Accumulation of autoreactivity
   - Late-onset autoimmune diseases
   - Treatment challenges in elderly

**Future Directions:**

1. **Early Intervention:**
   - Pre-symptomatic disease detection
   - Prevention trials (T1D, SLE)
   - Biomarker-based screening
   - At-risk population monitoring

2. **Combination Strategies:**
   - Multiple pathway targeting
   - Sequential therapy approaches
   - Immunomodulation + tolerance
   - Personalized combinations

3. **Technology Integration:**
   - Artificial intelligence for diagnosis
   - Digital biomarkers
   - Remote monitoring
   - Telemedicine applications`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk based on multiple SNPs associated with disease' },
        { term: 'trained immunity', definition: 'Long-term functional reprogramming of innate immune cells after stimulation' },
        { term: 'tolerogenic therapy', definition: 'Treatments designed to restore immune tolerance rather than suppress immunity' },
        { term: 'exFoxp3 cell', definition: 'Former regulatory T cell that has lost Foxp3 expression and gained effector function' },
        { term: 'immune checkpoint', definition: 'Regulatory pathway that inhibits immune responses; targetable for autoimmunity' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- T1D: Screen for celiac disease and autoimmune thyroid disease
- RA: Anti-CCP more specific than RF; early DMARD initiation critical
- SLE: ANA negative lupus exists; monitor for infections, cardiovascular disease
- Myasthenia gravis: Check for thymoma; MuSK vs AChR antibody positive
- Vasculitis: ANCA patterns (c-ANCA/PR3 vs p-ANCA/MPO)
- APS: Lupus anticoagulant paradox - causes clotting despite prolonged PTT
- Drug-induced lupus: Anti-histone antibodies characteristic; procainamide, hydralazine`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['clinical', 'immunology', 'pathology'],
    keywords: ['autoimmune', 'autoimmunity', 'self-tolerance', 'autoantibodies'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default autoimmuneBasicsContent;
