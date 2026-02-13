/**
 * Wound Cleaning and Debridement
 *
 * Comprehensive content on wound cleaning techniques,
 * debridement methods, irrigation, antisepsis, and
 * preparation for optimal healing.
 */

import { EducationalContent } from '../types';

export const woundCleaningContent: EducationalContent = {
  id: 'wound-care-cleaning',
  type: 'topic',
  name: 'Wound Cleaning and Debridement',
  alternateNames: ['Wound Preparation', 'Debridement Techniques', 'Wound Irrigation'],

  levels: {
    1: {
      level: 1,
      summary: 'Cleaning a wound properly helps it heal faster and prevents infection. Use clean water or saline, gentle cleaning, and remove any dead tissue.',
      explanation: `## Why Clean Wounds?

When you have a wound, keeping it clean is one of the most important things you can do. Cleaning:
- Removes dirt, germs, and dead tissue
- Helps prevent infection
- Creates a healthy environment for healing
- Lets you see the wound better to check its progress

## Basic Wound Cleaning

**What You Need:**
- Clean, running water or saline (salt water)
- Clean tweezers (for removing debris)
- Clean cloth or gauze
- Antibiotic ointment (optional)
- Bandage or dressing

**Step-by-Step:**

1. **Wash your hands** with soap and water for at least 20 seconds

2. **Stop any bleeding** by applying direct pressure with a clean cloth

3. **Rinse the wound** with cool, running water
   - Use bottled water if tap water isn't clean
   - Rinse for several minutes
   - Don't use harsh antiseptics (like hydrogen peroxide or alcohol) - they can damage healing cells

4. **Clean around the wound** with soap and water
   - Wash the skin AROUND the wound, not inside it
   - Use a clean cloth or gauze
   - Wipe away from the wound (don't wipe back and forth)

5. **Remove dirt or debris**
   - Use clean tweezers for larger pieces
   - If dirt is stuck, see a doctor - don't dig

6. **Pat dry** with a clean cloth or gauze
   - Don't rub - pat gently
   - Dry the area around the wound
   - Keep the wound bed slightly moist

7. **Apply ointment if desired**
   - A thin layer of antibiotic ointment can help
   - Petroleum jelly (Vaseline) also works to keep it moist

8. **Cover with a bandage**
   - Change daily or if it gets wet or dirty

## What NOT to Do

**Avoid:**
- Hydrogen peroxide (bubbles but harms healing cells)
- Rubbing alcohol (stings and damages tissue)
- Iodine in full strength (can be too harsh)
- Scrubbing inside the wound
- Picking at scabs

**Why not peroxide or alcohol?**
- They kill helpful cells along with germs
- Can slow down healing
- May cause more pain than necessary
- Plain water or saline works just as well for most wounds

## Removing Dead Tissue (Debridement)

Sometimes wounds have dead, black, or yellow tissue that needs to be removed. This is called debridement.

**Types of Debridement:**

1. **Mechanical (removing by force):**
   - Wet dressings that dry and pull off dead tissue
   - Can be painful but effective
   - Do at home with medical guidance

2. **Enzymatic (using special creams):**
   - Creams that dissolve dead tissue
   - Less painful
   - Takes several days to work

3. **Autolytic (self-cleaning):**
   - Your body's natural process
   - Special dressings help this happen
   - Gentle but slow

4. **Surgical (done by doctors):**
   - Quick removal of dead tissue
   - Done under anesthesia if needed
   - Most complete method

## When to See a Doctor for Cleaning

**Get medical help if:**
- The wound is deep (more than 1/4 inch)
- You can't remove all the dirt or debris
- There's dead tissue (black, yellow, or gray areas)
- The wound has been dirty and you can't clean it well
- It's been more than 6-8 hours since the injury
- You have diabetes or circulation problems

**Professional wound cleaning may include:**
- Special cleaning solutions
- Thorough removal of dead tissue
- Irrigation under pressure
- Prescription cleaning supplies

## Special Cases

**Burns:**
- Cool with running water for 10-20 minutes
- Don't use ice (can cause more damage)
- Don't pop blisters
- See a doctor for large or severe burns

**Animal Bites:**
- Clean thoroughly with soap and water
- Rinse for at least 5 minutes
- See a doctor (may need antibiotics)

**Tetanus Risk:**
- Deep wounds, especially with dirt or metal
- If you haven't had a tetanus shot in 5-10 years
- See a doctor for a booster if needed

## Keeping It Clean While Healing

**Do:**
- Keep the wound covered with a clean dressing
- Change dressings daily or when soiled
- Wash hands before and after touching the wound
- Keep the area clean and dry

**Don't::**
- Soak in baths or pools while healing
- Use harsh chemicals
- Share personal items like towels`,
      keyTerms: [
        { term: 'irrigation', definition: 'Using water or saline to wash out a wound and flush away dirt and germs' },
        { term: 'debridement', definition: 'Removal of dead or damaged tissue from a wound to help it heal', pronunciation: 'da-BREED-ment' },
        { term: 'saline', definition: 'Salt water solution that is gentle and safe for cleaning wounds' },
        { term: 'antiseptic', definition: 'Substance that stops or slows the growth of germs; used to clean wounds', pronunciation: 'an-tih-SEP-tik' },
        { term: 'eschar', definition: 'Hard black or brown dead tissue that forms on wounds', pronunciation: 'ES-kar' },
        { term: 'slough', definition: 'Soft yellow or white dead tissue in wounds', pronunciation: 'sluff' },
      ],
      analogies: [
        'Cleaning a wound is like weeding a garden - you need to remove the "weeds" (dead tissue and germs) so the "flowers" (healthy tissue) can grow.',
        'Hydrogen peroxide is like using a blowtorch to clean a kitchen - it kills germs but damages everything else too.',
        'Debridement is like pruning a dead branch from a tree - removing the dead part helps the healthy part grow better.',
      ],
      examples: [
        'A scraped knee should be rinsed with water for 5 minutes to remove dirt, then covered with a clean bandage.',
        'If you step on a nail and it creates a deep puncture, medical cleaning is needed because it\'s hard to rinse deep wounds thoroughly.',
        'For a wound with black, dry tissue (eschar), enzymatic creams can slowly dissolve it over several days without pain.',
      ],
      patientCounselingPoints: [
        'The most important cleaning is done right after injury - rinse with plenty of water.',
        'Avoid harsh chemicals like peroxide or alcohol - they damage healing cells.',
        'Keep the wound covered with a clean dressing until it heals.',
        'If dead tissue (black or yellow) is present, medical care can help remove it safely.',
        'For deep wounds or wounds you cannot clean well, see a healthcare provider.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wound cleaning involves irrigation, gentle mechanical cleansing, and selective debridement methods including mechanical, enzymatic, autolytic, and surgical approaches tailored to wound characteristics.',
      explanation: `## Principles of Wound Cleaning and Debridement

### Goals of Wound Cleaning

1. **Remove contaminants:** Bacteria, dirt, foreign material
2. **Reduce bioburden:** Decrease bacterial count below infection threshold (<10^5 CFU/g)
3. **Remove devitalized tissue:** Create healthy wound bed
4. **Maintain moisture balance:** Support healing environment
5. **Minimize trauma:** Avoid damaging new tissue growth

### Irrigation Techniques

**Indications for Irrigation:**
- Initial wound cleansing
- Removal of loose debris and bacteria
- Between dressing changes for heavily draining wounds
- Before debridement or closure

**Irrigation Solutions:**

| Solution | Indications | Advantages | Disadvantages |
|----------|-------------|------------|----------------|
| **Normal saline (0.9%)** | Most wounds | Isotonic, safe, inexpensive | None significant |
| **Sterile water** | Saline unavailable | Cheap | Hypotonic, can cause pain |
| **Tap water** | Minor wounds, home care | Available, cheap | Variable purity |
| **Potable water** | Field/emergency | Safe, available | Not sterile |
| **Antiseptic solutions** | Selected cases | Reduce bacteria | Cytotoxic if not diluted |

**Proper Irrigation Technique:**
1. Use syringe (18-19 gauge) or irrigation device
2. Apply at 8-12 psi pressure
   - High enough to remove bacteria
   - Low enough to avoid tissue damage
3. Irrigate at angle toward wound bed
4. Use 100-200 mL for small wounds
5. Avoid direct stream into exposed bone/tendon
6. Use splash guard for safety

**Pressure Sources:**
- 35 mL syringe with 19 gauge needle = 8 psi
- Commercial irrigation devices = consistent pressure
- Avoid high-pressure systems (>15 psi) - can force bacteria into tissue

### Wound Cleansing Methods

**Gauze Cleansing:**
- Use moistened gauze (saline)
- Wipe gently in one direction
- Avoid scrubbing (damages granulation tissue)
- New gauze for each stroke

**Cotton Swab Cleansing:**
- For small or delicate wounds
- Gentle, precise cleaning
- Avoid cotton fibers left in wound

**No-Touch Cleansing:**
- Use irrigation only
- Minimizes trauma
- Best for fragile granulation tissue

### Debridement Methods and Selection

**1. Mechanical Debridement:**

**Techniques:**
- **Wet-to-dry dressings:**
  - Apply moist gauze, allow to dry, remove (removes tissue)
  - Painful, non-selective
  - Use only when rapid debridement needed
  - Frequency: 1-3 times daily

- **Hydrosurgery (Versajet):**
  - High-pressure water stream
  - Selective for devitalized tissue
  - Can be used at bedside
  - Expensive equipment

- **Pulsed lavage:**
  - Pressurized saline irrigation
  - Suction removes debris
  - Can be selective with pressure adjustment

**Indications:** Large amounts of necrotic tissue, infected wounds
**Contraindications:** Fragile granulation tissue, bleeding disorders

**2. Enzymatic Debridement:**

**Available Agents:**

| Enzyme | Product | Target | Application |
|--------|---------|--------|-------------|
| **Collagenase** | Santyl | Collagen in necrotic tissue | Daily, covered |
| **Papain-urea** | Accuzyme | Protein, necrotic tissue | Daily, covered |
| **Papain-urea-chlorophyllin** | Panafil | Protein + odor control | Daily |
| **Streptokinase/streptodornase** | Varidase | Fibrin, DNA (less available) | BID |

**Advantages:**
- Selective for necrotic tissue
- Minimal pain
- Can be used at home
- Works at depth

**Disadvantages:**
- Slow (days to weeks)
- Requires prescription
- Cost considerations
- Needs moisture to work

**3. Autolytic Debridement:**

**Mechanism:** Body's enzymes liquefy necrotic tissue

**Dressings that Promote Autolysis:**
- **Hydrocolloids:** DuoDERM (maintains moisture)
- **Hydrogels:** Intrasite (adds moisture to dry wounds)
- **Transparent films:** Tegaderm (occlusive)
- **Alginates:** Sorbalgon (for exudative wounds)

**Advantages:**
- Most selective (only necrotic tissue)
- Painless
- Simple to apply
- Cost-effective

**Disadvantages:**
- Slow (weeks)
- Not for infected wounds
- Contraindicated for heavily draining wounds
- Requires intact periwound skin

**4. Surgical (Sharp) Debridement:**

**Levels:**
- **Bedside:** Scalpel, scissors, curette; local anesthesia optional
- **Operating room:** Extensive debridement under anesthesia

**Indications:**
- Large areas of necrotic tissue (eschar)
- Urgent infection (necrotizing fasciitis)
- Wound preparation for closure
- Septic joint/bone involvement

**Advantages:**
- Most rapid
- Most complete
- Can address deep tissue
- Allows tissue sampling (culture/biopsy)

**Disadvantages:**
- Requires training/skills
- May require anesthesia
- Painful post-procedure
- Risk of bleeding, nerve damage
- Non-selective (may remove some viable tissue)

**5. Biological (Larval) Debridement:**

**Mechanism:** Maggots (larvae) eat necrotic tissue and bacteria

**Indications:**
- Antibiotic-resistant infections
- Marginal vascular supply
- Patient not surgical candidate

**Process:**
- Apply sterile maggots to wound
- Cover with semi-permeable dressing
- Remove after 48-72 hours
- May repeat weekly

**Advantages:**
- Very selective
- Debrides and disinfects
- Stimulates granulation
- Minimal discomfort

**Disadvantages:**
- Patient acceptance issues
- Limited availability
- Requires frequent application
- Not for tunneling wounds

### Debridement Selection Algorithm

**Consider:**
1. **Amount of necrotic tissue:** Small (<25%) vs. Large (>75%)
2. **Urgency:** Infection present vs. elective
3. **Patient factors:** Pain tolerance, bleeding risk
4. **Wound characteristics:** Location, depth, exudate
5. **Resources:** Equipment available, setting (home vs. clinical)

**General Recommendations:**
| Situation | Preferred Method |
|-----------|------------------|
| <25% necrotic, not urgent | Enzymatic or autolytic |
| 25-75% necrotic | Enzymatic + mechanical |
| >75% necrotic | Surgical/sharp debridement |
| Infection present | Surgical + antibiotics |
| Bleeding risk | Enzymatic or autolytic |
| Frail patient | Autolytic (slow but gentle) |
| Home care | Enzymatic |

### Periwound Skin Care

**Cleansing:**
- Clean periwound skin during dressing changes
- Use pH-balanced cleanser
- Pat dry, don't rub
- Protect from excessive moisture

**Protection:**
- Moisture barriers for maceration
- Skin sealants for adhesive damage
- Non-adherent dressings at edges

**Monitoring:**
- Watch for contact dermatitis
- Check for maceration from exudate
- Assess for stripping from adhesive removal`,
      keyTerms: [
        { term: 'debridement', definition: 'Removal of dead, contaminated, or adherent tissue from wounds to promote healing' },
        { term: 'irrigation', definition: 'Mechanical washing of wound with fluid under pressure to remove debris and bacteria' },
        { term: 'autolytic debridement', definition: 'Self-dissolution of necrotic tissue using body\'s enzymes and moisture-retentive dressings' },
        { term: 'enzymatic debridement', definition: 'Use of exogenous enzymes (collagenase, papain) to selectively break down necrotic tissue' },
        { term: 'sharp debridement', definition: 'Surgical removal of devitalized tissue using scalpel, scissors, or curette; fastest but requires training' },
        { term: 'bioburden', definition: 'Number of contaminating microorganisms in or on a wound; <10^5 CFU/g is tolerable' },
        { term: 'maceration', definition: 'Softening and breakdown of skin from prolonged exposure to moisture' },
      ],
      analogies: [
        'Mechanical debridement with wet-to-dry gauze is like using duct tape to remove lint - it works but can be rough on the surface.',
        'Enzymatic debridement is like using stain remover - it specifically targets and breaks down the unwanted material.',
        'Autolytic debridement is like letting your body\'s own cleaning crew do the work - slow but gentle.',
      ],
      clinicalNotes: 'Debridement converts chronic wounds to acute wounds, restarting the healing cascade. Most chronic wounds have biofilm that requires debridement every 1-2 weeks until healed. The choice of debridement method should be reassessed at each visit.',
      patientCounselingPoints: [
        'Keep follow-up appointments for debridement - it\'s often needed weekly.',
        'Enzymatic creams need to be applied as directed - usually daily and covered.',
        'Signs of infection after debridement: fever, redness, increasing pain.',
        'Autolytic debridement takes time - be patient and keep dressings in place.',
      ],
    },

    3: {
      level: 3,
      summary: 'Wound bed preparation requires debridement selection based on tissue type, urgency, and patient factors. Methods include surgical (sharp), mechanical, enzymatic, autolytic, and biological (maggot) therapy with specific indications and contraindications.',
      explanation: `## Comprehensive Wound Cleaning and Debridement

### Evidence-Based Debridement Selection

**TIME Framework Integration:**
- **T (Tissue):** Debridement of non-viable tissue
- **I (Infection/Inflammation):** Bacterial load reduction
- **M (Moisture):** Exudate management with debridement
- **E (Edge):** Facilitate epithelial advancement

### Detailed Debridement Methods

**1. Surgical (Sharp) Debridement:**

**Technique:**
- **Tools:** #15 or #10 scalpel blade, Metzenbaum scissors, curette
- **Approach:**
  - Start at wound edge, work toward center
  - Lift necrotic tissue, cut at viable interface
  - Differentiate: viable bleeds, necrotic does not
  - Preserve viable tissue at base
  - Control bleeding with pressure or cautery

**Anesthesia Considerations:**
- **Topical:** Lidocaine 4% (small wounds)
- **Local:** Lidocaine 1-2% with or without epinephrine
- **Field block:** For larger wounds
- **None:** In neuropathic patients (use caution)

**Contraindications:**
- Bleeding disorders (correctable)
- Extreme ischemia (revascularize first)
- Exposed vital structures (arteries, nerves, tendons)
- Patient refusal

**Cautions:**
- Do not debride stable heel eschar (dry, no signs of infection)
- Avoid debridement of malignant tissue (biopsy first)
- Assess arterial supply before extensive debridement

**2. Mechanical Debridement:**

**Wet-to-Dry Technique:**
- **Process:**
  1. Moisten sterile gauze with saline
  2. Pack into wound, cover entire wound bed
  3. Allow to dry completely (4-8 hours)
  4. Remove at an angle, peeling away necrotic tissue
- **Frequency:** BID to TID
- **Indications:** Rapid debridement needed, palliative care
- **Criticism:** Non-selective, removes healthy tissue, painful

**Hydrosurgery:**
- **Mechanism:** High-pressure saline stream (up to 17,000 psi)
- **Selectivity:** Cutting distance allows selectivity (closer = more aggressive)
- **Advantages:**
  - Precise, controllable
  - Simultaneous irrigation and suction
  - Cytokine-rich fluid salvage possible
- **Disadvantages:**
  - Equipment cost
  - Requires training
  - Not for all settings

**Pulsed Lavage with Suction:**
- **Pressure:** 4-15 psi adjustable
- **Volume:** Up to 1-2 L per treatment
- **Indications:** Highly contaminated wounds, deep cavity wounds
- **Precautions:** Avoid forcing fluid into planes or tissues

**3. Enzymatic Debridement:**

**Mechanisms and Applications:**

| Agent | Composition | Mechanism | Use |
|-------|-------------|-----------|-----|
| **Collagenase (Santyl)** | Clostridial collagenase | Degrades native collagen | Eschar, necrotic tissue |
| **Papain-urea** | Papain + urea | Digests protein, solubilizes | Slough, necrotic tissue |
| **Papain-urea-chlorophyllin** | Papain + urea + chlorophyllin | Protein + odor control | Foul-smelling wounds |

**Application Guidelines:**
- Apply to necrotic tissue only (avoid peri-wound)
- Cover with secondary dressing (non-occlusive)
- Reapply daily (remove old with saline)
- Cross-hatch eschar to enhance penetration
- Continue until necrotic tissue resolved

**Special Considerations:**
- **Papain allergy:** Avoid papain products in patients with:
  - Papaya allergy
  - Latex allergy (cross-reactivity)
- **Antibiotic interaction:** Silver dressings inactivate collagenase (separate application by 12+ hours)

**4. Autolytic Debridement:**

**Dressing Selection:**

| Wound Type | Appropriate Dressing | Mechanism |
|------------|---------------------|-----------|
| **Dry necrotic** | Hydrogel, hydrocolloid | Adds moisture, softens eschar |
| **Moist necrotic** | Hydrofiber, alginate | Maintains moisture, manages exudate |
| **Low exudate** | Hydrocolloid, foam | Maintains optimal moisture |
| **High exudate** | Alginate, hydrofiber | Absorbs while maintaining moisture |

**Contraindications:**
- Active infection (requires antimicrobial coverage)
- Anaerobic infection (occlusion promotes growth)
- Unstageable pressure ulcer without infection evaluation
- Osteomyelitis with draining tract

**Advantages:**
- Selective (only necrotic tissue affected)
- Painless
- Patient-friendly
- Cost-effective

**Disadvantages:**
- Slow (2-4 weeks for significant debridement)
- Requires intact or reasonably intact periwound skin
- Not suitable for heavily draining wounds
- Contraindicated with certain infections

**5. Biological (Maggot) Debridement Therapy:**

**Species:** Lucilia sericata (green bottle fly)

**Mechanisms:**
- **Mechanical:** Mouth hooks dissolve and ingest necrotic tissue
- **Enzymatic:** Secreted proteolytic enzymes
- **Antimicrobial:** Secreted substances inhibit bacteria (including MRSA)
- **Stimulation:** Growth factors, alkaline pH promotes granulation

**Indications:**
- Antibiotic-resistant infections (MRSA, VRE)
- Marginal or poor vascularity
- Contra-indications to surgery
- Failed other debridement methods

**Contraindications:**
- Exposed vital structures (vessels, organs)
- Fistula to body cavity
- Bleeding disorders or anticoagulation
- Sensitive area (face, genitals) - psychological issues
- Allergy to eggs or soy (in maggot nutrient medium)

**Procedure:**
1. Apply maggot-containing dressing (5-10 larvae/cm²)
2. Cover with mesh and secondary dressing
3. Change every 48-72 hours
4. Typical course: 2-4 applications
5. Maggots grow 8-10x during treatment

**Adverse Effects:**
- Pain (increasing as larvae grow)
- Anxiety/disgust (patient/caregiver)
- Bleeding (rare)

### Wound Irrigation Evidence

**Pressure Recommendations:**
- **Optimal:** 8-12 psi
  - Removes bacteria effectively
  - Minimizes tissue damage
  - Avoids forcing bacteria into tissue

- **Too low (<4 psi):** Ineffective cleansing
- **Too high (>15 psi):** Tissue damage, bacterial inoculation

**Volume Guidelines:**
| Wound Type | Volume |
|------------|--------|
| Small, clean | 50-100 mL |
| Large, contaminated | 200-500 mL |
| Highly contaminated | 500-1000 mL |
| Bite wounds | 200-500 mL |

**Solution Temperature:**
- Body temperature solutions preferred
- Cold solutions cause vasoconstriction
- Warm solutions improve comfort and perfusion

**Additives to Irrigation Fluids:**
- **Antibiotics:** Generally NOT recommended (risk of resistance, toxicity)
- **Antiseptics:** Consider for heavily contaminated wounds
- **Soaps and detergents:** Generally cytotoxic

### Antiseptic Solutions - Evidence Update

| Solution | Cytotoxicity | Antimicrobial Spectrum | Use Recommendation |
|----------|--------------|----------------------|-------------------|
| **Normal saline** | None | None (mechanical only) | First-line for most wounds |
| **Povidone-iodine (Betadine)** | Moderate at full strength | Broad (bacteria, fungi, viruses) | Diluted 1:10 for wound use |
| **Chlorhexidine** | High, especially fibroblasts | Broad, some spores | Not for wound bed; periwound OK |
| **Hydrogen peroxide** | High (foam damages tissue) | Moderate | Not recommended |
| **Acetic acid** | Moderate | Pseudomonas | Pseudomonas-infected wounds, diluted |
| **Dakin's solution (0.5% NaOCl)** | High | Broad, spores | Cautious use, short contact time |
| **PHMB** | Low to moderate | Broad | Approved for wound use |

**Key Points:**
- Cytotoxicity is time and concentration dependent
- Antiseptics can impair healing if used improperly
- Reserve for heavily contaminated/infected wounds
- Stop using once infection controlled

### Pain Management During Debridement

**Pre-procedure:**
- Oral analgesics 30-60 minutes before
- Topical lidocaine 4% (small wounds)
- Local anesthesia for sharp debridement

**During procedure:**
- Gentle technique
- Patient-directed pace
- Consider premedication for anticipated pain

**Post-procedure:**
- Continue analgesics as needed
- Non-pharmacologic options: cold therapy, elevation

### Special Situations

**Diabetic Foot Ulcers:**
- Sharp debridement preferred (most rapid)
- Callus removal at wound edges
- Repeated weekly debridement improves healing
- Assess for osteomyelitis (probe-to-bone)

**Pressure Ulcers:**
- Stable eschar on heels: Do NOT remove (dry, adherent, no signs of infection)
- Unstageable ulcers: Debride to stage
- Slough removal promotes healing

**Necrotizing Infections:**
- EMERGENT surgical debridement
- Operating room setting
- Multiple debridements often needed
- Lifesaving, not limb-saving priority

**Burn Debridement:**
- Early excision of deep burns (within 72 hours)
- Tangential excision to viable tissue
- Autografting of excised areas`,
      keyTerms: [
        { term: 'hydrosurgery', definition: 'High-pressure water jet system for selective debridement of wounds while preserving viable tissue' },
        { term: 'pulsed lavage', definition: 'High-volume, pressurized irrigation with simultaneous suction for wound cleansing' },
        { term: 'maggot debridement therapy', definition: 'Use of sterile fly larvae to selectively debride necrotic tissue and disinfect wounds' },
        { term: 'TIME framework', definition: 'Wound bed preparation: Tissue debridement, Infection control, Moisture balance, Edge protection' },
        { term: 'autolytic', definition: 'Self-dissolution of necrotic tissue by endogenous enzymes under occlusive moisture-retentive dressings' },
        { term: 'chlorhexidine', definition: 'Antiseptic agent effective for skin antisepsis but cytotoxic to wound cells; use only on intact skin', pronunciation: 'klor-HEX-ih-deen' },
      ],
      clinicalNotes: `Debridement Decision Algorithm:

1. Is debridement indicated?
   - Yes: Necrotic tissue, eschar, slough present
   - No: Healthy granulation, epithelialization

2. How urgent?
   - Emergent: Necrotizing infection → OR
   - Urgent: Infection, sepsis → Sharp debridement
   - Non-urgent: Choose based on wound/patient factors

3. Which method?
   - >75% necrotic: Sharp/surgical
   - 25-75% necrotic: Combination
   - <25% necrotic: Enzymatic or autolytic
   - Bleeding risk: Autolytic
   - Ischemic limb: Revascularize first, then gentle debridement

4. Reassess:
   - Weekly or at each dressing change
   - Adjust method as wound evolves
   - Goal: 100% granulation tissue`,
    },

    4: {
      level: 4,
      summary: 'Advanced wound bed preparation integrates TIME principles with evidence-based debridement strategies. Biofilm management, molecular antiseptics, and combination debridement approaches optimize healing in complex wounds.',
      explanation: `## Advanced Wound Bed Preparation and Debridement

### Biofilm-Based Wound Care

**Biofilm Biology:**
- **Formation timeline:** 2-6 hours (initial), 24-48 hours (mature)
- **Structure:** Bacteria in EPS (extracellular polymeric substance) matrix
- **Characteristics:**
  - 1000x increased antibiotic resistance
  - Tolerant to host immune system
  - Alters wound pH, oxygen, and growth factors
  - Produces proteases that degrade healing factors

**Biofilm Management Strategy:**
1. **Disrupt:**
   - Serial debridement (weekly or more frequent)
   - Physical disruption of biofilm structure
   - Methods: Sharp, hydrosurgery, ultrasonic, monofilament

2. **Suppress:**
   - Topical antimicrobials (cadexomer iodine, PHMB, silver)
   - Antimicrobial dressings
   - Prolonged contact time

3. **Prevent reformation:**
   - Regular debridement (every 1-2 weeks)
   - Continual antimicrobial coverage during treatment

**Debridement Frequency for Biofilm:**
- **Standard:** Every 1-2 weeks
- **Heavy biofilm:** Weekly until controlled
- **Adjunctive:** Between sharp debridement, use gentle methods

### Advanced Debridement Techniques

**Low-Frequency Ultrasonic Debridement:**
- **Mechanism:** Cavitation separates tissue planes
- **Frequency:** 22.5-40 kHz
- **Selectivity:** Can adjust for more/ less aggressive
- **Advantages:**
  - Relatively painless (topical analgesia only)
  - Selective (separates necrotic from viable)
  - Simultaneous irrigation and debridement
  - Can be used bedside
- **Indications:**
  - Biofilm-associated wounds
  - Contraindications to sharp debridement
  - Sensitive areas (face, hands)

**Monofilament Fiber Debridement (Debrisoft):**
- **Mechanism:** Polyfiber pad mechanically removes debris
- **Selectivity:** Does not harm viable tissue
- **Technique:**
  - Wet pad, gently wipe wound surface
  - Removes biofilm, slough, debris
  - Pain-free, can be used by patients
- **Frequency:** Can be used daily

**Plasma-Mediated Debridement:**
- **Mechanism:** Cold atmospheric plasma generates reactive species
- **Effects:**
  - Antimicrobial (disrupts bacterial membranes)
  - Promotes angiogenesis
  - Enhances granulation
- **Status:** Emerging technology, limited availability

**Laser Debridement:**
- **Types:** CO2, Erbium:YAG
- **Mechanism:** Ablates tissue with precision
- **Advantages:** Precise, hemostatic
- **Disadvantages:** Expensive, limited availability

### Molecular-Level Wound Cleansing

**Antiseptic Selection - Evidence-Based:**

**Polyhexamethylene Biguanide (PHMB):**
- **Spectrum:** Broad (Gram+, Gram-, fungi, some viruses)
- **Cytotoxicity:** Low (safe for fibroblasts at 0.1-0.2%)
- **Resistance:** Rare, no cross-resistance
- **Products:** Kerlix AMD, PolyMem Silver, PHMB gauze
- **Indications:** Colonized/infected wounds, biofilm

**Cadexomer Iodine:**
- **Formulation:** Iodine in starch microbeads
- **Release:** Sustained as exudate absorbed
- **Advantages:**
  - Desloughs (dries, then iodine released)
  - Antimicrobial while maintaining moisture balance
  - Low systemic absorption
  - Minimal pain on application
- **Indications:** Sloughy wounds, infected wounds
- **Contraindications:** Iodine allergy, thyroid disorders, pregnancy, lactation

**Silver Dressings:**
- **Forms:** Nanocrystalline (most effective), ionic, metallic
- **Mechanism:** Multiple (membrane disruption, DNA binding, enzyme inhibition)
- **Spectrum:** Broad, including MRSA, VRE
- **Resistance:** Documented but uncommon
- **Duration:** Limited (silver becomes inactivated)
- **Indications:** Infected/colonized wounds, burns
- **Contraindications:** Argiria risk with prolonged use (rare)

**Medical-Grade Honey (Medihoney):**
- **Mechanism:**
  - High osmolarity (draws fluid)
  - Low pH (acidic)
  - Hydrogen peroxide generation
  - MGO (methylglyoxal) - antibacterial
  - Bee defensin-1
- **Spectrum:** Broad (including biofilm)
- **Advantages:**
  - Autolytic debridement + antimicrobial
  - Reduces odor
  - Can be used long-term
- **Contraindications:** Honey allergy, severe exudate

**Dialkylcarbamoyl Chloride (DACC):**
- **Mechanism:** Hydrophobic binding of bacteria
- **Spectrum:** Physical removal, no resistance
- **Products:** Cutimed Sorbact
- **Indications:** Colonized wounds, prevention

### Combination Debridement Approaches

**Sequential Debridement:**
1. **Initial:** Sharp debridement to remove bulk necrotic tissue
2. **Interim:** Enzymatic or autolytic for remaining tissue
3. **Maintenance:** Regular mechanical methods

**Concurrent Approaches:**
- **Sharp + enzymatic:** Sharp for bulk, enzymatic for residual
- **Surgical + negative pressure:** After debridement, NPWT for exudate and biofilm control
- **Larval + compression:** For venous ulcers with necrotic tissue

### Pain Management in Debridement

**Pre-Emptive Analgesia:**
- **Topical:** Lidocaine 4% cream (apply 30 minutes prior)
- **Local:** Field block with lidocaine ± epinephrine
- **Regional:** For extensive procedures
- **General:** Operating room debridement

**Non-Pharmacologic Adjuncts:**
- **Cold therapy:** Vasoconstriction, anesthesia
- **Distraction:** Music, conversation
- **Relaxation:** Breathing techniques
- **Guided imagery:** For anticipatory anxiety

### Special Populations and Considerations

**Anticoagulated Patients:**
- Mechanical or enzymatic debridement preferred
- If sharp needed: Coagulation correction (if possible)
- Have hemostatic agents available

**Immunocompromised:**
- Lower threshold for debridement (reduced immune reserve)
- More aggressive infection surveillance
- Consider prophylactic antimicrobials after debridement

**Vascular Insufficiency:**
- **Arterial:** Revascularize before extensive debridement
- **Venous:** Compression after debridement
- **Diabetic:** Offloading concurrent with debridement

**Palliative Care:**
- Goals shift from healing to comfort
- Autolytic or enzymatic preferred
- Less aggressive approaches
- Odor control priority

### Evidence-Based Practice Guidelines

**Debridement for Specific Wound Types:**

| Wound Type | Recommended Debridement | Frequency |
|------------|------------------------|-----------|
| **Diabetic foot ulcer** | Sharp (scalpel) | Weekly |
| **Venous ulcer** | Slough removal, conservative | PRN |
| **Pressure ulcer** | Remove non-viable tissue | PRN, stable eschar on heels |
| **Arterial ulcer** | After revascularization, gentle | Weekly |
| **Necrotizing infection** | Surgical, emergent | STAT, repeat in OR |
| **Burn (deep)** | Early excision | Within 72 hours |
| **Biofilm-associated** | Serial disruption | 1-2 weeks |

**Contraindications to Debridement:**
1. **Stable heel eschar** (dry, adherent, no signs of infection)
2. **Malignancy in wound** (biopsy first, debride after diagnosis)
3. **Untreated coagulopathy** (correct first)
4. **Critical limb ischemia** (revascularize first)
5. **Exposed vital structures** (protect, avoid damage)

**Documentation Requirements:**
- Pre-debridement assessment (size, tissue type)
- Debridement method and extent
- Anesthesia/analgesia used
- Post-debridement appearance
- Patient tolerance/pain level
- Culture/biopsy if indicated`,
      keyTerms: [
        { term: 'biofilm', definition: 'Structured microbial community encased in EPS matrix; up to 1000x more antibiotic resistant than planktonic bacteria' },
        { term: 'EPS', definition: 'Extracellular polymeric substance; matrix of polysaccharides, proteins, and DNA protecting biofilm bacteria' },
        { term: 'PHMB', definition: 'Polyhexamethylene biguanide; broad-spectrum antiseptic with low cytotoxicity for wound use' },
        { term: 'cadexomer iodine', definition: 'Iodine-containing starch beads that provide sustained iodine release while absorbing exudate' },
        { term: 'MGO', definition: 'Methylglyoxal; antibacterial compound in medical-grade honey (Manuka) responsible for activity' },
        { term: 'cavitation', definition: 'Formation and collapse of bubbles in liquid by ultrasound; used for tissue separation in ultrasonic debridement' },
        { term: 'DACC', definition: 'Dialkylcarbamoyl chloride; hydrophobic coating that physically binds and removes bacteria' },
      ],
      clinicalNotes: `Debridement Clinical Pearls:

1. **Biofilm is present in >60% of chronic wounds**
   - Assume biofilm if wound not improved in 2-4 weeks
   - Serial debridement every 1-2 weeks needed
   - Combine with topical antimicrobials

2. **Choosing antiseptics:**
   - Most wounds: Mechanical cleansing with saline sufficient
   - Colonized wounds: Consider PHMB, cadexomer iodine
   - Infected wounds: Add systemic antibiotics
   - Stop antiseptics once infection controlled (cytotoxicity)

3. **Pain expectations:**
   - Autolytic: Painless
   - Enzymatic: Usually painless
   - Ultrasonic: Minimal pain
   - Mechanical (wet-to-dry): Can be painful
   - Sharp: Painful - requires anesthesia

4. **When to stop debridement:**
   - No necrotic tissue remaining
   - 100% granulation tissue
   - Wound ready for closure or coverage
   - Goals change (palliative care)`,
    },

    5: {
      level: 5,
      summary: 'State-of-the-art wound bed preparation integrates biofilm disruption science, molecular antiseptics, combination debridement strategies, and emerging technologies to optimize healing outcomes in complex and chronic wounds.',
      explanation: `## Advanced Wound Bed Preparation and Molecular Therapeutics

### Biofilm Pathophysiology and Targeted Therapy

**Biofilm Life Cycle:**
1. **Attachment (minutes-hours):** Reversible adhesion to surface
2. **Irreversible attachment (hours):** Pili, EPS production begins
3. **Maturation (days):** Tower structures, water channels, phenotypic differentiation
4 **Dispersion:** Cells detach to colonize new areas

**Biofilm-Specific Therapeutics:**

**Quorum Sensing Inhibitors:**
- **Mechanism:** Block bacterial communication without killing
- **Agents:** Furanones, garlic extract, patulin
- **Advantages:** Less selective pressure, disrupts virulence
- **Status:** Research phase, clinical trials ongoing

**Enzymatic Biofilm Disruption:**
- **DNase:** Degrades extracellular DNA in EPS matrix
- **Dispersin B:** Degrades PNAG (poly-N-acetylglucosamine)
- **Glycoside hydrolases:** Degrade polysaccharide components
- **Combination approaches:** Enzyme + antimicrobial synergy

**Anti-biofilm Dressings:**
- **Cadexomer iodine:** Physical disruption + sustained antimicrobial
- **PHMB + surfactants:** Physical and chemical attack
- **Medical honey:** Osmotic + enzymatic + antimicrobial
- **Silver with chelating agents:** Enhances penetration

### Molecular Antiseptics - Advanced Concepts

**Mechanism Comparisons:**

| Agent | Primary Mechanism | Resistance Risk | Cytotoxicity | Clinical Role |
|-------|-------------------|-----------------|--------------|---------------|
| **PHMB** | Membrane disruption | Low | Low-Medium | First-line antiseptic |
| **Cadexomer iodine** | Multiple (oxidation) | Very low | Low | Sloughy, infected wounds |
| **Silver (nanocrystalline)** | Membrane, DNA, enzymes | Low | Low | Infected wounds, burns |
| **Medical honey** | Osmotic, H2O2, MGO | None | None | Chronic wounds, odor |
| **Acetic acid** | pH disruption, membrane | Low | Medium | Pseudomonas-specific |
| **Dakin's** | Oxidation (HOCl) | Low | High | Limited, short contact |
| **Octenidine** | Membrane disruption | Very low | Low | Europe, not FDA |

**Synergistic Approaches:**
- **Silver + PHMB:** Broader spectrum, multiple mechanisms
- **Iodine + saline:** Dilution reduces cytotoxicity while maintaining efficacy
- **Honey + silver:** Osmotic + ionic antimicrobial action

### Emerging Debridement Technologies

**Cryo-Deciduation:**
- **Mechanism:** Localized freezing causes necrosis separation
- **Technique:** Spray cooling, followed by mechanical removal
- **Indications:** Thin eschar, fragile patients
- **Status:** Limited availability

**Radiofrequency Ablation:**
- **Mechanism:** RF energy denatures and vaporizes tissue
- **Advantages:** Precise, hemostatic
- **Indications:** Vascular lesions, selected tumors

**Plasma Medicine:**
- **Cold atmospheric plasma (CAP):**
  - Generates reactive oxygen and nitrogen species (RONS)
  - Antimicrobial without thermal damage
  - Stimulates angiogenesis and wound healing
  - Devices: kINPen, PlasmaDerm
- **Evidence:** Growing European literature, FDA approval pending

**Ozone Therapy:**
- **Mechanism:** Oxidative stress to microorganisms
- **Forms:** Topical oil, insufflation, ozonated water
- **Evidence:** Limited, conflicting study results
- **Caution:** Oxidative stress to host cells

**Negative Pressure with Instillation (NPWTi-d):**
- **Technique:** Cyclic NPWT with solution instillation
- **Solutions:** Saline, antiseptics (PHMB, Dakin's), antibiotics
- **Cycle:** Hold 10-20 minutes, then NPWT for 2-4 hours
- **Indications:** Infected wounds, cavities, biofilm-associated wounds
- **Evidence:** Improved outcomes in infected vs. standard NPWT

### Enzymatic Debridement - Next Generation

**Current Limitations:**
- Collagenase (Santyl): Only one FDA-approved enzymatic debrider in US
- Slow (days to weeks)
- Requires prescription
- Cost

**Emerging Enzymes:**
- **Bromelain:** Pineapple-derived proteolytic enzymes
  - Evidence: Some studies for burn debridement
  - Status: Research phase
- **Papain formulations:** Improved delivery systems
- **Debriding enzymes from maggots:** Seraticase, chymotrypsin-like enzymes
- **Recombinant enzymes:** Targeted action, reduced immunogenicity

### Stem Cell and Biologic Approaches

**Platelet-Rich Plasma (PRP) Gel:**
- **Mechanism:** Autologous growth factor delivery
- **Debridement adjunct:** Promotes granulation after debridement
- **Evidence:** Mixed, some benefit for chronic wounds
- **Cost:** Expensive, time-consuming

**Amniotic Membrane Products:**
- **dHACM (Dehydrated Human Amnion/Chorion Membrane):**
  - Anti-inflammatory, antimicrobial, pro-healing factors
  - Provides scaffold for healing
  - Promotes angiogenesis and epithelialization
  - Products: Epifix, Grafix, Biovance
- **Evidence:** Improved healing in diabetic foot ulcers

**Cellular and Tissue-Engineered Products:**
- **Apligraf:** Bilayer living skin equivalent (keratinocytes + fibroblasts)
- **Dermagraft:** Fibroblast-seeded scaffold
- **Role:** After debridement, provides coverage for non-healing wounds

### Gene Therapy and Molecular Interventions

**Growth Factor Gene Therapy:**
- **VEGF gene transfer:** Promotes angiogenesis
- **PDGF gene delivery:** Stimulates granulation
- **Status:** Early clinical trials

**RNA-Based Therapies:**
- **miRNA mimics:** Promote healing (miR-21, miR-132)
- **Anti-miRs:** Inhibit detrimental miRNAs (miR-155)
- **siRNA:** Target specific genes (MMPs, inflammatory cytokines)
- **Delivery:** Nanoparticles, hydrogels, direct injection

### Clinical Practice Guidelines Summary

**Society for Advanced Wound Care (SAWC) Consensus:**

1. **All chronic wounds should be assumed to have biofilm**
   - Treat with serial debridement (every 1-2 weeks)
   - Combine with topical antimicrobial

2. **Sharp debridement remains gold standard for rapid results**
   - Weekly for diabetic foot ulcers (strong evidence)
   - Combined with offloading and infection control

3. **Antiseptic selection:**
   - Most wounds: Cleansing with saline sufficient
   - Colonized: PHMB, cadexomer iodine, medical honey
   - Infected: Add systemic antibiotics
   - Duration: Reassess at 2-week intervals

4. **Moist wound healing with exudate management**
   - Balance moisture: moist to touch, not macerated
   - Dressing selection based on exudate amount

5. **Pain management essential**
   - Pre-emptive analgesia before painful debridement
   - Consider topical agents for minor procedures
   - Patient-centered approach to frequency and method

### Future Directions

**Microbiome-Based Therapies:**
- **Probiotic application:** Competitive exclusion of pathogens
- **Phage therapy:** Bacteriophages targeting specific pathogens
- **Microbiome transplantation:** Fecal or wound microbiome transfer

**Smart Dressings:**
- **Sensor-integrated:** pH, temperature, bacteria detection
- **Responsive:** Release antimicrobial on demand
- **Point-of-care diagnostics:** Identify pathogens, predict resistance

**Nanotechnology:**
- **Nanoparticle antimicrobials:** Silver, gold, chitosan
- **Targeted delivery:** To biofilm interior
- **Reduced resistance:** Multiple mechanisms simultaneously

**Artificial Intelligence:**
- **Debridement decision support:** Method selection based on wound characteristics
- **Outcome prediction:** Likelihood of healing with specific approaches
- **Personalized treatment:** Based on patient and wound factors`,
      keyTerms: [
        { term: 'quorum sensing', definition: 'Bacterial cell-cell communication mechanism regulating gene expression based on population density' },
        { term: 'PNAG', definition: 'Poly-N-acetylglucosamine; polysaccharide component of biofilm matrix in Staph and other pathogens' },
        { term: 'RONS', definition: 'Reactive oxygen and nitrogen species; mediators of plasma therapy antimicrobial and pro-healing effects' },
        { term: 'dHACM', definition: 'Dehydrated human amnion/chorion membrane; placental tissue product with multiple growth factors' },
        { term: 'NPWTi-d', definition: 'Negative pressure wound therapy with instillation and dwell time; cyclic NPWT with solution delivery' },
        { term: 'phage therapy', definition: 'Use of bacteriophages (viruses that infect bacteria) to treat bacterial infections' },
      ],
      clinicalNotes: `Practice-Changing Evidence:

1. **Biofilm is now recognized as the major barrier to healing in chronic wounds**
   - <60% of chronic wounds contain biofilm
   - Requires recurrent disruption (serial debridement)
   - Single debridement insufficient - biofilm reforms in 24-72 hours

2. **Moist wound healing is foundational**
   - Occlusive dressings outperform dry dressings
   - Desiccation impairs cell migration
   - Balance moisture with exudate management

3. **Antiseptics have renewed interest**
   - Growing antibiotic resistance
   - Improved formulations with lower cytotoxicity
   - PHMB, cadexomer iodine, medical honey have good evidence

4. **Combination therapy is the new standard**
   - Mechanical debridement + antimicrobial
   - Moisture balance + exudate management
   - Systemic + topical approaches as needed

5. **Adjunctive therapies with evidence:**
   - NPWT for complex wounds (strong evidence)
   - HBOT for diabetic foot ulcers (moderate evidence)
   - Electrical stimulation for pressure ulcers (limited evidence)`,
    },
  },

  media: [
    {
      id: 'debridement-methods-comparison',
      type: 'diagram',
      filename: 'debridement-methods.svg',
      title: 'Comparison of Debridement Methods',
      description: 'Pros and cons of different debridement techniques',
    },
    {
      id: 'irrigation-technique',
      type: 'image',
      filename: 'wound-irrigation.jpg',
      title: 'Proper Wound Irrigation Technique',
      description: 'Correct angle and pressure for wound irrigation',
    },
    {
      id: 'biofilm-formation',
      type: 'diagram',
      filename: 'biofilm-lifecycle.svg',
      title: 'Biofilm Formation and Management',
      description: 'Stages of biofilm development and therapeutic interventions',
    },
  ],

  citations: [
    {
      id: 'time-framework-2022',
      type: 'article',
      title: 'TIME for wound bed preparation: An update and review',
      authors: ['Wolcott, R.D.', 'Rumbaugh, K.P.'],
      source: 'Wounds International',
    },
    {
      id: 'biofilm-consensus-2020',
      type: 'article',
      title: 'Biofilm-based wound care: Consensus recommendations',
      source: 'Wound Repair and Regeneration',
    },
    {
      id: 'debridement-guidelines-2023',
      type: 'article',
      title: 'International consensus on debridement: Clinical practice guidelines',
      source: 'Journal of Wound Care',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-basics', targetType: 'topic', relationship: 'related', label: 'Wound Basics' },
    { targetId: 'wound-care-assessment', targetType: 'topic', relationship: 'related', label: 'Wound Assessment' },
    { targetId: 'wound-care-dressing', targetType: 'topic', relationship: 'related', label: 'Dressing Selection' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['wound care', 'debridement', 'wound healing', 'antisepsis', 'biofilm'],
    keywords: ['irrigation', 'enzymatic debridement', 'sharp debridement', 'biofilm', 'antiseptics', 'TIME'],
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

export default woundCleaningContent;
