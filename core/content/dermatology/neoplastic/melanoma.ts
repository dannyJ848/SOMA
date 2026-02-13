/**
 * Melanoma (In-Depth)
 *
 * ABCDE criteria, Breslow staging, BRAF/NRAS molecular subtypes,
 * immunotherapy revolution, and emerging TIL/neoantigen vaccine approaches.
 */

import { EducationalContent } from '../../types';

export const melanomaContent: EducationalContent = {
  id: 'derm-neoplastic-melanoma',
  type: 'condition',
  name: 'Melanoma',
  nameEs: 'Melanoma',
  alternateNames: ['Malignant Melanoma', 'Cutaneous Melanoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Melanoma is the most dangerous type of skin cancer. It develops from the cells that give skin its color and can spread to other parts of the body if not caught early.',
      explanation: `## What Is Melanoma?\n\nMelanoma is a cancer of the pigment-producing cells (melanocytes) in the skin. It is less common than other skin cancers but far more dangerous because it can spread.\n\n## How to Spot It: ABCDE Rule\n- **A**symmetry: one half does not match the other\n- **B**order: edges are ragged or blurred\n- **C**olor: multiple shades of brown, black, red, or white\n- **D**iameter: larger than a pencil eraser (6 mm)\n- **E**volving: changing in size, shape, or color\n\n## Risk Factors\n- Sun exposure and sunburns\n- Fair skin, light hair, blue eyes\n- Many moles\n- Family history\n\n## Prevention\n- Wear sunscreen SPF 30+ daily\n- Avoid tanning beds\n- Check your skin monthly\n- Annual skin exam with a dermatologist`,
      keyTerms: [
        { term: 'Melanoma', definition: 'A dangerous skin cancer that can spread to other organs' },
        { term: 'ABCDE rule', definition: 'A checklist to spot suspicious moles' },
        { term: 'Melanocyte', definition: 'The cell that makes the pigment giving skin its color' },
      ],
      analogies: ['Melanoma is like a fire that can spread quickly; catching it early means putting it out before it reaches other rooms.'],
      examples: ['A woman notices a mole on her back that has become darker and larger over the past year'],
      patientCounselingPoints: ['Check your skin monthly.', 'Any changing mole should be seen by a doctor promptly.', 'Sunscreen every day, even on cloudy days.'],
    },
    2: {
      level: 2,
      summary: 'Melanoma subtypes include superficial spreading, nodular, lentigo maligna, and acral lentiginous. Breslow thickness is the most important prognostic factor. Excisional biopsy is the diagnostic standard.',
      explanation: `## Clinical Subtypes\n- Superficial spreading (~70%): radial growth phase, most common\n- Nodular (~15%): vertical growth from onset, worst prognosis per size\n- Lentigo maligna: sun-damaged skin, elderly, slow radial growth\n- Acral lentiginous: palms, soles, nail beds; most common in darker skin\n- Amelanotic: lacks pigment, easily missed\n\n## Breslow Thickness (Most Important Prognostic Factor)\n- <1 mm: >95% 5-year survival\n- 1-2 mm: ~80-90%\n- 2-4 mm: ~65-75%\n- >4 mm: ~50%\n\n## Ugly Duckling Sign\n- A mole that looks different from all surrounding moles\n- May be more important than ABCDE in some patients\n\n## Diagnosis\n- Excisional biopsy with 1-3 mm margins (do NOT shave suspected melanoma)\n- Dermoscopy improves sensitivity from ~70% to ~90%\n\n## Surgical Margins (by Breslow)\n- In situ: 5 mm\n- <=1 mm: 1 cm\n- 1.01-2 mm: 1-2 cm\n- >2 mm: 2 cm`,
      keyTerms: [
        { term: 'Breslow thickness', definition: 'Depth of melanoma from skin surface to deepest tumor cell; most important prognostic factor' },
        { term: 'Acral lentiginous', definition: 'Melanoma subtype on palms, soles, and nail beds; most common in darker skin' },
        { term: 'Dermoscopy', definition: 'Magnified skin examination with polarized light improving melanoma detection' },
        { term: 'Ugly duckling sign', definition: 'A mole that stands out as different from the patient\'s other moles' },
      ],
      analogies: ['Breslow depth is like measuring how deep a tree root goes; the deeper, the harder to remove and the more likely it has spread.'],
      examples: ['An excisional biopsy of a 1.3 mm melanoma on the back is followed by wide local excision with 1-2 cm margins and sentinel lymph node biopsy'],
      clinicalNotes: 'Never shave-biopsy a suspected melanoma; excisional biopsy preserves Breslow depth measurement. Sentinel lymph node biopsy is recommended for T1b and above.',
    },
    3: {
      level: 3,
      summary: 'AJCC 8th edition melanoma staging incorporates Breslow depth, ulceration, sentinel lymph node status, and distant metastases. Molecular testing (BRAF, NRAS) guides systemic therapy selection.',
      explanation: `## AJCC 8th Edition Staging\n**T:** T1 <=1mm (a: <0.8mm no ulceration, b: <0.8mm ulcerated or 0.8-1mm); T2 >1-2mm; T3 >2-4mm; T4 >4mm\n**N:** N0 none; N1-3 based on node count and in-transit metastases\n**M:** M1a distant skin/LN; M1b lung; M1c other visceral; M1d CNS; LDH substaging\n\n## Sentinel Lymph Node Biopsy\n- Recommended for T1b and above\n- Most important staging procedure\n- Does not improve overall survival but identifies patients for adjuvant therapy\n\n## Molecular Subtypes\n- BRAF V600E/K (~40-50%): younger, intermittent sun\n- NRAS (~15-20%): older, chronic sun, thicker tumors\n- KIT (~10-15%): acral, mucosal, chronically sun-damaged\n- NF1 loss (~10-15%): older, UV-damaged\n- Triple wild-type\n\n## Dermoscopy Algorithms\n- 2-step algorithm: melanocytic? -> benign vs malignant\n- 7-point checklist: score >=3 -> biopsy\n- ABCD rule of dermoscopy (Stolz): >5.45 suspicious\n- Key malignant features: atypical pigment network, blue-white veil, irregular streaks`,
      keyTerms: [
        { term: 'AJCC 8th edition', definition: 'Current melanoma staging system incorporating depth, ulceration, nodes, and metastases' },
        { term: 'BRAF V600E', definition: 'Most common melanoma driver mutation, activating the MAPK pathway' },
        { term: 'Sentinel lymph node biopsy', definition: 'Procedure identifying the first draining node to stage melanoma' },
        { term: 'Blue-white veil', definition: 'Dermoscopic finding of blue-white structureless area highly suspicious for melanoma' },
      ],
      analogies: ['SLNB is like checking the first checkpoint a cancer cell would pass through on its journey to spread.'],
      examples: ['A BRAF V600E-mutant melanoma, Breslow 2.5 mm with ulceration (T3b), undergoes wide excision + SLNB; positive node upstages to stage III'],
      clinicalNotes: 'All invasive melanomas should be tested for BRAF. SLNB does not improve survival (MSLT-I) but is essential for staging and adjuvant therapy decisions.',
    },
    4: {
      level: 4,
      summary: 'Immunotherapy (anti-PD-1, anti-CTLA-4, combinations) and BRAF/MEK targeted therapy have revolutionized metastatic melanoma. Adjuvant and neoadjuvant approaches are now standard for resected stage III disease.',
      explanation: `## Immunotherapy\n**Anti-PD-1 monotherapy:**\n- Pembrolizumab or nivolumab; ORR ~35-45%; 5-year OS ~35-44%\n- Durable responses persist after discontinuation\n\n**Anti-CTLA-4:** ipilimumab; ORR ~15-20%; higher toxicity\n\n**Combination (nivo + ipi):**\n- ORR ~58%; 5-year OS ~52% (CheckMate 067)\n- Grade 3-4 irAEs ~55%\n\n**LAG-3 inhibition:**\n- Relatlimab + nivolumab (Opdualag): PFS 10.1 vs 4.6 mo; lower toxicity than nivo+ipi\n\n## Targeted Therapy (BRAF-Mutant)\n- BRAF + MEK inhibitor combinations: dabrafenib+trametinib, encorafenib+binimetinib\n- ORR ~65-70%; rapid response; median PFS ~12-15 months\n- Resistance: MAPK reactivation, PI3K pathway, phenotype switching\n\n## Adjuvant Therapy\n- Stage III (resected): pembrolizumab or nivolumab x 1 year\n- Stage IIB/IIC: adjuvant nivolumab or pembrolizumab\n- BRAF-mutant stage III: dabrafenib + trametinib\n\n## Neoadjuvant\n- SWOG S1801: neoadjuvant + adjuvant pembro > adjuvant alone\n- Pathologic complete response rates 25-60% with combination regimens\n\n## irAE Management\n- Dermatologic (rash, vitiligo): common, vitiligo = good prognostic sign\n- Colitis, hepatitis, pneumonitis, endocrinopathies\n- Myocarditis: rare (~1%) but 40% mortality\n- Mild: continue; moderate: hold ICI + steroids; severe: discontinue + high-dose steroids`,
      keyTerms: [
        { term: 'CheckMate 067', definition: 'Landmark trial demonstrating nivo+ipi combination superiority in advanced melanoma' },
        { term: 'Relatlimab', definition: 'Anti-LAG-3 antibody combined with nivolumab; lower-toxicity alternative to nivo+ipi' },
        { term: 'SWOG S1801', definition: 'Trial showing neoadjuvant + adjuvant pembrolizumab superior to adjuvant alone' },
        { term: 'irAE', definition: 'Immune-related adverse events from checkpoint inhibitors due to loss of self-tolerance' },
      ],
      analogies: ['PD-1/PD-L1 blockade removes the "do not attack" handshake between tumor and T cells, unleashing the immune system.'],
      examples: ['A BRAF V600E melanoma with bulky liver metastases starts dabrafenib+trametinib for rapid response, then transitions to immunotherapy for durability'],
      clinicalNotes: 'First-line choice: nivo+ipi or relatlimab+nivo for high-burden; anti-PD-1 monotherapy for lower burden. BRAF/MEK inhibitors are rapid but resistance develops; sequence with immunotherapy.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge melanoma therapeutics include TIL therapy (lifileucel), personalized mRNA neoantigen vaccines, bispecific T-cell engagers (tebentafusp), ctDNA-guided therapy, and next-generation combinations.',
      explanation: `## TIL Therapy\n- Lifileucel (Amtagvi): first FDA-approved TIL therapy (2024)\n- Harvest TILs from tumor -> expand ex vivo -> lymphodepletion -> infuse\n- ORR ~31% in anti-PD-1 refractory melanoma; durable CRs\n\n## Personalized Neoantigen Vaccines\n- mRNA-4157/V940 + pembrolizumab (KEYNOTE-942)\n- 44% reduction in recurrence/death vs pembro alone (adjuvant stage III/IV)\n- Tumor sequencing -> neoantigen prediction -> personalized mRNA encoding up to 34 neoantigens\n- Phase 3 ongoing\n\n## Bispecific T-Cell Engagers\n- Tebentafusp (gp100-CD3): first OS benefit in metastatic uveal melanoma (HLA-A*02:01+)\n- Bridges T cells to melanoma cells regardless of T-cell receptor specificity\n\n## Oncolytic Virotherapy\n- T-VEC: intralesional oncolytic HSV-1; GM-CSF expression; in situ vaccination effect\n- RP1 (vusolimogene oderparepvec): next-gen HSV with anti-CTLA-4 Fc\n\n## ctDNA and Liquid Biopsy\n- BRAF V600E ctDNA: correlates with tumor burden\n- Rising ctDNA predicts progression before imaging\n- MRD detection post-surgery may guide adjuvant decisions\n- ctDNA clearance on therapy: favorable prognostic marker\n\n## Next-Generation Combinations\n- TIGIT + PD-1 inhibition\n- STING agonists (intratumoral)\n- Fecal microbiota transplant to enhance ICI response\n- IL-2 variants (bempegaldesleukin failed but nemvaleukin ongoing)\n\n## AI in Melanoma\n- CNN-based dermoscopy: performance matches/exceeds dermatologists\n- Whole-slide digital pathology: Breslow measurement, mitotic count automation\n- Radiomics: predicting ICI response from baseline CT features`,
      keyTerms: [
        { term: 'Lifileucel', definition: 'First FDA-approved TIL therapy for anti-PD-1 refractory melanoma' },
        { term: 'mRNA neoantigen vaccine', definition: 'Personalized vaccine encoding patient-specific tumor mutations combined with pembrolizumab' },
        { term: 'Tebentafusp', definition: 'Bispecific gp100-CD3 molecule, first therapy improving OS in metastatic uveal melanoma' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA for real-time monitoring of melanoma burden and treatment response' },
      ],
      analogies: ['TIL therapy is like extracting the best soldiers already fighting inside the tumor, cloning millions more, and sending them back.'],
      examples: ['A patient refractory to anti-PD-1 and BRAF/MEK inhibitors receives lifileucel TIL therapy with durable complete response at 2 years'],
      clinicalNotes: 'The melanoma treatment landscape is evolving rapidly. mRNA neoantigen vaccines represent a paradigm shift toward truly personalized oncology. ctDNA-guided adjuvant decisions may replace one-size-fits-all staging-based approaches.',
    },
  },

  media: [],
  citations: [
    { id: 'mel-ref-1', type: 'article', title: 'Five-Year Outcomes CheckMate 067', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1910836' },
    { id: 'mel-ref-2', type: 'article', title: 'Neoadjuvant pembrolizumab in melanoma (SWOG S1801)', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa2211437' },
    { id: 'mel-ref-3', type: 'article', title: 'KEYNOTE-942: mRNA neoantigen vaccine + pembrolizumab', source: 'Lancet' },
  ],
  crossReferences: [
    { targetId: 'derm-neoplastic-bcc', targetType: 'condition', relationship: 'sibling', label: 'Basal Cell Carcinoma' },
    { targetId: 'derm-neoplastic-scc', targetType: 'condition', relationship: 'sibling', label: 'Squamous Cell Carcinoma' },
    { targetId: 'dermatology-skin-cancer-detailed', targetType: 'topic', relationship: 'parent', label: 'Skin Cancer (Comprehensive)' },
  ],
  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'oncology', 'melanoma', 'immunotherapy', 'dermoscopy'],
    keywords: ['melanoma', 'ABCDE', 'Breslow', 'BRAF', 'checkpoint inhibitors', 'TIL therapy', 'neoantigen vaccine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'surgery', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
