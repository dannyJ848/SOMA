import { EducationalContent } from '../../types';

export const autoimmunityMechanismsContent: EducationalContent = {
  id: 'pathology-autoimmunity-mechanisms',
  type: 'concept',
  name: 'Autoimmunity Mechanisms',
  alternateNames: ['Autoimmune pathogenesis', 'Loss of tolerance', 'Self-reactive pathology'],

  levels: {
    1: {
      level: 1,
      summary: 'Autoimmunity happens when the immune system makes a mistake and attacks the body\'s own healthy cells instead of germs.',
      explanation: `Normally, your immune system knows the difference between your own body and harmful invaders like germs. But sometimes it gets confused and attacks healthy parts of your body. This is called autoimmunity.

**Why the Immune System Makes Mistakes:**

1. **Confusion**
   - Germs sometimes look like body cells
   - Immune system attacks both

2. **Broken Control System**
   - Body has systems to prevent self-attack
   - Sometimes these systems fail

3. **Family History**
   - Autoimmunity can run in families
   - Genes play a role

**What Happens:**
- Immune cells attack healthy tissues
- Causes inflammation
- Can damage organs
- May cause pain and other symptoms

**Examples:**
- Rheumatoid arthritis: Attacks joints
- Type 1 diabetes: Attacks pancreas
- Lupus: Can attack many organs`,
      keyTerms: [
        { term: 'autoimmunity', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
        { term: 'tolerance', definition: 'The immune system\'s ability to not attack the body\'s own cells' },
        { term: 'inflammation', definition: 'Redness, swelling, and pain from the immune response' },
      ],
      analogies: [
        'Autoimmunity is like a guard dog that cannot tell the difference between family members and intruders, so it barks at everyone.',
        'Think of it as a security system that alarms when you walk into your own house - it cannot recognize the owner.',
      ],
      examples: [
        'In celiac disease, eating wheat triggers the immune system to attack the small intestine.',
        'In multiple sclerosis, the immune system attacks the protective covering of nerves.',
      ],
    },
    2: {
      level: 2,
      summary: 'Autoimmune diseases result from breakdown of immune tolerance mechanisms, leading to generation of autoantibodies and autoreactive T cells that damage tissues through various immunological pathways.',
      explanation: `Autoimmunity represents a failure of self-tolerance, the mechanisms that normally prevent immune responses against the body\'s own antigens. This leads to tissue damage through antibody-mediated and cell-mediated mechanisms.

**Types of Tolerance:**

1. **Central Tolerance:**
   - Occurs in primary lymphoid organs
   - Deletion of self-reactive lymphocytes
   - Thymus: T cell negative selection
   - Bone marrow: B cell tolerance
   - AIRE gene in thymus

2. **Peripheral Tolerance:**
   - Mechanisms outside primary organs
   - Anergy (functional inactivation)
   - Suppression by regulatory T cells
   - Ignorance (no antigen encounter)
   - Activation-induced cell death

**Mechanisms of Tolerance Breakdown:**

1. **Molecular Mimicry:**
   - Pathogen antigens resemble self-antigens
   - Cross-reactive immune response
   - Examples: Streptococcus and rheumatic fever

2. **Epitope Spreading:**
   - Immune response diversifies
   - New epitopes recognized
   - Self-perpetuating cycle

3. **Bystander Activation:**
   - Inflammation activates APCs
   - Autoreactive cells activated
   - Local tissue damage

4. **Cryptic Epitopes:**
   - Hidden antigens exposed
   - Trauma, infection, inflammation
   - Previously unseen by immune system

**Effector Mechanisms:**

1. **Autoantibody-Mediated:**
   - Type II hypersensitivity
   - Type III hypersensitivity
   - Receptor modulation
   - Immune complex deposition

2. **T Cell-Mediated:**
   - CD4+ T helper cells
   - CD8+ cytotoxic T cells
   - Macrophage activation
   - Cytokine-mediated damage`,
      keyTerms: [
        { term: 'central tolerance', definition: 'Deletion of self-reactive lymphocytes during development in primary lymphoid organs' },
        { term: 'peripheral tolerance', definition: 'Mechanisms that inactivate or eliminate self-reactive lymphocytes in peripheral tissues' },
        { term: 'molecular mimicry', definition: 'Structural similarity between pathogen and self-antigens causing cross-reactive immunity' },
        { term: 'epitope spreading', definition: 'Expansion of immune response to additional epitopes on the same or different antigens' },
        { term: 'anergy', definition: 'Functional inactivation of lymphocytes due to incomplete activation signals' },
      ],
      analogies: [
        'Central tolerance is like quality control at the factory - defective products are removed before shipping. Peripheral tolerance is like customer service handling issues after delivery.',
        'Molecular mimicry is like two people with similar names - the mail system might send letters to the wrong person.',
      ],
    },
    3: {
      level: 3,
      summary: 'Autoimmune pathogenesis involves genetic susceptibility, environmental triggers, and dysregulated immunological mechanisms disrupting both central and peripheral tolerance checkpoints.',
      explanation: `The pathogenesis of autoimmune diseases involves complex interactions between genetic factors that predispose to immune dysregulation and environmental triggers that initiate and perpetuate autoreactive responses.

**Genetic Factors:**

1. **HLA Associations:**
   - Strongest genetic risk factor
   - HLA-DRB1*04:01 in rheumatoid arthritis
   - HLA-DQ2/DQ8 in celiac disease
   - HLA-B27 in ankylosing spondylitis
   - Mechanism: Altered peptide presentation

2. **Non-HLA Genes:**
   - PTPN22: TCR signaling
   - CTLA4: Co-stimulatory pathway
   - IL23R: Th17 differentiation
   - TNFAIP3: NF-kB regulation
   - Multiple susceptibility loci

**Environmental Triggers:**

1. **Infections:**
   - Molecular mimicry (Coxsackie/T1D)
   - Bystander activation
   - Superantigens
   - Persistent infection

2. **Non-infectious Triggers:**
   - UV light (lupus)
   - Smoking (RA, Graves disease)
   - Silica (scleroderma, lupus)
   - Diet (gluten in celiac)
   - Medications (procainamide)

**Tolerance Mechanisms - Detailed:**

1. **Central Tolerance - Thymus:**
   - Negative selection of T cells
   - High affinity for self-MHC/self-peptide = deletion
   - AIRE expression in mTECs
   - Promiscuous gene expression
   - Presentation of tissue-restricted antigens
   - Foxp3+ Treg development

2. **Central Tolerance - Bone Marrow:**
   - B cell receptor editing
   - Deletion of autoreactive B cells
   - Receptor light chain rearrangement
   - Clonal deletion if still autoreactive

3. **Peripheral Tolerance Mechanisms:**
   
   *Anergy:*
   - Signal 1 without Signal 2
   - T cell inactivation
   - CTLA-4 upregulation
   - Requires costimulation for activation
   
   *Regulatory T Cells:*
   - Foxp3+ CD4+ T cells
   - Suppress autoreactive responses
   - IL-10, TGF-beta production
   - Cell-contact dependent suppression
   
   *Activation-Induced Cell Death:*
   - Fas/FasL pathway
   - AICD limits responses
   - ALPS when defective
   - Prevents excessive activation

**Immunological Mechanisms of Damage:**

1. **Antibody-Mediated:**
   - Direct cell lysis (complement)
   - Opsonization/phagocytosis
   - Antibody-dependent cytotoxicity
   - Receptor agonism/antagonism
   - Immune complex deposition

2. **Cell-Mediated:**
   - Th1: Macrophage activation
   - Th17: Neutrophil recruitment
   - CD8+ CTL: Direct killing
   - Cytokine storm
   - Granuloma formation`,
      keyTerms: [
        { term: 'ALPS', definition: 'Autoimmune Lymphoproliferative Syndrome; Fas pathway defect causing autoimmunity' },
        { term: 'Treg', definition: 'Regulatory T cell; suppresses immune responses to prevent autoimmunity' },
        { term: 'receptor editing', definition: 'Process changing B cell receptor specificity to avoid self-reactivity' },
        { term: 'costimulation', definition: 'Second signal required for full T cell activation; prevents anergy' },
        { term: 'AICD', definition: 'Activation-Induced Cell Death; apoptotic mechanism limiting immune responses' },
      ],
      clinicalNotes: 'Genetic risk for autoimmunity is polygenic. HLA associations are strongest but non-HLA genes contribute significantly. Environmental factors often provide the trigger in genetically susceptible individuals.',
    },
    4: {
      level: 4,
      summary: 'Autoimmune pathogenesis involves multifactorial etiology with genetic susceptibility loci, epigenetic modifications, environmental triggers, and dysregulated innate and adaptive immune responses leading to tissue-specific or systemic pathology.',
      explanation: `Modern understanding of autoimmune disease pathogenesis integrates genetics, epigenetics, microbiome influences, and detailed molecular mechanisms of immune dysregulation.

**Genetic Architecture:**

1. **Genome-Wide Association Studies:**
   - Hundreds of risk loci identified
   - Immune genes enriched
   - Modest individual effects (OR 1.1-1.3)
   - Polygenic inheritance pattern
   - Gene-environment interactions

2. **Key Pathways:**
   - T cell activation (PTPN22, CTLA4, CD28)
   - Cytokine signaling (IL2RA, IL23R, STAT4)
   - Innate immunity (IRF5, TNFAIP3, NOD2)
   - B cell function (BLK, BANK1)
   - Type I interferon pathway (multiple loci in SLE)

3. **Rare Variants:**
   - Mendelian forms of autoimmunity
   - AIRE (APS-1)
   - FOXP3 (IPEX)
   - LRBA, CTLA4 haploinsufficiency
   - FAS (ALPS)

**Epigenetic Mechanisms:**

1. **DNA Methylation:**
   - Global hypomethylation in SLE
   - Gene-specific changes
   - Drug-induced lupus
   - Environmentally responsive

2. **Histone Modifications:**
   - Altered acetylation patterns
   - Methylation changes
   - Chromatin accessibility
   - Transcriptional regulation

3. **MicroRNAs:**
   - Post-transcriptional regulation
   - miR-155 in inflammation
   - miR-146a negative regulation
   - Dysregulated in autoimmunity

**Innate Immune Dysregulation:**

1. **Type I Interferon Pathway:**
   - SLE: Interferon signature
   - Plasmacytoid DC activation
   - ISG expression
   - Therapeutic target

2. **Inflammasome Activation:**
   - NLRP3 in multiple diseases
   - IL-1beta, IL-18 production
   - Autoinflammatory overlap
   - Cryopyrinopathies

3. **Neutrophil Extracellular Traps:**
   - NETosis in SLE
   - Modified autoantigens
   - IFN-alpha induction
   - Vascular damage

**Adaptive Immune Dysregulation:**

1. **B Cell Abnormalities:**
   - Autoreactive B cell survival
   - Defective checkpoints
   - T-independent activation
   - BAFF overexpression
   - Long-lived plasma cells

2. **T Cell Abnormalities:**
   - Treg dysfunction
   - Th17/Treg imbalance
   - Tfh dysregulation
   - T cell exhaustion
   - Clonal expansions

**Tissue-Specific Mechanisms:**

1. **Target Antigen Availability:**
   - Sequestered antigens released
   - Modified self-proteins
   - Apoptotic/necrotic cell death
   - Molecular mimicry

2. **Tissue-Specific Factors:**
   - Local cytokine environment
   - Tissue-resident memory cells
   - Organ-specific APCs
   - Microbiome interactions`,
      keyTerms: [
        { term: 'interferon signature', definition: 'Pattern of upregulated interferon-stimulated genes in peripheral blood' },
        { term: 'NETosis', definition: 'Release of neutrophil extracellular traps containing DNA and proteins' },
        { term: 'epigenetics', definition: 'Heritable changes in gene expression not involving DNA sequence changes' },
        { term: 'haploinsufficiency', definition: 'When one functional gene copy is insufficient for normal function' },
        { term: 'inflammasome', definition: 'Cytosolic protein complex activating IL-1beta and IL-18' },
      ],
      clinicalNotes: 'Monogenic autoimmune disorders can inform polygenic disease mechanisms. Epigenetic changes explain some discordance in twin studies. Microbiome alterations associated with multiple autoimmune diseases.',
    },
    5: {
      level: 5,
      summary: 'Autoimmune disease pathogenesis involves complex gene-environment interactions, with emerging understanding of immune checkpoint pathways, metabolic regulation, and novel therapeutic targets addressing specific molecular mechanisms.',
      explanation: `Cutting-edge research in autoimmunity reveals sophisticated regulatory networks and identifies new therapeutic opportunities targeting specific pathogenic mechanisms.

**Immune Checkpoints and Autoimmunity:**

1. **CTLA-4 Pathway:**
   - Critical negative regulator
   - Haploinsufficiency causes autoimmunity
   - LRBA deficiency (CTLA-4 recycling)
   - Checkpoint inhibitor-induced autoimmunity
   - Abatacept therapeutic targeting

2. **PD-1/PD-L1 Pathway:**
   - Peripheral tolerance maintenance
   - Checkpoint blockade toxicity
   - Loss-of-function mutations
   - Type 1 diabetes associations

3. **Novel Checkpoints:**
   - LAG-3
   - TIM-3
   - TIGIT
   - VISTA
   - Therapeutic modulation potential

**Metabolic Regulation:**

1. **Immunometabolism:**
   - Aerobic glycolysis (Warburg effect)
   - Mitochondrial dysfunction in SLE
   - NAD+ metabolism
   - Metformin effects

2. **Metabolic Checkpoints:**
   - mTOR regulation
   - AMPK activation
   - Sirtuins
   - Metabolic reprogramming

3. **Obesity and Autoimmunity:**
   - Adipokine effects
   - Metaflammation
   - Leptin signaling
   - Metabolic syndrome associations

**Microbiome Interactions:**

1. **Gut Microbiome:**
   - Dysbiosis in IBD, RA, MS
   - Short-chain fatty acids
   - Regulatory T cell induction
   - Segmented filamentous bacteria

2. **Molecular Mimicry - Microbial:**
   - Prevotella copri (RA)
   - Gut bacterial antigens
   - Cross-reactive T cells
   - Proteus (RA)

3. **Therapeutic Modulation:**
   - Fecal microbiota transplantation
   - Probiotics
   - Prebiotics
   - Antibiotic effects

**Emerging Therapeutic Targets:**

1. **JAK Inhibitors:**
   - Tofacitinib, baricitinib
   - Multiple cytokine blockade
   - Oral administration
   - Broad applications

2. **B Cell Targeting:**
   - BAFF inhibition (belimumab)
   - B cell depletion (rituximab)
   - Plasma cell targeting
   - B cell tolerance restoration

3. **CAR-T for Autoimmunity:**
   - CD19 CAR-T in SLE trials
   - Deep B cell depletion
   - Potential for durable remission
   - Risk-benefit considerations

4. **Regulatory Cell Therapies:**
   - Ex vivo expanded Tregs
   - Antigen-specific suppression
   - Phase I/II trials
   - Personalized approaches

**Precision Medicine:**

1. **Biomarker-Guided Therapy:**
   - IFN signature for anifrolumab
   - Anti-CCP for RA treatment
   - Type 2 inflammation markers
   - Predictive algorithms

2. **Risk Stratification:**
   - Genetic risk scores
   - Autoantibody profiling
   - Preclinical disease prediction
   - Prevention trials (T1D)

**Challenges and Future Directions:**

1. **Heterogeneity:**
   - Disease subsets
   - Treatment response variation
   - Personalized approaches needed

2. **Combination Therapies:**
   - Multiple pathway targeting
   - Sequential approaches
   - Biomarker-guided combinations

3. **Cure vs Control:**
   - Immune tolerance restoration
   - Long-term remission
   - Treatment withdrawal strategies`,
      keyTerms: [
        { term: 'immunometabolism', definition: 'Metabolic pathways regulating immune cell function' },
        { term: 'dysbiosis', definition: 'Imbalanced microbial community associated with disease' },
        { term: 'checkpoint inhibitor', definition: 'Therapy blocking immune checkpoints; can induce autoimmunity' },
        { term: 'metaflammation', definition: 'Metabolically triggered low-grade inflammation' },
        { term: 'biomarker-guided therapy', definition: 'Treatment selection based on molecular biomarkers' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Checkpoint inhibitor toxicities: Colitis, pneumonitis, hypophysitis, thyroiditis, myocarditis
- CTLA-4 deficiency: Autoimmunity + immunodeficiency paradox
- IPEX: FOXP3 mutation, neonatal diabetes, enteropathy, eczema
- APS-1: AIRE mutation, mucocutaneous candidiasis, hypoparathyroidism, Addison disease
- ALPS: Fas mutations, lymphadenopathy, splenomegaly, autoimmunity, elevated DNT cells
- PTPN22: Autoimmune association across multiple diseases`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['pathology', 'immunology', 'pathogenesis'],
    keywords: ['autoimmunity', 'tolerance', 'autoimmune disease', 'pathogenesis'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default autoimmunityMechanismsContent;
