import { EducationalContent } from '../types';

/**
 * Nutrición para Diabéticos / Diabetic Nutrition
 *
 * Contenido educativo bilingue (español primero) sobre la terapia nutricional
 * médica en diabetes mellitus tipo 1 y tipo 2. Cubre conteo de carbohidratos,
 * índice glucémico, planificación de comidas, y guías ADA actualizadas.
 *
 * Bilingual educational content (Spanish first) on medical nutrition therapy
 * in type 1 and type 2 diabetes mellitus. Covers carbohydrate counting,
 * glycemic index, meal planning, and updated ADA guidelines.
 */

export const nutricionDiabetesDiabeticNutrition: EducationalContent = {
  id: 'topic-nutricion-diabetes',
  type: 'topic',
  name: 'Diabetic Nutrition',
  nameEs: 'Nutrición para Diabéticos',
  alternateNames: ['Dieta para Diabetes', 'Terapia Nutricional Médica en Diabetes', 'Medical Nutrition Therapy for Diabetes', 'MNT Diabetes', 'Diabetic Diet'],

  levels: {
    1: {
      level: 1,
      summary: 'La nutrición para diabéticos se trata de comer de forma inteligente para mantener el azúcar en la sangre en niveles saludables. No es una dieta de prohibiciones sino de aprender a elegir bien los alimentos, especialmente los carbohidratos. | Diabetic nutrition is about eating smartly to keep blood sugar at healthy levels. It is not a diet of prohibitions but about learning to choose foods wisely, especially carbohydrates.',
      explanation: `## Explicación

La diabetes es una condición donde tu cuerpo tiene problemas para manejar el azúcar (glucosa) en la sangre. La buena noticia es que lo que comes tiene un gran poder para controlar tus niveles de azúcar.

### ¿Qué Pasa con la Comida y el Azúcar en la Sangre?

Cuando comes, la comida se convierte en azúcar (glucosa) que va a tu sangre. Tu cuerpo usa una hormona llamada **insulina** para mover esa azúcar de la sangre a las células donde se usa como energía.

- En la **diabetes tipo 1**, el cuerpo no produce insulina
- En la **diabetes tipo 2**, el cuerpo no usa bien la insulina que produce

### Los Carbohidratos Son la Clave

De los tres macronutrientes (carbohidratos, proteínas, grasas), los **carbohidratos** son los que más suben el azúcar en la sangre.

**Alimentos con muchos carbohidratos:**
- Pan, tortillas, arroz, pasta, cereales
- Frutas y jugos de fruta
- Leche y yogur
- Dulces, refrescos, pasteles
- Papa, camote, elote

**Alimentos con pocos o cero carbohidratos:**
- Carnes, pescado, pollo, huevos
- Verduras verdes (lechuga, espinacas, brócoli)
- Queso, nueces, aguacate
- Aceites y mantequilla

### El Método del Plato para Diabéticos

Una forma fácil de comer bien es usar el **Método del Plato**:
- **½ del plato:** Verduras sin almidón (ensalada, brócoli, ejotes, nopales)
- **¼ del plato:** Proteínas (carne, pollo, pescado, frijoles)
- **¼ del plato:** Carbohidratos (arroz, tortilla, papa, fruta)
- **Bebida:** Agua o bebida sin azúcar

### Consejos Prácticos

1. **Come a horas regulares** - No te saltes comidas
2. **Controla las porciones** - No es solo qué comes sino cuánto comes
3. **Elige carbohidratos integrales** - Pan integral en vez de pan blanco
4. **Toma agua** - Evita refrescos y jugos con azúcar
5. **Come más verduras** - Son tus mejores amigas

---
## Explanation

Diabetes is a condition where your body has trouble managing sugar (glucose) in the blood. The good news is that what you eat has great power to control your sugar levels.

### What Happens with Food and Blood Sugar?

When you eat, food turns into sugar (glucose) that goes into your blood. Your body uses a hormone called **insulin** to move that sugar from the blood to cells where it is used as energy.

- In **type 1 diabetes**, the body doesn't produce insulin
- In **type 2 diabetes**, the body doesn't use insulin well

### Carbohydrates Are Key

Of the three macronutrients (carbohydrates, proteins, fats), **carbohydrates** raise blood sugar the most.

**High-carbohydrate foods:**
- Bread, tortillas, rice, pasta, cereals
- Fruits and fruit juices
- Milk and yogurt
- Sweets, sodas, cakes
- Potato, sweet potato, corn

**Low or zero-carbohydrate foods:**
- Meat, fish, chicken, eggs
- Green vegetables (lettuce, spinach, broccoli)
- Cheese, nuts, avocado
- Oils and butter

### The Diabetes Plate Method

An easy way to eat well is to use the **Plate Method**:
- **½ of the plate:** Non-starchy vegetables (salad, broccoli, green beans, nopales/cactus)
- **¼ of the plate:** Proteins (meat, chicken, fish, beans)
- **¼ of the plate:** Carbohydrates (rice, tortilla, potato, fruit)
- **Drink:** Water or sugar-free beverage

### Practical Tips

1. **Eat at regular times** - Don't skip meals
2. **Control portions** - It's not just what you eat but how much
3. **Choose whole grain carbs** - Whole wheat bread instead of white bread
4. **Drink water** - Avoid sodas and juices with sugar
5. **Eat more vegetables** - They are your best friends`,
      keyTerms: [
        { term: 'glucosa / glucose', definition: 'El tipo de azúcar que circula en tu sangre y que tus células usan como energía. | The type of sugar that circulates in your blood and that your cells use as energy.' },
        { term: 'insulina / insulin', definition: 'La hormona que ayuda a mover la glucosa de la sangre hacia las células. | The hormone that helps move glucose from the blood into cells.' },
        { term: 'carbohidratos / carbohydrates', definition: 'El tipo de alimento que más sube el azúcar en la sangre; incluye pan, arroz, frutas y dulces. | The type of food that raises blood sugar the most; includes bread, rice, fruits, and sweets.' },
        { term: 'Método del Plato / Plate Method', definition: 'Una forma visual fácil de planificar comidas saludables para diabéticos: ½ verduras, ¼ proteínas, ¼ carbohidratos. | An easy visual way to plan healthy meals for diabetics: ½ vegetables, ¼ proteins, ¼ carbohydrates.' }
      ],
      analogies: [
        'Los carbohidratos son como leña en una fogata: si echas mucha de golpe, el fuego (azúcar en sangre) sube rápidamente. Si echas poquita y despacio, el fuego se mantiene controlado. | Carbohydrates are like firewood in a campfire: if you throw in a lot at once, the fire (blood sugar) rises quickly. If you add a little slowly, the fire stays controlled.',
        'La insulina es como una llave que abre la puerta de las células para que entre la glucosa. En diabetes, esa llave no funciona bien. | Insulin is like a key that opens the door of cells so glucose can enter. In diabetes, that key does not work well.',
        'El Método del Plato es como un semáforo: verde para verduras (come mucho), amarillo para carbohidratos (con cuidado), rojo para dulces (casi nada). | The Plate Method is like a traffic light: green for vegetables (eat lots), yellow for carbs (with care), red for sweets (almost none).'
      ],
      examples: [
        'En lugar de un vaso grande de jugo de naranja (mucha azúcar rápida), come una naranja entera: tiene fibra que hace que el azúcar suba más lentamente. | Instead of a big glass of orange juice (lots of fast sugar), eat a whole orange: it has fiber that makes sugar rise more slowly.',
        'Un desayuno saludable para un diabético puede ser: huevos revueltos con nopales y una tortilla integral con un poco de frijoles. | A healthy breakfast for a diabetic can be: scrambled eggs with nopales (cactus) and a whole wheat tortilla with some beans.'
      ],
      patientCounselingPoints: [
        'No tienes que dejar de comer lo que te gusta, pero aprende las porciones adecuadas, especialmente de carbohidratos. | You don\'t have to stop eating what you like, but learn proper portions, especially of carbohydrates.',
        'Revisa las etiquetas de los alimentos: busca los "carbohidratos totales" para saber cuánto azúcar aporta cada alimento. | Check food labels: look for "total carbohydrates" to know how much sugar each food provides.',
        'Combina carbohidratos con proteínas o grasas saludables para que el azúcar suba más lentamente. | Combine carbohydrates with proteins or healthy fats so sugar rises more slowly.'
      ]
    },

    2: {
      level: 2,
      summary: 'La terapia nutricional médica (TNM) para diabetes se basa en el conteo de carbohidratos (30-60 g por comida como punto de partida), el índice glucémico, la distribución regular de comidas, y la combinación de macronutrientes para moderar la respuesta glucémica postprandial. Las guías ADA enfatizan un enfoque individualizado sin una proporción ideal única de macronutrientes. | Medical nutrition therapy (MNT) for diabetes is based on carbohydrate counting (30-60 g per meal as a starting point), glycemic index, regular meal distribution, and macronutrient combination to moderate postprandial glycemic response. ADA guidelines emphasize an individualized approach without a single ideal macronutrient ratio.',
      explanation: `## Explicación

### Terapia Nutricional Médica en Diabetes

La nutrición es fundamental en el manejo de la diabetes. La Asociación Americana de Diabetes (ADA) recomienda que cada persona con diabetes reciba **terapia nutricional médica (TNM)** individualizada, idealmente con un dietista certificado.

### Conteo de Carbohidratos

**Conceptos básicos:**
- 1 "porción" de carbohidratos = 15 gramos de carbohidratos
- La mayoría de los adultos con diabetes necesitan 30-60 g de carbohidratos por comida (2-4 porciones)
- Los snacks generalmente tienen 15-30 g de carbohidratos

**Ejemplos de 1 porción de carbohidratos (15 g):**
- 1 rebanada de pan
- 1 tortilla de maíz pequeña (15 cm)
- ⅓ taza de arroz cocido
- ½ taza de avena cocida
- 1 fruta pequeña (manzana, naranja)
- 1 taza de leche
- ½ taza de frijoles cocidos

### Índice Glucémico (IG) y Carga Glucémica (CG)

**Índice Glucémico:** Qué tan rápido un alimento sube el azúcar en la sangre (escala 0-100):
- **Bajo IG (<55):** Frijoles, lentejas, avena, manzana, leche → liberación lenta de glucosa
- **Medio IG (56-69):** Arroz integral, pan integral, plátano maduro
- **Alto IG (>70):** Pan blanco, arroz blanco, papa, sandía, cereales azucarados → pico rápido de glucosa

**Carga Glucémica:** IG × cantidad de carbohidratos = impacto real. Una sandía tiene IG alto pero poca cantidad de carbohidratos por porción, así que su CG es moderada.

**Factores que bajan el IG de una comida:**
- Agregar fibra (verduras, legumbres)
- Agregar proteínas (carne, huevo, queso)
- Agregar grasas saludables (aguacate, nueces, aceite de oliva)
- Cocción al dente (pasta menos cocida tiene menor IG)
- Ácidos (vinagre, limón)

### Distribución de Comidas

- **3 comidas principales + 1-2 snacks** distribuidos regularmente
- No saltarse comidas (riesgo de hipoglucemia con ciertos medicamentos o insulina)
- Consistencia en la cantidad de carbohidratos en cada comida
- Comer carbohidratos junto con proteínas y grasas para moderar la glucosa

### Alimentos que Debes Preferir

| Grupo | Preferir | Limitar |
|-------|----------|---------|
| Carbohidratos | Integrales, legumbres, verduras | Refinados, azúcares, jugos |
| Proteínas | Pescado, pollo, frijoles, tofu | Carnes procesadas, embutidos |
| Grasas | Aguacate, nueces, aceite de oliva | Manteca, frituras, grasas trans |
| Bebidas | Agua, té sin azúcar | Refrescos, jugos, alcohol en exceso |

### Fibra Dietética

- Meta: 25-35 g/día (o 14 g por cada 1000 kcal)
- La fibra soluble (avena, frijoles, manzana) forma un gel que retarda la absorción de glucosa
- ↑ fibra → mejor control glucémico, ↓ colesterol LDL, ↑ saciedad

---
## Explanation

### Medical Nutrition Therapy in Diabetes

Nutrition is fundamental in diabetes management. The American Diabetes Association (ADA) recommends that every person with diabetes receive individualized **medical nutrition therapy (MNT)**, ideally with a certified dietitian.

### Carbohydrate Counting

**Basic concepts:**
- 1 carbohydrate "serving" = 15 grams of carbohydrates
- Most adults with diabetes need 30-60 g of carbohydrates per meal (2-4 servings)
- Snacks generally have 15-30 g of carbohydrates

**Examples of 1 carbohydrate serving (15 g):**
- 1 slice of bread
- 1 small corn tortilla (6 inches)
- ⅓ cup cooked rice
- ½ cup cooked oatmeal
- 1 small fruit (apple, orange)
- 1 cup of milk
- ½ cup cooked beans

### Glycemic Index (GI) and Glycemic Load (GL)

**Glycemic Index:** How fast a food raises blood sugar (scale 0-100):
- **Low GI (<55):** Beans, lentils, oatmeal, apple, milk → slow glucose release
- **Medium GI (56-69):** Brown rice, whole wheat bread, ripe banana
- **High GI (>70):** White bread, white rice, potato, watermelon, sugary cereals → rapid glucose spike

**Glycemic Load:** GI x amount of carbohydrates = actual impact. Watermelon has high GI but little carbohydrate per serving, so its GL is moderate.

**Factors that lower a meal's GI:**
- Adding fiber (vegetables, legumes)
- Adding proteins (meat, egg, cheese)
- Adding healthy fats (avocado, nuts, olive oil)
- Al dente cooking (less cooked pasta has lower GI)
- Acids (vinegar, lemon)

### Meal Distribution

- **3 main meals + 1-2 snacks** distributed regularly
- Don't skip meals (hypoglycemia risk with certain medications or insulin)
- Consistency in the amount of carbohydrates at each meal
- Eat carbohydrates together with proteins and fats to moderate glucose

### Foods to Prefer

| Group | Prefer | Limit |
|-------|--------|-------|
| Carbohydrates | Whole grains, legumes, vegetables | Refined, sugars, juices |
| Proteins | Fish, chicken, beans, tofu | Processed meats, deli meats |
| Fats | Avocado, nuts, olive oil | Lard, fried foods, trans fats |
| Drinks | Water, unsweetened tea | Sodas, juices, excess alcohol |

### Dietary Fiber

- Goal: 25-35 g/day (or 14 g per 1000 kcal)
- Soluble fiber (oatmeal, beans, apple) forms a gel that slows glucose absorption
- ↑ fiber → better glycemic control, ↓ LDL cholesterol, ↑ satiety`,
      keyTerms: [
        { term: 'conteo de carbohidratos / carbohydrate counting', definition: 'Método para planificar las comidas basado en cuántos gramos de carbohidratos contiene cada alimento; 1 porción = 15 g de carbohidratos. | Method for planning meals based on how many grams of carbohydrates each food contains; 1 serving = 15 g of carbohydrates.' },
        { term: 'índice glucémico (IG) / glycemic index (GI)', definition: 'Escala de 0-100 que clasifica qué tan rápido un alimento eleva la glucosa sanguínea; bajo (<55) es mejor para diabéticos. | Scale of 0-100 ranking how quickly a food raises blood glucose; low (<55) is better for diabetics.' },
        { term: 'carga glucémica (CG) / glycemic load (GL)', definition: 'Medida que combina el IG con la cantidad real de carbohidratos por porción; más útil que el IG solo para predecir la respuesta glucémica. | Measure combining GI with the actual amount of carbohydrates per serving; more useful than GI alone for predicting glycemic response.' },
        { term: 'terapia nutricional médica (TNM) / medical nutrition therapy (MNT)', definition: 'Asesoramiento nutricional individualizado por un dietista certificado como parte del tratamiento de la diabetes. | Individualized nutritional counseling by a certified dietitian as part of diabetes treatment.' },
        { term: 'fibra soluble / soluble fiber', definition: 'Tipo de fibra que se disuelve en agua formando un gel viscoso que retarda la absorción de glucosa y reduce el colesterol. | Type of fiber that dissolves in water forming a viscous gel that slows glucose absorption and reduces cholesterol.' },
        { term: 'glucosa postprandial / postprandial glucose', definition: 'Nivel de azúcar en la sangre después de comer; la meta es generalmente <180 mg/dL a las 1-2 horas. | Blood sugar level after eating; the goal is generally <180 mg/dL at 1-2 hours.' }
      ]
    },

    3: {
      level: 3,
      summary: 'La terapia nutricional médica en diabetes integra el conteo avanzado de carbohidratos con ratios de insulina a carbohidratos (ICR), factores de sensibilidad a insulina (ISF), conceptos de equivalentes glucémicos de proteínas y grasas, y monitoreo continuo de glucosa para retroalimentación en tiempo real. Las dietas bajas en carbohidratos (<130 g/día) y mediterránea muestran la mayor evidencia para mejorar HbA1c y marcadores cardiometabólicos. | Medical nutrition therapy in diabetes integrates advanced carbohydrate counting with insulin-to-carb ratios (ICR), insulin sensitivity factors (ISF), concepts of fat-protein units, and continuous glucose monitoring for real-time feedback. Low-carbohydrate (<130 g/day) and Mediterranean diets show the strongest evidence for improving HbA1c and cardiometabolic markers.',
      explanation: `## Explicación

### Conteo Avanzado de Carbohidratos y Dosificación de Insulina

#### Ratio Insulina-Carbohidrato (ICR)

En pacientes con DM1 o DM2 con esquema basal-bolo, la dosis de insulina rápida se calcula usando la ICR:

**Fórmula:** Dosis de insulina prandial = Carbohidratos de la comida (g) / ICR

- ICR típica inicial: Regla del 500 → ICR = 500 / Dosis diaria total de insulina (DDT)
- Ejemplo: DDT = 50 U → ICR = 500/50 = 10 → 1 unidad de insulina por cada 10 g de carbohidratos
- La ICR varía durante el día (generalmente menor en la mañana = más insulina necesaria por gramo de carbohidrato)

#### Factor de Sensibilidad a la Insulina (ISF)

Para correcciones de hiperglucemia:

**Fórmula:** Dosis correctiva = (Glucosa actual - Glucosa meta) / ISF

- ISF inicial: Regla del 1800 (análogos rápidos) → ISF = 1800 / DDT
- Ejemplo: DDT = 50 U → ISF = 1800/50 = 36 → 1 unidad de insulina baja la glucosa ~36 mg/dL

#### Efecto de Proteínas y Grasas en la Glucemia

Las comidas ricas en proteínas y grasas causan hiperglucemia tardía (3-5 horas postprandial):

**Unidades de Grasa-Proteína (FPU):**
- Se calculan los gramos de grasa y proteína, se convierten a calorías, y se divide entre 100
- FPU = [(g proteína × 4) + (g grasa × 9)] / 100
- Por cada FPU, se añade ~1 unidad de insulina, administrada como bolo extendido (en bomba) o con insulina intermedia
- Relevancia: Comidas como pizza, hamburguesas, o carnes grasas causan hiperglucemia tardía que el conteo simple de carbohidratos no predice

### Patrones Dietéticos con Evidencia en Diabetes

#### 1. Dieta Baja en Carbohidratos

- **Definición:** <130 g/día de carbohidratos (vs. ~250-300 g en dieta estándar)
- **Muy baja en carbohidratos (cetogénica):** <50 g/día → producción de cuerpos cetónicos
- **Evidencia:**
  - Meta-análisis (2021): Dieta baja en carbohidratos → ↓ HbA1c ~0.47% vs. dieta convencional a 6 meses
  - Mejora marcada en triglicéridos y HDL
  - Puede permitir reducción significativa de medicamentos hipoglucemiantes
- **Precauciones:** Riesgo de hipoglucemia si no se ajustan medicamentos; cetoacidosis en DM1; sostenibilidad a largo plazo

#### 2. Dieta Mediterránea

- **Composición:** Rica en aceite de oliva, pescado, frutas, verduras, legumbres, nueces; moderada en vino; baja en carne roja y procesados
- **Evidencia (PREDIMED):**
  - ↓ 30% eventos cardiovasculares mayores (con aceite de oliva extra virgen)
  - ↓ Incidencia de DM2 en ~30-50% en personas de alto riesgo
  - Mejora HbA1c ~0.3-0.5%
  - ↓ Inflamación sistémica (PCR, IL-6)

#### 3. Dieta DASH (Enfoques Dietéticos para Detener la Hipertensión)

- Rica en frutas, verduras, lácteos bajos en grasa, cereales integrales
- ↓ Sodio (<2300 mg/día, idealmente <1500 mg)
- Beneficio adicional en diabéticos hipertensos: ↓ PA sistólica ~5-6 mmHg

### Monitoreo Continuo de Glucosa (CGM) y Nutrición

El CGM permite ver en tiempo real el efecto de cada alimento:

- **Tiempo en rango (TIR):** Meta: >70% del tiempo entre 70-180 mg/dL
- **Variabilidad glucémica (CV):** Meta: <36%
- El CGM permite identificar patrones individuales de respuesta a alimentos específicos
- Retroalimentación en tiempo real para ajustar porciones, combinaciones y horarios

### Edulcorantes Artificiales y Diabetes

| Edulcorante | Efecto glucémico | Consideraciones |
|-------------|-----------------|-----------------|
| Sucralosa | Mínimo | Evidencia contradictoria sobre microbioma |
| Stevia | Ninguno | Generalmente seguro; posible efecto en microbioma |
| Aspartame | Ninguno | Seguro en dosis normales; evidencia de asociación con microbioma |
| Sacarina | Ninguno | Datos de ratones sugieren alteración del microbioma |
| Alulosa | Mínimo | ↓ Glucosa postprandial; bien tolerado |
| Eritritol | Ninguno | Estudios recientes sugieren asociación con riesgo CV (datos preliminares) |

### Alcohol y Diabetes

- El alcohol inhibe la gluconeogénesis hepática → riesgo de hipoglucemia (especialmente con insulina o sulfonilureas)
- Si se consume: ≤1 bebida/día (mujeres), ≤2/día (hombres)
- Siempre acompañar con alimento
- Las cervezas y vinos dulces aportan carbohidratos → hiperglucemia inicial seguida de hipoglucemia tardía

---
## Explanation

### Advanced Carbohydrate Counting and Insulin Dosing

#### Insulin-to-Carb Ratio (ICR)

In patients with T1DM or T2DM on basal-bolus regimen, rapid insulin dose is calculated using the ICR:

**Formula:** Prandial insulin dose = Meal carbohydrates (g) / ICR

- Typical initial ICR: Rule of 500 → ICR = 500 / Total daily dose of insulin (TDD)
- Example: TDD = 50 U → ICR = 500/50 = 10 → 1 unit of insulin per 10 g of carbohydrates
- ICR varies throughout the day (generally lower in the morning = more insulin needed per gram of carbohydrate)

#### Insulin Sensitivity Factor (ISF)

For hyperglycemia corrections:

**Formula:** Correction dose = (Current glucose - Target glucose) / ISF

- Initial ISF: Rule of 1800 (rapid analogs) → ISF = 1800 / TDD
- Example: TDD = 50 U → ISF = 1800/50 = 36 → 1 unit of insulin lowers glucose ~36 mg/dL

#### Effect of Proteins and Fats on Glycemia

Meals rich in proteins and fats cause delayed hyperglycemia (3-5 hours postprandial):

**Fat-Protein Units (FPU):**
- Calculate grams of fat and protein, convert to calories, divide by 100
- FPU = [(g protein x 4) + (g fat x 9)] / 100
- For each FPU, add ~1 unit of insulin, administered as extended bolus (on pump) or with intermediate insulin
- Relevance: Meals like pizza, burgers, or fatty meats cause delayed hyperglycemia that simple carb counting does not predict

### Dietary Patterns with Evidence in Diabetes

#### 1. Low-Carbohydrate Diet

- **Definition:** <130 g/day of carbohydrates (vs. ~250-300 g in standard diet)
- **Very low carb (ketogenic):** <50 g/day → ketone body production
- **Evidence:**
  - Meta-analysis (2021): Low-carb diet → ↓ HbA1c ~0.47% vs. conventional diet at 6 months
  - Marked improvement in triglycerides and HDL
  - May allow significant reduction of glucose-lowering medications
- **Precautions:** Hypoglycemia risk if medications not adjusted; ketoacidosis in T1DM; long-term sustainability

#### 2. Mediterranean Diet

- **Composition:** Rich in olive oil, fish, fruits, vegetables, legumes, nuts; moderate wine; low in red and processed meat
- **Evidence (PREDIMED):**
  - ↓ 30% major cardiovascular events (with extra virgin olive oil)
  - ↓ T2DM incidence by ~30-50% in high-risk individuals
  - Improves HbA1c ~0.3-0.5%
  - ↓ Systemic inflammation (CRP, IL-6)

#### 3. DASH Diet (Dietary Approaches to Stop Hypertension)

- Rich in fruits, vegetables, low-fat dairy, whole grains
- ↓ Sodium (<2300 mg/day, ideally <1500 mg)
- Additional benefit in hypertensive diabetics: ↓ systolic BP ~5-6 mmHg

### Continuous Glucose Monitoring (CGM) and Nutrition

CGM allows seeing each food's effect in real time:

- **Time in range (TIR):** Goal: >70% of time between 70-180 mg/dL
- **Glycemic variability (CV):** Goal: <36%
- CGM allows identifying individual response patterns to specific foods
- Real-time feedback to adjust portions, combinations, and timing

### Artificial Sweeteners and Diabetes

| Sweetener | Glycemic effect | Considerations |
|-----------|----------------|----------------|
| Sucralose | Minimal | Contradictory evidence on microbiome |
| Stevia | None | Generally safe; possible microbiome effect |
| Aspartame | None | Safe at normal doses; microbiome association evidence |
| Saccharin | None | Mouse data suggest microbiome alteration |
| Allulose | Minimal | ↓ Postprandial glucose; well tolerated |
| Erythritol | None | Recent studies suggest CV risk association (preliminary data) |

### Alcohol and Diabetes

- Alcohol inhibits hepatic gluconeogenesis → hypoglycemia risk (especially with insulin or sulfonylureas)
- If consumed: ≤1 drink/day (women), ≤2/day (men)
- Always accompany with food
- Beers and sweet wines contribute carbohydrates → initial hyperglycemia followed by late hypoglycemia`,
      keyTerms: [
        { term: 'ratio insulina-carbohidrato (ICR) / insulin-to-carb ratio', definition: 'Cantidad de gramos de carbohidratos que cubre 1 unidad de insulina rápida; se calcula con la regla del 500 (500/DDT). | Amount of grams of carbohydrates covered by 1 unit of rapid insulin; calculated with the rule of 500 (500/TDD).' },
        { term: 'factor de sensibilidad a la insulina (ISF) / insulin sensitivity factor', definition: 'Cuántos mg/dL baja la glucosa por 1 unidad de insulina; se calcula con la regla del 1800 (1800/DDT). | How many mg/dL glucose drops per 1 unit of insulin; calculated with the rule of 1800 (1800/TDD).' },
        { term: 'unidades de grasa-proteína (FPU) / fat-protein units', definition: 'Método para calcular la insulina adicional necesaria por el efecto hiperglucemiante tardío de proteínas y grasas. | Method to calculate additional insulin needed for the delayed hyperglycemic effect of proteins and fats.' },
        { term: 'tiempo en rango (TIR) / time in range', definition: 'Porcentaje de tiempo que la glucosa está entre 70-180 mg/dL en el CGM; la meta es >70%. | Percentage of time glucose is between 70-180 mg/dL on CGM; the goal is >70%.' },
        { term: 'dieta mediterránea / Mediterranean diet', definition: 'Patrón dietético rico en aceite de oliva, pescado, verduras y frutas con evidencia de ↓30% eventos cardiovasculares (PREDIMED). | Dietary pattern rich in olive oil, fish, vegetables, and fruits with evidence of ↓30% cardiovascular events (PREDIMED).' },
        { term: 'HbA1c (hemoglobina glucosilada / glycosylated hemoglobin)', definition: 'Marcador del control glucémico promedio de los últimos 2-3 meses; la meta es generalmente <7% en la mayoría de adultos con diabetes. | Marker of average glycemic control over the past 2-3 months; the goal is generally <7% in most adults with diabetes.' }
      ],
      clinicalNotes: 'Notas clínicas: (1) La TNM por un dietista certificado puede reducir HbA1c 0.3-1.0% en DM1 y 0.5-2.0% en DM2, comparable o superior a muchos medicamentos orales. (2) En DM2, una dieta baja en carbohidratos puede permitir reducción significativa de medicamentos; ajustar siempre ANTES de iniciar la restricción para evitar hipoglucemias. (3) En pacientes con DM1 en bomba de insulina, enseñar el concepto de FPU para comidas altas en grasa/proteína (pizza, hamburguesas) mejora significativamente el control postprandial tardío. (4) El CGM ha revolucionado la nutrición diabética: permite retroalimentación individualizada que supera las tablas estándar de IG. (5) Los agonistas de GLP-1 (semaglutida, liraglutida) tienen efectos sinérgicos con restricción calórica moderada para pérdida de peso y control glucémico. | Clinical notes: (1) MNT by a certified dietitian can reduce HbA1c 0.3-1.0% in T1DM and 0.5-2.0% in T2DM, comparable or superior to many oral medications. (2) In T2DM, a low-carb diet may allow significant medication reduction; always adjust BEFORE starting restriction to avoid hypoglycemia. (3) In T1DM patients on insulin pump, teaching the FPU concept for high-fat/protein meals (pizza, burgers) significantly improves late postprandial control. (4) CGM has revolutionized diabetic nutrition: allows individualized feedback that surpasses standard GI tables. (5) GLP-1 agonists (semaglutide, liraglutide) have synergistic effects with moderate caloric restriction for weight loss and glycemic control.'
    },

    4: {
      level: 4,
      summary: 'La fisiopatología nutricional de la diabetes involucra la respuesta incretínica GLP-1/GIP (base de los agonistas de GLP-1), la lipotoxicidad pancreática y muscular, la glucotoxicidad con regulación de GLUT4 por AMPK, y el eje intestino-cerebro de la saciedad. Las intervenciones nutricionales actúan a nivel de microbioma (producción de SCFA), señalización vagal, sensibilidad hepática a insulina, y expresión de transportadores de glucosa. | Nutritional pathophysiology of diabetes involves the GLP-1/GIP incretin response (basis of GLP-1 agonists), pancreatic and muscular lipotoxicity, glucotoxicity with GLUT4 regulation by AMPK, and the gut-brain satiety axis. Nutritional interventions act at the microbiome level (SCFA production), vagal signaling, hepatic insulin sensitivity, and glucose transporter expression.',
      explanation: `## Explicación

### Fisiopatología Nutricional de la Diabetes

#### El Eje Incretínico y la Nutrición

**Efecto incretina:**
- Las incretinas (GLP-1 y GIP) son hormonas intestinales liberadas en respuesta a la ingestión de nutrientes
- GLP-1 (células L del íleon): ↑ secreción de insulina, ↓ glucagón, ↓ vaciamiento gástrico, ↑ saciedad
- GIP (células K del duodeno): ↑ secreción de insulina, efectos sobre tejido adiposo

**Defecto incretínico en DM2:**
- En DM2, el efecto incretínico está reducido: la respuesta insulínica a glucosa oral es ~50-70% menor que a glucosa IV, cuando debería ser >50% mayor
- GLP-1: Secreción reducida + resistencia parcial de las células β
- GIP: Secreción normal pero resistencia marcada de las células β

**Implicaciones nutricionales del eje incretínico:**
- Las proteínas y grasas también estimulan GLP-1 → combinación de macronutrientes amplifica efecto incretínico
- La fibra fermentable → SCFA → estimulan receptores FFAR2/FFAR3 en células L → ↑ GLP-1
- El orden de ingesta importa: Comer proteínas/grasas/verduras ANTES de carbohidratos → ↑ GLP-1 → ↓ pico glucémico ~30-40%
- Base farmacológica: Semaglutida, liraglutida, tirzepatida (GLP-1/GIP dual) mimetizan y amplifican este efecto

#### Lipotoxicidad y Nutrición

**Mecanismos de lipotoxicidad:**
- Exceso de ácidos grasos libres (AGL) → acumulación de lípidos ectópicos en:
  - **Páncreas:** Depósito de ceramidas y diacilglicerol → estrés del retículo endoplásmico → apoptosis de células β → ↓ secreción de insulina
  - **Músculo esquelético:** Acumulación de diacilglicerol → activación de PKCθ → fosforilación de IRS-1 en serina → bloqueo de señalización de insulina → ↓ GLUT4 en membrana → resistencia a insulina
  - **Hígado:** Acumulación de lípidos → activación de PKCε → resistencia a insulina hepática → ↑ gluconeogénesis + ↑ VLDL

**Intervención nutricional en lipotoxicidad:**
- Restricción calórica moderada (-500 kcal/día) → movilización de grasa ectópica
- Dieta baja en grasas saturadas → ↓ ceramidas y diacilglicerol
- Omega-3 (EPA/DHA) → ↓ lipotoxicidad, ↓ inflamación, ↑ sensibilidad a insulina (efecto modesto)
- Estudio DiRECT: Pérdida de ≥15 kg con restricción calórica intensiva logró remisión de DM2 en 86% de los casos a 1 año (↓ grasa hepática y pancreática)

#### Glucotoxicidad y Transportadores de Glucosa

**Mecanismo de glucotoxicidad:**
- Hiperglucemia crónica → ↑ flujo por vía de poliol (aldosa reductasa → sorbitol) → estrés osmótico
- ↑ Productos de glicación avanzada (AGEs) → activación de receptor RAGE → inflamación, estrés oxidativo
- ↑ Hexosamina → O-GlcNAcilación de proteínas → alteración de señalización de insulina
- ↑ PKC por diacilglicerol → disfunción endotelial, fibrosis

**GLUT4 y ejercicio/nutrición:**
- GLUT4: Transportador de glucosa sensible a insulina en músculo y tejido adiposo
- **Insulina:** Activa PI3K/Akt → translocación de GLUT4 a membrana
- **Ejercicio:** Activa AMPK → translocación de GLUT4 independiente de insulina (↡ glucemia incluso en resistencia a insulina)
- **Polifenoles dietéticos:** Resveratrol, quercetina, curcumina → activan AMPK y SIRT1 → ↑ expresión de GLUT4 (datos preclínicos)

#### Microbioma y Diabetes

**Disbiosis en DM2:**
- ↓ Diversidad microbiana
- ↓ Bacterias productoras de butirato (Faecalibacterium prausnitzii, Roseburia)
- ↑ Bacterias proinflamatorias (Escherichia, Clostridium)
- ↓ Producción de SCFA → ↓ integridad de barrera intestinal → endotoxemia metabólica (LPS) → inflamación crónica de bajo grado

**Intervenciones nutricionales sobre el microbioma en diabetes:**
- **Fibra prebiótica:** Inulina, fructooligosacáridos → ↑ Bifidobacterium, ↑ Akkermansia → ↑ SCFA → ↑ GLP-1
- **Alimentos fermentados:** Yogur, kéfir, kimchi → diversidad microbiana → ↓ inflamación
- **Polifenoles:** Cacao, té verde, frutos rojos → modulación selectiva del microbioma → ↑ Akkermansia muciniphila (asociada con mejor perfil metabólico)

#### El Orden de los Alimentos Importa (Food Order Effect)

Estudios clínicos demuestran que el orden de ingesta afecta la respuesta glucémica:
1. **Verduras y proteínas primero, carbohidratos al final:** ↓ glucosa postprandial ~30-40%, ↑ GLP-1, ↓ insulina postprandial
2. **Mecanismos:** ↓ velocidad de vaciamiento gástrico, ↑ estimulación de incretinas antes de la carga de carbohidratos
3. **Aplicación clínica:** Estrategia simple sin cambiar la composición de la dieta; solo cambiar el orden

---
## Explanation

### Nutritional Pathophysiology of Diabetes

#### The Incretin Axis and Nutrition

**Incretin effect:**
- Incretins (GLP-1 and GIP) are intestinal hormones released in response to nutrient ingestion
- GLP-1 (ileal L cells): ↑ insulin secretion, ↓ glucagon, ↓ gastric emptying, ↑ satiety
- GIP (duodenal K cells): ↑ insulin secretion, effects on adipose tissue

**Incretin defect in T2DM:**
- In T2DM, the incretin effect is reduced: insulin response to oral glucose is ~50-70% lower than to IV glucose, when it should be >50% higher
- GLP-1: Reduced secretion + partial β-cell resistance
- GIP: Normal secretion but marked β-cell resistance

**Nutritional implications of the incretin axis:**
- Proteins and fats also stimulate GLP-1 → macronutrient combination amplifies incretin effect
- Fermentable fiber → SCFA → stimulate FFAR2/FFAR3 receptors on L cells → ↑ GLP-1
- Eating order matters: Eating proteins/fats/vegetables BEFORE carbs → ↑ GLP-1 → ↓ glycemic peak ~30-40%
- Pharmacological basis: Semaglutide, liraglutide, tirzepatide (dual GLP-1/GIP) mimic and amplify this effect

#### Lipotoxicity and Nutrition

**Lipotoxicity mechanisms:**
- Excess free fatty acids (FFA) → ectopic lipid accumulation in:
  - **Pancreas:** Ceramide and diacylglycerol deposition → ER stress → β-cell apoptosis → ↓ insulin secretion
  - **Skeletal muscle:** Diacylglycerol accumulation → PKCθ activation → serine phosphorylation of IRS-1 → insulin signaling blockade → ↓ membrane GLUT4 → insulin resistance
  - **Liver:** Lipid accumulation → PKCε activation → hepatic insulin resistance → ↑ gluconeogenesis + ↑ VLDL

**Nutritional intervention in lipotoxicity:**
- Moderate caloric restriction (-500 kcal/day) → ectopic fat mobilization
- Low saturated fat diet → ↓ ceramides and diacylglycerol
- Omega-3 (EPA/DHA) → ↓ lipotoxicity, ↓ inflammation, ↑ insulin sensitivity (modest effect)
- DiRECT study: ≥15 kg weight loss with intensive caloric restriction achieved T2DM remission in 86% of cases at 1 year (↓ hepatic and pancreatic fat)

#### Glucotoxicity and Glucose Transporters

**Glucotoxicity mechanism:**
- Chronic hyperglycemia → ↑ polyol pathway flux (aldose reductase → sorbitol) → osmotic stress
- ↑ Advanced glycation end-products (AGEs) → RAGE receptor activation → inflammation, oxidative stress
- ↑ Hexosamine → O-GlcNAcylation of proteins → insulin signaling alteration
- ↑ PKC by diacylglycerol → endothelial dysfunction, fibrosis

**GLUT4 and exercise/nutrition:**
- GLUT4: Insulin-sensitive glucose transporter in muscle and adipose tissue
- **Insulin:** Activates PI3K/Akt → GLUT4 translocation to membrane
- **Exercise:** Activates AMPK → insulin-independent GLUT4 translocation (↓ glycemia even in insulin resistance)
- **Dietary polyphenols:** Resveratrol, quercetin, curcumin → activate AMPK and SIRT1 → ↑ GLUT4 expression (preclinical data)

#### Microbiome and Diabetes

**Dysbiosis in T2DM:**
- ↓ Microbial diversity
- ↓ Butyrate-producing bacteria (Faecalibacterium prausnitzii, Roseburia)
- ↑ Proinflammatory bacteria (Escherichia, Clostridium)
- ↓ SCFA production → ↓ intestinal barrier integrity → metabolic endotoxemia (LPS) → chronic low-grade inflammation

**Nutritional interventions on the microbiome in diabetes:**
- **Prebiotic fiber:** Inulin, fructooligosaccharides → ↑ Bifidobacterium, ↑ Akkermansia → ↑ SCFA → ↑ GLP-1
- **Fermented foods:** Yogurt, kefir, kimchi → microbial diversity → ↓ inflammation
- **Polyphenols:** Cocoa, green tea, berries → selective microbiome modulation → ↑ Akkermansia muciniphila (associated with better metabolic profile)

#### Food Order Effect

Clinical studies demonstrate that eating order affects glycemic response:
1. **Vegetables and proteins first, carbs last:** ↓ postprandial glucose ~30-40%, ↑ GLP-1, ↓ postprandial insulin
2. **Mechanisms:** ↓ gastric emptying rate, ↑ incretin stimulation before carbohydrate load
3. **Clinical application:** Simple strategy without changing diet composition; just change the order`,
      keyTerms: [
        { term: 'efecto incretínico / incretin effect', definition: 'Amplificación de la secreción de insulina por hormonas intestinales (GLP-1, GIP) liberadas en respuesta a nutrientes orales; reducido en DM2, base de terapias con agonistas de GLP-1. | Amplification of insulin secretion by intestinal hormones (GLP-1, GIP) released in response to oral nutrients; reduced in T2DM, basis of GLP-1 agonist therapies.' },
        { term: 'lipotoxicidad / lipotoxicity', definition: 'Daño celular (en células β, músculo, hígado) por acumulación de lípidos ectópicos (ceramidas, diacilglicerol) que causa resistencia a insulina y disfunción celular. | Cell damage (in β cells, muscle, liver) from ectopic lipid accumulation (ceramides, diacylglycerol) causing insulin resistance and cell dysfunction.' },
        { term: 'AGEs (productos de glicación avanzada / advanced glycation end-products)', definition: 'Moléculas formadas por reacción no enzimática entre glucosa y proteínas; se acumulan en hiperglucemia crónica y activan RAGE → inflamación y complicaciones microvasculares. | Molecules formed by non-enzymatic reaction between glucose and proteins; accumulate in chronic hyperglycemia and activate RAGE → inflammation and microvascular complications.' },
        { term: 'GLUT4', definition: 'Transportador de glucosa sensible a insulina en músculo y tejido adiposo; su translocación a la membrana puede ser estimulada por insulina (PI3K/Akt) o por ejercicio (AMPK), independientemente. | Insulin-sensitive glucose transporter in muscle and adipose tissue; its translocation to the membrane can be stimulated by insulin (PI3K/Akt) or by exercise (AMPK), independently.' },
        { term: 'DiRECT (ensayo / trial)', definition: 'Ensayo clínico que demostró remisión de DM2 en 86% de pacientes que perdieron ≥15 kg con restricción calórica intensiva, mediante reducción de grasa hepática y pancreática. | Clinical trial demonstrating T2DM remission in 86% of patients who lost ≥15 kg with intensive caloric restriction, through reduction of hepatic and pancreatic fat.' },
        { term: 'endotoxemia metabólica / metabolic endotoxemia', definition: 'Paso de lipopolisacárido (LPS) bacteriano a la sangre debido a permeabilidad intestinal aumentada; causa inflamación sistémica de bajo grado que contribuye a resistencia a insulina. | Passage of bacterial lipopolysaccharide (LPS) into the blood due to increased intestinal permeability; causes low-grade systemic inflammation contributing to insulin resistance.' }
      ],
      clinicalNotes: 'Aplicaciones clínicas avanzadas: (1) El efecto del orden de alimentos (food order effect) es una intervención simple y efectiva: instruir a los pacientes a comer verduras y proteínas antes de carbohidratos puede reducir la glucosa postprandial ~30-40% sin cambiar la composición de la dieta. (2) En pacientes con DM2 y obesidad, la restricción calórica intensiva supervisada (DiRECT) puede lograr remisión en etapas tempranas de la enfermedad; la clave es la reducción de grasa ectópica hepática y pancreática. (3) La disbiosis intestinal en DM2 puede ser parcialmente revertida con dieta rica en fibra prebiótica (≥30 g/día) y alimentos fermentados; esto mejora la producción de SCFA y la secreción de GLP-1. (4) Tirzepatida (agonista dual GLP-1/GIP) muestra superiores resultados en HbA1c y peso vs. semaglutida; su mecanismo involucra restauración del efecto incretínico perdido en DM2. (5) En pacientes con DM1 en bomba de insulina, el bolo dual/extendido para comidas altas en grasa-proteína (calculando FPU) mejora significativamente el control glucémico postprandial a 3-6 horas. | Advanced clinical applications: (1) The food order effect is a simple, effective intervention: instructing patients to eat vegetables and proteins before carbs can reduce postprandial glucose ~30-40% without changing diet composition. (2) In T2DM patients with obesity, supervised intensive caloric restriction (DiRECT) can achieve remission in early disease stages; the key is ectopic hepatic and pancreatic fat reduction. (3) Intestinal dysbiosis in T2DM can be partially reversed with a prebiotic fiber-rich diet (≥30 g/day) and fermented foods; this improves SCFA production and GLP-1 secretion. (4) Tirzepatide (dual GLP-1/GIP agonist) shows superior results in HbA1c and weight vs. semaglutide; its mechanism involves restoration of the lost incretin effect in T2DM. (5) In T1DM patients on insulin pump, dual/extended bolus for high fat-protein meals (calculating FPU) significantly improves 3-6 hour postprandial glycemic control.'
    },

    5: {
      level: 5,
      summary: 'La nutrición de precisión en diabetes integra datos de CGM, nutrigenómica (TCF7L2, SLC30A8, KCNJ11), metabolómica postprandial, y metagenómica del microbioma para personalizar recomendaciones. Los ensayos DIRECT/ReTUNE/DiRECT-PLUS demuestran que la remisión de DM2 es posible mediante intervención nutricional intensiva. Las guías ADA 2024-2025 eliminaron el concepto de porcentaje ideal de macronutrientes, enfatizando patrones alimentarios individualizados, reducción de carbohidratos refinados, y calidad sobre cantidad. | Precision nutrition in diabetes integrates CGM data, nutrigenomics (TCF7L2, SLC30A8, KCNJ11), postprandial metabolomics, and microbiome metagenomics to personalize recommendations. DIRECT/ReTUNE/DiRECT-PLUS trials demonstrate that T2DM remission is possible through intensive nutritional intervention. ADA 2024-2025 guidelines eliminated the concept of ideal macronutrient percentage, emphasizing individualized eating patterns, refined carbohydrate reduction, and quality over quantity.',
      explanation: `## Explicación

### Nutrición de Precisión en Diabetes

#### Nutrigenómica Aplicada a la Diabetes

**Variantes genéticas que modifican la respuesta nutricional en diabetes:**

1. **TCF7L2 (rs7903146):**
   - Variante de mayor efecto para riesgo de DM2 (OR ~1.4/alelo T)
   - Mecanismo: ↓ expresión de proglucagón en células L → ↓ GLP-1 → ↓ efecto incretínico
   - Portadores del alelo de riesgo: Responden mejor a dietas bajas en carbohidratos y altas en fibra
   - Interacción gen-dieta: La dieta mediterránea atenúa el riesgo de los portadores TT en ~50% (estudio PREDIMED)

2. **SLC30A8 (rs13266634):**
   - Codifica el transportador de zinc ZnT8 en vesículas de insulina de las células β
   - Variante de riesgo C: ↓ secreción de insulina, ↓ contenido de zinc en gránulos de insulina
   - Paradoja: Variantes de pérdida de función raras son PROTECTORAS contra DM2 (↑ proinsulina)
   - Implicación nutricional: Portadores pueden beneficiarse de suplementación adecuada de zinc

3. **KCNJ11/ABCC8 (canal K-ATP):**
   - Variantes afectan la sensibilidad del canal K-ATP al ATP → modifican umbral de secreción de insulina
   - Diabetes neonatal por mutaciones activadoras de KCNJ11: Responden a sulfonilureas en lugar de insulina
   - Forma extrema de nutrigenómica: El genotipo define el tratamiento

4. **PPARG (Pro12Ala, rs1801282):**
   - Variante Ala: ↓ actividad de PPARγ → ↓ riesgo de DM2 en ~20%
   - Los portadores Ala muestran mayor beneficio de dietas bajas en grasa
   - Interacción con grasas: El efecto protector se pierde con ingesta alta de grasas saturadas

#### Metabolómica Postprandial

**Firmas metabolómicas de la respuesta glucémica:**
- El perfil de metabolitos postprandiales (aminoácidos de cadena ramificada, trimetil-amina-N-óxido [TMAO], ácidos biliares) predice la respuesta glucémica mejor que el contenido de macronutrientes solo
- Los aminoácidos de cadena ramificada (BCAA: leucina, isoleucina, valina) están elevados en DM2 y predicen desarrollo de DM2 hasta 12 años antes del diagnóstico
- TMAO (producido por microbiota a partir de carnitina/colina de carne roja) → asociado con riesgo cardiovascular y resistencia a insulina

**Aplicaciones de metabolómica:**
- Identificación de "fenotipos metabólicos" de respondedores a diferentes dietas
- Biomarcadores de cumplimiento dietético (ej: metabolitos de polifenoles)
- Predicción de respuesta a intervenciones nutricionales específicas

#### Remisión de la Diabetes Tipo 2: Evidencia Actualizada

**Ensayo DiRECT (Diabetes Remission Clinical Trial):**
- n = 306, intervención: Reemplazo total de dieta (850 kcal/día × 3-5 meses) → reintroducción gradual → mantenimiento
- Resultados a 2 años: Remisión (HbA1c <6.5% sin medicamentos) en 36% del grupo intervención vs. 3% control
- Predictores de remisión: Pérdida de peso >10 kg, duración de diabetes <6 años, función residual de células β
- Mecanismo: ↓ grasa hepática (de ~16% a ~3%), ↓ grasa pancreática → recuperación de la primera fase de secreción de insulina

**Estudio ReTUNE:**
- Examinó remisión de DM2 en personas con IMC NORMAL (18.5-27)
- Demostró que incluso pérdida de peso modesta (5-7%) puede lograr remisión en DM2 de inicio reciente
- Confirma la "hipótesis del umbral personal de grasa": Cada individuo tiene un umbral de grasa ectópica por encima del cual desarrolla DM2

**DiRECT-PLUS (2024):**
- Integró la dieta mediterránea verde (enriquecida con polifenoles: té Mankai, nueces) con restricción calórica
- Superior a dieta mediterránea estándar y dieta de guías para: ↓ grasa intrahepática, ↓ grasa visceral, ↓ circunferencia de cintura
- Mecanismo: Modulación del microbioma → ↑ Prevotella, ↑ bacterias productoras de SCFA

#### Guías ADA 2024-2025: Puntos Clave en Nutrición

**Posición actual de la ADA:**
1. No existe una proporción ideal de macronutrientes para todas las personas con diabetes
2. La TNM debe ser individualizada según preferencias culturales, acceso alimentario, metas metabólicas
3. **Reducir carbohidratos refinados** tiene la mayor evidencia para mejorar glucemia
4. Se reconoce formalmente la dieta baja en carbohidratos como opción válida para DM2
5. La **pérdida de peso ≥5%** mejora significativamente HbA1c, lípidos y presión arterial
6. Para remisión de DM2: Pérdida de peso ≥10-15% en los primeros años del diagnóstico

**Metas nutricionales individualizadas:**
- HbA1c: <7% para la mayoría, <6.5% si es alcanzable sin hipoglucemia significativa, <8% en ancianos frágiles/comorbilidades
- Sodio: <2300 mg/día (como población general)
- Proteínas: 1-1.5 g/kg/día (sin restricción en ERC estadios 1-2; 0.8 g/kg/día en ERC 3-5)
- Grasas: Énfasis en calidad (preferir mono y poliinsaturadas); sin límite superior de grasa total si la fuente es saludable

#### Tecnología y Nutrición en Diabetes

**Sistemas de asa cerrada híbridos (bomba + CGM + algoritmo):**
- Los sistemas como Control-IQ, CamAPS FX, Omnipod 5 usan algoritmos que incorporan la ingesta de carbohidratos para dosificación automatizada
- Limitación actual: Los algoritmos no incorporan FPU ni efecto de proteínas/grasas
- Siguiente generación: Algoritmos que integren composición completa de la comida (no solo carbohidratos)

**Aplicaciones de IA y nutrición diabética:**
- Reconocimiento de alimentos por foto → estimación automática de carbohidratos
- Predicción de respuesta glucémica personalizada usando machine learning (microbioma + genómica + CGM)
- Sistemas de recomendación en tiempo real basados en patrones individuales

---
## Explanation

### Precision Nutrition in Diabetes

#### Nutrigenomics Applied to Diabetes

**Genetic variants modifying nutritional response in diabetes:**

1. **TCF7L2 (rs7903146):**
   - Largest effect variant for T2DM risk (OR ~1.4/T allele)
   - Mechanism: ↓ proglucagon expression in L cells → ↓ GLP-1 → ↓ incretin effect
   - Risk allele carriers: Respond better to low-carb, high-fiber diets
   - Gene-diet interaction: Mediterranean diet attenuates risk in TT carriers by ~50% (PREDIMED study)

2. **SLC30A8 (rs13266634):**
   - Encodes zinc transporter ZnT8 in β-cell insulin vesicles
   - Risk variant C: ↓ insulin secretion, ↓ zinc content in insulin granules
   - Paradox: Rare loss-of-function variants are PROTECTIVE against T2DM (↑ proinsulin)
   - Nutritional implication: Carriers may benefit from adequate zinc supplementation

3. **KCNJ11/ABCC8 (K-ATP channel):**
   - Variants affect K-ATP channel sensitivity to ATP → modify insulin secretion threshold
   - Neonatal diabetes from activating KCNJ11 mutations: Respond to sulfonylureas instead of insulin
   - Extreme form of nutrigenomics: Genotype defines treatment

4. **PPARG (Pro12Ala, rs1801282):**
   - Ala variant: ↓ PPARγ activity → ↓ T2DM risk by ~20%
   - Ala carriers show greater benefit from low-fat diets
   - Interaction with fats: Protective effect is lost with high saturated fat intake

#### Postprandial Metabolomics

**Metabolomic signatures of glycemic response:**
- Postprandial metabolite profile (branched-chain amino acids, TMAO, bile acids) predicts glycemic response better than macronutrient content alone
- BCAA (leucine, isoleucine, valine) are elevated in T2DM and predict T2DM development up to 12 years before diagnosis
- TMAO (produced by microbiota from carnitine/choline in red meat) → associated with cardiovascular risk and insulin resistance

**Metabolomics applications:**
- Identification of "metabolic phenotypes" of responders to different diets
- Dietary compliance biomarkers (e.g., polyphenol metabolites)
- Prediction of response to specific nutritional interventions

#### Type 2 Diabetes Remission: Updated Evidence

**DiRECT Trial (Diabetes Remission Clinical Trial):**
- n = 306, intervention: Total diet replacement (850 kcal/day x 3-5 months) → gradual reintroduction → maintenance
- 2-year results: Remission (HbA1c <6.5% without medications) in 36% of intervention group vs. 3% control
- Remission predictors: Weight loss >10 kg, diabetes duration <6 years, residual β-cell function
- Mechanism: ↓ hepatic fat (from ~16% to ~3%), ↓ pancreatic fat → recovery of first-phase insulin secretion

**ReTUNE Study:**
- Examined T2DM remission in people with NORMAL BMI (18.5-27)
- Demonstrated that even modest weight loss (5-7%) can achieve remission in recent-onset T2DM
- Confirms the "personal fat threshold hypothesis": Each individual has an ectopic fat threshold above which they develop T2DM

**DiRECT-PLUS (2024):**
- Integrated green Mediterranean diet (enriched with polyphenols: Mankai tea, walnuts) with caloric restriction
- Superior to standard Mediterranean diet and guideline diet for: ↓ intrahepatic fat, ↓ visceral fat, ↓ waist circumference
- Mechanism: Microbiome modulation → ↑ Prevotella, ↑ SCFA-producing bacteria

#### ADA 2024-2025 Guidelines: Key Nutrition Points

**Current ADA position:**
1. There is no ideal macronutrient proportion for all people with diabetes
2. MNT should be individualized based on cultural preferences, food access, metabolic goals
3. **Reducing refined carbohydrates** has the strongest evidence for improving glycemia
4. Low-carbohydrate diet is formally recognized as a valid option for T2DM
5. **Weight loss ≥5%** significantly improves HbA1c, lipids, and blood pressure
6. For T2DM remission: Weight loss ≥10-15% in the first years after diagnosis

**Individualized nutritional goals:**
- HbA1c: <7% for most, <6.5% if achievable without significant hypoglycemia, <8% in frail elderly/comorbidities
- Sodium: <2300 mg/day (as general population)
- Protein: 1-1.5 g/kg/day (no restriction in CKD stages 1-2; 0.8 g/kg/day in CKD 3-5)
- Fat: Emphasis on quality (prefer mono and polyunsaturated); no upper limit on total fat if source is healthy

#### Technology and Nutrition in Diabetes

**Hybrid closed-loop systems (pump + CGM + algorithm):**
- Systems like Control-IQ, CamAPS FX, Omnipod 5 use algorithms incorporating carb intake for automated dosing
- Current limitation: Algorithms do not incorporate FPU or protein/fat effects
- Next generation: Algorithms integrating complete meal composition (not just carbs)

**AI applications and diabetic nutrition:**
- Food recognition by photo → automatic carbohydrate estimation
- Personalized glycemic response prediction using machine learning (microbiome + genomics + CGM)
- Real-time recommendation systems based on individual patterns`,
      keyTerms: [
        { term: 'remisión de DM2 / T2DM remission', definition: 'Logro de HbA1c <6.5% sin medicamentos hipoglucemiantes por al menos 3 meses; demostrada posible con pérdida de peso ≥10-15% que reduzca grasa hepática y pancreática (DiRECT). | Achievement of HbA1c <6.5% without glucose-lowering medications for at least 3 months; demonstrated possible with ≥10-15% weight loss reducing hepatic and pancreatic fat (DiRECT).' },
        { term: 'umbral personal de grasa / personal fat threshold', definition: 'Concepto (ReTUNE) de que cada individuo tiene un umbral de grasa ectópica por encima del cual las células β pancreáticas se deterioran y se desarrolla DM2, independientemente del IMC total. | Concept (ReTUNE) that each individual has an ectopic fat threshold above which pancreatic β cells deteriorate and T2DM develops, regardless of total BMI.' },
        { term: 'TMAO (trimetilamina-N-óxido / trimethylamine N-oxide)', definition: 'Metabolito producido por la microbiota intestinal a partir de carnitina y colina (carne roja); asociado con ↑ riesgo cardiovascular y ↑ resistencia a insulina. | Metabolite produced by gut microbiota from carnitine and choline (red meat); associated with ↑ cardiovascular risk and ↑ insulin resistance.' },
        { term: 'metabolómica postprandial / postprandial metabolomics', definition: 'Análisis del perfil de metabolitos en sangre después de comer; puede predecir la respuesta glucémica individual mejor que el contenido de macronutrientes solo. | Analysis of blood metabolite profile after eating; can predict individual glycemic response better than macronutrient content alone.' },
        { term: 'tirzepatida / tirzepatide', definition: 'Agonista dual GLP-1/GIP que restaura el efecto incretínico perdido en DM2; muestra superiores resultados en HbA1c y pérdida de peso comparado con agonistas de GLP-1 solos. | Dual GLP-1/GIP agonist that restores the lost incretin effect in T2DM; shows superior results in HbA1c and weight loss compared to GLP-1 agonists alone.' }
      ],
      clinicalNotes: 'Implicaciones para la práctica clínica MD: (1) La remisión de DM2 es un objetivo realista en los primeros 6 años del diagnóstico con pérdida de peso ≥10-15%; referir precozmente a programas intensivos de manejo de peso. (2) Antes de iniciar tirzepatida o semaglutida en dosis altas para control de peso, optimizar la ingesta nutricional para minimizar pérdida de masa muscular (proteínas ≥1.2 g/kg/día, suplementación de micronutrientes, entrenamiento de resistencia). (3) El genotipaje de TCF7L2 puede informar la recomendación dietética: portadores TT se benefician más de restricción de carbohidratos y dieta mediterránea. (4) En pacientes con sistemas de asa cerrada, la educación nutricional debe incluir conteo preciso de carbohidratos Y reconocimiento del efecto de grasas/proteínas para anunciar comidas correctamente al sistema. (5) La BCAA sérica elevada en pacientes prediabéticos indica alto riesgo de progresión y mayor necesidad de intervención nutricional agresiva. (6) Los niveles de TMAO pueden informar recomendaciones sobre consumo de carne roja; considerar reducción en pacientes con TMAO elevado y riesgo cardiovascular alto. | MD-level clinical practice implications: (1) T2DM remission is a realistic goal in the first 6 years after diagnosis with ≥10-15% weight loss; refer early to intensive weight management programs. (2) Before starting high-dose tirzepatide or semaglutide for weight management, optimize nutritional intake to minimize muscle mass loss (protein ≥1.2 g/kg/day, micronutrient supplementation, resistance training). (3) TCF7L2 genotyping may inform dietary recommendation: TT carriers benefit more from carbohydrate restriction and Mediterranean diet. (4) In patients with closed-loop systems, nutritional education should include precise carb counting AND recognition of fat/protein effects for correct meal announcement to the system. (5) Elevated serum BCAA in prediabetic patients indicates high progression risk and greater need for aggressive nutritional intervention. (6) TMAO levels may inform recommendations on red meat consumption; consider reduction in patients with elevated TMAO and high cardiovascular risk.'
    }
  },

  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'Standards of Care in Diabetes—2025',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care, 48(Supplement_1), 2025',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Primary care-led weight management for remission of type 2 diabetes (DiRECT)',
      authors: ['Lean, M.E.J.', 'Leslie, W.S.', 'Barnes, A.C.'],
      source: 'The Lancet, 391(10120), 541-551, 2018',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Primary Prevention of Cardiovascular Disease with a Mediterranean Diet (PREDIMED)',
      authors: ['Estruch, R.', 'Ros, E.', 'Salas-Salvadó, J.'],
      source: 'New England Journal of Medicine, 378(25), e34, 2018',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Effect of a Green Mediterranean Diet on Intrahepatic Fat (DiRECT-PLUS)',
      authors: ['Yaskolka Meir, A.', 'Rinott, E.', 'Tsaban, G.'],
      source: 'Gut, 70(11), 2085-2095, 2021',
      license: 'CC BY 4.0'
    }
  ],
  crossReferences: [
    { targetId: 'topic-macronutrientes', targetType: 'topic', relationship: 'related', label: 'Macronutrientes / Macronutrients' },
    { targetId: 'topic-micronutrientes', targetType: 'topic', relationship: 'related', label: 'Micronutrientes / Micronutrients' },
    { targetId: 'topic-nutricion-cardiaca', targetType: 'topic', relationship: 'sibling', label: 'Nutrición Cardiosaludable / Heart-Healthy Nutrition' }
  ],
  tags: {
    systems: ['endocrine', 'digestive', 'cardiovascular'],
    topics: ['nutrition', 'diabetes', 'metabolism', 'medical-nutrition-therapy'],
    keywords: ['diabetes', 'insulina', 'carbohidratos', 'HbA1c', 'conteo de carbohidratos', 'índice glucémico', 'dieta mediterránea', 'remisión', 'GLP-1', 'microbioma', 'insulin', 'carbohydrate counting', 'glycemic index'],
    clinicalRelevance: 'high'
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
