import { EducationalContent } from '../types';

/**
 * Micronutrientes / Micronutrients
 *
 * Contenido educativo bilingue (español primero) sobre vitaminas y minerales.
 * Cubre vitaminas liposolubles (A, D, E, K) e hidrosolubles (complejo B, C),
 * macrominerales (Ca, Mg, K, Na, P) y oligoelementos (Fe, Zn, Cu, Se, I).
 *
 * Bilingual educational content (Spanish first) on vitamins and minerals.
 * Covers fat-soluble (A, D, E, K) and water-soluble vitamins (B complex, C),
 * macrominerals (Ca, Mg, K, Na, P), and trace elements (Fe, Zn, Cu, Se, I).
 */

export const vitaminasMineralsMicronutrients: EducationalContent = {
  id: 'topic-micronutrientes',
  type: 'topic',
  name: 'Micronutrients',
  nameEs: 'Micronutrientes',
  alternateNames: ['Vitaminas y Minerales', 'Vitamins and Minerals', 'Trace Nutrients', 'Oligoelementos'],

  levels: {
    1: {
      level: 1,
      summary: 'Los micronutrientes son vitaminas y minerales que tu cuerpo necesita en cantidades pequeñas pero son súper importantes para mantenerte sano, fuerte y con energía. | Micronutrients are vitamins and minerals your body needs in small amounts but are super important to keep you healthy, strong, and energized.',
      explanation: `## Explicación

Los micronutrientes son nutrientes que tu cuerpo necesita en cantidades muy pequeñas (micro = pequeño), pero sin ellos, tu cuerpo no puede funcionar bien. Son como las piezas pequeñas de un motor: son chiquitas pero sin ellas el motor no arranca.

**Hay dos grupos principales:**

### 1. Vitaminas
Las vitaminas son sustancias que tu cuerpo necesita para funcionar bien pero no puede fabricar por sí mismo (casi todas). Hay que obtenerlas de los alimentos.

**Vitaminas que se disuelven en grasa (liposolubles):**
- **Vitamina A:** Para tus ojos y tu piel. Se encuentra en zanahorias, camote, espinacas.
- **Vitamina D:** Para huesos fuertes. Viene del sol y de la leche fortificada.
- **Vitamina E:** Protege tus células. Se encuentra en nueces, semillas, aceites.
- **Vitamina K:** Ayuda a que tu sangre se coagule cuando te cortas. Se encuentra en verduras verdes.

**Vitaminas que se disuelven en agua (hidrosolubles):**
- **Vitamina C:** Para defenderte de enfermedades y sanar heridas. Se encuentra en naranjas, fresas, pimientos.
- **Vitaminas del grupo B (8 tipos):** Para convertir la comida en energía. Se encuentran en carnes, cereales integrales, huevos.

### 2. Minerales
Los minerales son sustancias que vienen de la tierra y el agua y que tu cuerpo necesita para muchas funciones.

**Minerales que necesitas en mayor cantidad (macrominerales):**
- **Calcio:** Para huesos y dientes fuertes. Leche, queso, yogur, brócoli.
- **Hierro:** Para llevar oxígeno en tu sangre. Carnes rojas, frijoles, espinacas.
- **Potasio:** Para que tu corazón lata bien. Plátano, papa, aguacate.
- **Magnesio:** Para tus músculos y nervios. Nueces, chocolate oscuro, espinacas.

**Minerales que necesitas en cantidades pequeñitas (oligoelementos):**
- **Zinc:** Para defenderte de infecciones. Carne, mariscos, semillas.
- **Yodo:** Para que tu tiroides funcione. Sal yodada, mariscos.
- **Selenio:** Protege tus células. Nueces de Brasil, pescado.

**Regla de oro:** ¡Come el arcoíris! Frutas y verduras de muchos colores te dan diferentes vitaminas y minerales.

---
## Explanation

Micronutrients are nutrients your body needs in very small amounts (micro = small), but without them, your body cannot function properly. They are like the small parts of an engine: they are tiny but without them the engine won't start.

**There are two main groups:**

### 1. Vitamins
Vitamins are substances your body needs to work well but cannot make on its own (almost all of them). You must get them from food.

**Fat-soluble vitamins:**
- **Vitamin A:** For your eyes and skin. Found in carrots, sweet potatoes, spinach.
- **Vitamin D:** For strong bones. Comes from the sun and fortified milk.
- **Vitamin E:** Protects your cells. Found in nuts, seeds, oils.
- **Vitamin K:** Helps your blood clot when you get a cut. Found in green vegetables.

**Water-soluble vitamins:**
- **Vitamin C:** To defend against illness and heal wounds. Found in oranges, strawberries, peppers.
- **B vitamins (8 types):** To convert food into energy. Found in meats, whole grains, eggs.

### 2. Minerals
Minerals are substances from the earth and water that your body needs for many functions.

**Minerals you need in larger amounts (macrominerals):**
- **Calcium:** For strong bones and teeth. Milk, cheese, yogurt, broccoli.
- **Iron:** To carry oxygen in your blood. Red meat, beans, spinach.
- **Potassium:** For your heart to beat properly. Banana, potato, avocado.
- **Magnesium:** For your muscles and nerves. Nuts, dark chocolate, spinach.

**Minerals you need in tiny amounts (trace elements):**
- **Zinc:** To defend against infections. Meat, shellfish, seeds.
- **Iodine:** For your thyroid to work. Iodized salt, seafood.
- **Selenium:** Protects your cells. Brazil nuts, fish.

**Golden rule:** Eat the rainbow! Fruits and vegetables of many colors give you different vitamins and minerals.`,
      keyTerms: [
        { term: 'micronutrientes / micronutrients', definition: 'Vitaminas y minerales que tu cuerpo necesita en cantidades pequeñas para funcionar bien. | Vitamins and minerals your body needs in small amounts to function properly.' },
        { term: 'vitaminas / vitamins', definition: 'Sustancias que tu cuerpo necesita pero no puede fabricar; las obtienes de los alimentos. | Substances your body needs but cannot make; you get them from food.' },
        { term: 'minerales / minerals', definition: 'Sustancias de la tierra y el agua que tu cuerpo necesita para muchas funciones importantes. | Substances from the earth and water your body needs for many important functions.' },
        { term: 'liposoluble / fat-soluble', definition: 'Vitaminas (A, D, E, K) que se disuelven en grasa y se almacenan en tu cuerpo. | Vitamins (A, D, E, K) that dissolve in fat and are stored in your body.' },
        { term: 'hidrosoluble / water-soluble', definition: 'Vitaminas (B, C) que se disuelven en agua y no se almacenan mucho; las necesitas todos los días. | Vitamins (B, C) that dissolve in water and are not stored much; you need them every day.' }
      ],
      analogies: [
        'Las vitaminas son como las bujías de un motor: son pequeñas pero sin ellas el motor no funciona. | Vitamins are like spark plugs in an engine: they are small but without them the engine does not work.',
        'El calcio para tus huesos es como el cemento para una pared: los hace fuertes y duros. | Calcium for your bones is like cement for a wall: it makes them strong and hard.',
        'El hierro en tu sangre es como un camión de reparto: lleva oxígeno a todas las partes de tu cuerpo. | Iron in your blood is like a delivery truck: it carries oxygen to all parts of your body.'
      ],
      examples: [
        'Si no comes suficiente vitamina C, tus encías pueden sangrar y tardas más en sanar heridas. Los marineros antiguos se enfermaban de escorbuto por no comer frutas frescas. | If you don\'t eat enough vitamin C, your gums can bleed and you take longer to heal wounds. Ancient sailors got scurvy from not eating fresh fruits.',
        'Un vaso de leche tiene calcio para tus huesos, vitamina D para absorber ese calcio, y potasio para tu corazón. ¡Tres micronutrientes en un solo alimento! | A glass of milk has calcium for your bones, vitamin D to absorb that calcium, and potassium for your heart. Three micronutrients in one food!'
      ],
      patientCounselingPoints: [
        'Come frutas y verduras de muchos colores diferentes cada día para obtener una variedad de vitaminas. | Eat fruits and vegetables of many different colors each day to get a variety of vitamins.',
        'Si no tomas leche, busca otras fuentes de calcio como brócoli, tofu, o leche de almendra fortificada. | If you don\'t drink milk, look for other calcium sources like broccoli, tofu, or fortified almond milk.',
        'El exceso de vitaminas liposolubles (A, D, E, K) puede ser dañino porque se acumulan en tu cuerpo; no tomes suplementos sin consultar a tu médico. | Excess fat-soluble vitamins (A, D, E, K) can be harmful because they accumulate in your body; do not take supplements without consulting your doctor.'
      ]
    },

    2: {
      level: 2,
      summary: 'Los micronutrientes incluyen 13 vitaminas y más de 15 minerales esenciales que funcionan como cofactores enzimáticos, antioxidantes y reguladores metabólicos. Las deficiencias causan síndromes clínicos específicos (escorbuto, raquitismo, anemia ferropénica, bocio), mientras que el exceso de vitaminas liposolubles puede causar toxicidad. | Micronutrients include 13 vitamins and over 15 essential minerals that function as enzyme cofactors, antioxidants, and metabolic regulators. Deficiencies cause specific clinical syndromes (scurvy, rickets, iron-deficiency anemia, goiter), while excess fat-soluble vitamins can cause toxicity.',
      explanation: `## Explicación

### Clasificación Completa de Micronutrientes

#### Vitaminas Liposolubles (A, D, E, K)

| Vitamina | Función principal | Fuentes | Deficiencia | Toxicidad |
|----------|------------------|---------|-------------|-----------|
| **A (retinol)** | Visión, diferenciación celular, inmunidad | Hígado, zanahoria, camote | Ceguera nocturna, xeroftalmía | Teratogénica, hepatotoxicidad |
| **D (colecalciferol)** | Absorción de Ca²⁺, salud ósea, inmunidad | Sol, pescado graso, leche fortificada | Raquitismo (niños), osteomalacia (adultos) | Hipercalcemia, nefrocalcinosis |
| **E (tocoferol)** | Antioxidante, protección de membranas | Nueces, semillas, aceites vegetales | Neuropatía, hemólisis (rara) | Riesgo hemorrágico (dosis altas) |
| **K (filoquinona/menaquinona)** | Coagulación (factores II, VII, IX, X), metabolismo óseo | Verduras verdes, soya, bacterias intestinales | Sangrado, equimosis | Rara (excepto warfarina) |

**Dato importante:** Las vitaminas liposolubles se absorben junto con las grasas de la dieta, por eso necesitas algo de grasa en tu comida para absorberlas bien. Se almacenan en el hígado y el tejido graso.

#### Vitaminas Hidrosolubles (B y C)

| Vitamina | Función principal | Fuentes | Deficiencia |
|----------|------------------|---------|-------------|
| **B1 (tiamina)** | Metabolismo de carbohidratos (cofactor de PDH) | Cereales integrales, cerdo | Beriberi (seco/húmedo), Wernicke-Korsakoff |
| **B2 (riboflavina)** | Precursor de FAD/FMN (cadena respiratoria) | Lácteos, huevos, verduras verdes | Queilosis, glositis |
| **B3 (niacina)** | Precursor de NAD⁺/NADP⁺ | Carne, pescado, cereales | Pelagra (3 D: dermatitis, diarrea, demencia) |
| **B5 (ácido pantoténico)** | Componente de CoA | Amplia distribución | Rara (parestesias) |
| **B6 (piridoxina)** | Metabolismo de aminoácidos, síntesis de neurotransmisores | Carne, plátano, papa | Neuropatía periférica, anemia sideroblástica |
| **B7 (biotina)** | Carboxilaciones (ACC, PC, PCC) | Huevos, nueces, soya | Rara (dermatitis, alopecia) |
| **B9 (ácido fólico)** | Síntesis de ADN (transferencia de 1-carbono) | Verduras verdes, legumbres | Anemia megaloblástica, defectos del tubo neural |
| **B12 (cobalamina)** | Síntesis de ADN, mielinización | Carne, pescado, lácteos | Anemia megaloblástica, neuropatía (degeneración subaguda combinada) |
| **C (ácido ascórbico)** | Antioxidante, síntesis de colágeno, absorción de hierro | Cítricos, pimientos, fresas | Escorbuto (sangrado de encías, mala cicatrización) |

#### Macrominerales

| Mineral | RDA | Funciones | Fuentes | Deficiencia |
|---------|-----|-----------|---------|-------------|
| **Calcio (Ca)** | 1000-1200 mg | Huesos, contracción muscular, coagulación, señalización | Lácteos, brócoli, almendras | Osteoporosis, tetania |
| **Fósforo (P)** | 700 mg | Huesos, ATP, ADN, membranas | Carne, lácteos, cereales | Debilidad muscular, dolor óseo |
| **Magnesio (Mg)** | 310-420 mg | >300 reacciones enzimáticas, función muscular/nerviosa | Nueces, espinacas, legumbres | Calambres, arritmias, hipocalcemia |
| **Sodio (Na)** | <2300 mg | Balance de fluidos, transmisión nerviosa | Sal, alimentos procesados | Hiponatremia (rara por dieta) |
| **Potasio (K)** | 2600-3400 mg | Potencial de membrana, ritmo cardíaco | Plátano, papa, aguacate | Debilidad muscular, arritmias |

#### Oligoelementos

| Mineral | RDA | Funciones | Fuentes | Deficiencia |
|---------|-----|-----------|---------|-------------|
| **Hierro (Fe)** | 8-18 mg | Hemoglobina, mioglobina, citocromos | Carne roja, frijoles, espinacas | Anemia microcítica hipocrómica |
| **Zinc (Zn)** | 8-11 mg | >100 enzimas, inmunidad, cicatrización | Carne, mariscos, semillas | Acrodermatitis, retraso en cicatrización, disgeusia |
| **Cobre (Cu)** | 900 μg | Citocromo oxidasa, ceruloplasmina | Hígado, mariscos, nueces | Anemia, neutropenia (enfermedad de Menkes) |
| **Selenio (Se)** | 55 μg | Glutatión peroxidasa, función tiroidea | Nueces de Brasil, pescado | Miocardiopatía (Keshan), Kashin-Beck |
| **Yodo (I)** | 150 μg | Hormonas tiroideas (T3, T4) | Sal yodada, mariscos | Bocio, cretinismo (neonatal) |

---
## Explanation

### Complete Micronutrient Classification

#### Fat-Soluble Vitamins (A, D, E, K)

| Vitamin | Main Function | Sources | Deficiency | Toxicity |
|---------|--------------|---------|------------|----------|
| **A (retinol)** | Vision, cell differentiation, immunity | Liver, carrot, sweet potato | Night blindness, xerophthalmia | Teratogenic, hepatotoxicity |
| **D (cholecalciferol)** | Ca²⁺ absorption, bone health, immunity | Sun, fatty fish, fortified milk | Rickets (children), osteomalacia (adults) | Hypercalcemia, nephrocalcinosis |
| **E (tocopherol)** | Antioxidant, membrane protection | Nuts, seeds, vegetable oils | Neuropathy, hemolysis (rare) | Hemorrhagic risk (high doses) |
| **K (phylloquinone/menaquinone)** | Coagulation (factors II, VII, IX, X), bone metabolism | Green vegetables, soy, gut bacteria | Bleeding, bruising | Rare (except warfarin) |

**Important note:** Fat-soluble vitamins are absorbed along with dietary fats, which is why you need some fat in your meal to absorb them well. They are stored in the liver and fat tissue.

#### Water-Soluble Vitamins (B and C)

| Vitamin | Main Function | Sources | Deficiency |
|---------|--------------|---------|------------|
| **B1 (thiamine)** | Carbohydrate metabolism (PDH cofactor) | Whole grains, pork | Beriberi (dry/wet), Wernicke-Korsakoff |
| **B2 (riboflavin)** | Precursor of FAD/FMN (respiratory chain) | Dairy, eggs, green vegetables | Cheilosis, glossitis |
| **B3 (niacin)** | Precursor of NAD⁺/NADP⁺ | Meat, fish, cereals | Pellagra (3 D's: dermatitis, diarrhea, dementia) |
| **B5 (pantothenic acid)** | Component of CoA | Widely distributed | Rare (paresthesias) |
| **B6 (pyridoxine)** | Amino acid metabolism, neurotransmitter synthesis | Meat, banana, potato | Peripheral neuropathy, sideroblastic anemia |
| **B7 (biotin)** | Carboxylations (ACC, PC, PCC) | Eggs, nuts, soy | Rare (dermatitis, alopecia) |
| **B9 (folic acid)** | DNA synthesis (1-carbon transfer) | Green vegetables, legumes | Megaloblastic anemia, neural tube defects |
| **B12 (cobalamin)** | DNA synthesis, myelination | Meat, fish, dairy | Megaloblastic anemia, neuropathy (subacute combined degeneration) |
| **C (ascorbic acid)** | Antioxidant, collagen synthesis, iron absorption | Citrus, peppers, strawberries | Scurvy (bleeding gums, poor wound healing) |

#### Macrominerals

| Mineral | RDA | Functions | Sources | Deficiency |
|---------|-----|-----------|---------|------------|
| **Calcium (Ca)** | 1000-1200 mg | Bones, muscle contraction, clotting, signaling | Dairy, broccoli, almonds | Osteoporosis, tetany |
| **Phosphorus (P)** | 700 mg | Bones, ATP, DNA, membranes | Meat, dairy, cereals | Muscle weakness, bone pain |
| **Magnesium (Mg)** | 310-420 mg | >300 enzymatic reactions, muscle/nerve function | Nuts, spinach, legumes | Cramps, arrhythmias, hypocalcemia |
| **Sodium (Na)** | <2300 mg | Fluid balance, nerve transmission | Salt, processed foods | Hyponatremia (rare from diet) |
| **Potassium (K)** | 2600-3400 mg | Membrane potential, heart rhythm | Banana, potato, avocado | Muscle weakness, arrhythmias |

#### Trace Elements

| Mineral | RDA | Functions | Sources | Deficiency |
|---------|-----|-----------|---------|------------|
| **Iron (Fe)** | 8-18 mg | Hemoglobin, myoglobin, cytochromes | Red meat, beans, spinach | Microcytic hypochromic anemia |
| **Zinc (Zn)** | 8-11 mg | >100 enzymes, immunity, wound healing | Meat, shellfish, seeds | Acrodermatitis, impaired wound healing, dysgeusia |
| **Copper (Cu)** | 900 μg | Cytochrome oxidase, ceruloplasmin | Liver, shellfish, nuts | Anemia, neutropenia (Menkes disease) |
| **Selenium (Se)** | 55 μg | Glutathione peroxidase, thyroid function | Brazil nuts, fish | Cardiomyopathy (Keshan), Kashin-Beck |
| **Iodine (I)** | 150 μg | Thyroid hormones (T3, T4) | Iodized salt, seafood | Goiter, cretinism (neonatal) |`,
      keyTerms: [
        { term: 'cofactor enzimático / enzyme cofactor', definition: 'Molécula pequeña (frecuentemente una vitamina) que una enzima necesita para funcionar; sin ella, la reacción no ocurre. | Small molecule (often a vitamin) that an enzyme needs to function; without it, the reaction does not occur.' },
        { term: 'RDA (Ingesta Diaria Recomendada / Recommended Dietary Allowance)', definition: 'Cantidad de un nutriente que cubre las necesidades del 97-98% de las personas sanas de un grupo de edad y sexo. | Amount of a nutrient that meets the needs of 97-98% of healthy people in an age and sex group.' },
        { term: 'anemia megaloblástica / megaloblastic anemia', definition: 'Tipo de anemia con glóbulos rojos anormalmente grandes, causada por deficiencia de vitamina B12 o ácido fólico. | Type of anemia with abnormally large red blood cells, caused by vitamin B12 or folic acid deficiency.' },
        { term: 'antioxidante / antioxidant', definition: 'Sustancia que protege las células del daño causado por radicales libres; vitaminas C, E y selenio son antioxidantes clave. | Substance that protects cells from damage caused by free radicals; vitamins C, E, and selenium are key antioxidants.' },
        { term: 'oligoelementos / trace elements', definition: 'Minerales que el cuerpo necesita en cantidades muy pequeñas (<100 mg/día): hierro, zinc, cobre, selenio, yodo. | Minerals the body needs in very small amounts (<100 mg/day): iron, zinc, copper, selenium, iodine.' }
      ],
      analogies: [
        'Las vitaminas hidrosolubles son como el agua en una esponja: se van fácilmente y hay que reponerlas cada día. Las liposolubles son como el aceite en la esponja: se quedan más tiempo. | Water-soluble vitamins are like water in a sponge: they leave easily and must be replenished daily. Fat-soluble ones are like oil in the sponge: they stay longer.',
        'Los oligoelementos son como las especias en una receta: usas poquito pero sin ellos la comida no tiene sabor. Tu cuerpo necesita poquito pero sin ellos no funciona bien. | Trace elements are like spices in a recipe: you use very little but without them the food has no flavor. Your body needs very little but without them it does not work well.'
      ],
      examples: [
        'La vitamina B12 solo se encuentra naturalmente en alimentos de origen animal. Los veganos estrictos necesitan suplementos de B12 para evitar anemia y problemas neurológicos. | Vitamin B12 is only found naturally in animal-source foods. Strict vegans need B12 supplements to prevent anemia and neurological problems.',
        'El escorbuto de los marineros del siglo XVIII se curaba con limones porque contienen vitamina C. El médico James Lind lo demostró en uno de los primeros ensayos clínicos de la historia. | Scurvy in 18th-century sailors was cured with lemons because they contain vitamin C. The physician James Lind proved this in one of the first clinical trials in history.'
      ]
    },

    3: {
      level: 3,
      summary: 'Los micronutrientes funcionan como cofactores enzimáticos (vitaminas B en el metabolismo energético), agentes redox (vitaminas C y E en defensa antioxidante), reguladores de expresión génica (vitaminas A y D como ligandos de receptores nucleares), y componentes estructurales/funcionales de metaloproteínas (Fe en hemoglobina, Zn en dedos de zinc). La biodisponibilidad depende de la forma química, interacciones nutriente-nutriente y estado fisiológico. | Micronutrients function as enzyme cofactors (B vitamins in energy metabolism), redox agents (vitamins C and E in antioxidant defense), gene expression regulators (vitamins A and D as nuclear receptor ligands), and structural/functional components of metalloproteins (Fe in hemoglobin, Zn in zinc fingers). Bioavailability depends on chemical form, nutrient-nutrient interactions, and physiological status.',
      explanation: `## Explicación

### Bioquímica de los Micronutrientes

#### Vitaminas B como Coenzimas del Metabolismo Energético

Las vitaminas del complejo B participan en casi todas las reacciones del metabolismo energético:

**Tiamina (B1) → Tiamina pirofosfato (TPP):**
- Cofactor de enzimas que descarboxilan cetoácidos:
  - Piruvato deshidrogenasa (PDH): Piruvato → Acetil-CoA
  - α-cetoglutarato deshidrogenasa: α-KG → Succinil-CoA (ciclo de Krebs)
  - Deshidrogenasa de cetoácidos de cadena ramificada (BCKDH): Catabolismo de leucina, isoleucina, valina
- También cofactor de transcetolasa (vía de pentosas fosfato)
- Deficiencia: Beriberi seco (neuropatía) y húmedo (ICC de alto gasto); Encefalopatía de Wernicke (confusión, ataxia, oftalmoplejía)

**Riboflavina (B2) → FAD y FMN:**
- FAD: Cofactor de succinate deshidrogenasa (complejo II), acil-CoA deshidrogenasa (beta-oxidación)
- FMN: Cofactor del complejo I de la cadena respiratoria
- Participan en reacciones de oxidación-reducción transferiendo electrones

**Niacina (B3) → NAD⁺ y NADP⁺:**
- NAD⁺: Aceptor de electrones en reacciones catabólicas (glucólisis, ciclo de Krebs, beta-oxidación)
- NADPH: Donador de electrones en reacciones anabólicas (lipogénesis, síntesis de esteroides, sistema glutatión)
- Se puede sintetizar parcialmente a partir de triptófano (60 mg Trp → 1 mg niacina)

**Piridoxina (B6) → Piridoxal fosfato (PLP):**
- Cofactor de >140 reacciones enzimáticas, principalmente metabolismo de aminoácidos:
  - Transaminasas (ALT, AST)
  - Descarboxilasas (síntesis de serotonina, dopamina, GABA, histamina)
  - Glucógeno fosforilasa
  - ALA sintasa (primer paso de síntesis de hemo)

#### Vitaminas Liposolubles como Reguladores de Expresión Génica

**Vitamina A (retinol → ácido retinoico):**
- El ácido retinoico se une a receptores nucleares RAR/RXR
- Regula la transcripción de genes involucrados en diferenciación celular, desarrollo embrionario y respuesta inmune
- 11-cis-retinal: Cromóforo de rodopsina (visión en penumbra)
- β-caroteno: Provitamina A; 1 μg retinol = 12 μg β-caroteno (factor de conversión)

**Vitamina D (colecalciferol → calcitriol):**
- Ruta de activación: UV-B en piel → colecalciferol → 25(OH)D₃ (hígado, CYP2R1) → 1,25(OH)₂D₃ (riñón, CYP27B1)
- 1,25(OH)₂D₃ se une al receptor VDR (receptor nuclear)
- Genes diana: calbindina (absorción intestinal de Ca²⁺), osteocalcina (mineralización ósea), catelicidina (péptido antimicrobiano)
- 25(OH)D₃ sérica: Marcador del estado de vitamina D (suficiente: >30 ng/mL; deficiente: <20 ng/mL)

#### Metabolismo del Hierro

**Absorción y regulación:**
- Hierro heme (carne): Absorción directa por transportador HCP1 (~25% absorción)
- Hierro no-heme (vegetales): Requiere reducción Fe³⁺ → Fe²⁺ por DCYTB, luego transporte por DMT1 (~5-10% absorción)
- Factores que aumentan absorción: Vitamina C (reduce Fe³⁺ a Fe²⁺), ácido cítrico, carne (factor MFP)
- Factores que disminuyen absorción: Fitatos (cereales), taninos (té), calcio, antiácidos

**Sistema hepcidina-ferroportina:**
- Hepcidina: Hormona hepática que regula la homeostasis del hierro
- ↑ Hepcidina → ↓ ferroportina en enterocitos → ↓ absorción de hierro y ↓ liberación de hierro de macrófagos
- ↑ Hepcidina: Exceso de hierro, inflamación (IL-6)
- ↓ Hepcidina: Deficiencia de hierro, hipoxia, eritropoyesis activa

**Parámetros de laboratorio:**
- Ferritina sérica: Reservas de hierro (↓ en deficiencia, ↑ en inflamación/sobrecarga)
- Hierro sérico + TIBC: Saturación de transferrina = (Fe sérico / TIBC) × 100
- Deficiencia: ↓ Ferritina, ↓ Fe sérico, ↑ TIBC, ↓ saturación de transferrina

#### Interacciones Nutriente-Nutriente

| Interacción | Efecto | Mecanismo |
|-------------|--------|-----------|
| Vitamina C + Hierro | ↑ Absorción de Fe | Reduce Fe³⁺ a Fe²⁺; mantiene Fe soluble |
| Calcio + Hierro | ↓ Absorción de Fe | Compiten por transportador DMT1 |
| Vitamina D + Calcio | ↑ Absorción de Ca | VDR induce calbindina intestinal |
| Zinc + Cobre | ↓ Absorción de Cu | Zinc induce metalotioneína que secuestra Cu |
| Vitamina K + Warfarina | Antagonismo | Vitamina K es cofactor para factores de coagulación que warfarina inhibe |
| Folato + B12 | Sinérgicos | Ambos necesarios para síntesis de metionina (metionina sintasa) |

---
## Explanation

### Biochemistry of Micronutrients

#### B Vitamins as Coenzymes of Energy Metabolism

B-complex vitamins participate in nearly all energy metabolism reactions:

**Thiamine (B1) → Thiamine pyrophosphate (TPP):**
- Cofactor of enzymes that decarboxylate keto acids:
  - Pyruvate dehydrogenase (PDH): Pyruvate → Acetyl-CoA
  - α-ketoglutarate dehydrogenase: α-KG → Succinyl-CoA (Krebs cycle)
  - Branched-chain keto acid dehydrogenase (BCKDH): Leucine, isoleucine, valine catabolism
- Also cofactor of transketolase (pentose phosphate pathway)
- Deficiency: Dry beriberi (neuropathy) and wet (high-output CHF); Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia)

**Riboflavin (B2) → FAD and FMN:**
- FAD: Cofactor of succinate dehydrogenase (complex II), acyl-CoA dehydrogenase (beta-oxidation)
- FMN: Cofactor of complex I of the respiratory chain
- Participate in oxidation-reduction reactions by transferring electrons

**Niacin (B3) → NAD⁺ and NADP⁺:**
- NAD⁺: Electron acceptor in catabolic reactions (glycolysis, Krebs cycle, beta-oxidation)
- NADPH: Electron donor in anabolic reactions (lipogenesis, steroid synthesis, glutathione system)
- Can be partially synthesized from tryptophan (60 mg Trp → 1 mg niacin)

**Pyridoxine (B6) → Pyridoxal phosphate (PLP):**
- Cofactor of >140 enzymatic reactions, mainly amino acid metabolism:
  - Transaminases (ALT, AST)
  - Decarboxylases (serotonin, dopamine, GABA, histamine synthesis)
  - Glycogen phosphorylase
  - ALA synthase (first step of heme synthesis)

#### Fat-Soluble Vitamins as Gene Expression Regulators

**Vitamin A (retinol → retinoic acid):**
- Retinoic acid binds to nuclear receptors RAR/RXR
- Regulates transcription of genes involved in cell differentiation, embryonic development, and immune response
- 11-cis-retinal: Rhodopsin chromophore (dim-light vision)
- β-carotene: Provitamin A; 1 μg retinol = 12 μg β-carotene (conversion factor)

**Vitamin D (cholecalciferol → calcitriol):**
- Activation pathway: UV-B in skin → cholecalciferol → 25(OH)D₃ (liver, CYP2R1) → 1,25(OH)₂D₃ (kidney, CYP27B1)
- 1,25(OH)₂D₃ binds to VDR (nuclear receptor)
- Target genes: calbindin (intestinal Ca²⁺ absorption), osteocalcin (bone mineralization), cathelicidin (antimicrobial peptide)
- Serum 25(OH)D₃: Marker of vitamin D status (sufficient: >30 ng/mL; deficient: <20 ng/mL)

#### Iron Metabolism

**Absorption and regulation:**
- Heme iron (meat): Direct absorption via HCP1 transporter (~25% absorption)
- Non-heme iron (vegetables): Requires reduction Fe³⁺ → Fe²⁺ by DCYTB, then transport via DMT1 (~5-10% absorption)
- Factors increasing absorption: Vitamin C (reduces Fe³⁺ to Fe²⁺), citric acid, meat (MFP factor)
- Factors decreasing absorption: Phytates (cereals), tannins (tea), calcium, antacids

**Hepcidin-ferroportin system:**
- Hepcidin: Hepatic hormone regulating iron homeostasis
- ↑ Hepcidin → ↓ ferroportin in enterocytes → ↓ iron absorption and ↓ iron release from macrophages
- ↑ Hepcidin: Iron excess, inflammation (IL-6)
- ↓ Hepcidin: Iron deficiency, hypoxia, active erythropoiesis

**Laboratory parameters:**
- Serum ferritin: Iron stores (↓ in deficiency, ↑ in inflammation/overload)
- Serum iron + TIBC: Transferrin saturation = (serum Fe / TIBC) x 100
- Deficiency: ↓ Ferritin, ↓ serum Fe, ↑ TIBC, ↓ transferrin saturation

#### Nutrient-Nutrient Interactions

| Interaction | Effect | Mechanism |
|-------------|--------|-----------|
| Vitamin C + Iron | ↑ Fe absorption | Reduces Fe³⁺ to Fe²⁺; keeps Fe soluble |
| Calcium + Iron | ↓ Fe absorption | Compete for DMT1 transporter |
| Vitamin D + Calcium | ↑ Ca absorption | VDR induces intestinal calbindin |
| Zinc + Copper | ↓ Cu absorption | Zinc induces metallothionein that sequesters Cu |
| Vitamin K + Warfarin | Antagonism | Vitamin K is cofactor for clotting factors that warfarin inhibits |
| Folate + B12 | Synergistic | Both needed for methionine synthesis (methionine synthase) |`,
      keyTerms: [
        { term: 'coenzima / coenzyme', definition: 'Forma activa de una vitamina que se une a una enzima para permitir la reacción catalítica; ej: TPP (de B1), FAD (de B2), NAD⁺ (de B3). | Active form of a vitamin that binds to an enzyme to allow the catalytic reaction; e.g., TPP (from B1), FAD (from B2), NAD⁺ (from B3).' },
        { term: 'hepcidina / hepcidin', definition: 'Hormona peptídica hepática que es el regulador maestro de la homeostasis del hierro; ↑ en inflamación, ↓ en deficiencia de hierro. | Hepatic peptide hormone that is the master regulator of iron homeostasis; ↑ in inflammation, ↓ in iron deficiency.' },
        { term: 'receptor nuclear / nuclear receptor', definition: 'Proteína intracelular que, al unirse a su ligando (ej: vitamina D, ácido retinoico), regula directamente la transcripción de genes específicos. | Intracellular protein that, upon binding its ligand (e.g., vitamin D, retinoic acid), directly regulates transcription of specific genes.' },
        { term: 'biodisponibilidad / bioavailability', definition: 'Fracción de un nutriente ingerido que realmente se absorbe y está disponible para uso metabólico; varía según la forma química y otros nutrientes. | Fraction of an ingested nutrient that is actually absorbed and available for metabolic use; varies by chemical form and other nutrients.' },
        { term: 'trampa del folato / folate trap', definition: 'Mecanismo por el cual la deficiencia de B12 causa acumulación de metiltetrahidrofolato inactivo, produciendo una deficiencia funcional de folato y anemia megaloblástica. | Mechanism by which B12 deficiency causes accumulation of inactive methyltetrahydrofolate, producing a functional folate deficiency and megaloblastic anemia.' },
        { term: 'metalotioneína / metallothionein', definition: 'Proteína rica en cisteína que se une a metales (Zn, Cu, Cd); la inducción por zinc puede secuestrar cobre y causar deficiencia de cobre. | Cysteine-rich protein that binds metals (Zn, Cu, Cd); induction by zinc can sequester copper and cause copper deficiency.' }
      ],
      clinicalNotes: 'Perlas clínicas: (1) Siempre dar tiamina IV ANTES de glucosa en alcohólicos/desnutridos para evitar precipitar encefalopatía de Wernicke (la glucosa consume tiamina). (2) La anemia con MCV elevado requiere medir tanto B12 como folato; tratar con folato solo puede enmascarar deficiencia de B12 y permitir progresión de la neuropatía. (3) En anemia de enfermedad crónica, la ferritina puede estar normal o elevada (reactante de fase aguda) a pesar de déficit funcional de hierro; el receptor soluble de transferrina (sTfR) y la relación sTfR/log(ferritina) ayudan a distinguir. (4) La suplementación de zinc >40 mg/día por períodos prolongados puede causar deficiencia de cobre (anemia + neutropenia). | Clinical pearls: (1) Always give thiamine IV BEFORE glucose in alcoholics/malnourished to avoid precipitating Wernicke encephalopathy (glucose consumes thiamine). (2) Anemia with elevated MCV requires measuring both B12 and folate; treating with folate alone can mask B12 deficiency and allow neuropathy progression. (3) In anemia of chronic disease, ferritin may be normal or elevated (acute phase reactant) despite functional iron deficit; soluble transferrin receptor (sTfR) and sTfR/log(ferritin) ratio help distinguish. (4) Zinc supplementation >40 mg/day for prolonged periods can cause copper deficiency (anemia + neutropenia).'
    },

    4: {
      level: 4,
      summary: 'La regulación molecular de los micronutrientes involucra sistemas de homeostasis sofisticados: el eje hepcidina-ferroportina-HIF para hierro, la señalización VDR/CYP27B1/CYP24A1 para vitamina D, el sistema IRP/IRE para regulación post-transcripcional del hierro, y la regulación por MTF-1 y metalotioneínas para zinc. Las deficiencias combinadas generan síndromes clínicos complejos que requieren evaluación sistemática. | Molecular regulation of micronutrients involves sophisticated homeostatic systems: the hepcidin-ferroportin-HIF axis for iron, VDR/CYP27B1/CYP24A1 signaling for vitamin D, the IRP/IRE system for post-transcriptional iron regulation, and MTF-1 and metallothionein regulation for zinc. Combined deficiencies generate complex clinical syndromes requiring systematic evaluation.',
      explanation: `## Explicación

### Regulación Molecular Avanzada de Micronutrientes

#### Sistema IRP/IRE de Regulación del Hierro

El metabolismo celular del hierro está controlado post-transcripcionalmente por las proteínas reguladoras del hierro (IRP1, IRP2) que se unen a elementos de respuesta al hierro (IRE) en los mRNAs:

**Cuando el hierro celular es BAJO:**
- IRP se une al IRE en el 5'-UTR del mRNA de ferritina → ↓ traducción de ferritina (no almacenar hierro)
- IRP se une al IRE en el 3'-UTR del mRNA del receptor de transferrina (TfR1) → ↑ estabilidad del mRNA → ↑ TfR1 → ↑ captación de hierro
- IRP se une al IRE del mRNA de ALA sintasa 2 → ↓ síntesis de hemo (conservar hierro)
- IRP se une al IRE del mRNA de ferroportina → ↓ exportación de hierro

**Cuando el hierro celular es ALTO:**
- IRP no se une (IRP1 se convierte en aconitasa citosólica; IRP2 se degrada vía FBXL5/ubiquitina)
- ↑ Ferritina (almacenar exceso), ↓ TfR1 (↓ captación)
- ↑ Ferroportina (exportar exceso), ↑ ALA sintasa 2 (usar hierro para hemo)

**Regulación por hepcidina a nivel sistémico:**
- La transcripción de hepcidina (gen HAMP) está regulada por:
  - BMP6/SMAD: Respuesta a hierro hepático (sensor HFE/TfR2/HJV)
  - JAK/STAT3: Respuesta a inflamación (IL-6) → ↑ hepcidina → "anemia inflamatoria"
  - HIF/ERFE: Respuesta a hipoxia y eritropoyesis → ↓ hepcidina → ↑ absorción

**Hemocromatosis hereditaria:**
- Mutación más común: HFE C282Y (homocigosis)
- Resultado: ↓ hepcidina inapropiada → absorción excesiva de hierro → depósito en hígado, corazón, páncreas
- Tríada clásica: cirrosis + diabetes bronceada + miocardiopatía

#### Metabolismo Avanzado de Vitamina D

**Regulación de la 1α-hidroxilasa renal (CYP27B1):**
- ↑ PTH → ↑ CYP27B1 → ↑ 1,25(OH)₂D₃
- ↑ 1,25(OH)₂D₃ → retroalimentación negativa: ↓ CYP27B1 + ↑ CYP24A1 (24-hidroxilasa inactivante)
- ↓ Fosfato → ↑ CYP27B1; ↑ FGF23 → ↓ CYP27B1

**Funciones no clásicas de la vitamina D:**
- **Inmunidad innata:** 1,25(OH)₂D₃ en macrófagos → ↑ catelicidina → actividad antimicrobiana contra Mycobacterium tuberculosis
- **Inmunidad adaptativa:** ↓ proliferación de células T, ↓ Th1/Th17, ↑ T reguladoras → efecto inmunomodulador
- **Regulación de renina:** ↓ expresión de renina → posible efecto antihipertensivo
- **Función muscular:** VDR en músculo esquelético; deficiencia → miopatía proximal, ↑ riesgo de caídas en ancianos
- **Oncología:** Posible efecto antiproliferativo; datos epidemiológicos de asociación con ↓ riesgo de cáncer colorrectal

#### Metabolismo del Zinc: MTF-1 y Dedos de Zinc

**Homeostasis del zinc:**
- Transportadores ZIP (SLC39A): Importan zinc al citoplasma
- Transportadores ZnT (SLC30A): Exportan zinc del citoplasma
- MTF-1 (Metal-responsive Transcription Factor 1): Sensor de zinc → induce metalotioneínas y ZnT1

**Funciones estructurales del zinc:**
- **Dedos de zinc (zinc fingers):** Motivos proteicos donde Zn²⁺ estabiliza la estructura de ~3,000 factores de transcripción y proteínas de unión a ADN
- **Enzimas con zinc:** Anhidrasa carbónica, alcohol deshidrogenasa, metaloproteínasas de matriz, superóxido dismutasa (Cu/Zn-SOD)
- **Señalización:** Zinc como segundo mensajero intracelular (ondas de zinc)

**Implicaciones clínicas del zinc:**
- **Diarrea aguda:** La OMS recomienda suplementación de zinc (20 mg/día × 10-14 días) para reducir duración y gravedad
- **Resfriado común:** Pastillas de zinc (≥75 mg/día) iniciadas en primeras 24 h reducen duración en ~1 día (Cochrane)
- **Enfermedad de Wilson:** Zinc induce metalotioneína intestinal que secuestra cobre → tratamiento de mantenimiento

#### Folato y Metabolismo de Un Carbono

**Ciclo del folato:**
- THF (tetrahidrofolato) transporta unidades de un carbono en diferentes estados de oxidación
- 5,10-metileno-THF → timidilato sintasa → dTMP (síntesis de ADN)
- 5-metil-THF + homocisteína → metionina (requiere B12 como cofactor) → SAM (S-adenosilmetionina)
- SAM: Donador universal de grupos metilo → metilación de ADN, histonas, fosfolípidos, neurotransmisores

**Trampa del metilfolato (B12-dependiente):**
- Sin B12, 5-metil-THF no puede transferir su grupo metilo → se acumula → THF no se regenera → déficit funcional de folato → ↓ síntesis de ADN → anemia megaloblástica
- B12 también es cofactor de metilmalonil-CoA mutasa → ↑ ácido metilmalónico en deficiencia de B12 (no en deficiencia de folato) → marcador diferenciador

**Polimorfismo MTHFR C677T:**
- Homocigotos TT (~10-15% de la población): ↓ actividad de MTHFR → ↓ conversión de 5,10-metileno-THF a 5-metil-THF
- Consecuencias: ↑ homocisteína (factor de riesgo CV débil), ↑ riesgo de defectos del tubo neural si ingesta de folato es baja
- Relevancia clínica: Debatida; la suplementación con ácido fólico es efectiva independientemente del genotipo

---
## Explanation

### Advanced Molecular Regulation of Micronutrients

#### IRP/IRE System of Iron Regulation

Cellular iron metabolism is post-transcriptionally controlled by iron regulatory proteins (IRP1, IRP2) that bind to iron-responsive elements (IRE) in mRNAs:

**When cellular iron is LOW:**
- IRP binds to IRE in 5'-UTR of ferritin mRNA → ↓ ferritin translation (don't store iron)
- IRP binds to IRE in 3'-UTR of transferrin receptor (TfR1) mRNA → ↑ mRNA stability → ↑ TfR1 → ↑ iron uptake
- IRP binds to IRE of ALA synthase 2 mRNA → ↓ heme synthesis (conserve iron)
- IRP binds to IRE of ferroportin mRNA → ↓ iron export

**When cellular iron is HIGH:**
- IRP does not bind (IRP1 becomes cytosolic aconitase; IRP2 degrades via FBXL5/ubiquitin)
- ↑ Ferritin (store excess), ↓ TfR1 (↓ uptake)
- ↑ Ferroportin (export excess), ↑ ALA synthase 2 (use iron for heme)

**Systemic hepcidin regulation:**
- Hepcidin transcription (HAMP gene) is regulated by:
  - BMP6/SMAD: Response to hepatic iron (HFE/TfR2/HJV sensor)
  - JAK/STAT3: Response to inflammation (IL-6) → ↑ hepcidin → "inflammatory anemia"
  - HIF/ERFE: Response to hypoxia and erythropoiesis → ↓ hepcidin → ↑ absorption

**Hereditary hemochromatosis:**
- Most common mutation: HFE C282Y (homozygosity)
- Result: Inappropriately ↓ hepcidin → excessive iron absorption → deposition in liver, heart, pancreas
- Classic triad: cirrhosis + bronze diabetes + cardiomyopathy

#### Advanced Vitamin D Metabolism

**Renal 1α-hydroxylase (CYP27B1) regulation:**
- ↑ PTH → ↑ CYP27B1 → ↑ 1,25(OH)₂D₃
- ↑ 1,25(OH)₂D₃ → negative feedback: ↓ CYP27B1 + ↑ CYP24A1 (inactivating 24-hydroxylase)
- ↓ Phosphate → ↑ CYP27B1; ↑ FGF23 → ↓ CYP27B1

**Non-classical vitamin D functions:**
- **Innate immunity:** 1,25(OH)₂D₃ in macrophages → ↑ cathelicidin → antimicrobial activity against Mycobacterium tuberculosis
- **Adaptive immunity:** ↓ T cell proliferation, ↓ Th1/Th17, ↑ regulatory T cells → immunomodulatory effect
- **Renin regulation:** ↓ renin expression → possible antihypertensive effect
- **Muscle function:** VDR in skeletal muscle; deficiency → proximal myopathy, ↑ fall risk in elderly
- **Oncology:** Possible antiproliferative effect; epidemiological data of association with ↓ colorectal cancer risk

#### Zinc Metabolism: MTF-1 and Zinc Fingers

**Zinc homeostasis:**
- ZIP transporters (SLC39A): Import zinc to cytoplasm
- ZnT transporters (SLC30A): Export zinc from cytoplasm
- MTF-1 (Metal-responsive Transcription Factor 1): Zinc sensor → induces metallothioneins and ZnT1

**Structural functions of zinc:**
- **Zinc fingers:** Protein motifs where Zn²⁺ stabilizes the structure of ~3,000 transcription factors and DNA-binding proteins
- **Zinc enzymes:** Carbonic anhydrase, alcohol dehydrogenase, matrix metalloproteinases, superoxide dismutase (Cu/Zn-SOD)
- **Signaling:** Zinc as intracellular second messenger (zinc waves)

**Clinical implications of zinc:**
- **Acute diarrhea:** WHO recommends zinc supplementation (20 mg/day x 10-14 days) to reduce duration and severity
- **Common cold:** Zinc lozenges (≥75 mg/day) started within first 24 h reduce duration by ~1 day (Cochrane)
- **Wilson disease:** Zinc induces intestinal metallothionein that sequesters copper → maintenance treatment

#### Folate and One-Carbon Metabolism

**Folate cycle:**
- THF (tetrahydrofolate) transports one-carbon units in different oxidation states
- 5,10-methylene-THF → thymidylate synthase → dTMP (DNA synthesis)
- 5-methyl-THF + homocysteine → methionine (requires B12 as cofactor) → SAM (S-adenosylmethionine)
- SAM: Universal methyl group donor → methylation of DNA, histones, phospholipids, neurotransmitters

**Methylfolate trap (B12-dependent):**
- Without B12, 5-methyl-THF cannot transfer its methyl group → accumulates → THF is not regenerated → functional folate deficit → ↓ DNA synthesis → megaloblastic anemia
- B12 is also cofactor of methylmalonyl-CoA mutase → ↑ methylmalonic acid in B12 deficiency (not in folate deficiency) → differentiating marker

**MTHFR C677T polymorphism:**
- TT homozygotes (~10-15% of population): ↓ MTHFR activity → ↓ conversion of 5,10-methylene-THF to 5-methyl-THF
- Consequences: ↑ homocysteine (weak CV risk factor), ↑ neural tube defect risk if folate intake is low
- Clinical relevance: Debated; folic acid supplementation is effective regardless of genotype`,
      keyTerms: [
        { term: 'IRP/IRE (proteínas reguladoras del hierro / iron regulatory proteins)', definition: 'Sistema de regulación post-transcripcional que ajusta la expresión de proteínas del metabolismo del hierro (ferritina, TfR1, ferroportina) según los niveles intracelulares de hierro. | Post-transcriptional regulatory system that adjusts expression of iron metabolism proteins (ferritin, TfR1, ferroportin) based on intracellular iron levels.' },
        { term: 'CYP27B1 / 1α-hidroxilasa renal', definition: 'Enzima renal que cataliza el paso final de activación de vitamina D: 25(OH)D₃ → 1,25(OH)₂D₃ (calcitriol); regulada por PTH, fosfato y FGF23. | Renal enzyme catalyzing the final activation step of vitamin D: 25(OH)D₃ → 1,25(OH)₂D₃ (calcitriol); regulated by PTH, phosphate, and FGF23.' },
        { term: 'SAM (S-adenosilmetionina / S-adenosylmethionine)', definition: 'Donador universal de grupos metilo producido a partir de metionina; esencial para metilación de ADN, proteínas y neurotransmisores; su producción depende de folato y B12. | Universal methyl group donor produced from methionine; essential for methylation of DNA, proteins, and neurotransmitters; its production depends on folate and B12.' },
        { term: 'dedos de zinc / zinc fingers', definition: 'Motivos estructurales de proteínas estabilizados por Zn²⁺ que permiten la unión a ADN; presentes en ~3,000 factores de transcripción humanos. | Protein structural motifs stabilized by Zn²⁺ that allow DNA binding; present in ~3,000 human transcription factors.' },
        { term: 'hemocromatosis / hemochromatosis', definition: 'Enfermedad hereditaria (HFE C282Y) con producción inadecuadamente baja de hepcidina que causa absorción excesiva de hierro y depósito en órganos (hígado, corazón, páncreas). | Hereditary disease (HFE C282Y) with inappropriately low hepcidin production causing excessive iron absorption and organ deposition (liver, heart, pancreas).' },
        { term: 'MTHFR C677T', definition: 'Polimorfismo genético que reduce la actividad de MTHFR, afectando el ciclo del folato y aumentando homocisteína; los homocigotos TT necesitan asegurar ingesta adecuada de folato. | Genetic polymorphism that reduces MTHFR activity, affecting the folate cycle and increasing homocysteine; TT homozygotes need to ensure adequate folate intake.' }
      ],
      clinicalNotes: 'Aplicaciones clínicas avanzadas: (1) En anemia con ferritina normal y marcadores inflamatorios elevados, medir receptor soluble de transferrina (sTfR) y calcular índice sTfR/log(ferritina) >2 sugiere deficiencia de hierro superpuesta a inflamación. (2) Antes de iniciar suplementación de hierro IV, descartar infección activa (la hepcidina redistribuye hierro de bacterias; suplementar hierro en sepsis puede empeorar el pronóstico). (3) La intoxicación por vitamina A es especialmente peligrosa en embarazo (teratogénica); isotretinoína requiere anticoncepción estricta. (4) En pacientes con enfermedad renal crónica, CYP27B1 está reducida → requieren calcitriol exógeno [1,25(OH)₂D₃] en lugar de colecalciferol. (5) Los inhibidores de bomba de protones crónicos reducen absorción de hierro, calcio, magnesio y B12. | Advanced clinical applications: (1) In anemia with normal ferritin and elevated inflammatory markers, measure soluble transferrin receptor (sTfR) and calculate sTfR/log(ferritin) index >2 suggests iron deficiency superimposed on inflammation. (2) Before starting IV iron supplementation, rule out active infection (hepcidin redistributes iron from bacteria; supplementing iron in sepsis may worsen prognosis). (3) Vitamin A intoxication is especially dangerous in pregnancy (teratogenic); isotretinoin requires strict contraception. (4) In patients with chronic kidney disease, CYP27B1 is reduced → require exogenous calcitriol [1,25(OH)₂D₃] instead of cholecalciferol. (5) Chronic proton pump inhibitors reduce absorption of iron, calcium, magnesium, and B12.'
    },

    5: {
      level: 5,
      summary: 'La investigación contemporánea en micronutrientes abarca epigenética nutricional (metilación del ADN dependiente de folato/B12/SAM), inmunonutrición (modulación de respuesta inmune por vitamina D, zinc y selenio), metalómica (perfiles integrados de elementos traza), y el impacto del microbioma en la biosíntesis y biodisponibilidad de micronutrientes. Las guías actualizadas 2024-2025 de la Endocrine Society para vitamina D y de la OMS para suplementación de hierro reflejan evidencia de alta calidad de ensayos aleatorizados. | Contemporary micronutrient research spans nutritional epigenetics (folate/B12/SAM-dependent DNA methylation), immunonutrition (immune response modulation by vitamin D, zinc, and selenium), metallomics (integrated trace element profiling), and microbiome impact on micronutrient biosynthesis and bioavailability. Updated 2024-2025 Endocrine Society guidelines for vitamin D and WHO guidelines for iron supplementation reflect high-quality evidence from randomized trials.',
      explanation: `## Explicación

### Fronteras en la Ciencia de Micronutrientes

#### Epigenética Nutricional

**Metilación del ADN y micronutrientes:**
- SAM (producido por folato + B12 + metionina) es el donador de grupos metilo para las ADN metiltransferasas (DNMT1, DNMT3a/b)
- La metilación de islas CpG en promotores generalmente silencia genes
- Deficiencia de folato/B12 → ↓ SAM → hipometilación global del ADN → activación de oncogenes, inestabilidad genómica
- Pero también: hipometilación selectiva puede reactivar genes supresores de tumores

**Programación epigenética fetal (hipótesis de Barker/DOHaD):**
- El estado nutricional materno de micronutrientes (folato, B12, zinc, hierro) durante la gestación programa epigenéticamente el riesgo metabólico del hijo
- Estudio de la hambruna holandesa (Dutch Hunger Winter, 1944-45): Los hijos expuestos in utero mostraron ↓ metilación de IGF2 y ↑ riesgo de enfermedad cardiovascular 60 años después
- Implicación: La suplementación periconcepcional de folato (400-800 μg/día) no solo previene defectos del tubo neural sino que puede tener efectos epigenéticos protectores a largo plazo

**Nutrientes y modificación de histonas:**
- Butirato (de fibra): Inhibidor de HDAC → ↑ acetilación de histonas → efecto antineoplásico en colonocitos
- Vitamina C: Cofactor de enzimas TET (ten-eleven translocation) → desmetilación activa del ADN
- Zinc: Componente de las desacetilasas de histonas sirtuinas (SIRT1-7)

#### Inmunonutrición: Micronutrientes y Respuesta Inmune

**Vitamina D e inmunidad (evidencia actualizada 2024-2025):**
- Ensayo VITAL (n=25,871, seguimiento 5+ años): Vitamina D₃ 2000 UI/día no redujo incidencia de cáncer total ni eventos cardiovasculares mayores en población general
- Sin embargo: Meta-análisis (Lancet Diabetes Endocrinol, 2024) confirma que la suplementación reduce mortalidad por cáncer en ~12% (sin reducir incidencia)
- En autoinmunidad: Ensayo VITAL sugiere reducción de ~22% en enfermedades autoinmunes (artritis reumatoide, psoriasis, tiroiditis) con vitamina D + omega-3
- Guías Endocrine Society 2024: Recomienda suplementación empírica (1000-2000 UI/día) en poblaciones de riesgo sin necesidad de cribado universal de 25(OH)D

**Zinc e inmunidad:**
- Zinc es esencial para: desarrollo tímico, función de células NK, producción de citoquinas, integridad de barrera epitelial
- Deficiencia de zinc → ↓ recuento de linfocitos T, ↓ función de neutrófilos, ↑ susceptibilidad a infecciones
- Evidencia en COVID-19: Meta-análisis de 2023 sugiere modesta reducción de mortalidad y duración de hospitalización con zinc (datos aún no conclusivos)
- Selenoproteínas: Glutatión peroxidasa (GPx), tiorredoxina reductasa → defensa antioxidante; Selenoproteína P → transporte de selenio

#### Metalómica y Perfilado de Elementos Traza

**Concepto de metalómica:**
- Análisis integrado de todos los elementos metálicos y metaloides en un sistema biológico
- Técnicas: ICP-MS (espectrometría de masas con plasma acoplado inductivamente), XANES, metaloproteómica
- Permite detectar desequilibrios minerales subclínicos no evidentes en pruebas individuales

**Interactoma de metales:**
- Los metales no actúan aisladamente; existe una red de interacciones:
  - Fe-Cu: La ceruloplasmina (Cu) oxida Fe²⁺ a Fe³⁺ para carga en transferrina; deficiencia de Cu → anemia resistente a hierro
  - Zn-Cu: Antagonismo competitivo; suplementación de Zn puede causar deficiencia de Cu
  - Se-Hg: Selenio secuestra mercurio formando complejos inertes; protección contra toxicidad por metilmercurio
  - Ca-Mg: Compiten por absorción; hipercalcemia puede causar hipomagnesemia

#### Microbioma y Micronutrientes

**Síntesis de vitaminas por el microbioma:**
- Bacterias intestinales sintetizan vitaminas K2 (menaquinona), B12, biotina, folato, riboflavina
- Sin embargo: La mayor parte se produce en el colon donde la absorción es limitada (las vitaminas se absorben principalmente en intestino delgado)
- Relevancia clínica: Los antibióticos de amplio espectro pueden reducir la síntesis microbiana de vitamina K → riesgo de sangrado en pacientes con ingesta marginal

**Impacto del microbioma en biodisponibilidad de minerales:**
- Ácidos grasos de cadena corta (AGCC) ↓ pH colónico → ↑ solubilidad y absorción de Ca²⁺ y Mg²⁺
- Prebióticos (fructooligosacáridos, inulina) → ↑ AGCC → ↑ absorción mineral
- Ciertas bacterias (Lactobacillus) producen fitasas → degradan fitato → ↑ biodisponibilidad de Fe y Zn
- Disbiosis → ↑ inflamación intestinal → ↑ hepcidina local → ↓ absorción de hierro

#### Controversias Actuales y Ensayos Clave

**Suplementación rutinaria de vitaminas: ¿Beneficio o placebo?**
- USPSTF 2022: Evidencia insuficiente para recomendar suplementación de multivitamínicos para prevención de cáncer o enfermedad cardiovascular en adultos sanos
- Excepción: Ácido fólico 400-800 μg/día en mujeres en edad fértil (prevención de defectos del tubo neural: NNT ~1,000)
- Excepción: Vitamina D en poblaciones de riesgo (ancianos, piel oscura, latitudes altas, obesidad)

**Hierro IV vs. oral (ensayos IRONMAN, AFFIRM-AHF):**
- En insuficiencia cardíaca con fracción de eyección reducida + deficiencia de hierro: Hierro carboximaltosa IV mejora capacidad funcional (6MWT) y reduce hospitalizaciones por IC
- IRONMAN (2022): Ferric derisomaltose IV en IC con deficiencia de hierro → tendencia a ↓ hospitalizaciones/muerte CV (p=0.07)
- Guías ESC 2023: Recomiendan evaluación de estado de hierro (ferritina <100 o <300 con saturación <20%) en todos los pacientes con IC

**Vitamina B12 y metformina:**
- Metformina reduce absorción de B12 en ~20-30% de usuarios a largo plazo
- Mecanismo: Interfiere con el receptor de cubilina-megalina dependiente de Ca²⁺ en íleon
- ADA 2024: Recomienda monitorización periódica de B12 en usuarios crónicos de metformina

---
## Explanation

### Frontiers in Micronutrient Science

#### Nutritional Epigenetics

**DNA methylation and micronutrients:**
- SAM (produced by folate + B12 + methionine) is the methyl group donor for DNA methyltransferases (DNMT1, DNMT3a/b)
- CpG island methylation in promoters generally silences genes
- Folate/B12 deficiency → ↓ SAM → global DNA hypomethylation → oncogene activation, genomic instability
- But also: selective hypomethylation can reactivate tumor suppressor genes

**Fetal epigenetic programming (Barker/DOHaD hypothesis):**
- Maternal micronutrient nutritional status (folate, B12, zinc, iron) during gestation epigenetically programs offspring metabolic risk
- Dutch Hunger Winter study (1944-45): Children exposed in utero showed ↓ IGF2 methylation and ↑ cardiovascular disease risk 60 years later
- Implication: Periconceptional folate supplementation (400-800 μg/day) not only prevents neural tube defects but may have long-term protective epigenetic effects

**Nutrients and histone modification:**
- Butyrate (from fiber): HDAC inhibitor → ↑ histone acetylation → antineoplastic effect in colonocytes
- Vitamin C: Cofactor of TET enzymes → active DNA demethylation
- Zinc: Component of sirtuin histone deacetylases (SIRT1-7)

#### Immunonutrition: Micronutrients and Immune Response

**Vitamin D and immunity (updated evidence 2024-2025):**
- VITAL trial (n=25,871, 5+ year follow-up): Vitamin D₃ 2000 IU/day did not reduce total cancer incidence or major CV events in general population
- However: Meta-analysis (Lancet Diabetes Endocrinol, 2024) confirms supplementation reduces cancer mortality by ~12% (without reducing incidence)
- In autoimmunity: VITAL trial suggests ~22% reduction in autoimmune diseases (RA, psoriasis, thyroiditis) with vitamin D + omega-3
- Endocrine Society 2024 Guidelines: Recommends empiric supplementation (1000-2000 IU/day) in at-risk populations without universal 25(OH)D screening

**Zinc and immunity:**
- Zinc is essential for: thymic development, NK cell function, cytokine production, epithelial barrier integrity
- Zinc deficiency → ↓ T lymphocyte count, ↓ neutrophil function, ↑ susceptibility to infections
- COVID-19 evidence: 2023 meta-analysis suggests modest reduction in mortality and hospitalization duration with zinc (data still inconclusive)
- Selenoproteins: Glutathione peroxidase (GPx), thioredoxin reductase → antioxidant defense; Selenoprotein P → selenium transport

#### Metallomics and Trace Element Profiling

**Metallomics concept:**
- Integrated analysis of all metal and metalloid elements in a biological system
- Techniques: ICP-MS, XANES, metalloproteomics
- Allows detection of subclinical mineral imbalances not evident in individual tests

**Metal interactome:**
- Metals do not act in isolation; there is an interaction network:
  - Fe-Cu: Ceruloplasmin (Cu) oxidizes Fe²⁺ to Fe³⁺ for transferrin loading; Cu deficiency → iron-resistant anemia
  - Zn-Cu: Competitive antagonism; Zn supplementation can cause Cu deficiency
  - Se-Hg: Selenium sequesters mercury forming inert complexes; protection against methylmercury toxicity
  - Ca-Mg: Compete for absorption; hypercalcemia can cause hypomagnesemia

#### Microbiome and Micronutrients

**Vitamin synthesis by the microbiome:**
- Gut bacteria synthesize vitamins K2 (menaquinone), B12, biotin, folate, riboflavin
- However: Most is produced in the colon where absorption is limited (vitamins are mainly absorbed in small intestine)
- Clinical relevance: Broad-spectrum antibiotics can reduce microbial vitamin K synthesis → bleeding risk in patients with marginal intake

**Microbiome impact on mineral bioavailability:**
- Short-chain fatty acids (SCFA) ↓ colonic pH → ↑ solubility and absorption of Ca²⁺ and Mg²⁺
- Prebiotics (fructooligosaccharides, inulin) → ↑ SCFA → ↑ mineral absorption
- Certain bacteria (Lactobacillus) produce phytases → degrade phytate → ↑ Fe and Zn bioavailability
- Dysbiosis → ↑ intestinal inflammation → ↑ local hepcidin → ↓ iron absorption

#### Current Controversies and Key Trials

**Routine vitamin supplementation: Benefit or placebo?**
- USPSTF 2022: Insufficient evidence to recommend multivitamin supplementation for cancer or CV disease prevention in healthy adults
- Exception: Folic acid 400-800 μg/day in women of childbearing age (neural tube defect prevention: NNT ~1,000)
- Exception: Vitamin D in at-risk populations (elderly, dark skin, high latitudes, obesity)

**IV vs. oral iron (IRONMAN, AFFIRM-AHF trials):**
- In heart failure with reduced EF + iron deficiency: IV ferric carboxymaltose improves functional capacity (6MWT) and reduces HF hospitalizations
- IRONMAN (2022): IV ferric derisomaltose in HF with iron deficiency → trend toward ↓ hospitalizations/CV death (p=0.07)
- ESC 2023 Guidelines: Recommend iron status assessment (ferritin <100 or <300 with saturation <20%) in all HF patients

**Vitamin B12 and metformin:**
- Metformin reduces B12 absorption in ~20-30% of long-term users
- Mechanism: Interferes with calcium-dependent cubilin-megalin receptor in ileum
- ADA 2024: Recommends periodic B12 monitoring in chronic metformin users`,
      keyTerms: [
        { term: 'epigenética nutricional / nutritional epigenetics', definition: 'Estudio de cómo los nutrientes (especialmente donadores de metilo: folato, B12, colina) modifican la expresión génica a través de metilación del ADN y modificación de histonas sin alterar la secuencia de ADN. | Study of how nutrients (especially methyl donors: folate, B12, choline) modify gene expression through DNA methylation and histone modification without altering the DNA sequence.' },
        { term: 'metalómica / metallomics', definition: 'Análisis integrado de todos los metales y metaloides en un sistema biológico; permite detectar desequilibrios minerales complejos y sus interacciones. | Integrated analysis of all metals and metalloids in a biological system; allows detection of complex mineral imbalances and their interactions.' },
        { term: 'inmunonutrición / immunonutrition', definition: 'Campo que estudia cómo micronutrientes específicos (vitamina D, zinc, selenio, vitamina C) modulan la respuesta inmune innata y adaptativa. | Field studying how specific micronutrients (vitamin D, zinc, selenium, vitamin C) modulate innate and adaptive immune response.' },
        { term: 'DOHaD (Developmental Origins of Health and Disease)', definition: 'Hipótesis de que las condiciones nutricionales durante el desarrollo fetal programan epigenéticamente el riesgo de enfermedades crónicas en la vida adulta. | Hypothesis that nutritional conditions during fetal development epigenetically program the risk of chronic diseases in adult life.' },
        { term: 'VITAL (ensayo clínico / clinical trial)', definition: 'Ensayo aleatorizado con >25,000 participantes que evaluó vitamina D y omega-3 para prevención primaria de cáncer y enfermedad cardiovascular. | Randomized trial with >25,000 participants evaluating vitamin D and omega-3 for primary prevention of cancer and cardiovascular disease.' }
      ],
      clinicalNotes: 'Implicaciones para la práctica clínica de nivel MD: (1) En pacientes con IC y deficiencia de hierro (ferritina <100 o <300 + TSAT <20%), considerar hierro IV (carboximaltosa férrica) según ESC 2023. (2) Monitorizar B12 en usuarios crónicos de metformina y de IBP; el ácido metilmalónico sérico es más sensible que B12 sérica para deficiencia temprana. (3) No solicitar rutinariamente 25(OH)D en población general sana; suplementar empíricamente 1000-2000 UI/día en poblaciones de riesgo (Endocrine Society 2024). (4) La suplementación periconcepcional de folato (400-800 μg/día) es una de las intervenciones de salud pública con mejor evidencia (NNT ~1,000 para defectos del tubo neural). (5) Tener precaución con suplementación de antioxidantes en altas dosis en fumadores (ensayo ATBC: beta-caroteno ↑ riesgo de cáncer de pulmón en fumadores). (6) Evaluar interacciones micronutriente-fármaco: warfarina-vitamina K, levotiroxina-calcio/hierro, tetraciclinas/quinolonas-cationes divalentes. | MD-level clinical practice implications: (1) In HF patients with iron deficiency (ferritin <100 or <300 + TSAT <20%), consider IV iron (ferric carboxymaltose) per ESC 2023. (2) Monitor B12 in chronic metformin and PPI users; serum methylmalonic acid is more sensitive than serum B12 for early deficiency. (3) Do not routinely order 25(OH)D in healthy general population; empirically supplement 1000-2000 IU/day in at-risk populations (Endocrine Society 2024). (4) Periconceptional folate supplementation (400-800 μg/day) is one of the best-evidenced public health interventions (NNT ~1,000 for neural tube defects). (5) Exercise caution with high-dose antioxidant supplementation in smokers (ATBC trial: beta-carotene ↑ lung cancer risk in smokers). (6) Evaluate micronutrient-drug interactions: warfarin-vitamin K, levothyroxine-calcium/iron, tetracyclines/quinolones-divalent cations.'
    }
  },

  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Dietary Reference Intakes: The Essential Guide to Nutrient Requirements',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-2',
      type: 'textbook',
      title: 'Modern Nutrition in Health and Disease, 12th Edition',
      authors: ['Ross, A.C.', 'Caballero, B.', 'Cousins, R.J.', 'Tucker, K.L.'],
      source: 'Wolters Kluwer',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Vitamin D Supplementation and Prevention of Type 2 Diabetes (D2d Study)',
      authors: ['Pittas, A.G.', 'Dawson-Hughes, B.', 'Sheehan, P.R.'],
      source: 'New England Journal of Medicine, 381(6), 520-530, 2019',
      license: 'CC BY 4.0'
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Intravenous ferric derisomaltose in patients with heart failure and iron deficiency (IRONMAN)',
      authors: ['Kalra, P.R.', 'Cleland, J.G.F.', 'Petrie, M.C.'],
      source: 'The Lancet, 400(10369), 2199-2209, 2022',
      license: 'CC BY 4.0'
    }
  ],
  crossReferences: [
    { targetId: 'topic-macronutrientes', targetType: 'topic', relationship: 'sibling', label: 'Macronutrientes / Macronutrients' },
    { targetId: 'topic-nutricion-diabetes', targetType: 'topic', relationship: 'related', label: 'Nutrición para Diabéticos / Diabetic Nutrition' },
    { targetId: 'topic-nutricion-cardiaca', targetType: 'topic', relationship: 'related', label: 'Nutrición Cardiosaludable / Heart-Healthy Nutrition' }
  ],
  tags: {
    systems: ['hematologic', 'skeletal', 'immune', 'endocrine', 'nervous'],
    topics: ['nutrition', 'micronutrients', 'vitamins', 'minerals', 'biochemistry'],
    keywords: ['vitaminas', 'minerales', 'hierro', 'calcio', 'vitamina D', 'folato', 'B12', 'zinc', 'selenio', 'hepcidina', 'epigenética', 'iron', 'vitamins', 'minerals'],
    clinicalRelevance: 'high'
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
