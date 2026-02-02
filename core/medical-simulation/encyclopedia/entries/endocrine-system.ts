/**
 * Endocrine System Encyclopedia Entry
 *
 * Transcribed from OpenStax Anatomy & Physiology Chapter 17 (CC BY 4.0)
 * Comprehensive reference for endocrine physiology and anatomy
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Endocrine System Overview Entry
 * Based on OpenStax A&P Chapter 17 - The Endocrine System
 */
export const endocrineSystemEntry: EncyclopediaEntry = {
  entryId: 'endocrine-system',
  name: 'Endocrine System',
  entryType: 'physiology',
  category: 'endocrine',
  summary: 'The endocrine system regulates body functions through hormones secreted into the bloodstream, working with the nervous system to maintain homeostasis.',
  overview: {
    patient: 'The endocrine system is your body\'s chemical messenger system. It uses hormones (special chemicals) that travel through your blood to control important functions like growth, metabolism, reproduction, mood, and sleep. The main glands include the pituitary (master gland), thyroid, adrenal glands, and pancreas. Unlike the nervous system which sends instant messages, the endocrine system works more slowly but has longer-lasting effects.',
    intermediate: 'The endocrine system consists of glands that secrete hormones directly into the bloodstream to regulate distant target tissues. Major endocrine glands include the hypothalamus, pituitary, thyroid, parathyroids, adrenals, pancreas, and gonads. Hormones are chemical messengers that bind to specific receptors on target cells, triggering metabolic, developmental, and functional changes. The system works through negative feedback loops to maintain homeostasis and coordinates with the nervous system via the hypothalamic-pituitary axis.',
    professional: 'The endocrine system comprises ductless glands that synthesize and secrete hormones into the circulation for systemic distribution to target tissues bearing specific receptors. Major components include: hypothalamus (neurosecretory control center), pituitary (adenohypophysis and neurohypophysis), thyroid follicular and parafollicular cells, parathyroid chief cells, adrenal cortex (zona glomerulosa, fasciculata, reticularis) and medulla (chromaffin cells), pancreatic islets (α, β, δ, PP cells), and gonadal steroidogenic tissue. Hormones are classified chemically as peptides/proteins, steroids (derived from cholesterol), amines (modified amino acids), and eicosanoids. Mechanisms of action involve cell surface receptors (peptide hormones, catecholamines) with second messenger systems (cAMP, IP3/DAG, Ca2+) or intracellular receptors (steroid and thyroid hormones) acting as transcription factors. The hypothalamic-pituitary-target gland axes provide hierarchical regulation with negative feedback inhibition.',
  },
  content: [
    {
      title: 'Hormones and Mechanisms of Action',
      content: {
        patient: `Hormones are chemical messengers that travel through your blood to tell different parts of your body what to do. There are three main types: (1) Peptide hormones are made of protein building blocks and work quickly by attaching to cell surfaces - examples include insulin and growth hormone. (2) Steroid hormones are made from cholesterol and work slowly by entering cells and changing gene activity - examples include cortisol, estrogen, and testosterone. (3) Amine hormones come from amino acids and include thyroid hormones and adrenaline.

Hormone levels are carefully controlled through negative feedback - when hormone levels get too high, the body reduces production, and when they get too low, production increases. This keeps everything in balance.`,
        intermediate: `Hormones are classified by chemical structure and mechanism of action:

PEPTIDE/PROTEIN HORMONES: Synthesized as preprohormones, processed to prohormones, then active hormones. Examples: insulin, glucagon, growth hormone, TSH, ACTH, oxytocin. They bind to cell surface receptors and act through second messenger systems (cAMP, IP3/DAG, Ca2+). Water-soluble, transported free in plasma, short half-lives (minutes).

STEROID HORMONES: Synthesized from cholesterol in smooth ER and mitochondria. Examples: cortisol, aldosterone, estrogen, progesterone, testosterone, calcitriol. Lipid-soluble, transported bound to carrier proteins, diffuse through cell membranes, bind intracellular receptors that act as transcription factors. Slow onset (hours), long duration.

AMINE HORMONES: Derived from tyrosine or tryptophan. Examples: thyroid hormones (T3, T4), catecholamines (epinephrine, norepinephrine, dopamine). Thyroid hormones act like steroids (intracellular receptors); catecholamines act like peptides (cell surface receptors).

Negative feedback is the primary regulatory mechanism: the end product inhibits the releasing factors or tropic hormones upstream, maintaining homeostasis.`,
        professional: `HORMONE CLASSIFICATION AND MECHANISMS:

Peptide/Protein Hormones: Synthesized on ribosomes as preprohormones with signal peptides. Cleaved to prohormones in RER, packaged in secretory granules, converted to active hormones by prohormone convertases (PC1/3, PC2) and carboxypeptidase E. Examples: insulin (A and B chains from proinsulin via C-peptide cleavage), GH, PRL, glycoprotein hormones (TSH, LH, FSH, hCG - α and β subunits). Receptors: single transmembrane domain with intrinsic tyrosine kinase (insulin, IGF) or G-protein coupled receptors. Signal transduction: Gs (cAMP ↑), Gi (cAMP ↓), Gq (PLCβ → IP3/DAG → Ca2+ release/PKC activation), or JAK-STAT pathway (GH, PRL).

Steroid Hormones: Synthesized via cytochrome P450 enzymes in adrenal cortex, gonads, placenta. Cholesterol → pregnenolone (CYP11A1, side-chain cleavage) → specific pathways. Cortisol: 17α-hydroxylase (CYP17), 21-hydroxylase (CYP21A2), 11β-hydroxylase (CYP11B1). Aldosterone: same to corticosterone, then aldosterone synthase (CYP11B2). Androgens: 17,20-lyase (CYP17), 17β-HSD, 5α-reductase. Transport: bound to CBG (cortisol), SHBG (androgens/estrogens), albumin. Intracellular receptors: Type I (corticosteroid, androgen, estrogen, progesterone, mineralocorticoid) and Type II (thyroid, vitamin D, retinoic acid). Heterodimer with RXR, bind hormone response elements (HREs), recruit coactivators/corepressors.

Amine Hormones: Catecholamines synthesized from tyrosine via tyrosine hydroxylase (rate-limiting), DOPA decarboxylase, dopamine β-hydroxylase, PNMT (for epinephrine). Thyroid hormones: iodide uptake via NIS, organification by TPO, coupling to form T4 (90%) and T3 (10%, more active). T4 converted to T3 peripherally by 5\'-deiodinases.

Negative Feedback Regulation: Set points maintained by hypothalamic integration of hormonal signals, metabolic factors, and neural inputs. Long-loop feedback: target gland hormones inhibit hypothalamus and pituitary. Short-loop feedback: pituitary hormones inhibit hypothalamic releasing hormones. Ultra-short feedback: hypothalamic hormones inhibit their own secretion.`,
      },
    },
    {
      title: 'Hypothalamus and Pituitary Gland',
      content: {
        patient: `The hypothalamus is a small region at the base of your brain that acts as the control center for the endocrine system. It connects the nervous system to the endocrine system by controlling the pituitary gland below it. The pituitary is often called the "master gland" because it controls many other endocrine glands.

The pituitary has two parts: (1) The posterior pituitary stores and releases two hormones made by the hypothalamus: oxytocin (important for childbirth and bonding) and antidiuretic hormone/ADH (controls water balance). (2) The anterior pituitary makes its own hormones including growth hormone (for growth and repair), thyroid-stimulating hormone, ACTH (for stress response), prolactin (for milk production), and hormones controlling reproduction (FSH and LH).

This hypothalamic-pituitary axis works like a command chain - the hypothalamus tells the pituitary what to do, and the pituitary tells other glands what to do.`,
        intermediate: `HYPOTHALAMUS: Located below the thalamus, above the pituitary stalk. Contains neurosecretory cells that produce releasing hormones (RH) and inhibiting hormones (IH). These travel via the hypophyseal portal system to the anterior pituitary or via axons to the posterior pituitary. Key hypothalamic hormones: TRH (thyrotropin-releasing hormone), CRH (corticotropin-releasing hormone), GnRH (gonadotropin-releasing hormone), GHRH (growth hormone-releasing hormone), somatostatin (GH inhibiting), dopamine (prolactin inhibiting).

POSTERIOR PITUITARY (Neurohypophysis): Neural tissue - axon terminals of hypothalamic neurons (paraventricular and supraoptic nuclei). Stores and releases two hormones: (1) Antidiuretic hormone (ADH/vasopressin) - promotes water reabsorption in collecting ducts, vasoconstriction at high doses; deficiency causes diabetes insipidus. (2) Oxytocin - stimulates uterine contractions during labor, milk ejection reflex (let-down), social bonding and trust.

ANTERIOR PITUITARY (Adenohypophysis): Glandular tissue from Rathke's pouch. Produces: (1) Growth hormone (GH/somatotropin) - stimulates IGF-1 production, promotes growth, protein synthesis, lipolysis, antagonizes insulin. (2) Thyroid-stimulating hormone (TSH/thyrotropin) - stimulates T3/T4 production. (3) Adrenocorticotropic hormone (ACTH/corticotropin) - stimulates cortisol production. (4) Prolactin (PRL) - milk synthesis after delivery. (5) Follicle-stimulating hormone (FSH) - gamete development. (6) Luteinizing hormone (LH) - ovulation/testosterone production. (7) Melanocyte-stimulating hormone (MSH) - pigmentation (minor in humans).

The hypophyseal portal system carries releasing/inhibiting hormones directly from hypothalamus to anterior pituitary without systemic dilution.`,
        professional: `HYPOTHALAMIC-PITUITARY AXIS:

Hypothalamus: Parvocellular neurosecretory cells in paraventricular (PVN), arcuate, periventricular nuclei synthesize releasing/inhibiting hormones transported via median eminence portal capillaries to anterior pituitary. Magnocellular neurons in PVN and supraoptic nuclei (SON) synthesize oxytocin and ADH packaged in Herring bodies, transported via hypothalamo-hypophyseal tract to posterior pituitary.

Hypothalamic Releasing Hormones: TRH (pyroGlu-His-Pro-NH2, stimulates TSH and prolactin); CRH (41 amino acids, stimulates ACTH via CRH-R1); GHRH (44 amino acids, Gs-coupled receptor stimulates GH); GnRH (decapeptide, pulsatile secretion essential, stimulates LH/FSH); Somatostatin (SST-14, SST-28, inhibits GH and TSH); Dopamine (prolactin inhibiting hormone, D2 receptor inhibits prolactin).

Posterior Pituitary Hormones: ADH/vasopressin (9 amino acids, synthesized as preprohormone with neurophysin II) binds V2 receptors (Gs → cAMP → aquaporin-2 insertion) in collecting ducts for water reabsorption; V1a receptors (Gq) on vascular smooth muscle for vasoconstriction. Oxytocin (9 amino acids, differs from ADH at positions 3 and 8) binds oxytocin receptors (Gq → IP3/Ca2+) on myoepithelial cells of mammary glands and uterine smooth muscle.

Anterior Pituitary Cell Types: Somatotrophs (GH, 50% of cells); Corticotrophs (ACTH from POMC cleavage, also β-endorphin, MSH); Thyrotrophs (TSH, β-subunit unique); Gonadotrophs (FSH, LH, common α-subunit with TSH); Lactotrophs (prolactin, increase during pregnancy). Hypophyseal portal blood flow: superior hypophyseal arteries → primary capillary plexus in median eminence → portal veins → secondary capillary plexus in anterior pituitary → venous drainage to cavernous sinus.

Feedback Control: Long-loop negative feedback by thyroid hormones, cortisol, sex steroids, IGF-1 on both hypothalamus and pituitary. Short-loop feedback by pituitary hormones on hypothalamus.`,
      },
    },
    {
      title: 'Thyroid and Parathyroid Glands',
      content: {
        patient: `The thyroid gland sits in your neck, shaped like a butterfly. It produces hormones that control your metabolism - how fast your body uses energy. The main hormones are T3 and T4 (thyroid hormones). When levels are too low, you feel tired and gain weight (hypothyroidism). When too high, you feel anxious and lose weight (hyperthyroidism). The thyroid also produces calcitonin, which helps regulate calcium levels.

Four tiny parathyroid glands sit on the back of the thyroid. They produce parathyroid hormone (PTH), which raises blood calcium levels by releasing calcium from bones, increasing absorption from food, and reducing kidney excretion. PTH and calcitonin work together to keep calcium levels just right - this is important for bone health, muscle function, and nerve signaling.`,
        intermediate: `THYROID GLAND: Located anterior to trachea, below thyroid cartilage. Two lobes connected by isthmus. Weighs 25-30g. Rich blood supply (superior and inferior thyroid arteries). Composed of follicles (spherical structures with colloid-filled lumen) containing thyrocytes (follicular cells) that produce T3 and T4. Parafollicular cells (C cells) in interfollicular tissue produce calcitonin.

THYROID HORMONE SYNTHESIS: (1) Iodide uptake via sodium-iodide symporter (NIS); (2) Organification: iodide oxidized by thyroid peroxidase (TPO), iodinates tyrosine residues on thyroglobulin; (3) Coupling: MIT + DIT → T3, DIT + DIT → T4 (stored in colloid); (4) Endocytosis and proteolysis: lysosomal enzymes cleave T3/T4 from thyroglobulin; (5) Release: T4 (90%) and T3 (10%, more potent) enter circulation. Peripheral conversion of T4 to T3 by 5'-deiodinases (D1, D2).

THYROID HORMONE ACTIONS: Binds nuclear receptors (TRα, TRβ) acting as transcription factors. Increases basal metabolic rate (BMR), oxygen consumption, heat production. Stimulates protein synthesis (growth/development, especially CNS). Increases carbohydrate absorption, lipolysis, cholesterol clearance. Essential for normal brain development in infants (cretinism if deficient). Regulated by hypothalamic TRH → pituitary TSH → thyroid axis with negative feedback by T3/T4.

PARATHYROID GLANDS: Four small glands (5mm × 3mm × 1mm) on posterior thyroid. Chief cells produce parathyroid hormone (PTH), an 84-amino acid peptide. PTH raises serum calcium by: (1) Bone: stimulating osteoclast activity (indirect via RANKL); (2) Kidney: increasing Ca2+ reabsorption, inhibiting phosphate reabsorption, activating 1α-hydroxylase (converts 25-OH vitamin D to active 1,25-OH vitamin D/calcitriol); (3) Intestine: calcitriol increases Ca2+ absorption.

CALCITONIN: 32-amino acid peptide from thyroid C cells. Lowers serum calcium by inhibiting osteoclast activity and increasing renal calcium excretion. Physiologically less important than PTH in humans.`,
        professional: `THYROID PHYSIOLOGY:

Thyroid Histology: Follicles (50-500 μm diameter) lined by simple cuboidal epithelium resting on basement membrane. Colloid is thyroglobulin (660 kDa glycoprotein) with iodinated tyrosines. Parafollicular C cells derived from neural crest (ultimobranchial body) produce calcitonin. Blood flow: 4-6 mL/min/g (one of highest of any organ).

Thyroid Hormone Biochemistry: Iodine trapping: NIS (SLC5A5) 2Na+:1I- symporter stimulated by TSH. Organification: TPO (heme peroxidase) oxidizes I- to I+ using H2O2 (from DUOX2). Iodination of thyroglobulin tyrosyl residues forms MIT (monoiodotyrosine) and DIT (diiodotyrosine). Coupling: TPO couples MIT+DIT→T3, DIT+DIT→T4. Storage: ~3 months supply in colloid. Secretion: TSH stimulates endocytosis, lysosomal proteases release T3/T4, deiodinases recycle iodine from MIT/DIT.

Peripheral Metabolism: T4 (t½ 7 days, 99.97% protein-bound mainly to TBG) converted to active T3 (t½ 1 day, 3-4× more potent) by D2 (thyroid, brain, pituitary, BAT - maintains local T3) or to inactive rT3 by D3 (placenta, brain, skin). D1 in liver/kidney produces T3 for systemic circulation.

Thyroid Receptors: TRα1, TRβ1, TRβ2 (isoforms). Heterodimer with RXR. Unliganded receptor recruits NCoR/SMRT corepressors (transcriptional repression). T3 binding causes corepressor release, coactivator (SRC, CBP/p300) recruitment. Target genes: Na+/K+-ATPase, myosin heavy chain α, uncoupling proteins, malic enzyme.

PARATHYROID PHYSIOLOGY:

Chief cells express calcium-sensing receptor (CaSR, GPCR) on surface - detects extracellular Ca2+ (inverse relationship with PTH secretion). PTH 1-84 binds PTH1R (Gs and Gq coupling) on bone (osteoblasts), kidney (proximal/distal tubules). PTH stimulates RANKL expression on osteoblasts → RANK on osteoclast precursors → osteoclast differentiation and bone resorption. Kidney: PTH stimulates TRPV5/6 (Ca2+ reabsorption), inhibits NPT2a/c (phosphate reabsorption), stimulates 1α-hydroxylase (CYP27B1) for calcitriol synthesis. Calcitriol (with PTH) stimulates intestinal Ca2+ absorption via calbindin-D9k.

Calcitonin: Binds CTR (Gs-coupled) on osteoclasts → cAMP increase → cytoskeletal retraction → decreased bone resorption. Clinical relevance limited - calcitonin used therapeutically for osteoporosis but not essential for calcium homeostasis (no disease from calcitonin deficiency).`,
      },
    },
    {
      title: 'Adrenal Glands',
      content: {
        patient: `You have two adrenal glands, one sitting on top of each kidney. Each adrenal gland has two parts with different functions:

The adrenal CORTEX (outer part) produces steroid hormones essential for life: (1) Cortisol - the "stress hormone" that helps regulate metabolism, blood sugar, and immune function. It helps your body respond to stress. (2) Aldosterone - controls salt and water balance, regulating blood pressure. (3) Small amounts of sex hormones (DHEA).

The adrenal MEDULLA (inner part) produces adrenaline (epinephrine) and noradrenaline (norepinephrine). These are the "fight or flight" hormones released during emergencies - they speed up your heart, raise blood pressure, and prepare your body to respond to danger.

The hypothalamus-pituitary-adrenal (HPA) axis controls cortisol release. CRH from hypothalamus → ACTH from pituitary → cortisol from adrenal cortex. High cortisol feeds back to reduce ACTH and CRH.`,
        intermediate: `ADRENAL GLAND ANATOMY: Paired glands superior to kidneys. Each weighs ~4-5g. Dual embryologic origin: cortex from mesoderm, medulla from neural crest (ectoderm). Cortex layers (outer to inner): Zona glomerulosa (mineralocorticoids), Zona fasciculata (glucocorticoids), Zona reticularis (weak androgens). Medulla: chromaffin cells arranged around venous sinuses.

ADRENAL CORTEX HORMONES:

GLUCOCORTICOIDS (Cortisol): Zona fasciculata. Cholesterol → pregnenolone → 17α-hydroxypregnenolone → 17α-hydroxyprogesterone → 11-deoxycortisol → cortisol (via 11β-hydroxylase/CYP11B1). Circadian rhythm (highest early morning, lowest midnight), stress increases. Actions: (1) Metabolic - gluconeogenesis (↑ liver glucose output), protein catabolism, lipolysis; (2) Anti-inflammatory - inhibits phospholipase A2 (↓ prostaglandins/leukotrienes), ↓ cytokine production, ↓ histamine; (3) Permissive effects - sensitizes tissues to catecholamines (vascular tone, lipolysis); (4) Immune suppression - lymphopenia, thymic involution. Excess: Cushing's syndrome. Deficiency: Addison's disease (adrenal insufficiency).

MINERALOCORTICOIDS (Aldosterone): Zona glomerulosa (lacks 17α-hydroxylase). Angiotensin II (main stimulus), hyperkalemia, ACTH (minor) stimulate synthesis. Actions: principal cells of collecting duct - stimulates ENaC (epithelial sodium channels) for Na+ reabsorption, ROMK channels for K+ secretion, H+-ATPase for H+ secretion. Increases blood pressure via volume expansion. Regulated by RAAS (renin-angiotensin-aldosterone system), not by pituitary ACTH.

ADRENAL ANDROGENS: DHEA (dehydroepiandrosterone), DHEA-S (sulfated, main circulating form), androstenedione. Converted to testosterone and dihydrotestosterone in peripheral tissues. Contribute to female pubic/axillary hair; in males, testicular androgens predominate.

ADRENAL MEDULLA: Postganglionic sympathetic neurons modified. Synthesizes catecholamines: dopamine → norepinephrine (via dopamine β-hydroxylase) → epinephrine (via PNMT, requires cortisol from high local concentration). Stimulated by preganglionic sympathetic neurons (splanchic nerves) during "fight or flight." Actions via α1 (vascular constriction), α2 (presynaptic inhibition), β1 (cardiac stimulation), β2 (bronchodilation, vasodilation), β3 (lipolysis) adrenergic receptors.`,
        professional: `ADRENAL CORTEX STEROIDOGENESIS:

Enzymatic pathway: Cholesterol desmolase (CYP11A1, P450scc) - rate-limiting, mitochondrial, stimulated by ACTH via StAR (steroidogenic acute regulatory protein). 3β-HSD (Δ5→Δ4 isomerization). 17α-hydroxylase (CYP17) - in fasciculata/reticularis only, dual hydroxylase and lyase activity (requires cytochrome b5 for lyase). 21-hydroxylase (CYP21A2). 11β-hydroxylase (CYP11B1 - cortisol synthesis). Aldosterone synthase (CYP11B2 - unique to glomerulosa, 18-hydroxylase and 18-oxidase activity).

ACTH Regulation: CRH from PVN → anterior pituitary corticotrophs → POMC processing → ACTH 1-39 (active) + β-LPH + γ-MSH + β-endorphin. ACTH binds MC2R (melanocortin-2 receptor, Gs-coupled) → cAMP → PKA → StAR phosphorylation → cholesterol transport into mitochondria. Negative feedback: cortisol binds GR (glucocorticoid receptor) in hypothalamus and pituitary → gene transcription changes → reduced CRH and ACTH.

Cortisol Circulation and Metabolism: 90% bound to CBG (corticosteroid-binding globulin/transcortin), 6% albumin, 4% free. CBG increases with estrogen (pregnancy, oral contraceptives). Inactivated in liver by 5α- and 5β-reductase, 11β-HSD2 (in kidney/mineralocorticoid target tissues) converts cortisol to cortisone (prevents MR activation). 11β-HSD1 in liver converts cortisone to cortisol (amplifies glucocorticoid action).

Mineralocorticoid Action: Aldosterone binds MR (mineralocorticoid receptor, type I corticosteroid receptor) - same affinity for cortisol, but 11β-HSD2 inactivates cortisol. Genomic actions: increased transcription of ENaC α-subunit, Na+/K+-ATPase, ROMK. Non-genomic effects: second messengers, membrane receptors. Volume expansion → atrial natriuretic peptide (ANP) inhibits aldosterone and directly inhibits ENaC.

Adrenal Medulla Physiology: Preganglionic cholinergic stimulation via nicotinic receptors → depolarization → Ca2+ entry → vesicular release. Chromaffin granules contain catecholamines, ATP, chromogranins, enkephalins. Epinephrine (80%) and norepinephrine (20%) released. Adrenergic receptor pharmacology: α1 (Gq → IP3/DAG), α2 (Gi → ↓cAMP), β (Gs → ↑cAMP). Pheochromocytoma: catecholamine-secreting tumor causing hypertension, episodic sweating, anxiety.`,
      },
    },
    {
      title: 'Pancreas and Glucose Regulation',
      content: {
        patient: `The pancreas sits behind your stomach and has two functions: digestive (exocrine) and hormonal (endocrine). The endocrine part consists of tiny clusters called islets of Langerhans that produce hormones controlling blood sugar.

The main hormones are:
- INSULIN: Produced by beta cells when blood sugar is high (after eating). Insulin helps cells absorb glucose for energy and stores excess as glycogen in the liver and muscle. It lowers blood sugar.
- GLUCAGON: Produced by alpha cells when blood sugar is low (between meals, during fasting). Glucagon tells the liver to break down glycogen and release glucose into the blood. It raises blood sugar.

These two hormones work as a team to keep blood glucose in a healthy range (about 70-100 mg/dL fasting). Diabetes mellitus occurs when this system fails - either the body doesn't make enough insulin (Type 1) or cells don't respond properly to insulin (Type 2).`,
        intermediate: `PANCREATIC ISLETS: 1-2 million islets of Langerhans scattered in pancreatic tissue (1-2% of pancreatic mass). Five endocrine cell types: Beta (β) cells - 65-80%, produce insulin and amylin; Alpha (α) cells - 15-20%, produce glucagon; Delta (δ) cells - 3-10%, produce somatostatin; PP (F) cells - pancreatic polypeptide; Epsilon (ε) cells - ghrelin. Rich capillary network allows hormones to enter portal vein then liver.

INSULIN: 51 amino acid peptide (A chain 21, B chain 30, linked by disulfide bonds). Synthesized as preproinsulin → proinsulin → C-peptide + insulin. Secreted in response to: elevated blood glucose (main stimulus, ATP-sensitive K+ channel closure → depolarization → Ca2+ entry), amino acids (arginine), GI hormones (GLP-1, GIP), parasympathetic stimulation. Inhibited by: somatostatin, sympathetic stimulation (α2), low glucose, epinephrine.

Insulin Actions: Binds tyrosine kinase receptor (α2β2 tetramer) → autophosphorylation → IRS proteins → PI3K/Akt pathway and MAPK pathway. Target tissues: muscle, adipose, liver. Effects: (1) GLUT4 translocation to membrane (muscle/adipose) → glucose uptake; (2) Glycogen synthesis (glycogen synthase activation, GSK3 inhibition); (3) Glycolysis; (4) Lipogenesis (fatty acid synthesis, lipoprotein lipase activation); (5) Protein synthesis; (6) Anti-catabolic (inhibits gluconeogenesis, glycogenolysis, lipolysis, proteolysis).

GLUCAGON: 29 amino acid peptide from proglucagon. Secreted in response to: hypoglycemia (main), amino acids (especially arginine), sympathetic stimulation (β2), CCK, gastrin. Inhibited by: hyperglycemia, somatostatin, insulin, fatty acids. Actions via Gs-coupled receptor → cAMP → PKA. Liver primary target (abundant receptors). Effects: glycogenolysis (phosphorylase activation), gluconeogenesis (PEPCK, fructose-1,6-bisphosphatase induction), ketogenesis. No effect on skeletal muscle (lacks receptors).

GLUCOSE HOMEOSTASIS: Fasting state (insulin low, glucagon high) - hepatic glucose output maintains blood glucose. Postprandial state (insulin high, glucagon low) - glucose storage, glycogen synthesis, lipogenesis. Counter-regulatory hormones to hypoglycemia: glucagon (first line), epinephrine (if glucagon impaired), cortisol, growth hormone (chronic). Somatostatin inhibits both insulin and glucagon (paracrine regulation within islets).`,
        professional: `PANCREATIC ISLET CELL BIOLOGY:

Islet architecture: Beta cells centrally located (most glucose-responsive), alpha cells periphery, delta cells interspersed. Paracrine regulation: insulin inhibits alpha cells; glucagon stimulates beta cells; somatostatin inhibits both. Gap junctions allow electrical coupling. Blood flow: islet artery → center (beta cells) → periphery (alpha cells) → efferent vessel. Portal drainage to liver means high local hormone concentrations.

Insulin Secretion Mechanism (Stimulus-Secretion Coupling): Glucose enters beta cell via GLUT2 (high Km, matches metabolic glucose sensing). Glucokinase (low affinity, rate-limiting) phosphorylates glucose. Glycolysis → TCA cycle → ATP production. ATP/ADP ratio increases → KATP channel closure (Kir6.2 + SUR1, sulfonylurea receptor). Membrane depolarization → voltage-gated Ca2+ channel opening (L-type, CaV1.3). Cytosolic Ca2+ rise triggers vesicle fusion (synaptotagmin, SNAREs) → insulin exocytosis. Amplifying pathway: glucose metabolism generates signals that enhance secretion independent of KATP (mitochondrial signals, NADPH, malonyl-CoA, long-chain acyl-CoA).

Insulin Signal Transduction: Insulin receptor (INSR) - heterotetrameric tyrosine kinase. Autophosphorylation creates docking sites for IRS-1/2 (insulin receptor substrates). PI3K (p85 regulatory + p110 catalytic) binds IRS → PIP2 → PIP3 → PDK1/2 activation → Akt/PKB phosphorylation. Akt effects: AS160 phosphorylation → GLUT4 vesicle translocation; GSK3 phosphorylation → glycogen synthase activation; FOXO1 phosphorylation → nuclear exclusion (↓ gluconeogenic genes); mTORC1 activation → protein synthesis. Ras/MAPK pathway: Shc/Grb2/SOS → Ras → Raf → MEK → ERK1/2 → transcription factors, cell growth.

Glucagon Signaling: GCGR (Gs-coupled) → adenylyl cyclase activation → cAMP → PKA activation. PKA phosphorylates: phosphorylase kinase (activates glycogen phosphorylase for glycogenolysis); CREB (induces PEPCK, G6Pase for gluconeogenesis); HSL (hormone-sensitive lipase for lipolysis in adipose); ACC phosphorylation (inhibits fatty acid synthesis). Also activates IP3/DAG pathway.

Diabetes Mellitus Pathophysiology: Type 1 - autoimmune destruction of beta cells (anti-GAD65, anti-IA-2, anti-insulin, anti-ZnT8 antibodies), absolute insulin deficiency. Type 2 - insulin resistance (IRS-1 serine phosphorylation, lipid intermediates, inflammation) + progressive beta cell dysfunction (amylin aggregation, ER stress, oxidative stress, dedifferentiation). Metabolic syndrome: visceral adiposity, dyslipidemia, hypertension, insulin resistance, prothrombotic/proinflammatory state.

Incretin Effect: Oral glucose elicits greater insulin response than IV glucose due to gut hormones. GLP-1 (glucagon-like peptide-1 from L cells, cleaved from proglucagon) stimulates glucose-dependent insulin secretion, suppresses glucagon, delays gastric emptying, promotes satiety (via hypothalamus). GIP (glucose-dependent insulinotropic polypeptide from K cells). DPP-4 rapidly degrades these peptides. GLP-1 receptor agonists and DPP-4 inhibitors used in Type 2 diabetes treatment.`,
      },
    },
    {
      title: 'Stress Response and Endocrine Integration',
      content: {
        patient: `When you face stress - whether physical (injury, illness) or emotional (worry, fear) - your body mounts a coordinated response involving multiple hormones. This "fight or flight" response prepares you to handle the challenge.

The hypothalamus triggers the stress response by releasing CRH, which signals the pituitary to release ACTH, which tells the adrenal cortex to release CORTISOL. Meanwhile, the sympathetic nervous system stimulates the adrenal medulla to release ADRENALINE (epinephrine) and NORADRENALINE.

Together, these hormones: increase heart rate and blood pressure, raise blood sugar for energy, dilate airways for more oxygen, redirect blood flow to muscles and brain, sharpen mental focus, and temporarily suppress non-essential functions like digestion and immune response. After the stress passes, negative feedback reduces hormone production, allowing the body to return to normal.

Chronic stress with prolonged high cortisol can cause health problems including weight gain, high blood pressure, weakened immune system, sleep problems, and mood changes.`,
        intermediate: `STRESS RESPONSE PHYSIOLOGY: Walter Cannon's "fight or flight" and Hans Selye's General Adaptation Syndrome (alarm, resistance, exhaustion). Stressors can be physical (trauma, infection, hypoglycemia, hemorrhage, temperature extremes) or psychological.

NEUROENDOCRINE RESPONSE: (1) Immediate (seconds): Sympathetic nervous system activation → adrenal medulla catecholamine release. (2) Intermediate (minutes): Hypothalamic CRH release → pituitary ACTH → adrenal cortisol. (3) Sustained (hours-days): Continued HPA axis activation, vasopressin release, growth hormone and prolactin elevation, altered thyroid function.

HORMONAL ACTIONS DURING STRESS:
- Catecholamines (seconds-minutes): Cardiovascular - ↑ HR, ↑ contractility, vasoconstriction (skin, splanchnic), vasodilation (muscle, brain); Metabolic - glycogenolysis, gluconeogenesis, lipolysis; Pulmonary - bronchodilation; Other - pupillary dilation, pilomotor erection.
- Cortisol (minutes-hours): Metabolic - ↑ gluconeogenesis, protein catabolism, lipolysis; Cardiovascular - permissive for catecholamine action, maintains vascular tone; Anti-inflammatory - ↓ cytokine production, ↓ mast cell degranulation, lymphocyte redistribution; Immune suppression - ↓ cell-mediated immunity.
- Other hormones: Glucagon (↑); Insulin (↓ - insulin resistance); GH (initially ↑, then ↓ with chronic stress); Vasopressin/ADH (↑ - volume conservation); Renin-angiotensin-aldosterone (↑ - BP maintenance).

METABOLIC ADAPTATION: Stress hyperglycemia - cortisol, catecholamines, glucagon all raise blood glucose to fuel the "fight or flight" response. Insulin resistance develops to ensure glucose availability for brain and muscles. Protein catabolism provides gluconeogenic amino acids.

CHRONIC STRESS DYSFUNCTION: Prolonged HPA activation causes: metabolic syndrome (visceral obesity, dyslipidemia, insulin resistance, hypertension); immune suppression (increased infection risk, poor wound healing); cardiovascular disease; psychiatric effects (depression, anxiety, PTSD); reproductive dysfunction (hypothalamic hypogonadism); growth impairment in children; osteoporosis (bone resorption).`,
        professional: `STRESS PHYSIOLOGY AND ALLOSTATIC LOAD:

Neuroendocrine Integration: Paraventricular nucleus (PVN) of hypothalamus integrates neural inputs (amygdala, hippocampus, prefrontal cortex, brainstem) and humoral signals (cytokines, angiotensin II, leptin). CRH neurons in parvocellular PVN project to median eminence; magnocellular PVN neurons co-release CRH and vasopressin (synergistic ACTH stimulation). LC-NE system (locus coeruleus norepinephrine) activates CRH neurons; CRH activates LC-NE - positive feedback loop.

Glucocorticoid Actions in Stress: Genomic effects via GR (glucocorticoid receptor) dimerization - anti-inflammatory genes (IL-10, IκBα). Non-genomic effects via membrane GR and second messengers. Metabolic: PEPCK, G6Pase upregulation (gluconeogenesis); hormone-sensitive lipase induction; protein degradation in muscle (providing alanine for gluconeogenesis). Cardiovascular: upregulation of adrenergic receptors, maintenance of vascular responsiveness.

Immune Modulation: Acute stress enhances immune function (leukocyte redistribution to skin/mucosa); chronic stress suppresses immunity. Cortisol inhibits NF-κB (transcription factor for pro-inflammatory genes), AP-1, MAPK pathways. Reduces Th1/Th2 balance toward Th2 (humoral immunity). Impairs lymphocyte proliferation, antibody production, NK cell activity, inflammatory response.

Allostasis and Allostatic Load: Allostasis - achieving stability through change; allostatic load - cumulative wear and tear from chronic stress. Biomarkers: cortisol rhythm flattening, elevated evening cortisol, elevated CRP, IL-6, fibrinogen, blood pressure variability, abdominal obesity, shortened telomeres.

Clinical Stress States: Critical illness - ICU patients show HPA axis activation but often "relative adrenal insufficiency" (inadequate cortisol response to stress); sepsis - cytokine storm, corticosteroid resistance; Cushing's syndrome - chronic hypercortisolism mimicking stress state; PTSD - paradoxically often shows lower cortisol, enhanced negative feedback, smaller hippocampal volume; Major depression - HPA axis hyperactivity in ~50%, non-suppression on dexamethasone suppression test.

Therapeutic Implications: β-blockers for stress-induced hypertension/tachycardia; Corticosteroids for adrenal insufficiency, severe inflammation; CRH antagonists investigated for depression/anxiety; Lifestyle interventions (exercise, meditation, sleep hygiene) reduce allostatic load and improve HPA axis regulation.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'pituitary', structureName: 'Pituitary Gland', linkText: 'Pituitary Gland', relevance: 'Master endocrine gland controlling other glands' },
    { structureId: 'hypothalamus', structureName: 'Hypothalamus', linkText: 'Hypothalamus', relevance: 'Neuroendocrine control center' },
    { structureId: 'thyroid', structureName: 'Thyroid Gland', linkText: 'Thyroid Gland', relevance: 'Metabolic regulation via T3/T4' },
    { structureId: 'parathyroid', structureName: 'Parathyroid Glands', linkText: 'Parathyroid Glands', relevance: 'Calcium homeostasis' },
    { structureId: 'adrenal-gland', structureName: 'Adrenal Glands', linkText: 'Adrenal Glands', relevance: 'Stress hormones and electrolyte balance' },
    { structureId: 'pancreas', structureName: 'Pancreas', linkText: 'Pancreas', relevance: 'Glucose homeostasis via insulin and glucagon' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-17',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 17: The Endocrine System',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2022,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction',
      citation: 'Betts JG, Young KA, Wise JA, Johnson E, Poe B, Kruse DH, Korol O, Johnson JE, Womble M, DeSaix P. Anatomy and Physiology 2e. Chapter 17: The Endocrine System. OpenStax; 2022.',
    },
  ],
  relatedEntries: [
    { entryId: 'pituitary-gland', entryType: 'anatomy', name: 'Pituitary Gland', relationship: 'part-of', description: 'Master endocrine gland' },
    { entryId: 'thyroid-gland', entryType: 'anatomy', name: 'Thyroid Gland', relationship: 'part-of', description: 'Produces thyroid hormones' },
    { entryId: 'adrenal-glands', entryType: 'anatomy', name: 'Adrenal Glands', relationship: 'part-of', description: 'Produces cortisol and catecholamines' },
    { entryId: 'pancreas', entryType: 'anatomy', name: 'Pancreas', relationship: 'part-of', description: 'Endocrine and exocrine functions' },
    { entryId: 'hypothalamus', entryType: 'anatomy', name: 'Hypothalamus', relationship: 'related-to', description: 'Neuroendocrine control center' },
    { entryId: 'insulin', entryType: 'physiology', name: 'Insulin', relationship: 'see-also', description: 'Glucose-lowering hormone' },
    { entryId: 'glucagon', entryType: 'physiology', name: 'Glucagon', relationship: 'see-also', description: 'Glucose-raising hormone' },
    { entryId: 'cortisol', entryType: 'physiology', name: 'Cortisol', relationship: 'see-also', description: 'Primary glucocorticoid' },
    { entryId: 'thyroid-hormones', entryType: 'physiology', name: 'Thyroid Hormones', relationship: 'see-also', description: 'T3 and T4 regulation' },
    { entryId: 'diabetes-mellitus', entryType: 'condition', name: 'Diabetes Mellitus', relationship: 'related-to', description: 'Endocrine disorder of glucose regulation' },
    { entryId: 'hypothyroidism', entryType: 'condition', name: 'Hypothyroidism', relationship: 'related-to', description: 'Thyroid hormone deficiency' },
    { entryId: 'hyperthyroidism', entryType: 'condition', name: 'Hyperthyroidism', relationship: 'related-to', description: 'Excess thyroid hormone' },
    { entryId: 'cushings-syndrome', entryType: 'condition', name: 'Cushing\'s Syndrome', relationship: 'related-to', description: 'Cortisol excess' },
    { entryId: 'addisons-disease', entryType: 'condition', name: 'Addison\'s Disease', relationship: 'related-to', description: 'Adrenal insufficiency' },
  ],
  searchMetadata: {
    primaryKeywords: ['endocrine system', 'hormones', 'endocrine glands', 'pituitary', 'thyroid', 'adrenal', 'pancreas', 'insulin', 'glucagon', 'cortisol', 'thyroid hormones'],
    secondaryKeywords: ['endocrinology', 'hormone regulation', 'hypothalamus', 'negative feedback', 'tropic hormones', 'steroid hormones', 'peptide hormones'],
    synonyms: ['hormonal system', 'ductless glands', 'endocrine glands', 'chemical messengers'],
    abbreviations: ['HPA', 'ACTH', 'TSH', 'FSH', 'LH', 'T3', 'T4', 'ADH', 'PTH', 'DHEA', 'GH'],
    meshTerms: ['Endocrine System', 'Hormones', 'Pituitary Gland', 'Thyroid Gland', 'Adrenal Glands', 'Pancreas', 'Insulin', 'Glucagon'],
    tags: ['endocrinology', 'physiology', 'homeostasis', 'metabolism', 'stress response'],
  },
  lastUpdated: '2026-02-02T13:00:00Z',
  version: '1.0',
  reviewStatus: 'approved',
  clinicalImportance: 'essential',
};

// Export all entries
export const endocrineSystemEntries: EncyclopediaEntry[] = [endocrineSystemEntry];
