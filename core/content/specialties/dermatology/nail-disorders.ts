/**
 * Nail Disorders - Comprehensive Educational Content
 *
 * Covers nail anatomy, common nail conditions, and management.
 */

import { EducationalContent } from '../../types';

export const nailDisordersContent: EducationalContent = {
  id: 'dermatology-nail-disorders',
  type: 'condition',
  name: 'Nail Disorders',
  alternateNames: ['Nail Diseases', 'Onychopathies', 'Nail Abnormalities'],

  levels: {
    1: {
      level: 1,
      summary: 'Nails can show many different problems, from fungal infections to signs of other health conditions.',
      explanation: `Your nails protect your fingertips and toes and help you pick up small objects. When something goes wrong with your nails, it can be uncomfortable and sometimes a sign of other health problems.

**Common Nail Problems:**

**Fungal Nail Infection (Onychomycosis)**
- The most common nail problem
- Makes nails thick, yellow, and crumbly
- More common in toenails
- Takes months to treat

**Ingrown Nails**
- Nail grows into the skin
- Painful, red, and sometimes infected
- Most common in big toes
- Often from improper nail cutting

**Nail Psoriasis**
- Pitting (tiny dents) in nails
- Nails may separate from nail bed
- Associated with skin psoriasis

**Brittle Nails**
- Nails that split, crack, or break easily
- Common with aging and frequent hand washing
- May indicate thyroid problems

**What Your Nails Can Tell You:**
- White spots: Usually from minor injury
- Horizontal ridges: May indicate past illness
- Spoon-shaped nails: Can indicate iron deficiency
- Yellow nails: May be fungal infection or lung disease

**Taking Care of Your Nails:**
- Keep nails clean and trimmed
- Cut nails straight across, not curved
- Wear protective gloves for wet work
- Do not bite or pick at nails`,
      keyTerms: [
        { term: 'nail', definition: 'The hard covering that protects the tips of your fingers and toes' },
        { term: 'fungal infection', definition: 'An infection caused by tiny organisms called fungi' },
        { term: 'ingrown nail', definition: 'When the edge of a nail grows into the skin' },
      ],
      analogies: [
        'Your nail is like a shield protecting the sensitive tip of your finger.',
        'Fungal nail infection spreads like mold growing on bread - slowly but persistently.',
      ],
      examples: [
        'A runner notices his toenail turning thick and yellow after wearing sweaty shoes - likely a fungal infection.',
        'A woman who bites her nails develops painful redness around her fingernails.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nail disorders include infectious, inflammatory, traumatic, and systemic conditions, requiring systematic evaluation for accurate diagnosis and treatment.',
      explanation: `Nails are specialized epidermal appendages that can reflect local disease and systemic health conditions.

## Nail Anatomy
- **Nail plate**: Keratinized structure
- **Nail matrix**: Produces nail plate
- **Nail bed**: Supports nail plate
- **Lunula**: Visible matrix ("half moon")
- **Cuticle**: Seals proximal nail fold
- **Hyponychium**: Seals distal nail

## Common Nail Disorders

### Onychomycosis (Fungal Nail)
- 10% of population affected
- Dermatophytes (T. rubrum most common)
- Subtypes: Distal lateral subungual (most common), white superficial, proximal subungual

**Clinical Features**:
- Discoloration (yellow, brown, white)
- Thickening, crumbling
- Subungual debris
- Onycholysis (separation from bed)

**Treatment**:
- Oral terbinafine (most effective)
- Oral itraconazole
- Topical efinaconazole, tavaborole
- Duration: 6 weeks (fingernails), 12 weeks (toenails)

### Nail Psoriasis
- 50% of psoriasis patients have nail involvement
- May be only manifestation

**Features**:
- Pitting (ice-pick depressions)
- Oil spots (salmon patches)
- Onycholysis
- Subungual hyperkeratosis
- Nail plate crumbling

### Paronychia
**Acute**: Bacterial (S. aureus), painful, purulent
**Chronic**: Candida, occupation-related (wet work)

### Ingrown Nail (Onychocryptosis)
- Lateral nail plate penetrates nail fold
- Pain, swelling, granulation tissue
- Treatment: Proper cutting, nail avulsion if severe

## Nail Signs of Systemic Disease
| Finding | Associated Condition |
|---------|---------------------|
| Koilonychia (spoon nails) | Iron deficiency |
| Clubbing | Lung disease, heart disease, IBD |
| Beau's lines | Past systemic illness |
| Terry's nails (white) | Cirrhosis, heart failure |
| Lindsay's nails (half-and-half) | Chronic kidney disease |
| Yellow nail syndrome | Lymphedema, lung disease |

## Diagnostic Approach
- History: Duration, trauma, systemic symptoms
- Examination: All 20 nails
- KOH prep / culture for fungal
- Biopsy if malignancy suspected
- Blood tests for systemic signs`,
      keyTerms: [
        { term: 'onychomycosis', definition: 'Fungal infection of the nail', pronunciation: 'on-ee-koh-my-KOH-sis' },
        { term: 'onycholysis', definition: 'Separation of nail plate from nail bed', pronunciation: 'on-ee-KOL-ih-sis' },
        { term: 'paronychia', definition: 'Infection of the skin around the nail', pronunciation: 'pair-oh-NIK-ee-ah' },
        { term: 'clubbing', definition: 'Bulbous enlargement of fingertips with curved nails' },
        { term: 'koilonychia', definition: 'Spoon-shaped nails, often from iron deficiency', pronunciation: 'koi-loh-NIK-ee-ah' },
      ],
      analogies: [
        'The nail matrix is like a factory that continuously produces nail plate material.',
        'Beau\'s lines are like tree rings - they record when growth was disrupted.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nail disorders require understanding of nail unit biology, infection patterns, inflammatory mechanisms, and recognition of nail signs indicating systemic disease.',
      explanation: `## Nail Unit Biology

### Nail Plate Formation
- Matrix keratinocytes produce hard keratin
- Proximal matrix → dorsal nail plate
- Distal matrix → ventral nail plate
- Nail bed contributes minimally

### Growth Rates
- Fingernails: ~3mm/month
- Toenails: ~1mm/month
- Complete replacement: 6 months (finger), 12-18 months (toe)
- Factors: Age, nutrition, blood flow, season

### Nail Keratins
- Hard (alpha) keratins: K85, K86
- High sulfur content (cysteine)
- Cross-linked structure
- Different from epidermal keratins

## Onychomycosis Deep Dive

### Subtypes
**Distal Lateral Subungual (DLSO)**:
- Most common pattern
- Invasion via hyponychium
- Spreads proximally under nail plate

**White Superficial (WSO)**:
- Invasion of dorsal nail plate
- Usually T. mentagrophytes
- Opaque white patches

**Proximal Subungual (PSO)**:
- Rare in immunocompetent
- Common in HIV/immunocompromised
- Invasion via proximal nail fold

**Total Dystrophic**:
- End-stage of any pattern
- Complete nail destruction

### Diagnostic Confirmation
- KOH preparation (60-80% sensitivity)
- Fungal culture (gold standard, weeks for results)
- PAS staining of nail clippings
- PCR (emerging, faster)

### Treatment Selection
| Severity | Treatment | Cure Rate |
|----------|-----------|-----------|
| Mild (<50% involvement) | Topical (efinaconazole) | 15-35% |
| Moderate-severe | Oral terbinafine | 70-80% |
| Recalcitrant | Combination oral + topical | Higher |

### Drug Specifics
**Terbinafine**:
- 250mg daily for 6/12 weeks
- Hepatotoxicity monitoring
- Drug interactions: CYP2D6

**Itraconazole**:
- Pulse dosing (200mg BID x 1 week/month)
- Multiple drug interactions (CYP3A4)
- Cardiac caution (negative inotrope)

## Nail Psoriasis Pathophysiology

### Nail Unit Involvement
- Matrix disease → pitting, dystrophy
- Nail bed disease → onycholysis, oil spots, hyperkeratosis
- Hyponychium → splinter hemorrhages

### Treatment Ladder
1. Topical steroids, vitamin D analogs
2. Intralesional triamcinolone (matrix)
3. Systemic therapy (biologics effective)

### Psoriatic Arthritis Association
- Nail psoriasis strongly associated with PsA
- May precede joint symptoms
- Screening indicated

## Nail Tumors

### Benign
- Myxoid cyst (mucous cyst)
- Glomus tumor (paroxysmal pain)
- Subungual exostosis
- Periungual fibroma (tuberous sclerosis)

### Malignant
**Subungual Melanoma**:
- Most serious nail tumor
- Hutchinson sign: Periungual pigmentation
- Amelanotic variant exists
- Biopsy any pigmented band >3mm or growing

**Squamous Cell Carcinoma**:
- HPV-related in many cases
- Mimics warts, chronic paronychia
- Biopsy non-healing lesions

## Nail Manifestations of Systemic Disease

### Mechanism of Beau's Lines
- Temporary matrix dysfunction
- Transverse groove in nail
- Grows out over months
- All nails affected = systemic event

### Clubbing Pathophysiology
- Increased vascularity, connective tissue
- Hypoxia hypothesis (not fully proven)
- Platelet-derived growth factor theory
- Prostaglandin elevation

### Nail Changes in Dermatomyositis
- Periungual telangiectasia
- Ragged cuticles
- Cuticular hemorrhage
- Similar to lupus nailfold changes`,
      keyTerms: [
        { term: 'nail matrix', definition: 'Tissue beneath proximal nail fold that produces nail plate' },
        { term: 'hyponychium', definition: 'Skin beneath free edge of nail that seals nail bed' },
        { term: 'Hutchinson sign', definition: 'Periungual pigmentation suggesting subungual melanoma' },
        { term: 'Beau lines', definition: 'Transverse grooves in nails from temporary growth disruption' },
        { term: 'glomus tumor', definition: 'Benign vascular tumor causing severe paroxysmal nail pain' },
      ],
      clinicalNotes: 'Always confirm onychomycosis diagnosis before treating - only 50% of dystrophic nails are fungal. Any new or changing pigmented nail band in adults requires biopsy. Nail psoriasis correlates with psoriatic arthritis risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced nail disorder management requires understanding of molecular keratin biology, complex infection patterns, tumor biology, and integration of nail findings with systemic disease.',
      explanation: `## Molecular Biology of Nail Formation

### Keratinocyte Differentiation
- Matrix keratinocytes have unique differentiation program
- Hard keratins (trichocyte keratins): K31-K40, K81-K86
- Keratin-associated proteins (KAPs) rich in cysteine/glycine
- Cross-linking by transglutaminases

### Signaling Pathways
**Wnt/Beta-catenin**:
- Essential for nail fate determination
- Loss → absence of nails (anonychia)
- R-spondin 4 (RSPO4) mutations cause anonychia

**Bone Morphogenetic Proteins (BMPs)**:
- Regulate nail vs claw development
- BMP signaling from nail bed

### Genetic Nail Disorders
| Gene | Disorder | Nail Phenotype |
|------|----------|----------------|
| RSPO4 | Anonychia | Absent nails |
| KRT6A/6B/16/17 | Pachyonychia congenita | Thickened nails |
| COL7A1 | Dystrophic EB | Nail loss, dystrophy |
| DSP | Carvajal syndrome | Woolly hair, nail dystrophy |

## Advanced Onychomycosis Management

### Dermatophyte Biology
- Keratin degradation via keratinases
- Invasion of stratum corneum
- Biofilm formation in nail
- Explains treatment resistance

### Resistance Mechanisms
- Drug penetration through nail plate
- Biofilm protection
- Fungal efflux pumps
- Resistance emergence (terbinafine-resistant T. indotineae)

### Novel Approaches
**Laser Therapy**:
- Nd:YAG, diode lasers
- Fungistatic vs fungicidal debate
- FDA cleared but limited efficacy data
- Adjunctive role

**Photodynamic Therapy**:
- Photosensitizer + light
- Research setting primarily

**Nail Avulsion + Debridement**:
- Reduces fungal load
- Combined with topical therapy
- Useful for severe/resistant cases

### Recurrence Prevention
- Treat tinea pedis concurrently
- Antifungal shoe spray/powder
- Moisture control
- Prophylactic topical therapy

## Nail Psoriasis Advanced Treatment

### Biologic Response
| Agent | Target | Nail Efficacy |
|-------|--------|---------------|
| TNF inhibitors | TNFα | Moderate (NAPSI improvement) |
| IL-17 inhibitors | IL-17A | High efficacy |
| IL-23 inhibitors | IL-23p19 | Good efficacy |
| IL-12/23 | IL-12/23p40 | Moderate |

### Targeted Small Molecules
- Apremilast (PDE4 inhibitor): Modest nail benefit
- Deucravacitinib (TYK2 inhibitor): Emerging data

### Combination Strategies
- Biologic + intralesional steroid
- Systemic + topical vitamin D analog
- Address nail and skin simultaneously

## Nail Unit Tumors

### Subungual Melanoma
**Clinical Features**:
- Longitudinal melanonychia (pigmented band)
- Band width >3mm concerning
- Hutchinson sign
- Nail dystrophy/destruction

**ABCDEF Criteria for Nail Pigmentation**:
- **A**ge: Peak 5th-7th decade
- **B**and: Brown-black, breadth >3mm, irregular border
- **C**hange: Rapid enlargement
- **D**igit: Thumb > big toe > index finger
- **E**xtension: Hutchinson sign
- **F**amily history of melanoma

**Histopathology**:
- Matrix biopsy required
- Pagetoid spread
- Asymmetric melanocytic proliferation
- Cytologic atypia

### Onychomatricoma
- Benign tumor of matrix
- Yellow longitudinal band
- Splinter hemorrhages
- Woodworm cavities on dermoscopy

### Glomus Tumor
- Neuromyoarterial body tumor
- Severe lancinating pain
- Love's test (pressure sensitivity)
- Hildreth sign (pain relief with tourniquet)
- MRI for localization
- Surgical excision curative

## Complex Nail Presentations

### Twenty-Nail Dystrophy (Trachyonychia)
- All nails affected
- Sandpaper-like nails
- Children > adults
- Associated with alopecia areata, lichen planus, psoriasis
- Often self-limited in children

### Median Nail Dystrophy
- Longitudinal split or canal
- Habit-tic deformity (most common cause)
- From chronic trauma to proximal nail fold

### Nail-Patella Syndrome
- LMX1B mutations
- Triangular lunulae
- Absent/hypoplastic patellae
- Nephropathy
- Autosomal dominant`,
      keyTerms: [
        { term: 'hard keratins', definition: 'Type I and II keratins specific to hair and nails, highly cross-linked' },
        { term: 'pachyonychia congenita', definition: 'Genetic disorder with thickened nails due to keratin mutations' },
        { term: 'longitudinal melanonychia', definition: 'Pigmented streak in nail, requires evaluation for melanoma' },
        { term: 'onychomatricoma', definition: 'Benign nail matrix tumor causing yellow discoloration and cavities' },
        { term: 'trachyonychia', definition: 'Rough, sandpaper-like nail surface affecting multiple nails' },
      ],
      clinicalNotes: 'Emerging terbinafine-resistant dermatophytes require culture and susceptibility testing. IL-17 inhibitors show best efficacy for nail psoriasis. Any new melanonychia in adults requires biopsy - do not observe. Glomus tumors have characteristic clinical findings - MRI confirms location.',
    },
    5: {
      level: 5,
      summary: 'Expert-level nail disorder management integrates precision diagnostics, molecular therapeutics, surgical techniques, and multidisciplinary care for complex cases.',
      explanation: `## Precision Diagnostics

### Advanced Imaging
**Dermoscopy/Onychoscopy**:
- Pigmented lesions: Band width, color, Hutchinson sign
- Onychomycosis: Jagged edge, longitudinal striae, aurora borealis
- Nail psoriasis: Dilated capillaries, red lunula
- Tumors: Specific patterns

**Nail Ultrasound**:
- High-frequency (15-20 MHz)
- Nail plate thickness
- Tumor localization
- Treatment monitoring

**MRI Nails**:
- Best for subungual tumors
- Glomus tumor localization
- Melanoma depth assessment
- Pre-surgical planning

### Molecular Diagnostics
**PCR for Dermatophytes**:
- Rapid results (days vs weeks)
- High sensitivity/specificity
- Identifies species
- Limited resistance info

**Dermoscopy AI**:
- Automated melanonychia analysis
- Risk stratification
- Decision support
- Evolving technology

### Histopathology Techniques
**Nail Biopsy Methods**:
- Punch biopsy of nail plate
- Lateral longitudinal biopsy
- Matrix shave biopsy
- Excisional biopsy (tumors)

**Specialized Staining**:
- PAS: Fungi
- Fontana-Masson: Melanin
- S100, HMB45, Melan-A: Melanocytic tumors
- Cytokeratins: Epithelial tumors

## Novel Therapeutics

### Onychomycosis Pipeline
**Fosravuconazole**:
- Once-weekly oral dosing
- Phase III trials
- Convenient regimen

**Novel Topical Delivery**:
- Nail lacquers with penetration enhancers
- Liposomal formulations
- Iontophoresis-enhanced delivery

**Antifungal Peptides**:
- NP213 (defensin-like)
- Topical application
- Novel mechanism

### Nail Psoriasis Emerging Options
**JAK Inhibitors (Topical)**:
- Ruxolitinib, tofacitinib creams
- Direct nail application
- Investigational for nail psoriasis

**IL-36 Inhibitors**:
- Pustular psoriasis with nail involvement
- Spesolimab for GPP flares

### Regenerative Approaches
- Nail stem cell biology
- Tissue engineering
- Nail reconstruction after trauma
- Research stage

## Surgical Management

### Nail Surgery Principles
**Anesthesia**:
- Digital block (wing or ring)
- Epinephrine dilute safe in digits
- Tourniquet for hemostasis

**Partial Nail Avulsion**:
- Ingrown nail treatment
- Phenol matricectomy (permanent)
- Sodium hydroxide alternative

**Total Nail Avulsion**:
- Severe onychomycosis
- Tumor excision
- Combined with antifungal therapy

### Melanoma Surgery
**Matrix Biopsy**:
- Incisional or excisional depending on size
- Preserve matrix function if possible
- Complete excision for diagnosis

**Definitive Treatment**:
- Wide local excision
- Amputation: Level depends on tumor stage
- Sentinel lymph node biopsy consideration
- Referral to specialized center

### Reconstruction
- Secondary intention healing
- Split-thickness skin graft
- Nail bed graft
- Prosthetic nail

## Complex Clinical Scenarios

### Drug-Induced Nail Changes
| Drug Class | Nail Finding |
|------------|--------------|
| Chemotherapy | Beau's lines, onychomadesis |
| Retinoids | Brittle nails, paronychia |
| EGFR inhibitors | Paronychia, pyogenic granuloma |
| Anticoagulants | Splinter hemorrhages |
| Tetracyclines | Photoonycholysis |

### Nail Manifestations of Connective Tissue Disease
**Systemic Sclerosis**:
- Pterygium (scarring of nail fold to plate)
- Ragged cuticles
- Nail fold telangiectasia
- Raynaud phenomenon

**Dermatomyositis**:
- Cuticular hypertrophy
- Periungual erythema
- Dilated capillary loops

**Lupus Erythematosus**:
- Similar to DM
- May have periungual pigmentation
- Nail fold biopsy for vasculitis

### Pediatric Nail Disorders
**Twenty-Nail Dystrophy**:
- Often idiopathic in children
- May resolve spontaneously
- Alopecia areata association
- Conservative approach

**Congenital Malalignment**:
- Great toenail laterally deviated
- May self-correct
- Surgery if persistent/symptomatic

## Quality Metrics and Outcomes

### Treatment Success Definition
**Onychomycosis**:
- Complete cure: Negative culture + normal appearance
- Mycologic cure: Negative culture/microscopy
- Clinical cure: Normal nail appearance
- Relapse rates high (15-20% at 2 years)

### Nail Psoriasis Assessment
- NAPSI (Nail Psoriasis Severity Index)
- mNAPSI (modified)
- Patient-reported outcomes
- Photography for monitoring

### Research Directions
- Nail unit stem cells
- Bioengineered nail grafts
- Personalized treatment selection
- Prevention strategies for high-risk
- Nail microbiome`,
      keyTerms: [
        { term: 'onychoscopy', definition: 'Dermoscopic examination of nails for diagnostic evaluation' },
        { term: 'phenol matricectomy', definition: 'Chemical destruction of nail matrix for permanent narrowing' },
        { term: 'NAPSI', definition: 'Nail Psoriasis Severity Index - standardized scoring system' },
        { term: 'fosravuconazole', definition: 'Investigational once-weekly oral antifungal for onychomycosis' },
        { term: 'pterygium', definition: 'Scarring of proximal nail fold to nail plate, seen in lichen planus and scleroderma' },
      ],
      clinicalNotes: `Expert management pearls:
1. PCR-based fungal diagnosis enables rapid treatment initiation
2. Nail ultrasound and MRI valuable for tumor localization
3. Matrix biopsy requires expertise to minimize permanent damage
4. EGFR inhibitor-induced nail toxicity common - proactive management important
5. Nail psoriasis assessment (NAPSI) should be documented systematically
6. Subungual melanoma surgery requires referral to specialized center
7. Children's nail dystrophy often self-limited - conservative approach preferred`,
    },
  },

  media: [
    {
      id: 'nail-anatomy',
      type: 'diagram',
      filename: 'nail-unit-anatomy.svg',
      title: 'Nail Unit Anatomy',
      description: 'Cross-section of nail showing matrix, bed, plate, and surrounding structures',
    },
    {
      id: 'nail-findings',
      type: 'image',
      filename: 'nail-clinical-findings.jpg',
      title: 'Clinical Nail Findings',
      description: 'Various nail abnormalities and their diagnostic significance',
    },
  ],

  citations: [
    {
      id: 'jaad-onychomycosis',
      type: 'article',
      title: 'Guidelines of Care for the Management of Onychomycosis',
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'nail-surgery-text',
      type: 'textbook',
      title: 'Nail Surgery',
      source: 'Scher and Daniel\'s Nails: Diagnosis, Surgery, Therapy',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-hair-disorders', targetType: 'condition', relationship: 'related', label: 'Hair Disorders' },
    { targetId: 'dermatology-psoriasis', targetType: 'condition', relationship: 'related', label: 'Psoriasis' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'infectious-disease'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default nailDisordersContent;
