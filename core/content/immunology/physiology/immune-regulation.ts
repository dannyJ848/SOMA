import { EducationalContent } from '../../types';

export const immuneRegulationContent: EducationalContent = {
  id: 'physiology-immune-regulation',
  type: 'process',
  name: 'Immune Regulation',
  alternateNames: ['Immune tolerance', 'Immune homeostasis', 'Immunoregulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Immune regulation is how the body controls its immune system to fight germs without attacking its own healthy cells or causing too much inflammation.',
      explanation: `Your immune system needs to be controlled so it does not cause problems. Immune regulation keeps the system balanced - strong enough to fight infections but not so strong that it hurts your own body.

**Why Regulation Matters:**

1. **Prevents Autoimmunity**
   - Stops immune system from attacking body
   - Removes cells that might cause trouble
   - Teaches cells to recognize self

2. **Controls Inflammation**
   - Stops inflammation when infection cleared
   - Prevents damage to healthy tissues
   - Allows healing to begin

3. **Prevents Overreactions**
   - Stops excessive immune responses
   - Prevents allergies from getting too severe
   - Controls cytokine production

**How Regulation Works:**

1. **Special Cells**
   - Regulatory T cells (Tregs)
   - They tell other cells to calm down
   - Like peacekeepers

2. **Checkpoints**
   - Molecules that stop immune responses
   - Like brakes on a car
   - Important for safety

3. **Removal of Old Cells**
   - Old immune cells removed
   - Makes room for new cells
   - Prevents buildup`,
      keyTerms: [
        { term: 'immune regulation', definition: 'The control mechanisms that balance immune responses' },
        { term: 'autoimmunity', definition: 'When the immune system attacks the body\'s own tissues' },
        { term: 'inflammation', definition: 'The body\'s protective response that can cause damage if uncontrolled' },
        { term: 'Treg', definition: 'Regulatory T cell that suppresses immune responses' },
        { term: 'checkpoint', definition: 'A control point that can stop or slow immune responses' },
      ],
      analogies: [
        'Immune regulation is like having both an accelerator and brakes in a car - you need both to drive safely.',
        'Think of it as referees in a sports game - they keep the game fair and prevent it from getting out of hand.',
      ],
      examples: [
        'Regulatory T cells prevent autoimmune diseases by stopping other T cells from attacking the body.',
        'When an infection is cleared, regulatory mechanisms turn off the immune response to prevent tissue damage.',
      ],
    },
    2: {
      level: 2,
      summary: 'Immune regulation maintains tolerance to self-antigens and controls response magnitude through specialized cell populations, inhibitory molecules, and feedback mechanisms that prevent autoimmunity and immunopathology.',
      explanation: `The immune system employs multiple regulatory mechanisms to maintain homeostasis, prevent self-reactivity, and terminate responses after pathogen clearance.

**Central Tolerance:**

1. **Thymic Selection:**
   - Positive selection: MHC restriction
   - Negative selection: Remove self-reactive T cells
   - AIRE gene expression
   - Treg generation (5-10% of thymocytes)

2. **B Cell Tolerance:**
   - Receptor editing in bone marrow
   - Clonal deletion
   - Anergy induction
   - Peripheral checkpoints

**Peripheral Tolerance:**

1. **Anergy:**
   - Signal 1 without Signal 2
   - Functional inactivation
   - IL-2 deficiency
   - Reversible

2. **Ignorance:**
   - No antigen encounter
   - Sequestered antigens
   - Low avidity interactions

3. **Deletion:**
   - Activation-induced cell death
   - Fas/FasL pathway
   - Caspase activation
   - AICD

**Regulatory Cell Populations:**

1. **Regulatory T Cells (Tregs):**
   - Foxp3+ CD4+ T cells
   - Natural (thymic-derived)
   - Induced (peripheral)
   - Contact-dependent suppression
   - IL-10, TGF-beta secretion

2. **Regulatory B Cells:**
   - IL-10 producing
   - Transitional B cells
   - Plasmablasts
   - Suppress autoimmunity

3. **Myeloid-Derived Suppressor Cells:**
   - Expand during inflammation
   - Arg-1, iNOS, ROS
   - Suppress T cells
   - Tumor-associated

**Inhibitory Receptors:**

1. **CTLA-4:**
   - CD28 homolog
   - Higher affinity for B7
   - Inhibits T cell activation
   - Treg constitutive expression

2. **PD-1:**
   - Exhaustion marker
   - PD-L1/PD-L2 ligands
   - ITIM motifs
   - Peripheral tolerance

3. **LAG-3:**
   - MHC II binding
   - T cell exhaustion
   - Treg function

4. **TIM-3:**
   - Galectin-9 ligand
   - Th1 regulation
   - Tumor immunity

**Anti-inflammatory Cytokines:**

1. **IL-10:**
   - Broad suppression
   - Macrophage inhibition
   - APC modulation
   - Critical for gut homeostasis

2. **TGF-beta:**
   - Treg development
   - iTreg induction
   - Tissue repair
   - Inhibits Th1, Th2

3. **IL-35:**
   - Treg-produced
   - EBI3 + p35
   - Suppresses proliferation`,
      keyTerms: [
        { term: 'central tolerance', definition: 'Deletion of self-reactive lymphocytes during development' },
        { term: 'peripheral tolerance', definition: 'Mechanisms suppressing self-reactive cells in periphery' },
        { term: 'AIRE', definition: 'Autoimmune Regulator; transcription factor for thymic negative selection' },
        { term: 'AICD', definition: 'Activation-Induced Cell Death; Fas-mediated apoptosis' },
        { term: 'Foxp3', definition: 'Transcription factor defining regulatory T cell lineage' },
      ],
      analogies: [
        'CTLA-4 is like having a stronger competitor for the same parking space - it blocks CD28 from getting the costimulatory signal it needs.',
        'Tregs are like the cleanup crew that arrives after a party to restore order and make sure everything returns to normal.',
      ],
    },
    3: {
      level: 3,
      summary: 'Immune regulation involves complex networks of cellular interactions, molecular checkpoints, and tissue-specific mechanisms that balance defense against pathogens with tolerance to self and commensal organisms.',
      explanation: `Effective immune regulation requires coordinated mechanisms operating at multiple levels to prevent inappropriate responses while maintaining protective immunity.

**Treg Biology:**

1. **Development:**
   - Natural Tregs: Thymic (Foxp3+)
   - Induced Tregs: Peripheral (iTregs)
   - Tr1: IL-10 producers
   - Th3: TGF-beta producers

2. **Mechanisms of Suppression:**
   
   *Cell-Contact Dependent:*
   - CTLA-4: B7 blockade
   - LAG-3: MHC II interaction
   - Granzyme/perforin
   - cAMP transfer
   
   *Cytokine-Mediated:*
   - IL-10 secretion
   - TGF-beta production
   - IL-35
   - Metabolic disruption
   
   *Cytokine Deprivation:*
   - High IL-2 consumption
   - CD25 (high affinity)
   - Starve effector T cells

3. **Treg Subsets:**
   - tTreg: Thymic
   - pTreg: Peripheral
   - Tissue-resident Tregs
   - Antigen-specific Tregs

**Immune Checkpoint Pathways:**

1. **CTLA-4 Pathway:**
   - Constitutive Treg expression
   - Upregulated on activated T cells
   - B7 competition with CD28
   - Trans-endocytosis of B7
   - Essential for tolerance

2. **PD-1 Pathway:**
   - Induced on activation
   - Peripheral tolerance
   - Chronic infection exhaustion
   - Tumor evasion
   - Therapeutic target

3. **Emerging Checkpoints:**
   - TIGIT
   - VISTA
   - BTLA
   - CD244
   - Therapeutic potential

**Tissue-Specific Regulation:**

1. **Gut Immune Regulation:**
   - Treg abundance
   - Commensal tolerance
   - IgA production
   - DC conditioning
   - Retinoic acid
   - TGF-beta

2. **Maternal-Fetal Interface:**
   - Treg expansion
   - HLA-G expression
   - IDO (tryptophan catabolism)
   - Fetal tolerance

3. **Tumor Microenvironment:**
   - Treg infiltration
   - MDSC accumulation
   - Checkpoint upregulation
   - Metabolic competition

**Resolution of Inflammation:**

1. **Pro-Resolving Mediators:**
   - Lipoxins (LXA4, LXB4)
   - Resolvins
   - Protectins
   - Maresins
   - Omega-3 derived

2. **Cellular Clearance:**
   - Efferocytosis
   - Apoptotic cell recognition
   - TGF-beta, IL-10
   - Anti-inflammatory

3. **Tissue Repair:**
   - Macrophage M2 polarization
   - Fibroblast activation
   - VEGF production
   - Matrix remodeling

**Microbiome Interactions:**

1. **Commensal Tolerance:**
   - Segmented filamentous bacteria
   - Th17 induction
   - IgA responses
   - DC modulation

2. **Metabolites:**
   - Short-chain fatty acids
   - Treg induction
   - HDAC inhibition
   - GPR signaling

3. **Dysbiosis:**
   - Loss of tolerance
   - Inflammation
   - Autoimmunity risk
   - Metabolic disease`,
      keyTerms: [
        { term: 'trans-endocytosis', definition: 'Process by which CTLA-4 removes B7 from APC surface' },
        { term: 'IDO', definition: 'Indoleamine 2,3-dioxygenase; enzyme catabolizing tryptophan for tolerance' },
        { term: 'efferocytosis', definition: 'Clearance of apoptotic cells by phagocytes' },
        { term: 'resolvin', definition: 'Pro-resolving lipid mediator derived from omega-3 fatty acids' },
        { term: 'SCFA', definition: 'Short-chain fatty acid; gut microbiome metabolite promoting Treg' },
      ],
      clinicalNotes: 'IPEX syndrome: FOXP3 mutation, severe autoimmunity. CTLA-4 haploinsufficiency: Autoimmunity + immunodeficiency. PD-1 deficiency: lupus-like autoimmunity. Fecal transplant restores gut tolerance.',
    },
    4: {
      level: 4,
      summary: 'Immune regulation integrates molecular signaling networks, epigenetic programming, and metabolic control to maintain tolerance, with therapeutic targeting of regulatory pathways transforming treatment of cancer and autoimmunity.',
      explanation: `Advanced understanding of immune regulation reveals the complexity of tolerance mechanisms and opportunities for therapeutic intervention in immune-mediated diseases.

**Molecular Mechanisms of Treg Function:**

1. **Foxp3 Regulation:**
   - Demethylation of TSDR
   - Acetylation stabilizes protein
   - IL-2/STAT5 signaling
   - TGF-beta/SMAD
   - NFAT/AP-1 cooperation

2. **Epigenetic Programming:**
   - CpG demethylation
   - Histone modifications
   - H3K4me3 (activation)
   - H3K27me3 (repression)
   - Ezh2 in Tregs

3. **Metabolic Adaptations:**
   - OXPHOS predominant
   - Lipid metabolism
   - Mitochondrial fitness
   - AMPK signaling
   - mTOR regulation

**Checkpoint Inhibitor Mechanisms:**

1. **CTLA-4 Blockade:**
   - Ipilimumab
   - Tremelimumab
   - Treg depletion (ADCC)
   - CD28 activation
   - Early effector phase

2. **PD-1/PD-L1 Blockade:**
   - Pembrolizumab, nivolumab
   - Atezolizumab, durvalumab
   - Reverse exhaustion
   - Restore effector function
   - Tumor-specific

3. **Resistance Mechanisms:**
   - Lack of PD-L1
   - Defective antigen presentation
   - Loss of IFN-gamma signaling
   - Alternative checkpoints
   - Treg recruitment

**Therapeutic Treg Approaches:**

1. **Treg Expansion:**
   - Low-dose IL-2
   - IL-2 muteins
   - Treg-selective expansion
   - Autoimmune therapy

2. **Treg Engineering:**
   - CAR-Tregs
   - Antigen-specific
   - Transplant tolerance
   - Autoimmunity
   - Suppressive function

3. **Treg Depletion:**
   - Anti-CCR4 (mogamulizumab)
   - Denileukin diftitox
   - Tumor Tregs
   - Combination therapy

**Specialized Regulatory Mechanisms:**

1. **Maternal-Fetal Tolerance:**
   - HLA-C recognition
   - KIR interactions
   - Treg expansion
   - IDO expression
   - HLA-G on trophoblast

2. **Germinal Center Regulation:**
   - Tfr (follicular Treg)
   - Bcl6+ Foxp3+
   - CXCR5+
   - Germinal center control
   - Autoantibody prevention

3. **Neuro-Immune Regulation:**
   - Vagus nerve
   - Cholinergic anti-inflammatory
   - Catecholamines
   - Glucocorticoids
   - Sickness behavior

**Disease-Specific Regulation:**

1. **Autoimmune Disease:**
   - Treg dysfunction
   - Effector cell resistance
   - Checkpoint defects
   - Cytokine imbalance
   - Therapeutic restoration

2. **Allergy:**
   - Th2 suppression
   - Treg induction
   - IT regulatory cells
   - Peptide immunotherapy
   - Desensitization

3. **Cancer:**
   - Treg accumulation
   - Checkpoint exploitation
   - Metabolic competition
   - Immunosuppressive milieu
   - Therapeutic targets`,
      keyTerms: [
        { term: 'TSDR', definition: 'Treg-Specific Demethylated Region; CpG island in FOXP3 gene' },
        { term: 'Tfr', definition: 'Follicular regulatory T cell; Treg subset regulating germinal centers' },
        { term: 'ADCC', definition: 'Antibody-Dependent Cellular Cytotoxicity; mechanism of Treg depletion' },
        { term: 'cholinergic anti-inflammatory', definition: 'Neural pathway suppressing macrophage cytokine production' },
        { term: 'IT', definition: 'Immunological Tolerance; antigen-specific suppression' },
      ],
      clinicalNotes: 'CTLA-4 blockade causes more immune-related adverse events than PD-1 blockade. Low-dose IL-2 trials in SLE, GVHD. CAR-Treg trials beginning for transplant tolerance. Tfr defects contribute to autoimmunity.',
    },
    5: {
      level: 5,
      summary: 'Immune regulation research integrates multi-omics approaches, synthetic biology, and systems-level analysis to understand tolerance networks and develop precision therapies for immune-mediated diseases.',
      explanation: `Contemporary immunology employs cutting-edge technologies and interdisciplinary approaches to unravel immune regulation and translate findings into clinical practice.

**Systems Approaches to Immune Regulation:**

1. **Multi-Omics Profiling:**
   - Genomics: Regulatory variants
   - Transcriptomics: Signatures
   - Epigenomics: Treg identity
   - Proteomics: Secreted factors
   - Metabolomics: Treg metabolism
   - Integration strategies

2. **Single-Cell Analysis:**
   - Treg heterogeneity
   - Clonal expansion
   - Activation states
   - TCR repertoire
   - Spatial organization

3. **Computational Immunology:**
   - Network modeling
   - Predictive algorithms
   - Drug target identification
   - Vaccine design
   - Digital twins

**Synthetic Immunology:**

1. **Engineered Regulatory Cells:**
   
   *CAR-Tregs:*
   - HLA-specific
   - Organ-specific targeting
   - Transplant tolerance
   - Autoimmunity
   - Safety switches
   
   *Synthetic Notch Receptors:*
   - AND-gate logic
   - Dual recognition
   - Enhanced specificity
   - Reduced off-target

2. **Protein Engineering:**
   - IL-2 muteins (Treg-selective)
   - TGF-beta traps
   - Checkpoint fusion proteins
   - Bispecifics
   - Therapeutic cytokines

3. **Gene Circuits:**
   - Synthetic promoters
   - Feedback control
   - State machines
   - Boolean logic
   - Programmable cells

**Precision Medicine Approaches:**

1. **Biomarker Development:**
   - Treg signatures
   - Checkpoint expression
   - Microbiome markers
   - Metabolic markers
   - Predictive models

2. **Patient Stratification:**
   - Endotypes
   - Immunotypes
   - Treatment response
   - Toxicity prediction
   - Personalized dosing

3. **Therapeutic Monitoring:**
   - Minimal residual disease
   - Treg tracking
   - Receptor occupancy
   - Pharmacodynamics
   - Adaptive protocols

**Emerging Therapeutic Modalities:**

1. **Microbiome Therapeutics:**
   - Defined consortia
   - Engineered bacteria
   - Postbiotics
   - Fecal transplant refinement
   - Personalized probiotics

2. **Nanomedicine:**
   - Nanoparticle delivery
   - Targeted cytokines
   - mRNA vaccines
   - Tolerogenic nanoparticles
   - Antigen-specific therapy

3. **In Situ Engineering:**
   - Injectable scaffolds
   - Localized tolerance
   - Organ-specific
   - Transplantation
   - Autoimmunity

**Clinical Translation Challenges:**

1. **Autoimmune Disease:**
   - Treg restoration
   - Antigen-specific therapy
   - Combination approaches
   - Long-term tolerance
   - Disease modification

2. **Transplantation:**
   - Operational tolerance
   - Biomarker discovery
   - Minimized immunosuppression
   - Chimerism
   - Treg therapy

3. **Cancer Immunotherapy:**
   - Overcoming resistance
   - Managing toxicity
   - Biomarker optimization
   - Combination strategies
   - Cost-effectiveness

**Future Directions:**

1. **Artificial Intelligence:**
   - Drug discovery
   - Repurposing
   - Trial design
   - Real-world data
   - Decision support

2. **Immune Engineering:**
   - In vivo reprogramming
   - Direct cell conversion
   - Regenerative immunology
   - Aging reversal
   - Synthetic organs

3. **Global Health:**
   - Accessible therapeutics
   - Heat-stable biologics
   - Oral tolerance
   - Cost-effective platforms
   - Implementation science`,
      keyTerms: [
        { term: 'endotype', definition: 'Disease subtype defined by distinct molecular mechanism' },
        { term: 'immunotype', definition: 'Immune-based classification of disease or patient' },
        { term: 'digital twin', definition: 'Computational model of patient for simulation and prediction' },
        { term: 'AND-gate', definition: 'Logic requiring two signals for activation; enhances specificity' },
        { term: 'postbiotic', definition: 'Non-viable bacterial products or metabolites with beneficial effects' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- IPEX: FOXP3 mutation, neonatal diabetes, enteropathy, eczema, autoimmunity
- ALPS: Fas defect, lymphadenopathy, splenomegaly, elevated DNT cells, autoimmunity
- APECED: AIRE mutation, mucocutaneous candidiasis, hypoparathyroidism, Addison disease
- CTLA-4 haploinsufficiency: Autoimmunity + immunodeficiency paradox
- Immune checkpoint inhibitors: CTLA-4 more toxicity than PD-1; colitis, pneumonitis, endocrine
- Low-dose IL-2: Expands Tregs, used in SLE, GVHD, hepatitis C vasculitis
- Treg therapy: Ex vivo expansion, antigen-specific, CAR-Tregs in trials
- Immune tolerance: Liver transplant most tolerant, kidney least tolerant`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['physiology', 'immunology', 'pathology'],
    keywords: ['immune regulation', 'tolerance', 'Tregs', 'checkpoint', 'homeostasis'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immuneRegulationContent;
