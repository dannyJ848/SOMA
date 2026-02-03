import { EducationalContent } from '../types';

export const ironDeficiencyAnemia: EducationalContent = {
  id: 'hematology-iron-deficiency-anemia',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  alternateNames: ['IDA', 'Iron Deficiency', 'Microcytic Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'Iron deficiency anemia is when your body doesn\'t have enough iron to make healthy red blood cells.',
      explanation: 'Your body needs iron to make hemoglobin, a protein in red blood cells that carries oxygen. When you don\'t have enough iron, your body can\'t make enough healthy red blood cells. This makes you feel tired and weak because your tissues aren\'t getting enough oxygen. Common causes include not eating enough iron-rich foods, losing blood (like from heavy periods or stomach ulcers), or needing more iron during pregnancy. Symptoms include feeling tired, pale skin, shortness of breath, and brittle nails. Treatment usually involves taking iron supplements and eating more iron-rich foods like meat, beans, and leafy greens. Finding and fixing the cause of blood loss is also important.',
      keyTerms: [
        { term: 'Iron', definition: 'A mineral your body needs to make hemoglobin and carry oxygen' },
        { term: 'Hemoglobin', definition: 'The protein in red blood cells that carries oxygen to your body' },
        { term: 'Red blood cells', definition: 'Cells that carry oxygen throughout your body' },
        { term: 'Anemia', definition: 'A condition where you don\'t have enough healthy red blood cells' },
      ],
      analogies: [
        'Iron is like the fuel for a delivery truck - without enough fuel, the trucks can\'t make deliveries',
        'Think of red blood cells as tiny oxygen delivery trucks that need iron to carry their cargo',
      ],
      examples: [
        'A teenage girl with heavy menstrual periods may develop iron deficiency anemia',
        'A vegetarian who doesn\'t eat enough iron-rich plant foods may become iron deficient',
      ],
    },
    2: {
      level: 2,
      summary: 'Iron deficiency anemia is the most common anemia worldwide, caused by inadequate iron intake, absorption, or chronic blood loss, resulting in microcytic, hypochromic red blood cells.',
      explanation: 'Iron deficiency anemia develops through three stages: iron depletion (low stores), iron-deficient erythropoiesis (affected red cell production), and overt anemia. Causes include inadequate dietary intake (especially in vegetarians/vegans), malabsorption (celiac disease, gastric bypass), increased requirements (pregnancy, rapid growth), and chronic blood loss (menorrhagia, GI bleeding from ulcers or cancer). The body compensates by prioritizing iron for red blood cells, sacrificing other tissues first. Diagnosis shows low hemoglobin, microcytic (small) and hypochromic (pale) red cells, low ferritin (iron stores), low serum iron, and elevated total iron binding capacity (TIBC). Transferrin saturation falls below 15%. Treatment involves oral iron supplementation (ferrous sulfate, gluconate, or fumarate) and addressing the underlying cause. Response is monitored by reticulocytosis in 1-2 weeks and hemoglobin rise by 1-2 g/dL in one month.',
      keyTerms: [
        { term: 'Ferritin', definition: 'Protein that stores iron in the body, low levels indicate depleted iron stores' },
        { term: 'Microcytic', definition: 'Red blood cells that are smaller than normal (MCV <80 fL)' },
        { term: 'Hypochromic', definition: 'Red blood cells with less hemoglobin than normal, appearing pale' },
        { term: 'TIBC', definition: 'Total Iron Binding Capacity, elevated when the body is trying to bind more iron' },
        { term: 'Transferrin saturation', definition: 'Percentage of iron-binding sites on transferrin that are occupied' },
      ],
      analogies: [
        'Ferritin is like a savings account for iron - when it\'s low, you\'re spending more than you\'re saving',
        'Microcytic cells are like underinflated basketballs - smaller and can\'t carry as much',
      ],
      examples: [
        'A 45-year-old man with colon cancer presenting with iron deficiency anemia from occult bleeding',
        'A pregnant woman in third trimester with physiologic anemia compounded by iron deficiency',
      ],
    },
    3: {
      level: 3,
      summary: 'Iron deficiency anemia pathophysiology involves hepcidin-mediated iron regulation, with diagnostic workup requiring differentiation from thalassemia and anemia of chronic disease.',
      explanation: 'Iron homeostasis is regulated by hepcidin, a liver-produced peptide that blocks iron absorption and release from macrophages. In iron deficiency, hepcidin is suppressed, increasing iron absorption. Differential diagnosis includes thalassemia trait (normal/high RBC count, normal RDW, normal iron studies) and anemia of chronic disease (elevated hepcidin, normal/high ferritin, low serum iron). The soluble transferrin receptor (sTfR) level rises in iron deficiency but not in anemia of chronic disease; the sTfR/log ferritin ratio helps distinguish them. Investigation of iron deficiency in adult men and postmenopausal women requires GI evaluation to exclude malignancy. Parenteral iron is indicated for malabsorption, intolerance to oral iron, or need for rapid repletion. Available formulations include iron dextran (higher anaphylaxis risk), ferric gluconate, iron sucrose, and newer agents like ferric carboxymaltose and ferumoxytol.',
      keyTerms: [
        { term: 'Hepcidin', definition: 'Master regulator of iron homeostasis, blocks ferroportin iron export' },
        { term: 'Soluble transferrin receptor', definition: 'Marker of erythropoietic activity, elevated in iron deficiency' },
        { term: 'Anemia of chronic disease', definition: 'Functional iron deficiency from inflammatory block of iron utilization' },
        { term: 'Ferroportin', definition: 'Cellular iron exporter blocked by hepcidin' },
        { term: 'Parenteral iron', definition: 'Iron given by injection when oral iron cannot be used' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of iron deficiency anemia requires systematic evaluation for underlying causes, appropriate iron replacement therapy selection, and monitoring of therapeutic response.',
      explanation: 'Comprehensive evaluation of iron deficiency includes dietary history, menstrual history, GI symptoms, celiac screening (tTG-IgA), and GI evaluation when indicated. Endoscopic evaluation in men and postmenopausal women identifies bleeding sources: colorectal cancer, gastric cancer, angiodysplasia, or peptic ulcer disease. Refractory iron deficiency suggests ongoing bleeding, malabsorption, or nonadherence. Intravenous iron formulations vary in dosing and safety profiles: ferric carboxymaltose allows large single-dose administration; iron isomaltoside provides similar convenience; ferumoxytol is suitable for patients with phosphate disorders but affects MRI studies. Response monitoring: reticulocyte count rises within 1 week, hemoglobin increases by 2 g/dL within 3 weeks in responsive patients. Failure to respond suggests ongoing blood loss, malabsorption, wrong diagnosis, or nonadherence. Iron deficiency without anemia causes symptoms including restless legs syndrome, pica (eating non-food items like ice), hair loss, and impaired cognitive function.',
      keyTerms: [
        { term: 'Restless legs syndrome', definition: 'Neurological condition associated with iron deficiency, causing urge to move legs' },
        { term: 'Pica', definition: 'Craving and eating non-nutritive substances, often ice (pagophagia) in iron deficiency' },
        { term: 'Refractory iron deficiency', definition: 'Iron deficiency that doesn\'t respond to appropriate therapy' },
        { term: 'Ferric carboxymaltose', definition: 'IV iron formulation allowing rapid large-dose repletion' },
        { term: 'tTG-IgA', definition: 'Tissue transglutaminase antibody test for celiac disease screening' },
      ],
      clinicalNotes: 'Screen adult men and postmenopausal women with iron deficiency for GI malignancy. Check celiac serology in unexplained iron deficiency. IV iron preferred when Hgb <10 g/dL and rapid correction needed, malabsorption present, or oral iron not tolerated. Ferric carboxymaltose: 750 mg x 2 doses one week apart. Monitor for hypophosphatemia with IV iron. Expect hemoglobin rise of 1-2 g/dL per month with appropriate therapy. Continue iron for 3 months after hemoglobin normalizes to replenish stores.',
    },
    5: {
      level: 5,
      summary: 'Expert management of iron deficiency anemia integrates advanced diagnostic testing, individualized replacement strategies, and systematic evaluation for occult pathology, particularly in at-risk populations.',
      explanation: 'Advanced diagnostic approaches include hepcidin measurement (research setting) to differentiate absolute from functional iron deficiency, reticulocyte hemoglobin content (CHr) for early detection, and comprehensive GI evaluation with video capsule endoscopy if standard endoscopy negative. Iron deficiency in heart failure represents functional deficiency with elevated hepcidin; IV iron improves symptoms and outcomes (FAIR-HF, CONFIRM-HF trials). In chronic kidney disease, iron deficiency is common due to reduced absorption and blood loss; target TSAT >20% and ferritin >100 ng/mL. Parenteral iron selection: ferric derisomaltose allows single-dose administration; ferric carboxymaltose requires multiple doses for full repletion; consider iron deficiency in heart failure and CKD populations. Oral iron dosing: 65-130 mg elemental iron daily or every other day (better absorption with lower hepcidin); vitamin C enhances absorption; separate from antacids, levothyroxine, and certain antibiotics. Transfusion rarely indicated in hemodynamically stable iron deficiency - treat with iron and expect response.',
      keyTerms: [
        { term: 'CHr', definition: 'Reticulocyte hemoglobin content, early marker of iron availability' },
        { term: 'Functional iron deficiency', definition: 'Iron unavailable despite adequate stores due to high hepcidin' },
        { term: 'FAIR-HF trial', definition: 'Study showing IV iron improves outcomes in heart failure with iron deficiency' },
        { term: 'Ferritin index', definition: 'sTfR/log ferritin ratio distinguishing iron deficiency from anemia of chronic disease' },
        { term: 'Video capsule endoscopy', definition: 'Wireless camera capsule for small bowel visualization when source of bleeding unknown' },
      ],
      clinicalNotes: 'In postmenopausal women and men with iron deficiency, pursue GI evaluation even if no symptoms - up to 15% have malignancy. Check stool guaiac, colonoscopy, and upper endoscopy. If negative, consider capsule endoscopy for small bowel evaluation. Iron deficiency in premenopausal women usually menstrual, but still evaluate if severe or refractory. In pregnancy, IV iron if Hgb <9 g/dL or not responding to oral iron by 4 weeks. For restless legs syndrome, ferritin should be >75-100 ng/mL. Pediatric iron deficiency: check for lead exposure. Always document source of bleeding when identified.',
    },
  },
  media: [],
  citations: [
    'Short MW, Domagalski JE. Iron deficiency anemia: evaluation and management. Am Fam Physician. 2013;87(2):98-104.',
    'Camaschella C. Iron-deficiency anemia. N Engl J Med. 2015;372(19):1832-1843.',
    'Auerbach M, Adamson JW. How we diagnose and treat iron deficiency anemia. Am J Hematol. 2016;91(1):31-38.',
  ],
  crossReferences: ['hematology-b12-folate-deficiency', 'hematology-hemolytic-anemia', 'hematology-cbc-interpretation'],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'iron deficiency', 'microcytic anemia', 'nutritional deficiency'],
    keywords: ['iron deficiency', 'anemia', 'ferritin', 'microcytic', 'hypochromic'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
