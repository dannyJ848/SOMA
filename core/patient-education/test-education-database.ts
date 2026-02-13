/**
 * Test Education Database
 *
 * Comprehensive patient education about medical tests.
 * The goal: Every patient understands WHY a test is ordered,
 * WHAT it measures, and WHAT the results mean for their health.
 *
 * No more anxiety from mysterious tests - knowledge is power.
 */

import type { TestEducation } from './types.js';

// =============================================================================
// HEMOGLOBIN A1C - The Blood Sugar Time Machine
// =============================================================================

const HEMOGLOBIN_A1C_EDUCATION: TestEducation = {
  id: 'hemoglobin-a1c',
  testName: 'Hemoglobin A1c (HbA1c)',
  alternativeNames: ['A1c', 'Glycosylated Hemoglobin', 'Glycated Hemoglobin', 'HbA1c'],
  category: 'blood',

  whatItMeasures: {
    simple: 'This test shows your average blood sugar over the past 2-3 months. It\'s like a report card for how well your blood sugar has been controlled.',
    detailed: 'HbA1c measures the percentage of hemoglobin (the protein in red blood cells that carries oxygen) that has glucose stuck to it. Because red blood cells live for about 3 months, this test reflects your average blood sugar during that time - it can\'t be fooled by one good or bad day.',
    comprehensive: 'The test measures the percentage of hemoglobin that has undergone non-enzymatic glycation at the N-terminal valine of the β-chain. Glucose irreversibly attaches to hemoglobin in proportion to its concentration in blood. Since red blood cells have a lifespan of approximately 120 days, HbA1c reflects the weighted average glucose exposure, with recent weeks contributing more than earlier ones (50% from the previous month, 25% from the month before that).',
    analogy: 'Think of your red blood cells as sponges floating through a river of blood. If there\'s a lot of sugar in the river, more sugar sticks to each sponge. The A1c test measures how "sticky" your sponges have gotten over the past few months.',
    visualMetaphor: 'Red blood cells gradually accumulating sugar crystals on their surface over time',
  },

  whyOrdered: [
    {
      reason: 'Diagnosing diabetes',
      explanation: {
        simple: 'If your A1c is 6.5% or higher, you may have diabetes.',
        detailed: 'HbA1c is one of the main ways to diagnose diabetes. Unlike fasting glucose, it doesn\'t require fasting and reflects longer-term glucose control. An A1c of 5.7-6.4% indicates prediabetes, and 6.5% or higher indicates diabetes.',
        comprehensive: 'Per ADA criteria, HbA1c ≥6.5% confirms diabetes mellitus (requires confirmation with a second test unless clear hyperglycemic symptoms are present). The test has advantages for diagnosis: no fasting required, less day-to-day variability, and better assessment of chronic hyperglycemia. However, conditions affecting red blood cell turnover (hemoglobinopathies, anemia, recent transfusion) can interfere with accuracy.',
      },
      conditionsRelatedTo: ['type-2-diabetes', 'type-1-diabetes', 'prediabetes'],
    },
    {
      reason: 'Monitoring diabetes control',
      explanation: {
        simple: 'For people with diabetes, this test shows how well treatment is working and whether blood sugar has been well-controlled.',
        detailed: 'The A1c is the gold standard for monitoring diabetes management. It\'s typically checked every 3-6 months. The goal for most adults is below 7%, though targets are individualized based on factors like age, other health conditions, and hypoglycemia risk.',
        comprehensive: 'Per landmark trials (DCCT, UKPDS), each 1% reduction in HbA1c reduces microvascular complications by approximately 25-40%. Current guidelines recommend HbA1c testing every 3 months when not at goal or after treatment changes, and every 6 months when stable at goal. Target is <7% for most non-pregnant adults, with individualization (stricter for young/healthy patients, more relaxed for elderly/frail patients with limited life expectancy).',
      },
      conditionsRelatedTo: ['type-2-diabetes', 'type-1-diabetes'],
    },
    {
      reason: 'Screening for diabetes',
      explanation: {
        simple: 'Your doctor may use this test to check if you\'re at risk for diabetes, especially if you have risk factors.',
        detailed: 'A1c is used to screen for diabetes in adults who are overweight and have additional risk factors (family history, high-risk ethnicity, history of gestational diabetes, etc.) or all adults over age 45.',
        comprehensive: 'ADA recommends screening in overweight adults (BMI ≥25, or ≥23 in Asian Americans) with one or more risk factors: first-degree relative with diabetes, high-risk race/ethnicity, history of CVD, hypertension, HDL <35 or TG >250, PCOS, physical inactivity, acanthosis nigricans. Screen all adults ≥45 regardless of risk factors. If normal, repeat every 3 years.',
      },
      conditionsRelatedTo: ['prediabetes', 'type-2-diabetes', 'metabolic-syndrome'],
    },
  ],

  preparation: {
    fasting: 'no',
    fastingDetails: undefined,
    medicationChanges: 'No changes needed. Continue taking all medications as usual.',
    otherInstructions: ['No special preparation needed', 'Can be done at any time of day', 'Eating before the test does not affect results'],
    whatToTellDoctor: ['If you have anemia or other blood disorders', 'If you\'ve had recent blood loss or transfusion', 'If you have hemoglobin variants (sickle cell, thalassemia)', 'Recent pregnancy'],
    reasonsForRestrictions: 'The A1c measures a long-term average, so a single meal or even several days of unusual eating won\'t affect the result. This is one of its advantages as a test.',
  },

  whatHappensDuring: {
    duration: '1-2 minutes',
    whatToExpect: 'A small blood sample is taken from a vein in your arm. You\'ll feel a brief pinch when the needle goes in.',
    painLevel: 'minimal',
    aftercare: 'You can resume all normal activities immediately. No restrictions on eating, drinking, or exercise.',
  },

  normalRanges: {
    standardRange: {
      value: 'Below 5.7%',
      interpretation: {
        simple: 'Your blood sugar has been in a healthy range.',
        detailed: 'An A1c below 5.7% indicates normal blood sugar metabolism. Your body is effectively managing glucose levels.',
        comprehensive: 'HbA1c <5.7% corresponds to an estimated average glucose (eAG) of approximately <117 mg/dL. This indicates preserved beta-cell function and insulin sensitivity. However, A1c in the high-normal range (5.5-5.6%) in combination with other risk factors may warrant monitoring.',
      },
    },
    ageVariations: [
      {
        ageGroup: 'Adults without diabetes',
        range: 'Below 5.7%',
        explanation: 'This is considered normal for adults without diabetes.',
      },
      {
        ageGroup: 'Adults with diabetes (most)',
        range: 'Below 7.0%',
        explanation: 'This is the target for most adults with diabetes to reduce complication risk while avoiding hypoglycemia.',
      },
      {
        ageGroup: 'Older adults with multiple health issues',
        range: 'Below 8.0%',
        explanation: 'A slightly higher target may be appropriate for older adults where the risk of hypoglycemia outweighs the benefit of very tight control.',
      },
      {
        ageGroup: 'Pregnancy with pre-existing diabetes',
        range: 'Below 6.0% (if achievable safely)',
        explanation: 'Tighter control is beneficial during pregnancy to protect the developing baby.',
      },
    ],
    criticalValues: {
      low: {
        value: 'Below 4.0% (unusual)',
        whatItMeans: 'Very rare without medication causing hypoglycemia. May indicate anemia, hemolysis, or technical issues.',
        urgency: 'schedule-soon',
      },
      high: {
        value: 'Above 9.0%',
        whatItMeans: 'Indicates poor diabetes control with significantly elevated risk of complications. Treatment intensification likely needed.',
        urgency: 'call-doctor-today',
      },
    },
  },

  resultInterpretation: [
    {
      range: 'Below 5.7%',
      meaning: {
        simple: 'Normal - your blood sugar control has been healthy.',
        detailed: 'Your average blood sugar over the past 2-3 months has been in the normal range. This means a low risk of diabetes at this time.',
        comprehensive: 'Normal glucose homeostasis. The estimated average glucose (eAG) is approximately 100-117 mg/dL. Continue healthy lifestyle practices. If risk factors are present, periodic rescreening is recommended.',
      },
      implications: ['Continue healthy lifestyle', 'Rescreen in 3 years if risk factors present', 'No diabetes medication needed'],
      nextSteps: ['Maintain healthy weight', 'Regular physical activity', 'Balanced diet'],
    },
    {
      range: '5.7% to 6.4%',
      meaning: {
        simple: 'Prediabetes - your blood sugar is higher than normal but not yet diabetes. This is a warning sign.',
        detailed: 'You have prediabetes, which means your blood sugar is elevated but not high enough for a diabetes diagnosis. About 70% of people with prediabetes eventually develop diabetes, BUT lifestyle changes can prevent or delay this.',
        comprehensive: 'Impaired glucose regulation (prediabetes). EAG approximately 117-137 mg/dL. Annual rate of conversion to diabetes is approximately 5-10%. However, intensive lifestyle intervention (Diabetes Prevention Program model) can reduce progression risk by 58%, more effective than metformin (31% risk reduction). Some patients with A1c 6.0-6.4% may benefit from metformin, particularly if BMI >35, age <60, or prior gestational diabetes.',
      },
      implications: ['High risk of developing diabetes', 'Increased cardiovascular risk', 'Reversible with lifestyle changes'],
      nextSteps: ['Dietary changes (reduce refined carbs and sugar)', 'Increase physical activity (150 min/week)', 'Aim for 5-7% weight loss if overweight', 'Consider diabetes prevention program', 'Recheck in 3-6 months'],
    },
    {
      range: '6.5% or higher',
      meaning: {
        simple: 'Diabetes - your blood sugar has been high enough to meet the criteria for diabetes.',
        detailed: 'An A1c of 6.5% or higher indicates diabetes. This means your body isn\'t managing blood sugar effectively. The good news: with proper treatment and lifestyle changes, diabetes can be well-controlled.',
        comprehensive: 'Diabetes mellitus per ADA diagnostic criteria (requires confirmation unless symptomatic hyperglycemia present). EAG ≥154 mg/dL. Initial evaluation should include assessment for complications (nephropathy, retinopathy, neuropathy, cardiovascular disease). Treatment initiation typically begins with lifestyle modification plus metformin. SGLT2 inhibitors or GLP-1 RA should be considered early, especially with established cardiovascular disease, heart failure, or CKD.',
      },
      implications: ['Diagnosis of diabetes', 'Need for treatment (lifestyle ± medication)', 'Regular monitoring required'],
      nextSteps: ['Discuss treatment plan with doctor', 'Diabetes education', 'Eye exam', 'Kidney function tests', 'Foot examination', 'Cardiovascular risk assessment'],
    },
    {
      range: '7.0% to 8.0% (with diabetes)',
      meaning: {
        simple: 'Moderately above goal - your diabetes could be better controlled, but you\'re in a range many people achieve.',
        detailed: 'While below 7% is the target for most people, being in this range is reasonable for some patients. Your doctor will help determine if treatment adjustments are needed based on your individual situation.',
        comprehensive: 'Suboptimal but often acceptable control. Risk of microvascular complications is elevated compared to <7% but still significantly better than uncontrolled diabetes. Consider treatment intensification, patient education on adherence, and addressing barriers to control. For some patients (elderly, limited life expectancy, high hypoglycemia risk), this range may be an appropriate target.',
      },
      implications: ['Above standard target for most adults', 'May benefit from treatment adjustment', 'Increased complication risk compared to goal'],
      nextSteps: ['Review medication adherence', 'Assess dietary patterns', 'Consider medication adjustment', 'More frequent monitoring'],
    },
    {
      range: 'Above 8.0% (with diabetes)',
      meaning: {
        simple: 'Needs improvement - blood sugar has been higher than it should be, which increases risk of complications.',
        detailed: 'This level indicates poor blood sugar control that significantly increases the risk of diabetes complications (eye, kidney, nerve, and heart problems). It\'s important to work with your healthcare team to bring this down.',
        comprehensive: 'Poor glycemic control with substantially elevated risk of micro- and macrovascular complications. Each 1% above 7% significantly increases complication risk. Requires comprehensive review: medication adherence, medication intensification (add/optimize agents), dietary referral, assessment for depression or other barriers, consideration of CGM or insulin pump if applicable. Frequent follow-up until improved.',
      },
      implications: ['Poor diabetes control', 'High risk of complications', 'Urgent need for treatment adjustment'],
      nextSteps: ['Urgent review with healthcare team', 'Assess barriers to control', 'Intensify treatment', 'Consider referral to endocrinologist', 'More frequent A1c monitoring'],
    },
    {
      range: 'Above 10.0%',
      meaning: {
        simple: 'Very poor control - needs immediate attention to prevent serious complications.',
        detailed: 'This level of blood sugar elevation is dangerous and requires urgent intervention. At this level, you\'re at high risk for serious complications including diabetic ketoacidosis, kidney damage, and vision problems.',
        comprehensive: 'Severe hyperglycemia requiring urgent intervention. EAG >240 mg/dL. Assess for symptoms of hyperglycemia, ketonuria, dehydration. Consider urgent insulin initiation if symptomatic or if oral agents have failed. Evaluate for adherence issues, medication access, psychosocial barriers, concurrent illness, or undiagnosed type 1/LADA. Very high priority for intensive management.',
      },
      implications: ['Severe diabetes control issue', 'Very high complication risk', 'May need insulin'],
      nextSteps: ['Urgent medical attention', 'Likely need for insulin or significant medication changes', 'Frequent follow-up', 'Comprehensive diabetes education'],
    },
  ],

  commonMisconceptions: [
    {
      misconception: 'A good A1c means I don\'t need to check my daily blood sugar.',
      reality: 'A1c is an average - it can\'t show high and low swings throughout the day. You could have an "okay" A1c but still have dangerous highs and lows that average out. Daily monitoring (if recommended) shows these patterns.',
    },
    {
      misconception: 'I can get a good A1c by eating well for a few days before the test.',
      reality: 'The A1c reflects 2-3 months of blood sugar, so a few days of good eating won\'t change it. This is actually a feature - it gives a true picture of your control.',
    },
    {
      misconception: 'An A1c of 6% means my average blood sugar was 6.',
      reality: 'A1c is a percentage, not a blood sugar number. An A1c of 6% corresponds to an average blood sugar of about 126 mg/dL. There are conversion charts to translate between A1c and average glucose.',
    },
    {
      misconception: 'A1c is the only number that matters in diabetes.',
      reality: 'While important, A1c is one piece of the puzzle. Time in range (how often blood sugar is 70-180 mg/dL), fasting glucose, post-meal glucose, and avoiding hypoglycemia all matter too.',
    },
    {
      misconception: 'If my A1c is normal, I can\'t have blood sugar problems.',
      reality: 'Some conditions (anemia, certain hemoglobin variants) can cause falsely normal A1c readings. If you have symptoms of high blood sugar with a normal A1c, other tests may be needed.',
    },
  ],

  relatedTests: ['fasting-glucose', 'oral-glucose-tolerance-test', 'fructosamine', 'continuous-glucose-monitoring'],
  relatedConditions: ['type-2-diabetes', 'type-1-diabetes', 'prediabetes', 'metabolic-syndrome', 'gestational-diabetes'],

  anatomyLinks: [
    { structureId: 'blood-cells', structureName: 'Red Blood Cells', relevance: 'Where hemoglobin is found and glucose attaches', viewPreset: 'anterior' },
    { structureId: 'pancreas', structureName: 'Pancreas', relevance: 'Produces insulin that controls blood sugar', viewPreset: 'anterior' },
  ],
};

