import { EducationalContent } from '../types';

export const b12FolateDeficiency: EducationalContent = {
  id: 'hematology-b12-folate-deficiency',
  type: 'condition',
  name: 'Vitamin B12 and Folate Deficiency',
  alternateNames: ['Megaloblastic Anemia', 'Pernicious Anemia', 'Cobalamin Deficiency', 'Macrocytic Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'Vitamin B12 and folate are vitamins your body needs to make healthy red blood cells and keep your nerves working properly.',
      explanation: 'Your body needs vitamin B12 and folate (also called folic acid) to make DNA and healthy red blood cells. Without enough of these vitamins, your red blood cells grow too large and don\'t work properly. This causes anemia, making you feel tired and weak. B12 deficiency can also damage your nerves, causing numbness or tingling. B12 comes from animal foods like meat, fish, eggs, and dairy. Folate is found in leafy greens, beans, and fortified grains. Some people can\'t absorb B12 properly due to a condition called pernicious anemia. Vegetarians, vegans, and older adults are at higher risk for B12 deficiency. Pregnant women need extra folate to prevent birth defects. Treatment involves supplements or injections to replace the missing vitamins.',
      keyTerms: [
        { term: 'Vitamin B12', definition: 'A vitamin found in animal foods that helps make red blood cells and keeps nerves healthy' },
        { term: 'Folate', definition: 'A B vitamin found in leafy greens that helps cells grow and make DNA' },
        { term: 'Megaloblastic', definition: 'Describes red blood cells that are larger than normal due to vitamin deficiency' },
        { term: 'Pernicious anemia', definition: 'A condition where the body can\'t absorb B12 due to lack of stomach protein' },
      ],
      analogies: [
        'B12 and folate are like construction blueprints - without them, cells can\'t build themselves properly',
        'Think of B12 as the spark plug for your nerve cells - without it, nerves don\'t fire correctly',
      ],
      examples: [
        'A vegan who doesn\'t take B12 supplements may develop deficiency over several years',
        'A pregnant woman needs extra folate to help her baby\'s brain and spine develop properly',
      ],
    },
    2: {
      level: 2,
      summary: 'Vitamin B12 and folate deficiency cause megaloblastic anemia with macrocytic red cells and hypersegmented neutrophils, with B12 deficiency also causing potentially irreversible neurologic damage.',
      explanation: 'Both B12 and folate are essential cofactors for DNA synthesis. Deficiency impairs DNA replication while RNA synthesis continues, resulting in large, immature nuclei with mature cytoplasm - the megaloblastic change. Macrocytic anemia (MCV typically >110 fL) develops along with pancytopenia due to ineffective erythropoiesis. Hypersegmented neutrophils (6+ nuclear lobes) are a characteristic finding. B12 deficiency causes demyelination of the posterior columns and lateral corticospinal tracts (subacute combined degeneration), producing numbness, ataxia, and dementia. Causes of B12 deficiency include pernicious anemia (autoimmune destruction of intrinsic factor-producing gastric parietal cells), gastric surgery, malabsorption, and dietary deficiency (vegans). Folate deficiency usually results from poor nutrition, malabsorption, alcoholism, or increased demand (pregnancy, hemolysis). Diagnosis involves low B12 or folate levels, elevated methylmalonic acid (MMA) and homocysteine in B12 deficiency (homocysteine only elevated in folate deficiency), and anti-intrinsic factor antibodies in pernicious anemia.',
      keyTerms: [
        { term: 'Megaloblastic', definition: 'Abnormal large red blood cell precursors with immature nuclei' },
        { term: 'Hypersegmented neutrophils', definition: 'Neutrophils with 6 or more nuclear lobes, characteristic of megaloblastic anemia' },
        { term: 'Intrinsic factor', definition: 'Protein produced by stomach needed for B12 absorption in the ileum' },
        { term: 'Methylmalonic acid', definition: 'Metabolite elevated in B12 deficiency, used to confirm diagnosis' },
        { term: 'Subacute combined degeneration', definition: 'Spinal cord damage from B12 deficiency affecting sensation and coordination' },
      ],
      analogies: [
        'DNA synthesis without B12/folate is like trying to copy a document with a broken copier - everything comes out wrong',
        'Hypersegmented neutrophils are like a cell that can\'t decide how to divide its nucleus',
      ],
      examples: [
        'A 65-year-old with memory problems and numb feet found to have B12 deficiency from pernicious anemia',
        'A chronic alcoholic with macrocytic anemia from poor nutrition and folate deficiency',
      ],
    },
    3: {
      level: 3,
      summary: 'Megaloblastic anemia pathophysiology involves impaired thymidylate and methionine synthesis, with diagnostic differentiation essential as folate can correct hematologic abnormalities of B12 deficiency while allowing neurologic progression.',
      explanation: 'B12 is a cofactor for methionine synthase, converting homocysteine to methionine and producing tetrahydrofolate for DNA synthesis. It\'s also required for methylmalonyl-CoA mutase. Folate is required for thymidylate synthesis. Both deficiencies impair DNA replication. B12 deficiency elevates both MMA and homocysteine; folate deficiency only elevates homocysteine. This biochemical distinction is critical. Anti-parietal cell antibodies are present in 90% of pernicious anemia but lack specificity; anti-intrinsic factor antibodies are highly specific but less sensitive. Schilling test (historically used) assessed B12 absorption. Treatment: B12 1000 mcg IM weekly x4, then monthly for life in pernicious anemia; oral B12 1000-2000 mcg daily may work in some cases. Folate 1 mg daily orally. NEVER give folate alone when B12 deficiency is possible - it corrects anemia but allows irreversible neurologic damage to progress. Neurologic improvement lags hematologic response and may be incomplete if treatment delayed.',
      keyTerms: [
        { term: 'Methionine synthase', definition: 'B12-dependent enzyme converting homocysteine to methionine' },
        { term: 'Tetrahydrofolate', definition: 'Active form of folate required for DNA synthesis' },
        { term: 'Anti-parietal cell antibodies', definition: 'Antibodies attacking stomach lining cells, seen in pernicious anemia' },
        { term: 'Homocysteine', definition: 'Amino acid elevated in both B12 and folate deficiency' },
        { term: 'Thymidylate', definition: 'Nucleotide required for DNA synthesis, production impaired in deficiency' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management requires accurate diagnosis of deficiency type, understanding of absorption mechanisms, recognition of neurologic manifestations, and appropriate replacement therapy.',
      explanation: 'Diagnostic approach: macrocytic anemia prompts B12 and folate levels. If B12 <200 pg/mL, confirm with elevated MMA. If borderline (200-350), check MMA and homocysteine. Check anti-IF antibodies for pernicious anemia diagnosis. Assess for malabsorption causes: history of gastric surgery, Crohn\'s disease affecting terminal ileum, celiac disease, medication effects (metformin, PPIs, H2 blockers reduce B12 absorption). Neurologic manifestations include posterior column deficits (loss of vibration and position sense), lateral corticospinal tract involvement (spasticity, hyperreflexia, Babinski sign), and cognitive changes. These can occur without anemia. Replacement protocols: B12 deficiency - 1000 mcg IM weekly x4 weeks, then monthly lifelong for pernicious anemia; or high-dose oral (1000-2000 mcg daily) if absorption intact. Folate deficiency - 1 mg daily PO, usually 4 months but longer if ongoing cause. Monitor response with CBC and reticulocyte count (should rise in 1 week).',
      keyTerms: [
        { term: 'Babinski sign', definition: 'Upgoing toe with plantar stimulation, indicating upper motor neuron lesion' },
        { term: 'Posterior column', definition: 'Spinal cord pathway carrying vibration and position sense, affected in B12 deficiency' },
        { term: 'Parietal cells', definition: 'Stomach cells producing intrinsic factor and acid' },
        { term: 'Reticulocyte response', definition: 'Rise in immature red cells indicating response to treatment' },
        { term: 'Nitrous oxide', definition: 'Anesthetic gas that inactivates B12, can precipitate deficiency' },
      ],
      clinicalNotes: 'Check B12 in any patient with unexplained neurologic symptoms, even without anemia. Metformin and PPIs commonly cause B12 deficiency - screen patients on long-term therapy. Nitrous oxide exposure (recreational or surgical) can precipitate/accelerate B12 deficiency. Dementia workup must include B12 level. Folate supplementation masks B12 deficiency - fortification programs may delay diagnosis. After B12 treatment, potassium may fall as cells take up potassium during hematopoiesis - monitor and supplement if needed.',
    },
    5: {
      level: 5,
      summary: 'Expert management integrates advanced diagnostic testing, recognition of atypical presentations, understanding of drug-nutrient interactions, and long-term monitoring for deficiency recurrence.',
      explanation: 'Complex cases may require transcobalamin levels (holotranscobalamin is the bioactive B12 fraction), serum gastrin (elevated in pernicious anemia), and pepsinogen I (low in pernicious anemia). Genetic testing for transcobalamin deficiency, Imerslund-Gräsbeck syndrome (selective B12 malabsorption), or hereditary folate malabsorption in congenital cases. Medication interactions: metformin reduces B12 absorption through calcium-dependent ileal membrane effects; long-term metformin use requires B12 monitoring. PPIs and H2 blockers reduce acid-mediated release of B12 from food proteins. Trimethoprim and methotrexate are folate antagonists. Phenytoin, sulfasalazine, and cholestyramine impair folate absorption. Nitrous oxide irreversibly oxidizes the cobalt in B12, inactivating methionine synthase - chronic exposure causes deficiency, acute exposure can precipitate neurologic crisis in borderline deficiency. B12 deficiency in pregnancy increases neural tube defect risk; periconceptional folate supplementation (400-800 mcg) reduces NTD risk by 70%. High-dose folate can mask B12 deficiency in fortified populations.',
      keyTerms: [
        { term: 'Holotranscobalamin', definition: 'B12 bound to transcobalamin, the metabolically active fraction' },
        { term: 'Imerslund-Gräsbeck syndrome', definition: 'Rare genetic defect in ileal B12 absorption' },
        { term: 'Methionine', definition: 'Essential amino acid requiring B12 for synthesis from homocysteine' },
        { term: 'Transcobalamin', definition: 'Protein that transports B12 in blood to cells' },
        { term: 'Pepsinogen I', definition: 'Zymogen produced by gastric chief cells, low in pernicious anemia' },
      ],
      clinicalNotes: 'Consider B12 deficiency in any patient with unexplained pancytopenia, macrocytosis, or neurologic symptoms. Transcobalamin testing may help in borderline cases. Document gastric atrophy/surgery as lifelong B12 requirement. Folate supplementation in pregnancy: 400-800 mcg starting preconception through first trimester; 4 mg if prior NTD-affected pregnancy. After B12 replacement for pernicious anemia, lifetime therapy required. Screen family members for pernicious anemia. Gastric cancer risk increased in pernicious anemia - consider endoscopic surveillance. Monitor response with CBC, reticulocyte count at 1 week, repeat B12/MMA at 2-3 months.',
    },
  },
  media: [],
  citations: [
    'Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160.',
    'Green R. Ins and outs of cobalamin deficiency. Blood. 2022;139(20):2990-3001.',
    'Devalia V, Hamilton MS, Molloy AM. Guidelines for the diagnosis and treatment of cobalamin and folate disorders. Br J Haematol. 2014;166(4):496-513.',
  ],
  crossReferences: ['hematology-iron-deficiency-anemia', 'hematology-hemolytic-anemia', 'hematology-cbc-interpretation'],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'vitamin deficiency', 'macrocytic anemia', 'megaloblastic'],
    keywords: ['B12', 'folate', 'cobalamin', 'pernicious anemia', 'macrocytic', 'neurologic'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
