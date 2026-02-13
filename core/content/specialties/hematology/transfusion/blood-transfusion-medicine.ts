/**
 * Blood Transfusion Medicine - Comprehensive Educational Content
 *
 * The clinical practice of blood component therapy, compatibility
 * testing, and management of transfusion reactions.
 */

import { EducationalContent } from '../../../types';

export const bloodTransfusionMedicine: EducationalContent = {
  id: 'topic-blood-transfusion-medicine',
  type: 'topic',
  name: 'Blood Transfusion Medicine',
  alternateNames: ['Transfusion therapy', 'Blood component therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Blood transfusion is when donated blood or blood products are given to someone who needs them, such as during surgery or for certain medical conditions.',
      explanation: `Blood transfusion is a common and life-saving medical treatment.

**What Is Transfused:**
- Red blood cells (for anemia or blood loss)
- Platelets (for low platelet count or bleeding)
- Plasma (for clotting problems)
- Whole blood (rarely, for massive bleeding)

**Why Transfusions Are Needed:**
- Surgery with blood loss
- Accidents and trauma
- Cancer treatment
- Blood disorders
- Childbirth complications

**Safety:**
- Blood is carefully tested before use
- Blood type must match
- Donated blood is screened for diseases
- Transfusion reactions are rare but can happen

**Common Reactions:**
- Fever and chills (most common)
- Allergic reactions (itching, hives)
- Serious reactions are rare`,
      keyTerms: [
        { term: 'blood type', definition: 'The classification of blood based on proteins on red blood cells (A, B, AB, O)' },
        { term: 'transfusion', definition: 'Receiving blood or blood products through a vein' },
        { term: 'donor', definition: 'A person who gives blood for others to use' },
      ],
      analogies: [
        'Blood transfusion is like refueling a car - you need the right type of fuel (blood type) for the engine to work properly.',
      ],
      examples: [
        'A patient loses a lot of blood during surgery. The surgical team gives her two units of red blood cells to replace what was lost and maintain her oxygen-carrying capacity.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transfusion medicine encompasses blood component selection, compatibility testing, indication-based thresholds, and recognition and management of transfusion reactions.',
      explanation: `Transfusion medicine requires understanding blood products, compatibility, and appropriate use.

**Blood Components:**
| Product | Volume | Storage | Indications |
|---------|--------|---------|-------------|
| PRBCs | 250-300mL | 1-6C, 42 days | Anemia, blood loss |
| Platelets | 50mL/unit | 20-24C, 5 days | Thrombocytopenia, bleeding |
| FFP | 200-250mL | Frozen, 1 year | Coagulopathy, TTP |
| Cryoprecipitate | 15mL | Frozen, 1 year | Fibrinogen, factor VIII, VWF |

**Blood Type Compatibility:**
- ABO system: Type and crossmatch
- Rh system: Rh-negative women need Rh-negative blood
- Universal donor RBCs: O-negative
- Universal donor plasma: AB

**Transfusion Thresholds:**
- Restrictive (Hgb <7): Most stable patients
- Liberal (Hgb <10): ACS, symptomatic anemia
- Platelet <10K: Prophylactic in stable patients
- Platelet <50K: Active bleeding or procedures

**Transfusion Reactions:**
- Febrile non-hemolytic (most common)
- Allergic (urticaria to anaphylaxis)
- Acute hemolytic (ABO incompatibility - emergency)
- TACO (fluid overload)
- TRALI (lung injury)

**Pre-transfusion:**
- Informed consent
- Type and screen (or crossmatch)
- Patient identification (most critical step)`,
      keyTerms: [
        { term: 'PRBCs', definition: 'Packed red blood cells; red cells with most plasma removed' },
        { term: 'FFP', definition: 'Fresh frozen plasma; contains all clotting factors' },
        { term: 'type and screen', definition: 'Determining ABO/Rh type and checking for unexpected antibodies' },
        { term: 'crossmatch', definition: 'Testing donor blood directly against recipient plasma for compatibility' },
      ],
      analogies: [
        'Type and screen is like running a background check, while crossmatch is doing a final interview before hiring.',
      ],
    },
    3: {
      level: 3,
      summary: 'Transfusion practice requires evidence-based thresholds, understanding of blood group immunology, and systematic approach to reaction identification and management.',
      explanation: `## Blood Group Systems

**ABO System:**
- Antigens on RBCs, antibodies in plasma
- Naturally occurring IgM antibodies (can activate complement)
- Type A: A antigen, anti-B antibody
- Type B: B antigen, anti-A antibody
- Type AB: Both antigens, no antibodies (universal plasma donor)
- Type O: No antigens, both antibodies (universal RBC donor)

**Rh System:**
- D antigen most clinically significant
- 85% population Rh-positive
- Anti-D only after exposure (not naturally occurring)
- Critical in pregnancy (hemolytic disease of newborn)

**Other Systems:**
- Kell, Kidd, Duffy, MNS
- Cause delayed hemolytic reactions
- Antibody screen detects most

## Compatibility Testing

**Type and Screen:**
- ABO/Rh typing
- Antibody screen (indirect Coombs)
- If screen negative: Electronic crossmatch possible

**Crossmatch Types:**
- Immediate spin: ABO compatibility only
- Antiglobulin (full): Detects IgG antibodies
- Electronic: Computer match if antibody screen negative

## Transfusion Thresholds (Evidence-Based)

**Red Blood Cells:**
| Population | Threshold | Evidence |
|------------|-----------|----------|
| Most hospitalized | Hgb <7 | TRICC, TRACS |
| GI bleeding | Hgb <7 | TRIGGER |
| Hip surgery | Hgb <8 | FOCUS |
| ACS | Hgb <8 (maybe <10) | Less clear |
| Symptomatic | Individual | Clinical judgment |

**Platelets:**
| Indication | Threshold |
|------------|-----------|
| Prophylaxis (stable) | <10K |
| Non-CNS procedures | <50K |
| CNS/eye surgery | <100K |
| Active bleeding | <50K |

**Plasma:**
- Not for volume expansion
- INR >1.5-2.0 with bleeding/procedure
- TTP (plasma exchange)
- Warfarin reversal (PCC preferred)

## Transfusion Reactions

**Acute (<24 hours):**
| Reaction | Features | Management |
|----------|----------|------------|
| Febrile non-hemolytic | Fever, rigors | Stop, assess, antipyretics |
| Allergic (mild) | Urticaria | Antihistamines, may continue |
| Allergic (severe) | Anaphylaxis | Epinephrine, stop transfusion |
| Acute hemolytic | Fever, flank pain, hemoglobinuria | Stop, fluids, check clerical |
| TACO | Dyspnea, HTN, JVD | Diuretics |
| TRALI | Dyspnea, hypoxia, bilateral infiltrates | Supportive, O2 |
| Septic | High fever, shock | Antibiotics, vasopressors |

**Delayed (>24 hours):**
- Delayed hemolytic (alloantibody)
- GVHD (immunocompromised recipients)
- Iron overload (chronic transfusion)
- Alloimmunization`,
      keyTerms: [
        { term: 'TACO', definition: 'Transfusion-associated circulatory overload; fluid overload from rapid transfusion' },
        { term: 'TRALI', definition: 'Transfusion-related acute lung injury; non-cardiogenic pulmonary edema' },
        { term: 'indirect Coombs', definition: 'Antibody screen testing recipient plasma against reagent RBCs' },
        { term: 'direct Coombs', definition: 'Tests for antibodies bound to patient RBCs' },
      ],
      clinicalNotes: 'TRALI vs TACO: TRALI = normal CVP/BNP, bilateral infiltrates, hypoxia; TACO = elevated CVP/BNP, response to diuresis. Both can coexist.',
    },
    4: {
      level: 4,
      summary: 'Advanced transfusion medicine integrates antigen matching strategies, specialized product modifications, and systematic approaches to complex serologic problems.',
      explanation: `## Extended Antigen Matching

**Indications:**
- Chronically transfused patients (sickle cell, thalassemia)
- Alloimmunized patients
- Women of childbearing potential

**Strategy:**
- Match for C, E, K at minimum (sickle cell guidelines)
- Extended matching: Fya, Fyb, Jka, Jkb, S, s
- Genotyping for multiply-transfused patients

## Special Products

**Leukoreduced:**
- Standard for most products now
- Reduces FNHTR, CMV transmission, HLA alloimmunization
- Universal leukoreduction in most countries

**Irradiated:**
- Prevents transfusion-associated GVHD
- Indications:
  - Directed donations from relatives
  - HLA-matched platelets
  - Immunocompromised (not all - BMT, Hodgkin, fludarabine)
  - Intrauterine transfusions

**Washed:**
- Removes plasma proteins
- IgA deficiency with anti-IgA
- Severe allergic reactions
- Reduces potassium (for neonates, renal failure)

**CMV-Reduced Risk:**
- CMV-seronegative donors OR leukoreduced
- Pregnant women, neonates, CMV-negative transplant recipients

## Massive Transfusion

**Definition:**
- 10 units PRBCs in 24 hours, OR
- Complete blood volume replacement, OR
- 4 units in 1 hour with ongoing bleeding

**Protocol:**
- Balanced resuscitation (1:1:1 or 2:1:1 ratio of PRBC:FFP:platelets)
- MTP activation
- Avoid hypothermia, acidosis, hypocalcemia
- Empiric tranexamic acid (CRASH-2)
- TEG/ROTEM-guided in some centers

## Complex Serologic Problems

**Warm Autoimmune Hemolytic Anemia:**
- Autoantibody interferes with crossmatch
- Often pan-reactive
- Work with blood bank to find least incompatible
- May need to transfuse despite positive crossmatch if critical

**Cold Agglutinin Disease:**
- Keep blood warm during transfusion
- Type at 37C
- Washed RBCs may help

**Multiple Alloantibodies:**
- Extended phenotype matching
- May need rare donor units
- National rare donor programs

## Transfusion Reaction Workup

**Steps:**
1. Stop transfusion, maintain IV access
2. Notify blood bank immediately
3. Clerical check (most ABO errors are clerical)
4. Send blood bank samples:
   - Post-transfusion specimen
   - Remainder of unit
5. Labs: DAT, haptoglobin, LDH, UA
6. For TRALI: CXR, BNP
7. Document and report`,
      keyTerms: [
        { term: 'MTP', definition: 'Massive transfusion protocol; standardized approach to major hemorrhage' },
        { term: 'TEG/ROTEM', definition: 'Thromboelastography; point-of-care coagulation testing guiding transfusion' },
        { term: 'transfusion-associated GVHD', definition: 'Donor lymphocytes attack recipient tissues; usually fatal' },
        { term: 'extended phenotype', definition: 'Matching beyond ABO/Rh for minor antigens to prevent alloimmunization' },
      ],
      clinicalNotes: 'Never delay transfusion for critically bleeding patient to find perfectly compatible blood. O-negative or type-specific uncrossmatched blood saves lives.',
    },
    5: {
      level: 5,
      summary: 'Contemporary transfusion medicine integrates patient blood management, precision matching strategies, alternative products, and quality systems to optimize outcomes.',
      explanation: `## Patient Blood Management

**Three Pillars:**
1. Optimize erythropoiesis (iron, EPO, treat underlying cause)
2. Minimize blood loss (surgery, testing, anticoagulation management)
3. Tolerate anemia (evidence-based thresholds)

**Implementation:**
- Preoperative anemia clinic
- Restrictive transfusion protocols
- Cell salvage
- Antifibrinolytics

**Outcomes:**
- Reduced transfusions
- Improved patient outcomes
- Cost savings

## Molecular Blood Group Typing

**Genotyping Advantages:**
- Resolves discrepancies
- Types recently transfused patients
- Identifies weak/variant antigens
- High-throughput for donors

**Applications:**
- Chronically transfused patients
- Prenatal testing
- Donor screening
- Rare phenotype identification

## Alternative Products

**Pathogen-Reduced Components:**
- Platelet/plasma pathogen inactivation
- Psoralen-UVA (INTERCEPT), riboflavin-UV (MIRASOL)
- Reduces bacteria, viruses, parasites
- May reduce storage lesion

**Synthetic/Substitute Products:**
- Hemoglobin-based oxygen carriers (investigational)
- PEGylated hemoglobin
- Challenges: Vasoconstriction, oxidation

**Platelet Alternatives:**
- Freeze-dried platelets
- Platelet lysates
- Early development

## Quality and Safety

**Hemovigilance:**
- Systematic surveillance of transfusion reactions
- National reporting systems
- SHOT (UK), AABB (US)
- Root cause analysis

**Error Prevention:**
- Two-person verification
- Barcode scanning
- Electronic crossmatch
- Patient identification wristbands

**Storage Lesion:**
- RBC changes during storage
- 2,3-DPG depletion
- Potassium release
- Microparticle formation
- Fresh vs old RBCs: No clear clinical difference (ABLE, RECESS trials)

## Special Populations

**Sickle Cell Disease:**
- Extended antigen matching (C, E, K minimum)
- Simple vs exchange transfusion
- Chronic transfusion goals: HbS <30%
- Alloimmunization rate high (30%)

**Neonates:**
- Irradiated products (prevent GVHD)
- CMV-reduced risk
- Divided units from single donor
- Avoid old blood (K+ content)

**Jehovah's Witnesses:**
- Respect autonomous refusal
- Discuss acceptable alternatives (EPO, cell salvage, some fractions)
- Document clearly
- Optimize preoperatively

## Emerging Directions

**Universal Donor RBCs:**
- Enzymatic conversion of A/B antigens
- Would solve supply issues

**Cultured Red Cells:**
- Ex vivo erythropoiesis
- Early clinical trials
- Address rare phenotypes

**Artificial Oxygen Carriers:**
- Next-generation HBOCs
- Encapsulated hemoglobin
- Challenges remain`,
      keyTerms: [
        { term: 'patient blood management', definition: 'Evidence-based approach to optimize transfusion by addressing anemia, blood loss, and tolerance' },
        { term: 'hemovigilance', definition: 'Systematic surveillance of transfusion-related adverse events' },
        { term: 'storage lesion', definition: 'Biochemical and structural changes in stored blood products' },
        { term: 'pathogen reduction', definition: 'Treatment of blood products to inactivate pathogens' },
      ],
      clinicalNotes: `**Board Pearls:**
- ABO incompatibility: Most serious, most preventable (clerical error)
- Universal donor RBCs: O-negative; Universal plasma: AB
- Restrictive threshold (Hgb <7): Safe for most stable patients
- TRALI: Non-cardiogenic pulmonary edema, #1 cause of transfusion death
- TACO: Fluid overload, responds to diuresis
- Febrile non-hemolytic: Most common reaction, usually benign
- Leukoreduction: Standard, prevents CMV, FNHTR, HLA alloimmunization
- Irradiated products: Prevent TA-GVHD in immunocompromised
- Massive transfusion: 1:1:1 ratio, avoid hypothermia/acidosis
- Sickle cell: Extended matching to prevent alloimmunization`,
    },
  },

  media: [
    {
      id: 'blood-products',
      type: 'diagram',
      filename: 'blood-product-components.svg',
      title: 'Blood Components',
      description: 'Overview of blood products and their indications',
    },
  ],

  citations: [
    {
      id: 'carson-2016',
      type: 'article',
      title: 'Clinical Practice Guidelines From the AABB: Red Blood Cell Transfusion Thresholds',
      authors: ['Carson JL', 'Guyatt G', 'Heddle NM', 'et al'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2016.9185',
    },
  ],

  crossReferences: [
    { targetId: 'condition-autoimmune-hemolytic-anemia', targetType: 'condition', relationship: 'related', label: 'AIHA' },
    { targetId: 'condition-sickle-cell-disease', targetType: 'condition', relationship: 'related', label: 'Sickle Cell Disease' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['transfusion', 'blood products', 'hematology'],
    keywords: ['transfusion', 'blood products', 'TRALI', 'TACO', 'compatibility'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default bloodTransfusionMedicine;
