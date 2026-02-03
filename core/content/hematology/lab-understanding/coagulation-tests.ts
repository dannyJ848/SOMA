import { EducationalContent } from '../types';

export const coagulationTests: EducationalContent = {
  id: 'hematology-coagulation-tests',
  type: 'concept',
  name: 'Coagulation Tests: PT, PTT, INR',
  alternateNames: ['Clotting Tests', 'PT/INR', 'aPTT', 'Prothrombin Time', 'Partial Thromboplastin Time'],
  levels: {
    1: {
      level: 1,
      summary: 'PT, PTT, and INR are blood tests that measure how long it takes your blood to clot, helping doctors check for bleeding problems or monitor blood-thinning medications.',
      explanation: `When you get a cut, your blood normally forms a clot to stop the bleeding. This happens because of special proteins in your blood called clotting factors that work together like a chain reaction. PT, PTT, and INR are tests that measure how well this process works.

**PT (Prothrombin Time)**
- Measures how long it takes blood to clot using one pathway
- Normal range is usually 11-13 seconds
- Used to monitor warfarin (Coumadin) therapy
- Prolonged in liver disease and vitamin K deficiency

**INR (International Normalized Ratio)**
- A standardized way to report PT results
- Makes results comparable between different labs
- Target for most people on warfarin is 2.0-3.0
- Higher numbers mean blood takes longer to clot

**PTT (Partial Thromboplastin Time)** or aPTT (activated PTT)
- Measures another pathway of clotting
- Normal range is usually 25-35 seconds
- Used to monitor heparin therapy
- Prolonged in hemophilia and other clotting factor problems

**Why are these tests done?**
- Before surgery to make sure you will not bleed too much
- To diagnose bleeding disorders
- To monitor blood thinner medications
- To check for liver problems (liver makes clotting factors)

**What do abnormal results mean?**
- Longer times mean your blood takes longer to clot
- Could mean bleeding risk
- Could be a sign of clotting factor deficiency
- May indicate medication effect (if on blood thinners)`,
      keyTerms: [
        { term: 'PT', definition: 'Prothrombin Time; a test measuring how long blood takes to clot through one pathway' },
        { term: 'PTT', definition: 'Partial Thromboplastin Time; a test measuring clotting through another pathway' },
        { term: 'INR', definition: 'International Normalized Ratio; a standardized way to report PT results' },
        { term: 'Clotting factors', definition: 'Proteins in blood that work together in a chain reaction to form clots' },
        { term: 'Warfarin', definition: 'A blood thinner pill that is monitored using PT/INR tests' },
        { term: 'Heparin', definition: 'An injectable blood thinner that is monitored using PTT tests' },
      ],
      analogies: [
        'Think of clotting factors like dominoes - each one activates the next in line until a clot forms',
        'PT and PTT test different paths to the same destination, like testing two different routes to get home',
        'INR is like converting miles to kilometers - it standardizes measurements so everyone can compare',
      ],
      examples: [
        'A patient going in for knee surgery has PT/PTT checked to ensure safe clotting before the operation',
        'Someone on warfarin for atrial fibrillation gets monthly INR checks to keep their blood thinning in the target range',
        'A child with unexplained bruising gets a PTT that is prolonged, leading to a diagnosis of hemophilia',
      ],
    },
    2: {
      level: 2,
      summary: 'PT evaluates the extrinsic and common pathways (factors VII, X, V, II, I), while aPTT evaluates the intrinsic and common pathways (factors XII, XI, IX, VIII, X, V, II, I), with INR standardizing PT for anticoagulation monitoring.',
      explanation: `**The Coagulation Cascade**

The clotting system has three interconnected pathways:

1. **Extrinsic Pathway** (measured by PT)
   - Initiated by tissue factor (TF) released from injured cells
   - Involves Factor VII
   - Quick activation (seconds)

2. **Intrinsic Pathway** (measured by aPTT)
   - Initiated by contact with negatively charged surfaces
   - Involves Factors XII, XI, IX, VIII
   - Takes longer (minutes)

3. **Common Pathway** (measured by both PT and aPTT)
   - Where the two pathways converge
   - Involves Factors X, V, II (prothrombin), I (fibrinogen)
   - Final result: fibrin clot formation

**Prothrombin Time (PT)**

*What it tests:* Factors VII, X, V, II, fibrinogen
*Normal range:* 11-13 seconds (varies by lab)
*Prolonged by:*
- Warfarin therapy (inhibits vitamin K-dependent factors)
- Vitamin K deficiency
- Liver disease (liver makes most clotting factors)
- Factor VII deficiency (only factor unique to extrinsic pathway)
- DIC (disseminated intravascular coagulation)

**INR (International Normalized Ratio)**

*Purpose:* Standardizes PT across different laboratories and reagents
*Calculation:* INR = (Patient PT / Mean Normal PT)^ISI
*Target ranges:*
- Atrial fibrillation, DVT/PE treatment: 2.0-3.0
- Mechanical heart valves: 2.5-3.5
- Normal (not on anticoagulation): approximately 1.0

**Activated Partial Thromboplastin Time (aPTT)**

*What it tests:* Factors XII, XI, IX, VIII, X, V, II, fibrinogen
*Normal range:* 25-35 seconds (varies by lab)
*Prolonged by:*
- Heparin therapy
- Hemophilia A (Factor VIII deficiency)
- Hemophilia B (Factor IX deficiency)
- von Willebrand disease (causes low Factor VIII)
- Lupus anticoagulant (paradoxically causes clotting, not bleeding)
- Factor XI, XII deficiency

**Interpretation Patterns**

| PT | aPTT | Possible Causes |
|----|------|-----------------|
| Prolonged | Normal | Warfarin, Factor VII deficiency, early liver disease |
| Normal | Prolonged | Heparin, hemophilia, vWD, Factor XI/XII deficiency |
| Prolonged | Prolonged | Severe liver disease, DIC, common pathway deficiency, warfarin overdose |
| Normal | Normal | Normal coagulation or mild factor deficiency |`,
      keyTerms: [
        { term: 'Extrinsic pathway', definition: 'Coagulation pathway initiated by tissue factor, measured by PT' },
        { term: 'Intrinsic pathway', definition: 'Coagulation pathway initiated by contact activation, measured by aPTT' },
        { term: 'Common pathway', definition: 'Final steps of clotting where both pathways converge (Factors X, V, II, I)' },
        { term: 'ISI', definition: 'International Sensitivity Index; reagent-specific factor used to calculate INR' },
        { term: 'Vitamin K-dependent factors', definition: 'Factors II, VII, IX, X that require vitamin K for production; targeted by warfarin' },
        { term: 'Lupus anticoagulant', definition: 'Antibody that prolongs aPTT in vitro but causes clotting in vivo (paradox)' },
      ],
      analogies: [
        'The extrinsic and intrinsic pathways are like two on-ramps merging onto the same highway (common pathway)',
        'Vitamin K-dependent factors are like cars that need a special fuel (vitamin K) to run - warfarin blocks that fuel',
        'The INR calculation is like currency exchange - it converts local measurements to a universal standard',
      ],
      examples: [
        'A patient with isolated prolonged PT but normal aPTT likely has Factor VII deficiency or is on warfarin',
        'A patient on warfarin with INR of 4.5 is over-anticoagulated and at increased bleeding risk',
        'Prolonged aPTT that corrects when mixed with normal plasma indicates a factor deficiency (like hemophilia)',
      ],
    },
    3: {
      level: 3,
      summary: 'Coagulation testing interpretation requires understanding mixing studies to differentiate factor deficiencies from inhibitors, recognizing preanalytic variables, and applying results to clinical diagnosis and anticoagulation management.',
      explanation: `**Mixing Studies**

When PT or aPTT is prolonged, mixing the patient's plasma with normal plasma helps identify the cause:

*Procedure:* Mix patient plasma 1:1 with normal pooled plasma, then repeat the test

*Interpretation:*
- **Corrects to normal:** Factor deficiency (normal plasma provides the missing factor)
- **Does not correct:** Inhibitor present (antibody blocks clotting factors)

*Types of inhibitors:*
- Lupus anticoagulant (antiphospholipid antibody) - most common cause
- Specific factor inhibitors (rare, e.g., acquired Factor VIII inhibitor)

*Immediate vs. incubated mixing studies:*
- Lupus anticoagulant: Does not correct immediately
- Factor VIII inhibitor: May correct immediately but fails after incubation (time and temperature dependent)

**Specific Factor Assays**

After mixing studies indicate deficiency, specific factor assays identify which factor:

| Factor Deficiency | Clinical Presentation | PT | aPTT |
|-------------------|----------------------|-----|------|
| Factor VII | Mild-moderate bleeding | Prolonged | Normal |
| Factor VIII | Hemophilia A, severe bleeding | Normal | Prolonged |
| Factor IX | Hemophilia B, severe bleeding | Normal | Prolonged |
| Factor XI | Variable bleeding | Normal | Prolonged |
| Factor XII | No bleeding (contact factor) | Normal | Prolonged |
| Factor X, V | Moderate-severe bleeding | Prolonged | Prolonged |
| Fibrinogen | Variable bleeding | Prolonged | Prolonged |

**Preanalytic Variables**

Coagulation testing is highly sensitive to preanalytic errors:

*Collection issues:*
- Citrate tube fill (must be 90-100% full)
- Order of draw (citrate should not follow heparin tubes)
- Traumatic draws activate clotting cascade
- Hemolysis affects results

*Processing:*
- Time to centrifugation (within 1 hour ideal)
- Platelet-poor plasma required for accurate testing
- Storage temperature

*Patient factors:*
- Hematocrit >55%: Requires adjusted citrate volume
- Lipemia and icterus may interfere with optical detection
- Heparin contamination from IV lines common cause of falsely prolonged aPTT

**Thrombin Time (TT)**

*What it tests:* Final conversion of fibrinogen to fibrin by thrombin
*Normal range:* 14-21 seconds
*Prolonged by:*
- Heparin (very sensitive)
- Direct thrombin inhibitors (dabigatran)
- Low fibrinogen (hypofibrinogenemia)
- Dysfibrinogenemia (abnormal fibrinogen)
- Elevated fibrin degradation products (DIC)

*Clinical utility:*
- Differentiates heparin effect from other causes of prolonged aPTT
- Screening for fibrinogen abnormalities

**Fibrinogen Level**

*Methods:* Clauss (functional), immunologic
*Normal range:* 200-400 mg/dL
*Clinical significance:*
- Low in DIC, liver failure, massive transfusion
- Elevated as acute phase reactant
- Critical for clot formation

**D-Dimer**

*What it measures:* Fibrin degradation products (cross-linked fibrin breakdown)
*Clinical utility:*
- High sensitivity for VTE - useful for exclusion
- Low specificity - elevated in many conditions
- Age-adjusted cutoff: Age x 10 ng/mL (for patients >50)

*Elevated in:*
- VTE (DVT, PE)
- DIC
- Recent surgery
- Malignancy
- Pregnancy
- Inflammation/infection`,
      keyTerms: [
        { term: 'Mixing study', definition: 'Test mixing patient and normal plasma to distinguish factor deficiency from inhibitor' },
        { term: 'Specific factor inhibitor', definition: 'Antibody directed against a particular clotting factor' },
        { term: 'Thrombin time', definition: 'Test measuring conversion of fibrinogen to fibrin; very sensitive to heparin' },
        { term: 'Clauss fibrinogen', definition: 'Functional assay measuring fibrinogen activity' },
        { term: 'Preanalytic variables', definition: 'Factors before laboratory testing that can affect results' },
        { term: 'Contact factors', definition: 'Factors XII and XI; deficiency prolongs aPTT but does not cause bleeding' },
      ],
      clinicalNotes: 'Always verify unexpected results are not due to preanalytic error before further workup. Heparin contamination from IV lines is the most common cause of unexplained aPTT prolongation in hospitalized patients - redraw from peripheral vein. Factor XII deficiency causes very prolonged aPTT but no clinical bleeding. Lupus anticoagulant is a misnomer - it actually causes thrombosis, not bleeding.',
    },
    4: {
      level: 4,
      summary: 'Advanced coagulation testing interpretation integrates specialized assays for lupus anticoagulant, thrombophilia evaluation, monitoring of novel anticoagulants, and viscoelastic testing for perioperative and critical care management.',
      explanation: `**Lupus Anticoagulant (LA) Testing**

LA diagnosis requires demonstration of:
1. Prolongation of phospholipid-dependent clotting tests
2. Evidence of an inhibitor (mixing study does not correct)
3. Phospholipid dependence (correction with excess phospholipid)

*Testing Panel:*
- Sensitive aPTT (low phospholipid reagent)
- Dilute Russell Viper Venom Time (dRVVT) - most specific
- Silica clotting time

*Interpretation criteria:*
1. Screen: Prolonged dRVVT or aPTT
2. Mix: Does not correct (ratio screen/mix >=1.2)
3. Confirm: Corrects with excess phospholipid (screen/confirm ratio >=1.2)

*Timing considerations:*
- Not affected by warfarin (use dRVVT)
- Affected by heparin and DOACs - avoid testing during therapy
- Repeat at 12 weeks for persistent positivity

**Thrombophilia Testing**

*Coagulation-based tests:*
- Protein C activity (chromogenic or clotting)
- Protein S free antigen and activity
- Antithrombin activity

*Genetic tests:*
- Factor V Leiden (G1691A)
- Prothrombin mutation (G20210A)

*Timing:*
| Test | Affected by warfarin | Affected by DOACs | Affected by heparin |
|------|---------------------|-------------------|---------------------|
| Protein C | Yes (low) | Some | No |
| Protein S | Yes (low) | Some | No |
| Antithrombin | No | Some | Yes (low) |
| Factor V Leiden | No | No | No |
| Prothrombin mutation | No | No | No |

*Recommendation:* Ideally test off anticoagulation for 2-4 weeks (genetic tests can be done anytime)

**DOAC Monitoring**

DOACs generally do not require monitoring, but quantitative assessment may be needed:

*Dabigatran (direct thrombin inhibitor):*
- Prolongs aPTT (non-linear) and TT (very sensitive)
- Dilute thrombin time (Hemoclot) for quantification
- Ecarin clotting time

*Rivaroxaban, Apixaban, Edoxaban (Factor Xa inhibitors):*
- Anti-Xa assay calibrated to specific drug
- May prolong PT (variable, not reliable for monitoring)
- aPTT less affected

*When to test DOAC levels:*
- Before urgent surgery
- Suspected accumulation (renal impairment)
- Breakthrough thrombosis or bleeding
- Suspected non-adherence
- Extremes of body weight

**Viscoelastic Testing (TEG/ROTEM)**

*Principle:* Measures whole blood clot formation and dissolution in real-time

*Parameters:*
- R/CT: Reaction/clotting time (initiation)
- K/CFT: Kinetics/clot formation time (amplification)
- Angle/Alpha: Rate of clot strengthening
- MA/MCF: Maximum amplitude/clot firmness (platelet function)
- LY30/ML: Lysis at 30 min (fibrinolysis)

*Clinical applications:*
- Trauma resuscitation (goal-directed transfusion)
- Cardiac surgery
- Liver transplantation
- Obstetric hemorrhage
- Differentiating coagulopathy causes at bedside

*Advantages:*
- Rapid turnaround (15-20 minutes)
- Assesses entire hemostatic process
- Guides blood component therapy

*Limitations:*
- Not sensitive to platelet inhibitors (aspirin, P2Y12 inhibitors)
- Requires specialized equipment and training`,
      keyTerms: [
        { term: 'dRVVT', definition: 'Dilute Russell Viper Venom Time; most specific test for lupus anticoagulant' },
        { term: 'Anti-Xa assay', definition: 'Test measuring activity of Factor Xa inhibitors (heparin, DOACs)' },
        { term: 'Hemoclot', definition: 'Dilute thrombin time assay calibrated for dabigatran measurement' },
        { term: 'TEG', definition: 'Thromboelastography; viscoelastic test of whole blood clot formation' },
        { term: 'ROTEM', definition: 'Rotational thromboelastometry; similar to TEG with different nomenclature' },
        { term: 'Maximum amplitude', definition: 'TEG parameter reflecting clot strength, primarily platelet contribution' },
      ],
      clinicalNotes: 'LA testing requires careful technique - false positives common with improper sample handling. DOACs interfere with many coagulation tests - consider if unexpected results. TEG/ROTEM can guide transfusion in massive hemorrhage but should complement, not replace, clinical judgment. Protein C and S levels are physiologically reduced in acute thrombosis - defer testing until stable on anticoagulation.',
    },
    5: {
      level: 5,
      summary: 'Expert coagulation laboratory interpretation encompasses complex diagnostic algorithms, rare factor deficiency evaluation, acquired inhibitor management, perioperative anticoagulation bridging, and integration of novel testing methodologies.',
      explanation: `**Complex Coagulation Scenarios**

*Unexplained Prolonged aPTT Algorithm:*
1. Rule out preanalytic error (redraw if concern)
2. Repeat aPTT to confirm
3. Mixing study:
   - Corrects: Factor deficiency pathway
   - Does not correct: Inhibitor pathway

*Factor Deficiency Workup:*
- Factor VIII, IX assays (most common causes)
- If VIII low: Check vWF (vWD causes low VIII)
- If both normal: Factor XI, XII
- Consider rare: Prekallikrein, high molecular weight kininogen

*Inhibitor Workup:*
- LA panel (dRVVT, aPTT-based, confirm)
- If LA negative: Specific factor inhibitor suspected
- Bethesda assay for Factor VIII inhibitor quantification
- Consider incubated mixing study

**Acquired Factor VIII Inhibitor (Acquired Hemophilia A)**

*Clinical presentation:*
- New-onset severe bleeding in older adults
- Associated with autoimmune disease, malignancy, postpartum, drugs
- No prior history of bleeding

*Diagnosis:*
- Isolated prolonged aPTT, does not correct on mix
- Low Factor VIII
- Positive Bethesda assay (inhibitor titer)

*Management:*
- Bleeding: Bypassing agents (aPCC, rFVIIa), or high-dose Factor VIII (if low titer)
- Eradication: Immunosuppression (steroids, cyclophosphamide, rituximab)

**Perioperative Anticoagulation Management**

*Warfarin Bridging:*

| Thrombotic Risk | Bridging Approach |
|-----------------|-------------------|
| High (mechanical mitral valve, recent VTE, severe thrombophilia) | Bridge with therapeutic LMWH |
| Moderate | Consider bridging based on bleeding risk |
| Low (uncomplicated A-fib, remote VTE) | No bridging recommended |

*BRIDGE Trial:* No bridging non-inferior to bridging in moderate-risk AF with lower bleeding

*Timing:*
- Stop warfarin 5 days before procedure
- Start LMWH when INR <2.0 (if bridging)
- Last LMWH dose 24h before procedure
- Restart warfarin evening of procedure (or next day if high bleeding risk)
- Continue LMWH until INR therapeutic

*DOAC Perioperative Management:*

| Renal Function | Low Bleeding Risk | High Bleeding Risk |
|----------------|-------------------|---------------------|
| CrCl >50 | Stop 24h before | Stop 48h before |
| CrCl 30-50 | Stop 36-48h before | Stop 72h before |
| CrCl <30 | Stop 48-72h before | Stop 96h before |

*No bridging required with DOACs* (short half-life)

**Novel and Specialized Testing**

*Thrombin Generation Assay (TGA):*
- Global assessment of coagulation potential
- Measures ETP (endogenous thrombin potential), peak thrombin, lag time
- Research tool becoming clinically available
- May predict bleeding or thrombotic risk

*Platelet Function Testing:*
- Light transmission aggregometry (LTA): Gold standard
- Agonists: ADP, epinephrine, collagen, ristocetin, arachidonic acid
- PFA-100/200: Screening for primary hemostasis disorders
- VerifyNow: Point-of-care for antiplatelet monitoring

*Chromogenic Factor Assays:*
- Less affected by lupus anticoagulant
- Standard for Factor VIII in patients on emicizumab
- Useful when clot-based assays unreliable

**Quality Assurance Considerations**

*Critical values requiring immediate notification:*
- INR >5.0 (or per institutional policy)
- aPTT >100 seconds (in non-heparinized patient)
- Fibrinogen <100 mg/dL

*Delta checks:*
- Compare to previous results
- Unexpected changes may indicate specimen error or acute change

*Interference patterns:*
- Lipemia: Affects optical detection methods
- Hemolysis: Releases phospholipids, may shorten clotting times
- Icterus: Variable interference depending on method
- Paraproteins: May cause turbidity interference

*When standard testing fails:*
- Consider specialized reference laboratory
- Consultation with hematologist or coagulation specialist
- Document limitations and clinical correlation`,
      keyTerms: [
        { term: 'Bethesda assay', definition: 'Test quantifying factor inhibitor strength; 1 BU = 50% inhibition of factor' },
        { term: 'Acquired hemophilia A', definition: 'Spontaneous development of Factor VIII inhibitor causing severe bleeding' },
        { term: 'BRIDGE trial', definition: 'Landmark study showing no bridging non-inferior in moderate-risk AF patients' },
        { term: 'Thrombin generation assay', definition: 'Global test measuring total thrombin-producing capacity' },
        { term: 'Light transmission aggregometry', definition: 'Gold standard platelet function test using various agonists' },
        { term: 'Chromogenic assay', definition: 'Color-based assay less affected by interfering antibodies' },
      ],
      clinicalNotes: `**Diagnostic Pearls:**
- Contact factor deficiency (XII, prekallikrein, HMWK) causes markedly prolonged aPTT with no bleeding
- Factor XI deficiency: Variable bleeding phenotype; aPTT not predictive of surgical bleeding
- vWD must be excluded before diagnosing hemophilia A (vWD causes secondary Factor VIII deficiency)
- Acquired hemophilia A is a medical emergency - mortality 20% without appropriate treatment

**Perioperative Pearls:**
- Document baseline coagulation for comparison if bleeding occurs
- Point-of-care INR devices may be inaccurate at extremes - send lab INR if concern
- TEG/ROTEM results should be interpreted in clinical context, not in isolation
- Factor concentrate may be preferable to FFP for specific factor deficiencies

**Laboratory Communication:**
- Critical values require timely notification with documentation
- Unexpected results warrant discussion with laboratory before clinical action
- Complex cases benefit from direct communication with hematopathologist`,
    },
  },
  media: [
    {
      id: 'coag-cascade-diagram',
      type: 'diagram',
      filename: 'coagulation-cascade.svg',
      title: 'Coagulation Cascade Overview',
      description: 'Diagram showing intrinsic, extrinsic, and common pathways with PT/aPTT coverage',
    },
    {
      id: 'mixing-study-algorithm',
      type: 'diagram',
      filename: 'mixing-study-interpretation.svg',
      title: 'Mixing Study Interpretation Algorithm',
      description: 'Flow diagram for interpreting mixing study results',
    },
  ],
  citations: [
    'Kitchen S, McCraw A, Echenagucia M. Diagnosis of Hemophilia and Other Bleeding Disorders: A Laboratory Manual. 2nd ed. Montreal: World Federation of Hemophilia; 2010.',
    'Adcock DM, Gosselin R. Direct Oral Anticoagulants (DOACs) in the Laboratory: 2015 Review. Thromb Res. 2015;136(1):7-12.',
    'Pengo V, Tripodi A, Reber G, et al. Update of the guidelines for lupus anticoagulant detection. J Thromb Haemost. 2009;7(10):1737-1740.',
    'Douketis JD, Spyropoulos AC, Spencer FA, et al. Perioperative Management of Antithrombotic Therapy. Chest. 2012;141(2 Suppl):e326S-e350S.',
  ],
  crossReferences: [
    'hematology-hemophilia',
    'hematology-von-willebrand-disease',
    'hematology-thrombophilia',
    'hematology-anticoagulation',
  ],
  tags: {
    systems: ['hematology'],
    topics: ['coagulation', 'laboratory medicine', 'clotting tests', 'anticoagulation monitoring', 'hemostasis'],
    keywords: ['PT', 'INR', 'aPTT', 'PTT', 'coagulation', 'clotting factors', 'mixing study', 'bleeding disorder'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default coagulationTests;
