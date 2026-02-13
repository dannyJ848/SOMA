/**
 * Macronutrientes / Macronutrients
 *
 * Contenido educativo bilingue (espanol primero) sobre los macronutrientes:
 * carbohidratos, proteinas y grasas, incluyendo tipos, funciones,
 * requerimientos, metabolismo y aplicaciones clinicas.
 *
 * Bilingual educational content (Spanish-first) on macronutrients:
 * carbohydrates, proteins, and fats, including types, functions,
 * requirements, metabolism, and clinical applications.
 */

import { EducationalContent } from '../types';

export const macronutrientesMacronutrients: EducationalContent = {
  id: 'nutrition-macronutrientes-macronutrients',
  type: 'topic',
  name: 'Macronutrients | Macronutrientes',
  nameEs: 'Macronutrientes',
  alternateNames: [
    'Carbohidratos, Proteinas y Grasas | Carbohydrates, Proteins, and Fats',
    'Macros',
    'Nutrientes energeticos | Energy Nutrients',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los macronutrientes son los nutrientes que tu cuerpo necesita en grandes cantidades para tener energia y funcionar bien: carbohidratos para energia rapida, proteinas para construir y reparar, y grasas para almacenar energia y proteger organos. | Macronutrients are the nutrients your body needs in large amounts for energy and function: carbohydrates for quick energy, proteins for building and repair, and fats for energy storage and organ protection.',
      explanation: `## Que Son los Macronutrientes | What Are Macronutrients

Tu cuerpo necesita tres tipos principales de nutrientes en grandes cantidades. Se llaman **macronutrientes** y te dan la energia para vivir, crecer y moverte.

Your body needs three main types of nutrients in large amounts. They are called **macronutrients** and they give you energy to live, grow, and move.

---

### 1. Carbohidratos (Carbs) - La Gasolina del Cuerpo | Carbohydrates - The Body's Fuel

- Te dan energia rapida para correr, pensar y jugar | Give you quick energy to run, think, and play
- Se encuentran en pan, arroz, frutas, verduras y frijoles | Found in bread, rice, fruits, vegetables, and beans
- Tu cerebro prefiere los carbohidratos como combustible | Your brain prefers carbohydrates as fuel
- **Ejemplos:** avena, manzanas, arroz, tortillas, papas | **Examples:** oatmeal, apples, rice, tortillas, potatoes

### 2. Proteinas - Los Ladrillos del Cuerpo | Proteins - The Body's Building Blocks

- Construyen y reparan tus musculos, piel y organos | Build and repair your muscles, skin, and organs
- Ayudan a hacer anticuerpos para combatir infecciones | Help make antibodies to fight infections
- Se encuentran en carne, huevos, frijoles, nueces y lacteos | Found in meat, eggs, beans, nuts, and dairy
- **Ejemplos:** pollo, huevos, lentejas, tofu, yogur | **Examples:** chicken, eggs, lentils, tofu, yogurt

### 3. Grasas - La Reserva de Energia | Fats - The Energy Reserve

- Guardan energia para cuando la necesites despues | Store energy for when you need it later
- Ayudan a tu cuerpo a usar las vitaminas | Help your body use vitamins
- Protegen tus organos y te mantienen caliente | Protect your organs and keep you warm
- **Ejemplos:** aceite de oliva, aguacate, nueces, queso | **Examples:** olive oil, avocado, nuts, cheese

---

### El Plato Saludable | The Healthy Plate

Imagina tu plato dividido asi: | Imagine your plate divided like this:
- **Mitad del plato:** frutas y verduras (carbohidratos buenos) | **Half the plate:** fruits and vegetables (good carbs)
- **Un cuarto:** proteinas (pollo, pescado, frijoles) | **One quarter:** proteins (chicken, fish, beans)
- **Un cuarto:** granos integrales (arroz integral, tortilla de maiz) | **One quarter:** whole grains (brown rice, corn tortilla)
- **Un poquito:** grasas saludables (aceite de oliva, aguacate) | **A little bit:** healthy fats (olive oil, avocado)

### Consejos Para Comer Mejor | Tips for Better Eating

**Escoge estos con frecuencia | Choose these often:**
- Granos integrales (arroz integral, pan integral) | Whole grains (brown rice, whole wheat bread)
- Proteinas magras (pollo, pescado, frijoles) | Lean proteins (chicken, fish, beans)
- Grasas buenas (nueces, aceite de oliva, aguacate) | Healthy fats (nuts, olive oil, avocado)

**Limita estos | Limit these:**
- Bebidas azucaradas y dulces | Sugary drinks and candy
- Comidas fritas | Fried foods
- Carnes procesadas (hot dogs, salchichas) | Processed meats (hot dogs, sausages)

Cada comida debe tener los tres macronutrientes para mantenerte con energia y saludable. | Each meal should have all three macronutrients to keep you energized and healthy.`,
      keyTerms: [
        { term: 'macronutrientes | macronutrients', definition: 'Nutrientes que tu cuerpo necesita en grandes cantidades: carbohidratos, proteinas y grasas | Nutrients your body needs in large amounts: carbohydrates, proteins, and fats' },
        { term: 'carbohidratos | carbohydrates', definition: 'Nutrientes que le dan energia rapida a tu cuerpo, se encuentran en granos, frutas y verduras | Nutrients that give your body quick energy, found in grains, fruits, and vegetables' },
        { term: 'proteinas | proteins', definition: 'Nutrientes que construyen y reparan los tejidos del cuerpo, se encuentran en carne, frijoles y lacteos | Nutrients that build and repair body tissues, found in meat, beans, and dairy' },
        { term: 'grasas | fats', definition: 'Nutrientes que almacenan energia y ayudan a tu cuerpo a usar las vitaminas | Nutrients that store energy and help your body use vitamins' },
      ],
      analogies: [
        'Los macronutrientes son como los tres materiales para construir una casa: los carbohidratos son la electricidad, las proteinas son los ladrillos, y las grasas son las baterias de reserva. | Macronutrients are like three materials for building a house: carbs are the electricity, proteins are the bricks, and fats are the backup batteries.',
        'Tu cuerpo usa los carbohidratos como un carro usa la gasolina - para energia rapida. | Your body uses carbs like a car uses gasoline - for quick energy.',
        'Las proteinas son como bloques de LEGO que construyen y reparan cosas en tu cuerpo. | Proteins are like LEGO blocks that build and repair things in your body.',
      ],
      examples: [
        'Un almuerzo balanceado: tortilla con frijoles (carbos + proteina), aguacate (grasa), y ensalada (carbos) | A balanced lunch: tortilla with beans (carbs + protein), avocado (fat), and salad (carbs)',
        'Desayuno con avena (carbos), leche (proteina) y nueces (grasa) | Breakfast with oatmeal (carbs), milk (protein), and nuts (fat)',
        'Despues de hacer deporte, tu cuerpo usa carbohidratos para recuperar energia y proteinas para reparar musculos | After sports, your body uses carbs to recover energy and proteins to repair muscles',
      ],
      patientCounselingPoints: [
        'Trate de incluir los tres macronutrientes en cada comida para tener energia constante | Try to include all three macronutrients at each meal for steady energy',
        'La mitad de su plato debe ser frutas y verduras | Half your plate should be fruits and vegetables',
        'Una porcion de proteina del tamano de la palma de su mano es suficiente | A palm-sized portion of protein is enough',
        'Incluya grasas saludables como nueces, aguacate o aceite de oliva cada dia | Include healthy fats like nuts, avocado, or olive oil daily',
        'Tome agua en lugar de jugos o refrescos azucarados | Drink water instead of juices or sugary sodas',
      ],
    },
    2: {
      level: 2,
      summary:
        'Los macronutrientes proporcionan energia y materiales de construccion para el cuerpo. Los carbohidratos aportan 4 kcal/g y son la fuente principal de energia; las proteinas aportan 4 kcal/g y apoyan el crecimiento y reparacion de tejidos; las grasas aportan 9 kcal/g y proporcionan energia concentrada y acidos grasos esenciales. | Macronutrients provide energy and building materials for the body. Carbohydrates supply 4 kcal/g as the primary energy source; proteins supply 4 kcal/g supporting tissue growth and repair; fats supply 9 kcal/g providing concentrated energy and essential fatty acids.',
      explanation: `## Entendiendo los Macronutrientes | Understanding Macronutrients

Los macronutrientes son los nutrientes que proporcionan calorias (energia) y se necesitan en grandes cantidades. Son fundamentales para el crecimiento, el metabolismo y las funciones del cuerpo. | Macronutrients are the nutrients that provide calories (energy) and are required in large amounts. They are fundamental to growth, metabolism, and body function.

### Carbohidratos (4 calorias por gramo) | Carbohydrates (4 calories per gram)

**Clasificacion | Classification:**

| Tipo | Descripcion | Ejemplos | Digestion |
|------|-------------|----------|-----------|
| Azucares simples | 1-2 unidades de azucar | Glucosa, fructosa, sacarosa | Rapida |
| Almidones complejos | Cadenas largas de azucar | Pan, pasta, papas, tortillas | Moderada |
| Fibra | Material vegetal indigerible | Verduras, granos integrales, legumbres | Minima |

**Funciones | Functions:**
- Fuente principal de energia para el cerebro y los musculos | Primary energy source for brain and muscles
- Evitan que las proteinas se usen como energia | Spare protein from being used for energy
- Esenciales para la salud intestinal (fibra) | Essential for intestinal health (fiber)

**Ingesta recomendada | Recommended Intake:** 45-65% de las calorias diarias totales | 45-65% of total daily calories

### Proteinas (4 calorias por gramo) | Proteins (4 calories per gram)

**Categorias de aminoacidos | Amino Acid Categories:**
- **Esenciales | Essential:** Deben venir de la dieta (9 aminoacidos) | Must come from diet (9 amino acids)
- **No esenciales | Non-essential:** El cuerpo los puede producir | Body can produce them
- **Condicionalmente esenciales | Conditionally essential:** Necesarios durante enfermedad o estres | Needed during illness or stress

**Fuentes de proteina | Protein Sources:**

| Fuente | Ejemplos | Proteina completa |
|--------|----------|-------------------|
| Animal | Carne, pollo, pescado, huevos, lacteos | Si |
| Vegetal | Soya, quinoa | Si |
| Vegetal | Frijoles, nueces, granos | No (combinar para completar) |

**Ingesta recomendada | Recommended Intake:** 10-35% de calorias diarias (minimo 0.8g/kg de peso corporal) | 10-35% of daily calories (minimum 0.8g/kg body weight)

### Grasas (9 calorias por gramo) | Fats (9 calories per gram)

**Tipos de grasa | Types of Fat:**

| Tipo | Estructura | Impacto en salud | Fuentes |
|------|-----------|-----------------|---------|
| Saturada | Sin dobles enlaces | Limitar consumo | Carne, lacteos, aceite de coco |
| Monoinsaturada | Un doble enlace | Promueve la salud | Aceite de oliva, aguacate, nueces |
| Poliinsaturada | Multiples dobles enlaces | Esencial | Pescado, nueces, semillas |
| Trans | Dobles enlaces artificiales | Evitar | Comidas procesadas y fritas |

**Acidos grasos esenciales | Essential Fatty Acids:**
- **Omega-3 (ALA):** Acido alfa-linolenico | Alpha-linolenic acid
- **Omega-6 (LA):** Acido linoleico | Linoleic acid
- El cuerpo no puede fabricarlos; se deben consumir | Body cannot make these; must consume them

**Ingesta recomendada | Recommended Intake:** 20-35% de las calorias diarias totales | 20-35% of total daily calories

### Distribucion Diaria de Energia | Daily Energy Distribution

Para una dieta de 2000 calorias | For a 2000 calorie diet:
- **Carbohidratos:** 225-325 gramos (45-65%)
- **Proteinas:** 50-175 gramos (10-35%)
- **Grasas:** 44-78 gramos (20-35%)`,
      keyTerms: [
        { term: 'caloria | calorie', definition: 'Unidad de energia que mide cuanta energia proporcionan los alimentos al cuerpo | A unit of energy that measures how much energy food provides to the body' },
        { term: 'aminoacidos esenciales | essential amino acids', definition: 'Nueve aminoacidos que el cuerpo no puede fabricar y deben obtenerse de los alimentos | Nine amino acids that cannot be made by the body and must be obtained from food' },
        { term: 'proteina completa | complete protein', definition: 'Alimento que contiene los nueve aminoacidos esenciales en cantidades adecuadas | Food containing all nine essential amino acids in adequate amounts' },
        { term: 'grasa saturada | saturated fat', definition: 'Grasa sin dobles enlaces entre moleculas de carbono; generalmente solida a temperatura ambiente | Fat with no double bonds between carbon molecules; typically solid at room temperature' },
        { term: 'grasa trans | trans fat', definition: 'Grasa creada artificialmente por hidrogenacion; asociada con efectos negativos en la salud | Artificially created fat through hydrogenation; associated with negative health effects' },
        { term: 'acidos grasos omega-3 | omega-3 fatty acids', definition: 'Grasas poliinsaturadas con propiedades antiinflamatorias; nutrientes esenciales | Polyunsaturated fats with anti-inflammatory properties; essential nutrients' },
        { term: 'indice glucemico | glycemic index', definition: 'Medida de que tan rapido un alimento con carbohidratos eleva la glucosa en la sangre | A measure of how quickly a carbohydrate-containing food raises blood glucose' },
      ],
      analogies: [
        'Los carbohidratos son como la lena pequena para una fogata - se queman rapido y facil para energia inmediata. | Carbohydrates are like kindling for a fire - they burn quickly and easily for immediate energy.',
        'Las grasas son como los troncos grandes en una fogata - se queman lento y dan energia duradera. | Fats are like logs on a fire - they burn slowly and provide long-lasting energy.',
        'Las proteinas son como un equipo de construccion - construyen y reparan las estructuras del cuerpo. | Proteins are like a construction crew - they build and repair the body\'s structures.',
      ],
      examples: [
        'Los atletas de resistencia hacen "carga de carbohidratos" antes de competencias para maximizar las reservas de glucogeno | Endurance athletes "carb load" before events to maximize glycogen stores',
        'Despues del entrenamiento con pesas, consumir proteina dentro de 2 horas ayuda a reparar los musculos | After weight training, consuming protein within 2 hours supports muscle repair',
        'Agregar aceite de oliva a las verduras ayuda a absorber las vitaminas liposolubles | Adding olive oil to vegetables helps absorb fat-soluble vitamins',
        'Combinar arroz con frijoles crea un perfil completo de proteinas | Combining rice and beans creates a complete protein profile',
      ],
      patientCounselingPoints: [
        'Escoja granos integrales en lugar de refinados para obtener mas fibra y nutrientes | Choose whole grains over refined grains for more fiber and nutrients',
        'Incluya pescado dos veces por semana por los acidos grasos omega-3 | Include fish twice weekly for omega-3 fatty acids',
        'Limite las carnes procesadas y los alimentos altos en grasa saturada | Limit processed meats and foods high in saturated fat',
        'Busque variedad en sus fuentes de proteina, tanto animales como vegetales | Aim for a variety of protein sources from both animals and plants',
        'No le tenga miedo a las grasas - escoja las saludables como nueces, aceite de oliva y aguacate | Don\'t fear fats - choose healthy ones like nuts, olive oil, and avocado',
      ],
    },
    3: {
      level: 3,
      summary:
        'El metabolismo de los macronutrientes involucra vias bioquimicas complejas para la digestion, absorcion y utilizacion. Los carbohidratos se metabolizan principalmente a glucosa y se almacenan como glucogeno; las proteinas se descomponen en aminoacidos para la sintesis proteica o gluconeogenesis; las grasas se someten a lipolisis para beta-oxidacion o cetogenesis. | Macronutrient metabolism involves complex biochemical pathways for digestion, absorption, and utilization. Carbohydrates are primarily metabolized to glucose and stored as glycogen; proteins are broken down to amino acids for protein synthesis or gluconeogenesis; fats undergo lipolysis for beta-oxidation or ketogenesis.',
      explanation: `## Metabolismo de Carbohidratos | Carbohydrate Metabolism

**Digestion y absorcion | Digestion and Absorption:**
1. **Boca | Mouth:** La amilasa salival inicia la digestion del almidon | Salivary amylase begins starch digestion
2. **Estomago | Stomach:** El pH acido detiene la actividad de la amilasa | Acidic pH stops amylase activity
3. **Intestino delgado | Small Intestine:** La amilasa pancreatica completa la digestion del almidon | Pancreatic amylase completes starch digestion
4. **Borde en cepillo | Brush Border:** Las disacaridasas descomponen en monosacaridos | Disaccharidases break down to monosaccharides
5. **Absorcion | Absorption:** SGLT1 (glucosa/galactosa) y GLUT5 (fructosa) | SGLT1 (glucose/galactose) and GLUT5 (fructose)

**Monosacaridos | Monosaccharides:**

| Azucar | Fuente | Destino metabolico principal |
|--------|--------|------------------------------|
| Glucosa | Todos los carbohidratos | Combustible celular universal |
| Fructosa | Frutas, azucar anadida | Metabolismo hepatico primero |
| Galactosa | Lacteos | Convertida en glucosa en el higado |

**Destino post-absorcion | Post-Absorptive Fate:**
- **Uso inmediato | Immediate use:** Glucolisis -> piruvato -> produccion de ATP | Glycolysis -> pyruvate -> ATP production
- **Almacenamiento | Storage:** Glucogenesis -> glucogeno (higado, musculo) | Glycogenesis -> glycogen (liver, muscle)
- **Exceso | Excess:** Lipogenesis de novo -> acidos grasos -> trigliceridos | De novo lipogenesis -> fatty acids -> triglycerides

**Regulacion de la glucemia | Blood Glucose Regulation:**
- **Insulina | Insulin:** Promueve captacion de glucosa, sintesis de glucogeno | Promotes glucose uptake, glycogen synthesis
- **Glucagon | Glucagon:** Estimula glucogenolisis, gluconeogenesis | Stimulates glycogenolysis, gluconeogenesis
- **Epinefrina | Epinephrine:** Movilizacion rapida de glucosa durante estres | Rapid glucose mobilization during stress

**Tipos de fibra | Fiber Types:**

| Tipo | Solubilidad | Fermentacion | Beneficios |
|------|-------------|--------------|------------|
| Soluble | Se disuelve en agua | Si (butirato) | Reduccion de colesterol, control glucemico |
| Insoluble | No se disuelve | Minima | Regularidad intestinal, volumen fecal |
| Almidon resistente | No | Si | Prebiotico, sensibilidad a insulina |

## Metabolismo de Proteinas | Protein Metabolism

**Digestion | Digestion:**
1. **Estomago | Stomach:** La pepsina descompone proteinas en peptidos | Pepsin breaks proteins into peptides
2. **Intestino delgado | Small Intestine:** Proteasas pancreaticas (tripsina, quimotripsina) | Pancreatic proteases (trypsin, chymotrypsin)
3. **Borde en cepillo | Brush Border:** Peptidasas a aminoacidos y di/tripeptidos | Peptidases to amino acids and di/tripeptides
4. **Absorcion | Absorption:** Transporte activo via transportadores de aminoacidos | Active transport via amino acid transporters

**Metabolismo de aminoacidos | Amino Acid Metabolism:**
\`\`\`
Proteina -> Aminoacidos ->
  |-- Sintesis de proteinas (crecimiento, reparacion)
  |-- Produccion de energia (transaminacion -> ciclo TCA)
  |-- Gluconeogenesis (produccion de glucosa)
  |-- Sintesis de acidos grasos (cuando hay exceso)
\`\`\`

**Evaluacion de calidad de proteina | Protein Quality Assessment:**
- **PDCAAS:** Mide patron de aminoacidos relativo a necesidades, ajustado por digestibilidad (escala 0-1.0)
- **DIAAS:** Metodo mas nuevo, medido en ileon, considerado mas preciso

**Balance de nitrogeno | Nitrogen Balance:**

| Estado | Descripcion | Contexto clinico |
|--------|-------------|------------------|
| Equilibrio | Ingesta = perdida | Adultos sanos |
| Positivo | Ingesta > perdida | Crecimiento, embarazo, recuperacion |
| Negativo | Ingesta < perdida | Lesion, enfermedad, desnutricion |

## Metabolismo de Lipidos | Lipid Metabolism

**Digestion | Digestion:**
1. **Emulsificacion | Emulsification:** Sales biliares del higado rompen globulos de grasa | Bile salts break large fat globules
2. **Lipolisis | Lipolysis:** Lipasa pancreatica descompone trigliceridos | Pancreatic lipase breaks triglycerides
3. **Formacion de micelas | Micelle Formation:** Bilis + productos lipidicos | Bile + lipid products
4. **Absorcion | Absorption:** Enterocitos via difusion pasiva | Enterocytes via passive diffusion
5. **Reensamblaje | Reassembly:** Quilomicrones para transporte | Chylomicrons for transport

**Clases de lipoproteinas | Lipoprotein Classes:**

| Lipoproteina | Origen | Lipido principal | Funcion | Significado clinico |
|-------------|--------|-----------------|---------|---------------------|
| Quilomicron | Intestino | Trigliceridos | Transporta grasa de la dieta | Elevado despues de comida grasa |
| VLDL | Higado | Trigliceridos | Transporta grasa endogena | Elevado en sindrome metabolico |
| LDL | Metabolismo VLDL | Colesterol | Entrega colesterol a tejidos | "Colesterol malo" - aterogenico |
| HDL | Higado/intestino | Fosfolipidos | Transporte reverso de colesterol | "Colesterol bueno" - protector |

**Cetogenesis | Ketogenesis:**
- Ocurre durante ayuno prolongado o dietas muy bajas en carbohidratos | Occurs during prolonged fasting or very low-carb diets
- El higado produce cuerpos cetonicos (acetoacetato, beta-hidroxibutirato, acetona) | Liver produces ketone bodies
- Combustible alternativo para el cerebro cuando la glucosa escasea | Alternative fuel for brain during glucose scarcity`,
      keyTerms: [
        { term: 'glucogenolisis | glycogenolysis', definition: 'Descomposicion de glucogeno a glucosa-1-fosfato para produccion de energia | Breakdown of glycogen to glucose-1-phosphate for energy production' },
        { term: 'gluconeogenesis | gluconeogenesis', definition: 'Sintesis de glucosa a partir de precursores no carbohidratados como aminoacidos y glicerol | Synthesis of glucose from non-carbohydrate precursors like amino acids and glycerol' },
        { term: 'beta-oxidacion | beta-oxidation', definition: 'Proceso mitocondrial de descomposicion de acidos grasos a acetil-CoA para energia | Mitochondrial process of breaking down fatty acids to acetyl-CoA for energy' },
        { term: 'cetogenesis | ketogenesis', definition: 'Produccion de cuerpos cetonicos a partir de acidos grasos en el higado | Production of ketone bodies from fatty acids in the liver' },
        { term: 'quilomicron | chylomicron', definition: 'Particula lipoproteica que transporta lipidos de la dieta del intestino a los tejidos | Lipoprotein particle that transports dietary lipids from intestine to tissues' },
        { term: 'PDCAAS', definition: 'Puntuacion de aminoacidos corregida por digestibilidad de proteinas; metodo para evaluar calidad proteica | Protein Digestibility-Corrected Amino Acid Score; method for evaluating protein quality' },
        { term: 'lanzadera de carnitina | carnitine shuttle', definition: 'Sistema de transporte que mueve acidos grasos de cadena larga a las mitocondrias para oxidacion | Transport system that moves long-chain fatty acids into mitochondria for oxidation' },
      ],
      analogies: [
        'El glucogeno es como una bateria recargable - almacena energia y se puede recargar rapidamente con las comidas y drenar durante la actividad. | Glycogen is like a rechargeable battery - it stores energy and can be quickly recharged from meals and drained during activity.',
        'Las lipoproteinas son como camiones de entrega - los quilomicrones entregan desde la "fabrica" (intestino), la VLDL desde el "almacen" (higado), y la HDL es el "equipo de limpieza". | Lipoproteins are like delivery trucks - chylomicrons deliver from the "factory" (intestine), VLDL from the "warehouse" (liver), and HDL is the "cleanup crew".',
        'La lanzadera de carnitina es como un cruce fronterizo - los acidos grasos necesitan transporte especial (carnitina) para entrar al "pais" mitocondrial. | The carnitine shuttle is like a border crossing - fatty acids need special transport (carnitine) to enter the mitochondria "country".',
      ],
      examples: [
        'Los corredores de maraton agotan las reservas de glucogeno, causando "chocar contra el muro" alrededor del kilometro 32 | Marathon runners deplete glycogen stores, causing "hitting the wall" around kilometer 32',
        'Los diabeticos tipo 1 producen cetonas cuando la insulina es insuficiente, arriesgando cetoacidosis diabetica | Type 1 diabetics produce ketones when insulin is insufficient, risking DKA',
        'La deficiencia de proteinas (kwashiorkor) causa higado graso por deterioro en la sintesis de VLDL | Protein deficiency (kwashiorkor) causes fatty liver due to impaired VLDL synthesis',
      ],
      clinicalNotes: 'En la cetoacidosis diabetica, la ausencia de insulina lleva a lipolisis y cetogenesis descontroladas. El tratamiento incluye insulina para detener la cetogenesis y reemplazo cuidadoso de glucosa y potasio. | In diabetic ketoacidosis, the absence of insulin leads to unrestrained lipolysis and ketogenesis. Treatment includes insulin to stop ketogenesis and careful glucose and potassium replacement.',
    },
    4: {
      level: 4,
      summary:
        'El metabolismo avanzado de macronutrientes integra regulacion hormonal, factores geneticos y estados fisiopatologicos. Las aplicaciones clinicas incluyen el manejo del sindrome metabolico, la optimizacion de la nutricion deportiva y la adaptacion de la composicion de macronutrientes para la prevencion y tratamiento de enfermedades. | Advanced macronutrient metabolism integrates hormonal regulation, genetic factors, and pathophysiological states. Clinical applications include managing metabolic syndrome, optimizing sports nutrition, and tailoring macronutrient composition for disease prevention and treatment.',
      explanation: `## Fisiologia Avanzada de Carbohidratos | Advanced Carbohydrate Physiology

**Metabolismo de la fructosa y salud | Fructose Metabolism and Health:**

A diferencia de la glucosa, la fructosa evita la fosfofructoquinasa (paso regulador clave) | Unlike glucose, fructose bypasses phosphofructokinase (key regulatory step):

\`\`\`
Fructosa -> Fructoquinasa -> Fructosa-1-fosfato ->
  Gliceraldehido + DHAP ->
    |-- Glucolisis (higado)
    |-- Lipogenesis de novo -> TG -> VLDL
    |-- Produccion de acido urico (via degradacion de AMP)
\`\`\`

**Implicaciones clinicas | Clinical Implications:**
- Evitar la PFK = sin retroalimentacion negativa | Bypassing PFK = no negative feedback
- Promueve lipogenesis independiente del estado energetico | Promotes lipogenesis independent of energy status
- Vinculada a NAFLD, hiperuricemia, resistencia a la insulina | Linked to NAFLD, hyperuricemia, insulin resistance

**Transportadores de glucosa (GLUT) | Glucose Transporters:**

| Transportador | Distribucion tisular | Km | Regulacion |
|---------------|---------------------|----|------------|
| GLUT1 | Eritrocitos, cerebro, placenta | Bajo | Constitutivo |
| GLUT2 | Higado, celulas beta pancreaticas, rinon | Alto | Independiente de insulina |
| GLUT3 | Neuronas | Muy bajo | Alta afinidad para el cerebro |
| GLUT4 | Musculo, adiposo | Bajo | Regulado por insulina |
| GLUT5 | Intestino delgado | N/A | Especifico para fructosa |

**Cascada de senalizacion de insulina | Insulin Signaling Cascade:**
\`\`\`
Insulina se une al receptor -> Autofosforilacion ->
  Fosforilacion de IRS -> Activacion de PI3K ->
    Activacion de Akt/PKB ->
      |-- Translocacion de GLUT4 (musculo, grasa)
      |-- Activacion de glucogeno sintasa
      |-- Activacion de mTOR (sintesis proteica)
      |-- Estimulacion de lipogenesis (SREBP-1c)
\`\`\`

## Fisiologia Avanzada de Proteinas | Advanced Protein Physiology

**Recambio de proteinas musculares | Muscle Protein Turnover:**

\`\`\`
Balance Neto de Proteina = Sintesis - Degradacion

SPM (Sintesis de Proteina Muscular) estimulada por:
  |-- Aminoacidos esenciales (especialmente leucina)
  |-- Insulina (anti-proteolitica)
  |-- Carga mecanica (ejercicio de resistencia)
  |-- Hormonas anabolicas (testosterona, IGF-1)

DPM (Degradacion de Proteina Muscular) aumentada por:
  |-- Cortisol
  |-- Inactividad/inmovilizacion
  |-- Deficit energetico
\`\`\`

**Umbral de leucina | Leucine Threshold:**
- ~2-3g de leucina por comida necesarios para estimular maximamente mTOR | ~2-3g leucine per meal required to maximally stimulate mTOR
- Explica por que la proteina de suero (alta en leucina) es anabolica | Explains why whey protein (high leucine) is anabolic
- Las proteinas vegetales frecuentemente requieren porciones mas grandes | Plant proteins often require larger servings

**Derivados de aminoacidos como moleculas de senalizacion | Amino Acid Derivatives as Signaling Molecules:**

| Aminoacido | Derivado | Funcion |
|------------|----------|---------|
| Triptofano | Serotonina | Regulacion del estado de animo y apetito |
| Tirosina | Dopamina, norepinefrina | Neurotransmision |
| Arginina | Oxido nitrico | Vasodilatacion |
| Glutamato | GABA | Neurotransmision inhibitoria |
| Histidina | Histamina | Respuesta inmune |

## Terapia de Nutricion Medica | Medical Nutrition Therapy

| Condicion | Modificacion de macronutrientes | Fundamento |
|-----------|--------------------------------|------------|
| Diabetes tipo 2 | Reducir carbos simples, aumentar fibra, proteina moderada | Mejorar control glucemico, saciedad |
| NAFLD | Reducir fructosa, aumentar proteina, aumentar omega-3 | Reducir lipogenesis, mejorar sensibilidad a insulina |
| Enfermedad renal cronica | Reducir proteina (0.6-0.8 g/kg) | Reducir desechos nitrogenados, frenar progresion |
| EPOC | Aumentar carbos, reducir grasa | Reducir produccion de CO2 (carga ventilatoria) |
| Enfermedad critica | Aumentar proteina (1.2-2.0 g/kg) | Contrarrestar catabolismo, preservar masa magra |

## Nutricion Deportiva Optimizada | Optimized Sports Nutrition

\`\`\`
Resistencia | Endurance:
  Pre-ejercicio: Comida alta en carbos (1-4h antes) -> Maximizar glucogeno
  Durante: 30-60g glucosa + fructosa (2:1) -> Transportadores multiples
  Post: 1.2 g/kg carb/hr x 4h -> Reposicion de glucogeno

Fuerza | Strength:
  Tiempo de proteina: 20-40g dentro de 2h post-ejercicio -> SPM
  Umbral de leucina: ~3g por porcion -> Activacion de mTOR
  Total diario: 1.6-2.2 g/kg -> Balance neto positivo
\`\`\``,
      keyTerms: [
        { term: 'fosfofructoquinasa | phosphofructokinase', definition: 'Enzima limitante de la glucolisis; inhibida por ATP y citrato, activada por AMP y fructosa-2,6-bisfosfato | Rate-limiting enzyme of glycolysis; inhibited by ATP and citrate, activated by AMP and fructose-2,6-bisphosphate' },
        { term: 'lipogenesis de novo | de novo lipogenesis', definition: 'Sintesis de acidos grasos a partir de precursores no grasos, principalmente carbohidratos, en el higado | Synthesis of fatty acids from non-fat precursors, primarily carbohydrates, in the liver' },
        { term: 'SREBP-1c', definition: 'Proteina de union al elemento regulador de esteroles 1c; factor de transcripcion que activa genes lipogenicos en respuesta a insulina | Sterol Regulatory Element-Binding Protein 1c; transcription factor activating lipogenic genes in response to insulin' },
        { term: 'cociente respiratorio | respiratory quotient', definition: 'Relacion de CO2 producido a O2 consumido; indica utilizacion de sustratos (1.0=carbos, 0.7=grasas) | Ratio of CO2 produced to O2 consumed; indicates substrate utilization (1.0=carbs, 0.7=fats)' },
        { term: 'sintesis de proteina muscular | muscle protein synthesis', definition: 'Proceso de construccion de nuevas proteinas musculares; estimulada por aminoacidos, especialmente leucina, y ejercicio de resistencia | Process of building new muscle proteins; stimulated by amino acids, especially leucine, and resistance exercise' },
        { term: 'inflexibilidad metabolica | metabolic inflexibility', definition: 'Deterioro en la capacidad de cambiar entre oxidacion de grasas y carbohidratos; sello del sindrome metabolico | Impaired ability to switch between fat and carbohydrate oxidation; hallmark of metabolic syndrome' },
      ],
      analogies: [
        'La flexibilidad metabolica es como un carro hibrido que cambia sin problemas entre gasolina y electricidad - la inflexibilidad metabolica es como un carro atascado en una sola velocidad. | Metabolic flexibility is like a hybrid car that seamlessly switches between gas and electric - metabolic inflexibility is like a car stuck in one gear.',
        'La resistencia a la insulina es como una cerradura que no abre aunque tengas la llave correcta - la insulina esta ahi pero las celulas no responden. | Insulin resistance is like a lock that won\'t open even with the right key - the insulin is there but the cells don\'t respond properly.',
        'El sistema ubiquitina-proteasoma en la perdida muscular es como un equipo de demolicion que trabaja mas rapido de lo que el equipo de construccion puede construir. | The ubiquitin-proteasome system in muscle wasting is like a demolition crew that works faster than the construction crew can build.',
      ],
      examples: [
        'Hipercolesterolemia familiar causada por mutaciones en LDLR o PCSK9 tratada con inhibidores de PCSK9 (evolocumab, alirocumab) | Familial hypercholesterolemia caused by LDLR or PCSK9 mutations treated with PCSK9 inhibitors',
        'Reversion del NAFLD con restriccion de carbohidratos independiente de la perdida de peso | NAFLD reversal with carbohydrate restriction independent of weight loss',
        'Suplementacion con leucina en ancianos para superar la "resistencia anabolica" | Leucine supplementation in elderly to overcome "anabolic resistance"',
      ],
      clinicalNotes: 'En pacientes criticos, la nutricion enteral temprana (dentro de 24-48 horas) con proteina adecuada (1.2-2.0 g/kg) es recomendada. La subalimentacion permisiva (hasta 70% de los objetivos) puede ser beneficiosa en la fase aguda para evitar el sindrome de realimentacion y reducir complicaciones. | In critically ill patients, early enteral nutrition (within 24-48 hours) with adequate protein (1.2-2.0 g/kg) is recommended. Permissive underfeeding may be beneficial in the acute phase to avoid refeeding syndrome.',
    },
    5: {
      level: 5,
      summary:
        'La comprension a nivel experto de los macronutrientes abarca mecanismos moleculares, polimorfismos geneticos, enfoques de nutricion de precision e intervenciones terapeuticas emergentes incluyendo terapias cetogenicas, modulacion proteica en el envejecimiento e intervenciones basadas en macronutrientes para enfermedades metabolicas. | Expert-level understanding of macronutrients encompasses molecular mechanisms, genetic polymorphisms, precision nutrition approaches, and emerging therapeutic applications including ketogenic therapies, protein modulation in aging, and macronutrient-based interventions for metabolic disease.',
      explanation: `## Regulacion Molecular del Metabolismo de Macronutrientes | Molecular Regulation of Macronutrient Metabolism

**Vias de deteccion de nutrientes | Nutrient-Sensing Pathways:**

\`\`\`
mTORC1 (Sensor de exceso de nutrientes | Nutrient Excess Sensor):
  Activado por: Aminoacidos (leucina, arginina), glucosa, insulina
  Inhibido por: AMPK, rapamicina
  Efectos: Sintesis de proteinas, sintesis de lipidos, inhibicion de autofagia
  Clinico: Rapamicina, everolimus (inmunosupresores, anti-cancer)

AMPK (Sensor de deficit energetico | Energy Deficit Sensor):
  Activado por: Baja relacion ATP:AMP, metformina, ejercicio
  Efectos: Cambio catabolico, biogenesis mitocondrial, autofagia
  Clinico: Metformina, mimeticos del ejercicio en desarrollo

Sirtuinas (Desacilasas dependientes de NAD+):
  SIRT1: Respuesta al ayuno, biogenesis mitocondrial (PGC-1alpha)
  SIRT3: Desacetilacion de proteinas mitocondriales
  Clinico: Precursores de NAD+ (NR, NMN) para envejecimiento
\`\`\`

**Redes de factores de transcripcion | Transcription Factor Networks:**

| Factor de transcripcion | Activadores | Genes diana | Efecto metabolico |
|------------------------|-------------|-------------|-------------------|
| SREBP-1c | Insulina, LXR | FAS, ACC, SCD1 | Lipogenesis |
| ChREBP | Glucosa | PKLR, FAS | Glucolitico, lipogenico |
| PPAR-alpha | Ayuno, fibratos | CPT1, ACOX1 | Oxidacion de acidos grasos |
| PPAR-gamma | TZDs, acidos grasos | aP2, CD36 | Adipogenesis, almacenamiento lipidico |
| FOXO1 | Glucagon, ayuno | PEPCK, G6Pase | Gluconeogenesis |

## Variantes Geneticas que Afectan el Metabolismo | Genetic Variants Affecting Metabolism

**Metabolismo de carbohidratos | Carbohydrate Metabolism:**

| Gen | Variante | Efecto | Implicacion clinica |
|-----|---------|--------|---------------------|
| GCKR | P446L | Aumento de captacion hepatica de glucosa | Trigliceridos mas altos, glucosa en ayunas mas baja |
| AMY1 | Variacion de numero de copias | Niveles de amilasa salival | Eficiencia digestiva del almidon, riesgo de obesidad |
| TCF7L2 | rs7903146 | Deterioro de secrecion de insulina | Variante comun mas fuerte para DM2 |

**Metabolismo lipidico | Lipid Metabolism:**

| Gen | Variante | Efecto | Implicacion clinica |
|-----|---------|--------|---------------------|
| APOE | alelo epsilon4 | Deterioro de eliminacion de lipidos | Mayor riesgo de Alzheimer, ECV, LDL elevado |
| LDLR | Perdida de funcion | Hipercolesterolemia familiar | LDL >190, EAC prematura |
| PCSK9 | Ganancia de funcion | Degradacion del LDLR | Hipercolesterolemia |
| PCSK9 | Perdida de funcion | Mayor actividad LDLR | LDL bajo, menor riesgo ECV |

## Enfoques de Nutricion de Precision | Precision Nutrition Approaches

**Recomendaciones dieteticas dirigidas por genotipo | Genotype-Directed Dietary Recommendations:**

\`\`\`
Genotipo APOE y respuesta lipidica:
  Portadores epsilon4:
    - Mayor reduccion de LDL con reduccion de grasa saturada
    - Peor respuesta a estatinas (dosis mas altas necesarias)
    - Intervencion temprana recomendada

Genotipo FADS1/2:
  Convertidores ineficientes:
    - Mayor requerimiento de DHA/EPA preformados
    - Dietas a base de plantas requieren planificacion cuidadosa
    - Fuentes directas de pescado/algas preferidas
\`\`\`

**Interacciones microbioma-macronutrientes | Microbiome-Macronutrient Interactions:**

\`\`\`
Fibra dietetica -> Fermentacion microbiana ->
  Acidos grasos de cadena corta (acetato, propionato, butirato) ->
    |-- Butirato: Combustible de colonocitos, inhibicion de HDAC, antiinflamatorio
    |-- Propionato: Sustrato de gluconeogenesis, hormonas de saciedad
    |-- Acetato: Sustrato de lipogenesis, regulacion del apetito

Metabolismo de acidos biliares:
  Acidos biliares primarios -> Desconjugacion microbiana ->
    Acidos biliares secundarios -> Senalizacion FXR, TGR5 ->
      Metabolismo de glucosa/lipidos, gasto energetico

Metabolismo de aminoacidos:
  Proteina no absorbida -> Fermentacion microbiana ->
    TMAO (de carnitina, colina) -> Riesgo ECV
    Acido sulfhidrico -> Salud de la mucosa intestinal
\`\`\`

## Aplicaciones Terapeuticas | Therapeutic Applications

**Terapias metabolicas cetogenicas | Ketogenic Metabolic Therapies:**

\`\`\`
Mecanismos mas alla de las cetonas:
  1. Reduccion del flujo glucolitico -> Menor produccion de ROS
  2. Aumento de relacion NAD+/NADH -> Activacion de SIRT
  3. Reduccion de insulina -> Lipolisis desinhibida, autofagia
  4. Modulacion de adenosina -> Balance de neurotransmisores
  5. Cambios en microbioma intestinal -> Aumento de Akkermansia

Niveles de cetosis terapeutica:
  Cetosis nutricional: 0.5-3.0 mM beta-HB
  Inducida por MCT: Inicio mas rapido, limitada por tolerancia GI
  Cetonas exogenas: Elevacion rapida, supresion del apetito
\`\`\`

**Intervenciones de proteina en el envejecimiento | Protein Interventions in Aging:**

\`\`\`
Prevencion de sarcopenia:
  Proteina: >=1.2 g/kg/dia (vs RDA 0.8)
  Leucina: 2.5-3g por comida (efecto umbral)
  Distribucion: Distribucion uniforme (30g/comida maxima SPM)
  Tiempo: Proteina pre-sueno (~30g caseina) -> SPM nocturna

Resistencia anabolica:
  Atenuacion relacionada con la edad de la respuesta SPM a proteina/aminoacidos
  Mecanismos:
    - Activacion reducida de mTOR
    - Transporte deteriorado de aminoacidos
    - Cinetica alterada de leucina
  Contra-estrategias:
    - Umbral mas alto de leucina
    - Sinergia proteina + ejercicio de resistencia
    - Suplementacion con HMB (beta-hidroxi beta-metilbutirato)
\`\`\`

## Nutricion Personalizada por Algoritmos | Personalized Nutrition Algorithms

\`\`\`
Integracion multi-omica:
  Genomica + Metabolomica + Microbioma + Fenotipo

Guiada por monitoreo continuo de glucosa:
  Respuestas post-prandiales individuales
  Prediccion por aprendizaje automatico
  Retroalimentacion dietetica en tiempo real

Inteligencia artificial:
  Evaluacion dietetica basada en imagen
  Planificacion personalizada de comidas
  Integracion de coaching conductual
\`\`\``,
      keyTerms: [
        { term: 'mTORC1', definition: 'Objetivo mecanistico de rapamicina complejo 1; integra senales de nutrientes, energia y factores de crecimiento para regular sintesis proteica y autofagia | Mechanistic target of rapamycin complex 1; integrates nutrient, energy, and growth factor signals to regulate protein synthesis and autophagy' },
        { term: 'AMPK', definition: 'Proteina quinasa activada por AMP; sensor de energia celular activado por estados de baja energia; promueve vias catabolicas | AMP-activated protein kinase; cellular energy sensor activated by low energy states; promotes catabolic pathways' },
        { term: 'resistencia anabolica | anabolic resistance', definition: 'Reduccion relacionada con la edad en la respuesta de sintesis proteica muscular a la ingesta de proteina/aminoacidos | Age-related reduction in muscle protein synthesis response to protein/amino acid intake' },
        { term: 'TMAO', definition: 'N-oxido de trimetilamina; metabolito derivado del microbioma intestinal a partir de colina/carnitina; asociado con riesgo de ECV | Trimethylamine N-oxide; gut microbiome-derived metabolite from choline/carnitine; associated with CVD risk' },
        { term: 'nutrigenomica | nutrigenomics', definition: 'Estudio de como la variacion genetica afecta la respuesta a los nutrientes y patrones dieteticos | Study of how genetic variation affects response to nutrients and dietary patterns' },
        { term: 'mioquinas | myokines', definition: 'Citoquinas y peptidos de senalizacion secretados por el musculo esqueletico que median beneficios del ejercicio sistemicamente | Cytokines and signaling peptides secreted by skeletal muscle that mediate exercise benefits systemically' },
        { term: 'HMB', definition: 'Beta-hidroxi beta-metilbutirato; metabolito de leucina que atenua la degradacion de proteinas musculares, especialmente en estados catabolicos | Beta-hydroxy beta-methylbutyrate; leucine metabolite shown to attenuate muscle protein breakdown in catabolic states' },
      ],
      analogies: [
        'Las vias de deteccion de nutrientes son como sistemas GPS celulares - mTORC1 dice "recursos abundantes, procede" mientras que AMPK dice "recursos escasos, conserva". | Nutrient-sensing pathways are like cellular GPS systems - mTORC1 says "resources abundant, proceed" while AMPK says "resources scarce, conserve."',
        'La nutricion de precision es como tener una huella metabolica - tu perfil genetico y microbiano determina que alimentos funcionan mejor para ti. | Precision nutrition is like having a metabolic fingerprint - your genetic and microbial profile determines which foods work best for you.',
        'El microbioma es como un organo interno que varia entre individuos - procesando macronutrientes de manera diferente segun su composicion. | The microbiome is like an internal organ that varies between individuals - processing macronutrients differently based on its composition.',
      ],
      examples: [
        'Los inhibidores de PCSK9 (evolocumab, alirocumab) reducen el LDL en 50-60% al imitar variantes de perdida de funcion | PCSK9 inhibitors reduce LDL by 50-60% by mimicking loss-of-function variants',
        'Los portadores de APOE epsilon4 muestran mayor reduccion de LDL con restriccion de grasa saturada que los no portadores | APOE epsilon4 carriers show greater LDL reduction with saturated fat restriction than non-carriers',
        'El monitoreo continuo de glucosa revela alta variabilidad interindividual en la respuesta glucemica a alimentos identicos | Continuous glucose monitoring reveals high interindividual variability in glycemic response to identical foods',
        'La suplementacion con beta-hidroxibutirato (ester de cetona) logra cetosis terapeutica sin restriccion dietetica | Beta-hydroxybutyrate supplementation achieves therapeutic ketosis without dietary restriction',
      ],
      clinicalNotes: `Perlas de implementacion clinica | Clinical Implementation Pearls:

1. **Proteina en ancianos:** Recomendar >=1.2 g/kg/dia distribuida en comidas (>=30g/comida) para superar la resistencia anabolica | Recommend >=1.2 g/kg/day distributed across meals to overcome anabolic resistance

2. **Nutricion en NAFLD:** Restriccion de fructosa (<10g/dia) + omega-3 (1-2g/dia) + dieta mediterranea -> Mejora histologica | Fructose restriction + omega-3 + Mediterranean diet -> histologic improvement

3. **Cirugia bariatrica:** Monitoreo de por vida de proteina, B12, hierro, calcio, vitamina D | Lifelong monitoring for protein, B12, iron, calcium, vitamin D deficiencies

4. **Dieta cetogenica terapeutica:** Monitorear beta-hidroxibutirato serico, perfil lipidico, crecimiento en ninos; suplementar con micronutrientes | Monitor serum beta-hydroxybutyrate, lipid profile, growth in children; supplement with micronutrients

5. **Nutricion guiada por genotipo:** Los portadores de APOE epsilon4 responden excepcionalmente bien al patron de dieta mediterranea | APOE epsilon4 carriers respond exceptionally well to Mediterranean diet pattern

6. **Intervencion para sarcopenia:** Proteina combinada (1.2-1.5g/kg) + entrenamiento de resistencia + optimizacion de vitamina D | Combined protein + resistance training + vitamin D optimization`,
    },
  },

  media: [],

  citations: [
    {
      id: 'dietary-guidelines-2020-2025',
      type: 'guideline',
      title: 'Dietary Guidelines for Americans, 2020-2025',
      authors: ['U.S. Department of Agriculture', 'U.S. Department of Health and Human Services'],
      source: 'USDA/HHS',
      url: 'https://www.dietaryguidelines.gov',
    },
    {
      id: 'jager-protein-position-stand',
      type: 'journal',
      title: 'International Society of Sports Nutrition Position Stand: Protein and Exercise',
      authors: ['R Jager', 'CM Kerksick', 'BI Campbell'],
      source: 'Journal of the International Society of Sports Nutrition',
      url: 'https://doi.org/10.1186/s12970-017-0177-8',
    },
    {
      id: 'volek-phinney-ketogenic',
      type: 'textbook',
      title: 'The Art and Science of Low Carbohydrate Living',
      authors: ['JS Volek', 'SL Phinney'],
      source: 'Beyond Obesity LLC',
    },
    {
      id: 'krause-food-nutrition',
      type: 'textbook',
      title: 'Krause and Mahan\'s Food & the Nutrition Care Process, 15th Edition',
      authors: ['JL Raymond', 'K Morrow'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-vitaminas-vitamins', targetType: 'topic', relationship: 'sibling', label: 'Vitaminas | Vitamins' },
    { targetId: 'nutrition-minerales-minerals', targetType: 'topic', relationship: 'sibling', label: 'Minerales | Minerals' },
    { targetId: 'nutrition-enfermedades-cronicas', targetType: 'topic', relationship: 'related', label: 'Nutricion y enfermedades cronicas | Nutrition and Chronic Disease' },
    { targetId: 'nutrition-evaluacion-nutricional', targetType: 'topic', relationship: 'related', label: 'Evaluacion nutricional | Nutritional Assessment' },
    { targetId: 'metabolism-carbohydrate', targetType: 'process', relationship: 'related', label: 'Metabolismo de carbohidratos | Carbohydrate Metabolism' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Diabetes Tipo 2 | Type 2 Diabetes' },
  ],

  tags: {
    systems: ['gastrointestinal', 'endocrine', 'metabolic'],
    topics: ['nutrition', 'metabolism', 'preventive-medicine', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default macronutrientesMacronutrients;
