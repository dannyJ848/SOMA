/**
 * Brain Tumors - Pathology Educational Content
 *
 * Classification, pathology, and management of primary and
 * metastatic brain tumors.
 */

import { EducationalContent } from '../../types';

export const brainTumors: EducationalContent = {
  id: 'pathology-brain-tumors',
  type: 'condition',
  name: 'Brain Tumors',
  alternateNames: ['Intracranial Tumors', 'CNS Tumors', 'Brain Neoplasms', 'Cerebral Tumors'],

  levels: {
    1: {
      level: 1,
      summary: 'Brain tumors are abnormal growths of cells inside the brain that can be cancerous or non-cancerous and may cause headaches, seizures, or other neurological problems.',
      explanation: `A brain tumor is a mass or growth of abnormal cells in the brain. Brain tumors can be either cancerous (malignant) or non-cancerous (benign), but even benign tumors can cause serious problems because the skull cannot expand to make room for growing tissue.

**Types of Brain Tumors:**

1. **Primary Brain Tumors**
   - Start in the brain itself
   - Can be benign or malignant
   - Named after the type of cell they come from

2. **Metastatic Brain Tumors**
   - Start somewhere else in the body and spread to the brain
   - More common than primary brain tumors
   - Always cancerous

**Common Symptoms:**

- Headaches (often worse in morning)
- Seizures
- Nausea or vomiting
- Vision or hearing problems
- Memory problems or confusion
- Weakness on one side of the body
- Personality or behavior changes

**Why Brain Tumors Are Serious:**

- The skull is a fixed space
- Growing tumors increase pressure
- Can damage nearby brain tissue
- Can block flow of brain fluid (CSF)

**Grading System:**

- **Grade 1**: Benign, slow-growing, may be curable with surgery
- **Grade 2**: Somewhat slow-growing, may come back
- **Grade 3**: Malignant, faster growing
- **Grade 4**: Most aggressive, fastest growing

**Common Brain Tumors in Adults:**

- Meningioma (usually benign)
- Glioblastoma (very aggressive)
- Astrocytoma
- Metastases from lung, breast, melanoma

**In Children:**

- Medulloblastoma
- Pilocytic astrocytoma
- Brain stem glioma

**Treatment Options:**

- Surgery to remove the tumor
- Radiation therapy
- Chemotherapy
- Targeted drug therapy

Doctors use scans like MRI to see brain tumors and plan treatment.`,
      keyTerms: [
        { term: 'brain tumor', definition: 'An abnormal growth of cells within the brain' },
        { term: 'benign', definition: 'Not cancerous; usually grows slowly and does not spread' },
        { term: 'malignant', definition: 'Cancerous; grows quickly and can spread' },
        { term: 'metastasis', definition: 'Cancer that has spread from its original location' },
        { term: 'glioma', definition: 'A tumor that starts in glial cells that support neurons' },
      ],
      analogies: [
        'A brain tumor in the skull is like a growing balloon in a closed box - as it grows, it squeezes everything inside.',
        'Metastatic brain tumors are like seeds from a plant that blew into a garden from somewhere else.',
        'Brain tumor grading is like storm categories - higher numbers mean more dangerous and faster moving.',
      ],
      examples: [
        'Meningiomas often grow on the outer covering of the brain and are usually not cancerous.',
        'Glioblastoma is the most aggressive brain tumor in adults and often comes back after treatment.',
        'Brain metastases are the most common brain tumors in adults, usually coming from lung or breast cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Brain tumors are classified by cell of origin, histological grade (WHO I-IV), and molecular features, with clinical presentation depending on location, size, and rate of growth.',
      explanation: `**Classification by Origin:**

**Neuroepithelial Tumors (Gliomas):**
- Astrocytic tumors: Astrocytoma, glioblastoma
- Oligodendrogliomas
- Ependymomas
- Medulloblastomas (embryonal)

**Meningeal Tumors:**
- Meningiomas (most common primary)
- Mesenchymal tumors
- Hemangiopericytomas

**Nerve Sheath Tumors:**
- Schwannomas (vestibular schwannoma)
- Neurofibromas

**Lymphomas:**
- Primary CNS lymphoma
- Secondary involvement

**Germ Cell Tumors:**
- Germinomas
- Teratomas

**Pituitary Tumors:**
- Pituitary adenomas
- Craniopharyngiomas

**Metastatic Tumors:**
- More common than primary brain tumors
- Lung, breast, melanoma, kidney, colon most common sources

**WHO Grading (CNS 5, 2021):**

**Grade 1:**
- Benant, low proliferative potential
- Often curable with surgery
- Pilocytic astrocytoma, meningioma (most)

**Grade 2:**
- Infiltrative, low mitotic activity
- Higher recurrence risk
- Diffuse astrocytoma, oligodendroglioma

**Grade 3:**
- Malignant, evidence of anaplasia
- Active mitotic activity
- Anaplastic astrocytoma, anaplastic oligodendroglioma

**Grade 4:**
- Cytologically malignant, mitotically active
- Necrosis and/or microvascular proliferation
- Glioblastoma, medulloblastoma

**Clinical Presentation:**

**General Symptoms (Increased Intracranial Pressure):**
- Headache (worse in morning, with Valsalva)
- Nausea/vomiting
- Papilledema
- Altered mental status

**Focal Symptoms (Depends on Location):**
- Frontal: Personality changes, executive dysfunction
- Temporal: Seizures, memory deficits, language
- Parietal: Sensory neglect, apraxia
- Occipital: Visual field deficits
- Posterior fossa: Ataxia, cranial nerve deficits

**Common Adult Brain Tumors:**

**Glioblastoma (GBM):**
- Most common malignant primary brain tumor
- IDH-wildtype (primary GBM)
- Enhancing mass with necrosis
- Poor prognosis (median ~15 months)

**Meningioma:**
- Most common benign brain tumor
- Dural-based, extra-axial
- Risk factors: Female, prior radiation, NF2
- Usually grade 1, atypical (grade 2) 15-20%

**Metastases:**
- 10x more common than primary brain tumors
- Often multiple, at gray-white junction
- MRI: Varies by primary tumor type
- Melanoma, lung, breast, renal cell, colon

**Primary CNS Lymphoma:**
- Associated with immunosuppression (HIV)
- Solitary or multiple
- Restricted diffusion on MRI
- Highly responsive to steroids (can vanish temporarily)

**Diagnostic Workup:**

**Imaging:**
- MRI with and without contrast (gold standard)
- CT for emergency, calcification, bone involvement
- Advanced: Perfusion, spectroscopy, PET

**Biopsy/Resection:**
- Histopathological diagnosis
- Molecular testing (IDH, 1p/19q, MGMT)
- Extent of resection affects prognosis`,
      keyTerms: [
        { term: 'WHO grading', definition: 'World Health Organization classification system for CNS tumors' },
        { term: 'IDH', definition: 'Isocitrate dehydrogenase; mutated in lower grade gliomas' },
        { term: '1p/19q', definition: 'Codeletion of chromosome arms 1p and 19q; diagnostic of oligodendroglioma' },
        { term: 'MGMT', definition: 'DNA repair enzyme; methylation predicts chemotherapy response' },
        { term: 'extra-axial', definition: 'Outside the brain parenchyma (e.g., meningioma)' },
      ],
      analogies: [
        'Tumor grading is like categorizing a storm - the higher the category, the more destructive it is.',
        'An infiltrative tumor is like water soaking into a sponge - hard to separate from normal tissue.',
        'Tumor markers like IDH and 1p/19q are like genetic fingerprints that identify the tumor type.',
      ],
    },
    3: {
      level: 3,
      summary: 'Modern brain tumor classification integrates histology with molecular markers (WHO CNS5 2021), with specific genetic alterations defining tumor types, guiding prognosis, and informing targeted therapies.',
      explanation: `**WHO CNS5 2021 Classification Principles:**

**Integrated Diagnosis:**
- Combines histology and molecular features
- Hierarchical reporting structure
- CIMP (combined IDH and 1p/19q status) for adult diffuse gliomas

**Adult Diffuse Gliomas:**

**Astrocytoma, IDH-mutant:**
- Categorized by grade (2, 3, 4)
- ATRX mutation, TP53 mutation common
- CDKN2A/B deletion = grade 4
- Better prognosis than IDH-wildtype

**Oligodendroglioma, IDH-mutant and 1p/19q-codeleted:**
- Grades 2 and 3
- TERT promoter mutation, CIC, FUBP1 alterations
- Chemosensitive (PCV)
- Best prognosis among diffuse gliomas

**Glioblastoma, IDH-wildtype:**
- Can be grade 4 histology or molecular (EGFR amplification, TERT promoter, +7/-10)
- "Glioblastoma" now reserved for IDH-wildtype
- IDH-mutant grade 4 = "Astrocytoma, IDH-mutant, grade 4"

**Molecular Markers:**

**IDH (Isocitrate Dehydrogenase):**
- IDH1 R132H most common mutation
- Mutant = better prognosis, younger age
- Wildtype = worse prognosis, older age
- IHC for R132H or sequencing

**1p/19q Codeletion:**
- Whole arm losses (not partial)
- Diagnostic of oligodendroglioma
- FISH or array testing
- Predicts chemotherapy response

**MGMT Promoter Methylation:**
- Silences DNA repair gene
- Predicts temozolomide response
- Favorable prognostic factor
- PCR or pyrosequencing

**Other Important Markers:**
- TERT promoter: Poor prognostic in IDH-wildtype
- ATRX loss: Associated with IDH mutation, ALT pathway
- BRAF V600E: Targetable mutation in various gliomas
- H3 K27M: Diffuse midline glioma (pontine, thalamic)
- H3 G34: High-grade hemispheric gliomas

**Pediatric Gliomas:**
- Different biology from adult
- BRAF fusions/duplications common
- H3 K27M (formerly DIPG)
- Better prognosis with complete resection

**Meningioma Genomics:**
- NF2 mutations (most common)
- TRAF7, KLF4, AKT1, SMO mutations
- Predict recurrence and location
- WHO grading still histology-based

**Molecular Pathways:**

**RTK/RAS/PI3K Pathway:**
- EGFR amplification common in GBM
- PTEN loss in GBM
- Targeted therapy trials ongoing

**p53 Pathway:**
- TP53 mutations in IDH-mutant gliomas
- MDM2 amplification in some gliomas
- Cell cycle control

**Cell Cycle:**
- CDKN2A/B deletion = grade 4
- RB pathway alterations
- CDK4/6 inhibitors under study

**Epigenetics:**
- G-CIMP (glioma CpG island methylator phenotype)
- Associated with IDH mutation
- MGMT methylation
- Histone mutations (H3.3 K27M, G34R/V)

**Immunology:**

**Tumor Microenvironment:**
- Immunosuppressive milieu
- Myeloid-derived suppressor cells
- Tumor-associated macrophages/microglia
- Checkpoint molecule expression

**Immunotherapy Approaches:**
- Checkpoint inhibitors (limited success in GBM)
- CAR-T cell therapy (trials)
- Tumor vaccines (DCVax, etc.)
- Oncolytic viruses`,
      keyTerms: [
        { term: 'CIMP', definition: 'CpG island methylator phenotype; associated with IDH mutation' },
        { term: 'ATRX', definition: 'Chromatin remodeler; loss associated with IDH-mutant gliomas' },
        { term: 'ALT', definition: 'Alternative lengthening of telomeres; ATRX-associated pathway' },
        { term: 'DIPG', definition: 'Diffuse intrinsic pontine glioma; now called diffuse midline glioma H3 K27-mutant' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy' },
      ],
      clinicalNotes: 'The WHO CNS5 classification (2021) fundamentally changed adult diffuse glioma classification. All are first stratified by IDH status, then 1p/19q codeletion if IDH-mutant. "Glioblastoma" is now reserved for IDH-wildtype tumors. This molecular classification better predicts prognosis and treatment response than histology alone.',
    },
    4: {
      level: 4,
      summary: 'Advanced brain tumor management includes multimodal treatment planning, clinical trial design, management of treatment complications, and approaches to recurrent disease.',
      explanation: `**Surgical Management:**

**Extent of Resection:**
- Gross total resection when feasible
- 5-ALA fluorescence-guided surgery
- Intraoperative MRI
- Awake craniotomy for eloquent areas
- Resection correlates with survival

**Biopsy Strategies:**
- Frame-based stereotactic
- Frameless neuronavigation
- Stereotactic needle biopsy
- Risk assessment for eloquent areas

**Radiation Therapy:**

**Conventional Fractionation:**
- Glioblastoma: 60 Gy in 30 fractions
- Adjuvant to surgery and chemotherapy
- Target: T2/FLAIR + 2 cm margin

**Hypofractionation:**
- Elderly or poor performance status
- 40 Gy in 15 fractions
- Similar outcomes in selected patients

**Stereotactic Radiosurgery (SRS):**
- Metastases: Single or few lesions
- Gamma Knife or LINAC-based
- High dose, steep falloff
- Avoids whole brain radiation side effects

**Proton Therapy:**
- Reduced exit dose
- Pediatric brain tumors
- Skull base tumors
- Second malignancy reduction

**Chemotherapy:**

**Temozolomide:**
- Standard for GBM
- Concurrent with radiation, then adjuvant
- MGMT methylation predicts response
- Well-tolerated orally

**PCV (Procarbazine, CCNU, Vincristine):**
- Oligodendroglioma standard
- 1p/19q codeleted tumors
- Long-term survival benefit demonstrated

**Bevacizumab:**
- Anti-VEGF antibody
- Pseuoresponse phenomenon (contrast enhancement decreases without tumor reduction)
- Symptom control, steroid reduction
- No proven survival benefit

**Lomustine (CCNU):**
- Second-line for recurrent GBM
- Cumulative myelosuppression
- Re-irradiation combinations

**Tumor Treating Fields (Optune):**
- Alternating electric fields
- Interferes with cell division
- Wearable device
- Modest survival benefit in GBM

**Clinical Trial Design:**

**Phase 0 (Exploratory):**
- Pharmacokinetic studies
- Target engagement
- Limited patient numbers

**Adaptive Trials:**
- I-SPY, GBM AGILE models
- Response-adaptive randomization
- Biomarker-driven cohorts
- Master protocols

**Pseudoprogression vs True Progression:**
- Occurs 1-3 months post-chemoradiation
- Increased enhancement without true growth
- Often asymptomatic
- Confounds trial endpoints
- Advanced imaging (perfusion, spectroscopy) may help

**Treatment Complications:**

**Radiation Necrosis:**
- Occurs months to years after radiation
- Mass-like enhancement
- Perfusion imaging: Low rCBV
- Steroids, bevacizumab, or surgery

**Pseudoresponse:**
- Bevacizumab effect
- Contrast leakage reduced
- Non-enhancing tumor progression
- Diffusion/perfusion monitoring

**Immune-Related Adverse Events:**
- Hypophysitis
- Encephalitis
- Colitis, dermatitis, hepatitis
- Checkpoint inhibitor complications

**Radiation-Induced Cognitive Decline:**
- Hippocampal sparing techniques
- Memantine protective
- Especially with whole brain radiation

**Recurrent Disease Management:**

**Re-Operation:**
- If accessible, good performance status
- Repeat resection benefit uncertain
- Cavity-directed therapies (Gliadel wafers)

**Re-Irradiation:**
- SRS for focal recurrence
- Brachytherapy options
- Risk of radiation necrosis

**Systemic Therapy:**
- Lomustine
- Bevacizumab
- Regorafenib (modest benefit)
- Clinical trial enrollment preferred

**Supportive Care:**
- Seizure prophylaxis/management
- Steroids for edema
- Venous thromboembolism prevention
- Rehabilitation services
- Palliative care integration`,
      keyTerms: [
        { term: '5-ALA', definition: '5-aminolevulinic acid; causes tumor fluorescence during surgery' },
        { term: 'pseudoprogression', definition: 'Transient enhancement increase after chemoradiation, not true tumor growth' },
        { term: 'pseudoresponse', definition: 'Apparent tumor response due to decreased contrast leakage, not actual shrinkage' },
        { term: 'rCBV', definition: 'Relative cerebral blood volume; elevated in tumor, low in radiation necrosis' },
        { term: 'Gliadel wafer', definition: 'Biodegradable wafer impregnated with carmustine (BCNU) for surgical cavity' },
      ],
      clinicalNotes: 'Pseudoprogression is common 1-3 months after chemoradiation for GBM and can be mistaken for tumor progression. PET imaging or perfusion MRI may help differentiate, but often observation is necessary if asymptomatic. True progression often shows elevated rCBV on perfusion imaging.',
    },
    5: {
      level: 5,
      summary: 'Expert brain tumor management encompasses advanced molecular diagnostics, personalized therapy selection, innovative clinical trial participation, and comprehensive multidisciplinary care coordination.',
      explanation: `**Advanced Molecular Diagnostics:**

**Comprehensive Genomic Profiling:**
- Foundation Medicine, Tempus, Caris panels
- Actionable mutation identification
- Clinical trial matching
- Resistance mechanism analysis

**Liquid Biopsy (CSF):**
- Circulating tumor DNA (ctDNA)
- Methylation profiling
- Response monitoring
- Minimal residual disease detection

**Methylation Profiling:**
- Genome-wide methylation arrays
- Tumor classification refinement
- CNS tumor classifier algorithms
- Superior to histology in some cases

**Personalized Medicine Approaches:**

**Targeted Therapy:**
- BRAF V600E inhibitors (dabrafenib + trametinib)
- For BRAF-mutant gliomas, melanoma metastases
- Dramatic responses in selected patients

**TRK Inhibitors:**
- Larotrectinib, entrectinib
- NTRK fusion-positive tumors
- Pan-cancer approval

**IDH Inhibitors:**
- Ivosidenib, vorasidenib
- For IDH-mutant gliomas
- Clinical trials ongoing

**EGFR Targeting:**
- Amplification common in GBM
- EGFRvIII mutation (vaccine trials)
- Resistance mechanisms complex

**Clinical Trial Innovation:**

**Umbrella Trials:**
- Molecular subtype-based treatment assignment
- Multiple targeted therapy arms
- Umbrella approaches in GBM AGILE

**Basket Trials:**
- Histology-agnostic, biomarker-driven
- Same treatment across tumor types
- NTRK, MSI-high examples

**Window-of-Opportunity Trials:**
- Treatment between diagnosis and surgery
- Pharmacodynamic endpoints
- Target engagement proof

**Neoadjuvant Approaches:**
- Treatment before surgery
- Immunotherapy priming
- Enhanced antigen presentation
- CheckMate 548, CheckMate 498

**Advanced Imaging:**

**Amino Acid PET:**
- FET, FLT, methionine
- Tumor vs radiation necrosis
- Treatment response assessment
- Lower background than FDG in brain

**Chemical Exchange Saturation Transfer (CEST):**
- Amide proton transfer (APT)
- pH imaging
- Tumor cellularity
- Glioma grading

**Diffusion Tensor Imaging (DTI):**
- White matter tractography
- Surgical planning
- Function-sparing approaches
- Connectomics

**Multiparametric MRI:**
- Perfusion, spectroscopy, diffusion
- Radiomics features
- Machine learning classification
- Response prediction

**Pediatric Neuro-Oncology:**

**Embryonal Tumors:**
- Medulloblastoma molecular subtypes (WNT, SHH, Group 3, Group 4)
- Risk stratification by molecular features
- Reduced craniospinal radiation in WNT
- Targeted therapy trials (SHH inhibitors)

**Low-Grade Gliomas:**
- BRAF alterations common
- Long-term survival focus
- Late effects minimization
- Vision preservation in optic pathway tumors

**Ependymomas:**
- Supratentorial, posterior fossa, spinal molecular groups
- RELA fusion (supratentorial)
- PFA vs PFB (posterior fossa)
- Location-specific treatment

**Multidisciplinary Care:**

**Tumor Boards:**
- Neurosurgery, neuro-oncology, radiation oncology
- Neuroradiology, neuropathology
- Clinical trials coordination
- Molecular tumor board

**Supportive Services:**
- Neuropsychology
- Rehabilitation medicine
- Palliative care integration
- Social work, nutrition
- Patient navigation

**Survivorship:**
- Long-term follow-up protocols
- Cognitive rehabilitation
- Endocrine monitoring
- Second malignancy screening
- Quality of life focus

**Research Frontiers:**

**CAR-T Cell Therapy:**
- IL13Ra2 targeting
- EGFRvIII targeting
- HER2 targeting
- Challenges: Antigen heterogeneity, immunosuppression

**Oncolytic Viruses:**
- G47delta (HSV-1 modified)
- Approved in Japan
- Toca 511/FC (cytosine deaminase)
- Local and systemic immune activation

**Dendritic Cell Vaccines:**
- DCVax-L for GBM
- Autologous tumor lysate
- Immune priming

**Gene Therapy:**
- Adenoviral vectors
- Tumor-selective replicating viruses
- Suicide gene therapy
- Delivery challenges`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; released from tumor cells into blood or CSF' },
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical images' },
        { term: 'SHH', definition: 'Sonic hedgehog signaling pathway; medulloblastoma subgroup' },
        { term: 'PFA', definition: 'Posterior fossa group A ependymoma; poor prognosis' },
        { term: 'window-of-opportunity', definition: 'Clinical trial design treating between diagnosis and surgery' },
      ],
      clinicalNotes: 'Expert decision points: (1) Pseudoprogression management requires patience and multimodal imaging assessment. (2) MGMT methylation testing should be standard for all high-grade gliomas - it predicts temozolomide benefit and prognosis. (3) Molecular profiling at recurrence may reveal new actionable targets or transformation to higher grade. (4) Clinical trial enrollment at first recurrence offers the best outcomes for GBM patients.',
    },
  },

  media: [
    {
      id: 'brain-tumor-mri',
      type: 'image',
      filename: 'glioblastoma-mri.jpg',
      title: 'Glioblastoma MRI',
      description: 'Contrast-enhanced MRI showing ring-enhancing glioblastoma with central necrosis',
    },
  ],

  citations: [
    {
      id: 'who-cns5',
      type: 'textbook',
      title: 'WHO Classification of Tumours of the Central Nervous System',
      source: 'IARC Press',
    },
    {
      id: 'stupp-gbm',
      type: 'article',
      title: 'Effects of Radiotherapy with Concomitant and Adjuvant Temozolomide versus Radiotherapy Alone on Survival in Glioblastoma',
      authors: ['Stupp, R.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'pathology-neurodegeneration', targetType: 'condition', relationship: 'related', label: 'Neurodegeneration' },
    { targetId: 'pathology-cns-infections', targetType: 'condition', relationship: 'related', label: 'CNS Infections' },
    { targetId: 'structure-brain', targetType: 'structure', relationship: 'see-also', label: 'Brain Anatomy' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pathology', 'oncology', 'neurosurgery'],
    keywords: ['brain tumor', 'glioma', 'glioblastoma', 'meningioma', 'metastasis', 'neuro-oncology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'neurosurgery'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default brainTumors;
