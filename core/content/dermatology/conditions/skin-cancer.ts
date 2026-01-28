/**
 * Skin Cancer
 *
 * Malignant tumors of the skin including basal cell carcinoma, squamous cell carcinoma, and melanoma.
 */

import { EducationalContent } from '../../types';

export const skinCancerContent: EducationalContent = {
  id: 'dermatology-skin-cancer',
  type: 'topic',
  name: 'Skin Cancer',
  alternateNames: ['Cutaneous Malignancy', 'Skin Neoplasm', 'Melanoma'],

  levels: {
    1: {
      level: 1,
      summary: "Skin cancer is abnormal growth of skin cells, usually caused by sun exposure. The three main types are basal cell carcinoma, squamous cell carcinoma, and melanoma.",
      explanation: `## What Is Skin Cancer?

Skin cancer happens when skin cells grow abnormally. Most skin cancers are caused by too much exposure to ultraviolet (UV) radiation from the sun or tanning beds.

## Types of Skin Cancer

**Basal Cell Carcinoma (BCC):**
- Most common type
- Grows slowly
- Rarely spreads to other parts
- Usually on sun-exposed areas

**Squamous Cell Carcinoma (SCC):**
- Second most common
- Can spread if not treated
- Also on sun-exposed areas

**Melanoma:**
- Most serious type
- Can spread to other organs
- Starts in pigment cells (melanocytes)
- Can occur anywhere, even areas not exposed to sun

## Warning Signs (ABCDE Rule for Melanoma)

**A - Asymmetry:**
One half doesn't match the other

**B - Border:**
Edges are irregular, ragged, notched

**C - Color:**
Different colors within the same spot

**D - Diameter:**
Larger than a pencil eraser (6mm)

**E - Evolving:**
Size, shape, or color changes over time

## Prevention

- Use sunscreen (SPF 30+)
- Seek shade, especially midday
- Wear protective clothing
- Avoid tanning beds
- Check your skin regularly
- See a doctor for any changing moles`,

      keyTerms: [
        { term: 'UV radiation', definition: 'Invisible rays from sun that damage skin' },
        { term: 'Melanocytes', definition: 'Cells that produce pigment (color) in skin' },
        { term: 'Metastasis', definition: 'Cancer spreading to other parts of body' },
        { term: 'Biopsy', definition: 'Removing tissue to examine for cancer' },
      ],
      analogies: [
        'Melanocytes are like tiny paint factories that give skin its color.',
        'ABCDE is like a checklist to check if a mole might be dangerous.',
      ],
      examples: [
        'Person with pearly bump on nose that bleeds easily (BCC)',
        "Someone with scaly red patch on ear that won't heal (SCC)",
        'Patient with changing dark mole on back (melanoma)',
      ],
    },

    2: {
      level: 2,
      summary: 'Skin cancer is the most common cancer worldwide. BCC and SCC are keratinocyte carcinomas with excellent prognosis when caught early. Melanoma requires early detection for optimal outcomes.',
      explanation: `## Basal Cell Carcinoma

**Clinical Types:**
- Nodular: Pearly, telangiectatic papule
- Superficial: Red, scaly plaque
- Morpheaform: Scar-like, ill-defined
- Pigmented: Can mimic melanoma

**Common Locations:**
- Head and neck (80%)
- Nose commonest site
- Sun-exposed areas

**Behavior:**
- Locally invasive
- Rarely metastasizes (<0.1%)
- Can cause significant local destruction

## Squamous Cell Carcinoma

**Clinical Appearance:**
- Hyperkeratotic plaque
- Ulcerated nodule
- Can arise in actinic keratosis
- Faster growth than BCC

**High-Risk Features:**
- Depth >2mm
- Perineural invasion
- Poor differentiation
- Location on ear/lip
- Immunosuppression

**Metastasis Risk:**
- General: 2-5%
- High-risk: Up to 15%

## Melanoma

**Risk Factors:**
- Fair skin, red hair
- Multiple nevi (>50)
- Atypical nevi
- Family history
- Intermittent intense sun exposure
- Tanning bed use

**Clinical Types:**
- Superficial spreading (70%)
- Nodular (15-30%)
- Lentigo maligna (5-15%)
- Acral lentiginous (palms, soles, nails)
- Amelanotic (no pigment - can be missed!)

**Prognosis by Stage:**
- In situ (stage 0): 100% survival
- Thin (<1mm): >95% 5-year survival
- Thick (>4mm): <50% 5-year survival`,

      keyTerms: [
        { term: 'Actinic keratosis', definition: 'Precancerous rough, scaly patch from sun damage' },
        { term: 'Perineural invasion', definition: 'Cancer spreading along nerves' },
        { term: 'Nevi', definition: 'Moles - benign growths of melanocytes' },
        { term: 'Amelanotic', definition: 'Melanoma without pigment - appears skin-colored or pink' },
      ],
      analogies: [
        'Actinic keratosis is like a warning light on a dashboard - precancerous.',
        'Amelanotic melanoma is like a chameleon - it blends in and is hard to spot.',
      ],
      examples: [
        'Elderly man with pearly nodule on nose (BCC)',
        'Patient with scaly bump on ear (high-risk SCC)',
        'Woman with new dark spot on leg changing rapidly (melanoma)',
      ],
      clinicalNotes: 'Surgery is primary treatment for all skin cancers. Biopsy any suspicious lesion. Excisional biopsy preferred for suspected melanoma. Shave biopsy can depths be measured. For SCC/BCC, the extent can be assessed first. Sentinel lymph node biopsy for melanoma >0.8mm or with ulceration.',
    },

    3: {
      level: 3,
      summary: 'Surgical excision is first-line treatment for most skin cancers. Mohs micrographic surgery offers highest cure rates for high-risk BCC and SCC in cosmetically sensitive areas.',
      explanation: `## Treatment Modalities

**Basal Cell Carcinoma:**

*Surgical Excision:*
- 4mm margins for well-defined
- 4-6mm for aggressive subtypes
- Primary closure or graft

*Mohs Micrographic Surgery:*
- 99% cure rate
- Tissue-sparing
- Indications:
  - Face, ears, genitalia
  - Large tumors (>2cm)
  - Aggressive histology
  - Recurrent tumors

*Other Options:*
- Electrodessication and curettage (low-risk)
- Topical imiquimod (superficial)
- Radiation (elderly, nonsurgical)

**Squamous Cell Carcinoma:**

*Surgical Excision:*
- 4-6mm margins for low-risk
- 6-10mm for high-risk

*Mohs:*
- Similar indications to BCC
- Especially for high-risk tumors

*Radiation:*
- Alternative to surgery
- For unresectable tumors

**Melanoma:**

*Wide Local Excision:*
- In situ: 0.5-1cm margin
- <1mm: 1cm margin
- 1-2mm: 1-2cm margin
- >2mm: 2cm margin

*Sentinel Lymph Node Biopsy:*
- Indicated for tumors >0.8mm
- Or any with ulceration
- Staging information
- Therapeutic controversy

*Completion Lymphadenectomy:*
- If positive sentinel node
- Controversial (MSLT-2 trial)
- Observation now acceptable`,

      keyTerms: [
        { term: 'Mohs surgery', definition: 'Layer-by-layer removal with microscopic examination of margins' },
        { term: 'Margins', definition: 'Normal tissue around tumor removed to ensure complete excision' },
        { term: 'Wide local excision', definition: 'Surgery removing tumor with wide margin of normal tissue' },
        { term: 'ED&C', definition: 'Electrodessication and curettage - scraping and burning tissue' },
      ],
      analogies: [
        'Mohs surgery is like removing layers of an onion, checking each layer.',
        'Margins are like a safety zone around the tumor.',
      ],
      examples: [
        'BCC on nose treated with Mohs to preserve tissue',
        'SCC on ear with perineural invasion needs wide excision',
        'Melanoma 1.5mm deep gets 1-2cm margins plus SLNB',
      ],
      clinicalNotes: 'For melanoma, chest X-ray and LDH are baseline staging. CT or PET for higher risk. BRAF testing for stage III+ (targeted therapy available). Immunotherapy (anti-PD1) has revolutionized metastatic melanoma treatment. Nivolumab, pembrolizumab first-line.',
    },

    4: {
      level: 4,
      summary: 'Melanoma prognosis depends on Breslow thickness, ulceration, and sentinel node status. Immunotherapy and targeted therapy have dramatically improved outcomes for advanced disease.',
      explanation: `## Melanoma Staging (AJCC 8th Edition)

**T Category (Primary Tumor):**
- Tis: In situ
- T1a: ≤0.8mm, non-ulcerated
- T1b: 0.8-1.0mm OR ulcerated
- T2a: 1.0-2.0mm, non-ulcerated
- T2b: 1.0-2.0mm, ulcerated
- T3a: 2.0-4.0mm, non-ulcerated
- T3b: 2.0-4.0mm, ulcerated
- T4a: >4.0mm, non-ulcerated
- T4b: >4.0mm, ulcerated

**Prognostic Factors:**
- Breslow thickness (most important)
- Ulceration (adverse)
- Mitotic rate ≥1/mm²
- Sentinel node status (critical)

**Survival by Stage:**
- Stage 0/I: 98% 5-year survival
- Stage II: 90-95%
- Stage III: 40-80% (depends on nodal burden)
- Stage IV: 20-30%

## Advanced Melanoma Treatment

**Immunotherapy:**
- Anti-PD1: Nivolumab, Pembrolizumab
- Anti-CTLA4: Ipilimumab
- Combination: Higher response, more toxicity

**Targeted Therapy (BRAF+):**
- BRAF inhibitors: Vemurafenib, Dabrafenib
- MEK inhibitors: Cobimetinib, Trametinib
- Combination improves survival

**Radiation:**
- Brain metastases
- Symptomatic bone mets
- Adjuvant to nodal basin (selected)

## High-Risk SCC/BCC

**Indications for Specialty Care:**
- Recurrent after treatment
- Perineural invasion
- Deep invasion (>6mm or into fat)
- Poor differentiation
- Immunosuppressed patient

**Workup:**
- Imaging for deep invasion
- Consider SLNB for high-risk SCC
- Radiation adjuvant for high-risk features`,

      keyTerms: [
        { term: 'Breslow thickness', definition: 'Depth of melanoma from granular layer to deepest point' },
        { term: 'Anti-PD1', definition: 'Drug that blocks PD-1, allowing immune system to attack cancer' },
        { term: 'BRAF', definition: 'Gene mutation found in ~50% of melanomas - targetable' },
        { term: 'Adjuvant', definition: 'Additional treatment given after primary treatment to prevent recurrence' },
      ],
      analogies: [
        'Breslow thickness is like measuring how deep the roots of a weed go.',
        'Anti-PD1 is like releasing the brakes on your immune system.',
      ],
      examples: [
        'Patient with BRAF+ metastatic melanoma gets targeted therapy',
        'Stage III melanoma treated with adjuvant pembrolizumab',
        'SCC with perineural invasion needs radiation after surgery',
      ],
      clinicalNotes: 'For immunotherapy, monitor for immune-related adverse events: colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis. Can occur at any time, even after discontinuation. For BRAF inhibitors, watch for fever, arthralgias, photosensitivity.',
    },

    5: {
      level: 5,
      summary: 'Skin cancer incidence continues to rise globally. Prevention through UV protection and early detection remain paramount. Emerging therapies continue to improve outcomes for advanced disease.',
      explanation: `## Prevention Strategies

**Primary Prevention:**
- Daily sunscreen use (SPF 30+)
- Sun-protective clothing
- Avoid peak UV hours (10am-4pm)
- No indoor tanning
- Shade seeking

**Secondary Prevention:**
- Regular skin self-exams
- Annual professional skin exams
- Total body photography for high-risk
- Digital dermoscopic monitoring

**High-Risk Groups:**
- Solid organ transplant recipients (65x SCC risk)
- Genetic syndromes (xeroderma pigmentosum, basal cell nevus syndrome)
- Immunosuppressed (HIV, CLL)
- Family history of melanoma

## Emerging Therapies

**Melanoma:**
- Neoadjuvant therapy (before surgery)
- Adoptive T-cell therapy (TIL)
- Oncolytic virus (T-VEC)
- Personalized neoantigen vaccines

**Non-Melanoma:**
- Hedgehog inhibitors (vismodegib) for basal cell nevus syndrome
- Cemiplimab (anti-PD1) for advanced SCC
- Topical therapies for field cancerization

## Controversies

**Screening:**
- Population-based screening not proven
- Targeted screening for high-risk
- Skin self-exam education

**SLNB for Thin Melanoma:**
- 0.5-0.8mm: controversial
- Consider if other high-risk features
- Shared decision making

**Management of Subclinical Nodal Disease:**
- Completion lymphadenectomy vs. observation
- MSLT-2: observation acceptable for microscopic disease
- Careful surveillance required`,

      keyTerms: [
        { term: 'Field cancerization', definition: 'Widespread sun damage with precancerous changes over large area' },
        { term: 'Hedgehog inhibitor', definition: 'Drug blocking hedgehog pathway for BCC' },
        { term: 'Neoadjuvant', definition: 'Treatment given before surgery to shrink tumor' },
        { term: 'TIL', definition: 'Tumor-infiltrating lymphocytes - cells that can be grown and given back to patient' },
      ],
      analogies: [
        'Field cancerization is like a field with weeds scattered everywhere.',
        'Neoadjuvant therapy is like softening up a target before the main attack.',
      ],
      examples: [
        'Transplant patient develops multiple SCCs, requires regular dermatology',
        'Patient with basal cell nevus syndrome on vismodegib',
        'Melanoma patient receives neoadjuvant therapy before surgery',
      ],
      clinicalNotes: 'Acral lentiginous melanoma has worse prognosis due to delayed diagnosis. Look for dark streaks in nails (Hutchinson sign). Subungual melanoma often misdiagnosed as fungal nail. ALM is most common subtype in darker-skinned individuals.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['dermatology', 'cancer', 'melanoma', 'BCC', 'SCC', 'oncology'],
    systems: ['integumentary'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
