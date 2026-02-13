import { EducationalContent } from '../../types';

export const adaptiveImmunityContent: EducationalContent = {
  id: 'physiology-immune-adaptive-immunity',
  type: 'concept',
  name: 'Adaptive Immunity',
  alternateNames: ['Acquired Immunity', 'Specific Immunity', 'Antigen-Specific Immunity'],

  levels: {
    1: {
      level: 1,
      summary: 'Adaptive immunity is your body\'s specialized defense system that learns to recognize and remember specific germs, providing long-lasting protection.',
      explanation: `Unlike your body's instant defenses, adaptive immunity is like having a special forces team that studies each enemy and remembers them forever.

**The Special Forces of Your Body:**

**1. T Cells - The Commanders and Assassins**

T cells are white blood cells that train in a special organ called the thymus (that's why they're called "T" cells).

There are two main types:
- **Helper T Cells (CD4+ cells)**: These are like generals that coordinate the attack. They tell other immune cells what to do.
- **Killer T Cells (CD8+ cells)**: These directly destroy cells that have been infected by viruses or have become cancerous.

**2. B Cells - The Antibody Factories**

B cells are made in your bone marrow and have one special job: making antibodies.

**What are Antibodies?**
- Y-shaped proteins that stick to germs
- Each antibody fits only one specific germ, like a lock and key
- They mark germs so other immune cells can find and destroy them
- They can also block germs from entering your cells

**The Memory Advantage:**

The coolest thing about adaptive immunity is memory:

1. **First Encounter**: Your body meets a germ for the first time. It takes about 1-2 weeks to mount a strong response. You might feel sick during this time.

2. **Memory Formation**: After the fight, some T and B cells become "memory cells" that live for years or even your whole life.

3. **Second Encounter**: If the same germ comes back, your memory cells recognize it immediately. They multiply quickly and destroy the germ before you even feel sick!

**This is exactly how vaccines work** - they teach your immune system to recognize a germ without you getting sick first.`,
      keyTerms: [
        { term: 'T cell', definition: 'A white blood cell that coordinates immune responses and kills infected cells' },
        { term: 'B cell', definition: 'A white blood cell that makes antibodies' },
        { term: 'antibody', definition: 'A Y-shaped protein that recognizes and sticks to specific germs' },
        { term: 'memory cell', definition: 'An immune cell that remembers past infections and responds quickly if the germ returns' },
        { term: 'thymus', definition: 'An organ where T cells learn and mature', pronunciation: 'THY-mus' },
      ],
      analogies: [
        'T cells are like military generals (helpers) and special forces soldiers (killers) that lead the fight against invaders.',
        'Antibodies are like wanted posters with the criminal\'s face - they help identify the bad guys.',
        'Memory cells are like a detective\'s files - once a criminal is caught, their photo goes in the file so they can be quickly identified if they return.',
      ],
      examples: [
        'When you get chicken pox, your body makes memory cells. That\'s why most people only get it once.',
        'Vaccines give your body a "practice run" so it can make memory cells without you getting sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adaptive immunity utilizes lymphocytes (T and B cells) that undergo clonal selection to mount highly specific responses against pathogens, with the ability to form immunological memory.',
      explanation: `The adaptive immune system provides targeted, pathogen-specific responses through lymphocytes that can recognize virtually any foreign substance.

**Key Characteristics:**

1. **Specificity**: Recognizes specific molecular structures (antigens)
2. **Diversity**: Can recognize billions of different antigens
3. **Memory**: Remembers previous encounters for faster future responses
4. **Self-tolerance**: Normally doesn't attack the body's own tissues

**T Lymphocytes:**

| Type | Surface Marker | Function |
|------|---------------|----------|
| Helper T (Th) | CD4 | Coordinate immune responses, activate other cells |
| Cytotoxic T (CTL) | CD8 | Kill infected cells and cancer cells |
| Regulatory T (Treg) | CD4, CD25, FoxP3 | Suppress immune responses, prevent autoimmunity |

**T Cell Activation:**
1. Antigen-presenting cell (APC) displays foreign peptide on MHC
2. T cell receptor (TCR) recognizes the peptide-MHC complex
3. Co-stimulatory signals confirm activation
4. T cell proliferates and differentiates

**Helper T Cell Subsets:**
- **Th1**: Fight intracellular pathogens (bacteria in macrophages, viruses)
- **Th2**: Fight parasites, involved in allergies
- **Th17**: Fight fungi and extracellular bacteria at mucosal surfaces

**B Lymphocytes:**

**B Cell Activation:**
1. B cell receptor (BCR) binds to antigen
2. B cell processes antigen and presents it on MHC II
3. Helper T cell recognizes the antigen and provides "help"
4. B cell proliferates and differentiates into:
   - **Plasma cells**: Antibody-secreting factories
   - **Memory B cells**: Long-lived cells for rapid recall

**Antibody Classes (Immunoglobulins):**

| Class | Location | Function |
|-------|----------|----------|
| IgM | Blood | First antibody produced; good at activating complement |
| IgG | Blood, tissues | Most abundant; crosses placenta; long-term immunity |
| IgA | Mucous membranes, breast milk | Protects mucosal surfaces |
| IgE | Bound to mast cells | Allergic reactions; parasite defense |
| IgD | B cell surface | B cell activation (with IgM) |

**Antibody Functions:**
1. **Neutralization**: Block pathogens from entering cells
2. **Opsonization**: Coat pathogens to enhance phagocytosis
3. **Complement activation**: Trigger complement cascade
4. **Antibody-dependent cellular cytotoxicity (ADCC)**: Guide NK cells to kill

**Primary vs Secondary Immune Response:**

| Feature | Primary (First Exposure) | Secondary (Re-exposure) |
|---------|-------------------------|------------------------|
| Lag period | 5-10 days | 1-3 days |
| Peak response | Smaller | Larger (10-100x) |
| Antibody class | Mostly IgM | Mostly IgG |
| Duration | Shorter | Longer |
| Affinity | Lower | Higher (affinity maturation) |`,
      keyTerms: [
        { term: 'antigen', definition: 'Any substance that can trigger an immune response', pronunciation: 'AN-tih-jen' },
        { term: 'clonal selection', definition: 'The process where only lymphocytes that recognize a specific antigen multiply' },
        { term: 'MHC', definition: 'Major Histocompatibility Complex; proteins that present antigens to T cells' },
        { term: 'plasma cell', definition: 'A fully differentiated B cell that secretes large amounts of antibodies' },
        { term: 'affinity maturation', definition: 'The process by which antibody binding strength improves during an immune response' },
        { term: 'immunoglobulin', definition: 'Another name for antibody', pronunciation: 'im-yoo-noh-GLOB-yoo-lin' },
      ],
      analogies: [
        'Clonal selection is like a talent show - only the cells that can recognize the invader get picked to multiply.',
        'IgM is like the first responders who arrive quickly but aren\'t specialized, while IgG is like the expert team that takes over.',
        'MHC molecules are like ID card readers that display what\'s inside a cell for T cells to inspect.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adaptive immunity achieves antigen-specific responses through clonal selection of lymphocytes bearing somatically recombined antigen receptors, with T cells mediating cellular immunity through MHC-restricted recognition and B cells producing antibodies that undergo class switching and affinity maturation.',
      explanation: `The adaptive immune system generates extraordinary receptor diversity through somatic recombination, enabling recognition of essentially any foreign antigen.

**Antigen Receptor Generation:**

**V(D)J Recombination:**
- RAG1 and RAG2 enzymes (Recombination Activating Genes)
- Variable (V), Diversity (D), and Joining (J) gene segments
- Random combination creates diversity
- Junctional diversity: P and N nucleotide additions

**TCR Diversity:**
- Alpha chain: V-J recombination
- Beta chain: V-D-J recombination
- Theoretical diversity: >10^15 combinations
- Actual repertoire: ~10^7-10^8 different TCRs

**BCR/Antibody Diversity:**
- Heavy chain: V-D-J recombination
- Light chain: V-J recombination
- Additional diversity from somatic hypermutation
- Theoretical diversity: >10^11 combinations

**T Cell Development (Thymic Education):**

**Stages:**
1. **Double Negative (DN)**: CD4-CD8-, TCR rearrangement begins
2. **Double Positive (DP)**: CD4+CD8+, both chains expressed
3. **Single Positive (SP)**: CD4+ OR CD8+, mature T cells

**Selection Events:**
- **Positive Selection** (Cortex): TCR must recognize self-MHC
  - Ensures MHC restriction
  - Cells that fail die by neglect
- **Negative Selection** (Medulla): TCR must NOT strongly bind self-antigens
  - Prevents autoimmunity (central tolerance)
  - Strongly self-reactive cells undergo apoptosis
  - AIRE (Autoimmune Regulator) expresses tissue-specific antigens

**MHC Restriction:**

| MHC Class | Expressed On | Presents | Recognized By |
|-----------|-------------|----------|---------------|
| Class I | All nucleated cells | Cytosolic peptides (8-10 aa) | CD8+ T cells |
| Class II | APCs only | Endocytosed peptides (13-25 aa) | CD4+ T cells |

**T Cell Activation Signals:**
1. **Signal 1**: TCR recognition of peptide-MHC
2. **Signal 2**: Co-stimulation (CD28 on T cell binds B7 on APC)
3. **Signal 3**: Cytokines directing differentiation

**CD4+ T Helper Differentiation:**

| Subset | Transcription Factor | Key Cytokines | Function |
|--------|---------------------|---------------|----------|
| Th1 | T-bet | IFN-gamma | Intracellular pathogens |
| Th2 | GATA3 | IL-4, IL-5, IL-13 | Parasites, allergies |
| Th17 | RORgammat | IL-17, IL-22 | Extracellular bacteria, fungi |
| Treg | FoxP3 | IL-10, TGF-beta | Immune suppression |
| Tfh | Bcl-6 | IL-21 | B cell help in germinal centers |

**B Cell Maturation and Germinal Center Reaction:**

**Germinal Center:**
1. **Dark Zone**: Centroblasts proliferate, undergo somatic hypermutation
2. **Light Zone**: Centrocytes compete for antigen on FDCs
   - Tfh cells provide survival signals
   - High-affinity B cells survive (affinity maturation)
   - Low-affinity B cells undergo apoptosis

**Class Switch Recombination (CSR):**
- AID (Activation-Induced Cytidine Deaminase) enzyme
- Switch regions upstream of constant genes
- Cytokines direct switching:
  - IL-4: IgE, IgG4
  - IFN-gamma: IgG1, IgG3
  - TGF-beta: IgA

**Memory and Long-Lived Plasma Cells:**
- Memory B cells: In circulation and secondary lymphoid organs
- Long-lived plasma cells: Bone marrow, produce antibodies for decades`,
      keyTerms: [
        { term: 'V(D)J recombination', definition: 'Somatic DNA rearrangement process generating antigen receptor diversity' },
        { term: 'positive selection', definition: 'Thymic process ensuring T cells can recognize self-MHC molecules' },
        { term: 'negative selection', definition: 'Thymic process eliminating T cells that react strongly to self-antigens' },
        { term: 'somatic hypermutation', definition: 'Introduction of point mutations in immunoglobulin genes during germinal center reactions' },
        { term: 'class switch recombination', definition: 'Process changing antibody class while maintaining antigen specificity' },
        { term: 'germinal center', definition: 'Specialized microstructure in lymphoid organs where B cells undergo affinity maturation' },
      ],
      clinicalNotes: 'RAG1/RAG2 deficiency causes Severe Combined Immunodeficiency (SCID) with absent T and B cells. AIRE mutations cause Autoimmune Polyendocrinopathy Syndrome Type 1 (APS-1). AID deficiency results in Hyper-IgM Syndrome Type 2 with defective CSR and somatic hypermutation.',
    },
    4: {
      level: 4,
      summary: 'Adaptive immunity orchestrates antigen-specific responses through clonally selected lymphocytes that undergo positive and negative selection to establish self-tolerance, with effector differentiation programs dictated by innate immune instruction and microenvironmental cues.',
      explanation: `The adaptive immune system integrates developmental checkpoints, receptor editing, and peripheral tolerance mechanisms to balance protective immunity against pathogens with prevention of autoimmunity.

**Lymphocyte Development:**

**T Cell Ontogeny:**

*Thymic Stages:*
- DN1 (CD44+CD25-): Thymic seeding progenitors
- DN2 (CD44+CD25+): T lineage commitment
- DN3 (CD44-CD25+): Beta-chain rearrangement, beta-selection
- DN4 (CD44-CD25-): Proliferation post-beta-selection
- DP (CD4+CD8+): Alpha-chain rearrangement, selection
- SP (CD4+ or CD8+): Lineage-committed mature thymocytes

*Beta-Selection Checkpoint:*
- Productive TCRbeta pairs with pre-Talpha (pTa)
- Signals proliferation and allelic exclusion
- RAG downregulation temporarily
- Cells failing beta-selection die

*CD4/CD8 Lineage Commitment:*
- Kinetic signaling model: Duration of TCR signal
- Strong, sustained signal: CD4 lineage (Th-POK)
- Weaker signal: CD8 lineage (Runx3)
- MHC class determines lineage

**B Cell Development:**

*Bone Marrow Stages:*
- Pro-B: Heavy chain D-J rearrangement, then V-DJ
- Pre-B: Heavy chain paired with surrogate light chain (VpreB/lambda5)
- Pre-B receptor checkpoint
- Immature B: Light chain rearrangement, surface IgM
- Central tolerance checkpoint: Receptor editing or deletion

*Receptor Editing:*
- Self-reactive immature B cells can re-rearrange light chains
- Uses secondary Vlambda or Vkappa genes
- Rescues cells from deletion
- Failure leads to clonal deletion or anergy

**T Cell Effector Mechanisms:**

**CD8+ CTL Killing:**

*Perforin/Granzyme Pathway:*
1. Immunological synapse formation
2. Lytic granule polarization to synapse
3. Perforin creates pores in target membrane
4. Granzymes enter target cell
5. Granzyme B activates caspases (apoptosis)

*Fas/FasL Pathway:*
- FasL on CTL binds Fas on target
- Caspase-8 activation
- Extrinsic apoptosis pathway
- Important for killing some tumor cells

**CD4+ T Cell Function:**

*Th1 Responses:*
- Induce by: IL-12 (from DCs), IFN-gamma
- Master TF: T-bet (Tbx21)
- Effector cytokines: IFN-gamma, TNF-alpha
- Target: Macrophage activation, intracellular pathogens

*Th2 Responses:*
- Induce by: IL-4 (source debated)
- Master TF: GATA3
- Effector cytokines: IL-4, IL-5, IL-13
- Target: Helminth expulsion, allergic disease

*Th17 Responses:*
- Induce by: IL-6 + TGF-beta, IL-23 (maintenance)
- Master TF: RORgammat
- Effector cytokines: IL-17A/F, IL-22
- Target: Mucosal defense, neutrophil recruitment

*Regulatory T Cells:*

*Natural Tregs (thymic):*
- High-affinity self-recognition during selection
- CD4+CD25+FoxP3+
- CD25 = IL-2Ralpha (IL-2 consumption)
- CTLA-4: Competes with CD28 for B7

*Induced Tregs (peripheral):*
- Convert from naive CD4+ with TGF-beta + IL-2
- Same markers as nTregs
- Important at mucosal surfaces

*Suppression Mechanisms:*
- IL-10, TGF-beta: Inhibitory cytokines
- CTLA-4: Strips B7 from APCs
- IL-2 deprivation: High-affinity receptor consumption
- Granzyme-mediated killing of effector cells

**Germinal Center Biology:**

*Architecture:*
- Dark zone: CXCL12-expressing reticular cells, centroblasts
- Light zone: CXCL13-expressing FDCs, centrocytes, Tfh

*Selection Cycle:*
1. Centroblasts divide rapidly (6-12 hr cycle)
2. AID introduces mutations (somatic hypermutation)
3. Centrocytes migrate to light zone
4. Compete for limiting antigen on FDCs
5. Tfh cells provide CD40L and IL-21 signals
6. Successful cells: Re-enter dark zone or exit
7. Unsuccessful cells: Apoptosis

*Outputs:*
- Memory B cells: Lower affinity, class-switched
- Plasma cell precursors: High affinity
- Long-lived plasma cells migrate to bone marrow`,
      keyTerms: [
        { term: 'beta-selection', definition: 'Checkpoint in T cell development requiring productive TCRbeta chain rearrangement' },
        { term: 'receptor editing', definition: 'Secondary light chain rearrangement rescuing self-reactive B cells' },
        { term: 'immunological synapse', definition: 'Organized interface between T cell and APC or target cell, concentrating signaling molecules' },
        { term: 'FDC', definition: 'Follicular dendritic cell; non-hematopoietic cell displaying antigen-antibody complexes in germinal centers' },
        { term: 'Tfh', definition: 'T follicular helper cell; specialized CD4+ T cell providing B cell help in germinal centers' },
        { term: 'AID', definition: 'Activation-induced cytidine deaminase; enzyme mediating somatic hypermutation and class switching' },
      ],
      clinicalNotes: 'Omenn syndrome results from hypomorphic RAG mutations allowing oligoclonal T cell expansion. IPEX syndrome (FoxP3 mutation) demonstrates Treg requirement for self-tolerance. Rituximab (anti-CD20) depletes B cells but spares long-lived plasma cells (CD20-negative), explaining persistent antibody titers.',
    },
    5: {
      level: 5,
      summary: 'Adaptive immunity represents a vertebrate-specific system of clonally distributed, somatically diversified antigen receptors on lymphocytes that undergo developmental checkpoints, clonal selection, and differentiation into effector and memory populations, with spatially organized responses in secondary lymphoid organs orchestrated by stromal cells, chemokines, and innate immune instruction.',
      explanation: `The adaptive immune system has evolved sophisticated mechanisms for generating protective immunity while maintaining self-tolerance, with clinical implications across autoimmunity, immunodeficiency, transplantation, and cancer.

**Advanced Lymphocyte Biology:**

**TCR Signaling Cascade:**

*Proximal Signaling:*
1. TCR engagement phosphorylates CD3 ITAMs (by Lck)
2. ZAP-70 recruitment and activation
3. LAT phosphorylation (scaffold)
4. PLCgamma1 activation
5. IP3: Calcium release, NFAT activation
6. DAG: PKC activation, NF-kB pathway
7. Ras-MAPK: AP-1 activation

*Transcriptional Outcomes:*
- IL-2: Autocrine growth factor
- CD25: IL-2 high-affinity receptor
- Effector genes based on differentiation signals

*Co-inhibitory Receptors:*
- CTLA-4: Competes for B7, cell-intrinsic and extrinsic effects
- PD-1: Recruited phosphatases (SHP-1/2), attenuates signaling
- LAG-3, TIM-3, TIGIT: Additional checkpoints

**BCR Signaling and B Cell Fate:**

*Signal Strength Model:*
- Weak signal: Marginal zone B cell fate
- Moderate signal: Follicular B cell fate
- Strong signal: Deletion or anergy
- Signal duration/quality also matters

*BCR Proximal Signaling:*
- Igalpha/Igbeta ITAMs phosphorylation (Lyn)
- Syk recruitment and activation
- BLNK scaffold, PLCgamma2
- Similar downstream pathways to TCR

*CD19/CD21 Co-receptor:*
- CD21: Complement receptor (binds C3d)
- Lowers BCR activation threshold
- Antigen opsonized with C3d: Enhanced B cell response

**Memory Cell Biology:**

**Memory T Cell Subsets:**

*Central Memory (TCM):*
- CD62L+CCR7+: Lymph node homing
- IL-7R+, IL-15-responsive
- Higher proliferative capacity
- Become effectors upon rechallenge

*Effector Memory (TEM):*
- CD62L-CCR7-: Tissue homing
- Rapid effector function
- Lower proliferative capacity
- Immediate protection

*Tissue-Resident Memory (TRM):*
- CD69+, CD103+ (in mucosa)
- Non-circulating
- Poised effector state
- Critical for barrier tissue immunity

*Stem Cell Memory (TSCM):*
- CD45RA+CCR7+CD95+
- Most stem-like properties
- Highest self-renewal capacity
- Generate all other subsets

**Memory B Cell Heterogeneity:**
- Class-switched vs IgM+ memory
- Different reactivation thresholds
- Tissue-resident memory B cells
- Antigen-experienced but non-GC-derived (MBCs without SHM)

**Germinal Center Dynamics:**

*Tfh Biology:*
- CXCR5+PD-1+ICOS+Bcl-6+
- IL-21 major product
- CD40L provides survival signals
- SAP mutations: XLP (no GC formation)

*Dark/Light Zone Cycling:*
- CXCR4: Dark zone retention (CXCL12)
- CXCR5: Light zone migration (CXCL13)
- Multiple cycles before exit
- Each cycle adds mutations, increases affinity

*AID Targeting:*
- Targets transcribed genes (stalled RNA pol II)
- Variable region: Somatic hypermutation
- Switch regions: Class switch recombination
- Off-target: Oncogene translocations (e.g., c-MYC in Burkitt)

**Clinical Integration:**

**Immunodeficiency Patterns:**

*Combined Immunodeficiency:*
- SCID: Absent T cells +/- B, NK
  - X-SCID: IL2RG (gamma-c) mutation
  - ADA-SCID: Toxic metabolite accumulation
  - RAG1/2 SCID: No V(D)J recombination
- Omenn syndrome: Oligoclonal T cells, erythroderma

*Antibody Deficiency:*
- XLA: BTK mutation, absent B cells, no Ig
- CVID: Heterogeneous, low IgG + (IgA and/or IgM)
- Hyper-IgM syndromes:
  - Type 1: CD40L (X-linked)
  - Type 2: AID
  - Type 3: CD40

**Autoimmunity Mechanisms:**

*Central Tolerance Failure:*
- AIRE mutation: APS-1
- Defective negative selection

*Peripheral Tolerance Failure:*
- Treg defects: IPEX (FoxP3)
- Checkpoint defects: CTLA-4 haploinsufficiency
- ALPS: Fas/FasL mutations (apoptosis defect)

*Molecular Mimicry:*
- Cross-reactive epitopes between pathogen and self
- Rheumatic fever: Strep M protein, cardiac myosin

*Epitope Spreading:*
- Initial response to one epitope
- Tissue damage releases additional self-antigens
- Broadening autoimmune response

**Therapeutic Targeting:**

*Checkpoint Inhibitors:*
- Anti-PD-1: Pembrolizumab, nivolumab
- Anti-PD-L1: Atezolizumab, durvalumab
- Anti-CTLA-4: Ipilimumab
- irAEs: Autoimmune-like toxicities

*T Cell Therapies:*
- CAR-T: Chimeric antigen receptor
- CD19 CAR-T: B-ALL, DLBCL (tisagenlecleucel, axicabtagene)
- CRS and neurotoxicity management
- Tumor-infiltrating lymphocytes (TIL)

*B Cell Depletion:*
- Rituximab: Anti-CD20
- Obinutuzumab: Glycoengineered anti-CD20
- Applications: Lymphoma, RA, vasculitis, SLE`,
      keyTerms: [
        { term: 'ITAM', definition: 'Immunoreceptor tyrosine-based activation motif; signaling domain in antigen receptor complexes' },
        { term: 'TRM', definition: 'Tissue-resident memory T cell; non-circulating memory population providing local immunity' },
        { term: 'XLP', definition: 'X-linked lymphoproliferative disease; SAP deficiency causing impaired T-B interactions and EBV susceptibility' },
        { term: 'ALPS', definition: 'Autoimmune lymphoproliferative syndrome; caused by Fas pathway defects, lymphadenopathy and autoimmunity' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T cell; engineered T cell with synthetic receptor targeting tumor antigen' },
        { term: 'irAE', definition: 'Immune-related adverse event; autoimmune toxicity from checkpoint inhibitor therapy' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- SCID: Absent thymic shadow, lymphopenia, recurrent infections from first weeks of life
- X-SCID (IL2RG): T-B+NK- (gamma-c needed for IL-7R, IL-15R)
- ADA-SCID: T-B-NK- (toxic metabolites affect all lymphocytes)
- XLA vs CVID: XLA has no B cells; CVID has B cells but defective differentiation
- CVID diagnosis: Exclude secondary causes, age >4, low IgG + (IgA or IgM), poor vaccine responses
- Checkpoint inhibitor irAEs: Treat like autoimmune disease (steroids, sometimes biologics)
- CAR-T CRS: Tocilizumab (IL-6R blockade) is first-line
- ALPS: Double-negative T cells (CD4-CD8-TCRalphabeta+), elevated B12, IL-10`,
    },
  },

  media: [
    {
      id: 'adaptive-immunity-overview',
      type: 'diagram',
      filename: 'adaptive-immunity-overview.svg',
      title: 'Overview of Adaptive Immunity',
      description: 'T cell and B cell arms of adaptive immunity with effector mechanisms',
    },
    {
      id: 't-cell-development',
      type: 'diagram',
      filename: 't-cell-thymic-development.svg',
      title: 'T Cell Development in the Thymus',
      description: 'Stages from DN to SP with selection events',
    },
    {
      id: 'germinal-center',
      type: 'diagram',
      filename: 'germinal-center-reaction.svg',
      title: 'Germinal Center Reaction',
      description: 'Dark zone, light zone, and B cell selection process',
    },
  ],
  citations: [
    {
      id: 'janeway-immunobiology-ch7-11',
      type: 'textbook',
      title: 'The Development and Survival of Lymphocytes; T Cell-Mediated Immunity',
      authors: ['Murphy K', 'Weaver C'],
      source: 'Janeway\'s Immunobiology',
      chapter: '7-11',
    },
    {
      id: 'victora-nussenzweig-2022',
      type: 'article',
      title: 'Germinal Centers',
      authors: ['Victora GD', 'Nussenzweig MC'],
      source: 'Annual Review of Immunology',
      url: 'https://doi.org/10.1146/annurev-immunol-120419-022408',
    },
  ],
  crossReferences: [
    { targetId: 'physiology-immune-innate-immunity', targetType: 'concept', relationship: 'related', label: 'Innate Immunity' },
    { targetId: 'physiology-immune-vaccination-science', targetType: 'concept', relationship: 'related', label: 'Vaccination Science' },
    { targetId: 'structure-thymus', targetType: 'structure', relationship: 'related', label: 'Thymus' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
  ],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['immunology', 'physiology'],
    keywords: ['T cells', 'B cells', 'antibodies', 'MHC', 'germinal center', 'immunological memory'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology', 'pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adaptiveImmunityContent;
