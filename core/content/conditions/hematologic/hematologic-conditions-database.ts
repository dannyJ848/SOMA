/**
 * Hematologic Conditions Database
 *
 * Comprehensive reference of 6 key hematologic conditions with
 * clinical summaries, diagnostics, treatment plans, and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type HematologicCategory =
  | 'anemia'
  | 'hemoglobinopathy'
  | 'thrombotic'
  | 'bleeding'
  | 'platelet';

export interface HematologicConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: HematologicCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const HEMATOLOGIC_CONDITIONS: Record<string, HematologicConditionEntry> = {
  'iron-deficiency-anemia': {
    id: 'iron-deficiency-anemia',
    name: 'Iron Deficiency Anemia',
    nameEs: 'Anemia ferropénica',
    category: 'anemia',
    icd11: '3A00',
    description: 'Most common cause of anemia worldwide, resulting from insufficient iron for hemoglobin synthesis. Produces microcytic hypochromic red blood cells with reduced oxygen-carrying capacity.',
    descriptionEs: 'Causa más común de anemia en todo el mundo, resultado de hierro insuficiente para la síntesis de hemoglobina. Produce glóbulos rojos microcíticos hipocrómicos con capacidad reducida de transporte de oxígeno.',
    riskFactors: ['Chronic blood loss (menstruation, GI bleeding)', 'Poor dietary iron intake', 'Malabsorption (celiac disease, bariatric surgery)', 'Pregnancy and lactation', 'Infancy and adolescence (increased demand)', 'Chronic kidney disease'],
    pathophysiology: 'Iron depletion occurs in stages: first iron stores (ferritin) decrease, then serum iron drops, and finally hemoglobin synthesis is impaired. Iron is essential for heme production in red blood cells. Absorption occurs in duodenum and is regulated by hepcidin.',
    pathophysiologyEs: 'La depleción de hierro ocurre en etapas: primero disminuyen las reservas de hierro (ferritina), luego baja el hierro sérico, y finalmente se altera la síntesis de hemoglobina. El hierro es esencial para la producción de hemo en glóbulos rojos.',
    symptoms: ['Fatigue and weakness', 'Pallor of conjunctivae and palmar creases', 'Dyspnea on exertion', 'Koilonychia (spoon-shaped nails)', 'Pica and pagophagia (ice craving)', 'Angular cheilitis and glossitis', 'Restless leg syndrome', 'Exercise intolerance'],
    diagnostics: {
      tests: ['CBC: low hemoglobin, low MCV (<80 fL), high RDW', 'Serum ferritin <30 ng/mL (diagnostic)', 'Low serum iron with elevated TIBC', 'Transferrin saturation <20%', 'Peripheral smear: microcytic hypochromic cells, pencil cells', 'Reticulocyte count usually low or normal'],
      imaging: ['Upper endoscopy if GI source suspected', 'Colonoscopy in men and postmenopausal women', 'Capsule endoscopy for obscure GI bleeding'],
      criteria: ['Microcytic anemia (MCV <80 fL)', 'Low ferritin (<30 ng/mL or <100 in inflammation)', 'Response to iron supplementation (reticulocytosis in 5-7 days)'],
    },
    treatment: {
      medications: ['Oral ferrous sulfate 325 mg daily (65 mg elemental iron)', 'Ferrous gluconate or fumarate alternatives', 'Vitamin C 250 mg to enhance absorption', 'IV iron (ferric carboxymaltose, iron sucrose) for malabsorption or intolerance', 'Erythropoiesis-stimulating agents rarely needed'],
      procedures: ['GI endoscopy to identify and treat bleeding source', 'Blood transfusion only if Hgb <7 g/dL or symptomatic'],
      lifestyle: ['Iron-rich diet: red meat, poultry, fish, legumes, fortified cereals', 'Avoid tea/coffee with meals (inhibit absorption)', 'Take iron on empty stomach if tolerated', 'Alternate-day dosing may improve absorption and reduce side effects'],
    },
    emergencySigns: ['Hemoglobin <7 g/dL with symptoms', 'Chest pain or shortness of breath at rest', 'Severe tachycardia or hypotension', 'Syncope or altered mental status', 'Signs of GI bleeding (melena, hematemesis)'],
    patientExplanation: 'Iron deficiency anemia means your body does not have enough iron to make healthy red blood cells. Iron is like the key ingredient that helps blood carry oxygen throughout your body. When iron is low, you feel tired and weak because your organs are not getting enough oxygen. The most common causes are heavy menstrual periods, bleeding in the stomach or intestines, or not eating enough iron-rich foods. Treatment involves taking iron supplements and finding the cause of the low iron. You should start feeling better within a few weeks, but it takes several months to fully restore your iron reserves.',
    patientExplanationEs: 'La anemia ferropénica significa que su cuerpo no tiene suficiente hierro para producir glóbulos rojos saludables. El hierro es el ingrediente clave que ayuda a la sangre a transportar oxígeno por todo el cuerpo. Cuando el hierro está bajo, se siente cansado y débil porque sus órganos no reciben suficiente oxígeno. Las causas más comunes son períodos menstruales abundantes, sangrado en el estómago o intestinos, o no comer suficientes alimentos ricos en hierro. El tratamiento incluye tomar suplementos de hierro e identificar la causa. Debería empezar a sentirse mejor en unas semanas, pero toma varios meses restaurar completamente sus reservas de hierro.',
  },

  'sickle-cell-disease': {
    id: 'sickle-cell-disease',
    name: 'Sickle Cell Disease',
    nameEs: 'Enfermedad de células falciformes',
    category: 'hemoglobinopathy',
    icd11: '3A51.0',
    description: 'Inherited hemoglobinopathy causing abnormal sickle-shaped red blood cells that obstruct blood flow and cause chronic hemolytic anemia. Results from homozygous hemoglobin S mutation.',
    descriptionEs: 'Hemoglobinopatía hereditaria que causa glóbulos rojos anormales en forma de hoz que obstruyen el flujo sanguíneo y causan anemia hemolítica crónica. Resulta de mutación homocigota de hemoglobina S.',
    riskFactors: ['African, Mediterranean, Middle Eastern, or Indian ancestry', 'Family history of sickle cell disease or trait', 'Both parents carriers of sickle cell trait', 'Consanguinity'],
    pathophysiology: 'Single point mutation in beta-globin gene causes hemoglobin S (HbS). When deoxygenated, HbS polymerizes and distorts RBCs into rigid sickle shape. Sickled cells obstruct microcirculation causing vaso-occlusive crises and tissue ischemia. Chronic hemolysis leads to anemia, jaundice, and gallstones. Splenic infarction causes functional asplenia and infection risk.',
    pathophysiologyEs: 'Una mutación puntual en el gen de beta-globina causa hemoglobina S. Cuando se desoxigena, la HbS se polimeriza y deforma los glóbulos rojos en forma rígida de hoz. Las células falciformes obstruyen la microcirculación causando crisis vasooclusivas e isquemia tisular. La hemólisis crónica causa anemia, ictericia y cálculos biliares.',
    symptoms: ['Painful vaso-occlusive crises (bones, chest, abdomen)', 'Chronic anemia and fatigue', 'Jaundice and scleral icterus', 'Dactylitis (hand-foot syndrome) in infants', 'Delayed growth and puberty', 'Priapism in males', 'Frequent infections (functional asplenia)', 'Stroke symptoms', 'Leg ulcers'],
    diagnostics: {
      tests: ['Hemoglobin electrophoresis (HbS >90% in HbSS disease)', 'CBC: normocytic anemia, reticulocytosis', 'Peripheral smear: sickle cells, target cells, Howell-Jolly bodies', 'Elevated indirect bilirubin and LDH', 'Low haptoglobin (hemolysis)', 'Newborn screening (all US states)'],
      imaging: ['Transcranial Doppler ultrasound (stroke risk screening in children)', 'MRI/MRA brain if neurological symptoms', 'Chest X-ray for acute chest syndrome', 'Abdominal ultrasound for gallstones, splenomegaly'],
      criteria: ['Hemoglobin electrophoresis showing HbS', 'Positive newborn screening', 'Clinical symptoms consistent with vaso-occlusive crises'],
    },
    treatment: {
      medications: ['Hydroxyurea (increases HbF, reduces crises by 50%)', 'L-glutamine (reduces oxidative stress)', 'Voxelotor (prevents sickling)', 'Crizanlizumab (P-selectin inhibitor)', 'Penicillin prophylaxis until age 5', 'Folic acid supplementation', 'Opioids for pain crises', 'NSAIDs for mild pain'],
      procedures: ['Hematopoietic stem cell transplant (curative)', 'Gene therapy (emerging curative option)', 'Exchange transfusion for acute complications', 'Chronic transfusion therapy for stroke prevention', 'Vaccination (pneumococcal, meningococcal, Haemophilus, flu)'],
      lifestyle: ['Avoid dehydration (drink 8-10 glasses water daily)', 'Avoid high altitudes and extreme temperatures', 'Avoid strenuous exercise', 'Pain management plan with hematologist', 'Prompt treatment of infections', 'Avoid smoking and excessive alcohol'],
    },
    emergencySigns: ['Severe pain crisis not responding to home medications', 'Fever >101°F (infection risk)', 'Acute chest syndrome (chest pain, fever, hypoxia)', 'Stroke symptoms (weakness, speech changes, severe headache)', 'Priapism lasting >2 hours', 'Severe abdominal pain (splenic sequestration)', 'Sudden severe anemia or pallor'],
    patientExplanation: 'Sickle cell disease is an inherited blood disorder where your red blood cells become crescent-shaped instead of round. These sickle-shaped cells can get stuck in small blood vessels, blocking blood flow and causing pain crises. The disease also causes chronic anemia because the abnormal cells break down faster than normal. You inherited this from both parents who carry the sickle cell gene. While there is no cure for most patients, medications like hydroxyurea can reduce pain crises by half. Staying hydrated, avoiding extreme temperatures, and taking daily medications are crucial. Stem cell transplant or gene therapy may cure the disease but are not available for everyone. With good care, many people with sickle cell disease live productive lives into their 50s and beyond.',
    patientExplanationEs: 'La enfermedad de células falciformes es un trastorno sanguíneo hereditario donde los glóbulos rojos se vuelven en forma de media luna en lugar de redondos. Estas células pueden atascarse en vasos sanguíneos pequeños, bloqueando el flujo sanguíneo y causando crisis de dolor. También causa anemia crónica porque las células anormales se descomponen más rápido. Heredó esto de ambos padres que portan el gen. Aunque no hay cura para la mayoría, medicamentos como hidroxiurea pueden reducir las crisis de dolor a la mitad. Mantenerse hidratado, evitar temperaturas extremas y tomar medicamentos diarios es crucial. Con buen cuidado, muchas personas viven vidas productivas hasta los 50 años y más.',
  },

  'deep-vein-thrombosis': {
    id: 'deep-vein-thrombosis',
    name: 'Deep Vein Thrombosis (DVT)',
    nameEs: 'Trombosis venosa profunda (TVP)',
    category: 'thrombotic',
    icd11: 'BD71',
    description: 'Blood clot formation in deep veins, typically of the lower extremities. Can dislodge and cause life-threatening pulmonary embolism.',
    descriptionEs: 'Formación de coágulos sanguíneos en venas profundas, típicamente de extremidades inferiores. Puede desprenderse y causar embolia pulmonar potencialmente mortal.',
    riskFactors: ['Prolonged immobility (surgery, long flights, bed rest)', 'Recent surgery or trauma', 'Active cancer', 'Pregnancy and postpartum period', 'Oral contraceptives or hormone therapy', 'Inherited thrombophilias (Factor V Leiden, prothrombin mutation)', 'Prior DVT or PE', 'Obesity', 'Smoking', 'Advanced age'],
    pathophysiology: 'Virchow triad: venous stasis, endothelial injury, and hypercoagulability promote thrombus formation. Clot typically begins at venous valve cusps where flow is slowest. Propagation can extend proximally into iliac or IVC. Embolization to pulmonary arteries causes PE. Post-thrombotic syndrome results from chronic venous insufficiency.',
    pathophysiologyEs: 'Tríada de Virchow: estasis venosa, lesión endotelial e hipercoagulabilidad promueven la formación de trombos. El coágulo típicamente comienza en cúspides de válvulas venosas donde el flujo es más lento. Puede extenderse proximalmente. La embolización a arterias pulmonares causa EP.',
    symptoms: ['Unilateral leg pain and swelling', 'Warmth and erythema of affected limb', 'Palpable cord (thrombosed vein)', 'Calf tenderness', 'Homans sign (pain with dorsiflexion) unreliable', 'May be asymptomatic in up to 50%'],
    diagnostics: {
      tests: ['D-dimer (high sensitivity, low specificity; negative excludes DVT if low pretest probability)', 'Wells Score for DVT (clinical prediction rule)', 'CBC, PT/INR, aPTT baseline before anticoagulation'],
      imaging: ['Compression ultrasound with Doppler (first-line, 95% sensitivity for proximal DVT)', 'Venography (gold standard, rarely used)', 'CT or MR venography for pelvic/IVC thrombus'],
      criteria: ['Wells score >2 with positive compression ultrasound', 'Positive D-dimer with imaging confirmation', 'Non-compressible vein segment on ultrasound (diagnostic)'],
    },
    treatment: {
      medications: ['Anticoagulation: rivaroxaban or apixaban (preferred oral agents)', 'Low molecular weight heparin (enoxaparin) bridge to warfarin', 'Warfarin with INR target 2-3', 'Dabigatran or edoxaban', 'Duration: 3 months minimum (provoked), 6-12 months or indefinite (unprovoked or recurrent)'],
      procedures: ['IVC filter if anticoagulation contraindicated', 'Catheter-directed thrombolysis for massive iliofemoral DVT with limb-threatening ischemia', 'Thrombectomy rarely indicated'],
      lifestyle: ['Early mobilization to prevent extension', 'Compression stockings (knee-high, 30-40 mmHg) to reduce post-thrombotic syndrome', 'Leg elevation when sitting', 'Avoid prolonged immobility', 'Weight loss if obese', 'Smoking cessation'],
    },
    emergencySigns: ['Sudden shortness of breath or chest pain (possible PE)', 'Severe leg pain with pallor and coolness (phlegmasia cerulea dolens)', 'Hemoptysis', 'Syncope', 'Signs of pulmonary embolism'],
    patientExplanation: 'Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in your leg. It causes swelling, pain, and warmth in the affected leg. DVT is dangerous because the clot can break off and travel to your lungs, causing a pulmonary embolism which is life-threatening. Risk factors include recent surgery, long periods of sitting (like plane flights), cancer, and birth control pills. Treatment is blood thinners (anticoagulants) to prevent the clot from growing and to prevent new clots. You will likely need to take blood thinners for at least 3 months. Wearing compression stockings and staying active can prevent long-term complications. If you develop sudden shortness of breath or chest pain, call 911 immediately as this may indicate the clot has traveled to your lungs.',
    patientExplanationEs: 'La trombosis venosa profunda (TVP) es un coágulo de sangre que se forma en una vena profunda, usualmente en la pierna. Causa hinchazón, dolor y calor en la pierna afectada. La TVP es peligrosa porque el coágulo puede desprenderse y viajar a los pulmones, causando embolia pulmonar potencialmente mortal. Los factores de riesgo incluyen cirugía reciente, períodos largos sentado, cáncer y píldoras anticonceptivas. El tratamiento son anticoagulantes para prevenir que el coágulo crezca. Probablemente necesitará tomar anticoagulantes durante al menos 3 meses. Si desarrolla dificultad repentina para respirar o dolor de pecho, llame al 911 inmediatamente.',
  },

  'pulmonary-embolism': {
    id: 'pulmonary-embolism',
    name: 'Pulmonary Embolism (PE)',
    nameEs: 'Embolia pulmonar (EP)',
    category: 'thrombotic',
    icd11: 'BB00',
    description: 'Obstruction of pulmonary arteries by thrombus (usually from DVT), fat, air, or tumor. Can be life-threatening with acute right heart strain.',
    descriptionEs: 'Obstrucción de arterias pulmonares por trombo (usualmente de TVP), grasa, aire o tumor. Puede ser potencialmente mortal con tensión cardíaca derecha aguda.',
    riskFactors: ['Deep vein thrombosis', 'Recent surgery or trauma', 'Prolonged immobilization', 'Active malignancy', 'Pregnancy and postpartum', 'Oral contraceptives or HRT', 'Inherited thrombophilia', 'Prior PE or DVT', 'Obesity', 'Smoking', 'Heart failure'],
    pathophysiology: 'Thrombus (90% from lower extremity or pelvic DVT) embolizes to pulmonary circulation. Obstruction increases pulmonary vascular resistance and dead space ventilation. Large or multiple emboli cause acute RV strain and failure. Impaired gas exchange causes hypoxemia. Massive PE can cause obstructive shock and sudden death.',
    pathophysiologyEs: 'El trombo (90% de TVP de extremidades inferiores o pelvis) se emboliza a la circulación pulmonar. La obstrucción aumenta la resistencia vascular pulmonar. Émbolos grandes causan tensión del ventrículo derecho aguda. El intercambio gaseoso alterado causa hipoxemia. La EP masiva puede causar shock obstructivo y muerte súbita.',
    symptoms: ['Sudden dyspnea (most common)', 'Pleuritic chest pain', 'Cough and hemoptysis', 'Tachypnea and tachycardia', 'Anxiety and sense of impending doom', 'Syncope (massive PE)', 'Signs of DVT (leg swelling)', 'Hypoxia', 'May be asymptomatic if small'],
    diagnostics: {
      tests: ['D-dimer (negative excludes PE if low pretest probability)', 'Wells Score or PERC rule for risk stratification', 'ABG: hypoxemia, hypocapnia, elevated A-a gradient', 'Troponin and BNP (elevated if RV strain)', 'ECG: sinus tachycardia, S1Q3T3 pattern (classic but rare)'],
      imaging: ['CT pulmonary angiography (CTPA) - gold standard', 'V/Q scan if contrast contraindicated', 'Echocardiography: RV dilatation/dysfunction, McConnell sign', 'Compression ultrasound of legs (positive supports diagnosis)', 'Chest X-ray: normal or Hampton hump, Westermark sign'],
      criteria: ['Wells score with CTPA showing filling defect', 'High-probability V/Q scan', 'Positive CTPA diagnostic', 'Elevated troponin/BNP suggests high-risk PE'],
    },
    treatment: {
      medications: ['Anticoagulation: apixaban or rivaroxaban preferred', 'LMWH or unfractionated heparin if hemodynamically unstable', 'Warfarin with INR 2-3', 'Duration: 3 months minimum (provoked), extended if unprovoked or recurrent', 'Thrombolysis (tPA) for massive PE with hemodynamic instability'],
      procedures: ['Systemic thrombolysis (alteplase) for massive PE', 'Catheter-directed thrombolysis', 'Surgical embolectomy if thrombolysis contraindicated', 'IVC filter if anticoagulation contraindicated', 'ECMO for refractory shock'],
      lifestyle: ['Early mobilization once stable', 'Compression stockings for coexisting DVT', 'Avoid prolonged immobility', 'Weight loss and smoking cessation', 'Gradual return to exercise (cardiac rehab if massive PE)', 'Get up and walk every 2 hours on long trips'],
    },
    emergencySigns: ['Sudden severe shortness of breath', 'Chest pain with breathing', 'Coughing up blood', 'Rapid heart rate >120 bpm', 'Syncope or near-syncope', 'Hypotension or shock', 'Severe hypoxia', 'Altered mental status'],
    patientExplanation: 'A pulmonary embolism (PE) is a blood clot that travels to your lungs and blocks blood flow. Most PEs come from clots in leg veins (DVT). The blockage prevents oxygen from reaching your blood and puts strain on your heart. Symptoms include sudden shortness of breath, chest pain when breathing, and rapid heart rate. This is a medical emergency that can be fatal without treatment. Treatment involves blood thinners to dissolve the clot and prevent new ones. Large clots may require clot-busting drugs or procedures. You will need to take blood thinners for at least 3 months, possibly longer depending on your risk factors. After recovery, stay active, avoid long periods of sitting, and take all medications as prescribed. If you develop sudden severe shortness of breath or chest pain, call 911 immediately.',
    patientExplanationEs: 'Una embolia pulmonar (EP) es un coágulo de sangre que viaja a los pulmones y bloquea el flujo sanguíneo. La mayoría de las EP provienen de coágulos en las venas de las piernas (TVP). El bloqueo impide que el oxígeno llegue a la sangre y pone tensión en el corazón. Los síntomas incluyen dificultad repentina para respirar, dolor de pecho al respirar y ritmo cardíaco rápido. Esta es una emergencia médica que puede ser fatal sin tratamiento. El tratamiento incluye anticoagulantes para disolver el coágulo y prevenir nuevos. Necesitará tomar anticoagulantes durante al menos 3 meses. Después de la recuperación, manténgase activo y evite períodos largos sentado. Si desarrolla dificultad severa repentina para respirar, llame al 911 inmediatamente.',
  },

  'hemophilia': {
    id: 'hemophilia',
    name: 'Hemophilia A',
    nameEs: 'Hemofilia A',
    category: 'bleeding',
    icd11: '3B10',
    description: 'X-linked recessive bleeding disorder caused by deficiency of clotting factor VIII. Results in prolonged bleeding after injury and spontaneous bleeding into joints and muscles.',
    descriptionEs: 'Trastorno hemorrágico recesivo ligado al cromosoma X causado por deficiencia del factor VIII de coagulación. Resulta en sangrado prolongado después de lesiones y sangrado espontáneo en articulaciones y músculos.',
    riskFactors: ['Male sex (affects 1 in 5,000 males)', 'Family history of hemophilia', 'X-linked inheritance (mother carrier)', '30% are new mutations'],
    pathophysiology: 'Mutation in F8 gene on X chromosome causes deficiency or dysfunction of factor VIII, essential for intrinsic coagulation pathway. Factor VIII serves as cofactor for factor IX in activating factor X. Severity correlates with factor level: severe (<1%), moderate (1-5%), mild (5-40%). Bleeding results from impaired fibrin clot formation. Repeated hemarthroses cause chronic arthropathy.',
    pathophysiologyEs: 'La mutación en el gen F8 en el cromosoma X causa deficiencia del factor VIII, esencial para la vía de coagulación intrínseca. La gravedad se correlaciona con el nivel del factor: severa (<1%), moderada (1-5%), leve (5-40%). El sangrado resulta de la formación alterada de coágulos de fibrina. Las hemartrosis repetidas causan artropatía crónica.',
    symptoms: ['Prolonged bleeding from minor cuts or after surgery', 'Spontaneous bleeding into joints (hemarthrosis) - knees, ankles, elbows', 'Joint pain, swelling, and warmth', 'Muscle hematomas', 'Easy bruising', 'Prolonged bleeding after dental procedures', 'Intracranial hemorrhage (most serious complication)', 'Nosebleeds', 'Blood in urine or stool'],
    diagnostics: {
      tests: ['Prolonged aPTT, normal PT and platelet count', 'Factor VIII activity level (confirms diagnosis and severity)', 'Mixing study (corrects with normal plasma)', 'CBC: normal unless acute bleeding', 'Factor VIII inhibitor assay (if no response to treatment)', 'Genetic testing for carrier detection and prenatal diagnosis'],
      imaging: ['MRI of joints for chronic arthropathy', 'CT or MRI head if trauma or neurological symptoms', 'Ultrasound for muscle hematomas'],
      criteria: ['Factor VIII level <40% with prolonged aPTT', 'X-linked inheritance pattern', 'Clinical bleeding consistent with severity'],
    },
    treatment: {
      medications: ['Factor VIII concentrate (recombinant preferred) - on-demand or prophylaxis', 'Desmopressin (DDAVP) for mild hemophilia (releases stored factor VIII)', 'Antifibrinolytics (tranexamic acid, aminocaproic acid) for mucosal bleeding', 'Emicizumab (bispecific antibody, bridges factor IXa and X) for prophylaxis', 'Avoid NSAIDs and antiplatelet agents'],
      procedures: ['Gene therapy (emerging, potentially curative)', 'Joint aspiration for severe hemarthrosis', 'Orthopedic surgery for chronic arthropathy', 'Factor replacement before any procedure or surgery', 'Physical therapy for joint complications'],
      lifestyle: ['Avoid contact sports and activities with high injury risk', 'Wear medical alert bracelet', 'Regular dental care to prevent extractions', 'Low-impact exercise (swimming, walking)', 'Prophylactic factor replacement 3x/week for severe disease', 'Immediate treatment of bleeds', 'Home infusion training for patients/families'],
    },
    emergencySigns: ['Head injury or severe headache (risk of intracranial bleed)', 'Severe abdominal pain (internal bleeding)', 'Bleeding not controlled after factor replacement', 'Joint bleed with severe pain and inability to move', 'Bleeding in throat or neck (airway risk)', 'Large or expanding hematoma', 'Vomiting blood or blood in stool'],
    patientExplanation: 'Hemophilia A is an inherited bleeding disorder where your blood does not clot properly because you are missing a clotting protein called factor VIII. This means you can bleed longer after injuries and may have spontaneous bleeding into joints (especially knees and elbows) or muscles. The condition only affects males and is passed from mothers who carry the gene. Treatment involves replacing the missing factor VIII by infusion into a vein. Severe hemophilia requires regular infusions 2-3 times per week to prevent bleeding (prophylaxis). Mild cases may only need treatment before surgery or after injury. With proper treatment and precautions, most people with hemophilia can live normal, active lives. Avoid contact sports, take care of your joints with low-impact exercise, and treat bleeds immediately. New treatments like gene therapy may offer a cure in the future.',
    patientExplanationEs: 'La hemofilia A es un trastorno hemorrágico hereditario donde su sangre no coagula correctamente porque falta una proteína de coagulación llamada factor VIII. Esto significa que puede sangrar más tiempo después de lesiones y puede tener sangrado espontáneo en articulaciones o músculos. La condición solo afecta a hombres y se transmite de madres portadoras del gen. El tratamiento implica reemplazar el factor VIII faltante mediante infusión en una vena. La hemofilia severa requiere infusiones regulares 2-3 veces por semana para prevenir sangrado. Con tratamiento adecuado, la mayoría de las personas pueden vivir vidas normales y activas. Evite deportes de contacto y trate los sangrados inmediatamente.',
  },

  'immune-thrombocytopenia': {
    id: 'immune-thrombocytopenia',
    name: 'Immune Thrombocytopenia (ITP)',
    nameEs: 'Trombocitopenia inmune (PTI)',
    category: 'platelet',
    icd11: '3B64.0',
    description: 'Autoimmune disorder causing isolated low platelet count due to antibody-mediated platelet destruction and impaired production. Increases bleeding risk.',
    descriptionEs: 'Trastorno autoinmune que causa conteo bajo aislado de plaquetas debido a destrucción mediada por anticuerpos y producción alterada. Aumenta el riesgo de sangrado.',
    riskFactors: ['Recent viral infection (common trigger in children)', 'Autoimmune diseases (lupus, antiphospholipid syndrome)', 'HIV, hepatitis C', 'Helicobacter pylori infection', 'Pregnancy', 'Certain medications (heparin, quinine)', 'Female sex (2-3x more common)', 'Age peaks: children 2-5 years, adults 20-40 years'],
    pathophysiology: 'Autoantibodies (usually IgG) bind to platelet membrane glycoproteins (GPIIb/IIIa, GPIb/IX). Antibody-coated platelets are recognized and destroyed by splenic macrophages. Megakaryocyte function is also impaired by antibodies, reducing platelet production. Result is isolated thrombocytopenia without other hematologic abnormalities. Children often have acute self-limited disease post-infection; adults typically have chronic disease.',
    pathophysiologyEs: 'Los autoanticuerpos (usualmente IgG) se unen a glicoproteínas de membrana plaquetaria. Las plaquetas recubiertas de anticuerpos son reconocidas y destruidas por macrófagos esplénicos. La función de megacariocitos también se altera, reduciendo la producción de plaquetas. El resultado es trombocitopenia aislada sin otras anomalías hematológicas. Los niños suelen tener enfermedad aguda autolimitada post-infección; los adultos típicamente tienen enfermedad crónica.',
    symptoms: ['Petechiae (pinpoint red spots on skin)', 'Purpura (larger purple bruises)', 'Easy bruising with minor trauma', 'Mucosal bleeding (gums, nosebleeds)', 'Menorrhagia in women', 'Prolonged bleeding from minor cuts', 'May be asymptomatic if platelet count >30,000', 'Intracranial hemorrhage rare but most serious (if <10,000)'],
    diagnostics: {
      tests: ['CBC: isolated thrombocytopenia (platelets <100,000), normal WBC and Hgb', 'Peripheral smear: decreased platelets, normal RBC and WBC morphology', 'HIV, hepatitis C serology', 'H. pylori testing', 'Antiplatelet antibody testing (low sensitivity/specificity, not routinely used)', 'Bone marrow biopsy only if atypical features or age >60 (shows normal/increased megakaryocytes)'],
      imaging: ['Usually not required', 'CT head if severe headache or neurological symptoms (ICH risk)'],
      criteria: ['Platelet count <100,000 with normal WBC and Hgb', 'Exclusion of other causes (drugs, infections, malignancy)', 'Increased or normal megakaryocytes on bone marrow if performed'],
    },
    treatment: {
      medications: ['Corticosteroids: prednisone 1 mg/kg or dexamethasone 40 mg x 4 days (first-line)', 'IVIG 1 g/kg for severe bleeding or urgent platelet increase', 'Thrombopoietin receptor agonists: romiplostim, eltrombopag (second-line)', 'Rituximab (anti-CD20) for refractory disease', 'Fostamatinib (spleen tyrosine kinase inhibitor)', 'Platelet transfusion only for life-threatening bleeding'],
      procedures: ['Splenectomy (curative in 60-70%, reserved for refractory cases)', 'H. pylori eradication if positive'],
      lifestyle: ['Avoid contact sports and activities with high injury risk', 'Avoid NSAIDs, aspirin, and anticoagulants', 'Use soft toothbrush and electric razor', 'Avoid intramuscular injections', 'No treatment needed if platelet count >30,000 and no bleeding', 'Regular monitoring of platelet count'],
    },
    emergencySigns: ['Severe bleeding (hematemesis, melena, hematuria)', 'Intracranial hemorrhage symptoms (severe headache, confusion, weakness, seizures)', 'Platelet count <10,000', 'Significant mucosal bleeding', 'Any head trauma', 'Retinal hemorrhages or vision changes'],
    patientExplanation: 'Immune thrombocytopenia (ITP) is a condition where your immune system mistakenly attacks and destroys your platelets. Platelets are the cells that help your blood clot, so when platelet counts are low, you bruise easily and may have small red spots on your skin (petechiae) or nosebleeds. In children, ITP often develops after a viral infection and usually goes away on its own within weeks to months. In adults, ITP is usually chronic and requires treatment. The most concerning risk is serious bleeding, especially in the brain, but this is rare. Many patients with platelet counts above 30,000 do not need treatment unless they have bleeding symptoms. Treatment options include steroids to suppress the immune system, medications to increase platelet production, or in severe cases, surgery to remove the spleen. Most patients respond well to treatment and can live normal lives with monitoring.',
    patientExplanationEs: 'La trombocitopenia inmune (PTI) es una condición donde su sistema inmune ataca y destruye erróneamente sus plaquetas. Las plaquetas son células que ayudan a coagular la sangre, así que cuando el conteo de plaquetas es bajo, se lastima fácilmente y puede tener manchas rojas pequeñas en la piel (petequias) o sangrados nasales. En niños, la PTI a menudo se desarrolla después de una infección viral y usualmente desaparece por sí sola en semanas o meses. En adultos, la PTI suele ser crónica y requiere tratamiento. El riesgo más preocupante es el sangrado grave, especialmente en el cerebro, pero esto es raro. Muchos pacientes con conteos de plaquetas superiores a 30,000 no necesitan tratamiento a menos que tengan síntomas de sangrado. La mayoría de los pacientes responden bien al tratamiento.',
  },
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Get a single hematologic condition by ID.
 */
