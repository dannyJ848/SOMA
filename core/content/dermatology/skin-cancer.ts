/**
 * Skin Cancer
 *
 * Comprehensive coverage of melanoma, basal cell carcinoma (BCC),
 * squamous cell carcinoma (SCC), the ABCDE rule, dermoscopy basics,
 * staging, and modern immunotherapy/surgical management.
 */

import { EducationalContent } from '../types';

export const skinCancerDetailedContent: EducationalContent = {
  id: 'dermatology-skin-cancer-detailed',
  type: 'topic',
  name: 'Skin Cancer',
  nameEs: 'Cancer de Piel',
  alternateNames: ['Cutaneous Malignancies', 'Skin Neoplasms', 'Dermatologic Oncology'],

  levels: {
    1: {
      level: 1,
      summary: 'Skin cancer is the most common type of cancer. The three main types are basal cell carcinoma, squamous cell carcinoma, and melanoma. Catching skin cancer early makes it much easier to treat.',
      explanation: `## What Is Skin Cancer?

Skin cancer happens when skin cells grow out of control. It is the most common cancer in the world. The good news is that most skin cancers can be cured when found early.

## Types of Skin Cancer

**Basal Cell Carcinoma (BCC):**
- Most common skin cancer
- Usually appears as a pearly, shiny bump or a sore that does not heal
- Grows slowly
- Almost never spreads to other parts of the body
- Usually caused by too much sun exposure

**Squamous Cell Carcinoma (SCC):**
- Second most common skin cancer
- Looks like a firm, red bump or a scaly patch
- Can grow faster than BCC
- Rarely can spread if not treated

**Melanoma:**
- Most dangerous type of skin cancer
- Can spread to other parts of the body if not caught early
- Usually appears as a new or changing mole
- Use the ABCDE rule to check your moles

## The ABCDE Rule for Melanoma

- **A**symmetry: One half does not match the other
- **B**order: Edges are ragged, blurred, or irregular
- **C**olor: Different shades of brown, black, red, white, or blue
- **D**iameter: Larger than a pencil eraser (6mm)
- **E**volving: The mole is changing in size, shape, or color

## How to Protect Yourself

- Wear sunscreen (SPF 30 or higher) every day
- Avoid tanning beds
- Wear protective clothing and hats
- Check your skin regularly for new or changing spots
- See a doctor if you notice anything unusual`,

      keyTerms: [
        { term: 'Basal cell carcinoma', definition: 'Most common and least dangerous type of skin cancer' },
        { term: 'Squamous cell carcinoma', definition: 'Second most common skin cancer that can sometimes spread' },
        { term: 'Melanoma', definition: 'Most dangerous type of skin cancer that can spread to other organs' },
        { term: 'ABCDE rule', definition: 'A way to check moles: Asymmetry, Border, Color, Diameter, Evolving' },
        { term: 'Mole', definition: 'A dark spot on the skin that is usually harmless but should be watched for changes' },
      ],
      analogies: [
        'BCC is like a weed that stays in one spot in the garden but keeps growing if you do not remove it.',
        'Melanoma is like a fire that can spread quickly, so you need to catch it early before it gets out of control.',
        'The ABCDE rule is like a checklist for suspicious moles, just like checking for warning lights on a car dashboard.',
      ],
      examples: [
        'A man notices a shiny bump on his nose that bleeds sometimes (BCC)',
        'A woman finds a mole on her arm that has changed color and gotten bigger (possible melanoma)',
        'A farmer has a rough, scaly patch on his ear that will not heal (SCC)',
      ],
      patientCounselingPoints: [
        'Check your skin once a month for new or changing moles.',
        'Apply sunscreen every day, even on cloudy days.',
        'Tell your doctor about any mole that looks different from the rest.',
        'Never use tanning beds.',
        'Annual skin checks by a dermatologist can catch problems early.',
      ],
    },

    2: {
      level: 2,
      summary: 'Skin cancers include basal cell carcinoma (most common, locally invasive), squamous cell carcinoma (can metastasize), and melanoma (highest mortality). Risk factors include UV exposure, fair skin, and immunosuppression. Diagnosis involves dermoscopy and biopsy.',
      explanation: `## Basal Cell Carcinoma (BCC)

**Epidemiology:**
- Most common cancer in humans (~80% of skin cancers)
- Risk factors: UV exposure, fair skin (Fitzpatrick I-II), age, immunosuppression
- Rarely metastasizes (<0.1%)
- Can be locally destructive if neglected

**Clinical Subtypes:**
- Nodular: pearly, translucent papule with telangiectasias, rolled borders
- Superficial: erythematous, scaly patch (trunk, can mimic eczema)
- Morpheaform/sclerosing: scar-like, white/yellow, aggressive, poorly defined margins
- Pigmented: contains melanin, may mimic melanoma

**Treatment:**
- Excision with 3-5mm margins
- Mohs micrographic surgery: for high-risk areas (face, ears, nose)
- Electrodessication and curettage (ED&C): superficial, low-risk BCC
- Topical: imiquimod, 5-fluorouracil (superficial BCC only)
- Hedgehog pathway inhibitors (vismodegib, sonidegib): advanced/metastatic

## Squamous Cell Carcinoma (SCC)

**Epidemiology:**
- Second most common skin cancer
- Higher metastatic potential than BCC (2-5%)
- Risk: chronic UV, fair skin, immunosuppression, HPV, chronic wounds

**Precursor Lesions:**
- Actinic keratosis (AK): rough, scaly patches on sun-exposed skin
  - ~1-10% risk of progression to SCC per lesion over 10 years
  - "Field cancerization": large area of UV-damaged skin
- SCC in situ (Bowen disease): full-thickness epidermal dysplasia

**Clinical Features:**
- Firm, indurated papule or nodule
- May be ulcerated, crusted, or keratotic
- High-risk features: >2cm, poorly differentiated, perineural invasion, immunosuppression

**Treatment:**
- Excision with 4-6mm margins (standard); wider for high-risk
- Mohs surgery for high-risk locations/tumors
- Radiation: alternative for non-surgical candidates
- Cemiplimab (anti-PD-1): advanced/metastatic SCC

## Melanoma

**Epidemiology:**
- ~5% of skin cancers but causes ~75% of skin cancer deaths
- Incidence rising worldwide
- Lifetime risk: ~1 in 38 (US)
- Risk factors: UV exposure, fair skin, many moles, family history, CDKN2A mutations

**Clinical Types:**
- Superficial spreading: most common (~70%), radial growth phase
- Nodular: vertical growth from the start, worst prognosis per size
- Lentigo maligna: sun-damaged skin, elderly, slow-growing
- Acral lentiginous: palms, soles, nail beds; most common in darker skin
- Amelanotic: lacks pigment, can be missed

**ABCDE Rule:**
- Asymmetry
- Border irregularity
- Color variation (>2 colors)
- Diameter >6mm
- Evolution (changing)

**"Ugly Duckling" Sign:**
- A mole that looks different from all the others
- May be the most important clinical clue

**Staging Basics (Breslow Depth):**
- Breslow thickness: most important prognostic factor
  - <1mm: >95% 5-year survival
  - 1-2mm: ~80-90% 5-year survival
  - 2-4mm: ~65-75% 5-year survival
  - >4mm: ~50% 5-year survival
- Ulceration: worsens prognosis at any thickness
- Mitotic rate: previously part of staging

**Dermoscopy Basics:**
- Non-invasive technique using polarized/non-polarized light
- Evaluates structures not visible to naked eye
- Key features suggesting melanoma:
  - Atypical pigment network
  - Blue-white veil
  - Irregular dots/globules
  - Irregular streaks (pseudopods, radial streaming)
  - Regression structures (white scar-like areas, blue-gray peppering)
- BCC dermoscopy: arborizing vessels, blue-gray ovoid nests, leaf-like areas`,

      keyTerms: [
        { term: 'Breslow depth', definition: 'Measurement of melanoma thickness from top of granular layer to deepest tumor cell; most important prognostic factor' },
        { term: 'Mohs surgery', definition: 'Micrographic surgery with complete margin assessment; highest cure rate for skin cancer' },
        { term: 'Actinic keratosis', definition: 'Precancerous rough, scaly patches on sun-exposed skin that can progress to SCC' },
        { term: 'Dermoscopy', definition: 'Non-invasive examination using magnification and light to evaluate pigmented lesions' },
        { term: 'Ugly duckling sign', definition: 'A mole that looks different from all surrounding moles, raising suspicion for melanoma' },
        { term: 'Hedgehog pathway', definition: 'Signaling pathway aberrantly activated in BCC; target of vismodegib and sonidegib' },
        { term: 'Field cancerization', definition: 'Large area of sun-damaged skin with multiple precancerous changes increasing cancer risk' },
      ],
      analogies: [
        'Breslow depth is like measuring how deep a tree root goes: the deeper it goes, the harder it is to remove completely.',
        'Mohs surgery is like peeling an onion layer by layer, checking each slice under a microscope until no cancer remains.',
        'The ugly duckling sign is like spotting the one person in a crowd who does not belong.',
        'Dermoscopy is like using a magnifying glass with special lighting to see hidden clues in a mole.',
      ],
      examples: [
        'A fair-skinned patient with a pearly nodule on the nose with visible telangiectasias (nodular BCC)',
        'A transplant patient develops a rapidly growing keratotic nodule on the hand (high-risk SCC)',
        'A patient with an asymmetric, multicolored 8mm mole on the back that has been growing (suspected melanoma)',
        'Dermoscopy of a pigmented lesion shows blue-white veil and atypical pigment network, prompting excisional biopsy',
      ],
      clinicalNotes: 'Any new or changing lesion in an adult should be biopsied if suspicious. Shave biopsy is appropriate for suspected BCC/SCC but NOT for suspected melanoma (need full-thickness excisional biopsy to assess Breslow depth). Immunosuppressed patients (transplant recipients, CLL) have dramatically increased skin cancer risk and need frequent skin surveillance. Actinic keratoses can be treated with cryotherapy, topical 5-FU, imiquimod, or photodynamic therapy.',
    },

    3: {
      level: 3,
      summary: 'Melanoma staging follows the AJCC 8th edition TNM system incorporating Breslow depth, ulceration, sentinel lymph node status, and distant metastases. Dermoscopy algorithms (2-step, ABCD rule of dermoscopy, 7-point checklist) systematize lesion evaluation. BCC pathogenesis involves Hedgehog pathway mutations.',
      explanation: `## Melanoma Staging (AJCC 8th Edition)

**T Classification (Primary Tumor):**
- T1: <= 1.0mm
  - T1a: <0.8mm without ulceration
  - T1b: <0.8mm with ulceration OR 0.8-1.0mm +/- ulceration
- T2: >1.0-2.0mm (a: no ulceration, b: ulceration)
- T3: >2.0-4.0mm (a: no ulceration, b: ulceration)
- T4: >4.0mm (a: no ulceration, b: ulceration)

**N Classification (Regional Lymph Nodes):**
- N0: no regional metastasis
- N1-N3: based on number of nodes and presence of in-transit/satellite/microsatellite metastases
- Sentinel lymph node biopsy (SLNB): recommended for T1b and above
  - Most important staging procedure after primary excision
  - Positive SLNB upstages disease significantly

**M Classification (Distant Metastasis):**
- M0: no distant metastasis
- M1a: distant skin, subcutaneous, or lymph node metastasis (normal LDH)
- M1b: lung metastasis
- M1c: other visceral metastasis
- M1d: CNS metastasis
- LDH level: elevated LDH worsens substage

**Surgical Margins by Breslow Depth:**
- In situ: 5mm margins
- <= 1.0mm: 1cm margins
- 1.01-2.0mm: 1-2cm margins
- >2.0mm: 2cm margins

## Dermoscopy Algorithms

**Two-Step Algorithm:**
1. Step 1: Is it a melanocytic lesion?
   - Look for: pigment network, aggregated globules, streaks, homogeneous blue pigment, parallel pattern (acral)
   - If non-melanocytic: assess for BCC, seborrheic keratosis, dermatofibroma, vascular lesion
2. Step 2: Is it benign or malignant?
   - Apply scoring algorithm (ABCD rule, 7-point checklist, or pattern analysis)

**ABCD Rule of Dermoscopy (Stolz):**
- Asymmetry (0-2 points x 1.3)
- Border (0-8 segments with abrupt cutoff x 0.1)
- Colors (1-6 colors x 0.5)
- Dermoscopic structures (1-5 structures x 0.5)
- Total: <4.75 benign, 4.75-5.45 suspicious, >5.45 malignant

**7-Point Checklist (Argenziano):**
- Major criteria (2 points each): atypical pigment network, blue-white veil, atypical vascular pattern
- Minor criteria (1 point each): irregular streaks, irregular dots/globules, regression structures, irregular blotches
- Score >= 3: biopsy recommended

**BCC Dermoscopy Criteria:**
- Absence of pigment network
- Arborizing (tree-like) telangiectasia
- Large blue-gray ovoid nests
- Leaf-like areas
- Spoke-wheel areas
- Ulceration
- Multiple blue-gray globules/dots
- Short fine telangiectasia (superficial BCC)

## BCC Molecular Pathogenesis

**Hedgehog (Hh) Pathway:**
- Normal: Patched (PTCH1) receptor inhibits Smoothened (SMO)
- When Hedgehog ligand binds PTCH1 -> SMO is released -> activates GLI transcription factors
- In BCC: loss-of-function mutations in PTCH1 (~70%) or gain-of-function in SMO (~10%)
  - Constitutive pathway activation without ligand
- GLI targets: cell proliferation genes (cyclin D, Myc)
- Gorlin syndrome (Basal Cell Nevus Syndrome): germline PTCH1 mutations
  - Multiple BCCs at young age, odontogenic keratocysts, skeletal anomalies, medulloblastoma risk

**Targeted Therapy:**
- Vismodegib (Erivedge): SMO inhibitor, first-in-class
- Sonidegib (Odomzo): SMO inhibitor
- Indications: locally advanced or metastatic BCC
- Side effects: muscle spasms, dysgeusia, alopecia, weight loss
- Resistance: SMO mutations (D473H), downstream GLI amplification

## SCC Molecular Features

**Key Mutations:**
- TP53: most common mutation (~50-90%)
- NOTCH1/NOTCH2: tumor suppressor loss
- CDKN2A (p16): cell cycle dysregulation
- RAS pathway activation
- UV signature mutations: C->T and CC->TT transitions

**High-Risk SCC Features (NCCN):**
- Size >= 2cm (>=1cm high-risk location)
- Poorly differentiated histology
- Perineural invasion
- Depth beyond subcutaneous fat
- Immunosuppression
- Recurrent tumor
- Desmoplastic subtype`,

      keyTerms: [
        { term: 'AJCC 8th edition', definition: 'Current melanoma staging system incorporating Breslow depth, ulceration, lymph node status, and distant metastases' },
        { term: 'Sentinel lymph node biopsy', definition: 'Procedure to identify the first draining lymph node; most important staging procedure for melanoma >T1a' },
        { term: 'PTCH1', definition: 'Patched 1, tumor suppressor gene in the Hedgehog pathway; loss-of-function mutations drive BCC' },
        { term: 'Smoothened (SMO)', definition: 'Transmembrane protein in Hedgehog pathway; target of vismodegib and sonidegib' },
        { term: 'Gorlin syndrome', definition: 'Germline PTCH1 mutation causing multiple BCCs, jaw cysts, and skeletal anomalies' },
        { term: 'Two-step algorithm', definition: 'Dermoscopy approach: first determine if melanocytic, then assess for malignancy' },
        { term: 'Blue-white veil', definition: 'Dermoscopic finding of blue-white structureless area strongly associated with melanoma' },
        { term: 'UV signature mutations', definition: 'C to T and CC to TT transitions characteristic of ultraviolet radiation-induced DNA damage' },
      ],
      analogies: [
        'PTCH1 is like a brake on the Hedgehog pathway; when the brake is broken (mutated), the car (cell proliferation) speeds out of control.',
        'Sentinel lymph node biopsy is like checking the first checkpoint a cancer cell would reach on its journey to spread.',
        'The 2-step dermoscopy algorithm is like first identifying the language (melanocytic vs. non-melanocytic) before reading the message (benign vs. malignant).',
      ],
      examples: [
        'A melanoma patient with Breslow depth 1.5mm, no ulceration (T2a) undergoes wide local excision with 1-2cm margins and sentinel lymph node biopsy',
        'A patient with Gorlin syndrome develops multiple BCCs on the trunk at age 20; genetic testing confirms PTCH1 mutation',
        'Dermoscopy of a pigmented lesion scores 6.2 on the ABCD rule of dermoscopy; excisional biopsy reveals melanoma in situ',
        'A high-risk SCC with perineural invasion is treated with Mohs surgery followed by adjuvant radiation',
      ],
      clinicalNotes: 'SLNB is recommended for melanoma >= T1b but does not improve overall survival (MSLT-I); it provides staging information and identifies patients for adjuvant therapy. Wide local excision margins are based on Breslow depth and supported by randomized trials. Gorlin syndrome patients should avoid radiation (can induce new BCCs in radiation field). Dermoscopy improves melanoma detection sensitivity from ~70% (naked eye) to ~90% in trained users.',
    },

    4: {
      level: 4,
      summary: 'Melanoma molecular subtypes (BRAF, NRAS, KIT, NF1) guide targeted therapy selection. Immunotherapy (anti-PD-1, anti-CTLA-4, combination) has revolutionized metastatic melanoma outcomes. Mohs micrographic surgery provides the highest cure rates for BCC and SCC through complete margin assessment. Understanding tumor immunology, immune checkpoints, and resistance mechanisms is essential.',
      explanation: `## Melanoma Molecular Subtypes

**BRAF Mutations:**
- Present in ~40-50% of cutaneous melanomas
- V600E: most common (~80% of BRAF mutations)
- V600K: second most common (~16%)
- More common in younger patients, intermittent sun exposure, superficial spreading
- Activates MAPK (RAS-RAF-MEK-ERK) pathway constitutively

**NRAS Mutations:**
- Present in ~15-20% of melanomas
- Activates both MAPK and PI3K/AKT pathways
- Associated with thicker tumors, older age, chronic sun damage
- Mutually exclusive with BRAF

**KIT Mutations/Amplifications:**
- Present in ~10-15% of acral, mucosal, and chronically sun-damaged melanomas
- Targetable with imatinib (limited efficacy)

**NF1 Loss-of-Function:**
- Present in ~10-15% of melanomas
- Activates RAS pathway (NF1 is a RAS-GAP)
- Associated with older age, heavily sun-damaged skin

**Triple Wild-Type:**
- No BRAF, NRAS, or NF1 mutations
- May have other driver mutations (GNAQ/GNA11 in uveal melanoma)

## Immunotherapy for Melanoma

**Immune Checkpoint Inhibitors:**

*Anti-PD-1 Monotherapy:*
- Pembrolizumab (Keytruda): 200mg IV every 3 weeks
- Nivolumab (Opdivo): 240mg IV every 2 weeks or 480mg every 4 weeks
- Objective response rate (ORR): ~35-45% in advanced melanoma
- 5-year overall survival: ~35-44%
- Durable responses: many last years even after discontinuation

*Anti-CTLA-4:*
- Ipilimumab (Yervoy): 3mg/kg IV every 3 weeks x 4 doses
- ORR: ~15-20% monotherapy
- Higher toxicity than anti-PD-1
- First checkpoint inhibitor to improve melanoma survival (2010)

*Combination (Nivo + Ipi):*
- ORR: ~58%; 5-year OS: ~52% (CheckMate 067)
- Highest efficacy but highest toxicity
- Grade 3-4 immune-related adverse events: ~55%
- Preferred for high-volume disease, brain metastases, BRAF wild-type

**Targeted Therapy (BRAF-Mutant Melanoma):**
- BRAF + MEK inhibitor combinations:
  - Dabrafenib + trametinib (DabTram)
  - Encorafenib + binimetinib (EncoBini)
  - Vemurafenib + cobimetinib
- ORR: ~65-70%; median PFS: ~12-15 months
- Rapid responses (useful for symptomatic disease)
- Resistance develops: MAPK reactivation, PI3K activation, phenotype switching

**Adjuvant Therapy:**
- Pembrolizumab or nivolumab: stage III (resected, node-positive)
- Dabrafenib + trametinib: stage III BRAF-mutant
- Adjuvant nivolumab: stage IIB/IIC (high-risk T3b/T4)

**Neoadjuvant Approaches:**
- Emerging data: neoadjuvant pembrolizumab + lenvatinib, nivo + ipi
- Pathologic complete response rates: 25-60% depending on regimen
- SWOG S1801: neoadjuvant + adjuvant pembro superior to adjuvant alone

## Mohs Micrographic Surgery

**Technique:**
- Sequential excision of thin tissue layers
- Each layer is mapped, processed, and examined microscopically
- 100% margin assessment (vs. ~1% in standard excision "bread-loaf" sectioning)
- Continue until margins are clear

**Indications:**
- High-risk locations: face (H-zone), ears, nose, periorbital, lips, genitalia
- Recurrent tumors
- Aggressive histologic subtypes (morpheaform BCC, desmoplastic SCC)
- Perineural invasion
- Large tumors or poorly defined margins
- Tissue conservation needed (eyelid, nose, ear, digits)

**Cure Rates:**
- Primary BCC: 99%
- Recurrent BCC: 94-95%
- Primary SCC: 97%
- Highest cure rate of any treatment modality

## Immune-Related Adverse Events (irAEs)

**Common irAEs:**
- Dermatologic (rash, pruritus, vitiligo): 30-40%
  - Vitiligo in melanoma patients: paradoxically associated with better prognosis
- Colitis/diarrhea: 10-20% (higher with ipi)
- Hepatitis: 5-15%
- Endocrinopathies: thyroiditis, hypophysitis, adrenal insufficiency
- Pneumonitis: 3-5%
- Rare: myocarditis (1-2%, but 40% mortality), neurotoxicity, nephritis

**Management:**
- Mild (Grade 1-2): continue ICI, topical/supportive therapy
- Moderate (Grade 2-3): hold ICI, systemic corticosteroids
- Severe (Grade 3-4): discontinue ICI, high-dose steroids, consider infliximab/mycophenolate
- Endocrinopathies: hormone replacement (may be permanent)`,

      keyTerms: [
        { term: 'BRAF V600E', definition: 'Most common melanoma driver mutation activating the MAPK pathway; targetable with BRAF/MEK inhibitors' },
        { term: 'PD-1', definition: 'Programmed Death-1 immune checkpoint receptor on T cells; blocked by pembrolizumab and nivolumab' },
        { term: 'CTLA-4', definition: 'Cytotoxic T-lymphocyte-associated protein 4; blocked by ipilimumab to enhance T cell activation' },
        { term: 'Mohs surgery', definition: 'Micrographic surgery with 100% margin assessment achieving the highest cure rate for skin cancers' },
        { term: 'irAE', definition: 'Immune-related adverse events from checkpoint inhibitors; caused by loss of immune self-tolerance' },
        { term: 'MAPK pathway', definition: 'RAS-RAF-MEK-ERK signaling cascade driving cell proliferation; constitutively active in BRAF-mutant melanoma' },
        { term: 'CheckMate 067', definition: 'Landmark trial demonstrating superiority of nivolumab + ipilimumab combination in advanced melanoma' },
        { term: 'Neoadjuvant immunotherapy', definition: 'Checkpoint inhibitor given before surgery to induce tumor shrinkage and immune priming' },
      ],
      analogies: [
        'BRAF V600E is like a stuck accelerator pedal in the cell: the growth signal is always "on."',
        'PD-1/PD-L1 is like a handshake between cancer and immune cells that says "do not attack me"; blocking it lets the immune system fight again.',
        'Mohs surgery is like erasing a drawing one layer at a time, checking each layer to make sure no marks remain.',
        'irAEs are friendly fire: the unleashed immune system attacks healthy organs along with the cancer.',
      ],
      examples: [
        'A BRAF V600E-mutant melanoma patient with extensive liver metastases is started on dabrafenib + trametinib for rapid response, then switched to immunotherapy',
        'A patient with resected stage IIIC melanoma receives adjuvant pembrolizumab for 1 year',
        'A BCC on the nose tip is referred for Mohs surgery to ensure clear margins with maximum tissue conservation',
        'A melanoma patient on nivolumab + ipilimumab develops grade 3 colitis; ICI held, IV methylprednisolone started',
      ],
      clinicalNotes: 'All metastatic melanomas should be tested for BRAF mutation status. BRAF/MEK inhibitors provide rapid responses (useful in high-burden disease) but resistance typically develops within 12-15 months. Immunotherapy responses are slower but more durable. Neoadjuvant immunotherapy is a paradigm shift, with SWOG S1801 showing event-free survival benefit for neoadjuvant + adjuvant pembrolizumab over adjuvant alone. Vitiligo developing during immunotherapy is a favorable prognostic sign. irAE management requires multidisciplinary collaboration.',
    },

    5: {
      level: 5,
      summary: 'State-of-the-art melanoma management includes LAG-3 inhibition (relatlimab), tumor-infiltrating lymphocyte (TIL) therapy (lifileucel), mRNA-based personalized neoantigen vaccines, intralesional oncolytic virotherapy (T-VEC), and novel combinations. Advanced dermoscopy incorporates AI-assisted diagnosis and reflectance confocal microscopy. Cemiplimab and pembrolizumab have transformed advanced SCC and BCC management.',
      explanation: `## Next-Generation Melanoma Immunotherapy

**LAG-3 Inhibition:**
- Relatlimab: anti-LAG-3 antibody
- Relatlimab + nivolumab (Opdualag): fixed-dose combination
- RELATIVITY-047: PFS 10.1 months (combo) vs. 4.6 months (nivo alone)
- LAG-3 is a checkpoint on T cells that promotes exhaustion
- Lower toxicity than nivo + ipi combination
- Positioned as an alternative to nivo + ipi for patients needing more than monotherapy

**Tumor-Infiltrating Lymphocyte (TIL) Therapy:**
- Lifileucel (Amtagvi): first FDA-approved TIL therapy (2024)
- Process: resect tumor -> isolate TILs -> expand ex vivo -> lymphodepleting chemotherapy -> infuse TILs
- ORR: ~31% in anti-PD-1 refractory melanoma
- Complete responses: durable
- Limitations: complex manufacturing, lymphodepletion toxicity, centralized production

**Personalized Neoantigen Vaccines:**
- mRNA-4157/V940 (individualized neoantigen therapy, iNeST) + pembrolizumab
- KEYNOTE-942/mRNA-4157-P201: 44% reduction in recurrence/death vs. pembro alone (adjuvant stage III/IV)
- Process: tumor sequencing -> neoantigen prediction -> personalized mRNA vaccine encoding up to 34 neoantigens
- Each vaccine unique to the patient
- Phase 3 (KEYNOTE-942) ongoing

**Oncolytic Virotherapy:**
- Talimogene laherparepvec (T-VEC, Imlygic): modified HSV-1
- Intralesional injection into accessible melanoma lesions
- Mechanism: oncolysis + local GM-CSF production -> in situ vaccination effect
- Durable response rate: ~16% (OPTiM trial)
- Combinations with anti-PD-1 under investigation
- RP1 (vusolimogene oderparepvec): next-gen oncolytic HSV with anti-CTLA-4 Fc

**Bispecific Antibodies and Novel Combinations:**
- Tebentafusp: bispecific gp100-CD3 (for HLA-A*02:01+ uveal melanoma)
  - First therapy to improve OS in metastatic uveal melanoma
- TIGIT inhibitors: tiragolumab + atezolizumab in trials
- CD122-biased agonist (NKTR-214/bempegaldesleukin): failed in phase 3
- Combination trials: ICI + targeted therapy sequencing, ICI + intralesional agents

## Advanced SCC Immunotherapy

**Cemiplimab (Libtayo):**
- Anti-PD-1 for locally advanced or metastatic cutaneous SCC
- ORR: ~47% (EMPOWER-CSCC-1)
- Complete response: ~20%
- Also approved for advanced BCC after hedgehog inhibitor failure
- Neoadjuvant: high pathologic response rates in resectable SCC

**Pembrolizumab for SCC:**
- Approved for recurrent/metastatic cutaneous SCC
- KEYNOTE-629: ORR ~34%
- Used when cemiplimab unavailable or for combination approaches

**Conatumumab and Novel Agents:**
- Retifanlimab (anti-PD-1): approved for Merkel cell carcinoma
- Avelumab: anti-PD-L1, approved for Merkel cell carcinoma
- Merkel cell carcinoma: highly immunogenic, excellent checkpoint inhibitor responses

## Advanced BCC Management

**Hedgehog Pathway Inhibitors:**
- Vismodegib: 150mg daily
  - ORR: ~30-48% locally advanced, ~33% metastatic
  - Median duration of response: ~7-14 months
  - Major tolerability issue: muscle spasms, dysgeusia, alopecia (30-60% discontinue)
- Sonidegib: 200mg daily
  - Similar efficacy, potentially better tolerability

**Immunotherapy for BCC:**
- Cemiplimab: approved for advanced BCC after or intolerant to HHI
- ORR: ~31% (locally advanced), ~21% (metastatic)
- Durable responses observed

## Advanced Dermoscopy and AI

**Reflectance Confocal Microscopy (RCM):**
- In vivo, near-histologic resolution imaging
- Cellular-level visualization without biopsy
- Sensitivity ~93%, specificity ~76% for melanoma
- Reduces unnecessary biopsies by ~50%
- Used as adjunct to dermoscopy for equivocal lesions

**AI-Assisted Dermoscopy:**
- Convolutional neural networks (CNNs) for lesion classification
- Performance comparable to or exceeding dermatologists in some studies
- Integration into dermoscopy devices and smartphone applications
- Challenges: dataset bias, rare subtypes, medicolegal issues, skin of color representation
- Not yet replacing clinical judgment but augmenting it

**Total Body Photography (TBP):**
- Baseline photography for high-risk patients
- Sequential digital dermoscopy monitoring (SDDI)
- Detects new and changing lesions objectively
- Automated mole mapping systems with AI analysis

## Merkel Cell Carcinoma

**Overview:**
- Aggressive neuroendocrine skin cancer
- Merkel cell polyomavirus (MCPyV) positive in ~80%
- Risk: age, immunosuppression, UV exposure
- Very high sentinel node positivity rate (~30%)

**Treatment:**
- Surgery: wide excision + SLNB + adjuvant radiation
- Immunotherapy first-line for advanced: avelumab, pembrolizumab, retifanlimab
- ORR: ~30-60% depending on line and agent
- Virus-positive: better prognosis, better immunotherapy response

## Cutaneous Lymphoma

**Mycosis Fungoides:**
- Most common cutaneous T-cell lymphoma
- Patch -> plaque -> tumor progression
- Early stage: topical therapy (steroids, nitrogen mustard, retinoids), phototherapy
- Advanced: systemic therapies, mogamulizumab (anti-CCR4), brentuximab vedotin (anti-CD30)

## Liquid Biopsy and ctDNA

**Circulating Tumor DNA (ctDNA):**
- BRAF V600E ctDNA: detectable in blood of advanced melanoma patients
- Correlates with tumor burden
- Rising ctDNA predicts progression before imaging
- Molecular response assessment during treatment
- MRD (minimal residual disease) detection after surgery
- Potential to guide adjuvant therapy decisions`,

      keyTerms: [
        { term: 'Relatlimab', definition: 'Anti-LAG-3 checkpoint inhibitor combined with nivolumab (Opdualag) for melanoma; lower toxicity alternative to nivo+ipi' },
        { term: 'Lifileucel', definition: 'First FDA-approved TIL (tumor-infiltrating lymphocyte) therapy for anti-PD-1 refractory melanoma' },
        { term: 'mRNA neoantigen vaccine', definition: 'Personalized mRNA vaccine encoding patient-specific tumor neoantigens; combined with pembrolizumab in adjuvant melanoma trials' },
        { term: 'T-VEC', definition: 'Talimogene laherparepvec, intralesional oncolytic HSV-1 therapy for injectable melanoma lesions' },
        { term: 'Tebentafusp', definition: 'Bispecific gp100-CD3 protein for HLA-A*02:01 positive uveal melanoma; first therapy to improve OS in this setting' },
        { term: 'Reflectance confocal microscopy', definition: 'In vivo near-histologic imaging technique reducing unnecessary biopsies for equivocal lesions' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA in blood; emerging biomarker for melanoma treatment monitoring and minimal residual disease detection' },
        { term: 'Cemiplimab', definition: 'Anti-PD-1 antibody approved for advanced cutaneous SCC and BCC after hedgehog inhibitor failure' },
        { term: 'Merkel cell polyomavirus', definition: 'Virus causing ~80% of Merkel cell carcinomas; virus-positive tumors have better prognosis and immunotherapy response' },
      ],
      analogies: [
        'TIL therapy is like extracting the best soldiers already fighting in the tumor, training millions more of them, and sending the army back in.',
        'Personalized neoantigen vaccines are like creating a wanted poster of the specific criminal (tumor mutations) unique to each patient.',
        'T-VEC is like a Trojan horse virus that enters the tumor, destroys it from inside, and alerts the immune system to attack.',
        'ctDNA is like finding fragments of the enemy flag in the bloodstream, telling you whether the battle is being won or lost.',
      ],
      examples: [
        'A patient with unresectable stage III melanoma, PD-L1 negative, receives relatlimab + nivolumab as first-line (lower toxicity than nivo + ipi)',
        'A patient progresses on anti-PD-1 and BRAF/MEK inhibitors; referred for lifileucel TIL therapy at a specialized center',
        'An adjuvant stage IIIB melanoma patient enrolls in a trial of pembrolizumab + personalized mRNA neoantigen vaccine',
        'An elderly patient with locally advanced SCC, not a surgical candidate, achieves complete response with cemiplimab',
        'A high-risk melanoma patient has serial ctDNA monitoring; rising BRAF V600E ctDNA prompts early imaging revealing new metastasis',
      ],
      clinicalNotes: 'The melanoma treatment landscape is rapidly evolving. LAG-3 inhibition (relatlimab + nivolumab) offers a new first-line option with lower toxicity than nivo + ipi. TIL therapy (lifileucel) provides a novel option for checkpoint-refractory melanoma. Personalized neoantigen vaccines represent the most exciting frontier, with phase 3 trials ongoing. For advanced SCC, cemiplimab and pembrolizumab have transformed outcomes for a cancer previously treated with only surgery and radiation. ctDNA-guided therapy is moving toward clinical practice for adjuvant decision-making. AI-assisted dermoscopy is improving diagnostic accuracy but requires validation across diverse skin types. Merkel cell carcinoma, once a dire diagnosis, has excellent immunotherapy responses, particularly in virus-positive disease.',
    },
  },

  media: [],
  citations: [
    {
      id: 'skin-cancer-ref-1',
      type: 'textbook',
      title: "Dermatology (Bolognia)",
      authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'],
      source: 'Elsevier',
      chapter: 'Melanocytic Neoplasms, Basal Cell Carcinoma, Squamous Cell Carcinoma',
    },
    {
      id: 'skin-cancer-ref-2',
      type: 'article',
      title: 'Five-Year Outcomes with Nivolumab Plus Ipilimumab in Advanced Melanoma (CheckMate 067)',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1910836',
    },
    {
      id: 'skin-cancer-ref-3',
      type: 'article',
      title: 'Neoadjuvant pembrolizumab in resectable stage III-IV melanoma (SWOG S1801)',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2211437',
    },
    {
      id: 'skin-cancer-ref-4',
      type: 'article',
      title: 'Lifileucel TIL therapy for advanced melanoma',
      source: 'Journal of Clinical Oncology',
    },
    {
      id: 'skin-cancer-ref-5',
      type: 'article',
      title: 'RELATIVITY-047: Relatlimab plus nivolumab in untreated advanced melanoma',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2109970',
    },
  ],
  crossReferences: [
    {
      targetId: 'dermatology-skin-cancer',
      targetType: 'topic',
      relationship: 'related',
      label: 'Skin Cancer (Conditions Overview)',
    },
    {
      targetId: 'dermatology-inflammatory-skin',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Inflammatory Skin Conditions',
    },
    {
      targetId: 'dermatology-skin-infections',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Skin Infections',
    },
  ],
  tags: {
    topics: ['dermatology', 'oncology', 'skin-cancer', 'melanoma', 'immunotherapy', 'dermoscopy', 'surgical-oncology'],
    systems: ['integumentary', 'immune'],
    keywords: ['melanoma', 'BCC', 'SCC', 'ABCDE rule', 'Breslow depth', 'Mohs surgery', 'checkpoint inhibitors', 'BRAF', 'dermoscopy', 'immunotherapy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'medicine', 'surgery'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
