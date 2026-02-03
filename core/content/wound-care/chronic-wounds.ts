/**
 * Chronic Wounds
 *
 * Comprehensive content on chronic wound types including pressure ulcers,
 * diabetic foot ulcers, and venous stasis ulcers, with assessment and
 * management strategies.
 */

import { EducationalContent } from '../types';

export const chronicWounds: EducationalContent = {
  id: 'wound-care-chronic-wounds',
  type: 'topic',
  name: 'Chronic Wounds',
  alternateNames: ['Non-Healing Wounds', 'Pressure Ulcers', 'Diabetic Ulcers', 'Venous Ulcers'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic wounds are wounds that don\'t heal within the normal time. The main types are pressure sores (from lying in one position too long), diabetic foot sores, and leg sores from poor blood flow.',
      explanation: `Some wounds take much longer to heal than they should. These are called chronic wounds. They usually happen because of other health problems that make healing difficult.

## What Makes a Wound "Chronic"?

- A wound is chronic when it doesn't heal within 4-6 weeks
- Something is preventing normal healing
- These wounds need special care

## Types of Chronic Wounds

### 1. Pressure Ulcers (Bed Sores)

**What They Are:**
Sores that develop when you stay in one position for too long. The pressure cuts off blood flow to that spot.

**Where They Happen:**
- Tailbone area (when lying on back)
- Heels
- Hips (when lying on side)
- Elbows
- Shoulder blades
- Back of head

**Who Gets Them:**
- People who can't move on their own
- People who are in bed a lot
- People in wheelchairs
- Elderly people with thin skin

**Stages:**
1. **Stage 1:** Red area that doesn't turn white when pressed
2. **Stage 2:** Open sore or blister
3. **Stage 3:** Deep wound showing fat underneath
4. **Stage 4:** Very deep wound showing muscle or bone

**Prevention:**
- Change positions every 2 hours
- Use special mattresses or cushions
- Keep skin clean and dry
- Eat well to keep skin healthy
- Check skin every day for red spots

### 2. Diabetic Foot Ulcers

**What They Are:**
Open sores on the feet of people with diabetes. High blood sugar damages nerves and blood vessels, making it hard for feet to heal.

**Why They Happen:**
- Nerve damage means you can't feel injuries
- Poor blood flow means slow healing
- High blood sugar feeds germs
- Small injuries go unnoticed and get worse

**Prevention:**
- Check feet every day
- Never walk barefoot
- Wear shoes that fit well
- Keep blood sugar controlled
- See a foot doctor regularly
- Don't try to remove calluses yourself

**Warning Signs:**
- Any cut, blister, or sore that doesn't heal
- Redness, warmth, or swelling
- Drainage or bad smell
- Black or discolored skin

### 3. Venous Leg Ulcers

**What They Are:**
Sores on the lower legs caused by poor blood flow back to the heart.

**Why They Happen:**
- Leg veins have trouble pumping blood upward
- Blood pools in the legs
- Pressure builds up and damages skin
- Skin breaks down and forms an ulcer

**Signs to Look For:**
- Brown or purple skin on lower legs
- Swelling in ankles and legs
- Itchy, dry skin
- Open sores, usually near the ankle

**Treatment:**
- Compression (special stockings or wraps)
- Keeping legs elevated
- Walking and exercise
- Wound care

## Caring for Chronic Wounds

### Basic Steps:
1. **Keep it clean** - Gentle washing
2. **Keep it moist** - Special dressings
3. **Protect it** - Cover with bandages
4. **Watch for infection** - Report any changes
5. **Treat the cause** - Control diabetes, relieve pressure, use compression

### When to Get Help:
- Wound is getting bigger
- Signs of infection
- New pain or more pain
- Drainage or bad smell
- Fever

## Why Healing Is Slow

Chronic wounds don't heal well because:
- Poor blood flow (not enough oxygen and nutrients)
- Infection
- Constant pressure or rubbing
- Health conditions like diabetes
- Poor nutrition
- Some medications`,
      keyTerms: [
        { term: 'chronic wound', definition: 'A wound that doesn\'t heal within the expected time, usually 4-6 weeks or more' },
        { term: 'pressure ulcer', definition: 'A sore caused by staying in one position too long, cutting off blood flow; also called bed sore or decubitus ulcer' },
        { term: 'diabetic foot ulcer', definition: 'An open sore on the foot of someone with diabetes, caused by nerve damage and poor blood flow' },
        { term: 'venous ulcer', definition: 'A leg sore caused by poor blood flow in the veins, usually on the lower leg or ankle' },
      ],
      analogies: [
        'Pressure ulcers form like when you sit on your leg too long and it falls asleep - the blood can\'t get through. If it happens for hours or days, the skin starts to break down.',
        'A diabetic foot ulcer is like having a rock in your shoe that you can\'t feel - it causes damage without you knowing.',
        'Venous ulcers happen because the leg veins are like tired pumps that can\'t push blood back up, so fluid leaks out and damages the skin.',
      ],
      examples: [
        'An elderly person in a nursing home develops a red spot on their tailbone that turns into an open sore - this is a pressure ulcer.',
        'A person with diabetes steps on a tack but doesn\'t feel it. The small wound gets infected and won\'t heal - this is a diabetic foot ulcer.',
        'Someone with leg swelling for years develops brown skin near their ankles, then an open sore - this is a venous ulcer.',
      ],
    },

    2: {
      level: 2,
      summary: 'Chronic wounds (duration >4-6 weeks) include pressure ulcers, diabetic foot ulcers, and venous leg ulcers, each with distinct pathophysiology, staging/classification systems, and evidence-based management strategies.',
      explanation: `## Understanding Chronic Wounds

### Definition
A wound is considered chronic when it fails to proceed through the normal phases of healing in an orderly and timely manner, typically >4-6 weeks without significant improvement.

### Contributing Factors
- Underlying disease (diabetes, venous insufficiency)
- Poor perfusion
- Infection
- Repeated trauma
- Malnutrition
- Medications (steroids, immunosuppressants)
- Advanced age

## Pressure Ulcers

### Pathophysiology
- Unrelieved pressure exceeds capillary closing pressure (~32 mmHg)
- Tissue ischemia → cell death
- Shear and friction contribute
- Moisture (incontinence) increases risk

### Risk Assessment Tools

**Braden Scale (most common):**
| Factor | Score Range |
|--------|-------------|
| Sensory perception | 1-4 |
| Moisture | 1-4 |
| Activity | 1-4 |
| Mobility | 1-4 |
| Nutrition | 1-4 |
| Friction/shear | 1-3 |
| **Total** | **6-23** |

- ≤18: At risk
- 15-18: Mild risk
- 13-14: Moderate risk
- ≤12: High risk

### NPUAP/EPUAP Staging

**Stage 1:**
- Non-blanchable erythema of intact skin
- May be painful, firm, soft, warmer or cooler
- In dark skin, may appear differently (purple, blue)

**Stage 2:**
- Partial-thickness skin loss involving epidermis and/or dermis
- Presents as abrasion, blister, or shallow crater
- No slough or bruising

**Stage 3:**
- Full-thickness skin loss
- Subcutaneous fat may be visible
- Bone, tendon, muscle NOT visible
- May have undermining and tunneling

**Stage 4:**
- Full-thickness tissue loss with exposed bone, tendon, or muscle
- Often includes undermining and tunneling
- Slough or eschar may be present

**Unstageable:**
- Full-thickness tissue loss
- Base covered by slough (yellow, tan, gray, green, brown) and/or eschar (tan, brown, black)
- Until enough removed to expose wound base, true depth cannot be determined

**Deep Tissue Injury:**
- Intact or non-intact skin with localized dark area
- Purple or maroon discoloration
- Blood-filled blister
- May evolve rapidly

### Prevention

**Positioning:**
- Reposition every 2 hours (bed)
- Every 15 minutes (wheelchair)
- Use 30-degree lateral position
- Avoid pressure on bony prominences

**Support Surfaces:**
- Pressure-redistributing mattresses
- Wheelchair cushions
- Heel offloading devices

**Skin Care:**
- Keep clean and dry
- Moisturize dry skin
- Manage incontinence

**Nutrition:**
- Adequate protein intake
- Calories for healing
- Consider supplements

## Diabetic Foot Ulcers

### Pathophysiology

**The Diabetic Triad:**
1. **Neuropathy:** Loss of protective sensation
2. **Ischemia:** Peripheral arterial disease
3. **Immunopathy:** Impaired infection response

**Mechanism:**
- Loss of sensation → unnoticed trauma
- Foot deformity → abnormal pressure points
- Poor healing → small wounds become ulcers
- Infection → rapid deterioration

### Classification Systems

**Wagner Classification:**
| Grade | Description |
|-------|-------------|
| 0 | Pre-ulcerative or healed ulcer |
| 1 | Superficial ulcer |
| 2 | Ulcer extending to tendon, capsule, or bone |
| 3 | Deep ulcer with abscess or osteomyelitis |
| 4 | Gangrene of forefoot |
| 5 | Gangrene of entire foot |

**University of Texas Classification:**
| Stage | Grade A | Grade B | Grade C | Grade D |
|-------|---------|---------|---------|---------|
| 0 | Pre/post ulcer | + Infection | + Ischemia | + Both |
| 1 | Superficial | + Infection | + Ischemia | + Both |
| 2 | To tendon/capsule | + Infection | + Ischemia | + Both |
| 3 | To bone/joint | + Infection | + Ischemia | + Both |

### Assessment

**Vascular:**
- Pulses (dorsalis pedis, posterior tibial)
- Ankle-brachial index (ABI)
- Capillary refill
- Skin temperature

**Neurological:**
- 10-g monofilament testing
- Vibration (128 Hz tuning fork)
- Ankle reflexes

**Infection:**
- Signs of infection (IDSA criteria)
- Probe-to-bone test
- Consider imaging for osteomyelitis

### Prevention

- Daily foot inspection
- Proper footwear (custom if needed)
- Regular podiatry care
- Glycemic control
- Smoking cessation
- Cardiovascular risk management

## Venous Leg Ulcers

### Pathophysiology

**Venous Hypertension:**
- Valve dysfunction → reflux
- Deep vein thrombosis history
- Muscle pump failure

**Tissue Damage:**
- Increased capillary pressure
- Fibrin cuff formation around capillaries
- White cell trapping
- Tissue hypoxia and inflammation
- Skin breakdown

### Clinical Features

**Location:**
- Medial lower leg (gaiter area)
- Above medial malleolus most common

**Appearance:**
- Shallow, irregular borders
- Ruddy red base
- Moderate to heavy exudate

**Associated Findings:**
- Edema
- Hemosiderin staining (brown pigmentation)
- Lipodermatosclerosis (hardening of skin)
- Varicose veins
- Atrophie blanche (white scarring)

### Classification

**CEAP Classification:**
- **C**linical signs (C0-C6)
- **E**tiology (congenital, primary, secondary)
- **A**natomy (superficial, deep, perforating)
- **P**athophysiology (reflux, obstruction, both)

C6 = Active ulceration

### Treatment

**Compression Therapy:**
- Gold standard for venous ulcers
- 30-40 mmHg at ankle
- Multilayer, short-stretch, or compression stockings
- Contraindicated if ABI <0.8

**Wound Care:**
- Moist wound healing
- Debridement as needed
- Manage exudate
- Treat infection if present

**Adjunctive:**
- Leg elevation
- Exercise (calf muscle pump)
- Pentoxifylline
- Surgery for appropriate candidates

## General Chronic Wound Management

### Wound Bed Preparation (TIME)

| Component | Meaning | Action |
|-----------|---------|--------|
| **T** | Tissue non-viable | Debridement |
| **I** | Infection/inflammation | Antimicrobials, reduce bioburden |
| **M** | Moisture imbalance | Appropriate dressings |
| **E** | Edge non-advancing | Address barriers, consider advanced therapies |

### Dressing Selection

| Wound Type | Dressing Options |
|------------|------------------|
| Dry wound | Hydrogel, hydrocolloid |
| Moderate exudate | Foam, alginate |
| Heavy exudate | Alginate, hydrofiber, NPWT |
| Infected/critical colonization | Antimicrobial (silver, iodine) |

### When to Refer

- No improvement in 4 weeks
- Signs of serious infection
- Need for debridement
- Suspected osteomyelitis
- Need for vascular assessment
- Advanced therapies needed`,
      keyTerms: [
        { term: 'Braden Scale', definition: 'Risk assessment tool for pressure ulcer development, scoring sensory perception, moisture, activity, mobility, nutrition, and friction/shear' },
        { term: 'unstageable pressure ulcer', definition: 'Pressure ulcer where true depth cannot be determined due to slough or eschar covering the wound base' },
        { term: 'neuropathy', definition: 'Nerve damage causing loss of sensation, common in diabetes and a major contributor to foot ulcers', pronunciation: 'new-ROP-uh-thee' },
        { term: 'lipodermatosclerosis', definition: 'Hardening and thickening of skin on lower legs from chronic venous disease', pronunciation: 'LIP-oh-der-mat-oh-skluh-ROH-sis' },
        { term: 'TIME', definition: 'Framework for wound bed preparation: Tissue, Infection/Inflammation, Moisture, Edge' },
      ],
      clinicalNotes: 'Always assess for underlying causes of non-healing: vascular status (ABI), infection, nutrition, and glycemic control. Compression therapy for venous ulcers requires ruling out arterial disease first. Deep tissue injury may evolve into severe pressure ulcer despite treatment.',
    },

    3: {
      level: 3,
      summary: 'Chronic wound management requires systematic assessment of wound etiology, vascular status, infection, and healing barriers, with treatment strategies tailored to wound type and underlying pathophysiology including evidence-based interventions for pressure redistribution, offloading, and compression.',
      explanation: `## Chronic Wound Pathobiology

### Stalled Healing Cascade

**Normal Wound Healing Phases:**
1. Hemostasis (minutes to hours)
2. Inflammation (days 1-4)
3. Proliferation (days 4-21)
4. Remodeling (day 21 to 1 year)

**Chronic Wound Characteristics:**
- Prolonged inflammatory phase
- Elevated matrix metalloproteinases (MMPs)
- Decreased growth factors
- Senescent fibroblasts
- Biofilm presence
- Impaired angiogenesis

### Molecular Environment

| Factor | Acute Wound | Chronic Wound |
|--------|-------------|---------------|
| MMPs | Controlled | Elevated |
| TIMPs | Balanced | Decreased |
| Growth factors | Normal | Degraded |
| Proteases | Regulated | Excessive |
| Cytokines | Appropriate | Pro-inflammatory |
| Fibroblasts | Active | Senescent |

### Biofilm in Chronic Wounds

**Prevalence:** 60-100% of chronic wounds contain biofilm

**Characteristics:**
- Polymicrobial communities
- Extracellular matrix protection
- Antibiotic tolerance
- Immune evasion
- Persistent inflammation

**Management:**
- Sharp debridement (disrupts biofilm)
- Topical antimicrobials (silver, cadexomer iodine, PHMB)
- Repeated intervention (biofilm reforms in 24-72 hours)

## Pressure Ulcer: Advanced Concepts

### Biomechanics of Pressure Injury

**Interface Pressure:**
- Normal capillary closing pressure: 32 mmHg
- Sitting pressure can exceed 300 mmHg at ischial tuberosities
- Lying pressure 70-100 mmHg over sacrum

**Deformation Effects:**
- Tissue deformation causes cell injury
- Muscle more susceptible than skin
- Deep tissue injury occurs before skin breakdown

**Time-Pressure Relationship:**
- High pressure for short time: reversible
- Moderate pressure for prolonged time: tissue damage
- Individual susceptibility varies

### Support Surface Classification

**Categories:**
1. **Reactive:** Responds to load (foam, gel, air-filled)
2. **Active:** Mechanically changes load (alternating pressure)
3. **Integrated:** Part of bed system

**Selection Criteria:**
| Patient Status | Recommendation |
|----------------|----------------|
| At risk, can reposition | Reactive support surface |
| At risk, cannot reposition | Active or high-specification reactive |
| Existing Stage 1-2 | High-specification reactive or active |
| Existing Stage 3-4 | Active (low air loss, alternating) |
| Post-operative flap | Specialty surface, minimize shear |

### Surgical Management

**Indications:**
- Stage 3-4 ulcers
- Osteomyelitis requiring bone resection
- Failed conservative management
- Quality of life considerations

**Flap Options:**
- Gluteal muscle/musculocutaneous flaps
- Tensor fascia lata flap
- Gracilis flap
- Perforator-based flaps

**Recurrence:** 30-80% (optimizing positioning and support surfaces critical)

## Diabetic Foot Ulcer: Advanced Management

### Comprehensive Assessment

**Vascular:**
- ABI (<0.9 abnormal; >1.3 may indicate calcification)
- Toe-brachial index (TBI) - more reliable in diabetes
- Transcutaneous oxygen (TcPO2)
- Duplex ultrasound
- Angiography if intervention considered

**Neuropathy:**
- 10-g monofilament: 4+ of 10 sites normal
- 128 Hz vibration: distal to proximal gradient
- Ankle reflexes
- Semmes-Weinstein monofilaments

**Infection Classification (IDSA/IWGDF):**
| Severity | Definition |
|----------|------------|
| Uninfected | No signs of infection |
| Mild | Local infection, erythema <2 cm, superficial |
| Moderate | Local infection >2 cm OR deep (abscess, fascia, bone) |
| Severe | Systemic signs (SIRS) |

### Offloading

**Total Contact Cast (TCC):**
- Gold standard for neuropathic plantar ulcers
- Distributes pressure across entire plantar surface
- Enforces compliance
- Contraindicated if: infection, ischemia, excessive drainage

**Alternatives:**
- Removable cast walker (rendered irremovable)
- Custom orthotics
- Half shoes
- Felted foam

**Evidence:**
- TCC: ~90% healing in 12 weeks
- Removable cast walker: ~65%
- Standard footwear: ~30%

### Osteomyelitis Considerations

**Diagnosis:**
- Probe-to-bone: Sensitivity 66%, Specificity 85%
- X-ray: Sensitivity 54%, Specificity 68% (2-3 week lag)
- MRI: Sensitivity 90%, Specificity 79%
- Bone biopsy: Gold standard

**Management:**
- Surgical debridement preferred
- Antibiotic therapy: 4-6 weeks if no surgery, shorter if adequate resection
- Vascular optimization essential

## Venous Leg Ulcer: Advanced Concepts

### Hemodynamic Assessment

**Venous Duplex Ultrasound:**
- Identifies reflux (>0.5 second)
- Maps anatomy
- Rules out DVT
- Guides intervention

**Air Plethysmography:**
- Quantifies reflux and muscle pump function
- Research and specialized settings

### Compression Science

**Mechanism:**
- Reduces superficial venous pressure
- Decreases capillary filtration
- Improves calf muscle pump function
- Reduces edema
- Creates favorable wound environment

**Systems:**

| Type | Characteristics | Use |
|------|-----------------|-----|
| 4-layer bandage | Sustained compression, long-wearing | Moderate-heavy exudate |
| Short-stretch | High working, low resting pressure | Active patients |
| 2-layer | Simpler application | Various |
| Compression stockings | After ulcer heals | Prevention |

**Pressure Levels:**
- 20-30 mmHg: Mild venous disease
- 30-40 mmHg: Moderate disease, healed ulcer
- 40-50 mmHg: Severe disease, active ulcer

**Contraindications:**
- ABI <0.5: Absolute
- ABI 0.5-0.8: Modified compression, specialist input
- Acute DVT, cellulitis, heart failure: Relative

### Adjunctive Therapies

**Pentoxifylline:**
- Improves blood flow
- Anti-inflammatory
- NNT ~6 for healing
- 400 mg TID

**Venous Intervention:**
- Superficial venous ablation
- Perforator ligation
- EVLA, RFA, sclerotherapy
- Best evidence for adjunct to compression

## Advanced Wound Therapies

### Negative Pressure Wound Therapy (NPWT)

**Mechanisms:**
- Macrodeformation (wound contraction)
- Microdeformation (cellular stretch)
- Fluid removal
- Increased perfusion

**Indications:**
- Chronic wounds failing standard care
- Large wounds
- Complex wounds with undermining
- Bridge to surgery

**Contraindications:**
- Malignancy in wound
- Untreated osteomyelitis
- Exposed vessels
- Necrotic tissue (debride first)

### Biological Therapies

**Growth Factors:**
- Becaplermin (PDGF-BB) - approved for diabetic ulcers
- Limited efficacy data
- Black box warning (malignancy risk in >3 tubes)

**Cellular/Tissue Products:**
- Bioengineered skin substitutes
- Acellular matrices
- Amniotic membrane
- Evidence varies by product and indication

### Hyperbaric Oxygen Therapy

**Mechanism:**
- Increases tissue oxygen
- Promotes angiogenesis
- Enhances leukocyte function
- Supports fibroblast activity

**Evidence:**
- Diabetic foot ulcer: RCT evidence of benefit
- Chronic wounds: Mixed evidence
- Typically 20-40 treatments`,
      keyTerms: [
        { term: 'matrix metalloproteinases', definition: 'Enzymes that break down extracellular matrix; elevated in chronic wounds, impairing healing', pronunciation: 'MAY-triks met-AL-oh-PRO-tee-nay-ses' },
        { term: 'total contact cast', definition: 'Gold standard offloading device for plantar diabetic ulcers; distributes pressure across entire foot' },
        { term: 'NPWT', definition: 'Negative Pressure Wound Therapy; uses controlled suction to promote wound healing' },
        { term: 'ankle-brachial index', definition: 'Ratio of ankle to arm blood pressure; screens for peripheral arterial disease (normal 0.9-1.2)' },
        { term: 'bioengineered skin substitute', definition: 'Product containing living cells or extracellular matrix components applied to wounds to promote healing' },
      ],
      clinicalNotes: 'The key to chronic wound healing is addressing the underlying cause: pressure redistribution for pressure ulcers, offloading for diabetic ulcers, compression for venous ulcers. Advanced therapies should be considered when wounds fail to show 40-50% area reduction by 4 weeks with standard care.',
    },

    4: {
      level: 4,
      summary: 'Expert chronic wound management integrates pathophysiological understanding, advanced diagnostics, multidisciplinary care pathways, and emerging therapies to address the complex interplay of factors preventing wound healing in specialized populations.',
      explanation: `## Molecular Pathophysiology

### Cellular Senescence

**Fibroblast Dysfunction:**
- Chronic wound fibroblasts show senescent phenotype
- Decreased proliferation
- Impaired migration
- Altered response to growth factors
- SASP (senescence-associated secretory phenotype)

**Implications:**
- Growth factor therapies may be ineffective
- Debridement removes senescent cells
- Cellular therapies may provide functional cells

### Proteolytic Imbalance

**MMP/TIMP Dysregulation:**
- MMP-1, 2, 8, 9 elevated
- TIMP-1, 2 decreased
- Net proteolytic environment
- Growth factor degradation
- ECM destruction

**Therapeutic Targets:**
- Protease-modulating dressings
- Collagen-based products (substrate)
- Growth factor protection strategies

### Biofilm Biology

**Structure:**
- Polymicrobial community
- EPS matrix (polysaccharides, proteins, DNA)
- Heterogeneous microenvironments
- Persister cells (antibiotic-tolerant)

**Host Interaction:**
- Induces chronic inflammation
- Evades neutrophil phagocytosis
- Impairs epithelialization
- Maintains wound in inflammatory state

**Biofilm Management Strategies:**
- Aggressive debridement (sharp, autolytic, enzymatic)
- Topical antimicrobials (continuous application)
- Surfactant-based disruption
- Combination approaches
- Maintenance debridement

## Advanced Diagnostics

### Wound Tissue Analysis

**Histopathology:**
- Assess for malignancy (Marjolin's ulcer)
- Confirm diagnosis (pyoderma gangrenosum)
- Evaluate tissue quality

**Molecular Testing:**
- Biomarker panels (research stage)
- Protease activity
- Growth factor levels
- Bacterial speciation

### Imaging Modalities

**Wound Imaging:**
- Standardized photography
- 3D wound measurement
- Fluorescence imaging (bacterial burden)
- Hyperspectral imaging (tissue oxygenation)

**Vascular Imaging:**
- CTA/MRA for arterial disease
- Venous duplex for reflux/obstruction
- Perfusion imaging

### Osteomyelitis Diagnosis

**Imaging Cascade:**
1. Plain radiograph (baseline, changes lag 2-3 weeks)
2. MRI (gold standard, 90% sensitivity/specificity)
3. Nuclear medicine (bone scan, WBC scan) if MRI contraindicated

**Bone Biopsy:**
- Gold standard for pathogen identification
- Guides antibiotic therapy
- Consider in all cases with suspected osteomyelitis

## Specialized Populations

### Calciphylaxis

**Pathophysiology:**
- Vascular calcification
- Thrombosis of small vessels
- Ischemic necrosis
- Associated with ESRD, dialysis

**Clinical Features:**
- Violaceous, retiform purpura
- Painful, necrotic skin lesions
- High mortality (>50%)

**Management:**
- Wound care
- Pain management
- Sodium thiosulfate
- Correct calcium/phosphorus
- Avoid warfarin (controversial)

### Pyoderma Gangrenosum

**Pathophysiology:**
- Neutrophilic dermatosis
- Associated with IBD, RA, malignancy
- Pathergy phenomenon

**Diagnosis:**
- Clinical (diagnosis of exclusion)
- Biopsy to rule out other causes
- Neutrophilic infiltrate on histology

**Management:**
- High-potency topical steroids
- Intralesional steroids
- Systemic immunosuppression (steroids, cyclosporine, biologics)
- Avoid debridement (may worsen)

### Malignant Wounds

**Marjolin's Ulcer:**
- SCC arising in chronic wound
- Any wound present >10 years
- Increased borders, pain, bleeding
- Biopsy any suspicious change

**Fungating Tumors:**
- Primary or metastatic malignancy
- Palliative wound care goals
- Odor management, bleeding control
- Dressing selection for comfort

## Multidisciplinary Care Models

### Wound Care Teams

**Core Members:**
- Wound care specialist (nurse, physician)
- Vascular surgery
- Plastic/reconstructive surgery
- Podiatry
- Infectious disease
- Nutrition
- Physical/occupational therapy

**Extended Team:**
- Social work
- Home health
- Orthotics/prosthetics
- Pain management
- Palliative care

### Care Pathways

**Diabetic Foot:**
- Risk stratification
- Prevention programs
- Early intervention protocols
- Rapid access clinics
- Amputation prevention programs

**Venous Ulcer:**
- Diagnosis and classification
- Compression therapy initiation
- Monitoring protocols
- Surgical referral criteria
- Recurrence prevention

### Quality Metrics

**Process Measures:**
- ABI documentation rate
- Compression therapy utilization
- Offloading for diabetic ulcers
- Debridement frequency

**Outcome Measures:**
- Healing rates at 12 weeks
- Time to healing
- Recurrence rates
- Amputation rates
- Quality of life

## Emerging Therapies

### Regenerative Medicine

**Stem Cell Therapies:**
- Bone marrow-derived
- Adipose-derived
- Peripheral blood
- Local or systemic administration
- Clinical trials ongoing

**Platelet-Rich Plasma (PRP):**
- Autologous platelet concentrate
- Growth factor delivery
- Variable efficacy data
- Standardization challenges

### Bioengineered Products

**Living Cellular Products:**
- Apligraf (bilayer)
- Dermagraft (fibroblast-based)
- OrCel (collagen-fibroblast)

**Acellular Products:**
- Collagen matrices
- Amniotic membrane
- Various ECM products

**Evidence:**
- Best for diabetic foot ulcers
- Mixed evidence for venous ulcers
- Cost-effectiveness variable

### Advanced Modalities

**Electrical Stimulation:**
- Promotes cell migration
- Enhances growth factor activity
- Evidence supports use in recalcitrant wounds

**Ultrasound:**
- Low-frequency (therapeutic)
- High-frequency (debridement - MIST)
- Promotes angiogenesis

**Photobiomodulation:**
- Low-level light therapy
- Cellular effects on healing
- Growing evidence base

## Limb Salvage

### Diabetic Foot: Amputation Prevention

**Risk Factors for Amputation:**
- Previous amputation
- End-stage renal disease
- Peripheral arterial disease
- Infection
- Deep ulcer with osteomyelitis

**Interventions:**
- Rapid revascularization
- Aggressive infection treatment
- Offloading
- Multidisciplinary care
- Patient education

### Vascular Intervention

**Revascularization Goals:**
- Direct flow to wound
- Angiosome concept
- Endovascular vs. open surgery

**Wound-Directed Revascularization:**
- Target artery feeding wound area
- May improve outcomes over traditional approach
- Requires careful vascular mapping`,
      keyTerms: [
        { term: 'Marjolin ulcer', definition: 'Squamous cell carcinoma arising in chronic wound, burn scar, or area of chronic inflammation', pronunciation: 'MAR-joh-lan' },
        { term: 'pyoderma gangrenosum', definition: 'Inflammatory condition causing painful ulcers, often associated with systemic disease; worsens with debridement', pronunciation: 'py-oh-DER-mah gang-gren-OH-sum' },
        { term: 'calciphylaxis', definition: 'Vascular calcification and thrombosis causing skin necrosis, typically in patients with kidney failure', pronunciation: 'kal-sih-fi-LAK-sis' },
        { term: 'angiosome', definition: 'Three-dimensional anatomic unit of tissue supplied by a specific source artery; used to guide revascularization' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory factors secreted by senescent cells that impair healing' },
      ],
      clinicalNotes: 'Consider alternative diagnoses when wounds fail to improve despite appropriate therapy: malignancy, vasculitis, pyoderma gangrenosum, calciphylaxis. Biopsy is indicated for atypical wounds or those not responding as expected. Amputation prevention programs with rapid access and multidisciplinary care significantly reduce major amputation rates.',
    },

    5: {
      level: 5,
      summary: 'Expert chronic wound management synthesizes current evidence, emerging science, systems-based approaches, and personalized medicine principles to optimize outcomes while addressing the complex interplay of local wound factors, systemic disease, and social determinants of health.',
      explanation: `## Systems Biology of Chronic Wounds

### Wound Microenvironment

**Cellular Landscape:**
- Senescent fibroblasts and keratinocytes
- Dysfunctional macrophages (M1 phenotype persists)
- Impaired T-cell function
- Reduced stem cell recruitment

**Molecular Milieu:**
- Pro-inflammatory cytokines (IL-1, TNF-α)
- Elevated proteases (MMP-2, 8, 9; neutrophil elastase)
- Decreased growth factors (PDGF, VEGF, EGF)
- Oxidative stress
- AGE accumulation (diabetes)

**Microbiome:**
- Polymicrobial biofilm communities
- Anaerobic bacteria in depth
- Functional metagenomics revealing metabolic activity
- Dysbiosis correlates with non-healing

### Systems Interactions

**Metabolic:**
- Diabetes: AGE formation, impaired cellular function
- Obesity: Chronic inflammation, hypoperfusion
- Malnutrition: Substrate deficiency

**Vascular:**
- Macrovascular: PAD limiting perfusion
- Microvascular: Endothelial dysfunction, capillary rarefaction
- Lymphatic: Impaired clearance, chronic edema

**Immune:**
- Immunosenescence
- Chronic inflammation
- Impaired pathogen clearance
- Autoimmune components (vasculitis)

## Precision Medicine Approaches

### Biomarker-Guided Therapy

**Wound Fluid Analysis:**
- Protease activity profiles
- Cytokine panels
- MMP/TIMP ratios
- pH measurement

**Personalized Treatment:**
- High protease → protease-modulating dressings
- Low growth factors → growth factor therapy
- Biofilm signature → aggressive antimicrobial strategy

### Pharmacogenomics

**Antibiotic Selection:**
- CYP2C19 polymorphisms (clopidogrel response)
- Fluoroquinolone susceptibility variations

**Wound Healing Genes:**
- VEGF polymorphisms
- MMP gene variants
- Research stage for clinical application

### Point-of-Care Diagnostics

**Current Technologies:**
- Bacterial fluorescence imaging
- pH strips
- Protease detection (in development)

**Emerging:**
- Biosensors for real-time monitoring
- Wound-integrated smart bandages
- AI-assisted image analysis

## Health Systems Optimization

### Care Delivery Models

**Limb Preservation Programs:**
- Rapid access (<48 hours for high-risk wounds)
- Multidisciplinary clinics
- Coordinated care pathways
- Performance dashboards
- Demonstrated amputation reduction

**Telehealth Integration:**
- Remote wound monitoring
- Store-and-forward consultation
- Patient-captured images
- Specialty access improvement

### Quality Improvement

**Process Metrics:**
- Time to specialist evaluation
- Vascular assessment completion
- Offloading/compression prescription
- Infection recognition and treatment

**Outcome Metrics:**
- Wound healing rates
- Time to healing
- Major amputation rates
- Ulcer-free days
- Quality of life scores

### Value-Based Care

**Cost Considerations:**
- Chronic wounds cost $28-97 billion annually in US
- Single diabetic foot ulcer: $50,000+ lifetime cost
- Amputation: $100,000+ plus ongoing costs
- Prevention more cost-effective than treatment

**Economic Analysis:**
- QALY calculations for therapies
- Budget impact models
- Cost-effectiveness thresholds

## Emerging Science

### Regenerative Approaches

**Stem Cell Therapies:**
- MSC (mesenchymal stem cell) therapy
- iPSC (induced pluripotent stem cell) derived products
- Exosome-based therapies
- Scaffold-based delivery

**Gene Therapy:**
- VEGF gene transfer
- Growth factor gene activation
- miRNA modulation
- Genome editing (research)

### Nanotechnology

**Nanoparticle Delivery:**
- Antimicrobial nanoparticles (silver, copper)
- Growth factor nanocarriers
- Sustained release systems

**Nanofibrous Scaffolds:**
- ECM mimics
- Drug-loaded matrices
- Cellular support structures

### Smart Technologies

**Sensor-Integrated Dressings:**
- Temperature monitoring
- Moisture sensing
- pH detection
- Bacterial load assessment

**AI and Machine Learning:**
- Wound trajectory prediction
- Treatment response prediction
- Automated measurement
- Risk stratification

## Special Considerations

### End-of-Life Care

**Palliative Wound Care:**
- Comfort over healing
- Odor management
- Pain control
- Bleeding prevention
- Family education

**Goals of Care:**
- Align wound care with overall prognosis
- Symptom-focused approach
- Quality of life prioritization

### Health Equity

**Disparities:**
- Amputation rates vary by race/ethnicity
- Access to specialty care
- Social determinants of health
- Health literacy

**Interventions:**
- Community health worker programs
- Navigation services
- Culturally competent care
- Addressing social needs

### Ethical Considerations

**Resource Allocation:**
- Advanced therapies cost-effectiveness
- Fair access to emerging treatments
- Appropriate candidacy criteria

**Autonomy:**
- Patient preferences for limb salvage vs. amputation
- Informed consent for emerging therapies
- Goals of care discussions

## Research Frontiers

### Clinical Trials

**Design Considerations:**
- Wound heterogeneity challenges
- Endpoint selection (healing, time, area reduction)
- Comparator selection
- Multicenter coordination

**Current Focus Areas:**
- Bioengineered products
- Cellular therapies
- Novel dressings
- Combination approaches

### Translational Research

**Bench to Bedside:**
- Wound models (in vitro, animal)
- Biomarker validation
- Mechanism studies
- Early clinical trials

**Implementation Science:**
- Guideline adherence
- Best practice dissemination
- Care pathway optimization

### International Collaboration

**Global Burden:**
- Diabetes epidemic driving ulcer prevalence
- Resource-limited settings challenges
- Simplified effective protocols needed

**Collaborative Networks:**
- Data sharing
- Harmonized outcomes
- Multicenter trials
- Guidelines development`,
      keyTerms: [
        { term: 'wound fluid proteomics', definition: 'Analysis of protein content in wound exudate to guide personalized therapy selection' },
        { term: 'exosome therapy', definition: 'Treatment using small extracellular vesicles containing bioactive molecules, derived from stem cells, to promote healing' },
        { term: 'angiosome-directed revascularization', definition: 'Revascularization strategy targeting the specific arterial territory supplying the wound' },
        { term: 'QALY', definition: 'Quality-adjusted life year; measure combining length and quality of life for economic analysis' },
        { term: 'biofilm debridement maintenance', definition: 'Repeated debridement strategy recognizing that biofilm reforms within 24-72 hours of disruption' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Healing trajectory predicts outcomes** - Wounds not showing 40-50% area reduction by 4 weeks unlikely to heal with current therapy; escalate or reassess.

2. **Address the underlying cause** - Advanced therapies fail without offloading, compression, or revascularization as appropriate.

3. **Biofilm is ubiquitous** - Assume biofilm presence in chronic wounds; combine debridement with sustained antimicrobial approach.

4. **Consider alternative diagnoses** - Atypical wounds warrant biopsy; malignancy, vasculitis, and pyoderma gangrenosum are important considerations.

5. **Multidisciplinary care improves outcomes** - Limb preservation programs with rapid access reduce amputations significantly.

6. **Patient-centered goals** - Align wound care intensity with overall prognosis and patient preferences; palliative wound care is appropriate when indicated.

7. **Health equity** - Recognize and address disparities in chronic wound care; social determinants significantly impact outcomes.

8. **Stay current** - The field is rapidly evolving; emerging therapies and evidence require ongoing learning and critical appraisal.`,
    },
  },

  media: [
    {
      id: 'pressure-ulcer-staging',
      type: 'diagram',
      filename: 'pressure-ulcer-staging.svg',
      title: 'Pressure Ulcer Stages',
      description: 'Visual guide to NPUAP/EPUAP pressure ulcer staging',
    },
    {
      id: 'chronic-wound-algorithm',
      type: 'diagram',
      filename: 'chronic-wound-management-algorithm.svg',
      title: 'Chronic Wound Management Algorithm',
      description: 'Decision algorithm for chronic wound assessment and management',
    },
  ],

  citations: [
    {
      id: 'npuap-guidelines',
      type: 'article',
      title: 'Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline',
      authors: ['NPUAP/EPUAP/PPPIA'],
      source: 'International Guideline',
    },
    {
      id: 'iwgdf-guidelines',
      type: 'article',
      title: 'IWGDF Guidelines on the Prevention and Management of Diabetic Foot Disease',
      authors: ['International Working Group on the Diabetic Foot'],
      source: 'IWGDF',
    },
    {
      id: 'venous-ulcer-cochrane',
      type: 'article',
      title: 'Compression for treating venous leg ulcers',
      authors: ['O\'Meara, S.', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-wound-healing-phases', targetType: 'topic', relationship: 'related', label: 'Wound Healing Phases' },
    { targetId: 'wound-care-signs-of-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
    { targetId: 'wound-care-cleaning-dressing', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning and Dressing' },
  ],

  tags: {
    systems: ['integumentary', 'cardiovascular'],
    topics: ['chronic wounds', 'pressure ulcers', 'diabetic foot', 'venous ulcers', 'wound healing'],
    keywords: ['bed sores', 'decubitus', 'non-healing', 'wound care', 'offloading', 'compression'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chronicWounds;
