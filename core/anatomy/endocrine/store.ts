/**
 * Endocrine System Data Store
 *
 * Endocrine glands, hormones, and regulatory axes.
 */

import type {
  EndocrineGland,
  Hormone,
  EndocrineAxis,
  EndocrineStatistics,
  EndocrineGlandType,
} from './types';

// ============================================================================
// ENDOCRINE GLANDS
// ============================================================================

const endocrineGlands: Map<string, EndocrineGland> = new Map();

// --- Pituitary Gland ---
endocrineGlands.set('pituitary-gland', {
  id: 'pituitary-gland',
  name: 'Pituitary Gland',
  latinName: 'Hypophysis',
  fmaId: 'FMA:13889',
  type: 'pituitary',
  location: 'Sella turcica of sphenoid bone, connected to hypothalamus by infundibulum',
  dimensions: '~1 cm diameter',
  weight: '0.5-1 g',
  embryology: 'Anterior: Rathke pouch (oral ectoderm); Posterior: neural ectoderm (diencephalon)',
  histology: 'Anterior: cords of secretory cells; Posterior: pituicytes and axon terminals',
  hormones: [
    { hormoneId: 'gh', name: 'Growth Hormone', cellType: 'Somatotrophs' },
    { hormoneId: 'prolactin', name: 'Prolactin', cellType: 'Lactotrophs' },
    { hormoneId: 'acth', name: 'ACTH', cellType: 'Corticotrophs' },
    { hormoneId: 'tsh', name: 'TSH', cellType: 'Thyrotrophs' },
    { hormoneId: 'fsh', name: 'FSH', cellType: 'Gonadotrophs' },
    { hormoneId: 'lh', name: 'LH', cellType: 'Gonadotrophs' },
    { hormoneId: 'adh', name: 'ADH (Vasopressin)', cellType: 'From hypothalamus' },
    { hormoneId: 'oxytocin', name: 'Oxytocin', cellType: 'From hypothalamus' },
  ],
  bloodSupply: ['Superior hypophyseal artery (portal system to anterior)', 'Inferior hypophyseal artery (posterior)'],
  venousDrainage: ['Cavernous sinus'],
  innervation: ['Hypothalamic-hypophyseal tract (posterior pituitary)'],
  explanations: {
    level1: 'The pituitary gland is a pea-sized "master gland" at the base of your brain that controls many other glands.',
    level2: 'The pituitary has two parts: the anterior pituitary makes hormones that control growth, reproduction, and other glands. The posterior pituitary releases hormones made in the hypothalamus.',
    level3: 'The anterior pituitary contains five cell types producing six hormones regulated by hypothalamic releasing/inhibiting hormones via the portal system. The posterior pituitary stores and releases ADH and oxytocin from hypothalamic neurons.',
    level4: 'The hypophyseal portal system delivers hypothalamic hormones to anterior pituitary cells: GHRH→GH, TRH→TSH/PRL, CRH→ACTH, GnRH→FSH/LH. Dopamine tonically inhibits prolactin. The posterior pituitary is a neurohemal organ where magnocellular neurosecretory axons release ADH and oxytocin.',
    level5: 'Anterior pituitary development requires specific transcription factors: Pit-1 (GH, PRL, TSH), SF-1 (FSH, LH), TPIT (ACTH). Pulsatile GnRH secretion is essential; continuous GnRH downregulates receptors (basis for GnRH agonist therapy). Prolactin is unique in being tonically inhibited by dopamine; pituitary stalk damage increases prolactin but decreases all other anterior pituitary hormones.',
  },
  keyFacts: [
    '"Master gland" - controls other endocrine glands',
    'Anterior (adenohypophysis): 6 hormones from 5 cell types',
    'Posterior (neurohypophysis): releases ADH and oxytocin',
    'Hypophyseal portal system: hypothalamus → anterior pituitary',
    'Enlargement can compress optic chiasm → bitemporal hemianopia',
  ],
  pathologies: [
    {
      name: 'Pituitary adenoma',
      description: 'Benign tumor of anterior pituitary',
      type: 'tumor',
      symptoms: ['Mass effect (headache, visual field defects)', 'Hormone excess or deficiency'],
      causes: ['Sporadic', 'MEN1 syndrome'],
      labFindings: ['Hormone levels depend on tumor type'],
      relevantImaging: ['MRI pituitary with gadolinium'],
    },
    {
      name: 'Hypopituitarism',
      description: 'Deficiency of pituitary hormones',
      type: 'hypo',
      symptoms: ['Fatigue', 'Hypothyroidism', 'Adrenal insufficiency', 'Hypogonadism'],
      causes: ['Pituitary tumor', 'Sheehan syndrome (postpartum)', 'Radiation', 'Surgery'],
    },
    {
      name: 'Sheehan syndrome',
      description: 'Postpartum pituitary necrosis from hemorrhage',
      type: 'hypo',
      symptoms: ['Failure to lactate', 'Amenorrhea', 'Fatigue', 'Hypotension'],
      causes: ['Severe postpartum hemorrhage'],
    },
  ],
  relevantLabs: ['GH/IGF-1', 'Prolactin', 'ACTH/Cortisol', 'TSH/Free T4', 'FSH/LH', 'Testosterone/Estradiol'],
  relevantImaging: ['MRI pituitary with gadolinium'],
  relatedStructures: ['hypothalamus', 'sella-turcica', 'optic-chiasm', 'cavernous-sinus'],
});

