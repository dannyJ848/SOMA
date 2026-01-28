/**
 * Renal Tubules - Histology Educational Content
 *
 * Covers the histology of renal tubule segments including
 * proximal tubule, loop of Henle, distal tubule, and collecting duct.
 */

import { EducationalContent } from '../../types';

export const renalTubulesHistology: EducationalContent = {
  id: 'histology-renal-tubules',
  type: 'structure',
  name: 'Renal Tubules',
  alternateNames: ['Renal Tubule Segments', 'Nephron Tubules', 'Kidney Tubules'],

  levels: {
    1: {
      level: 1,
      summary: 'Renal tubules are microscopic tubes that carry filtered fluid through the kidney, with different sections that look and work differently.',
      explanation: `After blood is filtered in the glomerulus, the fluid travels through a long, winding tube called the renal tubule. Different parts of this tube have different jobs and look different under a microscope.

**The Four Main Tube Sections:**

1. **Proximal Tubule (First Section)**
   - Looks fuzzy because of tiny hairs (microvilli)
   - Reabsorbs most of the good stuff back into blood
   - Looks pink under the microscope

2. **Loop of Henle (The U-Bend)**
   - Has thin parts and thick parts
   - Thin parts look flat
   - Helps concentrate urine

3. **Distal Tubule (Second Twisted Section)**
   - Looks cleaner, less fuzzy
   - Does fine-tuning of what stays in urine
   - Lighter color than proximal tubule

4. **Collecting Duct (Final Section)**
   - Clear cells with visible edges
   - Decides final urine concentration
   - Passes through kidney medulla

Each section has special cells designed for its specific job. Some absorb nutrients, some pump out waste, and some control water flow.`,
      keyTerms: [
        { term: 'tubule', definition: 'A small tube that carries fluid in the kidney' },
        { term: 'proximal', definition: 'Closer to the beginning or center' },
        { term: 'distal', definition: 'Farther from the beginning or center' },
        { term: 'microvilli', definition: 'Tiny hair-like projections that increase surface area' },
        { term: 'reabsorb', definition: 'To take substances back into the blood from the tubule' },
      ],
      analogies: [
        'The renal tubule is like a water treatment plant pipeline - different sections purify the water in different ways.',
        'Microvilli are like a shag carpet - all the fibers increase surface area for absorption.',
        'The loop of Henle is like a U-shaped bend in a river creating different conditions on each side.',
      ],
      examples: [
        'The proximal tubule reabsorbs about 65% of filtered water and sodium.',
        'The collecting duct can make urine either dilute or concentrated depending on body needs.',
        'Different tubule segments can be identified by their appearance on kidney biopsy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Renal tubules are lined by specialized epithelium that varies by segment, with proximal tubules having brush borders for absorption, loops of Henle varying in thickness, and collecting ducts having distinct principal and intercalated cells.',
      explanation: `**Proximal Tubule:**

**Proximal Convoluted Tubule (PCT):**
- Simple cuboidal epithelium
- Prominent brush border (microvilli)
- Eosinophilic (pink) cytoplasm
- Extensive basal infoldings
- Cells taller than wide
- Occupy most of cortical labyrinth

**Proximal Straight Tubule (Pars Recta, S3):**
- Shorter cells than PCT
- Less prominent brush border
- Continues into outer medulla
- Susceptible to ischemic injury

**Loop of Henle:**

**Thin Descending Limb:**
- Simple squamous epithelium
- Flattened cells
- Nuclei protrude into lumen
- Thin cytoplasm
- Permeable to water

**Thin Ascending Limb:**
- Simple squamous epithelium
- Similar to descending limb
- Impermeable to water
- Passively permeable to NaCl

**Thick Ascending Limb (TAL):**
- Simple cuboidal epithelium
- Taller cells than thin limb
- No brush border
- Prominent mitochondria
- Macula densa at DCT junction

**Distal Convoluted Tubule:**
- Simple cuboidal epithelium
- Shorter and narrower than PCT
- No brush border
- Lateral cell borders distinct
- Lighter staining than PCT
- Nuclei more prominent
- Multiple mitochondria

**Connecting Tubule:**
- Transition zone
- Mixture of DCT and collecting duct cells
- Principal and intercalated cells appear

**Collecting Duct:**

**Cortical Collecting Duct:**
- Simple cuboidal epithelium
- Two cell types:
  - Principal cells: Light cytoplasm, sparse microvilli
  - Intercalated cells: Dark cytoplasm, apical microfolds
- Clear cell borders

**Medullary Collecting Duct:**
- Simple columnar epithelium (inner medulla)
- Principal cells dominant
- Permeability varies with ADH`,
      keyTerms: [
        { term: 'cuboidal epithelium', definition: 'Cells that are cube-shaped; found lining most tubules' },
        { term: 'squamous epithelium', definition: 'Flat, scale-like cells; found in thin limbs of loop of Henle' },
        { term: 'brush border', definition: 'Dense microvilli on apical surface of PCT' },
        { term: 'eosinophilic', definition: 'Stains pink with H&E; indicates mitochondria-rich cytoplasm' },
        { term: 'principal cell', definition: 'Main cell type in collecting duct; responsible for Na+ and water transport' },
      ],
      analogies: [
        'The brush border is like a carpet of tiny fingers grabbing nutrients from the filtrate.',
        'Basal infoldings are like shelves in a warehouse storing machinery for pumping substances.',
        'The transition from PCT to collecting duct is like passing through different factory stations, each doing specific work.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tubular histology reflects specialized transport functions through segment-specific ultrastructural adaptations including apical microvilli, basolateral infoldings, tight junction characteristics, and distinct cell junction types.',
      explanation: `**Proximal Tubule Ultrastructure:**

**Apical Surface:**
- Microvilli: 1 μm long, 100 nm diameter
- 3600 μm² surface area per cell
- Glycocalyx coating
- Endocytic vesicles for protein uptake
- Megalin and cubilin receptors

**Lateral Borders:**
- Extensive interdigitations
- Intercellular spaces form lateral labyrinth
- Na+/K+-ATPase in lateral membrane

**Basal Surface:**
- Deep infoldings of plasma membrane
- Mitochondria packed between infoldings
- Generate ATP for transport

**Organelles:**
- Abundant mitochondria (oxidative metabolism)
- Well-developed endoplasmic reticulum
- Lysosomes for protein degradation
- Peroxisomes

**Thin Limb Ultrastructure:**

**Descending Thin Limb:**
- Type I, II, III based on AQP1 expression
- Simple squamous epithelium
- Few organelles (passive transport)
- Aquaporin-1 water channels

**Ascending Thin Limb:**
- Types with/without AQP1
- ClC-Ka chloride channels
- Passive NaCl permeability

**Thick Ascending Limb:**

**Cell Features:**
- Cuboidal epithelium
- Prominent mitochondria
- Apical microvilli (short)
- NKCC2 cotransporter (apical)
- ROMK potassium channel (apical)

**Tight Junctions:**
- High resistance (impermeable)
- Claudin-16 (paracellin-1) for cation permeability

**Macula Densa:**
- Specialized plaque of TAL cells
- Columnar cells
- Dense cytoplasm
- Adjacent to glomerular hilum
- Sense tubular NaCl concentration

**Distal Convoluted Tubule:**

**Cell Features:**
- Cuboidal epithelium
- Moderate mitochondria
- Basal infoldings (less than PCT)
- Apical microvilli (sparse)
- NCC cotransporter (apical)
- TRPV5 calcium channel

**Collecting Duct Ultrastructure:**

**Principal Cells:**
- Light cytoplasm
- Sparse, short microvilli
- Apical: ENaC, AQP2
- Basolateral: Na+/K+-ATPase, AQP3, AQP4
- Tight junctions (variable permeability)

**Type A Intercalated Cells:**
- Dark cytoplasm
- Apical microfolds
- Apical H+-ATPase
- Basolateral AE1 (Cl-/HCO3- exchanger)
- Carbonic anhydrase II

**Type B Intercalated Cells:**
- Pendrin (apical Cl-/HCO3- exchanger)
- H+-ATPase on basolateral membrane
- Less common than type A`,
      keyTerms: [
        { term: 'megalin', definition: 'Endocytic receptor on proximal tubule for protein reabsorption' },
        { term: 'interdigitation', definition: 'Interlocking of adjacent cell membranes; increases surface area' },
        { term: 'tight junction', definition: 'Cell-cell junction that controls paracellular permeability' },
        { term: 'macula densa', definition: 'Specialized TAL cells that sense NaCl and regulate renin release' },
        { term: 'carbonic anhydrase', definition: 'Enzyme that catalyzes CO2 + H2O <-> H2CO3; important in acid-base regulation' },
      ],
      clinicalNotes: 'The S3 segment of proximal tubule is particularly vulnerable to ischemic injury due to its location in the outer medulla where oxygen tension is lowest. The thick ascending limb is the "diluting segment" - impermeable to water but actively transports salt, creating dilute tubular fluid.',
    },
    4: {
      level: 4,
      summary: 'Tubular pathology correlates with histological changes including acute tubular necrosis patterns, nephrotoxic injury findings, specific transporter localization, and the role of tubulointerstitial changes in disease progression.',
      explanation: `**Acute Tubular Necrosis (ATN):**

**Pathological Features:**
- Proximal tubule injury most prominent (S3 segment)
- Loss of brush border
- Nuclear pyknosis and loss
- Tubular dilation
- Flattened epithelium
- Epithelial casts in lumen
- Mitotic figures (regeneration)

**Nephrotoxic ATN Patterns:**

**Aminoglycoside Toxicity:**
- Lysosomal phospholipidosis
- Myeloid bodies on EM
- Isometric vacuolization

**Radiocontrast Nephropathy:**
- Vacuolization
- Osmotic nephrosis
- Usually mild, reversible

**Light Chain Cast Nephropathy:**
- Fractured, "brittle" casts in distal tubules
- Multinucleated giant cell reaction
- Crystal formation
- Associated with multiple myeloma

**Acute Interstitial Nephritis (AIN):**
- Interstitial inflammation (lymphocytes, eosinophils)
- Tubulitis (inflammatory cells in tubules)
- Spares glomeruli and vessels
- Drug-induced or infection-related

**Tubulointerstitial Fibrosis:**

**Features:**
- Collagen deposition in interstitium
- Tubular atrophy
- Inflammation
- Progression to ESRD

**Causes:**
- Chronic obstruction
- Reflux nephropathy
- Chronic pyelonephritis
- Hypokalemia
- Hypercalcemia
- Drugs (NSAIDs, lithium, calcineurin inhibitors)

**Special Stains for Tubules:**

**PAS (Periodic Acid-Schiff):**
- Stains brush border magenta
- Highlights basement membranes

**Trichrome:**
- Collagen stains blue
- Identifies fibrosis

**Immunohistochemistry:**
- KIM-1: Proximal tubule injury marker
- NGAL: Early injury marker
- AQP markers: Segment identification

**Segment-Specific Injury Patterns:**

**Proximal Tubule:**
- ATN (ischemic, toxic)
- Light chain casts
- Fanconi syndrome
- Protein reabsorption droplets

**Thick Ascending Limb:**
- Loop diuretic effects
- Bartter syndrome (genetic)
- Uromodulin-related disease

**Distal Tubule:**
- Thiazide effects
- Gitelman syndrome
- Hypokalemia-related changes

**Collecting Duct:**
- Lithium toxicity
- Hypercalcemia effects
- Distal RTA

**Tubular Atrophy Patterns:**

**Classic Pattern:**
- Small, simplified tubules
- Thickening of tubular basement membranes
- Interstitial fibrosis

**Endocrine Pattern:**
- Large, hypertrophic tubules
- Seen in aldosterone excess

**Thyroidization:**
- Colloid-like material in tubules
- Seen in chronic pyelonephritis

**Transport Protein Localization:**

**Proximal Tubule:**
- AQP1: Apical and basolateral
- SGLT2: Apical (S1-S2)
- NHE3: Apical
- Megalin/cubilin: Apical

**Thick Ascending Limb:**
- NKCC2: Apical
- ROMK: Apical
- Tamm-Horsfall: Apical

**Distal Tubule:**
- NCC: Apical
- Calbindin-D28k: Cytoplasmic

**Collecting Duct:**
- AQP2: Principal cells, apical (ADH-regulated)
- ENaC: Principal cells, apical
- H+-ATPase: Intercalated cells`,
      keyTerms: [
        { term: 'acute tubular necrosis', definition: 'Acute injury to tubules causing loss of function; characterized by epithelial cell death' },
        { term: 'tubulitis', definition: 'Inflammatory cells infiltrating tubular epithelium' },
        { term: 'myeloid bodies', definition: 'Lamellated cytoplasmic inclusions seen in aminoglycoside toxicity' },
        { term: 'thyroidization', definition: 'Tubular change in chronic pyelonephritis resembling thyroid follicles' },
        { term: 'Fanconi syndrome', definition: 'Proximal tubule dysfunction causing glycosuria, phosphaturia, aminoaciduria' },
      ],
      clinicalNotes: 'The S3 segment of proximal tubule is most vulnerable to ischemia because of its location in the outer medulla where oxygen tension is lowest. Lithium toxicity causes collecting duct injury leading to nephrogenic diabetes insipidus. Myeloid bodies on EM are diagnostic of aminoglycoside toxicity.',
    },
    5: {
      level: 5,
      summary: 'Advanced tubular histology encompasses quantitative assessment of tubular injury, emerging biomarkers, integration of molecular techniques, and correlation with functional imaging and clinical outcomes in acute and chronic kidney disease.',
      explanation: `**Quantitative Tubular Assessment:**

**Tubular Injury Scoring:**
- Percentage of tubules injured
- Severity grading (mild, moderate, severe)
- Specific injury patterns
- Regeneration vs necrosis

**Interstitial Fibrosis and Tubular Atrophy (IFTA):**
- Semiquantitative scoring (0-3+)
- Percentage of cortical involvement
- Predicts progression
- Used in clinical trials

**Digital Morphometry:**
- Automated tubule counting
- Luminal area measurement
- Atrophy quantification
- Machine learning applications

**Molecular Markers of Tubular Injury:**

**Serum Biomarkers:**
- Creatinine: GFR marker (late)
- Cystatin C: Alternative GFR marker
- NGAL: Early tubular injury
- KIM-1: Proximal tubule injury
- L-FABP: Proximal tubule

**Urinary Biomarkers:**
- NGAL: Proximal tubule and TAL
- KIM-1: Proximal tubule
- NAG: Lysosomal enzyme
- Beta-2 microglobulin: Tubular function
- Alpha-1 microglobulin

**Tissue Biomarkers (IHC):**
- KIM-1: Upregulated in injury
- Osteopontin: Injury marker
- Vimentin: Dedifferentiation
- Ki-67: Regeneration

**Advanced Techniques:**

**Single-Cell RNA Sequencing:**
- Identifies subpopulations
- Injury response signatures
- Dedifferentiation markers
- Regenerative potential

**Spatial Transcriptomics:**
- Location-specific injury patterns
- Cortex vs medulla differences
- Proximal vs distal injury

**Metabolomics:**
- Tubular metabolite profiles
- Mitochondrial function assessment
- Ischemia markers

**Mitochondrial Assessment:**
- Mitochondrial DNA damage
- Mitochondrial mass (TOM20 staining)
- Oxidative stress markers (8-OHdG)
- ATP production assessment

**Clinical Correlations:**

**AKI to CKD Transition:**
- Incomplete recovery
- Maladaptive repair
- Senescence markers (p16, p53)
- Fibrosis progression

**Drug Toxicity Patterns:**
- Cisplatin: T proximal tubule
- Ifosfamide: Proximal tubule
- Tenofovir: Proximal tubule (mitochondrial)
- Amphotericin: Distal tubule, collecting duct
- Lithium: Collecting duct

**Genetic Tubular Diseases:**

**Proximal Tubule:**
- Cystinosis: Cystine accumulation
- Lowe syndrome: OCRL mutations
- Dent disease: CLCN5 mutations
- Fanconi syndrome (various)

**Thick Ascending Limb:**
- Bartter syndrome types
- Familial hypomagnesemia

**Distal Tubule:**
- Gitelman syndrome
- Familial hypomagnesemia with hypocalciuria

**Collecting Duct:**
- Liddle syndrome
- Pseudohypoaldosteronism
- Nephrogenic DI

**Tubular Imaging:**

**Functional MRI:**
- BOLD MRI: Oxygenation assessment
- DWI: Cellular integrity
- Contrast-enhanced: Perfusion

**Clinical Trial Applications:**

**Histological Endpoints:**
- Tubular injury reduction
- IFTA regression (rare)
- Biomarker correlation

**Composite Endpoints:**
- Structure + function
- Proteinuria + histology
- eGFR + IFTA score

**Future Directions:**
- Tubule-specific therapies
- Regenerative medicine
- Organoids for drug testing
- Bioartificial kidney tubule component`,
      keyTerms: [
        { term: 'IFTA', definition: 'Interstitial fibrosis and tubular atrophy; chronic kidney injury pattern' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; transmembrane protein upregulated in proximal tubule injury' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; early biomarker of tubular injury' },
        { term: 'BOLD MRI', definition: 'Blood oxygen level-dependent MRI; assesses renal oxygenation' },
        { term: 'maladaptive repair', definition: 'Incomplete tubule regeneration leading to fibrosis and atrophy' },
      ],
      clinicalNotes: `Advanced tubular pathology pearls:
1. KIM-1 is one of the most specific markers for proximal tubule injury and is being evaluated as a clinical trial endpoint
2. Single-cell RNA sequencing has revealed that injured tubules can dedifferentiate and re-enter cell cycle, but maladaptive repair leads to fibrosis
3. The S3 segment is particularly vulnerable because of the steep oxygen gradient in the outer medulla - hypoxic injury here is common in AKI
4. Mitochondrial injury is a common final pathway in many forms of ATN - assessing mitochondrial function is emerging as a research focus
5. Urinary biomarkers (NGAL, KIM-1) can detect tubular injury days before creatinine rises
6. Quantification of IFTA is critical in clinical trials - computer-assisted stereology is more accurate than semiquantitative scoring`,
    },
  },

  media: [
    {
      id: 'tubules-histology',
      type: 'histology',
      filename: 'renal-tubules-histology.jpg',
      title: 'Renal Tubule Histology',
      description: 'H&E stained sections showing proximal tubule, distal tubule, and collecting duct',
    },
  ],

  citations: [
    {
      id: 'tisher-tubules',
      type: 'textbook',
      title: 'Tubulointerstitial Diseases',
      source: 'Brenner and Rector\'s The Kidney',
    },
    {
      id: 'bonventre-kim1',
      type: 'article',
      title: 'Kidney Injury Molecule-1: A Biomarker for Proximal Tubule Injury',
      source: 'Journal of the American Society of Nephrology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'histology-nephron-structure', targetType: 'structure', relationship: 'sibling', label: 'Nephron Histology' },
    { targetId: 'pathology-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
  ],

  tags: {
    systems: ['renal'],
    structures: ['FMA:17640'],
    topics: ['histology', 'pathology'],
    keywords: ['tubule', 'proximal tubule', 'distal tubule', 'collecting duct', 'histology'],
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

export default renalTubulesHistology;
