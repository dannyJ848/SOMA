/**
 * Integumentary System Data Store
 *
 * Comprehensive data for skin layers, appendages,
 * wound healing, and dermatological conditions.
 */

import type {
  SkinLayer,
  SkinLayerType,
  EpidermisSubLayer,
  DermisStructure,
  HairFollicle,
  SweatGland,
  SebaceousGland,
  NailStructure,
  WoundHealingPhaseDetail,
  SkinLesionType,
  SkinReceptor,
  IntegumentaryStatistics,
} from './types';

// ============================================================================
// SKIN LAYERS
// ============================================================================

const skinLayers = new Map<string, SkinLayer>();

skinLayers.set('epidermis', {
  id: 'epidermis',
  name: 'Epidermis',
  latinName: 'Epidermis',
  type: 'epidermis',
  thickness: '0.05-1.5 mm (varies by location)',
  composition: [
    'Keratinocytes (90-95%)',
    'Melanocytes (2-3%)',
    'Langerhans cells (3-5%)',
    'Merkel cells (<1%)',
  ],
  functions: [
    'Physical barrier against pathogens',
    'Water retention and prevention of dehydration',
    'UV protection via melanin',
    'Immune surveillance',
    'Sensory perception',
  ],
  cellTypes: ['Keratinocytes', 'Melanocytes', 'Langerhans cells', 'Merkel cells'],
  bloodSupply: 'Avascular - nutrients diffuse from dermis',
  innervation: 'Free nerve endings, Merkel cell-neurite complexes',
  explanations: {
    level1: 'The epidermis is the outer layer of your skin that you can see and touch. It protects you like a shield.',
    level2: 'The epidermis is the outermost skin layer that acts as a waterproof barrier. It contains cells that make keratin (a tough protein) and melanin (the pigment that gives skin its color).',
    level3: 'The epidermis is a stratified squamous epithelium composed mainly of keratinocytes that undergo continuous renewal. The basal layer contains stem cells that divide and migrate upward, becoming progressively keratinized until they form the protective stratum corneum.',
    level4: 'The epidermis consists of five distinct layers (strata) representing progressive keratinocyte differentiation. Melanocytes in the basal layer produce melanin and transfer it to keratinocytes via melanosomes. Langerhans cells provide immune surveillance as antigen-presenting cells, while Merkel cells function as mechanoreceptors.',
    level5: 'Epidermal homeostasis involves complex signaling between keratinocyte stem cells in the stratum basale and their transit-amplifying progeny. Notch signaling regulates spinous layer differentiation, while calcium gradient and filaggrin processing drive terminal differentiation. The epidermis maintains a physical barrier through tight junctions and chemical barrier through antimicrobial peptides (defensins, cathelicidins). Melanin synthesis involves tyrosinase-mediated conversion of tyrosine to DOPA and dopaquinone within melanosomes.',
  },
  keyFacts: [
    'Completely renews every 28-30 days',
    'Contains no blood vessels',
    'Thickest on palms and soles (1.5 mm)',
    'Thinnest on eyelids (0.05 mm)',
    'Langerhans cells migrate to lymph nodes to present antigens',
  ],
  pathologies: [
    {
      name: 'Psoriasis',
      description: 'Accelerated keratinocyte proliferation with incomplete differentiation',
      symptoms: ['Thick, scaly plaques', 'Silvery scales', 'Itching'],
      causes: ['Autoimmune - T cell mediated', 'Genetic predisposition'],
    },
    {
      name: 'Eczema (Atopic Dermatitis)',
      description: 'Barrier dysfunction with inflammation',
      symptoms: ['Dry, itchy skin', 'Red patches', 'Lichenification'],
      causes: ['Filaggrin gene mutations', 'Immune dysregulation'],
    },
  ],
});

skinLayers.set('dermis', {
  id: 'dermis',
  name: 'Dermis',
  latinName: 'Dermis',
  type: 'dermis',
  thickness: '0.3-3.0 mm',
  composition: [
    'Collagen fibers (70-80%)',
    'Elastic fibers',
    'Ground substance (glycosaminoglycans)',
    'Fibroblasts',
    'Macrophages',
    'Mast cells',
  ],
  functions: [
    'Structural support and elasticity',
    'Thermoregulation',
    'Sensation',
    'Nourishment of epidermis',
    'Immune defense',
    'Wound healing',
  ],
  cellTypes: ['Fibroblasts', 'Macrophages', 'Mast cells', 'Lymphocytes', 'Dendritic cells'],
  bloodSupply: 'Rich vascular plexus - superficial and deep',
  innervation: 'Sensory nerve endings, autonomic fibers to vessels and glands',
  explanations: {
    level1: 'The dermis is the middle layer of skin that contains blood vessels, nerves, and hair roots. It makes your skin stretchy and strong.',
    level2: 'The dermis lies beneath the epidermis and contains collagen and elastic fibers that give skin its strength and flexibility. It houses blood vessels, nerves, hair follicles, and sweat glands.',
    level3: 'The dermis is a connective tissue layer divided into the papillary dermis (superficial, with finger-like projections into epidermis) and reticular dermis (deeper, dense irregular connective tissue). Fibroblasts produce collagen types I and III, elastic fibers, and ground substance.',
    level4: 'The papillary dermis contains type III collagen and anchors to the epidermis via hemidesmosomes and type VII collagen anchoring fibrils. The reticular dermis contains predominantly type I collagen arranged in a basket-weave pattern providing tensile strength. Langer lines reflect collagen fiber orientation. The dermal-epidermal junction includes the lamina lucida, lamina densa, and sublamina densa.',
    level5: 'Dermal fibroblasts exhibit regional heterogeneity with distinct transcriptional profiles. Papillary fibroblasts express higher levels of decorin and support epidermal homeostasis, while reticular fibroblasts express higher collagen I and are responsible for scarring. Mechanotransduction through integrin-focal adhesion signaling regulates fibroblast activity. Matrix metalloproteinases (MMPs) and tissue inhibitors of metalloproteinases (TIMPs) maintain ECM homeostasis. Mast cells release histamine, tryptase, and cytokines mediating allergic and inflammatory responses.',
  },
  keyFacts: [
    'Contains 80% of skin collagen',
    'Provides tensile strength up to 20 N/mm²',
    'Houses receptors for touch, pressure, pain, and temperature',
    'Papillary dermis increases surface area for nutrient exchange',
    'Collagen production decreases 1% per year after age 20',
  ],
  pathologies: [
    {
      name: 'Keloid',
      description: 'Excessive collagen deposition beyond wound boundaries',
      symptoms: ['Raised scar tissue', 'Extends beyond original wound', 'Itching'],
      causes: ['Abnormal wound healing', 'Genetic predisposition'],
    },
    {
      name: 'Ehlers-Danlos Syndrome',
      description: 'Collagen synthesis or structure defects',
      symptoms: ['Hyperelastic skin', 'Joint hypermobility', 'Easy bruising'],
      causes: ['Genetic mutations in collagen genes'],
    },
  ],
});

