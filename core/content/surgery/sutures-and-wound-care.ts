/**
 * Sutures and Wound Care
 *
 * Comprehensive content covering suture materials, wound closure techniques,
 * and evidence-based wound care practices for optimal healing.
 */

import { EducationalContent } from '../types';

export const suturesAndWoundCare: EducationalContent = {
  id: 'surgery-sutures-and-wound-care',
  type: 'concept',
  name: 'Sutures and Wound Care',
  alternateNames: ['Stitches', 'Wound Closure', 'Suturing', 'Wound Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Stitches (sutures) hold wounds together while they heal, and proper wound care helps prevent infection and promote healing.',
      explanation: `When you have a cut or surgery, doctors may use stitches (also called sutures) to hold your skin together while it heals. Think of stitches like tiny threads that act as temporary helpers until your body can do the job itself.

**Types of Stitches:**

1. **Dissolving Stitches (Absorbable)**
   - These disappear on their own
   - Your body breaks them down over time
   - Used inside the body or under the skin
   - No need to remove them

2. **Non-Dissolving Stitches (Non-Absorbable)**
   - These need to be removed by a doctor
   - Made of materials like nylon or silk
   - Used on skin surfaces
   - Removed after 5-14 days depending on location

3. **Staples**
   - Metal clips that close wounds quickly
   - Common for scalp or larger incisions
   - Removed with a special tool

4. **Glue (Skin Adhesive)**
   - Special medical glue for skin
   - Good for small, clean cuts
   - Falls off on its own

**Taking Care of Your Wound:**

**The First 24-48 Hours:**
- Keep the bandage clean and dry
- Don't get the wound wet unless told otherwise
- Rest and avoid stretching the area

**After the First Day:**
- Gently clean with soap and water (if approved)
- Pat dry - don't rub
- Apply any ointments as directed
- Change bandages as instructed

**Signs of Problems - Call Your Doctor If:**
- Increasing redness or swelling
- Pus or bad-smelling drainage
- Fever
- Wound opens up
- Increasing pain instead of improving

**Scar Care:**
- Protect from sun for 1 year
- Scars continue to improve for up to 2 years
- Keeping wounds covered helps minimize scars`,
      keyTerms: [
        { term: 'sutures', definition: 'Medical threads used to hold wound edges together; also called stitches' },
        { term: 'absorbable', definition: 'A type of suture that dissolves on its own over time' },
        { term: 'incision', definition: 'A cut made by a surgeon during an operation' },
        { term: 'wound care', definition: 'The process of cleaning and protecting a wound to help it heal' },
      ],
      analogies: [
        'Stitches are like temporary tape that holds your skin together while your body makes its own natural "glue" to heal.',
        'Dissolving stitches are like dissolvable breath strips - they do their job and then disappear.',
        'A wound bandage is like a protective tent - it keeps the healing area safe from dirt and germs.',
      ],
      examples: [
        'A cut on your chin might need 5-7 days before stitches can be removed, while knee stitches might stay in for 10-14 days.',
        'Small cuts from getting blood drawn often use just a small bandage because they heal quickly on their own.',
      ],
    },
    2: {
      level: 2,
      summary: 'Suture selection depends on tissue type, wound characteristics, and healing requirements. Wound care follows evidence-based protocols to optimize healing and prevent complications.',
      explanation: `## Suture Classification

### By Absorption

**Absorbable Sutures:**
| Type | Absorption Time | Common Uses |
|------|-----------------|-------------|
| Fast gut | 7-10 days | Oral mucosa, pediatric skin |
| Plain gut | 2-3 weeks | Subcutaneous, mucosa |
| Chromic gut | 3-4 weeks | GI, GU, muscle |
| Vicryl (polyglactin) | 56-70 days | Subcutaneous, fascia |
| Monocryl | 90-120 days | Subcuticular skin |
| PDS (polydioxanone) | 180+ days | Fascia, tendon |

**Non-Absorbable Sutures:**
| Type | Properties | Common Uses |
|------|------------|-------------|
| Nylon (Ethilon) | Smooth, low reactivity | Skin closure |
| Prolene (polypropylene) | Minimal tissue reaction | Vascular, plastic surgery |
| Silk | Handles well, high reactivity | General, temporary |
| Stainless steel | Strongest, permanent | Sternum, bone |

### By Structure

- **Monofilament**: Single strand, smooth, less infection risk
- **Multifilament/Braided**: Multiple strands woven together, better knot security, higher infection risk

### Suture Sizes

Sizes range from thick (5-0) to thin (10-0):
- **2-0 to 0**: Fascia, muscle closure
- **3-0 to 4-0**: Skin in high-tension areas
- **4-0 to 5-0**: Face, general skin
- **5-0 to 6-0**: Face, delicate areas
- **7-0 to 10-0**: Microsurgery, eye

## Wound Closure Techniques

### Primary Closure
- Edges approximated immediately
- Used for clean, recent wounds
- Best cosmetic outcome

### Delayed Primary (Tertiary)
- Wound left open initially
- Closed at 3-5 days after contamination controlled
- Used for contaminated wounds

### Secondary Intention
- Wound left to heal naturally
- Fills in with granulation tissue
- Used for infected wounds, chronic wounds

## Common Suturing Patterns

| Pattern | Use |
|---------|-----|
| Simple interrupted | Most common, versatile |
| Simple running | Quick closure, less tension |
| Mattress (horizontal/vertical) | Eversion, high-tension areas |
| Subcuticular | Cosmetic closure, no marks |
| Figure-of-eight | Bleeding vessels |

## Wound Care Principles

### Acute Wound Care

**Cleaning:**
- Normal saline or tap water for irrigation
- High-pressure irrigation for contaminated wounds
- Avoid harsh antiseptics on healing tissue

**Dressing Selection:**
| Wound Type | Dressing Choice |
|------------|-----------------|
| Clean, sutured | Non-adherent, dry gauze |
| Draining | Absorbent foam, alginate |
| Dry | Hydrogel, hydrocolloid |
| Granulating | Hydrocolloid, foam |
| Infected | Silver dressings, antimicrobial |

### Chronic Wound Care

**TIME Framework:**
- **T**issue - debride non-viable tissue
- **I**nfection/Inflammation - control bacterial burden
- **M**oisture - maintain optimal balance
- **E**dge - promote epithelialization

### Dressing Categories

**Primary Dressings (contact wound):**
- Non-adherent: Petrolatum gauze
- Hydrogels: Add moisture
- Hydrocolloids: Self-adhesive, occlusive
- Foams: Absorbent, protective
- Alginates: Highly absorbent (from seaweed)

**Secondary Dressings (over primary):**
- Gauze, ABD pads
- Self-adhesive films
- Bandages, wraps

## Suture Removal Timing

| Location | Days |
|----------|------|
| Face | 5-7 |
| Scalp | 7-10 |
| Trunk | 7-10 |
| Extremities | 10-14 |
| Joints | 14 |
| Palms/soles | 14-21 |

**Signs sutures are ready for removal:**
- Wound edges well-approximated
- No signs of infection
- Adequate healing based on location`,
      keyTerms: [
        { term: 'monofilament', definition: 'Suture made of a single strand; less likely to harbor bacteria' },
        { term: 'braided suture', definition: 'Suture made of multiple strands woven together; better knot security' },
        { term: 'primary closure', definition: 'Closing a wound immediately after injury or surgery' },
        { term: 'secondary intention', definition: 'Allowing a wound to heal naturally without closure' },
        { term: 'TIME framework', definition: 'Evidence-based approach to chronic wound assessment: Tissue, Infection, Moisture, Edge' },
      ],
      analogies: [
        'Monofilament suture is like fishing line - smooth and slippery. Braided suture is like rope - textured and holds knots better.',
        'The TIME framework is like a checklist for wound troubleshooting.',
      ],
    },
    3: {
      level: 3,
      summary: 'Suture biomechanics, tissue handling principles, and wound bed preparation are integrated with evidence-based dressing selection to achieve optimal wound outcomes.',
      explanation: `## Suture Biomechanics

### Tensile Strength Retention

| Suture | 2 Weeks | 4 Weeks | Complete Absorption |
|--------|---------|---------|---------------------|
| Gut (plain) | 0% | 0% | 70 days |
| Gut (chromic) | 50% | 0% | 90 days |
| Vicryl | 75% | 50% | 56-70 days |
| Vicryl Rapide | 50% | 0% | 42 days |
| Monocryl | 50-60% | 20-30% | 90-120 days |
| PDS | 70% | 50% | 180-210 days |

### Knot Security

**Factors affecting knot holding:**
- Suture material (braided > monofilament)
- Coefficient of friction
- Number of throws required
- Memory (tendency to return to packaged shape)

**Recommended Throws:**
| Material | Throws |
|----------|--------|
| Silk | 3 |
| Vicryl | 4 |
| Nylon | 4-5 |
| Prolene | 5-6 |
| PDS | 5-6 |

### Tissue Reactivity

**Inflammatory Response Scale:**
1. **Minimal**: Prolene, nylon, PDS
2. **Mild**: Vicryl, Monocryl
3. **Moderate**: Chromic gut
4. **High**: Plain gut, silk

Clinical implication: Higher reactivity increases infection risk and scarring.

## Surgical Principles of Wound Closure

### Tissue Handling (Halsted Principles)
1. Gentle tissue handling
2. Aseptic technique
3. Sharp anatomic dissection
4. Meticulous hemostasis
5. Preservation of blood supply
6. No tension on closure
7. Obliteration of dead space
8. Importance of rest

### Wound Tension Management

**Factors affecting tension:**
- Wound location (joints, skin lines)
- Tissue elasticity (age, sun damage)
- Wound orientation to Langer's lines
- Depth of closure layers

**Techniques to reduce skin tension:**
- Deep dermal sutures
- Undermining
- Mattress sutures for eversion
- Relaxing incisions
- Tissue expansion (planned)

### Dead Space Elimination

**Why it matters:**
- Hematoma/seroma formation
- Increased infection risk
- Poor wound healing

**Techniques:**
- Layered closure
- Deep sutures
- Drains (when appropriate)
- Compression dressings
- Quilting sutures

## Advanced Wound Care

### Wound Bed Preparation

**Debridement Methods:**
| Method | Mechanism | Best For |
|--------|-----------|----------|
| Sharp/surgical | Scalpel, curette | Thick eschar, heavy necrosis |
| Enzymatic | Collagenase | Selective slough removal |
| Autolytic | Occlusive dressing | Minimal necrosis, fragile tissue |
| Mechanical | Wet-to-dry | Not preferred (non-selective) |
| Biological | Maggot therapy | Resistant necrosis |
| Hydrosurgery | Versajet | Precise, large wounds |

### Moisture Balance

**Optimal Moisture:**
- Maintains growth factors, enzymes
- Supports cell migration
- Enables autolytic debridement
- Prevents desiccation

**Too Wet:**
- Maceration of periwound skin
- Increased bacterial load
- Delays epithelialization

**Too Dry:**
- Cell death
- Eschar formation
- Impaired healing

### Advanced Dressing Selection

**Occlusive vs. Semi-Occlusive:**

| Property | Occlusive | Semi-Occlusive |
|----------|-----------|----------------|
| Moisture retention | High | Moderate |
| Gas exchange | None | Yes |
| Infection risk | Higher if infected | Lower |
| Examples | Tegaderm, hydrocolloid | Foam, some films |

**Antimicrobial Dressings:**

| Type | Mechanism | Duration |
|------|-----------|----------|
| Silver | Broad-spectrum, biofilm | 1-7 days |
| Iodine (cadexomer) | Slow release | 3-7 days |
| PHMB | Membrane disruption | 1-3 days |
| Honey (medical grade) | Osmotic, pH, peroxide | 1-3 days |

### Negative Pressure Wound Therapy

**Mechanisms:**
1. Macrodeformation (wound contraction)
2. Microdeformation (cell stretch)
3. Fluid removal
4. Reduced edema
5. Increased perfusion

**Settings:**
- Continuous: -75 to -125 mmHg (most common)
- Intermittent: Cycles of on/off (may increase granulation)

**Indications:**
- Acute traumatic wounds
- Dehisced surgical wounds
- Pressure injuries (stage 3-4)
- Diabetic foot ulcers
- Skin graft bolstering

**Contraindications:**
- Malignancy in wound
- Untreated osteomyelitis
- Exposed vessels
- Unexplored fistulas
- Necrotic tissue (debride first)

## Special Considerations

### High-Tension Closures

**Techniques:**
- Vertical mattress for eversion and strength
- Far-near-near-far (Allgower-Donati)
- Retention sutures for abdominal wall
- Tissue adhesives as adjunct

### Cosmetic Closures

**Best Practices:**
- Align skin edges precisely
- Evert wound edges slightly
- Consider subcuticular for minimal scarring
- Remove sutures early on face
- Dermabond for superficial lacerations
- Sun protection post-healing`,
      keyTerms: [
        { term: 'tensile strength retention', definition: 'Percentage of original suture strength remaining over time' },
        { term: 'Langer\'s lines', definition: 'Lines of skin tension; incisions parallel to these heal with less scarring' },
        { term: 'undermining', definition: 'Surgical technique of separating skin from deeper tissue to reduce tension' },
        { term: 'autolytic debridement', definition: 'Use of body\'s enzymes to break down dead tissue under occlusive dressing' },
        { term: 'macrodeformation', definition: 'Wound contraction effect of NPWT; draws wound edges together' },
      ],
      clinicalNotes: 'Suture selection should match tissue healing time - fascia (PDS/Vicryl), skin (absorbable subcuticular or non-absorbable interrupted). In contaminated wounds, consider monofilament to reduce bacterial harborage.',
    },
    4: {
      level: 4,
      summary: 'Integration of biomaterial science, wound healing biology, and surgical technique informs evidence-based suture selection and wound management algorithms for complex clinical scenarios.',
      explanation: `## Biomaterial Science of Sutures

### Polymer Chemistry

**Natural Absorbable (Collagen-Based):**
- Catgut: Sheep/cattle intestine collagen
- Absorption: Enzymatic (lysosomal degradation)
- Variable absorption (inflammation-dependent)
- High tissue reactivity

**Synthetic Absorbable:**

| Polymer | Degradation | Products |
|---------|-------------|----------|
| Polyglycolic acid (Dexon) | Hydrolysis | Glycolic acid → CO2 + H2O |
| Polyglactin 910 (Vicryl) | Hydrolysis | Glycolic/lactic acid |
| Poliglecaprone 25 (Monocryl) | Hydrolysis | Glycolic/caprolactone |
| Polydioxanone (PDS) | Hydrolysis | CO2 + H2O |

**Key Principle:** Hydrolytic degradation is more predictable than enzymatic (less dependent on wound environment).

**Synthetic Non-Absorbable:**

| Material | Properties | Applications |
|----------|------------|--------------|
| Nylon (polyamide) | Elastic, smooth | Skin, microsurgery |
| Polypropylene | Inert, permanent | Vascular, hernia |
| Polyester (Ethibond) | Braided, coated | Cardiac, orthopedic |
| PTFE (Gore-Tex) | Microporous | Vascular |
| Stainless steel | Strongest, inert | Sternum, bone |

### Suture Coatings

**Purpose:**
- Reduce friction (easier passage)
- Decrease tissue drag
- Improve knot tying

**Types:**
- Polytetrafluoroethylene (PTFE)
- Silicone
- Polycaprolactone
- Triclosan (antibacterial)

**Triclosan-Coated Sutures:**
- Reduce surgical site infection by 30% (meta-analyses)
- WHO recommendation for skin closure
- Cost-effectiveness debated

### Barbed Sutures

**Design:**
- Cutting barbs along suture length
- Eliminates need for knots
- Bidirectional or unidirectional

**Advantages:**
- Faster closure
- Distributed tension
- No knot-related complications

**Applications:**
- Fascial closure
- Cosmetic (face lift)
- GI anastomosis
- Uterine closure

**Evidence:**
- Equivalent safety to conventional sutures
- Reduced operative time
- Learning curve required

## Evidence-Based Wound Management

### Surgical Site Infection Prevention Bundle

**CDC Recommendations:**

| Intervention | Evidence |
|--------------|----------|
| Appropriate antibiotic prophylaxis | Strong |
| Proper timing (within 60 min) | Strong |
| Glucose control (<200 mg/dL) | Strong |
| Normothermia | Strong |
| Chlorhexidine skin prep | Strong |
| Hair removal (clippers, not razors) | Strong |
| Triclosan-coated sutures | Moderate |

### Wound Irrigation

**Principles:**
- High-pressure (8-12 psi) for contaminated wounds
- Low-pressure for clean wounds
- Normal saline or tap water (equivalent outcomes)
- Avoid: Betadine, hydrogen peroxide (cytotoxic)

**Pressure Delivery:**
| Method | Pressure (psi) |
|--------|----------------|
| Bulb syringe | 0.5 |
| Gravity drip | 1-2 |
| 35 mL syringe + 18G needle | 8 |
| Pulsatile lavage | 4-15 |

### Local Wound Environment Optimization

**Topical Antimicrobials:**

| Agent | Spectrum | Notes |
|-------|----------|-------|
| Mupirocin | Gram-positive | S. aureus decolonization |
| Bacitracin | Gram-positive | Minor wounds |
| Silver sulfadiazine | Broad | Burns (delays epithelialization) |
| Cadexomer iodine | Broad | Chronic wounds, biofilm |
| Medical honey | Broad | Debriding, anti-biofilm |

**When NOT to Use:**
- Clean surgical wounds (no benefit)
- Allergies (sulfa, iodine)
- Large surface area (absorption toxicity)

### Scar Management

**Mechanism of Hypertrophic Scarring:**
- Prolonged inflammatory phase
- Excess collagen III deposition
- Failure of remodeling
- TGF-β overexpression

**Prevention and Treatment:**

| Intervention | Evidence | Mechanism |
|--------------|----------|-----------|
| Silicone gel/sheets | Strong | Hydration, occlusion |
| Pressure garments | Moderate | Reduced collagen synthesis |
| Intralesional steroids | Strong | Anti-inflammatory, collagenase |
| Laser (PDL, fractional) | Moderate | Vascular targeting, remodeling |
| 5-Fluorouracil | Moderate | Fibroblast inhibition |

## Complex Wound Scenarios

### Contaminated Wound Management

**Time-Based Closure Guidelines:**

| Time Since Injury | Approach |
|-------------------|----------|
| <6 hours | Primary closure after irrigation |
| 6-24 hours | Case-by-case (location, contamination) |
| >24 hours | Delayed primary or secondary |

**Exceptions (extended primary closure):**
- Face/scalp (excellent blood supply): Up to 24 hours
- High contamination (bite wounds): Often delayed

### Bite Wounds

| Animal | Primary Closure? | Antibiotics |
|--------|-----------------|-------------|
| Dog | Face: yes; Hand: no | Augmentin if high-risk |
| Cat | No (high infection rate) | Augmentin (routine) |
| Human | No (high infection rate) | Augmentin |

### Skin Grafts and Flaps

**Graft Types:**

| Type | Thickness | Donor Healing | Uses |
|------|-----------|---------------|------|
| Split-thickness (STSG) | Epidermis + partial dermis | Secondary intention | Large wounds |
| Full-thickness (FTSG) | Epidermis + full dermis | Primary closure | Face, hand |

**Graft Survival:**
1. Plasmatic imbibition (0-48h): Diffusion nutrition
2. Inosculation (48-72h): Vessel anastomosis
3. Revascularization (72h+): New vessel ingrowth

**Flap Classification:**
- Random: Blood supply from dermal-subdermal plexus
- Axial: Named vessel in base
- Pedicled: Remains attached to blood supply
- Free: Vessel anastomosis (microsurgery)`,
      keyTerms: [
        { term: 'hydrolysis', definition: 'Chemical breakdown by water; mechanism of synthetic absorbable suture degradation' },
        { term: 'triclosan', definition: 'Antibacterial coating on sutures shown to reduce surgical site infections' },
        { term: 'barbed suture', definition: 'Suture with projections allowing tissue approximation without knots' },
        { term: 'plasmatic imbibition', definition: 'Initial phase of graft survival via diffusion of plasma nutrients' },
        { term: 'inosculation', definition: 'Anastomosis between graft and recipient blood vessels during graft take' },
      ],
      clinicalNotes: 'CDC guidelines support triclosan-coated sutures for SSI reduction. High-pressure irrigation (8 psi, 35 mL syringe with 18G needle) is recommended for contaminated wounds. Avoid routine topical antibiotics on clean surgical wounds.',
    },
    5: {
      level: 5,
      summary: 'Contemporary wound closure integrates precision suture selection, evidence-based protocols, and emerging technologies within quality improvement frameworks to optimize patient-centered outcomes.',
      explanation: `## Evidence Synthesis and Guidelines

### Cochrane Evidence Summary (2024)

**Suture vs. Staples for Skin Closure:**
- Hip/knee arthroplasty: Staples associated with higher wound complications
- C-section: No significant difference
- General surgery: Equivalent outcomes
- Cost: Staples faster but similar total cost

**Absorbable vs. Non-Absorbable for Skin:**
- Pediatric: Absorbable preferred (no removal visit)
- Adults: Equivalent cosmetic outcomes
- Lower extremity: Consider non-absorbable (slower healing)

**Continuous vs. Interrupted for Fascia:**
- Abdominal fascia: Continuous (0/1 loop PDS/nylon) preferred
- Suture length:wound length ratio ≥4:1
- Small bites (5-8mm from edge) reduce incisional hernia

### STITCH Trial Implications

**Running Small Bites (5mm bites, 5mm advancement):**
- Incisional hernia: 13% vs 21% (large bites)
- SSI: No difference
- Now standard of care for midline laparotomy

### WHO Surgical Site Infection Prevention Guidelines

**Strong Recommendations:**
1. Administer antibiotics within 60 minutes of incision
2. Do not extend prophylaxis post-operatively
3. Use alcohol-based chlorhexidine skin prep
4. Maintain normothermia (≥35.5°C)
5. Maintain perioperative glucose <200 mg/dL
6. Use triclosan-coated sutures when available

### NICE Wound Care Pathway

**Post-operative Wound Care:**
1. Leave dressing undisturbed 48 hours (unless clinically indicated)
2. Tap water safe for cleaning after 48 hours
3. No evidence for routine antibiotic ointments
4. Patient education on warning signs

## Emerging Technologies

### Smart Sutures

**Sensor-Embedded Sutures:**
- pH monitoring (infection detection)
- Temperature sensing
- Strain measurement (dehiscence prediction)
- Wireless data transmission

**Clinical Development:**
- Research phase
- Potential for early complication detection
- Cost and regulatory barriers

### Tissue Adhesives Evolution

**Cyanoacrylate Compounds:**

| Generation | Example | Properties |
|------------|---------|------------|
| First | Methyl-2-cyanoacrylate | Rapid, histotoxic |
| Second | N-butyl-2-cyanoacrylate (Histoacryl) | Less toxic |
| Third | 2-Octyl-cyanoacrylate (Dermabond) | Flexible, lower toxicity |
| Fourth | Flexible formulations | Enhanced properties |

**Evidence:**
- Non-inferior to sutures for traumatic lacerations
- Cost-effective (no removal visit)
- Patient satisfaction higher
- Not for high-tension wounds

### Bioactive Wound Products

**Cellular Products:**
| Product | Components | Indication |
|---------|------------|------------|
| Apligraf | Living keratinocytes + fibroblasts | Venous/diabetic ulcers |
| Dermagraft | Living fibroblasts on scaffold | Diabetic foot ulcers |
| EpiFix | Dehydrated amniotic membrane | Chronic wounds |
| GINTUIT | Allogeneic cells + scaffold | Oral soft tissue |

**Growth Factor Products:**
- Becaplermin (PDGF-BB): FDA-approved, declining use
- EGF topical: International markets
- Research: FGF, VEGF, combination products

### Regenerative Approaches

**Extracellular Matrix (ECM) Products:**
- Porcine intestinal submucosa (Oasis)
- Bovine dermis (Integra)
- Human dermis (AlloDerm)

**Mechanism:**
- Provide scaffold for cell migration
- Contain residual growth factors
- Promote constructive remodeling

## Quality Metrics in Wound Care

### Surgical Site Infection Surveillance

**NHSN Definitions:**
- Superficial incisional SSI: Skin/subcutaneous, <30 days
- Deep incisional SSI: Fascia/muscle, <30 days (90 for implants)
- Organ/space SSI: Body cavity manipulation, <30 days (90 for implants)

**Risk Stratification (SIR):**
- Standardized Infection Ratio
- Observed infections / Expected infections
- Allows fair hospital comparison

### Outcome Measures

**Process Measures:**
- Antibiotic prophylaxis timing compliance
- Normothermia maintenance rate
- Glucose control achievement
- Hair removal method compliance

**Outcome Measures:**
- SSI rate by procedure
- Wound dehiscence rate
- Readmission for wound complications
- Return to OR for wound issues

**Patient-Reported Outcomes:**
- Wound pain scores
- Cosmetic satisfaction (POSAS, VSS)
- Return to function
- Quality of life impact

## Special Populations

### Immunocompromised Patients

**Considerations:**
- Higher infection risk
- Impaired healing (steroids, chemotherapy)
- Consider delayed closure
- Lower threshold for deep cultures
- May need longer antibiotic prophylaxis

### Obese Patients

**Wound Complications:**
- SSI rate 2-3x higher
- Seroma/hematoma more common
- Dehiscence more frequent
- Incisional hernia risk increased

**Mitigation Strategies:**
- Subcutaneous drains (controversial)
- Negative pressure incision management
- Triclosan-coated sutures
- Retention sutures for high BMI
- Bariatric-specific closure protocols

### Elderly/Frail Patients

**Healing Challenges:**
- Decreased collagen synthesis
- Reduced immune function
- Comorbidities (diabetes, vascular)
- Polypharmacy (steroids, anticoagulants)
- Nutritional deficiencies

**Approach:**
- Optimize nutrition preoperatively
- Careful tissue handling
- Adequate closure layers
- Extended suture removal timeline
- Lower tension techniques

## Future Directions

### Artificial Intelligence in Wound Care

**Applications:**
- Automated wound measurement (photography)
- Healing trajectory prediction
- Treatment recommendation engines
- Early infection detection
- Clinical decision support

### Personalized Wound Care

**Vision:**
- Biomarker-guided therapy selection
- Genetic profiling for healing capacity
- Microbiome-targeted treatments
- Patient-specific wound products
- Real-time monitoring and feedback

### Sustainability Considerations

**Environmental Impact:**
- Single-use packaging waste
- Manufacturing carbon footprint
- Disposal of medical waste

**Initiatives:**
- Recyclable packaging development
- Biodegradable materials research
- Healthcare sustainability programs`,
      keyTerms: [
        { term: 'STITCH trial', definition: 'Landmark RCT showing small-bite technique reduces incisional hernia in midline laparotomy' },
        { term: 'SIR', definition: 'Standardized Infection Ratio - observed/expected SSIs for risk-adjusted comparison' },
        { term: 'POSAS', definition: 'Patient and Observer Scar Assessment Scale - validated tool for scar evaluation' },
        { term: 'ciNPT', definition: 'Closed Incision Negative Pressure Therapy - prophylactic NPWT over closed incisions' },
        { term: 'ECM scaffold', definition: 'Extracellular matrix product providing biological structure for tissue regeneration' },
      ],
      clinicalNotes: `Key Practice Points:
1. Small-bite fascial closure (5mm bites, 5mm advancement, SL:WL ≥4:1) is standard for midline laparotomy
2. Triclosan-coated sutures reduce SSI (WHO strong recommendation)
3. Leave surgical dressings undisturbed 48 hours unless clinically indicated
4. Tissue adhesives are non-inferior to sutures for appropriate wounds
5. ciNPT shows benefit in high-risk incisions (BMI >30, contaminated, re-operation)
6. Patient-reported outcomes increasingly important for measuring wound care quality
7. Sustainability considerations emerging in wound care product selection`,
    },
  },

  media: [
    {
      id: 'suture-types',
      type: 'diagram',
      filename: 'suture-types.svg',
      title: 'Types of Sutures',
      description: 'Visual comparison of absorbable and non-absorbable suture materials',
    },
    {
      id: 'suturing-techniques',
      type: 'diagram',
      filename: 'suturing-techniques.svg',
      title: 'Common Suturing Patterns',
      description: 'Illustration of simple interrupted, running, and mattress suture patterns',
    },
  ],

  citations: [
    {
      id: 'schwartz-wound',
      type: 'textbook',
      title: 'Wound Care and Wound Healing',
      source: 'Schwartz\'s Principles of Surgery',
      chapter: '9',
    },
    {
      id: 'who-ssi-2018',
      type: 'article',
      title: 'Global guidelines for the prevention of surgical site infection',
      source: 'WHO',
      authors: ['WHO Guidelines Development Group'],
      url: 'https://www.who.int/publications/i/item/global-guidelines-for-the-prevention-of-surgical-site-infection-2nd-ed',
    },
    {
      id: 'stitch-trial',
      type: 'article',
      title: 'Small bites versus large bites for closure of abdominal midline incisions (STITCH)',
      authors: ['Deerenberg, E.B.', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(15)60459-7',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-wound-healing', targetType: 'topic', relationship: 'related', label: 'Wound Healing' },
    { targetId: 'surgery-surgical-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'surgery-surgical-drains', targetType: 'topic', relationship: 'related', label: 'Surgical Drains' },
  ],

  tags: {
    systems: ['integumentary', 'surgical'],
    topics: ['sutures', 'wound closure', 'wound care', 'surgical technique'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default suturesAndWoundCare;
