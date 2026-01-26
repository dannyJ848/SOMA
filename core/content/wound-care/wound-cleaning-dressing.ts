/**
 * Wound Cleaning and Dressing
 *
 * Comprehensive content on wound cleansing techniques, irrigation,
 * debridement, and appropriate dressing selection.
 */

import { EducationalContent } from '../types';

export const woundCleaningDressing: EducationalContent = {
  id: 'wound-care-cleaning-dressing',
  type: 'process',
  name: 'Wound Cleaning and Dressing',
  alternateNames: ['Wound Irrigation', 'Wound Dressing', 'Wound Care Technique'],

  levels: {
    1: {
      level: 1,
      summary: 'Keeping wounds clean and covered helps them heal faster and prevents infection.',
      explanation: `Taking good care of a wound is important for healing. Here is how to clean and cover most minor wounds at home.

## Cleaning a Wound

### Step 1: Wash Your Hands
- Use soap and water for at least 20 seconds
- This prevents spreading germs to the wound

### Step 2: Stop the Bleeding
- Press a clean cloth firmly on the wound
- Keep pressure for 5-10 minutes
- Most small cuts stop bleeding on their own

### Step 3: Rinse the Wound
- Use clean, running water to rinse out the wound
- Gently wash around the wound with mild soap
- Don't get soap directly in the wound - it can hurt!
- Remove any dirt or debris you can see

### Step 4: Apply Antibiotic Ointment (Optional)
- A thin layer of antibiotic ointment helps keep the wound moist
- This can help it heal faster
- Skip this step if you're allergic to these products

## Covering a Wound

### Why Cover Wounds?
- Keeps the wound clean
- Protects from bumping or rubbing
- Keeps the wound moist (moist wounds heal better!)
- Catches any drainage

### How to Apply a Bandage
1. Make sure the wound is dry around the edges
2. Choose a bandage that covers the whole wound plus some extra
3. Place the pad part directly over the wound
4. Press the sticky parts down firmly
5. Change the bandage daily or when it gets wet or dirty

### Types of Bandages
- **Adhesive bandages (Band-Aids):** Good for small cuts
- **Gauze pads + tape:** Good for larger wounds
- **Butterfly bandages:** Help hold cut edges together

## When to Change the Bandage
- At least once a day
- Whenever it gets wet, dirty, or falls off
- If blood soaks through
- If it starts to smell

## Signs the Wound is Healing Well
- Gets smaller over time
- Forms a scab (if left uncovered) or pink tissue (if kept moist)
- Pain and redness decrease after the first few days
- No pus or bad smell

## What NOT to Do
- Don't use hydrogen peroxide or rubbing alcohol - they can damage healing tissue
- Don't pick at scabs
- Don't use cotton balls (fibers can stick in the wound)
- Don't bandage too tightly`,
      keyTerms: [
        { term: 'bandage', definition: 'A covering put over a wound to protect it and help it heal' },
        { term: 'gauze', definition: 'A thin, loosely woven cloth used for wound dressings' },
        { term: 'antibiotic ointment', definition: 'Medicine in a cream form that kills germs on the skin' },
        { term: 'debris', definition: 'Dirt, pieces of material, or other things that don\'t belong in a wound' },
      ],
      analogies: [
        'A bandage is like an umbrella for your wound - it protects it from the outside world while it heals.',
        'Keeping a wound moist is like watering a garden - the cells need the right environment to grow.',
      ],
      examples: [
        'After scraping your knee, rinse it under cool running water, pat dry around the edges, and cover with a large adhesive bandage.',
        'For a paper cut, wash with water, apply a small amount of antibiotic ointment, and use a fingertip bandage.',
      ],
    },

    2: {
      level: 2,
      summary: 'Effective wound care involves proper cleansing to remove contaminants, appropriate debridement of dead tissue, and selection of dressings that maintain optimal moisture balance.',
      explanation: `## Wound Cleansing Principles

### Goals of Wound Cleansing
- Remove debris, bacteria, and foreign material
- Reduce bioburden (bacterial load)
- Prevent infection
- Create optimal environment for healing

### Cleansing Solutions

| Solution | Best Uses | Considerations |
|----------|-----------|----------------|
| Normal saline (0.9% NaCl) | Most wounds | Safe, isotonic, no tissue toxicity |
| Tap water | Minor acute wounds | Convenient, studies show comparable outcomes to saline |
| Wound cleansers | Chronic wounds | Surfactants help remove debris |
| Antiseptics | Specific indications | Can be cytotoxic to healing cells |

**What to Avoid:**
- Hydrogen peroxide: Damages granulation tissue
- Povidone-iodine (undiluted): Cytotoxic to fibroblasts
- Alcohol: Painful, tissue damage
- Dakin's solution (concentrated): Reserved for specific infections

### Irrigation Technique

**Pressure:**
- Optimal: 4-15 psi
- Too low: Ineffective debris removal
- Too high: Tissue damage, bacteria forced deeper

**How to achieve proper pressure:**
- 35-mL syringe with 19-gauge needle: ~8 psi
- Commercial irrigation devices
- IV bag with tubing (lower pressure)
- Squeeze bottle: Variable, usually lower pressure

**Volume:**
- Generally 50-100 mL per cm of wound length
- More for contaminated wounds
- Less for clean, surgical wounds

## Debridement: Removing Dead Tissue

### Why Debride?
- Dead tissue delays healing
- Provides food for bacteria
- Obscures wound assessment
- Prevents wound closure

### Types of Debridement

**Sharp/Surgical:**
- Uses scalpel, scissors, or curette
- Fastest and most selective
- Requires training
- May need anesthesia

**Mechanical:**
- Wet-to-dry dressings (less favored now)
- Hydrotherapy
- Wound irrigation
- Non-selective; can damage healthy tissue

**Enzymatic:**
- Collagenase (Santyl)
- Breaks down collagen in dead tissue
- Slow but selective
- Daily application needed

**Autolytic:**
- Body's own enzymes dissolve dead tissue
- Maintained by moisture-retentive dressings
- Slowest but gentlest
- Best for patients who cannot tolerate other methods

**Biological:**
- Medical-grade maggots
- Highly selective
- Also reduces bacteria
- Patient acceptance varies

## Dressing Selection

### Moist Wound Healing
- Wounds heal faster in moist environment
- Cells migrate more easily
- Less pain at dressing changes
- Reduced scarring

### Dressing Categories

**Film Dressings:**
- Thin, transparent, adhesive
- Use: Superficial wounds, IV sites, over other dressings
- Not for infected or heavily draining wounds

**Foam Dressings:**
- Absorbent, cushioning
- Use: Moderate to heavy exudate wounds
- Can stay in place 3-7 days
- Available as adhesive or non-adhesive

**Hydrogel:**
- High water content, cooling
- Use: Dry wounds, burns, necrotic tissue (autolytic debridement)
- Donates moisture
- Change every 1-3 days

**Hydrocolloid:**
- Waterproof outer layer, gel-forming inner layer
- Use: Light to moderate exudate, partial thickness wounds
- Creates gel when absorbing fluid
- Can stay 3-7 days

**Alginate:**
- Derived from seaweed
- Highly absorbent, becomes gel when wet
- Use: Heavily draining wounds, bleeding wounds
- Requires secondary dressing
- Change when saturated

**Silver Dressings:**
- Antimicrobial properties
- Use: Infected wounds, wounds at high infection risk
- Various forms (foam, alginate, hydrocolloid with silver)
- Not for long-term use

### Matching Dressing to Wound

| Wound Characteristic | Dressing Choice |
|---------------------|-----------------|
| Dry, necrotic | Hydrogel, hydrocolloid |
| Minimal exudate | Film, hydrocolloid |
| Moderate exudate | Foam, alginate |
| Heavy exudate | Alginate, super-absorbent |
| Infected/high bioburden | Silver dressing |
| Fragile surrounding skin | Non-adhesive, silicone border |

## Dressing Application

### General Principles
1. Clean wound with appropriate solution
2. Pat dry periwound skin
3. Apply primary dressing to wound bed
4. Secure with secondary dressing if needed
5. Document wound assessment and dressing used

### Frequency of Changes
- Follow product guidelines
- Change if dressing is saturated
- Change if signs of infection develop
- Some dressings can stay 7 days if wound stable`,
      keyTerms: [
        { term: 'debridement', definition: 'Removal of dead, damaged, or infected tissue from a wound to promote healing', pronunciation: 'deh-BREED-ment' },
        { term: 'bioburden', definition: 'The number of bacteria or other microorganisms living on a wound surface' },
        { term: 'exudate', definition: 'Fluid that drains from a wound, containing cells, proteins, and debris', pronunciation: 'EX-oo-date' },
        { term: 'periwound', definition: 'The skin immediately surrounding a wound' },
        { term: 'autolytic debridement', definition: 'Using the body\'s own enzymes and moisture to break down dead tissue' },
        { term: 'hydrocolloid', definition: 'A type of dressing with gel-forming particles that absorb wound fluid' },
      ],
      analogies: [
        'Choosing a dressing is like choosing shoes for the weather - you need the right one for the conditions.',
        'Irrigation is like using a garden hose to clean dirt off a driveway - enough pressure to remove debris, but not so much that it damages the surface.',
      ],
      clinicalNotes: 'Tap water has been shown in multiple studies to be safe for cleansing acute wounds, but sterile saline is preferred for chronic wounds or immunocompromised patients. Avoid antiseptics on healing wounds unless specifically indicated for infection control.',
    },

    3: {
      level: 3,
      summary: 'Evidence-based wound care integrates systematic cleansing, appropriate debridement selection based on wound bed assessment, and dressing selection guided by wound moisture balance, exudate management, and infection status.',
      explanation: `## Wound Cleansing: Evidence Base

### Solution Selection

**Potable Tap Water:**
- Cochrane review: No difference in infection rates vs. saline for acute traumatic wounds
- Cost-effective, readily available
- pH ~7, hypotonic
- Chlorine provides mild antimicrobial effect

**Normal Saline (0.9% NaCl):**
- Isotonic, physiologically compatible
- No cytotoxicity
- No antimicrobial properties
- Gold standard for comparison studies

**Wound Cleansers:**
- Contain surfactants (poloxamer, benzalkonium)
- Reduce surface tension, improve debris removal
- Some have antimicrobial agents
- May be cytotoxic if used long-term on healing wounds

**Antiseptic Solutions:**

| Agent | Dilution | Application | Cytotoxicity |
|-------|----------|-------------|--------------|
| Povidone-iodine | 0.5-1% | Short-term infected wounds | Moderate |
| Chlorhexidine | 0.05% aqueous | Pre-surgical, infected wounds | Lower than iodine |
| Sodium hypochlorite (Dakin's) | 0.025-0.5% | Infected/necrotic wounds | Concentration-dependent |
| Acetic acid | 0.5-1% | Pseudomonas colonization | Low at proper dilution |

### Irrigation Parameters

**Pressure Delivery:**
- Low pressure (<4 psi): Inadequate cleansing
- Optimal (4-15 psi): Effective removal without tissue damage
- High pressure (>15 psi): Tissue trauma, bacterial inoculation into deeper tissues

**Syringe/Needle Combinations:**
| Syringe | Needle/Tip | Approximate Pressure |
|---------|------------|---------------------|
| 35 mL | 19-gauge angiocath | 8 psi |
| 60 mL | 18-gauge | 4-6 psi |
| 12 mL | 22-gauge | 13 psi |

**Volume Requirements:**
- Traumatic wound: 50-100 mL per cm wound length
- Heavily contaminated: May need several liters
- Puncture wounds: Copious irrigation, difficult to achieve

**Pulsatile Lavage:**
- Delivers intermittent pressurized fluid
- More effective debris removal than bulb syringe
- Suction capability removes irrigant
- Used in surgical settings, wound clinics

## Debridement Modalities

### Sharp Debridement

**Indications:**
- Thick eschar
- Large amounts of necrotic tissue
- Wound edges requiring refreshening
- Preparation for skin grafting

**Contraindications:**
- Patients on anticoagulation (relative)
- Pyoderma gangrenosum
- Undiagnosed ulcers (rule out malignancy)
- Ischemic wounds (may need revascularization first)

**Technique:**
- Local or topical anesthesia (EMLA, lidocaine injection)
- Sterile technique
- Cut at junction of viable and non-viable tissue
- Bleeding indicates viable tissue reached
- Control hemostasis

### Enzymatic Debridement

**Collagenase (Santyl):**
- Derived from Clostridium histolyticum
- Digests collagen in necrotic tissue
- Apply daily, crosshatch eschar first
- Inactivated by silver, heavy metals, detergents

**Other Enzymes (less common in US):**
- Papain-urea (discontinued)
- Streptokinase/streptodornase

### Autolytic Debridement

**Mechanism:**
- Endogenous proteases (MMPs, neutrophil elastase)
- Macrophage phagocytosis
- Requires moist environment

**Dressing Selection:**
- Hydrogels: Donate moisture for dry wounds
- Hydrocolloids: Maintain moisture
- Films: Trap moisture (thin wounds only)

**Timeline:**
- Slowest method: Days to weeks
- Not appropriate for infected wounds
- Monitor for signs of infection

### Mechanical Debridement

**Wet-to-Dry Dressings:**
- Historically common, now discouraged
- Non-selective (removes healthy tissue)
- Painful
- May be used for initial gross debridement

**Hydrotherapy:**
- Whirlpool (declining use due to cross-contamination risk)
- Pulsatile lavage with suction
- Directed water streams

**Monofilament Fiber Pads:**
- Gentle mechanical debridement
- Can be used at bedside
- Removes slough and debris

### Biological Debridement (Maggot Therapy)

**Mechanism:**
- Larval secretions contain proteolytic enzymes
- Selective digestion of necrotic tissue only
- Antimicrobial properties (secretions destroy biofilm)
- Stimulate healing

**Application:**
- Medical-grade (sterile) larvae (Lucilia sericata)
- Contained in biobags or free-range
- Applied 2-3 days, then removed
- May need multiple applications

**Evidence:**
- RCT data shows efficacy comparable to hydrogel for venous ulcers
- Faster debridement than autolytic methods
- Patient acceptance: Key barrier

## Advanced Dressing Selection

### Moisture Balance Concept

**Wound Moisture Continuum:**
- Desiccated -> Dry -> Moist (optimal) -> Wet -> Macerated

**Matching Dressings to Moisture:**
- Donate moisture: Hydrogels, saline gauze
- Maintain moisture: Films, hydrocolloids
- Absorb moisture: Foams, alginates, hydrofibers
- Manage heavy exudate: Super-absorbents, NPWT

### Modern Dressing Categories

**Hydrofiber (Aquacel):**
- CMC (carboxymethylcellulose) fibers
- Absorbs exudate vertically (less lateral spread)
- Becomes gel
- Available with silver

**Collagen Dressings:**
- Provide scaffold for cell migration
- May bind excess proteases
- Use in stalled wounds

**Honey Dressings:**
- Medical-grade Manuka honey
- Antimicrobial (low pH, osmotic effect, hydrogen peroxide)
- Autolytic debridement
- May cause stinging

**Negative Pressure Wound Therapy (NPWT):**
- Subatmospheric pressure (-75 to -125 mmHg)
- Removes exudate, reduces edema
- Promotes granulation
- Indicated for complex wounds, dehisced incisions

**Skin Substitutes:**
- Acellular matrices: Scaffold only
- Cellular products: Living cells (fibroblasts, keratinocytes)
- Reserved for non-healing wounds after standard care fails

### Dressing Change Frequency

| Dressing Type | Typical Duration |
|---------------|------------------|
| Gauze | Daily (at minimum) |
| Film | 5-7 days |
| Hydrocolloid | 3-7 days |
| Foam | 3-7 days |
| Alginate | 1-3 days (when saturated) |
| Hydrofiber | 3-7 days |
| NPWT | 2-3 times weekly |

### Special Considerations

**Periwound Protection:**
- Barrier films/creams for maceration
- Acrylate-based skin protectants
- Proper dressing size selection

**Pain Management:**
- Non-adherent dressings
- Silicone-bordered dressings
- Topical lidocaine for dressing changes
- Appropriate systemic analgesia`,
      keyTerms: [
        { term: 'pulsatile lavage', definition: 'Irrigation technique delivering pressurized fluid in intermittent pulses with simultaneous suction', pronunciation: 'PUL-sah-tile lah-VAHZH' },
        { term: 'collagenase', definition: 'Enzyme that breaks down collagen; used for enzymatic debridement of necrotic tissue', pronunciation: 'kol-LAJ-en-ase' },
        { term: 'hydrofiber', definition: 'Absorbent dressing made of carboxymethylcellulose fibers that gel upon contact with wound fluid' },
        { term: 'NPWT', definition: 'Negative pressure wound therapy; applies subatmospheric pressure to wound bed to promote healing' },
        { term: 'maceration', definition: 'Skin softening and breakdown from excess moisture exposure; appears white and friable' },
      ],
      clinicalNotes: 'Sharp debridement should stop when punctate bleeding is observed - this indicates viable tissue. Ischemic wounds require vascular assessment before aggressive debridement. Enzymatic agents are inactivated by silver; do not use silver dressings over collagenase.',
    },

    4: {
      level: 4,
      summary: 'Advanced wound care integrates wound bed preparation principles, evidence-based dressing algorithms, biofilm-targeted debridement strategies, and adjunctive technologies to optimize healing environments and overcome healing barriers.',
      explanation: `## Wound Bed Preparation: TIME-H Framework

### Tissue Management

**Debridement Decision Matrix:**

| Tissue Type | Assessment | Debridement Method |
|-------------|-----------|-------------------|
| Black eschar (dry) | Score hardness, adherence | Sharp > enzymatic > autolytic |
| Black eschar (soft) | Check for undermining | Sharp debridement |
| Yellow slough | Assess thickness, adherence | Enzymatic, autolytic, mechanical |
| Red granulation (healthy) | Observe color, texture | None needed |
| Red granulation (hypergranulation) | Raised above wound edges | Silver nitrate, sharp reduction |
| Pink epithelium | Advancing edge | Protect, maintain moisture |

**Maintenance Debridement:**
- Biofilm reforms within 24-72 hours post-debridement
- Serial debridement (weekly) for chronic wounds
- Combines with biofilm suppression strategies

### Infection/Inflammation Control

**Wound Infection Continuum:**
1. Contamination: Organisms present, no proliferation
2. Colonization: Proliferating, no host response
3. Critical colonization/Covert infection: Delayed healing, subtle signs
4. Overt infection: Classic signs, systemic response possible

**Biofilm-Targeted Strategies:**

| Intervention | Mechanism | Application |
|-------------|-----------|-------------|
| Sharp debridement | Physical disruption | Gold standard, removes biofilm |
| Ultrasonic debridement | Cavitation, disruption | Contact and non-contact devices |
| Surfactant cleansers | Disrupts EPS matrix | Use with debridement |
| Cadexomer iodine | Antimicrobial + absorbs exudate | 3 mm depth, change 3x/week |
| Medical-grade honey | Low pH, osmotic, MGO | Manuka with UMF rating |
| PHMB | Antimicrobial, low toxicity | Wound cleansers, dressings |
| Silver | Broad-spectrum antimicrobial | Various delivery systems |

**Topical Antimicrobial Selection:**

| Agent | Spectrum | Cytotoxicity | Duration |
|-------|----------|--------------|----------|
| Silver (ionic) | Broad | Low-moderate | Continuous release |
| Iodine (cadexomer) | Broad | Low (slow release) | Dressing changes |
| PHMB | Broad | Very low | Continuous |
| Honey (Manuka) | Broad | None | Daily |
| Chlorhexidine | Broad | Moderate | Topical use only |

### Moisture Balance

**Exudate Assessment:**
- None: Wound bed dry
- Scant: Wound moist, dressing unmarked
- Small: Wound wet, dressing marked <25%
- Moderate: Dressing saturated >25% but <75%
- Large: Dressing saturated, may leak

**Dressing Fluid Handling:**

| Category | MVTR (g/m2/24h) | Absorption | Use |
|----------|-----------------|-----------|-----|
| Films | 300-800 | None | Superficial, low exudate |
| Hydrocolloids | 300-400 | Low-moderate | Low-moderate exudate |
| Foams | 800-5000 | Moderate-high | Moderate-high exudate |
| Alginates | N/A | Very high | High exudate, bleeding |
| Super-absorbents | >3000 | Very high | Heavy exudate |

MVTR = Moisture Vapor Transmission Rate

### Edge Effect

**Non-Advancing Wound Edge:**
- Epibole (rolled edge): Epidermis curled under
- Hyperkeratotic: Callused, dry
- Undermining: Tissue destruction under edge
- Maceration: Excess moisture damage

**Interventions:**
- Epibole: Sharp debridement of rolled edge
- Hyperkeratotic: Debridement, moisturizing
- Undermining: Wound packing, address infection
- Maceration: Moisture management, barrier creams

### Host Factors (TIME-H)

**Systemic Optimization:**
- Glycemic control (HbA1c target)
- Nutritional status (albumin, prealbumin)
- Edema management
- Smoking cessation
- Medication review (steroids, immunosuppressants)

## Advanced Debridement Technologies

### Hydrosurgery (Versajet)

**Mechanism:**
- High-velocity saline jet creates Venturi effect
- Cuts and aspirates tissue simultaneously
- Selective for soft tissue

**Advantages:**
- Precise depth control
- Less bleeding than sharp
- Faster than enzymatic

**Limitations:**
- Requires equipment
- Cost
- Not for heavily calcified tissue

### Ultrasonic Debridement

**Low-Frequency Ultrasound (20-40 kHz):**
- Contact devices: Apply to wound surface
- Non-contact (MIST): Saline mist delivery
- Cavitation disrupts biofilm and necrotic tissue

**Evidence:**
- Reduced bioburden
- May accelerate healing
- Useful for maintenance debridement

### Plasma Technology

**Cold Atmospheric Plasma:**
- Ionized gas with reactive species
- Antimicrobial effect
- May stimulate healing
- Emerging technology

## Advanced Dressing Technologies

### Silver Dressing Formulations

| Type | Mechanism | Examples |
|------|-----------|----------|
| Nanocrystalline | Sustained ionic release | Acticoat |
| Ionic silver | Immediate release | Silver sulfadiazine |
| Silver alginate | Combined absorption + antimicrobial | Silvercel |
| Silver foam | Exudate management + antimicrobial | Mepilex Ag |

**Duration of Use:**
- Initial antimicrobial goal: 2-4 weeks
- Reassess need at each dressing change
- Argyria risk with prolonged use (rare)

### Negative Pressure Wound Therapy

**Mechanisms:**
- Macrodeformation: Wound edge approximation
- Microdeformation: Cellular stretch -> proliferation
- Fluid removal: Decreases edema, bacterial load
- Altered blood flow: Increased perfusion

**Pressure Settings:**
| Setting | Indication |
|---------|-----------|
| -75 mmHg | Delicate tissue, pain, skin grafts |
| -125 mmHg | Standard wounds, robust tissue |
| -150 to -200 mmHg | Heavily exudating wounds |

**NPWTi-d (Instillation):**
- Intermittent instillation of solution (saline, antiseptic)
- Dwell time: 10-20 minutes
- Followed by suction
- Enhanced biofilm disruption, wound cleansing

### Cellular/Tissue Products

**Acellular Matrices:**
- Provide collagen scaffold
- No living cells
- Examples: AlloDerm, Integra, Oasis

**Living Cell Products:**
- Apligraf: Keratinocytes + fibroblasts
- Dermagraft: Neonatal fibroblasts
- Indication: Non-healing diabetic/venous ulcers

**Amniotic Membrane:**
- Growth factors, ECM components
- Anti-inflammatory, anti-scarring
- Various preparations (dehydrated, cryopreserved)

## Documentation Standards

### Wound Assessment Components
1. Location (anatomic site, laterality)
2. Size (length x width x depth in cm)
3. Wound bed (% granulation, slough, eschar, epithelium)
4. Exudate (amount, color, odor)
5. Wound edges (attached, rolled, undermined + depth/direction)
6. Periwound skin (intact, macerated, erythema, induration)
7. Pain (type, severity, timing)
8. Photography (standardized, with ruler)

### Healing Documentation
- Percent area reduction weekly
- Wound bed improvement
- Exudate changes
- Edge advancement`,
      keyTerms: [
        { term: 'TIME-H framework', definition: 'Expanded wound bed preparation model: Tissue, Infection/Inflammation, Moisture, Edge, and Host factors' },
        { term: 'hydrosurgery', definition: 'Debridement using high-velocity saline jet (Versajet) for selective tissue removal' },
        { term: 'NPWTi-d', definition: 'Negative pressure wound therapy with instillation and dwell time; enhanced wound cleansing' },
        { term: 'biofilm', definition: 'Structured microbial community in self-produced matrix; tolerant to antibiotics and host immunity' },
        { term: 'epibole', definition: 'Rolled wound edge where epidermis curls under, preventing epithelialization' },
        { term: 'MVTR', definition: 'Moisture vapor transmission rate; measures dressing\'s ability to allow water vapor escape' },
      ],
      clinicalNotes: 'Biofilm is present in most chronic wounds. Debridement alone is insufficient - must combine with topical antimicrobials and repeat debridement. Reassess wounds that fail to show 40-50% area reduction by week 4 and consider advanced therapies.',
    },

    5: {
      level: 5,
      summary: 'Expert wound care practice integrates evolving evidence on wound cleansing, biofilm management strategies, personalized dressing algorithms, and emerging technologies within quality improvement frameworks and cost-effectiveness considerations.',
      explanation: `## Evidence Synthesis: Wound Cleansing

### Systematic Review Evidence

**Tap Water vs. Saline:**
- Cochrane review (2022 update): No significant difference in infection rates
- Meta-analysis: RR 0.66 (95% CI 0.42-1.04) favoring tap water
- Quality of evidence: Low to moderate
- Practical implication: Tap water acceptable for most acute wounds

**Antiseptic vs. Non-Antiseptic:**
- No clear evidence antiseptics improve outcomes in clean wounds
- Potential benefit in critically colonized/infected wounds
- Cytotoxicity concerns with prolonged use
- Recommendation: Reserve for specific indications

**Wound Cleansers (Surfactant-Based):**
- Limited high-quality RCT data
- May improve debris removal
- Consider for chronic wounds with adherent slough

### Irrigation Pressure Meta-Analysis

**Optimal Range:**
- 4-15 psi supported by biomechanical studies
- Lower pressures (bulb syringe ~2 psi): May be insufficient
- Higher pressures (>15 psi): Risk of tissue trauma, bacterial inoculation

**Clinical Translation:**
- 35-mL syringe with 19-gauge blunt needle: ~8 psi
- Commercial irrigation devices: Standardized pressure delivery
- Volume-pressure relationship varies with technique

## Biofilm: Translating Science to Practice

### Biofilm Paradigm

**Key Concepts:**
1. Biofilm present in 60-90% of chronic wounds
2. Not detectable by standard culture (planktonic sampling)
3. Antibiotic tolerance (not resistance)
4. Reforms within 24-72 hours post-disruption

**Biofilm-Based Wound Care (BBWC) Strategy:**
1. **Disrupt** - Physical debridement (sharp, mechanical, ultrasonic)
2. **Suppress** - Topical antimicrobials (anti-biofilm agents)
3. **Prevent** - Serial debridement, appropriate dressings, address host factors

### Anti-Biofilm Agents

| Agent | Mechanism | Evidence Level |
|-------|-----------|---------------|
| Cadexomer iodine | Slow-release iodine, exudate absorption | Strong |
| Medical-grade honey | Low pH, MGO, H2O2 generation | Moderate |
| EDTA-based agents | Chelates biofilm matrix metals | Emerging |
| Lactoferrin/xylitol | Disrupts biofilm metabolism | Emerging |
| Gallium-based | Disrupts iron metabolism | Experimental |
| Surfactant wound gels | Physical EPS disruption | Emerging |

### Detection Methods

**Clinical:**
- Wound failure to progress despite optimization
- Low-grade inflammation without classic infection signs
- Slimy, shiny wound bed appearance

**Diagnostic (research/specialized):**
- Confocal laser scanning microscopy
- Fluorescent in situ hybridization (FISH)
- Fluorescence imaging (MolecuLight)

## Dressing Selection Algorithms

### Wound-Based Algorithm

**Wound-Based Decision Algorithm:**

**IF wound is dry/desiccated:**
- Hydrogel or hydrocolloid (donate moisture)

**IF wound has minimal exudate:**
- Film, thin hydrocolloid, or foam

**IF wound has moderate exudate:**
- Foam (standard or super-absorbent)

**IF wound has heavy exudate:**
- Alginate, hydrofiber, super-absorbent polymers
- IF uncontrolled: NPWT

**IF wound has slough/necrotic tissue:**
- Debridement + moisture-retentive dressing
- OR enzymatic debridement

**IF wound is infected/critically colonized:**
- Antimicrobial dressing (silver, cadexomer iodine, honey)
- Plus debridement

**IF wound is healthy granulation, epithelializing:**
- Protect with non-adherent dressing
- Consider advanced biologics if stalled

### Cost-Effectiveness Considerations

**Total Cost of Care:**
- Dressing cost is fraction of total wound care expense
- Nursing time, hospital days, complications are major drivers
- Faster healing = lower total cost despite higher dressing cost

**Evidence on Advanced Dressings:**
- RCTs often underpowered for definitive conclusions
- Meta-analyses show modest benefits for foams vs. gauze
- Hydrocolloids vs. foams: Similar outcomes, individual variation
- Silver dressings: Cost-effective only for infected/critically colonized wounds

**NPWT Economics:**
- Higher upfront cost
- Reduces time to surgical closure
- Decreases length of stay for complex wounds
- Cost-effective for appropriate indications

## Emerging Technologies

### Smart Dressings

**Sensing Capabilities:**
- pH monitoring (infection detection)
- Temperature sensing (inflammation)
- Moisture level detection
- Bacterial load estimation

**Responsive Drug Delivery:**
- pH-triggered antimicrobial release
- Enzyme-responsive degradation
- Controlled growth factor release

**Current Status:**
- Mostly in research/development
- Early commercial products emerging
- Regulatory pathways being established

### 3D-Printed Dressings

**Potential Advantages:**
- Patient-specific geometry
- Customized drug loading
- Multi-material constructs

**Current Applications:**
- Bioprinted skin substitutes
- Personalized scaffolds
- Experimental stage

### Electrospun Nanofiber Dressings

**Properties:**
- ECM-mimetic structure
- High surface area for drug loading
- Tunable fiber diameter and alignment
- Biodegradable options available

**Research Applications:**
- Antimicrobial incorporation
- Growth factor delivery
- Stem cell carriers

## Quality Improvement in Wound Care

### Outcome Metrics

**Primary Outcomes:**
- Complete wound closure
- Time to healing
- Recurrence rate

**Secondary Outcomes:**
- Percent area reduction (PAR)
- Quality of life (wound-specific instruments)
- Pain scores
- Cost per healed wound

### Benchmarking

**Expected Healing Rates:**
| Wound Type | 12-Week Complete Healing (Standard Care) |
|------------|------------------------------------------|
| Venous leg ulcer | 30-40% |
| Diabetic foot ulcer | 30-35% |
| Pressure injury (Stage 3-4) | Variable, 10-30% |

**PAR Thresholds:**
- >40-50% at 4 weeks: Predicts healing at 12 weeks
- <30% at 4 weeks: Consider advanced therapies

### Wound Care Team Models

**Multidisciplinary Approach:**
- Wound care specialist/WOCN
- Vascular surgery
- Podiatry
- Infectious disease
- Nutrition
- Physical/Occupational therapy
- Orthotics/Prosthetics

**Telemedicine Integration:**
- Remote wound assessment
- Algorithm-driven recommendations
- Store-and-forward imaging
- Real-time consultation for rural settings

### Documentation and Registries

**Standardized Assessment:**
- BWAT (Bates-Jensen)
- PUSH (Pressure Ulcer Scale for Healing)
- MEASURE (Size, Exudate, Appearance, Suffering, Undermining, Re-evaluation, Edge)

**National Registries:**
- US Wound Registry
- WOCN Society Data
- CMS quality measures

## Translational Research Frontiers

### Microbiome-Directed Therapy

**Wound Microbiome Profiling:**
- 16S rRNA sequencing
- Shotgun metagenomics
- Metabolomics

**Therapeutic Implications:**
- Probiotic applications (experimental)
- Microbiome transplantation (theoretical)
- Personalized antimicrobial selection

### Regenerative Approaches

**Stem Cell Delivery:**
- MSC-loaded scaffolds
- Adipose-derived stem cells
- Platelet-rich plasma (PRP)

**Gene Therapy:**
- VEGF gene transfer
- PDGF gene therapy
- siRNA for scar reduction

**Epigenetic Modulation:**
- HDAC inhibitors
- miRNA therapeutics

### Artificial Intelligence

**Current Applications:**
- Wound measurement from photographs
- Classification algorithms
- Healing trajectory prediction

**Future Directions:**
- Treatment recommendation systems
- Electronic health record integration
- Real-world evidence generation`,
      keyTerms: [
        { term: 'biofilm-based wound care', definition: 'Treatment paradigm combining physical biofilm disruption, topical antimicrobials, and serial debridement to address chronic wound bioburden' },
        { term: 'smart dressing', definition: 'Dressings incorporating sensing capabilities (pH, temperature, moisture) and/or responsive drug delivery' },
        { term: 'electrospinning', definition: 'Manufacturing technique producing nanofibers from polymer solutions using electrostatic forces; creates ECM-mimetic structures' },
        { term: 'PAR', definition: 'Percent Area Reduction; metric for tracking wound healing progress; >40-50% at week 4 predicts 12-week closure' },
        { term: 'store-and-forward', definition: 'Telemedicine modality where clinical images and data are transmitted for later expert review' },
      ],
      clinicalNotes: `Expert Practice Integration:

1. **Wound cleansing** - Match solution to wound situation: tap water for acute minor wounds, saline for chronic wounds, antiseptics only for infected wounds with time-limited use.

2. **Debridement strategy** - Sharp debridement is most effective for biofilm disruption but must be combined with topical antimicrobials and repeated regularly (maintenance debridement).

3. **Dressing selection** - Move beyond product focus to moisture balance principles. The "best" dressing depends on the wound characteristics at that moment, which change over time.

4. **Advanced therapies** - Reserve for wounds failing to meet healing trajectory targets. Document rationale and reassess response.

5. **Quality improvement** - Track outcomes systematically. Benchmark against published healing rates. Participate in registries when possible.

6. **Cost-consciousness** - Consider total cost of care, not dressing cost alone. Faster healing with appropriate products is usually cost-effective.

7. **Team approach** - Complex wounds benefit from multidisciplinary input: vascular, endocrinology, nutrition, infectious disease, rehabilitation.`,
    },
  },

  media: [
    {
      id: 'irrigation-technique',
      type: 'diagram',
      filename: 'wound-irrigation.svg',
      title: 'Wound Irrigation Technique',
      description: 'Proper syringe irrigation technique with pressure guidelines',
    },
    {
      id: 'dressing-selection-chart',
      type: 'diagram',
      filename: 'dressing-selection.svg',
      title: 'Dressing Selection Algorithm',
      description: 'Flowchart for selecting appropriate wound dressings based on wound characteristics',
    },
  ],

  citations: [
    {
      id: 'fernandez-cochrane',
      type: 'article',
      title: 'Water for wound cleansing',
      authors: ['Fernandez, R.', 'Griffiths, R.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'schultz-time',
      type: 'article',
      title: 'Wound bed preparation: a systematic approach to wound management',
      authors: ['Schultz, G.S.', 'et al.'],
      source: 'Wound Repair and Regeneration',
    },
    {
      id: 'wolcott-biofilm',
      type: 'article',
      title: 'Biofilm and its impact on wound healing',
      authors: ['Wolcott, R.D.', 'et al.'],
      source: 'Advances in Wound Care',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-healing-phases', targetType: 'topic', relationship: 'related', label: 'Wound Healing Phases' },
    { targetId: 'wound-care-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
    { targetId: 'wound-care-chronic', targetType: 'topic', relationship: 'related', label: 'Chronic Wounds' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['wound care', 'dressings', 'debridement', 'wound cleansing'],
    keywords: ['irrigation', 'dressing', 'debridement', 'biofilm', 'moisture balance'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundCleaningDressing;
