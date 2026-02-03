/**
 * Adrenal Medulla - Anatomy
 *
 * The inner portion of the adrenal gland producing catecholamines:
 * epinephrine (adrenaline) and norepinephrine for the fight-or-flight response.
 */

import { EducationalContent } from '../../types';

export const ADRENAL_MEDULLA_ANATOMY: EducationalContent = {
  id: 'anatomy-adrenal-medulla',
  type: 'structure',
  name: 'Adrenal Medulla',
  alternateNames: ['Adrenal medullary tissue', 'Suprarenal medulla', 'Chromaffin tissue'],
  fmaId: 'FMA:15633',

  levels: {
    1: {
      level: 1,
      summary: 'The adrenal medulla is the inner part of your adrenal glands that releases adrenaline to help you react quickly to danger or excitement.',
      explanation: `Inside each adrenal gland (on top of your kidneys) is a special area called the medulla. Think of it like the yolk inside an egg - the outer part is the cortex, and the inner part is the medulla.

**What Does It Do?**
The adrenal medulla makes two important chemicals:

1. **Adrenaline (Epinephrine)**
   - Released when you're scared, excited, or stressed
   - Makes your heart beat faster
   - Gives you a burst of energy
   - Helps you run faster or react quickly

2. **Noradrenaline (Norepinephrine)**
   - Works with adrenaline
   - Raises blood pressure
   - Helps you stay alert and focused

**The Fight-or-Flight Response:**
When you're in danger or really excited (like on a roller coaster!), your brain tells the adrenal medulla to release adrenaline. This is called the "fight-or-flight" response because it prepares your body to either fight the danger or run away from it.`,
      keyTerms: [
        { term: 'adrenaline', definition: 'A hormone that prepares your body for action when you are scared or excited' },
        { term: 'medulla', definition: 'The inner part of an organ' },
        { term: 'fight-or-flight', definition: 'Your body\'s automatic response to danger that gives you energy to react quickly' },
      ],
      analogies: [
        'The adrenal medulla is like an emergency alarm system - when danger is detected, it floods your body with adrenaline.',
        'Adrenaline is like pressing the turbo button in a video game - it gives you a sudden boost of speed and power.',
      ],
      examples: [
        'When you almost fall off your bike, the sudden rush you feel is adrenaline from your adrenal medulla.',
        'Before giving a speech, you might feel your heart racing - that is your adrenal medulla releasing adrenaline.',
      ],
    },
    2: {
      level: 2,
      summary: 'The adrenal medulla is the central portion of the adrenal gland composed of modified neural tissue (chromaffin cells) that secretes catecholamines (epinephrine and norepinephrine) directly into the bloodstream in response to sympathetic nervous system stimulation.',
      explanation: `**Location and Structure:**
The adrenal medulla occupies the central 10-20% of each adrenal gland. Unlike the surrounding cortex (which is glandular tissue), the medulla is actually modified nervous tissue.

**Key Difference from Cortex:**
- Cortex: Makes steroid hormones slowly, effects last hours
- Medulla: Makes catecholamines rapidly, effects last seconds to minutes

**Hormones Produced:**

| Hormone | % of Total | Main Effects |
|---------|------------|--------------|
| Epinephrine (Adrenaline) | 80% | Heart rate up, airways open, energy release |
| Norepinephrine | 20% | Blood vessel constriction, blood pressure up |

**How It's Controlled:**
The adrenal medulla is controlled directly by the sympathetic nervous system:
1. Stress/danger detected by brain
2. Sympathetic nerves send signal to adrenal medulla
3. Chromaffin cells release catecholamines into blood
4. Effects felt within seconds throughout body

**Chromaffin Cells:**
The medulla contains special cells called chromaffin cells, named because they turn brown when exposed to chromium salts. These cells are essentially modified neurons that release hormones instead of neurotransmitters.

**Blood Supply:**
The medulla receives blood that has already passed through the cortex, exposing it to high concentrations of cortisol. This is important because cortisol is needed to make epinephrine.`,
      keyTerms: [
        { term: 'chromaffin cells', definition: 'Modified nerve cells in the adrenal medulla that produce catecholamines' },
        { term: 'catecholamines', definition: 'A group of hormones including epinephrine and norepinephrine', pronunciation: 'kat-eh-COAL-uh-meens' },
        { term: 'epinephrine', definition: 'The main adrenal medulla hormone (also called adrenaline)', pronunciation: 'ep-ih-NEF-rin' },
        { term: 'norepinephrine', definition: 'A catecholamine that raises blood pressure (also called noradrenaline)', pronunciation: 'nor-ep-ih-NEF-rin' },
        { term: 'sympathetic nervous system', definition: 'The part of the nervous system that controls the fight-or-flight response' },
      ],
      analogies: [
        'Chromaffin cells are like neurons that traded their wire connections for a broadcasting system - instead of sending signals through nerves, they release hormones into the bloodstream.',
      ],
    },
    3: {
      level: 3,
      summary: 'The adrenal medulla is a neuroendocrine organ derived from neural crest cells, containing chromaffin cells that synthesize, store, and release catecholamines via exocytosis in response to preganglionic sympathetic stimulation via acetylcholine acting on nicotinic receptors.',
      explanation: `**Embryology:**
- Derives from neural crest cells (same origin as sympathetic ganglia)
- Chromaffin cells are modified postganglionic sympathetic neurons
- Migration to adrenal gland during weeks 7-8 of gestation
- Medulla surrounded by cortex during development

**Anatomical Organization:**

*Cell Types:*
1. **Epinephrine-secreting cells** (~80%):
   - Contain enzyme PNMT for epinephrine synthesis
   - PNMT requires cortisol (from cortex) for expression
   - Granules appear less dense on electron microscopy

2. **Norepinephrine-secreting cells** (~20%):
   - Lack PNMT enzyme
   - Granules appear more electron-dense

3. **Sustentacular cells**:
   - Supporting cells, S-100 positive
   - Similar to Schwann cells

**Catecholamine Biosynthesis Pathway:**
\`\`\`
Tyrosine → L-DOPA → Dopamine → Norepinephrine → Epinephrine
   (TH)    (AADC)     (DBH)         (PNMT)
\`\`\`

- TH (tyrosine hydroxylase): Rate-limiting step
- AADC: Aromatic amino acid decarboxylase
- DBH: Dopamine β-hydroxylase (in vesicles)
- PNMT: Phenylethanolamine N-methyltransferase (cytoplasm)

**Storage and Release:**

*Chromaffin Granules:*
- Membrane-bound vesicles storing catecholamines
- Contain: Catecholamines, ATP, chromogranins, enkephalins
- Catecholamine:ATP ratio approximately 4:1
- Release via calcium-dependent exocytosis

*Release Mechanism:*
1. Preganglionic sympathetic fibers (splanchnic nerve) synapse on chromaffin cells
2. ACh released → nicotinic receptor activation
3. Membrane depolarization → Ca²⁺ influx
4. Vesicle fusion with plasma membrane
5. Catecholamines released into fenestrated capillaries

**Blood Supply:**
- Arterial supply from cortical arteries percolating through cortex
- Medullary arteries provide some direct supply
- Central medullary vein drains to adrenal vein
- Blood from cortex carries high cortisol concentration → PNMT induction

**Cortical-Medullary Interaction:**
- Cortisol is required for PNMT expression
- Without cortisol: Primarily norepinephrine production
- Explains why adrenal medulla (not extra-adrenal chromaffin tissue) makes epinephrine`,
      keyTerms: [
        { term: 'PNMT', definition: 'Phenylethanolamine N-methyltransferase; enzyme converting norepinephrine to epinephrine, requires cortisol' },
        { term: 'tyrosine hydroxylase', definition: 'Rate-limiting enzyme in catecholamine synthesis converting tyrosine to L-DOPA' },
        { term: 'chromaffin granules', definition: 'Vesicles storing catecholamines, ATP, and chromogranins in chromaffin cells' },
        { term: 'chromogranins', definition: 'Proteins co-stored and co-released with catecholamines; chromogranin A used as tumor marker' },
        { term: 'splanchnic nerve', definition: 'Preganglionic sympathetic nerve innervating adrenal medulla' },
      ],
      clinicalNotes: 'Pheochromocytoma arises from chromaffin cells and produces excess catecholamines. Unlike normal medulla (80% epinephrine), pheochromocytomas often produce predominantly norepinephrine due to relative cortisol deficiency within the tumor. Plasma and urinary metanephrines are used for diagnosis. Extra-adrenal chromaffin tumors (paragangliomas) typically produce only norepinephrine as they lack cortisol exposure for PNMT activity.',
    },
    4: {
      level: 4,
      summary: 'The adrenal medulla functions as a sympathetic amplifier with chromaffin cell catecholamine synthesis regulated at multiple levels including enzyme expression, substrate availability, and vesicular packaging, with clinical significance in pheochromocytoma and disorders of catecholamine metabolism.',
      explanation: `**Detailed Catecholamine Regulation:**

*Tyrosine Hydroxylase (TH) Regulation:*
- Short-term: Phosphorylation increases activity (PKA, CaMKII)
- Long-term: Transcriptional upregulation by stress
- End-product inhibition by catecholamines
- Requires tetrahydrobiopterin (BH4) as cofactor

*Vesicular Monoamine Transporter (VMAT):*
- VMAT1 in chromaffin cells transports catecholamines into granules
- Uses H⁺ gradient (V-ATPase) to drive transport
- Target of reserpine (depletes vesicles)

*Cortisol-PNMT Axis:*
- Cortisol induces PNMT gene transcription
- GR binding to PNMT promoter required
- Central medullary vein blood contains ~100x systemic cortisol
- Explains adrenal vs. extra-adrenal catecholamine profile

**Catecholamine Metabolism:**

*Enzymatic Degradation:*
1. **MAO (Monoamine oxidase)**:
   - MAO-A in neural tissue, MAO-B in peripheral tissue
   - Located in outer mitochondrial membrane
   - Produces intermediate aldehydes

2. **COMT (Catechol-O-methyltransferase)**:
   - Cytoplasmic and membrane-bound forms
   - Methylates catecholamines and metabolites

*Major Metabolites:*
\`\`\`
Epinephrine → Metanephrine → VMA
Norepinephrine → Normetanephrine → VMA

Epinephrine → DHMA → VMA
Norepinephrine → DHMA → VMA
\`\`\`

- Metanephrines: COMT products (most sensitive for pheochromocytoma)
- VMA (vanillylmandelic acid): Final urinary metabolite
- HVA (homovanillic acid): Dopamine metabolite

**Adrenergic Receptor Subtypes:**

| Receptor | G Protein | Location | Effect |
|----------|-----------|----------|--------|
| α1 | Gq | Vascular smooth muscle | Vasoconstriction |
| α2 | Gi | Presynaptic, pancreatic β cells | Feedback inhibition, decreased insulin |
| β1 | Gs | Heart, kidney | Increased HR/contractility, renin release |
| β2 | Gs | Bronchi, liver, skeletal muscle vessels | Bronchodilation, glycogenolysis, vasodilation |
| β3 | Gs | Adipose tissue | Lipolysis |

*Epinephrine vs. Norepinephrine Selectivity:*
- Epinephrine: Potent at β1, β2, α1
- Norepinephrine: Potent at α1, β1; weak at β2
- β2 effects (vasodilation, bronchodilation) primarily from epinephrine

**Sympathoadrenal Function Testing:**

*Glucagon Stimulation Test:*
- For suspected pheochromocytoma (rarely used now)
- Glucagon 1-2 mg IV → catecholamine release
- Positive if BP rises >20/15 mmHg or plasma catecholamines rise >3x

*Clonidine Suppression Test:*
- Clonidine (α2 agonist) suppresses central sympathetic outflow
- Normal: Plasma catecholamines decrease >50%
- Pheochromocytoma: Autonomous secretion, no suppression

**Development of Chromaffin Tissue:**

*Extra-Adrenal Chromaffin Tissue:*
- Organ of Zuckerkandl: Para-aortic chromaffin tissue
- Located near origin of inferior mesenteric artery
- Most prominent in fetal life, regresses by age 3
- Site of most extra-adrenal paragangliomas in children

*Chromaffin Cell Lineage:*
- Neural crest → Sympathoadrenal progenitor
- Transcription factors: Mash1/Ascl1, Phox2b, Hand2
- Differentiation determined by local signals (BMPs, glucocorticoids)`,
      keyTerms: [
        { term: 'VMAT', definition: 'Vesicular monoamine transporter; transports catecholamines into storage granules' },
        { term: 'metanephrines', definition: 'COMT-methylated catecholamine metabolites; most sensitive markers for pheochromocytoma' },
        { term: 'VMA', definition: 'Vanillylmandelic acid; final urinary catecholamine metabolite' },
        { term: 'organ of Zuckerkandl', definition: 'Para-aortic chromaffin body, common site of extra-adrenal paragangliomas' },
        { term: 'clonidine suppression test', definition: 'Test using alpha-2 agonist to differentiate autonomous pheochromocytoma from other catecholamine excess states' },
      ],
      clinicalNotes: 'Plasma free metanephrines are the most sensitive test for pheochromocytoma (96-100% sensitivity). Elevated normetanephrine with normal metanephrine suggests norepinephrine-secreting tumor or extra-adrenal paraganglioma. Dopamine-secreting tumors (elevated HVA, methoxytyramine) are associated with malignancy. Alpha-blockade (phenoxybenzamine or doxazosin) must be initiated before beta-blockade to prevent unopposed alpha stimulation.',
    },
    5: {
      level: 5,
      summary: 'The adrenal medulla integrates developmental, molecular, and functional neuroendocrine biology with clinical applications in pheochromocytoma/paraganglioma diagnosis, genetic syndrome recognition, perioperative management, and emerging understanding of chromaffin cell plasticity.',
      explanation: `**Genetic Basis of Pheochromocytoma/Paraganglioma:**

*Hereditary Syndromes (~40% of cases):*

| Gene | Syndrome | Phenotype | Location | Malignancy Risk |
|------|----------|-----------|----------|-----------------|
| RET | MEN2A/2B | Bilateral pheo, MTC | Adrenal | Low (<5%) |
| VHL | VHL | Pheo/PGL, RCC, hemangioblastoma | Adrenal/extra-adrenal | Low |
| NF1 | Neurofibromatosis 1 | Pheo, neurofibromas | Adrenal | Low |
| SDHB | PGL4 | Extra-adrenal PGL, pheo | Extra-adrenal > adrenal | High (30-50%) |
| SDHD | PGL1 | Head/neck PGL | Head/neck | Low |
| SDHC | PGL3 | Head/neck PGL | Head/neck | Low |
| SDHA/SDHAF2 | Rare | Variable | Variable | Variable |
| MAX | Hereditary pheo | Bilateral pheo | Adrenal | Moderate |
| TMEM127 | Hereditary pheo | Pheo, RCC | Adrenal | Low |

*SDH Mutations and Metabolic Rewiring:*
- SDH: Succinate dehydrogenase (Complex II of electron transport chain)
- Loss of SDH → Succinate accumulation
- Succinate inhibits PHDs → HIF stabilization (pseudohypoxia)
- HIF activation → glycolytic shift, angiogenesis, aggressive behavior
- SDHB-mutated tumors have worst prognosis

**Biochemical Phenotypes:**

*Adrenergic (Epinephrine-producing):*
- Associated with RET, NF1, some VHL
- Often paroxysmal symptoms
- Express PNMT (cortisol-dependent)

*Noradrenergic (Norepinephrine-producing):*
- Associated with SDHx, some VHL
- More sustained hypertension
- Often extra-adrenal

*Dopaminergic:*
- Elevated methoxytyramine
- Associated with SDHB, metastatic disease
- May be biochemically silent

**Advanced Diagnostic Algorithm:**

1. **Biochemical Testing:**
   - Plasma free metanephrines (>3x ULN = high specificity)
   - 24-hour urine fractionated metanephrines + catecholamines
   - Methoxytyramine (dopamine-secreting tumors)

2. **Imaging Protocol:**
   - CT or MRI adrenals (T2 hyperintense "lightbulb" sign)
   - If extra-adrenal suspected: 123I-MIBG scintigraphy, 68Ga-DOTATATE PET
   - 18F-FDOPA or 18F-FDG PET for SDHB-related/metastatic

3. **Genetic Testing:**
   - All patients <50 years
   - Extra-adrenal, bilateral, multifocal, or malignant
   - Family history
   - Panel testing: SDHx, VHL, RET, NF1, MAX, TMEM127, FH

**Perioperative Management:**

*Preoperative Blockade Protocol:*
1. Alpha-blockade FIRST (7-14 days before surgery):
   - Phenoxybenzamine: 10 mg BID, titrate to orthostasis
   - OR Doxazosin: 2-8 mg daily
   - Target: Seated BP <130/80, standing SBP >90

2. Beta-blockade AFTER alpha established:
   - Only if tachycardia or arrhythmia
   - Propranolol, atenolol, or labetalol (combined α/β)
   - NEVER before alpha blockade (risk of hypertensive crisis)

3. Volume expansion:
   - High salt diet, IV fluids if needed
   - Chronic catecholamine excess causes volume depletion

*Intraoperative Management:*
- Invasive arterial monitoring mandatory
- Central venous access recommended
- Magnesium sulfate infusion (catecholamine antagonist)
- Short-acting antihypertensives: Nicardipine, clevidipine, phentolamine
- Avoid: Histamine-releasing drugs, metoclopramide, ephedrine

*Postoperative Considerations:*
- Hypotension (24-48 hours from catecholamine withdrawal)
- Hypoglycemia (removing insulin resistance)
- Residual hypertension suggests incomplete resection or metastases

**Metastatic Pheochromocytoma:**

*Diagnosis:*
- Metastases to non-chromaffin tissue (bone, liver, lung, lymph nodes)
- SDHB mutations confer highest risk
- No histologic features reliably predict malignancy

*Treatment Options:*
- Surgery: Resection of resectable metastases
- 131I-MIBG therapy: For MIBG-avid tumors
- Peptide receptor radionuclide therapy (PRRT): 177Lu-DOTATATE
- Cytotoxic chemotherapy: CVD (cyclophosphamide, vincristine, dacarbazine)
- Tyrosine kinase inhibitors: Sunitinib (limited evidence)
- Alpha-methylparatyrosine (metyrosine): Blocks catecholamine synthesis

**Emerging Research:**

*HIF-2α Inhibitors:*
- Belzutifan: FDA-approved for VHL-associated tumors
- Under investigation for SDH-mutated PPGL
- Targets pseudohypoxia pathway

*Chromaffin Cell Plasticity:*
- Chromaffin cells can dedifferentiate under stress
- Potential regenerative capacity after adrenalectomy
- May contribute to recurrence patterns

*Liquid Biopsy:*
- Circulating tumor DNA for monitoring
- Potential for early recurrence detection`,
      keyTerms: [
        { term: 'SDHB', definition: 'Succinate dehydrogenase subunit B; mutation associated with aggressive, metastatic paragangliomas' },
        { term: 'pseudohypoxia', definition: 'HIF stabilization without true hypoxia, seen in SDH-mutated tumors due to succinate accumulation' },
        { term: 'methoxytyramine', definition: 'Dopamine metabolite; elevation suggests dopamine-secreting tumor and higher malignancy risk' },
        { term: '68Ga-DOTATATE', definition: 'PET tracer targeting somatostatin receptors; useful for paraganglioma localization' },
        { term: 'metyrosine', definition: 'Alpha-methylparatyrosine; tyrosine hydroxylase inhibitor blocking catecholamine synthesis' },
        { term: 'belzutifan', definition: 'HIF-2α inhibitor approved for VHL-associated tumors; emerging therapy for PPGL' },
      ],
      clinicalNotes: 'All patients with pheochromocytoma/paraganglioma should undergo genetic testing given ~40% hereditary rate with implications for surveillance and family screening. SDHB mutation carriers require lifelong surveillance every 1-2 years with biochemistry and whole-body imaging. For metastatic disease, 131I-MIBG therapy achieves partial response in 30% and stabilization in another 40%. The emerging HIF pathway inhibitors represent the first mechanistically targeted therapy for SDH-mutated tumors.',
    },
  },

  media: [
    {
      id: 'adrenal-medulla-histology-1',
      type: 'histology',
      filename: 'adrenal-medulla-chromaffin.jpg',
      title: 'Adrenal Medulla Histology',
      description: 'Chromaffin cells and central medullary vein',
    },
    {
      id: 'catecholamine-pathway-1',
      type: 'diagram',
      filename: 'catecholamine-synthesis.svg',
      title: 'Catecholamine Biosynthesis',
      description: 'Pathway from tyrosine to epinephrine',
    },
  ],

  citations: [
    {
      id: 'lenders-pheo',
      type: 'article',
      title: 'Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline',
      authors: ['Lenders, JWM', 'Duh, QY', 'Eisenhofer, G'],
      source: 'Journal of Clinical Endocrinology and Metabolism',
      license: 'Copyrighted',
    },
    {
      id: 'guyton-medulla',
      type: 'textbook',
      title: 'The Adrenal Medulla and Sympathetic Nervous System',
      source: 'Guyton and Hall Textbook of Medical Physiology, 14th Edition',
      chapter: '61',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-adrenal-cortex', targetType: 'structure', relationship: 'sibling', label: 'Adrenal Cortex' },
    { targetId: 'physiology-catecholamines', targetType: 'pathway', relationship: 'related', label: 'Catecholamine Physiology' },
    { targetId: 'histology-chromaffin-cells', targetType: 'topic', relationship: 'related', label: 'Chromaffin Cell Histology' },
    { targetId: 'pathology-pheochromocytoma', targetType: 'condition', relationship: 'see-also', label: 'Pheochromocytoma' },
  ],

  tags: {
    systems: ['endocrine', 'nervous'],
    structures: ['FMA:15633', 'adrenal medulla', 'chromaffin tissue'],
    topics: ['anatomy', 'neuroendocrinology'],
    keywords: ['adrenal medulla', 'epinephrine', 'adrenaline', 'norepinephrine', 'catecholamines', 'fight-or-flight'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
