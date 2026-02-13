/**
 * Nephron Physiology - Comprehensive Educational Content
 *
 * Covers glomerular filtration, tubular reabsorption/secretion,
 * countercurrent mechanism, GFR regulation, acid-base handling,
 * and electrolyte homeostasis.
 */

import { EducationalContent } from '../../types';

export const nephronPhysiology: EducationalContent = {
  id: 'physiology-nephron',
  type: 'process',
  name: 'Nephron Physiology',
  nameEs: 'Fisiologia de la Nefrona',
  alternateNames: ['Renal Tubular Function', 'Kidney Filtration Physiology', 'Nephron Transport'],

  levels: {
    1: {
      level: 1,
      summary: 'Your kidneys clean your blood by filtering out waste and extra water to make urine, while keeping the good stuff your body needs.',
      explanation: `## How Your Kidneys Clean Your Blood

### Your Kidneys Are Like a Water Filter

Your body has two kidneys, each about the size of your fist. They sit near the middle of your back. Every day, they filter ALL of your blood about 40 times.

### The Tiny Filters: Nephrons

Each kidney has about **1 million tiny filters** called **nephrons**. Think of each nephron as a miniature cleaning station with two main parts:

1. **The filter** (glomerulus): Like a coffee filter that lets water and small things through but keeps big things (like blood cells and proteins) in the blood
2. **The tube** (tubule): A long, twisty tube where your body decides what to keep and what to throw away

### How Filtering Works

1. Blood flows into the tiny filter at high pressure
2. Water, sugar, salt, and waste get pushed through the filter
3. Big things like blood cells and proteins stay in the blood
4. The filtered liquid flows into the tube

### What the Tube Does

As the filtered liquid flows through the tube, your body:
- **Takes back** the good stuff: water, sugar, salt, and other nutrients go back into the blood
- **Leaves behind** the waste: things your body does not need become urine

### Why Kidneys Matter

Without your kidneys:
- Waste would build up and poison your body
- You would have too much or too little water
- The balance of salt and minerals would be off
- Your blood could become too acidic

### Fun Facts
- You make about 1-2 liters of urine per day
- Your kidneys filter about 180 liters of blood daily but return most of it
- You can live with just one kidney`,
      keyTerms: [
        { term: 'kidney', definition: 'An organ that cleans your blood and makes urine' },
        { term: 'nephron', definition: 'A tiny filter unit inside the kidney -- each kidney has about 1 million' },
        { term: 'urine', definition: 'The liquid waste your kidneys make that leaves your body when you pee' },
        { term: 'filter', definition: 'Something that separates things you want from things you do not want, like a coffee filter' },
      ],
      analogies: [
        'Your kidney is like a water treatment plant -- it takes in dirty water (blood with waste), cleans it, and sends clean water back out.',
        'Nephrons are like tiny coffee filters -- they let small stuff through but keep the big important things in your blood.',
        'The kidney tubule is like a recycling conveyor belt -- it picks out useful items to return before the rest goes to the dump.',
      ],
      examples: [
        'When you drink a lot of water, your kidneys make more urine to get rid of the extra.',
        'If you eat salty food, your kidneys hold onto more water to balance the salt, which is why you might feel puffy.',
        'Dark yellow urine means you need more water -- your kidneys are saving water by making concentrated urine.',
      ],
      patientCounselingPoints: [
        'Drink enough water every day to help your kidneys do their job.',
        'Too much salt makes your kidneys work harder.',
        'Some medicines can hurt your kidneys, so always follow dosing instructions.',
      ],
    },

    2: {
      level: 2,
      summary: 'The nephron filters blood at the glomerulus and then selectively reabsorbs water, glucose, electrolytes, and other substances while secreting waste into the tubular fluid to produce urine.',
      explanation: `## The Nephron: Structure and Function

### Nephron Anatomy

Each nephron has these main parts:
1. **Glomerulus**: A ball of tiny capillaries where blood is filtered
2. **Bowman's capsule**: A cup that catches the filtered fluid
3. **Proximal convoluted tubule (PCT)**: First section of the tube -- does most reabsorption
4. **Loop of Henle**: A U-shaped section that dips into the kidney's inner region
5. **Distal convoluted tubule (DCT)**: Fine-tunes what is reabsorbed
6. **Collecting duct**: Final adjustments before urine exits

### Glomerular Filtration

- Blood enters the glomerulus through the **afferent arteriole** and exits through the **efferent arteriole**
- High blood pressure in the glomerulus forces water and small solutes through the filter
- **Glomerular filtration rate (GFR)**: About 125 mL/min or 180 L/day
- The filtrate (filtered fluid) contains water, glucose, amino acids, electrolytes, urea, and other small molecules
- Proteins and blood cells are too large to pass through

### Tubular Reabsorption

Most of the filtrate is reabsorbed back into the blood:
- **PCT**: Reabsorbs ~65% of filtered water, sodium, and glucose (all glucose normally reabsorbed here)
- **Loop of Henle**: Concentrates urine; descending limb reabsorbs water, ascending limb reabsorbs salt
- **DCT**: Fine-tunes sodium and calcium reabsorption
- **Collecting duct**: Regulated water reabsorption controlled by **ADH** (antidiuretic hormone)

### Tubular Secretion

Some substances are actively pumped FROM blood INTO the tubule:
- Hydrogen ions (H+) -- helps control blood pH
- Potassium (K+) -- regulated by aldosterone
- Drug metabolites and toxins

### Hormonal Regulation

- **ADH** (from pituitary): Makes collecting duct more permeable to water -- less urine, more concentrated
- **Aldosterone** (from adrenal glands): Increases sodium reabsorption and potassium secretion in DCT and collecting duct
- **ANP** (from heart): Increases sodium and water excretion -- opposes aldosterone

### Acid-Base Balance

The kidneys help maintain blood pH (7.35-7.45) by:
- Reabsorbing bicarbonate (HCO3-) from the filtrate
- Secreting hydrogen ions (H+) into the tubule
- Producing new bicarbonate when needed`,
      keyTerms: [
        { term: 'glomerulus', definition: 'A ball of tiny capillaries in the nephron where blood filtration occurs', pronunciation: 'gloh-MARE-yoo-lus' },
        { term: 'GFR', definition: 'Glomerular filtration rate -- the amount of fluid filtered by the kidneys per minute; normally about 125 mL/min' },
        { term: 'reabsorption', definition: 'The process of moving useful substances from the tubular fluid back into the blood' },
        { term: 'secretion', definition: 'The process of moving waste substances from the blood into the tubular fluid' },
        { term: 'ADH', definition: 'Antidiuretic hormone -- tells the collecting duct to reabsorb more water, making urine more concentrated' },
        { term: 'aldosterone', definition: 'A hormone from the adrenal glands that increases sodium reabsorption and potassium secretion' },
      ],
      analogies: [
        'The glomerulus is like a sieve -- it lets small molecules through but keeps large proteins and cells in the blood.',
        'The PCT is like a greedy recycler that grabs back most of the good stuff before it gets thrown away.',
        'ADH is like a faucet controller -- when ADH is high, the faucet is closed (less urine); when low, the faucet is open (more dilute urine).',
      ],
      examples: [
        'After drinking a large glass of water, ADH decreases, and you produce more dilute urine.',
        'In dehydration, ADH increases, making the collecting duct reabsorb more water and producing dark, concentrated urine.',
        'Diabetes mellitus can overwhelm the PCT glucose transporters, causing glucose to appear in urine.',
      ],
      patientCounselingPoints: [
        'GFR is the best measure of how well your kidneys are working.',
        'Blood tests for creatinine help estimate your GFR.',
        'Some blood pressure medications (ACE inhibitors) protect your kidneys by reducing filtration pressure.',
      ],
    },

    3: {
      level: 3,
      summary: 'The nephron performs glomerular filtration driven by Starling forces, followed by segment-specific tubular reabsorption and secretion involving active and passive transport mechanisms, countercurrent multiplication for urine concentration, and hormonal regulation of GFR and electrolyte/acid-base balance.',
      explanation: `## Nephron Physiology: Mechanisms of Renal Function

### Glomerular Filtration

**Starling forces governing filtration:**
- **Glomerular capillary hydrostatic pressure (PGC)**: ~60 mmHg (favors filtration)
- **Bowman's capsule hydrostatic pressure (PBS)**: ~18 mmHg (opposes filtration)
- **Glomerular capillary oncotic pressure (piGC)**: ~32 mmHg (opposes filtration)
- **Bowman's capsule oncotic pressure (piBS)**: ~0 mmHg (negligible)
- **Net filtration pressure**: PGC - PBS - piGC + piBS = ~10 mmHg

**GFR = Kf x Net Filtration Pressure**
- Kf (filtration coefficient) reflects capillary permeability and surface area
- Normal GFR: ~125 mL/min or ~180 L/day
- Filtration fraction (FF): GFR/RPF = ~20%

**Filtration barrier layers:**
1. Fenestrated endothelium (size barrier)
2. Glomerular basement membrane (charge and size barrier)
3. Podocyte foot processes with slit diaphragms (final barrier)

### Tubular Transport by Segment

**Proximal Convoluted Tubule (PCT) -- 65-70% reabsorption:**
- Na+ reabsorption via Na/K-ATPase (basolateral) and co-transporters (apical)
- SGLT2 reabsorbs ~90% of glucose; SGLT1 reabsorbs remainder
- HCO3- reabsorption via carbonic anhydrase (CA-II and CA-IV)
- Amino acids, phosphate, and uric acid reabsorption
- Secretion: organic acids (PAH), organic bases, drugs
- Isosmotic reabsorption -- tubular fluid remains ~300 mOsm/kg

**Loop of Henle:**
- **Thin descending limb**: Permeable to water, relatively impermeable to solutes -- concentrates tubular fluid
- **Thin ascending limb**: Permeable to NaCl (passive), impermeable to water
- **Thick ascending limb (TAL)**: Na-K-2Cl cotransporter (NKCC2) -- site of loop diuretics; impermeable to water; generates dilute fluid (~100 mOsm/kg)
- TAL also reabsorbs Mg2+ and Ca2+ (paracellularly, driven by lumen-positive voltage)

**Distal Convoluted Tubule (DCT):**
- NaCl cotransporter (NCC) -- site of thiazide diuretics
- PTH-regulated Ca2+ reabsorption (TRPV5 channels)
- Continued dilution of tubular fluid

**Collecting Duct:**
- Principal cells: ENaC (Na+ reabsorption, aldosterone-regulated), ROMK (K+ secretion), aquaporin-2 (ADH-regulated water reabsorption)
- Intercalated cells: Type A secretes H+ (alpha-intercalated); Type B secretes HCO3- (beta-intercalated)
- Final urine concentration: 50-1200 mOsm/kg depending on ADH

### Countercurrent Multiplication and Exchange

**Countercurrent multiplication (Loop of Henle):**
1. TAL actively pumps NaCl into interstitium (single effect: ~200 mOsm gradient)
2. Water leaves descending limb by osmosis
3. The opposing flow directions multiply the small gradient into a large corticomedullary osmotic gradient (300 to 1200 mOsm/kg)

**Countercurrent exchange (vasa recta):**
- U-shaped capillaries paralleling the loop of Henle
- Descending vasa recta loses water and gains solute
- Ascending vasa recta gains water and loses solute
- Net effect: Preserves the medullary gradient while supplying blood to the medulla

**Urea recycling:**
- ADH-regulated UT-A1/A3 urea transporters in inner medullary collecting duct
- Urea contributes ~50% of inner medullary osmolality
- Urea recycling between collecting duct and thin ascending limb amplifies concentrating ability

### GFR Regulation

**Myogenic response**: Afferent arteriole constricts when stretched by increased pressure
**Tubuloglomerular feedback (TGF)**: Macula densa senses NaCl delivery to TAL
- High NaCl delivery -> adenosine/ATP release -> afferent constriction -> decreased GFR
- Low NaCl delivery -> prostaglandin/NO release -> afferent dilation -> increased GFR

**RAAS**: Decreased renal perfusion -> renin release -> angiotensin II
- Preferentially constricts efferent arteriole -> maintains GFR despite low perfusion
- Aldosterone: Na+ retention, K+ secretion

**Sympathetic nervous system**: Renal sympathetic activation -> afferent/efferent constriction -> decreased RBF and GFR

### Acid-Base Handling

- **HCO3- reabsorption**: PCT reabsorbs ~80% (via CA-mediated H+ secretion), TAL ~15%, collecting duct ~5%
- **H+ secretion**: Na/H exchanger (NHE3) in PCT; H+-ATPase and H/K-ATPase in collecting duct
- **New HCO3- generation**: Ammonium (NH4+) excretion and titratable acidity (H2PO4-)
- **Ammoniagenesis**: Glutamine metabolism in PCT generates NH4+ and new HCO3-; NH4+ is trapped in acidic collecting duct fluid

### Electrolyte Homeostasis

**Sodium**: Fine-tuned at multiple segments; aldosterone and ANP are key regulators
**Potassium**: Freely filtered; PCT reabsorbs 65%, TAL 25%; DCT/CD secretion is regulated by aldosterone, flow rate, and serum K+
**Calcium**: 60% reabsorbed in PCT (paracellular), 25% in TAL (paracellular, driven by NKCC2), 8% in DCT (transcellular, PTH-regulated)
**Phosphate**: Reabsorbed in PCT via NaPi-IIa/IIc; inhibited by PTH and FGF-23
**Magnesium**: 60-70% reabsorbed in TAL (paracellular, claudin-16/19), 5-10% in DCT (TRPM6)`,
      keyTerms: [
        { term: 'Starling forces', definition: 'The balance of hydrostatic and oncotic pressures across the glomerular capillary wall that determines net filtration pressure' },
        { term: 'filtration fraction', definition: 'GFR divided by renal plasma flow; normally about 20%; reflects the proportion of plasma that is filtered' },
        { term: 'countercurrent multiplication', definition: 'The process by which the loop of Henle generates a corticomedullary osmotic gradient (300-1200 mOsm/kg) through active NaCl transport and opposing flow directions' },
        { term: 'tubuloglomerular feedback', definition: 'Autoregulatory mechanism whereby macula densa cells sense NaCl delivery and modulate afferent arteriolar tone to stabilize GFR' },
        { term: 'NKCC2', definition: 'Na-K-2Cl cotransporter in the thick ascending limb; target of loop diuretics (furosemide); drives countercurrent multiplication' },
        { term: 'ENaC', definition: 'Epithelial sodium channel in the collecting duct principal cells; regulated by aldosterone; target of amiloride' },
        { term: 'carbonic anhydrase', definition: 'Enzyme catalyzing CO2 + H2O <-> H2CO3 <-> H+ + HCO3-; essential for proximal tubular bicarbonate reabsorption; inhibited by acetazolamide' },
      ],
      examples: [
        'SGLT2 inhibitors (empagliflozin, dapagliflozin) block glucose reabsorption in the PCT, causing glucosuria and lowering blood glucose in diabetes.',
        'Loop diuretics (furosemide) block NKCC2 in the TAL, impairing the medullary gradient and causing dilute, high-volume urine.',
        'ACE inhibitors dilate the efferent arteriole, lowering intraglomerular pressure and reducing proteinuria in diabetic nephropathy.',
      ],
      clinicalNotes: 'Understanding segment-specific transport is essential for pharmacology. Each diuretic class targets a specific nephron segment: carbonic anhydrase inhibitors (PCT), loop diuretics (TAL), thiazides (DCT), and potassium-sparing diuretics (collecting duct). Clearance studies (inulin for GFR, PAH for RPF) remain the gold standard for research, while estimated GFR using creatinine or cystatin C is used clinically.',
    },

    4: {
      level: 4,
      summary: 'Renal physiology integrates glomerular filtration dynamics, segment-specific molecular transport mechanisms, countercurrent multiplication with urea recycling, neurohumoral GFR regulation via RAAS/TGF/myogenic pathways, sophisticated acid-base handling through bicarbonate reclamation and ammoniagenesis, and multi-hormonal electrolyte homeostasis with clinical implications for diuretic pharmacology and kidney disease.',
      explanation: `## Advanced Nephron Physiology

### Glomerular Filtration: Molecular Detail

**Filtration barrier ultrastructure:**
- Fenestrated endothelium: 70-100 nm fenestrae, glycocalyx with negative charge
- GBM: Type IV collagen (alpha-3,4,5 chains -- Goodpasture antigen), laminin, heparan sulfate proteoglycans
- Podocyte slit diaphragms: Nephrin, podocin, CD2AP complex; 40 nm pore size
- Charge selectivity: Anionic glycocalyx and GBM repel albumin (pI ~4.7)

**Filtration coefficient (Kf) modulation:**
- Mesangial cell contraction (angiotensin II, endothelin) reduces Kf
- Mesangial cell relaxation (ANP, NO, PGE2) increases Kf
- Disease states: Diabetic nephropathy -- GBM thickening reduces Kf; early diabetes -- mesangial relaxation increases Kf (hyperfiltration)

**Filtration equilibrium:**
- Oncotic pressure rises along the glomerular capillary as protein-free filtrate exits
- In some species (Munich-Wistar rat), filtration equilibrium is reached before the efferent end
- Humans likely near filtration equilibrium, making GFR sensitive to RPF changes

### Molecular Transport Mechanisms

**PCT Na+ transport:**
- Apical: NHE3 (Na/H exchanger, 50-60% of Na reabsorption), SGLT2/SGLT1, Na-phosphate cotransporters, Na-amino acid cotransporters
- Basolateral: Na/K-ATPase (3Na+ out, 2K+ in), Na/HCO3- cotransporter (NBC1)
- Paracellular: Claudin-2 permeable to Na+ and water
- Energy cost: PCT consumes ~80% of renal O2

**TAL transport and the single effect:**
- NKCC2 (apical): Electroneutral 1Na+:1K+:2Cl- cotransport
- K+ recycling via ROMK creates lumen-positive transepithelial voltage (+8 mV)
- This voltage drives paracellular reabsorption of Na+, Ca2+, Mg2+ (claudin-16/19)
- Bartter syndrome: Loss-of-function mutations in NKCC2, ROMK, ClC-Kb, or barttin
- Furosemide blocks NKCC2 -- abolishes lumen-positive voltage, causing Ca2+ and Mg2+ wasting

**DCT NCC transport:**
- NCC: Electroneutral Na-Cl cotransporter
- WNK kinases (WNK1, WNK4) regulate NCC via SPAK/OSR1 phosphorylation
- Gitelman syndrome: Loss-of-function NCC mutations -- mimics chronic thiazide use
- Gordon syndrome (pseudohypoaldosteronism type II): WNK mutations cause NCC overactivity

**Collecting duct principal cell signaling:**
- Aldosterone: Binds mineralocorticoid receptor -> SGK1 activation -> ENaC insertion and decreased Nedd4-2-mediated ENaC degradation
- ADH (V2 receptor): cAMP/PKA pathway -> AQP2 trafficking to apical membrane; also stimulates UT-A1 and NKCC2
- Liddle syndrome: Gain-of-function ENaC mutations (PY motif deleted) -> constitutive Na+ reabsorption

### Countercurrent System: Quantitative Model

**Medullary gradient generation:**
- Single effect at TAL: ~200 mOsm difference between tubular fluid and interstitium
- Multiplication by countercurrent flow: Cortex 300 -> outer medulla 600 -> inner medulla 1200 mOsm/kg
- Inner medullary concentrating mechanism: Not fully explained by active transport alone
- "Passive model" (Kokko-Rector): High urea in inner medullary interstitium drives passive NaCl reabsorption from thin ascending limb

**Urea handling (detailed):**
- PCT: 50% of filtered urea reabsorbed (solvent drag)
- Thin descending limb: Urea secretion (UT-A2)
- TAL/DCT: Impermeable to urea -- urea concentrates as water is reabsorbed
- Inner medullary collecting duct: ADH-stimulated urea reabsorption via UT-A1/A3
- Result: Urea recycling creates high medullary urea concentration (~600 mOsm/kg)

**Free water clearance (CH2O):**
- CH2O = V - Cosm (where Cosm = Uosm x V / Posm)
- Positive CH2O: Dilute urine (water excess being excreted)
- Negative CH2O (TcH2O): Concentrated urine (free water being retained)
- Electrolyte-free water clearance more clinically useful for dysnatremia management

### GFR Autoregulation: Integrated Model

**Myogenic mechanism (Bayliss effect):**
- Stretch-activated cation channels in afferent arteriolar smooth muscle
- Depolarization -> voltage-gated Ca2+ channels -> contraction
- Response time: 5-10 seconds
- Effective range: MAP 80-180 mmHg

**TGF mechanism (detailed):**
- Macula densa NaCl entry via apical NKCC2
- Increased NaCl -> ATP/adenosine release (adenosine via ecto-5'-nucleotidase)
- Adenosine acts on A1 receptors on afferent arteriole -> constriction
- Simultaneously: Decreased renin release from JG cells
- TGF gain: ~50% compensation for changes in distal NaCl delivery
- COX-2 and nNOS in macula densa modulate TGF sensitivity

**RAAS in detail:**
- Renin release stimuli: Decreased afferent arteriolar pressure (baroreceptor), decreased NaCl at macula densa (TGF), sympathetic activation (beta-1)
- Angiotensin II effects on nephron: Efferent > afferent constriction, increased proximal Na/H exchange, increased aldosterone, ADH release, thirst
- ACE2/Ang(1-7)/Mas receptor axis: Counter-regulatory -- vasodilation, natriuresis

### Acid-Base: Molecular Mechanisms

**PCT bicarbonate reclamation:**
1. Apical NHE3 secretes H+ into lumen
2. Luminal H+ + filtered HCO3- -> H2CO3 -> CO2 + H2O (catalyzed by membrane-bound CA-IV)
3. CO2 diffuses into cell
4. Intracellular CA-II: CO2 + H2O -> H2CO3 -> H+ + HCO3-
5. H+ recycled to lumen via NHE3; HCO3- exits basolaterally via NBC1

**Collecting duct acid secretion (type A intercalated cells):**
- Apical H+-ATPase and H/K-ATPase secrete H+
- Basolateral AE1 (band 3) exchanges intracellular HCO3- for Cl-
- New HCO3- generated for each H+ secreted onto titratable acid or NH4+

**Ammoniagenesis and NH4+ excretion:**
- PCT: Glutamine -> NH4+ + alpha-ketoglutarate -> new HCO3-
- NH4+ enters lumen via NHE3 (substituting for H+)
- TAL: NH4+ reabsorbed via NKCC2 (substituting for K+) and paracellularly
- Medullary interstitium accumulates NH3/NH4+
- Collecting duct: NH3 diffuses into acidic lumen -> trapped as NH4+ (non-ionic diffusion trapping)
- Chronic acidosis upregulates glutaminase and increases ammoniagenesis 5-10 fold

### Potassium Homeostasis: Detailed Regulation

**Collecting duct K+ secretion determinants:**
- Aldosterone: Increases ENaC (Na entry) and SGK1 -> drives K+ secretion via ROMK and BK channels
- Tubular flow rate: High flow activates BK (maxi-K) channels
- Serum K+: Direct effect on principal cell K+ secretion
- Acid-base: Alkalosis increases, acidosis decreases K+ secretion (H/K-ATPase activation)
- WNK/SPAK pathway: Aldosterone paradox -- Ang II + aldosterone activates NCC (Na retention, no K+ secretion); K+ loading inhibits NCC -> Na delivery to CD -> K+ secretion`,
      keyTerms: [
        { term: 'nephrin', definition: 'Key transmembrane protein of the slit diaphragm; loss-of-function mutations cause congenital nephrotic syndrome (Finnish type)' },
        { term: 'WNK kinases', definition: 'With-No-Lysine kinases that regulate NCC and ENaC activity; mutations cause Gordon syndrome (pseudohypoaldosteronism type II)' },
        { term: 'Bartter syndrome', definition: 'Salt-wasting tubulopathy caused by LOF mutations in TAL transport proteins (NKCC2, ROMK, ClC-Kb, barttin); mimics chronic loop diuretic use' },
        { term: 'Gitelman syndrome', definition: 'Salt-wasting tubulopathy caused by LOF NCC mutations; mimics chronic thiazide use; hypokalemia, hypomagnesemia, hypocalciuria' },
        { term: 'TGF gain', definition: 'The fractional compensation of tubuloglomerular feedback for changes in distal NaCl delivery; normally ~50%' },
        { term: 'non-ionic diffusion trapping', definition: 'Mechanism by which NH3 crosses into the acidic collecting duct lumen and is protonated to NH4+, trapping it for excretion' },
        { term: 'aldosterone paradox', definition: 'The phenomenon whereby aldosterone can promote either Na+ retention (via Ang II and NCC) or K+ secretion (via ENaC in CD), depending on the stimulus' },
      ],
      clinicalNotes: 'The molecular understanding of nephron transport directly informs clinical management. SGLT2 inhibitors reduce hyperfiltration and have proven renal and cardiovascular benefits beyond glucose lowering (CREDENCE, DAPA-CKD trials). Understanding the aldosterone paradox explains why hyperkalemia in CKD responds to dietary K+ restriction and why MRAs can be used for blood pressure without excessive K+ wasting when Ang II levels are high. Bartter and Gitelman syndromes provide natural experiments validating our pharmacology -- their phenotypes mirror chronic diuretic use.',
    },

    5: {
      level: 5,
      summary: 'Contemporary nephron physiology integrates single-nephron GFR assessment, advanced molecular insights into podocyte biology and tubular channelopathies, novel understanding of the inner medullary concentrating mechanism, precision diuretic strategies guided by nephron segment pharmacology, and emerging therapeutic targets including SGLT2 inhibitors, endothelin receptor antagonists, and mineralocorticoid receptor antagonists for CKD progression.',
      explanation: `## Precision Nephron Physiology and Translational Applications

### Glomerular Physiology: Current Frontiers

**Single-nephron GFR (SNGFR) assessment:**
- Multiphoton microscopy in rodents enables real-time SNGFR measurement
- Human estimated SNGFR = total GFR / nephron number
- Nephron number estimation: MRI-based cortical volume, birth weight correlation (low birth weight -> fewer nephrons -> hyperfiltration)
- Brenner hypothesis: Reduced nephron endowment leads to compensatory hyperfiltration, glomerular hypertension, and progressive CKD

**Podocyte biology:**
- Podocytes are terminally differentiated -- lost podocytes are not replaced
- Podocyte detachment rate correlates with proteinuria severity
- TRPC6 gain-of-function: FSGS -- excess Ca2+ influx disrupts actin cytoskeleton
- Podocyte-specific transcription factors: WT1, LMX1B (nail-patella syndrome)
- Podocyte-targeting therapies: Rituximab (off-target SMPDL3b stabilization), abatacept (B7-1 on podocytes -- controversial)

### Tubular Transport: Molecular Refinements

**SGLT2 inhibition -- beyond glucosuria:**
- Tubuloglomerular feedback restoration: SGLT2i increases NaCl delivery to macula densa -> TGF activation -> afferent constriction -> reduced SNGFR
- Net effect: Reduced intraglomerular pressure (~3-5 mmHg decrease)
- Additional mechanisms: Reduced cortical O2 consumption, ketone body fuel shift, reduced inflammation/fibrosis
- CREDENCE: 30% reduction in kidney composite outcome in DKD
- DAPA-CKD: 39% reduction in kidney composite -- effective regardless of diabetes status
- EMPA-KIDNEY: Benefit extends to eGFR 20-45 with minimal proteinuria

**Endothelin receptor antagonists:**
- Endothelin-1: Mesangial contraction, podocyte injury, tubular fibrosis
- Atrasentan (selective ETA antagonist): SONAR trial -- 35% reduction in doubling of creatinine or ESKD in DKD
- Zibotentan + dapagliflozin (ZENITH-CKD): Combination under investigation
- Fluid retention risk managed by SGLT2i co-administration

**Non-steroidal MRA (finerenone):**
- Higher selectivity for MR vs GR (vs spironolactone)
- FIDELIO-DKD: 18% reduction in kidney composite
- FIGARO-DKD: 13% reduction in cardiovascular composite
- FIDELITY pooled analysis: Consistent kidney and CV benefits
- Lower hyperkalemia risk than steroidal MRAs

### Inner Medullary Concentrating Mechanism: Unresolved Questions

**Limitations of the passive model:**
- Kokko-Rector model requires very high urea permeability of thin ascending limb -- not consistently demonstrated
- NaCl permeability of thin ascending limb may be insufficient for passive model alone

**Alternative/complementary hypotheses:**
- Lactate accumulation from anaerobic glycolysis in inner medulla may contribute osmoles
- "3D architecture" hypothesis: Spatial arrangement of tubules and vasa recta creates micro-osmotic gradients
- Mathematical modeling suggests multiple mechanisms likely work in concert

**AQP2 trafficking (detailed):**
- Short-term regulation: V2R -> Gs -> cAMP -> PKA -> AQP2 S256 phosphorylation -> exocytic insertion
- Long-term: ADH increases AQP2 gene transcription (CRE element)
- Removal: AQP2 ubiquitination -> endocytosis -> degradation or recycling
- Nephrogenic DI: V2R mutations (X-linked) or AQP2 mutations (autosomal)
- Acquired NDI: Lithium (downregulates AQP2 via GSK3beta); hypercalcemia; hypokalemia

### Precision Diuretic Therapy

**Sequential nephron blockade:**
- Diuretic resistance: Post-diuretic NaCl retention, structural hypertrophy of downstream segments
- TAL hypertrophy after chronic loop diuretics: Increased NCC and ENaC expression
- Combination therapy rationale: Loop + thiazide blocks compensatory DCT reabsorption
- Metolazone preferred: Effective at low GFR (unlike HCTZ); reaches tubular lumen via organic cation transport

**Aquaretics (vasopressin receptor antagonists):**
- Tolvaptan (V2 antagonist): ADPKD (TEMPO 3:4, REPRISE) -- slows kidney growth and eGFR decline
- Mechanism: Reduced cAMP in collecting duct cells -> decreased cyst growth
- Monitoring: Liver function (hepatotoxicity risk), Na+ levels (rapid correction risk)

### Acid-Base: Advanced Concepts

**Pendrin (SLC26A4) in type B intercalated cells:**
- Apical Cl-/HCO3- exchanger mediating HCO3- secretion
- Upregulated in metabolic alkalosis
- Also expressed in thyroid and inner ear (Pendred syndrome)

**Kidney in chronic metabolic acidosis:**
- Adaptive ammoniagenesis: 5-10x increase in NH4+ excretion over 3-5 days
- GDF15 (growth differentiation factor 15): Emerging mediator of acidosis-induced muscle wasting
- BICAR-ICU trial: Bicarbonate therapy in severe metabolic acidemia (pH <7.20) with AKI KDIGO 2-3 reduced composite of death/RRT
- Alkali therapy in CKD: Sodium bicarbonate or fruits/vegetables slow CKD progression in small trials

### Emerging Biomarkers and Diagnostics

**Tubular injury biomarkers:**
- KIM-1 (kidney injury molecule 1): PCT injury marker; FDA-qualified
- NGAL (neutrophil gelatinase-associated lipocalin): Distal nephron/collecting duct injury
- L-FABP: Proximal tubular ischemia marker
- TIMP-2 x IGFBP7 (NephroCheck): Cell cycle arrest markers predicting AKI stage 2-3

**Precision nephrology approaches:**
- Kidney biopsy transcriptomics (NEPTUNE study): Molecular classification of glomerular diseases
- Urinary single-cell RNA sequencing: Non-invasive nephron segment-specific injury assessment`,
      keyTerms: [
        { term: 'Brenner hypothesis', definition: 'Reduced nephron number at birth leads to compensatory single-nephron hyperfiltration, glomerular hypertension, and progressive CKD; links low birth weight to adult kidney disease' },
        { term: 'SGLT2 inhibitor TGF mechanism', definition: 'SGLT2 inhibition increases NaCl delivery to macula densa, activating tubuloglomerular feedback and reducing intraglomerular pressure by 3-5 mmHg; key mechanism for renoprotection' },
        { term: 'finerenone', definition: 'Non-steroidal MRA with higher MR:GR selectivity than spironolactone; FIDELIO-DKD and FIGARO-DKD demonstrated kidney and cardiovascular benefits in DKD' },
        { term: 'sequential nephron blockade', definition: 'Strategy of combining diuretics targeting different nephron segments to overcome diuretic resistance caused by compensatory downstream reabsorption' },
        { term: 'NephroCheck (TIMP-2 x IGFBP7)', definition: 'Urinary cell cycle arrest biomarker product predicting development of moderate-severe AKI within 12 hours; FDA-approved' },
        { term: 'APOL1 risk variants', definition: 'G1 and G2 variants in the APOL1 gene (common in African descent) confer increased risk of FSGS, HIV-associated nephropathy, and hypertensive nephrosclerosis via podocyte injury' },
        { term: 'tolvaptan', definition: 'Selective V2 receptor antagonist that reduces cAMP-driven cystogenesis in ADPKD; TEMPO 3:4 and REPRISE trials showed slowed kidney growth and eGFR decline' },
      ],
      clinicalNotes: `Key translational points in modern nephrology:

1. **SGLT2 inhibitors** are now standard of care for CKD with or without diabetes (KDIGO 2024 guidelines). Their renoprotective mechanism centers on TGF restoration and intraglomerular pressure reduction, not glucose lowering.

2. **Combination kidney-protective therapy** (SGLT2i + non-steroidal MRA + RASi) is the emerging paradigm for DKD management, with additive benefits on kidney and cardiovascular outcomes.

3. **Diuretic resistance** is best addressed through understanding nephron physiology: sequential blockade, dose optimization accounting for CKD pharmacokinetics, and addressing neurohormonal activation.

4. **Tubular injury biomarkers** (KIM-1, NGAL, TIMP-2 x IGFBP7) enable earlier AKI detection than creatinine and are increasingly used in clinical trials as surrogate endpoints.

5. **Precision nephrology** is moving toward molecular classification of kidney diseases via biopsy transcriptomics (NEPTUNE) and non-invasive urinary diagnostics, enabling targeted therapy beyond empirical immunosuppression.`,
    },
  },

  media: [
    {
      id: 'nephron-structure-diagram',
      type: 'diagram',
      filename: 'nephron-anatomy-transport.svg',
      title: 'Nephron Anatomy and Segment-Specific Transport',
      description: 'Diagram of the nephron showing each segment with key transporters, reabsorption, and secretion processes',
    },
    {
      id: 'countercurrent-mechanism',
      type: 'diagram',
      filename: 'countercurrent-multiplication.svg',
      title: 'Countercurrent Multiplication',
      description: 'Step-by-step illustration of corticomedullary osmotic gradient generation via the loop of Henle and vasa recta',
    },
    {
      id: 'gfr-regulation-diagram',
      type: 'diagram',
      filename: 'gfr-regulation.svg',
      title: 'GFR Regulation Mechanisms',
      description: 'Overview of myogenic, TGF, RAAS, and sympathetic mechanisms regulating glomerular filtration rate',
    },
  ],

  citations: [
    {
      id: 'boron-renal',
      type: 'textbook',
      title: 'Medical Physiology',
      authors: ['Boron WF', 'Boulpaep EL'],
      source: 'Elsevier',
      chapter: '33-40',
    },
    {
      id: 'guyton-renal',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '26-31',
    },
    {
      id: 'brenner-rector',
      type: 'textbook',
      title: 'Brenner and Rector\'s The Kidney',
      authors: ['Yu ASL', 'Chertow GM', 'Luyckx VA', 'Marsden PA', 'Skorecki K', 'Taal MW'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-hemodynamics', targetType: 'topic', relationship: 'related', label: 'Hemodynamics (Renal Circulation)' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'see-also', label: 'Acute Kidney Injury' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'see-also', label: 'Chronic Kidney Disease' },
    { targetId: 'physiology-acid-base', targetType: 'topic', relationship: 'related', label: 'Acid-Base Physiology' },
  ],

  tags: {
    systems: ['renal', 'urinary'],
    topics: ['physiology', 'nephrology', 'acid-base', 'electrolytes', 'pharmacology'],
    keywords: ['nephron', 'GFR', 'glomerular filtration', 'tubular reabsorption', 'countercurrent', 'RAAS', 'aldosterone', 'ADH', 'diuretics', 'SGLT2', 'electrolyte homeostasis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephronPhysiology;