skinLayers.set('hypodermis', {
  id: 'hypodermis',
  name: 'Hypodermis (Subcutaneous Tissue)',
  latinName: 'Tela subcutanea',
  type: 'hypodermis',
  thickness: 'Variable (1-50+ mm)',
  composition: [
    'Adipocytes',
    'Loose connective tissue',
    'Blood vessels',
    'Lymphatics',
    'Nerves',
  ],
  functions: [
    'Energy storage',
    'Thermal insulation',
    'Mechanical cushioning',
    'Hormone production (leptin, adiponectin)',
    'Anchoring skin to underlying structures',
  ],
  cellTypes: ['Adipocytes', 'Preadipocytes', 'Fibroblasts', 'Macrophages'],
  bloodSupply: 'Extensive vascular network',
  innervation: 'Pacinian corpuscles for deep pressure',
  explanations: {
    level1: 'The hypodermis is the deepest layer of skin made mostly of fat. It keeps you warm and protects your body like a cushion.',
    level2: 'The hypodermis (subcutaneous layer) lies beneath the dermis and consists mainly of fat cells. It provides insulation, energy storage, and cushioning for underlying muscles and bones.',
    level3: 'The hypodermis is composed of adipose tissue organized into lobules separated by fibrous septa. White adipose tissue predominates, storing energy as triglycerides. The layer varies significantly in thickness based on body location, sex, and nutritional status.',
    level4: 'Adipocytes in the hypodermis are derived from mesenchymal stem cells and regulated by PPARγ and C/EBP transcription factors. The tissue functions as an endocrine organ, secreting adipokines including leptin (satiety hormone), adiponectin (insulin sensitizer), and resistin. Superficial fascia runs through the hypodermis, providing structural organization.',
    level5: 'Subcutaneous adipose tissue exhibits depot-specific metabolic characteristics. It is more insulin-sensitive than visceral fat and preferentially stores fatty acids via lipoprotein lipase activity. Brown adipose tissue, present in the supraclavicular region, contains UCP1 in mitochondria enabling non-shivering thermogenesis. Adipose tissue macrophages regulate metabolic inflammation, with M2 macrophages maintaining homeostasis and M1 polarization contributing to insulin resistance.',
  },
  keyFacts: [
    'Stores approximately 80% of body fat',
    'Thicker in women than men',
    'Contains Pacinian corpuscles for deep pressure sensation',
    'Major site of subcutaneous drug injections',
    'Brown fat more prevalent in infants and hibernating mammals',
  ],
  pathologies: [
    {
      name: 'Lipoma',
      description: 'Benign adipose tissue tumor',
      symptoms: ['Soft, mobile subcutaneous mass', 'Usually painless'],
      causes: ['Unknown, may have genetic component'],
    },
    {
      name: 'Panniculitis',
      description: 'Inflammation of subcutaneous fat',
      symptoms: ['Tender nodules', 'Erythema', 'Skin induration'],
      causes: ['Autoimmune', 'Infection', 'Trauma', 'Cold exposure'],
    },
  ],
});

// ============================================================================
// EPIDERMIS SUBLAYERS
// ============================================================================

