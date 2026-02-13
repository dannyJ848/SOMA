import { EducationalContent } from '../types';

export const cbcInterpretation: EducationalContent = {
  id: 'hematology-cbc-interpretation',
  type: 'concept',
  name: 'CBC Interpretation',
  alternateNames: ['Complete Blood Count', 'Blood Count Analysis', 'Full Blood Count', 'FBC'],
  levels: {
    1: {
      level: 1,
      summary: 'A complete blood count (CBC) is a common blood test that measures the different types of cells in your blood.',
      explanation: 'A CBC tells doctors about the three main types of cells in your blood. Red blood cells (RBCs) carry oxygen throughout your body—if you don\'t have enough, it\'s called anemia, and you might feel tired. White blood cells (WBCs) fight infections—too few means you might get sick easily, too many could mean infection or sometimes more serious problems. Platelets help your blood clot to stop bleeding—low platelets mean you might bruise or bleed more easily. The test also measures hemoglobin (the protein in red cells that carries oxygen) and hematocrit (what percentage of your blood is red cells). Doctors use this test to check your overall health, look for problems, or monitor how treatments are working. Getting a CBC is simple—just a small blood draw from your arm.',
      keyTerms: [
        { term: 'Red blood cells', definition: 'Cells that carry oxygen to all parts of your body' },
        { term: 'White blood cells', definition: 'Cells that fight infections and disease' },
        { term: 'Platelets', definition: 'Small cell fragments that help stop bleeding' },
        { term: 'Hemoglobin', definition: 'The protein inside red blood cells that carries oxygen' },
        { term: 'Hematocrit', definition: 'The percentage of your blood that is red blood cells' },
      ],
    },
    2: {
      level: 2,
      summary: 'The CBC quantifies red blood cells, white blood cells, and platelets with associated indices, providing essential information for diagnosing blood disorders, infections, and systemic diseases.',
      explanation: 'The CBC includes multiple parameters. RBC indices: RBC count, hemoglobin (Hgb), hematocrit (Hct), and red cell indices (MCV—cell size, MCH—hemoglobin per cell, MCHC—hemoglobin concentration, RDW—size variation). Anemia classification uses MCV: microcytic (MCV <80, iron deficiency, thalassemia), normocytic (MCV 80-100, chronic disease, acute blood loss), macrocytic (MCV >100, B12/folate deficiency, liver disease). The WBC count and differential identifies neutrophils (bacterial infection fighters), lymphocytes (viral response, immune function), monocytes (chronic inflammation), eosinophils (allergies, parasites), and basophils (rare elevation). Platelet count and mean platelet volume (MPV) complete the picture. Reference ranges vary by age and sex. Abnormalities prompt further investigation: low counts (cytopenias) suggest production problems or destruction; high counts may indicate infection, inflammation, or malignancy.',
      keyTerms: [
        { term: 'MCV', definition: 'Mean Corpuscular Volume, measures average red cell size' },
        { term: 'RDW', definition: 'Red cell Distribution Width, measures variation in red cell size' },
        { term: 'WBC differential', definition: 'Breakdown of different white blood cell types' },
        { term: 'Neutrophils', definition: 'Most common white blood cells, fight bacterial infections' },
        { term: 'Cytopenia', definition: 'Lower than normal count of blood cells' },
      ],
    },
    3: {
      level: 3,
      summary: 'CBC interpretation integrates quantitative values with morphologic assessment and clinical context to generate diagnostic hypotheses and guide further evaluation.',
      explanation: 'Systematic CBC interpretation follows structured approach. Anemia evaluation: determine if microcytic, normocytic, or macrocytic; assess reticulocyte count (production vs. destruction/loss); iron studies for microcytic; B12/folate for macrocytic. High RDW suggests mixed picture or developing deficiency. Leukocytosis: left shift (bands, earlier forms) suggests bacterial infection; lymphocytosis in viral illness or lymphoproliferative disorders; eosinophilia in allergies, parasites, drugs, or malignancy. Leukopenia: neutropenia (<1500) increases infection risk; agranulocytosis (<500) is medical emergency; causes include drugs, infections, autoimmune, bone marrow failure. Thrombocytopenia: verify not pseudothrombocytopenia (EDTA clumping—check citrate tube); causes include ITP, TTP/HUS, DIC, drugs, liver disease, hypersplenism, marrow disorders. Thrombocytosis: reactive (infection, inflammation, iron deficiency) vs. primary (myeloproliferative neoplasms). Pancytopenia (all lines low) suggests marrow failure, infiltration, or peripheral destruction. Peripheral blood smear review adds morphologic context.',
      keyTerms: [
        { term: 'Reticulocyte count', definition: 'Measures immature red cells, indicates bone marrow response' },
        { term: 'Left shift', definition: 'Increased immature neutrophils indicating acute bacterial infection' },
        { term: 'Pancytopenia', definition: 'Reduction in all three blood cell lineages' },
        { term: 'Pseudothrombocytopenia', definition: 'Falsely low platelet count from in-vitro clumping' },
        { term: 'Agranulocytosis', definition: 'Severe neutropenia with very high infection risk' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced CBC interpretation identifies patterns suggesting specific diagnoses, integrates automated analyzer data with smear findings, and recognizes flags requiring urgent action.',
      explanation: 'Pattern recognition accelerates diagnosis. Leukoerythroblastic picture (nucleated RBCs plus immature WBCs) suggests marrow infiltration (metastatic cancer, myelofibrosis) or severe stress. Microangiopathic hemolytic anemia (schistocytes on smear plus anemia plus thrombocytopenia) is TTP/HUS until proven otherwise—emergency. Pancytopenia with macrocytosis: consider MDS, B12 deficiency, alcohol, liver disease. Isolated thrombocytosis with iron deficiency: treat iron deficiency first, may normalize. Blast cells on differential: concern for acute leukemia, urgent hematology referral. Modern analyzers provide additional parameters: immature granulocyte count, reticulocyte hemoglobin (CHr) for early iron deficiency, immature platelet fraction for thrombopoiesis assessment. Flagged specimens require smear review for verification. Delta checks (comparison to prior results) identify specimen mix-ups or acute changes. Critical values require immediate communication: severe anemia (<7 g/dL), severe thrombocytopenia (<20K), severe neutropenia (<500), markedly elevated WBC (>30K or any blasts).',
      keyTerms: [
        { term: 'Leukoerythroblastic', definition: 'Pattern with nucleated red cells and immature white cells' },
        { term: 'Schistocytes', definition: 'Fragmented red cells indicating microangiopathic hemolysis' },
        { term: 'Blast cells', definition: 'Immature cells concerning for leukemia when in peripheral blood' },
        { term: 'CHr', definition: 'Reticulocyte hemoglobin, early marker of iron availability' },
        { term: 'Delta check', definition: 'Comparison with previous results to detect errors or acute changes' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert CBC interpretation synthesizes analyzer data, morphology, and clinical context to formulate differential diagnoses, recognizes artifacts and pitfalls, and integrates findings with targeted additional testing.',
      explanation: 'Clinical mastery of CBC interpretation requires integration across domains. Artifacts to recognize: EDTA-dependent pseudothrombocytopenia (check citrate tube); cold agglutinins spuriously elevate MCV and lower RBC count (rewarm specimen); lipemia and hyperbilirubinemia affect hemoglobin measurement; very high WBC can cause pseudohypercalcemia. Morphologic correlates: target cells (liver disease, thalassemia, hemoglobinopathy); spherocytes (autoimmune hemolytic anemia, hereditary spherocytosis); sickle cells; teardrop cells (myelofibrosis); Howell-Jolly bodies (asplenia); hypersegmented neutrophils (B12/folate deficiency); Döhle bodies (infection, toxic granulation); Auer rods (acute myeloid leukemia). Integrated workup: anemia—reticulocyte index, iron studies or B12/folate based on MCV, peripheral smear, consider hemolysis labs if appropriate; unexplained cytopenia(s)—peripheral smear review, consider bone marrow if persistent. Cytopenias plus blast cells—urgent bone marrow for acute leukemia. Thrombocytosis—check iron studies, inflammatory markers, consider JAK2 if persistent and reactive causes excluded. Communicate critical findings directly to ordering provider with recommendations for further workup.',
      keyTerms: [
        { term: 'Cold agglutinins', definition: 'Antibodies causing red cell clumping at low temperatures, artifacts on CBC' },
        { term: 'Target cells', definition: 'Red cells with central dense area, seen in liver disease, thalassemia' },
        { term: 'Auer rods', definition: 'Crystallized granules pathognomonic for acute myeloid leukemia' },
        { term: 'Reticulocyte index', definition: 'Corrected reticulocyte count assessing marrow response adequacy' },
        { term: 'Howell-Jolly bodies', definition: 'Nuclear remnants in red cells indicating absent/nonfunctional spleen' },
      ],
      clinicalNotes: 'Always review previous CBCs for context—new cytopenias more concerning than chronic stable values. Request peripheral smear for unexplained abnormalities, new cytopenias, or suspected hematologic malignancy. Iron deficiency can mask thalassemia trait (MCV rises with iron repletion). New macrocytosis: check B12, folate, TSH, consider medications (methotrexate, hydroxyurea). Unexplained leukocytosis: repeat to confirm, consider recent steroid use, smoking, stress. Persistent unexplained cytopenias warrant hematology referral and likely bone marrow biopsy. Document clinical indication for CBC to aid interpretation. Critical value policy should be followed with direct communication. In emergency settings, verify specimen integrity if results unexpected. Correlate with clinical picture—mildly abnormal CBC in asymptomatic patient may warrant only monitoring.',
    },
  },
  media: [],
  citations: [
    'George-Gay B, Parker K. Understanding the complete blood count with differential. J Perianesth Nurs. 2003;18(2):96-117.',
    'Buttarello M, Plebani M. Automated blood cell counts: state of the art. Am J Clin Pathol. 2008;130(1):104-116.',
    'Bain BJ. Diagnosis from the blood smear. N Engl J Med. 2005;353(5):498-507.',
  ],
  crossReferences: ['hematology-blood-smear', 'hematology-bone-marrow-biopsy', 'hematology-leukemia'],
  tags: {
    systems: ['hematology'],
    topics: ['laboratory medicine', 'CBC', 'blood count', 'diagnosis'],
    keywords: ['CBC', 'hemoglobin', 'white blood cells', 'platelets', 'anemia', 'differential'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
