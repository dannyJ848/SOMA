// =============================================================================
// SOMA Oftalmologia Enciclopedia — Spanish-First Bilingual
// Comprehensive Ophthalmology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface OftalmologiaEntry {
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

export const OFTALMOLOGIA_ENTRIES: OftalmologiaEntry[] = JSON.parse(`[
  {
    "id": "glaucoma",
    "nombreEs": "Glaucoma",
    "nombreEn": "Glaucoma",
    "categoriaEs": "Neuropatia optica",
    "categoriaEn": "Optic neuropathy",
    "descripcionEs": "El glaucoma es un grupo de enfermedades oculares que danan el nervio optico, generalmente debido a una presion intraocular elevada. Es la principal causa de ceguera irreversible a nivel mundial, afectando a mas de 80 millones de personas. La forma mas comun es el glaucoma de angulo abierto, que progresa lentamente y sin sintomas tempranos, por lo que se le conoce como el ladron silencioso de la vision. La perdida de vision comienza con la periferia y avanza hacia el centro si no se trata. El diagnostico temprano y el tratamiento adecuado pueden preservar la vision restante, pero el dano ya causado al nervio optico es irreversible.",
    "descripcionEn": "Glaucoma is a group of eye diseases that damage the optic nerve, usually due to elevated intraocular pressure. It is the leading cause of irreversible blindness worldwide, affecting more than 80 million people. The most common form is open-angle glaucoma, which progresses slowly and without early symptoms, earning it the name the silent thief of sight. Vision loss begins in the periphery and advances toward the center if left untreated. Early diagnosis and proper treatment can preserve remaining vision, but damage already done to the optic nerve is irreversible.",
    "sintomasEs": [
      "Perdida gradual e indolora de la vision periferica (vision de tunel)",
      "Dificultad para adaptarse a ambientes oscuros",
      "Halos alrededor de las luces, especialmente por la noche",
      "Vision borrosa que no se corrige con lentes",
      "Dolor ocular intenso y repentino (en glaucoma de angulo cerrado agudo)",
      "Enrojecimiento ocular acompanado de nausea y vomito (angulo cerrado)",
      "Disminucion de la sensibilidad al contraste",
      "Necesidad frecuente de cambiar la graduacion de los lentes"
    ],
    "sintomasEn": [
      "Gradual painless loss of peripheral vision (tunnel vision)",
      "Difficulty adjusting to dark environments",
      "Halos around lights, especially at night",
      "Blurred vision not correctable with lenses",
      "Intense sudden eye pain (in acute angle-closure glaucoma)",
      "Eye redness accompanied by nausea and vomiting (angle closure)",
      "Decreased contrast sensitivity",
      "Frequent need to change eyeglass prescription"
    ],
    "causasEs": "El glaucoma se produce cuando el humor acuoso no drena adecuadamente del ojo, lo que eleva la presion intraocular y dana las fibras del nervio optico. En el glaucoma de angulo abierto, los canales de drenaje se obstruyen gradualmente. En el glaucoma de angulo cerrado, el iris bloquea fisicamente el angulo de drenaje. Factores de riesgo incluyen presion intraocular elevada, edad mayor de 60 anos, antecedentes familiares, ascendencia africana o hispana, miopia alta, uso prolongado de corticosteroides, y cornea central delgada. Existe tambien el glaucoma de tension normal donde el dano ocurre con presion intraocular dentro de rangos normales.",
    "causasEn": "Glaucoma occurs when aqueous humor does not drain properly from the eye, raising intraocular pressure and damaging optic nerve fibers. In open-angle glaucoma, the drainage channels become gradually blocked. In angle-closure glaucoma, the iris physically blocks the drainage angle. Risk factors include elevated intraocular pressure, age over 60, family history, African or Hispanic ancestry, high myopia, prolonged corticosteroid use, and thin central cornea. Normal-tension glaucoma also exists where damage occurs despite intraocular pressure within normal ranges.",
    "diagnosticoEs": "El diagnostico del glaucoma requiere una evaluacion oftalmologica completa que incluye tonometria para medir la presion intraocular (normal: 10-21 mmHg), gonioscopia para examinar el angulo de drenaje, oftalmoscopia para visualizar el nervio optico y detectar excavacion patologica (relacion copa/disco aumentada), campimetria computarizada (perimetria) para mapear el campo visual y detectar escotomas, paquimetria para medir el grosor corneal, y tomografia de coherencia optica (OCT) para evaluar la capa de fibras nerviosas retinianas. Se recomienda examen de deteccion a partir de los 40 anos, o antes si existen factores de riesgo.",
    "diagnosticoEn": "Glaucoma diagnosis requires a complete ophthalmologic evaluation including tonometry to measure intraocular pressure (normal: 10-21 mmHg), gonioscopy to examine the drainage angle, ophthalmoscopy to visualize the optic nerve and detect pathologic cupping (increased cup-to-disc ratio), computerized visual field testing (perimetry) to map the visual field and detect scotomas, pachymetry to measure corneal thickness, and optical coherence tomography (OCT) to assess the retinal nerve fiber layer. Screening examination is recommended starting at age 40, or earlier if risk factors are present.",
    "tratamientoEs": "El tratamiento del glaucoma busca reducir la presion intraocular para prevenir mayor dano al nervio optico. La primera linea son colirios hipotensores: analogos de prostaglandinas (latanoprost, travoprost, bimatoprost) que aumentan el drenaje uveoscleral, betabloqueadores (timolol) que reducen la produccion de humor acuoso, inhibidores de la anhidrasa carbonica (dorzolamida), y agonistas alfa-adrenergicos (brimonidina). La trabeculoplastia laser selectiva (SLT) es una opcion de primera o segunda linea que mejora el drenaje trabecular. La cirugia filtrante (trabeculectomia) crea una nueva via de drenaje cuando los medicamentos y el laser son insuficientes. Dispositivos de drenaje (valvula de Ahmed, implante de Baerveldt) se usan en glaucoma refractario. Las cirugias micro-invasivas de glaucoma (MIGS) ofrecen opciones menos agresivas con recuperacion mas rapida. El tratamiento es de por vida y requiere adherencia estricta.",
    "tratamientoEn": "Glaucoma treatment aims to lower intraocular pressure to prevent further optic nerve damage. First-line therapy consists of hypotensive eye drops: prostaglandin analogs (latanoprost, travoprost, bimatoprost) that increase uveoscleral outflow, beta-blockers (timolol) that reduce aqueous humor production, carbonic anhydrase inhibitors (dorzolamide), and alpha-adrenergic agonists (brimonidine). Selective laser trabeculoplasty (SLT) is a first- or second-line option that improves trabecular drainage. Filtering surgery (trabeculectomy) creates a new drainage pathway when medications and laser are insufficient. Drainage devices (Ahmed valve, Baerveldt implant) are used for refractory glaucoma. Micro-invasive glaucoma surgeries (MIGS) offer less aggressive options with faster recovery. Treatment is lifelong and requires strict adherence.",
    "prevencionEs": "No es posible prevenir el glaucoma, pero la deteccion temprana es fundamental para preservar la vision. Se recomienda examenes oftalmologicos completos cada 1-2 anos a partir de los 40 anos, o antes si hay antecedentes familiares. Personas de ascendencia africana o hispana deben iniciar el tamizaje a los 35 anos. Mantener un estilo de vida activo con ejercicio aerobico regular puede ayudar a reducir la presion intraocular. Evitar el uso prolongado de corticosteroides sin supervision medica. Proteger los ojos de traumatismos. Cumplir estrictamente con el tratamiento prescrito si ya se tiene diagnostico.",
    "prevencionEn": "It is not possible to prevent glaucoma, but early detection is essential to preserve vision. Complete ophthalmologic exams every 1-2 years are recommended starting at age 40, or earlier if there is family history. People of African or Hispanic descent should begin screening at age 35. Maintaining an active lifestyle with regular aerobic exercise may help lower intraocular pressure. Avoid prolonged use of corticosteroids without medical supervision. Protect eyes from trauma. Strictly comply with prescribed treatment if already diagnosed.",
    "complicacionesEs": [
      "Ceguera irreversible si no se trata",
      "Perdida progresiva del campo visual periferico",
      "Atrofia del nervio optico",
      "Disminucion severa de la calidad de vida",
      "Mayor riesgo de caidas y accidentes por perdida de vision periferica",
      "Crisis de glaucoma agudo de angulo cerrado (emergencia oftalmologica)"
    ],
    "complicacionesEn": [
      "Irreversible blindness if untreated",
      "Progressive peripheral visual field loss",
      "Optic nerve atrophy",
      "Severe decrease in quality of life",
      "Increased risk of falls and accidents due to peripheral vision loss",
      "Acute angle-closure glaucoma crisis (ophthalmologic emergency)"
    ],
    "cuandoConsultarEs": "Consulte de inmediato si experimenta dolor ocular severo y repentino, vision borrosa subita, halos alrededor de las luces con nausea o vomito, o enrojecimiento ocular intenso, ya que estos pueden indicar un ataque agudo de glaucoma de angulo cerrado, una emergencia oftalmologica. Consulte de forma programada si tiene mas de 40 anos y no se ha hecho un examen ocular completo en los ultimos dos anos, si tiene antecedentes familiares de glaucoma, o si nota cambios graduales en su vision periferica.",
    "cuandoConsultarEn": "Seek immediate attention if you experience severe sudden eye pain, sudden blurred vision, halos around lights with nausea or vomiting, or intense eye redness, as these may indicate an acute angle-closure glaucoma attack, an ophthalmologic emergency. Schedule a routine visit if you are over 40 and have not had a complete eye exam in the past two years, if you have a family history of glaucoma, or if you notice gradual changes in your peripheral vision."
  },
  {
    "id": "cataratas",
    "nombreEs": "Cataratas",
    "nombreEn": "Cataracts",
    "categoriaEs": "Cristalino",
    "categoriaEn": "Lens",
    "descripcionEs": "Las cataratas son una opacificacion del cristalino natural del ojo que causa vision borrosa y disminuida. Son la causa mas comun de perdida de vision en personas mayores de 40 anos y la principal causa de ceguera tratable en el mundo. Con la edad, las proteinas del cristalino se desnaturalizan y se agregan, formando areas opacas que impiden el paso adecuado de la luz hacia la retina. Existen tres tipos principales: nuclear (la mas comun, afecta el centro del cristalino), cortical (afecta los bordes) y subcapsular posterior (frecuente en diabeticos y usuarios de corticosteroides). La cirugia de cataratas es una de las intervenciones quirurgicas mas realizadas y exitosas en medicina moderna, con tasas de exito superiores al 95%.",
    "descripcionEn": "Cataracts are a clouding of the natural lens of the eye that causes blurred and decreased vision. They are the most common cause of vision loss in people over 40 and the leading cause of treatable blindness worldwide. With age, lens proteins denature and aggregate, forming opaque areas that prevent adequate light from reaching the retina. There are three main types: nuclear (most common, affects the center of the lens), cortical (affects the edges), and posterior subcapsular (common in diabetics and corticosteroid users). Cataract surgery is one of the most commonly performed and successful surgical procedures in modern medicine, with success rates exceeding 95%.",
    "sintomasEs": [
      "Vision borrosa o nublada progresiva, como mirar a traves de un vidrio empanado",
      "Mayor sensibilidad al deslumbramiento, especialmente al conducir de noche",
      "Necesidad de luz mas brillante para leer y realizar actividades cercanas",
      "Percepcion de colores desvanecidos o amarillentos",
      "Vision doble en un solo ojo (diplopia monocular)",
      "Cambios frecuentes en la graduacion de los lentes",
      "Dificultad con la vision nocturna",
      "Halos alrededor de las fuentes de luz"
    ],
    "sintomasEn": [
      "Progressive blurry or cloudy vision, like looking through a fogged-up window",
      "Increased sensitivity to glare, especially when driving at night",
      "Need for brighter light for reading and near activities",
      "Perception of faded or yellowish colors",
      "Double vision in one eye (monocular diplopia)",
      "Frequent changes in eyeglass prescription",
      "Difficulty with night vision",
      "Halos around light sources"
    ],
    "causasEs": "La causa principal de las cataratas es el envejecimiento natural del cristalino, con la mayoria de las personas desarrollando algun grado de opacidad despues de los 60 anos. La exposicion acumulativa a la radiacion ultravioleta del sol acelera la formacion de cataratas. La diabetes mellitus aumenta significativamente el riesgo y puede causar cataratas a edades mas tempranas. El uso prolongado de corticosteroides (orales, inhalados o en gotas) es un factor de riesgo importante. Otros factores incluyen traumatismo ocular, cirugia ocular previa, tabaquismo, consumo excesivo de alcohol, obesidad, hipertension arterial, y antecedentes familiares. Existen tambien cataratas congenitas presentes al nacer.",
    "causasEn": "The main cause of cataracts is natural aging of the lens, with most people developing some degree of opacity after age 60. Cumulative exposure to ultraviolet radiation from the sun accelerates cataract formation. Diabetes mellitus significantly increases risk and can cause cataracts at earlier ages. Prolonged use of corticosteroids (oral, inhaled, or drops) is an important risk factor. Other factors include ocular trauma, prior eye surgery, smoking, excessive alcohol consumption, obesity, high blood pressure, and family history. Congenital cataracts present at birth also exist.",
    "diagnosticoEs": "El diagnostico de cataratas se realiza mediante un examen ocular completo que incluye prueba de agudeza visual con tabla de Snellen para determinar el grado de perdida visual, examen con lampara de hendidura que permite al oftalmologo examinar en detalle el cristalino e identificar el tipo y la ubicacion de la opacidad, examen de fondo de ojo con dilatacion pupilar para descartar otras patologias retinianas, y prueba de sensibilidad al contraste. En la evaluacion preoperatoria se realizan biometria ocular para calcular la potencia del lente intraocular, topografia corneal, recuento de celulas endoteliales, y OCT macular para evaluar la salud de la retina.",
    "diagnosticoEn": "Cataract diagnosis is made through a comprehensive eye examination including visual acuity testing with Snellen chart to determine the degree of vision loss, slit-lamp examination allowing the ophthalmologist to examine the lens in detail and identify the type and location of opacity, dilated fundus examination to rule out other retinal pathologies, and contrast sensitivity testing. Preoperative evaluation includes ocular biometry to calculate intraocular lens power, corneal topography, endothelial cell count, and macular OCT to assess retinal health.",
    "tratamientoEs": "En etapas tempranas, los cambios en la graduacion de los lentes, el uso de iluminacion mas brillante y lentes antideslumbramiento pueden mejorar la vision. Cuando la catarata interfiere significativamente con las actividades diarias, el tratamiento definitivo es la cirugia. La facoemulsificacion es la tecnica estandar: a traves de una incision de 2-3 mm, se utiliza ultrasonido para fragmentar y aspirar el cristalino opaco, reemplazandolo con un lente intraocular artificial (LIO). Los LIO pueden ser monofocales (una distancia), multifocales (varias distancias), o toricos (corrigen astigmatismo). La cirugia ambulatoria toma 15-30 minutos bajo anestesia topica con gotas. La recuperacion visual es rapida, con mejoria significativa en dias. Se operan ambos ojos por separado, generalmente con 1-4 semanas de intervalo. El tratamiento postoperatorio incluye gotas antiinflamatorias y antibioticas por 4-6 semanas.",
    "tratamientoEn": "In early stages, changes in eyeglass prescription, use of brighter lighting, and anti-glare lenses can improve vision. When the cataract significantly interferes with daily activities, definitive treatment is surgery. Phacoemulsification is the standard technique: through a 2-3 mm incision, ultrasound is used to fragment and aspirate the cloudy lens, replacing it with an artificial intraocular lens (IOL). IOLs can be monofocal (one distance), multifocal (multiple distances), or toric (correct astigmatism). Outpatient surgery takes 15-30 minutes under topical anesthesia with drops. Visual recovery is rapid, with significant improvement within days. Both eyes are operated separately, usually 1-4 weeks apart. Postoperative treatment includes anti-inflammatory and antibiotic drops for 4-6 weeks.",
    "prevencionEs": "Proteger los ojos de la radiacion ultravioleta usando gafas de sol con proteccion UV 100% y sombrero de ala ancha al estar al aire libre. Controlar adecuadamente la diabetes y la hipertension arterial. Dejar de fumar y limitar el consumo de alcohol. Llevar una dieta rica en antioxidantes, especialmente frutas y verduras con vitaminas C y E, luteina y zeaxantina (espinacas, col rizada, naranjas, bayas). Realizar examenes oculares regulares a partir de los 40 anos. Evitar el uso innecesario de corticosteroides. Proteger los ojos de traumatismos con lentes de seguridad en actividades de riesgo.",
    "prevencionEn": "Protect eyes from ultraviolet radiation by wearing sunglasses with 100% UV protection and a wide-brimmed hat when outdoors. Adequately control diabetes and high blood pressure. Quit smoking and limit alcohol consumption. Eat a diet rich in antioxidants, especially fruits and vegetables with vitamins C and E, lutein, and zeaxanthin (spinach, kale, oranges, berries). Have regular eye exams starting at age 40. Avoid unnecessary use of corticosteroids. Protect eyes from trauma with safety glasses during risky activities.",
    "complicacionesEs": [
      "Perdida progresiva de la vision que afecta las actividades diarias",
      "Ceguera si no se trata en etapas avanzadas",
      "Mayor riesgo de caidas y fracturas en adultos mayores",
      "Opacificacion de la capsula posterior despues de cirugia (catarata secundaria, tratable con laser YAG)",
      "Infeccion postoperatoria (endoftalmitis, rara pero grave)",
      "Edema macular cistoide postoperatorio",
      "Desprendimiento de retina postoperatorio (raro)"
    ],
    "complicacionesEn": [
      "Progressive vision loss affecting daily activities",
      "Blindness if untreated in advanced stages",
      "Increased risk of falls and fractures in older adults",
      "Posterior capsule opacification after surgery (secondary cataract, treatable with YAG laser)",
      "Postoperative infection (endophthalmitis, rare but serious)",
      "Postoperative cystoid macular edema",
      "Postoperative retinal detachment (rare)"
    ],
    "cuandoConsultarEs": "Consulte a un oftalmologo si nota vision borrosa progresiva que no mejora con lentes, dificultad para conducir de noche debido al deslumbramiento, problemas para leer o realizar actividades cotidianas a pesar de buena iluminacion, o si percibe los colores de manera diferente. Si ya fue diagnosticado con cataratas, consulte cuando la vision afecte su calidad de vida y sus actividades habituales. Despues de la cirugia, busque atencion inmediata si presenta dolor severo, perdida subita de vision, enrojecimiento intenso o secrecion abundante.",
    "cuandoConsultarEn": "See an ophthalmologist if you notice progressive blurry vision not improving with glasses, difficulty driving at night due to glare, trouble reading or performing daily activities despite good lighting, or if you perceive colors differently. If already diagnosed with cataracts, consult when vision affects your quality of life and usual activities. After surgery, seek immediate attention if you experience severe pain, sudden vision loss, intense redness, or heavy discharge."
  },
  {
    "id": "degeneracion-macular",
    "nombreEs": "Degeneracion Macular Relacionada con la Edad (DMRE)",
    "nombreEn": "Age-Related Macular Degeneration (AMD)",
    "categoriaEs": "Retina",
    "categoriaEn": "Retina",
    "descripcionEs": "La degeneracion macular relacionada con la edad es una enfermedad cronica y progresiva que afecta la macula, la parte central de la retina responsable de la vision detallada y central. Es la causa principal de perdida de vision central en personas mayores de 50 anos en paises desarrollados. Existen dos formas: la seca (atrofica), que representa el 80-90% de los casos y progresa lentamente con acumulacion de drusas y atrofia del epitelio pigmentario retiniano, y la humeda (neovascular o exudativa), menos frecuente pero mas agresiva, donde crecen vasos sanguineos anormales bajo la retina que pueden sangrar y causar perdida rapida de vision. La vision periferica se preserva, pero la perdida de vision central afecta severamente la lectura, el reconocimiento de rostros y la conduccion.",
    "descripcionEn": "Age-related macular degeneration is a chronic progressive disease affecting the macula, the central part of the retina responsible for detailed and central vision. It is the leading cause of central vision loss in people over 50 in developed countries. Two forms exist: dry (atrophic), representing 80-90% of cases and progressing slowly with drusen accumulation and retinal pigment epithelium atrophy, and wet (neovascular or exudative), less common but more aggressive, where abnormal blood vessels grow beneath the retina that can bleed and cause rapid vision loss. Peripheral vision is preserved, but central vision loss severely affects reading, face recognition, and driving.",
    "sintomasEs": [
      "Distorsion de las lineas rectas (metamorfopsia), como ver las lineas de un marco onduladas",
      "Mancha oscura o borrosa en el centro del campo visual (escotoma central)",
      "Dificultad creciente para leer, especialmente con poca luz",
      "Necesidad de iluminacion cada vez mas intensa para actividades cercanas",
      "Disminucion de la percepcion de los colores",
      "Dificultad para reconocer rostros familiares",
      "Adaptacion lenta al pasar de ambientes luminosos a oscuros",
      "Vision central borrosa que empeora gradualmente"
    ],
    "sintomasEn": [
      "Distortion of straight lines (metamorphopsia), such as seeing picture frame lines as wavy",
      "Dark or blurry spot in the center of the visual field (central scotoma)",
      "Increasing difficulty reading, especially in low light",
      "Need for increasingly bright lighting for near activities",
      "Decreased color perception",
      "Difficulty recognizing familiar faces",
      "Slow adaptation when transitioning from bright to dark environments",
      "Central blurred vision that gradually worsens"
    ],
    "causasEs": "La DMRE resulta de una combinacion de factores geneticos y ambientales. El envejecimiento es el principal factor de riesgo, con incidencia que aumenta exponencialmente despues de los 60 anos. El tabaquismo duplica el riesgo y es el factor de riesgo modificable mas importante. La genetica juega un papel significativo, con variantes en los genes del complemento (CFH, ARMS2) que explican hasta el 50% del riesgo. Otros factores incluyen antecedentes familiares, ascendencia caucasica, sexo femenino, obesidad, hipertension arterial, enfermedad cardiovascular, dieta pobre en antioxidantes y acidos grasos omega-3, y exposicion excesiva a la luz solar sin proteccion.",
    "causasEn": "AMD results from a combination of genetic and environmental factors. Aging is the primary risk factor, with incidence increasing exponentially after age 60. Smoking doubles the risk and is the most important modifiable risk factor. Genetics play a significant role, with variants in complement genes (CFH, ARMS2) accounting for up to 50% of risk. Other factors include family history, Caucasian ancestry, female sex, obesity, high blood pressure, cardiovascular disease, diet poor in antioxidants and omega-3 fatty acids, and excessive sun exposure without protection.",
    "diagnosticoEs": "El diagnostico de la DMRE incluye examen de fondo de ojo con dilatacion pupilar para visualizar drusas, cambios pigmentarios y atrofia o neovascularizacion, prueba de la rejilla de Amsler para detectar metamorfopsia (distorsion de lineas rectas), tomografia de coherencia optica (OCT) que proporciona imagenes de alta resolucion de las capas retinianas y detecta liquido subretiniano o intrarretiniano, angiografia con fluoresceina para visualizar la vasculatura retiniana y detectar membranas neovasculares, y angiografia por OCT (OCT-A) que permite visualizar los vasos sin necesidad de inyeccion de contraste. La autofluorescencia del fondo de ojo ayuda a detectar areas de atrofia del epitelio pigmentario.",
    "diagnosticoEn": "AMD diagnosis includes dilated fundus examination to visualize drusen, pigmentary changes, and atrophy or neovascularization, Amsler grid test to detect metamorphopsia (straight line distortion), optical coherence tomography (OCT) providing high-resolution images of retinal layers and detecting subretinal or intraretinal fluid, fluorescein angiography to visualize retinal vasculature and detect neovascular membranes, and OCT angiography (OCT-A) allowing vessel visualization without contrast injection. Fundus autofluorescence helps detect areas of pigment epithelium atrophy.",
    "tratamientoEs": "Para la DMRE seca no existe tratamiento curativo, pero el estudio AREDS2 demostro que suplementos con vitaminas C y E, luteina, zeaxantina, zinc y cobre reducen en un 25% el riesgo de progresion a etapas avanzadas. Se recomienda monitoreo regular con rejilla de Amsler en casa y OCT periodica. Para la DMRE humeda, el tratamiento estandar son las inyecciones intravitreas de anti-VEGF (factor de crecimiento endotelial vascular): ranibizumab, aflibercept, bevacizumab (off-label), y faricimab. Estas inyecciones se administran mensualmente al inicio y luego se espacian segun la respuesta (regimenes treat-and-extend). Pueden estabilizar o mejorar la vision en mas del 90% de los pacientes. La terapia fotodinamica con verteporfina es una opcion para casos especificos. La rehabilitacion de baja vision con ayudas opticas mejora la funcionalidad.",
    "tratamientoEn": "For dry AMD there is no curative treatment, but the AREDS2 study showed that supplements with vitamins C and E, lutein, zeaxanthin, zinc, and copper reduce the risk of progression to advanced stages by 25%. Regular monitoring with home Amsler grid and periodic OCT is recommended. For wet AMD, the standard treatment is intravitreal anti-VEGF (vascular endothelial growth factor) injections: ranibizumab, aflibercept, bevacizumab (off-label), and faricimab. These injections are administered monthly initially and then spaced based on response (treat-and-extend regimens). They can stabilize or improve vision in more than 90% of patients. Photodynamic therapy with verteporfin is an option for specific cases. Low vision rehabilitation with optical aids improves functionality.",
    "prevencionEs": "Dejar de fumar es la medida preventiva mas importante para reducir el riesgo de DMRE. Mantener una dieta rica en verduras de hoja verde oscuro (espinacas, col rizada) que contienen luteina y zeaxantina, y consumir pescado rico en omega-3 al menos dos veces por semana. Mantener un peso saludable y hacer ejercicio regularmente. Controlar la presion arterial y el colesterol. Usar gafas de sol con proteccion UV al estar al aire libre. Los suplementos AREDS2 estan recomendados para pacientes con DMRE intermedia o avanzada en un ojo. Monitorear la vision regularmente con la rejilla de Amsler. Examenes oftalmologicos anuales despues de los 50 anos.",
    "prevencionEn": "Quitting smoking is the most important preventive measure to reduce AMD risk. Maintain a diet rich in dark leafy greens (spinach, kale) containing lutein and zeaxanthin, and consume omega-3-rich fish at least twice weekly. Maintain a healthy weight and exercise regularly. Control blood pressure and cholesterol. Wear UV-protective sunglasses when outdoors. AREDS2 supplements are recommended for patients with intermediate or advanced AMD in one eye. Monitor vision regularly with the Amsler grid. Annual eye exams after age 50.",
    "complicacionesEs": [
      "Perdida irreversible de la vision central",
      "Incapacidad para leer, conducir o reconocer rostros",
      "Atrofia geografica extensa en la forma seca avanzada",
      "Hemorragia subretiniana o vitrea en la forma humeda",
      "Cicatriz disciforme (fibrosis subretiniana) en DMRE humeda no tratada",
      "Depresion y aislamiento social por perdida de vision",
      "Alucinaciones visuales (sindrome de Charles Bonnet)"
    ],
    "complicacionesEn": [
      "Irreversible central vision loss",
      "Inability to read, drive, or recognize faces",
      "Extensive geographic atrophy in advanced dry form",
      "Subretinal or vitreous hemorrhage in wet form",
      "Disciform scar (subretinal fibrosis) in untreated wet AMD",
      "Depression and social isolation due to vision loss",
      "Visual hallucinations (Charles Bonnet syndrome)"
    ],
    "cuandoConsultarEs": "Consulte de urgencia si nota distorsion subita de las lineas rectas, aparicion de una mancha oscura en la vision central, o perdida rapida de vision, ya que estos pueden indicar conversion a DMRE humeda que requiere tratamiento inmediato con anti-VEGF. Si ya tiene diagnostico de DMRE seca, use la rejilla de Amsler diariamente y acuda inmediatamente si detecta cualquier cambio. Mantenga sus citas de seguimiento regulares con el oftalmologo para monitorear la progresion de la enfermedad.",
    "cuandoConsultarEn": "Seek urgent consultation if you notice sudden distortion of straight lines, appearance of a dark spot in central vision, or rapid vision loss, as these may indicate conversion to wet AMD requiring immediate anti-VEGF treatment. If already diagnosed with dry AMD, use the Amsler grid daily and go immediately if you detect any changes. Maintain your regular follow-up appointments with the ophthalmologist to monitor disease progression."
  },
  {
    "id": "retinopatia-diabetica",
    "nombreEs": "Retinopatia Diabetica",
    "nombreEn": "Diabetic Retinopathy",
    "categoriaEs": "Retina",
    "categoriaEn": "Retina",
    "descripcionEs": "La retinopatia diabetica es una complicacion microvasular de la diabetes mellitus que afecta los vasos sanguineos de la retina. Es la principal causa de ceguera en adultos en edad laboral en paises desarrollados. La hiperglucemia cronica dana los pericitos y las celulas endoteliales de los capilares retinianos, causando microaneurismas, hemorragias, exudados y, en etapas avanzadas, neovascularizacion patologica. Se clasifica en no proliferativa (leve, moderada, severa) y proliferativa, cuando aparecen nuevos vasos anormales fragiles que pueden sangrar hacia el vitreo. El edema macular diabetico, que puede ocurrir en cualquier etapa, es la causa mas comun de perdida visual en pacientes diabeticos. Aproximadamente un tercio de los diabeticos tienen algun grado de retinopatia.",
    "descripcionEn": "Diabetic retinopathy is a microvascular complication of diabetes mellitus affecting retinal blood vessels. It is the leading cause of blindness in working-age adults in developed countries. Chronic hyperglycemia damages pericytes and endothelial cells of retinal capillaries, causing microaneurysms, hemorrhages, exudates, and in advanced stages, pathologic neovascularization. It is classified as nonproliferative (mild, moderate, severe) and proliferative, when fragile new abnormal vessels appear that can bleed into the vitreous. Diabetic macular edema, which can occur at any stage, is the most common cause of visual loss in diabetic patients. Approximately one-third of diabetics have some degree of retinopathy.",
    "sintomasEs": [
      "Frecuentemente asintomatica en etapas tempranas (por eso el tamizaje es esencial)",
      "Vision borrosa fluctuante que puede variar con los niveles de glucosa",
      "Manchas oscuras o flotantes (moscas volantes) en el campo visual",
      "Areas oscuras o vacias en la vision",
      "Dificultad para percibir los colores correctamente",
      "Perdida subita de vision (por hemorragia vitrea)",
      "Vision central distorsionada (por edema macular diabetico)",
      "Dificultad creciente para la vision nocturna"
    ],
    "sintomasEn": [
      "Frequently asymptomatic in early stages (screening is therefore essential)",
      "Fluctuating blurred vision that may vary with glucose levels",
      "Dark spots or floaters in the visual field",
      "Dark or empty areas in vision",
      "Difficulty perceiving colors correctly",
      "Sudden vision loss (from vitreous hemorrhage)",
      "Distorted central vision (from diabetic macular edema)",
      "Increasing difficulty with night vision"
    ],
    "causasEs": "La causa fundamental es la hiperglucemia cronica de la diabetes mellitus, tanto tipo 1 como tipo 2. La duracion de la diabetes es el factor de riesgo mas importante: despues de 20 anos, casi todos los pacientes con tipo 1 y mas del 60% con tipo 2 presentan algun grado de retinopatia. El mal control glucemico (hemoglobina glicosilada HbA1c elevada) acelera la progresion. La hipertension arterial es un factor de riesgo mayor independiente. Otros factores incluyen dislipidemia, embarazo (puede acelerar la progresion), nefropatia diabetica, anemia, tabaquismo, y factores geneticos. La obesidad y el sindrome metabolico tambien contribuyen al riesgo.",
    "causasEn": "The fundamental cause is chronic hyperglycemia from diabetes mellitus, both type 1 and type 2. Duration of diabetes is the most important risk factor: after 20 years, nearly all type 1 patients and more than 60% of type 2 patients have some degree of retinopathy. Poor glycemic control (elevated glycated hemoglobin HbA1c) accelerates progression. Hypertension is a major independent risk factor. Other factors include dyslipidemia, pregnancy (can accelerate progression), diabetic nephropathy, anemia, smoking, and genetic factors. Obesity and metabolic syndrome also contribute to risk.",
    "diagnosticoEs": "El diagnostico requiere examen de fondo de ojo con dilatacion pupilar realizado por un oftalmologo o mediante fotografia de fondo de ojo con interpretacion especializada. La clasificacion se basa en los hallazgos: microaneurismas solos (leve), microaneurismas con hemorragias y exudados (moderada), regla 4-2-1 para severa (hemorragias en 4 cuadrantes, arrosariamiento venoso en 2, o anomalias microvasculares intrarretinianas en 1). La proliferativa se diagnostica por neovascularizacion en disco o en otros sitios. La OCT es esencial para diagnosticar y monitorear el edema macular diabetico. La angiografia con fluoresceina muestra areas de isquemia y fuga vascular. El tamizaje anual es obligatorio para todo paciente diabetico desde el diagnostico (tipo 2) o 5 anos despues del diagnostico (tipo 1).",
    "diagnosticoEn": "Diagnosis requires dilated fundus examination by an ophthalmologist or through fundus photography with specialized interpretation. Classification is based on findings: microaneurysms alone (mild), microaneurysms with hemorrhages and exudates (moderate), 4-2-1 rule for severe (hemorrhages in 4 quadrants, venous beading in 2, or intraretinal microvascular abnormalities in 1). Proliferative is diagnosed by neovascularization at the disc or elsewhere. OCT is essential for diagnosing and monitoring diabetic macular edema. Fluorescein angiography shows areas of ischemia and vascular leakage. Annual screening is mandatory for all diabetic patients from diagnosis (type 2) or 5 years after diagnosis (type 1).",
    "tratamientoEs": "El control estricto de la glucemia (HbA1c menor a 7%), la presion arterial (menor a 130/80 mmHg) y los lipidos es fundamental y puede prevenir o retardar la progresion. Para el edema macular diabetico, las inyecciones intravitreas de anti-VEGF (aflibercept, ranibizumab, bevacizumab, faricimab) son el tratamiento de primera linea, administradas mensualmente al inicio y luego segun respuesta. El laser focal o en rejilla puede complementar el tratamiento del edema macular. Para la retinopatia proliferativa, la panfotocoagulacion con laser (PFC) sigue siendo el tratamiento estandar, aplicando miles de disparos laser en la retina periferica para reducir la demanda de oxigeno y la produccion de VEGF. Las inyecciones anti-VEGF tambien se usan como complemento o alternativa. La vitrectomia se indica en hemorragia vitrea que no se aclara, desprendimiento de retina traccional que amenaza la macula, o edema macular traccional.",
    "tratamientoEn": "Strict control of blood glucose (HbA1c below 7%), blood pressure (below 130/80 mmHg), and lipids is fundamental and can prevent or delay progression. For diabetic macular edema, intravitreal anti-VEGF injections (aflibercept, ranibizumab, bevacizumab, faricimab) are first-line treatment, administered monthly initially then based on response. Focal or grid laser can complement macular edema treatment. For proliferative retinopathy, panretinal photocoagulation (PRP) remains the standard treatment, applying thousands of laser spots to the peripheral retina to reduce oxygen demand and VEGF production. Anti-VEGF injections are also used as adjuncts or alternatives. Vitrectomy is indicated for non-clearing vitreous hemorrhage, tractional retinal detachment threatening the macula, or tractional macular edema.",
    "prevencionEs": "El control optimo de la diabetes es la medida preventiva mas importante. Mantener la HbA1c por debajo del 7% reduce el riesgo de desarrollar retinopatia en un 76% segun el estudio DCCT/EDIC. Controlar la presion arterial por debajo de 130/80 mmHg. Manejar la dislipidemia con estatinas y fibratos segun indicacion. No fumar. Realizar ejercicio aerobico regular. Cumplir con el tamizaje oftalmologico anual sin excepcion. La deteccion temprana permite el tratamiento oportuno antes de que ocurra perdida visual significativa. Las mujeres diabeticas que planean embarazo deben tener un examen de fondo de ojo previo y seguimiento cercano durante la gestacion.",
    "prevencionEn": "Optimal diabetes control is the most important preventive measure. Maintaining HbA1c below 7% reduces the risk of developing retinopathy by 76% according to the DCCT/EDIC study. Control blood pressure below 130/80 mmHg. Manage dyslipidemia with statins and fibrates as indicated. Do not smoke. Perform regular aerobic exercise. Comply with annual ophthalmologic screening without exception. Early detection allows timely treatment before significant vision loss occurs. Diabetic women planning pregnancy should have a prior fundus examination and close follow-up during gestation.",
    "complicacionesEs": [
      "Hemorragia vitrea que causa perdida subita de vision",
      "Desprendimiento de retina traccional",
      "Glaucoma neovascular (crecimiento de vasos en el iris y angulo de drenaje)",
      "Edema macular diabetico cronico con dano permanente a los fotorreceptores",
      "Ceguera legal o total en casos avanzados no tratados",
      "Isquemia macular con perdida irreversible de la vision central",
      "Rubeosis iridis (neovascularizacion del iris)"
    ],
    "complicacionesEn": [
      "Vitreous hemorrhage causing sudden vision loss",
      "Tractional retinal detachment",
      "Neovascular glaucoma (vessel growth in iris and drainage angle)",
      "Chronic diabetic macular edema with permanent photoreceptor damage",
      "Legal or total blindness in untreated advanced cases",
      "Macular ischemia with irreversible central vision loss",
      "Rubeosis iridis (iris neovascularization)"
    ],
    "cuandoConsultarEs": "Busque atencion oftalmologica urgente si experimenta perdida subita de vision, aumento repentino de manchas flotantes, cortina o sombra en su campo visual, o dolor ocular, ya que estos pueden indicar hemorragia vitrea o desprendimiento de retina. Todo paciente diabetico debe realizarse un examen de fondo de ojo con dilatacion pupilar al momento del diagnostico de diabetes tipo 2, dentro de los primeros 5 anos del diagnostico de tipo 1, y anualmente en adelante. Si ya tiene retinopatia diagnosticada, el seguimiento debe ser mas frecuente segun la severidad.",
    "cuandoConsultarEn": "Seek urgent ophthalmologic attention if you experience sudden vision loss, sudden increase in floaters, a curtain or shadow in your visual field, or eye pain, as these may indicate vitreous hemorrhage or retinal detachment. Every diabetic patient should have a dilated fundus examination at diagnosis of type 2 diabetes, within the first 5 years of type 1 diagnosis, and annually thereafter. If retinopathy is already diagnosed, follow-up should be more frequent based on severity."
  },
  {
    "id": "conjuntivitis",
    "nombreEs": "Conjuntivitis",
    "nombreEn": "Conjunctivitis",
    "categoriaEs": "Superficie ocular",
    "categoriaEn": "Ocular surface",
    "descripcionEs": "La conjuntivitis es la inflamacion de la conjuntiva, la membrana transparente que recubre la parte blanca del ojo y la superficie interna de los parpados. Es una de las afecciones oculares mas comunes y puede ser causada por infecciones virales, bacterianas, alergias o irritantes. La conjuntivitis viral es la forma mas frecuente, altamente contagiosa, y generalmente autolimitada. La conjuntivitis bacteriana produce secrecion purulenta y requiere tratamiento antibiotico. La conjuntivitis alergica afecta a ambos ojos con picazon intensa como sintoma principal. Aunque generalmente es benigna y autolimitada, algunas formas pueden causar complicaciones serias si no se tratan adecuadamente, especialmente en recien nacidos (conjuntivitis neonatal) y en portadores de lentes de contacto.",
    "descripcionEn": "Conjunctivitis is inflammation of the conjunctiva, the transparent membrane covering the white part of the eye and the inner surface of the eyelids. It is one of the most common eye conditions and can be caused by viral infections, bacterial infections, allergies, or irritants. Viral conjunctivitis is the most frequent form, highly contagious, and generally self-limiting. Bacterial conjunctivitis produces purulent discharge and requires antibiotic treatment. Allergic conjunctivitis affects both eyes with intense itching as the main symptom. Although generally benign and self-limiting, some forms can cause serious complications if not treated properly, especially in newborns (neonatal conjunctivitis) and contact lens wearers.",
    "sintomasEs": [
      "Enrojecimiento ocular (inyeccion conjuntival) en uno o ambos ojos",
      "Secrecion acuosa y clara (viral) o espesa y amarillo-verdosa (bacteriana)",
      "Picazon intensa (caracteristica principal de la conjuntivitis alergica)",
      "Lagrimeo excesivo",
      "Sensacion de cuerpo extrano o arenilla en el ojo",
      "Costras en los parpados al despertar, especialmente en la forma bacteriana",
      "Edema palpebral (hinchazon de los parpados)",
      "Sensibilidad leve a la luz (fotofobia)"
    ],
    "sintomasEn": [
      "Eye redness (conjunctival injection) in one or both eyes",
      "Watery clear discharge (viral) or thick yellow-green discharge (bacterial)",
      "Intense itching (main characteristic of allergic conjunctivitis)",
      "Excessive tearing",
      "Foreign body or gritty sensation in the eye",
      "Crusting on eyelids upon waking, especially in bacterial form",
      "Eyelid edema (swelling of the eyelids)",
      "Mild light sensitivity (photophobia)"
    ],
    "causasEs": "La conjuntivitis viral es causada mas frecuentemente por adenovirus (tipos 3, 7, 8, 19, 37), y puede acompanar infecciones respiratorias superiores. Es altamente contagiosa por contacto directo y gotas respiratorias, con un periodo de contagio de hasta dos semanas. La conjuntivitis bacteriana es causada por Staphylococcus aureus, Streptococcus pneumoniae, Haemophilus influenzae y Moraxella catarrhalis, y en recien nacidos por Neisseria gonorrhoeae y Chlamydia trachomatis. La conjuntivitis alergica es mediada por IgE en respuesta a alergenos como polen, acaros del polvo, caspa de animales y moho. Los irritantes quimicos (cloro de piscinas, humo, cosmeticos) y los lentes de contacto tambien pueden causar conjuntivitis. La conjuntivitis papilar gigante ocurre por uso prolongado de lentes de contacto.",
    "causasEn": "Viral conjunctivitis is most frequently caused by adenoviruses (types 3, 7, 8, 19, 37), and may accompany upper respiratory infections. It is highly contagious through direct contact and respiratory droplets, with a contagious period of up to two weeks. Bacterial conjunctivitis is caused by Staphylococcus aureus, Streptococcus pneumoniae, Haemophilus influenzae, and Moraxella catarrhalis, and in newborns by Neisseria gonorrhoeae and Chlamydia trachomatis. Allergic conjunctivitis is IgE-mediated in response to allergens such as pollen, dust mites, animal dander, and mold. Chemical irritants (pool chlorine, smoke, cosmetics) and contact lenses can also cause conjunctivitis. Giant papillary conjunctivitis occurs from prolonged contact lens use.",
    "diagnosticoEs": "El diagnostico es principalmente clinico, basado en la historia y el examen fisico. Se evalua el tipo de secrecion (acuosa en viral, mucopurulenta en bacteriana, mucosa en alergica), la lateralidad (unilateral al inicio en viral y bacteriana, bilateral en alergica), la presencia de ganglios preauriculares (comun en viral), y la respuesta a tratamientos previos. El examen con lampara de hendidura puede revelar foliculos (viral), papilas (alergica/bacteriana), membranas o pseudomembranas (adenovirus severo), o infiltrados corneales. Cultivos bacterianos estan indicados en neonatos, casos severos, resistentes al tratamiento, o sospecha de gonococo o clamidia. Las pruebas de alergias cutaneas o de IgE especifica ayudan en conjuntivitis alergica cronica. Se debe descartar siempre queratitis, uveitis y glaucoma agudo.",
    "diagnosticoEn": "Diagnosis is primarily clinical, based on history and physical examination. The type of discharge is evaluated (watery in viral, mucopurulent in bacterial, mucoid in allergic), laterality (unilateral at onset in viral and bacterial, bilateral in allergic), presence of preauricular lymph nodes (common in viral), and response to previous treatments. Slit-lamp examination may reveal follicles (viral), papillae (allergic/bacterial), membranes or pseudomembranes (severe adenovirus), or corneal infiltrates. Bacterial cultures are indicated in neonates, severe cases, treatment-resistant cases, or suspected gonococcal or chlamydial infection. Allergy skin testing or specific IgE tests help in chronic allergic conjunctivitis. Keratitis, uveitis, and acute glaucoma must always be ruled out.",
    "tratamientoEs": "La conjuntivitis viral es autolimitada y el tratamiento es de soporte: compresas frias, lagrimas artificiales, y en casos severos con membranas o infiltrados subepiteliales, corticosteroides topicos bajo supervision oftalmologica estricta. La conjuntivitis bacteriana se trata con antibioticos topicos: fluoroquinolonas (moxifloxacino, ofloxacino), aminoglucosidos (tobramicina), macrolidos (eritromicina), o trimetoprim-polimixina B. La conjuntivitis gonocococica neonatal es una emergencia que requiere ceftriaxona intramuscular y lavados oculares frecuentes. La conjuntivitis alergica se trata con antihistaminicos topicos (olopatadina, ketotifeno), estabilizadores de mastocitos, lagrimas artificiales para diluir alergenos, y compresas frias. Casos severos pueden requerir corticosteroides topicos por periodo corto, ciclosporina topica o tacrolimus. Se deben evitar los vasoconstrictores topicos por efecto rebote.",
    "tratamientoEn": "Viral conjunctivitis is self-limiting and treatment is supportive: cold compresses, artificial tears, and in severe cases with membranes or subepithelial infiltrates, topical corticosteroids under strict ophthalmologic supervision. Bacterial conjunctivitis is treated with topical antibiotics: fluoroquinolones (moxifloxacin, ofloxacin), aminoglycosides (tobramycin), macrolides (erythromycin), or trimethoprim-polymyxin B. Neonatal gonococcal conjunctivitis is an emergency requiring intramuscular ceftriaxone and frequent ocular lavage. Allergic conjunctivitis is treated with topical antihistamines (olopatadine, ketotifen), mast cell stabilizers, artificial tears to dilute allergens, and cold compresses. Severe cases may require short-term topical corticosteroids, topical cyclosporine, or tacrolimus. Topical vasoconstrictors should be avoided due to rebound effect.",
    "prevencionEs": "Para la conjuntivitis viral y bacteriana: lavarse las manos frecuentemente con agua y jabon, evitar tocarse los ojos, no compartir toallas, almohadas, cosmeticos ni gotas oculares, desinfectar superficies de contacto frecuente, y quedarse en casa durante el periodo contagioso. Los ninos deben quedarse en casa y no asistir a la escuela mientras tengan secrecion activa. Para la conjuntivitis alergica: evitar los alergenos conocidos, mantener ventanas cerradas durante las temporadas de polen alto, usar filtros de aire HEPA, lavar la ropa de cama frecuentemente en agua caliente, y usar gafas envolventes al aire libre. Los usuarios de lentes de contacto deben seguir estrictamente las instrucciones de limpieza y reemplazo.",
    "prevencionEn": "For viral and bacterial conjunctivitis: wash hands frequently with soap and water, avoid touching eyes, do not share towels, pillows, cosmetics, or eye drops, disinfect frequently touched surfaces, and stay home during the contagious period. Children should stay home from school while they have active discharge. For allergic conjunctivitis: avoid known allergens, keep windows closed during high pollen seasons, use HEPA air filters, wash bedding frequently in hot water, and wear wraparound glasses outdoors. Contact lens wearers must strictly follow cleaning and replacement instructions.",
    "complicacionesEs": [
      "Queratitis (infeccion corneal), especialmente en conjuntivitis por adenovirus o gonococo",
      "Infiltrados subepiteliales corneales que pueden persistir meses despues de conjuntivitis adenoviral",
      "Ulcera corneal en casos bacterianos severos o en usuarios de lentes de contacto",
      "Conjuntivitis neonatal gonocococica puede causar perforacion corneal y ceguera",
      "Formacion de membranas y simbleparon (adherencias conjuntivales) en casos severos",
      "Queratoconjuntivitis atopica cronica puede causar neovascularizacion corneal"
    ],
    "complicacionesEn": [
      "Keratitis (corneal infection), especially in adenoviral or gonococcal conjunctivitis",
      "Corneal subepithelial infiltrates that may persist for months after adenoviral conjunctivitis",
      "Corneal ulcer in severe bacterial cases or contact lens wearers",
      "Neonatal gonococcal conjunctivitis can cause corneal perforation and blindness",
      "Membrane formation and symblepharon (conjunctival adhesions) in severe cases",
      "Chronic atopic keratoconjunctivitis can cause corneal neovascularization"
    ],
    "cuandoConsultarEs": "Consulte a un oftalmologo si presenta dolor ocular significativo (mas alla de simple molestia), sensibilidad marcada a la luz, vision borrosa que no mejora al parpadear, secrecion purulenta abundante, sintomas que empeoran despues de 5-7 dias o no mejoran con tratamiento, enrojecimiento alrededor de la cornea (inyeccion ciliar), o si usa lentes de contacto y desarrolla enrojecimiento ocular. Los recien nacidos con enrojecimiento o secrecion ocular requieren evaluacion urgente. Busque atencion inmediata si sospecha exposicion a sustancias quimicas en el ojo.",
    "cuandoConsultarEn": "See an ophthalmologist if you have significant eye pain (beyond simple discomfort), marked light sensitivity, blurred vision not improving with blinking, abundant purulent discharge, symptoms worsening after 5-7 days or not improving with treatment, redness around the cornea (ciliary injection), or if you wear contact lenses and develop eye redness. Newborns with eye redness or discharge require urgent evaluation. Seek immediate attention if you suspect chemical exposure to the eye."
  },
  {
    "id": "ojo-seco",
    "nombreEs": "Sindrome de Ojo Seco",
    "nombreEn": "Dry Eye Syndrome",
    "categoriaEs": "Superficie ocular",
    "categoriaEn": "Ocular surface",
    "descripcionEs": "El sindrome de ojo seco, tambien conocido como enfermedad de ojo seco o queratoconjuntivitis sicca, es un trastorno multifactorial de la superficie ocular caracterizado por una pelicula lagrimal inestable que causa sintomas de incomodidad, alteraciones visuales y dano potencial a la superficie ocular. Afecta a mas de 300 millones de personas en el mundo, siendo mas comun en mujeres y aumentando con la edad. Se clasifica en dos tipos principales: deficiencia acuosa (produccion insuficiente de lagrimas por las glandulas lagrimales) y evaporativo (evaporacion excesiva, frecuentemente por disfuncion de las glandulas de Meibomio), aunque la mayoria de los pacientes presentan un componente mixto. Es una causa frecuente de consulta oftalmologica y puede afectar significativamente la calidad de vida y la productividad laboral.",
    "descripcionEn": "Dry eye syndrome, also known as dry eye disease or keratoconjunctivitis sicca, is a multifactorial disorder of the ocular surface characterized by an unstable tear film that causes symptoms of discomfort, visual disturbances, and potential ocular surface damage. It affects more than 300 million people worldwide, being more common in women and increasing with age. It is classified into two main types: aqueous deficiency (insufficient tear production by lacrimal glands) and evaporative (excessive evaporation, frequently due to meibomian gland dysfunction), although most patients present a mixed component. It is a frequent cause of ophthalmologic consultation and can significantly affect quality of life and work productivity.",
    "sintomasEs": [
      "Sensacion de sequedad, arenilla o cuerpo extrano en los ojos",
      "Ardor y picazon ocular, especialmente al final del dia",
      "Enrojecimiento ocular recurrente",
      "Vision borrosa fluctuante que mejora al parpadear",
      "Lagrimeo excesivo paradojico (lagrimeo reflejo por irritacion de la superficie)",
      "Fatiga visual, especialmente durante uso prolongado de pantallas o lectura",
      "Sensibilidad a la luz y al viento",
      "Incomodidad con lentes de contacto",
      "Sensacion de parpados pesados"
    ],
    "sintomasEn": [
      "Sensation of dryness, grittiness, or foreign body in the eyes",
      "Burning and itching in the eyes, especially at the end of the day",
      "Recurrent eye redness",
      "Fluctuating blurred vision that improves with blinking",
      "Paradoxical excessive tearing (reflex tearing from surface irritation)",
      "Visual fatigue, especially during prolonged screen use or reading",
      "Sensitivity to light and wind",
      "Contact lens discomfort",
      "Sensation of heavy eyelids"
    ],
    "causasEs": "Las causas del ojo seco son multifactoriales. La disfuncion de las glandulas de Meibomio (forma evaporativa) es la causa mas comun, donde estas glandulas sebaceas del parpado no producen suficiente capa lipidica para prevenir la evaporacion. La deficiencia acuosa se asocia con el sindrome de Sjogren (enfermedad autoinmune que afecta las glandulas lagrimales y salivales), el envejecimiento, y la destruccion de las glandulas lagrimales. Factores de riesgo incluyen sexo femenino, edad avanzada, menopausia, uso de pantallas digitales (reduce la frecuencia de parpadeo), ambientes secos o con aire acondicionado, medicamentos (antihistaminicos, antidepresivos, diureticos, betabloqueadores, anticonceptivos), cirugia refractiva (LASIK), enfermedades autoinmunes (artritis reumatoide, lupus), diabetes, y blefaritis cronica.",
    "causasEn": "Dry eye causes are multifactorial. Meibomian gland dysfunction (evaporative form) is the most common cause, where these sebaceous eyelid glands do not produce enough lipid layer to prevent evaporation. Aqueous deficiency is associated with Sjogren syndrome (autoimmune disease affecting lacrimal and salivary glands), aging, and lacrimal gland destruction. Risk factors include female sex, advanced age, menopause, digital screen use (reduces blink rate), dry or air-conditioned environments, medications (antihistamines, antidepressants, diuretics, beta-blockers, oral contraceptives), refractive surgery (LASIK), autoimmune diseases (rheumatoid arthritis, lupus), diabetes, and chronic blepharitis.",
    "diagnosticoEs": "El diagnostico del ojo seco incluye la evaluacion de sintomas mediante cuestionarios validados como el OSDI (Ocular Surface Disease Index) o el DEQ-5, examen con lampara de hendidura para evaluar la superficie ocular, tincion con fluoresceina para detectar dano epitelial corneal, tincion con verde de lisamina para evaluar la conjuntiva, prueba de Schirmer para medir la produccion lagrimal basal (normal mayor a 10 mm en 5 minutos), medicion del tiempo de ruptura de la pelicula lagrimal (BUT, normal mayor a 10 segundos), osmolaridad lagrimal (elevada en ojo seco, normal menor a 308 mOsm/L), prueba de MMP-9 lagrimal (marcador de inflamacion), y meibografia para evaluar la estructura de las glandulas de Meibomio.",
    "diagnosticoEn": "Dry eye diagnosis includes symptom evaluation using validated questionnaires such as the OSDI (Ocular Surface Disease Index) or DEQ-5, slit-lamp examination to evaluate the ocular surface, fluorescein staining to detect corneal epithelial damage, lissamine green staining to evaluate the conjunctiva, Schirmer test to measure basal tear production (normal greater than 10 mm in 5 minutes), tear film break-up time measurement (BUT, normal greater than 10 seconds), tear osmolarity (elevated in dry eye, normal less than 308 mOsm/L), tear MMP-9 testing (inflammation marker), and meibography to evaluate meibomian gland structure.",
    "tratamientoEs": "El tratamiento es escalonado segun la severidad. En ojo seco leve: lagrimas artificiales sin conservadores (4-6 veces al dia o mas), higiene palpebral con compresas tibias y masaje de los parpados para mejorar la funcion meibomiana, y modificacion ambiental (humidificadores, evitar corrientes de aire directo). En moderado: lagrimas artificiales con mayor frecuencia, gel lubricante nocturno, ciclosporina topica al 0.05% o lifitegrast al 5% para tratar la inflamacion cronica, suplementos de omega-3, y tapones punctales para retener lagrimas. En severo: suero autologo topico, lentes esclerales terapeuticos, secretagogos orales (pilocarpina) en sindrome de Sjogren, y en casos refractarios tarsorrafia parcial. La expresion termica de las glandulas de Meibomio (LipiFlow, iLux) es un tratamiento en consultorio para la disfuncion meibomiana. La luz pulsada intensa (IPL) tambien ha mostrado beneficio en la forma evaporativa.",
    "tratamientoEn": "Treatment is stepwise based on severity. For mild dry eye: preservative-free artificial tears (4-6 times daily or more), eyelid hygiene with warm compresses and eyelid massage to improve meibomian function, and environmental modification (humidifiers, avoid direct air currents). For moderate: artificial tears more frequently, nighttime lubricating gel, topical cyclosporine 0.05% or lifitegrast 5% to treat chronic inflammation, omega-3 supplements, and punctal plugs to retain tears. For severe: topical autologous serum, therapeutic scleral lenses, oral secretagogues (pilocarpine) in Sjogren syndrome, and in refractory cases partial tarsorrhaphy. Thermal expression of meibomian glands (LipiFlow, iLux) is an in-office treatment for meibomian dysfunction. Intense pulsed light (IPL) has also shown benefit in the evaporative form.",
    "prevencionEs": "Parpadear conscientemente con frecuencia, especialmente durante el uso de pantallas digitales, siguiendo la regla 20-20-20: cada 20 minutos, mirar algo a 20 pies (6 metros) de distancia durante 20 segundos. Posicionar la pantalla del computador por debajo del nivel de los ojos para reducir la apertura palpebral. Usar humidificadores en ambientes secos y con aire acondicionado. Mantenerse bien hidratado bebiendo agua suficiente. Incluir acidos grasos omega-3 en la dieta (pescado, nueces, linaza). Usar gafas envolventes en ambientes ventosos. Evitar el humo del cigarrillo y otros irritantes. Realizar higiene palpebral regular si se tiene tendencia a blefaritis. Consultar con el medico sobre alternativas a medicamentos que causan sequedad ocular.",
    "prevencionEn": "Blink consciously and frequently, especially during digital screen use, following the 20-20-20 rule: every 20 minutes, look at something 20 feet (6 meters) away for 20 seconds. Position the computer screen below eye level to reduce palpebral aperture. Use humidifiers in dry and air-conditioned environments. Stay well hydrated by drinking enough water. Include omega-3 fatty acids in the diet (fish, nuts, flaxseed). Wear wraparound glasses in windy environments. Avoid cigarette smoke and other irritants. Perform regular eyelid hygiene if prone to blepharitis. Consult with your doctor about alternatives to medications that cause ocular dryness.",
    "complicacionesEs": [
      "Erosiones corneales recurrentes por falta de lubricacion",
      "Queratitis filamentosa (filamentos de mucina adheridos a la cornea)",
      "Infecciones oculares por compromiso de la barrera epitelial",
      "Ulceras corneales en casos severos",
      "Cicatrizacion corneal que puede afectar permanentemente la vision",
      "Disminucion significativa de la calidad de vida",
      "Intolerancia a lentes de contacto",
      "Dificultad para realizar actividades visuales prolongadas"
    ],
    "complicacionesEn": [
      "Recurrent corneal erosions from lack of lubrication",
      "Filamentary keratitis (mucin filaments adhered to the cornea)",
      "Ocular infections from epithelial barrier compromise",
      "Corneal ulcers in severe cases",
      "Corneal scarring that can permanently affect vision",
      "Significant decrease in quality of life",
      "Contact lens intolerance",
      "Difficulty performing prolonged visual activities"
    ],
    "cuandoConsultarEs": "Consulte a un oftalmologo si los sintomas de sequedad ocular persisten a pesar del uso regular de lagrimas artificiales, si experimenta dolor ocular significativo, enrojecimiento que no mejora, vision borrosa persistente, o secrecion ocular. Si tiene una enfermedad autoinmune diagnosticada y desarrolla sequedad ocular y bucal, consulte para descartar sindrome de Sjogren. Busque atencion si desarrolla sequedad severa despues de cirugia refractiva (LASIK/PRK) que no mejora en los meses esperados. Los pacientes con ojo seco moderado a severo deben tener seguimiento oftalmologico regular.",
    "cuandoConsultarEn": "See an ophthalmologist if dry eye symptoms persist despite regular use of artificial tears, if you experience significant eye pain, redness that does not improve, persistent blurred vision, or eye discharge. If you have a diagnosed autoimmune disease and develop eye and mouth dryness, consult to rule out Sjogren syndrome. Seek attention if you develop severe dryness after refractive surgery (LASIK/PRK) that does not improve within the expected months. Patients with moderate to severe dry eye should have regular ophthalmologic follow-up."
  },
  {
    "id": "desprendimiento-retina",
    "nombreEs": "Desprendimiento de Retina",
    "nombreEn": "Retinal Detachment",
    "categoriaEs": "Retina",
    "categoriaEn": "Retina",
    "descripcionEs": "El desprendimiento de retina es una emergencia oftalmologica en la cual la retina neurosensorial se separa del epitelio pigmentario retiniano subyacente, interrumpiendo el suministro de nutrientes y oxigeno a los fotorreceptores. Sin tratamiento oportuno, lleva a la muerte de las celulas retinianas y perdida permanente de vision. Existen tres tipos: regmatogeno (el mas comun, causado por un desgarro o agujero en la retina que permite la entrada de liquido vitreo al espacio subretiniano), traccional (traccion de membranas fibrovasculares sobre la retina, comun en retinopatia diabetica proliferativa), y exudativo o seroso (acumulacion de liquido subretiniano sin desgarro, asociado a inflamacion o tumores). El desprendimiento regmatogeno afecta aproximadamente a 1 de cada 10,000 personas por ano y es mas comun en miopes altos y despues de cirugia de cataratas.",
    "descripcionEn": "Retinal detachment is an ophthalmologic emergency in which the neurosensory retina separates from the underlying retinal pigment epithelium, interrupting nutrient and oxygen supply to photoreceptors. Without timely treatment, it leads to retinal cell death and permanent vision loss. Three types exist: rhegmatogenous (most common, caused by a tear or hole in the retina allowing vitreous fluid to enter the subretinal space), tractional (traction from fibrovascular membranes on the retina, common in proliferative diabetic retinopathy), and exudative or serous (subretinal fluid accumulation without a tear, associated with inflammation or tumors). Rhegmatogenous detachment affects approximately 1 in 10,000 people per year and is more common in high myopes and after cataract surgery.",
    "sintomasEs": [
      "Aparicion subita de moscas volantes (cuerpos flotantes) numerosas o nuevas",
      "Destellos de luz (fotopsias) en la vision periferica, como relampagos",
      "Cortina o sombra oscura que avanza sobre el campo visual",
      "Perdida progresiva y rapida de la vision periferica",
      "Vision borrosa subita",
      "Lineas rectas que se ven onduladas si la macula esta afectada",
      "Sensacion de pesadez en el ojo (en algunos casos)"
    ],
    "sintomasEn": [
      "Sudden onset of numerous or new floaters",
      "Flashes of light (photopsias) in peripheral vision, like lightning bolts",
      "Dark curtain or shadow advancing across the visual field",
      "Progressive and rapid peripheral vision loss",
      "Sudden blurred vision",
      "Straight lines appearing wavy if the macula is affected",
      "Sensation of heaviness in the eye (in some cases)"
    ],
    "causasEs": "El desprendimiento regmatogeno ocurre cuando el humor vitreo (gel transparente que llena el ojo) se licua y se separa de la retina con la edad (desprendimiento posterior de vitreo), y en algunos casos tracciona y desgarra la retina. Los principales factores de riesgo son miopia alta (mayor de -6 dioptrias, por elongacion del globo ocular y retina mas delgada), cirugia previa de cataratas (especialmente con complicaciones), antecedente de desprendimiento de retina en el otro ojo, degeneracion lattice (areas de adelgazamiento retiniano periferico), traumatismo ocular contuso o penetrante, antecedentes familiares, y desprendimiento posterior de vitreo sintomatico. El desprendimiento traccional se debe a membranas fibrovasculares en retinopatia diabetica proliferativa o retinopatia del prematuro. El exudativo se asocia a tumores coroideos, enfermedad de Vogt-Koyanagi-Harada, o escleritis posterior.",
    "causasEn": "Rhegmatogenous detachment occurs when the vitreous humor (clear gel filling the eye) liquefies and separates from the retina with age (posterior vitreous detachment), and in some cases pulls and tears the retina. Main risk factors are high myopia (greater than -6 diopters, due to globe elongation and thinner retina), prior cataract surgery (especially with complications), history of retinal detachment in the fellow eye, lattice degeneration (areas of peripheral retinal thinning), blunt or penetrating ocular trauma, family history, and symptomatic posterior vitreous detachment. Tractional detachment is due to fibrovascular membranes in proliferative diabetic retinopathy or retinopathy of prematurity. Exudative is associated with choroidal tumors, Vogt-Koyanagi-Harada disease, or posterior scleritis.",
    "diagnosticoEs": "El diagnostico requiere un examen de fondo de ojo con dilatacion pupilar urgente realizado por un oftalmologo. La oftalmoscopia indirecta binocular permite visualizar la retina periferica completa e identificar desgarros y la extension del desprendimiento. La ecografia ocular modo B es esencial cuando la visualizacion directa no es posible (por hemorragia vitrea, catarata densa, o cornea opaca) y puede mostrar la retina desprendida como una membrana movil dentro del ojo. La OCT es util para evaluar el compromiso macular (si la macula esta desprendida o adherida, lo cual es crucial para el pronostico visual). La depresion escleral durante el examen ayuda a visualizar desgarros perifericos. Todos los pacientes con sintomas de fotopsias y flotadores nuevos deben ser evaluados urgentemente para descartar desgarros retinianos.",
    "diagnosticoEn": "Diagnosis requires an urgent dilated fundus examination by an ophthalmologist. Binocular indirect ophthalmoscopy allows visualization of the complete peripheral retina and identification of tears and detachment extent. B-mode ocular ultrasound is essential when direct visualization is not possible (due to vitreous hemorrhage, dense cataract, or opaque cornea) and can show the detached retina as a mobile membrane within the eye. OCT is useful for evaluating macular involvement (whether the macula is detached or attached, which is crucial for visual prognosis). Scleral depression during examination helps visualize peripheral tears. All patients with symptoms of new photopsias and floaters must be urgently evaluated to rule out retinal tears.",
    "tratamientoEs": "El tratamiento del desprendimiento de retina es quirurgico y debe realizarse con urgencia, especialmente si la macula aun no se ha desprendido (macula-on), idealmente dentro de las primeras 24-72 horas. Los desgarros retinianos sin desprendimiento se tratan profilacticamente con fotocoagulacion laser o criopexia para crear una adherencia alrededor del desgarro. Para el desprendimiento, las opciones incluyen: retinopexia neumatica (inyeccion de gas intraocular con criopexia, para desprendimientos superiores simples), cerclaje escleral (banda de silicona alrededor del ojo que indenta la pared ocular hacia el desgarro), vitrectomia pars plana (la tecnica mas utilizada actualmente, donde se extrae el vitreo, se repara la retina y se rellena con gas o aceite de silicona). La vitrectomia permite tratar desprendimientos complejos, traccionales y con proliferacion vitreorretiniana. El posicionamiento postoperatorio boca abajo puede ser necesario durante dias o semanas despues de la vitrectomia con gas. La tasa de exito anatomico de la cirugia es del 85-90% con un solo procedimiento.",
    "tratamientoEn": "Retinal detachment treatment is surgical and must be performed urgently, especially if the macula has not yet detached (macula-on), ideally within the first 24-72 hours. Retinal tears without detachment are treated prophylactically with laser photocoagulation or cryopexy to create adhesion around the tear. For detachment, options include: pneumatic retinopexy (intravitreal gas injection with cryopexy, for simple superior detachments), scleral buckle (silicone band around the eye that indents the ocular wall toward the tear), pars plana vitrectomy (the most commonly used technique currently, where the vitreous is removed, the retina is repaired, and the eye is filled with gas or silicone oil). Vitrectomy allows treatment of complex, tractional, and proliferative vitreoretinopathy detachments. Face-down postoperative positioning may be necessary for days or weeks after vitrectomy with gas. The anatomic success rate of surgery is 85-90% with a single procedure.",
    "prevencionEs": "No es posible prevenir todos los desprendimientos de retina, pero se pueden reducir los riesgos. Las personas con miopia alta deben realizarse examenes de fondo de ojo con dilatacion anuales para detectar degeneracion lattice u otros factores predisponentes. Usar proteccion ocular adecuada durante deportes de contacto y actividades con riesgo de traumatismo ocular. Acudir inmediatamente al oftalmologo ante la aparicion de nuevos flotadores, destellos de luz o una sombra en la vision. Tratar profilacticamente los desgarros retinianos encontrados durante el examen. Las personas con antecedente de desprendimiento en un ojo tienen mayor riesgo en el ojo contralateral y deben mantener vigilancia estrecha. El control adecuado de la diabetes reduce el riesgo de desprendimiento traccional.",
    "prevencionEn": "It is not possible to prevent all retinal detachments, but risks can be reduced. People with high myopia should have annual dilated fundus exams to detect lattice degeneration or other predisposing factors. Use adequate eye protection during contact sports and activities with risk of ocular trauma. See an ophthalmologist immediately upon onset of new floaters, light flashes, or a shadow in vision. Prophylactically treat retinal tears found during examination. People with a history of detachment in one eye have higher risk in the fellow eye and should maintain close surveillance. Adequate diabetes control reduces the risk of tractional detachment.",
    "complicacionesEs": [
      "Perdida permanente de vision si no se trata a tiempo",
      "Proliferacion vitreorretiniana (PVR), la causa mas comun de fallo quirurgico",
      "Necesidad de multiples cirugias",
      "Catarata acelerada despues de vitrectomia",
      "Aumento de la presion intraocular postoperatoria",
      "Ptisis bulbi (atrofia del globo ocular) en desprendimientos cronicos no tratados",
      "Diplopia por desequilibrio muscular despues de cerclaje escleral",
      "Endoftalmitis postquirurgica (rara pero devastadora)"
    ],
    "complicacionesEn": [
      "Permanent vision loss if not treated in time",
      "Proliferative vitreoretinopathy (PVR), the most common cause of surgical failure",
      "Need for multiple surgeries",
      "Accelerated cataract after vitrectomy",
      "Postoperative intraocular pressure elevation",
      "Phthisis bulbi (globe atrophy) in chronic untreated detachments",
      "Diplopia from muscle imbalance after scleral buckle",
      "Postoperative endophthalmitis (rare but devastating)"
    ],
    "cuandoConsultarEs": "El desprendimiento de retina es una EMERGENCIA OFTALMOLOGICA. Acuda inmediatamente al servicio de urgencias oftalmologicas si nota aparicion subita de flotadores abundantes (como lluvia de puntos negros), destellos de luz en la vision periferica, una sombra o cortina que avanza en su campo visual, o perdida subita de vision. No espere a que los sintomas mejoren solos. Si la macula aun no esta desprendida, cada hora de retraso puede afectar el resultado visual final. Si tiene factores de riesgo (miopia alta, antecedente de desprendimiento en el otro ojo, cirugia de cataratas previa), mantenga una relacion cercana con su oftalmologo y acuda ante cualquier sintoma nuevo.",
    "cuandoConsultarEn": "Retinal detachment is an OPHTHALMOLOGIC EMERGENCY. Go immediately to the ophthalmologic emergency department if you notice sudden onset of abundant floaters (like a shower of black dots), flashes of light in peripheral vision, a shadow or curtain advancing in your visual field, or sudden vision loss. Do not wait for symptoms to improve on their own. If the macula is not yet detached, every hour of delay can affect the final visual outcome. If you have risk factors (high myopia, history of detachment in the fellow eye, prior cataract surgery), maintain a close relationship with your ophthalmologist and consult for any new symptoms."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarOftalmologia(termino: string): OftalmologiaEntry[] {
  const t = termino.toLowerCase();
  return OFTALMOLOGIA_ENTRIES.filter(e =>
    e.nombreEs.toLowerCase().includes(t) ||
    e.nombreEn.toLowerCase().includes(t) ||
    e.descripcionEs.toLowerCase().includes(t) ||
    e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getOftalmologiaById(id: string): OftalmologiaEntry | undefined {
  return OFTALMOLOGIA_ENTRIES.find(e => e.id === id);
}

export function getOftalmologiaPorCategoria(categoria: string): OftalmologiaEntry[] {
  const c = categoria.toLowerCase();
  return OFTALMOLOGIA_ENTRIES.filter(e =>
    e.categoriaEs.toLowerCase().includes(c) ||
    e.categoriaEn.toLowerCase().includes(c)
  );
}
