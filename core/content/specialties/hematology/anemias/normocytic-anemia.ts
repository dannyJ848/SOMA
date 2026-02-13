import type { EducationalContent } from '../../../types';

export const normocyticAnemia: EducationalContent = {
  id: 'normocytic-anemia',
  type: 'condition',
  name: 'Normocytic Anemia',
  alternateNames: ['Anemia of Chronic Disease', 'Hemolytic Anemia', 'Acute Blood Loss Anemia', 'Aplastic Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'Normocytic anemia is when red blood cells are normal in size but there are not enough of them, often due to chronic illness or blood loss.',
      explanation: `Normocytic anemia is a type of anemia where the red blood cells are normal in size but the person does not have enough of them. Think of it like having the right number of delivery trucks, but some of them are missing from the fleet.

This type of anemia commonly happens when someone has been sick for a long time with conditions like kidney disease, arthritis, or infections. The body has trouble making enough new blood cells when it is fighting illness. It can also happen after sudden blood loss from an injury or surgery.

People with this condition feel tired and weak because their blood cannot carry enough oxygen to their body. The treatment depends on what is causing the anemia - sometimes treating the underlying illness helps, and sometimes other treatments like medicine or blood transfusions are needed.`,
      keyTerms: [
        { term: 'normocytic', definition: 'Having normal-sized cells; in this case, red blood cells of normal size' },
        { term: 'red blood cells', definition: 'Cells that carry oxygen throughout your body' },
        { term: 'chronic illness', definition: 'A health condition that lasts for a long time, often years' }
      ],
      analogies: [
        'Normocytic anemia is like having a parking lot with normal-sized cars, but half the spaces are empty',
        'It is like a bakery making the right size cookies but not making enough to feed everyone'
      ],
      examples: [
        'Someone with long-term kidney disease may develop normocytic anemia because their kidneys do not make enough hormone to tell the bone marrow to make red blood cells',
        'A person who loses blood during surgery may have normocytic anemia while their body works to replace the lost cells'
      ]
    },
    2: {
      level: 2,
      summary: 'Normocytic anemia is defined by normal red blood cell size (MCV 80-100 fL) with reduced hemoglobin, commonly due to chronic disease, blood loss, hemolysis, or bone marrow failure.',
      explanation: `Normocytic anemia is characterized by a mean corpuscular volume (MCV) between 80-100 femtoliters, indicating that individual red blood cells are of normal size, but the absolute number of red blood cells or hemoglobin concentration is decreased. This distinguishes it from microcytic (small cells) and macrocytic (large cells) anemias.

The differential diagnosis is traditionally categorized using the reticulocyte count:

High reticulocyte count (bone marrow responding appropriately):
- Acute blood loss: Trauma, surgery, gastrointestinal bleeding
- Hemolytic anemia: Autoimmune, hereditary spherocytosis, G6PD deficiency, sickle cell disease

Low reticulocyte count (inadequate bone marrow response):
- Anemia of chronic disease (anemia of inflammation): CKD, rheumatoid arthritis, chronic infections, cancer
- Aplastic anemia: Bone marrow failure from toxins, radiation, autoimmune destruction
- Pure red cell aplasia: Selective loss of red blood cell production
- Myelophthisic anemia: Bone marrow infiltration by cancer or fibrosis

Anemia of chronic disease is the most common cause in hospitalized patients. The pathophysiology involves decreased erythropoietin response, direct inhibition of erythropoiesis by inflammatory cytokines, and altered iron metabolism through hepcidin elevation.`,
      keyTerms: [
        { term: 'MCV (Mean Corpuscular Volume)', definition: 'Measurement of average red blood cell size, 80-100 fL is normal range' },
        { term: 'reticulocyte count', definition: 'Percentage of immature red blood cells; indicates bone marrow activity' },
        { term: 'hemolysis', definition: 'The destruction or breakdown of red blood cells' },
        { term: 'erythropoietin', definition: 'Hormone produced by kidneys that stimulates red blood cell production' },
        { term: 'bone marrow', definition: 'The spongy tissue inside bones where blood cells are produced' }
      ],
      analogies: [
        'The reticulocyte count is like checking if a factory is working overtime - high count means the factory is trying to catch up, low count means the factory is broken or shut down',
        'Normocytic anemia with low reticulocytes is like a car factory with all the right equipment but no raw materials or workers'
      ],
      examples: [
        'A 65-year-old with rheumatoid arthritis and hemoglobin of 9.2 g/dL, normal MCV, and reticulocyte count of 0.5% - anemia of chronic disease',
        'A patient with jaundice, dark urine, hemoglobin 7.8 g/dL, and reticulocyte count of 12% - hemolytic anemia'
      ]
    },
    3: {
      level: 3,
      summary: 'Normocytic anemia pathophysiology involves either increased red blood cell destruction/loss with appropriate marrow compensation, or decreased production due to cytokine-mediated suppression, renal insufficiency, or marrow failure.',
      explanation: `Normocytic anemia represents a heterogeneous group of disorders unified by preservation of normal red blood cell volume but reduced oxygen-carrying capacity. The diagnostic framework centers on the reticulocyte production index (RPI), which corrects the reticulocyte count for the degree of anemia and maturation time in peripheral blood.

RPI greater than 2 indicates appropriate marrow response to hemolysis or blood loss:

Hemolytic anemias involve premature red blood cell destruction, classified by mechanism:
- Intrinsic defects: Membrane abnormalities (hereditary spherocytosis, elliptocytosis), enzyme deficiencies (G6PD, pyruvate kinase), hemoglobinopathies (sickle cell, unstable hemoglobins)
- Extrinsic factors: Autoimmune hemolysis (warm IgG vs cold IgM), microangiopathic processes (TTP, HUS, DIC), infection (malaria, clostridia), chemical/toxic injury

Acute blood loss initially presents with normocytic indices because both red cells and plasma are lost proportionally. Over 24-72 hours, hemodilution from fluid shifts reveals the true degree of anemia.

RPI less than 2 indicates hypoproliferative states:

Anemia of chronic disease (anemia of inflammation) involves multiple mechanisms:
- Reduced erythropoietin production and end-organ resistance
- Direct suppression of erythroid progenitors by IL-6, IL-1, TNF-alpha
- Hepcidin-mediated iron sequestration (functional iron deficiency)
- Reduced erythrocyte lifespan

Renal failure causes anemia primarily through erythropoietin deficiency. The kidney produces 90% of circulating erythropoietin, and nephron loss directly correlates with anemia severity.`,
      keyTerms: [
        { term: 'reticulocyte production index', definition: 'Corrected reticulocyte count accounting for anemia severity and peripheral maturation time' },
        { term: 'hemoglobinopathy', definition: 'Genetic disorder affecting hemoglobin structure or production' },
        { term: 'microangiopathic hemolytic anemia', definition: 'Red cell destruction from mechanical damage in abnormal microvasculature' },
        { term: 'TTP/HUS', definition: 'Thrombotic thrombocytopenic purpura/Hemolytic uremic syndrome; microangiopathic disorders' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation; pathologic clotting causing hemolysis' }
      ]
    },
    4: {
      level: 4,
      summary: 'Systematic evaluation of normocytic anemia requires reticulocyte count, peripheral smear examination, hemolysis markers (LDH, haptoglobin, bilirubin), Coombs test, and assessment for underlying chronic disease or marrow disorders.',
      explanation: `The diagnostic approach to normocytic anemia begins with a complete history including symptoms of chronic disease, medication use, family history, and evidence of bleeding. Physical examination assesses for pallor, jaundice, lymphadenopathy, splenomegaly, and signs of systemic disease.

Laboratory evaluation algorithm:

Step 1: Confirm normocytic indices (MCV 80-100 fL)
Step 2: Reticulocyte count and RPI

High RPI (>2) - hemolysis or blood loss workup:
- Peripheral smear: Schistocytes (MAHA), spherocytes (immune/autoimmune), bite cells (oxidative), sickle cells
- Hemolysis markers: elevated LDH, indirect bilirubin, reduced haptoglobin
- Coombs test (direct antiglobulin test): Positive in autoimmune hemolytic anemia
- Hemoglobin electrophoresis: Sickle cell, thalassemia intermedia
- Osmotic fragility: Hereditary spherocytosis
- G6PD assay: Avoid testing during acute hemolysis (false normal)

Low RPI (<2) - hypoproliferative workup:
- Creatinine/eGFR: Renal function assessment
- Ferritin, TIBC, serum iron: Iron studies (may show combined deficiency and anemia of chronic disease)
- TSH: Hypothyroidism can cause normocytic anemia
- Vitamin B12/folate: Rule out early deficiency before macrocytosis develops
- Bone marrow biopsy: If aplasia, infiltration, or myelodysplasia suspected

Anemia of chronic disease typically shows:
- Normal or elevated ferritin
- Low/normal serum iron
- Low TIBC
- Transferrin saturation 10-20%
- Elevated inflammatory markers (CRP, ESR)

Hemolytic anemia patterns:
- Intravascular hemolysis: Low haptoglobin, hemoglobinuria, hemosiderinuria
- Extravascular hemolosis (splenic): Elevated indirect bilirubin, splenomegaly`,
      keyTerms: [
        { term: 'direct Coombs test', definition: 'Detects antibodies bound to patient red blood cells; positive in autoimmune hemolytic anemia' },
        { term: 'haptoglobin', definition: 'Plasma protein that binds free hemoglobin; decreased in hemolysis' },
        { term: 'schistocytes', definition: 'Fragmented red blood cells seen in microangiopathic hemolytic anemia' },
        { term: 'osmotic fragility test', definition: 'Measures red blood cell resistance to hemolysis in hypotonic saline' }
      ],
      clinicalNotes: `Clinical pearls for normocytic anemia:

1. Always check the reticulocyte count first - it determines the diagnostic pathway
2. Anemia of chronic disease and iron deficiency commonly coexist; ferritin may be misleadingly normal
3. Acute bleeding may not show anemia initially due to hemoconcentration; recheck in 24-48 hours
4. G6PD deficiency testing should wait 2-3 months after acute hemolysis - young cells have normal enzyme levels
5. Elevated LDH with normal haptoglobin suggests tissue destruction, not hemolysis

Treatment approaches:
- Anemia of chronic disease: Treat underlying condition; consider erythropoietin stimulating agents (ESAs) if CKD-related; IV iron if iron deficiency component
- Hemolytic anemia: Immunosuppression for autoimmune (steroids, rituximab), splenectomy for refractory cases or hereditary spherocytosis
- Aplastic anemia: Immunosuppression or stem cell transplantation
- Acute blood loss: Volume resuscitation, identify bleeding source, transfuse based on hemodynamics not numbers alone

Transfusion thresholds:
- Stable patients: Hb <7 g/dL
- Cardiovascular disease: Hb <8 g/dL
- Active bleeding: Based on hemodynamic instability`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include the erythroferrone-hepcidin axis, flow cytometry for PNH detection, next-generation sequencing for congenital hemolytic anemias, and novel therapeutics for refractory anemia of inflammation.',
      explanation: `Contemporary research has elucidated novel regulatory pathways and therapeutic targets in normocytic anemia. The erythroferrone (ERFE)-hepcidin axis provides negative feedback where expanding erythropoiesis suppresses hepcidin to enhance iron availability. ERFE is produced by erythroblasts in response to erythropoietin and binds BMP receptors to block hepcidin transcription.

Paroxysmal nocturnal hemoglobinuria (PNH) represents an acquired clonal disorder of hematopoietic stem cells with PIGA mutations, leading to deficiency of GPI-anchored proteins (CD55, CD59). Diagnosis relies on flow cytometry demonstrating absent or severely reduced expression of GPI-anchored proteins on granulocytes, monocytes, and erythrocytes. Eculizumab and ravulizumab, C5 complement inhibitors, have transformed PNH treatment.

Congenital hemolytic anemias benefit from next-generation sequencing panels:
- Membrane disorders: ANK1, SPTB, SLC4A1 (hereditary spherocytosis/elliptocytosis)
- Enzyme defects: G6PD, PKLR, HK1
- Hemoglobinopathies: HBB, HBA1, HBA2

Novel therapeutics for anemia of inflammation:
- Anti-hepcidin antibodies and hepcidin antagonists restore iron availability
- HIF prolyl hydroxylase inhibitors (roxadustat, daprodustat) provide oral alternatives to ESAs by stabilizing HIF-2alpha and inducing endogenous erythropoietin while suppressing hepcidin
- ActRIIB-Fc fusion proteins (sotatercept) trap TGF-beta superfamily ligands to enhance erythropoiesis

Myelodysplastic syndromes causing normocytic anemia show recurrent mutations in:
- Spliceosome: SF3B1, SRSF2, U2AF1
- DNA methylation: TET2, DNMT3A, IDH1/2
- Chromatin modification: ASXL1, EZH2
- Signal transduction: JAK2, NRAS, CBL

Risk stratification uses the IPSS-R (Revised International Prognostic Scoring System) incorporating cytogenetics, bone marrow blast percentage, and cytopenias. Hypomethylating agents (azacitidine, decitabine) are first-line for higher-risk disease.`,
      keyTerms: [
        { term: 'erythroferrone', definition: 'Hormone produced by erythroblasts that suppresses hepcidin to increase iron availability' },
        { term: 'PIGA', definition: 'Gene encoding phosphatidylinositol glycan class A; mutations cause PNH' },
        { term: 'GPI-anchored proteins', definition: 'Proteins attached to cell membrane via glycosylphosphatidylinositol anchor; CD55 and CD59 protect against complement' },
        { term: 'HIF prolyl hydroxylase inhibitors', definition: 'Drugs that stabilize HIF and stimulate erythropoiesis independent of exogenous EPO' },
        { term: 'IPSS-R', definition: 'Revised International Prognostic Scoring System for myelodysplastic syndromes' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Paroxysmal nocturnal hemoglobinuria management:
- Flow cytometry on granulocytes most sensitive (5-color panel: CD24, CD14, CD16, CD55, CD59)
- Screen all patients with aplastic anemia for PNH clone (10-15% association)
- Thrombosis prophylaxis critical; PNH patients have high risk of hepatic, cerebral, and abdominal thrombosis
- Ravulizumab offers 8-week dosing vs 2-week for eculizumab

Hemolytic anemia advances:
- Mitapivat (pyruvate kinase activator) approved for PK deficiency
- Voxelotor (HbS polymerization inhibitor) for sickle cell disease
- Gene therapy trials for beta-thalassemia and sickle cell showing curative potential

Anemia of CKD considerations:
- HIF-PHIs offer oral alternative to ESAs with reduced cardiovascular risk in some trials
- Iron deficiency common despite elevated ferritin; TSAT <20% suggests functional deficiency
- Balance ESA therapy avoiding Hb >11.5 g/dL (increased thrombotic risk)

MDS treatment evolution:
- Luspatercept approved for transfusion-dependent MDS with ring sideroblasts
- Ivosidenib (IDH1 inhibitor) for IDH1-mutated MDS
- Venetoclax combinations showing promise in higher-risk disease
- Allogeneic transplant remains only curative option for eligible patients`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapter 36: Normocytic Anemias' },
    { id: '2', type: 'textbook', title: 'Williams Hematology', authors: ['Kaushansky K', 'Lichtman MA', 'Prchal JT'], source: 'McGraw-Hill', chapter: 'Chapter 42: Anemia of Chronic Disease' }
  ],
  crossReferences: [
    { targetId: 'hemolytic-anemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'aplastic-anemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'anemia-of-chronic-disease', targetType: 'condition', relationship: 'related' }
  ],
  tags: {
    systems: ['hematology', 'blood'],
    topics: ['anemia', 'hemolysis', 'bone marrow disorders'],
    keywords: ['normocytic', 'MCV', 'reticulocyte', 'hemolysis', 'anemia of chronic disease'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
