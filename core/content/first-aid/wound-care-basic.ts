/**
 * Basic Wound Care
 *
 * Comprehensive guide to wound assessment, cleaning, dressing, and healing,
 * covering lacerations, abrasions, puncture wounds, and avulsions.
 */

import { EducationalContent } from '../types';

export const woundCareBasicContent: EducationalContent = {
  id: 'topic-wound-care-basic',
  type: 'topic',
  name: 'Basic Wound Care',
  nameEs: 'Cuidado Basico de Heridas',
  alternateNames: ['Wound Management', 'Wound First Aid', 'Laceration Care'],

  levels: {
    1: {
      level: 1,
      summary: 'When you get a cut or scrape, cleaning it properly and covering it with a bandage helps your body heal faster and prevents germs from causing an infection.',
      explanation: `Everyone gets cuts and scrapes from time to time. Your body is amazing at healing itself, but you can help it along by taking care of wounds the right way.

**Think of your skin like a fence around a house.** The fence keeps bad things out. When you get a cut, it is like a hole in the fence — germs can get in and cause problems. Cleaning and covering the wound is like patching the hole until the fence repairs itself.

**Types of wounds you might get:**
- **Cut (laceration)**: A tear in the skin, like from a knife or sharp edge
- **Scrape (abrasion)**: When skin is rubbed off, like from falling on pavement
- **Puncture**: A small, deep hole, like from stepping on a nail
- **Bruise (contusion)**: Bleeding under the skin from a bump — the skin is not broken

**How to take care of a wound — step by step:**

1. **Wash your hands** before touching the wound. Use soap and water or hand sanitizer.
2. **Stop the bleeding.** Press a clean cloth firmly on the wound. Most small cuts stop bleeding in a few minutes.
3. **Clean the wound.** Hold it under clean running water for several minutes. You can use mild soap around the wound, but try not to get soap directly inside it.
4. **Remove debris.** If you see dirt or gravel in the wound, gently remove it. If something is deeply stuck, leave it for a doctor.
5. **Apply antibiotic ointment.** A thin layer of antibiotic ointment helps prevent infection.
6. **Cover the wound.** Use a bandage or adhesive strip to keep the wound clean and protected.
7. **Change the bandage daily** or whenever it gets wet or dirty.

**Signs that a wound needs a doctor:**
- Bleeding that does not stop after 10 minutes of pressure
- A deep cut where you can see fat, muscle, or bone
- A wound that is very dirty and you cannot clean it
- A bite from an animal or a person
- Redness, swelling, warmth, or pus around the wound after a day or two (signs of infection)
- You have not had a tetanus shot in the last 5 years

**What NOT to do:**
- Do not use hydrogen peroxide or rubbing alcohol on the wound — they damage healing tissue
- Do not pick at scabs — they are nature's bandage
- Do not use butter, toothpaste, or other home remedies on cuts`,
      keyTerms: [
        { term: 'wound', definition: 'Any break or opening in the skin caused by an injury' },
        { term: 'infection', definition: 'When germs get into a wound and cause redness, swelling, pain, and sometimes pus' },
        { term: 'laceration', definition: 'A cut or tear in the skin, usually caused by something sharp' },
        { term: 'abrasion', definition: 'A scrape where the top layer of skin is rubbed away, like a skinned knee' },
        { term: 'tetanus', definition: 'A serious infection caused by bacteria in dirt that can get into wounds; prevented by vaccination' },
        { term: 'antibiotic ointment', definition: 'A cream that kills germs on a wound to help prevent infection' },
      ],
      analogies: [
        'Your skin is like a fence that keeps germs out — a wound is a hole in the fence that needs patching.',
        'A scab is like a natural bandage that your body makes to protect the wound while it heals underneath.',
        'Cleaning a wound is like washing dirt off a scraped apple — you want to get rid of anything that does not belong before covering it up.',
      ],
      patientCounselingPoints: [
        'Always wash your hands before and after caring for a wound to prevent spreading germs.',
        'Do not use hydrogen peroxide or alcohol on wounds — plain water is the best cleaner.',
        'Change bandages daily and any time they become wet or dirty.',
        'Watch for signs of infection: increasing redness, warmth, swelling, or pus.',
        'Keep your tetanus vaccination up to date — adults need a booster every 10 years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Proper wound care involves controlling bleeding, thorough irrigation, debris removal, appropriate dressing selection, and monitoring for signs of infection. Understanding wound types helps determine which injuries require professional medical evaluation.',
      explanation: `## Basic Wound Care: A Complete Guide

### Wound Classification

Understanding the type of wound helps determine the appropriate care:

**By Mechanism:**
- **Laceration**: Caused by a sharp object; clean edges heal better than jagged ones
- **Abrasion**: Friction injury removing the epidermis (superficial) to dermis (deeper)
- **Puncture wound**: Small entry point but can be deep; high infection risk because debris is pushed deep into tissue
- **Avulsion**: A flap of skin or tissue partially or completely torn away
- **Incision**: A clean cut from a very sharp object (knife, glass)
- **Contusion/bruise**: Closed wound with bleeding under the skin

**By Depth:**
- **Superficial**: Only the epidermis is affected (top layer of skin)
- **Partial thickness**: Extends into the dermis; may bleed and is painful
- **Full thickness**: Through the dermis into subcutaneous tissue, muscle, or bone; may require surgical repair

### Step-by-Step Wound Care

**1. Scene Safety and Personal Protection**
- Wear gloves if available (protects both you and the injured person)
- Assess the situation for ongoing danger

**2. Hemorrhage Control**
- Apply direct pressure with a clean cloth or gauze
- Elevate the injured area above the level of the heart if possible
- Most bleeding stops within 5-10 minutes of steady pressure
- Do not repeatedly lift the cloth to check — this disrupts clot formation

**3. Wound Irrigation**
- Use clean running water at moderate pressure
- Irrigate for at least 5 minutes for contaminated wounds
- Tap water is acceptable and has been shown to be as effective as sterile saline for most wounds
- The volume of irrigant is more important than the type

**4. Wound Inspection**
- Look for embedded debris, foreign bodies, and wound depth
- Assess for tendon, nerve, or blood vessel damage (can the person move and feel the area?)
- Check the wound edges — smooth edges heal better than ragged ones

**5. Wound Closure**
- Small, clean lacerations may be closed with adhesive strips (butterfly bandages) or skin glue
- Large, deep, or complex lacerations require medical evaluation for possible sutures or staples
- Wounds more than 6-8 hours old ("golden period") have a higher infection risk if closed primarily

**6. Dressing Selection**
- **Adhesive bandage**: Small cuts and abrasions
- **Gauze and tape**: Larger wounds, allows for packing
- **Non-adherent dressings**: Prevent sticking to the wound bed (important for abrasions and burns)
- **Transparent film dressings**: Keep moisture in, allow visual monitoring

**7. Ongoing Care**
- Change dressings daily or when soiled
- Apply a thin layer of antibiotic ointment with each dressing change
- Keep the wound moist — moist wounds heal 50% faster than dry wounds
- Watch for infection signs: increasing pain, redness spreading beyond wound edges, warmth, swelling, purulent drainage, fever

### Tetanus Prophylaxis
- Clean minor wounds: Td/Tdap if more than 10 years since last dose
- Contaminated or major wounds: Td/Tdap if more than 5 years since last dose
- Unknown vaccination history: Td/Tdap plus tetanus immune globulin (TIG) for contaminated wounds

### When to Seek Medical Care
- Bleeding that does not stop after 10-15 minutes of direct pressure
- Wounds with visible fat, muscle, tendon, or bone
- Wounds that gape open and edges do not stay together
- Animal or human bites
- Puncture wounds (especially through shoes — risk of Pseudomonas)
- Signs of infection
- Embedded foreign bodies that cannot be easily removed
- Wounds on the face, hands, feet, or over joints`,
      keyTerms: [
        { term: 'irrigation', definition: 'The process of washing a wound with a stream of water or saline solution to remove dirt, debris, and bacteria' },
        { term: 'hemorrhage', definition: 'Significant or uncontrolled bleeding from a damaged blood vessel' },
        { term: 'avulsion', definition: 'A wound where a section of skin or tissue is partially or completely torn away from the body' },
        { term: 'tetanus prophylaxis', definition: 'Preventive treatment against tetanus infection, including vaccination boosters and immunoglobulin, given based on wound type and vaccination history' },
        { term: 'golden period', definition: 'The time window (approximately 6-8 hours after injury) during which a wound can be safely closed with sutures; beyond this time, infection risk increases significantly' },
        { term: 'purulent drainage', definition: 'Thick, often yellowish or greenish fluid (pus) coming from a wound, indicating infection' },
      ],
      patientCounselingPoints: [
        'Tap water is perfectly fine for cleaning wounds — you do not need sterile saline at home.',
        'Keep wounds moist with ointment and a bandage; moist wounds heal faster than dry, uncovered ones.',
        'If a wound is deep or gaping, it may need stitches — seek care within 6 hours for the best outcome.',
        'Animal bites always need medical evaluation due to high infection risk and possible need for rabies prophylaxis.',
        'Monitor your wound daily for signs of infection and contact a healthcare provider if you notice spreading redness or pus.',
      ],
    },
    3: {
      level: 3,
      summary: 'Wound management integrates knowledge of skin anatomy, wound healing physiology (hemostasis, inflammation, proliferation, remodeling), evidence-based irrigation and closure techniques, and risk stratification for infection, tetanus, and rabies. Understanding these principles enables appropriate triage of wounds for home care versus medical intervention.',
      explanation: `## Wound Care: Intermediate Depth

### Skin Anatomy Review

The skin is the body's largest organ and primary barrier to the external environment:
- **Epidermis**: Outermost layer; avascular, keratinized stratified squamous epithelium. Regenerates from basal layer stem cells.
- **Dermis**: Contains collagen, elastin, blood vessels, nerve endings, hair follicles, and glands. Divided into papillary (superficial) and reticular (deep) layers.
- **Hypodermis (subcutaneous tissue)**: Fat and connective tissue providing insulation and cushioning.

### Wound Healing Phases

**Phase 1 — Hemostasis (seconds to minutes):**
- Vascular spasm reduces blood flow
- Platelet plug forms at the injury site
- Coagulation cascade generates fibrin mesh to stabilize the clot
- This phase is the biological basis for applying direct pressure

**Phase 2 — Inflammation (hours to days):**
- Vasodilation and increased vascular permeability cause redness, warmth, swelling, pain (cardinal signs of inflammation)
- Neutrophils arrive within hours to phagocytose bacteria and debris
- Macrophages arrive at 24-48 hours and orchestrate the transition to proliferation
- This phase is normal and necessary — suppressing it (e.g., with NSAIDs) may slow healing

**Phase 3 — Proliferation (days to weeks):**
- Angiogenesis: New blood vessels grow into the wound bed
- Fibroplasia: Fibroblasts deposit collagen and form granulation tissue (beefy red, granular appearance)
- Epithelialization: Keratinocytes migrate from wound edges and skin appendages to resurface the wound
- Wound contraction: Myofibroblasts pull wound edges together

**Phase 4 — Remodeling (weeks to months/years):**
- Type III collagen is gradually replaced by Type I collagen
- Tensile strength increases but only reaches approximately 80% of original strength
- Scar maturation: Scars initially appear red and raised, then flatten and fade over 6-18 months

### Evidence-Based Irrigation

The FLOW (Fluid Lavage of Open Wounds) trial and subsequent studies established:
- **Pressure**: Low-pressure irrigation (gravity flow or bulb syringe) is as effective as high-pressure irrigation for reducing infection in open fractures
- **Volume**: More is generally better; 50-100 mL per centimeter of wound length is a common guideline
- **Solution**: Tap water is equivalent to sterile saline for wound irrigation in most settings. Antiseptic solutions (povidone-iodine, chlorhexidine) are cytotoxic to fibroblasts at standard concentrations and are not recommended for wound bed irrigation.

### Wound Closure Methods

**Primary closure** (within the golden period):
- **Sutures**: Most versatile; absorbable for deep layers, non-absorbable for skin
- **Staples**: Faster than sutures for scalp and trunk wounds
- **Tissue adhesive (cyanoacrylate/Dermabond)**: Suitable for clean, linear, low-tension wounds. Not for hands, joints, or hair-bearing areas.
- **Adhesive strips (Steri-Strips)**: Low-tension, superficial wounds

**Secondary intention**: Wound heals by granulation and contraction without closure. Used for contaminated wounds, abscesses, and wounds presenting beyond the golden period.

**Delayed primary closure** (tertiary intention): Wound is left open for 3-5 days for observation and irrigation, then closed if no infection develops. Used for contaminated wounds when closure is desired.

### Factors Affecting Wound Healing
- **Location**: Facial wounds heal faster (excellent blood supply); lower extremity wounds heal slower
- **Patient factors**: Diabetes, peripheral vascular disease, immunosuppression, malnutrition (especially protein and vitamin C deficiency), smoking, chronic steroid use
- **Wound factors**: Contamination, foreign bodies, tension, infection, poor blood supply, radiation exposure
- **Medications**: Anticoagulants increase bleeding risk; immunosuppressants delay healing; some evidence that NSAIDs impair early inflammatory phase

### Bite Wound Management
- **Dog bites**: Copious irrigation; primary closure is acceptable for facial bites (excellent blood supply); extremity and hand bites are often left open. Amoxicillin-clavulanate is the prophylactic antibiotic of choice.
- **Cat bites**: High infection rate (>50%) due to deep puncture wounds. Require antibiotics and close follow-up.
- **Human bites**: High infection risk including Eikenella corrodens. "Fight bite" (closed-fist injury) over MCP joints requires surgical exploration.
- **Rabies assessment**: Based on species, geographic prevalence, vaccination status of the animal, and circumstances of the bite.`,
      keyTerms: [
        { term: 'hemostasis', definition: 'The process of blood clot formation that stops bleeding, involving vascular spasm, platelet plug formation, and the coagulation cascade' },
        { term: 'granulation tissue', definition: 'New connective tissue with a beefy red, granular appearance that fills a wound during the proliferative phase of healing, composed of new capillaries and fibroblasts' },
        { term: 'epithelialization', definition: 'The process by which keratinocytes migrate from wound edges and skin appendages to create a new epithelial surface over a wound' },
        { term: 'primary closure', definition: 'Immediate wound closure with sutures, staples, or adhesive within the golden period, achieving the fastest healing with the least scarring' },
        { term: 'secondary intention', definition: 'A healing method where the wound is left open to heal by granulation, contraction, and epithelialization; used for contaminated or older wounds' },
        { term: 'angiogenesis', definition: 'The formation of new blood vessels from pre-existing vessels, a critical process during wound healing that delivers oxygen and nutrients to the regenerating tissue' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced wound management encompasses the molecular biology of healing, evidence-based approaches to complex wounds, suture material science, infection risk stratification models, and management of complications including wound dehiscence, hematoma, and chronic non-healing wounds.',
      explanation: `## Wound Care: Graduate-Level Detail

### Molecular Biology of Wound Healing

**Hemostasis — Signaling Cascade:**
Tissue injury exposes subendothelial collagen, triggering platelet adhesion via von Willebrand factor (vWF) and glycoprotein Ib (GPIb). Activated platelets release alpha-granules containing PDGF, TGF-beta, and VEGF, which initiate the inflammatory and proliferative cascades. The coagulation cascade (both intrinsic and extrinsic pathways) converges on Factor Xa, converting prothrombin to thrombin, which cleaves fibrinogen to fibrin.

**Inflammatory Phase — Cellular Orchestration:**
- Neutrophils (first responders, peak at 24 hours) phagocytose bacteria and produce reactive oxygen species (ROS) and matrix metalloproteinases (MMPs) to debride devitalized tissue.
- Macrophages (arrive at 48-72 hours) are the "conductor" cells — they produce cytokines (IL-1, IL-6, TNF-alpha) during the early inflammatory phase, then transition to a reparative phenotype (M2 macrophages) that secretes TGF-beta, VEGF, and PDGF to drive proliferation.
- The inflammatory phase is critical: Macrophage-depleted wound models show severely impaired healing.

**Proliferative Phase — Molecular Drivers:**
- VEGF (vascular endothelial growth factor) is the primary driver of angiogenesis
- FGF (fibroblast growth factor) promotes fibroblast migration and proliferation
- TGF-beta stimulates collagen synthesis and myofibroblast differentiation
- Collagen synthesis: Fibroblasts produce primarily Type III collagen during early healing, which is gradually replaced by Type I collagen during remodeling

**Remodeling Phase — Matrix Turnover:**
- MMPs (matrix metalloproteinases) and TIMPs (tissue inhibitors of metalloproteinases) regulate controlled degradation and remodeling of the extracellular matrix
- Imbalance favoring MMPs leads to chronic wounds; imbalance favoring TIMPs leads to hypertrophic scarring
- Scar tensile strength: 3 weeks = 20%, 3 months = 50%, 1 year = 80% of original tissue strength

### Suture Material Science

**Absorbable Sutures:**
| Material | Tensile Strength Retention | Absorption Time | Use |
|----------|---------------------------|-----------------|-----|
| Plain gut | 7-10 days | 70 days | Oral mucosa, rapidly healing tissue |
| Chromic gut | 10-14 days | 90 days | Similar, slightly longer duration |
| Polyglactin (Vicryl) | 50% at 2 weeks | 56-70 days | Deep dermal, subcutaneous |
| Poliglecaprone (Monocryl) | 50% at 1 week | 91-119 days | Subcuticular closure |
| Polydioxanone (PDS) | 50% at 4 weeks | 180 days | Fascia, slow-healing tissue |

**Non-absorbable Sutures:**
| Material | Characteristics | Use |
|----------|----------------|-----|
| Nylon (Ethilon) | Monofilament, low tissue reactivity | Skin closure |
| Polypropylene (Prolene) | Monofilament, very low reactivity | Vascular, skin |
| Silk | Braided, easy handling, high reactivity | Historical preference, declining use |

### Complex Wound Scenarios

**High-Pressure Injection Injuries:**
- Appear benign externally but cause massive subcutaneous tissue destruction
- Paint, grease, and solvents cause chemical necrosis along tissue planes
- Require emergent surgical exploration and debridement regardless of external appearance
- Amputation rates: 30-50% for finger injection injuries

**Crush Injuries:**
- Risk of rhabdomyolysis and compartment syndrome
- Fasciotomy indicated when compartment pressures exceed 30 mmHg or within 30 mmHg of diastolic pressure
- Aggressive IV hydration to prevent renal failure from myoglobinuria

**Pretibial Lacerations (Elderly):**
- Thin, fragile skin with poor blood supply
- Avoid sutures (they tear through tissue); use adhesive strips or tissue adhesive
- Non-adherent dressing with gentle compression
- Healing may take weeks to months

### Wound Infection Management

**Risk Stratification:**
- Low risk (<2% infection): Clean, sharp, facial wounds closed within 6 hours
- Moderate risk (2-10%): Extremity wounds, contaminated wounds closed within 6-12 hours
- High risk (>10%): Crush injuries, bite wounds, puncture wounds, immunocompromised patients, wounds closed after 12 hours

**Prophylactic Antibiotics:**
Indicated only for:
- Bite wounds (human and animal)
- Open fractures
- Heavily contaminated wounds
- Immunocompromised patients
- Through-and-through oral lacerations
- NOT indicated for routine clean or clean-contaminated wounds

### Chronic Wound Considerations
- Diabetic ulcers, venous stasis ulcers, and pressure injuries represent failures of normal healing
- Assessment includes vascular status (ABI for lower extremity wounds), glycemic control, nutritional status, and infection evaluation
- Debridement of devitalized tissue is essential to convert a chronic wound to an acute wound
- Advanced therapies: Negative pressure wound therapy (wound VAC), growth factor application, bioengineered skin substitutes`,
      keyTerms: [
        { term: 'matrix metalloproteinases (MMPs)', definition: 'A family of zinc-dependent endopeptidases that degrade extracellular matrix components; essential for wound remodeling but overexpressed in chronic non-healing wounds' },
        { term: 'VEGF', definition: 'Vascular Endothelial Growth Factor — the primary signaling molecule driving angiogenesis during wound healing, stimulating endothelial cell proliferation and new vessel formation' },
        { term: 'wound dehiscence', definition: 'Partial or complete reopening of a previously closed wound, often due to infection, excessive tension, poor nutrition, or premature suture removal' },
        { term: 'rhabdomyolysis', definition: 'Breakdown of skeletal muscle releasing intracellular contents (myoglobin, creatine kinase, potassium) into the bloodstream, potentially causing acute kidney injury from myoglobin tubular obstruction' },
        { term: 'compartment syndrome', definition: 'A condition where increased pressure within a closed fascial compartment compromises blood flow and tissue perfusion, requiring emergent fasciotomy to prevent permanent ischemic injury' },
        { term: 'negative pressure wound therapy', definition: 'A wound management technique using controlled sub-atmospheric pressure applied via a sealed dressing to promote granulation tissue formation, reduce edema, and remove wound exudate' },
      ],
      clinicalNotes: `Clinical pearls for wound management:

1. **Irrigation over antiseptics**: Copious irrigation with tap water or saline is more effective at reducing wound infection than antiseptic solutions, which are cytotoxic to healing tissue.

2. **Moist wound healing**: Occlusive and semi-occlusive dressings maintain a moist wound environment that accelerates healing by up to 50% compared to dry dressings. The historical practice of "letting it air out" is not evidence-based.

3. **Suture timing**: Face — remove at 3-5 days; scalp — 7-10 days; trunk — 7-10 days; extremities — 10-14 days; over joints — 14 days. Consider adhesive strip reinforcement after early removal to prevent dehiscence.

4. **Tetanus-prone wounds**: Puncture wounds, crush injuries, burns, contaminated wounds, and wounds with devitalized tissue require tetanus prophylaxis if last Td/Tdap was more than 5 years ago.

5. **High-pressure injection injuries**: Never dismiss these based on external appearance. Even a tiny puncture from a paint gun can require amputation if not emergently debrided.

6. **Antibiotic prophylaxis**: Routine prophylaxis for clean wounds does not reduce infection rates and contributes to antibiotic resistance. Reserve for high-risk scenarios only.`,
    },
    5: {
      level: 5,
      summary: 'Contemporary wound management incorporates advances in regenerative medicine, biofilm-targeted therapies, point-of-care diagnostics, and individualized approaches based on wound genomics and proteomics. Evidence from large trials (FLOW, LIDO) continues to refine best practices in irrigation, closure, and infection prevention.',
      explanation: `## Wound Care: Professional-Level Evidence Review

### Current Evidence Base

**The FLOW Trial (Fluid Lavage of Open Wounds, 2015):**
This landmark multicenter RCT (n=2,447) of open fracture wound irrigation found:
- Low-pressure irrigation was superior to high-pressure irrigation (lower reoperation rates)
- Soap (castile soap) was equivalent to normal saline as irrigant
- High-pressure irrigation may cause tissue damage and drive bacteria deeper into tissue planes
- This trial shifted practice from the long-held belief that "the solution to pollution is dilution under pressure"

**Tap Water vs. Sterile Saline (Cochrane Reviews):**
- Multiple Cochrane reviews have found no significant difference in infection rates between tap water and sterile saline for wound irrigation
- A 2022 update confirmed that clean tap water is safe and effective for acute wound irrigation in both adults and children
- This has significant cost and accessibility implications, particularly in resource-limited settings

**Tissue Adhesive Evidence:**
- The LACERATE trial and subsequent meta-analyses show that tissue adhesive (octyl-2-cyanoacrylate) produces equivalent cosmetic outcomes to sutures for appropriate wounds (clean, linear, low-tension)
- Faster closure time, no need for suture removal, lower patient anxiety
- Limitations: Not suitable for wounds under tension, over joints, or in areas with significant moisture

### Biofilm Science and Wound Infection

**Biofilm Paradigm:**
Chronic wounds harbor bacterial biofilms — structured communities of bacteria embedded in a self-produced extracellular polymeric substance (EPS) matrix:
- Biofilms are present in approximately 60% of chronic wounds and 6% of acute wounds
- Bacteria within biofilms are 100-1000x more resistant to antibiotics than planktonic bacteria
- Biofilm reformation occurs within 24 hours of debridement, necessitating ongoing management

**Biofilm-Targeted Strategies:**
- Sharp debridement: Physical removal of biofilm-containing tissue
- Surfactant-based wound cleansers: Disrupt EPS matrix
- Antimicrobial dressings: Silver (ionic), cadexomer iodine, PHMB (polyhexamethylene biguanide)
- Combination approaches: "Wound hygiene" protocol — cleanse, debride, refashion edges, dress with antimicrobial

### Regenerative Medicine in Wound Care

**Growth Factor Therapy:**
- Becaplermin (recombinant PDGF-BB): FDA-approved for diabetic foot ulcers. The REGRANEX trials showed improved healing rates but with a black box warning for malignancy risk.
- PRP (Platelet-Rich Plasma): Autologous concentrate containing supraphysiological growth factor concentrations. Meta-analyses suggest benefit for chronic wounds but evidence quality is moderate.

**Bioengineered Skin Substitutes:**
- **Dermal substitutes** (Integra, AlloDerm): Provide a collagen scaffold for cellular ingrowth. Used for full-thickness wounds where primary closure is not possible.
- **Epidermal substitutes** (Epicel): Cultured autologous keratinocytes. Primarily used for extensive burns.
- **Bilayer substitutes** (Apligraf): Contains both fibroblasts and keratinocytes. Indicated for venous leg ulcers and diabetic foot ulcers.

**Negative Pressure Wound Therapy (NPWT):**
- Mechanism: Sub-atmospheric pressure (-75 to -125 mmHg) promotes wound healing through macro-deformation (wound contraction), micro-deformation (cellular stretch stimulating proliferation), and fluid removal.
- Evidence: The WOLLF trial (2018) for open fractures showed no difference between NPWT and standard dressings for deep surgical site infection.
- Instillation NPWT (NPWTi-d): Combines negative pressure with intermittent wound irrigation; emerging evidence for contaminated wounds.

### Point-of-Care Diagnostics

**Wound Assessment Technologies:**
- Fluorescence imaging (MolecuLight): Detects bacterial burden using autofluorescence. Bacteria produce porphyrins that fluoresce under 405nm violet light. Sensitivity for detecting clinically significant bacterial loads (>10^4 CFU/g) is approximately 74%.
- pH monitoring: Chronic wounds tend to have alkaline pH; monitoring pH can guide therapy.
- Protease activity assays: Elevated MMP levels predict poor healing. Point-of-care tests (WOUNDCHEK) can identify wounds at risk.
- Transcutaneous oximetry (TcPO2): Measures local tissue oxygenation; TcPO2 <40 mmHg predicts impaired healing.

### Scar Management and Optimization

**Evidence-Based Scar Reduction:**
- Silicone-based products (sheets and gels): Best evidence for prevention and treatment of hypertrophic scars and keloids. Mechanism likely involves hydration and occlusion.
- Pressure therapy: 15-25 mmHg for 12-23 hours daily; primarily used for burn scars.
- Intralesional corticosteroid injection (triamcinolone 10-40 mg/mL): First-line for keloids and hypertrophic scars.
- Laser therapy: Pulsed dye laser (595nm) for erythematous scars; fractional CO2 laser for mature scars.

### Medicolegal Considerations
- Documentation of wound characteristics (size, depth, location, contamination, mechanism) is essential
- Informed consent for wound closure should include risks of scarring, infection, nerve/tendon injury, and need for revision
- Photographic documentation is standard of care for complex wounds and suspected abuse cases
- Follow-up wound checks within 48 hours for high-risk wounds reduce adverse outcomes and litigation risk`,
      keyTerms: [
        { term: 'biofilm', definition: 'A structured community of bacteria encased in a self-produced extracellular polymeric substance matrix that adheres to wound surfaces, conferring 100-1000x increased antibiotic resistance compared to free-floating (planktonic) bacteria' },
        { term: 'becaplermin', definition: 'A recombinant human platelet-derived growth factor (rhPDGF-BB) topical gel, the first FDA-approved growth factor therapy for chronic wounds, indicated for diabetic foot ulcers' },
        { term: 'fluorescence imaging', definition: 'A point-of-care diagnostic technique using specific wavelength illumination (405nm) to detect bacterial autofluorescence in wounds, enabling real-time identification of clinically significant bacterial burden' },
        { term: 'FLOW trial', definition: 'Fluid Lavage of Open Wounds — a landmark multicenter RCT demonstrating that low-pressure irrigation was superior to high-pressure irrigation and that soap was equivalent to saline for open fracture wound irrigation' },
        { term: 'extracellular polymeric substance', definition: 'The self-produced matrix of polysaccharides, proteins, lipids, and extracellular DNA that encases bacteria within a biofilm, providing structural integrity and protecting the community from antibiotics and host immune defenses' },
        { term: 'negative pressure wound therapy', definition: 'A technique applying controlled sub-atmospheric pressure (-75 to -125 mmHg) to a wound via a sealed dressing system, promoting healing through macro-deformation, micro-deformation, and fluid removal' },
      ],
      clinicalNotes: `Professional clinical considerations:

1. **Irrigation pressure**: Based on the FLOW trial, use low-pressure irrigation (gravity flow, bulb syringe) rather than high-pressure jet irrigation. High pressure may drive contaminants deeper into tissue and increase surgical site infection risk.

2. **Biofilm management**: Assume chronic wounds (>4 weeks) contain biofilm. A "wound hygiene" approach combining debridement, antiseptic cleansing, wound edge refashioning, and antimicrobial dressing is emerging as standard of care.

3. **Prophylactic antibiotics**: The evidence does not support routine prophylactic antibiotics for clean or clean-contaminated acute wounds. Reserve antibiotics for bite wounds, open fractures, heavily contaminated wounds, and immunocompromised patients.

4. **NPWT indications**: Despite widespread adoption, evidence for NPWT over standard dressings remains mixed for many indications. The WOLLF trial found no benefit for open fractures. Reserve for wounds with significant exudate, exposed hardware, or as a bridge to definitive closure.

5. **Fluorescence-guided debridement**: Point-of-care bacterial fluorescence imaging can improve debridement adequacy by visualizing residual bacterial burden not apparent on clinical inspection alone.

6. **Scar optimization**: Early intervention with silicone sheeting (starting 2 weeks post-closure) has the best evidence for scar prevention. Patient education about sun protection of healing wounds is often neglected but reduces hyperpigmentation.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-wound-1',
      type: 'guideline',
      title: 'First Aid — Wounds and Bleeding',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/take-a-class/first-aid',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-wound-2',
      type: 'guideline',
      title: 'Wound Care: A Comprehensive Review',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/niosh/topics/skin/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-wound-3',
      type: 'journal',
      title: 'A Trial of Wound Irrigation in the Initial Management of Open Fracture Wounds (FLOW)',
      authors: ['FLOW Investigators'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1508502',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-burn-treatment',
      targetType: 'topic',
      relationship: 'related',
      label: 'Burn Treatment',
    },
    {
      targetId: 'topic-when-to-call-911',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'When to Call 911',
    },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['first-aid', 'wound-care', 'infection-prevention'],
    keywords: ['wound', 'laceration', 'abrasion', 'suture', 'dressing', 'bleeding', 'infection'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