// =============================================================================
// COMPLETE BLOOD COUNT - Your Blood's Report Card
// =============================================================================

const COMPLETE_BLOOD_COUNT_EDUCATION: TestEducation = {
  id: 'complete-blood-count',
  testName: 'Complete Blood Count (CBC)',
  alternativeNames: ['CBC', 'Full Blood Count', 'FBC', 'Blood Count'],
  category: 'blood',

  whatItMeasures: {
    simple: 'This test counts and examines your blood cells - the red cells that carry oxygen, white cells that fight infection, and platelets that help blood clot.',
    detailed: 'A CBC measures three types of blood cells: (1) Red blood cells (RBCs) and their hemoglobin content - these carry oxygen throughout your body, (2) White blood cells (WBCs) - your immune system\'s soldiers that fight infection, and (3) Platelets - tiny cell fragments that help form blood clots.',
    comprehensive: 'The CBC includes: Erythrocyte count (RBC), hemoglobin (Hgb), hematocrit (Hct), red cell indices (MCV, MCH, MCHC), RDW, reticulocyte count (if ordered), leukocyte count (WBC) with differential (neutrophils, lymphocytes, monocytes, eosinophils, basophils), and platelet count with MPV. Modern analyzers also provide NRBC count and immature granulocyte counts.',
    analogy: 'Think of your blood as a delivery company. The CBC checks on all your "employees": the red cells are delivery trucks carrying oxygen packages, white cells are the security team protecting against invaders, and platelets are the repair crew that patches holes.',
    visualMetaphor: 'A cross-section of blood showing red discs (RBCs), various shaped white defenders (WBCs), and tiny platelet fragments',
  },

  whyOrdered: [
    {
      reason: 'General health screening',
      explanation: {
        simple: 'The CBC is part of routine check-ups to make sure your blood is healthy.',
        detailed: 'The CBC is one of the most commonly ordered tests because it provides a wealth of information about your overall health. Abnormalities can be early signs of many conditions, sometimes before you have symptoms.',
        comprehensive: 'As a screening test, the CBC can detect occult anemia, infection, hematologic malignancy, and many systemic diseases. It\'s often included in annual physicals and pre-operative assessments. Abnormalities often warrant further investigation with additional tests.',
      },
      conditionsRelatedTo: ['anemia', 'infection', 'leukemia', 'thrombocytopenia'],
    },
    {
      reason: 'Investigating symptoms like fatigue, weakness, or bruising',
      explanation: {
        simple: 'If you\'re feeling unusually tired, weak, or bruising easily, blood cell problems could be the cause.',
        detailed: 'Fatigue can result from anemia (low red cells/hemoglobin). Easy bruising or prolonged bleeding can indicate platelet problems. Frequent infections might suggest white blood cell issues. The CBC helps identify these.',
        comprehensive: 'Symptomatic anemia typically presents with fatigue, dyspnea, pallor when Hgb <10 g/dL, though symptoms depend on rate of decline and cardiopulmonary reserve. Thrombocytopenia (<150K) may present with petechiae, purpura, or bleeding. Neutropenia (<1500) increases infection risk. The CBC pattern helps narrow the differential.',
      },
      conditionsRelatedTo: ['anemia', 'thrombocytopenia', 'leukopenia', 'bleeding-disorders'],
    },
    {
      reason: 'Monitoring during treatment',
      explanation: {
        simple: 'Many treatments (especially cancer treatments) can affect blood cells. Regular CBCs make sure your cells stay at safe levels.',
        detailed: 'Chemotherapy, radiation, and many medications can suppress bone marrow, reducing blood cell production. Regular CBC monitoring ensures cell counts stay safe. If counts drop too low, treatment may need adjustment.',
        comprehensive: 'Myelosuppressive therapies require regular CBC monitoring. Nadir timing varies by regimen. Critical thresholds: ANC <1000 (infection risk), platelets <50K (bleeding precautions), <10K (spontaneous bleeding risk). Many protocols include growth factor support (G-CSF) or transfusion triggers.',
      },
      conditionsRelatedTo: ['chemotherapy-monitoring', 'medication-monitoring'],
    },
    {
      reason: 'Diagnosing blood disorders',
      explanation: {
        simple: 'The CBC can help diagnose conditions like anemia, blood cancers, and immune problems.',
        detailed: 'Characteristic patterns in the CBC can point to specific diagnoses. For example, microcytic anemia (small red cells) often indicates iron deficiency, while large red cells might suggest B12 deficiency. An abnormal number or type of white cells could indicate leukemia.',
        comprehensive: 'Diagnostic patterns include: microcytic anemia (MCV <80) - iron deficiency, thalassemia, chronic disease; macrocytic anemia (MCV >100) - B12/folate deficiency, MDS, liver disease, alcohol; normocytic anemia - acute blood loss, hemolysis, early deficiency states. WBC differential patterns: left shift suggests bacterial infection, eosinophilia suggests allergy/parasites, lymphocytosis may indicate viral infection or CLL.',
      },
      conditionsRelatedTo: ['anemia', 'leukemia', 'lymphoma', 'myelodysplastic-syndrome', 'thalassemia'],
    },
  ],

  preparation: {
    fasting: 'no',
    fastingDetails: undefined,
    medicationChanges: 'Continue all medications unless specifically instructed otherwise.',
    otherInstructions: ['No special preparation usually needed', 'Stay well hydrated (makes blood draw easier)', 'Let the lab know if you have difficult veins'],
    whatToTellDoctor: ['If you have bleeding disorders', 'Recent infections or illness', 'Medications that affect blood (blood thinners, chemotherapy)', 'Recent blood transfusion'],
    reasonsForRestrictions: 'The CBC is not significantly affected by eating, so fasting is not required. Dehydration can mildly affect results.',
  },

  whatHappensDuring: {
    duration: '1-2 minutes',
    whatToExpect: 'A small blood sample is taken from a vein in your arm. You\'ll feel a brief pinch when the needle is inserted.',
    painLevel: 'minimal',
    aftercare: 'Apply gentle pressure to the site for a few minutes. You can resume normal activities immediately. A small bruise at the site is normal.',
  },

  normalRanges: {
    standardRange: {
      value: 'Varies by component (see below)',
      interpretation: {
        simple: 'Normal results mean your blood cells are healthy and present in the right numbers.',
        detailed: 'The CBC has many components, each with its own normal range. Your doctor will review all of them together to get the complete picture.',
        comprehensive: 'Reference ranges vary by laboratory, altitude, age, sex, and race. Always interpret against the specific lab\'s reference range. Isolated minor abnormalities are often not clinically significant.',
      },
    },
    ageVariations: [
      {
        ageGroup: 'Adult men',
        range: 'Hemoglobin: 13.5-17.5 g/dL; WBC: 4,500-11,000/μL; Platelets: 150,000-400,000/μL',
        explanation: 'Men typically have higher hemoglobin than women due to testosterone effects.',
      },
      {
        ageGroup: 'Adult women',
        range: 'Hemoglobin: 12.0-16.0 g/dL; WBC: 4,500-11,000/μL; Platelets: 150,000-400,000/μL',
        explanation: 'Women typically have lower hemoglobin due to menstrual blood loss and hormonal differences.',
      },
      {
        ageGroup: 'Newborns',
        range: 'Hemoglobin: 14-24 g/dL; WBC: 9,000-30,000/μL',
        explanation: 'Newborns have higher hemoglobin and white cell counts, which normalize over weeks to months.',
      },
      {
        ageGroup: 'Elderly',
        range: 'Similar to younger adults, though mild anemia becomes more common',
        explanation: 'Age-related decline in bone marrow reserve may lead to slightly lower counts.',
      },
    ],
    criticalValues: {
      low: {
        value: 'Hemoglobin <7 g/dL, WBC <2,000/μL, Platelets <20,000/μL',
        whatItMeans: 'Dangerously low values that may require urgent treatment including possible transfusion.',
        urgency: 'go-to-er-now',
      },
      high: {
        value: 'Hemoglobin >20 g/dL, WBC >30,000/μL (without infection), Platelets >1,000,000/μL',
        whatItMeans: 'Significantly elevated values that require evaluation for blood disorders.',
        urgency: 'call-doctor-today',
      },
    },
  },

  resultInterpretation: [
    {
      range: 'Low hemoglobin/red cells (Anemia)',
      meaning: {
        simple: 'You don\'t have enough red blood cells or hemoglobin to carry oxygen efficiently. This can make you feel tired, weak, or short of breath.',
        detailed: 'Anemia has many causes: blood loss (obvious or hidden), not making enough red cells (iron, B12, or folate deficiency; bone marrow problems), or destroying cells too fast (hemolysis). The pattern of other CBC values helps determine the cause.',
        comprehensive: 'Anemia classification by MCV: microcytic (<80 fL) - iron deficiency (most common), thalassemia, chronic disease, sideroblastic; normocytic (80-100 fL) - acute blood loss, hemolysis, early deficiency, CKD, chronic disease; macrocytic (>100 fL) - B12/folate deficiency, MDS, liver disease, hypothyroidism, drugs. Further workup includes reticulocyte count, iron studies, B12/folate, hemolysis labs, peripheral smear.',
      },
      implications: ['Fatigue, weakness, shortness of breath', 'May indicate blood loss, nutritional deficiency, or bone marrow problem', 'Needs further investigation to find cause'],
      nextSteps: ['Additional tests to determine cause (iron studies, B12, etc.)', 'Possible dietary changes or supplements', 'Treatment of underlying cause', 'Possible transfusion if severe'],
    },
    {
      range: 'High hemoglobin/red cells (Polycythemia)',
      meaning: {
        simple: 'You have more red blood cells than normal. This can make blood thicker and harder to pump.',
        detailed: 'High red cell count can be a response to low oxygen (living at high altitude, lung disease, smoking) or a blood disorder (polycythemia vera). Thick blood increases risk of clots.',
        comprehensive: 'Erythrocytosis classification: relative (dehydration), secondary (appropriate response to hypoxia from COPD, sleep apnea, high altitude; or inappropriate from EPO-secreting tumors), or primary (polycythemia vera - JAK2 mutation). Evaluation includes oxygen saturation, EPO level, JAK2 mutation testing. Treatment depends on cause; phlebotomy may be needed.',
      },
      implications: ['Blood may be thicker than normal', 'Increased risk of blood clots', 'May indicate lung disease, sleep apnea, or blood disorder'],
      nextSteps: ['Evaluate for causes (oxygen levels, sleep study)', 'JAK2 mutation testing if polycythemia vera suspected', 'Possible therapeutic phlebotomy'],
    },
    {
      range: 'Low white blood cells (Leukopenia)',
      meaning: {
        simple: 'Your immune system has fewer infection-fighting cells than normal, which may make you more vulnerable to infections.',
        detailed: 'Low white cells can result from viral infections, autoimmune diseases, bone marrow problems, or medications. The type of white cell affected (neutrophils, lymphocytes, etc.) provides clues to the cause.',
        comprehensive: 'Leukopenia causes by cell type: Neutropenia - drugs (chemotherapy, antibiotics, antithyroid), viral infections, autoimmune, aplastic anemia, congenital; Lymphopenia - HIV, autoimmune, steroids, chemotherapy, radiation. ANC <1000/μL significantly increases infection risk; <500/μL is severe. Evaluate with peripheral smear, HIV testing if appropriate, ANA, medication review.',
      },
      implications: ['Increased susceptibility to infections', 'May need to avoid sick contacts', 'May indicate medication effect, viral infection, or bone marrow issue'],
      nextSteps: ['Review medications', 'Evaluate for infections or autoimmune disease', 'May need bone marrow evaluation if persistent'],
    },
    {
      range: 'High white blood cells (Leukocytosis)',
      meaning: {
        simple: 'You have more infection-fighting cells than normal. This often means your body is fighting an infection, but can have other causes.',
        detailed: 'The most common cause of high white cells is infection - your body ramps up production to fight invaders. Other causes include inflammation, stress, steroids, smoking, and rarely, leukemia. The type of white cell elevated provides important clues.',
        comprehensive: 'Leukocytosis causes by cell type: Neutrophilia - bacterial infection, inflammation, steroids, smoking, stress, CML, leukemoid reaction; Lymphocytosis - viral infection, CLL, pertussis; Eosinophilia - allergies, parasites, drug reaction, hypereosinophilic syndrome; Monocytosis - chronic infection, autoimmune, MDS. Markedly elevated WBC (>50K) requires urgent evaluation for leukemia. Peripheral smear is essential.',
      },
      implications: ['Usually indicates your body is fighting infection', 'Can also be response to inflammation, stress, or steroids', 'Very high counts need evaluation for leukemia'],
      nextSteps: ['Evaluate for infection if symptomatic', 'Review medications (steroids can elevate)', 'Peripheral blood smear if very elevated', 'Possible bone marrow biopsy if leukemia suspected'],
    },
    {
      range: 'Low platelets (Thrombocytopenia)',
      meaning: {
        simple: 'You have fewer clotting cells than normal, which can lead to bruising or bleeding.',
        detailed: 'Platelets help your blood clot. Low platelets can result from not making enough (bone marrow problems), destroying them too fast (immune destruction), or trapping them (enlarged spleen). Bleeding risk increases as count drops.',
        comprehensive: 'Thrombocytopenia causes: Decreased production - aplastic anemia, leukemia, MDS, B12/folate deficiency, alcohol; Increased destruction - ITP, TTP/HUS, DIC, drugs (heparin, quinine); Sequestration - splenomegaly. Pseudothrombocytopenia (clumping artifact) must be excluded. Bleeding risk increases <50K; spontaneous bleeding risk <10-20K. Workup includes smear, HIV/HCV, coagulation studies.',
      },
      implications: ['Increased risk of bruising and bleeding', 'May need to avoid contact sports and certain medications', 'Needs investigation for cause'],
      nextSteps: ['Peripheral blood smear to rule out clumping', 'Evaluate for causes (medications, infections, autoimmune)', 'Avoid aspirin and NSAIDs', 'Possible platelet transfusion if very low with bleeding'],
    },
    {
      range: 'High platelets (Thrombocytosis)',
      meaning: {
        simple: 'You have more clotting cells than normal. This can be a reaction to infection/inflammation or a blood disorder.',
        detailed: 'High platelets are most commonly "reactive" - a response to infection, inflammation, iron deficiency, or surgery. Less commonly, high platelets indicate a primary bone marrow disorder. Very high counts can paradoxically cause both clotting AND bleeding.',
        comprehensive: 'Thrombocytosis classification: Reactive (most common) - infection, inflammation, iron deficiency, post-splenectomy, malignancy, bleeding recovery; Primary - essential thrombocythemia, polycythemia vera, CML. Reactive rarely exceeds 1 million. ET/PV often harbor JAK2 or CALR mutations. Evaluate with iron studies, CRP, ferritin; JAK2/CALR if primary suspected. Aspirin often used for primary thrombocytosis.',
      },
      implications: ['Usually reactive to infection or inflammation', 'If very high or persistent, may indicate bone marrow disorder', 'Can increase clotting risk'],
      nextSteps: ['Look for underlying cause (infection, inflammation)', 'Iron studies (iron deficiency can elevate platelets)', 'If persistent or very high, evaluate for myeloproliferative disorder'],
    },
  ],

  commonMisconceptions: [
    {
      misconception: 'A "complete" blood count tests for everything in the blood.',
      reality: 'Despite its name, the CBC only tests blood cells. It doesn\'t measure cholesterol, blood sugar, electrolytes, or organ function - those require separate tests.',
    },
    {
      misconception: 'A slightly abnormal CBC always means something is wrong.',
      reality: 'Many minor variations are normal. A value just slightly outside the "normal" range may not be significant, especially if you feel fine. Your doctor interprets results in context.',
    },
    {
      misconception: 'If my CBC is normal, I can\'t have cancer.',
      reality: 'Many cancers don\'t affect blood counts until advanced stages. A normal CBC does not rule out cancer - specific cancer screening tests are needed.',
    },
    {
      misconception: 'Eating iron-rich foods right before the test will improve my results.',
      reality: 'The CBC measures current blood cells, not iron levels directly. Eating iron before the test won\'t quickly change your blood cell counts. Building up blood cells takes weeks.',
    },
  ],

  relatedTests: ['iron-studies', 'reticulocyte-count', 'peripheral-blood-smear', 'vitamin-b12', 'folate'],
  relatedConditions: ['anemia', 'leukemia', 'thrombocytopenia', 'polycythemia-vera', 'infection'],

  anatomyLinks: [
    { structureId: 'bone-marrow', structureName: 'Bone Marrow', relevance: 'Where all blood cells are produced', viewPreset: 'anterior' },
    { structureId: 'spleen', structureName: 'Spleen', relevance: 'Filters blood and removes old cells', viewPreset: 'anterior' },
  ],
};

