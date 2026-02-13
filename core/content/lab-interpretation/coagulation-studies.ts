/**
 * Coagulation Studies Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * coagulation tests including PT/INR, PTT, fibrinogen, and specialized assays.
 */

import { EducationalContent } from "../types";

export const coagulationStudiesContent: EducationalContent = {
  id: "coagulation-studies-interpretation",
  type: "concept",
  name: "Coagulation Studies Interpretation",
  nameEs: 'Estudios de Coagulacion',
  alternateNames: ["Clotting Tests", "Coagulation Panel", "Coag Studies"],

  levels: {
    1: {
      level: 1,
      summary: "Coagulation tests check how well your blood can form clots to stop bleeding.",
      explanation: `When you get a cut, your blood needs to clot (thicken) to stop the bleeding. This happens through a series of steps, like dominoes falling one after another.

**Main coagulation tests:**

**PT (Prothrombin Time) and INR:**
- Measures one pathway of clotting
- Used to monitor blood thinner medications like warfarin
- INR tells doctors if blood thinner dosing is right

**PTT (Partial Thromboplastin Time):**
- Measures another clotting pathway
- Used to monitor heparin (another blood thinner)
- Also screens for bleeding disorders like hemophilia

**Fibrinogen:**
- The protein that actually forms the clot
- Low levels mean your blood has trouble forming stable clots

Doctors order these tests to check for bleeding problems, monitor blood thinner medications, and prepare for surgery.`,
      keyTerms: [
        { term: "blood clot", definition: "A thick lump of blood that forms to stop bleeding" },
        { term: "PT", definition: "Prothrombin Time - measures how fast your blood clots through one pathway" },
        { term: "INR", definition: "International Normalized Ratio - standardized way to measure PT for blood thinner monitoring" },
        { term: "PTT", definition: "Partial Thromboplastin Time - measures clotting through another pathway" },
      ],
      analogies: [
        "Blood clotting is like a row of dominoes - each domino (clotting factor) needs to knock down the next one for the clot to form.",
        "PT and PTT are like timing two different relay race teams - they measure how fast each team (pathway) can finish.",
      ],
    },
    2: {
      level: 2,
      summary: "The PT/INR evaluates the extrinsic pathway and is used for warfarin monitoring, while the PTT evaluates the intrinsic pathway and monitors heparin therapy.",
      explanation: `## Coagulation Pathways

**Extrinsic Pathway (PT/INR):**
- Initiated by tissue factor (tissue damage)
- Factors: VII, X, V, II (prothrombin), I (fibrinogen)
- PT normal range: 11-13 seconds
- INR normal range: 0.8-1.1

**Intrinsic Pathway (PTT):**
- Initiated by contact with foreign surfaces
- Factors: XII, XI, IX, VIII, X, V, II, I
- Normal range: 25-35 seconds

**Common Pathway:**
- Where both pathways converge
- Factor X, V, prothrombin, fibrinogen
- Prolonged PT AND PTT suggests common pathway or fibrinogen problem

## Clinical Applications

**PT/INR Uses:**
| Scenario | Target INR |
|----------|------------|
| DVT/PE treatment | 2.0-3.0 |
| Atrial fibrillation | 2.0-3.0 |
| Mechanical heart valve | 2.5-3.5 |
| Liver disease assessment | N/A (not on warfarin) |

**PTT Uses:**
- Monitoring unfractionated heparin
- Screening for hemophilia A and B
- Detecting lupus anticoagulant (paradoxically causes clots)

**Fibrinogen:**
- Normal: 200-400 mg/dL
- Low: DIC, liver disease, massive transfusion
- High: Inflammation (acute phase reactant)`,
      keyTerms: [
        { term: "extrinsic pathway", definition: "Clotting pathway starting with tissue factor; measured by PT" },
        { term: "intrinsic pathway", definition: "Clotting pathway starting with contact activation; measured by PTT" },
        { term: "warfarin", definition: "Blood thinner that blocks vitamin K-dependent clotting factors (II, VII, IX, X)" },
        { term: "heparin", definition: "Blood thinner that enhances antithrombin; monitored by PTT" },
      ],
      analogies: [
        "The extrinsic pathway is like an emergency response that starts from outside (tissue injury), while the intrinsic pathway is like an internal alarm system.",
        "INR is like a standardized test score - it lets doctors compare results from different labs.",
      ],
    },
    3: {
      level: 3,
      summary: "Coagulation study interpretation requires systematic analysis of PT, PTT, and mixing studies to differentiate factor deficiencies from inhibitors.",
      explanation: `## Systematic Coagulation Interpretation

### Pattern Recognition

| PT | PTT | Differential |
|----|-----|--------------|
| ↑ | Normal | Factor VII deficiency, early warfarin, early liver disease |
| Normal | ↑ | Factor VIII, IX, XI, XII deficiency; heparin; lupus anticoagulant |
| ↑ | ↑ | Common pathway (X, V, II, I); severe liver disease; DIC; supratherapeutic anticoagulation |

### Mixing Studies

**Principle:** Mix patient plasma 1:1 with normal pooled plasma

**Interpretation:**
| Result | Meaning |
|--------|---------|
| Corrects (normalizes) | Factor deficiency |
| Does not correct | Inhibitor present |

**Common Inhibitors:**
- Factor VIII inhibitor (acquired hemophilia)
- Lupus anticoagulant
- Heparin (if not neutralized)

### Factor-Specific Testing

**Hemophilia A:** Factor VIII deficiency
- X-linked recessive
- Severity correlates with factor level
- PTT elevated, PT normal

**Hemophilia B:** Factor IX deficiency
- Also X-linked recessive
- Clinically indistinguishable from Hemophilia A
- Requires factor assay to differentiate

**Von Willebrand Disease:**
- Most common inherited bleeding disorder
- vWF carries Factor VIII
- May have prolonged PTT, bleeding time
- Requires vWF antigen, activity, and multimer analysis

### DIC Assessment

**Diagnostic Criteria:**
| Test | Finding in DIC |
|------|----------------|
| PT/PTT | Prolonged |
| Fibrinogen | Low (<150 mg/dL) |
| D-dimer | Elevated |
| Platelets | Low |
| Schistocytes | Present on smear |

### Lupus Anticoagulant Workup

**Paradox:** Prolongs PTT but causes thrombosis

**Testing Algorithm:**
1. Screening: Prolonged PTT, dilute Russell viper venom time (dRVVT)
2. Mixing study: Does not correct
3. Confirmation: Corrects with excess phospholipid

### Critical Values
- INR >5: Bleeding risk, may need reversal
- PTT >100 seconds: Significant bleeding risk
- Fibrinogen <100 mg/dL: Impaired hemostasis`,
      keyTerms: [
        { term: "mixing study", definition: "Test mixing patient and normal plasma to differentiate factor deficiency from inhibitor" },
        { term: "DIC", definition: "Disseminated Intravascular Coagulation - consumptive coagulopathy with simultaneous clotting and bleeding" },
        { term: "lupus anticoagulant", definition: "Antiphospholipid antibody causing PTT prolongation but clinical thrombosis, not bleeding" },
        { term: "von Willebrand disease", definition: "Most common inherited bleeding disorder; affects platelet adhesion and Factor VIII levels" },
      ],
      clinicalNotes: "A mixing study that initially corrects but then shows prolonged clotting after 1-2 hour incubation suggests a time-dependent inhibitor like Factor VIII inhibitor.",
    },
    4: {
      level: 4,
      summary: "Advanced coagulation interpretation incorporates specialized assays, understanding of anticoagulant effects, and management of complex bleeding and thrombotic disorders.",
      explanation: `## Advanced Coagulation Interpretation

### Specialized Assays

**Thrombin Time (TT):**
- Direct measure of fibrinogen-to-fibrin conversion
- Prolonged by: Heparin, fibrinogen deficiency/dysfunction, dabigatran, high FDPs

**Reptilase Time:**
- Similar to TT but unaffected by heparin
- Differentiates heparin effect from fibrinogen abnormality

**Anti-Xa Assay:**
| Anticoagulant | Use |
|---------------|-----|
| LMWH | Therapeutic monitoring (target: 0.5-1.0 IU/mL) |
| UFH | Alternative to PTT monitoring |
| DOACs | Qualitative assessment of drug effect |

**Chromogenic Factor VIII:**
- Measures Factor VIII activity
- Preferred for monitoring Factor VIII replacement
- Not affected by lupus anticoagulant interference

### DOAC Effects on Coagulation Tests

| DOAC | PT Effect | PTT Effect | Best Assay |
|------|-----------|------------|------------|
| Dabigatran | ↑ | ↑↑ | Dilute thrombin time, ecarin clotting time |
| Rivaroxaban | ↑ | Variable | Calibrated anti-Xa |
| Apixaban | Minimal | Minimal | Calibrated anti-Xa |
| Edoxaban | ↑ | Variable | Calibrated anti-Xa |

### Fibrinolysis Assessment

**Tests:**
- Euglobulin lysis time: Global fibrinolytic activity
- Plasminogen, alpha-2-antiplasmin: Individual component assessment
- PAI-1 activity: Inhibitor of fibrinolysis

**Hyperfibrinolysis:**
- Causes: Liver transplant, trauma, DIC, amniotic fluid embolism
- Antidote: Tranexamic acid, aminocaproic acid

### Thrombophilia Workup

**When to Test:**
- Unprovoked VTE <50 years
- Recurrent VTE
- Unusual site thrombosis
- Strong family history

**Testing Panel:**
| Test | Timing |
|------|--------|
| Factor V Leiden | Anytime |
| Prothrombin G20210A | Anytime |
| Protein C, S | Off anticoagulation, not acute |
| Antithrombin | Off heparin, not acute |
| Antiphospholipid antibodies | 12 weeks apart |

### Complex Reversal Scenarios

**Warfarin Reversal:**
| INR | Bleeding | Management |
|-----|----------|------------|
| 4.5-10 | None | Hold warfarin, recheck |
| >10 | None | Vitamin K 2.5-5mg PO |
| Any | Serious | 4-factor PCC + Vitamin K 10mg IV |

**DOAC Reversal:**
| Agent | Reversal |
|-------|----------|
| Dabigatran | Idarucizumab (specific antidote) |
| Factor Xa inhibitors | Andexanet alfa or 4-factor PCC |
| All | Activated charcoal if recent ingestion |

### Factor Replacement Dosing

**Hemophilia A (Factor VIII):**
- Half-life: 8-12 hours
- 1 unit/kg raises level ~2%
- Target levels vary by bleed severity/surgery type

**Hemophilia B (Factor IX):**
- Half-life: 18-24 hours
- 1 unit/kg raises level ~1%
- Longer dosing intervals possible`,
      keyTerms: [
        { term: "anti-Xa assay", definition: "Measures activity against Factor Xa; used for LMWH and DOAC monitoring" },
        { term: "thrombin time", definition: "Measures time to form clot when thrombin is added; sensitive to fibrinogen and heparin" },
        { term: "4-factor PCC", definition: "Prothrombin Complex Concentrate containing Factors II, VII, IX, X; used for reversal" },
        { term: "idarucizumab", definition: "Specific reversal agent for dabigatran (Praxbind)" },
      ],
      clinicalNotes: "Standard PT/PTT may be unreliable for assessing DOAC effect. Specific calibrated assays should be used when precise quantification is needed.",
    },
    5: {
      level: 5,
      summary: "Expert coagulation interpretation integrates viscoelastic testing, understanding of coagulation in special populations, and precision approaches to hemostatic management.",
      explanation: `## Expert-Level Coagulation Interpretation

### Viscoelastic Testing (TEG/ROTEM)

**Parameters (TEG/ROTEM equivalents):**
| Parameter | Meaning | Clinical Use |
|-----------|---------|--------------|
| R / CT | Clotting time | Factor deficiency |
| K / CFT | Clot formation | Fibrinogen, platelets |
| α angle | Clot strengthening | Fibrinogen function |
| MA / MCF | Maximum strength | Platelet function, fibrinogen |
| LY30 / ML | Clot stability | Fibrinolysis |

**Trauma Resuscitation (ROTEM-guided):**
| Finding | Intervention |
|---------|--------------|
| Prolonged CT (EXTEM) | FFP or PCC |
| Low MCF (FIBTEM) | Cryoprecipitate or fibrinogen concentrate |
| Low MCF (EXTEM) with normal FIBTEM | Platelets |
| Increased ML (EXTEM) | Tranexamic acid |

### Coagulation in Special Populations

**Liver Disease:**
- "Rebalanced hemostasis" - reduced procoagulants AND anticoagulants
- INR/PTT do not predict bleeding risk
- Thromboelastography more informative
- Can develop both bleeding and thrombosis

**Pregnancy:**
- Physiologic hypercoagulability
- Fibrinogen increases to 400-600 mg/dL
- Protein S decreases
- DOAC effects on fetus - avoid in pregnancy

**Pediatrics:**
- Age-dependent reference ranges
- Neonates: Vitamin K deficiency risk
- Protein C/S lower in infancy

### Acquired Hemophilia A

**Characteristics:**
- Older adults or peripartum
- Factor VIII inhibitor (autoantibody)
- Severe bleeding disproportionate to PTT prolongation
- PTT does not correct with mixing; time-dependent

**Management:**
- Bypassing agents: rFVIIa, FEIBA
- Immunosuppression: Steroids ± cyclophosphamide or rituximab
- Factor VIII ineffective due to inhibitor

### Rare Factor Deficiencies

| Factor | Inheritance | Bleeding Severity | Notes |
|--------|-------------|-------------------|-------|
| Factor XI | AR (Ashkenazi) | Variable, surgical bleeding | PTT prolonged |
| Factor VII | AR | Variable | PT prolonged only |
| Factor XIII | AR | Severe, delayed wound healing | PT/PTT normal |
| Fibrinogen | AR | Variable | TT, fibrinogen level |

### Coagulation in Critical Illness

**Sepsis-Induced Coagulopathy:**
- Procoagulant state initially
- DIC if severe/prolonged
- Anticoagulant factor consumption
- Endothelial dysfunction

**Trauma-Induced Coagulopathy:**
- Acute traumatic coagulopathy (ATC)
- Hyperfibrinolysis early
- Later: DIC-like picture
- Early TXA improves outcomes (CRASH-2)

### Emerging Therapies

**Emicizumab:**
- Bispecific antibody bridging FIXa and FX
- Mimics Factor VIII function
- Effective even with inhibitors
- Revolutionizing hemophilia A management

**Fitusiran (in development):**
- siRNA targeting antithrombin
- Rebalances hemostasis in hemophilia
- Monthly subcutaneous dosing

**Concizumab (in development):**
- Anti-TFPI monoclonal antibody
- Enhances thrombin generation
- Applicable to hemophilia A and B

### Laboratory Quality

**Pre-analytical Variables:**
- Underfilled citrate tube: Spurious prolongation
- Hematocrit extremes: Adjust citrate volume
- Delayed processing: Factor degradation
- Lipemia, icterus, hemolysis: Optical interference

**Point-of-Care Coagulation:**
| Device | Measures | Use |
|--------|----------|-----|
| iSTAT | PT/INR, ACT | OR, bedside |
| CoaguChek | INR | Home monitoring |
| TEG/ROTEM | Viscoelastic | Trauma, cardiac surgery, transplant |

### Decision Support

**Bleeding Assessment Tools:**
- ISTH BAT: Standardized bleeding questionnaire
- Helps distinguish pathologic from normal bleeding
- Guides testing decisions

**Thrombosis Risk Scores:**
- HAS-BLED: Bleeding risk on anticoagulation
- CHA2DS2-VASc: Stroke risk in AF
- Wells, Geneva: VTE probability`,
      keyTerms: [
        { term: "viscoelastic testing", definition: "TEG/ROTEM - measures whole blood clot formation and breakdown in real-time" },
        { term: "emicizumab", definition: "Bispecific antibody mimicking Factor VIII for hemophilia A prophylaxis" },
        { term: "acquired hemophilia", definition: "Autoimmune condition with Factor VIII inhibitor causing severe bleeding" },
        { term: "rebalanced hemostasis", definition: "State in liver disease where reduced pro- and anticoagulants create new equilibrium" },
      ],
      clinicalNotes: "Expert coagulation management requires understanding that standard tests like PT/PTT have significant limitations in predicting clinical bleeding or thrombosis. Viscoelastic testing and clinical assessment often provide more actionable information.",
    },
  },

  media: [],
  citations: [
    {
      id: "isth-dic",
      type: "article",
      title: "ISTH DIC Scoring System",
      source: "Journal of Thrombosis and Haemostasis",
      authors: ["Taylor FB Jr", "Toh CH", "Hoots WK"],
    },
    {
      id: "chest-antithrombotic",
      type: "article",
      title: "CHEST Guideline: Antithrombotic Therapy",
      source: "CHEST Journal",
      authors: ["ACCP Panel"],
    },
  ],
  crossReferences: [
    { targetId: "lab-pt", targetType: "concept", relationship: "child" },
    { targetId: "lab-ptt", targetType: "concept", relationship: "child" },
    { targetId: "lab-fibrinogen", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["hematologic", "cardiovascular"],
    topics: ["laboratory", "hematology", "coagulation", "thrombosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
