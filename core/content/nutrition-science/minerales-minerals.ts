/**
 * Minerales / Minerals
 *
 * Contenido educativo bilingue (espanol primero) sobre minerales esenciales:
 * hierro, calcio, zinc, magnesio, electrolitos, incluyendo funciones,
 * fuentes alimentarias, deficiencias, toxicidad y aplicaciones clinicas.
 *
 * Bilingual educational content (Spanish-first) on essential minerals:
 * iron, calcium, zinc, magnesium, electrolytes, including functions,
 * food sources, deficiencies, toxicity, and clinical applications.
 */

import { EducationalContent } from '../types';

export const mineralesMinerals: EducationalContent = {
  id: 'nutrition-minerales-minerals',
  type: 'topic',
  name: 'Minerals | Minerales',
  nameEs: 'Minerales',
  alternateNames: [
    'Minerales esenciales | Essential Minerals',
    'Electrolitos y minerales traza | Electrolytes and Trace Minerals',
    'Micronutrientes minerales | Mineral Micronutrients',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los minerales son nutrientes que vienen de la tierra y estan en los alimentos que comemos. Los necesitamos para tener huesos fuertes, sangre saludable, musculos que funcionen bien y un corazon que lata correctamente. Los mas importantes incluyen calcio, hierro, zinc, magnesio y los electrolitos como sodio y potasio. | Minerals are nutrients that come from the earth and are in the foods we eat. We need them for strong bones, healthy blood, muscles that work well, and a heart that beats correctly. The most important include calcium, iron, zinc, magnesium, and electrolytes like sodium and potassium.',
      explanation: `## Que Son los Minerales | What Are Minerals

Los minerales son nutrientes que tu cuerpo necesita en pequenas cantidades pero que son muy importantes para tu salud. A diferencia de las vitaminas, los minerales vienen de la tierra y el agua.

Minerals are nutrients your body needs in small amounts but are very important for your health. Unlike vitamins, minerals come from the earth and water.

---

### Los Minerales Mas Importantes | The Most Important Minerals

**Calcio - Para huesos y dientes fuertes | Calcium - For strong bones and teeth**
- Construye y mantiene huesos y dientes fuertes | Builds and maintains strong bones and teeth
- Ayuda a tus musculos a moverse | Helps your muscles move
- Ayuda a tu corazon a latir | Helps your heart beat
- **Donde encontrarlo:** Leche, queso, yogur, brocoli, tortillas de maiz | **Where to find it:** Milk, cheese, yogurt, broccoli, corn tortillas

**Hierro - Para llevar oxigeno en la sangre | Iron - To carry oxygen in blood**
- Lleva oxigeno a todas las partes de tu cuerpo | Carries oxygen to all parts of your body
- Te da energia para correr y jugar | Gives you energy to run and play
- Sin suficiente hierro te sientes cansado y debil | Without enough iron you feel tired and weak
- **Donde encontrarlo:** Carne roja, frijoles, espinaca, cereales fortificados | **Where to find it:** Red meat, beans, spinach, fortified cereals

**Zinc - Para sanar y defenderte | Zinc - To heal and defend yourself**
- Ayuda a tu cuerpo a sanar heridas | Helps your body heal wounds
- Fortalece tu sistema inmune para combatir enfermedades | Strengthens your immune system
- Ayuda a tener buen sentido del gusto y olfato | Helps with good sense of taste and smell
- **Donde encontrarlo:** Carne, mariscos, nueces, frijoles | **Where to find it:** Meat, shellfish, nuts, beans

**Magnesio - Para musculos y nervios | Magnesium - For muscles and nerves**
- Ayuda a tus musculos a relajarse despues de contraerse | Helps muscles relax after contracting
- Importante para mas de 300 reacciones en tu cuerpo | Important for over 300 reactions in your body
- Ayuda a dormir mejor | Helps you sleep better
- **Donde encontrarlo:** Nueces, granos integrales, hojas verdes, chocolate oscuro | **Where to find it:** Nuts, whole grains, leafy greens, dark chocolate

**Electrolitos - Para el equilibrio de tu cuerpo | Electrolytes - For body balance**
- **Sodio:** Ayuda a mantener el agua en tu cuerpo (no comas mucha sal) | Helps maintain water in your body (don't eat too much salt)
- **Potasio:** Ayuda a tu corazon a latir correctamente | Helps your heart beat correctly
- **Donde encontrarlos:** Platanos, papas, tomates (potasio); sal (sodio) | **Where to find them:** Bananas, potatoes, tomatoes (potassium); salt (sodium)

### Que Pasa Si Te Faltan Minerales | What Happens Without Enough Minerals

- Sin calcio -> Huesos debiles, fracturas | Without calcium -> Weak bones, fractures
- Sin hierro -> Cansancio, debilidad, palidez (anemia) | Without iron -> Tiredness, weakness, paleness (anemia)
- Sin zinc -> Heridas que tardan en sanar, te enfermas seguido | Without zinc -> Slow healing, getting sick often
- Sin potasio -> Calambres musculares, debilidad | Without potassium -> Muscle cramps, weakness

### Consejos Para Obtener Suficientes Minerales | Tips for Getting Enough Minerals

1. **Toma leche o come lacteos** para el calcio | Drink milk or eat dairy for calcium
2. **Come carne, frijoles o lentejas** para el hierro | Eat meat, beans, or lentils for iron
3. **Come frutas y verduras variadas** para el potasio | Eat varied fruits and vegetables for potassium
4. **No le pongas mucha sal a la comida** - ya tiene suficiente | Don't add too much salt - food already has enough
5. **Come un punado de nueces al dia** para magnesio y zinc | Eat a handful of nuts daily for magnesium and zinc`,
      keyTerms: [
        { term: 'minerales | minerals', definition: 'Nutrientes de la tierra que ayudan a construir huesos y controlar funciones del cuerpo | Nutrients from the earth that help build bones and control body functions' },
        { term: 'calcio | calcium', definition: 'Mineral que construye huesos y dientes fuertes y ayuda a los musculos a funcionar | Mineral that builds strong bones and teeth and helps muscles work' },
        { term: 'hierro | iron', definition: 'Mineral que lleva oxigeno en la sangre a todo tu cuerpo | Mineral that carries oxygen in blood throughout your body' },
        { term: 'electrolitos | electrolytes', definition: 'Minerales como sodio y potasio que ayudan a equilibrar el agua y las senales electricas en tu cuerpo | Minerals like sodium and potassium that help balance water and electrical signals in your body' },
        { term: 'anemia | anemia', definition: 'Cuando no tienes suficientes globulos rojos saludables para llevar oxigeno, te sientes cansado y debil | When you don\'t have enough healthy red blood cells to carry oxygen, making you feel tired and weak' },
      ],
      analogies: [
        'El calcio es como el cemento que mantiene tus huesos fuertes, igual que el cemento mantiene un edificio solido. | Calcium is like cement that keeps your bones strong, just like cement keeps a building solid.',
        'El hierro es como un taxi que lleva oxigeno a todas partes de tu cuerpo - sin suficientes taxis, no todo el oxigeno llega a donde necesita ir. | Iron is like a taxi carrying oxygen everywhere in your body - without enough taxis, not all oxygen gets where it needs to go.',
        'Los electrolitos son como las baterias de tu cuerpo - ayudan a enviar senales electricas para que tu corazon lata y tus musculos se muevan. | Electrolytes are like your body\'s batteries - they help send electrical signals so your heart beats and muscles move.',
      ],
      examples: [
        'Los ninos que toman leche cada dia tienen huesos mas fuertes por el calcio | Children who drink milk daily have stronger bones from calcium',
        'Cuando sudas mucho jugando deportes, pierdes electrolitos y necesitas reponerlos | When you sweat a lot playing sports, you lose electrolytes and need to replace them',
        'Comer frijoles con arroz y un poco de limon (vitamina C) ayuda a tu cuerpo a absorber mas hierro | Eating beans with rice and a bit of lime (vitamin C) helps your body absorb more iron',
      ],
      patientCounselingPoints: [
        'Las mujeres con periodos menstruales abundantes pueden necesitar mas hierro - consulte a su doctor | Women with heavy periods may need more iron - consult your doctor',
        'Los ninos y adolescentes necesitan mas calcio mientras sus huesos estan creciendo | Children and teens need more calcium while their bones are growing',
        'Si tiene calambres musculares frecuentes, puede necesitar mas magnesio o potasio | If you have frequent muscle cramps, you may need more magnesium or potassium',
        'Limite la sal en su comida para mantener la presion arterial saludable | Limit salt in your food to maintain healthy blood pressure',
        'Coma una naranja o limon con alimentos ricos en hierro para mejorar la absorcion | Eat an orange or lime with iron-rich foods to improve absorption',
      ],
    },
    2: {
      level: 2,
      summary:
        'Los minerales se clasifican en macrominerales (calcio, fosforo, magnesio, sodio, potasio, cloruro) necesarios en cantidades mayores a 100 mg/dia, y minerales traza (hierro, zinc, selenio, cobre, yodo) necesarios en cantidades menores. Cada mineral tiene funciones especificas y tanto la deficiencia como el exceso causan sindromes clinicos. | Minerals are classified as macrominerals (calcium, phosphorus, magnesium, sodium, potassium, chloride) needed in amounts greater than 100 mg/day, and trace minerals (iron, zinc, selenium, copper, iodine) needed in smaller amounts. Each mineral has specific functions and both deficiency and excess cause clinical syndromes.',
      explanation: `## Clasificacion de Minerales | Mineral Classification

### Macrominerales (>100 mg/dia) | Macrominerals (>100 mg/day)

| Mineral | Necesidad diaria | Funciones | Deficiencia | Fuentes |
|---------|-----------------|-----------|-------------|---------|
| Calcio | 1000-1300 mg | Huesos, dientes, funcion muscular, coagulacion | Osteoporosis, calambres | Lacteos, hojas verdes, tortillas |
| Fosforo | 700 mg | Huesos, metabolismo energetico (ATP) | Rara (usualmente adecuado) | Carne, lacteos |
| Magnesio | 310-420 mg | >300 reacciones enzimaticas, musculo/nervio | Calambres, arritmias | Nueces, granos integrales, hojas verdes |
| Sodio | 1500 mg (limite) | Equilibrio de liquidos, transmision nerviosa | Hiponatremia | Sal, alimentos procesados |
| Potasio | 2600-3400 mg | Equilibrio de liquidos, ritmo cardiaco | Hipokalemia, debilidad | Platanos, papas, frijoles |
| Cloruro | 2300 mg | Equilibrio de liquidos, acido estomacal | Rara | Sal |

### Minerales Traza (<100 mg/dia) | Trace Minerals (<100 mg/day)

| Mineral | Necesidad diaria | Funciones | Deficiencia | Fuentes |
|---------|-----------------|-----------|-------------|---------|
| Hierro | 8-18 mg | Transporte de oxigeno, metabolismo energetico | Anemia, fatiga | Carne roja, frijoles, cereales fortificados |
| Zinc | 8-11 mg | Funcion inmune, cicatrizacion, gusto | Mala inmunidad, caida de pelo | Carne, mariscos, legumbres |
| Yodo | 150 mcg | Produccion de hormonas tiroideas | Bocio, discapacidad intelectual | Sal yodada, mariscos |
| Selenio | 55 mcg | Funcion enzimatica antioxidante | Debilidad muscular, cardiomiopatia | Nueces de Brasil, mariscos |
| Cobre | 900 mcg | Metabolismo del hierro, produccion de energia | Anemia, neutropenia | Mariscos, nueces |
| Cromo | 25-35 mcg | Accion de insulina | Intolerancia a la glucosa | Brocoli, uvas |

### Hierro en Detalle | Iron in Detail

**Dos formas de hierro dietetico | Two forms of dietary iron:**
- **Hierro hemico | Heme iron:** De productos animales, se absorbe bien (15-35%) | From animal products, well absorbed
- **Hierro no hemico | Non-heme iron:** De plantas, se absorbe menos (2-20%) | From plants, less absorbed

**Mejoradores de absorcion | Absorption Enhancers:**
- Vitamina C con hierro no hemico | Vitamin C with non-heme iron
- Acido de frutas citricas | Acid from citrus fruits
- Carne junto con fuentes vegetales de hierro | Meat alongside plant iron sources

**Inhibidores de absorcion | Absorption Inhibitors:**
- Taninos (te, cafe) | Tannins (tea, coffee)
- Fitatos (granos, legumbres) | Phytates (grains, legumes)
- Calcio en exceso | Excess calcium
- Antiácidos | Antacids

### Equilibrio de Electrolitos | Electrolyte Balance

**Sodio y potasio trabajan juntos | Sodium and potassium work together:**
- El sodio retiene agua en el cuerpo | Sodium retains water in the body
- El potasio ayuda a eliminar el exceso de sodio | Potassium helps eliminate excess sodium
- El balance entre ambos es importante para la presion arterial | Balance between both is important for blood pressure

**Senales de desequilibrio | Signs of imbalance:**
- Demasiado sodio: Hinchazon, presion alta | Too much sodium: Swelling, high blood pressure
- Poco potasio: Calambres, debilidad, ritmo cardiaco irregular | Low potassium: Cramps, weakness, irregular heartbeat
- Poco magnesio: Calambres, temblores, insomnio | Low magnesium: Cramps, tremors, insomnia`,
      keyTerms: [
        { term: 'macrominerales | macrominerals', definition: 'Minerales que el cuerpo necesita en cantidades mayores a 100 mg por dia | Minerals the body needs in amounts greater than 100 mg per day' },
        { term: 'minerales traza | trace minerals', definition: 'Minerales que el cuerpo necesita en cantidades muy pequenas, menos de 100 mg por dia | Minerals the body needs in very small amounts, less than 100 mg per day' },
        { term: 'hierro hemico | heme iron', definition: 'Hierro de productos animales que se absorbe facilmente (15-35%) | Iron from animal products that is easily absorbed (15-35%)' },
        { term: 'hierro no hemico | non-heme iron', definition: 'Hierro de plantas que se absorbe menos facilmente (2-20%) | Iron from plants that is less easily absorbed (2-20%)' },
        { term: 'hiponatremia | hyponatremia', definition: 'Nivel bajo de sodio en la sangre, puede causar confusion y convulsiones | Low sodium level in the blood, can cause confusion and seizures' },
        { term: 'hipokalemia | hypokalemia', definition: 'Nivel bajo de potasio en la sangre, puede causar debilidad y problemas del corazon | Low potassium level in the blood, can cause weakness and heart problems' },
        { term: 'osteoporosis | osteoporosis', definition: 'Enfermedad donde los huesos se vuelven debiles y fragiles por perdida de densidad osea | Disease where bones become weak and brittle from loss of bone density' },
      ],
      analogies: [
        'Los electrolitos son como el sistema electrico de una casa - si los cables (sodio, potasio) no estan bien, las luces (musculos, corazon) no funcionan. | Electrolytes are like a house\'s electrical system - if the wires (sodium, potassium) aren\'t right, the lights (muscles, heart) don\'t work.',
        'El hierro hemico vs no hemico es como una puerta abierta vs una puerta cerrada - el hemico entra facil, el no hemico necesita una llave (vitamina C). | Heme vs non-heme iron is like an open vs closed door - heme enters easily, non-heme needs a key (vitamin C).',
        'El calcio para los huesos es como depositar dinero en una cuenta bancaria - necesitas ahorrar durante la juventud para tener reservas en la vejez. | Calcium for bones is like depositing money in a bank account - you need to save during youth to have reserves in old age.',
      ],
      examples: [
        'Las mujeres embarazadas necesitan 27 mg de hierro al dia (el doble de lo normal) para apoyar el crecimiento del bebe | Pregnant women need 27 mg of iron daily (double normal) to support baby growth',
        'Los atletas que sudan mucho pierden sodio, potasio y magnesio que deben reponer con bebidas deportivas o alimentos | Athletes who sweat heavily lose electrolytes that must be replaced',
        'La sal yodada virtualmente elimino el bocio (tiroides agrandada) en America | Iodized salt virtually eliminated goiter in the Americas',
        'Las personas que toman mucho cafe o te deben separar su ingesta de hierro porque los taninos reducen la absorcion | People who drink lots of coffee or tea should separate iron intake as tannins reduce absorption',
      ],
      patientCounselingPoints: [
        'No tome suplementos de calcio y hierro al mismo tiempo - interfieren entre si | Don\'t take calcium and iron supplements at the same time - they interfere with each other',
        'Si es vegetariano, combine alimentos ricos en hierro con vitamina C para mejorar la absorcion | If vegetarian, combine iron-rich foods with vitamin C to improve absorption',
        'Las mujeres despues de la menopausia necesitan 1200 mg de calcio diarios para prevenir osteoporosis | Postmenopausal women need 1200 mg calcium daily to prevent osteoporosis',
        'Reduzca la sal en su comida - la mayoria de los adultos comen el doble de lo recomendado | Reduce salt in your food - most adults eat twice the recommended amount',
      ],
    },
    3: {
      level: 3,
      summary:
        'La fisiologia de los minerales abarca transporte activo, regulacion hormonal, funciones enzimaticas y mantenimiento del equilibrio acido-base y osmotico. El metabolismo del hierro esta regulado por hepcidina, el calcio por PTH/vitamina D/calcitonina, y los electrolitos por la bomba sodio-potasio ATPasa y el sistema renina-angiotensina-aldosterona. | Mineral physiology encompasses active transport, hormonal regulation, enzymatic functions, and acid-base and osmotic balance maintenance. Iron metabolism is regulated by hepcidin, calcium by PTH/vitamin D/calcitonin, and electrolytes by the sodium-potassium ATPase pump and renin-angiotensin-aldosterone system.',
      explanation: `## Metabolismo del Hierro | Iron Metabolism

### Absorcion (duodeno) | Absorption (duodenum)

\`\`\`
Hierro hemico (animal): Proteina transportadora de hemo 1 (HCP1)
  -> Absorcion directa (15-35%)

Hierro no hemico (vegetal): DMT1 (mejorado por acido, vitamina C)
  -> Fe3+ reducido a Fe2+ por citocromo b duodenal -> DMT1 -> enterocito

Transporte:
  Fe2+ -> (ferroportina) -> Sangre
  Fe2+ -> (hefestina/ceruloplasmina) -> Fe3+ ->
    Transferrina (proteina de transporte) ->
    Tejidos via receptor de transferrina

Almacenamiento:
  - Ferritina (almacenamiento intracelular)
  - Hemosiderina (almacenamiento a largo plazo)

Regulacion:
  - Hepcidina (hormona producida por el higado)
  - Hepcidina alta -> Ferroportina baja -> Menor absorcion/liberacion de hierro
  - Inflamacion -> Hepcidina alta -> Anemia de enfermedad cronica
\`\`\`

### Ciclo del Hierro en Eritrocitos | Iron Cycle in RBCs

\`\`\`
Fe2+ + Hemo -> Hemoglobina (transporte de O2)
Senescencia de eritrocitos -> Hemolisis -> Hemo ->
  - Fe2+ reciclado a medula osea (macrofagos del bazo)
  - Protoporfirina -> Bilirrubina
\`\`\`

## Regulacion del Calcio | Calcium Regulation

\`\`\`
Tres hormonas regulan el calcio serico:

PTH (Hormona Paratiroidea):
  Estimulo: Calcio bajo
  Acciones:
    - Aumenta resorcion osea (libera Ca2+ de huesos)
    - Aumenta reabsorcion renal de Ca2+
    - Activa 1-alfa-hidroxilasa (mas calcitriol)
  Resultado: Calcio serico SUBE

Calcitriol (Vitamina D activa):
  Estimulo: PTH, fosforo bajo
  Acciones:
    - Aumenta absorcion intestinal de Ca2+ y PO4
    - Aumenta mineralizacion osea
  Resultado: Calcio y fosforo SUBEN

Calcitonina (Celulas C tiroideas):
  Estimulo: Calcio alto
  Acciones:
    - Inhibe resorcion osea (osteoclastos)
  Resultado: Calcio serico BAJA
  Nota: Efecto clinico menor que PTH
\`\`\`

## Equilibrio de Electrolitos | Electrolyte Balance

### Bomba Sodio-Potasio (Na+/K+-ATPasa) | Sodium-Potassium Pump

\`\`\`
Funcion:
  - Mantiene el potencial de membrana en reposo
  - 3 Na+ FUERA, 2 K+ DENTRO (contra gradientes)
  - Consume ~1/3 del ATP celular

Importancia clinica:
  - Esencial para transmision de impulsos nerviosos
  - Contraccion muscular (incluyendo cardiaca)
  - Transporte de nutrientes
\`\`\`

### Sistema Renina-Angiotensina-Aldosterona (SRAA) | RAAS

\`\`\`
Rinon detecta baja perfusion ->
  Renina liberada ->
    Angiotensinogeno -> Angiotensina I ->
      ECA -> Angiotensina II ->
        |-- Vasoconstriccion
        |-- Aldosterona (corteza suprarrenal):
            - Reabsorbe Na+ (y agua)
            - Excreta K+ y H+
        |-- ADH (hipotalamo/hipofisis posterior):
            - Reabsorbe agua libre
\`\`\`

## Magnesio | Magnesium

\`\`\`
Funciones:
  - Cofactor en >300 reacciones enzimaticas
  - Sintesis de ATP (Mg-ATP es la forma activa)
  - Sintesis de proteinas y acidos nucleicos
  - Funcion muscular y nerviosa
  - Regulacion de glucosa e insulina

Distribucion:
  - 60% en huesos
  - 39% intracelular
  - 1% extracelular (serico)
  Nota: El magnesio serico NO refleja bien el estado total

Deficiencia (hipomagnesemia):
  Causas: Diureticos, alcoholismo, diarrea cronica, IBP
  Manifestaciones:
    - Temblores, calambres, tetania
    - Arritmias (Torsades de pointes)
    - Hipokalemia refractaria (Mg necesario para funcion de canales K+)
    - Hipocalcemia (Mg necesario para secrecion de PTH)
\`\`\`

## Zinc | Zinc

\`\`\`
Funciones:
  - Cofactor en >300 enzimas (ADN/ARN polimerasa, fosfatasa alcalina)
  - Funcion inmune (linfocitos T, celulas NK)
  - Cicatrizacion de heridas
  - Gusto y olfato (gustina es zinc-dependiente)
  - Desarrollo fetal

Deficiencia:
  Causas: Ingesta inadecuada, malabsorcion, enfermedad hepatica, ERC
  Manifestaciones:
    - Dermatitis (periorificial y acral)
    - Diarrea
    - Alopecia
    - Hipogeusia (disminucion del gusto)
    - Inmunodeficiencia
    - Retraso del crecimiento en ninos

Toxicidad:
  - >40 mg/dia cronico: Deficiencia de cobre (inhibe absorcion)
  - Nausea, vomito
  - Disfuncion inmune (paradojico)
\`\`\`

## Sindromes de Deficiencia Mineral | Mineral Deficiency Syndromes

| Mineral | Sindrome | Hallazgos clave |
|---------|----------|-----------------|
| Hierro | Anemia ferropenica | Anemia microcitica, hipocromica, fatiga, pica, coiloniquia |
| Zinc | Deficiencia de zinc | Dermatitis, diarrea, alopecia, hipogeusia |
| Yodo | Deficiencia de yodo | Bocio, cretinismo (si severo en embarazo) |
| Selenio | Deficiencia de selenio | Enfermedad de Keshan (cardiomiopatia), enfermedad de Kashin-Beck |
| Cobre | Deficiencia de cobre | Anemia, neutropenia, mielopatia |
| Calcio | Hipocalcemia cronica | Osteoporosis, tetania, signo de Chvostek/Trousseau |
| Magnesio | Hipomagnesemia | Tetania, arritmias, hipoK refractaria |`,
      keyTerms: [
        { term: 'hepcidina | hepcidin', definition: 'Hormona producida por el higado que regula la homeostasis del hierro controlando la degradacion de ferroportina | Liver-produced hormone that regulates iron homeostasis by controlling ferroportin degradation' },
        { term: 'transferrina | transferrin', definition: 'Proteina de transporte de hierro en la sangre; su saturacion refleja el estado de hierro | Iron-binding transport protein in blood; saturation reflects iron status' },
        { term: 'ferritina | ferritin', definition: 'Proteina de almacenamiento intracelular de hierro; nivel serico refleja reservas de hierro (reactante de fase aguda) | Intracellular iron storage protein; serum level reflects iron stores (acute phase reactant)' },
        { term: 'PTH | parathyroid hormone', definition: 'Hormona paratiroidea; aumenta el calcio serico mediante resorcion osea, reabsorcion renal y activacion de vitamina D | Parathyroid hormone; raises serum calcium via bone resorption, renal reabsorption, and vitamin D activation' },
        { term: 'hipomagnesemia | hypomagnesemia', definition: 'Nivel bajo de magnesio en sangre; causa arritmias, calambres y hace que la hipokalemia sea refractaria al tratamiento | Low magnesium; causes arrhythmias, cramps, and makes hypokalemia refractory to treatment' },
        { term: 'SRAA | RAAS', definition: 'Sistema renina-angiotensina-aldosterona; regula presion arterial y equilibrio de sodio/potasio | Renin-angiotensin-aldosterone system; regulates blood pressure and sodium/potassium balance' },
        { term: 'signo de Chvostek | Chvostek sign', definition: 'Contraccion facial al golpear el nervio facial; indica hipocalcemia | Facial twitching when tapping facial nerve; indicates hypocalcemia' },
      ],
      analogies: [
        'La hepcidina es como una valvula que controla la liberacion de hierro - la inflamacion cierra la valvula, causando anemia de enfermedad cronica. | Hepcidin is like a valve controlling iron release - inflammation closes the valve, causing anemia of chronic disease.',
        'El sistema PTH-calcio es como un termostato - cuando el calcio baja, la PTH se enciende para subir el nivel; cuando sube, la calcitonina lo apaga. | The PTH-calcium system is like a thermostat - when calcium drops, PTH turns on to raise the level; when it rises, calcitonin turns it down.',
        'El magnesio serico es como mirar solo la punta del iceberg - el 99% del magnesio esta adentro de las celulas y huesos, no en la sangre. | Serum magnesium is like looking at only the tip of the iceberg - 99% of magnesium is inside cells and bones, not in blood.',
      ],
      examples: [
        'La anemia ferropenica es la deficiencia nutricional mas comun en el mundo, afectando a ~2 mil millones de personas | Iron deficiency anemia is the most common nutritional deficiency worldwide, affecting ~2 billion people',
        'La hipomagnesemia causa hipokalemia refractaria - si el potasio no sube con reemplazo, hay que verificar el magnesio | Hypomagnesemia causes refractory hypokalemia - if potassium won\'t rise, check magnesium',
        'Los pacientes con enfermedad celiaca desarrollan deficiencia de hierro porque el hierro se absorbe en el duodeno, donde hay mayor dano | Celiac patients develop iron deficiency because iron is absorbed in the damaged duodenum',
        'El uso cronico de IBP reduce la absorcion de calcio, magnesio y hierro por disminucion del acido gastrico | Chronic PPI use reduces calcium, magnesium, and iron absorption from decreased gastric acid',
      ],
      clinicalNotes: 'La hipomagnesemia debe corregirse antes de tratar la hipokalemia, ya que el magnesio es necesario para la funcion de los canales de potasio (ROMK). La ferritina es un reactante de fase aguda; en inflamacion, use saturacion de transferrina para evaluar el estado de hierro. Siempre evalue calcio, fosforo, PTH y 25(OH)D juntos en trastornos oseo-minerales. | Correct hypomagnesemia before treating hypokalemia. Ferritin is an acute phase reactant; use transferrin saturation in inflammation. Evaluate calcium, phosphorus, PTH, and 25(OH)D together.',
    },
    4: {
      level: 4,
      summary:
        'La evaluacion clinica avanzada de minerales incluye paneles de estudios de hierro, perfiles oseo-minerales, monitoreo de electrolitos y diagnostico diferencial de deficiencias en malabsorcion, enfermedad renal y estados criticos. Las interacciones medicamento-mineral y el manejo en poblaciones especiales son esenciales para la practica clinica. | Advanced clinical mineral evaluation includes iron studies panels, bone-mineral profiles, electrolyte monitoring, and differential diagnosis of deficiencies in malabsorption, kidney disease, and critical illness. Drug-mineral interactions and management in special populations are essential for clinical practice.',
      explanation: `## Evaluacion de Laboratorio | Laboratory Assessment

### Panel de Estudios de Hierro | Iron Studies Panel

\`\`\`
Hierro serico: Bajo en ADF, normal/alto en anemia de enfermedad cronica (AEC)
TIBC: Alto en ADF, normal/bajo en AEC
Saturacion de transferrina: <15% = deficiencia de hierro
Ferritina: <30 ng/mL = deficiencia de hierro (reactante de fase aguda)
Recuento de reticulocitos: Bajo en ADF (respuesta medular inadecuada)

Diagnostico diferencial de anemia microcitica:
  |-- Deficiencia de hierro: Ferritina baja, TIBC alta, RDW alto
  |-- Talasemia: Ferritina normal/alta, TIBC normal, RDW bajo
  |-- Anemia de enfermedad cronica: Ferritina normal/alta, TIBC baja
  |-- Anemia sideroblastica: Ferritina alta, TIBC normal, sideroblastos en anillo
\`\`\`

### Evaluacion Oseo-Mineral | Bone-Mineral Assessment

\`\`\`
Panel basico:
  - Calcio total (corregir por albumina: Ca corregido = Ca medido + 0.8 x (4.0 - albumina))
  - Calcio ionizado (forma fisiologicamente activa)
  - Fosforo
  - PTH intacta
  - 25-hidroxivitamina D
  - Fosfatasa alcalina (marcador de recambio oseo)

Evaluacion de zinc:
  - Zinc plasmatico: Disminuido en deficiencia (pero tambien en inflamacion)
  - Zinc urinario: Aumentado en deficiencia (mala retencion)
  - Fosfatasa alcalina: Enzima zinc-dependiente (disminuida en deficiencia)
\`\`\`

### Monitoreo de Electrolitos | Electrolyte Monitoring

\`\`\`
Hiponatremia (Na+ <135 mEq/L):
  Clasificacion por volemia:
    |-- Hipovolemica: Perdidas GI/renales -> Reponer con salina normal
    |-- Euvolemica: SIADH -> Restriccion de liquidos, vaptanes
    |-- Hipervolemica: IC, cirrosis, ERC -> Restriccion de Na+ y agua

  Correccion: No mas de 8-10 mEq/L en 24h (riesgo de mielinolisis central pontina)

Hipokalemia (K+ <3.5 mEq/L):
  Causas: Diureticos, vomito, diarrea, aldosteronismo
  ECG: Ondas U, aplanamiento de T, depresion ST
  Tratamiento: KCl oral o IV (max 10 mEq/h por via periferica)
  CLAVE: Corregir magnesio primero si esta bajo

Hiperkalemia (K+ >5.5 mEq/L):
  Causas: ERC, IECAs/ARA2, espironolactona, acidosis
  ECG: T picudas, QRS ancho, bradicardia -> fibrilacion ventricular
  Tratamiento emergente:
    1. Gluconato de calcio (estabilizar membrana cardiaca)
    2. Insulina + glucosa (shift intracelular)
    3. Bicarbonato (si acidosis)
    4. Kayexalate o patiromer (eliminacion)
    5. Dialisis (si refractario)

Hipomagnesemia (Mg2+ <1.8 mg/dL):
  Causas: Diureticos de asa, alcoholismo, IBP, diarrea cronica
  Relacion con otros electrolitos:
    - Causa hipokalemia refractaria (Mg necesario para canales ROMK)
    - Causa hipocalcemia (Mg necesario para secrecion de PTH)
  Tratamiento: MgSO4 IV 1-2g en emergencias; Mg oral para replecion
\`\`\`

## Trastornos Minerales en Enfermedad Renal Cronica | CKD Mineral Disorders

\`\`\`
CKD-MBD (Trastorno mineral oseo de la ERC):

Fisiopatologia:
  ERC -> Disminucion de 1-alfa-hidroxilasa -> Calcitriol bajo ->
    |-- Absorcion intestinal de Ca2+ reducida -> Hipocalcemia
    |-- Hiperfosfatemia (excrecion renal disminuida)
    |-- PTH elevada (hiperparatiroidismo secundario)
    |-- FGF-23 elevado (fosfatonina)

Cascada de eventos:
  Hiperfosfatemia + Hipocalcemia -> PTH alta ->
    Osteodistrofia renal (osteitis fibrosa quistica)
    Calcificacion vascular (mortalidad cardiovascular)

Manejo:
  - Restriccion de fosforo en dieta (<800 mg/dia)
  - Quelantes de fosfato con comidas (acetato de calcio, sevelamer, lantano)
  - Calcitriol o analogos (paricalcitol) para PTH elevada
  - Cinacalcet (calcimimetico) si hiperparatiroidismo refractario
  - Objetivo: PTH 2-9x normal para estadio de ERC
\`\`\`

## Hierro en Situaciones Clinicas Especiales | Iron in Special Clinical Situations

### Anemia de Enfermedad Cronica vs Deficiencia de Hierro | ACD vs Iron Deficiency

\`\`\`
                    | ADF      | AEC     | Ambas   |
Hierro serico       | Bajo     | Bajo    | Bajo    |
TIBC                | Alto     | Bajo    | Variable|
Ferritina           | <30      | >100    | 30-100  |
Sat. transferrina   | <15%     | 15-20%  | <20%    |
Hepcidina           | Baja     | Alta    | Variable|
Receptor soluble TF | Alto     | Normal  | Alto    |

Mecanismo AEC:
  Inflamacion cronica -> IL-6 -> Hepcidina hepatica alta ->
    |-- Ferroportina degradada -> Hierro atrapado en enterocitos y macrofagos
    |-- "Secuestro funcional de hierro"
\`\`\`

### Hierro IV vs Oral | IV vs Oral Iron

\`\`\`
Indicaciones para hierro IV:
  - Intolerancia o falla de hierro oral
  - Malabsorcion (celiaca, bariatrica, EII)
  - ERC en hemodialisis
  - Necesidad de replecion rapida (perioperatorio, embarazo tardio)

Preparaciones:
  - Hierro dextrano (riesgo anafilaxia: dosis de prueba requerida)
  - Hierro sacarosa (seguro, multiples dosis)
  - Carboximaltosa ferrica (dosis unica alta, conveniente)
  - Ferumoxitol (dosis unica, infusion rapida)
\`\`\`

## Interacciones Medicamento-Mineral | Drug-Mineral Interactions

\`\`\`
IBP/Antiacidos + Minerales:
  - Disminucion de acido -> Menor absorcion de hierro, calcio, magnesio
  - Hipomagnesemia por uso prolongado de IBP

Diureticos de asa + Electrolitos:
  - Perdida de Na+, K+, Ca2+, Mg2+
  - Considerar suplementacion de K+ y Mg+

Tiazidas + Calcio:
  - Aumentan reabsorcion renal de calcio (efecto opuesto a diureticos de asa)
  - Pueden causar hipercalcemia

IECAs/ARA2 + Potasio:
  - Reducen excrecion de potasio -> Riesgo de hiperkalemia
  - Monitorear K+ especialmente en ERC

Bisfosfonatos + Minerales:
  - Tomar con estomago vacio (quelacion con calcio, hierro, magnesio)
  - Separar suplementos minerales por 30-60 minutos
\`\`\``,
      keyTerms: [
        { term: 'saturacion de transferrina | transferrin saturation', definition: 'Porcentaje de sitios de union de hierro en transferrina ocupados; <15% indica deficiencia de hierro | Percentage of iron-binding sites on transferrin occupied; <15% indicates iron deficiency' },
        { term: 'CKD-MBD', definition: 'Trastorno mineral oseo de la enfermedad renal cronica; incluye hiperfosfatemia, hipocalcemia, hiperparatiroidismo secundario y osteodistrofia renal | Chronic kidney disease mineral bone disorder' },
        { term: 'FGF-23', definition: 'Factor de crecimiento fibroblastico 23; fosfatonina que promueve excrecion renal de fosforo e inhibe 1-alfa-hidroxilasa | Fibroblast growth factor 23; phosphatonin promoting renal phosphorus excretion' },
        { term: 'mielinolisis central pontina | central pontine myelinolysis', definition: 'Desmielinizacion del puente cerebral por correccion demasiado rapida de la hiponatremia | Pontine demyelination from overly rapid correction of hyponatremia' },
        { term: 'receptor soluble de transferrina | soluble transferrin receptor', definition: 'Marcador de deficiencia de hierro verdadera no afectado por inflamacion; elevado en deficiencia de hierro | Marker of true iron deficiency unaffected by inflammation; elevated in iron deficiency' },
        { term: 'calcimimetico | calcimimetic', definition: 'Farmaco (cinacalcet) que activa el receptor sensible al calcio de la paratiroides, reduciendo PTH | Drug activating the parathyroid calcium-sensing receptor, reducing PTH' },
      ],
      analogies: [
        'La anemia de enfermedad cronica es como tener dinero en el banco pero no poder retirarlo - el hierro esta ahi pero la hepcidina no lo deja salir. | Anemia of chronic disease is like having money in the bank but not being able to withdraw it - iron is there but hepcidin won\'t let it out.',
        'El CKD-MBD es como un tira y afloja de tres bandas entre calcio, fosforo y PTH que nadie gana. | CKD-MBD is like a three-way tug-of-war between calcium, phosphorus, and PTH that no one wins.',
        'Corregir la hiponatremia demasiado rapido es como inflar un globo demasiado rapido - puede reventar (mielinolisis). | Correcting hyponatremia too quickly is like inflating a balloon too fast - it can pop (myelinolysis).',
      ],
      examples: [
        'Paciente con ERC en estadio 4: Fosforo alto, calcio bajo, PTH elevada -> Quelante de fosfato + calcitriol | CKD stage 4 patient: High phosphorus, low calcium, elevated PTH -> Phosphate binder + calcitriol',
        'Hipokalemia persistente en paciente con diureticos: K+ no sube a pesar de reemplazo -> Verificar Mg2+ (hipomagnesemia causando hipoK refractaria) | Persistent hypokalemia: K+ won\'t rise despite replacement -> Check Mg2+',
        'Anemia en paciente con artritis reumatoide: Ferritina 200 pero sat. transferrina 12% -> Deficiencia funcional de hierro superpuesta a AEC | Anemia in RA: Ferritin 200 but sat 12% -> Functional iron deficiency on ACD',
        'Hiponatremia severa (Na+ 110): Correccion con salina hipertonica 3% a no mas de 8 mEq/L en 24h para evitar mielinolisis | Severe hyponatremia: Correction with 3% saline at no more than 8 mEq/L in 24h',
      ],
      clinicalNotes: 'En inflamacion, la ferritina esta falsamente elevada; use saturacion de transferrina y receptor soluble de transferrina para evaluar deficiencia de hierro verdadera. En ERC, use calcitriol o paricalcitol ya que el rinon no puede hacer la 1-alfa-hidroxilacion. Siempre corrija magnesio antes de potasio en hipokalemia refractaria. La correccion de hiponatremia no debe exceder 8-10 mEq/L/24h. | In inflammation, ferritin is falsely elevated. In CKD, use calcitriol. Always correct magnesium before potassium. Sodium correction must not exceed 8-10 mEq/L/24h.',
    },
    5: {
      level: 5,
      summary:
        'La ciencia avanzada de los minerales integra regulacion genomica, polimorfismos en genes de transporte y metabolismo, terapias de reemplazo basadas en evidencia, y enfoques de precision para el manejo de trastornos minerales complejos incluyendo hemocromatosis, sindrome de realimentacion, y trastornos oseo-minerales refractarios. | Advanced mineral science integrates genomic regulation, polymorphisms in transport and metabolism genes, evidence-based replacement therapies, and precision approaches for managing complex mineral disorders including hemochromatosis, refeeding syndrome, and refractory bone-mineral disorders.',
      explanation: `## Genetica de los Trastornos Minerales | Genetics of Mineral Disorders

### Trastornos del Hierro | Iron Disorders

\`\`\`
Hemocromatosis Hereditaria (HH):
  HFE gene:
    - C282Y: 85% de casos de HH (homocigoto)
    - H63D: Forma mas leve, heterocigoto compuesto
    - Mecanismo: Regulacion deteriorada de hepcidina -> sobrecarga de hierro

  Tipos no HFE:
    - Tipo 2A (HJV): Hemocromatosis juvenil (severa, temprana)
    - Tipo 2B (HAMP): Deficiencia de hepcidina
    - Tipo 3 (TFR2): Receptor de transferrina 2
    - Tipo 4 (SLC40A1/Ferroportina): Enfermedad de ferroportina

  Manejo:
    - Flebotomia terapeutica: Objetivo ferritina <50 ng/mL
    - Fase de induccion: 500 mL/semana hasta deplecion
    - Mantenimiento: Cada 2-4 meses
    - Quelacion (deferoxamina, deferasirox): Si flebotomia imposible

IRIDA (Anemia ferropenica refractaria a hierro):
  TMPRSS6 (Matriptasa-2):
    - Variantes causan IRIDA
    - Hepcidina inapropiadamente alta a pesar de deficiencia de hierro
    - No responde a hierro oral, respuesta parcial a hierro IV
\`\`\`

### Trastornos del Calcio | Calcium Disorders

\`\`\`
Hipercalcemia hipocalciurica familiar (FHH):
  CaSR (Receptor sensible al calcio):
    - Mutaciones inactivantes: FHH tipo 1
    - Punto de ajuste de calcio elevado
    - Hipercalcemia leve, calcio urinario bajo
    - Distinguir de hiperparatiroidismo primario (importante)
    - Relacion Ca/Cr urinario <0.01 sugiere FHH

Raquitismo dependiente de vitamina D:
  Tipo 1 (CYP27B1): Deficiencia de 1-alfa-hidroxilasa
    - Tratamiento: Calcitriol
  Tipo 2 (VDR): Resistencia al receptor de vitamina D
    - Tratamiento: Dosis muy altas de calcitriol + calcio IV
\`\`\`

## Sindrome de Realimentacion | Refeeding Syndrome

\`\`\`
Fisiopatologia:
  Desnutricion prolongada -> Deplecion de fosforo, potasio, magnesio intracelulares
  Realimentacion con carbohidratos -> Insulina sube ->
    |-- Shift masivo de fosforo, potasio, magnesio al intracelular
    |-- Hipofosfatemia severa (hallmark del sindrome)
    |-- Tiamina agotada (aumento de demanda metabolica)

Consecuencias potencialmente letales:
  - Hipofosfatemia: Debilidad muscular, insuficiencia respiratoria, rabdomiolisis
  - Hipokalemia: Arritmias cardiacas
  - Hipomagnesemia: Arritmias, convulsiones
  - Deficiencia de tiamina: Encefalopatia de Wernicke

Poblaciones en riesgo:
  - IMC <16 kg/m2
  - Perdida de peso >15% en 3-6 meses
  - Ingesta minima por >10 dias
  - Niveles basales bajos de K+, PO4, Mg2+
  - Alcoholismo cronico, anorexia nerviosa

Prevencion y manejo:
  1. Identificar pacientes en riesgo
  2. Verificar y replecionar fosforo, potasio, magnesio ANTES de alimentar
  3. Administrar tiamina 200-300 mg IV antes de alimentacion
  4. Iniciar alimentacion a 10-20 kcal/kg/dia (no >50% de requerimientos)
  5. Avanzar lentamente durante 4-7 dias
  6. Monitorear electrolitos cada 12h los primeros 3 dias
\`\`\`

## Terapias Minerales Avanzadas | Advanced Mineral Therapies

### Hierro IV de Nueva Generacion | New Generation IV Iron

\`\`\`
Carboximaltosa ferrica (Ferinject/Injectafer):
  - Dosis unica hasta 1000 mg en 15 minutos
  - Sin dosis de prueba requerida
  - Indicaciones: ADF con fallo oral, ERC, EII, embarazo tardio
  - Efecto adverso: Hipofosfatemia (FGF-23 mediada)

Derisomaltosa ferrica (Monoferric):
  - Dosis unica hasta 20 mg/kg (max 1000 mg)
  - Infusion en 20 minutos
  - Menor riesgo de hipofosfatemia que carboximaltosa

Ferumoxitol (Feraheme):
  - Dosis unica 510 mg en 15 minutos
  - Puede interferir con IRM (nanoparticulas de hierro)
  - Advertencia de caja negra por anafilaxia (raro)

Monitorizacion post-infusion:
  - Ferritina y sat. transferrina a las 4-8 semanas
  - No medir antes (falsamente elevados por hierro libre)
\`\`\`

### Terapia con Quelantes de Fosfato en ERC | Phosphate Binder Therapy in CKD

\`\`\`
Comparacion de quelantes:
  Basados en calcio:
    - Acetato de calcio: Efectivo, barato
    - Riesgo: Hipercalcemia, calcificacion vascular

  No basados en calcio:
    - Sevelamer (Renagel/Renvela): Sin calcio, efectos pleiotropicos
    - Lantano: Efectivo, masticable
    - Citrato ferrico: Quelante + suplemento de hierro
    - Sucroferric oxyhydroxide: Alta capacidad de union

  Emergente:
    - Tenapanor: Inhibidor NHE3 (reduce absorcion intestinal de fosforo)
\`\`\`

## Minerales y Microbioma | Minerals and Microbiome

\`\`\`
Hierro y microbioma:
  - Hierro no absorbido en colon alimenta bacterias patogenas
  - Suplementacion oral de hierro altera composicion microbiana
  - Bacterias beneficiosas (Lactobacillus) compiten por hierro
  - Implicacion: Hierro IV puede ser preferible en EII

Zinc y barrera intestinal:
  - Zinc mantiene integridad de uniones estrechas
  - Deficiencia aumenta permeabilidad intestinal ("intestino permeable")
  - Suplementacion con zinc reduce duracion de diarrea en ninos (OMS)

Selenio y microbioma:
  - Selenoproteinas en mucosa intestinal
  - Deficiencia altera diversidad microbiana
  - Puede mediar algunos efectos del selenio en inmunidad
\`\`\`

## Enfoques de Precision en Trastornos Minerales | Precision Approaches

\`\`\`
Pruebas geneticas actualmente disponibles:
  - HFE: Tamizaje de hemocromatosis en pacientes con ferritina/sat TF elevadas
  - CaSR: Diferenciacion de FHH vs hiperparatiroidismo primario
  - TMPRSS6: Diagnostico de IRIDA
  - VDR: Explicar variacion en respuesta a vitamina D

Biomarcadores avanzados:
  - Hepcidina serica: Distinguir ADF de AEC (emergente, no estandarizado)
  - FGF-23: Marcador precoz de trastorno mineral en ERC
  - Klotho: Co-receptor de FGF-23, potencial biomarcador de envejecimiento
  - Eritroferrone: Mediador de supresion de hepcidina post-hemorragia

Futuras direcciones:
  - Algoritmos de dosificacion de hierro basados en hepcidina
  - Terapias dirigidas a FGF-23 en ERC
  - Modulacion del microbioma para mejorar absorcion mineral
  - Nanoparticulas para entrega dirigida de minerales
\`\`\``,
      keyTerms: [
        { term: 'hemocromatosis hereditaria | hereditary hemochromatosis', definition: 'Trastorno genetico de sobrecarga de hierro, mas comunmente por mutaciones HFE, que causa dano hepatico, cardiaco y endocrino | Genetic iron overload disorder, most commonly from HFE mutations, causing liver, cardiac, and endocrine damage' },
        { term: 'sindrome de realimentacion | refeeding syndrome', definition: 'Shift intracelular potencialmente letal de fosforo, potasio y magnesio al reiniciar alimentacion despues de desnutricion prolongada | Potentially lethal intracellular shift of phosphorus, potassium, and magnesium when refeeding after prolonged malnutrition' },
        { term: 'IRIDA', definition: 'Anemia ferropenica refractaria a hierro; causada por mutaciones en TMPRSS6 que resultan en hepcidina inapropiadamente elevada | Iron-refractory iron deficiency anemia; caused by TMPRSS6 mutations resulting in inappropriately elevated hepcidin' },
        { term: 'FHH', definition: 'Hipercalcemia hipocalciurica familiar; mutacion del receptor sensible al calcio (CaSR) que causa punto de ajuste de calcio elevado | Familial hypocalciuric hypercalcemia; CaSR mutation causing elevated calcium set-point' },
        { term: 'eritroferrone | erythroferrone', definition: 'Hormona producida por eritroblastos que suprime hepcidina, facilitando absorcion de hierro durante eritropoyesis aumentada | Hormone produced by erythroblasts that suppresses hepcidin, facilitating iron absorption during increased erythropoiesis' },
        { term: 'Klotho', definition: 'Co-receptor de FGF-23 y proteina anti-envejecimiento; niveles disminuidos en ERC contribuyen a resistencia a FGF-23 | FGF-23 co-receptor and anti-aging protein; decreased levels in CKD contribute to FGF-23 resistance' },
        { term: 'tenapanor', definition: 'Inhibidor de NHE3 que reduce absorcion intestinal de fosforo por via paracelular; nuevo enfoque para hiperfosfatemia en ERC | NHE3 inhibitor reducing intestinal paracellular phosphorus absorption; novel approach for CKD hyperphosphatemia' },
      ],
      analogies: [
        'La hemocromatosis es como una puerta de entrada de hierro que esta atascada abierta - el hierro sigue entrando pero el cuerpo no puede detener la absorcion. | Hemochromatosis is like an iron entry door stuck open - iron keeps coming in but the body can\'t stop absorption.',
        'El sindrome de realimentacion es como encender un motor que ha estado apagado mucho tiempo - si le das demasiada gasolina de golpe, puede fallar catastroficamente. | Refeeding syndrome is like starting an engine that\'s been off for a long time - too much gas at once can cause catastrophic failure.',
        'La eritroferrone es como una senal de llamada de auxilio desde la medula osea - cuando necesita mas hierro para hacer globulos rojos, manda la senal para silenciar a la hepcidina. | Erythroferrone is like a distress signal from bone marrow - when it needs more iron for red blood cells, it signals to silence hepcidin.',
      ],
      examples: [
        'Hemocromatosis HFE C282Y homocigoto diagnosticada por ferritina 1200, sat. transferrina 85% -> Flebotomia semanal hasta ferritina <50 | HFE C282Y homozygous hemochromatosis: Ferritin 1200, sat 85% -> Weekly phlebotomy',
        'Paciente con anorexia nerviosa hospitalizada: Fosforo 1.2 al dia 2 de realimentacion -> Detener avance calorico, replecionar IV, monitorear c/12h | Anorexia nervosa patient: Phosphorus 1.2 on day 2 -> Stop caloric advance, IV repletion',
        'Carboximaltosa ferrica 1000 mg IV en EII con ADF -> Hipofosfatemia a las 2 semanas (FGF-23 elevado) -> Monitorear fosforo | Ferric carboxymaltose in IBD: Hypophosphatemia at 2 weeks from FGF-23 elevation',
        'Hipercalcemia leve persistente con PTH normal-alto y Ca/Cr urinario <0.01 -> Considerar FHH, prueba genetica de CaSR | Persistent mild hypercalcemia with Ca/Cr <0.01 -> Consider FHH, CaSR testing',
      ],
      clinicalNotes: `Perlas clinicas avanzadas | Advanced Clinical Pearls:

1. **Hemocromatosis:** Tamizar con ferritina y sat. transferrina en hepatopatia inexplicada, diabetes, artropatia, cardiomiopatia; confirmar con genetica HFE | Screen with ferritin and sat in unexplained liver disease, diabetes, arthropathy

2. **Sindrome de realimentacion:** SIEMPRE administrar tiamina IV antes de iniciar alimentacion en pacientes de riesgo; monitorear fosforo cada 12h los primeros 3 dias | ALWAYS give IV thiamine before feeding at-risk patients

3. **Hierro IV y FGF-23:** La carboximaltosa ferrica causa hipofosfatemia via aumento de FGF-23 intacto; la derisomaltosa ferrica tiene menor riesgo | Ferric carboxymaltose causes hypophosphatemia via FGF-23; derisomaltose has lower risk

4. **Hiponatremia:** La velocidad de correccion es mas importante que el nivel final - nunca exceder 8-10 mEq/L/24h independientemente de la severidad | Correction rate matters more than final level

5. **ERC y minerales:** FGF-23 se eleva antes que fosforo en ERC temprana; puede ser marcador precoz de progresion | FGF-23 rises before phosphorus in early CKD

6. **Eritroferrone en practica:** Explica supresion de hepcidina post-hemorragica y en talasemia; diana terapeutica potencial para anemia de enfermedad cronica | Explains post-hemorrhagic hepcidin suppression; potential therapeutic target for ACD`,
    },
  },

  media: [],

  citations: [
    {
      id: 'dri-minerals',
      type: 'guideline',
      title: 'Dietary Reference Intakes for Minerals',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      url: 'https://www.nap.edu',
    },
    {
      id: 'camaschella-iron-deficiency',
      type: 'journal',
      title: 'Iron-Deficiency Anemia',
      authors: ['C Camaschella'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1401038',
    },
    {
      id: 'kdigo-ckd-mbd',
      type: 'guideline',
      title: 'KDIGO Clinical Practice Guideline for CKD-MBD',
      authors: ['KDIGO CKD-MBD Work Group'],
      source: 'Kidney International Supplements',
      url: 'https://kdigo.org/guidelines/ckd-mbd/',
    },
    {
      id: 'mehta-refeeding',
      type: 'journal',
      title: 'Refeeding Syndrome: What It Is, and How to Prevent and Treat It',
      authors: ['NM Mehanna', 'J Moledina', 'J Travis'],
      source: 'BMJ',
      url: 'https://doi.org/10.1136/bmj front.front.front',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrientes-macronutrients', targetType: 'topic', relationship: 'sibling', label: 'Macronutrientes | Macronutrients' },
    { targetId: 'nutrition-vitaminas-vitamins', targetType: 'topic', relationship: 'sibling', label: 'Vitaminas | Vitamins' },
    { targetId: 'nutrition-enfermedades-cronicas', targetType: 'topic', relationship: 'related', label: 'Nutricion y enfermedades cronicas | Nutrition and Chronic Disease' },
    { targetId: 'hematologic-anemia', targetType: 'condition', relationship: 'related', label: 'Anemia' },
    { targetId: 'nephrology-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Enfermedad renal cronica | Chronic Kidney Disease' },
    { targetId: 'endocrine-parathyroid', targetType: 'system', relationship: 'related', label: 'Paratiroides | Parathyroid' },
  ],

  tags: {
    systems: ['hematologic', 'renal', 'musculoskeletal', 'endocrine', 'cardiovascular'],
    topics: ['nutrition', 'biochemistry', 'nephrology', 'preventive-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family-medicine', 'surgery'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mineralesMinerals;
