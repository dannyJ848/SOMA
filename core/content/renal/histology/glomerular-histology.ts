/**
 * Glomerular Histology - Histology Educational Content
 *
 * Covers the detailed microscopic structure of the glomerulus
 * including cells, basement membrane, and mesangium.
 */

import { EducationalContent } from '../../types';

export const glomerularHistology: EducationalContent = {
  id: 'histology-glomerular-histology',
  type: 'structure',
  name: 'Glomerular Histology',
  alternateNames: ['Renal Corpuscle', 'Glomerulus Microanatomy', 'Glomerular Ultrastructure'],

  levels: {
    1: {
      level: 1,
      summary: 'The glomerulus is a tiny ball of blood vessels in the kidney that filters blood to start making urine.',
      explanation: `The glomerulus is the kidney\'s filter. When you look at it under a microscope, it looks like a tangled ball of tiny blood vessels. This is where the blood first gets cleaned.

**What Makes Up a Glomerulus:**

1. **Tiny Blood Vessels (Capillaries)**
   - Like the thinnest spaghetti strands
   - Blood flows through these
   - Have tiny holes (pores) that let fluid out

2. **The Filter Barrier (Three Layers)**
   - Inside layer: Blood vessel cells with holes
   - Middle layer: Mesh-like material (basement membrane)
   - Outside layer: Special cells with "feet" (podocytes)

3. **Support Cells (Mesangium)**
   - Cells that hold everything together
   - Like the frame of a tent
   - Clean up debris

4. **The Cup (Bowman\'s Capsule)**
   - Surrounds the glomerulus like a baseball glove
   - Collects the filtered fluid

The glomerulus is incredibly selective - it lets water and small things through but keeps blood cells and big proteins in the blood. This filtered fluid then travels down the tubule to become urine.`,
      keyTerms: [
        { term: 'glomerulus', definition: 'The ball of capillaries in the kidney where blood is filtered' },
        { term: 'capillary', definition: 'The smallest type of blood vessel' },
        { term: 'podocyte', definition: 'Special cells with foot-like projections that wrap around capillaries' },
        { term: 'basement membrane', definition: 'A thin layer that acts as a filter between structures' },
        { term: 'mesangium', definition: 'The structural support cells in the middle of the glomerulus' },
      ],
      analogies: [
        'The glomerulus is like a coffee filter - it lets the liquid through but keeps the grounds behind.',
        'Podocytes are like octopus tentacles wrapping around the capillaries with their suckers.',
        'The three-layer filter is like a security checkpoint with three different ID checks.',
      ],
      examples: [
        'Each kidney has about one million glomeruli.',
        'The basement membrane is only about 300 nanometers thick - that is super thin!',
        'Podocytes have about 1,000 foot processes each that interlock like fingers.',
      ],
    },
    2: {
      level: 2,
      summary: 'The glomerulus consists of a tuft of fenestrated capillaries supported by mesangial cells, enclosed by Bowman\'s capsule, with filtration occurring across the specialized three-layer glomerular filtration barrier.',
      explanation: `**Components of the Glomerulus:**

**Capillary Tuft:**
- 4-8 lobules of capillaries
- Afferent arteriole enters
- Efferent arteriole exits
- Fenestrated endothelium (70-100 nm pores)
- No diaphragm across fenestrae

**Glomerular Filtration Barrier (Three Layers):**

1. **Fenestrated Endothelium:**
   - Lines capillary lumen
   - Pores allow plasma passage
   - Glycocalyx (negatively charged)

2. **Glomerular Basement Membrane (GBM):**
   - Trilaminar structure
   - Type IV collagen, laminin, heparan sulfate
   - Provides size and charge barrier

3. **Podocytes (Visceral Epithelium):**
   - Line outer aspect of capillaries
   - Cell body, primary processes, foot processes
   - Filtration slits between foot processes
   - Slit diaphragm bridges slits

**Bowman\'s Capsule:**
- **Parietal layer:** Simple squamous epithelium
- **Visceral layer:** Podocytes (continuous with PCT)
- **Bowman\'s space:** Collects filtrate
- **Vascular pole:** Arteriole entry/exit
- **Urinary pole:** Continuation with PCT

**Mesangium:**
- **Mesangial cells:** Modified smooth muscle cells
- **Mesangial matrix:** Extracellular matrix
- Provides structural support
- Phagocytic function
- Contractile (regulates filtration surface area)

**Juxtaglomerular Apparatus:**
- Macula densa: DCT cells adjacent to hilum
- JG cells: Modified smooth muscle in afferent arteriole
- Extraglomerular mesangial cells`,
      keyTerms: [
        { term: 'fenestrated', definition: 'Having pores or openings; describes glomerular capillary endothelium' },
        { term: 'slit diaphragm', definition: 'Protein bridge between adjacent podocyte foot processes' },
        { term: 'glycocalyx', definition: 'Carbohydrate-rich surface coating; negatively charged on endothelium' },
        { term: 'afferent arteriole', definition: 'Blood vessel bringing blood into the glomerulus' },
        { term: 'efferent arteriole', definition: 'Blood vessel carrying blood away from the glomerulus' },
      ],
      analogies: [
        'The glomerular basement membrane is like a fine mesh screen in a water filter.',
        'Podocyte foot processes are like interlocking fingers from two hands - the gaps between fingers are the filtration slits.',
        'Mesangial cells are like the scaffolding crew at a construction site - they provide support and clean up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Glomerular ultrastructure reveals specialized molecular components including type IV collagen networks, slit diaphragm proteins, and charge-selective barriers that maintain selective permeability while allowing high-volume filtration.',
      explanation: `**Glomerular Basement Membrane (GBM):**

**Composition:**
- Type IV collagen: α3α4α5 network (unique to GBM)
- Laminin-521 (α5β2γ1)
- Nidogen-1 and nidogen-2
- Heparan sulfate proteoglycans (perlecan, agrin)

**Trilaminar Structure:**
- **Lamina rara interna:** Adjacent to endothelium; 20-40 nm
- **Lamina densa:** Central dense layer; 200-240 nm
- **Lamina rara externa:** Adjacent to podocytes; 20-40 nm
- Total thickness: 300-350 nm

**Functions:**
- Size barrier
- Charge barrier (negative from heparan sulfate)
- Structural scaffold

**Podocyte Ultrastructure:**

**Cell Body:**
- Contains nucleus, organelles
- Faces Bowman\'s space

**Primary Processes:**
- Extend from cell body
- Branch into foot processes

**Foot Processes (Pedicels):**
- Interdigitate with adjacent podocyte processes
- 25-60 nm filtration slits between them
- Rest directly on GBM

**Slit Diaphragm Proteins:**
- **Nephrin (NPHS1):** Transmembrane protein, zipper-like structure
- **Podocin (NPHS2):** Lipid raft-associated, recruits nephrin
- **CD2AP:** Cytoskeletal linker
- **TRPC6:** Calcium channel, mechanosensation
- **Nephrin-like proteins:** NEPH1, NEPH2
- **P-cadherin:** Adhesion
- **MAGII:** Signaling scaffold

**Endothelial Features:**

**Fenestrae:**
- 70-100 nm diameter
- 15-20% of surface area
- No diaphragm (unlike other fenestrated endothelium)
- Facilitate high-volume filtration

**Glycocalyx:**
- Negatively charged glycoproteins
- Charge barrier function
- Includes podocalyxin

**Mesangial Cell Features:**

**Contractile Properties:**
- Actin and myosin filaments
- Regulate capillary surface area
- Respond to vasoactive agents

**Matrix Production:**
- Type IV collagen (α1α2)
- Fibronectin
- Laminin

**Phagocytic Function:**
- Clear debris from mesangium
- Remove trapped immune complexes

**Capillary Hemodynamics:**
- High pressure (45-60 mmHg)
- High filtration fraction (20%)
- Maintained by afferent/efferent arteriole resistance`,
      keyTerms: [
        { term: 'perlecan', definition: 'Heparan sulfate proteoglycan in GBM; contributes to charge barrier' },
        { term: 'podocalyxin', definition: 'Sialomucin on podocyte surface; maintains foot process architecture' },
        { term: 'lipid raft', definition: 'Membrane microdomain rich in cholesterol and sphingolipids; where podocin localizes' },
        { term: 'mechanosensation', definition: 'Cellular sensing of mechanical forces; TRPC6 functions in podocytes' },
        { term: 'filtration slit', definition: 'Gap between adjacent podocyte foot processes bridged by slit diaphragm' },
      ],
      clinicalNotes: 'Mutations in type IV collagen genes cause Alport syndrome (α5 chain) and thin basement membrane disease. Nephrin and podocin mutations cause congenital nephrotic syndrome. TRPC6 mutations cause familial focal segmental glomerulosclerosis.',
    },
    4: {
      level: 4,
      summary: 'Clinical-pathological correlations of glomerular histology include recognition of immune complex deposition patterns, podocyte injury markers, genetic mutations affecting glomerular proteins, and histological patterns of glomerular disease.',
      explanation: `**Histological Patterns of Glomerular Disease:**

**Minimal Change Disease:**
- Light microscopy: Normal glomeruli
- EM: Diffuse foot process effacement
- IF: Negative
- Selective proteinuria

**Focal Segmental Glomerulosclerosis (FSGS):**
- Segmental collapse/sclerosis
- Adhesions to Bowman\'s capsule
- Podocyte injury
- Tip lesion, collapsing, cellular variants

**Membranous Nephropathy:**
- Diffuse capillary wall thickening
- "Spike" formation (JMS stain)
- Subepithelial deposits on EM
- PLA2R or THSD7A positive in primary MN

**Proliferative Glomerulonephritis:**
- Increased cellularity (mesangial, endocapillary)
- Neutrophil infiltration
- Crescent formation (extracapillary proliferation)

**Membranoproliferative GN:**
- Lobular accentuation
- Double contours ("tram track")
- Mesangial and subendothelial deposits

**Light Chain Deposition Disease:**
- Nodular glomerulosclerosis (similar to diabetic)
- Linear staining for light chains on IF
- Powdery deposits on EM

**Amyloidosis:**
- Nodular deposits
- Congo red positive (apple-green birefringence)
- Fibrillar structure on EM (8-10 nm)

**Immunofluorescence Patterns:**

**Linear:**
- Smooth, continuous staining
- Anti-GBM disease
- Light chain deposition disease

**Granular:**
- Lumpy-bumpy pattern
- Immune complex deposition
- Membranous, post-infectious, lupus

**Mesangial:**
- IgA nephropathy
- Mesangial proliferative GN

**Electron Microscopy Findings:**

**Deposits:**
- **Subepithelial:** Membranous, early post-infectious
- **Subendothelial:** Lupus, MPGN, thrombotic microangiopathy
- **Mesangial:** IgA nephropathy
- **Intramembranous:** Dense deposit disease (C3), Alport

**Podocyte Injury:**
- Foot process effacement
- Microvillous transformation
- Detachment from GBM
- Hypertrophy/hyperplasia

**Endothelial Injury:**
- Swelling
- Loss of fenestrae
- New basement membrane formation (double contours)

**Tubuloreticular Inclusions:**
- Endoplasmic reticulum structures
- Interferon effect
- Seen in lupus, HIV nephropathy

**Genetic Diseases on Biopsy:**

**Alport Syndrome:**
- Thinning, splitting, lamellation of GBM
- Loss of α5(IV) staining on IF
- EM: "Basket weave" pattern

**Fabry Disease:**
- Podocyte inclusions (zebra bodies)
- Electron-dense lamellated inclusions
- α-galactosidase deficiency

**Congenital Nephrotic Syndrome:**
- Finnish type (NPHS1): Absent nephrin
- Diffuse mesangial sclerosis (NPHS2): Podocin mutations

**Collapsing Glomerulopathy:**
- Global capillary collapse
- Podocyte hyperplasia
- Associated with HIV, APOL1 variants, pamidronate`,
      keyTerms: [
        { term: 'foot process effacement', definition: 'Flattening and retraction of podocyte foot processes; loss of discrete processes visible on EM' },
        { term: 'double contours', definition: 'Duplication of GBM visible on silver stains; indicates new basement membrane formation' },
        { term: 'spike formation', definition: 'Projections of basement membrane between immune deposits in membranous nephropathy' },
        { term: 'crescent', definition: 'Accumulation of cells in Bowman\'s space; extracapillary proliferation' },
        { term: 'nodular glomerulosclerosis', definition: 'Nodular mesangial expansion; seen in diabetes and light chain deposition' },
      ],
      clinicalNotes: 'The pattern of immune deposition on IF and EM localization (subepithelial, subendothelial, mesangial) is key to diagnosis. PLA2R staining on biopsy distinguishes primary from secondary membranous nephropathy. APOL1 risk variants explain much of the excess FSGS in African Americans.',
    },
    5: {
      level: 5,
      summary: 'Advanced glomerular pathology encompasses molecular diagnostics, quantitative morphometry, integration of genetic testing, biomarker development, and precision medicine approaches to glomerular disease classification and treatment.',
      explanation: `**Molecular Diagnostics in Glomerular Disease:**

**Autoantigen Identification:**
- PLA2R (phospholipase A2 receptor): 70% of primary membranous
- THSD7A (thrombospondin type-1 domain-containing 7A): 5-10% of primary MN
- Exostosin 1/2: Membranous associated with malignancy
- Semaphorin 3B: Pediatric membranous

**Genetic Testing Integration:**
- Panel testing for steroid-resistant nephrotic syndrome
- Whole exome sequencing for familial cases
- COL4A3/4/5 for Alport and TBMN
- APOL1 genotyping in African ancestry patients
- WT1 mutations (Denys-Drash, Frasier)

**Biomarker Development:**

**Serum Biomarkers:**
- Anti-PLA2R antibody titer: Diagnosis, monitoring, prognosis in MN
- Soluble urokinase receptor (suPAR): FSGS marker
- CD80 (B7-1): Minimal change disease activity

**Urinary Biomarkers:**
- Podocalyxin: Podocyte injury
- Nephrin: Podocyte damage
- Beta-2 microglobulin: Tubular function
- MCP-1: Inflammation

**Tissue Biomarkers:**
- KIM-1: Proximal tubule injury
- mTOR activation markers: Disease progression
- Complement activation products

**Precision Medicine Approaches:**

**Rituximab in Membranous:**
- PLA2R-positive: Better response
- Monitor antibody titers to guide therapy

**ACTH in Membranous:**
- Melanocortin receptors on podocytes
- Alternative to immunosuppression

**SGLT2 Inhibitors:**
- Cardiorenal protection beyond glucose
- Podocyte effects

**Quantitative Glomerular Morphometry:**

**Podocyte Assessment:**
- Podocyte number per glomerulus (WT-1 staining)
- Podocyte density (per glomerular volume)
- Foot process width measurement
- Glomerular volume

**Image Analysis:**
- Computer-assisted stereology
- Machine learning for glomerular identification
- Automated cell counting

**Digital Pathology:**
- Whole slide scanning
- AI-assisted diagnosis
- Remote consultation

**Research Techniques:**

**Laser Capture Microdissection:**
- Isolate specific cell types
- Gene expression analysis
- Proteomic studies

**Single-Cell RNA Sequencing:**
- Podocyte transcriptome
- Disease-specific signatures
- Therapeutic targets

**Spatial Transcriptomics:**
- Location-specific gene expression
- Glomerular vs interstitial changes

**Clinical Trial Endpoints:**

**Histological Endpoints:**
- Complete remission on biopsy
- Reduction in chronicity indices
- Regression of fibrosis

**Composite Endpoints:**
- Histology + proteinuria + eGFR
- Kidney failure risk prediction

**Emerging Classifications:**

**Oxford Classification Updates:**
- IgA nephropathy: MEST-C score
- FSGS: Columbia classification
- Lupus: ISN/RPS classification revisions

**Molecular Classification:**
- Transcriptomic signatures
- Proteomic patterns
- Integration with traditional histology`,
      keyTerms: [
        { term: 'PLA2R', definition: 'Phospholipase A2 receptor; autoantigen in most primary membranous nephropathy' },
        { term: 'suPAR', definition: 'Soluble urokinase-type plasminogen activator receptor; biomarker associated with FSGS' },
        { term: 'MEST-C score', definition: 'Oxford classification for IgA nephropathy: Mesangial, Endocapillary, Segmental sclerosis, Tubular atrophy, Crescents' },
        { term: 'laser capture microdissection', definition: 'Technique to isolate specific cells from tissue sections for molecular analysis' },
        { term: 'spatial transcriptomics', definition: 'Method to map gene expression within tissue sections preserving location information' },
      ],
      clinicalNotes: `Advanced glomerular pathology pearls:
1. Anti-PLA2R antibody monitoring is standard of care in membranous nephropathy - titers predict relapse and guide immunosuppression duration
2. APOL1 high-risk genotype in African Americans explains much of the excess FSGS and hypertensive ESRD; important for genetic counseling
3. Single-cell RNA sequencing is revealing distinct podocyte states in disease vs health
4. suPAR is a promising biomarker for FSGS but not yet validated for clinical decision-making
5. Quantitative podocyte depletion (not just foot process effacement) predicts progression in many glomerular diseases
6. Integration of molecular diagnostics (PLA2R, genetics) with traditional histology is the future of glomerular disease classification`,
    },
  },

  media: [
    {
      id: 'glomerulus-em',
      type: 'histology',
      filename: 'glomerulus-electron-microscopy.jpg',
      title: 'Glomerulus Electron Micrograph',
      description: 'Transmission EM showing podocytes, GBM, and endothelium',
    },
  ],

  citations: [
    {
      id: 'salant-glomerulus',
      type: 'article',
      title: 'The Glomerulus: Anatomy and Histology',
      source: 'Journal of the American Society of Nephrology',
    },
    {
      id: 'beck-podocyte',
      type: 'article',
      title: 'Molecular Architecture of the Glomerular Podocyte',
      source: 'Annual Review of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'histology-nephron-structure', targetType: 'structure', relationship: 'sibling', label: 'Nephron Histology' },
    { targetId: 'pathology-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis' },
  ],

  tags: {
    systems: ['renal'],
    structures: ['FMA:74038'],
    topics: ['histology', 'pathology'],
    keywords: ['glomerulus', 'podocyte', 'basement membrane', 'histology', 'ultrastructure'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default glomerularHistology;
