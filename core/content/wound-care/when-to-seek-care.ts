/**
 * When to Seek Medical Care for Wounds
 *
 * Comprehensive guidance on recognizing wounds that require professional
 * medical evaluation, including infection signs, wound characteristics,
 * and tetanus considerations.
 */

import { EducationalContent } from '../types';

export const whenToSeekCare: EducationalContent = {
  id: 'wound-care-when-to-seek-care',
  type: 'topic',
  name: 'When to Seek Medical Care for Wounds',
  alternateNames: ['Wound Emergency Signs', 'When to See a Doctor for Wounds', 'Wound Care Decision Guide'],

  levels: {
    1: {
      level: 1,
      summary: 'Some wounds need a doctor\'s care: deep cuts, wounds that won\'t stop bleeding, signs of infection, or injuries from rusty metal or animal bites.',
      explanation: `Not all cuts and scrapes need a trip to the doctor. Many minor injuries can be treated at home. But some wounds need professional medical care to heal properly and prevent serious problems.

## When to See a Doctor Right Away

### Bleeding That Won't Stop
- The wound keeps bleeding after 10-15 minutes of direct pressure
- Blood is spurting or pulsing from the wound
- A lot of blood has been lost

### Deep or Serious Wounds
- You can see fat, muscle, or bone
- The wound is very deep (more than 1/4 inch)
- The cut has jagged or torn edges
- Something is stuck in the wound

### Special Locations
- Face - for best healing and appearance
- Hands or feet - important for movement
- Near eyes, ears, or mouth
- Over a joint (elbow, knee, knuckle)
- Genital area

### Animal and Human Bites
All bites should be seen by a doctor because:
- High risk of infection
- May need special medicines
- Might need a tetanus shot

### Dirty or Contaminated Wounds
- Wound has dirt, gravel, or debris you can't clean out
- Caused by a dirty or rusty object
- Puncture wound (stepped on a nail, etc.)
- Happened in dirty water

## Signs of Infection - See a Doctor

Go to a doctor if your wound shows:
- **Increasing redness** spreading from the wound
- **Red streaks** going up from the wound toward your heart
- **Pus** - thick, yellow, green, or bad-smelling drainage
- **Fever** - temperature over 100.4°F (38°C)
- **More pain** - getting worse instead of better
- **Swelling** that's getting bigger
- **Bad smell** coming from the wound
- **Feeling sick** overall

## Tetanus Concerns

You might need a tetanus shot if:
- You haven't had one in 5 years AND the wound is dirty or deep
- You haven't had one in 10 years (for any wound)
- You're not sure when your last tetanus shot was
- The wound was caused by a rusty or dirty object

## Go to the Emergency Room If:

- Wound won't stop bleeding
- Very deep wound
- Large wound (bigger than your palm)
- Can see bone, tendon, or muscle
- Injury to face with possible scarring
- Signs of severe infection (high fever, confusion, rapid spread)
- Red streaks spreading rapidly
- The person is very young or very old
- The person has diabetes or a weak immune system

## When Home Care Is Usually Fine

You can usually care for wounds at home if:
- The cut is small and shallow
- Bleeding stops with a few minutes of pressure
- Edges of the wound come together easily
- The wound is clean and not from a bite
- You're up to date on tetanus shots
- You have no conditions that affect healing

## What to Do While Waiting

If you decide to seek care:
1. Apply pressure to stop bleeding
2. Cover with clean cloth or bandage
3. Elevate the injured area if possible
4. Don't remove any objects stuck in the wound
5. Note when the injury happened
6. Bring information about tetanus vaccination`,
      keyTerms: [
        { term: 'tetanus', definition: 'A serious disease caused by bacteria in dirt and rust that makes muscles lock up; prevented by vaccination' },
        { term: 'infection', definition: 'When germs get into a wound and multiply, causing redness, pus, fever, and other problems' },
        { term: 'puncture wound', definition: 'A wound made by something pointed pushing into the skin, like a nail or needle' },
        { term: 'contaminated', definition: 'Having dirt, germs, or other harmful substances in or on a wound' },
      ],
      analogies: [
        'A minor cut healing at home is like a small leak you can fix with tape; a deep gash needs a plumber (doctor) for proper repair.',
        'Signs of infection spreading are like a small fire getting bigger - you need help before it gets out of control.',
        'Tetanus bacteria are like hidden dangers in dirt and rust - you need protection (the vaccine) before you encounter them.',
      ],
      examples: [
        'A paper cut on your finger that stops bleeding in 2 minutes can be cared for at home.',
        'A deep cut on your hand from a kitchen knife that keeps bleeding after 10 minutes of pressure needs stitches.',
        'A cat bite on your arm should always be seen by a doctor because cat bites often get infected.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wounds requiring medical evaluation include those with uncontrolled bleeding, depth requiring closure, high infection risk (bites, contamination), signs of infection, or tetanus prophylaxis needs based on wound type and immunization status.',
      explanation: `## Criteria for Medical Evaluation

### Bleeding Concerns

**Seek immediate care if:**
- Active bleeding not controlled with 15 minutes of direct pressure
- Pulsatile (spurting) bleeding suggesting arterial involvement
- Significant blood loss (soaked through multiple dressings)
- Blood thinners or bleeding disorders

**Hemostasis tips while waiting:**
- Direct pressure with clean cloth
- Elevate above heart level if possible
- Pressure points for extremity wounds
- Do NOT use tourniquet except for life-threatening hemorrhage

### Wound Characteristics Requiring Closure

**Depth:**
- Subcutaneous fat visible
- Muscle, tendon, or bone visible
- Wound depth greater than 1/4 inch

**Length and Location:**
- Facial wounds >1/2 inch (cosmetic concern)
- Wounds >1 inch on body or extremities
- Wounds crossing joint lines
- Wounds near vital structures (eyes, major vessels)

**Edge Quality:**
- Jagged, torn, or stellate wounds
- Significant tissue loss
- Wounds that gape open

### High-Risk Wound Types

**Animal Bites:**
| Animal | Infection Risk | Special Concerns |
|--------|---------------|------------------|
| Cat | Very high (50-80%) | Deep puncture, Pasteurella |
| Dog | Moderate (5-25%) | Crush injury, Pasteurella |
| Human | High (15-30%) | Eikenella, polymicrobial |
| Wild animal | Variable | Rabies consideration |

All bites should be medically evaluated for:
- Wound care and possible closure
- Antibiotic prophylaxis
- Tetanus status
- Rabies risk assessment

**Contaminated Wounds:**
- Soil, dirt, feces contamination
- Organic material in wound
- Foreign body present
- Water exposure (especially warm fresh water, salt water)

**Puncture Wounds:**
- Through-shoe puncture (Pseudomonas risk)
- Deep penetrating injury
- Unable to visualize wound base
- May need imaging for foreign body

### Signs of Infection

**Local Signs:**
| Sign | Description |
|------|-------------|
| Erythema | Redness extending >1 cm from wound edge |
| Warmth | Increased temperature around wound |
| Swelling | Increasing edema |
| Pain | Worsening or disproportionate pain |
| Drainage | Purulent (thick, colored) discharge |
| Odor | Foul smell |

**Spreading Infection:**
- Lymphangitis: Red streaks toward regional lymph nodes
- Lymphadenopathy: Tender, swollen lymph nodes
- Cellulitis: Spreading redness, warmth, induration

**Systemic Signs:**
- Fever (>100.4°F / 38°C)
- Chills, rigors
- Malaise
- Confusion (late, concerning sign)
- Rapid heart rate

### Tetanus Prophylaxis Decisions

**Tetanus-Prone Wounds:**
- Puncture wounds
- Crush injuries
- Burns
- Frostbite
- Wounds with devitalized tissue
- Contaminated wounds (dirt, feces, saliva)
- Wounds >6 hours old

**Vaccination Guidelines:**
| Wound Type | Last Tdap/Td | Action Needed |
|------------|--------------|---------------|
| Clean, minor | >10 years | Tdap/Td |
| Clean, minor | ≤10 years | None |
| Tetanus-prone | >5 years | Tdap/Td |
| Tetanus-prone | ≤5 years | None |
| Unknown status | Any wound | Tdap/Td + TIG if tetanus-prone |

TIG = Tetanus Immune Globulin (provides immediate passive immunity)

### Special Populations

**Higher Risk for Complications:**
- Diabetes (especially foot wounds)
- Immunocompromised (HIV, chemotherapy, steroids)
- Peripheral vascular disease
- Elderly
- Malnourished

These patients should have lower threshold for medical evaluation.

### Emergency vs. Urgent vs. Routine Care

**Emergency (Call 911 or ER):**
- Uncontrolled severe bleeding
- Spurting blood (arterial)
- Signs of severe infection/sepsis
- Rapidly spreading infection
- Large or complex wounds
- Altered mental status

**Urgent Care (Same Day):**
- Wounds requiring closure
- Animal or human bites
- Puncture wounds
- Signs of early infection
- Tetanus-prone wounds with unknown vaccination
- Deep wounds in critical areas

**Primary Care (Within 1-2 Days):**
- Wounds not healing as expected
- Mild signs of infection
- Suture/staple removal
- Follow-up for concerning wounds

## What Information to Provide

When seeking care, be ready to share:
- When and how injury occurred
- What caused the wound
- Contamination (dirt, water, animal)
- Bleeding amount and duration
- Current medications (especially blood thinners)
- Last tetanus shot (if known)
- Medical conditions (diabetes, immune problems)
- Allergies`,
      keyTerms: [
        { term: 'lymphangitis', definition: 'Red streaks spreading from an infected wound along lymphatic vessels toward lymph nodes; indicates spreading infection' },
        { term: 'Pasteurella', definition: 'Bacteria commonly found in cat and dog mouths; causes rapid-onset infection after bites', pronunciation: 'pass-tuh-REL-uh' },
        { term: 'TIG', definition: 'Tetanus Immune Globulin; provides immediate protection against tetanus for high-risk wounds in unvaccinated individuals' },
        { term: 'tetanus-prone wound', definition: 'Wound with higher tetanus risk: puncture, crush, contaminated, burn, or wound with dead tissue' },
        { term: 'cellulitis', definition: 'Bacterial skin infection causing spreading redness, warmth, and swelling' },
      ],
      clinicalNotes: 'The "golden period" for wound closure is traditionally 6-8 hours, but facial wounds can often be closed up to 24 hours, and clean wounds may have longer windows. Contaminated wounds and bites may require delayed closure. Always assess tetanus status for any wound requiring medical care.',
    },

    3: {
      level: 3,
      summary: 'Evidence-based criteria for wound evaluation include wound mechanism and characteristics, anatomic considerations, contamination level, signs of infection, patient risk factors, and tetanus immunization status, with timing and setting of care guided by clinical urgency.',
      explanation: `## Risk Stratification Framework

### Wound Assessment Algorithm

**Step 1: Assess Bleeding and Hemodynamics**
- Active hemorrhage not controlled with direct pressure
- Signs of significant blood loss
- Hemodynamic instability
→ Emergency evaluation

**Step 2: Evaluate Wound Characteristics**
- Depth (subcutaneous tissue or deeper)
- Length and location
- Tissue viability
- Foreign body presence
- Need for specialized repair
→ Determine closure necessity and setting

**Step 3: Assess Infection Risk**
- Contamination level
- Wound mechanism (bite, puncture)
- Time since injury
- Patient risk factors
→ Determine antibiotic need and follow-up

**Step 4: Tetanus Prophylaxis**
- Wound type classification
- Immunization history
→ Tdap/Td +/- TIG

## Wound Closure Decisions

### Timing Considerations

**Primary Closure Indications:**
- Clean wounds presenting within appropriate time window
- Low contamination risk
- Viable tissue
- Patient able to care for wound

**Time Windows by Location:**
| Location | Traditional Window | Extended Window |
|----------|-------------------|-----------------|
| Face/scalp | 24 hours | Up to 72 hours (some evidence) |
| Body/extremities | 6-8 hours | 12-18 hours (clean wounds) |
| Hands/feet | 6-8 hours | 12-18 hours (clean) |

**Delayed Primary Closure Indications:**
- Contaminated wounds
- Bite wounds
- Wounds presenting late
- Wounds with tissue devitalization
→ Clean, pack, close in 3-5 days if no infection

**Secondary Intention:**
- Infected wounds
- Highly contaminated wounds
- Large tissue loss
- Patient preference/compliance issues

### Closure Method Selection

| Wound Type | Preferred Closure |
|------------|-------------------|
| Simple laceration | Sutures or adhesive |
| Complex/stellate | Sutures (layered if deep) |
| High-tension area | Sutures + deep closure |
| Scalp | Staples or sutures |
| Facial | Sutures (fine, meticulous) |
| Low-tension, clean | Tissue adhesive or Steri-Strips |
| Bites | Often left open or loose closure |

## Infection Risk Assessment

### Wound Classification

| Class | Definition | Infection Rate |
|-------|------------|----------------|
| Clean | Uninfected, no inflammation, no hollow viscus entry | 1-2% |
| Clean-contaminated | Controlled entry of hollow viscus | 3-11% |
| Contaminated | Fresh traumatic wound, gross spillage, inflammation | 10-17% |
| Dirty/infected | Old traumatic, existing infection, perforated viscus | 27-40% |

### High-Risk Wound Features

**Mechanism:**
- Crush injury (devitalized tissue)
- Puncture (anaerobic environment)
- Bite (oral flora inoculation)
- Blast/projectile (contamination, debris)

**Contamination:**
- Soil (Clostridium spores)
- Water (Vibrio, Aeromonas)
- Feces (polymicrobial)
- Organic material

**Location:**
- Extremities (lymphatic drainage)
- Hands (functional importance, complex anatomy)
- Perineum (contamination)
- Diabetic foot (neuropathy, vascular compromise)

### Antibiotic Prophylaxis Indications

**Generally Recommended:**
- All bite wounds (human, cat, dog)
- Highly contaminated wounds
- Open fractures
- Tendon/joint involvement
- Immunocompromised patients
- Puncture wounds through shoes

**Generally Not Indicated:**
- Simple clean lacerations
- Minor abrasions
- Clean surgical wounds (depends on procedure)

**Common Prophylactic Regimens:**
| Wound Type | First-Line |
|------------|------------|
| Dog/cat bite | Amoxicillin-clavulanate |
| Human bite | Amoxicillin-clavulanate |
| Fresh water | Fluoroquinolone or TMP-SMX |
| Salt water | Doxycycline + 3rd gen cephalosporin |

## Tetanus Prophylaxis

### Immunization Assessment

**Complete Series:**
- Primary series (3 doses) in childhood
- Booster every 10 years
- Tdap once as adult (pertussis component)

**Incomplete or Unknown:**
- Start/complete primary series
- TIG for tetanus-prone wounds

### Wound Classification for Tetanus

| Feature | Clean, Minor | Tetanus-Prone |
|---------|--------------|---------------|
| Mechanism | Sharp, clean | Crush, puncture, burn, bite |
| Contamination | No | Dirt, feces, saliva, soil |
| Tissue | Viable | Devitalized, necrotic |
| Age | <6 hours | >6 hours |
| Depth | Superficial | Deep |

### Prophylaxis Recommendations (ACIP)

| Vaccination History | Clean, Minor | Tetanus-Prone |
|--------------------|--------------|---------------|
| Unknown or <3 doses | Tdap/Td | Tdap/Td + TIG |
| ≥3 doses, last <5 years | None | None |
| ≥3 doses, last 5-10 years | None | Tdap/Td |
| ≥3 doses, last >10 years | Tdap/Td | Tdap/Td |

TIG dose: 250 units IM, separate site from vaccine

## Special Scenarios

### Diabetic Foot Wounds

**Always require medical evaluation:**
- Neuropathy masks pain/severity
- Vascular compromise delays healing
- High infection risk
- Risk of osteomyelitis
- May need offloading, vascular assessment

**Red Flags:**
- Any wound not healing in 2 weeks
- Signs of infection (even mild)
- Wound probing to bone
- Gangrene or necrosis

### Immunocompromised Patients

**Lower threshold for evaluation:**
- Even minor wounds can have complications
- Atypical presentations of infection
- May need prophylactic antibiotics
- Close follow-up essential

### Elderly Patients

**Consider:**
- Fragile skin, poor wound healing
- Polypharmacy (anticoagulants, steroids)
- Comorbidities affecting healing
- Tetanus immunity may have waned

### Pediatric Considerations

**Evaluation triggers:**
- Any bite wound
- NAT (non-accidental trauma) concerns
- Wounds in concerning patterns
- Mechanism inconsistent with development

## Discharge Instructions

**Return precautions to provide:**
- Fever >100.4°F (38°C)
- Increasing redness, swelling, pain
- Red streaks from wound
- Pus or foul-smelling drainage
- Wound opening or not healing
- Numbness or weakness beyond wound`,
      keyTerms: [
        { term: 'golden period', definition: 'Traditional time window (6-8 hours) for primary wound closure before infection risk significantly increases' },
        { term: 'delayed primary closure', definition: 'Intentional delayed wound closure (3-5 days) after initial cleaning for contaminated wounds; allows monitoring for infection' },
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices; CDC committee that develops vaccine recommendations' },
        { term: 'Tdap', definition: 'Tetanus, diphtheria, and pertussis vaccine; recommended once for adults, then Td boosters' },
        { term: 'primary series', definition: 'Initial set of vaccine doses needed to establish immunity; typically 3 doses for tetanus' },
      ],
      clinicalNotes: 'The "golden period" is not absolute - well-vascularized areas (face) tolerate longer delays, while poorly vascularized areas and contaminated wounds need earlier intervention. Clinical judgment considering wound characteristics, patient factors, and infection risk should guide decisions rather than rigid time cutoffs.',
    },

    4: {
      level: 4,
      summary: 'Advanced wound evaluation integrates understanding of wound healing physiology, microbiology, host factors, and evidence-based guidelines to optimize triage, intervention timing, prophylaxis decisions, and follow-up strategies across the spectrum of wound presentations.',
      explanation: `## Pathophysiology of Wound Complications

### Infection Development

**Bacterial Burden Dynamics:**
- All wounds are contaminated (>10^0 CFU/g)
- Colonization threshold: ~10^5 CFU/g (critical colonization)
- Clinical infection: Host response to bacterial invasion

**Factors Favoring Infection:**
1. Large bacterial inoculum
2. Virulent organisms
3. Foreign material
4. Devitalized tissue
5. Impaired host defenses
6. Poor blood supply
7. Hematoma/seroma (culture medium)

### Tetanus Pathophysiology

**Clostridium tetani:**
- Spore-forming anaerobe
- Ubiquitous in soil, dust, feces
- Germinates in anaerobic wound environment
- Produces tetanospasmin (neurotoxin)

**Mechanism:**
- Tetanospasmin enters peripheral nerves
- Retrograde axonal transport to CNS
- Blocks inhibitory neurotransmitters (GABA, glycine)
- Results in unopposed muscle contraction

**Clinical Progression:**
- Incubation: 3-21 days (shorter = more severe)
- Trismus, opisthotonus, muscle rigidity
- Autonomic instability
- Mortality 10-80% depending on resources

### Rabies Risk Assessment

**Transmission:**
- Saliva of infected mammals
- Bites most common
- Scratches, mucous membrane exposure possible

**Risk Stratification:**
| Animal | Risk Level | Action |
|--------|------------|--------|
| Bat (any contact) | High | PEP recommended |
| Wild carnivore (skunk, fox, raccoon) | High | PEP, capture if possible |
| Unvaccinated dog/cat | Moderate | Observe 10 days or PEP |
| Vaccinated dog/cat | Low | Observe, usually no PEP |
| Rodent, lagomorph | Very low | PEP not recommended |

## Evidence-Based Guidelines Review

### IDSA Skin and Soft Tissue Infection Guidelines

**Purulent vs. Non-purulent:**
- Purulent: I&D primary; culture; consider antibiotics based on severity
- Non-purulent: Antibiotics; consider imaging if concern for deeper infection

**Severity Classification:**
| Grade | Description | Management |
|-------|-------------|------------|
| Mild | Healthy, no systemic signs | Oral antibiotics |
| Moderate | Systemic signs OR comorbidities | Oral vs. IV, close follow-up |
| Severe | Failed oral, sepsis, immunocompromised | Hospitalization, IV antibiotics |

### ACIP Tetanus Prophylaxis

**Evidence Basis:**
- Efficacy of primary series: >99% protection
- Booster maintains immunity above protective level
- TIG provides immediate passive immunity

**TIG Indications (2020 Update):**
- Tetanus-prone wound + <3 documented doses OR unknown history
- Consider in immunocompromised even with adequate vaccination history

### Wound Closure Evidence

**Primary vs. Secondary Intention:**
- Systematic reviews show similar outcomes for contaminated wounds
- Patient preference and wound characteristics guide decision
- Delayed primary closure reduces infection in high-risk wounds

**Prophylactic Antibiotics for Bites:**
- Meta-analysis: NNT 14 for all bite wounds
- Cat bites: Strongest evidence for benefit
- Dog bites: Mixed evidence, generally recommended
- Human bites: Recommended

## Advanced Decision-Making

### Necrotizing Soft Tissue Infection Recognition

**Red Flags:**
- Pain out of proportion to examination
- Rapid progression
- Crepitus
- Skin necrosis or bullae
- Systemic toxicity
- Failure to respond to antibiotics

**LRINEC Score:**
- CRP, WBC, hemoglobin, sodium, creatinine, glucose
- Score ≥6: PPV 92% for NSTI
- Clinical suspicion should not wait for laboratory results

**Management:**
- Emergency surgical consultation
- Broad-spectrum antibiotics
- Operative debridement essential
- ICU admission

### Osteomyelitis Risk

**Diabetic Foot Wounds:**
- Probe-to-bone test: PPV 87% in diabetes
- X-ray: Sensitivity 54%, Specificity 68%
- MRI: Sensitivity 90%, Specificity 79%

**Clinical Features:**
- Wound present >2 weeks
- Wound area >2 cm²
- Bone exposure or palpable
- ESR >70 mm/hr
- "Sausage toe" (diffuse swelling)

### Complex Bite Management

**Cat Bites:**
- Pasteurella multocida: Most common pathogen
- 50-80% infection rate untreated
- Deep puncture wounds - high risk
- Prophylaxis strongly indicated

**Human Bites:**
- Eikenella corrodens: Key pathogen
- "Fight bite" (clenched fist): High risk
- Joint space involvement common
- Often requires surgical exploration

**Dog Bites:**
- Crush injury predominates
- Lower infection rate than cat (5-25%)
- Pasteurella, Capnocytophaga, anaerobes
- Prophylaxis recommended

## Special Testing Indications

### Imaging

**Plain Radiographs:**
- Foreign body (glass, metal)
- Underlying fracture
- Gas in soft tissues (NSTI, gas gangrene)
- Osteomyelitis (late finding)

**CT:**
- Deep space infection
- Foreign body localization
- Extent of tissue involvement

**Ultrasound:**
- Abscess vs. cellulitis
- Foreign body (non-radiopaque)
- Procedural guidance

**MRI:**
- Osteomyelitis (gold standard)
- Deep soft tissue infection
- Extent of involvement for surgical planning

### Laboratory Studies

**Routine Wound:**
- Generally not indicated for simple lacerations
- Consider CBC, BMP for significant injuries

**Suspected Infection:**
- CBC with differential
- CRP, ESR
- Blood cultures if systemic signs
- Wound culture (tissue preferred over swab)

**Bite Wounds:**
- Baseline labs if extensive
- Culture only if signs of infection

## Follow-Up Planning

### Risk-Stratified Follow-Up

| Risk Level | Follow-Up |
|------------|-----------|
| Low (simple laceration, healthy patient) | PRN |
| Moderate (closure, minor contamination) | 48-72 hours wound check |
| High (bite, significant contamination, comorbidities) | 24-48 hours |
| Very high (immunocompromised, diabetic foot) | Daily until improving |

### Suture/Staple Removal Timing

| Location | Days |
|----------|------|
| Face | 5-7 |
| Scalp | 7-10 |
| Chest/abdomen | 10-14 |
| Back | 10-14 |
| Extremities | 10-14 |
| Over joints | 14 |
| Foot soles | 14-21 |

### Return Precautions

**Immediate Return:**
- Fever >101°F (38.3°C)
- Rapidly spreading redness
- Red streaks
- Numbness or weakness
- Wound opening

**Next-Day Evaluation:**
- Increasing pain, redness, swelling
- New drainage
- Not improving as expected`,
      keyTerms: [
        { term: 'tetanospasmin', definition: 'Neurotoxin produced by Clostridium tetani; blocks inhibitory neurotransmitters causing muscle rigidity and spasms' },
        { term: 'LRINEC score', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis; uses labs to risk-stratify suspected NSTI' },
        { term: 'probe-to-bone test', definition: 'Clinical test for osteomyelitis; positive when sterile probe reaches bone through wound' },
        { term: 'fight bite', definition: 'Injury from striking another person\'s teeth; high risk for joint space infection and tendon injury' },
        { term: 'Capnocytophaga', definition: 'Bacterium in dog/cat saliva that can cause severe infection, especially in immunocompromised or asplenic patients' },
      ],
      clinicalNotes: 'For diabetic foot infections, the IDSA classification (mild, moderate, severe) guides antibiotic selection and hospitalization decisions. Probe-to-bone positivity should prompt consideration of imaging and prolonged antibiotic course. Vascular assessment (ABI, toe pressures) is essential for diabetic foot wounds.',
    },

    5: {
      level: 5,
      summary: 'Expert wound evaluation synthesizes current evidence, emerging diagnostics, antimicrobial stewardship principles, and systems-based approaches to optimize wound care across the continuum from community to tertiary settings.',
      explanation: `## Systems Approach to Wound Care

### Care Pathway Development

**Triage Protocols:**
- Standardized assessment tools
- Risk stratification algorithms
- Clear escalation criteria
- Integration across settings (EMS, ED, primary care, specialist)

**Quality Metrics:**
- Time to wound assessment
- Appropriate tetanus prophylaxis rate
- Antibiotic stewardship compliance
- Wound complication rates
- Patient satisfaction

### Telemedicine Applications

**Wound Assessment:**
- Store-and-forward for wound photography
- Real-time video assessment
- AI-assisted wound analysis
- Extends specialist access

**Evidence:**
- Comparable accuracy to in-person for many wound types
- Reduces unnecessary visits
- Improves access in underserved areas
- Limitations with wound depth assessment

## Emerging Diagnostics

### Point-of-Care Infection Detection

**Fluorescence Imaging:**
- MolecuLight: Bacterial autofluorescence
- Real-time, bedside assessment
- Guides debridement
- Sensitivity ~87%, specificity ~72%

**Rapid Molecular Testing:**
- PCR-based pathogen identification
- Resistance gene detection
- Results in hours vs. days
- Growing emergency department use

### Biomarkers

**Procalcitonin:**
- Elevated in bacterial infection
- Helps distinguish bacterial vs. viral
- May guide antibiotic duration
- Limited data specific to wounds

**Presepsin:**
- Emerging sepsis marker
- May detect infection earlier than procalcitonin
- Research stage

### Artificial Intelligence

**Wound Assessment:**
- Automated measurement
- Tissue classification
- Healing trajectory prediction
- Quality standardization

**Clinical Decision Support:**
- Risk stratification algorithms
- Antibiotic selection guidance
- Referral recommendations

## Antimicrobial Stewardship

### Principles in Wound Care

**Right Drug:**
- Match to likely pathogens
- Consider local resistance patterns
- Narrow spectrum when possible

**Right Dose:**
- Appropriate for site and severity
- Adjust for renal/hepatic function
- Consider tissue penetration

**Right Duration:**
- Shortest effective course
- Evidence-based guidelines
- Reassess at planned intervals

**Right Route:**
- Oral when appropriate (high bioavailability)
- IV for severe infections, absorption concerns

### Common Pitfalls

**Overuse:**
- Treating colonization vs. infection
- Prolonged courses without indication
- Unnecessary prophylaxis

**Underuse:**
- Delayed treatment of serious infection
- Inadequate coverage for bite wounds
- Failure to recognize severe infection

### Local Antibiogram

**Importance:**
- Resistance patterns vary by region
- Guides empiric therapy
- Updated regularly

**Key Pathogens to Track:**
- MRSA prevalence
- ESBL Enterobacteriaceae
- Pseudomonas resistance
- Aeromonas in water exposures

## Complex Wound Scenarios

### Immunocompromised Host

**Diagnostic Challenges:**
- Attenuated inflammatory response
- Atypical presentations
- Unusual pathogens

**Management Adjustments:**
- Lower threshold for evaluation and treatment
- Broader empiric coverage
- Earlier imaging
- Infectious disease consultation

**Special Pathogens:**
- Fungi (Mucor, Aspergillus) in neutropenic
- Atypical mycobacteria
- Nocardia
- Opportunistic organisms

### Injection Drug Use

**Wound Considerations:**
- Skin popping abscesses
- Track marks and scarring
- MRSA highly prevalent
- Polymicrobial deep infections

**Red Flags:**
- Endocarditis risk with bacteremia
- Spinal epidural abscess
- Necrotizing fasciitis

### Returning Travelers

**Exposure-Based Assessment:**
- Geographic location
- Activities and exposures
- Time since return

**Potential Pathogens:**
- Cutaneous leishmaniasis
- Myiasis
- Tungiasis
- Atypical mycobacteria
- Tropical ulcer (Fusobacterium)

## Rabies Prophylaxis Decision-Making

### Risk Assessment Refinement

**Exposure Type:**
| Category | Definition | PEP |
|----------|------------|-----|
| I | Touch, feeding, licks on intact skin | No |
| II | Nibbling, minor scratches without bleeding | Yes |
| III | Transdermal bites, scratches, mucous membrane | Yes + RIG |

**Animal Risk:**
- Species and behavior
- Vaccination status
- Availability for observation
- Geographic rabies prevalence

### Post-Exposure Prophylaxis

**Previously Unvaccinated:**
- RIG (20 IU/kg, infiltrate around wound)
- Vaccine: Day 0, 3, 7, 14

**Previously Vaccinated:**
- No RIG
- Vaccine: Day 0 and 3 only

### Special Considerations

**Bat Exposures:**
- PEP if bat found in room with sleeping person
- PEP if unable to rule out contact
- Very small bites may be undetected

**Immunocompromised:**
- 5-dose vaccine series
- Serology to confirm response
- May need additional doses

## Tetanus: Beyond the Basics

### Incomplete Vaccination

**Catch-Up Schedules:**
- <7 years: DTaP series
- 7-18 years: Tdap, then Td x2
- Adult: Tdap, then Td x2

### TIG Considerations

**Dosing:**
- Standard: 250 units IM
- Alternative site from vaccine
- Infiltrate around wound if feasible

**Special Populations:**
- Immunocompromised: Consider TIG even if vaccinated
- Severe/contaminated wound: Consider TIG if any uncertainty

### Tetanus Treatment (if Developed)

**Supportive Care:**
- Airway management (may need tracheostomy)
- Benzodiazepines for spasms
- Wound debridement
- Metronidazole preferred over penicillin

## Quality and Safety

### High-Reliability Practices

**Standardization:**
- Tetanus assessment embedded in workflow
- Antibiotic prophylaxis guidelines
- Wound closure protocols
- Follow-up scheduling systems

**Verification:**
- Documentation checklists
- Vaccination record systems
- Allergy verification
- Discharge instruction templates

### Handoff Communication

**Essential Elements:**
- Wound mechanism and characteristics
- Closure method used
- Antibiotics prescribed
- Tetanus status and action taken
- Rabies risk and action taken
- Follow-up plan
- Return precautions provided

### Medicolegal Considerations

**Documentation:**
- Mechanism and circumstances
- Examination findings
- Decision-making rationale
- Informed consent
- Discharge instructions
- Patient understanding confirmed

**Common Pitfalls:**
- Missed tendon injury
- Missed foreign body
- Inadequate tetanus prophylaxis
- Failure to recognize infection
- Inadequate follow-up arrangements`,
      keyTerms: [
        { term: 'RIG', definition: 'Rabies Immune Globulin; provides passive immunity for rabies post-exposure prophylaxis in unvaccinated individuals' },
        { term: 'store-and-forward', definition: 'Telemedicine modality where images/data are captured and transmitted for later review by a specialist' },
        { term: 'local antibiogram', definition: 'Periodic summary of antimicrobial susceptibility patterns for bacteria isolated in a specific healthcare setting' },
        { term: 'skin popping', definition: 'Subcutaneous or intradermal injection of drugs, often leading to abscesses and skin necrosis' },
        { term: 'cutaneous leishmaniasis', definition: 'Parasitic skin infection from sandfly bites in endemic areas; causes chronic, non-healing ulcers' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Systems thinking** - Wound care quality depends on standardized protocols, reliable follow-up systems, and clear communication across care settings.

2. **Diagnostic uncertainty** - When clinical assessment is uncertain, lower the threshold for imaging, consultation, or close follow-up rather than dismissing concerns.

3. **Stewardship balance** - Antibiotic stewardship in wound care requires balancing infection prevention with avoiding unnecessary antimicrobial exposure.

4. **Emerging tools** - Point-of-care diagnostics, telemedicine, and AI-assisted assessment are changing wound evaluation; integrate new tools thoughtfully with clinical judgment.

5. **Special populations** - Immunocompromised, diabetic, and elderly patients require modified approaches; standard risk assessments may not apply.

6. **Documentation** - Thorough documentation protects patients and providers; include decision-making rationale, instructions provided, and follow-up plans.

7. **Continuous learning** - Wound care guidelines evolve; stay current with IDSA, CDC/ACIP, and specialty society recommendations.`,
    },
  },

  media: [
    {
      id: 'wound-evaluation-algorithm',
      type: 'diagram',
      filename: 'wound-evaluation-algorithm.svg',
      title: 'Wound Evaluation Decision Algorithm',
      description: 'Flowchart for determining when to seek medical care for wounds',
    },
    {
      id: 'tetanus-prophylaxis-chart',
      type: 'diagram',
      filename: 'tetanus-prophylaxis-chart.svg',
      title: 'Tetanus Prophylaxis Guide',
      description: 'Decision chart for tetanus vaccination based on wound type and immunization history',
    },
  ],

  citations: [
    {
      id: 'idsa-ssti-guidelines',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      authors: ['Stevens, D.L.', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'acip-tetanus',
      type: 'article',
      title: 'Prevention of Tetanus, Diphtheria, and Pertussis: Recommendations of ACIP',
      authors: ['CDC'],
      source: 'MMWR Recommendations and Reports',
    },
    {
      id: 'bite-wound-management',
      type: 'article',
      title: 'Bite Wound Infections',
      authors: ['Baddour, L.M.'],
      source: 'UpToDate',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-signs-of-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
    { targetId: 'wound-care-tetanus-prophylaxis', targetType: 'topic', relationship: 'related', label: 'Tetanus Prophylaxis' },
    { targetId: 'wound-care-sutures-staples-glue', targetType: 'topic', relationship: 'related', label: 'Wound Closure Methods' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['wound assessment', 'emergency care', 'infection', 'tetanus', 'rabies'],
    keywords: ['when to see doctor', 'wound emergency', 'bite wounds', 'tetanus shot', 'wound infection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'emergency medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default whenToSeekCare;
