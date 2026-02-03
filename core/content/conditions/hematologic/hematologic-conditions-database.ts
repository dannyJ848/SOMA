/**
 * Hematologic Conditions Database
 *
 * Comprehensive structured database of ~30 hematologic conditions
 * for SOMA medical education app. Covers anemias, bleeding disorders,
 * thrombotic conditions, white-cell disorders, platelet disorders,
 * transfusion medicine, hemoglobinopathies, and hematologic malignancies.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type HematologicCategory =
  | 'anemia'
  | 'bleeding'
  | 'thrombotic'
  | 'white-cell'
  | 'platelet'
  | 'transfusion'
  | 'hemoglobinopathy'
  | 'malignant';

export interface HematologicConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: HematologicCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const h = (
  id: string,
  name: string,
  nameEs: string,
  category: HematologicCategory,
  icd11: string,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): HematologicConditionEntry => ({
  id,
  name,
  nameEs,
  category,
  icd11,
  description,
  pathophysiology,
  clinicalFeatures,
  diagnostics,
  treatment,
  complications,
  patientExplanation,
  emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const HEMATOLOGIC_CONDITIONS: Record<string, HematologicConditionEntry> = {

  // ===== ANEMIA =====

  'iron-deficiency-anemia': h(
    'iron-deficiency-anemia',
    'Iron Deficiency Anemia',
    'Anemia ferropenica',
    'anemia',
    '3A00',
    'Most common cause of anemia worldwide, resulting from insufficient iron for hemoglobin synthesis.',
    'Depleted iron stores lead to impaired heme synthesis, producing microcytic hypochromic red blood cells with reduced oxygen-carrying capacity. Iron absorption occurs in the duodenum and is regulated by hepcidin.',
    ['Fatigue and exercise intolerance', 'Pallor of conjunctivae and palmar creases', 'Koilonychia (spoon nails)', 'Pica and pagophagia (ice craving)', 'Angular cheilitis and glossitis', 'Restless leg syndrome'],
    ['CBC: low Hgb, low MCV, high RDW', 'Ferritin < 30 ng/mL (< 100 in inflammatory states)', 'Low serum iron, elevated TIBC', 'Transferrin saturation < 20%', 'Peripheral smear: microcytic hypochromic cells, pencil cells', 'Reticulocyte count low'],
    ['Oral ferrous sulfate 325 mg daily with vitamin C', 'Alternate-day dosing to optimize absorption', 'IV iron (ferric carboxymaltose, iron sucrose) for malabsorption or intolerance', 'Identify and treat underlying cause', 'GI evaluation in men and postmenopausal women'],
    ['Severe symptomatic anemia requiring transfusion', 'High-output cardiac failure', 'Impaired cognitive development in children', 'Adverse pregnancy outcomes', 'Restless leg syndrome'],
    'Your body needs iron to make the part of red blood cells that carries oxygen. When iron is low, you make fewer and smaller red blood cells, causing tiredness and weakness. Treatment is iron supplements and finding why iron is low.',
    ['Hemoglobin < 7 g/dL with symptoms', 'Chest pain or dyspnea at rest', 'Tachycardia with hemodynamic instability', 'Syncope'],
  ),

  'vitamin-b12-deficiency': h(
    'vitamin-b12-deficiency',
    'Vitamin B12 Deficiency Anemia',
    'Anemia por deficiencia de vitamina B12',
    'anemia',
    '3A01',
    'Megaloblastic anemia from impaired DNA synthesis due to cobalamin deficiency, often with neurologic manifestations.',
    'B12 is a cofactor for methionine synthase and methylmalonyl-CoA mutase. Deficiency impairs thymidylate synthesis, causing megaloblastic erythropoiesis with nuclear-cytoplasmic dyssynchrony. Neurologic damage results from impaired myelin synthesis.',
    ['Fatigue, pallor, and glossitis', 'Paresthesias and peripheral neuropathy', 'Subacute combined degeneration of spinal cord', 'Cognitive impairment and dementia', 'Ataxia and loss of proprioception', 'Depression and irritability'],
    ['CBC: macrocytic anemia (MCV > 100), hypersegmented neutrophils', 'Low serum B12 (< 200 pg/mL)', 'Elevated methylmalonic acid and homocysteine', 'Anti-intrinsic factor antibodies (pernicious anemia)', 'Reticulocyte count low', 'LDH elevated, indirect bilirubin elevated (ineffective erythropoiesis)'],
    ['IM cyanocobalamin 1000 mcg daily x 7 days, then weekly x 4, then monthly', 'High-dose oral B12 (1000-2000 mcg/day) if no absorption defect', 'Treat underlying cause (pernicious anemia, dietary, malabsorption)', 'Monitor reticulocyte response at 5-7 days', 'Lifelong replacement for pernicious anemia'],
    ['Irreversible neurologic damage if untreated', 'Pancytopenia in severe cases', 'Increased cardiovascular risk from hyperhomocysteinemia', 'Hypokalemia during treatment (increased utilization)'],
    'Vitamin B12 helps your body make healthy red blood cells and keeps your nerves working. Without enough, you get large abnormal red blood cells and may develop numbness or balance problems. Treatment is B12 shots or high-dose pills.',
    ['Severe pancytopenia', 'Rapidly progressive neurologic deficits', 'Hemoglobin < 7 g/dL', 'Heart failure symptoms'],
  ),

  'folate-deficiency-anemia': h(
    'folate-deficiency-anemia',
    'Folate Deficiency Anemia',
    'Anemia por deficiencia de folato',
    'anemia',
    '3A02',
    'Megaloblastic anemia due to inadequate folate, essential for DNA synthesis and cell division.',
    'Folate (vitamin B9) is required for thymidylate synthesis and purine metabolism. Deficiency impairs DNA replication in rapidly dividing cells, producing megaloblastic changes identical to B12 deficiency but without neurologic damage.',
    ['Fatigue and weakness', 'Pallor and glossitis', 'Diarrhea', 'No neurologic symptoms (distinguishes from B12 deficiency)', 'Irritability'],
    ['CBC: macrocytic anemia, hypersegmented neutrophils', 'Low serum folate (< 3 ng/mL)', 'Low RBC folate (more reliable)', 'Normal methylmalonic acid (elevated homocysteine)', 'Normal B12 level'],
    ['Oral folic acid 1-5 mg daily', 'Dietary counseling (leafy greens, legumes, fortified grains)', 'Rule out concurrent B12 deficiency before treating', 'Address underlying cause (alcohol, malabsorption, medications)'],
    ['Neural tube defects in pregnancy', 'Pancytopenia if severe', 'Masking of concurrent B12 deficiency'],
    'Folate is a B vitamin your body needs to make new red blood cells. Low folate causes large abnormal blood cells and tiredness. It is easily treated with folic acid supplements and eating green vegetables.',
    ['Severe anemia with cardiac symptoms', 'Pancytopenia with bleeding or infection', 'Pregnancy with suspected deficiency'],
  ),

  'anemia-of-chronic-disease': h(
    'anemia-of-chronic-disease',
    'Anemia of Chronic Disease',
    'Anemia de enfermedad cronica',
    'anemia',
    '3A0Z',
    'Second most common anemia worldwide; mediated by inflammatory cytokines that impair iron utilization and erythropoietin response.',
    'Chronic inflammation elevates hepcidin via IL-6, which blocks ferroportin-mediated iron export from macrophages and enterocytes. This sequesters iron, reduces erythropoietin production, and shortens RBC survival. The result is a normocytic or mildly microcytic anemia.',
    ['Mild-to-moderate fatigue', 'Symptoms of underlying disease predominate', 'Pallor less prominent than iron deficiency', 'Usually mild anemia (Hgb 8-10 g/dL)'],
    ['CBC: normocytic or mildly microcytic anemia', 'Low serum iron, low TIBC', 'Ferritin normal or elevated', 'Transferrin saturation 15-20%', 'Elevated CRP/ESR, elevated hepcidin', 'Reticulocyte production index low'],
    ['Treat underlying inflammatory condition', 'Erythropoiesis-stimulating agents (ESAs) for CKD', 'IV iron if concurrent iron deficiency (ferritin < 100, TSAT < 20%)', 'Transfusion for severe symptomatic anemia', 'Avoid unnecessary iron supplementation'],
    ['Transfusion dependence', 'Worsened quality of life', 'Cardiovascular complications in severe cases', 'Iron overload from inappropriate treatment'],
    'When you have a long-lasting illness, inflammation tells your body to lock up iron so germs cannot use it. This means your blood cells get less iron too, causing mild anemia. The best treatment is managing the underlying illness.',
    ['Hemoglobin < 7 g/dL with symptoms', 'Rapid drop in hemoglobin suggesting additional cause', 'New cardiac symptoms'],
  ),

  'hemolytic-anemia-autoimmune': h(
    'hemolytic-anemia-autoimmune',
    'Autoimmune Hemolytic Anemia',
    'Anemia hemolitica autoinmune',
    'anemia',
    '3A20',
    'Immune-mediated destruction of red blood cells by autoantibodies, classified as warm (IgG) or cold (IgM) type.',
    'In warm AIHA, IgG antibodies bind RBCs at body temperature, causing splenic sequestration and extravascular hemolysis. In cold AIHA, IgM antibodies activate complement at low temperatures, causing intravascular hemolysis and agglutination. May be primary or secondary to lymphoma, SLE, or drugs.',
    ['Fatigue and jaundice', 'Dark urine (intravascular hemolysis)', 'Splenomegaly', 'Acrocyanosis and Raynaud phenomenon (cold type)', 'Pallor', 'Back pain during acute hemolytic crisis'],
    ['CBC: normocytic anemia with elevated reticulocytes', 'Direct antiglobulin test (DAT/Coombs) positive', 'Elevated LDH and indirect bilirubin', 'Low haptoglobin', 'Peripheral smear: spherocytes (warm) or agglutination (cold)', 'Urine hemosiderin if chronic intravascular hemolysis'],
    ['Warm AIHA: corticosteroids first-line, rituximab second-line, splenectomy', 'Cold AIHA: cold avoidance, rituximab; steroids less effective', 'Transfusion when clinically necessary (least incompatible units)', 'Treat underlying cause (lymphoma, SLE)', 'Folic acid supplementation'],
    ['Severe life-threatening anemia', 'Venous thromboembolism', 'Renal failure from hemoglobinuria', 'Evans syndrome (concurrent ITP)'],
    'Your immune system mistakenly attacks your own red blood cells, breaking them down faster than your body can replace them. This causes anemia and sometimes yellow skin. Treatment aims to calm the immune system.',
    ['Rapidly dropping hemoglobin', 'Hemoglobin < 6 g/dL', 'Signs of cardiovascular collapse', 'Dark brown/red urine with acute back pain'],
  ),

  'aplastic-anemia': h(
    'aplastic-anemia',
    'Aplastic Anemia',
    'Anemia aplasica',
    'anemia',
    '3A70',
    'Bone marrow failure syndrome with pancytopenia due to destruction or suppression of hematopoietic stem cells.',
    'Immune-mediated (T-cell) attack on hematopoietic stem cells is the most common mechanism. Activated cytotoxic T lymphocytes release IFN-gamma and TNF-alpha, inducing stem cell apoptosis. Can also result from direct toxicity (benzene, radiation, drugs) or inherited syndromes (Fanconi anemia).',
    ['Fatigue and pallor (anemia)', 'Recurrent infections and fever (neutropenia)', 'Bleeding, petechiae, and bruising (thrombocytopenia)', 'No hepatosplenomegaly or lymphadenopathy'],
    ['CBC: pancytopenia with low reticulocytes', 'Bone marrow biopsy: hypocellular (< 25%) with fat replacement', 'Flow cytometry to exclude PNH clone, MDS', 'Chromosome breakage analysis if young (Fanconi anemia)', 'Hepatitis serologies, HIV', 'Telomere length if inherited syndrome suspected'],
    ['Severe: allogeneic hematopoietic stem cell transplant (age < 40 with matched donor)', 'Immunosuppressive therapy: horse ATG + cyclosporine + eltrombopag', 'Supportive: transfusions, antibiotics, antifungals', 'Avoid NSAIDs and unnecessary medications', 'Growth factors in selected cases'],
    ['Life-threatening infection', 'Fatal hemorrhage', 'Clonal evolution to MDS or AML', 'Iron overload from chronic transfusions', 'Graft-versus-host disease post-transplant'],
    'Your bone marrow, which makes blood cells, stops working properly. This means you have too few red cells, white cells, and platelets, causing tiredness, infections, and bleeding. Treatment may include medicines to reset the immune system or a bone marrow transplant.',
    ['Neutrophil count < 200/mcL with fever', 'Active uncontrolled bleeding', 'Platelet count < 10,000/mcL', 'Hemoglobin < 7 g/dL with cardiac symptoms'],
  ),

  // ===== BLEEDING DISORDERS =====

  'hemophilia-a': h(
    'hemophilia-a',
    'Hemophilia A',
    'Hemofilia A',
    'bleeding',
    '3B10',
    'X-linked recessive bleeding disorder caused by deficiency of coagulation factor VIII.',
    'Factor VIII is a cofactor for factor IXa in the intrinsic tenase complex, essential for amplifying thrombin generation. Deficiency results in impaired fibrin clot formation. Severity correlates with factor level: severe (< 1%), moderate (1-5%), mild (5-40%).',
    ['Hemarthrosis (bleeding into joints)', 'Deep muscle hematomas', 'Prolonged bleeding after surgery or trauma', 'Easy bruising', 'Intracranial hemorrhage (most feared)', 'Excessive bleeding from circumcision (neonatal presentation)'],
    ['Prolonged aPTT with normal PT and bleeding time', 'Low factor VIII activity level', 'Normal von Willebrand factor levels', 'Mixing study corrects aPTT (unless inhibitor present)', 'Genetic testing for F8 gene mutations', 'Bethesda assay if inhibitor suspected'],
    ['On-demand factor VIII replacement for bleeds', 'Prophylactic factor VIII (severe: 3x/week or extended half-life products)', 'Emicizumab (bispecific antibody mimicking factor VIII)', 'Desmopressin (DDAVP) for mild hemophilia A', 'Antifibrinolytics (aminocaproic acid, tranexamic acid) for mucosal bleeds', 'Gene therapy (valoctocogene roxaparvovec)'],
    ['Chronic hemophilic arthropathy', 'Development of factor VIII inhibitors (30%)', 'Compartment syndrome from muscle bleeds', 'Pseudotumor formation', 'Intracranial hemorrhage'],
    'Hemophilia A means your blood is missing a protein (factor VIII) needed for clotting. This causes joints and muscles to bleed easily. Treatment replaces the missing clotting factor through infusions or newer medicines.',
    ['Head injury or headache with neurologic changes', 'Throat or neck swelling (airway compromise)', 'Suspected compartment syndrome', 'Uncontrolled hemorrhage', 'Hemoglobin drop > 2 g/dL acutely'],
  ),

  'hemophilia-b': h(
    'hemophilia-b',
    'Hemophilia B',
    'Hemofilia B',
    'bleeding',
    '3B11',
    'X-linked recessive bleeding disorder caused by deficiency of coagulation factor IX (Christmas disease).',
    'Factor IX is activated by factor XIa or tissue factor/VIIa complex and is essential for intrinsic pathway amplification. When activated, factor IXa complexes with factor VIIIa to activate factor X. Deficiency produces clinical bleeding identical to hemophilia A.',
    ['Hemarthrosis and deep muscle bleeds', 'Prolonged surgical bleeding', 'Easy bruising', 'Clinically indistinguishable from hemophilia A', 'May present later than hemophilia A if moderate/mild'],
    ['Prolonged aPTT with normal PT', 'Low factor IX activity level', 'Normal factor VIII level', 'Mixing study corrects aPTT', 'Genetic testing for F9 gene mutations'],
    ['Factor IX replacement (recombinant or plasma-derived)', 'Extended half-life factor IX products (eftrenonacog alfa)', 'Prophylaxis for severe disease', 'Gene therapy (etranacogene dezaparvovec)', 'Antifibrinolytics as adjunct', 'DDAVP is NOT effective (unlike hemophilia A)'],
    ['Chronic arthropathy', 'Factor IX inhibitor development (< 5%, lower than hemophilia A)', 'Anaphylaxis to factor IX concentrates (associated with large deletions)', 'Intracranial hemorrhage'],
    'Hemophilia B is very similar to hemophilia A but involves a different missing clotting protein (factor IX). It causes the same type of joint and muscle bleeding and is treated with factor IX replacement.',
    ['Head trauma or neurologic symptoms', 'Airway-threatening bleed', 'Suspected compartment syndrome', 'Heavy uncontrolled bleeding'],
  ),

  'von-willebrand-disease': h(
    'von-willebrand-disease',
    'Von Willebrand Disease',
    'Enfermedad de von Willebrand',
    'bleeding',
    '3B00',
    'Most common inherited bleeding disorder, caused by quantitative or qualitative defects in von Willebrand factor (VWF).',
    'VWF mediates platelet adhesion to injured endothelium and carries/stabilizes factor VIII. Type 1 (80%): partial quantitative deficiency. Type 2: qualitative defects (subtypes 2A, 2B, 2M, 2N). Type 3: near-complete absence of VWF with severe bleeding.',
    ['Mucocutaneous bleeding (epistaxis, menorrhagia, gingival bleeding)', 'Easy bruising', 'Prolonged bleeding after dental procedures or surgery', 'Postpartum hemorrhage', 'GI bleeding from angiodysplasia (type 2/3)', 'Joint bleeding rare (only severe type 3)'],
    ['VWF antigen level', 'VWF activity (ristocetin cofactor)', 'Factor VIII activity level', 'VWF multimer analysis for type 2 subtyping', 'Platelet function analyzer (PFA-100) prolonged', 'Bleeding assessment tool (BAT) score'],
    ['Desmopressin (DDAVP): first-line for type 1 and some type 2', 'VWF-containing concentrates (Humate-P) for severe bleeding or DDAVP non-responders', 'Antifibrinolytics for mucosal bleeds', 'Hormonal therapy for menorrhagia', 'Avoid aspirin and NSAIDs', 'DDAVP trial to assess response before elective procedures'],
    ['Severe hemorrhage in type 3', 'Iron deficiency from chronic blood loss', 'Postpartum hemorrhage', 'Acquired VWD (associated with aortic stenosis, LVAD, lymphoproliferative disorders)'],
    'Von Willebrand disease means you are missing or have a defective sticky protein that helps platelets plug wounds. It causes nosebleeds, heavy periods, and easy bruising. Many people have mild forms that only need treatment before surgery.',
    ['Uncontrolled hemorrhage', 'Postpartum hemorrhage', 'GI bleeding with hemodynamic instability', 'Suspected intracranial bleed'],
  ),

  'disseminated-intravascular-coagulation': h(
    'disseminated-intravascular-coagulation',
    'Disseminated Intravascular Coagulation',
    'Coagulacion intravascular diseminada',
    'bleeding',
    '3B30',
    'Pathologic activation of coagulation causing simultaneous thrombosis and hemorrhage, always secondary to an underlying condition.',
    'Massive tissue factor exposure triggers widespread thrombin generation, forming microthrombi in small vessels and consuming platelets and clotting factors. Concurrent fibrinolysis generates D-dimer and fibrin degradation products. The net result is paradoxical bleeding due to consumption coagulopathy and organ damage from microvascular thrombosis.',
    ['Bleeding from multiple sites (IV lines, wounds, mucosal)', 'Petechiae and purpura', 'Purpura fulminans', 'End-organ damage (renal failure, ARDS, hepatic dysfunction)', 'Acral cyanosis and gangrene'],
    ['Prolonged PT and aPTT', 'Low fibrinogen (< 150 mg/dL)', 'Elevated D-dimer and FDP', 'Thrombocytopenia', 'Peripheral smear: schistocytes (microangiopathic hemolytic anemia)', 'ISTH DIC scoring system'],
    ['Treat underlying cause (antibiotics for sepsis, delivery for obstetric DIC)', 'Replacement therapy if actively bleeding: FFP, cryoprecipitate, platelet transfusion', 'Heparin may be considered in predominantly thrombotic DIC', 'Antithrombin concentrates in selected cases', 'Avoid IM injections and invasive procedures'],
    ['Multi-organ failure', 'Fatal hemorrhage', 'Limb gangrene requiring amputation', 'ARDS', 'Death (high mortality depending on underlying cause)'],
    'DIC is a serious complication where your clotting system goes into overdrive, forming tiny clots everywhere while also causing bleeding because clotting factors get used up. The key is treating the underlying cause, like infection.',
    ['Active life-threatening bleeding', 'Signs of organ failure', 'Purpura fulminans', 'Hemodynamic instability', 'Rapidly worsening lab values'],
  ),

  // ===== THROMBOTIC DISORDERS =====

  'deep-vein-thrombosis': h(
    'deep-vein-thrombosis',
    'Deep Vein Thrombosis',
    'Trombosis venosa profunda',
    'thrombotic',
    'BD80',
    'Formation of a blood clot in a deep vein, most commonly in the lower extremities, with risk of pulmonary embolism.',
    'Virchow triad (stasis, endothelial injury, hypercoagulability) drives thrombus formation. Venous stasis allows accumulation of activated clotting factors. Clot propagation occurs via the coagulation cascade, forming a fibrin-rich red thrombus that may embolize to the pulmonary vasculature.',
    ['Unilateral leg swelling and edema', 'Calf pain and tenderness', 'Warmth and erythema of affected limb', 'Palpable cord along vein', 'Homan sign (unreliable)', 'May be asymptomatic'],
    ['Wells score for pre-test probability', 'D-dimer (high sensitivity, low specificity)', 'Compression ultrasonography (first-line imaging)', 'CT venography if ultrasound inconclusive', 'MR venography for pelvic/IVC thrombosis', 'Thrombophilia workup if unprovoked or recurrent'],
    ['Anticoagulation: DOAC (rivaroxaban, apixaban) preferred first-line', 'LMWH bridge to warfarin (alternative)', 'Duration: 3 months (provoked), indefinite (unprovoked recurrent)', 'IVC filter if anticoagulation contraindicated', 'Catheter-directed thrombolysis for massive iliofemoral DVT', 'Compression stockings for symptom relief'],
    ['Pulmonary embolism', 'Post-thrombotic syndrome (chronic leg swelling, pain, ulcers)', 'Recurrent VTE', 'Phlegmasia cerulea dolens (limb-threatening)', 'Chronic thromboembolic pulmonary hypertension'],
    'A blood clot forms in a deep leg vein, causing swelling and pain. The main danger is the clot traveling to your lungs. Treatment is blood-thinning medication for several months to prevent growth and recurrence.',
    ['Chest pain or sudden dyspnea (suspect PE)', 'Phlegmasia (severely swollen, blue, painful limb)', 'Signs of hemodynamic compromise', 'Bilateral DVT (consider IVC thrombosis)'],
  ),

  'pulmonary-embolism': h(
    'pulmonary-embolism',
    'Pulmonary Embolism',
    'Embolia pulmonar',
    'thrombotic',
    'BB00',
    'Obstruction of pulmonary arteries by thrombus, most commonly embolized from deep veins, causing ventilation-perfusion mismatch and potentially right heart failure.',
    'Embolized thrombus lodges in pulmonary vasculature, increasing pulmonary vascular resistance. Large clot burden causes acute right ventricular pressure overload, RV dilation, interventricular septum bowing, and decreased left ventricular output. Dead space ventilation increases, causing hypoxemia.',
    ['Acute dyspnea and pleuritic chest pain', 'Tachycardia and tachypnea', 'Hemoptysis', 'Syncope (suggests massive PE)', 'Hypotension and shock (massive PE)', 'Unilateral leg swelling (concurrent DVT)'],
    ['Wells score or Geneva score for risk stratification', 'D-dimer to exclude low-probability PE', 'CT pulmonary angiography (gold standard)', 'Echocardiography: RV dilation and dysfunction', 'Troponin and BNP for risk stratification', 'V/Q scan if CT contraindicated'],
    ['Anticoagulation: heparin bridge or DOAC', 'Systemic thrombolysis (alteplase) for massive PE with hemodynamic instability', 'Catheter-directed therapy for submassive PE', 'Surgical embolectomy in refractory cases', 'IVC filter if anticoagulation contraindicated', 'Hemodynamic support with fluids and vasopressors'],
    ['Death (massive PE mortality 25-50%)', 'Chronic thromboembolic pulmonary hypertension', 'Right heart failure', 'Recurrent PE', 'Post-PE syndrome (persistent dyspnea)'],
    'A blood clot travels to your lungs and blocks blood flow. This makes breathing difficult and strains the heart. Small clots are treated with blood thinners; large life-threatening clots may need clot-dissolving medicines.',
    ['Hypotension or shock', 'Syncope', 'Severe hypoxemia refractory to supplemental oxygen', 'Signs of right heart failure', 'Cardiac arrest with suspected PE'],
  ),

  'heparin-induced-thrombocytopenia': h(
    'heparin-induced-thrombocytopenia',
    'Heparin-Induced Thrombocytopenia',
    'Trombocitopenia inducida por heparina',
    'thrombotic',
    '3B64.0',
    'Prothrombotic disorder caused by antibodies against platelet factor 4-heparin complexes, paradoxically increasing thrombosis risk despite low platelets.',
    'Heparin binds platelet factor 4 (PF4), creating a neoantigen. IgG antibodies against this complex activate platelets via Fc receptors, causing massive platelet aggregation, thrombin generation, and both arterial and venous thrombosis. Platelet consumption causes thrombocytopenia.',
    ['Platelet count drop > 50% from baseline, typically day 5-10 of heparin', 'Venous thrombosis (DVT, PE) more common', 'Arterial thrombosis (stroke, limb ischemia)', 'Skin necrosis at heparin injection sites', 'Adrenal hemorrhagic infarction (rare)'],
    ['4Ts scoring system (Thrombocytopenia, Timing, Thrombosis, oTher causes)', 'PF4-heparin ELISA (high sensitivity)', 'Serotonin release assay (gold standard, high specificity)', 'Platelet count monitoring on heparin', 'Imaging for thrombosis if suspected'],
    ['Immediately stop ALL heparin products (including flushes, coated catheters)', 'Start alternative non-heparin anticoagulant (argatroban, bivalirudin, fondaparinux)', 'Do NOT give warfarin until platelets recover (risk of venous limb gangrene)', 'Do NOT transfuse platelets (fuels thrombosis)', 'Transition to warfarin with adequate overlap once platelets > 150,000'],
    ['Limb-threatening arterial thrombosis', 'Massive pulmonary embolism', 'Stroke', 'Venous limb gangrene (if warfarin given early)', 'Adrenal crisis from hemorrhagic infarction', 'Death'],
    'Some people develop antibodies when given heparin (a blood thinner) that actually cause dangerous blood clots instead of preventing them. Treatment is stopping heparin immediately and switching to a different blood thinner.',
    ['New thrombosis while on heparin', 'Rapidly falling platelet count on heparin', 'Limb-threatening ischemia', 'Skin necrosis at injection site'],
  ),

  'antiphospholipid-syndrome': h(
    'antiphospholipid-syndrome',
    'Antiphospholipid Syndrome',
    'Sindrome antifosfolipido',
    'thrombotic',
    '4A44.5',
    'Autoimmune thrombophilia characterized by antiphospholipid antibodies causing venous/arterial thrombosis and pregnancy complications.',
    'Antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-beta2 glycoprotein I) activate endothelial cells, platelets, and complement, creating a prothrombotic state. They interfere with natural anticoagulants (protein C, annexin A5) and activate tissue factor. Despite prolonging aPTT in vitro, they are prothrombotic in vivo.',
    ['Venous thrombosis (DVT, PE, cerebral venous sinus)', 'Arterial thrombosis (stroke, MI in young patients)', 'Recurrent pregnancy loss (especially second/third trimester)', 'Livedo reticularis', 'Thrombocytopenia (mild)', 'Valvular heart disease (Libman-Sacks endocarditis)'],
    ['Lupus anticoagulant (DRVVT or aPTT-based)', 'Anticardiolipin antibodies (IgG and IgM)', 'Anti-beta2 glycoprotein I antibodies (IgG and IgM)', 'Must be positive on two occasions 12 weeks apart', 'Revised Sapporo classification criteria', 'Evaluate for SLE and other autoimmune diseases'],
    ['Anticoagulation with warfarin (target INR 2-3) for thrombosis', 'DOACs not recommended (TRAPS trial showed inferior outcomes)', 'Low-dose aspirin + heparin for obstetric APS', 'Hydroxychloroquine as adjunct', 'Catastrophic APS: anticoagulation + steroids + plasma exchange + IVIG', 'Lifelong anticoagulation if thrombotic event'],
    ['Catastrophic APS (multi-organ thrombosis, 50% mortality)', 'Recurrent thrombosis', 'Stroke in young patients', 'Pregnancy loss', 'Valvular disease requiring surgery'],
    'Your immune system makes antibodies that cause your blood to clot too easily, leading to clots in veins or arteries and pregnancy complications. Treatment is long-term blood thinning with warfarin and sometimes aspirin.',
    ['Signs of stroke or MI in young patient', 'Multi-organ failure (catastrophic APS)', 'Pregnancy complications with known APS', 'New thrombosis despite anticoagulation'],
  ),

  // ===== WHITE CELL DISORDERS =====

  'neutropenia': h(
    'neutropenia',
    'Neutropenia',
    'Neutropenia',
    'white-cell',
    '4B00',
    'Absolute neutrophil count < 1500/mcL, with infection risk increasing substantially below 500/mcL (severe) and critically below 100/mcL.',
    'Neutropenia arises from decreased production (marrow failure, drug toxicity, nutritional deficiency), increased destruction (autoimmune, immune-mediated), or margination/sequestration (hypersplenism). Chemotherapy-induced neutropenia is the most common cause in clinical practice. The nadir typically occurs 7-14 days post-chemotherapy.',
    ['Often asymptomatic until infection develops', 'Fever (may be only sign of infection)', 'Oral ulcers and gingivitis', 'Skin infections and cellulitis', 'Perianal infections', 'Absence of pus formation at infection sites'],
    ['CBC with differential: ANC < 1500/mcL', 'Blood cultures (x2 sets before antibiotics)', 'Peripheral smear for morphology', 'Bone marrow biopsy if persistent or unexplained', 'Drug history review', 'ANA, anti-neutrophil antibodies if autoimmune suspected'],
    ['Febrile neutropenia: immediate broad-spectrum antibiotics (piperacillin-tazobactam, cefepime, or meropenem)', 'G-CSF (filgrastim, pegfilgrastim) for chemotherapy-induced neutropenia', 'Prophylactic fluoroquinolone if high-risk prolonged neutropenia', 'Antifungal coverage if fever persists > 4-7 days', 'Treat underlying cause', 'Neutropenic precautions (hand hygiene, avoid sick contacts, cooked food)'],
    ['Life-threatening sepsis', 'Invasive fungal infections (Aspergillus, Candida)', 'Necrotizing soft tissue infections', 'Typhlitis (neutropenic enterocolitis)', 'Death from overwhelming infection'],
    'Neutrophils are white blood cells that fight bacterial infections. When they are very low, you are at high risk for serious infections. Fever with low neutrophils is a medical emergency that needs immediate antibiotics.',
    ['Fever > 38.3C or sustained > 38.0C with ANC < 500', 'Signs of sepsis (hypotension, altered mental status)', 'Perianal pain or swelling', 'Rigors or hemodynamic instability'],
  ),

  'chronic-lymphocytic-leukemia': h(
    'chronic-lymphocytic-leukemia',
    'Chronic Lymphocytic Leukemia',
    'Leucemia linfocitica cronica',
    'white-cell',
    '2A80.1',
    'Most common adult leukemia in Western countries, characterized by progressive accumulation of mature but functionally incompetent lymphocytes.',
    'Malignant transformation of a mature B-cell clone leads to accumulation of small, mature-appearing lymphocytes that are resistant to apoptosis due to BCL-2 overexpression. These cells accumulate in blood, bone marrow, lymph nodes, and spleen, causing immune dysfunction. Key molecular features include del(13q), trisomy 12, del(11q), del(17p), and TP53 mutations.',
    ['Often discovered incidentally on routine CBC', 'Painless lymphadenopathy', 'Fatigue and malaise', 'Splenomegaly', 'Recurrent infections (hypogammaglobulinemia)', 'B-symptoms: fever, night sweats, weight loss (advanced)'],
    ['CBC: lymphocytosis > 5000/mcL sustained > 3 months', 'Peripheral smear: small mature lymphocytes, smudge cells', 'Flow cytometry: CD5+, CD19+, CD23+, dim CD20, dim surface Ig', 'FISH for del(13q), trisomy 12, del(11q), del(17p)', 'IGHV mutation status', 'Beta-2 microglobulin, LDH for prognosis'],
    ['Watch and wait for early-stage asymptomatic disease', 'BTK inhibitors (ibrutinib, acalabrutinib) for symptomatic/advanced', 'BCL-2 inhibitor (venetoclax) + anti-CD20 (obinutuzumab)', 'Rituximab-based chemoimmunotherapy (less used now)', 'IVIG for recurrent infections with hypogammaglobulinemia', 'Allogeneic transplant for high-risk refractory disease'],
    ['Richter transformation to DLBCL (5-10%)', 'Autoimmune cytopenias (AIHA, ITP)', 'Hypogammaglobulinemia and recurrent infections', 'Secondary malignancies', 'Tumor lysis syndrome with treatment'],
    'CLL is a slow-growing blood cancer where the body makes too many abnormal white blood cells. Many people live years without needing treatment. When treatment is needed, newer targeted pills are very effective.',
    ['Richter transformation (rapidly enlarging lymph node, B-symptoms)', 'Severe autoimmune hemolysis', 'Life-threatening infection', 'Tumor lysis syndrome during treatment'],
  ),

  'mononucleosis': h(
    'mononucleosis',
    'Infectious Mononucleosis',
    'Mononucleosis infecciosa',
    'white-cell',
    '1E90',
    'Acute EBV infection causing lymphocytosis with atypical lymphocytes, pharyngitis, lymphadenopathy, and hepatosplenomegaly.',
    'EBV infects B lymphocytes via CD21 receptor in oropharyngeal epithelium. Infected B cells proliferate, triggering a robust cytotoxic T-cell response that produces the characteristic atypical lymphocytosis. These reactive T cells are the "atypical lymphocytes" seen on smear. EBV then establishes lifelong latency in memory B cells.',
    ['Severe pharyngitis with tonsillar exudates', 'Posterior cervical and diffuse lymphadenopathy', 'Fever and profound fatigue', 'Splenomegaly (50-60%)', 'Hepatomegaly and mild hepatitis', 'Maculopapular rash if given amoxicillin/ampicillin'],
    ['CBC: lymphocytosis with > 10% atypical lymphocytes', 'Heterophile antibody test (Monospot)', 'EBV-specific antibodies (VCA IgM/IgG, EBNA) if Monospot negative', 'Mildly elevated transaminases', 'Peripheral smear: large reactive (atypical) lymphocytes'],
    ['Supportive care: rest, hydration, analgesics', 'Avoid contact sports for 3-4 weeks (splenic rupture risk)', 'Short course of corticosteroids ONLY for airway obstruction or severe complications', 'Avoid ampicillin/amoxicillin (rash risk)', 'Return to activity based on clinical recovery and spleen size'],
    ['Splenic rupture (rare but life-threatening)', 'Airway obstruction from tonsillar hypertrophy', 'Hepatitis', 'Hemolytic anemia (cold agglutinins)', 'Thrombocytopenia', 'Guillain-Barre syndrome (rare)'],
    'Mono is caused by the Epstein-Barr virus, spread through saliva. It causes severe sore throat, swollen glands, fatigue, and an enlarged spleen. Most people recover in a few weeks with rest, but you must avoid contact sports to protect your spleen.',
    ['Sudden severe left upper quadrant or left shoulder pain (splenic rupture)', 'Difficulty breathing or swallowing (airway compromise)', 'Signs of severe dehydration', 'Neurologic symptoms'],
  ),

  // ===== PLATELET DISORDERS =====

  'immune-thrombocytopenia': h(
    'immune-thrombocytopenia',
    'Immune Thrombocytopenic Purpura',
    'Purpura trombocitopenica inmune',
    'platelet',
    '3B61',
    'Autoimmune destruction of platelets by anti-platelet antibodies, causing isolated thrombocytopenia with mucocutaneous bleeding.',
    'IgG autoantibodies (primarily anti-GPIIb/IIIa) opsonize platelets, leading to Fc-receptor-mediated phagocytosis by splenic macrophages. Additionally, autoantibodies impair megakaryopoiesis, reducing platelet production. In children, often follows a viral infection and is self-limited; in adults, tends to be chronic.',
    ['Petechiae and purpura', 'Mucosal bleeding (epistaxis, gingival, menorrhagia)', 'Easy bruising', 'Rarely: intracranial hemorrhage (< 1%)', 'No splenomegaly (presence suggests other diagnosis)', 'Often discovered incidentally'],
    ['CBC: isolated thrombocytopenia (normal WBC and Hgb)', 'Peripheral smear: large platelets, no schistocytes', 'Diagnosis of exclusion (rule out pseudothrombocytopenia, DIC, TTP, MDS)', 'HIV, HCV, H. pylori testing', 'Bone marrow biopsy in atypical cases or age > 60', 'Direct platelet antibody testing has low sensitivity'],
    ['Observation if platelets > 30,000 and no bleeding', 'First-line: corticosteroids (prednisone 1 mg/kg or dexamethasone pulses)', 'IVIG for rapid platelet increase (pre-procedure or severe bleeding)', 'Second-line: rituximab, TPO-receptor agonists (eltrombopag, romiplostim)', 'Splenectomy for refractory disease', 'Fostamatinib (Syk inhibitor) for refractory ITP'],
    ['Life-threatening hemorrhage (intracranial, GI)', 'Chronic ITP with bleeding and treatment side effects', 'Thrombosis (paradoxically increased in ITP)', 'Steroid side effects from chronic use', 'Infection risk post-splenectomy'],
    'Your immune system mistakenly destroys your own platelets, the blood cells that form clots. This causes bruising and bleeding. Many cases are mild. Treatment ranges from observation to steroids to medicines that boost platelet production.',
    ['Platelets < 10,000 with active bleeding', 'Suspected intracranial hemorrhage (severe headache, neurologic changes)', 'Heavy GI or genitourinary bleeding', 'Need for emergency surgery'],
  ),

  'thrombotic-thrombocytopenic-purpura': h(
    'thrombotic-thrombocytopenic-purpura',
    'Thrombotic Thrombocytopenic Purpura',
    'Purpura trombocitopenica trombotica',
    'platelet',
    '3B64.1',
    'Life-threatening thrombotic microangiopathy caused by severe ADAMTS13 deficiency, leading to widespread platelet-rich microthrombi.',
    'ADAMTS13 is a metalloprotease that cleaves ultra-large VWF multimers. Severe deficiency (< 10% activity), usually from autoantibodies, allows ultra-large VWF multimers to persist, causing spontaneous platelet aggregation and microthrombi in arterioles. This produces microangiopathic hemolytic anemia and consumptive thrombocytopenia with organ ischemia.',
    ['Microangiopathic hemolytic anemia (MAHA)', 'Severe thrombocytopenia', 'Neurologic symptoms (confusion, seizures, focal deficits)', 'Renal impairment (usually mild)', 'Fever', 'Classic pentad rare; MAHA + thrombocytopenia sufficient to suspect'],
    ['CBC: severe thrombocytopenia, anemia', 'Peripheral smear: schistocytes (mandatory)', 'Elevated LDH, indirect bilirubin, low haptoglobin', 'ADAMTS13 activity < 10% (send before treatment but do not delay treatment)', 'ADAMTS13 inhibitor and anti-ADAMTS13 antibodies', 'Direct Coombs negative', 'Normal coagulation studies (PT, aPTT, fibrinogen)'],
    ['Emergency therapeutic plasma exchange (TPE) daily', 'Corticosteroids (methylprednisolone 1 g/day x 3)', 'Rituximab for refractory or relapsing disease', 'Caplacizumab (anti-VWF nanobody) to reduce time to platelet normalization', 'DO NOT transfuse platelets (worsens microthrombosis)', 'Do NOT delay TPE for ADAMTS13 results'],
    ['Stroke and permanent neurologic damage', 'Myocardial infarction', 'Renal failure', 'Relapse (30-50% with acquired TTP)', 'Death if untreated (90% mortality)', 'Exacerbation from platelet transfusion'],
    'TTP is a rare emergency where tiny blood clots form throughout your body, using up platelets and shredding red blood cells. Without urgent treatment (plasma exchange), it is usually fatal. With treatment, most people survive.',
    ['Any suspicion of TTP (schistocytes + thrombocytopenia)', 'Neurologic changes', 'Hemodynamic instability', 'Worsening MAHA despite treatment', 'This is ALWAYS an emergency'],
  ),

  'essential-thrombocythemia': h(
    'essential-thrombocythemia',
    'Essential Thrombocythemia',
    'Trombocitemia esencial',
    'platelet',
    '2A20.1',
    'Myeloproliferative neoplasm characterized by sustained thrombocytosis with risk of both thrombosis and bleeding.',
    'Clonal proliferation of megakaryocytes driven by mutations in JAK2 (60%), CALR (25%), or MPL (5%). Excess platelets are variably functional: moderate thrombocytosis promotes thrombosis, while extreme thrombocytosis (> 1,000,000) may cause acquired von Willebrand disease from VWF multimer adsorption, leading to paradoxical bleeding.',
    ['Often incidentally discovered thrombocytosis', 'Headache, visual disturbances, erythromelalgia', 'Thrombosis (arterial or venous)', 'Mucocutaneous bleeding (with very high counts)', 'Splenomegaly (mild)', 'Vasomotor symptoms'],
    ['CBC: platelets persistently > 450,000/mcL', 'JAK2 V617F mutation testing', 'CALR and MPL mutation testing', 'Bone marrow biopsy: megakaryocytic hyperplasia, large hyperlobated megakaryocytes', 'Iron studies, CRP (exclude reactive thrombocytosis)', 'BCR-ABL negative (exclude CML)'],
    ['Low-risk (age < 60, no thrombosis history): low-dose aspirin', 'High-risk: cytoreductive therapy (hydroxyurea first-line) + aspirin', 'Anagrelide as second-line', 'Interferon-alpha (preferred in young patients and pregnancy)', 'Aspirin held if platelets > 1,000,000 with acquired VWD', 'Avoid iron deficiency (can mask reactive thrombocytosis)'],
    ['Arterial or venous thrombosis', 'Hemorrhage (especially with extreme thrombocytosis)', 'Transformation to myelofibrosis (10-15% at 15 years)', 'Transformation to AML (< 5%)', 'Acquired von Willebrand disease'],
    'Your bone marrow makes too many platelets due to a genetic change in blood stem cells. This can cause blood clots or, paradoxically, bleeding. Treatment with low-dose aspirin and sometimes medication to lower platelet counts reduces these risks.',
    ['Acute stroke or MI', 'Severe hemorrhage', 'Platelet count > 1,500,000 with bleeding', 'Acute limb ischemia'],
  ),

  // ===== HEMOGLOBINOPATHIES =====

  'sickle-cell-disease': h(
    'sickle-cell-disease',
    'Sickle Cell Disease',
    'Enfermedad de celulas falciformes',
    'hemoglobinopathy',
    '3A51',
    'Inherited hemoglobinopathy caused by HbS, producing rigid sickle-shaped RBCs that cause vaso-occlusion, chronic hemolysis, and progressive organ damage.',
    'A point mutation (Glu6Val) in the beta-globin gene produces hemoglobin S, which polymerizes when deoxygenated, distorting RBCs into rigid sickle shapes. These cells obstruct microvasculature (vaso-occlusion), causing tissue ischemia. Chronic hemolysis depletes nitric oxide, causing endothelial dysfunction. Repeated splenic infarction causes functional asplenia by age 5.',
    ['Acute pain crises (vaso-occlusive)', 'Chronic hemolytic anemia', 'Acute chest syndrome (chest pain, fever, pulmonary infiltrate)', 'Stroke (children)', 'Splenic sequestration (children)', 'Dactylitis (hand-foot syndrome in infants)', 'Avascular necrosis of femoral head', 'Priapism', 'Leg ulcers'],
    ['Hemoglobin electrophoresis: HbS predominant', 'Newborn screening (mandatory in most US states)', 'CBC: Hgb 6-9 g/dL, reticulocytosis', 'Peripheral smear: sickle cells, target cells, Howell-Jolly bodies', 'Elevated LDH, indirect bilirubin, low haptoglobin', 'Transcranial Doppler (stroke screening in children)'],
    ['Hydroxyurea (increases HbF, reduces crises)', 'L-glutamine, voxelotor, crizanlizumab as adjuncts', 'Pain management for vaso-occlusive crises (IV opioids, NSAIDs, hydration)', 'Chronic transfusion program for stroke prevention', 'Allogeneic hematopoietic stem cell transplant (curative)', 'Gene therapy (lovotibeglogene autotemcel)', 'Penicillin prophylaxis and vaccinations (asplenia)', 'Folic acid supplementation'],
    ['Acute chest syndrome (leading cause of death)', 'Stroke', 'Pulmonary hypertension', 'Chronic kidney disease', 'Avascular necrosis', 'Iron overload from transfusions', 'Functional asplenia with infection risk'],
    'Sickle cell disease changes the shape of red blood cells from round to sickle-shaped, blocking blood flow and causing pain episodes. Treatments like hydroxyurea reduce crises, and newer gene therapies offer potential cures.',
    ['Acute chest syndrome (fever + chest pain + new infiltrate)', 'Stroke symptoms', 'Splenic sequestration (rapidly enlarging spleen, falling Hgb)', 'Fever > 38.5C (risk of overwhelming sepsis)', 'Priapism > 4 hours', 'Aplastic crisis (parvovirus B19)'],
  ),

  'thalassemia': h(
    'thalassemia',
    'Thalassemia',
    'Talasemia',
    'hemoglobinopathy',
    '3A50',
    'Group of inherited anemias caused by reduced or absent synthesis of alpha or beta globin chains, leading to ineffective erythropoiesis and hemolysis.',
    'Imbalanced globin chain synthesis causes unpaired chains to precipitate, damaging RBC membranes and causing premature destruction (ineffective erythropoiesis in marrow and peripheral hemolysis). Alpha-thalassemia results from gene deletions (1-4 alpha genes affected). Beta-thalassemia results from point mutations reducing (beta+) or abolishing (beta0) beta-globin production.',
    ['Beta-thal major: severe anemia presenting at 6-12 months of age', 'Failure to thrive and growth retardation', 'Hepatosplenomegaly and extramedullary hematopoiesis', 'Skeletal deformities (frontal bossing, chipmunk facies)', 'Beta-thal minor: mild microcytic anemia, often asymptomatic', 'Alpha-thal trait: mild microcytic anemia', 'HbH disease: moderate hemolytic anemia', 'Hydrops fetalis (4-gene deletion alpha-thal): fatal in utero'],
    ['CBC: microcytic anemia with low MCV disproportionate to anemia', 'Hemoglobin electrophoresis (elevated HbA2 in beta-thal trait, HbF in beta-thal major)', 'Peripheral smear: target cells, basophilic stippling, nucleated RBCs', 'Iron studies: normal or elevated (distinguish from iron deficiency)', 'Genetic testing for alpha-globin deletions', 'Mentzer index < 13 suggests thalassemia over iron deficiency'],
    ['Beta-thal major: chronic transfusion program (target Hgb > 9-10)', 'Iron chelation (deferasirox, deferoxamine, deferiprone)', 'Luspatercept for transfusion-dependent beta-thalassemia', 'Allogeneic HSCT (curative)', 'Gene therapy (betibeglogene autotemcel)', 'Folic acid supplementation', 'Beta-thal minor/alpha-trait: usually no treatment; genetic counseling'],
    ['Iron overload (cardiac, hepatic, endocrine)', 'Cardiomyopathy (leading cause of death in thal major)', 'Endocrine dysfunction (diabetes, hypogonadism, hypothyroidism)', 'Osteoporosis', 'Hepatitis from transfusions', 'Alloimmunization'],
    'Thalassemia is an inherited condition where your body cannot make enough of a protein in red blood cells. Mild forms may only cause slight anemia. Severe forms need regular blood transfusions and medications to remove excess iron.',
    ['Severe anemia with cardiac symptoms', 'Signs of iron overload cardiomyopathy', 'Aplastic crisis', 'Massive splenomegaly with cytopenias', 'Hydrops fetalis (prenatal emergency)'],
  ),

  'glucose-6-phosphate-dehydrogenase-deficiency': h(
    'glucose-6-phosphate-dehydrogenase-deficiency',
    'G6PD Deficiency',
    'Deficiencia de G6PD',
    'hemoglobinopathy',
    '3A10',
    'Most common enzyme deficiency worldwide; X-linked disorder causing episodic hemolytic anemia triggered by oxidative stress.',
    'G6PD catalyzes the first step of the pentose phosphate pathway, generating NADPH needed to maintain reduced glutathione, which protects RBCs from oxidative damage. Deficient cells cannot neutralize reactive oxygen species, leading to hemoglobin denaturation (Heinz bodies), membrane damage, and acute hemolysis when exposed to triggers.',
    ['Usually asymptomatic between episodes', 'Acute hemolytic anemia after trigger exposure', 'Dark urine (hemoglobinuria)', 'Jaundice and pallor', 'Back and abdominal pain', 'Neonatal jaundice (can be severe)'],
    ['G6PD enzyme activity level (may be falsely normal during acute hemolysis due to reticulocytosis)', 'CBC: normocytic anemia during crisis, reticulocytosis', 'Peripheral smear: bite cells, blister cells, Heinz bodies (with supravital stain)', 'Elevated LDH, indirect bilirubin, low haptoglobin', 'Retest G6PD level 2-3 months after acute episode', 'Urine hemosiderin'],
    ['Avoid triggers: fava beans, dapsone, primaquine, sulfonamides, nitrofurantoin, mothballs', 'Supportive care during acute hemolysis (hydration, transfusion if severe)', 'Folic acid supplementation', 'Phototherapy or exchange transfusion for neonatal jaundice', 'Patient education and medication alert card'],
    ['Acute kidney injury from hemoglobinuria', 'Severe neonatal jaundice (kernicterus)', 'Severe anemia requiring transfusion', 'Chronic non-spherocytic hemolytic anemia (rare severe variants)'],
    'G6PD deficiency means your red blood cells are vulnerable to certain medicines, foods (like fava beans), and infections that cause them to break apart suddenly. Avoiding triggers prevents episodes. Most people live normally between episodes.',
    ['Severe acute hemolysis (Hgb < 7 with symptoms)', 'Dark urine with rapidly falling hemoglobin', 'Neonatal jaundice not responding to phototherapy', 'Renal failure from hemoglobinuria'],
  ),

  // ===== TRANSFUSION MEDICINE =====

  'transfusion-reactions': h(
    'transfusion-reactions',
    'Transfusion Reactions',
    'Reacciones transfusionales',
    'transfusion',
    'NE80',
    'Adverse events occurring during or after blood product administration, ranging from mild febrile reactions to fatal hemolytic reactions.',
    'Acute hemolytic reactions result from ABO-incompatible transfusion: preformed IgM antibodies activate complement on donor RBCs, causing intravascular hemolysis, DIC, renal failure, and shock. Febrile non-hemolytic reactions are caused by cytokines in stored blood. Allergic reactions range from urticaria (IgE-mediated) to anaphylaxis (anti-IgA in IgA-deficient patients). TRALI involves donor antibodies activating recipient neutrophils in pulmonary vasculature.',
    ['Acute hemolytic: fever, chills, flank pain, hemoglobinuria, hypotension, DIC', 'Febrile non-hemolytic: fever, rigors (most common reaction)', 'Allergic: urticaria, pruritis, anaphylaxis', 'TRALI: acute respiratory distress within 6 hours, bilateral infiltrates', 'TACO: dyspnea, hypertension, pulmonary edema (volume overload)', 'Delayed hemolytic: falling Hgb days-weeks later, new positive DAT'],
    ['Recheck patient and unit identification (ABO verification)', 'Direct antiglobulin test (DAT)', 'Plasma-free hemoglobin, haptoglobin, LDH, bilirubin', 'Urine hemoglobin', 'Coagulation studies (DIC screen)', 'Chest X-ray (TRALI vs TACO)', 'BNP (elevated in TACO, normal in TRALI)', 'Blood bank investigation with repeat crossmatch'],
    ['STOP the transfusion immediately for any suspected reaction', 'Acute hemolytic: aggressive IV fluids, vasopressors, treat DIC', 'Febrile non-hemolytic: acetaminophen, slow or restart transfusion', 'Mild allergic: diphenhydramine, restart slowly', 'Anaphylaxis: epinephrine, stop transfusion permanently', 'TRALI: supportive (oxygen, mechanical ventilation), no diuretics', 'TACO: diuretics, slow infusion rate for future transfusions', 'Report all reactions to blood bank'],
    ['Death from acute hemolytic reaction or anaphylaxis', 'DIC from hemolytic reaction', 'ARDS from TRALI', 'Renal failure', 'Alloimmunization complicating future transfusions', 'Transfusion-transmitted infections (very rare with modern screening)'],
    'Blood transfusion reactions range from mild (fever, rash) to life-threatening (wrong blood type causing organ damage). Nurses check your identity and blood type carefully before every transfusion. Any new symptoms during a transfusion should be reported immediately.',
    ['Fever + hypotension during transfusion (suspect hemolytic reaction)', 'Acute respiratory distress during or after transfusion', 'Anaphylaxis (throat swelling, severe hypotension)', 'Flank pain and dark urine during transfusion', 'DIC after transfusion'],
  ),

  'transfusion-associated-gvhd': h(
    'transfusion-associated-gvhd',
    'Transfusion-Associated Graft-versus-Host Disease',
    'Enfermedad de injerto contra huesped asociada a transfusion',
    'transfusion',
    'NE81',
    'Nearly universally fatal complication where donor lymphocytes engraft and attack recipient tissues, prevented by irradiation of blood products.',
    'Viable donor T-lymphocytes in blood products engraft in immunocompromised recipients (or HLA-haploidentical donors in immunocompetent patients). These donor lymphocytes recognize recipient HLA antigens as foreign, mounting an immune attack against skin, liver, GI tract, and bone marrow. Unlike HSCT-associated GVHD, marrow aplasia occurs because the host marrow is targeted.',
    ['Fever, maculopapular rash (day 4-30 post-transfusion)', 'Diarrhea and abdominal pain', 'Hepatitis and liver dysfunction', 'Pancytopenia and marrow aplasia (distinguishing feature)', 'Desquamative skin changes'],
    ['Clinical suspicion in at-risk patient with characteristic triad', 'Skin biopsy (lymphocytic infiltration, epidermal necrosis)', 'HLA typing showing donor lymphocyte chimerism', 'Pancytopenia on CBC', 'Liver function tests: elevated bilirubin and transaminases'],
    ['Prevention is key: irradiate blood products for at-risk patients', 'At-risk patients: immunodeficiency, HSCT recipients, HLA-matched donors (relatives), intrauterine transfusions', 'Treatment largely unsuccessful once established', 'Immunosuppression (steroids, cyclosporine) attempted', 'Supportive care', 'Mortality > 90%'],
    ['Bone marrow failure and fatal pancytopenia', 'Overwhelming infection from marrow aplasia', 'Multi-organ failure', 'Death in > 90% of cases'],
    'This is a very rare but almost always fatal complication where white blood cells in transfused blood attack your body. It is prevented by treating blood products with radiation before giving them to at-risk patients.',
    ['Rash and fever within 30 days of transfusion in at-risk patient', 'Unexplained pancytopenia after transfusion', 'Any suspicion warrants immediate hematology consultation'],
  ),

  // ===== MALIGNANT HEMATOLOGIC =====

  'acute-myeloid-leukemia': h(
    'acute-myeloid-leukemia',
    'Acute Myeloid Leukemia',
    'Leucemia mieloide aguda',
    'malignant',
    '2A60',
    'Aggressive hematologic malignancy characterized by clonal proliferation of immature myeloid cells (blasts) replacing normal bone marrow.',
    'Accumulation of genetic mutations in myeloid progenitor cells blocks differentiation and promotes proliferation. Blasts accumulate in bone marrow, suppressing normal hematopoiesis and spilling into peripheral blood. Common mutations include FLT3-ITD, NPM1, CEBPA, and IDH1/2. Cytogenetic abnormalities define risk stratification: t(8;21), inv(16) favorable; complex karyotype, del(5q), del(7q) adverse.',
    ['Fatigue and pallor (anemia)', 'Fever and infections (neutropenia)', 'Bleeding, petechiae, DIC (especially APL)', 'Gingival hypertrophy (monocytic subtypes)', 'Hepatosplenomegaly', 'Leukostasis: dyspnea, confusion, headache (WBC > 100,000)'],
    ['CBC: cytopenias with circulating blasts', 'Peripheral smear: blasts with Auer rods pathognomonic', 'Bone marrow biopsy: > 20% blasts', 'Flow cytometry: myeloid markers (CD13, CD33, CD117, MPO)', 'Cytogenetics and FISH', 'Molecular panel: FLT3, NPM1, CEBPA, IDH1/2, TP53', 'Coagulation studies (DIC screening)'],
    ['Induction: 7+3 (cytarabine + daunorubicin) or CPX-351 for secondary AML', 'Consolidation: high-dose cytarabine or allogeneic HSCT based on risk', 'Targeted: midostaurin (FLT3+), ivosidenib/enasidenib (IDH mutated)', 'APL (t(15;17)): all-trans retinoic acid (ATRA) + arsenic trioxide', 'Unfit patients: venetoclax + azacitidine', 'Supportive: transfusions, antibiotics, tumor lysis prophylaxis'],
    ['Treatment-related mortality (infection, bleeding)', 'Tumor lysis syndrome', 'DIC (especially APL)', 'Leukostasis', 'Relapse (30-60%)', 'Secondary MDS/AML from treatment'],
    'AML is a fast-growing blood cancer where abnormal cells crowd out normal blood cells in the bone marrow. Treatment involves intensive chemotherapy, and sometimes a bone marrow transplant. Newer targeted treatments are improving outcomes.',
    ['Suspected leukostasis (WBC > 100,000 with symptoms)', 'DIC with active bleeding (especially suspect APL)', 'Febrile neutropenia', 'Tumor lysis syndrome', 'Severe bleeding with very low platelets'],
  ),

  'acute-lymphoblastic-leukemia': h(
    'acute-lymphoblastic-leukemia',
    'Acute Lymphoblastic Leukemia',
    'Leucemia linfoblastica aguda',
    'malignant',
    '2A70',
    'Most common childhood cancer; malignant proliferation of lymphoid precursor cells (B-cell or T-cell lineage) in bone marrow.',
    'Genetic alterations in lymphoid progenitors cause arrested differentiation and uncontrolled proliferation. B-ALL commonly involves hyperdiploidy, ETV6-RUNX1, or BCR-ABL (Philadelphia chromosome). T-ALL often involves NOTCH1 mutations. Blasts replace normal marrow and can infiltrate CNS, testes, and other extramedullary sites.',
    ['Bone pain and limp (children)', 'Fatigue, pallor, and fever', 'Petechiae and bruising', 'Lymphadenopathy and hepatosplenomegaly', 'Mediastinal mass (T-ALL)', 'CNS involvement (headache, cranial nerve palsies)', 'Testicular swelling'],
    ['CBC: pancytopenia with lymphoblasts', 'Bone marrow biopsy: > 20% lymphoblasts', 'Flow cytometry: B-ALL (CD10, CD19, CD22) or T-ALL (CD3, CD7)', 'Cytogenetics: hyperdiploidy, t(12;21), t(9;22), MLL rearrangements', 'CSF analysis for CNS involvement', 'Molecular: BCR-ABL, IKZF1, Philadelphia-like gene expression profile'],
    ['Multi-phase chemotherapy: induction, consolidation, maintenance (2-3 years)', 'CNS prophylaxis: intrathecal methotrexate + cytarabine', 'Philadelphia+ ALL: TKI (dasatinib/ponatinib) + chemotherapy', 'Allogeneic HSCT for high-risk or relapsed disease', 'CAR-T cell therapy (tisagenlecleucel) for relapsed/refractory B-ALL', 'Blinatumomab (bispecific T-cell engager) for relapsed B-ALL', 'Pediatric-inspired protocols improving adult outcomes'],
    ['Relapse (10-15% pediatric, 40-50% adult)', 'Tumor lysis syndrome', 'Avascular necrosis from steroids', 'CNS relapse', 'Secondary malignancies', 'Long-term cardiac and neurocognitive effects'],
    'ALL is the most common cancer in children. Abnormal white blood cells multiply rapidly in the bone marrow. With modern chemotherapy lasting 2-3 years, over 90% of children are cured. New treatments like CAR-T cells help those who relapse.',
    ['Tumor lysis syndrome (high uric acid, potassium, phosphorus)', 'Mediastinal mass with airway compromise', 'CNS symptoms at presentation', 'Febrile neutropenia', 'DIC at diagnosis'],
  ),

  'multiple-myeloma': h(
    'multiple-myeloma',
    'Multiple Myeloma',
    'Mieloma multiple',
    'malignant',
    '2A83',
    'Plasma cell neoplasm producing monoclonal immunoglobulin, causing bone destruction, renal failure, anemia, and immunodeficiency.',
    'Malignant plasma cells accumulate in bone marrow and secrete monoclonal immunoglobulin (M-protein). RANKL overexpression activates osteoclasts, causing lytic bone lesions and hypercalcemia. Free light chains damage renal tubules (cast nephropathy). Normal immunoglobulin production is suppressed, leading to recurrent infections.',
    ['Bone pain (especially back, ribs) and pathologic fractures', 'Fatigue (anemia)', 'Recurrent infections', 'Hypercalcemia (confusion, polyuria, constipation)', 'Renal insufficiency', 'Peripheral neuropathy', 'Hyperviscosity symptoms (rare, more common in Waldenstrom)'],
    ['SPEP/UPEP with immunofixation: M-protein', 'Serum free light chains (kappa/lambda ratio)', 'Bone marrow biopsy: > 10% clonal plasma cells', 'Skeletal survey or PET-CT or low-dose whole-body CT', 'CBC: anemia, rouleaux on smear', 'Creatinine, calcium, albumin, beta-2 microglobulin', 'FISH: del(17p), t(4;14), t(14;16) for risk stratification', 'CRAB criteria: Calcium, Renal, Anemia, Bone lesions'],
    ['Induction: lenalidomide + bortezomib + dexamethasone (RVd)', 'Autologous stem cell transplant (eligible patients)', 'Maintenance: lenalidomide', 'Anti-CD38 (daratumumab) incorporated in frontline and relapsed', 'Bispecific antibodies and CAR-T for relapsed disease', 'Bone-modifying agents (zoledronic acid)', 'Radiation for focal bone lesions', 'Treat complications: hydration for hypercalcemia and renal failure'],
    ['Pathologic fractures and spinal cord compression', 'Renal failure (cast nephropathy)', 'Hypercalcemic crisis', 'Infections from immunodeficiency', 'Amyloidosis', 'Secondary MDS/AML from treatment'],
    'Multiple myeloma is a cancer of plasma cells in the bone marrow. It weakens bones, damages kidneys, and lowers blood counts. Modern treatments combining targeted drugs, chemotherapy, and sometimes stem cell transplant can control the disease for many years.',
    ['Spinal cord compression (back pain with leg weakness/numbness)', 'Hypercalcemia > 14 mg/dL', 'Acute renal failure', 'Pathologic fracture', 'Hyperviscosity syndrome'],
  ),

  'hodgkin-lymphoma': h(
    'hodgkin-lymphoma',
    'Hodgkin Lymphoma',
    'Linfoma de Hodgkin',
    'malignant',
    '2B30',
    'Lymphoid malignancy characterized by Reed-Sternberg cells in a reactive inflammatory background, with high cure rates even in advanced stages.',
    'Reed-Sternberg cells are large binucleated cells derived from germinal center B cells that have lost their B-cell phenotype. They secrete cytokines (IL-5, IL-13, TNF) creating a reactive inflammatory microenvironment that paradoxically protects the malignant cells. Immune evasion occurs through PD-L1 overexpression and loss of MHC class I. Classic subtypes: nodular sclerosis (most common), mixed cellularity, lymphocyte-rich, lymphocyte-depleted.',
    ['Painless cervical or supraclavicular lymphadenopathy', 'Mediastinal mass (nodular sclerosis subtype)', 'B-symptoms: fever, drenching night sweats, > 10% weight loss', 'Pel-Ebstein fever (periodic, rare)', 'Pruritus', 'Alcohol-induced lymph node pain (rare but specific)'],
    ['Excisional lymph node biopsy (Reed-Sternberg cells)', 'Immunohistochemistry: CD15+, CD30+, PAX5 dim, CD20 negative', 'PET-CT for staging (Lugano classification)', 'Bone marrow biopsy (if PET-CT not available)', 'Lab: ESR, albumin, CBC, LDH', 'HIV and hepatitis B/C testing'],
    ['Early favorable: ABVD x 2-4 cycles +/- involved-field radiation', 'Early unfavorable: ABVD x 4-6 cycles + radiation', 'Advanced: ABVD x 6 cycles or BV-AVD (brentuximab vedotin + AVD)', 'PET-adapted therapy (de-escalation if interim PET negative)', 'Relapsed: salvage chemotherapy followed by autologous HSCT', 'Checkpoint inhibitors (nivolumab, pembrolizumab) for relapsed disease', 'CAR-T therapy for multiply relapsed disease'],
    ['Relapse (15-30% depending on stage)', 'Secondary malignancies (breast cancer, lung cancer, MDS/AML)', 'Cardiotoxicity from doxorubicin', 'Pulmonary toxicity from bleomycin', 'Infertility from chemotherapy', 'Hypothyroidism from neck radiation'],
    'Hodgkin lymphoma is a cancer of the lymph nodes that most often affects young adults. It is one of the most curable cancers. Treatment with chemotherapy, sometimes with radiation, cures over 80% of patients.',
    ['Superior vena cava syndrome from mediastinal mass', 'Airway compression', 'Spinal cord compression', 'Tumor lysis syndrome'],
  ),

  'non-hodgkin-lymphoma-dlbcl': h(
    'non-hodgkin-lymphoma-dlbcl',
    'Diffuse Large B-Cell Lymphoma',
    'Linfoma difuso de celulas B grandes',
    'malignant',
    '2A81.2',
    'Most common aggressive non-Hodgkin lymphoma; heterogeneous group of rapidly growing large B-cell tumors that are potentially curable.',
    'Malignant large B-cells arise from germinal center or activated B-cell subtypes (determined by gene expression profiling). Common genetic alterations include BCL6 rearrangements, MYC translocations (high-grade), and mutations in epigenetic regulators. Rapidly proliferating cells form masses in nodal or extranodal sites. Cell-of-origin (GCB vs ABC) impacts prognosis and treatment response.',
    ['Rapidly enlarging lymphadenopathy', 'B-symptoms (fever, night sweats, weight loss)', 'Extranodal involvement (GI tract, CNS, bone, testis)', 'Abdominal mass or obstruction', 'Superior vena cava syndrome', 'Constitutional symptoms and performance decline'],
    ['Excisional biopsy: large cells, diffuse pattern', 'IHC: CD20+, CD10, BCL6, MUM1 (Hans algorithm for GCB vs non-GCB)', 'FISH: MYC, BCL2, BCL6 rearrangements (double/triple-hit)', 'PET-CT staging', 'Bone marrow biopsy', 'IPI score (Age, LDH, stage, ECOG, extranodal sites)', 'CNS IPI risk assessment', 'Hepatitis B screening (reactivation risk with rituximab)'],
    ['R-CHOP x 6 cycles (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone)', 'Pola-R-CHP for high-risk (polatuzumab vedotin + R-CHP)', 'Double-hit lymphoma: dose-adjusted R-EPOCH', 'CNS prophylaxis with intrathecal or high-dose methotrexate if high CNS IPI', 'Relapsed: salvage chemotherapy + auto-HSCT', 'CAR-T therapy (axicabtagene ciloleucel, lisocabtagene maraleucel) for relapsed/refractory', 'Bispecific antibodies (glofitamab, epcoritamab)'],
    ['Relapse or refractory disease (30-40%)', 'CNS relapse', 'Tumor lysis syndrome', 'Cardiotoxicity', 'Secondary MDS/AML', 'Hepatitis B reactivation'],
    'DLBCL is the most common type of aggressive lymphoma. It grows quickly but responds well to treatment. With R-CHOP chemotherapy, about 60% of patients are cured. Newer treatments like CAR-T cells offer hope for those who relapse.',
    ['Rapidly growing mass with airway or GI obstruction', 'Tumor lysis syndrome', 'Spinal cord compression', 'Superior vena cava syndrome', 'CNS involvement'],
  ),

  'myelodysplastic-syndromes': h(
    'myelodysplastic-syndromes',
    'Myelodysplastic Syndromes',
    'Sindromes mielodisplasicos',
    'malignant',
    '2A30',
    'Clonal stem cell disorders characterized by ineffective hematopoiesis, cytopenias, dysplasia, and risk of transformation to AML.',
    'Acquired somatic mutations in hematopoietic stem cells (commonly in splicing factors SF3B1, SRSF2, epigenetic regulators TET2, DNMT3A, ASXL1, and tumor suppressors TP53) lead to clonal expansion with impaired differentiation. Dysplastic precursors undergo apoptosis in the marrow (ineffective hematopoiesis), causing peripheral cytopenias despite hypercellular marrow. Clonal evolution accumulates additional mutations, leading to AML transformation.',
    ['Fatigue and exertional dyspnea (anemia)', 'Recurrent infections (neutropenia)', 'Bruising and bleeding (thrombocytopenia)', 'Macrocytosis often precedes overt cytopenias', 'Usually affects older adults (median age 70)', 'May be asymptomatic, found on routine labs'],
    ['CBC: unexplained cytopenias, macrocytosis', 'Peripheral smear: dysplastic features (pseudo-Pelger-Huet, hypogranular neutrophils)', 'Bone marrow biopsy: dysplasia in > 10% of one lineage, ring sideroblasts, increased blasts', 'Cytogenetics: del(5q), -7, +8, complex karyotype', 'Molecular panel: SF3B1, TP53, ASXL1, RUNX1', 'IPSS-R/IPSS-M for risk stratification', 'Rule out B12/folate deficiency, HIV, copper deficiency'],
    ['Lower-risk: erythropoiesis-stimulating agents, luspatercept (SF3B1 mutated)', 'Del(5q): lenalidomide', 'Higher-risk: hypomethylating agents (azacitidine, decitabine)', 'Allogeneic HSCT (only curative option, for fit higher-risk patients)', 'Supportive: transfusions, iron chelation if overloaded, antibiotics', 'Clinical trials with imetelstat, venetoclax combinations'],
    ['AML transformation (30% of higher-risk MDS)', 'Transfusion dependence and iron overload', 'Infections from neutropenia', 'Bleeding from thrombocytopenia', 'Treatment-related toxicity'],
    'MDS are conditions where your bone marrow makes abnormal and insufficient blood cells. It mainly affects older adults and ranges from mild to serious. Some cases need only monitoring, while others need chemotherapy or bone marrow transplant.',
    ['Febrile neutropenia', 'Severe bleeding with thrombocytopenia', 'Symptomatic severe anemia', 'Suspicion of transformation to AML (rising blast count)'],
  ),

  'myeloproliferative-neoplasm-pv': h(
    'myeloproliferative-neoplasm-pv',
    'Polycythemia Vera',
    'Policitemia vera',
    'malignant',
    '2A20.0',
    'Myeloproliferative neoplasm characterized by JAK2-driven overproduction of red blood cells, with risk of thrombosis and transformation.',
    'Virtually all PV cases harbor JAK2 V617F (95%) or JAK2 exon 12 mutations (4%), causing constitutive activation of JAK-STAT signaling in hematopoietic stem cells. This drives erythropoietin-independent erythropoiesis, elevating red cell mass. Secondary increases in WBC and platelets are common. Hyperviscosity and thrombocytosis contribute to thrombosis risk.',
    ['Headache, dizziness, visual disturbances', 'Plethora (ruddy complexion)', 'Pruritus (especially aquagenic, after bathing)', 'Erythromelalgia (burning pain in hands/feet)', 'Splenomegaly', 'Thrombotic events (stroke, MI, DVT, Budd-Chiari)', 'Gout from increased cell turnover'],
    ['CBC: elevated hemoglobin (> 16.5 men, > 16 women) or hematocrit (> 49/48%)', 'JAK2 V617F mutation (95%+)', 'JAK2 exon 12 if V617F negative', 'Serum EPO level (low in PV, elevated in secondary polycythemia)', 'Bone marrow biopsy: panmyelosis with pleomorphic megakaryocytes', 'Iron studies (often depleted from phlebotomy or GI loss)'],
    ['Phlebotomy to target hematocrit < 45%', 'Low-dose aspirin (81 mg daily)', 'Hydroxyurea for high-risk (age > 60 or prior thrombosis)', 'Ruxolitinib (JAK inhibitor) if hydroxyurea intolerant or resistant', 'Ropeginterferon alfa-2b (preferred in younger patients)', 'Manage cardiovascular risk factors', 'Allopurinol for symptomatic hyperuricemia'],
    ['Thrombosis (leading cause of morbidity and mortality)', 'Hemorrhage (especially with extreme thrombocytosis)', 'Transformation to myelofibrosis (10-20% at 20 years)', 'AML transformation (5-10%)', 'Budd-Chiari syndrome'],
    'Polycythemia vera makes your bone marrow produce too many red blood cells, thickening your blood and raising clot risk. Treatment involves regular blood removal (like donating blood) and daily aspirin. Most people live many years with proper management.',
    ['Stroke or TIA', 'Acute MI', 'Budd-Chiari syndrome (abdominal pain, ascites, hepatomegaly)', 'Severe hyperviscosity symptoms', 'Major hemorrhage'],
  ),

  'primary-myelofibrosis': h(
    'primary-myelofibrosis',
    'Primary Myelofibrosis',
    'Mielofibrosis primaria',
    'malignant',
    '2A20.2',
    'Progressive myeloproliferative neoplasm with bone marrow fibrosis, splenomegaly from extramedullary hematopoiesis, and constitutional symptoms.',
    'Driver mutations (JAK2, CALR, MPL) and additional mutations (ASXL1, SRSF2, EZH2) in hematopoietic stem cells trigger megakaryocyte proliferation and activation. Megakaryocytes release pro-fibrotic cytokines (TGF-beta, PDGF) inducing reactive fibrosis of the bone marrow stroma. This displaces hematopoiesis to the spleen and liver (extramedullary hematopoiesis), causing massive organomegaly.',
    ['Constitutional symptoms (fatigue, weight loss, night sweats, fever)', 'Massive splenomegaly causing early satiety and abdominal pain', 'Anemia (progressive)', 'Bone pain', 'Cachexia', 'Portal hypertension from hepatic extramedullary hematopoiesis'],
    ['CBC: anemia, leukoerythroblastic blood picture', 'Peripheral smear: tear-drop cells (dacrocytes), nucleated RBCs, immature granulocytes', 'Bone marrow biopsy: reticulin/collagen fibrosis, megakaryocyte atypia', 'JAK2, CALR, MPL mutation testing', 'Molecular panel for prognostic mutations (ASXL1, EZH2, SRSF2, IDH1/2)', 'DIPSS/MIPSS70 for risk stratification', 'Cytogenetics'],
    ['Ruxolitinib for symptomatic splenomegaly and constitutional symptoms', 'Allogeneic HSCT (only curative, for intermediate-2/high-risk patients)', 'Anemia management: danazol, erythropoiesis-stimulating agents, transfusions', 'Momelotinib (JAK inhibitor with additional anemia benefit)', 'Hydroxyurea for WBC control', 'Splenectomy or splenic irradiation for refractory splenomegaly (high morbidity)', 'Clinical trials (telomerase inhibitors, PI3K inhibitors)'],
    ['Progressive marrow failure and transfusion dependence', 'Massive splenomegaly with splenic infarcts', 'Portal hypertension', 'AML transformation (20% at 10 years)', 'Infections and bleeding', 'Graft failure post-HSCT'],
    'Myelofibrosis causes scarring in the bone marrow, so blood cells are made in the spleen instead, which becomes very large. Symptoms include fatigue, weight loss, and abdominal fullness. Targeted medications help, and a bone marrow transplant can cure it.',
    ['Splenic infarction (acute left-sided abdominal pain)', 'Symptomatic severe anemia', 'Rapid transformation to AML', 'Portal hypertension with variceal bleeding', 'Severe constitutional symptoms'],
  ),

  'waldenstrom-macroglobulinemia': h(
    'waldenstrom-macroglobulinemia',
    'Waldenstrom Macroglobulinemia',
    'Macroglobulinemia de Waldenstrom',
    'malignant',
    '2A83.4',
    'Lymphoplasmacytic lymphoma producing IgM monoclonal protein, causing hyperviscosity and cytopenias.',
    'Clonal lymphoplasmacytic cells (bearing the near-universal MYD88 L265P mutation) proliferate in bone marrow and secrete large amounts of IgM. The pentameric IgM molecule greatly increases serum viscosity. Tissue infiltration causes cytopenias, and IgM may have autoantibody activity (cold agglutinins, cryoglobulinemia) or deposit in tissues.',
    ['Hyperviscosity: blurred vision, headache, epistaxis, confusion', 'Fatigue from anemia', 'Lymphadenopathy and splenomegaly', 'Peripheral neuropathy (anti-MAG antibody)', 'Raynaud phenomenon and cold sensitivity', 'Bleeding (VWF-IgM complexes)'],
    ['SPEP: IgM monoclonal protein', 'Serum viscosity level', 'Bone marrow biopsy: lymphoplasmacytic infiltrate', 'MYD88 L265P and CXCR4 mutation testing', 'CBC: anemia, possibly pancytopenia', 'Fundoscopic exam for hyperviscosity', 'Cryoglobulins, cold agglutinins if suspected'],
    ['Plasmapheresis for symptomatic hyperviscosity (emergency)', 'BTK inhibitors (ibrutinib, zanubrutinib) for MYD88-mutated', 'Bendamustine + rituximab', 'Avoid rituximab monotherapy if IgM > 4000 (IgM flare)', 'DRC (dexamethasone, rituximab, cyclophosphamide)', 'Observation for asymptomatic smoldering disease'],
    ['Symptomatic hyperviscosity (stroke, retinal hemorrhage)', 'Transformation to DLBCL', 'Amyloidosis (AL)', 'Cryoglobulinemia', 'Progressive neuropathy'],
    'This rare blood cancer produces too much of a large antibody (IgM) that thickens your blood. It can cause vision problems, bleeding, and nerve damage. Treatment thins the blood urgently and uses targeted medicines to control the cancer.',
    ['Visual changes or retinal hemorrhage from hyperviscosity', 'Serum viscosity > 4 cP with symptoms', 'Stroke or altered mental status', 'Severe cryoglobulinemia with organ damage'],
  ),

  // ===== ADDITIONAL BLEEDING =====

  'factor-v-leiden': h(
    'factor-v-leiden',
    'Factor V Leiden Thrombophilia',
    'Trombofilia por Factor V Leiden',
    'thrombotic',
    'NF02.4',
    'Most common inherited thrombophilia; a point mutation in factor V renders it resistant to inactivation by activated protein C.',
    'The factor V Leiden mutation (R506Q) alters the APC cleavage site on factor V, making activated factor V resistant to degradation by activated protein C. This allows prolonged factor Va activity and sustained thrombin generation. Heterozygotes have 5-10x increased VTE risk; homozygotes 50-80x. Risk is compounded by oral contraceptives, pregnancy, surgery, and immobilization.',
    ['Most carriers never develop thrombosis', 'Deep vein thrombosis (most common event)', 'Pulmonary embolism', 'Cerebral venous sinus thrombosis', 'Recurrent pregnancy loss (controversial association)', 'Unusual-site thrombosis less common than protein C/S deficiency'],
    ['Activated protein C resistance assay (functional screen)', 'Factor V Leiden genetic testing (confirmatory)', 'Thrombophilia panel if unprovoked or recurrent VTE', 'Family testing may be considered', 'Do not test during acute thrombosis or on anticoagulation (affects APC resistance assay)'],
    ['Acute VTE: standard anticoagulation (same as non-carriers)', 'Heterozygous with single provoked DVT: 3 months anticoagulation', 'Recurrent unprovoked VTE: indefinite anticoagulation', 'Avoid oral contraceptives in known carriers', 'Prophylaxis in high-risk situations (surgery, immobilization, pregnancy)', 'Homozygous or compound heterozygous: more aggressive approach'],
    ['Recurrent venous thromboembolism', 'Post-thrombotic syndrome', 'Pulmonary hypertension from recurrent PE', 'Warfarin-induced skin necrosis (if concurrent protein C deficiency)'],
    'Factor V Leiden is an inherited blood condition that slightly increases your chance of developing blood clots. Most people with it never have a clot. Your doctor may recommend blood thinners after a clot or preventive measures during high-risk situations.',
    ['Acute DVT or PE symptoms', 'Cerebral venous sinus thrombosis (severe headache, vision changes)', 'Pregnancy-associated thrombosis'],
  ),

  // ===== ADDITIONAL PLATELET =====

  'hemolytic-uremic-syndrome': h(
    'hemolytic-uremic-syndrome',
    'Hemolytic Uremic Syndrome',
    'Sindrome hemolitico uremico',
    'platelet',
    '3B64.2',
    'Thrombotic microangiopathy characterized by the triad of MAHA, thrombocytopenia, and acute kidney injury, most often triggered by Shiga toxin-producing E. coli.',
    'Typical HUS (90%): Shiga toxin from STEC (O157:H7) binds Gb3 receptors on renal endothelium, causing endothelial injury, platelet activation, and fibrin deposition in glomerular capillaries. Atypical HUS (10%): uncontrolled complement activation (mutations in CFH, CFI, MCP, or anti-CFH antibodies) causes chronic endothelial injury and thrombotic microangiopathy.',
    ['Bloody diarrhea preceding typical HUS by 5-10 days', 'Oliguria or anuria', 'Pallor and jaundice', 'Petechiae and bruising', 'Abdominal pain', 'Lethargy or seizures (CNS involvement)', 'Atypical HUS: no diarrheal prodrome, relapsing course'],
    ['CBC: MAHA (schistocytes on smear), thrombocytopenia', 'Elevated creatinine, BUN', 'Elevated LDH, indirect bilirubin, low haptoglobin', 'Negative Coombs test', 'Stool culture and Shiga toxin PCR', 'ADAMTS13 > 10% (distinguishes from TTP)', 'Complement studies for atypical HUS (C3, C4, CFH, anti-CFH antibodies)', 'Normal coagulation studies'],
    ['Typical HUS: supportive care (IV fluids, dialysis if needed, transfusion)', 'Avoid antibiotics for STEC (may increase toxin release)', 'Avoid anti-motility agents', 'Platelet transfusion only for active life-threatening bleeding', 'Atypical HUS: eculizumab or ravulizumab (complement C5 inhibitors)', 'Dialysis for renal failure', 'Plasma exchange for atypical HUS while awaiting complement workup'],
    ['Acute renal failure requiring dialysis (50%)', 'Chronic kidney disease (25% long-term)', 'CNS complications (seizures, stroke)', 'Colonic necrosis and perforation', 'Cardiac involvement', 'Relapse in atypical HUS without complement blockade'],
    'HUS usually occurs after a food poisoning infection that damages blood vessels in the kidneys. It causes kidney failure, low platelets, and anemia. Most children with typical HUS recover with supportive care, but the atypical form needs specialized medicines.',
    ['Anuria or severe oliguria', 'Seizures or altered consciousness', 'Severe hypertension', 'Potassium > 6.0 mEq/L', 'Need for urgent dialysis', 'Suspected atypical HUS (start eculizumab urgently)'],
  ),

  // ===== ADDITIONAL ANEMIA =====

  'hereditary-spherocytosis': h(
    'hereditary-spherocytosis',
    'Hereditary Spherocytosis',
    'Esferocitosis hereditaria',
    'anemia',
    '3A11',
    'Most common inherited hemolytic anemia in Northern Europeans, caused by defects in red cell membrane proteins leading to spherical, fragile RBCs.',
    'Mutations in spectrin, ankyrin, band 3, or protein 4.2 weaken the vertical connections between the RBC lipid bilayer and cytoskeleton. The membrane loses surface area without losing volume, creating spherocytes. These rigid cells are trapped and destroyed in the splenic cords (extravascular hemolysis). Severity depends on the degree of spectrin deficiency.',
    ['Jaundice (intermittent or chronic)', 'Splenomegaly', 'Anemia (variable severity)', 'Gallstones (pigmented, from chronic hemolysis)', 'Aplastic crisis triggered by parvovirus B19', 'Family history of anemia, splenectomy, or gallstones'],
    ['CBC: anemia with elevated MCHC and reticulocytosis', 'Peripheral smear: spherocytes', 'Osmotic fragility test (increased) or EMA binding test (decreased fluorescence)', 'Direct Coombs test negative (distinguishes from AIHA)', 'Elevated LDH, indirect bilirubin, low haptoglobin', 'Family screening'],
    ['Folic acid supplementation (chronic hemolysis)', 'Splenectomy for moderate-severe disease (preferably after age 6)', 'Partial splenectomy in young children', 'Pre-splenectomy vaccinations (pneumococcal, meningococcal, Haemophilus)', 'Post-splenectomy penicillin prophylaxis', 'Cholecystectomy if gallstones', 'Transfusion for aplastic crisis'],
    ['Aplastic crisis (parvovirus B19)', 'Pigmented gallstones and biliary complications', 'Post-splenectomy sepsis', 'Megaloblastic crisis from folate depletion', 'Iron overload (rare, from chronic transfusions)'],
    'Hereditary spherocytosis makes your red blood cells round instead of disc-shaped, so they get caught and destroyed in the spleen. This causes anemia and jaundice. Removing the spleen (splenectomy) greatly improves the condition for severe cases.',
    ['Aplastic crisis (sudden severe anemia, Hgb drop > 3 g/dL)', 'Severe hemolytic crisis', 'Post-splenectomy fever (suspect overwhelming sepsis)', 'Symptomatic gallstone complications'],
  ),

  // ===== ADDITIONAL THROMBOTIC =====

  'thrombophilia-protein-c-s': h(
    'thrombophilia-protein-c-s',
    'Protein C and Protein S Deficiency',
    'Deficiencia de proteina C y proteina S',
    'thrombotic',
    '3B62',
    'Inherited deficiency of natural anticoagulants (protein C or protein S) increasing risk of venous thromboembolism.',
    'Protein C is activated by thrombin-thrombomodulin complex on endothelium and, with its cofactor protein S, inactivates factors Va and VIIIa. Deficiency of either removes this brake on coagulation, creating a hypercoagulable state. Heterozygous deficiency increases VTE risk 5-10x. Homozygous protein C deficiency causes neonatal purpura fulminans.',
    ['Venous thromboembolism (DVT, PE)', 'Warfarin-induced skin necrosis (protein C deficiency)', 'Neonatal purpura fulminans (homozygous)', 'Thrombosis at young age or unusual sites', 'Family history of thrombosis', 'Recurrent VTE'],
    ['Protein C activity level (functional assay)', 'Protein S activity level and free protein S antigen', 'Test when NOT on warfarin (reduces protein C and S) or acute thrombosis', 'Rule out acquired causes: liver disease, DIC, vitamin K deficiency, warfarin use, pregnancy, OCP', 'Complete thrombophilia panel if testing indicated'],
    ['Acute VTE: standard anticoagulation', 'Heparin before warfarin (prevent skin necrosis by bridging)', 'Recurrent unprovoked VTE: indefinite anticoagulation', 'DOACs increasingly used (avoid warfarin complications)', 'Neonatal purpura fulminans: protein C concentrate, FFP', 'Prophylaxis in high-risk situations', 'Genetic counseling'],
    ['Recurrent VTE', 'Warfarin-induced skin necrosis', 'Neonatal purpura fulminans (homozygous)', 'Post-thrombotic syndrome', 'Chronic thromboembolic pulmonary hypertension'],
    'Proteins C and S are natural blood thinners your body makes. If you are born with low levels, your blood clots more easily. Most people learn about it after a blood clot. Treatment is blood thinners and prevention in high-risk situations.',
    ['Acute VTE with hemodynamic compromise', 'Neonatal purpura fulminans', 'Warfarin-induced skin necrosis (stop warfarin, give heparin and protein C)', 'Cerebral venous thrombosis'],
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search hematologic conditions by name, description, pathophysiology,
 * or clinical features. Case-insensitive.
 */
