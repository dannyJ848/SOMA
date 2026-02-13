/**
 * Metabolic Conditions Database
 *
 * Comprehensive reference of metabolic and endocrine conditions with
 * clinical summaries, diagnostics, treatment, and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MetabolicCategory = 'metabolic-syndrome' | 'lipid-disorder' | 'obesity' | 'purine-disorder' | 'genetic-metabolic' | 'iron-disorder';

export interface MetabolicConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: MetabolicCategory;
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

export const METABOLIC_CONDITIONS: Record<string, MetabolicConditionEntry> = {
  'metabolic-syndrome': {
    id: 'metabolic-syndrome',
    name: 'Metabolic Syndrome',
    nameEs: 'Sindrome Metabolico',
    category: 'metabolic-syndrome',
    icd11: '5B81',
    description: 'Cluster of conditions including central obesity, insulin resistance, hypertension, and dyslipidemia that increase cardiovascular disease and type 2 diabetes risk. Affects approximately 1 in 3 adults in developed countries.',
    descriptionEs: 'Conjunto de condiciones que incluyen obesidad central, resistencia a la insulina, hipertension y dislipidemia que aumentan el riesgo de enfermedad cardiovascular y diabetes tipo 2. Afecta aproximadamente a 1 de cada 3 adultos en paises desarrollados.',
    riskFactors: ['Central obesity', 'Sedentary lifestyle', 'High-carbohydrate diet', 'Family history of diabetes', 'Age >40 years', 'PCOS', 'Sleep apnea', 'Hispanic or Asian ethnicity'],
    pathophysiology: 'Chronic caloric excess and physical inactivity lead to visceral adiposity, which secretes inflammatory cytokines and free fatty acids. This creates systemic insulin resistance, compensatory hyperinsulinemia, and metabolic dysfunction affecting glucose, lipid metabolism, and vascular endothelium.',
    pathophysiologyEs: 'El exceso calorico cronico y la inactividad fisica conducen a adiposidad visceral, que secreta citocinas inflamatorias y acidos grasos libres. Esto crea resistencia sistemica a la insulina, hiperinsulinemia compensatoria y disfuncion metabolica que afecta el metabolismo de glucosa, lipidos y el endotelio vascular.',
    symptoms: ['Often asymptomatic', 'Increased waist circumference', 'Fatigue', 'Acanthosis nigricans (dark skin patches)', 'Skin tags', 'Difficulty losing weight'],
    diagnostics: {
      tests: ['Fasting glucose or HbA1c', 'Lipid panel (triglycerides, HDL)', 'Blood pressure measurement', 'Waist circumference', 'HOMA-IR index'],
      imaging: ['Not routinely required', 'Abdominal ultrasound if hepatic steatosis suspected'],
      criteria: ['3+ of: Waist >40in (M) />35in (F)', 'TG ≥150 mg/dL', 'HDL <40 (M) /<50 (F)', 'BP ≥130/85', 'Fasting glucose ≥100 mg/dL']
    },
    treatment: {
      medications: ['Metformin for glucose intolerance', 'Statins for dyslipidemia', 'ACE inhibitors or ARBs for hypertension', 'GLP-1 agonists for weight loss'],
      procedures: ['Bariatric surgery in severe obesity (BMI ≥40)'],
      lifestyle: ['Weight loss 7-10% of body weight', 'Mediterranean or DASH diet', '150 min/week moderate aerobic exercise', 'Resistance training 2x/week', 'Smoking cessation', 'Limit alcohol', 'Adequate sleep 7-9 hours']
    },
    emergencySigns: ['Severe hypertensive crisis (BP >180/120)', 'Acute coronary syndrome symptoms', 'Stroke symptoms', 'Diabetic ketoacidosis or hyperosmolar state'],
    patientExplanation: 'Metabolic syndrome is not a single disease but a collection of risk factors that often occur together. Think of it as your body struggling to process food energy efficiently, leading to high blood sugar, abnormal cholesterol, high blood pressure, and weight around your midsection. The good news is that lifestyle changes can reverse these conditions and significantly reduce your risk of heart disease and diabetes.',
    patientExplanationEs: 'El sindrome metabolico no es una sola enfermedad, sino una coleccion de factores de riesgo que a menudo ocurren juntos. Pienselo como su cuerpo luchando para procesar la energia de los alimentos de manera eficiente, lo que lleva a azucar alta en sangre, colesterol anormal, presion arterial alta y peso alrededor de la seccion media. La buena noticia es que los cambios en el estilo de vida pueden revertir estas condiciones y reducir significativamente su riesgo de enfermedades cardiacas y diabetes.'
  },

  'hyperlipidemia': {
    id: 'hyperlipidemia',
    name: 'Hyperlipidemia/Dyslipidemia',
    nameEs: 'Hiperlipidemia/Dislipidemia',
    category: 'lipid-disorder',
    icd11: '5C80',
    description: 'Elevated blood lipids including cholesterol and triglycerides, increasing atherosclerosis and cardiovascular disease risk. May be primary (genetic) or secondary to lifestyle, medications, or other conditions.',
    descriptionEs: 'Lipidos en sangre elevados incluyendo colesterol y trigliceridos, aumentando el riesgo de aterosclerosis y enfermedad cardiovascular. Puede ser primaria (genetica) o secundaria al estilo de vida, medicamentos u otras condiciones.',
    riskFactors: ['High saturated fat diet', 'Obesity', 'Physical inactivity', 'Smoking', 'Diabetes', 'Hypothyroidism', 'Family history', 'Genetic disorders (familial hypercholesterolemia)', 'Certain medications (steroids, beta-blockers)'],
    pathophysiology: 'Elevated LDL cholesterol infiltrates arterial walls, undergoes oxidation, and triggers inflammatory response leading to atherosclerotic plaque formation. High triglycerides indicate impaired lipid clearance and contribute to endothelial dysfunction and pancreatitis risk.',
    pathophysiologyEs: 'El colesterol LDL elevado se infiltra en las paredes arteriales, sufre oxidacion y desencadena una respuesta inflamatoria que conduce a la formacion de placa aterosclerotica. Los trigliceridos altos indican deterioro en la eliminacion de lipidos y contribuyen a la disfuncion endotelial y riesgo de pancreatitis.',
    symptoms: ['Usually asymptomatic', 'Xanthomas (cholesterol deposits in skin)', 'Xanthelasma (yellowish deposits around eyelids)', 'Corneal arcus (white ring around cornea)', 'Severe: pancreatitis symptoms if TG >1000'],
    diagnostics: {
      tests: ['Fasting lipid panel (total cholesterol, LDL, HDL, triglycerides)', 'Non-HDL cholesterol', 'Apolipoprotein B', 'Lipoprotein(a)', 'Genetic testing if familial hypercholesterolemia suspected'],
      imaging: ['Coronary calcium score in intermediate risk', 'Carotid ultrasound for plaque burden'],
      criteria: ['LDL ≥160 mg/dL (high)', 'HDL <40 (M) /<50 (F)', 'TG ≥150 mg/dL', 'ASCVD risk calculator >7.5% for treatment consideration']
    },
    treatment: {
      medications: ['Statins (atorvastatin, rosuvastatin) - first-line', 'Ezetimibe', 'PCSK9 inhibitors (evolocumab, alirocumab)', 'Fibrates for high triglycerides', 'Omega-3 fatty acids (icosapent ethyl)', 'Bempedoic acid'],
      procedures: ['LDL apheresis in severe familial hypercholesterolemia', 'Bariatric surgery if obesity-related'],
      lifestyle: ['Low saturated fat diet (<7% calories)', 'Increase soluble fiber', 'Plant sterols/stanols', 'Weight loss if overweight', 'Regular aerobic exercise', 'Smoking cessation', 'Limit alcohol']
    },
    emergencySigns: ['Acute pancreatitis (severe abdominal pain, nausea, vomiting)', 'Acute coronary syndrome', 'Stroke or TIA', 'Peripheral arterial occlusion'],
    patientExplanation: 'High cholesterol means too much fat circulating in your blood, which can stick to artery walls and form blockages over time, like rust building up in pipes. LDL is the "bad" cholesterol that deposits in arteries, while HDL is "good" cholesterol that helps remove it. Statins are highly effective medications that reduce cholesterol production in your liver, significantly lowering heart attack and stroke risk.',
    patientExplanationEs: 'El colesterol alto significa demasiada grasa circulando en su sangre, que puede adherirse a las paredes arteriales y formar bloqueos con el tiempo, como oxido acumulandose en tuberias. El LDL es el colesterol "malo" que se deposita en las arterias, mientras que el HDL es el colesterol "bueno" que ayuda a eliminarlo. Las estatinas son medicamentos altamente efectivos que reducen la produccion de colesterol en su higado, disminuyendo significativamente el riesgo de ataque cardiaco y derrame cerebral.'
  },

  'obesity': {
    id: 'obesity',
    name: 'Obesity (Clinical)',
    nameEs: 'Obesidad (Clinica)',
    category: 'obesity',
    icd11: '5B81',
    description: 'Excess body fat accumulation (BMI ≥30) that impairs health and increases risk of numerous chronic diseases. Results from complex interaction of genetics, environment, behavior, and metabolism.',
    descriptionEs: 'Acumulacion excesiva de grasa corporal (IMC ≥30) que deteriora la salud y aumenta el riesgo de numerosas enfermedades cronicas. Resulta de una interaccion compleja de genetica, ambiente, comportamiento y metabolismo.',
    riskFactors: ['High-calorie diet', 'Physical inactivity', 'Genetic predisposition', 'Sleep deprivation', 'Stress and depression', 'Medications (antipsychotics, steroids)', 'Endocrine disorders (hypothyroidism, Cushing)', 'Lower socioeconomic status'],
    pathophysiology: 'Chronic positive energy balance leads to adipose tissue expansion. Hypertrophic adipocytes become dysfunctional, secreting pro-inflammatory adipokines and causing insulin resistance, oxidative stress, and systemic inflammation that drive comorbidities.',
    pathophysiologyEs: 'El balance energetico positivo cronico conduce a la expansion del tejido adiposo. Los adipocitos hipertroficos se vuelven disfuncionales, secretando adipoquinas proinflamatorias y causando resistencia a la insulina, estres oxidativo e inflamacion sistemica que impulsan comorbilidades.',
    symptoms: ['Increased body weight', 'Excess abdominal fat', 'Shortness of breath with exertion', 'Joint pain', 'Sleep apnea symptoms', 'Fatigue', 'Depression or low self-esteem', 'Skin fold infections'],
    diagnostics: {
      tests: ['BMI calculation (weight/height²)', 'Waist circumference', 'Body composition analysis', 'Screen for comorbidities: fasting glucose, lipids, liver enzymes, thyroid function'],
      imaging: ['DEXA scan for body composition', 'Abdominal ultrasound for hepatic steatosis'],
      criteria: ['BMI ≥30 kg/m² (obesity)', 'BMI ≥35 with comorbidities (class II)', 'BMI ≥40 (class III/severe)', 'Waist >40in (M) />35in (F) indicates central obesity']
    },
    treatment: {
      medications: ['GLP-1 agonists (semaglutide, liraglutide)', 'GIP/GLP-1 agonist (tirzepatide)', 'Phentermine-topiramate', 'Naltrexone-bupropion', 'Orlistat'],
      procedures: ['Bariatric surgery: Roux-en-Y gastric bypass, sleeve gastrectomy, adjustable gastric band', 'Endoscopic procedures (intragastric balloon)'],
      lifestyle: ['Caloric deficit 500-1000 kcal/day', 'Behavioral weight loss programs', 'Meal planning and portion control', 'Progressive exercise program', 'Sleep hygiene', 'Stress management', 'Address emotional eating']
    },
    emergencySigns: ['Obesity hypoventilation syndrome (severe dyspnea, cyanosis)', 'Acute weight-related cardiac decompensation', 'Severe sleep apnea with hypoxemia', 'Inability to perform ADLs'],
    patientExplanation: 'Obesity is a chronic medical condition, not simply a lack of willpower. Your body has complex systems that regulate hunger, fullness, and metabolism, and these can become disrupted. Successful treatment usually requires a combination approach: sustainable dietary changes, regular physical activity, behavioral strategies, and sometimes medications or surgery. Even modest weight loss of 5-10% can significantly improve your health.',
    patientExplanationEs: 'La obesidad es una condicion medica cronica, no simplemente falta de fuerza de voluntad. Su cuerpo tiene sistemas complejos que regulan el hambre, la saciedad y el metabolismo, y estos pueden alterarse. El tratamiento exitoso generalmente requiere un enfoque combinado: cambios dieteticos sostenibles, actividad fisica regular, estrategias conductuales y, a veces, medicamentos o cirugia. Incluso una perdida de peso modesta del 5-10% puede mejorar significativamente su salud.'
  },

  'gout': {
    id: 'gout',
    name: 'Gout',
    nameEs: 'Gota',
    category: 'purine-disorder',
    icd11: 'FA25.0',
    description: 'Inflammatory arthritis caused by monosodium urate crystal deposition in joints and tissues due to chronic hyperuricemia. Characterized by sudden, severe attacks of joint pain, most commonly affecting the first metatarsophalangeal joint.',
    descriptionEs: 'Artritis inflamatoria causada por deposicion de cristales de urato monosodico en articulaciones y tejidos debido a hiperuricemia cronica. Caracterizada por ataques subitos y severos de dolor articular, afectando mas comunmente la primera articulacion metatarsofalangica.',
    riskFactors: ['Male sex', 'Obesity', 'High purine diet (red meat, seafood)', 'Alcohol consumption (especially beer)', 'Diuretics', 'Chronic kidney disease', 'Family history', 'Metabolic syndrome', 'Dehydration'],
    pathophysiology: 'Uric acid overproduction or underexcretion leads to hyperuricemia. When serum urate exceeds saturation point, monosodium urate crystals precipitate in joints and tissues. Crystals activate NLRP3 inflammasome, triggering intense neutrophilic inflammatory response.',
    pathophysiologyEs: 'La sobreproduccion o subexcrecion de acido urico conduce a hiperuricemia. Cuando el urato serico excede el punto de saturacion, los cristales de urato monosodico se precipitan en articulaciones y tejidos. Los cristales activan el inflamasoma NLRP3, desencadenando una respuesta inflamatoria neutrofilica intensa.',
    symptoms: ['Sudden severe joint pain (often at night)', 'Swelling and warmth', 'Red, shiny skin over joint', 'First MTP joint most common (podagra)', 'Limited range of motion', 'Tophi (chronic deposits) in ears, fingers, elbows'],
    diagnostics: {
      tests: ['Serum uric acid (may be normal during acute attack)', 'Synovial fluid analysis: needle-shaped negatively birefringent crystals', 'CBC (elevated WBC)', 'ESR/CRP elevated', 'Renal function tests'],
      imaging: ['X-ray: punched-out erosions, overhanging edge', 'Ultrasound: double contour sign', 'Dual-energy CT: urate crystal deposition'],
      criteria: ['ACR/EULAR 2015 criteria: clinical + crystal confirmation or imaging', 'Acute monoarthritis with characteristic features']
    },
    treatment: {
      medications: ['Acute: NSAIDs (indomethacin), colchicine, or corticosteroids', 'Urate-lowering: allopurinol (first-line), febuxostat', 'Prophylaxis during initiation: colchicine or low-dose NSAIDs', 'Pegloticase for refractory cases'],
      procedures: ['Joint aspiration for diagnosis and symptom relief', 'Rarely: surgical removal of large tophi'],
      lifestyle: ['Low-purine diet: limit red meat, organ meats, shellfish', 'Limit alcohol especially beer', 'Weight loss if overweight', 'Adequate hydration', 'Avoid high-fructose corn syrup', 'Coffee and vitamin C may be protective']
    },
    emergencySigns: ['Septic arthritis (fever, extreme pain, inability to bear weight)', 'Polyarticular gout affecting multiple joints', 'Acute kidney injury from uric acid nephropathy'],
    patientExplanation: 'Gout happens when uric acid (a waste product from breaking down certain foods) builds up in your blood and forms sharp crystals in your joints, like tiny shards of glass. This causes sudden, extremely painful attacks, often in your big toe. The good news is gout is very treatable. Medications can both stop acute attacks and lower uric acid levels to prevent future flares completely.',
    patientExplanationEs: 'La gota ocurre cuando el acido urico (un producto de desecho de descomponer ciertos alimentos) se acumula en su sangre y forma cristales afilados en sus articulaciones, como pequenos fragmentos de vidrio. Esto causa ataques subitos extremadamente dolorosos, a menudo en su dedo gordo del pie. La buena noticia es que la gota es muy tratable. Los medicamentos pueden detener los ataques agudos y reducir los niveles de acido urico para prevenir brotes futuros completamente.'
  },

  'phenylketonuria': {
    id: 'phenylketonuria',
    name: 'Phenylketonuria (PKU)',
    nameEs: 'Fenilcetonuria (FCU)',
    category: 'genetic-metabolic',
    icd11: '5C50.0',
    description: 'Autosomal recessive genetic disorder causing deficiency of phenylalanine hydroxylase enzyme, leading to toxic accumulation of phenylalanine. Detected through newborn screening; untreated PKU causes severe intellectual disability.',
    descriptionEs: 'Trastorno genetico autosomico recesivo que causa deficiencia de la enzima fenilalanina hidroxilasa, conduciendo a acumulacion toxica de fenilalanina. Detectado mediante tamizaje neonatal; la FCU no tratada causa discapacidad intelectual severa.',
    riskFactors: ['Autosomal recessive inheritance (both parents carriers)', 'Consanguinity', 'Certain ethnic backgrounds (Irish, Turkish)', 'Family history of PKU'],
    pathophysiology: 'Mutations in PAH gene result in deficient or absent phenylalanine hydroxylase, preventing conversion of phenylalanine to tyrosine. Elevated phenylalanine is neurotoxic, disrupts neurotransmitter synthesis, and impairs myelin formation, causing cognitive impairment if untreated.',
    pathophysiologyEs: 'Las mutaciones en el gen PAH resultan en fenilalanina hidroxilasa deficiente o ausente, impidiendo la conversion de fenilalanina a tirosina. La fenilalanina elevada es neurotoxica, interrumpe la sintesis de neurotransmisores y deteriora la formacion de mielina, causando deterioro cognitivo si no se trata.',
    symptoms: ['If untreated: developmental delays, intellectual disability, seizures, behavioral problems', 'Musty or mousy body odor', 'Fair skin and hair (reduced melanin)', 'Eczema', 'Microcephaly'],
    diagnostics: {
      tests: ['Newborn screening (Guthrie test) - blood phenylalanine', 'Plasma amino acid analysis', 'Phenylalanine:tyrosine ratio', 'PAH gene sequencing', 'BH4 loading test for responsive variant'],
      imaging: ['MRI brain: white matter changes if poorly controlled'],
      criteria: ['Blood phenylalanine >360 umol/L (6 mg/dL) on two occasions', 'Genetic confirmation of PAH mutations']
    },
    treatment: {
      medications: ['Sapropterin (BH4) for BH4-responsive PKU', 'Pegvaliase (enzyme substitution) for adults', 'Large neutral amino acid supplements'],
      procedures: ['None surgical'],
      lifestyle: ['Strict low-phenylalanine diet (avoid high-protein foods)', 'Medical formula/supplements for protein needs', 'Frequent monitoring of blood phe levels', 'Lifelong dietary management', 'Special considerations for pregnancy in women with PKU']
    },
    emergencySigns: ['Severely elevated phenylalanine levels', 'Seizures', 'Acute neurological deterioration', 'Pregnancy in woman with uncontrolled PKU (maternal PKU syndrome risk)'],
    patientExplanation: 'PKU is a genetic condition where your body cannot break down phenylalanine, a building block of protein found in most foods. Without treatment, phenylalanine builds up and damages the brain. The treatment is a special low-protein diet with medical formulas that provide nutrients without phenylalanine. With early diagnosis and strict dietary management, people with PKU can live completely normal, healthy lives.',
    patientExplanationEs: 'La FCU es una condicion genetica donde su cuerpo no puede descomponer la fenilalanina, un componente basico de la proteina que se encuentra en la mayoria de los alimentos. Sin tratamiento, la fenilalanina se acumula y dana el cerebro. El tratamiento es una dieta especial baja en proteinas con formulas medicas que proporcionan nutrientes sin fenilalanina. Con diagnostico temprano y manejo dietetico estricto, las personas con FCU pueden vivir vidas completamente normales y saludables.'
  },

  'hemochromatosis': {
    id: 'hemochromatosis',
    name: 'Hemochromatosis',
    nameEs: 'Hemocromatosis',
    category: 'iron-disorder',
    icd11: '3A00.0',
    description: 'Hereditary disorder causing excessive iron absorption and tissue deposition, leading to organ damage. Most commonly due to HFE gene mutations. Early detection and treatment prevent complications.',
    descriptionEs: 'Trastorno hereditario que causa absorcion excesiva de hierro y deposito tisular, conduciendo a dano organico. Mas comunmente debido a mutaciones del gen HFE. La deteccion y tratamiento tempranos previenen complicaciones.',
    riskFactors: ['Northern European ancestry', 'Family history', 'Male sex (earlier manifestation)', 'C282Y/C282Y HFE mutation (homozygous)', 'Excessive alcohol consumption', 'Hepatitis C'],
    pathophysiology: 'HFE mutations impair hepcidin production, causing unregulated iron absorption in duodenum. Excess iron deposits as hemosiderin in liver, pancreas, heart, and joints, generating reactive oxygen species that cause cellular damage, fibrosis, and organ dysfunction.',
    pathophysiologyEs: 'Las mutaciones HFE deterioran la produccion de hepcidina, causando absorcion de hierro no regulada en el duodeno. El hierro en exceso se deposita como hemosiderina en higado, pancreas, corazon y articulaciones, generando especies reactivas de oxigeno que causan dano celular, fibrosis y disfuncion organica.',
    symptoms: ['Often asymptomatic until age 40-60', 'Fatigue and weakness', 'Joint pain (especially knuckles)', 'Abdominal pain', 'Loss of libido', 'Bronze skin pigmentation', 'Diabetes symptoms', 'Heart failure or arrhythmias'],
    diagnostics: {
      tests: ['Fasting transferrin saturation >45%', 'Elevated serum ferritin', 'HFE genetic testing (C282Y, H63D)', 'Liver function tests', 'Fasting glucose or HbA1c'],
      imaging: ['MRI liver: iron quantification (T2* or FerriScan)', 'Echocardiography if cardiac symptoms', 'Liver ultrasound or elastography'],
      criteria: ['Transferrin saturation ≥45% on two occasions', 'Elevated ferritin + genetic confirmation', 'Liver biopsy rarely needed now']
    },
    treatment: {
      medications: ['Iron chelation (deferoxamine, deferasirox) if phlebotomy contraindicated', 'Treat complications: diabetes management, heart failure meds'],
      procedures: ['Therapeutic phlebotomy (first-line): weekly until ferritin <50, then maintenance', 'Liver transplant in end-stage cirrhosis'],
      lifestyle: ['Avoid iron supplements and fortified foods', 'Avoid vitamin C supplements (increase iron absorption)', 'Limit alcohol', 'Avoid raw shellfish (infection risk)', 'Regular monitoring', 'Screen first-degree relatives']
    },
    emergencySigns: ['Acute liver failure', 'Severe heart failure or life-threatening arrhythmias', 'Diabetic ketoacidosis', 'Signs of hepatocellular carcinoma'],
    patientExplanation: 'Hemochromatosis causes your body to absorb too much iron from food, and the excess builds up in organs like your liver, heart, and pancreas, potentially damaging them over time. Think of it like rust building up in machinery. The treatment is straightforward: regular blood removal (phlebotomy), similar to donating blood. This simple procedure effectively removes excess iron and prevents organ damage when started early.',
    patientExplanationEs: 'La hemocromatosis hace que su cuerpo absorba demasiado hierro de los alimentos, y el exceso se acumula en organos como su higado, corazon y pancreas, danandolos potencialmente con el tiempo. Pienselo como oxido acumulandose en maquinaria. El tratamiento es sencillo: extraccion regular de sangre (flebotomia), similar a donar sangre. Este procedimiento simple elimina efectivamente el exceso de hierro y previene el dano organico cuando se comienza temprano.'
  }
};

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function searchMetabolicConditions(query: string): MetabolicConditionEntry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(METABOLIC_CONDITIONS).filter(condition =>
    condition.name.toLowerCase().includes(lowerQuery) ||
    condition.nameEs.toLowerCase().includes(lowerQuery) ||
    condition.description.toLowerCase().includes(lowerQuery) ||
    condition.descriptionEs.toLowerCase().includes(lowerQuery) ||
    condition.symptoms.some(s => s.toLowerCase().includes(lowerQuery))
  );
}

export function getMetabolicConditionById(id: string): MetabolicConditionEntry | undefined {
  return METABOLIC_CONDITIONS[id];
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export default METABOLIC_CONDITIONS;
