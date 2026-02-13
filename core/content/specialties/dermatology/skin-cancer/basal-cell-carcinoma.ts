/**
 * Basal Cell Carcinoma - Comprehensive Educational Content
 *
 * Covers pathophysiology, clinical presentation, and management
 * of basal cell carcinoma.
 */

import { EducationalContent } from '../../../types';

export const basalCellCarcinomaContent: EducationalContent = {
  id: 'dermatology-basal-cell-carcinoma',
  type: 'condition',
  name: 'Basal Cell Carcinoma',
  alternateNames: ['BCC', 'Rodent Ulcer', 'Basal Cell Epithelioma'],

  levels: {
    1: {
      level: 1,
      summary: 'Basal cell carcinoma is the most common type of skin cancer, usually caused by sun damage, and almost always curable when found early.',
      explanation: `Basal cell carcinoma (BCC) is the most common type of skin cancer in the world. The good news is that it grows very slowly and almost never spreads to other parts of the body.

**What Causes It?**
- Too much sun exposure over your lifetime
- Tanning beds
- Fair skin that burns easily

**What Does It Look Like?**
BCC can look different depending on the type:
- A shiny, pearly bump (often on the face)
- A flat, scaly, reddish patch
- A sore that heals and then comes back
- A waxy, scar-like area
- Small blood vessels may be visible on the surface

**Where Does It Usually Appear?**
- Face (especially nose, eyelids, and ears)
- Head and neck
- Other sun-exposed areas
- Can occur anywhere, even areas not exposed to sun

**How Is It Treated?**
- Surgery to remove it (most common)
- Freezing (cryotherapy)
- Scraping and burning (curettage and electrodesiccation)
- Creams for superficial types
- Special surgery (Mohs) for sensitive areas like the face

**Important to Know:**
While BCC rarely spreads to other organs, it can grow into nearby tissues and cause damage if not treated. That is why early treatment is important!`,
      keyTerms: [
        { term: 'basal cell carcinoma', definition: 'The most common type of skin cancer, grows slowly and rarely spreads' },
        { term: 'biopsy', definition: 'Taking a small sample of skin to check for cancer' },
        { term: 'dermatologist', definition: 'A doctor who specializes in skin problems' },
        { term: 'UV rays', definition: 'Invisible rays from the sun that can damage your skin' },
      ],
      analogies: [
        'BCC grows like a weed in a garden - it spreads locally but does not usually jump to other gardens.',
        'The pearly appearance of BCC is like a tiny soap bubble on the skin.',
      ],
      examples: [
        'A person notices a shiny pink bump on their nose that has been there for months and sometimes bleeds.',
        'An elderly man has a non-healing sore on his ear that keeps crusting over.',
      ],
    },
    2: {
      level: 2,
      summary: 'Basal cell carcinoma is a locally invasive malignancy of basal keratinocytes, characterized by slow growth, low metastatic potential, and strong association with cumulative UV exposure.',
      explanation: `Basal cell carcinoma (BCC) is the most common malignancy in humans, with over 4 million cases diagnosed annually in the US alone.

## Epidemiology
- Accounts for ~80% of non-melanoma skin cancers
- Incidence increasing 3-10% annually
- More common in men (slightly)
- Rare before age 40
- Strong association with fair skin (Fitzpatrick I-II)

## Risk Factors
- Cumulative UV exposure (chronic, not intermittent)
- Ionizing radiation exposure
- Arsenic exposure
- Immunosuppression
- Genetic syndromes (Gorlin syndrome, xeroderma pigmentosum)
- Previous BCC (40% chance of another within 5 years)

## Clinical Subtypes

### Nodular BCC (60-80%)
- Most common type
- Pearly, dome-shaped papule or nodule
- Telangiectasias on surface
- May have central ulceration ("rodent ulcer")

### Superficial BCC (10-30%)
- Erythematous, scaly patch or plaque
- Well-defined borders
- Often on trunk
- May resemble eczema or psoriasis

### Morpheaform/Sclerosing BCC (5-10%)
- Scar-like, waxy plaque
- Ill-defined borders
- Aggressive local behavior
- Higher recurrence rate

### Pigmented BCC
- Contains melanin (brown/black coloration)
- More common in darker skin types
- Can mimic melanoma

## Diagnosis
- Clinical examination
- Dermoscopy: Arborizing vessels, blue-gray ovoid nests
- Biopsy: Definitive diagnosis

## Treatment Options
- Surgical excision (standard margins 4mm)
- Mohs micrographic surgery (face, high-risk features)
- Curettage and electrodesiccation (low-risk tumors)
- Cryotherapy (superficial BCC)
- Topical therapies: Imiquimod, 5-fluorouracil (superficial BCC)
- Radiation therapy (non-surgical candidates)`,
      keyTerms: [
        { term: 'telangiectasia', definition: 'Small dilated blood vessels visible on the skin surface', pronunciation: 'tel-AN-jee-ek-TAY-zhuh' },
        { term: 'Mohs surgery', definition: 'Specialized surgery that removes cancer layer by layer, checking each layer for cancer cells', pronunciation: 'moze' },
        { term: 'dermoscopy', definition: 'Examination of skin using a special magnifying device' },
        { term: 'curettage', definition: 'Scraping away of tissue with a spoon-shaped instrument', pronunciation: 'kyoo-reh-TAHZH' },
      ],
      analogies: [
        'Mohs surgery is like peeling an onion layer by layer until you reach healthy tissue.',
        'Arborizing vessels look like branches of a tree spreading across the tumor.',
      ],
    },
    3: {
      level: 3,
      summary: 'Basal cell carcinoma pathogenesis involves aberrant Hedgehog pathway signaling, with treatment guided by risk stratification and ranging from destructive modalities to targeted therapy for advanced disease.',
      explanation: `## Molecular Pathogenesis

### Hedgehog Pathway
The Hedgehog (Hh) signaling pathway is crucial in BCC development:
- PTCH1 (Patched 1): Tumor suppressor, inhibits Smoothened (SMO)
- SMO (Smoothened): Transmembrane protein, activates pathway
- GLI transcription factors: Drive cell proliferation

**Normal Signaling**:
1. Without Hh ligand, PTCH1 inhibits SMO
2. Hh ligand binding releases SMO inhibition
3. SMO activates GLI transcription factors

**In BCC**:
- PTCH1 loss-of-function mutations (most common)
- SMO activating mutations
- Results in constitutive pathway activation

### UV-Induced Mutations
- P53 mutations in >50% of BCCs
- UV signature: C→T transitions at dipyrimidine sites
- P53 mutations are early events but not sufficient alone

### Gorlin Syndrome (NBCCS)
- Autosomal dominant, PTCH1 germline mutations
- Multiple BCCs from young age
- Other features: Odontogenic keratocysts, palmar pits, skeletal anomalies

## Histopathology

### Common Features
- Basaloid cells: Large nuclei, scant cytoplasm
- Peripheral palisading of nuclei
- Retraction artifact (clefting between tumor and stroma)
- Mitotic figures
- Apoptotic cells
- Mucinous stroma

### Histologic Subtypes
| Subtype | Pattern | Behavior |
|---------|---------|----------|
| Nodular | Large tumor nests | Low-risk |
| Superficial | Buds from epidermis | Low-risk |
| Micronodular | Small nests, infiltrative | High-risk |
| Morpheaform | Thin strands in sclerotic stroma | High-risk |
| Infiltrative | Irregular nests, spiky borders | High-risk |
| Basosquamous | Mixed BCC and SCC features | High-risk |

## Risk Stratification

### Low-Risk Features
- Trunk/extremities (not H zone)
- <2cm in size
- Nodular or superficial subtype
- Well-defined borders
- Primary tumor (not recurrent)
- No perineural invasion

### High-Risk Features
- H zone (central face, periocular, ears, lips)
- Size >2cm
- Aggressive histologic subtype
- Poorly defined borders
- Recurrent tumor
- Perineural invasion
- Immunosuppression

## Treatment by Risk

### Low-Risk BCC
- Electrodesiccation and curettage
- Standard surgical excision (4mm margins)
- Topical therapy (imiquimod, 5-FU) for superficial type
- Cryotherapy

### High-Risk BCC
- Mohs micrographic surgery (tissue-sparing, high cure rate)
- Surgical excision with wider margins
- Radiation therapy (if surgery not feasible)

### Locally Advanced/Metastatic BCC
- Hedgehog pathway inhibitors (vismodegib, sonidegib)
- Immunotherapy (cemiplimab) for HHI-resistant disease`,
      keyTerms: [
        { term: 'Hedgehog pathway', definition: 'Cell signaling pathway critical in development, aberrantly activated in BCC' },
        { term: 'PTCH1', definition: 'Patched 1 gene - tumor suppressor that inhibits Smoothened; mutated in most BCCs', pronunciation: 'patch-one' },
        { term: 'peripheral palisading', definition: 'Alignment of nuclei at tumor edge, characteristic histologic feature of BCC' },
        { term: 'vismodegib', definition: 'Hedgehog pathway inhibitor for advanced BCC', pronunciation: 'viz-moh-DEG-ib' },
        { term: 'Gorlin syndrome', definition: 'Genetic syndrome with PTCH1 mutations causing multiple BCCs and other abnormalities' },
      ],
      clinicalNotes: 'High-risk BCCs require careful margin assessment. Mohs surgery achieves 99% cure rate for primary BCC. Patients with one BCC have 40% risk of developing another within 5 years.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of BCC encompasses Hedgehog pathway molecular biology, mechanisms of targeted therapy resistance, and emerging treatment strategies for locally advanced and metastatic disease.',
      explanation: `## Hedgehog Pathway Molecular Details

### Canonical Pathway
**Inactive State** (no ligand):
- PTCH1 localizes to primary cilium
- PTCH1 prevents SMO ciliary accumulation
- GLI2/3 processed to repressor forms (GLI2R, GLI3R)
- SUFU (Suppressor of Fused) sequesters GLIs

**Active State** (ligand binding):
- Sonic Hh (SHH) binds PTCH1
- PTCH1 internalized and degraded
- SMO translocates to cilium
- GLI activator forms (GLI2A) translocate to nucleus
- Target genes: GLI1, PTCH1, CCND1 (Cyclin D1)

### BCC Mutations
| Gene | Mutation Type | Frequency |
|------|---------------|-----------|
| PTCH1 | Loss of function | 70-90% |
| SMO | Gain of function | 10-20% |
| SUFU | Loss of function | <5% |
| GLI1/2 | Amplification | Rare |

### Non-Canonical Hedgehog Signaling
- SMO-independent GLI activation
- Cross-talk with RAS-MEK, PI3K-AKT
- Potential resistance mechanism

## Hedgehog Pathway Inhibitors (HPIs)

### Vismodegib
- SMO antagonist
- Binds drug-binding pocket of SMO
- FDA approved for locally advanced and metastatic BCC
- ORR: 30% (metastatic), 43% (locally advanced)

### Sonidegib
- SMO antagonist, different binding site
- FDA approved for locally advanced BCC
- Potentially different resistance profile

### Clinical Considerations
- Long-term use limited by toxicity
- Muscle spasms (71%), alopecia (63%), dysgeusia (55%)
- Weight loss common and dose-limiting
- Intermittent dosing under investigation

## Resistance Mechanisms

### Primary Resistance
- Downstream GLI mutations
- Non-canonical pathway activation
- Low tumor Hh pathway dependence

### Acquired Resistance
**SMO Mutations**:
- D473 mutations (drug-binding site)
- W535L mutations
- May retain sensitivity to different SMO inhibitors

**Pathway Bypass**:
- GLI2 amplification
- SUFU loss (releases GLI from repression)
- PI3K pathway activation (PTEN loss)
- RAS pathway activation

### Overcoming Resistance
- GLI inhibitors (arsenic trioxide, GANT compounds)
- PI3K/mTOR inhibitors combination
- Immunotherapy (anti-PD-1)

## Immunotherapy in BCC

### Rationale
- High mutation burden (UV-induced)
- Potential immunogenicity
- Option after HPI failure

### Cemiplimab
- Anti-PD-1 monoclonal antibody
- Approved for locally advanced/metastatic BCC after HPI
- ORR: 31%, with durable responses
- Expanding to first-line in HPI-unsuitable patients

## Advanced Surgical Considerations

### Mohs Micrographic Surgery
- Complete margin assessment (100% peripheral, en face)
- Highest cure rates (99% primary, 94% recurrent)
- Tissue preservation critical for cosmesis and function
- Indications: High-risk location, aggressive subtype, recurrence

### Perineural Invasion (PNI)
- Present in 1-5% of BCCs
- Associated with aggressive behavior
- Consider adjuvant radiation therapy
- Mohs with PNI stains (S100) for high-risk cases

## Tumor Microenvironment
- BCCs often have dense stromal component
- Stromal-tumor interactions regulate growth
- Cancer-associated fibroblasts produce growth factors
- Immune infiltration variable, may predict HPI response`,
      keyTerms: [
        { term: 'primary cilium', definition: 'Non-motile cellular appendage essential for Hedgehog signal transduction' },
        { term: 'SUFU', definition: 'Suppressor of Fused - negative regulator of Hedgehog pathway, sequesters GLI proteins' },
        { term: 'sonidegib', definition: 'Second-generation SMO inhibitor for advanced BCC', pronunciation: 'soh-NID-eh-gib' },
        { term: 'cemiplimab', definition: 'Anti-PD-1 antibody approved for advanced BCC after Hedgehog inhibitor failure' },
        { term: 'D473', definition: 'SMO amino acid position commonly mutated in vismodegib resistance' },
      ],
      clinicalNotes: 'Acquired resistance to HPIs develops in approximately 20% of patients. SMO D473 mutations may respond to sonidegib. Cemiplimab offers option for HPI-refractory disease. Consider genetic testing for Gorlin syndrome in young patients or multiple BCCs.',
    },
    5: {
      level: 5,
      summary: 'Expert-level BCC management integrates molecular diagnostics, biomarker-driven therapy selection, novel therapeutic combinations, and multidisciplinary care for complex cases.',
      explanation: `## Precision Medicine Approaches

### Molecular Profiling
- Targeted NGS panels for Hedgehog pathway mutations
- SMO mutation analysis predicts HPI response
- PTCH1 vs SMO mutations may have different HPI sensitivity

### Biomarkers
**Predictive of HPI Response**:
- High Hedgehog pathway activation (GLI1 expression)
- Absence of downstream mutations (GLI2 amplification)
- Low non-canonical pathway activity

**Predictive of Immunotherapy Response**:
- High tumor mutation burden
- CD8+ T cell infiltration
- PD-L1 expression (less predictive than in melanoma)

## Emerging Therapies

### Next-Generation SMO Inhibitors
- Designed to overcome D473 resistance
- Taladegib and others in development
- Different binding modes may avoid cross-resistance

### GLI Inhibitors
- Arsenic trioxide: GLI2 inhibitor, clinical trials
- GANT61: Preclinical compound
- Targeting downstream may overcome SMO resistance

### Combination Strategies
**HPI + PI3K Inhibitor**:
- Rationale: Overcome PI3K pathway-mediated resistance
- Phase I/II trials ongoing

**HPI + Immunotherapy**:
- Synergistic anti-tumor effects in preclinical models
- Hedgehog inhibition may enhance T cell infiltration
- Clinical trials evaluating combinations

**HPI + Targeted Therapy**:
- EGFR inhibitors combination
- CDK4/6 inhibitors combination

### Intralesional Therapies
- Intralesional 5-FU
- Intralesional MTX
- Photodynamic therapy with ALA/MAL
- Options for superficial or multifocal disease

## Complex Clinical Scenarios

### Extensive Facial BCC
- Multidisciplinary approach essential
- Neoadjuvant HPI may reduce surgical morbidity
- Mohs surgery for margin control
- Reconstructive surgery planning
- Consider orbital exenteration counseling if periocular

### Organ Transplant Recipients
- 65-fold increased BCC risk
- More aggressive behavior
- Immunosuppression reduction when possible
- mTOR inhibitor switch (sirolimus) reduces skin cancer risk
- Acitretin chemoprevention

### Gorlin Syndrome Management
- Lifetime surveillance essential
- Minimize UV and ionizing radiation
- HPIs highly effective but chronic use challenging
- Nicotinamide for chemoprevention (emerging evidence)
- Genetic counseling for family

### Locally Advanced Unresectable BCC
1. HPI therapy first-line
2. If response, consider surgery for residual disease
3. If PD or intolerance, switch to immunotherapy
4. Radiation for palliation or consolidation
5. Clinical trials for novel combinations

## Quality of Life and Survivorship

### HPI Toxicity Management
- Muscle spasms: Hydration, calcium, magnesium
- Alopecia: Temporary, reversible after discontinuation
- Dysgeusia: Zinc supplementation, flavor modification
- Drug holidays may be feasible for stable disease

### Long-term Surveillance
- High recurrence risk: 5-year follow-up minimum
- New primary BCC risk: Annual skin exams indefinitely
- Patient self-examination education
- Photo documentation of concerning lesions

### Prevention Strategies
**Primary Prevention**:
- Sun protection counseling
- Sunscreen use (SPF 30+, broad spectrum)
- Protective clothing, hats

**Secondary Prevention (Chemoprevention)**:
- Acitretin: Reduces new SCC, possibly BCC
- Nicotinamide: 500mg BID, reduces BCC/SCC in high-risk
- T4N5 liposomal lotion: DNA repair, XP patients

## Future Directions

### Neoadjuvant HPI
- Tumor shrinkage before surgery
- Enable less morbid procedures
- Window-of-opportunity trials ongoing

### Biomarker Development
- Liquid biopsy for monitoring
- Predictive markers for treatment selection
- Resistance monitoring

### Novel Targets
- WNT pathway inhibitors
- Epigenetic modifiers
- BET bromodomain inhibitors`,
      keyTerms: [
        { term: 'taladegib', definition: 'Next-generation SMO inhibitor designed to overcome vismodegib resistance' },
        { term: 'GANT61', definition: 'Preclinical GLI inhibitor that directly blocks GLI-DNA binding' },
        { term: 'nicotinamide', definition: 'Vitamin B3 form that reduces skin cancer risk through enhanced DNA repair' },
        { term: 'neoadjuvant', definition: 'Treatment given before the main treatment (usually surgery) to shrink tumor' },
        { term: 'acitretin', definition: 'Oral retinoid used for skin cancer chemoprevention in high-risk patients' },
      ],
      clinicalNotes: `Expert management considerations:
1. Neoadjuvant HPI can convert unresectable to resectable disease
2. Combination HPI + immunotherapy is under active investigation
3. Transplant recipients benefit from immunosuppression modification
4. Gorlin syndrome requires lifelong multidisciplinary surveillance
5. Chemoprevention (nicotinamide) should be considered for high-risk patients
6. Patient education on self-examination is critical for early detection of new primaries`,
    },
  },

  media: [
    {
      id: 'bcc-clinical-types',
      type: 'image',
      filename: 'bcc-clinical-types.jpg',
      title: 'BCC Clinical Subtypes',
      description: 'Clinical appearance of nodular, superficial, and morpheaform BCC',
    },
    {
      id: 'hedgehog-pathway',
      type: 'diagram',
      filename: 'hedgehog-pathway.svg',
      title: 'Hedgehog Signaling Pathway',
      description: 'Molecular diagram of Hedgehog pathway and therapeutic targets',
    },
  ],

  citations: [
    {
      id: 'nccn-bcc',
      type: 'website',
      title: 'NCCN Guidelines for Basal Cell Skin Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1416',
    },
    {
      id: 'aad-bcc',
      type: 'website',
      title: 'Basal Cell Carcinoma Guidelines',
      source: 'American Academy of Dermatology',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-squamous-cell-carcinoma', targetType: 'condition', relationship: 'related', label: 'Squamous Cell Carcinoma' },
    { targetId: 'dermatology-sun-protection', targetType: 'topic', relationship: 'related', label: 'Sun Protection' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['oncology', 'dermatology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default basalCellCarcinomaContent;
