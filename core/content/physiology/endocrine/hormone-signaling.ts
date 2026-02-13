/**
 * Hormone Signaling Axes - Endocrine Physiology
 *
 * Comprehensive coverage of major endocrine axes and calcium homeostasis:
 * - Hypothalamic-pituitary axis (HPA, HPT, HPG, GH axis)
 * - Thyroid hormone synthesis and regulation
 * - Cortisol and the HPA axis
 * - Insulin and glucagon (pancreatic endocrine function)
 * - Calcium homeostasis (PTH, calcitonin, vitamin D)
 * - Growth hormone axis
 */

import { EducationalContent } from '../../types';

export const hormoneSignaling: EducationalContent = {
  id: 'physiology-hormone-signaling-axes',
  type: 'process',
  name: 'Hormone Signaling Axes',
  alternateNames: [
    'Ejes de Senalizacion Hormonal',
    'Endocrine Axes',
    'Neuroendocrine Regulation',
    'Hypothalamic-Pituitary Axes',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your brain and special glands work together like a chain of command to control growth, energy, stress, blood sugar, and how strong your bones are.',
      explanation: `## Your Body's Chain of Command

### The Boss Gland in Your Brain

Deep inside your brain is a tiny area called the **hypothalamus**. It acts like a boss that watches over your whole body. Right below it hangs a pea-sized gland called the **pituitary** -- the "master gland." The hypothalamus tells the pituitary what to do, and the pituitary sends orders to other glands.

### Thyroid: Your Energy Controller

The **thyroid gland** in your neck controls how fast your body uses energy -- your metabolism.

- If the thyroid makes too much hormone, you feel hot, jittery, and lose weight
- If it makes too little, you feel tired, cold, and gain weight
- The pituitary sends **TSH** to tell the thyroid how much hormone to make

### Cortisol: Your Stress Hormone

When you are stressed or scared, your body releases **cortisol** from glands on top of your kidneys (adrenal glands). Cortisol:

- Gives you extra energy by raising blood sugar
- Helps you stay alert during danger
- Calms down inflammation

### Blood Sugar: Insulin and Glucagon

Your **pancreas** makes two hormones that work like a seesaw to keep blood sugar balanced:

- **Insulin** lowers blood sugar after you eat by moving sugar into cells
- **Glucagon** raises blood sugar when you haven't eaten by releasing stored sugar

### Keeping Your Bones Strong: Calcium Balance

Three things work together to keep calcium at the right level in your blood:

- **PTH** (from parathyroid glands) raises calcium when it drops
- **Calcitonin** (from the thyroid) lowers calcium if it gets too high
- **Vitamin D** helps your gut absorb calcium from food

### Growing Taller: Growth Hormone

The pituitary releases **growth hormone**, especially while you sleep. It helps your bones grow longer and your muscles get bigger.`,
      keyTerms: [
        { term: 'hypothalamus', definition: 'A small area in the brain that acts as the boss of the hormone system', pronunciation: 'HY-poh-THAL-uh-mus' },
        { term: 'pituitary gland', definition: 'The pea-sized master gland below the brain that sends orders to other glands', pronunciation: 'pih-TOO-ih-tair-ee' },
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that controls how fast your body uses energy', pronunciation: 'THY-royd' },
        { term: 'cortisol', definition: 'A stress hormone made by the adrenal glands that gives you energy and calms inflammation', pronunciation: 'KOR-tih-sol' },
        { term: 'insulin', definition: 'A hormone from the pancreas that lowers blood sugar by helping cells absorb it' },
        { term: 'glucagon', definition: 'A hormone from the pancreas that raises blood sugar by releasing stored sugar', pronunciation: 'GLOO-kah-gon' },
      ],
      analogies: [
        'The hypothalamus and pituitary work like a general and a lieutenant -- the general gives the order, the lieutenant passes it to the troops (other glands).',
        'Insulin and glucagon are like a seesaw -- when one goes up the other goes down, keeping blood sugar balanced.',
        'PTH, calcitonin, and vitamin D are like three workers adjusting the calcium level in a swimming pool -- one adds calcium, one drains some, and one brings in fresh supply.',
      ],
      examples: [
        'When you skip breakfast, glucagon tells your liver to release stored sugar so you still have energy.',
        'Kids grow the most during sleep because that is when the pituitary releases the most growth hormone.',
        'Drinking milk helps your bones because vitamin D helps your body absorb the calcium in the milk.',
      ],
      patientCounselingPoints: [
        'Getting enough sleep is important because growth hormone is mostly released at night.',
        'Eating regular meals helps keep blood sugar steady so insulin and glucagon stay in balance.',
        'Vitamin D from sunshine and food helps your body use calcium to build strong bones.',
      ],
    },

    2: {
      level: 2,
      summary:
        'The hypothalamic-pituitary axis controls thyroid function (HPT), cortisol release (HPA), and growth hormone secretion through layered feedback loops, while insulin/glucagon regulate glucose and PTH/vitamin D maintain calcium balance.',
      explanation: `## The Hypothalamic-Pituitary System

### How the Chain of Command Works

The hypothalamus releases small **releasing hormones** into special blood vessels that go directly to the pituitary. The pituitary then releases its own hormones into the general bloodstream to reach target glands.

**Negative feedback** keeps everything in check: when the final hormone level rises high enough, it signals back to the hypothalamus and pituitary to stop producing more -- like a thermostat turning off the heater once the room is warm enough.

### HPT Axis: Thyroid Regulation

1. Hypothalamus releases **TRH** (thyrotropin-releasing hormone)
2. Pituitary releases **TSH** (thyroid-stimulating hormone)
3. Thyroid releases **T4 and T3** (thyroid hormones)
4. T3/T4 feed back to suppress TRH and TSH

**Thyroid hormone effects:** increase metabolism, heart rate, body temperature, and brain development in children.

**Iodine** is essential -- the thyroid needs it to build T3 and T4. Iodine deficiency causes a **goiter** (enlarged thyroid).

### HPA Axis: Stress and Cortisol

1. Hypothalamus releases **CRH** (corticotropin-releasing hormone)
2. Pituitary releases **ACTH** (adrenocorticotropic hormone)
3. Adrenal cortex releases **cortisol**
4. Cortisol feeds back to suppress CRH and ACTH

**Cortisol follows a daily rhythm** -- highest in the morning, lowest at midnight. Stress can override this pattern.

**Cortisol actions:** raises blood glucose, suppresses immune system, breaks down protein for energy, maintains blood pressure.

### Insulin and Glucagon

**Insulin** (from beta cells of the pancreas):
- Released when blood glucose rises after eating
- Moves glucose into muscle and fat cells
- Promotes glycogen storage in the liver
- In diabetes, insulin is absent (Type 1) or cells resist it (Type 2)

**Glucagon** (from alpha cells of the pancreas):
- Released when blood glucose drops (fasting)
- Stimulates liver to break down glycogen into glucose
- Stimulates gluconeogenesis (making new glucose)

### Calcium Homeostasis

**PTH** (parathyroid hormone):
- Released when blood calcium drops
- Increases calcium reabsorption in kidneys
- Stimulates bone to release calcium
- Activates vitamin D in the kidneys

**Vitamin D:**
- Made in skin from sunlight, then activated by liver and kidney
- Increases calcium absorption from the intestines
- Works together with PTH

**Calcitonin** (from thyroid C-cells):
- Released when blood calcium is too high
- Slows bone breakdown to lower calcium
- Clinically less important than PTH and vitamin D

### Growth Hormone (GH) Axis

1. Hypothalamus releases **GHRH** (stimulates) and **somatostatin** (inhibits)
2. Pituitary releases **GH**
3. Liver produces **IGF-1** (insulin-like growth factor 1)
4. IGF-1 feeds back to suppress GH

**GH effects:** promotes linear bone growth in children, increases muscle mass, stimulates fat breakdown, raises blood glucose.`,
      keyTerms: [
        { term: 'negative feedback', definition: 'A control system where the output (hormone) signals back to reduce further production, keeping levels stable' },
        { term: 'TRH', definition: 'Thyrotropin-releasing hormone; released by the hypothalamus to stimulate TSH from the pituitary' },
        { term: 'TSH', definition: 'Thyroid-stimulating hormone; released by the pituitary to stimulate T3/T4 from the thyroid' },
        { term: 'CRH', definition: 'Corticotropin-releasing hormone; released by the hypothalamus to stimulate ACTH from the pituitary' },
        { term: 'ACTH', definition: 'Adrenocorticotropic hormone; released by the pituitary to stimulate cortisol from the adrenal glands' },
        { term: 'IGF-1', definition: 'Insulin-like growth factor 1; produced by the liver in response to growth hormone; mediates many GH effects' },
        { term: 'goiter', definition: 'Enlargement of the thyroid gland, often caused by iodine deficiency or abnormal TSH stimulation' },
      ],
      analogies: [
        'Negative feedback is like a thermostat: the furnace (gland) heats the room (blood hormone level) until the thermostat detects the set point and shuts it off.',
        'The HPA axis during stress is like a fire alarm system -- CRH pulls the alarm, ACTH dispatches firefighters, and cortisol puts out the fire; once the fire is out, the alarm resets.',
      ],
      examples: [
        'A blood test showing high TSH with low T4 suggests the thyroid is underactive (hypothyroidism) -- the pituitary is shouting louder because the thyroid is not responding.',
        'People with Type 1 diabetes need insulin injections because their immune system destroyed the beta cells that produce insulin.',
        'Astronauts lose bone mass in space partly because the lack of weight-bearing changes calcium balance and PTH signaling.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Neuroendocrine axes (HPT, HPA, GH) operate through hierarchical releasing/tropic/effector hormone cascades with negative feedback at multiple levels. Pancreatic islets regulate glucose through insulin/glucagon counterregulation, and calcium homeostasis integrates PTH, 1,25-dihydroxyvitamin D, and calcitonin acting on bone, kidney, and intestine.',
      explanation: `## Neuroendocrine Axis Architecture

### Hypothalamic-Pituitary Integration

The hypothalamus secretes releasing and inhibiting hormones into the **hypophyseal portal system**, a dedicated vascular network connecting the median eminence to the anterior pituitary. This allows low concentrations of hypothalamic peptides to reach the pituitary at high local concentrations.

**Anterior pituitary cell types:**
- **Thyrotrophs**: produce TSH
- **Corticotrophs**: produce ACTH (from POMC precursor)
- **Somatotrophs**: produce GH
- **Gonadotrophs**: produce LH and FSH
- **Lactotrophs**: produce prolactin (tonically inhibited by dopamine)

### HPT Axis: Thyroid Hormone Synthesis

**Thyroid hormone synthesis steps:**
1. **Iodide trapping**: Na/I symporter (NIS) concentrates iodide 20-40x
2. **Oxidation**: Thyroid peroxidase (TPO) oxidizes iodide to iodine
3. **Organification**: TPO iodinates tyrosine residues on thyroglobulin (MIT, DIT)
4. **Coupling**: TPO couples MIT+DIT to form T3, DIT+DIT to form T4
5. **Secretion**: Thyroglobulin is endocytosed, proteolyzed; T3/T4 released

**T4 is a prohormone**: converted to active T3 by deiodinases (D1, D2) in peripheral tissues. D3 converts T4 to inactive reverse T3 (rT3).

**Transport**: >99% of T3/T4 is protein-bound (TBG, albumin, transthyretin). Only free hormone is biologically active.

**Feedback**: Free T3/T4 suppress TRH (hypothalamus) and TSH (pituitary). TSH is the most sensitive marker of thyroid status.

### HPA Axis: Cortisol Regulation

**CRH-ACTH-cortisol cascade:**
- CRH is potentiated by **AVP** (arginine vasopressin) at the pituitary
- ACTH derives from **POMC** (proopiomelanocortin), which also yields beta-endorphin and MSH
- ACTH stimulates all layers of the adrenal cortex but primarily the zona fasciculata for cortisol

**Cortisol circadian rhythm**: driven by the suprachiasmatic nucleus; cortisol peaks at 6-8 AM, nadir at midnight. Pulsatile secretion (ultradian rhythm) is superimposed.

**Cortisol actions at the molecular level:**
- Binds intracellular **glucocorticoid receptor (GR)**, a nuclear receptor
- GR-cortisol complex translocates to nucleus, acts as transcription factor
- Upregulates gluconeogenic enzymes (PEPCK, G6Pase)
- Suppresses NF-kB (anti-inflammatory effect)
- Permissive effect on catecholamine action (maintains vascular tone)

### Pancreatic Islet Endocrinology

**Islet cell organization:**
- Beta cells (60-70%): insulin
- Alpha cells (20-30%): glucagon
- Delta cells (5-10%): somatostatin (paracrine inhibitor)
- PP cells: pancreatic polypeptide

**Insulin secretion mechanism:**
1. Glucose enters beta cell via GLUT2 transporter
2. Glucokinase phosphorylates glucose (rate-limiting step, "glucose sensor")
3. Increased ATP/ADP ratio closes K-ATP channels
4. Cell depolarization opens voltage-gated Ca2+ channels
5. Ca2+ influx triggers insulin granule exocytosis
6. Biphasic release: Phase 1 (pre-formed granules, minutes) and Phase 2 (newly synthesized, sustained)

**Insulin signaling**: binds insulin receptor (tyrosine kinase) -> IRS phosphorylation -> PI3K/Akt pathway -> GLUT4 translocation to cell membrane (muscle, adipose).

**Glucagon actions**: activates hepatic glycogenolysis and gluconeogenesis via cAMP/PKA pathway. Inhibited by insulin, somatostatin, and hyperglycemia.

### Calcium Homeostasis

**PTH regulation:**
- **Calcium-sensing receptor (CaSR)** on parathyroid chief cells detects ionized Ca2+
- Low Ca2+ -> decreased CaSR activation -> increased PTH secretion
- PTH half-life: ~4 minutes (rapid response)

**PTH actions:**
- **Bone**: stimulates osteoclast-mediated resorption (indirect, via RANKL on osteoblasts)
- **Kidney**: increases Ca2+ reabsorption (DCT), decreases phosphate reabsorption (PCT), stimulates 1-alpha-hydroxylase
- **Intestine**: indirect, via vitamin D activation

**Vitamin D metabolism:**
1. Cholecalciferol (D3) from skin UV-B exposure or diet
2. Liver: 25-hydroxylase -> 25(OH)D (calcidiol, storage form, measured clinically)
3. Kidney: 1-alpha-hydroxylase -> 1,25(OH)2D (calcitriol, active form)
4. 1-alpha-hydroxylase stimulated by PTH, low phosphate, low calcium

**Calcitriol actions**: nuclear receptor (VDR) -> increases intestinal Ca2+ and phosphate absorption, promotes osteoclast differentiation (permissive for bone resorption at high levels), increases renal Ca2+ reabsorption.

### GH-IGF-1 Axis

**GH regulation:**
- GHRH stimulates; somatostatin inhibits (both from hypothalamus)
- **Ghrelin** (from stomach) also stimulates GH release
- GH secretion is pulsatile, greatest during deep sleep (stages 3-4)

**GH actions:**
- Direct: lipolysis, insulin resistance (counter-regulatory), hepatic glucose output
- Indirect (via IGF-1): linear bone growth at epiphyseal plates, muscle protein synthesis, cell proliferation

**Feedback**: IGF-1 inhibits GH at pituitary and stimulates somatostatin at hypothalamus. GH itself also stimulates somatostatin (short-loop feedback).`,
      keyTerms: [
        { term: 'hypophyseal portal system', definition: 'Dedicated vascular network carrying hypothalamic releasing hormones directly to the anterior pituitary at high local concentrations', pronunciation: 'hy-POF-ih-zee-ul' },
        { term: 'thyroid peroxidase (TPO)', definition: 'Enzyme responsible for iodide oxidation, organification of tyrosine residues, and coupling reactions in thyroid hormone synthesis' },
        { term: 'deiodinase', definition: 'Enzyme that converts T4 to active T3 (D1, D2) or inactive rT3 (D3) in peripheral tissues' },
        { term: 'POMC', definition: 'Proopiomelanocortin; precursor polypeptide in corticotrophs cleaved to produce ACTH, beta-endorphin, and MSH' },
        { term: 'glucokinase', definition: 'Hexokinase IV in beta cells; rate-limiting glucose sensor with high Km that matches insulin secretion to ambient glucose' },
        { term: 'calcium-sensing receptor (CaSR)', definition: 'G-protein-coupled receptor on parathyroid chief cells that detects ionized calcium and regulates PTH secretion' },
        { term: '1-alpha-hydroxylase', definition: 'Renal enzyme (CYP27B1) that converts 25(OH)D to active 1,25(OH)2D; stimulated by PTH and low phosphate' },
        { term: 'RANKL', definition: 'Receptor activator of NF-kB ligand; produced by osteoblasts under PTH stimulation to activate osteoclast-mediated bone resorption' },
      ],
      clinicalNotes: 'Primary hypothyroidism shows elevated TSH with low free T4 (feedback loop intact). Central hypothyroidism shows low/normal TSH with low free T4 (pituitary or hypothalamic failure). Anti-TPO antibodies indicate Hashimoto thyroiditis, the most common cause of hypothyroidism in iodine-sufficient areas. In Type 2 diabetes, the glucokinase sensor is intact but downstream insulin signaling is impaired (insulin resistance). Sulfonylureas close K-ATP channels independently of glucose, explaining their risk of hypoglycemia.',
    },

    4: {
      level: 4,
      summary:
        'Advanced neuroendocrine physiology integrates pulsatile hormone dynamics, receptor pharmacology, enzyme kinetics of hormone synthesis, intracellular signaling cascades, and pathophysiologic disruption of feedback loops across thyroid, adrenal, pancreatic, calcium, and growth hormone axes.',
      explanation: `## Advanced Endocrine Axis Physiology

### Hypothalamic-Pituitary Dynamics

**Pulsatile secretion is essential for axis function:**
- GnRH pulses every 60-90 min maintain gonadotroph responsiveness; continuous GnRH paradoxically downregulates LH/FSH (basis for GnRH agonist therapy)
- CRH/ACTH pulsatility follows ultradian (90 min) and circadian rhythms
- Disrupted pulsatility is a hallmark of hypothalamic dysfunction

**Anterior pituitary transcription factors:**
- Pit-1: specifies somatotrophs (GH), lactotrophs (PRL), thyrotrophs (TSH)
- TPIT: specifies corticotrophs (ACTH)
- SF-1: specifies gonadotrophs (LH/FSH)
- Mutations cause combined pituitary hormone deficiencies

### HPT Axis: Advanced Thyroid Physiology

**Wolff-Chaikoff effect**: Acute excess iodide transiently inhibits organification (autoregulatory protection against thyrotoxicosis). Escape occurs within days via NIS downregulation. Failure to escape -> iodine-induced hypothyroidism (seen in Hashimoto patients).

**Jod-Basedow phenomenon**: Excess iodide triggers thyrotoxicosis in patients with autonomous thyroid tissue (multinodular goiter, Graves).

**Deiodinase regulation:**
- D2 upregulated in hypothyroidism (maintains local T3 in brain, pituitary)
- D3 upregulated in illness ("sick euthyroid" / non-thyroidal illness syndrome)
- D1 inhibited by propylthiouracil (PTU), amiodarone
- Selenium is a cofactor for all deiodinases

**Thyroid hormone receptor (TR) isoforms:**
- TR-alpha1: predominates in heart, bone, brain -> mediates chronotropic and metabolic effects
- TR-beta1: predominates in liver -> mediates cholesterol metabolism, TSH feedback
- TR-beta2: pituitary and hypothalamus -> mediates TSH/TRH negative feedback
- Resistance to thyroid hormone (RTH): mutations in TR-beta -> elevated T3/T4 with non-suppressed TSH

### HPA Axis: Cortisol Pathophysiology

**11-beta-hydroxysteroid dehydrogenase (11B-HSD):**
- 11B-HSD1 (liver, adipose): converts cortisone -> cortisol (amplifies local glucocorticoid action)
- 11B-HSD2 (kidney): converts cortisol -> cortisone (protects mineralocorticoid receptor from cortisol)
- 11B-HSD2 deficiency or inhibition (licorice) -> apparent mineralocorticoid excess -> hypertension, hypokalemia

**Adrenal steroidogenesis zones:**
- Zona glomerulosa: aldosterone (regulated by RAAS and K+, NOT ACTH-dependent long-term)
- Zona fasciculata: cortisol (ACTH-dependent)
- Zona reticularis: DHEA/androgens (ACTH-dependent)
- StAR protein: rate-limiting cholesterol transport into mitochondria

**Dexamethasone suppression testing:**
- Low-dose (1 mg overnight): screens for Cushing syndrome; cortisol should suppress to <1.8 mcg/dL
- High-dose (8 mg): differentiates pituitary (Cushing disease, suppresses) from ectopic ACTH (does not suppress)
- CRH stimulation: pituitary adenomas respond; ectopic sources do not

### Pancreatic Islet Advanced Physiology

**Incretin effect**: Oral glucose produces a greater insulin response than equivalent IV glucose due to gut hormones:
- **GLP-1** (ileum L-cells): augments glucose-dependent insulin secretion, suppresses glucagon, delays gastric emptying, promotes satiety
- **GIP** (duodenum K-cells): augments insulin secretion
- Both rapidly degraded by **DPP-4** (basis for DPP-4 inhibitors and GLP-1 receptor agonists)

**Beta cell failure in Type 2 diabetes progression:**
1. Insulin resistance increases demand
2. Compensatory beta cell hyperplasia (hyperinsulinemia)
3. Glucotoxicity and lipotoxicity impair beta cell function
4. Islet amyloid polypeptide (IAPP/amylin) aggregation -> beta cell apoptosis
5. Progressive secretory failure

**Counter-regulatory responses to hypoglycemia (hierarchy):**
1. Decreased insulin (glucose <80 mg/dL)
2. Increased glucagon (glucose <65 mg/dL)
3. Increased epinephrine (glucose <55 mg/dL)
4. Increased cortisol and GH (glucose <55 mg/dL, delayed)
5. Symptoms/autonomic response (glucose <50 mg/dL)
- In T1DM, glucagon response is lost early; epinephrine response blunted over time -> **hypoglycemia unawareness**

### Calcium Homeostasis: Advanced Mechanisms

**PTH signal transduction:**
- PTH receptor (PTH1R): G-protein coupled, activates both Gs (cAMP/PKA) and Gq (PLC/IP3/Ca2+) pathways
- Continuous PTH exposure -> net bone resorption (secondary hyperparathyroidism)
- Intermittent/pulsatile PTH -> net bone formation (basis for teriparatide therapy)

**FGF23 axis** (the "missing" calcium/phosphate regulator):
- Produced by osteocytes in response to high phosphate and calcitriol
- Actions: decreases renal phosphate reabsorption (downregulates NaPi-IIa/IIc), suppresses 1-alpha-hydroxylase, suppresses PTH
- Requires co-receptor **Klotho** for signaling
- Elevated in CKD -> contributes to phosphate retention, vitamin D deficiency, and secondary hyperparathyroidism

**Vitamin D beyond calcium:**
- VDR expressed in immune cells, pancreatic beta cells, myocytes
- Immunomodulatory: promotes tolerogenic dendritic cells, regulatory T cells
- Epidemiologic associations with autoimmunity, cancer, cardiovascular disease

### GH-IGF-1 Axis: Detailed Regulation

**GH receptor signaling:**
- GH binds GHR (a cytokine receptor) -> JAK2 activation -> STAT5 phosphorylation -> IGF-1 gene transcription
- SOCS proteins (suppressors of cytokine signaling) provide negative feedback on JAK-STAT
- GH also activates MAPK and PI3K pathways

**IGF-1 bioavailability:**
- >95% circulating IGF-1 is bound to IGFBPs (mainly IGFBP-3 + ALS ternary complex)
- IGFBP-3 and ALS are GH-dependent
- Free IGF-1 is the active fraction
- IGF-1 acts via IGF-1R (tyrosine kinase, homologous to insulin receptor)

**Acromegaly pathophysiology:** GH-secreting pituitary adenoma -> elevated GH and IGF-1 -> soft tissue overgrowth, insulin resistance, cardiomyopathy, increased colonic polyp risk. Diagnosis: elevated IGF-1 + failure to suppress GH on oral glucose tolerance test.`,
      keyTerms: [
        { term: 'Wolff-Chaikoff effect', definition: 'Autoregulatory inhibition of thyroid hormone organification by acute iodide excess; protects against iodine-induced thyrotoxicosis' },
        { term: '11B-HSD2', definition: '11-beta-hydroxysteroid dehydrogenase type 2; converts cortisol to inactive cortisone in the kidney, protecting the mineralocorticoid receptor from glucocorticoid activation' },
        { term: 'incretin effect', definition: 'Greater insulin response to oral vs. IV glucose mediated by gut hormones GLP-1 and GIP; exploited by DPP-4 inhibitors and GLP-1 receptor agonists' },
        { term: 'FGF23', definition: 'Fibroblast growth factor 23; phosphaturic hormone from osteocytes requiring Klotho co-receptor; suppresses renal phosphate reabsorption and vitamin D activation' },
        { term: 'StAR protein', definition: 'Steroidogenic acute regulatory protein; mediates rate-limiting transport of cholesterol into mitochondria for steroidogenesis' },
        { term: 'hypoglycemia unawareness', definition: 'Loss of autonomic warning symptoms during hypoglycemia due to blunted counter-regulatory epinephrine response after recurrent hypoglycemia in diabetes' },
        { term: 'teriparatide', definition: 'Recombinant PTH(1-34) given as intermittent subcutaneous injections to stimulate net bone formation; paradoxical anabolic effect of pulsatile PTH vs. catabolic effect of continuous PTH' },
      ],
      clinicalNotes: 'The Wolff-Chaikoff effect explains why iodinated contrast and amiodarone can cause hypothyroidism in susceptible patients, while the Jod-Basedow phenomenon explains iodine-induced thyrotoxicosis. The FGF23-Klotho axis is a paradigm shift in understanding CKD-mineral bone disorder: elevated FGF23 is the earliest biomarker, preceding phosphate elevation and PTH rise. GLP-1 receptor agonists (semaglutide, tirzepatide) have transformed T2DM management with demonstrated cardiovascular and weight-loss benefits beyond glucose lowering.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge endocrine physiology encompasses single-cell transcriptomics of pituitary and islet heterogeneity, precision medicine approaches to thyroid and adrenal disorders, novel pharmacologic targets in the GLP-1/GIP/glucagon receptor space, and emerging roles of FGF23-Klotho and bone-derived hormones in systemic metabolism.',
      explanation: `## Precision Endocrine Physiology

### Pituitary: Single-Cell and Molecular Insights

**Single-cell RNA sequencing of the anterior pituitary** has revealed extensive cellular heterogeneity beyond the classic five cell types:
- Multi-hormonal progenitor cells (SOX2+) capable of transdifferentiation
- Folliculostellate cells as paracrine regulators (IL-6, follistatin, VEGF)
- Transition states between cell lineages explain mixed-secreting adenomas

**Pituitary adenoma molecular classification (2022 WHO):** PIT1-lineage (somatotroph, lactotroph, thyrotroph), TPIT-lineage (corticotroph), and SF1-lineage (gonadotroph, most common non-functioning) tumors. Molecular subtyping predicts behavior better than immunohistochemistry alone.

### Thyroid: Precision Diagnostics and Molecular Targets

**Molecular testing in thyroid nodules:** Afirma GSC (rule-out) and ThyroSeq v3 (112-gene panel, rule-in/out) reduce unnecessary surgeries for indeterminate nodules. Key targets: BRAF V600E, RAS, RET/PTC, TERT promoter. BRAF V600E + TERT promoter = highest-risk PTC signature.

**Thyroid hormone selective modulators:** Resmetirom (TR-beta selective agonist) approved for NASH with liver fibrosis (2024); exploits hepatic TR-beta selectivity to reduce liver fat without cardiac stimulation. Earlier TR-beta agonists (eprotirome) failed due to cartilage toxicity.

### HPA Axis: Emerging Therapeutics

**Osilodrostat**: potent 11-beta-hydroxylase inhibitor for Cushing disease, superior cortisol normalization vs. historical controls (LINC-3, LINC-4 trials).

**Relacorilant**: selective glucocorticoid receptor modulator (dissociates anti-inflammatory from metabolic effects); under investigation for Cushing syndrome without progesterone receptor activity (unlike mifepristone).

**Adrenal incidentaloma:** Autonomous cortisol secretion (ACS, DST cortisol >1.8 mcg/dL) carries cardiometabolic risk even without overt Cushing; ESE 2023 guidelines recommend metabolic screening and individualized surgical consideration.

### Islet Biology: Frontiers

**Beta cell heterogeneity:**
- scRNA-seq identifies beta cell subtypes with different insulin secretory capacity and stress resilience
- "Hub" beta cells (~1-10%) act as pacemakers coordinating Ca2+ oscillations across the islet
- Beta cell dedifferentiation (rather than apoptosis alone) contributes to T2DM secretory failure
- ALDH+ beta cells are more proliferative and stress-resistant

**Multi-agonist pharmacology:** Tirzepatide (GIP/GLP-1 dual agonist) showed superior A1c and weight outcomes vs. semaglutide (SURPASS trials). Retatrutide (GLP-1/GIP/glucagon triple agonist) achieved up to 24% weight loss in phase 2. CagriSema (amylin + GLP-1) targets complementary satiety pathways.

**Islet transplantation and stem cell therapy:** Donislecel (Lantidra, 2023) is the first FDA-approved allogeneic islet cell therapy for T1DM with severe hypoglycemia. Stem cell-derived beta cells (VX-880, VX-264) and CRISPR-engineered hypoimmunogenic beta cells represent the frontier toward a cure without chronic immunosuppression.

### Calcium and Mineral Metabolism: Cutting Edge

**FGF23-Klotho in CKD:**
- FGF23 rises earliest in CKD (stage 2) before phosphate or PTH changes
- FGF23 directly causes LVH via FGFR4 activation (Klotho-independent)
- Anti-FGF23 antibody (burosumab) approved for X-linked hypophosphatemia; normalizes phosphate and heals rickets
- Klotho deficiency accelerates aging phenotype; Klotho supplementation extends lifespan in animal models

**PTH-based therapeutics evolution:**
- Teriparatide (PTH 1-34): intermittent anabolic
- Abaloparatide (PTHrP analog): similar anabolic effect with less hypercalcemia risk
- TransCon PTH (palopegteriparatide): long-acting PTH prodrug for hypoparathyroidism (approved 2024)
- PTH receptor signaling duration determines bone formation vs. resorption: brief cAMP pulse is anabolic; sustained signaling is catabolic

**Osteocyte as endocrine cell:** Sclerostin (SOST) inhibits Wnt -> decreases bone formation; romosozumab (anti-sclerostin) is the most potent anabolic osteoporosis therapy. RANKL/OPG integrates immune and skeletal signaling; denosumab (anti-RANKL) is both antiresorptive and immunomodulatory.

### GH-IGF-1 Axis: Current Practice

**Long-acting GH formulations:** Somapacitan and lonapegsomatropin (weekly dosing) reduce injection burden from 365 to 52/year, with non-inferior efficacy in REAL trials.

**Acromegaly management:** Transsphenoidal surgery (80-90% cure for microadenomas), somatostatin receptor ligands (octreotide LAR, lanreotide, pasireotide), GH receptor antagonist pegvisomant (normalizes IGF-1 in >90%), and oral octreotide (Mycapssa) as the first oral somatostatin analog.

**GH and aging:** GH declines with age ("somatopause"), but replacement increases insulin resistance and possibly cancer risk. GH/IGF-1 deficiency extends lifespan in animal models; current evidence does not support GH for anti-aging.`,
      keyTerms: [
        { term: 'retatrutide', definition: 'Triple GLP-1/GIP/glucagon receptor agonist showing unprecedented weight loss in clinical trials; the glucagon component adds thermogenic and lipolytic effects' },
        { term: 'burosumab', definition: 'Anti-FGF23 monoclonal antibody approved for X-linked hypophosphatemia; normalizes phosphate by blocking FGF23-mediated phosphate wasting and vitamin D suppression' },
        { term: 'romosozumab', definition: 'Anti-sclerostin monoclonal antibody; the most potent bone anabolic agent available, with dual anabolic and anti-resorptive effects for osteoporosis' },
        { term: 'resmetirom', definition: 'Thyroid hormone receptor beta-selective agonist approved for NASH with liver fibrosis; exploits hepatic TR-beta selectivity to reduce liver fat without cardiac stimulation' },
        { term: 'hub beta cells', definition: 'A small subset (~1-10%) of beta cells that act as pacemakers, coordinating calcium oscillations and insulin secretion across the pancreatic islet' },
        { term: 'donislecel', definition: 'First FDA-approved allogeneic islet cell therapy (Lantidra) for Type 1 diabetes with severe hypoglycemia; donor islets infused into hepatic portal vein' },
        { term: 'osilodrostat', definition: 'Potent 11-beta-hydroxylase inhibitor for endogenous Cushing syndrome; blocks the final step of cortisol synthesis in the adrenal cortex' },
      ],
      clinicalNotes: `Key translational developments:

1. **Multi-agonist obesity/diabetes pharmacology** (tirzepatide, retatrutide, CagriSema) represents a paradigm shift; weight loss approaching bariatric surgery outcomes with pharmacotherapy alone is reshaping treatment algorithms.

2. **FGF23** is now recognized as an independent cardiovascular risk factor in CKD; it directly causes LVH through FGFR4, independent of phosphate. Burosumab has transformed XLH management but is not indicated for CKD-related FGF23 elevation.

3. **Stem cell-derived beta cells** are the most promising avenue toward a cure for T1DM; encapsulation and immune-evasion strategies are critical for eliminating immunosuppression requirements.

4. **Molecular thyroid nodule testing** has dramatically reduced unnecessary thyroid surgeries; the combination of BRAF V600E and TERT promoter mutations identifies the highest-risk differentiated thyroid cancers.

5. **Romosozumab** offers a unique 12-month anabolic window followed by transition to antiresorptive therapy; the ARCH trial showed superior fracture reduction vs. alendronate but with a small cardiovascular safety signal requiring careful patient selection.`,
    },
  },

  media: [
    {
      id: 'hpt-axis-diagram',
      type: 'diagram',
      filename: 'hpt-axis-feedback.svg',
      title: 'Hypothalamic-Pituitary-Thyroid Axis',
      description: 'Diagram showing TRH-TSH-T3/T4 cascade with negative feedback loops',
    },
    {
      id: 'hpa-axis-diagram',
      type: 'diagram',
      filename: 'hpa-axis-feedback.svg',
      title: 'Hypothalamic-Pituitary-Adrenal Axis',
      description: 'CRH-ACTH-cortisol cascade with circadian rhythm overlay',
    },
    {
      id: 'insulin-secretion-mechanism',
      type: 'diagram',
      filename: 'beta-cell-insulin-secretion.svg',
      title: 'Beta Cell Insulin Secretion Mechanism',
      description: 'GLUT2-glucokinase-KATP channel-calcium influx pathway in pancreatic beta cells',
    },
    {
      id: 'calcium-homeostasis-diagram',
      type: 'diagram',
      filename: 'calcium-homeostasis-pth-vitd.svg',
      title: 'Calcium Homeostasis',
      description: 'Integrated PTH, vitamin D, calcitonin, and FGF23 regulation of calcium and phosphate across bone, kidney, and intestine',
    },
  ],

  citations: [
    {
      id: 'guyton-endocrine',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '76-83',
    },
    {
      id: 'williams-endocrinology',
      type: 'textbook',
      title: 'Williams Textbook of Endocrinology',
      authors: ['Melmed S', 'Auchus RJ', 'Goldfine AB'],
      source: 'Elsevier',
      chapter: '1-30',
    },
    {
      id: 'costanzo-physiology',
      type: 'textbook',
      title: 'Physiology',
      authors: ['Costanzo LS'],
      source: 'Elsevier',
      chapter: '9',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-hormone-basics', targetType: 'concept', relationship: 'parent', label: 'Hormone Basics' },
    { targetId: 'physiology-thyroid-function', targetType: 'process', relationship: 'related', label: 'Thyroid Function' },
    { targetId: 'physiology-adrenal-function', targetType: 'process', relationship: 'related', label: 'Adrenal Function' },
    { targetId: 'condition-diabetes-mellitus', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Mellitus' },
    { targetId: 'condition-osteoporosis', targetType: 'condition', relationship: 'see-also', label: 'Osteoporosis' },
    { targetId: 'condition-cushing-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Cushing Syndrome' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['physiology', 'endocrinology', 'metabolism', 'bone metabolism'],
    keywords: [
      'hypothalamic-pituitary axis', 'thyroid hormone', 'cortisol', 'HPA axis',
      'insulin', 'glucagon', 'calcium homeostasis', 'PTH', 'vitamin D',
      'growth hormone', 'IGF-1', 'feedback loops', 'FGF23', 'GLP-1',
      'incretin', 'deiodinase', 'ACTH', 'TSH',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hormoneSignaling;
