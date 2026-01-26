/**
 * Dressing Selection and Wound Management
 *
 * Comprehensive content on choosing appropriate dressings
 * based on wound characteristics, exudate management,
 * and healing phase.
 */

import { EducationalContent } from '../types';

export const dressingSelectionContent: EducationalContent = {
  id: 'wound-care-dressing-selection',
  type: 'topic',
  name: 'Dressing Selection and Management',
  alternateNames: ['Wound Dressings', 'Bandage Selection', 'Wound Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Choosing the right bandage helps wounds heal better. Different wounds need different types of dressings based on how wet they are and where they are on the body.',
      explanation: `## Why Bandages and Dressings Matter

A dressing (bandage) does more than just cover a wound. It:
- Keeps dirt and germs out
- Keeps the wound moist (which helps healing)
- Soaks up fluid if the wound is wet
- Protects from injury
- Reduces pain

## Types of Dressings

**1. Adhesive Bandages (Band-Aids)**
- **Best for:** Small cuts, scrapes, shallow wounds
- **How to use:** Clean and dry the wound, peel and stick
- **Change:** Daily or when wet or dirty
- **Good for:** Fingers, arms, legs

**2. Gauze Pads and Tape**
- **Best for:** Larger wounds, wounds that drain fluid
- **How to use:** Place gauze over wound, tape edges
- **Change:** Daily or when soaked
- **Good for:** Any body area

**3. Foam Dressings**
- **Best for:** Wounds that ooze a lot of fluid
- **Feels like:** Soft, spongy
- **Good for:** Cushioning and protection
- **Change:** Every 2-3 days

**4. Clear Films**
- **Best for:** Shallow wounds, scrapes, IV sites
- **Looks like:** Clear plastic with adhesive
- **Good for:** You can see the wound without removing
- **Waterproof:** Yes, can shower with it

**5. Hydrocolloid Pads**
- **Best for:** Small wounds that need moisture
- **Looks like:** A squishy, beige patch
- **Special feature:** Turns bubbly as it absorbs
- **Good for:** Pressure sores, shallow ulcers

## How to Choose

**Think about these questions:**

1. **How much fluid is coming out?**
   - Dry or barely wet → Simple bandage or film
   - Some fluid → Gauze or foam
   - Lots of fluid → Absorbent dressing (alginate)

2. **Where is the wound?**
   - Hard-to-bandage area → Special shapes available
   - Joint that moves → Flexible dressing
   - Foot or hand → Waterproof dressing helps

3. **How big is the wound?**
   - Small → Regular bandage
   - Large → Gauze pad or larger dressing

4. **Is the wound infected?**
   - If infected, may need medicated dressing
   - See a doctor

## How Often to Change Dressings

| Situation | How Often |
|-----------|-----------|
| Dry, healing wound | Every 2-3 days or as directed |
| Drainage visible | When soaked through |
| Dirty or loose | Immediately |
| After getting wet | Immediately |
| First day | Check after 24 hours |

## Steps to Change a Dressing

1. **Wash your hands** with soap and water
2. **Remove old dressing** gently
   - If stuck, wet it a little to loosen
3. **Look at the wound**
   - Is it looking better?
   - Any new redness or swelling?
   - Normal healing: pink tissue, less drainage
4. **Clean the wound** if instructed
   - Gently rinse with saline or water
   - Pat dry with clean cloth
5. **Apply new dressing**
   - Choose right size
   - Cover wound completely
   - Secure with tape or adhesive
6. **Wash hands again**

## Signs of Problems

**Call the doctor if:**
- Redness spreading around wound
- Increasing pain
- Pus or bad smell
- Fever
- Wound getting bigger
- No healing after 2 weeks

## Tips for Better Healing

- **Keep it moist:** Healing happens faster in moist environment
- **Don't use harsh chemicals:** Peroxide and alcohol can damage healing cells
- **Protect from bumping:** Extra padding if needed
- **Eat healthy foods:** Protein, vitamins C and D help healing
- **Don't smoke:** Slows down healing`,
      keyTerms: [
        { term: 'dressing', definition: 'Material placed directly on a wound to protect it and help healing' },
        { term: 'gauze', definition: 'Thin, woven cotton material used to cover and absorb fluid from wounds' },
        { term: 'exudate', definition: 'Fluid that comes out of a wound; can be clear, slightly bloody, or pus' },
        { term: 'absorbent', definition: 'Material that soaks up and holds fluid' },
        { term: 'adhesive', definition: 'Sticky material that makes bandages stick to skin' },
        { term: 'waterproof', definition: 'Keeps water out; can shower without removing' },
      ],
      analogies: [
        'Choosing a dressing is like choosing clothes - you need the right size and material for the weather (wound condition).',
        'A dressing is like a roof on a house - it protects what\'s inside while repairs are made.',
        'Absorbent dressings are like sponges, soaking up extra fluid while keeping the wound moist enough to heal.',
      ],
      examples: [
        'A scraped knee might get a regular adhesive bandage that\'s changed daily.',
        'A pressure ulcer on the heel might use a soft foam dressing to cushion and protect.',
        'A surgical wound might use a clear film so the nurse can check it without removing it.',
      ],
      patientCounselingPoints: [
        'Change dressings regularly - at least every 2-3 days or when soaked.',
        'Wash hands before and after touching the wound.',
        'Don\'t reuse dressings - always use fresh, clean ones.',
        'Keep extra supplies on hand so you can change when needed.',
        'Write down the date you last changed the dressing.',
      ],
    },

    2: {
      level: 2,
      summary: 'Dressing selection is based on wound assessment including exudate amount, tissue type, depth, and surrounding skin. Options include films, foams, hydrocolloids, alginates, hydrogels, and antimicrobial dressings.',
      explanation: `## Principles of Dressing Selection

### The TIME Framework for Dressing Selection

| Component | Assessment | Dressing Goal |
|-----------|------------|---------------|
| **T**issue | Necrotic tissue present? | Debride, maintain moisture |
| **I**nfection | Infected/colonized? | Antimicrobial dressing |
| **M**oisture | Exudate amount? | Balance wet/dry |
| **E**dge | Non-advancing? | Protect, moist environment |

### Dressing Categories

**1. Films (Transparent Dressings)**
- **Examples:** Tegaderm, OpSite, Bioclusive
- **Characteristics:**
  - Clear, adhesive, semi-permeable
  - Waterproof
  - Bacteria-proof (when intact)
  - Oxygen and moisture vapor permeable
- **Best for:**
  - Superficial wounds with minimal drainage
  - IV sites
  - As a secondary dressing over other products
  - Donor sites
- **Change:** Every 3-7 days
- **Not for:** Heavy drainage, infected wounds

**2. Foams**
- **Examples:** Allevyn, Mepilex, Foam Prontosan
- **Characteristics:**
  - Highly absorbent
  - Maintain moist wound environment
  - Non-adherent (easy removal)
  - Available with adhesive border
- **Best for:**
  - Moderate to heavy exudate
  - Granulating wounds
  - Pressure ulcers
  - Cavity wounds (foam fills cavity)
- **Change:** Every 2-3 days
- **Not for:** Dry wounds

**3. Hydrocolloids**
- **Examples:** DuoDERM, Carrasmart, Comfeel
- **Characteristics:**
  - Occlusive (keeps moisture in)
  - Absorb moderate exudate
  - Self-adhesive
  - Turns bubbly as absorbs (normal)
  - Gel-like substance forms on wound (normal)
- **Best for:**
  - Light to moderate exudate
  - Pressure ulcers (Stages 2-3)
  - Superficial wounds
  - Autolytic debridement
- **Change:** Every 3-7 days
- **Not for:** Heavy drainage, infected wounds

**4. Alginates**
- **Examples:** Sorbalgon, Kaltostat, Tegaderm Alginate
- **Characteristics:**
  - Made from seaweed
  - Highly absorbent (up to 20x weight)
  - Turn into gel when wet
  - Require secondary dressing
  - Should NOT be used on dry wounds
- **Best for:**
  - Heavy exudate
  - Cavity wounds (can pack)
  - Bleeding wounds (hemostatic properties)
  - Pressure ulcers with drainage
- **Change:** Daily (or when saturated)
- **Not for:** Dry wounds (must be moistened first)

**5. Hydrogels**
- **Examples:** Intrasite, Nugel, Carrasyn Hydrogel
- **Characteristics:**
  - High water content (70-90%)
  - Add moisture to dry wounds
  - Non-adherent
  - Cool, soothing
  - Minimal absorbency
- **Best for:**
  - Dry wounds, necrotic wounds
  - Partial-thickness wounds
  - Wounds needing moisture (eschar)
  - Painful wounds (soothing)
- **Change:** Daily (dries out quickly)
- **Not for:** Heavy exudate

**6. Gauze**
- **Types:** Plain, impregnated (with saline, petroleum, antimicrobials)
- **Characteristics:**
  - Inexpensive, readily available
  - Can be used dry or moist
  - May adhere to wound bed
  - Requires secondary dressing
- **Best for:**
  - Most wound types when used correctly
  - Packing deep wounds
  - Wet-to-moist dressing technique
  - Covering other primary dressings
- **Change:** Daily to BID
- **Caution:** Can desiccate wound if too dry

**7. Antimicrobial Dressings**
- **Types:**
  - **Silver:** Acticoat, Aquacel Ag, Mepilex Ag
  - **Iodine:** Iodosorb, Cadexomer iodine
  - **PHMB:** Kerlix AMD, PolyMem Silver
  - **Medical honey:** Medihoney
  - **DACC:** Cutimed Sorbact
- **Best for:** Colonized/infected wounds, biofilm, high bacterial load
- **Duration:** Use for 2 weeks, then reassess

### Decision Algorithm

**Step 1: Assess Exudate**
- **None/dry:** Hydrogel, hydrocolloid, film
- **Minimal:** Hydrocolloid, thin foam, film
- **Moderate:** Foam, hydrocolloid, alginate
- **Heavy:** Alginate, hydrofiber, foam

**Step 2: Assess Tissue Type**
- **Necrotic/eschar:** Hydrogel, autolytic debridement
- **Slough:** Hydrogel, hydrocolloid
- **Granulation:** Foam, hydrocolloid (maintain moisture)
- **Epithelializing:** Film, thin hydrocolloid

**Step 3: Assess Infection**
- **No signs:** Regular dressings
- **Localized infection:** Consider antimicrobial
- **Systemic infection:** Systemic antibiotics + antimicrobial dressing

**Step 4: Assess Depth/Location**
- **Shallow/superficial:** Film, thin hydrocolloid
- **Deep/cavity:** Alginate packing, gauze packing
- **Undermining/tunneling:** Packing with appropriate material
- **Joint area:** Flexible dressing (foam, soft silicone)
- **High friction area:** Foam, extra protection

### Frequency of Dressing Changes

| Wound Type | Frequency |
|------------|-----------|
| Dry, healing | Every 3-7 days |
| Light drainage | Every 2-3 days |
| Moderate drainage | Every 1-2 days |
| Heavy drainage | Daily or BID |
| Infected | Daily |

**Principles:**
- Change when strikethrough (soaked)
- Change if loose or soiled
- Change if periwound maceration
- Balance frequency with healing (less disturbance = better)

### Secondary Dressings

**Purpose:** Hold primary dressing in place

**Options:**
- **Gauze wrap:** Most common, versatile
- **Self-adherent wrap (Coban):** Sticks to itself, not skin
- **Tape:** Paper tape for sensitive skin, silk for secure hold
- **Netting:** For difficult areas (head, trunk)
- **Compression garments:** For venous ulcers

**Selection considerations:**
- Patient activity level
- Location of wound
- Patient allergies (adhesive allergy)
- Frequency of changes (avoid adhesive damage with frequent changes)`,
      keyTerms: [
        { term: 'exudate', definition: 'Fluid that drains from wound; amount affects dressing selection' },
        { term: 'hydrocolloid', definition: 'Occlusive dressing that forms gel with exudate; good for light drainage' },
        { term: 'alginate', definition: 'Seaweed-derived highly absorbent fiber for heavy exudate; requires moist wound to activate' },
        { term: 'hydrogel', definition: 'Water-based dressing that adds moisture to dry wounds' },
        { term: 'maceration', definition: 'Softening and breakdown of skin from excessive moisture exposure' },
        { term: 'strikethrough', definition: 'When drainage soaks through dressing; indicates need for change' },
        { term: 'secondary dressing', definition: 'Outer dressing that holds primary dressing in place' },
      ],
      analogies: [
        'Dressing selection is like choosing clothes for the weather - you need to match the dressing to the "weather" (wound condition).',
        'An alginate is like a super sponge - it absorbs many times its weight in fluid.',
        'Hydrogels are like adding water to a dry plant - they rehydrate dry wounds.',
      ],
      clinicalNotes: 'The goal of moist wound healing is to maintain an environment that is "moist but not wet." This means the wound bed should be moist, but the surrounding skin should be protected from maceration.',
      patientCounselingPoints: [
        'The right dressing helps wounds heal faster and with less pain.',
        'Change dressings when they\'re soaked through or loose.',
        'Don\'t let tape stay on so long it damages skin.',
        'Red, painful skin under tape could mean adhesive allergy.',
        'Write down when you changed the dressing so you know when it\'s due again.',
      ],
    },

    3: {
      level: 3,
      summary: 'Evidence-based dressing selection uses the TIME framework to match dressing properties to wound characteristics. Categories include films, foams, hydrocolloids, alginates, hydrogels, antimicrobials, gauzes, and composites.',
      explanation: `## Evidence-Based Dressing Selection

### Dressing Properties and Mechanisms

**Absorption Capacity:**
| Dressing | Absorbency | Indications |
|----------|------------|-------------|
| **Film** | Minimal | Dry wounds, protective cover |
| **Hydrogel** | Minimal (adds moisture) | Dry, necrotic wounds |
| **Hydrocolloid** | Light to moderate | Low to moderate exudate |
| **Foam** | Moderate to high | Moderate to heavy exudate |
| **Alginate/Hydrofiber** | Very high | Heavy exudate, cavity wounds |
| **Gauze** | Variable | Most wounds when appropriate |

**Moisture Vapor Transmission Rate (MVTR):**
- **Occlusive (MVTR <200 g/m²/24h):** Hydrocolloids, some foams
- **Semi-permeable (MVTR 200-1000):** Films, some foams
- **Permeable (MVTR >1000):** Gauze, some alginates

**Adhesive Properties:**
- **Acrylic adhesives:** Standard, secure
- **Silicone adhesives:** Gentle, less trauma on removal
- **Hydrocolloid adhesives:** Secure, can leave residue

**Conformability (Ability to fit contours):**
- **High:** Foams, hydrogels, alginates
- **Medium:** Hydrocolloids, gauze
- **Low:** Films (unless highly elastic)

### Detailed Product Categories

**1. Transparent Films:**
- **Mechanism:** Semi-permeable membrane, allows oxygen exchange
- **Indications:**
  - Superficial partial-thickness wounds
  - IV sites, catheter sites
  - Primary dressing for dry superficial wounds
  - Secondary dressing over alginates, gauze
- **Contraindications:**
  - Heavy exudate (fluid buildup)
  - Infected wounds
- **Application pearls:**
  - Leave 1-2 cm border on intact skin
  - Smooth from center outward to prevent wrinkles
  - Can remain in place up to 7 days if intact

**2. Foam Dressings:**
- **Structure:** Polyurethane foam, often with hydrophilic properties
- **Indications:**
  - Moderate to heavy exudate
  - Granulating wounds
  - Pressure ulcers (especially with padding needs)
  - Cavity wounds (filling but not packing)
- **Types:**
  - **Adhesive border:** Self-contained, easy to apply
  - **Non-adhesive:** Requires secondary dressing
  - **Antimicrobial (silver, PHMB):** For colonized wounds
- **Change frequency:** 2-3 days, or when strikethrough

**3. Hydrocolloids:**
- **Composition:** Carboxymethylcellulose, gelatin, pectin
- **Mechanism:** Occlusive, absorbs exudate into gel matrix
- **Appearance changes:**
  - Yellow-brown gel formation is NORMAL
  - Bubbles are normal (not infection)
  - Odor when removed is normal (not infection)
- **Indications:**
  - Pressure ulcers Stage 2-3
  - Light to moderate exudate
  - Autolytic debridement
  - Superficial wounds
- **Contraindications:**
  - Heavy exudate
  - Infected wounds (anaerobic risk)
  - Deep cavities
- **Change frequency:** 3-7 days
- **Caution:** Can macerate periwound if exudate exceeds capacity

**4. Alginates and Hydrofibers:**
- **Alginate source:** Calcium alginate from brown seaweed
- **Hydrofiber:** Sodium carboxymethylcellulose (e.g., Aquacel)
- **Mechanism:** Ion exchange (calcium for sodium) forms gel
- **Indications:**
  - Heavy exudate
  - Cavity wound packing
  - Wounds with bleeding (hemostatic properties)
- **Contraindications:**
  - Dry wounds (must moisten first)
  - Minimal exudate
- **Application:**
  - Gently pack into wound (not too tight)
  - Leave "tail" out for easy removal
  - Cover with secondary dressing
- **Removal:**
  - Gently pull on tail
  - If adhered, moisten with saline first
- **Change frequency:** Daily or when saturated

**5. Hydrogels:**
- **Composition:** 70-90% water, polymer matrix
- **Indications:**
  - Dry wounds
  - Necrotic wounds (eschar, slough)
  - Partial-thickness wounds
  - Painful wounds (soothing, cooling)
- **Contraindications:**
  - Heavy exudate
  - Cavity wounds without adequate packing
- **Types:**
  - **Amorphous gel:** Applied directly, covered with secondary
  - **Sheet hydrogel:** Easier to apply
- **Change frequency:** Daily (dries out)

**6. Antimicrobial Dressings:**

| Agent | Products | Spectrum | Duration |
|-------|----------|----------|----------|
| **Silver** | Acticoat, Aquacel Ag | Broad | 2 weeks max |
| **Iodine** | Iodosorb, Cadexomer | Broad + slough | 2 weeks max |
| **PHMB** | Kerlix AMD | Broad | 2-4 weeks |
| **Medical Honey** | Medihoney | Broad (biofilm) | Long-term OK |
| **DACC** | Sorbact | Physical binding | Long-term OK |

**Silver considerations:**
- Forms: Nanocrystalline (most effective), ionic
- Cytotoxicity: Some fibroblast toxicity, limit to 2 weeks
- Inactivation: Salt, saline inactivates silver
- Resistance: Documented but uncommon

**Iodine considerations:**
- Cadexomer iodine: Sustained release, desloughs
- Contraindications: Iodine allergy, thyroid disease, pregnancy
- Inactivation: Silver dressings (separate by 12 hours)

**Medical honey:**
- Active: MGO (methylglyoxal)
- Benefits: Autolytic debridement + antimicrobial
- Can be used long-term
- Contraindicated: Honey allergy

**7. Gauze Products:**

**Wet-to-Moist Technique:**
- Moisten gauze with saline
- Wring out (damp, not dripping)
- Pack lightly into wound
- Cover with dry secondary
- Removes when mostly dry (non-adherent)
- Promotes autolytic debridement

**Wet-to-Dry:**
- Moisten gauze, allow to dry completely
- Removal debrides (painful, non-selective)
- Use only when rapid debridement needed

**Impregnated Gauzes:**
- **Petroleum (Xeroform):** Mildly adherent, non-occlusive
- **Saline (normal saline gauze):** Moistening agent
- **Antimicrobial (iodofom, PHMB):** Infected wounds

### Specialty Dressings

**Negative Pressure Wound Therapy (NPWT / VAC):**
- **Mechanism:** Vacuum draws out fluid, brings edges together
- **Indications:**
  - Large, complex wounds
  - Wounds with cavitation
  - Diabetic foot ulcers
  - Surgical wounds with dehiscence
- **Contraindications:**
  - Untreated osteomyelitis
  - Malignancy in wound
  - Fistula to body cavity
- **Settings:** Typically -75 to -125 mmHg continuous

**Contact Layers:**
- **Purpose:** Protect wound bed from trauma
- **Examples:** Mepitel, Adaptic, N-terface
- **Use:** Between wound bed and secondary dressing
- **Change frequency:** Same as secondary dressing (up to 7 days)

**Compression Wraps:**
- **Indications:** Venous ulcers, edema
- **Types:**
  - **Multi-layer:** Profore, Coban 2 (gold standard)
  - **Short-stretch:** Comprilan
  - **Elastic vs. inelastic:** Different mechanisms

### Dressing Change Frequency Evidence

**Clinical Guidelines:**
- **Dry wounds:** Every 3-7 days (disruption delays healing)
- **Minimally draining:** Every 2-3 days
- **Moderately draining:** Every 1-2 days
- **Heavily draining:** Daily or BID

**Principles:**
- Less frequent changes = less disruption = better healing
- But must manage exudate (maceration prevention)
- Balance between protection and assessment`,
      keyTerms: [
        { term: 'MVTR', definition: 'Moisture vapor transmission rate; measure of dressing breathability' },
        { term: 'hydrofiber', definition: 'Sodium carboxymethylcellulose dressing; turns to gel with exudate (e.g., Aquacel)' },
        { term: 'wet-to-moist', definition: 'Dressing technique: damp gauze applied to wound, non-adherent when removed' },
        { term: 'contact layer', definition: 'Non-adherent dressing placed directly on wound to protect from trauma' },
        { term: 'compression therapy', definition: 'External pressure applied to limb to improve venous return; essential for venous ulcers' },
        { term: 'autolytic debridement', definition: 'Self-dissolution of necrotic tissue using body\'s enzymes under moist dressings' },
      ],
      clinicalNotes: `Dressing Selection Algorithm:

1. Assess exudate amount → Determines absorbency needed
2. Assess tissue type → Determines moisture balance needed
3. Assess periwound skin → Protect from maceration
4. Assess for infection → Consider antimicrobial
5. Reassess at each dressing change

Clinical Pearls:
- Dry wounds need moisture added (hydrogel, hydrocolloid)
- Wet wounds need absorption (foam, alginate)
- Moderate exudate needs balance (foam, hydrocolloid)
- Infected wounds need antimicrobial + debridement
- Change dressing when strikethrough or periwound maceration`,
    },

    4: {
      level: 4,
      summary: 'Advanced dressing selection integrates wound pathophysiology, exudate composition analysis, and evidence-based protocols. Dressing categories include films, foams, hydrocolloids, alginates, hydrogels, antimicrobials, collagens, and combination products.',
      explanation: `## Advanced Dressing Selection and Wound Management

### Exudate Analysis and Management

**Exudate Composition:**
- **Normal:** Water, electrolytes, proteins, inflammatory cells, growth factors
- **Increased proteases (MMPs):** Chronic wounds, degrades growth factors
- **Decreased growth factors:** Stalled healing
- **Bacterial products:** Pus indicates infection

**Protein Content Considerations:**
- **High protein exudate:** Can clog dressings, reduces effectiveness
- **Fibrin:** Can cause dressing adherence
- **Approach:** Dressings with high absorptive capacity, non-adherent contact layers

### Advanced Dressing Categories

**Collagen Dressings:**
- **Mechanism:** Provide collagen matrix, mimic ECM
- **Types:**
  - Bovine collagen (Fibracol, Puracol)
  - Marine collagen (SeaSorb)
- **Indications:**
  - Non-advancing wounds
  - Wounds with high protease levels
  - Partial-thickness wounds
  - Pressure ulcers, diabetic foot ulcers
- **Mechanism:**
  - Binds and inactivates excess MMPs
  - Provides scaffold for cell migration
  - Stimulates angiogenesis
- **Contraindications:** Third-degree burns, active infection
- **Frequency:** Every 3-7 days

**Contact Layer Dressings:**
- **Soft silicone (Mepitel, Mepilex Border):**
  - Minimizes pain and trauma on removal
  - Can remain in place for up to 7 days
  - Suitable for fragile skin, elderly
- **Non-adherent meshes (Adaptic, Xeroform):**
  - Prevents adherence to wound bed
  - Allows exudate to pass through to secondary dressing
- **Indications:**
  - Fragile granulation tissue
  - Painful wounds
  - Patients requiring frequent dressing changes
  - Elderly with fragile skin

**Composite Dressings:**
- **Definition:** Combination products
- **Examples:**
  - Foam with silver (Mepilex Ag)
  - Hydrofiber with silver (Aquacel Ag)
  - Alginate with honey (Medihoney Calcium Alginate)
- **Benefits:** Multiple functions in one product

**Odor-Absorbing Dressings:**
- **Activated charcoal (Carboflex, Carbonet):**
  - Adsorbs odor molecules
  - Used for malodorous wounds
  - Typically combined with other dressings
- **Indications:**
  - Fungating tumors
  - Infected wounds with odor
  - Patient distress from odor

**Exudate Management Dressings:**
- **High-absorbency foam:** For very heavy exudate
- **Super-absorbent polymers:** Lock away exudate
- **Hydrofiber (Aquacel):** Converts to gel, vertical wicking
- **Hydrocolloid particles:** Absorb and gel

### Disease-Specific Dressing Selection

**Diabetic Foot Ulcers:**
- **Primary considerations:**
  - Offloading (most important)
  - Infection control
  - Moisture balance
  - Protection
- **Recommended:**
  - Non-adherent, non-cytotoxic
  - Antimicrobial if colonized/infected
  - Absorbent if moderate exudate
  - Products: Mepilex (flexible, antimicrobial options), Aquacel Ag
- **Avoid:** Cytotoxic agents on healthy granulation

**Venous Leg Ulcers:**
- **Primary considerations:**
  - Compression essential (multi-layer preferred)
  - Edema control
  - Periwound skin protection
  - Exudate management (often heavy)
- **Recommended:**
  - High-absorbency primary dressing
  - Non-adherent for fragile peri-wound skin
  - Compression system (Profore, Coban 2)
  - Products: Alginates, hydrofibers under compression

**Pressure Ulcers:**
- **Stage 2:** Hydrocolloid, thin foam, transparent film
- **Stage 3:** Alginate, foam, hydrocolloid
- **Stage 4:** Alginate packing, foam, antimicrobial
- **Suspected deep tissue injury:** protective, offload, monitor
- **Unstageable:** Debride, then treat per stage

**Arterial Ulcers:**
- **Primary considerations:**
  - Revascularization if needed
  - Protection from trauma
  - Moisture balance (often dry)
  - Avoid compression
- **Recommended:**
  - Non-adherent dressings
  - Moisture-retentive (hydrogel, hydrocolloid)
  - Protection from trauma
  - Products: Hydrogel, hydrocolloid, foam

**Burns:**
- **Superficial (1st degree):** Moisturizer, film, hydrogel
- **Superficial partial (2nd degree):** Hydrocolloid, foam, silicone
- **Deep partial (2nd degree):** Silver dressings, antimicrobial
- **Full thickness (3rd degree):** Surgical excision + grafting
- **Donor sites:** Films, alginates, silicones

### Evidence-Based Protocols

**Diabetic Foot Ulcer Treatment Algorithm:**
1. **Debridement:** Sharp/surgical, weekly
2. **Offloading:** TCC (gold standard), iCAM boot
3. **Infection control:** Culture if suspected, antibiotics as indicated
4. **Moisture balance:** Dressing based on exudate
5. **Adjunctive:** Consider NPWT, growth factors, hyperbaric oxygen
6. **Revascularization:** If ischemic

**Venous Ulcer Treatment Protocol:**
1. **Compression:** Multi-layer compression system
2. **Elevation:** When supine
3. **Dressing:** Based on exudate (alginate/hydrofiber if heavy)
4. **Debridement:** If slough/necrotic tissue
5. **Treat infection:** If present (culture-guided)
6. **Prevention:** Compression stockings after healing

**Pressure Ulcer Prevention and Treatment:**
- **Prevention:**
  - Turn/reposition every 2 hours
  - Pressure redistribution surface
  - Skin protection
  - Nutrition optimization
- **Treatment:**
  - Offload/relieve pressure
  - Debride if necrotic
  - Dressing based on stage/exudate
  - Treat infection if present

### Special Populations and Considerations

**Elderly Patients:**
- **Skin considerations:**
  - Fragile skin, easy tearing
  - Adhesive damage
  - Reduced healing capacity
- **Dressing selection:**
  - Silicone adhesives (gentler)
  - Non-adherent contact layers
  - Less frequent changes
  - Avoid strong adhesives

**Pediatric Patients:**
- **Considerations:**
  - Smaller surface area
  - Fragile skin in infants
  - Removal trauma
  - Parent/caregiver education
- **Dressing selection:**
  - Silicone dressings
  - Easy to apply/remove
  - Child-friendly designs
  - Consider sedation if needed

**Patients with Adhesive Allergy:**
- **Options:**
  - Silicone adhesives
  - Non-adherent with gauze wraps
  - Hypoallergenic tapes
  - Elastic netting ( Surginet, Spandage)

**Cost Considerations:**
- **More expensive ≠ better**
- **Cost-effectiveness includes:**
  - Dressing cost
  - Change frequency
  - Nursing time
  - Healing outcomes
- **Example:** More expensive dressing changed weekly may be cheaper than cheap dressing changed daily

### Dressing Complications

**Maceration:**
- **Appearance:** White, boggy, wrinkled peri-wound skin
- **Causes:** Excessive exudate, occlusive dressing on wet wound
- **Prevention:** Absorbent dressing, change when saturated, skin protectants

**Allergic Contact Dermatitis:**
- **Appearance:** Red, itchy, may have vesicles
- **Causes:** Adhesive, dressing components, preservatives
- **Management:** Switch dressing type, patch testing if recurrent

**Periwound Dermatitis:**
- **Causes:** Adhesives, moisture, friction
- **Management:** Barrier films, silicone dressings, less frequent changes

**Drying/Desiccation:**
- **Causes:** Inadequate moisture
- **Management:** Hydrogel, hydrocolloid, occlusive dressing

**Embedment (retained dressing pieces):**
- **Risk with:** Gauze packing (if packed too tightly), some alginates
- **Prevention:** Pack loosely, document packing amount, ensure full removal`,
      keyTerms: [
        { term: 'MMP', definition: 'Matrix metalloproteinases; enzymes that degrade ECM components; elevated in chronic wounds' },
        { term: 'TCC', definition: 'Total contact cast; gold standard offloading for diabetic foot ulcers' },
        { term: 'multi-layer compression', definition: 'Compression system with multiple layers (cotton, compression, cohesive) for venous ulcers' },
        { term: 'activated charcoal', definition: 'Carbon-treated material that adsorbs odor molecules; used for malodorous wounds' },
        { term: 'contact dermatitis', definition: 'Inflammatory skin reaction to contact with allergen or irritant' },
        { term: 'offloading', definition: 'Redistribution of pressure away from wound; critical for diabetic foot ulcer healing' },
      ],
      clinicalNotes: `Dressing Selection Decision Tree:

1. Exudate:
   - Dry/necrotic → Hydrogel, hydrocolloid (add moisture)
   - Minimal → Hydrocolloid, thin foam
   - Moderate → Foam, hydrocolloid
   - Heavy → Alginate, hydrofiber, super-absorbent

2. Tissue:
   - Necrotic → Debride, autolytic (hydrogel/hydrocolloid)
   - Slough → Hydrogel, enzymatic
   - Granulation → Maintain moisture (foam, hydrocolloid)
   - Epithelializing → Protect (film, thin hydrocolloid)

3. Infection:
   - Colonized → Consider antimicrobial
   - Infected → Antimicrobial + systemic antibiotics

4. Periwound:
   - Macerated → More absorbent dressing
   - Dermatitis → Change adhesive type, barrier film

5. Pain:
   - Painful → Non-adherent, silicone, hydrogel (soothing)

6. Frequency:
   - Less frequent changes preferred (minimize disruption)
   - But must control exudate to prevent maceration`,
    },

    5: {
      level: 5,
      summary: 'Contemporary wound dressing selection integrates molecular wound analysis, advanced biomaterials, evidence-based protocols, and cost-effectiveness considerations to optimize healing outcomes across diverse wound etiologies.',
      explanation: `## State-of-the-Art Dressing Selection and Advanced Wound Care

### Molecular-Based Dressing Selection

**Exudate Analysis:**
- **Protease Activity:**
  - Elevated MMP-9: Collagen dressings to bind excess proteases
  - MMP:TIMP ratio >10:1 suggests chronic wound
  - Tests: Point-of-care MMP tests (WoundChek)

- **Growth Factor Analysis:**
  - PDGF deficiency: Consider becaplermin (off-label use declining)
  - VEGF deficiency: Angiogenesis-promoting dressings
  - Tests: Wound fluid analysis (research settings)

- **pH Monitoring:**
  - Alkaline wound pH (>7.4) suggests infection/biofilm
  - Acidic pH (5.5-6.5) promotes healing
  - pH-monitoring dressings: WoundSense, Medline

### Advanced Biomaterials and Dressings

**Nanotechnology-Based Dressings:**
- **Nanocrystalline silver:** Most effective silver formulation
- **Nanofiber dressings:** ECM-mimetic structure, high surface area
- **Silver-coated textiles:** Antimicrobial barriers

**Biological Dressings:**
- **Amniotic membrane products:**
  - dHACM (dehydrated human amnion/chorion membrane)
  - Products: Epifix, Grafix, Biovance
  - Contains: Growth factors, cytokines, ECM components
  - Indications: Diabetic foot ulcers, chronic wounds
  - Evidence: Improved healing in diabetic ulcers

- **Collagen dressings:**
  - Bovine, porcine, marine sources
  - Forms scaffold for healing
  - Binds and inactivates MMPs
  - Products: Fibracol, Puracol, Promogran

- **Cellular products:**
  - Apligraf: Bilayer living skin equivalent
  - Dermagraft: Fibroblast-seeded scaffold
  - Evidence: Beneficial for diabetic ulcers after standard therapy fails

**Regenerative Dressings:**
- **Extracellular matrix (ECM) dressings:**
  - Porcine small intestine submucosa (Oasis)
  - Bovine collagen (PriMatrix)
  - Provides scaffold for cell migration
  - Indications: Chronic wounds, DFUs, VLUs

**Smart Dressings:**
- **pH-sensing:** Color change with pH shift
- **Temperature-sensing:** Monitors for infection
- **Moisture-sensing:** Indicates saturation
- **Bacteria-sensing:** Detects bacterial load

### Evidence-Based Protocols and Guidelines

**Diabetic Foot Ulcer - International Working Group (IWGDF) 2023:**
1. **Offloading:** Non-negotiable (TCC gold standard)
2. **Debridement:** Weekly sharp debridement
3. **Infection control:** Culture-guided antibiotics
4. **Dressing:** Moist wound healing, based on exudate
5. **Revascularization:** If ischemic (ABI <0.8)
6. **Adjunctive:** Consider NPWT for complex wounds

**Venous Ulcer - Compression Essential:**
- **Gold standard:** Multi-layer compression system
- **Evidence:** Compression heals 50-60% at 12 weeks
- **Options:**
  - Multi-layer (Profore, Coban 2): Highest effectiveness
  - Short-stretch (Comprilan): Adjustable
  - Long-stretch: Not recommended as monotherapy

**Pressure Ulcer - NPIAP Guidelines:**
- **Prevention:** Turning schedule, surface selection
- **Treatment:**
  - Stage 2: Hydrocolloid, foam, film
  - Stage 3-4: Alginate, foam, antimicrobial as needed
  - Device-related: Remove/relieve pressure

**Surgical Wounds:**
- **Closed primarily:** Dry sterile dressing for 24-48 hours
- **Dehisced:** NPWT, moist wound healing
- **Prophylactic dressings:** Evidence for incisional NPWT in high-risk wounds

### Negative Pressure Wound Therapy (NPWT) Updates

**Indications (Strong Evidence):**
- Complex surgical wounds
- Traumatic wounds with cavitation
- Diabetic foot ulcers
- Open abdomen
- Sternotomy wounds

**Contraindications:**
- Untreated osteomyelitis
- Malignancy in wound
- Fistula to body cavity
- Untreated coagulopathy

**Settings:**
- Standard: -75 to -125 mmHg continuous
- High: -125 to -175 mmHg for difficult wounds
- Instillation (NPWTi-d): For infected wounds
  - Dwell time: 10-20 minutes
  - Cycle: Every 2-4 hours
  - Solutions: Saline, PHMB, Dakin's

**Complication Prevention:**
- Protect periwound skin (drape, barrier)
- Monitor for pain (may indicate retention)
- Check for bleeding (especially on anticoagulation)
- Retained foam: Ensure complete removal

### Hyperbaric Oxygen Therapy (HBOT)

**Mechanism:**
- Increases dissolved oxygen in plasma
- Promotes angiogenesis
- Enhances fibroblast function
- Antimicrobial effect (especially anaerobes)

**Evidence-Based Indications:**
- **Strongest evidence:** Diabetic foot ulcers (Wagner Grade 3+)
- **Possible benefit:**
  - Late effects of radiation injury
  - Chronic refractory osteomyelitis
  - Compromised skin grafts/flaps

**Protocol:**
- Typical: 40 treatments (5 days/week for 8 weeks)
- Pressure: 2.0-2.5 ATA
- Duration: 90-120 minutes per treatment

**Contraindications:**
- Untreated pneumothorax
- Certain chemotherapy agents
- Uncontrolled asthma
- Claustrophobia (relative)

### Electrical Stimulation

**Mechanism:** Endogenous wound electric fields guide cell migration

**Evidence:**
- Moderate evidence for pressure ulcers
- Some evidence for venous ulcers
- Limited evidence for diabetic ulcers

**Types:**
- **High-voltage pulsed current (HVPC):** Most studied
- **Low-intensity direct current (LIDC):** Limited availability
- **Microcurrent:** Emerging evidence

**Parameters:**
- Polarity: Initially cathodal, alternates
- Frequency: 80-120 pps
- Duration: 30-60 minutes daily

### Quality of Life and Patient-Centered Outcomes

**Pain Management:**
- **At dressing change:** Pre-emptive analgesia
- **Dressing selection:** Non-adherent for fragile wounds
- **Frequency:** Minimize changes when possible

**Odor Management:**
- **Activated charcoal dressings:** For malodorous wounds
- **Metronidazole gel:** Anaerobic bacteria
- **Honey:** Reduces odor

**Exudate Management:**
- **Patient priorities:**
  - No strike-through on clothing
  - No leakage
  - Minimal dressing changes
- **Solutions:**
  - High-absorbency dressings
  - Absorptive pads
  - Compression for venous ulcers

**Cost-Effectiveness Analysis:**
- **More expensive dressings may be cost-effective if:**
  - Fewer dressing changes needed
  - Faster healing
  - Less nursing time
  - Fewer complications

- **Example:** Alginate changed daily vs. hydrofiber changed every 3 days
  - Initial cost higher for hydrofiber
  - But overall cost may be lower

### Emerging Therapies

**Cold Atmospheric Plasma:**
- Antimicrobial without thermal damage
- Promotes wound healing
- FDA status: Limited availability in US

**Ozone Therapy:**
- Evidence: Limited and conflicting
- Considered experimental

**Low-Level Laser Therapy (Photobiomodulation):**
- Mechanism: ATP stimulation, angiogenesis
- Evidence: Mixed, some positive studies
- FDA-cleared devices available

**Keratinocyte Dressings:**
- Cultured epithelial autografts
- Expensive, limited availability
- Used for extensive burns, epidermolysis bullosa

### Clinical Decision Support

**Wound Imaging and Documentation:**
- Digital photography with measurement
- AI-assisted wound assessment
- Telehealth for remote consultation

**Predictive Analytics:**
- Healing probability calculators
- Amputation risk prediction
- Treatment response forecasting

**Electronic Health Record Integration:**
- Standardized terminology
- Automated reminders
- Order sets for evidence-based care

### Guidelines Summary

**Strong Recommendations:**
1. **Moist wound healing** over dry dressings for most wounds
2. **Compression** for venous ulcers (multilayer preferred)
3. **Offloading** for diabetic foot ulcers (TCC gold standard)
4. **Debridement** for chronic wounds to restart healing cascade
5. **Antimicrobial dressings** for colonized/infected wounds (limit to 2 weeks)

**Weak Recommendations (Consider):**
1. **NPWT** for complex wounds
2. **HBOT** for diabetic foot ulcers
3. **Growth factor therapy** (limited by cost/access)
4. **Cellular products** after standard therapy fails

**Practice Changing Insights:**
- **Biofilm is now recognized as a major barrier**
  - Requires serial debridement (every 1-2 weeks)
  - Combine with topical antimicrobials
- **Dressings can be active, not just passive**
  - Collagen binds MMPs
  - Antimicrobials control bioburden
  - Growth factors may be supplemented
- **Patient-centered outcomes matter**
  - Pain at dressing change
  - Odor, exudate management
  - Frequency of changes`,
      keyTerms: [
        { term: 'MMP-9', definition: 'Matrix metalloproteinase-9; elevated in chronic wounds and degrades growth factors' },
        { term: 'TCC', definition: 'Total contact cast; gold standard offloading for diabetic foot ulcers' },
        { term: 'dHACM', definition: 'Dehydrated human amnion/chorion membrane; placental tissue product with growth factors' },
        { term: 'HBOT', definition: 'Hyperbaric oxygen therapy; high-pressure oxygen treatment for hypoxic wounds' },
        { term: 'HVPC', definition: 'High-voltage pulsed current; most studied form of electrical stimulation for wounds' },
        { term: 'NPWTi-d', definition: 'Negative pressure wound therapy with instillation; cyclic NPWT with solution delivery and dwell' },
        { term: 'bioburden', definition: 'Level of microbial contamination in wound; <10^5 CFU/g generally tolerated' },
      ],
      clinicalNotes: `Evidence-Based Practice Pearls:

1. **Dressings are tools, not cures**
   - Address underlying cause (venous reflux, arterial insufficiency, pressure)
   - Dressings manage wound environment while healing occurs

2. **More expensive ≠ better**
   - Consider total cost: dressing + nursing time + frequency
   - Simple dressings may be most cost-effective for many wounds

3. **Reassess regularly**
   - Wounds change, dressing needs change
   - Weekly assessment minimum for chronic wounds
   - Change approach if not improving in 4 weeks

4. **Adjunctive therapies have specific roles**
   - NPWT: Complex wounds, cavitation, DFUs
   - HBOT: DFUs with ischemia (after revascularization)
   - Electrical stimulation: Consider for pressure ulcers

5. **Biofilm management**
   - Assume present in chronic wounds
   - Serial debridement + antimicrobial
   - Reassess every 2 weeks`,
    },
  },

  media: [
    {
      id: 'dressing-selection-algorithm',
      type: 'diagram',
      filename: 'dressing-selection-algorithm.svg',
      title: 'Dressing Selection Algorithm',
      description: 'Decision tree for selecting appropriate dressings based on wound characteristics',
    },
    {
      id: 'dressing-types-comparison',
      type: 'image',
      filename: 'dressing-types.jpg',
      title: 'Types of Wound Dressings',
      description: 'Visual comparison of different dressing categories',
    },
    {
      id: 'exudate-management',
      type: 'diagram',
      filename: 'exudate-management.svg',
      title: 'Exudate Management Guide',
      description: 'Selecting dressings based on exudate amount',
    },
  ],

  citations: [
    {
      id: 'time-framework-2022',
      type: 'article',
      title: 'TIME for wound bed preparation: A systematic review',
      source: 'Wounds International',
    },
    {
      id: 'iwgdf-2023',
      type: 'article',
      title: 'IWGDF Guidelines on diabetic foot ulcer management',
      authors: ['Bus, S.A.', 'Armstrong, D.G.'],
      source: 'Diabetes/Metabolism Research and Reviews',
    },
    {
      id: 'npiap-2021',
      type: 'article',
      title: 'National Pressure Ulcer Advisory Panel Guidelines',
      source: 'Journal of Wound, Ostomy, and Continence Nursing',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-basics', targetType: 'topic', relationship: 'related', label: 'Wound Basics' },
    { targetId: 'wound-care-assessment', targetType: 'topic', relationship: 'related', label: 'Wound Assessment' },
    { targetId: 'wound-care-cleaning', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['wound care', 'dressings', 'wound healing', 'wound management'],
    keywords: ['foam', 'alginate', 'hydrocolloid', 'hydrogel', 'silver', 'compression', 'TIME framework'],
    clinicalRelevance: 'high',
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

export default dressingSelectionContent;
