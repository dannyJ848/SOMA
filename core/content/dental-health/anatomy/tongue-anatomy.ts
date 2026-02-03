/**
 * Tongue Anatomy - Comprehensive Educational Content
 *
 * Covers tongue structure, papillae, taste perception,
 * and clinical correlations for dental and medical professionals.
 */

import { EducationalContent } from '../../types';

export const tongueAnatomy: EducationalContent = {
  id: 'structure-tongue-anatomy',
  type: 'structure',
  name: 'Tongue Anatomy',
  alternateNames: [
    'Lingual Anatomy',
    'Glossal Structure',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The tongue is a muscular organ in your mouth that helps you taste food, speak clearly, chew, and swallow. It has tiny bumps called papillae that contain taste buds.',
      explanation: `**What does your tongue do?**

Your tongue is an amazing muscle that does many important jobs:
- **Tasting**: Detects sweet, salty, sour, bitter, and savory flavors
- **Talking**: Helps form words and sounds
- **Chewing**: Moves food around your mouth
- **Swallowing**: Pushes food to the back of your throat

**What are those bumps on your tongue?**

The bumps you see are called papillae. Most of them contain taste buds that let you experience flavors. There are about 10,000 taste buds on your tongue!

**Parts of the tongue:**
- **Tip (apex)**: The front, pointy part
- **Body**: The main middle part
- **Back (base)**: The part near your throat
- **Undersurface**: The bottom of your tongue

**Fun facts:**
- Your tongue is attached to a small bone called the hyoid bone
- Each person's tongue print is unique, like a fingerprint
- Your tongue is the only muscle attached at just one end

**Taking care of your tongue:**
- Brush your tongue when you brush your teeth
- A coated tongue can cause bad breath
- Changes in tongue color or sores should be checked by a doctor`,
      keyTerms: [
        { term: 'tongue', definition: 'The muscular organ in your mouth used for tasting, speaking, and swallowing' },
        { term: 'papillae', definition: 'The small bumps on your tongue that contain taste buds' },
        { term: 'taste buds', definition: 'Tiny sensors in the papillae that detect flavors' },
      ],
      analogies: [
        'Your tongue is like an octopus tentacle - very flexible and strong.',
        'The papillae on your tongue are like tiny fingers that grab onto food and taste it.',
        'Taste buds are like little doors that only open for certain flavors.',
      ],
      examples: [
        'When you eat ice cream, the taste buds on your tongue detect the sweetness.',
        'When you say the letter "L", your tongue touches the roof of your mouth.',
      ],
    },
    2: {
      level: 2,
      summary: 'The tongue is a muscular organ consisting of intrinsic and extrinsic muscles, covered by specialized mucosa containing four types of papillae. Taste perception involves gustatory receptors detecting five basic tastes via cranial nerves VII, IX, and X.',
      explanation: `## Tongue Gross Anatomy

**Surface Landmarks:**
- **Median sulcus**: Midline groove on dorsum
- **Sulcus terminalis**: V-shaped groove dividing anterior 2/3 from posterior 1/3
- **Foramen cecum**: Depression at apex of sulcus terminalis (thyroid remnant)
- **Lingual tonsils**: Lymphoid tissue at base

**Muscles of the Tongue:**

*Intrinsic Muscles (change tongue shape):*
| Muscle | Action |
|--------|--------|
| Superior longitudinal | Curls tip up, shortens tongue |
| Inferior longitudinal | Curls tip down, shortens tongue |
| Transverse | Narrows and elongates |
| Vertical | Flattens and widens |

*Extrinsic Muscles (move tongue position):*
| Muscle | Origin | Action |
|--------|--------|--------|
| Genioglossus | Mandible | Protrudes, depresses center |
| Hyoglossus | Hyoid bone | Depresses, retracts |
| Styloglossus | Styloid process | Retracts, elevates sides |
| Palatoglossus | Soft palate | Elevates back of tongue |

## Papillae and Taste

**Types of Papillae:**

| Type | Location | Function | Taste Buds |
|------|----------|----------|------------|
| Filiform | Entire dorsum | Mechanical (no taste) | None |
| Fungiform | Tip and edges | Taste | 3-5 each |
| Circumvallate | In front of sulcus terminalis (8-12) | Taste | 100-300 each |
| Foliate | Lateral posterior | Taste | Variable |

**Taste Modalities:**
- Sweet (sugars)
- Salt (sodium)
- Sour (acids)
- Bitter (alkaloids, toxins)
- Umami (glutamate - savory)

*Note: The "tongue map" (different areas for different tastes) is a myth - all tastes can be detected across the tongue.*

## Innervation

**Sensory (Touch, Temperature, Pain):**
- Anterior 2/3: Lingual nerve (V3)
- Posterior 1/3: Glossopharyngeal nerve (CN IX)

**Taste:**
- Anterior 2/3: Chorda tympani → Facial nerve (CN VII)
- Posterior 1/3: Glossopharyngeal nerve (CN IX)
- Epiglottic region: Vagus nerve (CN X)

**Motor (All Except Palatoglossus):**
- Hypoglossal nerve (CN XII)
- Palatoglossus: Vagus (CN X)`,
      keyTerms: [
        { term: 'sulcus terminalis', definition: 'V-shaped groove dividing the anterior 2/3 (oral) from posterior 1/3 (pharyngeal) of tongue', pronunciation: 'SUL-kus ter-mi-NAL-is' },
        { term: 'genioglossus', definition: 'Extrinsic tongue muscle; protrudes and depresses tongue; tested by "stick out your tongue"', pronunciation: 'JEE-nee-oh-GLOSS-us' },
        { term: 'circumvallate papillae', definition: 'Large papillae in front of sulcus terminalis containing many taste buds', pronunciation: 'SIR-kum-VAL-ate' },
        { term: 'chorda tympani', definition: 'Branch of facial nerve carrying taste from anterior 2/3 of tongue' },
        { term: 'hypoglossal nerve', definition: 'CN XII; motor supply to all tongue muscles except palatoglossus' },
      ],
      analogies: [
        'The tongue muscles work like a hydraulic system - changing shape and position without bones.',
        'Taste buds are like specialized doorbells, each ringing for a different type of molecule.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tongue histology reveals keratinized filiform papillae and non-keratinized fungiform, circumvallate, and foliate papillae with taste buds. Gustatory transduction involves G-protein coupled receptors (T1R, T2R families) and ion channels.',
      explanation: `## Tongue Histology

**Dorsal Surface Epithelium:**
- Stratified squamous epithelium
- Keratinized: Filiform papillae (most abrasive)
- Non-keratinized: Fungiform, circumvallate, foliate

**Papillae Histology:**

*Filiform:*
- Most numerous (~250 per cm²)
- Keratinized, pointed tips
- Mechanical function only
- No taste buds

*Fungiform:*
- Mushroom-shaped, non-keratinized
- Vascularized connective tissue core (appear pink/red)
- 3-5 taste buds in apical epithelium
- Concentrated on tip and margins

*Circumvallate:*
- Dome-shaped, surrounded by moat (vallum)
- Von Ebner's glands drain into troughs (serous secretion)
- 100-300 taste buds on lateral walls
- 8-12 papillae in V-formation

*Foliate:*
- Parallel folds on posterolateral margins
- More prominent in children
- Rudimentary in adults
- Variable taste bud numbers

## Taste Bud Structure

**Cellular Composition:**
- Type I cells (dark): Support cells, glial-like
- Type II cells (light): Receptor cells for sweet, bitter, umami
- Type III cells (intermediate): Sour receptors, synaptic connections
- Type IV cells (basal): Stem cells for renewal

**Taste Bud Anatomy:**
- 50-100 cells per bud
- Taste pore: Opening at epithelial surface
- Microvilli project into pore
- Complete turnover every 10-14 days

## Gustatory Transduction

**Sweet, Bitter, Umami (Type II cells):**
- G-protein coupled receptors
- Sweet: T1R2 + T1R3 heterodimer
- Umami: T1R1 + T1R3 heterodimer
- Bitter: T2R family (~25 genes)
- Signaling: Gustducin → PLCβ2 → IP3 → Ca²⁺ release → ATP release → purinergic receptors on nerve

**Salt (Type I cells):**
- ENaC (epithelial sodium channel) - amiloride-sensitive
- Non-specific cation channels - amiloride-insensitive

**Sour (Type III cells):**
- Proton detection mechanisms
- PKD2L1 channel
- Direct proton entry

## Tongue Vasculature

**Arterial Supply:**
- Lingual artery (main supply, from external carotid)
  - Branches: Dorsal lingual, deep lingual, sublingual

**Venous Drainage:**
- Lingual veins → internal jugular

**Lymphatic Drainage:**
- Tip: Submental nodes
- Margins: Submandibular nodes
- Posterior: Deep cervical nodes
- *Bilateral drainage at midline* (important for cancer spread)

## Clinical Correlations

**Tongue Deviation:**
- CN XII palsy: Tongue deviates toward affected side
- "Lick the wound" - tongue moves toward weak side

**Glossitis:**
- Smooth, red tongue (loss of papillae)
- Causes: B12 deficiency, iron deficiency, folate deficiency

**Geographic Tongue (Benign Migratory Glossitis):**
- Irregular smooth patches
- Migrating pattern
- Usually asymptomatic
- Associated with fissured tongue, psoriasis`,
      keyTerms: [
        { term: 'taste bud', definition: 'Onion-shaped sensory organ containing 50-100 specialized cells for taste detection' },
        { term: 'gustducin', definition: 'G-protein in taste cells mediating sweet, bitter, and umami signal transduction' },
        { term: 'T1R receptors', definition: 'Taste receptor family; T1R2+T1R3 for sweet, T1R1+T1R3 for umami' },
        { term: 'T2R receptors', definition: 'Family of ~25 bitter taste receptors detecting diverse compounds' },
        { term: 'von Ebner glands', definition: 'Minor salivary glands secreting serous fluid into circumvallate papillae troughs' },
        { term: 'lingual artery', definition: 'Main arterial supply to tongue from external carotid artery' },
      ],
      clinicalNotes: 'Bilateral lymphatic drainage at tongue midline means midline cancers can metastasize to either side. Tongue deviation toward the lesion indicates ipsilateral hypoglossal nerve injury. B12/iron deficiency classically causes glossitis - consider nutritional workup for smooth, red tongue.',
    },
    4: {
      level: 4,
      summary: 'Advanced tongue biology encompasses gustatory signal processing integration with olfaction and somatosensation, genetic variation in taste perception (supertasters, TAS2R38 polymorphisms), and the tongue as a window to systemic disease.',
      explanation: `## Gustatory Signal Processing

**Peripheral Coding:**
- Labeled-line model: Each fiber carries one taste modality
- Across-fiber pattern: Combination coding across multiple fibers
- Current understanding: Predominant labeled-line with peripheral processing

**Taste Pathways:**

\`\`\`
Taste buds → CN VII, IX, X → Nucleus tractus solitarius (medulla)
                            → Ventral posteromedial nucleus (thalamus)
                            → Gustatory cortex (anterior insula, frontal operculum)
\`\`\`

**Integration of Flavor:**
- Flavor = Taste + Smell + Somatosensation
- Retronasal olfaction critical for flavor perception
- Orbitofrontal cortex integrates multimodal inputs
- Explains why food tastes bland with nasal congestion

**Hedonic Evaluation:**
- Ventral striatum (reward)
- Amygdala (emotional valence)
- Hypothalamus (feeding behavior integration)

## Genetic Variation in Taste

**TAS2R38 Polymorphisms (Bitter):**
- Gene for bitter receptor to phenylthiocarbamide (PTC) / PROP
- Three SNPs create PAV (taster) or AVI (non-taster) haplotypes
- PAV/PAV: Supertaster
- PAV/AVI: Medium taster
- AVI/AVI: Non-taster
- ~25% population non-tasters, 25% supertasters

**Clinical Implications:**
- Supertasters: May avoid bitter vegetables (broccoli, Brussels sprouts)
- Possible associations:
  - Alcohol and cigarette use (protection in supertasters)
  - Dietary preferences affecting cardiovascular risk
  - Medication taste affecting compliance

**Fungiform Papillae Density:**
- Correlates with taste intensity perception
- Supertasters: Higher density (~60 per cm²)
- Non-tasters: Lower density (~15 per cm²)

**Other Taste Genes:**
- TAS1R1/TAS1R3: Umami perception
- TAS1R2/TAS1R3: Sweet perception
- SCNN1A: Salt sensitivity
- PKD2L1: Sour perception

## Tongue as Window to Systemic Disease

**Nutritional Deficiencies:**

| Finding | Deficiency |
|---------|------------|
| Glossitis (smooth, red) | B12, iron, folate, B2, B6 |
| Magenta tongue | B2 (riboflavin) |
| Pale tongue | Iron deficiency anemia |
| Angular cheilitis | B2, iron |

**Systemic Diseases:**

| Finding | Associated Conditions |
|---------|----------------------|
| Macroglossia | Hypothyroidism, amyloidosis, acromegaly, Down syndrome |
| Strawberry tongue | Scarlet fever, Kawasaki disease |
| Black hairy tongue | Antibiotic use, smoking, poor hygiene |
| Oral hairy leukoplakia | HIV/AIDS (lateral tongue) |
| Fissured tongue | Melkersson-Rosenthal syndrome, Down syndrome |
| Tongue fasciculations | ALS |
| Bald tongue | Celiac disease |

**Oral Cancer Indicators:**
- Non-healing ulcer >2 weeks
- White patch (leukoplakia) - premalignant
- Red patch (erythroplakia) - high malignant potential
- Induration, fixation

## Tongue in Sleep and Airway

**Obstructive Sleep Apnea:**
- Tongue base collapse during sleep
- Macroglossia is risk factor
- Tongue fat accumulation correlates with OSA severity
- Genioglossus hypotonia during REM sleep

**Genioglossus and Airway:**
- Primary dilator of pharynx
- Active during inspiration
- Decreased activity in OSA
- Target of hypoglossal nerve stimulation (Inspire device)

**Tongue Size Assessment:**
- Mallampati classification (Class I-IV)
- Friedman tongue position
- Predictor of difficult intubation and OSA`,
      keyTerms: [
        { term: 'supertaster', definition: 'Individual with PAV/PAV TAS2R38 genotype and high fungiform papillae density; intense taste perception' },
        { term: 'TAS2R38', definition: 'Gene encoding bitter receptor; polymorphisms determine PTC/PROP taster status' },
        { term: 'retronasal olfaction', definition: 'Smell perception via posterior pharynx during eating; critical component of flavor' },
        { term: 'nucleus tractus solitarius', definition: 'Medullary relay for taste afferents from CN VII, IX, X' },
        { term: 'macroglossia', definition: 'Enlarged tongue; causes include hypothyroidism, amyloidosis, acromegaly' },
        { term: 'oral hairy leukoplakia', definition: 'White, hairy patches on lateral tongue; EBV-related, marker of HIV immunosuppression' },
      ],
      clinicalNotes: 'Oral hairy leukoplakia on lateral tongue is virtually pathognomonic for HIV - order HIV testing. Strawberry tongue with fever should prompt consideration of Kawasaki disease in children or scarlet fever. TAS2R38 genotyping is research tool but may eventually guide personalized nutrition.',
    },
    5: {
      level: 5,
      summary: 'Contemporary tongue medicine integrates oral cancer screening protocols, the tongue microbiome in disease, precision nutrition based on taste genetics, and emerging therapeutic applications including hypoglossal nerve stimulation for OSA.',
      explanation: `## Oral Cancer Screening and the Tongue

**Epidemiology:**
- Oral cavity cancer: ~370,000 cases/year globally
- Tongue most common site (especially lateral/ventral)
- 90% squamous cell carcinoma
- Rising incidence in young non-smokers (HPV-related)

**Risk Factors:**

| Factor | Relative Risk |
|--------|---------------|
| Tobacco + alcohol | 15x (synergistic) |
| HPV-16 | 3-5x (oropharynx > oral cavity) |
| Betel quid | 2-7x |
| Poor oral hygiene | 1.5x |
| Lichen planus | 1-5x |
| Leukoplakia | 1-17% malignant transformation |

**Screening Examination:**
- Visual inspection under good light
- Bimanual palpation of tongue
- Lateral borders and ventral surface are high-risk areas
- White patches (leukoplakia): 1-17% malignant transformation
- Red patches (erythroplakia): 50%+ show dysplasia/carcinoma

**Adjunctive Technologies:**
- Toluidine blue vital staining
- Autofluorescence visualization
- Brush biopsy cytology
- None replace tissue biopsy for definitive diagnosis

**High-Risk Lesions:**
- Non-healing ulcer >2 weeks
- Erythroplakia (red patch) - biopsy all
- Leukoplakia with dysplasia
- Proliferative verrucous leukoplakia
- Oral lichen planus (especially erosive)

## Tongue Microbiome

**Composition:**
- Tongue dorsum: Dense biofilm, diverse community
- Dominant genera: Streptococcus, Veillonella, Prevotella, Neisseria
- Distinct from other oral sites

**Tongue Coating and Disease:**
- Tongue coating index correlates with halitosis
- Volatile sulfur compounds (VSCs) from bacterial metabolism
- Increased coating in diabetes, GERD

**Systemic Associations:**

| Condition | Tongue Microbiome Finding |
|-----------|---------------------------|
| Pancreatic cancer | Decreased Leptotrichia, Fusobacterium; increased Rothia, Haemophilus |
| Colorectal cancer | Specific signatures under investigation |
| Rheumatoid arthritis | Altered P. gingivalis colonization |
| Halitosis | Increased Solobacterium moorei, Atopobium parvulum |

**Therapeutic Implications:**
- Tongue cleaning reduces VSCs and halitosis
- Potential for diagnostic microbiome signatures
- Probiotics for tongue colonization under investigation

## Precision Nutrition and Taste Genetics

**Clinical Applications:**

*Vegetable Intake:*
- Supertasters avoid bitter vegetables
- Increased glucosinolate perception (broccoli, Brussels sprouts)
- Lower vegetable intake → potential cardiovascular risk

*Sweet Perception:*
- TAS1R2/TAS1R3 variants affect sugar preference
- May influence obesity risk
- Personalized sweetener recommendations

*Salt Sensitivity:*
- SCNN1A polymorphisms
- Implications for hypertension management
- Personalized sodium restriction guidance

**Emerging Research:**
- Microbiome-taste interaction
- Aging and taste decline
- Pharmacogenomics of taste-related side effects

## Hypoglossal Nerve Stimulation for OSA

**Mechanism:**
- Implanted device stimulates hypoglossal nerve
- Activates genioglossus and tongue protrusors
- Stiffens and advances tongue during inspiration
- Prevents airway collapse

**Inspire Device (FDA-approved):**
- Implantable pulse generator (IPG) in chest
- Breathing sensor on intercostal
- Stimulation cuff on hypoglossal nerve
- Synchronized stimulation with inspiration

**Patient Selection (STAR Trial Criteria):**
- Moderate-severe OSA (AHI 15-65)
- BMI <32 kg/m²
- CPAP failure/intolerance
- No complete concentric collapse at velum (DISE)

**Outcomes:**
- AHI reduction: 68% (median)
- ODI improvement: Similar
- Partner-reported snoring: Significant improvement
- Quality of life improvements
- 5-year data showing durable efficacy

**Alternative Neurostimulation:**
- Transcutaneous submental stimulation (emerging)
- Endoscopically-placed devices

## Tongue in Oral-Systemic Health

**Diabetes and Tongue:**
- Candidiasis more common
- Burning mouth symptoms
- Altered taste (dysgeusia)
- Increased tongue coating

**Xerostomia Effects:**
- Difficulty with speech and swallowing
- Increased candidiasis
- Taste alterations
- Causes: Medications, Sjogren's, radiation

**Tongue as Diagnostic Window:**
- Traditional Chinese Medicine: Tongue diagnosis
- Ayurvedic diagnosis: Tongue mapping
- Modern applications: Colorimetric analysis, smartphone apps
- Scientific validation ongoing

**Amyloidosis:**
- Macroglossia in 10-15% of AL amyloidosis
- Scalloped edges from teeth impressions
- May compromise airway
- Associated with prognosis`,
      keyTerms: [
        { term: 'erythroplakia', definition: 'Red patch on oral mucosa; >50% show dysplasia or carcinoma on biopsy - always biopsy' },
        { term: 'leukoplakia', definition: 'White patch on oral mucosa that cannot be rubbed off; 1-17% malignant transformation risk' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implantable device therapy for OSA; stimulates tongue protrusor muscles during sleep' },
        { term: 'DISE', definition: 'Drug-induced sleep endoscopy; evaluates airway collapse pattern to select OSA therapy' },
        { term: 'tongue dorsum microbiome', definition: 'Complex microbial community on tongue surface; implicated in halitosis and potential systemic disease biomarkers' },
        { term: 'volatile sulfur compounds', definition: 'Bacterial metabolites (H2S, methyl mercaptan) causing halitosis; produced on tongue dorsum' },
      ],
      clinicalNotes: `Key clinical pearls:
1. All non-healing oral ulcers >2 weeks warrant biopsy - don't miss tongue cancer
2. Erythroplakia is higher risk than leukoplakia - biopsy immediately
3. Lateral and ventral tongue are highest-risk sites - examine carefully
4. Hypoglossal nerve stimulation is option for CPAP-intolerant OSA patients
5. Tongue scraping/cleaning is evidence-based treatment for halitosis
6. Black hairy tongue is benign - usually from antibiotics, smoking, or poor hygiene
7. Strawberry tongue + fever = consider Kawasaki (children) or scarlet fever
8. Macroglossia workup: Consider amyloidosis, hypothyroidism, acromegaly
9. Tongue fasciculations with wasting = LMN process; consider ALS
10. For oral cancer screening, palpation is as important as visualization`,
    },
  },

  media: [
    {
      id: 'tongue-dorsum',
      type: 'diagram',
      filename: 'tongue-dorsum-anatomy.svg',
      title: 'Tongue Dorsum Anatomy',
      description: 'Diagram showing papillae types and surface landmarks',
    },
    {
      id: 'tongue-muscles',
      type: 'diagram',
      filename: 'tongue-musculature.svg',
      title: 'Tongue Musculature',
      description: 'Intrinsic and extrinsic muscles of the tongue',
    },
  ],

  citations: [
    {
      id: 'gray-anatomy-tongue',
      type: 'textbook',
      title: 'Gray\'s Anatomy',
      chapter: 'Tongue and Oral Cavity',
      source: 'Elsevier',
    },
    {
      id: 'netter-head-neck',
      type: 'textbook',
      title: 'Atlas of Human Anatomy',
      authors: ['Netter, F.H.'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'structure-oral-cavity-anatomy', targetType: 'structure', relationship: 'parent', label: 'Oral Cavity Anatomy' },
    { targetId: 'condition-oral-cancer-screening', targetType: 'condition', relationship: 'related', label: 'Oral Cancer Screening' },
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'sibling', label: 'Tooth Anatomy' },
  ],

  tags: {
    systems: ['digestive', 'nervous', 'dental'],
    structures: ['tongue', 'papillae', 'lingual muscles'],
    topics: ['anatomy', 'gustation', 'neuroanatomy'],
    keywords: ['tongue', 'taste', 'papillae', 'hypoglossal', 'oral cancer'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tongueAnatomy;
