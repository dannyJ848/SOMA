/**
 * Cancer Biology and Oncology Encyclopedia Entries
 * 
 * Transcribed from Open Educational Resources (CC BY 4.0)
 */

import type { EncyclopediaEntry } from '../types';

export const cancerOverviewEntry: EncyclopediaEntry = {
  entryId: 'cancer',
  name: 'Cancer - Overview',
  entryType: 'condition',
  category: 'oncologic',
  summary: 'A group of diseases characterized by uncontrolled cell growth and spread to other tissues.',
  overview: {
    patient: 'Cancer is a disease where cells in your body grow uncontrollably and can spread to other parts of your body. Normally, your cells grow, divide, and die in an orderly way. But cancer cells keep growing and dividing when they should not, forming tumors. Some cancers, like leukemia, do not form solid tumors but affect blood and bone marrow. Cancer can start almost anywhere in the body and is named after where it begins. Treatment options include surgery, radiation, chemotherapy, immunotherapy, and targeted therapy.',
    intermediate: 'Cancer is a collection of related diseases characterized by dysregulated cell proliferation, evasion of growth suppressors, resistance to cell death, replicative immortality, induced angiogenesis, and activation of invasion and metastasis. These "hallmarks of cancer" result from accumulated genetic and epigenetic alterations in oncogenes and tumor suppressor genes. Cancer cells develop autonomous growth signals, ignore anti-growth signals, avoid apoptosis, maintain telomeres enabling unlimited replication, stimulate blood vessel formation for nutrients, and acquire the ability to invade local tissues and metastasize to distant sites. Major types include carcinomas (epithelial origin), sarcomas (mesenchymal), leukemias (blood-forming), and lymphomas (lymphatic). The TNM staging system (Tumor, Node, Metastasis) describes extent of disease.',
    professional: 'Cancer represents a complex constellation of diseases unified by common biological capabilities acquired through diverse genetic and epigenetic mechanisms. The hallmarks of cancer framework (Hanahan & Weinberg) describes ten capabilities: (1) sustained proliferative signaling, (2) evasion of growth suppressors, (3) resistance to cell death, (4) replicative immortality, (5) induction of angiogenesis, (6) activation of invasion and metastasis, (7) genome instability and mutation, (8) tumor-promoting inflammation, (9) reprogramming of energy metabolism, and (10) evasion of immune destruction. Molecular mechanisms involve oncogene activation (RAS, MYC, EGFR, BRAF), tumor suppressor inactivation (TP53, RB1, PTEN, APC), DNA repair defects (BRCA1/2, mismatch repair), telomerase reactivation (hTERT), metabolic reprogramming (Warburg effect, aerobic glycolysis), and immune editing. The tumor microenvironment (stroma, immune cells, ECM, cytokines, hypoxia) critically influences tumor progression.',
  },
  content: [
    {
      title: 'Hallmarks of Cancer',
      content: {
        patient: `Cancer cells share several characteristics that allow them to grow out of control. They can grow without the signals that normally tell cells to divide. They ignore signals that tell them to stop growing or to die. They can make new blood vessels to supply themselves with nutrients. They can invade nearby tissues and spread to distant parts of the body through the bloodstream or lymph system. They also hide from the immune system, which would normally recognize and destroy abnormal cells.`,
        intermediate: `The eight classical hallmarks of cancer: (1) Sustained proliferative signaling - cancer cells produce their own growth signals or have overactive signaling pathways (EGFR, RAS-RAF-MEK-ERK, PI3K-AKT-mTOR). (2) Evading growth suppressors - loss of tumor suppressors like p53 and RB that normally halt cell cycle. (3) Resisting cell death - defects in apoptosis pathways (BCL-2 overexpression, p53 mutations). (4) Enabling replicative immortality - telomerase reactivation maintaining telomeres. (5) Inducing angiogenesis - VEGF production recruiting blood vessels. (6) Activating invasion and metastasis - EMT transition, loss of E-cadherin, increased motility. Two enabling characteristics: genome instability (mutations) and tumor-promoting inflammation. Two emerging hallmarks: metabolic reprogramming (Warburg effect) and immune evasion.`,
        professional: `Detailed mechanisms of cancer hallmarks:

Sustained proliferative signaling: Autocrine growth factor loops (TGF-α, PDGF), constitutively active receptors (EGFRvIII, HER2 amplification), downstream signaling pathway mutations (KRAS - 30% cancers, BRAF V600E - melanoma). Growth factor independence through pathway crosstalk.

Evasion of growth suppressors: p53 pathway disruption (50% of cancers) through TP53 mutation, MDM2 amplification, or viral oncoproteins. RB pathway inactivation through RB mutation, cyclin D overexpression, CDK4/6 amplification, or p16INK4a loss. Contact inhibition lost through LKB1, NF2 mutations.

Resistance to cell death: Apoptosis evasion via BCL-2 family dysregulation (overexpression of anti-apoptotic BCL-2, BCL-xL; loss of pro-apoptotic BAX, BAK), IAP upregulation, death receptor downregulation. Autophagy manipulation - initially tumor suppressive, later can promote survival.

Replicative immortality: Telomerase (hTERT) reactivation in 85-95% of cancers; alternative lengthening of telomeres (ALT) in remainder. Shelterin complex alterations.

Angiogenesis: VEGF-A primary driver, also FGF, PDGF, angiopoietins. Hypoxia-inducible factors (HIF-1α, HIF-2α) activate angiogenic gene programs. Vessel normalization concept with anti-angiogenic therapy.

Invasion and metastasis: Multi-step process - local invasion (EMT, basement membrane degradation via MMPs), intravasation, survival in circulation, extravasation, colonization. Metastatic tropism (seed and soil hypothesis).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'cell', structureName: 'Cell', linkText: 'Cell Biology', relevance: 'Origin of cancer' },
  ],
  references: [
    {
      referenceId: 'ncn-guidelines',
      type: 'guideline',
      title: 'NCCN Clinical Practice Guidelines in Oncology',
      authors: 'National Comprehensive Cancer Network',
      source: 'NCCN',
      year: 2024,
      url: 'https://www.nccn.org/professionals/physician_gls/',
      citation: 'National Comprehensive Cancer Network. NCCN Clinical Practice Guidelines in Oncology. 2024.',
    },
  ],
  relatedEntries: [
    { entryId: 'lung-cancer', entryType: 'condition', name: 'Lung Cancer', relationship: 'related-to' },
    { entryId: 'breast-cancer', entryType: 'condition', name: 'Breast Cancer', relationship: 'related-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['cancer', 'oncology', 'tumor', 'malignancy', 'neoplasm', 'metastasis'],
    secondaryKeywords: ['carcinoma', 'sarcoma', 'lymphoma', 'leukemia', 'oncogenes', 'tumor suppressors'],
    synonyms: ['malignancy', 'neoplasm', 'tumor', 'oncologic disease'],
    tags: ['oncology', 'pathology', 'genetics', 'molecular biology'],
  },
};

export const lungCancerEntry: EncyclopediaEntry = {
  entryId: 'lung-cancer',
  name: 'Lung Cancer',
  entryType: 'condition',
  category: 'oncologic',
  summary: 'Leading cause of cancer death, primarily from smoking, with NSCLC (85%) and SCLC (15%) types.',
  overview: {
    patient: 'Lung cancer is the deadliest cancer worldwide, mainly caused by smoking. There are two main types: non-small cell lung cancer (about 85% of cases), which grows more slowly, and small cell lung cancer (15%), which grows and spreads quickly. Symptoms include persistent cough, coughing up blood, chest pain, and shortness of breath. The best way to prevent lung cancer is to not smoke. Screening with low-dose CT scans is recommended for high-risk smokers.',
    intermediate: 'Lung cancer is the leading cause of cancer mortality globally. Risk factors include tobacco smoking (85% of cases), secondhand smoke, radon, asbestos, air pollution. NSCLC (85%) includes adenocarcinoma (peripheral, EGFR/ALK mutations), squamous cell (central, smoking-related), and large cell. SCLC (15%) is neuroendocrine, central, with early metastasis. TNM staging I-IV. Molecular testing for EGFR, ALK, ROS1, BRAF, MET, RET, KRAS mutations guides targeted therapy. PD-L1 expression guides immunotherapy. Treatment includes surgery for early stage, chemoradiation for locally advanced, and targeted therapy or immunotherapy for metastatic disease.',
    professional: 'Lung cancer comprehensive management includes risk stratification using Bach or PLCOm2012 models. Pathology classification: adenocarcinoma (lepidic, acinar, papillary, micropapillary, solid patterns), squamous cell (keratinizing, non-keratinizing), SCLC (small blue cells, high mitotic rate). Comprehensive molecular profiling mandatory for advanced NSCLC. Driver mutations: EGFR (15-20%), ALK (5%), ROS1 (2%), BRAF V600E (2%), MET exon 14 skipping (3%), RET (2%), KRAS G12C (13%). Resistance mechanisms include EGFR T790M and MET amplification. Staging per AJCC 8th edition. Treatment algorithms based on stage, histology, and molecular profile. Screening with annual low-dose CT for ages 50-80 with 20+ pack-year history.',
  },
  content: [
    {
      title: 'Types and Pathology',
      content: {
        patient: `There are two main types of lung cancer. Non-small cell lung cancer (NSCLC) is the most common, making up about 85% of cases. It has three subtypes: adenocarcinoma (often in outer lung areas), squamous cell carcinoma (often in central airways), and large cell carcinoma. Small cell lung cancer (SCLC) grows faster and spreads more quickly. It is strongly linked to smoking and often starts in the center of the chest.`,
        intermediate: `NSCLC histologic subtypes: Adenocarcinoma (40% of lung cancers, peripheral, associated with EGFR mutations in non-smokers, can present as subsolid nodules), squamous cell carcinoma (25-30%, central, cavitation, smoking-related, often KRAS/KEAP1 mutations), large cell carcinoma (5%, undifferentiated, diagnosis of exclusion). SCLC characteristics: Central location, rapid doubling time, early lymph node and distant metastasis, paraneoplastic syndromes (SIADH, Lambert-Eaton), initial chemo-sensitivity but universal relapse. Neuroendocrine spectrum includes typical carcinoid (low grade), atypical carcinoid (intermediate), large cell neuroendocrine carcinoma (high grade), and SCLC (high grade).`,
        professional: `Detailed lung cancer pathology:

Adenocarcinoma IASLC/ATS/ERS classification: Preinvasive lesions (AAH, AIS, MIA), invasive adenocarcinoma with predominant subtype (lepidic, acinar, papillary, micropapillary, solid). Micropapillary and solid patterns associated with poor prognosis. Invasive mucinous adenocarcinoma (colloid, enteric, fetal variants) often KRAS-mutated.

Squamous cell carcinoma: Keratinizing vs non-keratinizing, basaloid variant. Immunohistochemistry: p40+, p63+, CK5/6+, TTF-1-, napsin A-. Often harbor TP53, KEAP1, NFE2L2 mutations.

SCLC pathology: Small round blue cells, scant cytoplasm, nuclear molding, salt-and-pepper chromatin, high mitotic rate (>10 per 2 mm²). Combined SCLC has NSCLC component (often adenocarcinoma or squamous). Neuroendocrine markers: chromogranin A, synaptophysin, CD56 positive.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'lungs', structureName: 'Lungs', linkText: 'Lungs', relevance: 'Primary site' },
    { structureId: 'bronchi', structureName: 'Bronchi', linkText: 'Bronchi', relevance: 'Airway involvement' },
  ],
  references: [
    {
      referenceId: 'nccn-lung-2024',
      type: 'guideline',
      title: 'NCCN Guidelines: Non-Small Cell Lung Cancer',
      source: 'NCCN',
      year: 2024,
      citation: 'NCCN Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer. Version 3.2024.',
    },
  ],
  relatedEntries: [
    { entryId: 'cancer', entryType: 'condition', name: 'Cancer Overview', relationship: 'related-to' },
    { entryId: 'copd', entryType: 'condition', name: 'COPD', relationship: 'caused-by' },
  ],
  searchMetadata: {
    primaryKeywords: ['lung cancer', 'NSCLC', 'SCLC', 'adenocarcinoma', 'squamous cell carcinoma'],
    secondaryKeywords: ['smoking', 'EGFR', 'ALK', 'immunotherapy', 'targeted therapy'],
    synonyms: ['bronchogenic carcinoma', 'pulmonary malignancy'],
    tags: ['oncology', 'pulmonology', 'smoking-related'],
  },
};

export const breastCancerEntry: EncyclopediaEntry = {
  entryId: 'breast-cancer',
  name: 'Breast Cancer',
  entryType: 'condition',
  category: 'oncologic',
  summary: 'Most common cancer in women, with multiple subtypes based on receptor status and molecular profile.',
  overview: {
    patient: 'Breast cancer is the most common cancer in women worldwide. It starts when cells in the breast grow out of control. Most breast cancers begin in the ducts or lobules. Risk factors include female sex, age, family history, genetic mutations (BRCA1/2), and hormone exposure. There are different types based on hormone receptors (estrogen, progesterone) and HER2 status. Treatment often involves surgery, radiation, hormone therapy, chemotherapy, or targeted therapy.',
    intermediate: 'Breast cancer is heterogeneous with multiple subtypes. Ductal carcinoma in situ (DCIS) is pre-invasive. Invasive ductal carcinoma (IDC) is most common (70-80%). Invasive lobular carcinoma (10-15%) has different growth pattern. Molecular subtypes: Luminal A (ER+/PR+, low Ki-67, good prognosis), Luminal B (ER+ but higher grade or HER2+), HER2-enriched (ER-, PR-, HER2+), Basal-like/triple-negative (ER-, PR-, HER2-, often BRCA1-associated). Risk factors: female sex, age, BRCA1/2 mutations, family history, dense breasts, early menarche, late menopause, nulliparity, hormone replacement therapy. Screening mammography reduces mortality. Treatment based on stage, biology, and patient factors.',
    professional: 'Breast cancer comprehensive management: Pathology includes IDC (no special type), ILC (loss of E-cadherin), special types (tubular, mucinous, medullary with better prognosis; metaplastic, micropapillary with worse). Molecular classification by PAM50: Luminal A, Luminal B, HER2-enriched, Basal-like, Normal-like. Genomic assays (Oncotype DX, MammaPrint) guide adjuvant chemotherapy decisions in ER+ node-negative or 1-3 node-positive. Staging AJCC 8th includes anatomic stage and prognostic stage incorporating grade, ER/PR, HER2. Neoadjuvant chemotherapy preferred for triple-negative, HER2+, node-positive. Adjuvant endocrine therapy (tamoxifen, aromatase inhibitors) for 5-10 years for ER+ disease. HER2-targeted therapy (trastuzumab, pertuzumab) dramatically improves outcomes. Metastatic disease treatment based on biology: CDK4/6 inhibitors + endocrine therapy for ER+/HER2-, HER2-targeted combinations for HER2+, chemotherapy/immunotherapy (pembrolizumab for PD-L1+) for triple-negative.',
  },
  content: [
    {
      title: 'Subtypes and Classification',
      content: {
        patient: `Breast cancer is classified in several ways. By where it starts: ductal (in milk ducts) or lobular (in milk-producing glands). By invasiveness: in situ (confined to ducts/lobules) or invasive (spread to surrounding tissue). By receptor status: hormone receptor-positive (responds to estrogen or progesterone), HER2-positive (overexpresses HER2 protein), or triple-negative (none of these receptors). Each type responds to different treatments.`,
        intermediate: `Breast cancer classification systems: Histologic (ductal vs lobular, special subtypes). Immunohistochemical (ER, PR, HER2, Ki-67 proliferation index). Molecular (Luminal A: ER+/PR+, HER2-, low Ki-67; Luminal B: ER+ and/or PR+, HER2- or HER2+, higher Ki-67; HER2-enriched: ER-, PR-, HER2+; Basal-like: ER-, PR-, HER2-, CK5/6+, EGFR+). Genomic classifiers (PAM50) identify intrinsic subtypes. DCIS grades low, intermediate, high. Invasive carcinoma Nottingham grade (tubule formation, nuclear pleomorphism, mitotic count). Stage 0 (DCIS) to IV (metastatic).`,
        professional: `Detailed breast cancer biology:

Molecular subtypes by gene expression: Luminal A (ESR1-high, PGR-high, low proliferation, best prognosis), Luminal B (ESR1-high, higher proliferation, worse than A), HER2-enriched (ERBB2 amplification, ER-negative cluster), Basal-like (basal cytokeratin expression, claudin-low, often BRCA1-mutated), Normal-like, Claudin-low (mesenchymal features, poor prognosis, chemosensitive).

Genetic risk: BRCA1 (lifetime risk 60-70%, triple-negative/basal-like), BRCA2 (45-70%, ER+ more common), TP53 (Li-Fraumeni), PTEN (Cowden), PALB2, CHEK2, ATM. Multigene panels identify moderate-risk variants.

Tumor microenvironment: Tumor-infiltrating lymphocytes (TILs) predictive of response to chemotherapy and immunotherapy in triple-negative. Stromal features (desmoplasia, collagen alignment). Immune signatures (lymphocyte-predominant).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'breast', structureName: 'Breast', linkText: 'Breast Anatomy', relevance: 'Primary site' },
    { structureId: 'lymph-nodes', structureName: 'Lymph Nodes', linkText: 'Axillary Lymph Nodes', relevance: 'Staging' },
  ],
  references: [
    {
      referenceId: 'nccn-breast-2024',
      type: 'guideline',
      title: 'NCCN Guidelines: Breast Cancer',
      source: 'NCCN',
      year: 2024,
      citation: 'NCCN Clinical Practice Guidelines in Oncology: Breast Cancer. Version 4.2024.',
    },
  ],
  relatedEntries: [
    { entryId: 'cancer', entryType: 'condition', name: 'Cancer Overview', relationship: 'related-to' },
    { entryId: 'chemotherapy', entryType: 'condition', name: 'Chemotherapy', relationship: 'treats' },
  ],
  searchMetadata: {
    primaryKeywords: ['breast cancer', 'mammary carcinoma', 'ductal carcinoma', 'lobular carcinoma'],
    secondaryKeywords: ['ER', 'PR', 'HER2', 'triple negative', 'BRCA', 'mastectomy'],
    synonyms: ['mammary carcinoma', 'breast carcinoma'],
    tags: ['oncology', 'womens health', 'surgical oncology'],
  },
};

// Export all entries
export const cancerOncologyEntries: EncyclopediaEntry[] = [
  cancerOverviewEntry,
  lungCancerEntry,
  breastCancerEntry,
];
