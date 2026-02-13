import { EducationalContent } from '../../types';

export const innateImmunityContent: EducationalContent = {
  id: 'physiology-innate-immunity',
  type: 'system',
  name: 'Innate Immunity',
  alternateNames: ['Inborn immunity', 'Non-specific immunity', 'Natural immunity'],

  levels: {
    1: {
      level: 1,
      summary: 'Innate immunity is the body\'s first line of defense against germs, providing immediate protection without needing to learn about specific threats.',
      explanation: `Your body has built-in defenses that start working immediately when germs enter. This is called innate immunity. It does not need to learn - it is always ready to protect you.

**Physical Barriers:**

1. **Skin**
   - Tough outer layer
   - Keeps germs out
   - Oils and sweat kill some germs

2. **Mucous Membranes**
   - Line nose, mouth, lungs, gut
   - Trap germs in sticky mucus
   - Cilia sweep germs away

3. **Other Barriers**
   - Stomach acid kills germs
   - Tears wash away germs
   - Ear wax traps germs

**Cell Defenses:**

1. **Phagocytes**
   - Cells that eat germs
   - Neutrophils and macrophages
   - Patrol the body

2. **Natural Killer Cells**
   - Kill infected cells
   - Look for signs of trouble

**Quick Response:**
- Works within minutes to hours
- Same response to all germs
- First line of defense
- Alerts adaptive immunity if needed`,
      keyTerms: [
        { term: 'innate immunity', definition: 'The body\'s built-in, immediate defense system against infection' },
        { term: 'phagocyte', definition: 'A cell that engulfs and destroys invaders' },
        { term: 'mucous membrane', definition: 'Moist lining of body passages that trap germs' },
        { term: 'natural killer cell', definition: 'Immune cell that kills infected or cancerous cells' },
      ],
      analogies: [
        'Innate immunity is like a building\'s security system - doors, locks, and alarms that work automatically without needing to identify specific intruders.',
        'Think of it as the castle walls and moat - the first line of defense that keeps most enemies out.',
      ],
      examples: [
        'When you get a cut, neutrophils rush to the area within minutes to eat any bacteria that entered.',
        'Stomach acid kills most germs that you accidentally swallow with your food.',
      ],
    },
    2: {
      level: 2,
      summary: 'Innate immunity provides immediate, non-specific defense through physical barriers, phagocytic cells, inflammation, and soluble mediators that recognize conserved pathogen patterns.',
      explanation: `The innate immune system provides the first line of defense against infection, responding rapidly through evolutionarily conserved mechanisms that recognize common microbial features.

**Physical and Chemical Barriers:**

1. **Integumentary System:**
   - Stratum corneum (keratinized epithelium)
   - Sebum and antimicrobial peptides
   - Normal skin microbiota
   - Rapid epithelial turnover

2. **Mucosal Surfaces:**
   - Mucus trapping
   - Ciliary escalator
   - Secretory IgA (interface with adaptive)
   - Antimicrobial peptides (defensins)

3. **Chemical Defenses:**
   - Gastric acid (pH 1-3)
   - Lysozyme in tears, saliva
   - Fatty acids on skin
   - Complement proteins

**Cellular Components:**

1. **Phagocytes:**
   - Neutrophils (PMNs): 50-70% WBCs
   - Monocytes/macrophages
   - Dendritic cells
   - Recognition, engulfment, killing

2. **Granulocytes:**
   - Eosinophils: Anti-parasitic
   - Basophils: Allergic responses
   - Mast cells: Tissue-resident, inflammation

3. **Innate Lymphoid Cells:**
   - NK cells: Cytotoxicity
   - ILC1, ILC2, ILC3: Cytokine production
   - Mirror Th1, Th2, Th17 functions

**Pattern Recognition:**

1. **Pattern Recognition Receptors (PRRs):**
   - Recognize PAMPs (pathogen patterns)
   - TLRs, NLRs, RLRs, CLRs
   - Germline-encoded
   - Non-clonal distribution

2. **Common PAMPs:**
   - LPS (bacteria)
   - Lipoteichoic acid (Gram+)
   - Peptidoglycan
   - Flagellin
   - Viral nucleic acids
   - Fungal glucans

**Inflammatory Response:**

1. **Cardinal Signs:**
   - Rubor (redness)
   - Calor (heat)
   - Tumor (swelling)
   - Dolor (pain)
   - Functio laesa (loss of function)

2. **Acute Phase:**
   - Vasodilation
   - Increased permeability
   - Cellular infiltration
   - Systemic response (fever, cytokines)`,
      keyTerms: [
        { term: 'PAMP', definition: 'Pathogen-Associated Molecular Pattern; molecular structure common to microbes' },
        { term: 'PRR', definition: 'Pattern Recognition Receptor; innate immune receptor recognizing PAMPs' },
        { term: 'phagocytosis', definition: 'Process of engulfing and destroying particles' },
        { term: 'cytokine', definition: 'Signaling protein mediating immune cell communication' },
        { term: 'defensin', definition: 'Antimicrobial peptide found in mucosal surfaces and phagocytes' },
      ],
      analogies: [
        'PRRs are like sensors that recognize common features shared by all invaders, like recognizing that all enemy ships have a certain flag.',
        'Inflammation is like calling the fire department - redness and heat are the sirens and flashing lights alerting everyone to the problem.',
      ],
    },
    3: {
      level: 3,
      summary: 'Innate immunity integrates physical barriers, cellular defense mechanisms, pattern recognition systems, and inflammatory cascades to provide immediate protection and initiate adaptive immune responses.',
      explanation: `The innate immune system functions through complex networks of cellular and molecular mechanisms that recognize danger, recruit effector cells, and coordinate protective responses.

**Pattern Recognition Receptor Families:**

1. **Toll-Like Receptors (TLRs):**
   
   *Cell Surface:*
   - TLR4: LPS (Gram- bacteria)
   - TLR5: Flagellin
   - TLR1/2, TLR2/6: Lipopeptides
   
   *Endosomal:*
   - TLR3: dsRNA (viruses)
   - TLR7/8: ssRNA (viruses)
   - TLR9: CpG DNA (bacteria, viruses)
   
   *Signaling:*
   - MyD88-dependent pathway (most TLRs)
   - TRIF-dependent pathway (TLR3, TLR4)
   - NF-kB activation
   - Type I interferon induction

2. **NOD-Like Receptors (NLRs):**
   - NOD1/NOD2: Intracellular bacteria
   - NLRP3: Inflammasome activation
   - Cryopyrin (NLRP3) mutations
   - Caspase-1 activation
   - IL-1beta, IL-18 processing

3. **RIG-I-Like Receptors (RLRs):**
   - RIG-I: Short dsRNA, 5\'ppp RNA
   - MDA5: Long dsRNA
   - LGP2: Regulation
   - MAVS signaling
   - Type I interferon production

4. **C-Type Lectin Receptors (CLRs):**
   - Dectin-1: Beta-glucans (fungi)
   - Dectin-2: Fungal mannans
   - Mincle: TDM (mycobacteria)
   - Syk kinase signaling

**Phagocytosis Mechanisms:**

1. **Recognition:**
   - PRR-PAMP binding
   - Opsonin receptors (FcR, CR)
   - Scavenger receptors
   - Mannose receptors

2. **Engulfment:**
   - Actin polymerization
   - Phagosome formation
   - Membrane zipper mechanism
   - Pseudopod extension

3. **Killing:**
   
   *Oxygen-Dependent:*
   - Respiratory burst
   - NADPH oxidase complex
   - Superoxide, hydrogen peroxide
   - Hypochlorous acid (MPO)
   - Nitric oxide (iNOS)
   
   *Oxygen-Independent:*
   - Acidic pH (3.5-4.5)
   - Lysosomal enzymes
   - Defensins
   - Lactoferrin

4. **Processing:**
   - Phagolysosome fusion
   - Antigen presentation
   - Cross-presentation
   - Cytokine production

**Complement System:**

1. **Pathways:**
   - Classical (antibody-initiated)
   - Lectin (MBL binding)
   - Alternative (spontaneous C3 hydrolysis)

2. **Functions:**
   - Opsonization (C3b)
   - Inflammation (C3a, C5a)
   - Cytolysis (MAC)
   - Clearance (immune complexes)

**Inflammation Mediators:**

1. **Vasoactive:**
   - Histamine (mast cells, basophils)
   - Bradykinin
   - Prostaglandins
   - Leukotrienes

2. **Chemotactic:**
   - C5a
   - LTB4
   - CXCL8 (IL-8)
   - MCP-1

3. **Cytokines:**
   - IL-1, IL-6, TNF-alpha (acute phase)
   - Type I IFNs (antiviral)
   - IL-12, IL-18 (NK/Th1 activation)`,
      keyTerms: [
        { term: 'inflammasome', definition: 'Cytosolic protein complex activating caspase-1 for IL-1beta processing' },
        { term: 'respiratory burst', definition: 'Rapid release of reactive oxygen species by phagocytes' },
        { term: 'NADPH oxidase', definition: 'Enzyme complex generating superoxide in phagocytes' },
        { term: 'opsonization', definition: 'Coating of particles to enhance phagocytosis' },
        { term: 'MAC', definition: 'Membrane Attack Complex; terminal complement component causing lysis' },
      ],
      clinicalNotes: 'Chronic granulomatous disease results from NADPH oxidase defects. TLR signaling mutations cause susceptibility to specific pathogens. Inflammasomopathies present with periodic fever syndromes.',
    },
    4: {
      level: 4,
      summary: 'Innate immunity encompasses sophisticated cellular and molecular networks including trained immunity, specialized effector functions, and regulatory mechanisms that balance defense with tissue protection.',
      explanation: `Advances in immunology have revealed the complexity of innate immune responses, including memory-like features, tissue-specific adaptations, and intricate regulatory mechanisms.

**Trained Immunity:**

1. **Concept:**
   - Innate immune memory
   - Enhanced secondary responses
   - Epigenetic modifications
   - Metabolic reprogramming
   - Non-specific protection

2. **Inducers:**
   - Beta-glucan (fungi)
   - BCG vaccine
   - Oxidized LDL
   - Certain infections

3. **Mechanisms:**
   - H3K4me3 at cytokine genes
   - Aerobic glycolysis shift
   - Glutaminolysis
   - Cholesterol synthesis pathway

4. **Clinical Relevance:**
   - Heterologous vaccine effects
   - BCG protection against infections
   - Atherosclerosis
   - Potential therapeutic targeting

**Cellular Specialization:**

1. **Macrophage Polarization:**
   
   *M1 (Classical):*
   - IFN-gamma, LPS induced
   - Pro-inflammatory
   - ROS, NO production
   - Anti-bacterial
   
   *M2 (Alternative):*
   - IL-4, IL-13 induced
   - Anti-inflammatory
   - Tissue repair
   - Parasite response
   
   *Plasticity:*
   - Spectrum not binary
   - Tissue-specific phenotypes
   - Tumor-associated (TAMs)

2. **Neutrophil Heterogeneity:**
   - N1 (anti-tumor)
   - N2 (pro-tumor)
   - Low-density neutrophils
   - NET formation
   - Granulopoiesis regulation

3. **Dendritic Cell Subsets:**
   - cDC1: Cross-presentation
   - cDC2: CD4+ T cell activation
   - pDC: Type I IFN production
   - MoDC: Inflammatory
   - Tissue-specific functions

**Tissue-Resident Immunity:**

1. **Tissue-Resident Macrophages:**
   - Yolk sac origin (some)
   - Self-maintaining
   - Tissue-specific functions
   - Kupffer cells, microglia, alveolar macrophages

2. **ILC Subsets:**
   - ILC1: T-bet+, IFN-gamma
   - ILC2: GATA3+, IL-5, IL-13
   - ILC3: RORgt+, IL-17, IL-22
   - NK cells (cytotoxic ILC1)
   - Tissue-specific roles

3. **NKT Cells:**
   - CD1d-restricted
   - Lipid antigen recognition
   - Rapid cytokine production
   - Bridge innate/adaptive

**Regulatory Mechanisms:**

1. **Resolution of Inflammation:**
   - Lipoxins, resolvins, protectins
   - Clearance of apoptotic cells
   - TGF-beta, IL-10
   - Tissue repair initiation

2. **Tolerance Mechanisms:**
   - Endotoxin tolerance
   - Cross-tolerance
   - Negative feedback loops
   - SOCS proteins

3. **Microbiome Interactions:**
   - Commensal training
   - Short-chain fatty acids
   - Tryptophan metabolites
   - Immune homeostasis`,
      keyTerms: [
        { term: 'trained immunity', definition: 'Long-term functional reprogramming of innate immune cells after stimulation' },
        { term: 'H3K4me3', definition: 'Histone H3 lysine 4 trimethylation; activating epigenetic mark' },
        { term: 'TAM', definition: 'Tumor-Associated Macrophage; often M2-like, promotes tumor growth' },
        { term: 'NET', definition: 'Neutrophil Extracellular Trap; DNA web trapping pathogens' },
        { term: 'resolvin', definition: 'Pro-resolving lipid mediator derived from omega-3 fatty acids' },
      ],
      clinicalNotes: 'Trained immunity may explain BCG vaccine heterologous protection. NETosis contributes to autoimmune diseases (SLE) and thrombosis. TAMs are therapeutic targets in cancer. Resolution phase active process, not just passive.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of innate immunity encompasses sophisticated regulatory networks, metabolic programming, and systems-level coordination essential for host defense, with translational implications for infection, cancer, and inflammatory diseases.',
      explanation: `Modern innate immunology integrates multi-omics approaches, systems biology, and clinical translation to understand and modulate immune responses for therapeutic benefit.

**Systems Immunology Approaches:**

1. **Multi-Omics Integration:**
   - Genomics: PRR polymorphisms
   - Transcriptomics: Response signatures
   - Proteomics: Cytokine networks
   - Metabolomics: Immune metabolism
   - Single-cell technologies

2. **Computational Modeling:**
   - Network analysis
   - Predictive modeling
   - Drug target identification
   - Vaccine design

**Metabolic Regulation:**

1. **Immunometabolism:**
   - Warburg effect in activation
   - OXPHOS in memory
   - Amino acid metabolism
   - Lipid mediators
   - Mitochondrial dynamics

2. **Metabolic Checkpoints:**
   - mTORC1 signaling
   - AMPK activation
   - Sirtuins
   - HIF-1alpha
   - Therapeutic targets

3. **Tissue Metabolism:**
   - Tumor microenvironment
   - Hypoxia
   - Nutrient competition
   - Acidosis

**Therapeutic Applications:**

1. **PRR Agonists:**
   - TLR agonists as adjuvants
   - Cancer immunotherapy
   - CpG oligonucleotides
   - Imiquimod (TLR7)

2. **PRR Antagonists:**
   - TLR4 antagonists (sepsis)
   - NLRP3 inhibitors
   - Canakinumab (IL-1beta)
   - Autoinflammatory diseases

3. **Complement Therapeutics:**
   - Eculizumab (C5)
   - C3 inhibitors
   - Paroxysmal nocturnal hemoglobinuria
   - Atypical HUS
   - Myasthenia gravis

4. **Innate Cell Therapies:**
   - CAR-macrophages
   - NK cell therapies
   - CIK cells
   - Allogeneic advantages

**Clinical Scenarios:**

1. **Sepsis:**
   - Cytokine storm
   - Immunoparalysis
   - Endotoxin tolerance
   - Immunostimulatory approaches
   - Precision medicine

2. **Cancer Immunotherapy:**
   - STING agonists
   - TLR agonists
   - Oncolytic viruses
   - Innate checkpoints
   - Cold vs hot tumors

3. **Autoinflammatory Diseases:**
   - Inflammasomopathies
   - IL-1 blockade
   - IL-18 blockade
   - Colchicine (FMF)
   - Targeted therapies

**Emerging Areas:**

1. **Neuro-Immune Interactions:**
   - Vagus nerve stimulation
   - Neuro-immune reflex
   - Cytokine effects on brain
   - Sickness behavior

2. **Immune-Aging (Immunosenescence):**
   - Innate immune changes
   - Inflammaging
   - Trained immunity aging
   - Vaccine responses

3. **Sex Differences:**
   - X chromosome PRRs
   - Hormonal effects
   - Sex-biased diseases
   - Therapeutic implications

**Future Directions:**

1. **Precision Innate Immunology:**
   - Personalized adjuvants
   - Biomarker-guided therapy
   - Endotype stratification
   - Predictive signatures

2. **Synthetic Immunology:**
   - Engineered receptors
   - Synthetic cytokines
   - Programmable immunity
   - Circuit design`,
      keyTerms: [
        { term: 'immunometabolism', definition: 'Study of metabolic pathways regulating immune cell function' },
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation associated with aging' },
        { term: 'STING', definition: 'Stimulator of Interferon Genes; cytosolic DNA sensor pathway' },
        { term: 'cold tumor', definition: 'Tumor with limited immune infiltration; poor immunotherapy response' },
        { term: 'CIK cell', definition: 'Cytokine-Induced Killer cell; NK-like T cell for cancer therapy' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- CGD: NADPH oxidase defect, catalase+ organisms (Staph, Burkholderia, Serratia, Nocardia, Aspergillus)
- TLR4 recognizes LPS; MyD88 adapter for most TLRs except TLR3
- Inflammasome: NLRP3, ASC, caspase-1 -> IL-1beta, IL-18; cryopyrin-associated periodic syndromes
- Complement: C3 central; C3 convertase cleaves C3; MAC C5b-9
- Properdin stabilizes alternative pathway C3 convertase
- C1 inhibitor deficiency: Hereditary angioedema (bradykinin-mediated)
- C5 deficiency: Neisserial susceptibility
- Anakinra: IL-1 receptor antagonist for autoinflammatory diseases`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['physiology', 'immunology', 'pathology'],
    keywords: ['innate immunity', 'phagocytes', 'inflammation', 'PAMPs', 'PRRs'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default innateImmunityContent;