export const EPIDERMIS_SUBLAYERS: EpidermisSubLayer[] = [
  {
    id: 'stratum-corneum',
    name: 'Stratum Corneum',
    latinName: 'Stratum corneum',
    layer: 'stratum-corneum',
    depth: 'Outermost (10-30 μm)',
    cellTypes: ['Corneocytes (anucleate, flattened keratinocytes)'],
    characteristics: [
      'Dead, flattened cells filled with keratin',
      'Lipid-rich intercellular matrix',
      'Brick and mortar structure',
      '15-20 cell layers thick',
    ],
    functions: [
      'Primary barrier function',
      'Water retention',
      'Protection against mechanical, chemical, microbial insults',
    ],
    clinicalNote: 'Disruption leads to transepidermal water loss (TEWL) and increased susceptibility to infection',
  },
  {
    id: 'stratum-lucidum',
    name: 'Stratum Lucidum',
    latinName: 'Stratum lucidum',
    layer: 'stratum-lucidum',
    depth: 'Below stratum corneum (only in thick skin)',
    cellTypes: ['Transitional keratinocytes'],
    characteristics: [
      'Clear, translucent layer',
      'Eleidin-rich (keratohyalin derivative)',
      'Only present in thick skin (palms, soles)',
      '2-3 cell layers',
    ],
    functions: [
      'Transitional barrier',
      'Additional protection in high-friction areas',
    ],
    clinicalNote: 'Absent in thin skin; visible as clear zone in histology of palmoplantar skin',
  },
  {
    id: 'stratum-granulosum',
    name: 'Stratum Granulosum',
    latinName: 'Stratum granulosum',
    layer: 'stratum-granulosum',
    depth: '3-5 cell layers deep',
    cellTypes: ['Granular keratinocytes'],
    characteristics: [
      'Contains keratohyalin granules',
      'Lamellar bodies release lipids',
      'Tight junctions form here',
      'Cells undergo programmed cell death',
    ],
    functions: [
      'Final stage of keratinocyte differentiation',
      'Formation of lipid barrier',
      'Keratinization begins',
    ],
    clinicalNote: 'Site of filaggrin processing; mutations cause ichthyosis vulgaris',
  },
  {
    id: 'stratum-spinosum',
    name: 'Stratum Spinosum',
    latinName: 'Stratum spinosum',
    layer: 'stratum-spinosum',
    depth: '8-10 cell layers',
    cellTypes: ['Spinous keratinocytes', 'Langerhans cells'],
    characteristics: [
      'Spiny appearance due to desmosomal junctions',
      'Active protein synthesis',
      'Contains Langerhans cells',
      'Cells progressively flatten toward surface',
    ],
    functions: [
      'Structural integrity via desmosomes',
      'Immune surveillance (Langerhans cells)',
      'Keratin synthesis',
    ],
    clinicalNote: 'Squamous cell carcinoma arises from this layer',
  },
  {
    id: 'stratum-basale',
    name: 'Stratum Basale',
    latinName: 'Stratum basale',
    layer: 'stratum-basale',
    depth: 'Single cell layer at dermal-epidermal junction',
    cellTypes: [
      'Basal keratinocytes (stem cells)',
      'Melanocytes',
      'Merkel cells',
    ],
    characteristics: [
      'Columnar/cuboidal cells attached to basement membrane',
      'High mitotic activity',
      'Hemidesmosomes anchor to basement membrane',
      'Contains epidermal stem cells',
    ],
    functions: [
      'Continuous production of new keratinocytes',
      'Melanin production and transfer',
      'Mechanoreception (Merkel cells)',
    ],
    clinicalNote: 'Basal cell carcinoma and melanoma arise from this layer',
  },
];

// ============================================================================
// DERMIS STRUCTURES
// ============================================================================

export const DERMIS_STRUCTURES: DermisStructure[] = [
  {
    id: 'papillary-dermis',
    name: 'Papillary Dermis',
    location: 'Superficial dermis, interdigitates with epidermis',
    composition: [
      'Loose connective tissue',
      'Type III collagen',
      'Fine elastic fibers',
      'Capillary loops',
      'Meissner corpuscles',
    ],
    functions: [
      'Nutrient supply to epidermis',
      'Thermoregulation via capillary loops',
      'Light touch sensation',
      'Increased surface area for attachment',
    ],
    clinicalNote: 'Dermal papillae create fingerprint patterns',
  },
  {
    id: 'reticular-dermis',
    name: 'Reticular Dermis',
    location: 'Deep dermis, above hypodermis',
    composition: [
      'Dense irregular connective tissue',
      'Type I collagen (predominant)',
      'Thick elastic fibers',
      'Hair follicles and glands',
      'Deep vascular plexus',
    ],
    functions: [
      'Tensile strength',
      'Elasticity and recoil',
      'Housing for appendages',
      'Deep pressure and vibration sensation',
    ],
    clinicalNote: 'Stretch marks (striae) result from collagen fiber disruption here',
  },
  {
    id: 'dermal-vascular-plexus',
    name: 'Dermal Vascular Plexus',
    location: 'Two horizontal plexuses in dermis',
    composition: [
      'Superficial (subpapillary) plexus',
      'Deep (cutaneous) plexus',
      'Arteriovenous anastomoses',
      'Capillary loops in papillae',
    ],
    functions: [
      'Nutrient delivery',
      'Thermoregulation',
      'Blood pressure regulation',
      'Inflammatory response',
    ],
    clinicalNote: 'AV anastomoses in acral skin allow rapid temperature adjustment',
  },
];

// ============================================================================
// HAIR FOLLICLE
// ============================================================================

const hairFollicles = new Map<string, HairFollicle>();

