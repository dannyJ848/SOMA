/**
 * Pituitary Adenomas
 *
 * Comprehensive content on pituitary tumors and their management.
 */

import { EducationalContent } from '../../../types';

export const PITUITARY_ADENOMAS: EducationalContent = {
  id: 'endocrine-pituitary-adenomas',
  type: 'condition',
  name: 'Pituitary Adenomas',
  alternateNames: ['Pituitary tumor', 'Pituitary neoplasm'],

  levels: {
    1: {
      level: 1,
      summary: 'A pituitary adenoma is a growth in the pituitary gland, a small but important gland at the base of your brain. Most are not cancer and can often be treated successfully.',
      explanation: `The pituitary gland is a pea-sized organ at the base of your brain. It is called the "master gland" because it controls many other glands in your body by making hormones.

**What is a pituitary adenoma:**
- A growth (tumor) in the pituitary gland
- Almost always NOT cancer (benign)
- Very common - many people have small ones without knowing

**How it can cause problems:**
1. Making too much of a hormone
2. Pressing on nearby structures (like the nerves to your eyes)
3. Damaging the normal pituitary (causing hormone deficiencies)

**Symptoms depend on the type:**
- Vision problems (if pressing on eye nerves)
- Headaches
- Symptoms of too much hormone (depends on which one)
- Symptoms of too little hormone

**Treatment options:**
- Medications (work well for some types)
- Surgery (through the nose to reach the gland)
- Radiation (for tumors that keep growing)
- Sometimes just watching small tumors`,
      keyTerms: [
        { term: 'pituitary gland', definition: 'A small gland at the base of the brain that makes hormones controlling other glands' },
        { term: 'adenoma', definition: 'A type of growth that is not cancer' },
        { term: 'benign', definition: 'Not cancer; does not spread to other parts of the body' },
      ],
      analogies: [
        'The pituitary is like the conductor of an orchestra, telling other glands when and how much hormone to make.',
        'A pituitary adenoma is like a bump on the conductor\'s podium - it may interfere with conducting or push against nearby things.',
      ],
      examples: [
        'Someone notices vision changes in the outer parts of their sight and a brain scan shows a pituitary adenoma pressing on the optic nerves.',
        'A woman stops having periods and tests show a pituitary tumor making too much prolactin.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pituitary adenomas are classified by size (micro <1cm, macro ≥1cm) and function (hormone-secreting or non-functioning). Management depends on tumor type, size, and clinical effects.',
      explanation: `**Classification:**

*By Size:*
- Microadenoma: <10 mm
- Macroadenoma: ≥10 mm
- Giant adenoma: >40 mm

*By Function:*
- Functioning (hormone-secreting): ~65%
- Non-functioning (clinically silent): ~35%

**Types of Functioning Adenomas:**

| Type | Hormone | Frequency | Key Features |
|------|---------|-----------|--------------|
| Prolactinoma | Prolactin | 40% | Galactorrhea, amenorrhea, infertility |
| GH-secreting | Growth hormone | 15% | Acromegaly, gigantism |
| ACTH-secreting | ACTH | 10% | Cushing's disease |
| TSH-secreting | TSH | 1% | Hyperthyroidism |
| Gonadotroph | FSH/LH | Rare | Usually non-functioning |

**Clinical Effects:**

*Mass Effects (macroadenomas):*
- Visual field defects (bitemporal hemianopia)
- Headache
- Cranial nerve palsies (III, IV, VI)
- CSF leak, hydrocephalus (rare)

*Hormone Effects:*
- Excess: Specific to hormone type
- Deficiency: Hypopituitarism (compression of normal pituitary)

*Pituitary Apoplexy:*
- Sudden hemorrhage into adenoma
- Severe headache, vision loss, hormonal crisis
- Medical emergency

**Diagnosis:**

*Imaging:*
- MRI pituitary with gadolinium (gold standard)
- May be incidental finding

*Hormonal Testing:*
- Prolactin, IGF-1, cortisol, thyroid function
- Additional tests based on clinical suspicion

*Visual Fields:*
- Formal perimetry for macroadenomas near optic chiasm

**Treatment by Type:**

*Prolactinoma:*
- Dopamine agonists first-line (cabergoline, bromocriptine)
- Surgery if medication intolerance or resistant

*Other Functioning Adenomas:*
- Surgery usually first-line
- Medical therapy may be adjunctive

*Non-Functioning Adenomas:*
- Surgery if mass effects or growing
- Observation for small, stable tumors`,
      keyTerms: [
        { term: 'macroadenoma', definition: 'Pituitary adenoma 10 mm or larger in diameter' },
        { term: 'bitemporal hemianopia', definition: 'Loss of outer (temporal) visual fields in both eyes from optic chiasm compression' },
        { term: 'prolactinoma', definition: 'Most common pituitary adenoma; secretes prolactin causing galactorrhea and hypogonadism' },
        { term: 'pituitary apoplexy', definition: 'Sudden hemorrhage or infarction of pituitary adenoma; a medical emergency' },
        { term: 'dopamine agonist', definition: 'Medication that shrinks prolactinomas by activating dopamine receptors' },
      ],
      analogies: [
        'Bitemporal hemianopia occurs because the optic chiasm (where eye nerves cross) sits just above the pituitary - pressure from below affects the crossing fibers first.',
        'Dopamine agonists work on prolactinomas because dopamine normally inhibits prolactin release from the pituitary.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pituitary adenomas arise from specific anterior pituitary cell lineages. Contemporary classification integrates histopathology, transcription factor expression, and clinical behavior. Treatment selection considers tumor biology, functional status, and surgical accessibility.',
      explanation: `**Cell Lineages and Transcription Factors:**

| Cell Type | Hormone | Transcription Factor |
|-----------|---------|---------------------|
| Lactotroph | Prolactin | PIT-1, ERα |
| Somatotroph | GH | PIT-1 |
| Thyrotroph | TSH | PIT-1, GATA2 |
| Corticotroph | ACTH | TPIT |
| Gonadotroph | FSH/LH | SF-1, GATA2 |

**2017 WHO Classification:**
- Based on cell of origin (not just hormone)
- Immunohistochemistry for transcription factors
- Identifies silent (non-secreting) subtypes
- Recognizes aggressive variants

**Specific Adenoma Types:**

*Prolactinomas:*
- Treatment: Cabergoline 0.5-3 mg/week
- Response: Tumor shrinkage in 80-90%
- Surgery: Dopamine agonist intolerance/resistance, CSF leak, apoplexy
- Stalk effect: Mild prolactin elevation (<100-150) from any sellar mass

*GH-Secreting (Acromegaly):*
- Diagnosis: Elevated IGF-1, GH not suppressed by OGTT
- Surgery: First-line for most
- Medical: Somatostatin analogs (octreotide LAR, lanreotide)
- Medical: GH receptor antagonist (pegvisomant)
- Radiation: For persistent disease

*ACTH-Secreting (Cushing's Disease):*
- Diagnosis: See Cushing's syndrome workup
- Surgery: Transsphenoidal, 65-90% remission
- Repeat surgery or radiation for recurrence
- Medical: Steroidogenesis inhibitors as bridge

*TSH-Secreting:*
- Rare, often large at diagnosis
- Inappropriate TSH with high T4/T3
- Surgery first-line
- Somatostatin analogs may help

*Non-Functioning Pituitary Adenomas (NFPA):*
- Often gonadotroph lineage on pathology
- Present with mass effects or incidental
- Surgery if symptomatic or threatening vision
- Observe if small and stable

**Surgical Approach:**

*Transsphenoidal Surgery:*
- Endoscopic or microscopic
- Through nose → sphenoid sinus → sella
- Remission rates vary by tumor type
- Complications: CSF leak, diabetes insipidus, hypopituitarism

*Craniotomy:*
- Reserved for significant suprasellar extension
- Giant adenomas with lateral extension

**Radiation Therapy:**

*Indications:*
- Residual/recurrent tumor after surgery
- Aggressive tumors
- Poor surgical candidates

*Types:*
- Stereotactic radiosurgery (Gamma Knife, CyberKnife)
- Fractionated radiotherapy

*Effects:*
- Tumor control 80-95%
- Delayed hormonal normalization
- Risk of hypopituitarism (30-50% at 10 years)

**Postoperative Monitoring:**
- Hormonal assessment at 6 weeks
- MRI at 3-4 months
- Long-term surveillance for recurrence`,
      keyTerms: [
        { term: 'PIT-1', definition: 'Pituitary transcription factor for GH, prolactin, and TSH-secreting cells' },
        { term: 'TPIT', definition: 'Transcription factor specific to ACTH-producing corticotroph cells' },
        { term: 'stalk effect', definition: 'Mild hyperprolactinemia from any sellar mass compressing pituitary stalk, interrupting dopamine inhibition' },
        { term: 'somatostatin analog', definition: 'Medication that inhibits GH secretion; used in acromegaly' },
        { term: 'pegvisomant', definition: 'GH receptor antagonist that normalizes IGF-1 in acromegaly without reducing GH' },
      ],
      clinicalNotes: 'Prolactin levels generally correlate with prolactinoma size. Very large tumors with "only" moderate prolactin elevation (<200) may be non-functioning adenomas with stalk effect rather than true prolactinomas - this distinction is crucial as surgery is preferred for the latter.',
    },
    4: {
      level: 4,
      summary: 'Contemporary pituitary adenoma management integrates molecular pathogenesis, refined surgical techniques, multimodal therapy, and recognition of aggressive subtypes. Multidisciplinary pituitary tumor boards optimize individualized treatment strategies.',
      explanation: `**Molecular Pathogenesis:**

*Sporadic Adenomas:*
- GNAS mutations (40% of somatotroph adenomas): Constitutive Gs activation
- USP8 mutations (30-60% of corticotroph adenomas): EGFR signaling
- SF3B1, USP48 in other subtypes

*Hereditary Syndromes:*

| Syndrome | Gene | Pituitary Manifestation |
|----------|------|------------------------|
| MEN1 | MEN1 | Any adenoma type (30-40%) |
| Carney complex | PRKAR1A | GH-secreting |
| McCune-Albright | GNAS (somatic mosaic) | GH-secreting |
| AIP mutations | AIP | Young-onset somatotroph adenomas |
| SDHx | SDHB/C/D | Rare pituitary paragangliomas |

**Aggressive Pituitary Tumors:**

*Definition:*
- Radiologically invasive
- Unusually rapid growth
- Resistance to standard therapies

*High-Risk Subtypes:*
- Sparsely granulated somatotroph adenoma
- Crooke cell corticotroph adenoma
- Silent corticotroph adenoma
- Plurihormonal PIT-1 positive adenoma
- Lactotroph adenomas in males (often larger, more aggressive)

*Management:*
- Maximal surgical debulking
- Early adjuvant radiation
- Temozolomide for refractory cases

**Pituitary Carcinoma:**
- Very rare (<0.2% of pituitary tumors)
- Defined by metastases (craniospinal or systemic)
- Most arise from pre-existing adenomas (often functioning)
- Poor prognosis; temozolomide primary systemic therapy

**Advanced Surgical Techniques:**

*Endoscopic Endonasal Approach:*
- Improved visualization
- Extended approaches for larger tumors
- Higher rates of gross total resection
- Learning curve for surgeons

*Intraoperative MRI:*
- Real-time assessment of resection
- May improve remission rates
- Resource-intensive

*Intraoperative Hormone Assays:*
- GH, prolactin, ACTH levels during surgery
- Predict biochemical remission
- Guide extent of resection

**Medical Therapy Advances:**

*Acromegaly:*
- Pasireotide: Multi-receptor somatostatin analog (SSTR5 affinity)
- Oral octreotide: Under development
- Combination therapy increasingly used

*Cushing's Disease:*
- Pasireotide: Approved, significant hyperglycemia
- Osilodrostat: 11β-hydroxylase inhibitor
- Cabergoline: Off-label, some response
- Mifepristone: GR antagonist for metabolic control

*Aggressive/Refractory Tumors:*
- Temozolomide: Alkylating agent, 40-50% response
- MGMT status may predict response
- Immune checkpoint inhibitors: Case reports

**Pituitary Apoplexy Management:**

*Presentation:*
- Sudden severe headache
- Visual deterioration
- Ophthalmoplegia
- Altered consciousness
- Adrenal insufficiency

*Management:*
- Immediate glucocorticoids (hydrocortisone 100mg IV)
- Fluid resuscitation
- Urgent surgical decompression if:
  - Severe/progressive visual deficits
  - Decreased consciousness
- Conservative management if:
  - Stable mild deficits
  - No visual impairment

*Outcomes:*
- Many recover pituitary function after apoplexy
- Some develop permanent hypopituitarism

**Pregnancy Considerations:**

*Prolactinoma:*
- Stop dopamine agonist when pregnant (most)
- Monitor for tumor growth (visual fields)
- Resume DA if symptomatic enlargement
- Breastfeeding generally safe

*Acromegaly:*
- Surgery before pregnancy if possible
- Pegvisomant: Limited safety data
- Somatostatin analogs: Some data in pregnancy

**Quality of Life:**
- Persistent symptoms despite biochemical control
- Fatigue, cognitive issues, mood disturbances
- Importance of patient-reported outcomes
- Multidisciplinary support`,
      keyTerms: [
        { term: 'temozolomide', definition: 'Alkylating chemotherapy agent used for aggressive pituitary tumors; response linked to MGMT methylation' },
        { term: 'AIP mutation', definition: 'Aryl hydrocarbon receptor interacting protein; causes familial isolated pituitary adenoma, especially young-onset GH-secreting' },
        { term: 'pituitary carcinoma', definition: 'Malignant pituitary tumor defined by presence of metastases; very rare' },
        { term: 'pasireotide', definition: 'Multi-receptor somatostatin analog with SSTR5 affinity; used in acromegaly and Cushing\'s disease' },
        { term: 'Crooke cell adenoma', definition: 'Aggressive subtype of corticotroph adenoma with characteristic hyaline changes' },
      ],
      clinicalNotes: 'Male patients with prolactinomas often present with larger, more aggressive tumors and may require closer surveillance. Young patients with GH-secreting adenomas should be screened for AIP mutations. The distinction between aggressive adenoma and carcinoma is based solely on presence of metastases, not histological features.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art pituitary tumor management integrates epigenetic and transcriptomic profiling, precision therapeutics based on molecular alterations, advanced imaging biomarkers, and emerging immunotherapy approaches for refractory disease.',
      explanation: `**Molecular Landscape - Deep Dive:**

*Epigenetic Alterations:*
- DNA methylation profiling distinguishes adenoma subtypes
- Methylation classifier may predict behavior
- Histone modifications in aggressive tumors
- Therapeutic implications emerging

*Transcriptomic Classification:*
- RNA sequencing identifies subgroups
- Expression signatures correlate with clinical behavior
- May guide treatment selection
- "Null cell" adenomas often gonadotroph by molecular analysis

*Copy Number Alterations:*
- Chromosomal gains/losses in aggressive tumors
- 1q gain, 11q loss associated with invasion
- May help predict recurrence

**Precision Medicine Approaches:**

*GNAS-Mutated Somatotroph Adenomas:*
- Better response to somatostatin analogs
- Gs hyperactivity → enhanced drug sensitivity
- Potential for targeted therapies

*USP8-Mutated Corticotroph Adenomas:*
- Increased EGFR signaling
- Potential for EGFR-targeted therapy
- Clinical trials ongoing

*MGMT and Temozolomide Response:*
- Low MGMT expression → better temozolomide response
- Methylation testing recommended before therapy
- Alternative agents for MGMT-high tumors

**Emerging Therapies:**

*Immune Checkpoint Inhibitors:*
- Case reports of response in pituitary carcinoma
- PD-L1 expression variable
- Combination with temozolomide under study

*Targeted Agents:*
| Target | Agent | Context |
|--------|-------|---------|
| EGFR | Gefitinib, lapatinib | ACTH-secreting |
| mTOR | Everolimus | Aggressive adenomas |
| Cyclin-dependent kinases | CDK4/6 inhibitors | Preclinical |
| Wnt pathway | Under development | Various subtypes |

*Cell Therapy:*
- CAR-T conceptually applicable
- Target antigens under investigation
- Very early stage

**Advanced Imaging:**

*Volumetric Analysis:*
- Quantitative tumor volume measurement
- More sensitive than linear dimensions
- Standardized software emerging

*PET Imaging:*
- 68Ga-DOTATATE: Somatostatin receptor expression
- 11C-Methionine: Amino acid metabolism
- May guide radionuclide therapy

*Radiomic Features:*
- Texture analysis correlates with tumor behavior
- May predict invasiveness, response
- Machine learning integration

**Radiotherapy Advances:**

*Peptide Receptor Radionuclide Therapy (PRRT):*
- 177Lu-DOTATATE for SSTR-positive tumors
- Case series in refractory adenomas
- Potential for aggressive tumors

*Proton Beam Therapy:*
- Improved dose conformality
- May reduce long-term complications
- Limited availability

**Hereditary Syndromes - Updated Management:**

*MEN1:*
- Pituitary screening from age 5
- Annual prolactin and IGF-1
- MRI every 3 years (or if biochemical abnormality)
- Often multiple microadenomas

*AIP-Associated Adenomas:*
- Family screening important
- More aggressive disease
- Consider prophylactic surgery discussions

*SDHx-Related Pituitary Tumors:*
- Rare, but recognize association
- Screen pituitary in SDHx mutation carriers
- May behave aggressively

**Outcomes and Quality of Life Research:**

*Long-term Morbidity:*
- Hypopituitarism (tumor and treatment-related)
- Cardiovascular mortality in acromegaly/Cushing's
- Neurocognitive effects
- Sleep disorders

*Patient-Reported Outcomes:*
- Disease-specific questionnaires (ACRO-QoL, CushingQoL)
- Fatigue, depression, anxiety common
- May persist despite biochemical control
- Importance of holistic care

**Future Directions:**

*Biomarkers:*
- Circulating tumor cells (rare but detectable)
- Exosomal markers
- Liquid biopsy for recurrence monitoring

*Drug Delivery:*
- Nanoparticle systems for targeted delivery
- Implantable drug depots
- Gene therapy approaches

*Artificial Intelligence:*
- Automated tumor segmentation
- Prediction models for outcomes
- Decision support systems

**Multidisciplinary Care:**
- Pituitary tumor boards
- Integration of endocrinology, neurosurgery, radiation oncology
- Nursing, neuropsychology, rehabilitation
- Transition clinics for young patients`,
      keyTerms: [
        { term: 'radiomic analysis', definition: 'Extraction of quantitative imaging features for predicting tumor behavior and treatment response' },
        { term: 'MGMT methylation', definition: 'Epigenetic silencing of DNA repair enzyme MGMT; predicts temozolomide sensitivity in pituitary tumors' },
        { term: 'methylation classifier', definition: 'DNA methylation-based classification system for pituitary adenoma subtyping and prognostication' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy; targeted radiotherapy for somatostatin receptor-positive tumors' },
        { term: 'liquid biopsy', definition: 'Detection of circulating tumor components in blood for non-invasive tumor monitoring' },
      ],
      clinicalNotes: 'The management of pituitary adenomas increasingly recognizes heterogeneity within traditional classifications. Molecular profiling is beginning to inform prognosis and treatment selection, particularly for aggressive tumors. Multidisciplinary pituitary centers optimize outcomes through integrated expertise and access to clinical trials. Patient quality of life should be a central focus, as biochemical cure does not always equate to symptom resolution.',
    },
  },

  media: [
    {
      id: 'pituitary-adenoma-classification-1',
      type: 'diagram',
      filename: 'pituitary-adenoma-classification.svg',
      title: 'Pituitary Adenoma Classification',
      description: 'Cell lineages and hormone production in pituitary adenomas',
    },
  ],

  citations: [
    {
      id: 'melmed-pituitary-2020',
      type: 'article',
      title: 'Pituitary Adenoma Management: A Review',
      authors: ['Melmed S'],
      source: 'JAMA 2020;324(16):1643-1653',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-acromegaly', targetType: 'condition', relationship: 'see-also', label: 'Acromegaly' },
    { targetId: 'endocrine-prolactinoma', targetType: 'condition', relationship: 'see-also', label: 'Prolactinoma' },
    { targetId: 'endocrine-cushings-syndrome', targetType: 'condition', relationship: 'related', label: "Cushing's Disease" },
    { targetId: 'endocrine-hypopituitarism', targetType: 'condition', relationship: 'see-also', label: 'Hypopituitarism' },
  ],

  tags: {
    systems: ['endocrine', 'neurological'],
    topics: ['pituitary', 'neuro-oncology', 'hormones'],
    keywords: ['pituitary adenoma', 'prolactinoma', 'acromegaly', 'transsphenoidal surgery', 'somatostatin analog'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'neurology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
