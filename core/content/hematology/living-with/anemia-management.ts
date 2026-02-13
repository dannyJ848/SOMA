import { EducationalContent } from '../types';

export const anemiaManagement: EducationalContent = {
  id: 'hematology-anemia-management',
  type: 'concept',
  name: 'Living with Anemia',
  alternateNames: ['Anemia Self-Management', 'Coping with Anemia', 'Anemia Lifestyle'],
  levels: {
    1: {
      level: 1,
      summary: 'Living with anemia means managing fatigue and taking steps to improve your energy and overall health.',
      explanation: 'Anemia can make you feel tired, weak, and short of breath. Living well with anemia involves working closely with your healthcare team to treat the underlying cause and manage symptoms. Taking prescribed medications, eating iron-rich foods, and getting enough rest are important. Energy conservation techniques help you do what matters most without overdoing it. Pace yourself, prioritize activities, and take breaks when needed. Stay hydrated and avoid extreme temperatures which can worsen symptoms. Regular follow-ups with your doctor help monitor your progress and adjust treatment. Most types of anemia are treatable, and with proper care, you can feel better and maintain your quality of life.',
      keyTerms: [
        { term: 'Energy conservation', definition: 'Strategies to save energy and prevent fatigue' },
        { term: 'Iron-rich foods', definition: 'Foods high in iron like red meat, spinach, and beans' },
        { term: 'Fatigue', definition: 'Feeling very tired or lacking energy' },
        { term: 'Pacing', definition: 'Balancing activity and rest to manage energy' },
      ],
      analogies: [
        'Managing anemia is like managing a phone with a weak battery - you need to be strategic about energy use',
        'Think of your red blood cells as oxygen delivery trucks that need maintenance and fuel',
      ],
      examples: [
        'Planning rest periods throughout the day helps maintain energy for important activities',
        'Cooking meals in batches saves energy for someone with anemia-related fatigue',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective anemia management requires understanding your specific type, adhering to treatment, monitoring symptoms, and making lifestyle adjustments to optimize function.',
      explanation: 'Different anemias require different approaches: iron deficiency needs iron supplementation and dietary changes; B12/folate deficiency requires vitamin replacement; chronic disease anemias focus on underlying condition; hemolytic anemias may need immunosuppression or specific therapies. Treatment adherence is crucial - iron supplements should be taken on an empty stomach with vitamin C for absorption, away from calcium, antacids, and certain medications. Track your symptoms: energy levels, shortness of breath, heart rate, and exercise tolerance. Know warning signs requiring urgent care: chest pain, severe shortness of breath, fainting, or rapid heartbeat. Exercise is beneficial but should be moderate - walking, gentle yoga, and swimming improve circulation without excessive strain. Sleep quality affects fatigue - practice good sleep hygiene. Nutrition: iron-rich foods (heme iron from meat absorbs better than non-heme from plants); combine plant iron with vitamin C; avoid tea and coffee with meals (tannins inhibit absorption).',
      keyTerms: [
        { term: 'Heme iron', definition: 'Iron from animal sources that absorbs more easily' },
        { term: 'Non-heme iron', definition: 'Iron from plant sources with lower absorption rates' },
        { term: 'Sleep hygiene', definition: 'Practices that promote good sleep quality' },
        { term: 'Exercise tolerance', definition: 'Ability to perform physical activity without symptoms' },
      ],
      analogies: [
        'Treating anemia is like filling up a gas tank - you need the right fuel for your specific engine type',
        'Managing fatigue is like budgeting money - spend energy wisely on what matters most',
      ],
      examples: [
        'A person with iron deficiency anemia takes iron with orange juice and avoids dairy at the same time',
        'Someone with chronic kidney disease receives erythropoietin injections to stimulate red cell production',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive anemia management integrates medical therapy, nutritional optimization, activity modification, psychosocial support, and regular monitoring for treatment response and complications.',
      explanation: 'Medical management varies by etiology: oral vs IV iron based on tolerance, severity, and malabsorption; B12 injections vs oral based on cause; ESAs for CKD with iron optimization; immunosuppression for aplastic anemia or AIHA; transfusions for severe symptomatic anemia. Nutritional strategies: iron absorption enhanced by vitamin C, meat factor; inhibited by phytates, polyphenols, calcium. Heme iron absorption 15-35% vs non-heme 2-20%. Cook in cast iron cookware to increase dietary iron. Activity management: graded exercise programs improve cardiovascular fitness and reduce fatigue; occupational therapy for energy conservation training; pulmonary rehabilitation for cardiopulmonary deconditioning. Psychosocial aspects: anemia impacts quality of life, work productivity, and mental health; cognitive behavioral therapy for fatigue management; support groups for chronic anemias; employer accommodations may be needed. Monitoring: CBC every 2-4 weeks initially during treatment; reticulocyte count shows marrow response; ferritin and iron studies for iron deficiency; B12/folate levels for deficiency anemias.',
      keyTerms: [
        { term: 'ESA', definition: 'Erythropoiesis-stimulating agent for anemia of chronic kidney disease' },
        { term: 'Meat factor', definition: 'Substance in meat that enhances non-heme iron absorption' },
        { term: 'Phytates', definition: 'Compounds in grains and legumes that inhibit iron absorption' },
        { term: 'Graded exercise', definition: 'Gradually increasing activity level to build tolerance' },
        { term: 'Polyphenols', definition: 'Compounds in tea, coffee, and wine that inhibit iron absorption' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced anemia management addresses treatment complications, complex cases, transfusion-dependent patients, and coordination of multidisciplinary care for optimal outcomes.',
      explanation: 'Treatment complications: IV iron infusion reactions (premedicate if history); iron overload from transfusions requiring chelation; ESA risks (hypertension, thrombosis, possible cancer progression). Transfusion-dependent anemias (thalassemia major, MDS, bone marrow failure) require iron chelation therapy (deferoxamine, deferasirox, deferiprone) when ferritin >1000-1500 ng/mL; cardiac and liver MRI for iron assessment; transfusion strategies to minimize exposure. Complex cases: anemia of chronic disease/inflammation may respond to IV iron despite normal/high ferritin (functional iron deficiency); combined deficiencies require treating all; refractory anemia needs evaluation for underlying causes. Multidisciplinary care: hematology, nutrition, social work, pharmacy, nursing coordination; patient education on self-monitoring; emergency action plans; school/work accommodations under ADA if function limited. Advanced directives and quality of life discussions for severe chronic anemias. Fertility preservation before gonadotoxic therapy. Transition planning for adolescents with inherited anemias.',
      keyTerms: [
        { term: 'Iron chelation', definition: 'Treatment to remove excess iron from the body' },
        { term: 'Functional iron deficiency', definition: 'Iron unavailable despite adequate stores due to inflammation' },
        { term: 'T2* MRI', definition: 'Magnetic resonance imaging for assessing iron in heart and liver' },
        { term: 'Transfusion-dependent', definition: 'Requiring regular blood transfusions to maintain health' },
        { term: 'Deferasirox', definition: 'Oral iron chelator for iron overload' },
      ],
      clinicalNotes: 'Monitor for treatment response: hemoglobin should rise by 1 g/dL per month with adequate iron therapy. Check for ongoing blood loss if poor response. Vitamin C enhances iron absorption but may increase side effects. ESAs require adequate iron stores - check ferritin and TSAT before and during therapy. Document transfusion reactions and antibody development.',
    },
    5: {
      level: 5,
      summary: 'Expert anemia management encompasses rare anemia syndromes, novel therapeutic approaches, transition to adult care, and comprehensive patient-centered outcomes optimization.',
      explanation: 'Rare anemias: Diamond-Blackfan anemia (congenital pure red cell aplasia); Fanconi anemia (DNA repair defect); sideroblastic anemias; paroxysmal nocturnal hemoglobinuria; congenital dyserythropoietic anemias - each requiring specialized management and often referral to centers of excellence. Novel therapies: gene therapy for thalassemia and sickle cell showing promise; luspatercept for beta-thalassemia and MDS; hepcidin modulators for anemia of chronic disease in development. Patient-reported outcomes: FACIT-Fatigue and other validated tools; work productivity assessment; cognitive function testing; sexual health and fertility considerations. Care transitions: pediatric to adult hematology for inherited anemias requires preparation beginning in adolescence; self-management skills; insurance navigation; reproductive counseling. Global health considerations: malaria and helminth infections as reversible causes in endemic areas; nutritional interventions; access to blood transfusion safety. Telemedicine for remote monitoring in stable patients. Clinical trial opportunities for refractory cases.',
      keyTerms: [
        { term: 'Luspatercept', definition: 'TGF-beta ligand trap stimulating erythropoiesis in thalassemia and MDS' },
        { term: 'FACIT-Fatigue', definition: 'Validated quality of life measure for anemia-related fatigue' },
        { term: 'Congenital dyserythropoietic anemia', definition: 'Inherited disorder of red blood cell development' },
        { term: 'Hepcidin modulator', definition: 'Drug adjusting iron regulation hormone levels' },
        { term: 'Center of excellence', definition: 'Specialized facility with expertise in rare diseases' },
      ],
      clinicalNotes: 'Refer rare anemia patients to specialized centers. Document baseline quality of life for treatment comparison. Monitor for iron overload even in non-transfused patients with ineffective erythropoiesis (absorptive hyperferritinemia). Gene therapy requires specialized evaluation including fertility counseling. Transition programs improve adherence and outcomes in young adults.',
    },
  },
  media: [],
  citations: [
    'Guralnik JM, Eisenstaedt RS, Ferrucci L, et al. Prevalence of anemia in persons 65 years and older in the United States: evidence for a high rate of unexplained anemia. Blood. 2004;104(8):2263-2268.',
    'Cullis JO. Diagnosis and management of anaemia of chronic disease: current status. Br J Haematol. 2011;154(3):289-300.',
    'Powers JM, McCavit TL, Buchanan GR. Management of iron deficiency anemia: a survey of pediatric hematology/oncology specialists. J Pediatr Hematol Oncol. 2015;37(2):114-119.',
  ],
  crossReferences: ['hematology-iron-deficiency-anemia', 'hematology-b12-folate-deficiency', 'hematology-transfusion'],
  tags: {
    systems: ['hematology'],
    topics: ['patient education', 'self-management', 'anemia', 'lifestyle', 'nutrition'],
    keywords: ['anemia', 'fatigue', 'iron', 'nutrition', 'self-care', 'quality of life'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
