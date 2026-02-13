/**
 * Urinary System Encyclopedia Entry
 * 
 * Transcribed from OpenStax Anatomy & Physiology Chapter 25 (CC BY 4.0)
 * Local comprehensive reference for offline access
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Urinary System Entry
 */
export const urinarySystemEntry: EncyclopediaEntry = {
  entryId: 'urinary-system',
  name: 'Urinary System',
  nameEs: 'Sistema Urinario',
  entryType: 'anatomy',
  category: 'renal',
  summary: 'The system responsible for filtering blood, producing urine, regulating fluid balance, electrolytes, blood pressure, and acid-base balance.',
  overview: {
    patient: 'Your urinary system is your body\'s filtration system. It consists of two kidneys (bean-shaped organs in your lower back), two ureters (tubes carrying urine to the bladder), one bladder (storage tank), and one urethra (tube for urine exit). The kidneys filter about 150-180 liters of blood daily, removing waste and excess water to make 1-2 liters of urine. They also help control blood pressure, produce red blood cells, and maintain proper levels of minerals like sodium and potassium.',
    intermediate: 'The urinary system maintains homeostasis by filtering blood plasma, regulating blood volume and composition, and excreting metabolic wastes. The kidneys are retroperitoneal organs at T12-L3, weighing 115-170g each. They filter approximately 180 L of plasma daily (GFR ~125 mL/min), producing 1-2 L of urine. Each kidney contains ~1 million nephrons (functional units). The nephron consists of a renal corpuscle (glomerulus + Bowman\'s capsule) for filtration and renal tubule (PCT, loop of Henle, DCT, collecting duct) for modification. The system regulates: water and electrolyte balance (Na+, K+, Ca2+, Mg2+, Cl-, HCO3-, PO4 3-), blood pressure (via renin-angiotensin-aldosterone system), acid-base balance (H+ and HCO3- regulation), and erythropoiesis (erythropoietin production).',
    professional: 'The urinary system comprises paired kidneys (metanephroi), paired ureters, urinary bladder, and urethra. Kidneys: retroperitoneal at vertebral levels T12-L3, right lower than left (liver), 11-12 cm length, 5-7 cm width, 3 cm thickness, 115-170g weight. Renal blood flow: ~1.2 L/min (20-25% cardiac output), high-pressure glomerular capillaries favor filtration. Functional anatomy: cortex (glomeruli, convoluted tubules), medulla (pyramids, loops of Henle, collecting ducts), renal pelvis (funnel-shaped, calyces), hilum (vessels/ureter enter). Nephron: renal corpuscle (glomerular capillaries, Bowman\'s capsule - parietal/simple squamous, visceral/podocytes with foot processes forming filtration slits) + renal tubule. Juxtaglomerular apparatus (macula densa, JG cells, extraglomerular mesangial cells) regulates GFR and renin release. Urine formation: glomerular filtration (ultrafiltration of plasma, 125 mL/min GFR), tubular reabsorption (99% filtrate returned - 178 L/day reabsorbed), tubular secretion (active transport of wastes). Hormonal control: ADH/vasopressin (V2 receptors, aquaporin-2 insertion), aldosterone (mineralocorticoid receptor, ENaC/Na+-K+-ATPase), ANP/BNP (natriuresis), PTH (Ca2+ reabsorption), renin-angiotensin system. Acid-base: HCO3- reabsorption (90% PCT), H+ secretion (PCT - Na+/H+ exchanger, intercalated cells - H+-ATPase, H+/K+-ATPase), NH4+ excretion, titratable acidity (H2PO4-).',
  },
  content: [
    {
      title: 'Kidney Anatomy and Structure',
      content: {
        patient: `Your kidneys are two bean-shaped organs located in your lower back, one on each side of your spine. Each kidney is about the size of a fist (4-5 inches long). The outer layer is called the cortex, and the inner layer is the medulla. Inside the medulla are cone-shaped sections called renal pyramids. The tips of these pyramids (papillae) drain urine into cup-shaped structures called calyces, which collect urine in the funnel-shaped renal pelvis before it flows to the ureter. Each kidney has a hilum on its inner side where blood vessels and the ureter connect.`,
        intermediate: `The kidneys are retroperitoneal organs (behind the peritoneum) located at vertebral levels T12-L3. The right kidney is slightly lower than the left due to the liver. Each kidney measures 10-12 cm long, 5-7 cm wide, 3 cm thick, and weighs 115-170g. Gross anatomy includes: the renal capsule (fibrous outer covering), cortex (outer region containing glomeruli and convoluted tubules), medulla (inner region with 8-18 renal pyramids), renal pyramids (cone-shaped with base toward cortex, apex/papilla pointing to hilum), renal columns (cortical tissue between pyramids, containing interlobular arteries), minor calyces (cup-shaped, collect urine from papillae), major calyces (2-3 per kidney, formed by union of minor calyces), and renal pelvis (funnel-shaped expansion formed by union of major calyces, continuous with ureter). The hilum is the medial indentation where the renal artery enters, renal vein exits, and ureter exits. Blood supply: renal artery → segmental arteries → interlobar arteries (between pyramids) → arcuate arteries (cortical-medullary junction) → interlobular/cortical radiate arteries → afferent arterioles → glomeruli.`,
        professional: `Kidney structure and organization:

Gross anatomy: Position - retroperitoneal, T12-L3, right 1-2 cm lower than left, protected by ribs 11-12 posteriorly. Capsules: true/fibrous capsule (dense irregular CT), perirenal fat capsule, renal fascia (anchors to surrounding structures). Dimensions: 11-12 cm × 5-7 cm × 3 cm, 125-170g (male), 115-155g (female). Internal structure: Cortex (outer 1 cm) - contains all glomeruli, PCT, DCT, cortical collecting ducts, interlobular vessels. Medulla (inner) - contains loops of Henle, medullary collecting ducts, vasa recta, divided into outer and inner medulla. Renal pyramids - 8-18 per kidney, base toward cortex, apex (papilla) projecting into minor calyx. Renal columns (of Bertin) - cortical extensions between pyramids, contain interlobular arteries. Calyces - minor (7-13, cup papillae), major (2-3, unite to form pelvis). Renal pelvis - funnel-shaped, narrows to become ureter at ureteropelvic junction (UPJ).

Vascular anatomy: Renal artery (direct branch of aorta, enters hilum) → anterior and posterior divisions → 5 segmental arteries (apical, upper, middle, lower, posterior) → interlobar arteries (run in renal columns) → arcuate arteries (cortical-medullary junction) → interlobular arteries (radiate into cortex) → afferent arterioles → glomerular capillaries → efferent arterioles → peritubular capillaries (cortex) or vasa recta (medulla) → interlobular veins → arcuate veins → interlobar veins → renal vein → IVC. Blood flow: 1.0-1.2 L/min (20-25% cardiac output, 4× blood flow per gram of tissue vs liver). Glomerular capillary pressure ~55 mmHg (favors filtration).

Lymphatic drainage: Follows veins to lateral aortic (lumbar) lymph nodes.

Innervation: Renal plexus (sympathetic T10-L2 via splanchnic and aorticorenal ganglia, parasympathetic via vagus), primarily vasomotor to afferent/efferent arterioles.`,
      },
    },
    {
      title: 'Nephron Structure',
      content: {
        patient: `The nephron is the tiny filtering unit of your kidney - each kidney has about 1 million nephrons. A nephron has two main parts: the renal corpuscle (where blood is filtered) and the renal tubule (where the filtrate is processed). The renal corpuscle contains a ball of capillaries called the glomerulus, surrounded by Bowman's capsule. After filtration, fluid enters the renal tubule, which includes the proximal convoluted tubule (where most reabsorption happens), the loop of Henle (U-shaped, creates concentrated urine), the distal convoluted tubule, and finally the collecting duct.`,
        intermediate: `The nephron is the functional unit of the kidney, with ~1 million per kidney. It consists of the renal corpuscle (filtration unit) and renal tubule (modification unit). Renal corpuscle: Glomerulus (tuft of 50-70 capillary loops fed by afferent arteriole, drained by efferent arteriole) surrounded by Bowman's capsule (parietal layer - simple squamous epithelium forming outer wall; visceral layer - podocytes with foot processes interdigitating around capillaries, forming filtration slits with slit diaphragms). Mesangial cells provide structural support and phagocytic function. Renal tubule: Proximal convoluted tubule (PCT) - cuboidal cells with dense microvilli (brush border), site of 65% reabsorption; Loop of Henle - descending thin limb (simple squamous, water permeable), thick ascending limb (cuboidal, Na+-K+-2Cl- cotransport); Distal convoluted tubule (DCT) - cuboidal cells, less microvilli, Na+-Cl- cotransport, aldosterone-sensitive; Collecting duct (CD) - cortical and medullary portions, principal cells (Na+ reabsorption, K+ secretion, ADH-sensitive water channels) and intercalated cells (acid-base regulation). Nephron types: cortical (85%, short loops, superficial/mid-cortical glomeruli) and juxtamedullary (15%, long loops into deep medulla, produce concentrated urine).`,
        professional: `Nephron ultrastructure:

Renal corpuscle: Glomerulus - 50-70 capillary loops, fenestrated endothelium (70-100 nm pores, no diaphragm, size barrier only, not charge barrier), shared basement membrane with podocytes. Podocytes: visceral epithelial cells with primary and secondary processes (foot processes), interdigitate with neighboring podocytes forming 25-60 nm filtration slits bridged by slit diaphragms (nephrin-based, key size/charge barrier). Mesangial cells - contractile (regulate surface area), phagocytic, produce matrix. Bowman's space (urinary space) - collects filtrate. Filtration barrier: fenestrated endothelium, glomerular basement membrane (lamina rara interna, lamina densa, lamina rara externa - type IV collagen, laminin, heparan sulfate proteoglycans for negative charge), slit diaphragms. Juxtaglomerular apparatus: macula densa (specialized DCT cells adjacent to glomerulus, sense NaCl delivery), granular/JG cells (modified smooth muscle of afferent arteriole, produce renin), extraglomerular mesangial cells (lacis cells).

Renal tubule segments: 
PCT: Simple cuboidal epithelium with prominent brush border (microvilli increase surface area 20x), tight junctions leaky, extensive mitochondria, abundant Na+-K+-ATPase on basolateral membrane. Reabsorbs: 65% filtered water (obligatory, isosmotic), 65% Na+, most of Cl-, 100% glucose/amino acids (SGLT, Na+-amino acid cotransporters), 90% HCO3- (via H+ secretion), 50% urea, 60% Ca2+, most phosphate. Secretes: H+, organic cations/anions.

Loop of Henle: Descending thin limb (simple squamous, aquaporin-1, water permeable, impermeable to NaCl). Ascending limb: thin (simple squamous/cuboidal, impermeable to water, some NaCl transport) and thick (cuboidal, apical Na+-K+-2Cl- cotransporter - NKCC2/bumetanide-sensitive, ROMK K+ channel, basolateral Na+-K+-ATPase and Cl- channels). Creates medullary gradient via countercurrent multiplication.

DCT: Simple cuboidal, shorter microvilli, tight junctions tighter. Apical Na+-Cl- cotransporter (NCC/thiazide-sensitive), Ca2+ channels (TRPV5). Aldosterone-sensitive (ENaC Na+ channels, ROMK K+ channels).

Collecting duct: Principal cells (cuboidal, sparse microvilli, apical ENaC, ROMK, aquaporin-2 [ADH-regulated insertion], basolateral Na+-K+-ATPase and aquaporin-3/4). Intercalated cells: Type A (alpha) - apical H+-ATPase and H+/K+-ATPase (acid secretion, K+ reabsorption), basolateral Cl-/HCO3- exchanger (AE1); Type B (beta) - apical Cl-/HCO3- exchanger (pendrin), basolateral H+-ATPase (bicarbonate secretion, acid reabsorption).`,
      },
    },
    {
      title: 'Glomerular Filtration',
      content: {
        patient: `Glomerular filtration is the first step in making urine. Blood enters the glomerulus through the afferent arteriole under high pressure. This pressure forces water and small dissolved substances (like salts, glucose, amino acids, and waste products) through the filtration membrane into Bowman's capsule. Large proteins and blood cells cannot pass through and stay in the blood. The fluid that filters through is called filtrate. About 180 liters of filtrate are produced each day, but most is reabsorbed back into the blood.`,
        intermediate: `Glomerular filtration is the ultrafiltration of plasma across the glomerular capillary wall into Bowman's space. Filtration is driven by net filtration pressure (NFP) of ~10 mmHg: glomerular hydrostatic pressure (55 mmHg) favors filtration; capsular hydrostatic pressure (15 mmHg) and blood colloid osmotic pressure (30 mmHg) oppose it. The filtration membrane consists of fenestrated endothelium, glomerular basement membrane (size and charge barrier), and podocyte slit diaphragms. The glomerular filtration rate (GFR) is ~125 mL/min or 180 L/day in adults. Filtration fraction (GFR/RPF) is ~20%. GFR is regulated by: renal autoregulation (myogenic response - smooth muscle constriction to increased pressure; tubuloglomerular feedback - macula densa senses NaCl and modulates afferent arteriole tone), neural regulation (sympathetic constriction of afferent/efferent arterioles), and hormonal factors (angiotensin II constricts efferent > afferent, increasing filtration pressure).`,
        professional: `Glomerular filtration mechanics:

Forces determining NFP: Glomerular hydrostatic pressure (PGC = ~55 mmHg, promotes filtration) - maintained by high resistance afferent and efferent arterioles (efferent > afferent resistance). Bowman's capsule hydrostatic pressure (PBS = ~15 mmHg, opposes filtration) - increased by tubular obstruction or increased downstream resistance. Blood colloid osmotic pressure (πGC = ~30 mmHg, opposes filtration) - increases along capillary as fluid filters, creating filtration equilibrium. Net filtration pressure: NFP = PGC - PBS - πGC = 55 - 15 - 30 = 10 mmHg. GFR = Kf × NFP, where Kf (filtration coefficient) = hydraulic conductivity × surface area.

GFR regulation: Normal GFR 125 ± 15 mL/min/1.73m² (males ~130, females ~120). Autoregulation maintains constant GFR despite mean arterial pressure changes (80-180 mmHg): Myogenic mechanism - afferent arteriole smooth muscle constricts to stretch (increased pressure), dilates to decreased pressure (responds within seconds). Tubuloglomerular feedback (TGF) - macula densa cells sense NaCl concentration in DCT (via NKCC2 cotransporter); increased NaCl → adenosine/ATP release → afferent arteriole constriction (↓GFR); decreased NaCl → prostaglandin E2/NO → afferent dilation (↑GFR). Paracrine mediators: Angiotensin II (constricts efferent > afferent, maintaining GFR when renal perfusion drops), prostaglandins (afferent dilation, protective during stress), adenosine (afferent constriction), NO (afferent dilation), endothelin (constriction).

Filtration barrier properties: Molecular weight cutoff ~70 kDa (albumin 66 kDa barely filtered due to charge). Size selectivity: <10 kDa freely filtered; 10-70 kDa increasingly restricted; >70 kDa not filtered. Charge selectivity: negative charge (heparan sulfate proteoglycans) repels plasma proteins (also negative). Diseases disrupting barrier (minimal change disease, diabetic nephropathy) cause proteinuria.

GFR measurement: Inulin clearance (gold standard, freely filtered, not secreted/reabsorbed). Creatinine clearance (clinical standard, slightly secreted, overestimates GFR 10-20%). eGFR equations (CKD-EPI, MDRD) from serum creatinine, age, sex, race (being revised). Cystatin C (alternative marker, less muscle-dependent).`,
      },
    },
    {
      title: 'Tubular Reabsorption and Secretion',
      content: {
        patient: `After filtration, the filtrate passes through the renal tubule where most substances are reabsorbed back into the blood. About 99% of the water and virtually all the glucose and amino acids are reabsorbed. The proximal convoluted tubule does most of this work. The loop of Henle concentrates the urine by reabsorbing water in the descending limb and salt in the ascending limb. The distal tubule and collecting duct fine-tune reabsorption based on body needs. Some substances (like hydrogen ions, potassium, and certain drugs) are actively secreted from blood into the tubule for excretion.`,
        intermediate: `Tubular reabsorption returns ~178 L of water and essential solutes to blood daily. Transport mechanisms: primary active transport (Na+-K+-ATPase basolateral membrane - establishes gradients), secondary active transport (cotransport - glucose, amino acids with Na+), facilitated diffusion (electrochemical gradients), paracellular transport (between leaky cells). PCT reabsorbs 65% of filtered water (isosmotic, aquaporin-1), 65% Na+ (Na+/H+ exchanger, cotransporters), 100% glucose (SGLT2 - apical, GLUT2 - basolateral) and amino acids, 90% HCO3- (via H+ secretion and carbonic anhydrase), 60% Ca2+, 50% urea, phosphate. Loop of Henle: descending thin limb reabsorbs water (concentrates tubular fluid); thick ascending limb actively transports Na+-K+-2Cl- (NKCC2) but is water-impermeable (dilutes fluid). DCT: Na+-Cl- cotransport (thiazide-sensitive), Ca2+ reabsorption (TRPV5 channels, PTH-regulated). Collecting duct: principal cells reabsorb Na+ (ENaC, aldosterone-regulated) and water (aquaporin-2, ADH-regulated), secrete K+; intercalated cells regulate acid-base. Secretion: H+ (PCT via Na+/H+ exchanger, intercalated cells via H+-ATPase), K+ (principal cells, aldosterone-regulated), organic anions/cations (drugs, toxins).`,
        professional: `Tubular transport mechanisms and regulation:

Proximal convoluted tubule: Reabsorbs 65% of filtered load. Na+ transport: Basolateral Na+-K+-ATPase (3 Na+ out, 2 K+ in) maintains low intracellular Na+ (~15 mM vs 140 mM plasma). Apical entry: Na+/H+ exchanger (NHE3, primary mechanism, 1:1, inhibited by loop diuretics indirectly), Na+-glucose cotransporters (SGLT2 - high capacity/low affinity, reabsorbs 90% glucose; SGLT1 - low capacity/high affinity), Na+-amino acid cotransporters (multiple specific systems - B⁰, L, y⁺), Na+-phosphate cotransporters (NPT2a/c, PTH-inhibited), Na+-lactate cotransporter. Glucose exit: GLUT2 (facilitated diffusion, basolateral). Water follows osmotically via aquaporin-1 (constitutive) - obligatory water reabsorption maintains isosmolarity. HCO3- reabsorption: Filtered HCO3- combines with secreted H+ (NHE3) → carbonic acid → CO2 + H2O (carbonic anhydrase IV on brush border, CA II intracellular); CO2 diffuses into cell, rehydrates to H2CO3 → H+ + HCO3-; HCO3- exits basolateral via NBCe1 (Na+-3HCO3- cotransport) or Cl-/HCO3- exchange. 90% of filtered HCO3- reabsorbed in PCT. Organic cation secretion: OCT2 (basolateral uptake), MATE1/MATE2-K (apical efflux). Organic anion secretion: OAT1/OAT3 (basolateral), OAT4/URAT1 (apical). Urea transport: UT-A2 (facilitated, ~50% reabsorbed).

Loop of Henle: Countercurrent multiplication creates medullary osmotic gradient (300 mOsm cortex → 1200 mOsm inner medulla). Descending thin limb: Water-permeable (aquaporin-1), NaCl-impermeable; water exits, tubular fluid concentrates to ~1200 mOsm. Thick ascending limb: Apical Na+-K+-2Cl- cotransporter (NKCC2, loop diuretic target), ROMK K+ channel (recycles K+), basolateral Cl- channels (ClC-Kb) and Na+-K+-ATPase. K+ recycling generates lumen-positive potential driving paracellular cation reabsorption (Ca2+, Mg2+). Impermeable to water - diluting segment.

Distal convoluted tubule: Apical Na+-Cl- cotransporter (NCC, thiazide-sensitive), epithelial Mg2+ channel (TRPM6). Basolateral Na+-K+-ATPase, Cl- channel. Ca2+ reabsorption: TRPV5 channels (apical, PTH-stimulated), calbindin-D28k, basolateral PMCA and NCX. Relatively water-impermeable.

Collecting duct: Principal cells - ENaC (amiloride-sensitive Na+ channel, aldosterone increases expression and open probability), ROMK K+ channel, aquaporin-2 (ADH-regulated trafficking to apical membrane), basolateral Na+-K+-ATPase and aquaporin-3/4. Aldosterone effects: genomic (synthesis of ENaC subunits, Na+-K+-ATPase, mitochondrial proteins) and non-genomic. K+ secretion driven by lumen-negative potential from Na+ reabsorption and high intracellular K+. Intercalated cells: Type A (alpha) - apical H+-ATPase, H+/K+-ATPase (reabsorbs K+), basolateral AE1 (Cl-/HCO3- exchanger). Type B (beta) - apical pendrin (Cl-/HCO3- exchanger, secretes HCO3-), basolateral H+-ATPase. Type A secrete acid, Type B secrete base.`,
      },
    },
    {
      title: 'Regulation of Kidney Function',
      content: {
        patient: `Your kidneys are finely controlled by several hormones to maintain the right balance of fluids and electrolytes. Antidiuretic hormone (ADH), made by your brain, tells your kidneys to save water when you're dehydrated. Aldosterone from your adrenal glands helps regulate sodium and potassium. When blood pressure drops, your kidneys release renin, which starts a chain reaction (the renin-angiotensin system) that raises blood pressure. Atrial natriuretic peptide, released by your heart when blood volume is high, makes your kidneys excrete more sodium and water.`,
        intermediate: `Multiple hormones regulate kidney function: ADH/Vasopressin (posterior pituitary) - binds V2 receptors on principal cells, stimulates cAMP, causes aquaporin-2 insertion into apical membrane, increasing water reabsorption. Released in response to increased plasma osmolality (hypothalamic osmoreceptors) or decreased blood volume (baroreceptors). Aldosterone (adrenal cortex, zona glomerulosa) - stimulated by angiotensin II, high K+, or ACTH; binds mineralocorticoid receptors, increases ENaC and Na+-K+-ATPase expression, promoting Na+ reabsorption and K+ secretion. Renin-Angiotensin System: JG cells release renin in response to decreased renal perfusion pressure, decreased macula densa NaCl, or sympathetic stimulation. Renin converts angiotensinogen to angiotensin I; ACE converts AI to AII. AII constricts efferent arterioles (maintaining GFR), stimulates aldosterone, stimulates thirst and ADH release, promotes proximal Na+ reabsorption. ANP/BNP (cardiac atria/ventricles) - released in response to volume expansion; inhibits Na+ reabsorption (collecting duct), inhibits renin and aldosterone, increases GFR (afferent dilation, efferent constriction). PTH (parathyroid) - increases Ca2+ reabsorption (DCT), decreases phosphate reabsorption (PCT), stimulates calcitriol synthesis.`,
        professional: `Integrated regulation of renal function:

ADH/Vasopressin: Synthesized in hypothalamic supraoptic/paraventricular nuclei, transported to posterior pituitary. Release triggers: Plasma osmolality >280 mOsm/kg (osmoreceptors in OVLT/SFO - organum vasculosum lamina terminalis, subfornical organ), 10% blood volume loss (arterial baroreceptors), angiotensin II. V2 receptor (principal cells): Gs-coupled → cAMP → PKA phosphorylation → aquaporin-2 vesicle trafficking to apical membrane (within minutes). Long-term ADH increases aquaporin-2 synthesis. V1a receptors (vasculature): V1-mediated vasoconstriction. Diabetes insipidus: central (ADH deficiency) or nephrogenic (ADH resistance, including lithium toxicity). SIADH: inappropriate ADH secretion → water retention, hyponatremia.

Renin-Angiotensin-Aldosterone System (RAAS): Renin release stimuli: decreased renal perfusion pressure (baroreceptor in JG cells), decreased macula densa NaCl (sensed via NKCC2), sympathetic stimulation (β1 receptors on JG cells), prostaglandins (PGE2). Angiotensinogen (liver) → renin → Angiotensin I (decapeptide) → ACE (pulmonary and renal endothelium) → Angiotensin II (octapeptide, main effector). Angiotensin II actions: vascular (efferent arteriole constriction > afferent, maintaining GFR during hypotension), tubular (stimulates proximal Na+ reabsorption via NHE3 and Na+-K+-ATPase), adrenal (aldosterone synthesis), CNS (thirst, ADH release). ACE2/Ang-(1-7)/Mas receptor pathway counterregulatory (vasodilation, natriuresis). Aldosterone mechanism: binds cytosolic mineralocorticoid receptor → nuclear translocation → transcription of SGK1 (regulates ENaC), α-subunits of ENaC and Na+-K+-ATPase, mitochondrial proteins. Non-genomic effects within minutes. Mineralocorticoid receptor specificity: aldosterone-selective in principal cells (11β-HSD2 converts cortisol to cortisone, preventing cortisol binding); MR in other tissues binds cortisol.

Natriuretic peptides: ANP (atria, 28 amino acids), BNP (ventricles, 32 amino acids), urodilatin (DCT). Release: atrial/ventricular stretch (volume expansion). Mechanism: guanylyl cyclase-A receptor → cGMP → inhibition of ENaC, inhibition of ROMK, inhibition of renin release, vasodilation (afferent)/constriction (efferent). Clinical: elevated BNP indicates heart failure (ventricular strain).

Parathyroid hormone: PTH receptor (PTH1R) on PCT and DCT. PCT: decreases NPT2a/c expression → phosphate excretion. DCT: increases TRPV5 expression and insertion, increases calbindin-D28k → Ca2+ reabsorption. Proximal actions: stimulates 1α-hydroxylase → calcitriol (active vitamin D) synthesis from 25-OH-D. Calcitriol increases intestinal Ca2+ absorption and bone resorption.

Other regulators: Dopamine (proximal tubule synthesis, natriuretic via D1 receptor inhibition of Na+-K+-ATPase), Prostaglandins (PGE2 - afferent vasodilation, protective during stress; NSAIDs inhibit and can cause AKI), Endothelin (potent vasoconstrictor, mitogenic), Nitric oxide (vasodilation, natriuretic), Bradykinin (vasodilation, increases GFR), Glucocorticoids (permissive for catecholamines, stimulate proximal Na+ reabsorption but also suppress ADH), Estrogen (increases Na+ reabsorption), Insulin (stimulates Na+-K+-ATPase, antinatriuretic).`,
      },
    },
    {
      title: 'Acid-Base Balance',
      content: {
        patient: `Your kidneys play a crucial role in maintaining the right pH balance in your blood (around 7.4). They do this by reabsorbing bicarbonate (a base) and excreting hydrogen ions (acid). When your blood is too acidic, your kidneys excrete more acid and hold onto more bicarbonate. When your blood is too alkaline, they do the opposite. Your kidneys work with your lungs (which control carbon dioxide, another acid) to keep your blood pH stable. The kidneys can also make new bicarbonate from molecules like ammonia.`,
        intermediate: `The kidneys regulate acid-base balance through three mechanisms: (1) Reabsorption of filtered bicarbonate - 90% in PCT (via H+ secretion and carbonic anhydrase), 10% in collecting duct. (2) Excretion of titratable acidity - H+ buffered by phosphate (HPO4 2- → H2PO4-) and other buffers in urine. (3) Excretion of ammonium (NH4+) - PCT synthesizes glutamine → NH4+ + HCO3-; NH4+ is secreted into lumen (via Na+/H+ exchanger substituting NH4+), HCO3- is reabsorbed as "new" bicarbonate. The kidneys respond to acidosis by increasing H+ secretion, increasing NH4+ production/excretion, and increasing HCO3- reabsorption. They respond to alkalosis by decreasing H+ secretion and allowing HCO3- excretion. The collecting duct intercalated cells are key: Type A secretes H+ via H+-ATPase and H+/K+-ATPase; Type B secretes HCO3- via pendrin. Compensation for respiratory acid-base disorders occurs over 3-5 days.`,
        professional: `Renal acid-base physiology:

Normal acid-base parameters: Arterial pH 7.35-7.45, HCO3- 22-26 mEq/L, pCO2 35-45 mmHg. Net acid excretion (NAE) = titratable acidity (TA) + NH4+ - HCO3- (if present). Normal daily H+ production from metabolism (~1 mEq/kg/day) must be excreted to maintain balance.

Bicarbonate reabsorption: Filtered HCO3- (24 mM × 180 L/day = 4320 mEq/day) must be reclaimed. PCT mechanism: Filtered HCO3- combines with secreted H+ (NHE3) → H2CO3 → CO2 + H2O (catalyzed by brush border CA IV). CO2 diffuses into cell, rehydrates (CA II) → H2CO3 → H+ + HCO3-. H+ recycled to lumen; HCO3- exits basolateral via NBCe1 (electrogenic Na+-3HCO3- cotransport, 1:3 stoichiometry) or Cl-/HCO3- exchange. 90% of filtered HCO3- reabsorbed here. Thick ascending limb: some HCO3- reabsorption via similar mechanism. Collecting duct: Type A intercalated cells reabsorb remaining HCO3- via similar CA-dependent mechanism with apical H+-ATPase.

Titratable acidity: H+ secreted that is buffered by urinary buffers (primarily phosphate: HPO4 2- [pKa 6.8] + H+ → H2PO4-). Also urate, creatinine, citrate. Limited by buffer availability and urinary pH minimum (~4.5). Typical TA: 10-30 mEq/day.

Ammonium excretion: Major adaptive response to acidosis. PCT: Glutamine (from liver and muscle) metabolized by glutaminase → glutamate + NH4+, then glutamate dehydrogenase → α-ketoglutarate + NH4+. α-ketoglutarate metabolized to glucose (gluconeogenesis) or CO2, consuming H+ and generating "new" HCO3- (2 per glutamine). NH4+ secreted into lumen: primarily via NHE3 substituting NH4+ for H+ (also NH3 diffusion + trapping as NH4+ in acid urine). Loop of Henle: Thick ascending limb reabsorbs NH4+ (substitutes for K+ on NKCC2) into medullary interstitium (countercurrent multiplication). Collecting duct: NH3 diffuses from medullary interstitium (via RhCG glycoprotein channels on Type A intercalated cells and principal cells) into lumen, combines with secreted H+ → NH4+ (trapped). Intercalated cell H+ secretion via H+-ATPase (primary) and H+/K+-ATPase (reclaims K+). Can increase NH4+ excretion from 30 to 300 mEq/day in chronic acidosis.

Acid-base disturbances: Metabolic acidosis: decreased serum HCO3-; renal compensation (increased H+ secretion, increased NH4+ production, complete HCO3- reabsorption); respiratory compensation (hyperventilation). Metabolic alkalosis: increased serum HCO3-; renal response (decreased H+ secretion, HCO3- excretion); requires volume contraction and K+ depletion to maintain (maintained alkalosis). Respiratory acidosis: increased pCO2; renal compensation (increased HCO3- reabsorption, increased NH4+ excretion) over 3-5 days. Respiratory alkalosis: decreased pCO2; renal compensation (decreased HCO3- reabsorption, HCO3- wasting) over 3-5 days.

Renal tubular acidosis (RTA): Type 1 (distal) - impaired Type A intercalated cell H+ secretion, inability to acidify urine (urine pH >5.5), hypokalemia, nephrocalcinosis. Type 2 (proximal) - impaired PCT HCO3- reabsorption, hypokalemia, rickets/osteomalacia. Type 4 (hyperkalemic) - aldosterone deficiency or resistance, hyperkalemia, mild acidosis.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'kidney', structureName: 'Kidney', linkText: 'Kidney', relevance: 'Primary filtering organ' },
    { structureId: 'bladder', structureName: 'Urinary Bladder', linkText: 'Urinary Bladder', relevance: 'Urine storage' },
    { structureId: 'ureter', structureName: 'Ureter', linkText: 'Ureter', relevance: 'Urine transport from kidney' },
    { structureId: 'adrenal-gland', structureName: 'Adrenal Gland', linkText: 'Adrenal Gland', relevance: 'Produces aldosterone for kidney regulation' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-25',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 25: The Urinary System',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/25-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology. Chapter 25: The Urinary System. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'glomerulus', entryType: 'anatomy', name: 'Glomerulus', relationship: 'see-also' },
    { entryId: 'nephron', entryType: 'anatomy', name: 'Nephron', relationship: 'see-also' },
    { entryId: 'kidney-function', entryType: 'lab-test', name: 'Kidney Function Tests', relationship: 'see-also' },
    { entryId: 'raas', entryType: 'physiology', name: 'Renin-Angiotensin-Aldosterone System', relationship: 'see-also' },
    { entryId: 'acid-base', entryType: 'physiology', name: 'Acid-Base Balance', relationship: 'see-also' },
    { entryId: 'acute-kidney-injury', entryType: 'condition', name: 'Acute Kidney Injury', relationship: 'see-also' },
    { entryId: 'chronic-kidney-disease', entryType: 'condition', name: 'Chronic Kidney Disease', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['urinary system', 'kidney', 'renal', 'nephron', 'glomerulus', 'filtration', 'urine', 'dialysis'],
    secondaryKeywords: ['GFR', 'tubular reabsorption', 'tubular secretion', 'ADH', 'aldosterone', 'renin', 'acid-base'],
    tags: ['nephrology', 'anatomy', 'renal physiology', 'urology', 'electrolytes'],
    synonyms: ['renal system', 'genitourinary system', 'kidneys', 'urinary tract'],
    abbreviations: ['GFR', 'ADH', 'RAAS', 'PCT', 'DCT', 'CD', 'ESRD', 'CKD'],
  },
};

// Export all entries
export const urinarySystemEntries: EncyclopediaEntry[] = [
  urinarySystemEntry,
];
