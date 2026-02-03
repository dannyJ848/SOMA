/**
 * Thyroid Nodules
 *
 * Comprehensive content on thyroid nodule evaluation, risk stratification, and management.
 */

import { EducationalContent } from '../../../types';

export const THYROID_NODULES: EducationalContent = {
  id: 'endocrine-thyroid-nodules',
  type: 'condition',
  name: 'Thyroid Nodules',
  alternateNames: ['Thyroid lumps', 'Thyroid growths', 'Goiter nodules'],

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid nodules are lumps in the thyroid gland. Most are not cancer and do not cause problems, but they need to be checked to make sure.',
      explanation: `A thyroid nodule is a lump or growth in your thyroid gland (the butterfly-shaped gland in your neck). These are very common - about half of all adults have them if we look closely with ultrasound.

**The good news:**
Most thyroid nodules (about 95%) are NOT cancer. They are called "benign" nodules.

**How are they found?**
- During a routine physical exam (doctor feels a lump)
- By accident when getting a scan for something else
- Sometimes you or your doctor may notice a lump in your neck

**What happens next?**
1. **Blood test**: Check if your thyroid is working normally (TSH test)
2. **Ultrasound**: A painless scan to look at the nodule closely
3. **Biopsy** (if needed): Using a thin needle to take a small sample

**What do the results mean?**
- Most nodules are benign (not cancer) - just watch and recheck
- Some need to be removed with surgery
- A small number are thyroid cancer, which is usually very treatable

**When to see a doctor:**
- You feel a lump in your neck
- Difficulty swallowing
- Voice changes
- The nodule is growing quickly

**Most people with thyroid nodules live completely normal lives!**`,
      keyTerms: [
        { term: 'nodule', definition: 'A small lump or growth' },
        { term: 'benign', definition: 'Not cancer; not harmful' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to test for disease' },
        { term: 'ultrasound', definition: 'A painless test using sound waves to see inside your body' },
      ],
      analogies: [
        'A thyroid nodule is like a pebble in a riverbed - most are just sitting there harmlessly.',
        'Getting a biopsy is like checking what a mystery package contains - usually it is nothing to worry about.',
      ],
      examples: [
        'A woman has a CT scan for a car accident and they notice a small thyroid nodule by chance.',
        'A man feels a lump in his neck while shaving and asks his doctor about it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid nodules are extremely common, with most being benign. Evaluation involves TSH testing, ultrasound characterization, and fine-needle aspiration biopsy when indicated based on size and suspicious features. Most nodules can be monitored without intervention.',
      explanation: `**Epidemiology:**
- Palpable nodules: 4-7% of adults
- Ultrasound-detected: 50-67% of adults
- Malignancy rate: 5-15% of biopsied nodules
- Incidence increases with age, female sex, iodine deficiency, radiation exposure

**Initial Evaluation:**

*History:*
- Radiation exposure (childhood head/neck radiation increases cancer risk)
- Family history of thyroid cancer (MTC, papillary)
- Rapid growth, voice changes, dysphagia
- MEN2 family history

*Physical Exam:*
- Size, consistency, mobility
- Cervical lymphadenopathy
- Signs of hypo/hyperthyroidism

**Diagnostic Workup:**

*TSH:*
| TSH | Interpretation | Next Step |
|-----|----------------|-----------|
| Low | Possible autonomous nodule | Thyroid scan (RAIU) |
| Normal/High | Not autonomous | Ultrasound evaluation |

*Thyroid Ultrasound:*
Key features to assess:
- Size (dimensions in 3 planes)
- Composition (solid, cystic, mixed)
- Echogenicity (compared to surrounding thyroid)
- Margins (smooth, irregular, ill-defined)
- Calcifications (microcalcifications concerning)
- Shape (taller-than-wide concerning)
- Vascularity
- Lymph nodes (abnormal cervical nodes)

**Risk Stratification (ATA Guidelines):**
| Pattern | Description | Malignancy Risk | FNA Threshold |
|---------|-------------|-----------------|---------------|
| High suspicion | Solid hypoechoic + microcalcifications/irregular margins/taller>wide/ETE | >70% | ≥1 cm |
| Intermediate | Solid hypoechoic, no high-risk features | 10-20% | ≥1 cm |
| Low suspicion | Isoechoic/hyperechoic solid, or partially cystic | 5-10% | ≥1.5 cm |
| Very low | Spongiform or partially cystic | <3% | ≥2 cm or observe |
| Benign | Purely cystic | <1% | No FNA |

**Fine-Needle Aspiration (FNA):**
- Ultrasound-guided for accuracy
- Results reported using Bethesda System

*Bethesda Classification:*
| Category | Diagnosis | Cancer Risk | Management |
|----------|-----------|-------------|------------|
| I | Nondiagnostic | 5-10% | Repeat FNA |
| II | Benign | 0-3% | Follow-up |
| III | AUS/FLUS | 10-30% | Repeat FNA or molecular testing |
| IV | Follicular neoplasm | 25-40% | Lobectomy or molecular testing |
| V | Suspicious for malignancy | 50-75% | Lobectomy or thyroidectomy |
| VI | Malignant | 97-99% | Thyroidectomy |

**Management:**
- Benign nodules: Monitor with ultrasound (1-2 years initially)
- Indeterminate: Molecular testing (Afirma, ThyroSeq) to guide surgery decision
- Suspicious/Malignant: Surgery
- Hot nodules: RAI or surgery if hyperthyroid`,
      keyTerms: [
        { term: 'FNA', definition: 'Fine-needle aspiration; biopsy using a thin needle to collect cells for examination' },
        { term: 'Bethesda System', definition: 'Standardized classification for reporting thyroid cytopathology results' },
        { term: 'AUS/FLUS', definition: 'Atypia of undetermined significance/Follicular lesion of undetermined significance' },
        { term: 'microcalcifications', definition: 'Tiny calcium deposits within a nodule; associated with papillary thyroid cancer' },
        { term: 'spongiform', definition: 'Nodule pattern with multiple small cystic areas; typically benign' },
      ],
      analogies: [
        'Ultrasound features help us read the "warning signs" - like reading a face for emotions, nodules have features that suggest benign or suspicious.',
        'Molecular testing is like a second opinion from DNA - when the biopsy is unclear, genes can help predict if it is cancer.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid nodule management follows evidence-based risk stratification using ultrasound patterns and cytopathology. Indeterminate cytology benefits from molecular testing to reduce unnecessary surgery. Active surveillance is increasingly accepted for low-risk papillary microcarcinomas.',
      explanation: `**Ultrasound Risk Stratification Systems:**

*American Thyroid Association (ATA):*
- 5 pattern categories based on composite features
- Drives FNA thresholds and surveillance intervals

*ACR TI-RADS (Thyroid Imaging Reporting and Data System):*
Points assigned for each feature:
| Feature | Points |
|---------|--------|
| Composition: Cystic (0), Spongiform (0), Mixed (1), Solid (2) |
| Echogenicity: Anechoic (0), Hyper/Iso (1), Hypoechoic (2), Very hypoechoic (3) |
| Shape: Wider-than-tall (0), Taller-than-wide (3) |
| Margin: Smooth (0), Ill-defined (0), Lobulated/Irregular (2), Extrathyroidal extension (3) |
| Echogenic foci: None (0), Large comet-tail (0), Macrocalcifications (1), Peripheral rim (2), Punctate (3) |

Total points → TR category → FNA threshold

**Molecular Testing:**

*Clinical Utility:*
- Rule-out tests: High NPV to avoid surgery (Afirma GSC)
- Rule-in tests: High PPV to recommend surgery (ThyroSeq v3)
- Applied to Bethesda III and IV results

*Available Tests:*
| Test | Methodology | Performance | Use |
|------|-------------|-------------|-----|
| Afirma GSC | RNA expression classifier | 96% NPV, 47% PPV | Rule-out |
| ThyroSeq v3 | DNA/RNA next-gen sequencing | 97% NPV, 66% PPV | Rule-out/in |
| ThyGenX/ThyraMIR | miRNA + mutation panel | Variable | Combined |

*Specific Mutations:*
- BRAF V600E: Strongly associated with PTC; high PPV
- RAS mutations: Found in both benign and malignant
- RET/PTC rearrangements: PTC
- PAX8/PPARγ: Follicular carcinoma

**Management by Bethesda Category:**

*Bethesda I (Nondiagnostic):*
- Causes: Cystic fluid only, poor sample, blood obscuring
- Action: Repeat FNA in 4-6 weeks
- If repeatedly nondiagnostic: Close surveillance or excision

*Bethesda II (Benign):*
- Follow-up interval: 12-24 months initially
- If stable x2: Extend to 3-5 years
- Consider repeat FNA if growing >20% in 2 dimensions

*Bethesda III/IV (Indeterminate):*
- Molecular testing to reclassify
- Benign molecular result → surveillance
- Suspicious molecular result → surgery (lobectomy usually)
- Without molecular testing: Lobectomy for diagnosis

*Bethesda V/VI (Suspicious/Malignant):*
- Surgery indicated
- Extent: Lobectomy vs total thyroidectomy based on:
  - Size, bilateral disease, extrathyroidal extension
  - Lymph node involvement
  - Patient preference

**Surveillance Protocols:**

*Benign Nodules:*
| Initial Size | First Follow-up | Subsequent |
|--------------|-----------------|------------|
| <1 cm | Optional | Optional |
| 1-2 cm | 12-24 months | 3-5 years if stable |
| >2 cm | 12 months | 1-2 years |

*Growth Criteria:*
- >20% increase in at least 2 dimensions AND
- >2 mm increase in each dimension
- Growth may warrant repeat FNA

**Active Surveillance for Papillary Microcarcinoma:**

*Rationale:*
- Many small PTCs are indolent
- Autopsy studies: High prevalence of occult PTC
- Overtreatment concerns

*Candidates for Active Surveillance:*
- <1 cm papillary thyroid cancer
- No extrathyroidal extension
- No lymph node metastases
- Not near trachea or recurrent laryngeal nerve
- Patient reliable for follow-up

*Monitoring:*
- Ultrasound every 6-12 months initially
- Surgery if significant growth (>3 mm) or node involvement`,
      keyTerms: [
        { term: 'TI-RADS', definition: 'Thyroid Imaging Reporting and Data System; standardized ultrasound-based risk stratification' },
        { term: 'NPV', definition: 'Negative predictive value; probability that a negative test truly indicates absence of disease' },
        { term: 'PPV', definition: 'Positive predictive value; probability that a positive test truly indicates presence of disease' },
        { term: 'BRAF V600E', definition: 'Oncogenic mutation strongly associated with papillary thyroid carcinoma' },
        { term: 'active surveillance', definition: 'Strategy of close monitoring instead of immediate treatment for low-risk cancers' },
        { term: 'lobectomy', definition: 'Surgical removal of one lobe of the thyroid gland' },
      ],
      clinicalNotes: 'Key clinical pearls: (1) Not all nodules need biopsy - follow size thresholds based on ultrasound suspicion; (2) Molecular testing helps avoid unnecessary surgery in ~50% of indeterminate cases; (3) Active surveillance is appropriate for select low-risk papillary microcarcinomas; (4) Always assess lymph nodes during thyroid ultrasound; (5) Hot nodules on scan are almost never malignant.',
    },
    4: {
      level: 4,
      summary: 'Thyroid nodule evaluation integrates imaging characteristics, cytopathology, and molecular diagnostics for risk-stratified management. Understanding the limitations of each modality and the molecular landscape of thyroid neoplasia enables optimized clinical decision-making.',
      explanation: `**Ultrasound Physics and Interpretation:**

*Technical Considerations:*
- High-frequency linear transducer (10-15 MHz)
- Assessment in transverse and longitudinal planes
- Comparison to strap muscles (hypoechoic) and surrounding thyroid
- Color/power Doppler for vascularity

*Feature Pathophysiology:*
| Feature | Mechanism | Significance |
|---------|-----------|--------------|
| Microcalcifications | Psammoma bodies (PTC) | High specificity for PTC |
| Macrocalcifications | Dystrophic, nodular degeneration | Less specific |
| Hypoechogenicity | Cellular density | More suspicious |
| Taller-than-wide | Growth against tissue planes | Infiltrative behavior |
| Irregular margins | Infiltration | High specificity for malignancy |
| Peripheral vascularity | Feeding vessels | Less specific than internal |

*Lymph Node Assessment:*
Suspicious features:
- Rounded shape (L:S ratio <2)
- Loss of fatty hilum
- Cystic change
- Microcalcifications
- Peripheral or chaotic vascularity
- Hyperechogenicity similar to thyroid

**Cytopathology Details:**

*Adequate Specimen:*
- ≥6 groups of follicular cells
- ≥10 cells per group
- Exception: Colloid-predominant = benign even with few cells

*Diagnostic Patterns:*
| Cancer Type | Cytologic Features |
|-------------|-------------------|
| Papillary (PTC) | Nuclear grooves, pseudoinclusions, powdery chromatin |
| Follicular | Cannot distinguish CA from adenoma on FNA (need capsular invasion) |
| Medullary | Amyloid, plasmacytoid cells, calcitonin positive |
| Anaplastic | Pleomorphic, necrosis, mitoses |

**Molecular Pathways in Thyroid Cancer:**

*MAPK Pathway (RAF-RAS-MEK-ERK):*
- BRAF V600E: 40-60% of PTC; aggressive variant association
- RAS mutations: Both benign and malignant; follicular pattern
- RET/PTC rearrangements: PTC, radiation-associated

*PI3K/AKT Pathway:*
- PIK3CA mutations: Aggressive, dedifferentiated
- PTEN loss: FTC, anaplastic

*Other Alterations:*
- PAX8/PPARγ fusion: 30-40% of FTC
- TERT promoter mutations: Aggressive behavior, dedifferentiation
- TP53: Anaplastic transformation

*Clinical Implications:*
| Mutation | Cancer Risk | Aggressiveness |
|----------|-------------|----------------|
| BRAF V600E alone | ~99% PTC | Variable |
| BRAF + TERT | Very high | High (poor prognosis) |
| RAS alone | 50-70% | Usually low |
| RET/PTC | High | Typically indolent |

**Management of Specific Scenarios:**

*Incidentally Detected Nodule:*
- PET-avid nodules: FDG uptake indicates 35% malignancy risk → biopsy
- CT-detected: Dedicated thyroid ultrasound for characterization
- MRI-detected: Same approach

*Multinodular Goiter:*
- Assess each nodule independently
- Prioritize suspicious-appearing nodules for FNA
- Consider compressive symptoms (dysphagia, dyspnea, hoarseness)

*Autonomous Nodules:*
- "Hot" on I-123 scan: <1% malignancy risk
- No FNA needed for purely hot nodules
- Treat hyperthyroidism if present (RAI, surgery)

**Surgical Decision-Making:**

*Lobectomy Appropriate:*
- Bethesda V/VI ≤4 cm
- No extrathyroidal extension
- No lymph node metastases
- No distant metastases
- No contralateral nodules requiring intervention

*Total Thyroidectomy Preferred:*
- Tumor >4 cm
- Gross extrathyroidal extension
- Clinically apparent lymph nodes
- Distant metastases
- Contralateral disease
- Planning RAI therapy
- Strong family history, radiation exposure

**Complications of FNA:**

*Common:*
- Pain (mild, transient)
- Hematoma (usually self-limited)

*Rare:*
- Infection
- Vasovagal reaction
- Needle track seeding (extraordinarily rare)

*Limitations:*
- Sampling error (false negative ~3-5%)
- Cannot distinguish follicular adenoma from carcinoma
- Cystic nodules may yield insufficient material`,
      keyTerms: [
        { term: 'psammoma bodies', definition: 'Concentrically laminated calcifications; hallmark of papillary thyroid carcinoma' },
        { term: 'nuclear pseudoinclusions', definition: 'Cytoplasmic invaginations into nucleus; characteristic of papillary carcinoma' },
        { term: 'TERT promoter', definition: 'Telomerase reverse transcriptase promoter; mutations indicate aggressive thyroid cancer behavior' },
        { term: 'FDG avidity', definition: 'Uptake on PET scan indicating metabolic activity; concerning for malignancy in thyroid nodules' },
        { term: 'extrathyroidal extension', definition: 'Tumor invasion beyond thyroid capsule; adverse prognostic factor' },
      ],
      clinicalNotes: 'Integration of ultrasound, cytology, and molecular testing optimizes risk stratification. Key decision points: (1) FNA threshold varies by ultrasound pattern; (2) Molecular testing most valuable in Bethesda III-IV to avoid diagnostic surgery; (3) BRAF V600E in cytologically benign nodule warrants reconsideration; (4) TERT promoter mutations indicate need for more aggressive treatment. Always correlate molecular results with cytology and clinical context.',
    },
    5: {
      level: 5,
      summary: 'Thyroid nodule management is being transformed by advanced molecular diagnostics, artificial intelligence-assisted imaging interpretation, and refined understanding of tumor biology. Precision medicine approaches guide individualized treatment intensity based on genomic and clinical risk factors.',
      explanation: `**Advanced Molecular Diagnostics:**

*Next-Generation Sequencing Panels:*
ThyroSeq v3 GC:
- 112 genes analyzed
- DNA mutations, gene fusions, copy number alterations, gene expression
- Genomic classifier combines features
- Loss-of-heterozygosity assessment

Afirma GSC (Gene Sequencing Classifier):
- RNA expression profiling
- Machine learning algorithm
- Includes Xpression Atlas (specific mutation calls)
- Medullary thyroid cancer classifier, BRAF, RET

*Emerging Biomarkers:*
| Marker | Application | Status |
|--------|-------------|--------|
| Circulating tumor DNA | Monitoring, recurrence detection | Research |
| microRNA panels | Diagnostic and prognostic | Research |
| Methylation signatures | Cancer detection | Development |
| Proteomics | Biomarker discovery | Research |

**Artificial Intelligence in Thyroid Imaging:**

*Deep Learning Applications:*
- Automated nodule detection on ultrasound
- TI-RADS category assignment
- Malignancy probability estimation
- Computer-aided diagnosis (CAD) systems

*Performance:*
- Some studies show AI matching expert radiologist performance
- May reduce inter-observer variability
- Potential for point-of-care decision support
- FDA-cleared systems emerging

*Limitations:*
- Training data bias
- Black box interpretation
- Integration into clinical workflow
- Validation across populations

**Molecular-Guided Active Surveillance:**

*Concept:*
- Molecular profiling to identify most indolent tumors
- Enhance confidence in surveillance decisions
- Avoid overtreatment of low-risk cancers

*Research Directions:*
- Which mutations predict progression vs stability?
- BRAF V600E alone: May still be indolent in microPTC
- BRAF + TERT: Rarely indolent; surgery indicated
- Role of immune microenvironment

**Reclassification of Thyroid Neoplasms:**

*NIFTP (Noninvasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features):*
- Previously: Encapsulated follicular variant PTC
- Now: Pre-malignant/borderline (not carcinoma)
- Requires: Encapsulation, no invasion, no BRAF V600E
- Management: Lobectomy, no RAI, excellent prognosis

*Implications:*
- Reduced psychological burden of "cancer" diagnosis
- More conservative management
- Affects cancer statistics

**Genomic Risk Stratification:**

*Integrated Molecular-Clinical Scoring:*

| Risk Level | Features | Management |
|------------|----------|------------|
| Very Low | NIFTP, RAS-only small tumor | Lobectomy, no RAI |
| Low | PTC <4 cm, no high-risk mutations | Lobectomy vs TT, selective RAI |
| Intermediate | BRAF V600E, larger tumors, LN+ | TT, RAI often indicated |
| High | TERT+ mutations, aggressive histology | Aggressive surgery, RAI, consider targeted therapy |

**Targeted Therapies:**

*MAPK Pathway Inhibitors:*
| Agent | Target | Indication |
|-------|--------|------------|
| Dabrafenib + Trametinib | BRAF + MEK | BRAF-mutated advanced DTC |
| Vemurafenib | BRAF | Investigational in DTC |
| Selumetinib | MEK | RAI-refractory DTC (redifferentiation) |

*RET Inhibitors:*
| Agent | Indication | Approval Status |
|-------|------------|-----------------|
| Selpercatinib | RET-altered thyroid cancer | FDA approved |
| Pralsetinib | RET-altered thyroid cancer | FDA approved |

*NTRK Inhibitors:*
| Agent | Indication |
|-------|------------|
| Larotrectinib | NTRK fusion-positive |
| Entrectinib | NTRK fusion-positive |

**Evolving Surgical Approaches:**

*Minimally Invasive:*
- Transoral thyroidectomy (no visible scar)
- Robotic thyroidectomy
- Endoscopic approaches
- Select patients, experienced centers

*Vocal Cord Monitoring:*
- Intraoperative nerve monitoring (IONM)
- Continuous monitoring systems
- May reduce recurrent laryngeal nerve injury

*Parathyroid Preservation:*
- Autofluorescence detection
- Near-infrared imaging
- Reduce permanent hypoparathyroidism

**Future Directions:**

*Liquid Biopsy:*
- Circulating thyroid cells
- Cell-free DNA mutations
- Non-invasive monitoring

*Personalized Medicine:*
- Treatment intensity matched to molecular risk
- Avoid overtreatment of indolent disease
- Aggressive treatment of high-risk molecular profiles

*Prevention:*
- Understanding initiation events
- Environmental factors
- Possible chemoprevention in high-risk individuals

*Novel Imaging:*
- Molecular imaging agents
- Improved differentiation of benign vs malignant
- Functional imaging beyond I-131`,
      keyTerms: [
        { term: 'NIFTP', definition: 'Noninvasive follicular thyroid neoplasm with papillary-like nuclear features; reclassified from cancer to borderline' },
        { term: 'Afirma GSC', definition: 'Gene Sequencing Classifier; RNA-based molecular test for thyroid nodule risk stratification' },
        { term: 'selpercatinib', definition: 'Selective RET kinase inhibitor approved for RET-altered thyroid cancers' },
        { term: 'redifferentiation', definition: 'Restoring radioiodine avidity in RAI-refractory thyroid cancer using targeted therapy' },
        { term: 'transoral thyroidectomy', definition: 'Minimally invasive thyroid surgery through the mouth; avoids visible neck scar' },
        { term: 'IONM', definition: 'Intraoperative nerve monitoring; reduces recurrent laryngeal nerve injury during thyroid surgery' },
      ],
      clinicalNotes: 'The field is moving toward precision medicine in thyroid nodule and cancer management. Key developments: (1) Molecular testing continues to reduce unnecessary surgeries; (2) NIFTP reclassification has appropriate reduced treatment intensity; (3) AI-assisted ultrasound interpretation may improve access to expert-level assessment; (4) Targeted therapies (RET inhibitors, BRAF/MEK inhibitors) are transforming advanced disease management; (5) Active surveillance for low-risk PTC is increasingly accepted. Clinicians should stay updated on rapidly evolving guidelines.',
    },
  },

  media: [
    {
      id: 'thyroid-nodule-us-1',
      type: 'diagram',
      filename: 'thyroid-nodule-ultrasound-features.svg',
      title: 'Thyroid Nodule Ultrasound Features',
      description: 'Suspicious vs benign ultrasound characteristics',
    },
    {
      id: 'thyroid-nodule-algorithm-1',
      type: 'diagram',
      filename: 'thyroid-nodule-evaluation-algorithm.svg',
      title: 'Thyroid Nodule Evaluation Algorithm',
      description: 'Diagnostic and management approach based on ATA guidelines',
    },
  ],

  citations: [
    {
      id: 'ata-nodule-2015',
      type: 'article',
      title: 'American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer',
      authors: ['Haugen BR', 'Alexander EK', 'Bible KC', 'et al.'],
      source: 'Thyroid 2016;26:1-133',
      license: 'Copyrighted',
    },
    {
      id: 'tirads-2017',
      type: 'article',
      title: 'ACR Thyroid Imaging, Reporting and Data System (TI-RADS)',
      authors: ['Tessler FN', 'Middleton WD', 'Grant EG', 'et al.'],
      source: 'J Am Coll Radiol 2017;14:587-595',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-thyroid-cancer', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Cancer' },
    { targetId: 'endocrine-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
    { targetId: 'endocrine-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['thyroid', 'oncology', 'diagnostics'],
    keywords: ['thyroid nodule', 'FNA', 'Bethesda', 'TI-RADS', 'molecular testing', 'biopsy'],
    clinicalRelevance: 'high',
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
