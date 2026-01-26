/**
 * Wound Basics - Wound Types and Healing Process
 *
 * Comprehensive content on fundamental wound classification, types,
 * and the physiological basis of tissue repair.
 */

import { EducationalContent } from '../types';

export const woundBasicsContent: EducationalContent = {
  id: 'wound-care-basics',
  type: 'topic',
  name: 'Wound Care Basics',
  alternateNames: ['Wound Fundamentals', 'Introduction to Wounds', 'Wound Classification'],

  levels: {
    1: {
      level: 1,
      summary: 'Wounds are injuries to the skin that can happen from cuts, scrapes, burns, or pressure. Your body has an amazing ability to heal itself when you get wounded.',
      explanation: `## What Is a Wound?

A wound is any damage to your skin - the protective covering of your body. Think of your skin like a suit of armor that keeps germs out and keeps important things like water inside. When this armor gets broken, your body goes to work fixing it right away.

## Types of Wounds

**Cuts and Scrapes (Most Common)**
- **Cuts (incisions):** Sharp, clean edges from something sharp like a knife or glass
- **Scrapes (abrasions):** Surface damage when skin rubs against something rough
- **Punctures:** Deep, narrow holes from things like nails or needles

**Burns**
- From heat, sun, electricity, or chemicals
- Can damage not just the skin but deeper tissues too

**Pressure Sores**
- Happen when you stay in one position too long
- Common in people who are bedridden or use wheelchairs
- Also called bedsores or pressure ulcers

## How Wounds Heal

Your body heals wounds in four main steps:

**Step 1: Stop the Bleeding (Hemostasis)**
- Blood vessels squeeze tight to slow bleeding
- Special cells (platelets) plug the hole
- A clot forms like a natural bandage

**Step 2: Clean and Protect (Inflammation)**
- Your body sends helper cells to fight germs
- The area may look red, swollen, and feel warm
- This is normal and shows healing is happening

**Step 3: Rebuild (Proliferation)**
- New skin cells grow from the edges
- New tiny blood vessels form to bring nutrients
- Pink, bumpy tissue fills in the wound

**Step 4: Strengthen (Remodeling)**
- The new tissue gets stronger over time
- A scar forms and may fade over months or years
- Healed skin is never as strong as the original

## What Affects Healing

| Factor | How It Helps |
|--------|--------------|
| Good nutrition | Protein, vitamins C and zinc help healing |
| Rest | Your body focuses energy on healing |
| Clean wound | Prevents germs from causing infection |
| Protection | Keeps the wound safe from further damage |
| No smoking | Smoking slows blood flow to the wound |`,
      keyTerms: [
        { term: 'wound', definition: 'An injury to the skin that breaks the protective barrier and damages tissues underneath' },
        { term: 'incision', definition: 'A clean cut made by something sharp, with smooth edges' },
        { term: 'abrasion', definition: 'A scrape that damages only the top layer of skin when rubbing against a rough surface' },
        { term: 'puncture', definition: 'A deep, narrow wound made by a pointed object like a nail or needle' },
        { term: 'hemostasis', definition: 'The process of stopping bleeding when you get hurt', pronunciation: 'hee-moh-STAY-sis' },
        { term: 'granulation tissue', definition: 'Pink, bumpy tissue that forms in a healing wound as new cells grow', pronunciation: 'gran-yoo-LAY-shun' },
      ],
      analogies: [
        'Your skin is like a raincoat - when it gets a hole, water can get in. Healing is like sewing and patching the raincoat from the inside.',
        'Wound healing is like fixing a pothole - first clean out the debris, then fill it in with new material, and finally smooth and seal the surface.',
        'The clot that forms over a wound is like a temporary patch on a tire - it stops the leak until a proper repair can be made.',
      ],
      examples: [
        'A kitchen knife cuts a finger - this is an incision with clean edges that usually heals quickly.',
        'A child falls off a bike and scrapes their knee - this is an abrasion that damages the top skin layer over a wide area.',
        'Stepping on a nail creates a puncture wound - deep but with a small opening that can trap bacteria inside.',
      ],
      patientCounselingPoints: [
        'Keep the wound clean and covered while it heals.',
        'Eat protein-rich foods like eggs, beans, or meat to help your body repair.',
        'Don\'t pick at scabs - they\'re nature\'s bandage!',
        'Watch for signs of infection: increasing redness, warmth, swelling, or pus.',
        'See a doctor if the wound is deep, won\'t stop bleeding, or shows signs of infection.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wounds are classified by etiology (intentional vs. traumatic, mechanism), depth (partial vs. full thickness), duration (acute vs. chronic), and contamination (clean vs. dirty).',
      explanation: `## Wound Classification System

Understanding wound types helps guide treatment and predict healing outcomes.

## By Etiology (Cause)

**Intentional (Surgical) Wounds:**
- Created under controlled conditions
- Clean edges with minimal contamination
- Predictable healing by primary intention
- Examples: Incisions from surgery, central line placement

**Traumatic Wounds:**
- Unintentional injuries from accidents
- Variable contamination and tissue damage
- Mechanisms include:
  - **Incised:** Sharp objects (knife, glass) - clean edges
  - **Lacerated:** Blunt trauma tearing skin - irregular edges
  - **Abraded:** Friction scraping away epidermis
  - **Puncture:** Sharp, pointed objects - deep, narrow track
  - **Avulsion:** Tissue torn away from body
  - **Crush:** High-force injury damaging multiple tissue layers

## By Depth

**Partial Thickness:**
- Damage through epidermis and into (but not through) dermis
- Heals by re-epithelialization from skin appendages
- Usually minimal scarring
- Examples: First-degree burns, superficial abrasions

**Full Thickness:**
- Complete loss of dermis; may involve subcutaneous tissue
- No dermal appendages remaining for epithelial source
- Requires granulation tissue or grafting
- Will scar
- Examples: Third-degree burns, deep lacerations

## By Duration

**Acute Wounds:**
- Sudden onset from trauma or surgery
- Proceed through normal healing phases
- Expected to heal within expected timeframe
- Typical timeline: 2-4 weeks for full-thickness wounds

**Chronic Wounds:**
- Fail to progress through normal healing
- Stalled in inflammatory phase
- Not healed after 3 months
- Examples: Pressure ulcers, diabetic foot ulcers, venous stasis ulcers

## By Contamination Level

| Classification | Description | Infection Risk |
|----------------|-------------|----------------|
| Clean | Uninfected, no inflammation, respiratory/GI/ GU tract not entered | <2% |
| Clean-Contaminated | Uninfected, minor break in technique, entered respiratory/GI/GU tract | <10% |
| Contaminated | Fresh, accidental wound, major break in technique, gross spillage | 15-20% |
| Dirty/Infected | Old traumatic wound, devitalized tissue, existing infection | >30% |

## Special Wound Types

**Burns:**
- **Thermal:** Heat, fire, hot liquids (scalds)
- **Electrical:** Tissue damage from current flow
- **Chemical:** Caustic substances continue damaging until neutralized
- **Radiation:** Sun exposure, radiation therapy

**Pressure Injuries (formerly Pressure Ulcers):**
- Caused by prolonged pressure over bony prominences
- Stages 1-4 based on depth
- Common locations: sacrum, heels, hips
- Risk factors: immobility, poor nutrition, moisture

**Bites:**
- **Human:** High infection risk (oral flora)
- **Animal:** Rabies and bacterial concerns
- **Snake:** Venom considerations

## Healing by Intention

**Primary Intention:**
- Wound edges approximated (sutures, staples, glue)
- Minimal scar, rapid healing
- Examples: Surgical incisions, clean lacerations repaired

**Secondary Intention:**
- Wound left open to heal from base upward
- Granulation tissue fills defect
- More scarring, longer time
- Examples: Infected wounds, tissue loss, chronic wounds

**Tertiary (Delayed Primary) Intention:**
- Wound left open initially, then closed later
- Allows observation for infection or edema resolution
- Closure after 4-5 days
- Examples: Traumatic wounds with contamination, after debridement`,
      keyTerms: [
        { term: 'incision', definition: 'A clean, surgical cut made with a sharp instrument, typically with minimal tissue damage' },
        { term: 'laceration', definition: 'A jagged wound caused by tearing of soft tissue, usually from blunt trauma', pronunciation: 'las-er-AY-shun' },
        { term: 'abrasion', definition: 'Superficial wound involving removal of the epidermis by friction against a rough surface' },
        { term: 'avulsion', definition: 'Wound in which tissue is forcibly separated or torn from the body', pronunciation: 'uh-VUL-shun' },
        { term: 'partial thickness', definition: 'Wound extending through epidermis and into but not through dermis; some dermal appendages remain' },
        { term: 'full thickness', definition: 'Wound extending through dermis and potentially into subcutaneous tissue or deeper; no dermal appendages remain' },
        { term: 'primary intention', definition: 'Healing of wounds closed with sutures, staples, or adhesive; edges approximated' },
        { term: 'secondary intention', definition: 'Healing of open wounds by granulation tissue formation, epithelialization, and contraction' },
      ],
      analogies: [
        'Primary intention healing is like gluing a broken vase back together immediately, while secondary intention is like filling the gap with new material.',
        'The contamination classification is like rating how dirty a kitchen counter is - from clean to needs serious deep cleaning.',
      ],
      clinicalNotes: 'Wound classification guides management decisions. Clean wounds may be closed primarily, while contaminated or dirty wounds often require delayed closure or healing by secondary intention to reduce infection risk.',
      patientCounselingPoints: [
        'Different wounds heal differently - a clean cut from surgery heals faster than a scrape from a fall.',
        'Deeper wounds take longer to heal and are more likely to scar.',
        'Keeping pressure off wounds (changing positions) helps prevent pressure sores.',
        'Some wounds heal better when left open to heal from the inside out.',
      ],
    },

    3: {
      level: 3,
      summary: 'Wounds are classified by mechanism (sharp vs. blunt), depth (partial vs. full thickness), duration (acute vs. chronic), and contamination using the surgical wound classification system. Healing mechanisms differ by intention type.',
      explanation: `## Comprehensive Wound Classification

### Mechanism-Based Classification

**Sharp Force Injuries:**
- **Incised wounds:** Clean edges from sharp cutting instruments
  - Characteristic: Length > depth, distinct margins
  - Underlying vessels/nerves may be cut
  - Examples: Knife, glass, scalpel

- **Stab wounds:** Deep puncture from sharp, pointed object
  - Characteristic: Depth > length, small surface opening
  - High risk of occult deep injury
  - Consider underlying anatomy

- **Chop wounds:** Combination of sharp and blunt force
  - Heavy, sharp object (axe, machete)
  - Underlying bone involvement common

**Blunt Force Injuries:**
- **Lacerations:** Tearing of tissue from crushing/shearing
  - Bridging vessels, tissue tags, irregular margins
  - Underlying bone often cause of laceration

- **Abrasions:** Scraping away of epidermis
  - Antemortem abrasions show vital reaction (inflammation)
  - Pattern abrasions may document impact object

- **Contusions:** Bruising without skin disruption
  - Extravasated blood in tissues
  - Color changes indicate age (red-purple -> green -> yellow)

**Thermal Injuries:**
- **Burn depth classification:**
  - **Superficial (1st degree):** Epidermis only, erythema, pain
  - **Partial thickness (2nd degree):** Superficial: blisters, painful; Deep: less pain, more scarring
  - **Full thickness (3rd degree):** Epidermis + dermis, white/charred, painless
  - **Fourth degree:** Through skin into muscle, bone, tendon

**Electrical Injuries:**
- Entry and exit wounds
- Extensive occult deep tissue damage
- Cardiac arrhythmia risk
- Muscle necrosis, compartment syndrome

**Chemical Injuries:**
- Acid: Coagulation necrosis (eschar formation may limit penetration)
- Alkali: Liquefactive necrosis (continues penetrating until neutralized)
- Continue irrigation until pH normalizes (often >30 minutes)

### Depth-Based Classification

**Partial Thickness Wounds:**
- **Superficial partial thickness:**
  - Epidermis + superficial dermis (papillary)
  - Heals by epithelial migration from appendages
  - Minimal scarring
  - Example: Superficial burn, abrasion

- **Deep partial thickness:**
  - Into reticular dermis
  - Some dermal appendages preserved
  - Heals with some scarring
  - Example: Deep partial-thickness burn

**Full Thickness Wounds:**
- Loss of dermis and all skin appendages
- Subcutaneous fat exposed
- Cannot epithelialize spontaneously without grafting
- Requires granulation or surgical closure

### Duration-Based Classification

**Acute Wounds:**
- Sudden onset, traumatic or surgical
- Proceed through normal healing cascade
- Expected timeline:
  - Epithelialization: 24-48 hours (approximated edges)
  - Granulation: 3-5 days
  - Contraction: days to weeks
  - Remodeling: months to years

**Chronic Wounds:**
- Defined: Not healed after 12 weeks
- Pathophysiology: Stalled in inflammatory phase
- Characteristics:
  - Persistent elevation of inflammatory cytokines (IL-1, TNF-alpha)
  - Elevated MMPs degrading growth factors
  - Biofilm presence
  - Senescent cells
- Types:
  - **Pressure injuries:** Ischemia from unrelieved pressure
  - **Diabetic foot ulcers:** Neuropathy + ischemia + infection
  - **Venous stasis ulcers:** Venous hypertension, impaired drainage
  - **Arterial ulcers:** Poor arterial inflow, tissue hypoxia

### Surgical Wound Classification (CDC)

| Class | Definition | Infection Rate |
|-------|------------|----------------|
| I - Clean | No inflammation, no hollow viscus entered, no break in technique | 1-2% |
| II - Clean-Contaminated | Minor break in technique, entered hollow viscus under controlled conditions | 3-4% |
| III - Contaminated | Fresh traumatic wound, major break in technique, gross spillage from viscus | 7-15% |
| IV - Dirty/Infected | Old traumatic wound, devitalized tissue, pre-existing clinical infection | 15-30% |

### Healing by Intention

**Primary Intention:**
- Wound edges approximated within hours
- Epithelialization within 24-48 hours
- Tensile strength: 3% at 1 week, 20% at 3 weeks
- Minimal scarring
- Indications: Clean, fresh wounds <24 hours old, good tissue quality

**Secondary Intention:**
- Wound left open
- Phases: inflammation -> granulation -> epithelialization -> contraction
- Wound contraction reduces size by ~5-10% per day
- Significant scarring
- Indications: Contaminated wounds, tissue loss, infection risk

**Tertiary (Delayed Primary) Intention:**
- Initial open period (4-5 days) for observation/debridement
- Allows edema resolution, infection surveillance
- Then closed primarily
- Combines advantages of both approaches`,
      keyTerms: [
        { term: 'laceration', definition: 'Wound produced by tearing of soft tissue, often with tissue bridges, distinguishing it from incised wounds' },
        { term: 'eschar', definition: 'Dry, thick, leathery necrotic tissue; often seen in full-thickness burns and ischemic wounds', pronunciation: 'ES-kar' },
        { term: 'granulation', definition: 'Formation of red, vascular connective tissue in healing wounds; essential for healing by secondary intention' },
        { term: 'biofilm', definition: 'Structured microbial community encased in extracellular matrix; impairs healing in chronic wounds' },
        { term: 'senescent cells', definition: 'Cells that have stopped dividing but remain metabolically active; secrete inflammatory factors (SASP)' },
        { term: 'contraction', definition: 'Wound edge movement mediated by myofibroblasts; reduces wound surface area during healing' },
      ],
      clinicalNotes: `Wound Assessment Framework (TIME):
- **T**issue: Non-viable tissue requires debridement
- **I**nfection/inflammation: Bacterial load >10^5 CFU/g impairs healing
- **M**oisture: Balance exudate management with moist healing environment
- **E**dge: Non-advancing or undermined edges indicate stalled healing

Red flags requiring urgent evaluation:
- Deep puncture wounds (tetanus, occult foreign body)
- Human or animal bites (high infection risk)
- Electrical burns (cardiac monitoring, deep tissue injury)
- Crush injuries (compartment syndrome)
- Signs of necrotizing infection (crepitus, bullae, disproportionate pain)`,
    },

    4: {
      level: 4,
      summary: 'Wound classification integrates mechanism, depth, duration, and contamination to guide evidence-based management. Chronic wounds represent pathologic dysregulation of normal healing physiology.',
      explanation: `## Advanced Wound Classification and Pathophysiology

### Mechanism-Specific Considerations

**Ballistic Wounds:**
- **Cavitation:** Temporary and permanent cavities from energy transfer
- **Stretch:** Tissue damage beyond visible wound track
- **Foreign material:** Clothing, debris driven into wound
- **High-velocity (>2000 ft/s):** Extensive tissue damage
- Management: Wound exploration, debridement, delayed primary closure

**Degloving Injuries:**
- Separation of skin and subcutaneous tissue from underlying fascia
- May have limited external signs despite extensive internal injury
- High risk of necrosis due to vascular disruption
- Requires extensive debridement, possible flap coverage

**Necrotizing Soft Tissue Infections (NSTIs):**
- **Type I:** Polymicrobial (anaerobes + facultative)
- **Type II:** Group A streptococcus ± Staph aureus
- **Type III:** Clostridial (gas gangrene)
- Clinical clues: Pain out of proportion, crepitus, bullae, bullae, woody texture
- Emergent surgical debridement required

**Mechanical Trauma Patterns:**
- **Shear forces:** Separation of tissue layers (e.g., stage 2 pressure injury)
- **Compression:** Capillary occlusion leading to ischemia
- **Friction:** Superficial epidermal damage

### Pathophysiology of Chronic Wounds

**Molecular Stasis:**
Chronic wounds are stuck in inflammatory phase with:
- Sustained elevation of:
  - Pro-inflammatory cytokines: IL-1beta, IL-6, TNF-alpha
  - Proteases: MMP-9, MMP-8, elastase
  - Reactive oxygen species (ROS)
- Decreased levels of:
  - Growth factors: PDGF, VEGF, TGF-beta
  - Tissue inhibitors of metalloproteinases (TIMPs)
- Imbalance: MMP:TIMP ratio >10:1 (normal ~1:1)

**Biofilm Implications:**
- Forms within 24-48 hours in acute wounds
- Bacteria in EPS (extracellular polymeric substance) matrix
- Phenotypic changes: 1000x increased antibiotic resistance
- Quorum sensing: Intercellular bacterial communication
- Strategies: Serial debridement, topical antimicrobials, disrupted biofilm antibiotics

**Cellular Senescence:**
- Replicative arrest after ~50 divisions (Hayflick limit)
- SASP (senescence-associated secretory phenotype): Pro-inflammatory cytokine secretion
- Impaired response to growth signals
- Accumulates in chronic wounds, especially elderly

### Disease-Specific Wound Pathophysiology

**Diabetic Foot Ulcers:**
- **Neuropathy:**
  - Sensory: Loss of protective sensation
  - Motor: Intrinsic muscle atrophy, deformity (Charcot)
  - Autonomic: Decreased sweating, skin dryness
- **Ischemia:**
  - Microvascular disease
  - Macrovascular: PAD, tibial artery involvement
  - Endothelial dysfunction
- **Immune dysfunction:**
  - Impaired neutrophil chemotaxis
  - Decreased phagocytosis
  - Glycosylation of immunoglobulins
- **Structural changes:**
  - Limited joint mobility
  - Plantar pressure redistribution
  - Foot deformities (hammer toes, Charcot)

**Venous Stasis Ulcers:**
- **Venous hypertension:**
  - Valve incompetence, superficial/deep/ perforator systems
  - Calf muscle pump failure
- **Fibrin cuff hypothesis:**
  - Leaked fibrinogen forms pericapillary fibrin cuffs
  - Impedes oxygen diffusion (controversial)
- **White cell trapping:**
  - Leukocytes sequestered in post-capillary venules
  - Protease release, tissue damage
- **Lipodermatosclerosis:**
  - Chronic inflammation → fibrosis, fat necrosis
  - Inverted champagne bottle leg appearance
- **Hemosiderin deposition:**
  - Extravasated RBCs → iron deposition
  - Inflammatory stimulus, oxidative stress

**Arterial Ulcers:**
- **Atherosclerotic disease:**
  - Plaque formation, luminal narrowing
  - Usually distal to tibial arteries
- **Tissue hypoxia:**
  - PO2 < 40 mmHg impairs healing
  - Fibroblast proliferation requires PO2 > 40
  - Collagen synthesis requires PO2 > 20
- **Location:**
  - Distal extremities, toes, lateral malleolus
  - Punch-out appearance
  - Pain with elevation, relief with dependency

**Pressure Injuries:**
- **Force components:**
  - **Intensity:** Pressure > capillary filling pressure (32 mmHg)
  - **Duration:** Longer duration = more damage
  - **Interface:** Shear + friction combined effects
- **Pathophysiology:**
  - Direct tissue compression → ischemia
  - Shear → vessel kinking, occlusion
  - Reperfusion injury on pressure relief
- **Deep Tissue Pressure Injury (DTPI):**
  - Starts at muscle-bone interface
  - May appear minimal on surface despite extensive deep damage
  - "Purple maroon" discoloration, blood-filled blister

### Evidence-Based Classification Tools

**Pressure Injury Staging (NPIAP):**
- **Stage 1:** Non-blanchable erythema of intact skin
- **Stage 2:** Partial-thickness skin loss with exposed dermis
- **Stage 3:** Full-thickness skin loss (subcutaneous fat visible)
- **Stage 4:** Full-thickness skin and tissue loss (muscle, bone exposed)
- **Unstageable:** Obscured full-thickness skin and tissue loss (eschar/slough)
- **DTPI:** Persistent non-blanchable deep red, maroon, purple discoloration

**Wound Score Systems:**
- **PRESSURE:** Pain, Redness, Edema, Secretions, Exudate, Size, Duration, Recurrence, Erythema, Granulation
- **Bates-Jensen Wound Assessment Tool:** 13 items, scored 1-5
- **Wound Healing Index:** Predicts healing based on wound characteristics

### Healing Impairment Factors

**Systemic:**
| Factor | Mechanism | Clinical Impact |
|--------|-----------|-----------------|
| Diabetes | Glycosylation, microvascular disease, neuropathy | 3-5x increased amputation risk |
| Vascular disease | Impaired O2 delivery, tissue hypoxia | Healing requires adequate perfusion |
| Malnutrition | Protein deficiency, collagen synthesis impaired | Albumin <3.0 g/dL predicts poor healing |
| Immunosuppression | Decreased inflammatory response, infection risk | Steroids, chemotherapy, HIV |
| Smoking | Vasoconstriction, platelet inhibition | 2x higher complication rate |
| Age | Delayed inflammatory response, decreased angiogenesis | Slower healing in elderly |

**Local:**
- Infection: >10^5 CFU/g tissue
- Desiccation: Cells require moisture for migration
- Maceration: Excessive moisture softens tissue
- Edema: Increases diffusion distance for O2
- Foreign bodies: Prolong inflammation
- Hematoma: Provides medium for bacterial growth`,
      keyTerms: [
        { term: 'cavitation', definition: 'Temporary space created by projectile or energy transfer causing tissue displacement beyond visible wound track' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory secretome from senescent cells containing cytokines, chemokines, and proteases' },
        { term: 'quorum sensing', definition: 'Bacterial cell-cell communication mechanism regulating gene expression based on population density; key to biofilm formation' },
        { term: 'lipodermatosclerosis', definition: 'Panniculitis with fat necrosis and fibrosis; causes woody induration in chronic venous insufficiency', pronunciation: 'lih-poh-derm-ah-toh-sklair-OH-sis' },
        { term: 'DTPI', definition: 'Deep tissue pressure injury; pressure-induced damage to underlying soft tissue from muscle/bone interface outward' },
        { term: 'reperfusion injury', definition: 'Tissue damage occurring when blood flow returns after ischemia; ROS generation, inflammatory cascade' },
      ],
      clinicalNotes: `Clinical Decision Points:

1. **All chronic wounds should have:**
   - Vascular assessment (ABI, TcPO2)
   - Offloading if foot ulcer (TCC, iCAM boot)
   - Compression if venous ulcer (multi-layer system)
   - Glycemic control if diabetic (HbA1c < 7% target)
   - Debridement of non-viable tissue

2. **Red flags for urgent referral:**
   - Suspected NSTI (crepitus, bullae, disproportionate pain)
   - Signs of systemic infection (fever, leukocytosis)
   - Gangrene or necrosis
   - Wound with exposed bone, tendon, or joint

3. **Treatment failure defined as:**
   - No size reduction after 4 weeks of appropriate therapy
   - Worsening despite treatment
   - Development of new signs of infection`,
    },

    5: {
      level: 5,
      summary: 'Contemporary wound classification integrates molecular profiling, advanced imaging, and evidence-based frameworks to guide precision wound management strategies targeting specific pathophysiologic derangements.',
      explanation: `## State-of-the-Art Wound Classification and Management

### Molecular and Cellular Profiling

**Wound Biomarkers:**
- **Proteolytic environment:**
  - MMP-9:TIMP-1 ratio predicts healing trajectory
  - Elevated elastase correlates with non-healing
  - Collagenase activity indicates ECM degradation

- **Inflammatory markers:**
  - IL-1beta, TNF-alpha: Persistent elevation predicts chronicity
  - IL-6: Acute phase reactant, prolonged elevation = poor prognosis
  - Procalcitonin: Infection marker superior to WBC/ESR/CRP

- **Growth factor profile:**
  - PDGF, VEGF, TGF-beta: Decreased in chronic wounds
  - Ratio of pro- to anti-healing cytokines guides therapy selection

**Genomic and Transcriptomic Analysis:**
- **miRNA signatures:**
  - miR-21, miR-132: Pro-healing
  - miR-155, miR-200: Anti-healing, elevated in chronic wounds
  - Potential therapeutic targets

- **Gene expression profiling:**
  - Healing vs. non-healing wound transcriptional signatures
  - FOXM1 pathway downregulation in diabetic ulcers
  - c-Myc pathway dysregulation in venous ulcers

**Microbiome Analysis:**
- **16S rRNA sequencing:**
  - Identifies polymicrobial communities
  - Chronic wounds: Staphylococcus, Pseudomonas, Anaerobes
  - Diversity decreases as infection severity increases

- **Metagenomic sequencing:**
  - Antibiotic resistance gene profiling
  - Virulence factor identification
  - Guides targeted antimicrobial therapy

### Advanced Imaging Technologies

**Multispectral and Hyperspectral Imaging:**
- **Tissue oxygenation mapping:**
  - StO2 (tissue saturation) percentage
  - Identifies ischemic areas, guides amputation level
  - Predicts healing potential (StO2 > 40% favorable)

- **Perfusion assessment:**
  - HSI (hyperspectral imaging) for microvascular flow
  - ICG (indocyanine green) angiography
  - Near-infrared spectroscopy

**Fluorescence Imaging:**
- **MolecuLight i:X:**
  - Autofluorescence (red) = bacterial load >10^4 CFU/g
  - Detects P. aeruginosa (cyan), S. aureus (green)
  - Guides debridement and antimicrobial use
- **Applications:**
  - Real-time bacterial mapping
  - Reduce antibiotic use (studies show 30% reduction)
  - Monitor treatment response

**Optical Coherence Tomography (OCT):**
- Micron-resolution cross-sectional imaging
- Assesses wound margin, undermining
- Guides depth assessment

**High-Frequency Ultrasound:**
- **20-100 MHz transducers:**
  - Depth assessment (30-500 micron resolution)
  - Identifies abscess, foreign body
  - Measures scar thickness

**Thermography:**
- Infrared temperature mapping
- Elevated temperature = infection/inflammation
- Decreased temperature = ischemia
- Adjunct for infection detection

### Precision Classification Frameworks

**TIME 2.0 Framework:**
| Component | Assessment | Intervention Options |
|-----------|------------|---------------------|
| **T**issue | Non-viable tissue (eschar, slough) | Sharp, enzymatic, autolytic, biologic, ultrasonic debridement |
| **I**nfection | >10^5 CFU/g, biofilm, clinical signs | Culture-guided antibiotics, topical antimicrobials, PHMB, silver, iodine |
| **M**oisture | Exudate volume, peri-wound maceration | Absorbents (alginates, hydrofibers), moisture barriers |
| **E**dge | Non-advancing, rolled, undermined | Edge protection, debridement, advanced therapies |

**DIME (Debridement, Infection/inflammation, Moisture, Edge):**
- Similar to TIME, emphasizes debridement as primary intervention

**Wound Hydration Classification:**
- **Dry:** Desiccated, requires hydration
- **Moist:** Optimal healing environment
- **Wet:** Maceration risk, requires exudate management
- **Wet-to-dry:** Outdated, causes tissue damage

### Disease-Specific Classification Updates

**Diabetic Foot Ulcer Classification:**

**PEDIS System (IWGDF):**
| Grade | Perfusion | Extent | Depth | Infection | Sensation |
|-------|-----------|--------|-------|-----------|-----------|
| 1 | Normal | <0.5cm^2 | Superficial | None | Intact |
| 2 | Peripheral arterial disease | 0.5-1cm^2 | To tendon/capsule | Mild | Loss |
| 3 | Critical limb ischemia | >1cm^2 | To bone/joint | Moderate | - |
| 4 | - | - | - | Severe with systemic Sx | - |

**SINBAD Classification:**
- Site, Ischemia, Neuropathy, Bacterial infection, Area, Depth
- Score 0-2 per category, total 0-12
- Predicts amputation risk

**University of Texas Classification:**
- Grade 0-3 (depth)
- Stage A-D (ischemia/infection)
- Correlates with outcomes

**Venous Ulcer CEAP Classification:**
- **C**linical: C0-C6 (C4a: pigmentation/eczema, C4b: lipodermatosclerosis)
- **E**tiologic: Congenital, primary, secondary
- **A**natomic: Superficial, deep, perforator
- **P**athophysiology: Reflux, obstruction, both

### Emerging Therapeutics Based on Classification

**Biofilm-Targeted Therapies:**
- **Cadexomer iodine:**
  - Sustained iodine release, desloughs
  - Effective against biofilms
- **Medical-grade honey:**
  - Osmotic effect, low pH, hydrogen peroxide
  - MGO (methylglyoxal) antibacterial
- **PHMB (polyhexamethylene biguanide):**
  - Broad-spectrum, biofilm penetration
  - Low cytotoxicity
- **Antimicrobial dressings:**
  - Silver: Nanocrystalline more effective
  - Silver-impregnated with negative pressure
  - Combination products (collagen + silver + ORC)

**Growth Factor and Biologic Therapies:**
- **Becaplermin (Regranex):**
  - Recombinant PDGF-BB gel
  - FDA-approved for diabetic foot ulcers
  - Black box warning: Cancer risk (controversial)
  - Cost-effectiveness debated
- **Platelet-derived wound healing factors:**
  - Autologous platelet-rich plasma (PRP)
  - Mixed evidence, expensive
- **Amnion/chorion membranes:**
  - Dehydrated human amnion/chorion (dHACM)
  - Anti-inflammatory, antimicrobial, pro-healing
  - EpiFix, Grafix products
  - Evidence supports use in diabetic ulcers

**Cellular and Tissue-Engineered Products:**
- **Apligraf:**
  - Bilayer living skin equivalent (keratinocytes + fibroblasts)
  - FDA-approved for venous and diabetic ulcers
- **Dermagraft:**
  - Fibroblast-seeded scaffold
  - For diabetic foot ulcers
- **Bioengineered skin substitutes:**
  - Integra (collagen-GAG with silicone)
  - Matriderm (collagen-elastin)
  - Used for surgical reconstruction, burn coverage

**Negative Pressure Wound Therapy (NPWT):**
- **Mechanisms:**
  - Macrodeformation: Wound edge draw
  - Microdeformation: Cellular stimulation
  - Fluid removal: Edema reduction, cytokine clearance
  - Perfusion enhancement
- **Indications:**
  - Complex surgical wounds
  - Traumatic wounds with cavitation
  - Diabetic foot ulcers
  - Open abdomen (vacuum pack)
- **Contraindications:**
  - Untreated osteomyelitis
  - Malignancy in wound
  - Fistula to organs
- **Instillation therapy (NPWTi-d):**
  - Intermittent saline/antiseptic instillation
  - For infected, highly exudative wounds

### Clinical Decision Support

**Healing Prediction Models:**
- **Wound Healing Index (WHI):**
  - Algorithm considering age, wound age, size, depth, grade
  - Predicts probability of healing
- **Machine learning approaches:**
  - CNN (convolutional neural networks) for image analysis
  - Automated measurement and classification
  - Early prediction of non-healing trajectory

**Telehealth and Remote Monitoring:**
- Smartphone apps for wound photography
- AI-assisted measurement and tracking
- Remote expert consultation
- Improved access in underserved areas

### Evidence-Based Guidelines Summary

**High-Strength Recommendations:**
1. **Moist wound healing:** Occlusive dressings > dry dressings
2. **Debridement:** Essential for chronic wounds to convert to acute
3. **Compression:** Gold standard for venous ulcers (multi-layer systems)
4. **Offloading:** Non-negotiable for diabetic foot ulcers (TCC gold standard)
5. **Revascularization:** Required for arterial ulcers before healing possible
6. **Infection control:** Clinical signs > quantitative culture for diagnosis`,
      keyTerms: [
        { term: 'multispectral imaging', definition: 'Imaging technology capturing multiple wavelengths to assess tissue oxygenation, perfusion, and composition' },
        { term: 'autofluorescence', definition: 'Natural emission of light by tissues; used in wound imaging to detect bacterial load based on porphyrin fluorescence' },
        { term: 'PEDIS', definition: 'IWGDF classification system: Perfusion, Extent, Depth, Infection, Sensation; grades diabetic foot ulcers' },
        { term: 'CEAP', definition: 'Venous disorder classification: Clinical, Etiologic, Anatomic, Pathophysiologic; C4b indicates lipodermatosclerosis' },
        { term: 'PHMB', definition: 'Polyhexamethylene biguanide; antiseptic agent effective against biofilms with minimal cytotoxicity', pronunciation: 'pee-aitch-em-bee' },
        { term: 'dHACM', definition: 'Dehydrated human amnion/chorion membrane; placental tissue product with pro-healing properties' },
        { term: 'negative pressure wound therapy', definition: 'Vacuum-assisted wound closure promoting healing through macrodeformation, microdeformation, and fluid removal' },
      ],
      clinicalNotes: `Evidence-Based Practice Pearls:

1. **For suspected infection:**
   - Clinical diagnosis (4 CANDO criteria) > quantitative culture
   - Tissue biopsy > swab culture
   - Biofilm suspected if no improvement in 2-4 weeks

2. **Choosing dressings:**
   - Exudate amount = primary driver of selection
   - Moisture balance: moist to touch, not macerated
   - Change frequency based on saturation, not arbitrary schedule

3. **Adjunctive therapies:**
   - HBOT: Evidence strongest for diabetic foot ulcers (Wagner Grade 3+)
   - Electrical stimulation: Consider for pressure ulcers unresponsive to standard care
   - ESWT: Promising for chronic wounds, more data needed

4. **When to refer:**
   - Any wound unchanged after 4 weeks of appropriate therapy
   - Suspected osteomyelitis (probe-to-bone test, MRI)
   - Vascular insufficiency (ABI < 0.7)
   - Atypical presentation or concerning pathology`,
    },
  },

  media: [
    {
      id: 'wound-classification-flowchart',
      type: 'diagram',
      filename: 'wound-classification.svg',
      title: 'Wound Classification Decision Tree',
      description: 'Algorithm for classifying wounds by mechanism, depth, and contamination',
    },
    {
      id: 'wound-depth-layers',
      type: 'diagram',
      filename: 'wound-depth.svg',
      title: 'Wound Depth and Skin Layers',
      description: 'Cross-section showing partial vs. full-thickness wounds',
    },
  ],

  citations: [
    {
      id: 'npiap-2019',
      type: 'article',
      title: 'National Pressure Ulcer Advisory Panel (NPIAP) Guidelines',
      source: 'Journal of Wound, Ostomy, and Continence Nursing',
      url: 'https://doi.org/10.1097/WON.0000000000000502',
    },
    {
      id: 'iwgdf-2023',
      type: 'article',
      title: 'IWGDF Guidelines on diabetic foot ulcer management',
      authors: ['Bus, S.A.', 'Armstrong, D.G.'],
      source: 'Diabetes/Metabolism Research and Reviews',
    },
    {
      id: 'fry-delbridge-2018',
      type: 'article',
      title: 'Surgical site infection: strategies for prevention and treatment',
      source: 'Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-healing-phases', targetType: 'topic', relationship: 'related', label: 'Wound Healing Phases' },
    { targetId: 'wound-care-assessment', targetType: 'topic', relationship: 'related', label: 'Wound Assessment' },
    { targetId: 'wound-care-cleaning', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning' },
    { targetId: 'wound-care-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['wound healing', 'wound classification', 'tissue repair', 'surgery'],
    keywords: ['wound types', 'acute', 'chronic', 'pressure ulcer', 'diabetic ulcer', 'venous ulcer', 'burns'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundBasicsContent;
