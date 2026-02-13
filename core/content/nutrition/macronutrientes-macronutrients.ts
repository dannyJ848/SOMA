import { EducationalContent } from '../types';

/**
 * Macronutrientes / Macronutrients
 *
 * Contenido educativo bilingue (español primero) sobre los tres macronutrientes
 * principales: carbohidratos, proteínas y grasas. Cubre estructura, metabolismo,
 * requerimientos diarios, fuentes alimentarias y aplicaciones clínicas.
 *
 * Bilingual educational content (Spanish first) on the three primary macronutrients:
 * carbohydrates, proteins, and fats. Covers structure, metabolism,
 * daily requirements, food sources, and clinical applications.
 */

export const macronutrientesMacronutrients: EducationalContent = {
  id: 'topic-macronutrientes',
  type: 'topic',
  name: 'Macronutrients',
  nameEs: 'Macronutrientes',
  alternateNames: ['Macros', 'Nutrientes Energéticos', 'Energy Nutrients', 'Caloric Nutrients', 'Nutrientes Calóricos'],

  levels: {
    1: {
      level: 1,
      summary: 'Los macronutrientes son los nutrientes que tu cuerpo necesita en grandes cantidades cada día: carbohidratos para energía, proteínas para construir y reparar, y grasas para proteger y almacenar energía. | Macronutrients are nutrients your body needs in large amounts every day: carbs for energy, proteins to build and repair, and fats to protect and store energy.',
      explanation: `## Explicación

Los macronutrientes son los nutrientes "grandes" (macro = grande) que forman la mayor parte de lo que comes. Tu cuerpo necesita mucho de ellos cada día para crecer, mantenerse fuerte y tener energía.

**Los Tres Macronutrientes Principales:**

1. **Carbohidratos (Carbos)** - El Combustible de Tu Cuerpo
   - Se encuentran en: pan, arroz, pasta, frutas, verduras
   - Qué hacen: Te dan energía rápida para correr, pensar y jugar
   - Piensa en ellos como: ¡La gasolina que hace funcionar un carro!

2. **Proteínas** - Los Bloques de Construcción
   - Se encuentran en: carne, pescado, huevos, frijoles, nueces, lácteos
   - Qué hacen: Construyen y reparan tus músculos, piel y todas las partes de tu cuerpo
   - Piensa en ellas como: ¡Los ladrillos y la madera que construyen una casa!

3. **Grasas** - El Protector y Banco de Energía
   - Se encuentran en: mantequilla, aceite, nueces, aguacate, pescado
   - Qué hacen: Protegen tus órganos, te mantienen caliente, guardan energía para después
   - Piensa en ellas como: ¡Una cobija calentita y una cuenta de ahorros!

**¿Cuánta energía da cada uno?**
- Carbohidratos: 4 calorías por gramo
- Proteínas: 4 calorías por gramo
- Grasas: 9 calorías por gramo (¡más del doble!)

**¿Qué es una caloría?**
Una caloría es una medida de energía, como los kilómetros miden distancia. Tu cuerpo usa calorías para todo: respirar, caminar, pensar y hasta dormir.

---
## Explanation

Macronutrients are the "big" nutrients (macro = big) that make up most of the food you eat. Your body needs lots of them every day to grow, stay strong, and have energy.

**The Three Main Macronutrients:**

1. **Carbohydrates (Carbs)** - Your Body's Fuel
   - Found in: bread, rice, pasta, fruits, vegetables
   - What they do: Give you quick energy to run, think, and play
   - Think of them like: The gas that makes a car go!

2. **Proteins** - The Building Blocks
   - Found in: meat, fish, eggs, beans, nuts, dairy
   - What they do: Build and repair your muscles, skin, and all body parts
   - Think of them like: The bricks and wood that build a house!

3. **Fats** - The Protector and Energy Bank
   - Found in: butter, oil, nuts, avocado, fish
   - What they do: Protect your organs, keep you warm, store energy for later
   - Think of them like: A cozy blanket and a savings account!

**How much energy does each give?**
- Carbohydrates: 4 calories per gram
- Proteins: 4 calories per gram
- Fats: 9 calories per gram (more than double!)

**What is a calorie?**
A calorie is a measure of energy, like kilometers measure distance. Your body uses calories for everything: breathing, walking, thinking, and even sleeping.`,
      keyTerms: [
        { term: 'macronutrientes / macronutrients', definition: 'Los nutrientes que tu cuerpo necesita en grandes cantidades: carbohidratos, proteínas y grasas. | The nutrients your body needs in large amounts: carbohydrates, proteins, and fats.' },
        { term: 'carbohidratos / carbohydrates', definition: 'Alimentos como pan, arroz y fruta que te dan energía rápida. | Foods like bread, rice, and fruit that give you quick energy.' },
        { term: 'proteínas / proteins', definition: 'Alimentos como carne, huevos y frijoles que construyen y reparan tu cuerpo. | Foods like meat, eggs, and beans that build and repair your body.' },
        { term: 'grasas / fats', definition: 'Alimentos como mantequilla, nueces y aceite que protegen tus órganos y guardan energía. | Foods like butter, nuts, and oil that protect your organs and store energy.' },
        { term: 'calorías / calories', definition: 'Una medida de la energía que hay en los alimentos. | A measure of the energy in food.' }
      ],
      analogies: [
        'Los macronutrientes son como los tres ingredientes principales de una receta: necesitas mucho de cada uno para hacer una comida completa. | Macronutrients are like the three main ingredients in a recipe: you need lots of each to make a complete meal.',
        'Los carbohidratos son como la leña que arde rápido y brillante. Las grasas son como el carbón que arde lento por mucho tiempo. | Carbs are like firewood that burns fast and bright. Fats are like coal that burns slowly for a long time.',
        'Las proteínas son como piezas de LEGO: tu cuerpo las usa para construir todo, desde tu pelo hasta las uñas de tus pies. | Proteins are like LEGO blocks: your body uses them to build everything from your hair to your toenails.'
      ],
      examples: [
        'Un sándwich de crema de cacahuate tiene los tres macronutrientes: pan (carbohidratos), crema de cacahuate (proteínas y grasas), ¡por eso te da buena energía! | A peanut butter sandwich has all three macronutrients: bread (carbs), peanut butter (protein and fat), which is why it gives you good energy!',
        'Un plato de arroz con frijoles y aguacate es una comida perfecta en macronutrientes: arroz (carbos), frijoles (proteínas), aguacate (grasas). | A plate of rice with beans and avocado is a perfect macronutrient meal: rice (carbs), beans (protein), avocado (fats).',
        'Cuando corres rápido, tu cuerpo usa carbohidratos primero. Cuando caminas despacio, usa más grasas. | When you run fast, your body uses carbs first. When you walk slowly, it uses more fats.'
      ],
      patientCounselingPoints: [
        'Todos los macronutrientes son importantes: no elimines ninguno completamente de tu dieta. | All macronutrients are important: do not eliminate any of them completely from your diet.',
        'Come una variedad de alimentos de cada grupo para obtener todos los nutrientes que necesitas. | Eat a variety of foods from each group to get all the nutrients you need.',
        'Las grasas no son malas; tu cuerpo las necesita, especialmente las de pescado, nueces y aguacate. | Fats are not bad; your body needs them, especially from fish, nuts, and avocado.'
      ]
    },

    2: {
      level: 2,
      summary: 'Los macronutrientes (carbohidratos, proteínas y grasas) son las fuentes de energía principales del cuerpo. Los carbohidratos aportan 4 kcal/g y son la fuente preferida de energía; las proteínas aportan 4 kcal/g y son esenciales para la estructura celular; las grasas aportan 9 kcal/g y participan en funciones hormonales y de absorción. | Macronutrients (carbohydrates, proteins, and fats) are the body\'s primary energy sources. Carbohydrates provide 4 kcal/g as the preferred energy source; proteins provide 4 kcal/g for cellular structure; fats provide 9 kcal/g and participate in hormonal and absorption functions.',
      explanation: `## Explicación

### Visión General de los Macronutrientes

Los macronutrientes son sustancias que el cuerpo requiere en cantidades de gramos por día. Son la fuente principal de energía y cumplen funciones estructurales y reguladoras fundamentales.

### 1. Carbohidratos

**Tipos principales:**
- **Simples (azúcares):** Monosacáridos (glucosa, fructosa, galactosa) y disacáridos (sacarosa, lactosa, maltosa)
- **Complejos (almidones):** Polisacáridos como el almidón y el glucógeno
- **Fibra:** Celulosa, pectina, beta-glucanos (no digerible, pero esencial)

**Funciones:**
- Fuente principal de energía (especialmente para el cerebro)
- El cerebro consume ~120 g/día de glucosa
- Almacenamiento como glucógeno en hígado (~100 g) y músculos (~400 g)
- La fibra regula la digestión y alimenta la microbiota intestinal

**Requerimientos:**
- 45-65% de las calorías totales (AMDR)
- Fibra: 25-38 g/día (mujeres/hombres)

### 2. Proteínas

**Estructura:**
- Compuestas por 20 aminoácidos, 9 de ellos esenciales (el cuerpo no los puede fabricar)
- Aminoácidos esenciales: histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano, valina

**Funciones:**
- Construcción y reparación de tejidos (músculo, piel, pelo)
- Enzimas, hormonas, anticuerpos
- Transporte de sustancias en la sangre (albúmina, hemoglobina)

**Fuentes:**
- Completas (todos los aminoácidos esenciales): carne, pescado, huevos, lácteos, soya
- Incompletas: legumbres, cereales, nueces (se complementan entre sí)

**Requerimientos:**
- 10-35% de las calorías totales
- 0.8 g/kg/día (adultos sedentarios)
- 1.2-2.0 g/kg/día (atletas)

### 3. Grasas (Lípidos)

**Tipos:**
- **Saturadas:** Sólidas a temperatura ambiente (mantequilla, manteca, grasa animal)
- **Monoinsaturadas:** Aceite de oliva, aguacate, nueces
- **Poliinsaturadas:** Aceites vegetales, pescado (omega-3 y omega-6)
- **Trans:** Aceites parcialmente hidrogenados (las más dañinas)

**Funciones:**
- Fuente concentrada de energía (9 kcal/g)
- Absorción de vitaminas liposolubles (A, D, E, K)
- Componente de las membranas celulares
- Producción de hormonas esteroideas
- Aislamiento térmico y protección de órganos

**Requerimientos:**
- 20-35% de las calorías totales
- Grasas saturadas: <10% del total
- Grasas trans: lo menor posible (idealmente 0)
- Omega-3: 250-500 mg EPA+DHA/día

---
## Explanation

### Macronutrient Overview

Macronutrients are substances the body requires in gram quantities per day. They are the primary source of energy and serve fundamental structural and regulatory roles.

### 1. Carbohydrates

**Main types:**
- **Simple (sugars):** Monosaccharides (glucose, fructose, galactose) and disaccharides (sucrose, lactose, maltose)
- **Complex (starches):** Polysaccharides like starch and glycogen
- **Fiber:** Cellulose, pectin, beta-glucans (indigestible but essential)

**Functions:**
- Primary energy source (especially for the brain)
- The brain consumes ~120 g/day of glucose
- Stored as glycogen in liver (~100 g) and muscles (~400 g)
- Fiber regulates digestion and feeds gut microbiota

**Requirements:**
- 45-65% of total calories (AMDR)
- Fiber: 25-38 g/day (women/men)

### 2. Proteins

**Structure:**
- Composed of 20 amino acids, 9 of which are essential (the body cannot make them)
- Essential amino acids: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine

**Functions:**
- Building and repairing tissues (muscle, skin, hair)
- Enzymes, hormones, antibodies
- Transport of substances in blood (albumin, hemoglobin)

**Sources:**
- Complete (all essential amino acids): meat, fish, eggs, dairy, soy
- Incomplete: legumes, grains, nuts (they complement each other)

**Requirements:**
- 10-35% of total calories
- 0.8 g/kg/day (sedentary adults)
- 1.2-2.0 g/kg/day (athletes)

### 3. Fats (Lipids)

**Types:**
- **Saturated:** Solid at room temperature (butter, lard, animal fat)
- **Monounsaturated:** Olive oil, avocado, nuts
- **Polyunsaturated:** Vegetable oils, fish (omega-3 and omega-6)
- **Trans:** Partially hydrogenated oils (the most harmful)

**Functions:**
- Concentrated energy source (9 kcal/g)
- Absorption of fat-soluble vitamins (A, D, E, K)
- Component of cell membranes
- Steroid hormone production
- Thermal insulation and organ protection

**Requirements:**
- 20-35% of total calories
- Saturated fats: <10% of total
- Trans fats: as low as possible (ideally 0)
- Omega-3: 250-500 mg EPA+DHA/day`,
      keyTerms: [
        { term: 'aminoácidos esenciales / essential amino acids', definition: 'Los 9 aminoácidos que el cuerpo no puede fabricar y deben obtenerse de la dieta. | The 9 amino acids the body cannot make and must be obtained from diet.' },
        { term: 'glucógeno / glycogen', definition: 'Forma en que el cuerpo almacena carbohidratos en el hígado y los músculos para uso rápido de energía. | The form in which the body stores carbohydrates in liver and muscles for quick energy use.' },
        { term: 'grasas saturadas / saturated fats', definition: 'Grasas sólidas a temperatura ambiente, generalmente de origen animal; su exceso aumenta el riesgo cardiovascular. | Fats that are solid at room temperature, usually from animal sources; excess increases cardiovascular risk.' },
        { term: 'ácidos grasos omega-3 / omega-3 fatty acids', definition: 'Grasas poliinsaturadas esenciales con efectos antiinflamatorios; se encuentran en pescado, linaza y nueces. | Essential polyunsaturated fats with anti-inflammatory effects; found in fish, flaxseed, and walnuts.' },
        { term: 'AMDR (Rango Aceptable de Distribución de Macronutrientes)', definition: 'El rango recomendado de calorías de cada macronutriente para una dieta saludable. | The recommended range of calories from each macronutrient for a healthy diet.' },
        { term: 'fibra dietética / dietary fiber', definition: 'Carbohidratos no digeribles que regulan la digestión y alimentan la microbiota intestinal. | Non-digestible carbohydrates that regulate digestion and feed gut microbiota.' }
      ],
      analogies: [
        'El glucógeno es como la batería de tu teléfono: se carga cuando comes carbohidratos y se descarga cuando necesitas energía rápida. | Glycogen is like your phone battery: it charges when you eat carbs and drains when you need quick energy.',
        'Los aminoácidos esenciales son como letras del alfabeto que no puedes inventar: necesitas obtenerlos de los alimentos para "escribir" las proteínas de tu cuerpo. | Essential amino acids are like letters of the alphabet you cannot invent: you need to get them from food to "write" your body\'s proteins.'
      ],
      examples: [
        'Un atleta que corre un maratón agota sus reservas de glucógeno muscular (~400 g) en aproximadamente 2 horas, por eso necesitan consumir carbohidratos durante la carrera. | A marathon runner depletes muscle glycogen stores (~400 g) in about 2 hours, which is why they need to consume carbs during the race.',
        'El arroz y los frijoles juntos forman una proteína completa: el arroz aporta metionina y los frijoles aportan lisina, los aminoácidos que le faltan al otro. | Rice and beans together form a complete protein: rice provides methionine and beans provide lysine, the amino acids each one lacks.'
      ]
    },

    3: {
      level: 3,
      summary: 'Los macronutrientes participan en rutas metabólicas interconectadas: la glucólisis y el ciclo de Krebs procesan carbohidratos, la beta-oxidación degrada ácidos grasos, y la desaminación canaliza aminoácidos hacia la gluconeogénesis o la cetogénesis. La regulación hormonal por insulina, glucagón y cortisol coordina el flujo de sustratos según el estado nutricional. | Macronutrients participate in interconnected metabolic pathways: glycolysis and the Krebs cycle process carbohydrates, beta-oxidation degrades fatty acids, and deamination channels amino acids toward gluconeogenesis or ketogenesis. Hormonal regulation by insulin, glucagon, and cortisol coordinates substrate flow based on nutritional state.',
      explanation: `## Explicación

### Metabolismo de los Macronutrientes

Los tres macronutrientes convergen en el metabolismo energético a través de vías interconectadas que producen ATP (adenosín trifosfato), la moneda energética de la célula.

### Metabolismo de Carbohidratos

**Digestión y absorción:**
- La amilasa salival y pancreática hidroliza el almidón a maltosa
- Las disacaridasas del borde en cepillo (maltasa, lactasa, sacarasa) producen monosacáridos
- Los monosacáridos se absorben por transportadores SGLT1 (cotransporte Na+/glucosa) y GLUT2/GLUT5

**Rutas metabólicas principales:**
1. **Glucólisis:** Glucosa → 2 piruvato (2 ATP netos, citoplasma)
2. **Descarboxilación oxidativa:** Piruvato → Acetil-CoA (mitocondria)
3. **Ciclo de Krebs:** Acetil-CoA → CO₂ + NADH + FADH₂ (8 ATP equivalentes/vuelta)
4. **Cadena de transporte de electrones:** NADH/FADH₂ → 30-32 ATP total
5. **Gluconeogénesis:** Síntesis de glucosa a partir de lactato, aminoácidos, glicerol (hígado, riñón)
6. **Vía de las pentosas fosfato:** Genera NADPH (para biosíntesis) y ribosa-5-fosfato (para nucleótidos)

**Índice Glucémico (IG) y Carga Glucémica (CG):**
- IG: Velocidad a la que un alimento eleva la glucosa sanguínea (referencia: glucosa = 100)
- CG = IG × gramos de carbohidratos por porción / 100
- La CG es más relevante clínicamente porque considera la cantidad consumida

### Metabolismo de Proteínas

**Digestión:**
- Pepsina (estómago, pH ácido) inicia la proteólisis
- Tripsina, quimotripsina, elastasa, carboxipeptidasa (páncreas) continúan
- Peptidasas del borde en cepillo y transportadores de aminoácidos (intestino delgado)

**Destinos metabólicos de aminoácidos:**
1. **Síntesis proteica:** Traducción ribosomal (anabolismo)
2. **Transaminación:** Transferencia del grupo amino a un cetoácido (ALT, AST)
3. **Desaminación oxidativa:** Eliminación del grupo amino → NH₃ → urea (ciclo de la urea)
4. **Gluconeogénesis:** Aminoácidos glucogénicos (alanina, glutamina) → glucosa
5. **Cetogénesis:** Aminoácidos cetogénicos (leucina, lisina) → cuerpos cetónicos

**Balance nitrogenado:**
- Positivo: Ingesta de N > excreción (crecimiento, embarazo, recuperación)
- Negativo: Ingesta de N < excreción (inanición, enfermedad, estrés)
- Equilibrio: Ingesta = excreción (adulto sano)

### Metabolismo de Lípidos

**Digestión y absorción:**
- Sales biliares emulsifican las grasas (forman micelas)
- Lipasa pancreática hidroliza triglicéridos → 2 ácidos grasos + 2-monoacilglicerol
- Ácidos grasos de cadena larga se reesterifican en enterocitos → quilomicrones → linfa
- Ácidos grasos de cadena media/corta → directamente a sangre portal

**Rutas metabólicas:**
1. **Beta-oxidación:** Ácidos grasos → Acetil-CoA (mitocondria; cada ciclo libera 1 Acetil-CoA + NADH + FADH₂)
2. **Síntesis de ácidos grasos (lipogénesis):** Acetil-CoA → ácidos grasos (citoplasma, regulada por insulina)
3. **Cetogénesis:** Exceso de Acetil-CoA → acetoacetato, β-hidroxibutirato, acetona (hígado, durante ayuno/diabetes)

**Lipoproteínas y transporte:**
- Quilomicrones: Transportan grasas dietéticas
- VLDL: Transportan triglicéridos del hígado
- LDL: Transportan colesterol a los tejidos ("colesterol malo")
- HDL: Retiran colesterol de los tejidos ("colesterol bueno")

### Regulación Hormonal Integrada

| Hormona | Carbohidratos | Proteínas | Grasas |
|---------|---------------|-----------|--------|
| Insulina | ↑ Captación glucosa, ↑ Glucólisis, ↑ Glucogénesis | ↑ Síntesis proteica | ↑ Lipogénesis, ↓ Lipólisis |
| Glucagón | ↑ Glucogenólisis, ↑ Gluconeogénesis | ↑ Degradación proteica hepática | ↑ Lipólisis, ↑ Cetogénesis |
| Cortisol | ↑ Gluconeogénesis | ↑ Proteólisis muscular | ↑ Lipólisis |
| Epinefrina | ↑ Glucogenólisis | - | ↑ Lipólisis |

---
## Explanation

### Macronutrient Metabolism

The three macronutrients converge in energy metabolism through interconnected pathways that produce ATP (adenosine triphosphate), the cell's energy currency.

### Carbohydrate Metabolism

**Digestion and absorption:**
- Salivary and pancreatic amylase hydrolyzes starch to maltose
- Brush border disaccharidases (maltase, lactase, sucrase) produce monosaccharides
- Monosaccharides are absorbed via SGLT1 (Na+/glucose cotransport) and GLUT2/GLUT5

**Main metabolic pathways:**
1. **Glycolysis:** Glucose → 2 pyruvate (2 net ATP, cytoplasm)
2. **Oxidative decarboxylation:** Pyruvate → Acetyl-CoA (mitochondria)
3. **Krebs cycle:** Acetyl-CoA → CO₂ + NADH + FADH₂ (8 ATP equivalents/turn)
4. **Electron transport chain:** NADH/FADH₂ → 30-32 total ATP
5. **Gluconeogenesis:** Glucose synthesis from lactate, amino acids, glycerol (liver, kidney)
6. **Pentose phosphate pathway:** Generates NADPH (for biosynthesis) and ribose-5-phosphate (for nucleotides)

**Glycemic Index (GI) and Glycemic Load (GL):**
- GI: Rate at which a food raises blood glucose (reference: glucose = 100)
- GL = GI x grams of carbohydrate per serving / 100
- GL is more clinically relevant because it considers the amount consumed

### Protein Metabolism

**Digestion:**
- Pepsin (stomach, acidic pH) initiates proteolysis
- Trypsin, chymotrypsin, elastase, carboxypeptidase (pancreas) continue
- Brush border peptidases and amino acid transporters (small intestine)

**Metabolic fates of amino acids:**
1. **Protein synthesis:** Ribosomal translation (anabolism)
2. **Transamination:** Transfer of amino group to a keto acid (ALT, AST)
3. **Oxidative deamination:** Removal of amino group → NH₃ → urea (urea cycle)
4. **Gluconeogenesis:** Glucogenic amino acids (alanine, glutamine) → glucose
5. **Ketogenesis:** Ketogenic amino acids (leucine, lysine) → ketone bodies

**Nitrogen balance:**
- Positive: N intake > excretion (growth, pregnancy, recovery)
- Negative: N intake < excretion (starvation, illness, stress)
- Equilibrium: Intake = excretion (healthy adult)

### Lipid Metabolism

**Digestion and absorption:**
- Bile salts emulsify fats (form micelles)
- Pancreatic lipase hydrolyzes triglycerides → 2 fatty acids + 2-monoacylglycerol
- Long-chain fatty acids are re-esterified in enterocytes → chylomicrons → lymph
- Medium/short-chain fatty acids → directly to portal blood

**Metabolic pathways:**
1. **Beta-oxidation:** Fatty acids → Acetyl-CoA (mitochondria; each cycle releases 1 Acetyl-CoA + NADH + FADH₂)
2. **Fatty acid synthesis (lipogenesis):** Acetyl-CoA → fatty acids (cytoplasm, regulated by insulin)
3. **Ketogenesis:** Excess Acetyl-CoA → acetoacetate, β-hydroxybutyrate, acetone (liver, during fasting/diabetes)

**Lipoproteins and transport:**
- Chylomicrons: Transport dietary fats
- VLDL: Transport triglycerides from liver
- LDL: Transport cholesterol to tissues ("bad cholesterol")
- HDL: Remove cholesterol from tissues ("good cholesterol")

### Integrated Hormonal Regulation

| Hormone | Carbohydrates | Proteins | Fats |
|---------|---------------|----------|------|
| Insulin | ↑ Glucose uptake, ↑ Glycolysis, ↑ Glycogenesis | ↑ Protein synthesis | ↑ Lipogenesis, ↓ Lipolysis |
| Glucagon | ↑ Glycogenolysis, ↑ Gluconeogenesis | ↑ Hepatic protein degradation | ↑ Lipolysis, ↑ Ketogenesis |
| Cortisol | ↑ Gluconeogenesis | ↑ Muscle proteolysis | ↑ Lipolysis |
| Epinephrine | ↑ Glycogenolysis | - | ↑ Lipolysis |`,
      keyTerms: [
        { term: 'glucólisis / glycolysis', definition: 'Ruta metabólica que degrada glucosa a piruvato, produciendo 2 ATP netos en el citoplasma. | Metabolic pathway that breaks down glucose to pyruvate, producing 2 net ATP in the cytoplasm.' },
        { term: 'beta-oxidación / beta-oxidation', definition: 'Proceso mitocondrial de degradación de ácidos grasos en unidades de Acetil-CoA para producir energía. | Mitochondrial process of fatty acid degradation into Acetyl-CoA units for energy production.' },
        { term: 'ciclo de la urea / urea cycle', definition: 'Ruta hepática que convierte el amoníaco tóxico de la desaminación de aminoácidos en urea para su excreción renal. | Hepatic pathway that converts toxic ammonia from amino acid deamination into urea for renal excretion.' },
        { term: 'índice glucémico / glycemic index', definition: 'Escala de 0-100 que mide la velocidad con la que un alimento eleva la glucosa sanguínea respecto a la glucosa pura. | Scale of 0-100 measuring how quickly a food raises blood glucose relative to pure glucose.' },
        { term: 'quilomicrones / chylomicrons', definition: 'Lipoproteínas que transportan las grasas dietéticas desde el intestino a los tejidos a través del sistema linfático. | Lipoproteins that transport dietary fats from the intestine to tissues via the lymphatic system.' },
        { term: 'lipogénesis / lipogenesis', definition: 'Síntesis de ácidos grasos a partir de Acetil-CoA, estimulada por la insulina en estados de exceso calórico. | Synthesis of fatty acids from Acetyl-CoA, stimulated by insulin in caloric excess states.' },
        { term: 'balance nitrogenado / nitrogen balance', definition: 'Diferencia entre la ingesta de nitrógeno (proteínas) y su excreción; indica si el cuerpo está construyendo o perdiendo proteínas. | Difference between nitrogen (protein) intake and excretion; indicates whether the body is building or losing protein.' }
      ],
      clinicalNotes: 'Nota clínica: En pacientes con enfermedad hepática crónica, el metabolismo de todos los macronutrientes se altera significativamente. La gluconeogénesis hepática disminuye (riesgo de hipoglucemia), el ciclo de la urea se compromete (hiperamonemia), y el metabolismo lipídico se desregula. La suplementación de aminoácidos de cadena ramificada (BCAA) puede mejorar el balance nitrogenado y la encefalopatía hepática. | Clinical note: In patients with chronic liver disease, metabolism of all macronutrients is significantly altered. Hepatic gluconeogenesis decreases (hypoglycemia risk), the urea cycle is compromised (hyperammonemia), and lipid metabolism is dysregulated. Branched-chain amino acid (BCAA) supplementation may improve nitrogen balance and hepatic encephalopathy.'
    },

    4: {
      level: 4,
      summary: 'El metabolismo de macronutrientes involucra regulación alostérica y hormonal compleja a nivel de enzimas clave: la PFK-1/FBPasa-1 controlan el flujo glucolítico, la CPT-1 regula la entrada de ácidos grasos a la mitocondria (inhibida por malonyl-CoA), y mTOR integra señales nutricionales para la síntesis proteica. La flexibilidad metabólica y el concepto de ciclo de Randle explican la competencia entre sustratos. | Macronutrient metabolism involves complex allosteric and hormonal regulation at key enzymes: PFK-1/FBPase-1 control glycolytic flux, CPT-1 regulates fatty acid entry into mitochondria (inhibited by malonyl-CoA), and mTOR integrates nutritional signals for protein synthesis. Metabolic flexibility and the Randle cycle concept explain substrate competition.',
      explanation: `## Explicación

### Regulación Enzimática Avanzada del Metabolismo de Macronutrientes

#### Control de la Glucólisis y Gluconeogénesis

Los puntos de control irreversibles de la glucólisis son regulados por:

1. **Hexoquinasa/Glucoquinasa (GK):**
   - GK hepática: Km alto (~10 mM), actúa como sensor de glucosa
   - No es inhibida por producto (a diferencia de hexoquinasa muscular)
   - Regulada por la proteína reguladora de glucoquinasa (GKRP) → secuestrada en el núcleo en hipoglucemia

2. **Fosfofructoquinasa-1 (PFK-1):**
   - Enzima limitante de la velocidad de la glucólisis
   - Activada por: AMP, fructosa-2,6-bisfosfato (F-2,6-BP), Pi
   - Inhibida por: ATP, citrato, H⁺
   - F-2,6-BP es el activador alostérico más potente, producido por PFK-2/FBPasa-2

3. **Piruvato quinasa (PK):**
   - Activada por: F-1,6-BP (feed-forward)
   - Inhibida por: ATP, alanina, fosforilación por glucagón (isoforma hepática L)

**Regulación recíproca glucólisis/gluconeogénesis:**
- Insulina: ↑ PFK-2 → ↑ F-2,6-BP → ↑ PFK-1 → ↑ glucólisis
- Glucagón: ↑ FBPasa-2 → ↓ F-2,6-BP → ↓ PFK-1 + ↑ FBPasa-1 → ↑ gluconeogénesis
- PEPCK (fosfoenolpiruvato carboxiquinasa): Regulada transcripcionalmente por cortisol (↑) e insulina (↓)

#### Control de la Beta-oxidación y Lipogénesis

**CPT-1 (Carnitina Palmitoiltransferasa 1):**
- Enzima clave que controla la entrada de acil-CoA de cadena larga a la matriz mitocondrial
- **Inhibida por malonyl-CoA** (primer intermediario de la lipogénesis)
- Este mecanismo previene la oxidación y síntesis simultánea de ácidos grasos (ciclo fútil)
- CPT-1 hepática (CPT-1a) vs. muscular (CPT-1b): diferente sensibilidad a malonyl-CoA

**Acetil-CoA Carboxilasa (ACC):**
- ACC1 (citoplasma): Lipogénesis hepática
- ACC2 (mitocondria): Produce malonyl-CoA para inhibir CPT-1
- Regulación: Insulina → ↑ ACC (desfosforilación); AMPK → ↓ ACC (fosforilación)

**AMPK (Proteína Quinasa Activada por AMP):**
- Sensor energético celular maestro
- Activada por: ↑ AMP/ATP (ejercicio, ayuno, metformina)
- Efectos: ↑ oxidación de ácidos grasos, ↑ captación de glucosa, ↓ lipogénesis, ↓ síntesis proteica
- Diana terapéutica: metformina, AICAR, ejercicio

#### Señalización mTOR y Síntesis Proteica

**mTORC1 (Mammalian Target of Rapamycin Complex 1):**
- Integrador central de señales nutricionales, energéticas y de factores de crecimiento
- **Activado por:** leucina, insulina/IGF-1, suficiencia energética (↑ ATP)
- **Inhibido por:** AMPK (baja energía), rapamicina, deficiencia de aminoácidos
- Efectos: ↑ síntesis proteica (vía S6K1 y 4E-BP1), ↑ lipogénesis, ↓ autofagia

**Respuesta muscular a leucina:**
- Leucina activa mTORC1 → estimula la síntesis proteica muscular (MPS)
- Umbral de leucina: ~2-3 g por comida para máxima estimulación de MPS
- Período refractario de ~3-5 horas entre estímulos de leucina
- Relevancia clínica: distribución proteica a lo largo del día optimiza MPS

#### Ciclo de Randle (Competencia entre Sustratos)

- En presencia de ácidos grasos abundantes, la beta-oxidación genera:
  - ↑ Acetil-CoA → inhibe piruvato deshidrogenasa (PDH)
  - ↑ NADH/NAD⁺ → inhibe isocitrato deshidrogenasa
  - ↑ Citrato → inhibe PFK-1
- Resultado: La oxidación de grasas inhibe la oxidación de glucosa
- Reverso: La insulina promueve la oxidación de glucosa y suprime la de grasas
- Implicación clínica: La inflexibilidad metabólica en obesidad/diabetes tipo 2 perpetúa la resistencia a la insulina

#### Regulación Transcripcional

**SREBP-1c (Sterol Regulatory Element-Binding Protein):**
- Activado por insulina → ↑ expresión de enzimas lipogénicas (ACC, FAS, SCD-1)
- Contribuye a la esteatosis hepática en hiperinsulinemia crónica

**ChREBP (Carbohydrate Response Element-Binding Protein):**
- Activado por metabolitos de glucosa (xilulose-5-fosfato)
- ↑ Enzimas lipogénicas, independiente de insulina

**PPARα (Peroxisome Proliferator-Activated Receptor Alpha):**
- Activado por ácidos grasos y fibratos
- ↑ Beta-oxidación, ↑ cetogénesis
- Diana de fibratos (fenofibrato, bezafibrato)

---
## Explanation

### Advanced Enzymatic Regulation of Macronutrient Metabolism

#### Glycolysis and Gluconeogenesis Control

The irreversible control points of glycolysis are regulated by:

1. **Hexokinase/Glucokinase (GK):**
   - Hepatic GK: High Km (~10 mM), acts as glucose sensor
   - Not inhibited by product (unlike muscle hexokinase)
   - Regulated by glucokinase regulatory protein (GKRP) → sequestered in nucleus during hypoglycemia

2. **Phosphofructokinase-1 (PFK-1):**
   - Rate-limiting enzyme of glycolysis
   - Activated by: AMP, fructose-2,6-bisphosphate (F-2,6-BP), Pi
   - Inhibited by: ATP, citrate, H⁺
   - F-2,6-BP is the most potent allosteric activator, produced by PFK-2/FBPase-2

3. **Pyruvate kinase (PK):**
   - Activated by: F-1,6-BP (feed-forward)
   - Inhibited by: ATP, alanine, phosphorylation by glucagon (hepatic L isoform)

**Reciprocal glycolysis/gluconeogenesis regulation:**
- Insulin: ↑ PFK-2 → ↑ F-2,6-BP → ↑ PFK-1 → ↑ glycolysis
- Glucagon: ↑ FBPase-2 → ↓ F-2,6-BP → ↓ PFK-1 + ↑ FBPase-1 → ↑ gluconeogenesis
- PEPCK: Transcriptionally regulated by cortisol (↑) and insulin (↓)

#### Beta-oxidation and Lipogenesis Control

**CPT-1 (Carnitine Palmitoyltransferase 1):**
- Key enzyme controlling entry of long-chain acyl-CoA into mitochondrial matrix
- **Inhibited by malonyl-CoA** (first intermediate of lipogenesis)
- This mechanism prevents simultaneous fatty acid oxidation and synthesis (futile cycle)
- Hepatic CPT-1 (CPT-1a) vs. muscle (CPT-1b): different malonyl-CoA sensitivity

**Acetyl-CoA Carboxylase (ACC):**
- ACC1 (cytoplasm): Hepatic lipogenesis
- ACC2 (mitochondria): Produces malonyl-CoA to inhibit CPT-1
- Regulation: Insulin → ↑ ACC (dephosphorylation); AMPK → ↓ ACC (phosphorylation)

**AMPK (AMP-Activated Protein Kinase):**
- Master cellular energy sensor
- Activated by: ↑ AMP/ATP (exercise, fasting, metformin)
- Effects: ↑ fatty acid oxidation, ↑ glucose uptake, ↓ lipogenesis, ↓ protein synthesis
- Therapeutic target: metformin, AICAR, exercise

#### mTOR Signaling and Protein Synthesis

**mTORC1 (Mammalian Target of Rapamycin Complex 1):**
- Central integrator of nutritional, energy, and growth factor signals
- **Activated by:** leucine, insulin/IGF-1, energy sufficiency (↑ ATP)
- **Inhibited by:** AMPK (low energy), rapamycin, amino acid deficiency
- Effects: ↑ protein synthesis (via S6K1 and 4E-BP1), ↑ lipogenesis, ↓ autophagy

**Muscle response to leucine:**
- Leucine activates mTORC1 → stimulates muscle protein synthesis (MPS)
- Leucine threshold: ~2-3 g per meal for maximal MPS stimulation
- Refractory period of ~3-5 hours between leucine stimuli
- Clinical relevance: protein distribution throughout the day optimizes MPS

#### Randle Cycle (Substrate Competition)

- In the presence of abundant fatty acids, beta-oxidation generates:
  - ↑ Acetyl-CoA → inhibits pyruvate dehydrogenase (PDH)
  - ↑ NADH/NAD⁺ → inhibits isocitrate dehydrogenase
  - ↑ Citrate → inhibits PFK-1
- Result: Fat oxidation inhibits glucose oxidation
- Reverse: Insulin promotes glucose oxidation and suppresses fat oxidation
- Clinical implication: Metabolic inflexibility in obesity/T2DM perpetuates insulin resistance

#### Transcriptional Regulation

**SREBP-1c:**
- Activated by insulin → ↑ expression of lipogenic enzymes (ACC, FAS, SCD-1)
- Contributes to hepatic steatosis in chronic hyperinsulinemia

**ChREBP:**
- Activated by glucose metabolites (xylulose-5-phosphate)
- ↑ Lipogenic enzymes, independent of insulin

**PPARα:**
- Activated by fatty acids and fibrates
- ↑ Beta-oxidation, ↑ ketogenesis
- Target of fibrates (fenofibrate, bezafibrate)`,
      keyTerms: [
        { term: 'PFK-1 / fosfofructoquinasa-1', definition: 'Enzima limitante de la glucólisis, regulada alostéricamente por F-2,6-BP, AMP, ATP y citrato. | Rate-limiting enzyme of glycolysis, allosterically regulated by F-2,6-BP, AMP, ATP, and citrate.' },
        { term: 'CPT-1 / carnitina palmitoiltransferasa 1', definition: 'Enzima que controla la entrada de ácidos grasos a la mitocondria para beta-oxidación; inhibida por malonyl-CoA. | Enzyme controlling fatty acid entry into mitochondria for beta-oxidation; inhibited by malonyl-CoA.' },
        { term: 'mTORC1', definition: 'Complejo proteico que integra señales de nutrientes (leucina), energía e insulina para regular la síntesis proteica y el crecimiento celular. | Protein complex integrating nutrient (leucine), energy, and insulin signals to regulate protein synthesis and cell growth.' },
        { term: 'AMPK', definition: 'Sensor energético celular maestro que se activa con baja energía (↑AMP/ATP) y promueve catabolismo e inhibe anabolismo. | Master cellular energy sensor activated by low energy (↑AMP/ATP) that promotes catabolism and inhibits anabolism.' },
        { term: 'ciclo de Randle / Randle cycle', definition: 'Competencia entre glucosa y ácidos grasos como sustratos oxidativos; la oxidación de grasas inhibe la oxidación de glucosa y viceversa. | Competition between glucose and fatty acids as oxidative substrates; fat oxidation inhibits glucose oxidation and vice versa.' },
        { term: 'SREBP-1c', definition: 'Factor de transcripción activado por insulina que aumenta la expresión de enzimas lipogénicas; implicado en esteatosis hepática. | Transcription factor activated by insulin that increases expression of lipogenic enzymes; implicated in hepatic steatosis.' },
        { term: 'flexibilidad metabólica / metabolic flexibility', definition: 'Capacidad de alternar eficientemente entre oxidación de carbohidratos y grasas según disponibilidad; deteriorada en resistencia a la insulina. | Ability to efficiently switch between carbohydrate and fat oxidation based on availability; impaired in insulin resistance.' }
      ],
      clinicalNotes: 'Aplicaciones clínicas avanzadas: (1) La metformina activa AMPK, aumentando la oxidación de ácidos grasos y disminuyendo la gluconeogénesis hepática, base de su eficacia en DM2. (2) Los inhibidores de mTOR (rapamicina/sirolimus) se usan como inmunosupresores y antineoplásicos, pero causan dislipidemia e hiperglucemia por inhibición de la lipogénesis y captación de glucosa. (3) Los errores innatos del metabolismo como la enfermedad por almacenamiento de glucógeno (GSD) o los defectos de beta-oxidación (MCADD, VLCADD) requieren manejo nutricional preciso de macronutrientes. (4) Las dietas cetogénicas terapéuticas (epilepsia refractaria) funcionan al desplazar el metabolismo hacia cetogénesis y alterar la excitabilidad neuronal. | Advanced clinical applications: (1) Metformin activates AMPK, increasing fatty acid oxidation and decreasing hepatic gluconeogenesis, the basis of its efficacy in T2DM. (2) mTOR inhibitors (rapamycin/sirolimus) are used as immunosuppressants and antineoplastics but cause dyslipidemia and hyperglycemia by inhibiting lipogenesis and glucose uptake. (3) Inborn errors of metabolism such as glycogen storage disease (GSD) or beta-oxidation defects (MCADD, VLCADD) require precise macronutrient nutritional management. (4) Therapeutic ketogenic diets (refractory epilepsy) work by shifting metabolism toward ketogenesis and altering neuronal excitability.'
    },

    5: {
      level: 5,
      summary: 'La nutrigenómica y metabolómica contemporáneas revelan que la respuesta individual a macronutrientes depende de polimorfismos genéticos (TCF7L2, FTO, APOA2, FADS), composición del microbioma intestinal, ritmo circadiano de la sensibilidad a insulina, y flexibilidad metabólica medida por cociente respiratorio. La nutrición de precisión integra datos genómicos, metabolómicos, de CGM y microbioma para personalizar recomendaciones de macronutrientes. | Contemporary nutrigenomics and metabolomics reveal that individual macronutrient response depends on genetic polymorphisms (TCF7L2, FTO, APOA2, FADS), gut microbiome composition, circadian rhythm of insulin sensitivity, and metabolic flexibility measured by respiratory quotient. Precision nutrition integrates genomic, metabolomic, CGM, and microbiome data to personalize macronutrient recommendations.',
      explanation: `## Explicación

### Nutrición de Precisión y Macronutrientes

#### Nutrigenómica de Macronutrientes

**Polimorfismos clave que modifican la respuesta a macronutrientes:**

1. **TCF7L2 (rs7903146):**
   - Variante de riesgo T: ↓ secreción de insulina, ↓ efecto incretina
   - Los portadores del alelo de riesgo se benefician más de dietas bajas en carbohidratos
   - OR para DM2: ~1.4 por alelo T (mayor efecto genético conocido para DM2)

2. **FTO (rs9939609):**
   - Variante de riesgo A: ↑ ingesta calórica, ↓ saciedad, ↑ preferencia por alimentos densos en energía
   - Los portadores responden particularmente bien a dietas altas en proteína (↑ saciedad)
   - La actividad física atenúa el efecto del alelo de riesgo en ~27%

3. **APOA2 (rs5082):**
   - Homocigotos CC: Mayor respuesta adversa a grasas saturadas (↑ IMC, ↑ riesgo cardiovascular)
   - Interacción gen-dieta: Solo con ingesta de grasas saturadas >22 g/día
   - Implicación: Genotipaje puede guiar recomendaciones personalizadas de grasas

4. **FADS1/FADS2 (clúster cromosoma 11):**
   - Polimorfismos afectan la conversión de ácidos grasos esenciales a LC-PUFA
   - Variantes de baja actividad: Requieren mayor ingesta directa de EPA/DHA
   - Variación étnica significativa: Mayor frecuencia de alelos de alta actividad en poblaciones africanas

5. **AMY1 (número de copias del gen de amilasa salival):**
   - Rango: 2-16 copias; mayor número de copias en poblaciones con dietas históricamente ricas en almidón
   - Mayor número de copias → mayor producción de amilasa → mejor digestión de almidón
   - Asociación con ↓ IMC en poblaciones con dietas ricas en almidón

#### Microbioma y Respuesta a Macronutrientes

**Enterotipos y respuesta dietética:**
- **Bacteroides-dominante:** Mayor capacidad de degradación proteica y lipídica; asociado con dietas occidentales ricas en proteína animal y grasas saturadas
- **Prevotella-dominante:** Mayor capacidad de fermentación de fibra y carbohidratos complejos; asociado con dietas vegetarianas/ricas en fibra
- **Ruminococcus-dominante:** Degradación de mucinas y celulosa

**Ácidos grasos de cadena corta (AGCC/SCFA):**
- Producidos por fermentación bacteriana de fibra dietética
- **Butirato:** Fuente energética primaria de colonocitos (70% de su energía), ↑ integridad de barrera intestinal, modulador epigenético (inhibidor de HDAC), efectos antiinflamatorios
- **Propionato:** Sustrato para gluconeogénesis intestinal → señal de saciedad vía nervio vago; ↓ lipogénesis hepática
- **Acetato:** Sustrato para lipogénesis periférica; regulador del apetito vía hipotálamo

**Estudio PREDICT (2020-2024):**
- n > 10,000 participantes con monitoreo continuo de glucosa (CGM), microbioma, metabolómica
- Hallazgos clave: La variabilidad interindividual en respuesta glucémica a alimentos idénticos es enorme (r < 0.5 entre gemelos idénticos para algunos alimentos)
- Predictores principales: composición de microbioma > genética > composición corporal > horario de comida

#### Crononutrición y Macronutrientes

**Ritmo circadiano de la sensibilidad a insulina:**
- Sensibilidad a insulina máxima: mañana (7-10 AM)
- Sensibilidad a insulina mínima: noche (10 PM-2 AM)
- La tolerancia a la glucosa oral es ~30-50% menor por la noche vs. la mañana
- Implicación clínica: Mayor proporción de carbohidratos en la mañana puede optimizar el control glucémico

**Alimentación con tiempo restringido (Time-Restricted Eating, TRE):**
- Ventana de alimentación de 8-12 horas alineada con el ritmo circadiano
- TRE temprano (ej: 7 AM - 3 PM) muestra mayores beneficios metabólicos que TRE tardío
- Mecanismos: Alineación con oscilaciones circadianas de enzimas metabólicas (BMAL1, CLOCK, REV-ERBα)
- Evidencia: ↓ Resistencia a insulina, ↓ presión arterial, ↓ estrés oxidativo (datos emergentes)

#### Flexibilidad Metabólica: Evaluación Clínica

**Cociente Respiratorio (RQ):**
- RQ = VCO₂/VO₂
- Oxidación pura de carbohidratos: RQ = 1.0
- Oxidación pura de grasas: RQ = 0.7
- Oxidación mixta/proteínas: RQ ≈ 0.8
- Lipogénesis de novo: RQ > 1.0

**Evaluación de flexibilidad metabólica:**
- ΔRQ (ayuno → postprandial): Indica capacidad de cambiar entre sustratos
- Individuos metabólicamente inflexibles: ΔRQ bajo (no cambian de oxidación de grasas en ayuno a oxidación de carbohidratos postprandial)
- Predictor de resistencia a la insulina y ganancia de peso futura

#### Controversias y Evidencia Actual

**Dietas bajas en carbohidratos vs. bajas en grasas (DIETFITS, 2018):**
- n = 609, seguimiento 12 meses
- Sin diferencia significativa en pérdida de peso entre dieta baja en carbohidratos (-6.0 kg) vs. baja en grasas (-5.3 kg)
- Ni el genotipo (panel de 3 SNPs) ni la secreción de insulina predijeron la respuesta a la dieta asignada
- Conclusión: La adherencia, no la composición de macronutrientes, es el predictor principal de éxito

**Proteína y función renal (meta-análisis 2024):**
- En individuos con función renal normal: Ingesta alta de proteínas (hasta 2.0 g/kg/día) no causa deterioro renal
- En ERC existente: Restricción a 0.6-0.8 g/kg/día puede retrasar progresión
- En DM2 sin ERC: Dietas altas en proteína mejoran control glucémico sin deterioro de TFG

**Grasas saturadas: Paradigma en evolución:**
- Meta-análisis de estudios prospectivos: Grasas saturadas totales no se asocian significativamente con mortalidad cardiovascular
- Sin embargo: El alimento de origen importa (lácteos vs. carne procesada)
- Sustitución isocalórica: Reemplazar saturadas por poliinsaturadas reduce riesgo CV en ~25%
- Enfoque actual: Calidad del alimento completo > composición de macronutrientes aislados

---
## Explanation

### Precision Nutrition and Macronutrients

#### Macronutrient Nutrigenomics

**Key polymorphisms modifying macronutrient response:**

1. **TCF7L2 (rs7903146):**
   - Risk variant T: ↓ insulin secretion, ↓ incretin effect
   - Risk allele carriers benefit more from low-carb diets
   - OR for T2DM: ~1.4 per T allele (largest known genetic effect for T2DM)

2. **FTO (rs9939609):**
   - Risk variant A: ↑ caloric intake, ↓ satiety, ↑ preference for energy-dense foods
   - Carriers respond particularly well to high-protein diets (↑ satiety)
   - Physical activity attenuates risk allele effect by ~27%

3. **APOA2 (rs5082):**
   - CC homozygotes: Greater adverse response to saturated fats (↑ BMI, ↑ CV risk)
   - Gene-diet interaction: Only with saturated fat intake >22 g/day
   - Implication: Genotyping may guide personalized fat recommendations

4. **FADS1/FADS2 (chromosome 11 cluster):**
   - Polymorphisms affect essential fatty acid conversion to LC-PUFA
   - Low-activity variants: Require greater direct EPA/DHA intake
   - Significant ethnic variation: Higher frequency of high-activity alleles in African populations

5. **AMY1 (salivary amylase gene copy number):**
   - Range: 2-16 copies; higher copy number in populations with historically starch-rich diets
   - Higher copy number → more amylase production → better starch digestion
   - Association with ↓ BMI in populations with starch-rich diets

#### Microbiome and Macronutrient Response

**Enterotypes and dietary response:**
- **Bacteroides-dominant:** Greater protein and lipid degradation capacity; associated with Western diets rich in animal protein and saturated fats
- **Prevotella-dominant:** Greater fiber and complex carbohydrate fermentation capacity; associated with vegetarian/fiber-rich diets
- **Ruminococcus-dominant:** Mucin and cellulose degradation

**Short-chain fatty acids (SCFA):**
- Produced by bacterial fermentation of dietary fiber
- **Butyrate:** Primary energy source for colonocytes (70% of their energy), ↑ intestinal barrier integrity, epigenetic modulator (HDAC inhibitor), anti-inflammatory effects
- **Propionate:** Substrate for intestinal gluconeogenesis → satiety signal via vagus nerve; ↓ hepatic lipogenesis
- **Acetate:** Substrate for peripheral lipogenesis; appetite regulator via hypothalamus

**PREDICT Study (2020-2024):**
- n > 10,000 participants with continuous glucose monitoring (CGM), microbiome, metabolomics
- Key findings: Interindividual variability in glycemic response to identical foods is enormous (r < 0.5 between identical twins for some foods)
- Main predictors: microbiome composition > genetics > body composition > meal timing

#### Chrononutrition and Macronutrients

**Circadian rhythm of insulin sensitivity:**
- Peak insulin sensitivity: morning (7-10 AM)
- Lowest insulin sensitivity: night (10 PM-2 AM)
- Oral glucose tolerance is ~30-50% lower at night vs. morning
- Clinical implication: Higher proportion of carbs in the morning may optimize glycemic control

**Time-Restricted Eating (TRE):**
- 8-12 hour eating window aligned with circadian rhythm
- Early TRE (e.g., 7 AM - 3 PM) shows greater metabolic benefits than late TRE
- Mechanisms: Alignment with circadian oscillations of metabolic enzymes (BMAL1, CLOCK, REV-ERBα)
- Evidence: ↓ Insulin resistance, ↓ blood pressure, ↓ oxidative stress (emerging data)

#### Metabolic Flexibility: Clinical Assessment

**Respiratory Quotient (RQ):**
- RQ = VCO₂/VO₂
- Pure carbohydrate oxidation: RQ = 1.0
- Pure fat oxidation: RQ = 0.7
- Mixed/protein oxidation: RQ ≈ 0.8
- De novo lipogenesis: RQ > 1.0

**Metabolic flexibility assessment:**
- ΔRQ (fasting → postprandial): Indicates substrate switching capacity
- Metabolically inflexible individuals: Low ΔRQ (fail to switch from fasting fat oxidation to postprandial carb oxidation)
- Predictor of insulin resistance and future weight gain

#### Controversies and Current Evidence

**Low-carb vs. low-fat diets (DIETFITS, 2018):**
- n = 609, 12-month follow-up
- No significant difference in weight loss between low-carb (-6.0 kg) vs. low-fat (-5.3 kg)
- Neither genotype (3-SNP panel) nor insulin secretion predicted response to assigned diet
- Conclusion: Adherence, not macronutrient composition, is the main predictor of success

**Protein and renal function (2024 meta-analysis):**
- In individuals with normal renal function: High protein intake (up to 2.0 g/kg/day) does not cause renal deterioration
- In existing CKD: Restriction to 0.6-0.8 g/kg/day may slow progression
- In T2DM without CKD: High-protein diets improve glycemic control without GFR deterioration

**Saturated fats: Evolving paradigm:**
- Prospective study meta-analyses: Total saturated fats not significantly associated with CV mortality
- However: The food of origin matters (dairy vs. processed meat)
- Isocaloric substitution: Replacing saturated with polyunsaturated fats reduces CV risk by ~25%
- Current approach: Whole food quality > isolated macronutrient composition`,
      keyTerms: [
        { term: 'nutrigenómica / nutrigenomics', definition: 'Estudio de cómo las variantes genéticas individuales afectan la respuesta metabólica a nutrientes específicos y modifican el riesgo de enfermedad. | Study of how individual genetic variants affect metabolic response to specific nutrients and modify disease risk.' },
        { term: 'enterotipo / enterotype', definition: 'Clasificación del microbioma intestinal según los géneros bacterianos dominantes (Bacteroides, Prevotella, Ruminococcus); puede predecir la respuesta metabólica a la dieta. | Gut microbiome classification based on dominant bacterial genera (Bacteroides, Prevotella, Ruminococcus); may predict metabolic response to diet.' },
        { term: 'crononutrición / chrononutrition', definition: 'Estudio de la interacción entre el ritmo circadiano y la nutrición; la hora de ingesta influye en la respuesta metabólica a los macronutrientes. | Study of the interaction between circadian rhythm and nutrition; meal timing influences metabolic response to macronutrients.' },
        { term: 'cociente respiratorio (RQ) / respiratory quotient', definition: 'Relación VCO₂/VO₂ que indica qué sustrato energético predomina: 1.0 = carbohidratos, 0.7 = grasas, 0.8 = mixto. | VCO₂/VO₂ ratio indicating which energy substrate predominates: 1.0 = carbohydrates, 0.7 = fats, 0.8 = mixed.' },
        { term: 'TCF7L2', definition: 'Gen con la variante de mayor efecto conocido para riesgo de DM2; los portadores del alelo de riesgo pueden beneficiarse de restricción de carbohidratos. | Gene with the largest known effect variant for T2DM risk; risk allele carriers may benefit from carbohydrate restriction.' },
        { term: 'PREDICT (estudio)', definition: 'Estudio de cohorte de >10,000 personas que demostró que la respuesta glucémica a alimentos idénticos varía enormemente entre individuos, dependiendo más del microbioma que de la genética. | Cohort study of >10,000 people showing that glycemic response to identical foods varies enormously between individuals, depending more on microbiome than genetics.' }
      ],
      clinicalNotes: 'Implicaciones para la práctica clínica: (1) Las recomendaciones universales de macronutrientes (ej: AMDR) son un punto de partida, pero la nutrición de precisión puede optimizar resultados individuales. (2) El monitoreo continuo de glucosa (CGM) en pacientes no diabéticos puede identificar alimentos que causan picos glucémicos excesivos en individuos específicos. (3) La composición del microbioma puede predecir la respuesta glucémica mejor que el índice glucémico del alimento. (4) La distribución temporal de macronutrientes (más carbohidratos por la mañana) puede mejorar el control metabólico. (5) En la práctica, la adherencia al patrón dietético es más importante que la composición exacta de macronutrientes; el enfoque debe ser en calidad de alimentos completos. | Clinical practice implications: (1) Universal macronutrient recommendations (e.g., AMDR) are a starting point, but precision nutrition may optimize individual outcomes. (2) Continuous glucose monitoring (CGM) in non-diabetic patients can identify foods causing excessive glycemic spikes in specific individuals. (3) Microbiome composition may predict glycemic response better than food glycemic index. (4) Temporal distribution of macronutrients (more carbs in morning) may improve metabolic control. (5) In practice, adherence to dietary pattern is more important than exact macronutrient composition; focus should be on whole food quality.'
    }
  },

  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-2',
      type: 'textbook',
      title: 'Harper\'s Illustrated Biochemistry, 32nd Edition',
      authors: ['Rodwell, V.W.', 'Bender, D.A.', 'Botham, K.M.', 'Kennelly, P.J.', 'Weil, P.A.'],
      source: 'McGraw-Hill Education',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Effect of Low-Fat vs Low-Carbohydrate Diet on 12-Month Weight Loss (DIETFITS)',
      authors: ['Gardner, C.D.', 'Trepanowski, J.F.', 'Del Gobbo, L.C.'],
      source: 'JAMA, 319(7), 667-679, 2018',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Predicting personal metabolic responses to food using multi-omics machine learning (PREDICT)',
      authors: ['Berry, S.E.', 'Valdes, A.M.', 'Drew, D.A.'],
      source: 'Nature Medicine, 26, 964-973, 2020',
      license: 'CC BY 4.0'
    }
  ],
  crossReferences: [
    { targetId: 'topic-micronutrientes', targetType: 'topic', relationship: 'sibling', label: 'Micronutrientes / Micronutrients' },
    { targetId: 'topic-nutricion-diabetes', targetType: 'topic', relationship: 'related', label: 'Nutrición para Diabéticos / Diabetic Nutrition' },
    { targetId: 'topic-nutricion-cardiaca', targetType: 'topic', relationship: 'related', label: 'Nutrición Cardiosaludable / Heart-Healthy Nutrition' }
  ],
  tags: {
    systems: ['digestive', 'endocrine', 'musculoskeletal'],
    topics: ['nutrition', 'metabolism', 'macronutrients', 'biochemistry'],
    keywords: ['carbohidratos', 'proteínas', 'grasas', 'carbohydrates', 'proteins', 'fats', 'glucólisis', 'beta-oxidación', 'aminoácidos', 'nutrigenómica', 'microbioma'],
    clinicalRelevance: 'high'
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
