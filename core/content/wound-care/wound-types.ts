/**
 * Wound Types and Classification
 *
 * Comprehensive content on wound classification systems including
 * acute vs chronic, mechanism of injury, depth, and contamination status.
 */

import { EducationalContent } from '../types';

export const woundTypes: EducationalContent = {
  id: 'wound-care-types',
  type: 'concept',
  name: 'Wound Types and Classification',
  alternateNames: ['Wound Classification', 'Types of Wounds', 'Wound Categories'],

  levels: {
    1: {
      level: 1,
      summary: 'Wounds can be grouped by how they happened, how deep they are, and whether they are clean or dirty.',
      explanation: `There are many kinds of wounds. Learning about different types helps you know how to care for them.

## By How They Happened

**Cuts (Incisions and Lacerations)**
- Clean cuts made by sharp objects like knives or glass
- The edges may be smooth or jagged

**Scrapes (Abrasions)**
- When skin rubs against a rough surface
- Like skinned knees from falling on pavement
- Usually shallow but can be painful

**Punctures**
- Holes made by pointed objects like nails or needles
- Small on the outside but can be deep
- Higher risk of infection because germs get pushed deep

**Tears (Avulsions)**
- When skin or tissue is torn away
- Can happen in accidents with machinery or animal bites

**Bruises (Contusions)**
- Damage under the skin from impact
- Skin isn't broken but blood vessels are damaged
- Shows as purple/blue marks that turn yellow as they heal

## By How Deep They Are

**Superficial (Surface)**
- Only the top layer of skin is affected
- Examples: minor scrapes, first-degree burns

**Partial Thickness**
- Goes through the top layer into the deeper layer
- Examples: deeper scrapes, second-degree burns, some cuts

**Full Thickness**
- Goes through all layers of skin
- May reach fat, muscle, or bone
- Usually needs medical care to heal

## By How Clean They Are

**Clean Wounds**
- Made in a clean way (like surgery)
- Low chance of infection

**Dirty Wounds**
- Contaminated with dirt, germs, or debris
- Higher chance of infection
- Need thorough cleaning

## Acute vs Chronic

**Acute Wounds**
- New wounds that follow normal healing steps
- Usually heal in 4-6 weeks
- Examples: surgical cuts, fresh injuries

**Chronic Wounds**
- Wounds that don't heal in the expected time
- Stuck in one of the healing phases
- Examples: bed sores, diabetic foot ulcers
- Usually need special care`,
      keyTerms: [
        { term: 'laceration', definition: 'A cut or tear in the skin, often with jagged edges' },
        { term: 'abrasion', definition: 'A scrape where the top layer of skin is rubbed off' },
        { term: 'puncture', definition: 'A hole made by a sharp, pointed object' },
        { term: 'chronic wound', definition: 'A wound that does not heal in the normal amount of time' },
      ],
      analogies: [
        'Wound depth is like digging in soil: superficial is just scratching the surface, partial thickness is digging a small hole, and full thickness goes all the way through.',
        'Clean vs dirty wounds is like clean laundry vs clothes you wore playing in the mud - one needs more washing than the other.',
      ],
      examples: [
        'A scraped knee from falling off a bike is an abrasion - painful but usually heals quickly with cleaning and a bandage.',
        'Stepping on a rusty nail creates a puncture wound that may need a tetanus shot.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wounds are classified by mechanism of injury, depth of tissue involvement, contamination status, and healing timeline to guide appropriate treatment.',
      explanation: `## Classification by Mechanism of Injury

### Incisions
- Made by sharp cutting objects (knife, glass, scalpel)
- Clean, well-defined edges
- Length > width
- Bleeding may be significant if vessels are cut
- Generally heal well with proper closure

### Lacerations
- Caused by blunt trauma or tearing force
- Irregular, jagged edges
- May have tissue bridging
- Associated with crush injury
- More complex repair needed

### Abrasions
- Friction injury removing superficial skin layers
- Epidermis and superficial dermis affected
- Large surface area possible
- Painful (exposed nerve endings)
- Foreign body contamination common

### Puncture Wounds
- Caused by sharp, pointed objects
- Small surface wound, potentially deep track
- High infection risk (anaerobic environment)
- May involve deeper structures
- Examples: nails, needles, animal teeth, thorns

### Avulsions
- Tissue torn away from attachment
- May be partial (skin flap) or complete (amputation)
- Significant bleeding common
- Compromised blood supply to remaining tissue
- May require specialized reconstruction

### Crush Injuries
- Compression trauma
- Tissue damage exceeds visible wound
- Ischemia-reperfusion injury risk
- Compartment syndrome possibility
- Rhabdomyolysis in severe cases

### Bites
- Human and animal bites
- Crush + puncture mechanism
- High bacterial contamination
- Polymicrobial infections common
- Cat bites: Higher infection rate due to deep puncture
- Human bites: Consider Eikenella corrodens

## Classification by Depth

### Superficial (Epidermal)
- Epidermis only
- Heals by re-epithelialization
- Minimal scarring
- Example: First-degree burns, minor abrasions

### Partial Thickness (Dermal)
- Extends into dermis
- Superficial partial: Papillary dermis, blisters, painful
- Deep partial: Reticular dermis, less painful, hair follicles involved
- Heals from wound edges and dermal appendages

### Full Thickness
- Through entire dermis
- May extend to subcutaneous fat, fascia, muscle, bone
- No remaining epithelial elements
- Requires wound contraction + edge epithelialization
- Skin grafting often needed

## Wound Contamination Classes

| Class | Definition | Infection Rate | Examples |
|-------|------------|----------------|----------|
| Clean | No inflammation, sterile technique, no entry to GI/GU/respiratory tract | <2% | Elective hernia repair, thyroidectomy |
| Clean-contaminated | Controlled entry to GI/GU/respiratory tract without spillage | 3-11% | Cholecystectomy, C-section |
| Contaminated | Open trauma <4 hours, major break in sterile technique, gross GI spillage | 10-17% | Open fracture, bowel injury |
| Dirty/Infected | Old trauma >4 hours, existing infection, perforated viscera | >27% | Abscess drainage, perforated appendix |

## Acute vs Chronic Wounds

### Acute Wounds
- Progress through healing phases in expected timeframe
- Typical closure: 4-6 weeks
- Adequate blood supply and nutrition
- No underlying conditions preventing healing

### Chronic Wounds (>4-6 weeks without healing)
**Common types:**
- Pressure ulcers (immobility)
- Diabetic foot ulcers (neuropathy, vasculopathy)
- Venous leg ulcers (venous insufficiency)
- Arterial ulcers (peripheral artery disease)

**Characteristics:**
- Elevated proteases (MMPs)
- Senescent cells
- Biofilm formation
- Growth factor degradation
- Prolonged inflammation

## Wound Assessment Components

1. **Location** - Affects blood supply, closure options
2. **Size** - Length x width x depth
3. **Wound bed** - Color: red (granulation), yellow (slough), black (eschar)
4. **Edges** - Attached, rolled, macerated, undermined
5. **Exudate** - Amount, color, odor
6. **Surrounding skin** - Erythema, induration, maceration
7. **Pain** - Type, severity, timing`,
      keyTerms: [
        { term: 'avulsion', definition: 'Injury where tissue is torn away from its attachment, either partially (flap) or completely', pronunciation: 'ah-VUL-shun' },
        { term: 'undermining', definition: 'Tissue destruction extending under intact skin at wound edges, creating a pocket' },
        { term: 'slough', definition: 'Dead tissue that is soft, moist, and yellow/tan in color, needs to be removed for healing', pronunciation: 'sluff' },
        { term: 'eschar', definition: 'Dead tissue that is dry, hard, and black/brown, like a thick scab', pronunciation: 'ES-kar' },
        { term: 'maceration', definition: 'Skin softening and breakdown from prolonged moisture exposure' },
      ],
      clinicalNotes: 'All wounds need tetanus prophylaxis assessment. Puncture wounds through footwear carry Pseudomonas risk. Cat bites have 30-50% infection rate and may require prophylactic antibiotics. Human bites over MCP joints (fight bites) require aggressive treatment.',
    },

    3: {
      level: 3,
      summary: 'Wound classification integrates etiology, tissue involvement depth, contamination level, and chronicity to guide evidence-based management including closure technique, antibiotic prophylaxis, and wound bed preparation.',
      explanation: `## Mechanistic Wound Classification

### Sharp Force Injuries

**Incised Wounds:**
- Sharp-edged weapon/object (knife, razor, glass)
- Clean-cut margins, no tissue bridging
- Wound deeper than wide
- Hemostasis challenges with major vessel involvement
- Primary closure generally appropriate if <6-8 hours old

**Stab Wounds:**
- Depth > surface dimension
- Track may be unpredictable (deflection off bone)
- Internal organ injury assessment critical
- Imaging (CT, ultrasound) often indicated
- Never probe or blindly explore

**Chop Wounds:**
- Heavy sharp instrument with force (axe, machete)
- Incision + crush components
- Bone involvement common
- Associated fractures

### Blunt Force Injuries

**Lacerations:**
- Skin splitting over bony prominence
- Tissue bridges span wound
- Irregular margins with crush zone
- Contused, devitalized tissue
- Conservative debridement needed

**Contusions:**
- Intact epidermis, deep tissue disruption
- Intramuscular hematoma possible
- Morel-Lavallee lesion: Closed degloving injury
- May evolve over days

**Abrasions:**
- Tangential friction force
- Classification by depth:
  - Brush abrasion: Epidermis only
  - Grinding abrasion: Into dermis
  - Impact abrasion: Combined mechanisms

### Special Wound Types

**Bite Wounds:**

| Type | Key Pathogens | Special Concerns |
|------|--------------|------------------|
| Dog | Pasteurella, Streptococcus, Staphylococcus | 15-20% infection rate, crush injury |
| Cat | Pasteurella multocida | 30-50% infection rate, deep puncture |
| Human | Streptococcus, Staphylococcus, Eikenella | Highest infection risk, fight bite concerns |
| Rodent | Streptobacillus moniliformis | Rat-bite fever |
| Venomous snake | Local necrosis | Envenomation syndrome |

**Gunshot Wounds:**
- Low velocity (<600 m/s): Handgun, direct crush
- High velocity (>600 m/s): Rifle, cavitation injury
- Yaw and tumbling affect wound profile
- Fragmentation increases injury
- Entry vs exit: Exit often larger, irregular

**Blast Injuries:**
- Primary: Pressure wave (hollow viscus, ears, lungs)
- Secondary: Shrapnel/debris (penetrating)
- Tertiary: Body displacement (blunt)
- Quaternary: Burns, inhalation, crush from collapse

## Wound Depth Classification Systems

### Burn Classification (American Burn Association)
| Depth | Involved Layers | Clinical Features | Healing |
|-------|-----------------|-------------------|---------|
| Superficial (1st degree) | Epidermis | Red, dry, painful, no blisters | 3-5 days |
| Superficial partial (2nd degree) | Epidermis + papillary dermis | Blisters, weeping, very painful | 7-21 days |
| Deep partial (2nd degree) | Epidermis + reticular dermis | Mottled pink/white, less painful | 3-6 weeks, scarring |
| Full thickness (3rd degree) | All skin layers | White/brown/black, leathery, insensate | Requires grafting |
| 4th degree | Skin + underlying structures | Charred, extends to muscle/bone | Amputation may be needed |

### Pressure Injury Staging (NPIAP 2016)
| Stage | Definition |
|-------|------------|
| Stage 1 | Intact skin with non-blanchable erythema |
| Stage 2 | Partial thickness skin loss with exposed dermis |
| Stage 3 | Full thickness skin loss (fat visible) |
| Stage 4 | Full thickness with exposed bone, tendon, muscle |
| Unstageable | Full thickness, base obscured by slough/eschar |
| Deep tissue | Intact skin with purple/maroon discoloration |

### Diabetic Foot Ulcer Classification

**Wagner Classification:**
| Grade | Description |
|-------|-------------|
| 0 | Pre-ulcerative lesion, healed ulcer |
| 1 | Superficial ulcer |
| 2 | Deep ulcer to tendon, joint, bone |
| 3 | Deep ulcer with abscess, osteomyelitis |
| 4 | Localized gangrene (toe, forefoot) |
| 5 | Extensive gangrene |

**University of Texas Classification:**
Adds infection and ischemia assessment to depth

## Wound Chronicity

### Acute-to-Chronic Transition
**Cellular changes:**
- Fibroblast senescence
- Keratinocyte migration failure
- Reduced growth factor receptor expression

**Molecular changes:**
- Elevated MMPs (especially MMP-1, -2, -8, -9)
- Decreased TIMPs
- Growth factor degradation
- Increased inflammatory cytokines (IL-1, TNF-alpha)
- Elevated reactive oxygen species

**Microbiome shift:**
- Planktonic to biofilm organization
- Polymicrobial community
- Anaerobic bacteria in wound base
- Antibiotic tolerance

### Wound Bed Preparation: TIME Framework

| Parameter | Assessment | Intervention |
|-----------|-----------|--------------|
| **T**issue (non-viable) | Slough, eschar, debris | Debridement (sharp, enzymatic, autolytic, mechanical, biological) |
| **I**nfection/Inflammation | Bioburden, biofilm, persistent inflammation | Antimicrobials, debridement, systemic antibiotics if indicated |
| **M**oisture imbalance | Excess exudate or desiccation | Appropriate dressing selection |
| **E**dge (non-advancing) | Epibole, undermining, no migration | Advanced therapies (growth factors, skin grafts, cellular products) |

## Closure Timing and Technique

### Primary Closure
- Clean wounds <6-8 hours old (face: <24 hours)
- Low contamination
- Adequate blood supply
- No tension on closure

### Delayed Primary Closure (Tertiary Intention)
- Contaminated wounds after 4-5 days of open management
- Once infection controlled, granulation present
- Lower infection rates than immediate closure of contaminated wounds

### Secondary Intention
- Highly contaminated wounds
- Tissue loss preventing closure
- Patient factors (unstable, multiple trauma)
- Heals by contraction and epithelialization`,
      keyTerms: [
        { term: 'tissue bridging', definition: 'Strands of tissue spanning a laceration, indicating blunt force mechanism; absent in incised wounds' },
        { term: 'Morel-Lavallee lesion', definition: 'Closed internal degloving injury with seroma/hematoma between subcutaneous tissue and fascia' },
        { term: 'cavitation', definition: 'Temporary wound cavity created by energy transfer from high-velocity projectiles' },
        { term: 'epibole', definition: 'Rolled, raised wound edges where epidermis has migrated down the wound edge preventing closure' },
        { term: 'NPIAP', definition: 'National Pressure Injury Advisory Panel; organization defining pressure injury staging system' },
      ],
      clinicalNotes: 'Fight bites (clenched fist injuries) over MCP joints require exploration, irrigation, IV antibiotics, and often open wound management. Never primarily close these wounds. Look for tooth fragments on X-ray.',
    },

    4: {
      level: 4,
      summary: 'Comprehensive wound classification integrates molecular pathophysiology, standardized assessment tools, and evidence-based algorithms to optimize treatment selection, predict outcomes, and prevent complications.',
      explanation: `## Advanced Wound Etiology and Pathophysiology

### Vascular Wound Differentiation

**Venous Ulcers:**
- Location: Gaiter area (medial malleolus most common)
- Pathophysiology: Venous hypertension -> extravasation -> fibrin cuffs -> growth factor trapping
- Clinical features:
  - Hemosiderin staining
  - Lipodermatosclerosis
  - Varicose veins
  - Edema
  - Shallow, irregular borders
- ABI: Normal or elevated (>0.8)
- Compression therapy: Cornerstone of treatment

**Arterial Ulcers:**
- Location: Distal (toes, heels, lateral malleolus)
- Pathophysiology: Arterial insufficiency -> tissue ischemia -> necrosis
- Clinical features:
  - Pale/cyanotic, cool extremity
  - Absent or diminished pulses
  - Pain at rest, worse with elevation
  - Hair loss, thin shiny skin
  - Punched-out appearance, well-defined edges
- ABI: <0.8 (severe if <0.5)
- Revascularization: Required before healing can occur

**Mixed Arterial-Venous:**
- Features of both
- ABI 0.5-0.8
- Modified compression (lighter, if tolerated)
- May need revascularization

### Diabetic Foot Ulcer Pathogenesis

**Triad of Causation:**
1. **Neuropathy:**
   - Sensory: Loss of protective sensation (LOPS)
   - Motor: Foot deformity (claw toes, Charcot)
   - Autonomic: Anhidrosis, altered blood flow

2. **Vasculopathy:**
   - Macrovascular: Tibial/peroneal disease
   - Microvascular: Basement membrane thickening
   - Impaired hyperemic response

3. **Immunopathy:**
   - Impaired neutrophil function
   - Decreased chemotaxis
   - Biofilm susceptibility

**Risk Stratification (IWGDF):**
| Category | Risk | Annual Ulcer Risk |
|----------|------|-------------------|
| 0 | No LOPS, no PAD | Very low |
| 1 | LOPS or PAD | 5% |
| 2 | LOPS + PAD, or LOPS + deformity, or PAD + deformity | 10-15% |
| 3 | LOPS or PAD + history of ulcer or amputation | 25-30% |

### Pressure Injury Biomechanics

**Causative Forces:**
- Pressure: Perpendicular force (capillary occlusion)
- Shear: Parallel force (tissue distortion)
- Friction: Surface resistance (abrasion component)

**Ischemia-Reperfusion:**
- Sustained pressure: Ischemia, metabolite accumulation
- Pressure relief: Reperfusion, ROS generation
- Repeated cycles: Cumulative damage

**Deep Tissue Injury:**
- Muscle more susceptible than skin
- Injury propagates superficially
- May present as purple discoloration before skin breakdown

**Risk Assessment Tools:**
| Tool | Components | Setting |
|------|-----------|---------|
| Braden | Sensory perception, moisture, activity, mobility, nutrition, friction/shear | Most validated, widely used |
| Norton | Physical condition, mental state, activity, mobility, incontinence | Original tool, less specific |
| Waterlow | Build, skin type, sex, age, nutrition, continence, mobility, neurological | UK-focused |

### Wound Biofilm

**Definition:** Structured communities of bacteria within self-produced extracellular polymeric substance (EPS)

**Characteristics:**
- Antibiotic tolerance (100-1000x MIC)
- Host immune evasion
- Quorum sensing communication
- Metabolic heterogeneity

**Clinical Identification:**
- Failure to heal despite appropriate therapy
- Low-grade inflammation
- Friable hypergranulation
- Increased exudate
- Recurrence after apparent healing
- Definitive: Microscopy with biofilm-specific staining

**Biofilm-Based Wound Care:**
1. Disruption: Sharp debridement, ultrasonic, hydrosurgical
2. Suppression: Topical antimicrobials, anti-biofilm agents
3. Prevention: Appropriate moisture balance, serial debridement

### Molecular Wound Assessment

**Protease Imbalance:**
- Normal: MMP activity for ECM remodeling
- Chronic: Elevated MMP-2, -8, -9; decreased TIMP-1
- Consequence: Growth factor degradation, matrix destruction

**Point-of-Care Testing:**
- MMP activity assays (e.g., WOUNDCHEK)
- Elevated protease activity: Consider collagen/ORC dressings

**Bacterial Quantification:**
| Level | CFU/g | Clinical Significance |
|-------|-------|----------------------|
| Contamination | Low | No host response |
| Colonization | <10^5 | Organisms present, no tissue damage |
| Critical colonization | 10^5 | Delayed healing, subtle signs |
| Infection | >10^5 | Tissue invasion, inflammatory response |

### Wound Scoring Systems

**PUSH Tool (Pressure Ulcer Scale for Healing):**
- Surface area (0-10)
- Exudate amount (0-3)
- Tissue type (0-4)
- Score 0-17, tracked over time

**Bates-Jensen Wound Assessment Tool (BWAT):**
- 13 items scored 1-5
- Comprehensive but time-intensive
- Validated for multiple wound types

**WIfI Classification (Wound, Ischemia, foot Infection):**
For threatened lower extremity:
- Wound grade (0-3)
- Ischemia grade (0-3)
- Foot infection grade (0-3)
- Predicts amputation risk, revascularization benefit

### Healing Trajectory Prediction

**Percent Area Reduction (PAR):**
- >40-50% reduction at week 4: Predicts healing by week 12
- <40% reduction: Consider advanced therapies

**Edge Effect:**
- Linear advancement of wound edge
- Measurable in mm/week
- Non-advancing edge: Indicates healing impairment

**Wound Fluid Analysis:**
- Research tool, emerging clinical applications
- Proteomic profiling
- Cytokine panels`,
      keyTerms: [
        { term: 'lipodermatosclerosis', definition: 'Chronic skin and subcutaneous tissue changes from venous insufficiency; fibrosis, inflammation, hemosiderin creating inverted champagne bottle appearance', pronunciation: 'lip-oh-der-mat-oh-skleh-ROH-sis' },
        { term: 'ankle-brachial index', definition: 'Ratio of ankle to arm systolic blood pressure; screens for peripheral arterial disease (normal: 0.9-1.3)' },
        { term: 'critical colonization', definition: 'Bacterial burden at threshold causing delayed healing without classic infection signs; biofilm often present' },
        { term: 'WIfI', definition: 'Wound, Ischemia, foot Infection classification system for threatened limb; guides revascularization decisions' },
        { term: 'PUSH tool', definition: 'Pressure Ulcer Scale for Healing; validated scoring system tracking surface area, exudate, and tissue type' },
      ],
      clinicalNotes: 'ABI may be falsely elevated in diabetics due to calcified, non-compressible vessels. Toe-brachial index (TBI) or transcutaneous oximetry (TcPO2) may be more reliable. TcPO2 >40 mmHg generally supports healing capacity.',
    },

    5: {
      level: 5,
      summary: 'Expert wound classification integrates mechanistic understanding, validated assessment instruments, genomic/proteomic biomarkers, and health system factors to enable precision medicine approaches and quality improvement initiatives.',
      explanation: `## Wound Classification in Contemporary Practice

### Precision Medicine Approaches

**Genomic Factors in Wound Healing:**
- HIF-1alpha polymorphisms: Affect hypoxia response
- MMP gene variants: Influence protease activity
- TGF-beta SNPs: Impact scar formation
- Collagen gene variants: Affect ECM quality
- IL-6, IL-10 variants: Modulate inflammation

**Transcriptomic Profiling:**
- Chronic wound edge biopsy analysis
- Differentiation of ulcer etiology (venous vs. arterial vs. diabetic)
- Identification of healing vs. non-healing molecular signatures
- Potential for personalized therapy selection

**Proteomic Biomarkers:**
| Biomarker | Clinical Utility |
|-----------|-----------------|
| MMP-9 | Elevated in chronic wounds |
| Neutrophil elastase | Inflammation marker |
| VEGF | Angiogenic status |
| TGF-beta | Fibrotic potential |
| Albumin | Nutritional status |
| CRP | Systemic inflammation |

### Advanced Classification Systems

**CEAP for Venous Disease:**
- **C**linical: C0 (none) to C6 (active ulcer)
- **E**tiologic: Congenital, primary, secondary
- **A**natomic: Superficial, deep, perforator
- **P**athophysiologic: Reflux, obstruction, both

**PEDIS for Diabetic Foot:**
- **P**erfusion: Grade 1-3
- **E**xtent: Surface area
- **D**epth: Superficial to bone
- **I**nfection: Grade 1-4
- **S**ensation: Present/absent

**TIME-H Framework (updated):**
Adding Host factors:
- Systemic disease impact
- Medication effects
- Nutritional status
- Immune function
- Patient adherence capacity

### Imaging in Wound Assessment

**Fluorescence Imaging (e.g., MolecuLight):**
- Real-time bacterial detection
- Bioburden visualization
- Guides debridement extent
- Point-of-care application

**Multispectral Imaging:**
- Tissue oxygenation mapping
- Perfusion assessment
- Healing prediction potential

**Optical Coherence Tomography (OCT):**
- Subsurface tissue architecture
- Epithelialization assessment
- Research applications expanding

**Thermography:**
- Temperature differentials
- Inflammation detection
- Infection screening

**3D Wound Measurement:**
- Volumetric assessment
- Standardized photography
- AI-assisted analysis
- Telehealth integration

### Wound Care Quality Metrics

**AHRQ Patient Safety Indicators:**
- Hospital-acquired pressure injury rate
- Post-operative wound complications
- SSI rates by procedure type

**CMS Quality Measures:**
- Pressure ulcer incidence
- VLU healing rates at 12 weeks
- DFU amputation rates

**WOCN Outcomes:**
- Time to healing
- Recurrence rates
- Patient quality of life (W-QoL)
- Cost per healed wound

### Health System Wound Classification

**Acute Care:**
- Surgical wounds (SSI risk stratification)
- Traumatic wounds (severity scoring)
- Burns (TBSA, American Burn Association criteria)

**Post-Acute/Long-Term Care:**
- Pressure injuries (NPIAP staging)
- Chronic wounds (etiology classification)
- Wound care bundle compliance

**Outpatient/Wound Clinic:**
- Chronic wound etiology
- Healing trajectory monitoring
- Treatment algorithm adherence

### Economic and Outcomes Classification

**Wound Healing Society Chronic Wound Registry:**
- Standardized data elements
- Outcome benchmarking
- Treatment pattern analysis

**WOCN Evidence-Based Guidelines:**
- Pressure injury prevention
- Venous ulcer management
- Diabetic foot ulcer care

**Cochrane Reviews Meta-categories:**
- Dressing type comparisons
- Adjunctive therapy evidence
- Prevention intervention effectiveness

### Emerging Classification Paradigms

**Artificial Intelligence Applications:**
- Automated wound classification from images
- Healing trajectory prediction models
- Treatment recommendation systems
- Integration with EHR for decision support

**Machine Learning Parameters:**
- Wound area, perimeter, depth
- Color histogram analysis
- Texture features
- Longitudinal measurement integration

**Validation Studies:**
- Comparison to expert classification
- Inter-rater reliability benchmarking
- Prospective outcome correlation

### Global Wound Classification Harmonization

**ICD-11 Wound Coding:**
- Improved specificity over ICD-10
- Etiology and depth differentiation
- Laterality and location coding

**WHO Wound Care Standards:**
- Resource-stratified approaches
- Essential wound care packages
- Quality indicators for LMICs

**International Consensus:**
- IWGDF diabetic foot guidelines
- EPUAP/NPIAP/PPPIA pressure injury
- European Wound Management Association

### Translational Classification Research

**Wound Biorepositories:**
- Tissue banking for research
- Matched clinical data
- Multi-omics integration

**Clinical Trial Classification:**
- Standardized eligibility criteria
- Outcome measure harmonization
- Real-world evidence alignment

**From Bench to Bedside:**
- Molecular subtyping of chronic wounds
- Targeted therapies based on wound phenotype
- Precision debridement guided by biomarkers`,
      keyTerms: [
        { term: 'CEAP classification', definition: 'Comprehensive venous disease classification incorporating Clinical, Etiologic, Anatomic, and Pathophysiologic components' },
        { term: 'PEDIS classification', definition: 'Diabetic foot ulcer classification assessing Perfusion, Extent, Depth, Infection, and Sensation' },
        { term: 'multispectral imaging', definition: 'Technology capturing images at multiple wavelengths to assess tissue oxygenation and perfusion' },
        { term: 'fluorescence imaging', definition: 'Real-time bacterial visualization using autofluorescence; red fluorescence indicates porphyrin-producing bacteria' },
        { term: 'wound biorepository', definition: 'Systematic collection of wound tissue samples with linked clinical data for translational research' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Classification should guide treatment:** Venous ulcer without compression is undertreated; diabetic ulcer without offloading will not heal regardless of dressing selection.

2. **Reassess classification over time:** Wounds may develop mixed etiology (e.g., initial venous ulcer with secondary arterial compromise).

3. **Document systematically:** Standardized wound assessment tools enable outcomes tracking and quality improvement.

4. **Consider the whole patient:** Wound classification alone is insufficient - nutritional status, glycemic control, edema management, and psychosocial factors must be addressed.

5. **Use validated prediction tools:** PAR at 4 weeks, WIfI for amputation risk, and healing trajectory analysis should inform therapy escalation decisions.

6. **Emerging technologies:** AI-assisted wound measurement and bacterial detection are increasingly validated but should supplement, not replace, clinical judgment.

7. **Quality metrics matter:** Track your outcomes, benchmark against standards, and participate in registries to drive improvement.`,
    },
  },

  media: [
    {
      id: 'wound-depth-diagram',
      type: 'diagram',
      filename: 'wound-depth-classification.svg',
      title: 'Wound Depth Classification',
      description: 'Cross-section showing superficial, partial thickness, and full thickness wound depths',
    },
    {
      id: 'chronic-wound-comparison',
      type: 'diagram',
      filename: 'chronic-wound-types.svg',
      title: 'Chronic Wound Types Comparison',
      description: 'Comparison of venous, arterial, diabetic, and pressure ulcers',
    },
  ],

  citations: [
    {
      id: 'npiap-staging-2016',
      type: 'article',
      title: 'National Pressure Injury Advisory Panel Pressure Injury Stages',
      source: 'NPIAP',
      url: 'https://npiap.com/page/PressureInjuryStages',
    },
    {
      id: 'iwgdf-guidelines',
      type: 'website',
      title: 'IWGDF Guidelines on the prevention and management of diabetic foot disease',
      source: 'International Working Group on the Diabetic Foot',
      url: 'https://iwgdfguidelines.org/',
    },
    {
      id: 'schultz-wound-bed-prep',
      type: 'article',
      title: 'Wound bed preparation: a systematic approach to wound management',
      authors: ['Schultz, G.S.', 'Sibbald, R.G.', 'Falanga, V.', 'et al.'],
      source: 'Wound Repair and Regeneration',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-healing-phases', targetType: 'topic', relationship: 'sibling', label: 'Wound Healing Phases' },
    { targetId: 'wound-care-chronic', targetType: 'topic', relationship: 'related', label: 'Chronic Wounds' },
    { targetId: 'wound-care-burn-care', targetType: 'topic', relationship: 'related', label: 'Burn Care' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['wound classification', 'wound assessment', 'pressure injury', 'diabetic foot'],
    keywords: ['laceration', 'abrasion', 'puncture', 'chronic wound', 'venous ulcer', 'arterial ulcer'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundTypes;
