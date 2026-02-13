/**
 * Skin Lesion Morphology
 *
 * Understanding the classification and terminology of primary and secondary skin lesions,
 * distribution patterns, and descriptive dermatologic language.
 */

import { EducationalContent } from '../../types';

export const skinLesionMorphologyContent: EducationalContent = {
  id: 'dermatology-basics-lesion-morphology',
  type: 'concept',
  name: 'Skin Lesion Morphology',
  alternateNames: [
    'Skin Lesion Types',
    'Dermatological Terminology',
    'Primary and Secondary Lesions',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Doctors describe skin problems using specific words that tell them what the skin looks like - whether it is raised, flat, filled with fluid, or has other features.',
      explanation: `## What Are Skin Lesions?

A "lesion" is just a medical word for any area of skin that looks or feels different from normal skin. It could be a bump, rash, blister, or any change in the skin.

## Common Types of Skin Bumps and Spots

**Flat Spots:**
- **Macule** - A flat, colored spot smaller than a dime (like a freckle)
- **Patch** - A flat, colored area larger than a dime (like a birthmark)

**Raised Bumps:**
- **Papule** - A small, solid bump smaller than a pencil eraser (like a pimple)
- **Plaque** - A flat-topped raised area (like psoriasis patches)
- **Nodule** - A deeper, larger bump you can feel under the skin

**Fluid-Filled Bumps:**
- **Vesicle** - A tiny blister (like from poison ivy)
- **Bulla** - A larger blister (like from a bad burn)
- **Pustule** - A bump filled with pus/white fluid (like an infected pimple)

**Changes in Skin:**
- **Scale** - Flaky, peeling skin (like dandruff)
- **Crust** - Dried fluid on skin (like a scab)

## Why This Matters

When you tell your doctor "I have a rash," they need more details. Is it bumpy or flat? Does it have fluid? This helps them figure out what is causing the problem and how to treat it.`,

      keyTerms: [
        {
          term: 'Lesión',
          definition: 'Cualquier cambio en la piel que se ve o se siente diferente de la piel normal',
        },
        {
          term: 'Macule',
          definition: 'A flat, colored spot on the skin',
          pronunciation: 'MACK-yool',
        },
        {
          term: 'Vesicle',
          definition: 'A small blister filled with clear fluid',
          pronunciation: 'VEH-sick-ul',
        },
        {
          term: 'Pustule',
          definition: 'A bump filled with pus or white/yellow fluid',
          pronunciation: 'PUS-tule',
        },
      ],
      analogies: [
        'A macule is like a paint spot on paper - flat and just changing the color.',
        'A papule is like a small pebble under your skin - you can feel it raised up.',
        'A vesicle is like a tiny water balloon on your skin.',
        'A scale is like the flakes on a fish - layers peeling off.',
      ],
      examples: [
        'Freckles are macules - flat brown spots',
        'Mosquito bites are papules - small raised bumps',
        'Chicken pox creates vesicles - small blisters',
        'Acne pustules have white or yellow tops',
      ],
      patientCounselingPoints: [
        'Take photos of rashes to show changes over time',
        'Describe if it itches, hurts, or feels normal',
        'Tell your doctor when it started and if it is spreading',
        'Note if anything makes it better or worse',
      ],
    },

    2: {
      level: 2,
      summary:
        'Dermatological lesions are classified as primary (original lesions) or secondary (changes from primary lesions). Understanding this terminology is essential for describing skin findings accurately.',
      explanation: `## Primary Lesions

Primary lesions are the original skin changes that appear first.

**Flat Lesions (Non-Palpable):**
- **Macule** - <1 cm, flat, color change only (freckle, flat mole)
- **Patch** - >1 cm, flat, color change only (vitiligo, café-au-lait spot)

**Elevated Solid Lesions (Palpable):**
- **Papule** - <1 cm, raised, solid (wart, mole, acne)
- **Plaque** - >1 cm, raised, flat-topped (psoriasis, eczema patches)
- **Nodule** - >1 cm, firm, extends into dermis (lipoma, dermatofibroma)
- **Tumor** - >2 cm, may be benign or malignant
- **Wheal** - Transient, edematous papule/plaque (hives, insect bites)

**Fluid-Filled Lesions:**
- **Vesicle** - <0.5 cm, clear fluid (herpes, chickenpox)
- **Bulla** - >0.5 cm, clear fluid (blister, pemphigus)
- **Pustule** - Any size, purulent fluid (acne, folliculitis)

## Secondary Lesions

Secondary lesions result from changes to primary lesions.

**Loss of Skin:**
- **Erosion** - Loss of epidermis only, heals without scar
- **Ulcer** - Loss of epidermis and dermis, may scar
- **Excoriation** - Scratch mark from trauma
- **Fissure** - Linear crack in skin (chapped lips)

**Material on Skin:**
- **Scale** - Excess dead skin cells (psoriasis, ichthyosis)
- **Crust** - Dried serum, blood, or pus (impetigo)

**Thickening:**
- **Lichenification** - Thickened skin with accentuated lines (chronic scratching)

**Scarring:**
- **Atrophy** - Thinning of skin (steroid use)
- **Scar** - Fibrous tissue replacing normal skin

## Distribution Patterns

**Localized** - Limited to one area
**Regional** - Specific anatomic area
**Generalized** - Widespread
**Universal** - Entire body surface

**Configuration:**
- Linear - In a line (contact dermatitis from plant)
- Annular - Ring-shaped (ringworm)
- Grouped/Clustered - Together in groups (herpes)
- Dermatomal - Following nerve distribution (shingles)`,

      keyTerms: [
        {
          term: 'Lesión primaria',
          definition: 'La lesión original de la piel que aparece primero',
        },
        {
          term: 'Lesión secundaria',
          definition: 'Cambios que ocurren en las lesiones primarias con el tiempo',
        },
        {
          term: 'Palpable',
          definition: 'Can be felt or touched; has substance',
          pronunciation: 'PAL-puh-bul',
        },
        {
          term: 'Wheal',
          definition: 'Temporary raised swelling from fluid in dermis',
          pronunciation: 'WEEL',
        },
        {
          term: 'Erosion',
          definition: 'Shallow loss of skin affecting only the top layer',
          pronunciation: 'ee-ROH-zhun',
        },
        {
          term: 'Lichenification',
          definition: 'Thickened skin with visible skin lines from chronic rubbing',
          pronunciation: 'ly-ken-ih-fih-KAY-shun',
        },
        {
          term: 'Annular',
          definition: 'Ring-shaped lesion pattern',
          pronunciation: 'AN-yoo-lar',
        },
        {
          term: 'Dermatomal',
          definition: 'Following the distribution of a sensory nerve',
          pronunciation: 'der-mah-TOH-mal',
        },
      ],
      analogies: [
        'Primary lesions are like the original problem; secondary lesions are what happens after.',
        'An erosion is like removing the top layer of a cake; an ulcer cuts deeper into the layers.',
        'Lichenification is like leather that gets thicker and rougher with use.',
        'Annular lesions look like a ring or donut.',
      ],
      examples: [
        'Macule: Freckle, flat mole, vitiligo spot',
        'Papule: Acne bump, wart, insect bite',
        'Vesicle: Cold sore, chickenpox',
        'Scale: Psoriasis, dandruff',
        'Annular pattern: Ringworm, granuloma annulare',
        'Dermatomal: Shingles rash',
      ],
      clinicalNotes:
        'Accurate description of lesion morphology is the foundation of dermatologic diagnosis. Always measure lesions in centimeters. Describe: size, shape, color, texture, distribution, configuration, and any associated symptoms.',
    },

    3: {
      level: 3,
      summary:
        'Systematic evaluation of cutaneous lesions requires precise morphologic classification, spatial distribution analysis, and understanding of arrangement patterns. This framework guides differential diagnosis.',
      explanation: `## Primary Lesion Classification

**Macules and Patches (Non-Elevated):**
- Circumscribed color change without surface change
- Vascular: Erythema, purpura (non-blanchable), telangiectasia
- Pigmented: Melanocytic (café-au-lait), post-inflammatory hyperpigmentation
- Depigmented: Vitiligo, pityriasis alba
- Size: <1 cm (macule), >1 cm (patch)

**Papules and Plaques (Elevated, Palpable):**
- Papule: Solid, <1 cm (dome-shaped, flat-topped, pedunculated)
- Plaque: Solid, >1 cm, may result from papule confluence
- Surface: Smooth, verrucous, scaly, umbilicated
- Consistency: Soft, firm, hard

**Deep Lesions:**
- Nodule: Solid, palpable, 0.5-2 cm, extends into dermis/subcutis
- Tumor: >2 cm, benign or malignant
- Cyst: Encapsulated, fluid-filled, movable

**Transient Lesions:**
- Wheal: Edematous, transient (<24 hours), often pruritic
- Dermatographism: Wheal induced by stroking skin

**Fluid-Filled Lesions:**
- Vesicle: <0.5 cm, clear fluid (intraepidermal or subepidermal)
- Bulla: >0.5 cm, large blister
- Pustule: Purulent fluid (follicular or non-follicular)
- Abscess: Localized collection of pus in dermis/subcutis

## Secondary Lesions

**Scales:**
- Hyperkeratosis/parakeratosis
- Types: Micaceous (silvery-psoriasis), ichthyosiform (fish-like), pityriasiform (fine)

**Loss of Tissue:**
- Erosion: Partial epidermal loss, moist, heals without scar
- Excoriation: Linear erosion from scratching
- Ulcer: Full-thickness loss (epidermis + dermis), may scar
- Fissure: Linear crack (xerosis, chronic inflammation)

**Accumulation of Material:**
- Crust: Dried exudate (serum=honey-colored; blood=dark; pus=yellow)
- Callus: Hyperkeratosis from friction
- Horn: Conical keratin projection

**Textural Changes:**
- Atrophy: Thinning (epidermal, dermal, or subcutaneous)
- Lichenification: Thickening with accentuated skin lines
- Induration: Firmness from dermal thickening
- Sclerosis: Hardening from increased collagen

**Repair:**
- Scar: Hypertrophic (raised), atrophic (depressed), keloid (beyond original boundary)

## Configuration and Distribution

**Arrangement:**
- Linear: Koebner phenomenon, contact, external trauma
- Annular: Central clearing (tinea, granuloma annulare)
- Arcuate: Partial ring
- Polycyclic: Multiple interconnected rings
- Serpiginous: Snake-like
- Reticular: Net-like
- Grouped/Herpetiform: Clustered vesicles

**Distribution:**
- Sun-exposed areas: Photosensitivity disorders
- Intertriginous: Inverse psoriasis, candidiasis
- Extensor surfaces: Psoriasis
- Flexural surfaces: Atopic dermatitis
- Acral: Hands and feet
- Dermatomal: Herpes zoster
- Blaschkoid: Developmental lines

## Descriptive Terms

**Color:**
- Erythematous, violaceous, hyperpigmented, hypopigmented, flesh-colored

**Surface:**
- Smooth, verrucous (wart-like), papillomatous, keratotic

**Border:**
- Well-demarcated, ill-defined, irregular, scalloped

**Special Features:**
- Koebner phenomenon: Lesions at sites of trauma
- Auspitz sign: Pinpoint bleeding when scale removed (psoriasis)
- Darier sign: Wheal formation when rubbed (mastocytosis)
- Nikolsky sign: Blister extension with lateral pressure (pemphigus)`,

      keyTerms: [
        {
          term: 'Purpura',
          definition: 'Non-blanchable red/purple macule from blood extravasation',
          pronunciation: 'PUR-pur-ah',
        },
        {
          term: 'Telangiectasia',
          definition: 'Dilated superficial blood vessels visible on skin',
          pronunciation: 'tel-AN-jee-ek-TAY-zhuh',
        },
        {
          term: 'Pedunculated',
          definition: 'Attached by a stalk or stem',
          pronunciation: 'peh-DUNK-yoo-lay-ted',
        },
        {
          term: 'Umbilicated',
          definition: 'Having a central depression (like a belly button)',
          pronunciation: 'um-BIL-ih-kay-ted',
        },
        {
          term: 'Dermatographism',
          definition: 'Skin writing - wheal formation from stroking skin',
          pronunciation: 'der-mah-toh-GRAF-izm',
        },
        {
          term: 'Koebner phenomenon',
          definition: 'Lesions developing at sites of trauma',
          pronunciation: 'KEB-ner',
        },
        {
          term: 'Blaschkoid',
          definition: 'Following Blaschko lines - developmental growth patterns',
          pronunciation: 'BLASH-koyd',
        },
        {
          term: 'Intertriginous',
          definition: 'In skin fold areas (axillae, groin, under breasts)',
          pronunciation: 'in-ter-TRIJ-ih-nus',
        },
      ],
      analogies: [
        'A macule is like food coloring in water - changes color but not texture.',
        'A papule is like a pearl under fabric - you can see and feel the elevation.',
        'An annular lesion is like a smoke ring - active at the edges, clear in center.',
        'Koebner phenomenon is like a path appearing where you walk in grass.',
      ],
      examples: [
        'Macule: Café-au-lait spot in neurofibromatosis',
        'Patch: Vitiligo depigmentation',
        'Papule: Lichen planus violaceous papules',
        'Plaque: Psoriatic plaque with silvery scale',
        'Vesicle: Herpes simplex grouped vesicles',
        'Linear: Poison ivy contact dermatitis',
        'Annular: Tinea corporis',
        'Dermatomal: Herpes zoster',
      ],
      clinicalNotes:
        'The morphologic approach to diagnosis: (1) Identify primary lesion type, (2) Note distribution pattern, (3) Assess configuration, (4) Look for secondary changes, (5) Apply clinical context. Biopsy site selection should include a well-developed primary lesion when possible.',
    },

    4: {
      level: 4,
      summary:
        'Advanced lesion morphology incorporates histopathologic correlation, recognizes patterns with diagnostic specificity, and understands pathophysiologic mechanisms underlying morphologic features.',
      explanation: `## Morphology-Histopathology Correlation

**Macule/Patch Histology:**
- Vascular: Dilated vessels (telangiectasia), extravasated RBCs (purpura)
- Melanocytic: Increased melanin (basilar or dermal), melanocyte proliferation
- Pigment alteration: Melanin absence (vitiligo), hemosiderin (purpura)

**Papule Histopathology:**
- Epidermal: Hyperkeratosis, acanthosis (verruca)
- Dermal infiltrate: Inflammatory cells, neoplastic cells
- Deposition: Mucin (mucinosis), amyloid

**Vesicle/Bulla Level:**
- Subcorneal: Impetigo, pemphigus foliaceus
- Intraepidermal: Pemphigus vulgaris (suprabasal), spongiotic dermatitis
- Subepidermal: Bullous pemphigoid, dermatitis herpetiformis, porphyria cutanea tarda

**Pustule Contents:**
- Neutrophilic: Bacterial folliculitis, psoriasis
- Eosinophilic: Drug eruptions, pemphigus
- Sterile: Psoriasis, pustular dermatoses

## Pattern Recognition

**Lichenoid Pattern:**
- Band-like infiltrate at dermoepidermal junction
- Basal layer damage
- Conditions: Lichen planus, lichenoid drug eruption, lupus erythematosus

**Psoriasiform Pattern:**
- Regular elongated rete ridges
- Confluent parakeratosis
- Dilated capillaries, neutrophilic microabscesses
- Conditions: Psoriasis, chronic spongiotic dermatitis, Reiter syndrome

**Spongiotic Pattern:**
- Intercellular edema in epidermis
- Vesicle formation possible
- Conditions: Eczematous dermatitis, contact dermatitis

**Vasculitic Pattern:**
- Vessel wall inflammation
- Fibrinoid necrosis
- RBC extravasation
- Conditions: Leukocytoclastic vasculitis, urticarial vasculitis

**Granulomatous Pattern:**
- Epithelioid histiocytes
- Giant cells (foreign body, Langhans, Touton)
- Conditions: Sarcoidosis, granuloma annulare, tuberculosis

## Specialized Diagnostic Signs

**Auspitz Sign (Psoriasis):**
- Mechanism: Dilated dermal papillary vessels beneath thin epidermis
- Removal of scale → pinpoint bleeding

**Nikolsky Sign (Pemphigus, TEN):**
- Type 1: Lateral pressure extends blister
- Type 2: Pressure on normal skin induces separation
- Mechanism: Loss of intercellular adhesion (pemphigus) or DEJ separation (TEN)

**Darier Sign (Mastocytosis):**
- Mechanism: Mast cell degranulation with rubbing → wheal
- Urtication at site of lesion

**Wickham Striae (Lichen Planus):**
- White reticular pattern on surface
- Seen with magnification or dermoscopy
- Mechanism: Irregular acanthosis and orthokeratosis

## Distribution Pattern Significance

**Photodistribution:**
- Face (sparing nasolabial folds, submental), V-neck, dorsal hands/forearms
- Lupus, dermatomyositis, photosensitivity
- Consider: Wavelength (UVB vs UVA), photocontact allergens, drug photosensitivity

**Dermatomal:**
- Herpes zoster (reactivation from dorsal root ganglion)
- Sensory neuropathy patterns
- Rarely: metastatic disease along nerves

**Intertriginous:**
- Increased temperature, moisture, friction
- Inverse psoriasis, candidiasis, Hailey-Hailey disease
- Skin-fold-specific conditions

**Koebner Phenomenon (Isomorphic Response):**
- Lesions at trauma sites
- Conditions: Psoriasis, vitiligo, lichen planus, warts
- Mechanism: Loss of immune privilege or altered wound healing response

## Advanced Morphologic Assessment

**Dermoscopy Findings:**
- Vascular patterns: Dotted, linear, arborizing
- Pigment patterns: Network, globules, streaks
- Structures: Keratin plugs, milia-like cysts

**Diascopy:**
- Glass slide pressure blanches erythema but not purpura
- "Apple jelly" appearance in sarcoid/TB (granulomas)

**Wood Lamp Examination:**
- Pigment assessment (vitiligo, melasma)
- Fluorescence: Erythrasma (coral red), Pseudomonas (green), porphyrins (pink)`,

      keyTerms: [
        {
          term: 'Acanthosis',
          definition: 'Thickening of the epidermis, increased spinous layer',
          pronunciation: 'ak-an-THOH-sis',
        },
        {
          term: 'Spongiosis',
          definition: 'Intercellular edema in epidermis causing separation',
          pronunciation: 'spon-jee-OH-sis',
        },
        {
          term: 'Parakeratosis',
          definition: 'Retention of nuclei in stratum corneum (abnormal)',
          pronunciation: 'par-ah-ker-ah-TOH-sis',
        },
        {
          term: 'Lichenoid',
          definition: 'Band-like inflammatory infiltrate at dermoepidermal junction',
          pronunciation: 'ly-KEN-oyd',
        },
        {
          term: 'Fibrinoid necrosis',
          definition: 'Death of tissue with fibrin deposition in vessel walls',
          pronunciation: 'FY-brih-noyd',
        },
        {
          term: 'Epithelioid histiocyte',
          definition: 'Activated macrophage with epithelium-like appearance',
          pronunciation: 'ep-ih-THEE-lee-oyd HIS-tee-oh-site',
        },
        {
          term: 'Dermoepidermal junction',
          definition: 'Interface between epidermis and dermis (basement membrane zone)',
          pronunciation: 'der-moh-ep-ih-DER-mal',
        },
        {
          term: 'Diascopy',
          definition: 'Pressing glass slide on skin to assess blanching',
          pronunciation: 'dy-AS-koh-pee',
        },
      ],
      analogies: [
        'Acanthosis is like thickening the walls of a building - more layers of bricks.',
        'Spongiosis is like a sponge soaking up water - cells separating with fluid between.',
        'A lichenoid pattern is like a band of protesters at a border - inflammation at the junction.',
        'Granuloma formation is like surrounding and walling off an enemy.',
      ],
      examples: [
        'Subcorneal blister: Impetigo with fragile pustules',
        'Suprabasal blister: Pemphigus vulgaris with positive Nikolsky',
        'Subepidermal blister: Bullous pemphigoid with tense bullae',
        'Lichenoid pattern: Lichen planus with Wickham striae',
        'Granulomatous: Sarcoidosis with apple-jelly nodules on diascopy',
      ],
      clinicalNotes:
        'Blister level determination is critical: (1) Subcorneal - usually fragile, superficial, (2) Intraepidermal - vary with level, (3) Subepidermal - tense, deep. Direct immunofluorescence patterns distinguish autoimmune blistering diseases. Consider systemic associations with specific morphologic patterns.',
    },

    5: {
      level: 5,
      summary:
        'Comprehensive understanding of lesion morphology integrates clinical observation, dermoscopic analysis, histopathology, immunofluorescence, and molecular diagnostics to achieve precise diagnosis and guide targeted therapy.',
      explanation: `## Advanced Morphologic-Molecular Correlations

**Blister Formation Mechanisms:**

*Pemphigus Group (Intraepidermal):*
- Acantholysis via anti-desmoglein antibodies
- PVG (pemphigus vulgaris): DSG3 (mucosa + skin), DSG1 (skin)
- PFO (pemphigus foliaceus): DSG1 (subcorneal)
- DIF: Intercellular IgG, C3 ("fishnet" pattern)
- Pathomechanism: Steric hindrance, signal transduction, apoptosis

*Pemphigoid Group (Subepidermal):*
- Bullous pemphigoid: Anti-BP180, BP230 (hemidesmosomes)
- Mucous membrane pemphigoid: Anti-BP180, laminin-332, type VII collagen
- Epidermolysis bullosa acquisita: Anti-type VII collagen
- DIF: Linear basement membrane zone IgG/C3

*Dermatitis Herpetiformis:*
- IgA deposits in dermal papillae
- Associated with celiac disease (HLA-DQ2/DQ8)
- Mechanism: Tissue transglutaminase autoantibodies

**Inflammatory Pattern Analysis:**

*Interface Dermatitis Spectrum:*
- Vacuolar: Lupus erythematosus, dermatomyositis, erythema multiforme
- Lichenoid: Lichen planus, lichenoid drug eruption, GVHD
- Mechanism: Cytotoxic T cell-mediated keratinocyte damage
- Apoptotic keratinocytes (Civatte bodies)

*Spongiotic Dermatitis Differentiation:*
- Acute: Marked spongiosis, vesiculation
- Subacute: Moderate spongiosis, acanthosis
- Chronic: Minimal spongiosis, lichenification
- Eosinophils: Allergic contact dermatitis, drug reaction
- Specific: Pityriasis rosea (dyskeratotic cells), nummular (exocytosis)

*Psoriasiform Pattern Variants:*
- Psoriasis: Regular acanthosis, confluent parakeratosis, Munro microabscesses
- Seborrheic dermatitis: Shoulder parakeratosis around follicles
- Pityriasis rubra pilaris: Alternating ortho/parakeratosis
- Genetic: PSORS loci, IL-23/IL-17 pathway genes

**Vasculopathy Patterns:**

*Small Vessel:**
- Leukocytoclastic vasculitis: Neutrophils, fibrinoid necrosis, RBC extravasation
- Palpable purpura distribution: Gravity-dependent
- Associations: HSP, infection, drugs, connective tissue disease

*Medium Vessel:**
- Polyarteritis nodosa: Transmural inflammation, aneurysm, ischemia
- Livedo pattern, ulceration, nodules

*Large Vessel:**
- Temporal arteritis, Takayasu: Granulomatous inflammation

**Deposition Disorders:**

*Mucin Deposition:*
- Dermatomyositis: Perivascular and interstitial
- Lupus: Superficial and deep
- Pretibial myxedema: Extensive dermal mucin

*Amyloid:*
- Primary cutaneous: Macular/lichen amyloidosis
- Systemic: Associated with AL, AA types
- Detection: Congo red (apple-green birefringence)

## Precision Diagnostic Techniques

**Dermoscopy Patterns:**
- Melanocytic: Network, globules, streaks, blue-white structures
- Vascular: Hairpin (seborrheic keratosis), glomerular (Bowen), arborizing (BCC)
- Scaly: White scales (psoriasis), yellow scales (seborrheic dermatitis)

**Confocal Microscopy:**
- In vivo cellular resolution
- Melanocyte density assessment
- Inflammatory cell characterization
- Real-time diagnostic aid

**Immunofluorescence Mapping:**
- Direct: Tissue-bound antibodies/complement
- Indirect: Circulating antibodies
- Salt-split skin: Differentiate pemphigoid (roof) from EBA (floor)

**Molecular Diagnostics:**
- PCR: HSV/VZV in atypical presentations
- FISH: Melanoma (chromosomes 6, 11, RREB1, MYB)
- Gene expression profiling: Inflammatory diseases, melanoma prognosis
- Next-generation sequencing: Genodermatoses, targeted therapy selection

## Clinical Integration and Therapeutic Implications

**Pattern-Based Differential Diagnosis:**
- Annular/polycyclic + scale → Fungal, subacute cutaneous lupus, psoriasis, pityriasis rosea
- Dermatomal + vesicles → Herpes zoster > contact dermatitis
- Reticular + purpura → Vasculitis, thrombosis (livedo racemosa)
- Blaschkoid + birth/early childhood → Mosaicism, epidermal nevus

**Morphology-Guided Therapy:**
- Lichenoid diseases: Consider systemic immunosuppression (corticosteroids, MMF)
- Spongiotic: Topical corticosteroids, barrier repair
- Psoriasiform: Vitamin D analogs, biologics (IL-17/IL-23 inhibitors)
- Granulomatous: Consider systemic evaluation, anti-TNF therapy

**Prognostic Indicators:**
- Tumor morphology: Asymmetry, border irregularity, color variation, diameter, evolution (ABCDE)
- Ulceration: Aggressive behavior in melanoma, SCC
- Perineural invasion: Higher recurrence (SCC, desmoplastic melanoma)

**Therapeutic Monitoring:**
- Repigmentation pattern in vitiligo (perifollicular vs. marginal)
- PASI score components in psoriasis (erythema, induration, scale)
- Erosion count in pemphigus (disease activity)

## Future Directions

**Artificial Intelligence:**
- Deep learning for morphologic classification
- Dermoscopic pattern recognition
- Integration with histopathology

**Biomarker Development:**
- Serum markers correlating with morphologic findings
- Predictive markers for treatment response

**Personalized Medicine:**
- Genotype-phenotype correlations
- Pharmacogenomics guiding therapy selection
- Individualized disease monitoring`,

      keyTerms: [
        {
          term: 'Acantholysis',
          definition: 'Loss of intercellular connections causing cell separation',
          pronunciation: 'ak-an-THOL-ih-sis',
        },
        {
          term: 'Desmoglein',
          definition: 'Adhesion molecule; autoantigen in pemphigus',
          pronunciation: 'dez-moh-GLAY-in',
        },
        {
          term: 'Civatte bodies',
          definition: 'Apoptotic keratinocytes seen in lichenoid dermatitis',
          pronunciation: 'sih-VAHT',
        },
        {
          term: 'Munro microabscess',
          definition: 'Collection of neutrophils in stratum corneum (psoriasis)',
          pronunciation: 'mun-ROH',
        },
        {
          term: 'Leukocytoclastic',
          definition: 'Neutrophil fragmentation with nuclear debris',
          pronunciation: 'loo-koh-sy-toh-KLAS-tik',
        },
        {
          term: 'Henoch-Schönlein purpura',
          definition: 'IgA vasculitis with palpable purpura, arthralgias, GI/renal involvement',
          pronunciation: 'HEN-ok SHERN-line',
        },
        {
          term: 'Salt-split skin',
          definition: 'Technique using 1M NaCl to separate epidermis at lamina lucida for IF',
        },
        {
          term: 'FISH',
          definition: 'Fluorescence in situ hybridization - detects chromosomal abnormalities',
        },
      ],
      analogies: [
        'Acantholysis is like unbuttoning a shirt - the cells separate when connections break.',
        'DIF fishnet pattern is like looking at a chain-link fence - antibodies outline each cell.',
        'Leukocytoclastic vasculitis is like a battle scene - destroyed neutrophils and debris everywhere.',
        'Salt-split skin is like carefully separating layers of phyllo dough - reveals the exact level.',
      ],
      examples: [
        'Pemphigus vulgaris: Suprabasal acantholysis, positive Nikolsky, DIF intercellular IgG',
        'Bullous pemphigoid: Subepidermal blister, tense bullae, DIF linear BMZ IgG/C3',
        'Dermatitis herpetiformis: Papillary microabscesses, DIF granular IgA in papillae',
        'Cutaneous lupus: Vacuolar interface, mucin, DIF positive lupus band',
        'Lichen planus: Lichenoid interface, Civatte bodies, Wickham striae',
      ],
      clinicalNotes:
        'Autoimmune blistering disease diagnosis requires: (1) Clinical morphology and distribution, (2) Histopathology with blister level, (3) DIF on perilesional skin, (4) IIF on patient serum. Antibody titers may correlate with disease activity in pemphigus. Molecular diagnostics are revolutionizing genodermatosis diagnosis and enabling prenatal testing.',
    },
  },

  media: [],
  citations: [
    {
      id: 'fitzpatrick-derm-atlas',
      type: 'textbook',
      title: 'Fitzpatrick\'s Color Atlas and Synopsis of Clinical Dermatology',
      authors: ['Wolff K', 'Johnson RA', 'Saavedra AP'],
      source: 'McGraw-Hill Education',
      chapter: '1',
      section: 'Morphology of Primary and Secondary Lesions',
    },
    {
      id: 'ackerman-derm',
      type: 'textbook',
      title: 'Histologic Diagnosis of Inflammatory Skin Diseases',
      authors: ['Ackerman AB', 'Chongchitnant N', 'Sanchez J'],
      source: 'Ardor Scribendi',
    },
    {
      id: 'immunobullous',
      type: 'article',
      title: 'Immunobullous diseases: Diagnosis and management',
      authors: ['Schmidt E', 'Zillikens D'],
      source: 'The Lancet',
    },
  ],
  crossReferences: [
    {
      targetId: 'dermatology-basics-skin-anatomy',
      targetType: 'concept',
      relationship: 'related',
      label: 'Skin Anatomy',
    },
    {
      targetId: 'dermatology-diagnosis-approach',
      targetType: 'concept',
      relationship: 'related',
      label: 'Diagnostic Approach',
    },
    {
      targetId: 'dermatology-conditions-psoriasis',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Psoriasis',
    },
    {
      targetId: 'dermatology-conditions-eczema',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Eczema',
    },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'diagnosis', 'terminology', 'morphology'],
    keywords: [
      'lesion',
      'primary lesion',
      'secondary lesion',
      'macule',
      'papule',
      'vesicle',
      'bulla',
      'scale',
      'crust',
      'erosion',
      'ulcer',
      'distribution',
      'configuration',
    ],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'family-medicine', 'internal-medicine'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
  contributors: ['Claude Sonnet 4.5'],
};
