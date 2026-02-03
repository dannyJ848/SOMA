/**
 * Wound Care Basics - Educational Content
 *
 * Guidance for caregivers on basic wound care, dressing changes,
 * and recognizing signs of infection or complications.
 */

import { EducationalContent } from "../../types";

export const woundCareBasics: EducationalContent = {
  id: "caregiver-wound-care-basics",
  type: "concept",
  name: "Wound Care Basics",
  alternateNames: [
    "Basic Wound Care",
    "Dressing Changes",
    "Wound Management",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Wound care means keeping cuts, scrapes, or surgical wounds clean and covered so they can heal properly.",
      explanation: `When someone has a wound, taking good care of it helps it heal faster and prevents infection.

**Why Wound Care Matters**
- Clean wounds heal faster
- Covered wounds are protected from germs
- Proper care prevents infection
- Good care reduces scarring

**Basic Steps for Simple Wounds**
1. **Wash your hands** before touching the wound
2. **Clean the wound** gently with water
3. **Pat it dry** with a clean cloth
4. **Apply medicine** if the doctor says to
5. **Cover it** with a clean bandage
6. **Wash your hands** again when done

**Supplies You Might Need**
- Clean gloves
- Gauze pads
- Medical tape
- Bandages
- Antibiotic ointment (if recommended)

**Warning Signs to Watch For**
Call the doctor if you see:
- Redness spreading around the wound
- Yellow or green discharge
- Fever
- Increased pain
- Bad smell from the wound

**Important Tips**
- Change bandages as often as the doctor says
- Do not pick at scabs or stitches
- Keep wounds dry unless told otherwise
- Follow doctor"s instructions carefully`,
      keyTerms: [
        {
          term: "wound",
          definition: "A break or opening in the skin from a cut, scrape, or surgery",
        },
        {
          term: "bandage",
          definition: "A covering used to protect and cover a wound",
        },
        {
          term: "infection",
          definition: "When germs get into a wound and cause problems",
        },
      ],
      analogies: [
        "A bandage is like a shield - it protects the wound from dirt and germs while it heals.",
        "Taking care of a wound is like taking care of a garden - keep it clean, protect it, and give it time to grow (heal).",
      ],
      examples: [
        "After his mom\"s surgery, David learned to change her bandage every day while keeping everything clean.",
        "Lisa keeps a basket of wound care supplies organized so she can easily help her husband with his daily dressing change.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Wound care involves assessing wounds, performing proper cleaning and dressing changes, monitoring for healing, and recognizing signs of infection or complications requiring medical attention.",
      explanation: `**Understanding Wounds**

**Types of Wounds Caregivers May Encounter**
- Surgical incisions (from operations)
- Skin tears (from fragile skin)
- Pressure injuries (from lying or sitting too long)
- Diabetic foot wounds
- Minor cuts and scrapes

**The Wound Healing Process**
1. **Inflammatory phase** (days 1-4): Redness, swelling, warmth
2. **Proliferative phase** (days 4-21): New tissue forms
3. **Remodeling phase** (weeks to months): Scar tissue strengthens

**Wound Care Procedure**

**Preparation**
- Gather all supplies
- Wash hands thoroughly
- Put on clean gloves
- Prepare a clean work area

**Cleaning**
- Remove old dressing carefully
- Clean wound as instructed (usually with saline or water)
- Clean from center outward
- Pat dry with clean gauze

**Dressing Application**
- Apply any prescribed medications
- Cover with appropriate dressing
- Secure with tape (not too tight)
- Dispose of old materials properly

**Signs of Normal Healing**
- Slight redness at wound edges
- Pink or red tissue in wound bed
- Wound getting smaller over time
- Decreased drainage over time

**Warning Signs (Contact Doctor)**
| Sign | What It May Mean |
|------|------------------|
| Spreading redness | Infection spreading |
| Increased pain | Infection or complication |
| Yellow/green discharge | Infection |
| Fever | Systemic infection |
| Foul odor | Infection |
| Wound not healing | Complications |
| Bleeding that will not stop | Need medical attention |

**Special Considerations**
- Diabetics: Check feet daily, watch for slow healing
- Elderly: Skin is fragile, use gentle tape
- Blood thinners: May bleed more, longer
- Poor nutrition: Affects wound healing`,
      keyTerms: [
        {
          term: "dressing",
          definition:
            "A protective covering placed over a wound, which may include gauze, films, or specialized materials",
        },
        {
          term: "pressure injury",
          definition:
            "Damage to skin from staying in one position too long, also called bedsore or pressure ulcer",
        },
        {
          term: "wound bed",
          definition: "The surface of the wound that is healing; should be pink or red",
        },
        {
          term: "drainage",
          definition:
            "Fluid that comes from a wound; normal drainage is clear or slightly yellow",
        },
      ],
      analogies: [
        "Wound healing is like construction - first the area is cleared (inflammation), then rebuilt (proliferation), and finally finished (remodeling).",
      ],
    },
    3: {
      level: 3,
      summary:
        "Wound care requires assessment of wound characteristics, selection of appropriate dressing materials, application of aseptic technique, and monitoring for healing progression or complications requiring intervention.",
      explanation: `## Wound Assessment

**Key Assessment Parameters**
- Location and size (measure length, width, depth)
- Wound bed appearance (tissue type)
- Drainage (amount, color, consistency, odor)
- Periwound skin condition
- Pain level
- Signs of infection

**Tissue Types in Wound Bed**
| Tissue | Appearance | Meaning |
|--------|------------|---------|
| Granulation | Beefy red, moist | Healthy healing |
| Epithelial | Pink, at edges | New skin forming |
| Slough | Yellow, stringy | Devitalized tissue |
| Eschar | Black, dry | Dead tissue |
| Hypergranulation | Raised red tissue | Over-healing |

**Wound Measurement**
- Length: longest dimension
- Width: perpendicular to length
- Depth: deepest point
- Tunneling: track extensions
- Document consistently for comparison

## Dressing Selection

**Dressing Categories**
| Type | Uses | Characteristics |
|------|------|-----------------|
| Gauze | General purpose | Absorbent, needs frequent changing |
| Transparent film | Minor wounds, IV sites | Waterproof, can see wound |
| Hydrocolloid | Partial thickness | Self-adhesive, moisture-retaining |
| Foam | Moderate drainage | Absorbent, cushioning |
| Alginate | Heavy drainage | Highly absorbent, from seaweed |
| Hydrogel | Dry wounds | Adds moisture |

**Principles of Moist Wound Healing**
- Keeps wound bed moist, periwound dry
- Promotes epithelialization
- Reduces pain
- May speed healing

## Aseptic Technique

**Clean vs. Sterile Technique**
- Clean technique appropriate for most home wound care
- Sterile technique for surgical wounds, deep wounds
- Hand hygiene critical in both

**Procedure Standards**
1. Hand hygiene before and after
2. Clean gloves for dressing removal
3. New gloves for wound cleaning and dressing
4. No-touch technique for wound and sterile items
5. Clean to dirty direction

## Complications

**Local Infection Signs**
- Increasing pain
- Erythema, warmth, swelling
- Purulent drainage
- Delayed healing
- Friable granulation tissue

**Systemic Infection Signs**
- Fever, chills
- Elevated heart rate
- Confusion (especially in elderly)
- Elevated white blood cell count

**Other Complications**
- Wound dehiscence (opening)
- Hematoma (blood collection)
- Seroma (fluid collection)
- Allergic reactions to dressings

## Documentation

**Essential Elements**
- Date and time
- Wound measurements
- Wound bed description
- Drainage characteristics
- Periwound condition
- Dressing applied
- Patient/caregiver tolerance`,
      keyTerms: [
        {
          term: "granulation tissue",
          definition:
            "Healthy pink-red tissue indicating wound healing with new blood vessels and connective tissue",
        },
        {
          term: "slough",
          definition:
            "Yellow or white stringy tissue in wound bed that may delay healing and require removal",
        },
        {
          term: "eschar",
          definition:
            "Black, dry, dead tissue that may need debridement for wound healing to progress",
        },
        {
          term: "periwound",
          definition:
            "The skin surrounding a wound, which should be assessed for damage, maceration, or infection spread",
        },
      ],
      clinicalNotes:
        "Train caregivers on wound assessment and dressing changes specific to their loved one\"s wounds. Provide written instructions with pictures. Establish clear criteria for when to call. Consider home health nursing for complex wounds. Assess caregiver competency before discharge.",
    },
    4: {
      level: 4,
      summary:
        "Evidence-based wound care integrates wound physiology understanding, validated assessment frameworks, advanced dressing technologies, and infection prevention principles while addressing caregiver training needs and quality outcomes.",
      explanation: `## Wound Healing Physiology

**Molecular Cascade**
- Hemostasis: platelet aggregation, fibrin clot
- Inflammation: neutrophils, macrophages, cytokines
- Proliferation: angiogenesis, fibroblast migration, collagen synthesis
- Remodeling: collagen reorganization, tensile strength development

**Factors Affecting Healing**
*Local Factors*
- Oxygenation
- Infection
- Moisture balance
- Mechanical stress
- Foreign bodies

*Systemic Factors*
- Age
- Nutrition (protein, vitamin C, zinc)
- Chronic diseases (diabetes, vascular disease)
- Medications (steroids, immunosuppressants)
- Smoking

## Assessment Frameworks

**TIME Framework (Wound Bed Preparation)**
- T: Tissue (non-viable or deficient)
- I: Infection/Inflammation
- M: Moisture imbalance
- E: Edge (non-advancing or undermined)

**BWAT (Bates-Jensen Wound Assessment Tool)**
- 13-item validated tool
- Scores wound characteristics
- Tracks healing over time
- Used in research and clinical practice

**Pressure Injury Staging (NPUAP)**
- Stage 1: Non-blanchable erythema
- Stage 2: Partial thickness
- Stage 3: Full thickness, subcutaneous
- Stage 4: Full thickness, muscle/bone
- Unstageable: Obscured by slough/eschar
- Deep tissue injury: Purple/maroon discoloration

## Advanced Dressing Technologies

**Negative Pressure Wound Therapy (NPWT)**
- Controlled suction promotes healing
- Removes exudate, promotes granulation
- Requires specific training
- Home systems available

**Bioengineered Skin Substitutes**
- Cellular and acellular options
- For chronic non-healing wounds
- Applied by wound specialists
- Caregiver monitoring important

**Antimicrobial Dressings**
- Silver-impregnated dressings
- Iodine-based products
- Honey-based dressings
- For infected or at-risk wounds

## Infection Prevention and Control

**Biofilm Recognition**
- Bacterial communities in matrix
- Resistant to standard treatment
- May appear as shiny film
- Requires mechanical debridement

**Antimicrobial Stewardship**
- Topical vs. systemic antimicrobials
- Avoid unnecessary antibiotics
- Culture-guided therapy
- Monitor for resistance

## Caregiver Training Evidence

**Effective Training Components**
- Demonstration by professional
- Return demonstration by caregiver
- Written and visual instructions
- Opportunity for questions
- Follow-up assessment

**Outcomes Research**
- Trained caregivers show fewer complications
- Confidence correlates with competence
- Anxiety affects performance
- Ongoing support improves outcomes

## Quality Metrics

**Process Measures**
- Assessment documentation completeness
- Appropriate dressing selection
- Dressing change frequency
- Infection prevention practices

**Outcome Measures**
- Wound healing rates
- Infection rates
- Hospital readmissions
- Patient/caregiver satisfaction`,
      keyTerms: [
        {
          term: "TIME framework",
          definition:
            "Wound bed preparation model addressing Tissue, Infection/inflammation, Moisture, and Edge factors",
        },
        {
          term: "negative pressure wound therapy",
          definition:
            "Treatment using controlled suction to promote wound healing by removing fluid and stimulating tissue growth",
        },
        {
          term: "biofilm",
          definition:
            "Bacterial communities protected by extracellular matrix that resist antibiotics and impair healing",
        },
        {
          term: "NPUAP staging",
          definition:
            "National Pressure Ulcer Advisory Panel classification system for pressure injury severity",
        },
        {
          term: "debridement",
          definition:
            "Removal of dead, damaged, or infected tissue to promote wound healing",
        },
      ],
      clinicalNotes:
        "Assess wound healing trajectory using validated tools. Select dressings based on wound characteristics. Train caregivers with competency verification. Establish protocols for when to escalate care. Consider wound specialist referral for non-healing wounds.",
    },
    5: {
      level: 5,
      summary:
        "Wound care research encompasses molecular healing mechanisms, advanced therapeutics development, implementation science for evidence-based practices, and health systems approaches while addressing disparities in wound outcomes and caregiver support.",
      explanation: `## Molecular and Cellular Research

**Growth Factor Biology**
- PDGF, TGF-beta, VEGF, EGF roles
- Growth factor therapy development
- Chronic wound growth factor deficiencies
- Therapeutic applications and trials

**Stem Cell Research**
- Mesenchymal stem cell applications
- Adipose-derived stem cells
- Mechanisms of action
- Clinical trial landscape

**Extracellular Matrix Science**
- Collagen scaffold development
- Decellularized tissue matrices
- ECM components in healing
- Biomaterial engineering

## Advanced Therapeutics

**Regenerative Medicine**
- Bioengineered skin products
- 3D printed skin constructs
- Gene therapy approaches
- Cell-based therapies

**Emerging Technologies**
- Electrical stimulation
- Ultrasound therapy
- Hyperbaric oxygen
- Photobiomodulation

**Smart Dressings**
- Sensor-embedded dressings
- pH monitoring
- Temperature sensing
- Drug-releasing systems
- Remote monitoring capability

## Implementation Science

**Evidence-Practice Gap**
- Known effective interventions underused
- Barriers to adoption identified
- Implementation frameworks applied
- Quality improvement initiatives

**Guideline Development**
- International wound care guidelines
- Pressure injury prevention guidelines
- Diabetic foot care standards
- Implementation challenges

**Care Delivery Models**
- Wound care specialty services
- Telewound care
- Home health integration
- Interprofessional collaboration

## Health Systems Research

**Burden of Chronic Wounds**
- Prevalence and incidence data
- Economic impact (>$25 billion US)
- Quality of life effects
- Healthcare utilization patterns

**Value-Based Care**
- Outcomes-based reimbursement
- Bundled payments
- Quality metrics
- Cost-effectiveness research

**Population Health**
- Risk stratification
- Prevention programs
- Care coordination
- Health disparities

## Caregiver Research

**Training and Education**
- Optimal training methods
- Competency assessment
- Technology-assisted learning
- Ongoing support needs

**Burden and Outcomes**
- Wound care burden on caregivers
- Caregiver confidence and competence
- Impact on caregiver health
- Support intervention development

**Family-Centered Care**
- Including caregivers in care planning
- Shared decision-making
- Caregiver as care team member
- Communication strategies

## Health Equity

**Disparities in Wound Care**
- Access to wound specialists
- Dressing and supply access
- Amputation rates by race
- Social determinants effects

**Equity-Focused Interventions**
- Community-based programs
- Culturally appropriate care
- Language access
- Transportation solutions

**Policy Implications**
- Coverage for advanced therapies
- Workforce development
- Caregiver support policies
- Research funding priorities

## Future Directions

**Personalized Wound Care**
- Biomarker-guided treatment
- Genetic factors in healing
- Microbiome research
- Precision therapeutics

**Artificial Intelligence**
- Image analysis for assessment
- Predictive modeling
- Treatment recommendation systems
- Documentation automation

**Integration and Coordination**
- EHR wound documentation
- Care transition protocols
- Telehealth integration
- Outcome tracking systems`,
      keyTerms: [
        {
          term: "growth factors",
          definition:
            "Signaling proteins (PDGF, VEGF, TGF-beta) that regulate cellular processes in wound healing",
        },
        {
          term: "mesenchymal stem cells",
          definition:
            "Multipotent cells being investigated for wound healing through differentiation and paracrine effects",
        },
        {
          term: "telewound care",
          definition:
            "Remote wound assessment and management using digital imaging and telecommunication",
        },
        {
          term: "biofilm",
          definition:
            "Organized bacterial communities in protective matrix implicated in chronic wound persistence",
        },
        {
          term: "smart dressings",
          definition:
            "Advanced wound dressings incorporating sensors, drug delivery, or monitoring capabilities",
        },
      ],
      clinicalNotes: `Systems implementation:
1. Develop wound care pathways with evidence-based protocols
2. Implement caregiver training with competency verification
3. Utilize telewound services to extend specialist access
4. Track wound outcomes as quality metrics
5. Address health equity in wound care delivery
6. Research caregiver-focused wound care interventions`,
    },
  },

  media: [
    {
      id: "wound-care-steps",
      type: "diagram",
      filename: "wound-care-procedure.svg",
      title: "Basic Wound Care Steps",
      description: "Visual guide to wound cleaning and dressing change procedure",
    },
  ],

  citations: [
    {
      id: "wocn-guidelines",
      type: "website",
      title: "Wound Care Guidelines",
      source: "Wound, Ostomy and Continence Nurses Society",
      url: "https://www.wocn.org/",
    },
    {
      id: "npuap-staging",
      type: "website",
      title: "Pressure Injury Staging",
      source: "National Pressure Injury Advisory Panel",
      url: "https://npiap.com/",
    },
  ],

  crossReferences: [
    {
      targetId: "caregiver-safety-at-home",
      targetType: "concept",
      relationship: "related",
      label: "Safety at Home",
    },
    {
      targetId: "caregiver-talking-to-healthcare-team",
      targetType: "concept",
      relationship: "related",
      label: "Talking to Healthcare Team",
    },
  ],

  tags: {
    systems: ["caregiver-support"],
    topics: ["wound care", "dressings", "infection prevention", "skin care"],
    clinicalRelevance: "high",
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default woundCareBasics;
