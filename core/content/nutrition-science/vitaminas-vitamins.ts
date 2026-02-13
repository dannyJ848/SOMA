/**
 * Vitaminas / Vitamins
 *
 * Contenido educativo bilingue (espanol primero) sobre vitaminas liposolubles
 * e hidrosolubles, incluyendo funciones, deficiencias, toxicidad,
 * interacciones medicamentosas y aplicaciones clinicas.
 *
 * Bilingual educational content (Spanish-first) on fat-soluble and
 * water-soluble vitamins, including functions, deficiencies, toxicity,
 * drug interactions, and clinical applications.
 */

import { EducationalContent } from '../types';

export const vitaminasVitamins: EducationalContent = {
  id: 'nutrition-vitaminas-vitamins',
  type: 'topic',
  name: 'Vitamins | Vitaminas',
  nameEs: 'Vitaminas',
  alternateNames: [
    'Vitaminas liposolubles e hidrosolubles | Fat-soluble and water-soluble vitamins',
    'Micronutrientes vitaminicos | Vitamin Micronutrients',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las vitaminas son nutrientes que tu cuerpo necesita en pequenas cantidades para funcionar correctamente. Hay dos tipos: las que se guardan en la grasa del cuerpo (A, D, E, K) y las que se eliminan con el agua y necesitas todos los dias (vitamina C y las vitaminas B). | Vitamins are nutrients your body needs in small amounts to work properly. There are two types: those stored in body fat (A, D, E, K) and those eliminated with water that you need daily (vitamin C and B vitamins).',
      explanation: `## Que Son las Vitaminas | What Are Vitamins

Las vitaminas son como pequenos ayudantes que tu cuerpo necesita para estar sano. Aunque solo necesitas cantidades muy pequenas, son super importantes.

Vitamins are like little helpers your body needs to stay healthy. Even though you only need tiny amounts, they are super important.

---

### Vitaminas Liposolubles (se guardan en la grasa) | Fat-Soluble Vitamins (stored in fat)

**Vitamina A - Para tus ojos y piel | For your eyes and skin**
- Te ayuda a ver, especialmente en la oscuridad | Helps you see, especially in the dark
- Mantiene tu piel y mucosas saludables | Keeps your skin and mucous membranes healthy
- **Donde encontrarla:** Zanahorias, camotes, espinaca, higado | **Where to find it:** Carrots, sweet potatoes, spinach, liver

**Vitamina D - Para tus huesos | For your bones**
- Ayuda a tus huesos a absorber calcio para ser fuertes | Helps bones absorb calcium to be strong
- Tu cuerpo la hace cuando te da el sol | Your body makes it when you get sunlight
- **Donde encontrarla:** Luz del sol, leche fortificada, pescado | **Where to find it:** Sunlight, fortified milk, fish

**Vitamina E - Protector de celulas | Cell Protector**
- Protege tus celulas del dano | Protects your cells from damage
- **Donde encontrarla:** Nueces, semillas, aceites vegetales | **Where to find it:** Nuts, seeds, vegetable oils

**Vitamina K - Para la sangre | For your blood**
- Ayuda a que tu sangre se coagule cuando te cortas | Helps blood clot when you get a cut
- **Donde encontrarla:** Espinaca, brocoli, col rizada | **Where to find it:** Spinach, broccoli, kale

### Vitaminas Hidrosolubles (no se guardan, necesitas cada dia) | Water-Soluble Vitamins (not stored, need daily)

**Vitamina C - Para defenderte y sanar | For defense and healing**
- Ayuda a tu cuerpo a combatir infecciones | Helps your body fight infections
- Ayuda a sanar heridas | Helps heal wounds
- **Donde encontrarla:** Naranjas, fresas, pimientos, guayaba | **Where to find it:** Oranges, strawberries, peppers, guava

**Vitaminas B - Para energia y cerebro | For energy and brain**
- Te dan energia de los alimentos | Give you energy from food
- Ayudan a tu cerebro y nervios a funcionar | Help your brain and nerves work
- **Donde encontrarla:** Carne, huevos, granos integrales, frijoles | **Where to find it:** Meat, eggs, whole grains, beans

### Que Pasa Si No Comes Suficientes Vitaminas | What Happens Without Enough Vitamins

- Sin vitamina C -> Encias sangran, heridas sanan lento | Without vitamin C -> Bleeding gums, slow healing
- Sin vitamina D -> Huesos debiles y blandos | Without vitamin D -> Weak, soft bones
- Sin vitamina A -> Problemas para ver de noche | Without vitamin A -> Trouble seeing at night
- Sin vitaminas B -> Te sientes cansado y sin energia | Without B vitamins -> You feel tired and without energy

### Consejos Para Obtener Tus Vitaminas | Tips to Get Your Vitamins

1. **Come un arcoiris de colores** - Diferentes colores significan diferentes vitaminas | Eat a rainbow of colors
2. **No cocines demasiado las verduras** - Algunas vitaminas se destruyen con el calor | Don't overcook vegetables
3. **Come frutas frescas** - Tienen mas vitaminas | Eat fresh fruits
4. **Sal al sol 15 minutos al dia** - Para vitamina D (con proteccion solar) | Get 15 minutes of sun daily`,
      keyTerms: [
        { term: 'vitaminas | vitamins', definition: 'Nutrientes que tu cuerpo necesita en pequenas cantidades para crecer y funcionar bien | Nutrients your body needs in small amounts to grow and work properly' },
        { term: 'liposoluble | fat-soluble', definition: 'Que se disuelve en grasa y se puede guardar en el cuerpo | Dissolves in fat and can be stored in the body' },
        { term: 'hidrosoluble | water-soluble', definition: 'Que se disuelve en agua y el cuerpo no la guarda, por eso la necesitas cada dia | Dissolves in water and the body does not store it, so you need it daily' },
        { term: 'deficiencia | deficiency', definition: 'No tener suficiente de una vitamina que tu cuerpo necesita | Not having enough of a vitamin your body needs' },
      ],
      analogies: [
        'Las vitaminas son como las herramientas en una caja de herramientas - cada una tiene un trabajo especifico y necesitas todas para que todo funcione bien. | Vitamins are like tools in a toolbox - each has a specific job and you need all of them for everything to work well.',
        'Las vitaminas liposolubles son como el dinero en una cuenta de ahorro - se guardan para despues. Las hidrosolubles son como el efectivo - se gastan y necesitas mas cada dia. | Fat-soluble vitamins are like money in a savings account - stored for later. Water-soluble are like cash - spent and you need more every day.',
      ],
      examples: [
        'Los marineros antiguos se enfermaban de escorbuto (falta de vitamina C) hasta que aprendieron a llevar naranjas y limones en los barcos | Ancient sailors got scurvy (vitamin C deficiency) until they learned to bring oranges and limes on ships',
        'Tomar leche con vitamina D agregada ayuda a que tus huesos crezcan fuertes | Drinking milk with added vitamin D helps bones grow strong',
        'Comer zanahorias (ricas en vitamina A) ayuda a mantener buena vision | Eating carrots (rich in vitamin A) helps maintain good vision',
      ],
      patientCounselingPoints: [
        'Coma frutas y verduras de diferentes colores cada dia para obtener todas las vitaminas | Eat fruits and vegetables of different colors every day to get all vitamins',
        'Si no le da mucho el sol, pregunte a su doctor sobre vitamina D | If you don\'t get much sun, ask your doctor about vitamin D',
        'Las mujeres embarazadas necesitan acido folico (vitamina B9) antes y durante el embarazo | Pregnant women need folic acid (vitamin B9) before and during pregnancy',
        'Tome las vitaminas liposolubles (A, D, E, K) con comidas que tengan grasa para mejor absorcion | Take fat-soluble vitamins (A, D, E, K) with meals containing fat for better absorption',
        'Incluya una fuente de vitamina C con alimentos ricos en hierro para mejorar la absorcion | Include a vitamin C source with iron-rich foods to improve absorption',
      ],
    },
    2: {
      level: 2,
      summary:
        'Las vitaminas son micronutrientes esenciales clasificados como liposolubles (A, D, E, K) que se almacenan en el tejido adiposo, e hidrosolubles (complejo B y C) que no se almacenan significativamente. Cada vitamina tiene funciones especificas, y tanto la deficiencia como el exceso pueden causar problemas de salud. | Vitamins are essential micronutrients classified as fat-soluble (A, D, E, K) that are stored in adipose tissue, and water-soluble (B-complex and C) that are not significantly stored. Each vitamin has specific functions, and both deficiency and excess can cause health problems.',
      explanation: `## Clasificacion de Vitaminas | Vitamin Classification

### Vitaminas Liposolubles (A, D, E, K) | Fat-Soluble Vitamins

| Vitamina | Funciones principales | Deficiencia | Toxicidad | Fuentes alimentarias |
|----------|----------------------|-------------|-----------|---------------------|
| A | Vision, funcion inmune, salud de piel | Ceguera nocturna, piel seca | Dano hepatico, dolor de huesos | Higado, zanahorias, camotes |
| D | Absorcion de calcio, salud osea | Raquitismo, osteomalacia | Hipercalcemia, calculos renales | Luz solar, pescado graso, leche fortificada |
| E | Antioxidante, proteccion celular | Dano nervioso, debilidad muscular | Riesgo de sangrado | Nueces, semillas, aceites |
| K | Coagulacion de sangre, metabolismo oseo | Moretones faciles, sangrado | Interfiere con anticoagulantes | Hojas verdes, brocoli |

### Vitaminas Hidrosolubles (Complejo B y C) | Water-Soluble Vitamins

| Vitamina | Funciones principales | Deficiencia | Fuentes alimentarias |
|----------|----------------------|-------------|---------------------|
| B1 (Tiamina) | Metabolismo energetico, funcion nerviosa | Beriberi, Wernicke-Korsakoff | Cerdo, granos integrales, legumbres |
| B2 (Riboflavina) | Produccion de energia, salud de piel | Labios agrietados, salpullido | Lacteos, huevos, hojas verdes |
| B3 (Niacina) | Metabolismo energetico, reparacion de ADN | Pelagra (diarrea, demencia, dermatitis) | Carne, pescado, cacahuates |
| B5 (Acido pantotenico) | Metabolismo, sintesis de hormonas | Fatiga, adormecimiento | Ampliamente distribuida |
| B6 (Piridoxina) | Metabolismo de aminoacidos, neurotransmisores | Anemia, depresion, confusion | Carne, papas, platanos |
| B7 (Biotina) | Metabolismo de grasas y carbohidratos | Caida de pelo, salpullido | Huevos, nueces, semillas |
| B9 (Folato) | Sintesis de ADN, formacion de globulos rojos | Defectos del tubo neural, anemia megaloblastica | Hojas verdes, legumbres, granos fortificados |
| B12 (Cobalamina) | Sintesis de ADN, funcion nerviosa | Anemia perniciosa, dano nervioso | Solo productos animales |
| C (Acido ascorbico) | Sintesis de colageno, antioxidante, inmunidad | Escorbuto, mala cicatrizacion | Citricos, fresas, pimientos, guayaba |

### Absorcion y Biodisponibilidad | Absorption and Bioavailability

**Factores que mejoran la absorcion | Enhancers:**
- Vitamina C con hierro no hemico (fuentes vegetales) | Vitamin C with non-heme iron
- Grasa con vitaminas liposolubles (A, D, E, K) | Fat with fat-soluble vitamins
- Vitamina D con calcio | Vitamin D with calcium

**Factores que reducen la absorcion | Inhibitors:**
- **Fitatos** (granos, legumbres): Se unen a minerales | Bind minerals
- **Oxalatos** (espinaca, ruibarbo): Reducen absorcion de calcio | Reduce calcium absorption
- **Taninos** (te, cafe): Reducen absorcion de hierro | Reduce iron absorption

### Poblaciones en Riesgo de Deficiencia | Populations at Risk

- Mujeres embarazadas y lactantes | Pregnant and breastfeeding women
- Bebes y ninos | Infants and children
- Adultos mayores | Older adults
- Vegetarianos y veganos (B12, hierro, zinc) | Vegetarians and vegans
- Personas con condiciones de malabsorcion | People with malabsorption conditions
- Personas con dietas restrictivas | Those on restrictive diets`,
      keyTerms: [
        { term: 'antioxidante | antioxidant', definition: 'Sustancia que protege a las celulas del dano causado por radicales libres | A substance that protects cells from damage caused by free radicals' },
        { term: 'biodisponibilidad | bioavailability', definition: 'La cantidad de un nutriente que se absorbe y esta disponible para uso del cuerpo | The amount of a nutrient that is absorbed and available for use by the body' },
        { term: 'escorbuto | scurvy', definition: 'Enfermedad causada por deficiencia de vitamina C, con sangrado, moretones y mala cicatrizacion | Disease caused by vitamin C deficiency with bleeding, bruising, and poor wound healing' },
        { term: 'raquitismo | rickets', definition: 'Enfermedad osea en ninos causada por deficiencia de vitamina D con huesos debiles y blandos | Bone disease in children caused by vitamin D deficiency leading to soft, weak bones' },
        { term: 'anemia megaloblastica | megaloblastic anemia', definition: 'Anemia con globulos rojos grandes e inmaduros causada por deficiencia de folato o vitamina B12 | Anemia with large, immature red blood cells caused by folate or vitamin B12 deficiency' },
        { term: 'bocio | goiter', definition: 'Glandula tiroides agrandada causada por deficiencia de yodo | Enlarged thyroid gland caused by iodine deficiency' },
        { term: 'defectos del tubo neural | neural tube defects', definition: 'Defectos de nacimiento del cerebro y columna prevenidos con ingesta adecuada de folato | Birth defects of the brain and spine prevented by adequate folate intake' },
      ],
      analogies: [
        'Las vitaminas son como las bujias de un carro - pequenas pero esenciales para que el motor funcione. | Vitamins are like the spark plugs in a car - tiny but essential for the engine to run.',
        'Las vitaminas liposolubles que se acumulan en el cuerpo pueden ser peligrosas en exceso, como llenar demasiado un tanque de gasolina. | Fat-soluble vitamins that accumulate can be dangerous in excess, like overfilling a gas tank.',
        'La biodisponibilidad es como la cantidad de correo que realmente llega a tu casa versus lo que se pierde en el camino. | Bioavailability is like how much mail actually reaches your house versus getting lost in transit.',
      ],
      examples: [
        'La deficiencia de vitamina C (escorbuto) entre marineros se curo llevando limones en los viajes | Vitamin C deficiency (scurvy) among sailors was cured by carrying limes on voyages',
        'La fortificacion de granos con folato redujo los defectos del tubo neural en 25-50% | Folate fortification of grains reduced neural tube defects by 25-50%',
        'La fortificacion de leche con vitamina D elimino el raquitismo como enfermedad comun en la infancia | Vitamin D fortification of milk eliminated rickets as a common childhood disease',
        'La sal yodada virtualmente elimino el bocio en los Estados Unidos | Iodized salt virtually eliminated goiter in the United States',
      ],
      patientCounselingPoints: [
        'Tome las vitaminas liposolubles (A, D, E, K) con comidas que tengan grasa para mejor absorcion | Take fat-soluble vitamins with meals containing fat for better absorption',
        'Si toma anticoagulantes, sea consistente con la ingesta de vitamina K y consulte sobre suplementos | If you take anticoagulants, be consistent with vitamin K intake and discuss supplements with your doctor',
        'Los vegetarianos y veganos deben suplementar con vitamina B12 o consumir alimentos fortificados | Vegetarians and vegans should supplement with vitamin B12 or consume fortified foods',
        'Las mujeres embarazadas deben tomar una vitamina prenatal con acido folico antes y durante el embarazo | Pregnant women should take a prenatal vitamin with folic acid before and during pregnancy',
      ],
    },
    3: {
      level: 3,
      summary:
        'La fisiologia de las vitaminas abarca funciones como cofactores enzimaticos, sistemas de defensa antioxidante y regulacion hormonal. Las vitaminas liposolubles requieren absorcion con grasa mediante micelas mixtas, mientras que las hidrosolubles actuan como coenzimas esenciales en vias metabolicas criticas. Los estados de deficiencia producen sindromes clinicos caracteristicos. | Vitamin physiology encompasses enzyme cofactor functions, antioxidant defense systems, and hormonal regulation. Fat-soluble vitamins require absorption with fat via mixed micelles, while water-soluble vitamins serve as essential coenzymes in critical metabolic pathways. Deficiency states produce characteristic clinical syndromes.',
      explanation: `## Fisiologia de Vitaminas Liposolubles | Fat-Soluble Vitamin Physiology

### Absorcion de vitaminas liposolubles | Fat-Soluble Vitamin Absorption

\`\`\`
Grasa dietetica -> Micelas mixtas (con sales biliares) ->
  Absorcion en enterocitos -> Formacion de quilomicrones ->
    Sistema linfatico -> Circulacion sistemica ->
      Higado (procesamiento/almacenamiento) -> Tejidos perifericos
\`\`\`

### Metabolismo de Vitamina A | Vitamin A Metabolism

\`\`\`
Fuentes dieteticas:
  |-- Vitamina A preformada (retinol, retinal, acido retinoico) - Fuentes animales
  |-- Carotenoides provitamina A (beta-caroteno) - Fuentes vegetales

Conversion:
  Beta-caroteno -> (15,15'-monooxigenasa) -> Retinal ->
    |-- Retinol (almacenamiento) -> Esteres de retinilo (higado)
    |-- Acido retinoico (hormona activa)

Transporte: RBP (proteina de union a retinol) entrega a tejidos
\`\`\`

### Metabolismo de Vitamina D | Vitamin D Metabolism

\`\`\`
Piel: 7-deshidrocolesterol + UVB -> Colecalciferol (D3)
Dieta: Ergocalciferol (D2) de plantas, Colecalciferol (D3) de animales

Higado: D2/D3 -> 25-hidroxivitamina D [25(OH)D] (calcidiol)
Rinon: 25(OH)D -> 1,25-dihidroxivitamina D [1,25(OH)2D] (calcitriol)

Acciones del calcitriol:
  - Aumenta absorcion intestinal de calcio
  - Aumenta absorcion intestinal de fosforo
  - Mineralizacion osea
  - Modulacion inmune
\`\`\`

### Vitamina E y Sistema Antioxidante | Vitamin E and Antioxidant System

- Antioxidante liposoluble en membranas celulares | Lipid-soluble antioxidant in cell membranes
- Previene reacciones en cadena de peroxidacion lipidica | Prevents lipid peroxidation chain reactions
- Regenerada por vitamina C | Regenerated by vitamin C
- Alfa-tocoferol es la forma mas activa | Alpha-tocopherol is the most active form

### Ciclo de Vitamina K | Vitamin K Cycle

\`\`\`
Vitamina K (quinona) -> Vitamina K epoxido -> (reductasa) -> Vitamina K (quinona)
                    |
              Vitamina K hidroquinona (cofactor para gamma-glutamil carboxilasa)

Gamma-carboxilacion activa factores de coagulacion II, VII, IX, X y proteinas C, S
Warfarina inhibe la vitamina K epoxido reductasa -> efecto anticoagulante
\`\`\`

## Funciones de Coenzimas de Vitaminas B | B Vitamin Coenzyme Functions

| Vitamina | Forma de coenzima | Reacciones clave |
|----------|-------------------|------------------|
| B1 (Tiamina) | TPP | Piruvato deshidrogenasa, transcetolasa |
| B2 (Riboflavina) | FAD, FMN | Complejos I y II de CTE, ciclo TCA |
| B3 (Niacina) | NAD+, NADP+ | Glucolisis, TCA, CTE, via de pentosas |
| B5 (Acido pantotenico) | CoA | Ciclo TCA, metabolismo de acidos grasos |
| B6 (Piridoxina) | PLP | Transaminacion, sintesis de neurotransmisores |
| B7 (Biotina) | Cofactor de carboxilasa | Gluconeogenesis, sintesis de acidos grasos |
| B9 (Folato) | THF | Transferencias de un carbono, sintesis de nucleotidos |
| B12 (Cobalamina) | Metilcobalamina, desoxiadenosilcobalamina | Homocisteina a metionina, mutasa de metilmalonil-CoA |

### Ciclo del Folato | Folate Cycle

\`\`\`
Folato dietetico -> (dihidrofolato reductasa) ->
  5-metil-THF -> (transfiere metilo a) Homocisteina ->
    Metionina -> SAM (donante de metilo) ->
      Metilacion de ADN, sintesis de neurotransmisores

Vitamina B12 como cofactor para:
  - Metionina sintasa (homocisteina -> metionina)
  - Mutasa de metilmalonil-CoA (metabolismo del propionato)
\`\`\`

### Funciones de Vitamina C | Vitamin C Functions

- Sintesis de colageno (hidroxilacion de prolina y lisina) | Collagen synthesis
- Antioxidante (elimina radicales libres, regenera vitamina E) | Antioxidant
- Sintesis de carnitina | Carnitine synthesis
- Mejora absorcion de hierro no hemico (reduce Fe3+ a Fe2+) | Enhances non-heme iron absorption

## Sindromes de Deficiencia Vitaminica | Vitamin Deficiency Syndromes

| Vitamina | Sindrome de deficiencia | Hallazgos clave |
|----------|------------------------|-----------------|
| A | Hipovitaminosis A | Ceguera nocturna, manchas de Bitot, xeroftalmia |
| B1 | Beriberi (humedo/seco) | Edema, insuficiencia cardiaca O neuropatia, Wernicke-Korsakoff |
| B3 | Pelagra | Dermatitis, diarrea, demencia ("3 Ds") |
| B6 | Deficiencia de piridoxina | Convulsiones, anemia sideroblastica, neuropatia periferica |
| B9 | Deficiencia de folato | Anemia megaloblastica, homocisteina elevada |
| B12 | Deficiencia de cobalamina | Anemia megaloblastica, degeneracion combinada subaguda |
| C | Escorbuto | Encias sangrantes, petequias, pelos en tirabuson, mala cicatrizacion |
| D | Raquitismo/Osteomalacia | Dolor oseo, fracturas, debilidad muscular |
| K | Deficiencia de vitamina K | Moretones faciles, sangrado, TP elevado |

## Toxicidad | Toxicity

| Vitamina | Nivel de toxicidad | Manifestaciones |
|----------|-------------------|-----------------|
| A aguda | >100x RDA | Cefalea, nausea, aumento de presion intracraneal |
| A cronica | >10x RDA | Piel seca, hepatomegalia, teratogenica |
| D cronica | >4x RDA | Hipercalcemia, nefrolitiasis, calcinosis |
| E | >1000 mg/dia | Riesgo de sangrado, interactua con vitamina K |
| B6 | >200 mg/dia cronico | Neuropatia periferica |`,
      keyTerms: [
        { term: 'cofactor | cofactor', definition: 'Compuesto quimico no proteico requerido para la actividad biologica de una proteina | Non-protein chemical compound required for a protein\'s biological activity' },
        { term: 'calcitriol | calcitriol', definition: 'Forma activa de vitamina D (1,25-dihidroxivitamina D); aumenta la absorcion de calcio | Active form of vitamin D; increases calcium absorption' },
        { term: 'Wernicke-Korsakoff', definition: 'Trastorno neuropsiquiatrico por deficiencia de tiamina; Wernicke (agudo: confusion, ataxia, oftalmoplejia) + Korsakoff (cronico: amnesia) | Neuropsychiatric disorder from thiamine deficiency; Wernicke (acute) + Korsakoff (chronic)' },
        { term: 'degeneracion combinada subaguda | subacute combined degeneration', definition: 'Deficiencia de B12 causando desmielinizacion de columnas dorsales y tractos corticoespinales laterales | B12 deficiency causing demyelination of dorsal columns and lateral corticospinal tracts' },
        { term: 'proteina de union a retinol | retinol-binding protein', definition: 'Proteina de transporte que lleva vitamina A en la sangre; baja en enfermedad hepatica y deficiencia proteica | Transport protein carrying vitamin A in blood; low in liver disease and protein deficiency' },
        { term: 'pelagra | pellagra', definition: 'Enfermedad por deficiencia de niacina (B3) con dermatitis, diarrea y demencia (las 3 Ds) | Disease from niacin deficiency with dermatitis, diarrhea, and dementia (the 3 Ds)' },
      ],
      analogies: [
        'El ciclo del folato es como un carrusel donde B12 es el operador que mantiene el viaje en movimiento - sin el, el ciclo se detiene y los pasajeros (homocisteina) se acumulan. | The folate cycle is like a merry-go-round where B12 is the operator that keeps the ride moving - without it, the cycle stops and passengers (homocysteine) pile up.',
        'La activacion de vitamina D es un proceso de dos pasos: primero el higado agrega un equipo, luego el rinon agrega la estrella para crear la hormona activa. | Vitamin D activation is a two-step process: first the liver adds a team, then the kidney adds the star player to create the active hormone.',
        'La vitamina E y C trabajan en equipo como un sistema de relevos - E protege las membranas de grasa, y C regenera la E cuando se agota. | Vitamin E and C work as a relay team - E protects fat membranes, and C regenerates E when it is depleted.',
      ],
      examples: [
        'Los alcoholicos desarrollan encefalopatia de Wernicke por deficiencia de tiamina que requiere tiamina IV antes de glucosa | Alcoholics develop Wernicke encephalopathy from thiamine deficiency requiring IV thiamine before glucose',
        'Los vegetarianos desarrollan deficiencia de B12 despues de 3-5 anos sin suplementacion debido a las reservas hepaticas | Vegetarians develop B12 deficiency after 3-5 years without supplementation',
        'El isotretinoino (Accutane) es un derivado de vitamina A que requiere prevencion del embarazo por teratogenicidad | Isotretinoin is a vitamin A derivative requiring pregnancy prevention due to teratogenicity',
        'Pacientes post-bariatricos necesitan suplementacion de por vida con hierro, B12, calcio y vitamina D | Post-bariatric surgery patients need lifelong supplementation',
      ],
      clinicalNotes: 'Siempre administre tiamina IV antes de glucosa en sospecha de abstinencia alcoholica para prevenir encefalopatia de Wernicke. El estado de vitamina D se evalua con niveles de 25(OH)D, no 1,25(OH)2D. La anemia megaloblastica por deficiencia de B12 puede elevar el acido metilmalonico (AMM), distinguiendola de la deficiencia de folato. | Always give IV thiamine before glucose in suspected alcohol withdrawal. Vitamin D status is assessed by 25(OH)D levels. MMA distinguishes B12 from folate deficiency.',
    },
    4: {
      level: 4,
      summary:
        'Los trastornos de micronutrientes vitaminicos requieren evaluacion sistematica incluyendo valoracion dietetica, pruebas de laboratorio y replecion dirigida. Las aplicaciones clinicas incluyen manejo de deficiencias en sindromes de malabsorcion, evitar interacciones medicamento-nutriente y optimizar el estado vitaminico en enfermedades cronicas. | Vitamin micronutrient disorders require systematic evaluation including dietary assessment, laboratory testing, and targeted repletion. Clinical applications include managing deficiency in malabsorption syndromes, avoiding drug-nutrient interactions, and optimizing vitamin status in chronic disease.',
      explanation: `## Evaluacion de Laboratorio del Estado Vitaminico | Laboratory Assessment of Vitamin Status

### Vitaminas Hidrosolubles | Water-Soluble Vitamins

| Vitamina | Mejor prueba | Interpretacion |
|----------|-------------|----------------|
| B1 (Tiamina) | Actividad de transcetolasa eritrocitaria | Baja actividad = deficiencia |
| B6 (Piridoxina) | PLP plasmatico | <20 nmol/L = deficiente |
| B9 (Folato) | Folato eritrocitario | <140 ng/mL = deficiente |
| B12 (Cobalamina) | B12 serico + AMM + Homocisteina | B12 bajo + AMM alto = deficiencia verdadera |
| C (Ascorbato) | Acido ascorbico leucocitario | Estandar de oro (plasma refleja ingesta reciente) |

### Vitaminas Liposolubles | Fat-Soluble Vitamins

| Vitamina | Mejor prueba | Interpretacion |
|----------|-------------|----------------|
| A | Retinol serico | <20 mcg/dL = deficiente |
| D | 25-hidroxivitamina D | <20 ng/mL = deficiente, 20-30 = insuficiente, >30 = optimo |
| E | Alfa-tocoferol serico | Ajustado por lipidos |
| K | TP/INR (clinico) | INR prolongado sin enfermedad hepatica |

## Sindromes de Malabsorcion y Vitaminas | Malabsorption Syndromes

### Enfermedad Celiaca | Celiac Disease

\`\`\`
Atrofia vellositaria -> Superficie absortiva reducida

Deficiencias vitaminicas:
  |-- Folato (yeyuno: intestino delgado proximal-medio)
  |-- Vitaminas liposolubles (malabsorcion de grasas)
  |-- B12 (ileon terminal: si enfermedad extensa)

Tratamiento: Dieta libre de gluten + replecion de deficiencias identificadas
\`\`\`

### Cirugia Bariatrica | Bariatric Surgery

\`\`\`
Bypass gastrico en Y de Roux:
  Acido gastrico reducido -> Disminucion absorcion de B12
  Bypass de duodeno/yeyuno proximal -> Disminucion hierro, calcio
  Ingesta alimentaria reducida -> Deficiencia general de micronutrientes

Suplementacion requerida de por vida:
  - Multivitaminico: Diario
  - Vitamina D: 3000 UI/dia (objetivo >30 ng/mL)
  - B12: 350-500 mcg/dia (o inyecciones mensuales)
  - Folato: 400-800 mcg/dia
\`\`\`

### Enfermedad Inflamatoria Intestinal | Inflammatory Bowel Disease

\`\`\`
Enfermedad de Crohn (afectacion de ileon terminal):
  |-- Malabsorcion de B12 (reseccion ileal >30cm = deficiencia permanente)
  |-- Malabsorcion de grasa -> Deficiencia de vitaminas liposolubles

Colitis Ulcerosa:
  |-- Deficiencia de folato (sulfasalazina interfiere)

Monitoreo: Cada 6-12 meses segun actividad de la enfermedad
\`\`\`

## Interacciones Medicamento-Vitamina | Drug-Vitamin Interactions

\`\`\`
Warfarina + Vitamina K:
  Mecanismo: Vitamina K es cofactor para activacion de factores de coagulacion
  Efecto: Alimentos o suplementos ricos en vitamina K disminuyen efecto de warfarina
  Manejo: Ingesta consistente de vitamina K, monitorear INR

Metformina + Vitamina B12:
  Mecanismo: Altera absorcion calcio-dependiente de B12 en ileon
  Efecto: Uso a largo plazo -> deficiencia de B12
  Manejo: Monitorear B12 periodicamente, suplementar si bajo

Isoniazida + Piridoxina (B6):
  Mecanismo: INH aumenta excrecion de B6
  Efecto: Deficiencia de B6 -> neuropatia periferica
  Manejo: B6 profilactica (25-50 mg/dia)

Antiacidos/IBP + Vitaminas:
  Mecanismo: Disminucion de acido gastrico deteriora absorcion
  Efecto: Disminucion absorcion de B12, hierro
  Manejo: Separar administracion si posible

Metotrexato + Folato:
  Mecanismo: MTX inhibe dihidrofolato reductasa
  Efecto: Deficiencia de folato
  Manejo: Suplementacion con acido folico (1 mg/dia)

Orlistat + Vitaminas liposolubles:
  Mecanismo: Malabsorcion de grasas
  Efecto: Disminucion absorcion de A, D, E, K
  Manejo: Tomar multivitaminico 2 horas aparte
\`\`\`

## Vitaminas en Enfermedades Cronicas | Vitamins in Chronic Disease

### Diabetes | Diabetes
\`\`\`
  |-- B12: Metformina causa deficiencia de B12
  |-- Vitamina D: Deficiencia asociada con mayor riesgo de DM2
  |-- Tiamina: Excrecion renal aumentada en diabetes
  Manejo: Tamizaje periodico de B12, vitamina D
\`\`\`

### Enfermedad Renal Cronica | Chronic Kidney Disease
\`\`\`
  |-- Vitamina D: Disminucion de 1-alfa-hidroxilacion -> calcitriol bajo
  |-- Calcitriol o analogos activos de vitamina D necesarios
  |-- No usar niveles de 25(OH)D para monitorear (usar PTH, Ca, PO4)
\`\`\`

### Insuficiencia Cardiaca | Heart Failure
\`\`\`
  Uso de diureticos de asa:
  |-- Tiamina (B1): "Beriberi humedo" imita exacerbacion de IC
  Manejo: Considerar tiamina 100 mg diarios en usuarios cronicos de diureticos de asa
\`\`\`

## Poblaciones Especiales | Special Populations

### Embarazo | Pregnancy
\`\`\`
Requerimientos aumentados:
  |-- Folato: 600 mcg DFE (prevencion de defectos del tubo neural)
  |-- Vitamina D: 600 UI (desarrollo oseo fetal)
  |-- Colina: 450 mg (desarrollo cerebral fetal)
  |-- DHA: 200-300 mg (neurodesarrollo fetal)

Recomendado:
  - Vitamina prenatal con acido folico (iniciar 1-3 meses pre-concepcion)
  - No vitamina A en dosis altas (>3000 mcg RA) - teratogenica
\`\`\`

### Adultos Mayores | Elderly
\`\`\`
En riesgo de:
  |-- B12: Gastritis atrofica -> disminucion de acido -> disminucion absorcion de B12
  |-- Vitamina D: Sintesis cutanea reducida, menor exposicion solar
  Manejo:
  - B12: Suplementar (B12 cristalina se absorbe mejor que la unida a proteina)
  - Vitamina D: 800-1000 UI diarias
\`\`\``,
      keyTerms: [
        { term: 'AMM | MMA', definition: 'Acido metilmalonico; se acumula en deficiencia de B12; distingue deficiencia de B12 de la de folato | Methylmalonic acid; accumulates in B12 deficiency; distinguishes B12 from folate deficiency' },
        { term: 'hipervitaminosis | hypervitaminosis', definition: 'Condicion de acumulacion excesiva de vitaminas causando efectos toxicos | Condition of excessive vitamin accumulation causing toxic effects' },
        { term: 'TIBC', definition: 'Capacidad total de union de hierro; medida de disponibilidad de transferrina; elevada en deficiencia de hierro | Total Iron Binding Capacity; measure of transferrin availability; elevated in iron deficiency' },
        { term: 'anemia de enfermedad cronica | anemia of chronic disease', definition: 'Anemia en condiciones inflamatorias con hierro serico bajo, TIBC bajo y ferritina normal/alta | Anemia in inflammatory conditions with low serum iron, low TIBC, and normal/high ferritin' },
        { term: 'beriberi humedo | wet beriberi', definition: 'Deficiencia de tiamina que se presenta como insuficiencia cardiaca de alto gasto con acidosis lactica | Thiamine deficiency presenting as high-output heart failure with lactic acidosis' },
      ],
      analogies: [
        'La prueba de AMM es como rastrear un paquete que no fue entregado - AMM alto significa deficiencia de B12 porque el "camion de entrega" no esta funcionando. | The MMA test is like tracking a package that wasn\'t delivered - high MMA means B12 deficiency because the "delivery truck" isn\'t working.',
        'La ferritina es como un almacen - muestra cuanto inventario (hierro) tienes guardado, no solo lo que esta en los estantes (en la sangre). | Ferritin is like a warehouse - it shows how much inventory you have in storage, not just what\'s on the shelves.',
        'Las interacciones medicamento-vitamina son como dos piezas de rompecabezas tratando de encajar en el mismo espacio - una bloquea a la otra. | Drug-vitamin interactions are like two puzzle pieces trying to fit in the same space - one blocks the other.',
      ],
      examples: [
        'Anemia perniciosa: Destruccion autoinmune de celulas parietales -> sin factor intrinseco -> malabsorcion de B12 -> inyecciones de B12 de por vida | Pernicious anemia: Autoimmune destruction -> lifelong B12 injections',
        'Paciente post-bariatrico: Deficiencia de B12 a pesar de ingesta normal debido a sitio de absorcion desviado | Post-bariatric: B12 deficiency despite normal intake due to bypassed absorption site',
        'Insuficiencia cardiaca con diureticos de asa: Beriberi de Shoshin por deficiencia de tiamina resuelta con tiamina IV | Heart failure on loop diuretics: Shoshin beriberi resolved with IV thiamine',
        'Terapia con isoniazida para TB: Piridoxina profilactica previene neuropatia | INH therapy: Prophylactic pyridoxine prevents neuropathy',
      ],
      clinicalNotes: 'Siempre verifique acido metilmalonico (AMM) cuando B12 esta en el limite inferior o normal pero hay sospecha clinica de deficiencia. En ERC, use calcitriol o paricalcitol en vez de colecalciferol ya que el rinon no puede realizar la 1-alfa-hidroxilacion. En usuarios cronicos de IBP, monitoree B12 y considere suplementacion. | Always check MMA when B12 is borderline. In CKD, use calcitriol instead of cholecalciferol. Monitor B12 in chronic PPI users.',
    },
    5: {
      level: 5,
      summary:
        'La micronutricion vitaminica avanzada abarca polimorfismos geneticos que afectan los requerimientos, pruebas funcionales para estado intracelular, terapeutica basada en vitaminas y aplicaciones emergentes en genomica y metabolomica para enfoques de nutricion personalizada. | Advanced vitamin micronutrition encompasses genetic polymorphisms affecting requirements, functional testing for intracellular status, vitamin-based therapeutics, and emerging applications in genomics and metabolomics for personalized nutrition approaches.',
      explanation: `## Variantes Geneticas en Metabolismo de Vitaminas | Genetic Variants in Vitamin Metabolism

### Variantes de Transporte y Metabolismo | Transport and Metabolism Variants

\`\`\`
Vitamina D:
  VDR (Receptor de Vitamina D) polimorfismos:
    - Variantes Fok1, Bsm1, Taq1, Apa1
    - Afectan densidad osea, riesgo de cancer, susceptibilidad autoinmune
    - Alelo Fok1 "f": Transcripcion menos eficiente
    - Explican variacion interindividual en requerimientos de vitamina D

  CYP27B1 (1-alfa-hidroxilasa):
    - Perdida de funcion: Raquitismo dependiente de vitamina D tipo 1
    - Variantes afectan conversion a calcitriol

  CYP24A1 (24-hidroxilasa):
    - Ganancia de funcion: Catabolismo aumentado -> deficiencia funcional
    - Hipercalcemia infantil idiopatica

Vitamina B12/Folato:
  MTHFR (Metilentetrahidrofolato reductasa):
    - C677T: Variante termolabil, ~30-70% actividad
    - Genotipo TT: Homocisteina elevada, 5-MTHF disminuido
    - Implicaciones: Riesgo de tubo neural, ECV, depresion
    - Manejo: Suplementacion con folato activo (5-MTHF)

  TCN2 (Transcobalamina II):
    - Variante P259R: Entrega celular de B12 reducida
    - Deficiencia funcional a pesar de B12 serico normal

  MTRR (Metionina Sintasa Reductasa):
    - A66G: Regeneracion deteriorada de B12 activa
    - Interactua con variantes MTHFR

Vitamina A:
  BCMO1 (Beta-caroteno 15,15'-monooxigenasa):
    - Variantes R267S, T170M: Conversion reducida
    - Afecta respuesta a provitamina A basada en plantas
\`\`\`

## Evaluacion Funcional de Vitaminas | Functional Vitamin Assessment

### Mas Alla de los Niveles Sericos | Beyond Serum Levels

\`\`\`
Evaluacion intracelular:
  - Vitaminas linfocitarias: Estado a mas largo plazo vs serico
  - Limitaciones: Estandarizacion limitada, correlacion variable con desenlaces clinicos

Pruebas de acidos organicos urinarios:
  Marcadores funcionales de vitaminas B:
    |-- Metilmalonato: Marcador de deficiencia de B12
    |-- Xanturenato: Marcador de deficiencia de B6
    |-- Beta-hidroxiisovalerato: Marcador de deficiencia de biotina
    |-- FIGLU: Deficiencia de folato (metabolismo de histidina deteriorado)
    |-- Relacion lactato/piruvato: Estado de tiamina/B2

  Utilidad clinica:
    - Detectar deficiencia funcional antes de cambios sericos
    - Guiar replecion dirigida
    - Monitorear respuesta al tratamiento
\`\`\`

## Terapeutica Vitaminica de Alta Dosis | High-Dose Vitamin Therapeutics

\`\`\`
Tiamina (B1):
  - Wernicke-Korsakoff: 500 mg IV TID x 3 dias
  - IC refractaria: 100-300 mg diarios (beriberi de Shoshin)
  - Alcoholismo cronico: 100 mg diarios profilacticos

Piridoxina (B6):
  - Profilaxis de neuropatia por INH: 25-50 mg diarios
  - Epilepsia dependiente de piridoxina: 100-500 mg/dia
  - Nausea del embarazo: 10-25 mg TID (no exceder 100 mg/dia en embarazo)
  - Toxicidad: >200 mg/dia a largo plazo -> neuropatia

Niacina (B3):
  - Dislipidemia: Liberacion inmediata 1.5-3 g/dia
  - Mecanismo: Inhibe lipolisis, reduce sintesis de VLDL
  - Rubor: Mecanismo: Liberacion de PGD2; pretratar con aspirina
  - Contraindicaciones: DM, gota, ulcera peptica, enfermedad hepatica

B12 (Cobalamina):
  - Anemia perniciosa: 1000 mcg IM mensual (o oral 1000-2000 mcg diario)
  - Neuropatia: Carga diaria IM inicial, luego mantenimiento
  - Cianocobalamina vs metilcobalamina: Forma metil puede ser mejor absorbida

Vitamina C:
  - Escorbuto: 100-300 mg TID x 1-2 semanas
  - Cicatrizacion adyuvante: 500-1000 mg diarios
  - Limite superior: 2000 mg/dia (diarrea osmotica, calculos de oxalato)
  - IV alta dosis (investigacional): 1.5-2 g/kg en cancer

Vitamina D:
  - Tratamiento de deficiencia: 6000-10,000 UI diarias x 6-12 semanas
  - Mantenimiento: 1500-2000 UI diarias
  - Nivel objetivo: 40-60 ng/mL (controversial)
  - Vitamina D activa: Calcitriol 0.25-0.5 mcg diarios (ERC, hipoparatiroidismo)
\`\`\`

## Vitaminas en Salud Mental | Vitamins in Mental Health

\`\`\`
Aplicaciones basadas en evidencia:
  |-- B12/Folato: Adyuvante en depresion (especialmente con homocisteina elevada)
  |-- Vitamina D: Suplementacion para trastorno afectivo estacional
  |-- N-acetilcisteina (NAC): Precursor de glutation
      - Trastorno obsesivo-compulsivo
      - Tricotilomania
      - Depresion bipolar

Investigacion emergente:
  - Inositol (vitamina B8):
    - Trastorno de panico
    - SOP (sensibilizacion a insulina)

Consideraciones:
  - Generalmente adyuvante, no monoterapia
  - Efectos modestos comparados con farmacos
  - Dosificacion optima incierta
  - Datos de seguridad a largo plazo limitados
\`\`\`

## Nutricion Vitaminica de Precision | Precision Vitamin Nutrition

\`\`\`
Capacidades actuales:
  - Pruebas geneticas para polimorfismos clave (MTHFR, VDR)
  - Pruebas de acidos organicos para estado funcional
  - Suplementacion dirigida basada en necesidades individuales

Direcciones futuras:
  - Integracion multi-omica (genomica + metabolomica + microbioma)
  - Recomendaciones dieteticas impulsadas por IA
  - Monitoreo de estado nutricional por dispositivos vestibles
  - Optimizacion personalizada del tiempo de nutrientes

Limitaciones:
  - La mayoria de variantes tienen tamanos de efecto pequenos
  - Interacciones gen-ambiente pobremente entendidas
  - Ensayos clinicos faltan para la mayoria de intervenciones guiadas por genotipo
  - Calidad variable de pruebas directas al consumidor
\`\`\``,
      keyTerms: [
        { term: 'MTHFR', definition: 'Metilentetrahidrofolato reductasa; enzima clave en metabolismo del folato; polimorfismo C677T afecta actividad enzimatica y niveles de homocisteina | Methylenetetrahydrofolate reductase; key enzyme in folate metabolism; C677T polymorphism affects enzyme activity and homocysteine levels' },
        { term: 'deficiencia funcional | functional deficiency', definition: 'Actividad intracelular inadecuada de micronutrientes a pesar de niveles sericos normales | Inadequate cellular micronutrient activity despite normal serum levels' },
        { term: 'pruebas de acidos organicos | organic acid testing', definition: 'Medicion urinaria de acidos organicos que reflejan funcion de vias metabolicas dependientes de vitaminas B | Urinary measurement of organic acids reflecting B-vitamin-dependent metabolic pathway function' },
        { term: 'beriberi de Shoshin | Shoshin beriberi', definition: 'Deficiencia aguda fulminante de tiamina que se presenta como insuficiencia cardiaca de alto gasto con acidosis lactica | Acute fulminant thiamine deficiency presenting as high-output heart failure with lactic acidosis' },
        { term: 'dosificacion farmacologica | pharmacologic dosing', definition: 'Administracion de nutrientes a dosis que exceden las necesidades nutricionales para efectos terapeuticos | Administration of nutrients at doses exceeding nutritional needs for therapeutic effects' },
        { term: 'FIGLU', definition: 'Acido formiminoglutamico; marcador urinario de deficiencia de folato que se acumula cuando el metabolismo de histidina esta deteriorado | Formiminoglutamic acid; urinary marker of folate deficiency' },
        { term: 'VDR | Vitamin D Receptor', definition: 'Receptor de vitamina D; polimorfismos afectan densidad osea, riesgo de cancer y susceptibilidad autoinmune | Vitamin D receptor; polymorphisms affect bone density, cancer risk, and autoimmune susceptibility' },
      ],
      analogies: [
        'Las pruebas funcionales son como verificar el rendimiento del motor en lugar de solo el nivel de aceite - los niveles sericos muestran lo que esta presente, las pruebas funcionales muestran lo que esta funcionando. | Functional testing is like checking the engine performance rather than just the oil level - serum levels show what\'s present, functional tests show what\'s working.',
        'El polimorfismo MTHFR es como tener una linea de fabrica ligeramente menos eficiente - aun produce el producto, pero puede necesitar mas materias primas o un enfoque diferente. | MTHFR polymorphism is like having a slightly less efficient factory line - it still produces the product but may need more raw materials.',
        'La terapia vitaminica IV de alta dosis es como arrancar un carro con cables - a veces necesitas un metodo de entrega mas directo cuando las vias orales no son suficientes. | High-dose IV vitamin therapy is like jump-starting a car - sometimes you need a more direct delivery method when oral routes aren\'t sufficient.',
      ],
      examples: [
        'MTHFR C677T homocigoto: Homocisteina elevada, requiriendo 5-MTHF activo en lugar de acido folico | MTHFR C677T homozygous: Elevated homocysteine requiring active 5-MTHF rather than folic acid',
        'Tratamiento de encefalopatia de Wernicke: 500 mg IV tiamina antes de glucosa para prevenir dano cerebral irreversible | Wernicke encephalopathy treatment: 500 mg IV thiamine before glucose',
        'Vitamina C IV en ensayos clinicos: Dosis de 1.5 g/kg logrando concentraciones plasmaticas milimolares para potenciales efectos anticancerigenos | IV vitamin C in clinical trials: High doses achieving millimolar plasma concentrations',
        'Variantes de VDR Fok1 explican por que algunos pacientes responden diferente a la suplementacion con vitamina D | VDR Fok1 variants explain differential responses to vitamin D supplementation',
      ],
      clinicalNotes: `Perlas clinicas | Clinical Pearls:

1. **Variantes MTHFR:** Considerar 5-MTHF (folato activo) 400-800 mcg diarios para portadores C677T, especialmente con homocisteina elevada o embarazo | Consider active folate for C677T carriers

2. **Deficiencia de B12 con niveles normales:** Verificar AMM y homocisteina; sintomas neurologicos pueden requerir carga IM inicial a pesar de suero normal | Check MMA and homocysteine; neurologic symptoms may require IM loading

3. **Dosificacion de vitamina D:** 10,000 UI/dia por 8-12 semanas para replecionar, luego mantenimiento 1500-2000 UI diarias; verificar 25(OH)D a las 3-4 semanas | 10,000 IU/day for 8-12 weeks then maintenance

4. **Trastorno por uso de alcohol:** Tiamina profilactica 100 mg diarios; considerar dosis mas alta en desnutricion o sospecha de deficiencia | Prophylactic thiamine 100 mg daily in alcohol use disorder

5. **Cirugia bariatrica:** Monitoreo vitaminico de por vida: B12, folato, vitamina D al menos anualmente | Lifelong vitamin monitoring post-bariatric surgery

6. **Uso cronico de IBP:** Monitorear B12 periodicamente, considerar suplementacion | Monitor B12 periodically in chronic PPI use`,
    },
  },

  media: [],

  citations: [
    {
      id: 'dri-vitamins',
      type: 'guideline',
      title: 'Dietary Reference Intakes for Vitamins',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      url: 'https://www.nap.edu',
    },
    {
      id: 'holick-vitamin-d',
      type: 'journal',
      title: 'Vitamin D Deficiency',
      authors: ['MF Holick'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra070553',
    },
    {
      id: 'stabler-b12-deficiency',
      type: 'journal',
      title: 'Clinical Practice: Vitamin B12 Deficiency',
      authors: ['SP Stabler'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMcp1113996',
    },
    {
      id: 'krause-nutrition-therapy',
      type: 'textbook',
      title: 'Krause and Mahan\'s Food & the Nutrition Care Process, 15th Edition',
      authors: ['JL Raymond', 'K Morrow'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrientes-macronutrients', targetType: 'topic', relationship: 'sibling', label: 'Macronutrientes | Macronutrients' },
    { targetId: 'nutrition-minerales-minerals', targetType: 'topic', relationship: 'sibling', label: 'Minerales | Minerals' },
    { targetId: 'nutrition-enfermedades-cronicas', targetType: 'topic', relationship: 'related', label: 'Nutricion y enfermedades cronicas | Nutrition and Chronic Disease' },
    { targetId: 'hematologic-anemia', targetType: 'condition', relationship: 'related', label: 'Anemia' },
    { targetId: 'gastrointestinal-celiac', targetType: 'condition', relationship: 'related', label: 'Enfermedad celiaca | Celiac Disease' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hematologic', 'endocrine', 'neurologic'],
    topics: ['nutrition', 'biochemistry', 'preventive-medicine', 'pharmacology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vitaminasVitamins;