export function getHematologicConditionById(
  id: string,
): HematologicConditionEntry | undefined {
  return HEMATOLOGIC_CONDITIONS[id];
}

/**
 * Search hematologic conditions by name, category, or text content (case-insensitive).
 */
export function searchHematologicConditions(query: string): HematologicConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(HEMATOLOGIC_CONDITIONS).filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.nameEs.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.pathophysiology.toLowerCase().includes(q) ||
      c.patientExplanation.toLowerCase().includes(q) ||
      c.symptoms.some((s) => s.toLowerCase().includes(q)) ||
      c.riskFactors.some((rf) => rf.toLowerCase().includes(q)),
  );
}

/**
 * Filter conditions by category.
 */
export function getHematologicConditionsByCategory(
  category: HematologicCategory,
): HematologicConditionEntry[] {
  return Object.values(HEMATOLOGIC_CONDITIONS).filter((c) => c.category === category);
}

/**
 * Get total count of hematologic conditions in database.
 */
export function getHematologicConditionCount(): number {
  return Object.keys(HEMATOLOGIC_CONDITIONS).length;
}

/**
 * Get all conditions with a specific risk factor (case-insensitive).
 */
export function getHematologicConditionsByRiskFactor(
  riskFactor: string,
): HematologicConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(HEMATOLOGIC_CONDITIONS).filter((c) =>
    c.riskFactors.some((r) => r.toLowerCase().includes(rf)),
  );
}
