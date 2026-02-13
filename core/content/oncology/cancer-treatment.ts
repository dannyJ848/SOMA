import { EducationalContent } from '../types';

/**
 * Cancer Treatment Modalities
 *
 * Comprehensive educational content covering surgical oncology, chemotherapy,
 * radiation therapy, immunotherapy, targeted therapy, and hormonal therapy.
 */

export const surgicalOncology: EducationalContent = {
  id: 'surgical-oncology',
  type: 'topic',
  name: 'Surgical Oncology',
  nameEs: 'Oncología Quirúrgica',
  alternateNames: ['Cancer Surgery', 'Oncologic Surgery'],
  levels: {
    1: {
      level: 1,
      summary: 'Surgery removes cancer from the body by cutting it out.',
      explanation:
        'When doctors find a tumor, one of the main ways to treat it is by removing it with surgery. ' +
        'The surgeon takes out the cancer along with a small border of healthy tissue around it to make sure no cancer cells are left behind. ' +
        'Surgery works best when the cancer is in one spot and has not spread to other parts of the body.',
      keyTerms: [
        { term: 'surgery', definition: 'An operation to remove cancer from the body' },
        { term: 'tumor removal', definition: 'Cutting out the cancerous lump' },
        { term: 'biopsy', definition: 'Taking a small piece of tissue to check if it is cancer' },
      ],
      analogies: [
        'Surgery is like removing a weed from a garden — you try to get all the roots so it does not grow back.',
      ],
      patientCounselingPoints: [
        'Surgery is often the first step in treating many cancers.',
        'Recovery time varies depending on the type and size of the operation.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Surgical oncology involves tumor resection with adequate margins, lymph node evaluation, and may include reconstructive procedures.',
      explanation:
        'Cancer surgery goals include:\n' +
        '- **Curative resection**: Complete removal of the tumor with clear (negative) margins.\n' +
        '- **Debulking**: Removing as much tumor as possible when complete removal is not feasible.\n' +
        '- **Staging surgery**: Determining the extent of cancer spread (e.g., sentinel lymph node biopsy).\n' +
        '- **Palliative surgery**: Relieving symptoms such as obstruction or bleeding.\n\n' +
        'Sentinel lymph node biopsy identifies the first lymph node to which cancer would spread, avoiding unnecessary removal of many lymph nodes. ' +
        'Minimally invasive techniques (laparoscopic, robotic) reduce recovery time.',
      keyTerms: [
        { term: 'resection', definition: 'Surgical removal of tissue or an organ' },
        { term: 'margins', definition: 'The edge of tissue removed during surgery; negative means no cancer at the edge' },
        { term: 'sentinel lymph node biopsy', definition: 'Removing the first draining lymph node to check for cancer spread' },
        { term: 'debulking', definition: 'Removing as much cancer as possible when complete removal is not achievable' },
        { term: 'palliative surgery', definition: 'Surgery to relieve symptoms, not cure the cancer' },
        { term: 'minimally invasive surgery', definition: 'Operations using small incisions and cameras (laparoscopy/robotics)' },
      ],
      clinicalNotes:
        'Sentinel lymph node biopsy has replaced routine axillary dissection in early-stage breast cancer and is standard in melanoma. R0 resection (microscopically negative margins) is the goal of curative surgery.',
    },
    3: {
      level: 3,
      summary: 'Surgical oncology principles include en bloc resection, adequate lymphadenectomy, margin assessment, and neoadjuvant/adjuvant sequencing.',
      explanation:
        'Surgical principles:\n' +
        '- **R-classification**: R0 = no residual tumor; R1 = microscopic residual; R2 = macroscopic residual.\n' +
        '- **En bloc resection**: Removing tumor with attached surrounding structures without violating the tumor plane.\n' +
        '- **Lymphadenectomy**: Adequate lymph node harvest for accurate staging (e.g., ≥12 nodes in colon cancer).\n' +
        '- **Frozen section**: Intraoperative pathologic assessment of margins.\n\n' +
        'Treatment sequencing:\n' +
        '- **Neoadjuvant therapy**: Chemotherapy/radiation before surgery to shrink tumor and improve resectability.\n' +
        '- **Adjuvant therapy**: Treatment after surgery to eliminate microscopic residual disease.\n\n' +
        'Examples of surgical approaches:\n' +
        '- Whipple procedure (pancreaticoduodenectomy) for pancreatic head cancer.\n' +
        '- Total mesorectal excision (TME) for rectal cancer.\n' +
        '- Lobectomy/pneumonectomy for lung cancer.\n' +
        '- Wide local excision for melanoma (margins based on Breslow depth).',
      keyTerms: [
        { term: 'R0 resection', definition: 'Complete tumor removal with microscopically negative margins' },
        { term: 'en bloc resection', definition: 'Removal of tumor and surrounding structures as a single specimen' },
        { term: 'neoadjuvant therapy', definition: 'Treatment given before surgery to shrink the tumor' },
        { term: 'adjuvant therapy', definition: 'Treatment given after surgery to reduce recurrence risk' },
        { term: 'frozen section', definition: 'Rapid intraoperative pathologic assessment of tissue margins' },
        { term: 'total mesorectal excision', definition: 'Sharp dissection of the mesorectum for rectal cancer' },
        { term: 'lymphadenectomy', definition: 'Surgical removal of lymph nodes for staging and treatment' },
      ],
      examples: [
        'Neoadjuvant FOLFOX + anti-PD-1 in MSI-H rectal cancer achieved 100% clinical complete response in the NICHE-2 / Memorial Sloan Kettering study.',
        'ACOSOG Z0011 trial showed that sentinel node-positive breast cancer patients can omit axillary dissection if receiving whole-breast radiation.',
      ],
      clinicalNotes:
        'Total neoadjuvant therapy (TNT) is standard for locally advanced rectal cancer. ' +
        'The "watch and wait" approach after complete clinical response to neoadjuvant therapy avoids surgery in select rectal cancer patients. ' +
        'Cytoreductive surgery with HIPEC is used for peritoneal carcinomatosis (appendiceal, colorectal, ovarian).',
    },
    4: {
      level: 4,
      summary: 'Advanced surgical oncology integrates molecular profiling for surgical decision-making, intraoperative imaging, and organ-preserving strategies.',
      explanation:
        '**Molecular-Guided Surgery**\n' +
        'Oncotype DX (21-gene recurrence score) and MammaPrint (70-gene signature) guide the decision for adjuvant chemotherapy in ER+ breast cancer, directly influencing surgical planning. ' +
        'MSI/MMR status in rectal cancer may allow organ preservation with immunotherapy alone (dostarlimab study).\n\n' +
        '**Intraoperative Technology**\n' +
        '- Fluorescence-guided surgery using ICG (indocyanine green) identifies sentinel nodes and assesses tissue perfusion.\n' +
        '- Intraoperative ultrasound for hepatic metastasectomy.\n' +
        '- Robotic surgery (da Vinci) for prostatectomy, hysterectomy, and colorectal surgery.\n\n' +
        '**Oligometastatic Disease**\n' +
        'The concept of oligometastatic disease (limited metastases amenable to local therapy) has transformed the paradigm from palliative to potentially curative. ' +
        'Hepatic metastasectomy in CRC: 5-year survival 40–50% with R0 resection. ' +
        'Pulmonary metastasectomy is considered for sarcoma and CRC.\n\n' +
        '**Prehabilitation and ERAS**\n' +
        'Enhanced recovery after surgery (ERAS) protocols reduce complications and length of stay. ' +
        'Prehabilitation (exercise, nutrition, psychological preparation) improves postoperative outcomes.',
      keyTerms: [
        { term: 'Oncotype DX', definition: '21-gene expression assay predicting chemotherapy benefit in ER+ breast cancer' },
        { term: 'oligometastatic disease', definition: 'Limited number of metastases potentially amenable to local curative-intent therapy' },
        { term: 'ERAS', definition: 'Enhanced recovery after surgery — multimodal perioperative care protocol' },
        { term: 'ICG fluorescence', definition: 'Indocyanine green imaging for sentinel nodes and perfusion assessment' },
        { term: 'hepatic metastasectomy', definition: 'Surgical resection of liver metastases, potentially curative in CRC' },
        { term: 'prehabilitation', definition: 'Preoperative optimization of physical and nutritional status' },
      ],
      clinicalNotes:
        'TAILORx and RxPONDER trials defined Oncotype DX thresholds for chemotherapy benefit. ' +
        'SABR-COMET trial showed survival benefit of stereotactic ablative radiotherapy for oligometastatic disease. ' +
        'Circulating tumor DNA (ctDNA) post-surgery can guide adjuvant therapy decisions (DYNAMIC trial in CRC).',
    },
    5: {
      level: 5,
      summary: 'Frontier surgical oncology explores AI-assisted surgical planning, ctDNA-guided operative decisions, and immunologic implications of surgery timing.',
      explanation:
        '**ctDNA-Guided Surgical Decision-Making**\n' +
        'Postoperative ctDNA positivity is the strongest prognostic biomarker across solid tumors. ' +
        'Trials are investigating ctDNA-directed adjuvant therapy escalation (positive ctDNA → treat) and de-escalation (negative ctDNA → observe). ' +
        'Preoperative ctDNA clearance after neoadjuvant therapy correlates with pathologic complete response.\n\n' +
        '**AI and Computer Vision in Surgery**\n' +
        'Deep learning models analyze intraoperative video for real-time tissue identification, critical structure detection, and surgical phase recognition. ' +
        'AI-assisted preoperative planning uses 3D reconstruction from CT/MRI for complex hepatic and pancreatic resections. ' +
        'Digital twins for surgical simulation are emerging.\n\n' +
        '**Surgery and the Immune System**\n' +
        'Surgery induces a transient immunosuppressive state (NK cell dysfunction, MDSC expansion) that may promote metastatic seeding. ' +
        'Perioperative immunotherapy timing is being optimized — neoadjuvant checkpoint inhibitors may prime anti-tumor immunity before surgery. ' +
        'The NADINA trial (neoadjuvant nivolumab + ipilimumab in melanoma) showed superior event-free survival vs. adjuvant nivolumab.\n\n' +
        '**Organ Preservation**\n' +
        'Total clinical response to neoadjuvant chemoradiation or immunotherapy in rectal, esophageal, and bladder cancers allows organ preservation. ' +
        'Biomarker-selected organ preservation: MSI-H rectal cancer + dostarlimab → 100% clinical CR in initial cohort (Cercek et al., NEJM 2022).',
      keyTerms: [
        { term: 'ctDNA-guided therapy', definition: 'Using postoperative circulating tumor DNA to personalize adjuvant treatment decisions' },
        { term: 'surgical immunology', definition: 'Study of how surgery affects anti-tumor immune responses' },
        { term: 'digital twin', definition: 'Computational replica of patient anatomy for surgical simulation and planning' },
        { term: 'organ preservation', definition: 'Avoiding surgery when complete response to non-operative therapy is achieved' },
        { term: 'perioperative immunotherapy', definition: 'Checkpoint inhibitor therapy given around the time of surgery' },
      ],
      examples: [
        'DYNAMIC trial: ctDNA-guided adjuvant chemotherapy in stage II CRC reduced unnecessary treatment without compromising outcomes.',
        'NADINA trial: neoadjuvant nivo/ipi in melanoma produced 68% pathologic response vs 26% adjuvant control arm.',
      ],
      clinicalNotes:
        'Perioperative immunotherapy is likely to become standard in melanoma, NSCLC, and esophageal cancer. ' +
        'ctDNA-guided adjuvant therapy trials: CIRCULATE (CRC), c-TRAK TN (TNBC), MERMAID-1 (NSCLC). ' +
        'The immunologic window between neoadjuvant therapy and surgery is an active area of translational research.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cercek-2022',
      type: 'article',
      title: 'PD-1 Blockade in Mismatch Repair–Deficient, Locally Advanced Rectal Cancer',
      authors: ['Cercek A', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '386:2363-2376',
      url: 'https://doi.org/10.1056/NEJMoa2201445',
    },
  ],
  crossReferences: [
    { targetId: 'chemotherapy-principles', targetType: 'topic', relationship: 'sibling', label: 'Chemotherapy' },
    { targetId: 'radiation-therapy', targetType: 'topic', relationship: 'sibling', label: 'Radiation Therapy' },
    { targetId: 'cancer-screening', targetType: 'topic', relationship: 'related', label: 'Cancer Screening & Staging' },
  ],
  tags: {
    systems: ['oncology', 'surgery'],
    topics: ['surgical-oncology', 'resection', 'neoadjuvant', 'adjuvant'],
    keywords: ['R0', 'margins', 'sentinel-node', 'ERAS', 'organ-preservation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const chemotherapyPrinciples: EducationalContent = {
  id: 'chemotherapy-principles',
  type: 'topic',
  name: 'Chemotherapy Principles and Drug Classes',
  nameEs: 'Principios de Quimioterapia y Clases de Fármacos',
  alternateNames: ['Cytotoxic Chemotherapy', 'Systemic Cancer Chemotherapy'],
  levels: {
    1: {
      level: 1,
      summary: 'Chemotherapy uses strong medicines to kill fast-growing cancer cells.',
      explanation:
        'Chemotherapy (or "chemo") is medicine that travels through your blood to find and kill cancer cells. ' +
        'It works by attacking cells that divide quickly. Because cancer cells divide faster than most normal cells, chemo affects them the most. ' +
        'However, some healthy cells also divide quickly (hair, mouth lining, blood cells), which is why chemo can cause side effects like hair loss, mouth sores, and feeling tired.',
      keyTerms: [
        { term: 'chemotherapy', definition: 'Medicine that kills fast-growing cells, especially cancer cells' },
        { term: 'side effects', definition: 'Unwanted symptoms caused by treatment' },
        { term: 'infusion', definition: 'Medicine given through a tube into your vein (IV)' },
      ],
      analogies: [
        'Chemo is like a weed killer sprayed over the whole garden — it targets weeds but may also harm some flowers.',
      ],
      patientCounselingPoints: [
        'Not all chemo causes hair loss; it depends on the specific medicines used.',
        'Side effects are usually temporary and improve after treatment ends.',
        'Your care team can help manage most side effects.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Chemotherapy drugs are classified by mechanism of action: alkylating agents, antimetabolites, topoisomerase inhibitors, mitotic inhibitors, and antitumor antibiotics.',
      explanation:
        'Major chemotherapy drug classes:\n\n' +
        '**Alkylating agents** — Damage DNA by adding alkyl groups, preventing replication. Examples: cyclophosphamide, cisplatin, temozolomide.\n\n' +
        '**Antimetabolites** — Mimic normal building blocks of DNA/RNA, disrupting synthesis. Examples: 5-fluorouracil (5-FU), methotrexate, gemcitabine.\n\n' +
        '**Topoisomerase inhibitors** — Block enzymes that unwind DNA for replication. Examples: irinotecan (topo I), etoposide (topo II).\n\n' +
        '**Mitotic inhibitors** — Disrupt the mitotic spindle needed for cell division. Examples: paclitaxel, vincristine.\n\n' +
        '**Antitumor antibiotics** — Intercalate into DNA or generate free radicals. Examples: doxorubicin, bleomycin.\n\n' +
        'Common side effects include myelosuppression (low blood counts), nausea/vomiting, mucositis, and alopecia.',
      keyTerms: [
        { term: 'alkylating agent', definition: 'Drug that adds chemical groups to DNA, preventing cell division' },
        { term: 'antimetabolite', definition: 'Drug that mimics DNA/RNA building blocks, disrupting synthesis' },
        { term: 'topoisomerase inhibitor', definition: 'Drug that blocks DNA-unwinding enzymes' },
        { term: 'mitotic inhibitor', definition: 'Drug that interferes with the cell division machinery (spindle)' },
        { term: 'myelosuppression', definition: 'Reduced bone marrow activity causing low blood cell counts' },
        { term: 'alopecia', definition: 'Hair loss, a common side effect of many chemo drugs' },
        { term: 'antiemetic', definition: 'Medicine that prevents nausea and vomiting' },
      ],
      examples: [
        'Cisplatin is used in testicular, lung, bladder, and ovarian cancers.',
        '5-FU is a backbone of colorectal cancer treatment.',
        'Paclitaxel is used in breast, ovarian, and lung cancers.',
      ],
      clinicalNotes:
        'Myelosuppression nadir typically occurs 7–14 days after chemotherapy. Febrile neutropenia (ANC <500 + fever) is a medical emergency requiring IV antibiotics. G-CSF (filgrastim) is used for prophylaxis in high-risk regimens.',
    },
    3: {
      level: 3,
      summary: 'Chemotherapy follows pharmacokinetic and pharmacodynamic principles including cell-cycle specificity, log-kill hypothesis, dose intensity, and combination therapy rationale.',
      explanation:
        '**Cell-Cycle Specificity**\n' +
        '- Cell-cycle specific (CCS) agents: Antimetabolites (S phase), vinca alkaloids and taxanes (M phase). Effective with prolonged exposure.\n' +
        '- Cell-cycle nonspecific (CCNS) agents: Alkylating agents, platinum compounds. Kill cells regardless of phase. Dose-dependent efficacy.\n\n' +
        '**Log-Kill Hypothesis**\n' +
        'Each chemotherapy cycle kills a constant fraction (not number) of cancer cells. If a tumor has 10^9 cells and chemo achieves 2-log kill, 10^7 cells remain. ' +
        'Multiple cycles are needed to achieve sufficient cytoreduction. This underpins the rationale for multiple-cycle regimens.\n\n' +
        '**Combination Chemotherapy Principles (Goldie-Coldman)**\n' +
        '1. Use drugs with different mechanisms of action.\n' +
        '2. Use drugs with non-overlapping toxicities.\n' +
        '3. Use drugs individually active against the cancer.\n' +
        '4. Use optimal dose and schedule.\n\n' +
        '**Specific Drug Mechanisms & Toxicities**\n' +
        '- **Cisplatin/carboplatin**: Platinum crosslinks DNA. Toxicity: nephrotoxicity (cisplatin), ototoxicity, peripheral neuropathy.\n' +
        '- **Doxorubicin**: DNA intercalation + topoisomerase II inhibition + free radical generation. Toxicity: cardiotoxicity (cumulative dose-dependent, limit 450 mg/m²).\n' +
        '- **Bleomycin**: Free radical–mediated DNA damage. Toxicity: pulmonary fibrosis.\n' +
        '- **Vincristine**: Inhibits microtubule polymerization. Toxicity: peripheral neuropathy (no myelosuppression).\n' +
        '- **Paclitaxel/docetaxel**: Stabilize microtubules, preventing depolymerization. Toxicity: neuropathy, myelosuppression.\n' +
        '- **Irinotecan**: Topoisomerase I inhibitor. Toxicity: delayed diarrhea (UGT1A1 polymorphism).\n' +
        '- **Methotrexate**: Inhibits dihydrofolate reductase (DHFR). Rescued with leucovorin (folinic acid).',
      keyTerms: [
        { term: 'cell-cycle specific', definition: 'Drug that acts on cells during a specific phase of the cell cycle' },
        { term: 'log-kill hypothesis', definition: 'Each chemo cycle kills a constant fraction of tumor cells' },
        { term: 'dose intensity', definition: 'Amount of drug delivered per unit time; reductions may compromise efficacy' },
        { term: 'Goldie-Coldman hypothesis', definition: 'Spontaneous mutations cause drug resistance; early combination therapy reduces resistance emergence' },
        { term: 'nephrotoxicity', definition: 'Kidney damage — key toxicity of cisplatin, mitigated by aggressive hydration' },
        { term: 'cardiotoxicity', definition: 'Heart damage — key toxicity of anthracyclines (doxorubicin), cumulative dose-dependent' },
        { term: 'pulmonary fibrosis', definition: 'Lung scarring — key toxicity of bleomycin' },
        { term: 'leucovorin rescue', definition: 'Folinic acid given after high-dose methotrexate to protect normal cells' },
        { term: 'UGT1A1', definition: 'Enzyme metabolizing irinotecan; polymorphisms (*28) increase toxicity risk' },
      ],
      examples: [
        'ABVD for Hodgkin lymphoma: Adriamycin, Bleomycin, Vinblastine, Dacarbazine — each with different MOA and toxicity profile.',
        'FOLFOX for CRC: 5-FU (antimetabolite) + leucovorin (modulator) + oxaliplatin (platinum) — non-overlapping toxicities.',
        'BEP for testicular cancer: Bleomycin + Etoposide + Platinum (cisplatin) — achieves >95% cure in disseminated disease.',
      ],
      clinicalNotes:
        'Dexrazoxane is a cardioprotectant used when cumulative doxorubicin dose exceeds 300 mg/m² in metastatic breast cancer. ' +
        'Amifostine can reduce cisplatin nephrotoxicity. ' +
        'Irinotecan dose should be reduced in UGT1A1*28 homozygous patients. ' +
        'Tumor lysis syndrome (TLS) risk is highest with rapidly proliferating hematologic malignancies; prophylaxis with rasburicase or allopurinol.',
    },
    4: {
      level: 4,
      summary: 'Advanced chemotherapy pharmacology includes pharmacogenomics, drug resistance mechanisms, metronomic dosing, and antibody-drug conjugates.',
      explanation:
        '**Pharmacogenomics**\n' +
        '- DPD (dihydropyrimidine dehydrogenase) deficiency: Life-threatening toxicity with 5-FU/capecitabine. DPYD testing is recommended in Europe before fluoropyrimidine therapy.\n' +
        '- TPMT/NUDT15 deficiency: Severe myelosuppression with thiopurines (6-MP, azathioprine).\n' +
        '- UGT1A1*28: Increased irinotecan toxicity.\n\n' +
        '**Drug Resistance Mechanisms**\n' +
        '- **Efflux pumps**: P-glycoprotein (MDR1/ABCB1) and MRP family actively pump drugs out of cells.\n' +
        '- **Target alteration**: Mutations in drug targets (e.g., topoisomerase mutations).\n' +
        '- **Enhanced DNA repair**: Increased repair capacity reverses drug-induced damage.\n' +
        '- **Altered drug metabolism**: Increased inactivation or decreased activation of prodrugs.\n' +
        '- **Apoptosis evasion**: BCL-2 overexpression prevents drug-induced cell death.\n\n' +
        '**Antibody-Drug Conjugates (ADCs)**\n' +
        'ADCs combine monoclonal antibody specificity with cytotoxic payloads via cleavable or non-cleavable linkers. ' +
        'Key ADCs:\n' +
        '- Trastuzumab deruxtecan (T-DXd / Enhertu): HER2-directed, topoisomerase I inhibitor payload. Bystander effect via membrane-permeable payload.\n' +
        '- Sacituzumab govitecan (Trodelvy): Trop-2-directed, SN-38 payload. Approved for TNBC and urothelial.\n' +
        '- Enfortumab vedotin: Nectin-4-directed, MMAE payload. Approved for urothelial.\n' +
        '- Trastuzumab emtansine (T-DM1): HER2-directed, DM1 payload.\n' +
        '- Polatuzumab vedotin: CD79b-directed, MMAE payload. Approved for DLBCL.\n\n' +
        '**Metronomic Chemotherapy**\n' +
        'Low-dose continuous chemotherapy targets tumor vasculature endothelium and has immunomodulatory effects (Treg depletion). ' +
        'Metronomic cyclophosphamide + capecitabine is used in maintenance settings.',
      keyTerms: [
        { term: 'DPD deficiency', definition: 'Dihydropyrimidine dehydrogenase deficiency causing life-threatening fluoropyrimidine toxicity' },
        { term: 'P-glycoprotein', definition: 'ATP-dependent efflux pump (MDR1) conferring multidrug resistance' },
        { term: 'antibody-drug conjugate (ADC)', definition: 'Monoclonal antibody linked to cytotoxic payload for targeted drug delivery' },
        { term: 'bystander effect', definition: 'ADC payload killing nearby antigen-negative cells after release' },
        { term: 'linker chemistry', definition: 'Connection between antibody and payload; determines stability and payload release mechanism' },
        { term: 'metronomic chemotherapy', definition: 'Frequent low-dose chemotherapy with anti-angiogenic and immunomodulatory effects' },
        { term: 'TPMT', definition: 'Thiopurine methyltransferase — deficiency causes thiopurine toxicity' },
      ],
      examples: [
        'T-DXd (trastuzumab deruxtecan) showed activity in HER2-low breast cancer (DESTINY-Breast04), expanding the treatable population.',
        'Enfortumab vedotin + pembrolizumab (EV-302/KEYNOTE-A39) is now first-line for metastatic urothelial cancer.',
      ],
      clinicalNotes:
        'DPYD genotyping before fluoropyrimidine therapy is mandatory in many European guidelines; adoption is growing in the US. ' +
        'ADCs have transformed treatment of HER2+ and HER2-low breast cancer, TNBC, and urothelial carcinoma. ' +
        'Key ADC toxicities: interstitial lung disease (T-DXd), peripheral neuropathy (vedotin payload), neutropenia (govitecan).',
    },
    5: {
      level: 5,
      summary: 'Next-generation chemotherapy strategies include novel ADC platforms, payload diversification, bispecific ADCs, and pharmacokinetic modeling for precision dosing.',
      explanation:
        '**Next-Generation ADC Platforms**\n' +
        'DAR (drug-to-antibody ratio) optimization: Higher DAR increases potency but may reduce stability. ' +
        'Site-specific conjugation (engineered cysteines, non-natural amino acids) improves homogeneity. ' +
        'Novel payloads: PBD dimers (tesirine), camptothecin derivatives (DXd, SN-38), duocarmycins, Bcl-xL inhibitors. ' +
        'Biparatopic ADCs bind two epitopes on the same target, enhancing internalization.\n\n' +
        '**Payload Diversification Beyond Cytotoxics**\n' +
        'Immune-stimulating ADCs (isADCs) deliver STING agonists or TLR7/8 agonists to the TME. ' +
        'ADCs with protein degraders (PROTAC payloads, molecular glues) are in early development. ' +
        'Radiation-delivering ADCs (radioimmunotherapy): Lutetium-177 vipivotide tetraxetan (PSMA-targeted) in prostate cancer.\n\n' +
        '**Model-Informed Precision Dosing**\n' +
        'Population pharmacokinetic models and Bayesian dose adaptation individualize chemotherapy dosing based on measured drug levels. ' +
        'Therapeutic drug monitoring (TDM) is established for methotrexate and is emerging for 5-FU (area under the curve–guided dosing improves outcomes). ' +
        'Body surface area (BSA)–based dosing is imprecise and may be replaced by PK-guided approaches.\n\n' +
        '**Emerging Cytotoxic Strategies**\n' +
        'PARP inhibitors combined with chemotherapy (veliparib + carboplatin/paclitaxel). ' +
        'Oral chemotherapy formulations improving convenience (oral paclitaxel with encequidar P-gp inhibitor). ' +
        'Drug-eluting beads and intratumoral chemotherapy for hepatocellular carcinoma (TACE).',
      keyTerms: [
        { term: 'DAR', definition: 'Drug-to-antibody ratio — number of payload molecules per antibody in an ADC' },
        { term: 'site-specific conjugation', definition: 'Attaching payloads at defined positions on the antibody for uniform ADC products' },
        { term: 'isADC', definition: 'Immune-stimulating antibody-drug conjugate delivering immune agonists to the TME' },
        { term: 'PROTAC', definition: 'Proteolysis-targeting chimera — bifunctional molecule inducing target protein degradation' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to guide individualized dosing' },
        { term: 'AUC-guided dosing', definition: 'Adjusting drug dose to achieve target area under the concentration-time curve' },
      ],
      examples: [
        'AUC-guided 5-FU dosing improved response rate from 18% to 34% in metastatic CRC compared to BSA-based dosing.',
        'Lu-177-PSMA-617 (Pluvicto) improved overall survival in metastatic castration-resistant prostate cancer (VISION trial).',
      ],
      clinicalNotes:
        'The ADC field is the fastest-growing segment of oncology drug development. ' +
        'Over 100 ADCs are in clinical trials as of 2025. ' +
        'Rational ADC design requires optimization of target, antibody, linker, payload, and DAR. ' +
        'PK-guided dosing of 5-FU is supported by ASCO guidelines and is increasingly adopted.',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'surgical-oncology', targetType: 'topic', relationship: 'sibling', label: 'Surgical Oncology' },
    { targetId: 'radiation-therapy', targetType: 'topic', relationship: 'sibling', label: 'Radiation Therapy' },
    { targetId: 'immunotherapy-checkpoint-inhibitors', targetType: 'topic', relationship: 'sibling', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['oncology', 'pharmacology'],
    topics: ['chemotherapy', 'drug-classes', 'pharmacogenomics', 'ADC'],
    keywords: ['cisplatin', 'doxorubicin', '5-FU', 'paclitaxel', 'ADC', 'T-DXd', 'pharmacogenomics'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const radiationTherapy: EducationalContent = {
  id: 'radiation-therapy',
  type: 'topic',
  name: 'Radiation Therapy',
  nameEs: 'Radioterapia',
  alternateNames: ['Radiotherapy', 'Radiation Oncology'],
  levels: {
    1: {
      level: 1,
      summary: 'Radiation treatment uses high-energy beams to damage cancer cells so they cannot grow.',
      explanation:
        'Radiation therapy is like a very focused, powerful light beam aimed at the cancer. ' +
        'It damages the DNA inside cancer cells, so they cannot make copies of themselves and eventually die. ' +
        'Doctors use special machines to aim the beams precisely at the tumor while protecting healthy tissue as much as possible.',
      keyTerms: [
        { term: 'radiation', definition: 'High-energy beams used to kill cancer cells' },
        { term: 'tumor', definition: 'A mass of cancer cells' },
        { term: 'treatment planning', definition: 'How doctors figure out exactly where to aim the radiation beams' },
      ],
      patientCounselingPoints: [
        'Radiation is painless during the treatment itself.',
        'Side effects develop gradually and are usually limited to the area being treated.',
        'Treatment typically takes a few minutes each day for several weeks.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Radiation therapy damages DNA through direct and indirect mechanisms, exploiting the difference in repair capacity between normal and cancer cells.',
      explanation:
        'Radiation damages DNA through:\n' +
        '- **Direct damage**: Radiation breaks the DNA strands directly.\n' +
        '- **Indirect damage**: Radiation creates free radicals from water molecules, which then damage DNA.\n\n' +
        'Double-strand breaks (DSBs) are the most lethal form of DNA damage. Normal cells repair DSBs more efficiently than cancer cells, creating a therapeutic window. ' +
        'Types of radiation therapy:\n' +
        '- **External beam radiation therapy (EBRT)**: Machine delivers beams from outside the body.\n' +
        '- **Brachytherapy**: Radioactive source placed inside or next to the tumor.\n' +
        '- **Systemic radiation**: Radioactive substances given orally or IV (e.g., radioactive iodine for thyroid cancer).\n\n' +
        'Common side effects: skin changes (erythema, desquamation), fatigue, and site-specific effects (e.g., mucositis for head/neck, diarrhea for pelvis).',
      keyTerms: [
        { term: 'double-strand break', definition: 'Both strands of DNA broken — the most damaging type of DNA lesion' },
        { term: 'free radicals', definition: 'Highly reactive molecules that damage DNA and other cell components' },
        { term: 'external beam radiation', definition: 'Radiation delivered from a machine outside the body' },
        { term: 'brachytherapy', definition: 'Radioactive source placed directly in or near the tumor' },
        { term: 'fractionation', definition: 'Dividing total radiation dose into smaller daily doses' },
        { term: 'therapeutic window', definition: 'The difference in radiation damage between cancer cells and normal cells' },
      ],
      clinicalNotes:
        'Standard fractionation: 1.8–2.0 Gy per fraction, 5 days/week. Fractionation exploits the 4 Rs of radiobiology (repair, reassortment, repopulation, reoxygenation).',
    },
    3: {
      level: 3,
      summary: 'Radiation biology is governed by the 4 Rs (repair, reassortment, repopulation, reoxygenation), the linear-quadratic model, and advanced delivery techniques.',
      explanation:
        '**The 4 Rs of Radiobiology**\n' +
        '1. **Repair**: Normal cells repair sublethal DNA damage between fractions; tumor cells repair less efficiently.\n' +
        '2. **Reassortment**: Cells redistribute through the cell cycle; irradiating at different times catches cells in sensitive phases (G2/M most sensitive, S most resistant).\n' +
        '3. **Repopulation**: Surviving cells proliferate between fractions; accelerated repopulation in tumors necessitates timely treatment completion.\n' +
        '4. **Reoxygenation**: Hypoxic tumor cells are 2.5–3× more radioresistant. Between fractions, tumor shrinkage allows reoxygenation.\n\n' +
        '**Linear-Quadratic (LQ) Model**\n' +
        'Cell survival: S = e^-(αD + βD²). The α/β ratio characterizes tissue radiosensitivity. ' +
        'High α/β (≈10 Gy): rapidly dividing tumors, acute-responding tissues. ' +
        'Low α/β (≈3 Gy): slow-growing tumors (prostate), late-responding normal tissues.\n\n' +
        '**Advanced Techniques**\n' +
        '- **IMRT**: Intensity-modulated radiation therapy — modulates beam intensity for conformal dose distribution.\n' +
        '- **SBRT/SABR**: Stereotactic body radiotherapy — high dose per fraction (e.g., 3–5 fractions) for small tumors.\n' +
        '- **SRS**: Stereotactic radiosurgery — single high-dose fraction for brain lesions.\n' +
        '- **Proton therapy**: Bragg peak allows precise dose deposition with reduced exit dose.\n' +
        '- **IGRT**: Image-guided radiotherapy using daily imaging for setup accuracy.',
      keyTerms: [
        { term: '4 Rs of radiobiology', definition: 'Repair, reassortment, repopulation, reoxygenation — principles governing fractionated radiation response' },
        { term: 'linear-quadratic model', definition: 'Mathematical model predicting cell survival based on radiation dose (α/β ratio)' },
        { term: 'α/β ratio', definition: 'Dose at which linear and quadratic components of cell killing are equal; characterizes tissue radiosensitivity' },
        { term: 'IMRT', definition: 'Intensity-modulated radiation therapy — advanced technique shaping dose distribution' },
        { term: 'SBRT', definition: 'Stereotactic body radiation therapy — high-dose, few-fraction ablative treatment' },
        { term: 'proton therapy', definition: 'Particle therapy exploiting the Bragg peak for superior dose localization' },
        { term: 'Bragg peak', definition: 'Physical property of protons: maximum energy deposition at a specific depth with minimal exit dose' },
        { term: 'oxygen enhancement ratio', definition: 'Ratio of radiation dose needed under hypoxic vs. oxygenated conditions for same cell kill (~2.5–3×)' },
      ],
      clinicalNotes:
        'Hypofractionation (fewer fractions, higher dose per fraction) is now standard for breast (40 Gy/15 fractions), prostate (60 Gy/20 fractions), and NSCLC (SBRT for stage I). ' +
        'Concurrent chemoradiation (cisplatin-based) is standard for locally advanced cervical, head/neck, esophageal, and NSCLC. ' +
        'Treatment breaks should be avoided — accelerated repopulation significantly worsens outcomes in head and neck cancer.',
    },
    4: {
      level: 4,
      summary: 'Advanced radiation oncology includes the abscopal effect, FLASH radiotherapy, adaptive planning, and radiosensitizer/radioprotector pharmacology.',
      explanation:
        '**Abscopal Effect**\n' +
        'Radiation to one site induces immune-mediated regression of distant, unirradiated metastases. ' +
        'Mechanism: Radiation causes immunogenic cell death releasing tumor antigens and DAMPs, activating dendritic cells and cytotoxic T cells. ' +
        'Combined radiation + checkpoint inhibitors amplify the abscopal effect. The PACIFIC trial paradigm (durvalumab after chemoRT in NSCLC) exploits this.\n\n' +
        '**FLASH Radiotherapy**\n' +
        'Ultra-high dose rate (>40 Gy/s) radiation spares normal tissue while maintaining tumor efficacy (FLASH effect). ' +
        'Mechanism is incompletely understood — hypothesized to involve differential oxygen depletion. ' +
        'First human treatment: FLASH electron therapy for cutaneous T-cell lymphoma.\n\n' +
        '**Adaptive Radiation Therapy**\n' +
        'Online adaptive planning uses daily imaging (MR-linac, CBCT) to reoptimize treatment plans based on anatomic changes during the course. ' +
        'MR-linac (Unity, ViewRay) enables real-time soft-tissue visualization during treatment.\n\n' +
        '**Radiosensitizers and Radioprotectors**\n' +
        '- Radiosensitizers: Cisplatin (DNA adducts prevent repair), 5-FU (thymineless death), nimorazole (hypoxic cell sensitizer).\n' +
        '- Radioprotectors: Amifostine (free radical scavenger for xerostomia prevention).\n' +
        '- DDR inhibitors as radiosensitizers: ATR, CHK1, WEE1 inhibitors + radiation are in clinical trials.',
      keyTerms: [
        { term: 'abscopal effect', definition: 'Radiation-induced regression of distant unirradiated tumors via immune activation' },
        { term: 'FLASH radiotherapy', definition: 'Ultra-high dose rate radiation (>40 Gy/s) with reduced normal tissue toxicity' },
        { term: 'MR-linac', definition: 'MRI-guided linear accelerator enabling real-time adaptive radiation therapy' },
        { term: 'adaptive radiotherapy', definition: 'Modifying treatment plans during the course based on anatomic and biologic changes' },
        { term: 'immunogenic cell death', definition: 'Cell death that activates the immune system through release of danger signals (DAMPs)' },
        { term: 'radiosensitizer', definition: 'Agent that increases tumor cell sensitivity to radiation' },
        { term: 'radioprotector', definition: 'Agent that protects normal tissues from radiation damage' },
      ],
      clinicalNotes:
        'PACIFIC regimen (chemoRT → durvalumab maintenance) improved 5-year OS to 43% in unresectable stage III NSCLC. ' +
        'MR-linac adaptive planning is particularly valuable for pancreatic and liver tumors near mobile organs. ' +
        'FLASH radiotherapy is in early clinical trials; proton FLASH may combine benefits of both technologies.',
    },
    5: {
      level: 5,
      summary: 'Frontier radiation research includes radiomics, biological dose optimization, theranostics, and heavy ion therapy.',
      explanation:
        '**Radiomics and AI in Radiation Oncology**\n' +
        'Radiomics extracts quantitative imaging features to predict treatment response and toxicity. ' +
        'AI-driven auto-contouring reduces organ-at-risk delineation time from hours to minutes. ' +
        'Deep learning dose prediction enables rapid plan quality assessment.\n\n' +
        '**Biological Dose Optimization**\n' +
        'Moving beyond physical dose: biological optimization incorporates tumor oxygenation (FMISO-PET), proliferation (FLT-PET), ' +
        'and hypoxia mapping to deliver dose painting — non-uniform dose distributions targeting biologically resistant subvolumes.\n\n' +
        '**Theranostics**\n' +
        'Combining diagnostic imaging and therapeutic radiation:\n' +
        '- Lu-177-DOTATATE (Lutathera) for neuroendocrine tumors (NETTER-1 trial).\n' +
        '- Lu-177-PSMA-617 (Pluvicto) for prostate cancer (VISION trial).\n' +
        '- Ac-225-PSMA for PSMA-positive tumors resistant to Lu-177.\n' +
        '- I-131-iobenguane (Azedra) for pheochromocytoma/paraganglioma.\n\n' +
        '**Heavy Ion Therapy**\n' +
        'Carbon ion therapy has higher linear energy transfer (LET) and relative biological effectiveness (RBE ~3) compared to protons (RBE ~1.1). ' +
        'Effective for radioresistant histologies: chordoma, chondrosarcoma, mucosal melanoma. ' +
        'Limited availability (approximately 15 centers worldwide).',
      keyTerms: [
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical images for predictive modeling' },
        { term: 'dose painting', definition: 'Non-uniform radiation dose distribution based on biological tumor mapping' },
        { term: 'theranostics', definition: 'Combining diagnostic imaging and targeted radionuclide therapy' },
        { term: 'LET', definition: 'Linear energy transfer — energy deposited per unit path length; higher LET = more biological damage' },
        { term: 'RBE', definition: 'Relative biological effectiveness — ratio of reference radiation dose to test radiation dose for same biologic effect' },
        { term: 'carbon ion therapy', definition: 'Heavy particle therapy with higher LET and RBE than protons' },
      ],
      clinicalNotes:
        'Theranostics is one of the fastest-growing fields in oncology. ' +
        'FAP-targeting radioligands (FAP-2286) may enable treatment across multiple solid tumor types. ' +
        'AI auto-contouring is being integrated into clinical workflow with FDA-cleared products (Limbus AI, MVision). ' +
        'Carbon ion therapy may expand indications as more centers open (Mayo Clinic facility planned).',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'surgical-oncology', targetType: 'topic', relationship: 'sibling', label: 'Surgical Oncology' },
    { targetId: 'chemotherapy-principles', targetType: 'topic', relationship: 'sibling', label: 'Chemotherapy' },
    { targetId: 'immunotherapy-checkpoint-inhibitors', targetType: 'topic', relationship: 'sibling', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['oncology', 'radiology'],
    topics: ['radiation-therapy', 'radiobiology', 'SBRT', 'proton-therapy', 'theranostics'],
    keywords: ['IMRT', 'SBRT', 'brachytherapy', 'proton', 'abscopal', 'FLASH', 'LQ-model'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const immunotherapyCheckpointInhibitors: EducationalContent = {
  id: 'immunotherapy-checkpoint-inhibitors',
  type: 'topic',
  name: 'Immunotherapy and Checkpoint Inhibitors',
  nameEs: 'Inmunoterapia e Inhibidores de Puntos de Control',
  alternateNames: ['Cancer Immunotherapy', 'Immune Checkpoint Blockade', 'ICIs'],
  levels: {
    1: {
      level: 1,
      summary: 'Immunotherapy helps your own immune system recognize and fight cancer.',
      explanation:
        'Your immune system is your body\'s defense force. It fights off germs and can also destroy damaged or abnormal cells. ' +
        'Cancer cells have tricks to hide from the immune system — they put up "do not attack" signals. ' +
        'Immunotherapy removes those signals so the immune system can see the cancer and attack it.',
      keyTerms: [
        { term: 'immune system', definition: 'The body\'s natural defense against disease' },
        { term: 'immunotherapy', definition: 'Treatment that helps the immune system fight cancer' },
        { term: 'T cell', definition: 'A type of white blood cell that kills infected or abnormal cells' },
      ],
      analogies: [
        'Cancer cells wear an invisibility cloak. Immunotherapy removes the cloak so immune soldiers (T cells) can see and destroy them.',
      ],
      patientCounselingPoints: [
        'Immunotherapy works differently from chemotherapy — it powers up your own immune system.',
        'Side effects are different from chemo and can affect any organ (immune-related).',
        'Some patients have dramatic, long-lasting responses.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Checkpoint inhibitors block proteins (PD-1, PD-L1, CTLA-4) that prevent T cells from attacking cancer, restoring anti-tumor immunity.',
      explanation:
        'Immune checkpoints are normal "brakes" that prevent T cells from attacking healthy tissue. ' +
        'Cancer cells exploit these brakes by expressing checkpoint ligands:\n\n' +
        '- **PD-1/PD-L1 axis**: PD-L1 on cancer cells binds PD-1 on T cells → T cell exhaustion. Anti-PD-1 (pembrolizumab, nivolumab) or anti-PD-L1 (atezolizumab, durvalumab) remove this brake.\n' +
        '- **CTLA-4**: Competes with CD28 for B7 ligands, reducing T cell activation. Anti-CTLA-4 (ipilimumab) releases this early brake.\n\n' +
        'Biomarkers predicting response: PD-L1 expression, tumor mutational burden (TMB), and microsatellite instability (MSI-H/dMMR). ' +
        'Common immune-related adverse events (irAEs): colitis, hepatitis, pneumonitis, thyroiditis, skin rash, hypophysitis.',
      keyTerms: [
        { term: 'PD-1', definition: 'Programmed death-1 receptor on T cells — an immune checkpoint' },
        { term: 'PD-L1', definition: 'Programmed death-ligand 1 — expressed by cancer cells to evade immunity' },
        { term: 'CTLA-4', definition: 'Cytotoxic T-lymphocyte associated protein 4 — early immune checkpoint' },
        { term: 'checkpoint inhibitor', definition: 'Drug that blocks immune checkpoint proteins to restore anti-tumor immunity' },
        { term: 'pembrolizumab', definition: 'Anti-PD-1 antibody — one of the most widely used checkpoint inhibitors' },
        { term: 'nivolumab', definition: 'Anti-PD-1 antibody approved across multiple cancer types' },
        { term: 'ipilimumab', definition: 'Anti-CTLA-4 antibody — first checkpoint inhibitor approved (melanoma, 2011)' },
        { term: 'irAEs', definition: 'Immune-related adverse events — autoimmune side effects of checkpoint inhibitors' },
      ],
      clinicalNotes:
        'irAEs are managed with corticosteroids (first-line), then immunosuppressants (infliximab for colitis, mycophenolate for hepatitis). ' +
        'Endocrinopathies (thyroiditis, hypophysitis) may require lifelong hormone replacement. ' +
        'Checkpoint inhibitors can be used as monotherapy or in combination.',
    },
    3: {
      level: 3,
      summary: 'Immunotherapy includes checkpoint inhibitors, combination strategies, tissue-agnostic approvals, and extends to adoptive cell therapy and cancer vaccines.',
      explanation:
        '**Checkpoint Inhibitor Landscape**\n' +
        'Anti-PD-1: pembrolizumab, nivolumab, cemiplimab. Anti-PD-L1: atezolizumab, durvalumab, avelumab. Anti-CTLA-4: ipilimumab, tremelimumab.\n\n' +
        '**Key Combination Strategies**\n' +
        '- PD-1 + CTLA-4 (nivo/ipi): melanoma, RCC, NSCLC, HCC, mesothelioma, MSI-H CRC.\n' +
        '- PD-1/PD-L1 + chemotherapy: NSCLC, TNBC, gastric, SCLC, endometrial.\n' +
        '- PD-1 + anti-VEGF: RCC (pembrolizumab + axitinib), HCC (atezolizumab + bevacizumab).\n' +
        '- PD-1 + anti-LAG-3: relatlimab + nivolumab (Opdualag) for melanoma.\n\n' +
        '**Tissue-Agnostic Approvals**\n' +
        '- Pembrolizumab for MSI-H/dMMR solid tumors (first tissue-agnostic approval, 2017).\n' +
        '- Pembrolizumab for TMB ≥10 mut/Mb.\n' +
        '- Larotrectinib/entrectinib for NTRK fusion-positive tumors.\n' +
        '- Dostarlimab for dMMR solid tumors.\n\n' +
        '**Adoptive Cell Therapy**\n' +
        'Tumor-infiltrating lymphocyte (TIL) therapy: lifileucel (Amtagvi) approved for melanoma (2024). ' +
        'TILs are expanded ex vivo from resected tumor tissue and re-infused after lymphodepletion.\n\n' +
        '**Cancer Vaccines**\n' +
        'Personalized neoantigen vaccines (mRNA-4157/V940 by Moderna + pembrolizumab in melanoma). ' +
        'Sipuleucel-T (Provenge) for metastatic castration-resistant prostate cancer.',
      keyTerms: [
        { term: 'tissue-agnostic approval', definition: 'FDA approval based on a biomarker regardless of cancer type' },
        { term: 'LAG-3', definition: 'Lymphocyte activation gene-3 — next-generation immune checkpoint target' },
        { term: 'TIL therapy', definition: 'Tumor-infiltrating lymphocyte therapy — adoptive cell transfer of expanded anti-tumor T cells' },
        { term: 'neoantigen', definition: 'Novel protein derived from tumor-specific mutations, recognized by the immune system' },
        { term: 'cancer vaccine', definition: 'Vaccine designed to stimulate immune response against tumor-specific antigens' },
        { term: 'lymphodepletion', definition: 'Chemotherapy given before adoptive cell therapy to create space for transferred cells' },
      ],
      examples: [
        'CheckMate 067: Nivo/ipi in melanoma achieved 49% 5-year OS in advanced melanoma.',
        'KEYNOTE-177: Pembrolizumab first-line in MSI-H metastatic CRC doubled PFS vs. chemotherapy.',
        'IMbrave150: Atezolizumab + bevacizumab became first-line standard for advanced HCC.',
      ],
      clinicalNotes:
        'Grade 3–4 irAEs occur in ~15% with anti-PD-1 monotherapy and ~55% with nivo/ipi combination. ' +
        'Myocarditis is the most lethal irAE (mortality up to 50%). ' +
        'Pseudoprogression (initial apparent growth followed by response) occurs in ~5–10% and requires careful clinical judgment.',
    },
    4: {
      level: 4,
      summary: 'Advanced immunotherapy concepts include resistance mechanisms, biomarker refinement, novel checkpoint targets, and the immunotherapy-microbiome axis.',
      explanation:
        '**Resistance Mechanisms**\n' +
        '- Primary resistance: No initial response. Associated with low TMB, "cold" TME (no T-cell infiltration), WNT/β-catenin pathway activation, loss of PTEN.\n' +
        '- Acquired resistance: Initial response followed by progression. Mechanisms include B2M loss (MHC I downregulation), JAK1/2 mutations (IFN-γ signaling loss), antigen loss.\n\n' +
        '**Next-Generation Checkpoints**\n' +
        '- TIGIT: T cell immunoreceptor with Ig and ITIM domains. Tiragolumab + atezolizumab in NSCLC (SKYSCRAPER trials — mixed results).\n' +
        '- TIM-3: T cell immunoglobulin and mucin domain-3.\n' +
        '- VISTA, B7-H3, CD47 ("don\'t eat me" signal for macrophages).\n\n' +
        '**Microbiome-Immunotherapy Axis**\n' +
        'Gut microbiome composition influences checkpoint inhibitor response. ' +
        'Favorable bacteria: Akkermansia muciniphila, Faecalibacterium prausnitzii, Bifidobacterium. ' +
        'Antibiotics before immunotherapy reduce response rates and survival. ' +
        'Fecal microbiota transplant (FMT) has shown preliminary activity in overcoming anti-PD-1 resistance.\n\n' +
        '**Cytokine and Co-stimulatory Approaches**\n' +
        'IL-2 variants (bempegaldesleukin — BEMPEG), bispecific IL-2 (targeting tumor), IL-15 superagonist (N-803). ' +
        'Co-stimulatory agonists: anti-OX40, anti-4-1BB, anti-ICOS — challenges with finding the right therapeutic window.',
      keyTerms: [
        { term: 'primary resistance', definition: 'No initial response to immunotherapy despite adequate treatment' },
        { term: 'acquired resistance', definition: 'Loss of response after initial benefit from immunotherapy' },
        { term: 'B2M loss', definition: 'Beta-2-microglobulin loss causing MHC I downregulation and immune escape' },
        { term: 'TIGIT', definition: 'Next-generation immune checkpoint on T cells and NK cells' },
        { term: 'CD47', definition: '"Don\'t eat me" signal on cancer cells; blocking enables macrophage phagocytosis' },
        { term: 'microbiome', definition: 'Community of microorganisms in the gut influencing immune function and immunotherapy response' },
        { term: 'fecal microbiota transplant', definition: 'Transfer of stool from a healthy donor to restore favorable gut bacteria' },
      ],
      clinicalNotes:
        'Avoid antibiotics within 30 days of immunotherapy initiation when possible. ' +
        'B2M and JAK1/2 mutations should be evaluated at acquired resistance to immunotherapy. ' +
        'Combination strategies targeting multiple resistance mechanisms (ICI + anti-angiogenic + chemotherapy) represent current clinical trial design.',
    },
    5: {
      level: 5,
      summary: 'Frontier immunotherapy research includes engineered T cells, bispecific engagers, innate immune activation, and spatial immune profiling for response prediction.',
      explanation:
        '**Engineered T Cell Platforms**\n' +
        'Beyond CAR-T: TCR-T therapy redirects T cells using engineered T cell receptors recognizing intracellular antigens via MHC. ' +
        'Tebentafusp (TCR bispecific targeting gp100 via HLA-A*02:01 + CD3) approved for uveal melanoma. ' +
        'Logic-gated CARs (AND, OR, NOT gates) improve specificity. ' +
        'Allogeneic "off-the-shelf" CAR-T (TALEN/CRISPR-edited) eliminates manufacturing delays.\n\n' +
        '**Innate Immune Activation**\n' +
        '- STING agonists (intratumoral and systemic) activate innate immunity via cGAS-STING pathway.\n' +
        '- CD47/SIRPα blockade enables macrophage phagocytosis (magrolimab in MDS/AML — complex development).\n' +
        '- NK cell engagers and CAR-NK cells as MHC-unrestricted effectors.\n\n' +
        '**Spatial Immune Profiling**\n' +
        'Multiplex immunohistochemistry (mIHC), imaging mass cytometry (IMC), and spatial transcriptomics characterize the immune contexture — ' +
        'the spatial relationships between immune cells, tumor cells, and stroma. ' +
        'Immunoscore (CD3+ and CD8+ density at tumor center and invasive margin) predicts prognosis in CRC. ' +
        'Machine learning integrating spatial features may outperform PD-L1 and TMB as predictive biomarkers.\n\n' +
        '**mRNA Cancer Vaccines**\n' +
        'Individualized neoantigen mRNA vaccines (mRNA-4157 + pembrolizumab) showed 44% reduction in recurrence/death in adjuvant melanoma (KEYNOTE-942/V940). ' +
        'Autogene cevumeran (BNT122) personalized neoantigen vaccine in pancreatic cancer showed immune response correlation with delayed recurrence.',
      keyTerms: [
        { term: 'TCR-T therapy', definition: 'T cells engineered with specific T cell receptors recognizing intracellular tumor antigens via MHC' },
        { term: 'tebentafusp', definition: 'TCR bispecific (gp100×CD3) approved for HLA-A*02:01+ uveal melanoma' },
        { term: 'logic-gated CAR', definition: 'CAR-T cells with Boolean logic circuits to improve tumor specificity and safety' },
        { term: 'STING pathway', definition: 'cGAS-STING innate immune signaling activated by cytosolic DNA, stimulating type I interferon' },
        { term: 'Immunoscore', definition: 'Quantification of CD3+ and CD8+ T cell density predicting outcomes in colorectal cancer' },
        { term: 'spatial immune profiling', definition: 'Technologies mapping spatial relationships between immune and tumor cells in tissue' },
        { term: 'mRNA neoantigen vaccine', definition: 'Personalized cancer vaccine encoding tumor-specific mutations to prime T cell responses' },
      ],
      clinicalNotes:
        'mRNA-4157 (V940) + pembrolizumab is in phase 3 trials for adjuvant melanoma and NSCLC. ' +
        'Allogeneic CAR-T products (UCART19, ALLO-501A) showed promising but early data in B-ALL. ' +
        'Spatial biomarkers combining tumor and immune features are likely to replace single-analyte biomarkers (PD-L1 alone). ' +
        'The convergence of IO + ADC + bispecifics is generating unprecedented combination complexity requiring biomarker-driven patient selection.',
    },
  },
  media: [],
  citations: [
    {
      id: 'chen-mellman-2013',
      type: 'article',
      title: 'Oncology Meets Immunology: The Cancer-Immunity Cycle',
      authors: ['Chen DS', 'Mellman I'],
      source: 'Immunity',
      page: '39(1):1-10',
      url: 'https://doi.org/10.1016/j.immuni.2013.07.012',
    },
  ],
  crossReferences: [
    { targetId: 'cell-cycle-and-cancer', targetType: 'concept', relationship: 'related', label: 'Cancer Biology' },
    { targetId: 'chemotherapy-principles', targetType: 'topic', relationship: 'sibling', label: 'Chemotherapy' },
    { targetId: 'targeted-therapy-hormonal', targetType: 'topic', relationship: 'sibling', label: 'Targeted & Hormonal Therapy' },
  ],
  tags: {
    systems: ['oncology', 'immunology'],
    topics: ['immunotherapy', 'checkpoint-inhibitors', 'CAR-T', 'cancer-vaccines'],
    keywords: ['PD-1', 'PD-L1', 'CTLA-4', 'pembrolizumab', 'nivolumab', 'ipilimumab', 'irAE', 'TMB', 'MSI', 'TIL'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const targetedTherapyHormonal: EducationalContent = {
  id: 'targeted-therapy-hormonal',
  type: 'topic',
  name: 'Targeted Therapy and Hormonal Therapy',
  nameEs: 'Terapia Dirigida y Terapia Hormonal',
  alternateNames: ['Precision Cancer Therapy', 'Molecularly Targeted Agents'],
  levels: {
    1: {
      level: 1,
      summary: 'Targeted therapy attacks specific weaknesses in cancer cells while leaving most normal cells alone.',
      explanation:
        'Regular chemotherapy attacks all fast-growing cells. Targeted therapy is smarter — it looks for a specific "lock" on cancer cells and uses a "key" (the drug) that fits only that lock. ' +
        'Hormonal therapy works on cancers that need hormones (like estrogen or testosterone) to grow, by blocking or lowering those hormones.',
      keyTerms: [
        { term: 'targeted therapy', definition: 'Medicine that attacks a specific feature of cancer cells' },
        { term: 'hormonal therapy', definition: 'Treatment that blocks hormones cancer cells need to grow' },
        { term: 'receptor', definition: 'A "lock" on the surface of a cell that a specific molecule can fit into' },
      ],
      analogies: [
        'Targeted therapy is like a guided missile that locks onto a specific target, unlike chemotherapy which is more like a bomb affecting a wide area.',
      ],
      patientCounselingPoints: [
        'Targeted therapy usually has different (often milder) side effects than chemotherapy.',
        'Hormonal therapy for breast or prostate cancer may be taken for years.',
        'Genetic testing of the tumor helps determine which targeted therapies may work.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Targeted therapies include tyrosine kinase inhibitors, monoclonal antibodies, and hormonal agents that block specific molecular drivers of cancer.',
      explanation:
        '**Tyrosine Kinase Inhibitors (TKIs)**\n' +
        'Small molecules that block enzymes (kinases) driving cancer growth. Examples:\n' +
        '- Imatinib: Blocks BCR-ABL in CML (first targeted therapy, 2001).\n' +
        '- Erlotinib/osimertinib: Block EGFR in lung cancer.\n' +
        '- Lapatinib/tucatinib: Block HER2.\n\n' +
        '**Monoclonal Antibodies**\n' +
        'Large proteins targeting cell-surface receptors. Examples:\n' +
        '- Trastuzumab: Targets HER2 in breast cancer.\n' +
        '- Cetuximab: Targets EGFR in CRC and head/neck cancer.\n' +
        '- Bevacizumab: Targets VEGF (anti-angiogenic).\n\n' +
        '**Hormonal Therapy**\n' +
        '- **Breast cancer**: Tamoxifen (selective estrogen receptor modulator), aromatase inhibitors (letrozole, anastrozole — block estrogen synthesis), fulvestrant (estrogen receptor degrader).\n' +
        '- **Prostate cancer**: ADT (androgen deprivation therapy) with GnRH agonists (leuprolide) or antagonists (degarelix), plus abiraterone (CYP17 inhibitor) or enzalutamide (androgen receptor inhibitor).',
      keyTerms: [
        { term: 'tyrosine kinase inhibitor', definition: 'Small molecule drug blocking enzymes that drive cancer cell growth signals' },
        { term: 'monoclonal antibody', definition: 'Laboratory-made protein targeting a specific molecule on cancer cells' },
        { term: 'imatinib', definition: 'First targeted therapy — blocks BCR-ABL in chronic myelogenous leukemia' },
        { term: 'trastuzumab', definition: 'Monoclonal antibody targeting HER2 in breast and gastric cancer' },
        { term: 'tamoxifen', definition: 'Selective estrogen receptor modulator (SERM) used in ER+ breast cancer' },
        { term: 'aromatase inhibitor', definition: 'Drug that blocks estrogen production; used in postmenopausal ER+ breast cancer' },
        { term: 'androgen deprivation therapy', definition: 'Treatment reducing testosterone levels for prostate cancer' },
      ],
      clinicalNotes:
        'Imatinib transformed CML from a fatal disease to a chronic condition with >90% 5-year survival. ' +
        'Tamoxifen is used in premenopausal women; aromatase inhibitors in postmenopausal women with ER+ breast cancer. ' +
        'Bevacizumab side effects: hypertension, proteinuria, GI perforation, wound healing complications.',
    },
    3: {
      level: 3,
      summary: 'Precision oncology matches genomic alterations to targeted therapies across an expanding landscape of druggable targets and resistance mechanisms.',
      explanation:
        '**Druggable Oncogene Targets and Key Drugs**\n' +
        '- EGFR mutations (NSCLC): Osimertinib (third-gen TKI, active against T790M resistance).\n' +
        '- ALK rearrangements (NSCLC): Alectinib, lorlatinib (CNS-penetrant).\n' +
        '- ROS1 rearrangements: Crizotinib, entrectinib.\n' +
        '- BRAF V600E: Dabrafenib + trametinib (BRAF + MEK inhibitor combination).\n' +
        '- KRAS G12C: Sotorasib, adagrasib (first KRAS-targeting drugs).\n' +
        '- RET fusions/mutations: Selpercatinib, pralsetinib.\n' +
        '- MET exon 14 skipping: Capmatinib, tepotinib.\n' +
        '- NTRK fusions: Larotrectinib, entrectinib (tissue-agnostic).\n' +
        '- FGFR alterations: Erdafitinib (bladder), futibatinib (cholangiocarcinoma).\n' +
        '- PIK3CA mutations: Alpelisib (ER+ breast cancer).\n\n' +
        '**CDK4/6 Inhibitors**\n' +
        'Palbociclib, ribociclib, abemaciclib block cyclin D-CDK4/6, enforcing G1 arrest. Standard first-line with aromatase inhibitors in HR+/HER2- metastatic breast cancer. ' +
        'Abemaciclib is also approved in adjuvant setting (monarchE).\n\n' +
        '**Resistance Mechanisms**\n' +
        'On-target: Secondary mutations (EGFR C797S after osimertinib). ' +
        'Bypass: MET amplification during EGFR TKI therapy. ' +
        'Histologic transformation: NSCLC → SCLC transformation during EGFR TKI therapy.',
      keyTerms: [
        { term: 'osimertinib', definition: 'Third-generation EGFR TKI effective against T790M resistance mutation; first-line standard in EGFR-mutant NSCLC' },
        { term: 'sotorasib', definition: 'First approved KRAS G12C inhibitor for NSCLC' },
        { term: 'CDK4/6 inhibitors', definition: 'Drugs blocking cyclin-dependent kinases 4 and 6, enforcing cell cycle arrest in G1' },
        { term: 'on-target resistance', definition: 'Resistance caused by secondary mutations in the drug target itself' },
        { term: 'bypass resistance', definition: 'Resistance through activation of alternative signaling pathways' },
        { term: 'histologic transformation', definition: 'Cancer changing its cell type (e.g., adenocarcinoma → small cell) as a resistance mechanism' },
        { term: 'comprehensive genomic profiling', definition: 'NGS-based testing of hundreds of cancer genes to identify actionable mutations' },
      ],
      examples: [
        'ADAURA trial: Adjuvant osimertinib in resected EGFR-mutant NSCLC improved 5-year OS to 88% vs. 78%.',
        'CodeBreaK 100: Sotorasib achieved 37% response rate in KRAS G12C-mutant NSCLC.',
        'MONARCH-E: Adjuvant abemaciclib + endocrine therapy reduced recurrence in high-risk HR+ breast cancer.',
      ],
      clinicalNotes:
        'Comprehensive genomic profiling (FoundationOne CDx, MSK-IMPACT, Tempus xT) is standard for advanced NSCLC, CRC, breast, and other solid tumors. ' +
        'NCCN recommends broad molecular testing at diagnosis of advanced/metastatic NSCLC. ' +
        'CDK4/6 inhibitor side effects: neutropenia (palbociclib, ribociclib), diarrhea (abemaciclib), QTc prolongation (ribociclib).',
    },
    4: {
      level: 4,
      summary: 'Advanced targeted therapy encompasses next-generation inhibitors, allosteric mechanisms, protein degraders, and combination strategies to overcome resistance.',
      explanation:
        '**Next-Generation Approaches to "Undruggable" Targets**\n' +
        'KRAS G12D inhibitors (MRTX1133) in development for pancreatic cancer. ' +
        'Pan-KRAS inhibitors and tri-complex inhibitors (RAS-SOS1-KRAS). ' +
        'SHP2 inhibitors upstream of RAS (RMC-4630). ' +
        'SOS1 inhibitors (BI-1701963) disrupting RAS activation.\n\n' +
        '**Protein Degradation Strategies**\n' +
        'PROTACs (proteolysis-targeting chimeras): Bifunctional molecules recruiting E3 ubiquitin ligases to target proteins for proteasomal degradation. ' +
        'ARV-471 (ER-targeting PROTAC) in ER+ breast cancer. ' +
        'Molecular glues: Small molecules stabilizing neosubstrate-E3 ligase interactions (thalidomide analogs degrade Ikaros/Aiolos in myeloma). ' +
        'Cereblon E3 ligase modulating drugs: Iberdomide in myeloma.\n\n' +
        '**Advanced Hormonal Therapy**\n' +
        'ESR1 mutations (estrogen receptor mutations) are the primary acquired resistance mechanism to aromatase inhibitors in metastatic breast cancer. ' +
        'Elacestrant: Oral SERD (selective estrogen receptor degrader) active against ESR1 mutations. ' +
        'Camizestrant: Next-generation oral SERD with improved efficacy (SERENA trials). ' +
        'Prostate cancer intensification: ADT + ARSI (androgen receptor signaling inhibitor) + docetaxel (PEACE-1, ARASENS).\n\n' +
        '**Combination Strategies**\n' +
        'Vertical pathway inhibition: BRAF + MEK (dabrafenib + trametinib). ' +
        'Horizontal inhibition: EGFR + MET (osimertinib + savolitinib). ' +
        'Targeted therapy + immunotherapy: Lenvatinib + pembrolizumab (endometrial, RCC).',
      keyTerms: [
        { term: 'PROTAC', definition: 'Proteolysis-targeting chimera — bifunctional molecule inducing target protein degradation via ubiquitin-proteasome pathway' },
        { term: 'molecular glue', definition: 'Small molecule that induces proximity between a target protein and an E3 ligase for degradation' },
        { term: 'ESR1 mutations', definition: 'Estrogen receptor gene mutations causing resistance to aromatase inhibitors' },
        { term: 'oral SERD', definition: 'Oral selective estrogen receptor degrader — next-generation endocrine therapy' },
        { term: 'vertical pathway inhibition', definition: 'Targeting multiple nodes in the same signaling cascade' },
        { term: 'SHP2 inhibitor', definition: 'Drug targeting the SHP2 phosphatase upstream of RAS signaling' },
      ],
      clinicalNotes:
        'ESR1 mutation testing (liquid biopsy) should be performed at progression on aromatase inhibitors. ' +
        'PROTACs offer theoretical advantages over inhibitors: catalytic mechanism, overcomes resistance mutations, degrades scaffolding functions. ' +
        'KRAS G12C inhibitors show limited single-agent activity; combinations with SHP2 or SOS1 inhibitors are being tested to improve responses.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge targeted therapy research encompasses AI-driven drug discovery, covalent allosteric inhibitors, degrader platforms, and resistance-anticipating clinical trial design.',
      explanation:
        '**AI-Driven Drug Discovery**\n' +
        'AlphaFold-predicted protein structures accelerate structure-based drug design. ' +
        'Generative chemistry AI (Insilico Medicine, Recursion) designs novel molecules. ' +
        'Virtual screening of billions of compounds identifies novel scaffolds. ' +
        'AI-predicted combination vulnerabilities from multi-omic cancer cell line data.\n\n' +
        '**Novel Targeting Modalities**\n' +
        'Covalent allosteric inhibitors: Irreversible binding to non-active-site pockets (KRAS G12C drugs as prototype). ' +
        'Molecular glue degraders: Expanding beyond IMiDs — screening platforms identifying novel glue-substrate pairs. ' +
        'Bifunctional molecules: PROTACs, LYTACs (lysosome-targeting), AUTACs (autophagy-targeting), molecular glues. ' +
        'RNA-targeting small molecules (Ribometrix, Arrakis): Targeting oncogenic non-coding RNAs and splice variants.\n\n' +
        '**Anticipating Resistance**\n' +
        'Upfront combination strategies based on predicted resistance mechanisms. ' +
        'Adaptive clinical trials (I-SPY, BATTLE, NCI-MATCH, TAPISTRY, ComboMATCH). ' +
        'N-of-1 and basket/umbrella trial designs matching genomic alterations to therapies. ' +
        'ctDNA-guided therapy switching before clinical progression.\n\n' +
        '**Emerging Targets**\n' +
        'KRAS G12D (MRTX1133, RMC-9805), KRAS-ON multi-RAS (RMC-6236). ' +
        'Menin inhibitors (revumenib, ziftomenib) in KMT2A-rearranged and NPM1-mutant AML. ' +
        'CDK2 inhibitors for CDK4/6 inhibitor resistance. ' +
        'SMARCA2 degraders in SMARCA4-mutant cancers (synthetic lethality).',
      keyTerms: [
        { term: 'AlphaFold', definition: 'AI system predicting protein 3D structure from amino acid sequence, accelerating drug design' },
        { term: 'covalent inhibitor', definition: 'Drug forming a permanent chemical bond with its target protein' },
        { term: 'LYTAC', definition: 'Lysosome-targeting chimera — degrades extracellular and membrane proteins via lysosomal pathway' },
        { term: 'basket trial', definition: 'Clinical trial testing one drug across multiple cancer types sharing a biomarker' },
        { term: 'umbrella trial', definition: 'Clinical trial testing multiple drugs in one cancer type matched by biomarker' },
        { term: 'menin inhibitor', definition: 'Drug blocking menin-KMT2A interaction in AML with KMT2A rearrangements or NPM1 mutations' },
      ],
      clinicalNotes:
        'Revumenib received FDA approval for relapsed/refractory KMT2A-rearranged AML. ' +
        'Multi-RAS inhibitor RMC-6236 shows early activity across KRAS-mutant cancers (pancreatic, NSCLC). ' +
        'ComboMATCH (NCI) is the largest-ever combination targeted therapy trial platform. ' +
        'The convergence of AI drug discovery, degrader platforms, and adaptive trial designs is accelerating the pace of precision oncology.',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'cell-cycle-and-cancer', targetType: 'concept', relationship: 'related', label: 'Cancer Biology' },
    { targetId: 'chemotherapy-principles', targetType: 'topic', relationship: 'sibling', label: 'Chemotherapy' },
    { targetId: 'immunotherapy-checkpoint-inhibitors', targetType: 'topic', relationship: 'sibling', label: 'Immunotherapy' },
    { targetId: 'cancer-screening', targetType: 'topic', relationship: 'related', label: 'Cancer Screening & Staging' },
  ],
  tags: {
    systems: ['oncology', 'pharmacology', 'molecular-biology'],
    topics: ['targeted-therapy', 'hormonal-therapy', 'precision-oncology', 'TKI'],
    keywords: ['EGFR', 'ALK', 'BRAF', 'KRAS', 'HER2', 'CDK4/6', 'PROTAC', 'PARP', 'imatinib', 'osimertinib'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
