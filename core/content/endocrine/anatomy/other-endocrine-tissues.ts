/**
 * Other Endocrine Tissues - Anatomy
 *
 * Diffuse endocrine tissues and organs with secondary endocrine functions:
 * heart, adipose tissue, kidneys, GI tract, and placenta.
 */

import { EducationalContent } from '../../types';

export const OTHER_ENDOCRINE_TISSUES_ANATOMY: EducationalContent = {
  id: 'anatomy-other-endocrine-tissues',
  type: 'structure',
  name: 'Other Endocrine Tissues',
  alternateNames: ['Diffuse endocrine system', 'Secondary endocrine organs', 'Non-classical endocrine tissues'],
  fmaId: 'FMA:9668',

  levels: {
    1: {
      level: 1,
      summary: 'Many organs in your body make hormones even though that is not their main job - your heart, fat tissue, kidneys, stomach, and intestines all produce important hormones.',
      explanation: `You might think hormones only come from special glands, but many other organs make hormones too!

**Your Heart Makes Hormones**
- Makes ANP and BNP when stretched
- These hormones help control blood pressure
- Tell your kidneys to release extra salt and water

**Fat Tissue Makes Hormones**
- Makes leptin - tells your brain when you are full
- More fat = more leptin = less hungry (usually)
- Fat also makes estrogen and other hormones

**Your Kidneys Make Hormones**
- EPO (erythropoietin) - tells bone marrow to make more red blood cells
- Active vitamin D - helps absorb calcium

**Your Stomach and Intestines Make Hormones**
- Ghrelin from stomach - makes you feel hungry
- GLP-1 and GIP from intestines - help control blood sugar after meals
- Many other hormones control digestion

**The Placenta (During Pregnancy)**
- Makes hormones to maintain pregnancy
- Takes over hormone production from ovaries
- Makes hCG (the pregnancy test hormone)

**Why This Matters:**
Your body uses these "extra" hormones to coordinate different systems. For example, when you eat, your gut releases hormones that help your pancreas know to release insulin!`,
      keyTerms: [
        { term: 'leptin', definition: 'A hormone from fat cells that tells your brain you are full' },
        { term: 'EPO', definition: 'Erythropoietin; a kidney hormone that tells your body to make more red blood cells' },
        { term: 'ghrelin', definition: 'The hunger hormone from your stomach' },
        { term: 'incretins', definition: 'Gut hormones like GLP-1 that help control blood sugar' },
      ],
      analogies: [
        'These organs are like workers with side jobs - their main job might be pumping blood or storing energy, but they also send hormone messages.',
        'The gut hormones are like a phone call to the pancreas saying "Food is coming, get the insulin ready!"',
      ],
      examples: [
        'When athletes train at high altitude, their kidneys make more EPO to help carry oxygen in thinner air.',
        'The medicine used for type 2 diabetes (GLP-1 agonists) mimics a natural gut hormone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Beyond classical endocrine glands, multiple tissues produce hormones including the heart (natriuretic peptides), adipose tissue (adipokines), kidneys (EPO, active vitamin D), gastrointestinal tract (incretins, ghrelin), and placenta (hCG, progesterone).',
      explanation: `**Cardiac Endocrine Function:**

The heart produces natriuretic peptides in response to stretch:

| Hormone | Source | Trigger | Actions |
|---------|--------|---------|---------|
| ANP | Atrial myocytes | Atrial stretch | Natriuresis, vasodilation |
| BNP | Ventricular myocytes | Ventricular stretch | Same as ANP; clinical marker |
| CNP | Endothelium | Shear stress | Vasodilation, bone growth |

*Clinical Use:* BNP and NT-proBNP are used to diagnose and monitor heart failure.

**Adipose Tissue as Endocrine Organ:**

Fat is not just storage - it is an active endocrine organ:

| Adipokine | Effect | Clinical Relevance |
|-----------|--------|-------------------|
| Leptin | Satiety signal to brain | Deficiency causes extreme hunger/obesity |
| Adiponectin | Insulin sensitizing, anti-inflammatory | Low in obesity and metabolic syndrome |
| Resistin | May promote insulin resistance | Role in type 2 diabetes |
| TNF-α, IL-6 | Pro-inflammatory | Contribute to metabolic syndrome |

**Renal Endocrine Function:**

| Hormone | Stimulus | Action |
|---------|----------|--------|
| Erythropoietin (EPO) | Hypoxia | Stimulates red blood cell production |
| 1,25-(OH)2-Vitamin D (calcitriol) | PTH, low phosphate | Increases calcium and phosphate absorption |
| Renin | Low BP, sympathetic | Activates RAAS for blood pressure control |

**Gastrointestinal Endocrine System:**

*Stomach:*
- Ghrelin (hunger hormone): Released during fasting, stimulates appetite and GH
- Gastrin: Stimulates acid secretion

*Small Intestine (Enteroendocrine Cells):*
| Hormone | Cells | Location | Function |
|---------|-------|----------|----------|
| GIP | K cells | Duodenum | Incretin; potentiates insulin |
| GLP-1 | L cells | Ileum, colon | Incretin; insulin, satiety, slows gastric emptying |
| CCK | I cells | Duodenum | Gallbladder contraction, satiety |
| Secretin | S cells | Duodenum | Pancreatic bicarbonate secretion |
| GLP-2 | L cells | Ileum | Intestinal growth and repair |

*Incretin Effect:* Oral glucose produces greater insulin response than IV glucose due to GIP and GLP-1 release.

**Placental Endocrine Function:**

| Hormone | When | Function |
|---------|------|----------|
| hCG | Early pregnancy | Maintains corpus luteum; pregnancy test |
| Progesterone | After week 8-10 | Maintains pregnancy (takes over from CL) |
| Estrogen | Throughout | Many pregnancy adaptations |
| hPL | Mid-late pregnancy | Maternal metabolism, insulin resistance |`,
      keyTerms: [
        { term: 'natriuretic peptides', definition: 'Heart hormones (ANP, BNP) that promote sodium excretion and vasodilation' },
        { term: 'adipokines', definition: 'Hormones and signaling molecules produced by adipose tissue' },
        { term: 'enteroendocrine cells', definition: 'Hormone-secreting cells scattered throughout the GI tract lining' },
        { term: 'incretin effect', definition: 'Enhanced insulin secretion from oral vs IV glucose, mediated by gut hormones' },
        { term: 'hCG', definition: 'Human chorionic gonadotropin; pregnancy hormone maintaining corpus luteum' },
        { term: 'ghrelin', definition: 'Stomach hormone stimulating appetite; the "hunger hormone"' },
      ],
      analogies: [
        'The incretin effect is like the gut giving the pancreas a heads-up that food is coming so it can prepare the insulin response.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diffuse endocrine tissues include cardiomyocytes secreting natriuretic peptides via mechanotransduction, adipocytes producing leptin and adiponectin through energy-sensing pathways, renal cells releasing EPO via HIF-mediated hypoxia response, and enteroendocrine cells coordinating nutrient sensing with incretin release.',
      explanation: `**Cardiac Natriuretic Peptide System:**

*Synthesis and Processing:*
- ANP: Stored as proANP in atrial granules, released upon stretch
- BNP: Primarily synthesized on demand in ventricles
- Both cleaved from propeptides: NT-proANP/NT-proBNP (inactive) + active peptide

*Signaling:*
- NPR-A (guanylyl cyclase receptor): ANP and BNP ligand
- NPR-B: CNP receptor
- NPR-C: Clearance receptor
- Second messenger: cGMP → PKG activation

*Effects:*
- Kidney: Increased GFR, natriuresis, diuresis
- Blood vessels: Vasodilation (smooth muscle relaxation)
- Adrenals: Decreased aldosterone synthesis
- Heart: Reduces hypertrophy
- Brain: Reduces thirst, salt appetite

*Clinical:*
- BNP/NT-proBNP: Heart failure diagnosis and prognosis
- Nesiritide: Recombinant BNP for acute decompensated heart failure
- Neprilysin inhibitors (sacubitril): Block natriuretic peptide degradation

**Adipose Tissue Endocrinology:**

*Leptin:*
- Product of ob gene (obese gene)
- Secretion proportional to fat mass
- Signals via LepR (JAK-STAT pathway) in hypothalamus
- Reduces food intake, increases energy expenditure
- Leptin resistance in obesity (elevated leptin but no satiety)

*Adiponectin:*
- Paradoxically decreased in obesity
- Insulin-sensitizing via AMPK activation
- Anti-inflammatory, anti-atherogenic
- High molecular weight form most active
- Low adiponectin predicts type 2 diabetes

*Adipose-Derived Estrogen:*
- Aromatase in adipose tissue converts androgens to estrogens
- Major estrogen source in postmenopausal women
- Contributes to breast cancer risk in obesity

**Renal Endocrine Function:**

*Erythropoietin (EPO):*
- Produced by interstitial fibroblasts in renal cortex
- Hypoxia-inducible factor (HIF) pathway:
  - Normoxia: HIF-α hydroxylated by PHDs → VHL binding → proteasomal degradation
  - Hypoxia: PHDs inactive → HIF-α stabilized → EPO gene transcription
- EPO-R on erythroid progenitors → JAK2/STAT5 → survival and differentiation
- HIF-PHD inhibitors (roxadustat): New oral anemia therapy in CKD

*1,25-Dihydroxyvitamin D (Calcitriol):*
- Final activation step occurs in proximal tubule
- 1α-hydroxylase (CYP27B1) converts 25-OH-D to active form
- Regulation: Stimulated by PTH, low phosphate; inhibited by FGF23
- Actions via VDR (vitamin D receptor, nuclear receptor)
- Extra-renal 1α-hydroxylase in many tissues (paracrine effects)

**Gastrointestinal Enteroendocrine System:**

*Cell Types and Distribution:*
- Comprise <1% of gut epithelium but contain >20 hormone types
- Distributed in characteristic patterns along GI tract
- "Open" type: Apical surface contacts lumen (nutrient sensing)
- "Closed" type: No luminal contact (respond to neural/hormonal signals)

*GLP-1 Biology:*
- Proglucagon processed differently in gut vs. pancreas:
  - Alpha cells: PC2 → Glucagon
  - L cells: PC1/3 → GLP-1, GLP-2, glicentin
- GLP-1 half-life: ~2 minutes (DPP-4 degradation)
- Actions: Glucose-dependent insulin secretion, glucagon suppression, delayed gastric emptying, satiety
- GLP-1 receptor agonists: Semaglutide, liraglutide, dulaglutide

*Ghrelin:*
- Only known orexigenic (appetite-stimulating) gut hormone
- Secreted by X/A-like cells in gastric fundus
- Acylated (active) by GOAT enzyme
- GH secretagogue receptor (GHSR) activation
- Levels rise with fasting, fall after eating`,
      keyTerms: [
        { term: 'neprilysin', definition: 'Enzyme that degrades natriuretic peptides; inhibited by sacubitril in heart failure' },
        { term: 'HIF pathway', definition: 'Hypoxia-inducible factor system regulating EPO production and other hypoxia responses' },
        { term: 'DPP-4', definition: 'Dipeptidyl peptidase-4; enzyme that rapidly degrades GLP-1' },
        { term: 'ob gene', definition: 'Gene encoding leptin; mutations cause severe obesity' },
        { term: 'enteroendocrine L cells', definition: 'Intestinal cells secreting GLP-1, GLP-2, and PYY' },
        { term: 'GOAT', definition: 'Ghrelin O-acyltransferase; enzyme activating ghrelin by acylation' },
      ],
      clinicalNotes: 'BNP and NT-proBNP have different half-lives and renal clearance; NT-proBNP is affected more by renal function. Roxadustat (HIF-PHD inhibitor) is approved for anemia in CKD, offering oral alternative to injectable EPO. GLP-1 receptor agonists have expanded beyond diabetes to weight management (semaglutide 2.4 mg weekly) and show cardiovascular and renal benefits.',
    },
    4: {
      level: 4,
      summary: 'Non-classical endocrine tissues employ diverse signaling mechanisms: cardiomyocyte mechanotransduction driving natriuretic peptide release, adipocyte energy sensing coupling to leptin secretion, renal oxygen sensing via the HIF-PHD-VHL axis controlling EPO, and gut nutrient sensing activating incretin secretion through GPCRs and ion channels.',
      explanation: `**Molecular Mechanisms of Natriuretic Peptide Release:**

*Mechanical Sensing:*
- Wall stretch detected by mechanosensitive ion channels
- TRPC channels, Piezo channels implicated
- Stretch → Ca²⁺ influx → regulated secretion (ANP)
- BNP: Primarily transcriptional upregulation

*Transcriptional Regulation:*
- GATA4 and Nkx2.5: Cardiac transcription factors
- Activated by stretch, angiotensin II, endothelin
- BNP gene (NPPB) upregulated in heart failure
- ANP gene (NPPA) mutations: Familial atrial fibrillation

*Corin and Processing:*
- Corin: Cardiac serine protease on cardiomyocyte surface
- Cleaves proANP and proBNP to active forms
- Corin deficiency: Salt-sensitive hypertension, preeclampsia

**Advanced Adipokine Biology:**

*Leptin Signaling:*
\`\`\`
Leptin → LepRb (long form)
         ↓
      JAK2 activation
         ↓
    STAT3 phosphorylation → Nuclear translocation → POMC transcription
         ↓
      α-MSH → MC4R → Satiety
\`\`\`

*Leptin Resistance Mechanisms:*
- SOCS3 upregulation (feedback inhibitor)
- PTP1B dephosphorylates JAK2
- Reduced transport across blood-brain barrier
- Central inflammation

*Adiponectin Receptors:*
- AdipoR1 (skeletal muscle): High affinity for globular adiponectin
- AdipoR2 (liver): High affinity for full-length adiponectin
- Both: AMPK activation → fatty acid oxidation, glucose uptake

*Brown Adipose Tissue (BAT):*
- Specialized for thermogenesis
- UCP1 (uncoupling protein 1): Dissipates proton gradient as heat
- Activated by cold, β3-adrenergic stimulation
- Secretes BATokines (FGF21, IL-6)
- Metabolically active BAT inversely associated with obesity

**Renal Oxygen Sensing and EPO:**

*HIF System Detailed:*
\`\`\`
Normoxia:
O2 + 2-OG + HIF-α → PHD → Hydroxylated HIF-α → VHL binding → Ubiquitination → Proteasome

Hypoxia:
PHD inactive → HIF-α stable → Dimerizes with HIF-β → HRE binding → Target genes (EPO, VEGF, etc.)
\`\`\`

*HIF Isoforms:*
- HIF-1α: Ubiquitous, acute hypoxia response
- HIF-2α: EPO regulation in kidney (main regulator)
- HIF-3α: Negative regulator

*HIF-PHD Inhibitors (HIF Stabilizers):*
| Drug | Status | Mechanism |
|------|--------|-----------|
| Roxadustat | Approved (CKD anemia) | PHD inhibitor → HIF stabilization |
| Daprodustat | Approved | PHD inhibitor |
| Vadadustat | Approved (some countries) | PHD inhibitor |

*Advantages:* Oral, stimulates endogenous EPO, improves iron utilization
*Concerns:* Cardiovascular safety, tumor risk (HIF → angiogenesis)

**GI Hormone Signal Transduction:**

*Nutrient Sensing in Enteroendocrine Cells:*

| Nutrient | Sensor | Cell Type | Hormone Released |
|----------|--------|-----------|------------------|
| Glucose | SGLT1, sweet taste receptors | K, L cells | GIP, GLP-1 |
| Fatty acids | GPR40, GPR120 | I, K, L cells | CCK, GIP, GLP-1 |
| Amino acids | CaSR, GPRC6A | G, I cells | Gastrin, CCK |
| Protein digestion products | PepT1 | Various | Multiple |

*GLP-1 Receptor Signaling:*
\`\`\`
GLP-1 → GLP-1R (Gs-coupled)
         ↓
      Adenylyl cyclase → cAMP → PKA/EPAC
         ↓
      β-cell: Closes K-ATP channels (amplifying pathway)
              Ca²⁺ influx → Insulin exocytosis
         ↓
      Brain: Satiety via NTS, hypothalamus
\`\`\`

*GLP-1 Based Therapies:*
| Class | Examples | Key Features |
|-------|----------|--------------|
| GLP-1 RA | Semaglutide, liraglutide | Injectable or oral, weight loss, CV benefit |
| DPP-4i | Sitagliptin, linagliptin | Oral, weight neutral |
| Dual GIP/GLP-1 RA | Tirzepatide | Superior efficacy for glucose and weight |

**Placental Endocrine Function:**

*hCG:*
- Produced by syncytiotrophoblast
- Structure: α subunit (shared with LH, FSH, TSH) + unique β subunit
- Peaks at 8-10 weeks, then declines
- Maintains corpus luteum until placenta takes over progesterone production
- High levels in multiple gestation, hydatidiform mole, choriocarcinoma

*Progesterone:*
- Corpus luteum source until 8-10 weeks ("luteal-placental shift")
- Placenta uses maternal LDL cholesterol for synthesis
- Lacks CYP17A1 → cannot make androgens/estrogens de novo

*Estrogen:*
- Placenta aromatizes androgens from fetal adrenal (DHEA-S)
- Requires fetal-placental cooperation
- Estriol (E3) production depends on fetal adrenal 16α-hydroxylation
- Low estriol may indicate fetal adrenal insufficiency or anencephaly`,
      keyTerms: [
        { term: 'corin', definition: 'Cardiac protease processing proANP and proBNP; mutations linked to preeclampsia' },
        { term: 'UCP1', definition: 'Uncoupling protein 1 in brown fat; dissipates proton gradient as heat' },
        { term: 'PHD', definition: 'Prolyl hydroxylase domain enzymes; oxygen sensors regulating HIF stability' },
        { term: 'EPAC', definition: 'Exchange protein activated by cAMP; mediates some GLP-1 effects independent of PKA' },
        { term: 'tirzepatide', definition: 'Dual GIP and GLP-1 receptor agonist with superior glycemic and weight effects' },
        { term: 'luteal-placental shift', definition: 'Transition of progesterone production from corpus luteum to placenta at ~8-10 weeks' },
      ],
      clinicalNotes: 'Tirzepatide (dual GIP/GLP-1 RA) achieved up to 22.5% weight loss in clinical trials, surpassing single-incretin agonists. HIF-PHD inhibitors are being studied for conditions beyond anemia including ischemia and wound healing. Brown adipose tissue activation is a target for obesity therapy, though clinical translation has been challenging.',
    },
    5: {
      level: 5,
      summary: 'Non-classical endocrine tissues represent integrated physiological systems with therapeutic implications: natriuretic peptide pathway modulation in heart failure, adipokine targeting for metabolic disease, HIF pathway manipulation for anemia and beyond, incretin-based therapies revolutionizing diabetes and obesity care, and emerging understanding of organ cross-talk mediated by circulating factors.',
      explanation: `**Natriuretic Peptide System in Heart Failure Therapy:**

*Sacubitril/Valsartan (ARNI):*
- Sacubitril: Neprilysin inhibitor (increases ANP, BNP)
- Valsartan: ARB (blocks angiotensin II)
- Net effect: Enhanced natriuretic peptide signaling + RAAS blockade
- PARADIGM-HF: 20% RRR in CV death/HF hospitalization vs. enalapril

*Monitoring Challenge:*
- BNP elevated by neprilysin inhibition
- NT-proBNP not affected (not neprilysin substrate)
- Use NT-proBNP for monitoring on sacubitril/valsartan

*Designer Natriuretic Peptides:*
- Cenderitide: Chimeric peptide (CNP + DNP) with renal-specific effects
- Vericiguat: Soluble guanylyl cyclase stimulator (downstream of NP)
- Both target cGMP pathway

**Adipokine-Based Therapeutics:**

*Leptin Replacement:*
- Metreleptin: Recombinant leptin
- FDA approved for lipodystrophy
- Effective in leptin deficiency but NOT in common obesity (resistance)

*Adiponectin Agonists:*
- AdipoRon: Small molecule AdipoR agonist
- Preclinical improvement in insulin sensitivity
- No approved drugs yet

*Targeting BAT:*
- β3-agonists (mirabegron): Some BAT activation at high doses
- FGF21 analogs: Metabolic benefits in trials
- Limited clinical success so far

**HIF Pathway Beyond Anemia:**

*Therapeutic Applications:*
| Condition | Approach | Rationale |
|-----------|----------|-----------|
| Anemia of CKD | HIF-PHD inhibitors | Increase endogenous EPO |
| Ischemia | HIF activation | Promote angiogenesis, adaptation |
| VHL tumors | HIF-2α inhibitors | Block oncogenic HIF signaling |
| Inflammatory bowel disease | Local HIF stabilization | Epithelial barrier protection |

*HIF-2α Inhibitors:*
- Belzutifan: FDA approved for VHL-associated tumors
- Targets HIF-2α, spares HIF-1α
- Also under investigation for other solid tumors

*Concerns with HIF Stabilizers:*
- Theoretical tumor promotion (angiogenesis)
- Long-term cardiovascular safety data limited
- May exacerbate pulmonary hypertension

**Incretin Therapeutics Revolution:**

*Evolution of GLP-1 Based Therapies:*
| Generation | Examples | Advance |
|------------|----------|---------|
| First | Exenatide BID | Proved concept |
| Second | Liraglutide, exenatide QW | Once daily/weekly |
| Third | Semaglutide | Oral formulation, superior efficacy |
| Fourth | Tirzepatide | Dual GIP/GLP-1, best-in-class efficacy |

*Semaglutide Across Indications:*
- Diabetes: 2 mg SC weekly or oral
- Obesity: 2.4 mg SC weekly (Wegovy)
- NASH: Under investigation
- Cardiovascular: SELECT trial showed benefit in obesity without diabetes

*Beyond Glucose Control:*
- Cardiovascular protection: MACE reduction (SUSTAIN-6, LEADER)
- Kidney protection: Slows albuminuria, preserves eGFR
- NASH improvement: Reduces liver fat, may improve fibrosis
- Potential neurodegenerative disease applications (GLP-1R in brain)

*Next Generation:*
- Triple agonists (GLP-1/GIP/glucagon)
- Amylin analogs (cagrilintide) with GLP-1 RA
- Oral peptides expanding access

**Organ Cross-Talk and Integrated Endocrinology:**

*Gut-Brain Axis:*
- GLP-1 from gut reaches brainstem via vagal afferents and circulation
- Central GLP-1 neurons (NTS) project to hypothalamus
- Integrates nutrient sensing with appetite, reward, glucose control

*Bone-Pancreas Axis:*
- Osteocalcin (undercarboxylated, from bone) enhances insulin secretion
- Insulin promotes osteoblast survival
- Adiponectin affects bone through adipocyte-osteoblast interactions

*Muscle-Fat Cross-Talk:*
- Myokines (IL-6, irisin) from exercising muscle
- Irisin induces browning of white adipose tissue
- Exercise-induced IL-6 improves glucose uptake

*Liver-Adipose Axis:*
- FGF21 from liver during fasting/ketosis
- Acts on adipose tissue: Increases glucose uptake, browning
- Also acts centrally: Reduces sweet preference

**Emerging Circulating Factors:**

| Factor | Source | Target | Effect |
|--------|--------|--------|--------|
| FGF21 | Liver | Adipose, brain | Metabolic adaptation to fasting |
| Irisin | Muscle | WAT→BAT | Thermogenesis, browning |
| GDF15 | Various | Brainstem (GFRAL) | Anorexia, nausea, weight loss |
| Lipocalin-2 | Bone | Hypothalamus | Appetite suppression |
| METRNL | Muscle, adipose | Immune cells, adipose | Anti-inflammatory, browning |

*GDF15 in Drug Development:*
- Elevated in metformin users (may contribute to weight effects)
- Elevated in cancer cachexia
- Agonists investigated for obesity
- Antagonists investigated for cachexia`,
      keyTerms: [
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor; sacubitril/valsartan for heart failure' },
        { term: 'belzutifan', definition: 'HIF-2α inhibitor approved for VHL-associated tumors' },
        { term: 'triple agonist', definition: 'Investigational drugs activating GLP-1, GIP, and glucagon receptors for metabolic disease' },
        { term: 'irisin', definition: 'Myokine from exercising muscle that promotes browning of white adipose tissue' },
        { term: 'GDF15', definition: 'Growth differentiation factor 15; stress-induced cytokine causing anorexia via brainstem GFRAL receptor' },
        { term: 'GFRAL', definition: 'GDNF family receptor alpha-like; receptor for GDF15 in area postrema mediating anorexia' },
      ],
      clinicalNotes: 'GLP-1 RA benefits extend beyond glycemic control to cardiovascular and renal protection, weight management, and possibly NASH. Tirzepatide represents the most effective approved therapy for type 2 diabetes and obesity. NT-proBNP (not BNP) should be used for heart failure monitoring in patients on sacubitril/valsartan. HIF stabilizers offer oral convenience for CKD anemia but require long-term safety monitoring. The emerging field of inter-organ endocrine communication may yield novel therapeutic targets.',
    },
  },

  media: [
    {
      id: 'diffuse-endocrine-1',
      type: 'diagram',
      filename: 'diffuse-endocrine-overview.svg',
      title: 'Diffuse Endocrine System Overview',
      description: 'Non-classical endocrine organs and their hormones',
    },
    {
      id: 'incretin-pathway-1',
      type: 'diagram',
      filename: 'incretin-axis.svg',
      title: 'The Incretin Axis',
      description: 'GLP-1 and GIP from gut to pancreas and brain',
    },
  ],

  citations: [
    {
      id: 'drucker-incretin',
      type: 'article',
      title: 'The Incretin System: Glucagon-Like Peptide-1 Receptor Agonists and DPP-4 Inhibitors',
      authors: ['Drucker, DJ', 'Nauck, MA'],
      source: 'Lancet',
      license: 'Copyrighted',
    },
    {
      id: 'de-bold-anp',
      type: 'article',
      title: 'Atrial Natriuretic Factor',
      source: 'Physiological Reviews',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-pancreatic-islets', targetType: 'structure', relationship: 'related', label: 'Pancreatic Islets' },
    { targetId: 'physiology-glucose-homeostasis', targetType: 'pathway', relationship: 'related', label: 'Glucose Homeostasis' },
    { targetId: 'physiology-fluid-balance', targetType: 'pathway', relationship: 'related', label: 'Fluid Balance' },
    { targetId: 'pathology-heart-failure', targetType: 'condition', relationship: 'see-also', label: 'Heart Failure' },
    { targetId: 'pathology-obesity', targetType: 'condition', relationship: 'see-also', label: 'Obesity' },
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular', 'renal', 'digestive'],
    structures: ['FMA:9668', 'diffuse endocrine system'],
    topics: ['anatomy', 'integrated physiology'],
    keywords: ['natriuretic peptides', 'adipokines', 'leptin', 'EPO', 'incretins', 'GLP-1', 'ghrelin'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'cardiology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