hairFollicles.set('hair-follicle', {
  id: 'hair-follicle',
  name: 'Hair Follicle',
  latinName: 'Folliculus pili',
  location: 'Extends from epidermis into dermis/hypodermis',
  components: [
    'Hair shaft (medulla, cortex, cuticle)',
    'Inner root sheath',
    'Outer root sheath',
    'Hair bulb with matrix',
    'Dermal papilla',
    'Hair bulge (stem cells)',
  ],
  cellTypes: [
    'Matrix keratinocytes',
    'Melanocytes',
    'Dermal papilla fibroblasts',
    'Stem cells in bulge',
  ],
  growthCycle: [
    {
      phase: 'Anagen',
      duration: '2-7 years (scalp)',
      description: 'Active growth phase',
      characteristics: [
        'Rapid matrix cell division',
        'Hair shaft elongation',
        'Active melanogenesis',
        '85-90% of scalp hair in this phase',
      ],
    },
    {
      phase: 'Catagen',
      duration: '2-3 weeks',
      description: 'Regression/transitional phase',
      characteristics: [
        'Matrix cell apoptosis',
        'Hair stops growing',
        'Follicle shortens',
        'Club hair forms',
      ],
    },
    {
      phase: 'Telogen',
      duration: '2-3 months',
      description: 'Resting phase',
      characteristics: [
        'Hair shed (telogen effluvium if excessive)',
        'Follicle dormant',
        'New anagen hair pushes out old',
        '10-15% of scalp hair normally',
      ],
    },
  ],
  associatedStructures: [
    'Arrector pili muscle',
    'Sebaceous gland',
    'Apocrine gland (some locations)',
  ],
  explanations: {
    level1: 'A hair follicle is like a tiny pocket in your skin where hair grows from. Each hair on your body has its own follicle.',
    level2: 'Hair follicles are tube-like structures that extend into the dermis. At the bottom is the hair bulb where cells divide rapidly to create the hair shaft. Connected muscles can make hair "stand up" (goosebumps).',
    level3: 'The hair follicle consists of the hair shaft, inner and outer root sheaths, and the hair bulb containing the matrix and dermal papilla. Stem cells in the bulge region regenerate the follicle with each cycle. The arrector pili muscle attaches to the bulge and contracts during cold or emotional stimuli.',
    level4: 'The dermal papilla provides inductive signals (Wnt, BMP) to matrix keratinocytes, controlling hair growth and cycling. Matrix melanocytes produce melanin incorporated into the cortex. The bulge contains multipotent stem cells marked by K15 and CD200 that can regenerate hair follicles, sebaceous glands, and epidermis.',
    level5: 'Hair follicle cycling is regulated by the interaction between dermal papilla and matrix via Wnt/β-catenin (promoting anagen), BMP (catagen), and FGF signaling pathways. The bulge stem cells exist in a specialized niche with low oxygen and high BMP, maintaining quiescence until activated by signals from dermal papilla at anagen onset. Hair pigmentation involves transfer of melanosomes from follicular melanocytes to cortical keratinocytes, regulated by MITF and α-MSH/MC1R signaling.',
  },
  keyFacts: [
    'Humans have about 100,000 scalp follicles',
    'Hair grows approximately 0.3-0.5 mm/day',
    'Dermal papilla size correlates with hair thickness',
    'Androgenetic alopecia involves follicle miniaturization',
    'Follicular stem cells can regenerate epidermis after injury',
  ],
  pathologies: [
    {
      name: 'Androgenetic Alopecia',
      description: 'DHT-mediated follicle miniaturization',
      symptoms: ['Progressive hair thinning', 'Pattern hair loss'],
      causes: ['Genetic predisposition', 'Androgen sensitivity'],
    },
    {
      name: 'Alopecia Areata',
      description: 'Autoimmune attack on hair follicle',
      symptoms: ['Patchy hair loss', 'Exclamation point hairs'],
      causes: ['T-cell mediated autoimmune attack on anagen follicles'],
    },
  ],
});

// ============================================================================
// SWEAT GLANDS
// ============================================================================

const sweatGlands = new Map<string, SweatGland>();

sweatGlands.set('eccrine-sweat-gland', {
  id: 'eccrine-sweat-gland',
  name: 'Eccrine Sweat Gland',
  type: 'eccrine',
  location: ['Entire body surface', 'Highest density on palms, soles, forehead'],
  secretionType: 'Merocrine (exocytosis) - watery, odorless',
  ductOpening: 'Directly onto skin surface (sweat pore)',
  innervation: 'Sympathetic cholinergic (acetylcholine)',
  functions: [
    'Thermoregulation',
    'Excretion of water and electrolytes',
    'Emotional sweating (palms, soles)',
    'Maintaining skin hydration',
  ],
  explanations: {
    level1: 'Eccrine sweat glands are found all over your body and make sweat to cool you down when you are hot.',
    level2: 'Eccrine glands produce watery sweat that evaporates from the skin surface, cooling the body. They are controlled by the nervous system and are most active during exercise or in hot environments.',
    level3: 'Eccrine sweat glands are coiled tubular glands with a secretory portion in the dermis and a duct opening directly onto the skin. The secretory coil produces a primary secretion similar to plasma, which is then modified by the duct (sodium and chloride reabsorption) to produce hypotonic sweat.',
    level4: 'Eccrine glands are innervated by sympathetic cholinergic fibers (unusual - most sympathetic fibers are adrenergic). The secretory coil contains clear cells (aquaporin-5 positive, produce water) and dark cells (glycoprotein secretion). The myoepithelial cells contract to expel sweat. CFTR channels are critical for chloride secretion.',
    level5: 'Sweat secretion involves a two-stage process: primary secretion in the coil via Na-K-2Cl cotransporter (NKCC1) and CFTR-mediated chloride secretion creating an osmotic gradient for water movement through AQP5. The duct reabsorbs NaCl via ENaC and CFTR, creating hypotonic final sweat. Cystic fibrosis patients have elevated sweat chloride due to defective CFTR. Thermal sweating is controlled by the hypothalamic thermoregulatory center, while emotional sweating involves limbic and cortical pathways.',
  },
  keyFacts: [
    '2-4 million eccrine glands in humans',
    'Can produce up to 10 L sweat/day during heavy exercise',
    'Sweat is hypotonic (less salty than plasma)',
    'Active from birth (unlike apocrine)',
    'Sweat chloride test diagnoses cystic fibrosis',
  ],
  pathologies: [
    {
      name: 'Hyperhidrosis',
      description: 'Excessive sweating beyond thermoregulatory needs',
      symptoms: ['Profuse sweating', 'Often focal (palms, axillae, soles)'],
      causes: ['Primary (idiopathic)', 'Secondary (thyroid, medications)'],
    },
    {
      name: 'Anhidrosis',
      description: 'Inability to sweat',
      symptoms: ['Heat intolerance', 'Flushing', 'Risk of hyperthermia'],
      causes: ['Autonomic neuropathy', 'Skin damage', 'Medications'],
    },
  ],
});

