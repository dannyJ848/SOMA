/**
 * Endocrine System Database
 *
 * Comprehensive endocrine system reference covering anatomy, hormone pathways,
 * and clinical conditions with 5 complexity levels:
 *   Level 1 – Child (simple analogies, everyday language)
 *   Level 2 – Patient (basic medical terminology)
 *   Level 3 – Nursing (full terminology, mechanisms)
 *   Level 4 – Med-student (detailed pathophysiology)
 *   Level 5 – Physician (clinical correlations, current evidence)
 *
 * Spanish translations (nameEs) and ICD-11 codes included.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EndocrineDbCategory =
  | 'anatomy'
  | 'hormone-pathway'
  | 'condition'
  | 'physiology';

export type EndocrineSubcategory =
  | 'pituitary'
  | 'thyroid'
  | 'parathyroid'
  | 'adrenal'
  | 'pancreatic-islets'
  | 'gonads'
  | 'pineal'
  | 'hypothalamus'
  | 'hpa-axis'
  | 'raas'
  | 'thyroid-axis'
  | 'glucose-homeostasis'
  | 'growth-axis'
  | 'reproductive-axis';

export interface ComplexityLevels {
  level1: string; // Child
  level2: string; // Patient
  level3: string; // Nursing
  level4: string; // Med-student
  level5: string; // Physician
}

export interface EndocrineEntry {
  id: string;
  name: string;
  nameEs: string;
  category: EndocrineDbCategory;
  subcategory: EndocrineSubcategory;
  icd11: string;                  // ICD-11 code or 'N/A' for normal anatomy/physiology
  description: ComplexityLevels;
  keyFacts: string[];
  clinicalRelevance: string;
  relatedEntries: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function endo(
  id: string,
  name: string,
  nameEs: string,
  category: EndocrineDbCategory,
  subcategory: EndocrineSubcategory,
  icd11: string,
  description: ComplexityLevels,
  keyFacts: string[],
  clinicalRelevance: string,
  relatedEntries: string[],
): EndocrineEntry {
  return {
    id, name, nameEs, category, subcategory, icd11,
    description, keyFacts, clinicalRelevance, relatedEntries,
  };
}

function levels(
  level1: string,
  level2: string,
  level3: string,
  level4: string,
  level5: string,
): ComplexityLevels {
  return { level1, level2, level3, level4, level5 };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ENDOCRINE_ENTRIES: Record<string, EndocrineEntry> = {};

const entries: EndocrineEntry[] = [

  // ==========================================================================
  // ANATOMY — Pituitary
  // ==========================================================================
  endo(
    'pituitary-gland', 'Pituitary Gland', 'Glandula hipofisis',
    'anatomy', 'pituitary', 'N/A',
    levels(
      'A tiny gland at the base of your brain, about the size of a pea, that acts like a boss telling other glands what to do.',
      'The pituitary gland sits in a small bony pocket under the brain and releases hormones that control growth, metabolism, and reproduction. It has two main parts: the anterior (front) and posterior (back) lobes.',
      'The pituitary is housed in the sella turcica of the sphenoid bone. The anterior lobe (adenohypophysis) produces GH, TSH, ACTH, prolactin, LH, and FSH. The posterior lobe (neurohypophysis) stores and releases ADH and oxytocin synthesized in the hypothalamus.',
      'Embryologically, the adenohypophysis derives from Rathke\'s pouch (oral ectoderm) while the neurohypophysis arises from neuroectoderm. Five cell types populate the anterior lobe: somatotrophs (40-50%), lactotrophs (15-25%), corticotrophs (15-20%), gonadotrophs (10-15%), and thyrotrophs (5%). The hypophyseal portal system delivers hypothalamic releasing/inhibiting factors.',
      'Pituitary function is assessed via basal hormone levels, dynamic stimulation tests (insulin tolerance test, CRH stimulation, GnRH stimulation), and MRI with gadolinium for structural evaluation. Pituitary adenomas are classified by the 2017 WHO scheme using transcription factor lineage (PIT-1, T-PIT, SF-1). Hypophysitis, including ICI-induced forms, is increasingly recognized.'
    ),
    [
      'Often called the "master gland" of the endocrine system',
      'Weighs approximately 0.5 g and measures about 12 mm transversely',
      'Connected to hypothalamus via the infundibulum (pituitary stalk)',
      'Blood supply: superior and inferior hypophyseal arteries',
      'The portal system allows hypothalamic hormones to reach the anterior pituitary directly'
    ],
    'Pituitary adenomas are the most common sellar mass. Prolactinomas are the most frequent functional adenomas. Panhypopituitarism requires lifelong multi-hormone replacement.',
    ['hypothalamus', 'anterior-pituitary', 'posterior-pituitary', 'hpa-axis', 'thyroid-axis']
  ),

  endo(
    'anterior-pituitary', 'Anterior Pituitary', 'Hipofisis anterior',
    'anatomy', 'pituitary', 'N/A',
    levels(
      'The front part of the pituitary gland that makes six important hormones, including growth hormone and hormones that control your thyroid and adrenal glands.',
      'The anterior pituitary produces hormones that regulate growth (GH), thyroid function (TSH), adrenal function (ACTH), breast milk (prolactin), and reproduction (LH, FSH). It responds to signals from the hypothalamus.',
      'The adenohypophysis contains acidophilic cells (somatotrophs producing GH, lactotrophs producing prolactin) and basophilic cells (corticotrophs producing ACTH, thyrotrophs producing TSH, gonadotrophs producing LH/FSH). Secretion is regulated by hypothalamic releasing and inhibiting hormones delivered via the hypophyseal portal system.',
      'Anterior pituitary hormones are secreted in pulsatile patterns. GH secretion peaks during slow-wave sleep and is stimulated by GHRH and inhibited by somatostatin. ACTH follows a circadian rhythm peaking at 6-8 AM. Prolactin is uniquely under tonic inhibition by dopamine. Gonadotropins show pulsatile release governed by GnRH pulse frequency—fast pulses favor LH, slow pulses favor FSH.',
      'Anterior pituitary reserve is assessed with combined pituitary function testing. The insulin tolerance test (ITT) remains the gold standard for GH and ACTH reserve. Macroadenomas (>10 mm) may cause mass effect including bitemporal hemianopia from optic chiasm compression. Transsphenoidal surgery is the approach for most pituitary adenomas; medical therapy with cabergoline is first-line for prolactinomas.'
    ),
    [
      'Comprises ~80% of total pituitary mass',
      'Derived from oral ectoderm (Rathke\'s pouch)',
      'Somatotrophs are the most abundant cell type (40-50%)',
      'Prolactin is the only hormone under tonic inhibition',
      'PIT-1 transcription factor governs GH, prolactin, and TSH lineages'
    ],
    'Prolactinomas (40% of all pituitary adenomas) are treated with dopamine agonists. Non-functioning adenomas present with mass effect and hypopituitarism. Apoplexy is a surgical emergency.',
    ['pituitary-gland', 'posterior-pituitary', 'hypothalamus', 'hpa-axis']
  ),

  endo(
    'posterior-pituitary', 'Posterior Pituitary', 'Hipofisis posterior',
    'anatomy', 'pituitary', 'N/A',
    levels(
      'The back part of the pituitary gland that releases two hormones: one that helps your body hold onto water and one that helps mothers during childbirth and breastfeeding.',
      'The posterior pituitary stores and releases ADH (antidiuretic hormone), which controls water balance, and oxytocin, which triggers uterine contractions and milk ejection. These hormones are actually made in the hypothalamus.',
      'The neurohypophysis does not synthesize hormones. ADH (vasopressin) and oxytocin are produced by magnocellular neurons of the supraoptic and paraventricular nuclei, transported axonally, and stored in Herring bodies until released. ADH acts on V2 receptors in renal collecting ducts to insert aquaporin-2 channels.',
      'ADH release is triggered by increased plasma osmolality (sensed by hypothalamic osmoreceptors, threshold ~280 mOsm/kg) and decreased effective circulating volume (via baroreceptors). Oxytocin release follows a positive feedback loop (Ferguson reflex) during parturition. Both hormones are nonapeptides differing by only two amino acids.',
      'Central diabetes insipidus results from impaired ADH production/release and is treated with desmopressin (DDAVP). SIADH produces dilutional hyponatremia from excess ADH. Differential diagnosis between central DI, nephrogenic DI, and primary polydipsia uses water deprivation testing with copeptin measurement as an emerging alternative. Post-surgical DI following transsphenoidal surgery may be transient or permanent.'
    ),
    [
      'Derived from neuroectoderm (diencephalon)',
      'Contains axon terminals of hypothalamic neurons, not endocrine cells',
      'Herring bodies are axonal swellings storing neurosecretory granules',
      'ADH half-life is approximately 15-20 minutes',
      'Oxytocin also plays roles in social bonding and trust'
    ],
    'Central diabetes insipidus presents with polyuria and polydipsia; serum osmolality is elevated with inappropriately dilute urine. SIADH is a common cause of euvolemic hyponatremia in hospitalized patients.',
    ['pituitary-gland', 'anterior-pituitary', 'hypothalamus']
  ),

  // ==========================================================================
  // ANATOMY — Thyroid
  // ==========================================================================
  endo(
    'thyroid-gland', 'Thyroid Gland', 'Glandula tiroides',
    'anatomy', 'thyroid', 'N/A',
    levels(
      'A butterfly-shaped gland in the front of your neck that controls how fast your body uses energy, like a thermostat for your metabolism.',
      'The thyroid gland produces hormones (T3 and T4) that regulate your metabolism, heart rate, body temperature, and energy levels. It also produces calcitonin, which helps regulate calcium. Problems can cause it to be overactive or underactive.',
      'The thyroid gland weighs 15-20 g and consists of two lobes connected by an isthmus at the level of the 2nd-3rd tracheal rings. Histologically, follicles lined by cuboidal epithelium contain colloid (thyroglobulin). Parafollicular C cells produce calcitonin. Blood supply is from the superior thyroid artery (external carotid) and inferior thyroid artery (thyrocervical trunk).',
      'Thyroid hormone synthesis involves iodide trapping by NIS (sodium-iodide symporter), organification by TPO (thyroid peroxidase), coupling of MIT and DIT residues on thyroglobulin, and proteolytic release of T4 (90%) and T3 (10%). T4 is converted to active T3 peripherally by deiodinases (D1, D2). The recurrent laryngeal nerves run posterior to the gland in the tracheoesophageal groove.',
      'Surgical anatomy requires identification of the recurrent laryngeal nerve and parathyroid glands to prevent iatrogenic injury. Intraoperative nerve monitoring (IONM) is increasingly standard. Thyroid nodule evaluation follows ACR TI-RADS classification. Molecular testing (Afirma GSC, ThyroSeq v3) refines indeterminate FNA results. Lenvatinib and sorafenib are approved for radioiodine-refractory differentiated thyroid cancer.'
    ),
    [
      'Largest pure endocrine gland in the body',
      'Requires dietary iodine (150 mcg/day for adults)',
      'T4:T3 production ratio is approximately 14:1',
      'Recurrent laryngeal nerve innervates all intrinsic laryngeal muscles except cricothyroid',
      'Pyramidal lobe is present in ~50% of individuals (thyroglossal duct remnant)'
    ],
    'Thyroid nodules are found in up to 50% of adults by ultrasound; 5-15% are malignant. Papillary thyroid carcinoma has >98% 10-year survival. Graves disease is the most common cause of hyperthyroidism.',
    ['thyroid-axis', 'parathyroid-glands', 'anterior-pituitary']
  ),

  // ==========================================================================
  // ANATOMY — Parathyroids
  // ==========================================================================
  endo(
    'parathyroid-glands', 'Parathyroid Glands', 'Glandulas paratiroides',
    'anatomy', 'parathyroid', 'N/A',
    levels(
      'Four tiny glands behind your thyroid that control calcium levels in your blood—calcium is important for your bones, muscles, and nerves.',
      'The four parathyroid glands make parathyroid hormone (PTH), which raises blood calcium when levels drop. PTH acts on bones and kidneys. Problems can lead to too much or too little calcium.',
      'Parathyroid glands (4, occasionally 3-6) are located on the posterior surface of the thyroid lobes, typically two superior and two inferior. Chief cells secrete PTH in response to low ionized calcium sensed by the calcium-sensing receptor (CaSR). PTH increases bone resorption, renal calcium reabsorption, and 1,25-dihydroxyvitamin D synthesis.',
      'PTH is an 84-amino acid polypeptide; the N-terminal 1-34 fragment is biologically active. Signaling occurs via PTH1R (G-protein coupled receptor activating cAMP/PKA and PLC/PKC pathways). PTH promotes osteoclastogenesis via RANKL upregulation on osteoblasts. In the kidney, PTH stimulates 1-alpha-hydroxylase converting 25(OH)D to 1,25(OH)2D, inhibits NaPi-IIa (phosphate wasting), and enhances distal tubular calcium reabsorption.',
      'Primary hyperparathyroidism (single adenoma 85%, hyperplasia 10-15%, carcinoma <1%) is diagnosed by elevated calcium with inappropriately non-suppressed PTH. Surgical criteria follow the 2022 Updated Guidelines. Four-dimensional CT and sestamibi-SPECT/CT localize adenomas preoperatively. Intraoperative PTH monitoring (Miami criterion: >50% drop at 10 min) confirms adequate resection. Cinacalcet is an option for non-surgical candidates. Hypoparathyroidism management now includes recombinant PTH (1-84).'
    ),
    [
      'Each gland weighs approximately 30-50 mg',
      'Superior glands derive from 4th pharyngeal pouch (more consistent location)',
      'Inferior glands derive from 3rd pharyngeal pouch (variable location)',
      'PTH half-life is 2-4 minutes',
      'Calcium-sensing receptor mutations cause familial hypocalciuric hypercalcemia'
    ],
    'Inadvertent parathyroid removal during thyroidectomy is a leading cause of postoperative hypocalcemia. Primary hyperparathyroidism is the most common cause of hypercalcemia in outpatients; malignancy is most common in inpatients.',
    ['thyroid-gland', 'adrenal-glands']
  ),

  // ==========================================================================
  // ANATOMY — Adrenals
  // ==========================================================================
  endo(
    'adrenal-glands', 'Adrenal Glands', 'Glandulas suprarrenales',
    'anatomy', 'adrenal', '5A00',
    levels(
      'Two small glands that sit on top of your kidneys like little hats. They make hormones that help you deal with stress and control blood pressure.',
      'The adrenal glands have two parts: the outer cortex makes cortisol (stress hormone), aldosterone (blood pressure), and androgens; the inner medulla makes adrenaline (epinephrine) for fight-or-flight responses.',
      'The adrenal cortex has three zones: zona glomerulosa (aldosterone, regulated by RAAS and potassium), zona fasciculata (cortisol, regulated by ACTH), and zona reticularis (DHEA/DHEA-S, regulated by ACTH). The medulla contains chromaffin cells producing epinephrine (80%) and norepinephrine (20%) from tyrosine via catecholamine synthesis pathway.',
      'Cortisol synthesis follows the pathway: cholesterol → pregnenolone → 17-OH-pregnenolone → 17-OH-progesterone → 11-deoxycortisol → cortisol, involving CYP11A1 (side-chain cleavage), CYP17A1, CYP21A2, and CYP11B1. Aldosterone synthesis uses CYP11B2 (aldosterone synthase) in the glomerulosa. Congenital adrenal hyperplasia results from enzyme deficiencies (21-hydroxylase deficiency accounts for 95%).',
      'Adrenal incidentalomas (found in 4-5% of abdominal CTs) require biochemical workup for cortisol autonomy (1 mg DST), pheochromocytoma (plasma metanephrines), and primary aldosteronism (aldosterone/renin ratio). European guidelines recommend cortisol co-secretion assessment. Adrenal venous sampling is the gold standard for lateralizing aldosterone-producing adenomas. Adrenalectomy is preferred for functioning tumors >4 cm or imaging features suggesting carcinoma.'
    ),
    [
      'Each adrenal weighs approximately 4-5 g',
      'Right adrenal drains directly into IVC; left drains into left renal vein',
      'Fetal adrenal cortex (fetal zone) is large and produces DHEA-S for placental estrogen synthesis',
      'Cortisol has a diurnal rhythm with peak at 6-8 AM',
      'Mnemonic: GFR = Glomerulosa (salt), Fasciculata (sugar), Reticularis (sex)'
    ],
    'Adrenal crisis (acute adrenal insufficiency) is life-threatening and requires immediate IV hydrocortisone. Pheochromocytoma must be ruled out before any adrenal surgery to prevent catecholamine crisis.',
    ['hpa-axis', 'raas', 'pituitary-gland']
  ),

  // ==========================================================================
  // ANATOMY — Pancreatic Islets
  // ==========================================================================
  endo(
    'pancreatic-islets', 'Pancreatic Islets of Langerhans', 'Islotes pancreaticos de Langerhans',
    'anatomy', 'pancreatic-islets', 'N/A',
    levels(
      'Tiny clusters of special cells inside your pancreas that make insulin and glucagon—hormones that control your blood sugar like a thermostat.',
      'The islets of Langerhans are scattered throughout the pancreas and contain cells that produce insulin (lowers blood sugar) and glucagon (raises blood sugar). Diabetes occurs when these cells do not work properly.',
      'Approximately 1-2 million islets comprise 1-2% of pancreatic mass. Beta cells (60-80%) secrete insulin, alpha cells (15-20%) secrete glucagon, delta cells (5-10%) secrete somatostatin, PP cells secrete pancreatic polypeptide, and epsilon cells secrete ghrelin. Islets are highly vascularized with a portal-like blood flow pattern.',
      'Glucose-stimulated insulin secretion involves GLUT2-mediated glucose uptake, glucokinase-driven metabolism increasing the ATP/ADP ratio, KATP channel closure, membrane depolarization, voltage-gated calcium channel opening, and calcium-dependent exocytosis of insulin granules. Biphasic secretion: first phase (stored granules, 5-10 min) and second phase (newly synthesized). Incretins (GLP-1, GIP) amplify glucose-stimulated secretion via cAMP/PKA.',
      'C-peptide measurement distinguishes endogenous from exogenous insulin (equimolar secretion with proinsulin cleavage). Islet autoantibodies (GAD65, IA-2, ZnT8, IAA) predict T1DM development. Teplizumab (anti-CD3) delays T1DM onset by a median of 2 years in at-risk individuals. Islet cell transplantation (Edmonton protocol) remains an option for select T1DM patients with severe hypoglycemia unawareness. Beta-cell mass is reduced ~50% at T2DM diagnosis due to amyloid deposition and apoptosis.'
    ),
    [
      'Named after Paul Langerhans who described them in 1869',
      'Beta cells are concentrated in the islet core, alpha cells in the periphery',
      'Islets receive 10-15% of pancreatic blood flow despite being 1-2% of mass',
      'Insulin and C-peptide are released in equimolar amounts',
      'Amylin (IAPP) is co-secreted with insulin from beta cells'
    ],
    'Type 1 diabetes results from autoimmune beta-cell destruction. Type 2 diabetes involves progressive beta-cell failure superimposed on insulin resistance. Insulinomas are rare neuroendocrine tumors causing hypoglycemia.',
    ['glucose-homeostasis', 'adrenal-glands']
  ),

  // ==========================================================================
  // ANATOMY — Gonads
  // ==========================================================================
  endo(
    'gonads-endocrine', 'Gonads (Endocrine Function)', 'Gonadas (funcion endocrina)',
    'anatomy', 'gonads', 'N/A',
    levels(
      'The testes in boys and ovaries in girls make hormones that cause puberty and help people have babies when they grow up.',
      'The ovaries produce estrogen and progesterone, which regulate menstrual cycles and pregnancy. The testes produce testosterone, which controls male characteristics and sperm production. These hormones are controlled by LH and FSH from the pituitary gland.',
      'Testicular Leydig cells produce testosterone in response to LH. Sertoli cells support spermatogenesis and produce inhibin B (negative feedback on FSH). Ovarian theca cells produce androgens (LH-dependent) that granulosa cells aromatize to estrogens (FSH-dependent): the two-cell, two-gonadotropin model. The corpus luteum produces progesterone to maintain early pregnancy.',
      'Testosterone is converted to the more potent dihydrotestosterone (DHT) by 5-alpha reductase (types 1 and 2) in target tissues. Estradiol (E2) is the primary circulating estrogen in premenopausal women. Aromatase (CYP19A1) converts androgens to estrogens. GnRH pulsatility is critical: pulsatile GnRH stimulates gonadotropin release while continuous GnRH suppresses it (basis for GnRH agonist therapy).',
      'Hypogonadism is classified as primary (elevated LH/FSH) or secondary/central (low/inappropriately normal LH/FSH). Klinefelter syndrome (47,XXY) is the most common cause of primary male hypogonadism. Turner syndrome (45,X) is the most common cause of primary female hypogonadism. PCOS affects 6-12% of reproductive-age women. Anti-Mullerian hormone (AMH) assesses ovarian reserve. Testosterone replacement requires monitoring of hematocrit, PSA, and lipids.'
    ),
    [
      'Testosterone is produced at ~5-7 mg/day in adult males',
      'Estradiol levels vary dramatically across the menstrual cycle',
      'Inhibin B from Sertoli cells provides selective negative feedback on FSH',
      'Sex hormone-binding globulin (SHBG) modulates free testosterone availability',
      'GnRH agonists paradoxically suppress gonadotropins when given continuously'
    ],
    'PCOS is the leading cause of anovulatory infertility. Male hypogonadism evaluation requires two morning total testosterone levels. Exogenous testosterone suppresses spermatogenesis and should not be used for male fertility.',
    ['anterior-pituitary', 'reproductive-axis']
  ),

  // ==========================================================================
  // ANATOMY — Pineal
  // ==========================================================================
  endo(
    'pineal-gland', 'Pineal Gland', 'Glandula pineal',
    'anatomy', 'pineal', 'N/A',
    levels(
      'A tiny gland deep in your brain that makes melatonin, the hormone that helps you feel sleepy when it gets dark.',
      'The pineal gland produces melatonin based on light exposure. Melatonin levels rise at night and help regulate your sleep-wake cycle (circadian rhythm). It can also affect puberty timing.',
      'The pineal gland (epithalamus) is a midline structure posterior to the third ventricle. Pinealocytes synthesize melatonin from serotonin via N-acetyltransferase (rate-limiting) and HIOMT. Light information travels from the retina to the suprachiasmatic nucleus (SCN) to the superior cervical ganglion, which provides sympathetic innervation to the pineal via norepinephrine/beta-1 receptors.',
      'Melatonin (N-acetyl-5-methoxytryptamine) synthesis follows: tryptophan → 5-HTP → serotonin → N-acetylserotonin → melatonin. The SCN acts as the master circadian clock via clock genes (CLOCK, BMAL1, PER, CRY). Melatonin acts on MT1 and MT2 receptors in the SCN to reinforce circadian rhythms. It also has immunomodulatory and antioxidant properties. Pineal calcification ("brain sand") increases with age and is a useful radiological landmark.',
      'Exogenous melatonin (0.5-5 mg) is effective for circadian rhythm disorders (delayed sleep-wake phase, jet lag, shift work). Ramelteon and tasimelteon are selective melatonin receptor agonists. Pineal tumors (germinomas, pineocytomas, pineoblastomas) may present with Parinaud syndrome (dorsal midbrain syndrome) from tectal compression or precocious puberty (from beta-hCG secretion by germinomas or loss of melatonin\'s inhibitory effect). MRI with CSF markers (AFP, beta-hCG) aids diagnosis.'
    ),
    [
      'Melatonin secretion peaks between 2-4 AM',
      'Light exposure suppresses melatonin synthesis',
      'The pineal is one of the most highly vascularized structures in the brain',
      'Descartes called it the "seat of the soul"',
      'Pineal calcification is visible on CT by age 10 in many individuals'
    ],
    'Pineal tumors in children may present with precocious puberty or obstructive hydrocephalus. Melatonin supplementation is widely used for insomnia but has limited evidence for long-term use.',
    ['hypothalamus']
  ),

  // ==========================================================================
  // ANATOMY — Hypothalamus
  // ==========================================================================
  endo(
    'hypothalamus', 'Hypothalamus', 'Hipotalamo',
    'anatomy', 'hypothalamus', 'N/A',
    levels(
      'A small part of your brain that acts as the command center, controlling hunger, thirst, body temperature, and telling the pituitary gland what to do.',
      'The hypothalamus links the nervous system to the endocrine system. It produces releasing and inhibiting hormones that control the pituitary gland. It also directly regulates body temperature, hunger, thirst, sleep, and emotional responses.',
      'The hypothalamus contains multiple nuclei: the supraoptic and paraventricular nuclei produce ADH and oxytocin; the arcuate nucleus produces GHRH, dopamine, and GnRH; the ventromedial nucleus regulates satiety; the lateral hypothalamus controls hunger. Releasing hormones (CRH, TRH, GHRH, GnRH) and inhibiting hormones (somatostatin, dopamine) regulate anterior pituitary secretion via the portal system.',
      'Hypothalamic hormones and their targets: CRH → ACTH; TRH → TSH and prolactin; GHRH → GH; GnRH → LH/FSH; somatostatin → GH and TSH inhibition; dopamine → prolactin inhibition. Kisspeptin neurons in the arcuate and AVPV nuclei are the master regulators of GnRH pulsatility, integrating metabolic (leptin) and reproductive signals. The median eminence is a circumventricular organ allowing hypothalamic hormones to access portal blood.',
      'Hypothalamic dysfunction can be congenital (Kallmann syndrome with anosmia due to KAL1/FGFR1 mutations, septo-optic dysplasia) or acquired (tumors such as craniopharyngioma, infiltrative diseases like sarcoidosis/Langerhans cell histiocytosis, radiation, trauma). Functional hypothalamic amenorrhea results from energy deficit, stress, or excessive exercise. Hypothalamic obesity following craniopharyngioma surgery is notoriously refractory to treatment.'
    ),
    [
      'Weighs only about 4 g despite its critical functions',
      'The median eminence is the neurohemal interface for releasing hormones',
      'Contains the suprachiasmatic nucleus—the master circadian pacemaker',
      'Kisspeptin is the gatekeeper of puberty and reproductive function',
      'Leptin resistance in the hypothalamus contributes to obesity pathophysiology'
    ],
    'Craniopharyngiomas are the most common suprasellar tumors in children and may cause panhypopituitarism, visual deficits, and hypothalamic obesity. Functional hypothalamic amenorrhea is a diagnosis of exclusion.',
    ['pituitary-gland', 'anterior-pituitary', 'posterior-pituitary', 'hpa-axis']
  ),

  // ==========================================================================
  // HORMONE PATHWAYS — HPA Axis
  // ==========================================================================
  endo(
    'hpa-axis', 'Hypothalamic-Pituitary-Adrenal (HPA) Axis', 'Eje hipotalamo-hipofisis-suprarrenal (HHA)',
    'hormone-pathway', 'hpa-axis', '5A70',
    levels(
      'A communication chain from your brain to glands near your kidneys that helps your body respond to stress by making cortisol, a hormone that gives you energy and controls inflammation.',
      'When you are stressed, the hypothalamus tells the pituitary, which tells the adrenal glands to make cortisol. Cortisol helps manage stress, inflammation, and blood sugar. Too much or too little cortisol causes serious health problems.',
      'CRH from the hypothalamus stimulates ACTH release from anterior pituitary corticotrophs. ACTH stimulates cortisol production in the adrenal zona fasciculata. Cortisol exerts negative feedback at both the hypothalamic and pituitary levels. The axis follows a circadian rhythm (peak cortisol at 6-8 AM, nadir at midnight) and is activated by physical/psychological stress.',
      'CRH binds CRHR1 on corticotrophs, activating cAMP/PKA leading to POMC gene transcription. POMC is cleaved to ACTH, beta-LPH, beta-endorphin, and alpha-MSH. ACTH binds MC2R on adrenocortical cells, activating StAR protein for cholesterol transport into mitochondria (rate-limiting step). Cortisol binds glucocorticoid receptors (GR) acting as transcription factors. 11-beta-HSD2 in the kidney converts cortisol to inactive cortisone, protecting mineralocorticoid receptors.',
      'Cushing syndrome workup: 24h urine free cortisol, late-night salivary cortisol, 1 mg overnight dexamethasone suppression test (at least 2 positive). ACTH-dependent (Cushing disease, ectopic ACTH) vs. ACTH-independent (adrenal adenoma/carcinoma). High-dose DST and inferior petrosal sinus sampling differentiate Cushing disease from ectopic ACTH. Adrenal insufficiency is confirmed by early morning cortisol <3 mcg/dL or ACTH stimulation test (250 mcg cosyntropin, 60 min cortisol <18 mcg/dL). Chronic exogenous glucocorticoid use is the most common cause of HPA axis suppression.'
    ),
    [
      'CRH is a 41-amino acid peptide discovered by Wylie Vale in 1981',
      'ACTH follows a circadian pattern with peak at 6-8 AM',
      'Cortisol half-life is approximately 60-90 minutes',
      'Negative feedback occurs at both hypothalamic and pituitary levels',
      'Chronic stress can lead to HPA axis dysregulation'
    ],
    'Cushing syndrome increases cardiovascular mortality 4-fold. Adrenal crisis mortality is 0.5/100 patient-years despite education. Glucocorticoid withdrawal must be tapered to avoid crisis. Stress-dose steroids (hydrocortisone 50-100 mg IV) are essential during acute illness in adrenal-insufficient patients.',
    ['hypothalamus', 'anterior-pituitary', 'adrenal-glands']
  ),

  // ==========================================================================
  // HORMONE PATHWAYS — RAAS
  // ==========================================================================
  endo(
    'raas', 'Renin-Angiotensin-Aldosterone System (RAAS)', 'Sistema renina-angiotensina-aldosterona (SRAA)',
    'hormone-pathway', 'raas', '5A71',
    levels(
      'A system that works like a relay team to control your blood pressure and keep the right amount of salt and water in your body.',
      'When blood pressure drops, the kidneys release renin, which starts a chain reaction that eventually produces aldosterone. Aldosterone tells the kidneys to hold onto salt and water, raising blood pressure back to normal. Many blood pressure medications work by blocking this system.',
      'Renin (juxtaglomerular cells) cleaves angiotensinogen (liver) to angiotensin I. ACE (pulmonary endothelium) converts angiotensin I to angiotensin II. Angiotensin II causes vasoconstriction, stimulates aldosterone secretion from zona glomerulosa, promotes ADH release, and stimulates thirst. Aldosterone acts on epithelial sodium channels (ENaC) in the distal nephron to increase sodium reabsorption and potassium excretion.',
      'Renin release is stimulated by decreased renal perfusion pressure (baroreceptor mechanism), decreased sodium delivery to macula densa (tubuloglomerular feedback), and sympathetic activation (beta-1 adrenergic). Angiotensin II signals via AT1 receptors (vasoconstriction, aldosterone, growth) and AT2 receptors (vasodilation, anti-proliferation). Aldosterone binds mineralocorticoid receptors, inducing SGK1 which activates ENaC and ROMK channels. Non-classical effects of aldosterone include cardiac fibrosis and vascular inflammation.',
      'Primary aldosteronism (Conn syndrome) affects 5-10% of hypertensive patients—screening with aldosterone/renin ratio (ARR) is recommended for resistant hypertension, hypokalemia, or adrenal incidentaloma. Confirmatory testing: oral sodium loading, saline infusion test, or fludrocortisone suppression test. Adrenal venous sampling (AVS) lateralizes unilateral disease for adrenalectomy. MRA (spironolactone, eplerenone) is first-line for bilateral disease. ACEi/ARBs reduce mortality in heart failure and diabetic nephropathy by opposing RAAS overactivation.'
    ),
    [
      'Renin has a half-life of 10-20 minutes',
      'ACE also degrades bradykinin (explains ACEi cough)',
      'Angiotensin II is the most potent endogenous vasoconstrictor',
      'Aldosterone also promotes potassium and hydrogen ion excretion',
      'The kidney produces 90% of circulating renin'
    ],
    'RAAS overactivation contributes to heart failure, hypertension, and CKD progression. Primary aldosteronism is the most common cause of secondary hypertension. ACEi/ARBs are renoprotective in diabetic nephropathy.',
    ['adrenal-glands', 'glucose-homeostasis']
  ),

  // ==========================================================================
  // HORMONE PATHWAYS — Thyroid Axis
  // ==========================================================================
  endo(
    'thyroid-axis', 'Hypothalamic-Pituitary-Thyroid (HPT) Axis', 'Eje hipotalamo-hipofisis-tiroideo (HHT)',
    'hormone-pathway', 'thyroid-axis', '5A00',
    levels(
      'A communication chain from your brain to your thyroid gland that controls how fast your body burns energy—like adjusting the speed of an engine.',
      'The hypothalamus releases TRH, which tells the pituitary to release TSH, which tells the thyroid to make T3 and T4 hormones. These hormones control your metabolism. When levels are high enough, they signal back to slow down production.',
      'TRH (hypothalamus) stimulates TSH release from thyrotrophs. TSH binds the TSH receptor (TSHR) on thyroid follicular cells, activating cAMP-mediated iodide uptake, thyroglobulin synthesis, and hormone secretion. T4 (prohormone) is deiodinated to T3 (active) by type 1 and type 2 deiodinases. T3 provides negative feedback at the pituitary and hypothalamus. TSH has a log-linear relationship with free T4.',
      'Thyroid hormone receptors (TR-alpha1, TR-beta1, TR-beta2) are nuclear receptors that bind thyroid response elements (TREs) as heterodimers with RXR. TR-beta2 in the pituitary mediates TSH suppression. Wolff-Chaikoff effect: excess iodide transiently inhibits organification. Jod-Basedow phenomenon: excess iodide causes thyrotoxicosis in iodine-deficient glands with autonomous nodules. Sick euthyroid syndrome (nonthyroidal illness): decreased T3, variable T4, and inappropriately normal/low TSH in critical illness.',
      'TSH is the most sensitive screening test for thyroid dysfunction due to the log-linear relationship (a 2-fold change in free T4 produces a 100-fold change in TSH). Subclinical hypothyroidism (elevated TSH, normal free T4): treat if TSH >10 or symptoms with TSH >4.5-7. Central hypothyroidism (low/normal TSH with low free T4) is diagnosed by free T4, not TSH. Thyroid storm is treated with PTU (blocks synthesis + peripheral conversion), beta-blockers, glucocorticoids, iodine (after PTU loading), and cholestyramine. Amiodarone-induced thyrotoxicosis: Type 1 (iodine-mediated) vs. Type 2 (destructive thyroiditis).'
    ),
    [
      'TSH is released in a pulsatile and circadian pattern (peak at night)',
      'T4 half-life is 6-7 days; T3 half-life is approximately 1 day',
      'Only 0.03% of T4 and 0.3% of T3 circulates in free (unbound) form',
      'Thyroid-binding globulin (TBG) carries ~70% of circulating thyroid hormone',
      'The log-linear TSH-T4 relationship means small T4 changes cause large TSH shifts'
    ],
    'TSH is the single best screening test for thyroid dysfunction. Levothyroxine is one of the most prescribed medications worldwide. Thyroid storm carries 10-30% mortality and requires aggressive multi-modal treatment.',
    ['thyroid-gland', 'hypothalamus', 'anterior-pituitary']
  ),

  // ==========================================================================
  // HORMONE PATHWAYS — Glucose Homeostasis
  // ==========================================================================
  endo(
    'glucose-homeostasis', 'Glucose Homeostasis', 'Homeostasis de la glucosa',
    'hormone-pathway', 'glucose-homeostasis', 'N/A',
    levels(
      'Your body keeps blood sugar at just the right level—like Goldilocks, not too high and not too low. Insulin lowers sugar after you eat, and glucagon raises it when you have not eaten.',
      'After eating, your pancreas releases insulin to move sugar from your blood into cells for energy. Between meals, glucagon raises blood sugar by releasing stored sugar from the liver. Diabetes occurs when this balance is disrupted.',
      'Insulin promotes glucose uptake in muscle/adipose (GLUT4), glycogenesis, lipogenesis, and protein synthesis while inhibiting gluconeogenesis and glycogenolysis. Glucagon stimulates hepatic glycogenolysis and gluconeogenesis. Additional hormones affect glucose: cortisol, GH, epinephrine (counter-regulatory, raise glucose), and incretins GLP-1/GIP (augment insulin secretion after meals). Normal fasting glucose: 70-100 mg/dL.',
      'Insulin receptor is a tyrosine kinase receptor; binding activates IRS-1/2 → PI3K → AKT → GLUT4 translocation and glycogen synthase activation. Glucagon receptor activates Gs → cAMP → PKA → glycogen phosphorylase activation and PEPCK/G6Pase induction for gluconeogenesis. The incretin effect accounts for 50-70% of postprandial insulin secretion. GLP-1 also suppresses glucagon, slows gastric emptying, and promotes satiety.',
      'Continuous glucose monitoring (CGM) metrics include time in range (TIR 70-180 mg/dL; target >70%), time below range (<4%), and glucose management indicator (GMI). Closed-loop ("artificial pancreas") systems automate insulin delivery based on CGM data. SGLT2 inhibitors provide cardiorenal benefits independent of glucose lowering (EMPA-REG, DAPA-CKD, CREDENCE trials). GLP-1 RAs reduce MACE and promote weight loss (LEADER, SUSTAIN-6). Dual GIP/GLP-1 agonists (tirzepatide) show superior A1c reduction and weight loss vs. semaglutide (SURPASS trials).'
    ),
    [
      'The brain consumes ~120 g of glucose per day',
      'Hepatic glycogen stores provide approximately 12-18 hours of glucose during fasting',
      'Insulin is the only hormone that lowers blood glucose',
      'Multiple counter-regulatory hormones can raise blood glucose',
      'The incretin effect is diminished in type 2 diabetes'
    ],
    'Severe hypoglycemia (<54 mg/dL) is a medical emergency requiring glucose or glucagon. HbA1c reflects 2-3 month average glucose. Target A1c <7% for most adults with diabetes but individualize for elderly and comorbid patients.',
    ['pancreatic-islets', 'adrenal-glands', 'hpa-axis']
  ),

  // ==========================================================================
  // HORMONE PATHWAYS — Growth Axis
  // ==========================================================================
  endo(
    'growth-axis', 'Growth Hormone Axis', 'Eje de la hormona de crecimiento',
    'hormone-pathway', 'growth-axis', 'N/A',
    levels(
      'A system in your body that controls how tall you grow. Growth hormone is released mainly while you sleep and tells your bones and muscles to grow.',
      'The pituitary gland makes growth hormone (GH), which is released mostly during deep sleep. GH acts through the liver to produce IGF-1, which stimulates bone and tissue growth. Too much GH causes gigantism in children or acromegaly in adults; too little causes short stature.',
      'GHRH and ghrelin stimulate GH release; somatostatin inhibits it. GH has direct (lipolytic, diabetogenic) and indirect effects (via hepatic IGF-1 production). IGF-1 mediates most growth-promoting effects and provides negative feedback. GH is secreted in pulsatile bursts, with the largest pulse during slow-wave sleep. GH secretion declines with age ("somatopause").',
      'GH receptor is a cytokine receptor signaling via JAK2-STAT5 pathway. IGF-1 acts through the IGF-1 receptor (tyrosine kinase) activating RAS/MAPK and PI3K/AKT pathways. GH secretion is modulated by sleep, exercise, fasting (stimulate), and hyperglycemia, obesity (suppress). Laron syndrome results from GH receptor mutations—elevated GH but low IGF-1, with paradoxically reduced cancer risk.',
      'GH deficiency diagnosis: IGF-1 screening followed by stimulation testing (ITT gold standard; alternatives: glucagon, GHRH-arginine, macimorelin). Acromegaly workup: elevated IGF-1, failed GH suppression on 75g OGTT (GH >1 mcg/L). First-line: transsphenoidal surgery. Second-line: somatostatin receptor ligands (octreotide LAR, lanreotide, pasireotide). Pegvisomant (GH receptor antagonist) normalizes IGF-1 in ~90% of patients. GH replacement in adults improves body composition, bone density, quality of life, and lipid profiles.'
    ),
    [
      'GH is the most abundant anterior pituitary hormone',
      'GH half-life is only 15-20 minutes; IGF-1 half-life is ~15 hours',
      '75% of daily GH secretion occurs during sleep',
      'IGF-1 circulates bound to IGFBP-3 and acid-labile subunit',
      'Acromegaly diagnosis is delayed an average of 5-10 years'
    ],
    'Childhood GH deficiency causes growth failure. Adult GH deficiency is associated with increased cardiovascular mortality. Acromegaly increases mortality primarily through cardiovascular and cerebrovascular disease.',
    ['anterior-pituitary', 'hypothalamus', 'pituitary-gland']
  ),

  // ==========================================================================
  // HORMONE PATHWAYS — Reproductive Axis
  // ==========================================================================
  endo(
    'reproductive-axis', 'Hypothalamic-Pituitary-Gonadal (HPG) Axis', 'Eje hipotalamo-hipofisis-gonadal (HHG)',
    'hormone-pathway', 'reproductive-axis', 'N/A',
    levels(
      'A communication system from your brain to your reproductive organs that controls puberty and allows adults to have babies.',
      'The hypothalamus releases GnRH, which tells the pituitary to release LH and FSH. These hormones control the ovaries and testes to produce sex hormones (estrogen, progesterone, testosterone) and enable reproduction. This system activates during puberty.',
      'GnRH is released in pulses from the hypothalamus. LH stimulates sex steroid production (testosterone from Leydig cells, estrogen from theca/granulosa cells). FSH promotes gametogenesis (spermatogenesis, folliculogenesis). Negative feedback by sex steroids and inhibin regulates the axis. In women, rising estradiol at mid-cycle triggers a positive feedback LH surge causing ovulation.',
      'Kisspeptin neurons in the arcuate nucleus drive pulsatile GnRH release (KNDy neurons: kisspeptin/neurokinin B/dynorphin). GnRH pulse frequency determines gonadotropin output—fast pulses (~60-90 min) favor LH; slow pulses (~180-240 min) favor FSH. The E2 positive feedback mechanism involves enhanced GnRH self-priming and increased pituitary sensitivity. Activin/follistatin modulate FSH at the pituitary.',
      'Hypogonadotropic hypogonadism workup includes LH, FSH, sex steroids, prolactin, thyroid function, and pituitary MRI. Kallmann syndrome (KAL1, FGFR1, PROK2 mutations) presents with anosmia and delayed puberty. Functional hypothalamic amenorrhea diagnosis is by exclusion—restore energy balance. Pulsatile GnRH pump therapy restores fertility in hypothalamic amenorrhea. For IVF, controlled ovarian hyperstimulation uses FSH with GnRH agonist (long protocol) or antagonist (short protocol) to prevent premature LH surge. Neurokinin-3 receptor antagonists are a novel class for menopausal vasomotor symptoms.'
    ),
    [
      'GnRH has a half-life of only 2-4 minutes',
      'Puberty onset correlates with kisspeptin signaling activation',
      'The LH surge lasts approximately 48 hours',
      'Inhibin B (male) and inhibin A (female luteal phase) selectively suppress FSH',
      'Continuous GnRH administration paradoxically suppresses gonadotropins'
    ],
    'Delayed puberty (no breast development by 13 in girls, no testicular enlargement by 14 in boys) warrants evaluation. PCOS is diagnosed by Rotterdam criteria (2 of 3: oligo-anovulation, hyperandrogenism, polycystic ovarian morphology). Menopause management includes hormone therapy for symptomatic women within 10 years of onset.',
    ['gonads-endocrine', 'hypothalamus', 'anterior-pituitary']
  ),

  // ==========================================================================
  // CONDITIONS — Cushing Syndrome (ICD-11: 5A71)
  // ==========================================================================
  endo(
    'cushing-syndrome', 'Cushing Syndrome', 'Sindrome de Cushing',
    'condition', 'hpa-axis', '5A71',
    levels(
      'A condition where your body has too much cortisol (a stress hormone), which can make your face round, cause weight gain in your belly, and make your skin bruise easily.',
      'Cushing syndrome occurs from too much cortisol, either from taking steroid medications or from the body making too much. Symptoms include weight gain (especially in the face and abdomen), thin skin, easy bruising, and high blood sugar. Treatment depends on the cause.',
      'Exogenous Cushing syndrome (most common) results from chronic glucocorticoid therapy. Endogenous causes: ACTH-dependent (Cushing disease 70%, ectopic ACTH 10%) or ACTH-independent (adrenal adenoma 15%, adrenal carcinoma 5%). Screening tests include 24h urine free cortisol, late-night salivary cortisol, and 1 mg overnight DST. Features include central obesity, moon facies, dorsocervical fat pad, striae, proximal myopathy, and osteoporosis.',
      'ACTH-dependent vs. ACTH-independent is distinguished by plasma ACTH level. High-dose DST (8 mg) suppresses cortisol in Cushing disease but not ectopic ACTH (sensitivity ~80%). CRH stimulation test: exaggerated ACTH response in Cushing disease. Bilateral inferior petrosal sinus sampling (BIPSS) with CRH stimulation (central:peripheral ACTH ratio >3:1 after CRH) is the gold standard for differentiating Cushing disease from ectopic ACTH.',
      'Transsphenoidal surgery is first-line for Cushing disease (remission 65-90% for microadenomas). Perioperative hydrocortisone bridging is essential as the suppressed contralateral adrenal may take 6-18 months to recover. For refractory disease: repeat surgery, radiation (stereotactic/conventional), bilateral adrenalectomy (risk of Nelson syndrome), or medical therapy (ketoconazole, osilodrostat, metyrapone, mitotane, pasireotide, mifepristone). Ectopic ACTH from small cell lung cancer has a poor prognosis.'
    ),
    [
      'Exogenous glucocorticoid use is the most common cause overall',
      'Cushing disease (pituitary adenoma) is the most common endogenous cause',
      'Proximal muscle weakness, wide purple striae, and easy bruising are discriminatory features',
      'Untreated Cushing syndrome has a 5-year mortality of ~50%',
      'Nelson syndrome: aggressive corticotroph adenoma expansion after bilateral adrenalectomy'
    ],
    'Cushing syndrome increases cardiovascular mortality 4-fold. Pseudo-Cushing states (alcoholism, depression, obesity) can mimic biochemical findings. Always assess for exogenous glucocorticoid exposure first.',
    ['hpa-axis', 'adrenal-glands', 'anterior-pituitary']
  ),

  // ==========================================================================
  // CONDITIONS — Addison Disease (ICD-11: 5A74)
  // ==========================================================================
  endo(
    'addison-disease', 'Addison Disease (Primary Adrenal Insufficiency)', 'Enfermedad de Addison (insuficiencia suprarrenal primaria)',
    'condition', 'adrenal', '5A74',
    levels(
      'A condition where the adrenal glands stop making enough cortisol and aldosterone, causing tiredness, weight loss, and darkening of the skin.',
      'In Addison disease, the adrenal glands are damaged (usually by the immune system) and cannot make enough hormones. This causes extreme fatigue, low blood pressure, salt cravings, and skin darkening. Daily medication replaces the missing hormones.',
      'Autoimmune adrenalitis (80% in developed countries) destroys all adrenal cortical zones. 21-hydroxylase antibodies are present in ~90%. Cortisol deficiency causes fatigue, hypoglycemia, and inadequate stress response. Aldosterone deficiency causes hyperkalemia, hyponatremia, and hypotension. Elevated ACTH drives hyperpigmentation via melanocyte stimulation (POMC-derived alpha-MSH).',
      'Diagnosis: early morning cortisol <3 mcg/dL is diagnostic; >15 mcg/dL excludes AI. ACTH stimulation test (250 mcg cosyntropin): 60 min cortisol <18 mcg/dL confirms AI. Low-dose (1 mcg) cosyntropin test may detect early/partial AI. Primary AI: elevated ACTH, low cortisol, elevated renin, positive 21-hydroxylase antibodies. Adrenal CT: small, atrophied glands in autoimmune; calcified in TB/fungal; enlarged in infiltrative/hemorrhagic.',
      'Replacement: hydrocortisone 15-25 mg/day in 2-3 divided doses (cortisol replacement) plus fludrocortisone 0.05-0.2 mg/day (mineralocorticoid). Stress dosing: double oral dose for minor illness; hydrocortisone 50 mg IV q8h for major illness/surgery. Modified-release hydrocortisone (Plenadren) improves circadian cortisol profile. All patients need emergency identification and injectable hydrocortisone kits. Autoimmune polyglandular syndromes (APS-1 with AIRE mutations, APS-2) associate with other autoimmune conditions.'
    ),
    [
      'Autoimmune adrenalitis is the most common cause in developed countries',
      'TB is still the most common cause worldwide',
      'Hyperpigmentation (especially palmar creases, buccal mucosa) is a hallmark of primary AI',
      'Acute adrenal crisis can be precipitated by infection, surgery, or abrupt steroid withdrawal',
      'Adrenal crisis mortality rate is approximately 0.5/100 patient-years despite education'
    ],
    'Adrenal crisis is a life-threatening emergency requiring immediate IV hydrocortisone 100 mg bolus followed by 50 mg q8h plus aggressive IV fluid resuscitation. All patients need sick-day rules education, medical alert identification, and emergency injection kits.',
    ['hpa-axis', 'adrenal-glands', 'cushing-syndrome']
  ),

  // ==========================================================================
  // CONDITIONS — Primary Hyperaldosteronism (ICD-11: 5A71.0)
  // ==========================================================================
  endo(
    'primary-hyperaldosteronism', 'Primary Hyperaldosteronism', 'Hiperaldosteronismo primario',
    'condition', 'adrenal', '5A71.0',
    levels(
      'A condition where one or both adrenal glands make too much aldosterone, a hormone that controls salt and water, causing high blood pressure.',
      'Primary hyperaldosteronism (also called Conn syndrome) means the adrenal glands produce too much aldosterone, leading to high blood pressure and low potassium. It is more common than previously thought and is an important cause of hard-to-control high blood pressure.',
      'Causes include aldosterone-producing adenoma (35%) and bilateral adrenal hyperplasia (60%). Excess aldosterone increases sodium reabsorption and potassium/hydrogen secretion in the distal nephron, causing hypertension, hypokalemia, and metabolic alkalosis. Aldosterone also promotes cardiac fibrosis and vascular inflammation independent of blood pressure effects.',
      'Screening with aldosterone-to-renin ratio (ARR) is recommended for resistant hypertension, hypokalemia (spontaneous or diuretic-induced), adrenal incidentaloma, and early-onset hypertension. Positive ARR requires confirmatory testing (oral sodium loading, saline infusion, fludrocortisone suppression). Subtype differentiation: adrenal CT plus adrenal venous sampling (AVS) to lateralize. AVS is the gold standard (selectivity index >2:1; lateralization index >4:1).',
      'Unilateral disease: laparoscopic adrenalectomy normalizes hypertension in ~50% and improves it in ~90%. Bilateral disease: mineralocorticoid receptor antagonists (spironolactone first-line, eplerenone if intolerant). Target BP <130/80. Amiloride is an alternative. Emerging: somatic mutations in KCNJ5 (most common in APA), ATP1A1, ATP2B3, and CACNA1D drive aldosterone overproduction. Patients with PA have excess cardiovascular morbidity compared to essential hypertension at the same BP level.'
    ),
    [
      'Affects 5-10% of hypertensive patients',
      'Hypokalemia is present in only 30-50% of cases',
      'Aldosterone-to-renin ratio is the screening test of choice',
      'Adrenal venous sampling is the gold standard for lateralization',
      'PA patients have higher cardiovascular risk than matched essential hypertension patients'
    ],
    'Primary aldosteronism causes excess cardiovascular, cerebrovascular, and renal morbidity beyond blood pressure effects alone. Screening should be routine in resistant hypertension and hypokalemia.',
    ['raas', 'adrenal-glands']
  ),

  // ==========================================================================
  // CONDITIONS — Pheochromocytoma (ICD-11: 2F7A)
  // ==========================================================================
  endo(
    'pheochromocytoma', 'Pheochromocytoma', 'Feocromocitoma',
    'condition', 'adrenal', '2F7A',
    levels(
      'A rare tumor in the adrenal glands that makes too much adrenaline, causing sudden attacks of high blood pressure, fast heartbeat, and sweating.',
      'A pheochromocytoma is a tumor of the adrenal gland that produces excess adrenaline and noradrenaline. This causes episodes of severe high blood pressure, rapid heartbeat, headache, and sweating. It must be detected before surgery to prevent a dangerous blood pressure crisis.',
      'Pheochromocytomas arise from chromaffin cells of the adrenal medulla and produce catecholamines (epinephrine, norepinephrine, dopamine). Classic triad: episodic headache, sweating, and tachycardia with paroxysmal hypertension. Extra-adrenal tumors (paragangliomas) arise from sympathetic/parasympathetic ganglia. About 40% have hereditary basis (VHL, RET/MEN2, SDHx, NF1).',
      'Biochemical diagnosis: plasma free metanephrines (sensitivity >96%) or 24h urine fractionated metanephrines/catecholamines. Imaging: CT/MRI for localization (T2-bright on MRI); 123I-MIBG scintigraphy or 68Ga-DOTATATE PET/CT for metastatic/extra-adrenal disease. Preoperative preparation: alpha-blockade first (phenoxybenzamine or doxazosin for 10-14 days), then beta-blockade (never beta before alpha—risk of hypertensive crisis), liberal salt and fluid intake.',
      'Surgical resection is curative for benign tumors. Laparoscopic adrenalectomy for tumors <6 cm; open for larger or invasive tumors. Intraoperative hemodynamic lability requires arterial line monitoring and short-acting vasoactive agents. Approximately 10% of pheochromocytomas are metastatic (defined by presence of chromaffin tissue where it does not normally occur). Metastatic disease: 131I-MIBG therapy, CVD chemotherapy, temozolomide, sunitinib. All patients require lifelong biochemical surveillance. Genetic testing is recommended for all patients per 2014 Endocrine Society guidelines.'
    ),
    [
      'The classic "rule of 10s" is outdated but historically used (10% bilateral, extra-adrenal, malignant, familial)',
      'Approximately 40% of cases have an identifiable genetic basis',
      'Alpha-blockade MUST precede beta-blockade to prevent hypertensive crisis',
      'Plasma free metanephrines have the highest sensitivity (>96%)',
      'Catecholamine crisis can be triggered by anesthesia, biopsy, or certain medications'
    ],
    'Pheochromocytoma can cause life-threatening hypertensive crisis during surgery or anesthesia if unrecognized. Preoperative alpha-blockade is mandatory. All patients should receive genetic counseling and testing.',
    ['adrenal-glands', 'hpa-axis']
  ),

  // ==========================================================================
  // CONDITIONS — Hypothyroidism (ICD-11: 5A00.0)
  // ==========================================================================
  endo(
    'hypothyroidism', 'Hypothyroidism', 'Hipotiroidismo',
    'condition', 'thyroid', '5A00.0',
    levels(
      'When your thyroid gland is too slow and does not make enough hormones, making you feel tired, cold, and sluggish—like your body is running in slow motion.',
      'Hypothyroidism means your thyroid gland is underactive. It causes fatigue, weight gain, feeling cold, dry skin, and constipation. The most common cause is Hashimoto disease, where the immune system attacks the thyroid. A daily thyroid hormone pill treats it effectively.',
      'Primary hypothyroidism (elevated TSH, low free T4) is most commonly caused by Hashimoto thyroiditis (anti-TPO antibodies positive in 90%). Central hypothyroidism (low/normal TSH, low free T4) results from pituitary or hypothalamic disease. Treatment: levothyroxine 1.6 mcg/kg/day full replacement; start lower (25-50 mcg) in elderly or cardiac patients. Monitor TSH 6-8 weeks after dose changes.',
      'Hashimoto thyroiditis progresses through lymphocytic infiltration, follicular destruction, and fibrosis. Subclinical hypothyroidism (elevated TSH, normal free T4) affects 4-10% of adults. Treatment threshold: TSH >10, symptomatic with TSH >7, or positive anti-TPO antibodies (predict progression). Myxedema coma: severe hypothyroidism with hypothermia, altered consciousness, and multiorgan failure—treat with IV levothyroxine 200-400 mcg bolus plus stress-dose hydrocortisone.',
      'Levothyroxine bioequivalence issues between brands/generics warrant consistent formulation use. Absorption is impaired by calcium, iron, PPI, soy, and coffee (take on empty stomach 30-60 min before meals). In pregnancy, TSH targets are trimester-specific (1st <2.5, 2nd <3.0, 3rd <3.5) with dose increases of ~30% typically needed. LT3 combination therapy remains controversial; ATA and ETA guidelines do not endorse routine use. TSH may take 8 weeks to equilibrate after dose changes due to T4 half-life of 7 days.'
    ),
    [
      'Most common endocrine disorder worldwide',
      'Hashimoto thyroiditis is the leading cause in iodine-sufficient areas',
      'Women are affected 5-8x more often than men',
      'TSH is the most sensitive screening test',
      'Myxedema coma has a mortality rate of 25-60%'
    ],
    'Hypothyroidism in pregnancy increases the risk of miscarriage, preeclampsia, and impaired fetal neurodevelopment. Levothyroxine dose should be increased by approximately 30% as soon as pregnancy is confirmed in women with known hypothyroidism.',
    ['thyroid-axis', 'thyroid-gland', 'anterior-pituitary']
  ),

  // ==========================================================================
  // CONDITIONS — Hyperthyroidism (ICD-11: 5A00.1)
  // ==========================================================================
  endo(
    'hyperthyroidism', 'Hyperthyroidism', 'Hipertiroidismo',
    'condition', 'thyroid', '5A00.1',
    levels(
      'When your thyroid gland is too fast and makes too much hormone, making you feel jittery, hot, and causing your heart to race—like your body is stuck in fast-forward.',
      'Hyperthyroidism means your thyroid is overactive. It causes weight loss, rapid heartbeat, anxiety, heat intolerance, and tremor. The most common cause is Graves disease, where the immune system overstimulates the thyroid. Treatment includes medication, radioactive iodine, or surgery.',
      'Graves disease (70-80% of cases) involves TSH receptor-stimulating antibodies (TSI). Other causes: toxic multinodular goiter, toxic adenoma, thyroiditis (transient), and exogenous thyroid hormone. Diagnosis: suppressed TSH, elevated free T4/T3. Radioactive iodine uptake (RAIU) differentiates causes: diffuse uptake (Graves), nodular uptake (toxic nodule/MNG), low uptake (thyroiditis, exogenous).',
      'Graves ophthalmopathy affects 25-50% of Graves patients, mediated by TSH receptor antibodies cross-reacting with orbital fibroblasts causing glycosaminoglycan deposition, edema, and fibrosis. Risk factors for progression: smoking, RAI treatment, uncontrolled thyroid levels. Thyroid storm (Burch-Wartofsky score >45): fever, tachycardia, altered sensorium, heart failure—treat with PTU, beta-blockers, glucocorticoids, iodine (Lugol or SSKI), cholestyramine, and supportive care.',
      'Antithyroid drug (ATD) remission rates: 40-60% after 12-18 months of methimazole; relapse risk highest in first 6 months after discontinuation. TSH receptor antibody titer at ATD cessation predicts relapse. RAI is definitive but may worsen Graves ophthalmopathy (selenium supplementation and glucocorticoid prophylaxis reduce this risk). Teprotumumab (IGF-1R antibody) is FDA-approved for moderate-to-severe thyroid eye disease. Thyroidectomy is preferred for large goiters, suspicious nodules, moderate-to-severe ophthalmopathy, or pregnancy planning.'
    ),
    [
      'Graves disease is the most common cause of hyperthyroidism',
      'T3 toxicosis (elevated T3, normal T4) can be an early or sole manifestation',
      'Atrial fibrillation occurs in 10-25% of hyperthyroid patients',
      'Thyroid storm mortality is 10-30% even with treatment',
      'Smoking is the strongest modifiable risk factor for Graves ophthalmopathy'
    ],
    'Subclinical hyperthyroidism (suppressed TSH, normal free T4/T3) increases AF and osteoporosis risk, especially in older adults. Methimazole is preferred over PTU except in first trimester of pregnancy or thyroid storm.',
    ['thyroid-axis', 'thyroid-gland']
  ),

  // ==========================================================================
  // CONDITIONS — Hyperparathyroidism (ICD-11: 5A50)
  // ==========================================================================
  endo(
    'primary-hyperparathyroidism', 'Primary Hyperparathyroidism', 'Hiperparatiroidismo primario',
    'condition', 'parathyroid', '5A50',
    levels(
      'A condition where the parathyroid glands make too much hormone, pulling calcium out of bones into the blood, which can cause kidney stones and weak bones.',
      'Primary hyperparathyroidism causes high blood calcium due to an overactive parathyroid gland (usually a benign tumor). Symptoms include kidney stones, bone pain, fatigue, and depression. The classic saying is "stones, bones, groans, and psychiatric moans." Surgery can cure it.',
      'Single adenoma (85%), four-gland hyperplasia (10-15%), carcinoma (<1%). Elevated calcium with inappropriately non-suppressed PTH is diagnostic. Complications: nephrolithiasis, osteoporosis (especially cortical bone), nephrocalcinosis, neurocognitive symptoms. Surgical indications: calcium >1 mg/dL above normal, T-score <-2.5, eGFR <60, nephrolithiasis/nephrocalcinosis, or age <50.',
      'Normocalcemic PHPT (elevated PTH, normal calcium) is an increasingly recognized early form requiring exclusion of secondary causes (vitamin D deficiency, renal impairment, calcium malabsorption). Localization: sestamibi-SPECT/CT (sensitivity 70-90%) and neck ultrasound. 4D-CT is increasingly used. Intraoperative PTH monitoring (Miami criterion: >50% drop at 10 min post-excision) allows minimally invasive parathyroidectomy with 97% cure rates.',
      'MEN1 (parathyroid hyperplasia 95%, pituitary adenoma 40%, pancreatic NET 40%) and MEN2A (medullary thyroid cancer, pheochromocytoma, PHPT) are hereditary causes—genetic testing indicated for hyperplasia, young age, family history, or multigland disease. Non-surgical management: cinacalcet (reduces calcium by 0.5-1 mg/dL), adequate hydration, avoid thiazides and lithium. Denosumab improves BMD in PHPT. Parathyroid carcinoma: en bloc resection; cinacalcet and denosumab for hypercalcemia management.'
    ),
    [
      'Most common cause of hypercalcemia in outpatients',
      'Postmenopausal women are most commonly affected',
      'Classic triad: elevated calcium, elevated PTH, low phosphorus',
      'Single adenoma accounts for 85% of cases',
      'Minimally invasive parathyroidectomy has a 97% cure rate'
    ],
    'Hypercalcemic crisis (calcium >14 mg/dL) is a medical emergency requiring aggressive IV saline, calcitonin, and denosumab/bisphosphonates. Hungry bone syndrome (severe hypocalcemia) can occur post-parathyroidectomy in patients with severe hyperparathyroidism.',
    ['parathyroid-glands', 'thyroid-gland']
  ),

  // ==========================================================================
  // CONDITIONS — Diabetes Mellitus (ICD-11: 5A10/5A11)
  // ==========================================================================
  endo(
    'diabetes-mellitus-overview', 'Diabetes Mellitus Overview', 'Diabetes mellitus (resumen general)',
    'condition', 'glucose-homeostasis', '5A10',
    levels(
      'A disease where there is too much sugar in the blood because the body cannot make or properly use insulin—the key that lets sugar into cells for energy.',
      'Diabetes occurs when the body cannot properly control blood sugar. Type 1: the immune system destroys insulin-making cells (needs insulin injections). Type 2: the body becomes resistant to insulin (managed with lifestyle changes and medications). Both types can cause serious complications if poorly controlled.',
      'Type 1 DM (5-10%): autoimmune beta-cell destruction, absolute insulin deficiency. Type 2 DM (90-95%): insulin resistance with progressive beta-cell dysfunction. Other types: LADA, MODY (monogenic), gestational, secondary. Diagnostic criteria: FPG >=126, HbA1c >=6.5%, 2h OGTT >=200, or random glucose >=200 with symptoms. Complications: microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (CAD, stroke, PAD).',
      'T1DM: HLA-DR3/DR4 genetic susceptibility, environmental triggers, autoimmune destruction (GAD65, IA-2, ZnT8 antibodies). T2DM: polygenic + environmental (obesity, sedentary lifestyle). Pathogenic triad: insulin resistance (muscle, liver, adipose), impaired insulin secretion, increased hepatic glucose production. Defronzo\'s "ominous octet" adds: accelerated lipolysis, incretin deficiency, increased glucagon, renal glucose reabsorption, and brain insulin resistance.',
      'ADA Standards of Care 2024: individualize HbA1c targets (<7% for most, <6.5% if achievable without hypoglycemia, <8% for elderly/comorbid). Cardiorenal-metabolic approach: GLP-1 RA or SGLT2i regardless of A1c if established CVD, HF, or CKD. CGM recommended for all insulin-treated patients. Time in range (TIR >70%) as an adjunct to A1c. Steno-2 legacy effect demonstrates long-term benefit of intensive multifactorial intervention. T1DM: teplizumab (anti-CD3) FDA-approved to delay onset in stage 2 T1DM. Closed-loop systems (hybrid/full) demonstrate improved TIR and reduced hypoglycemia.'
    ),
    [
      'Affects approximately 537 million adults worldwide (IDF 2021)',
      'T2DM is often asymptomatic for years before diagnosis',
      'Diabetic retinopathy is the leading cause of blindness in working-age adults',
      'SGLT2 inhibitors and GLP-1 RAs have cardiovascular and renal benefits beyond glucose lowering',
      'Teplizumab is the first disease-modifying therapy for T1DM'
    ],
    'Diabetes management requires a patient-centered approach addressing glycemia, cardiovascular risk, weight, and comorbidities. Annual comprehensive complications screening (eyes, feet, kidneys, lipids) is essential.',
    ['glucose-homeostasis', 'pancreatic-islets', 'hpa-axis']
  ),

  // ==========================================================================
  // PHYSIOLOGY — Calcium Homeostasis
  // ==========================================================================
  endo(
    'calcium-homeostasis', 'Calcium and Phosphate Homeostasis', 'Homeostasis del calcio y fosfato',
    'physiology', 'parathyroid', 'N/A',
    levels(
      'Your body carefully controls calcium levels in your blood because calcium is needed for strong bones, muscle movement, and nerve signals. Three hormones work together like a team to keep calcium just right.',
      'Three hormones control calcium: PTH raises calcium (releases it from bones, keeps it in kidneys, helps absorb it from food), vitamin D helps absorb calcium from food, and calcitonin lowers calcium by slowing bone breakdown. Calcium is vital for bones, muscles, nerves, and blood clotting.',
      'PTH raises serum calcium via: (1) osteoclast-mediated bone resorption, (2) distal tubular calcium reabsorption, (3) 1-alpha-hydroxylase stimulation increasing 1,25(OH)2D production (which increases intestinal calcium absorption). PTH also promotes phosphate excretion (NaPi-IIa inhibition). Calcitonin (C cells) inhibits osteoclast activity. FGF23 (osteocytes) promotes renal phosphate excretion and suppresses 1,25(OH)2D synthesis.',
      'The calcium-sensing receptor (CaSR) on parathyroid chief cells detects ionized calcium changes and modulates PTH secretion via Gq/G11 signaling. Vitamin D metabolism: cholecalciferol (D3, skin/diet) → 25(OH)D (liver, CYP2R1) → 1,25(OH)2D (kidney, CYP27B1). 24-hydroxylase (CYP24A1) degrades both metabolites. Total serum calcium must be corrected for albumin: corrected Ca = measured Ca + 0.8 × (4.0 - albumin). Ionized calcium is the physiologically active fraction (~50% of total).',
      'Hypercalcemia workup: PTH-dependent (PHPT, FHH—check calcium/creatinine clearance ratio, Li-associated) vs. PTH-independent (malignancy via PTHrP/osteolytic metastases/1,25D-mediated, granulomatous disease, vitamin D intoxication). Hypocalcemia: check PTH—elevated PTH (vitamin D deficiency, CKD, pseudohypoparathyroidism) vs. low PTH (post-surgical, autoimmune). Pseudohypoparathyroidism (Albright hereditary osteodystrophy) shows PTH resistance with short 4th/5th metacarpals. Recombinant PTH(1-84) is available for refractory hypoparathyroidism.'
    ),
    [
      'Normal total serum calcium: 8.5-10.5 mg/dL (2.1-2.6 mmol/L)',
      'PTH and vitamin D are the primary regulators; calcitonin has a minor role in adults',
      'FGF23 is the key phosphate-regulating hormone (phosphatonin)',
      'Approximately 99% of body calcium is in bone',
      'Ionized calcium is the physiologically relevant measurement'
    ],
    'Severe hypocalcemia (ionized Ca <3.2 mg/dL) causes tetany, seizures, and cardiac arrhythmias—treat with IV calcium gluconate. Severe hypercalcemia (>14 mg/dL) requires aggressive IV saline, calcitonin, and bisphosphonates/denosumab.',
    ['parathyroid-glands', 'thyroid-gland']
  ),

  // ==========================================================================
  // PHYSIOLOGY — Adrenal Steroidogenesis
  // ==========================================================================
  endo(
    'adrenal-steroidogenesis', 'Adrenal Steroidogenesis', 'Esteroidogenesis suprarrenal',
    'physiology', 'adrenal', 'N/A',
    levels(
      'The adrenal glands use cholesterol (a type of fat) as a building block to make different hormones—like a factory that takes raw materials and builds different products.',
      'The adrenal cortex turns cholesterol into three types of hormones: cortisol (manages stress and inflammation), aldosterone (controls blood pressure and salt), and androgens (contribute to male characteristics). Each zone of the cortex specializes in making different hormones.',
      'Steroidogenesis begins with cholesterol transport into mitochondria via StAR protein (rate-limiting step). CYP11A1 (side-chain cleavage enzyme) converts cholesterol to pregnenolone—the common precursor. Zona glomerulosa: pregnenolone → progesterone → DOC → corticosterone → aldosterone (via CYP11B2). Zona fasciculata: pregnenolone → 17-OH-pregnenolone → 17-OH-progesterone → 11-deoxycortisol → cortisol (CYP17, CYP21A2, CYP11B1). Zona reticularis: DHEA and DHEA-S via CYP17 lyase activity.',
      'Key enzymes and their deficiencies: 21-hydroxylase (CYP21A2, 95% of CAH) causes cortisol/aldosterone deficiency with androgen excess; 11-beta-hydroxylase (CYP11B1, 5% of CAH) causes cortisol deficiency with DOC-mediated hypertension; 17-alpha-hydroxylase (CYP17A1) causes sex steroid and cortisol deficiency with mineralocorticoid excess and hypertension. CYP17 has both hydroxylase and lyase activities; cytochrome b5 enhances lyase activity preferentially.',
      'Congenital adrenal hyperplasia (CAH) is the most common adrenal genetic disorder. Classic 21-hydroxylase deficiency: salt-wasting (75%) or simple virilizing (25%); non-classic (late-onset) is common (1:200-1:1000). Newborn screening measures 17-OHP. Genotype-phenotype correlation guides management. Hydrocortisone replacement + fludrocortisone for classic CAH. Novel therapies: crinecerfont (CRF1 antagonist) and nevanimibe (ACAT inhibitor) aim to reduce glucocorticoid doses and improve androgen control. Adrenarche (DHEA-S rise at age 6-8) is driven by zona reticularis maturation, independent of gonadal puberty.'
    ),
    [
      'Cholesterol is the precursor for all steroid hormones',
      'StAR protein deficiency causes lipoid congenital adrenal hyperplasia (most severe form)',
      '21-hydroxylase deficiency accounts for 95% of CAH',
      'CYP11B1 (zona fasciculata) and CYP11B2 (zona glomerulosa) share 93% sequence homology',
      'DHEA-S is the most abundant circulating steroid and has a long half-life'
    ],
    'Classic CAH is a newborn emergency: salt-wasting crisis presents at 1-3 weeks of life with hyponatremia, hyperkalemia, and shock. Non-classic CAH can mimic PCOS in young women.',
    ['adrenal-glands', 'hpa-axis', 'gonads-endocrine']
  ),
];

// Populate the record
for (const entry of entries) {
  ENDOCRINE_ENTRIES[entry.id] = entry;
}

// ---------------------------------------------------------------------------
// Lookup functions
// ---------------------------------------------------------------------------

export function getEndocrineEntry(id: string): EndocrineEntry | undefined {
  return ENDOCRINE_ENTRIES[id];
}

export function searchEndocrineEntries(query: string): EndocrineEntry[] {
  const q = query.toLowerCase();
  return Object.values(ENDOCRINE_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.level1.toLowerCase().includes(q) ||
    e.description.level3.toLowerCase().includes(q) ||
    e.subcategory.toLowerCase().includes(q) ||
    e.keyFacts.some(f => f.toLowerCase().includes(q))
  );
}

export function getEndocrineByCategory(category: EndocrineDbCategory): EndocrineEntry[] {
  return Object.values(ENDOCRINE_ENTRIES).filter(e => e.category === category);
}

export function getEndocrineBySubcategory(subcategory: EndocrineSubcategory): EndocrineEntry[] {
  return Object.values(ENDOCRINE_ENTRIES).filter(e => e.subcategory === subcategory);
}

export function getEndocrineCount(): number {
  return Object.keys(ENDOCRINE_ENTRIES).length;
}

export function getEndocrineAtLevel(id: string, level: 1 | 2 | 3 | 4 | 5): string | undefined {
  const entry = ENDOCRINE_ENTRIES[id];
  if (!entry) return undefined;
  const key = `level${level}` as keyof ComplexityLevels;
  return entry.description[key];
}

export function getAllEndocrineIds(): string[] {
  return Object.keys(ENDOCRINE_ENTRIES);
}
