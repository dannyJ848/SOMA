/**
 * Transfusion Reactions - Comprehensive Educational Content
 *
 * Adverse events associated with blood product administration, ranging
 * from mild allergic reactions to life-threatening hemolytic and anaphylactic events.
 */

import { EducationalContent } from '../../../types';

export const transfusionReactions: EducationalContent = {
  id: 'condition-transfusion-reactions',
  type: 'condition',
  name: 'Transfusion Reactions',
  nameEs: 'Reacciones Transfusionales',
  alternateNames: ['Adverse transfusion events', 'Transfusion-related complications'],

  levels: {
    1: {
      level: 1,
      summary: 'Transfusion reactions are unwanted effects that can happen when someone receives donated blood, ranging from mild allergic reactions to serious emergencies.',
      explanation: `When someone receives a blood transfusion, their body can sometimes react to the donated blood. Most reactions are mild, but some can be serious.

**Common mild reactions:**
- **Fever:** The body heats up as it responds to proteins in the donated blood
- **Itching or hives:** An allergic reaction to substances in the blood
- **Chills:** Feeling cold and shivering during or after the transfusion

**Serious reactions (rare but important):**
- **Wrong blood type:** If someone gets the wrong type of blood, their body attacks the donated blood cells. This causes fever, chest pain, dark urine, and can be life-threatening
- **Lung problems (TRALI):** The transfusion causes fluid to build up in the lungs, making breathing very difficult
- **Fluid overload (TACO):** Too much fluid given too quickly causes heart and lung problems

**What happens if there is a reaction:**
1. The transfusion is stopped immediately
2. The patient is monitored closely
3. The blood bag is sent to the lab for testing
4. Treatment is given based on the type of reaction

**Safety measures:**
Blood banks carefully test and match blood. Nurses check the patient's identity and blood type multiple times before starting. These steps prevent most serious reactions.`,
      keyTerms: [
        { term: 'transfusion reaction', definition: 'An unwanted response by the body to receiving donated blood' },
        { term: 'blood type', definition: 'A classification of blood (A, B, AB, O) that determines compatibility for transfusion' },
        { term: 'TRALI', definition: 'Transfusion-related acute lung injury; a serious reaction causing breathing difficulty' },
      ],
      analogies: [
        'A transfusion reaction is like your body\'s security system raising an alarm when it detects something foreign in the donated blood.',
      ],
      patientCounselingPoints: [
        'Tell your nurse immediately if you feel any fever, chills, itching, or trouble breathing during a transfusion',
        'It is normal to be monitored closely during and after receiving blood',
      ],
    },
    2: {
      level: 2,
      summary: 'Transfusion reactions are classified by timing (acute vs. delayed) and mechanism (immune vs. non-immune), with acute hemolytic transfusion reactions, TRALI, and TACO being the most clinically significant.',
      explanation: `## Classification

**Acute Reactions (within 24 hours):**

| Reaction | Mechanism | Key Features |
|----------|-----------|--------------|
| Acute hemolytic (AHTR) | ABO incompatibility → IgM complement activation | Fever, flank pain, dark urine, DIC, shock |
| Febrile non-hemolytic (FNHTR) | Cytokines in stored blood, recipient anti-WBC antibodies | Fever, chills (most common reaction) |
| Allergic/urticarial | IgE against donor plasma proteins | Hives, itching (mild) |
| Anaphylactic | Anti-IgA antibodies (IgA-deficient patients) | Hypotension, bronchospasm, angioedema |
| TRALI | Donor anti-HLA/anti-neutrophil antibodies | Acute respiratory distress, bilateral infiltrates |
| TACO | Volume overload | Hypertension, JVD, pulmonary edema |
| Bacterial contamination | Bacteria in stored blood (especially platelets) | High fever, rigors, septic shock |

**Delayed Reactions (>24 hours):**

| Reaction | Timing | Features |
|----------|--------|----------|
| Delayed hemolytic (DHTR) | 2-14 days | Falling Hb, jaundice, positive DAT (anamnestic antibody response) |
| Transfusion-associated GVHD | 1-6 weeks | Rash, liver dysfunction, pancytopenia (often fatal) |
| Iron overload | Chronic | After >20 units PRBCs |
| Post-transfusion purpura | 5-10 days | Severe thrombocytopenia from anti-platelet antibodies |

## Workup When Reaction Occurs

1. STOP the transfusion immediately
2. Maintain IV access with normal saline
3. Send blood bag + patient blood sample to blood bank
4. Order: DAT (Coombs), CBC, bilirubin, haptoglobin, urinalysis, LDH
5. Blood cultures if sepsis suspected

## Prevention Strategies
- Leukoreduction: Removes WBCs from blood products; prevents FNHTR and CMV transmission
- Irradiation: Prevents TA-GVHD in immunocompromised patients
- Washing: Removes plasma proteins; for IgA-deficient patients
- Slow infusion rates in patients at risk for TACO`,
      keyTerms: [
        { term: 'AHTR', definition: 'Acute hemolytic transfusion reaction; ABO-incompatible blood causing complement-mediated RBC destruction' },
        { term: 'FNHTR', definition: 'Febrile non-hemolytic transfusion reaction; the most common reaction, caused by cytokines or anti-WBC antibodies' },
        { term: 'TRALI', definition: 'Transfusion-related acute lung injury; non-cardiogenic pulmonary edema from donor antibodies activating recipient neutrophils' },
        { term: 'TACO', definition: 'Transfusion-associated circulatory overload; cardiogenic pulmonary edema from volume overload' },
        { term: 'DAT', definition: 'Direct antiglobulin test (Coombs test); detects antibodies coating RBCs; positive in hemolytic reactions' },
        { term: 'leukoreduction', definition: 'Filtration to remove white blood cells from blood products, reducing febrile reactions' },
      ],
    },
    3: {
      level: 3,
      summary: 'Transfusion reaction pathophysiology involves complement-mediated hemolysis, neutrophil-mediated endothelial injury (TRALI), volume-mediated cardiogenic edema (TACO), and anamnestic alloantibody responses, with distinct immunologic mechanisms requiring targeted prevention and management.',
      explanation: `## Acute Hemolytic Transfusion Reaction (AHTR)

**Mechanism:**
1. ABO-incompatible RBCs encounter preformed IgM antibodies
2. Classical complement pathway activation (C1 → C9)
3. Intravascular hemolysis with free hemoglobin release
4. Free hemoglobin scavenges NO → vasoconstriction, renal failure
5. Complement anaphylatoxins (C3a, C5a) → shock, DIC activation
6. Can be fatal within minutes

**Management:**
- Stop transfusion, aggressive IV fluids (maintain UOP >1 mL/kg/hr)
- Monitor for DIC (PT, aPTT, fibrinogen, D-dimer)
- Renal protective: Avoid nephrotoxins, consider alkalinization for hemoglobinuria
- Investigate cause: Clerical error is the #1 cause

## TRALI vs. TACO

| Feature | TRALI | TACO |
|---------|-------|------|
| Mechanism | Immune (donor anti-HLA/HNA Ab) | Volume overload |
| Blood pressure | Normal or low | Elevated |
| BNP | Normal | Elevated (>1.5x pre-transfusion) |
| Fluid balance | Euvolemic or negative | Positive |
| CXR | Bilateral infiltrates | Bilateral infiltrates + cardiomegaly |
| Treatment | Supportive (oxygen, ventilation) | Diuretics, upright positioning |
| Resolution | 48-72 hours | Responds to diuresis |

**TRALI pathogenesis (two-hit model):**
1. First hit: Patient has primed neutrophils (sepsis, surgery, inflammation)
2. Second hit: Donor antibodies or bioactive lipids activate primed neutrophils
3. Neutrophils release ROS and proteases → endothelial damage → pulmonary edema

**TRALI mitigation:**
- Male-only plasma donors (reduces anti-HLA antibodies from multiparous females)
- Has significantly reduced TRALI incidence since implementation

## Delayed Hemolytic Transfusion Reaction (DHTR)

**Mechanism:**
1. Patient previously sensitized to minor RBC antigen (Kidd, Duffy, Kell, Rh)
2. Antibody titer below detection at crossmatch
3. Anamnestic response: antibody titer rises 2-14 days post-transfusion
4. Extravascular hemolysis (macrophage-mediated, primarily in spleen)

**Clinical features:**
- Unexplained Hb drop, jaundice, fever
- Positive DAT with newly identified alloantibody
- May be severe in SCD patients (hyperhemolysis syndrome)

**SCD hyperhemolysis:**
- Destruction of both donor AND patient RBCs
- Hb drops below pre-transfusion level
- Avoid further transfusion; consider IVIG, eculizumab, corticosteroids

## Bacterial Contamination
- Platelets (stored at room temperature) highest risk: ~1:1,000-3,000 units
- Organisms: Staphylococcus, Serratia, Klebsiella in platelets; Yersinia in RBCs (cold growth)
- Pathogen reduction technology (amotosalen/UVA, riboflavin/UV) reduces risk`,
      keyTerms: [
        { term: 'two-hit model', definition: 'TRALI pathogenesis requiring neutrophil priming (first hit) followed by donor antibody activation (second hit)' },
        { term: 'hyperhemolysis', definition: 'Severe DHTR in SCD where both transfused and autologous RBCs are destroyed, causing dangerous Hb drop' },
        { term: 'anamnestic response', definition: 'Rapid secondary immune response producing alloantibodies days after transfusion' },
        { term: 'pathogen reduction', definition: 'Technology using UV light and photosensitizers to inactivate pathogens in blood products' },
      ],
      clinicalNotes: 'TRALI vs. TACO distinction is critical: BNP ratio (post/pre-transfusion >1.5 suggests TACO) and echo help differentiate. The #1 cause of AHTR is clerical error - verify patient identity at the bedside. In SCD patients, DHTR can trigger hyperhemolysis; further transfusion may paradoxically worsen anemia.',
    },
    4: {
      level: 4,
      summary: 'Advanced transfusion safety involves extended antigen matching algorithms, antibody identification strategies, pathogen reduction implementation, and management of complex scenarios including multiply-alloimmunized patients and transfusion in autoimmune hemolytic anemia.',
      explanation: `## Alloimmunization and Complex Crossmatching

**Clinically significant alloantibodies:**
| Antigen system | Antigens | Clinical significance |
|---------------|----------|---------------------|
| Rh | D, C, c, E, e | Most common cause of DHTR and HDFN |
| Kell | K, k | Suppresses erythropoiesis (not just hemolysis) |
| Duffy | Fya, Fyb | DHTR; Fy(a-b-) protective against P. vivax malaria |
| Kidd | Jka, Jkb | Notorious for evanescent antibodies causing DHTR |
| MNS | M, N, S, s | Variable significance |

**Extended antigen matching:**
- SCD patients: Match for Rh (C, c, E, e) and Kell at minimum
- Reduces alloimmunization rate from ~3% to <0.5% per unit transfused
- Genotyping (molecular blood group typing) increasingly used when DAT-positive or recently transfused

**Kidd antibody challenge:**
- Anti-Jka/Jkb fall below detection between transfusions
- Crossmatch appears compatible, but anamnestic response causes DHTR
- Historical antibody records critical; never remove from patient file

## Autoimmune Hemolytic Anemia (AIHA) Transfusion

**Challenges:**
- Autoantibody makes crossmatch incompatible with ALL donor units
- Must identify any underlying alloantibodies masked by autoantibody
- Autoantibody absorption techniques: Autologous (DAT+ RBCs) or allogeneic (R1R1, R2R2, rr panels)

**"Least incompatible" units:**
- Crossmatch will never be fully compatible in warm AIHA
- Ensure no clinically significant alloantibodies are present
- Transfuse ABO/Rh matched, phenotypically matched units
- Transfusion is NOT contraindicated; withholding blood for symptomatic anemia is dangerous

## Transfusion-Associated Graft-vs-Host Disease (TA-GVHD)

**Mechanism:** Donor T-lymphocytes engraft in immunocompromised (or HLA-similar) recipient and attack host tissues
**Risk groups:** Congenital immunodeficiency, HCT recipients, fludarabine therapy, HLA-homozygous donors
**Prevention:** Gamma irradiation (25 Gy) or pathogen reduction of cellular products
**Prognosis:** >90% mortality; prevention is paramount

## Massive Transfusion Protocol (MTP)

**Definition:** >10 units PRBCs in 24h or >4 units in 1 hour with ongoing bleeding
**Balanced resuscitation:**
- Target 1:1:1 ratio (PRBC:FFP:platelets) based on PROPPR trial
- Whole blood resuscitation gaining traction in trauma
- Viscoelastic-guided (TEG/ROTEM) resuscitation may reduce blood product use

**Complications of massive transfusion:**
- Hypothermia: Blood warmers essential
- Hypocalcemia: Citrate in stored blood chelates calcium; replace empirically
- Hyperkalemia: Potassium leaks from stored RBCs; worse with irradiated products
- Dilutional coagulopathy: Balanced ratio mitigates`,
      keyTerms: [
        { term: 'extended antigen matching', definition: 'Matching donor/recipient for minor blood group antigens (Rh, Kell) beyond ABO to prevent alloimmunization' },
        { term: 'molecular blood group typing', definition: 'DNA-based determination of RBC antigen phenotype; useful when serologic typing unreliable' },
        { term: 'TA-GVHD', definition: 'Transfusion-associated graft-versus-host disease; donor T-cells attack recipient tissues; usually fatal' },
        { term: 'massive transfusion protocol', definition: 'Standardized approach to balanced blood product delivery for massive hemorrhage; typically 1:1:1 ratio' },
      ],
      clinicalNotes: 'Never delay transfusion for AIHA because of incompatible crossmatch - ensure no underlying alloantibodies and transfuse. Kidd antibodies are the most common cause of DHTR because they evanescence below detection. All SCD patients should receive extended antigen-matched blood. Irradiation prevents TA-GVHD but accelerates potassium leak from RBCs.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge transfusion medicine spans universal pathogen reduction, artificial blood substitutes, machine learning for antibody prediction, and paradigm shifts toward patient blood management and restrictive transfusion strategies.',
      explanation: `## Pathogen Reduction Technology (PRT)

**Current platforms:**
| System | Agent | Products | Approval |
|--------|-------|----------|----------|
| INTERCEPT | Amotosalen + UVA | Platelets, plasma | FDA, CE |
| Mirasol | Riboflavin + UV | Platelets, plasma, whole blood | CE (not FDA for all) |
| THERAFLEX | UVC alone | Platelets, plasma | CE |

**Impact:**
- Eliminates need for bacterial testing of platelets
- Reduces TRALI risk (inactivates WBCs)
- Effective against most bacteria, viruses, parasites
- Limitations: Cannot pathogen-reduce RBCs with current technology; some platelet count loss

**RBC pathogen reduction:**
- Amustaline (S-303) in advanced trials
- Would transform blood safety if approved
- Challenge: maintaining RBC viability after treatment

## Artificial Oxygen Carriers

**Hemoglobin-based oxygen carriers (HBOCs):**
- First generation failed (vasoconstriction from NO scavenging)
- Next-gen: PEGylated hemoglobin, polymerized bovine Hb (HBOC-201)
- Potential use: Bridge in massive hemorrhage, austere/military settings

**Perfluorocarbon emulsions:**
- Dissolve oxygen directly; not hemoglobin-dependent
- Limited clinical application due to side effects
- Research continues for niche applications

**Stem cell-derived RBCs:**
- In vitro erythropoiesis from HSCs or iPSCs
- RESTORE trial (UK): First-in-human transfusion of lab-grown RBCs (2022)
- Current limitation: Scale (requires billions of cells per unit)
- Future: Could provide rare phenotype units on demand

## Machine Learning in Transfusion Medicine

**Antibody prediction:**
- ML models predict alloimmunization risk based on patient genetics, transfusion history, and inflammation markers
- Could guide prophylactic extended matching cost-effectively

**Transfusion trigger optimization:**
- Individualized triggers based on patient physiology vs. fixed Hb thresholds
- Integration of lactate, ScvO2, and tissue oxygenation markers

**Inventory management:**
- AI-driven demand forecasting reduces waste
- Optimal allocation of rare blood types

## Patient Blood Management (PBM)

**Three-pillar approach:**
1. Optimize erythropoiesis: Treat iron deficiency pre-operatively, EPO when indicated
2. Minimize blood loss: Surgical technique, antifibrinolytics (TXA), cell salvage
3. Optimize physiologic tolerance: Restrictive transfusion thresholds, normovolemia

**Evidence for restrictive transfusion:**
- TRICC trial: Hb trigger 7 vs. 10 g/dL equivalent or better outcomes in ICU
- TRICS III: Restrictive strategy non-inferior after cardiac surgery
- REALITY: Hb 7 g/dL threshold safe for upper GI bleeding
- Exceptions: ACS (Hb <8-10 controversial), severe TBI

## Emerging Challenges

- Aging population: Increasing transfusion demand, decreasing donor pool
- Climate change: Impact on blood supply chain and donor availability
- Pandemic preparedness: Maintaining blood supply during health crises
- Equity: Access to safe blood products in low/middle-income countries`,
      keyTerms: [
        { term: 'pathogen reduction technology', definition: 'Photochemical treatment of blood products to inactivate contaminating pathogens and residual leukocytes' },
        { term: 'HBOC', definition: 'Hemoglobin-based oxygen carrier; synthetic blood substitute under development for emergency use' },
        { term: 'patient blood management', definition: 'Evidence-based approach minimizing unnecessary transfusion through optimization of erythropoiesis, blood conservation, and anemia tolerance' },
        { term: 'RESTORE trial', definition: 'First-in-human clinical trial of lab-grown red blood cells derived from stem cells (UK, 2022)' },
      ],
      clinicalNotes: `Key clinical directions:

1. Restrictive transfusion (Hb 7 g/dL trigger) is standard for most stable patients; liberal triggers reserved for ACS and possibly TBI
2. Patient blood management programs reduce transfusion rates 20-40% and improve outcomes
3. Pathogen reduction for platelets is increasingly standard; RBC pathogen reduction is the next frontier
4. Lab-grown RBCs are proof-of-concept but decades from large-scale clinical use
5. ML-guided alloimmunization prediction could optimize extended matching strategies and reduce costs`,
    },
  },

  media: [
    { id: 'transfusion-rx-algorithm', type: 'diagram', filename: 'transfusion-reaction-algorithm.svg', title: 'Transfusion Reaction Workup Algorithm', description: 'Step-by-step evaluation of suspected transfusion reaction' },
  ],
  citations: [
    { id: 'aabb-technical-manual', type: 'textbook', title: 'AABB Technical Manual', authors: ['Fung MK', 'et al.'], source: 'AABB Press', chapter: 'Adverse Effects of Transfusion' },
    { id: 'delaney-trali', type: 'article', title: 'Transfusion-Related Acute Lung Injury', authors: ['Delaney M', 'et al.'], source: 'Transfusion' },
  ],
  crossReferences: [
    { targetId: 'topic-blood-transfusion-medicine', targetType: 'topic', relationship: 'parent', label: 'Blood Transfusion Medicine' },
    { targetId: 'condition-disseminated-intravascular-coagulation', targetType: 'condition', relationship: 'related', label: 'DIC' },
    { targetId: 'condition-sickle-cell-disease', targetType: 'condition', relationship: 'related', label: 'Sickle Cell Disease (hyperhemolysis)' },
  ],
  tags: {
    systems: ['hematology'],
    topics: ['pathology', 'therapeutics', 'patient safety'],
    keywords: ['transfusion reaction', 'TRALI', 'TACO', 'hemolytic', 'alloimmunization', 'blood safety'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'emergency medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default transfusionReactions;
