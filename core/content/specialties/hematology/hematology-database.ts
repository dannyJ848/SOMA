/**
 * Biological Self — Hematology Specialty Database
 * 25 entries covering anemias, bleeding, thrombosis, malignancy,
 * transfusion medicine, bone marrow disorders, and platelet disorders.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type HematologySubcategory =
  | 'anemia' | 'bleeding' | 'thrombosis' | 'malignancy'
  | 'transfusion' | 'bone-marrow' | 'platelet';

export interface HematologyEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory: HematologySubcategory;
  summary: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  labFindings: string[];
  diagnosticWorkup: string[];
  treatment: string;
  monitoring: string[];
  complications: string[];
  prognosis: string;
  patientTip: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const hem = (
  id: string, name: string, nameEs: string, subcategory: HematologySubcategory,
  summary: string, pathophysiology: string, clinicalFeatures: string[],
  labFindings: string[], diagnosticWorkup: string[], treatment: string,
  monitoring: string[], complications: string[], prognosis: string, patientTip: string,
): HematologyEntry => ({
  id, name, nameEs, subcategory, summary, pathophysiology, clinicalFeatures,
  labFindings, diagnosticWorkup, treatment, monitoring, complications, prognosis, patientTip,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const HEMATOLOGY_ENTRIES: Record<string, HematologyEntry> = {

  // ===== ANEMIA (5) =========================================================

  'iron-deficiency-anemia': hem(
    'iron-deficiency-anemia', 'Iron Deficiency Anemia', 'Anemia ferropénica', 'anemia',
    'Most common anemia worldwide, caused by insufficient iron for hemoglobin synthesis.',
    'Depleted iron stores reduce heme production, leading to microcytic hypochromic red cells. Causes include chronic blood loss (GI, menstrual), poor dietary intake, and malabsorption.',
    ['Fatigue and weakness', 'Pallor of skin and conjunctivae', 'Pica or pagophagia', 'Koilonychia (spoon nails)', 'Dyspnea on exertion'],
    ['Low MCV (<80 fL)', 'Low serum ferritin (<30 ng/mL)', 'Low serum iron, elevated TIBC', 'Low reticulocyte hemoglobin content', 'Peripheral smear: microcytic hypochromic cells'],
    ['CBC with differential and reticulocyte count', 'Iron studies (ferritin, serum iron, TIBC, transferrin saturation)', 'Peripheral blood smear', 'Consider GI evaluation if no obvious source'],
    'Oral iron supplementation (ferrous sulfate 325 mg daily-TID) with vitamin C for absorption; IV iron for intolerance or malabsorption; treat underlying cause.',
    ['Reticulocyte count at 1-2 weeks', 'Hemoglobin at 4-8 weeks', 'Ferritin at 3 months to confirm store repletion'],
    ['Severe anemia requiring transfusion', 'High-output cardiac failure', 'Impaired cognitive development in children', 'Restless legs syndrome'],
    'Excellent with iron repletion and correction of underlying cause; hemoglobin normalizes in 6-8 weeks.',
    'Take iron tablets on an empty stomach with orange juice; avoid calcium and antacids within 2 hours.',
  ),

  'b12-deficiency-anemia': hem(
    'b12-deficiency-anemia', 'Vitamin B12 Deficiency / Pernicious Anemia', 'Anemia por deficiencia de B12 / Anemia perniciosa', 'anemia',
    'Megaloblastic anemia from B12 deficiency, often autoimmune (pernicious anemia) or dietary.',
    'B12 is essential for DNA synthesis. Deficiency causes ineffective erythropoiesis with megaloblastic maturation. Pernicious anemia results from autoantibodies against intrinsic factor or parietal cells.',
    ['Fatigue and glossitis (smooth tongue)', 'Peripheral neuropathy (paresthesias)', 'Subacute combined degeneration of spinal cord', 'Cognitive changes or dementia', 'Ataxia and proprioceptive loss'],
    ['Elevated MCV (>100 fL)', 'Low serum B12 (<200 pg/mL)', 'Elevated methylmalonic acid and homocysteine', 'Hypersegmented neutrophils on smear', 'Possible pancytopenia'],
    ['Serum B12 and folate levels', 'Methylmalonic acid and homocysteine', 'Anti-intrinsic factor and anti-parietal cell antibodies', 'Peripheral blood smear', 'Reticulocyte count'],
    'IM cyanocobalamin 1000 mcg daily x7 days, then weekly x4, then monthly for life in pernicious anemia; high-dose oral B12 (1000-2000 mcg/day) for dietary deficiency.',
    ['Reticulocyte count at 5-7 days', 'CBC at 6-8 weeks', 'B12 levels every 6-12 months', 'Neurological exam follow-up'],
    ['Irreversible neurological damage if untreated', 'Increased risk of gastric carcinoma in pernicious anemia', 'Hypokalemia during treatment from rapid cell production'],
    'Hematologic recovery is complete; neurological deficits may persist if treatment is delayed beyond 6 months.',
    'B12 injections are painless and lifelong if you have pernicious anemia. Neurological symptoms may improve slowly over months.',
  ),

  'folate-deficiency-anemia': hem(
    'folate-deficiency-anemia', 'Folate Deficiency Anemia', 'Anemia por deficiencia de folato', 'anemia',
    'Megaloblastic anemia caused by inadequate folate intake, increased demand, or malabsorption.',
    'Folate is a coenzyme in DNA synthesis. Deficiency impairs nuclear maturation of red cell precursors, producing large oval macrocytes. Common in alcoholism, pregnancy, and malabsorption syndromes.',
    ['Fatigue and weakness', 'Glossitis and mouth ulcers', 'Diarrhea', 'No neurological symptoms (distinguishes from B12)', 'Irritability'],
    ['Elevated MCV (>100 fL)', 'Low serum folate (<3 ng/mL)', 'Low RBC folate', 'Elevated homocysteine, normal methylmalonic acid', 'Hypersegmented neutrophils'],
    ['Serum folate and RBC folate', 'Serum B12 (must exclude B12 deficiency)', 'Homocysteine and methylmalonic acid', 'CBC and peripheral smear', 'Reticulocyte count'],
    'Oral folic acid 1-5 mg daily for 1-4 months; address underlying cause (dietary counseling, reduce alcohol). Always rule out concurrent B12 deficiency before treating.',
    ['Reticulocyte count at 5-7 days', 'CBC at 4-8 weeks', 'Folate levels at 3 months'],
    ['Neural tube defects in pregnancy if untreated', 'Masking of concurrent B12 deficiency', 'Pancytopenia in severe cases'],
    'Excellent; hematologic recovery within weeks of supplementation.',
    'Eat leafy greens, fortified cereals, and legumes. Folate supplements are safe and inexpensive.',
  ),

  'anemia-chronic-disease': hem(
    'anemia-chronic-disease', 'Anemia of Chronic Disease', 'Anemia de enfermedad crónica', 'anemia',
    'Second most common anemia, associated with chronic inflammation, infection, or malignancy.',
    'Inflammatory cytokines increase hepcidin, which blocks iron absorption and sequesters iron in macrophages. EPO production is blunted. Results in functional iron deficiency despite adequate stores.',
    ['Mild to moderate fatigue', 'Symptoms of underlying disease predominate', 'Pallor', 'Decreased exercise tolerance'],
    ['Normocytic or mildly microcytic anemia', 'Low serum iron, low TIBC', 'Normal or elevated ferritin', 'Elevated inflammatory markers (CRP, ESR)', 'Low reticulocyte count'],
    ['CBC and iron studies', 'Ferritin and transferrin saturation', 'CRP, ESR', 'Evaluate for underlying condition', 'Reticulocyte count'],
    'Treat underlying disease; ESAs (erythropoietin-stimulating agents) if hemoglobin <10 g/dL and symptomatic; IV iron if concurrent true iron deficiency; transfusion for severe symptomatic anemia.',
    ['Hemoglobin every 1-3 months', 'Iron studies periodically', 'Underlying disease activity markers'],
    ['Transfusion dependence', 'Iron overload from repeated transfusions', 'Cardiovascular decompensation'],
    'Depends on underlying condition; anemia improves when the primary disease is controlled.',
    'This anemia is your body responding to another illness. Treating that illness is the best way to improve your blood counts.',
  ),

  'hemolytic-anemia': hem(
    'hemolytic-anemia', 'Hemolytic Anemia Overview', 'Anemia hemolítica (visión general)', 'anemia',
    'Group of anemias caused by premature destruction of red blood cells (intravascular or extravascular).',
    'RBCs are destroyed faster than bone marrow can replace them. Causes include autoimmune (warm/cold antibodies), hereditary (spherocytosis, G6PD, sickle cell), mechanical (MAHA), and infections.',
    ['Jaundice and scleral icterus', 'Dark urine (hemoglobinuria)', 'Splenomegaly', 'Fatigue and pallor', 'Gallstones (pigmented)'],
    ['Elevated reticulocyte count', 'Elevated indirect bilirubin and LDH', 'Low haptoglobin', 'Peripheral smear: spherocytes, schistocytes, or bite cells', 'Positive DAT (Coombs) in autoimmune causes'],
    ['CBC with reticulocyte count', 'LDH, haptoglobin, indirect bilirubin', 'Direct antiglobulin test (DAT/Coombs)', 'Peripheral blood smear', 'G6PD level, hemoglobin electrophoresis as indicated'],
    'Depends on etiology: corticosteroids for autoimmune; folic acid supplementation; splenectomy for refractory cases; avoid triggers in G6PD; transfusion support as needed.',
    ['Hemoglobin and reticulocyte count', 'LDH and haptoglobin trends', 'DAT if autoimmune', 'Bilirubin and renal function'],
    ['Aplastic crisis (parvovirus B19)', 'Acute renal failure from hemoglobinuria', 'Cholelithiasis', 'Venous thromboembolism'],
    'Varies widely by cause; autoimmune hemolytic anemia often responds to steroids; hereditary forms are lifelong but manageable.',
    'Avoid known triggers, stay well-hydrated, and watch for dark urine or sudden worsening of fatigue.',
  ),

  // ===== BLEEDING (3) =======================================================

  'von-willebrand-disease': hem(
    'von-willebrand-disease', 'Von Willebrand Disease', 'Enfermedad de von Willebrand', 'bleeding',
    'Most common inherited bleeding disorder caused by deficient or dysfunctional von Willebrand factor.',
    'VWF mediates platelet adhesion and stabilizes factor VIII. Deficiency causes mucocutaneous bleeding. Type 1 (partial deficiency) is most common; type 2 (qualitative defect); type 3 (near-complete absence).',
    ['Easy bruising', 'Prolonged bleeding from cuts', 'Menorrhagia', 'Epistaxis', 'Post-surgical or dental bleeding'],
    ['Prolonged bleeding time or PFA-100', 'Low VWF antigen and activity (ristocetin cofactor)', 'Low or normal factor VIII', 'Normal platelet count', 'Prolonged aPTT in some types'],
    ['VWF antigen and activity levels', 'Factor VIII level', 'VWF multimer analysis', 'PFA-100 closure time', 'Family history and bleeding score assessment'],
    'Desmopressin (DDAVP) for type 1; VWF-containing factor VIII concentrates for types 2 and 3; antifibrinolytics (aminocaproic acid, tranexamic acid) for mucosal bleeding.',
    ['Response to DDAVP challenge', 'Bleeding symptoms and frequency', 'VWF and factor VIII levels perioperatively', 'Menstrual bleeding diary'],
    ['Post-procedural hemorrhage', 'Joint bleeding (rare, mainly type 3)', 'Anemia from chronic blood loss', 'Hyponatremia from DDAVP'],
    'Excellent for types 1 and 2 with appropriate prophylaxis; type 3 requires lifelong factor replacement.',
    'Carry a medical alert card. Inform all doctors and dentists before any procedure. Avoid aspirin and NSAIDs.',
  ),

  'hemophilia-a': hem(
    'hemophilia-a', 'Hemophilia A', 'Hemofilia A', 'bleeding',
    'X-linked recessive bleeding disorder caused by factor VIII deficiency.',
    'Factor VIII is a cofactor for factor IXa in the intrinsic coagulation pathway. Deficiency causes impaired thrombin generation. Severity correlates with factor VIII level: severe (<1%), moderate (1-5%), mild (5-40%).',
    ['Hemarthrosis (joint bleeding)', 'Deep muscle hematomas', 'Prolonged bleeding after trauma or surgery', 'Easy bruising', 'Intracranial hemorrhage (rare but serious)'],
    ['Prolonged aPTT, normal PT', 'Low factor VIII activity', 'Normal VWF levels', 'Normal platelet count and bleeding time', 'Mixing study corrects aPTT'],
    ['Factor VIII activity level', 'aPTT and PT', 'Mixing study', 'Bethesda assay for inhibitors', 'Genetic testing for carrier detection'],
    'Factor VIII replacement (on-demand or prophylaxis); emicizumab for prophylaxis; antifibrinolytics as adjunct; gene therapy emerging. Avoid aspirin and IM injections.',
    ['Factor VIII trough levels on prophylaxis', 'Joint health assessment annually', 'Inhibitor screening every 6-12 months', 'Hepatitis and HIV screening if historically transfused'],
    ['Target joint arthropathy', 'Inhibitor development (30% of severe)', 'Compartment syndrome', 'Pseudotumors', 'Transfusion-transmitted infections (historical)'],
    'Near-normal life expectancy with modern prophylaxis; quality of life greatly improved with emicizumab and gene therapy prospects.',
    'Treat bleeds early — "when in doubt, treat." Wear medical identification and keep factor accessible.',
  ),

  'dic': hem(
    'dic', 'Disseminated Intravascular Coagulation (DIC)', 'Coagulación intravascular diseminada', 'bleeding',
    'Life-threatening syndrome of widespread activation of coagulation leading to simultaneous thrombosis and hemorrhage.',
    'Triggered by tissue factor release (sepsis, trauma, malignancy, obstetric emergencies). Systemic thrombin generation consumes clotting factors and platelets while fibrinolysis produces D-dimers.',
    ['Bleeding from multiple sites (IV lines, wounds)', 'Petechiae and purpura', 'Organ dysfunction from microvascular thrombosis', 'Acral cyanosis or gangrene', 'Renal failure and ARDS'],
    ['Thrombocytopenia', 'Elevated PT/INR and aPTT', 'Elevated D-dimer and FDPs', 'Low fibrinogen', 'Schistocytes on peripheral smear'],
    ['DIC score (ISTH criteria)', 'CBC, PT, aPTT, fibrinogen, D-dimer', 'Peripheral blood smear', 'LDH, haptoglobin', 'Evaluate for underlying trigger'],
    'Treat underlying cause aggressively; supportive: platelets if <10K or bleeding, cryoprecipitate if fibrinogen <100 mg/dL, FFP for active bleeding with prolonged PT/aPTT; heparin only in chronic compensated DIC.',
    ['Serial coagulation labs every 6-8 hours', 'Platelet count and fibrinogen trends', 'Clinical bleeding assessment', 'Organ function markers'],
    ['Multiorgan failure', 'Fatal hemorrhage', 'Venous thromboembolism', 'Purpura fulminans', 'Renal cortical necrosis'],
    'Depends on underlying cause; mortality 40-80% in acute DIC from sepsis; better outcomes when trigger is rapidly reversible (obstetric).',
    'DIC is always caused by another serious condition. Your medical team will focus on treating that cause while supporting your blood clotting.',
  ),

  // ===== THROMBOSIS (3) =====================================================

  'dvt-management': hem(
    'dvt-management', 'Deep Vein Thrombosis Management', 'Trombosis venosa profunda', 'thrombosis',
    'Blood clot in deep veins, most commonly lower extremities, with risk of pulmonary embolism.',
    'Virchow triad: stasis, endothelial injury, hypercoagulability. Clot forms in deep venous system, most often iliofemoral or popliteal veins. Risk factors include immobility, surgery, malignancy, and thrombophilia.',
    ['Unilateral leg swelling and pain', 'Warmth and erythema', 'Pitting edema', 'Homan sign (unreliable)', 'May be asymptomatic'],
    ['Elevated D-dimer', 'Compression ultrasonography positive', 'Wells score for pretest probability', 'CBC, PT/INR, aPTT baseline'],
    ['Wells score assessment', 'D-dimer (if low probability)', 'Compression ultrasonography', 'CT venography if US inconclusive', 'Thrombophilia workup if unprovoked or recurrent'],
    'Anticoagulation: DOACs first-line (rivaroxaban, apixaban); LMWH bridge to warfarin if DOACs contraindicated; catheter-directed thrombolysis for massive iliofemoral DVT; IVC filter if anticoagulation contraindicated.',
    ['INR if on warfarin (target 2-3)', 'Renal function for DOAC dosing', 'Signs of post-thrombotic syndrome', 'Duration: 3 months (provoked) to indefinite (unprovoked/recurrent)'],
    ['Pulmonary embolism', 'Post-thrombotic syndrome', 'Phlegmasia cerulea dolens', 'Recurrent VTE', 'Anticoagulant-related bleeding'],
    'Good with timely anticoagulation; recurrence risk 3-5% per year after unprovoked DVT.',
    'Take your blood thinner exactly as prescribed. Walk regularly, stay hydrated on long trips, and wear compression stockings if recommended.',
  ),

  'pulmonary-embolism': hem(
    'pulmonary-embolism', 'Pulmonary Embolism', 'Embolia pulmonar', 'thrombosis',
    'Occlusion of pulmonary arteries by thrombus, usually originating from DVT; potentially fatal.',
    'Thrombus from deep veins embolizes to the pulmonary vasculature, increasing pulmonary vascular resistance and right ventricular afterload. Massive PE causes hemodynamic collapse.',
    ['Sudden dyspnea', 'Pleuritic chest pain', 'Tachycardia and tachypnea', 'Hemoptysis', 'Syncope (massive PE)'],
    ['Elevated D-dimer', 'ABG: hypoxemia and respiratory alkalosis', 'Troponin and BNP elevation (RV strain)', 'ECG: sinus tachycardia, S1Q3T3', 'CT angiography: filling defect'],
    ['Wells or Geneva score', 'D-dimer if low-moderate probability', 'CT pulmonary angiography (gold standard)', 'Echocardiogram for RV function', 'Lower extremity duplex ultrasound'],
    'Anticoagulation with DOACs or LMWH/warfarin; systemic thrombolysis (alteplase) for massive PE with hemodynamic instability; surgical or catheter embolectomy in select cases; hemodynamic support.',
    ['Vital signs and oxygen saturation', 'RV function on echo', 'Anticoagulation compliance and monitoring', 'Duration: 3 months minimum to indefinite'],
    ['Cardiovascular collapse and death', 'Chronic thromboembolic pulmonary hypertension', 'Recurrent PE', 'Right heart failure', 'Post-PE syndrome'],
    'Mortality 2-8% with treatment; massive PE mortality 25-50% even with thrombolysis. Most patients recover fully with anticoagulation.',
    'Seek emergency care for sudden shortness of breath or chest pain. After PE, strict medication adherence prevents recurrence.',
  ),

  'hit': hem(
    'hit', 'Heparin-Induced Thrombocytopenia (HIT)', 'Trombocitopenia inducida por heparina', 'thrombosis',
    'Immune-mediated prothrombotic disorder caused by antibodies against platelet factor 4-heparin complexes.',
    'IgG antibodies bind PF4-heparin complexes, activating platelets and endothelium, causing massive thrombin generation. Paradoxically thrombotic despite thrombocytopenia. Occurs 5-10 days after heparin exposure.',
    ['Platelet count drop >50% from baseline', 'New thrombosis (venous or arterial)', 'Skin necrosis at injection sites', 'Systemic reactions after IV heparin bolus', 'Limb ischemia'],
    ['Thrombocytopenia (nadir 50-80K typically)', '4Ts score for pretest probability', 'Positive PF4-heparin ELISA', 'Serotonin release assay (confirmatory)', 'New thrombosis on imaging'],
    ['4Ts score calculation', 'PF4-heparin antibody ELISA', 'Serotonin release assay if ELISA positive', 'Duplex ultrasound for DVT', 'Serial platelet counts'],
    'Immediately discontinue ALL heparin; start alternative anticoagulant (argatroban, bivalirudin, or fondaparinux); do NOT give warfarin until platelets recover (>150K); do NOT transfuse platelets.',
    ['Daily platelet counts until recovery', 'Anticoagulation levels (aPTT for argatroban)', 'Thrombosis surveillance', 'Transition to warfarin only after platelet recovery'],
    ['Limb-threatening arterial thrombosis', 'Massive PE or DVT', 'Adrenal hemorrhagic infarction', 'Skin necrosis', 'Warfarin-induced limb gangrene if given prematurely'],
    'Good if recognized early and heparin stopped promptly; mortality 20-30% if unrecognized.',
    'Alert all healthcare providers about your HIT history — you must NEVER receive heparin again. Wear a medical alert bracelet.',
  ),

  // ===== MALIGNANCY (5) =====================================================

  'all': hem(
    'all', 'Acute Lymphoblastic Leukemia (ALL)', 'Leucemia linfoblástica aguda', 'malignancy',
    'Aggressive malignancy of lymphoid progenitors; most common childhood cancer, also affects adults.',
    'Malignant transformation of lymphoid precursors (B-cell or T-cell) in bone marrow leads to accumulation of immature blasts, suppressing normal hematopoiesis. Philadelphia chromosome present in 25% of adults.',
    ['Fatigue, pallor, and fever', 'Bone pain (especially in children)', 'Lymphadenopathy and hepatosplenomegaly', 'Petechiae and bleeding', 'CNS symptoms (headache, cranial nerve palsies)'],
    ['Leukocytosis or leukopenia with circulating blasts', 'Anemia and thrombocytopenia', 'Bone marrow: >20% lymphoblasts', 'Flow cytometry: B or T lineage markers', 'Cytogenetics: Ph+, t(12;21), hyperdiploidy'],
    ['CBC with differential and peripheral smear', 'Bone marrow biopsy with flow cytometry', 'Cytogenetics and FISH', 'Lumbar puncture for CNS involvement', 'CT chest for mediastinal mass (T-ALL)'],
    'Multi-agent chemotherapy in phases: induction, consolidation, maintenance (2-3 years); CNS prophylaxis (intrathecal methotrexate); TKI added for Ph+ ALL; allo-SCT for high-risk; CAR-T for relapsed/refractory.',
    ['Minimal residual disease (MRD) assessment', 'CBC and differential weekly during treatment', 'Lumbar puncture per protocol', 'Cardiac function (anthracycline toxicity)', 'Infection surveillance'],
    ['Tumor lysis syndrome', 'Febrile neutropenia and sepsis', 'CNS relapse', 'Anthracycline cardiotoxicity', 'Treatment-related secondary malignancy'],
    'Children: 85-90% cure rate. Adults: 40-50% long-term survival; Ph+ ALL outcomes improved with TKI addition.',
    'Treatment is long but childhood ALL is highly curable. Stay on schedule with maintenance therapy and report fevers immediately.',
  ),

  'aml': hem(
    'aml', 'Acute Myeloid Leukemia (AML)', 'Leucemia mieloide aguda', 'malignancy',
    'Aggressive hematologic malignancy of myeloid progenitor cells; most common acute leukemia in adults.',
    'Clonal expansion of myeloid blasts arrests differentiation, replacing normal marrow. Auer rods are pathognomonic. Subtype APL (t(15;17)) has unique biology responsive to ATRA.',
    ['Fatigue, pallor, and dyspnea', 'Gingival hyperplasia (monocytic subtypes)', 'DIC (especially APL)', 'Leukostasis symptoms (headache, dyspnea)', 'Skin infiltration (leukemia cutis)'],
    ['Circulating myeloblasts on smear', 'Auer rods on smear', 'Bone marrow: >20% myeloblasts', 'Flow cytometry: myeloid markers (CD13, CD33, MPO)', 'Cytogenetics: t(8;21), inv(16), t(15;17)'],
    ['CBC, peripheral smear', 'Bone marrow biopsy and aspirate', 'Flow cytometry and cytochemistry', 'Cytogenetics and molecular studies (FLT3, NPM1, CEBPA)', 'Coagulation panel (DIC screen)'],
    'Induction: 7+3 (cytarabine + daunorubicin); APL: ATRA + arsenic trioxide; consolidation: high-dose cytarabine or allo-SCT for intermediate/high risk; targeted agents (midostaurin for FLT3+).',
    ['CBC daily during induction', 'Bone marrow biopsy day 14 and post-induction', 'MRD by flow or molecular markers', 'Cardiac function monitoring', 'Infection and bleeding surveillance'],
    ['Tumor lysis syndrome', 'Differentiation syndrome (APL)', 'Febrile neutropenia', 'Hemorrhage from DIC', 'Treatment-related MDS/AML'],
    'Favorable cytogenetics: 60-70% cure; intermediate: 40-50%; adverse: 10-20%. APL cure rate >90% with ATRA/arsenic.',
    'AML treatment is intensive and requires hospitalization. Report any fever, bleeding, or unusual symptoms immediately.',
  ),

  'cll': hem(
    'cll', 'Chronic Lymphocytic Leukemia (CLL)', 'Leucemia linfocítica crónica', 'malignancy',
    'Indolent B-cell malignancy; most common leukemia in Western adults, median age 70 at diagnosis.',
    'Clonal accumulation of mature-appearing but immunologically dysfunctional B lymphocytes in blood, marrow, and lymphoid tissue. Associated with del(13q) (favorable), del(17p)/TP53 mutation (unfavorable).',
    ['Often asymptomatic (incidental lymphocytosis)', 'Painless lymphadenopathy', 'B symptoms (fevers, night sweats, weight loss)', 'Recurrent infections', 'Splenomegaly'],
    ['Lymphocytosis >5000/mcL of clonal B cells', 'Smudge cells on peripheral smear', 'Flow cytometry: CD5+, CD19+, CD23+', 'Immunoglobulin levels often low', 'DAT positive in 10-25% (autoimmune hemolysis)'],
    ['CBC with differential', 'Peripheral blood flow cytometry (diagnostic)', 'FISH panel (del(13q), del(11q), del(17p), trisomy 12)', 'IGHV mutation status', 'Beta-2 microglobulin and LDH'],
    'Watch-and-wait for early stage asymptomatic; BTK inhibitors (ibrutinib, acalabrutinib) first-line; venetoclax-based regimens; chemoimmunotherapy (FCR) for fit patients with mutated IGHV.',
    ['CBC every 3-12 months', 'Lymph node assessment', 'Immunoglobulin levels', 'Screen for Richter transformation', 'Infection surveillance and vaccinations'],
    ['Autoimmune cytopenias (AIHA, ITP)', 'Richter transformation to DLBCL', 'Recurrent infections (hypogammaglobulinemia)', 'Secondary malignancies', 'Tumor lysis with treatment'],
    'Highly variable; early-stage median survival >10 years; del(17p)/TP53 mutation portends worse outcome but improved with novel agents.',
    'Many patients live years without needing treatment. Regular monitoring is key — treatment starts only when necessary.',
  ),

  'non-hodgkin-lymphoma': hem(
    'non-hodgkin-lymphoma', 'Non-Hodgkin Lymphoma', 'Linfoma no Hodgkin', 'malignancy',
    'Heterogeneous group of lymphoid malignancies; DLBCL is the most common aggressive subtype.',
    'Arises from mature B cells (85%), T cells, or NK cells at various differentiation stages. Classified as indolent (follicular) or aggressive (DLBCL, Burkitt). Chromosomal translocations drive oncogene expression.',
    ['Painless lymphadenopathy', 'B symptoms in aggressive types', 'Extranodal involvement (GI, skin, CNS)', 'Hepatosplenomegaly', 'Superior vena cava syndrome (mediastinal mass)'],
    ['Peripheral blood may show circulating lymphoma cells', 'Elevated LDH (aggressive types)', 'Tissue biopsy: architecture and immunophenotype', 'PET/CT avid in aggressive subtypes', 'Bone marrow involvement variable'],
    ['Excisional lymph node biopsy (preferred)', 'Immunohistochemistry and flow cytometry', 'PET/CT staging', 'Bone marrow biopsy', 'Lumbar puncture for high-risk DLBCL'],
    'DLBCL: R-CHOP x6 cycles; follicular: watch-and-wait or rituximab-based regimen; Burkitt: intensive chemoimmunotherapy; relapsed: salvage chemo + autologous SCT; CAR-T for refractory DLBCL.',
    ['Interim PET/CT after 2-4 cycles', 'End-of-treatment PET/CT', 'Surveillance CT or clinical exam every 3-6 months', 'CBC and LDH', 'Late effects screening'],
    ['Tumor lysis syndrome (Burkitt)', 'Febrile neutropenia', 'Anthracycline cardiotoxicity', 'Secondary MDS/AML', 'Histologic transformation (follicular to DLBCL)'],
    'DLBCL: 60-70% cure with R-CHOP; follicular: median survival >15 years but not curable with standard therapy; Burkitt: 80-90% cure with intensive regimens.',
    'Lymph node biopsy is essential for accurate diagnosis. Treatment depends on the specific subtype — ask your team about your exact diagnosis.',
  ),

  'multiple-myeloma': hem(
    'multiple-myeloma', 'Multiple Myeloma', 'Mieloma múltiple', 'malignancy',
    'Clonal plasma cell malignancy producing monoclonal immunoglobulin, causing end-organ damage (CRAB criteria).',
    'Neoplastic plasma cells in bone marrow secrete monoclonal protein (M-spike), osteoclast-activating factors causing lytic lesions, and light chains causing renal damage. CRAB: Calcium elevation, Renal insufficiency, Anemia, Bone lesions.',
    ['Bone pain (especially back)', 'Fatigue from anemia', 'Recurrent infections', 'Hypercalcemia symptoms (confusion, constipation)', 'Renal insufficiency'],
    ['M-spike on SPEP', 'Abnormal free light chain ratio', 'Bone marrow: >10% clonal plasma cells', 'Lytic lesions on skeletal survey or PET/CT', 'Rouleaux formation on smear'],
    ['SPEP/UPEP with immunofixation', 'Serum free light chains', 'Bone marrow biopsy with cytogenetics/FISH', 'PET/CT or low-dose whole-body CT', 'CBC, calcium, creatinine, albumin, beta-2 microglobulin'],
    'Transplant-eligible: induction (VRd: bortezomib, lenalidomide, dexamethasone) followed by autologous SCT and maintenance lenalidomide. Transplant-ineligible: VRd or DRd (daratumumab, lenalidomide, dex) continuously.',
    ['Serum and urine protein electrophoresis', 'Free light chains monthly initially', 'Bone marrow biopsy for response assessment', 'Renal function and calcium', 'Skeletal imaging annually'],
    ['Pathologic fractures', 'Renal failure', 'Hyperviscosity syndrome', 'Amyloidosis', 'Secondary malignancies (MDS from lenalidomide)'],
    'Median survival 5-7 years overall; high-risk cytogenetics (del(17p), t(4;14)) confer worse prognosis. Novel quadruplet regimens improving outcomes.',
    'Stay hydrated, report new bone pain promptly, and avoid NSAIDs. Bone-strengthening agents help prevent fractures.',
  ),

  // ===== TRANSFUSION (3) ====================================================

  'blood-product-overview': hem(
    'blood-product-overview', 'Blood Product Overview', 'Productos sanguíneos (visión general)', 'transfusion',
    'Summary of major blood components: PRBCs, platelets, FFP, cryoprecipitate, and their clinical indications.',
    'Whole blood is separated into components. PRBCs carry oxygen; platelets provide hemostasis; FFP replaces clotting factors; cryoprecipitate provides fibrinogen and factor VIII. Each product has specific storage, dosing, and compatibility requirements.',
    ['Anemia symptoms requiring transfusion', 'Active bleeding with coagulopathy', 'Thrombocytopenia with bleeding or pre-procedure', 'Hypofibrinogenemia', 'Massive hemorrhage'],
    ['Hemoglobin <7 g/dL (restrictive threshold)', 'Platelet count <10K (prophylactic) or <50K (surgical)', 'INR >1.5 with active bleeding', 'Fibrinogen <100-150 mg/dL', 'Type and screen/crossmatch results'],
    ['Type and screen or crossmatch', 'CBC and coagulation panel', 'Fibrinogen level', 'Direct antiglobulin test if hemolysis suspected', 'Antibody identification if positive screen'],
    'PRBCs: 1 unit raises Hb ~1 g/dL; Platelets: 1 apheresis unit raises count 30-50K; FFP: 10-15 mL/kg; Cryo: 1 unit per 5 kg raises fibrinogen ~50 mg/dL. Transfuse through filtered tubing; ABO compatible.',
    ['Vital signs every 15 min during first unit', 'Post-transfusion CBC at 1 hour', 'Monitor for transfusion reactions', 'Track cumulative transfusion history', 'Iron overload screening in chronic transfusion'],
    ['Transfusion reactions (febrile, allergic, hemolytic)', 'TRALI', 'TACO (volume overload)', 'Iron overload', 'Transfusion-transmitted infections (rare)'],
    'Blood products are life-saving; restrictive transfusion strategies (Hb <7) reduce complications without worsening outcomes in most patients.',
    'Blood transfusion is very safe. Mild reactions like chills are common and treatable. Tell your nurse immediately if you feel unwell during a transfusion.',
  ),

  'transfusion-reactions': hem(
    'transfusion-reactions', 'Transfusion Reactions', 'Reacciones transfusionales', 'transfusion',
    'Adverse events occurring during or after blood product administration, ranging from mild to fatal.',
    'Immune-mediated: acute hemolytic (ABO incompatibility), febrile non-hemolytic (cytokine release), allergic/anaphylactic (anti-IgA), TRALI (donor antibodies activate recipient neutrophils). Non-immune: TACO, bacterial contamination, hypothermia.',
    ['Fever and chills (most common)', 'Urticaria and pruritus', 'Dyspnea and hypoxia (TRALI/TACO)', 'Flank pain and dark urine (hemolytic)', 'Hypotension and shock (anaphylaxis/sepsis)'],
    ['Positive DAT (hemolytic reaction)', 'Pink plasma (free hemoglobin)', 'Elevated LDH, bilirubin, low haptoglobin', 'Blood culture positive (bacterial contamination)', 'BNP elevated (TACO) vs bilateral infiltrates without overload (TRALI)'],
    ['Stop transfusion immediately', 'Repeat type and crossmatch on new sample', 'DAT, LDH, haptoglobin, bilirubin, urinalysis', 'Blood cultures from patient and product', 'Chest X-ray if respiratory symptoms'],
    'Stop transfusion; supportive care. Febrile: acetaminophen, premedicate future. Allergic: antihistamines; anaphylaxis: epinephrine. Hemolytic: aggressive IV fluids, maintain urine output. TRALI: supportive, no diuretics. TACO: diuretics.',
    ['Vital signs q15 min until stable', 'Urine output (hemolytic reaction)', 'Repeat hemolysis labs at 6-12 hours', 'Respiratory status (TRALI/TACO)', 'Report to blood bank per protocol'],
    ['Acute renal failure from hemolysis', 'DIC from massive hemolytic reaction', 'Respiratory failure (TRALI)', 'Death (rare, ~1 per 500,000 units)', 'Alloimmunization complicating future transfusions'],
    'Most reactions are mild and self-limited. Fatal hemolytic reactions are almost always due to clerical error. TRALI mortality ~5-10%.',
    'Tell your nurse immediately if you feel anything unusual during a transfusion — fever, chills, itching, or trouble breathing. Early detection is key.',
  ),

  'massive-transfusion-protocol': hem(
    'massive-transfusion-protocol', 'Massive Transfusion Protocol', 'Protocolo de transfusión masiva', 'transfusion',
    'Structured approach to replacing >1 blood volume in 24 hours or >10 units PRBCs, used in major hemorrhage.',
    'Massive hemorrhage causes dilutional coagulopathy, hypothermia, and acidosis (lethal triad). Balanced resuscitation with 1:1:1 ratio (PRBC:FFP:platelets) mimics whole blood and reduces mortality. TXA within 3 hours improves survival.',
    ['Major trauma with uncontrolled hemorrhage', 'Massive GI bleeding', 'Obstetric hemorrhage', 'Surgical hemorrhage', 'Hemodynamic instability despite initial resuscitation'],
    ['Hemoglobin dropping rapidly', 'Coagulopathy (INR >1.5, fibrinogen <150)', 'Thrombocytopenia', 'Metabolic acidosis and lactate elevation', 'TEG/ROTEM for point-of-care coag assessment'],
    ['Activate massive transfusion protocol', 'Type and crossmatch (use O-negative if emergent)', 'Serial CBC, coags, fibrinogen, ABG, lactate', 'TEG/ROTEM if available', 'Calcium levels (citrate toxicity)'],
    'Balanced 1:1:1 resuscitation (PRBC:FFP:platelets); TXA 1g IV within 3 hours; cryoprecipitate if fibrinogen <150; calcium chloride for hypocalcemia; damage control surgery; permissive hypotension (SBP 80-90) until surgical hemostasis.',
    ['Serial ABG, lactate, calcium every 30-60 min', 'Coagulation labs every 30-60 min', 'Temperature monitoring (prevent hypothermia)', 'Urine output', 'Hemodynamic response to resuscitation'],
    ['Lethal triad (hypothermia, acidosis, coagulopathy)', 'Hypocalcemia from citrate', 'Hyperkalemia from stored blood', 'ARDS and multiorgan failure', 'Transfusion-related complications'],
    'Mortality depends on cause and speed of hemorrhage control; trauma patients receiving balanced resuscitation have improved survival (PROPPR trial).',
    'Your medical team has protocols to quickly replace blood loss. Staying warm and controlling the bleeding source are top priorities.',
  ),

  // ===== BONE MARROW (3) ====================================================

  'aplastic-anemia': hem(
    'aplastic-anemia', 'Aplastic Anemia', 'Anemia aplásica', 'bone-marrow',
    'Bone marrow failure syndrome with pancytopenia and hypocellular marrow; immune-mediated in most cases.',
    'Autoimmune T-cell-mediated destruction of hematopoietic stem cells leads to marrow hypoplasia. Can also be inherited (Fanconi anemia) or triggered by drugs (chloramphenicol), viruses (hepatitis, parvovirus), or radiation.',
    ['Fatigue and pallor (anemia)', 'Recurrent infections (neutropenia)', 'Bleeding and bruising (thrombocytopenia)', 'Petechiae and mucosal hemorrhage', 'No hepatosplenomegaly or lymphadenopathy'],
    ['Pancytopenia on CBC', 'Low reticulocyte count', 'Bone marrow biopsy: hypocellular (<25%) with fat replacement', 'Normal cell morphology (no dysplasia)', 'Absence of fibrosis or malignant infiltration'],
    ['CBC with reticulocyte count', 'Bone marrow biopsy (essential)', 'Cytogenetics to exclude MDS', 'Flow cytometry for PNH clone', 'Hepatitis panel, HIV, parvovirus B19 serology'],
    'Age <40 with matched donor: allogeneic SCT (curative). Others: immunosuppressive therapy (horse ATG + cyclosporine + eltrombopag); supportive transfusions; growth factors; avoid transfusions from family members if SCT planned.',
    ['CBC weekly initially, then monthly', 'Cyclosporine levels', 'PNH clone monitoring annually', 'Screen for clonal evolution (MDS/AML)', 'Iron overload from chronic transfusions'],
    ['Evolution to MDS or AML (10-15%)', 'PNH clone development', 'Transfusion iron overload', 'Infections from neutropenia', 'Graft rejection or GVHD post-transplant'],
    'SCT: 75-90% long-term survival with matched sibling donor. IST: 60-70% response; some relapse or evolve to MDS.',
    'Avoid contact sports and crowds when counts are low. Report any fever, bleeding, or bruising promptly.',
  ),

  'myelodysplastic-syndromes': hem(
    'myelodysplastic-syndromes', 'Myelodysplastic Syndromes (MDS)', 'Síndromes mielodisplásicos', 'bone-marrow',
    'Clonal stem cell disorders with ineffective hematopoiesis, cytopenias, and risk of AML transformation.',
    'Acquired somatic mutations in hematopoietic stem cells cause dysplastic differentiation and apoptosis of marrow precursors. Classified by blast percentage, ring sideroblasts, and cytogenetic abnormalities. IPSS-R stratifies risk.',
    ['Fatigue from anemia (most common)', 'Recurrent infections', 'Bleeding or bruising', 'Often discovered incidentally on CBC', 'Splenomegaly (uncommon)'],
    ['Macrocytic anemia (most common)', 'Cytopenias (one or more lineages)', 'Dysplastic changes on smear (pseudo-Pelger-Huet, hypogranular neutrophils)', 'Bone marrow: dysplasia in >10% of lineage', 'Ring sideroblasts on iron stain'],
    ['CBC with differential and reticulocyte count', 'Peripheral blood smear', 'Bone marrow biopsy with iron stain', 'Cytogenetics (del(5q), -7, complex)', 'Molecular panel (SF3B1, TP53, ASXL1)'],
    'Lower-risk: ESAs, lenalidomide (del(5q)), luspatercept (ring sideroblasts); transfusion support; iron chelation. Higher-risk: hypomethylating agents (azacitidine, decitabine); allogeneic SCT for eligible patients.',
    ['CBC every 1-3 months', 'Bone marrow biopsy annually or for count changes', 'Ferritin (iron overload from transfusions)', 'Monitor for AML transformation', 'IPSS-R reassessment'],
    ['Transformation to AML (30% overall)', 'Transfusion-dependent iron overload', 'Life-threatening infections', 'Bleeding complications', 'Treatment-related toxicity'],
    'Highly variable by IPSS-R: very low risk median survival >8 years; very high risk median survival <1 year.',
    'MDS is a spectrum — some patients need only monitoring while others need treatment. Blood transfusions and growth factors can greatly improve quality of life.',
  ),

  'bone-marrow-biopsy': hem(
    'bone-marrow-biopsy', 'Bone Marrow Biopsy Guide', 'Guía de biopsia de médula ósea', 'bone-marrow',
    'Essential diagnostic procedure for evaluating hematologic disorders; includes aspirate and trephine core biopsy.',
    'Performed at the posterior iliac crest. Aspirate provides cells for morphology, flow cytometry, cytogenetics, and molecular studies. Core biopsy shows architecture, cellularity, fibrosis, and infiltrative patterns.',
    ['Procedure-related: brief sharp pain during aspiration', 'Local anesthesia minimizes discomfort', 'Mild soreness for 1-2 days post-procedure', 'Small risk of bleeding at site', 'Rare: infection or nerve injury'],
    ['Aspirate: cell morphology, differential count, iron stores', 'Core biopsy: cellularity percentage, architecture', 'Flow cytometry: immunophenotype', 'Cytogenetics: karyotype and FISH', 'Molecular studies: gene mutations'],
    ['Verify indication (unexplained cytopenias, suspected malignancy, staging)', 'Check coagulation and platelet count', 'Informed consent', 'Position: prone or lateral decubitus', 'Adequate local anesthesia with lidocaine'],
    'Local anesthesia (lidocaine to periosteum); Jamshidi needle for core biopsy; aspirate first, then core; apply pressure post-procedure; conscious sedation optional for anxious patients.',
    ['Observe for bleeding 15-30 minutes post-procedure', 'Pressure dressing for 24 hours', 'Avoid heavy lifting for 48 hours', 'Follow up for pathology results in 5-7 days', 'Report increasing pain, swelling, or fever'],
    ['Bleeding or hematoma (most common)', 'Infection (rare)', 'Retroperitoneal hemorrhage (very rare)', 'Needle fracture', 'Persistent pain at biopsy site'],
    'Very safe procedure with <1% serious complication rate. Results typically available within 1-2 weeks.',
    'The procedure takes 15-20 minutes. You will feel pressure and a brief sharp pain. Bring someone to drive you home if sedation is used.',
  ),

  // ===== PLATELET (3) =======================================================

  'itp': hem(
    'itp', 'Immune Thrombocytopenia (ITP)', 'Trombocitopenia inmune', 'platelet',
    'Autoimmune destruction of platelets by antiplatelet antibodies; diagnosis of exclusion.',
    'IgG autoantibodies (usually against GPIIb/IIIa) coat platelets, leading to Fc-mediated splenic destruction. Also impairs megakaryocyte platelet production. Can be primary or secondary (SLE, CLL, HIV, HCV).',
    ['Petechiae and purpura', 'Easy bruising', 'Mucosal bleeding (epistaxis, gingival)', 'Menorrhagia', 'Rarely life-threatening hemorrhage'],
    ['Isolated thrombocytopenia (<100K)', 'Normal WBC and hemoglobin', 'Large platelets on smear (young platelets)', 'Normal coagulation studies', 'Bone marrow: increased megakaryocytes (if done)'],
    ['CBC with peripheral smear', 'Reticulocyte count', 'HIV, HCV, H. pylori testing', 'Direct antiglobulin test', 'Bone marrow biopsy if atypical features or age >60'],
    'First-line: corticosteroids (prednisone 1 mg/kg or dexamethasone 40 mg x4 days); IVIG for severe bleeding or pre-procedure; second-line: TPO-receptor agonists (eltrombopag, romiplostim), rituximab, splenectomy.',
    ['Platelet count weekly during steroid taper', 'Monitor for steroid side effects', 'Platelet response to TPO-RA', 'Bleeding assessment', 'Vaccinations before splenectomy (pneumococcal, meningococcal, Hib)'],
    ['Intracranial hemorrhage (rare but fatal)', 'Steroid toxicity', 'Infections post-splenectomy', 'Refractory disease', 'Thrombosis (paradoxically with TPO-RA)'],
    'Acute ITP in children: 80% spontaneous remission. Adult chronic ITP: manageable but often requires ongoing therapy; 60-70% respond to second-line agents.',
    'Avoid contact sports and aspirin/NSAIDs when counts are low. Most people with ITP live normal lives with treatment.',
  ),

  'ttp': hem(
    'ttp', 'Thrombotic Thrombocytopenic Purpura (TTP)', 'Púrpura trombocitopénica trombótica', 'platelet',
    'Life-threatening thrombotic microangiopathy caused by severe ADAMTS13 deficiency.',
    'ADAMTS13 cleaves ultra-large VWF multimers. Deficiency (autoantibodies or congenital) causes uncleaved multimers to aggregate platelets in microvasculature, leading to MAHA and organ ischemia. Classic pentad rarely all present.',
    ['Thrombocytopenia', 'Microangiopathic hemolytic anemia', 'Neurological symptoms (confusion, seizures, focal deficits)', 'Renal impairment', 'Fever'],
    ['Severe thrombocytopenia', 'Schistocytes on smear (MAHA)', 'Elevated LDH, low haptoglobin, elevated indirect bilirubin', 'ADAMTS13 activity <10%', 'Negative DAT'],
    ['CBC, peripheral smear for schistocytes', 'LDH, haptoglobin, bilirubin, reticulocyte count', 'ADAMTS13 activity and inhibitor level', 'Creatinine, urinalysis', 'PLASMIC score for pretest probability'],
    'Emergency plasma exchange (PEX) daily until platelet recovery; corticosteroids; rituximab for refractory or relapsing; caplacizumab (anti-VWF) as adjunct; DO NOT transfuse platelets (may worsen).',
    ['Daily platelet count and LDH', 'ADAMTS13 activity during and after PEX', 'Neurological status', 'Renal function', 'Long-term ADAMTS13 monitoring for relapse'],
    ['Stroke or myocardial infarction', 'Renal failure', 'Death if untreated (90% mortality)', 'Relapse (30-50% in acquired TTP)', 'Catheter-related complications from PEX'],
    'Treated TTP mortality ~10-20%; untreated ~90%. Relapse risk is significant; ADAMTS13 monitoring can detect early relapse.',
    'TTP is a medical emergency requiring plasma exchange. If you have had TTP, carry a medical alert card and report any bruising or neurological symptoms immediately.',
  ),

  'thrombocytosis': hem(
    'thrombocytosis', 'Thrombocytosis', 'Trombocitosis', 'platelet',
    'Elevated platelet count >450K; reactive (secondary) causes are far more common than primary (clonal).',
    'Reactive: cytokine-driven (IL-6, thrombopoietin) from infection, inflammation, iron deficiency, or post-splenectomy. Primary (essential thrombocythemia): JAK2, CALR, or MPL mutations cause clonal megakaryocyte proliferation.',
    ['Often asymptomatic', 'Headache, dizziness, visual changes (ET)', 'Erythromelalgia (burning extremity pain)', 'Thrombosis (arterial or venous)', 'Paradoxical bleeding with extreme counts (>1 million)'],
    ['Platelet count >450,000/mcL', 'Iron studies (rule out iron deficiency)', 'Inflammatory markers (CRP, ESR) elevated in reactive', 'JAK2 V617F, CALR, MPL mutations in ET', 'Peripheral smear: large platelets in ET'],
    ['CBC with smear', 'Iron studies', 'CRP, ESR, ferritin', 'JAK2 V617F mutation', 'Bone marrow biopsy if primary suspected (megakaryocyte morphology)'],
    'Reactive: treat underlying cause. ET: risk-stratified — low risk: observation or aspirin; high risk (age >60, prior thrombosis): hydroxyurea + aspirin; anagrelide as second-line; interferon-alfa in young patients.',
    ['CBC every 3-6 months for ET', 'Thrombosis and bleeding history', 'Cardiovascular risk factor management', 'Monitor for transformation to myelofibrosis or AML', 'Iron studies if reactive'],
    ['Thrombosis (stroke, MI, DVT, splanchnic vein)', 'Hemorrhage (acquired von Willebrand syndrome at very high counts)', 'Transformation to myelofibrosis (ET)', 'Transformation to AML (rare)', 'Microvascular symptoms'],
    'Reactive thrombocytosis: resolves with treatment of underlying cause. ET: near-normal life expectancy with treatment; low rate of leukemic transformation.',
    'Reactive thrombocytosis is usually harmless and resolves on its own. If you have essential thrombocythemia, take aspirin as directed and attend regular check-ups.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getHematologyEntry(id: string): HematologyEntry | undefined {
  return HEMATOLOGY_ENTRIES[id];
}

export function searchHematology(query: string): HematologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(HEMATOLOGY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.summary.toLowerCase().includes(q) ||
    e.subcategory.includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.labFindings.some(l => l.toLowerCase().includes(q)),
  );
}

export function getHematologyBySubcategory(sub: HematologySubcategory): HematologyEntry[] {
  return Object.values(HEMATOLOGY_ENTRIES).filter(e => e.subcategory === sub);
}

export function getHematologyCount(): number {
  return Object.keys(HEMATOLOGY_ENTRIES).length;
}
