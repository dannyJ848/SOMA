/**
 * Melanoma Educational Content
 *
 * Comprehensive coverage of melanoma including:
 * - Risk factors and prevention
 * - ABCDE criteria and early detection
 * - Staging and molecular features
 * - Targeted therapy and immunotherapy revolution
 */

import { EducationalContent } from '../../../types';

export const melanomaContent: EducationalContent = {
  id: 'oncology-melanoma',
  type: 'condition',
  name: 'Melanoma',
  alternateNames: ['Malignant melanoma', 'Cutaneous melanoma', 'Skin cancer (melanoma type)'],

  levels: {
    1: {
      level: 1,
      summary: 'Melanoma is a serious type of skin cancer that starts in the cells that give skin its color, and it is often caused by sun exposure.',
      explanation: `Melanoma is a type of skin cancer that starts in melanocytes - the cells that make the pigment (color) in your skin. It is less common than other skin cancers but more dangerous because it can spread.

**Risk Factors:**
- Too much sun exposure or sunburns
- Using tanning beds
- Fair skin, light hair, light eyes
- Many moles or unusual moles
- Family history of melanoma
- Weakened immune system

**Warning Signs - The ABCDE Rule:**
- **A = Asymmetry**: One half doesn't match the other
- **B = Border**: Edges are uneven, ragged, or blurred
- **C = Color**: Different shades of brown, black, or other colors
- **D = Diameter**: Larger than a pencil eraser (6mm)
- **E = Evolving**: Changing in size, shape, or color

**Other Warning Signs:**
- A new spot that looks different from other moles
- A sore that doesn't heal
- Redness or swelling beyond a mole's border
- Itching, tenderness, or pain

**Finding Melanoma Early:**
- Check your skin monthly for changes
- See a dermatologist regularly
- Tell your doctor about any changing moles

**Treatment:**
- **Surgery**: Remove the melanoma and some surrounding skin
- **Immunotherapy**: Help your immune system fight the cancer
- **Targeted therapy**: Attack specific features of cancer cells
- **Radiation**: In some situations

**Prevention:**
- Use sunscreen (SPF 30+) and reapply often
- Wear protective clothing and hats
- Avoid tanning beds
- Seek shade during peak sun hours (10 AM - 4 PM)
- Check your skin regularly`,
      keyTerms: [
        { term: 'melanoma', definition: 'A type of skin cancer that starts in pigment-making cells' },
        { term: 'melanocyte', definition: 'The cell that gives skin its color' },
        { term: 'mole', definition: 'A spot on the skin made of pigment cells' },
        { term: 'SPF', definition: 'Sun Protection Factor; higher numbers mean more protection' },
      ],
      analogies: [
        'Melanocytes are like tiny paint factories in your skin that make the pigment that colors it.',
        'The ABCDE rule is like a checklist for suspicious moles - the more letters that apply, the more concerned you should be.',
      ],
      examples: [
        'A woman notices a mole on her arm has grown and has uneven borders. She sees a dermatologist who removes it, finding early melanoma.',
        'A man who used tanning beds as a teenager develops melanoma on his back in his 30s.',
      ],
    },
    2: {
      level: 2,
      summary: 'Melanoma develops from melanocytes and is staged by tumor thickness, ulceration, and spread, with treatment revolutionized by immunotherapy and targeted drugs.',
      explanation: `**Understanding Melanoma:**

*Types:*
- **Superficial spreading**: Most common (~70%), horizontal growth first
- **Nodular**: More aggressive, grows vertically early
- **Lentigo maligna**: Sun-damaged skin, older adults, face
- **Acral lentiginous**: Palms, soles, under nails (more common in darker skin)

**Diagnosis:**

*Biopsy Techniques:*
- Excisional biopsy preferred (remove entire lesion)
- Punch or shave biopsy for larger lesions
- Never "shave off" a suspected melanoma

*Pathology Report:*
- Breslow thickness (depth in mm) - most important
- Clark level (anatomic layer)
- Ulceration (yes/no)
- Mitotic rate (cell division rate)
- Margins (clear or involved)

**Staging:**

*T Stage (Tumor):*
- T1: ≤1.0 mm thick
- T2: 1.01-2.0 mm
- T3: 2.01-4.0 mm
- T4: >4.0 mm
- a = no ulceration, b = ulcerated

*N Stage (Nodes):*
- N0: No lymph node involvement
- N1-3: Based on number of involved nodes

*M Stage (Metastases):*
- M0: No distant spread
- M1: Distant metastases (skin, lung, brain, liver)

**Surgical Treatment:**

*Wide Local Excision:*
- Melanoma in situ: 5 mm margins
- T1 (≤1 mm): 1 cm margins
- T2 (1-2 mm): 1-2 cm margins
- T3-4 (>2 mm): 2 cm margins

*Sentinel Lymph Node Biopsy:*
- For tumors ≥0.8 mm or ulcerated
- Identifies lymph node spread
- Guides staging and treatment

**Advanced Disease Treatment:**

*Targeted Therapy (BRAF-mutant, ~50%):*
- BRAF + MEK inhibitors
- Dabrafenib + trametinib
- Vemurafenib + cobimetinib
- Encorafenib + binimetinib

*Immunotherapy:*
- Anti-PD-1: Pembrolizumab, nivolumab
- Anti-CTLA-4: Ipilimumab
- Combinations: Nivolumab + ipilimumab
- Revolutionized metastatic melanoma survival

**Prevention and Early Detection:**
- Regular skin exams
- Sun protection behaviors
- High-risk patients may benefit from total body photography`,
      keyTerms: [
        { term: 'Breslow thickness', definition: 'How deep the melanoma grows into skin (mm); most important prognostic factor' },
        { term: 'sentinel lymph node', definition: 'First lymph node where cancer would spread; tested to check for spread' },
        { term: 'BRAF mutation', definition: 'Gene change found in ~50% of melanomas; can be targeted with specific drugs' },
        { term: 'PD-1', definition: 'Immune checkpoint; blocking it helps immune system attack cancer' },
        { term: 'ulceration', definition: 'Breakdown of skin surface over melanoma; worsens prognosis' },
      ],
      analogies: [
        'Breslow thickness is like measuring how deep roots grow - deeper means harder to remove completely.',
        'Immunotherapy "takes the brakes off" the immune system so it can attack cancer cells.',
      ],
    },
    3: {
      level: 3,
      summary: 'Melanoma management requires comprehensive staging, molecular profiling for targeted therapy, and integrated surgical and systemic approaches with adjuvant therapy for high-risk disease.',
      explanation: `**Molecular Pathogenesis:**

*Driver Mutations:*
- BRAF V600E/K: ~50% of cutaneous melanoma
- NRAS: ~20-25%
- NF1: ~15%
- KIT: Acral, mucosal, sun-damaged (5-15%)
- Triple wild-type: UV signature common

*Genomic Features:*
- High tumor mutational burden
- UV signature mutations (C>T transitions)
- Favorable for immunotherapy

**Pathologic Evaluation:**

*Essential Elements:*
- Breslow depth (tenths of mm)
- Ulceration status
- Mitotic rate (/mm²)
- Microsatellitosis
- Lymphovascular invasion
- Tumor-infiltrating lymphocytes (TILs)
- Regression
- Margins

*Gene Expression Profiling:*
- DecisionDx-Melanoma (31-gene)
- Risk stratification for recurrence
- May influence surveillance intensity

**Surgical Management:**

*Wide Excision:*
- Based on Breslow thickness
- WLE can be done with or after SLNB
- Mohs surgery for lentigo maligna in select cases

*Sentinel Lymph Node Biopsy:*
- MSLT-I: Staging benefit, therapeutic benefit debated
- DeCOG-SLT, MSLT-II: CLND doesn't improve survival
- Now surveillance instead of completion dissection for SLN+

*Completion Lymph Node Dissection:*
- No longer routine for positive SLNB
- Consider for clinically apparent nodal disease
- Ultrasound surveillance preferred

**Adjuvant Therapy:**

*High-Risk (Stage III/IV resected):*
- Anti-PD-1 (pembrolizumab or nivolumab): Standard
  - KEYNOTE-054, CheckMate 238
  - RFS benefit, OS emerging
- BRAF+ disease: Targeted therapy option
  - Dabrafenib + trametinib (COMBI-AD)
  - Both approaches effective

*Stage II High-Risk:*
- KEYNOTE-716: Pembrolizumab for stage IIB/C
- FDA approved, reduces recurrence
- Balancing risk reduction vs toxicity

**Metastatic Disease:**

*Treatment Selection:*

*BRAF Wild-Type:*
- First-line: Anti-PD-1 +/- ipilimumab
- Nivolumab + ipilimumab: Highest response rates
- Toxicity consideration for combination

*BRAF Mutant:*
- Can use immunotherapy or targeted therapy
- Combination immunotherapy often preferred first
- Targeted therapy for rapid response needed
- Sequencing remains debated

*Brain Metastases:*
- Common in melanoma (~50%)
- Combination immunotherapy active (CheckMate 204)
- Targeted therapy for BRAF+
- SRS, surgery for symptomatic/limited

*Mucosal/Acral Melanoma:*
- Lower response to immunotherapy
- KIT mutations may predict imatinib response
- Often more aggressive biology`,
      keyTerms: [
        { term: 'DecisionDx-Melanoma', definition: '31-gene expression profile predicting melanoma recurrence risk' },
        { term: 'MSLT-II', definition: 'Trial showing observation as safe as completion dissection after positive SLNB' },
        { term: 'COMBI-AD', definition: 'Trial demonstrating adjuvant dabrafenib + trametinib benefit in BRAF+ melanoma' },
        { term: 'tumor mutational burden', definition: 'Number of mutations in tumor; high TMB predicts immunotherapy response' },
        { term: 'UV signature', definition: 'Pattern of DNA mutations characteristic of ultraviolet radiation damage' },
      ],
      clinicalNotes: 'BRAF testing required for all stage III/IV melanoma. Adjuvant therapy now standard for high-risk resected disease. SLNB patients typically undergo surveillance rather than completion dissection.',
    },
    4: {
      level: 4,
      summary: 'Advanced melanoma management requires sophisticated treatment sequencing, understanding of resistance mechanisms, and integration of novel combination strategies and neoadjuvant approaches.',
      explanation: `**Treatment Sequencing:**

*BRAF-Mutant Metastatic:*
- DREAMseq trial: Immunotherapy first superior
- Nivo + ipi → BRAF/MEK better OS than reverse
- Rapid progression: Consider targeted first
- CNS disease: Both options active

*Optimal Combinations:*
- Nivolumab + ipilimumab: ~58% ORR, ~52% 5-year OS
- Significant toxicity (Grade 3-4 ~60%)
- Nivolumab + relatlimab (LAG-3): Better tolerability
- Pembrolizumab + lenvatinib under investigation

**Resistance Mechanisms:**

*Immunotherapy Resistance:*
- Primary: Low TMB, poor antigen presentation
- Acquired: JAK1/2 mutations, beta-2 microglobulin loss
- WNT/beta-catenin pathway activation
- TGF-beta signaling

*Targeted Therapy Resistance:*
- MAPK reactivation (MEK mutations, BRAF amplification)
- PI3K/AKT pathway activation
- Phenotype switching (EMT, neural crest)
- Usually develops within 12-18 months

**Neoadjuvant Therapy:**

*Emerging Standard for Resectable Stage III:*
- SWOG S1801: Pembro neoadjuvant + adjuvant vs adjuvant alone
  - EFS significantly improved with neoadjuvant
- NADINA trial: Nivo + ipi neoadjuvant ongoing
- Pathologic response predictive of outcome

*Benefits:*
- In vivo response assessment
- Potential for less extensive surgery
- Immune priming benefit

**Special Populations:**

*Uveal Melanoma:*
- Distinct biology (GNAQ/GNA11 mutations)
- Poor response to immunotherapy
- Tebentafusp (bispecific) for HLA-A*02:01+ patients
  - OS benefit in metastatic disease
- Liver-directed therapy for hepatic metastases

*Mucosal Melanoma:*
- Lower TMB, lower immunotherapy response
- KIT mutations (~15-20%): Imatinib, other KIT inhibitors
- Often combined modality treatment

*Desmoplastic Melanoma:*
- High TMB, UV signature
- Excellent immunotherapy responses
- Often occurs in sun-damaged skin

**Brain Metastases:**

*Management:*
- Combination immunotherapy active (CheckMate 204, ABC trial)
- SRS for limited disease
- WBRT reserved for extensive disease
- Targeted therapy for BRAF+, rapid effect

*Leptomeningeal Disease:*
- Very poor prognosis
- Intrathecal therapy investigational
- Systemic immunotherapy attempts

**Adjuvant/Neoadjuvant Evolution:**

*Current Adjuvant Options:*
- Pembrolizumab (KEYNOTE-054, -716)
- Nivolumab (CheckMate 238)
- Dabrafenib + trametinib (COMBI-AD) for BRAF+
- Duration typically 1 year

*ctDNA Monitoring:*
- Post-operative MRD detection
- Guiding adjuvant treatment decisions
- Surveillance for recurrence
- Trials ongoing

**Toxicity Management:**

*Immune-Related Adverse Events:*
- Colitis, hepatitis, pneumonitis
- Endocrinopathies (thyroid, adrenal, pituitary)
- Dermatologic toxicity
- Rare: Myocarditis, neurologic

*Management Principles:*
- Early recognition crucial
- Steroids for most irAEs
- May require additional immunosuppression
- Checkpoint inhibitor rechallenge possible in select cases`,
      keyTerms: [
        { term: 'DREAMseq', definition: 'Trial showing immunotherapy-first sequencing superior to targeted therapy-first in BRAF+ melanoma' },
        { term: 'relatlimab', definition: 'LAG-3 inhibitor used in combination with nivolumab' },
        { term: 'tebentafusp', definition: 'Bispecific gp100-CD3 protein for uveal melanoma treatment' },
        { term: 'pathologic response', definition: 'Degree of tumor cell death after neoadjuvant therapy' },
        { term: 'irAEs', definition: 'Immune-related adverse events; side effects from checkpoint inhibitors' },
      ],
      clinicalNotes: 'Neoadjuvant immunotherapy emerging as preferred approach for resectable stage III. Uveal melanoma requires distinct management (tebentafusp for HLA-A*02:01+). irAE management expertise essential for melanoma treatment.',
    },
    5: {
      level: 5,
      summary: 'Melanoma treatment continues to evolve with triplet therapy combinations, novel immunotherapy targets, personalized approaches, and integration of biomarkers for precision therapy and monitoring.',
      explanation: `**Novel Combination Strategies:**

*Triplet Therapy (BRAF+):*
- BRAF + MEK + anti-PD-1
- IMspire150: Atezolizumab + vem/cobi - PFS benefit
- COMBI-i: Spartalizumab + dab/tram - negative
- Toxicity management challenging
- Sequencing vs combination debate continues

*Beyond PD-1/CTLA-4:*
- LAG-3: Relatlimab + nivolumab (RELATIVITY-047)
  - Improved PFS, better tolerability than nivo/ipi
- TIM-3 inhibitors in trials
- TIGIT inhibitors under investigation
- CD73/adenosine pathway targeting

*Intratumoral Therapies:*
- Talimogene laherparepvec (T-VEC)
- Oncolytic virus combinations with checkpoint inhibitors
- TLR9 agonists (tilsotolimod)
- Novel intratumoral agents

**Cellular Therapies:**

*TIL Therapy:*
- Lifileucel (Amtagvi): FDA approved for ICI-refractory
- C-144-01 trial: ORR ~31% in heavily pretreated
- Manufacturing challenges
- Combination with checkpoint inhibitors

*CAR-T and TCR:*
- TCR-T targeting MAGE-A4, NY-ESO-1
- CAR-T development ongoing
- Solid tumor challenges

**Biomarker Evolution:**

*Predictive Markers:*
- PD-L1 less predictive than in other tumors
- TMB correlates with response
- Gene expression signatures (IFN-gamma, T-cell inflammation)
- Microbiome composition associations

*Monitoring:*
- ctDNA for MRD detection
- Treatment response monitoring
- Resistance prediction
- Recurrence detection

*Resistance Biomarkers:*
- JAK1/2 mutations
- B2M loss
- STK11 in some contexts
- Tumor microenvironment characterization

**Special Situations:**

*Pregnancy:*
- Checkpoint inhibitors generally avoided
- Case-by-case decisions
- Targeted therapy relatively contraindicated

*Autoimmune Disease:*
- Not absolute contraindication
- Baseline flare risk
- Close monitoring required
- May still benefit from immunotherapy

*Organ Transplant:*
- High rejection risk with checkpoint inhibitors
- Consider targeted therapy for BRAF+
- Shared decision-making

**Prevention and Screening Advances:**

*High-Risk Surveillance:*
- Total body photography
- AI-assisted dermoscopy
- Gene panel testing for familial risk
- Chemoprevention research (nicotinamide)

*Vaccine Research:*
- Personalized neoantigen vaccines
- mRNA vaccine platforms
- Combination with checkpoint inhibitors
- Early-stage trials showing promise

**Clinical Trial Frontiers:**

*Key Areas:*
- Neoadjuvant optimization (NADINA)
- Novel checkpoint combinations
- Cellular therapies expansion
- ctDNA-guided treatment
- Overcoming acquired resistance

*Adaptive Platform Trials:*
- Multiple arms testing combinations
- Biomarker-driven enrollment
- Rapid signal detection

**Quality of Life and Survivorship:**

*Long-term Toxicity:*
- Endocrinopathies may be permanent
- Vitiligo (favorable prognostic sign)
- Neurologic sequelae monitoring
- Cardiac surveillance

*Late Effects Monitoring:*
- Second primary melanomas (5-10% risk)
- Other skin cancers
- Long-term irAE management
- Psychosocial support

*Survivorship Care:*
- Sun protection education
- Skin surveillance protocols
- Family counseling and testing
- Return to normal activities`,
      keyTerms: [
        { term: 'TIL therapy', definition: 'Tumor-infiltrating lymphocyte therapy; adoptive cell therapy using patient tumor-derived immune cells' },
        { term: 'T-VEC', definition: 'Talimogene laherparepvec; oncolytic virus injected directly into tumors' },
        { term: 'lifileucel', definition: 'FDA-approved TIL therapy for melanoma after checkpoint inhibitor failure' },
        { term: 'personalized neoantigen vaccine', definition: 'Custom vaccine targeting patient-specific tumor mutations' },
        { term: 'vitiligo', definition: 'Skin depigmentation during immunotherapy; associated with better response' },
      ],
      clinicalNotes: 'Melanoma treatment continues rapid evolution. TIL therapy now FDA-approved for ICI-refractory disease. Neoadjuvant approaches becoming standard for resectable stage III. ctDNA monitoring increasingly integrated. Long-term survivorship care essential given improving outcomes.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['integumentary', 'skin'],
    topics: ['oncology', 'melanoma', 'immunotherapy', 'targeted therapy'],
    keywords: ['BRAF', 'PD-1', 'CTLA-4', 'skin cancer', 'mole', 'sun exposure'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
