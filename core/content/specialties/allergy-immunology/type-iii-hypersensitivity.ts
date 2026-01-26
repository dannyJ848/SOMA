import { EducationalContent } from '../../types';

export const typeIIIHypersensitivityContent: EducationalContent = {
  id: 'allergy-immunology-type-iii-hypersensitivity',
  type: 'concept',
  name: 'Type III Hypersensitivity (Immune Complex-Mediated)',
  alternateNames: ['Immune Complex Disease', 'Arthus Reaction', 'Serum Sickness'],

  levels: {
    1: {
      level: 1,
      summary: 'Type III hypersensitivity happens when clumps of antibodies and antigens get stuck in your tissues and cause inflammation.',
      explanation: `Type III hypersensitivity occurs when antibodies and the things they're attacking (antigens) stick together in your blood and form clumps called "immune complexes." These clumps then get stuck in various parts of your body and cause damage.

**How It Works:**

1. **Clumps Form in Blood**
   - Your immune system makes antibodies against something (bacteria, virus, or even your own proteins)
   - Antibodies and antigens stick together in the blood
   - These form clusters called immune complexes

2. **Clumps Get Stuck**
   - Normally, your body clears these clumps
   - When there are too many, they deposit in tissues
   - Common places: kidneys, joints, blood vessels, skin

3. **Inflammation and Damage**
   - The stuck clumps activate the complement system
   - Immune cells are attracted and cause inflammation
   - This damages the surrounding tissue

**Common Examples:**

- **Serum Sickness**: Reaction to foreign proteins (old serum treatments, some medications)
- **Lupus (SLE)**: Immune complexes with your own DNA cause kidney, joint, and skin problems
- **Post-Streptococcal Glomerulonephritis**: After strep throat, complexes damage kidneys
- **Farmer's Lung**: Inhaling moldy hay causes lung inflammation

**Symptoms Depend on Where Complexes Deposit:**
- Kidneys: Blood/protein in urine, swelling
- Joints: Pain and swelling (arthritis)
- Skin: Rash, often with small red spots
- Blood vessels: Vasculitis (inflamed blood vessels)
- General: Fever, fatigue`,
      keyTerms: [
        { term: 'immune complex', definition: 'A clump formed when antibodies bind to antigens' },
        { term: 'serum sickness', definition: 'Illness caused by immune complexes after receiving foreign proteins' },
        { term: 'vasculitis', definition: 'Inflammation of blood vessels' },
        { term: 'complement', definition: 'Proteins in blood that cause inflammation when activated' },
      ],
      analogies: [
        'Imagine immune complexes like trash that clogs pipes. When there\'s too much, it blocks flow and causes damage wherever it gets stuck.',
        'It\'s like glitter getting everywhere after a party - the antibody-antigen "glitter" deposits in your tissues and causes problems.',
      ],
      examples: [
        'After a bad strep throat, immune complexes can deposit in your kidneys, causing them to leak blood and protein into urine.',
        'Some medications can trigger serum sickness, causing fever, joint pain, and rash about 1-2 weeks after starting the drug.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type III hypersensitivity involves the formation of antigen-antibody immune complexes that deposit in tissues, activating complement and recruiting inflammatory cells to cause localized or systemic inflammation.',
      explanation: `Type III hypersensitivity (immune complex-mediated hypersensitivity) occurs when soluble antigens combine with antibodies to form immune complexes that deposit in tissues and trigger inflammation.

**Pathophysiology:**

**1. Immune Complex Formation**
- Antigens: Microbes, self-antigens (autoimmune), drugs, foreign proteins
- Antibodies: Usually IgG, sometimes IgM
- Complex size affects deposition:
  - Small complexes: Stay in circulation, eventually cleared
  - Large complexes: Rapidly removed by phagocytes
  - Intermediate complexes: Most pathogenic, deposit in tissues

**2. Complex Deposition**
- Factors favoring deposition:
  - Increased vascular permeability
  - High blood pressure (glomeruli)
  - Turbulent flow (vessel bifurcations)
  - Size and charge of complexes
- Common sites: Glomeruli, joints, skin, small vessels

**3. Inflammatory Response**
- Complement activation (classical pathway)
- C3a and C5a release (anaphylatoxins):
  - Mast cell degranulation → histamine
  - Neutrophil chemotaxis
  - Increased vascular permeability
- Neutrophil activation:
  - Frustrated phagocytosis
  - Release of lysosomal enzymes
  - Reactive oxygen species production
  - Tissue damage

**Clinical Patterns:**

| Pattern | Mechanism | Examples |
|---------|-----------|----------|
| Systemic | Circulating IC deposit widely | SLE, serum sickness |
| Local (Arthus) | IC form at site of antigen injection | Hypersensitivity pneumonitis |

**Clinical Diseases:**

**Serum Sickness:**
- Classic Type III reaction
- Occurs 7-14 days after exposure to foreign protein
- Triad: Fever, arthralgia, skin rash (urticaria/vasculitis)
- Modern causes: Rituximab, antithymocyte globulin, some antibiotics
- Self-limited after antigen is cleared

**Systemic Lupus Erythematosus (SLE):**
- Autoantibodies to DNA, histones, and other nuclear antigens
- Immune complex deposition in:
  - Kidneys (lupus nephritis)
  - Skin (malar rash, discoid lesions)
  - Joints (arthritis)
  - Serous membranes (pleuritis, pericarditis)
- Chronic, relapsing disease

**Post-Streptococcal Glomerulonephritis:**
- Follows group A streptococcal infection (pharyngitis, impetigo)
- Immune complexes deposit in glomeruli
- "Lumpy-bumpy" pattern on immunofluorescence
- Presents with hematuria, edema, hypertension
- Usually self-limited in children

**Hypersensitivity Pneumonitis (Arthus-type):**
- Repeated inhalation of organic antigens
- Farmer's lung (moldy hay), bird fancier's lung
- Acute: Fever, cough, dyspnea 4-8 hours after exposure
- Chronic: Progressive pulmonary fibrosis`,
      keyTerms: [
        { term: 'Arthus reaction', definition: 'Localized Type III reaction at site of antigen injection, causing vasculitis', pronunciation: 'ar-TOOS' },
        { term: 'serum sickness', definition: 'Systemic Type III reaction 1-2 weeks after exposure to foreign proteins' },
        { term: 'anaphylatoxin', definition: 'Complement fragments (C3a, C5a) that trigger inflammation and mast cell degranulation' },
        { term: 'hypersensitivity pneumonitis', definition: 'Lung inflammation from repeated inhalation of organic antigens (immune complex-mediated)' },
        { term: 'lupus nephritis', definition: 'Kidney inflammation in SLE due to immune complex deposition' },
      ],
      analogies: [
        'Immune complexes depositing in tissues are like calcium deposits in pipes - they build up where flow conditions allow and cause blockages.',
        'The Arthus reaction is like a localized traffic jam where immune complexes pile up at one spot and cause local inflammation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type III hypersensitivity results from deposition of circulating immune complexes in vascular beds, triggering classical complement activation and FcγR-mediated neutrophil recruitment, with pathology determined by complex size, charge, and local hemodynamic factors.',
      explanation: `Type III hypersensitivity represents a failure of normal immune complex clearance mechanisms, with subsequent tissue deposition and inflammatory damage.

**Immune Complex Formation and Fate:**

**Lattice Formation:**
- Optimal ratio of antibody to antigen for precipitation
- Antibody excess: Small, soluble complexes
- Antigen excess: Small, soluble complexes
- Equivalence zone: Large, insoluble complexes

**Normal Clearance Mechanisms:**

*Complement-Mediated Solubilization:*
- C3b incorporation into complexes
- Prevents further growth
- Maintains solubility

*Erythrocyte Transport:*
- CR1 (CD35) on RBCs binds C3b on complexes
- RBCs transport complexes to liver/spleen
- Fixed macrophages strip complexes
- Complexes are degraded

*Hepatic/Splenic Clearance:*
- Kupffer cells and splenic macrophages
- FcγR and complement receptor-mediated uptake
- Efficient for large complexes

**Factors Promoting Pathogenic Deposition:**

*Complex Characteristics:*
- Intermediate size (Svedberg 19S): Most pathogenic
- Cationic charge: Binds anionic basement membranes
- High avidity antibodies: More stable complexes

*Host Factors:*
- Complement deficiency (C1q, C2, C4): Impaired solubilization
- FcγR polymorphisms: Altered clearance efficiency
- Reduced erythrocyte CR1: Impaired transport

*Local Factors:*
- High hydrostatic pressure (glomerulus)
- Turbulent flow (vessel bifurcations)
- Increased vascular permeability
- Preexisting tissue damage

**Inflammatory Mechanisms:**

**Complement Activation:**
- Classical pathway: C1q binds IgG Fc regions in complexes
- C4a, C3a, C5a generation:
  - Anaphylatoxins increase vascular permeability
  - Mast cell degranulation (histamine)
  - Neutrophil chemotaxis (especially C5a)
- C5b-9 (MAC) contributes to tissue damage

**Neutrophil-Mediated Injury:**
- FcγRIIA and FcγRIIIB engagement
- Frustrated phagocytosis (cannot internalize IC on basement membrane)
- Extracellular release of:
  - Reactive oxygen species (O2-, H2O2, HOCl)
  - Lysosomal enzymes (elastase, collagenase)
  - NETs (neutrophil extracellular traps)

**Specific Disease Mechanisms:**

**Lupus Nephritis:**

*Classification (ISN/RPS):*
- Class I: Minimal mesangial
- Class II: Mesangial proliferative
- Class III: Focal proliferative (<50% glomeruli)
- Class IV: Diffuse proliferative (>50% glomeruli) - Most severe
- Class V: Membranous
- Class VI: Sclerotic

*Pathogenic Autoantibodies:*
- Anti-dsDNA: Correlates with nephritis activity
- Anti-C1q: Associated with severe nephritis
- Anti-nucleosome antibodies: Direct glomerular binding

*Immunofluorescence:*
- "Full house" pattern: IgG, IgA, IgM, C3, C1q
- Granular deposits along GBM and mesangium
- Distinguishes from anti-GBM disease (linear)

**Cryoglobulinemic Vasculitis:**

*Types:*
- Type I: Monoclonal IgG or IgM (myeloma, Waldenström's)
- Type II: Monoclonal IgM with RF activity (mixed, HCV-associated)
- Type III: Polyclonal IgG and IgM (autoimmune, infections)

*Pathogenesis:*
- Cryoglobulins precipitate at low temperatures
- Deposit in small vessels (skin, kidneys, nerves)
- Complement consumption (low C4 in Type II)

*Clinical:*
- Palpable purpura
- Arthralgias
- Glomerulonephritis (MPGN pattern)
- Peripheral neuropathy`,
      keyTerms: [
        { term: 'lattice formation', definition: 'Three-dimensional network of cross-linked antibody-antigen complexes' },
        { term: 'frustrated phagocytosis', definition: 'Release of lysosomal contents when phagocytes cannot internalize surface-bound immune complexes' },
        { term: 'cryoglobulin', definition: 'Immunoglobulins that precipitate at temperatures below 37°C' },
        { term: 'full house pattern', definition: 'Immunofluorescence showing all immunoglobulins and complement, characteristic of lupus nephritis' },
        { term: 'NETs', definition: 'Neutrophil extracellular traps; DNA-chromatin webs released by neutrophils that can perpetuate autoimmunity' },
        { term: 'MPGN', definition: 'Membranoproliferative glomerulonephritis; pattern seen in cryoglobulinemia and other IC diseases' },
      ],
      clinicalNotes: 'Complement levels help distinguish diseases: Low C3/C4 in active lupus/cryoglobulinemia; low C4 only in Type II cryoglobulinemia (classical pathway). Anti-dsDNA titers correlate with lupus activity. Serum sickness-like reaction from drugs usually has normal complement. Treat underlying cause (HCV in cryoglobulinemia).',
    },
    4: {
      level: 4,
      summary: 'Type III hypersensitivity pathogenesis involves equilibrium between immune complex formation and clearance, with pathogenic complexes of intermediate size depositing in tissues based on physiochemical properties and local hemodynamics, triggering complement-dependent and FcγR-mediated inflammatory cascades that determine disease phenotype and severity.',
      explanation: `Type III hypersensitivity demonstrates the interplay between antibody characteristics, antigen properties, complement function, and tissue-specific factors in determining disease expression.

**Molecular Determinants of Complex Pathogenicity:**

**Antibody Factors:**

*Isotype:*
- IgG1, IgG3: Strong complement activation, pathogenic
- IgG2: Weak complement activation
- IgG4: Does not activate complement, may be protective
- IgM: Very strong complement activation (pentamer)

*Affinity and Avidity:*
- High-affinity antibodies: Stable complexes, efficient clearance
- Low-affinity antibodies: Dynamic complexes, may grow in circulation
- Avidity effects: Multivalent binding influences size

*Glycosylation:*
- Fc galactosylation affects complement activation
- Agalactosylated IgG: Enhanced inflammation (seen in RA)

**Antigen Factors:**

*Valency:*
- Multivalent antigens: Large lattices
- Divalent antigens: Linear chains
- Monovalent haptens: Cannot form lattices

*Charge:*
- Cationic antigens: Preferential binding to anionic GBM
- Planted antigen theory: Antigens bind first, then antibodies
- Examples: Cationic histone proteins in lupus

**Complement Deficiency and SLE:**

*C1q Deficiency:*
- Strongest genetic risk for SLE (>90% develop SLE)
- Impaired clearance of apoptotic cells
- Reduced immune complex solubilization
- Failure of tolerance maintenance

*C4 Deficiency:*
- High risk for SLE (~75%)
- C4A deficiency more associated than C4B
- Impaired classical pathway activation

*C2 Deficiency:*
- Most common complement deficiency in Europeans
- ~10% develop SLE-like disease
- Often milder, photosensitive rash predominant

*Mechanism of Protection:*
- Normal complement: Tags apoptotic cells for removal
- Deficiency: Apoptotic material persists, drives autoimmunity
- Complement also maintains B cell tolerance

**Advanced Disease Mechanisms:**

**NETs and Autoimmunity:**

*NET Formation (NETosis):*
- Neutrophil activation → nuclear decondensation
- DNA-histone expulsion with granule proteins
- Antimicrobial function but also source of autoantigens

*NETs in Lupus:*
- Impaired NET degradation (low DNase I)
- Source of dsDNA, histones for autoantibody formation
- pDCs activated by NET-DNA → IFN-α production
- Perpetuates autoimmune cycle

**Type I Interferon Pathway in SLE:**

*IFN-α Sources:*
- Plasmacytoid dendritic cells (pDCs)
- Activated by nucleic acid-containing immune complexes
- TLR7 (ssRNA), TLR9 (dsDNA) stimulation via FcγRIIA

*Effects:*
- DC maturation and antigen presentation
- B cell differentiation to plasma cells
- Monocyte differentiation to DCs
- Cytotoxic T cell activation

*Therapeutic Target:*
- Anifrolumab: Anti-IFNAR1 antibody, approved for SLE

**Tissue-Specific Deposition Mechanisms:**

**Glomerulus:**
*Unique Features:*
- High filtration pressure
- Fenestrated endothelium
- Anionic charge of GBM
- Mesangial uptake capacity

*Deposition Patterns:*
- Subepithelial: Membranous nephropathy pattern
- Subendothelial: Proliferative nephritis pattern
- Mesangial: Mild disease

**Synovium:**
*RA Pathogenesis:*
- Citrullinated protein antigens
- ACPA (anti-citrullinated protein antibodies)
- Immune complex formation in joint
- FcγR activation on synovial macrophages
- Pannus formation and cartilage destruction

**Therapeutic Implications:**

**Targeting Complement:**
- C5 inhibition (eculizumab): Used in some refractory cases
- C5aR antagonists: In development for SLE
- Complement activation products as biomarkers

**Targeting B Cells:**
- Rituximab: Variable efficacy in lupus nephritis
- Belimumab: Anti-BAFF, reduces autoantibody production
- Obinutuzumab: Type II anti-CD20, may be more effective

**Targeting IFN Pathway:**
- Anifrolumab: Anti-IFNAR1, approved for SLE
- Reduces disease activity, steroid sparing
- Does not improve nephritis significantly`,
      keyTerms: [
        { term: 'planted antigen', definition: 'Theory that cationic antigens first bind to anionic tissue sites, with subsequent antibody binding forming in situ complexes' },
        { term: 'NETosis', definition: 'Process of neutrophil extracellular trap formation, releasing DNA-chromatin webs' },
        { term: 'anifrolumab', definition: 'Anti-type I interferon receptor antibody approved for systemic lupus erythematosus' },
        { term: 'ACPA', definition: 'Anti-citrullinated protein antibodies; highly specific for rheumatoid arthritis' },
        { term: 'BAFF', definition: 'B cell activating factor; survival signal for B cells, target of belimumab' },
      ],
      clinicalNotes: 'C1q deficiency: Highest genetic risk for SLE. IFN signature in blood predicts lupus flares. Anti-dsDNA + low complement = active nephritis. Belimumab: Add-on therapy, reduces flares, not for severe nephritis. Anifrolumab: Effective for non-renal SLE. ACPA + RF: Worse RA prognosis. Cryoglobulinemia: Treat HCV if positive; rituximab for severe disease.',
    },
    5: {
      level: 5,
      summary: 'Type III hypersensitivity integrates immune complex physicochemistry, complement-mediated processing, FcγR biology, and tissue-specific factors to produce diverse clinical phenotypes, with therapeutic advances targeting specific pathways from autoantibody production through complement activation to downstream interferon signaling.',
      explanation: `Comprehensive understanding of Type III hypersensitivity requires integration of immunology fundamentals with clinical disease heterogeneity and evolving therapeutic landscape.

**Systems Biology of Immune Complex Disease:**

**Immune Complex Metabolism:**

*Formation:*
- Rate depends on antibody affinity, antigen concentration
- Low-affinity antibodies: Increased complex formation time
- Mathematical models: Predict pathogenic complex sizes

*Processing in Circulation:*
- C3b/C4b incorporation (complement solubilization)
- CR1 on erythrocytes: 500-1000 molecules/RBC
- Hepatic transit: Kupffer cell stripping via FcγR
- Plasma half-life: Minutes to hours depending on size

*Tissue Deposition:*
- Governed by Starling forces at capillaries
- Size exclusion at basement membranes
- Charge-charge interactions with matrix
- Local inflammation increases deposition

**Genetic Architecture of SLE:**

*HLA Associations:*
- HLA-DR3: OR ~2-3 for SLE
- HLA-DR2: Associated with lupus nephritis
- HLA genes: Antigen presentation to autoreactive T cells

*Non-HLA Susceptibility Genes:*
- IRF5: IFN regulatory factor, increases IFN production
- STAT4: IFN signaling pathway
- ITGAM (CD11b): FcγR-associated integrin
- PTPN22: Lymphocyte signaling phosphatase
- BLK: B cell signaling kinase
- TNFAIP3 (A20): NF-κB negative regulator

*Complement Gene Copy Number:*
- C4 gene copy number variation
- Low C4 copy number: Increased SLE risk
- C4A vs C4B: Different substrate specificities

**Biomarker Development:**

**Traditional Markers:**
- Anti-dsDNA: Correlates with nephritis activity
- Complement (C3, C4): Decrease with active disease
- ESR, CRP: Non-specific inflammation
- Urinalysis: Proteinuria, cellular casts

**Novel Biomarkers:**

*Urine:*
- TWEAK: TNF-like inducer of apoptosis
- MCP-1: Monocyte chemotactic protein
- NGAL: Neutrophil gelatinase-associated lipocalin
- Podocyte markers: Podocin, nephrin

*Blood:*
- IFN signature: Gene expression panel
- Low-density granulocytes (LDGs): Pro-inflammatory neutrophils
- Cell-free DNA: Correlates with NETs
- Complement activation products (C5a, sC5b-9)

*Tissue:*
- Renal biopsy: Gold standard for nephritis classification
- Activity index: Cellular crescents, necrosis, inflammation
- Chronicity index: Glomerulosclerosis, fibrosis

**Therapeutic Landscape:**

**Approved Therapies for SLE:**

| Drug | Target | Indication |
|------|--------|------------|
| Hydroxychloroquine | TLR7/9, autophagy | All SLE patients |
| Belimumab | BAFF | Active SLE, add-on |
| Anifrolumab | IFNAR1 | Active non-renal SLE |
| Voclosporin | Calcineurin | Lupus nephritis |

**Emerging Therapies:**

*CD19/CD20 Targeting:*
- Obinutuzumab: Type II anti-CD20, enhanced ADCC
- CD19 CAR-T: Complete B cell depletion, durable remissions in refractory SLE

*Plasma Cell Targeting:*
- Daratumumab: Anti-CD38
- Targets long-lived plasma cells producing autoantibodies

*Complement Inhibitors:*
- Iptacopan: Oral factor B inhibitor
- Narsoplimab: Anti-MASP-2 (lectin pathway)
- Pegcetacoplan: C3 inhibitor

*Other Novel Targets:*
- JAK inhibitors: Baricitinib (IFN pathway)
- BTK inhibitors: B cell signaling
- CD40L blockade: Costimulation

**Case-Based Integration:**

**Case: 28-year-old woman with malar rash, arthritis, proteinuria**

*Diagnostic Workup:*
1. ANA (sensitive but not specific)
2. Anti-dsDNA (specific, correlates with nephritis)
3. Complement levels (C3, C4)
4. Complete metabolic panel, urinalysis
5. Anti-Smith, anti-RNP, anti-Ro, anti-La
6. Renal biopsy if significant proteinuria

*ACR/EULAR 2019 Classification Criteria:*
- Entry criterion: ANA ≥1:80
- Additive weighted criteria (≥10 points)
- Clinical: Fever, joints, serositis, cytopenias, neuropsychiatric
- Immunologic: Anti-dsDNA, anti-Smith, low complement

*Treatment Algorithm:*
- All patients: Hydroxychloroquine
- Mild disease: NSAIDs, low-dose prednisone
- Moderate disease: Moderate prednisone + azathioprine/MMF
- Severe nephritis: High-dose prednisone + MMF or cyclophosphamide
- Refractory: Rituximab, belimumab, voclosporin
- Maintenance: MMF or azathioprine, minimize steroids

**Prognostic Factors in Lupus Nephritis:**
- Class IV worst prognosis
- High chronicity index: Predicts progression to ESRD
- Race/ethnicity: African, Hispanic worse outcomes
- Early treatment: Improves long-term outcomes
- Complete remission: Better than partial remission`,
      keyTerms: [
        { term: 'voclosporin', definition: 'Novel calcineurin inhibitor approved for lupus nephritis, added to MMF' },
        { term: 'activity index', definition: 'Histological score of acute, potentially reversible lesions in lupus nephritis biopsy' },
        { term: 'chronicity index', definition: 'Histological score of irreversible scarring in lupus nephritis biopsy' },
        { term: 'IRF5', definition: 'Interferon regulatory factor 5; SLE susceptibility gene affecting IFN production' },
        { term: 'CAR-T for autoimmunity', definition: 'Chimeric antigen receptor T cells targeting CD19 for complete B cell depletion in refractory autoimmune disease' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Type III = immune complex deposition (granular IF pattern)
- Key diseases: SLE, serum sickness, PSGN, hypersensitivity pneumonitis, cryoglobulinemia
- SLE: ANA screening, anti-dsDNA correlates with nephritis
- Complement deficiency: High risk for SLE (C1q > C4 > C2)
- Lupus nephritis: Class III/IV most severe, need biopsy
- "Full house" IF: IgG, IgA, IgM, C3, C1q (SLE)
- Serum sickness: 7-14 days post exposure, self-limited
- Cryoglobulinemia: Check HCV, low C4, treat underlying cause
- Hydroxychloroquine: All SLE patients (reduces flares, mortality)
- Belimumab: Add-on for active SLE, reduces flares
- Voclosporin: Added to MMF for lupus nephritis`,
    },
  },

  media: [
    {
      id: 'type-iii-mechanism-diagram',
      type: 'diagram',
      filename: 'type-iii-hypersensitivity-mechanism.svg',
      title: 'Type III Hypersensitivity Mechanism',
      description: 'Diagram showing immune complex formation, deposition, and inflammatory response',
    },
    {
      id: 'lupus-nephritis-if',
      type: 'histology',
      filename: 'lupus-nephritis-immunofluorescence.jpg',
      title: 'Lupus Nephritis Immunofluorescence',
      description: 'Granular "full house" pattern of immune complex deposition',
    },
  ],
  citations: [
    {
      id: 'abbas-type-iii',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
      chapter: '19',
    },
    {
      id: 'tsokos-sle',
      type: 'article',
      title: 'Systemic lupus erythematosus',
      authors: ['Tsokos GC'],
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-immune-system-overview', targetType: 'concept', relationship: 'parent', label: 'Immune System Overview' },
    { targetId: 'allergy-immunology-autoimmune-principles', targetType: 'concept', relationship: 'see-also', label: 'Autoimmune Principles' },
  ],
  tags: {
    systems: ['immune', 'renal', 'musculoskeletal'],
    topics: ['immunology', 'hypersensitivity', 'autoimmunity', 'nephrology'],
    keywords: ['type III', 'immune complex', 'lupus', 'serum sickness', 'glomerulonephritis', 'vasculitis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default typeIIIHypersensitivityContent;