export function searchHematologicConditions(
  query: string,
): HematologicConditionEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return Object.values(HEMATOLOGIC_CONDITIONS).filter((entry) => {
    const searchable = [
      entry.name,
      entry.nameEs,
      entry.description,
      entry.pathophysiology,
      ...entry.clinicalFeatures,
      ...entry.diagnostics,
      ...entry.treatment,
      ...entry.complications,
    ]
      .join(' ')
      .toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Filter hematologic conditions by one or more categories.
 */
export function filterHematologicByCategory(
  ...categories: HematologicCategory[]
): HematologicConditionEntry[] {
  if (categories.length === 0) return Object.values(HEMATOLOGIC_CONDITIONS);

  const categorySet = new Set(categories);
  return Object.values(HEMATOLOGIC_CONDITIONS).filter((entry) =>
    categorySet.has(entry.category),
  );
}

/**
 * Get a single hematologic condition by its ID.
 * Returns undefined if not found.
 */
export function getHematologicConditionById(
  id: string,
): HematologicConditionEntry | undefined {
  return HEMATOLOGIC_CONDITIONS[id];
}

/**
 * Get all unique hematologic categories present in the database.
 */
export function getHematologicCategories(): HematologicCategory[] {
  const categories = new Set<HematologicCategory>();
  for (const entry of Object.values(HEMATOLOGIC_CONDITIONS)) {
    categories.add(entry.category);
  }
  return Array.from(categories);
}

/**
 * Get the total count of conditions, optionally filtered by category.
 */
export function getHematologicConditionCount(
  category?: HematologicCategory,
): number {
  if (!category) return Object.keys(HEMATOLOGIC_CONDITIONS).length;
  return Object.values(HEMATOLOGIC_CONDITIONS).filter(
    (e) => e.category === category,
  ).length;
}
