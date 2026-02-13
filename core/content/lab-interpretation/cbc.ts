/**
 * Complete Blood Count (CBC) - Laboratory Interpretation Content
 *
 * Comprehensive educational content for CBC interpretation including:
 * - White Blood Cell Count (WBC) and differential
 * - Red Blood Cell Count (RBC) and indices
 * - Hemoglobin (Hgb) and Hematocrit (Hct)
 * - Platelet Count
 * - Mean Corpuscular Volume (MCV), MCH, MCHC, RDW
 */

import { EducationalContent } from '../types';
import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// WHITE BLOOD CELL COUNT (WBC)
// =============================================================================

export const wbcInterpretation: LabInterpretationContent = {
  id: 'lab-wbc',
  type: 'concept',
  name: 'White Blood Cell Count (WBC)',
  alternateNames: ['Leukocyte Count', 'WCC', 'White Count'],

  labMetadata: {
    loincCode: '6690-2',
    testName: 'White Blood Cell Count',
    commonAbbreviations: ['WBC', 'WCC'],
    category: 'hematology',
    panel: 'CBC',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 4.5,
      high: 11.0,
      unit: 'x10^9/L (thousand/uL)',
    },
    variations: [
      {
        low: 5.0,
        high: 19.5,
        unit: 'x10^9/L',
        demographic: { ageGroup: 'pediatric' },
        notes: 'Newborns have higher counts; decreases with age',
      },
      {
        low: 3.5,
        high: 10.5,
        unit: 'x10^9/L',
        demographic: { ageGroup: 'geriatric' },
        notes: 'Slightly lower baseline in elderly',
      },
    ],
  },

  criticalValues: {
    low: 2.0,
    high: 30.0,
    unit: 'x10^9/L',
    urgency: 'urgent',
    action: 'Notify physician immediately; assess for infection risk (low) or underlying malignancy/infection (high)',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Decreased Production',
          causes: [
            'Bone marrow suppression (chemotherapy, radiation)',
            'Aplastic anemia',
            'Myelodysplastic syndrome',
            'Vitamin B12/folate deficiency',
            'Bone marrow infiltration (leukemia, lymphoma, metastases)',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Destruction',
          causes: [
            'Autoimmune neutropenia',
            'Drug-induced (antibiotics, anticonvulsants, NSAIDs)',
            'Hypersplenism',
            'Felty syndrome',
          ],
          commonality: 'common',
        },
        {
          category: 'Infections',
          causes: [
            'Overwhelming bacterial sepsis',
            'Viral infections (HIV, hepatitis, EBV)',
            'Typhoid fever',
            'Tuberculosis (miliary)',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Fever suggests infection risk',
        'Petechiae/bruising may indicate concurrent thrombocytopenia',
        'Fatigue may indicate anemia (pancytopenia)',
      ],
      workupSuggestions: [
        'Review medication list',
        'Peripheral blood smear',
        'Reticulocyte count',
        'Vitamin B12 and folate levels',
        'Consider bone marrow biopsy if persistent',
      ],
      clinicalPearls: [
        'Absolute neutrophil count (ANC) < 500 = severe neutropenia with high infection risk',
        'African Americans may have lower baseline WBC (benign ethnic neutropenia)',
        'Cyclic neutropenia occurs every 21 days',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Infection/Inflammation',
          causes: [
            'Bacterial infections (most common)',
            'Abscess formation',
            'Inflammatory conditions (rheumatoid arthritis, IBD)',
            'Tissue necrosis (MI, burns, trauma)',
          ],
          commonality: 'common',
        },
        {
          category: 'Physiologic/Reactive',
          causes: [
            'Stress response (exercise, anxiety, pain)',
            'Corticosteroid use',
            'Smoking',
            'Pregnancy',
            'Post-splenectomy',
          ],
          commonality: 'common',
        },
        {
          category: 'Hematologic Malignancy',
          causes: [
            'Chronic myeloid leukemia (CML)',
            'Acute leukemias',
            'Myeloproliferative neoplasms',
            'Lymphoma with bone marrow involvement',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Left shift (bands, metamyelocytes) suggests acute infection',
        'Splenomegaly may indicate myeloproliferative disorder',
        'Lymphadenopathy suggests lymphoproliferative process',
      ],
      workupSuggestions: [
        'Assess for signs of infection',
        'Peripheral blood smear',
        'Review differential',
        'If very high (>50), consider flow cytometry and BCR-ABL testing',
      ],
      clinicalPearls: [
        'Leukemoid reaction (WBC >50) can mimic leukemia; look for toxic granulation, Dohle bodies',
        'Absence of basophilia argues against CML',
        'Steroids cause demargination within hours',
      ],
    },
  },

  specimen: {
    specimenType: 'whole blood',
    tubeType: 'Lavender top (EDTA)',
    volume: '3 mL',
    fastingRequired: false,
    specialHandling: ['Mix well by inversion', 'Do not refrigerate'],
    stability: {
      roomTemp: '24 hours',
      refrigerated: '48 hours',
    },
    interferences: [
      'Clotted specimen invalidates results',
      'Platelet clumps may be counted as WBCs',
      'Nucleated RBCs may be counted as WBCs',
    ],
  },

  methodology: {
    primaryMethod: 'Automated hematology analyzer (impedance/light scatter)',
    alternativeMethods: ['Manual hemocytometer count'],
    pointOfCare: true,
    turnaroundTime: '1-4 hours',
    limitations: ['Cannot differentiate reactive from malignant causes'],
  },

  relatedLabs: ['lab-neutrophils', 'lab-lymphocytes', 'lab-monocytes', 'lab-eosinophils', 'lab-basophils'],

  organAssociations: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'Production site' },
    { organId: 'spleen', organName: 'Spleen', relationship: 'Storage and destruction' },
    { organId: 'lymph-nodes', organName: 'Lymph Nodes', relationship: 'Maturation and activation' },
    { organId: 'thymus', organName: 'Thymus', relationship: 'T-cell maturation' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'White blood cells are your body\'s soldiers that fight infections and diseases.',
      explanation: `White blood cells (WBCs) are like tiny soldiers in your blood that protect you from germs. When you get sick, your body makes more of these soldiers to fight off the infection.

A normal amount of white blood cells means your immune system is working well. Too few white blood cells (low count) means your body might have trouble fighting off germs, making you more likely to get sick. Too many white blood cells (high count) usually means your body is fighting something - maybe an infection, or sometimes it can mean something is wrong with how your blood is made.

Doctors check your white blood cell count to see if you have an infection, if your immune system is healthy, and to help figure out what's making you feel sick.`,
      keyTerms: [
        { term: 'white blood cells', definition: 'Cells in your blood that fight infections and diseases' },
        { term: 'immune system', definition: 'Your body\'s defense system against germs' },
        { term: 'infection', definition: 'When germs get into your body and make you sick' },
      ],
      analogies: [
        'White blood cells are like security guards patrolling your body, looking for invaders (germs) to stop.',
        'Your bone marrow is like a factory that makes these soldier cells.',
      ],
      examples: [
        'When you have a cold, your white blood cell count might go up as your body fights the virus.',
        'After getting a vaccine, your white blood cells learn to recognize and fight specific germs.',
      ],
    },
    2: {
      level: 2,
      summary: 'WBC count measures immune cells in your blood. High counts often indicate infection or inflammation, while low counts suggest impaired immunity.',
      explanation: `The white blood cell count measures the total number of immune cells (leukocytes) circulating in your blood. These cells are your body's primary defense against infections and foreign substances.

**Normal Range**: 4,500-11,000 cells per microliter (4.5-11.0 x10^9/L)

**Types of White Blood Cells (Differential)**:
- **Neutrophils** (55-70%): First responders to bacterial infections
- **Lymphocytes** (20-40%): T-cells and B-cells for specific immunity
- **Monocytes** (2-8%): Become macrophages that "eat" debris and pathogens
- **Eosinophils** (1-4%): Fight parasites and involved in allergies
- **Basophils** (0.5-1%): Involved in allergic and inflammatory responses

**Elevated WBC (Leukocytosis)**:
- Most commonly due to infection (especially bacterial)
- Can occur with stress, exercise, or medication (steroids)
- Very high counts may indicate blood cancer (leukemia)

**Low WBC (Leukopenia)**:
- Can result from viral infections
- May be caused by medications or chemotherapy
- Increases risk of infections`,
      keyTerms: [
        { term: 'leukocytes', definition: 'Scientific name for white blood cells', pronunciation: 'LOO-koh-sites' },
        { term: 'leukocytosis', definition: 'Elevated white blood cell count', pronunciation: 'loo-koh-sy-TOH-sis' },
        { term: 'leukopenia', definition: 'Decreased white blood cell count', pronunciation: 'loo-koh-PEE-nee-ah' },
        { term: 'neutrophils', definition: 'Most common type of WBC; fights bacterial infections', pronunciation: 'NOO-troh-filz' },
      ],
      clinicalNotes: 'A WBC count is part of the routine Complete Blood Count (CBC) and helps diagnose infections, monitor chemotherapy effects, and screen for blood disorders.',
    },
    3: {
      level: 3,
      summary: 'WBC count quantifies circulating leukocytes, with the differential providing insight into specific cell-line responses. Leukocytosis or leukopenia patterns guide differential diagnosis.',
      explanation: `## White Blood Cell Count Interpretation

### Reference Ranges
- Adults: 4.5-11.0 x10^9/L
- Neonates: 9.0-30.0 x10^9/L (physiologic leukocytosis)
- Children: Age-dependent decline toward adult values

### Leukocytosis (WBC > 11.0 x10^9/L)

**Neutrophilic Leukocytosis:**
- Bacterial infections (most common cause)
- Tissue necrosis (MI, burns, surgery)
- Inflammatory conditions (gout, RA flare)
- Medications (corticosteroids, lithium, G-CSF)
- Myeloproliferative neoplasms

**Lymphocytosis:**
- Viral infections (EBV, CMV, hepatitis)
- Chronic lymphocytic leukemia (CLL)
- Pertussis ("whooping cough")
- Post-splenectomy

**Monocytosis:**
- Chronic infections (TB, endocarditis)
- Autoimmune diseases
- Myelodysplastic syndromes
- Recovery phase from neutropenia

**Eosinophilia:**
- Allergic conditions (asthma, eczema)
- Parasitic infections
- Drug reactions
- Hypereosinophilic syndromes

### Leukopenia (WBC < 4.5 x10^9/L)

**Neutropenia (ANC < 1.5 x10^9/L):**
- Drug-induced (chemotherapy, antibiotics, anticonvulsants)
- Bone marrow failure (aplastic anemia, MDS)
- Overwhelming sepsis ("consumptive")
- Autoimmune neutropenia

**Lymphopenia:**
- HIV infection
- Corticosteroid therapy
- Autoimmune diseases (SLE)
- Radiation/chemotherapy

### Critical Values
- WBC < 2.0 x10^9/L: Risk of opportunistic infections
- ANC < 0.5 x10^9/L: Severe neutropenia, infection precautions required
- WBC > 30.0 x10^9/L: Consider leukemia vs leukemoid reaction`,
      keyTerms: [
        { term: 'absolute neutrophil count (ANC)', definition: 'Total neutrophil count = WBC x (% neutrophils + % bands); key metric for infection risk' },
        { term: 'left shift', definition: 'Increased immature neutrophils (bands, metamyelocytes) indicating acute response' },
        { term: 'leukemoid reaction', definition: 'WBC > 50 x10^9/L with reactive (non-malignant) cause; mimics leukemia' },
        { term: 'toxic granulation', definition: 'Dark cytoplasmic granules in neutrophils seen in severe infection' },
      ],
      clinicalNotes: 'Always interpret WBC in context of the differential. A normal WBC with abnormal differential (e.g., neutropenia with lymphocytosis) still requires investigation.',
    },
    4: {
      level: 4,
      summary: 'WBC analysis requires integration of absolute counts, differential percentages, morphologic findings, and clinical context to distinguish reactive conditions from primary hematologic disorders.',
      explanation: `## Advanced WBC Interpretation

### Kinetics of WBC Response

**Neutrophil Pools:**
1. Bone marrow reserve (mature neutrophils awaiting release)
2. Circulating pool (measured by WBC)
3. Marginated pool (attached to vessel walls, not measured)
4. Tissue pool (migrated into tissues)

**Response Timeline:**
- Acute stress: Demargination → rapid increase within hours
- Infection: Bone marrow release → increase in 6-12 hours
- Left shift: Indicates demand exceeding mature reserve
- Recovery: Return of segmented neutrophils, resolution of left shift

### Distinguishing Reactive from Malignant

| Feature | Reactive | Malignant |
|---------|----------|-----------|
| WBC trend | Peaks and resolves | Progressive increase |
| Toxic changes | Present | Usually absent |
| Basophilia | Rare | Common in CML |
| LAP score | Elevated | Low in CML |
| Blasts | None or rare | Variable (may be present) |

### Specific Patterns

**Leukoerythroblastic Reaction:**
- Nucleated RBCs + immature WBCs in peripheral blood
- Indicates bone marrow infiltration or stress
- Causes: Myelofibrosis, metastatic cancer, severe infection, hemolysis

**Atypical Lymphocytes:**
- Large lymphocytes with abundant cytoplasm
- Characteristic of EBV/CMV infection
- Can be confused with blasts; immunophenotyping may be needed

**Pseudo-Pelger-Huet Anomaly:**
- Bilobed neutrophils (acquired)
- Seen in MDS, severe infection, drug effect
- Distinguish from inherited Pelger-Huet anomaly

### Drug-Induced Changes

| Drug | Effect | Mechanism |
|------|--------|-----------|
| Corticosteroids | Leukocytosis, neutrophilia | Demargination, delayed apoptosis |
| G-CSF | Marked neutrophilia | Stimulates production |
| Chemotherapy | Leukopenia | Myelosuppression |
| Clozapine | Agranulocytosis | Idiosyncratic reaction |
| Beta-lactams | Neutropenia | Immune-mediated |

### Flow Cytometry Indications
- WBC > 30 x10^9/L without clear reactive cause
- Persistent lymphocytosis (>3 months)
- Circulating blasts identified
- Suspected chronic lymphocytic leukemia`,
      keyTerms: [
        { term: 'demargination', definition: 'Release of neutrophils from vessel wall pool into circulation; occurs within minutes of stress/steroids' },
        { term: 'leukocyte alkaline phosphatase (LAP)', definition: 'Enzyme elevated in reactive conditions, low in CML; helps distinguish leukemoid reaction' },
        { term: 'leukoerythroblastic reaction', definition: 'Presence of immature RBCs and WBCs indicating marrow stress or infiltration' },
        { term: 'agranulocytosis', definition: 'Severe granulocyte deficiency (ANC < 0.1); medical emergency' },
      ],
      clinicalNotes: 'In suspected hematologic malignancy, peripheral smear review is essential before bone marrow biopsy. Flow cytometry can provide rapid diagnosis and subclassification.',
    },
    5: {
      level: 5,
      summary: 'Expert WBC interpretation integrates morphology, flow cytometry, molecular markers, and clinical presentation for precise diagnosis and risk stratification in hematologic conditions.',
      explanation: `## Expert-Level WBC Analysis

### Morphologic Clues to Diagnosis

**Blast Identification:**
- High N:C ratio, fine chromatin, nucleoli
- Auer rods: Pathognomonic for AML (especially M2, M3)
- Pseudo-Auer rods: Seen in MDS

**Specific Cell Morphologies:**
- Hairy cells (CLL projections): Hairy cell leukemia
- Smudge cells: Fragile CLL cells
- Sezary cells: Cerebriform nuclei in cutaneous T-cell lymphoma
- Flower cells: HTLV-1 associated adult T-cell leukemia/lymphoma

### Flow Cytometry Interpretation

**B-cell lymphoproliferative disorders:**
- CLL: CD5+, CD19+, CD23+, weak CD20/CD79b, kappa or lambda light chain restriction
- Mantle cell lymphoma: CD5+, CD19+, CD23-, cyclin D1+
- Marginal zone lymphoma: CD5-, CD19+, CD23-

**T-cell disorders:**
- T-LGL: CD3+, CD8+, CD57+
- T-PLL: CD4+, CD52+, TCL1+

### Molecular Diagnostics

| Test | Disease | Significance |
|------|---------|--------------|
| BCR-ABL1 | CML | Diagnostic; treatment response |
| JAK2 V617F | MPNs | Diagnostic for PV, ET, MF |
| CALR mutation | ET, MF | Alternative to JAK2 |
| NPM1/FLT3 | AML | Prognosis; targeted therapy eligibility |
| TP53 | CLL, MDS | Poor prognosis |

### Risk Stratification Examples

**AML (ELN 2022):**
- Favorable: t(8;21), inv(16), NPM1 without FLT3-ITD
- Intermediate: Normal karyotype with certain mutations
- Adverse: Complex karyotype, TP53, ASXL1, RUNX1

**CLL (CLL-IPI):**
- Integrates: TP53, IGHV mutation status, beta-2 microglobulin, clinical stage, age

### Emerging Concepts

**Clonal Hematopoiesis of Indeterminate Potential (CHIP):**
- Age-related somatic mutations in blood cells
- No overt hematologic malignancy
- Increased risk of MDS/AML and cardiovascular disease
- Common mutations: DNMT3A, TET2, ASXL1

**Minimal Residual Disease (MRD):**
- Flow cytometry: Sensitivity 10^-4
- PCR-based: Sensitivity 10^-5 to 10^-6
- Prognostic in ALL, AML, CLL, myeloma

### Clinical Pearls for Complex Cases

1. **Persistent unexplained neutrophilia:** Rule out occult malignancy, chronic infection; check JAK2 if considering myeloproliferative neoplasm

2. **Marked eosinophilia (>1.5 x10^9/L):** Evaluate for PDGFRA/PDGFRB rearrangement; these respond dramatically to imatinib

3. **Isolated monocytosis (>1.0 x10^9/L, >3 months):** Consider CMML; requires bone marrow and cytogenetics

4. **Blast crisis:** WBC may rise precipitously; distinguish lymphoid vs myeloid transformation (different therapy implications)

5. **Post-transplant leukocytosis:** Distinguish engraftment, infection, GVHD, relapse`,
      keyTerms: [
        { term: 'clonal hematopoiesis of indeterminate potential (CHIP)', definition: 'Presence of somatic mutations in blood cells without meeting criteria for hematologic malignancy; associated with increased MDS/AML and cardiovascular risk' },
        { term: 'minimal residual disease (MRD)', definition: 'Detection of residual malignant cells below conventional microscopy threshold; important prognostic marker' },
        { term: 'immunophenotyping', definition: 'Flow cytometry analysis of cell surface and intracellular markers for diagnosis and classification' },
        { term: 'Auer rods', definition: 'Needle-like azurophilic inclusions pathognomonic for AML' },
      ],
      clinicalNotes: 'In the era of targeted therapy, precise molecular characterization is essential. BCR-ABL+ CML, PDGFR-rearranged eosinophilia, and FLT3+ AML all have specific targeted treatments. Always consider molecular testing in unexplained cytopenias or cytoses.',
    },
  },

  media: [],
  citations: [
    {
      id: 'williams-hematology',
      type: 'textbook',
      title: 'Williams Hematology',
      authors: ['Kaushansky, K.', 'Lichtman, M.A.'],
      source: 'McGraw-Hill',
      chapter: 'Neutrophilic Leukocytosis and Leukopenia',
    },
  ],
  crossReferences: [
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
  ],
  tags: {
    systems: ['hematologic', 'immune'],
    topics: ['laboratory', 'hematology', 'diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// HEMOGLOBIN
// =============================================================================

export const hemoglobinInterpretation: LabInterpretationContent = {
  id: 'lab-hemoglobin',
  type: 'concept',
  name: 'Hemoglobin (Hgb)',
  alternateNames: ['Hgb', 'Hb', 'Hemoglobin Concentration'],

  labMetadata: {
    loincCode: '718-7',
    testName: 'Hemoglobin',
    commonAbbreviations: ['Hgb', 'Hb'],
    category: 'hematology',
    panel: 'CBC',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 12.0,
      high: 16.0,
      unit: 'g/dL',
      demographic: { sex: 'female' },
    },
    variations: [
      {
        low: 14.0,
        high: 18.0,
        unit: 'g/dL',
        demographic: { sex: 'male' },
      },
      {
        low: 11.0,
        high: 14.0,
        unit: 'g/dL',
        demographic: { trimester: 2 },
        notes: 'Physiologic anemia of pregnancy',
      },
      {
        low: 14.0,
        high: 24.0,
        unit: 'g/dL',
        demographic: { ageGroup: 'pediatric' },
        notes: 'Newborn (cord blood); decreases over first weeks',
      },
    ],
  },

  criticalValues: {
    low: 7.0,
    high: 20.0,
    unit: 'g/dL',
    urgency: 'immediate',
    action: 'Hgb < 7: Consider transfusion; Hgb > 20: Evaluate for polycythemia, hydration status',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Decreased Production',
          causes: [
            'Iron deficiency anemia (most common worldwide)',
            'Vitamin B12 deficiency',
            'Folate deficiency',
            'Anemia of chronic disease/inflammation',
            'Bone marrow failure (aplastic anemia, MDS)',
            'Chronic kidney disease (decreased EPO)',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Destruction (Hemolysis)',
          causes: [
            'Autoimmune hemolytic anemia',
            'Hereditary spherocytosis',
            'Sickle cell disease',
            'G6PD deficiency',
            'Mechanical (prosthetic valve, MAHA)',
            'PNH',
          ],
          commonality: 'common',
        },
        {
          category: 'Blood Loss',
          causes: [
            'GI bleeding (occult or overt)',
            'Menstrual blood loss',
            'Surgical/trauma blood loss',
            'Frequent blood donations/phlebotomy',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Fatigue, dyspnea, pallor',
        'Tachycardia, flow murmur',
        'Koilonychia, glossitis (iron deficiency)',
        'Neurologic symptoms (B12 deficiency)',
        'Jaundice (hemolysis)',
      ],
      workupSuggestions: [
        'Reticulocyte count',
        'Iron studies (Fe, TIBC, ferritin)',
        'Peripheral blood smear',
        'B12 and folate levels',
        'Hemolysis labs (LDH, haptoglobin, bilirubin)',
      ],
      clinicalPearls: [
        'MCV helps classify: Microcytic (<80), Normocytic (80-100), Macrocytic (>100)',
        'Reticulocyte index >2% suggests adequate marrow response (blood loss/hemolysis)',
        'In CKD, EPO deficiency typically causes normocytic anemia',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Primary (Polycythemia Vera)',
          causes: [
            'Polycythemia vera (JAK2 V617F mutation)',
            'Other myeloproliferative neoplasms',
          ],
          commonality: 'uncommon',
        },
        {
          category: 'Secondary (Appropriate EPO Response)',
          causes: [
            'Chronic hypoxia (COPD, sleep apnea, high altitude)',
            'Cyanotic heart disease',
            'Chronic carbon monoxide exposure',
          ],
          commonality: 'common',
        },
        {
          category: 'Secondary (Inappropriate EPO)',
          causes: [
            'EPO-secreting tumors (renal cell, hepatoma)',
            'Exogenous EPO/testosterone use',
          ],
          commonality: 'uncommon',
        },
        {
          category: 'Relative (Decreased Plasma Volume)',
          causes: [
            'Dehydration',
            'Diuretic use',
            'Burns',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Plethora (facial rubor)',
        'Hyperviscosity symptoms (headache, visual changes)',
        'Splenomegaly (polycythemia vera)',
        'Thrombotic events',
      ],
      workupSuggestions: [
        'Assess volume status',
        'EPO level',
        'JAK2 mutation testing',
        'Pulse oximetry/ABG',
        'Consider bone marrow biopsy if PV suspected',
      ],
      clinicalPearls: [
        'Rule out dehydration before extensive workup',
        'Low EPO + elevated Hgb = consider polycythemia vera',
        'High EPO + elevated Hgb = secondary polycythemia',
      ],
    },
  },

  specimen: {
    specimenType: 'whole blood',
    tubeType: 'Lavender top (EDTA)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: [
      'Lipemia may falsely elevate',
      'Very high WBC may falsely elevate',
      'Carboxyhemoglobin not distinguished from oxyhemoglobin by standard methods',
    ],
  },

  relatedLabs: ['lab-hematocrit', 'lab-rbc', 'lab-mcv', 'lab-reticulocyte'],

  organAssociations: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'Production site' },
    { organId: 'kidney', organName: 'Kidney', relationship: 'EPO production' },
    { organId: 'spleen', organName: 'Spleen', relationship: 'RBC destruction' },
    { organId: 'liver', organName: 'Liver', relationship: 'Iron storage, hepcidin production' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Hemoglobin is the protein in red blood cells that carries oxygen throughout your body.',
      explanation: `Hemoglobin is like a tiny delivery truck inside your red blood cells. It picks up oxygen from your lungs and delivers it to every part of your body - your brain, muscles, heart, and everywhere else.

When you have enough hemoglobin, your body gets all the oxygen it needs, and you feel energetic. If your hemoglobin is low (called anemia), your body doesn't get enough oxygen, so you might feel tired, weak, or short of breath.

Doctors measure hemoglobin to check if you have anemia. Common reasons for low hemoglobin include not eating enough iron-rich foods (like meat and spinach), losing blood (like during heavy periods), or certain illnesses.`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'A protein in red blood cells that carries oxygen' },
        { term: 'anemia', definition: 'When your blood doesn\'t have enough hemoglobin to carry oxygen well' },
        { term: 'red blood cells', definition: 'Cells in your blood that contain hemoglobin' },
      ],
      analogies: [
        'Hemoglobin is like a delivery truck that picks up oxygen packages at the lungs and delivers them throughout your body.',
        'Red blood cells are like tiny boats, and hemoglobin is the cargo they carry.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemoglobin concentration indicates oxygen-carrying capacity. Low levels (anemia) cause fatigue and shortness of breath; high levels may indicate dehydration or blood disorders.',
      explanation: `Hemoglobin (Hgb) is the iron-containing protein in red blood cells responsible for oxygen transport. Each hemoglobin molecule can bind 4 oxygen molecules.

**Normal Ranges:**
- Men: 14-18 g/dL
- Women: 12-16 g/dL
- Pregnancy: 11-14 g/dL (due to plasma expansion)

**Low Hemoglobin (Anemia) Symptoms:**
- Fatigue and weakness
- Pale skin
- Shortness of breath with activity
- Dizziness
- Cold hands and feet

**Common Causes of Low Hemoglobin:**
- Iron deficiency (most common) - from poor diet or blood loss
- Vitamin deficiency (B12, folate)
- Chronic diseases (kidney disease, cancer)
- Blood disorders (sickle cell, thalassemia)

**High Hemoglobin Causes:**
- Living at high altitude (normal adaptation)
- Dehydration (blood is more concentrated)
- Lung disease (body compensates for low oxygen)
- Polycythemia (blood disorder with too many red cells)`,
      keyTerms: [
        { term: 'anemia', definition: 'Condition where hemoglobin is below normal, reducing oxygen delivery', pronunciation: 'uh-NEE-mee-uh' },
        { term: 'polycythemia', definition: 'Condition with abnormally high red blood cells/hemoglobin', pronunciation: 'pol-ee-sy-THEE-mee-uh' },
        { term: 'iron deficiency', definition: 'Most common cause of anemia; iron is needed to make hemoglobin' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hemoglobin quantification is essential for anemia diagnosis and classification. Interpretation requires correlation with RBC indices (MCV, MCHC) and reticulocyte count.',
      explanation: `## Hemoglobin Analysis

### Reference Ranges
| Population | Hemoglobin (g/dL) |
|------------|-------------------|
| Adult male | 14.0-18.0 |
| Adult female | 12.0-16.0 |
| Pregnancy | 11.0-14.0 |
| Newborn | 14.0-24.0 |

### Anemia Classification by MCV

**Microcytic (MCV < 80 fL):**
- Iron deficiency
- Thalassemia trait
- Anemia of chronic disease (some cases)
- Sideroblastic anemia
- Lead poisoning

**Normocytic (MCV 80-100 fL):**
- Acute blood loss
- Hemolysis
- Anemia of chronic disease
- Chronic kidney disease
- Mixed deficiency

**Macrocytic (MCV > 100 fL):**
- Vitamin B12 deficiency
- Folate deficiency
- Myelodysplastic syndrome
- Liver disease
- Hypothyroidism
- Medications (methotrexate, hydroxyurea)

### Reticulocyte Response

The reticulocyte count indicates bone marrow response:
- **Elevated (>2% or RI >2):** Appropriate marrow response
  - Blood loss
  - Hemolysis
  - Recovery from anemia
- **Low/Normal (<2%):** Inadequate marrow response
  - Production defect
  - Bone marrow suppression

### Hemoglobin Electrophoresis Indications
- Microcytic anemia with normal iron studies
- Family history of hemoglobinopathy
- Target cells on smear
- Ethnic background with high carrier rate`,
      keyTerms: [
        { term: 'MCV (mean corpuscular volume)', definition: 'Average RBC size; key for classifying anemia' },
        { term: 'reticulocyte', definition: 'Young RBC; count reflects bone marrow production', pronunciation: 'reh-TIK-yoo-loh-site' },
        { term: 'hemoglobin electrophoresis', definition: 'Test separating hemoglobin variants; diagnoses sickle cell, thalassemia' },
      ],
      clinicalNotes: 'In iron deficiency, expect low ferritin, low iron, high TIBC. In anemia of chronic disease, expect low iron, low TIBC, normal/high ferritin.',
    },
    4: {
      level: 4,
      summary: 'Advanced hemoglobin analysis integrates quantitative indices, qualitative morphology, and specialized testing to determine anemia etiology and guide targeted therapy.',
      explanation: `## Advanced Hemoglobin Interpretation

### Hemoglobin Structure and Variants

**Normal Adult Hemoglobin Composition:**
- HbA (α2β2): 96-98%
- HbA2 (α2δ2): 2-3%
- HbF (α2γ2): <1%

**Clinically Significant Variants:**
| Variant | Mutation | Clinical Significance |
|---------|----------|----------------------|
| HbS | β6 Glu→Val | Sickle cell disease/trait |
| HbC | β6 Glu→Lys | Mild hemolysis (homozygous) |
| HbE | β26 Glu→Lys | Common in SE Asia; thalassemia-like |

### Iron Studies Interpretation

| Condition | Iron | TIBC | Ferritin | % Saturation |
|-----------|------|------|----------|--------------|
| Iron deficiency | ↓ | ↑ | ↓ | ↓ |
| Anemia of chronic disease | ↓ | ↓/N | N/↑ | ↓/N |
| Sideroblastic anemia | ↑ | N | ↑ | ↑ |
| Hemochromatosis | ↑ | ↓ | ↑ | ↑ |

### Hemolysis Workup

**Intravascular Hemolysis Markers:**
- Elevated LDH (released from RBCs)
- Decreased haptoglobin (binds free Hgb)
- Hemoglobinemia/hemoglobinuria
- Elevated indirect bilirubin

**Extravascular Hemolysis:**
- LDH and bilirubin elevated
- Haptoglobin decreased (less than intravascular)
- No hemoglobinuria

**Coombs Testing:**
- Direct Coombs (DAT): Detects antibody on RBCs
- Indirect Coombs: Detects antibody in serum

### Transfusion Thresholds

| Clinical Setting | Hgb Threshold |
|------------------|---------------|
| Asymptomatic, hemodynamically stable | 7 g/dL |
| Cardiac disease, active ischemia | 8-10 g/dL |
| Symptomatic anemia | Individualized |
| Critical illness | 7 g/dL (typically) |

### EPO Physiology

**Normal Response:**
Hypoxia → ↓ renal O2 → HIF stabilization → ↑ EPO → ↑ RBC production

**Conditions with Impaired EPO:**
- Chronic kidney disease (decreased production)
- Inflammatory states (functional iron deficiency)

**Conditions with Elevated EPO:**
- Secondary polycythemia (appropriate)
- EPO-secreting tumors (inappropriate)`,
      keyTerms: [
        { term: 'haptoglobin', definition: 'Protein that binds free hemoglobin; depleted in hemolysis' },
        { term: 'direct antiglobulin test (DAT)', definition: 'Detects antibodies or complement on RBC surface; positive in autoimmune hemolysis' },
        { term: 'hypoxia-inducible factor (HIF)', definition: 'Transcription factor stabilized in hypoxia; regulates EPO production' },
        { term: 'percent transferrin saturation', definition: 'Serum iron/TIBC x 100; reflects available transport capacity' },
      ],
      clinicalNotes: 'Ferritin is an acute phase reactant; may be falsely elevated in inflammation despite true iron deficiency. Soluble transferrin receptor (sTfR) is not affected by inflammation.',
    },
    5: {
      level: 5,
      summary: 'Expert hemoglobin analysis encompasses molecular diagnostics, specialized hemoglobin variants, erythropoiesis regulation, and evidence-based transfusion medicine principles.',
      explanation: `## Expert Hemoglobin Analysis

### Molecular Diagnostics in Anemia

**Hereditary Hemolytic Anemias:**
- RBC membrane: Spectrin, ankyrin mutations (spherocytosis, elliptocytosis)
- RBC enzymes: G6PD, pyruvate kinase deficiency
- Hemoglobin: Sickle cell, thalassemias, unstable hemoglobins

**Diagnostic Algorithm for Suspected Thalassemia:**
1. CBC shows microcytic anemia with elevated RBC count
2. Iron studies normal
3. Hemoglobin electrophoresis/HPLC
4. Genetic testing for definitive diagnosis

**Thalassemia Patterns:**
| Type | HbA2 | HbF | Interpretation |
|------|------|-----|----------------|
| β-thal trait | ↑ (3.5-7%) | N/↑ | Classic β-thalassemia |
| β-thal major | ↓ or absent | ↑↑ | Transfusion dependent |
| α-thal trait | N | N | Requires genetic testing |
| HbH disease | N | N | HbH (β4) on electrophoresis |

### Specialized Testing

**Paroxysmal Nocturnal Hemoglobinuria (PNH):**
- Flow cytometry for GPI-anchored proteins (CD55, CD59)
- Clone size quantification
- Associated with aplastic anemia, MDS, thrombosis

**Hereditary Spherocytosis:**
- Osmotic fragility test (increased)
- Eosin-5-maleimide (EMA) binding (decreased)
- Next-gen sequencing for membrane protein mutations

### Erythropoiesis Regulation

**Hepcidin-Ferroportin Axis:**
- Hepcidin (liver peptide) degrades ferroportin
- High hepcidin → decreased iron absorption and release
- Elevated in inflammation (IL-6 driven)
- Deficient in hereditary hemochromatosis

**Therapeutic Implications:**
- Hepcidin mimetics in development for iron overload
- Anti-hepcidin strategies for anemia of inflammation

### Evidence-Based Transfusion

**TRICC Trial (Critical Care):**
- Restrictive (Hgb 7 g/dL trigger) non-inferior to liberal (10 g/dL)
- Potential mortality benefit with restrictive in younger, less ill

**TRACS Trial (Cardiac Surgery):**
- Liberal (Hgb 10 g/dL) no benefit over restrictive (8 g/dL)

**Special Populations:**
- Acute coronary syndrome: Threshold 8-10 g/dL (evidence limited)
- Chronic transfusion-dependent: Maintain Hgb 9-10.5 g/dL pre-transfusion

### Emerging Therapies

**Luspatercept:**
- Activin receptor ligand trap
- Approved for MDS-RS, β-thalassemia
- Reduces transfusion burden

**Gene Therapy:**
- Zynteglo (betibeglogene autotemcel) for β-thalassemia
- Lentiviral vector insertion of functional β-globin gene
- Casgevy (exagamglogene autotemcel) for SCD/β-thalassemia

**HIF-Prolyl Hydroxylase Inhibitors:**
- Stabilize HIF → increase endogenous EPO
- Oral alternative to EPO injections in CKD anemia
- Examples: Roxadustat, daprodustat`,
      keyTerms: [
        { term: 'hepcidin', definition: 'Master regulator of iron metabolism; elevated in inflammation, causing functional iron deficiency' },
        { term: 'GPI-anchored proteins', definition: 'Proteins attached via glycosylphosphatidylinositol anchor; absent in PNH' },
        { term: 'luspatercept', definition: 'Erythroid maturation agent; reduces ineffective erythropoiesis in MDS-RS and β-thalassemia' },
        { term: 'hemoglobin HPLC', definition: 'High-performance liquid chromatography; precise quantification of hemoglobin variants' },
      ],
      clinicalNotes: 'Gene therapy for hemoglobinopathies represents a paradigm shift from lifelong transfusion/chelation to potential cure. Patient selection, long-term follow-up for insertional mutagenesis, and cost-effectiveness remain active areas of study.',
    },
  },

  media: [],
  citations: [
    {
      id: 'hoffbrand-hematology',
      type: 'textbook',
      title: 'Hoffbrand\'s Essential Haematology',
      source: 'Wiley-Blackwell',
    },
  ],
  crossReferences: [
    { targetId: 'lab-hematocrit', targetType: 'structure', relationship: 'related' },
    { targetId: 'lab-mcv', targetType: 'structure', relationship: 'related' },
  ],
  tags: {
    systems: ['hematologic'],
    topics: ['laboratory', 'anemia', 'transfusion'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// PLATELET COUNT
// =============================================================================

export const plateletInterpretation: LabInterpretationContent = {
  id: 'lab-platelet',
  type: 'concept',
  name: 'Platelet Count',
  alternateNames: ['PLT', 'Thrombocyte Count'],

  labMetadata: {
    loincCode: '777-3',
    testName: 'Platelet Count',
    commonAbbreviations: ['PLT', 'Plt'],
    category: 'hematology',
    panel: 'CBC',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 150,
      high: 400,
      unit: 'x10^9/L (thousand/uL)',
    },
  },

  criticalValues: {
    low: 50,
    high: 1000,
    unit: 'x10^9/L',
    urgency: 'urgent',
    action: 'PLT < 50: Bleeding precautions, hold procedures; PLT > 1000: Evaluate for myeloproliferative disorder, rule out pseudothrombocytosis',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Decreased Production',
          causes: [
            'Bone marrow suppression (chemo, radiation)',
            'Bone marrow infiltration (leukemia, metastases)',
            'Aplastic anemia',
            'Myelodysplastic syndrome',
            'Alcohol toxicity',
            'Viral infections (HIV, HCV)',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Destruction - Immune',
          causes: [
            'Immune thrombocytopenia (ITP)',
            'Drug-induced (heparin-induced [HIT], quinine, antibiotics)',
            'Post-transfusion purpura',
            'SLE and other autoimmune diseases',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Destruction - Non-immune',
          causes: [
            'DIC',
            'TTP/HUS',
            'Sepsis',
            'Mechanical (ECMO, LVAD, prosthetic valves)',
          ],
          commonality: 'common',
        },
        {
          category: 'Sequestration',
          causes: [
            'Hypersplenism (cirrhosis, portal hypertension)',
            'Massive transfusion',
          ],
          commonality: 'common',
        },
        {
          category: 'Pseudothrombocytopenia',
          causes: [
            'EDTA-induced platelet clumping',
            'Giant platelets miscounted',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Petechiae, purpura',
        'Mucosal bleeding (epistaxis, gingival)',
        'Easy bruising',
        'Splenomegaly (suggests sequestration or infiltration)',
      ],
      workupSuggestions: [
        'Review peripheral smear (rule out pseudothrombocytopenia, clumps)',
        'Repeat with citrate tube if clumping suspected',
        'Assess for DIC (PT, PTT, fibrinogen, D-dimer)',
        'Consider HIT if on heparin (4T score, PF4 antibody)',
      ],
      clinicalPearls: [
        'PLT < 10: High risk of spontaneous bleeding; consider prophylactic transfusion',
        'PLT < 50: Increased surgical bleeding risk',
        'Always check smear to rule out pseudothrombocytopenia before extensive workup',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Reactive (Secondary)',
          causes: [
            'Acute infection/inflammation',
            'Iron deficiency anemia',
            'Post-surgical/trauma',
            'Chronic inflammatory disease',
            'Post-splenectomy',
            'Malignancy',
          ],
          commonality: 'common',
        },
        {
          category: 'Primary (Clonal)',
          causes: [
            'Essential thrombocythemia',
            'Polycythemia vera',
            'Primary myelofibrosis',
            'CML',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Erythromelalgia (burning pain, redness in extremities)',
        'Thrombotic events (arterial or venous)',
        'Paradoxical bleeding (very high counts)',
        'Splenomegaly (myeloproliferative neoplasm)',
      ],
      workupSuggestions: [
        'Iron studies (iron deficiency is common reactive cause)',
        'Inflammatory markers (CRP, ESR)',
        'If primary suspected: JAK2, CALR, MPL mutation testing',
        'Peripheral smear for morphology',
      ],
      clinicalPearls: [
        'Most thrombocytosis is reactive; primary is diagnosis of exclusion',
        'PLT > 1500: Paradoxically increased bleeding risk (acquired von Willebrand syndrome)',
        'JAK2 positive essential thrombocythemia has higher thrombotic risk',
      ],
    },
  },

  specimen: {
    specimenType: 'whole blood',
    tubeType: 'Lavender top (EDTA)',
    volume: '3 mL',
    fastingRequired: false,
    interferences: [
      'EDTA-induced clumping (pseudothrombocytopenia)',
      'Giant platelets may be undercounted',
      'Platelet satellitism around WBCs',
    ],
  },

  relatedLabs: ['lab-mpv', 'lab-pt', 'lab-ptt', 'lab-fibrinogen'],

  organAssociations: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'Production (megakaryocytes)' },
    { organId: 'spleen', organName: 'Spleen', relationship: 'Sequestration (1/3 of platelets)' },
    { organId: 'liver', organName: 'Liver', relationship: 'Thrombopoietin production' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Platelets are tiny cell fragments that help your blood clot and stop bleeding when you get a cut.',
      explanation: `Platelets are like tiny bandages floating in your blood. When you get a cut, platelets rush to the injured spot and stick together to form a plug that stops the bleeding. They're the first responders when you get hurt!

If you have too few platelets, you might bruise easily or bleed more than usual from small cuts. If you have too many platelets, your blood might become too "sticky" and form clots when it shouldn't.

Doctors check your platelet count to make sure you can stop bleeding properly and to look for certain health problems that affect how your body makes or uses platelets.`,
      keyTerms: [
        { term: 'platelets', definition: 'Tiny cell pieces that help your blood clot and stop bleeding' },
        { term: 'clot', definition: 'A plug made of platelets and other blood parts that stops bleeding' },
        { term: 'bruise', definition: 'A mark on your skin from bleeding under the skin' },
      ],
      analogies: [
        'Platelets are like tiny cork stoppers that plug up holes in your blood vessels.',
        'When you get a cut, platelets act like a construction crew building a wall to stop the bleeding.',
      ],
    },
    2: {
      level: 2,
      summary: 'Platelets (thrombocytes) are essential for blood clotting. Low counts increase bleeding risk; high counts may indicate inflammation or blood disorders.',
      explanation: `Platelets, also called thrombocytes, are cell fragments made in the bone marrow. They circulate in your blood for about 8-10 days before being removed by the spleen.

**Normal Range**: 150,000-400,000 per microliter (150-400 x10^9/L)

**Low Platelet Count (Thrombocytopenia)**:
When platelets are low, you may experience:
- Easy bruising
- Prolonged bleeding from cuts
- Petechiae (tiny red dots on skin)
- Nosebleeds or gum bleeding

Common causes:
- Medications (especially chemotherapy)
- Viral infections
- Immune system attacking platelets (ITP)
- Liver disease with enlarged spleen

**High Platelet Count (Thrombocytosis)**:
Often a response to:
- Infection or inflammation
- Iron deficiency
- Recent surgery or trauma
- Sometimes blood disorders`,
      keyTerms: [
        { term: 'thrombocytopenia', definition: 'Low platelet count, below 150,000/uL', pronunciation: 'throm-boh-sy-toh-PEE-nee-ah' },
        { term: 'thrombocytosis', definition: 'High platelet count, above 400,000/uL', pronunciation: 'throm-boh-sy-TOH-sis' },
        { term: 'petechiae', definition: 'Tiny red/purple spots from bleeding under the skin', pronunciation: 'peh-TEE-kee-ay' },
      ],
    },
    3: {
      level: 3,
      summary: 'Platelet count interpretation requires correlation with clinical context, peripheral smear review, and assessment of underlying etiology to guide management.',
      explanation: `## Platelet Count Analysis

### Thrombocytopenia Classification

**By Severity:**
- Mild: 100-150 x10^9/L
- Moderate: 50-100 x10^9/L
- Severe: <50 x10^9/L
- Critical: <10 x10^9/L

**By Mechanism:**
1. **Decreased Production:**
   - Marrow failure/suppression
   - Marrow infiltration
   - Nutritional deficiency

2. **Increased Destruction:**
   - Immune (ITP, drug-induced, HIT)
   - Non-immune (DIC, TTP/HUS, sepsis)

3. **Sequestration:**
   - Hypersplenism

4. **Dilutional:**
   - Massive transfusion

### Critical Diagnoses Not to Miss

**Heparin-Induced Thrombocytopenia (HIT):**
- Typically 50% drop from baseline, 5-10 days after heparin
- Thrombosis despite low platelets!
- 4T score for pretest probability
- PF4/heparin antibody testing

**Thrombotic Thrombocytopenic Purpura (TTP):**
- Pentad: Thrombocytopenia, microangiopathic hemolysis, neurologic symptoms, renal insufficiency, fever
- ADAMTS13 activity <10%
- Emergency plasmapheresis required

### Bleeding Risk by Count

| Platelet Count | Bleeding Risk |
|----------------|---------------|
| >50 x10^9/L | Low; can proceed with most procedures |
| 20-50 x10^9/L | Increased with surgery/trauma |
| 10-20 x10^9/L | Spontaneous mucosal bleeding |
| <10 x10^9/L | Risk of spontaneous CNS/GI bleeding |

### Transfusion Thresholds

| Clinical Situation | Threshold |
|--------------------|-----------|
| Prophylaxis (stable) | 10 x10^9/L |
| Minor procedure | 50 x10^9/L |
| Major surgery | 50-100 x10^9/L |
| CNS surgery | 100 x10^9/L |`,
      keyTerms: [
        { term: 'HIT (heparin-induced thrombocytopenia)', definition: 'Immune-mediated platelet activation/consumption causing paradoxical clotting' },
        { term: 'TTP (thrombotic thrombocytopenic purpura)', definition: 'Microangiopathic hemolysis with ADAMTS13 deficiency; medical emergency' },
        { term: 'ADAMTS13', definition: 'Enzyme that cleaves von Willebrand factor; deficient in TTP' },
      ],
      clinicalNotes: 'Always review smear to rule out pseudothrombocytopenia before diagnosing true thrombocytopenia. If clumps seen, repeat with citrate tube.',
    },
    4: {
      level: 4,
      summary: 'Advanced platelet analysis integrates automated parameters, functional assays, and molecular testing for precise diagnosis of thrombocytopenic and thrombocytotic disorders.',
      explanation: `## Advanced Platelet Analysis

### Automated Platelet Parameters

**Mean Platelet Volume (MPV):**
- Normal: 7.5-11.5 fL
- High MPV: Increased platelet turnover (ITP, recovery)
- Low MPV: Bone marrow suppression

**Immature Platelet Fraction (IPF):**
- Reflects thrombopoiesis (like reticulocyte count for platelets)
- High IPF + low PLT = peripheral destruction
- Low IPF + low PLT = production failure

### Drug-Induced Thrombocytopenia

**High-Risk Medications:**
| Drug | Mechanism | Onset |
|------|-----------|-------|
| Heparin (HIT) | Immune (PF4 antibodies) | 5-10 days |
| Quinine | Drug-dependent antibodies | Days |
| GP IIb/IIIa inhibitors | Direct platelet binding | Hours |
| Vancomycin | Drug-dependent antibodies | Days |
| Valproic acid | Dose-dependent suppression | Weeks |

### ITP Diagnosis and Management

**Primary ITP Diagnosis:**
- Exclusion diagnosis
- PLT <100 x10^9/L
- No other cause identified

**Secondary ITP Causes:**
- HIV, HCV, H. pylori
- SLE, APS
- CVID, lymphoproliferative disorders

**Treatment Options:**
- First-line: Corticosteroids, IVIG (if rapid response needed)
- Second-line: Rituximab, splenectomy, TPO-RA (romiplostim, eltrombopag)

### Myeloproliferative Neoplasm Evaluation

**Essential Thrombocythemia Diagnostic Criteria (WHO 2022):**
1. Sustained PLT ≥450 x10^9/L
2. BM megakaryocyte proliferation with mature morphology
3. Not meeting criteria for other MPN, MDS, or reactive cause
4. JAK2, CALR, or MPL mutation OR clonal marker OR no reactive cause

**Risk Stratification (IPSET-thrombosis):**
- Age >60, prior thrombosis, JAK2 mutation, cardiovascular risk factors
- Guides therapy: observation vs aspirin vs cytoreduction`,
      keyTerms: [
        { term: 'immature platelet fraction (IPF)', definition: 'Percentage of young, reticulated platelets; marker of thrombopoiesis' },
        { term: 'TPO receptor agonist', definition: 'Drugs (romiplostim, eltrombopag) that stimulate platelet production via c-Mpl receptor' },
        { term: 'CALR mutation', definition: 'Calreticulin mutation seen in JAK2-negative ET and PMF' },
      ],
      clinicalNotes: 'In suspected HIT, stop all heparin (including flushes) immediately and initiate alternative anticoagulation. Do not wait for lab confirmation.',
    },
    5: {
      level: 5,
      summary: 'Expert platelet analysis encompasses platelet function testing, molecular pathogenesis of thrombocytopenic disorders, and precision medicine approaches to inherited and acquired platelet disorders.',
      explanation: `## Expert Platelet Analysis

### Platelet Function Testing

**Light Transmission Aggregometry (LTA):**
Gold standard for platelet function disorders
| Agonist | Defect Pattern |
|---------|----------------|
| ADP | P2Y12 deficiency, clopidogrel effect |
| Epinephrine | α2-receptor, dense granule deficiency |
| Collagen | GPVI deficiency |
| Ristocetin | vWD, Bernard-Soulier (GPIb deficiency) |
| Arachidonic acid | Aspirin effect, thromboxane pathway |

**Whole Blood Aggregometry:**
- Multiplate, VerifyNow systems
- Point-of-care, less labor-intensive
- Used for antiplatelet therapy monitoring

### Inherited Platelet Disorders

**Glanzmann Thrombasthenia:**
- GPIIb/IIIa deficiency
- Normal platelet count, severe bleeding
- No aggregation to any agonist except ristocetin

**Bernard-Soulier Syndrome:**
- GPIb-IX-V deficiency
- Thrombocytopenia with giant platelets
- Absent ristocetin aggregation

**Storage Pool Disorders:**
- Dense granule deficiency (δ-SPD)
- Alpha granule deficiency (gray platelet syndrome)
- Reduced secondary wave of aggregation

### Molecular Pathogenesis of ITP

**Immune Mechanisms:**
- Anti-GPIIb/IIIa, anti-GPIb antibodies
- T-cell mediated platelet destruction
- Impaired megakaryocytopoiesis from TPO-A antibodies

**Complement in ITP:**
- C3 and C4d deposition on platelets
- Complement inhibition (sutimlimab) under investigation

### Thrombotic Microangiopathies

**Differential Diagnosis:**

| Feature | TTP | HUS | aHUS | DIC |
|---------|-----|-----|------|-----|
| ADAMTS13 | <10% | Normal | Normal | Normal |
| Complement | Normal | Normal | Abnormal | Normal |
| Renal | Mild | Severe | Severe | Variable |
| Coagulation | Normal | Normal | Normal | Abnormal |

**ADAMTS13 Testing:**
- Activity level diagnostic
- Inhibitor (antibody) vs congenital deficiency
- Guides therapy and relapse risk

### Emerging Therapies

**Fostamatinib:**
- Spleen tyrosine kinase (SYK) inhibitor
- Approved for chronic ITP
- Inhibits FcγR-mediated platelet destruction

**Rilzabrutinib:**
- BTK inhibitor
- Phase 3 trials in ITP
- Inhibits both platelet destruction and autoantibody production

**Gene Therapy:**
- Under investigation for Bernard-Soulier, Glanzmann
- Lentiviral gene addition approaches

### Clinical Pearls

1. **Pseudothrombocytopenia:** Occurs in 0.1% of samples; EDTA-dependent antibodies cause clumping. Confirm with citrate tube or smear review.

2. **Gestational thrombocytopenia:** Mild (70-150), third trimester, resolves postpartum. No treatment needed unless <70 or bleeding.

3. **COVID-19 associated:** Both ITP and vaccine-induced thrombocytopenia (VITT) reported. VITT resembles HIT with PF4 antibodies.

4. **Refractory ITP:** Defined as failure of splenectomy OR requiring therapy to maintain safe PLT. Consider CMML, MDS, congenital disorders.`,
      keyTerms: [
        { term: 'ADAMTS13', definition: 'A disintegrin and metalloproteinase with thrombospondin motifs 13; cleaves vWF; deficiency causes TTP' },
        { term: 'light transmission aggregometry', definition: 'Gold standard platelet function test measuring aggregation response to various agonists' },
        { term: 'fostamatinib', definition: 'SYK inhibitor approved for refractory ITP' },
        { term: 'complement-mediated HUS (aHUS)', definition: 'Atypical HUS due to complement dysregulation; treated with eculizumab' },
      ],
      clinicalNotes: 'In TTP, do not delay plasma exchange for ADAMTS13 results. Empiric treatment indicated when TTP is clinically suspected (MAHA + thrombocytopenia + neurologic/renal symptoms).',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['laboratory', 'coagulation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// MEAN CORPUSCULAR VOLUME (MCV)
// =============================================================================

export const mcvInterpretation: LabInterpretationContent = {
  id: 'lab-mcv',
  type: 'concept',
  name: 'Mean Corpuscular Volume (MCV)',
  alternateNames: ['MCV', 'Mean Cell Volume'],

  labMetadata: {
    loincCode: '787-2',
    testName: 'Mean Corpuscular Volume',
    commonAbbreviations: ['MCV'],
    category: 'hematology',
    panel: 'CBC',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 80,
      high: 100,
      unit: 'fL (femtoliters)',
    },
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'mild',
      causes: [
        {
          category: 'Microcytic Anemias',
          causes: [
            'Iron deficiency anemia (most common)',
            'Thalassemia trait',
            'Anemia of chronic disease (some cases)',
            'Sideroblastic anemia',
            'Lead poisoning',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Low Hgb (anemia)',
        'Low ferritin (iron deficiency)',
        'Elevated RBC count with low MCV (thalassemia trait)',
      ],
      workupSuggestions: [
        'Iron studies (ferritin, iron, TIBC)',
        'Hemoglobin electrophoresis if iron studies normal',
        'Reticulocyte count',
      ],
      clinicalPearls: [
        'Mentzer index (MCV/RBC): <13 suggests thalassemia, >13 suggests iron deficiency',
        'RDW elevated in iron deficiency, normal in thalassemia trait',
      ],
    },
    high: {
      direction: 'high',
      severity: 'mild',
      causes: [
        {
          category: 'Macrocytic Anemias - Megaloblastic',
          causes: [
            'Vitamin B12 deficiency',
            'Folate deficiency',
            'Medications (methotrexate, hydroxyurea, azathioprine)',
          ],
          commonality: 'common',
        },
        {
          category: 'Macrocytic Anemias - Non-megaloblastic',
          causes: [
            'Alcohol use',
            'Liver disease',
            'Hypothyroidism',
            'Myelodysplastic syndrome',
            'Reticulocytosis',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Hypersegmented neutrophils (megaloblastic)',
        'Neurologic symptoms (B12 deficiency)',
        'Glossitis, angular cheilitis',
      ],
      workupSuggestions: [
        'Vitamin B12 and folate levels',
        'Peripheral blood smear',
        'Reticulocyte count',
        'TSH, liver function tests',
      ],
      clinicalPearls: [
        'MCV >115 fL strongly suggests B12/folate deficiency or MDS',
        'Reticulocytes are larger than mature RBCs; high retic count increases MCV',
      ],
    },
  },

  specimen: {
    specimenType: 'whole blood',
    tubeType: 'Lavender top (EDTA)',
    volume: '3 mL',
    fastingRequired: false,
  },

  relatedLabs: ['lab-hemoglobin', 'lab-rbc', 'lab-rdw', 'lab-mch'],

  organAssociations: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'RBC production' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'MCV measures the average size of your red blood cells, helping doctors figure out why you might be anemic.',
      explanation: `MCV tells your doctor how big your red blood cells are on average. Think of it like measuring the average size of balls in a ball pit.

Normal red blood cells are a certain size. If they're too small (low MCV), it often means your body doesn't have enough iron to make them properly. If they're too big (high MCV), it might mean you're missing certain vitamins like B12 or folate.

Doctors use MCV along with other blood tests to figure out what's causing anemia (low blood count) and how to treat it.`,
      keyTerms: [
        { term: 'MCV', definition: 'A measurement of how big your red blood cells are' },
        { term: 'microcytic', definition: 'When red blood cells are too small' },
        { term: 'macrocytic', definition: 'When red blood cells are too big' },
      ],
      analogies: [
        'MCV is like measuring whether apples in a basket are small, medium, or large sized.',
      ],
    },
    2: {
      level: 2,
      summary: 'MCV classifies anemias: microcytic (small cells) often indicates iron deficiency, while macrocytic (large cells) suggests B12/folate deficiency.',
      explanation: `Mean Corpuscular Volume (MCV) measures the average size of red blood cells in femtoliters (fL).

**Normal Range**: 80-100 fL

**Classifications:**

**Microcytic (MCV < 80 fL):**
- Iron deficiency anemia - most common cause worldwide
- Thalassemia - inherited hemoglobin disorders
- Lead poisoning
- Chronic disease (sometimes)

**Normocytic (MCV 80-100 fL):**
- Acute blood loss
- Chronic disease
- Kidney disease
- Hemolysis (RBC destruction)

**Macrocytic (MCV > 100 fL):**
- Vitamin B12 deficiency
- Folate deficiency
- Alcohol use
- Liver disease
- Certain medications
- Bone marrow disorders`,
      keyTerms: [
        { term: 'femtoliter (fL)', definition: 'Unit of volume for measuring cell size; one quadrillionth of a liter' },
        { term: 'normocytic', definition: 'Normal-sized red blood cells (MCV 80-100 fL)' },
      ],
    },
    3: {
      level: 3,
      summary: 'MCV stratifies anemia etiology; combined with RDW and reticulocyte count, provides comprehensive red cell analysis.',
      explanation: `## MCV Interpretation Framework

### Classification
| MCV | Category | Common Causes |
|-----|----------|---------------|
| <80 fL | Microcytic | Iron deficiency, thalassemia, chronic disease |
| 80-100 fL | Normocytic | Acute blood loss, hemolysis, CKD, mixed deficiency |
| >100 fL | Macrocytic | B12/folate deficiency, liver disease, MDS, drugs |

### Microcytic Anemia Differential

**Iron Deficiency vs Thalassemia:**
| Feature | Iron Deficiency | Thalassemia Trait |
|---------|-----------------|-------------------|
| RBC count | Low | Normal or high |
| RDW | Elevated | Normal |
| Ferritin | Low | Normal |
| Mentzer index | >13 | <13 |

### Macrocytic Anemia Differential

**Megaloblastic vs Non-megaloblastic:**
| Feature | Megaloblastic | Non-megaloblastic |
|---------|---------------|-------------------|
| Cause | B12/folate deficiency | Alcohol, liver, MDS |
| Smear | Hypersegmented PMNs, oval macrocytes | Round macrocytes |
| MCV | Often >110 fL | Usually 100-110 fL |
| LDH | Very elevated | Mildly elevated |

### Combined Analysis with RDW

RDW (Red Cell Distribution Width) measures variation in RBC size:
- **High MCV + High RDW:** B12/folate deficiency, MDS
- **High MCV + Normal RDW:** Aplastic anemia, liver disease
- **Low MCV + High RDW:** Iron deficiency, mixed deficiency
- **Low MCV + Normal RDW:** Thalassemia trait`,
      keyTerms: [
        { term: 'RDW (red cell distribution width)', definition: 'Measure of RBC size variation; elevated in nutritional deficiencies' },
        { term: 'Mentzer index', definition: 'MCV/RBC count; helps differentiate iron deficiency from thalassemia trait' },
        { term: 'hypersegmented neutrophils', definition: 'PMNs with 6+ nuclear lobes; hallmark of megaloblastic anemia' },
      ],
      clinicalNotes: 'Mixed deficiencies (e.g., iron + B12) may result in normal MCV but elevated RDW. Always consider combined deficiencies.',
    },
    4: {
      level: 4,
      summary: 'Advanced MCV interpretation integrates red cell indices, reticulocyte parameters, and clinical context for precise anemia classification.',
      explanation: `## Advanced MCV Analysis

### Red Cell Indices Relationships

**Calculated Values:**
- MCV = Hct/RBC (fL)
- MCH = Hgb/RBC (pg)
- MCHC = Hgb/Hct (g/dL)

**Index Patterns:**
| Condition | MCV | MCH | MCHC |
|-----------|-----|-----|------|
| Iron deficiency | ↓ | ↓ | ↓ |
| Thalassemia trait | ↓ | ↓ | N |
| Spherocytosis | N | N | ↑ |
| Cold agglutinins | ↑ (falsely) | ↑ (falsely) | N |

### MCV Changes Over Time

**Developing Iron Deficiency:**
1. Depleted stores (low ferritin, normal MCV)
2. Iron-deficient erythropoiesis (low Fe, high TIBC, normal MCV)
3. Iron deficiency anemia (low MCV appears late)

**Treatment Response:**
- Reticulocyte peak: 7-10 days
- MCV increase: Reflects new, larger reticulocytes
- Full MCV normalization: 2-4 months

### Spurious MCV Results

**Falsely Elevated:**
- Cold agglutinins (RBC clumping)
- Hyperglycemia (cell swelling)
- Marked leukocytosis (WBC counted as small RBCs)

**Falsely Low:**
- In vitro hemolysis
- Giant platelets counted as RBCs

### Myelodysplastic Syndrome Clues

MDS often presents with macrocytic anemia:
- MCV 100-120 fL typical
- RDW elevated
- May have cytopenias in other lines
- Smear: Oval macrocytes, hypogranular PMNs, pseudo-Pelger-Huet cells
- Bone marrow required for diagnosis`,
      keyTerms: [
        { term: 'MCH (mean corpuscular hemoglobin)', definition: 'Average hemoglobin content per RBC' },
        { term: 'MCHC (mean corpuscular hemoglobin concentration)', definition: 'Average hemoglobin concentration within RBCs' },
        { term: 'cold agglutinins', definition: 'IgM antibodies causing RBC clumping at low temperatures; falsely elevates MCV' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert MCV analysis leverages advanced reticulocyte indices, hemoglobin content measures, and integration with molecular/genetic testing.',
      explanation: `## Expert MCV Analysis

### Advanced Reticulocyte Parameters

**Reticulocyte Hemoglobin (CHr/Ret-He):**
- Direct measure of iron available for erythropoiesis
- Decreases before MCV changes
- <28 pg suggests iron-restricted erythropoiesis
- Useful in inflammatory states where ferritin unreliable

**Immature Reticulocyte Fraction (IRF):**
- Percentage of youngest reticulocytes
- Marker of erythropoietic activity
- Elevated: Hemolysis, acute blood loss, EPO response
- Low: Bone marrow failure

### Hemoglobin Content-Based Analysis

**Hypochromic Cell Percentage (%HYPO):**
- RBCs with Hgb <28 g/dL
- >5% indicates functional iron deficiency
- Used in CKD patients on dialysis

**Red Blood Cell Size Factor:**
- Advanced mathematical models combining MCV, RDW
- May better classify complex anemias

### Genetic Considerations

**Hereditary Macrocytosis:**
- Familial macrocytosis without anemia
- Often discovered incidentally
- No treatment required

**Diamond-Blackfan Anemia:**
- Macrocytic anemia with elevated HbF
- Ribosomal protein gene mutations
- Classically presents in infancy

**Congenital Dyserythropoietic Anemia (CDA):**
- Ineffective erythropoiesis
- Type I: Macrocytic with nuclear bridging
- Type II: Normocytic with positive acidified serum test

### Algorithmic Approach to Complex Cases

**Normocytic Anemia with Elevated Retic:**
1. Calculate reticulocyte production index (RPI)
2. If RPI >2: Hemolysis or blood loss
3. Hemolysis workup: LDH, haptoglobin, bilirubin, DAT
4. If DAT negative: Consider mechanical, membrane, or enzyme defects

**Mixed Deficiency:**
- Iron + B12 deficiency: Normal MCV, dimorphic smear
- Recognize by elevated RDW with normal MCV
- Check iron studies AND B12/folate together`,
      keyTerms: [
        { term: 'reticulocyte hemoglobin (CHr)', definition: 'Hemoglobin content of reticulocytes; early marker of iron-restricted erythropoiesis' },
        { term: 'hypochromic percentage', definition: 'Proportion of RBCs with reduced hemoglobin concentration' },
        { term: 'dimorphic blood picture', definition: 'Two distinct RBC populations (e.g., micro and macrocytic); suggests mixed deficiency or transfusion' },
      ],
      clinicalNotes: 'In renal failure patients on ESAs, CHr and %HYPO are superior to ferritin for guiding iron therapy. Target CHr >32 pg or %HYPO <10% before increasing ESA dose.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['laboratory', 'anemia'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// CBC PANEL DEFINITION
// =============================================================================

export const CBC_PANEL: LabPanel = {
  id: 'panel-cbc',
  name: 'Complete Blood Count',
  nameEs: 'Hemograma Completo',
  abbreviation: 'CBC',
  description: 'Comprehensive evaluation of cellular blood components including red cells, white cells, and platelets.',
  includedTests: [
    'lab-wbc',
    'lab-hemoglobin',
    'lab-hematocrit',
    'lab-platelet',
    'lab-mcv',
    'lab-mch',
    'lab-mchc',
    'lab-rdw',
    'lab-rbc',
  ],
  commonIndications: [
    'Anemia workup',
    'Infection evaluation',
    'Preoperative assessment',
    'Chemotherapy monitoring',
    'Routine health screening',
    'Fatigue or weakness',
    'Bleeding or bruising',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'The CBC counts the different cells in your blood. It checks for anemia (low red cells), infections (high white cells), and bleeding problems (low platelets).',
    },
    {
      level: 3,
      content: 'Systematic CBC interpretation: First assess Hgb/Hct for anemia, then MCV for classification. Evaluate WBC with differential for infection/inflammation. Check platelets and correlate with clinical bleeding/clotting. RDW helps differentiate nutritional from inherited causes.',
    },
    {
      level: 5,
      content: 'Integrate CBC with automated reticulocyte parameters (CHr, IRF), flow cytometry when indicated, and molecular studies for hemoglobinopathies or clonal disorders. Consider preanalytic variables and interferents.',
    },
  ],
  patterns: [
    {
      patternName: 'Iron Deficiency Anemia',
      description: 'Classic microcytic, hypochromic anemia with elevated RDW',
      labFindings: [
        { labId: 'lab-hemoglobin', labName: 'Hemoglobin', expectedDirection: 'low' },
        { labId: 'lab-mcv', labName: 'MCV', expectedDirection: 'low' },
        { labId: 'lab-rdw', labName: 'RDW', expectedDirection: 'high' },
        { labId: 'lab-platelet', labName: 'Platelet', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Iron deficiency anemia'],
      clinicalContext: 'Common in menstruating women, GI blood loss, malabsorption',
    },
    {
      patternName: 'Megaloblastic Anemia',
      description: 'Macrocytic anemia with pancytopenia',
      labFindings: [
        { labId: 'lab-hemoglobin', labName: 'Hemoglobin', expectedDirection: 'low' },
        { labId: 'lab-mcv', labName: 'MCV', expectedDirection: 'high' },
        { labId: 'lab-wbc', labName: 'WBC', expectedDirection: 'low' },
        { labId: 'lab-platelet', labName: 'Platelet', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['B12 deficiency', 'Folate deficiency'],
      clinicalContext: 'Check for glossitis, neurologic symptoms; look for hypersegmented neutrophils on smear',
    },
    {
      patternName: 'Acute Bacterial Infection',
      description: 'Leukocytosis with left shift',
      labFindings: [
        { labId: 'lab-wbc', labName: 'WBC', expectedDirection: 'high' },
        { labId: 'lab-hemoglobin', labName: 'Hemoglobin', expectedDirection: 'normal' },
        { labId: 'lab-platelet', labName: 'Platelet', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Bacterial infection', 'Acute inflammation'],
      clinicalContext: 'Look for bands, toxic granulation on differential; correlate with clinical signs of infection',
    },
  ],
};

// Export all CBC components
export const cbcComponents = {
  wbc: wbcInterpretation,
  hemoglobin: hemoglobinInterpretation,
  platelet: plateletInterpretation,
  mcv: mcvInterpretation,
};
