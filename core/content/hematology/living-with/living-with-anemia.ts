import { EducationalContent } from '../types';

export const livingWithAnemia: EducationalContent = {
  id: 'hematology-living-with-anemia',
  type: 'concept',
  name: 'Living with Anemia',
  alternateNames: ['Managing Anemia', 'Anemia Self-Care', 'Coping with Low Blood Count'],
  levels: {
    1: {
      level: 1,
      summary: 'Anemia means you don\'t have enough healthy red blood cells to carry oxygen throughout your body, which can make you feel tired.',
      explanation: 'When you have anemia, your blood can\'t carry as much oxygen as it should. This happens because you either don\'t have enough red blood cells, or the ones you have don\'t work well. Living with anemia means learning what makes you feel better and what to avoid. Eating foods rich in iron like meat, beans, and leafy greens can help. Getting enough rest is important because your body is working harder than normal. Some activities might make you feel more tired than usual, so it\'s okay to take breaks. Your doctor might give you vitamins or medicine to help your body make more healthy red blood cells.',
      keyTerms: [
        { term: 'Red blood cells', definition: 'Tiny round cells in your blood that carry oxygen to all parts of your body' },
        { term: 'Iron', definition: 'A mineral your body needs to make healthy red blood cells' },
        { term: 'Fatigue', definition: 'Feeling very tired, even after resting' },
        { term: 'Oxygen', definition: 'A gas in the air that your body needs to make energy' },
      ],
    },
    2: {
      level: 2,
      summary: 'Living with anemia involves dietary modifications, activity management, and often medical treatment to address the underlying cause of reduced red blood cell count or hemoglobin.',
      explanation: 'Anemia affects daily life by reducing the body\'s oxygen-carrying capacity, leading to symptoms like fatigue, weakness, and shortness of breath. Managing anemia involves several strategies. Dietary changes are often first-line: iron-rich foods (red meat, fortified cereals, legumes), vitamin B12 sources (fish, dairy, eggs), and folate-rich foods (leafy greens, citrus fruits) support red blood cell production. Vitamin C enhances iron absorption, so pairing iron sources with citrus can help. Activity modification means pacing yourself and recognizing when to rest. Some people need iron supplements or B12 injections. Regular blood tests monitor progress. Understanding your specific type of anemia is crucial because treatment varies—iron deficiency anemia responds to iron supplementation, while B12 deficiency requires different intervention.',
      keyTerms: [
        { term: 'Hemoglobin', definition: 'The protein in red blood cells that actually carries oxygen' },
        { term: 'Iron deficiency anemia', definition: 'The most common type of anemia, caused by not having enough iron' },
        { term: 'B12 deficiency', definition: 'A type of anemia caused by not having enough vitamin B12' },
        { term: 'Folate', definition: 'A B vitamin needed to make new red blood cells' },
      ],
    },
    3: {
      level: 3,
      summary: 'Chronic anemia management requires understanding its etiology, implementing targeted nutritional interventions, monitoring hematologic parameters, and addressing quality-of-life factors including exercise tolerance and cognitive effects.',
      explanation: 'Living with anemia extends beyond simple fatigue management. The physiological adaptations to chronic anemia include increased cardiac output, elevated 2,3-DPG levels shifting the oxygen-hemoglobin dissociation curve, and tissue-level compensatory mechanisms. Patients must understand their specific anemia type: microcytic anemias often indicate iron deficiency or thalassemia; macrocytic anemias suggest B12/folate deficiency or myelodysplasia; normocytic anemias may indicate chronic disease or hemolysis. Dietary management should consider iron absorption inhibitors (phytates, calcium, tannins) and enhancers (ascorbic acid, meat proteins). Exercise recommendations should be individualized—moderate aerobic activity can improve symptoms, but intensity should match hemoglobin levels. Cognitive effects like difficulty concentrating are common and should be acknowledged. Regular monitoring includes complete blood count, reticulocyte count, and iron studies. Mental health support may be needed as chronic illness affects psychological wellbeing.',
      keyTerms: [
        { term: '2,3-DPG', definition: 'A molecule in red blood cells that helps release oxygen to tissues, levels increase in anemia' },
        { term: 'Microcytic anemia', definition: 'Anemia with abnormally small red blood cells, often from iron deficiency' },
        { term: 'Macrocytic anemia', definition: 'Anemia with abnormally large red blood cells, often from B12 or folate deficiency' },
        { term: 'Reticulocyte', definition: 'Immature red blood cells that indicate bone marrow response to anemia' },
        { term: 'Hemolysis', definition: 'Destruction of red blood cells faster than they can be replaced' },
      ],
    },
    4: {
      level: 4,
      summary: 'Comprehensive anemia management integrates understanding of erythropoietic physiology, individualized therapeutic approaches based on etiology, monitoring of compensatory mechanisms, and addressing multisystem effects on cardiovascular, neurological, and immunological function.',
      explanation: 'Advanced anemia management requires appreciation of the complex interplay between erythropoiesis, iron metabolism, and systemic adaptation. The body\'s compensatory mechanisms—increased erythropoietin production, cardiac output augmentation, rightward shift of the oxygen-dissociation curve via 2,3-DPG—have limits and consequences. Chronic high-output cardiac states can lead to cardiomyopathy. Iron supplementation strategies must consider hepcidin regulation: inflammatory states elevate hepcidin, blocking iron absorption regardless of oral intake, necessitating parenteral iron in anemia of chronic disease. For hemolytic anemias, folate requirements increase substantially. Erythropoiesis-stimulating agents (ESAs) are options for renal disease or chemotherapy-induced anemia but carry thrombotic risks. Patients should understand transfusion thresholds and the restrictive transfusion approach (typically Hgb <7 g/dL in stable patients). Quality of life assessments should include validated instruments like FACT-An. Exercise prescription requires understanding that aerobic capacity correlates with hemoglobin but can be improved with training even at lower hemoglobin levels.',
      keyTerms: [
        { term: 'Erythropoietin', definition: 'Hormone produced mainly by kidneys that stimulates red blood cell production' },
        { term: 'Hepcidin', definition: 'Master regulator of iron absorption; elevated in inflammation, blocking iron uptake' },
        { term: 'Parenteral iron', definition: 'Iron given by injection or IV when oral absorption is inadequate' },
        { term: 'FACT-An', definition: 'Functional Assessment of Cancer Therapy-Anemia scale, measures quality of life' },
        { term: 'Restrictive transfusion', definition: 'Evidence-based approach using lower hemoglobin thresholds for transfusion' },
      ],
    },
    5: {
      level: 5,
      summary: 'Clinical management of chronic anemia requires integration of molecular understanding of erythropoiesis regulation, precision medicine approaches to etiology-specific treatment, evidence-based transfusion practices, and comprehensive assessment of end-organ effects and quality of life metrics.',
      explanation: 'The clinical approach to patients living with anemia must be systematic and etiology-driven. Initial workup categorizes anemia by MCV and reticulocyte production index. Iron studies (ferritin, TIBC, transferrin saturation) guide iron deficiency diagnosis, recognizing that ferritin as an acute phase reactant may be falsely elevated in inflammation—soluble transferrin receptor levels can help differentiate. For suspected hemolysis, evaluate LDH, haptoglobin, indirect bilirubin, and peripheral smear. Anemia of chronic disease involves IL-6-mediated hepcidin elevation; treatment targets the underlying condition, though IV iron and ESAs may help. In myelodysplastic syndromes, supportive care includes transfusion support with iron chelation when ferritin exceeds 1000 ng/mL to prevent cardiac and hepatic siderosis. Patient education should cover symptoms requiring urgent evaluation: chest pain, syncope, or rapidly worsening dyspnea. Transfusion decisions balance symptoms against hemoglobin level—symptomatic anemia at higher hemoglobin levels warrants investigation for cardiac or pulmonary comorbidity. Pregnancy requires aggressive anemia treatment given fetal risks. Long-term follow-up monitors for treatment complications: iron overload from transfusions, ESA-associated hypertension, and B12 neuropathy if diagnosis was delayed.',
      keyTerms: [
        { term: 'Reticulocyte production index', definition: 'Corrected reticulocyte count assessing bone marrow response adequacy' },
        { term: 'Soluble transferrin receptor', definition: 'Marker of iron deficiency not affected by inflammation, useful in complex cases' },
        { term: 'Haptoglobin', definition: 'Protein that binds free hemoglobin; decreased in hemolytic anemia' },
        { term: 'Iron chelation', definition: 'Treatment to remove excess iron from transfusion-dependent patients' },
        { term: 'Siderosis', definition: 'Iron deposition in tissues causing organ damage' },
      ],
      clinicalNotes: 'Evaluate all anemia patients for underlying malignancy, chronic infection, or inflammatory disease. In elderly patients, consider myelodysplastic syndrome when cytopenias are unexplained. Oral iron should be given every other day for optimal absorption (hepcidin rebound). IV iron formulations differ in dosing schedules and infusion reactions—low-molecular-weight iron dextran, ferric carboxymaltose, and iron sucrose have different risk profiles. ESAs target hemoglobin 10-11 g/dL to avoid thrombotic complications. Document transfusion reactions meticulously; delayed hemolytic reactions can occur days later. Consider hereditary causes in young patients with unexplained anemia.',
    },
  },
  media: [],
  citations: [
    'Camaschella C. Iron-deficiency anemia. N Engl J Med. 2015;372(19):1832-1843.',
    'Carson JL, et al. Clinical Practice Guidelines From the AABB: Red Blood Cell Transfusion Thresholds and Storage. JAMA. 2016;316(19):2025-2035.',
    'Weiss G, et al. Anemia of inflammation. Blood. 2019;133(1):40-50.',
  ],
  crossReferences: ['hematology-cbc-interpretation', 'hematology-iron-deficiency', 'hematology-blood-transfusion'],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'chronic disease management', 'patient education', 'nutrition', 'quality of life'],
    keywords: ['anemia', 'iron deficiency', 'fatigue', 'hemoglobin', 'red blood cells', 'dietary management'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
