/**
 * Nephron Structure - Histology Educational Content
 *
 * Covers the histological features of nephron segments from
 * glomerulus through collecting duct.
 */

import { EducationalContent } from '../../types';

export const nephronStructureHistology: EducationalContent = {
  id: 'histology-nephron-structure',
  type: 'structure',
  name: 'Nephron Histology',
  alternateNames: ['Renal Tubule Histology', 'Nephron Segments', 'Kidney Microanatomy'],

  levels: {
    1: {
      level: 1,
      summary: 'The nephron is a microscopic tube in the kidney with different parts that each have special jobs in making urine.',
      explanation: `When you look at a kidney under a microscope, you see millions of tiny tubes called nephrons. Each nephron has different sections that look different because they do different jobs.

**The Main Parts You Can See:**

1. **The Filter (Glomerulus)**
   - Looks like a ball of tangled yarn
   - Made of tiny blood vessels
   - This is where blood gets filtered

2. **The First Tube (Proximal Tubule)**
   - Looks fuzzy under the microscope
   - The fuzz is tiny hairs that absorb good stuff back into blood
   - Like a fuzzy pipe

3. **The Loop (Loop of Henle)**
   - Looks like a hairpin bend
   - Different thickness in different parts
   - Helps concentrate urine

4. **The Second Tube (Distal Tubule)**
   - Cleaner looking, less fuzzy
   - Does fine-tuning of what stays in urine

5. **The Final Tube (Collecting Duct)**
   - Clear cells that look different from the rest
   - Decides the final urine concentration

Each part has special cells designed for its job. Some look fuzzy to absorb things, some look thin to let water through, and some have special shapes to pump chemicals.`,
      keyTerms: [
        { term: 'nephron', definition: 'The microscopic filtering tube in the kidney' },
        { term: 'glomerulus', definition: 'The ball of blood vessels where filtering begins' },
        { term: 'tubule', definition: 'A tiny tube that carries filtered fluid' },
        { term: 'microscope', definition: 'A tool that makes tiny things look bigger' },
        { term: 'cells', definition: 'The tiny building blocks of all living things' },
      ],
      analogies: [
        'Looking at nephron sections is like looking at cross-sections of a garden hose - different parts look different inside.',
        'The fuzzy appearance of the proximal tubule is like a shag carpet - all those fibers increase surface area.',
        'The loop of Henle is like a U-shaped bend in a river - it creates different conditions on each side.',
      ],
      examples: [
        'A kidney has about one million nephrons, each about 3 centimeters long if stretched out.',
        'Under a microscope, the proximal tubule looks darker than other parts because of all the fuzzy microvilli.',
        'The glomerulus looks like a bunch of grapes clustered together in histology slides.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nephron histology reveals distinct cellular architecture in each segment, with specialized structures for filtration, reabsorption, secretion, and concentration reflected in epithelial cell type and organization.',
      explanation: `**Glomerulus:**
- Tuft of fenestrated capillaries
- Surrounded by Bowman\'s capsule
- Three layers: Fenestrated endothelium, basement membrane, podocytes
- Mesangial cells provide support

**Proximal Tubule:**
- Lined by simple cuboidal epithelium
- Prominent brush border (microvilli) on apical surface
- Extensive basal infoldings
- Eosinophilic cytoplasm (pink staining)
- Reabsorbs 65-70% of filtered load

**Loop of Henle:**

**Thin Descending Limb:**
- Simple squamous epithelium
- Flattened cells
- Permeable to water

**Thin Ascending Limb:**
- Simple squamous epithelium
- Flattened cells
- Impermeable to water

**Thick Ascending Limb:**
- Simple cuboidal epithelium
- No brush border
- Contains macula densa

**Distal Convoluted Tubule:**
- Simple cuboidal epithelium
- Shorter than PCT
- Less prominent basal infoldings
- No brush border
- Lighter staining than PCT

**Collecting Duct:**
- Lined by simple cuboidal to columnar epithelium
- Two cell types: Principal and intercalated cells
- Clear cell borders
- Passes from cortex to medulla

**Juxtaglomerular Apparatus:**
- Macula densa: Specialized DCT cells
- Juxtaglomerular cells: Modified smooth muscle
- Lacis cells: Extraglomerular mesangial cells`,
      keyTerms: [
        { term: 'epithelium', definition: 'Tissue that lines surfaces and cavities; forms tubules', pronunciation: 'ep-ih-THEE-lee-um' },
        { term: 'cuboidal', definition: 'Cube-shaped cells' },
        { term: 'squamous', definition: 'Flat, scale-like cells' },
        { term: 'brush border', definition: 'Microvilli on cell surface that increase surface area' },
        { term: 'eosinophilic', definition: 'Pink staining with H&E dye; indicates protein-rich cytoplasm' },
      ],
      analogies: [
        'The brush border is like a carpet of tiny fingers reaching into the tubule to grab nutrients.',
        'Basal infoldings are like basement shelves that store machinery for pumping substances.',
        'Podocytes are like octopus tentacles wrapping around capillaries with their foot processes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nephron histology demonstrates segment-specific ultrastructural adaptations including fenestrated endothelium, specialized intercellular junctions, and distinctive cytoplasmic organelle distribution reflecting specialized transport functions.',
      explanation: `**Glomerular Histology:**

**Fenestrated Endothelium:**
- Large pores (fenestrae): 70-100 nm diameter
- No diaphragm in kidney (unlike other fenestrated capillaries)
- Glycocalyx coating (negatively charged)

**Glomerular Basement Membrane (GBM):**
- 300-350 nm thick
- Trilaminar: Lamina rara interna, lamina densa, lamina rara externa
- Type IV collagen (α3α4α5), laminin, nidogen, heparan sulfate

**Podocytes (Visceral Epithelium):**
- Cell body, major processes, foot processes (pedicels)
- Filtration slits: 25-60 nm gaps between pedicels
- Slit diaphragm: Modified adherens junction
- Key proteins: Nephrin, podocin, CD2AP

**Mesangium:**
- Mesangial cells: Modified smooth muscle
- Mesangial matrix: Similar to GBM but more cellular
- Phagocytic and contractile functions

**Proximal Tubule Ultrastructure:**

**Apical Surface:**
- Microvilli: 1 μm long, densely packed
- Surface area increased 20-fold
- Glycocalyx covers microvilli

**Lateral Cell Borders:**
- Extensive interdigitations with adjacent cells
- Lateral cell membrane folds interlock

**Basal Surface:**
- Deep infoldings of plasma membrane
- Mitochondria packed in infoldings
- Na+/K+-ATPase abundant

**Organelles:**
- Abundant mitochondria (energy for transport)
- Well-developed endoplasmic reticulum
- Lysosomes for protein processing

**Loop of Henle:**

**Thin Limbs:**
- Tight junctions with high resistance
- Few mitochondria (passive transport)
- Aquaporin-1 in descending limb

**Thick Ascending Limb:**
- Taller cuboidal cells
- Prominent mitochondria
- Na-K-2Cl cotransporter (NKCC2)
- Impermeable to water

**Distal Convoluted Tubule:**
- Shorter cells than PCT
- Moderate mitochondria
- Na-Cl cotransporter (NCC)
- Ca2+ sensing and transport

**Collecting Duct:**

**Principal Cells:**
- Light cytoplasm
- Sparse microvilli
- Aquaporin-2 (ADH-regulated)
- ENaC channels

**Intercalated Cells:**
- Dark cytoplasm
- Two types: A (α) and B (β)
- Apical microfolds (A cells)
- H+-ATPase, H+/K+-ATPase`,
      keyTerms: [
        { term: 'fenestrae', definition: 'Pores in capillary endothelium that allow fluid filtration', pronunciation: 'feh-NES-tree' },
        { term: 'pedicel', definition: 'Foot process of podocyte that interdigitates with adjacent pedicels', pronunciation: 'PED-ih-sel' },
        { term: 'glycocalyx', definition: 'Carbohydrate-rich layer on cell surface; negatively charged in glomerulus' },
        { term: 'interdigitation', definition: 'Interlocking of cell membrane folds between adjacent cells' },
        { term: 'macula densa', definition: 'Specialized plaque of distal tubule cells adjacent to glomerular hilum' },
      ],
      clinicalNotes: 'The S3 segment of the proximal tubule (pars recta) is particularly vulnerable to ischemic injury due to its location in the outer medulla. Podocyte foot process effacement seen on electron microscopy is the hallmark of minimal change disease.',
    },
    4: {
      level: 4,
      summary: 'Advanced nephron histology includes understanding of specialized cell junctions, molecular markers, segment-specific gene expression patterns, and histopathological correlates of nephron segment injury.',
      explanation: `**Specialized Cell Junctions:**

**Slit Diaphragm (Podocytes):**
- Modified adherens junction
- Proteins: Nephrin (NPHS1), Podocin (NPHS2), CD2AP, TRPC6
- Forms zipper-like structure between foot processes
- Critical for size and charge selectivity

**Tight Junctions:**
- Vary in "tightness" along nephron
- Claudin proteins determine permeability
- Claudin-2: Cation-selective (proximal tubule)
- Claudin-16 (paracellin-1): TAL, Mg2+ permeability

**Gap Junctions:**
- Couple cells electrically and metabolically
- Connexins form channels
- Important in juxtaglomerular apparatus signaling

**Segment-Specific Markers:**

**Proximal Tubule:**
- CD13 (aminopeptidase N): Apical membrane
- CD10 (neprilysin): Brush border
- Aquaporin-1: Apical and basolateral
- Villin: Brush border

**Thick Ascending Limb:**
- Tamm-Horsfall protein (uromodulin): Apical membrane
- NKCC2: Apical membrane
- ROMK: Apical membrane

**Distal Convoluted Tubule:**
- NCC: Apical membrane
- Parvalbumin: Cytoplasmic
- Calbindin-D28k: Calcium-binding

**Collecting Duct:**
- Aquaporin-2: Principal cells, ADH-regulated
- H+-ATPase: Intercalated cells
- AE1 (band 3): A-intercalated cells
- Pendrin: B-intercalated cells

**Histopathological Correlates:**

**Acute Tubular Necrosis (ATN):**
- S3 segment most vulnerable
- Loss of brush border
- Nuclear pyknosis, loss
- Tubular dilation
- Flattened epithelium
- Casts in lumen

**Acute Interstitial Nephritis (AIN):**
- Interstitial inflammation
- Eosinophils (drug-induced)
- Tubulitis (inflammatory cells infiltrating tubules)

**Light Chain Cast Nephropathy:**
- Fractured, "brittle" casts in distal tubules
- Multinucleated giant cell reaction
- Associated with multiple myeloma

**Histochemical Stains:**

**Periodic Acid-Schiff (PAS):**
- Stains carbohydrates magenta
- Highlights GBM, brush borders
- Good for basement membrane evaluation

**Jones Methenamine Silver (JMS):**
- Stains basement membranes black
- Excellent for glomerular architecture
- "Spikes" in membranous nephropathy
- "Double contours" in membranoproliferative GN

**Trichrome Stains:**
- Collagen stains blue/green
- Helps identify fibrosis
- Interstitial fibrosis and tubular atrophy (IFTA)

**Immunofluorescence Patterns:**

**Granular:**
- Immune complex deposition
- Examples: Membranous, post-infectious GN

**Linear:**
- Anti-GBM antibodies
- Example: Goodpasture\'s syndrome

**Negative:**
- No immune deposits
- Examples: ANCA vasculitis, minimal change disease`,
      keyTerms: [
        { term: 'tight junction', definition: 'Cell-cell junction that seals paracellular pathway; varies in permeability by nephron segment' },
        { term: 'nephrin', definition: 'Key structural protein of slit diaphragm; mutations cause congenital nephrotic syndrome' },
        { term: 'tubulitis', definition: 'Inflammatory cells infiltrating tubular epithelium; hallmark of acute cellular rejection' },
        { term: 'IFTA', definition: 'Interstitial fibrosis and tubular atrophy; chronic injury pattern in kidney biopsies' },
        { term: 'JMS stain', definition: 'Jones methenamine silver stain; highlights basement membranes in black' },
      ],
      clinicalNotes: 'Electron microscopy is essential for diagnosing many glomerular diseases. Foot process effacement is quantified as percentage of glomerular capillary loops affected. Immunofluorescence is mandatory for all native kidney biopsies to identify immune complex deposition patterns.',
    },
    5: {
      level: 5,
      summary: 'Expert-level nephron histology encompasses quantitative morphometry, correlation with functional studies, role of biopsy in clinical trials, digital pathology applications, and emerging molecular techniques for kidney tissue analysis.',
      explanation: `**Quantitative Morphometry:**

**Glomerular Morphometry:**
- Glomerular volume measurement
- Podocyte number and density
- Foot process width quantification
- Mesangial volume fraction
- Image analysis software applications

**Tubulointerstitial Morphometry:**
- Percentage cortical fibrosis
- Tubular atrophy scoring
- Volumetric analysis
- Computer-assisted quantification

**Podocyte Quantification:**
- Podocyte number per glomerulus
- Podocyte density (per glomerular volume)
- Podocyte depletion correlates with progression
- Wilms\' tumor-1 (WT-1) immunostaining for podocyte nuclei

**Advanced Biopsy Evaluation:**

**Ultrastructural Assessment:**
- GBM thickness measurement (normal: 300-350 nm)
- Electron-dense deposits characterization:
  - Subepithelial (membranous)
  - Subendothelial (lupus, MPGN)
  - Mesangial (IgA nephropathy)
- Tubuloreticular inclusions (interferon signature)

**Immunohistochemistry:**
- Complement components (C3, C4d, C5b-9)
- Light chains (kappa, lambda restriction)
- PLA2R (membranous nephropathy antigen)
- THSD7A (secondary MN antigen)

**In Situ Hybridization:**
- BK virus detection
- CMV detection
- Gene expression localization

**Molecular Pathology:**

**Genetic Testing Integration:**
- Alport syndrome: COL4A3, COL4A4, COL4A5
- Thin basement membrane disease
- Congenital nephrotic syndrome (NPHS1, NPHS2)
- Fabry disease (GLA)

**Transcriptomics:**
- Single-cell RNA sequencing
- Spatial transcriptomics
- Kidney Precision Medicine Project

**Biomarkers on Biopsy:**
- KIM-1 (kidney injury molecule-1): Proximal tubule injury
- L-FABP: Tubular injury marker
- NGAL: Neutrophil gelatinase-associated lipocalin

**Clinical Trial Applications:**

**Banff Classification Updates:**
- International standard for allograft pathology
- Evolving criteria for antibody-mediated rejection
- Molecular diagnostics integration (iPT score)

**Repeat Biopsy Studies:**
- Protocol biopsies in clinical trials
- Histological vs clinical endpoints
- Sample size calculations for trials

**Digital Pathology:**

**Whole Slide Imaging:**
- Digital slide scanning
- Telepathology applications
- Archival and retrieval systems

**Artificial Intelligence:**
- Machine learning for glomerular detection
- Automated scoring systems
- Predictive models for progression
- Quality assurance applications

**Quality Control:**
- Adequacy criteria:
  - Minimum 10 glomeruli for native kidney
  - Arteries for vascular assessment
  - Cortex and medulla
- Sample handling protocols
- Fixation requirements

**Specialized Biopsy Techniques:**

**Immunoelectron Microscopy:**
- Immune deposit ultrastructural localization
- Research applications

**Frozen Section Evaluation:**
- Transplant procurement biopsies
- Margin assessment
- Immediate evaluation

**Research Applications:**
- Tissue biobanking
- Multiplex immunofluorescence
- Laser capture microdissection
- Proteomic analysis of kidney tissue`,
      keyTerms: [
        { term: 'morphometry', definition: 'Quantitative measurement of structure; used to assess kidney biopsy changes over time' },
        { term: 'foot process effacement', definition: 'Flattening of podocyte foot processes; measured as percentage of capillary loops affected' },
        { term: 'electron-dense deposits', definition: 'Immune deposits visible on electron microscopy; location determines diagnosis' },
        { term: 'iPT score', definition: 'Inflammatory gene expression in paraffin-embedded tissue; molecular classifier for rejection' },
        { term: 'digital pathology', definition: 'Use of digital slides and AI for pathological diagnosis and quantification' },
      ],
      clinicalNotes: `Expert biopsy interpretation pearls:
1. Podocyte depletion (not just foot process effacement) predicts progression in many glomerular diseases
2. Immunofluorescence for PLA2R confirms primary membranous nephropathy vs secondary; affects treatment decisions
3. C4d staining on IF or IHC indicates complement activation; important for antibody-mediated rejection diagnosis
4. "Full house" staining (IgG, IgA, IgM, C3, C1q) on IF suggests lupus nephritis
5. Repeat biopsy in clinical trials should assess for regression of fibrosis, not just stability
6. Digital pathology with AI assistance is emerging for automated glomerular counting and chronicity scoring`,
    },
  },

  media: [
    {
      id: 'nephron-histology',
      type: 'histology',
      filename: 'nephron-segments-histology.jpg',
      title: 'Nephron Segment Histology',
      description: 'H&E stained sections showing different nephron segments',
    },
  ],

  citations: [
    {
      id: 'jennette-pathology',
      type: 'textbook',
      title: 'Heptinstall\'s Pathology of the Kidney',
      authors: ['Jennette, J.C.'],
      source: 'Lippincott Williams & Wilkins',
    },
    {
      id: 'banff-schema',
      type: 'article',
      title: 'Banff Classification of Allograft Pathology',
      source: 'American Journal of Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'related', label: 'Nephron Structure' },
    { targetId: 'histology-glomerular-histology', targetType: 'structure', relationship: 'related', label: 'Glomerular Histology' },
    { targetId: 'histology-renal-tubules', targetType: 'structure', relationship: 'related', label: 'Renal Tubules' },
  ],

  tags: {
    systems: ['renal'],
    structures: ['FMA:17640'],
    topics: ['histology', 'anatomy', 'pathology'],
    keywords: ['nephron', 'histology', 'microscopy', 'kidney', 'tubule'],
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

export default nephronStructureHistology;
