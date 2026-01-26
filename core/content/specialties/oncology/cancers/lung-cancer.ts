/**
 * Lung Cancer Educational Content
 *
 * Comprehensive coverage of lung cancer including:
 * - NSCLC and SCLC classification
 * - Driver mutations and targeted therapy
 * - Immunotherapy approaches
 * - Staging and treatment algorithms
 */

import { EducationalContent } from '../../../types';

export const lungCancerContent: EducationalContent = {
  id: 'oncology-lung-cancer',
  type: 'condition',
  name: 'Lung Cancer',
  alternateNames: ['Bronchogenic carcinoma', 'Lung carcinoma', 'Pulmonary malignancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Lung cancer is when cells in the lungs grow out of control, often caused by smoking but can occur in non-smokers too.',
      explanation: `Lung cancer starts when cells in the lungs begin growing out of control. It is the leading cause of cancer deaths worldwide.

**Main Types:**
- **Non-small cell lung cancer (NSCLC)**: Most common (~85%)
- **Small cell lung cancer (SCLC)**: Less common but more aggressive

**Causes and Risk Factors:**
- **Smoking**: The biggest risk factor (causes ~80% of lung cancer deaths)
- **Secondhand smoke**: Can also cause lung cancer
- **Radon gas**: Natural gas that can build up in homes
- **Asbestos**: Found in some older buildings
- **Air pollution**
- **Family history**

**Warning Signs:**
- Cough that does not go away or gets worse
- Coughing up blood (even small amounts)
- Shortness of breath
- Chest pain
- Hoarseness
- Losing weight without trying
- Feeling very tired

**Diagnosis:**
- Chest X-ray or CT scan
- Biopsy (taking a small sample to test)
- PET scan to see if cancer has spread

**Treatment Options:**
- **Surgery**: Remove the cancer if caught early
- **Radiation**: High-energy rays to kill cancer cells
- **Chemotherapy**: Medicines that kill cancer cells
- **Targeted therapy**: Medicines for specific cancer types
- **Immunotherapy**: Helps your immune system fight cancer

**Prevention:**
- Do not smoke or quit if you do
- Avoid secondhand smoke
- Test your home for radon
- Avoid known cancer-causing substances at work`,
      keyTerms: [
        { term: 'lung cancer', definition: 'Cancer that starts in the lungs' },
        { term: 'CT scan', definition: 'A special X-ray that takes detailed pictures of inside the body' },
        { term: 'biopsy', definition: 'Taking a small piece of tissue to check if it is cancer' },
        { term: 'immunotherapy', definition: 'Treatment that helps your own immune system fight cancer' },
      ],
      analogies: [
        'Your lungs are like air filters. Smoking is like constantly putting dirty exhaust through the filter, eventually damaging it.',
        'Immunotherapy is like training guard dogs (immune cells) to recognize and attack intruders (cancer cells).',
      ],
      examples: [
        'A 65-year-old man who smoked for 30 years develops a persistent cough and is diagnosed with lung cancer on CT scan.',
        'A never-smoker with a gene mutation receives targeted therapy pills that control her lung cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lung cancer is classified into non-small cell and small cell types, with treatment depending on stage, histology, and increasingly on molecular markers.',
      explanation: `**Classification:**

*Non-Small Cell Lung Cancer (NSCLC) ~85%:*
- **Adenocarcinoma**: Most common, often in outer lung, common in non-smokers
- **Squamous cell carcinoma**: Usually central, strongly linked to smoking
- **Large cell carcinoma**: Can occur anywhere, grows quickly

*Small Cell Lung Cancer (SCLC) ~15%:*
- Almost always in smokers
- Very aggressive, spreads early
- Often responds to chemotherapy initially
- Usually staged as limited or extensive

**Staging (NSCLC):**
- Stage I: Cancer only in lung, small
- Stage II: Larger or spread to nearby lymph nodes
- Stage III: Spread to mediastinal lymph nodes or nearby structures
- Stage IV: Spread to other parts of body (metastatic)

**Molecular Testing (very important in NSCLC):**
Certain mutations allow targeted therapy:
- **EGFR mutations**: Common in never-smokers, Asian patients
- **ALK rearrangements**: Common in younger, light/never-smokers
- **ROS1, BRAF, KRAS, MET, RET, NTRK**: Other targetable changes
- **PD-L1 expression**: Predicts immunotherapy response

**Treatment by Stage (NSCLC):**

*Early Stage (I-II):*
- Surgery (lobectomy, segmentectomy)
- Adjuvant chemotherapy for larger tumors
- Radiation if cannot have surgery

*Locally Advanced (III):*
- Combination chemotherapy + radiation
- Sometimes surgery
- Immunotherapy after chemo-radiation

*Advanced/Metastatic (IV):*
- Targeted therapy if mutation present
- Immunotherapy (pembrolizumab, nivolumab)
- Chemotherapy
- Goal is control, not cure

**SCLC Treatment:**
- Limited stage: Chemotherapy + radiation, possibly prophylactic brain radiation
- Extensive stage: Chemotherapy + immunotherapy

**Screening:**
- Low-dose CT scan for high-risk individuals
- Ages 50-80, 20+ pack-year smoking history`,
      keyTerms: [
        { term: 'adenocarcinoma', definition: 'Most common type of lung cancer, starts in gland cells' },
        { term: 'squamous cell carcinoma', definition: 'Lung cancer from flat cells lining airways, linked to smoking' },
        { term: 'EGFR mutation', definition: 'Gene change that drives some lung cancers and can be targeted with pills' },
        { term: 'PD-L1', definition: 'Protein that helps cancer hide from immune system; high levels may predict immunotherapy response' },
        { term: 'lobectomy', definition: 'Surgery to remove one lobe of the lung' },
      ],
      analogies: [
        'Driver mutations in lung cancer are like a car stuck with the gas pedal down - targeted therapy takes the foot off the pedal.',
        'PD-L1 is like an invisibility cloak cancer uses to hide from immune cells. Immunotherapy removes the cloak.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lung cancer management integrates histological classification, comprehensive molecular profiling, and stage-appropriate multimodal therapy with emphasis on driver mutation identification.',
      explanation: `**Histologic Classification:**

*NSCLC Adenocarcinoma:*
- Subtypes: Lepidic, acinar, papillary, micropapillary, solid
- Micropapillary and solid patterns: worse prognosis
- Must report predominant pattern
- TTF-1 positive, CK7 positive

*Squamous Cell Carcinoma:*
- Keratinization, intercellular bridges
- p40, p63 positive; TTF-1 negative
- Central tumors, cavitation common

*Large Cell Neuroendocrine:*
- High-grade neuroendocrine features
- Behaves more like SCLC

**Molecular Profiling (Essential for advanced NSCLC):**

*Targetable Alterations:*
- EGFR mutations (exon 19 del, L858R): Osimertinib first-line
- ALK rearrangements: Alectinib, lorlatinib
- ROS1 rearrangements: Crizotinib, entrectinib
- BRAF V600E: Dabrafenib + trametinib
- KRAS G12C: Sotorasib, adagrasib
- MET exon 14 skipping: Capmatinib, tepotinib
- RET fusions: Selpercatinib, pralsetinib
- NTRK fusions: Larotrectinib, entrectinib
- ERBB2 (HER2) mutations: T-DXd

*Testing Methods:*
- NGS (next-generation sequencing) preferred
- FISH for rearrangements
- IHC for PD-L1, ALK
- Liquid biopsy if tissue insufficient

**Immunotherapy:**

*Biomarkers:*
- PD-L1 TPS (tumor proportion score)
- ≥50%: Pembrolizumab monotherapy option
- 1-49%: Chemo + immunotherapy
- <1%: Chemo + immunotherapy or chemo alone

*Regimens:*
- Pembrolizumab + pemetrexed + platinum (non-squamous)
- Pembrolizumab + carboplatin + paclitaxel (squamous)
- Nivolumab + ipilimumab +/- chemotherapy
- Atezolizumab combinations

**Stage-Specific Management:**

*Stage I-II Resectable:*
- Anatomic resection (lobectomy preferred, segmentectomy for smaller)
- Mediastinal lymph node sampling/dissection
- Adjuvant chemotherapy for stage II and high-risk IB
- Adjuvant osimertinib for EGFR+ stage IB-IIIA
- Neoadjuvant chemo-immunotherapy emerging (CheckMate 816)

*Stage III:*
- IIIA potentially resectable: Multimodal approach
- IIIB/C unresectable: Definitive chemoradiation
- Durvalumab maintenance after chemoRT (PACIFIC trial)

*Stage IV:*
- First determine molecular status
- Oncogene-driven: Targeted therapy
- Non-oncogene-driven: Immunotherapy-based

**SCLC:**
- Limited: Concurrent chemo-RT, prophylactic cranial irradiation
- Extensive: Platinum-etoposide + PD-L1 inhibitor (atezolizumab, durvalumab)
- Rapid response then resistance common`,
      keyTerms: [
        { term: 'osimertinib', definition: 'Third-generation EGFR TKI, first-line for EGFR-mutant NSCLC, CNS penetrant' },
        { term: 'TPS', definition: 'Tumor proportion score; percentage of tumor cells expressing PD-L1' },
        { term: 'NGS', definition: 'Next-generation sequencing; comprehensive molecular testing' },
        { term: 'PACIFIC regimen', definition: 'Durvalumab after chemoRT for unresectable stage III NSCLC' },
        { term: 'exon 19 deletion', definition: 'Common EGFR mutation, highly sensitive to EGFR TKIs' },
      ],
      clinicalNotes: 'Reflexive molecular testing on all advanced non-squamous NSCLC is standard of care. Always check mutation status before starting chemotherapy-immunotherapy if results pending.',
    },
    4: {
      level: 4,
      summary: 'Contemporary lung cancer management requires comprehensive genomic profiling, resistance mechanism understanding, and integration of evolving therapeutic agents including ADCs and novel combinations.',
      explanation: `**Advanced Molecular Diagnostics:**

*Comprehensive Genomic Profiling:*
- NGS panels (300-500 genes)
- RNA-based fusion detection
- Tumor mutational burden (TMB)
- Microsatellite instability (MSI)

*Liquid Biopsy:*
- ctDNA analysis for mutations
- Monitoring treatment response
- Resistance mechanism detection
- FDA-approved tests: FoundationOne Liquid CDx, Guardant360

**Resistance Mechanisms and Management:**

*EGFR TKI Resistance:*
- T790M mutation (1st/2nd gen TKIs): Osimertinib effective
- Osimertinib resistance:
  - C797S mutation
  - MET amplification (MET inhibitor combination)
  - Small cell transformation
  - Histologic transformation
- Emerging: Fourth-generation EGFR TKIs, combination strategies

*ALK TKI Resistance:*
- Secondary ALK mutations (G1202R, etc.)
- Lorlatinib covers most resistance mutations
- Bypass pathways (MET, EGFR)

**Novel Therapeutic Approaches:**

*Antibody-Drug Conjugates:*
- Trastuzumab deruxtecan (T-DXd) for HER2-mutant
- Datopotamab deruxtecan (TROP2-directed) under investigation
- Telisotuzumab vedotin (c-MET-directed) for c-MET overexpressing

*Bispecific Antibodies:*
- Amivantamab (EGFR x MET): EGFR exon 20 insertions
- Ongoing trials for other targets

*KRAS G12C Inhibitors:*
- Sotorasib, adagrasib
- Resistance emerging, combination studies ongoing
- Pan-KRAS inhibitors in development

**Perioperative Therapy Evolution:**

*Neoadjuvant Immunotherapy:*
- CheckMate 816: Nivolumab + chemo → surgery
- Improved pCR, EFS
- AEGEAN: Durvalumab perioperative

*Adjuvant Targeted Therapy:*
- ADAURA: Osimertinib for EGFR+ stage IB-IIIA after resection
- DFS benefit, OS pending

*Adjuvant Immunotherapy:*
- Atezolizumab for PD-L1+ stage II-IIIA (IMpower010)
- Pembrolizumab for stage IB-IIIA (PEARLS/KEYNOTE-091)

**Special Populations:**

*Brain Metastases:*
- Common in NSCLC (30-50%)
- CNS-penetrant TKIs: Osimertinib, lorlatinib, brigatinib
- SRS vs whole brain RT considerations
- Immunotherapy in stable CNS disease

*Elderly Patients:*
- Maintain aggressive molecular testing
- Single-agent immunotherapy or modified regimens
- Geriatric assessment helpful

*Never-Smokers:*
- Higher likelihood of driver mutations
- Often adenocarcinoma with indolent behavior
- Extended comprehensive testing essential

**SCLC Advances:**

*Immunotherapy Integration:*
- IMpower133: Atezolizumab + chemo
- CASPIAN: Durvalumab + chemo
- Modest but significant survival benefit

*Emerging Targets:*
- DLL3 (rovalpituzumab tesirine - discontinued, new agents)
- Lurbinectedin (FDA approved)
- PARP inhibitors in combination

**Oligometastatic Disease:**
- Local consolidative therapy (radiation, surgery)
- SABR-COMET, SINDAS trials
- Potential for cure in selected patients`,
      keyTerms: [
        { term: 'C797S', definition: 'EGFR resistance mutation occurring after osimertinib treatment' },
        { term: 'amivantamab', definition: 'EGFR-MET bispecific antibody for EGFR exon 20 insertions' },
        { term: 'pCR', definition: 'Pathologic complete response; no viable cancer in surgical specimen after neoadjuvant therapy' },
        { term: 'oligometastatic', definition: 'Limited number of metastases, potentially curable with local therapy' },
        { term: 'histologic transformation', definition: 'Change in cancer type (e.g., NSCLC to SCLC) as resistance mechanism' },
      ],
      clinicalNotes: 'Repeat biopsy at progression essential to identify resistance mechanisms. Consider clinical trial at each line of therapy. Multidisciplinary discussion mandatory for complex cases.',
    },
    5: {
      level: 5,
      summary: 'Lung cancer treatment continues to evolve with emerging ADCs, novel immunotherapy combinations, minimal residual disease monitoring, and increasingly refined biomarker-directed approaches.',
      explanation: `**Cutting-Edge Therapeutics:**

*Next-Generation ADCs:*
- Patritumab deruxtecan (HER3-directed): HERTHENA-Lung01
- Datopotamab deruxtecan (TROP2): TROPION studies
- DS-7300 (B7-H3-directed)
- Payload optimization, linker chemistry advances

*Bispecific and Multispecific Antibodies:*
- Amivantamab: EGFR x MET, MARIPOSA trials
- Tarlatamab: DLL3 x CD3 for SCLC (DeLLphi trials)
- Zenocutuzumab: HER2 x HER3

*Novel Small Molecules:*
- Fourth-generation EGFR TKIs (targeting C797S)
- Pan-KRAS inhibitors (beyond G12C)
- SHP2 inhibitors (combination strategies)
- SOS1 inhibitors (KRAS pathway)
- CDK4/6 inhibitors in combination

**Immunotherapy Optimization:**

*Novel Combinations:*
- LAG-3 inhibitors (relatlimab combinations)
- TIGIT inhibitors (tiragolumab, vibostolimab)
- CD73/adenosine pathway inhibitors
- Cellular therapies (CAR-T, TILs under investigation)

*Biomarker Refinement:*
- Beyond PD-L1: TMB, STK11/KEAP1 mutations
- Immune gene signatures
- Tumor microenvironment characterization
- AI-driven response prediction

*Overcoming Primary Resistance:*
- STK11/LKB1 mutations: Negative predictive for IO
- KEAP1 mutations: Poor IO response
- Combination strategies under investigation

**Minimal Residual Disease:**

*ctDNA Applications:*
- Post-surgery MRD detection
- IMpower010 landmark analysis: ctDNA clearance prognostic
- MERMAID-1, MERMAID-2: ctDNA-guided therapy
- Earlier relapse detection

*Treatment Escalation/De-escalation:*
- ctDNA-guided adjuvant therapy decisions
- Intensification for MRD-positive
- De-escalation trials for MRD-negative

**Surgical Evolution:**

*Minimally Invasive Approaches:*
- VATS, robotic surgery standard
- Sublobar resection for small tumors (JCOG0802, CALGB 140503)
- Segmentectomy vs wedge considerations

*Extended Resections:*
- Neoadjuvant enabling more resections
- Sleeve resections, pneumonectomy decisions
- Multidisciplinary surgical planning

**Radiation Advances:**

*SBRT/SABR:*
- Early stage inoperable
- Oligometastatic consolidation
- SABR-COMET survival benefit

*Proton Therapy:*
- Dosimetric advantages
- Reduced cardiac/lung toxicity potential
- Stage III trials ongoing

*Flash Radiotherapy:*
- Ultra-high dose rate
- Potentially reduced normal tissue toxicity
- Early clinical investigation

**SCLC Frontiers:**

*DLL3-Targeted Approaches:*
- Tarlatamab: T-cell engager, promising efficacy
- BiTE technology application

*Other Targets:*
- ASCL1, NEUROD1 transcription factors
- POU2F3 (tuft cell subtype)
- Molecular subtyping implications

**Clinical Trial Landscape:**

*Key Ongoing Studies:*
- MARIPOSA (amivantamab in EGFR-mutant)
- TROPION-Lung (datopotamab deruxtecan)
- LIBRETTO-431 (selpercatinib first-line RET)
- CodeBreaK 200 (sotorasib maintenance)

*Novel Designs:*
- Umbrella/basket trials
- Adaptive platform trials
- ctDNA-driven enrollment
- Real-world data integration

**Survivorship and Late Effects:**

*Treatment-Related Toxicities:*
- Pneumonitis (immunotherapy, radiation)
- Cardiotoxicity monitoring
- Endocrinopathies (checkpoint inhibitors)
- Cognitive effects

*Quality of Life Integration:*
- PRO measures in trials
- Palliative care integration
- Survivorship care plans
- Shared decision-making frameworks`,
      keyTerms: [
        { term: 'tarlatamab', definition: 'DLL3 x CD3 bispecific T-cell engager for SCLC' },
        { term: 'STK11/LKB1', definition: 'Tumor suppressor mutation associated with immunotherapy resistance in NSCLC' },
        { term: 'SABR-COMET', definition: 'Trial demonstrating survival benefit for stereotactic ablative radiotherapy in oligometastatic cancer' },
        { term: 'MRD', definition: 'Minimal residual disease; detectable cancer DNA after curative-intent treatment' },
        { term: 'BiTE', definition: 'Bispecific T-cell engager; antibody format linking T cells to tumor cells' },
      ],
      clinicalNotes: 'The lung cancer treatment landscape is rapidly evolving. Comprehensive molecular profiling is mandatory for all advanced NSCLC. Clinical trial enrollment should be considered at each treatment decision point. MRD detection may soon guide adjuvant therapy decisions.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['respiratory', 'pulmonary'],
    topics: ['oncology', 'lung cancer', 'targeted therapy', 'immunotherapy'],
    keywords: ['EGFR', 'ALK', 'PD-L1', 'NSCLC', 'SCLC', 'smoking'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