// --- Thyroid Gland ---
endocrineGlands.set('thyroid-gland', {
  id: 'thyroid-gland',
  name: 'Thyroid Gland',
  latinName: 'Glandula thyroidea',
  fmaId: 'FMA:9603',
  type: 'thyroid',
  location: 'Anterior neck, inferior to larynx, wrapping around trachea (C5-T1)',
  dimensions: 'Each lobe: 4-6 cm long, 1.5-2 cm wide',
  weight: '15-25 g',
  embryology: 'Foramen cecum of tongue → thyroglossal duct → final position',
  histology: 'Follicles filled with colloid (thyroglobulin); parafollicular C cells',
  hormones: [
    { hormoneId: 't4', name: 'Thyroxine (T4)', cellType: 'Follicular cells' },
    { hormoneId: 't3', name: 'Triiodothyronine (T3)', cellType: 'Follicular cells' },
    { hormoneId: 'calcitonin', name: 'Calcitonin', cellType: 'Parafollicular (C) cells' },
  ],
  bloodSupply: ['Superior thyroid artery (external carotid)', 'Inferior thyroid artery (thyrocervical trunk)'],
  venousDrainage: ['Superior and middle thyroid veins → IJV', 'Inferior thyroid veins → brachiocephalic'],
  innervation: ['Superior laryngeal nerve (external branch)', 'Recurrent laryngeal nerve (posterior)'],
  explanations: {
    level1: 'The thyroid gland in your neck makes hormones that control how fast your body uses energy.',
    level2: 'The thyroid produces T3 and T4 hormones that regulate metabolism, growth, and development. It also makes calcitonin which helps regulate calcium.',
    level3: 'Thyroid follicles store thyroglobulin in colloid. TSH stimulates iodine uptake, thyroglobulin synthesis, and hormone release. T4 is converted to active T3 in peripheral tissues. C cells produce calcitonin.',
    level4: 'Thyroid hormone synthesis: NIS (sodium-iodide symporter) concentrates iodine, TPO (thyroperoxidase) organifies iodine and couples MIT/DIT residues. T4:T3 ratio is ~20:1; peripheral deiodinases (D1, D2, D3) regulate local T3 levels.',
    level5: 'Thyroid hormone receptors (TRα, TRβ) are nuclear receptors that bind T3 and regulate gene transcription via thyroid hormone response elements. T3 increases basal metabolic rate via Na⁺/K⁺-ATPase expression, upregulates β-adrenergic receptors, and is essential for CNS development. Wolff-Chaikoff effect: high iodine transiently inhibits organification. Graves disease involves TSH receptor-stimulating antibodies.',
  },
  keyFacts: [
    'Butterfly-shaped gland anterior to trachea',
    'T4 is prohormone; T3 is active form',
    'Iodine required for hormone synthesis',
    'Recurrent laryngeal nerve at risk during surgery',
    'Most vascular organ per gram of tissue',
  ],
  pathologies: [
    {
      name: 'Graves disease',
      description: 'Autoimmune hyperthyroidism',
      type: 'hyper',
      symptoms: ['Weight loss', 'Heat intolerance', 'Tremor', 'Tachycardia', 'Exophthalmos', 'Pretibial myxedema'],
      causes: ['TSH receptor-stimulating antibodies (TSI)'],
      labFindings: ['Low TSH', 'High free T4/T3', 'Positive TSI'],
      relevantImaging: ['Thyroid uptake scan (diffusely increased)'],
    },
    {
      name: 'Hashimoto thyroiditis',
      description: 'Autoimmune hypothyroidism',
      type: 'autoimmune',
      symptoms: ['Fatigue', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin'],
      causes: ['Anti-TPO and anti-thyroglobulin antibodies'],
      labFindings: ['High TSH', 'Low free T4', 'Positive anti-TPO'],
    },
    {
      name: 'Thyroid nodule/cancer',
      description: 'Benign or malignant thyroid mass',
      type: 'tumor',
      symptoms: ['Palpable nodule', 'Often asymptomatic', 'Hoarseness if RLN involved'],
      causes: ['Radiation exposure', 'Iodine deficiency', 'Genetic (RET mutations)'],
      relevantImaging: ['Thyroid ultrasound', 'FNA biopsy'],
    },
  ],
  relevantLabs: ['TSH', 'Free T4', 'Free T3', 'Anti-TPO', 'Anti-thyroglobulin', 'Thyroglobulin'],
  relevantImaging: ['Thyroid ultrasound', 'Nuclear uptake scan'],
  relatedStructures: ['trachea', 'esophagus', 'parathyroid-glands', 'recurrent-laryngeal-nerve'],
});

// --- Parathyroid Glands ---
endocrineGlands.set('parathyroid-glands', {
  id: 'parathyroid-glands',
  name: 'Parathyroid Glands',
  latinName: 'Glandulae parathyroideae',
  fmaId: 'FMA:13890',
  type: 'parathyroid',
  location: 'Posterior surface of thyroid gland (usually 4 glands)',
  dimensions: '6 × 3 × 2 mm each',
  weight: '30-50 mg each',
  embryology: 'Superior: 4th pharyngeal pouch; Inferior: 3rd pharyngeal pouch (with thymus)',
  histology: 'Chief cells (PTH), oxyphil cells (function unclear)',
  hormones: [
    { hormoneId: 'pth', name: 'Parathyroid Hormone', cellType: 'Chief cells' },
  ],
  bloodSupply: ['Inferior thyroid artery (primarily)'],
  innervation: ['Cervical sympathetic ganglia'],
  explanations: {
    level1: 'These four tiny glands behind your thyroid control calcium levels in your blood.',
    level2: 'The parathyroid glands make PTH (parathyroid hormone), which raises blood calcium by increasing calcium release from bones, absorption from intestines, and reabsorption in kidneys.',
    level3: 'PTH is the primary regulator of calcium homeostasis. It increases serum calcium by: 1) stimulating osteoclast activity, 2) increasing renal calcium reabsorption, 3) stimulating 1α-hydroxylase for active vitamin D production.',
    level4: 'The calcium-sensing receptor (CaSR) on parathyroid cells detects serum calcium and regulates PTH secretion via minute-to-minute feedback. PTH acts on PTH1R in bone and kidney. PTH increases phosphate excretion (phosphaturic), distinguishing hyperparathyroidism from other hypercalcemic conditions.',
    level5: 'CaSR is a GPCR that activates Gq and Gi pathways, inhibiting PTH secretion when calcium is high. PTH binds PTH1R (GPCR) activating cAMP and PKA pathways in target cells. Osteoclasts lack PTH1R; PTH acts on osteoblasts which then produce RANKL to stimulate osteoclastogenesis. Primary hyperparathyroidism shows elevated PTH with hypercalcemia; secondary shows elevated PTH with low/normal calcium (renal disease, vitamin D deficiency).',
  },
  keyFacts: [
    'Usually 4 glands (can be 3-6)',
    'Inferior glands more variable in position',
    'PTH raises serum calcium, lowers phosphorus',
    'CaSR senses serum calcium',
    'At risk during thyroid surgery',
  ],
  pathologies: [
    {
      name: 'Primary hyperparathyroidism',
      description: 'Excessive PTH from parathyroid pathology',
      type: 'hyper',
      symptoms: ['Stones (kidney)', 'Bones (pain, fractures)', 'Groans (abdominal)', 'Moans (psychiatric)'],
      causes: ['Parathyroid adenoma (85%)', 'Hyperplasia', 'Carcinoma'],
      labFindings: ['High calcium', 'High or inappropriately normal PTH', 'Low phosphorus'],
      relevantImaging: ['Sestamibi scan', 'Neck ultrasound'],
    },
    {
      name: 'Hypoparathyroidism',
      description: 'PTH deficiency',
      type: 'hypo',
      symptoms: ['Tetany', 'Perioral numbness', 'Chvostek/Trousseau signs', 'Seizures'],
      causes: ['Post-surgical (thyroidectomy)', 'Autoimmune', 'DiGeorge syndrome'],
      labFindings: ['Low calcium', 'Low PTH', 'High phosphorus'],
    },
  ],
  relevantLabs: ['PTH', 'Calcium (total and ionized)', 'Phosphorus', 'Vitamin D', '24-hour urine calcium'],
  relevantImaging: ['Sestamibi scan', 'Neck ultrasound', '4D CT'],
  relatedStructures: ['thyroid-gland', 'inferior-thyroid-artery', 'recurrent-laryngeal-nerve'],
});

// --- Adrenal Glands ---
endocrineGlands.set('adrenal-glands', {
  id: 'adrenal-glands',
  name: 'Adrenal Glands',
  latinName: 'Glandulae suprarenales',
  fmaId: 'FMA:9604',
  type: 'adrenal',
  location: 'Superior pole of each kidney, retroperitoneal',
  dimensions: '4-6 cm × 2-3 cm × 1 cm',
  weight: '4-5 g each',
  embryology: 'Cortex: mesoderm; Medulla: neural crest (chromaffin cells)',
  histology: 'Cortex: 3 zones (GFR: glomerulosa, fasciculata, reticularis); Medulla: chromaffin cells',
  hormones: [
    { hormoneId: 'aldosterone', name: 'Aldosterone', cellType: 'Zona glomerulosa' },
    { hormoneId: 'cortisol', name: 'Cortisol', cellType: 'Zona fasciculata' },
    { hormoneId: 'dhea', name: 'DHEA/Androgens', cellType: 'Zona reticularis' },
    { hormoneId: 'epinephrine', name: 'Epinephrine', cellType: 'Chromaffin cells (medulla)' },
    { hormoneId: 'norepinephrine', name: 'Norepinephrine', cellType: 'Chromaffin cells (medulla)' },
  ],
  bloodSupply: ['Superior adrenal artery (inferior phrenic)', 'Middle adrenal artery (aorta)', 'Inferior adrenal artery (renal)'],
  venousDrainage: ['Right: directly to IVC', 'Left: to left renal vein'],
  innervation: ['Preganglionic sympathetic (medulla)', 'Cortex is not innervated'],
  explanations: {
    level1: 'The adrenal glands sit on top of your kidneys and make hormones that help you respond to stress.',
    level2: 'The adrenal glands have two parts: the outer cortex makes cortisol (stress hormone), aldosterone (salt/water balance), and androgens. The inner medulla makes adrenaline (epinephrine) for fight-or-flight.',
    level3: 'The adrenal cortex has three zones (GFR): glomerulosa (aldosterone - regulated by RAAS), fasciculata (cortisol - regulated by ACTH), reticularis (androgens - regulated by ACTH). The medulla is modified sympathetic ganglion.',
    level4: 'Cortisol synthesis requires StAR protein and multiple CYP enzymes. Cortisol has permissive effects on catecholamines and glucagon, maintains vascular tone, and is immunosuppressive. Aldosterone acts on mineralocorticoid receptor in collecting duct to retain Na⁺ and excrete K⁺.',
    level5: 'Steroidogenesis: cholesterol → pregnenolone (CYP11A1/StAR) → zone-specific pathways. Zone-specific expression: CYP11B2 (aldosterone synthase) in glomerulosa; CYP17 (17α-hydroxylase/lyase) in fasciculata/reticularis. Cortisol binds glucocorticoid receptor (GR), a nuclear receptor regulating ~20% of human genes. Circadian cortisol rhythm driven by SCN→PVN→CRH. Adrenal crisis is medical emergency requiring immediate glucocorticoid replacement.',
  },
  keyFacts: [
    'GFR mnemonic: "Salt, Sugar, Sex - the deeper you go, the sweeter it gets"',
    'Cortex: mesoderm origin; Medulla: neural crest origin',
    'Right adrenal vein drains directly to IVC (surgical importance)',
    'Cortisol follows circadian rhythm (highest in morning)',
    'Medulla: modified sympathetic ganglion (preganglionic input)',
  ],
  pathologies: [
    {
      name: 'Cushing syndrome',
      description: 'Excess cortisol',
      type: 'hyper',
      symptoms: ['Central obesity', 'Moon facies', 'Buffalo hump', 'Striae', 'Hypertension', 'Diabetes'],
      causes: ['Exogenous steroids (most common)', 'Pituitary adenoma (Cushing disease)', 'Adrenal tumor', 'Ectopic ACTH'],
      labFindings: ['24-hour urine cortisol elevated', 'Late-night salivary cortisol elevated', 'Dexamethasone suppression test'],
    },
    {
      name: 'Addison disease',
      description: 'Primary adrenal insufficiency',
      type: 'hypo',
      symptoms: ['Fatigue', 'Weight loss', 'Hypotension', 'Hyperpigmentation', 'Salt craving'],
      causes: ['Autoimmune (most common in developed countries)', 'Infection (TB, HIV)', 'Hemorrhage'],
      labFindings: ['Low cortisol', 'High ACTH', 'Low aldosterone', 'Hyperkalemia', 'Hyponatremia'],
    },
    {
      name: 'Pheochromocytoma',
      description: 'Catecholamine-secreting tumor of adrenal medulla',
      type: 'tumor',
      symptoms: ['Episodic hypertension', 'Headache', 'Sweating', 'Palpitations', 'Pallor'],
      causes: ['Sporadic', 'MEN2A/2B', 'VHL', 'NF1', 'SDH mutations'],
      labFindings: ['Elevated plasma metanephrines', '24-hour urine catecholamines/metanephrines'],
      relevantImaging: ['CT/MRI abdomen', 'MIBG scan'],
    },
    {
      name: 'Primary aldosteronism (Conn syndrome)',
      description: 'Excess aldosterone production',
      type: 'hyper',
      symptoms: ['Hypertension (often resistant)', 'Hypokalemia', 'Metabolic alkalosis'],
      causes: ['Adrenal adenoma', 'Bilateral adrenal hyperplasia'],
      labFindings: ['High aldosterone', 'Low renin', 'Hypokalemia'],
    },
  ],
  relevantLabs: ['Cortisol (AM, 24-hour urine, salivary)', 'ACTH', 'Aldosterone', 'Renin', 'Metanephrines', 'DHEA-S'],
  relevantImaging: ['CT adrenals', 'MRI adrenals', 'Adrenal vein sampling'],
  relatedStructures: ['kidneys', 'aorta', 'inferior-vena-cava'],
});

// --- Pancreatic Islets ---
endocrineGlands.set('pancreatic-islets', {
  id: 'pancreatic-islets',
  name: 'Pancreatic Islets (of Langerhans)',
  latinName: 'Insulae pancreaticae',
  fmaId: 'FMA:16016',
  type: 'pancreatic-islet',
  location: 'Scattered throughout pancreas (more in tail)',
  dimensions: '~1-2 million islets',
  weight: '1-2% of pancreatic mass',
  histology: 'α cells (periphery), β cells (core), δ cells, PP cells',
  hormones: [
    { hormoneId: 'insulin', name: 'Insulin', cellType: 'β cells' },
    { hormoneId: 'glucagon', name: 'Glucagon', cellType: 'α cells' },
    { hormoneId: 'somatostatin', name: 'Somatostatin', cellType: 'δ cells' },
    { hormoneId: 'pancreatic-polypeptide', name: 'Pancreatic Polypeptide', cellType: 'PP cells' },
  ],
  bloodSupply: ['Branches of splenic and pancreaticoduodenal arteries'],
  venousDrainage: ['Portal vein'],
  innervation: ['Parasympathetic (vagus)', 'Sympathetic'],
  explanations: {
    level1: 'The islets of Langerhans are tiny clusters of cells in your pancreas that control your blood sugar.',
    level2: 'The pancreatic islets make insulin (lowers blood sugar) from beta cells and glucagon (raises blood sugar) from alpha cells. They work together to keep your blood sugar stable.',
    level3: 'Islet cell types: β cells (60-70%, insulin), α cells (20-30%, glucagon), δ cells (5-10%, somatostatin), PP cells (pancreatic polypeptide). β cells are central; α cells peripheral. Paracrine signaling coordinates responses.',
    level4: 'Glucose entry via GLUT2 triggers insulin secretion: glucose → glucokinase → ATP → K-ATP channel closure → depolarization → Ca²⁺ influx → insulin granule exocytosis. Incretin effect: GLP-1 and GIP augment insulin secretion. Somatostatin inhibits both insulin and glucagon.',
    level5: 'The β-cell K-ATP channel (Kir6.2 + SUR1) is the metabolic sensor linking glucose metabolism to insulin secretion. First-phase insulin (preformed granules) is lost early in type 2 diabetes. Amylin (co-secreted with insulin) slows gastric emptying. Glucagon increases hepatic glucose output via PKA-mediated glycogenolysis and gluconeogenesis. SGLT2 inhibitors and GLP-1 agonists leverage these pathways for diabetes treatment.',
  },
  keyFacts: [
    '1-2 million islets, 1-2% of pancreatic mass',
    'β cells: most numerous, produce insulin',
    'α cells: produce glucagon (counterregulatory)',
    'Islet blood drains to portal vein (first-pass hepatic effect)',
    'Type 1 diabetes: autoimmune β-cell destruction',
  ],
  pathologies: [
    {
      name: 'Type 1 Diabetes Mellitus',
      description: 'Autoimmune destruction of β cells',
      type: 'autoimmune',
      symptoms: ['Polyuria', 'Polydipsia', 'Weight loss', 'DKA at presentation'],
      causes: ['Autoimmune (HLA-DR3/DR4)', 'Anti-GAD, anti-islet cell antibodies'],
      labFindings: ['Hyperglycemia', 'Low/absent C-peptide', 'Positive autoantibodies'],
    },
    {
      name: 'Type 2 Diabetes Mellitus',
      description: 'Insulin resistance and relative insulin deficiency',
      type: 'other',
      symptoms: ['Often asymptomatic initially', 'Polyuria', 'Polydipsia', 'Blurred vision'],
      causes: ['Obesity', 'Genetic factors', 'Sedentary lifestyle'],
      labFindings: ['Hyperglycemia', 'Elevated HbA1c', 'Normal or elevated C-peptide'],
    },
    {
      name: 'Insulinoma',
      description: 'Insulin-secreting β-cell tumor',
      type: 'tumor',
      symptoms: ['Hypoglycemia (Whipple triad)', 'Confusion', 'Diaphoresis', 'Weight gain'],
      causes: ['Sporadic', 'MEN1'],
      labFindings: ['Hypoglycemia with inappropriately high insulin and C-peptide'],
      relevantImaging: ['CT/MRI pancreas', 'Endoscopic ultrasound'],
    },
  ],
  relevantLabs: ['Glucose', 'HbA1c', 'Insulin', 'C-peptide', 'GAD antibodies', 'Islet cell antibodies'],
  relatedStructures: ['pancreas', 'portal-vein'],
});

// --- Gonads (simplified) ---
endocrineGlands.set('testes', {
  id: 'testes',
  name: 'Testes',
  latinName: 'Testis',
  fmaId: 'FMA:7210',
  type: 'gonadal',
  location: 'Scrotum',
  dimensions: '4-5 cm × 2.5-3 cm × 2-3 cm',
  weight: '10-15 g each',
  histology: 'Seminiferous tubules (spermatogenesis); Leydig cells (testosterone); Sertoli cells (support)',
  hormones: [
    { hormoneId: 'testosterone', name: 'Testosterone', cellType: 'Leydig cells' },
    { hormoneId: 'inhibin-b', name: 'Inhibin B', cellType: 'Sertoli cells' },
  ],
  bloodSupply: ['Testicular artery (from aorta)'],
  venousDrainage: ['Pampiniform plexus → Testicular vein (left to renal vein, right to IVC)'],
  innervation: ['Testicular plexus (T10 sympathetic)'],
  explanations: {
    level1: 'The testes make sperm and testosterone, the main male hormone.',
    level2: 'The testes have two functions: producing sperm (in seminiferous tubules) and making testosterone (in Leydig cells), which is responsible for male characteristics.',
    level3: 'LH stimulates Leydig cells to produce testosterone. FSH acts on Sertoli cells to support spermatogenesis. Inhibin B from Sertoli cells provides negative feedback on FSH.',
    level4: 'Testosterone synthesis: LH → Leydig cell LH receptor → cAMP → StAR → cholesterol import → testosterone. Sertoli cells have FSH receptors and provide the blood-testis barrier, growth factors, and androgen-binding protein for spermatogenesis.',
    level5: 'Spermatogenesis takes 64 days and requires intratesticular testosterone levels 50-100x serum levels. Sertoli cells express aromatase converting testosterone to estradiol (local regulation). The blood-testis barrier (Sertoli cell tight junctions) creates an immunologically privileged site. Testosterone is 5α-reduced to DHT in target tissues; aromatized to estradiol in adipose.',
  },
  keyFacts: [
    'Dual function: spermatogenesis and steroidogenesis',
    'Leydig cells: testosterone (LH-dependent)',
    'Sertoli cells: support spermatogenesis, produce inhibin B (FSH-dependent)',
    'Optimal temperature 2-3°C below body temperature',
    'Left testicular vein drains to left renal vein (varicocele more common on left)',
  ],
  pathologies: [
    {
      name: 'Hypogonadism',
      description: 'Testosterone deficiency',
      type: 'hypo',
      symptoms: ['Decreased libido', 'Erectile dysfunction', 'Fatigue', 'Decreased muscle mass'],
      causes: ['Primary (testicular): Klinefelter, trauma, orchitis', 'Secondary (pituitary/hypothalamic)'],
      labFindings: ['Low testosterone', 'High LH/FSH (primary) or low LH/FSH (secondary)'],
    },
  ],
  relevantLabs: ['Testosterone', 'FSH', 'LH', 'Inhibin B', 'Semen analysis'],
  relatedStructures: ['epididymis', 'vas-deferens', 'scrotum'],
});

endocrineGlands.set('ovaries', {
  id: 'ovaries',
  name: 'Ovaries',
  latinName: 'Ovarium',
  fmaId: 'FMA:7209',
  type: 'gonadal',
  location: 'Pelvic cavity, lateral to uterus',
  dimensions: '3-5 cm × 1.5-3 cm × 1-1.5 cm',
  weight: '5-8 g each',
  histology: 'Follicles at various stages; Corpus luteum; Stroma (theca and granulosa cells)',
  hormones: [
    { hormoneId: 'estrogen', name: 'Estrogen (Estradiol)', cellType: 'Granulosa cells' },
    { hormoneId: 'progesterone', name: 'Progesterone', cellType: 'Corpus luteum' },
    { hormoneId: 'inhibin', name: 'Inhibin', cellType: 'Granulosa cells' },
  ],
  bloodSupply: ['Ovarian artery (from aorta)', 'Uterine artery branches'],
  venousDrainage: ['Ovarian vein (left to renal vein, right to IVC)'],
  innervation: ['Ovarian plexus (T10-L1 sympathetic)'],
  explanations: {
    level1: 'The ovaries make eggs and female hormones like estrogen and progesterone.',
    level2: 'The ovaries release one egg each month (ovulation) and produce estrogen (for female characteristics and menstrual cycle) and progesterone (for pregnancy preparation).',
    level3: 'FSH stimulates follicle development. LH surge triggers ovulation. Granulosa cells produce estrogen (aromatized from theca cell androgens). After ovulation, corpus luteum produces progesterone.',
    level4: 'Two-cell theory: LH→theca cells→androgens; FSH→granulosa cells→aromatase→estrogen. Dominant follicle selection involves rising FSH sensitivity. LH surge causes follicle rupture and luteinization. Corpus luteum has limited lifespan unless rescued by hCG.',
    level5: 'Follicular development: primordial→primary→secondary→antral→preovulatory. FSH upregulates aromatase and LH receptors on granulosa cells. Estrogen positive feedback triggers LH surge. Ovulation occurs ~36 hours after LH surge via prostaglandins and proteases. Corpus luteum produces progesterone (>10 ng/mL confirms ovulation). Inhibin A (corpus luteum) and Inhibin B (follicle) provide negative feedback on FSH.',
  },
  keyFacts: [
    'Contains all oocytes at birth (~1-2 million, declining to ~300,000 at puberty)',
    'One dominant follicle selected each cycle',
    'Estrogen: proliferative phase; Progesterone: secretory phase',
    'Corpus luteum lifespan: 14 days (unless pregnancy)',
    'Menopause: follicle depletion → low estrogen, high FSH',
  ],
  pathologies: [
    {
      name: 'Polycystic Ovary Syndrome (PCOS)',
      description: 'Hyperandrogenism with ovulatory dysfunction',
      type: 'other',
      symptoms: ['Irregular periods', 'Hirsutism', 'Acne', 'Infertility', 'Obesity'],
      causes: ['Insulin resistance', 'LH excess', 'Genetic factors'],
      labFindings: ['Elevated androgens', 'LH:FSH ratio >2:1', 'Often insulin resistance'],
      relevantImaging: ['Pelvic ultrasound (polycystic morphology)'],
    },
    {
      name: 'Primary ovarian insufficiency',
      description: 'Premature loss of ovarian function (<40 years)',
      type: 'hypo',
      symptoms: ['Amenorrhea', 'Hot flashes', 'Infertility', 'Vaginal dryness'],
      causes: ['Autoimmune', 'Genetic (Turner syndrome, FMR1)', 'Iatrogenic'],
      labFindings: ['High FSH', 'Low estradiol', 'Low AMH'],
    },
  ],
  relevantLabs: ['FSH', 'LH', 'Estradiol', 'Progesterone', 'AMH', 'Androgens'],
  relevantImaging: ['Pelvic ultrasound'],
  relatedStructures: ['uterus', 'fallopian-tubes', 'broad-ligament'],
});

// ============================================================================
// HORMONES
// ============================================================================

const hormones: Map<string, Hormone> = new Map();

hormones.set('insulin', {
  id: 'insulin',
  name: 'Insulin',
  chemicalClass: 'peptide',
  sourceGland: 'Pancreatic islets',
  sourceCell: 'β cells',
  targetTissues: ['Liver', 'Muscle', 'Adipose tissue', 'Most cells'],
  receptorType: 'cell-surface',
  receptorName: 'Insulin receptor (tyrosine kinase)',
  function: 'Lowers blood glucose, promotes anabolism',
  actions: [
    'Increases glucose uptake (GLUT4) in muscle/adipose',
    'Promotes glycogen synthesis',
    'Inhibits gluconeogenesis',
    'Promotes lipogenesis',
    'Promotes protein synthesis',
    'Inhibits lipolysis and ketogenesis',
  ],
  regulation: {
    stimulatedBy: ['Glucose', 'Amino acids', 'GLP-1', 'GIP', 'Parasympathetic'],
    inhibitedBy: ['Somatostatin', 'Sympathetic (α2 receptors)', 'Hypoglycemia'],
    feedbackType: 'negative',
    feedbackTarget: 'Blood glucose',
  },
  halfLife: '5-6 minutes',
  normalRange: 'Fasting: 2-20 µU/mL',
  explanations: {
    level1: 'Insulin is a hormone that helps sugar get from your blood into your cells for energy.',
    level2: 'Insulin is released when blood sugar rises (after eating) and signals cells to take up glucose, lowering blood sugar. It also promotes storage of energy as glycogen and fat.',
    level3: 'Insulin binds to tyrosine kinase receptors, triggering GLUT4 translocation to the membrane in muscle and adipose. In liver, it promotes glycogen synthesis and inhibits gluconeogenesis. Insulin is the primary anabolic hormone.',
    level4: 'Insulin receptor activation triggers IRS-1/2 phosphorylation → PI3K/Akt pathway → GLUT4 translocation, glycogen synthase activation, and mTOR-mediated protein synthesis. The insulin:glucagon ratio determines hepatic glucose output. Insulin resistance involves defects in this signaling cascade.',
    level5: 'Insulin is synthesized as preproinsulin, processed in ER to proinsulin, then cleaved in secretory granules to insulin + C-peptide. The K-ATP channel (Kir6.2/SUR1) couples glucose metabolism to secretion. First-phase secretion (preformed granules) and second-phase (newly synthesized) have different characteristics. GLP-1 receptor agonists enhance glucose-dependent insulin secretion. SGLT2 inhibitors provide glucose-lowering independent of insulin.',
  },
  keyFacts: [
    'Only hormone that lowers blood glucose',
    'C-peptide co-secreted (marker of endogenous insulin)',
    'Receptor: tyrosine kinase (not GPCR)',
    'Actions: "Fed state" - storage and anabolism',
    'Half-life only 5-6 minutes',
  ],
  excessSyndrome: 'Hypoglycemia (insulinoma, exogenous insulin)',
  deficiencySyndrome: 'Diabetes mellitus',
  clinicalNote: 'C-peptide distinguishes endogenous from exogenous insulin; suppressed in exogenous insulin use',
});

hormones.set('cortisol', {
  id: 'cortisol',
  name: 'Cortisol',
  chemicalClass: 'steroid',
  sourceGland: 'Adrenal cortex',
  sourceCell: 'Zona fasciculata',
  targetTissues: ['Most tissues (ubiquitous GR expression)'],
  receptorType: 'cytoplasmic',
  receptorName: 'Glucocorticoid receptor (GR)',
  function: 'Stress response, metabolism, immune modulation',
  actions: [
    'Increases gluconeogenesis',
    'Promotes protein catabolism',
    'Promotes lipolysis',
    'Anti-inflammatory and immunosuppressive',
    'Permissive effects on catecholamines',
    'Maintains vascular tone',
  ],
  regulation: {
    stimulatedBy: ['ACTH', 'Stress', 'Hypoglycemia', 'Circadian rhythm'],
    inhibitedBy: ['Cortisol (negative feedback on CRH and ACTH)'],
    feedbackType: 'negative',
    feedbackTarget: 'Hypothalamus (CRH) and pituitary (ACTH)',
    hypothalamicFactor: 'CRH',
    tropicHormone: 'ACTH',
  },
  halfLife: '60-90 minutes',
  normalRange: 'AM: 5-25 µg/dL; PM: lower',
  explanations: {
    level1: 'Cortisol is your body\'s main stress hormone, released when you need extra energy.',
    level2: 'Cortisol is released during stress and helps provide energy by releasing glucose. It also reduces inflammation but can cause problems if levels stay high for too long.',
    level3: 'Cortisol is a steroid hormone regulated by the HPA axis (CRH→ACTH→cortisol). It mobilizes energy substrates, has anti-inflammatory effects, and maintains cardiovascular function. Chronic excess causes Cushing syndrome.',
    level4: 'Cortisol binds cytoplasmic GR → translocation to nucleus → gene regulation via glucocorticoid response elements (GREs). It upregulates gluconeogenic enzymes (PEPCK, G6Pase) and annexin-1 (anti-inflammatory). Mineralocorticoid receptor has equal affinity for cortisol; 11β-HSD2 converts cortisol to cortisone in kidney to protect MR from cortisol.',
    level5: 'GR is a nuclear receptor with DNA-binding and ligand-binding domains. Transactivation (GRE binding) and transrepression (NF-κB/AP-1 inhibition) mediate metabolic and anti-inflammatory effects respectively. HPA axis negative feedback occurs at multiple levels including hippocampus. Chronic stress alters HPA axis set point. Circadian variation driven by SCN→PVN→CRH. Critical illness-related corticosteroid insufficiency may warrant replacement in septic shock.',
  },
  keyFacts: [
    'Primary glucocorticoid in humans',
    'Circadian rhythm: highest in morning',
    'Catabolic: breaks down muscle, fat, bone',
    'Anti-inflammatory but immunosuppressive',
    'Excess: Cushing; Deficiency: Addison',
  ],
  excessSyndrome: 'Cushing syndrome',
  deficiencySyndrome: 'Addison disease / Adrenal crisis',
  clinicalNote: 'Stress dose steroids needed for surgery in patients on chronic steroids',
});

hormones.set('thyroid-hormones', {
  id: 'thyroid-hormones',
  name: 'Thyroid Hormones (T3/T4)',
  chemicalClass: 'amine',
  sourceGland: 'Thyroid gland',
  sourceCell: 'Follicular cells',
  targetTissues: ['Most tissues'],
  receptorType: 'nuclear',
  receptorName: 'Thyroid hormone receptor (TRα, TRβ)',
  function: 'Regulate metabolism, growth, and development',
  actions: [
    'Increase basal metabolic rate',
    'Increase heat production',
    'Increase cardiac output',
    'Essential for CNS development',
    'Promote bone growth',
    'Increase β-adrenergic receptor expression',
  ],
  regulation: {
    stimulatedBy: ['TSH', 'Cold exposure'],
    inhibitedBy: ['T3/T4 (negative feedback)', 'Somatostatin', 'Dopamine'],
    feedbackType: 'negative',
    feedbackTarget: 'Hypothalamus (TRH) and pituitary (TSH)',
    hypothalamicFactor: 'TRH',
    tropicHormone: 'TSH',
  },
  halfLife: 'T4: 7 days; T3: 1 day',
  normalRange: 'Free T4: 0.8-1.8 ng/dL; Free T3: 2.3-4.2 pg/mL',
  explanations: {
    level1: 'Thyroid hormones control how fast your body uses energy - your metabolism.',
    level2: 'Thyroid hormones (T3 and T4) are made using iodine and control your metabolism, body temperature, and heart rate. Too much causes hyperthyroidism; too little causes hypothyroidism.',
    level3: 'T4 is the main circulating form; T3 is the active form. TSH from the pituitary stimulates thyroid hormone synthesis. T3 acts on nuclear receptors to increase gene transcription for metabolic enzymes.',
    level4: 'Thyroid hormone synthesis requires iodine uptake (NIS), oxidation (TPO), organification, and coupling (MIT+DIT→T3, DIT+DIT→T4). Peripheral deiodinases (D1, D2, D3) regulate local T3 levels. T3 increases Na⁺/K⁺-ATPase, UCP expression, and β-adrenergic receptors.',
    level5: 'TRs are nuclear receptors that bind thyroid hormone response elements (TREs), usually as heterodimers with RXR. Unliganded TR represses transcription; T3 binding converts to activation. Deiodinase D2 (activating, in CNS/muscle) and D3 (inactivating, in placenta) provide tissue-specific regulation. Thyroid storm is a hypermetabolic emergency requiring beta-blockade, thionamides, iodine (in that order), and glucocorticoids.',
  },
  keyFacts: [
    'T4 is prohormone; T3 is active (5-10x more potent)',
    'Iodine essential for synthesis',
    'T4 half-life 7 days (can miss doses)',
    'TBG (thyroid-binding globulin) carries most in blood',
    'Fetal brain development requires maternal thyroid hormone',
  ],
  excessSyndrome: 'Hyperthyroidism (Graves disease, toxic nodule)',
  deficiencySyndrome: 'Hypothyroidism (Hashimoto, iodine deficiency)',
  clinicalNote: 'Check TSH first; it\'s most sensitive for primary thyroid disorders',
});

// Add more key hormones
const additionalHormones = [
  {
    id: 'pth',
    name: 'Parathyroid Hormone (PTH)',
    chemicalClass: 'peptide' as const,
    sourceGland: 'Parathyroid glands',
    function: 'Increases serum calcium',
    receptorType: 'cell-surface' as const,
  },
  {
    id: 'gh',
    name: 'Growth Hormone (GH)',
    chemicalClass: 'peptide' as const,
    sourceGland: 'Anterior pituitary',
    function: 'Promotes growth, protein synthesis, lipolysis',
    receptorType: 'cell-surface' as const,
  },
  {
    id: 'aldosterone',
    name: 'Aldosterone',
    chemicalClass: 'steroid' as const,
    sourceGland: 'Adrenal cortex (zona glomerulosa)',
    function: 'Sodium retention, potassium excretion',
    receptorType: 'cytoplasmic' as const,
  },
  {
    id: 'adh',
    name: 'ADH (Vasopressin)',
    chemicalClass: 'peptide' as const,
    sourceGland: 'Hypothalamus (released from posterior pituitary)',
    function: 'Water reabsorption in collecting duct',
    receptorType: 'cell-surface' as const,
  },
  {
    id: 'prolactin',
    name: 'Prolactin',
    chemicalClass: 'peptide' as const,
    sourceGland: 'Anterior pituitary',
    function: 'Milk production, reproductive functions',
    receptorType: 'cell-surface' as const,
  },
];

for (const h of additionalHormones) {
  hormones.set(h.id, {
    id: h.id,
    name: h.name,
    chemicalClass: h.chemicalClass,
    sourceGland: h.sourceGland,
    targetTissues: [],
    receptorType: h.receptorType,
    function: h.function,
    actions: [],
    regulation: {
      stimulatedBy: [],
      inhibitedBy: [],
    },
    explanations: {
      level1: `${h.name} - ${h.function}.`,
      level2: `${h.name} is produced by ${h.sourceGland} and functions to ${h.function.toLowerCase()}.`,
      level3: `${h.name} is a ${h.chemicalClass} hormone from ${h.sourceGland}. Primary function: ${h.function}.`,
      level4: `${h.name} (${h.chemicalClass}) - ${h.function}. Acts via ${h.receptorType} receptors.`,
      level5: `Detailed molecular mechanisms of ${h.name} signaling and regulation.`,
    },
    keyFacts: [h.function],
  });
}

// ============================================================================
// ENDOCRINE AXES
// ============================================================================

const endocrineAxes: Map<string, EndocrineAxis> = new Map();

endocrineAxes.set('hpa-axis', {
  id: 'hpa-axis',
  name: 'Hypothalamic-Pituitary-Adrenal (HPA) Axis',
  components: [
    { level: 'hypothalamus', structure: 'Paraventricular nucleus', hormone: 'CRH', action: 'Stimulates ACTH release' },
    { level: 'pituitary', structure: 'Corticotrophs', hormone: 'ACTH', action: 'Stimulates cortisol release' },
    { level: 'target-gland', structure: 'Adrenal cortex', hormone: 'Cortisol', action: 'Stress response, metabolism' },
  ],
  feedbackLoops: [
    { type: 'negative', signal: 'Cortisol', target: 'Hypothalamus', effect: 'Inhibits CRH release' },
    { type: 'negative', signal: 'Cortisol', target: 'Pituitary', effect: 'Inhibits ACTH release' },
  ],
  function: 'Coordinates stress response and metabolic adaptation',
  explanations: {
    level1: 'This system controls your stress hormones.',
    level2: 'The HPA axis is your body\'s stress response system. The brain (hypothalamus) tells the pituitary, which tells the adrenal glands to make cortisol.',
    level3: 'CRH from hypothalamus stimulates ACTH from pituitary, which stimulates cortisol from adrenal cortex. Cortisol feeds back to inhibit both CRH and ACTH (negative feedback).',
    level4: 'Stress activates PVN CRH neurons via multiple inputs (amygdala, brainstem, direct). ACTH has pulsatile secretion with circadian rhythm. Chronic stress can alter HPA set point. Negative feedback occurs at multiple levels including hippocampus.',
    level5: 'CRH binds CRHR1 on corticotrophs, activating Gs→cAMP→POMC transcription and processing to ACTH. ACTH binds MC2R on adrenocortical cells, activating StAR and steroidogenic enzymes. GR-mediated negative feedback involves both genomic (delayed) and non-genomic (rapid) mechanisms. HPA axis dysregulation is implicated in depression, PTSD, and metabolic syndrome.',
  },
  keyFacts: [
    'Primary stress response axis',
    'CRH → ACTH → Cortisol',
    'Negative feedback at hypothalamus and pituitary',
    'Circadian rhythm with morning peak',
    'Chronic stress can alter setpoint',
  ],
  pathologies: [
    {
      name: 'Secondary adrenal insufficiency',
      description: 'ACTH deficiency',
      type: 'hypo',
      symptoms: ['Fatigue', 'Hypotension', 'No hyperpigmentation (unlike Addison)'],
      causes: ['Pituitary tumor', 'Chronic steroid use (suppression)', 'Pituitary surgery'],
    },
  ],
});

endocrineAxes.set('hpt-axis', {
  id: 'hpt-axis',
  name: 'Hypothalamic-Pituitary-Thyroid (HPT) Axis',
  components: [
    { level: 'hypothalamus', structure: 'PVN', hormone: 'TRH', action: 'Stimulates TSH release' },
    { level: 'pituitary', structure: 'Thyrotrophs', hormone: 'TSH', action: 'Stimulates T3/T4 release' },
    { level: 'target-gland', structure: 'Thyroid', hormone: 'T3/T4', action: 'Regulate metabolism' },
  ],
  feedbackLoops: [
    { type: 'negative', signal: 'T3/T4', target: 'Hypothalamus', effect: 'Inhibits TRH release' },
    { type: 'negative', signal: 'T3/T4', target: 'Pituitary', effect: 'Inhibits TSH release' },
  ],
  function: 'Regulates metabolic rate and energy expenditure',
  explanations: {
    level1: 'This system controls your thyroid hormones.',
    level2: 'The HPT axis controls your metabolism. The brain tells the pituitary (TSH), which tells the thyroid to make T3 and T4.',
    level3: 'TRH from hypothalamus stimulates TSH from pituitary, which stimulates T3/T4 from thyroid. T3 is the active form and provides negative feedback.',
    level4: 'TSH has pulsatile and circadian secretion (nocturnal rise). T3 is primarily responsible for negative feedback (pituitary has high D2 expression, converting T4 to T3 locally). Set point can shift in illness (sick euthyroid).',
    level5: 'TSH receptor is a GPCR activating Gs→cAMP pathway. Stimulating antibodies (TSI) in Graves disease are TSH receptor agonists. Type 2 deiodinase in pituitary thyrotrophs provides local T3 for feedback. Non-thyroidal illness (sick euthyroid) shows low T3, variable T4, low-normal TSH due to altered deiodinase activity and cytokine effects.',
  },
  keyFacts: [
    'TRH → TSH → T3/T4',
    'TSH is most sensitive marker of thyroid status',
    'T3 provides primary negative feedback',
    'Sick euthyroid: low T3 in illness',
    'Cold exposure increases TRH',
  ],
});

endocrineAxes.set('hpg-axis', {
  id: 'hpg-axis',
  name: 'Hypothalamic-Pituitary-Gonadal (HPG) Axis',
  components: [
    { level: 'hypothalamus', structure: 'Arcuate nucleus', hormone: 'GnRH', action: 'Stimulates FSH/LH release' },
    { level: 'pituitary', structure: 'Gonadotrophs', hormone: 'FSH/LH', action: 'Stimulates gonadal function' },
    { level: 'target-gland', structure: 'Gonads', hormone: 'Sex steroids/Inhibin', action: 'Reproduction, secondary sex characteristics' },
  ],
  feedbackLoops: [
    { type: 'negative', signal: 'Testosterone/Estrogen', target: 'Hypothalamus/Pituitary', effect: 'Inhibits GnRH and FSH/LH' },
    { type: 'negative', signal: 'Inhibin', target: 'Pituitary', effect: 'Selectively inhibits FSH' },
    { type: 'positive', signal: 'Estrogen (high)', target: 'Pituitary', effect: 'LH surge (ovulation)' },
  ],
  function: 'Regulates reproduction and secondary sex characteristics',
  explanations: {
    level1: 'This system controls your reproductive hormones.',
    level2: 'The HPG axis controls reproduction. The brain releases GnRH, which tells the pituitary to release FSH and LH, which control the ovaries or testes.',
    level3: 'Pulsatile GnRH stimulates FSH and LH. In females, estrogen feedback shifts from negative to positive at mid-cycle, triggering the LH surge and ovulation. Inhibin provides selective negative feedback on FSH.',
    level4: 'GnRH pulsatility is essential: continuous GnRH downregulates receptors (basis for GnRH agonist therapy). Kisspeptin neurons in hypothalamus control GnRH secretion and are inhibited by sex steroids (negative feedback) but activated by high estrogen (positive feedback for LH surge).',
    level5: 'GnRH neurons receive input from kisspeptin/neurokinin B/dynorphin (KNDy) neurons in arcuate nucleus. Sex steroids act on KNDy neurons for negative feedback. AVPV kisspeptin neurons mediate estrogen positive feedback (LH surge). Puberty involves disinhibition of GnRH pulse generator. Hypogonadotropic hypogonadism can result from GnRH or kisspeptin/GPR54 mutations.',
  },
  keyFacts: [
    'GnRH → FSH/LH → Sex steroids',
    'Pulsatile GnRH essential (continuous → downregulation)',
    'Estrogen: negative feedback (usually), positive feedback (LH surge)',
    'Inhibin: selective FSH inhibitor',
    'Puberty: GnRH pulse generator activation',
  ],
});

// ============================================================================
// INDEXES
// ============================================================================

const glandsByType: Map<string, EndocrineGland[]> = new Map();

for (const gland of endocrineGlands.values()) {
  const existing = glandsByType.get(gland.type) || [];
  existing.push(gland);
  glandsByType.set(gland.type, existing);
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Get an endocrine gland by ID
 */
export function getEndocrineGland(id: string): EndocrineGland | undefined {
  return endocrineGlands.get(id);
}

/**
 * Get all endocrine glands
 */
export function getAllEndocrineGlands(): EndocrineGland[] {
  return Array.from(endocrineGlands.values());
}

/**
 * Get endocrine glands by type
 */
export function getEndocrineGlandsByType(type: EndocrineGlandType): EndocrineGland[] {
  return glandsByType.get(type) || [];
}

/**
 * Get a hormone by ID
 */
export function getHormone(id: string): Hormone | undefined {
  return hormones.get(id);
}

/**
 * Get all hormones
 */
export function getAllHormones(): Hormone[] {
  return Array.from(hormones.values());
}

/**
 * Get an endocrine axis by ID
 */
export function getEndocrineAxis(id: string): EndocrineAxis | undefined {
  return endocrineAxes.get(id);
}

/**
 * Get all endocrine axes
 */
export function getAllEndocrineAxes(): EndocrineAxis[] {
  return Array.from(endocrineAxes.values());
}

/**
 * Search endocrine structures
 */
export function searchEndocrine(query: string): (EndocrineGland | Hormone)[] {
  const lowerQuery = query.toLowerCase();
  const results: (EndocrineGland | Hormone)[] = [];

  for (const gland of endocrineGlands.values()) {
    if (gland.name.toLowerCase().includes(lowerQuery)) {
      results.push(gland);
    }
  }

  for (const hormone of hormones.values()) {
    if (
      hormone.name.toLowerCase().includes(lowerQuery) ||
      hormone.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(hormone);
    }
  }

  return results;
}

/**
 * Get explanation at a specific level
 */
export function getEndocrineExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const gland = endocrineGlands.get(id);
  if (gland) return gland.explanations[`level${level}`];

  const hormone = hormones.get(id);
  if (hormone) return hormone.explanations[`level${level}`];

  const axis = endocrineAxes.get(id);
  if (axis) return axis.explanations[`level${level}`];

  return undefined;
}

/**
 * Get endocrine system statistics
 */
export function getEndocrineStatistics(): EndocrineStatistics {
  return {
    totalGlands: endocrineGlands.size,
    totalHormones: hormones.size,
    majorAxes: endocrineAxes.size,
  };
}
