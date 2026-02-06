/**
 * Anemia Comprehensive Educational Module
 * 
 * Complete educational content across all 6 complexity levels.
 * Covers: iron deficiency, B12/folate deficiency, hemolytic anemia,
 * MCV classification, and reticulocyte count interpretation.
 */

import type { EducationalModule } from '../../types.js';

export const anemiaModule: EducationalModule = {
  id: 'hematology-anemia-comprehensive',
  type: 'specialty',
  specialty: 'hematology',
  
  title: 'Understanding Anemia: Causes, Types, and Diagnosis',
  description: 'Comprehensive guide to anemia - a condition where your blood has fewer red blood cells or less hemoglobin than normal. Learn about different types including iron deficiency, vitamin deficiencies, and hemolytic anemia, plus how doctors diagnose and classify them.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'blood-cells-basics',
    'complete-blood-count-cbc',
  ],
  
  learningObjectives: [
    'Understand what anemia is and why it matters',
    'Learn the MCV classification system (microcytic, normocytic, macrocytic)',
    'Recognize causes of iron deficiency and B12/folate deficiency anemias',
    'Understand hemolytic anemia and increased red blood cell destruction',
    'Interpret reticulocyte count in anemia workup',
    'Apply diagnostic approach to classify and identify anemia causes',
  ],
  
  estimatedTime: {
    1: '15 minutes',
    2: '22 minutes',
    3: '30 minutes',
    4: '45 minutes',
    5: '65 minutes',
    6: '90 minutes',
  },
  
  content: {
    // Level 1: Foundation
    1: {
      summary: `Anemia means you don't have enough healthy red blood cells to carry oxygen to your body. Red blood cells are like tiny delivery trucks that bring oxygen from your lungs to every part of your body. When you don't have enough of them, or they're not working properly, your body doesn't get the oxygen it needs. This can make you feel tired, weak, and short of breath.`,
      
      analogy: `Imagine your bloodstream is like a highway, and red blood cells are trucks carrying oxygen packages to all the houses (your organs) along the route.

In anemia, you have fewer trucks than needed, or the trucks are only half-full. Either way, not enough oxygen packages get delivered. The houses start complaining - you feel tired, weak, and can't do your usual activities.

Think of anemia as a "delivery shortage" - there's not enough oxygen being transported to where it's needed.`,
      
      keyPoints: [
        'Anemia means low red blood cell count or low hemoglobin',
        'Red blood cells carry oxygen to every part of your body',
        'Common symptoms: tiredness, weakness, pale skin, short of breath',
        'Can be caused by blood loss, not making enough cells, or cells breaking too fast',
        'Doctors use a blood test (CBC) to check for anemia',
      ],
      
      visualAid: 'red-blood-cell-oxygen-delivery-diagram',
    },
    
    // Level 2: Developing
    2: {
      summary: `Anemia is a condition characterized by a decrease in the number of red blood cells (RBCs) or the amount of hemoglobin in the blood. Hemoglobin is the protein inside RBCs that binds to oxygen. Anemia can result from three main mechanisms: decreased production of RBCs, increased destruction of RBCs, or blood loss. The three primary types are microcytic (small cells), normocytic (normal size), and macrocytic (large cells), which help doctors determine the cause.`,
      
      keyConcepts: [
        {
          term: 'Hemoglobin',
          explanation: 'The protein in red blood cells that carries oxygen. It contains iron and gives blood its red color.',
        },
        {
          term: 'Hematocrit',
          explanation: 'The percentage of your blood that is made up of red blood cells. Low hematocrit means anemia.',
        },
        {
          term: 'MCV (Mean Corpuscular Volume)',
          explanation: 'A measurement of the average size of your red blood cells. Helps classify anemia type.',
        },
        {
          term: 'Reticulocyte',
          explanation: 'Young, newly made red blood cells. The reticulocyte count shows if your bone marrow is making enough new cells.',
        },
      ],
      
      keyPoints: [
        'Normal hemoglobin: Men 13.5-17.5 g/dL, Women 12.0-16.0 g/dL',
        'Iron deficiency is the most common cause of anemia worldwide',
        'Vitamin B12 and folate deficiencies cause large red blood cells (macrocytic)',
        'Hemolytic anemia: red blood cells are destroyed faster than they can be made',
        'MCV classification: Microcytic (<80), Normocytic (80-100), Macrocytic (>100 fL)',
      ],
      
      howItWorks: `1. Your bone marrow makes red blood cells using iron, B12, folate, and other nutrients
2. Red blood cells live for about 120 days, carrying oxygen throughout your body
3. Old red blood cells are recycled by the spleen and liver
4. Anemia occurs when:
   - Not enough new cells are made (iron/B12/folate deficiency, bone marrow problems)
   - Cells are destroyed too quickly (hemolysis)
   - Blood is lost (bleeding)
5. Your body tries to compensate by making more reticulocytes (young RBCs)`,
    },
    
    // Level 3: Standard
    3: {
      summary: `Anemia represents a reduction in the oxygen-carrying capacity of blood, defined by hemoglobin levels below 13.5 g/dL in men and 12.0 g/dL in women. The diagnostic approach relies on the MCV classification: microcytic anemia (MCV <80 fL) typically indicates iron deficiency, thalassemia, or anemia of chronic disease; normocytic anemia (MCV 80-100 fL) suggests blood loss, hemolysis, or bone marrow failure; macrocytic anemia (MCV >100 fL) points to B12/folate deficiency, liver disease, or alcohol use. The reticulocyte count distinguishes decreased production (low reticulocytes) from increased destruction or loss (high reticulocytes).`,
      
      mechanisms: [
        {
          name: 'Iron Deficiency Anemia',
          description: 'Insufficient iron leads to impaired heme synthesis. Causes include chronic blood loss (menstruation, GI bleeding), inadequate dietary intake, or malabsorption. Results in microcytic, hypochromic cells.',
        },
        {
          name: 'B12/Folate Deficiency (Megaloblastic Anemia)',
          description: 'Defective DNA synthesis causes nuclear-cytoplasmic asynchrony in erythroid precursors. B12 deficiency may also cause neurologic damage via abnormal myelin synthesis. Results in macrocytic cells and hypersegmented neutrophils.',
        },
        {
          name: 'Hemolytic Anemia',
          description: 'Premature destruction of red blood cells. Can be intrinsic (sickle cell, spherocytosis, G6PD deficiency) or extrinsic (autoimmune, microangiopathic, infections). Reticulocytosis is prominent.',
        },
        {
          name: 'Anemia of Chronic Disease',
          description: 'Inflammatory cytokines increase hepcidin, blocking iron absorption and trapping iron inside macrophages. Also reduces erythropoietin response and erythropoietic activity.',
        },
      ],
      
      clinicalCorrelates: [
        'Iron deficiency: Koilonychia (spoon nails), pica (eating ice/clay), restless leg syndrome',
        'B12 deficiency: Subacute combined degeneration of spinal cord, glossitis, neurologic symptoms',
        'Folate deficiency: Similar to B12 but WITHOUT neurologic symptoms; associated with pregnancy, alcoholism',
        'Hemolysis: Jaundice, dark urine (bilirubin), gallstones, splenomegaly',
        'Severe anemia: Tachycardia, orthostatic hypotension, heart failure, angina',
      ],
      
      normalVsAbnormal: {
        normal: 'Adequate red blood cells with normal hemoglobin concentration. MCV 80-100 fL. Reticulocyte count 0.5-2.5%. Oxygen delivery meets metabolic demands. No symptoms of fatigue or weakness.',
        abnormal: 'Reduced red blood cell mass or hemoglobin. MCV may be low (<80), normal (80-100), or high (>100). Reticulocyte response varies. Symptoms include fatigue, pallor, dyspnea, tachycardia.',
        whyItMatters: 'Chronic anemia reduces quality of life and work capacity. Acute anemia can cause cardiovascular collapse. Different types require specific treatments - iron supplementation for iron deficiency, B12 injections for pernicious anemia, immunosuppression for autoimmune hemolysis.',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: `The pathophysiology of anemia involves disruption of normal erythropoiesis or accelerated erythrocyte destruction. Iron deficiency develops in stages: iron stores depleted (low ferritin), then iron-deficient erythropoiesis (low iron, high TIBC), followed by overt anemia. B12 requires intrinsic factor for terminal ileal absorption; deficiency causes both hematologic and neurologic manifestations through impaired methionine synthase and methylmalonyl-CoA mutase. Hemolysis can be extravascular (spleen/liver macrophages) or intravascular (complement-mediated, mechanical trauma). The reticulocyte production index (RPI) corrects for both hematocrit and premature reticulocyte release, providing a true measure of marrow response.`,
      
      molecularMechanisms: [
        {
          pathway: 'Iron Metabolism and Heme Synthesis',
          defect: 'Reduced iron availability → impaired protoporphyrin incorporation into heme',
          consequence: 'Microcytic hypochromic RBCs, elevated zinc protoporphyrin, low ferritin/iron, high TIBC',
        },
        {
          pathway: 'Vitamin B12/Folate - One-Carbon Metabolism',
          defect: 'Insufficient cofactors for thymidylate and purine synthesis; impaired DNA methylation',
          consequence: 'Megaloblastic maturation, nuclear-cytoplasmic asynchrony, ineffective erythropoiesis, pancytopenia, elevated homocysteine (both), elevated methylmalonic acid (B12 only)',
        },
        {
          pathway: 'Hemolysis Pathways',
          defect: 'Intrinsic: membrane defects (spectrin, ankyrin), enzyme defects (G6PD, pyruvate kinase), hemoglobinopathies; Extrinsic: antibody-mediated, mechanical, infectious, toxic',
          consequence: 'Increased indirect bilirubin, elevated LDH, decreased haptoglobin (intravascular), hemoglobinuria, hemosiderinuria, erythroid hyperplasia in marrow, splenomegaly',
        },
        {
          pathway: 'Hepcidin-ferroportin Axis',
          defect: 'Inflammatory cytokines (IL-6) increase hepcidin → internalization and degradation of ferroportin',
          consequence: 'Iron trapped in macrophages, blocked intestinal absorption, functional iron deficiency despite adequate stores, normocytic/normochromic anemia',
        },
      ],
      
      pathways: [
        {
          name: 'MCV-Based Diagnostic Algorithm',
          steps: [
            'Step 1: Check MCV on CBC',
            'Microcytic (<80 fL): Check ferritin, iron, TIBC, transferrin saturation',
            '  - Low ferritin: Iron deficiency',
            '  - Normal/high ferritin: Anemia of chronic disease vs thalassemia',
            'Normocytic (80-100 fL): Check reticulocyte count',
            '  - High retic: Hemolysis or blood loss',
            '  - Low retic: ACD, bone marrow failure, CKD',
            'Macrocytic (>100 fL): Check B12, folate, peripheral smear',
            '  - B12/folate low: Megaloblastic anemia',
            '  - Liver disease, alcohol, hypothyroidism: Non-megaloblastic',
          ],
          regulation: 'MCV reflects DNA synthesis (B12/folate), heme synthesis (iron), and membrane cholesterol content',
        },
        {
          name: 'Reticulocyte Response to Anemia',
          steps: [
            'Erythropoietin (EPO) increases in response to tissue hypoxia',
            'EPO stimulates erythroid progenitors in bone marrow',
            'Reticulocyte count rises within 2-3 days of hemolysis or blood loss',
            'Corrected retic count = observed × (patient Hct/normal Hct)',
            'RPI = corrected count / maturation time (varies by hematocrit)',
            'RPI <2 suggests underproduction; RPI >3 suggests hemolysis/loss',
          ],
          regulation: 'EPO production regulated by HIF-2α sensing tissue oxygenation; erythropoietic capacity depends on nutrient availability and marrow function',
        },
      ],
      
      references: [
        'Bothwell TH, et al. Iron metabolism in man. Blackwell Scientific; 1979.',
        'Stabler SP. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160.',
        'Ganz T. Iron homeostasis: fitting the puzzle pieces together. Cell Metab. 2008;7(4):288-290.',
        'Bunn HF. Pathogenesis and treatment of sickle cell disease. N Engl J Med. 1997;337(11):762-769.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: `Contemporary understanding of anemia pathophysiology emphasizes the complexity of iron regulation through the hepcidin-ferroportin axis, with hepcidin levels explaining the functional iron deficiency seen in inflammatory states, chronic kidney disease, and obesity. Genome-wide association studies have identified polymorphisms in TMPRSS6 (encoding matriptase-2) that regulate hepcidin and influence iron status. In hemolytic anemias, complement dysregulation (PNH) and mechanosensing pathways (hereditary xerocytosis) represent therapeutic targets. Sideroblastic anemias involve mitochondrial iron accumulation due to ALAS2 or mitochondrial RNA processing defects. The RETICULOGENE expression signature and flow cytometric reticulocyte indices provide quantitative measures of erythropoietic activity beyond standard counts.`,
      
      researchFrontiers: [
        'Hepcidin-modulating therapies: Mini-hepcidins, anti-hepcidin antibodies, and BMP6 pathway inhibitors for anemia of inflammation',
        'Hypoxia-inducible factor prolyl hydroxylase inhibitors (HIF-PHIs): Novel oral agents for anemia of CKD that increase endogenous EPO and improve iron mobilization',
        'Complement inhibition: Eculizumab and ravulizumab for paroxysmal nocturnal hemoglobinuria (PNH); sutimlimab for cold agglutinin disease',
        'Gene therapy: LentiGlobin for sickle cell disease and beta-thalassemia; promising early results with reduced transfusion requirements',
        'Mitapivat (pyruvate kinase activator): First disease-modifying therapy for PK deficiency, reducing hemolysis markers',
      ],
      
      controversies: [
        {
          topic: 'Iron Supplementation Strategy',
          perspectives: [
            'Daily dosing: Traditional approach with GI side effects; blocks hepcidin less effectively',
            'Alternate day dosing: Better absorption, fewer side effects; allows hepcidin to fall between doses',
            'IV iron: Preferred when oral fails or in IBD, CKD, postpartum; concerns about hypersensitivity and oxidative stress',
          ],
        },
        {
          topic: 'Transfusion Thresholds',
          perspectives: [
            'Restrictive strategy (Hb 7-8 g/dL): Supported by TRICC trial; fewer transfusion reactions, less volume overload',
            'Liberal strategy (Hb 9-10 g/dL): May be appropriate for acute coronary syndrome, perioperative cardiac patients',
            'Individualized approach: Consider symptoms, comorbidities, rate of decline, not just absolute number',
          ],
        },
        {
          topic: 'B12 Deficiency Diagnostic Criteria',
          perspectives: [
            'Serum B12 <200 pg/mL: Traditional cutoff but misses 30-50% of deficient patients',
            'Methylmalonic acid (MMA) elevation: More sensitive but less specific; affected by renal function',
            'Holotranscobalamin (active B12): May better reflect tissue status but not widely available',
          ],
        },
      ],
      
      statisticalContext: `Iron deficiency affects approximately 2 billion people globally, making it the most common nutritional deficiency. Prevalence is highest in preschool children (47%) and menstruating women (30%). 

In the US NHANES data:
- Iron deficiency: 9-16% of menstruating women, 2% of adult men
- B12 deficiency: ~6% of adults <60 years, 20% >60 years
- Anemia of chronic disease: 15-65% of ICU patients, 50% of CKD stage 3-5

Genetic influences on iron status:
- HFE mutations: 10% of Northern European ancestry are carriers
- TMPRSS6 variants: Explain 5-10% of variation in iron status
- Alpha-thalassemia carrier: 30% of Southeast Asian, 20% of African ancestry`,
      
      references: [
        'Stoffel NU, et al. Iron absorption from oral iron supplements given on consecutive versus alternate days and as single morning doses versus twice-daily split dosing in iron-depleted women: two open-label, randomised controlled trials. Lancet Haematol. 2017;4(11):e524-e533.',
        'Ganz T, Nemeth E. Iron homeostasis in host defence and inflammation. Nat Rev Immunol. 2015;15(8):500-510.',
        'Peyrin-Biroulet L, et al. Hydroxyl-HIF inhibitors for the treatment of anemia in chronic kidney disease: a consensus statement. Kidney Int. 2021;100(5):960-972.',
        'Franco RS. Measurement of red blood cell lifespan and aging. Transfus Med Hemother. 2012;39(5):302-307.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: `Clinical evaluation of anemia requires systematic assessment incorporating history, physical examination, and targeted laboratory testing. The diagnostic algorithm begins with CBC indices, particularly MCV and RDW, followed by reticulocyte count to distinguish underproduction from destruction/loss. Iron studies (ferritin, serum iron, TIBC, transferrin saturation) differentiate iron deficiency from anemia of chronic disease; ferritin <30 ng/mL is highly sensitive for iron deficiency, while ferritin >100 ng/mL generally excludes it. B12 and folate levels with confirmatory methylmalonic acid and homocysteine identify megaloblastic anemia. Hemolysis workup includes LDH, haptoglobin, indirect bilirubin, peripheral smear, and direct antiglobulin test (Coombs). Bone marrow examination is reserved for unexplained cytopenias or suspected marrow infiltration. Management must address the underlying cause - iron replacement for deficiency, B12 injections for pernicious anemia, immunosuppression or splenectomy for autoimmune hemolysis, and ESA/HIF-PHI for CKD-related anemia.`,
      
      clinicalApproach: [
        'Thorough history: Diet (vegan/vegetarian), GI symptoms, menstrual history, medications (NSAIDs, anticoagulants), family history, ethnic background, travel history',
        'Physical examination: Pallor (conjunctiva, palms), jaundice, splenomegaly, glossitis, neurologic signs (B12 deficiency), koilonychia (iron deficiency)',
        'Initial labs: CBC with indices, reticulocyte count, peripheral smear, comprehensive metabolic panel, LDH, haptoglobin, bilirubin',
        'Iron studies: Ferritin, serum iron, TIBC, transferrin saturation (calculate: serum iron × 100 / TIBC)',
        'Vitamin levels: B12, folate; if borderline B12, check methylmalonic acid and homocysteine',
        'Hemolysis workup: Direct antiglobulin test (DAT/Coombs), cold agglutinin titer if cold AIHA suspected',
        'GI evaluation: Stool guaiac, endoscopy/colonoscopy for iron deficiency in men and postmenopausal women',
        'Bone marrow biopsy: When diagnosis unclear, suspected aplastic anemia, myelodysplasia, or marrow infiltration',
      ],
      
      differentialConsiderations: [
        'Iron deficiency: Chronic blood loss (menorrhagia, GI bleed), malabsorption (celiac, IBD, post-gastrectomy), inadequate intake, increased demand (pregnancy)',
        'B12 deficiency: Pernicious anemia (anti-intrinsic factor antibodies), gastric bypass, ileal disease/resection, chronic PPI use, vegan diet without supplementation',
        'Folate deficiency: Malnutrition/alcoholism, pregnancy, hemolytic anemia, methotrexate or other antifolate drugs, celiac disease',
        'Hemolysis - Intrinsic: Hereditary spherocytosis, G6PD deficiency, sickle cell disease, thalassemia, paroxysmal nocturnal hemoglobinuria (PNH), PK deficiency',
        'Hemolysis - Extrinsic: Autoimmune warm or cold agglutinin, microangiopathic (TTP/HUS/DIC), MAHA (mechanical valve), infection (malaria, babesiosis, Clostridium), drug-induced',
        'Anemia of chronic disease: Chronic infections, inflammatory conditions (RA, SLE), malignancy, CKD (with reduced EPO)',
        'Bone marrow failure: Aplastic anemia, myelodysplastic syndrome, leukemia, myelofibrosis, pure red cell aplasia',
      ],
      
      guidelines: [
        'Camaschella C. Iron-deficiency anemia. N Engl J Med. 2015;372(19):1832-1843.',
        'DeLoughery TG. Microcytic anemia. N Engl J Med. 2014;371(14):1324-1331.',
        'Short MW, Domagalski JE. Iron deficiency anemia: evaluation and management. Am Fam Physician. 2013;87(2):98-104.',
        'Goodnough LT, Schrier SL. Evaluation and management of anemia in the elderly. Am J Hematol. 2014;89(1):88-96.',
        'Kidney Disease: Improving Global Outcomes (KDIGO) Anemia Work Group. KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012;2(4):279-335.',
      ],
      
      caseExamples: [
        {
          presentation: '28-year-old female with fatigue, pallor, heavy menstrual periods (7 days, changing pads every 2 hours). Hemoglobin 8.2 g/dL, MCV 68 fL, ferritin 8 ng/mL.',
          keyFindings: [
            'Microcytic anemia with low ferritin - classic iron deficiency',
            'Menorrhagia likely contributing cause',
            'Transferrin saturation 8% (low)',
          ],
          teachingPoints: [
            'Ferritin <30 ng/mL is highly sensitive for iron deficiency',
            'Treat with oral ferrous sulfate 325mg daily or alternate days',
            'Investigate and treat underlying menorrhagia (OBGYN referral)',
            'Repeat CBC in 8 weeks; hemoglobin should rise by 1-2 g/dL',
            'Continue iron 3-6 months to replete stores',
          ],
        },
        {
          presentation: '68-year-old male with progressive fatigue, numbness in feet, difficulty walking. Hemoglobin 9.1 g/dL, MCV 115 fL, B12 180 pg/mL (borderline low).',
          keyFindings: [
            'Macrocytic anemia with neurologic symptoms - B12 deficiency',
            'Elevated methylmalonic acid and homocysteine confirm deficiency',
            'Anti-intrinsic factor antibodies positive (pernicious anemia)',
          ],
          teachingPoints: [
            'B12 deficiency causes both hematologic AND neurologic manifestations',
            'Neurologic symptoms may not reverse if treatment delayed',
            'Give B12 1000 mcg IM weekly × 4 weeks, then monthly for life',
            'High-dose oral (1000-2000 mcg/day) also effective if compliance good',
            'Check for associated autoimmune diseases (thyroid, vitiligo)',
          ],
        },
        {
          presentation: '45-year-old female with fatigue, jaundice, dark urine. Hemoglobin 7.5 g/dL, MCV 92 fL, reticulocyte count 12%, LDH elevated, haptoglobin undetectable, positive direct Coombs test.',
          keyFindings: [
            'Normocytic anemia with elevated retic count - hemolysis confirmed',
            'Positive DAT indicates immune-mediated hemolysis',
            'Elevated LDH and low haptoglobin confirm intravascular component',
          ],
          teachingPoints: [
            'Warm autoimmune hemolytic anemia (wAIHA) - most common type',
            'Rule out secondary causes: SLE, CLL, lymphoma, drugs',
            'First-line: Prednisone 1 mg/kg/day; response in 1-3 weeks',
            'If refractory: Rituximab, splenectomy, or immunosuppressants',
            'High risk of venous thromboembolism - consider prophylaxis',
          ],
        },
        {
          presentation: '35-year-old male with CKD stage 4 (eGFR 28), hemoglobin 9.2 g/dL, ferritin 450 ng/mL, transferrin saturation 22%.',
          keyFindings: [
            'Anemia of CKD with functional iron deficiency',
            'Elevated ferritin due to inflammation but inadequate iron utilization',
            'TSAT <20% suggests iron deficiency despite high ferritin',
          ],
          teachingPoints: [
            'CKD anemia: Reduced EPO production + functional iron deficiency',
            'Check TSAT - if <20%, give IV iron supplementation',
            'Consider ESA (erythropoiesis-stimulating agent) if Hgb <10',
            'Target hemoglobin 10-11.5 g/dL (avoid >13 due to cardiovascular risk)',
            'HIF-PHIs (roxadustat, daprodustat) are newer oral alternatives',
          ],
        },
      ],
      
      references: [
        'Camaschella C. Iron-deficiency anemia. N Engl J Med. 2015;372(19):1832-1843.',
        'Stabler SP. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160.',
        'Packman CH. Hemolytic anemia due to warm autoantibodies. Blood Rev. 2008;22(1):1-15.',
        'Bunn HF. Pathogenesis and treatment of sickle cell disease. N Engl J Med. 1997;337(11):762-769.',
        'KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012;2(4):279-335.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      { structure: 'bone-marrow', focus: 'erythropoietic', description: 'Where red blood cells are produced from hematopoietic stem cells' },
      { structure: 'spleen', focus: 'red-pulp', description: 'Filters and removes old or damaged red blood cells; site of extravascular hemolysis' },
      { structure: 'liver', focus: 'kupffer-cells', description: 'Recycles iron from destroyed red blood cells; produces transferrin' },
      { structure: 'stomach', focus: 'parietal-cells', description: 'Produces intrinsic factor required for B12 absorption' },
      { structure: 'ileum', focus: 'terminal', description: 'Site of B12-intrinsic factor complex absorption' },
      { structure: 'duodenum', focus: 'proximal', description: 'Primary site of iron absorption via DMT1 transporter' },
      { structure: 'kidneys', focus: 'peritubular-cells', description: 'Produce erythropoietin (EPO) in response to hypoxia' },
    ],
    
    relatedLabs: [
      'complete-blood-count',
      'iron-studies',
      'ferritin',
      'b12-folate',
      'reticulocyte-count',
      'peripheral-smear',
      'ldh',
      'haptoglobin',
      'bilirubin',
      'methylmalonic-acid',
      'homocysteine',
      'direct-coombs-test',
      'hemoglobin-electrophoresis',
    ],
    
    relatedMedications: [
      'ferrous-sulfate',
      'ferric-carboxymaltose',
      'iron-dextran',
      'cyanocobalamin',
      'methylcobalamin',
      'folic-acid',
      'epoetin-alfa',
      'darbepoetin',
      'roxadustat',
      'prednisone',
      'rituximab',
      'eculizumab',
    ],
    
    relatedConditions: [
      'iron-deficiency-anemia',
      'pernicious-anemia',
      'sickle-cell-disease',
      'thalassemia',
      'autoimmune-hemolytic-anemia',
      'g6pd-deficiency',
      'hereditary-spherocytosis',
      'paroxysmal-nocturnal-hemoglobinuria',
      'myelodysplastic-syndrome',
      'aplastic-anemia',
      'chronic-kidney-disease',
      'celiac-disease',
      'inflammatory-bowel-disease',
    ],
  },
  
  quiz: {
    title: 'Test Your Anemia Knowledge',
    questions: [
      {
        id: 'anemia-q1',
        type: 'multiple-choice',
        complexity: 2,
        question: 'A patient has anemia with MCV 72 fL, ferritin 15 ng/mL, and transferrin saturation 12%. What is the most likely diagnosis?',
        options: [
          'Vitamin B12 deficiency',
          'Iron deficiency anemia',
          'Anemia of chronic disease',
          'Hemolytic anemia',
        ],
        correctAnswer: 1,
        explanation: 'Low MCV (<80 fL) indicates microcytic anemia. Low ferritin (<30 ng/mL) and low transferrin saturation (<20%) confirm iron deficiency anemia. B12 deficiency causes macrocytic anemia (high MCV), and anemia of chronic disease typically has normal or elevated ferritin.',
      },
      {
        id: 'anemia-q2',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which laboratory finding best distinguishes B12 deficiency from folate deficiency?',
        options: [
          'Elevated homocysteine',
          'Macrocytic MCV',
          'Elevated methylmalonic acid (MMA)',
          'Hypersegmented neutrophils',
        ],
        correctAnswer: 2,
        explanation: 'Both B12 and folate deficiency cause elevated homocysteine, macrocytosis, and hypersegmented neutrophils. However, ONLY B12 deficiency causes elevated methylmalonic acid (MMA) because B12 is a cofactor for methylmalonyl-CoA mutase. This distinction is clinically important because B12 deficiency causes neurologic damage that folate deficiency does not.',
      },
      {
        id: 'anemia-q3',
        type: 'multiple-choice',
        complexity: 4,
        question: 'A patient has hemoglobin 8.5 g/dL with reticulocyte count of 8%. What does this indicate?',
        options: [
          'Bone marrow failure',
          'Inadequate erythropoietic response',
          'Appropriate marrow response to hemolysis or blood loss',
          'Pure red cell aplasia',
        ],
        correctAnswer: 2,
        explanation: 'An elevated reticulocyte count (>2-3%) in the setting of anemia indicates the bone marrow is appropriately responding to increased red blood cell destruction (hemolysis) or blood loss by producing new cells. Low reticulocytes would suggest underproduction (bone marrow failure, nutrient deficiency, or anemia of chronic disease).',
      },
      {
        id: 'anemia-q4',
        type: 'multiple-choice',
        complexity: 5,
        question: 'In anemia of chronic disease with inflammation, what is the primary mechanism of functional iron deficiency?',
        options: [
          'Dietary iron malabsorption due to intestinal inflammation',
          'Hepcidin-mediated block of iron absorption and macrophage iron trapping',
          'Direct bacterial consumption of circulating iron',
          'Autoimmune destruction of iron transport proteins',
        ],
        correctAnswer: 1,
        explanation: 'Inflammatory cytokines (IL-6) increase hepcidin, which binds to ferroportin (the cellular iron exporter) causing its internalization and degradation. This blocks intestinal iron absorption and traps iron inside macrophages, making it unavailable for erythropoiesis despite adequate total body iron stores.',
      },
      {
        id: 'anemia-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A 55-year-old man presents with hemoglobin 7.2 g/dL, LDH 850 U/L (elevated), haptoglobin <10 mg/dL (low), indirect bilirubin 3.2 mg/dL (elevated), and positive direct antiglobulin test (DAT). Which is the most appropriate initial treatment?',
        options: [
          'Folic acid supplementation',
          'Prednisone 1 mg/kg/day',
          'Blood transfusion with Hb >7 g/dL threshold',
          'Iron supplementation',
        ],
        correctAnswer: 1,
        explanation: 'This presentation is classic for warm autoimmune hemolytic anemia (wAIHA): normocytic anemia, elevated reticulocytes (implied by hemolysis), high LDH, low haptoglobin, elevated indirect bilirubin, and positive DAT. First-line treatment is corticosteroids (prednisone 1 mg/kg/day). Folic acid and iron are not primary treatments. Transfusion is reserved for severe symptomatic anemia or Hb <7 g/dL with symptoms, and crossmatching may be difficult due to autoantibodies.',
      },
    ],
    passingScore: 80,
  },
  
  references: [
    {
      citation: 'Camaschella C. Iron-deficiency anemia. N Engl J Med. 2015;372(19):1832-1843.',
      doi: '10.1056/NEJMra1401038',
    },
    {
      citation: 'Stabler SP. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160.',
      doi: '10.1056/NEJMcp1113996',
    },
    {
      citation: 'DeLoughery TG. Microcytic anemia. N Engl J Med. 2014;371(14):1324-1331.',
      doi: '10.1056/NEJMra1215361',
    },
    {
      citation: 'Packman CH. Hemolytic anemia due to warm autoantibodies. Blood Rev. 2008;22(1):1-15.',
      doi: '10.1016/j.blre.2007.06.001',
    },
    {
      citation: 'Ganz T, Nemeth E. Iron homeostasis in host defence and inflammation. Nat Rev Immunol. 2015;15(8):500-510.',
      doi: '10.1038/nri3863',
    },
  ],
  
  resources: [
    {
      title: 'American Society of Hematology - Anemia',
      type: 'website',
      url: 'https://www.hematology.org/education/patients/anemia',
      description: 'Patient education resources from the professional hematology society',
    },
    {
      title: 'Iron Disorders Institute',
      type: 'website',
      url: 'https://www.irondisorders.org/',
      description: 'Comprehensive information on iron deficiency and iron overload conditions',
    },
    {
      title: 'CDC Iron Deficiency Information',
      type: 'website',
      url: 'https://www.cdc.gov/ncbddd/blooddisorders/iron.html',
      description: 'Public health information on iron deficiency from the CDC',
    },
  ],
};

export default anemiaModule;
