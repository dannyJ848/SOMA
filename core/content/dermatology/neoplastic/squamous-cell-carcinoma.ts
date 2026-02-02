/**
 * Squamous Cell Carcinoma (In-Depth)
 *
 * Second most common skin cancer: actinic keratosis precursor, high-risk
 * features, TP53 mutations, cemiplimab immunotherapy, and Mohs indications.
 */

import { EducationalContent } from '../../types';

export const squamousCellCarcinomaContent: EducationalContent = {
  id: 'derm-neoplastic-scc',
  type: 'condition',
  name: 'Squamous Cell Carcinoma',
  nameEs: 'Carcinoma Epidermoide',
  alternateNames: ['SCC', 'Cutaneous SCC', 'Squamous Cell Carcinoma of the Skin', 'cSCC'],

  levels: {
    1: {
      level: 1,
      summary: 'Squamous cell carcinoma (SCC) is the second most common skin cancer. It appears as a firm red bump or scaly patch and can sometimes spread if not treated.',
      explanation: `## What Is SCC?\n\nSCC develops from the squamous cells that make up the outer layers of skin. It is usually caused by years of sun exposure.\n\n## What Does It Look Like?\n- A firm, red bump that may bleed\n- A rough, scaly patch that crusts over\n- A sore that does not heal\n- Usually on sun-exposed areas: face, ears, hands, arms\n\n## Risk Factors\n- Prolonged sun exposure\n- Fair skin\n- Older age\n- Weakened immune system\n- Previous rough scaly patches (actinic keratoses)\n\n## Treatment\n- Surgery to remove the cancer\n- Special surgery (Mohs) for the face\n- Radiation if surgery is not possible`,
      keyTerms: [
        { term: 'Squamous cell carcinoma', definition: 'A skin cancer that can sometimes spread if not treated early' },
        { term: 'Actinic keratosis', definition: 'A rough, scaly precancer patch caused by sun damage' },
      ],
      analogies: ['Actinic keratoses are like warning lights on a dashboard; they tell you the skin has sun damage that could become cancer.'],
      examples: ['A farmer has a rough, scaly bump on his ear that bleeds when bumped'],
      patientCounselingPoints: ['SCC is usually curable when caught early.', 'Treat precancer patches (actinic keratoses) to prevent SCC.', 'Use sunscreen and wear hats.', 'Get regular skin checks, especially if immunosuppressed.'],
    },
    2: {
      level: 2,
      summary: 'SCC arises from UV-damaged keratinocytes, often through the actinic keratosis -> SCC in situ (Bowen disease) -> invasive SCC continuum. Risk factors include UV, immunosuppression, and HPV.',
      explanation: `## Precursor Lesions\n- **Actinic keratosis (AK)**: rough scaly patches on sun-exposed skin\n  - ~1-10% risk of progressing to SCC over 10 years per lesion\n  - Field cancerization: large area of UV damage\n- **SCC in situ (Bowen disease)**: full-thickness epidermal dysplasia, well-demarcated red scaly plaque\n\n## Clinical Features\n- Firm, indurated papule or nodule, often keratotic or ulcerated\n- May arise in actinic keratosis, scar, chronic wound, or burn\n- Keratoacanthoma: dome-shaped nodule with central keratin plug; may regress spontaneously\n\n## Risk Factors for Metastasis (2-5% overall)\n- Size >2 cm\n- Depth beyond subcutaneous fat\n- Perineural invasion\n- Poorly differentiated histology\n- Immunosuppression (transplant recipients: 65-250x risk)\n- Location: ear, lip\n\n## Treatment\n- Standard excision with 4-6 mm margins\n- Mohs surgery: high-risk location, recurrent, aggressive features\n- Radiation: non-surgical candidates\n- AK treatment: cryotherapy, topical 5-FU, imiquimod, PDT, diclofenac gel`,
      keyTerms: [
        { term: 'Bowen disease', definition: 'SCC in situ (full-thickness epidermal dysplasia) not yet invading the dermis' },
        { term: 'Field cancerization', definition: 'Large area of sun-damaged skin with multiple precancerous changes' },
        { term: 'Keratoacanthoma', definition: 'Dome-shaped nodule with central keratin plug; may be a variant of well-differentiated SCC' },
        { term: 'Perineural invasion', definition: 'Cancer growing along nerves, a high-risk feature requiring aggressive treatment' },
      ],
      analogies: ['The AK -> Bowen -> invasive SCC pathway is like a slow escalator from precancer to cancer.'],
      examples: ['A transplant recipient develops multiple SCCs on the hands; referred for Mohs surgery and close surveillance'],
      clinicalNotes: 'Transplant recipients need skin exams every 3-6 months. Consider acitretin chemoprevention for transplant patients with multiple SCCs.',
    },
    3: {
      level: 3,
      summary: 'SCC molecular pathogenesis centers on TP53 and NOTCH mutations with UV-signature C->T transitions. NCCN risk stratification guides treatment intensity. Cemiplimab has transformed advanced SCC management.',
      explanation: `## Molecular Pathogenesis\n- TP53 mutations: most common (~50-90%); loss of cell cycle checkpoint\n- NOTCH1/NOTCH2: tumor suppressor loss (~75%)\n- CDKN2A (p16): cell cycle dysregulation\n- RAS pathway activation (HRAS)\n- UV signature: C->T and CC->TT transitions at dipyrimidine sites\n- High tumor mutational burden (TMB): >50 mutations/Mb (highest of solid tumors)\n\n## NCCN Risk Stratification\n**High-risk features:**\n- Location: face H-zone, ear, lip, temple\n- Size >=2 cm (>=1 cm on high-risk location)\n- Poorly differentiated or desmoplastic histology\n- Perineural invasion (named nerve)\n- Depth beyond subcutaneous fat\n- Immunosuppression\n- Recurrent tumor\n\n## Staging (AJCC 8th Edition)\n- T1: <=2 cm; T2: >2-4 cm; T3: >4 cm or minor bone erosion, perineural invasion, deep invasion\n- T4a: gross cortical bone invasion; T4b: skull base, axial skeleton\n- N staging: lymph node size, number, extranodal extension\n\n## Cemiplimab (Anti-PD-1)\n- Locally advanced or metastatic cSCC\n- ORR ~47% (EMPOWER-CSCC-1); CR ~20%\n- High TMB makes SCC immunogenic\n- Neoadjuvant: high pathologic response rates in resectable SCC\n\n## Sentinel Lymph Node Biopsy\n- Not routinely performed (unlike melanoma)\n- Consider for very high-risk SCC (>T2b, desmoplastic, PNI of named nerve)\n- Data less robust than melanoma SLNB`,
      keyTerms: [
        { term: 'UV signature mutations', definition: 'C->T and CC->TT transitions characteristic of ultraviolet DNA damage' },
        { term: 'Tumor mutational burden', definition: 'Number of mutations per megabase; SCC has one of the highest TMBs, explaining immunotherapy response' },
        { term: 'Cemiplimab', definition: 'Anti-PD-1 antibody approved for advanced cutaneous SCC with ~47% response rate' },
        { term: 'Desmoplastic SCC', definition: 'Aggressive histologic subtype with dense fibrous stroma and high recurrence risk' },
      ],
      analogies: ['SCC\'s high mutational burden is like having many "wanted posters" for the immune system to recognize, explaining why immunotherapy works so well.'],
      examples: ['A patient with locally advanced SCC on the forehead, not amenable to surgery, achieves complete response with cemiplimab'],
      clinicalNotes: 'SCC has among the highest TMB of any cancer, rationalizing checkpoint inhibitor efficacy. Consider neoadjuvant cemiplimab for borderline resectable tumors to facilitate less morbid surgery.',
    },
    4: {
      level: 4,
      summary: 'Advanced SCC topics include the immunosuppression-SCC link (transplant dermatology), chemoprevention (acitretin, nicotinamide), high-risk SCC multidisciplinary management, and radiation oncology approaches.',
      explanation: `## Transplant-Associated SCC\n- 65-250x increased risk vs general population\n- SCC:BCC ratio inverted (SCC more common in transplant patients)\n- More aggressive: higher recurrence and metastasis rates\n- Pathogenesis: impaired immune surveillance + HPV co-carcinogenesis + UV\n- HPV types 5, 8 (beta-HPV): potentiate UV carcinogenesis\n\n## Chemoprevention\n- Acitretin (systemic retinoid): reduces new SCC incidence by ~50% in transplant patients\n  - Mechanism: promotes keratinocyte differentiation, reduces proliferation\n  - Side effects: teratogenicity, hyperlipidemia, hepatotoxicity\n- Nicotinamide (vitamin B3) 500 mg BID: reduces new NMSC by 23% (ONTRAC trial)\n  - Enhances cellular ATP for DNA repair\n  - Well tolerated, inexpensive\n- Capecitabine: case series in high-risk transplant patients\n\n## Multidisciplinary Management of High-Risk SCC\n- Mohs surgery + adjuvant radiation for perineural invasion of named nerves\n- Multidisciplinary tumor board for advanced disease\n- Imaging: MRI for perineural invasion, CT/PET for staging\n- Radiation therapy: definitive (non-surgical candidates) or adjuvant\n\n## Radiation Approaches\n- External beam radiation therapy (EBRT)\n- Superficial radiation therapy (SRT): office-based, for elderly/non-surgical\n- Brachytherapy: custom molds for skin surface\n- Electron beam: controlled depth penetration\n\n## HPV-Related SCC\n- Genital/perianal SCC: high-risk HPV types 16, 18\n- Verrucous carcinoma: low-grade SCC variant\n- HPV vaccination reduces risk\n- Distinct from UV-driven cutaneous SCC`,
      keyTerms: [
        { term: 'Acitretin', definition: 'Systemic retinoid for SCC chemoprevention in transplant patients; reduces new SCC by ~50%' },
        { term: 'Nicotinamide', definition: 'Vitamin B3 supplement reducing new NMSC by 23% via enhanced DNA repair (ONTRAC trial)' },
        { term: 'Beta-HPV', definition: 'HPV types 5/8 that synergize with UV to promote SCC in immunosuppressed patients' },
        { term: 'Verrucous carcinoma', definition: 'Low-grade SCC variant with verrucous (wart-like) morphology, associated with HPV' },
      ],
      analogies: ['Nicotinamide is like giving skin cells extra fuel (ATP) to repair their DNA after UV damage.'],
      examples: ['A kidney transplant patient with 8 SCCs in 2 years is started on acitretin chemoprevention and nicotinamide'],
      clinicalNotes: 'Every transplant patient should have annual dermatology screening; high-risk patients every 3-6 months. Immunosuppression reduction should be discussed with the transplant team for life-threatening SCC.',
    },
    5: {
      level: 5,
      summary: 'Frontier SCC research includes neoadjuvant immunotherapy, combination cemiplimab + radiation, tumor microenvironment profiling, novel agents (cosibelimab), and precision biomarkers for immunotherapy response prediction.',
      explanation: `## Neoadjuvant Immunotherapy\n- Neoadjuvant cemiplimab: ~70% pathologic response rate in resectable SCC (phase 2)\n- Allows organ-sparing surgery (e.g., smaller excision on face)\n- pCR patients may need less extensive reconstruction\n- Ongoing trials: optimal duration, combination with radiation\n\n## Novel Agents\n- Cosibelimab (anti-PD-L1): approved for metastatic/locally advanced cSCC\n- Pembrolizumab (KEYNOTE-629): ORR ~34% in recurrent/metastatic cSCC\n- Retifanlimab: anti-PD-1 for Merkel cell carcinoma (SCC-related neuroendocrine)\n- EGFR inhibitors (cetuximab): modest activity, used when ICI contraindicated\n\n## Biomarkers for ICI Response\n- TMB: correlates with response (SCC has high TMB)\n- PD-L1 expression: less predictive in cSCC than other cancers\n- CD8+ T-cell density at tumor margin: predictive of response\n- Interferon-gamma gene signature\n- cSCC in immunosuppressed: lower ICI response + risk of graft rejection\n\n## Tumor Microenvironment\n- Single-cell RNA-seq revealing immune-hot vs immune-cold SCC\n- Regulatory T-cell infiltration associated with worse outcomes\n- Tertiary lymphoid structures: associated with ICI response\n- Tumor-associated macrophage polarization (M1 vs M2)\n\n## Liquid Biopsy\n- ctDNA detection for advanced SCC monitoring\n- HPV ctDNA for HPV-related SCC\n- Potential MRD detection post-surgery\n\n## Immunotherapy in Transplant Patients\n- ICI use carries 30-40% risk of allograft rejection\n- Strategies: lower ICI doses, mTOR-based immunosuppression switch\n- Shared decision-making between oncology and transplant teams\n- Life-threatening SCC may justify rejection risk`,
      keyTerms: [
        { term: 'Neoadjuvant cemiplimab', definition: 'Pre-surgical immunotherapy achieving ~70% pathologic response in resectable SCC' },
        { term: 'Cosibelimab', definition: 'Anti-PD-L1 antibody approved for advanced cutaneous SCC' },
        { term: 'Tertiary lymphoid structures', definition: 'Organized immune aggregates in tumor tissue associated with immunotherapy response' },
        { term: 'Allograft rejection', definition: 'Risk of organ rejection when using checkpoint inhibitors in transplant recipients (30-40%)' },
      ],
      analogies: ['Neoadjuvant immunotherapy is like softening a wall before demolition: it shrinks the tumor so surgery can be less destructive.'],
      examples: ['A patient with a large SCC near the eye receives neoadjuvant cemiplimab, achieves pathologic complete response, and undergoes minimal surgery preserving the eyelid'],
      clinicalNotes: 'Neoadjuvant immunotherapy for SCC is a paradigm shift enabling organ-sparing surgery. ICI in transplant patients requires careful multidisciplinary weighing of SCC mortality vs graft rejection risk. ctDNA monitoring may enable real-time response assessment.',
    },
  },

  media: [],
  citations: [
    { id: 'scc-ref-1', type: 'article', title: 'Cemiplimab for advanced cutaneous SCC (EMPOWER-CSCC-1)', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1811850' },
    { id: 'scc-ref-2', type: 'article', title: 'Nicotinamide for skin cancer prevention (ONTRAC)', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1506197' },
  ],
  crossReferences: [
    { targetId: 'derm-neoplastic-melanoma', targetType: 'condition', relationship: 'sibling', label: 'Melanoma' },
    { targetId: 'derm-neoplastic-bcc', targetType: 'condition', relationship: 'sibling', label: 'Basal Cell Carcinoma' },
    { targetId: 'derm-procedures-cryotherapy', targetType: 'topic', relationship: 'related', label: 'Cryotherapy' },
  ],
  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'oncology', 'SCC', 'immunotherapy', 'transplant-dermatology'],
    keywords: ['squamous cell carcinoma', 'actinic keratosis', 'cemiplimab', 'TP53', 'Mohs surgery', 'transplant', 'chemoprevention'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'surgery', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