sweatGlands.set('apocrine-sweat-gland', {
  id: 'apocrine-sweat-gland',
  name: 'Apocrine Sweat Gland',
  type: 'apocrine',
  location: ['Axillae', 'Anogenital region', 'Areolae', 'External ear canal'],
  secretionType: 'Merocrine (despite name) - oily, protein-rich',
  ductOpening: 'Into hair follicle above sebaceous gland',
  innervation: 'Sympathetic adrenergic (norepinephrine)',
  functions: [
    'Scent production (after bacterial action)',
    'Pheromone-like signaling',
    'Response to emotional/stress stimuli',
  ],
  explanations: {
    level1: 'Apocrine sweat glands are found in your armpits and make a thicker sweat that bacteria turn into body odor.',
    level2: 'Apocrine glands produce a protein-rich secretion that is initially odorless. When skin bacteria break down this secretion, it produces body odor. These glands become active at puberty.',
    level3: 'Apocrine glands have a large secretory coil in the hypodermis and empty into hair follicles. Their secretion contains proteins, lipids, and steroids. Unlike eccrine glands, they are controlled by adrenergic sympathetic fibers and respond to emotional stimuli.',
    level4: 'Apocrine glands develop from the follicular epithelium and remain dormant until puberty when androgens stimulate their development. The secretion contains odor precursors (androstenol, androstenone) that are metabolized by Corynebacterium and Staphylococcus species to produce characteristic axillary odor.',
    level5: 'Apocrine gland secretion involves apical decapitation secretion (hence the name, though merocrine secretion also occurs). The secretory cells contain large lipid droplets and express steroid metabolizing enzymes. ABCC11 gene variants determine earwax type and apocrine secretion composition - a loss-of-function variant common in East Asian populations results in dry earwax and reduced axillary odor.',
  },
  keyFacts: [
    'Become functional at puberty',
    'Responsible for axillary body odor',
    'Modified apocrine glands form ceruminous glands (ear wax)',
    'Not involved in thermoregulation',
    'ABCC11 gene variant reduces body odor in some populations',
  ],
  pathologies: [
    {
      name: 'Hidradenitis Suppurativa',
      description: 'Chronic inflammatory disease of apocrine gland-bearing skin',
      symptoms: ['Painful nodules and abscesses', 'Sinus tracts', 'Scarring'],
      causes: ['Follicular occlusion', 'Immune dysregulation'],
    },
    {
      name: 'Bromhidrosis',
      description: 'Excessive body odor',
      symptoms: ['Offensive body odor'],
      causes: ['Bacterial overgrowth', 'Apocrine gland hyperactivity'],
    },
  ],
});

// ============================================================================
// SEBACEOUS GLANDS
// ============================================================================

const sebaceousGlands = new Map<string, SebaceousGland>();

sebaceousGlands.set('sebaceous-gland', {
  id: 'sebaceous-gland',
  name: 'Sebaceous Gland',
  latinName: 'Glandula sebacea',
  location: [
    'Associated with hair follicles (pilosebaceous unit)',
    'Highest density on face and scalp',
    'Also lips, eyelids (Meibomian), areolae',
  ],
  secretionType: 'Holocrine (entire cell disintegrates)',
  associatedWith: 'Hair follicle (usually)',
  functions: [
    'Sebum production - lubrication of skin and hair',
    'Waterproofing',
    'Antimicrobial (fatty acids inhibit bacteria)',
    'Vitamin E delivery to skin surface',
  ],
  regulation: [
    'Androgens (stimulate)',
    'Estrogens (inhibit)',
    'Retinoids (inhibit)',
    'Peroxisome proliferator-activated receptors',
  ],
  explanations: {
    level1: 'Sebaceous glands make an oily substance called sebum that keeps your skin and hair soft and waterproof.',
    level2: 'Sebaceous glands are attached to hair follicles and produce sebum, an oily mixture of fats. Sebum keeps skin moisturized and has some antibacterial properties. Hormone changes, especially during puberty, increase sebum production.',
    level3: 'Sebaceous glands use holocrine secretion - the entire cell fills with lipid, dies, and ruptures to release sebum into the hair follicle. Sebum is a complex mixture of triglycerides, wax esters, squalene, and fatty acids. Androgen receptors on sebocytes regulate gland activity.',
    level4: 'Sebocyte differentiation involves lipid accumulation driven by SREBP transcription factors and PPARs. Sebum composition includes triglycerides (45%), wax esters (25%), squalene (12%), and free fatty acids (10%). Free fatty acids (especially sapienic acid) have antimicrobial properties. 5α-reductase in sebocytes converts testosterone to the more potent DHT.',
    level5: 'Sebaceous gland development is controlled by Hedgehog and Wnt/β-catenin signaling. Sebocytes express toll-like receptors and can produce pro-inflammatory cytokines and antimicrobial peptides, contributing to innate immunity. In acne, Cutibacterium acnes metabolizes sebum triglycerides to pro-inflammatory free fatty acids and activates TLR2-mediated inflammation. Isotretinoin induces sebocyte apoptosis and dramatically reduces sebum production through unclear mechanisms involving decreased proliferation and increased differentiation.',
  },
  keyFacts: [
    'Humans have approximately 800 glands/cm² on face',
    'Sebum production peaks in teenage years',
    'Absent on palms and soles',
    'Sebaceous hyperplasia common with aging',
    'Meibomian glands are modified sebaceous glands in eyelids',
  ],
  pathologies: [
    {
      name: 'Acne Vulgaris',
      description: 'Pilosebaceous unit inflammation',
      symptoms: ['Comedones', 'Papules', 'Pustules', 'Nodules'],
      causes: ['Sebum overproduction', 'Follicular hyperkeratinization', 'C. acnes', 'Inflammation'],
    },
    {
      name: 'Seborrheic Dermatitis',
      description: 'Inflammatory condition in sebum-rich areas',
      symptoms: ['Greasy scales', 'Erythema', 'Itching'],
      causes: ['Malassezia yeast', 'Sebum composition', 'Immune response'],
    },
  ],
});

