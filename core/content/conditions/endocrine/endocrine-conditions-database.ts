/**
 * Endocrine Conditions Database
 *
 * Comprehensive reference of endocrine conditions with clinical summaries,
 * bilingual names (English/Spanish), ICD-11 codes, patient education, and
 * treatment guidance.
 *
 * SOMA Medical Education Platform
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EndocrineCategory =
  | 'diabetes'
  | 'thyroid'
  | 'adrenal'
  | 'pituitary'
  | 'parathyroid'
  | 'metabolic';

export interface EndocrineConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: EndocrineCategory;
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

export const ENDOCRINE_CONDITIONS: Record<string, EndocrineConditionEntry> = {

  't2dm': {
    id: 't2dm',
    name: 'Type 2 Diabetes Mellitus',
    nameEs: 'Diabetes Mellitus Tipo 2',
    category: 'diabetes',
    icd11: '5A11',
    description: 'Chronic metabolic disorder with insulin resistance and relative insulin deficiency causing hyperglycemia. Accounts for 90-95% of diabetes cases.',
    descriptionEs: 'Trastorno metabólico crónico con resistencia a la insulina y deficiencia relativa de insulina que causa hiperglucemia. Representa 90-95% de los casos.',
    riskFactors: [
      'Obesity (BMI >30)',
      'Family history of diabetes',
      'Age >45 years',
      'Sedentary lifestyle',
      'Polycystic ovary syndrome (PCOS)',
      'History of gestational diabetes',
      'Hispanic, African American, Native American, Asian American ethnicity',
      'Hypertension',
      'Dyslipidemia'
    ],
    pathophysiology: 'Insulin resistance in peripheral tissues combined with progressive beta-cell dysfunction causes chronic hyperglycemia. Impaired glucose uptake and continued hepatic glucose production lead to sustained high blood sugar.',
    pathophysiologyEs: 'Resistencia a la insulina en tejidos periféricos combinada con disfunción progresiva de células beta causa hiperglucemia crónica. Captación de glucosa deteriorada y producción hepática continua causan azúcar alta sostenida.',
    symptoms: ['Polyuria', 'Polydipsia', 'Polyphagia', 'Unintentional weight loss', 'Fatigue', 'Blurred vision', 'Slow-healing wounds', 'Recurrent infections', 'Acanthosis nigricans'],
    diagnostics: {
      tests: ['Fasting glucose ≥126 mg/dL', 'HbA1c ≥6.5%', 'Random glucose ≥200 mg/dL with symptoms', '2hr-OGTT ≥200 mg/dL', 'Lipid panel', 'CMP', 'Urinalysis'],
      imaging: ['Retinal exam (retinopathy screening)', 'Foot exam (neuropathy)', 'Cardiac stress test if indicated'],
      criteria: [
        'ADA diagnostic criteria: FPG ≥126 mg/dL or HbA1c ≥6.5% or 2hr-OGTT ≥200 mg/dL or random glucose ≥200 mg/dL with symptoms'
      ]
    },
    treatment: {
      medications: ['Metformin 500-2000mg daily (first-line)', 'SGLT2 inhibitors (empagliflozin)', 'GLP-1 agonists (semaglutide)', 'DPP-4 inhibitors (sitagliptin)', 'Sulfonylureas (glipizide)', 'Insulin (basal/prandial)', 'Aspirin 81mg', 'Statin', 'ACE-I/ARB if indicated'],
      procedures: ['Bariatric surgery (BMI ≥35)', 'CGM', 'Insulin pump'],
      lifestyle: ['Weight loss (7-10%)', 'Mediterranean/DASH diet', 'Carb counting', '150 min/week exercise', 'Resistance training 2-3x/week', 'Smoking cessation', 'Limit alcohol', 'Foot care']
    },
    emergencySigns: ['Glucose >400 mg/dL', 'DKA (nausea, fruity breath, confusion)', 'HHS (severe dehydration, altered mental status)', 'Severe hypoglycemia (<70 with altered consciousness)', 'Chest pain', 'Vision loss', 'Infected foot ulcer'],
    patientExplanation: 'Type 2 diabetes means your body has trouble using insulin properly, like a key that no longer fits the lock perfectly. Your pancreas still makes insulin, but your cells resist it. This causes sugar to build up in your blood instead of entering cells for energy. Over time, high blood sugar damages blood vessels and nerves throughout your body. The good news is that type 2 diabetes can often be controlled—and sometimes reversed—with lifestyle changes, especially weight loss and exercise. Medications help lower blood sugar and protect your heart and kidneys. Regular monitoring, healthy eating, and staying active are key to preventing complications.',
    patientExplanationEs: 'La diabetes tipo 2 significa que su cuerpo tiene problemas para usar la insulina adecuadamente, como una llave que ya no encaja perfectamente en la cerradura. Su páncreas todavía produce insulina, pero sus células se resisten a ella. Esto hace que el azúcar se acumule en la sangre en lugar de entrar en las células para obtener energía. Con el tiempo, el azúcar alto en la sangre daña los vasos sanguíneos y los nervios en todo el cuerpo. La buena noticia es que la diabetes tipo 2 a menudo se puede controlar, y a veces revertir, con cambios en el estilo de vida, especialmente pérdida de peso y ejercicio. Los medicamentos ayudan a reducir el azúcar en la sangre y proteger su corazón y riñones. El monitoreo regular, una alimentación saludable y mantenerse activo son clave para prevenir complicaciones.'
  },

  'hypothyroidism': {
    id: 'hypothyroidism',
    name: 'Hypothyroidism (Hashimoto\'s Thyroiditis)',
    nameEs: 'Hipotiroidismo (Tiroiditis de Hashimoto)',
    category: 'thyroid',
    icd11: '5A00.0',
    description: 'Autoimmune disorder causing chronic thyroid inflammation and destruction, leading to insufficient hormone production. Most common cause of hypothyroidism.',
    descriptionEs: 'Trastorno autoinmune que causa inflamación y destrucción tiroidea crónica, resultando en producción hormonal insuficiente. Causa más común de hipotiroidismo.',
    riskFactors: [
      'Female sex (7-10x more common)',
      'Age 30-50 years',
      'Family history of thyroid disease',
      'Other autoimmune conditions (Type 1 diabetes, celiac disease, vitiligo, RA)',
      'Pregnancy or postpartum period',
      'Excessive iodine intake',
      'Radiation exposure to neck'
    ],
    pathophysiology: 'Autoantibodies attack thyroid tissue causing progressive follicle destruction and reduced T4/T3 synthesis. Low thyroid hormones trigger elevated TSH, but damaged gland cannot respond.',
    pathophysiologyEs: 'Autoanticuerpos atacan tejido tiroideo causando destrucción progresiva de folículos y síntesis reducida de T4/T3. Hormonas bajas provocan TSH elevado, pero glándula dañada no responde.',
    symptoms: ['Fatigue', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin/brittle hair', 'Hair loss', 'Facial puffiness', 'Bradycardia', 'Depression', 'Menstrual irregularities', 'Muscle aches', 'Goiter'],
    diagnostics: {
      tests: ['TSH (elevated >4.5)', 'Free T4 (low <0.8)', 'Anti-TPO antibodies', 'Anti-thyroglobulin Ab', 'CBC', 'Lipid panel'],
      imaging: ['Thyroid ultrasound', 'Radioactive iodine uptake (if unclear)'],
      criteria: ['Primary: TSH >10 with low T4', 'Subclinical: TSH 4.5-10 with normal T4']
    },
    treatment: {
      medications: ['Levothyroxine 1.6 mcg/kg/day (50-100 mcg)', 'Take on empty stomach 30-60 min before breakfast', 'Avoid Ca/Fe supplements within 4hrs', 'Titrate by TSH q6-8 weeks'],
      procedures: ['Thyroidectomy (rare, for large goiter)'],
      lifestyle: ['Consistent levothyroxine timing', 'Regular exercise', 'Selenium-rich diet', 'Adequate iodine', 'Stress management', 'Regular sleep']
    },
    emergencySigns: ['Myxedema coma (hypothermia, altered mental status, respiratory failure)', 'Severe facial/throat swelling', 'Chest pain/palpitations', 'Severe depression/suicidal thoughts'],
    patientExplanation: 'Hashimoto\'s thyroiditis is when your immune system mistakenly attacks your thyroid gland, the small butterfly-shaped gland in your neck that controls your metabolism. As the gland becomes damaged, it cannot make enough thyroid hormone, causing your body to slow down—you may feel tired, gain weight, feel cold, and have trouble concentrating. Treatment is simple: a daily thyroid hormone pill (levothyroxine) replaces what your thyroid can no longer make. Most people feel significantly better within weeks of starting medication. You\'ll need regular blood tests to ensure your dose is correct. With proper treatment, you can live a completely normal, active life.',
    patientExplanationEs: 'La tiroiditis de Hashimoto es cuando su sistema inmunológico ataca por error su glándula tiroides, la pequeña glándula en forma de mariposa en su cuello que controla su metabolismo. A medida que la glándula se daña, no puede producir suficiente hormona tiroidea, lo que hace que su cuerpo se ralentice: puede sentirse cansado, aumentar de peso, sentir frío y tener problemas para concentrarse. El tratamiento es simple: una pastilla diaria de hormona tiroidea (levotiroxina) reemplaza lo que su tiroides ya no puede producir. La mayoría de las personas se sienten significativamente mejor a las pocas semanas de comenzar el medicamento. Necesitará análisis de sangre regulares para asegurarse de que su dosis sea correcta. Con el tratamiento adecuado, puede llevar una vida completamente normal y activa.'
  },

  'hyperthyroidism-graves': {
    id: 'hyperthyroidism-graves',
    name: 'Hyperthyroidism (Graves\' Disease)',
    nameEs: 'Hipertiroidismo (Enfermedad de Graves)',
    category: 'thyroid',
    icd11: '5A02.0',
    description: 'Autoimmune disorder where antibodies overstimulate thyroid hormone production, causing diffuse enlargement and hypermetabolism. Most common cause of hyperthyroidism.',
    descriptionEs: 'Trastorno autoinmune donde anticuerpos sobreestimulan producción de hormona tiroidea, causando agrandamiento difuso e hipermetabolismo. Causa más común de hipertiroidismo.',
    riskFactors: [
      'Female sex (5-10x more common)',
      'Age 20-50 years',
      'Family history of thyroid disease',
      'Other autoimmune diseases',
      'Smoking (increases risk and severity)',
      'Stress or viral infection (triggers)',
      'Postpartum period',
      'High iodine intake'
    ],
    pathophysiology: 'TSI antibodies activate TSH receptors causing autonomous hormone synthesis independent of feedback. Excess T4/T3 increase metabolism, cardiac output, and sympathetic activity.',
    pathophysiologyEs: 'Anticuerpos TSI activan receptores TSH causando síntesis hormonal autónoma independiente de retroalimentación. Exceso de T4/T3 aumenta metabolismo, gasto cardíaco y actividad simpática.',
    symptoms: ['Weight loss despite appetite', 'Tachycardia/palpitations', 'Heat intolerance/sweating', 'Hand tremor', 'Anxiety/irritability', 'Insomnia', 'Diarrhea', 'Proximal muscle weakness', 'Diffuse goiter', 'Ophthalmopathy (bulging eyes)', 'Pretibial myxedema', 'Menstrual irregularities'],
    diagnostics: {
      tests: ['TSH suppressed (<0.1)', 'Free T4/T3 elevated', 'TSI antibodies positive', 'Radioactive iodine uptake (elevated)', 'CBC', 'LFTs'],
      imaging: ['Thyroid US with Doppler', 'Radioiodine scan', 'Orbital MRI/CT (if severe ophthalmopathy)'],
      criteria: ['Suppressed TSH, elevated T4/T3, positive TSI, diffuse goiter, ± ophthalmopathy']
    },
    treatment: {
      medications: ['Methimazole 10-40mg daily', 'PTU 100-150mg TID (pregnancy/storm)', 'Beta-blockers (propranolol/atenolol)', 'Corticosteroids (severe ophthalmopathy)'],
      procedures: ['Radioactive iodine (I-131) ablation', 'Thyroidectomy', 'Orbital decompression (if severe)'],
      lifestyle: ['Smoking cessation', 'High calorie/protein diet', 'Ca/Vit D supplementation', 'Stress reduction', 'Avoid excess iodine', 'Regular eye exams', 'Cool environment']
    },
    emergencySigns: ['Thyroid storm (fever >103°F, severe tachycardia, confusion, HF)', 'Atrial fibrillation with RVR', 'Chest pain/MI symptoms', 'Vision loss/severe eye pain', 'Severe dyspnea', 'Altered mental status'],
    patientExplanation: 'Graves\' disease occurs when your immune system creates antibodies that tell your thyroid gland to work overtime, producing too much thyroid hormone. This speeds up your metabolism like an engine running too fast—you may lose weight, feel anxious and jittery, have a rapid heartbeat, and feel hot all the time. Some people also develop bulging or irritated eyes. There are three main treatment options: antithyroid medications to slow hormone production, radioactive iodine to permanently reduce thyroid function, or surgery to remove the gland. Most patients eventually need lifelong thyroid hormone replacement. With treatment, symptoms improve significantly within weeks to months.',
    patientExplanationEs: 'La enfermedad de Graves ocurre cuando su sistema inmunológico crea anticuerpos que le dicen a su glándula tiroides que trabaje horas extras, produciendo demasiada hormona tiroidea. Esto acelera su metabolismo como un motor que funciona demasiado rápido: puede perder peso, sentirse ansioso y nervioso, tener latidos cardíacos rápidos y sentir calor todo el tiempo. Algunas personas también desarrollan ojos saltones o irritados. Hay tres opciones principales de tratamiento: medicamentos antitiroideos para disminuir la producción de hormonas, yodo radiactivo para reducir permanentemente la función tiroidea, o cirugía para extirpar la glándula. La mayoría de los pacientes eventualmente necesitan reemplazo de hormona tiroidea de por vida. Con el tratamiento, los síntomas mejoran significativamente en semanas o meses.'
  },

  'cushings-syndrome': {
    id: 'cushings-syndrome',
    name: 'Cushing\'s Syndrome',
    nameEs: 'Síndrome de Cushing',
    category: 'adrenal',
    icd11: '5A70.0',
    description: 'Disorder from chronic cortisol excess (endogenous or exogenous), causing characteristic physical changes and metabolic complications.',
    descriptionEs: 'Trastorno por exceso crónico de cortisol (endógeno o exógeno), causando cambios físicos característicos y complicaciones metabólicas.',
    riskFactors: [
      'Chronic high-dose glucocorticoid therapy (most common cause)',
      'Pituitary adenoma (Cushing\'s disease - 70% of endogenous cases)',
      'Adrenal tumor (adenoma or carcinoma)',
      'Ectopic ACTH production (small cell lung cancer, carcinoid tumors)',
      'Female sex (3x more common)',
      'Age 25-40 years'
    ],
    pathophysiology: 'Excess cortisol from pituitary/ectopic ACTH, adrenal tumors, or exogenous steroids causes protein catabolism, central fat redistribution, insulin resistance, hypertension, and bone resorption.',
    pathophysiologyEs: 'Exceso de cortisol por ACTH pituitaria/ectópica, tumores suprarrenales o esteroides exógenos causa catabolismo proteico, redistribución de grasa central, resistencia a insulina, hipertensión y resorción ósea.',
    symptoms: ['Central obesity/thin extremities', 'Moon facies', 'Buffalo hump', 'Purple striae', 'Skin thinning/bruising', 'Proximal weakness', 'Hypertension', 'Hyperglycemia/diabetes', 'Osteoporosis', 'Mood changes', 'Hirsutism/acne', 'Menstrual irregularities', 'Poor wound healing', 'Increased infections'],
    diagnostics: {
      tests: ['24hr urine free cortisol (>100)', 'Late-night salivary cortisol', 'Low-dose dex suppression test', 'Morning ACTH', 'High-dose dex test', 'CRH stimulation', 'Glucose/HbA1c', 'Lipids', 'CBC', 'BMP'],
      imaging: ['Pituitary MRI', 'Adrenal CT/MRI', 'Chest/abdominal CT (ectopic source)', 'DEXA scan', 'IPSS (pituitary vs. ectopic)'],
      criteria: ['Demonstrate hypercortisolism (≥2 tests), then determine ACTH-dependent vs. independent']
    },
    treatment: {
      medications: ['Ketoconazole 200-400mg BID', 'Metyrapone 250-1000mg TID-QID', 'Mitotane 0.5-3g daily', 'Pasireotide', 'Mifepristone', 'Antihypertensives', 'Diabetes meds', 'Bisphosphonates', 'Hydrocortisone post-surgery'],
      procedures: ['Transsphenoidal surgery (pituitary)', 'Adrenalectomy', 'Tumor resection (ectopic)', 'Pituitary radiation', 'Bilateral adrenalectomy (refractory)'],
      lifestyle: ['Gradual steroid taper (iatrogenic)', 'Low-sodium diet', 'Protein-rich diet', 'Ca/Vit D', 'Weight-bearing exercise', 'Physical therapy', 'Psychological support', 'Infection prevention']
    },
    emergencySigns: ['Adrenal crisis post-treatment (hypotension, shock)', 'Acute fracture', 'Severe infection/sepsis', 'DKA/HHS', 'Hypertensive emergency', 'Acute psychosis/suicidal ideation'],
    patientExplanation: 'Cushing\'s syndrome happens when your body is exposed to too much cortisol hormone for a long time. Cortisol is your "stress hormone," and when levels are too high, it causes weight gain in the face and belly, muscle weakness, fragile skin, easy bruising, high blood sugar, and high blood pressure. The most common cause is taking steroid medications for a long time. Other causes include tumors in the pituitary gland, adrenal glands, or elsewhere in the body. Treatment depends on the cause—it may involve surgery to remove a tumor, medications to block cortisol production, or slowly tapering steroid medications. Recovery takes time; physical changes may take months to years to reverse, but most people improve significantly with proper treatment.',
    patientExplanationEs: 'El síndrome de Cushing ocurre cuando su cuerpo está expuesto a demasiada hormona cortisol durante mucho tiempo. El cortisol es su "hormona del estrés", y cuando los niveles son demasiado altos, causa aumento de peso en la cara y el abdomen, debilidad muscular, piel frágil, moretones fáciles, azúcar alta en la sangre y presión arterial alta. La causa más común es tomar medicamentos esteroides durante mucho tiempo. Otras causas incluyen tumores en la glándula pituitaria, glándulas suprarrenales o en otras partes del cuerpo. El tratamiento depende de la causa: puede implicar cirugía para extirpar un tumor, medicamentos para bloquear la producción de cortisol, o reducir lentamente los medicamentos esteroides. La recuperación lleva tiempo; los cambios físicos pueden tardar meses o años en revertirse, pero la mayoría de las personas mejoran significativamente con el tratamiento adecuado.'
  },

  'addisons-disease': {
    id: 'addisons-disease',
    name: 'Addison\'s Disease (Primary Adrenal Insufficiency)',
    nameEs: 'Enfermedad de Addison (Insuficiencia Suprarrenal Primaria)',
    category: 'adrenal',
    icd11: '5A72.0',
    description: 'Rare disorder from adrenal cortex destruction causing cortisol and aldosterone deficiency. Autoimmune adrenalitis is most common cause (80%).',
    descriptionEs: 'Trastorno raro por destrucción de corteza suprarrenal causando deficiencia de cortisol y aldosterona. Adrenalitis autoinmune es causa más común (80%).',
    riskFactors: [
      'Other autoimmune diseases (Type 1 diabetes, Hashimoto\'s, vitiligo, celiac disease)',
      'Family history of autoimmune disorders',
      'Tuberculosis (common cause in endemic areas)',
      'Fungal infections (histoplasmosis)',
      'HIV/AIDS',
      'Adrenal hemorrhage or infarction',
      'Medications (ketoconazole, etomidate, rifampin)',
      'Adrenoleukodystrophy (genetic disorder)'
    ],
    pathophysiology: 'Adrenal cortex destruction (>90%) causes cortisol, aldosterone, and androgen deficiency. Results in hypoglycemia, hypotension, sodium wasting, and elevated ACTH causing hyperpigmentation.',
    pathophysiologyEs: 'Destrucción de corteza suprarrenal (>90%) causa deficiencia de cortisol, aldosterona y andrógenos. Resulta en hipoglucemia, hipotensión, pérdida de sodio y ACTH elevado causando hiperpigmentación.',
    symptoms: ['Chronic fatigue/weakness', 'Weight loss/decreased appetite', 'Hyperpigmentation (bronzing)', 'Hypotension/orthostatic dizziness', 'Salt craving', 'Nausea/vomiting/diarrhea', 'Abdominal pain', 'Hypoglycemia', 'Depression/irritability', 'Body hair loss (women)', 'Amenorrhea'],
    diagnostics: {
      tests: ['Morning cortisol (<3)', 'ACTH (>200)', 'ACTH stim test (cortisol fails to rise)', 'BMP (hyponatremia, hyperkalemia)', 'Glucose', 'CBC', 'Renin (elevated)', 'Aldosterone (low)', '21-hydroxylase Ab', 'TSH/T4'],
      imaging: ['Abdominal CT (adrenal size)', 'Chest X-ray (TB)', 'Brain MRI (rule out secondary)'],
      criteria: ['Low cortisol, elevated ACTH, abnormal ACTH stim test']
    },
    treatment: {
      medications: ['Hydrocortisone 15-25mg daily (2-3 divided doses)', 'Fludrocortisone 0.05-0.2mg daily', 'Stress dosing: 2-3x during illness', 'DHEA 25-50mg (women)', 'Injectable emergency kit'],
      procedures: ['Emergency IV hydrocortisone 100mg', 'IV fluid resuscitation'],
      lifestyle: ['Medical alert bracelet', 'Emergency injection kit', 'Liberal salt', 'Never skip doses', 'Stress dose education', 'Regular follow-up', 'Adequate hydration', 'Avoid cortisol-interfering meds']
    },
    emergencySigns: ['Adrenal crisis (hypotension/shock, altered mental status, severe N/V)', 'Severe dehydration', 'Hypoglycemia with confusion', 'Syncope', 'Unable to take oral meds', 'Significant illness/injury/surgery'],
    patientExplanation: 'Addison\'s disease means your adrenal glands, small glands on top of your kidneys, are damaged and can no longer make enough cortisol and aldosterone—hormones essential for life. Cortisol helps your body respond to stress and regulates blood sugar and blood pressure. Aldosterone helps balance salt and water. Without them, you feel extremely tired, lose weight, crave salt, and may develop darkened skin. Treatment is lifelong hormone replacement with pills. You must take these medications every day and increase the dose during illness or stress. You should wear a medical alert bracelet and carry an emergency injection kit. With proper treatment and education, people with Addison\'s disease live completely normal lives.',
    patientExplanationEs: 'La enfermedad de Addison significa que sus glándulas suprarrenales, pequeñas glándulas encima de sus riñones, están dañadas y ya no pueden producir suficiente cortisol y aldosterona, hormonas esenciales para la vida. El cortisol ayuda a su cuerpo a responder al estrés y regula el azúcar y la presión arterial. La aldosterona ayuda a equilibrar la sal y el agua. Sin ellas, se siente extremadamente cansado, pierde peso, anhela sal y puede desarrollar piel oscurecida. El tratamiento es reemplazo hormonal de por vida con pastillas. Debe tomar estos medicamentos todos los días y aumentar la dosis durante la enfermedad o el estrés. Debe usar un brazalete de alerta médica y llevar un kit de inyección de emergencia. Con el tratamiento y la educación adecuados, las personas con enfermedad de Addison viven vidas completamente normales.'
  },

  't1dm': {
    id: 't1dm',
    name: 'Type 1 Diabetes Mellitus',
    nameEs: 'Diabetes Mellitus Tipo 1',
    category: 'diabetes',
    icd11: '5A10',
    description: 'Autoimmune destruction of pancreatic beta cells causing absolute insulin deficiency. Typically presents in childhood/adolescence. Without insulin, ketoacidosis develops.',
    descriptionEs: 'Destrucción autoinmune de células beta pancreáticas causando deficiencia absoluta de insulina. Típicamente se presenta en infancia/adolescencia. Sin insulina, se desarrolla cetoacidosis.',
    riskFactors: [
      'Family history of Type 1 diabetes (first-degree relative)',
      'Genetic predisposition (HLA-DR3, HLA-DR4)',
      'Other autoimmune diseases (Hashimoto\'s, celiac disease, Addison\'s)',
      'Caucasian ethnicity',
      'Environmental triggers (viral infections, early cow milk exposure - debated)',
      'Geography (higher incidence in northern latitudes)'
    ],
    pathophysiology: 'T-cell and autoantibody-mediated beta cell destruction causes progressive insulin deficiency. When 80-90% destroyed, hyperglycemia develops. Absolute insulin lack prevents glucose uptake and allows unchecked ketogenesis, causing ketoacidosis.',
    pathophysiologyEs: 'Destrucción de células beta mediada por células T y autoanticuerpos causa deficiencia progresiva de insulina. Cuando 80-90% destruido, se desarrolla hiperglucemia. Falta absoluta de insulina impide captación de glucosa y permite cetogénesis sin control, causando cetoacidosis.',
    symptoms: ['Classic triad: polyuria, polydipsia, polyphagia', 'Unintentional weight loss', 'Fatigue/weakness', 'Blurred vision', 'N/V (DKA)', 'Abdominal pain (DKA)', 'Fruity breath', 'Kussmaul respirations (DKA)', 'Altered mental status (DKA)', 'Recurrent infections'],
    diagnostics: {
      tests: ['Random glucose ≥200 with symptoms', 'Fasting glucose ≥126', 'HbA1c ≥6.5%', 'Autoantibodies (GAD-65, IA-2, ZnT8, insulin)', 'C-peptide (low/absent)', 'VBG (acidosis in DKA)', 'Ketones (elevated in DKA)', 'BMP', 'HbA1c monitoring', 'Screen celiac/thyroid'],
      imaging: ['Retinal exam (annual)', 'Foot exam (neuropathy)'],
      criteria: ['Hyperglycemia, positive autoantibodies, low/absent C-peptide, insulin dependence']
    },
    treatment: {
      medications: ['Basal-bolus insulin (NPH/glargine/detemir/degludec + lispro/aspart/glulisine)', 'Insulin pump therapy', 'Pramlintide (adjunct)', 'SGLT2 inhibitors (off-label)', 'Aspirin 81mg', 'Statin', 'ACE-I/ARB'],
      procedures: ['CGM', 'Insulin pump', 'Pancreas/islet transplant (rare)', 'Closed-loop system'],
      lifestyle: ['Carb counting/insulin ratios', 'BG monitoring 4-10x/day or CGM', 'Consistent meals', 'Exercise with monitoring', 'Hypoglycemia treatment (15g carbs)', 'Glucagon kit', 'Sick day rules', 'Annual eye/foot/dental exams', 'A1c target <7%']
    },
    emergencySigns: ['DKA (glucose >250, ketones, N/V, confusion, fruity breath)', 'Severe hypoglycemia (<54 or <70 with altered consciousness)', 'Persistent hyperglycemia >400', 'Unable to tolerate oral intake', 'Infection with worsening glucose', 'Chest pain/dyspnea', 'Loss of consciousness'],
    patientExplanation: 'Type 1 diabetes happens when your immune system destroys the cells in your pancreas that make insulin, a hormone that allows sugar to enter your cells for energy. Without insulin, sugar builds up in your blood to dangerous levels, and your body breaks down fat for energy, creating acids called ketones. This is life-threatening if untreated. You will need insulin injections or an insulin pump for the rest of your life—insulin keeps you alive. You\'ll also check your blood sugar multiple times daily and adjust insulin based on food, exercise, and stress. With modern technology like continuous glucose monitors and insulin pumps, many people with Type 1 diabetes live active, healthy lives. Education and support from your diabetes team are essential.',
    patientExplanationEs: 'La diabetes tipo 1 ocurre cuando su sistema inmunológico destruye las células en su páncreas que producen insulina, una hormona que permite que el azúcar entre en sus células para obtener energía. Sin insulina, el azúcar se acumula en su sangre a niveles peligrosos, y su cuerpo descompone grasa para obtener energía, creando ácidos llamados cetonas. Esto es potencialmente mortal si no se trata. Necesitará inyecciones de insulina o una bomba de insulina por el resto de su vida: la insulina lo mantiene con vida. También revisará su azúcar en la sangre varias veces al día y ajustará la insulina según la comida, el ejercicio y el estrés. Con la tecnología moderna como monitores continuos de glucosa y bombas de insulina, muchas personas con diabetes tipo 1 llevan vidas activas y saludables. La educación y el apoyo de su equipo de diabetes son esenciales.'
  },

};

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * Get a single endocrine condition by ID.
 */
export function getEndocrineConditionById(id: string): EndocrineConditionEntry | undefined {
  return ENDOCRINE_CONDITIONS[id];
}

/**
 * Search endocrine conditions by name, description, symptoms, or any text field.
 * Returns all matching conditions (case-insensitive).
 */
export function searchEndocrineConditions(query: string): EndocrineConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(ENDOCRINE_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.symptoms.some(s => s.toLowerCase().includes(q)) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/**
 * Filter conditions by category.
 */
export function getEndocrineConditionsByCategory(category: EndocrineCategory): EndocrineConditionEntry[] {
  return Object.values(ENDOCRINE_CONDITIONS).filter(c => c.category === category);
}

/**
 * Get all conditions with a specific risk factor (case-insensitive).
 */
export function getEndocrineConditionsByRiskFactor(riskFactor: string): EndocrineConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(ENDOCRINE_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}

/**
 * Return total count of endocrine conditions in database.
 */
export function getEndocrineConditionCount(): number {
  return Object.keys(ENDOCRINE_CONDITIONS).length;
}
