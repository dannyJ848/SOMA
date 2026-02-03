import { EducationalContent } from '../../types';

export const autoimmunePrinciplesContent: EducationalContent = {
  id: 'allergy-immunology-autoimmune-principles',
  type: 'concept',
  name: 'Autoimmune Principles',
  alternateNames: ['Autoimmunity', 'Self-Tolerance', 'Autoimmune Mechanisms'],

  levels: {
    1: {
      level: 1,
      summary: 'Autoimmune diseases occur when the immune system mistakenly attacks the body\'s own healthy cells and tissues instead of protecting them.',
      explanation: `Normally, your immune system can tell the difference between your own cells and foreign invaders. In autoimmune diseases, this recognition fails.

**What Goes Wrong:**
1. The immune system loses ability to recognize "self"
2. It makes antibodies or cells that attack your own tissues
3. This causes inflammation and damage to organs

**Common Autoimmune Diseases:**
- **Type 1 Diabetes**: Attacks insulin-producing cells
- **Rheumatoid Arthritis**: Attacks joints
- **Lupus**: Attacks many organs (skin, joints, kidneys)
- **Multiple Sclerosis**: Attacks nerve coverings
- **Hashimoto's Thyroiditis**: Attacks thyroid gland
- **Celiac Disease**: Attacks intestines when eating gluten

**Who Gets Autoimmune Diseases:**
- More common in women (75% of cases)
- Can run in families
- Often starts in young to middle-aged adults
- Environmental triggers may play a role

**Common Symptoms:**
- Fatigue
- Joint pain or swelling
- Skin problems
- Fever
- Feeling generally unwell
- Symptoms specific to the affected organ

**Treatment Approaches:**
- Medications to calm the immune system
- Replace what the body can't make (like insulin or thyroid hormone)
- Treat symptoms (pain relief, anti-inflammatory drugs)
- Lifestyle changes (diet, stress management)`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When the immune system attacks the body\'s own healthy cells' },
        { term: 'antibodies', definition: 'Proteins made by the immune system - in autoimmunity, they attack self' },
        { term: 'inflammation', definition: 'Redness, swelling, and damage caused by immune attack' },
        { term: 'flare', definition: 'When autoimmune symptoms get suddenly worse' },
      ],
      analogies: [
        'In autoimmune disease, your body\'s army (immune system) gets confused and attacks its own cities (organs) instead of invaders.',
        'It\'s like a security guard who can\'t recognize employees anymore and starts treating everyone as intruders.',
      ],
      examples: [
        'In Type 1 diabetes, the immune system destroys the cells that make insulin, so the person can\'t control blood sugar.',
        'In rheumatoid arthritis, the immune system attacks the lining of joints, causing painful swelling.',
      ],
    },
    2: {
      level: 2,
      summary: 'Autoimmunity results from breakdown of self-tolerance mechanisms, leading to immune responses against self-antigens, classified as organ-specific or systemic, with diagnosis based on clinical features and autoantibody detection.',
      explanation: `Autoimmune diseases represent a failure of the immune system's ability to distinguish self from non-self, resulting in tissue damage.

**Self-Tolerance Mechanisms:**

**Central Tolerance:**
- Occurs in thymus (T cells) and bone marrow (B cells)
- Deletion of strongly self-reactive lymphocytes
- Negative selection during development

**Peripheral Tolerance:**
- Controls self-reactive cells that escape central tolerance
- Mechanisms: Anergy, regulatory T cells (Tregs), deletion
- Prevents autoimmunity in healthy individuals

**Classification:**

**Organ-Specific:**
- Target single tissue/organ
- Examples:
  - Hashimoto's thyroiditis (thyroid)
  - Type 1 diabetes (pancreatic beta cells)
  - Multiple sclerosis (CNS myelin)
  - Myasthenia gravis (neuromuscular junction)
  - Autoimmune hepatitis (liver)

**Systemic:**
- Target multiple organs/tissues
- Examples:
  - Systemic lupus erythematosus (SLE)
  - Rheumatoid arthritis
  - Sjogren's syndrome
  - Systemic sclerosis

**Pathogenic Mechanisms:**

| Mechanism | Example Disease |
|-----------|-----------------|
| Autoantibody-mediated | Myasthenia gravis (anti-AChR) |
| Immune complex | SLE (anti-dsDNA complexes) |
| T cell-mediated | Type 1 diabetes, MS |
| Mixed | Rheumatoid arthritis |

**Risk Factors:**

*Genetic:*
- HLA associations (strongest genetic risk)
- Non-HLA genes (PTPN22, CTLA-4)
- Family history of autoimmunity

*Environmental:*
- Infections (molecular mimicry)
- Smoking (RA, SLE risk)
- Hormones (female predominance)
- UV light (SLE flares)

**Diagnosis:**

*Clinical:*
- Pattern of organ involvement
- Characteristic symptoms

*Laboratory:*
- Autoantibodies (ANA, anti-dsDNA, RF, anti-CCP)
- Inflammatory markers (ESR, CRP)
- Complement levels (low in SLE)
- Organ-specific tests

**Treatment Principles:**
1. Immunosuppression (steroids, DMARDs)
2. Biologics (anti-TNF, anti-IL-6, B cell depletion)
3. Symptom management
4. Organ-specific replacement (insulin, thyroid hormone)`,
      keyTerms: [
        { term: 'central tolerance', definition: 'Elimination of self-reactive lymphocytes during development in thymus/bone marrow' },
        { term: 'peripheral tolerance', definition: 'Mechanisms controlling self-reactive cells in the periphery (anergy, Tregs)' },
        { term: 'autoantibodies', definition: 'Antibodies directed against self-antigens' },
        { term: 'ANA', definition: 'Antinuclear antibody; screening test for systemic autoimmune diseases' },
        { term: 'DMARDs', definition: 'Disease-modifying anti-rheumatic drugs; slow autoimmune disease progression' },
      ],
      analogies: [
        'Central tolerance is like a boot camp that eliminates soldiers who might attack their own country; peripheral tolerance is the military police catching any rogue soldiers later.',
        'HLA molecules are like ID cards - certain types make it easier for the immune system to misidentify self as foreign.',
      ],
    },
    3: {
      level: 3,
      summary: 'Autoimmune diseases arise from genetic susceptibility (primarily HLA and immune regulatory genes) combined with environmental triggers, resulting in breakdown of central and peripheral tolerance mechanisms, with effector mechanisms including autoantibodies, immune complexes, and autoreactive T cells.',
      explanation: `Autoimmunity represents complex interplay between genetic predisposition, environmental exposures, and immune dysregulation leading to loss of self-tolerance.

**Genetic Basis:**

**HLA Associations:**

| Disease | HLA Association | Relative Risk |
|---------|----------------|---------------|
| Ankylosing spondylitis | HLA-B27 | 90-100x |
| Type 1 diabetes | HLA-DR3/DR4 | 3-5x |
| Rheumatoid arthritis | HLA-DR4 (shared epitope) | 4-5x |
| Celiac disease | HLA-DQ2/DQ8 | Required |
| SLE | HLA-DR2, DR3 | 2-3x |
| Multiple sclerosis | HLA-DR2 | 3x |

*Shared Epitope:*
- Specific amino acid sequence in HLA-DRB1
- Associated with RA and more severe disease
- Affects antigen presentation

**Non-HLA Genetic Factors:**

*PTPN22:*
- Tyrosine phosphatase
- R620W variant
- Associated with RA, T1D, SLE, thyroiditis
- Affects T cell signaling threshold

*CTLA-4:*
- Immune checkpoint
- Polymorphisms reduce function
- Associated with T1D, thyroiditis

*Complement Deficiency:*
- C1q, C2, C4 deficiency
- High risk of SLE
- Impaired immune complex clearance

**Tolerance Mechanisms:**

**Central Tolerance:**

*Thymic Selection:*
- Positive selection: Recognizes self-MHC (survives)
- Negative selection: Strong self-reactivity (deleted)
- AIRE gene: Expresses tissue-specific antigens in thymus
- AIRE mutations → APECED syndrome

*B Cell Tolerance:*
- Receptor editing
- Clonal deletion
- Developmental arrest

**Peripheral Tolerance:**

*Anergy:*
- Signal 1 (TCR) without Signal 2 (costimulation)
- Functional inactivation

*Regulatory T Cells:*
- FOXP3+ natural Tregs
- Induced Tregs (iTregs)
- Suppress autoreactive responses
- IL-10, TGF-β, CTLA-4 mechanisms

*Peripheral Deletion:*
- Activation-induced cell death
- Fas-FasL pathway

**Breaking Tolerance:**

*Molecular Mimicry:*
- Pathogen antigen resembles self-antigen
- Cross-reactive T cells or antibodies
- Example: Streptococcal M protein → rheumatic heart disease

*Bystander Activation:*
- Tissue damage releases self-antigens
- Inflammatory environment lowers activation threshold
- Self-reactive lymphocytes activated

*Epitope Spreading:*
- Initial response to one epitope
- Tissue damage exposes new epitopes
- Response broadens to multiple self-antigens

**Effector Mechanisms:**

**Type II (Antibody-Mediated):**
- Autoantibodies bind cell surface antigens
- Cell destruction, blocking, or stimulation
- Examples:
  - Graves' disease: Stimulating anti-TSHR
  - Myasthenia gravis: Blocking anti-AChR
  - Autoimmune hemolytic anemia: Opsonization

**Type III (Immune Complex):**
- Autoantibody-antigen complexes deposit in tissues
- Complement activation, inflammation
- Examples:
  - SLE nephritis
  - Rheumatoid arthritis synovium

**Type IV (T Cell-Mediated):**
- CD4+ and CD8+ T cells attack tissues
- No antibody required
- Examples:
  - Type 1 diabetes
  - Multiple sclerosis
  - Hashimoto's thyroiditis

**Diagnostic Autoantibodies:**

| Autoantibody | Disease Association |
|--------------|-------------------|
| ANA | SLE, many others |
| Anti-dsDNA | SLE (specific) |
| Anti-Smith | SLE (specific) |
| Anti-CCP | RA (specific, prognostic) |
| RF | RA (sensitive) |
| Anti-TPO | Hashimoto's |
| Anti-TSHR | Graves' disease |
| Anti-AChR | Myasthenia gravis |
| ANCA | Vasculitis |`,
      keyTerms: [
        { term: 'AIRE', definition: 'Autoimmune regulator gene; expresses tissue-restricted antigens in thymus for negative selection' },
        { term: 'shared epitope', definition: 'HLA-DRB1 amino acid sequence associated with rheumatoid arthritis' },
        { term: 'molecular mimicry', definition: 'Cross-reactivity between pathogen and self-antigens leading to autoimmunity' },
        { term: 'epitope spreading', definition: 'Expansion of immune response to additional self-epitopes during autoimmune disease' },
        { term: 'APECED', definition: 'Autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy; caused by AIRE mutations' },
        { term: 'receptor editing', definition: 'B cell mechanism to change autoreactive BCR by secondary light chain rearrangement' },
      ],
      clinicalNotes: 'HLA-B27 is strongly associated with spondyloarthropathies. Anti-CCP is more specific than RF for RA and predicts erosive disease. SLE: Anti-dsDNA correlates with disease activity and nephritis. ANCA pattern (c-ANCA vs p-ANCA) helps differentiate GPA from MPA.',
    },
    4: {
      level: 4,
      summary: 'Autoimmune pathogenesis involves polygenic susceptibility (HLA, immune regulatory genes) interacting with environmental triggers to break multiple tolerance checkpoints (central deletion, peripheral anergy, Treg suppression), resulting in effector responses through autoreactive T cells, autoantibodies, and immune complexes that damage target tissues.',
      explanation: `Comprehensive understanding of autoimmunity requires integration of genetic predisposition, tolerance mechanisms, and disease-specific effector pathways.

**Genetic Architecture:**

**MHC/HLA Mechanisms:**

*Peptide Presentation:*
- HLA molecules bind and present self-peptides
- Disease-associated alleles may preferentially present autoantigens
- Examples:
  - HLA-DQ2/DQ8 present gliadin peptides (celiac)
  - HLA-DR4 shared epitope presents citrullinated peptides (RA)

*Thymic Selection:*
- HLA influences negative selection stringency
- Some alleles may allow more autoreactive cells to escape
- Balance between tolerance and immune competence

*Non-Classical Functions:*
- HLA-B27 misfolding → ER stress → IL-23 production
- May contribute to spondyloarthritis pathogenesis

**Genome-Wide Associations:**

*Key Pathways Implicated:*
- T cell signaling (PTPN22, CTLA-4, IL2RA)
- B cell signaling (BLK, BANK1)
- Cytokines (IL-23R, IL-12B, TNF)
- NF-κB signaling (TNFAIP3)
- Type I interferon (IRF5, STAT4)

*Polygenic Risk:*
- Most autoimmune diseases = many variants, small effects
- Genetic risk scores emerging
- Shared genetics between diseases (pleiotropy)

**Tolerance Checkpoint Failure:**

**Central Tolerance Defects:**

*AIRE Deficiency (APECED):*
- Absent medullary TEC expression of tissue antigens
- Autoreactive T cells escape
- Multi-organ autoimmunity
- Anti-cytokine antibodies (IFN-α, IL-17, IL-22)

*RAG Hypomorphic Mutations:*
- Omenn syndrome
- Oligoclonal autoreactive T cells
- Combined immunodeficiency + autoimmunity

**Peripheral Tolerance Defects:**

*Treg Deficiency/Dysfunction:*
- FOXP3 mutations (IPEX): Multi-organ autoimmunity
- CTLA-4/LRBA defects: Reduced Treg function
- Treg plasticity: Conversion to Th17 in inflammation

*Checkpoint Defects:*
- CTLA-4: Haploinsufficiency causes CHAI/LATAIE
- PD-1/PD-L1: Checkpoint inhibitor therapy → irAEs
- Fas/FasL: ALPS with autoimmune cytopenias

**Environmental Triggers:**

*Infections:*
- EBV: MS, SLE risk
- CMV: Systemic sclerosis
- Gut microbiome dysbiosis

*Epithelial Barrier:*
- Leaky gut hypothesis
- Lung/gut as sites of initial tolerance break
- Microbiome-immune interactions

*Epigenetics:*
- DNA methylation changes
- Histone modifications
- miRNA dysregulation
- Link environment to gene expression

**Disease-Specific Mechanisms:**

**SLE:**
*Pathogenesis:*
- Defective clearance of apoptotic cells
- Nuclear antigens exposed
- Type I interferon activation
- Autoantibody production
- Immune complex deposition

*Key Pathways:*
- IFN signature (IFN-α/β)
- B cell hyperactivation (BLyS/BAFF)
- Complement consumption

**Rheumatoid Arthritis:**
*Pathogenesis:*
- Citrullination of proteins
- Immune response to citrullinated antigens
- Anti-CCP antibodies
- Synovial inflammation (pannus)
- Bone/cartilage destruction

*Key Cytokines:*
- TNF-α
- IL-6
- IL-1

**Type 1 Diabetes:**
*Pathogenesis:*
- CD8+ T cell-mediated beta cell destruction
- CD4+ T cell help
- Autoantibodies (anti-GAD, anti-IA2, anti-insulin)
- Insulitis → beta cell loss → diabetes

*Stages:*
1. Multiple islet autoantibodies (pre-symptomatic)
2. Dysglycemia
3. Clinical diabetes

**Therapeutic Targeting:**

**Conventional Immunosuppression:**
- Corticosteroids
- Methotrexate
- Azathioprine
- Mycophenolate
- Cyclophosphamide (severe)

**Biologics by Target:**

| Target | Agent | Diseases |
|--------|-------|----------|
| TNF-α | Adalimumab, infliximab | RA, IBD, spondyloarthritis |
| IL-6R | Tocilizumab | RA, GCA |
| B cells (CD20) | Rituximab | RA, ANCA vasculitis, pemphigus |
| BAFF | Belimumab | SLE |
| Costimulation | Abatacept | RA |
| IL-17A | Secukinumab | Psoriasis, spondyloarthritis |
| IL-23 | Ustekinumab | Psoriasis, IBD |
| JAK | Tofacitinib, baricitinib | RA, UC |

**Emerging Approaches:**
- CAR-T targeting B cells
- Treg therapy
- Tolerogenic vaccines
- Microbiome modulation`,
      keyTerms: [
        { term: 'citrullination', definition: 'Post-translational modification of arginine to citrulline, creating neoantigens in RA' },
        { term: 'type I interferon signature', definition: 'Gene expression pattern indicating IFN-α/β activation, characteristic of SLE' },
        { term: 'checkpoint inhibitor toxicity', definition: 'Autoimmune side effects from cancer immunotherapy blocking PD-1 or CTLA-4' },
        { term: 'irAEs', definition: 'Immune-related adverse events from checkpoint inhibitor therapy' },
        { term: 'BLyS/BAFF', definition: 'B lymphocyte stimulator; promotes B cell survival, targeted by belimumab' },
        { term: 'CHAI/LATAIE', definition: 'Syndrome from CTLA-4 haploinsufficiency with autoimmunity' },
      ],
      clinicalNotes: 'Anti-CCP antibodies can precede RA symptoms by years. Type I interferon inhibitors (anifrolumab) now approved for SLE. Checkpoint inhibitor irAEs require prompt recognition and immunosuppression. Teplizumab (anti-CD3) can delay T1D onset in high-risk individuals. JAK inhibitors offer oral alternative to biologics.',
    },
    5: {
      level: 5,
      summary: 'Autoimmune diseases result from complex interactions between polygenic susceptibility, primarily HLA and immune regulatory genes, with environmental triggers that disrupt layered tolerance mechanisms, generating autoreactive effector responses through diverse pathways (autoantibodies, immune complexes, T cells) that enable precision therapeutic targeting of specific cytokines, cells, and signaling pathways.',
      explanation: `Comprehensive understanding of autoimmune principles enables precision diagnosis, prognosis, and targeted therapy across the spectrum of autoimmune diseases.

**Integrated Pathogenesis Model:**

**The Autoimmune "Tipping Point":**

*Stage 1: Genetic Susceptibility*
- HLA risk alleles
- Polygenic risk score
- May be insufficient alone
- Family clustering

*Stage 2: Preclinical Autoimmunity*
- Loss of tolerance (mechanism varies)
- Autoantibody development
- No clinical symptoms yet
- Detectable in at-risk individuals

*Stage 3: Initiation Event*
- Environmental trigger
- Tissue damage releasing antigens
- Innate immune activation
- Break peripheral tolerance

*Stage 4: Clinical Disease*
- Effector mechanisms active
- Tissue damage
- Clinical manifestations
- May be relapsing-remitting or progressive

**Tolerance at Multiple Levels:**

**Central Tolerance - Detailed:**

*Thymic Architecture:*
- Cortical TECs: Positive selection
- Medullary TECs: Negative selection via AIRE
- Dendritic cells: Cross-present peripheral antigens
- Hassall's corpuscles: Treg development

*AIRE Function:*
- Transcription factor
- Promiscuous gene expression
- >3,000 tissue-restricted antigens expressed
- Mutations → APECED (multi-organ autoimmunity)

*Incomplete Negative Selection:*
- Some self-reactive T cells escape
- Low-affinity autoreactive cells survive
- Require peripheral tolerance control

**Peripheral Tolerance - Detailed:**

*Treg Mechanisms:*

| Mechanism | Mediators | Effect |
|-----------|----------|--------|
| Cytokine inhibition | IL-10, TGF-β, IL-35 | Suppress effector cytokines |
| Cytolysis | Granzyme, perforin | Kill autoreactive cells |
| Metabolic disruption | IL-2 consumption, CD39/73 | Starve effector T cells |
| DC modulation | CTLA-4 → B7, LAG-3 | Tolerogenic APCs |

*Treg Stability:*
- FOXP3 demethylation = stable
- Inflammatory milieu → Treg plasticity
- Treg → Th17 conversion in inflammation
- Implications for therapy

**Effector Mechanism Integration:**

*Pathogenic Autoantibodies:*

| Mechanism | Disease Example |
|-----------|----------------|
| Cell destruction (opsonization) | AIHA |
| Receptor blocking | Myasthenia gravis |
| Receptor stimulation | Graves' disease |
| Intracellular (penetrating) | Anti-dsDNA in lupus? |
| Immune complex formation | SLE nephritis |
| Complement activation | NMO, ANCA vasculitis |
| ADCC | NMO, pemphigus |

*T Cell Mechanisms:*
- CD8+ CTL: Direct killing (T1D, MS)
- Th1: IFN-γ, macrophage activation (MS, RA)
- Th17: IL-17, neutrophilic inflammation (psoriasis, IBD)
- Tfh: Help autoreactive B cells (SLE)

**Precision Medicine Era:**

**Biomarker-Guided Therapy:**

*SLE:*
- Anti-dsDNA: Disease activity, nephritis risk
- Complement (C3, C4): Active disease
- IFN signature: May predict response to anifrolumab
- BLyS levels: Elevated, target for belimumab

*RA:*
- Anti-CCP: Predicts erosive disease, affects prognosis
- RF: Less specific, associated with extra-articular
- Shared epitope: Influences outcome
- Biomarkers for biologic selection evolving

*Vasculitis:*
- ANCA type (PR3 vs MPO): Disease phenotype
- PR3-ANCA: GPA, more relapses
- MPO-ANCA: MPA, more fibrosis

**Therapeutic Pipeline:**

*Targeting Tolerance:*
- Antigen-specific immunotherapy
- Tolerogenic dendritic cells
- Treg expansion/engineering
- Low-dose IL-2 for Tregs

*Novel Targets:*
- Type I IFN pathway (anifrolumab - SLE)
- BTK inhibitors (SLE, MS in development)
- CD19 CAR-T (refractory SLE showing promise)
- BCMA targeting
- CD40-CD40L blockade

*Cell Therapies:*
- Autologous HSCT (severe refractory disease)
- CAR-T against B cells (investigational)
- Treg therapy (clinical trials)
- Mesenchymal stem cells

**Prevention and Early Intervention:**

**Type 1 Diabetes Paradigm:**

*Staging:*
- Stage 1: ≥2 autoantibodies, normoglycemia
- Stage 2: ≥2 autoantibodies, dysglycemia
- Stage 3: Clinical diabetes

*Prevention:*
- Teplizumab (anti-CD3): Delays Stage 3 onset by 2+ years
- Approved for high-risk Stage 2 T1D
- First disease-modifying therapy in pre-symptomatic autoimmunity

**Implications:**
- Screen at-risk individuals
- Identify pre-symptomatic phase
- Intervene before tissue damage
- Potentially applicable to other diseases

**Case Integration:**

*Case: 35-year-old woman with fatigue, malar rash, arthralgias*

*Diagnosis:*
- ANA positive (1:640, speckled)
- Anti-dsDNA elevated
- Low C3, C4
- Proteinuria

*Diagnosis:* SLE with likely lupus nephritis

*Pathophysiology Application:*
- Genetic: HLA-DR2/DR3, IRF5, STAT4
- Tolerance failure: Defective apoptotic clearance
- Effector: Anti-dsDNA immune complexes → nephritis
- Type I IFN activation

*Therapeutic Options:*
- Hydroxychloroquine (baseline)
- Corticosteroids (acute)
- Mycophenolate (nephritis)
- Belimumab (BAFF inhibition)
- Anifrolumab (IFN inhibition)
- Rituximab (refractory)
- Voclosporin (approved for nephritis)

*Monitoring:*
- Anti-dsDNA levels
- Complement
- Proteinuria/renal function
- Disease activity indices (SLEDAI)`,
      keyTerms: [
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody that delays Type 1 diabetes onset in high-risk individuals' },
        { term: 'anifrolumab', definition: 'Type I interferon receptor antagonist approved for SLE' },
        { term: 'voclosporin', definition: 'Calcineurin inhibitor approved for lupus nephritis' },
        { term: 'AIRE', definition: 'Autoimmune regulator; transcription factor enabling promiscuous gene expression in thymus' },
        { term: 'Treg plasticity', definition: 'Ability of regulatory T cells to convert to effector phenotypes in inflammatory environments' },
        { term: 'SLEDAI', definition: 'Systemic Lupus Erythematosus Disease Activity Index; scoring system for disease activity' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- HLA-B27: Ankylosing spondylitis (~90% association)
- HLA-DQ2/DQ8: Required for celiac disease
- Anti-CCP: More specific for RA than RF, predicts erosive disease
- Anti-dsDNA and anti-Smith: Specific for SLE
- Low complement (C3, C4): Active SLE
- ANCA: c-ANCA (PR3) = GPA; p-ANCA (MPO) = MPA
- AIRE mutations cause APECED (autoimmune polyendocrinopathy)
- FOXP3 mutations cause IPEX (Treg deficiency)
- Molecular mimicry: Strep → rheumatic heart disease
- Checkpoint inhibitor irAEs = autoimmunity from blocked tolerance
- Teplizumab: First approved therapy for pre-symptomatic autoimmunity (Stage 2 T1D)`,
    },
  },

  media: [
    {
      id: 'tolerance-mechanisms',
      type: 'diagram',
      filename: 'self-tolerance-overview.svg',
      title: 'Central and Peripheral Tolerance Mechanisms',
      description: 'Overview of how the immune system maintains self-tolerance',
    },
    {
      id: 'autoimmune-pathways',
      type: 'diagram',
      filename: 'autoimmune-effector-mechanisms.svg',
      title: 'Effector Mechanisms in Autoimmunity',
      description: 'Antibody-mediated, immune complex, and T cell-mediated mechanisms',
    },
  ],
  citations: [
    {
      id: 'autoimmunity-textbook',
      type: 'textbook',
      title: 'The Autoimmune Diseases',
      authors: ['Rose NR', 'Mackay IR'],
      source: 'Academic Press',
    },
    {
      id: 'tolerance-review',
      type: 'article',
      title: 'Mechanisms of Self-Tolerance and Autoimmunity',
      authors: ['Theofilopoulos AN', 'Kono DH', 'Baccala R'],
      source: 'Annual Review of Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-immune-system-overview', targetType: 'concept', relationship: 'parent', label: 'Immune System Overview' },
    { targetId: 'allergy-immunology-immunodeficiency-disorders', targetType: 'condition', relationship: 'related', label: 'Immunodeficiency Disorders' },
    { targetId: 'allergy-immunology-type-ii-hypersensitivity', targetType: 'concept', relationship: 'see-also', label: 'Type II Hypersensitivity' },
    { targetId: 'allergy-immunology-type-iii-hypersensitivity', targetType: 'concept', relationship: 'see-also', label: 'Type III Hypersensitivity' },
    { targetId: 'allergy-immunology-type-iv-hypersensitivity', targetType: 'concept', relationship: 'see-also', label: 'Type IV Hypersensitivity' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['immunology', 'rheumatology', 'pathology'],
    keywords: ['autoimmunity', 'self-tolerance', 'autoantibodies', 'HLA', 'Tregs', 'biologics'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default autoimmunePrinciplesContent;