// ============================================================================
// NAIL STRUCTURE
// ============================================================================

const nailStructures = new Map<string, NailStructure>();

nailStructures.set('nail', {
  id: 'nail',
  name: 'Nail (Unguis)',
  latinName: 'Unguis',
  components: [
    {
      name: 'Nail Plate',
      latinName: 'Lamina unguis',
      description: 'Keratinized, translucent plate forming the visible nail',
      clinicalNote: 'Pink color from underlying nail bed capillaries',
    },
    {
      name: 'Nail Matrix',
      latinName: 'Matrix unguis',
      description: 'Germinative zone producing the nail plate',
      clinicalNote: 'Damage causes permanent nail deformity',
    },
    {
      name: 'Nail Bed',
      latinName: 'Lectulus unguis',
      description: 'Epithelium beneath nail plate',
      clinicalNote: 'Splinter hemorrhages indicate subungual capillary damage',
    },
    {
      name: 'Lunula',
      latinName: 'Lunula',
      description: 'Visible pale crescent at proximal nail - distal matrix',
      clinicalNote: 'Absence may indicate matrix damage',
    },
    {
      name: 'Cuticle (Eponychium)',
      latinName: 'Eponychium',
      description: 'Skin fold at proximal nail protecting matrix',
      clinicalNote: 'Manipulation can lead to infection',
    },
    {
      name: 'Hyponychium',
      latinName: 'Hyponychium',
      description: 'Skin beneath free edge of nail',
      clinicalNote: 'Barrier against infection',
    },
    {
      name: 'Nail Folds',
      latinName: 'Vallum unguis',
      description: 'Lateral and proximal skin folds surrounding nail',
      clinicalNote: 'Site of paronychia infections',
    },
  ],
  growthRate: 'Fingernails: 3-4 mm/month; Toenails: 1 mm/month',
  composition: [
    'Hard keratin (α-keratin)',
    'Cysteine-rich (disulfide bonds)',
    'Calcium (minimal contribution to hardness)',
  ],
  bloodSupply: 'Proper digital arteries, nail bed capillaries',
  functions: [
    'Protection of fingertips',
    'Fine manipulation and sensation enhancement',
    'Tool for scratching and picking',
    'Cosmetic/social function',
  ],
  explanations: {
    level1: 'Nails are hard plates made of the same material as hair. They protect the tips of your fingers and toes.',
    level2: 'Nails grow from the matrix (hidden under the cuticle) and slide forward over the nail bed. Fingernails grow faster than toenails. The pink color comes from blood vessels in the nail bed beneath.',
    level3: 'The nail apparatus includes the nail matrix (produces nail plate), nail bed (supports plate), and surrounding soft tissue folds. The nail plate is composed of tightly packed keratinized cells with high cysteine content forming disulfide bonds. Growth rate varies with age, health, and season.',
    level4: 'The nail matrix contains germinal cells that proliferate and differentiate, pushing keratinized cells distally to form the nail plate. The proximal matrix produces the dorsal nail plate, while the distal matrix (lunula) produces the ventral plate. Matrix melanocytes can produce longitudinal pigmented bands (melanonychia).',
    level5: 'Nail keratinization involves expression of hard keratins (K85, K86) and keratin-associated proteins rich in cysteine and glycine-tyrosine. Unlike soft keratins of epidermis, nail keratins form extensive disulfide cross-links providing mechanical strength. Nail growth is influenced by blood flow and is increased in psoriasis (rapid turnover) and decreased in peripheral vascular disease. The nail reflects systemic health - Beau lines indicate past systemic stress, koilonychia suggests iron deficiency, and clubbing indicates chronic hypoxia.',
  },
  keyFacts: [
    'Complete fingernail regrowth takes 6 months',
    'Complete toenail regrowth takes 12-18 months',
    'Dominant hand nails grow slightly faster',
    'Nails grow faster in summer',
    'Matrix biopsy required to diagnose subungual melanoma',
  ],
  pathologies: [
    {
      name: 'Onychomycosis',
      description: 'Fungal nail infection',
      symptoms: ['Thickened nail', 'Discoloration', 'Subungual debris'],
      causes: ['Dermatophytes (most common)', 'Candida', 'Molds'],
    },
    {
      name: 'Psoriatic Nail Disease',
      description: 'Nail manifestation of psoriasis',
      symptoms: ['Pitting', 'Onycholysis', 'Oil spots', 'Subungual hyperkeratosis'],
      causes: ['Psoriatic involvement of nail matrix and bed'],
    },
    {
      name: 'Paronychia',
      description: 'Nail fold infection',
      symptoms: ['Pain', 'Swelling', 'Erythema of nail fold'],
      causes: ['Acute: Staphylococcus', 'Chronic: Candida'],
    },
  ],
});

