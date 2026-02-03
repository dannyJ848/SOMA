/**
 * Nephron Structure - Comprehensive Educational Content
 *
 * Covers the microscopic functional unit of the kidney including all segments
 * from Bowman's capsule through collecting duct.
 */

import { EducationalContent } from '../../types';

export const nephronStructure: EducationalContent = {
  id: 'structure-nephron',
  type: 'structure',
  name: 'Nephron',
  alternateNames: ['Renal Tubule', 'Kidney Functional Unit', 'Uriniferous Tubule'],
  fmaId: 'FMA:17640',

  levels: {
    1: {
      level: 1,
      summary: 'A nephron is a tiny tube in your kidney that filters blood and makes urine.',
      explanation: `Imagine your kidney is full of about one million tiny filtering machines - each one is called a nephron. A nephron is like a very long, twisted tube that's so small you need a microscope to see it.

Here's how a nephron works:

1. **The Filter (Glomerulus)**: Blood enters a tiny ball of blood vessels. It's like a coffee filter - water and small things pass through, but big important things like blood cells stay in the blood.

2. **The Long Tube**: After filtering, the liquid travels through a very long, winding tube. As it goes through, the tube takes back things your body needs (like water, sugar, and salt) and puts them back in your blood.

3. **Making Urine**: What's left at the end becomes urine, which collects in bigger tubes and eventually goes to your bladder.

Each nephron is only about 3 centimeters long (about the length of your thumb), but if you stretched out all the nephrons in both kidneys end-to-end, they would reach about 80 kilometers - that's like driving for an hour on the highway!`,
      keyTerms: [
        { term: 'nephron', definition: 'The tiny filtering unit of the kidney that makes urine' },
        { term: 'glomerulus', definition: 'A tiny ball of blood vessels that filters blood', pronunciation: 'gloh-MARE-yoo-lus' },
        { term: 'tubule', definition: 'A very small tube', pronunciation: 'TOO-byool' },
        { term: 'filter', definition: 'Something that separates what you need from what you don\'t' },
      ],
      analogies: [
        'A nephron is like a water purification plant in miniature - it cleans the blood and recycles the good stuff.',
        'The nephron works like a coffee maker - the filter catches the coffee grounds (cells) while the water (filtered blood) passes through.',
      ],
      examples: [
        'You have about 1 million nephrons in each kidney, for a total of 2 million!',
        'If one nephron stops working, the others can work a little harder to help out.',
      ],
    },
    2: {
      level: 2,
      summary: 'The nephron is the microscopic functional unit of the kidney, consisting of a renal corpuscle (glomerulus and Bowman\'s capsule) and a renal tubule that processes filtrate into urine.',
      explanation: `Each kidney contains approximately 1 million nephrons, and each nephron has distinct segments with specific functions:

## Parts of the Nephron

**1. Renal Corpuscle (The Filter)**
- **Glomerulus**: A tuft of capillaries where blood is filtered
- **Bowman's capsule**: A cup-shaped structure surrounding the glomerulus that collects the filtrate

**2. Proximal Convoluted Tubule (PCT)**
- First section after Bowman's capsule
- "Convoluted" means twisted
- Reabsorbs most filtered nutrients, water, and salt back into blood

**3. Loop of Henle**
- A hairpin-shaped loop that dips down into the medulla
- Has a descending limb (goes down) and ascending limb (goes up)
- Important for concentrating urine

**4. Distal Convoluted Tubule (DCT)**
- Another twisted section after the loop
- Fine-tunes salt and water balance
- Regulated by hormones

**5. Collecting Duct**
- Receives fluid from multiple nephrons
- Final adjustments to urine concentration
- Drains into renal pelvis

## Two Types of Nephrons

- **Cortical nephrons (85%)**: Short loops, stay mostly in cortex
- **Juxtamedullary nephrons (15%)**: Long loops extending deep into medulla, important for concentrating urine`,
      keyTerms: [
        { term: 'renal corpuscle', definition: 'The filtering unit consisting of the glomerulus and Bowman\'s capsule', pronunciation: 'REE-nal KOR-pus-ul' },
        { term: 'Bowman\'s capsule', definition: 'Cup-shaped structure surrounding the glomerulus that collects filtered fluid' },
        { term: 'proximal convoluted tubule', definition: 'The twisted tube segment closest to Bowman\'s capsule; reabsorbs most filtered substances' },
        { term: 'loop of Henle', definition: 'The U-shaped portion of the nephron extending into the medulla', pronunciation: 'HEN-lee' },
        { term: 'distal convoluted tubule', definition: 'The twisted tube segment after the loop of Henle; fine-tunes urine composition' },
        { term: 'collecting duct', definition: 'Tube that collects urine from multiple nephrons and carries it to the renal pelvis' },
      ],
      analogies: [
        'The nephron is like an assembly line - each station (segment) has a specific job in processing the filtrate.',
        'Bowman\'s capsule is like a baseball glove catching the filtered fluid coming out of the glomerulus.',
      ],
    },
    3: {
      level: 3,
      summary: 'The nephron comprises a renal corpuscle and renal tubule with distinct segments (PCT, loop of Henle, DCT) that perform specific transport functions to convert glomerular filtrate into urine through reabsorption, secretion, and concentration mechanisms.',
      explanation: `## Detailed Nephron Anatomy

### Renal Corpuscle (Malpighian Corpuscle)

**Glomerulus:**
- Network of fenestrated capillaries (50-300 per glomerulus)
- Afferent arteriole enters, efferent arteriole exits
- Fenestrations (70-100 nm) allow fluid passage
- Mesangial cells provide structural support and regulate filtration

**Bowman's Capsule:**
- Parietal layer: Simple squamous epithelium (structural)
- Visceral layer: Specialized podocytes surrounding glomerular capillaries
- Bowman's (urinary/capsular) space: Collects filtrate
- Vascular pole: Where arterioles enter/exit
- Urinary pole: Continuous with PCT

### Proximal Tubule

**Proximal Convoluted Tubule (S1-S2 segments):**
- Longest and widest segment
- Cuboidal epithelium with prominent brush border (microvilli)
- Extensive basolateral infoldings with mitochondria
- Reabsorbs: 65-70% filtered Na+, water, glucose, amino acids, bicarbonate, phosphate, urea
- Secretes: Organic acids (uric acid, drugs), organic bases, H+

**Proximal Straight Tubule (S3 segment/Pars Recta):**
- Continues into outer medulla
- Less developed brush border
- Susceptible to ischemic and toxic injury

### Loop of Henle

**Thin Descending Limb:**
- Simple squamous epithelium
- Permeable to water
- Relatively impermeable to solutes
- Establishes hyperosmotic medullary gradient

**Thin Ascending Limb:**
- Only in juxtamedullary nephrons
- Impermeable to water
- Passively permeable to NaCl

**Thick Ascending Limb (TAL):**
- Cuboidal epithelium, no brush border
- Impermeable to water ("diluting segment")
- Active transport: Na-K-2Cl cotransporter (NKCC2) - target of loop diuretics
- Contains macula densa (tubuloglomerular feedback)

### Distal Convoluted Tubule

- Cuboidal epithelium, no brush border
- Shorter and narrower than PCT
- Na-Cl cotransporter (NCC) - target of thiazide diuretics
- Reabsorbs Ca2+ (regulated by PTH)
- Relatively impermeable to water

### Connecting Tubule and Collecting Duct

**Connecting Tubule:**
- Transition zone with principal and intercalated cells
- Contains aquaporin channels (AQP2)

**Collecting Duct:**
- Principal cells (65%): Na+ reabsorption (ENaC), K+ secretion, water reabsorption (ADH-regulated)
- Intercalated cells (35%):
  - Type A (α): Secrete H+, reabsorb K+ and HCO3-
  - Type B (β): Secrete HCO3-, reabsorb H+
- Cortical collecting duct → Outer medullary CD → Inner medullary CD → Papillary duct

### Juxtaglomerular Apparatus

Located where DCT contacts afferent arteriole:
- **Macula densa**: Specialized DCT cells sensing tubular NaCl
- **Juxtaglomerular (JG) cells**: Modified smooth muscle in afferent arteriole; secrete renin
- **Extraglomerular mesangial cells**: Lacis cells providing structural support`,
      keyTerms: [
        { term: 'podocyte', definition: 'Specialized epithelial cell of visceral Bowman\'s capsule with foot processes that form filtration slits', pronunciation: 'POH-doh-site' },
        { term: 'brush border', definition: 'Dense microvilli on proximal tubule cells that increase surface area for reabsorption' },
        { term: 'macula densa', definition: 'Specialized cells in DCT that sense tubular NaCl concentration for tubuloglomerular feedback', pronunciation: 'MAK-yoo-lah DEN-sah' },
        { term: 'NKCC2', definition: 'Na-K-2Cl cotransporter in thick ascending limb; target of furosemide and other loop diuretics' },
        { term: 'principal cell', definition: 'Collecting duct cell responsible for Na+ reabsorption, K+ secretion, and water reabsorption' },
        { term: 'intercalated cell', definition: 'Collecting duct cell specialized for acid-base regulation' },
        { term: 'ENaC', definition: 'Epithelial sodium channel in principal cells; target of amiloride, regulated by aldosterone' },
      ],
      clinicalNotes: 'S3 segment vulnerability explains acute tubular necrosis patterns. Loop diuretics block NKCC2; thiazides block NCC. Collecting duct is the final site of urine concentration (ADH) and acidification.',
    },
    4: {
      level: 4,
      summary: 'Nephron ultrastructure reveals the molecular machinery underlying segment-specific transport functions, including polarized expression of channels, transporters, and receptors that maintain fluid-electrolyte homeostasis and are targets for pharmacological intervention.',
      explanation: `## Ultrastructural Details and Molecular Transport

### Glomerular Filtration Barrier

The three-layer filtration barrier restricts passage based on size and charge:

**1. Fenestrated Endothelium:**
- Fenestrae: 70-100 nm diameter
- Glycocalyx: Negatively charged glycoproteins
- Size selectivity threshold ~70 Å

**2. Glomerular Basement Membrane (GBM):**
- Trilaminar: Lamina rara interna, lamina densa, lamina rara externa
- Components: Type IV collagen (α3α4α5 network), laminin, nidogen, heparan sulfate proteoglycans
- Negative charge from heparan sulfate provides charge barrier
- Mutations: α5(IV) - Alport syndrome

**3. Podocytes (Visceral Epithelium):**
- Cell body, major processes, foot processes (pedicels)
- Filtration slits (25-60 nm) between adjacent pedicels
- Slit diaphragm proteins:
  - Nephrin (NPHS1) - structural backbone
  - Podocin (NPHS2) - lipid raft anchoring
  - CD2AP - cytoskeletal linker
  - α-actinin-4, TRPC6, Neph1
- Podocalyxin: Negatively charged coat protein
- Mutations cause nephrotic syndrome

### Proximal Tubule Ultrastructure

**Apical Membrane:**
- Brush border: 1 μm microvilli, 3600 μm² surface area per cell
- Na+/H+ exchanger 3 (NHE3): Major Na+ entry
- Na+/glucose cotransporters: SGLT2 (S1-S2), SGLT1 (S3)
- Na+/phosphate cotransporter: NaPi-IIa (PTH-regulated)
- Na+/amino acid cotransporters
- Megalin/cubilin: Receptor-mediated endocytosis of filtered proteins

**Basolateral Membrane:**
- Na+/K+-ATPase: Drives secondary active transport
- GLUT2: Glucose exit
- Organic anion transporters: OAT1, OAT3
- Organic cation transporters: OCT2

**Cellular Features:**
- Extensive lateral interdigitation
- Abundant mitochondria (oxidative phosphorylation)
- Lysosomal/endosomal system for protein processing

### Thin Limbs Ultrastructure

**Thin Descending Limb:**
- Types 1-3 based on water permeability
- Aquaporin-1 (AQP1) expression
- Few mitochondria (passive transport)

**Thin Ascending Limb:**
- No aquaporins (water-impermeable)
- ClC-Ka chloride channels
- Passive NaCl exit down concentration gradient

### Thick Ascending Limb

**Apical:**
- NKCC2 (SLC12A1): 1Na+:1K+:2Cl- cotransport
- ROMK (Kir1.1): K+ recycling
- NHE3: Na+/H+ exchange

**Basolateral:**
- Na+/K+-ATPase
- ClC-Kb (with Barttin subunit): Cl- exit
- KCNQ1/KCNE1: K+ exit

**Paracellular:**
- Claudin-16 (paracellin-1): Mg2+ and Ca2+ reabsorption
- Lumen-positive potential drives cation reabsorption

### Distal Convoluted Tubule

**Apical:**
- NCC (SLC12A3): Na+-Cl- cotransport (thiazide-sensitive)
- TRPM6: Mg2+ channel
- TRPV5: Ca2+ channel (regulated by vitamin D, PTH)

**Basolateral:**
- Na+/K+-ATPase
- CLCNKB: Cl- channel
- NCX1/PMCA: Ca2+ exit

### Collecting Duct

**Principal Cells:**
- Apical: ENaC (amiloride-sensitive), AQP2 (ADH-regulated), ROMK
- Basolateral: Na+/K+-ATPase, AQP3, AQP4

**Type A Intercalated Cells:**
- Apical: H+-ATPase, H+/K+-ATPase
- Basolateral: Anion exchanger 1 (AE1/Band 3)
- Cytoplasmic: Carbonic anhydrase II

**Type B Intercalated Cells:**
- Apical: Pendrin (Cl-/HCO3- exchanger)
- Basolateral: H+-ATPase

### Integrated Transport Model

The nephron maintains a coordinated transcellular and paracellular transport system:
- Primary active transport: Na+/K+-ATPase establishes gradients
- Secondary active transport: Na+-coupled cotransporters/exchangers
- Tertiary transport: Uses gradients from secondary transport
- Channel-mediated transport: ENaC, aquaporins, ROMK
- Paracellular transport: Tight junction permeability varies by segment`,
      keyTerms: [
        { term: 'nephrin', definition: 'Key structural protein of the slit diaphragm; mutations cause congenital nephrotic syndrome (Finnish type)' },
        { term: 'SGLT2', definition: 'Sodium-glucose cotransporter 2 in proximal tubule; inhibitors (gliflozins) used in diabetes/heart failure' },
        { term: 'megalin/cubilin', definition: 'Endocytic receptors on proximal tubule for reabsorption of filtered proteins including albumin' },
        { term: 'ROMK', definition: 'Renal outer medullary K+ channel; required for K+ recycling in TAL and K+ secretion in collecting duct' },
        { term: 'AQP2', definition: 'Aquaporin-2; water channel in collecting duct apical membrane regulated by ADH/vasopressin' },
        { term: 'pendrin', definition: 'Cl-/HCO3- exchanger in type B intercalated cells; involved in bicarbonate secretion' },
        { term: 'paracellin-1', definition: 'Claudin-16; tight junction protein in TAL required for paracellular Mg2+ and Ca2+ reabsorption' },
      ],
      clinicalNotes: 'Genetic defects map to specific transporters: NKCC2 mutations cause Bartter type 1, ROMK mutations cause Bartter type 2, ClC-Kb mutations cause Bartter type 3, NCC mutations cause Gitelman syndrome. SGLT2 inhibitors provide cardiorenal protection beyond glucose lowering.',
    },
    5: {
      level: 5,
      summary: 'Clinical integration of nephron anatomy requires understanding segment-specific vulnerabilities to injury, pharmacological targets, genetic diseases, and the pathophysiological consequences of nephron loss with adaptive and maladaptive responses.',
      explanation: `## Clinical-Pathological Correlations

### Segment-Specific Injury Patterns

**Glomerular Diseases:**
| Component | Disease Example | Pathology |
|-----------|-----------------|-----------|
| GBM α5(IV) collagen | Alport syndrome | Splitting, lamellation; progressive CKD |
| Nephrin (NPHS1) | Finnish-type nephrotic syndrome | Absent slit diaphragms; massive proteinuria |
| Podocin (NPHS2) | Steroid-resistant FSGS | Disrupted slit diaphragm signaling |
| Podocyte injury | Minimal change disease | Foot process effacement |
| Subepithelial deposits | Membranous nephropathy | Spike and dome pattern |
| Subendothelial deposits | Lupus nephritis (Class IV) | Wire loop lesions |

**Proximal Tubule:**
- Ischemic/nephrotoxic ATN: S3 segment most vulnerable
- Fanconi syndrome: Global proximal dysfunction (glycosuria, phosphaturia, aminoaciduria, RTA type 2)
- Drug toxicity: Tenofovir, cidofovir, cisplatin, aminoglycosides

**Thick Ascending Limb:**
- Bartter syndrome (types 1-4): Mimics chronic loop diuretic use
- Uromodulin (Tamm-Horsfall protein) mutations: Medullary cystic kidney disease

**Distal Tubule:**
- Gitelman syndrome: NCC dysfunction, mimics thiazide use
- Familial hypomagnesemia: TRPM6 mutations
- Hypercalciuria syndromes: TRPV5 or claudin variants

**Collecting Duct:**
- Nephrogenic diabetes insipidus: AQP2 or V2 receptor mutations
- Liddle syndrome: ENaC gain-of-function (hypertension, hypokalemia)
- Pseudohypoaldosteronism type 1: ENaC loss-of-function
- Distal RTA (type 1): H+-ATPase or AE1 mutations

### Pharmacological Targets by Segment

**Proximal Tubule:**
- SGLT2 inhibitors (empagliflozin, dapagliflozin): Block glucose reabsorption
- Acetazolamide: Carbonic anhydrase inhibition (mild diuresis, metabolic acidosis)
- Uricosurics (probenecid): OAT interaction

**Thick Ascending Limb:**
- Loop diuretics (furosemide, bumetanide, torsemide): Block NKCC2
- Effect: Natriuresis, kaliuresis, impaired concentrating ability

**Distal Convoluted Tubule:**
- Thiazide diuretics: Block NCC
- Effect: Modest natriuresis, hypocalciuria, hypomagnesemia

**Collecting Duct:**
- Amiloride, triamterene: Block ENaC
- Spironolactone, eplerenone: Mineralocorticoid receptor antagonists
- Tolvaptan: V2 receptor antagonist (aquaresis)

### Nephron Number and Adaptive Responses

**Normal Nephron Endowment:**
- Range: 200,000 - 2,500,000 per kidney
- Low nephron number associated with:
  - Low birth weight, prematurity
  - Intrauterine growth restriction
  - Increased lifetime CKD/hypertension risk (Brenner hypothesis)

**Single Nephron GFR Response:**
- Nephron loss triggers compensatory hyperfiltration
- Remaining nephrons increase SNGFR
- Afferent arteriole vasodilation
- Increased glomerular capillary pressure

**Maladaptive Responses (Hyperfiltration Injury):**
1. Glomerular hypertension → Podocyte stress
2. Podocyte detachment → Bare GBM
3. Synechiae formation → Segmental sclerosis
4. FSGS pattern → Progressive nephron loss
5. Tubular atrophy, interstitial fibrosis

**Nephroprotective Strategies:**
- ACE inhibitors/ARBs: Reduce glomerular pressure
- SGLT2 inhibitors: Restore tubuloglomerular feedback, reduce hyperfiltration
- Blood pressure control: Target <130/80 in proteinuric CKD
- Protein restriction: Theoretical reduction of hyperfiltration load

### Urinalysis Correlations

| Finding | Nephron Segment | Interpretation |
|---------|-----------------|----------------|
| Proteinuria (albumin) | Glomerulus | Filtration barrier damage |
| Proteinuria (low MW) | Proximal tubule | Tubular dysfunction |
| Glucosuria (normal glucose) | Proximal tubule | SGLT defect or Fanconi |
| Isosthenuria | Loop/Collecting duct | Concentrating defect |
| Alkaline urine | Collecting duct | Impaired acidification |
| Muddy brown casts | Proximal tubule | Acute tubular necrosis |
| RBC casts | Glomerulus | Glomerulonephritis |
| WBC casts | Tubules/interstitium | Pyelonephritis, interstitial nephritis |

### Biopsy Interpretation

**Systematic Approach:**
1. Glomeruli: Count total, globally sclerosed, segmentally affected
2. Tubules: Acute injury (vacuolization, casts), atrophy
3. Interstitium: Inflammation, fibrosis percentage
4. Vessels: Arteriosclerosis, arteriolosclerosis

**Special Studies:**
- Immunofluorescence: IgG, IgA, IgM, C3, C1q, kappa, lambda
- Electron microscopy: Foot process effacement, deposits location/type

### Novel Biomarkers by Segment

| Biomarker | Segment | Clinical Use |
|-----------|---------|--------------|
| KIM-1 | Proximal tubule | AKI detection |
| NGAL | TAL, collecting duct | AKI severity |
| L-FABP | Proximal tubule | Ischemic injury |
| Uromodulin | TAL | CKD progression risk |
| Supar | Podocyte | FSGS, CKD progression |`,
      keyTerms: [
        { term: 'Brenner hypothesis', definition: 'Theory that reduced nephron number leads to compensatory hyperfiltration and progressive kidney injury' },
        { term: 'hyperfiltration', definition: 'Increased single-nephron GFR as compensation for nephron loss; maladaptive when sustained' },
        { term: 'Fanconi syndrome', definition: 'Generalized proximal tubular dysfunction with glycosuria, phosphaturia, aminoaciduria, and type 2 RTA' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; proximal tubule biomarker of acute kidney injury' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; urinary biomarker of tubular injury' },
        { term: 'foot process effacement', definition: 'Flattening of podocyte foot processes on EM; marker of podocyte injury in proteinuric states' },
      ],
      clinicalNotes: `Practical clinical applications:
1. SGLT2 inhibitors are now first-line for CKD regardless of diabetes status (KDIGO 2024)
2. Urinalysis provides clues to nephron segment involvement - glycosuria without hyperglycemia suggests proximal tubule
3. The combination of proteinuria + RBC casts = glomerulonephritis until proven otherwise
4. Serial uromodulin levels may predict CKD progression
5. ACEi/ARB therapy reduces proteinuria by lowering glomerular pressure, not by "healing" the barrier
6. Single nephron hyperfiltration explains why kidney function can be preserved until 50% of nephrons are lost`,
    },
  },

  media: [
    {
      id: 'nephron-diagram',
      type: 'diagram',
      filename: 'nephron-structure.svg',
      title: 'Nephron Structure Overview',
      description: 'Complete nephron showing all segments from renal corpuscle to collecting duct',
    },
    {
      id: 'nephron-histology',
      type: 'histology',
      filename: 'nephron-histology.jpg',
      title: 'Nephron Histological Sections',
      description: 'Light microscopy images of different nephron segments',
    },
  ],

  citations: [
    {
      id: 'boron-medical-physiology',
      type: 'textbook',
      title: 'Functional Anatomy of the Kidney and Micturition',
      authors: ['Boron, W.F.', 'Boulpaep, E.L.'],
      source: 'Medical Physiology',
      chapter: '33',
    },
    {
      id: 'brenner-rector',
      type: 'textbook',
      title: 'Anatomy of the Kidney',
      source: 'Brenner and Rector\'s The Kidney',
      chapter: '1',
    },
  ],

  crossReferences: [
    { targetId: 'structure-kidney-gross-anatomy', targetType: 'structure', relationship: 'parent', label: 'Kidney Anatomy' },
    { targetId: 'process-glomerular-filtration', targetType: 'pathway', relationship: 'related', label: 'Glomerular Filtration' },
    { targetId: 'structure-juxtaglomerular-apparatus', targetType: 'structure', relationship: 'related', label: 'Juxtaglomerular Apparatus' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    structures: ['FMA:17640'],
    topics: ['anatomy', 'histology', 'physiology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephronStructure;
