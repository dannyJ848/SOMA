import { EducationalContent } from '../types';

/**
 * Nutrición Cardiosaludable / Heart-Healthy Nutrition
 *
 * Contenido educativo bilingue (español primero) sobre la nutrición para la
 * salud cardiovascular. Cubre dietas DASH y mediterránea, manejo de lípidos,
 * reducción de sodio, ácidos grasos omega-3, y guías ACC/AHA actualizadas.
 *
 * Bilingual educational content (Spanish first) on nutrition for
 * cardiovascular health. Covers DASH and Mediterranean diets, lipid management,
 * sodium reduction, omega-3 fatty acids, and updated ACC/AHA guidelines.
 */

export const nutricionCardiacaHeartHealthy: EducationalContent = {
  id: 'topic-nutricion-cardiaca',
  type: 'topic',
  name: 'Heart-Healthy Nutrition',
  nameEs: 'Nutrición Cardiosaludable',
  alternateNames: ['Dieta para el Corazón', 'Nutrición Cardiovascular', 'Cardiovascular Nutrition', 'Cardioprotective Diet', 'Dieta Cardioprotectora'],

  levels: {
    1: {
      level: 1,
      summary: 'La nutrición cardiosaludable es comer de una forma que proteja tu corazón y tus vasos sanguíneos. Significa comer más frutas, verduras, pescado y granos integrales, y menos sal, grasas malas y azúcar. | Heart-healthy nutrition means eating in a way that protects your heart and blood vessels. It means eating more fruits, vegetables, fish, and whole grains, and less salt, bad fats, and sugar.',
      explanation: `## Explicación

Tu corazón es como una bomba que trabaja sin parar para enviar sangre a todo tu cuerpo. Lo que comes puede ayudar a que tu corazón esté fuerte y sano, o puede dañarlo con el tiempo.

### ¿Qué Daña al Corazón?

Imagina que tus arterias (los tubos que llevan la sangre) son como tuberías de agua. Con el tiempo, si comes mucha grasa mala y sal, se forma una capa pegajosa dentro de las tuberías que las hace más estrechas. Esto se llama **colesterol alto** o **aterosclerosis**. Si una tubería se tapa completamente, puede causar un **ataque al corazón** o un **derrame cerebral**.

### Alimentos Buenos para Tu Corazón

**Come MÁS de estos:**
- **Frutas y verduras:** Mínimo 5 porciones al día (de muchos colores)
- **Pescado:** Especialmente salmón, sardinas, atún (2 veces por semana)
- **Granos integrales:** Avena, arroz integral, pan integral, tortilla de maíz
- **Frijoles y lentejas:** Excelente fuente de proteínas y fibra
- **Nueces y semillas:** Un puñito al día (nueces, almendras, semillas de girasol)
- **Aceite de oliva:** En lugar de manteca o mantequilla
- **Aguacate:** Tiene grasas buenas para el corazón

**Come MENOS de estos:**
- **Sal:** Menos de una cucharadita al día (usa limón y especias en su lugar)
- **Carnes procesadas:** Hot dogs, jamón, salchichas, tocino
- **Frituras:** Papas fritas, chicharrón, alimentos empanizados
- **Refrescos y dulces:** Mucha azúcar daña los vasos sanguíneos
- **Grasas trans:** Margarina dura, galletas comerciales, comida rápida

### Reglas Fáciles para un Corazón Sano

1. **Llena la mitad de tu plato con frutas y verduras**
2. **Come pescado dos veces por semana**
3. **Cambia la sal por limón, ajo y especias**
4. **Bebe agua en vez de refrescos**
5. **Cocina en casa más seguido** (la comida de restaurante tiene mucha sal y grasa)

### La Dieta Mediterránea: La Mejor para el Corazón

Los pueblos del Mediterráneo (España, Italia, Grecia) tienen menos enfermedades del corazón. Su secreto es:
- Mucho aceite de oliva
- Mucho pescado
- Muchas frutas, verduras y legumbres
- Pocas carnes rojas
- Un poquito de vino tinto con la comida (para adultos)

---
## Explanation

Your heart is like a pump that works nonstop to send blood throughout your body. What you eat can help keep your heart strong and healthy, or damage it over time.

### What Damages the Heart?

Imagine your arteries (the tubes that carry blood) are like water pipes. Over time, if you eat too much bad fat and salt, a sticky layer forms inside the pipes making them narrower. This is called **high cholesterol** or **atherosclerosis**. If a pipe gets completely blocked, it can cause a **heart attack** or **stroke**.

### Foods Good for Your Heart

**Eat MORE of these:**
- **Fruits and vegetables:** At least 5 servings a day (many colors)
- **Fish:** Especially salmon, sardines, tuna (2 times per week)
- **Whole grains:** Oatmeal, brown rice, whole wheat bread, corn tortilla
- **Beans and lentils:** Excellent source of protein and fiber
- **Nuts and seeds:** A small handful a day (walnuts, almonds, sunflower seeds)
- **Olive oil:** Instead of lard or butter
- **Avocado:** Has good fats for the heart

**Eat LESS of these:**
- **Salt:** Less than one teaspoon a day (use lemon and spices instead)
- **Processed meats:** Hot dogs, ham, sausages, bacon
- **Fried foods:** French fries, pork rinds, breaded foods
- **Sodas and sweets:** Too much sugar damages blood vessels
- **Trans fats:** Hard margarine, commercial cookies, fast food

### Easy Rules for a Healthy Heart

1. **Fill half your plate with fruits and vegetables**
2. **Eat fish twice a week**
3. **Swap salt for lemon, garlic, and spices**
4. **Drink water instead of soda**
5. **Cook at home more often** (restaurant food has lots of salt and fat)

### The Mediterranean Diet: The Best for the Heart

Mediterranean peoples (Spain, Italy, Greece) have fewer heart diseases. Their secret is:
- Lots of olive oil
- Lots of fish
- Lots of fruits, vegetables, and legumes
- Little red meat
- A little red wine with meals (for adults)`,
      keyTerms: [
        { term: 'colesterol / cholesterol', definition: 'Una sustancia cerosa que puede acumularse en las paredes de las arterias y taparlas si comes mucha grasa mala. | A waxy substance that can build up in artery walls and block them if you eat too much bad fat.' },
        { term: 'aterosclerosis / atherosclerosis', definition: 'Cuando se acumula grasa y colesterol dentro de las arterias, haciéndolas más estrechas y duras. | When fat and cholesterol build up inside arteries, making them narrower and harder.' },
        { term: 'grasas trans / trans fats', definition: 'El tipo de grasa más dañina para el corazón; se encuentra en margarinas duras, comida rápida y productos empacados. | The most harmful type of fat for the heart; found in hard margarines, fast food, and packaged products.' },
        { term: 'dieta mediterránea / Mediterranean diet', definition: 'Forma de comer basada en la tradición de países del Mediterráneo: mucho aceite de oliva, pescado, frutas y verduras; es la mejor dieta comprobada para el corazón. | Way of eating based on Mediterranean country traditions: lots of olive oil, fish, fruits and vegetables; the best proven diet for the heart.' },
        { term: 'sodio / sodium', definition: 'El componente de la sal que sube la presión arterial; la meta es menos de 2300 mg al día (menos de 1 cucharadita de sal). | The component of salt that raises blood pressure; the goal is less than 2300 mg per day (less than 1 teaspoon of salt).' }
      ],
      analogies: [
        'Las arterias tapadas de grasa son como tuberías de agua llenas de sarro: el agua (sangre) ya no puede pasar bien, y la presión sube hasta que algo se rompe. | Clogged arteries are like water pipes full of scale: water (blood) can no longer flow well, and pressure builds up until something breaks.',
        'Comer mucha sal es como echarle mucha agua a un globo: la presión sube y sube hasta que el globo puede reventar. Así pasa con tus arterias y la presión alta. | Eating too much salt is like putting too much water in a balloon: pressure keeps rising until the balloon can burst. That is what happens with your arteries and high blood pressure.',
        'Las grasas omega-3 del pescado son como el aceite de un motor: mantienen todo funcionando suavemente y evitan que las piezas se peguen. | Omega-3 fats from fish are like engine oil: they keep everything running smoothly and prevent parts from sticking together.'
      ],
      examples: [
        'Un taco de pescado con ensalada de repollo, aguacate y limón es una comida deliciosa y cardiosaludable: tiene omega-3, fibra, grasas buenas y casi nada de sal. | A fish taco with cabbage salad, avocado, and lime is a delicious heart-healthy meal: it has omega-3, fiber, good fats, and almost no salt.',
        'Cambia tu botana de papas fritas por un puñito de nueces y almendras: reduces grasas trans y sodio, y agregas grasas buenas que protegen tu corazón. | Swap your chip snack for a handful of walnuts and almonds: you reduce trans fats and sodium, and add good fats that protect your heart.'
      ],
      patientCounselingPoints: [
        'No necesitas hacer cambios drásticos de un día para otro. Empieza con uno o dos cambios pequeños cada semana. | You don\'t need to make drastic changes overnight. Start with one or two small changes each week.',
        'Leer las etiquetas es clave: busca "sodio" y "grasas trans" e intenta elegir productos con menos de ambos. | Reading labels is key: look for "sodium" and "trans fats" and try to choose products with less of both.',
        'Cocinar en casa con especias y hierbas en lugar de sal puede ser igual de sabroso y mucho mejor para tu corazón. | Cooking at home with spices and herbs instead of salt can be just as tasty and much better for your heart.'
      ]
    },

    2: {
      level: 2,
      summary: 'La nutrición cardiosaludable se centra en tres pilares: reducción de sodio (<2300 mg/día) para controlar la presión arterial, manejo de lípidos mediante reducción de grasas saturadas (<7% kcal) y trans, y aumento de grasas cardioprotectoras (omega-3, MUFA). Las dietas DASH y mediterránea tienen la mayor evidencia de reducción de eventos cardiovasculares. | Heart-healthy nutrition centers on three pillars: sodium reduction (<2300 mg/day) to control blood pressure, lipid management through saturated fat (<7% kcal) and trans fat reduction, and increase in cardioprotective fats (omega-3, MUFA). DASH and Mediterranean diets have the strongest evidence for cardiovascular event reduction.',
      explanation: `## Explicación

### Los Tres Pilares de la Nutrición Cardiosaludable

#### Pilar 1: Reducción de Sodio y Presión Arterial

**¿Cómo afecta el sodio a la presión arterial?**
- El sodio retiene agua en el cuerpo → ↑ volumen de sangre → ↑ presión arterial
- La presión arterial alta (hipertensión) es el factor de riesgo modificable #1 para enfermedad cardiovascular

**Metas de sodio:**
- Población general: <2300 mg/día (= ~1 cucharadita de sal)
- Personas con hipertensión o alto riesgo CV: <1500 mg/día
- Realidad: El consumo promedio en América es ~3400 mg/día

**Fuentes ocultas de sodio:**
- Pan y productos de panadería (la fuente #1 en la dieta occidental)
- Carnes procesadas (jamón, tocino, embutidos)
- Sopas enlatadas y caldos
- Quesos
- Comida rápida y de restaurante
- Condimentos (salsa de soya, ketchup, mostaza)

**Estrategias para reducir sodio:**
- Cocinar en casa con especias frescas
- Enjuagar los frijoles y verduras enlatadas
- Elegir "bajo en sodio" o "sin sal añadida"
- Usar limón, vinagre, ajo, hierbas en lugar de sal
- Leer etiquetas: <140 mg por porción = "bajo en sodio"

#### Pilar 2: Manejo de Grasas y Colesterol

**Tipos de grasa y su efecto cardiovascular:**

| Tipo de grasa | Efecto | Fuentes | Recomendación |
|---------------|--------|---------|---------------|
| Saturada | ↑ LDL colesterol | Mantequilla, carne roja, queso, aceite de coco | <7% de calorías totales |
| Trans | ↑↑ LDL, ↓ HDL (la peor) | Margarina dura, productos horneados industriales | 0% (eliminar completamente) |
| Monoinsaturada (MUFA) | ↓ LDL, mantiene HDL | Aceite de oliva, aguacate, nueces | 15-20% de calorías |
| Poliinsaturada (PUFA) | ↓ LDL colesterol | Aceite de maíz, soya, girasol | 5-10% de calorías |
| Omega-3 (EPA/DHA) | ↓ Triglicéridos, antiinflamatorio, antiarrítmico | Salmón, sardinas, atún, linaza | ≥250-500 mg EPA+DHA/día |

**Colesterol dietético:**
- Antes: Límite estricto de 300 mg/día
- Guías actuales: No hay límite específico de colesterol dietético; el foco está en reducir grasas saturadas y trans
- Sin embargo: Limitar alimentos altos en colesterol que también son altos en grasas saturadas

**Fitosteroles/Fitoestanoles:**
- Sustancias vegetales que compiten con el colesterol por absorción intestinal
- 2 g/día → ↓ LDL ~6-10%
- Fuentes: Margarinas enriquecidas, suplementos

#### Pilar 3: Fibra, Potasio y Antioxidantes

**Fibra soluble y colesterol:**
- 5-10 g/día de fibra soluble → ↓ LDL ~3-5%
- Mecanismo: Se une a ácidos biliares en el intestino → el hígado usa colesterol para fabricar más ácidos biliares → ↓ colesterol sanguíneo
- Fuentes: Avena (beta-glucano), frijoles, manzana, cítricos, psyllium

**Potasio y presión arterial:**
- ↑ Potasio → ↑ excreción renal de sodio → ↓ presión arterial
- Meta: 3500-5000 mg/día (la mayoría consume insuficiente)
- Fuentes: Plátano, papa, espinaca, frijoles, aguacate, yogur

**Antioxidantes:**
- Vitaminas C y E, polifenoles, carotenoides → ↓ oxidación de LDL → ↓ aterosclerosis
- Mejor de alimentos que de suplementos (los suplementos no han mostrado beneficio en ensayos clínicos)
- Fuentes: Frutas y verduras coloridas, té verde, chocolate oscuro, vino tinto (con moderación)

### Dietas con Evidencia Cardiovascular

#### Dieta DASH (Dietary Approaches to Stop Hypertension)

**Composición:**
- 4-5 porciones/día de frutas
- 4-5 porciones/día de verduras
- 6-8 porciones/día de granos integrales
- 2-3 porciones/día de lácteos bajos en grasa
- ≤6 oz/día de carnes magras
- 4-5 porciones/semana de nueces, semillas, legumbres
- ↓ Sodio a <2300 mg (idealmente <1500 mg)

**Evidencia:**
- ↓ Presión sistólica: ~5-6 mmHg (más si se combina con reducción de sodio: ~11 mmHg)
- ↓ LDL colesterol ~7-9%
- ↓ Riesgo de ICC, enfermedad coronaria, derrame cerebral

#### Dieta Mediterránea

**Componentes clave:**
- Aceite de oliva extra virgen como grasa principal (≥4 cucharadas/día en PREDIMED)
- Pescado y mariscos ≥2 veces/semana
- Legumbres ≥3 veces/semana
- Nueces: 1 puñado/día
- Frutas: ≥3/día; Verduras: ≥2/día
- Vino tinto: 1 copa/día con comida (opcional)
- Limitar: Carnes rojas y procesadas, dulces, refrescos

**Evidencia (PREDIMED):**
- ↓ 30% eventos cardiovasculares mayores (infarto, derrame, muerte CV)
- ↓ 30-50% incidencia de DM2
- ↓ Incidencia de fibrilación auricular
- ↓ Deterioro cognitivo

---
## Explanation

### The Three Pillars of Heart-Healthy Nutrition

#### Pillar 1: Sodium Reduction and Blood Pressure

**How does sodium affect blood pressure?**
- Sodium retains water in the body → ↑ blood volume → ↑ blood pressure
- High blood pressure (hypertension) is the #1 modifiable risk factor for cardiovascular disease

**Sodium goals:**
- General population: <2300 mg/day (= ~1 teaspoon of salt)
- People with hypertension or high CV risk: <1500 mg/day
- Reality: Average consumption in America is ~3400 mg/day

**Hidden sodium sources:**
- Bread and bakery products (the #1 source in the Western diet)
- Processed meats (ham, bacon, deli meats)
- Canned soups and broths
- Cheeses
- Fast food and restaurant food
- Condiments (soy sauce, ketchup, mustard)

**Strategies to reduce sodium:**
- Cook at home with fresh spices
- Rinse canned beans and vegetables
- Choose "low sodium" or "no salt added"
- Use lemon, vinegar, garlic, herbs instead of salt
- Read labels: <140 mg per serving = "low sodium"

#### Pillar 2: Fat and Cholesterol Management

**Fat types and cardiovascular effect:**

| Fat type | Effect | Sources | Recommendation |
|----------|--------|---------|----------------|
| Saturated | ↑ LDL cholesterol | Butter, red meat, cheese, coconut oil | <7% of total calories |
| Trans | ↑↑ LDL, ↓ HDL (worst) | Hard margarine, industrial baked goods | 0% (eliminate completely) |
| Monounsaturated (MUFA) | ↓ LDL, maintains HDL | Olive oil, avocado, nuts | 15-20% of calories |
| Polyunsaturated (PUFA) | ↓ LDL cholesterol | Corn, soy, sunflower oil | 5-10% of calories |
| Omega-3 (EPA/DHA) | ↓ Triglycerides, anti-inflammatory, antiarrhythmic | Salmon, sardines, tuna, flaxseed | ≥250-500 mg EPA+DHA/day |

**Dietary cholesterol:**
- Before: Strict limit of 300 mg/day
- Current guidelines: No specific dietary cholesterol limit; focus is on reducing saturated and trans fats
- However: Limit foods high in cholesterol that are also high in saturated fats

**Phytosterols/Phytostanols:**
- Plant substances that compete with cholesterol for intestinal absorption
- 2 g/day → ↓ LDL ~6-10%
- Sources: Enriched margarines, supplements

#### Pillar 3: Fiber, Potassium, and Antioxidants

**Soluble fiber and cholesterol:**
- 5-10 g/day of soluble fiber → ↓ LDL ~3-5%
- Mechanism: Binds bile acids in intestine → liver uses cholesterol to make more bile acids → ↓ blood cholesterol
- Sources: Oatmeal (beta-glucan), beans, apple, citrus, psyllium

**Potassium and blood pressure:**
- ↑ Potassium → ↑ renal sodium excretion → ↓ blood pressure
- Goal: 3500-5000 mg/day (most people consume insufficient amounts)
- Sources: Banana, potato, spinach, beans, avocado, yogurt

**Antioxidants:**
- Vitamins C and E, polyphenols, carotenoids → ↓ LDL oxidation → ↓ atherosclerosis
- Better from foods than supplements (supplements have not shown benefit in clinical trials)
- Sources: Colorful fruits and vegetables, green tea, dark chocolate, red wine (in moderation)

### Diets with Cardiovascular Evidence

#### DASH Diet (Dietary Approaches to Stop Hypertension)

**Composition:**
- 4-5 servings/day of fruits
- 4-5 servings/day of vegetables
- 6-8 servings/day of whole grains
- 2-3 servings/day of low-fat dairy
- ≤6 oz/day of lean meats
- 4-5 servings/week of nuts, seeds, legumes
- ↓ Sodium to <2300 mg (ideally <1500 mg)

**Evidence:**
- ↓ Systolic BP: ~5-6 mmHg (more if combined with sodium reduction: ~11 mmHg)
- ↓ LDL cholesterol ~7-9%
- ↓ Risk of CHF, coronary disease, stroke

#### Mediterranean Diet

**Key components:**
- Extra virgin olive oil as main fat (≥4 tablespoons/day in PREDIMED)
- Fish and seafood ≥2 times/week
- Legumes ≥3 times/week
- Nuts: 1 handful/day
- Fruits: ≥3/day; Vegetables: ≥2/day
- Red wine: 1 glass/day with food (optional)
- Limit: Red and processed meats, sweets, sodas

**Evidence (PREDIMED):**
- ↓ 30% major cardiovascular events (MI, stroke, CV death)
- ↓ 30-50% T2DM incidence
- ↓ Atrial fibrillation incidence
- ↓ Cognitive decline`,
      keyTerms: [
        { term: 'dieta DASH / DASH diet', definition: 'Patrón dietético diseñado para reducir la presión arterial: rico en frutas, verduras, granos integrales y lácteos bajos en grasa; bajo en sodio. | Dietary pattern designed to lower blood pressure: rich in fruits, vegetables, whole grains, and low-fat dairy; low in sodium.' },
        { term: 'LDL colesterol ("malo") / LDL cholesterol ("bad")', definition: 'Lipoproteína que deposita colesterol en las paredes de las arterias; niveles altos aumentan el riesgo de enfermedad cardiovascular. | Lipoprotein that deposits cholesterol in artery walls; high levels increase cardiovascular disease risk.' },
        { term: 'HDL colesterol ("bueno") / HDL cholesterol ("good")', definition: 'Lipoproteína que retira colesterol de las arterias y lo lleva al hígado para su eliminación; niveles altos son protectores. | Lipoprotein that removes cholesterol from arteries and takes it to the liver for elimination; high levels are protective.' },
        { term: 'omega-3 (EPA/DHA)', definition: 'Ácidos grasos poliinsaturados del pescado que reducen triglicéridos, inflamación y riesgo de arritmias; meta: ≥250-500 mg/día. | Polyunsaturated fatty acids from fish that reduce triglycerides, inflammation, and arrhythmia risk; goal: ≥250-500 mg/day.' },
        { term: 'fitosteroles / phytosterols', definition: 'Sustancias vegetales que bloquean la absorción de colesterol en el intestino; 2 g/día reducen LDL ~6-10%. | Plant substances that block cholesterol absorption in the intestine; 2 g/day reduce LDL ~6-10%.' },
        { term: 'fibra soluble / soluble fiber', definition: 'Tipo de fibra que se une a ácidos biliares y reduce el colesterol sanguíneo; fuentes: avena, frijoles, manzana, psyllium. | Type of fiber that binds bile acids and reduces blood cholesterol; sources: oatmeal, beans, apple, psyllium.' }
      ]
    },

    3: {
      level: 3,
      summary: 'La nutrición cardiosaludable actúa sobre múltiples mecanismos de la aterosclerosis: reducción de LDL oxidada mediante antioxidantes y MUFA, modulación de la inflamación endotelial por omega-3 (resolución de inflamación vía resolvinas/protectinas), mejora de la función endotelial por nitratos dietéticos y polifenoles (↑ biodisponibilidad de NO), y reducción de trombosis por omega-3 y ajo. El estudio PREDIMED estableció la dieta mediterránea como intervención de nivel A para prevención CV primaria. | Heart-healthy nutrition acts on multiple atherosclerosis mechanisms: oxidized LDL reduction through antioxidants and MUFA, endothelial inflammation modulation by omega-3 (inflammation resolution via resolvins/protectins), endothelial function improvement by dietary nitrates and polyphenols (↑ NO bioavailability), and thrombosis reduction by omega-3 and garlic. The PREDIMED study established the Mediterranean diet as a level A intervention for primary CV prevention.',
      explanation: `## Explicación

### Mecanismos de Protección Cardiovascular por Nutrientes

#### Aterosclerosis: La Enfermedad y su Prevención Nutricional

La aterosclerosis es un proceso inflamatorio crónico que progresa por etapas:

1. **Disfunción endotelial** → El endotelio pierde capacidad de producir óxido nítrico (NO) → vasoconstricción, inflamación
2. **Penetración y oxidación de LDL** → LDL modificada se acumula en la pared arterial → activa respuesta inmune
3. **Formación de células espumosas** → Macrófagos ingieren LDL oxidada → estrías grasas
4. **Placa aterosclerótica** → Proliferación de músculo liso, depósito de calcio, capa fibrosa
5. **Ruptura de placa** → Trombosis → Infarto o derrame

**Intervención nutricional en cada etapa:**

| Etapa | Mecanismo | Nutrientes protectores |
|-------|-----------|----------------------|
| Disfunción endotelial | ↓ NO, ↑ ROS | Nitratos dietéticos (betabel/remolacha), polifenoles, omega-3, L-arginina |
| Oxidación de LDL | ↑ LDL-ox | MUFA (aceite de oliva), vitamina E, polifenoles, licopeno |
| Inflamación | ↑ TNF-α, IL-6, CRP | Omega-3 (EPA/DHA → resolvinas, protectinas), fibra → SCFA, polifenoles |
| Trombosis | ↑ agregación plaquetaria | Omega-3 (↓ tromboxano A2), ajo (alicina), polifenoles del vino tinto |
| Calcificación | ↑ calcio vascular | Vitamina K2 (menaquinona): dirige calcio a huesos, no a arterias |

#### Omega-3: Mecanismos de Acción Cardiovascular

**EPA (ácido eicosapentaenoico) y DHA (ácido docosahexaenoico):**

**Efecto sobre triglicéridos:**
- Dosis de 2-4 g/día → ↓ triglicéridos 20-50%
- Mecanismo: ↓ síntesis hepática de VLDL (inhibe SREBP-1c), ↑ beta-oxidación, ↑ actividad de lipoproteína lipasa

**Efecto antiinflamatorio:**
- EPA/DHA se incorporan a membranas celulares → desplazan ácido araquidónico (AA)
- ↓ Producción de eicosanoides proinflamatorios (PGE2, LTB4, TXA2)
- ↑ Producción de mediadores pro-resolución de la inflamación:
  - **Resolvinas** (de EPA y DHA): Promueven resolución activa de la inflamación
  - **Protectinas** (de DHA): Neuroprotectoras, antiinflamatorias
  - **Maresinas** (de DHA): Promueven regeneración tisular

**Efecto antiarrítmico:**
- Se incorporan a membranas de cardiomiocitos → estabilizan canales iónicos (Na⁺, Ca²⁺)
- ↑ Umbral de fibrilación ventricular
- ↓ Frecuencia cardíaca en reposo (~2-3 lpm)

**Ensayos clínicos clave:**
- **REDUCE-IT (2019):** Icosapent etil (EPA puro) 4 g/día → ↓ 25% eventos CV mayores en pacientes con triglicéridos elevados ya en estatinas
- **STRENGTH (2020):** EPA+DHA (Epanova) → Sin beneficio CV significativo
- **Interpretación:** El beneficio parece específico del EPA a altas dosis, no del omega-3 en general

#### Polifenoles y Función Endotelial

**Mecanismos de los polifenoles:**
- ↑ Actividad de eNOS (óxido nítrico sintasa endotelial) → ↑ producción de NO → vasodilatación
- ↓ Expresión de moléculas de adhesión (VCAM-1, ICAM-1) → ↓ reclutamiento de leucocitos
- Efecto antioxidante directo: Neutralizan ROS, protegen LDL de oxidación
- Modulan microbioma → ↑ producción de metabolitos cardioprotectores

**Fuentes principales y evidencia:**
- **Aceite de oliva extra virgen (oleocantal, hidroxitirosol):** Efecto antiinflamatorio comparable a ibuprofeno (oleocantal); PREDIMED demostró beneficio CV significativo
- **Cacao/chocolate oscuro (flavanoles):** Meta-análisis: ↓ PA sistólica ~2-3 mmHg, ↑ función endotelial (FMD)
- **Té verde (epigalocatequina galato/EGCG):** ↓ LDL oxidada, ↑ función endotelial
- **Vino tinto (resveratrol):** Efecto antioxidante y antiinflamatorio; sin embargo, la evidencia actual no recomienda iniciar consumo de alcohol por salud CV

#### Nitratos Dietéticos y Óxido Nítrico

**Ruta nitrato-nitrito-NO:**
- Vegetales ricos en nitratos (betabel/remolacha, espinacas, rúcula) → NO₃⁻ absorbido
- Bacterias de la saliva reducen NO₃⁻ → NO₂⁻
- NO₂⁻ se reduce a NO en estómago y tejidos (especialmente en condiciones de hipoxia)
- NO → vasodilatación, ↓ PA, ↑ flujo sanguíneo muscular

**Evidencia:**
- Jugo de betabel (~500 mL/día) → ↓ PA sistólica ~4-5 mmHg en hipertensos
- ↑ Rendimiento en ejercicio (↑ eficiencia de oxígeno ~3-5%)
- Efecto sinérgico con ejercicio para salud CV

**Nota importante:** Los enjuagues bucales antibacterianos eliminan las bacterias reductoras de nitratos de la boca → anulan el beneficio de los nitratos dietéticos

---
## Explanation

### Mechanisms of Cardiovascular Protection by Nutrients

#### Atherosclerosis: The Disease and Its Nutritional Prevention

Atherosclerosis is a chronic inflammatory process that progresses in stages:

1. **Endothelial dysfunction** → Endothelium loses ability to produce nitric oxide (NO) → vasoconstriction, inflammation
2. **LDL penetration and oxidation** → Modified LDL accumulates in artery wall → activates immune response
3. **Foam cell formation** → Macrophages ingest oxidized LDL → fatty streaks
4. **Atherosclerotic plaque** → Smooth muscle proliferation, calcium deposition, fibrous cap
5. **Plaque rupture** → Thrombosis → MI or stroke

**Nutritional intervention at each stage:**

| Stage | Mechanism | Protective nutrients |
|-------|-----------|---------------------|
| Endothelial dysfunction | ↓ NO, ↑ ROS | Dietary nitrates (beetroot), polyphenols, omega-3, L-arginine |
| LDL oxidation | ↑ ox-LDL | MUFA (olive oil), vitamin E, polyphenols, lycopene |
| Inflammation | ↑ TNF-α, IL-6, CRP | Omega-3 (EPA/DHA → resolvins, protectins), fiber → SCFA, polyphenols |
| Thrombosis | ↑ platelet aggregation | Omega-3 (↓ thromboxane A2), garlic (allicin), red wine polyphenols |
| Calcification | ↑ vascular calcium | Vitamin K2 (menaquinone): directs calcium to bones, not arteries |

#### Omega-3: Cardiovascular Mechanisms of Action

**EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid):**

**Effect on triglycerides:**
- Dose of 2-4 g/day → ↓ triglycerides 20-50%
- Mechanism: ↓ hepatic VLDL synthesis (inhibits SREBP-1c), ↑ beta-oxidation, ↑ lipoprotein lipase activity

**Anti-inflammatory effect:**
- EPA/DHA incorporate into cell membranes → displace arachidonic acid (AA)
- ↓ Production of pro-inflammatory eicosanoids (PGE2, LTB4, TXA2)
- ↑ Production of pro-resolution inflammation mediators:
  - **Resolvins** (from EPA and DHA): Promote active inflammation resolution
  - **Protectins** (from DHA): Neuroprotective, anti-inflammatory
  - **Maresins** (from DHA): Promote tissue regeneration

**Antiarrhythmic effect:**
- Incorporate into cardiomyocyte membranes → stabilize ion channels (Na⁺, Ca²⁺)
- ↑ Ventricular fibrillation threshold
- ↓ Resting heart rate (~2-3 bpm)

**Key clinical trials:**
- **REDUCE-IT (2019):** Icosapent ethyl (pure EPA) 4 g/day → ↓ 25% major CV events in patients with elevated triglycerides already on statins
- **STRENGTH (2020):** EPA+DHA (Epanova) → No significant CV benefit
- **Interpretation:** Benefit appears specific to high-dose EPA, not omega-3 in general

#### Polyphenols and Endothelial Function

**Polyphenol mechanisms:**
- ↑ eNOS activity → ↑ NO production → vasodilation
- ↓ Expression of adhesion molecules (VCAM-1, ICAM-1) → ↓ leukocyte recruitment
- Direct antioxidant effect: Neutralize ROS, protect LDL from oxidation
- Modulate microbiome → ↑ production of cardioprotective metabolites

**Main sources and evidence:**
- **Extra virgin olive oil (oleocanthal, hydroxytyrosol):** Anti-inflammatory effect comparable to ibuprofen (oleocanthal); PREDIMED demonstrated significant CV benefit
- **Cocoa/dark chocolate (flavanols):** Meta-analysis: ↓ systolic BP ~2-3 mmHg, ↑ endothelial function (FMD)
- **Green tea (epigallocatechin gallate/EGCG):** ↓ Oxidized LDL, ↑ endothelial function
- **Red wine (resveratrol):** Antioxidant and anti-inflammatory effect; however, current evidence does not recommend initiating alcohol consumption for CV health

#### Dietary Nitrates and Nitric Oxide

**Nitrate-nitrite-NO pathway:**
- Nitrate-rich vegetables (beetroot, spinach, arugula) → NO₃⁻ absorbed
- Salivary bacteria reduce NO₃⁻ → NO₂⁻
- NO₂⁻ is reduced to NO in stomach and tissues (especially under hypoxic conditions)
- NO → vasodilation, ↓ BP, ↑ muscle blood flow

**Evidence:**
- Beetroot juice (~500 mL/day) → ↓ systolic BP ~4-5 mmHg in hypertensives
- ↑ Exercise performance (↑ oxygen efficiency ~3-5%)
- Synergistic effect with exercise for CV health

**Important note:** Antibacterial mouthwashes eliminate nitrate-reducing bacteria from the mouth → abolish the benefit of dietary nitrates`,
      keyTerms: [
        { term: 'resolvinas / resolvins', definition: 'Mediadores lipídicos derivados de EPA/DHA que promueven la resolución activa de la inflamación vascular; representan un paradigma nuevo más allá de la simple inhibición inflamatoria. | Lipid mediators derived from EPA/DHA that promote active resolution of vascular inflammation; represent a new paradigm beyond simple inflammatory inhibition.' },
        { term: 'LDL oxidada / oxidized LDL', definition: 'LDL modificada por radicales libres que es reconocida por receptores scavenger de macrófagos, formando células espumosas y avanzando la aterosclerosis. | LDL modified by free radicals recognized by macrophage scavenger receptors, forming foam cells and advancing atherosclerosis.' },
        { term: 'eNOS (óxido nítrico sintasa endotelial / endothelial nitric oxide synthase)', definition: 'Enzima endotelial que produce óxido nítrico (NO) para vasodilatación; su activación por polifenoles y nitratos dietéticos mejora la función vascular. | Endothelial enzyme producing nitric oxide (NO) for vasodilation; its activation by polyphenols and dietary nitrates improves vascular function.' },
        { term: 'REDUCE-IT (ensayo / trial)', definition: 'Ensayo clínico que demostró 25% reducción de eventos CV con EPA puro (icosapent etil) 4 g/día en pacientes con triglicéridos elevados; cambió la práctica de uso de omega-3 en alto riesgo CV. | Clinical trial showing 25% CV event reduction with pure EPA (icosapent ethyl) 4 g/day in patients with elevated triglycerides; changed omega-3 practice in high CV risk.' },
        { term: 'nitratos dietéticos / dietary nitrates', definition: 'Compuestos en betabel/remolacha y verduras verdes que se convierten en óxido nítrico por bacterias bucales → ↓ PA ~4-5 mmHg. | Compounds in beetroot and green vegetables converted to nitric oxide by oral bacteria → ↓ BP ~4-5 mmHg.' },
        { term: 'vitamina K2 (menaquinona) / vitamin K2 (menaquinone)', definition: 'Forma de vitamina K que activa la proteína Gla de matriz (MGP), inhibiendo la calcificación vascular y dirigiendo el calcio hacia los huesos. | Form of vitamin K that activates matrix Gla protein (MGP), inhibiting vascular calcification and directing calcium to bones.' }
      ],
      clinicalNotes: 'Notas clínicas: (1) Tras el ensayo REDUCE-IT, la FDA aprobó icosapent etil (Vascepa) 4 g/día como adjunto a estatinas en pacientes con TG ≥150 mg/dL y riesgo CV elevado. Notar que este beneficio es específico de EPA puro, no de suplementos genéricos de omega-3 (EPA+DHA). (2) La ruta nitrato-nitrito-NO explica por qué los enjuagues bucales antibacterianos anulan el efecto antihipertensivo de los nitratos dietéticos; considerar suspender enjuagues en pacientes hipertensos que consumen dieta rica en nitratos. (3) El aceite de oliva extra virgen (AOVE) no es intercambiable con aceite de oliva refinado; los polifenoles (oleocantal, hidroxitirosol) se pierden en el refinado. (4) Para reducción de LDL no farmacológica, la combinación de fibra soluble (10 g/día) + fitosteroles (2 g/día) + nueces (30 g/día) + dieta baja en grasas saturadas puede lograr ↓ LDL ~25-30%. (5) La suplementación de vitamina K2 (MK-7, 180-200 μg/día) puede retrasar la progresión de calcificación vascular y mejorar la rigidez arterial; precaución en pacientes con warfarina. | Clinical notes: (1) After REDUCE-IT, the FDA approved icosapent ethyl (Vascepa) 4 g/day as an adjunct to statins in patients with TG ≥150 mg/dL and elevated CV risk. Note this benefit is specific to pure EPA, not generic omega-3 supplements (EPA+DHA). (2) The nitrate-nitrite-NO pathway explains why antibacterial mouthwashes abolish the antihypertensive effect of dietary nitrates; consider discontinuing mouthwashes in hypertensive patients consuming nitrate-rich diets. (3) Extra virgin olive oil (EVOO) is not interchangeable with refined olive oil; polyphenols (oleocanthal, hydroxytyrosol) are lost in refining. (4) For non-pharmacological LDL reduction, the combination of soluble fiber (10 g/day) + phytosterols (2 g/day) + nuts (30 g/day) + low saturated fat diet can achieve ↓ LDL ~25-30%. (5) Vitamin K2 supplementation (MK-7, 180-200 μg/day) may slow vascular calcification progression and improve arterial stiffness; caution in patients on warfarin.'
    },

    4: {
      level: 4,
      summary: 'Los mecanismos moleculares de la nutrición cardiosaludable involucran la señalización NF-κB/Nrf2 (modulada por polifenoles y omega-3), la regulación epigenética de VCAM-1/ICAM-1 por componentes dietéticos, la interacción microbioma-TMAO-aterosclerosis, la paradoja francesa (resveratrol y SIRT1), y la regulación de la expresión de genes del metabolismo lipídico (PCSK9, LDLR) por nutrientes específicos. | Molecular mechanisms of heart-healthy nutrition involve NF-κB/Nrf2 signaling (modulated by polyphenols and omega-3), epigenetic regulation of VCAM-1/ICAM-1 by dietary components, the microbiome-TMAO-atherosclerosis interaction, the French paradox (resveratrol and SIRT1), and regulation of lipid metabolism gene expression (PCSK9, LDLR) by specific nutrients.',
      explanation: `## Explicación

### Mecanismos Moleculares de la Cardioprotección Nutricional

#### Señalización NF-κB y Nrf2

**NF-κB (Factor Nuclear Kappa B):**
- Regulador maestro de genes proinflamatorios en la pared vascular
- En aterosclerosis: LDL oxidada, ROS, TNF-α → activación de NF-κB → ↑ VCAM-1, ICAM-1, MCP-1, citoquinas proinflamatorias
- El endotelio activado recluta monocitos → formación de células espumosas → progresión de placa

**Modulación nutricional de NF-κB:**
- **Omega-3 (EPA/DHA):** Activan GPR120/FFAR4 → reclutan β-arrestina 2 → inhiben TAK1 → ↓ activación de NF-κB
- **Curcumina:** Inhibe directamente la fosforilación de IKKβ → ↓ degradación de IκB → ↓ NF-κB nuclear
- **Resveratrol:** Activa SIRT1 (desacetilasa) → desacetila subunidad p65 de NF-κB → ↓ su actividad transcripcional
- **Oleocantal (AOVE):** Inhibe COX-1 y COX-2 (mecanismo similar a ibuprofeno) + inhibe NF-κB

**Nrf2 (Nuclear factor erythroid 2-related factor 2):**
- Factor de transcripción que activa genes antioxidantes y citoprotectores
- En condiciones basales: Nrf2 está secuestrado por Keap1 → ubiquitinación → degradación proteasomal
- Activación: Estrés oxidativo o compuestos dietéticos modifican cisteínas de Keap1 → liberan Nrf2 → translocación nuclear → ↑ transcripción de HO-1, NQO1, glutatión reductasa, SOD

**Activadores dietéticos de Nrf2:**
- **Sulforafano (brócoli, col, coliflor):** Activador más potente conocido; ↑ enzimas de fase II
- **Curcumina:** Activación de Nrf2 + inhibición de NF-κB → doble efecto antiinflamatorio-antioxidante
- **EGCG (té verde):** Activación de Nrf2 vía PI3K/Akt
- **Ácido elágico (granada, fresas):** Activación de Nrf2; ↓ oxidación de LDL

#### TMAO: Microbioma y Aterosclerosis

**Ruta metabólica del TMAO:**
1. Colina, fosfatidilcolina, L-carnitina (de carne roja, huevos, lácteos) → metabolizadas por bacterias intestinales
2. Bacterias producen trimetilamina (TMA) vía TMA liasa
3. TMA se absorbe → oxidada a TMAO en hígado por FMO3 (flavina monooxigenasa 3)

**Mecanismos proaterogénicos del TMAO:**
- ↑ Expresión de receptores scavenger (CD36, SR-A1) en macrófagos → ↑ captación de LDL oxidada → ↑ formación de células espumosas
- ↑ Activación plaquetaria y trombosis
- ↓ Transporte reverso de colesterol (inhibe expresión de transportadores ABCA1/ABCG1)
- ↑ Expresión de VCAM-1 en endotelio → ↑ reclutamiento de monocitos

**Modulación nutricional del TMAO:**
- ↓ Carne roja → ↓ sustrato para TMA liasa → ↓ TMAO
- Dieta vegetal/mediterránea → ↓ abundancia de bacterias productoras de TMA
- DMB (3,3-dimetil-1-butanol, en AOVE y vinagre de vino tinto): Inhibe TMA liasa bacteriana → ↓ TMAO
- Resveratrol: Modula microbioma → ↓ bacterias productoras de TMA

**Controversia del TMAO:**
- Los niveles de TMAO predicen eventos CV independientemente de factores de riesgo tradicionales
- Sin embargo: El pescado (alto en TMAO) es cardioprotector → sugiere que el contexto alimentario importa más que un metabolito aislado
- TMA/TMAO puede ser un biomarcador más que un mediador causal directo

#### Nutrigenómica Cardiovascular

**PCSK9 y regulación por dieta:**
- PCSK9 marca el receptor de LDL (LDLR) para degradación → ↑ PCSK9 = ↓ LDLR = ↑ LDL sérica
- Grasas saturadas → ↑ PCSK9 hepática (vía SREBP-2) → ↓ LDLR → ↑ LDL
- Ácido oleico (AOVE) → efecto neutro sobre PCSK9
- Berberina (suplemento): ↓ PCSK9 → ↑ LDLR → ↓ LDL (mecanismo similar a inhibidores de PCSK9 farmacológicos pero más débil)

**ApoE y respuesta a dieta:**
- ApoE4 (15-20% de la población): Mayor respuesta de LDL a colesterol y grasas saturadas dietéticas
- Los portadores de ApoE4 se benefician más de restricción de grasas saturadas
- ApoE2: Menor respuesta a grasa dietética pero ↑ riesgo de hiperlipoproteinemia tipo III

**FADS1/FADS2 y metabolismo de ácidos grasos:**
- Polimorfismos afectan la desaturación de ácidos grasos esenciales a LC-PUFA
- Variantes de baja actividad → mayor dependencia de EPA/DHA preformado (pescado) vs. conversión de ALA (linaza)
- Implicación: La recomendación universal de "omega-3 de fuentes vegetales" puede ser insuficiente para ciertos genotipos

#### Paradoja Francesa y SIRT1

**La paradoja francesa:**
- Baja mortalidad CV en Francia a pesar de alta ingesta de grasas saturadas (queso, mantequilla)
- Posibles explicaciones: Consumo moderado de vino tinto, patrón alimentario mediterráneo, porciones más pequeñas, mayor consumo de frutas/verduras

**SIRT1 (Sirtuina 1) y resveratrol:**
- SIRT1: Desacetilasa NAD⁺-dependiente con efectos cardioprotectores
- Efectos de SIRT1: ↓ NF-κB, ↑ eNOS (↑ NO), ↓ apoptosis de cardiomiocitos, ↑ biogénesis mitocondrial
- Resveratrol activa SIRT1 → pero las concentraciones necesarias in vitro (~μM) son difícilmente alcanzables con vino (~0.1-1 μM sérica)
- Realidad: Los beneficios CV del vino tinto probablemente son multifactoriales (patrón dietético, estilo de vida) más que atribuibles solo al resveratrol

---
## Explanation

### Molecular Mechanisms of Nutritional Cardioprotection

#### NF-κB and Nrf2 Signaling

**NF-κB (Nuclear Factor Kappa B):**
- Master regulator of pro-inflammatory genes in the vascular wall
- In atherosclerosis: Oxidized LDL, ROS, TNF-α → NF-κB activation → ↑ VCAM-1, ICAM-1, MCP-1, pro-inflammatory cytokines
- Activated endothelium recruits monocytes → foam cell formation → plaque progression

**Nutritional modulation of NF-κB:**
- **Omega-3 (EPA/DHA):** Activate GPR120/FFAR4 → recruit β-arrestin 2 → inhibit TAK1 → ↓ NF-κB activation
- **Curcumin:** Directly inhibits IKKβ phosphorylation → ↓ IκB degradation → ↓ nuclear NF-κB
- **Resveratrol:** Activates SIRT1 (deacetylase) → deacetylates p65 subunit of NF-κB → ↓ its transcriptional activity
- **Oleocanthal (EVOO):** Inhibits COX-1 and COX-2 (mechanism similar to ibuprofen) + inhibits NF-κB

**Nrf2 (Nuclear factor erythroid 2-related factor 2):**
- Transcription factor activating antioxidant and cytoprotective genes
- Under basal conditions: Nrf2 is sequestered by Keap1 → ubiquitination → proteasomal degradation
- Activation: Oxidative stress or dietary compounds modify Keap1 cysteines → release Nrf2 → nuclear translocation → ↑ transcription of HO-1, NQO1, glutathione reductase, SOD

**Dietary activators of Nrf2:**
- **Sulforaphane (broccoli, cabbage, cauliflower):** Most potent known activator; ↑ phase II enzymes
- **Curcumin:** Nrf2 activation + NF-κB inhibition → dual anti-inflammatory-antioxidant effect
- **EGCG (green tea):** Nrf2 activation via PI3K/Akt
- **Ellagic acid (pomegranate, strawberries):** Nrf2 activation; ↓ LDL oxidation

#### TMAO: Microbiome and Atherosclerosis

**TMAO metabolic pathway:**
1. Choline, phosphatidylcholine, L-carnitine (from red meat, eggs, dairy) → metabolized by gut bacteria
2. Bacteria produce trimethylamine (TMA) via TMA lyase
3. TMA is absorbed → oxidized to TMAO in liver by FMO3 (flavin monooxygenase 3)

**Pro-atherogenic mechanisms of TMAO:**
- ↑ Scavenger receptor expression (CD36, SR-A1) in macrophages → ↑ oxidized LDL uptake → ↑ foam cell formation
- ↑ Platelet activation and thrombosis
- ↓ Reverse cholesterol transport (inhibits ABCA1/ABCG1 transporter expression)
- ↑ VCAM-1 expression on endothelium → ↑ monocyte recruitment

**Nutritional modulation of TMAO:**
- ↓ Red meat → ↓ substrate for TMA lyase → ↓ TMAO
- Plant/Mediterranean diet → ↓ abundance of TMA-producing bacteria
- DMB (3,3-dimethyl-1-butanol, in EVOO and red wine vinegar): Inhibits bacterial TMA lyase → ↓ TMAO
- Resveratrol: Modulates microbiome → ↓ TMA-producing bacteria

**TMAO controversy:**
- TMAO levels predict CV events independently of traditional risk factors
- However: Fish (high in TMAO) is cardioprotective → suggests dietary context matters more than an isolated metabolite
- TMA/TMAO may be a biomarker rather than a direct causal mediator

#### Cardiovascular Nutrigenomics

**PCSK9 and diet regulation:**
- PCSK9 marks LDL receptor (LDLR) for degradation → ↑ PCSK9 = ↓ LDLR = ↑ serum LDL
- Saturated fats → ↑ hepatic PCSK9 (via SREBP-2) → ↓ LDLR → ↑ LDL
- Oleic acid (EVOO) → neutral effect on PCSK9
- Berberine (supplement): ↓ PCSK9 → ↑ LDLR → ↓ LDL (mechanism similar to but weaker than pharmacological PCSK9 inhibitors)

**ApoE and diet response:**
- ApoE4 (15-20% of population): Greater LDL response to dietary cholesterol and saturated fats
- ApoE4 carriers benefit more from saturated fat restriction
- ApoE2: Lower response to dietary fat but ↑ risk of type III hyperlipoproteinemia

**FADS1/FADS2 and fatty acid metabolism:**
- Polymorphisms affect essential fatty acid desaturation to LC-PUFA
- Low-activity variants → greater dependence on preformed EPA/DHA (fish) vs. ALA conversion (flaxseed)
- Implication: Universal recommendation of "plant-source omega-3" may be insufficient for certain genotypes

#### French Paradox and SIRT1

**The French paradox:**
- Low CV mortality in France despite high saturated fat intake (cheese, butter)
- Possible explanations: Moderate red wine consumption, Mediterranean eating pattern, smaller portions, higher fruit/vegetable consumption

**SIRT1 (Sirtuin 1) and resveratrol:**
- SIRT1: NAD⁺-dependent deacetylase with cardioprotective effects
- SIRT1 effects: ↓ NF-κB, ↑ eNOS (↑ NO), ↓ cardiomyocyte apoptosis, ↑ mitochondrial biogenesis
- Resveratrol activates SIRT1 → but concentrations needed in vitro (~μM) are difficult to achieve with wine (~0.1-1 μM serum)
- Reality: CV benefits of red wine are probably multifactorial (dietary pattern, lifestyle) rather than attributable to resveratrol alone`,
      keyTerms: [
        { term: 'NF-κB (Factor Nuclear Kappa B / Nuclear Factor Kappa B)', definition: 'Factor de transcripción proinflamatorio maestro en aterosclerosis; activado por LDL oxidada y ROS; inhibido por omega-3 (vía GPR120), curcumina, resveratrol (vía SIRT1). | Master pro-inflammatory transcription factor in atherosclerosis; activated by oxidized LDL and ROS; inhibited by omega-3 (via GPR120), curcumin, resveratrol (via SIRT1).' },
        { term: 'Nrf2 (factor eritroide nuclear 2)', definition: 'Factor de transcripción antioxidante que activa genes citoprotectores (HO-1, SOD, glutatión); activado dietéticamente por sulforafano (brócoli), curcumina y EGCG. | Antioxidant transcription factor activating cytoprotective genes (HO-1, SOD, glutathione); dietetically activated by sulforaphane (broccoli), curcumin, and EGCG.' },
        { term: 'TMAO (trimetilamina-N-óxido / trimethylamine N-oxide)', definition: 'Metabolito proaterogénico producido por microbiota intestinal a partir de carnitina/colina de carne roja; ↑ captación de LDL oxidada por macrófagos y ↑ trombosis. | Pro-atherogenic metabolite produced by gut microbiota from carnitine/choline in red meat; ↑ oxidized LDL uptake by macrophages and ↑ thrombosis.' },
        { term: 'PCSK9', definition: 'Proteasa que degrada receptores de LDL hepáticos → ↑ LDL sérica; su expresión es estimulada por grasas saturadas (vía SREBP-2) e inhibida por berberina. | Protease that degrades hepatic LDL receptors → ↑ serum LDL; its expression is stimulated by saturated fats (via SREBP-2) and inhibited by berberine.' },
        { term: 'SIRT1 (Sirtuina 1 / Sirtuin 1)', definition: 'Desacetilasa NAD⁺-dependiente con efectos cardioprotectores: ↓ NF-κB, ↑ eNOS, ↑ biogénesis mitocondrial; activada por resveratrol y restricción calórica. | NAD⁺-dependent deacetylase with cardioprotective effects: ↓ NF-κB, ↑ eNOS, ↑ mitochondrial biogenesis; activated by resveratrol and caloric restriction.' },
        { term: 'GPR120/FFAR4', definition: 'Receptor de membrana para ácidos grasos de cadena larga (EPA/DHA); su activación en macrófagos recluta β-arrestina 2 → inhibición de NF-κB → efecto antiinflamatorio. | Membrane receptor for long-chain fatty acids (EPA/DHA); its activation in macrophages recruits β-arrestin 2 → NF-κB inhibition → anti-inflammatory effect.' }
      ],
      clinicalNotes: 'Aplicaciones clínicas avanzadas: (1) La regulación dietética de PCSK9 explica parcialmente por qué las grasas saturadas elevan LDL: ↑ PCSK9 → ↓ LDLR → ↓ aclaramiento de LDL. En pacientes que ya toman inhibidores de PCSK9 (evolocumab, alirocumab), la respuesta de LDL a grasas saturadas dietéticas es menor. (2) La genotipificación de ApoE puede personalizar la intensidad de restricción de grasas saturadas: ApoE4 → restricción más estricta; ApoE2 → menos beneficio de restricción de grasas pero más de restricción calórica. (3) El TMAO sérico es un biomarcador emergente de riesgo CV; niveles >6.2 μmol/L se asocian con ↑ riesgo de MACE. La intervención principal es reducir carne roja a <2 porciones/semana. (4) El sulforafano (de brócoli germinado) está en ensayos fase II para reducción de inflamación vascular y mejorar función endotelial vía activación de Nrf2; dosis: ~100-150 μmol/día. (5) En pacientes con hipertrigliceridemia residual (TG >150) a pesar de estatinas, icosapent etil 4 g/día (EPA puro) tiene evidencia de nivel A para reducción de eventos CV (REDUCE-IT); los suplementos genéricos de omega-3 no han mostrado el mismo beneficio. | Advanced clinical applications: (1) Dietary regulation of PCSK9 partially explains why saturated fats raise LDL: ↑ PCSK9 → ↓ LDLR → ↓ LDL clearance. In patients already on PCSK9 inhibitors (evolocumab, alirocumab), LDL response to dietary saturated fats is lower. (2) ApoE genotyping can personalize saturated fat restriction intensity: ApoE4 → stricter restriction; ApoE2 → less benefit from fat restriction but more from caloric restriction. (3) Serum TMAO is an emerging CV risk biomarker; levels >6.2 μmol/L are associated with ↑ MACE risk. The main intervention is reducing red meat to <2 servings/week. (4) Sulforaphane (from broccoli sprouts) is in phase II trials for vascular inflammation reduction and endothelial function improvement via Nrf2 activation; dose: ~100-150 μmol/day. (5) In patients with residual hypertriglyceridemia (TG >150) despite statins, icosapent ethyl 4 g/day (pure EPA) has level A evidence for CV event reduction (REDUCE-IT); generic omega-3 supplements have not shown the same benefit.'
    },

    5: {
      level: 5,
      summary: 'La investigación contemporánea en nutrición cardiovascular integra cardiometabolómica (metabolitos lipidómicos, oxilipinas, ceramidas como predictores de riesgo CV), intervencionismo con microbioma (trasplante fecal, postbióticos dirigidos), cronobiología vascular (ritmo circadiano de la susceptibilidad a infarto), y ensayos de nutrición de precisión basados en genómica y metabolómica para optimizar patrones dietéticos individualizados. Los estudios CORDIOPREV, PREDIMED-Plus y PURE informan la evolución de las guías ACC/AHA 2024-2025. | Contemporary cardiovascular nutrition research integrates cardiometabolomics (lipidomic metabolites, oxylipins, ceramides as CV risk predictors), microbiome interventionism (fecal transplant, targeted postbiotics), vascular chronobiology (circadian rhythm of MI susceptibility), and precision nutrition trials based on genomics and metabolomics to optimize individualized dietary patterns. CORDIOPREV, PREDIMED-Plus, and PURE studies inform the evolution of ACC/AHA 2024-2025 guidelines.',
      explanation: `## Explicación

### Fronteras en Nutrición Cardiovascular

#### Cardiometabolómica: Más Allá del Perfil Lipídico Tradicional

**Ceramidas plasmáticas como predictores de riesgo CV:**
- Las ceramidas son esfingolípidos con actividad proaterogénica
- Panel de ceramidas (Cer16:0, Cer18:0, Cer24:1) predice eventos CV mejor que LDL-C en algunos estudios
- Las grasas saturadas dietéticas → ↑ ceramidas plasmáticas → ↑ riesgo CV
- La dieta mediterránea → ↓ ceramidas plasmáticas (mecanismo: ↓ síntesis de novo de ceramidas hepáticas vía ↓ ácido palmítico)
- Mayo Clinic Ceramide Risk Score: Ya en uso clínico para estratificación de riesgo residual

**Oxilipinas y resolución de la inflamación:**
- Las oxilipinas son metabolitos oxidados de ácidos grasos (PGs, LTs, EETs, HETEs, resolvinas, protectinas)
- El perfil de oxilipinas refleja el balance entre inflamación activa y resolución
- Ratio resolvinas/leucotrienos: Bajo en pacientes con placas vulnerables
- Implicación nutricional: La suplementación con EPA/DHA desplaza el perfil de oxilipinas hacia mediadores pro-resolución

**Lipidómica de partículas de LDL:**
- No todas las partículas de LDL son iguales:
  - sdLDL (small dense LDL): Más aterogénicas, más susceptibles a oxidación, penetran más fácilmente el endotelio
  - lbLDL (large buoyant LDL): Menos aterogénicas
- Dietas altas en carbohidratos refinados → ↑ sdLDL (vía ↑ TG → ↑ CETP → LDL más pequeñas)
- Dietas bajas en carbohidratos → ↑ lbLDL (↓ riesgo a pesar de posible ↑ LDL-C total)
- Implicación: El LDL-C total puede ser insuficiente; ApoB y partículas de LDL son mejores predictores

#### Microbioma Cardiovascular: Nuevas Intervenciones

**Más allá del TMAO:**
- Ácidos biliares secundarios producidos por microbiota → señalización vía receptor farnesoide X (FXR) y TGR5:
  - FXR: Regula metabolismo de lípidos y glucosa; agonistas de FXR (ácido obeticólico) mejoran esteatosis hepática
  - TGR5: ↑ GLP-1, ↑ gasto energético
- Fenilacetilglutamina (PAGln): Metabolito microbiano de fenilalanina → ↑ reactividad plaquetaria → riesgo trombótico
- p-cresol sulfato: Metabolito microbiano → daño endotelial, progresión de aterosclerosis

**Intervenciones dirigidas al microbioma para salud CV:**
- **Prebióticos cardioprotectores:** Inulina + FOS → ↑ Bifidobacterium, ↑ SCFA, ↓ TMAO
- **Probióticos específicos:** Lactobacillus reuteri NCIMB 30242 → ↓ LDL ~12%, ↓ colesterol total ~9% (mecanismo: desconjugación de ácidos biliares → ↑ excreción de colesterol)
- **Postbióticos:** Metabolitos microbianos purificados (ej: butirato de sodio) como intervención directa; ensayos fase II en curso
- **Trasplante de microbiota fecal (TMF):** Datos preliminares en humanos: TMF de donante delgado a obeso → mejora transitoria de sensibilidad a insulina (pero no de peso); la composición de la dieta del receptor determina si los cambios persisten

#### Cronobiología Vascular y Nutrición

**Ritmo circadiano cardiovascular:**
- Incidencia de infarto: Pico entre 6 AM-12 PM (correlaciona con ↑ cortisol, ↑ agregación plaquetaria, ↑ PA matutina)
- Las proteínas del reloj circadiano (BMAL1, CLOCK, PER, CRY) regulan:
  - Tono vascular (↑ PA matutina)
  - Coagulación (↑ PAI-1 matutino → ↓ fibrinólisis)
  - Metabolismo lipídico (síntesis de colesterol pico nocturno → razón de dosis nocturna de estatinas)
  - Función endotelial (oscilaciones diarias de NO)

**Crononutrición cardiovascular:**
- Comer tarde (>21:00) → ↑ LDL, ↑ triglicéridos postprandiales, ↑ resistencia a insulina
- Desayuno copioso + cena ligera → mejor perfil lipídico que patrón inverso
- Alimentación con tiempo restringido temprano (TRE, 8-10 h ventana terminando a las 18:00):
  - ↓ PA ~5-7 mmHg (equivalente a un antihipertensivo)
  - ↓ Colesterol total, ↓ TG
  - ↓ Marcadores inflamatorios (PCR, IL-6)
- Mecanismo: Alineación con oscilaciones circadianas de enzimas metabólicas → optimización de metabolismo lipídico y glucídico

#### Ensayos Clínicos Recientes y Evolución de Guías

**CORDIOPREV (Coronary Diet Intervention with Olive Oil and Cardiovascular Prevention):**
- n = 1,002 pacientes con enfermedad coronaria establecida
- Dieta mediterránea (rica en AOVE) vs. dieta baja en grasas (prevención secundaria)
- Resultado: Dieta mediterránea → ↓ 28% eventos CV mayores vs. dieta baja en grasas
- Implicación: Primer ensayo de prevención SECUNDARIA que demuestra superioridad de la dieta mediterránea sobre la dieta baja en grasas tradicional

**PREDIMED-Plus:**
- Dieta mediterránea + restricción calórica (-30%) + actividad física vs. dieta mediterránea sola
- Resultados intermedios: Mayor pérdida de peso, mayor reducción de PA y HbA1c en el grupo intensivo
- Seguimiento a largo plazo en curso para eventos CV duros

**Estudio PURE (Prospective Urban Rural Epidemiology):**
- n > 135,000, 18 países, seguimiento >10 años
- Hallazgos controversiales:
  - ↑ Ingesta de carbohidratos (>60% de energía) → ↑ mortalidad total
  - ↑ Ingesta de grasas totales (incluyendo saturadas) → ↓ mortalidad total (hasta cierto punto)
  - ↑ Frutas, verduras, legumbres → ↓ mortalidad (beneficio máximo con 3-4 porciones/día)
- Interpretación: Cuestiona la demonización de las grasas; sugiere que el exceso de carbohidratos refinados es más dañino que la grasa en muchas poblaciones
- Limitación: Estudio observacional, no puede establecer causalidad; posibles confusores socioeconómicos

**Guías ACC/AHA 2024-2025 sobre nutrición CV:**
1. Dieta mediterránea: Nivel de evidencia A para prevención primaria y secundaria
2. Dieta DASH: Nivel de evidencia A para manejo de hipertensión
3. Reducción de grasas saturadas → sustitución por MUFA/PUFA: Evidencia A
4. Eliminación de grasas trans industriales: Evidencia A
5. Sodio <2300 mg/día: Evidencia A; <1500 mg para hipertensos: Evidencia B
6. Omega-3 (EPA puro 4 g/día): Evidencia A para hipertrigliceridemia con riesgo CV elevado
7. Suplementos de omega-3 genéricos (dosis estándar): Evidencia insuficiente para recomendación general
8. Consumo de alcohol: No se recomienda iniciar consumo por salud CV (cambio respecto a guías anteriores)

---
## Explanation

### Frontiers in Cardiovascular Nutrition

#### Cardiometabolomics: Beyond the Traditional Lipid Panel

**Plasma ceramides as CV risk predictors:**
- Ceramides are sphingolipids with pro-atherogenic activity
- Ceramide panel (Cer16:0, Cer18:0, Cer24:1) predicts CV events better than LDL-C in some studies
- Dietary saturated fats → ↑ plasma ceramides → ↑ CV risk
- Mediterranean diet → ↓ plasma ceramides (mechanism: ↓ de novo hepatic ceramide synthesis via ↓ palmitic acid)
- Mayo Clinic Ceramide Risk Score: Already in clinical use for residual risk stratification

**Oxylipins and inflammation resolution:**
- Oxylipins are oxidized metabolites of fatty acids (PGs, LTs, EETs, HETEs, resolvins, protectins)
- Oxylipin profile reflects the balance between active inflammation and resolution
- Resolvin/leukotriene ratio: Low in patients with vulnerable plaques
- Nutritional implication: EPA/DHA supplementation shifts oxylipin profile toward pro-resolution mediators

**LDL particle lipidomics:**
- Not all LDL particles are equal:
  - sdLDL (small dense LDL): More atherogenic, more susceptible to oxidation, penetrate endothelium more easily
  - lbLDL (large buoyant LDL): Less atherogenic
- High refined carbohydrate diets → ↑ sdLDL (via ↑ TG → ↑ CETP → smaller LDL)
- Low-carbohydrate diets → ↑ lbLDL (↓ risk despite possible ↑ total LDL-C)
- Implication: Total LDL-C may be insufficient; ApoB and LDL particle count are better predictors

#### Cardiovascular Microbiome: New Interventions

**Beyond TMAO:**
- Secondary bile acids produced by microbiota → signaling via farnesoid X receptor (FXR) and TGR5:
  - FXR: Regulates lipid and glucose metabolism; FXR agonists (obeticholic acid) improve hepatic steatosis
  - TGR5: ↑ GLP-1, ↑ energy expenditure
- Phenylacetylglutamine (PAGln): Microbial metabolite of phenylalanine → ↑ platelet reactivity → thrombotic risk
- p-cresol sulfate: Microbial metabolite → endothelial damage, atherosclerosis progression

**Microbiome-targeted interventions for CV health:**
- **Cardioprotective prebiotics:** Inulin + FOS → ↑ Bifidobacterium, ↑ SCFA, ↓ TMAO
- **Specific probiotics:** Lactobacillus reuteri NCIMB 30242 → ↓ LDL ~12%, ↓ total cholesterol ~9% (mechanism: bile acid deconjugation → ↑ cholesterol excretion)
- **Postbiotics:** Purified microbial metabolites (e.g., sodium butyrate) as direct intervention; phase II trials ongoing
- **Fecal microbiota transplant (FMT):** Preliminary human data: FMT from lean to obese donor → transient improvement in insulin sensitivity (but not weight); recipient's diet composition determines if changes persist

#### Vascular Chronobiology and Nutrition

**Cardiovascular circadian rhythm:**
- MI incidence: Peak between 6 AM-12 PM (correlates with ↑ cortisol, ↑ platelet aggregation, ↑ morning BP)
- Circadian clock proteins (BMAL1, CLOCK, PER, CRY) regulate:
  - Vascular tone (↑ morning BP)
  - Coagulation (↑ morning PAI-1 → ↓ fibrinolysis)
  - Lipid metabolism (cholesterol synthesis peak at night → reason for nighttime statin dosing)
  - Endothelial function (daily NO oscillations)

**Cardiovascular chrononutrition:**
- Late eating (>9 PM) → ↑ LDL, ↑ postprandial triglycerides, ↑ insulin resistance
- Large breakfast + light dinner → better lipid profile than inverse pattern
- Early time-restricted eating (TRE, 8-10 h window ending at 6 PM):
  - ↓ BP ~5-7 mmHg (equivalent to one antihypertensive)
  - ↓ Total cholesterol, ↓ TG
  - ↓ Inflammatory markers (CRP, IL-6)
- Mechanism: Alignment with circadian oscillations of metabolic enzymes → lipid and glucose metabolism optimization

#### Recent Clinical Trials and Guideline Evolution

**CORDIOPREV:**
- n = 1,002 patients with established coronary disease
- Mediterranean diet (EVOO-rich) vs. low-fat diet (secondary prevention)
- Result: Mediterranean diet → ↓ 28% major CV events vs. low-fat diet
- Implication: First SECONDARY prevention trial demonstrating Mediterranean diet superiority over traditional low-fat diet

**PREDIMED-Plus:**
- Mediterranean diet + caloric restriction (-30%) + physical activity vs. Mediterranean diet alone
- Intermediate results: Greater weight loss, greater BP and HbA1c reduction in intensive group
- Long-term follow-up for hard CV endpoints ongoing

**PURE Study (Prospective Urban Rural Epidemiology):**
- n > 135,000, 18 countries, >10-year follow-up
- Controversial findings:
  - ↑ Carbohydrate intake (>60% of energy) → ↑ total mortality
  - ↑ Total fat intake (including saturated) → ↓ total mortality (up to a point)
  - ↑ Fruits, vegetables, legumes → ↓ mortality (maximum benefit with 3-4 servings/day)
- Interpretation: Questions fat demonization; suggests excess refined carbohydrates is more harmful than fat in many populations
- Limitation: Observational study, cannot establish causality; possible socioeconomic confounders

**ACC/AHA 2024-2025 Guidelines on CV nutrition:**
1. Mediterranean diet: Evidence level A for primary and secondary prevention
2. DASH diet: Evidence level A for hypertension management
3. Saturated fat reduction → substitution with MUFA/PUFA: Evidence A
4. Industrial trans fat elimination: Evidence A
5. Sodium <2300 mg/day: Evidence A; <1500 mg for hypertensives: Evidence B
6. Omega-3 (pure EPA 4 g/day): Evidence A for hypertriglyceridemia with elevated CV risk
7. Generic omega-3 supplements (standard dose): Insufficient evidence for general recommendation
8. Alcohol consumption: Not recommended to initiate for CV health (change from previous guidelines)`,
      keyTerms: [
        { term: 'ceramidas plasmáticas / plasma ceramides', definition: 'Esfingolípidos proaterogénicos cuyo panel (Cer16:0, Cer18:0, Cer24:1) predice eventos CV; reducidos por dieta mediterránea y elevados por grasas saturadas; Mayo Clinic Ceramide Risk Score ya en uso clínico. | Pro-atherogenic sphingolipids whose panel (Cer16:0, Cer18:0, Cer24:1) predicts CV events; reduced by Mediterranean diet and elevated by saturated fats; Mayo Clinic Ceramide Risk Score already in clinical use.' },
        { term: 'oxilipinas / oxylipins', definition: 'Metabolitos oxidados de ácidos grasos (prostaglandinas, leucotrienos, resolvinas) cuyo perfil refleja el balance inflamación/resolución; EPA/DHA desplazan el perfil hacia mediadores pro-resolución. | Oxidized fatty acid metabolites (prostaglandins, leukotrienes, resolvins) whose profile reflects the inflammation/resolution balance; EPA/DHA shift the profile toward pro-resolution mediators.' },
        { term: 'sdLDL (LDL pequeña y densa / small dense LDL)', definition: 'Subtipo de LDL más aterogénico, más susceptible a oxidación y que penetra más fácilmente el endotelio; aumentado por dietas altas en carbohidratos refinados, ↑ TG. | More atherogenic LDL subtype, more susceptible to oxidation and more easily penetrating the endothelium; increased by high refined carbohydrate diets, ↑ TG.' },
        { term: 'CORDIOPREV (ensayo / trial)', definition: 'Primer ensayo de prevención secundaria que demostró que la dieta mediterránea (rica en AOVE) es superior a la dieta baja en grasas tradicional (↓28% eventos CV mayores) en pacientes con enfermedad coronaria establecida. | First secondary prevention trial demonstrating that Mediterranean diet (EVOO-rich) is superior to traditional low-fat diet (↓28% major CV events) in patients with established coronary disease.' },
        { term: 'crononutrición vascular / vascular chrononutrition', definition: 'Campo que estudia cómo el momento de la ingesta afecta el riesgo CV; comer temprano y restringir ventana alimentaria mejora perfil lipídico, PA y marcadores inflamatorios alineándose con el reloj circadiano. | Field studying how meal timing affects CV risk; early eating and restricting feeding window improves lipid profile, BP, and inflammatory markers by aligning with the circadian clock.' },
        { term: 'fenilacetilglutamina (PAGln) / phenylacetylglutamine', definition: 'Metabolito microbiano emergente de fenilalanina que aumenta la reactividad plaquetaria y el riesgo trombótico; nuevo biomarcador de riesgo CV mediado por microbioma más allá del TMAO. | Emerging microbial metabolite of phenylalanine that increases platelet reactivity and thrombotic risk; new microbiome-mediated CV risk biomarker beyond TMAO.' }
      ],
      clinicalNotes: 'Implicaciones para la práctica clínica MD: (1) CORDIOPREV establece la dieta mediterránea como intervención de prevención SECUNDARIA superior a la dieta baja en grasas: en pacientes post-IAM o con enfermedad coronaria estable, recomendar patrón mediterráneo (AOVE ≥4 cdas/día, pescado ≥2x/sem, nueces ≥30 g/día) con evidencia de nivel A. (2) El Mayo Clinic Ceramide Risk Score puede reclasificar pacientes con riesgo CV "intermedio" basado en factores tradicionales; considerar medición de ceramidas en pacientes donde la decisión sobre estatinas es incierta. (3) El sdLDL y ApoB son mejores predictores de riesgo CV que LDL-C total; en pacientes con TG elevados y LDL-C "normal", medir ApoB o número de partículas de LDL (LDL-P) para no subestimar riesgo. (4) La crononutrición es una intervención subutilizada: instruir a pacientes CV a concentrar ingesta calórica en la primera mitad del día y mantener ventana alimentaria ≤12 h puede tener efecto equiparable a un antihipertensivo. (5) No recomendar inicio de consumo de alcohol para salud CV (guías ACC/AHA 2024): Los riesgos (cáncer, cirrosis, dependencia) superan cualquier posible beneficio. En bebedores actuales, limitar a ≤1 copa/día (mujeres), ≤2 copas/día (hombres). (6) La PAGln sérica es un biomarcador CV emergente más allá de TMAO; la reducción de proteína animal (especialmente carne roja) disminuye ambos. (7) Para pacientes en estatinas con TG residuales ≥150 mg/dL, icosapent etil 4 g/día tiene indicación FDA y evidencia de nivel A; no sustituir con suplementos genéricos de omega-3. | MD-level clinical practice implications: (1) CORDIOPREV establishes Mediterranean diet as SECONDARY prevention intervention superior to low-fat diet: in post-MI or stable coronary disease patients, recommend Mediterranean pattern (EVOO ≥4 tbsp/day, fish ≥2x/week, nuts ≥30 g/day) with level A evidence. (2) Mayo Clinic Ceramide Risk Score can reclassify patients with "intermediate" CV risk based on traditional factors; consider ceramide measurement in patients where statin decision is uncertain. (3) sdLDL and ApoB are better CV risk predictors than total LDL-C; in patients with elevated TG and "normal" LDL-C, measure ApoB or LDL particle number (LDL-P) to avoid underestimating risk. (4) Chrononutrition is an underutilized intervention: instructing CV patients to concentrate caloric intake in the first half of the day and maintain feeding window ≤12 h can have an effect comparable to one antihypertensive. (5) Do not recommend initiating alcohol consumption for CV health (ACC/AHA 2024 guidelines): Risks (cancer, cirrhosis, dependence) outweigh any possible benefit. In current drinkers, limit to ≤1 drink/day (women), ≤2 drinks/day (men). (6) Serum PAGln is an emerging CV biomarker beyond TMAO; reducing animal protein (especially red meat) decreases both. (7) For patients on statins with residual TG ≥150 mg/dL, icosapent ethyl 4 g/day has FDA indication and level A evidence; do not substitute with generic omega-3 supplements.'
    }
  },

  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts (PREDIMED)',
      authors: ['Estruch, R.', 'Ros, E.', 'Salas-Salvadó, J.'],
      source: 'New England Journal of Medicine, 378(25), e34, 2018',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (REDUCE-IT)',
      authors: ['Bhatt, D.L.', 'Steg, P.G.', 'Miller, M.'],
      source: 'New England Journal of Medicine, 380(1), 11-22, 2019',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Mediterranean Diet in Secondary Cardiovascular Prevention (CORDIOPREV)',
      authors: ['Delgado-Lista, J.', 'Alcala-Diaz, J.F.', 'Torres-Peña, J.D.'],
      source: 'The Lancet, 399(10338), 1876-1885, 2022',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Associations of fats and carbohydrate intake with cardiovascular disease and mortality (PURE)',
      authors: ['Dehghan, M.', 'Mente, A.', 'Zhang, X.'],
      source: 'The Lancet, 390(10107), 2050-2062, 2017',
      license: 'CC BY 4.0'
    }
  ],
  crossReferences: [
    { targetId: 'topic-macronutrientes', targetType: 'topic', relationship: 'related', label: 'Macronutrientes / Macronutrients' },
    { targetId: 'topic-micronutrientes', targetType: 'topic', relationship: 'related', label: 'Micronutrientes / Micronutrients' },
    { targetId: 'topic-nutricion-diabetes', targetType: 'topic', relationship: 'sibling', label: 'Nutrición para Diabéticos / Diabetic Nutrition' }
  ],
  tags: {
    systems: ['cardiovascular', 'endocrine', 'digestive'],
    topics: ['nutrition', 'cardiology', 'lipids', 'hypertension', 'prevention'],
    keywords: ['dieta mediterránea', 'DASH', 'omega-3', 'sodio', 'colesterol', 'LDL', 'HDL', 'aterosclerosis', 'PREDIMED', 'REDUCE-IT', 'TMAO', 'ceramidas', 'Mediterranean diet', 'sodium', 'cholesterol', 'atherosclerosis'],
    clinicalRelevance: 'high'
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