// ============================================================================
// WOUND HEALING PHASES
// ============================================================================

export const WOUND_HEALING_PHASES: WoundHealingPhaseDetail[] = [
  {
    phase: 'hemostasis',
    timeframe: 'Immediate (seconds to minutes)',
    description: 'Bleeding control through coagulation cascade',
    keyEvents: [
      'Vascular spasm',
      'Platelet plug formation',
      'Coagulation cascade activation',
      'Fibrin clot formation',
    ],
    cells: ['Platelets', 'Endothelial cells'],
    mediators: [
      'Thrombin',
      'Fibrinogen/Fibrin',
      'vWF',
      'PDGF (from platelets)',
      'TGF-β',
    ],
    clinicalNote: 'Anticoagulants and platelet disorders impair this phase',
  },
  {
    phase: 'inflammation',
    timeframe: 'Day 1-4',
    description: 'Debris clearance and infection prevention',
    keyEvents: [
      'Vasodilation and increased permeability',
      'Neutrophil infiltration (first 24-48h)',
      'Macrophage infiltration (48-72h)',
      'Phagocytosis of bacteria and debris',
      'Release of growth factors',
    ],
    cells: ['Neutrophils', 'Macrophages', 'Lymphocytes', 'Mast cells'],
    mediators: [
      'Histamine',
      'Prostaglandins',
      'IL-1, IL-6',
      'TNF-α',
      'VEGF',
      'TGF-β',
    ],
    clinicalNote: 'NSAIDs and steroids can impair this phase',
  },
  {
    phase: 'proliferation',
    timeframe: 'Day 4-21',
    description: 'Tissue regeneration and wound coverage',
    keyEvents: [
      'Angiogenesis (new blood vessel formation)',
      'Fibroplasia (fibroblast proliferation)',
      'Granulation tissue formation',
      'Epithelialization (wound coverage)',
      'Wound contraction',
    ],
    cells: [
      'Fibroblasts',
      'Endothelial cells',
      'Keratinocytes',
      'Myofibroblasts',
    ],
    mediators: ['VEGF', 'FGF', 'PDGF', 'TGF-β', 'EGF', 'KGF'],
    clinicalNote: 'Adequate nutrition and oxygen critical; diabetes impairs this phase',
  },
  {
    phase: 'remodeling',
    timeframe: 'Day 21 - 1+ years',
    description: 'Scar maturation and strengthening',
    keyEvents: [
      'Collagen type III replaced by type I',
      'Collagen cross-linking increases',
      'Wound contraction continues',
      'Myofibroblast apoptosis',
      'Final tensile strength achieved (80% of normal)',
    ],
    cells: ['Fibroblasts', 'Myofibroblasts'],
    mediators: ['MMPs', 'TIMPs', 'TGF-β'],
    clinicalNote: 'Abnormal remodeling leads to hypertrophic scars or keloids',
  },
];

// ============================================================================
// SKIN LESION TYPES
// ============================================================================

export const SKIN_LESION_TYPES: SkinLesionType[] = [
  {
    id: 'macule',
    name: 'Macule',
    morphology: 'macule',
    size: '<1 cm',
    description: 'Flat, circumscribed area of color change',
    examples: ['Freckle', 'Flat nevus', 'Vitiligo patch', 'Café-au-lait spot'],
    clinicalNote: 'If >1 cm, termed a "patch"',
  },
  {
    id: 'papule',
    name: 'Papule',
    morphology: 'papule',
    size: '<1 cm',
    description: 'Elevated, solid lesion',
    examples: ['Acne', 'Wart', 'Molluscum', 'Lichen planus'],
    clinicalNote: 'If >1 cm, termed a "plaque" or "nodule"',
  },
  {
    id: 'plaque',
    name: 'Plaque',
    morphology: 'plaque',
    size: '>1 cm',
    description: 'Elevated, flat-topped lesion',
    examples: ['Psoriasis', 'Eczema', 'Mycosis fungoides'],
    clinicalNote: 'Often formed by coalescence of papules',
  },
  {
    id: 'nodule',
    name: 'Nodule',
    morphology: 'nodule',
    size: '1-2 cm',
    description: 'Elevated, solid, deeper lesion',
    examples: ['Lipoma', 'Cyst', 'Dermatofibroma', 'Nodular BCC'],
    clinicalNote: 'Involves dermis or subcutis',
  },
  {
    id: 'vesicle',
    name: 'Vesicle',
    morphology: 'vesicle',
    size: '<1 cm',
    description: 'Fluid-filled blister',
    examples: ['Herpes simplex', 'Varicella', 'Contact dermatitis', 'Dyshidrotic eczema'],
    clinicalNote: 'Contains clear fluid; if purulent, termed "pustule"',
  },
  {
    id: 'bulla',
    name: 'Bulla',
    morphology: 'bulla',
    size: '>1 cm',
    description: 'Large fluid-filled blister',
    examples: ['Bullous pemphigoid', 'Burns', 'Bullous impetigo'],
    clinicalNote: 'Subepidermal (pemphigoid) vs intraepidermal (pemphigus) distinction important',
  },
  {
    id: 'pustule',
    name: 'Pustule',
    morphology: 'pustule',
    size: 'Variable',
    description: 'Pus-filled lesion',
    examples: ['Acne pustule', 'Folliculitis', 'Impetigo'],
    clinicalNote: 'Not always infectious (e.g., pustular psoriasis is sterile)',
  },
  {
    id: 'wheal',
    name: 'Wheal (Hive)',
    morphology: 'wheal',
    size: 'Variable',
    description: 'Transient, edematous, erythematous papule/plaque',
    examples: ['Urticaria', 'Dermographism', 'Insect bite reaction'],
    clinicalNote: 'Individual lesions last <24 hours; if longer, consider urticarial vasculitis',
  },
];

