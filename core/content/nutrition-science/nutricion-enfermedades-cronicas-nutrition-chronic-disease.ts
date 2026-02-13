/**
 * Nutricion y Enfermedades Cronicas / Nutrition and Chronic Disease
 *
 * Contenido educativo bilingue (espanol primero) sobre el papel de la
 * nutricion en diabetes, enfermedades cardiacas, enfermedad renal y cancer,
 * incluyendo intervenciones dieteticas basadas en evidencia.
 *
 * Bilingual educational content (Spanish-first) on the role of nutrition
 * in diabetes, heart disease, kidney disease, and cancer, including
 * evidence-based dietary interventions.
 */

import { EducationalContent } from '../types';

export const nutricionEnfermedadesCronicasNutritionChronicDisease: EducationalContent = {
  id: 'nutrition-enfermedades-cronicas',
  type: 'topic',
  name: 'Nutrition and Chronic Disease | Nutricion y Enfermedades Cronicas',
  nameEs: 'Nutricion y Enfermedades Cronicas',
  alternateNames: [
    'Dieta y enfermedad cronica | Diet and Chronic Disease',
    'Terapia nutricional medica | Medical Nutrition Therapy',
    'Nutricion terapeutica | Therapeutic Nutrition',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Lo que comes puede ayudar a prevenir o mejorar enfermedades cronicas como la diabetes, enfermedades del corazon, enfermedades de los rinones y el cancer. Una alimentacion saludable, junto con ejercicio y medicinas, es una parte importante del tratamiento de estas enfermedades. | What you eat can help prevent or improve chronic diseases like diabetes, heart disease, kidney disease, and cancer. Healthy eating, along with exercise and medicine, is an important part of treating these diseases.',
      explanation: `## La Comida Como Medicina | Food as Medicine

Lo que comes cada dia puede hacer una gran diferencia en tu salud. Para muchas enfermedades cronicas, la alimentacion es tan importante como las medicinas.

What you eat every day can make a big difference in your health. For many chronic diseases, food is as important as medicine.

---

### Diabetes - Controlando el Azucar en la Sangre | Controlling Blood Sugar

**Que pasa en la diabetes:**
- Tu cuerpo no puede controlar bien el azucar en la sangre | Your body can\'t control blood sugar well
- El azucar alta en la sangre puede danar los ojos, rinones, nervios y corazon | High blood sugar can damage eyes, kidneys, nerves, and heart

**Como la comida ayuda | How food helps:**
- Comer a horas regulares mantiene el azucar estable | Eating at regular times keeps sugar stable
- Escoger carbohidratos que se digieren lento (granos integrales, frijoles) | Choose slow-digesting carbs (whole grains, beans)
- Combinar carbohidratos con proteina y grasa para absorcion mas lenta | Combine carbs with protein and fat for slower absorption
- Comer muchas verduras y ensaladas | Eat lots of vegetables and salads
- Evitar jugos, refrescos y dulces | Avoid juices, sodas, and sweets
- Controlar el tamano de las porciones | Control portion sizes

### Enfermedades del Corazon - Cuidando tu Corazon | Heart Disease - Taking Care of Your Heart

**Como la comida ayuda | How food helps:**
- Menos sal = presion arterial mas baja | Less salt = lower blood pressure
- Menos grasas malas (saturada, trans) = menos colesterol | Less bad fats = less cholesterol
- Mas frutas, verduras y granos integrales = corazon mas sano | More fruits, vegetables, whole grains = healthier heart
- Pescado 2 veces por semana para omega-3 | Fish twice weekly for omega-3
- Nueces y aceite de oliva como grasas saludables | Nuts and olive oil as healthy fats

### Enfermedad de los Rinones - Protegiendo tus Rinones | Kidney Disease - Protecting Your Kidneys

**Como la comida ayuda | How food helps:**
- Menos sal para no retener agua | Less salt to avoid water retention
- Controlar la cantidad de proteina que comes | Control how much protein you eat
- Cuidar la cantidad de potasio y fosforo | Watch potassium and phosphorus amounts
- Tu doctor y nutriologo te diran exactamente que comer | Your doctor and nutritionist will tell you exactly what to eat

### Cancer - Prevencion y Apoyo | Cancer - Prevention and Support

**Como la comida ayuda a prevenir | How food helps prevent:**
- Comer muchas frutas y verduras (antioxidantes) | Eat lots of fruits and vegetables (antioxidants)
- Mantener un peso saludable | Maintain a healthy weight
- Limitar carnes procesadas (tocino, salchichas, jamon) | Limit processed meats (bacon, sausage, ham)
- Limitar el alcohol | Limit alcohol
- Comer fibra (granos integrales, frijoles) | Eat fiber (whole grains, beans)

### El Plato de la Salud | The Health Plate

Para todas estas enfermedades, la base es la misma | For all these diseases, the foundation is the same:
- **Mitad del plato:** Verduras y frutas | Half: Vegetables and fruits
- **Un cuarto:** Proteinas magras | One quarter: Lean proteins
- **Un cuarto:** Granos integrales | One quarter: Whole grains
- **Grasas buenas:** Aceite de oliva, aguacate, nueces | Healthy fats: Olive oil, avocado, nuts
- **Bebida:** Agua, te sin azucar | Drink: Water, unsweetened tea`,
      keyTerms: [
        { term: 'enfermedad cronica | chronic disease', definition: 'Enfermedad que dura mucho tiempo y generalmente no se cura completamente, pero se puede controlar con tratamiento y buena alimentacion | Disease that lasts a long time and usually is not completely cured, but can be controlled with treatment and good eating' },
        { term: 'diabetes | diabetes', definition: 'Enfermedad donde el cuerpo no puede controlar bien el nivel de azucar en la sangre | Disease where the body cannot properly control blood sugar level' },
        { term: 'presion arterial | blood pressure', definition: 'La fuerza con la que la sangre empuja las paredes de los vasos sanguineos; la presion alta dana el corazon y los rinones | The force with which blood pushes against blood vessel walls' },
        { term: 'antioxidantes | antioxidants', definition: 'Sustancias en frutas y verduras que protegen tus celulas del dano | Substances in fruits and vegetables that protect your cells from damage' },
      ],
      analogies: [
        'La comida es como la gasolina para un carro - si le pones la gasolina incorrecta, el motor se dana. Tu cuerpo funciona mejor con la "gasolina" correcta. | Food is like gasoline for a car - if you put in the wrong type, the engine gets damaged. Your body works better with the right "fuel."',
        'Controlar la diabetes con comida es como manejar un carro por una montana - si aceleras demasiado (comes mucho azucar), pierdes el control. | Controlling diabetes with food is like driving a car on a mountain - if you accelerate too much (eat too much sugar), you lose control.',
        'La sal y la presion arterial son como agua en una manguera - mas agua (sodio) en la manguera (vasos) crea mas presion. | Salt and blood pressure are like water in a hose - more water (sodium) in the hose (vessels) creates more pressure.',
      ],
      examples: [
        'Una persona con diabetes come arroz integral con frijoles y verduras en lugar de arroz blanco con refresco, y su azucar se mantiene estable | A person with diabetes eats brown rice with beans and vegetables instead of white rice with soda, and sugar stays stable',
        'Un paciente con presion alta reduce la sal en su comida y su presion baja sin necesitar mas medicinas | A patient with high blood pressure reduces salt and their pressure drops without needing more medicine',
        'Comer 5 porciones de frutas y verduras al dia puede reducir el riesgo de cancer en un 20% | Eating 5 servings of fruits and vegetables daily can reduce cancer risk by 20%',
      ],
      patientCounselingPoints: [
        'Si tiene diabetes, coma a horas regulares y no se salte comidas | If you have diabetes, eat at regular times and don\'t skip meals',
        'Para el corazon, use aceite de oliva en vez de manteca o mantequilla | For your heart, use olive oil instead of lard or butter',
        'Si tiene enfermedad renal, siga las instrucciones de su nutriologo - cada persona es diferente | If you have kidney disease, follow your nutritionist\'s instructions - each person is different',
        'Coma al menos 5 porciones de frutas y verduras cada dia para protegerse contra enfermedades | Eat at least 5 servings of fruits and vegetables daily for disease protection',
        'Reduzca las carnes procesadas (jamon, salchichas, tocino) - se asocian con mayor riesgo de cancer | Reduce processed meats - they are associated with higher cancer risk',
      ],
    },
    2: {
      level: 2,
      summary:
        'La terapia nutricional medica es una parte esencial del manejo de enfermedades cronicas. En diabetes, el control de carbohidratos y el indice glucemico son fundamentales. En enfermedad cardiaca, la dieta DASH y mediterranea reducen el riesgo cardiovascular. En enfermedad renal, la restriccion de proteina, fosforo y potasio protege la funcion renal. En cancer, la nutricion apoya el tratamiento y la prevencion. | Medical nutrition therapy is an essential part of chronic disease management. In diabetes, carbohydrate control and glycemic index are fundamental. In heart disease, DASH and Mediterranean diets reduce cardiovascular risk. In kidney disease, protein, phosphorus, and potassium restriction protects renal function. In cancer, nutrition supports treatment and prevention.',
      explanation: `## Diabetes y Nutricion | Diabetes and Nutrition

### Principios de Manejo Nutricional | Nutritional Management Principles

**Conteo de carbohidratos | Carbohydrate Counting:**
- Los carbohidratos tienen el mayor impacto en la glucosa sanguinea | Carbohydrates have the greatest impact on blood glucose
- 1 porcion de carbohidratos = 15 gramos | 1 carb serving = 15 grams
- Meta general: 45-60g por comida, 15-20g por merienda | General goal: 45-60g per meal, 15-20g per snack
- Distribuir carbohidratos uniformemente durante el dia | Distribute carbs evenly throughout the day

**Indice Glucemico (IG) | Glycemic Index (GI):**

| IG Bajo (<55) | IG Medio (56-69) | IG Alto (>70) |
|---------------|-----------------|---------------|
| Frijoles, lentejas | Arroz integral | Pan blanco |
| Avena | Camote | Arroz blanco |
| Manzana, pera | Platano maduro | Papa |
| Leche, yogur | Maiz | Cereales azucarados |

**Plato del diabetico | Diabetic Plate Method:**
- 1/2 plato: Verduras sin almidon (brocoli, espinaca, tomates) | Non-starchy vegetables
- 1/4 plato: Proteina magra (pollo, pescado, frijoles) | Lean protein
- 1/4 plato: Carbohidratos complejos (granos integrales, camote) | Complex carbohydrates

## Enfermedad Cardiaca y Nutricion | Heart Disease and Nutrition

### Dieta DASH (Enfoques Dieteticos para Detener la Hipertension) | DASH Diet

**Principios | Principles:**
- Rica en frutas, verduras, granos integrales | Rich in fruits, vegetables, whole grains
- Lacteos bajos en grasa | Low-fat dairy
- Reducida en grasa saturada y colesterol | Reduced in saturated fat and cholesterol
- Sodio: <2300 mg/dia (ideal <1500 mg/dia) | Sodium: <2300 mg/day (ideal <1500 mg/day)

**Resultados | Results:**
- Reduce presion sistolica 8-14 mmHg | Reduces systolic BP 8-14 mmHg
- Reduce colesterol LDL | Reduces LDL cholesterol
- Reduce riesgo cardiovascular 20-30% | Reduces CV risk 20-30%

### Dieta Mediterranea | Mediterranean Diet

**Componentes clave | Key Components:**
- Aceite de oliva como grasa principal | Olive oil as main fat
- Frutas, verduras, legumbres abundantes | Abundant fruits, vegetables, legumes
- Pescado y mariscos 2+ veces por semana | Fish and seafood 2+ times weekly
- Consumo moderado de aves, huevos, lacteos | Moderate poultry, eggs, dairy
- Consumo minimo de carne roja | Minimal red meat
- Vino tinto en moderacion (opcional) | Red wine in moderation (optional)

**Beneficios cardiovasculares | Cardiovascular Benefits:**
- Estudio PREDIMED: Reduccion del 30% en eventos cardiovasculares | PREDIMED: 30% reduction in CV events
- Mejora perfil lipidico, reduce inflamacion | Improves lipid profile, reduces inflammation

## Enfermedad Renal y Nutricion | Kidney Disease and Nutrition

### Restricciones por Estadio | Restrictions by Stage

| Estadio ERC | Proteina | Sodio | Potasio | Fosforo |
|-------------|----------|-------|---------|---------|
| 1-2 | 0.8 g/kg | <2300 mg | Sin restriccion | Sin restriccion |
| 3-4 | 0.6-0.8 g/kg | <2000 mg | Limitar si elevado | <800 mg |
| 5 (dialisis) | 1.0-1.2 g/kg | <2000 mg | <2000 mg | <800 mg |

**Alimentos altos en potasio a limitar | High Potassium Foods to Limit:**
- Platanos, naranjas, tomates, papas | Bananas, oranges, tomatoes, potatoes
- Jugos de naranja y tomate | Orange and tomato juices
- Frijoles y lentejas (sin preparacion especial) | Beans and lentils (without special preparation)

**Alimentos altos en fosforo a limitar | High Phosphorus Foods to Limit:**
- Refrescos de cola oscura | Dark cola sodas
- Lacteos en exceso | Excess dairy
- Comidas procesadas (aditivos de fosfato) | Processed foods (phosphate additives)

## Cancer y Nutricion | Cancer and Nutrition

### Prevencion | Prevention

**Factores dieteticos protectores | Protective Dietary Factors:**
- Frutas y verduras (fibra, antioxidantes, fitoquimicos) | Fruits and vegetables
- Fibra dietetica (reduccion de cancer colorrectal) | Dietary fiber (colorectal cancer reduction)
- Granos integrales | Whole grains
- Mantener peso saludable (IMC 18.5-24.9) | Maintaining healthy weight

**Factores dieteticos de riesgo | Dietary Risk Factors:**
- Carnes procesadas (Grupo 1 de IARC - cancerigeno confirmado) | Processed meats (IARC Group 1)
- Carnes rojas en exceso (Grupo 2A - probablemente cancerigeno) | Excess red meat (IARC Group 2A)
- Alcohol (cancer de mama, higado, esofago, colorrectal) | Alcohol (breast, liver, esophageal, colorectal cancer)
- Obesidad (multiples tipos de cancer) | Obesity (multiple cancer types)

### Nutricion Durante el Tratamiento | Nutrition During Treatment

- Mantener peso y masa muscular es prioridad | Maintaining weight and muscle mass is priority
- Proteina aumentada (1.0-1.5 g/kg) para contrarrestar catabolismo | Increased protein to counteract catabolism
- Comidas pequenas y frecuentes si hay nausea | Small frequent meals if nauseated
- Suplementos nutricionales orales si ingesta es insuficiente | Oral nutritional supplements if intake is insufficient`,
      keyTerms: [
        { term: 'terapia nutricional medica | medical nutrition therapy', definition: 'Uso de nutricion como tratamiento formal para enfermedades, prescrito por un profesional de salud | Use of nutrition as formal treatment for diseases, prescribed by a healthcare professional' },
        { term: 'indice glucemico | glycemic index', definition: 'Escala que mide que tan rapido un alimento sube el azucar en la sangre; alimentos de IG bajo son mejores para diabeticos | Scale measuring how quickly food raises blood sugar; low GI foods are better for diabetics' },
        { term: 'dieta DASH', definition: 'Enfoques Dieteticos para Detener la Hipertension; dieta rica en frutas, verduras y baja en sal que reduce la presion arterial | Dietary Approaches to Stop Hypertension; diet rich in fruits, vegetables, and low in salt that reduces blood pressure' },
        { term: 'dieta mediterranea | Mediterranean diet', definition: 'Patron dietetico basado en la cocina tradicional de los paises del Mediterraneo, con beneficios cardiovasculares probados | Dietary pattern based on traditional Mediterranean cuisine with proven cardiovascular benefits' },
        { term: 'IARC', definition: 'Agencia Internacional para la Investigacion del Cancer; clasifica sustancias por su potencial cancerigeno | International Agency for Research on Cancer; classifies substances by carcinogenic potential' },
        { term: 'caquexia | cachexia', definition: 'Perdida severa de peso y masa muscular asociada con cancer y otras enfermedades cronicas | Severe weight and muscle loss associated with cancer and other chronic diseases' },
      ],
      analogies: [
        'El indice glucemico es como la velocidad de absorcion - alimentos de IG bajo son como un goteo lento y constante, mientras que los de IG alto son como abrir una llave de agua de golpe. | Glycemic index is like absorption speed - low GI foods are like a slow drip, while high GI foods are like turning on a faucet full blast.',
        'La dieta DASH es como un escudo protector para tu corazon - cada componente (frutas, verduras, menos sal) anade una capa mas de proteccion. | The DASH diet is like a protective shield for your heart - each component adds another layer of protection.',
        'La restriccion de proteina en enfermedad renal es como reducir el trabajo de una fabrica sobrecargada - menos productos de desecho para que los rinones procesen. | Protein restriction in kidney disease is like reducing work for an overloaded factory - fewer waste products for kidneys to process.',
      ],
      examples: [
        'El estudio PREDIMED demostro que la dieta mediterranea con aceite de oliva extra virgen redujo eventos cardiovasculares en 30% | The PREDIMED study showed Mediterranean diet with EVOO reduced CV events by 30%',
        'Paciente con diabetes tipo 2 reduce HbA1c de 8.5% a 7.0% con conteo de carbohidratos y ejercicio, sin cambiar medicinas | T2D patient reduces HbA1c from 8.5% to 7.0% with carb counting and exercise, without changing medications',
        'La reduccion de sal a <1500 mg/dia reduce la presion sistolica en promedio 11 mmHg en hipertensos | Reducing salt to <1500 mg/day reduces systolic BP by an average of 11 mmHg in hypertensives',
        'Cada 50g/dia de carne procesada aumenta el riesgo de cancer colorrectal en 18% (OMS/IARC) | Each 50g/day of processed meat increases colorectal cancer risk by 18% (WHO/IARC)',
      ],
      patientCounselingPoints: [
        'Si tiene diabetes, aprenda a contar carbohidratos - es la herramienta mas poderosa para controlar su azucar | If you have diabetes, learn to count carbs - it\'s the most powerful tool for controlling your sugar',
        'Para su corazon, la dieta mediterranea es una de las mejores opciones - aceite de oliva, pescado, frutas y verduras | For your heart, the Mediterranean diet is one of the best choices',
        'Si tiene enfermedad renal, trabaje con un nutriologo especializado - las restricciones son diferentes para cada persona y estadio | If you have kidney disease, work with a specialized nutritionist',
        'Para reducir riesgo de cancer, limite carnes procesadas a menos de una vez por semana y coma al menos 5 porciones de frutas y verduras al dia | Limit processed meats and eat at least 5 servings of fruits and vegetables daily',
      ],
    },
    3: {
      level: 3,
      summary:
        'La terapia nutricional medica basada en evidencia integra principios bioquimicos y fisiopatologicos para el manejo de enfermedades cronicas. En diabetes, el control glucemico depende de la carga glucemica y la composicion de macronutrientes. En enfermedad cardiovascular, los patrones dieteticos afectan el metabolismo lipidico e inflamatorio. En ERC, la restriccion de proteinas reduce la carga de desechos nitrogenados. En cancer, la inmunonutricion y el soporte anabolico son criticos. | Evidence-based medical nutrition therapy integrates biochemical and pathophysiological principles for chronic disease management. In diabetes, glycemic control depends on glycemic load and macronutrient composition. In cardiovascular disease, dietary patterns affect lipid and inflammatory metabolism. In CKD, protein restriction reduces nitrogenous waste burden. In cancer, immunonutrition and anabolic support are critical.',
      explanation: `## Terapia Nutricional en Diabetes | Nutritional Therapy in Diabetes

### Mecanismos de Control Glucemico | Glycemic Control Mechanisms

\`\`\`
Carga glucemica = Indice glucemico x Gramos de carbohidrato / 100

Factores que modifican la respuesta glucemica:
  - Tipo de carbohidrato (simple vs complejo, amilosa vs amilopectina)
  - Fibra (soluble retarda absorcion)
  - Proteina (estimula glucagon + insulina, modera respuesta)
  - Grasa (retarda vaciamiento gastrico)
  - Metodo de coccion (mas cocido = IG mas alto)
  - Madurez de frutas (mas maduro = IG mas alto)
\`\`\`

**Evidencia de patrones dieteticos en diabetes | Evidence for dietary patterns:**

| Patron dietetico | HbA1c reduccion | Evidencia |
|-----------------|-----------------|-----------|
| Mediterraneo | -0.3 a -0.5% | Meta-analisis, RCTs |
| Bajo en carbohidratos (<130g/dia) | -0.3 a -1.0% | RCTs |
| DASH | -0.2 a -0.4% | RCTs |
| Vegetariano | -0.3 a -0.5% | Meta-analisis |
| Dieta estandar ADA | -0.2 a -0.3% | Guias clinicas |

**Terapia nutricional en DM1 vs DM2 | MNT in T1D vs T2D:**
\`\`\`
DM1:
  - Conteo de carbohidratos es ESENCIAL para dosificacion de insulina
  - Relacion insulina:carbohidrato (tipicamente 1U:10-15g)
  - Factor de correccion para hiperglucemia
  - Proteina y grasa afectan glucosa posprandial tardia

DM2:
  - Perdida de peso de 5-10% mejora significativamente control glucemico
  - Reduccion de carbohidratos: Beneficio independiente de peso
  - Fibra >25g/dia: Mejora sensibilidad a insulina
  - Cromonutricion: Tiempo de ingesta afecta metabolismo (desayuno protector)
\`\`\`

## Terapia Nutricional Cardiovascular | Cardiovascular Nutritional Therapy

### Mecanismos Dieteticos que Afectan el Riesgo CV | Dietary Mechanisms Affecting CV Risk

\`\`\`
Metabolismo lipidico:
  Grasa saturada -> Aumenta LDL (via supresion de receptores de LDL hepaticos)
  Grasas trans -> Aumenta LDL + reduce HDL (doble efecto negativo)
  Grasa monoinsaturada -> Reduce LDL, mantiene HDL
  Omega-3 (EPA/DHA) -> Reduce trigliceridos (hasta 30-50%), antiinflamatorio

Mecanismos antiinflamatorios:
  Polifenoles (frutas, te verde, aceite de oliva) -> Inhibicion de NF-kB
  Omega-3 -> Resolvinas, protectinas (mediadores pro-resolucion)
  Fibra -> Butirato colonica -> Reduccion de inflamacion sistemica

Esteroles y estanoles vegetales:
  - Compiten con colesterol por absorcion intestinal
  - 2g/dia reducen LDL 8-10%
  - Presentes en margarinas enriquecidas, suplementos
\`\`\`

### Evidencia de Ensayos Clinicos Clave | Key Clinical Trial Evidence

\`\`\`
PREDIMED (Prevencion con Dieta Mediterranea):
  - n=7447, seguimiento 4.8 anos
  - Mediterranea + AOVE vs bajo en grasa
  - Reduccion 30% en eventos CV mayores (IAM, ACV, muerte CV)
  - NNT = 61 por ano

DASH-Sodium:
  - Combinacion DASH + <1500 mg Na/dia
  - Reduccion de PA sistolica: -11.5 mmHg (hipertensos)
  - Efecto comparable a monoterapia farmacologica

Lyon Diet Heart Study:
  - Patron mediterraneo post-IAM
  - Reduccion 50-70% en recurrencia cardiaca
  - Beneficio independiente de niveles de colesterol
\`\`\`

## Terapia Nutricional en ERC | Nutritional Therapy in CKD

### Restriccion Proteica y Progresion Renal | Protein Restriction and Renal Progression

\`\`\`
Mecanismo:
  Alta ingesta proteica -> Aumento de filtracion glomerular (hiperfiltración) ->
    Dano glomerular progresivo -> Fibrosis -> Perdida de nefronas

Estudio MDRD (Modification of Diet in Renal Disease):
  - Proteina 0.58 g/kg/dia vs 1.3 g/kg/dia
  - Tendencia a frenar progresion (no estadisticamente significativo)
  - Meta-analisis posteriores: Beneficio significativo

Recomendaciones actuales (KDOQI/KDIGO):
  ERC 3-5 sin dialisis: 0.6-0.8 g/kg/dia
  ERC 5 en dialisis: 1.0-1.2 g/kg/dia (catabolismo por dialisis)
  Suplementacion con cetoanalogos: 0.3-0.4 g/kg + cetoanalogos
\`\`\`

### Manejo de Fosforo y Potasio | Phosphorus and Potassium Management

\`\`\`
Fosforo:
  Fuentes organicas: Lacteos, carne, nueces (absorcion 40-60%)
  Fuentes inorganicas: Aditivos en procesados (absorcion ~100%)
  CLAVE: El fosforo de aditivos es 100% biodisponible vs 40-60% de alimentos naturales
  Estrategia: Evitar alimentos procesados con aditivos de fosfato

Potasio:
  Tecnicas culinarias para reducir potasio:
    - Remojar verduras/legumbres en agua 2+ horas
    - Hervir en abundante agua (descartar agua)
    - Doble coccion (hervir, cambiar agua, hervir de nuevo)
    - Reduce potasio 30-50% en vegetales
\`\`\`

## Nutricion y Cancer | Nutrition and Cancer

### Mecanismos Nutricionales en Carcinogenesis | Nutritional Mechanisms in Carcinogenesis

\`\`\`
Carne procesada y cancer colorrectal:
  - Nitrosaminas: Formadas a partir de nitratos/nitritos en curado
  - Hierro hemico: Promueve formacion de N-nitroso compuestos endogenos
  - Aminas heterociclicas (AHC): Formadas en coccion a alta temperatura
  - Hidrocarbonos aromaticos policiclicos (HAP): Formados en ahumado/parrilla

Obesidad y cancer:
  - Hiperinsulinemia cronica -> Activacion de IGF-1 -> Proliferacion celular
  - Inflamacion cronica del tejido adiposo -> NF-kB, IL-6, TNF-alfa
  - Aromatasa en grasa -> Conversion de androgenos a estrogenos -> Cancer de mama
  - Leptina elevada -> Proliferacion, angiogenesis

Factores protectores:
  - Fibra: Union a cancerigenos, reduccion de tiempo de transito, butirato
  - Polifenoles: Inhibicion de angiogenesis, induccion de apoptosis
  - Cruciferos (brocoli, col): Sulforafano -> Induccion de enzimas fase II
  - Vitamina D: Regulacion de proliferacion celular, inmunidad antitumoral
\`\`\`

### Soporte Nutricional en Cancer | Nutritional Support in Cancer

\`\`\`
Caquexia cancerosa:
  Mecanismo: Citoquinas tumorales (TNF-alfa, IL-1, IL-6, PIF) ->
    - Aumento de proteolisis muscular (via ubiquitina-proteasoma)
    - Aumento de lipolisis
    - Reduccion de sintesis proteica
    - Anorexia central

Manejo nutricional:
  - Proteina: 1.0-1.5 g/kg/dia (hasta 2.0 en deplecion severa)
  - Calorias: 25-30 kcal/kg/dia
  - EPA (acido eicosapentaenoico): 2g/dia puede atenuar caquexia
  - Leucina/HMB: Preservar masa muscular
  - Nutricion enteral temprana > parenteral (mantiene barrera intestinal)
\`\`\``,
      keyTerms: [
        { term: 'carga glucemica | glycemic load', definition: 'Medida que combina el indice glucemico con la cantidad de carbohidratos en una porcion; predictor mas preciso de respuesta glucemica | Measure combining glycemic index with carbohydrate amount per serving; more accurate predictor of glycemic response' },
        { term: 'hiperfiltración glomerular | glomerular hyperfiltration', definition: 'Aumento compensatorio de la filtracion que a largo plazo causa dano y fibrosis glomerular | Compensatory increase in filtration that long-term causes glomerular damage and fibrosis' },
        { term: 'cetoanalogos | ketoanalogues', definition: 'Analogos de aminoacidos sin nitrogeno que reducen la carga nitrogenada mientras proporcionan el esqueleto de carbono para sintesis proteica en ERC | Nitrogen-free amino acid analogues reducing nitrogenous burden in CKD' },
        { term: 'caquexia cancerosa | cancer cachexia', definition: 'Sindrome de perdida de peso y masa muscular multifactorial inducido por citoquinas tumorales, distinto de inanicion simple | Multifactorial weight and muscle loss syndrome induced by tumor cytokines, distinct from simple starvation' },
        { term: 'resolvinas | resolvins', definition: 'Mediadores lipidicos derivados de omega-3 que promueven la resolucion activa de la inflamacion | Lipid mediators derived from omega-3 that promote active resolution of inflammation' },
        { term: 'NNT | number needed to treat', definition: 'Numero de pacientes que necesitan ser tratados para prevenir un evento adverso | Number of patients needing treatment to prevent one adverse event' },
      ],
      analogies: [
        'La carga glucemica es como medir no solo la velocidad de un carro sino cuantos carros pasan - el indice glucemico es la velocidad, la cantidad de carbos es el volumen. | Glycemic load measures not just the speed of cars but how many pass - GI is the speed, carb amount is the volume.',
        'La hiperfiltración en ERC es como un motor de carro que trabaja al doble para compensar cilindros danados - al final, el motor se desgasta mas rapido. | Glomerular hyperfiltration in CKD is like a car engine working double to compensate for damaged cylinders - eventually the engine wears out faster.',
        'Las resolvinas del omega-3 son como un equipo de bomberos que apaga la inflamacion - no solo combaten el fuego sino que limpian los escombros. | Omega-3 resolvins are like a fire brigade that extinguishes inflammation - they not only fight the fire but clean up the debris.',
      ],
      examples: [
        'PREDIMED: 7447 pacientes, dieta mediterranea + AOVE redujo eventos CV 30% comparado con dieta baja en grasa | PREDIMED: Mediterranean diet + EVOO reduced CV events 30%',
        'Tecnica de doble coccion reduce potasio de papas en 50%, permitiendo que pacientes con ERC las disfruten con moderacion | Double-boiling technique reduces potato potassium by 50%',
        'Suplementacion con 2g/dia de EPA en pacientes con caquexia cancerosa atenuo la perdida de masa muscular | 2g/day EPA supplementation attenuated muscle mass loss in cancer cachexia',
      ],
      clinicalNotes: 'En DM1, el conteo de carbohidratos es la base del ajuste de dosis de insulina prandial. En ERC, el fosforo de aditivos alimentarios es ~100% biodisponible comparado con 40-60% de fuentes naturales - leer etiquetas de ingredientes es mas util que contar miligramos. En cancer, la nutricion enteral temprana es preferible a parenteral para mantener la barrera intestinal. | In T1D, carb counting is the basis of prandial insulin dosing. In CKD, phosphorus from food additives is ~100% bioavailable. In cancer, early enteral nutrition is preferred over parenteral.',
    },
    4: {
      level: 4,
      summary:
        'Las intervenciones nutricionales avanzadas en enfermedades cronicas integran biomarcadores, evidencia de ensayos clinicos y guias de practica clinica. El manejo incluye terapia nutricional medica individualizada, inmunonutricion perioperatoria, optimizacion metabolica pre-dialisis y estrategias de quimioprevencion nutricional basadas en vias moleculares. | Advanced nutritional interventions in chronic diseases integrate biomarkers, clinical trial evidence, and clinical practice guidelines. Management includes individualized medical nutrition therapy, perioperative immunonutrition, pre-dialysis metabolic optimization, and molecular pathway-based nutritional chemoprevention strategies.',
      explanation: `## Diabetes Avanzada: Nutricion de Precision | Advanced Diabetes: Precision Nutrition

### Variabilidad Glucemica y Patrones Dieteticos | Glycemic Variability and Dietary Patterns

\`\`\`
Monitoreo continuo de glucosa (MCG) revela:
  - Alta variabilidad interindividual en respuesta a alimentos identicos
  - Factores: Microbioma, genetica, composicion corporal, sueno, estres
  - Implicacion: Recomendaciones genericas son insuficientes

Cromonutricion (Chrononutrition):
  - Desayuno rico en proteina -> Mejor control glucemico vs cena rica en proteina
  - Comer mas calorias en la manana -> Menor HbA1c
  - Cena tardia -> Mayor glucemia posprandial (ritmo circadiano de insulina)
  - Ayuno intermitente (16:8): Mejora sensibilidad a insulina en algunos estudios

Dieta baja en carbohidratos en DM2:
  Muy baja (<50g/dia):
    - Reduccion HbA1c: 0.5-1.0%
    - Reduccion de medicamentos hipoglucemiantes
    - Mejora de trigliceridos y HDL
    - Preocupaciones: Sostenibilidad, perfil lipidico en algunos, cetoacidosis en DM1/SGLT2i
  Moderada (50-130g/dia):
    - Balance entre beneficio glucemico y adherencia
    - Posicion ADA: Patron valido, individualizar
\`\`\`

### Nutricion en Complicaciones Diabeticas | Nutrition in Diabetic Complications

\`\`\`
Nefropatia diabetica:
  - Restriccion proteica: 0.8 g/kg/dia (retrasa progresion)
  - Sodio <2000 mg/dia (proteccion CV + renal)
  - AGEs (productos de glicacion avanzada): Formados en coccion a alta T
    - Contribuyen a nefropatia, retinopatia, neuropatia
    - Cocinar a bajas temperaturas (hervir, vapor) reduce AGEs

Neuropatia diabetica:
  - B12: Monitorear en usuarios de metformina
  - Acido alfa-lipoico: 600 mg/dia (antioxidante, mejora neuropatia en RCTs)
  - Benfotiamina: Forma liposoluble de B1, reduce AGEs

Enfermedad cardiovascular diabetica:
  - Omega-3: 2-4g/dia EPA redujo eventos CV 25% en REDUCE-IT (icosapento etilo)
  - Dieta mediterranea: Beneficio CV independiente del control glucemico
\`\`\`

## Enfermedad Cardiovascular Avanzada | Advanced Cardiovascular Disease

### Estrategias Nutricionales Basadas en Evidencia | Evidence-Based Nutritional Strategies

\`\`\`
Reduccion de LDL por dieta:
  Estrategia            | Reduccion LDL | Mecanismo
  --------------------- | ------------- | ---------
  Eliminar trans        | -5 a -10%     | Restaura funcion LDL-R
  Reducir saturada      | -5 a -10%     | Aumenta actividad LDL-R
  Fibra soluble 10g/dia | -5%           | Union de acidos biliares
  Esteroles vegetales   | -8 a -10%     | Competencia absorcion
  Soya 25g/dia          | -3 a -5%      | Isoflavonas, aminoacidos
  Portfolio combinado   | -25 a -35%    | Efecto aditivo

"Portfolio Diet" (Portafolio Dietetico):
  Combina: Esteroles + fibra soluble + soya + almendras
  Reduccion LDL: ~29% (comparable a estatinas de baja potencia)

REDUCE-IT (icosapento etilo 4g/dia):
  - EPA puro (sin DHA)
  - Reduccion 25% eventos CV mayores
  - NNT = 21 a 4.9 anos
  - Mecanismo: Mas alla de reduccion de TG (antiinflamatorio, membrana)
\`\`\`

### Insuficiencia Cardiaca y Nutricion | Heart Failure and Nutrition

\`\`\`
Restriccion de sodio:
  - Recomendacion: <2000 mg/dia
  - Controversia: Restriccion excesiva puede activar SRAA
  - Estudios recientes: <1500 mg puede no ser superior a <2500 mg

Micronutrientes en IC:
  - Tiamina (B1): Deficiencia en 33% de IC cronica (diureticos de asa)
    -> Considerar suplementacion 100 mg/dia
  - CoQ10: 100 mg TID -> Reduccion de mortalidad en Q-SYMBIO trial
  - Hierro IV: Ferric carboxymaltosa mejora capacidad funcional (AFFIRM-AHF)

Caquexia cardiaca:
  - Prevalencia: 10-15% de IC avanzada
  - Definicion: Perdida >5% peso corporal en 12 meses sin otra causa
  - Manejo: Proteina 1.5 g/kg, calorias 30 kcal/kg, omega-3, ejercicio
\`\`\`

## ERC Avanzada: Optimizacion Nutricional | Advanced CKD: Nutritional Optimization

### Estrategias Avanzadas de Fosforo | Advanced Phosphorus Strategies

\`\`\`
Ratio fosforo:proteina:
  Elegir proteinas con menor ratio P:proteina
  |-- Claras de huevo: 1.4 mg P / g proteina (MEJOR)
  |-- Pollo: 9.3 mg P / g proteina
  |-- Carne: 10.1 mg P / g proteina
  |-- Lacteos: 15.0 mg P / g proteina (PEOR)

Aditivos de fosfato:
  - STPP, SHMP, disodium phosphate: 100% biodisponibles
  - Leer etiquetas: "fosfato" en ingredientes = fosforo oculto
  - Comida rapida y procesada: Principal fuente de fosforo oculto
\`\`\`

### Dieta Baja en Proteina Suplementada | Supplemented Low-Protein Diet

\`\`\`
Protocolo con cetoanalogos:
  - Proteina: 0.3-0.4 g/kg/dia (muy baja en proteina)
  - + Cetoanalogos (Ketosteril): 1 tableta/5 kg peso corporal
  - Beneficios: Retrasa dialisis, mejora control metabolico
  - Evidencia: Meta-analisis muestra retraso de progresion y mejor supervivencia pre-dialisis
  - Monitoreo: Estado nutricional, albumina, prealbumina mensual
\`\`\`

## Oncologia Nutricional Avanzada | Advanced Nutritional Oncology

### Inmunonutricion Perioperatoria | Perioperative Immunonutrition

\`\`\`
Composicion tipica:
  - Arginina: Precursor de oxido nitrico, funcion inmune de linfocitos T
  - Omega-3 (EPA/DHA): Antiinflamatorio, modulacion inmune
  - Nucleotidos: Proliferacion de linfocitos

Evidencia:
  - Cancer colorrectal: Reduce infecciones postoperatorias 40-50%
  - Cancer gastrico: Reduce estancia hospitalaria 2-3 dias
  - ESPEN recomienda: 5-7 dias pre-operatorio en cancer GI
  - Impacto: Reduce complicaciones infecciosas, fistulas, estancia

Pre-habilitacion (Prehabilitation):
  - 4 semanas pre-cirugia: Nutricion + ejercicio + manejo psicologico
  - Mejora capacidad funcional y tolerancia a cirugia
  - Reduce complicaciones postoperatorias 30-50%
\`\`\`

### Ayuno y Cancer | Fasting and Cancer

\`\`\`
Hipotesis del estrés diferencial (Valter Longo):
  - Ayuno corto (24-72h) pre-quimioterapia
  - Celulas normales: Entran en modo protector (bajan crecimiento)
  - Celulas cancerosas: No pueden frenar crecimiento (mutaciones oncogenicas)
  - Resultado: Mayor sensibilidad tumoral + menor toxicidad en tejido normal

Estado de evidencia:
  - Estudios en animales: Prometedores
  - Ensayos clinicos fase I/II: Seguro, tolerado
  - Ensayos fase III: En curso (DIRECT trial en cancer de mama)
  - NO recomendar fuera de ensayo clinico actualmente
\`\`\``,
      keyTerms: [
        { term: 'cromonutricion | chrononutrition', definition: 'Estudio de como el momento de la ingesta alimentaria interactua con ritmos circadianos para afectar el metabolismo | Study of how food intake timing interacts with circadian rhythms to affect metabolism' },
        { term: 'AGEs | advanced glycation end products', definition: 'Productos de glicacion avanzada formados por la reaccion entre azucares y proteinas; contribuyen a complicaciones diabeticas y envejecimiento | Advanced glycation end products formed from sugar-protein reactions; contribute to diabetic complications and aging' },
        { term: 'Portfolio Diet | Dieta Portafolio', definition: 'Patron dietetico que combina esteroles, fibra soluble, soya y almendras para una reduccion de LDL comparable a estatinas de baja potencia | Dietary pattern combining sterols, soluble fiber, soy, and almonds for LDL reduction comparable to low-potency statins' },
        { term: 'inmunonutricion | immunonutrition', definition: 'Uso de nutrientes especificos (arginina, omega-3, nucleotidos) para modular la respuesta inmune, especialmente en el periodo perioperatorio | Use of specific nutrients to modulate immune response, especially perioperatively' },
        { term: 'pre-habilitacion | prehabilitation', definition: 'Programa multimodal pre-quirurgico que incluye nutricion, ejercicio y apoyo psicologico para optimizar la condicion del paciente antes de la cirugia | Multimodal pre-surgical program to optimize patient condition before surgery' },
        { term: 'estres diferencial | differential stress', definition: 'Hipotesis de que el ayuno protege celulas normales pero no cancerosas durante quimioterapia, ya que las celulas tumorales no pueden frenar su crecimiento | Hypothesis that fasting protects normal but not cancer cells during chemotherapy' },
      ],
      analogies: [
        'La cromonutricion es como un horario de trenes - el mismo tren (comida) llega a destinos diferentes (efectos metabolicos) dependiendo de cuando sale (hora del dia). | Chrononutrition is like a train schedule - the same train (food) arrives at different destinations (metabolic effects) depending on when it departs (time of day).',
        'La dieta Portafolio es como un portafolio de inversiones diversificado - cada componente reduce un poco el LDL, y juntos logran una reduccion significativa. | The Portfolio Diet is like a diversified investment portfolio - each component reduces LDL a little, and together they achieve significant reduction.',
        'La hipotesis del estres diferencial es como un simulacro de evacuacion: las celulas normales saben como responder al ayuno y protegerse, pero las celulas cancerosas no siguen las reglas y son mas vulnerables. | The differential stress hypothesis is like a fire drill: normal cells know how to respond to fasting and protect themselves, but cancer cells don\'t follow the rules and are more vulnerable.',
      ],
      examples: [
        'MCG muestra que un paciente tiene pico glucemico de 180 mg/dL con pan blanco pero solo 130 mg/dL con el mismo peso de pan integral + mantequilla de mani | CGM shows a patient has 180 mg/dL peak with white bread but only 130 with whole wheat + peanut butter',
        'Inmunonutricion pre-operatoria (Impact) por 5 dias antes de cirugia de cancer colorrectal redujo infecciones en 42% | Perioperative immunonutrition for 5 days before colorectal surgery reduced infections by 42%',
        'Ratio P:proteina - claras de huevo tienen 7x menos fosforo por gramo de proteina que lacteos, ideal para ERC | P:protein ratio - egg whites have 7x less phosphorus per gram of protein than dairy, ideal for CKD',
      ],
      clinicalNotes: 'En DM2, los patrones dieteticos importan mas que nutrientes individuales - individualizar segun preferencias, cultura y metas metabolicas. El EPA puro (icosapento etilo 4g/dia) tiene evidencia cardiovascular solida en REDUCE-IT, a diferencia de combinaciones EPA+DHA. En cancer GI, la inmunonutricion pre-operatoria por 5-7 dias esta recomendada por ESPEN como estandar de cuidado. En ERC, el fosforo de aditivos alimentarios debe ser el primer objetivo de restriccion. | In T2D, dietary patterns matter more than individual nutrients. Pure EPA has solid CV evidence. Perioperative immunonutrition is ESPEN standard of care for GI cancer surgery. In CKD, food additive phosphorus should be the first restriction target.',
    },
    5: {
      level: 5,
      summary:
        'Las intervenciones nutricionales de nivel experto en enfermedades cronicas integran nutrigenomica, metabolomica, analisis del microbioma y medicina de precision para individualizar terapias. Las fronteras incluyen algoritmos de prediccion de respuesta glucemica basados en IA, terapias metabolicas cetogenicas dirigidas, modulacion del eje intestino-inmunidad tumoral y nutricion personalizada basada en multi-omica. | Expert-level nutritional interventions in chronic diseases integrate nutrigenomics, metabolomics, microbiome analysis, and precision medicine to individualize therapies. Frontiers include AI-based glycemic response prediction algorithms, targeted ketogenic metabolic therapies, gut-tumor immunity axis modulation, and multi-omics-based personalized nutrition.',
      explanation: `## Nutrigenomica en Enfermedades Cronicas | Nutrigenomics in Chronic Disease

### Variantes Geneticas y Respuesta Dietetica | Genetic Variants and Dietary Response

\`\`\`
Diabetes tipo 2:
  TCF7L2 rs7903146:
    - Variante comun mas fuerte para DM2
    - Portadores TT: Mayor deterioro de secrecion de insulina
    - Respuesta dietetica: Mayor beneficio de dieta mediterranea vs bajo en grasa

  PPARG Pro12Ala:
    - Alelo Ala: Menor riesgo de DM2
    - Respuesta dietetica: Mayor sensibilidad a grasas saturadas (Ala portadores)
    - Implicacion: Portadores Pro/Pro toleran mejor la grasa dietetica

Enfermedad cardiovascular:
  APOE:
    epsilon4 portadores:
      - Mayor respuesta de LDL a grasa saturada
      - Mayor beneficio de dieta mediterranea
      - Recomendacion: Restriccion agresiva de grasa saturada

    epsilon2 portadores:
      - Menor respuesta de LDL a grasa saturada
      - Pero mayor riesgo de hipertrigliceridemia

  FADS1/2 haplotipos:
    - Determinan eficiencia de conversion de ALA a EPA/DHA
    - Haplotipo D: Conversion ineficiente -> Mayor necesidad de EPA/DHA preformado
    - Relevancia: Vegetarianos/veganos con este haplotipo necesitan suplementacion

Cancer:
  NAT2 (N-acetiltransferasa 2):
    - Acetiladores rapidos: Mayor riesgo de cancer colorrectal con carnes procesadas
    - Acetiladores lentos: Mayor riesgo con aminas aromaticas
    - Implicacion: Diferentes perfiles de riesgo segun genotipo
\`\`\`

## Microbioma y Enfermedades Cronicas | Microbiome and Chronic Disease

### Eje Intestino-Metabolismo | Gut-Metabolism Axis

\`\`\`
Diabetes tipo 2:
  Disbiosis asociada:
    - Reduccion de Faecalibacterium prausnitzii (antiinflamatorio)
    - Aumento de Firmicutes/Bacteroidetes ratio
    - Reduccion de produccion de butirato

  Intervenciones:
    - Fibra prebiotica: Aumenta Bifidobacterium, mejora sensibilidad a insulina
    - Trasplante de microbiota fecal (investigacional): Mejora transitoria de sensibilidad a insulina
    - Akkermansia muciniphila: Asociada con mejor control metabolico; pasteurizada mantiene efecto

Enfermedad cardiovascular:
  Via TMAO:
    L-carnitina/colina -> Microbioma -> TMA -> Higado (FMO3) -> TMAO
    - TMAO elevado: Aterosclerosis acelerada, eventos CV
    - Dieta basada en plantas: Menor produccion de TMAO
    - DMB (3,3-dimetil-1-butanol): Inhibidor TMA liasa (preclínico)

Enfermedad renal cronica:
  Toxinas uremicas de origen intestinal:
    - Indoxil sulfato (de triptofano): Nefrotoxicidad, fibrosis
    - p-cresil sulfato (de tirosina): Dano tubular
    - Estrategia: Fibra prebiotica + probioticos para reducir produccion

Cancer colorrectal:
  Fusobacterium nucleatum:
    - Promueve carcinogenesis (activacion beta-catenina)
    - Asociado con peor pronostico
    - Dieta: Fibra y fitoquimicos pueden modular colonizacion
\`\`\`

## Terapias Metabolicas Emergentes | Emerging Metabolic Therapies

### Dieta Cetogenica en Cancer | Ketogenic Diet in Cancer

\`\`\`
Fundamento (Efecto Warburg):
  Celulas cancerosas: Glucolisis aerobica preferencial
  Dieta cetogenica: Reduce glucosa disponible + proporciona cetonas
    -> Celulas normales: Usan cetonas eficientemente
    -> Celulas tumorales: Metabolismo inflexible, estrés metabolico

Evidencia clinica:
  Glioblastoma:
    - Estudios piloto: Seguro, factible
    - Combinacion con temozolomida + radiacion: Senales de beneficio
    - Ensayos fase II: En curso

  Otros tumores:
    - Cancer de mama ER+: Reduccion de insulina/IGF-1 puede ser beneficiosa
    - Cancer de prostata: Efectos sobre androgenos debatidos
    - Pan-cancer: Insuficiente evidencia para recomendar

Limitaciones:
  - Adherencia dificil en pacientes oncologicos
  - Riesgo nutricional si ingesta inadecuada
  - Interacciones con tratamiento (corticosteroides elevan glucosa)
  - No estandarizado: Ratios cetogenicos variables (4:1, 3:1, dieta Atkins modificada)
\`\`\`

### Ayuno Imitado (Fasting-Mimicking Diet - FMD) | Fasting-Mimicking Diet

\`\`\`
Protocolo Longo (ProLon):
  - 5 dias de restriccion calorica ciclica (750-1100 kcal)
  - Baja en proteina, baja en azucar, alta en grasa vegetal
  - Repite cada 1-3 meses

Mecanismos:
  1. Reduccion de IGF-1, glucosa, insulina
  2. Activacion de AMPK, autofagia
  3. Regeneracion de celulas madre (pancreas, sistema inmune)
  4. Reduccion de marcadores inflamatorios

Aplicaciones:
  - DM2: Restauracion parcial de funcion de celulas beta (murino)
  - Cancer: Sensibilizacion a quimioterapia (ensayos fase II)
  - Envejecimiento: Reduccion de biomarcadores de riesgo
  - Esclerosis multiple: Modulacion inmune (estudio piloto)

Estado: Evidencia prometedora pero insuficiente para recomendacion clinica universal
\`\`\`

## Nutricion de Precision Multi-omica | Multi-omics Precision Nutrition

\`\`\`
Integracion de datos:
  Genomica: Variantes en TCF7L2, APOE, FADS, MTHFR
  + Metabolomica: Perfil de TMAO, SCFA, marcadores inflamatorios
  + Microbioma: Composicion, capacidad funcional
  + Fenotipo: MCG, antropometria, marcadores bioquimicos
  + Estilo de vida: Actividad, sueno, estres
  = Recomendacion nutricional personalizada

Algoritmos predictivos:
  - Prediccion de respuesta glucemica personal (Weizmann Institute)
  - Machine learning: Mejor que IG para predecir respuesta individual
  - Implementacion: Apps, plataformas digitales, telenutricion

Ensayos clinicos en curso:
  - PREDICT (King's College): Respuesta individual a alimentos
  - DayTwo: Algoritmo microbioma -> recomendaciones glucemicas
  - Zoe: Plataforma de nutricion personalizada
\`\`\`

## Aplicaciones Clinicas de Frontera | Frontier Clinical Applications

\`\`\`
Terapia nutricional dirigida al microbioma:
  - Probioticos de proxima generacion (Akkermansia, F. prausnitzii)
  - Posbioticos (metabolitos microbianos como butirato)
  - Dietas personalizadas basadas en perfil microbiano

Nutricion de precision en oncologia:
  - Perfilado metabolico tumoral -> Dieta dirigida
  - Inmunonutricion personalizada basada en biomarcadores
  - Modulacion del microbioma para respuesta a inmunoterapia

Nutricion y epigenetica:
  - Donantes de metilo (folato, colina, B12) -> Metilacion de ADN
  - Polifenoles -> Modificacion de histonas
  - Butirato -> Inhibicion de HDAC
  - Programacion nutricional fetal (Hipotesis de Barker)
\`\`\``,
      keyTerms: [
        { term: 'TMAO', definition: 'N-oxido de trimetilamina; metabolito del microbioma intestinal derivado de carnitina y colina; asociado con aterosclerosis acelerada y eventos cardiovasculares | Trimethylamine N-oxide; gut microbiome metabolite from carnitine and choline; associated with accelerated atherosclerosis and CV events' },
        { term: 'efecto Warburg | Warburg effect', definition: 'Preferencia de las celulas cancerosas por glucolisis aerobica en lugar de fosforilacion oxidativa, incluso en presencia de oxigeno | Cancer cells\' preference for aerobic glycolysis over oxidative phosphorylation, even in the presence of oxygen' },
        { term: 'Akkermansia muciniphila', definition: 'Bacteria intestinal asociada con mejor control metabolico; reducida en obesidad y DM2; potencial probiotico de nueva generacion | Gut bacterium associated with better metabolic control; reduced in obesity and T2D; potential next-generation probiotic' },
        { term: 'dieta imitadora de ayuno | fasting-mimicking diet', definition: 'Protocolo de restriccion calorica ciclica de 5 dias que activa vias de ayuno sin ayuno completo; desarrollada por Valter Longo | 5-day cyclic caloric restriction protocol activating fasting pathways without complete fasting; developed by Valter Longo' },
        { term: 'toxinas uremicas intestinales | gut-derived uremic toxins', definition: 'Metabolitos microbianos (indoxil sulfato, p-cresil sulfato) que se acumulan en ERC y contribuyen a nefrotoxicidad y enfermedad cardiovascular | Microbial metabolites accumulating in CKD contributing to nephrotoxicity and cardiovascular disease' },
        { term: 'hipotesis de Barker | Barker hypothesis', definition: 'Teoria de programacion fetal donde la nutricion inadecuada durante el embarazo programa enfermedades cronicas en la vida adulta via cambios epigeneticos | Fetal programming theory where inadequate nutrition during pregnancy programs chronic diseases in adult life via epigenetic changes' },
      ],
      analogies: [
        'El efecto Warburg es como una fabrica que insiste en usar un proceso ineficiente (glucolisis) incluso cuando hay uno mejor disponible (fosforilacion oxidativa) - la dieta cetogenica intenta cortar el suministro de materia prima a esta fabrica. | The Warburg effect is like a factory insisting on using an inefficient process even when a better one is available - the ketogenic diet tries to cut off the raw material supply.',
        'La nutricion multi-omica es como un GPS con multiples satelites - cuantas mas fuentes de datos (genomica, microbioma, metabolomica), mas precisa es la ruta nutricional personalizada. | Multi-omics nutrition is like a GPS with multiple satellites - the more data sources, the more precise the personalized nutritional route.',
        'El TMAO es como un mensajero destructivo - las bacterias del intestino crean el mensaje (TMA), el higado lo activa (TMAO), y las arterias sufren las consecuencias. | TMAO is like a destructive messenger - gut bacteria create the message (TMA), the liver activates it (TMAO), and arteries suffer the consequences.',
      ],
      examples: [
        'Portador de APOE epsilon4 con LDL 180: Dieta mediterranea estricta + restriccion agresiva de grasa saturada reduce LDL 25% antes de considerar estatinas | APOE epsilon4 carrier with LDL 180: Strict Mediterranean diet reduces LDL 25%',
        'Algoritmo del Weizmann Institute predice respuesta glucemica individual con precision 15-20% mayor que el indice glucemico solo | Weizmann algorithm predicts individual glycemic response 15-20% more accurately than GI alone',
        'FMD (ProLon) por 5 dias/mes durante 3 meses redujo IGF-1, glucosa en ayunas, PCR y grasa troncal en estudio de 100 participantes | FMD for 5 days/month for 3 months reduced IGF-1, fasting glucose, CRP, and trunk fat',
        'Paciente con ERC estadio 4: Dieta muy baja en proteina (0.3g/kg) + cetoanalogos retraso dialisis 18 meses comparado con dieta estandar | CKD stage 4: Very low protein diet + ketoanalogues delayed dialysis 18 months',
      ],
      clinicalNotes: `Perlas clinicas de nivel experto | Expert Clinical Pearls:

1. **Nutrigenomica y diabetes:** TCF7L2 rs7903146 TT portadores se benefician mas de dieta mediterranea; PPARG Pro12Ala influye en tolerancia a grasa dietetica - individualizar | TCF7L2 TT carriers benefit more from Mediterranean diet

2. **TMAO y riesgo CV:** Considerar TMAO serico como biomarcador emergente; dietas basadas en plantas reducen produccion; suplementos de L-carnitina pueden aumentar TMAO | Consider TMAO as emerging biomarker; plant-based diets reduce production

3. **Cetogenica en cancer:** Solo recomendar dentro de ensayos clinicos; mejor evidencia en glioblastoma; contraindicada en caquexia severa o ingesta calorca inadecuada | Only recommend ketogenic diet in cancer within clinical trials

4. **ERC y microbioma:** Prebioticos (inulina, FOS) pueden reducir toxinas uremicas intestinales; considerar en ERC temprana como estrategia complementaria | Prebiotics may reduce gut-derived uremic toxins in early CKD

5. **Inmunonutricion perioperatoria:** ESPEN recomienda formulas con arginina + omega-3 + nucleotidos por 5-7 dias pre-cirugía en cancer GI como estandar de cuidado | ESPEN recommends perioperative immunonutrition as standard of care in GI cancer surgery

6. **Nutricion de precision:** La respuesta glucemica individual varia hasta 4x entre personas; MCG + algoritmos de ML son el futuro de la prescripcion nutricional en diabetes | Individual glycemic response varies up to 4x; CGM + ML algorithms are the future of nutritional prescription in diabetes`,
    },
  },

  media: [],

  citations: [
    {
      id: 'predimed',
      type: 'journal',
      title: 'Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts',
      authors: ['R Estruch', 'E Ros', 'J Salas-Salvado'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1800389',
    },
    {
      id: 'reduce-it',
      type: 'journal',
      title: 'Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (REDUCE-IT)',
      authors: ['DL Bhatt', 'PG Steg', 'M Miller'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1812792',
    },
    {
      id: 'ada-nutrition-standards',
      type: 'guideline',
      title: 'Nutrition Therapy for Adults with Diabetes or Prediabetes: A Consensus Report',
      authors: ['American Diabetes Association'],
      source: 'Diabetes Care',
      url: 'https://doi.org/10.2337/dci19-0014',
    },
    {
      id: 'kdoqi-nutrition',
      type: 'guideline',
      title: 'KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update',
      authors: ['KDOQI Work Group'],
      source: 'American Journal of Kidney Diseases',
      url: 'https://doi.org/10.1053/j.ajkd.2020.05.006',
    },
    {
      id: 'espen-surgical-nutrition',
      type: 'guideline',
      title: 'ESPEN Guidelines on Nutrition in Cancer Patients',
      authors: ['J Arends', 'P Bachmann', 'V Baracos'],
      source: 'Clinical Nutrition',
      url: 'https://doi.org/10.1016/j.clnu.2016.07.015',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrientes-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrientes | Macronutrients' },
    { targetId: 'nutrition-vitaminas-vitamins', targetType: 'topic', relationship: 'related', label: 'Vitaminas | Vitamins' },
    { targetId: 'nutrition-minerales-minerals', targetType: 'topic', relationship: 'related', label: 'Minerales | Minerals' },
    { targetId: 'nutrition-evaluacion-nutricional', targetType: 'topic', relationship: 'sibling', label: 'Evaluacion nutricional | Nutritional Assessment' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Diabetes Tipo 2 | Type 2 Diabetes' },
    { targetId: 'nephrology-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Enfermedad renal cronica | Chronic Kidney Disease' },
    { targetId: 'cardiology-heart-failure', targetType: 'condition', relationship: 'related', label: 'Insuficiencia cardiaca | Heart Failure' },
  ],

  tags: {
    systems: ['cardiovascular', 'endocrine', 'renal', 'gastrointestinal', 'oncologic'],
    topics: ['nutrition', 'preventive-medicine', 'chronic-disease', 'evidence-based-medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'surgery'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nutricionEnfermedadesCronicasNutritionChronicDisease;
