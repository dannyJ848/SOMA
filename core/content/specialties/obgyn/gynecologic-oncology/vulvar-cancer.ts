/**
 * Vulvar Cancer
 *
 * Comprehensive coverage of vulvar cancer including types,
 * presentation, staging, and treatment.
 */

import { EducationalContent } from '../../../types';

export const vulvarCancerContent: EducationalContent = {
  id: 'obgyn-oncology-vulvar-cancer',
  type: 'condition',
  name: 'Vulvar Cancer',
  alternateNames: ['Vulvar Carcinoma', 'Cancer of the Vulva'],

  levels: {
    1: {
      level: 1,
      summary: 'Vulvar cancer is a rare cancer of the external female genitalia that can be caused by HPV or develop in older women.',
      explanation: `Vulvar cancer affects the outside parts of a woman's genitals (the vulva).

**Key facts:**
- It is rare (about 4% of gynecologic cancers)
- Usually affects older women (60s-70s)
- Can also affect younger women (often HPV-related)
- Usually found early because it can be seen

**Warning signs:**
- A lump, bump, or sore on the vulva
- Itching that doesn't go away
- Pain or burning
- Bleeding not from periods
- Color changes (white, red, or dark patches)
- A mole that changes

**Risk factors:**
- HPV infection (especially in younger women)
- Older age
- Smoking
- Chronic vulvar skin conditions (lichen sclerosus)

**Prevention:**
- HPV vaccination
- Don't ignore persistent vulvar symptoms
- See a doctor for any unusual vulvar changes

**Treatment:**
- Surgery is the main treatment
- Radiation may be added
- Most cases are curable when found early`,
      keyTerms: [
        { term: 'vulva', definition: 'The external female genitalia including the labia, clitoris, and vaginal opening' },
        { term: 'lichen sclerosus', definition: 'A chronic skin condition of the vulva that can increase cancer risk' },
        { term: 'biopsy', definition: 'Removing a small piece of tissue to check for cancer' },
      ],
      analogies: [
        'Like a suspicious mole on your skin, any new lump or persistent change on the vulva should be checked by a doctor.',
      ],
      examples: [
        'A woman who notices itching and a raised white patch on her vulva that doesn\'t go away should see her gynecologist for evaluation.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vulvar cancer has two main pathways: HPV-related (younger women) and HPV-independent (older women with chronic vulvar conditions), with treatment primarily surgical.',
      explanation: `**Types:**

*Squamous Cell Carcinoma (90%):*
- HPV-related: Younger women, often multifocal
- HPV-independent: Older women, often with lichen sclerosus

*Other Types:*
- Melanoma (5%)
- Bartholin gland carcinoma
- Basal cell carcinoma
- Paget disease

**Risk Factors:**

*HPV-Related:*
- HPV 16 (most common)
- Smoking
- Immunosuppression
- Preceded by VIN (vulvar intraepithelial neoplasia)

*HPV-Independent:*
- Chronic vulvar dermatoses
- Lichen sclerosus
- Differentiated VIN (dVIN) precursor
- Older age

**Presentation:**
- Vulvar mass or ulcer
- Pruritus (most common symptom)
- Pain
- Bleeding
- Urinary symptoms (advanced)

**Diagnosis:**
- Physical examination
- Biopsy of suspicious lesion (always!)
- Delay is common - patients and providers
- Don't assume benign without biopsy

**Staging (FIGO):**
- Stage I: Confined to vulva
- Stage II: Adjacent structures (anus, lower vagina)
- Stage III: Regional lymph nodes
- Stage IV: Upper urethra, bladder, rectum, distant

**Treatment Overview:**
- Early stage: Surgical excision
- Lymph node assessment important
- Radiation for positive margins or nodes
- Preserve function when possible`,
      keyTerms: [
        { term: 'VIN', definition: 'Vulvar intraepithelial neoplasia; precancer of the vulva' },
        { term: 'sentinel lymph node', definition: 'First node receiving drainage from tumor; guides further surgery' },
        { term: 'wide local excision', definition: 'Surgery removing tumor with margin of normal tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'Vulvar cancer management balances oncologic principles with preservation of anatomy and function, utilizing sentinel lymph node biopsy and multimodal therapy for advanced disease.',
      explanation: `**Precursor Lesions:**

*HPV-Related VIN (uVIN/HSIL):*
- HPV-driven
- Younger women
- May be multifocal
- Progression rate 5-10%
- Treatment: Excision, ablation, imiquimod

*Differentiated VIN (dVIN):*
- HPV-independent
- Associated with lichen sclerosus
- Higher progression rate (30%)
- Requires excision
- Close surveillance essential

**Surgical Management:**

*Primary Tumor:*
- Wide local excision (1-2 cm margins)
- Radical vulvectomy rarely needed
- Function preservation prioritized
- Reconstruction options

*Lymph Node Assessment:*
- SLN biopsy standard for tumors >1mm invasion
- SLN biopsy for unifocal tumors <4cm
- Full inguinofemoral lymphadenectomy if SLN positive
- Bilateral groin assessment for midline tumors

**SLNB Protocol:**
- Technetium-99m +/- blue dye
- ICG (indocyanine green) increasingly used
- GROINSS-V validation
- Reduces morbidity vs. full dissection

**Adjuvant Therapy:**

*Indications for Radiation:*
- Positive/close margins (when re-excision not feasible)
- Positive lymph nodes
- Extracapsular extension

*Chemoradiation:*
- Locally advanced disease
- Neoadjuvant for organ preservation
- Cisplatin-based

**Special Types:**

*Vulvar Melanoma:*
- Second most common
- Staging: AJCC melanoma system
- Surgery mainstay
- Immunotherapy for advanced

*Paget Disease:*
- Intraepithelial adenocarcinoma
- "Strawberries and cream" appearance
- Often multifocal with positive margins
- May have underlying adenocarcinoma
- Wide excision, close surveillance`,
      keyTerms: [
        { term: 'GROINSS-V', definition: 'Trial validating sentinel lymph node biopsy for vulvar cancer' },
        { term: 'differentiated VIN', definition: 'HPV-negative precursor often arising in lichen sclerosus; higher progression risk' },
        { term: 'vulvar Paget disease', definition: 'Intraepithelial adenocarcinoma presenting as eczematous vulvar lesion' },
      ],
      clinicalNotes: 'Vulvar cancer treatment has evolved toward function-sparing approaches. Radical vulvectomy is rarely needed. SLN biopsy has dramatically reduced the morbidity of groin dissection while maintaining oncologic outcomes.',
    },
    4: {
      level: 4,
      summary: 'Contemporary vulvar cancer care emphasizes individualized surgical approaches, integration of immunotherapy for advanced disease, and attention to quality of life and sexual function.',
      explanation: `**Surgical Evolution:**

*Historical:*
- En bloc radical vulvectomy + bilateral lymphadenectomy
- High morbidity: Wound breakdown, lymphedema
- Disfiguring

*Modern:*
- Separate groin incisions
- Wide local excision when feasible
- SLN biopsy for appropriate candidates
- Reconstruction techniques
- Function preservation

**Advanced/Recurrent Disease:**

*Systemic Therapy:*
- Historically poor response to chemotherapy
- Immunotherapy changing paradigm
- Pembrolizumab for MSI-H/PDL1+
- Clinical trials important

*Chemoradiation:*
- Primary for unresectable
- Neoadjuvant for downstaging
- Cisplatin/5-FU or cisplatin alone

*Pelvic Exenteration:*
- Central recurrence
- Highly selected patients
- Significant morbidity
- Potential for cure

**Quality of Life:**

*Impact Areas:*
- Body image
- Sexual function
- Urinary symptoms
- Lymphedema
- Chronic wound issues

*Addressing Function:*
- Pelvic floor physical therapy
- Sexual health counseling
- Lymphedema management
- Psychosocial support

**Surveillance:**

*Schedule:*
- Every 3 months year 1-2
- Every 6 months year 3-5
- Annual thereafter

*Components:*
- Complete vulvar/groin exam
- Assess for recurrence
- Monitor for second primary
- Address survivorship issues

**Lichen Sclerosus Management:**

*Cancer Risk:*
- 4-6% lifetime risk of vulvar cancer
- Higher with untreated LS
- dVIN precursor

*Surveillance:*
- Annual vulvar exam
- Patient self-exam education
- Biopsy any suspicious changes
- Treatment may reduce risk (unproven)`,
      keyTerms: [
        { term: 'triple incision technique', definition: 'Separate incisions for vulva and groins; reduces wound complications' },
        { term: 'pelvic exenteration', definition: 'Extensive surgery removing pelvic organs; reserved for selected recurrences' },
        { term: 'lymphedema', definition: 'Chronic leg swelling from lymph node removal; major source of morbidity' },
      ],
      clinicalNotes: 'Women with lichen sclerosus have a 4-6% lifetime risk of vulvar cancer. Annual vulvar examination and prompt biopsy of any suspicious changes is essential. Whether treatment of lichen sclerosus reduces cancer risk is unproven but reasonable.',
    },
    5: {
      level: 5,
      summary: 'Vulvar cancer care is advancing through improved understanding of molecular subtypes, evolving surgical techniques, and integration of immunotherapy, while challenges remain in early detection and survivorship care.',
      explanation: `**Molecular Insights:**

*HPV-Related:*
- Similar biology to cervical cancer
- P16 positive (marker of HPV)
- May respond to immunotherapy

*HPV-Independent:*
- p53 mutations common
- TP53 abnormalities
- May have different therapeutic targets

**Emerging Therapies:**

*Immunotherapy:*
- Pembrolizumab for PDL1+/MSI-H
- Combinations in trials
- Therapeutic HPV vaccines
- Adoptive cell therapy

*Targeted Therapy:*
- EGFR inhibitors studied
- PI3K pathway
- Limited success to date
- Need biomarker selection

**Prevention:**

*HPV Vaccination:*
- Prevents HPV-related VIN
- May reduce HPV-related vulvar cancer
- Same vaccine as cervical cancer

*Screening:*
- No population screening
- Vulvar awareness important
- Biopsy suspicious lesions
- Manage precursor conditions

**Disparities:**

*Access Issues:*
- Gynecologic oncologist access
- Sentinel node expertise
- Reconstruction availability
- Rurality challenges

*Outcomes Disparities:*
- Race
- Socioeconomic status
- Insurance
- Healthcare system factors

**Research Priorities:**

*Clinical:*
- Optimal margins
- De-escalation possibilities
- Immunotherapy combinations
- Quality of life endpoints

*Basic Science:*
- Molecular classification
- Therapeutic targets
- Biomarkers for therapy selection
- Prevention strategies

**Multidisciplinary Care:**

*Team Members:*
- Gynecologic oncologist
- Radiation oncologist
- Plastic/reconstructive surgeon
- Dermatopathologist
- Palliative care
- Physical therapy
- Psychology/sexual health`,
      keyTerms: [
        { term: 'p16', definition: 'Immunohistochemical marker indicating HPV-related vulvar cancer' },
        { term: 'vulvar awareness', definition: 'Educating women to recognize vulvar changes requiring evaluation' },
        { term: 'EGFR', definition: 'Epidermal growth factor receptor; potential therapeutic target in vulvar cancer' },
      ],
      clinicalNotes: 'Vulvar cancer remains challenging due to its rarity and heterogeneity. HPV vaccination will reduce HPV-related cases. For HPV-independent disease, early detection and management of precursor conditions (lichen sclerosus, dVIN) is key. Multidisciplinary care optimizes outcomes.',
    },
  },

  media: [
    {
      id: 'vulvar-cancer-staging',
      type: 'diagram',
      filename: 'vulvar-cancer-figo-staging.svg',
      title: 'Vulvar Cancer FIGO Staging',
      description: 'Visual representation of vulvar cancer stages',
    },
  ],

  citations: [
    {
      id: 'nccn-vulvar',
      type: 'article',
      title: 'NCCN Guidelines: Vulvar Cancer',
      source: 'National Comprehensive Cancer Network',
      authors: ['NCCN'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-vulva', targetType: 'structure', relationship: 'related', label: 'Vulva Anatomy' },
    { targetId: 'obgyn-oncology-cervical-cancer', targetType: 'condition', relationship: 'related', label: 'Cervical Cancer' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['oncology', 'vulvar cancer', 'gynecology'],
    keywords: ['vulvar cancer', 'VIN', 'lichen sclerosus', 'HPV'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
