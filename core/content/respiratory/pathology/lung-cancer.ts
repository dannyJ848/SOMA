/**
 * Lung Cancer - Respiratory Pathology
 *
 * Comprehensive coverage of lung cancer including types, staging,
 * diagnosis, and treatment approaches.
 */

import { EducationalContent } from '../../types';

export const lungCancerContent: EducationalContent = {
  id: 'respiratory-lung-cancer',
  type: 'condition',
  name: 'Lung Cancer',
  alternateNames: ['Bronchogenic Carcinoma', 'Pulmonary Malignancy', 'Lung Carcinoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Lung cancer is when cells in the lungs grow out of control and form tumors, most often caused by smoking cigarettes.',
      explanation: `## What Is Lung Cancer?

Lung cancer happens when abnormal cells in the lung start growing too fast and form a lump called a tumor. These cancer cells can spread to other parts of the body.

### How It Develops

**Normal Cells:**
- Grow and divide in an organized way
- Old cells die and new ones replace them
- Controlled process

**Cancer Cells:**
- Grow out of control
- Do not die when they should
- Form tumors
- Can spread to other organs

### Main Cause

**Smoking:**
- Causes about 80-90% of lung cancers
- The more you smoke, the higher the risk
- Quitting helps even after many years
- Secondhand smoke also increases risk

**Other Causes:**
- Radon gas (in some homes)
- Asbestos exposure
- Air pollution
- Family history
- Sometimes unknown cause

### Warning Signs

**Early Signs:**
- Cough that does not go away
- Coughing up blood
- Shortness of breath
- Chest pain

**Later Signs:**
- Losing weight without trying
- Feeling very tired
- Hoarse voice
- Headaches
- Bone pain

### Types of Lung Cancer

**Two Main Groups:**

**Non-Small Cell (Most Common):**
- Grows more slowly
- About 80-85% of cases
- Several subtypes

**Small Cell:**
- Grows faster
- Spreads quickly
- About 15% of cases
- Strongly linked to smoking

### Treatment Options

**Depends on:**
- Type of cancer
- How far it has spread
- Your overall health

**Common Treatments:**
- Surgery (remove the tumor)
- Radiation (high-energy beams)
- Chemotherapy (cancer-killing drugs)
- Targeted therapy (newer medicines)
- Immunotherapy (helps immune system fight cancer)

### Prevention

**What You Can Do:**
- Do not smoke or quit smoking
- Avoid secondhand smoke
- Test your home for radon
- Protect yourself from chemicals at work
- Eat healthy and exercise

### Screening

**For High-Risk People:**
- Low-dose CT scans can find cancer early
- Recommended for heavy smokers age 50-80
- Early detection improves survival`,
      keyTerms: [
        { term: 'tumor', definition: 'An abnormal lump or mass of tissue that forms when cells grow out of control' },
        { term: 'cancer', definition: 'A disease where abnormal cells grow uncontrollably and can spread' },
        { term: 'chemotherapy', definition: 'Strong medicines that kill cancer cells' },
        { term: 'radiation', definition: 'Treatment using high-energy beams to kill cancer cells' },
        { term: 'screening', definition: 'Tests done to find cancer early, before symptoms appear' },
      ],
      analogies: [
        'Cancer cells are like weeds in a garden that grow too fast and crowd out healthy plants.',
        'Chemotherapy is like weed killer - it attacks fast-growing cells to stop the cancer.',
        'Screening for lung cancer is like checking your car regularly - finding problems early makes them easier to fix.',
      ],
      examples: [
        'A person who has smoked for 30 years might qualify for lung cancer screening with a low-dose CT scan.',
        'Someone with a cough that lasts more than 3 weeks and is coughing up blood should see a doctor right away.',
      ],
      patientCounselingPoints: [
        'Quitting smoking is the most important thing you can do to reduce your risk',
        'If you are at high risk, ask your doctor about lung cancer screening',
        'Know the warning signs and report them to your doctor early',
        'Treatment options have improved significantly in recent years',
      ],
    },
    2: {
      level: 2,
      summary: 'Lung cancer is classified into non-small cell (NSCLC) and small cell (SCLC) types, with staging determining treatment approach and prognosis.',
      explanation: `## Understanding Lung Cancer

### Classification

**Non-Small Cell Lung Cancer (NSCLC) - 85%:**
- Adenocarcinoma (40%)
- Squamous cell carcinoma (25-30%)
- Large cell carcinoma (10%)
- Slower growing than SCLC

**Small Cell Lung Cancer (SCLC) - 15%:**
- Rapidly growing
- Early metastasis
- Strongly associated with smoking
- Limited vs extensive stage

### Risk Factors

**Modifiable:**
- Tobacco smoking (most important)
- Secondhand smoke exposure
- Occupational exposures (asbestos, radon)
- Air pollution

**Non-Modifiable:**
- Family history
- Prior radiation therapy
- Age (most cases after 65)
- Pulmonary fibrosis

### Clinical Presentation

**Local Symptoms:**
- Persistent cough
- Hemoptysis
- Dyspnea
- Chest pain
- Recurrent pneumonia

**Regional Spread:**
- Hoarseness (recurrent laryngeal nerve)
- Dysphagia
- Superior vena cava syndrome
- Horner syndrome (Pancoast tumor)
- Phrenic nerve palsy

**Metastatic:**
- Bone pain
- Headache, neurological symptoms
- Hepatomegaly
- Weight loss, cachexia

**Paraneoplastic Syndromes:**
- SIADH (SCLC)
- Cushing syndrome
- Hypercalcemia (squamous)
- Lambert-Eaton syndrome
- Hypertrophic osteoarthropathy

### Diagnosis

**Imaging:**
- Chest X-ray (initial)
- CT chest with contrast
- PET-CT for staging
- MRI brain (NSCLC III-IV, all SCLC)

**Tissue Diagnosis:**
- Bronchoscopy with biopsy
- CT-guided needle biopsy
- Thoracentesis (pleural effusion)
- Surgical biopsy (VATS, mediastinoscopy)

**Molecular Testing (NSCLC):**
- EGFR mutations
- ALK rearrangement
- ROS1 rearrangement
- PD-L1 expression
- KRAS, BRAF, RET, MET, NTRK

### Staging

**NSCLC - TNM Staging:**
- T: Tumor size and local invasion
- N: Lymph node involvement
- M: Distant metastasis
- Stages I-IV with substages

**SCLC Staging:**
- Limited: Confined to one hemithorax
- Extensive: Beyond limited stage

### Treatment by Stage

**NSCLC:**
- Stage I-II: Surgery ± adjuvant therapy
- Stage III: Combined modality
- Stage IV: Systemic therapy

**SCLC:**
- Limited: Chemoradiation
- Extensive: Chemotherapy + immunotherapy

### Surgical Options

**Types:**
- Lobectomy (preferred)
- Pneumonectomy
- Wedge resection
- Segmentectomy

**Requirements:**
- Adequate pulmonary function
- No distant metastases
- Medically operable

### Systemic Therapy

**Chemotherapy:**
- Platinum-based doublets
- Carboplatin or cisplatin + pemetrexed/paclitaxel

**Targeted Therapy:**
- EGFR inhibitors (osimertinib)
- ALK inhibitors (alectinib)
- ROS1 inhibitors

**Immunotherapy:**
- PD-1/PD-L1 inhibitors (pembrolizumab, nivolumab)
- PD-L1 expression guides selection
- Combined with chemotherapy in some cases

### Prognosis

**5-Year Survival:**
- Localized: ~60%
- Regional: ~35%
- Distant: ~7%
- Overall: ~22%

### Screening

**LDCT Criteria (USPSTF):**
- Age 50-80 years
- 20 pack-year smoking history
- Current smoker or quit within 15 years`,
      keyTerms: [
        { term: 'adenocarcinoma', definition: 'Most common type of lung cancer, arising from glandular cells, often peripheral' },
        { term: 'squamous cell carcinoma', definition: 'Lung cancer arising from squamous cells, often central, associated with smoking' },
        { term: 'Pancoast tumor', definition: 'Lung cancer at the apex causing shoulder pain and Horner syndrome' },
        { term: 'PD-L1', definition: 'Programmed death ligand 1; biomarker for immunotherapy response' },
        { term: 'LDCT', definition: 'Low-dose computed tomography; screening test for high-risk individuals' },
      ],
      analogies: [
        'TNM staging is like describing the address of the cancer - T is the house size, N is the neighborhood, M is if it has moved to another city.',
        'Targeted therapy is like a smart missile - it specifically attacks cancer cells with certain features.',
        'PD-L1 is like a shield that cancer cells use to hide from the immune system - immunotherapy helps remove that shield.',
      ],
      examples: [
        'A 65-year-old smoker with a 4 cm tumor confined to one lobe (Stage IB) is a candidate for lobectomy.',
        'NSCLC with EGFR mutation may respond dramatically to osimertinib, a targeted oral medication.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lung cancer molecular profiling guides precision therapy selection, with multidisciplinary staging and treatment optimization improving outcomes.',
      explanation: `## Comprehensive Lung Cancer Management

### Molecular Pathology

**Driver Mutations:**

**EGFR Mutations (15-20% NSCLC):**
- Exon 19 deletion, L858R most common
- Associated with never/light smokers, Asian ethnicity
- Predict response to TKIs
- Resistance mutations (T790M, C797S)

**ALK Rearrangements (3-5%):**
- EML4-ALK fusion most common
- Young, never/light smokers
- Adenocarcinoma histology
- Multiple generations of inhibitors

**ROS1 Rearrangements (1-2%):**
- Similar to ALK clinically
- Crizotinib, entrectinib effective

**KRAS Mutations (25-30%):**
- G12C most common
- Historically "undruggable"
- Sotorasib, adagrasib now available

**Other Targets:**
- BRAF V600E (dabrafenib + trametinib)
- RET fusions (selpercatinib, pralsetinib)
- MET exon 14 skip (tepotinib, capmatinib)
- NTRK fusions (larotrectinib, entrectinib)
- HER2 mutations (trastuzumab deruxtecan)

### Biomarker Testing

**Required Testing:**
- EGFR, ALK, ROS1, BRAF, MET, RET, NTRK
- PD-L1 expression (TPS and CPS)
- Next-generation sequencing (NGS) preferred

**Liquid Biopsy:**
- Circulating tumor DNA (ctDNA)
- When tissue insufficient
- For monitoring resistance
- Emerging first-line role

### Staging Workup

**Standard:**
- CT chest/abdomen with contrast
- PET-CT
- MRI brain (stage III-IV, consider in II)
- Mediastinal staging (EBUS, mediastinoscopy)

**Pathologic Staging:**
- EBUS-TBNA for lymph nodes
- Superior to CT/PET for N staging
- Confirms operability

### Multidisciplinary Management

**Treatment Selection Factors:**
- Stage
- Histology
- Molecular profile
- PD-L1 expression
- Performance status
- Comorbidities

**Tumor Board:**
- Pulmonology
- Medical oncology
- Radiation oncology
- Thoracic surgery
- Pathology
- Radiology

### Treatment by Stage

**Stage I:**
- Lobectomy + lymph node sampling
- SBRT if not surgical candidate
- Adjuvant osimertinib (EGFR+, stage IB-IIIA)

**Stage II:**
- Surgery + adjuvant chemotherapy
- Adjuvant targeted therapy if applicable

**Stage III:**
- IIIA: Surgery + adjuvant therapy OR definitive chemoradiation
- IIIB/C: Definitive chemoradiation + durvalumab consolidation

**Stage IV:**
- First-line based on molecular profile and PD-L1
- Targeted therapy for actionable mutations
- Immunotherapy ± chemotherapy for others
- Palliative care integration

### Immunotherapy Landscape

**PD-L1 ≥50%:**
- Pembrolizumab monotherapy option
- Or combination with chemotherapy

**PD-L1 1-49%:**
- Chemotherapy + immunotherapy

**PD-L1 <1%:**
- Chemotherapy + immunotherapy
- Chemotherapy alone option

**Combination Approaches:**
- Nivolumab + ipilimumab (±chemotherapy)
- Pembrolizumab + chemotherapy
- Atezolizumab + bevacizumab + chemotherapy

### SCLC Treatment

**Limited Stage:**
- Concurrent chemoradiation
- Carboplatin/etoposide
- Prophylactic cranial irradiation (PCI)

**Extensive Stage:**
- Chemotherapy + atezolizumab or durvalumab
- PCI controversial
- Thoracic consolidation RT if response

### Resistance Mechanisms

**EGFR TKI Resistance:**
- T790M (overcome by osimertinib)
- C797S
- MET amplification
- Histologic transformation

**Management:**
- Repeat biopsy (tissue or liquid)
- Consider combination therapy
- Clinical trial enrollment

### Oligometastatic Disease

**Definition:**
- Limited metastatic sites
- Potentially curable with local therapy

**Treatment:**
- Systemic therapy + local (surgery, SBRT)
- Improved survival in selected patients

### Supportive Care

**Symptom Management:**
- Dyspnea
- Cough
- Pain
- Fatigue
- Cachexia

**Palliative Care:**
- Early integration
- Improves quality of life
- May improve survival
- Advance care planning`,
      keyTerms: [
        { term: 'driver mutation', definition: 'Genetic alteration that causes cancer growth and can be therapeutically targeted' },
        { term: 'liquid biopsy', definition: 'Blood-based test detecting circulating tumor DNA to identify mutations' },
        { term: 'SBRT', definition: 'Stereotactic body radiation therapy; precisely targeted high-dose radiation' },
        { term: 'oligometastatic', definition: 'Limited metastatic disease potentially amenable to local therapy' },
        { term: 'durvalumab', definition: 'PD-L1 inhibitor used as consolidation after chemoradiation in stage III NSCLC' },
      ],
      clinicalNotes: 'Broad molecular profiling with NGS is now standard of care in advanced NSCLC. Up to 50% of adenocarcinomas have potentially actionable alterations. Treatment must wait for results in most cases.',
    },
    4: {
      level: 4,
      summary: 'Advanced lung cancer management requires expertise in molecular resistance mechanisms, treatment sequencing, clinical trial integration, and survivorship care.',
      explanation: `## Advanced Lung Cancer Management

### Molecular Complexity

**Resistance Evolution:**

**EGFR Pathway:**
- First-line osimertinib now standard
- On-target: C797S mutations
- Off-target: MET, HER2 amplification
- Histologic transformation (SCLC, SCC)

**ALK Pathway:**
- Sequential TKI options (alectinib → lorlatinib)
- Compound mutations
- ALK resistance mutations guide selection
- Bypass activation (MET, IGF-1R)

**Strategies:**
- Repeat biopsy at progression
- ctDNA monitoring
- Combination approaches
- Clinical trial consideration

### Immunotherapy Nuances

**Predictive Biomarkers:**
- PD-L1 (imperfect predictor)
- TMB (tumor mutational burden)
- STK11/LKB1 mutations (poor response)
- EGFR/ALK mutations (usually start with TKI)

**Sequencing:**
- IO naive after TKI progression
- TKI after IO progression
- Combinations under study

**Hyperprogression:**
- Rapid progression on immunotherapy
- Risk factors incompletely defined
- MDM2/MDM4 amplification association

**Immune-Related Adverse Events:**
- Pneumonitis (potentially fatal)
- Colitis
- Hepatitis
- Endocrinopathies
- Management protocols essential

### Brain Metastases

**Prevalence:**
- 10% at diagnosis, 40% during course
- Higher in ALK+, EGFR+

**Treatment:**
- SRS for limited lesions
- WBRT with hippocampal avoidance
- CNS-penetrant TKIs (osimertinib, lorlatinib)
- Combined approaches

**Monitoring:**
- Regular MRI
- Clinical vigilance
- Symptomatic management

### Thoracic Radiation Advanced Concepts

**Definitive Chemoradiation:**
- Concurrent preferred
- 60-66 Gy in 30-33 fractions
- Intensity-modulated radiation therapy (IMRT)
- Durvalumab consolidation (stage III)

**SBRT:**
- Medically inoperable early stage
- 50-60 Gy in 3-5 fractions
- High local control
- Oligometastatic disease

### Surgical Advances

**Minimally Invasive:**
- Video-assisted thoracoscopic surgery (VATS)
- Robotic-assisted surgery
- Faster recovery
- Equivalent oncologic outcomes

**Enhanced Recovery:**
- Multimodal analgesia
- Early mobilization
- Reduced length of stay

**Neoadjuvant Approaches:**
- Chemotherapy ± immunotherapy
- CheckMate 816 (nivolumab + chemo)
- Increased pathologic complete response
- Evolving standard of care

### Clinical Trials

**Design Evolution:**
- Biomarker-selected trials
- Basket and umbrella designs
- Adaptive trial designs
- Real-world evidence integration

**Key Studies:**
- ADAURA (adjuvant osimertinib)
- PACIFIC (durvalumab consolidation)
- CheckMate 816 (neoadjuvant nivo + chemo)
- KEYNOTE series (pembrolizumab)
- FLAURA (osimertinib first-line)

### Rare Histologies

**Large Cell Neuroendocrine:**
- Aggressive biology
- Platinum + etoposide often used
- Limited targeted options

**Pulmonary Carcinoids:**
- Typical vs atypical
- Surgery primary treatment
- Somatostatin analogs for advanced
- Temozolomide, everolimus options

**Mesothelioma:**
- Asbestos-related
- Pemetrexed + platinum
- Nivolumab + ipilimumab
- BAP1 mutations

### Survivorship

**Long-Term Issues:**
- Surveillance protocols
- Second primary cancers
- Treatment-related toxicities
- Psychosocial support
- Pulmonary rehabilitation

**Quality of Life:**
- Patient-reported outcomes
- Symptom management
- Functional status
- Return to activities

### Tobacco Cessation

**Critical Role:**
- Even after diagnosis
- Improves outcomes
- Reduces toxicity
- Prevents second cancers

**Approaches:**
- Pharmacotherapy (varenicline, bupropion, NRT)
- Counseling
- Combination therapy
- Continued support

### Emerging Directions

**Novel Combinations:**
- TKI + immunotherapy
- TKI + anti-angiogenic
- Dual immunotherapy
- ADCs (antibody-drug conjugates)

**New Targets:**
- KRAS G12D
- STK11 pathway
- DDR targets
- Tumor microenvironment

**Technology:**
- AI in diagnosis/staging
- Circulating tumor cells
- Metabolomics
- Proteomics`,
      keyTerms: [
        { term: 'compound mutations', definition: 'Multiple resistance mutations in same gene complicating treatment selection' },
        { term: 'hyperprogression', definition: 'Paradoxical rapid tumor growth following immunotherapy initiation' },
        { term: 'CNS penetration', definition: 'Ability of drugs to cross blood-brain barrier and treat brain metastases' },
        { term: 'neoadjuvant', definition: 'Treatment given before surgery to shrink tumors and improve outcomes' },
        { term: 'ADC', definition: 'Antibody-drug conjugate; targeted delivery of cytotoxic payload' },
      ],
      clinicalNotes: 'Neoadjuvant chemoimmunotherapy (CheckMate 816) showed significantly improved pathologic complete response and event-free survival, changing the paradigm for resectable NSCLC.',
    },
    5: {
      level: 5,
      summary: 'Expert lung cancer management integrates cutting-edge molecular understanding, novel therapeutic approaches, clinical trial innovation, and health systems optimization for improved outcomes.',
      explanation: `## Expert Lung Cancer Management

### Molecular Frontiers

**Tumor Heterogeneity:**
- Intratumoral diversity
- Clonal evolution
- Spatial heterogeneity
- Temporal changes
- Single-cell sequencing insights

**Minimal Residual Disease:**
- ctDNA MRD detection
- Guides adjuvant therapy duration
- Risk stratification
- Early relapse detection
- CIRCULATE-Japan, MERMAID trials

**Epigenetics:**
- DNA methylation patterns
- Histone modifications
- lncRNA dysregulation
- Therapeutic implications

### Novel Therapeutic Modalities

**Antibody-Drug Conjugates:**
- Trastuzumab deruxtecan (HER2)
- Datopotamab deruxtecan (TROP2)
- Sacituzumab govitecan
- Expanding indications

**Bispecific Antibodies:**
- T-cell engagers
- Amivantamab (EGFR/MET)
- Tarlatamab (DLL3/CD3)
- Novel constructs

**Cellular Therapies:**
- CAR-T (early development)
- TIL therapy
- TCR-engineered cells
- Manufacturing challenges

**KRAS Targeting:**
- G12C: sotorasib, adagrasib
- G12D: MRTX1133 in trials
- Pan-KRAS inhibitors
- Combinations with SHP2, SOS1 inhibitors

### Resistance Deep Dive

**Mechanisms:**
- Target modification
- Bypass pathway activation
- Downstream effector alterations
- Phenotypic transformation
- Tumor microenvironment changes

**Overcoming Resistance:**
- Fourth-generation EGFR inhibitors
- Combination strategies
- Drug holidays
- Re-challenge strategies

### Immunotherapy Evolution

**Novel Checkpoints:**
- LAG-3 (relatlimab)
- TIGIT (tiragolumab)
- CD47 (magrolimab)
- TIM-3, VISTA

**Combination Strategies:**
- PD-1 + CTLA-4
- PD-1 + LAG-3
- Chemo-IO + IO-IO
- TKI + IO (ongoing trials)

**Biomarker Refinement:**
- Beyond PD-L1 and TMB
- Gene expression signatures
- Microbiome interactions
- Host immune status

### Clinical Trial Innovation

**Adaptive Platforms:**
- Lung-MAP
- ALCHEMIST
- NCI-MATCH
- Master protocols

**Real-World Evidence:**
- Expanded access data
- Registry studies
- Claims databases
- Pragmatic trials

**Endpoints:**
- Patient-reported outcomes
- Quality-adjusted survival
- Financial toxicity
- Caregiver outcomes

### Precision Radiotherapy

**MRI-Guided Radiation:**
- Real-time adaptation
- Respiratory gating
- Dose escalation potential
- Reduced toxicity

**Particle Therapy:**
- Proton therapy
- Carbon ion therapy
- Dosimetric advantages
- Limited availability

### Surgical Innovation

**Sublobar Resection:**
- JCOG0802/CALGB 140503
- Selected small tumors
- Equivalent outcomes
- Function preservation

**Robotic Evolution:**
- Single-port
- Subxiphoid approach
- Enhanced ergonomics
- Training pathways

### Health Systems

**Value-Based Care:**
- Cost-effectiveness analysis
- Alternative payment models
- Quality metrics
- Reducing disparities

**Access:**
- Biomarker testing access
- Novel therapy availability
- Rural/urban disparities
- Global perspectives

### Survivorship Science

**Late Effects:**
- Cardiopulmonary toxicity
- Cognitive effects
- Second malignancies
- Immune-related sequelae

**Rehabilitation:**
- Prehabilitation
- Perioperative optimization
- Long-term exercise
- Pulmonary rehabilitation

### Future Paradigms

**Prevention:**
- Chemoprevention trials
- Molecular prevention
- Environmental interventions
- Health policy

**Early Detection:**
- Blood-based screening
- Multi-cancer early detection
- AI-enhanced imaging
- Risk stratification

**Cure:**
- Personalized approaches
- Combination optimization
- Minimal residual disease eradication
- Long-term disease control

### Global Perspectives

**Low/Middle-Income:**
- Generic targeted therapies
- Simplified diagnostics
- Capacity building
- Priority setting

**Environmental:**
- Air pollution lung cancer
- Radon mitigation
- Occupational health
- Policy advocacy

**Tobacco Control:**
- MPOWER framework
- E-cigarette emergence
- Industry interference
- Advocacy role`,
      keyTerms: [
        { term: 'minimal residual disease', definition: 'Small amounts of cancer remaining after treatment, detected by sensitive molecular methods' },
        { term: 'bispecific antibody', definition: 'Engineered antibody binding two different targets simultaneously' },
        { term: 'tumor heterogeneity', definition: 'Genetic and phenotypic diversity within and between tumor regions' },
        { term: 'TIL therapy', definition: 'Tumor-infiltrating lymphocyte therapy; adoptive cellular immunotherapy' },
        { term: 'MPOWER', definition: 'WHO framework for tobacco control implementation' },
      ],
      clinicalNotes: `Key clinical insights in expert lung cancer management:

1. **MRD monitoring:** ctDNA-based MRD detection is emerging as a powerful tool for guiding adjuvant therapy and predicting recurrence risk.

2. **KRAS targeting:** Sotorasib and adagrasib have transformed the treatment landscape for KRAS G12C-mutant NSCLC. Resistance mechanisms inform combination strategies.

3. **Bispecifics:** Amivantamab (EGFR/MET) shows activity in EGFR exon 20 insertions and as combination therapy. Tarlatamab (DLL3/CD3) promising in SCLC.

4. **Neoadjuvant IO:** CheckMate 816 established nivolumab + chemotherapy before surgery as a new standard, with pathologic complete response as a meaningful endpoint.

5. **Rare mutations:** Even mutations present in <5% of cases (RET, NTRK, MET exon 14) should be tested as highly effective targeted therapies exist.

6. **Immunotherapy resistance:** STK11/LKB1 and KEAP1 mutations associate with poor immunotherapy response. Understanding resistance mechanisms guides treatment sequencing.

7. **Brain metastases:** CNS-penetrant TKIs (osimertinib, lorlatinib) can defer brain radiotherapy in selected patients with controlled systemic disease.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'nccn-nsclc',
      type: 'website',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer',
      authors: ['National Comprehensive Cancer Network'],
      source: 'NCCN',
      url: 'https://www.nccn.org',
    },
    {
      id: 'nejm-lung-cancer',
      type: 'article',
      title: 'Lung Cancer',
      authors: ['Thai AA', 'Solomon BJ', 'Sequist LV', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'oncology-staging', targetType: 'concept', relationship: 'related', label: 'Cancer Staging' },
    { targetId: 'oncology-immunotherapy', targetType: 'concept', relationship: 'related', label: 'Immunotherapy' },
    { targetId: 'addiction-smoking-cessation', targetType: 'concept', relationship: 'related', label: 'Smoking Cessation' },
    { targetId: 'respiratory-screening', targetType: 'concept', relationship: 'related', label: 'Lung Cancer Screening' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['oncology', 'pulmonology', 'thoracic-surgery'],
    keywords: ['lung cancer', 'NSCLC', 'SCLC', 'targeted therapy', 'immunotherapy', 'screening'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'oncology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default lungCancerContent;
