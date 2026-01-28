import { EducationalContent } from '../types';

export const bloodTransfusion: EducationalContent = {
  id: 'hematology-blood-transfusion',
  type: 'concept',
  name: 'Blood Transfusion',
  alternateNames: ['Blood Product Transfusion', 'RBC Transfusion', 'Platelet Transfusion', 'Plasma Transfusion'],
  levels: {
    1: {
      level: 1,
      summary: 'A blood transfusion is when blood or blood components from a donor are given to someone who needs them through an IV in their vein.',
      explanation: 'Sometimes people need blood transfusions because they\'ve lost blood during surgery or an accident, their body doesn\'t make enough blood cells, or their blood cells don\'t work properly. Blood has different parts that can be given separately: red blood cells (carry oxygen), platelets (help stop bleeding), and plasma (the liquid part with proteins that help clotting). Before a transfusion, the blood is carefully tested and matched to make sure it\'s safe for the patient. During the transfusion, which can take 1-4 hours, nurses watch closely for any reactions. Most transfusions are very safe thanks to careful testing of donated blood. Some people worry about getting infections from transfusions, but this is very rare because all donated blood is thoroughly screened.',
      keyTerms: [
        { term: 'Red blood cells', definition: 'Blood cells that carry oxygen throughout your body' },
        { term: 'Platelets', definition: 'Tiny blood cells that help stop bleeding by forming clots' },
        { term: 'Plasma', definition: 'The liquid part of blood containing proteins and clotting factors' },
        { term: 'Blood typing', definition: 'Testing blood to see what type it is (A, B, AB, or O)' },
      ],
    },
    2: {
      level: 2,
      summary: 'Blood transfusion involves infusion of blood components—red cells, platelets, plasma, or cryoprecipitate—each with specific indications, compatibility requirements, and potential complications requiring monitoring.',
      explanation: 'Modern transfusion medicine uses component therapy, giving patients only what they need. Red blood cell transfusions treat anemia and acute blood loss; restrictive transfusion strategies (threshold hemoglobin 7-8 g/dL) are generally preferred over liberal approaches based on evidence of equivalent or better outcomes. Platelet transfusions prevent or treat bleeding from thrombocytopenia or platelet dysfunction; prophylactic thresholds vary (10K for stable patients, 50K for invasive procedures). Fresh frozen plasma (FFP) replaces clotting factors in coagulopathy or massive transfusion. Cryoprecipitate provides concentrated fibrinogen, Factor VIII, and VWF. Compatibility testing includes ABO/Rh typing and antibody screening; crossmatch confirms compatibility for RBCs. Transfusion reactions range from mild (febrile, allergic) to life-threatening (acute hemolytic, TRALI, septic). All blood products undergo testing for infectious diseases (HIV, hepatitis B and C, others). Informed consent should discuss risks, benefits, and alternatives.',
      keyTerms: [
        { term: 'Restrictive transfusion', definition: 'Strategy using lower hemoglobin thresholds to trigger transfusion' },
        { term: 'Crossmatch', definition: 'Test mixing donor cells with recipient serum to confirm compatibility' },
        { term: 'TRALI', definition: 'Transfusion-related acute lung injury, a serious pulmonary complication' },
        { term: 'Cryoprecipitate', definition: 'Concentrated fibrinogen and clotting factors from frozen plasma' },
        { term: 'Antibody screen', definition: 'Test detecting unexpected antibodies that could cause reactions' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based transfusion practice integrates clinical indications, restrictive thresholds, product selection including modified components, and comprehensive prevention and management of transfusion reactions.',
      explanation: 'RBC transfusion evidence: TRICC, TRACS, and other trials support restrictive thresholds (Hgb 7 g/dL) in most stable patients; higher thresholds (8 g/dL) reasonable in cardiovascular disease; individualize in acute coronary syndrome. One unit of RBCs raises hemoglobin approximately 1 g/dL. Platelet transfusion: prophylactic threshold 10K in stable patients without bleeding; therapeutic for active bleeding; consider dysfunction even with adequate counts (aspirin, uremia). Product modifications: leukoreduction (reduces febrile reactions, CMV transmission, alloimmunization); irradiation (prevents transfusion-associated GVHD in immunocompromised); CMV-negative or leukoreduced for CMV-seronegative transplant recipients; washed products for severe allergic reactions or IgA deficiency. Massive transfusion protocols provide balanced component replacement (typically 1:1:1 RBC:plasma:platelets). Transfusion reactions: febrile non-hemolytic (most common, premedicate if recurrent); allergic (urticaria to anaphylaxis); acute hemolytic (ABO incompatibility emergency); delayed hemolytic (alloantibody mediated); TRALI (noncardiogenic pulmonary edema); TACO (circulatory overload in volume-sensitive patients).',
      keyTerms: [
        { term: 'Leukoreduction', definition: 'Filtering white blood cells from blood products' },
        { term: 'Irradiation', definition: 'Treating blood products to prevent GVHD in vulnerable recipients' },
        { term: 'TACO', definition: 'Transfusion-associated circulatory overload from volume' },
        { term: 'Massive transfusion protocol', definition: 'Systematic rapid delivery of balanced blood components' },
        { term: 'Alloimmunization', definition: 'Development of antibodies against transfused foreign antigens' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced transfusion practice encompasses patient blood management strategies, management of complex alloimmunization, special product requirements, and recognition of rare but serious complications.',
      explanation: 'Patient blood management (PBM) is a multimodal approach to reduce transfusion needs: preoperative anemia treatment (iron, EPO), minimizing blood loss (surgical technique, antifibrinolytics, cell salvage), and evidence-based transfusion triggers. Alloimmunization complicates transfusion: multiple antibodies can make compatible blood difficult to find; extended phenotype matching (Rh, Kell, Kidd, Duffy, MNS) reduces alloimmunization risk in chronically transfused patients (sickle cell disease, thalassemia). Autoimmune hemolytic anemia creates crossmatch challenges; least incompatible blood may be necessary. Special populations: neonates receive CMV-safe, irradiated, volume-reduced products; intrauterine transfusion for hemolytic disease of fetus/newborn; directed donation from relatives requires irradiation. Hyperhemolysis syndrome in sickle cell disease: paradoxical hemoglobin drop after transfusion, avoid further transfusions if possible. Post-transfusion purpura: rare thrombocytopenia 5-10 days post-transfusion, treat with IVIG. Iron overload from chronic transfusion requires chelation therapy. Transfusion-transmitted infections now rare but include bacterial contamination (especially platelets stored at room temperature) and rarely viral agents.',
      keyTerms: [
        { term: 'Patient blood management', definition: 'Multidisciplinary approach to minimize transfusion needs' },
        { term: 'Extended phenotype matching', definition: 'Matching additional blood antigens beyond ABO/Rh' },
        { term: 'Hyperhemolysis', definition: 'Destruction of both transfused and patient\'s own red cells post-transfusion' },
        { term: 'Post-transfusion purpura', definition: 'Rare severe thrombocytopenia following transfusion' },
        { term: 'Cell salvage', definition: 'Collecting and reinfusing patient\'s own blood during surgery' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert transfusion practice requires mastery of complex compatibility issues, evidence-based threshold application across clinical contexts, management of serious reactions, and stewardship of a limited resource.',
      explanation: 'Clinical transfusion expertise integrates multiple domains. Threshold evidence synthesis: 7 g/dL appropriate for most stable hospitalized patients; 8 g/dL reasonable for cardiac surgery, hip fracture, cardiovascular disease; higher thresholds lack evidence of benefit and may cause harm. Document transfusion indication and response. Compatibility complexities: warm autoantibodies may mask alloantibodies; adsorption techniques identify underlying alloantibodies; most compatible or least incompatible units selected with hematologist/blood bank collaboration. Transfusion reaction workup: stop transfusion, maintain IV access, send blood bank samples (post-transfusion specimen, returned product), supportive care based on reaction type; hemolytic reaction requires aggressive hydration, monitor for DIC; TRALI is clinical diagnosis of exclusion (bilateral infiltrates within 6 hours, no TACO, no other cause). Massive hemorrhage: activate massive transfusion protocol early; target-driven resuscitation with viscoelastic testing (TEG/ROTEM) when available; calcium replacement for citrate toxicity; tranexamic acid within 3 hours of trauma. Stewardship: blood is a scarce resource; ensure appropriate indication; single-unit RBC policy for non-bleeding patients; audit and feedback improve practice. Special considerations: Jehovah\'s Witnesses require discussion of acceptable products and techniques; autologous predonation rarely indicated.',
      keyTerms: [
        { term: 'Warm autoantibody', definition: 'Antibody against self red cells that can mask underlying alloantibodies' },
        { term: 'Adsorption', definition: 'Technique removing autoantibodies to detect underlying alloantibodies' },
        { term: 'Viscoelastic testing', definition: 'TEG/ROTEM tests guiding component therapy in massive hemorrhage' },
        { term: 'Transfusion stewardship', definition: 'Programs ensuring appropriate blood product utilization' },
        { term: 'Single-unit policy', definition: 'Transfusing one unit then reassessing rather than automatic two-unit orders' },
      ],
      clinicalNotes: 'Always verify two patient identifiers at bedside before transfusion—clerical error is leading cause of hemolytic reactions. Vital signs at baseline, 15 minutes, and post-transfusion minimum. Most reactions occur in first 15-30 minutes; stay at bedside during this period. Febrile reaction: if temp rises >1°C, stop transfusion, rule out hemolysis; premedication with acetaminophen for future transfusions if recurrent. Suspected hemolysis: check for hemoglobinuria, send direct antiglobulin test (DAT), serum haptoglobin, bilirubin, LDH. TRALI vs TACO differentiation: BNP elevation suggests TACO; onset timing similar but TACO responds to diuresis while TRALI is managed supportively with O2. Emergency release: O-negative RBCs (O-positive acceptable for males and post-menopausal females); AB plasma; monitor for alloimmunization if type-specific blood given later. Document all reactions in blood bank system for future component selection.',
    },
  },
  media: [],
  citations: [
    'Carson JL, et al. Clinical Practice Guidelines From the AABB: Red Blood Cell Transfusion Thresholds and Storage. JAMA. 2016;316(19):2025-2035.',
    'Delaney M, et al. Transfusion reactions: prevention, diagnosis, and treatment. Lancet. 2016;388(10061):2825-2836.',
    'Holcomb JB, et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio and mortality in patients with severe trauma. JAMA. 2015;313(5):471-482.',
  ],
  crossReferences: ['hematology-blood-typing', 'hematology-transfusion-reactions', 'hematology-cbc-interpretation'],
  tags: {
    systems: ['hematology'],
    topics: ['transfusion', 'blood products', 'patient safety', 'evidence-based medicine'],
    keywords: ['transfusion', 'blood products', 'RBC', 'platelets', 'plasma', 'compatibility', 'reactions'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