// =============================================================================
// BASIC METABOLIC PANEL - Your Body's Chemistry Report
// =============================================================================

const BASIC_METABOLIC_PANEL_EDUCATION: TestEducation = {
  id: 'basic-metabolic-panel',
  testName: 'Basic Metabolic Panel (BMP)',
  alternativeNames: ['BMP', 'Chem 7', 'Chem 8', 'SMA-7', 'SMAC'],
  category: 'blood',

  whatItMeasures: {
    simple: 'This test checks the chemistry of your blood - your blood sugar, kidney function, and important minerals (electrolytes) that keep your body running properly.',
    detailed: 'The BMP measures 8 substances: (1) Glucose (blood sugar), (2) BUN and (3) Creatinine (kidney function markers), (4) Sodium, (5) Potassium, (6) Chloride, and (7) CO2/Bicarbonate (electrolytes), and (8) Calcium. These reflect your metabolic health.',
    comprehensive: 'Components: Glucose (fasting or random), BUN (blood urea nitrogen - reflects protein catabolism and renal function), Creatinine (primarily reflects GFR), Sodium (major extracellular cation, reflects hydration/fluid balance), Potassium (major intracellular cation, critical for cardiac function), Chloride (major extracellular anion), CO2/Bicarbonate (acid-base status), Calcium (total, not ionized - neuromuscular and skeletal function). The anion gap can be calculated: Na - (Cl + HCO3).',
    analogy: 'Think of your body as a complex machine. The BMP checks the essential fluids and chemicals that keep everything running: the fuel (glucose), the waste removal system (kidneys), and the electrical balance (electrolytes) that keeps your heart and muscles working.',
    visualMetaphor: 'A dashboard with gauges showing different vital chemicals at their proper levels',
  },

  whyOrdered: [
    {
      reason: 'Routine health screening',
      explanation: {
        simple: 'The BMP is often part of routine check-ups to make sure your body\'s chemistry is balanced.',
        detailed: 'Many conditions - diabetes, kidney disease, electrolyte imbalances - can be detected by the BMP before you have symptoms. It\'s a good baseline to have on file.',
        comprehensive: 'As a screening tool, the BMP can detect early diabetes/prediabetes (glucose), chronic kidney disease (creatinine, BUN, eGFR), and electrolyte abnormalities from medications or underlying conditions. Pre-operative BMP establishes baseline and identifies issues requiring pre-surgical optimization.',
      },
      conditionsRelatedTo: ['diabetes', 'chronic-kidney-disease', 'dehydration'],
    },
    {
      reason: 'Monitoring medications',
      explanation: {
        simple: 'Many medications can affect your kidney function or electrolytes, so regular monitoring ensures they\'re staying safe.',
        detailed: 'Medications like diuretics (water pills), ACE inhibitors, ARBs, and NSAIDs can affect kidney function and potassium levels. Diabetes medications require glucose monitoring. Regular BMPs help catch problems early.',
        comprehensive: 'Medication monitoring: ACE inhibitors/ARBs - creatinine rise (up to 30% acceptable), hyperkalemia; Diuretics - hypo/hyperkalemia (depending on type), hyponatremia, metabolic alkalosis or acidosis; NSAIDs - creatinine rise, hyperkalemia; Metformin - requires adequate renal function; Lithium - affects renal function and sodium. Monitoring frequency depends on medication and patient stability.',
      },
      conditionsRelatedTo: ['medication-monitoring', 'hypertension', 'heart-failure'],
    },
    {
      reason: 'Evaluating symptoms',
      explanation: {
        simple: 'Symptoms like confusion, weakness, or irregular heartbeat can be caused by electrolyte imbalances.',
        detailed: 'Many vague symptoms can be explained by metabolic abnormalities. Confusion can result from sodium or glucose abnormalities. Weakness and heart rhythm problems can come from potassium imbalances. The BMP helps identify these.',
        comprehensive: 'Symptom-based ordering: Altered mental status - check glucose (hypo/hyperglycemia), sodium (hypo/hypernatremia), calcium, uremia; Muscle weakness - potassium, calcium, magnesium (not on BMP but often added); Cardiac arrhythmias - potassium, calcium, magnesium; Nausea/vomiting - electrolyte depletion, renal function; Polyuria/polydipsia - glucose, calcium, kidney function.',
      },
      conditionsRelatedTo: ['electrolyte-disorders', 'diabetes', 'kidney-disease'],
    },
    {
      reason: 'Emergency evaluation',
      explanation: {
        simple: 'In emergencies, the BMP quickly shows if there are life-threatening chemical imbalances.',
        detailed: 'The BMP includes several values that can be immediately dangerous if very abnormal: glucose, potassium, and kidney function. In emergencies, this test helps guide immediate treatment.',
        comprehensive: 'Critical values requiring urgent intervention: Glucose <50 or >400 mg/dL, Potassium <2.5 or >6.5 mEq/L, Sodium <120 or >160 mEq/L, Creatinine with acute rise suggesting acute kidney injury. These often require immediate treatment and continuous monitoring.',
      },
      conditionsRelatedTo: ['diabetic-ketoacidosis', 'acute-kidney-injury', 'hyperkalemia'],
    },
  ],

  preparation: {
    fasting: 'sometimes',
    fastingDetails: 'Fasting for 8-12 hours is required if your doctor specifically needs a fasting glucose. For other components, fasting is not necessary. Ask your doctor if you should fast.',
    medicationChanges: 'Usually continue all medications. Your doctor may give specific instructions about certain medications.',
    otherInstructions: ['Drink plenty of water (dehydration affects results)', 'Follow fasting instructions if given', 'Morning tests are often preferred if fasting'],
    whatToTellDoctor: ['All medications you take (especially blood pressure and diabetes medications)', 'Recent illness with vomiting or diarrhea', 'If you haven\'t been able to eat or drink normally'],
    reasonsForRestrictions: 'Eating raises blood glucose, which may give a falsely elevated result if the doctor wants to see your fasting level. Other components are less affected by eating.',
  },

  whatHappensDuring: {
    duration: '1-2 minutes',
    whatToExpect: 'A small blood sample is taken from a vein in your arm. Standard blood draw procedure.',
    painLevel: 'minimal',
    aftercare: 'Apply pressure to the site for a minute. You can eat immediately after if you were fasting. Resume normal activities.',
  },

  normalRanges: {
    standardRange: {
      value: 'Glucose: 70-100 mg/dL (fasting); BUN: 7-20 mg/dL; Creatinine: 0.7-1.3 mg/dL; Sodium: 136-145 mEq/L; Potassium: 3.5-5.0 mEq/L; Chloride: 98-106 mEq/L; CO2: 23-29 mEq/L; Calcium: 8.5-10.5 mg/dL',
      interpretation: {
        simple: 'Normal results mean your body chemistry is well-balanced and your kidneys are working properly.',
        detailed: 'Each component has its own normal range. Your doctor will review all values together, as relationships between them are important (for example, calculating kidney function from creatinine).',
        comprehensive: 'Reference ranges vary by lab and methodology. Estimated GFR (eGFR) is calculated from creatinine using the CKD-EPI equation, accounting for age, sex, and race. Anion gap = Na - (Cl + HCO3), normal 8-12 mEq/L. Results must be interpreted in clinical context.',
      },
    },
    ageVariations: [
      {
        ageGroup: 'Adults',
        range: 'Creatinine: Men 0.7-1.3, Women 0.6-1.1 mg/dL',
        explanation: 'Men typically have higher creatinine due to greater muscle mass.',
      },
      {
        ageGroup: 'Elderly',
        range: 'Creatinine may be normal despite reduced kidney function due to less muscle mass',
        explanation: 'Always calculate eGFR rather than just looking at creatinine in older adults.',
      },
      {
        ageGroup: 'Children',
        range: 'Lower creatinine (based on body size)',
        explanation: 'Pediatric reference ranges are based on age and body size.',
      },
    ],
    criticalValues: {
      low: {
        value: 'Glucose <50, Potassium <2.5, Sodium <120 mg/dL',
        whatItMeans: 'Dangerously low values that require immediate medical attention.',
        urgency: 'emergency-911',
      },
      high: {
        value: 'Glucose >400, Potassium >6.5, Sodium >160, Creatinine acute rise',
        whatItMeans: 'Dangerously high values that require immediate medical attention.',
        urgency: 'emergency-911',
      },
    },
  },

  resultInterpretation: [
    {
      range: 'High glucose (>100 fasting or >200 random)',
      meaning: {
        simple: 'Your blood sugar is higher than it should be, which could indicate diabetes or prediabetes.',
        detailed: 'Elevated fasting glucose (100-125 mg/dL) indicates prediabetes. Above 126 mg/dL on two occasions, or random glucose >200 with symptoms, diagnoses diabetes. Very high levels (>300-400) can be dangerous.',
        comprehensive: 'Fasting glucose 100-125 = impaired fasting glucose (prediabetes). ≥126 on two occasions = diabetes. Random glucose ≥200 with classic hyperglycemic symptoms = diabetes. Very high glucose (>400) with ketones/acidosis = DKA; with high osmolality and dehydration = HHS. Further evaluation with HbA1c recommended.',
      },
      implications: ['May indicate diabetes or prediabetes', 'Very high levels are dangerous', 'Needs follow-up testing'],
      nextSteps: ['HbA1c test', 'Fasting glucose if random was elevated', 'Diabetes education if diagnosed', 'Dietary changes'],
    },
    {
      range: 'Elevated creatinine/BUN (reduced kidney function)',
      meaning: {
        simple: 'Your kidneys may not be filtering as well as they should be.',
        detailed: 'Elevated creatinine indicates the kidneys aren\'t clearing waste as efficiently. It can be acute (sudden, often reversible) or chronic. The eGFR calculated from creatinine shows what percentage of normal kidney function you have.',
        comprehensive: 'Elevated creatinine interpretation requires clinical context. Acute kidney injury (AKI): rapid rise over days, often reversible with treatment of cause. Chronic kidney disease (CKD): stable elevation, staged by eGFR (Stage 3: 30-59, Stage 4: 15-29, Stage 5: <15). BUN:creatinine ratio >20:1 suggests prerenal cause (dehydration, heart failure). Always compare to baseline.',
      },
      implications: ['Kidneys may be under stress', 'May need medication dose adjustments', 'May indicate dehydration, medication effect, or kidney disease'],
      nextSteps: ['Compare to previous values', 'Hydration if dehydrated', 'Review medications affecting kidneys', 'Urine tests for further evaluation', 'Referral to nephrologist if eGFR <30'],
    },
    {
      range: 'Abnormal potassium',
      meaning: {
        simple: 'Potassium is critical for heart and muscle function. Too high or too low can cause dangerous heart rhythms.',
        detailed: 'Low potassium (hypokalemia) often results from diuretics, vomiting, or diarrhea. High potassium (hyperkalemia) can result from kidney problems or certain medications. Both can cause weakness and abnormal heart rhythms.',
        comprehensive: 'Hypokalemia (<3.5 mEq/L): causes - diuretics, vomiting, diarrhea, hypomagnesemia, renal tubular acidosis; symptoms - weakness, cramps, arrhythmias (U waves, prolonged QT). Hyperkalemia (>5.0 mEq/L): causes - renal failure, ACE/ARB, K-sparing diuretics, rhabdomyolysis, acidosis; symptoms - weakness, paresthesias, arrhythmias (peaked T waves, widened QRS); >6.5 is cardiac emergency.',
      },
      implications: ['Can cause muscle weakness', 'Can cause dangerous heart rhythms', 'Often related to medications or GI losses'],
      nextSteps: ['ECG to check heart rhythm', 'Review medications', 'Treat underlying cause', 'Potassium supplementation or reduction as indicated'],
    },
    {
      range: 'Abnormal sodium',
      meaning: {
        simple: 'Sodium affects fluid balance in your body. Abnormal levels can cause confusion and other symptoms.',
        detailed: 'Low sodium (hyponatremia) is often caused by medications, heart failure, or drinking too much water. High sodium (hypernatremia) usually indicates dehydration. Both affect brain function.',
        comprehensive: 'Hyponatremia (<136 mEq/L): assessment requires volume status - hypovolemic (diuretics, GI losses), euvolemic (SIADH, hypothyroid), hypervolemic (CHF, cirrhosis). Rate of development determines symptoms and treatment urgency. Rapid correction risks osmotic demyelination. Hypernatremia (>145 mEq/L): usually water deficit - calculate free water deficit, correct slowly to avoid cerebral edema.',
      },
      implications: ['Can cause confusion, especially in elderly', 'Requires careful correction to avoid complications', 'Often reflects fluid balance issues'],
      nextSteps: ['Assess fluid status', 'Review medications (diuretics)', 'Gradual correction with appropriate fluids', 'Treat underlying cause'],
    },
  ],

  commonMisconceptions: [
    {
      misconception: 'If my creatinine is normal, my kidneys are fine.',
      reality: 'Creatinine can stay in the normal range until you\'ve lost about half your kidney function. The eGFR calculation is more sensitive and should always be checked.',
    },
    {
      misconception: 'I should drink extra water before my BMP to get good results.',
      reality: 'Drinking a normal amount of water is fine, but drinking excessive amounts can actually affect your sodium level and give abnormal results.',
    },
    {
      misconception: 'A slightly abnormal value always needs treatment.',
      reality: 'Minor variations may be your normal baseline. Trends over time are often more important than single values. Your doctor interprets results in context.',
    },
    {
      misconception: 'The BMP checks my liver function.',
      reality: 'The BMP does not include liver tests. You need a Comprehensive Metabolic Panel (CMP) or specific liver function tests for that.',
    },
  ],

  relatedTests: ['comprehensive-metabolic-panel', 'urinalysis', 'magnesium', 'phosphorus', 'hemoglobin-a1c'],
  relatedConditions: ['diabetes', 'chronic-kidney-disease', 'dehydration', 'heart-failure', 'hypertension'],

  anatomyLinks: [
    { structureId: 'kidneys', structureName: 'Kidneys', relevance: 'Filter waste products measured by BUN and creatinine', viewPreset: 'posterior' },
    { structureId: 'pancreas', structureName: 'Pancreas', relevance: 'Produces insulin that controls glucose', viewPreset: 'anterior' },
    { structureId: 'heart', structureName: 'Heart', relevance: 'Function affected by potassium and other electrolytes', viewPreset: 'anterior' },
  ],
};

