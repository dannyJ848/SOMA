import { EducationalContent } from '../../types';

export const adaptiveImmunityContent: EducationalContent = {
  id: 'physiology-adaptive-immunity',
  type: 'system',
  name: 'Adaptive Immunity',
  alternateNames: ['Acquired immunity', 'Specific immunity', 'Adaptive immune system'],

  levels: {
    1: {
      level: 1,
      summary: 'Adaptive immunity is the body\'s learned defense system that remembers specific germs and protects against them in the future.',
      explanation: `While innate immunity provides immediate protection, adaptive immunity learns about specific germs and creates a customized defense. It also remembers enemies it has fought before.

**Two Main Types:**

1. **B Cells (Humoral Immunity)**
   - Make antibodies (special proteins)
   - Antibodies stick to germs
   - Help neutralize or mark germs for destruction
   - Remember previous infections

2. **T Cells (Cellular Immunity)**
   - Kill infected cells directly
   - Help other immune cells
   - Coordinate the immune response
   - Some become memory cells

**Key Features:**

1. **Specificity**
   - Recognizes specific germs
   - Different response for each germ
   - Like a lock and key

2. **Memory**
   - Remembers past infections
   - Faster response next time
   - Basis of vaccines

3. **Takes Time**
   - 5-7 days for first response
   - Much faster second time
   - Works with innate immunity`,
      keyTerms: [
        { term: 'adaptive immunity', definition: 'The learned immune response specific to particular pathogens' },
        { term: 'antibody', definition: 'Protein made by B cells that recognizes and binds to specific germs' },
        { term: 'B cell', definition: 'Lymphocyte that produces antibodies' },
        { term: 'T cell', definition: 'Lymphocyte that kills infected cells or helps coordinate immunity' },
        { term: 'memory cell', definition: 'Long-lived immune cell that remembers a specific pathogen' },
      ],
      analogies: [
        'Adaptive immunity is like having a library of wanted posters - each antibody and T cell is specifically looking for one particular bad guy.',
        'Think of it as having security guards who take photos of intruders and train specifically to recognize them if they return.',
      ],
      examples: [
        'After getting chickenpox once, memory cells remember the virus and prevent you from getting sick again.',
        'Vaccines work by teaching your adaptive immunity about a germ without making you sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adaptive immunity provides antigen-specific defense through B cell-mediated humoral immunity and T cell-mediated cellular immunity, with immunological memory enabling rapid secondary responses.',
      explanation: `The adaptive immune system generates specific responses to individual pathogens through clonal selection of lymphocytes bearing unique antigen receptors, with memory formation providing long-term protection.

**Lymphocyte Development:**

1. **Origin:**
   - Bone marrow stem cells
   - Common lymphoid progenitor
   - B cells mature in bone marrow
   - T cells mature in thymus
   - Naive lymphocytes enter circulation

2. **Antigen Receptors:**
   - BCR: Membrane immunoglobulin
   - TCR: Heterodimer (alpha/beta or gamma/delta)
   - V(D)J recombination
   - Clonal distribution
   - Self-tolerance selection

**B Cell Response (Humoral Immunity):**

1. **Activation:**
   - Antigen binding to BCR
   - T cell help (most antigens)
   - B-T interaction in lymph node
   - Clonal proliferation

2. **Effector Functions:**
   - Plasma cell differentiation
   - Antibody secretion
   - Neutralization
   - Opsonization
   - Complement activation

3. **Antibody Classes:**
   - IgM: Primary response
   - IgG: Secondary response, opsonization
   - IgA: Mucosal immunity
   - IgE: Allergies, parasites
   - IgD: B cell receptor

**T Cell Response (Cellular Immunity):**

1. **CD4+ T Helper Cells:**
   - Recognize MHC class II
   - Activate macrophages (Th1)
   - Help B cells (Th2, Tfh)
   - Coordinate immunity

2. **CD8+ Cytotoxic T Cells:**
   - Recognize MHC class I
   - Kill infected cells
   - Perforin/granzyme pathway
   - Fas/FasL pathway

3. **T Cell Activation:**
   - Signal 1: TCR-MHC-peptide
   - Signal 2: Co-stimulation
   - Signal 3: Cytokines
   - Clonal expansion

**Immunological Memory:**

1. **Primary Response:**
   - Lag phase (5-10 days)
   - IgM initially
   - Class switching to IgG
   - Peak then decline
   - Memory generation

2. **Secondary Response:**
   - Faster (1-3 days)
   - Higher affinity antibodies
   - Predominantly IgG
   - Longer lasting
   - Memory T cell activation`,
      keyTerms: [
        { term: 'clonal selection', definition: 'Activation and proliferation of lymphocytes recognizing specific antigen' },
        { term: 'BCR', definition: 'B cell receptor; membrane-bound antibody recognizing antigen' },
        { term: 'TCR', definition: 'T cell receptor; recognizes peptide-MHC complexes' },
        { term: 'MHC', definition: 'Major Histocompatibility Complex; presents antigens to T cells' },
        { term: 'class switching', definition: 'Change in antibody isotype while maintaining antigen specificity' },
      ],
      analogies: [
        'V(D)J recombination is like shuffling a deck of cards to create millions of different hands - each lymphocyte gets a unique receptor.',
        'The primary response is like mobilizing an army from scratch; the secondary response is like having trained reserves ready to go immediately.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adaptive immunity operates through clonal selection of antigen-specific lymphocytes with diverse receptor repertoires, involving complex cellular interactions, effector differentiation, and memory formation in secondary lymphoid organs.',
      explanation: `Adaptive immune responses involve sophisticated mechanisms of antigen recognition, lymphocyte activation, and coordinated effector functions that provide pathogen-specific defense and lasting immunity.

**Antigen Recognition:**

1. **T Cell Antigen Recognition:**
   
   *MHC Class I:*
   - Presents endogenous antigens
   - All nucleated cells express
   - Recognized by CD8+ T cells
   - Peptide binding groove
   
   *MHC Class II:*
   - Presents exogenous antigens
   - APCs express (DC, M, B)
   - Recognized by CD4+ T cells
   - Invariant chain (CLIP)

2. **Antigen Processing:**
   
   *Endogenous Pathway:*
   - Cytosolic proteins
   - Proteasome degradation
   - TAP transporter
   - ER loading on MHC I
   
   *Exogenous Pathway:*
   - Endocytosis/phagocytosis
   - Endosomal acidification
   - Lysosomal enzymes
   - MHC II loading

3. **B Cell Antigen Recognition:**
   - Native antigen
   - Conformational epitopes
   - No processing required
   - T-independent vs T-dependent

**T Cell Activation and Differentiation:**

1. **Three-Signal Model:**
   - Signal 1: TCR + peptide-MHC
   - Signal 2: CD28 + B7 (CD80/86)
   - Signal 3: Cytokines

2. **Co-stimulatory Molecules:**
   - Positive: CD28, ICOS, CD40L
   - Negative: CTLA-4, PD-1
   - Regulate activation threshold

3. **T Helper Subsets:**
   
   *Th1:*
   - IL-12, IFN-gamma driven
   - STAT4, T-bet
   - Macrophage activation
   - Intracellular pathogens
   
   *Th2:*
   - IL-4 driven
   - STAT6, GATA3
   - B cell help
   - Parasites, allergies
   
   *Th17:*
   - IL-6, TGF-beta, IL-23
   - STAT3, RORgt
   - Neutrophil recruitment
   - Extracellular bacteria, fungi
   
   *Tfh:*
   - IL-6, IL-21
   - BCL6
   - Germinal center help
   - Antibody responses

4. **Cytotoxic T Cell Mechanisms:**
   - Perforin pore formation
   - Granzyme entry
   - Caspase activation
   - Fas/FasL engagement
   - Target cell apoptosis

**B Cell Response - Detailed:**

1. **T-Dependent Response:**
   - BCR antigen binding
   - Internalization, processing
   - MHC II presentation
   - Tfh cell recognition
   - CD40-CD40L interaction
   - Germinal center entry

2. **Germinal Center Reaction:**
   - Somatic hypermutation
   - Affinity maturation
   - Selection of high-affinity B cells
   - Class-switch recombination
   - Memory and plasma cell generation

3. **T-Independent Responses:**
   - Type 1: Mitogens (LPS)
   - Type 2: Repetitive epitopes (polysaccharides)
   - IgM predominant
   - No memory
   - Marginal zone B cells

**Memory Formation:**

1. **Memory B Cells:**
   - Long-lived
   - High-affinity BCR
   - Class-switched
   - Rapid differentiation
   - CD27+, CD40+

2. **Memory T Cells:**
   
   *Central Memory (Tcm):*
   - CCR7+, CD62L+
   - Lymph node homing
   - High proliferative capacity
   
   *Effector Memory (Tem):*
   - CCR7-, CD62L-
   - Peripheral tissues
   - Rapid effector function
   
   *Tissue-Resident Memory (Trm):*
   - CD69+, CD103+
   - Non-circulating
   - Barrier sites
   - First line of defense`,
      keyTerms: [
        { term: 'epitope', definition: 'Specific part of antigen recognized by antibody or TCR' },
        { term: 'somatic hypermutation', definition: 'Point mutations in Ig genes to increase antibody affinity' },
        { term: 'affinity maturation', definition: 'Process selecting B cells with highest antigen binding affinity' },
        { term: 'germinal center', definition: 'Site of B cell proliferation and affinity maturation' },
        { term: 'Trm', definition: 'Tissue-resident memory T cell; non-migratory memory population' },
      ],
      clinicalNotes: 'Th1/Th2 imbalance implicated in immune pathology. Tfh dysregulation contributes to autoimmunity. Memory T cells persist for decades (yellow fever study). T-independent responses important for polysaccharide vaccines.',
    },
    4: {
      level: 4,
      summary: 'Adaptive immunity involves complex molecular mechanisms of antigen presentation, receptor diversification, signal transduction, and effector regulation that coordinate pathogen-specific responses with immune tolerance.',
      explanation: `The molecular mechanisms underlying adaptive immunity enable precise antigen recognition, appropriate activation thresholds, and regulated effector functions essential for protective immunity without autoimmunity.

**TCR Signaling:**

1. **Receptor Structure:**
   - Alpha/beta or gamma/delta chains
   - V, D, J, C regions
   - CD3 complex (signaling)
   - Zeta chains (ITAMs)

2. **Signal Transduction:**
   - Lck phosphorylation
   - ZAP-70 recruitment
   - LAT phosphorylation
   - PLC-gamma activation
   - IP3/DAG pathways
   - Calcium flux, Ras-MAPK

3. **Signal Integration:**
   - Immunological synapse
   - SMAC organization
   - Duration and strength
   - Anergy vs activation
   - Treg suppression

**BCR Signaling:**

1. **Receptor Structure:**
   - Membrane immunoglobulin
   - Ig-alpha/Ig-beta (CD79a/b)
   - ITAM motifs
   - Coreceptors (CD19, CD21)

2. **Signal Transduction:**
   - Lyn phosphorylation
   - Syk activation
   - BLNK recruitment
   - PLC-gamma2, PI3K
   - Calcium, MAPK pathways

3. **Co-receptor Complex:**
   - CD19 amplification
   - CD21 (complement receptor)
   - CD81 (tetraspanin)
   - Enhances signaling 100-1000x

**Germinal Center Biology:**

1. **B Cell Dynamics:**
   - Dark zone proliferation
   - Centroblast morphology
   - AID expression
   - Somatic hypermutation
   - Light zone selection

2. **Selection Mechanisms:**
   - Antigen capture from FDCs
   - BCR affinity testing
   - Tfh cell help
   - BCL2 upregulation
   - Low affinity = apoptosis

3. **AID Functions:**
   - Cytidine deamination
   - Somatic hypermutation
   - Class-switch recombination
   - Off-target effects (lymphoma)
   - Regulation by miRNAs

**MHC Biology:**

1. **Polymorphism:**
   - Thousands of alleles
   - Codominant expression
   - Population diversity
   - Pathogen pressure
   - Transplantation barriers

2. **Peptide Binding:**
   - Anchor residues
   - Binding motifs
   - MHC restriction
   - Allele-specific peptides

3. **Antigen Presentation:**
   - Cross-presentation
   - Autophagy pathway
   - ER-phagosome fusion
   - Dendritic cell specialization

**Tolerance Mechanisms:**

1. **Central Tolerance:**
   - Thymic negative selection
   - AIRE expression
   - Treg generation
   - B cell receptor editing

2. **Peripheral Tolerance:**
   - Anergy induction
   - CTLA-4 checkpoint
   - PD-1 inhibition
   - Peripheral deletion
   - Treg suppression

3. **Checkpoints in Therapy:**
   - CTLA-4 blockade (ipilimumab)
   - PD-1/PD-L1 blockade
   - Autoimmune side effects
   - Cancer immunotherapy`,
      keyTerms: [
        { term: 'ITAM', definition: 'Immunoreceptor Tyrosine-based Activation Motif; signaling sequence' },
        { term: 'LAT', definition: 'Linker for Activation of T cells; scaffold protein in TCR signaling' },
        { term: 'immunological synapse', definition: 'Organized interface between T cell and APC' },
        { term: 'AID', definition: 'Activation-Induced Cytidine Deaminase; enzyme for SHM and CSR' },
        { term: 'cross-presentation', definition: 'Presentation of exogenous antigen on MHC I to CD8+ T cells' },
      ],
      clinicalNotes: 'Checkpoint inhibitors revolutionized cancer therapy. AID off-target mutations cause B cell lymphomas. CD19 CAR-T shows efficacy in B cell malignancies. Cross-presentation crucial for anti-tumor immunity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary adaptive immunity research integrates systems immunology, structural biology, and therapeutic innovation to understand immune networks and develop precision interventions for infection, cancer, and immune-mediated diseases.',
      explanation: `Modern immunology leverages advanced technologies and integrative approaches to understand immune system complexity and translate knowledge into clinical applications.

**Systems Immunology:**

1. **Repertoire Analysis:**
   - High-throughput sequencing
   - BCR/TCR diversity
   - Clonal tracking
   - Vaccine response analysis
   - Minimal residual disease

2. **Single-Cell Technologies:**
   - scRNA-seq (transcriptomics)
   - CITE-seq (protein + RNA)
   - TCR/BCR sequencing
   - Spatial transcriptomics
   - Cellular atlas construction

3. **Computational Approaches:**
   - Machine learning
   - Network analysis
   - Predictive modeling
   - Vaccine design algorithms
   - Drug target prediction

**Structural Immunology:**

1. **Cryo-EM Applications:**
   - TCR-pMHC structures
   - BCR complexes
   - Co-receptor interactions
   - Therapeutic antibody design

2. **Antibody Engineering:**
   - Humanization
   - Affinity maturation
   - Bispecific antibodies
   - Antibody-drug conjugates
   - Fc engineering

**Therapeutic Innovations:**

1. **Monoclonal Antibodies:**
   - Tumor targeting (rituximab, trastuzumab)
   - Cytokine blockade
   - Checkpoint blockade
   - Infectious disease (COVID-19)
   - Long-acting formulations

2. **CAR-T Cell Therapy:**
   
   *Design Evolution:*
   - scFv targeting domain
   - Costimulatory domains (CD28, 4-1BB)
   - CAR generations
   - Armored CARs
   - Logic-gated CARs
   
   *Applications:*
   - B cell malignancies
   - Multiple myeloma
   - Solid tumors (challenges)
   - Autoimmune disease (emerging)

3. **Bispecific T Cell Engagers:**
   - Blinatumomab (CD19-CD3)
   - Tebentafusp (uveal melanoma)
   - Advantages over CAR-T
   - Off-the-shelf
   - Cytokine release management

4. **TCR Therapies:**
   - TCR-T cells
   - Neoantigen targeting
   - TCR engineering
   - pMHC affinity enhancement

**Vaccinology:**

1. **mRNA Vaccines:**
   - COVID-19 success
   - Rapid development
   - Cancer vaccines
   - Infectious diseases
   - Self-amplifying RNA

2. **Novel Platforms:**
   - Viral vectors
   - Nanoparticles
   - Protein nanoparticles
   - VLPs
   - DNA vaccines

3. **Structure-Based Design:**
   - Prefusion-stabilized proteins
   - Immunogen design
   - Broadly neutralizing Abs
   - Universal vaccines

**Precision Immunology:**

1. **Biomarkers:**
   - Predictive signatures
   - Response monitoring
   - Adverse event prediction
   - Personalized vaccination

2. **Endotypes:**
   - Disease stratification
   - Therapeutic tailoring
   - Asthma, sepsis
   - Autoimmune diseases

3. **Microbiome Integration:**
   - Vaccine response modulation
   - Immune development
   - Therapeutic targeting
   - Fecal transplantation

**Clinical Challenges:**

1. **Cytokine Release Syndrome:**
   - CAR-T toxicity
   - Grading systems
   - Tocilizumab, steroids
   - Prevention strategies

2. **Immune-Related Adverse Events:**
   - Checkpoint inhibitor toxicity
   - Management algorithms
   - Steroid-refractory
   - TNF inhibitors

3. **Resistance Mechanisms:**
   - Antigen loss
   - T cell exhaustion
   - Immunosuppressive milieu
   - Combination strategies`,
      keyTerms: [
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing for transcriptomic analysis' },
        { term: 'CITE-seq', definition: 'Cellular Indexing of Transcriptomes and Epitopes; protein and RNA profiling' },
        { term: 'armored CAR', definition: 'CAR-T cell engineered with additional features like cytokine secretion' },
        { term: 'BiTE', definition: 'Bispecific T cell Engager; antibody linking T cell to target cell' },
        { term: 'VLP', definition: 'Virus-Like Particle; vaccine platform without genetic material' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- CD4 T cells recognize MHC II; CD8 T cells recognize MHC I
- Three signals for T cell activation: TCR (1), costimulation (2), cytokines (3)
- CTLA-4 blockade: Ipilimumab; PD-1 blockade: Pembrolizumab, nivolumab
- CAR-T toxicities: CRS, ICANS; managed with tocilizumab, steroids
- Somatic hypermutation occurs in germinal centers; requires AID
- Class switching: Change Fc region; keeps variable region
- Th1: IFN-gamma, IL-2, TNF-beta; cellular immunity
- Th2: IL-4, IL-5, IL-10; humoral immunity, allergies
- Th17: IL-17; neutrophil recruitment, autoimmunity`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['physiology', 'immunology'],
    keywords: ['adaptive immunity', 'B cells', 'T cells', 'antibodies', 'memory'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adaptiveImmunityContent;
