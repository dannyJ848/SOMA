/**
 * Burn Care
 *
 * Comprehensive content on burn classification, initial treatment,
 * and when to seek emergency care for burn injuries.
 */

import { EducationalContent } from '../types';

export const burnCare: EducationalContent = {
  id: 'wound-care-burn-care',
  type: 'topic',
  name: 'Burn Care',
  alternateNames: ['Burn Treatment', 'Burn Classification', 'Thermal Injury'],

  levels: {
    1: {
      level: 1,
      summary: 'Burns are injuries to the skin from heat, chemicals, or electricity. They are classified as first-degree (surface only), second-degree (blisters), or third-degree (deep, white or charred). Cool water helps, but serious burns need emergency care.',
      explanation: `Burns happen when something damages your skin. This can be from heat (fire, hot liquids, steam), chemicals, electricity, or too much sun. How bad a burn is depends on how deep it goes.

## Types of Burns by Depth

### First-Degree Burns (Superficial)
- Only the top layer of skin is damaged
- Skin is red and painful
- No blisters
- Like a mild sunburn
- Heals in 3-5 days
- Usually can be treated at home

**Examples:** Mild sunburn, briefly touching a hot pan

### Second-Degree Burns (Partial Thickness)
- Goes deeper into the skin
- Very painful
- Forms blisters
- Skin may be red, wet, and swollen
- Takes 2-3 weeks to heal
- May need medical care depending on size and location

**Examples:** Severe sunburn, hot liquid spills, touching something very hot

### Third-Degree Burns (Full Thickness)
- Goes through all layers of skin
- Skin may look white, brown, or black
- May not be painful (nerves are damaged)
- Does not heal on its own - needs skin grafts
- ALWAYS needs emergency medical care

**Examples:** Fire, prolonged contact with extreme heat, electrical burns

## What to Do for a Burn

### For Minor Burns (Small first-degree or small second-degree)

**DO:**
1. **Cool the burn** - Run cool (not cold) water over it for 10-20 minutes
2. **Remove jewelry** - Take off rings, watches, tight clothing near the burn before swelling starts
3. **Cover loosely** - Use a clean, dry bandage
4. **Take pain medicine** - Ibuprofen or acetaminophen can help
5. **Don't pop blisters** - They protect the healing skin underneath

**DON'T:**
- Don't use ice (can cause more damage)
- Don't put butter, oil, or toothpaste on burns
- Don't wrap tightly
- Don't break blisters

### For Serious Burns - CALL 911

**Signs of a serious burn:**
- Burns covering a large area (bigger than your palm)
- Burns on face, hands, feet, genitals, or over joints
- Third-degree burns (white, brown, or black skin)
- Burns that go all the way around an arm or leg
- Electrical burns or chemical burns
- Burns with difficulty breathing (may have inhaled hot air/smoke)

**While waiting for help:**
1. Make sure the person is away from the heat source
2. Don't remove clothing stuck to the burn
3. Cover with clean, dry cloth or sheet
4. Keep the person warm (burns cause heat loss)
5. If breathing problems, sit them up
6. Monitor for shock (pale skin, weakness, fast pulse)

## Burn Prevention

- Set water heater to 120°F (49°C) or below
- Turn pot handles toward the back of the stove
- Keep hot drinks away from table edges
- Use oven mitts
- Test bath water before getting in
- Keep children away from stoves, fireplaces, space heaters
- Have working smoke detectors
- Know fire escape routes

## Healing and After Care

**For minor burns:**
- Keep clean and dry
- Apply aloe vera gel or moisturizer
- Protect from sun (new skin sunburns easily)
- Watch for signs of infection

**Signs of infected burn:**
- Increased pain after the first day
- Redness spreading from the burn
- Fever
- Pus or bad-smelling drainage
- Not healing after 2-3 weeks`,
      keyTerms: [
        { term: 'first-degree burn', definition: 'A surface burn affecting only the top layer of skin; causes redness and pain but no blisters' },
        { term: 'second-degree burn', definition: 'A burn that goes deeper into the skin, causing blisters, pain, and redness' },
        { term: 'third-degree burn', definition: 'A deep burn through all skin layers; may look white or charred and usually requires skin grafting' },
        { term: 'skin graft', definition: 'A surgery where healthy skin from another body area is placed over a bad burn to help it heal' },
      ],
      analogies: [
        'Think of your skin like a layer cake. A first-degree burn just damages the frosting (top layer). A second-degree burn goes into the cake layers. A third-degree burn goes all the way through.',
        'Cooling a burn with water is like putting out a fire - the heat continues to damage tissue until you cool it down.',
        'Blisters act like a natural bandage - popping them removes this protection.',
      ],
      examples: [
        'Touching a hot oven rack for a split second leaves a red, painful mark without blisters - this is a first-degree burn you can treat at home.',
        'Spilling hot coffee on your arm creates painful blisters - this is a second-degree burn that may need medical evaluation.',
        'A firefighter rescued from a building has white, leathery patches on their arm that don\'t hurt - this is a third-degree burn requiring emergency care.',
      ],
    },

    2: {
      level: 2,
      summary: 'Burns are classified by depth (superficial, partial-thickness, full-thickness) and extent (TBSA). Initial treatment involves cooling, covering, and pain management, with emergency care indicated for extensive burns, special locations, or high-risk mechanisms.',
      explanation: `## Burn Classification

### By Depth

| Depth | Also Called | Skin Layers | Appearance | Pain | Healing |
|-------|-------------|-------------|------------|------|---------|
| Superficial | 1st degree | Epidermis only | Red, dry, no blisters | Painful | 3-5 days |
| Superficial partial | 2nd degree (superficial) | Epidermis + superficial dermis | Red, wet, blisters | Very painful | 2-3 weeks |
| Deep partial | 2nd degree (deep) | Epidermis + deep dermis | Pale, mottled, blisters | Less painful | 3-9 weeks, may scar |
| Full thickness | 3rd degree | Through dermis | White, brown, leathery | Painless | Won't heal without grafting |
| Deep (4th degree) | 4th degree | Into fat, muscle, bone | Charred, black | Painless | Requires surgery |

### By Extent (Total Body Surface Area)

**Rule of Nines (Adult):**
| Body Region | TBSA |
|-------------|------|
| Head and neck | 9% |
| Each arm | 9% |
| Chest (front) | 9% |
| Abdomen (front) | 9% |
| Upper back | 9% |
| Lower back | 9% |
| Each leg (front) | 9% |
| Each leg (back) | 9% |
| Genitals | 1% |

**Palm Method:**
- Patient's palm (including fingers) = approximately 1% TBSA
- Useful for scattered burns

**Pediatric Modifications:**
- Children have proportionally larger heads
- Lund and Browder chart more accurate for children

### By Mechanism

| Type | Common Causes | Considerations |
|------|---------------|----------------|
| Thermal | Fire, hot liquid, steam, contact | Most common |
| Scald | Hot liquids | Common in children |
| Electrical | Contact with electricity | Internal injuries, cardiac |
| Chemical | Acids, bases, solvents | Continue to damage until removed |
| Radiation | Sun, radiation therapy | Usually superficial |
| Friction | Road rash, rope burns | Often combined with abrasion |

## Initial Assessment and Treatment

### Stop the Burning Process

**Thermal Burns:**
- Remove from heat source
- Remove burning/hot clothing (unless stuck)
- Remove jewelry near burn

**Chemical Burns:**
- Remove contaminated clothing
- Brush off dry chemicals first
- Copious water irrigation (20+ minutes)
- Do NOT neutralize (causes heat)

**Electrical Burns:**
- Ensure scene safety first
- Do not touch victim if still in contact with source
- Look for entry and exit wounds

### Immediate Care

**Cooling:**
- Cool (not cold) running water for 10-20 minutes
- Effective up to 3 hours post-injury
- Do NOT use ice (vasoconstriction, frostbite)

**Covering:**
- Clean, dry, non-adherent dressing
- Plastic cling wrap (first aid)
- Do not apply creams initially

**Pain Management:**
- Oral analgesics (ibuprofen, acetaminophen)
- Keep covered (air exposure increases pain)
- Elevate if possible

### Assessment for Emergency Care

**Burns Requiring Emergency Evaluation:**

| Criteria | Details |
|----------|---------|
| Size | >10% TBSA (adult), >5% (child), >5% (elderly) |
| Depth | All full-thickness burns |
| Location | Face, hands, feet, genitals, perineum, major joints |
| Circumferential | Risk of compartment syndrome |
| Mechanism | Electrical, chemical, inhalation |
| Age | <5 years, >60 years |
| Comorbidities | Diabetes, immunocompromise |
| Associated trauma | Fractures, other injuries |
| Suspected abuse | Pattern burns, inconsistent history |

### Inhalation Injury

**Suspect if:**
- Fire in enclosed space
- Facial burns
- Singed nasal hairs or eyebrows
- Soot in mouth/nose
- Hoarse voice
- Wheezing or stridor
- Carbonaceous (black) sputum

**Action:**
- High-flow oxygen
- Early intubation may be needed
- Transport to burn center

## Outpatient Burn Management

### Wound Care

**Initial:**
- Gentle cleansing with mild soap and water
- Debridement of loose, dead skin
- Intact blisters: Leave or aspirate (controversial)
- Ruptured blisters: Debride loose skin

**Dressings:**
| Type | Indication |
|------|------------|
| Non-adherent + gauze | Standard care |
| Silver sulfadiazine | Larger burns, infection prevention |
| Bacitracin/mupirocin | Facial burns |
| Hydrocolloid | Small, superficial burns |
| Foam dressings | Moderate exudate |

**Change Frequency:**
- Once daily for most burns
- Twice daily with silver sulfadiazine
- PRN if soiled or saturated

### Follow-up

**Minor Burns:**
- 24-48 hour wound check
- Weekly until healed
- Sun protection education

**Moderate Burns:**
- Close follow-up (every 2-3 days)
- Watch for infection
- Refer if not healing in 2-3 weeks

### Complications to Monitor

| Complication | Signs |
|--------------|-------|
| Infection | Increased pain, erythema, purulent drainage |
| Deepening | Partial-thickness converting to full |
| Hypertrophic scarring | Raised, red scars (usually after deep partial) |
| Contracture | Tightening over joints |

## Special Burn Types

### Electrical Burns

**Unique Concerns:**
- Injury severity often exceeds visible burns
- Current travels through body (path dependent)
- Cardiac arrhythmias
- Muscle damage (rhabdomyolysis)
- Compartment syndrome
- Hidden internal injuries

**Management:**
- ECG monitoring
- Check for entry and exit wounds
- Assess for fractures (falls, muscle contraction)
- High fluid requirements

### Chemical Burns

**Key Points:**
- Remove contaminated clothing
- Copious irrigation (not neutralization)
- Duration: 20-60+ minutes depending on chemical
- Some chemicals have specific treatments (hydrofluoric acid → calcium gluconate)

### Sunburns

**Prevention:**
- SPF 30+ sunscreen, reapply every 2 hours
- Protective clothing
- Avoid peak sun (10am-4pm)

**Treatment:**
- Cool compresses
- Aloe vera, moisturizers
- NSAIDs for pain
- Hydration`,
      keyTerms: [
        { term: 'TBSA', definition: 'Total Body Surface Area; percentage of body affected by burn, used to guide treatment and fluid resuscitation' },
        { term: 'Rule of Nines', definition: 'Method to estimate burn TBSA by assigning body areas percentages that are multiples of 9' },
        { term: 'inhalation injury', definition: 'Injury to airways from breathing hot gases or smoke; major cause of death in fire victims' },
        { term: 'escharotomy', definition: 'Surgical incision through full-thickness burn to release constricting tissue and restore circulation' },
        { term: 'silver sulfadiazine', definition: 'Topical antimicrobial cream commonly used for burn wound care' },
      ],
      clinicalNotes: 'Burn depth can progress in the first 24-48 hours ("burn wound conversion"). What initially appears as partial-thickness may become full-thickness. Close follow-up is essential, and burns not showing epithelialization by 2-3 weeks should be referred for possible grafting.',
    },

    3: {
      level: 3,
      summary: 'Burn injury triggers complex local and systemic responses requiring systematic assessment of depth, extent, mechanism, and patient factors to guide resuscitation, wound management, and referral decisions based on established burn center criteria.',
      explanation: `## Burn Pathophysiology

### Local Response

**Jackson's Zones of Injury:**

| Zone | Description | Blood Flow | Fate |
|------|-------------|------------|------|
| Coagulation | Central, irreversible damage | None | Necrotic |
| Stasis | Decreased perfusion, salvageable | Compromised | May survive or die based on resuscitation |
| Hyperemia | Peripheral, vasodilation | Increased | Will recover |

**Zone of Stasis Preservation:**
- Adequate resuscitation
- Prevention of infection
- Optimal wound care
- Goal: Prevent progression to full-thickness

### Systemic Response

**Cardiovascular:**
- Increased capillary permeability
- Third-spacing of fluid
- Hypovolemia
- Decreased cardiac output initially
- Hyperdynamic phase after 24-48 hours

**Metabolic:**
- Hypermetabolism (up to 200% of normal)
- Protein catabolism
- Increased cortisol, catecholamines
- Insulin resistance
- Immunosuppression

**Inflammatory:**
- Release of inflammatory mediators
- Systemic inflammatory response (if >20% TBSA)
- Multi-organ dysfunction risk

## Advanced Assessment

### Burn Depth Determination

**Clinical Assessment:**
| Feature | Superficial Partial | Deep Partial | Full Thickness |
|---------|---------------------|--------------|----------------|
| Color | Pink/red | Mottled red/white | White, brown, black |
| Texture | Moist, blistered | Waxy, less blistered | Leathery, dry |
| Capillary refill | Brisk | Sluggish | Absent |
| Sensation | Intact, painful | Decreased | Absent |
| Hair follicles | Intact | May be damaged | Destroyed |

**Adjunctive Methods:**
- Laser Doppler imaging: Predicts healing time
- Indocyanine green angiography
- Serial examination (often needed)

### TBSA Calculation

**Lund and Browder Chart (more accurate):**
| Body Region | 0-1 yr | 1-4 yr | 5-9 yr | 10-14 yr | 15+ yr |
|-------------|--------|--------|--------|----------|--------|
| Head | 19% | 17% | 13% | 11% | 7% |
| Neck | 2% | 2% | 2% | 2% | 2% |
| Trunk (ant) | 13% | 13% | 13% | 13% | 13% |
| Trunk (post) | 13% | 13% | 13% | 13% | 13% |
| Buttock (each) | 2.5% | 2.5% | 2.5% | 2.5% | 2.5% |
| Genitalia | 1% | 1% | 1% | 1% | 1% |
| Upper arm (each) | 4% | 4% | 4% | 4% | 4% |
| Lower arm (each) | 3% | 3% | 3% | 3% | 3% |
| Hand (each) | 2.5% | 2.5% | 2.5% | 2.5% | 2.5% |
| Thigh (each) | 5.5% | 6.5% | 8% | 8.5% | 9.5% |
| Lower leg (each) | 5% | 5% | 5.5% | 6% | 7% |
| Foot (each) | 3.5% | 3.5% | 3.5% | 3.5% | 3.5% |

### Severity Classification (ABA)

**Minor Burns:**
- <10% TBSA partial-thickness (adult)
- <5% TBSA full-thickness (not involving special areas)
- No associated injuries, inhalation, or comorbidities

**Moderate Burns:**
- 10-20% TBSA partial-thickness (adult)
- <10% full-thickness (not involving special areas)
- May have associated injuries (managed)

**Major Burns:**
- >20% TBSA partial-thickness
- >10% full-thickness
- Any burn involving special areas
- Electrical or chemical burns
- Inhalation injury
- Significant comorbidities or associated trauma

## Fluid Resuscitation

### Parkland Formula (Modified Brooke)

**First 24 Hours:**
- Lactated Ringer's: 4 mL/kg/% TBSA burned
- Half given in first 8 hours (from time of burn)
- Half given in next 16 hours

**Example:**
- 70 kg patient with 30% TBSA burn
- Total = 4 × 70 × 30 = 8,400 mL first 24 hours
- First 8 hours: 4,200 mL (525 mL/hr)
- Next 16 hours: 4,200 mL (262 mL/hr)

### Resuscitation Endpoints

**Primary Target:**
- Urine output: 0.5-1.0 mL/kg/hr (adult), 1.0-1.5 mL/kg/hr (child)

**Additional Monitoring:**
- Heart rate
- Blood pressure (may be unreliable with burns)
- Mental status
- Base deficit, lactate
- Central venous pressure (major burns)

### Resuscitation Pitfalls

**Fluid Creep:**
- Over-resuscitation
- Increased edema, compartment syndrome risk
- Abdominal compartment syndrome
- Pulmonary edema

**Under-Resuscitation:**
- Inadequate organ perfusion
- Burn wound conversion
- Acute kidney injury

## Burn Center Referral Criteria (ABA)

**Refer to Burn Center:**
1. Partial-thickness >10% TBSA
2. Burns involving face, hands, feet, genitalia, perineum, major joints
3. Full-thickness burns
4. Electrical burns (including lightning)
5. Chemical burns
6. Inhalation injury
7. Burns with pre-existing conditions complicating management
8. Burns with associated trauma (if burn is greater risk)
9. Burn injury in children without qualified pediatric care
10. Patients requiring special social, emotional, or rehabilitation intervention

## Wound Management

### Debridement

**Types:**
- Mechanical: Wet-to-dry dressings, hydrotherapy
- Sharp: Surgical excision
- Enzymatic: Collagenase-based agents
- Autolytic: Hydrocolloid dressings

### Topical Antimicrobials

| Agent | Spectrum | Application | Notes |
|-------|----------|-------------|-------|
| Silver sulfadiazine 1% | Broad | 1-2x daily | Pseudoeschar, G6PD caution |
| Mafenide acetate | Gram-negative, Pseudomonas | 1-2x daily | Penetrates eschar, painful, carbonic anhydrase inhibitor |
| Silver nitrate 0.5% | Broad | Wet dressings | Stains, electrolyte imbalances |
| Bacitracin | Gram-positive | 2-3x daily | Face, small areas |
| Mupirocin | Gram-positive, MRSA | 2-3x daily | Nasal, small areas |
| Silver dressings | Broad | Per product | Multiple formulations |

### Surgical Management

**Early Excision and Grafting:**
- Standard for full-thickness burns
- Typically within first week
- Tangential or fascial excision
- Split-thickness skin graft (STSG)
- Reduces infection, improves outcomes

**Escharotomy:**
- Circumferential full-thickness burns
- Releases constricting eschar
- Prevents compartment syndrome, respiratory compromise
- No anesthesia needed (insensate eschar)

## Special Populations

### Pediatric Burns

**Differences:**
- Higher TBSA for head, lower for legs
- Greater surface area to mass ratio (more fluid loss, heat loss)
- Lower threshold for intubation
- Higher metabolic demands
- Suspect abuse with pattern burns, delay in presentation

**Fluid Resuscitation:**
- Weight-based calculations
- Higher per-kg requirements
- Monitor closely for over/under-resuscitation

### Elderly Burns

**Considerations:**
- Thinner skin (deeper injuries from same exposure)
- Decreased physiologic reserve
- Comorbidities affect outcomes
- Higher mortality rates
- Pre-injury medications (anticoagulants, etc.)

### Pregnancy

**Concerns:**
- Fetal monitoring for significant burns
- Increased fluid requirements
- Position considerations (avoid supine hypotension)
- Carbon monoxide toxicity affects fetus
- High-risk pregnancy management`,
      keyTerms: [
        { term: 'Jackson zones', definition: 'Concentric zones of tissue injury in burns: coagulation (dead), stasis (salvageable), and hyperemia (will heal)' },
        { term: 'Parkland formula', definition: 'Fluid resuscitation formula: 4 mL LR × kg × %TBSA, half in first 8 hours, half in next 16 hours' },
        { term: 'Lund and Browder chart', definition: 'Age-adjusted TBSA calculation accounting for pediatric body proportions' },
        { term: 'fluid creep', definition: 'Over-resuscitation in burn patients leading to edema and complications' },
        { term: 'tangential excision', definition: 'Sequential shaving of burned tissue until viable, bleeding dermis is reached' },
      ],
      clinicalNotes: 'Fluid resuscitation formulas are starting points - titrate to urine output. Over-resuscitation is increasingly recognized as harmful. In large burns, consider permissive under-resuscitation strategies and early colloid if needed. Early burn center consultation optimizes outcomes even for non-transferred patients.',
    },

    4: {
      level: 4,
      summary: 'Advanced burn management requires understanding of burn pathophysiology, critical care principles, surgical timing and techniques, infection prevention, and rehabilitation strategies within a multidisciplinary burn team framework.',
      explanation: `## Burn Pathophysiology: Detailed Mechanisms

### Inflammatory Cascade

**Immediate Response:**
- Mast cell degranulation
- Histamine, serotonin release
- Prostaglandin production
- Complement activation
- Cytokine release (IL-1, IL-6, TNF-α)

**Vascular Changes:**
- Endothelial gap junction disruption
- Increased permeability
- Protein extravasation
- Third-spacing of fluid
- Peak permeability: 8-12 hours
- Permeability normalizes: 18-24 hours

### Hypermetabolic Response

**Characteristics:**
- Begins within hours
- Peaks at 1-2 weeks
- Can persist for years after major burns
- Magnitude proportional to burn size

**Metabolic Effects:**

| Parameter | Change |
|-----------|--------|
| Resting energy expenditure | ↑ 100-200% |
| Oxygen consumption | ↑ 50-100% |
| Protein catabolism | Marked increase |
| Lipolysis | Increased |
| Gluconeogenesis | Increased |
| Core temperature set point | ↑ 1-2°C |

**Clinical Implications:**
- High caloric requirements
- Muscle wasting
- Impaired wound healing
- Immunosuppression
- Beta-blockade (propranolol) may help

### Immune Dysfunction

**Immunosuppression:**
- T-cell dysfunction
- Decreased Th1 response
- Increased Th2 response
- Macrophage dysfunction
- Neutrophil impairment
- Complement consumption

**Infection Susceptibility:**
- Wound colonization to infection
- Pneumonia (especially with inhalation injury)
- Line-related bloodstream infection
- UTI
- Sinusitis (with prolonged intubation)

## Critical Care Management

### Airway and Ventilation

**Inhalation Injury:**
- Upper airway: Thermal injury, edema
- Lower airway: Chemical injury from smoke particles
- Systemic: CO poisoning, cyanide poisoning

**Intubation Indications:**
- Stridor
- Significant facial/oropharyngeal edema
- Inability to handle secretions
- Altered mental status
- Large TBSA burns (anticipatory)

**Ventilator Management:**
- Lung-protective ventilation
- Accept permissive hypercapnia
- Bronchoscopy for secretions
- Consider HFOV, ECMO in severe cases

### Carbon Monoxide Poisoning

**Pathophysiology:**
- CO binds hemoglobin with 240x affinity of O2
- Left-shifts oxyhemoglobin dissociation curve
- Cellular hypoxia despite normal PaO2
- Cytochrome oxidase inhibition

**Diagnosis:**
- Co-oximetry (not pulse oximetry)
- COHb levels (>3-4% in non-smokers, >10% in smokers)

**Treatment:**
- 100% oxygen
- Half-life reduction: 4 hours (room air) → 1 hour (100% O2)
- Hyperbaric oxygen: Consider for COHb >25%, neurologic symptoms, pregnancy, cardiac ischemia

### Cyanide Poisoning

**Source:**
- Combustion of synthetic materials
- Occurs with CO poisoning

**Presentation:**
- Lactic acidosis despite adequate oxygenation
- High venous oxygen saturation

**Treatment:**
- Hydroxocobalamin (Cyanokit): 5-10 g IV
- Preferred over nitrite/thiosulfate (no MetHb formation)

### Fluid Management Refinement

**Modified Resuscitation:**
- Use estimated burn time, not hospital arrival
- Adjust based on urine output
- Consider albumin if >30% TBSA after 12 hours
- Diuretics ONLY for pulmonary edema (not to decrease edema)

**Monitoring:**
- Foley catheter (avoid suprapubic if perineal burns)
- Arterial line for large burns
- Central venous access
- Consider pulmonary artery catheter for complex cases

### Abdominal Compartment Syndrome

**Risk Factors:**
- Massive resuscitation
- Circumferential torso burns
- Large TBSA

**Monitoring:**
- Bladder pressure measurement
- Clinical signs: Tense abdomen, decreased urine output, ventilatory compromise

**Management:**
- Intra-abdominal pressure >20 mmHg with organ dysfunction: Consider decompression
- Escharotomy of abdominal wall
- Decompressive laparotomy

## Surgical Management

### Excision and Grafting

**Timing:**
- Early excision (within first week)
- Reduces mortality, length of stay, blood transfusion
- Typically operate days 1-5 post-burn

**Excision Types:**

| Type | Description | Use |
|------|-------------|-----|
| Tangential | Sequential shaving to viable tissue | Partial-thickness, preserves dermis |
| Fascial | Removal to fascia | Deep burns, faster, greater morbidity |
| Hydrosurgery | Water jet debridement | Precision debridement |

**Graft Types:**

| Type | Description | Use |
|------|-------------|-----|
| Split-thickness (STSG) | Epidermis + partial dermis | Primary coverage, donor site heals |
| Full-thickness (FTSG) | Epidermis + full dermis | Functional/aesthetic areas |
| Sheet graft | Unmeshed | Face, hands, aesthetic areas |
| Meshed graft | Expanded | Large areas, limited donor sites |

### Temporary Coverage

**Options:**
- Allograft (cadaver skin)
- Xenograft (porcine)
- Synthetic products (Biobrane, Integra)
- Negative pressure wound therapy

**Cultured Epidermal Autograft (CEA):**
- Small skin biopsy → laboratory expansion
- 3-4 weeks for adequate graft
- Fragile, limited dermal elements
- Option for massive burns with limited donor sites

### Reconstructive Surgery

**Timing:**
- Acute: Wound coverage
- Subacute: Contracture release, functional restoration
- Long-term: Aesthetic reconstruction

**Procedures:**
- Z-plasty for contractures
- Local/regional flaps
- Free tissue transfer
- Laser therapy for scars

## Burn Wound Infection

### Pathogenesis

**Phases:**
1. Colonization: Days 1-5
2. Critical colonization: Days 5-10
3. Invasive infection: Variable

**Common Pathogens:**
- Early: Gram-positive (S. aureus, Streptococcus)
- Later: Gram-negative (Pseudomonas, Acinetobacter)
- Fungi: Days 10+, especially with broad-spectrum antibiotics

### Diagnosis

**Burn Wound Infection Criteria:**
- Change in wound appearance
- Accelerated eschar separation
- Conversion of partial to full-thickness
- Discoloration (green = Pseudomonas)
- Invasion on biopsy (>10^5 organisms/g)

**Biopsy:**
- Quantitative culture
- Histopathology for tissue invasion

### Prevention

**Strategies:**
- Early excision
- Topical antimicrobials
- Aseptic wound care
- Hydrotherapy (debated)
- Infection control measures

**No Role:**
- Prophylactic systemic antibiotics (increase resistance, no benefit)

### Treatment

**Invasive Burn Wound Infection:**
- Surgical debridement
- Systemic antibiotics based on culture
- Consider antifungals if refractory

## Nutrition

### Requirements

**Caloric:**
- Multiple formulas (Curreri, Toronto, etc.)
- Typically 25-30 kcal/kg/day base + additional for burn
- Adjust based on metabolic monitoring (indirect calorimetry ideal)

**Protein:**
- 1.5-2 g/kg/day
- Higher in large burns

**Route:**
- Enteral preferred
- Start early (within 24 hours if possible)
- TPN if enteral not feasible (higher complication rate)

### Micronutrients

**Supplementation:**
- Vitamin C: 500-1000 mg/day
- Vitamin A: 5000-10000 IU/day
- Zinc: 220 mg/day
- Copper
- Selenium`,
      keyTerms: [
        { term: 'hypermetabolic response', definition: 'Post-burn state of markedly increased metabolic rate (up to 200% normal) with protein catabolism, lasting months to years' },
        { term: 'hydroxocobalamin', definition: 'Cyanide antidote (Cyanokit); preferred treatment for smoke inhalation-related cyanide poisoning' },
        { term: 'cultured epidermal autograft', definition: 'Laboratory-grown keratinocyte sheets from small patient skin biopsy; option for massive burns' },
        { term: 'split-thickness skin graft', definition: 'Graft containing epidermis and partial dermis, harvested with dermatome; donor site heals spontaneously' },
        { term: 'eschar', definition: 'Dead, denatured tissue in full-thickness burn; must be debrided for healing' },
      ],
      clinicalNotes: 'Early excision and grafting (within first week) is the standard of care for full-thickness burns and significantly improves outcomes. Burn wound infection is a clinical diagnosis supported by wound biopsy; surveillance cultures are not useful. Nutritional support with early enteral feeding is essential for wound healing and immune function.',
    },

    5: {
      level: 5,
      summary: 'Expert burn care integrates current evidence, emerging technologies, systems-based quality improvement, and long-term rehabilitation to optimize survival, functional outcomes, and quality of life for burn-injured patients.',
      explanation: `## Advanced Resuscitation Science

### Endpoint-Directed Resuscitation

**Beyond Urine Output:**
- Lactate clearance
- Base deficit normalization
- Mixed venous oxygen saturation
- Cardiac output monitoring
- Tissue perfusion assessment (NIRS, sublingual capnometry)

**Algorithmic Approaches:**
- Decision support systems
- Computerized fluid management
- Reduction in fluid creep

### Colloid Resuscitation

**Current Evidence:**
- Consider after 12-24 hours when permeability normalizes
- 5% albumin
- May reduce total fluid, edema
- No clear mortality benefit

**Fresh Frozen Plasma:**
- Some centers use for large burns
- Physiologic resuscitation fluid
- Studies ongoing

### Adjunctive Therapies

**Vitamin C (High-Dose):**
- Antioxidant, reduces edema
- Doses: 66 mg/kg/hr for first 24 hours
- Reduces fluid requirements in some studies
- Oxalate nephropathy risk

**Plasmapheresis:**
- Investigational for massive burns
- Removes inflammatory mediators

## Burn Center Operations

### Verified Burn Centers

**ABA Verification:**
- Volume requirements
- Staffing standards
- Quality metrics
- Outcomes reporting
- Specialized equipment and facilities

**Outcomes:**
- Verified centers have better risk-adjusted survival
- Improved functional outcomes
- Comprehensive rehabilitation

### Quality Metrics

**Process Measures:**
- Time to escharotomy
- Appropriate fluid resuscitation
- Burn wound sepsis rate
- DVT prophylaxis

**Outcome Measures:**
- Mortality (risk-adjusted)
- Length of stay
- Graft take rates
- Functional outcomes
- Return to work/school

### Burn Prevention

**Community Programs:**
- Smoke detector installation
- Safe sleep initiatives
- Scald prevention
- Water heater temperature campaigns
- Fire-safe cigarette legislation

**Cost-Effectiveness:**
- Prevention programs highly cost-effective
- Every dollar invested returns multiple in savings

## Emerging Technologies

### Wound Assessment

**Laser Doppler Imaging (LDI):**
- Assesses dermal perfusion
- Predicts healing within 3 weeks
- Guides early surgical intervention
- Reduces unnecessary surgery

**Multispectral Imaging:**
- Tissue oxygenation assessment
- Real-time wound monitoring

### Skin Substitutes

**Dermal Templates:**
- Integra: Bovine collagen + chondroitin sulfate
- Two-stage procedure
- Improved scar quality

**Bioengineered Products:**
- Alloderm, Matriderm
- Acellular dermal matrices
- Combined epidermal-dermal products

**Future Directions:**
- 3D bioprinting
- Stem cell-derived products
- Gene-modified cells

### Spray-On Skin

**ReCell:**
- Autologous cell harvesting
- Non-cultured keratinocytes and melanocytes
- Immediate application
- CE marked, FDA approved

### Fetal Wound Healing

**Scarless Repair:**
- Early fetal wounds heal without scars
- Reduced inflammation
- Different growth factor profiles
- TGF-β3 predominance

**Translation:**
- Anti-scarring therapies based on fetal healing
- Avotermin (TGF-β3) clinical trials
- Ongoing research

## Rehabilitation

### Acute Phase

**Goals:**
- Edema management
- Range of motion
- Positioning/splinting
- Early ambulation
- Pulmonary toilet

**Positioning:**
- Anti-deformity positions
- Neck extension (anterior neck burns)
- Shoulder abduction (axilla burns)
- Elbow extension
- Wrist extension, hand intrinsic plus

### Scar Management

**Pressure Therapy:**
- Custom garments
- 23 hours/day
- 12-18 months post-healing
- Reduces hypertrophic scarring

**Silicone:**
- Sheets or gel
- Mechanism: Hydration, occlusion
- Combined with pressure

**Massage:**
- Softens scars
- Patient/family participation
- Multiple times daily

### Reconstructive Timing

**Phases:**
1. Wound healing (0-6 months)
2. Scar maturation (6-18 months)
3. Reconstruction (typically after scar maturation)

**Exceptions:**
- Functional deficits (eyelid closure, lip competence)
- Severe contractures limiting function
- Growing children (serial releases)

## Psychosocial Aspects

### Psychological Impact

**Acute:**
- Pain, anxiety
- Acute stress disorder
- Delirium

**Long-term:**
- PTSD (30-40% of major burn survivors)
- Depression
- Body image issues
- Social reintegration challenges

### Support Services

**Burn Center Resources:**
- Psychologists
- Social workers
- Child life specialists
- Peer support programs (Phoenix Society)

**Community Reintegration:**
- School re-entry programs
- Vocational rehabilitation
- Recreational therapy
- Support groups

## Research Frontiers

### Genomics and Personalized Medicine

**Applications:**
- Predict hypermetabolic response
- Identify infection susceptibility
- Optimize pharmacotherapy
- Scar prediction

### Stem Cell Therapy

**Potential Uses:**
- Wound healing acceleration
- Scar modulation
- Regenerative approaches
- Clinical trials ongoing

### Immunomodulation

**Strategies:**
- Beta-blockade (propranolol)
- Oxandrolone (anabolic steroid)
- Growth hormone
- Insulin (glycemic control)
- Novel immunotherapies

### Organ Failure Prevention

**Multi-Organ Dysfunction:**
- Major cause of death in large burns
- Prevention through optimal resuscitation
- Early nutrition
- Infection prevention
- Ongoing research in MODS prevention

## Systems Issues

### Burn Care in Austere Environments

**Challenges:**
- Limited resources
- No verified burn centers
- Mass casualty scenarios
- Combat injuries

**Adaptations:**
- Simplified resuscitation
- Early transport
- Telemedicine support
- Essential medications and supplies

### Mass Casualty Incidents

**Triage:**
- Burns >60% TBSA in mass casualty: Expectant category
- Focus resources on salvageable patients
- Surge capacity planning

**Preparedness:**
- Regional burn networks
- Transfer agreements
- Resource sharing
- Training and exercises

### Cost and Value

**Burn Care Economics:**
- Costly ($50,000-$500,000+ per patient for major burns)
- Prevention highly cost-effective
- Rehabilitation essential for functional recovery
- Lost productivity significant

**Value-Based Care:**
- Outcomes measurement
- Cost-effectiveness analysis
- Quality improvement programs
- Survivor advocacy`,
      keyTerms: [
        { term: 'laser Doppler imaging', definition: 'Non-invasive assessment of dermal blood flow used to predict burn healing and guide surgical decisions' },
        { term: 'dermal template', definition: 'Scaffold product (e.g., Integra) providing matrix for dermal regeneration before epidermal grafting' },
        { term: 'ReCell', definition: 'Autologous cell harvesting device creating spray-on suspension of keratinocytes and melanocytes for burn coverage' },
        { term: 'Phoenix Society', definition: 'International peer support organization for burn survivors' },
        { term: 'Lund and Browder', definition: 'Age-adjusted body surface area chart providing more accurate TBSA estimation than Rule of Nines, especially in children' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Resuscitation is a process** - Formulas are starting points; titrate to endpoints. Fluid creep causes morbidity; permissive under-resuscitation may be appropriate.

2. **Early excision saves lives** - For full-thickness burns, operate within first week when possible. Delays increase infection, mortality, and length of stay.

3. **Burn depth evolves** - Reassess wounds frequently. "Indeterminate" burns may declare over 24-72 hours; LDI can help with early decisions.

4. **Nutrition is therapeutic** - Start enteral feeding within 24 hours. Inadequate nutrition impairs wound healing and immune function.

5. **Rehabilitation begins day one** - Positioning, splinting, and ROM from admission prevent contractures and improve functional outcomes.

6. **Scars are a chronic problem** - Compression therapy, silicone, and rehabilitation for 12-18 months minimum. Set appropriate expectations.

7. **Psychological care is essential** - PTSD affects 30-40% of major burn survivors. Screen and treat. Peer support is valuable.

8. **Prevention is the best treatment** - Community prevention programs are highly cost-effective and reduce burn burden.`,
    },
  },

  media: [
    {
      id: 'burn-depth-diagram',
      type: 'diagram',
      filename: 'burn-depth-classification.svg',
      title: 'Burn Depth Classification',
      description: 'Cross-sectional diagram showing burn depths from superficial to full-thickness',
    },
    {
      id: 'rule-of-nines',
      type: 'diagram',
      filename: 'rule-of-nines.svg',
      title: 'Rule of Nines',
      description: 'Body diagram showing TBSA percentages for burn extent estimation',
    },
  ],

  citations: [
    {
      id: 'aba-guidelines',
      type: 'article',
      title: 'American Burn Association Practice Guidelines',
      authors: ['American Burn Association'],
      source: 'Journal of Burn Care & Research',
    },
    {
      id: 'isbi-guidelines',
      type: 'article',
      title: 'ISBI Practice Guidelines for Burn Care',
      authors: ['International Society for Burn Injuries'],
      source: 'Burns',
    },
    {
      id: 'parkland-formula',
      type: 'article',
      title: 'Fluid resuscitation of burns',
      authors: ['Baxter, C.R.', 'Shires, T.'],
      source: 'Surgical Clinics of North America',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-wound-healing-phases', targetType: 'topic', relationship: 'related', label: 'Wound Healing Phases' },
    { targetId: 'wound-care-scar-management', targetType: 'topic', relationship: 'related', label: 'Scar Management' },
    { targetId: 'wound-care-when-to-seek-care', targetType: 'topic', relationship: 'related', label: 'When to Seek Care' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['burns', 'thermal injury', 'emergency care', 'critical care', 'skin grafting'],
    keywords: ['burn classification', 'TBSA', 'fluid resuscitation', 'inhalation injury', 'escharotomy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'emergency medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default burnCare;
