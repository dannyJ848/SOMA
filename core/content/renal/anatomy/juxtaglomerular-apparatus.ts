/**
 * Juxtaglomerular Apparatus - Comprehensive Educational Content
 *
 * Covers the specialized structure regulating renin secretion and
 * tubuloglomerular feedback.
 */

import { EducationalContent } from '../../types';

export const juxtaglomerularApparatus: EducationalContent = {
  id: 'structure-juxtaglomerular-apparatus',
  type: 'structure',
  name: 'Juxtaglomerular Apparatus',
  alternateNames: ['JGA', 'Juxtaglomerular Complex'],
  fmaId: 'FMA:84135',

  levels: {
    1: {
      level: 1,
      summary: 'The juxtaglomerular apparatus is a special area in your kidney where cells detect how much salt is in your urine and help control your blood pressure.',
      explanation: `Imagine your kidney has a special "checkpoint" where the tube carrying urine (tubule) comes back close to the blood vessel that feeds it. This checkpoint is called the juxtaglomerular apparatus - which is just a fancy way of saying "the structure next to the glomerulus" (the glomerulus is the filter).

**What does it do?**

1. **Senses salt levels**: Special cells called macula densa ("dense spot") can detect how much salt is in the fluid passing through the tube. It's like having a salt detector!

2. **Controls blood pressure**: When the kidney senses low blood pressure or low salt, special cells release a hormone called renin. Renin starts a chain reaction that raises your blood pressure and tells your body to hold onto salt and water.

3. **Adjusts the filter**: If too much salt is getting through, the checkpoint can tell the blood vessel to squeeze smaller, which reduces how much blood gets filtered. It's like turning down a faucet.

This system helps keep your blood pressure and body fluids balanced - not too much, not too little, but just right!`,
      keyTerms: [
        { term: 'juxtaglomerular apparatus', definition: 'A special checkpoint in the kidney that senses salt and controls blood pressure' },
        { term: 'renin', definition: 'A hormone that helps raise blood pressure', pronunciation: 'REE-nin' },
        { term: 'macula densa', definition: 'Special cells that sense how much salt is in the kidney tubule', pronunciation: 'MAK-yoo-lah DEN-sah' },
      ],
      analogies: [
        'The JGA is like a thermostat for your blood pressure - it senses when things are too low and turns on a system to raise it back up.',
        'It\'s like having a feedback form at a restaurant - the macula densa is the customer feedback, and the JG cells are the kitchen that responds to complaints.',
      ],
    },
    2: {
      level: 2,
      summary: 'The juxtaglomerular apparatus (JGA) is a specialized structure composed of macula densa cells, juxtaglomerular cells, and extraglomerular mesangial cells that regulates glomerular filtration rate and blood pressure through renin secretion.',
      explanation: `## Location

The JGA is located where the thick ascending limb of the loop of Henle (as it becomes the distal convoluted tubule) contacts the vascular pole of its own glomerulus - specifically touching the afferent arteriole.

## Three Components

**1. Macula Densa**
- Specialized epithelial cells in the wall of the distal tubule
- Tall, tightly packed cells (looks "dense" under microscope)
- Senses sodium chloride concentration in tubular fluid
- Communicates with other JGA components

**2. Juxtaglomerular (JG) Cells** (also called Granular Cells)
- Modified smooth muscle cells in the wall of the afferent arteriole
- Contain granules filled with renin
- Secrete renin in response to:
  - Low blood pressure (sensed by stretch receptors)
  - Decreased NaCl at macula densa
  - Sympathetic nerve stimulation (beta-1 receptors)

**3. Extraglomerular Mesangial Cells** (Lacis Cells)
- Located between afferent/efferent arterioles and macula densa
- Act as communication bridge between macula densa and JG cells
- Gap junctions connect all three cell types

## Functions

**Tubuloglomerular Feedback (TGF):**
When NaCl delivery to the macula densa is HIGH:
- Macula densa signals afferent arteriole to constrict
- Reduces blood flow to that glomerulus
- Decreases GFR, reducing salt delivery
- Negative feedback loop

**Renin Secretion:**
When blood pressure or NaCl delivery is LOW:
- JG cells release renin into bloodstream
- Renin converts angiotensinogen → angiotensin I
- ACE converts angiotensin I → angiotensin II
- Result: Vasoconstriction, aldosterone release, increased blood pressure`,
      keyTerms: [
        { term: 'tubuloglomerular feedback', definition: 'System by which macula densa senses NaCl and adjusts GFR of that nephron' },
        { term: 'juxtaglomerular cells', definition: 'Modified smooth muscle cells in afferent arteriole that secrete renin' },
        { term: 'extraglomerular mesangial cells', definition: 'Lacis cells that connect macula densa to JG cells' },
        { term: 'renin', definition: 'Enzyme released by JG cells that initiates the renin-angiotensin-aldosterone system' },
        { term: 'angiotensin', definition: 'Hormone produced when renin acts on angiotensinogen; causes vasoconstriction' },
      ],
      analogies: [
        'The TGF system is like a toilet tank - when the water (salt) level is too high, a float triggers the valve (afferent arteriole) to turn down the flow.',
        'Renin release is like a thermostat - when pressure drops, it triggers a heating system (RAAS) to bring things back up.',
      ],
    },
    3: {
      level: 3,
      summary: 'The JGA integrates tubular flow sensing (macula densa), baroreceptor function (JG cells), and paracrine signaling (mesangial cells) to coordinate intrarenal hemodynamics and systemic blood pressure through tubuloglomerular feedback and renin-angiotensin system activation.',
      explanation: `## Detailed Cellular Anatomy

### Macula Densa

**Location and Structure:**
- 15-20 specialized cells in the cortical thick ascending limb wall
- Position: Where DCT contacts afferent arteriole of same nephron
- Morphology: Tall columnar cells, nuclei crowded apically
- Absent brush border; reduced lateral interdigitation

**Sensing Mechanism:**
- NaCl entry via NKCC2 transporter (same as TAL)
- ROMK channel required for K+ recycling
- Increased NaCl uptake → Cell swelling, ATP release

**Signal Transduction:**
- ATP released basolaterally → Converted to adenosine
- Adenosine acts on A1 receptors on afferent arteriole → Vasoconstriction
- Alternative pathway: ATP acts on P2Y receptors
- Also releases prostaglandins (PGE2, PGI2)

### Juxtaglomerular (Granular) Cells

**Structure:**
- Modified smooth muscle cells in afferent arteriole wall
- Located mainly in afferent arteriole, fewer in efferent
- Epithelioid appearance with prominent rough ER
- Contain renin in paracrystalline secretory granules

**Renin Secretion Stimuli:**
1. **Baroreceptor mechanism**: Decreased stretch of afferent arteriole wall → Renin release
2. **Macula densa mechanism**: Decreased NaCl delivery → Signal to increase renin
3. **Sympathetic nervous system**: Beta-1 adrenergic receptor activation → Renin release
4. **Prostaglandins**: PGE2, PGI2 stimulate renin secretion

**Renin Secretion Inhibition:**
- Increased afferent arteriole pressure (stretch)
- Increased NaCl at macula densa
- Angiotensin II (negative feedback)
- Atrial natriuretic peptide (ANP)
- Endothelin

### Extraglomerular Mesangial Cells (Lacis Cells)

**Location:**
- Fill triangular space between afferent arteriole, efferent arteriole, and macula densa

**Connections:**
- Gap junctions with intraglomerular mesangium
- Gap junctions with macula densa cells
- Functionally continuous with JG cells

**Function:**
- Transmit signals from macula densa to JG cells
- May modulate vascular tone
- Support and structural role

## Tubuloglomerular Feedback (TGF)

### High NaCl at Macula Densa:
1. Increased NaCl entry via NKCC2
2. ATP release → Extracellular adenosine formation (via ecto-5'-nucleotidase)
3. Adenosine binds A1 receptors on afferent arteriole
4. Vasoconstriction of afferent arteriole
5. Decreased glomerular capillary pressure
6. Decreased GFR in that nephron

### Low NaCl at Macula Densa:
1. Decreased NKCC2 activity
2. Reduced adenosine production
3. COX-2 upregulation → PGE2 synthesis
4. Nitric oxide production
5. Afferent arteriole dilation
6. Increased GFR
7. Simultaneously: Enhanced renin release from JG cells

### TGF Gain and Reset:
- "Operating point" can be modulated
- Chronic high salt: TGF sensitivity decreases
- RAAS activation: Shifts curve to allow higher NaCl at given GFR
- Loop diuretics: Block NKCC2, interpreted as "low salt" → Increased renin

## Renin-Angiotensin System Integration

### Renin Release Pathway:
JG cells → Renin → (liver) Angiotensinogen → Angiotensin I → (ACE, lung) Angiotensin II

### Angiotensin II Effects:
- Systemic vasoconstriction
- Preferential efferent arteriole constriction (maintains GFR)
- Aldosterone secretion (adrenal cortex)
- ADH release (posterior pituitary)
- Sodium reabsorption (proximal tubule)
- Thirst stimulation (hypothalamus)`,
      keyTerms: [
        { term: 'A1 adenosine receptor', definition: 'Receptor on afferent arteriole that mediates vasoconstriction in response to adenosine from macula densa' },
        { term: 'COX-2', definition: 'Cyclooxygenase-2; upregulated in macula densa during low salt; produces prostaglandins that stimulate renin' },
        { term: 'NKCC2', definition: 'Na-K-2Cl cotransporter in TAL and macula densa; sensing mechanism for tubular NaCl' },
        { term: 'baroreceptor mechanism', definition: 'Intrarenal sensing of afferent arteriole pressure; decreased stretch stimulates renin release' },
        { term: 'TGF gain', definition: 'Sensitivity of the tubuloglomerular feedback response; can be modulated by salt status and hormones' },
        { term: 'angiotensinogen', definition: 'Liver-derived precursor protein that renin cleaves to form angiotensin I' },
      ],
      clinicalNotes: 'Loop diuretics block NKCC2, fooling macula densa into "sensing" low salt, thus stimulating renin release. Thiazides also increase renin by causing volume contraction. ACE inhibitors block conversion to Ang II but don\'t stop renin release, causing Ang II to rise when ACEi is stopped.',
    },
    4: {
      level: 4,
      summary: 'The JGA represents a critical nephron-vascular feedback interface where molecular signaling cascades (ATP/adenosine, nitric oxide, prostaglandins, Ang II) integrate to modulate single-nephron GFR and systemic hemodynamics, with implications for hypertension pathophysiology and pharmacotherapy.',
      explanation: `## Molecular Signaling Pathways

### Macula Densa Signaling Cascade

**NaCl Sensing:**
- Entry via NKCC2 (furosemide-sensitive)
- Requires K+ recycling via ROMK
- Cell swelling triggers signaling
- Ionic microenvironment changes

**Signal Mediators:**

1. **ATP/Adenosine Pathway (Vasoconstriction):**
   - High NaCl → ATP release (pannexin-1, connexin hemichannels)
   - Extracellular ATP → Adenosine (CD39/CD73 ecto-nucleotidases)
   - Adenosine → A1 receptor (Gi-coupled) on afferent arteriole
   - Decreased cAMP, increased intracellular Ca2+
   - Vasoconstriction, decreased GFR

2. **Nitric Oxide Pathway (Vasodilation):**
   - Low NaCl → Increased nNOS (NOS1) activity
   - NO diffuses to afferent arteriole
   - Activates guanylyl cyclase → cGMP
   - Vasodilation, modulates TGF gain

3. **Prostaglandin Pathway (Renin Release):**
   - Low NaCl → COX-2 upregulation
   - PGE2 synthesis
   - PGE2 acts on EP4 receptors on JG cells
   - Increased cAMP → Renin exocytosis

4. **Connexin Signaling:**
   - Gap junctions (Connexin 40) couple JGA cells
   - Calcium wave propagation
   - Synchronized responses

### JG Cell Renin Secretion Mechanisms

**Stimulatory Pathways:**
- Beta-1 adrenergic receptors → Gs → cAMP → PKA → Exocytosis
- PGE2/PGI2 → EP2/4/IP receptors → cAMP
- Decreased calcium → Decreased myosin light chain phosphorylation → Relaxation and exocytosis
- Paradox: Low Ca2+ STIMULATES renin (unlike most exocytosis)

**Inhibitory Pathways:**
- Angiotensin II → AT1 receptor → Gq → IP3/Ca2+ → Inhibition (short-loop feedback)
- ANP/BNP → NPR-A → cGMP → PKG → Inhibition
- High perfusion pressure → Stretch → Calcium influx → Inhibition
- Endothelin → ETA receptor → Inhibition

**Calcium Paradox Explanation:**
- JG cells are modified smooth muscle
- Decreased stretch → Decreased Ca2+ entry
- Low Ca2+ relieves tonic inhibition of renin exocytosis
- Protein kinase A phosphorylation overcomes Ca2+-mediated inhibition

### TGF Modulation and Gain Control

**Factors Increasing TGF Gain:**
- High salt diet (chronic)
- Dehydration
- Angiotensin II

**Factors Decreasing TGF Gain:**
- Low salt diet (chronic adaptation)
- Nitric oxide
- Prostaglandins
- High flow states (pregnancy)

**Mathematical Model:**
- TGF efficiency = ΔPsf / Δ(NaCl delivery)
- Normal TGF can adjust SNGFR by 50%
- TGF time constant: 15-30 seconds

### Integration with Systemic RAAS

**Feedback Loops:**

1. **Short-Loop Feedback:**
   - Ang II → AT1 receptors on JG cells → Decreased renin
   - Operates at kidney level

2. **Long-Loop Feedback:**
   - Ang II → Systemic vasoconstriction → Increased BP
   - Increased BP → Increased afferent stretch → Decreased renin

3. **Ultra-Short Feedback:**
   - Renin may have direct effects on JG cells (pro-renin receptor)
   - Emerging area of research

### Macula Densa and Beyond

**Extrarenal Macula Densa Effects:**
- Modulates glomerular mesangial cell contraction
- Influences GBM permeability (indirect)
- Produces growth factors (EGF, TGF-β)

**Developmental and Regenerative Role:**
- Macula densa cells as stem-like niche for podocyte regeneration (controversial)
- Wnt/β-catenin signaling

## Species Differences

- Humans: ~15-20 macula densa cells per JGA
- Rodents: Larger, more prominent JG cell granules
- Comparative physiology important for translating experimental data`,
      keyTerms: [
        { term: 'connexin-40', definition: 'Gap junction protein linking JGA cells; essential for coordinated responses' },
        { term: 'nNOS', definition: 'Neuronal nitric oxide synthase; found in macula densa; produces NO for vasodilation' },
        { term: 'calcium paradox', definition: 'Phenomenon where decreased calcium stimulates renin release (opposite of typical exocytosis)' },
        { term: 'short-loop feedback', definition: 'Intrarenal negative feedback where Ang II inhibits renin release from JG cells' },
        { term: 'pro-renin receptor', definition: '(P)RR; binds prorenin and renin; may have RAAS-independent signaling functions' },
        { term: 'pannexin-1', definition: 'Channel mediating ATP release from macula densa cells during high NaCl sensing' },
      ],
      clinicalNotes: 'Understanding JGA physiology explains diuretic effects: Loop diuretics block NKCC2 at macula densa, decreasing sensed NaCl, increasing renin (and thus secondary hyperaldosteronism). NSAIDs block COX-2, reducing PGE2-mediated renin release. Beta-blockers inhibit sympathetic-mediated renin release.',
    },
    5: {
      level: 5,
      summary: 'Clinical translation of JGA physiology informs management of hypertension, heart failure, and kidney disease, including pharmacological modulation of RAAS components, understanding of primary aldosteronism, and emerging therapies targeting the macula densa-renin axis.',
      explanation: `## Clinical Pathophysiology

### Hypertension and the JGA

**Essential Hypertension:**
- Resetting of TGF operating point
- Impaired pressure natriuresis
- Relative renin excess for sodium status
- Genetic variants: ACE, AGT, renin gene polymorphisms

**Secondary Hypertension:**
- Renovascular hypertension: Decreased renal perfusion → Inappropriately high renin
- Primary aldosteronism: Low renin, high aldosterone
- Renin-secreting tumors: Very high renin, severe hypertension

**Salt-Sensitive vs. Salt-Resistant Hypertension:**
- Salt-sensitive: Impaired TGF adaptation, blunted renin suppression
- Salt-resistant: Normal TGF modulation with salt intake changes

### JGA in Kidney Disease

**Chronic Kidney Disease:**
- Surviving nephrons: TGF reset to higher SNGFR
- Hyperfiltration stress
- Persistent RAAS activation despite volume expansion
- Rationale for ACEi/ARB nephroprotection

**Diabetic Nephropathy:**
- Early: Afferent arteriole dilation (NO, prostaglandins, glucose)
- Impaired TGF sensitivity
- Increased SNGFR ("hyperfiltration")
- SGLT2 inhibitors: Restore TGF by increasing distal NaCl delivery

**Acute Kidney Injury:**
- TGF acutely activated by tubular damage
- Macula densa signaling may contribute to oliguria
- Recovery involves TGF normalization

### Pharmacological Targeting

**Renin Inhibitors:**
- Aliskiren: Direct renin inhibitor
- Blocks first step of RAAS
- Clinical efficacy but limited adoption (cost, no outcome advantage over ACEi)
- Combination with ACEi/ARB: Increased adverse events (ALTITUDE trial)

**ACE Inhibitors:**
- Block Ang I → Ang II conversion
- Also increase bradykinin (cough mechanism)
- Increase renin (loss of negative feedback)
- Reduce efferent arteriole tone → Decreased GFR, decreased proteinuria

**Angiotensin Receptor Blockers:**
- Block AT1 receptor
- Increase renin and Ang II (blocked at receptor)
- Similar efficacy to ACEi
- No bradykinin accumulation (no cough)

**Mineralocorticoid Receptor Antagonists:**
- Spironolactone, eplerenone, finerenone
- Block aldosterone effects
- Hyperkalemia risk
- Finerenone: Non-steroidal, improved kidney/CV outcomes in CKD/DM

**SGLT2 Inhibitors and TGF:**
- Block proximal glucose reabsorption
- Increased distal NaCl delivery
- Macula densa senses "high salt" → TGF activation
- Afferent arteriole constriction → Reduced glomerular pressure
- Explains "dip" in GFR then stabilization
- Profound kidney and CV protection

### Renin Measurement and Clinical Use

**Plasma Renin Activity (PRA):**
- Measures generation of Ang I
- Affected by substrate availability
- Units: ng Ang I/mL/hr

**Direct Renin Concentration (DRC):**
- Immunoassay for renin protein
- More standardized
- Units: mU/L or pg/mL

**Aldosterone-to-Renin Ratio (ARR):**
- Screening test for primary aldosteronism
- Cutoffs vary by assay
- Confirm with salt loading or fludrocortisone suppression

**Clinical Scenarios:**

| Condition | Renin | Aldosterone | Blood Pressure |
|-----------|-------|-------------|----------------|
| Essential HTN | Variable | Normal | High |
| Renovascular HTN | High | High | High |
| Primary aldosteronism | Low | High | High |
| Malignant HTN | Very high | High | Very high |
| Liddle syndrome | Low | Low | High |
| Addison's disease | High | Low | Low |
| ACEi/ARB therapy | High | Low-normal | Lower |

### Genetic Disorders

**Bartter Syndrome (Type V):**
- CaSR activating mutations
- Mimics loop diuretic use
- High renin, high aldosterone
- Hypercalciuria

**Gitelman Syndrome:**
- NCC mutations
- Mimics thiazide use
- High renin, elevated aldosterone
- Hypocalciuria, hypomagnesemia

**Gordon Syndrome (Pseudohypoaldosteronism Type II):**
- WNK kinase mutations
- Enhanced NCC activity
- Low renin, low-normal aldosterone
- Hypertension, hyperkalemia
- Thiazide-responsive

### Emerging Therapies

**Firibastat (QGC001):**
- Aminopeptidase A inhibitor
- Blocks brain Ang III formation
- Central RAAS modulation

**Zilebesiran:**
- siRNA targeting hepatic angiotensinogen
- Reduces angiotensinogen synthesis
- Phase 2 trials showing BP reduction

**Aldosterone Synthase Inhibitors:**
- Block final step of aldosterone synthesis
- Avoid electrolyte effects of MRAs
- Baxdrostat in clinical trials`,
      keyTerms: [
        { term: 'aldosterone-to-renin ratio', definition: 'Screening test for primary aldosteronism; high ratio (low renin, high aldo) is positive' },
        { term: 'ALTITUDE trial', definition: 'Study showing harm from combining aliskiren with ACEi/ARB in diabetics with CKD' },
        { term: 'salt-sensitive hypertension', definition: 'Blood pressure significantly changes with dietary salt intake; associated with impaired RAAS suppression' },
        { term: 'hyperfiltration', definition: 'Elevated SNGFR in remaining nephrons; initial adaptation but ultimately maladaptive' },
        { term: 'finerenone', definition: 'Non-steroidal MRA with improved kidney and cardiovascular outcomes in diabetic CKD' },
        { term: 'zilebesiran', definition: 'Investigational siRNA targeting angiotensinogen mRNA; novel RAAS inhibition approach' },
      ],
      clinicalNotes: `Clinical practice pearls:
1. The GFR "dip" with ACEi/ARB or SGLT2i is expected and hemodynamic - up to 30% acceptable if stabilizes
2. Check renin before starting antihypertensives when considering secondary causes
3. Low renin + hypertension: Consider primary aldosteronism, Liddle, or apparent mineralocorticoid excess
4. SGLT2i benefit in CKD is partly mediated by restoring TGF and reducing hyperfiltration
5. Hold ACEi/ARB during acute illness ("sick day rules") to preserve GFR
6. MRAs add benefit on top of ACEi/ARB - quadruple therapy now standard for HFrEF`,
    },
  },

  media: [
    {
      id: 'jga-diagram',
      type: 'diagram',
      filename: 'juxtaglomerular-apparatus.svg',
      title: 'Juxtaglomerular Apparatus Structure',
      description: 'Showing macula densa, JG cells, and extraglomerular mesangial cells',
    },
    {
      id: 'jga-histology',
      type: 'histology',
      filename: 'jga-histology.jpg',
      title: 'JGA Histological Section',
      description: 'Light microscopy showing JGA at vascular pole of glomerulus',
    },
  ],

  citations: [
    {
      id: 'brenner-tgf',
      type: 'textbook',
      title: 'Tubuloglomerular Feedback and the Juxtaglomerular Apparatus',
      source: 'Brenner and Rector\'s The Kidney',
      chapter: '10',
    },
    {
      id: 'schnermann-review',
      type: 'article',
      title: 'Juxtaglomerular Cell Complex in the Regulation of Renal Salt Excretion',
      authors: ['Schnermann, J.', 'Briggs, J.P.'],
      source: 'American Journal of Physiology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron' },
    { targetId: 'pathway-raas', targetType: 'pathway', relationship: 'related', label: 'RAAS' },
    { targetId: 'process-glomerular-filtration', targetType: 'pathway', relationship: 'related', label: 'Glomerular Filtration' },
  ],

  tags: {
    systems: ['urinary', 'cardiovascular'],
    topics: ['anatomy', 'physiology', 'endocrine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default juxtaglomerularApparatus;
