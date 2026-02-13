/**
 * Complication Prevention in Wound Care
 *
 * Comprehensive content on preventing and managing wound complications
 * including infection, healing problems, and adverse outcomes.
 */

import { EducationalContent } from '../types';

export const complicationPreventionContent: EducationalContent = {
  id: 'wound-care-complications',
  type: 'topic',
  name: 'Wound Complication Prevention',
  alternateNames: ['Wound Infection Prevention', 'Healing Problems', 'Wound Complications'],

  levels: {
    1: {
      level: 1,
      summary: 'Most wounds heal without problems, but sometimes complications happen. Knowing the warning signs and how to prevent problems helps wounds heal safely.',
      explanation: `## Common Wound Problems

Wounds usually heal well with proper care, but problems can happen. Knowing what to watch for helps catch issues early.

## Infection

**What is it?**
Germs (bacteria) get into the wound and multiply, causing problems.

**Warning signs:**
- Redness spreading around the wound
- Increased warmth around the wound
- Swelling that gets worse
- Pain that increases after 2-3 days
- Pus or yellow/green discharge
- Bad smell from the wound
- Fever (temperature over 100.4°F or 38°C)
- Red streaks going up the arm or leg

**What to do:**
- Call your doctor right away
- Don't wait - infections can get worse quickly
- May need antibiotic medicine
- May need special cleaning or drainage

## Slow Healing

**What causes slow healing?**
- Poor blood flow (circulation problems)
- Diabetes (high blood sugar)
- Smoking
- Poor nutrition (not enough protein or vitamins)
- Too much pressure on the wound
- Infection
- Age (healing slows as we get older)

**How to help healing:**
- Eat healthy foods with protein (meat, beans, eggs, nuts)
- Take vitamins if your doctor recommends
- Don't smoke (or cut down)
- Keep pressure off the wound
- Protect from injury
- Manage blood sugar if diabetic
- Follow doctor's instructions

## Scars

**Why do scars form?**
When skin is injured, the body repairs it with different tissue that doesn't look or function exactly the same.

**Scar types:**
- **Normal scar:** Flattens and fades over time
- **Raised scar:** Sticks up above the skin
- **Wide scar:** Spreads wider than original wound
- **Dark scar:** Turns darker than surrounding skin

**How to minimize scars:**
- Keep wound moist while healing
- Don't pick at scabs
- Protect from sun (use sunscreen)
- Don't stretch the area while healing
- Follow doctor's care instructions
- Consider scar treatments after healing

## Wound Opening (Dehiscence)

**What is it?**
A wound that was closed with stitches or staples opens up.

**Causes:**
- Too much tension on the wound
- Infection
- Early stitch/staple removal
- Injury to the area
- Coughing, straining, or lifting too soon

**Signs:**
- Gap in wound edges
- Slight opening at wound ends
- Drainage from opening
- Seeing deeper tissue

**What to do:**
- Cover with clean bandage
- Call your doctor immediately
- May need to be reclosed
- Don't pull edges together yourself

## Bleeding

**Normal bleeding:**
- Small amount of red on bandage
- Stops quickly with pressure

**Too much bleeding:**
- Soaks through bandage quickly
- Blood drips or spurts
- Won't stop after 10 minutes of pressure

**What to do:**
- Apply firm, direct pressure with clean cloth
- Elevate the area above heart level if possible
- Don't remove the first bandage (add more on top)
- Call for help if bleeding doesn't stop

## Allergic Reactions

**Signs:**
- Red, itchy rash around wound
- Bumps or blisters
- Swelling
- Pain from bandage adhesive

**Common causes:**
- Tape or adhesive
- Bandage material
- Ointments or creams
- Latex in gloves

**What to do:**
- Stop using the product
- Clean area gently
- Try different bandage type
- Call doctor if severe

## Pain

**Normal pain:**
- Hurts a little when touched
- Improves each day
- Managed with mild pain relievers

**Concerning pain:**
- Gets worse instead of better
- Throbbing or pulsing
- Pain that spreads
- Not helped by pain medicine

**What to do:**
- Call your doctor
- May be sign of infection
- May need stronger pain medicine
- Don't ignore increasing pain

## When to Call the Doctor

**Call immediately for:**
- Fever over 100.4°F (38°C)
- Red streaks from wound
- Increasing redness around wound
- Severe pain
- Heavy bleeding
- Wound opening up
- Signs of infection (pus, bad smell)

**Call for appointment for:**
- No improvement after 2 weeks
- New or worsening pain
- Any concerns about healing`,
      keyTerms: [
        { term: 'infection', definition: 'When germs invade and multiply in wound, causing problems' },
        { term: 'dehiscence', definition: 'When a wound opens up, especially after stitches or staples' },
        { term: 'fever', definition: 'Body temperature over normal, often sign of infection' },
        { term: 'pus', definition: 'Thick fluid made of dead cells, bacteria, and white blood cells' },
        { term: 'scar', definition: 'Mark left on skin after a wound heals' },
        { term: 'red streaks', definition: 'Red lines going from wound toward body; sign infection spreading' },
      ],
      analogies: [
        'Infection spreading is like a spot of ink spreading on paper - it starts small and grows if not stopped.',
        'Scar formation is like patching a hole in clothing - the patch works but looks different.',
        'Wound opening is like a zipper coming undone - it needs to be fixed to close properly.',
      ],
      examples: [
        'A surgical incision that becomes red, warm, and swollen after 5 days may be infected.',
        'A wound on the foot that isn\'t healing after 4 weeks in a diabetic person needs medical attention.',
        'If stitches pull apart and the wound opens, this is dehiscence and needs medical care.',
      ],
      patientCounselingPoints: [
        'Check wounds daily for warning signs of infection.',
        'Don\'t ignore increasing pain - it\'s often the first sign of problems.',
        'Call your doctor if you have fever or notice spreading redness.',
        'Keep all follow-up appointments even if the wound looks fine.',
        'Protect healing wounds from injury and too much stretching.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wound complications include infection, dehiscence, hematoma/seroma, excessive scarring, and delayed healing. Prevention involves proper wound care, nutrition, and addressing risk factors.',
      explanation: `## Wound Complications: Recognition and Management

### Infection

**Types of Wound Infection:**

| Type | Description | Onset |
|------|-------------|-------|
| **Contamination** | Bacteria present, no immune response | Immediate |
| **Colonization** | Bacteria multiplying, no symptoms | 1-3 days |
| **Local infection** | Localized signs only | 3-7 days |
| **Spreading infection** | Cellulitis, lymphangitis | 5-10 days |
| **Systemic infection** | Sepsis, fever | Variable |

**Clinical Signs of Infection (4 CANDO criteria):**
- **C**alor (Heat): Wound feels warm
- **C** rubor (Redness): Redness spreading from wound
- **A** dolor (Pain): Increasing or new pain
- **D** rainage: Purulent discharge
- **O** s (Bone): Exposed bone (osteomyelitis)

**Additional signs:**
- Fever >38°C (100.4°F)
- Elevated white blood cell count
- Foul odor
- Wound breakdown
- Delayed healing

**Laboratory findings:**
- **WBC:** Elevated (>12,000) or very low (<4,000) in sepsis
- **CRP:** Elevated (>10 mg/L) in infection/inflammation
- **ESR:** Elevated (>15 mm/hr in men, >20 in women)
- **Procalcitonin:** Elevated (>0.5 ng/mL) in bacterial sepsis

**Treatment:**
1. **Debridement:** Remove necrotic tissue, bacterial burden
2. **Culture:** Guide antibiotic selection
3. **Antibiotics:** Based on culture results
4. **Wound care:** Moist environment, appropriate dressings
5. **Address source:** Remove foreign body, drain abscess

### Dehiscence (Wound Separation)

**Risk Factors:**
- Increased wound tension
- Early suture removal
- Infection
- Poor nutrition (low albumin)
- Diabetes, steroids
- Coughing, straining, lifting
- Advanced age
- Obesity
- Smoking

**Types:**
- **Superficial:** Skin separation only
- **Partial:** Skin and subcutaneous tissue
- **Complete:** Full thickness, fascia may be open

**Management:**
- **Superficial, small:**
  - Clean, dress with moist dressing
  - May heal by secondary intention
  - Consider adhesive strips

- **Large or deep:**
  - Surgical consultation
  - May need reclosure
  - Antibiotics if infected

- **Fascial dehiscence (emergency):**
  - Evisceration possible (organs coming out)
  - Cover with moist sterile dressing
  - Emergency surgical repair

### Hematoma and Seroma

**Hematoma:**
- **Definition:** Collection of blood in wound
- **Causes:** Inadequate hemostasis, bleeding diathesis, early activity
- **Signs:**
  - Swelling, bruising
  - Pain, tension
  - Fluctuance (fluid wave)
  - Decreased hemoglobin

**Management:**
- Small: Observation, may reabsorb
- Large, symptomatic: Evacuation, control bleeding
- Preventing: Proper hemostasis, pressure dressings, drain if indicated

**Seroma:**
- **Definition:** Collection of serous fluid in wound
- **Causes:** Lymphatic disruption, dead space, shearing forces
- **Signs:**
  - Swelling, fluctuance
  - Clear or yellow fluid on aspiration
  - Usually painless

**Management:**
- Small: Observation, may reabsorb
- Repeated: Aspiration, compression
- Persistent: Consider drain placement

### Excessive Scarring

**Hypertrophic Scar:**
- **Definition:** Raised scar confined to wound boundaries
- **Risk factors:**
  - Wound tension
  - Infection
  - Delayed healing
  - Darker skin types
- **Treatment:**
  - Pressure therapy
  - Silicone gel/sheets
  - Steroid injection
  - Laser therapy

**Keloid:**
- **Definition:** Raised scar extending beyond wound boundaries
- **Risk factors:**
  - Darker skin (higher incidence)
  - Earlobes, sternum, shoulders, upper back
  - Family history
  - Wound infection/tension
- **Treatment:**
  - Steroid injection (first-line)
  - Pressure therapy
  - Surgical excision + steroids (high recurrence)
  - Radiation therapy (post-excision)

**Contracture:**
- **Definition:** Scar shortening causing limitation of movement
- **Common locations:** Joints, neck, axilla
- **Prevention:**
  - Early mobilization
  - Splinting in functional position
  - Physical therapy
- **Treatment:**
  - Physical therapy
  - Scar release
  - Skin graft/flap

### Delayed Healing

**Causes:**
- **Local factors:**
  - Infection
  - Inadequate blood supply
  - Pressure
  - Moisture imbalance (too wet or too dry)
  - Foreign body

- **Systemic factors:**
  - Age (elderly heal slower)
  - Diabetes
  - Malnutrition (protein, vitamin C, zinc deficiency)
  - Medications (steroids, chemotherapy)
  - Smoking
  - Radiation therapy
  - Immunocompromise

**Management:**
1. Identify and address underlying cause
2. Optimize wound environment (TIME principles)
3. Consider adjunctive therapies
4. Provide adequate time for healing

### Pain Complications

**Chronic wound pain:**
- **Causes:**
  - Infection
  - Inflammation
  - Nerve damage
  - Ischemia
  - Dressing changes
- **Management:**
  - Treat underlying cause
  - Non-opioid analgesics first line
  - Consider neuropathic pain agents (gabapentin)
  - Non-pharmacologic (elevation, rest)

**Procedural pain:**
- **Causes:** Debridement, dressing changes
- **Prevention:**
  - Pre-emptive analgesics
  - Topical anesthetics
  - Gentle technique
  - Less frequent changes when possible

### Prevention Strategies

**Infection Prevention:**
- Clean technique for wound care
- Hand hygiene before and after contact
- Cleanse wound appropriately
- Tetanus prophylaxis as indicated
- Early debridement of necrotic tissue

**Dehiscence Prevention:**
- Proper suture technique and tension
- Delay suture removal in high-risk wounds
- Nutritional optimization
- Manage coughing, straining
- Protect wound from trauma

**Scarring Prevention:**
- Proper wound closure technique
- Tension reduction (undermining, deep sutures)
- Early suture removal on face (3-5 days)
- Sun protection (first year)
- Silicone products for at-risk scars
- Scar massage after epithelialization

**Healing Optimization:**
- Optimize nutrition (protein, vitamins A, C, zinc)
- Smoking cessation
- Glycemic control (diabetes)
- Pressure offloading (ulcers)
- Adequate perfusion (revascularization if needed)
- Appropriate dressings (moist healing)`,
      keyTerms: [
        { term: 'cellulitis', definition: 'Spreading infection of skin and soft tissues; redness, warmth, swelling' },
        { term: 'lymphangitis', definition: 'Inflammation of lymphatic vessels; red streaks extending from wound' },
        { term: 'dehiscence', definition: 'Partial or complete separation of wound edges after closure' },
        { term: 'evisceration', definition: 'Protrusion of organs through wound opening; surgical emergency' },
        { term: 'hematoma', definition: 'Collection of blood in tissue or wound space' },
        { term: 'seroma', definition: 'Collection of serous fluid in wound space' },
        { term: 'hypertrophic scar', definition: 'Raised scar confined to wound boundaries; often red and thick' },
        { term: 'keloid', definition: 'Scar tissue that grows beyond original wound boundaries' },
      ],
      analogies: [
        'A seroma is like a water balloon forming under the skin - clear fluid collecting in dead space.',
        'Hypertrophic scars are like raised bumps on the road, while keloids are like off-road detours extending beyond the path.',
        'Dehiscence is like a zipper coming apart - the edges separate and need to be fixed.',
      ],
      clinicalNotes: 'Prevention is key to avoiding complications. Address modifiable risk factors (nutrition, smoking, glycemic control) and ensure proper wound care technique. Monitor wounds regularly for early signs of complications.',
      patientCounselingPoints: [
        'Most wounds heal without problems, but knowing warning signs helps catch issues early.',
        'Redness spreading from the wound, fever, or increasing pain are reasons to call the doctor.',
        'Protect healing wounds from injury and too much stretching.',
        'Eat healthy foods and don\'t smoke to help your wound heal.',
        'Keep all follow-up appointments even if the wound looks fine.',
      ],
    },

    3: {
      level: 3,
      summary: 'Wound complications include local and systemic infection, dehiscence, hematoma/seroma, abnormal scarring, delayed healing, and pain. Prevention requires attention to wound care, patient factors, and early recognition of warning signs.',
      explanation: `## Comprehensive Wound Complication Management

### Infection - Detailed Approach

**Bacterial Load Thresholds:**
- **<10^3 CFU/g:** Contamination (normal)
- **10^3-10^5 CFU/g:** Colonization (no infection)
- **>10^5 CFU/g:** Infection (classic criterion)
- **>10^6 CFU/g:** Definitely infected

**Clinical Diagnosis Criteria (4 or more needed):**
1. **Increasing pain** after initial improvement
2. **Erythema** extending from wound edge (>2 cm)
3. **Edema** or induration
4. **Heat** increased compared to surrounding
5. **Purulent discharge** (pus)
6. **Delayed healing** or wound breakdown
7. **Foul odor** (alone insufficient)
8. **Systemic signs:** Fever, chills, leukocytosis

**Special Infection Types:**

**Necrotizing Soft Tissue Infections (NSTIs):**
- **Type I:** Polymicrobial (anaerobes + facultative)
- **Type II:** Group A streptococcus ± Staph aureus
- **Type III:** Clostridial (gas gangrene)
- **Findings:**
  - Pain out of proportion
  - Crepitus (gas in tissue)
  - Bullae (hemorrhagic)
  - Woody hardness
  - Toxic appearance
- **Treatment:** Emergent surgical debridement, broad antibiotics

**Osteomyelitis:**
- **Risk factors:** Deep wound, exposed bone, diabetes, vascular disease
- **Diagnosis:**
  - **Probe-to-bone test:** Positive PPV 0.89 in diabetic foot
  - **MRI:** Sensitivity 0.85, specificity 0.70
  - **Bone biopsy:** Gold standard (culture + histology)
- **Treatment:** 4-6 weeks antibiotics, surgical debridement

**Cellulitis vs. Contact Dermatitis:**
| Feature | Cellulitis | Contact Dermatitis |
|---------|------------|-------------------|
| Onset | Acute (hours-days) | Gradual (days) |
| Pain | Tender | Itchy |
| Fever | Common | Rare |
| Systemic | Common | Rare |
| Distribution | Spreading | Limited to contact area |

**Biofilm-Associated Infection:**
- **Diagnosis:** Wound not improving despite appropriate care
- **Treatment:**
  - Serial debridement (weekly)
  - Topical antimicrobials (silver, iodine, honey, PHMB)
  - Duration: 2-4 weeks, reassess

### Dehiscence Management

**Classification:**
- **Grade 1:** Skin separation, <25% length
- **Grade 2:** Skin separation, 25-50% length
- **Grade 3:** Skin separation, >50% length
- **Grade 4:** Fascial separation (emergency)

**Management by Grade:**

**Grade 1-2:**
- Cleanse with saline
- Apply moist dressing
- Consider adhesive strips
- If <24 hours and clean:可以考虑 primary closure
- If >24 hours or infected: Heal by secondary intention

**Grade 3:**
- Wound culture if signs of infection
- Cleanse, debride if needed
- Moist wound healing
- Consider vacuum-assisted closure (NPWT)
- Surgical consult

**Grade 4 (Fascial dehiscence):**
- **Emergency:**
  - Cover with moist sterile dressing
  - NPO status
  - Surgical consultation
  - Exploratory surgery for possible evisceration
  - IV antibiotics

### Hematoma and Seroma

**Hematoma:**

**Classification:**
- **Petechiae:** <3 mm pinpoint
- **Purpura:** 3-10 mm
- **Ecchymosis:** >1 cm (bruise)
- **Hematoma:** Large collection

**Complications:**
- Infection (bacterial culture medium)
- Wound dehiscence (pressure)
- Skin necrosis (pressure)
- Fibrosis (organization)

**Management:**
- **Small (<5 cm):** Observation, may reabsorb in 2-4 weeks
- **Large or symptomatic:**
  - Evacuation (open or percutaneous)
  - Irrigation
  - Control bleeding source
  - Consider drain placement
  - Compression dressing

**Seroma:**

**Risk factors:**
- Extensive undermining
- Mastectomy/axillary dissection
- Inguinal lymph node dissection
- Shearing forces
- Inadequate drainage

**Prevention:**
- Meticulous hemostasis
- Reduce dead space (quilting sutures)
- Drain placement for high-risk procedures
- Pressure dressings
- Avoid early excessive mobility

**Management:**
- **Small:** Observation, may resolve spontaneously
- **Repeated aspiration:** Risk of infection, may need drain
- **Sclerotherapy:** Doxycycline injection for persistent
- **Surgical:** Excision of seroma cavity for refractory

### Abnormal Scarring

**Hypertrophic Scar:**
- **Timing:** Develops within weeks, stabilizes at 6-12 months
- **Location:** Any, but more common over joints
- **Pathophysiology:** Excessive collagen deposition, confined to wound
- **Treatment options:**
  - **First-line:** Pressure therapy, silicone
  - **Second-line:** Steroid injection (triamcinolone 10-40 mg/mL)
  - **Adjunctive:** Laser therapy, cryotherapy
  - **Surgical:** Excision + steroids or radiation (high recurrence)

**Keloid:**
- **Timing:** Develops over months, continues beyond wound boundaries
- **Location:** Earlobes, sternum, shoulders, upper back
- **Pathophysiology:** Dysregulated collagen synthesis beyond wound
- **Treatment:**
  - **First-line:** Steroid injection (intralesional triamcinolone)
  - **Combination:** Excision + steroids or post-op radiation
  - **Adjunctive:** Pressure therapy, silicone, 5-FU, verapamil
  - **High recurrence:** Up to 50% with excision alone

**Contracture:**
- **Common locations:**
  - Neck (reduced extension/rotation)
  - Axilla (limited abduction)
  - Hand/fingers (flexion contractures)
  - Popliteal fossa
- **Prevention:**
  - Early positioning (splinting)
  - Early mobilization
  - Physical therapy
  - Avoid prolonged immobilization in functional position
- **Treatment:**
  - Physical therapy (stretching, splinting)
  - Serial casting
  - Surgical release with skin graft/flap
  - Post-op therapy to maintain range

### Delayed Healing - Systemic Factors

**Diabetes:**
- **Mechanisms:**
  - Microvascular disease (impaired perfusion)
  - Neuropathy (loss of protective sensation)
  - Impaired immune function
  - Glycosylation of proteins (impaired healing)
  - Biofilm formation (chronic bacterial colonization)
- **Management:**
  - Glycemic control (target HbA1c <7%)
  - Offloading (total contact cast gold standard)
  - Regular debridement (weekly)
  - Revascularization if ischemic (ABI <0.8)
  - Infection control

**Vascular Insufficiency:**
- **Arterial:**
  - ABI <0.5 indicates critical limb ischemia
  - Revascularization needed for healing
  - Avoid compression
  - Moist wound healing, protection
- **Venous:**
  - Reflux or obstruction
  - Compression essential for healing
  - Elevation when supine
  - Treat underlying venous disease

**Malnutrition:**
- **Protein deficiency:**
  - Albumin <3.0 g/dL predicts poor healing
  - Prealbumin <15 mg/dL indicates acute deficiency
  - Supplement 1.2-1.5 g protein/kg/day
- **Vitamin deficiencies:**
  - Vitamin C: Collagen synthesis
  - Vitamin A: Epithelialization, immune function
  - Zinc: Epithelialization, immune function
- **Micronutrients:** Iron, copper, manganese also important

**Medications Affecting Healing:**
- **Steroids:**
  - Dose-dependent inhibition of inflammation
  - Consider vitamin A supplementation (contraindicated in pregnancy)
  - May need to hold perioperatively if possible
- **Chemotherapy:**
  - Cytotoxic effects on rapidly dividing cells
  - Dose-dependent
  - May need to delay wound closure
- **Immunosuppressants:**
  - Increased infection risk
  - Delayed healing
- **Anticoagulants:**
  - Hematoma risk
  - Not contraindication, but careful hemostasis

### Pain Management

**Pain Categories:**
- **Nociceptive:** Tissue damage, inflammatory mediators
- **Neuropathic:** Nerve damage, abnormal processing
- **Psychological:** Anxiety, depression amplifies pain

**Pharmacologic:**
- **Non-opioid:** Acetaminophen, NSAIDs
- **Opioid:** For severe acute pain (short-term)
- **Adjuvant:**
  - Gabapentin/pregabalin for neuropathic
  - TCAs for neuropathic
  - Topical lidocaine for localized pain

**Non-pharmacologic:**
- Elevation (reduces edema, pain)
- Distraction techniques
- Cold therapy (vasoconstriction, anesthesia)
- Patient education and expectation setting

### Prevention Protocols

**Pre-operative:**
- Optimize nutrition (protein 1.2-1.5 g/kg/day)
- Glycemic control (target glucose 140-180 mg/dL peri-op)
- Smoking cessation (at least 4 weeks pre-op optimal)
- Medication review (hold steroids if possible)
- MRSA screening and decolonization if indicated

**Intra-operative:**
- Meticulous hemostasis
- Gentle tissue handling
- Minimize tension (undermining, deep sutures)
- Antibiotic prophylaxis within 60 minutes of incision
- Normothermia (maintain body temperature)
- Glycemic control (avoid hyperglycemia)

**Post-operative:**
- Appropriate dressing selection
- Patient education on warning signs
- Early mobilization (as appropriate)
- Adequate pain control
- Monitor for complications

**Special Considerations:**
- **Obesity:** Higher risk of infection, dehiscence, seroma; may need drains
- **Radiated tissue:** Poor healing, higher infection risk; consider delayed closure
- **Immunocompromised:** Lower threshold for infection, slower healing`,
      keyTerms: [
        { term: 'CFU', definition: 'Colony forming unit; measure of viable bacteria; >10^5 CFU/g indicates infection' },
        { term: 'NSTI', definition: 'Necrotizing soft tissue infection; rapidly progressive infection requiring emergent debridement' },
        { term: 'probe-to-bone', definition: 'Test using sterile metal probe; touching bone suggests osteomyelitis (PPV 0.89 in diabetic foot)' },
        { term: 'evisceration', definition: 'Protrusion of abdominal contents through wound dehiscence; surgical emergency' },
        { term: 'quilting sutures', definition: 'Sutures placed to reduce dead space and prevent seroma formation' },
        { term: 'total contact cast', definition: 'Irremovable cast that offloads diabetic foot ulcer; gold standard for offloading' },
      ],
      clinicalNotes: `Complication Recognition Algorithm:

**INFECTION:**
- Local: 4+ signs (pain, redness, heat, swelling, drainage)
- Systemic: Fever, leukocytosis, SIRS criteria
- Treat: Debride + culture + antibiotics

**DEHISCENCE:**
- Superficial: Moist healing, monitor
- Deep/fascial: Surgical emergency
- Evisceration: Cover, NPO, immediate surgery

**HEMATOMA:**
- Small: Observe
- Large/symptomatic: Evacuate

**DELAYED HEALING:**
- Assess for: Infection, ischemia, offloading, nutrition, glycemic control
- Treat underlying cause
- Consider adjunctive therapies (NPWT, HBOT)`,
    },

    4: {
      level: 4,
      summary: 'Complex wound complications require understanding of pathophysiology, microbiology, and host factors. Management integrates infection control, debridement, systemic optimization, and targeted interventions for specific complications.',
      explanation: `## Advanced Management of Wound Complications

### Infection Pathophysiology and Management

**Biofilm-Associated Infections:**
- **Formation timeline:**
  - Initial attachment: minutes-hours
  - Irreversible attachment: hours
  - Maturation: 24-48 hours
  - Dispersal: ongoing (seeds new sites)

- **Diagnosis:**
  - Clinical: Wound not improved despite appropriate care
  - Microscopic: Confocal microscopy with fluorescent probes (research)
  - Molecular: 16S rRNA sequencing (identifies polymicrobial communities)
  - Clinical surrogate: Serial debridement trial (improvement after debridement suggests biofilm)

- **Management:**
  - Serial sharp debridement every 1-2 weeks
  - Combination: Debridement + topical antimicrobial
  - Duration: Continue until improved (typically 2-4 weeks)
  - Adjuncts: Ultrasound, plasma, pulsed lavage

**Molecular Diagnosis:**
- **PCR-based panels:**
  - Rapid identification (hours vs. days)
  - MRSA, VRE, Pseudomonas detection
  - Antibiotic resistance genes
  - Useful for culture-negative infection

- **NGS (next-generation sequencing):**
  - Culture-independent
  - Identifies polymicrobial communities
  - Antibiotic resistance profiling
  - Expensive, not routinely available

**Antibiotic Stewardship:**
- **Principles:**
  - Obtain cultures before starting antibiotics when possible
  - Use narrow-spectrum agents when culture results available
  - Duration: 1-2 weeks for soft tissue, 4-6 weeks for osteomyelitis
  - Stop when clinical improvement evident

- **Topical antibiotics:**
  - Avoid: Promote resistance, allergic contact dermatitis
  - Exceptions: Mupirocin for staphylococcal decolonization, limited use

- **Systemic antibiotics:**
  - Mild cellulitis: Oral (cephalexin, dicloxacillin, clindamycin if penicillin allergy)
  - Severe infection: IV (vancomycin for MRSA coverage)
  - Osteomyelitis: 4-6 weeks, IV initial then oral

### Complex Wound Complications

**Necrotizing Soft Tissue Infections (NSTIs):**

**Classification:**
- **Type I:** Polymicrobial (clostridia, Bacteroides, Enterobacteriaceae)
- **Type II:** Group A strep ± S. aureus
- **Type III:** Clostridial myonecrosis (gas gangrene)
- **Type IV:** Fungal (Candida, Zygomycetes) in immunocompromised

**Clinical Findings:**
- **Pain out of proportion** (often earliest sign)
- **Hard, woody texture** to tissue
- **Crepitus** on palpation (gas in tissue)
- **Bullae** (often hemorrhagic, late finding)
- **Purple/bronze discoloration**
- **Systemic toxicity:** Fever, hypotension, organ dysfunction

**Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC):**
| Parameter | Points |
|-----------|--------|
| CRP >150 mg/L | 4 |
| WBC >15,000 or <15,000 | 2 |
| Hemoglobin <11 g/dL | 1 |
| Sodium <135 mmol/L | 2 |
| Creatinine >1.6 mg/dL | 2 |
| Glucose >180 mg/dL | 1 |

**Score interpretation:**
- ≥8: High risk
- 6-7: Moderate risk
- ≤5: Low risk

**Management:**
1. **Emergent surgical debridement** (within 6 hours)
2. **Broad antibiotics:**
   - Vancomycin + Piperacillin-tazobactam + Clindamycin
   - Add clindamycin for toxin suppression (streptococcal)
3. **Supportive care:** IV fluids, vasopressors if needed
4. **Hyperbaric oxygen:** Consider for clostridial infections
5. **Repeat debridement:** Often 2-3 procedures needed

### Osteomyelitis

**Classification:**
- **Acute:** <6 weeks duration
- **Chronic:** >6 weeks, bone necrosis, sequestrum formation
- **Contiguous:** From adjacent soft tissue infection
- **Hematogenous:** From bloodstream

**Diagnosis:**
- **Probe-to-bone test:**
  - PPV 0.89 in diabetic foot ulcers
  - Simple bedside test
  - Can be done with sterile metal probe or cotton swab

- **Imaging:**
  - **Plain X-ray:** Limited early (changes take 10-14 days)
  - **MRI:** Gold standard (sensitivity 0.85, specificity 0.70)
  - **Bone scan:** Sensitive but not specific
  - **PET/CT:** Emerging, high accuracy

- **Bone biopsy:**
  - Gold standard for diagnosis
  - Culture + histology (both needed)
  - Percutaneous or open

**Treatment:**
- **Duration:** 4-6 weeks minimum
- **Antibiotics:**
  - Empiric: Vancomycin + cefepime or meropenem (broad)
  - Culture-directed: Narrow spectrum
  - Bioavailability: Prefer oral if good GI absorption
- **Surgical:**
  - Debridement of necrotic bone
  - Resection of sequestrum
  - Revascularization if ischemic

### Chronic Wounds and Recurrence

**Diabetic Foot Ulcers:**
- **Recurrence rate:** 40% within 1 year
- **Prevention:**
  - Offloading (therapeutic footwear, custom orthotics)
  - Regular foot examination
  - Patient education (daily inspection)
  - Glycemic control (HbA1c <7%)
  - Smoking cessation
  - Callus debridement

**Venous Leg Ulcers:**
- **Recurrence rate:** 20-60%
- **Prevention:**
  - Compression stockings post-healing (lifelong)
  - Weight management
  - Regular exercise (calf muscle pump)
  - Treat superficial venous reflux if indicated

**Pressure Ulcers:**
- **Recurrence rate:** Varies by mobility and prevention measures
- **Prevention:**
  - Turning/repositioning every 2 hours
  - Pressure redistribution surface
  - Skin inspection daily
  - Nutrition optimization
  - Moisture management (incontinence)
  - Offload bony prominences

### Pain Syndromes

**Neuropathic Pain:**
- **Causes:** Nerve injury during trauma, compression, ischemia
- **Characteristics:** Burning, shooting, electrical, tingling
- **Diagnosis:**
  - Clinical suspicion based on character
  - Distal to nerve injury
  - Often worse at night
- **Treatment:**
  - **First-line:** Gabapentin, pregabalin
  - **Second-line:** TCAs (amitriptyline, nortriptyline)
  - **Topical:** Lidocaine 5% patch, capsaicin
  - **Duloxetine:** SNRI also effective

**Complex Regional Pain Syndrome (CRPS):**
- **Formerly:** Causalgia, reflex sympathetic dystrophy
- **Types:** CRPS-I (without nerve injury), CRPS-II (with nerve injury)
- **Clinical features:**
  - Burning pain, allodynia (pain from light touch)
  - Edema, skin changes (color, temperature)
  - Motor dysfunction, trophic changes
- **Treatment:**
  - Early intervention critical
  - Physical therapy (desensitization)
  - Gabapentinoids
  - Sympathetic blocks
  - Graded motor imagery

### Systemic Optimization

**Nutritional Assessment:**
- **Serum albumin:** <3.0 g/dL predicts poor healing
- **Prealbumin:** Half-life 2-3 days, more sensitive indicator
- **Transferrin:** Another short-term marker
- **Micronutrients:**
  - Vitamin C: Collagen synthesis, immune function
  - Zinc: Epithelialization, immune function
  - Vitamin A: Epithelialization, counteracts steroids
  - Iron: Oxygen transport, collagen synthesis

**Supplementation Guidelines:**
- **Protein:** 1.2-1.5 g/kg/day for healing wounds
- **Vitamin C:** 500-1000 mg BID
- **Zinc:** 220 mg daily (zinc sulfate) - limit to 2-3 weeks
- **Vitamin A:** 25,000 IU daily (if deficient or on steroids)
- **Consider:** Multivitamin, arginine (some evidence)

**Glycemic Control:**
- **Target:**
  - Fasting glucose: 80-130 mg/dL
  - Post-prandial: <180 mg/dL
  - HbA1c: <7% (individualized)
- **Impact:**
  - Hyperglycemia impairs neutrophil function, collagen synthesis
  - Tight control improves healing in diabetics

**Vascular Optimization:**
- **Arterial:**
  - ABI: 0.9-1.3 normal, <0.8 indicates disease, <0.5 critical
  - TcPO2: >30 mmHg needed for healing
  - Revascularization if indicated
- **Venous:**
  - Compression for venous ulcers
  - Treat superficial reflux if contributing
  - Manage edema (elevation, diuretics if needed)

### Scar Management Strategies

**Early Intervention (0-2 weeks):**
- Wound protection
- Hygiene
- Scar massage (after epithelialization)
- Sun avoidance/ protection

**Intermediate (2-12 weeks):**
- Continue scar massage
- Silicone gel or sheeting
- Pressure therapy (if at-risk or hypertrophic)
- Sun protection

**Late (>12 weeks):**
- Continue silicone for hypertrophic/keloid-prone
- Consider scar revision if unfavorable
- Laser therapy for erythema, texture
- Steroid injection for hypertrophic/keloid

**Evidence-Based Scar Interventions:**
1. **Silicone gel/sheeting:** Strong evidence for prevention/treatment
2. **Pressure therapy:** Effective for burns, hypertrophic scars
3. **Corticosteroid injection:** First-line for keloids, hypertrophic
4. **Laser therapy:** Pulsed-dye for erythema, texture
5. **Surgical revision:** For unfavorable scars after matured (>6-12 months)`,
      keyTerms: [
        { term: 'LRINEC', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis; scoring system using CRP, WBC, hemoglobin, sodium, creatinine, glucose' },
        { term: 'sequestrum', definition: 'Piece of dead bone separated from healthy bone in chronic osteomyelitis' },
        { term: 'involucrum', definition: 'New bone forming around sequestrum in chronic osteomyelitis' },
        { term: 'CRPS', definition: 'Complex regional pain syndrome; chronic pain condition with autonomic and trophic changes' },
        { term: 'prealbumin', definition: 'Short-turnover protein (half-life 2-3 days) marker of nutritional status; <15 mg/dL indicates deficiency' },
        { term: 'TcPO2', definition: 'Transcutaneous oxygen pressure; >30 mmHg predicts adequate perfusion for wound healing' },
      ],
      clinicalNotes: `Complex Complication Management:

**Necrotizing Infection:**
- High index of suspicion saves lives
- Pain out of proportion = explore surgically
- Time to debridement is critical (within 6 hours)
- Repeat debridements often needed

**Osteomyelitis:**
- Probe-to-bone test has high PPV in diabetic foot
- MRI is imaging modality of choice
- Bone biopsy with culture AND histology is gold standard
- 4-6 weeks antibiotics minimum

**Biofilm:**
- Assume present in wounds not improving after 2-4 weeks
- Serial debridement every 1-2 weeks
- Combine with topical antimicrobial
- Reassess after 4 weeks

**Chronic Wound Prevention:**
- Diabetic foot: Offloading, foot care, glycemic control
- Venous ulcer: Compression stockings lifelong
- Pressure ulcer: Turning schedule, pressure surface`,
    },

    5: {
      level: 5,
      summary: 'Contemporary management of wound complications integrates molecular diagnostics, advanced imaging, multidisciplinary care, and evidence-based protocols to optimize outcomes in complex and challenging cases.',
      explanation: `## State-of-the-Art Wound Complication Management

### Advanced Diagnostic Modalities

**Molecular Imaging:**
- **FDG-PET/CT:**
  - Fluorodeoxyglucose uptake in infected tissue
  - Distinguishes infection from inflammation
  - Sensitivity: 0.96, Specificity: 0.91 for osteomyelitis
  - Gold standard for chronic osteomyelitis diagnosis

- **Labeled leukocyte scan:**
  - WBCs labeled with Indium-111 or Tc-99m
  - Accumulates at infection sites
  - Useful when MRI contraindicated

- **PET/MRI fusion:**
  - Combines metabolic and anatomic information
  - Emerging as superior modality for chronic osteomyelitis

**Advanced Microbiologic Techniques:**
- **Multiplex PCR panels:**
  - Simultaneous detection of multiple pathogens
  - Results in hours vs. days
  - Includes antibiotic resistance genes
  - Limitation: Doesn't distinguish colonization vs. infection

- **Next-generation sequencing (metagenomic):**
  - Culture-independent identification
  - Detects polymicrobial communities
  - Antimicrobial resistance gene profiling
  - Research to clinical translation

- **MALDI-TOF MS:**
  - Matrix-assisted laser desorption/ionization time-of-flight
  - Rapid bacterial identification from culture
  - Replaces biochemical identification
  - Results in minutes vs. hours/days

**Biomarker-Based Infection Detection:**
- **Procalcitonin:**
  - Superior to CRP/ESR for systemic infection
  - Levels >0.5 ng/mL suggest bacterial sepsis
  - Useful for monitoring response to therapy
  - Limited value for local infection

- **Alpha-defensin:**
  - Biomarker for periprosthetic joint infection
  - Potential application to wound infection

- **MMP-9:**
  - Elevated in chronic wounds
  - MMP-9:TIMP-1 ratio predicts healing
  - Potential for treatment monitoring

### Multidisciplinary Wound Care

**Essential Team Members:**
- **Wound care specialist:** Coordinates care, performs debridement
- **Infectious disease:** Antimicrobial stewardship, complex infections
- **Vascular surgery:** Revascularization, arterial/venous disease
- **Podiatry:** Diabetic foot care, offloading
- **Physical medicine & rehabilitation:** Offloading devices, rehab
- **Dermatology:** Atypical wounds, vasculitis, pyoderma gangrenosum
- **Nutrition:** Optimization for healing
- **Pain management:** Complex pain syndromes
- **Plastic surgery:** Reconstruction, flap closure

**Multidisciplinary Benefits:**
- Lower amputation rates (diabetic foot)
- Faster healing times
- Reduced recurrence
- Improved patient satisfaction
- Cost-effective despite higher initial costs

### Advanced Therapeutic Options

**Negative Pressure Wound Therapy (NPWT) Updates:**
- **Instillation therapy (NPWTi-d):**
  - Cyclic instillation and dwell
  - Solutions: Saline, PHMB, Dakin's, antibiotics
  - Indications: Infected wounds, biofilm, cavitary wounds
  - Evidence: Improved outcomes vs. standard NPWT for infected wounds

- **Single-use NPWT:**
  - Portable, disposable devices
  - For small wounds, home use
  - Cost-effective alternative to traditional NPWT

- **Closed incision NPWT:**
  - Prophylactic use over closed incisions
  - Reduces surgical site infections in high-risk patients
  - Evidence: Strong for obese, abdominal surgeries

**Hyperbaric Oxygen Therapy (HBOT):**
- **Mechanisms:**
  - Increased dissolved oxygen in plasma
  - Angiogenesis stimulation
  - Enhanced fibroblast function
  - Antimicrobial effect (especially anaerobes)
  - Reduced edema

- **Evidence-based indications:**
  - **Strong:** Diabetic foot ulcers (Wagner Grade 3+)
  - **Moderate:** Late radiation injury, chronic refractory osteomyelitis
  - **Consider:** Compromised grafts/flaps, necrotizing infections
  - **Insufficient/evidence lacking:** Most other wounds

- **Protocol:**
  - 2.0-2.5 ATA for 90-120 minutes
  - 5 days/week for 30-40 treatments
  - Reassess at 20 treatments

**Cellular and Tissue-Based Products (CTPs):**
- **Apligraf:** Bilayer living skin equivalent (keratinocytes + fibroblasts)
- **Dermagraft:** Fibroblast-seeded scaffold
- **dHACM:** Dehydrated human amnion/chorion membrane
- **Bioengineered skin substitutes:** Integra, Matriderm

**Evidence:**
- Diabetic foot ulcers: Improved healing vs. standard care
- Cost: High, consider after standard therapy fails
- Coverage varies by insurance

**Growth Factor Therapy:**
- **Becaplermin (PDGF-BB):**
  - Only FDA-approved growth factor for wounds
  - Indicated for diabetic foot ulcers
  - Black box warning: Cancer risk (controversial)
  - Use declining due to concerns, cost

- **Other growth factors (research/off-label):**
  - rhEGF (recombinant human EGF): Available in some countries
  - VEGF, bFGF: Investigational

**Electrical Stimulation:**
- **Mechanism:** Mimics endogenous wound electric fields
- **Evidence:**
  - Moderate evidence for pressure ulcers
  - Some evidence for venous ulcers
  - Limited for diabetic ulcers
- **Types:**
  - High-voltage pulsed current (HVPC): Most studied
  - Low-intensity direct current (LIDC)
  - Microcurrent: Emerging

**Extracorporeal Shock Wave Therapy (ESWT):**
- **Mechanism:** Mechanotransduction, angiogenesis stimulation
- **Evidence:** Growing for chronic wounds
- **Non-invasive, well-tolerated**

### Prevention of Recurrence

**Diabetic Foot Ulcer Prevention:**
- **Risk stratification:**
  - **Low risk:** No neuropathy, no deformity
  - **Increased risk:** Neuropathy or deformity
  - **High risk:** History of ulcer, amputation
  - **Very high risk:** Ulcer present

- **Prevention strategies:**
  - **All:** Patient education, regular foot exams
  - **Increased:** Therapeutic footwear, podiatry referral
  - **High/Very high:** Custom orthotics, regular podiatry care

- **Temperature monitoring:**
  - Home infrared thermometry
  - Detect inflammation before ulceration
  - >4°F difference indicates risk

**Venous Ulcer Recurrence Prevention:**
- **Compression stockings post-healing:**
  - Class II (30-40 mmHg) or Class III (40-50 mmHg)
  - Lifelong use
  - Patient adherence critical

- **Treating underlying venous disease:**
  - Endovenous ablation for reflux
  - Sclerotherapy for superficial veins
  - Surgical stripping (less common now)

- **Weight management:**
  - Weight loss reduces venous hypertension
  - Exercise improves calf muscle pump

**Pressure Ulcer Prevention:**
- **Standard bundle:**
  - Risk assessment (Braden scale) on admission
  - Turning/repositioning every 2 hours
  - Pressure redistribution surface (high-risk patients)
  - Skin inspection at least daily
  - Moisture management (incontinence care)
  - Nutrition optimization

- **Special populations:**
  - ICU: Consider alternating pressure surfaces
  - OR: Padding, positioning for prolonged procedures
  - Edematous patients: Elevation, offload heels

### Quality Metrics and Outcomes

**Healing Metrics:**
- **Complete closure:** Gold standard outcome
- **Percent area reduction (PAR):** 40% at week 4 predicts healing
- **Time to healing:** Mean/median for population
- **Recurrence rate:** Especially important for diabetic foot and venous ulcers
- **Amputation rate:** Critical for diabetic foot ulcers
- **Quality of life:** Wound-QoL, CWIS (Cardiff Wound Impact Schedule)

**Cost-Effectiveness:**
- **Prevention vs. treatment:**
  - Pressure ulcer prevention is cost-effective
  - Diabetic foot prevention significantly reduces costs
  - Compression stockings cost-effective for venous ulcers

- **Treatment cost-effectiveness:**
  - NPWT cost-effective for complex wounds
  - HBOT cost-effective for diabetic foot ulcers (selected)
  - CTPs cost-effective after standard therapy fails

### Future Directions

**Personalized Medicine:**
- **Genomics:** Identifying genetic risk factors for impaired healing
- **Proteomics:** Tailoring treatment based on wound fluid profile
- **Microbiome analysis:** Targeted antimicrobial therapy

**Regenerative Medicine:**
- **Stem cell therapy:** MSCs for chronic wounds
- **Gene therapy:** VEGF, PDGF gene delivery
- **Tissue engineering:** 3D bioprinting of skin

**Artificial Intelligence:**
- **Wound image analysis:** Automated measurement, tissue classification
- **Healing prediction:** Early identification of non-healing wounds
- **Treatment recommendations:** Evidence-based decision support

**Smart Dressings:**
- **Sensors:** pH, temperature, bacteria detection
- **Drug delivery:** On-demand release
- **Real-time monitoring:** Telehealth integration`,
      keyTerms: [
        { term: 'FDG-PET', definition: 'Fluorodeoxyglucose positron emission tomography; imaging modality detecting metabolic activity for infection diagnosis' },
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight mass spectrometry; rapid bacterial identification' },
        { term: 'CTP', definition: 'Cellular and tissue-based products; living biological therapies for wound healing' },
        { term: 'ESWT', definition: 'Extracorporeal shock wave therapy; mechanotransduction therapy for chronic wounds' },
        { term: 'procalcitonin', definition: 'Biomarker for bacterial sepsis; superior to CRP/ESR for systemic infection diagnosis' },
        { term: 'Braden scale', definition: 'Pressure ulcer risk assessment tool evaluating sensory perception, moisture, activity, mobility, nutrition, friction/shear' },
      ],
      clinicalNotes: `Advanced Complication Management:

**Necrotizing Infection:**
- Time is critical (mortality increases hourly)
- Early surgical consultation saves lives
- Consider LRINEC score for risk stratification
- Repeat debridements until necrotic tissue cleared

**Osteomyelitis:**
- FDG-PET/CT is gold standard for chronic cases
- Bone biopsy with culture + histology is diagnostic gold standard
- 4-6 weeks antibiotics minimum
- Surgical debridement often required

**Chronic Wounds:**
- Multidisciplinary care improves outcomes
- Biofilm management: Serial debridement + antimicrobial
- Revascularization before extensive treatment for arterial ulcers
- Offloading non-negotiable for diabetic foot ulcers

**Prevention of Recurrence:**
- Diabetic foot: Lifelong foot care, therapeutic footwear
- Venous ulcers: Lifelong compression stockings
- Pressure ulcers: Turning schedules, pressure surfaces`,
    },
  },

  media: [
    {
      id: 'infection-signals',
      type: 'diagram',
      filename: 'infection-warning-signs.svg',
      title: 'Wound Infection Warning Signs',
      description: 'Visual guide to signs and symptoms of wound infection',
    },
    {
      id: 'complication-prevention',
      type: 'diagram',
      filename: 'complication-prevention.svg',
      title: 'Wound Complication Prevention Strategies',
      description: 'Evidence-based prevention strategies for common complications',
    },
    {
      id: 'scar-types',
      type: 'image',
      filename: 'scar-types.jpg',
      title: 'Types of Abnormal Scars',
      description: 'Comparison of hypertrophic scars and keloids',
    },
  ],

  citations: [
    {
      id: 'infectious-diseases-society-2023',
      type: 'article',
      title: 'Clinical Practice Guidelines for the Management of Skin and Soft Tissue Infections',
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'iwgdf-guidelines-2023',
      type: 'article',
      title: 'IWGDF Guidelines on diabetic foot ulcer prevention and management',
      authors: ['Bus, S.A.', 'Armstrong, D.G.'],
      source: 'Diabetes/Metabolism Research and Reviews',
    },
    {
      id: 'ostemyelitis-diagnosis-2022',
      type: 'article',
      title: 'Diagnostic Imaging of Osteomyelitis: Current Concepts',
      source: 'Radiologic Clinics',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-basics', targetType: 'topic', relationship: 'related', label: 'Wound Basics' },
    { targetId: 'wound-care-assessment', targetType: 'topic', relationship: 'related', label: 'Wound Assessment' },
    { targetId: 'wound-care-cleaning', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning' },
    { targetId: 'wound-care-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['wound complications', 'infection prevention', 'wound healing', 'scar management'],
    keywords: ['infection', 'dehiscence', 'hematoma', 'seroma', 'keloid', 'hypertrophic scar', 'osteomyelitis'],
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

export default complicationPreventionContent;
