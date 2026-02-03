import type { EducationalContent } from '../../../types';

export const microcyticAnemia: EducationalContent = {
  id: 'microcytic-anemia',
  type: 'condition',
  name: 'Microcytic Anemia',
  alternateNames: ['Iron Deficiency Anemia', 'Thalassemia', 'Anemia of Chronic Disease', 'Sideroblastic Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'Microcytic anemia is a condition where red blood cells are smaller than normal, usually caused by not having enough iron to make proper blood cells.',
      explanation: `Microcytic anemia happens when your body makes red blood cells that are too small. Think of red blood cells like tiny delivery trucks that carry oxygen around your body. In microcytic anemia, these trucks are smaller than they should be, so they cannot carry as much oxygen. This means your body does not get enough oxygen to work properly.

The most common cause is not having enough iron. Your body needs iron to make healthy red blood cells. Without enough iron, the cells stay small and pale. Other causes include problems with how your body uses iron, or inherited conditions like thalassemia where the blood cells are made incorrectly from birth.

People with microcytic anemia often feel tired, look pale, and might get short of breath when they exercise. Doctors can find this problem with a simple blood test that measures the size of red blood cells.`,
      keyTerms: [
        { term: 'red blood cells', definition: 'The cells in your blood that carry oxygen to all parts of your body' },
        { term: 'iron', definition: 'A mineral found in foods like meat and spinach that your body needs to make blood' },
        { term: 'anemia', definition: 'A condition where you do not have enough healthy red blood cells' }
      ],
      analogies: [
        'Red blood cells are like delivery trucks - microcytic anemia means the trucks are too small to carry enough packages (oxygen)',
        'Iron is like the factory equipment needed to build proper-sized trucks - without it, the factory makes mini trucks instead'
      ],
      examples: [
        'A teenager who eats mostly junk food might not get enough iron and develop microcytic anemia',
        'A woman with heavy menstrual periods loses iron and might develop this type of anemia'
      ]
    },
    2: {
      level: 2,
      summary: 'Microcytic anemia is characterized by red blood cells smaller than normal (MCV less than 80 fL), most commonly due to iron deficiency, thalassemia trait, or chronic disease.',
      explanation: `Microcytic anemia is identified when laboratory tests show a mean corpuscular volume (MCV) below 80 femtoliters, meaning the average red blood cell is smaller than normal. The small size directly reflects reduced hemoglobin content, as hemoglobin normally makes up about one-third of the red blood cell volume.

The differential diagnosis follows the mnemonic "TAILS": Thalassemia, Anemia of chronic disease, Iron deficiency, Lead poisoning, and Sideroblastic anemia. Iron deficiency remains the most common cause globally, often resulting from dietary insufficiency, chronic blood loss, or malabsorption.

Thalassemia represents a group of inherited disorders affecting hemoglobin chain synthesis. Unlike iron deficiency, thalassemia typically shows normal or elevated iron levels, helping distinguish these conditions. Anemia of chronic disease involves iron being trapped inside cells due to inflammation, making it unavailable for red blood cell production.

Clinical presentation includes pallor, fatigue, reduced exercise tolerance, and in severe cases, pica (craving non-food items like ice or dirt). Laboratory evaluation includes complete blood count with indices, iron studies (ferritin, serum iron, TIBC), and sometimes hemoglobin electrophoresis.`,
      keyTerms: [
        { term: 'MCV (Mean Corpuscular Volume)', definition: 'A measurement of the average size of red blood cells, reported in femtoliters (fL)' },
        { term: 'hemoglobin', definition: 'The iron-containing protein in red blood cells that carries oxygen' },
        { term: 'ferritin', definition: 'A protein that stores iron in the body; low levels indicate iron deficiency' },
        { term: 'TIBC (Total Iron Binding Capacity)', definition: 'A measure of how much iron can be bound by transferrin proteins in the blood' },
        { term: 'thalassemia', definition: 'An inherited blood disorder where the body makes less hemoglobin than normal' }
      ],
      analogies: [
        'MCV is like measuring the average size of balloons - microcytic means they are all under-inflated',
        'Iron deficiency is like a factory running out of raw materials - it cannot build full-sized products'
      ],
      examples: [
        'A 25-year-old vegetarian with heavy periods has ferritin of 8 ng/mL and MCV of 74 fL - classic iron deficiency',
        'A patient from Mediterranean ancestry with family history of anemia has low MCV but normal ferritin - likely thalassemia trait'
      ]
    },
    3: {
      level: 3,
      summary: 'Microcytic anemias result from impaired heme synthesis or globin chain production, with distinct pathophysiologic mechanisms differentiating iron deficiency, thalassemias, and sideroblastic anemias.',
      explanation: `Microcytic anemia encompasses conditions characterized by defective hemoglobin synthesis, resulting in reduced mean corpuscular volume (MCV <80 fL) and mean corpuscular hemoglobin (MCH <27 pg). The pathophysiology centers on either inadequate heme synthesis or impaired globin chain production.

Iron deficiency anemia develops through sequential stages: iron depletion (reduced ferritin), iron-deficient erythropoiesis (low serum iron, high TIBC), and finally anemia with microcytosis. The underlying mechanism involves insufficient iron for protoporphyrin incorporation into heme. Common etiologies include menstrual blood loss, gastrointestinal bleeding, malabsorption (celiac disease, post-gastrectomy), and increased demand (pregnancy).

Thalassemia syndromes result from quantitative deficiencies in alpha or beta globin chain synthesis. Alpha-thalassemia involves deletion or mutation of alpha-globin genes on chromosome 16, while beta-thalassemia involves point mutations in the beta-globin gene on chromosome 11. The pathophysiology includes ineffective erythropoiesis, hemolysis from unbalanced chain production, and iron overload from transfusion therapy.

Anemia of chronic disease (now called anemia of inflammation) involves hepcidin-mediated iron sequestration. Inflammatory cytokines increase hepcidin, blocking iron export from macrophages and enterocytes. This creates functional iron deficiency despite adequate total body iron stores.

Sideroblastic anemia represents defective protoporphyrin synthesis, often due to ALA synthase deficiency or mitochondrial dysfunction, causing iron accumulation in mitochondria forming ring sideroblasts.`,
      keyTerms: [
        { term: 'heme synthesis', definition: 'The biochemical pathway producing heme from glycine and succinyl-CoA, requiring iron for the final step' },
        { term: 'globin chains', definition: 'The protein components of hemoglobin; adult hemoglobin contains two alpha and two beta chains' },
        { term: 'hepcidin', definition: 'The master regulator of iron homeostasis that controls iron absorption and distribution' },
        { term: 'protoporphyrin', definition: 'The organic compound that combines with iron to form heme' },
        { term: 'ring sideroblasts', definition: 'Abnormal erythroblasts with iron-laden mitochondria forming a ring around the nucleus' }
      ]
    },
    4: {
      level: 4,
      summary: 'Microcytic anemias require systematic diagnostic evaluation using the Mentzer index, iron studies, and hemoglobin electrophoresis to differentiate iron deficiency from thalassemia trait and other causes.',
      explanation: `The diagnostic approach to microcytic anemia begins with the complete blood count revealing MCV <80 fL and typically reduced MCH. The red cell distribution width (RDW) provides crucial diagnostic information: elevated RDW suggests iron deficiency (mixed population of normal and microcytic cells), while normal RDW suggests thalassemia trait (uniformly microcytic cells).

The Mentzer index (MCV/RBC count) helps differentiate causes: values greater than 13 suggest iron deficiency, while values less than 13 suggest thalassemia. However, this has limitations in combined conditions or certain thalassemia variants.

Iron studies interpretation:
- Iron deficiency: low ferritin (<30 ng/mL), low serum iron, high TIBC, low transferrin saturation (<15%)
- Thalassemia trait: normal or elevated ferritin, normal iron studies
- Anemia of chronic disease: normal/high ferritin, low serum iron, low TIBC
- Sideroblastic anemia: elevated ferritin, elevated serum iron

Hemoglobin electrophoresis patterns:
- Beta-thalassemia trait: elevated HbA2 (3.5-8%), elevated HbF (1-5%)
- Alpha-thalassemia trait: normal electrophoresis (requires DNA testing)
- Sideroblastic anemia: no specific pattern

The iron deficiency workup must identify the underlying cause. In menstruating women, heavy menstrual bleeding is common. In men and postmenopausal women, gastrointestinal evaluation including endoscopy is essential to exclude malignancy, as iron deficiency may be the presenting sign of colon cancer.`,
      keyTerms: [
        { term: 'Mentzer index', definition: 'MCV divided by RBC count; used to differentiate iron deficiency from thalassemia' },
        { term: 'RDW (Red Cell Distribution Width)', definition: 'A measure of variation in red blood cell size; elevated in iron deficiency' },
        { term: 'transferrin saturation', definition: 'The percentage of transferrin that is bound to iron; calculated as (serum iron/TIBC) x 100' },
        { term: 'HbA2', definition: 'A minor hemoglobin component composed of two alpha and two delta chains; elevated in beta-thalassemia trait' }
      ],
      clinicalNotes: `Clinical pearls for microcytic anemia:

1. Never assume iron deficiency without confirming with ferritin - especially in men over 50 where GI malignancy must be excluded
2. Thalassemia trait patients are often misdiagnosed with iron deficiency and given unnecessary iron therapy
3. Combined iron deficiency and thalassemia trait can occur, making diagnosis challenging
4. Lead poisoning causes microcytic anemia by interfering with heme synthesis; check levels in children with pica or occupational exposure
5. Anemia of chronic disease typically has normocytic indices but can be microcytic in long-standing cases

Treatment considerations:
- Oral iron (ferrous sulfate 325mg TID) for iron deficiency; expect reticulocyte response in 1 week, hemoglobin rise in 2-4 weeks
- Continue iron for 3-6 months after hemoglobin normalizes to replenish stores
- IV iron for malabsorption, intolerance, or need for rapid repletion
- Thalassemia trait requires genetic counseling but no treatment`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts in microcytic anemia include next-generation sequencing for thalassemia variants, hepcidin-directed therapies for anemia of inflammation, and molecular mechanisms of iron homeostasis regulation.',
      explanation: `Contemporary understanding of microcytic anemia incorporates molecular diagnostics and targeted therapeutics. The iron regulatory network involves complex interactions between hepcidin, ferroportin, transferrin receptor 2, HFE protein, and hemojuvelin. Mutations in these pathways cause hereditary hemochromatosis or iron-refractory iron deficiency anemia (IRIDA).

IRIDA, caused by TMPRSS6 mutations, presents with microcytic hypochromic anemia unresponsive to oral iron. The defective matriptase-2 cannot suppress hepcidin, maintaining iron sequestration despite systemic deficiency. Diagnosis requires genetic testing, and treatment involves parenteral iron.

Next-generation sequencing has revolutionized thalassemia diagnosis, identifying novel mutations and complex rearrangements. Alpha-thalassemia results from deletions (--SEA, -alpha3.7, -alpha4.2) or non-deletional mutations. The cis versus trans configuration of alpha-globin gene deletions affects inheritance patterns and clinical severity.

Emerging therapeutics target the hepcidin-ferroportin axis:
- Anti-hepcidin antibodies for anemia of chronic disease
- Ferroportin stabilizers to enhance iron export
- HIF prolyl hydroxylase inhibitors stimulate erythropoietin while suppressing hepcidin

Sideroblastic anemias demonstrate genetic heterogeneity:
- X-linked: ALAS2 mutations (delta-aminolevulinic acid synthase 2)
- Autosomal recessive: SLC25A38 (glycine transporter)
- Mitochondrial: ABCB7 (iron-sulfur cluster biogenesis)
- Acquired: SF3B1 mutations in myelodysplastic syndromes

Anemia of chronic disease pathophysiology involves multiple cytokine pathways. IL-6 induces hepcidin, while IL-1beta and TNF-alpha directly suppress erythropoiesis. Understanding these mechanisms enables targeted biologic therapies.`,
      keyTerms: [
        { term: 'TMPRSS6', definition: 'Gene encoding matriptase-2; mutations cause IRIDA through hepcidin overexpression' },
        { term: 'ferroportin', definition: 'The only known cellular iron exporter; regulated by hepcidin binding and internalization' },
        { term: 'HIF prolyl hydroxylase inhibitors', definition: 'A new drug class that stabilizes HIF and stimulates erythropoiesis' },
        { term: 'SF3B1', definition: 'Splicing factor gene commonly mutated in MDS with ring sideroblasts' },
        { term: 'matriptase-2', definition: 'A transmembrane serine protease that cleaves hemojuvelin to suppress hepcidin' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Diagnostic algorithms:
1. Start with iron studies and hemoglobin electrophoresis for all microcytic anemias
2. Use next-generation sequencing for atypical thalassemia presentations or unclear genetic patterns
3. Consider bone marrow biopsy when sideroblastic anemia or MDS is suspected
4. Evaluate for concurrent B12/folate deficiency (dimorphic population) especially in elderly

Special populations:
- Pregnancy: physiologic anemia dilutes indices; ferritin remains most reliable iron marker
- Chronic kidney disease: functional iron deficiency common; TSAT <20% and ferritin <100 ng/mL guide iron therapy
- Inflammatory bowel disease: both iron deficiency (blood loss) and anemia of chronic disease coexist

Emerging treatments:
- Luspatercept (TGF-beta ligand trap) approved for beta-thalassemia and MDS-associated anemia
- Gene therapy trials for beta-thalassemia (betibeglogene autotemcel) show promise
- CRISPR-based editing of BCL11A enhancer to reactivate fetal hemoglobin synthesis

Research frontiers:
- Hepcidin-guided iron therapy to optimize dosing and avoid toxicity
- Microbiome manipulation to enhance iron absorption
- Biomarkers predicting response to various therapeutic interventions`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapter 37: Microcytic Hypochromic Anemias' },
    { id: '2', type: 'textbook', title: 'Williams Hematology', authors: ['Kaushansky K', 'Lichtman MA', 'Prchal JT'], source: 'McGraw-Hill', chapter: 'Chapter 43: Iron Deficiency and Overload' }
  ],
  crossReferences: [
    { targetId: 'iron-deficiency-anemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'thalassemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'anemia-of-chronic-disease', targetType: 'condition', relationship: 'related' }
  ],
  tags: {
    systems: ['hematology', 'blood'],
    topics: ['anemia', 'iron metabolism', 'hemoglobin disorders'],
    keywords: ['microcytic', 'MCV', 'iron deficiency', 'thalassemia', 'ferritin', 'heme synthesis'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
