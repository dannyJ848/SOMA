/**
 * Wound Care - Therapeutic Procedures
 *
 * Comprehensive content on wound assessment, treatment, and healing
 * principles across the spectrum of wound types and care settings.
 */

import { EducationalContent } from '../../types';

export const woundCare: EducationalContent = {
  id: 'procedures-wound-care',
  type: 'concept',
  name: 'Wound Care',
  alternateNames: ['Wound Management', 'Wound Treatment', 'Wound Healing'],

  levels: {
    1: {
      level: 1,
      summary: 'Wound care is taking care of cuts, scrapes, and other injuries to help your body heal properly and prevent infection.',
      explanation: `When you get a cut, scrape, or other injury to your skin, your body works hard to heal it. Wound care helps your body do this job better and keeps germs out.

**Types of Wounds:**
- **Cuts:** When something sharp breaks the skin
- **Scrapes:** When skin rubs against a rough surface
- **Punctures:** When something pokes a hole in your skin
- **Burns:** When heat, chemicals, or electricity hurts your skin
- **Blisters:** When fluid collects under your skin

**Basic Wound Care Steps:**
1. **Wash your hands** before touching the wound
2. **Stop the bleeding** by pressing gently with a clean cloth
3. **Clean the wound** with water to remove dirt
4. **Apply antibiotic ointment** if available
5. **Cover with a bandage** to protect it

**Signs Your Wound Is Healing:**
- Scab forms over the wound
- Redness and swelling go away
- New pink skin grows underneath

**Warning Signs - Tell an Adult If:**
- The wound keeps bleeding
- There is pus (thick yellow or green fluid)
- Red lines spread from the wound
- The area gets more painful, red, or swollen
- You develop a fever
- The wound was caused by a rusty or dirty object

**Helping Wounds Heal:**
- Keep the wound clean and dry
- Change bandages regularly
- Eat healthy foods
- Do not pick at scabs
- Protect the wound from getting dirty

**When to See a Doctor:**
- Deep cuts that won't stop bleeding
- Wounds with objects stuck inside
- Animal or human bites
- Burns that blister
- Wounds that show signs of infection`,
      keyTerms: [
        { term: 'wound', definition: 'An injury that breaks or damages your skin' },
        { term: 'infection', definition: 'When germs get into a wound and make it worse instead of better' },
        { term: 'bandage', definition: 'A covering that protects a wound and keeps it clean' },
      ],
      analogies: [
        'A scab is like nature\'s bandage - it protects the wound while your skin heals underneath.',
        'Keeping a wound clean is like keeping a house clean - it keeps the bad stuff (germs) from causing problems.',
      ],
      examples: [
        'When you fall off your bike and scrape your knee, washing it with water and putting on a bandage is wound care.',
        'When you accidentally cut your finger while cooking, pressing a clean cloth on it to stop bleeding is the first step of wound care.',
      ],
      patientCounselingPoints: [
        'Always wash your hands before and after caring for a wound.',
        'Most small cuts and scrapes heal well with basic care at home.',
        'Tell a parent or adult if a wound looks like it is getting worse instead of better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Wound care involves cleaning, protecting, and monitoring injuries to promote healing while preventing complications like infection and scarring.',
      explanation: `## The Wound Healing Process

Understanding how wounds heal helps you take better care of them.

**Four Phases of Healing:**

**1. Hemostasis (Minutes):**
- Blood vessels constrict
- Platelets form a clot
- Bleeding stops

**2. Inflammation (1-4 Days):**
- Redness, warmth, swelling
- White blood cells fight germs
- Dead tissue is removed

**3. Proliferation (4-21 Days):**
- New blood vessels form
- New tissue (granulation tissue) fills the wound
- Wound edges pull together
- Skin cells cover the wound

**4. Remodeling (21 Days - 2 Years):**
- Scar tissue strengthens
- Redness fades
- Final appearance develops

## Types of Wound Closure

**Primary Intention:**
- Wound edges brought together (stitches, staples, glue)
- Minimal scarring
- Used for clean surgical cuts

**Secondary Intention:**
- Wound left open to heal from bottom up
- Used for infected or contaminated wounds
- Takes longer, more scarring

**Tertiary Intention (Delayed Primary):**
- Wound initially left open
- Closed later after infection risk decreases

## Wound Cleaning

**Irrigation:**
- Use clean water or saline
- Gently flush out debris
- Pressure: Tap water or syringe irrigation

**What NOT to Use:**
- Hydrogen peroxide (damages healthy tissue)
- Alcohol (too harsh, causes pain)
- Iodine (full strength can harm tissue)

## Dressings and Bandages

| Type | Use | Features |
|------|-----|----------|
| Adhesive bandages | Small cuts, scrapes | Convenient, waterproof options |
| Gauze | Medium wounds, absorption | Breathable, various sizes |
| Non-stick pads | Burns, abrasions | Won't stick to wound bed |
| Transparent films | Protecting IV sites, light wounds | Allows monitoring |
| Hydrocolloid | Blisters, minor burns | Creates moist environment |

**Changing Dressings:**
- Wash hands before and after
- Remove gently to avoid disrupting healing
- Assess wound appearance
- Clean if needed
- Apply new dressing

## When to Seek Medical Care

**Immediate Care Needed:**
- Heavy or uncontrollable bleeding
- Deep wounds (may need stitches)
- Wounds that won't close
- Wounds with embedded objects
- Animal or human bites
- Signs of infection

**Signs of Wound Infection:**
| Sign | Description |
|------|-------------|
| Increased pain | Getting worse, not better |
| Spreading redness | Expanding from wound edges |
| Warmth | Area feels hot |
| Swelling | Increasing, not decreasing |
| Discharge | Pus (yellow, green, or cloudy) |
| Fever | Temperature above 100.4°F (38°C) |
| Red streaks | Lines extending from wound |

## Tetanus Prevention

Tetanus is a serious infection that can occur with wounds, especially from dirty or rusty objects.

**Tetanus Shot Recommendations:**
- Every 10 years routinely
- Booster if wound is dirty and last shot >5 years ago
- Check with doctor if unsure of vaccination status`,
      keyTerms: [
        { term: 'hemostasis', definition: 'The process of stopping bleeding, the first phase of wound healing', pronunciation: 'hee-moh-STAY-sis' },
        { term: 'granulation tissue', definition: 'New, pink tissue that forms in healing wounds; contains new blood vessels' },
        { term: 'primary intention', definition: 'Wound healing where edges are brought together, like with stitches' },
        { term: 'secondary intention', definition: 'Wound healing where the wound is left open to fill in from the bottom up' },
        { term: 'tetanus', definition: 'A serious bacterial infection that can enter through wounds; prevented by vaccination' },
      ],
      analogies: [
        'Primary intention healing is like gluing two pieces of paper together - quick and neat. Secondary intention is like filling a hole with putty - takes longer and may be uneven.',
        'The inflammatory phase is like sending in the cleanup crew - it looks messy but is doing important work.',
      ],
    },
    3: {
      level: 3,
      summary: 'Wound care management requires understanding wound classification, healing physiology, appropriate dressing selection, infection prevention, and recognition of factors that impair healing.',
      explanation: `## Wound Classification

**By Depth:**
| Classification | Layers Involved |
|----------------|-----------------|
| Superficial | Epidermis only |
| Partial thickness | Epidermis + part of dermis |
| Full thickness | Through dermis, may involve subcutaneous tissue |
| Deep/Complex | Extends to muscle, tendon, bone |

**By Mechanism:**
- **Incision:** Clean cut from sharp object
- **Laceration:** Irregular tear
- **Abrasion:** Friction injury (scrape)
- **Avulsion:** Tissue torn away
- **Puncture:** Penetrating injury
- **Crush:** Compression injury

**By Contamination:**
| Class | Definition | Infection Risk |
|-------|------------|----------------|
| Clean | Uninfected, no GI/GU/respiratory entry | <2% |
| Clean-contaminated | Controlled entry into GI/GU/respiratory | 3-10% |
| Contaminated | Open trauma, major technique break | 10-20% |
| Dirty | Existing infection, perforated viscus | >20% |

## Wound Healing Physiology

**Cellular Events:**

*Inflammation Phase:*
- Neutrophils arrive first (peak 24-48h)
- Macrophages follow (peak 48-96h)
- Cytokine release: IL-1, IL-6, TNF-α
- Growth factor release: PDGF, TGF-β

*Proliferative Phase:*
- Fibroblast migration and collagen synthesis
- Angiogenesis (new vessel formation)
- Epithelialization from wound edges
- Wound contraction via myofibroblasts

*Remodeling Phase:*
- Collagen reorganization (Type III → Type I)
- Maximum strength at 6-12 weeks (~80% of normal)
- Continued remodeling up to 2 years

**Moist Wound Healing:**
- Faster epithelialization
- Reduced pain
- Enhanced autolytic debridement
- Improved cosmetic outcome

## Advanced Dressing Selection

| Dressing Type | Indications | Contraindications |
|---------------|-------------|-------------------|
| Alginate | Heavy exudate, packing | Dry wounds, low exudate |
| Foam | Moderate-heavy exudate | Dry wounds, sinus tracts |
| Hydrocolloid | Light-moderate exudate | Infection, heavy exudate |
| Hydrogel | Dry wounds, necrotic tissue | Heavy exudate |
| Silver-impregnated | Infected/colonized wounds | Prolonged use, MRI |
| Honey | Infected wounds, debridement | Bee allergy |
| NPWT (wound VAC) | Complex wounds, flaps | Exposed vessels, untreated osteomyelitis |

## Wound Bed Preparation

**TIME Framework:**
- **T**issue - Debride nonviable tissue
- **I**nfection/Inflammation - Control bioburden
- **M**oisture - Maintain optimal balance
- **E**dge - Encourage epithelial advancement

**Debridement Methods:**
| Method | Description | When to Use |
|--------|-------------|-------------|
| Autolytic | Body's own enzymes | Stable patients, time available |
| Enzymatic | Collagenase ointment | Selective debridement needed |
| Mechanical | Wet-to-dry, hydrotherapy | Non-selective, may damage healthy tissue |
| Sharp | Scalpel, curette | Quick removal needed |
| Surgical | Operating room | Extensive necrosis |

## Factors Affecting Wound Healing

**Local Factors:**
- Infection
- Tissue hypoxia
- Foreign bodies
- Repeated trauma
- Venous/arterial insufficiency
- Radiation damage

**Systemic Factors:**
| Factor | Mechanism of Impairment |
|--------|------------------------|
| Diabetes | Impaired neutrophils, neuropathy, vasculopathy |
| Malnutrition | Protein, vitamin C, zinc deficiency |
| Immunosuppression | Reduced inflammatory response |
| Smoking | Vasoconstriction, hypoxia, impaired collagen |
| Age | Slower proliferation, reduced collagen |
| Medications | Steroids, chemotherapy, NSAIDs |

## Wound Infection Management

**Biofilm:**
- Bacterial communities in protective matrix
- Present in most chronic wounds
- Resistant to antibiotics and host defenses
- Requires physical disruption (debridement)

**Treatment Approach:**
1. Debridement to disrupt biofilm
2. Topical antimicrobials (silver, iodine, honey)
3. Systemic antibiotics only if:
   - Cellulitis (spreading infection)
   - Systemic signs (fever, elevated WBC)
   - Deep tissue involvement

**Wound Culture:**
- Tissue biopsy most accurate
- Swab less reliable (surface colonization)
- Quantitative culture: >10^5 CFU/g = infection`,
      keyTerms: [
        { term: 'autolytic debridement', definition: 'Using the body\'s own enzymes and moisture to break down necrotic tissue' },
        { term: 'biofilm', definition: 'Community of bacteria encased in protective matrix; major impediment to wound healing' },
        { term: 'NPWT', definition: 'Negative Pressure Wound Therapy (wound VAC); applies suction to wound to promote healing' },
        { term: 'TIME framework', definition: 'Systematic approach to wound bed preparation: Tissue, Infection, Moisture, Edge' },
        { term: 'epithelialization', definition: 'Process of skin cells migrating to cover a wound surface' },
      ],
      clinicalNotes: 'Wound cultures should be obtained from tissue (not surface swabs) when possible. Surface swabs often show colonizing organisms that don\'t reflect true infection. Consider systemic antibiotics only with evidence of invasive infection, not simply positive cultures.',
    },
    4: {
      level: 4,
      summary: 'Complex wound management integrates understanding of chronic wound pathophysiology, advanced modalities including biological therapies and surgical reconstruction, and multidisciplinary approaches to optimize outcomes.',
      explanation: `## Chronic Wound Pathophysiology

**Definition:**
Wound that fails to proceed through orderly healing phases in expected timeframe (typically >4-6 weeks)

**Common Chronic Wound Types:**

*Diabetic Foot Ulcers:*
- Neuropathy (sensory, motor, autonomic)
- Angiopathy (macro and microvascular)
- Impaired immune function
- Wagner/UT classification systems
- High amputation risk without intervention

*Venous Leg Ulcers:*
- Venous hypertension
- Fibrin cuff theory
- White cell trapping
- Typically medial malleolus
- Hemosiderin staining, lipodermatosclerosis

*Pressure Injuries:*
- Sustained tissue compression
- Ischemia-reperfusion injury
- NPUAP staging (1-4, unstageable, deep tissue injury)
- Location correlates with support surface interface

*Arterial Ulcers:*
- Peripheral arterial disease
- Tissue ischemia
- Typically distal, "punched out" appearance
- Pale wound bed, absent pulses
- ABI assessment essential

## Advanced Wound Assessment

**Perfusion Evaluation:**
| Test | Normal Value | Interpretation |
|------|--------------|----------------|
| ABI | 0.9-1.3 | <0.9 PAD; >1.3 calcification |
| TBI | >0.7 | More accurate in diabetes |
| TcPO2 | >40 mmHg | Healing potential |
| SPP | >40 mmHg | Skin perfusion pressure |

**Wound Measurement:**
- Length x Width x Depth
- Wound surface area (planimetry, digital imaging)
- Undermining and tunneling
- Photography with measurement ruler

**Wound Characteristics:**
- Tissue type (granulation, slough, eschar, epithelial)
- Exudate (amount, type, odor)
- Wound edges (attached, rolled, undermined)
- Periwound skin condition

## Advanced Wound Therapies

**Negative Pressure Wound Therapy (NPWT):**

*Mechanisms:*
- Macrodeformation (wound edge approximation)
- Microdeformation (cellular effects)
- Fluid removal
- Granulation tissue stimulation

*Settings:*
- Continuous vs. intermittent
- Pressure: typically -75 to -125 mmHg
- Foam vs. gauze interface
- Dressing change frequency: 48-72 hours

*Contraindications:*
- Exposed vessels, organs, nerves
- Untreated osteomyelitis
- Necrotic tissue (debride first)
- Malignancy in wound

**Cellular and Tissue-Based Products (CTPs):**
| Type | Examples | Mechanism |
|------|----------|-----------|
| Acellular dermal matrices | Integra, AlloDerm | Scaffold for cell migration |
| Cellular products | Apligraf, Dermagraft | Living cells + matrix |
| Amniotic membrane | EpiFix, Amnioband | Growth factors, anti-inflammatory |
| Autologous skin | Split-thickness graft | Definitive coverage |

**Growth Factor Therapy:**
- Becaplermin (PDGF-BB): FDA-approved for diabetic ulcers
- Limited evidence for other growth factors

**Hyperbaric Oxygen Therapy:**
- Mechanisms: Hyperoxygenation, neovascularization, antimicrobial
- Indications: Diabetic wounds, radiation injury, compromised grafts
- Protocol: 90-120 minutes, 2.0-2.4 ATA, 20-40 treatments

## Surgical Wound Management

**Debridement Approaches:**
| Setting | Indications | Technique |
|---------|-------------|-----------|
| Bedside | Limited necrosis, stable patient | Sharp, enzymatic |
| OR | Extensive necrosis, deep infection | Surgical excision |
| Sequential | Large wounds, staged approach | Serial debridements |

**Wound Closure Options:**
- Primary closure (acute wounds)
- Delayed primary closure (contaminated wounds)
- Skin grafting (split-thickness, full-thickness)
- Local flaps (advancement, rotation, transposition)
- Free tissue transfer (complex defects)

**Reconstructive Ladder:**
1. Secondary intention
2. Primary closure
3. Skin graft
4. Local flap
5. Regional flap
6. Free flap

## Multidisciplinary Approach

**Team Members:**
- Wound care specialist/nurse
- Vascular surgeon
- Podiatrist (diabetic foot)
- Infectious disease
- Plastic/reconstructive surgery
- Physical therapy
- Nutrition
- Hyperbaric medicine
- Orthotist (offloading devices)`,
      keyTerms: [
        { term: 'ABI', definition: 'Ankle-Brachial Index; ratio of ankle to arm blood pressure used to diagnose peripheral arterial disease' },
        { term: 'CTPs', definition: 'Cellular and Tissue-Based Products; biological wound coverings including skin substitutes and dermal matrices' },
        { term: 'TcPO2', definition: 'Transcutaneous oxygen pressure; measurement of tissue oxygen reflecting healing potential' },
        { term: 'reconstructive ladder', definition: 'Progressive approach to wound coverage from simple (secondary healing) to complex (free flaps)' },
        { term: 'macrodeformation', definition: 'Mechanical wound edge approximation effect of negative pressure wound therapy' },
      ],
      clinicalNotes: 'Before initiating advanced wound therapies, ensure adequate perfusion (ABI, TcPO2), appropriate debridement, infection control, and offloading. Most chronic wounds fail to heal due to unaddressed underlying causes, not lack of advanced products.',
    },
    5: {
      level: 5,
      summary: 'Expert wound care practice integrates evidence-based protocols, emerging technologies, quality metrics, and systems-level optimization while addressing complex comorbidities and implementing precision approaches to chronic wound management.',
      explanation: `## Evidence-Based Chronic Wound Management

**Diabetic Foot Ulcer Evidence:**

*Offloading:*
- Total contact casting: Gold standard (healing OR 2.7 vs. removable device)
- Non-removable knee-high walker approaches TCC efficacy
- Patient adherence crucial with removable devices

*Key Trials:*
| Trial | Intervention | Outcome |
|-------|--------------|---------|
| Lavery et al. | TCC vs. removable walker | TCC superior healing |
| Promogran RCT | ORC/collagen matrix | Faster healing in neuropathic ulcers |
| Margolis meta-analysis | Becaplermin | NNT ~5 for healing |

*Guidelines:*
- IWGDF (International Working Group on Diabetic Foot)
- ADA Standards of Care
- NICE NG19

**Venous Leg Ulcer Evidence:**

*Compression:*
- Compression therapy essential (healing OR 5.7 vs. no compression)
- Four-layer bandaging
- Compression stockings for prevention after healing
- Target pressure: 30-40 mmHg

*Adjunctive Therapies:*
- Pentoxifylline: Modest benefit (NNT 6)
- Micronized purified flavonoid fraction: Some evidence
- Venous intervention: May improve healing and recurrence

**Pressure Injury Evidence:**

*Prevention:*
- Repositioning every 2 hours (traditional)
- High-specification foam mattresses
- Prophylactic dressings (sacrum, heels)
- Nutrition optimization

*Treatment:*
- Pressure redistribution surfaces
- Debridement
- Moisture management
- Surgical intervention for Stage III/IV

## Emerging Technologies

**Regenerative Medicine:**

*Stem Cell Therapies:*
- Autologous bone marrow aspirate
- Adipose-derived stem cells
- Mesenchymal stem cells
- Early-phase trials showing promise

*Exosome Therapy:*
- Cell-free approach
- Contains growth factors, RNA
- Investigational

*Bioprinted Skin:*
- 3D printing technology
- Incorporating multiple cell types
- Patient-specific constructs

**Advanced Diagnostics:**

*Point-of-Care Testing:*
- Fluorescence imaging (bacteria detection)
- Wound measurement apps
- Smart bandages (moisture, pH, temperature)
- Biomarker detection

*Molecular Diagnostics:*
- PCR-based pathogen identification
- Resistance gene detection
- Biofilm detection assays

**Therapeutic Technologies:**

*Ultrasound:*
- Low-frequency contact
- High-frequency non-contact
- Mechanisms: Cavitation, microstreaming, thermal

*Electrical Stimulation:*
- Various waveforms and protocols
- FDA-approved for chronic wounds
- Mechanisms: Cellular migration, blood flow

*Photobiomodulation:*
- Low-level laser/light therapy
- LED-based devices
- Mechanisms: Mitochondrial function, ATP production

## Quality and Outcomes

**Key Performance Indicators:**
| Metric | Benchmark | Measurement |
|--------|-----------|-------------|
| Healing rate | ≥50% area reduction at 4 weeks | Predictive of complete healing |
| Time to healing | Median by wound type | Survival analysis |
| Infection rate | <5% new infections | Monthly monitoring |
| Amputation rate | Facility-specific benchmarking | Risk-adjusted |
| Recurrence rate | <25% at 1 year | Long-term follow-up |
| Patient satisfaction | >80% positive | Validated surveys |

**Quality Improvement:**
- Standardized protocols
- Clinical pathways
- Documentation templates
- Regular outcome review
- Benchmarking against national data

**Economic Considerations:**
- Cost per healed wound
- Time to closure economics
- Prevention vs. treatment costs
- Advanced therapy cost-effectiveness

## Complex Clinical Scenarios

**Calciphylaxis:**
- Calcium-phosphate deposition in vessels
- High mortality (50-80%)
- Management: Wound care, bisphosphonates, sodium thiosulfate
- Parathyroidectomy in some cases

**Pyoderma Gangrenosum:**
- Neutrophilic dermatosis
- Pathergy phenomenon
- Avoid surgical debridement
- Immunosuppression primary treatment
- Topical: Tacrolimus, steroids

**Marjolin's Ulcer:**
- Malignant transformation in chronic wounds
- SCC most common
- Biopsy non-healing or changing wounds
- Wide excision required

**Immunocompromised Wound Management:**
- Enhanced infection surveillance
- Aggressive debridement
- Empiric broad-spectrum coverage
- Growth factors may be impaired
- Consider reversible immunosuppression modification

## Systems Approach

**Wound Care Program Development:**
- Dedicated wound care team
- Standardized assessment tools
- Evidence-based formulary
- Outcome tracking infrastructure
- Patient education programs
- Home health integration

**Transitions of Care:**
- Standardized handoff documentation
- Wound photography transfer
- Dressing supply coordination
- Follow-up appointment scheduling
- Home health orders

**Regulatory Compliance:**
- CMS conditions of participation
- State regulations
- Accreditation standards (TJC, ACHC)
- Documentation requirements for reimbursement

**Research and Innovation:**
- Clinical trial participation
- Registry enrollment
- Quality improvement projects
- Technology assessment
- Comparative effectiveness research`,
      keyTerms: [
        { term: 'IWGDF', definition: 'International Working Group on Diabetic Foot; develops evidence-based guidelines for diabetic foot ulcer management' },
        { term: 'calciphylaxis', definition: 'Calcific uremic arteriolopathy; rare, severe condition with vascular calcification and skin necrosis' },
        { term: 'pathergy', definition: 'Abnormal wound response to minor trauma; seen in pyoderma gangrenosum and Behcet\'s disease' },
        { term: 'photobiomodulation', definition: 'Use of light therapy (laser/LED) to stimulate cellular function and wound healing' },
        { term: 'Marjolin ulcer', definition: 'Squamous cell carcinoma arising in chronic wound or scar; requires high suspicion and biopsy' },
      ],
      clinicalNotes: `Expert Practice Points:
1. 50% wound area reduction at 4 weeks predicts healing - reassess therapy if not achieved
2. Total contact casting remains gold standard for neuropathic diabetic foot ulcers despite availability of newer technologies
3. Always biopsy chronic wounds that fail to progress or change character - Marjolin's ulcer risk
4. Pyoderma gangrenosum exhibits pathergy - avoid aggressive debridement
5. Advanced therapies require adequate wound bed preparation - don't skip the basics
6. Track outcomes systematically - you can't improve what you don't measure
7. Consider calciphylaxis in dialysis patients with refractory wounds - high mortality requires aggressive multimodal therapy`,
    },
  },

  media: [
    {
      id: 'wound-healing-phases',
      type: 'diagram',
      filename: 'wound-healing-phases.svg',
      title: 'Phases of Wound Healing',
      description: 'Illustration of hemostasis, inflammation, proliferation, and remodeling phases',
    },
    {
      id: 'dressing-selection-algorithm',
      type: 'diagram',
      filename: 'dressing-selection-algorithm.svg',
      title: 'Wound Dressing Selection Algorithm',
      description: 'Decision tree for appropriate dressing selection based on wound characteristics',
    },
    {
      id: 'time-framework',
      type: 'diagram',
      filename: 'time-framework.svg',
      title: 'TIME Framework for Wound Bed Preparation',
      description: 'Visual guide to the TIME framework components',
    },
  ],

  citations: [
    {
      id: 'iwgdf-guidelines',
      type: 'website',
      title: 'IWGDF Guidelines on the Prevention and Management of Diabetic Foot Disease',
      source: 'International Working Group on the Diabetic Foot',
      url: 'https://iwgdfguidelines.org/',
    },
    {
      id: 'npuap-guidelines',
      type: 'article',
      title: 'Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline',
      source: 'National Pressure Injury Advisory Panel',
      url: 'https://www.internationalguideline.com/',
    },
  ],

  crossReferences: [
    { targetId: 'procedures-therapeutic-overview', targetType: 'concept', relationship: 'parent', label: 'Therapeutic Procedures Overview' },
    { targetId: 'surgery-wound-closure', targetType: 'concept', relationship: 'related', label: 'Surgical Wound Closure' },
    { targetId: 'infectious-disease-skin-soft-tissue', targetType: 'concept', relationship: 'related', label: 'Skin and Soft Tissue Infections' },
  ],

  tags: {
    systems: ['integumentary', 'vascular'],
    topics: ['wound-care', 'procedures', 'chronic-disease-management'],
    keywords: ['wound healing', 'chronic wounds', 'debridement', 'dressings', 'pressure injury', 'diabetic foot'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default woundCare;