// ============================================================================
// SKIN RECEPTORS
// ============================================================================

export const SKIN_RECEPTORS: SkinReceptor[] = [
  {
    id: 'meissner-corpuscle',
    name: 'Meissner Corpuscle',
    location: 'Dermal papillae (glabrous skin - fingertips, lips)',
    sensation: 'Light touch, texture discrimination',
    adaptation: 'Rapidly adapting (RA)',
    characteristics: [
      'Encapsulated receptor',
      'Highest density in fingertips',
      'Critical for fine touch',
      'Decreases with age',
    ],
  },
  {
    id: 'merkel-disc',
    name: 'Merkel Disc',
    location: 'Stratum basale (fingertips, lips, hair follicles)',
    sensation: 'Light touch, pressure, form discrimination',
    adaptation: 'Slowly adapting (SA1)',
    characteristics: [
      'Merkel cell-neurite complex',
      'High spatial resolution',
      'Discriminates edges and curves',
      'Important for Braille reading',
    ],
  },
  {
    id: 'pacinian-corpuscle',
    name: 'Pacinian Corpuscle',
    location: 'Deep dermis, hypodermis, periosteum',
    sensation: 'Deep pressure, vibration (high frequency)',
    adaptation: 'Rapidly adapting (RA)',
    characteristics: [
      'Large, onion-like structure',
      'Detects vibration 100-400 Hz',
      'Important for tool use',
      'Few needed due to large receptive field',
    ],
  },
  {
    id: 'ruffini-ending',
    name: 'Ruffini Ending',
    location: 'Dermis, joint capsules',
    sensation: 'Skin stretch, sustained pressure',
    adaptation: 'Slowly adapting (SA2)',
    characteristics: [
      'Spindle-shaped receptor',
      'Sensitive to lateral stretch',
      'Important for finger position sense',
      'Contributes to proprioception',
    ],
  },
  {
    id: 'free-nerve-endings',
    name: 'Free Nerve Endings',
    location: 'Throughout skin, concentrated in epidermis',
    sensation: 'Pain, temperature, crude touch',
    adaptation: 'Variable',
    characteristics: [
      'Unmyelinated C fibers (slow pain, warmth)',
      'Myelinated Aδ fibers (fast pain, cold)',
      'Nociceptors detect tissue damage',
      'Thermoreceptors for temperature',
    ],
  },
];

// ============================================================================
// STATISTICS
// ============================================================================

export const INTEGUMENTARY_STATISTICS: IntegumentaryStatistics = {
  totalSkinArea: '1.5-2.0 m² (adult)',
  skinWeight: '3.5-4.5 kg (6-7% body weight)',
  epidermisThickness: '0.05-1.5 mm',
  dermisThickness: '0.3-3.0 mm',
  hairFollicles: '~5 million total, ~100,000 on scalp',
  sweatGlands: '2-4 million eccrine glands',
  sebaceousGlands: '~800/cm² on face',
  skinRenewalTime: '28-30 days',
};

// ============================================================================
// API FUNCTIONS
// ============================================================================

export function getSkinLayer(id: string): SkinLayer | undefined {
  return skinLayers.get(id);
}

export function getAllSkinLayers(): SkinLayer[] {
  return Array.from(skinLayers.values());
}

export function getSkinLayersByType(type: SkinLayerType): SkinLayer[] {
  return Array.from(skinLayers.values()).filter((l) => l.type === type);
}

export function getHairFollicle(id: string): HairFollicle | undefined {
  return hairFollicles.get(id);
}

export function getSweatGland(id: string): SweatGland | undefined {
  return sweatGlands.get(id);
}

export function getAllSweatGlands(): SweatGland[] {
  return Array.from(sweatGlands.values());
}

export function getSebaceousGland(id: string): SebaceousGland | undefined {
  return sebaceousGlands.get(id);
}

export function getNailStructure(id: string): NailStructure | undefined {
  return nailStructures.get(id);
}

export function getEpidermisSubLayers(): EpidermisSubLayer[] {
  return EPIDERMIS_SUBLAYERS;
}

export function getDermisStructures(): DermisStructure[] {
  return DERMIS_STRUCTURES;
}

export function getWoundHealingPhases(): WoundHealingPhaseDetail[] {
  return WOUND_HEALING_PHASES;
}

export function getSkinLesionTypes(): SkinLesionType[] {
  return SKIN_LESION_TYPES;
}

export function getSkinReceptors(): SkinReceptor[] {
  return SKIN_RECEPTORS;
}

export function getIntegumentaryStatistics(): IntegumentaryStatistics {
  return INTEGUMENTARY_STATISTICS;
}

export function searchIntegumentary(query: string): {
  skinLayers: SkinLayer[];
  sweatGlands: SweatGland[];
} {
  const q = query.toLowerCase();
  return {
    skinLayers: Array.from(skinLayers.values()).filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.functions.some((f) => f.toLowerCase().includes(q))
    ),
    sweatGlands: Array.from(sweatGlands.values()).filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.functions.some((f) => f.toLowerCase().includes(q))
    ),
  };
}

export function getSkinLayerExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const layer = skinLayers.get(id);
  if (!layer) return undefined;
  return layer.explanations[`level${level}`];
}
