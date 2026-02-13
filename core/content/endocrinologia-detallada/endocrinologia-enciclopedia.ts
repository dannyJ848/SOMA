// =============================================================================
// Endocrinologia Enciclopedia — Spanish-first bilingual medical encyclopedia
// Path: core/content/endocrinologia-detallada/endocrinologia-enciclopedia.ts
// Pattern: JSON.parse() to avoid TS2590 on large literal arrays
// =============================================================================

export interface EndocrinologiaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  causasEs: string;
  causasEn: string;
  diagnosticoEs: string;
  diagnosticoEn: string;
  tratamientoEs: string;
  tratamientoEn: string;
  prevencionEs: string;
  prevencionEn: string;
  complicacionesEs: string[];
  complicacionesEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const ENDOCRINOLOGIA_ENTRIES: EndocrinologiaEntry[] = JSON.parse(`[
  {
    "id": "diabetes-tipo-2",
    "nombreEs": "Diabetes mellitus tipo 2",
    "nombreEn": "Type 2 Diabetes Mellitus",
    "descripcionEs": "La diabetes mellitus tipo 2 es una enfermedad metab\u00f3lica cr\u00f3nica caracterizada por niveles elevados de glucosa en sangre debido a resistencia a la insulina y una deficiencia relativa en la secreci\u00f3n de insulina por las c\u00e9lulas beta del p\u00e1ncreas. Representa aproximadamente el 90-95% de todos los casos de diabetes y su prevalencia ha aumentado dr\u00e1sticamente a nivel mundial debido al sedentarismo, la obesidad y los cambios en los patrones alimentarios. La enfermedad se desarrolla de forma gradual, frecuentemente precedida por un estado de prediabetes en el cual los niveles de glucosa est\u00e1n elevados pero a\u00fan no alcanzan el umbral diagn\u00f3stico de diabetes. Sin tratamiento adecuado, la hiperglucemia cr\u00f3nica causa da\u00f1o progresivo a m\u00faltiples \u00f3rganos y sistemas, incluyendo los vasos sangu\u00edneos, nervios, ri\u00f1ones y ojos. El manejo integral incluye modificaciones del estilo de vida, farmacoterapia oral o inyectable y monitorizaci\u00f3n continua de la glucemia.",
    "descripcionEn": "Type 2 diabetes mellitus is a chronic metabolic disease characterized by elevated blood glucose levels resulting from insulin resistance and a relative deficiency in insulin secretion by the pancreatic beta cells. It accounts for approximately 90-95% of all diabetes cases and its prevalence has increased dramatically worldwide due to sedentary lifestyles, obesity, and changes in dietary patterns. The disease develops gradually, often preceded by a prediabetic state in which glucose levels are elevated but have not yet reached the diagnostic threshold for diabetes. Without adequate treatment, chronic hyperglycemia causes progressive damage to multiple organs and systems, including blood vessels, nerves, kidneys, and eyes. Comprehensive management includes lifestyle modifications, oral or injectable pharmacotherapy, and continuous glycemic monitoring.",
    "categoriaEs": "metab\u00f3lica",
    "categoriaEn": "metabolic",
    "sintomasEs": [
      "Poliuria (aumento de la frecuencia urinaria)",
      "Polidipsia (sed excesiva y persistente)",
      "Polifagia (hambre excesiva a pesar de comer)",
      "P\u00e9rdida de peso inexplicable",
      "Fatiga cr\u00f3nica y debilidad generalizada",
      "Visi\u00f3n borrosa o cambios visuales",
      "Hormigueo o entumecimiento en manos y pies (neuropat\u00eda perif\u00e9rica)",
      "Cicatrizaci\u00f3n lenta de heridas y cortes",
      "Infecciones frecuentes de piel, enc\u00edas o v\u00edas urinarias",
      "Zonas de piel oscurecida (acantosis nigricans) en cuello y axilas"
    ],
    "sintomasEn": [
      "Polyuria (increased urinary frequency)",
      "Polydipsia (excessive and persistent thirst)",
      "Polyphagia (excessive hunger despite eating)",
      "Unexplained weight loss",
      "Chronic fatigue and generalized weakness",
      "Blurred vision or visual changes",
      "Tingling or numbness in hands and feet (peripheral neuropathy)",
      "Slow healing of wounds and cuts",
      "Frequent skin, gum, or urinary tract infections",
      "Areas of darkened skin (acanthosis nigricans) on neck and armpits"
    ],
    "causasEs": "La diabetes tipo 2 resulta de una combinaci\u00f3n de factores gen\u00e9ticos y ambientales. La resistencia a la insulina se desarrolla cuando las c\u00e9lulas musculares, hep\u00e1ticas y adiposas no responden adecuadamente a la insulina, lo que obliga al p\u00e1ncreas a producir cantidades crecientes de esta hormona. Con el tiempo, las c\u00e9lulas beta pancre\u00e1ticas se agotan y no pueden mantener la producci\u00f3n compensatoria necesaria. Los principales factores de riesgo incluyen obesidad (especialmente la adiposidad visceral), sedentarismo, antecedentes familiares de diabetes, edad avanzada, etnicidad (mayor riesgo en poblaciones hispanas, afroamericanas e ind\u00edgenas), diabetes gestacional previa, s\u00edndrome de ovario poliqu\u00edstico y s\u00edndrome metab\u00f3lico. El exceso de \u00e1cidos grasos libres y las adipocitocinas inflamatorias secretadas por el tejido adiposo contribuyen significativamente a la resistencia insul\u00ednica.",
    "causasEn": "Type 2 diabetes results from a combination of genetic and environmental factors. Insulin resistance develops when muscle, liver, and fat cells do not respond adequately to insulin, forcing the pancreas to produce increasing amounts of the hormone. Over time, pancreatic beta cells become exhausted and cannot maintain the necessary compensatory production. Major risk factors include obesity (especially visceral adiposity), sedentary lifestyle, family history of diabetes, advanced age, ethnicity (higher risk in Hispanic, African-American, and Indigenous populations), prior gestational diabetes, polycystic ovary syndrome, and metabolic syndrome. Excess free fatty acids and inflammatory adipocytokines secreted by adipose tissue contribute significantly to insulin resistance.",
    "diagnosticoEs": "El diagn\u00f3stico de diabetes tipo 2 se establece mediante pruebas de laboratorio estandarizadas. La hemoglobina glucosilada (HbA1c) igual o superior al 6.5% confirma el diagn\u00f3stico y refleja el control gluc\u00e9mico de los \u00faltimos 2-3 meses. La glucosa plasm\u00e1tica en ayunas igual o superior a 126 mg/dL en dos determinaciones separadas tambi\u00e9n es diagn\u00f3stica. La prueba de tolerancia oral a la glucosa (PTOG) con 75 g de glucosa muestra valores iguales o superiores a 200 mg/dL a las 2 horas. Una glucosa al azar igual o superior a 200 mg/dL acompa\u00f1ada de s\u00edntomas cl\u00e1sicos de hiperglucemia tambi\u00e9n confirma el diagn\u00f3stico. Se recomienda tamizaje a partir de los 35 a\u00f1os o antes si existen factores de riesgo. El perfil lip\u00eddico, la funci\u00f3n renal (microalbuminuria, creatinina) y el examen oftalmol\u00f3gico deben evaluarse al momento del diagn\u00f3stico.",
    "diagnosticoEn": "The diagnosis of type 2 diabetes is established through standardized laboratory tests. Glycosylated hemoglobin (HbA1c) equal to or greater than 6.5% confirms the diagnosis and reflects glycemic control over the past 2-3 months. Fasting plasma glucose equal to or greater than 126 mg/dL on two separate determinations is also diagnostic. The oral glucose tolerance test (OGTT) with 75 g of glucose shows values equal to or greater than 200 mg/dL at 2 hours. A random glucose equal to or greater than 200 mg/dL accompanied by classic hyperglycemia symptoms also confirms the diagnosis. Screening is recommended starting at age 35 or earlier if risk factors are present. Lipid profile, renal function (microalbuminuria, creatinine), and ophthalmologic examination should be evaluated at the time of diagnosis.",
    "tratamientoEs": "El tratamiento de la diabetes tipo 2 requiere un enfoque integral y escalonado. La primera l\u00ednea incluye modificaciones del estilo de vida: dieta equilibrada baja en carbohidratos refinados y grasas saturadas, actividad f\u00edsica regular (al menos 150 minutos semanales de ejercicio aer\u00f3bico moderado), reducci\u00f3n del peso corporal (p\u00e9rdida del 5-10% del peso mejora significativamente el control gluc\u00e9mico) y abandono del tabaquismo. La metformina es el f\u00e1rmaco de primera elecci\u00f3n por su eficacia, perfil de seguridad y beneficio cardiovascular. Si no se alcanza la meta de HbA1c (generalmente <7%), se a\u00f1aden inhibidores de SGLT2 (empagliflozina, dapagliflozina) o agonistas del receptor de GLP-1 (semaglutida, liraglutida), especialmente en pacientes con enfermedad cardiovascular o renal establecida. Otros agentes incluyen inhibidores de DPP-4 (sitagliptina), tiazolidinedionas (pioglitazona), sulfonilureas (glimepirida) e insulina basal cuando la terapia oral es insuficiente. La monitorizaci\u00f3n continua de glucosa (MCG) y los sistemas de asa cerrada representan avances tecnol\u00f3gicos recientes en el manejo.",
    "tratamientoEn": "Treatment of type 2 diabetes requires a comprehensive, stepwise approach. First-line management includes lifestyle modifications: a balanced diet low in refined carbohydrates and saturated fats, regular physical activity (at least 150 minutes per week of moderate aerobic exercise), body weight reduction (5-10% weight loss significantly improves glycemic control), and smoking cessation. Metformin is the first-choice drug due to its efficacy, safety profile, and cardiovascular benefit. If the HbA1c target (generally <7%) is not achieved, SGLT2 inhibitors (empagliflozin, dapagliflozin) or GLP-1 receptor agonists (semaglutide, liraglutide) are added, especially in patients with established cardiovascular or renal disease. Other agents include DPP-4 inhibitors (sitagliptin), thiazolidinediones (pioglitazone), sulfonylureas (glimepiride), and basal insulin when oral therapy is insufficient. Continuous glucose monitoring (CGM) and closed-loop systems represent recent technological advances in management.",
    "prevencionEs": "La prevenci\u00f3n de la diabetes tipo 2 se centra en la modificaci\u00f3n de factores de riesgo modificables. El Programa de Prevenci\u00f3n de Diabetes (DPP) demostr\u00f3 que la intervenci\u00f3n intensiva del estilo de vida reduce la incidencia de diabetes en un 58% en personas con prediabetes. Las medidas preventivas incluyen mantener un peso corporal saludable (IMC <25 kg/m\u00b2), realizar actividad f\u00edsica regular, seguir un patr\u00f3n alimentario rico en frutas, verduras, granos integrales y fibra, limitar el consumo de bebidas azucaradas y alimentos ultraprocesados, y realizar tamizaje peri\u00f3dico en poblaciones de riesgo. La metformina profil\u00e1ctica puede considerarse en individuos de alto riesgo que no logran metas con cambios en el estilo de vida.",
    "prevencionEn": "Prevention of type 2 diabetes focuses on modification of modifiable risk factors. The Diabetes Prevention Program (DPP) demonstrated that intensive lifestyle intervention reduces diabetes incidence by 58% in people with prediabetes. Preventive measures include maintaining a healthy body weight (BMI <25 kg/m2), engaging in regular physical activity, following a dietary pattern rich in fruits, vegetables, whole grains, and fiber, limiting consumption of sugary beverages and ultra-processed foods, and performing periodic screening in at-risk populations. Prophylactic metformin may be considered in high-risk individuals who do not achieve goals with lifestyle changes alone.",
    "complicacionesEs": [
      "Retinopat\u00eda diab\u00e9tica (da\u00f1o a los vasos sangu\u00edneos de la retina, causa l\u00edder de ceguera en adultos)",
      "Nefropat\u00eda diab\u00e9tica (da\u00f1o renal progresivo que puede llevar a di\u00e1lisis)",
      "Neuropat\u00eda diab\u00e9tica perif\u00e9rica y auton\u00f3mica",
      "Enfermedad cardiovascular ateroscler\u00f3tica (infarto de miocardio, ictus)",
      "Pie diab\u00e9tico con riesgo de \u00falceras y amputaci\u00f3n",
      "Cetoacidosis diab\u00e9tica (menos com\u00fan que en tipo 1 pero posible)",
      "Estado hiperosmolar hiperglic\u00e9mico (emergencia metab\u00f3lica grave)",
      "Mayor susceptibilidad a infecciones"
    ],
    "complicacionesEn": [
      "Diabetic retinopathy (damage to retinal blood vessels, leading cause of blindness in adults)",
      "Diabetic nephropathy (progressive kidney damage that may lead to dialysis)",
      "Peripheral and autonomic diabetic neuropathy",
      "Atherosclerotic cardiovascular disease (myocardial infarction, stroke)",
      "Diabetic foot with risk of ulcers and amputation",
      "Diabetic ketoacidosis (less common than in type 1 but possible)",
      "Hyperosmolar hyperglycemic state (severe metabolic emergency)",
      "Increased susceptibility to infections"
    ],
    "cuandoConsultarEs": "Consulte a un m\u00e9dico de inmediato si presenta sed excesiva con micci\u00f3n frecuente, p\u00e9rdida de peso inexplicable, visi\u00f3n borrosa s\u00fabita, heridas que no cicatrizan, entumecimiento persistente en extremidades, s\u00edntomas de infecci\u00f3n recurrente, o si tiene antecedentes familiares de diabetes y factores de riesgo metab\u00f3lico. Acuda a urgencias si presenta confusi\u00f3n mental, respiraci\u00f3n r\u00e1pida y profunda, n\u00e1useas o v\u00f3mitos persistentes, o glucosa capilar superior a 300 mg/dL, ya que podr\u00eda tratarse de una emergencia hiperglic\u00e9mica.",
    "cuandoConsultarEn": "See a doctor immediately if you experience excessive thirst with frequent urination, unexplained weight loss, sudden blurred vision, wounds that do not heal, persistent numbness in extremities, symptoms of recurrent infection, or if you have a family history of diabetes and metabolic risk factors. Go to the emergency room if you experience mental confusion, rapid and deep breathing, persistent nausea or vomiting, or capillary glucose above 300 mg/dL, as this may be a hyperglycemic emergency."
  },
  {
    "id": "hipotiroidismo",
    "nombreEs": "Hipotiroidismo",
    "nombreEn": "Hypothyroidism",
    "descripcionEs": "El hipotiroidismo es un trastorno endocrino en el cual la gl\u00e1ndula tiroides no produce suficientes hormonas tiroideas (T3 y T4) para satisfacer las necesidades metab\u00f3licas del organismo. Es una de las enfermedades endocrinas m\u00e1s frecuentes, afectando hasta al 5% de la poblaci\u00f3n general y con mayor prevalencia en mujeres y personas mayores de 60 a\u00f1os. La causa m\u00e1s com\u00fan en \u00e1reas con suficiente yodo es la tiroiditis de Hashimoto, una enfermedad autoinmune en la que los anticuerpos atacan el tejido tiroideo. La deficiencia de hormonas tiroideas provoca una disminuci\u00f3n generalizada del metabolismo celular, afectando pr\u00e1cticamente todos los \u00f3rganos y sistemas del cuerpo. Si no se trata, el hipotiroidismo severo puede progresar a mixedema, una condici\u00f3n potencialmente mortal caracterizada por hipotermia, alteraci\u00f3n del estado mental y falla multiorg\u00e1nica.",
    "descripcionEn": "Hypothyroidism is an endocrine disorder in which the thyroid gland does not produce enough thyroid hormones (T3 and T4) to meet the body's metabolic needs. It is one of the most common endocrine diseases, affecting up to 5% of the general population with higher prevalence in women and people over 60 years of age. The most common cause in iodine-sufficient areas is Hashimoto's thyroiditis, an autoimmune disease in which antibodies attack the thyroid tissue. Thyroid hormone deficiency causes a generalized decrease in cellular metabolism, affecting virtually all organs and systems in the body. If left untreated, severe hypothyroidism can progress to myxedema, a potentially fatal condition characterized by hypothermia, altered mental status, and multiorgan failure.",
    "categoriaEs": "tiroidea",
    "categoriaEn": "thyroid",
    "sintomasEs": [
      "Fatiga persistente y somnolencia excesiva",
      "Aumento de peso inexplicable y dificultad para perder peso",
      "Intolerancia al fr\u00edo (sensaci\u00f3n constante de tener fr\u00edo)",
      "Estre\u00f1imiento cr\u00f3nico",
      "Piel seca, \u00e1spera y p\u00e1lida",
      "Ca\u00edda excesiva del cabello y cabello quebradizo",
      "Hinchaz\u00f3n facial (especialmente periorbitaria) y de extremidades",
      "Bradicardia (frecuencia card\u00edaca lenta)",
      "Depresi\u00f3n, deterioro cognitivo y problemas de memoria",
      "Irregularidades menstruales (menorragia) e infertilidad",
      "Ronquera y voz grave",
      "Debilidad muscular y artralgias"
    ],
    "sintomasEn": [
      "Persistent fatigue and excessive drowsiness",
      "Unexplained weight gain and difficulty losing weight",
      "Cold intolerance (constant feeling of being cold)",
      "Chronic constipation",
      "Dry, rough, and pale skin",
      "Excessive hair loss and brittle hair",
      "Facial swelling (especially periorbital) and extremity edema",
      "Bradycardia (slow heart rate)",
      "Depression, cognitive impairment, and memory problems",
      "Menstrual irregularities (menorrhagia) and infertility",
      "Hoarseness and deepened voice",
      "Muscle weakness and arthralgias"
    ],
    "causasEs": "La causa m\u00e1s frecuente de hipotiroidismo en pa\u00edses desarrollados es la tiroiditis de Hashimoto, una enfermedad autoinmune donde los anticuerpos anti-peroxidasa tiroidea (anti-TPO) y anti-tiroglobulina destruyen progresivamente el tejido tiroideo funcional. A nivel mundial, la deficiencia de yodo sigue siendo la causa principal en regiones end\u00e9micas. Otras causas incluyen el hipotiroidismo iatrog\u00e9nico (posterior a tiroidectom\u00eda o terapia con yodo radiactivo), medicamentos (amiodarona, litio, inhibidores de tirosina quinasa, inmunoterapia), tiroiditis subaguda (fase hipotiroidea), hipotiroidismo central por patolog\u00eda hipofisaria o hipotal\u00e1mica, tiroiditis posparto, infiltraci\u00f3n tiroidea (amiloidosis, sarcoidosis), y causas cong\u00e9nitas (disgenesia o dishormonogenesis tiroidea). La radioterapia cervical tambi\u00e9n puede causar da\u00f1o tiroideo progresivo.",
    "causasEn": "The most common cause of hypothyroidism in developed countries is Hashimoto's thyroiditis, an autoimmune disease where anti-thyroid peroxidase (anti-TPO) and anti-thyroglobulin antibodies progressively destroy functional thyroid tissue. Globally, iodine deficiency remains the main cause in endemic regions. Other causes include iatrogenic hypothyroidism (following thyroidectomy or radioactive iodine therapy), medications (amiodarone, lithium, tyrosine kinase inhibitors, immunotherapy), subacute thyroiditis (hypothyroid phase), central hypothyroidism from pituitary or hypothalamic pathology, postpartum thyroiditis, thyroid infiltration (amyloidosis, sarcoidosis), and congenital causes (thyroid dysgenesis or dyshormonogenesis). Cervical radiation therapy can also cause progressive thyroid damage.",
    "diagnosticoEs": "El diagn\u00f3stico de hipotiroidismo se basa en la determinaci\u00f3n de la hormona estimulante de la tiroides (TSH) y la tiroxina libre (T4 libre) en suero. En el hipotiroidismo primario, la TSH est\u00e1 elevada (>4.5 mUI/L) y la T4 libre est\u00e1 disminuida. El hipotiroidismo subcl\u00ednico se define por TSH elevada con T4 libre normal. Los anticuerpos anti-TPO y anti-tiroglobulina ayudan a confirmar la etiolog\u00eda autoinmune (Hashimoto). La ecograf\u00eda tiroidea puede mostrar una gl\u00e1ndula hipoecog\u00e9nica, heterog\u00e9nea y de tama\u00f1o variable. En el hipotiroidismo central, tanto la TSH como la T4 libre est\u00e1n bajas, y se requiere resonancia magn\u00e9tica de hip\u00f3fisis. Se deben evaluar tambi\u00e9n el perfil lip\u00eddico (frecuentemente elevado), hemograma (posible anemia), creatina quinasa y sodio s\u00e9rico.",
    "diagnosticoEn": "The diagnosis of hypothyroidism is based on determination of thyroid-stimulating hormone (TSH) and free thyroxine (free T4) in serum. In primary hypothyroidism, TSH is elevated (>4.5 mIU/L) and free T4 is decreased. Subclinical hypothyroidism is defined by elevated TSH with normal free T4. Anti-TPO and anti-thyroglobulin antibodies help confirm the autoimmune etiology (Hashimoto's). Thyroid ultrasound may show a hypoechoic, heterogeneous gland of variable size. In central hypothyroidism, both TSH and free T4 are low, and pituitary MRI is required. Lipid profile (frequently elevated), complete blood count (possible anemia), creatine kinase, and serum sodium should also be evaluated.",
    "tratamientoEs": "El tratamiento est\u00e1ndar del hipotiroidismo es la terapia de reemplazo con levotiroxina (L-T4) s\u00f3dica, una forma sint\u00e9tica de la hormona tiroidea T4. La dosis inicial t\u00edpica en adultos j\u00f3venes sin cardiopat\u00eda es de 1.6 mcg/kg/d\u00eda, administrada en ayunas al menos 30-60 minutos antes del desayuno para optimizar la absorci\u00f3n. En pacientes ancianos o con enfermedad cardiovascular, se inicia con dosis bajas (25-50 mcg/d\u00eda) y se titula gradualmente cada 4-6 semanas. La meta terap\u00e9utica es normalizar la TSH (0.5-2.5 mUI/L en la mayor\u00eda de los pacientes). El ajuste de dosis se basa en determinaciones de TSH realizadas 6-8 semanas despu\u00e9s de cada cambio de dosis. La combinaci\u00f3n de levotiroxina con liotironina (T3) puede considerarse en pacientes con s\u00edntomas persistentes a pesar de TSH normalizada, aunque la evidencia es limitada. Es importante evitar la interacci\u00f3n con calcio, hierro, inhibidores de bomba de protones y otros medicamentos que reducen la absorci\u00f3n de levotiroxina.",
    "tratamientoEn": "The standard treatment for hypothyroidism is replacement therapy with levothyroxine (L-T4) sodium, a synthetic form of the thyroid hormone T4. The typical starting dose in young adults without heart disease is 1.6 mcg/kg/day, administered on an empty stomach at least 30-60 minutes before breakfast to optimize absorption. In elderly patients or those with cardiovascular disease, treatment starts with low doses (25-50 mcg/day) and is gradually titrated every 4-6 weeks. The therapeutic goal is to normalize TSH (0.5-2.5 mIU/L in most patients). Dose adjustment is based on TSH determinations performed 6-8 weeks after each dose change. The combination of levothyroxine with liothyronine (T3) may be considered in patients with persistent symptoms despite normalized TSH, although evidence is limited. It is important to avoid interactions with calcium, iron, proton pump inhibitors, and other medications that reduce levothyroxine absorption.",
    "prevencionEs": "No existe una forma segura de prevenir el hipotiroidismo autoinmune (Hashimoto), ya que implica una predisposici\u00f3n gen\u00e9tica. Sin embargo, asegurar una ingesta adecuada de yodo en la dieta (150 mcg/d\u00eda en adultos, 250 mcg/d\u00eda en embarazadas) previene el hipotiroidismo por deficiencia de yodo, com\u00fan en regiones sin programas de yodaci\u00f3n de la sal. Evitar la exposici\u00f3n innecesaria a radiaci\u00f3n cervical y usar medicamentos tirot\u00f3xicos solo cuando sea indispensable contribuye a reducir el riesgo iatrog\u00e9nico. El tamizaje peri\u00f3dico de TSH en poblaciones de riesgo (mujeres >35 a\u00f1os, antecedentes familiares autoinmunes, pacientes tratados con amiodarona o litio, postparto) permite la detecci\u00f3n y tratamiento temprano antes de que aparezcan complicaciones.",
    "prevencionEn": "There is no sure way to prevent autoimmune hypothyroidism (Hashimoto's), as it involves a genetic predisposition. However, ensuring adequate dietary iodine intake (150 mcg/day in adults, 250 mcg/day in pregnant women) prevents iodine deficiency hypothyroidism, common in regions without salt iodization programs. Avoiding unnecessary cervical radiation exposure and using thyrotoxic medications only when indispensable helps reduce iatrogenic risk. Periodic TSH screening in at-risk populations (women >35 years, family history of autoimmune disease, patients treated with amiodarone or lithium, postpartum) allows early detection and treatment before complications arise.",
    "complicacionesEs": [
      "Mixedema y coma mixedematoso (emergencia endocrina potencialmente mortal)",
      "Enfermedad cardiovascular (hipercolesterolemia, aterosclerosis acelerada, insuficiencia card\u00edaca)",
      "Bocio (agrandamiento de la gl\u00e1ndula tiroides)",
      "Neuropat\u00eda perif\u00e9rica y s\u00edndrome del t\u00fanel carpiano",
      "Infertilidad, abortos espont\u00e1neos y complicaciones obst\u00e9tricas",
      "Depresi\u00f3n severa y deterioro cognitivo progresivo",
      "Hiponatremia (sodio s\u00e9rico bajo)",
      "Anemia (normoc\u00edtica, macroc\u00edtica o por deficiencia de hierro)"
    ],
    "complicacionesEn": [
      "Myxedema and myxedema coma (potentially fatal endocrine emergency)",
      "Cardiovascular disease (hypercholesterolemia, accelerated atherosclerosis, heart failure)",
      "Goiter (enlargement of the thyroid gland)",
      "Peripheral neuropathy and carpal tunnel syndrome",
      "Infertility, spontaneous abortions, and obstetric complications",
      "Severe depression and progressive cognitive decline",
      "Hyponatremia (low serum sodium)",
      "Anemia (normocytic, macrocytic, or iron deficiency)"
    ],
    "cuandoConsultarEs": "Consulte a un m\u00e9dico si experimenta fatiga inexplicable persistente, aumento de peso sin cambios en la dieta, intolerancia al fr\u00edo marcada, estre\u00f1imiento refractario, ca\u00edda significativa del cabello, cambios en el estado de \u00e1nimo o problemas de memoria. Las mujeres deben consultar si presentan irregularidades menstruales o dificultad para concebir. Acuda a urgencias si presenta signos de coma mixedematoso: hipotermia severa, somnolencia extrema progresiva a estupor, bradicardia marcada o confusi\u00f3n mental aguda, especialmente durante el invierno o tras una infecci\u00f3n.",
    "cuandoConsultarEn": "See a doctor if you experience unexplained persistent fatigue, weight gain without dietary changes, marked cold intolerance, refractory constipation, significant hair loss, mood changes, or memory problems. Women should consult if they have menstrual irregularities or difficulty conceiving. Go to the emergency room if you show signs of myxedema coma: severe hypothermia, extreme drowsiness progressing to stupor, marked bradycardia, or acute mental confusion, especially during winter or following an infection."
  },
  {
    "id": "hipertiroidismo",
    "nombreEs": "Hipertiroidismo (Enfermedad de Graves)",
    "nombreEn": "Hyperthyroidism (Graves' Disease)",
    "descripcionEs": "El hipertiroidismo es un trastorno endocrino causado por la producci\u00f3n excesiva de hormonas tiroideas (T3 y T4) por la gl\u00e1ndula tiroides, lo que acelera el metabolismo de todo el organismo. La enfermedad de Graves es la causa m\u00e1s frecuente, representando entre el 60-80% de los casos de hipertiroidismo, y se debe a anticuerpos estimulantes del receptor de TSH (TRAb) que activan constitutivamente la gl\u00e1ndula tiroides. Otras causas incluyen el bocio multinodular t\u00f3xico, el adenoma t\u00f3xico (n\u00f3dulo aut\u00f3nomo) y la tiroiditis. El hipertiroidismo no tratado puede producir complicaciones card\u00edacas graves, p\u00e9rdida \u00f3sea progresiva y, en casos extremos, una crisis tirotox\u00edca (tormenta tiroidea), que constituye una emergencia m\u00e9dica con una mortalidad del 10-30%. La enfermedad de Graves presenta adem\u00e1s manifestaciones extratiroideas caracter\u00edsticas como la oftalmopatia de Graves y la dermopatia tiroidea.",
    "descripcionEn": "Hyperthyroidism is an endocrine disorder caused by excessive production of thyroid hormones (T3 and T4) by the thyroid gland, which accelerates the metabolism of the entire body. Graves' disease is the most common cause, accounting for 60-80% of hyperthyroidism cases, and is due to TSH receptor stimulating antibodies (TRAb) that constitutively activate the thyroid gland. Other causes include toxic multinodular goiter, toxic adenoma (autonomous nodule), and thyroiditis. Untreated hyperthyroidism can produce serious cardiac complications, progressive bone loss, and in extreme cases, a thyrotoxic crisis (thyroid storm), which constitutes a medical emergency with 10-30% mortality. Graves' disease also presents characteristic extrathyroidal manifestations such as Graves' ophthalmopathy and thyroid dermopathy.",
    "categoriaEs": "tiroidea",
    "categoriaEn": "thyroid",
    "sintomasEs": [
      "Taquicardia, palpitaciones y fibrilaci\u00f3n auricular",
      "P\u00e9rdida de peso a pesar de aumento del apetito",
      "Temblor fino en las manos",
      "Intolerancia al calor y sudoraci\u00f3n excesiva",
      "Nerviosismo, ansiedad e irritabilidad",
      "Diarrea o aumento de la frecuencia de evacuaciones",
      "Debilidad muscular proximal (dificultad para subir escaleras)",
      "Exoftalmos (protusi\u00f3n ocular) en enfermedad de Graves",
      "Bocio difuso palpable con soplo tiroideo",
      "Irregularidades menstruales (oligomenorrea o amenorrea)",
      "Insomnio y alteraciones del sue\u00f1o",
      "Piel caliente, h\u00fameda y suave"
    ],
    "sintomasEn": [
      "Tachycardia, palpitations, and atrial fibrillation",
      "Weight loss despite increased appetite",
      "Fine tremor in the hands",
      "Heat intolerance and excessive sweating",
      "Nervousness, anxiety, and irritability",
      "Diarrhea or increased frequency of bowel movements",
      "Proximal muscle weakness (difficulty climbing stairs)",
      "Exophthalmos (eye protrusion) in Graves' disease",
      "Palpable diffuse goiter with thyroid bruit",
      "Menstrual irregularities (oligomenorrhea or amenorrhea)",
      "Insomnia and sleep disturbances",
      "Warm, moist, and smooth skin"
    ],
    "causasEs": "La enfermedad de Graves es una enfermedad autoinmune mediada por anticuerpos estimulantes del receptor de TSH (TRAb o TSI) que imitan la acci\u00f3n de la TSH y estimulan la s\u00edntesis y liberaci\u00f3n descontrolada de hormonas tiroideas. Tiene predisposici\u00f3n gen\u00e9tica (asociaci\u00f3n con HLA-DR3, CTLA-4, PTPN22) y factores desencadenantes ambientales como el estr\u00e9s emocional, el tabaquismo (especialmente para la oftalmopatia), el exceso de yodo y las infecciones. El bocio multinodular t\u00f3xico se desarrolla por la proliferaci\u00f3n aut\u00f3noma de n\u00f3dulos tiroideos que producen hormonas independientemente de la regulaci\u00f3n por TSH, frecuentemente asociado a mutaciones som\u00e1ticas activadoras en el receptor de TSH. La tiroiditis subaguda granulomatosa (de Quervain) causa hipertiroidismo transitorio por liberaci\u00f3n de hormonas almacenadas desde fol\u00edculos tiroideos da\u00f1ados.",
    "causasEn": "Graves' disease is an autoimmune disease mediated by TSH receptor stimulating antibodies (TRAb or TSI) that mimic the action of TSH and stimulate uncontrolled synthesis and release of thyroid hormones. It has genetic predisposition (association with HLA-DR3, CTLA-4, PTPN22) and environmental triggers such as emotional stress, smoking (especially for ophthalmopathy), excess iodine, and infections. Toxic multinodular goiter develops from autonomous proliferation of thyroid nodules that produce hormones independently of TSH regulation, frequently associated with activating somatic mutations in the TSH receptor. Subacute granulomatous thyroiditis (de Quervain's) causes transient hyperthyroidism from release of stored hormones from damaged thyroid follicles.",
    "diagnosticoEs": "El diagn\u00f3stico se confirma con TSH s\u00e9rica suprimida (<0.1 mUI/L) y T4 libre y/o T3 libre elevadas. En el hipertiroidismo subcl\u00ednico, la TSH est\u00e1 baja con T4 y T3 normales. Los anticuerpos anti-receptor de TSH (TRAb) son espec\u00edficos de la enfermedad de Graves y confirman su diagn\u00f3stico. La gammagraf\u00eda tiroidea con tecnecio-99m o yodo-123 muestra captaci\u00f3n difusa aumentada en Graves, captaci\u00f3n focal en adenoma t\u00f3xico y captaci\u00f3n suprimida en tiroiditis destructiva. La ecograf\u00eda Doppler muestra hipervascularidad difusa en Graves. Deben evaluarse tambi\u00e9n el hemograma (posible leucopenia), funci\u00f3n hep\u00e1tica (puede alterarse por la tirotoxicosis), calcio s\u00e9rico y electrocardiograma para detectar arritmias.",
    "diagnosticoEn": "The diagnosis is confirmed with suppressed serum TSH (<0.1 mIU/L) and elevated free T4 and/or free T3. In subclinical hyperthyroidism, TSH is low with normal T4 and T3. Anti-TSH receptor antibodies (TRAb) are specific to Graves' disease and confirm its diagnosis. Thyroid scintigraphy with technetium-99m or iodine-123 shows diffusely increased uptake in Graves', focal uptake in toxic adenoma, and suppressed uptake in destructive thyroiditis. Doppler ultrasound shows diffuse hypervascularity in Graves'. Complete blood count (possible leukopenia), liver function (may be altered by thyrotoxicosis), serum calcium, and electrocardiogram to detect arrhythmias should also be evaluated.",
    "tratamientoEs": "Existen tres opciones principales de tratamiento para el hipertiroidismo de Graves: f\u00e1rmacos antitiroideos, yodo radiactivo y cirug\u00eda. Los f\u00e1rmacos antitiroideos (metimazol como primera elecci\u00f3n, propiltiouracilo en el primer trimestre del embarazo) inhiben la s\u00edntesis de hormonas tiroideas; el metimazol se inicia a 10-30 mg/d\u00eda y se titula seg\u00fan la respuesta. El tratamiento con yodo radiactivo (I-131) destruye selectivamente el tejido tiroideo hiperactivo y es la opci\u00f3n preferida en muchos centros para adultos no embarazadas sin oftalmopatia activa moderada-severa. La tiroidectom\u00eda total o subtotal est\u00e1 indicada en bocios grandes, sospecha de malignidad, oftalmopatia severa o falla del tratamiento m\u00e9dico. Los betabloqueadores (propranolol 20-40 mg cada 6-8 horas) proporcionan alivio sint\u00f3mtico r\u00e1pido del temblor, taquicardia y ansiedad mientras el tratamiento definitivo hace efecto. La oftalmopatia de Graves puede requerir tratamiento espec\u00edfico con selenio, glucocorticoides, teprotumumab o descompresi\u00f3n orbitaria.",
    "tratamientoEn": "There are three main treatment options for Graves' hyperthyroidism: antithyroid drugs, radioactive iodine, and surgery. Antithyroid drugs (methimazole as first choice, propylthiouracil in the first trimester of pregnancy) inhibit thyroid hormone synthesis; methimazole is started at 10-30 mg/day and titrated based on response. Radioactive iodine (I-131) therapy selectively destroys hyperactive thyroid tissue and is the preferred option in many centers for non-pregnant adults without active moderate-severe ophthalmopathy. Total or subtotal thyroidectomy is indicated for large goiters, suspected malignancy, severe ophthalmopathy, or failure of medical treatment. Beta-blockers (propranolol 20-40 mg every 6-8 hours) provide rapid symptomatic relief of tremor, tachycardia, and anxiety while definitive treatment takes effect. Graves' ophthalmopathy may require specific treatment with selenium, glucocorticoids, teprotumumab, or orbital decompression.",
    "prevencionEs": "No se puede prevenir la enfermedad de Graves debido a su naturaleza autoinmune y base gen\u00e9tica. Sin embargo, evitar el tabaquismo reduce significativamente el riesgo de desarrollar oftalmopatia de Graves y su severidad. Manejar el estr\u00e9s adecuadamente, evitar la ingesta excesiva de yodo (suplementos, medios de contraste yodados innecesarios, amiodarona) y mantener un estilo de vida saludable pueden contribuir a reducir el riesgo de desencadenar la enfermedad en personas predispuestas. El seguimiento regular de la funci\u00f3n tiroidea en pacientes con antecedentes familiares de enfermedades tiroideas autoinmunes permite la detecci\u00f3n temprana.",
    "prevencionEn": "Graves' disease cannot be prevented due to its autoimmune nature and genetic basis. However, avoiding smoking significantly reduces the risk of developing Graves' ophthalmopathy and its severity. Adequately managing stress, avoiding excessive iodine intake (supplements, unnecessary iodinated contrast media, amiodarone), and maintaining a healthy lifestyle may help reduce the risk of triggering the disease in predisposed individuals. Regular thyroid function monitoring in patients with family history of autoimmune thyroid diseases allows early detection.",
    "complicacionesEs": [
      "Crisis o tormenta tiroidea (emergencia con fiebre, taquicardia extrema, delirio y falla multiorg\u00e1nica)",
      "Fibrilaci\u00f3n auricular y tromboembolismo",
      "Insuficiencia card\u00edaca de gasto elevado",
      "Oftalmopatia de Graves (proptosis, diplop\u00eda, p\u00e9rdida visual por neuropat\u00eda \u00f3ptica compresiva)",
      "Osteoporosis por recambio \u00f3seo acelerado",
      "Miopat\u00eda tirot\u00f3xica",
      "Par\u00e1lisis peri\u00f3dica tirot\u00f3xica (m\u00e1s com\u00fan en hombres asi\u00e1ticos)",
      "Agranulocitosis por f\u00e1rmacos antitiroideos (raro pero grave)"
    ],
    "complicacionesEn": [
      "Thyroid crisis or storm (emergency with fever, extreme tachycardia, delirium, and multiorgan failure)",
      "Atrial fibrillation and thromboembolism",
      "High-output heart failure",
      "Graves' ophthalmopathy (proptosis, diplopia, visual loss from compressive optic neuropathy)",
      "Osteoporosis from accelerated bone turnover",
      "Thyrotoxic myopathy",
      "Thyrotoxic periodic paralysis (more common in Asian males)",
      "Agranulocytosis from antithyroid drugs (rare but serious)"
    ],
    "cuandoConsultarEs": "Consulte al m\u00e9dico si nota palpitaciones persistentes, p\u00e9rdida de peso r\u00e1pida sin raz\u00f3n aparente, temblor en las manos, intolerancia al calor severa, ansiedad intensa de inicio reciente o cambios oculares (enrojecimiento, hinchaz\u00f3n, protusi\u00f3n). Acuda a urgencias inmediatamente si presenta fiebre alta con taquicardia severa (>140 lpm), agitaci\u00f3n extrema, confusi\u00f3n, v\u00f3mitos o diarrea profusa, ya que estos s\u00edntomas pueden indicar una tormenta tiroidea, que requiere tratamiento de emergencia con betabloqueadores intravenosos, yodo y glucocorticoides.",
    "cuandoConsultarEn": "See a doctor if you notice persistent palpitations, rapid weight loss without apparent reason, hand tremor, severe heat intolerance, intense new-onset anxiety, or eye changes (redness, swelling, protrusion). Go to the emergency room immediately if you develop high fever with severe tachycardia (>140 bpm), extreme agitation, confusion, vomiting, or profuse diarrhea, as these symptoms may indicate a thyroid storm requiring emergency treatment with intravenous beta-blockers, iodine, and glucocorticoids."
  },
  {
    "id": "sindrome-cushing",
    "nombreEs": "S\u00edndrome de Cushing",
    "nombreEn": "Cushing Syndrome",
    "descripcionEs": "El s\u00edndrome de Cushing es un trastorno endocrino causado por la exposici\u00f3n prolongada a niveles excesivos de cortisol, ya sea de origen end\u00f3geno (producci\u00f3n excesiva por las gl\u00e1ndulas suprarrenales) o ex\u00f3geno (administraci\u00f3n cr\u00f3nica de glucocorticoides). La causa end\u00f3gena m\u00e1s frecuente es la enfermedad de Cushing, causada por un adenoma hipofisario secretor de ACTH (hormona adrenocorticotropa), que representa el 70% de los casos end\u00f3genos. El exceso cr\u00f3nico de cortisol produce una constelaci\u00f3n caracter\u00edstica de signos y s\u00edntomas que afectan m\u00faltiples sistemas org\u00e1nicos, incluyendo obesidad central, hiperglucemia, hipertensi\u00f3n, osteoporosis y susceptibilidad a infecciones. Sin tratamiento, el s\u00edndrome de Cushing tiene una morbimortalidad significativa, con una tasa de mortalidad a 5 a\u00f1os de hasta el 50% debido principalmente a complicaciones cardiovasculares e infecciosas.",
    "descripcionEn": "Cushing syndrome is an endocrine disorder caused by prolonged exposure to excessive cortisol levels, either from endogenous sources (excessive production by the adrenal glands) or exogenous sources (chronic glucocorticoid administration). The most common endogenous cause is Cushing's disease, caused by an ACTH-secreting pituitary adenoma (adrenocorticotropic hormone), which accounts for 70% of endogenous cases. Chronic cortisol excess produces a characteristic constellation of signs and symptoms affecting multiple organ systems, including central obesity, hyperglycemia, hypertension, osteoporosis, and susceptibility to infections. Without treatment, Cushing syndrome has significant morbidity and mortality, with a 5-year mortality rate of up to 50% primarily due to cardiovascular and infectious complications.",
    "categoriaEs": "suprarrenal",
    "categoriaEn": "adrenal",
    "sintomasEs": [
      "Obesidad central con extremidades delgadas (distribuci\u00f3n centrip\u00e9tala de grasa)",
      "Cara de luna llena (facies cushingoidea) y joroba de b\u00fafalo (grasa dorsocervical)",
      "Estr\u00edas cut\u00e1neas p\u00farpura-roj\u00edzas anchas (>1 cm) en abdomen, muslos y brazos",
      "Hipertensi\u00f3n arterial",
      "Hiperglucemia o diabetes franca",
      "Debilidad muscular proximal (dificultad para levantarse de una silla)",
      "Piel delgada y fr\u00e1gil con facilidad para hematomas",
      "Hirsutismo y acn\u00e9 en mujeres",
      "Irregularidades menstruales o amenorrea",
      "Depresi\u00f3n, labilidad emocional e insomnio",
      "Osteoporosis con fracturas patol\u00f3gicas",
      "Infecciones oportunistas frecuentes"
    ],
    "sintomasEn": [
      "Central obesity with thin extremities (centripetal fat distribution)",
      "Moon face (Cushingoid facies) and buffalo hump (dorsocervical fat pad)",
      "Wide purple-red cutaneous striae (>1 cm) on abdomen, thighs, and arms",
      "Arterial hypertension",
      "Hyperglycemia or frank diabetes",
      "Proximal muscle weakness (difficulty rising from a chair)",
      "Thin, fragile skin with easy bruising",
      "Hirsutism and acne in women",
      "Menstrual irregularities or amenorrhea",
      "Depression, emotional lability, and insomnia",
      "Osteoporosis with pathologic fractures",
      "Frequent opportunistic infections"
    ],
    "causasEs": "La causa m\u00e1s com\u00fan de s\u00edndrome de Cushing es la administraci\u00f3n ex\u00f3gena prolongada de glucocorticoides (prednisona, dexametasona, hidrocortisona) para enfermedades inflamatorias, autoinmunes o neoplasias. Entre las causas end\u00f3genas, la enfermedad de Cushing (adenoma hipofisario corticotropo) es la m\u00e1s frecuente (70% de los casos end\u00f3genos), seguida por tumores suprarrenales productores de cortisol (adenomas y carcinomas adrenocorticales, 15%) y secreci\u00f3n ect\u00f3pica de ACTH por tumores no hipofisarios (carcinoma pulmonar de c\u00e9lulas peque\u00f1as, tumores carcinoides bronquiales, carcinoma medular de tiroides, feocromocitoma, 15%). Causas raras incluyen la hiperplasia suprarrenal macronodular primaria (PPNAD) y el s\u00edndrome de McCune-Albright.",
    "causasEn": "The most common cause of Cushing syndrome is prolonged exogenous administration of glucocorticoids (prednisone, dexamethasone, hydrocortisone) for inflammatory, autoimmune diseases, or neoplasms. Among endogenous causes, Cushing's disease (corticotroph pituitary adenoma) is the most common (70% of endogenous cases), followed by cortisol-producing adrenal tumors (adrenocortical adenomas and carcinomas, 15%) and ectopic ACTH secretion by non-pituitary tumors (small cell lung carcinoma, bronchial carcinoid tumors, medullary thyroid carcinoma, pheochromocytoma, 15%). Rare causes include primary pigmented nodular adrenocortical disease (PPNAD) and McCune-Albright syndrome.",
    "diagnosticoEs": "El diagn\u00f3stico del s\u00edndrome de Cushing requiere un enfoque escalonado. Primero se confirma el hipercortisolismo mediante al menos dos pruebas de tamizaje: cortisol libre urinario de 24 horas elevado (>3 veces el l\u00edmite superior normal), cortisol salival nocturno elevado (>145 ng/dL a las 23:00 h), y/o falla en la supresi\u00f3n con dexametasona a dosis baja (1 mg nocturno, con cortisol s\u00e9rico >1.8 mcg/dL a la ma\u00f1ana siguiente). Una vez confirmado el hipercortisolismo, se determina la causa midiendo ACTH plasm\u00e1tica: ACTH suprimida (<5 pg/mL) sugiere causa suprarrenal; ACTH normal o elevada sugiere causa central o ect\u00f3pica. La resonancia magn\u00e9tica de hip\u00f3fisis identifica adenomas en la enfermedad de Cushing. La tomograf\u00eda de suprarrenales se usa para lesiones adrenales. El cateterismo de senos petrosos con estimulaci\u00f3n con CRH diferencia la fuente hipofisaria de la ect\u00f3pica cuando la RM es negativa.",
    "diagnosticoEn": "Diagnosis of Cushing syndrome requires a stepwise approach. First, hypercortisolism is confirmed using at least two screening tests: elevated 24-hour urinary free cortisol (>3 times upper normal limit), elevated late-night salivary cortisol (>145 ng/dL at 23:00), and/or failure of low-dose dexamethasone suppression (1 mg overnight, with morning serum cortisol >1.8 mcg/dL). Once hypercortisolism is confirmed, the cause is determined by measuring plasma ACTH: suppressed ACTH (<5 pg/mL) suggests adrenal cause; normal or elevated ACTH suggests central or ectopic cause. Pituitary MRI identifies adenomas in Cushing's disease. Adrenal CT is used for adrenal lesions. Bilateral inferior petrosal sinus sampling with CRH stimulation differentiates pituitary from ectopic source when MRI is negative.",
    "tratamientoEs": "El tratamiento del s\u00edndrome de Cushing depende de la causa subyacente. Para la enfermedad de Cushing (adenoma hipofisario), la cirug\u00eda transesfenoidal es el tratamiento de primera l\u00ednea, con tasas de remisi\u00f3n del 65-90% para microadenomas. Si la cirug\u00eda falla o la enfermedad recurre, las opciones incluyen segunda cirug\u00eda, radioterapia (convencional o radiocirug\u00eda con Gamma Knife), adrenalectom\u00eda bilateral (curativa pero causa insuficiencia suprarrenal permanente) o terapia m\u00e9dica. Los f\u00e1rmacos incluyen inhibidores de la esteroidog\u00e9nesis suprarrenal (ketoconazol, metirapona, osilodrostat, mitotane), ligandos del receptor de somatostatina (pasireotida), agonistas dopamin\u00e9rgicos (cabergolina) y antagonistas del receptor de glucocorticoides (mifepristona). Para tumores suprarrenales, la adrenalectom\u00eda unilateral es curativa para adenomas benignos; los carcinomas requieren resecci\u00f3n amplia m\u00e1s mitotane adyuvante. El Cushing iatrog\u00e9nico se trata con reducci\u00f3n gradual del glucocorticoide ex\u00f3geno.",
    "tratamientoEn": "Treatment of Cushing syndrome depends on the underlying cause. For Cushing's disease (pituitary adenoma), transsphenoidal surgery is the first-line treatment, with remission rates of 65-90% for microadenomas. If surgery fails or disease recurs, options include repeat surgery, radiation therapy (conventional or Gamma Knife radiosurgery), bilateral adrenalectomy (curative but causes permanent adrenal insufficiency), or medical therapy. Drugs include adrenal steroidogenesis inhibitors (ketoconazole, metyrapone, osilodrostat, mitotane), somatostatin receptor ligands (pasireotide), dopamine agonists (cabergoline), and glucocorticoid receptor antagonists (mifepristone). For adrenal tumors, unilateral adrenalectomy is curative for benign adenomas; carcinomas require wide resection plus adjuvant mitotane. Iatrogenic Cushing is treated with gradual tapering of the exogenous glucocorticoid.",
    "prevencionEs": "El s\u00edndrome de Cushing end\u00f3geno no se puede prevenir. Sin embargo, el s\u00edndrome de Cushing iatrog\u00e9nico (la causa m\u00e1s frecuente) se puede minimizar utilizando la dosis m\u00e1s baja efectiva de glucocorticoides durante el menor tiempo posible, empleando v\u00edas de administraci\u00f3n t\u00f3pica o inhalada en lugar de sist\u00e9mica cuando sea factible, y realizando una reducci\u00f3n gradual (nunca supresi\u00f3n abrupta) cuando se descontinuan. Los m\u00e9dicos deben monitorizar activamente los signos de Cushing en pacientes que reciben glucocorticoides cr\u00f3nicos y considerar terapias ahorradoras de esteroides (inmunosupresores, biol\u00f3gicos) para las enfermedades de base.",
    "prevencionEn": "Endogenous Cushing syndrome cannot be prevented. However, iatrogenic Cushing syndrome (the most common cause) can be minimized by using the lowest effective dose of glucocorticoids for the shortest possible time, employing topical or inhaled routes of administration instead of systemic when feasible, and performing gradual tapering (never abrupt cessation) when discontinuing. Physicians should actively monitor for signs of Cushing in patients receiving chronic glucocorticoids and consider steroid-sparing therapies (immunosuppressants, biologics) for the underlying diseases.",
    "complicacionesEs": [
      "Diabetes mellitus esteroidea o empeoramiento de diabetes preexistente",
      "Hipertensi\u00f3n arterial severa resistente al tratamiento",
      "Enfermedad tromboemb\u00f3lica venosa (trombosis venosa profunda, embolia pulmonar)",
      "Osteoporosis severa con fracturas vertebrales y de cadera",
      "Infecciones oportunistas (tuberculosis, micosis invasivas, neumon\u00eda por Pneumocystis)",
      "Depresi\u00f3n mayor, psicosis y deterioro cognitivo",
      "Miopat\u00eda esteroidea incapacitante",
      "Insuficiencia suprarrenal post-tratamiento (crisis addisoniana)"
    ],
    "complicacionesEn": [
      "Steroid diabetes mellitus or worsening of preexisting diabetes",
      "Severe treatment-resistant arterial hypertension",
      "Venous thromboembolic disease (deep vein thrombosis, pulmonary embolism)",
      "Severe osteoporosis with vertebral and hip fractures",
      "Opportunistic infections (tuberculosis, invasive mycoses, Pneumocystis pneumonia)",
      "Major depression, psychosis, and cognitive decline",
      "Disabling steroid myopathy",
      "Post-treatment adrenal insufficiency (Addisonian crisis)"
    ],
    "cuandoConsultarEs": "Consulte a un endocrin\u00f3logo si presenta aumento de peso progresivo con distribuci\u00f3n central, estr\u00edas p\u00farpuras anchas de aparici\u00f3n reciente, debilidad muscular proximal, facilidad para hematomas, o si est\u00e1 tomando glucocorticoides cr\u00f3nicos y nota cambios f\u00edsicos caracter\u00edsticos. Es especialmente importante consultar si tiene hipertensi\u00f3n de dif\u00edcil control, diabetes de reciente aparici\u00f3n, o fracturas osteopor\u00f3ticas sin causa aparente en adultos j\u00f3venes. Nunca suspenda los glucocorticoides abruptamente sin supervisi\u00f3n m\u00e9dica, ya que puede desencadenar una crisis suprarrenal aguda potencialmente mortal.",
    "cuandoConsultarEn": "See an endocrinologist if you experience progressive weight gain with central distribution, new-onset wide purple striae, proximal muscle weakness, easy bruising, or if you are taking chronic glucocorticoids and notice characteristic physical changes. It is especially important to consult if you have difficult-to-control hypertension, new-onset diabetes, or osteoporotic fractures without apparent cause in young adults. Never abruptly stop glucocorticoids without medical supervision, as this can trigger a potentially fatal acute adrenal crisis."
  },
  {
    "id": "diabetes-tipo-1",
    "nombreEs": "Diabetes mellitus tipo 1",
    "nombreEn": "Type 1 Diabetes Mellitus",
    "descripcionEs": "La diabetes mellitus tipo 1 es una enfermedad autoinmune cr\u00f3nica en la que el sistema inmunol\u00f3gico destruye selectivamente las c\u00e9lulas beta de los islotes de Langerhans del p\u00e1ncreas, lo que resulta en una deficiencia absoluta de insulina. Representa aproximadamente el 5-10% de todos los casos de diabetes y es la forma m\u00e1s com\u00fan de diabetes en ni\u00f1os y adolescentes, aunque puede aparecer a cualquier edad (la diabetes autoinmune latente del adulto o LADA es una variante de presentaci\u00f3n tard\u00eda). La enfermedad se desarrolla cuando factores ambientales desencadenantes (infecciones virales, factores diet\u00e9ticos) activan una respuesta autoinmune en individuos gen\u00e9ticamente susceptibles, destruyendo progresivamente las c\u00e9lulas beta hasta que la reserva insul\u00ednica es insuficiente. Sin tratamiento con insulina ex\u00f3gena, la diabetes tipo 1 es invariablemente fatal debido al desarrollo de cetoacidosis diab\u00e9tica. Los avances modernos incluyen bombas de insulina, sistemas de monitorizaci\u00f3n continua de glucosa y sistemas de asa cerrada que mejoran significativamente el control gluc\u00e9mico y la calidad de vida.",
    "descripcionEn": "Type 1 diabetes mellitus is a chronic autoimmune disease in which the immune system selectively destroys the beta cells of the islets of Langerhans in the pancreas, resulting in absolute insulin deficiency. It accounts for approximately 5-10% of all diabetes cases and is the most common form of diabetes in children and adolescents, although it can occur at any age (latent autoimmune diabetes in adults or LADA is a late-onset variant). The disease develops when environmental triggers (viral infections, dietary factors) activate an autoimmune response in genetically susceptible individuals, progressively destroying beta cells until the insulin reserve is insufficient. Without exogenous insulin treatment, type 1 diabetes is invariably fatal due to the development of diabetic ketoacidosis. Modern advances include insulin pumps, continuous glucose monitoring systems, and closed-loop systems that significantly improve glycemic control and quality of life.",
    "categoriaEs": "autoinmune",
    "categoriaEn": "autoimmune",
    "sintomasEs": [
      "Poliuria severa (micci\u00f3n frecuente y abundante, incluyendo nocturia)",
      "Polidipsia intensa (sed insaciable)",
      "P\u00e9rdida de peso r\u00e1pida e involuntaria a pesar de polifagia",
      "Fatiga extrema y debilidad generalizada",
      "Visi\u00f3n borrosa de inicio agudo",
      "N\u00e1useas, v\u00f3mitos y dolor abdominal (signos de cetoacidosis)",
      "Respiraci\u00f3n de Kussmaul (r\u00e1pida y profunda) con aliento a frutas (cetosis)",
      "Irritabilidad y cambios de humor",
      "Enuresis nocturna en ni\u00f1os previamente continentes",
      "Candidiasis genital recurrente",
      "Calambres musculares"
    ],
    "sintomasEn": [
      "Severe polyuria (frequent and copious urination, including nocturia)",
      "Intense polydipsia (insatiable thirst)",
      "Rapid involuntary weight loss despite polyphagia",
      "Extreme fatigue and generalized weakness",
      "Acute-onset blurred vision",
      "Nausea, vomiting, and abdominal pain (signs of ketoacidosis)",
      "Kussmaul breathing (rapid and deep) with fruity breath (ketosis)",
      "Irritability and mood changes",
      "Bedwetting in previously continent children",
      "Recurrent genital candidiasis",
      "Muscle cramps"
    ],
    "causasEs": "La diabetes tipo 1 es una enfermedad autoinmune mediada por linfocitos T que destruyen las c\u00e9lulas beta pancre\u00e1ticas. Existe una fuerte predisposici\u00f3n gen\u00e9tica asociada al complejo mayor de histocompatibilidad HLA, particularmente los haplotipos HLA-DR3/DQ2 y HLA-DR4/DQ8, que confieren hasta el 50% del riesgo gen\u00e9tico. Sin embargo, la concordancia en gemelos monocig\u00f3ticos es solo del 30-50%, lo que indica la importancia de factores ambientales desencadenantes: infecciones virales (enterovirus, especialmente Coxsackie B, rotavirus, citomegalovirus), factores diet\u00e9ticos tempranos (introducci\u00f3n precoz de prote\u00ednas de leche de vaca, deficiencia de vitamina D), exposici\u00f3n a toxinas y alt alteraciones de la microbiota intestinal. Los autoanticuerpos detectables incluyen anti-GAD65, anti-IA2, anti-insulina (IAA) y anti-ZnT8, y pueden estar presentes a\u00f1os antes del debut cl\u00ednico. La destrucci\u00f3n de m\u00e1s del 80-90% de las c\u00e9lulas beta conduce a la manifestaci\u00f3n cl\u00ednica de la enfermedad.",
    "causasEn": "Type 1 diabetes is a T-cell mediated autoimmune disease that destroys pancreatic beta cells. There is a strong genetic predisposition associated with the HLA major histocompatibility complex, particularly the HLA-DR3/DQ2 and HLA-DR4/DQ8 haplotypes, which confer up to 50% of genetic risk. However, concordance in monozygotic twins is only 30-50%, indicating the importance of environmental triggers: viral infections (enteroviruses, especially Coxsackie B, rotavirus, cytomegalovirus), early dietary factors (early introduction of cow's milk proteins, vitamin D deficiency), toxin exposure, and gut microbiota alterations. Detectable autoantibodies include anti-GAD65, anti-IA2, anti-insulin (IAA), and anti-ZnT8, and may be present years before clinical onset. Destruction of more than 80-90% of beta cells leads to clinical manifestation of the disease.",
    "diagnosticoEs": "El diagn\u00f3stico de diabetes tipo 1 se basa en la presentaci\u00f3n cl\u00ednica aguda (s\u00edntomas hipergluc\u00e9micos con p\u00e9rdida de peso r\u00e1pida, frecuentemente con cetoacidosis) y la confirmaci\u00f3n de hiperglucemia (glucosa plasm\u00e1tica en ayunas \u2265126 mg/dL, glucosa al azar \u2265200 mg/dL con s\u00edntomas, o HbA1c \u22656.5%). La diferenciaci\u00f3n con la diabetes tipo 2 se establece mediante: autoanticuerpos positivos (anti-GAD65 en 70-80% de los casos, anti-IA2, anti-ZnT8, anti-insulina), p\u00e9ptido C bajo o indetectable (indica deficiencia absoluta de insulina), y cetonemia o cetonuria. En adultos con presentaci\u00f3n at\u00edpica, la determinaci\u00f3n de autoanticuerpos y p\u00e9ptido C es esencial para diferenciar DM1, LADA y DM2. La evaluaci\u00f3n inicial debe incluir perfil lip\u00eddico, funci\u00f3n renal (microalbuminuria), funci\u00f3n tiroidea (asociaci\u00f3n con tiroiditis autoinmune en 15-30%) y detecci\u00f3n de enfermedad cel\u00edaca.",
    "diagnosticoEn": "The diagnosis of type 1 diabetes is based on the acute clinical presentation (hyperglycemic symptoms with rapid weight loss, frequently with ketoacidosis) and confirmation of hyperglycemia (fasting plasma glucose >=126 mg/dL, random glucose >=200 mg/dL with symptoms, or HbA1c >=6.5%). Differentiation from type 2 diabetes is established by: positive autoantibodies (anti-GAD65 in 70-80% of cases, anti-IA2, anti-ZnT8, anti-insulin), low or undetectable C-peptide (indicates absolute insulin deficiency), and ketonemia or ketonuria. In adults with atypical presentation, autoantibody and C-peptide determination is essential to differentiate T1D, LADA, and T2D. Initial evaluation should include lipid profile, renal function (microalbuminuria), thyroid function (association with autoimmune thyroiditis in 15-30%), and celiac disease screening.",
    "tratamientoEs": "El tratamiento de la diabetes tipo 1 requiere insulinoterapia de por vida, ya que el p\u00e1ncreas no puede producir insulina. El r\u00e9gimen basal-bolo es el est\u00e1ndar: insulina basal (glargina U-100/U-300 o degludec) una o dos veces al d\u00eda m\u00e1s insulina de acci\u00f3n r\u00e1pida (lispro, aspart, glulisina) antes de cada comida, ajustada seg\u00fan el conteo de carbohidratos y la glucemia preprandial. Las bombas de infusi\u00f3n continua de insulina (BICI) proporcionan una administraci\u00f3n m\u00e1s fisiol\u00f3gica con tasas basales programables y bolos de correcci\u00f3n. Los sistemas de asa cerrada h\u00edbridos (p\u00e1ncreas artificial) integran la monitorizaci\u00f3n continua de glucosa con la bomba de insulina y un algoritmo de control automatizado, y representan el avance m\u00e1s significativo en el manejo de DM1. La educaci\u00f3n del paciente en automonitorizaci\u00f3n, conteo de carbohidratos, reconocimiento y tratamiento de hipoglucemia, manejo de d\u00edas de enfermedad y actividad f\u00edsica es fundamental. Se est\u00e1 investigando teplizumab (anti-CD3) para retrasar la progresi\u00f3n en individuos presintom\u00e1ticos con autoanticuerpos positivos.",
    "tratamientoEn": "Treatment of type 1 diabetes requires lifelong insulin therapy, as the pancreas cannot produce insulin. The basal-bolus regimen is the standard: basal insulin (glargine U-100/U-300 or degludec) once or twice daily plus rapid-acting insulin (lispro, aspart, glulisine) before each meal, adjusted based on carbohydrate counting and preprandial glucose. Continuous subcutaneous insulin infusion pumps (CSII) provide more physiological delivery with programmable basal rates and correction boluses. Hybrid closed-loop systems (artificial pancreas) integrate continuous glucose monitoring with the insulin pump and an automated control algorithm, representing the most significant advance in T1D management. Patient education in self-monitoring, carbohydrate counting, hypoglycemia recognition and treatment, sick-day management, and physical activity is fundamental. Teplizumab (anti-CD3) is being investigated to delay progression in presymptomatic individuals with positive autoantibodies.",
    "prevencionEs": "Actualmente no existe una forma probada de prevenir la diabetes tipo 1. Sin embargo, la investigaci\u00f3n en prevenci\u00f3n est\u00e1 avanzando r\u00e1pidamente. El teplizumab, un anticuerpo monoclonal anti-CD3, ha demostrado retrasar la aparici\u00f3n de diabetes tipo 1 cl\u00ednica en aproximadamente 2-3 a\u00f1os en individuos de alto riesgo (estadio 2, con autoanticuerpos positivos y disglucemia). Los programas de tamizaje familiar (TrialNet, TEDDY) permiten identificar a individuos en riesgo mediante la detecci\u00f3n de autoanticuerpos a\u00f1os antes del inicio cl\u00ednico. Otras estrategias en investigaci\u00f3n incluyen la inmunoterapia con ant\u00edgeno espec\u00edfico (insulina oral, p\u00e9ptido GAD-alum), trasplante de islotes, c\u00e9lulas madre pluripotentes y terapia g\u00e9nica. La lactancia materna exclusiva prolongada y la suplementaci\u00f3n con vitamina D en la infancia podr\u00edan tener un efecto protector modesto.",
    "prevencionEn": "There is currently no proven way to prevent type 1 diabetes. However, prevention research is advancing rapidly. Teplizumab, an anti-CD3 monoclonal antibody, has been shown to delay the onset of clinical type 1 diabetes by approximately 2-3 years in high-risk individuals (stage 2, with positive autoantibodies and dysglycemia). Family screening programs (TrialNet, TEDDY) allow identification of at-risk individuals through autoantibody detection years before clinical onset. Other strategies under investigation include antigen-specific immunotherapy (oral insulin, GAD-alum peptide), islet transplantation, pluripotent stem cells, and gene therapy. Prolonged exclusive breastfeeding and vitamin D supplementation in infancy may have a modest protective effect.",
    "complicacionesEs": [
      "Cetoacidosis diab\u00e9tica (emergencia metab\u00f3lica con mortalidad del 1-5%)",
      "Hipoglucemia severa (convulsiones, p\u00e9rdida de conciencia, coma)",
      "Hipoglucemia inadvertida (p\u00e9rdida de s\u00edntomas de alerta)",
      "Retinopat\u00eda diab\u00e9tica proliferativa",
      "Nefropat\u00eda diab\u00e9tica y enfermedad renal terminal",
      "Neuropat\u00eda diab\u00e9tica (perif\u00e9rica, auton\u00f3mica, gastrointestinal)",
      "Enfermedad cardiovascular prematura",
      "Enfermedades autoinmunes asociadas (tiroiditis, enfermedad cel\u00edaca, insuficiencia suprarrenal)",
      "Lipodistrofia en sitios de inyecci\u00f3n"
    ],
    "complicacionesEn": [
      "Diabetic ketoacidosis (metabolic emergency with 1-5% mortality)",
      "Severe hypoglycemia (seizures, loss of consciousness, coma)",
      "Hypoglycemia unawareness (loss of warning symptoms)",
      "Proliferative diabetic retinopathy",
      "Diabetic nephropathy and end-stage renal disease",
      "Diabetic neuropathy (peripheral, autonomic, gastrointestinal)",
      "Premature cardiovascular disease",
      "Associated autoimmune diseases (thyroiditis, celiac disease, adrenal insufficiency)",
      "Lipodystrophy at injection sites"
    ],
    "cuandoConsultarEs": "Consulte a un m\u00e9dico de urgencia si un ni\u00f1o o adulto joven presenta sed intensa, micci\u00f3n frecuente, p\u00e9rdida de peso r\u00e1pida, n\u00e1useas, v\u00f3mitos o dolor abdominal, ya que estos pueden ser signos de debut de diabetes tipo 1 con cetoacidosis. Si ya tiene diagn\u00f3stico de DM1, acuda a urgencias si presenta glucosa >300 mg/dL con cetonas positivas en sangre u orina, v\u00f3mitos que impiden la hidrataci\u00f3n oral, respiraci\u00f3n r\u00e1pida y profunda, confusi\u00f3n mental, o hipoglucemia severa que no responde al tratamiento con glucosa oral. Consulte a su endocrin\u00f3logo si su HbA1c persiste >8% a pesar del tratamiento, si presenta hipoglucemias frecuentes o inadvertidas, o para iniciar planificaci\u00f3n preconcepcional.",
    "cuandoConsultarEn": "Seek emergency medical attention if a child or young adult presents with intense thirst, frequent urination, rapid weight loss, nausea, vomiting, or abdominal pain, as these may be signs of type 1 diabetes onset with ketoacidosis. If already diagnosed with T1D, go to the emergency room if you have glucose >300 mg/dL with positive blood or urine ketones, vomiting preventing oral hydration, rapid deep breathing, mental confusion, or severe hypoglycemia unresponsive to oral glucose treatment. Consult your endocrinologist if your HbA1c persists >8% despite treatment, if you experience frequent or unrecognized hypoglycemia, or for preconception planning."
  },
  {
    "id": "sindrome-ovario-poliquistico",
    "nombreEs": "S\u00edndrome de ovario poliqu\u00edstico (SOP)",
    "nombreEn": "Polycystic Ovary Syndrome (PCOS)",
    "descripcionEs": "El s\u00edndrome de ovario poliqu\u00edstico (SOP) es el trastorno endocrino-metab\u00f3lico m\u00e1s com\u00fan en mujeres en edad reproductiva, afectando al 6-13% de esta poblaci\u00f3n seg\u00fan los criterios diagn\u00f3sticos utilizados. Se caracteriza por una combinaci\u00f3n de hiperandrogenismo (cl\u00ednico o bioqu\u00edmico), disfunci\u00f3n ovulatoria y morfolog\u00eda ov\u00e1rica poliqu\u00edstica en la ecograf\u00eda. El SOP es una condici\u00f3n heterog\u00e9nea con m\u00faltiples fenotipos cl\u00ednicos y no es simplemente una enfermedad ov\u00e1rica, sino un trastorno sist\u00e9mico con importantes implicaciones metab\u00f3licas, reproductivas y psicol\u00f3gicas. La resistencia a la insulina est\u00e1 presente en el 50-70% de las mujeres con SOP, independientemente del peso corporal, y juega un papel central en la fisiopatolog\u00eda al estimular la producci\u00f3n ov\u00e1rica de andr\u00f3genos. El SOP aumenta significativamente el riesgo de diabetes tipo 2, enfermedad cardiovascular, s\u00edndrome metab\u00f3lico, c\u00e1ncer endometrial y trastornos de salud mental.",
    "descripcionEn": "Polycystic ovary syndrome (PCOS) is the most common endocrine-metabolic disorder in women of reproductive age, affecting 6-13% of this population depending on the diagnostic criteria used. It is characterized by a combination of hyperandrogenism (clinical or biochemical), ovulatory dysfunction, and polycystic ovarian morphology on ultrasound. PCOS is a heterogeneous condition with multiple clinical phenotypes and is not simply an ovarian disease but a systemic disorder with significant metabolic, reproductive, and psychological implications. Insulin resistance is present in 50-70% of women with PCOS regardless of body weight and plays a central role in the pathophysiology by stimulating ovarian androgen production. PCOS significantly increases the risk of type 2 diabetes, cardiovascular disease, metabolic syndrome, endometrial cancer, and mental health disorders.",
    "categoriaEs": "reproductiva",
    "categoriaEn": "reproductive",
    "sintomasEs": [
      "Irregularidades menstruales: oligomenorrea (<8 ciclos/a\u00f1o) o amenorrea",
      "Hirsutismo (crecimiento excesivo de vello en cara, pecho, abdomen y espalda)",
      "Acn\u00e9 persistente y resistente al tratamiento convencional",
      "Alopecia androg\u00e9nica (adelgazamiento del cabello en la coronilla)",
      "Aumento de peso u obesidad, especialmente distribuci\u00f3n abdominal",
      "Acantosis nigricans (oscurecimiento de la piel en pliegues)",
      "Infertilidad por anovulaci\u00f3n cr\u00f3nica",
      "Cambios de humor, ansiedad y depresi\u00f3n",
      "Fatiga cr\u00f3nica",
      "Apnea obstructiva del sue\u00f1o"
    ],
    "sintomasEn": [
      "Menstrual irregularities: oligomenorrhea (<8 cycles/year) or amenorrhea",
      "Hirsutism (excessive hair growth on face, chest, abdomen, and back)",
      "Persistent acne resistant to conventional treatment",
      "Androgenic alopecia (hair thinning at the crown)",
      "Weight gain or obesity, especially abdominal distribution",
      "Acanthosis nigricans (skin darkening in body folds)",
      "Infertility due to chronic anovulation",
      "Mood changes, anxiety, and depression",
      "Chronic fatigue",
      "Obstructive sleep apnea"
    ],
    "causasEs": "La etiolog\u00eda del SOP es multifactorial, involucrando una compleja interacci\u00f3n entre factores gen\u00e9ticos, epigen\u00e9ticos, hormonales y ambientales. Existe una fuerte heredabilidad (concordancia del 70% en gemelas monocig\u00f3ticas), con m\u00faltiples genes de susceptibilidad identificados (DENND1A, THADA, LHCGR, INSR, entre otros). La hiperinsulinemia por resistencia a la insulina estimula directamente las c\u00e9lulas de la teca ov\u00e1rica para producir andr\u00f3genos en exceso y reduce la producci\u00f3n hep\u00e1tica de globulina fijadora de hormonas sexuales (SHBG), aumentando los andr\u00f3genos libres. La disfunci\u00f3n del eje hipot\u00e1lamo-hip\u00f3fisis-ovario resulta en una secreci\u00f3n puls\u00e1til aumentada de LH (hormona luteinizante) con relaci\u00f3n LH/FSH elevada, lo que perpet\u00faa la anovulaci\u00f3n. Factores ambientales como la obesidad, el sedentarismo, la exposici\u00f3n a disruptores endocrinos (bisfe nol A, ftalatos) y el estr\u00e9s cr\u00f3nico exacerban la condici\u00f3n. La programaci\u00f3n fetal por exceso de andr\u00f3genos intrauterinos puede predisponer al SOP.",
    "causasEn": "The etiology of PCOS is multifactorial, involving a complex interaction between genetic, epigenetic, hormonal, and environmental factors. There is strong heritability (70% concordance in monozygotic twins), with multiple susceptibility genes identified (DENND1A, THADA, LHCGR, INSR, among others). Hyperinsulinemia from insulin resistance directly stimulates ovarian theca cells to produce excess androgens and reduces hepatic production of sex hormone-binding globulin (SHBG), increasing free androgens. Hypothalamic-pituitary-ovarian axis dysfunction results in increased pulsatile secretion of LH (luteinizing hormone) with elevated LH/FSH ratio, perpetuating anovulation. Environmental factors such as obesity, sedentary lifestyle, exposure to endocrine disruptors (bisphenol A, phthalates), and chronic stress exacerbate the condition. Fetal programming by intrauterine androgen excess may predispose to PCOS.",
    "diagnosticoEs": "El diagn\u00f3stico de SOP se establece seg\u00fan los criterios de Rotterdam (2003), que requieren al menos dos de tres criterios tras excluir otras causas de hiperandrogenismo y anovulaci\u00f3n: (1) oligo-anovulaci\u00f3n (ciclos >35 d\u00edas o <8 ciclos/a\u00f1o), (2) hiperandrogenismo cl\u00ednico (hirsutismo evaluado con escala de Ferriman-Gallwey \u22658, acn\u00e9, alopecia) y/o bioqu\u00edmico (testosterona total o libre elevada, androstendiona, DHEA-S), y (3) ovarios poliqu\u00edsticos en ecograf\u00eda (>20 fol\u00edculos de 2-9 mm por ovario y/o volumen ov\u00e1rico >10 mL). Se deben excluir: hiperplasia suprarrenal cong\u00e9nita no cl\u00e1sica (17-OH progesterona), s\u00edndrome de Cushing, tumores secretores de andr\u00f3genos, disfunci\u00f3n tiroidea, hiperprolactinemia y acromegalia. La evaluaci\u00f3n metab\u00f3lica incluye prueba de tolerancia oral a la glucosa, perfil lip\u00eddico, insulina en ayunas y presi\u00f3n arterial.",
    "diagnosticoEn": "The diagnosis of PCOS is established according to the Rotterdam criteria (2003), which require at least two of three criteria after excluding other causes of hyperandrogenism and anovulation: (1) oligo-anovulation (cycles >35 days or <8 cycles/year), (2) clinical hyperandrogenism (hirsutism assessed with Ferriman-Gallwey score >=8, acne, alopecia) and/or biochemical hyperandrogenism (elevated total or free testosterone, androstenedione, DHEA-S), and (3) polycystic ovaries on ultrasound (>20 follicles 2-9 mm per ovary and/or ovarian volume >10 mL). Must exclude: non-classic congenital adrenal hyperplasia (17-OH progesterone), Cushing syndrome, androgen-secreting tumors, thyroid dysfunction, hyperprolactinemia, and acromegaly. Metabolic evaluation includes oral glucose tolerance test, lipid profile, fasting insulin, and blood pressure.",
    "tratamientoEs": "El tratamiento del SOP es individualizado seg\u00fan los s\u00edntomas predominantes y los objetivos de la paciente. Las modificaciones del estilo de vida son la primera l\u00ednea: p\u00e9rdida del 5-10% del peso corporal mejora significativamente las irregularidades menstruales, el hiperandrogenismo, la ovulaci\u00f3n y la resistencia a la insulina. Para el hiperandrogenismo, los anticonceptivos orales combinados (con efecto antiandrog\u00e9nico: drospirenona, acetato de ciproterona) son de primera elecci\u00f3n, ya que regulan el ciclo menstrual, suprimen la producci\u00f3n ov\u00e1rica de andr\u00f3genos y aumentan la SHBG. La espironolactona (50-200 mg/d\u00eda) se a\u00f1ade como antiandrog\u00e9nico para hirsutismo y acn\u00e9 resistentes. La metformina (1500-2000 mg/d\u00eda) mejora la resistencia a la insulina y puede restaurar la ovulaci\u00f3n en algunas pacientes. Para la infertilidad, el letrozol (inhibidor de aromatasa) es el inductor de ovulaci\u00f3n de primera l\u00ednea, seguido por citrato de clomifeno. La fertilizaci\u00f3n in vitro se considera cuando fallan los tratamientos de primera l\u00ednea. Se deben monitorizar y tratar activamente las comorbilidades metab\u00f3licas y psicol\u00f3gicas.",
    "tratamientoEn": "PCOS treatment is individualized based on the predominant symptoms and the patient's goals. Lifestyle modifications are first-line: 5-10% body weight loss significantly improves menstrual irregularities, hyperandrogenism, ovulation, and insulin resistance. For hyperandrogenism, combined oral contraceptives (with anti-androgenic effect: drospirenone, cyproterone acetate) are first choice, as they regulate the menstrual cycle, suppress ovarian androgen production, and increase SHBG. Spironolactone (50-200 mg/day) is added as an anti-androgen for resistant hirsutism and acne. Metformin (1500-2000 mg/day) improves insulin resistance and may restore ovulation in some patients. For infertility, letrozole (aromatase inhibitor) is the first-line ovulation inducer, followed by clomiphene citrate. In vitro fertilization is considered when first-line treatments fail. Metabolic and psychological comorbidities should be actively monitored and treated.",
    "prevencionEs": "No existe una prevenci\u00f3n primaria comprobada para el SOP debido a su fuerte componente gen\u00e9tico. Sin embargo, mantener un peso saludable, realizar actividad f\u00edsica regular (al menos 150 minutos semanales de ejercicio moderado) y seguir una dieta equilibrada baja en carbohidratos refinados y az\u00facares puede atenuar la expresi\u00f3n cl\u00ednica del s\u00edndrome en mujeres predispuestas. Evitar la exposici\u00f3n a disruptores endocrinos (pl\u00e1sticos con BPA, pesticidas) y manejar el estr\u00e9s cr\u00f3nico pueden ayudar a reducir los factores agravantes. La detecci\u00f3n temprana en adolescentes con irregularidades menstruales persistentes, hirsutismo u obesidad permite intervenciones tempranas que pueden prevenir complicaciones metab\u00f3licas y reproductivas a largo plazo.",
    "prevencionEn": "There is no proven primary prevention for PCOS due to its strong genetic component. However, maintaining a healthy weight, engaging in regular physical activity (at least 150 minutes per week of moderate exercise), and following a balanced diet low in refined carbohydrates and sugars can attenuate the clinical expression of the syndrome in predisposed women. Avoiding exposure to endocrine disruptors (BPA plastics, pesticides) and managing chronic stress may help reduce aggravating factors. Early detection in adolescents with persistent menstrual irregularities, hirsutism, or obesity allows early interventions that can prevent long-term metabolic and reproductive complications.",
    "complicacionesEs": [
      "Infertilidad por anovulaci\u00f3n cr\u00f3nica",
      "Diabetes mellitus tipo 2 (riesgo 4-7 veces mayor)",
      "S\u00edndrome metab\u00f3lico (hasta en el 33% de las mujeres con SOP)",
      "Enfermedad cardiovascular prematura (dislipidemia, hipertensi\u00f3n)",
      "Hiperplasia endometrial y c\u00e1ncer de endometrio por estimulaci\u00f3n estrog\u00e9nica sin oposici\u00f3n",
      "Complicaciones obst\u00e9tricas (diabetes gestacional, preeclampsia, parto prematuro)",
      "Apnea obstructiva del sue\u00f1o",
      "Esteatosis hep\u00e1tica no alcoh\u00f3lica (EHNA)",
      "Depresi\u00f3n, ansiedad y trastornos de la conducta alimentaria"
    ],
    "complicacionesEn": [
      "Infertility due to chronic anovulation",
      "Type 2 diabetes mellitus (4-7 times higher risk)",
      "Metabolic syndrome (up to 33% of women with PCOS)",
      "Premature cardiovascular disease (dyslipidemia, hypertension)",
      "Endometrial hyperplasia and endometrial cancer from unopposed estrogenic stimulation",
      "Obstetric complications (gestational diabetes, preeclampsia, preterm birth)",
      "Obstructive sleep apnea",
      "Non-alcoholic fatty liver disease (NAFLD)",
      "Depression, anxiety, and eating disorders"
    ],
    "cuandoConsultarEs": "Consulte a un ginec\u00f3logo o endocrin\u00f3logo si presenta ciclos menstruales irregulares (intervalos >35 d\u00edas o ausencia de menstruaci\u00f3n por >3 meses), crecimiento excesivo de vello facial o corporal, acn\u00e9 severo que no responde al tratamiento, o dificultad para lograr el embarazo despu\u00e9s de 12 meses de relaciones sin protecci\u00f3n. Tambi\u00e9n consulte si presenta aumento de peso r\u00e1pido con oscurecimiento de pliegues cut\u00e1neos (acantosis nigricans), signos de depresi\u00f3n o ansiedad, o si tiene antecedentes familiares de SOP, diabetes tipo 2 o s\u00edndrome metab\u00f3lico. Las adolescentes con irregularidades menstruales persistentes 2-3 a\u00f1os despu\u00e9s de la menarquia deben ser evaluadas.",
    "cuandoConsultarEn": "See a gynecologist or endocrinologist if you have irregular menstrual cycles (intervals >35 days or absence of menstruation for >3 months), excessive facial or body hair growth, severe acne unresponsive to treatment, or difficulty achieving pregnancy after 12 months of unprotected intercourse. Also consult if you experience rapid weight gain with darkening of skin folds (acanthosis nigricans), signs of depression or anxiety, or if you have a family history of PCOS, type 2 diabetes, or metabolic syndrome. Adolescents with persistent menstrual irregularities 2-3 years after menarche should be evaluated."
  },
  {
    "id": "osteoporosis-endocrina",
    "nombreEs": "Osteoporosis endocrina",
    "nombreEn": "Endocrine Osteoporosis",
    "descripcionEs": "La osteoporosis endocrina es una forma secundaria de osteoporosis causada por trastornos hormonales que alteran el equilibrio entre la formaci\u00f3n y la resorci\u00f3n \u00f3sea, resultando en una disminuci\u00f3n de la densidad mineral \u00f3sea y un deterioro de la microarquitectura del hueso que aumenta la fragilidad y el riesgo de fracturas. A diferencia de la osteoporosis primaria (posmenop\u00e1usica y senil), la osteoporosis endocrina es potencialmente reversible si se identifica y trata la causa hormonal subyacente. Las principales causas endocrinas incluyen el exceso de glucocorticoides (s\u00edndrome de Cushing o uso de corticoides ex\u00f3genos), hipertiroidismo, hiperparatiroidismo, hipogonadismo, deficiencia de hormona de crecimiento y exceso de prolactina. El hipercortisolismo es la causa m\u00e1s com\u00fan de osteoporosis secundaria, afectando tanto al hueso trabecular como al cortical. La detecci\u00f3n y el tratamiento temprano de la causa endocrina subyacente pueden prevenir fracturas devastadoras y mejorar significativamente la calidad de vida.",
    "descripcionEn": "Endocrine osteoporosis is a secondary form of osteoporosis caused by hormonal disorders that disrupt the balance between bone formation and resorption, resulting in decreased bone mineral density and deterioration of bone microarchitecture that increases fragility and fracture risk. Unlike primary osteoporosis (postmenopausal and senile), endocrine osteoporosis is potentially reversible if the underlying hormonal cause is identified and treated. Major endocrine causes include glucocorticoid excess (Cushing syndrome or exogenous corticosteroid use), hyperthyroidism, hyperparathyroidism, hypogonadism, growth hormone deficiency, and prolactin excess. Hypercortisolism is the most common cause of secondary osteoporosis, affecting both trabecular and cortical bone. Early detection and treatment of the underlying endocrine cause can prevent devastating fractures and significantly improve quality of life.",
    "categoriaEs": "metab\u00f3lica \u00f3sea",
    "categoriaEn": "bone metabolic",
    "sintomasEs": [
      "Fracturas por fragilidad (vertebrales, cadera, mu\u00f1eca) ante trauma m\u00ednimo o espont\u00e1neamente",
      "Dolor de espalda agudo o cr\u00f3nico por fracturas vertebrales por compresi\u00f3n",
      "P\u00e9rdida progresiva de estatura (>4 cm acumulados o >2 cm en un a\u00f1o)",
      "Cifosis tor\u00e1cica progresiva (joroba de viuda/viudo)",
      "Dolor \u00f3seo difuso",
      "Limitaci\u00f3n de la movilidad y la capacidad funcional",
      "Deformidades esquel\u00e9ticas por m\u00faltiples fracturas vertebrales",
      "S\u00edntomas de la enfermedad endocrina subyacente (varian seg\u00fan la causa)"
    ],
    "sintomasEn": [
      "Fragility fractures (vertebral, hip, wrist) from minimal trauma or spontaneously",
      "Acute or chronic back pain from vertebral compression fractures",
      "Progressive height loss (>4 cm cumulative or >2 cm in one year)",
      "Progressive thoracic kyphosis (dowager's hump)",
      "Diffuse bone pain",
      "Limited mobility and functional capacity",
      "Skeletal deformities from multiple vertebral fractures",
      "Symptoms of the underlying endocrine disease (vary depending on the cause)"
    ],
    "causasEs": "La osteoporosis endocrina tiene m\u00faltiples causas hormonales. El exceso de glucocorticoides (end\u00f3geno o ex\u00f3geno) es la causa m\u00e1s frecuente: los glucocorticoides inhiben directamente la formaci\u00f3n \u00f3sea por los osteoblastos, aumentan la resorci\u00f3n por los osteoclastos, disminuyen la absorci\u00f3n intestinal de calcio e inducen hiperparatiroidismo secundario. El hipertiroidismo acelera el recambio \u00f3seo con predominio de la resorci\u00f3n sobre la formaci\u00f3n. El hiperparatiroidismo primario causa p\u00e9rdida \u00f3sea cortical por estimulaci\u00f3n directa de osteoclastos mediada por la PTH. El hipogonadismo (deficiencia de estr\u00f3genos en mujeres y testosterona en hombres) elimina el efecto protector de las hormonas sexuales sobre el hueso. La deficiencia de hormona de crecimiento reduce la formaci\u00f3n \u00f3sea. La hiperprolactinemia causa osteoporosis indirectamente a trav\u00e9s de hipogonadismo. La deficiencia de vitamina D y la diabetes mellitus tipo 1 tambi\u00e9n contribuyen a la p\u00e9rdida \u00f3sea.",
    "causasEn": "Endocrine osteoporosis has multiple hormonal causes. Glucocorticoid excess (endogenous or exogenous) is the most common cause: glucocorticoids directly inhibit bone formation by osteoblasts, increase resorption by osteoclasts, decrease intestinal calcium absorption, and induce secondary hyperparathyroidism. Hyperthyroidism accelerates bone turnover with resorption predominating over formation. Primary hyperparathyroidism causes cortical bone loss through direct PTH-mediated osteoclast stimulation. Hypogonadism (estrogen deficiency in women and testosterone deficiency in men) eliminates the protective effect of sex hormones on bone. Growth hormone deficiency reduces bone formation. Hyperprolactinemia causes osteoporosis indirectly through hypogonadism. Vitamin D deficiency and type 1 diabetes mellitus also contribute to bone loss.",
    "diagnosticoEs": "El diagn\u00f3stico de osteoporosis endocrina requiere la confirmaci\u00f3n de baja densidad mineral \u00f3sea y la identificaci\u00f3n de la causa hormonal subyacente. La densitometr\u00eda \u00f3sea (DXA) de columna lumbar y cadera es el est\u00e1ndar de oro: un T-score \u2264-2.5 diagnostica osteoporosis; entre -1.0 y -2.5, osteopenia. En pacientes con fracturas por fragilidad, la osteoporosis se diagnostica independientemente del T-score. El FRAX (herramienta de evaluaci\u00f3n de riesgo de fractura) estima el riesgo a 10 a\u00f1os. La evaluaci\u00f3n de laboratorio para causas endocrinas incluye: TSH y T4 libre (hipertiroidismo), cortisol urinario de 24 horas y prueba de supresi\u00f3n con dexametasona (Cushing), PTH y calcio s\u00e9rico (hiperparatiroidismo), testosterona, estradiol, FSH y LH (hipogonadismo), prolactina, IGF-1 (deficiencia de GH), 25-hidroxivitamina D, calcio y f\u00f3sforo s\u00e9ricos. Los marcadores de recambio \u00f3seo (CTX, P1NP, osteocalcina) ayudan a evaluar la actividad de resorci\u00f3n y formaci\u00f3n. Las radiograf\u00edas de columna detectan fracturas vertebrales subcl\u00ednicas.",
    "diagnosticoEn": "The diagnosis of endocrine osteoporosis requires confirmation of low bone mineral density and identification of the underlying hormonal cause. Dual-energy X-ray absorptiometry (DXA) of the lumbar spine and hip is the gold standard: a T-score of -2.5 or below diagnoses osteoporosis; between -1.0 and -2.5, osteopenia. In patients with fragility fractures, osteoporosis is diagnosed regardless of T-score. FRAX (fracture risk assessment tool) estimates 10-year fracture risk. Laboratory evaluation for endocrine causes includes: TSH and free T4 (hyperthyroidism), 24-hour urinary cortisol and dexamethasone suppression test (Cushing), PTH and serum calcium (hyperparathyroidism), testosterone, estradiol, FSH, and LH (hypogonadism), prolactin, IGF-1 (GH deficiency), 25-hydroxyvitamin D, serum calcium, and phosphorus. Bone turnover markers (CTX, P1NP, osteocalcin) help assess resorption and formation activity. Spine radiographs detect subclinical vertebral fractures.",
    "tratamientoEs": "El tratamiento de la osteoporosis endocrina tiene dos pilares fundamentales: el tratamiento de la causa hormonal subyacente y la terapia anti-osteopor\u00f3tica espec\u00edfica. Para la osteoporosis por glucocorticoides, se debe usar la dosis m\u00ednima efectiva de corticoides; los bisfosfonatos (alendronato 70 mg semanal, risedronato 35 mg semanal, \u00e1cido zoledr\u00f3nico 5 mg IV anual) son de primera l\u00ednea para prevenci\u00f3n y tratamiento. El denosumab (60 mg SC cada 6 meses, anticuerpo anti-RANKL) es una alternativa en pacientes con intolerancia a bisfosfonatos o insuficiencia renal. La teriparatida (PTH recombinante 1-34, 20 mcg/d\u00eda SC) es un agente anab\u00f3lico \u00f3seo indicado para osteoporosis severa con fracturas o fallo de antirresortivos. El romosozumab (anticuerpo anti-esclerostina) es otro agente anab\u00f3lico reciente. La suplementaci\u00f3n con calcio (1000-1200 mg/d\u00eda) y vitamina D (800-2000 UI/d\u00eda) es universal. Medidas generales incluyen ejercicio con carga de peso, prevenci\u00f3n de ca\u00eddas, abandono del tabaco y moderaci\u00f3n del alcohol. En el hiperparatiroidismo, la paratiroidectom\u00eda es curativa; en el hipogonadismo, la terapia de reemplazo hormonal protege el hueso.",
    "tratamientoEn": "Treatment of endocrine osteoporosis has two fundamental pillars: treatment of the underlying hormonal cause and specific anti-osteoporotic therapy. For glucocorticoid-induced osteoporosis, the minimum effective dose of corticosteroids should be used; bisphosphonates (alendronate 70 mg weekly, risedronate 35 mg weekly, zoledronic acid 5 mg IV yearly) are first-line for prevention and treatment. Denosumab (60 mg SC every 6 months, anti-RANKL antibody) is an alternative in patients with bisphosphonate intolerance or renal insufficiency. Teriparatide (recombinant PTH 1-34, 20 mcg/day SC) is a bone anabolic agent indicated for severe osteoporosis with fractures or failure of antiresorptives. Romosozumab (anti-sclerostin antibody) is another recent anabolic agent. Calcium supplementation (1000-1200 mg/day) and vitamin D (800-2000 IU/day) are universal. General measures include weight-bearing exercise, fall prevention, smoking cessation, and alcohol moderation. In hyperparathyroidism, parathyroidectomy is curative; in hypogonadism, hormone replacement therapy protects bone.",
    "prevencionEs": "La prevenci\u00f3n de la osteoporosis endocrina se centra en la detecci\u00f3n temprana y el manejo \u00f3ptimo de los trastornos hormonales subyacentes. En pacientes que inician glucocorticoides cr\u00f3nicos (prednisona \u22652.5 mg/d\u00eda por >3 meses), se debe realizar densitometr\u00eda \u00f3sea basal y considerar profilaxis con bisfosfonatos desde el inicio del tratamiento en pacientes de alto riesgo (edad >40 a\u00f1os, antecedente de fractura, dosis altas de corticoides). Asegurar una ingesta adecuada de calcio y vitamina D, mantener actividad f\u00edsica regular con ejercicios de carga de peso y resistencia, evitar el tabaquismo y el consumo excesivo de alcohol, y prevenir ca\u00eddas (evaluaci\u00f3n del hogar, ejercicios de equilibrio, correcci\u00f3n visual) son medidas fundamentales. El tamizaje con densitometr\u00eda \u00f3sea se recomienda en mujeres \u226565 a\u00f1os, hombres \u226570 a\u00f1os, y antes en presencia de factores de riesgo o enfermedades endocrinas.",
    "prevencionEn": "Prevention of endocrine osteoporosis focuses on early detection and optimal management of underlying hormonal disorders. In patients starting chronic glucocorticoids (prednisone >=2.5 mg/day for >3 months), baseline bone densitometry should be performed and bisphosphonate prophylaxis considered from treatment initiation in high-risk patients (age >40 years, history of fracture, high-dose corticosteroids). Ensuring adequate calcium and vitamin D intake, maintaining regular physical activity with weight-bearing and resistance exercises, avoiding smoking and excessive alcohol consumption, and preventing falls (home assessment, balance exercises, visual correction) are fundamental measures. Bone densitometry screening is recommended in women >=65 years, men >=70 years, and earlier in the presence of risk factors or endocrine diseases.",
    "complicacionesEs": [
      "Fracturas vertebrales por compresi\u00f3n (pueden ser m\u00faltiples y silentes)",
      "Fractura de cadera (mortalidad del 20-30% en el primer a\u00f1o en ancianos)",
      "Fracturas de mu\u00f1eca (fractura de Colles)",
      "Dolor cr\u00f3nico e incapacidad funcional",
      "P\u00e9rdida de independencia y necesidad de institucionalizaci\u00f3n",
      "Cifosis progresiva con restricci\u00f3n pulmonar",
      "Depresi\u00f3n y aislamiento social por limitaci\u00f3n de movilidad",
      "Complicaciones de la inmovilizaci\u00f3n (tromboembolismo, neumon\u00eda, \u00falceras por presi\u00f3n)"
    ],
    "complicacionesEn": [
      "Vertebral compression fractures (may be multiple and silent)",
      "Hip fracture (20-30% mortality in the first year in elderly)",
      "Wrist fractures (Colles fracture)",
      "Chronic pain and functional disability",
      "Loss of independence and need for institutionalization",
      "Progressive kyphosis with pulmonary restriction",
      "Depression and social isolation from mobility limitation",
      "Complications of immobilization (thromboembolism, pneumonia, pressure ulcers)"
    ],
    "cuandoConsultarEs": "Consulte a un endocrin\u00f3logo o reummat\u00f3logo si ha sufrido una fractura ante un trauma m\u00ednimo (ca\u00edda desde su propia altura o menos), si nota p\u00e9rdida progresiva de estatura, dolor de espalda agudo de inicio s\u00fabito, o si le han diagnosticado una enfermedad endocrina que afecta la salud \u00f3sea (hipertiroidismo, Cushing, hiperparatiroidismo, hipogonadismo). Consulte tambi\u00e9n si est\u00e1 recibiendo glucocorticoides cr\u00f3nicos y no le han realizado densitometr\u00eda \u00f3sea ni iniciado profilaxis. Las mujeres posmenop\u00e1usicas con factores de riesgo y los hombres mayores de 50 a\u00f1os con historia de fracturas deben solicitar evaluaci\u00f3n. La prevenci\u00f3n y detecci\u00f3n temprana son clave para evitar fracturas devastadoras.",
    "cuandoConsultarEn": "See an endocrinologist or rheumatologist if you have suffered a fracture from minimal trauma (fall from standing height or less), if you notice progressive height loss, sudden-onset acute back pain, or if you have been diagnosed with an endocrine disease affecting bone health (hyperthyroidism, Cushing, hyperparathyroidism, hypogonadism). Also consult if you are receiving chronic glucocorticoids and have not had bone densitometry or started prophylaxis. Postmenopausal women with risk factors and men over 50 with a history of fractures should request evaluation. Prevention and early detection are key to avoiding devastating fractures."
  }
]`);

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function buscarEndocrinologia(termino: string): EndocrinologiaEntry[] {
  const t = termino.toLowerCase();
  return ENDOCRINOLOGIA_ENTRIES.filter(e =>
    e.nombreEs.toLowerCase().includes(t) ||
    e.nombreEn.toLowerCase().includes(t) ||
    e.descripcionEs.toLowerCase().includes(t) ||
    e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getEndocrinologiaById(id: string): EndocrinologiaEntry | undefined {
  return ENDOCRINOLOGIA_ENTRIES.find(e => e.id === id);
}

export function getEndocrinologiaPorCategoria(categoria: string): EndocrinologiaEntry[] {
  const c = categoria.toLowerCase();
  return ENDOCRINOLOGIA_ENTRIES.filter(e =>
    e.categoriaEs.toLowerCase().includes(c) ||
    e.categoriaEn.toLowerCase().includes(c)
  );
}
