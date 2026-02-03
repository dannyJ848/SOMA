/**
 * Thalassemia - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const thalassemiaContent: EducationalContent = {
  id: "condition-thalassemia",
  type: "condition",
  name: "Thalassemia",
  alternateNames: ["Mediterranean Anemia", "Cooley Anemia", "Thalassemia Major"],
  hpoId: "HP:0001878",

  levels: {
    1: {
      level: 1,
      summary: "Thalassemia is an inherited blood disorder where the body does not make enough hemoglobin, causing anemia that can range from mild to severe.",
      explanation: `Thalassemia is a group of inherited blood conditions affecting hemoglobin - the protein in red blood cells that carries oxygen.

**What happens in thalassemia?**
- The body makes less hemoglobin than normal
- Red blood cells are smaller and fewer
- This causes anemia (low red blood cell count)

**Types:**
- **Alpha thalassemia**: Problems with alpha globin genes
- **Beta thalassemia**: Problems with beta globin genes

**Severity ranges:**
- **Minor/trait**: Mild anemia or no symptoms (carriers)
- **Intermedia**: Moderate anemia
- **Major**: Severe anemia requiring regular transfusions

**Who is affected?**
Most common in people from:
- Mediterranean region
- Middle East
- Southeast Asia
- Africa

**Treatment:**
- Mild forms may need no treatment
- Moderate forms may need occasional transfusions
- Severe forms need regular transfusions and medications
- Bone marrow transplant can cure some patients`,
      keyTerms: [
        { term: "thalassemia", definition: "Inherited blood disorder with reduced hemoglobin production" },
        { term: "hemoglobin", definition: "Protein in red blood cells that carries oxygen" },
        { term: "anemia", definition: "Condition with too few red blood cells or hemoglobin" },
        { term: "transfusion", definition: "Receiving blood from a donor" },
      ],
      analogies: [
        "Hemoglobin is like a delivery truck carrying oxygen - in thalassemia, there are not enough trucks.",
        "Thalassemia trait is like having a recipe with one ingredient slightly off - the dish still works but is a bit different.",
      ],
      examples: [
        "A child with thalassemia major receives blood transfusions every few weeks to stay healthy.",
        "A person with thalassemia trait learns about it through routine blood tests and has no symptoms.",
      ],
    },
    2: {
      level: 2,
      summary: "Thalassemias are hemoglobinopathies caused by reduced or absent globin chain synthesis, classified by affected chain (alpha or beta) and severity, with management ranging from observation to transfusion-dependent care.",
      explanation: `Thalassemias result from mutations affecting globin gene expression, leading to imbalanced hemoglobin production.

**Hemoglobin Structure:**
- Adult Hb: 2 alpha + 2 beta chains (HbA)
- Four alpha genes (HBA1/HBA2) on chromosome 16
- Two beta genes (HBB) on chromosome 11

**Alpha Thalassemia:**
| Genes Affected | Name | Severity |
|----------------|------|----------|
| 1 gene (-α/αα) | Silent carrier | Normal/minimal anemia |
| 2 genes (--/αα or -α/-α) | Trait | Mild anemia |
| 3 genes (--/-α) | HbH disease | Moderate-severe anemia |
| 4 genes (--/--) | Hb Bart\"s hydrops fetalis | Fatal in utero |

**Beta Thalassemia:**
| Genotype | Name | Severity |
|----------|------|----------|
| β+/β or β0/β | Minor/trait | Mild anemia |
| β+/β+ or β+/β0 | Intermedia | Variable, may need transfusions |
| β0/β0 | Major | Transfusion-dependent |

**Clinical Features:**
| Finding | Cause |
|---------|-------|
| Anemia | Reduced Hb production |
| Microcytosis | Small RBCs |
| Hypochromia | Pale RBCs |
| Hepatosplenomegaly | Extramedullary hematopoiesis |
| Bone changes | Marrow expansion |

**Diagnosis:**
- CBC: Microcytic anemia, target cells
- Hemoglobin electrophoresis
- Genetic testing (alpha, complex cases)`,
      keyTerms: [
        { term: "microcytosis", definition: "Smaller than normal red blood cells (low MCV)" },
        { term: "beta globin", definition: "Protein chain component of adult hemoglobin" },
        { term: "HbH disease", definition: "Alpha thalassemia with 3 affected genes causing moderate-severe disease" },
        { term: "hydrops fetalis", definition: "Severe fetal swelling; fatal with 4-gene alpha thalassemia" },
      ],
      analogies: [
        "Alpha and beta chains must balance like partners dancing - when one is short, the dance is disrupted.",
        "Extramedullary hematopoiesis is the body desperately making blood cells wherever it can, not just in the marrow.",
      ],
    },
    3: {
      level: 3,
      summary: "Thalassemia pathophysiology involves globin chain imbalance causing ineffective erythropoiesis and hemolysis, with genotype determining phenotype severity and transfusion-dependent patients requiring comprehensive iron management.",
      explanation: `## Pathophysiology

### Chain Imbalance Effects
| Type | Excess Chain | Result |
|------|--------------|--------|
| Alpha thal | Beta chains | HbH (β4) - unstable |
| Beta thal | Alpha chains | Precipitate, damage RBCs |

### Consequences
1. Ineffective erythropoiesis (cell death in marrow)
2. Hemolysis (peripheral destruction)
3. Compensatory marrow expansion
4. Increased iron absorption

### Iron Overload
- Even without transfusion: Increased GI absorption
- With transfusion: ~200 mg iron per unit
- Damages: Heart, liver, endocrine organs

## Genotype-Phenotype

### Beta Thalassemia
| Mutation Type | Phenotype |
|---------------|-----------|
| β0 | No beta chain production |
| β+ | Reduced production |
| β++ | Mild reduction |

### Genetic Modifiers
- Co-inheritance of alpha thal with beta thal: May improve balance
- HPFH (hereditary persistence of fetal Hb): Ameliorates beta thal
- Xmn1-HBG2 polymorphism: Increases HbF

## Management

### Transfusion-Dependent (TDT)
| Target | Rationale |
|--------|-----------|
| Pre-transfusion Hb 9-10.5 | Suppress erythropoiesis |
| Phenotype-matched | Prevent alloimmunization |
| Leukoreduced | Reduce reactions |

### Iron Chelation
| Agent | Route | Considerations |
|-------|-------|----------------|
| Deferoxamine | SC/IV | Established efficacy |
| Deferasirox | PO | Once daily |
| Deferiprone | PO | Cardiac iron |

### Monitoring
- Ferritin (not ideal but practical)
- MRI T2* (cardiac and hepatic iron)
- Endocrine function
- Cardiac function`,
      keyTerms: [
        { term: "ineffective erythropoiesis", definition: "Red cell precursor death in bone marrow before maturation" },
        { term: "iron chelation", definition: "Medication removing excess iron from the body" },
        { term: "MRI T2*", definition: "MRI technique measuring iron deposition in organs" },
        { term: "HPFH", definition: "Hereditary Persistence of Fetal Hemoglobin; can ameliorate beta thalassemia" },
      ],
      clinicalNotes: "Iron overload occurs even without transfusion due to increased absorption. MRI T2* is gold standard for cardiac iron assessment. Cardiac iron predicts cardiac events. Phenotype matching reduces alloimmunization.",
    },
    4: {
      level: 4,
      summary: "Advanced thalassemia management encompasses curative transplant approaches, emerging gene therapy, individualized chelation optimization, and comprehensive complication prevention.",
      explanation: `## Curative Therapies

### Hematopoietic Stem Cell Transplant
| Factor | Consideration |
|--------|---------------|
| Donor | Matched sibling ideal |
| Timing | Earlier = better outcomes |
| Risk | GVHD, rejection |
| Outcomes | 80-90% cure with matched sibling |

### Gene Therapy
| Approach | Mechanism | Status |
|----------|-----------|--------|
| LentiGlobin | β-globin gene addition | Approved (Zynteglo) |
| Exagamglogene | CRISPR BCL11A disruption | Approved (Casgevy) |

### Gene Therapy Outcomes
- Many patients transfusion-independent
- Long-term durability being established
- Cost and access challenges

## Chelation Optimization

### Combination Therapy
| Combination | Use |
|-------------|-----|
| DFO + DFP | Severe cardiac iron |
| DFX + DFP | High iron burden |

### Monitoring Targets
| Measure | Target |
|---------|--------|
| Ferritin | <1000 μg/L |
| Cardiac T2* | >20 ms |
| Liver iron | <7 mg/g dry weight |

## Complications

### By System
| System | Issues |
|--------|--------|
| Cardiac | Cardiomyopathy, arrhythmias |
| Endocrine | Hypogonadism, hypothyroidism, diabetes |
| Hepatic | Fibrosis, cirrhosis |
| Bone | Osteoporosis, fractures |
| Infection | Transfusion-transmitted, post-splenectomy |

### Prevention
- Vaccination (encapsulated organisms if asplenic)
- Hormone replacement
- Bone health monitoring
- Hepatitis screening/treatment

## Non-Transfusion-Dependent (NTDT)

### Management Principles
- Monitor for transfusion need
- Chelation if iron overload
- Complication prevention
- Fetal Hb induction (research)`,
      keyTerms: [
        { term: "Zynteglo", definition: "Gene therapy adding functional beta-globin gene for transfusion-dependent thalassemia" },
        { term: "Casgevy", definition: "CRISPR-based gene therapy inducing fetal hemoglobin for thalassemia" },
        { term: "NTDT", definition: "Non-Transfusion-Dependent Thalassemia; intermedia phenotype" },
        { term: "T2* MRI", definition: "MRI technique for quantifying organ iron; <20 ms cardiac = significant iron" },
      ],
      clinicalNotes: "Gene therapy offers potential cure - assess eligibility. Cardiac T2* <10 ms is emergency requiring intensive chelation. NTDT patients may have significant iron overload without transfusion. Early transplant in children with matched sibling donor has excellent outcomes.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art thalassemia care integrates precision genotyping, approved gene therapies, global screening initiatives, and emerging non-curative disease-modifying therapies in the context of dramatic therapeutic advances.",
      explanation: `## Gene Therapy Era

### Current Approved Therapies
| Therapy | Approach | Indication |
|---------|----------|------------|
| Betibeglogene autotemcel | Gene addition | TDT β-thal |
| Exagamglogene autotemcel | BCL11A editing | TDT β-thal |

### Outcomes Data
- Majority achieve transfusion independence
- Durability extending
- Long-term follow-up ongoing

### Access Challenges
- Cost ($2-3 million)
- Specialized centers
- Global equity concerns

## Emerging Therapies

### Non-Curative Approaches
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Luspatercept | Erythroid maturation | Approved |
| Mitapivat | PKR activator | Phase 3 |
| HbF inducers | Increase fetal Hb | Research |

### Luspatercept
- TGF-β superfamily trap
- Improves ineffective erythropoiesis
- Approved for TDT and NTDT

## Global Health

### Screening Programs
| Region | Approach |
|--------|----------|
| Mediterranean | Population screening |
| Southeast Asia | Premarital testing |
| Middle East | Variable |

### Prevention
- Carrier identification
- Genetic counseling
- Prenatal diagnosis
- PGT-M

## Precision Medicine

### Genotype-Guided Care
- Mutation-specific prognosis
- Modifier gene testing
- Treatment selection

### Biomarkers
- Novel iron assessment
- Erythropoiesis markers
- Outcome prediction

## Research Directions

### In Vivo Gene Editing
- Reduce need for conditioning
- Improve safety
- Expand access

### Novel Targets
- Ineffective erythropoiesis pathways
- Iron metabolism
- Hemoglobin switching`,
      keyTerms: [
        { term: "luspatercept", definition: "TGF-β trap improving ineffective erythropoiesis; approved for thalassemia" },
        { term: "PKR activator", definition: "Drug activating pyruvate kinase to improve red cell metabolism" },
        { term: "in vivo gene editing", definition: "Gene therapy delivered directly to patient without cell extraction" },
      ],
      clinicalNotes: "Gene therapy now approved with transformative outcomes. Luspatercept provides non-curative benefit for many patients. Support global prevention through screening programs. Long-term gene therapy outcomes being established - continue follow-up.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "condition-sickle-cell-disease", targetType: "condition", relationship: "related", label: "Sickle Cell Disease" },
    { targetId: "concept-autosomal-recessive", targetType: "concept", relationship: "related", label: "Autosomal Recessive Inheritance" },
  ],
  tags: {
    systems: ["genetics", "hematology"],
    topics: ["hemoglobinopathies", "single gene disorders"],
    keywords: ["thalassemia", "hemoglobin", "iron overload", "gene therapy"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default thalassemiaContent;