// =============================================================================
// LIPID PANEL - Your Cholesterol Report Card
// =============================================================================

const LIPID_PANEL_EDUCATION: TestEducation = {
  id: 'lipid-panel',
  testName: 'Lipid Panel (Cholesterol Test)',
  alternativeNames: ['Cholesterol Test', 'Lipid Profile', 'Fasting Lipid Panel', 'Fasting Cholesterol'],
  category: 'blood',

  whatItMeasures: {
    simple: 'This test measures different types of cholesterol and fats in your blood. It helps determine your risk of heart disease and stroke.',
    detailed: 'The lipid panel measures four components: (1) Total cholesterol - all cholesterol combined, (2) LDL cholesterol (the "bad" kind that clogs arteries), (3) HDL cholesterol (the "good" kind that protects arteries), and (4) Triglycerides (another type of blood fat that increases heart disease risk).',
    comprehensive: 'The standard lipid panel measures total cholesterol, LDL-C (calculated or direct), HDL-C, and triglycerides. From these, ratios can be calculated: Total/HDL ratio, non-HDL-C (total minus HDL, correlates with all atherogenic particles). Advanced lipid testing may include apolipoprotein B (reflecting LDL particle number), Lp(a) (independent genetic risk factor), LDL particle size, and lipoprotein subfractions. Friedewald equation calculates LDL-C unless TG >400 mg/dL, in which case direct measurement is needed.',
    analogy: 'Think of cholesterol like different workers in your bloodstream. LDL workers carry cholesterol to your artery walls (bad - they\'re building up gunk). HDL workers carry cholesterol away from arteries back to the liver for disposal (good - they\'re cleaning up). A healthy blood system has more cleanup workers and fewer buildup workers.',
    visualMetaphor: 'A pie chart showing the breakdown of different blood fats, with arrows showing LDL going toward arteries (bad) and HDL going toward liver (good)',
  },

  whyOrdered: [
    {
      reason: 'Assessing cardiovascular risk',
      explanation: {
        simple: 'High LDL cholesterol is a major cause of heart disease. This test shows if your levels put you at risk.',
        detailed: 'LDL cholesterol is the primary driver of atherosclerosis - the buildup of plaque in arteries that leads to heart attacks and strokes. This test identifies people at elevated risk who might benefit from lifestyle changes or medication.',
        comprehensive: 'Lipid testing is central to cardiovascular risk assessment. Per ACC/AHA guidelines, it\'s used with risk calculators (ASCVD risk score) to guide statin therapy decisions. LDL-C remains the primary target; each 39 mg/dL (1 mmol/L) reduction decreases cardiovascular events by ~20%. Non-HDL-C and apoB may be secondary targets, particularly with elevated triglycerides.',
      },
      conditionsRelatedTo: ['atherosclerosis', 'coronary-artery-disease', 'stroke', 'peripheral-artery-disease'],
    },
    {
      reason: 'Monitoring cholesterol medication',
      explanation: {
        simple: 'If you\'re on cholesterol medication like a statin, this test shows how well it\'s working.',
        detailed: 'After starting a statin or other lipid-lowering medication, a lipid panel shows whether you\'re reaching your LDL goal. It guides dose adjustments and treatment decisions.',
        comprehensive: 'Lipid panels are checked 6-12 weeks after starting or adjusting statin therapy. Goal is percent LDL reduction (50% for high-intensity statins) and/or achieving absolute targets (<70 mg/dL for ASCVD, <100 mg/dL for primary prevention). If goals not met, options include statin intensification, adding ezetimibe, or PCSK9 inhibitors. Once stable, annual monitoring is typical.',
      },
      conditionsRelatedTo: ['hyperlipidemia', 'atherosclerosis'],
    },
    {
      reason: 'Screening for familial hypercholesterolemia',
      explanation: {
        simple: 'Some people are born with genes that cause very high cholesterol. This test can reveal that problem.',
        detailed: 'Familial hypercholesterolemia (FH) is a genetic condition causing very high LDL from birth. It affects 1 in 200-300 people and dramatically increases heart disease risk. Early detection and treatment saves lives.',
        comprehensive: 'FH is underdiagnosed - only ~10% of cases are identified. Suspect FH when LDL-C >190 mg/dL in adults or >160 mg/dL in children, especially with family history of premature ASCVD or physical findings (xanthomas, arcus). Dutch Lipid Clinic Network criteria can guide clinical diagnosis. Cascade screening of family members is recommended. Intensive treatment often requires high-intensity statins plus ezetimibe and/or PCSK9 inhibitors.',
      },
      conditionsRelatedTo: ['familial-hypercholesterolemia', 'coronary-artery-disease'],
    },
    {
      reason: 'Evaluating metabolic health',
      explanation: {
        simple: 'Triglyceride levels reflect how your body handles dietary fats and sugars. High levels often accompany other metabolic problems.',
        detailed: 'Elevated triglycerides often occur with insulin resistance, diabetes, and metabolic syndrome. The lipid panel helps identify this cluster of risk factors that together greatly increase cardiovascular disease risk.',
        comprehensive: 'Triglycerides reflect VLDL metabolism and correlate with insulin resistance. Levels 150-499 mg/dL indicate moderate hypertriglyceridemia, often seen with metabolic syndrome (with low HDL, central obesity, elevated BP, and dysglycemia). Very high TG (>500 mg/dL) increases pancreatitis risk and requires treatment. TG-to-HDL ratio correlates with insulin resistance and small dense LDL particles.',
      },
      conditionsRelatedTo: ['metabolic-syndrome', 'type-2-diabetes', 'fatty-liver-disease'],
    },
  ],

  preparation: {
    fasting: 'sometimes',
    fastingDetails: 'Fasting for 9-12 hours is traditionally recommended for accurate triglyceride and LDL measurements. However, non-fasting panels are now acceptable for screening in many situations. Your doctor will specify.',
    medicationChanges: 'Continue all medications unless instructed otherwise. For accurate assessment, ideally maintain usual medication routine.',
    otherInstructions: ['Avoid alcohol for 24 hours before fasting test', 'Avoid unusual dietary changes in the days before', 'If fasting, water is fine (and encouraged)'],
    whatToTellDoctor: ['If you didn\'t fast when you were supposed to', 'If you\'ve been sick recently', 'All medications including supplements', 'Any recent major dietary changes'],
    reasonsForRestrictions: 'Eating raises triglycerides for several hours. For accurate triglyceride and calculated LDL, fasting removes this variable. However, postprandial (after-meal) lipids may also be relevant to cardiovascular risk, so non-fasting tests are increasingly accepted.',
  },

  whatHappensDuring: {
    duration: '1-2 minutes',
    whatToExpect: 'A small blood sample is taken from a vein in your arm. Standard blood draw procedure.',
    painLevel: 'minimal',
    aftercare: 'If you fasted, you can eat immediately after. Apply pressure to the site for a minute. Resume normal activities.',
  },

  normalRanges: {
    standardRange: {
      value: 'Total cholesterol <200; LDL <100; HDL >40 (men) / >50 (women); Triglycerides <150 mg/dL',
      interpretation: {
        simple: 'These are general target ranges. Your specific goals may differ based on your overall cardiovascular risk.',
        detailed: 'The "optimal" LDL depends on your risk: people with existing heart disease or diabetes often aim for <70 mg/dL, while lower-risk people may target <100. HDL is one of few values where higher is better - it protects your arteries.',
        comprehensive: 'ACC/AHA guidelines moved away from specific LDL targets toward percent reduction with statin intensity. However, targets remain useful: primary prevention (<100, or <70 if high risk), secondary prevention (<70, considering <55 for very high risk). ATP III classifications: Total cholesterol: <200 desirable, 200-239 borderline, ≥240 high; LDL: <100 optimal, 100-129 near optimal, 130-159 borderline high, 160-189 high, ≥190 very high.',
      },
    },
    ageVariations: [
      {
        ageGroup: 'Adults (general targets)',
        range: 'LDL <100 mg/dL, HDL >40 mg/dL, Triglycerides <150 mg/dL',
        explanation: 'These are general targets for most adults without heart disease.',
      },
      {
        ageGroup: 'Adults with heart disease or diabetes',
        range: 'LDL <70 mg/dL (or 50% reduction from baseline)',
        explanation: 'Higher-risk patients benefit from more aggressive LDL lowering.',
      },
      {
        ageGroup: 'Children (ages 2-19)',
        range: 'Total cholesterol <170, LDL <110 mg/dL',
        explanation: 'Children have lower thresholds. High values warrant evaluation for familial hypercholesterolemia.',
      },
      {
        ageGroup: 'Elderly (>75 years)',
        range: 'Individualized based on overall health, life expectancy, and goals of care',
        explanation: 'For older adults, treatment decisions balance cardiovascular benefit against pill burden and side effects.',
      },
    ],
    criticalValues: {
      low: {
        value: 'LDL <25 mg/dL (very rare, usually medication-related)',
        whatItMeans: 'Extremely low LDL is possible with aggressive treatment. Generally safe, though some theoretical concerns exist.',
        urgency: 'mention-at-next-visit',
      },
      high: {
        value: 'LDL >190 mg/dL, Triglycerides >500 mg/dL',
        whatItMeans: 'LDL >190 suggests familial hypercholesterolemia and warrants immediate treatment. TG >500 increases pancreatitis risk.',
        urgency: 'schedule-soon',
      },
    },
  },

  resultInterpretation: [
    {
      range: 'Optimal LDL (<100 mg/dL) with good HDL (>40/>50)',
      meaning: {
        simple: 'Your cholesterol is in a healthy range. Keep up the good work with diet and lifestyle.',
        detailed: 'This pattern indicates low atherosclerotic risk from lipids. If you have no other major risk factors, you may not need medication.',
        comprehensive: 'Optimal lipid profile. If no ASCVD, DM, or major risk factors, 10-year ASCVD risk is likely low (<5%). Lifestyle counseling appropriate. Statin generally not indicated unless other compelling indications. Recheck in 4-6 years if normal.',
      },
      implications: ['Low cardiovascular risk from lipids', 'Lifestyle optimization is the main recommendation', 'Recheck periodically'],
      nextSteps: ['Continue healthy diet', 'Regular exercise', 'Recheck in 4-6 years if no other risk factors'],
    },
    {
      range: 'Borderline LDL (100-129 mg/dL)',
      meaning: {
        simple: 'Your LDL is slightly above optimal. For most people, lifestyle changes are the first step.',
        detailed: 'This "near-optimal" LDL may or may not need treatment depending on your overall cardiovascular risk. If you have diabetes or heart disease, this is above target.',
        comprehensive: 'Near-optimal LDL. For primary prevention without risk-enhancing factors, lifestyle modification is first-line. Calculate 10-year ASCVD risk. If intermediate risk (7.5-20%), consider statin therapy. If already on statin, may need intensification. Non-HDL-C and apoB may provide additional risk information.',
      },
      implications: ['Depends on overall cardiovascular risk', 'May be acceptable for low-risk individuals', 'Above target for high-risk patients'],
      nextSteps: ['Calculate your 10-year risk', 'Discuss lifestyle modifications', 'Consider statin if additional risk factors'],
    },
    {
      range: 'High LDL (130-189 mg/dL)',
      meaning: {
        simple: 'Your LDL is elevated. This increases your risk of heart disease and likely needs attention.',
        detailed: 'LDL in this range significantly contributes to atherosclerosis risk. Most people will benefit from statins, especially with other risk factors. Lifestyle changes are also important.',
        comprehensive: 'Elevated LDL warrants intervention. Per ACC/AHA guidelines, statin therapy is indicated if: 10-year ASCVD risk ≥7.5%, clinical ASCVD present, LDL ≥160 with multiple risk enhancers, or diabetes. High-intensity statin therapy (atorvastatin 40-80mg or rosuvastatin 20-40mg) reduces LDL 50%. If LDL 160-189, consider high-intensity statin even in primary prevention.',
      },
      implications: ['Elevated cardiovascular risk', 'Treatment usually indicated', 'Lifestyle changes important regardless of medication'],
      nextSteps: ['Discuss statin therapy with doctor', 'Implement dietary changes (reduce saturated fat)', 'Increase physical activity', 'Recheck in 6-12 weeks after starting treatment'],
    },
    {
      range: 'Very high LDL (≥190 mg/dL)',
      meaning: {
        simple: 'Your LDL is very high. This greatly increases heart disease risk and needs treatment. It may indicate a genetic condition.',
        detailed: 'LDL ≥190 mg/dL without treatment strongly suggests familial hypercholesterolemia or a secondary cause. This level mandates treatment with high-intensity statin therapy. Additional medications may be needed.',
        comprehensive: 'LDL ≥190 in untreated patient triggers high-intensity statin regardless of 10-year risk per ACC/AHA guidelines. Strongly consider familial hypercholesterolemia - Dutch Lipid Clinic Network criteria, cascade family screening, and genetic testing if available. Secondary causes (hypothyroidism, nephrotic syndrome) should be excluded. Target is ≥50% LDL reduction; often requires combination therapy (ezetimibe, PCSK9 inhibitors). Lifetime risk without treatment is very high.',
      },
      implications: ['Very high cardiovascular risk', 'Possible genetic hypercholesterolemia', 'Aggressive treatment essential'],
      nextSteps: ['High-intensity statin therapy', 'Evaluation for familial hypercholesterolemia', 'Consider combination therapy', 'Family screening if FH suspected'],
    },
    {
      range: 'Low HDL (<40 men / <50 women)',
      meaning: {
        simple: 'Your HDL ("good cholesterol") is low. HDL helps protect your arteries, so less of it means higher risk.',
        detailed: 'Low HDL is an independent risk factor for cardiovascular disease. It often accompanies other metabolic abnormalities like high triglycerides, insulin resistance, and obesity. Medications specifically for raising HDL haven\'t proven beneficial, so focus is on lifestyle.',
        comprehensive: 'Low HDL-C is associated with cardiovascular risk but causality is debated given failed HDL-raising drug trials (niacin, CETP inhibitors). Low HDL often reflects other atherogenic factors: insulin resistance, metabolic syndrome, genetic variants. Primary intervention is lifestyle: exercise increases HDL 5-10%, weight loss helps, smoking cessation, and moderate alcohol. Pharmacologic HDL-raising is not recommended.',
      },
      implications: ['Independent cardiovascular risk factor', 'Often accompanies metabolic syndrome', 'Lifestyle is main intervention'],
      nextSteps: ['Regular aerobic exercise (most effective intervention)', 'Weight loss if overweight', 'Smoking cessation', 'Evaluate for metabolic syndrome'],
    },
    {
      range: 'Elevated triglycerides (150-499 mg/dL)',
      meaning: {
        simple: 'Your triglycerides are elevated. This often relates to diet, weight, and how your body handles sugars. It adds to your cardiovascular risk.',
        detailed: 'Moderate hypertriglyceridemia often reflects excess calories, refined carbs, and alcohol. It\'s frequently part of metabolic syndrome with low HDL. Treatment focuses on lifestyle, with medications reserved for very high levels.',
        comprehensive: 'TG 150-499 represents moderate hypertriglyceridemia, often secondary to obesity, diabetes, excess carbohydrates, alcohol. It\'s associated with atherogenic dyslipidemia (low HDL, small dense LDL). After statin therapy optimizes LDL, persistent TG elevation may warrant: icosapent ethyl (EPA) if TG 150-499 with ASCVD or diabetes + risk factors, or fibrates for TG >500. Lifestyle: weight loss, restrict refined carbs and alcohol.',
      },
      implications: ['Increased cardiovascular risk', 'Often reflects metabolic syndrome', 'Lifestyle changes are primary treatment'],
      nextSteps: ['Reduce refined carbohydrates and sugars', 'Limit alcohol', 'Increase physical activity', 'Weight loss', 'Consider fish oil supplements'],
    },
    {
      range: 'Very high triglycerides (≥500 mg/dL)',
      meaning: {
        simple: 'Your triglycerides are very high. At this level, there\'s a risk of pancreatitis (serious inflammation of the pancreas). This needs urgent attention.',
        detailed: 'Triglycerides above 500 mg/dL increase the risk of acute pancreatitis, a serious and painful condition. Treatment is urgent and focuses on very low-fat diet, eliminating alcohol, and usually medication.',
        comprehensive: 'Severe hypertriglyceridemia (>500 mg/dL) risks chylomicronemia syndrome and acute pancreatitis. Often multifactorial: uncontrolled diabetes, obesity, alcohol, medications (estrogen, retinoic acid, HIV antiretrovirals), or genetic (familial hypertriglyceridemia, LPL deficiency). Acute management: very low fat diet (<15% calories), strict alcohol abstinence, optimize glycemic control. Medications: fibrates first-line for TG reduction; omega-3 fatty acids. If TG >1000, consider plasmapheresis if symptomatic.',
      },
      implications: ['Risk of pancreatitis', 'Requires urgent treatment', 'Strict dietary changes needed'],
      nextSteps: ['Very low-fat diet (<15% of calories)', 'Absolute alcohol abstinence', 'Fibrate medication likely needed', 'Optimize diabetes control if applicable', 'Close follow-up'],
    },
  ],

  commonMisconceptions: [
    {
      misconception: 'Dietary cholesterol is the main cause of high blood cholesterol.',
      reality: 'Your liver makes most of your cholesterol. Saturated and trans fats in your diet have a bigger impact on blood cholesterol than dietary cholesterol itself. This is why eggs (high in cholesterol but low in saturated fat) are now considered acceptable.',
    },
    {
      misconception: 'If I feel fine, my cholesterol must be okay.',
      reality: 'High cholesterol causes no symptoms. It silently builds up in your arteries for years before causing a heart attack or stroke. That\'s why testing is the only way to know.',
    },
    {
      misconception: 'My cholesterol is genetic, so lifestyle changes won\'t help.',
      reality: 'Genetics influence cholesterol, but lifestyle still makes a big difference. Even people with familial hypercholesterolemia benefit from diet, exercise, and weight management - they just may also need medication.',
    },
    {
      misconception: 'All cholesterol is bad.',
      reality: 'Cholesterol is essential for your body - you need it for cell membranes and hormone production. It\'s when LDL gets too high, or HDL too low, that problems occur. HDL ("good cholesterol") actually protects your arteries.',
    },
    {
      misconception: 'Total cholesterol is the most important number.',
      reality: 'LDL cholesterol is actually the most important for determining risk and treatment. You can have "normal" total cholesterol but problematically low HDL or high LDL. The breakdown matters more than the total.',
    },
    {
      misconception: 'A non-fasting test is useless.',
      reality: 'Non-fasting tests give accurate total cholesterol and HDL. Triglycerides and calculated LDL are affected by eating, but guidelines now accept non-fasting values for many screening purposes. Your doctor will decide if fasting is needed.',
    },
  ],

  relatedTests: ['apolipoprotein-b', 'lipoprotein-a', 'hs-crp', 'coronary-calcium-score'],
  relatedConditions: ['atherosclerosis', 'coronary-artery-disease', 'familial-hypercholesterolemia', 'metabolic-syndrome', 'type-2-diabetes'],

  anatomyLinks: [
    { structureId: 'liver', structureName: 'Liver', relevance: 'Produces most of your cholesterol and clears LDL from blood', viewPreset: 'anterior' },
    { structureId: 'heart', structureName: 'Heart', relevance: 'Coronary arteries are affected by cholesterol plaques', viewPreset: 'anterior' },
    { structureId: 'circulatory-system', structureName: 'Blood Vessels', relevance: 'Where cholesterol plaques form, causing atherosclerosis', viewPreset: 'anterior' },
  ],
};

// =============================================================================
// TEST DATABASE EXPORTS
// =============================================================================

export const TEST_EDUCATION: Record<string, TestEducation> = {
  'hemoglobin-a1c': HEMOGLOBIN_A1C_EDUCATION,
  'complete-blood-count': COMPLETE_BLOOD_COUNT_EDUCATION,
  'basic-metabolic-panel': BASIC_METABOLIC_PANEL_EDUCATION,
  'lipid-panel': LIPID_PANEL_EDUCATION,
};

// Helper functions
export function getTestEducation(id: string): TestEducation | undefined {
  return TEST_EDUCATION[id];
}

export function getAllTestEducation(): TestEducation[] {
  return Object.values(TEST_EDUCATION);
}

export function searchTestEducation(query: string): TestEducation[] {
  const lower = query.toLowerCase();
  return Object.values(TEST_EDUCATION).filter(t =>
    t.testName.toLowerCase().includes(lower) ||
    t.alternativeNames.some(n => n.toLowerCase().includes(lower)) ||
    t.category.toLowerCase().includes(lower)
  );
}
