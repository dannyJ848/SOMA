import { EducationalContent } from '../../types';

export const lymphNodesContent: EducationalContent = {
  id: 'structure-lymph-nodes',
  type: 'structure',
  name: 'Lymph Nodes',
  alternateNames: ['Lymph glands', 'Nodi lymphatici', 'Lymphatic nodes'],
  fmaId: 'FMA:5034',

  levels: {
    1: {
      level: 1,
      summary: 'Lymph nodes are small, bean-shaped organs found throughout your body that filter fluid and help fight infections.',
      explanation: `Lymph nodes are like tiny security checkpoints scattered throughout your body. You have about 600 of them! They're usually about the size of a bean.

**Where Are They?**
- In your neck (you might feel them when you're sick)
- Under your arms (armpits)
- In your groin (where your legs meet your body)
- Deep inside your chest and belly

**What Do They Do?**

1. **Filter Harmful Stuff**
   - Lymph nodes catch germs, dead cells, and other bad things
   - They clean the fluid (called lymph) that flows through your body
   - Think of them as water filters!

2. **Fight Infections**
   - They're packed with white blood cells
   - When germs get caught, white blood cells attack them
   - This is why lymph nodes get swollen when you're sick - they're working extra hard!

3. **Learn About Germs**
   - Lymph nodes help your immune system remember germs
   - Next time the same germ shows up, your body can fight it faster

**Why Do Lymph Nodes Swell?**
When you have a cold or infection, your lymph nodes fill up with white blood cells fighting germs. This makes them bigger and sometimes sore. It's actually a good sign - your body is fighting back!`,
      keyTerms: [
        { term: 'lymph node', definition: 'A small organ that filters body fluid and fights germs' },
        { term: 'lymph', definition: 'A clear fluid that carries cells and waste through your body' },
        { term: 'swollen glands', definition: 'Lymph nodes that have gotten bigger because they\'re fighting an infection' },
      ],
      analogies: [
        'Lymph nodes are like security checkpoints at an airport, checking everything that passes through for danger.',
        'Think of lymph nodes as police stations spread throughout your body, where bad guys (germs) get caught and dealt with.',
      ],
      examples: [
        'When you have a sore throat, you might feel lumps in your neck - those are your swollen lymph nodes fighting the infection.',
        'Doctors feel for lymph nodes in your neck, armpits, and groin when checking if you\'re sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lymph nodes are encapsulated secondary lymphoid organs that filter lymphatic fluid and serve as sites for immune cell activation and antibody production.',
      explanation: `Lymph nodes are strategically positioned throughout the body at junctions of lymphatic vessels. They represent critical sites where the adaptive immune system encounters antigens and mounts immune responses.

**Structure:**

1. **Capsule and Trabeculae**
   - Outer fibrous capsule
   - Extensions (trabeculae) project inward
   - Support structure for the node

2. **Cortex (Outer Region)**
   - **Follicles**: B cell zones
     - Primary follicles: Resting B cells
     - Secondary follicles: Active germinal centers
   - **Paracortex**: T cell zone (between cortex and medulla)

3. **Medulla (Inner Region)**
   - **Medullary cords**: Contain plasma cells, macrophages
   - **Medullary sinuses**: Drain toward efferent lymphatics

4. **Sinuses**
   - **Subcapsular sinus**: Receives afferent lymph
   - **Cortical sinuses**: Through the cortex
   - **Medullary sinuses**: Drain to hilum

**Lymph Flow:**
Afferent lymphatics (multiple) → Subcapsular sinus → Through parenchyma → Medullary sinuses → Efferent lymphatic (single, at hilum)

**Blood Supply:**
Arteries enter at hilum → Branch through medulla and cortex
High endothelial venules (HEVs) in paracortex allow lymphocyte entry from blood

**Functions:**

1. **Filtration**
   - Macrophages in sinuses capture particles, pathogens
   - Dendritic cells bring antigens from peripheral tissues

2. **Antigen Presentation**
   - Dendritic cells present antigens to T cells in paracortex
   - B cells encounter antigens in follicles

3. **Lymphocyte Activation**
   - T cells activated in paracortex
   - B cells activated in follicles → germinal centers form
   - Produce antibodies (plasma cells in medulla)

4. **Lymphocyte Recirculation**
   - Naive lymphocytes enter via HEVs
   - Exit through efferent lymphatics
   - Patrol multiple nodes for antigens`,
      keyTerms: [
        { term: 'cortex', definition: 'Outer region of lymph node containing B cell follicles' },
        { term: 'paracortex', definition: 'Region between cortex and medulla, rich in T cells' },
        { term: 'medulla', definition: 'Inner region containing medullary cords and sinuses' },
        { term: 'germinal center', definition: 'Structure in follicles where B cells multiply and mature during immune responses' },
        { term: 'high endothelial venule (HEV)', definition: 'Specialized blood vessels that allow lymphocytes to enter lymph nodes from blood', pronunciation: 'venn-yool' },
        { term: 'afferent lymphatic', definition: 'Vessel bringing lymph into a lymph node' },
        { term: 'efferent lymphatic', definition: 'Vessel carrying lymph out of a lymph node' },
      ],
      analogies: [
        'Lymph nodes work like a conference center where immune cells meet to discuss and plan attacks against invaders.',
        'The multiple afferent vessels and single efferent vessel make the lymph node like a funnel, concentrating everything for inspection.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lymph nodes are organized secondary lymphoid organs with specialized microenvironments enabling antigen presentation, T-B cell collaboration, germinal center reactions, and plasma cell differentiation through intricate cellular and molecular interactions.',
      explanation: `Lymph nodes represent highly organized structures where spatial compartmentalization facilitates efficient immune responses through coordinated interactions between lymphocytes, antigen-presenting cells, and stromal cells.

**Detailed Microarchitecture:**

1. **Capsule and Subcapsular Sinus**
   - Collagen-rich capsule
   - Subcapsular sinus macrophages (CD169+/SIGLEC-1+)
   - Capture particulate antigens, immune complexes
   - Transfer antigens to follicular B cells

2. **Cortical Follicles (B Cell Zones)**

   *Primary Follicles:*
   - Resting naive B cells (IgM+IgD+)
   - Follicular dendritic cells (FDCs)
   - Produce CXCL13 (B cell chemoattractant)

   *Secondary Follicles (Germinal Centers):*
   - Dark zone: Centroblasts (proliferating B cells)
   - Light zone: Centrocytes (selection, class switching)
   - FDCs display antigen-antibody complexes
   - T follicular helper cells (Tfh) provide help
   - Tingible body macrophages clear apoptotic cells

3. **Paracortex (T Cell Zone)**
   - Fibroblastic reticular cell (FRC) network
   - CCL19, CCL21 production (CCR7 ligands)
   - Conventional DCs (cDC1, cDC2)
   - CD4+ and CD8+ T cells
   - Conduit system for small molecule transport

4. **High Endothelial Venules (HEVs)**
   - Cuboidal endothelium
   - Express peripheral node addressin (PNAd)
   - L-selectin (CD62L) on naive lymphocytes binds PNAd
   - CCL21 triggers integrin activation
   - LFA-1/ICAM-1 mediates firm adhesion and transmigration

5. **Medulla**
   - Medullary cords: Plasma cells, memory B cells, macrophages
   - Medullary sinuses: Lymph drainage
   - Site of plasma cell survival

**Cellular Dynamics:**

1. **Lymphocyte Entry**
   - Naive lymphocytes: Blood → HEV → parenchyma
   - Rolling (selectins) → Activation (chemokines) → Arrest (integrins) → Diapedesis
   - T cells: CCR7-dependent entry to T zone
   - B cells: CXCR5-dependent positioning in follicles

2. **Antigen Arrival**
   - Free antigens: Via conduit system (small) or subcapsular sinus macrophages
   - Cell-associated: Migratory DCs from tissues (12-24 hours)

3. **T Cell Activation**
   - DC-T cell interactions in paracortex
   - Stable conjugates form (immunological synapse)
   - Activated T cells upregulate CXCR5 (Tfh differentiation)

4. **B Cell Activation and Germinal Center Reaction**

   *Early Events:*
   - B cells encounter antigen at T-B border
   - Cognate T-B interaction
   - B cells can differentiate to:
     - Short-lived plasma cells (extrafollicular)
     - Germinal center B cells (enter follicle)

   *Germinal Center:*
   - Dark zone: CXCR4hi, proliferation, somatic hypermutation
   - Light zone: CXCR4lo, selection by Tfh and FDCs
   - Cyclic re-entry between zones
   - Output: Memory B cells, long-lived plasma cells

5. **Lymphocyte Exit**
   - S1P gradient (high in lymph, low in node)
   - S1PR1 on lymphocytes mediates egress
   - Exit via medullary sinuses → efferent lymphatic
   - FTY720 (fingolimod) blocks egress

**Stromal Cell Networks:**

1. **Fibroblastic Reticular Cells (FRCs)**
   - PDPN (podoplanin) positive
   - Produce ECM scaffold
   - Secrete CCL19, CCL21, IL-7
   - Form conduit system

2. **Follicular Dendritic Cells (FDCs)**
   - Non-hematopoietic origin
   - Trap immune complexes via complement receptors
   - Present native antigen to B cells
   - Produce CXCL13

3. **Marginal Reticular Cells (MRCs)**
   - At edge of follicles
   - Produce CXCL13
   - Source of FDCs`,
      keyTerms: [
        { term: 'germinal center', definition: 'Specialized structure where B cells undergo proliferation, somatic hypermutation, and selection to produce high-affinity antibodies' },
        { term: 'FDC', definition: 'Follicular dendritic cell; non-hematopoietic stromal cell that displays antigen-antibody complexes to B cells' },
        { term: 'Tfh cell', definition: 'T follicular helper cell; CD4+ T cell providing help to B cells in germinal centers via CD40L and IL-21' },
        { term: 'S1P', definition: 'Sphingosine-1-phosphate; lipid mediator that creates gradient guiding lymphocyte egress from lymphoid organs' },
        { term: 'conduit system', definition: 'Network of FRC-ensheathed collagen fibers transporting small molecules from subcapsular sinus to T zone' },
        { term: 'somatic hypermutation', definition: 'Process in germinal centers that introduces mutations in antibody genes to increase antigen affinity' },
      ],
      clinicalNotes: 'Lymphadenopathy patterns help localize disease: generalized suggests systemic illness (HIV, SLE, lymphoma); localized suggests regional infection or malignancy. Lymph node biopsy architecture guides lymphoma classification.',
    },
    4: {
      level: 4,
      summary: 'Lymph nodes function as immunological hubs where stromal cell-derived chemokine gradients, dendritic cell migration, and receptor-ligand interactions coordinate antigen-specific T and B cell activation, germinal center dynamics, and effector/memory cell differentiation.',
      explanation: `The lymph node represents an exquisitely organized microenvironment where compartmentalization, cellular trafficking, and molecular signals integrate to generate adaptive immune responses.

**Advanced Structural Considerations:**

1. **Stromal Cell Heterogeneity**

   *FRC Subsets:*
   - T zone FRCs (TRCs): CCL19/CCL21+, IL-7+
   - B zone FRCs: CXCL13+
   - Medullary FRCs: Distinct phenotype
   - Perivascular FRCs: Around HEVs

   *FRC Functions Beyond Scaffolding:*
   - Peripheral tolerance (present self-antigens)
   - Regulate lymphocyte survival (IL-7)
   - Control node expansion during immune responses
   - Produce extracellular matrix

2. **Conduit System**
   - FRC-ensheathed collagen fibers
   - Transports molecules <70 kDa
   - Delivers antigens, chemokines to T zone
   - DCs sample conduit contents
   - Excludes large antigens (require cellular transport)

3. **Lymph Node Expansion**
   - Activated lymphocytes proliferate
   - Node expands via FRC relaxation
   - CLEC-2 on DCs triggers FRC spreading (podoplanin interaction)
   - New HEVs form
   - Trapping increases (lymphocyte detention)

**Dendritic Cell Populations and Antigen Handling:**

1. **Resident DCs**
   - Enter via blood
   - Sample conduit-delivered antigens
   - cDC1 (XCR1+): Cross-presentation to CD8+
   - cDC2 (CD11b+): CD4+ T cell activation

2. **Migratory DCs**
   - Arrive via afferent lymphatics
   - Carry tissue-derived antigens
   - Upregulate CCR7 for T zone entry
   - Present processed antigens on MHC

3. **Antigen Archiving**
   - Subcapsular sinus macrophages capture particulates
   - Transfer intact antigen to B cells
   - FDCs retain immune complexes for months/years
   - Memory B cells access archived antigen

**Germinal Center Biology:**

1. **Initiation**
   - Activated B cells enter follicle
   - Require T cell help at T-B border
   - CD40-CD40L, ICOS-ICOSL signals
   - BCL6 upregulation commits to GC fate

2. **Dark Zone Dynamics**
   - CXCL12 production by dark zone FDCs
   - Centroblasts: CXCR4hi, Ki67+, dividing
   - AID expression → somatic hypermutation
   - 1 mutation per 10^3 bp per cell division

3. **Light Zone Selection**
   - CXCL13 attracts centrocytes (CXCR4lo CXCR5+)
   - Antigen capture from FDCs (complement receptors)
   - Present antigen to Tfh cells
   - Competition for Tfh help determines survival
   - High-affinity clones receive more help

4. **Fate Decisions**
   - Continued cycling: Return to dark zone
   - Memory B cell: CD38-, often non-switched
   - Plasma cell precursor: CD38+, Blimp1+
   - Output timing: Memory cells early, plasma cells later

5. **Quality Control**
   - Low-affinity cells undergo apoptosis
   - Autoreactive cells eliminated or edited
   - Tingible body macrophages clear debris

**T Follicular Helper Cell Biology:**

1. **Tfh Differentiation**
   - Activated CD4+ T cells at T-B border
   - BCL6 vs BLIMP1 balance
   - IL-6, IL-21 promote Tfh
   - ICOS signaling essential
   - Markers: CXCR5+, PD-1hi, ICOS+, BCL6+

2. **Tfh Function in GC**
   - Provide CD40L, IL-21, IL-4
   - Entropic selection of B cells
   - Limit help to ensure competition
   - Regulate output (memory vs plasma cell)

3. **T Follicular Regulatory Cells (Tfr)**
   - Foxp3+ cells entering follicle
   - CXCR5+, PD-1hi, ICOS+
   - Suppress excessive GC responses
   - Prevent autoimmunity

**Lymphocyte Recirculation Dynamics:**

1. **Entry Kinetics**
   - ~25% of circulating lymphocytes pass through node/day
   - Dwell time: 12-24 hours (if not activated)
   - Activated cells detained longer

2. **Egress Regulation**
   - S1PR1 downregulated on activation
   - CD69 promotes S1PR1 internalization
   - Allows prolonged antigen encounter
   - S1PR1 re-expression enables exit

3. **Chemokine-Guided Positioning**
   - CCR7: T zone homing
   - CXCR5: Follicle/GC homing
   - CXCR4: Dark zone positioning
   - Dynamic receptor modulation during responses`,
      keyTerms: [
        { term: 'dark zone', definition: 'Germinal center region where centroblasts proliferate and undergo somatic hypermutation' },
        { term: 'light zone', definition: 'Germinal center region where centrocytes are selected based on antigen affinity and T cell help' },
        { term: 'AID', definition: 'Activation-induced cytidine deaminase; enzyme mediating somatic hypermutation and class-switch recombination' },
        { term: 'Tfr cell', definition: 'T follicular regulatory cell; Foxp3+ cell that suppresses germinal center responses' },
        { term: 'affinity maturation', definition: 'Progressive increase in antibody affinity through cycles of mutation and selection in germinal centers' },
        { term: 'CD69', definition: 'Early activation marker that promotes lymphocyte retention by inhibiting S1PR1' },
      ],
      clinicalNotes: 'Germinal center-derived lymphomas (follicular, Burkitt, DLBCL) reflect transformation at different GC stages. Angioimmunoblastic T cell lymphoma derives from Tfh cells. FTY720 (fingolimod) causes lymphopenia by blocking S1P-mediated egress.',
    },
    5: {
      level: 5,
      summary: 'Lymph nodes are dynamic immunological organs where microanatomical compartments, stromal cell networks, and molecular gradients orchestrate adaptive immunity, with clinical relevance spanning infection, malignancy, autoimmunity, and transplant immunology.',
      explanation: `Understanding lymph node biology informs diagnostic approach to lymphadenopathy, lymphoma classification, vaccine design, and immunotherapy development.

**Advanced Immunological Concepts:**

1. **Antigen Fate and Presentation**

   *Small Soluble Antigens (<70 kDa):*
   - Enter via conduits
   - Directly access T zone
   - Sampled by resident DCs
   - Rapid responses possible

   *Particulate/Large Antigens:*
   - Captured by subcapsular sinus macrophages
   - Retained on cell surface
   - B cells acquire via complement receptors
   - Transferred to FDCs

   *Cell-Associated Antigens:*
   - Migratory DCs (12-24 hour transit)
   - Cross-presentation by cDC1s
   - Critical for anti-viral, anti-tumor responses

2. **Lymph Node Memory**

   *Memory B Cells:*
   - Reside in marginal sinus area
   - Rapidly respond to rechallenge
   - Can re-enter GC or become plasma cells

   *Long-Lived Plasma Cells:*
   - Generated late in GC response
   - Most migrate to bone marrow
   - Some persist in medullary cords
   - Continuous antibody production

   *Memory T Cells:*
   - Central memory: CCR7+ CD62L+, lymph node homing
   - Effector memory: CCR7- CD62L-, tissue homing
   - Tissue-resident memory: Remain in peripheral tissues

3. **Tolerance Mechanisms**

   *FRC-Mediated Tolerance:*
   - Express tissue-restricted antigens (AIRE-independent)
   - Delete or anergize autoreactive T cells
   - Contribute to peripheral tolerance

   *Regulatory T Cell Involvement:*
   - Tregs suppress in paracortex
   - Tfr cells regulate GC responses
   - Prevent autoantibody generation

**Clinical Correlations:**

1. **Lymphadenopathy Evaluation**

   *Clinical Approach:*
   - Location: Generalized vs regional
   - Duration: <2 weeks (reactive), >4 weeks (concerning)
   - Size: >1 cm generally concerning, location-dependent
   - Character: Tender (infectious), firm/fixed (malignancy)
   - Associated symptoms: B symptoms, weight loss

   *Regional Drainage Patterns:*
   - Cervical: Head and neck infections, lymphoma, metastatic
   - Axillary: Upper extremity, breast, melanoma
   - Inguinal: Lower extremity, genital, systemic
   - Supraclavicular: Concerning for malignancy (especially left-sided)
   - Mediastinal/hilar: Sarcoidosis, lymphoma, lung cancer, TB

   *Biopsy Indications:*
   - >4 weeks duration without clear etiology
   - Size >2 cm
   - Hard, fixed, or matted nodes
   - Supraclavicular location
   - Associated constitutional symptoms
   - Abnormal CBC, LDH, or imaging

2. **Lymph Node Pathology**

   *Reactive Patterns:*
   - Follicular hyperplasia: B cell zone expansion (rheumatoid arthritis, HIV, toxoplasma)
   - Paracortical hyperplasia: T cell zone expansion (viral infections, drug reactions)
   - Sinus histiocytosis: Expanded sinuses with macrophages (drainage from carcinoma)
   - Necrotizing: Kikuchi disease, SLE, infection
   - Granulomatous: Sarcoidosis, TB, fungal, cat-scratch disease

   *Malignant Patterns:*
   - Follicular architecture: Follicular lymphoma (BCL2+)
   - Diffuse effacement: DLBCL, metastatic carcinoma
   - Paracortical expansion: T cell lymphomas
   - Sinusoidal pattern: Anaplastic large cell lymphoma, metastatic melanoma

3. **Lymphoma Classification**

   *Germinal Center-Derived:*
   - Follicular lymphoma: t(14;18), BCL2
   - Burkitt lymphoma: MYC translocation
   - DLBCL GCB subtype: GC B cell origin

   *Post-GC/Marginal Zone:*
   - DLBCL ABC subtype: Activated B cell origin
   - Marginal zone lymphomas: MALT, nodal, splenic
   - Lymphoplasmacytic lymphoma: MYD88 mutation

   *T Cell Lymphomas:*
   - AITL: Tfh cell origin
   - PTCL-NOS: Heterogeneous
   - ALCL: CD30+, ALK+ or ALK-

4. **Immunotherapy Considerations**

   *Checkpoint Inhibitors:*
   - PD-1/PD-L1 blockade affects GC dynamics
   - Can cause autoimmune lymphadenitis
   - Response correlates with tumor-draining LN involvement

   *CAR-T Cell Therapy:*
   - Trafficking to lymph nodes important
   - LN involvement affects outcomes
   - Can cause lymph node inflammation

   *Vaccines:*
   - Draining lymph node is critical for response
   - Adjuvants target DC activation
   - Slow-release formulations enhance GC responses

5. **Lymphedema and Lymphatic Dysfunction**

   *Primary Lymphedema:*
   - Genetic lymphatic malformations
   - Milroy disease: VEGFR3 mutations
   - Often presents at birth or puberty

   *Secondary Lymphedema:*
   - Post-lymphadenectomy (breast cancer, melanoma)
   - Post-radiation fibrosis
   - Parasitic (filariasis)
   - Chronic infection

   *Management:*
   - Complete decongestive therapy
   - Compression garments
   - Microsurgical lymph node transfer
   - Lymphaticovenous anastomosis

**Research Frontiers:**

- Lymph node organoids for vaccine testing
- Tertiary lymphoid structures in tumors
- Engineered lymph node trafficking
- Single-cell atlases of human lymph nodes
- Spatial transcriptomics of germinal centers`,
      keyTerms: [
        { term: 'sentinel lymph node', definition: 'First lymph node(s) receiving drainage from a tumor site; biopsy used for staging' },
        { term: 'tertiary lymphoid structure', definition: 'Ectopic lymphoid tissue formed at sites of chronic inflammation or tumors' },
        { term: 'AITL', definition: 'Angioimmunoblastic T cell lymphoma; T cell lymphoma derived from Tfh cells with characteristic node architecture' },
        { term: 'Kikuchi disease', definition: 'Histiocytic necrotizing lymphadenitis; benign self-limited condition with cervical lymphadenopathy' },
        { term: 'sinus histiocytosis', definition: 'Lymph node pattern with distended sinuses containing macrophages; seen with carcinoma drainage' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Left supraclavicular node (Virchow): GI malignancy (via thoracic duct)
- Epitrochlear nodes: >0.5 cm abnormal; consider syphilis, HIV, lymphoma
- Sentinel node biopsy: Melanoma, breast cancer staging
- Follicular lymphoma: BCL2+ (t(14;18)), indolent, CD10+, BCL6+
- Burkitt lymphoma: "Starry sky" pattern (macrophages among sheets of tumor)
- Reactive vs lymphoma: Polyclonal vs monoclonal (flow cytometry kappa/lambda)
- Castleman disease: Hyaline vascular (localized) vs plasma cell (multicentric, HHV-8)
- Dermatopathic lymphadenopathy: Paracortical expansion with melanin-laden histiocytes`,
    },
  },

  media: [
    {
      id: 'lymph-node-structure',
      type: 'diagram',
      filename: 'lymph-node-structure.svg',
      title: 'Lymph Node Architecture',
      description: 'Cross-section showing cortex, paracortex, medulla, and vascular supply',
    },
    {
      id: 'germinal-center',
      type: 'diagram',
      filename: 'germinal-center.svg',
      title: 'Germinal Center Structure',
      description: 'Dark zone and light zone with cellular components',
    },
  ],
  citations: [
    {
      id: 'willard-mack-2006',
      type: 'article',
      title: 'Normal structure, function, and histology of lymph nodes',
      authors: ['Willard-Mack CL'],
      source: 'Toxicologic Pathology',
      url: 'https://doi.org/10.1080/01926230600867727',
    },
    {
      id: 'openstax-ap-ch21',
      type: 'textbook',
      title: 'The Lymphatic and Immune System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '21',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
    { targetId: 'system-lymphatic', targetType: 'system', relationship: 'parent', label: 'Lymphatic System' },
    { targetId: 'structure-spleen', targetType: 'structure', relationship: 'sibling', label: 'Spleen' },
    { targetId: 'process-germinal-center', targetType: 'pathway', relationship: 'related', label: 'Germinal Center Reaction' },
  ],
  tags: {
    systems: ['immune', 'lymphatic'],
    structures: ['FMA:5034'],
    topics: ['anatomy', 'physiology', 'immunology', 'histology'],
    keywords: ['lymph node', 'germinal center', 'lymphadenopathy', 'B cells', 'T cells', 'follicle'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology', 'surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lymphNodesContent;
