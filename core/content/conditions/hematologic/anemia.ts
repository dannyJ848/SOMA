/**
 * Anemia - Comprehensive Educational Content
 *
 * Covers various types of anemia pathophysiology and management.
 */

import { EducationalContent } from '../../types';

export const anemia: EducationalContent = {
  id: 'condition-anemia',
  type: 'condition',
  name: 'Anemia',
  alternateNames: ['Low Blood Count', 'Low Hemoglobin', 'Iron Deficiency', 'Blood Loss Anemia'],
  hpoId: 'HP:0001903',

  levels: {
    1: {
      level: 1,
      summary: 'Anemia is a condition where the blood does not have enough healthy red blood cells to carry oxygen to body tissues.',
      explanation: `Anemia is a common condition where your blood has fewer red blood cells than normal, or your red blood cells do not have enough hemoglobin. Hemoglobin is the protein that carries oxygen.

**What red blood cells do:**
- Carry oxygen from lungs to all body tissues
- Pick up carbon dioxide to bring back to lungs
- Give blood its red color

**Common symptoms of anemia:**
- Fatigue and weakness
- Pale skin
- Shortness of breath
- Dizziness or lightheadedness
- Cold hands and feet
- Headache
- Chest pain
- Fast heartbeat

**Main causes of anemia:**
- Not enough iron in diet
- Blood loss (heavy periods, injury, ulcers)
- Body not making enough red blood cells
- Red blood cells being destroyed too quickly

**Common types:**
- Iron deficiency anemia (most common)
- Vitamin deficiency (B12, folate)
- Anemia of chronic disease

**Treatment:**
- Iron supplements or diet changes
- Vitamins
- Treating underlying cause
- Blood transfusions in severe cases

**Prevention:**
- Eat iron-rich foods (meat, beans, leafy greens)
- Vitamin C helps absorb iron
- Regular check-ups if at risk`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'Protein in red blood cells that carries oxygen' },
        { term: 'red blood cells', definition: 'Cells that carry oxygen throughout the body' },
        { term: 'iron', definition: 'Mineral needed to make hemoglobin' },
        { term: 'hematocrit', definition: 'Percentage of blood volume made up of red blood cells' },
      ],
      analogies: [
        'Red blood cells are like delivery trucks carrying oxygen; anemia means fewer trucks or less cargo per truck.',
        'Hemoglobin is like the seats on a bus for oxygen molecules; anemia means fewer seats available.',
      ],
      examples: [
        'A woman with heavy menstrual periods who feels tired and looks pale may have iron deficiency anemia.',
        'A vegetarian who does not eat enough iron-rich foods may develop anemia over time.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anemia is defined by decreased hemoglobin concentration or hematocrit, resulting in reduced oxygen-carrying capacity, with classification by MCV and etiology including production defects, blood loss, and hemolysis.',
      explanation: `## Definition and Classification

**WHO criteria:**
- Men: Hgb <13 g/dL (Hct <40%)
- Women: Hgb <12 g/dL (Hct <36%)
- Pregnancy: Hgb <11 g/dL

**By MCV (mean corpuscular volume):**
- Microcytic (<80 fL): Iron deficiency, thalassemia, anemia of chronic disease, sideroblastic
- Normocytic (80-100 fL): Acute blood loss, chronic disease, hemolysis, marrow failure
- Macrocytic (>100 fL): B12/folate deficiency, liver disease, alcohol, hypothyroidism, myelodysplasia

**By mechanism:**
- Decreased production
- Blood loss
- Increased destruction (hemolysis)

## Pathophysiology

**Oxygen transport:**
- Hgb binds O2 in lungs
- Releases O2 to tissues
- Right shift (decreased affinity): acidosis, fever, increased 2,3-DPG
- Left shift (increased affinity): alkalosis, hypothermia

**Compensatory mechanisms:**
- Increased cardiac output
- Increased 2,3-DPG (right shift)
- Redistribution of blood flow

**Symptoms depend on:**
- Degree of anemia
- Rate of onset
- Cardiopulmonary reserve

## Iron Deficiency Anemia

**Etiology:**
- Blood loss (GI, menstrual, GU)
- Decreased intake
- Decreased absorption (celiac, gastrectomy, PPIs)
- Increased demand (pregnancy, growth)

**Stages:**
1. Iron depletion (low ferritin, normal Hgb)
2. Iron deficiency (low ferritin, elevated TIBC)
3. Iron deficiency anemia (low Hgb, microcytic, hypochromic)

**Diagnosis:**
- Low ferritin (<15 ng/mL is specific)
- Low serum iron
- High TIBC
- Low transferrin saturation (<15%)
- Elevated RDW

**Treatment:**
- Oral iron (ferrous sulfate 325 mg TID or alternate day)
- Take with vitamin C, avoid with calcium/PPIs
- IV iron if malabsorption or intolerance
- Transfuse if symptomatic with Hgb <7-8

## Vitamin Deficiency Anemias

**B12 deficiency:**
- Causes: pernicious anemia, gastrectomy, ileal disease, vegan diet
- Macrocytic with hypersegmented neutrophils
- Neurological symptoms (posterior columns, cognitive)
- Schilling test (rarely used)
- Anti-intrinsic factor antibodies (pernicious anemia)
- Treatment: IM or high-dose oral B12

**Folate deficiency:**
- Causes: poor intake (alcoholism, elderly), increased demand (pregnancy, hemolysis), methotrexate
- Macrocytic, NO neurological symptoms
- Treatment: folic acid 1 mg daily

## Anemia of Chronic Disease/Inflammation

**Mechanism:**
- Increased hepcidin -> decreased iron absorption and release
- Decreased erythropoietin response
- Decreased RBC survival
- Blunted response to iron

**Features:**
- Normocytic or mildly microcytic
- Normal or elevated ferritin
- Low serum iron
- Low TIBC
- Treat underlying disease; consider EPO, IV iron if indicated

## Hemolytic Anemias

**Intravascular vs extravascular:**
- Intravascular: complement-mediated, mechanical, toxins
- Extravascular: splenic sequestration

**Lab markers:**
- Elevated LDH
- Elevated indirect bilirubin
- Low haptoglobin
- Reticulocytosis
- Peripheral smear findings

**Types:**
- Hereditary (sickle cell, thalassemia, spherocytosis, G6PD)
- Acquired (autoimmune, MAHA, PNH, cold agglutinins)`,
      keyTerms: [
        { term: 'MCV', definition: 'Mean corpuscular volume; size of red blood cells' },
        { term: 'RDW', definition: 'Red cell distribution width; variation in RBC size' },
        { term: 'hepcidin', definition: 'Hormone regulating iron metabolism; elevated in inflammation' },
        { term: 'reticulocyte', definition: 'Young red blood cell; elevated with increased RBC production' },
      ],
      analogies: [
        'MCV is like the average size of delivery trucks in your fleet - some fleets have all small trucks, some all large.',
        'Hepcidin acts like a security guard controlling iron release from storage; inflammation makes the guard more strict.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anemia workup requires systematic evaluation including reticulocyte count, iron studies, and peripheral smear, with understanding of hemolysis markers and specialized testing for hemoglobinopathies and bone marrow disorders.',
      explanation: `## Diagnostic Approach

**Initial workup:**
1. CBC with indices (MCV, MCH, RDW)
2. Reticulocyte count
3. Peripheral smear
4. Iron studies (ferritin, serum iron, TIBC)
5. B12 and folate levels

**Interpretation:**
- **Low reticulocyte + microcytic**: Iron deficiency, thalassemia, anemia of chronic disease
- **Low reticulocyte + macrocytic**: B12/folate deficiency, liver disease, alcohol, MDS
- **High reticulocyte**: Hemolysis or blood loss

**Peripheral smear findings:**
- Microcytic/hypochromic: iron deficiency, thalassemia
- Macrocytic: B12/folate deficiency, liver disease
- Target cells: liver disease, thalassemia, Hb C
- Spherocytes: hereditary spherocytosis, autoimmune hemolysis
- Schistocytes: MAHA (DIC, TTP, HUS), mechanical valves
- Sickle cells: sickle cell disease
- Bite cells: G6PD deficiency
- Basophilic stippling: lead poisoning, thalassemia

## Hemolytic Anemias - Detailed

### Autoimmune Hemolytic Anemia (AIHA)
**Warm AIHA (IgG):**
- Positive direct Coombs (anti-IgG or anti-C3)
- Spherocytes on smear
- Causes: idiopathic, lymphoproliferative, autoimmune diseases, drugs
- Treatment: steroids, rituximab, splenectomy

**Cold AIHA (IgM):**
- Positive direct Coombs (anti-C3 only)
- Cold agglutinins
- Causes: Mycoplasma, EBV, lymphoma, Waldenstrom
- Avoid cold; treat underlying; rituximab

### Microangiopathic Hemolytic Anemia (MAHA)
**DIC:**
- Coagulopathy, thrombocytopenia
- Treat underlying cause

**TTP:**
- ADAMTS13 deficiency or antibody
- Pentad: MAHA, thrombocytopenia, neuro, renal, fever
- Plasmapheresis (emergency)

**HUS:**
- Post-diarrheal (Shiga toxin) or atypical (complement)
- Renal predominant
- Supportive care; eculizumab for atypical

### Sickle Cell Disease
**Pathophysiology:**
- Hb S polymerization under low oxygen
- Sickling -> hemolysis, vaso-occlusion

**Complications:**
- Pain crises
- Acute chest syndrome
- Stroke
- Splenic sequestration
- Priapism
- Avascular necrosis

**Treatment:**
- Hydroxyurea (increases Hb F)
- L-glutamine
- Crizanlizumab (anti-P-selectin)
- Voxelotor (Hb S polymerization inhibitor)
- Blood transfusions
- Hematopoietic stem cell transplant (curative)

### Thalassemia
**Alpha-thalassemia:**
- 4 alpha genes
- Deletions cause disease (hydrops fetalis with 0 genes)

**Beta-thalassemia:**
- Beta gene mutations
- Major: transfusion-dependent
- Intermedia: moderate severity
- Trait: asymptomatic microcytosis
- Iron overload from transfusions; chelation needed

## Bone Marrow Failure

**Aplastic anemia:**
- Pancytopenia, hypocellular marrow
- Causes: idiopathic, toxins, radiation, viral, immune
- Treatment: ATG/cyclosporine or transplant

**Myelodysplastic syndrome:**
- Ineffective hematopoiesis
- Cytopenias, dysplasia, blasts
- Risk of transformation to AML
- Treatment: supportive, hypomethylating agents, transplant

**Pure red cell aplasia:**
- Selective loss of red cell precursors
- Diamond-Blackfan (congenital)
- Acquired (parvovirus B19, thymoma, autoimmune)

## Anemia in Specific Populations

**Pregnancy:**
- Physiologic anemia (dilutional)
- Increased iron needs
- Folate deficiency risk

**Elderly:**
- Often multifactorial
- Consider MDS, chronic disease, bleeding
- Higher cardiovascular impact

**Chronic kidney disease:**
- Decreased erythropoietin
- Iron deficiency (functional and absolute)
- ESA therapy with iron supplementation`,
      keyTerms: [
        { term: 'Coombs test', definition: 'Direct antiglobulin test for antibody-coated RBCs' },
        { term: 'ADAMTS13', definition: 'Enzyme deficient in TTP; cleaves vWF multimers' },
        { term: 'hemoglobinopathy', definition: 'Genetic disorder affecting hemoglobin structure or production' },
        { term: 'myelodysplasia', definition: 'Bone marrow disorder with dysplasia and risk of leukemia' },
      ],
      clinicalNotes: 'Always investigate the cause of iron deficiency, especially in men and postmenopausal women - GI workup needed. Reticulocyte count distinguishes production vs destruction problems. Smear review essential for diagnosis. TTP is a medical emergency requiring immediate plasmapheresis.',
    },
    4: {
      level: 4,
      summary: 'Advanced hematology encompasses complex transfusion medicine principles, management of hemoglobinopathies including curative approaches, iron overload syndromes requiring chelation, and specialized testing for rare anemias and bone marrow disorders.',
      explanation: `## Transfusion Medicine

### Red Blood Cell Transfusion
**Indications:**
- Symptomatic anemia
- Hgb <7 g/dL (stable patients)
- Hgb <8 g/dL with cardiac disease
- Acute blood loss with hemodynamic instability

**Risks:**
- Acute hemolytic (ABO incompatibility)
- Febrile non-hemolytic
- TRALI (transfusion-related acute lung injury)
- TACO (transfusion-associated circulatory overload)
- Infection (viral, bacterial)
- Iron overload (chronic transfusion)

### Special Products
**Irradiated:**
- Prevents TA-GVHD
- For immunocompromised, intrauterine transfusions

**CMV negative:**
- For CMV-negative immunocompromised patients
- Pregnant women

**Washed:**
- Removes plasma proteins
- For severe allergic reactions

**Phenotypically matched:**
- For sickle cell patients
- Reduces alloimmunization

## Hemoglobinopathy Management

### Sickle Cell Disease - Advanced
**Disease-modifying therapy:**
- Hydroxyurea (proven benefit, increases Hb F)
- L-glutamine (reduces sickling)
- Crizanlizumab (reduces vaso-occlusive crises)
- Voxelotor (improves hemolysis)
- Gene therapy trials (curative potential)

**Transfusion guidelines:**
- Simple vs exchange transfusion
- Indications: stroke, acute chest, priapism, pre-operative
- Alloimmunization risk (phenotypically matched blood)
- Iron overload monitoring

**HSCT:**
- Curative for eligible patients
- Matched sibling donor preferred
- Reduced intensity conditioning expanding eligibility

### Thalassemia Management
**Transfusion:**
- Hypertransfusion regimen for major
- Target pre-transfusion Hb 9-10.5
- Iron chelation essential

**Chelation agents:**
- Deferoxamine (subcutaneous infusion)
- Deferasirox (oral)
- Deferiprone (oral)
- Monitor ferritin, liver MRI (T2*), cardiac MRI

**Curative therapy:**
- Allogeneic HSCT
- Gene therapy (investigational)

## Iron Overload

**Causes:**
- Hereditary hemochromatosis (HFE mutations)
- Transfusion-dependent anemias
- Ineffective erythropoiesis

**Complications:**
- Cirrhosis, hepatocellular carcinoma
- Cardiomyopathy, arrhythmias
- Diabetes
- Hypogonadism
- Arthropathy
- Bronze skin

**Diagnosis:**
- Elevated ferritin
- Elevated transferrin saturation (>45%)
- MRI liver/heart (iron quantification)
- Liver biopsy (gold standard)

**Treatment:**
- Phlebotomy (hereditary hemochromatosis)
- Chelation (transfusional iron overload)
- Avoid vitamin C (increases iron absorption)

## Paroxysmal Nocturnal Hemoglobinuria (PNH)

**Pathophysiology:**
- PIGA mutation -> deficiency of GPI-anchored proteins
- CD55, CD59 deficiency -> complement-mediated hemolysis
- Bone marrow failure component

**Clinical:**
- Hemolysis, hemoglobinuria (morning)
- Thrombosis (atypical sites)
- Bone marrow failure
- Smooth muscle dystonias

**Diagnosis:**
- Flow cytometry for GPI-anchored proteins
- FLAER test

**Treatment:**
- Eculizumab or ravulizumab (C5 inhibitors)
- Pegcetacoplan (C3 inhibitor)
- Anticoagulation for thrombosis
- Bone marrow transplant for marrow failure

## Rare Anemias

**Hereditary spherocytosis:**
- Membrane protein defects (ankyrin, spectrin)
- Osmotic fragility test
- Splenectomy curative (delayed until age 5-6)

**G6PD deficiency:**
- X-linked
- Oxidative stress triggers hemolysis (fava beans, sulfa drugs, infections)
- Heinz bodies, bite cells
- Avoid triggers; supportive care

**Hereditary elliptocytosis:**
- Usually mild
- Membrane protein defects

**Fanconi anemia:**
- DNA repair defect
- Pancytopenia, congenital anomalies
- Cancer predisposition
- Androgens, G-CSF, transplant

**Diamond-Blackfan anemia:**
- Congenital pure red cell aplasia
- RPS19 mutations common
- Steroid-responsive
- Transfusion-dependent or transplant`,
      keyTerms: [
        { term: 'TA-GVHD', definition: 'Transfusion-associated graft-versus-host disease; prevented by irradiation' },
        { term: 'FLAER', definition: 'Fluorescent aerolysin; test for PNH' },
        { term: 'hypertransfusion', definition: 'Regular transfusion regimen to maintain high hemoglobin' },
        { term: 'GPI anchor', definition: 'Glycosylphosphatidylinositol anchor; absent in PNH' },
      ],
      clinicalNotes: 'Always use leukoreduced, irradiated products for HSCT and immunocompromised patients. Sickle cell patients need extended phenotype matching to prevent alloimmunization. Cardiac MRI T2* <20 ms indicates cardiac iron overload requiring chelation. PNH requires lifelong C5 inhibitor therapy unless transplanted.',
    },
    5: {
      level: 5,
      summary: 'Frontier hematology includes gene therapy for hemoglobinopathies showing curative potential, novel agents targeting ineffective erythropoiesis, hepcidin modulation for iron disorders, and advanced molecular diagnostics for rare and complex anemias.',
      explanation: `## Gene Therapy

### Sickle Cell Disease
**CRISPR/Cas9:**
- EDIT-301: Reactivate gamma-globin (Hb F)
- Exagamglogene autotemcel (Casgevy) approved
- Autologous HSCT with gene editing
- Potential cure without donor

**Lentiviral vectors:**
- Add anti-sickling beta-globin variant
- Lovotibeglogene autotemcel (Lyfgenia) approved
- Ongoing long-term follow-up

**Results:**
- High rates of transfusion independence
- Reduced vaso-occlusive crises
- Early but promising data

### Beta-Thalassemia
**Betibeglogene autotemcel (Zynteglo):**
- Lentiviral addition of functional beta-globin
- Approved for transfusion-dependent patients
- Eliminates need for transfusions in majority

**Gene editing:**
- Similar approaches to sickle cell
- Reactivate Hb F production
- Trials ongoing

## Novel Therapeutics

### Hepcidin Modulation
**Rationale:**
- Central regulator of iron metabolism
- Dysregulated in many anemias

**Luspatercept:**
- TGF-beta superfamily inhibitor
- Improves erythroid maturation
- Approved for MDS and beta-thalassemia
- Reduces transfusion burden

**Hepcidin agonists:**
- For iron overload disorders
- Rusfertide (PTG-300) in trials

**Hepcidin antagonists:**
- For anemia of chronic disease/inflammation
- Improve iron availability

### Pyruvate Kinase Deficiency
**Mitapivat:**
- First approved therapy
- Allosteric activator of pyruvate kinase
- Reduces hemolysis
- Oral, well-tolerated

### Other Targets
**Sotatercept:**
- Activin receptor fusion protein
- For pulmonary hypertension (also being studied in anemia)

**Erythroid maturation agents:**
- Multiple agents in development
- Target ineffective erythropoiesis

## Advanced Diagnostics

### Next-Generation Sequencing
**Panel testing:**
- Rapid diagnosis of inherited anemias
- Targeted gene panels
- Whole exome/genome for undiagnosed cases

**Applications:**
- Hemoglobinopathy diagnosis
- Hereditary hemolytic anemias
- Bone marrow failure syndromes
- MDS molecular profiling

### Single-Cell Analysis
**Bone marrow characterization:**
- Clonal heterogeneity in MDS
- Residual disease detection
- Microenvironment analysis

### Metabolomics
- Iron metabolism profiling
- Erythroid cell metabolism
- Biomarker discovery

## Personalized Medicine

### Pharmacogenomics
**Clopidogrel metabolism:**
- CYP2C19 variants affect response
- Relevance for cardiovascular patients with anemia

**Warfarin dosing:**
- VKORC1, CYP2C9 variants
- Important for thrombotic anemias

### Iron Management
**Individualized dosing:**
- Iron absorption genetics
- Hepcidin-guided therapy
- Avoid unnecessary supplementation

### Transfusion Medicine
**Precision matching:**
- Extended antigen typing
- Genotyping for difficult patients
- Reduce alloimmunization

## Future Directions

### In Vitro Erythropoiesis
**Cultured red blood cells:**
- Laboratory-grown RBCs
- Universal donor type
- Rare blood type production
- Clinical trials ongoing

### Artificial Oxygen Carriers
**Hemoglobin-based:**
- Blood substitutes
- Emergency use potential
- Challenges: vasoactivity, kidney toxicity

**Perfluorocarbons:**
- Synthetic oxygen carriers
- Limited clinical use to date

### Regenerative Medicine
**iPSC-derived therapies:****
- Patient-specific red blood cells
- Disease modeling
- Drug screening platforms

**Bone marrow niche engineering:**
- Improve transplantation
- Support erythropoiesis

### Global Health
**Anemia burden:**
- 1.5 billion people affected worldwide
- Iron deficiency predominant
- Malaria, helminths contribute

**Interventions:**
- Fortification programs
- Supplementation
- Infection control
- Point-of-care diagnostics`,
      keyTerms: [
        { term: 'gene therapy', definition: 'Treatment using genetic modification to correct disease' },
        { term: 'CRISPR', definition: 'Gene editing technology used in sickle cell therapy' },
        { term: 'luspatercept', definition: 'TGF-beta inhibitor improving erythroid maturation' },
        { term: 'mitapivat', definition: 'Pyruvate kinase activator for PK deficiency' },
      ],
      clinicalNotes: 'Gene therapy represents a paradigm shift for hemoglobinopathies. Casgevy and Lyfgenia are first CRISPR and lentiviral gene therapies approved for sickle cell. Hepcidin modulation offers new approaches to iron disorders. NGS panels essential for diagnosing rare inherited anemias.',
    },
  },

  media: [
    {
      id: 'anemia-mcv-classification',
      type: 'diagram',
      filename: 'anemia-mcv-diagram.svg',
      title: 'Anemia Classification by MCV',
      description: 'Diagnostic approach based on mean corpuscular volume',
    },
  ],

  citations: [
    {
      id: 'asha-anemia-2020',
      type: 'article',
      title: 'American Society of Hematology Self-Assessment Program: Anemia',
      source: 'ASH Education Program',
    },
  ],

  crossReferences: [
    { targetId: 'condition-iron-deficiency', targetType: 'condition', relationship: 'related', label: 'Iron Deficiency' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['hematology', 'internal medicine'],
    keywords: ['anemia', 'hemoglobin', 'iron', 'hemolysis', 'transfusion'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default anemia;
