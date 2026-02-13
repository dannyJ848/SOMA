/**
 * Evaluacion Nutricional / Nutritional Assessment
 *
 * Contenido educativo bilingue (espanol primero) sobre IMC, composicion
 * corporal, metodos de evaluacion dietetica, tamizaje de desnutricion,
 * y herramientas de evaluacion nutricional clinica.
 *
 * Bilingual educational content (Spanish-first) on BMI, body composition,
 * dietary assessment methods, malnutrition screening, and clinical
 * nutritional assessment tools.
 */

import { EducationalContent } from '../types';

export const evaluacionNutricionalNutritionalAssessment: EducationalContent = {
  id: 'nutrition-evaluacion-nutricional',
  type: 'topic',
  name: 'Nutritional Assessment | Evaluacion Nutricional',
  nameEs: 'Evaluacion Nutricional',
  alternateNames: [
    'Valoracion del estado nutricional | Nutritional Status Evaluation',
    'Antropometria y composicion corporal | Anthropometry and Body Composition',
    'Tamizaje nutricional | Nutritional Screening',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La evaluacion nutricional es como un "chequeo" de como comes y como esta tu cuerpo. Incluye pesarte, medirte, ver que comes normalmente, y hacer analisis de sangre. Esto ayuda a tu doctor a saber si estas comiendo bien y si tu cuerpo tiene todos los nutrientes que necesita. | Nutritional assessment is like a "checkup" of how you eat and how your body is doing. It includes weighing you, measuring you, seeing what you normally eat, and doing blood tests. This helps your doctor know if you are eating well and if your body has all the nutrients it needs.',
      explanation: `## Que Es la Evaluacion Nutricional | What Is Nutritional Assessment

La evaluacion nutricional es como un examen completo de tu alimentacion y tu cuerpo. Ayuda a los doctores a saber si estas recibiendo todos los nutrientes que necesitas.

Nutritional assessment is like a complete exam of your nutrition and body. It helps doctors know if you are getting all the nutrients you need.

---

### El Indice de Masa Corporal (IMC) | Body Mass Index (BMI)

El IMC es un numero que se calcula con tu peso y tu estatura para saber si tienes un peso saludable. | BMI is a number calculated from your weight and height to know if you have a healthy weight.

**Como se calcula | How it's calculated:**
- IMC = Peso (kg) / Estatura (m) x Estatura (m) | BMI = Weight (kg) / Height (m) x Height (m)

**Que significa tu IMC | What your BMI means:**

| IMC | Categoria | Significado |
|-----|-----------|-------------|
| Menos de 18.5 | Bajo peso | Puede necesitar comer mas |
| 18.5 - 24.9 | Peso normal | Buen rango |
| 25.0 - 29.9 | Sobrepeso | Puede beneficiarse de cambios |
| 30.0 o mas | Obesidad | Mayor riesgo de enfermedades |

**Importante:** El IMC no es perfecto. No distingue entre musculo y grasa. Un atleta musculoso puede tener IMC alto sin ser obeso. | BMI isn't perfect. It doesn't distinguish between muscle and fat.

### Como Evaluan Tu Alimentacion | How They Evaluate Your Eating

Los nutriologos usan diferentes metodos para saber que comes: | Nutritionists use different methods to know what you eat:

1. **Recordatorio de 24 horas | 24-hour recall:** Te preguntan todo lo que comiste ayer
2. **Diario de alimentos | Food diary:** Anotas todo lo que comes por 3-7 dias
3. **Frecuencia de alimentos | Food frequency:** Te preguntan con que frecuencia comes ciertos alimentos
4. **Historia dietetica | Dietary history:** Hablan contigo sobre tus habitos de alimentacion

### Senales de Que Tu Nutricion Puede No Estar Bien | Signs Your Nutrition May Not Be Right

**En el cuerpo | In the body:**
- Perdida de peso sin intentarlo | Losing weight without trying
- Sentirse muy cansado todo el tiempo | Feeling very tired all the time
- Cabello que se cae mucho | Hair falling out a lot
- Heridas que tardan en sanar | Wounds that are slow to heal
- Unas quebradizas | Brittle nails
- Piel muy seca | Very dry skin

**En los analisis de sangre | In blood tests:**
- Hemoglobina baja (anemia) | Low hemoglobin (anemia)
- Albumina baja (no suficiente proteina) | Low albumin (not enough protein)
- Vitamina D baja | Low vitamin D
- Hierro bajo | Low iron

### Cuando Debes Hacerte Una Evaluacion | When You Should Get an Assessment

- Si has perdido peso sin querer | If you've lost weight unintentionally
- Si tienes una enfermedad cronica | If you have a chronic disease
- Si estas embarazada | If you are pregnant
- Si te van a operar | If you are going to have surgery
- Si te sientes muy cansado o debil | If you feel very tired or weak`,
      keyTerms: [
        { term: 'IMC | BMI', definition: 'Indice de Masa Corporal; numero calculado con tu peso y estatura que indica si tienes un peso saludable | Body Mass Index; number calculated from weight and height indicating if you have a healthy weight' },
        { term: 'desnutricion | malnutrition', definition: 'Cuando tu cuerpo no recibe suficientes nutrientes o los nutrientes correctos para funcionar bien | When your body doesn\'t get enough nutrients or the right nutrients to function well' },
        { term: 'evaluacion nutricional | nutritional assessment', definition: 'Examen completo de tu alimentacion, cuerpo y analisis de sangre para saber si estas bien nutrido | Complete exam of your nutrition, body, and blood tests to know if you are well-nourished' },
        { term: 'nutriologo | nutritionist', definition: 'Profesional de la salud que se especializa en la alimentacion y la nutricion | Health professional who specializes in food and nutrition' },
      ],
      analogies: [
        'El IMC es como un primer vistazo a un mapa - te da una idea general de donde estas, pero necesitas mas detalles para conocer el terreno exacto. | BMI is like a first glance at a map - it gives you a general idea of where you are, but you need more details to know the exact terrain.',
        'La evaluacion nutricional es como llevar tu carro al mecanico para un chequeo completo - revisan el motor (tus organos), el combustible (tu comida) y los indicadores (tus analisis de sangre). | Nutritional assessment is like taking your car to the mechanic for a full checkup - they check the engine (organs), fuel (food), and indicators (blood tests).',
        'Un diario de alimentos es como una fotografia de tu alimentacion - muestra exactamente lo que comes, cuanto y cuando. | A food diary is like a photograph of your eating - it shows exactly what you eat, how much, and when.',
      ],
      examples: [
        'Una persona de 70 kg que mide 1.70 m tiene un IMC de 24.2 (peso normal) | A person weighing 70 kg who is 1.70 m has a BMI of 24.2 (normal weight)',
        'Un abuelito que ha perdido 5 kg sin querer en 3 meses necesita una evaluacion nutricional urgente | A grandparent who lost 5 kg unintentionally in 3 months needs urgent nutritional assessment',
        'Una mujer embarazada que lleva un diario de alimentos descubre que no esta comiendo suficiente hierro y calcio | A pregnant woman keeping a food diary discovers she\'s not eating enough iron and calcium',
      ],
      patientCounselingPoints: [
        'Si ha perdido peso sin intentarlo, digale a su doctor - puede ser una senal de un problema | If you\'ve lost weight unintentionally, tell your doctor - it may be a sign of a problem',
        'Un peso "normal" segun el IMC no siempre significa que esta bien nutrido - los analisis de sangre cuentan mas historia | A "normal" BMI doesn\'t always mean you\'re well-nourished - blood tests tell more',
        'Llevar un diario de lo que come por una semana puede ayudar mucho a su nutriologo | Keeping a food diary for a week can greatly help your nutritionist',
        'Pesese una vez por semana a la misma hora para detectar cambios de peso | Weigh yourself once weekly at the same time to detect weight changes',
        'Si se va a operar, hable con su doctor sobre su alimentacion - estar bien nutrido ayuda a sanar mas rapido | If you\'re having surgery, talk to your doctor about nutrition - being well-nourished helps heal faster',
      ],
    },
    2: {
      level: 2,
      summary:
        'La evaluacion nutricional comprende cuatro componentes principales (ABCD): Antropometria (IMC, circunferencias, pliegues cutaneos), Bioquimica (albumina, prealbumina, marcadores de micronutrientes), Clinica (examen fisico enfocado en nutricion) y Dietetica (metodos de evaluacion de ingesta). La desnutricion se clasifica y se tamiza con herramientas validadas como el MNA, NRS-2002 y MUST. | Nutritional assessment comprises four main components (ABCD): Anthropometry (BMI, circumferences, skinfolds), Biochemistry (albumin, prealbumin, micronutrient markers), Clinical (nutrition-focused physical exam), and Dietary (intake assessment methods). Malnutrition is classified and screened with validated tools like MNA, NRS-2002, and MUST.',
      explanation: `## Los Cuatro Pilares de la Evaluacion Nutricional (ABCD) | The Four Pillars of Nutritional Assessment

### A - Antropometria | Anthropometry

**IMC (Indice de Masa Corporal) | BMI:**
- Formula: Peso (kg) / Talla (m)^2 | Weight (kg) / Height (m)^2
- Clasificacion OMS | WHO Classification:

| IMC | Clasificacion | Riesgo de salud |
|-----|--------------|-----------------|
| <16.0 | Desnutricion severa | Muy alto |
| 16.0-16.9 | Desnutricion moderada | Alto |
| 17.0-18.4 | Desnutricion leve | Moderado |
| 18.5-24.9 | Normal | Bajo |
| 25.0-29.9 | Sobrepeso | Aumentado |
| 30.0-34.9 | Obesidad clase I | Alto |
| 35.0-39.9 | Obesidad clase II | Muy alto |
| >=40.0 | Obesidad clase III | Extremo |

**Circunferencia de cintura | Waist Circumference:**
- Mide grasa abdominal (visceral) - mas peligrosa que grasa subcutanea | Measures abdominal (visceral) fat
- Riesgo aumentado: >102 cm hombres, >88 cm mujeres | Increased risk: >102 cm men, >88 cm women
- Mejor predictor de riesgo metabolico que el IMC solo | Better predictor of metabolic risk than BMI alone

**Otras medidas | Other Measurements:**
- Pliegues cutaneos: Estiman grasa corporal (triceps, biceps, subescapular, suprailiaco) | Skinfold measurements
- Circunferencia del brazo medio (CB): Indica reservas de musculo y grasa | Mid-arm circumference
- Circunferencia de pantorrilla: <31 cm sugiere perdida de masa muscular | Calf circumference: <31 cm suggests muscle mass loss

### B - Bioquimica | Biochemistry

| Marcador | Vida media | Que indica | Normal |
|----------|-----------|------------|--------|
| Albumina | 20 dias | Estado nutricional cronico | 3.5-5.0 g/dL |
| Prealbumina | 2 dias | Estado nutricional agudo | 15-36 mg/dL |
| Transferrina | 8 dias | Estado de hierro y proteina | 200-360 mg/dL |
| PCR | N/A | Inflamacion (afecta otros marcadores) | <1.0 mg/dL |
| Linfocitos totales | N/A | Funcion inmune nutricional | >1500/mm3 |

**Importante | Important:**
- La albumina es un reactante de fase aguda NEGATIVO - baja en inflamacion, cirugia, trauma | Albumin is a NEGATIVE acute phase reactant
- No usar albumina sola para diagnosticar desnutricion | Don't use albumin alone to diagnose malnutrition
- La prealbumina responde mas rapido a cambios nutricionales | Prealbumin responds more quickly to nutritional changes

### C - Clinica (Examen Fisico Nutricional) | Clinical (Nutrition-Focused Physical Exam)

**Signos de deficiencia nutricional | Signs of nutritional deficiency:**

| Area del cuerpo | Hallazgo | Posible deficiencia |
|-----------------|----------|---------------------|
| Cabello | Delgado, seco, facil de arrancar | Proteina, zinc, biotina |
| Ojos | Manchas de Bitot, sequedad | Vitamina A |
| Boca | Labios agrietados (queilosis) | B2, B6, hierro |
| Boca | Lengua lisa y roja (glositis) | B12, folato, hierro |
| Encias | Sangrantes, inflamadas | Vitamina C |
| Piel | Petequias (puntos rojos) | Vitamina C, K |
| Piel | Dermatitis simetrica | Niacina (B3), zinc |
| Unas | Coiloniquia (forma de cuchara) | Hierro |
| Extremidades | Edema bilateral | Proteina (kwashiorkor) |
| Musculos | Perdida de masa temporal/interosea | Desnutricion proteico-calorica |

### D - Dietetica (Evaluacion de Ingesta) | Dietary Assessment

| Metodo | Descripcion | Ventajas | Limitaciones |
|--------|-------------|----------|--------------|
| Recordatorio 24h | Todo lo comido ayer | Rapido, bajo costo | Un dia puede no ser representativo |
| Registro dietetico (3-7 dias) | Anotar todo en tiempo real | Detallado, preciso | Carga para el paciente, puede cambiar habitos |
| Frecuencia alimentaria (FFQ) | Cuestionario sobre frecuencia | Captura patron usual | Puede sobrestimar/subestimar |
| Historia dietetica | Entrevista detallada | Comprensiva | Requiere entrevistador capacitado |

## Herramientas de Tamizaje de Desnutricion | Malnutrition Screening Tools

| Herramienta | Poblacion | Componentes |
|-------------|-----------|-------------|
| MNA (Mini Nutritional Assessment) | Adultos mayores (>=65) | IMC, circunferencia pantorrilla, perdida de peso, apetito |
| NRS-2002 | Hospitalizados | Deterioro nutricional + severidad de enfermedad |
| MUST (Malnutrition Universal Screening Tool) | Comunidad y hospital | IMC, perdida de peso, efecto de enfermedad aguda |
| SGA (Subjective Global Assessment) | Universal | Historia + examen fisico |

## Clasificacion de Desnutricion | Malnutrition Classification

**Tipos de desnutricion | Types of malnutrition:**
- **Marasmo:** Deficiencia calorica cronica -> Perdida de grasa y musculo | Chronic caloric deficiency
- **Kwashiorkor:** Deficiencia de proteina con calorias adecuadas -> Edema, higado graso | Protein deficiency with adequate calories
- **Mixta:** Combinacion de ambas (mas comun en hospitalizados) | Combination of both`,
      keyTerms: [
        { term: 'antropometria | anthropometry', definition: 'Medicion del cuerpo humano incluyendo peso, talla, circunferencias y pliegues cutaneos para evaluar composicion corporal | Measurement of the human body including weight, height, circumferences, and skinfolds to assess body composition' },
        { term: 'albumina | albumin', definition: 'Proteina producida por el higado; niveles bajos indican desnutricion cronica o inflamacion; vida media de 20 dias | Protein produced by the liver; low levels indicate chronic malnutrition or inflammation; half-life 20 days' },
        { term: 'prealbumina | prealbumin', definition: 'Proteina con vida media de 2 dias; mejor marcador de cambios nutricionales recientes que la albumina | Protein with 2-day half-life; better marker of recent nutritional changes than albumin' },
        { term: 'marasmo | marasmus', definition: 'Desnutricion severa por deficiencia calorica cronica con perdida de grasa y masa muscular | Severe malnutrition from chronic caloric deficiency with loss of fat and muscle mass' },
        { term: 'kwashiorkor', definition: 'Desnutricion por deficiencia de proteina con calorias adecuadas; se presenta con edema, higado graso y pelo ralo | Malnutrition from protein deficiency with adequate calories; presents with edema, fatty liver, and sparse hair' },
        { term: 'SGA | Subjective Global Assessment', definition: 'Herramienta de evaluacion nutricional basada en historia y examen fisico que clasifica al paciente como bien nutrido, moderadamente desnutrido o severamente desnutrido | Nutritional assessment tool based on history and physical exam' },
        { term: 'circunferencia de cintura | waist circumference', definition: 'Medida de grasa abdominal visceral; >102 cm en hombres y >88 cm en mujeres indica riesgo metabolico aumentado | Measure of visceral abdominal fat; elevated values indicate increased metabolic risk' },
      ],
      analogies: [
        'El ABCD de la evaluacion nutricional es como las cuatro ruedas de un carro - necesitas las cuatro para avanzar bien: Antropometria, Bioquimica, Clinica y Dietetica. | The ABCD of nutritional assessment is like four wheels of a car - you need all four: Anthropometry, Biochemistry, Clinical, and Dietary.',
        'La albumina es como un pronostico del tiempo a largo plazo - te dice como ha sido la nutricion en las ultimas semanas, no hoy. La prealbumina es como el pronostico de hoy. | Albumin is like a long-term weather forecast - it tells how nutrition has been over weeks. Prealbumin is like today\'s forecast.',
        'La circunferencia de cintura es como un detector de peligro oculto - aunque el IMC sea normal, la grasa alrededor de la cintura puede estar causando problemas. | Waist circumference is like a hidden danger detector - even if BMI is normal, fat around the waist can be causing problems.',
      ],
      examples: [
        'Paciente con IMC 22 pero circunferencia de cintura de 105 cm -> Riesgo metabolico aumentado a pesar de peso "normal" | Patient with BMI 22 but waist circumference 105 cm -> Increased metabolic risk despite "normal" weight',
        'Albumina de 2.8 en paciente con neumonia -> No necesariamente desnutricion, puede ser por inflamacion aguda | Albumin 2.8 in pneumonia patient -> Not necessarily malnutrition, may be from acute inflammation',
        'MNA de 17 puntos en paciente de 80 anos -> Riesgo de desnutricion, requiere evaluacion completa y plan nutricional | MNA score 17 in 80-year-old -> At risk for malnutrition, needs full evaluation and nutrition plan',
      ],
      patientCounselingPoints: [
        'El IMC es solo una parte de la evaluacion - no se preocupe si su numero no es "perfecto" pero cuide su alimentacion | BMI is just one part of the assessment - don\'t worry if your number isn\'t "perfect" but watch your eating',
        'Si esta perdiendo peso sin intentarlo, digale a su doctor inmediatamente | If you\'re losing weight unintentionally, tell your doctor immediately',
        'Llevar un registro de lo que come por 3 dias (2 de semana y 1 de fin de semana) da la mejor imagen de su alimentacion | Keeping a record of what you eat for 3 days gives the best picture of your eating',
        'La grasa alrededor de la cintura es mas peligrosa que la grasa en otras partes del cuerpo | Fat around the waist is more dangerous than fat in other body parts',
      ],
    },
    3: {
      level: 3,
      summary:
        'La evaluacion nutricional clinica integra metodos antropometricos validados, biomarcadores de laboratorio, examen fisico orientado a nutricion y herramientas de tamizaje estandarizadas. La composicion corporal se evalua con tecnicas como bioimpedancia, absorciometria dual de rayos X (DEXA) y ultrasonido muscular. El diagnostico de desnutricion utiliza criterios de la ASPEN/AND basados en etiologia. | Clinical nutritional assessment integrates validated anthropometric methods, laboratory biomarkers, nutrition-oriented physical exam, and standardized screening tools. Body composition is assessed with techniques like bioimpedance, dual-energy X-ray absorptiometry (DEXA), and muscle ultrasound. Malnutrition diagnosis uses ASPEN/AND criteria based on etiology.',
      explanation: `## Composicion Corporal Avanzada | Advanced Body Composition

### Metodos de Evaluacion | Assessment Methods

\`\`\`
Niveles de precision (de menor a mayor):
  1. IMC: Peso/talla^2 (limitado, no distingue compartimentos)
  2. Circunferencias + pliegues cutaneos: Ecuaciones predictivas (Durnin-Womersley)
  3. Bioimpedancia electrica (BIA): Resistencia al flujo electrico
  4. DEXA (Absorciometria dual de rayos X): Estandar de referencia clinica
  5. TC / IRM: Composicion tisular en corte transversal (investigacion)
\`\`\`

**Bioimpedancia Electrica (BIA) | Bioelectrical Impedance Analysis:**
\`\`\`
Principio: Tejido magro (agua + electrolitos) conduce electricidad mejor que grasa
Mediciones:
  - Agua corporal total -> Masa libre de grasa -> Masa grasa
  - Angulo de fase: Indicador de integridad celular y estado nutricional
    - Normal: 5-7 grados
    - <5 grados: Sugiere malnutricion, peor pronostico

Limitaciones:
  - Afectada por hidratacion (edema, deshidratacion)
  - Ecuaciones especificas por poblacion
  - Menos precisa en obesos extremos y edema severo

Angulo de fase como marcador pronostico:
  - Angulo bajo en cancer: Menor supervivencia
  - Angulo bajo en dialisis: Mayor mortalidad
  - Angulo bajo en cirugia: Mayor riesgo de complicaciones
\`\`\`

**DEXA (Absorciometria Dual de Rayos X) | DEXA:**
\`\`\`
Mide tres compartimentos:
  1. Masa osea mineral
  2. Masa magra (musculo + organos)
  3. Masa grasa

Indices clinicos:
  - Indice de masa muscular apendicular (IMMA):
    Masa muscular de extremidades (kg) / talla (m)^2
    Sarcopenia: <7.0 kg/m2 hombres, <5.5 kg/m2 mujeres (EWGSOP2)

  - Porcentaje de grasa corporal:
    Normal: 10-20% hombres, 20-30% mujeres
    Obesidad: >25% hombres, >35% mujeres
\`\`\`

### Sarcopenia | Sarcopenia

\`\`\`
Definicion EWGSOP2 (2019):
  Probable sarcopenia: Fuerza muscular baja
    - Fuerza de prension: <27 kg hombres, <16 kg mujeres
    - Levantarse de silla: >15 segundos para 5 repeticiones

  Sarcopenia confirmada: + Masa muscular baja
    - IMMA por DEXA: <7.0 kg/m2 hombres, <5.5 kg/m2 mujeres
    - BIA calibrada como alternativa

  Sarcopenia severa: + Rendimiento fisico bajo
    - Velocidad de marcha: <0.8 m/s
    - SPPB (Short Physical Performance Battery): <=8 puntos
    - TUG (Timed Up and Go): >=20 segundos
\`\`\`

## Diagnostico de Desnutricion (ASPEN/AND) | Malnutrition Diagnosis

### Criterios de Consenso ASPEN/AND (2012) | ASPEN/AND Consensus Criteria

\`\`\`
Se necesitan 2 o mas de 6 criterios:
  1. Ingesta energetica insuficiente
  2. Perdida de peso
  3. Perdida de masa muscular
  4. Perdida de grasa subcutanea
  5. Acumulacion de liquido localizada o generalizada (edema)
  6. Fuerza de prension disminuida

Clasificacion por etiologia:
  - Relacionada con inanicion: Sin inflamacion (anorexia nerviosa, pobreza)
  - Relacionada con enfermedad cronica: Inflamacion leve-moderada (cancer, ERC, EPOC)
  - Relacionada con enfermedad aguda/lesion: Inflamacion severa (sepsis, trauma, quemaduras)

Severidad:
  No severa (moderada):
    - Ingesta <75% de necesidades por >7 dias
    - Perdida de peso 5% en 1 mes o 7.5% en 3 meses
    - Perdida leve de musculo o grasa

  Severa:
    - Ingesta <=50% de necesidades por >=5 dias
    - Perdida de peso >5% en 1 mes o >10% en 6 meses
    - Perdida moderada-severa de musculo o grasa
\`\`\`

## Herramientas de Tamizaje Detalladas | Detailed Screening Tools

### NRS-2002 (Nutritional Risk Screening) | NRS-2002

\`\`\`
Componente nutricional (0-3 puntos):
  0: Estado nutricional normal
  1: Perdida de peso >5% en 3 meses o ingesta 50-75% semana previa
  2: Perdida de peso >5% en 2 meses o IMC 18.5-20.5 + deterioro general
  3: Perdida de peso >5% en 1 mes o IMC <18.5 + deterioro general

Componente de severidad de enfermedad (0-3 puntos):
  0: Normal
  1: Fractura de cadera, enfermedad cronica, dialisis, cancer
  2: Cirugia abdominal mayor, ACV, neumonia, cancer hematologico
  3: Trauma craneal, transplante de medula, UCI

Ajuste: +1 punto si edad >=70 anos
Total >=3: En riesgo nutricional -> Requiere plan nutricional
\`\`\`

### SGA (Subjective Global Assessment) | SGA

\`\`\`
Historia:
  1. Cambio de peso (ultimos 6 meses + ultimas 2 semanas)
  2. Cambio de ingesta dietetica (tipo y duracion)
  3. Sintomas GI (nausea, vomito, diarrea, anorexia >2 semanas)
  4. Capacidad funcional (ambulatorio, en cama)
  5. Demandas metabolicas (estres de enfermedad)

Examen fisico:
  - Perdida de grasa subcutanea (triceps, torax)
  - Perdida de masa muscular (temporales, deltoides, cuadriceps)
  - Edema (tobillos, sacro)
  - Ascitis

Clasificacion:
  A: Bien nutrido
  B: Moderadamente desnutrido (o sospecha)
  C: Severamente desnutrido
\`\`\`

## Evaluacion Dietetica Cuantitativa | Quantitative Dietary Assessment

\`\`\`
Calculo de necesidades energeticas:
  Ecuacion de Harris-Benedict (1919, revisada 1984):
    Hombres: GEB = 88.362 + (13.397 x peso kg) + (4.799 x talla cm) - (5.677 x edad anos)
    Mujeres: GEB = 447.593 + (9.247 x peso kg) + (3.098 x talla cm) - (4.330 x edad anos)

  Ecuacion de Mifflin-St Jeor (1990, mas precisa):
    Hombres: GEB = (10 x peso kg) + (6.25 x talla cm) - (5 x edad anos) + 5
    Mujeres: GEB = (10 x peso kg) + (6.25 x talla cm) - (5 x edad anos) - 161

  Factor de actividad:
    Sedentario: x 1.2
    Ligeramente activo: x 1.375
    Moderadamente activo: x 1.55
    Muy activo: x 1.725
    Extremadamente activo: x 1.9

Calorimetria indirecta:
  - Mide VO2 y VCO2 para calcular gasto energetico real
  - Estandar de oro en UCI y pacientes criticos
  - RQ (cociente respiratorio) = VCO2/VO2
    RQ 0.7: Oxidacion de grasas
    RQ 0.85: Dieta mixta
    RQ 1.0: Oxidacion de carbohidratos
    RQ >1.0: Lipogenesis (sobrealimentacion)
\`\`\``,
      keyTerms: [
        { term: 'DEXA', definition: 'Absorciometria dual de rayos X; estandar de referencia clinica para medir composicion corporal (masa osea, magra y grasa) | Dual-energy X-ray absorptiometry; clinical reference standard for measuring body composition' },
        { term: 'bioimpedancia electrica | BIA', definition: 'Tecnica que mide composicion corporal basada en la resistencia del cuerpo al flujo de una corriente electrica de baja intensidad | Technique measuring body composition based on body resistance to low-intensity electrical current flow' },
        { term: 'angulo de fase | phase angle', definition: 'Parametro de bioimpedancia que refleja integridad de membranas celulares y estado nutricional; bajo angulo = peor pronostico | Bioimpedance parameter reflecting cell membrane integrity and nutritional status; low angle = worse prognosis' },
        { term: 'sarcopenia | sarcopenia', definition: 'Perdida progresiva de masa, fuerza y funcion muscular esqueletica, asociada con envejecimiento y enfermedades cronicas | Progressive loss of skeletal muscle mass, strength, and function associated with aging and chronic disease' },
        { term: 'EWGSOP2', definition: 'European Working Group on Sarcopenia in Older People 2; definicion operacional de sarcopenia basada en fuerza, masa muscular y rendimiento fisico | Operational definition of sarcopenia based on strength, muscle mass, and physical performance' },
        { term: 'calorimetria indirecta | indirect calorimetry', definition: 'Medicion del gasto energetico real mediante consumo de oxigeno y produccion de CO2; estandar de oro en pacientes criticos | Measurement of actual energy expenditure via oxygen consumption and CO2 production; gold standard in critical patients' },
        { term: 'Harris-Benedict', definition: 'Ecuacion clasica para estimar el gasto energetico basal a partir de peso, talla, edad y sexo | Classic equation to estimate basal energy expenditure from weight, height, age, and sex' },
      ],
      analogies: [
        'El angulo de fase es como el pulso de las celulas - un angulo alto significa celulas sanas con membranas intactas, un angulo bajo significa celulas debilitadas. | Phase angle is like the pulse of cells - high angle means healthy cells with intact membranes, low angle means weakened cells.',
        'La DEXA es como una radiografia tridimensional de tu composicion - te dice exactamente cuanto es hueso, musculo y grasa, como separar los ingredientes de una receta. | DEXA is like a 3D X-ray of your composition - it tells exactly how much is bone, muscle, and fat.',
        'La calorimetria indirecta es como medir el consumo de gasolina de un carro en tiempo real, en lugar de estimarlo con tablas genericas. | Indirect calorimetry is like measuring a car\'s fuel consumption in real time, instead of estimating it with generic tables.',
      ],
      examples: [
        'Paciente de 75 anos con fuerza de prension 22 kg (bajo) + IMMA 6.2 kg/m2 (bajo) + velocidad de marcha 0.6 m/s = Sarcopenia severa | 75-year-old: grip 22 kg + IMMA 6.2 + gait 0.6 m/s = Severe sarcopenia',
        'NRS-2002: Paciente con fractura de cadera (1pt) + perdida de peso 6% en 2 meses (2pt) + edad 72 (1pt) = Score 4 -> Alto riesgo, iniciar soporte nutricional | NRS-2002 score 4 in hip fracture patient -> High risk, start nutritional support',
        'Calorimetria indirecta en UCI muestra RQ 1.15 -> Sobrealimentacion con carbohidratos, reducir aporte calorico | Indirect calorimetry in ICU shows RQ 1.15 -> Carbohydrate overfeeding, reduce caloric intake',
      ],
      clinicalNotes: 'La albumina NO debe usarse sola para diagnosticar desnutricion - es un reactante de fase aguda negativo que baja en inflamacion independientemente del estado nutricional. Use los criterios ASPEN/AND de 6 caracteristicas. El angulo de fase por BIA es un predictor pronostico independiente en cancer, dialisis y cirugia. En UCI, la calorimetria indirecta es preferible a las ecuaciones predictivas que sobreestiman o subestiman el gasto en 40-60% de los casos. | Albumin should NOT be used alone to diagnose malnutrition. Phase angle is an independent prognostic predictor. In ICU, indirect calorimetry is preferred over predictive equations.',
    },
    4: {
      level: 4,
      summary:
        'La evaluacion nutricional avanzada integra imagenologia de composicion corporal (CT, DEXA, ultrasonido muscular), biomarcadores avanzados, criterios diagnosticos estandarizados (GLIM, ASPEN) y evaluacion funcional. En el contexto clinico, la evaluacion preoperatoria, el monitoreo en UCI y la deteccion de obesidad sarcopenica son aplicaciones criticas. | Advanced nutritional assessment integrates body composition imaging (CT, DEXA, muscle ultrasound), advanced biomarkers, standardized diagnostic criteria (GLIM, ASPEN), and functional assessment. In the clinical context, preoperative evaluation, ICU monitoring, and sarcopenic obesity detection are critical applications.',
      explanation: `## Criterios Diagnosticos de Desnutricion GLIM | GLIM Malnutrition Diagnostic Criteria

### Consenso GLIM (Global Leadership Initiative on Malnutrition, 2019)

\`\`\`
Paso 1: Tamizaje con herramienta validada (NRS-2002, MUST, MNA-SF)
Paso 2: Diagnostico con criterios GLIM

Criterios fenotipicos (al menos 1):
  - Perdida de peso involuntaria: >5% en 6 meses o >10% mas alla de 6 meses
  - IMC bajo: <20 si <70 anos, <22 si >=70 anos
  - Masa muscular reducida: Medida por DEXA, BIA, CT, o examen fisico

Criterios etiologicos (al menos 1):
  - Ingesta reducida o malabsorcion: <=50% de necesidades >1 semana, o cualquier reduccion >2 semanas, o condicion GI cronica
  - Inflamacion: Enfermedad aguda/lesion o enfermedad cronica

Diagnostico: >=1 fenotipico + >=1 etiologico

Severidad:
  Desnutricion moderada (Estadio 1):
    - Perdida 5-10% en 6 meses, o IMC <20/<22, o masa muscular levemente reducida
  Desnutricion severa (Estadio 2):
    - Perdida >10% en 6 meses o >20% en 1 ano, o IMC <18.5, o masa muscular severamente reducida
\`\`\`

## Imagenologia de Composicion Corporal | Body Composition Imaging

### TC en L3 (Tercer vertebra lumbar) | CT at L3

\`\`\`
Estandar de oro en investigacion:
  - Corte transversal unico a nivel de L3
  - Software analiza area de musculo esqueletico (SMA)
  - Indice de musculo esqueletico (SMI) = SMA/talla^2

Umbrales de sarcopenia (CT L3):
  Hombres: SMI <52.4 cm2/m2
  Mujeres: SMI <38.5 cm2/m2

Aplicaciones clinicas:
  - Predictor de complicaciones post-operatorias en cancer
  - Predictor de toxicidad a quimioterapia
  - Predictor de supervivencia en cirrosis (lista de transplante)
  - Disponible oportunisticamente en TC ya realizados
\`\`\`

### Ultrasonido Muscular | Muscle Ultrasound

\`\`\`
Tecnica emergente en evaluacion nutricional:
  Cuadriceps (recto femoral):
    - Grosor muscular: Correlaciona con masa muscular total
    - Ecogenicidad: Mayor ecogenicidad = infiltracion grasa (mioesteatosis)
    - Area de seccion transversal: Alternativa a DEXA/CT

Ventajas:
  - Al lado del paciente (point-of-care)
  - Sin radiacion
  - Repetible para monitoreo seriado
  - Detecta cambios en dias (vs DEXA que requiere semanas)

Aplicaciones:
  - UCI: Monitorear perdida muscular temprana
  - Oncologia: Seguimiento de sarcopenia durante tratamiento
  - Geriatria: Evaluacion de sarcopenia en consultorio
\`\`\`

## Evaluacion Preoperatoria Nutricional | Preoperative Nutritional Assessment

\`\`\`
ESPEN recomienda evaluacion nutricional preoperatoria para:
  - Toda cirugia mayor
  - Cancer GI, hepatobiliar, pancreatico
  - Cirugia cardiaca
  - Transplante

Factores de riesgo nutricional preoperatorio:
  - Perdida de peso >10-15% en 6 meses
  - IMC <18.5 kg/m2
  - SGA grado C
  - Albumina <3.0 g/dL (con cautela - reactante de fase aguda)

Indicaciones de soporte nutricional preoperatorio:
  - Riesgo nutricional severo: 7-14 dias de nutricion enteral/oral pre-cirugia
  - Si no puede alcanzar >50% de necesidades oralmente: Considerar parenteral
  - Inmunonutricion (arginina + omega-3 + nucleotidos): 5-7 dias pre-cirugia GI oncologica

Protocolo ERAS (Enhanced Recovery After Surgery):
  - No ayuno prolongado: Liquidos claros hasta 2h pre-cirugia
  - Carga de carbohidratos: 800 mL bebida rica en carbos noche antes + 400 mL 2h antes
  - Nutricion enteral temprana: Iniciar 4-24h post-cirugia
  - Suplementos orales nutricionales si ingesta <60%
\`\`\`

## Evaluacion Nutricional en UCI | ICU Nutritional Assessment

\`\`\`
Particularidades:
  - Albumina y prealbumina: NO validos como marcadores nutricionales en criticos
    (reflejan severidad de enfermedad, no estado nutricional)
  - Peso: Poco confiable por edema, resucitacion con liquidos
  - BIA: Afectada por distribucion anormal de liquidos

Mejores herramientas en UCI:
  - Calorimetria indirecta: Estandar de oro para necesidades energeticas
  - Ultrasonido de cuadriceps: Monitoreo de masa muscular
  - Balance nitrogenado: Grado de catabolismo proteico
    BN = (Ingesta proteica g/6.25) - (Nitrogeno ureico urinario 24h + 4g)
  - NRS-2002: Puntaje UCI automaticamente = 3 (alto riesgo)

Metas nutricionales en criticos:
  Fase aguda (dias 1-3):
    - Energia: Hipocalorica trofonica, 15-20 kcal/kg/dia
    - Proteina: 1.2-2.0 g/kg/dia (alta desde el inicio)
  Fase de estabilizacion (dias 4-7):
    - Avanzar a 25-30 kcal/kg/dia
    - Mantener proteina alta
  Fase de recuperacion:
    - Metas calorico-proteicas completas
    - Rehabilitacion + nutricion
\`\`\`

## Obesidad Sarcopenica | Sarcopenic Obesity

\`\`\`
Definicion: Coexistencia de exceso de grasa corporal + masa muscular baja
  - IMC puede ser normal o elevado
  - Peor pronostico que obesidad o sarcopenia solas

Diagnostico:
  - DEXA: Masa grasa alta (>25% H, >35% M) + IMMA bajo
  - CT L3: Alto tejido graso + SMI bajo
  - BIA: Masa grasa alta + angulo de fase bajo

Prevalencia:
  - 5-10% de adultos mayores
  - Hasta 20-30% en cancer, ERC, IC
  - Aumenta con edad, inactividad, inflamacion cronica

Implicaciones clinicas:
  - Mayor riesgo de caidas y discapacidad
  - Mayor mortalidad que sarcopenia u obesidad solas
  - Toxicidad aumentada a quimioterapia (dosificacion basada en peso corporal total pero menos musculo para metabolizar)
  - Peores desenlaces quirurgicos

Manejo:
  - Ejercicio de resistencia (PRIORITARIO)
  - Proteina alta (1.2-1.5 g/kg peso ajustado) + leucina
  - Deficit calorico moderado (no agresivo - proteger musculo)
  - Vitamina D optimizada
\`\`\``,
      keyTerms: [
        { term: 'GLIM', definition: 'Global Leadership Initiative on Malnutrition; criterios de consenso internacional para diagnostico de desnutricion basados en fenotipos (perdida de peso, IMC bajo, masa muscular reducida) y etiologia (ingesta reducida, inflamacion) | International consensus malnutrition diagnostic criteria' },
        { term: 'SMI | Skeletal Muscle Index', definition: 'Indice de musculo esqueletico; area de musculo en CT L3 dividida por talla al cuadrado; usado para diagnosticar sarcopenia | Skeletal muscle area at CT L3 divided by height squared; used to diagnose sarcopenia' },
        { term: 'mioesteatosis | myosteatosis', definition: 'Infiltracion grasa del musculo esqueletico; asociada con peores desenlaces y mayor fragilidad | Fat infiltration of skeletal muscle; associated with worse outcomes and greater frailty' },
        { term: 'ERAS | Enhanced Recovery After Surgery', definition: 'Protocolo de recuperacion mejorada despues de cirugia que incluye nutricion perioperatoria optimizada, carga de carbohidratos y movilizacion temprana | Enhanced recovery protocol including optimized perioperative nutrition' },
        { term: 'obesidad sarcopenica | sarcopenic obesity', definition: 'Coexistencia de exceso de grasa corporal y masa muscular baja; peor pronostico que obesidad o sarcopenia por separado | Coexistence of excess body fat and low muscle mass; worse prognosis than either alone' },
        { term: 'balance nitrogenado | nitrogen balance', definition: 'Diferencia entre ingesta y excrecion de nitrogeno; balance negativo indica catabolismo proteico neto | Difference between nitrogen intake and excretion; negative balance indicates net protein catabolism' },
      ],
      analogies: [
        'Los criterios GLIM son como un diagnostico en dos pasos: primero verificas los sintomas (fenotipo) y luego buscas la causa (etiologia) - necesitas ambos para el diagnostico. | GLIM criteria are like a two-step diagnosis: first check symptoms (phenotype) then find the cause (etiology) - you need both.',
        'La TC en L3 es como tomar una "foto" transversal del cuerpo que revela exactamente cuanto musculo y cuanta grasa hay - como cortar un tronco y ver los anillos. | CT at L3 is like taking a cross-sectional "photo" of the body revealing exactly how much muscle and fat there is - like cutting a trunk and seeing the rings.',
        'La obesidad sarcopenica es como un edificio que parece solido por fuera pero tiene la estructura interna debilitada - el peso no te cuenta toda la historia. | Sarcopenic obesity is like a building that looks solid outside but has weakened internal structure - weight doesn\'t tell the whole story.',
      ],
      examples: [
        'Paciente oncologico pre-cirugia: SGA-C + albumina 2.5 -> 10 dias de nutricion enteral preoperatoria redujo complicaciones 40% | Oncology patient pre-surgery: SGA-C -> 10 days preoperative enteral nutrition reduced complications 40%',
        'UCI dia 3: Calorimetria indirecta muestra GE real de 1800 kcal vs Harris-Benedict que predecia 2200 -> Ajustar para evitar sobrealimentacion | ICU day 3: Indirect calorimetry shows 1800 vs predicted 2200 -> Adjust to avoid overfeeding',
        'Paciente obeso (IMC 34) con cancer pancreatico: CT L3 revela SMI 42 cm2/m2 (sarcopenia) -> Obesidad sarcopenica, ajustar dosificacion de quimioterapia | Obese patient with pancreatic cancer: CT reveals sarcopenia -> Sarcopenic obesity, adjust chemo dosing',
      ],
      clinicalNotes: 'Los criterios GLIM (2019) son actualmente el estandar internacional para diagnostico de desnutricion - requieren tamizaje positivo + 1 criterio fenotipico + 1 etiologico. En UCI, la albumina y prealbumina reflejan severidad de enfermedad, NO estado nutricional - no usar para guiar nutricion en criticos. El ultrasonido de cuadriceps es la herramienta emergente mas promisoria para evaluacion a la cabecera del paciente. La obesidad sarcopenica requiere DEXA o CT para diagnostico ya que el IMC es enganoso. | GLIM criteria are the current international standard. Albumin/prealbumin reflect disease severity in ICU, NOT nutritional status. Quadriceps ultrasound is the most promising bedside tool. Sarcopenic obesity requires DEXA or CT as BMI is misleading.',
    },
    5: {
      level: 5,
      summary:
        'La evaluacion nutricional de nivel experto integra biomarcadores metabolomicos, analisis de composicion corporal por inteligencia artificial, nutrigenomica aplicada, monitoreo continuo y algoritmos predictivos de riesgo nutricional. Las fronteras incluyen radiomica muscular, biomarcadores de microARN para desnutricion, y plataformas digitales de evaluacion nutricional personalizada integradas con datos de dispositivos vestibles. | Expert-level nutritional assessment integrates metabolomic biomarkers, AI-powered body composition analysis, applied nutrigenomics, continuous monitoring, and predictive nutritional risk algorithms. Frontiers include muscle radiomics, microRNA biomarkers for malnutrition, and personalized digital nutritional assessment platforms integrated with wearable device data.',
      explanation: `## Biomarcadores Avanzados de Estado Nutricional | Advanced Nutritional Status Biomarkers

### Mas Alla de Albumina y Prealbumina | Beyond Albumin and Prealbumin

\`\`\`
Biomarcadores metabolomicos:
  Metabolomica dirigida:
    - Aminoacidos de cadena ramificada (BCAAs): Bajos en sarcopenia/desnutricion
    - 3-metilhistidina urinaria: Marcador de degradacion muscular
    - Relacion aminoacidos esenciales/no esenciales: Indica calidad proteica
    - Carnitina y acilcarnitinas: Reflejan metabolismo de acidos grasos

  Acidos organicos urinarios:
    - AMM: Deficiencia de B12
    - Acido orotico: Deficiencia de zinc (via carbamoil fosfato sintetasa)
    - Xanturenato: Deficiencia de B6
    - Ascorbato leucocitario: Estado de vitamina C real

Biomarcadores inflamatorios en contexto nutricional:
  - GPS (Glasgow Prognostic Score): PCR + albumina
    PCR >10 + albumina <35 = peor pronostico nutricional-inflamatorio
  - mGPS: Modificado, mas preciso
  - Indice neutrofilo/linfocito: Inflamacion cronica + inmunodeficiencia nutricional
  - IL-6, TNF-alfa: Mediadores de caquexia y anorexia

Biomarcadores emergentes:
  - MicroARN circulantes:
    miR-1, miR-133, miR-206: Especificos de musculo (elevados en degradacion)
    miR-21: Asociado con caquexia cancerosa
    miR-155: Inflamacion y respuesta nutricional
  - GDF-15 (Growth Differentiation Factor 15):
    - Elevado en caquexia, anorexia, enfermedades cronicas
    - Mediador de perdida de apetito
    - Diana terapeutica potencial
  - Citrulinemia:
    - Marcador de masa enterocitaria funcional
    - Bajo en dano intestinal severo (EICH, NEC)
    - Predictor de tolerancia a nutricion enteral
\`\`\`

## Inteligencia Artificial en Composicion Corporal | AI in Body Composition

### Analisis Automatizado de CT | Automated CT Analysis

\`\`\`
Algoritmos de segmentacion por aprendizaje profundo:
  - Segmentacion automatica de musculo, grasa visceral, grasa subcutanea en CT
  - Precision comparable a medicion manual por expertos
  - Procesamiento de TC ya disponibles (evaluacion oportunista)
  - Integracion en flujos de trabajo radiologicos

Radiomica muscular:
  - Analisis de textura del musculo en CT
  - Caracteristicas de primer y segundo orden (entropia, homogeneidad)
  - Prediccion de:
    - Complicaciones post-operatorias
    - Toxicidad a quimioterapia
    - Supervivencia en cancer
    - Necesidad de soporte nutricional
  - Va mas alla de solo medir area muscular -> calidad muscular

Aplicaciones de IA en evaluacion dietetica:
  - Reconocimiento de alimentos por imagen (foto del plato)
  - Estimacion automatica de porciones
  - Calculo nutricional en tiempo real
  - Apps: Calorie Mama, Snap It (investigacion)
  - Precision actual: ~80-85% (mejorando)
\`\`\`

## Evaluacion Funcional Avanzada | Advanced Functional Assessment

### Pruebas de Funcion Muscular | Muscle Function Tests

\`\`\`
Dinamometria de prension (handgrip):
  - Estandar de oro para fuerza muscular
  - Predictor independiente de mortalidad, estancia hospitalaria
  - Umbrales EWGSOP2: <27 kg hombres, <16 kg mujeres
  - Monitoreo seriado: Detecta cambios en dias

Angulo de fase por BIA espectroscopica:
  - BIA multifrequencia (5-1000 kHz)
  - Angulo de fase a 50 kHz: Marcador de integridad celular
  - Valor pronostico demostrado en:
    - Cancer (mama, colorrectal, pancreatico): OR mortalidad 2-3x
    - Cirugia mayor: Predictor de complicaciones
    - Dialisis: Predictor de hospitalizacion
    - COVID-19: Asociado con severidad y mortalidad

Impedancia vectorial (BIVA):
  - Grafico bidimensional: Resistencia vs Reactancia
  - Permite evaluacion simultanea de hidratacion y masa celular
  - Elipses de tolerancia por sexo y edad
  - Detecta edema subclínico y deshidratacion
\`\`\`

## Nutrigenomica Aplicada a la Evaluacion | Applied Nutrigenomics in Assessment

\`\`\`
Paneles geneticos nutrigenomicos disponibles:
  Metabolismo de macronutrientes:
    - FTO, MC4R: Predisposicion a obesidad, saciedad alterada
    - PPARG: Respuesta a grasas dieteticas
    - TCF7L2: Riesgo de DM2, respuesta a carbohidratos
    - APOE: Respuesta lipidica a grasa saturada

  Metabolismo de micronutrientes:
    - VDR: Respuesta a vitamina D
    - MTHFR: Metabolismo de folato
    - HFE: Riesgo de sobrecarga de hierro
    - BCMO1: Conversion de beta-caroteno

  Tolerancia alimentaria:
    - LCT/MCM6: Tolerancia a lactosa
    - HLA-DQ2/DQ8: Predisposicion a enfermedad celiaca
    - CYP1A2: Metabolismo de cafeina

Utilidad clinica actual:
  - MTHFR: Guia suplementacion de folato (5-MTHF vs acido folico)
  - HFE: Tamizaje de hemocromatosis
  - APOE: Individualizacion de dieta cardiovascular
  - Limitacion: Tamano de efecto pequeno para la mayoria de variantes
\`\`\`

## Plataformas de Evaluacion Nutricional Digital | Digital Nutritional Assessment Platforms

\`\`\`
Integracion de datos multi-fuente:
  Dispositivos vestibles (wearables):
    - Actividad fisica (acelerometro)
    - Frecuencia cardiaca en reposo (estado metabolico)
    - Sueno (afecta hormonas de apetito)
    - Monitoreo continuo de glucosa (respuesta a alimentos)

  Evaluacion dietetica digital:
    - Foto-registro de alimentos con IA
    - Asistentes de voz para registro de comida
    - Integracion con bases de datos nutricionales
    - Analisis automatico de patrones dieteticos

  Biomarcadores point-of-care:
    - Hemoglobina no invasiva (SpHb)
    - Glucosa continua (CGM)
    - Ketonemia capilar
    - Potencialmente: Micronutrientes en sudor (investigacion)

Algoritmos predictivos:
  - Machine learning para prediccion de riesgo de desnutricion hospitalaria
  - Modelos integrados: Demografia + laboratorio + diagnosticos + medicamentos
  - Prediccion 48-72h antes de deterioro nutricional clinico
  - Implementacion: Alertas automaticas en historia clinica electronica

Estado actual y limitaciones:
  - Validacion clinica insuficiente para la mayoria de plataformas
  - Sesgo algoritmico en poblaciones no representadas
  - Regulacion como dispositivo medico en evolucion
  - Costo y accesibilidad variables
  - Preocupaciones de privacidad de datos
\`\`\`

## Fronteras en Evaluacion Nutricional | Frontiers in Nutritional Assessment

\`\`\`
Tecnologias emergentes:
  1. Espectroscopia por infrarrojo cercano (NIRS) muscular:
     - Evaluacion no invasiva de metabolismo muscular oxidativo
     - Correlaciona con capacidad funcional

  2. Metabolomica en aliento:
     - Perfiles de compuestos organicos volatiles
     - Potencial para detectar malabsorcion, sobrecrecimiento bacteriano

  3. Evaluacion epigenetica nutricional:
     - Patrones de metilacion de ADN reflejan historia nutricional
     - "Reloj epigenetico" nutricional
     - Programacion fetal detectable en edad adulta

  4. Biosensores implantables:
     - Monitoreo continuo de glucosa, lactato, pH
     - Futuro: Micronutrientes, aminoacidos en tiempo real
\`\`\``,
      keyTerms: [
        { term: 'radiomica muscular | muscle radiomics', definition: 'Analisis cuantitativo de caracteristicas de textura del musculo en imagenes de CT que predice desenlaces clinicos mas alla de la simple medicion de area muscular | Quantitative analysis of muscle texture features in CT images predicting clinical outcomes beyond simple area measurement' },
        { term: 'GPS | Glasgow Prognostic Score', definition: 'Puntuacion pronostica basada en PCR y albumina que refleja el estado inflamatorio-nutricional; predictor de supervivencia en cancer | Prognostic score based on CRP and albumin reflecting inflammatory-nutritional status; cancer survival predictor' },
        { term: 'GDF-15', definition: 'Factor de diferenciacion de crecimiento 15; biomarcador elevado en caquexia y anorexia; mediador de perdida de apetito y diana terapeutica potencial | Growth Differentiation Factor 15; elevated in cachexia; appetite loss mediator and potential therapeutic target' },
        { term: 'citrulinemia | citrullinemia', definition: 'Nivel de citrulina plasmatica como marcador de masa enterocitaria funcional; bajo en dano intestinal severo | Plasma citrulline level as marker of functional enterocyte mass; low in severe intestinal damage' },
        { term: 'BIVA | bioelectrical impedance vector analysis', definition: 'Analisis vectorial de impedancia bioelectrica; grafico bidimensional que evalua simultaneamente hidratacion y masa celular corporal | Bioelectrical impedance vector analysis; 2D graph simultaneously assessing hydration and body cell mass' },
        { term: 'microARN circulantes | circulating microRNAs', definition: 'Pequenas moleculas de ARN no codificante en sangre que reflejan procesos tisulares especificos; miR-1/133/206 son marcadores de degradacion muscular | Small non-coding RNA molecules in blood reflecting specific tissue processes; miR-1/133/206 are muscle degradation markers' },
        { term: 'segmentacion por aprendizaje profundo | deep learning segmentation', definition: 'Algoritmos de inteligencia artificial que identifican y cuantifican automaticamente tejidos (musculo, grasa) en imagenes medicas con precision comparable a expertos humanos | AI algorithms automatically identifying and quantifying tissues in medical images with expert-level accuracy' },
      ],
      analogies: [
        'La radiomica muscular es como analizar la textura y calidad de la madera en un edificio - no basta con medir el tamano de las vigas, hay que saber si la madera esta sana o podrida por dentro. | Muscle radiomics is like analyzing wood texture and quality in a building - measuring beam size isn\'t enough, you need to know if the wood is healthy or rotten inside.',
        'Los microARN circulantes son como mensajes en botella que los tejidos envian al torrente sanguineo - al leerlos, podemos saber que esta pasando dentro de los musculos sin necesidad de una biopsia. | Circulating microRNAs are like messages in bottles that tissues send into the bloodstream - by reading them, we can know what\'s happening inside muscles without a biopsy.',
        'Las plataformas digitales de evaluacion nutricional son como un panel de control de avion - integran multiples fuentes de datos (sensores, instrumentos) para dar una imagen completa del "vuelo" nutricional del paciente. | Digital assessment platforms are like an airplane control panel - integrating multiple data sources for a complete picture of the patient\'s nutritional "flight."',
      ],
      examples: [
        'Algoritmo de IA en TC de estadificacion de cancer pancreatico identifica automaticamente sarcopenia oportunista (SMI <43) -> Ajuste de dosis de quimioterapia evita toxicidad | AI algorithm in pancreatic cancer staging CT identifies opportunistic sarcopenia -> Chemo dose adjustment avoids toxicity',
        'Angulo de fase 3.8 grados en paciente con cancer gastrico pre-cirugia -> Mortalidad postoperatoria 3x mayor vs angulo >5 grados -> Pre-habilitacion nutricional intensiva | Phase angle 3.8 in gastric cancer pre-surgery -> 3x mortality -> Intensive prehabilitation',
        'Plataforma integrada MCG + foto-registro de alimentos + actividad muestra respuesta glucemica individual de 180 mg/dL al arroz blanco vs 120 mg/dL al arroz integral -> Recomendacion personalizada | Integrated CGM + food photo + activity shows individual glycemic response -> Personalized recommendation',
        'MicroARN panel: miR-1 y miR-133 elevados + GDF-15 alto en paciente con IC avanzada -> Caquexia cardiaca temprana, iniciar intervencion anabolica | MicroRNA panel elevated + high GDF-15 in HF -> Early cardiac cachexia, start anabolic intervention',
      ],
      clinicalNotes: `Perlas clinicas de nivel experto | Expert Clinical Pearls:

1. **Evaluacion oportunista:** Todo CT abdominal ya realizado puede ser analizado para composicion corporal con software automatizado (AI) - integrar en flujo radiologico | Every abdominal CT already performed can be analyzed for body composition with AI

2. **Angulo de fase:** Predictor pronostico independiente validado en multiples patologias; considerar como "signo vital nutricional" - incorporar BIA multifrequencia en evaluacion de rutina | Phase angle is a validated independent prognostic predictor; consider as "nutritional vital sign"

3. **GDF-15:** Biomarcador emergente de caquexia con potencial terapeutico; anticuerpos anti-GDF-15 en ensayos fase I para caquexia cancerosa | GDF-15 is an emerging cachexia biomarker; anti-GDF-15 antibodies in phase I trials

4. **Citrulinemia:** Marcador subvalorado de funcion intestinal; <20 micromol/L sugiere perdida severa de masa enterocitaria (util en EICH, intestino corto, NEC) | Citrulline is undervalued; <20 suggests severe enterocyte mass loss

5. **Radiomica vs area muscular:** La calidad muscular (textura) predice desenlaces mejor que solo la cantidad; reportar ambos en evaluacion oncologica | Muscle quality predicts outcomes better than quantity alone

6. **Algoritmos predictivos:** Los modelos de ML para prediccion de desnutricion hospitalaria pueden alertar 48-72h antes del deterioro clinico - potencial para intervencion precoz | ML models can alert 48-72h before clinical deterioration`,
    },
  },

  media: [],

  citations: [
    {
      id: 'glim-criteria',
      type: 'journal',
      title: 'GLIM Criteria for the Diagnosis of Malnutrition: A Consensus Report from the Global Clinical Nutrition Community',
      authors: ['T Cederholm', 'GL Jensen', 'MIGASD Correia'],
      source: 'Clinical Nutrition',
      url: 'https://doi.org/10.1016/j.clnu.2018.09.002',
    },
    {
      id: 'ewgsop2-sarcopenia',
      type: 'journal',
      title: 'Sarcopenia: Revised European Consensus on Definition and Diagnosis (EWGSOP2)',
      authors: ['AJ Cruz-Jentoft', 'G Bahat', 'J Bauer'],
      source: 'Age and Ageing',
      url: 'https://doi.org/10.1093/ageing/afy169',
    },
    {
      id: 'aspen-malnutrition',
      type: 'guideline',
      title: 'Consensus Statement of the Academy/ASPEN: Indicators Recommended for the Identification and Documentation of Adult Malnutrition',
      authors: ['JV White', 'P Guenter', 'G Jensen'],
      source: 'Journal of the Academy of Nutrition and Dietetics',
    },
    {
      id: 'espen-perioperative',
      type: 'guideline',
      title: 'ESPEN Guidelines on Perioperative Nutrition',
      authors: ['A Weimann', 'M Braga', 'F Carli'],
      source: 'Clinical Nutrition',
      url: 'https://doi.org/10.1016/j.clnu.2017.02.013',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrientes-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrientes | Macronutrients' },
    { targetId: 'nutrition-vitaminas-vitamins', targetType: 'topic', relationship: 'related', label: 'Vitaminas | Vitamins' },
    { targetId: 'nutrition-minerales-minerals', targetType: 'topic', relationship: 'related', label: 'Minerales | Minerals' },
    { targetId: 'nutrition-enfermedades-cronicas', targetType: 'topic', relationship: 'sibling', label: 'Nutricion y enfermedades cronicas | Nutrition and Chronic Disease' },
    { targetId: 'anthropometry-body-composition', targetType: 'concept', relationship: 'related', label: 'Composicion corporal | Body Composition' },
    { targetId: 'geriatrics-sarcopenia', targetType: 'condition', relationship: 'see-also', label: 'Sarcopenia' },
  ],

  tags: {
    systems: ['musculoskeletal', 'gastrointestinal', 'endocrine'],
    topics: ['nutrition', 'assessment', 'preventive-medicine', 'geriatrics', 'critical-care'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default evaluacionNutricionalNutritionalAssessment;
