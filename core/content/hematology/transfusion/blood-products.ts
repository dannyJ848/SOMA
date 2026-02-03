import { EducationalContent } from '../types';

export const bloodProducts: EducationalContent = {
  id: 'hematology-blood-products',
  type: 'concept',
  name: 'Blood Products and Components',
  alternateNames: ['Blood Components', 'Transfusion Products', 'Blood Therapy'],
  levels: {
    1: {
      level: 1,
      summary: 'Blood products are different parts of blood used to treat various medical conditions through transfusion.',
      explanation: 'Blood products are prepared from donated blood to help people with different medical needs. The main types are red blood cells (to treat anemia and carry oxygen), platelets (to help stop bleeding), and plasma (containing clotting factors). Donated blood is separated into these components so patients receive only what they need. Red blood cells are used for severe anemia, surgery, or trauma. Platelets help patients with low platelet counts or bleeding problems. Plasma contains proteins that help blood clot and can be made into special products like clotting factor concentrates for people with bleeding disorders. All blood products are carefully tested for safety. transfusions are given through an IV, and healthcare providers watch closely to ensure safety. Blood donation saves millions of lives each year.',
      keyTerms: [
        { term: 'Red blood cells', definition: 'Blood component that carries oxygen throughout the body' },
        { term: 'Platelets', definition: 'Small cell fragments that help blood clot' },
        { term: 'Plasma', definition: 'Liquid part of blood containing proteins and clotting factors' },
        { term: 'Transfusion', definition: 'Receiving blood or blood products through an IV' },
      ],
      analogies: [
        'Blood components are like different tools in a toolbox - each has a specific job',
        'Think of donated blood as a resource that can be divided to help multiple patients',
      ],
      examples: [
        'A person with severe anemia from bleeding receives a red blood cell transfusion',
        'A cancer patient with low platelets gets platelet transfusion to prevent bleeding',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood component therapy provides specific blood elements including red cells, platelets, plasma, and cryoprecipitate, each with defined indications and storage requirements.',
      explanation: 'Blood collection: whole blood donation (about 450 mL) is separated by centrifugation into components. Red blood cells (RBCs): hematocrit 55-80%, stored at 1-6°C for up to 42 days (with additive solutions); one unit raises hemoglobin about 1 g/dL in adults. Indications: anemia with symptoms, active bleeding, preoperative optimization (usually Hgb <7-8 g/dL in stable patients, higher thresholds in cardiac disease). Platelets: single donor (apheresis) or pooled from 4-6 whole blood donations; stored at room temperature with agitation for 5 days. One unit typically raises platelet count 30,000-50,000. Indications: thrombocytopenia with bleeding or invasive procedures, prophylaxis when <10,000. Fresh frozen plasma (FFP): contains all clotting factors, frozen within 8 hours; stored up to 1 year; thawed plasma stable 5 days. Indications: coagulopathy with bleeding, warfarin reversal with bleeding, massive transfusion. Cryoprecipitate: precipitate from thawed FFP rich in fibrinogen, factor VIII, vWF; 10-15 mL per unit; indicated for fibrinogen <100 mg/dL with bleeding.',
      keyTerms: [
        { term: 'Apheresis', definition: 'Procedure collecting specific blood component and returning remainder' },
        { term: 'Cryoprecipitate', definition: 'Cold-insoluble precipitate rich in fibrinogen and factor VIII' },
        { term: 'Fibrinogen', definition: 'Clotting factor I, essential for blood clot formation' },
        { term: 'Thrombocytopenia', definition: 'Low platelet count increasing bleeding risk' },
        { term: 'Hematocrit', definition: 'Percentage of blood volume occupied by red cells' },
      ],
      analogies: [
        'Blood component separation is like sorting recyclables - each material goes to different use',
        'Apheresis is like a smart filter that keeps what you need and returns the rest',
      ],
      examples: [
        'A trauma patient receives massive transfusion protocol with RBCs, plasma, and platelets',
        'A patient with DIC receives cryoprecipitate to correct low fibrinogen',
      ],
    },
    3: {
      level: 3,
      summary: 'Modern transfusion practice utilizes specific blood products with evidence-based thresholds, modified products for special populations, and alternatives to allogeneic transfusion.',
      explanation: 'Specialized products: leukoreduced (removes white cells, reduces CMV transmission, febrile reactions, HLA alloimmunization); irradiated (prevents transfusion-associated GVHD in immunocompromised); CMV-negative (for fetuses, neonates, transplant patients); washed (removes plasma proteins for IgA deficiency, severe allergic reactions); frozen deglycerolized RBCs (rare blood types, extended storage). Pathogen reduction technologies (psoralen-based) reduce infectious risk in platelets and plasma. Massive transfusion protocols: balanced ratio of RBC:plasma:platelets (often 1:1:1) for trauma; early administration reduces mortality. Tranexamic acid reduces bleeding in trauma and surgery. Cell salvage and autologous transfusion for eligible surgeries. Restrictive transfusion strategies (Hgb 7-8 g/dL) safe for most patients; liberal strategies (Hgb 9-10 g/dL) only for cardiac surgery with risk factors. Platelet transfusion thresholds: prophylaxis <10,000; before procedures often >50,000; neurosurgery/ocular >100,000. FFP: generally not for volume expansion or INR <1.7 without bleeding.',
      keyTerms: [
        { term: 'Leukoreduced', definition: 'Blood product with white blood cells removed' },
        { term: 'Irradiated', definition: 'Blood treated with radiation to prevent GVHD' },
        { term: 'Alloimmunization', definition: 'Developing antibodies against foreign blood antigens' },
        { term: 'Transfusion-associated GVHD', definition: 'Rare fatal condition where donor cells attack recipient' },
        { term: 'Cell salvage', definition: 'Collecting and reinfusing patient\'s own blood during surgery' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical transfusion medicine requires knowledge of product modifications, special patient populations, transfusion thresholds, and management of complications.',
      explanation: 'Special populations: neonates (CMV-negative, irradiated, low volume); pregnant patients (Kell-negative, CMV-negative if indicated); patients with previous transfusion reactions (washed products, antigen-negative for alloimmunization); stem cell transplant recipients (irradiated, CMV-negative, often deglycerolized). Hematology/oncology patients: often become alloimmunized to platelet antigens requiring HLA-matched or crossmatch-compatible platelets; refractory to random platelets when poor increments after two consecutive transfusions. TTP patients: no platelet transfusion unless life-threatening bleeding. Neonatal alloimmune thrombocytopenia requires antigen-negative platelets. Sickledex-negative, hemoglobin S-negative blood for sickle cell patients (prevents sickling complications, though not always required). Rh immunoglobulin given to Rh-negative women receiving Rh-positive platelets (platelets have some RBC contamination). Plasma alternatives: 4-factor PCC preferred for warfarin reversal; fibrinogen concentrate for hypofibrinogenemia. Recombinant factor VIIa for specific bleeding scenarios. Recombinant factor VIII and IX concentrates for hemophilia.',
      keyTerms: [
        { term: 'Alloimmunization', definition: 'Development of antibodies against foreign antigens' },
        { term: 'Platelet refractoriness', definition: 'Poor platelet count response to transfusion' },
        { term: 'HLA-matched platelets', definition: 'Platelets matched to patient\'s human leukocyte antigens' },
        { term: 'CMV-negative', definition: 'Blood from donors without cytomegalovirus exposure' },
        { term: 'Sickledex', definition: 'Screening test for sickle hemoglobin' },
      ],
      clinicalNotes: 'Always verify blood product compatibility with two qualified personnel. Check for special requirements (irradiated, CMV-negative, antigen-negative) before ordering. Monitor for reactions - fever, chills, dyspnea, hypotension, hemoglobinuria. Febrile and allergic reactions most common; TRALI and acute hemolytic most dangerous. Document transfusion indication, consent, and outcomes. Platelet refractoriness: rule out sepsis, splenomegaly, DIC before immune cause; HLA or platelet crossmatching if immune suspected.',
    },
    5: {
      level: 5,
      summary: 'Expert transfusion medicine encompasses rare product types, complex patient scenarios, therapeutic apheresis, and stewardship programs ensuring appropriate use.',
      explanation: 'Rare products: antigen-negative RBCs for multiply alloimmunized patients (often sickle cell or thalassemia with extensive transfusion history); rare donor registry access; frozen units for rare phenotypes. Granulocyte transfusions for profound neutropenia with bacterial/fungal infections unresponsive to antibiotics (limited availability, CMV risk). Therapeutic apheresis: plasma exchange for TTP, myasthenia gravis, Guillain-Barré; red cell exchange for severe malaria, sickle cell complications; leukapheresis for symptomatic hyperleukocytosis; plateletpheresis for thrombocytosis. Intrauterine transfusions for fetal anemia from alloimmunization. Neonatal exchange transfusion for hyperbilirubinemia or anemia. Transfusion stewardship programs: evidence-based protocols; computer decision support; retrospective audits; education initiatives. Patient blood management: preoperative anemia optimization; blood conservation techniques; appropriate triggers. Cold-stored platelets and platelets stored in platelet additive solutions under investigation. Pathogen inactivation technology expanding. Artificial oxygen carriers and stem cell-derived products in development.',
      keyTerms: [
        { term: 'Therapeutic apheresis', definition: 'Removing specific blood component for treatment' },
        { term: 'Plasma exchange', definition: 'Removing patient plasma and replacing with donor plasma or albumin' },
        { term: 'Red cell exchange', definition: 'Removing patient red cells and replacing with donor cells' },
        { term: 'Patient blood management', definition: 'Program optimizing blood use and conservation' },
        { term: 'Hyperleukocytosis', definition: 'Extremely high white blood cell count causing symptoms' },
      ],
      clinicalNotes: 'Extended phenotyping of sickle cell and thalassemia patients early prevents alloimmunization. Keep rare donor files for patients with complex antibodies. Plasma exchange for TTP: daily until LDH normal and platelets >150,000 for 2-3 days; usually 1-1.5 plasma volume exchanges. Document transfusion indication clearly; unsupported transfusions may not be reimbursed. Cold-stored platelets may have role in trauma. Granulocyte transfusions: decision must balance potential benefit vs CMV and other risks.',
    },
  },
  media: [],
  citations: [
    'Carson JL, Guyatt G, Heddle NM, et al. Clinical Practice Guidelines From the AABB: Red Blood Cell Transfusion Thresholds and Storage. JAMA. 2016;316(19):2025-2035.',
    'Kaufman RM, Djulbegovic B, Gernsheimer T, et al. Platelet transfusion: a clinical practice guideline from the AABB. Ann Intern Med. 2015;162(3):205-213.',
    'Holland LL, Brooks JP. Toward rational fresh frozen plasma transfusion: The effect of plasma transfusion on coagulation test results. Am J Clin Pathol. 2006;126(1):133-139.',
  ],
  crossReferences: ['hematology-transfusion-reactions', 'hematology-blood-typing', 'hematology-anemia-management'],
  tags: {
    systems: ['hematology'],
    topics: ['transfusion', 'blood products', 'red blood cells', 'platelets', 'plasma'],
    keywords: ['transfusion', 'blood products', 'RBC', 'platelets', 'plasma', 'cryoprecipitate'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
