/**
 * Juxtaglomerular Apparatus - Histology Educational Content
 *
 * Covers the structure and function of the juxtaglomerular apparatus
 * including macula densa, juxtaglomerular cells, and tubuloglomerular feedback.
 */

import { EducationalContent } from '../../types';

export const juxtaglomerularApparatusHistology: EducationalContent = {
  id: 'histology-juxtaglomerular-apparatus',
  type: 'structure',
  name: 'Juxtaglomerular Apparatus',
  alternateNames: ['JG Apparatus', 'Juxtaglomerular Complex', 'Renin-Producing Apparatus'],

  levels: {
    1: {
      level: 1,
      summary: 'The juxtaglomerular apparatus is a special group of cells where the kidney tubule touches the blood vessel entering the glomerulus.',
      explanation: `The juxtaglomerular apparatus (say: jucks-tah-glow-MER-yoo-lar) is a special sensing area in the kidney. It is located where the tubule makes contact with the blood vessel that brings blood into the glomerulus.

**Three Main Parts:**

1. **Macula Densa (Special Tubule Cells)**
   - Tall, packed cells in the wall of the tubule
   - They sense how much salt is in the tubule fluid
   - Like sensors that detect salt levels

2. **Juxtaglomerular Cells (Special Blood Vessel Cells)**
   - Modified muscle cells in the blood vessel wall
   - They make a hormone called renin
   - Like a factory that produces renin

3. **Extraglomerular Mesangial Cells (Support Cells)**
   - Connect the macula densa to the blood vessel
   - Help pass messages between them

**What It Does:**
- Senses salt levels in the tubule
- Controls how much blood gets filtered
- Releases renin to regulate blood pressure

This is like a control center that makes sure the kidney filters just the right amount of blood and keeps blood pressure normal.`,
      keyTerms: [
        { term: 'juxtaglomerular', definition: 'Near the glomerulus' },
        { term: 'macula densa', definition: 'Specialized cells in the tubule wall that sense salt concentration' },
        { term: 'renin', definition: 'A hormone that helps control blood pressure' },
        { term: 'glomerulus', definition: 'The ball of blood vessels where filtering begins' },
        { term: 'tubule', definition: 'The tube that carries filtered fluid through the kidney' },
      ],
      analogies: [
        'The JGA is like a thermostat - it senses conditions and makes adjustments to keep things balanced.',
        'The macula densa is like a salt detector in a swimming pool - it monitors salt levels constantly.',
        'Juxtaglomerular cells are like a control room that releases renin when blood pressure drops.',
      ],
      examples: [
        'When blood pressure drops, the JGA releases renin to help raise it.',
        'The macula densa senses when too much salt is being lost in urine.',
        'The JGA helps each nephron regulate its own filtration rate.',
      ],
    },
    2: {
      level: 2,
      summary: 'The juxtaglomerular apparatus consists of the macula densa, juxtaglomerular cells, and extraglomerular mesangial cells, forming a functional unit that regulates glomerular filtration rate through tubuloglomerular feedback and controls renin release.',
      explanation: `**Components of the JGA:**

**1. Macula Densa:**
- Specialized plaque of distal tubule cells
- Location: Where DCT contacts glomerular vascular pole
- Morphology: Columnar epithelium, densely packed nuclei
- Function: Chemosensor for tubular NaCl concentration
- Apical Na-K-2Cl cotransporter (NKCC2)
- Basolateral COX-2 expression

**2. Juxtaglomerular (JG) Cells:**
- Location: Wall of afferent arteriole near vascular pole
- Modified smooth muscle cells
- Contain secretory granules (renin storage)
- Baroreceptor function (sense stretch)
- Receive input from macula densa
- Sympathetic innervation (beta-1 receptors)

**3. Extraglomerular Mesangial Cells (Lacis Cells):**
- Located in angle between afferent and efferent arterioles
- Connect macula densa to JG cells
- Gap junction connections
- Structural support
- May conduct signals between components

**Tubuloglomerular Feedback (TGF):**
- Macula densa senses distal tubular NaCl
- High NaCl -> Afferent arteriole constriction -> Decreased GFR
- Low NaCl -> Afferent arteriole dilation -> Increased GFR
- Protects distal nephron from excessive flow

**Renin Release Regulation:**

**Stimuli for Renin Release:**
1. Decreased afferent arteriolar pressure
2. Decreased macula densa NaCl
3. Beta-adrenergic stimulation
4. Prostaglandins (PGE2)

**Inhibitors of Renin Release:**
1. Increased afferent arteriolar pressure
2. Increased macula densa NaCl
3. Angiotensin II (negative feedback)
4. Atrial natriuretic peptide`,
      keyTerms: [
        { term: 'tubuloglomerular feedback', definition: 'Mechanism where macula densa regulates GFR based on distal tubular NaCl concentration' },
        { term: 'baroreceptor', definition: 'Pressure sensor; JG cells sense stretch in afferent arteriole wall' },
        { term: 'renin-angiotensin-aldosterone system', definition: 'Hormonal cascade regulating blood pressure and sodium balance' },
        { term: 'afferent arteriole', definition: 'Blood vessel bringing blood into the glomerulus' },
        { term: 'COX-2', definition: 'Cyclooxygenase-2; enzyme producing prostaglandins in macula densa' },
      ],
      analogies: [
        'Tubuloglomerular feedback is like a smart irrigation system - it detects flow and adjusts pressure accordingly.',
        'JG cells are like pressure-sensitive switches that turn on renin production when blood pressure drops.',
        'The macula densa is like a quality control inspector - it checks the product (tubular fluid) and signals for adjustments.',
      ],
    },
    3: {
      level: 3,
      summary: 'The juxtaglomerular apparatus integrates structural specializations with physiological functions including renin synthesis and storage, ATP and adenosine signaling, and the molecular mechanisms of tubuloglomerular feedback.',
      explanation: `**Macula Densa Ultrastructure:**

**Cellular Features:**
- Tall columnar cells (vs cuboidal in rest of DCT)
- Golgi apparatus positioned apically (unique)
- Basolateral interdigitations with TAL cells
- High mitochondrial content
- Dense cytoplasm

**Transporters:**
- Apical NKCC2 (senses NaCl entry)
- Basolateral Na+/K+-ATPase
- Na+/H+ exchanger
- ROMK channels

**Signaling Molecules:**
- COX-2 expression (basolateral)
- Neuronal nitric oxide synthase (nNOS)
- ATP release via maxi-anion channels

**JG Cell Ultrastructure:**

**Secretory Granules:**
- Store prorenin and renin
- Dense core granules
- Exocytosis upon stimulation
- Granules also contain enzymes for prorenin conversion

**Contractile Apparatus:**
- Actin and myosin filaments
- Retain smooth muscle characteristics
- Can contract/relax arteriole

**Innervation:**
- Sympathetic nerve terminals
- Beta-1 adrenergic receptors
- Dense sympathetic innervation

**Extraglomerular Mesangial Cells:**
- Gap junctions with JG cells
- Gap junctions with intraglomerular mesangial cells
- May propagate signals
- Cytoskeletal connections

**Molecular Mechanisms of TGF:**

**Low NaCl at Macula Densa (Stimulates GFR):**
1. Reduced NaCl entry via NKCC2
2. Reduced ATP release
3. Less adenosine generation
4. Reduced A1 adenosine receptor activation
5. Less afferent constriction
6. Increased renin release

**High NaCl at Macula Densa (Inhibits GFR):**
1. Increased NaCl entry via NKCC2
2. Increased ATP release
3. Adenosine formation (via ecto-5\'-nucleotidase)
4. A1 adenosine receptor activation on afferent arteriole
5. Afferent arteriole constriction
6. Decreased renin release

**Alternative/Additional Mediators:**
- ATP direct action on P2X receptors
- NO (vasodilator from macula densa)
- Prostaglandins (PGE2 dilates afferent)
- Angiotensin II (constricts efferent)

**Renin Synthesis and Secretion:**

**Regulation:**
- cAMP-dependent pathway (beta-adrenergic)
- Calcium paradox: Low calcium stimulates
- Long-term: Gene transcription
- Short-term: Granule exocytosis

**Prorenin Processing:**
- Prorenin synthesized in JG cells
- Stored in granules
- Converted to active renin in granules or circulation
- (Pro)renin receptor discovered`,
      keyTerms: [
        { term: 'NKCC2', definition: 'Na-K-2Cl cotransporter on macula densa apical membrane; mediates NaCl sensing' },
        { term: 'adenosine', definition: 'Nucleoside derived from ATP; mediates TGF via A1 receptors' },
        { term: 'prorenin', definition: 'Inactive precursor of renin; converted to active renin by proteolytic cleavage' },
        { term: 'ecto-5\'-nucleotidase', definition: 'Enzyme that converts AMP to adenosine extracellularly' },
        { term: 'nNOS', definition: 'Neuronal nitric oxide synthase; produces NO in macula densa' },
      ],
      clinicalNotes: 'COX-2 is expressed in macula densa and is important for renin release - this explains why NSAIDs can cause hyperkalemia and hypertension. SGLT2 inhibitors restore tubuloglomerular feedback by increasing NaCl delivery to macula densa, reducing hyperfiltration.',
    },
    4: {
      level: 4,
      summary: 'Clinical correlates of juxtaglomerular apparatus histology include assessment of renin-producing tumors, baroreceptor dysfunction in hypertension, and the effects of pharmacological agents on JGA function.',
      explanation: `**JGA Pathology:**

**Juxtaglomerular Cell Tumor (Reninoma):**
- Rare benign tumor of JG cells
- Autonomous renin secretion
- Severe hypertension
- Hypokalemia (secondary hyperaldosteronism)
- Young adults
- Curable with surgical resection
- Histology: Sheets of polygonal cells with granular cytoplasm

**Diabetic Glomerulosclerosis Effects:**
- Afferent and efferent arteriole hyalinization
- Impaired TGF
- Contributes to hyperfiltration
- Progression to kidney failure

**Bartter Syndrome:**
- Defective TAL transporters (NKCC2, ROMK, etc.)
- Mimics loop diuretic effect
- Loss of NaCl reabsorption
- Macula densa "sees" low NaCl
- Increased renin and prostaglandins
- JGA hyperplasia on biopsy

**Pharmacological Effects:**

**ACE Inhibitors/ARBs:**
- Block angiotensin II formation/action
- Increase renin release (negative feedback)
- JG cell prominence/hyperplasia
- Reversible with discontinuation

**NSAIDs:**
- Inhibit COX-2 in macula densa
- Reduce renin release
- Can cause hyperkalemia
- Can worsen hypertension

**SGLT2 Inhibitors:**
- Increase NaCl delivery to macula densa
- Restore TGF
- Reduce hyperfiltration
- Increase adenosine/ATP signaling

**Thiazide Diuretics:**
- Block NCC in DCT
- May indirectly affect JGA
- Hypokalemia stimulates renin

**Loop Diuretics:**
- Block NKCC2 in TAL and macula densa
- Increase renin release
- Mimic Bartter syndrome

**Histological Assessment:**

**JG Cell Hyperplasia:**
- Prominent granules in afferent arteriole
- Seen in: Bartter syndrome, renal artery stenosis, diuretic use
- Indicates chronic renin stimulation

**JG Cell Atrophy:**
- Reduced granules
- Seen in: ACE inhibitor use, primary hyperaldosteronism

**Macula Densa Changes:**
- Difficult to assess on routine biopsy
- May show prominence in active TGF states

**Immunohistochemistry:**
- Renin staining: Identifies JG cells
- COX-2 staining: Macula densa
- NKCC2: TAL and macula densa
- nNOS: Macula densa

**Research Techniques:**

**Electron Microscopy:**
- JG cell granule density
- Secretory activity assessment
- Afferent arteriole morphology

**In Situ Hybridization:**
- Renin mRNA localization
- COX-2 expression

**Microdissection Studies:**
- Macula densa-specific gene expression
- Comparison to adjacent TAL

**Clinical Conditions Related to JGA:**

**Renal Artery Stenosis:**
- Reduced perfusion pressure
- Increased JG cell renin release
- Secondary hyperaldosteronism
- Hypertension
- JG hyperplasia

**Primary Hyperaldosteronism:**
- High aldosterone suppresses renin
- JG cell atrophy
- Low renin hypertension

**Apparent Mineralocorticoid Excess:**
- 11-beta-HSD2 deficiency
- Cortisol activates mineralocorticoid receptor
- Hypertension, hypokalemia
- Low renin and aldosterone
- JG suppression`,
      keyTerms: [
        { term: 'reninoma', definition: 'Juxtaglomerular cell tumor causing severe hypertension due to renin secretion' },
        { term: 'hyalinization', definition: 'Accumulation of homogeneous pink material in vessel walls; seen in diabetes' },
        { term: 'secondary hyperaldosteronism', definition: 'Increased aldosterone due to elevated renin; seen in renal artery stenosis' },
        { term: '11-beta-HSD2', definition: 'Enzyme converting cortisol to cortisone; deficiency causes apparent mineralocorticoid excess' },
        { term: 'nNOS', definition: 'Neuronal nitric oxide synthase; enzyme in macula densa producing vasodilator NO' },
      ],
      clinicalNotes: 'JG cell tumors (reninomas) are rare but important causes of curable hypertension in young patients - think of this diagnosis in young patients with severe hypertension, hypokalemia, and high renin. SGLT2 inhibitors work partly by restoring tubuloglomerular feedback - increased NaCl delivery to macula densa causes afferent constriction, reducing hyperfiltration and intraglomerular pressure.',
    },
    5: {
      level: 5,
      summary: 'Advanced JGA concepts include single-cell transcriptomics, the role of adenosine in kidney disease, SGLT2 inhibitor mechanisms on TGF, and emerging understanding of the (pro)renin receptor in kidney physiology and pathology.',
      explanation: `**Single-Cell Analysis of JGA:**

**Transcriptomic Profiles:**
- Macula densa distinct from adjacent TAL
- JG cells express unique markers
- Extraglomerular mesangial cell signature
- Receptor expression patterns

**Novel Markers:**
- Ren1: JG cell specific
- NOS1: Macula densa
- A1 receptor: Afferent arteriole
- Connexin expression in gap junctions

**(Pro)Renin Receptor (PRR):**

**Discovery:**
- Specific receptor for renin and prorenin
- ATP6AP2 gene
- Originally identified as M8-9 protein

**Functions:**
- Enhances renin enzymatic activity
- Signal transduction independent of Ang II
- Activates ERK1/2 pathway
- Upregulates profibrotic genes
- Prorenin fully active when bound

**Expression:**
- Mesangial cells
- Podocytes
- Vascular smooth muscle
- Heart, brain, placenta

**Role in Disease:**
- Diabetic nephropathy: Upregulated
- Hypertension
- Potential therapeutic target

**Adenosine in Kidney Disease:**

**Adenosine Receptors:**
- A1: Afferent arteriole constriction
- A2A: Vasodilation, anti-inflammatory
- A2B: Fibrosis promotion
- A3: Various renal effects

**Therapeutic Potential:**
- A1 agonists: Reduce hyperfiltration
- A2A agonists: Kidney protection
- A2B antagonists: Anti-fibrotic

**SGLT2 Inhibitors and TGF:**

**Mechanism:**
1. Block proximal glucose/Na+ reabsorption
2. Increased distal Na+ delivery
3. Enhanced macula densa NaCl sensing
4. Increased ATP/adenosine release
5. Afferent arteriole constriction
6. Reduced intraglomerular pressure

**Clinical Significance:**
- Explains renoprotection beyond glucose
- Restores TGF in diabetes
- Reduces hyperfiltration
- May explain benefits in non-diabetic CKD

**Advanced Physiology:**

**Nitric Oxide in TGF:**
- nNOS in macula densa produces NO
- NO antagonizes TGF constriction
- Modulates TGF sensitivity
- iNOS induction in disease

**Connexins and Gap Junctions:**
- Cx40 in JG cells
- Cx37, Cx43 in mesangial cells
- Electrical coupling
- Signal propagation
- Connexin mutations cause disease

**Purinergic Signaling:**
- ATP release from macula densa
- P2X receptors on afferent arteriole
- Additional vasoconstriction pathway
- May work with adenosine

**Clinical Applications:**

**Renin Inhibitors:**
- Aliskiren: Direct renin inhibitor
- Reduces all angiotensin peptides
- Suppresses renin activity
- Less JG cell hyperplasia than ACEi/ARB

**Research Frontiers:**

**Optogenetics:**
- Light-activated control of JGA cells
- Study TGF in real-time
- Research tool

**Genetic Models:**
- Conditional knockouts
- Cell-specific deletion
- JGA component analysis

**Biomarker Development:**
- Urinary renin as marker?
- JGA-derived proteins
- Activity markers

**Therapeutic Targets:**
- PRR antagonists
- Adenosine receptor modulators
- Connexin modulators
- Purinergic receptor targets

**Integration with Systems Biology:**

**Renin-Angiotensin System Modeling:**
- Mathematical models of TGF
- Multi-scale modeling
- Kidney-blood pressure integration

**Network Analysis:**
- JGA gene networks
- Disease-associated pathways
- Drug target prediction`,
      keyTerms: [
        { term: '(pro)renin receptor', definition: 'Receptor that binds renin and prorenin; enhances activity and signals independently of Ang II' },
        { term: 'purinergic signaling', definition: 'Signaling via ATP and adenosine; important in TGF' },
        { term: 'optogenetics', definition: 'Technique using light to control cells; emerging research tool for JGA studies' },
        { term: 'connexin', definition: 'Protein forming gap junction channels; Cx40 important in JG cells' },
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter 2 inhibitor; acts partly via TGF restoration' },
      ],
      clinicalNotes: `Advanced JGA physiology pearls:
1. The (pro)renin receptor is an emerging therapeutic target - prorenin bound to PRR is fully active and signals independently of angiotensin II, contributing to diabetic kidney disease
2. SGLT2 inhibitors provide renoprotection largely by restoring tubuloglomerular feedback - increased NaCl delivery to macula densa triggers afferent constriction and reduces hyperfiltration
3. Single-cell RNA sequencing has revealed distinct transcriptomic signatures for macula densa vs adjacent TAL cells
4. Adenosine A1 receptor activation constricts the afferent arteriole - this is being explored as a therapeutic target to reduce hyperfiltration
5. Connexin 40 knockout mice have impaired regulation of renin release, highlighting the importance of gap junctions in JGA function
6. The macula densa expresses high levels of nNOS, producing NO that modulates TGF - this is distinct from eNOS in endothelium and iNOS in inflammation`,
    },
  },

  media: [
    {
      id: 'jga-histology',
      type: 'histology',
      filename: 'juxtaglomerular-apparatus.jpg',
      title: 'Juxtaglomerular Apparatus Histology',
      description: 'H&E stained section showing macula densa and juxtaglomerular cells',
    },
  ],

  citations: [
    {
      id: 'schnermann-jga',
      type: 'article',
      title: 'The Juxtaglomerular Apparatus: Structure and Function',
      source: 'Physiological Reviews',
    },
    {
      id: 'persson-tgf',
      type: 'article',
      title: 'Tubuloglomerular Feedback in Kidney Physiology and Disease',
      source: 'Journal of the American Society of Nephrology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'structure-juxtaglomerular-apparatus', targetType: 'structure', relationship: 'see-also', label: 'JGA Anatomy' },
    { targetId: 'histology-glomerular-histology', targetType: 'structure', relationship: 'related', label: 'Glomerular Histology' },
  ],

  tags: {
    systems: ['renal'],
    structures: ['FMA:74268'],
    topics: ['histology', 'physiology'],
    keywords: ['juxtaglomerular', 'macula densa', 'renin', 'tubuloglomerular feedback', 'JG apparatus'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['physiology', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default juxtaglomerularApparatusHistology;
