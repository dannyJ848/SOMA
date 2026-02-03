/**
 * Immunotherapy Principles Educational Content
 *
 * Comprehensive coverage of cancer immunotherapy including:
 * - Checkpoint inhibitors (PD-1, PD-L1, CTLA-4)
 * - CAR-T cell therapy
 * - Immune-related adverse events
 * - Biomarkers for response prediction
 */

import { EducationalContent } from '../../../types';

export const immunotherapyContent: EducationalContent = {
  id: 'oncology-immunotherapy',
  type: 'concept',
  name: 'Cancer Immunotherapy',
  alternateNames: ['Immuno-oncology', 'Immune checkpoint therapy', 'Cancer immunology'],

  levels: {
    1: {
      level: 1,
      summary: 'Immunotherapy helps your own immune system recognize and fight cancer cells.',
      explanation: `Your immune system normally protects you from infections and diseases. Sometimes it can also attack cancer cells, but cancer can hide from or turn off the immune system. Immunotherapy helps your immune system work better against cancer.

**How Cancer Hides from the Immune System:**
- Cancer cells can put up "stop signs" that tell immune cells to leave them alone
- Cancer cells can pretend to be normal cells
- Cancer can weaken immune cells so they cannot attack

**How Immunotherapy Works:**
- **Removes the "brakes"**: Some treatments take away the stop signs cancer uses to hide
- **Trains the immune system**: Some treatments teach immune cells to recognize cancer
- **Boosts immune cells**: Some treatments make more or stronger immune cells

**Types of Immunotherapy:**
- **Checkpoint inhibitors**: The most common type; removes the brakes on your immune system
- **CAR-T cell therapy**: Takes your own immune cells, trains them to fight cancer, and puts them back
- **Cancer vaccines**: Teach your immune system what cancer looks like
- **Cytokines**: Proteins that boost immune cell activity

**Common Side Effects:**
- Immunotherapy can make your immune system too active
- May attack normal tissues (skin rash, diarrhea, lung inflammation)
- Usually manageable with proper treatment
- Different from chemotherapy side effects

**The Good News:**
- Can work for many different cancers
- Some patients have long-lasting responses
- May work when other treatments have stopped working
- Research is finding new ways to make it work even better`,
      keyTerms: [
        { term: 'immunotherapy', definition: 'Treatment that uses your own immune system to fight cancer' },
        { term: 'immune system', definition: 'The body\'s defense against infections and diseases' },
        { term: 'checkpoint inhibitor', definition: 'Medicine that helps immune cells attack cancer by removing the "brakes"' },
        { term: 'CAR-T therapy', definition: 'Treatment where your own immune cells are trained to fight cancer' },
      ],
      analogies: [
        'Cancer puts up "do not disturb" signs. Immunotherapy takes down those signs so immune cells can find and attack the cancer.',
        'CAR-T therapy is like sending your immune cells to special forces training, then sending them back to fight cancer.',
        'Your immune system is like a security team. Immunotherapy helps them recognize intruders they were missing.',
      ],
      examples: [
        'A man with advanced lung cancer receives immunotherapy and his tumor shrinks significantly.',
        'A child with leukemia gets CAR-T therapy and achieves complete remission.',
      ],
    },
    2: {
      level: 2,
      summary: 'Immunotherapy works by releasing immune checkpoints, engineering immune cells, or stimulating anti-cancer immunity through various mechanisms.',
      explanation: `**The Immune System and Cancer:**

*How the Immune System Fights Cancer:*
1. T cells recognize cancer through abnormal proteins (antigens)
2. T cells become activated and multiply
3. T cells attack and kill cancer cells
4. Memory cells remain to prevent return

*How Cancer Escapes:*
- Expresses checkpoint proteins (PD-L1)
- Suppresses immune cells in the tumor environment
- Loses antigens so T cells cannot recognize it
- Creates physical barriers

**Checkpoint Inhibitors:**

*Key Checkpoints:*
- **PD-1/PD-L1**: When PD-L1 on cancer binds PD-1 on T cells, the T cell is "turned off"
- **CTLA-4**: Stops T cells from getting fully activated

*Common Drugs:*
- Anti-PD-1: Pembrolizumab (Keytruda), nivolumab (Opdivo)
- Anti-PD-L1: Atezolizumab (Tecentriq), durvalumab (Imfinzi)
- Anti-CTLA-4: Ipilimumab (Yervoy)

*Approved Uses:*
- Melanoma, lung cancer, kidney cancer
- Bladder cancer, head and neck cancer
- Hodgkin lymphoma, many others
- Some approved for any cancer with specific biomarkers

**CAR-T Cell Therapy:**

*The Process:*
1. Collect T cells from patient's blood
2. Genetically modify them to recognize cancer (add CAR)
3. Multiply the cells in a lab
4. Give them back to the patient

*Approved Products:*
- Tisagenlecleucel (Kymriah): ALL, lymphoma
- Axicabtagene ciloleucel (Yescarta): Lymphoma
- Others for multiple myeloma, lymphoma

**Biomarkers That Predict Response:**

*PD-L1 Expression:*
- Higher levels may mean better response
- Not perfect predictor
- Tested by pathology

*MSI-High/dMMR:*
- Many mutations from DNA repair problems
- Very responsive to checkpoint inhibitors
- Approved for any MSI-high cancer

*Tumor Mutational Burden (TMB):*
- More mutations = more targets for immune system
- High TMB predicts better response

**Side Effects (Immune-Related Adverse Events):**

*Can Affect Any Organ:*
- Skin: Rash, itching
- GI: Diarrhea, colitis
- Liver: Hepatitis (elevated enzymes)
- Lung: Pneumonitis (cough, shortness of breath)
- Endocrine: Thyroid problems, adrenal insufficiency
- Rare: Heart inflammation (myocarditis)

*Management:*
- Early recognition important
- Often treated with steroids
- May need to hold or stop immunotherapy`,
      keyTerms: [
        { term: 'PD-1', definition: 'Checkpoint protein on T cells; blocking it releases the immune brake' },
        { term: 'PD-L1', definition: 'Protein on cancer cells that binds PD-1 and turns off T cells' },
        { term: 'CTLA-4', definition: 'Checkpoint that prevents T cell activation; blocked by ipilimumab' },
        { term: 'CAR', definition: 'Chimeric antigen receptor; engineered receptor that helps T cells find cancer' },
        { term: 'tumor mutational burden', definition: 'Number of mutations in a tumor; more mutations may mean better immunotherapy response' },
      ],
      analogies: [
        'PD-1/PD-L1 interaction is like a handshake that puts T cells to sleep. Checkpoint inhibitors break up that handshake.',
        'CAR-T cells are like guided missiles - programmed to find and destroy specific cancer targets.',
      ],
    },
    3: {
      level: 3,
      summary: 'Immunotherapy mechanisms involve checkpoint blockade, adoptive cell transfer, and immune stimulation, with response dependent on tumor immunogenicity and microenvironment.',
      explanation: `**Checkpoint Inhibitor Biology:**

*PD-1/PD-L1 Pathway:*
- PD-1 expressed on activated T cells
- PD-L1 upregulated by tumors (and IFN-gamma)
- Engagement leads to T cell exhaustion
- Blockade reinvigorates tumor-specific T cells

*CTLA-4 Pathway:*
- Competes with CD28 for B7 ligands
- Expressed on regulatory T cells (Tregs)
- Blockade: Enhanced activation + Treg depletion
- Acts earlier in T cell activation than PD-1

*Combination Rationale:*
- CTLA-4 + PD-1 blockade: Non-overlapping mechanisms
- Synergistic but increased toxicity
- Ipilimumab + nivolumab: Melanoma, RCC, NSCLC, others

**CAR-T Cell Therapy Details:**

*CAR Structure:*
- Extracellular: Single-chain variable fragment (scFv) - antigen binding
- Transmembrane domain
- Intracellular: CD3-zeta + costimulatory domains (CD28 or 4-1BB)

*Generations:*
- First: CD3-zeta only (poor persistence)
- Second: + one costimulatory domain (current products)
- Third: + two costimulatory domains
- Fourth: + cytokine genes or other modifications

*Approved Indications:*
- B-cell ALL (CD19-directed)
- Large B-cell lymphoma (CD19-directed)
- Multiple myeloma (BCMA-directed)
- Expanding to solid tumors (challenging)

*Toxicities:*
- Cytokine release syndrome (CRS): Fever, hypotension, hypoxia
- Immune effector cell-associated neurotoxicity syndrome (ICANS)
- B-cell aplasia (expected with CD19 targeting)
- Cytopenias

**Predictive Biomarkers:**

*Established:*
- PD-L1 expression (TPS, CPS, IC scoring)
- MSI-H/dMMR (pembrolizumab any tumor)
- TMB-high (pembrolizumab any tumor)
- EBV-positive gastric cancer

*Emerging:*
- Tumor-infiltrating lymphocytes (TILs)
- Gene expression signatures (IFN-gamma, T-cell inflammation)
- Gut microbiome composition
- HLA heterozygosity

**Resistance Mechanisms:**

*Primary Resistance:*
- Low tumor immunogenicity (low TMB)
- Poor T cell infiltration ("cold" tumors)
- Constitutive oncogenic signaling (WNT/beta-catenin)
- Immunosuppressive microenvironment

*Acquired Resistance:*
- Loss of antigen presentation (B2M, HLA loss)
- JAK1/2 mutations (IFN-gamma signaling)
- Immune escape variants
- Exhaustion despite blockade

**Immune-Related Adverse Events (irAEs):**

*Mechanism:*
- Breaking tolerance to self-antigens
- Activated T cells attacking normal tissues
- Similar to autoimmune diseases

*Organ-Specific Management:*
- Grade 1: Usually continue with monitoring
- Grade 2: Consider holding, low-dose steroids
- Grade 3: Hold therapy, prednisone 1-2 mg/kg
- Grade 4: Permanently discontinue, high-dose steroids +/- additional immunosuppression

*Steroid-Refractory:*
- Infliximab for colitis
- Mycophenolate for hepatitis
- Specialist consultation essential`,
      keyTerms: [
        { term: 'T cell exhaustion', definition: 'Dysfunctional state where T cells lose effector function due to chronic antigen exposure' },
        { term: 'CRS', definition: 'Cytokine release syndrome; systemic inflammatory response to CAR-T therapy' },
        { term: 'ICANS', definition: 'Immune effector cell-associated neurotoxicity; CAR-T related neurologic toxicity' },
        { term: 'cold tumor', definition: 'Tumor lacking immune cell infiltration, less responsive to immunotherapy' },
        { term: 'TPS', definition: 'Tumor proportion score; percentage of tumor cells expressing PD-L1' },
      ],
      clinicalNotes: 'PD-L1 testing methodology varies by assay and cutoff. irAE recognition and early intervention critical. CAR-T therapy requires specialized centers with toxicity management expertise.',
    },
    4: {
      level: 4,
      summary: 'Advanced immunotherapy concepts include combination strategies, overcoming resistance, novel cellular therapies, and biomarker-driven patient selection in an evolving landscape.',
      explanation: `**Combination Immunotherapy Strategies:**

*Checkpoint Combinations:*
- Nivolumab + ipilimumab: Melanoma, RCC, NSCLC, mesothelioma
- Nivolumab + relatlimab (LAG-3): Melanoma
- PD-1 + TIGIT inhibitors: Under investigation
- Dual PD-1/CTLA-4 constructs in development

*Immunotherapy + Chemotherapy:*
- Pembrolizumab + platinum doublet (NSCLC)
- Atezolizumab + chemo (SCLC, breast, bladder)
- Chemotherapy-induced immunogenic cell death rationale
- Timing and sequencing considerations

*Immunotherapy + Targeted Therapy:*
- Atezolizumab + bevacizumab + chemo (NSCLC, HCC)
- BRAF/MEK + checkpoint inhibitors (melanoma)
- VEGF inhibition may improve immune infiltration
- Careful toxicity monitoring required

*Immunotherapy + Radiation:*
- Abscopal effect potential
- SBRT combinations under investigation
- Optimal timing, fractionation debated

**Novel Cellular Therapies:**

*Beyond CAR-T:*
- TCR-engineered T cells: Target intracellular antigens (NY-ESO-1, MAGE)
- TIL therapy: Expanding tumor-infiltrating lymphocytes (melanoma)
- NK cell therapies: CAR-NK, allogeneic approaches
- Gamma-delta T cells

*CAR-T Innovations:*
- Allogeneic "off-the-shelf" CAR-T
- Armored CARs (cytokine secretion)
- Dual-targeting CARs
- Logic-gated CARs
- Controllable CARs (kill switches)

*Solid Tumor Challenges:*
- Tumor microenvironment immunosuppression
- Limited trafficking
- Antigen heterogeneity
- On-target, off-tumor toxicity

**Resistance and Sensitization:**

*Converting Cold to Hot Tumors:*
- Oncolytic viruses (T-VEC combinations)
- Intratumoral TLR agonists
- Epigenetic modifiers
- Radiation priming

*Targeting the Microenvironment:*
- Treg depletion strategies
- MDSC inhibition
- Macrophage reprogramming (CSF-1R inhibitors)
- Fibroblast targeting

*Metabolic Modulation:*
- Adenosine pathway inhibitors (CD73, A2AR)
- IDO inhibitors (disappointing results so far)
- Arginase inhibitors

**Biomarker Deep Dive:**

*Beyond PD-L1:*
- Combined positive score (CPS): Tumor + immune cells
- Gene expression profiles: GEP, TIS
- TMB limitations (different cutoffs, assay variability)
- MSI testing: PCR vs NGS vs IHC

*Negative Predictive Markers:*
- STK11/LKB1 mutations in NSCLC
- PTEN loss in some contexts
- EGFR/ALK in NSCLC (lower benefit)
- Steroid use at baseline

*Liquid Biopsy:*
- ctDNA for response monitoring
- TMB from blood (bTMB)
- Circulating immune cell phenotyping

**Toxicity Advances:**

*Predictive Markers for irAEs:*
- Baseline autoantibodies
- IL-6 levels
- Gut microbiome signatures
- HLA associations

*Novel Management:*
- Vedolizumab for GI irAEs
- FMT for colitis
- CTLA-4 + infliximab for myocarditis
- Checkpoint-specific toxicity profiles

**Emerging Approvals and Trials:**

*Recent Advances:*
- Relatlimab + nivolumab (melanoma)
- Tremelimumab + durvalumab (HCC, NSCLC)
- Retifanlimab (anal cancer)
- Expanding tumor-agnostic approvals

*Pipeline:*
- CD39 inhibitors
- CD47 blockade (macrophage checkpoint)
- Bispecific antibodies (PD-1 x LAG-3, PD-1 x TIGIT)
- Vaccines (personalized neoantigen)`,
      keyTerms: [
        { term: 'abscopal effect', definition: 'Regression of non-irradiated tumors after local radiation, mediated by immune response' },
        { term: 'TIL therapy', definition: 'Adoptive transfer of expanded tumor-infiltrating lymphocytes' },
        { term: 'allogeneic CAR-T', definition: 'CAR-T cells from a donor rather than the patient' },
        { term: 'STK11/LKB1', definition: 'Tumor suppressor whose loss predicts poor immunotherapy response in NSCLC' },
        { term: 'immunogenic cell death', definition: 'Cell death that exposes antigens and activates immune response' },
      ],
      clinicalNotes: 'Combination immunotherapy offers higher response rates but increased toxicity. Novel cellular therapies expanding but solid tumors remain challenging. Biomarker selection increasingly refined but imperfect.',
    },
    5: {
      level: 5,
      summary: 'The frontiers of immunotherapy include next-generation cellular therapies, novel immune checkpoints, precision biomarker development, and strategies to overcome resistance and optimize benefit in diverse patient populations.',
      explanation: `**Next-Generation Checkpoint Targets:**

*Beyond PD-1/CTLA-4:*
- LAG-3: Relatlimab approved, others in development
- TIM-3: Multiple programs (anti-TIM-3 monotherapy/combinations)
- TIGIT: Tiragolumab, vibostolimab (mixed results in trials)
- VISTA, B7-H3, BTLA: Earlier development

*Dual-Targeting Constructs:*
- Bispecific antibodies (PD-1 x LAG-3, PD-L1 x TGF-beta)
- Increased potency, potential toxicity concerns
- Manufacturing advantages

*Innate Immune Checkpoints:*
- CD47/SIRPalpha ("don't eat me" signal): Magrolimab, evorpacept
- CD73/adenosine: Oleclumab, ciforadenant
- Targeting myeloid suppression

**Cellular Therapy Evolution:**

*TIL Therapy:*
- Lifileucel (Amtagvi): FDA approved for melanoma
- Complex manufacturing, centralized production
- Combination with checkpoint inhibitors
- Expansion to other solid tumors

*CAR-T Advances:*
- Allogeneic platforms: Gene editing to avoid GvHD
  - CRISPR-edited CAR-T (CTX110, ALLO-501)
  - Reduced manufacturing time, cost
- Multi-target CARs: Hedge against antigen loss
- CAR-NK: Allogeneic, no GvHD, CRS milder
- CAR-macrophages: Solid tumor trafficking

*TCR Therapies:*
- Tebentafusp (gp100 x CD3): Uveal melanoma
- Targeting intracellular antigens (neoantigens, cancer-testis)
- HLA restriction limitations

**Tumor Microenvironment Modulation:**

*Myeloid Targeting:*
- CSF-1R inhibitors: Pexidartinib (TGCT), others in combination
- CCR2 inhibitors for monocyte trafficking
- CD40 agonists for DC activation
- STING agonists: Intratumoral, systemic approaches

*Treg Modulation:*
- CCR8-directed depletion (selectively in tumor)
- Low-dose CTLA-4 for Treg depletion
- Selective Treg-targeting antibodies

*Stroma Targeting:*
- FAP-targeting (bispecifics, ADCs)
- TGF-beta pathway blockade
- Physical barriers and matrix

**Personalized Immunotherapy:**

*Neoantigen Vaccines:*
- Personalized mRNA vaccines (BioNTech/Genentech)
- Peptide vaccines with adjuvants
- DNA vaccines
- In situ vaccination approaches

*Neoantigen-Directed T Cells:*
- Identifying tumor-specific mutations
- Manufacturing personalized TCRs
- TIL selection for neoantigen reactivity

*Microbiome Modulation:*
- FMT to improve checkpoint response
- Live biotherapeutics
- Consortium of "immunotherapy-favorable" species

**Biomarker Precision:**

*Multi-Dimensional Signatures:*
- Spatial biology (multiplex IHC, spatial transcriptomics)
- Single-cell resolution of tumor-immune interface
- Machine learning integration
- Dynamic biomarkers (on-treatment changes)

*Circulating Biomarkers:*
- ctDNA dynamics as early response marker
- Peripheral blood immune profiling
- Cytokine panels
- Extracellular vesicle analysis

*Imaging Biomarkers:*
- Radiomics for immune infiltration
- PET tracers for immune cells (CD8, PD-L1)
- Real-time response assessment

**Overcoming Resistance:**

*Epigenetic Approaches:*
- HDAC inhibitors + immunotherapy
- Hypomethylating agents
- Enhancing antigen presentation

*Metabolism:*
- Adenosine pathway clinically advancing
- Glutamine antagonists
- Lactate metabolism targeting

*Combinations for Acquired Resistance:*
- Sequential therapy strategies
- Rechallenge after break
- Novel agent introduction at resistance

**Special Populations:**

*Autoimmune Disease:*
- Not absolute contraindication
- Risk of flare 40-50%
- Often manageable, benefit preserved

*Immunocompromised:*
- HIV: Can receive with precautions
- Transplant: High rejection risk
- Case-by-case assessment

*Elderly:*
- Generally benefit similarly
- Toxicity profile may differ
- Geriatric assessment helpful

**Future Directions:**

*Cell Therapies:*
- Off-the-shelf approaches scaling
- Solid tumor breakthroughs needed
- Combination with checkpoints standard

*Biomarkers:*
- AI-driven integration
- Real-time monitoring
- Resistance prediction

*Combination Optimization:*
- Rational trial design
- Biomarker-guided combinations
- Toxicity management improvements`,
      keyTerms: [
        { term: 'lifileucel', definition: 'FDA-approved TIL therapy for melanoma (Amtagvi)' },
        { term: 'neoantigen', definition: 'Tumor-specific antigen arising from somatic mutations' },
        { term: 'spatial biology', definition: 'Technologies analyzing cell location and neighbors within tissue' },
        { term: 'STING agonist', definition: 'Drug activating innate immune sensing pathway' },
        { term: 'FMT', definition: 'Fecal microbiota transplantation; being studied to improve immunotherapy response' },
      ],
      clinicalNotes: 'The immunotherapy field continues rapid evolution. TIL therapy and next-generation checkpoints expanding options. Biomarker integration and resistance mechanisms remain key research priorities. Multidisciplinary expertise in toxicity management essential.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune system'],
    topics: ['oncology', 'immunotherapy', 'checkpoint inhibitors', 'cellular therapy'],
    keywords: ['PD-1', 'CTLA-4', 'CAR-T', 'immune checkpoint', 'TIL', 'irAE'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
