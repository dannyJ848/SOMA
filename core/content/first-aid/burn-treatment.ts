/**
 * Burn Treatment
 *
 * Comprehensive guide to burn classification, first aid, and treatment
 * across all severity levels including thermal, chemical, electrical, and radiation burns.
 */

import { EducationalContent } from '../types';

export const burnTreatmentContent: EducationalContent = {
  id: 'topic-burn-treatment',
  type: 'topic',
  name: 'Burn Treatment',
  nameEs: 'Tratamiento de Quemaduras',
  alternateNames: ['Burn First Aid', 'Burn Care', 'Thermal Injury Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Burns happen when your skin is damaged by heat, chemicals, electricity, or the sun. Cooling the burn with water right away and knowing when to call for help are the most important steps.',
      explanation: `Burns are injuries to the skin caused by something hot, a chemical, electricity, or even too much sun. They can hurt a lot, but knowing what to do makes a big difference in how well they heal.

**Think of your skin like the protective case on a phone.** A small scratch on the case is easy to fix, but a big crack that goes all the way through is much more serious. Burns work the same way — a small one on the surface heals quickly, but a deep one needs a doctor's help.

**Types of burns by how bad they are:**
1. **Mild burns (first degree)**: Only the top layer of skin is affected. It turns red and hurts, like a sunburn. These heal on their own in a few days.
2. **Medium burns (second degree)**: Deeper damage that causes blisters. Very painful. These take a couple of weeks to heal.
3. **Severe burns (third degree)**: All layers of skin are destroyed. The area may look white, brown, or black. Surprisingly, it might not hurt because the nerve endings are damaged. These always need a doctor.

**What to do if someone gets burned:**

**Step 1 — Stop the burning:**
- Move away from the heat source
- If clothing is on fire: Stop, Drop, and Roll
- Remove clothing near the burn (unless it is stuck to the skin)

**Step 2 — Cool the burn:**
- Hold the burned area under cool (not cold) running water for at least 10 minutes
- This is the single most helpful thing you can do
- Do NOT use ice — it can damage the skin even more

**Step 3 — Protect the burn:**
- After cooling, cover loosely with a clean bandage or cloth
- Do not pop blisters — they protect the healing skin underneath
- Do not put butter, toothpaste, or other home remedies on burns

**Step 4 — Manage pain:**
- Over-the-counter pain medicine (like ibuprofen) can help
- Aloe vera gel can soothe mild burns after cooling

**When to call 911 or go to the ER:**
- Burns larger than the palm of the person's hand
- Burns on the face, hands, feet, or groin
- Burns that go all the way around an arm or leg
- Electrical burns or chemical burns
- The person is having trouble breathing (may have inhaled hot air)
- Third-degree burns (white, brown, or charred skin)

**Preventing burns:**
- Set your water heater to 120 degrees F or below
- Use oven mitts and turn pot handles toward the back of the stove
- Test bath water before putting a child in
- Wear sunscreen and reapply every 2 hours
- Keep matches and lighters away from children`,
      keyTerms: [
        { term: 'burn', definition: 'An injury to the skin caused by heat, chemicals, electricity, radiation, or the sun' },
        { term: 'first-degree burn', definition: 'A mild burn affecting only the outer layer of skin, causing redness and pain, like a sunburn' },
        { term: 'second-degree burn', definition: 'A deeper burn that damages the second layer of skin, causing blisters, swelling, and significant pain' },
        { term: 'third-degree burn', definition: 'A severe burn that destroys all layers of skin and may damage tissue underneath; the area may appear white or charred' },
        { term: 'blister', definition: 'A bubble of fluid under the skin that forms to protect the damaged area underneath' },
        { term: 'sunscreen', definition: 'A lotion or spray that protects the skin from harmful ultraviolet rays from the sun' },
      ],
      analogies: [
        'Your skin is like the case on a phone — a small scratch is easy to fix, but a deep crack that goes all the way through is much more serious.',
        'Cooling a burn with water is like putting out a campfire — the sooner you do it, the less damage there is.',
        'A blister is like a water balloon that your body makes to cushion and protect the hurt skin while it heals.',
      ],
      patientCounselingPoints: [
        'Cool the burn under running water for at least 10 minutes — this is the most important step.',
        'Never use ice, butter, toothpaste, or other home remedies on a burn.',
        'Do not pop blisters — they protect the healing skin underneath.',
        'Any burn larger than the palm of the hand should be seen by a doctor.',
        'Burns on the face, hands, feet, or genitals always need medical attention.',
        'Keep a working smoke alarm on every floor of your home.',
      ],
    },
    2: {
      level: 2,
      summary: 'Burn management requires understanding burn depth classification, total body surface area assessment, and type-specific first aid for thermal, chemical, electrical, and radiation burns. Proper initial cooling and appropriate referral decisions are the cornerstones of burn first aid.',
      explanation: `## Burn Treatment: Complete Overview

### Burn Classification by Depth

**Superficial (First Degree):**
- Affects epidermis only
- Appearance: Red, dry, painful, no blisters
- Example: Mild sunburn
- Healing: 3-7 days, no scarring
- Treatment: Cool water, moisturizer, pain relief

**Superficial Partial Thickness (Second Degree — Superficial):**
- Affects epidermis and superficial dermis
- Appearance: Red, moist, blisters, very painful, blanches with pressure
- Example: Brief contact with hot surface, scald
- Healing: 7-14 days, usually minimal scarring
- Treatment: Cool water, non-adherent dressing, pain management

**Deep Partial Thickness (Second Degree — Deep):**
- Affects epidermis and deep dermis
- Appearance: Pale, less painful than superficial partial, may or may not blister, sluggish capillary refill
- Healing: 2-4 weeks, likely scarring. May need skin grafting if healing is delayed.
- Treatment: Medical evaluation required

**Full Thickness (Third Degree):**
- Destroys entire epidermis and dermis
- Appearance: White, waxy, leathery, or charred; painless (nerve endings destroyed); does not blanch
- Healing: Cannot heal on its own (no remaining epithelial elements); requires skin grafting
- Treatment: Emergency medical care

**Fourth Degree:**
- Extends through skin into fat, muscle, tendon, or bone
- Associated with electrical injuries and prolonged flame contact
- Treatment: Surgical intervention, often multiple procedures

### Estimating Burn Size (TBSA — Total Body Surface Area)

**Rule of Nines (Adults):**
- Head and neck: 9%
- Each arm: 9%
- Chest (front): 18%
- Back: 18%
- Each leg: 18%
- Groin: 1%

**Palmar Method:**
- The palm of the patient's hand (including fingers) is approximately 1% of their TBSA
- Useful for estimating scattered or irregular burns

**Pediatric Adjustment:**
- Children have proportionally larger heads and smaller legs
- Infant head: 18%, each leg: 14%

### Burn Types and Specific Management

**Thermal Burns (most common):**
- Flame, scald (hot liquid), contact (hot surface), flash (explosion)
- First aid: Remove from source, cool with running water for 20 minutes, remove jewelry and non-adherent clothing

**Chemical Burns:**
- Acids, alkalis (more destructive — liquefactive necrosis), and organic compounds
- First aid: Brush off dry chemicals first, then irrigate with large volumes of water for at least 20 minutes
- Do NOT attempt to neutralize (acid with base or vice versa) — the chemical reaction generates heat
- Some chemicals require specific antidotes (e.g., calcium gluconate for hydrofluoric acid)

**Electrical Burns:**
- Entry and exit wounds are only the tip of the iceberg — deep tissue damage along the current pathway
- Risk of cardiac arrhythmia (monitor with ECG for 24 hours)
- Risk of compartment syndrome from deep muscle injury
- All electrical burns require medical evaluation

**Radiation Burns (Sunburn):**
- UV radiation damage to epidermis and superficial dermis
- First aid: Cool compresses, moisturizer, hydration, NSAID pain relief
- Severe sunburn with blistering should be treated like a thermal second-degree burn

### Inhalation Injury
- Suspect when burns occur in enclosed spaces, facial burns present, or singed nasal/facial hair noted
- Signs: Hoarse voice, stridor, carbonaceous sputum, respiratory distress
- This is a life-threatening emergency — call 911 immediately
- Airway swelling can progress rapidly and obstruct breathing

### Wound Care for Burns
- Keep burns clean with gentle soap and water
- Apply a thin layer of antibiotic ointment (e.g., bacitracin) or silver-based cream for deeper burns
- Use non-adherent dressings and change daily
- Do not pop blisters — intact blisters serve as a biological dressing
- Watch for signs of infection: increasing pain, redness, odor, or pus`,
      keyTerms: [
        { term: 'total body surface area (TBSA)', definition: 'The percentage of the body\'s skin surface affected by a burn, used to guide treatment decisions and fluid resuscitation' },
        { term: 'Rule of Nines', definition: 'A method for quickly estimating the TBSA of a burn by dividing the adult body into sections, each representing 9% or multiples of 9%' },
        { term: 'inhalation injury', definition: 'Damage to the airway and lungs from breathing in hot gases, steam, or toxic smoke, a life-threatening complication of burns in enclosed spaces' },
        { term: 'eschar', definition: 'Dead, devitalized tissue that forms a thick, leathery covering over a full-thickness burn' },
        { term: 'partial thickness', definition: 'A burn depth that extends through the epidermis and into but not through the entire dermis, characterized by blisters and pain' },
        { term: 'debridement', definition: 'The removal of dead, damaged, or contaminated tissue from a wound to promote healing' },
      ],
      patientCounselingPoints: [
        'Cool burns with running water for a full 20 minutes — even if the pain goes away sooner, keep cooling.',
        'Remove jewelry and tight clothing near the burn before swelling starts.',
        'Never use ice, iced water, or frozen items directly on a burn — this can worsen the injury.',
        'Chemical burns require prolonged irrigation with water — at least 20 minutes.',
        'All electrical burns need medical evaluation regardless of how they look on the outside.',
        'If you suspect someone has inhaled smoke or hot air, call 911 immediately.',
      ],
    },
    3: {
      level: 3,
      summary: 'Burn pathophysiology involves the Jackson model of thermal injury with zones of coagulation, stasis, and hyperemia. Management decisions integrate burn depth assessment, TBSA calculation, fluid resuscitation principles, and burn center referral criteria. Understanding the systemic inflammatory response to major burns is essential for anticipating complications.',
      explanation: `## Burn Treatment: College-Level Analysis

### Burn Pathophysiology

**Jackson's Burn Model (1953):**
Thermal injury creates three concentric zones:
1. **Zone of Coagulation**: The central area of maximum damage. Irreversible cell death due to protein denaturation. This tissue is non-viable.
2. **Zone of Stasis**: Surrounds the zone of coagulation. Tissue has decreased perfusion but cells are initially viable. Without optimal management (cooling, adequate resuscitation, prevention of infection), this zone can progress to coagulation (burn wound conversion). This zone is the therapeutic target — proper first aid aims to preserve it.
3. **Zone of Hyperemia**: The outermost zone. Increased blood flow due to inflammatory mediator release. Tissue will recover unless complicated by sepsis or prolonged hypoperfusion.

**Why Cooling Matters — The Evidence:**
The Australian and New Zealand Burns Association (ANZBA) and systematic reviews demonstrate that cooling within the first 3 hours:
- Reduces the depth of the burn by preventing zone of stasis progression
- Decreases pain by slowing nerve conduction
- Optimal duration: 20 minutes of running cool water (15-25 degrees C)
- Efficacy decreases after 3 hours post-injury
- Hypothermia risk: Monitor core temperature, especially in children and large burns (>20% TBSA)

### Systemic Response to Burns

Burns exceeding 20% TBSA in adults (10% in children) trigger a systemic inflammatory response:

**Burn Shock (first 48 hours):**
- Massive capillary leak due to inflammatory mediator release (histamine, prostaglandins, bradykinin, cytokines)
- Fluid shifts from intravascular to interstitial space (edema)
- Hypovolemic shock if not adequately resuscitated
- Cardiac output decreases due to myocardial depressant factors and reduced preload

**Hypermetabolic Response (persists for months):**
- Metabolic rate increases 40-100% above baseline
- Catecholamine-driven: Tachycardia, hyperthermia, muscle catabolism
- Protein catabolism leads to muscle wasting and impaired immune function
- Caloric needs: 25 kcal/kg/day + 40 kcal per percent TBSA burned (Curreri formula — historical; most centers now use indirect calorimetry)

### Fluid Resuscitation

**Parkland Formula (Modified Brooke):**
- 4 mL x body weight (kg) x %TBSA = total crystalloid in first 24 hours
- Give half in the first 8 hours from time of burn (not from time of presentation)
- Give the remaining half over the next 16 hours
- Titrate to urine output: 0.5-1 mL/kg/hr in adults, 1-2 mL/kg/hr in children
- Fluid of choice: Lactated Ringer's solution

**"Fluid Creep" Phenomenon:**
- The tendency to over-resuscitate burn patients, leading to complications
- Abdominal compartment syndrome, extremity compartment syndrome, pulmonary edema
- Modern approach: Goal-directed resuscitation with frequent reassessment rather than strict formula adherence

### Burn Center Referral Criteria (ABA Guidelines)

Transfer to a burn center is indicated for:
- Partial thickness burns >10% TBSA
- Burns involving face, hands, feet, genitalia, perineum, or major joints
- Full thickness burns of any size
- Electrical burns (including lightning)
- Chemical burns
- Inhalation injury
- Burns in patients with significant comorbidities
- Burns with concomitant trauma
- Burns in children at hospitals without pediatric burn capabilities
- Burns requiring special social, emotional, or rehabilitative support

### Escharotomy

Full-thickness circumferential burns create a rigid, non-expansile eschar that can act as a tourniquet:
- On extremities: Vascular compromise (check distal pulses, capillary refill, pulse oximetry)
- On the chest: Restricts chest wall excursion, impairing ventilation
- Escharotomy: Bedside incision through eschar to subcutaneous fat to release constrictive pressure
- No anesthesia needed in full-thickness areas (nerve endings destroyed)
- Fasciotomy may be required for deeper injuries (electrical burns, crush)

### Special Burn Types

**Hydrofluoric Acid Burns:**
- HF penetrates tissue and binds calcium and magnesium ions
- Causes progressive tissue destruction and life-threatening hypocalcemia
- Treatment: Copious irrigation + topical calcium gluconate gel. For significant burns: Intra-arterial or subcutaneous calcium gluconate injection. Monitor serum calcium and cardiac rhythm.

**Tar/Asphalt Burns:**
- Adherent material continues to burn
- Cool with water first, then use petroleum-based solvents (mineral oil, bacitracin) to dissolve tar
- Do not forcibly remove — this avulsions viable skin

**Radiation Burns:**
- Acute radiation syndrome: Prodromal (nausea, vomiting) → latent period → manifest illness
- Cutaneous radiation injury may present delayed (days to weeks)
- Management is primarily supportive with wound care principles`,
      keyTerms: [
        { term: 'zone of stasis', definition: 'The intermediate zone in Jackson\'s burn model where tissue has decreased perfusion and cells are initially viable but at risk of progressing to irreversible damage without proper treatment — the primary therapeutic target of burn first aid' },
        { term: 'Parkland formula', definition: 'A fluid resuscitation calculation for major burns: 4 mL x body weight (kg) x %TBSA burned = total Lactated Ringer\'s solution to administer over the first 24 hours, with half given in the first 8 hours' },
        { term: 'escharotomy', definition: 'A surgical incision through the rigid, non-expansile eschar of a circumferential full-thickness burn to release constrictive pressure and restore circulation or ventilation' },
        { term: 'burn wound conversion', definition: 'The progression of the zone of stasis to irreversible coagulation necrosis, deepening the burn; prevented by timely cooling, adequate resuscitation, and infection control' },
        { term: 'hypermetabolic response', definition: 'A sustained increase in metabolic rate (40-100% above baseline) following major burns, driven by catecholamines and inflammatory mediators, causing muscle catabolism and increased caloric demands' },
        { term: 'fluid creep', definition: 'The phenomenon of administering significantly more resuscitation fluid than calculated, leading to complications such as abdominal compartment syndrome, pulmonary edema, and extremity ischemia' },
      ],
    },
    4: {
      level: 4,
      summary: 'Graduate-level burn management integrates the molecular pathobiology of thermal injury, evidence-based resuscitation strategies, surgical debridement and grafting techniques, inhalation injury pathophysiology and management, and the complex interplay between inflammation, infection, and immunosuppression in major burn patients.',
      explanation: `## Burn Treatment: Graduate-Level Detail

### Molecular Pathobiology of Thermal Injury

**Cellular Events:**
At temperatures above 44 degrees C, protein denaturation begins. The rate of cell death doubles for each degree C increase above this threshold (Arrhenius relationship). At 60 degrees C, instantaneous coagulative necrosis occurs.

**Inflammatory Cascade in Burns:**
- Damaged cells release DAMPs (damage-associated molecular patterns) including HMGB1, heat shock proteins, and mitochondrial DNA
- TLR4 (Toll-like receptor 4) activation on macrophages and dendritic cells triggers NF-kB signaling
- Cytokine storm: TNF-alpha, IL-1beta, IL-6, IL-8, IL-18
- Complement activation (C3a, C5a) amplifies inflammation
- Mast cell degranulation releases histamine, causing vasodilatation and increased permeability
- Endothelial glycocalyx disruption contributes to capillary leak beyond the burn wound itself

**Immunosuppression Paradox:**
Major burns create a paradoxical state of simultaneous hyperinflammation and immunosuppression:
- Th1 to Th2 shift: Decreased cell-mediated immunity, increased susceptibility to infection
- Neutrophil dysfunction: Impaired chemotaxis and phagocytosis despite elevated counts
- Lymphocyte apoptosis: Programmed death of lymphocytes in gut-associated lymphoid tissue
- This immunosuppression explains why burn patients are extremely susceptible to nosocomial infections

### Surgical Management

**Early Excision and Grafting:**
The landmark study by Janzekovic (1970) demonstrated that early tangential excision of burn eschar followed by grafting improved outcomes compared to the historical approach of allowing eschar to separate naturally. Current practice:
- Excision within 24-72 hours for deep partial and full-thickness burns
- Tangential excision: Sequential shaving with a Goulian/Weck blade until viable dermis (punctate bleeding) is reached
- Fascial excision: For very deep or extensive burns; removes tissue down to fascia
- Blood loss: 3-5% of blood volume per %TBSA excised for tangential excision

**Skin Grafting:**
- Split-thickness skin graft (STSG): 0.008-0.012 inch (0.2-0.3 mm); includes epidermis and part of dermis. Can be meshed (expanded) for larger coverage areas.
- Full-thickness skin graft (FTSG): Includes entire dermis; better cosmesis but limited donor availability
- Meshing ratios: 1.5:1 for most wounds; 3:1 or 4:1 for massive burns
- Graft take: Requires adequate wound bed vascularity, absence of infection, and immobilization

**Dermal Substitutes:**
- Integra: Bilayer collagen-glycosaminoglycan scaffold with temporary silicone epidermis. Applied to excised wound bed, vascularizes over 2-3 weeks, then silicone removed and thin STSG applied.
- AlloDerm: Acellular human dermal matrix providing a scaffold for cellular repopulation
- ReCell: Autologous cell harvesting system that creates a suspension of keratinocytes and melanocytes from a small skin sample

### Inhalation Injury — Detailed Pathophysiology

Three distinct mechanisms:
1. **Thermal injury to upper airway**: Heat is rapidly dissipated in the nasopharynx/oropharynx. Direct thermal injury below the glottis is rare except with steam (higher heat capacity than dry air). Supraglottic edema peaks at 12-24 hours and can completely obstruct the airway.

2. **Chemical injury to tracheobronchial tree**: Combustion products (acrolein, hydrogen cyanide, ammonia, phosgene) cause direct mucosal damage, ciliary dysfunction, bronchospasm, and mucosal sloughing with cast formation.

3. **Systemic toxicity**: Carbon monoxide (CO) and hydrogen cyanide (HCN) poisoning.
   - CO: Binds hemoglobin with 200-250x affinity of oxygen, shifting the oxyhemoglobin dissociation curve left. Pulse oximetry is unreliable (reads COHb as oxyhemoglobin). Diagnosis requires co-oximetry. Treatment: 100% FiO2 (half-life of COHb reduced from 4-5 hours on room air to 60-90 minutes).
   - HCN: Binds cytochrome c oxidase, halting aerobic metabolism. Presents as lactic acidosis out of proportion to clinical picture. Treatment: Hydroxocobalamin (Cyanokit) 5g IV.

### Burn Wound Infection

**Topical Antimicrobials:**
- Silver sulfadiazine (SSD): Broad spectrum, painless application. Limitations: Pseudoeschar formation (mimics burn wound deepening), sulfonamide allergy, leukopenia, delays epithelialization. Falling out of favor.
- Mafenide acetate (Sulfamylon): Penetrates eschar; effective against Pseudomonas. Stings on application. Carbonic anhydrase inhibitor (can cause metabolic acidosis with large-area use).
- Silver-impregnated dressings (Aquacel Ag, Mepilex Ag): Sustained silver release, less frequent dressing changes, gaining preference over SSD.
- Bacitracin/polymyxin: For superficial burns; less effective for deep wounds.

**Burn Wound Sepsis:**
- Burn wound biopsy culture: Gold standard (>10^5 organisms per gram of tissue = burn wound infection)
- Common organisms: Staphylococcus aureus (early), Pseudomonas aeruginosa (late), fungi (Candida, Aspergillus) in prolonged ICU stays
- Systemic antibiotics guided by wound and blood cultures`,
      keyTerms: [
        { term: 'DAMPs', definition: 'Damage-Associated Molecular Patterns — endogenous molecules released by injured or necrotic cells that activate the innate immune system through pattern recognition receptors, driving the inflammatory response in burns' },
        { term: 'tangential excision', definition: 'A surgical technique for burn debridement involving sequential shaving of burned tissue in thin layers until viable, bleeding dermis is reached, preserving as much healthy tissue as possible' },
        { term: 'carboxyhemoglobin (COHb)', definition: 'Hemoglobin bound to carbon monoxide, which is unable to carry oxygen; standard pulse oximetry cannot distinguish COHb from oxyhemoglobin, requiring co-oximetry for accurate measurement' },
        { term: 'hydroxocobalamin', definition: 'A form of vitamin B12 used as the antidote for cyanide poisoning (Cyanokit); it directly binds cyanide to form cyanocobalamin, which is renally excreted' },
        { term: 'Integra', definition: 'A bilayer artificial dermal substitute consisting of a bovine collagen-glycosaminoglycan matrix covered by a temporary silicone epidermal layer, used to reconstruct the dermal scaffold before split-thickness skin grafting' },
        { term: 'glycocalyx', definition: 'The carbohydrate-rich layer lining the endothelial surface of blood vessels, critical for maintaining vascular barrier function; its disruption in major burns contributes to systemic capillary leak' },
      ],
      clinicalNotes: `Graduate-level clinical notes:

1. **Cooling duration**: Evidence supports 20 minutes of cooling with running water at 15-25 degrees C initiated within 3 hours of injury. Cooling beyond this window provides minimal benefit and increases hypothermia risk.

2. **Silver sulfadiazine reconsideration**: Multiple systematic reviews demonstrate that SSD delays wound healing compared to newer dressings (biosynthetic, silver-impregnated, honey-based). Many burn centers have abandoned SSD for superficial partial-thickness burns.

3. **CO poisoning and pulse oximetry**: In any patient with a burn in an enclosed space, the SpO2 reading is unreliable. A "normal" SpO2 of 98% may mask a COHb of 30%. Always obtain co-oximetry (arterial or venous blood gas with co-oximetry).

4. **Fluid resuscitation titration**: Use the Parkland formula as a starting point, not an endpoint. Titrate to urine output (0.5-1 mL/kg/hr adults). Over-resuscitation (fluid creep) is as dangerous as under-resuscitation.

5. **Escharotomy timing**: Monitor circumferential burns closely. Perform escharotomy before loss of distal pulses — progressive loss of capillary refill and increasing pain are earlier indicators.

6. **Early excision and grafting**: Within 24-72 hours for burns that will not heal within 3 weeks. Delay increases infection risk, systemic inflammation, and hospital length of stay.`,
    },
    5: {
      level: 5,
      summary: 'State-of-the-art burn care integrates precision resuscitation guided by advanced hemodynamic monitoring, regenerative approaches including autologous cell therapies and tissue-engineered skin, the evolving understanding of burn-related immunopathology, and long-term rehabilitation including scar modulation, functional restoration, and psychological recovery.',
      explanation: `## Burn Treatment: Professional-Level Comprehensive Review

### Precision Fluid Resuscitation

The Parkland formula remains the most widely used starting point, but contemporary burn resuscitation is evolving toward individualized, goal-directed approaches:

**Advanced Monitoring:**
- Transpulmonary thermodilution (PiCCO): Provides cardiac output, extravascular lung water (EVLW), and global end-diastolic volume (GEDV). EVLW-guided resuscitation may reduce fluid volumes and pulmonary complications.
- Stroke volume variation (SVV): Used to guide fluid boluses — high SVV suggests fluid responsiveness
- Invasive monitoring: Swan-Ganz catheterization for complex cases (inhalation injury, cardiac comorbidity)
- Computer decision support systems (Burn Navigator) are being validated for real-time resuscitation guidance

**Colloid Resuscitation Controversy:**
- Albumin: Historically introduced at 8-12 hours post-burn (after the peak of capillary leak). The 2020 ISBI guidelines suggest that albumin at 5% concentration may reduce total fluid volumes and edema formation.
- Fresh frozen plasma (FFP): Used in some centers for resuscitation of massive burns (>40% TBSA). The concept is to restore oncotic pressure and coagulation factors simultaneously.
- Vitamin C (high-dose IV ascorbic acid): Studied for its antioxidant properties and ability to reduce capillary permeability. Tanaka et al. demonstrated reduced resuscitation volumes. However, risk of oxalate nephropathy limits widespread adoption; further RCTs are needed.

### Regenerative Medicine in Burns

**Autologous Cell-Based Therapies:**
- ReCell: Enzymatic disaggregation of a small skin sample (1:80 expansion ratio) to create a cell suspension sprayed onto the wound bed. FDA-approved for acute partial-thickness burns. Clinical trials demonstrate equivalent healing to meshed STSG with a much smaller donor site.
- Cultured epidermal autografts (CEA/Epicel): Keratinocytes cultured from a small biopsy over 2-3 weeks to produce sheets covering large areas. Fragile, no dermal component (poor long-term durability without dermal substitute), but life-saving for massive burns with limited donor sites.

**Tissue-Engineered Skin:**
- StrataGraft: A bilayer human skin substitute (allogeneic) with both dermal and epidermal components, expressing a functional stratum corneum. Phase III data (STRATA2016) demonstrated that 83% of deep partial-thickness burns treated with StrataGraft did not require autografting.
- 3D bioprinting: Emerging technology using bio-inks containing keratinocytes, fibroblasts, melanocytes, and supporting matrices. In situ bioprinting (printing directly onto the wound bed) is in early clinical trials.
- Stem cell therapy: Mesenchymal stem cells (MSCs) applied topically or systemically show anti-inflammatory and pro-regenerative effects in preclinical models. Human trials are ongoing.

### Burn-Related Immunopathology

**The Gut-Burn Axis:**
Major burns cause intestinal barrier breakdown within hours:
- Mucosal atrophy and tight junction disruption lead to bacterial translocation
- Gut-derived endotoxin drives systemic inflammation and multi-organ dysfunction
- Early enteral nutrition (within 6-12 hours) preserves mucosal integrity, reduces translocation, and decreases infection rates
- Glutamine supplementation may support mucosal integrity (evidence is mixed but generally supportive)

**Burn-Related Immunosuppression:**
- Programmed cell death protein-1 (PD-1) and PD-L1 upregulation contributes to T-cell exhaustion
- Myeloid-derived suppressor cells (MDSCs) accumulate and suppress adaptive immunity
- These pathways are shared with cancer immunology, raising the possibility that checkpoint inhibitor therapy could restore immune function in burn patients (preclinical research only)

### Long-Term Outcomes and Rehabilitation

**Scar Management:**
- Hypertrophic scarring occurs in up to 70% of deep partial and full-thickness burns
- Compression garments (23 hours/day for 12-18 months): Mechanism involves tissue hypoxia reducing fibroblast activity. Evidence quality is moderate.
- Silicone: Sheets or gels applied over scars; mechanism likely involves hydration and static charge effects on collagen alignment
- Intralesional corticosteroid (triamcinolone): Suppresses collagen synthesis; risk of skin atrophy and depigmentation
- Laser: Pulsed dye laser targets microvasculature; fractional CO2 remodels collagen. Often used in combination.
- Fat grafting: Autologous fat injection for scar contracture. Contains adipose-derived stem cells with anti-fibrotic properties. Growing evidence base.

**Burn Reconstruction:**
- Scar contracture release with Z-plasty, local flaps, or tissue expansion
- Free tissue transfer for complex reconstruction (functional and aesthetic)
- Burn-specific considerations: Donor site limitation, multiple contracture sites, psychological readiness

**Metabolic and Endocrine Sequelae:**
- Hypermetabolic state persists for 2-3 years post-burn
- Propranolol: Reduces resting energy expenditure and heart rate; evidence supports improved lean body mass preservation
- Oxandrolone: Anabolic steroid that improves nitrogen balance and wound healing; FDA-approved for weight regain in catabolic states
- Growth hormone: Accelerates donor site healing and reduces length of stay but may increase mortality risk

**Psychological Recovery:**
- PTSD prevalence: 15-45% of burn survivors
- Body image disturbance and social reintegration challenges
- Early psychological intervention (from ICU through rehabilitation) improves long-term quality of life
- Peer support programs (e.g., Phoenix Society) demonstrate measurable benefit`,
      keyTerms: [
        { term: 'ReCell', definition: 'An FDA-approved autologous cell harvesting device that creates a suspension of keratinocytes, melanocytes, fibroblasts, and Langerhans cells from a small skin biopsy for spray application onto burn wounds with an 80:1 expansion ratio' },
        { term: 'StrataGraft', definition: 'A bilayer allogeneic cellularized skin substitute with both dermal and epidermal components expressing a functional stratum corneum, shown to reduce the need for autografting in deep partial-thickness burns' },
        { term: 'extravascular lung water (EVLW)', definition: 'A hemodynamic parameter measured by transpulmonary thermodilution that quantifies pulmonary edema; used to guide fluid resuscitation in major burns to prevent pulmonary complications' },
        { term: 'bacterial translocation', definition: 'The passage of viable bacteria and endotoxin from the intestinal lumen across a compromised mucosal barrier into the systemic circulation, contributing to sepsis and multi-organ dysfunction after major burns' },
        { term: 'myeloid-derived suppressor cells', definition: 'A heterogeneous population of immature myeloid cells that expand in the setting of major burns and cancer, potently suppressing T-cell-mediated adaptive immunity and contributing to infection susceptibility' },
        { term: 'in situ bioprinting', definition: 'An emerging technology that deposits bio-inks containing autologous or allogeneic skin cells directly onto a wound bed using robotic printing systems, potentially enabling precise, patient-specific skin regeneration' },
      ],
      clinicalNotes: `Professional-level clinical notes:

1. **Resuscitation individualization**: The Parkland formula should be viewed as a starting point, not a prescription. Goal-directed resuscitation using urine output, lactate clearance, and advanced hemodynamic monitoring (when available) reduces both under- and over-resuscitation complications.

2. **Silver sulfadiazine replacement**: The trend toward silver-impregnated dressings (Mepilex Ag, Aquacel Ag) and biosynthetic dressings over SSD is supported by multiple systematic reviews showing faster healing times and less pain with the newer products.

3. **Early enteral nutrition**: Initiate within 6-12 hours post-burn. A high-protein, high-calorie diet (1.5-2 g protein/kg/day) is essential to offset the hypermetabolic response. Glutamine supplementation (0.5 g/kg/day) may reduce infection rates.

4. **Propranolol in major burns**: Titrate to reduce resting heart rate by 15-20%. Evidence demonstrates reduced cardiac workload, improved lean body mass, and decreased wound healing time. Start early and continue for up to 1 year.

5. **StrataGraft and ReCell adoption**: These technologies are changing the paradigm for deep partial-thickness burns. Consider StrataGraft when the alternative is STSG harvesting. Consider ReCell when donor sites are limited or when treating cosmetically sensitive areas.

6. **Psychological screening**: All burn survivors should be screened for PTSD, depression, and body image disturbance at regular intervals (3, 6, 12 months post-injury). Early intervention improves long-term outcomes significantly.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-burn-1',
      type: 'guideline',
      title: 'Burn First Aid — American Red Cross Scientific Advisory Council',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/take-a-class/first-aid',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-burn-2',
      type: 'guideline',
      title: 'American Burn Association Burn Center Referral Criteria',
      authors: ['American Burn Association'],
      source: 'American Burn Association',
      url: 'https://ameriburn.org/resources/burnreferral/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-burn-3',
      type: 'guideline',
      title: 'Burns Prevention and Control',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/masstrauma/factsheets/public/burns.pdf',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-wound-care-basic',
      targetType: 'topic',
      relationship: 'related',
      label: 'Basic Wound Care',
    },
    {
      targetId: 'topic-when-to-call-911',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'When to Call 911',
    },
  ],

  tags: {
    systems: ['integumentary', 'respiratory'],
    topics: ['first-aid', 'burn-care', 'emergency-care', 'wound-management'],
    keywords: ['burn', 'thermal', 'chemical', 'electrical', 'scald', 'escharotomy', 'skin graft', 'inhalation injury'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
