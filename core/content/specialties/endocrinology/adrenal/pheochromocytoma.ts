/**
 * Pheochromocytoma
 *
 * Comprehensive content on catecholamine-secreting tumors.
 */

import { EducationalContent } from '../../../types';

export const PHEOCHROMOCYTOMA: EducationalContent = {
  id: 'endocrine-pheochromocytoma',
  type: 'condition',
  name: 'Pheochromocytoma',
  alternateNames: ['Pheo', 'Catecholamine-secreting tumor', 'Paraganglioma (extra-adrenal)'],

  levels: {
    1: {
      level: 1,
      summary: 'A pheochromocytoma is a rare tumor that grows in the adrenal glands and releases hormones that cause sudden high blood pressure, fast heartbeat, and sweating.',
      explanation: `Your adrenal glands sit on top of your kidneys. The inner part makes hormones called adrenaline (epinephrine) and noradrenaline. These are "fight or flight" hormones that speed up your heart and raise blood pressure.

**What happens with a pheochromocytoma:**
- A tumor grows in the adrenal gland
- The tumor releases too much adrenaline
- This causes sudden "attacks" of symptoms

**Symptoms during an attack:**
- Very high blood pressure (sudden)
- Pounding or racing heart
- Heavy sweating
- Severe headache
- Feeling of panic or anxiety
- Pale skin

**Treatment:**
Surgery to remove the tumor usually cures the condition. Before surgery, patients take special blood pressure medications to keep them safe.

**Important:**
Finding and treating this tumor is important because the sudden high blood pressure can be dangerous.`,
      keyTerms: [
        { term: 'adrenaline', definition: 'A hormone that speeds up your heart and raises blood pressure during stress' },
        { term: 'tumor', definition: 'An abnormal growth of cells' },
        { term: 'adrenal gland', definition: 'A small organ on top of each kidney that makes important hormones' },
      ],
      analogies: [
        'A pheochromocytoma is like a fire alarm that goes off randomly even when there is no fire, putting the body on high alert.',
        'The hormone release is like someone pressing the gas pedal of a car when you are stopped.',
      ],
      examples: [
        'A person has sudden severe headaches with sweating and feels their heart pounding, especially during stressful moments.',
        'Someone with high blood pressure that comes and goes is tested for pheochromocytoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pheochromocytoma is a catecholamine-secreting tumor arising from adrenal medulla chromaffin cells. It presents with episodic hypertension, headache, sweating, and palpitations. Diagnosis requires biochemical confirmation followed by imaging.',
      explanation: `**What is a pheochromocytoma:**
- Tumor of the adrenal medulla (inner adrenal)
- Arises from chromaffin cells
- Secretes catecholamines (epinephrine, norepinephrine)
- Extra-adrenal tumors called paragangliomas

**Classic Triad (3 Ps):**
1. Paroxysmal hypertension
2. Palpitations
3. Perspiration (sweating)

**Additional symptoms:**
- Headache (throbbing)
- Anxiety, panic
- Pallor
- Tremor
- Nausea

**Important features:**
- Symptoms often episodic (attacks)
- Attacks last minutes to hours
- Triggers: Exercise, stress, certain foods, medications
- Some patients have sustained hypertension

**Diagnosis:**

*Biochemical (first step):*
- Plasma or 24-hour urine metanephrines
- Metanephrines are metabolites of catecholamines
- More sensitive than measuring catecholamines directly

*Imaging (after biochemical confirmation):*
- CT or MRI of abdomen
- Functional imaging (MIBG scan or PET)

**Treatment:**
1. Alpha-blocker first (phenoxybenzamine or doxazosin)
2. Then beta-blocker if needed (never beta before alpha!)
3. Surgery to remove tumor
4. Lifelong follow-up (can recur or metastasize)

**Rule of 10s (historical, now outdated):**
- About 10% are malignant
- About 10% are bilateral
- About 10% are extra-adrenal
- About 10% are hereditary
- Actual percentages vary; hereditary is closer to 30-40%`,
      keyTerms: [
        { term: 'catecholamines', definition: 'Hormones including epinephrine and norepinephrine; cause "fight or flight" response' },
        { term: 'chromaffin cells', definition: 'Specialized cells in adrenal medulla that produce and store catecholamines' },
        { term: 'metanephrines', definition: 'Breakdown products of catecholamines; used for diagnosis' },
        { term: 'paraganglioma', definition: 'Catecholamine-secreting tumor outside the adrenal gland' },
        { term: 'paroxysmal', definition: 'Occurring in sudden attacks or episodes' },
      ],
      analogies: [
        'Alpha-blockers must be given before beta-blockers because blocking beta receptors alone would leave alpha receptors unopposed, potentially worsening blood pressure.',
        'Measuring metanephrines is like looking for smoke to find fire - they are always present even between attacks.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pheochromocytoma/paraganglioma (PPGL) diagnosis relies on plasma or urinary fractionated metanephrines. Up to 40% have germline mutations requiring genetic testing. Preoperative alpha-blockade is essential, and surgical resection is curative for localized disease.',
      explanation: `**Pathophysiology:**

*Catecholamine Synthesis:*
Tyrosine → DOPA → Dopamine → Norepinephrine → Epinephrine

*Metabolism:*
- Catecholamine-O-methyltransferase (COMT) produces metanephrines
- Metanephrines are produced continuously within tumor
- Monoamine oxidase (MAO) further metabolizes to VMA

*Types of Secretion:*
- Norepinephrine-secreting: More common, higher hypertension
- Epinephrine-secreting: More tachycardia, metabolic effects
- Dopamine-secreting: May be clinically silent, often malignant

**Biochemical Diagnosis:**

| Test | Sensitivity | Specificity |
|------|-------------|-------------|
| Plasma free metanephrines | 96-100% | 85-90% |
| 24-hour urine fractionated metanephrines | 95-97% | 90-95% |
| Plasma catecholamines | 85-90% | 80-85% |

*Causes of False Positives:*
- Medications: TCAs, MAOIs, decongestants
- Acute stress, illness
- Obstructive sleep apnea
- Renal failure
- Improper collection (not supine for plasma)

*Confirmatory Testing:*
- Clonidine suppression test if borderline elevation
- Clonidine suppresses normal catecholamine release, not tumor secretion

**Imaging:**

*Anatomical:*
- CT adrenal: >90% sensitivity for tumors >1 cm
- MRI: "Lightbulb" bright on T2 (classic but not universal)

*Functional:*
- 123I-MIBG: Specific for chromaffin tissue
- 68Ga-DOTATATE PET: For metastatic workup
- 18F-FDG PET: Useful in SDH-related tumors

**Genetics:**

~40% of PPGL have germline mutations:

| Gene | Syndrome | Features |
|------|----------|----------|
| RET | MEN2 | Medullary thyroid cancer, hyperparathyroidism |
| VHL | VHL syndrome | Hemangioblastomas, renal cell cancer |
| NF1 | Neurofibromatosis | Neurofibromas, café-au-lait spots |
| SDHB/C/D | Familial paraganglioma | Head/neck paragangliomas, malignancy risk |

**Preoperative Management:**

*Alpha-Blockade (start 10-14 days before surgery):*
- Phenoxybenzamine (irreversible, non-selective)
- Doxazosin or prazosin (selective α1)
- Target: Mild orthostatic hypotension

*Beta-Blockade (after adequate alpha-blockade):*
- Only if tachycardia present
- NEVER before alpha-blockade (risk of hypertensive crisis)

*Volume Expansion:*
- High-salt diet
- IV fluids preoperatively

*Alternative: Metyrosine (Demser):*
- Inhibits tyrosine hydroxylase
- Reduces catecholamine synthesis

**Surgical Approach:**
- Laparoscopic adrenalectomy preferred
- Open surgery for large or invasive tumors
- Intraoperative blood pressure monitoring essential
- Expect hypotension after tumor removal

**Malignancy:**
- Defined by metastasis, not histology
- SDHB mutations: Highest malignancy risk
- No reliable histological markers
- Treat with surgery, radiation, chemotherapy, or 131I-MIBG`,
      keyTerms: [
        { term: 'MIBG', definition: 'Metaiodobenzylguanidine; radiotracer taken up by chromaffin tissue for imaging' },
        { term: 'phenoxybenzamine', definition: 'Non-selective, irreversible alpha-blocker; traditional preoperative agent for pheochromocytoma' },
        { term: 'SDH', definition: 'Succinate dehydrogenase; mitochondrial enzyme; mutations cause hereditary paraganglioma syndromes' },
        { term: 'VHL', definition: 'Von Hippel-Lindau syndrome; hereditary condition causing pheochromocytoma, hemangioblastomas, renal cancer' },
        { term: 'clonidine suppression test', definition: 'Diagnostic test using central alpha-2 agonist to distinguish tumor catecholamines from physiological secretion' },
      ],
      clinicalNotes: 'All patients with PPGL should undergo genetic testing given the high rate of hereditary disease. SDHB mutation carriers have significantly increased malignancy risk (up to 50%) and require lifelong surveillance.',
    },
    4: {
      level: 4,
      summary: 'PPGL management requires understanding of genotype-phenotype correlations, advanced functional imaging for staging, meticulous perioperative catecholamine control, and long-term surveillance for hereditary cases and metastatic disease.',
      explanation: `**Genotype-Phenotype Correlations:**

| Gene | Location | Secretion | Malignancy Risk | Extra-Adrenal |
|------|----------|-----------|-----------------|---------------|
| RET | Adrenal | Epi + NE | Very low | Rare |
| VHL | Adrenal (often bilateral) | NE only | Low | Rare |
| NF1 | Adrenal | Epi + NE | Low | Rare |
| SDHB | Extra-adrenal, thorax | NE/Dopamine | High (30-50%) | Common |
| SDHD | Head/neck | NE (non-secretory common) | Intermediate | Very common |
| TMEM127 | Adrenal | Epi + NE | Low | Rare |
| MAX | Adrenal | Epi + NE | Intermediate | Occasional |

*Implications for Screening:*
- MEN2 (RET): Screen for medullary thyroid cancer, hyperparathyroidism
- VHL: Retinal, CNS, renal surveillance
- SDHx: Regular imaging for paragangliomas, metastases

**Advanced Imaging Strategies:**

*Imaging Algorithm:*
1. CT/MRI abdomen for localization
2. If extra-adrenal or metastatic suspected: Functional imaging
3. If SDH-mutated or malignant: Full-body functional imaging

*68Ga-DOTATATE PET/CT:*
- Superior to 123I-MIBG for SDH-related tumors
- Detects somatostatin receptor-positive tumors
- Guides PRRT eligibility

*18F-FDOPA PET:*
- High sensitivity for head/neck paragangliomas
- Limited availability

*18F-FDG PET:*
- Best for SDHB-related and metastatic PPGL
- Aggressive tumors often FDG-avid

**Perioperative Hemodynamic Management:**

*Goals:*
- Avoid hypertensive crisis during tumor manipulation
- Prevent profound hypotension after tumor removal

*Preoperative Preparation Timeline:*

| Day | Intervention |
|-----|--------------|
| Day -14 | Start alpha-blocker, liberalize salt |
| Day -7 | Add beta-blocker if tachycardic |
| Day -3 | Admit for IV fluids if needed |
| Day 0 | Surgery with anesthesia coordination |

*Intraoperative Management:*
- Arterial line mandatory
- Central access for vasoactive drugs
- Phentolamine, nitroprusside for hypertensive surges
- Magnesium sulfate as adjunct
- Volume loading before tumor devascularization

*Postoperative:*
- Hypotension common (usually volume-responsive)
- Hypoglycemia risk (loss of catecholamine-induced gluconeogenesis)
- Monitor for bilateral adrenal insufficiency

**Metastatic PPGL:**

*Definition:*
- Metastasis to sites without chromaffin tissue (bone, liver, lung, lymph nodes)
- Not predictable by primary tumor histology

*Treatment Modalities:*

| Modality | Indication | Response |
|----------|------------|----------|
| Surgery | Localized metastases | Variable |
| 131I-MIBG | MIBG-avid tumors | 30% partial response |
| PRRT (177Lu-DOTATATE) | SSTR-positive tumors | Promising |
| CVD chemotherapy | Rapidly progressive | 40% response |
| Temozolomide | SDHB-related | Variable |
| Sunitinib | Targeted therapy | 35% disease control |

*CVD Regimen:*
- Cyclophosphamide, vincristine, dacarbazine
- 40-50% response rate
- Median response duration 20+ months

**Long-term Follow-up:**

*All PPGL:*
- Annual biochemistry (plasma metanephrines)
- Imaging if symptoms or biochemical recurrence
- Lifelong for hereditary cases

*High-risk for recurrence:*
- Large tumors (>5 cm)
- Extra-adrenal location
- SDHB mutation
- Younger age at diagnosis

*Surveillance Schedule (hereditary):*
- Annual: Metanephrines, BP
- Every 2-3 years: Full-body imaging
- Earlier if symptomatic`,
      keyTerms: [
        { term: '131I-MIBG therapy', definition: 'Therapeutic radioiodine-labeled MIBG for treatment of metastatic pheochromocytoma' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy; 177Lu-DOTATATE for somatostatin receptor-positive tumors' },
        { term: 'CVD chemotherapy', definition: 'Cyclophosphamide-vincristine-dacarbazine regimen for metastatic pheochromocytoma' },
        { term: 'FDOPA', definition: 'Fluorodopa; PET tracer for dopamine-synthesizing tumors including paragangliomas' },
        { term: 'MAX gene', definition: 'MYC-associated factor X; tumor suppressor gene causing hereditary pheochromocytoma' },
      ],
      clinicalNotes: 'The term "benign" pheochromocytoma is discouraged because even histologically unremarkable tumors can metastasize. All patients require long-term surveillance. SDH genetic testing has important implications for family screening and malignancy risk assessment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PPGL management integrates comprehensive germline/somatic genetic profiling, pseudohypoxia-driven metabolic targeting, emerging immunotherapies, and personalized surveillance based on molecular phenotype and metastatic potential.',
      explanation: `**Molecular Pathophysiology:**

*Two Oncogenic Clusters:*

1. *Pseudohypoxia Cluster (Cluster 1):*
   - SDHx, VHL, EPAS1, FH mutations
   - Stabilization of HIF (hypoxia-inducible factor)
   - Enhanced angiogenesis, altered metabolism
   - Noradrenergic phenotype
   - Higher metastatic potential

2. *Kinase Signaling Cluster (Cluster 2):*
   - RET, NF1, TMEM127, MAX mutations
   - RAS/RAF/ERK and mTOR pathway activation
   - Adrenergic phenotype
   - Lower metastatic potential

*Krebs Cycle and Epigenetic Dysregulation:*
- SDH and FH are Krebs cycle enzymes
- Mutations → accumulation of succinate/fumarate
- These oncometabolites inhibit α-ketoglutarate-dependent dioxygenases
- Results in DNA and histone hypermethylation
- Epigenetic driver of tumorigenesis

**Comprehensive Genetic Testing:**

*Recommended for All PPGL:*
- Panel testing: SDHx, VHL, RET, NF1, TMEM127, MAX, FH, EPAS1, MDH2
- Somatic testing if germline negative (especially EPAS1)
- Immunohistochemistry can guide testing (SDHB IHC)

*Family Screening:*
- Cascade testing for identified mutations
- Surveillance protocols based on gene
- Genetic counseling essential

**Emerging Therapeutic Targets:**

*HIF-2α Inhibitors:*
- Belzutifan: Approved for VHL-associated tumors
- Mechanism: Blocks HIF-2α dimerization
- Phase 2 trials in PPGL ongoing

*Immunotherapy:*
- Pembrolizumab: Case reports of response
- Combination strategies under investigation
- TMB generally low; response rates unclear

*Epigenetic Therapies:*
- DNMT inhibitors (5-azacitidine)
- Targeting hypermethylation phenotype
- Early clinical exploration

*Metabolic Targeting:*
- IDH inhibitors (analogy to glioma)
- Glutaminase inhibitors
- Exploiting metabolic vulnerabilities

**Advanced Radionuclide Therapies:**

*High-Specific-Activity 131I-MIBG (Azedra):*
- FDA-approved 2018 for MIBG-avid metastatic PPGL
- 25% partial response rate
- Requires thyroid protection, blood count monitoring

*177Lu-DOTATATE:*
- Approved for GEP-NETs, used off-label for PPGL
- Promising data in SDH-related tumors
- Theranostic approach (68Ga-DOTATATE → 177Lu-DOTATATE)

*225Ac-DOTATATE:*
- Alpha-emitting radionuclide
- Salvage therapy for 177Lu-refractory disease
- Nephrotoxicity and xerostomia concerns

**Pregnancy and PPGL:**

*Diagnosis in Pregnancy:*
- Plasma metanephrines safe
- MRI preferred (no radiation)
- MIBG contraindicated

*Management:*
- Alpha-blockade with phenoxybenzamine
- Avoid beta-blockers early (IUGR risk)
- Surgery: Second trimester if possible
- Delivery: Cesarean often preferred for unresected tumors

**Rare and Emerging Syndromes:**

*EPAS1 (HIF2A) Mutations:*
- Polycythemia-paraganglioma syndrome
- Somatic mosaic often
- HIF-2α inhibitor responsive

*MDH2 Mutations:*
- Recently identified
- Malate dehydrogenase deficiency
- Krebs cycle disruption similar to SDH

*Cluster 3 (Wnt Pathway):*
- CSDE1, MAML3 fusions
- Rare, aggressive tumors
- Somatic events

**Biochemical Phenotyping:**

*Secretory Patterns as Clues:*
| Pattern | Likely Genotype |
|---------|-----------------|
| NE only | VHL, SDHx |
| Epi + NE | RET, NF1 |
| Dopamine | SDHB (concerning for malignancy) |
| Methoxytyramine elevated | Suggests dopamine-secreting, higher malignancy risk |

**Quality of Life and Survivorship:**

*Chronic Disease Management:*
- Even biochemically cured patients may have persistent symptoms
- Cardiovascular screening (catecholamine-induced cardiomyopathy)
- Anxiety, PTSD related to attacks
- Support groups and patient advocacy organizations

*Living with Hereditary Risk:*
- Psychological impact of surveillance
- Family planning considerations
- Integration of genetic information into care`,
      keyTerms: [
        { term: 'pseudohypoxia', definition: 'Activation of hypoxia signaling pathways despite normal oxygen levels; driven by SDH/VHL mutations in PPGL' },
        { term: 'belzutifan', definition: 'HIF-2α inhibitor approved for VHL-associated tumors; under study for PPGL' },
        { term: 'Azedra', definition: 'High-specific-activity 131I-MIBG therapy; FDA-approved for metastatic pheochromocytoma' },
        { term: 'oncometabolite', definition: 'Metabolic intermediates (succinate, fumarate) that accumulate and drive tumorigenesis through epigenetic effects' },
        { term: 'methoxytyramine', definition: 'Dopamine metabolite; elevation suggests dopamine-secreting tumor with higher malignancy risk' },
      ],
      clinicalNotes: 'The paradigm for PPGL has shifted from "rule of 10s" to recognition that ~40% are hereditary with distinct molecular clusters. Understanding the pseudohypoxia vs kinase signaling clusters has therapeutic implications. HIF-2α inhibitors and improved radionuclide therapies are changing outcomes for metastatic disease. All patients deserve comprehensive genetic evaluation and counseling.',
    },
  },

  media: [
    {
      id: 'pheo-symptoms-1',
      type: 'diagram',
      filename: 'pheochromocytoma-symptoms.svg',
      title: 'Pheochromocytoma Clinical Features',
      description: 'Catecholamine effects on various organ systems',
    },
  ],

  citations: [
    {
      id: 'lenders-pheo-2014',
      type: 'article',
      title: 'Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline',
      authors: ['Lenders JW', 'Duh QY', 'Eisenhofer G', 'et al.'],
      source: 'J Clin Endocrinol Metab 2014;99(6):1915-1942',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-adrenal-incidentaloma', targetType: 'condition', relationship: 'see-also', label: 'Adrenal Incidentaloma' },
    { targetId: 'endocrine-hypertension', targetType: 'condition', relationship: 'related', label: 'Secondary Hypertension' },
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular'],
    topics: ['adrenal', 'catecholamines', 'hereditary syndromes'],
    keywords: ['pheochromocytoma', 'paraganglioma', 'catecholamines', 'hypertension', 'SDH', 'MEN2'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
