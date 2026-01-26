import { EducationalContent } from '../../types';

export const immuneSystemOverviewContent: EducationalContent = {
  id: 'allergy-immunology-immune-system-overview',
  type: 'concept',
  name: 'Immune System Overview',
  alternateNames: ['Immunity', 'Host Defense System', 'Immune Defense'],

  levels: {
    1: {
      level: 1,
      summary: 'Your immune system is your body\'s defense army that protects you from germs and keeps you healthy.',
      explanation: `Your immune system is like having your own personal army inside your body. This army works 24 hours a day to protect you from germs like bacteria, viruses, and other things that could make you sick.

**Two Types of Protection:**

1. **Instant Protection (Innate Immunity)**
   - Your skin acts like a wall keeping germs out
   - Mucus in your nose traps germs before they get inside
   - Special cells called "germ eaters" attack invaders right away
   - This protection works immediately but isn't specific to any one germ

2. **Learned Protection (Adaptive Immunity)**
   - Your body learns to recognize specific germs
   - Makes special proteins called antibodies that tag germs for destruction
   - Remembers germs it has seen before (this is why vaccines work!)
   - Takes longer to start but is very precise

**Key Players:**

- **White Blood Cells**: The soldiers of your immune army
- **Antibodies**: Special proteins that stick to germs and mark them for destruction
- **Lymph Nodes**: Training camps and meeting places for immune cells

**When Things Go Wrong:**

Sometimes the immune system makes mistakes:
- **Allergies**: The immune system attacks harmless things like pollen or peanuts
- **Getting sick**: When germs are stronger or faster than your immune response
- **Autoimmune diseases**: When the immune system accidentally attacks your own body`,
      keyTerms: [
        { term: 'immune system', definition: 'Your body\'s defense system against germs and disease' },
        { term: 'antibodies', definition: 'Special proteins that recognize and help destroy germs' },
        { term: 'white blood cells', definition: 'Cells in your blood that fight infections' },
        { term: 'germs', definition: 'Tiny living things like bacteria and viruses that can make you sick' },
      ],
      analogies: [
        'Your immune system is like a castle\'s defenses - walls (skin), guards (white blood cells), and wanted posters (antibodies) that help identify intruders.',
        'Think of your immune system as a security system with cameras (antibodies) that recognize bad guys and alarms (inflammation) that call for backup.',
      ],
      examples: [
        'When you get a cold, your immune system fights the virus - that\'s why you feel better after a few days.',
        'Vaccines teach your immune system to recognize a germ before you actually get sick from it.',
      ],
    },
    2: {
      level: 2,
      summary: 'The immune system comprises innate and adaptive branches that work together to detect, respond to, and remember pathogens through cellular and molecular mechanisms.',
      explanation: `The immune system is a complex network of cells, tissues, and organs that protect the body from pathogens (disease-causing organisms) and abnormal cells like cancer.

**Two Main Branches:**

**1. Innate Immunity (Non-specific)**
- Present from birth
- Responds within minutes to hours
- No memory of previous encounters
- Components include:
  - Physical barriers (skin, mucous membranes)
  - Chemical barriers (stomach acid, lysozyme in tears)
  - Cellular defenses (neutrophils, macrophages, natural killer cells)
  - Inflammatory response
  - Complement system (proteins that help kill pathogens)

**2. Adaptive Immunity (Specific)**
- Develops throughout life
- Takes days to weeks for first response
- Has immunological memory
- Two types:
  - **Humoral immunity**: B cells make antibodies
  - **Cell-mediated immunity**: T cells directly attack infected cells

**Key Immune Cells:**

| Cell Type | Main Function |
|-----------|---------------|
| Neutrophils | First responders, eat bacteria |
| Macrophages | Eat pathogens, present antigens |
| Dendritic cells | Present antigens to T cells |
| B cells | Produce antibodies |
| T helper cells (CD4+) | Coordinate immune responses |
| Cytotoxic T cells (CD8+) | Kill infected cells |
| Natural killer cells | Kill virus-infected and tumor cells |

**Antibodies (Immunoglobulins):**
- IgG: Most common, crosses placenta
- IgM: First antibody made in response
- IgA: Found in mucous membranes and breast milk
- IgE: Involved in allergies and parasite defense
- IgD: B cell receptor

**Immune Organs:**
- Primary: Bone marrow (B cell development), thymus (T cell development)
- Secondary: Lymph nodes, spleen, tonsils, Peyer's patches`,
      keyTerms: [
        { term: 'innate immunity', definition: 'The non-specific immune defense present from birth that responds immediately to pathogens', pronunciation: 'ih-NAYT' },
        { term: 'adaptive immunity', definition: 'Specific immunity that develops after exposure to pathogens and provides memory', pronunciation: 'uh-DAP-tiv' },
        { term: 'antibody', definition: 'Protein produced by B cells that recognizes and binds to specific antigens', pronunciation: 'AN-tih-bod-ee' },
        { term: 'antigen', definition: 'Any substance that triggers an immune response, usually a protein from a pathogen', pronunciation: 'AN-tih-jen' },
        { term: 'macrophage', definition: 'Large white blood cell that engulfs and digests pathogens and dead cells', pronunciation: 'MAK-roh-fayj' },
      ],
      analogies: [
        'Innate immunity is like having generic security guards, while adaptive immunity is like having detectives who learn criminal faces and remember them forever.',
        'B cells are like factories making guided missiles (antibodies), while T cells are like special forces that directly engage the enemy.',
      ],
    },
    3: {
      level: 3,
      summary: 'The immune system integrates pattern recognition, antigen-specific responses, and immunological memory through coordinated interactions between innate immune cells and lymphocytes, regulated by cytokines and cell surface receptors.',
      explanation: `The immune system operates through highly coordinated interactions between innate and adaptive components, with antigen-presenting cells bridging both branches.

**Innate Immune Recognition:**

**Pattern Recognition Receptors (PRRs):**
- Toll-like receptors (TLRs): Recognize microbial patterns
  - TLR4: LPS (gram-negative bacteria)
  - TLR3: dsRNA (viruses)
  - TLR9: CpG DNA (bacteria)
- NOD-like receptors (NLRs): Intracellular sensing
- RIG-I-like receptors (RLRs): Viral RNA detection
- C-type lectin receptors: Fungal and bacterial carbohydrates

**Pathogen-Associated Molecular Patterns (PAMPs):**
- Conserved microbial structures (LPS, peptidoglycan, flagellin)
- Not found in host cells
- Essential for pathogen survival

**Damage-Associated Molecular Patterns (DAMPs):**
- Released from damaged/dying cells
- ATP, HMGB1, uric acid
- Trigger sterile inflammation

**Adaptive Immune Response:**

**Antigen Presentation:**
- MHC Class I: Present endogenous antigens to CD8+ T cells
  - Found on all nucleated cells
  - Presents peptides from intracellular proteins
- MHC Class II: Present exogenous antigens to CD4+ T cells
  - Found on APCs (dendritic cells, macrophages, B cells)
  - Presents peptides from phagocytosed material

**T Cell Activation (Signal Model):**
1. Signal 1: TCR recognition of peptide-MHC
2. Signal 2: Costimulation (CD28-B7 interaction)
3. Signal 3: Cytokines directing differentiation

**T Helper Cell Subsets:**
- Th1: IFN-γ, cell-mediated immunity (intracellular pathogens)
- Th2: IL-4, IL-5, IL-13, humoral immunity (parasites, allergies)
- Th17: IL-17, mucosal immunity (fungi, extracellular bacteria)
- Treg: IL-10, TGF-β, immune suppression
- Tfh: IL-21, help B cells in germinal centers

**B Cell Activation and Antibody Production:**
- T-dependent: Requires T cell help, class switching, memory
- T-independent: Rapid IgM, limited memory
- Germinal center reaction: Somatic hypermutation, affinity maturation

**Complement System:**
- Classical pathway: Antibody-dependent (C1q)
- Alternative pathway: Spontaneous activation on pathogen surfaces
- Lectin pathway: Mannose-binding lectin
- Terminal pathway: Membrane attack complex (MAC)

**Cytokine Networks:**
- Interferons: Antiviral (Type I) and immune activation (Type II)
- Interleukins: Communication between leukocytes
- Chemokines: Direct cell migration
- TNF family: Inflammation and cell death`,
      keyTerms: [
        { term: 'pattern recognition receptor', definition: 'Innate immune receptors that recognize conserved molecular patterns on pathogens (PAMPs) or damaged cells (DAMPs)' },
        { term: 'MHC', definition: 'Major Histocompatibility Complex; proteins that present antigens to T cells', pronunciation: 'M-H-C' },
        { term: 'costimulation', definition: 'Secondary signals required for full T cell activation, preventing inappropriate immune responses' },
        { term: 'germinal center', definition: 'Specialized structure in lymphoid tissues where B cells undergo affinity maturation and class switching' },
        { term: 'cytokine', definition: 'Signaling proteins that mediate and regulate immune responses', pronunciation: 'SY-toh-kine' },
        { term: 'PAMP', definition: 'Pathogen-associated molecular pattern; conserved microbial structures recognized by innate immunity' },
      ],
      clinicalNotes: 'Defects in pattern recognition can cause immunodeficiency (TLR pathway mutations) or autoinflammation (NOD2 mutations in Crohn\'s disease). Understanding MHC restriction is essential for interpreting HLA associations with autoimmune diseases.',
    },
    4: {
      level: 4,
      summary: 'The immune system achieves host defense through layered recognition systems, with innate immunity providing rapid responses and priming adaptive immunity, which generates clonally selected, antigen-specific receptors capable of memory responses and fine-tuned regulation.',
      explanation: `The immune system represents an integrated network where innate recognition shapes adaptive responses, and effector mechanisms coordinate to eliminate diverse pathogen types while maintaining tolerance to self.

**Innate Immunity: First Line of Defense**

**Physical and Chemical Barriers:**
- Epithelial tight junctions (claudins, occludins)
- Antimicrobial peptides (defensins, cathelicidins)
- Mucins and mucociliary clearance
- Acidic pH (stomach, vagina, skin)
- Complement on mucosal surfaces

**Cellular Innate Immunity:**

*Phagocytes:*
- Neutrophils: Short-lived, NETs, oxidative burst
- Macrophages: M1 (inflammatory) vs M2 (repair)
- Dendritic cells: Conventional (cDC1, cDC2), plasmacytoid (pDC)

*Innate Lymphoid Cells (ILCs):*
- Group 1 ILCs (NK, ILC1): IFN-γ, cytotoxicity
- Group 2 ILCs (ILC2): IL-5, IL-13, type 2 responses
- Group 3 ILCs (ILC3): IL-22, IL-17, barrier immunity

*Inflammasome Activation:*
- NLRP3 inflammasome: Senses diverse danger signals
- Caspase-1 activation → IL-1β, IL-18 maturation
- Pyroptosis: Inflammatory cell death (gasdermin D)

**Adaptive Immunity: Clonal Selection**

**Antigen Receptor Generation:**
- V(D)J recombination: RAG1/RAG2 mediated
- Junctional diversity: P and N nucleotide additions
- ~10^11 possible TCR/BCR specificities

**T Cell Development (Thymic Education):**
- Positive selection: MHC recognition (cortex)
- Negative selection: Self-tolerance (medulla)
- AIRE expression: Peripheral self-antigen presentation

**B Cell Development:**
- Pro-B → Pre-B → Immature B (bone marrow)
- Receptor editing: Secondary light chain rearrangement
- Transitional B cells → Mature (follicular, marginal zone)

**Germinal Center Dynamics:**

*Dark Zone:*
- Centroblasts proliferate rapidly
- AID-mediated somatic hypermutation
- Class switch recombination

*Light Zone:*
- Centrocytes compete for antigen on FDCs
- T follicular helper cell selection
- Affinity-based survival or apoptosis

**Effector Mechanisms:**

*Antibody Functions:*
- Neutralization
- Opsonization (Fc receptors)
- Complement activation (classical)
- ADCC (NK cells, FcγRIIIA)
- ADCP (macrophages)

*CTL Killing:*
- Perforin/granzyme pathway
- FasL-Fas pathway
- Cytokine production (IFN-γ, TNF-α)

**Immunological Memory:**

*Memory T Cells:*
- Central memory (TCM): Lymph nodes, IL-7/IL-15 dependent
- Effector memory (TEM): Tissues, rapid effector function
- Tissue-resident memory (TRM): Non-circulating, poised

*Memory B Cells:*
- Class-switched, somatically mutated
- Rapid recall response
- Long-lived plasma cells in bone marrow

**Immune Regulation:**

*Regulatory T Cells:*
- Natural Tregs (thymic) vs induced Tregs (peripheral)
- FOXP3 expression
- Mechanisms: IL-10, TGF-β, CTLA-4, IL-2 consumption

*Checkpoints:*
- CTLA-4: Competes with CD28 for B7
- PD-1/PD-L1: Peripheral tolerance, T cell exhaustion
- LAG-3, TIM-3, TIGIT: Additional inhibitory receptors`,
      keyTerms: [
        { term: 'V(D)J recombination', definition: 'Process of somatic DNA rearrangement generating antigen receptor diversity in developing lymphocytes' },
        { term: 'inflammasome', definition: 'Multiprotein complex that activates inflammatory caspases, leading to IL-1β/IL-18 maturation and pyroptosis' },
        { term: 'ILC', definition: 'Innate lymphoid cell; tissue-resident lymphocytes that produce cytokines but lack antigen-specific receptors' },
        { term: 'ADCC', definition: 'Antibody-dependent cellular cytotoxicity; NK cell killing of antibody-coated target cells' },
        { term: 'tissue-resident memory', definition: 'Non-circulating memory T cells that provide rapid local immunity in barrier tissues' },
        { term: 'AID', definition: 'Activation-induced cytidine deaminase; enzyme mediating somatic hypermutation and class switch recombination in B cells' },
      ],
      clinicalNotes: 'Understanding immune checkpoints is essential for cancer immunotherapy (anti-PD-1, anti-CTLA-4). ILC2 dysregulation contributes to allergic disease. Inflammasome mutations cause autoinflammatory syndromes (CAPS). AID deficiency causes hyper-IgM syndrome type 2.',
    },
    5: {
      level: 5,
      summary: 'The immune system functions as a dynamically regulated network integrating spatial, temporal, and contextual cues to generate proportionate responses while maintaining self-tolerance, with dysfunction underlying allergic, autoimmune, immunodeficiency, and malignant diseases.',
      explanation: `Comprehensive understanding of immune function requires integration of molecular mechanisms with clinical manifestations, forming the foundation for diagnosis and targeted therapeutics in allergy and immunology.

**Systems Integration of Immunity:**

**Mucosal Immunity:**

*Gut-Associated Lymphoid Tissue (GALT):*
- M cells sample luminal antigens
- Peyer's patches: B cell follicles, germinal centers
- Lamina propria: Effector cells (IgA-secreting plasma cells)
- Intraepithelial lymphocytes: CD8αα+ T cells

*Oral Tolerance:*
- Regulatory T cell induction
- TGF-β-rich environment
- Failure → food allergies
- Exploited in oral immunotherapy

*Microbiome-Immunity Axis:*
- Commensal bacteria shape immune development
- Segmented filamentous bacteria → Th17
- Clostridiales → Treg induction
- Dysbiosis associated with allergies, autoimmunity

**Neuroimmune Interactions:**

*Hypothalamic-Pituitary-Adrenal Axis:*
- Cortisol: Immunosuppressive
- Stress → immune dysregulation

*Sympathetic Nervous System:*
- Norepinephrine modulates inflammation
- Vagal anti-inflammatory pathway (cholinergic)

**Immunometabolism:**

*Metabolic Programs:*
- Effector cells: Glycolysis (Warburg effect)
- Memory cells: Oxidative phosphorylation
- Tregs: Fatty acid oxidation

*mTOR and AMPK:*
- mTOR: Promotes effector differentiation
- AMPK: Promotes memory and Treg formation

**Clinical Applications:**

**Immunodeficiency Classification:**

*Primary Immunodeficiency (PIDs):*
- Combined (SCID): T and B cell defects
- Predominantly antibody: CVID, XLA
- Phagocyte disorders: CGD, LAD
- Complement deficiencies
- Innate immune defects

*Secondary Immunodeficiency:*
- HIV/AIDS
- Iatrogenic (chemotherapy, immunosuppression)
- Malnutrition
- Hematologic malignancies

**Allergic Disease Mechanisms:**

*Type 2 Immunity:*
- Epithelial-derived cytokines: TSLP, IL-25, IL-33
- ILC2 activation
- Th2 differentiation
- B cell class switching to IgE
- Mast cell sensitization

*Allergic Effector Phase:*
- IgE crosslinking on mast cells
- Degranulation: Histamine, tryptase, PGD2
- Late phase: Eosinophil recruitment

**Autoimmune Mechanisms:**

*Central Tolerance Failure:*
- AIRE mutations (APS-1)
- Defective negative selection

*Peripheral Tolerance Failure:*
- Treg dysfunction (IPEX - FOXP3 mutations)
- Checkpoint deficiency
- Molecular mimicry
- Epitope spreading

**Therapeutic Modulation:**

*Biologics by Target:*
- Anti-IgE: Omalizumab
- Anti-IL-4Rα: Dupilumab
- Anti-IL-5: Mepolizumab, benralizumab
- Anti-TSLP: Tezepelumab
- Anti-TNF: Infliximab, adalimumab
- Anti-IL-6R: Tocilizumab
- Anti-CD20: Rituximab
- Anti-IL-17: Secukinumab

*Immunotherapy Approaches:*
- Allergen-specific immunotherapy: Tolerance induction
- Checkpoint inhibitors: Anti-PD-1, anti-CTLA-4
- CAR-T cells: Engineered antitumor immunity
- Tolerance protocols: Mixed chimerism, Treg therapy

**Laboratory Evaluation:**

*Lymphocyte Phenotyping:*
- CD3, CD4, CD8, CD19, CD16/56
- Naive vs memory (CD45RA/RO)
- Recent thymic emigrants (CD31+)

*Functional Assays:*
- Lymphocyte proliferation (mitogen, antigen)
- Cytotoxicity assays
- Oxidative burst (CGD screening)
- Complement activity (CH50, AH50)

*Serology:*
- Immunoglobulin levels (IgG, IgA, IgM, IgE)
- Specific antibody responses (vaccine titers)
- Autoantibodies (ANA, anti-dsDNA, ANCA)
- Allergen-specific IgE`,
      keyTerms: [
        { term: 'oral tolerance', definition: 'Antigen-specific immune unresponsiveness induced by oral administration, preventing food allergies and maintaining gut homeostasis' },
        { term: 'immunometabolism', definition: 'The study of metabolic programs that regulate immune cell differentiation and function' },
        { term: 'epitope spreading', definition: 'Expansion of immune response to additional epitopes on the same or different self-antigens, propagating autoimmunity' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; epithelial-derived cytokine that promotes type 2 immunity', pronunciation: 'T-S-L-P' },
        { term: 'CVID', definition: 'Common variable immunodeficiency; heterogeneous primary antibody deficiency with low IgG and poor vaccine responses' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- SCID workup: Low/absent T cells, absent thymic shadow, lymphopenia in newborn
- CVID diagnosis: Low IgG + (low IgA and/or low IgM) + poor vaccine responses
- Complement deficiencies: C3 → encapsulated bacteria; terminal → Neisseria
- Anti-IgE (omalizumab): Binds free IgE, reduces FcεRI on mast cells
- Food allergy vs intolerance: IgE-mediated vs non-immunologic
- Remember: Total IgE not diagnostic for allergies (low specificity)
- Allergic bronchopulmonary aspergillosis (ABPA): Elevated total IgE + Aspergillus-specific IgE/IgG`,
    },
  },

  media: [
    {
      id: 'immune-system-overview-diagram',
      type: 'diagram',
      filename: 'immune-system-overview.svg',
      title: 'Overview of the Immune System',
      description: 'Diagram showing innate and adaptive immune components and their interactions',
    },
    {
      id: 'lymphocyte-development',
      type: 'diagram',
      filename: 'lymphocyte-development.svg',
      title: 'Lymphocyte Development',
      description: 'B cell and T cell development from hematopoietic stem cells',
    },
  ],
  citations: [
    {
      id: 'janeway-immunobiology',
      type: 'textbook',
      title: 'Janeway\'s Immunobiology',
      authors: ['Murphy K', 'Weaver C'],
      source: 'Garland Science',
      chapter: '1-3',
    },
    {
      id: 'abbas-cellular-molecular-immunology',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
    },
  ],
  crossReferences: [
    { targetId: 'structure-thymus', targetType: 'structure', relationship: 'related', label: 'Thymus' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
    { targetId: 'structure-spleen', targetType: 'structure', relationship: 'related', label: 'Spleen' },
    { targetId: 'allergy-immunology-hypersensitivity-type-i', targetType: 'concept', relationship: 'see-also', label: 'Type I Hypersensitivity' },
  ],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['immunology', 'allergy', 'physiology'],
    keywords: ['immune system', 'innate immunity', 'adaptive immunity', 'T cells', 'B cells', 'antibodies', 'cytokines'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immuneSystemOverviewContent;
