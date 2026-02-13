/**
 * Complete Blood Count (CBC) Interpretation Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * the Complete Blood Count panel.
 */

import { EducationalContent } from "../types";

export const cbcInterpretationContent: EducationalContent = {
  id: "cbc-interpretation",
  type: "concept",
  name: "Complete Blood Count Interpretation",
  nameEs: 'Interpretacion del Hemograma',
  alternateNames: ["CBC Interpretation", "Full Blood Count Analysis"],

  levels: {
    1: {
      level: 1,
      summary: "The CBC is a blood test that counts the different cells in your blood to check your overall health.",
      explanation: `The Complete Blood Count (CBC) is one of the most common blood tests. It looks at three main types of cells in your blood:

1. **Red blood cells** - These carry oxygen throughout your body. If you have too few, you might feel tired or weak (this is called anemia).

2. **White blood cells** - These fight infections and diseases. If they"re too high, you might have an infection. If they"re too low, your body might have trouble fighting off germs.

3. **Platelets** - These help your blood clot when you get a cut. If you have too few, you might bruise easily or bleed more than usual.

Doctors use this test to check your overall health, look for infections, see if you"re anemic, and make sure your blood is working properly before surgeries or treatments.`,
      keyTerms: [
        { term: "CBC", definition: "A blood test that counts the different cells in your blood" },
        { term: "red blood cells", definition: "Cells that carry oxygen from your lungs to the rest of your body" },
        { term: "white blood cells", definition: "Cells that help fight infections and diseases" },
        { term: "platelets", definition: "Tiny cell fragments that help your blood clot to stop bleeding" },
        { term: "anemia", definition: "When you don\"t have enough red blood cells or hemoglobin" },
      ],
      analogies: [
        "Think of your blood like a delivery service: red blood cells are the trucks carrying oxygen packages, white blood cells are the security guards protecting against invaders, and platelets are the repair crew fixing any leaks.",
        "A CBC is like taking attendance in your blood - counting how many of each type of cell showed up for work.",
      ],
    },
    2: {
      level: 2,
      summary: "The CBC measures red blood cells, white blood cells, and platelets, providing key indices like hemoglobin and hematocrit to assess oxygen-carrying capacity and immune function.",
      explanation: `The Complete Blood Count (CBC) is a panel of tests that evaluates the cellular components of blood:

**Red Blood Cell (RBC) Parameters:**
- **RBC Count**: Number of red cells per microliter (normal: 4.5-5.5 million/mcL)
- **Hemoglobin (Hgb)**: Oxygen-carrying protein (normal: 12-16 g/dL for women, 14-18 g/dL for men)
- **Hematocrit (Hct)**: Percentage of blood volume that is red cells (normal: 36-44% women, 40-50% men)
- **MCV**: Mean cell volume - size of red cells (normal: 80-100 fL)
- **MCH/MCHC**: Hemoglobin content per cell

**White Blood Cell (WBC) Parameters:**
- **WBC Count**: Total white cells (normal: 4,500-11,000/mcL)
- **Differential**: Breakdown by cell type (neutrophils, lymphocytes, monocytes, eosinophils, basophils)

**Platelet Parameters:**
- **Platelet Count**: Number of platelets (normal: 150,000-400,000/mcL)
- **MPV**: Mean platelet volume

**Common Clinical Uses:**
- Screening for anemia or polycythemia
- Detecting infections or immune disorders
- Monitoring chemotherapy effects
- Pre-surgical evaluation`,
      keyTerms: [
        { term: "hemoglobin", definition: "The iron-containing protein in red blood cells that carries oxygen", pronunciation: "HEE-moh-gloh-bin" },
        { term: "hematocrit", definition: "The percentage of blood volume made up of red blood cells", pronunciation: "hee-MAT-oh-krit" },
        { term: "MCV", definition: "Mean Corpuscular Volume - the average size of red blood cells" },
        { term: "differential", definition: "A breakdown of the different types of white blood cells" },
      ],
      analogies: [
        "Hemoglobin is like the seats on an oxygen bus - more seats means more oxygen passengers can be carried.",
        "The WBC differential is like identifying which departments in your immune system army are most active.",
      ],
    },
    3: {
      level: 3,
      summary: "CBC interpretation requires systematic analysis of RBC indices for anemia classification, WBC differential for infection patterns, and platelet parameters for hemostatic assessment.",
      explanation: `## Systematic CBC Interpretation

### Red Blood Cell Analysis

**Anemia Classification by MCV:**
| MCV | Classification | Common Causes |
|-----|----------------|---------------|
| <80 fL | Microcytic | Iron deficiency, thalassemia, chronic disease |
| 80-100 fL | Normocytic | Acute blood loss, hemolysis, CKD |
| >100 fL | Macrocytic | B12/folate deficiency, liver disease, MDS |

**Key RBC Indices:**
- **RDW (Red Cell Distribution Width)**: Elevated in nutritional deficiencies, normal in thalassemia trait
- **Reticulocyte Count**: Differentiates production vs destruction/loss

### White Blood Cell Analysis

**Differential Interpretation:**
| Cell Type | Normal % | Elevated In | Decreased In |
|-----------|----------|-------------|--------------|
| Neutrophils | 55-70% | Bacterial infection, stress | Chemotherapy, viral infections |
| Lymphocytes | 20-40% | Viral infections, CLL | HIV, steroids |
| Monocytes | 2-8% | Chronic infections, recovery | Bone marrow failure |
| Eosinophils | 1-4% | Allergies, parasites | Acute stress |
| Basophils | 0.5-1% | CML, allergic reactions | Hyperthyroidism |

**Critical Values:**
- WBC <2,000 or >30,000/mcL
- Hgb <7 or >20 g/dL
- Platelets <50,000 or >1,000,000/mcL

### Platelet Analysis
- Thrombocytopenia (<150,000): Consider ITP, TTP, HIT, DIC, medications
- Thrombocytosis (>400,000): Reactive vs primary myeloproliferative disorder`,
      keyTerms: [
        { term: "RDW", definition: "Red cell Distribution Width - measures variation in red cell size; elevated in nutritional deficiencies" },
        { term: "left shift", definition: "Increase in immature neutrophils (bands) indicating acute bacterial infection or inflammation" },
        { term: "pancytopenia", definition: "Reduction in all three cell lines (RBCs, WBCs, platelets)" },
        { term: "leukocytosis", definition: "Elevated white blood cell count above normal range" },
      ],
      clinicalNotes: "Always interpret CBC results in clinical context. A normal CBC does not rule out significant pathology, and abnormal values may have multiple explanations.",
    },
    4: {
      level: 4,
      summary: "Advanced CBC interpretation integrates morphologic analysis, automated parameters, and pattern recognition to differentiate reactive conditions from primary hematologic disorders.",
      explanation: `## Advanced CBC Interpretation

### Morphologic Clues on Peripheral Smear

**Red Cell Morphology:**
| Finding | Significance |
|---------|--------------|
| Hypochromia | Iron deficiency, thalassemia |
| Target cells | Liver disease, hemoglobinopathies, post-splenectomy |
| Spherocytes | Hereditary spherocytosis, autoimmune hemolysis |
| Schistocytes | MAHA (TTP, HUS, DIC, mechanical valves) |
| Tear drops | Myelofibrosis, marrow infiltration |
| Rouleaux | Multiple myeloma, inflammation |

**White Cell Morphology:**
- **Toxic granulation, Dohle bodies, cytoplasmic vacuoles**: Severe infection
- **Hypersegmented neutrophils**: Megaloblastic anemia
- **Atypical lymphocytes**: Viral infections (EBV, CMV)
- **Blasts**: Acute leukemia (medical emergency)

### Advanced Automated Parameters

**Reticulocyte Analysis:**
- Immature Reticulocyte Fraction (IRF): Early marrow response indicator
- Reticulocyte Hemoglobin (CHr): Iron availability for erythropoiesis

**Platelet Parameters:**
- Immature Platelet Fraction (IPF): Elevated in peripheral destruction, low in production failure

### Pattern Recognition

**Hemolysis Pattern:**
- Anemia + elevated reticulocytes + elevated LDH + low haptoglobin + elevated indirect bilirubin

**Microangiopathic Hemolytic Anemia (MAHA):**
- Schistocytes + thrombocytopenia + elevated LDH - Think TTP/HUS, DIC, malignant HTN

**Bone Marrow Failure:**
- Pancytopenia + low reticulocytes + normal morphology - Consider aplastic anemia, MDS

### Drug-Induced Changes
| Drug Class | CBC Effect |
|------------|------------|
| Chemotherapy | Pancytopenia |
| NSAIDs | Neutropenia, rarely aplastic anemia |
| Heparin | Thrombocytopenia (HIT) |
| Valproic acid | Thrombocytopenia |
| Clozapine | Agranulocytosis |`,
      keyTerms: [
        { term: "schistocytes", definition: "Fragmented red cells indicating mechanical destruction; seen in MAHA" },
        { term: "MAHA", definition: "Microangiopathic Hemolytic Anemia - mechanical RBC destruction in small vessels" },
        { term: "reticulocyte production index", definition: "Corrected reticulocyte count adjusting for anemia and maturation time" },
        { term: "immature platelet fraction", definition: "Percentage of young platelets reflecting thrombopoiesis" },
      ],
      clinicalNotes: "Peripheral smear review is essential when automated results are flagged or clinical picture is unclear. Always correlate with patient history and examination.",
    },
    5: {
      level: 5,
      summary: "Expert CBC interpretation encompasses molecular diagnostics integration, recognition of pre-malignant states, precision medicine applications, and evidence-based transfusion thresholds.",
      explanation: `## Expert-Level CBC Interpretation

### Integration with Molecular Diagnostics

**When to Order Molecular Testing:**
- Persistent unexplained cytopenias: Consider MDS panel (SF3B1, TET2, DNMT3A)
- Thrombocytosis >450K: JAK2, CALR, MPL mutations
- Lymphocytosis >5K persistent: CLL panel with FISH for del(17p), del(11q)
- Unexplained polycythemia: JAK2 V617F, then exon 12

**Clonal Hematopoiesis of Indeterminate Potential (CHIP):**
- Age-related somatic mutations without cytopenias or dysplasia
- Common mutations: DNMT3A, TET2, ASXL1
- Associated increased cardiovascular risk and MDS/AML progression

### Recognition of Pre-Malignant States

**Myelodysplastic Syndrome Clues:**
- Macrocytic anemia with low reticulocytes
- Cytopenias disproportionate to age
- Dysplastic changes on smear (hypogranular PMNs, pseudo-Pelger-Huet)
- Refractory to hematinics

**Monoclonal B-cell Lymphocytosis (MBL):**
- CLL phenotype (CD5+, CD19+, CD23+) with <5,000 clonal B-cells/mcL
- 1-2% annual progression to CLL requiring treatment

### Precision Medicine Applications

**Pharmacogenomics Impact on CBC:**
- TPMT deficiency: Severe myelosuppression with thiopurines
- NUDT15 variants: Azathioprine toxicity in Asian populations
- UGT1A1 polymorphisms: Irinotecan-induced neutropenia

### Evidence-Based Transfusion Medicine

**Red Cell Transfusion Thresholds:**
| Setting | Hgb Threshold | Evidence |
|---------|---------------|----------|
| Stable ICU/medical | 7 g/dL | TRICC, TRACS trials |
| Cardiac surgery | 7.5-8 g/dL | TITRe2 trial |
| ACS | 8-10 g/dL | MINT trial ongoing |
| Symptomatic anemia | Individualized | Clinical judgment |

**Platelet Transfusion Thresholds:**
| Setting | Threshold |
|---------|-----------|
| Prophylaxis (stable) | 10,000/mcL |
| Procedures, minor bleeding | 50,000/mcL |
| CNS surgery, major bleeding | 100,000/mcL |
| TTP, HIT | Avoid unless life-threatening bleeding |

### Quality Metrics and Limitations

**Preanalytic Variables:**
- EDTA-induced pseudothrombocytopenia (0.1% of samples)
- Cold agglutinin-induced spurious macrocytosis
- Lipemia, icterus affecting hemoglobin measurement

**Instrument Limitations:**
- Giant platelets counted as RBCs
- Nucleated RBCs counted as WBCs
- Platelet clumps causing false thrombocytopenia`,
      keyTerms: [
        { term: "CHIP", definition: "Clonal Hematopoiesis of Indeterminate Potential - age-related blood mutations without disease" },
        { term: "MBL", definition: "Monoclonal B-cell Lymphocytosis - precursor state to CLL with low clone burden" },
        { term: "restrictive transfusion strategy", definition: "Evidence-based approach using lower hemoglobin thresholds for transfusion" },
        { term: "pseudothrombocytopenia", definition: "Falsely low platelet count due to EDTA-induced clumping in vitro" },
      ],
      clinicalNotes: "Expert interpretation requires integration of clinical context, laboratory quality indicators, and evolving molecular diagnostics. Shared decision-making for transfusion considers patient values, symptoms, and trajectory rather than numbers alone.",
    },
  },

  media: [],
  citations: [
    {
      id: "williams-hematology-cbc",
      type: "textbook",
      title: "Williams Hematology",
      authors: ["Kaushansky K", "Lichtman MA", "Prchal JT"],
      source: "McGraw-Hill Education",
      chapter: "Examination of Blood Cells",
    },
  ],
  crossReferences: [
    { targetId: "lab-wbc", targetType: "concept", relationship: "child" },
    { targetId: "lab-hemoglobin", targetType: "concept", relationship: "child" },
    { targetId: "lab-platelet", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["hematologic"],
    topics: ["laboratory", "hematology", "diagnosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics", "surgery"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
