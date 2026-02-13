/**
 * Complete Blood Count (CBC) Educational Module
 *
 * Learn to understand your CBC results like a hematologist.
 */
export const cbcModule = {
    id: 'lab-cbc-interpretation',
    type: 'clinical-application',
    title: 'Understanding Your Complete Blood Count (CBC)',
    description: 'Learn what each part of your CBC means, why doctors order it, and how to interpret your results. Based on hematology training materials.',
    version: '1.0.0',
    lastUpdated: '2026-02-04',
    author: 'Biological Self Medical Education Team',
    prerequisites: [
        'blood-basics',
        'bone-marrow-function',
    ],
    learningObjectives: [
        'Understand what each CBC component measures',
        'Learn the function of red blood cells, white blood cells, and platelets',
        'Recognize what abnormal values might indicate',
        'Know when to be concerned about results',
        'Understand follow-up tests for abnormal results',
    ],
    estimatedTime: {
        1: '15 minutes',
        2: '20 minutes',
        3: '30 minutes',
        4: '40 minutes',
        5: '55 minutes',
        6: '80 minutes',
    },
    content: {
        // Level 1: Foundation
        1: {
            summary: `A Complete Blood Count (CBC) is one of the most common blood tests. It counts and measures the different types of cells in your blood. Think of blood like a highway: red blood cells are delivery trucks carrying oxygen, white blood cells are security guards fighting infections, and platelets are repair crews that fix leaks. The CBC tells us how many of each type you have and if they're the right size.`,
            analogy: `Imagine your blood vessels are highways with three types of vehicles:

🔴 RED BLOOD CELLS = Delivery trucks
- Carry oxygen to all your cells
- Need enough trucks to deliver to everyone

⚪ WHITE BLOOD CELLS = Security/police cars  
- Fight infections and invaders
- Too few = vulnerable to infection
- Too many = might be fighting something

🟣 PLATELETS = Road repair crews
- Patch holes and stop bleeding
- Need enough to fix injuries quickly`,
            keyPoints: [
                'CBC counts the three main cell types in your blood',
                'Red blood cells carry oxygen - low count means anemia (tiredness)',
                'White blood cells fight infection - high count might mean fighting an infection',
                'Platelets help blood clot - low count means bleeding risk',
                'Doctors use CBC to check overall health, diagnose conditions, and monitor treatments',
            ],
            visualAid: 'blood-cell-types-diagram',
        },
        // Level 2: Developing
        2: {
            summary: `The Complete Blood Count measures several key components: Red Blood Cell (RBC) count, Hemoglobin (oxygen-carrying protein), Hematocrit (percentage of blood that is cells), White Blood Cell (WBC) count with differential (types of white cells), and Platelet count. Each has specific reference ranges, and abnormal results can indicate various conditions from anemia to infection to blood disorders.`,
            keyConcepts: [
                {
                    term: 'Hemoglobin',
                    explanation: 'The protein in red blood cells that actually carries oxygen. Measured in g/dL.',
                },
                {
                    term: 'Hematocrit',
                    explanation: 'The percentage of your blood volume made up of red blood cells. Normal is about 40-50%.',
                },
                {
                    term: 'MCV (Mean Corpuscular Volume)',
                    explanation: 'The average size of your red blood cells. Helps classify types of anemia.',
                },
                {
                    term: 'WBC Differential',
                    explanation: 'Breakdown of the five types of white blood cells: neutrophils, lymphocytes, monocytes, eosinophils, basophils.',
                },
                {
                    term: 'Platelets (Thrombocytes)',
                    explanation: 'Cell fragments that clump together to form blood clots and stop bleeding.',
                },
            ],
            keyPoints: [
                'RBC, hemoglobin, and hematocrit together tell us about oxygen-carrying capacity',
                'Low hemoglobin = anemia (causes fatigue, weakness, pale skin)',
                'High hemoglobin can mean dehydration, lung disease, or bone marrow disorder',
                'WBC count over 10,000 might indicate infection, inflammation, or stress',
                'WBC count under 4,000 increases infection risk',
                'Low platelets (thrombocytopenia) can cause easy bruising and bleeding',
            ],
            howItWorks: `1. Blood is drawn from a vein
2. Analyzed by machine that counts cells
3. Red blood cells measured for:
   - Number (RBC count)
   - Oxygen capacity (hemoglobin)
   - Volume percentage (hematocrit)
   - Size (MCV)
4. White blood cells counted and typed
5. Platelets counted
6. Results compared to normal ranges for your age and sex`,
        },
        // Level 3: Standard
        3: {
            summary: `The CBC provides a comprehensive assessment of the cellular components of blood. RBC indices (MCV, MCH, MCHC, RDW) characterize red cell morphology and help classify anemias as microcytic, normocytic, or macrocytic. The WBC differential reveals the distribution of granulocytes (neutrophils, eosinophils, basophils), lymphocytes, and monocytes, each with distinct immunological functions. Platelet count and MPV (mean platelet volume) assess hemostatic capacity. Understanding these parameters enables recognition of anemia, infection, inflammation, hematologic malignancies, and bleeding disorders.`,
            mechanisms: [
                {
                    name: 'Red Cell Production',
                    description: 'Erythropoiesis in bone marrow regulated by erythropoietin (from kidneys). Iron, B12, and folate are essential for hemoglobin synthesis and DNA replication in red cell precursors.',
                },
                {
                    name: 'Anemia Classification by MCV',
                    description: 'Microcytic (low MCV): Iron deficiency, thalassemia. Normocytic (normal MCV): Chronic disease, acute blood loss, hemolysis. Macrocytic (high MCV): B12/folate deficiency, liver disease, alcohol.',
                },
                {
                    name: 'White Blood Cell Functions',
                    description: 'Neutrophils: bacterial/fungal defense. Lymphocytes: viral immunity and antibody production. Monocytes: phagocytosis and antigen presentation. Eosinophils: parasite defense and allergies. Basophils: allergic reactions.',
                },
                {
                    name: 'Platelet Production and Function',
                    description: 'Thrombopoietin stimulates megakaryocytes in bone marrow to produce platelets. Platelets adhere to damaged endothelium, aggregate, and activate coagulation cascade.',
                },
            ],
            clinicalCorrelates: [
                'Iron deficiency anemia: Low MCV, low hemoglobin, high RDW, low ferritin',
                'B12/folate deficiency: High MCV, normal/high RDW, neurological symptoms if B12',
                'Acute infection: High WBC with neutrophilia ("left shift" with bands)',
                'Viral infection: Normal WBC or lymphocytosis',
                'Allergic conditions: Eosinophilia',
                'Thrombocytopenia causes: Decreased production (marrow failure), increased destruction (ITP, TTP, DIC), sequestration (splenomegaly)',
            ],
            normalVsAbnormal: {
                normal: 'RBCs are adequate in number, normal size, with sufficient hemoglobin. WBC count and differential appropriate for clinical state. Platelets adequate for hemostasis.',
                abnormal: 'One or more parameters outside reference range. Patterns suggest underlying pathology: microcytic anemia suggests iron deficiency; leukocytosis with neutrophilia suggests bacterial infection; thrombocytopenia suggests bleeding risk.',
                whyItMatters: 'CBC abnormalities often indicate systemic disease requiring evaluation. Patterns guide differential diagnosis and further workup.',
            },
        },
        // Level 4: Advanced
        4: {
            summary: `The CBC provides quantitative and qualitative data on hematopoiesis. Red cell indices derive from automated cell counting: MCV directly measured, MCHC = (Hgb/Hct)×100, RDW = coefficient of variation of MCV. Reticulocyte count (immature RBCs) indicates marrow response to anemia. Anisocytosis (RDW elevation) often precedes MCV changes in nutritional deficiencies. Automated differentials use flow cytometry and impedance; manual review indicated for blasts, atypical lymphocytes, or abnormal morphology. Platelet histogram abnormalities suggest platelet clumping (pseudothrombocytopenia) or giant platelets.`,
            molecularMechanisms: [
                {
                    pathway: 'Iron Metabolism',
                    defect: 'Insufficient iron → impaired heme synthesis → microcytic hypochromic cells',
                    consequence: 'Reduced oxygen-carrying capacity; compensatory increase in erythropoietin',
                },
                {
                    pathway: 'B12/Folate Metabolism',
                    defect: 'Deficiency impairs DNA synthesis in rapidly dividing cells',
                    consequence: 'Nuclear-cytoplasmic asynchrony → megaloblastic maturation → macrocytosis; hypersegmented neutrophils',
                },
                {
                    pathway: 'Erythropoietin Signaling',
                    defect: 'CKD → reduced EPO production; chronic inflammation → hepcidin elevation → functional iron deficiency',
                    consequence: 'Normocytic normochromic anemia of chronic disease',
                },
                {
                    pathway: 'Cytokine Response',
                    defect: 'IL-6, TNF-α in inflammation/infection stimulate neutrophil production and release from marrow',
                    consequence: 'Neutrophilia with left shift; lymphopenia from cortisol effects',
                },
            ],
            pathways: [
                {
                    name: 'Heme Synthesis',
                    steps: [
                        'Glycine + succinyl-CoA → δ-ALA (ALAS enzyme)',
                        'PBG → hydroxymethylbilane → uroporphyrinogen III',
                        'Coproporphyrinogen III → protoporphyrinogen IX',
                        'Protoporphyrin IX + Fe2+ → Heme (ferrochelatase)',
                        'Heme + globin chains → Hemoglobin',
                    ],
                    regulation: 'Iron deficiency limits heme synthesis → protoporphyrin accumulation; lead inhibits ALA dehydratase and ferrochelatase',
                },
                {
                    name: 'Thrombopoiesis',
                    steps: [
                        'Hematopoietic stem cell → megakaryocyte-erythroid progenitor',
                        'Megakaryocyte progenitor → immature megakaryocyte',
                        'Polyploidization (DNA replication without division)',
                        'Cytoplasmic maturation with granule formation',
                        'Proplatelet extension and fragmentation into platelets',
                    ],
                    regulation: 'Thrombopoietin (TPO) from liver; TPO receptors (MPL) on megakaryocytes',
                },
            ],
            references: [
                'Kaushansky K. Lineage-specific hematopoietic growth factors. N Engl J Med. 2006;354(19):2034-2045.',
                'Bain BJ. Blood Cells: A Practical Guide. 5th ed. Wiley-Blackwell; 2015.',
                'Mast AE, et al. Clinical utility of the reticulocyte hemoglobin content in the diagnosis of iron deficiency. Blood. 2002;99(4):1489-1491.',
            ],
        },
        // Level 5: Expert
        5: {
            summary: `Contemporary hematology integrates traditional CBC parameters with advanced indices. Reticulocyte hemoglobin content (CHr, Ret-He) provides earlier detection of iron deficiency than ferritin or MCV. Novel parameters from automated analyzers (immature platelet fraction, cell population data) provide insights into marrow function. Flow cytometric analysis of blasts and minimal residual disease detection have transformed leukemia monitoring. Next-generation sequencing identifies somatic mutations in myeloid neoplasms (JAK2, CALR, MPL in myeloproliferative neoplasms; SF3B1 in MDS). Understanding clonal hematopoiesis of indeterminate potential (CHIP) and its cardiovascular implications represents an emerging frontier.`,
            researchFrontiers: [
                'Automated digital morphology: AI-powered blood smear review replacing manual examination',
                'Point-of-care hemoglobin testing: Non-invasive spectroscopic methods (pulse CO-oximetry)',
                'Liquid biopsy: Circulating tumor cells and cell-free DNA for hematologic malignancy monitoring',
                'Single-cell RNA sequencing: Understanding hematopoietic stem cell heterogeneity',
                'Clonal hematopoiesis (CHIP): Somatic mutations in blood cells increasing with age; associated with cardiovascular disease and leukemia transformation risk',
                'Artificial intelligence: Machine learning models predicting iron deficiency, thalassemia trait, and leukemia from CBC patterns',
            ],
            controversies: [
                {
                    topic: 'Reference Range Determination',
                    perspectives: [
                        'Traditional ranges exclude 2.5% of healthy population at each tail',
                        'Race-specific ranges controversial: African Americans typically have lower WBC counts (genetic variants in Duffy antigen)',
                        'Age-adjusted ranges needed: Hemoglobin declines with normal aging; platelet function changes',
                    ],
                },
                {
                    topic: 'Threshold for Anemia Transfusion',
                    perspectives: [
                        'Liberal strategy (Hgb \u003c10): Previously standard',
                        'Restrictive strategy (Hgb \u003c7-8): TRISS, TRICC trials show non-inferiority or superiority in ICU patients',
                        'Symptom-driven: Individualize based on cardiovascular status, symptoms, and rate of decline',
                    ],
                },
                {
                    topic: 'Mild Thrombocytopenia Observation',
                    perspectives: [
                        'Incidental finding of platelets 100-150K often benign',
                        'May represent ITP prodrome or early marrow failure',
                        'Approach: Monitor vs. early bone marrow biopsy controversial',
                    ],
                },
            ],
            statisticalContext: `Reference intervals traditionally established as 95% CI of "healthy" population. Issues:
- Healthy volunteer bias (often younger, healthier than patient population)
- Insufficient sample sizes for subgroups (pediatric, elderly, pregnancy)
- African Americans: Mean WBC ~7000 vs ~7500 in whites (Duffy-null variant protective against malaria)
- Iron deficiency prevalence affects hemoglobin distributions
- High-altitude populations have elevated hemoglobin

Direct assessment approach (large databases determining percentile-based intervals) increasingly used.`,
            references: [
                'Jaiswal S, et al. Age-related clonal hematopoiesis associated with adverse outcomes. N Engl J Med. 2014;371(26):2488-2498.',
                'Rehm HL, et al. Actionable, pathogenic incidental findings in 1,000 participants\' exomes. Am J Hum Genet. 2013;93(4):631-640.',
                'Bain BJ. Ethnic and sex differences in the total and differential white cell count and platelet count. J Clin Pathol. 1996;49(8):664-666.',
            ],
        },
        // Level 6: Clinical
        6: {
            summary: `From a clinical perspective, CBC interpretation requires pattern recognition and correlation with clinical context. The differential diagnosis of anemia follows MCV-based approach: microcytic (iron deficiency vs thalassemia vs sideroblastic), macrocytic (megaloblastic vs non-megaloblastic), normocytic (chronic disease vs hemolysis vs marrow failure). Reticulocyte count distinguishes hypoproliferative (low retic) from hemolytic/high loss (high retic) anemias. Iron studies (ferritin, iron, TIBC, transferrin saturation), B12/folate levels, and hemolysis markers (LDH, haptoglobin, indirect bilirubin) guide etiologic diagnosis. Indications for hematology referral: pancytopenia, unexplained cytopenias, blasts on smear, severe thrombocytopenia, or suspected hemoglobinopathy.`,
            clinicalApproach: [
                'Systematic approach: Evaluate all three cell lines (RBC, WBC, platelets)',
                'Calculate indices: MCV, MCHC, RDW for anemia characterization',
                'Assess reticulocyte response: Adequate compensation for anemia?',
                'Review smear morphology: Size, shape, inclusions, abnormal cells',
                'Order appropriate follow-up: Iron studies, B12/folate, hemolysis panel, marrow exam if indicated',
                'Correlate with clinical: Symptoms, diet, medications, family history, ethnicity',
            ],
            differentialConsiderations: [
                'Microcytic anemia: Iron deficiency (most common), thalassemia trait, anemia of chronic disease, sideroblastic anemia, lead poisoning',
                'Macrocytic anemia: B12 deficiency (pernicious anemia, malabsorption), folate deficiency, liver disease, alcohol, hypothyroidism, MDS',
                'Normocytic anemia: Chronic kidney disease, chronic inflammation, acute blood loss, hemolysis, early nutritional deficiency, marrow infiltration',
                'Leukocytosis: Infection, inflammation, stress demargination, medications (steroids, lithium), smoking, Cushing\'s, leukoerythroblastic reaction',
                'Leukopenia: Viral infection, drug-induced, autoimmune, marrow failure, sepsis, hypersplenism',
                'Thrombocytopenia: Decreased production ( aplastic anemia, MDS, leukemia, marrow infiltration), increased destruction (ITP, TTP, HUS, DIC, drug-induced), sequestration, pseudothrombocytopenia',
            ],
            guidelines: [
                'Cook JD. Diagnosis and management of iron-deficiency anaemia. Best Pract Res Clin Haematol. 2005;18(2):319-332.',
                'Provenzano R, et al. KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012;2(4):279-335.',
                'DeZern AE, et al. Detecting hereditary hemolytic anemias in the emergency department: pearls and pitfalls. Hematology Am Soc Hematol Educ Program. 2022;2022(1):204-214.',
            ],
            caseExamples: [
                {
                    presentation: '32-year-old female, fatigue, pallor. CBC: Hgb 8.2, MCV 68, MCH 22, Ferritin 8, Iron 25, TIBC 450.',
                    keyFindings: [
                        'Microcytic hypochromic anemia (low MCV, low MCH)',
                        'Low ferritin confirms iron deficiency',
                        'Low iron, high TIBC (transferrin saturation 6%)',
                        'Young female - menorrhagia vs dietary deficiency',
                    ],
                    teachingPoints: [
                        'Classic iron deficiency pattern',
                        'Investigate cause: Menstrual history, GI evaluation if GI symptoms or men not responding',
                        'Treatment: Oral ferrous sulfate 325mg daily, vitamin C for absorption',
                        'Follow-up: Recheck CBC in 8 weeks, continue iron 6 months to replete stores',
                    ],
                },
                {
                    presentation: '68-year-old male, pancytopenia (Hgb 9.5, WBC 2.8, Plt 89). MCV 102. LDH elevated, haptoglobin low.',
                    keyFindings: [
                        'Pancytopenia with macrocytosis',
                        'Elevated LDH, low haptoglobin suggest hemolysis',
                        'Peripheral smear: Schistocytes (fragmented RBCs)',
                    ],
                    teachingPoints: [
                        'MAHA (microangiopathic hemolytic anemia) with pancytopenia',
                        'Differential: TTP, HUS, DIC, malignant hypertension, metastatic cancer',
                        'Urgent: TTP is hematologic emergency - ADAMTS13 activity',
                        'Treatment: Plasma exchange for TTP; supportive care for HUS',
                    ],
                },
            ],
            references: [
                'Bain BJ, Bates I, Laffan MA. Dacie and Lewis Practical Haematology. 12th ed. Elsevier; 2016.',
                'Hoffbrand AV, Moss PAH. Essential Haematology. 7th ed. Wiley-Blackwell; 2015.',
                'Kaushansky K, et al. Williams Hematology. 9th ed. McGraw-Hill; 2015.',
            ],
        },
    },
    interactions: {
        anatomyPoints: [
            { structure: 'bone-marrow', focus: 'cavity', description: 'Where all blood cells are produced' },
            { structure: 'spleen', focus: 'red-pulp', description: 'Filters and removes old red blood cells' },
            { structure: 'lymph-nodes', focus: 'cortex', description: 'Where lymphocytes mature and respond to infection' },
            { structure: 'liver', focus: 'kupffer-cells', description: 'Recycles iron from old red blood cells' },
            { structure: 'kidneys', focus: 'peritubular-cells', description: 'Produce erythropoietin to stimulate RBC production' },
        ],
        relatedLabs: [
            'iron-panel',
            'ferritin',
            'b12-folate',
            'reticulocyte-count',
            'peripheral-smear',
            'ldh',
            'haptoglobin',
            'bilirubin',
        ],
        relatedMedications: [
            'iron-supplements',
            'b12-injections',
            'folate',
            'erythropoietin',
            'immunosuppressants-for-itp',
        ],
        relatedConditions: [
            'iron-deficiency-anemia',
            'b12-deficiency',
            'folate-deficiency',
            'thalassemia',
            'sickle-cell',
            'leukemia',
            'myelodysplastic-syndrome',
        ],
    },
    quiz: {
        title: 'Test Your Understanding',
        questions: [
            {
                id: 'cbc-q1',
                type: 'multiple-choice',
                complexity: 1,
                question: 'What do red blood cells primarily do?',
                options: [
                    'Fight infections',
                    'Carry oxygen throughout the body',
                    'Help blood clot',
                    'Digest food',
                ],
                correctAnswer: 1,
                explanation: 'Red blood cells contain hemoglobin, which binds to oxygen in the lungs and carries it to all the tissues in your body.',
            },
            {
                id: 'cbc-q2',
                type: 'multiple-choice',
                complexity: 2,
                question: 'What does a high white blood cell count usually suggest?',
                options: [
                    'The body is fighting an infection',
                    'The person is dehydrated',
                    'The person has anemia',
                    'The blood is clotting too much',
                ],
                correctAnswer: 0,
                explanation: 'White blood cells are part of the immune system. A high count (leukocytosis) often indicates the body is fighting an infection or inflammation.',
            },
            {
                id: 'cbc-q3',
                type: 'multiple-choice',
                complexity: 3,
                question: 'A patient has anemia with MCV of 70 fL. What is the most likely type of anemia?',
                options: [
                    'Vitamin B12 deficiency',
                    'Iron deficiency',
                    'Liver disease',
                    'Hypothyroidism',
                ],
                correctAnswer: 1,
                explanation: 'MCV (mean corpuscular volume) of 70 fL is low (microcytic). Iron deficiency is the most common cause of microcytic anemia.',
            },
            {
                id: 'cbc-q4',
                type: 'multiple-choice',
                complexity: 4,
                question: 'What enzyme is deficient in lead poisoning that causes anemia?',
                options: [
                    'Glucose-6-phosphate dehydrogenase',
                    'Ferrochelatase and ALA dehydratase',
                    'Pyruvate kinase',
                    'Hexokinase',
                ],
                correctAnswer: 1,
                explanation: 'Lead inhibits ferrochelatase (inserting iron into protoporphyrin) and ALA dehydratase (early in heme synthesis), causing microcytic anemia with elevated free erythrocyte protoporphyrin.',
            },
            {
                id: 'cbc-q5',
                type: 'multiple-choice',
                complexity: 6,
                question: 'A patient presents with pancytopenia, macrocytosis (MCV 110), and hypersegmented neutrophils. What is the most likely diagnosis?',
                options: [
                    'Aplastic anemia',
                    'Myelodysplastic syndrome',
                    'Megaloblastic anemia from B12/folate deficiency',
                    'Acute leukemia',
                ],
                correctAnswer: 2,
                explanation: 'Macrocytosis with hypersegmented neutrophils is classic for megaloblastic anemia. B12 or folate deficiency impairs DNA synthesis, causing nuclear-cytoplasmic asynchrony. MDS can mimic but neutrophil hypersegmentation is more specific for megaloblastic change.',
            },
        ],
        passingScore: 80,
    },
    references: [
        {
            citation: 'Bain BJ. Blood Cells: A Practical Guide. 5th ed. Wiley-Blackwell; 2015.',
        },
        {
            citation: 'Kaushansky K, et al. Williams Hematology. 9th ed. McGraw-Hill; 2015.',
        },
    ],
    resources: [
        {
            title: 'Understanding Your Lab Results (NCCN)',
            type: 'website',
            url: 'https://www.nccn.org/patients/resources/life_with_cancer/understanding_lab_tests.aspx',
            description: 'Patient guide to understanding laboratory test results',
        },
        {
            title: 'Anemia (CDC)',
            type: 'website',
            url: 'https://www.cdc.gov/ncbddd/blooddisorders/anemia.html',
            description: 'Centers for Disease Control information on anemia',
        },
    ],
};
export default cbcModule;
//# sourceMappingURL=cbc.js.map