/**
 * SOMA - Enciclopedia de Nutricion / Nutrition Encyclopedia
 * Guia completa de nutrientes, dietas especiales y alimentos saludables.
 * Contenido bilingue: Espanol primero, Ingles secundario.
 * Educacion para pacientes.
 */

// ============================================================
// INTERFACES
// ============================================================

export interface NutrienteInfo {
  id: string;
  nombreEs: string;
  nombreEn: string;
  tipoEs: string;
  tipoEn: string;
  funcionEs: string;
  funcionEn: string;
  fuentesEs: string[];
  fuentesEn: string[];
  cantidadDiariaRecomendada: string;
  deficienciaEs: string;
  deficienciaEn: string;
  excesoEs: string;
  excesoEn: string;
  sintomasDeficienciaEs: string[];
  sintomasDeficienciaEn: string[];
  grupoRiesgoEs: string[];
  grupoRiesgoEn: string[];
  categoria: string;
}

export interface DietaEspecial {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  indicadaParaEs: string[];
  indicadaParaEn: string[];
  alimentosPermitidosEs: string[];
  alimentosPermitidosEn: string[];
  alimentosEvitarEs: string[];
  alimentosEvitarEn: string[];
  beneficiosEs: string[];
  beneficiosEn: string[];
  riesgosEs: string[];
  riesgosEn: string[];
  menuEjemploEs: string[];
  menuEjemploEn: string[];
  evidenciaCientifica: string;
}

export interface AlimentoSaludable {
  id: string;
  nombreEs: string;
  nombreEn: string;
  grupoEs: string;
  grupoEn: string;
  beneficiosEs: string[];
  beneficiosEn: string[];
  nutrientesClave: string[];
  porcion: string;
  calorias: number;
  consejosPreparacionEs: string[];
  consejosPreparacionEn: string[];
}

// ============================================================
// DATOS DE NUTRIENTES (35+)
// ============================================================

const nutrientesRaw = `[
{
  "id": "vitamina-a",
  "nombreEs": "Vitamina A (Retinol)",
  "nombreEn": "Vitamin A (Retinol)",
  "tipoEs": "Vitamina liposoluble",
  "tipoEn": "Fat-soluble vitamin",
  "funcionEs": "Esencial para la vision, el sistema inmunologico, la reproduccion y el crecimiento celular. Mantiene la salud de la piel y las mucosas.",
  "funcionEn": "Essential for vision, immune system, reproduction, and cell growth. Maintains skin and mucous membrane health.",
  "fuentesEs": ["Higado", "Zanahoria", "Batata/camote", "Espinacas", "Mango", "Huevos", "Leche fortificada"],
  "fuentesEn": ["Liver", "Carrots", "Sweet potato", "Spinach", "Mango", "Eggs", "Fortified milk"],
  "cantidadDiariaRecomendada": "700-900 mcg RAE/dia",
  "deficienciaEs": "Causa ceguera nocturna, xeroftalmia, piel seca y mayor susceptibilidad a infecciones. Es la principal causa de ceguera prevenible en ninos.",
  "deficienciaEn": "Causes night blindness, xerophthalmia, dry skin, and increased susceptibility to infections. Leading cause of preventable childhood blindness.",
  "excesoEs": "La hipervitaminosis A causa nauseas, dolor de cabeza, vision borrosa, dano hepatico y defectos congenitos en el embarazo.",
  "excesoEn": "Hypervitaminosis A causes nausea, headache, blurred vision, liver damage, and birth defects in pregnancy.",
  "sintomasDeficienciaEs": ["Ceguera nocturna", "Ojos secos", "Piel aspera y seca", "Infecciones frecuentes", "Retraso del crecimiento en ninos"],
  "sintomasDeficienciaEn": ["Night blindness", "Dry eyes", "Rough dry skin", "Frequent infections", "Growth retardation in children"],
  "grupoRiesgoEs": ["Ninos en paises en desarrollo", "Mujeres embarazadas", "Personas con malabsorcion de grasas", "Prematuros"],
  "grupoRiesgoEn": ["Children in developing countries", "Pregnant women", "People with fat malabsorption", "Premature infants"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b1",
  "nombreEs": "Vitamina B1 (Tiamina)",
  "nombreEn": "Vitamin B1 (Thiamine)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Coenzima esencial en el metabolismo de carbohidratos y produccion de energia. Crucial para la funcion nerviosa y muscular.",
  "funcionEn": "Essential coenzyme in carbohydrate metabolism and energy production. Crucial for nerve and muscle function.",
  "fuentesEs": ["Cerdo", "Granos integrales", "Legumbres", "Nueces", "Semillas de girasol", "Arroz enriquecido"],
  "fuentesEn": ["Pork", "Whole grains", "Legumes", "Nuts", "Sunflower seeds", "Enriched rice"],
  "cantidadDiariaRecomendada": "1.1-1.2 mg/dia",
  "deficienciaEs": "Causa beriberi (debilidad muscular, insuficiencia cardiaca) y sindrome de Wernicke-Korsakoff (confusion, ataxia, problemas de memoria).",
  "deficienciaEn": "Causes beriberi (muscle weakness, heart failure) and Wernicke-Korsakoff syndrome (confusion, ataxia, memory problems).",
  "excesoEs": "Raro en exceso por via oral, ya que es hidrosoluble y se excreta por orina. No se han establecido limites superiores.",
  "excesoEn": "Excess rare orally as it is water-soluble and excreted in urine. No upper limits established.",
  "sintomasDeficienciaEs": ["Fatiga y debilidad", "Irritabilidad", "Perdida de apetito", "Hormigueo en extremidades", "Confusion mental"],
  "sintomasDeficienciaEn": ["Fatigue and weakness", "Irritability", "Loss of appetite", "Tingling in extremities", "Mental confusion"],
  "grupoRiesgoEs": ["Alcoholicos cronicos", "Personas con desnutricion", "Pacientes con dialisis", "Personas con VIH/SIDA"],
  "grupoRiesgoEn": ["Chronic alcoholics", "Malnourished individuals", "Dialysis patients", "People with HIV/AIDS"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b2",
  "nombreEs": "Vitamina B2 (Riboflavina)",
  "nombreEn": "Vitamin B2 (Riboflavin)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Participa en reacciones de oxidacion-reduccion, metabolismo energetico y conversion de otras vitaminas B a sus formas activas.",
  "funcionEn": "Participates in oxidation-reduction reactions, energy metabolism, and converting other B vitamins to active forms.",
  "fuentesEs": ["Leche y lacteos", "Huevos", "Carne magra", "Vegetales verdes", "Cereales fortificados", "Almendras"],
  "fuentesEn": ["Milk and dairy", "Eggs", "Lean meat", "Green vegetables", "Fortified cereals", "Almonds"],
  "cantidadDiariaRecomendada": "1.1-1.3 mg/dia",
  "deficienciaEs": "Causa ariboflavinosis: grietas en comisuras de labios, lengua inflamada, dermatitis seborreica y anemia.",
  "deficienciaEn": "Causes ariboflavinosis: cracked lip corners, swollen tongue, seborrheic dermatitis, and anemia.",
  "excesoEs": "Sin toxicidad conocida en exceso. El exceso se excreta en orina dando color amarillo brillante.",
  "excesoEn": "No known toxicity in excess. Excess is excreted in urine giving bright yellow color.",
  "sintomasDeficienciaEs": ["Labios agrietados", "Lengua magenta inflamada", "Dermatitis", "Ojos sensibles a la luz", "Anemia"],
  "sintomasDeficienciaEn": ["Cracked lips", "Swollen magenta tongue", "Dermatitis", "Light-sensitive eyes", "Anemia"],
  "grupoRiesgoEs": ["Veganos estrictos", "Mujeres embarazadas", "Adultos mayores", "Personas con anorexia"],
  "grupoRiesgoEn": ["Strict vegans", "Pregnant women", "Elderly adults", "People with anorexia"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b3",
  "nombreEs": "Vitamina B3 (Niacina)",
  "nombreEn": "Vitamin B3 (Niacin)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Componente de NAD y NADP, esencial para el metabolismo energetico, reparacion del ADN y senalizacion celular.",
  "funcionEn": "Component of NAD and NADP, essential for energy metabolism, DNA repair, and cell signaling.",
  "fuentesEs": ["Pollo", "Atun", "Pavo", "Cacahuates/mani", "Champiñones", "Cereales fortificados"],
  "fuentesEn": ["Chicken", "Tuna", "Turkey", "Peanuts", "Mushrooms", "Fortified cereals"],
  "cantidadDiariaRecomendada": "14-16 mg NE/dia",
  "deficienciaEs": "Causa pelagra: las 4 D - dermatitis, diarrea, demencia y potencialmente la muerte si no se trata.",
  "deficienciaEn": "Causes pellagra: the 4 Ds - dermatitis, diarrhea, dementia, and potentially death if untreated.",
  "excesoEs": "Dosis altas de suplementos causan enrojecimiento facial (flushing), dano hepatico y pueden empeorar la gota.",
  "excesoEn": "High supplement doses cause facial flushing, liver damage, and may worsen gout.",
  "sintomasDeficienciaEs": ["Dermatitis en zonas expuestas al sol", "Diarrea cronica", "Confusion y demencia", "Lengua roja e inflamada"],
  "sintomasDeficienciaEn": ["Dermatitis on sun-exposed areas", "Chronic diarrhea", "Confusion and dementia", "Red swollen tongue"],
  "grupoRiesgoEs": ["Alcoholicos", "Personas con dieta basada en maiz", "Pacientes con enfermedad de Hartnup", "Personas con desnutricion"],
  "grupoRiesgoEn": ["Alcoholics", "People with corn-based diets", "Hartnup disease patients", "Malnourished individuals"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b5",
  "nombreEs": "Vitamina B5 (Acido pantotenico)",
  "nombreEn": "Vitamin B5 (Pantothenic acid)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Componente de la coenzima A, esencial para la sintesis y oxidacion de acidos grasos y el ciclo de Krebs.",
  "funcionEn": "Component of coenzyme A, essential for fatty acid synthesis and oxidation and the Krebs cycle.",
  "fuentesEs": ["Pollo", "Aguacate", "Brocoli", "Granos integrales", "Champiñones", "Yogur"],
  "fuentesEn": ["Chicken", "Avocado", "Broccoli", "Whole grains", "Mushrooms", "Yogurt"],
  "cantidadDiariaRecomendada": "5 mg/dia",
  "deficienciaEs": "Extremadamente rara. Puede causar fatiga, insensibilidad y hormigueo en pies (sindrome de pies ardientes).",
  "deficienciaEn": "Extremely rare. May cause fatigue, numbness, and tingling in feet (burning feet syndrome).",
  "excesoEs": "Sin toxicidad conocida. Dosis muy altas pueden causar diarrea leve.",
  "excesoEn": "No known toxicity. Very high doses may cause mild diarrhea.",
  "sintomasDeficienciaEs": ["Fatiga", "Dolor de cabeza", "Hormigueo en pies", "Nauseas", "Irritabilidad"],
  "sintomasDeficienciaEn": ["Fatigue", "Headache", "Tingling in feet", "Nausea", "Irritability"],
  "grupoRiesgoEs": ["Alcoholicos severos", "Personas con desnutricion grave", "Mujeres con anticonceptivos orales"],
  "grupoRiesgoEn": ["Severe alcoholics", "Severely malnourished individuals", "Women on oral contraceptives"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b6",
  "nombreEs": "Vitamina B6 (Piridoxina)",
  "nombreEn": "Vitamin B6 (Pyridoxine)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Coenzima en mas de 100 reacciones enzimaticas. Esencial para el metabolismo de aminoacidos, formacion de neurotransmisores y hemoglobina.",
  "funcionEn": "Coenzyme in over 100 enzymatic reactions. Essential for amino acid metabolism, neurotransmitter formation, and hemoglobin.",
  "fuentesEs": ["Pollo", "Salmon", "Platano", "Papa/patata", "Garbanzos", "Cereales fortificados"],
  "fuentesEn": ["Chicken", "Salmon", "Banana", "Potato", "Chickpeas", "Fortified cereals"],
  "cantidadDiariaRecomendada": "1.3-1.7 mg/dia",
  "deficienciaEs": "Causa anemia microcitica, dermatitis, depresion, confusion y convulsiones en casos severos.",
  "deficienciaEn": "Causes microcytic anemia, dermatitis, depression, confusion, and seizures in severe cases.",
  "excesoEs": "Dosis altas prolongadas (>200 mg/dia) causan neuropatia periferica sensorial con perdida de sensibilidad.",
  "excesoEn": "Prolonged high doses (>200 mg/day) cause sensory peripheral neuropathy with loss of sensation.",
  "sintomasDeficienciaEs": ["Anemia", "Dermatitis alrededor de ojos y boca", "Depresion", "Lengua inflamada", "Sistema inmune debilitado"],
  "sintomasDeficienciaEn": ["Anemia", "Dermatitis around eyes and mouth", "Depression", "Swollen tongue", "Weakened immune system"],
  "grupoRiesgoEs": ["Adultos mayores", "Pacientes renales", "Personas con enfermedades autoinmunes", "Alcoholicos"],
  "grupoRiesgoEn": ["Elderly adults", "Kidney patients", "People with autoimmune diseases", "Alcoholics"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b7",
  "nombreEs": "Vitamina B7 (Biotina)",
  "nombreEn": "Vitamin B7 (Biotin)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Coenzima para carboxilasas esenciales en el metabolismo de grasas, carbohidratos y aminoacidos.",
  "funcionEn": "Coenzyme for carboxylases essential in fat, carbohydrate, and amino acid metabolism.",
  "fuentesEs": ["Huevos (yema)", "Higado", "Salmon", "Aguacate", "Batata/camote", "Nueces"],
  "fuentesEn": ["Eggs (yolk)", "Liver", "Salmon", "Avocado", "Sweet potato", "Nuts"],
  "cantidadDiariaRecomendada": "30 mcg/dia",
  "deficienciaEs": "Rara. Causa perdida de cabello, erupciones cutaneas alrededor de ojos y boca, y sintomas neurologicos.",
  "deficienciaEn": "Rare. Causes hair loss, skin rashes around eyes and mouth, and neurological symptoms.",
  "excesoEs": "Sin toxicidad conocida, pero puede interferir con resultados de pruebas de laboratorio (troponina, TSH).",
  "excesoEn": "No known toxicity, but may interfere with lab test results (troponin, TSH).",
  "sintomasDeficienciaEs": ["Caida del cabello", "Erupciones cutaneas", "Unas quebradizas", "Depresion", "Letargo"],
  "sintomasDeficienciaEn": ["Hair loss", "Skin rashes", "Brittle nails", "Depression", "Lethargy"],
  "grupoRiesgoEs": ["Mujeres embarazadas", "Personas que consumen claras de huevo crudas", "Pacientes con nutricion parenteral"],
  "grupoRiesgoEn": ["Pregnant women", "People consuming raw egg whites", "Patients on parenteral nutrition"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b9",
  "nombreEs": "Vitamina B9 (Acido folico/Folato)",
  "nombreEn": "Vitamin B9 (Folic acid/Folate)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Esencial para la sintesis de ADN, division celular y formacion de globulos rojos. Critico en el desarrollo del tubo neural fetal.",
  "funcionEn": "Essential for DNA synthesis, cell division, and red blood cell formation. Critical in fetal neural tube development.",
  "fuentesEs": ["Espinacas", "Lentejas", "Garbanzos", "Esparragos", "Brocoli", "Cereales fortificados", "Higado"],
  "fuentesEn": ["Spinach", "Lentils", "Chickpeas", "Asparagus", "Broccoli", "Fortified cereals", "Liver"],
  "cantidadDiariaRecomendada": "400 mcg DFE/dia (600 mcg en embarazo)",
  "deficienciaEs": "Causa anemia megaloblastica y defectos del tubo neural en el feto (espina bifida, anencefalia).",
  "deficienciaEn": "Causes megaloblastic anemia and neural tube defects in the fetus (spina bifida, anencephaly).",
  "excesoEs": "Puede enmascarar deficiencia de vitamina B12. Dosis >1000 mcg pueden causar problemas neurologicos si hay deficit de B12.",
  "excesoEn": "May mask vitamin B12 deficiency. Doses >1000 mcg may cause neurological issues if B12 is deficient.",
  "sintomasDeficienciaEs": ["Fatiga", "Debilidad", "Dificultad para concentrarse", "Irritabilidad", "Lengua inflamada", "Ulceras bucales"],
  "sintomasDeficienciaEn": ["Fatigue", "Weakness", "Difficulty concentrating", "Irritability", "Swollen tongue", "Mouth ulcers"],
  "grupoRiesgoEs": ["Mujeres en edad fertil", "Embarazadas", "Alcoholicos", "Personas con enfermedad celiaca", "Pacientes con metotrexato"],
  "grupoRiesgoEn": ["Women of childbearing age", "Pregnant women", "Alcoholics", "People with celiac disease", "Methotrexate patients"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-b12",
  "nombreEs": "Vitamina B12 (Cobalamina)",
  "nombreEn": "Vitamin B12 (Cobalamin)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Esencial para la formacion de globulos rojos, funcion neurologica, sintesis de ADN y metabolismo de homocisteina.",
  "funcionEn": "Essential for red blood cell formation, neurological function, DNA synthesis, and homocysteine metabolism.",
  "fuentesEs": ["Carne de res", "Salmon", "Atun", "Huevos", "Leche", "Almejas", "Cereales fortificados"],
  "fuentesEn": ["Beef", "Salmon", "Tuna", "Eggs", "Milk", "Clams", "Fortified cereals"],
  "cantidadDiariaRecomendada": "2.4 mcg/dia",
  "deficienciaEs": "Causa anemia perniciosa/megaloblastica y dano neurologico irreversible (degeneracion subaguda combinada de la medula espinal).",
  "deficienciaEn": "Causes pernicious/megaloblastic anemia and irreversible neurological damage (subacute combined degeneration of spinal cord).",
  "excesoEs": "Sin toxicidad conocida. El exceso se excreta por orina. No se ha establecido limite superior.",
  "excesoEn": "No known toxicity. Excess is excreted in urine. No upper limit established.",
  "sintomasDeficienciaEs": ["Fatiga extrema", "Hormigueo en manos y pies", "Dificultad para caminar", "Problemas de memoria", "Depresion", "Lengua lisa"],
  "sintomasDeficienciaEn": ["Extreme fatigue", "Tingling in hands and feet", "Difficulty walking", "Memory problems", "Depression", "Smooth tongue"],
  "grupoRiesgoEs": ["Veganos", "Adultos mayores (>50 anos)", "Pacientes con cirugia gastrica", "Personas con anemia perniciosa", "Usuarios de metformina"],
  "grupoRiesgoEn": ["Vegans", "Elderly adults (>50 years)", "Gastric surgery patients", "People with pernicious anemia", "Metformin users"],
  "categoria": "vitaminas"
}
]`;

const nutrientesRaw2 = `[
{
  "id": "vitamina-c",
  "nombreEs": "Vitamina C (Acido ascorbico)",
  "nombreEn": "Vitamin C (Ascorbic acid)",
  "tipoEs": "Vitamina hidrosoluble",
  "tipoEn": "Water-soluble vitamin",
  "funcionEs": "Potente antioxidante, esencial para la sintesis de colageno, absorcion de hierro, funcion inmunologica y cicatrizacion de heridas.",
  "funcionEn": "Potent antioxidant, essential for collagen synthesis, iron absorption, immune function, and wound healing.",
  "fuentesEs": ["Naranja", "Kiwi", "Pimiento rojo", "Fresa", "Brocoli", "Guayaba", "Tomate"],
  "fuentesEn": ["Orange", "Kiwi", "Red bell pepper", "Strawberry", "Broccoli", "Guava", "Tomato"],
  "cantidadDiariaRecomendada": "75-90 mg/dia (fumadores: +35 mg)",
  "deficienciaEs": "Causa escorbuto: sangrado de encias, perdida de dientes, mala cicatrizacion, hemorragias y potencialmente muerte.",
  "deficienciaEn": "Causes scurvy: bleeding gums, tooth loss, poor wound healing, hemorrhages, and potentially death.",
  "excesoEs": "Dosis >2000 mg/dia causan diarrea, nauseas, calambres y aumentan riesgo de calculos renales de oxalato.",
  "excesoEn": "Doses >2000 mg/day cause diarrhea, nausea, cramps, and increase risk of oxalate kidney stones.",
  "sintomasDeficienciaEs": ["Encias sangrantes e inflamadas", "Fatiga", "Moretones faciles", "Mala cicatrizacion", "Dolor articular"],
  "sintomasDeficienciaEn": ["Swollen bleeding gums", "Fatigue", "Easy bruising", "Poor wound healing", "Joint pain"],
  "grupoRiesgoEs": ["Fumadores", "Personas con dieta limitada en frutas y verduras", "Alcoholicos", "Pacientes con dialisis"],
  "grupoRiesgoEn": ["Smokers", "People with limited fruit and vegetable intake", "Alcoholics", "Dialysis patients"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-d",
  "nombreEs": "Vitamina D (Colecalciferol)",
  "nombreEn": "Vitamin D (Cholecalciferol)",
  "tipoEs": "Vitamina liposoluble",
  "tipoEn": "Fat-soluble vitamin",
  "funcionEs": "Regula la absorcion de calcio y fosforo, esencial para huesos fuertes, funcion inmune y salud muscular. Se produce con luz solar.",
  "funcionEn": "Regulates calcium and phosphorus absorption, essential for strong bones, immune function, and muscle health. Produced with sunlight.",
  "fuentesEs": ["Luz solar (piel)", "Salmon", "Sardinas", "Leche fortificada", "Yema de huevo", "Champiñones expuestos a UV"],
  "fuentesEn": ["Sunlight (skin)", "Salmon", "Sardines", "Fortified milk", "Egg yolk", "UV-exposed mushrooms"],
  "cantidadDiariaRecomendada": "600-800 UI/dia (15-20 mcg)",
  "deficienciaEs": "Causa raquitismo en ninos (huesos debiles y deformados) y osteomalacia en adultos. Asociada a osteoporosis y debilidad muscular.",
  "deficienciaEn": "Causes rickets in children (weak deformed bones) and osteomalacia in adults. Associated with osteoporosis and muscle weakness.",
  "excesoEs": "Toxicidad causa hipercalcemia: nauseas, vomitos, debilidad, calcificacion de tejidos blandos y dano renal.",
  "excesoEn": "Toxicity causes hypercalcemia: nausea, vomiting, weakness, soft tissue calcification, and kidney damage.",
  "sintomasDeficienciaEs": ["Dolor oseo", "Debilidad muscular", "Fatiga", "Fracturas frecuentes", "Depresion", "Infecciones recurrentes"],
  "sintomasDeficienciaEn": ["Bone pain", "Muscle weakness", "Fatigue", "Frequent fractures", "Depression", "Recurrent infections"],
  "grupoRiesgoEs": ["Adultos mayores", "Personas con piel oscura", "Personas con poca exposicion solar", "Obesos", "Personas con malabsorcion"],
  "grupoRiesgoEn": ["Elderly adults", "Dark-skinned individuals", "People with limited sun exposure", "Obese individuals", "People with malabsorption"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-e",
  "nombreEs": "Vitamina E (Tocoferol)",
  "nombreEn": "Vitamin E (Tocopherol)",
  "tipoEs": "Vitamina liposoluble",
  "tipoEn": "Fat-soluble vitamin",
  "funcionEs": "Antioxidante liposoluble que protege membranas celulares del dano oxidativo. Importante para funcion inmune y salud vascular.",
  "funcionEn": "Fat-soluble antioxidant that protects cell membranes from oxidative damage. Important for immune function and vascular health.",
  "fuentesEs": ["Aceite de girasol", "Almendras", "Avellanas", "Espinacas", "Aguacate", "Aceite de oliva"],
  "fuentesEn": ["Sunflower oil", "Almonds", "Hazelnuts", "Spinach", "Avocado", "Olive oil"],
  "cantidadDiariaRecomendada": "15 mg/dia (22.4 UI)",
  "deficienciaEs": "Rara. Causa neuropatia periferica, ataxia, debilidad muscular y dano a la retina. Comun en fibrosis quistica.",
  "deficienciaEn": "Rare. Causes peripheral neuropathy, ataxia, muscle weakness, and retinal damage. Common in cystic fibrosis.",
  "excesoEs": "Dosis altas (>1000 mg) pueden aumentar riesgo de sangrado, especialmente con anticoagulantes, y posible mayor mortalidad.",
  "excesoEn": "High doses (>1000 mg) may increase bleeding risk, especially with anticoagulants, and possible increased mortality.",
  "sintomasDeficienciaEs": ["Debilidad muscular", "Problemas de vision", "Hormigueo en extremidades", "Dificultad para caminar", "Sistema inmune debilitado"],
  "sintomasDeficienciaEn": ["Muscle weakness", "Vision problems", "Tingling in extremities", "Difficulty walking", "Weakened immune system"],
  "grupoRiesgoEs": ["Personas con fibrosis quistica", "Enfermedad de Crohn", "Prematuros", "Personas con malabsorcion de grasas"],
  "grupoRiesgoEn": ["People with cystic fibrosis", "Crohn's disease", "Premature infants", "People with fat malabsorption"],
  "categoria": "vitaminas"
},
{
  "id": "vitamina-k",
  "nombreEs": "Vitamina K (Filoquinona/Menaquinona)",
  "nombreEn": "Vitamin K (Phylloquinone/Menaquinone)",
  "tipoEs": "Vitamina liposoluble",
  "tipoEn": "Fat-soluble vitamin",
  "funcionEs": "Esencial para la coagulacion sanguinea (factores II, VII, IX, X), metabolismo oseo y regulacion del calcio vascular.",
  "funcionEn": "Essential for blood clotting (factors II, VII, IX, X), bone metabolism, and vascular calcium regulation.",
  "fuentesEs": ["Kale/col rizada", "Espinacas", "Brocoli", "Coles de Bruselas", "Aceite de soya", "Natto"],
  "fuentesEn": ["Kale", "Spinach", "Broccoli", "Brussels sprouts", "Soybean oil", "Natto"],
  "cantidadDiariaRecomendada": "90-120 mcg/dia",
  "deficienciaEs": "Causa trastornos de coagulacion con sangrado excesivo, moretones y hemorragias. En recien nacidos puede ser fatal.",
  "deficienciaEn": "Causes clotting disorders with excessive bleeding, bruising, and hemorrhages. In newborns can be fatal.",
  "excesoEs": "Sin toxicidad conocida por ingesta alimentaria. No interfiere con anticoagulantes si la ingesta es constante.",
  "excesoEn": "No known toxicity from dietary intake. Does not interfere with anticoagulants if intake is consistent.",
  "sintomasDeficienciaEs": ["Sangrado excesivo", "Moretones faciles", "Sangrado de encias", "Sangre en orina o heces", "Hemorragias internas"],
  "sintomasDeficienciaEn": ["Excessive bleeding", "Easy bruising", "Bleeding gums", "Blood in urine or stool", "Internal hemorrhages"],
  "grupoRiesgoEs": ["Recien nacidos", "Pacientes con warfarina", "Personas con malabsorcion de grasas", "Pacientes con antibioticos prolongados"],
  "grupoRiesgoEn": ["Newborns", "Warfarin patients", "People with fat malabsorption", "Patients on prolonged antibiotics"],
  "categoria": "vitaminas"
},
{
  "id": "hierro",
  "nombreEs": "Hierro",
  "nombreEn": "Iron",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Componente de la hemoglobina y mioglobina para el transporte de oxigeno. Esencial para produccion de energia y funcion inmune.",
  "funcionEn": "Component of hemoglobin and myoglobin for oxygen transport. Essential for energy production and immune function.",
  "fuentesEs": ["Carne roja", "Higado", "Espinacas", "Lentejas", "Frijoles", "Tofu", "Cereales fortificados"],
  "fuentesEn": ["Red meat", "Liver", "Spinach", "Lentils", "Beans", "Tofu", "Fortified cereals"],
  "cantidadDiariaRecomendada": "8-18 mg/dia (mujeres premenopausicas: 18 mg)",
  "deficienciaEs": "Causa anemia ferropenica, la deficiencia nutricional mas comun del mundo. Afecta el desarrollo cognitivo en ninos.",
  "deficienciaEn": "Causes iron-deficiency anemia, the most common nutritional deficiency worldwide. Affects cognitive development in children.",
  "excesoEs": "La hemocromatosis causa dano hepatico, cardiaco y pancreatico. Envenenamiento por hierro es emergencia en ninos.",
  "excesoEn": "Hemochromatosis causes liver, heart, and pancreatic damage. Iron poisoning is an emergency in children.",
  "sintomasDeficienciaEs": ["Fatiga extrema", "Palidez", "Dificultad para respirar", "Mareos", "Unas quebradizas", "Pica (deseo de comer hielo/tierra)"],
  "sintomasDeficienciaEn": ["Extreme fatigue", "Pallor", "Shortness of breath", "Dizziness", "Brittle nails", "Pica (craving ice/dirt)"],
  "grupoRiesgoEs": ["Mujeres con menstruacion abundante", "Embarazadas", "Ninos pequenos", "Vegetarianos", "Donantes frecuentes de sangre"],
  "grupoRiesgoEn": ["Women with heavy menstruation", "Pregnant women", "Young children", "Vegetarians", "Frequent blood donors"],
  "categoria": "minerales"
},
{
  "id": "calcio",
  "nombreEs": "Calcio",
  "nombreEn": "Calcium",
  "tipoEs": "Mineral esencial (macromineral)",
  "tipoEn": "Essential mineral (macromineral)",
  "funcionEs": "Esencial para huesos y dientes fuertes, contraccion muscular, conduccion nerviosa, coagulacion sanguinea y secrecion hormonal.",
  "funcionEn": "Essential for strong bones and teeth, muscle contraction, nerve conduction, blood clotting, and hormone secretion.",
  "fuentesEs": ["Leche", "Queso", "Yogur", "Brocoli", "Col rizada", "Sardinas con hueso", "Tofu fortificado"],
  "fuentesEn": ["Milk", "Cheese", "Yogurt", "Broccoli", "Kale", "Sardines with bones", "Fortified tofu"],
  "cantidadDiariaRecomendada": "1000-1200 mg/dia",
  "deficienciaEs": "Causa osteoporosis, osteopenia, calambres musculares. Deficiencia aguda causa tetania hipocalcemica (espasmos, convulsiones).",
  "deficienciaEn": "Causes osteoporosis, osteopenia, muscle cramps. Acute deficiency causes hypocalcemic tetany (spasms, seizures).",
  "excesoEs": "Hipercalcemia causa calculos renales, calcificacion vascular, nauseas, confusion y arritmias cardiacas.",
  "excesoEn": "Hypercalcemia causes kidney stones, vascular calcification, nausea, confusion, and cardiac arrhythmias.",
  "sintomasDeficienciaEs": ["Calambres musculares", "Hormigueo en dedos", "Unas quebradizas", "Fatiga", "Osteoporosis", "Fracturas frecuentes"],
  "sintomasDeficienciaEn": ["Muscle cramps", "Tingling in fingers", "Brittle nails", "Fatigue", "Osteoporosis", "Frequent fractures"],
  "grupoRiesgoEs": ["Mujeres posmenopausicas", "Personas intolerantes a la lactosa", "Veganos", "Adultos mayores", "Personas con enfermedad celiaca"],
  "grupoRiesgoEn": ["Postmenopausal women", "Lactose-intolerant people", "Vegans", "Elderly adults", "People with celiac disease"],
  "categoria": "minerales"
}
]`;

const nutrientesRaw3 = `[
{
  "id": "zinc",
  "nombreEs": "Zinc",
  "nombreEn": "Zinc",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Cofactor de mas de 300 enzimas. Esencial para funcion inmune, cicatrizacion, sintesis de ADN y sentidos del gusto y olfato.",
  "funcionEn": "Cofactor of over 300 enzymes. Essential for immune function, wound healing, DNA synthesis, and taste and smell senses.",
  "fuentesEs": ["Ostras", "Carne de res", "Cangrejo", "Semillas de calabaza", "Garbanzos", "Yogur", "Nueces de castilla"],
  "fuentesEn": ["Oysters", "Beef", "Crab", "Pumpkin seeds", "Chickpeas", "Yogurt", "Walnuts"],
  "cantidadDiariaRecomendada": "8-11 mg/dia",
  "deficienciaEs": "Causa retraso del crecimiento, perdida del gusto y olfato, diarrea, lesiones cutaneas e infecciones frecuentes.",
  "deficienciaEn": "Causes growth retardation, loss of taste and smell, diarrhea, skin lesions, and frequent infections.",
  "excesoEs": "Dosis >40 mg/dia causan nauseas, vomitos, disminucion de cobre y alteracion de la funcion inmune.",
  "excesoEn": "Doses >40 mg/day cause nausea, vomiting, copper depletion, and altered immune function.",
  "sintomasDeficienciaEs": ["Perdida del gusto y olfato", "Caida del cabello", "Diarrea", "Lesiones en la piel", "Infecciones frecuentes", "Mala cicatrizacion"],
  "sintomasDeficienciaEn": ["Loss of taste and smell", "Hair loss", "Diarrhea", "Skin lesions", "Frequent infections", "Poor wound healing"],
  "grupoRiesgoEs": ["Vegetarianos", "Mujeres embarazadas", "Personas con enfermedad de Crohn", "Alcoholicos", "Ninos en paises en desarrollo"],
  "grupoRiesgoEn": ["Vegetarians", "Pregnant women", "People with Crohn's disease", "Alcoholics", "Children in developing countries"],
  "categoria": "minerales"
},
{
  "id": "magnesio",
  "nombreEs": "Magnesio",
  "nombreEn": "Magnesium",
  "tipoEs": "Mineral esencial (macromineral)",
  "tipoEn": "Essential mineral (macromineral)",
  "funcionEs": "Cofactor en mas de 600 reacciones enzimaticas. Esencial para funcion muscular y nerviosa, produccion de energia y sintesis de ADN.",
  "funcionEn": "Cofactor in over 600 enzymatic reactions. Essential for muscle and nerve function, energy production, and DNA synthesis.",
  "fuentesEs": ["Almendras", "Espinacas", "Frijoles negros", "Aguacate", "Chocolate oscuro", "Quinoa", "Platano"],
  "fuentesEn": ["Almonds", "Spinach", "Black beans", "Avocado", "Dark chocolate", "Quinoa", "Banana"],
  "cantidadDiariaRecomendada": "310-420 mg/dia",
  "deficienciaEs": "Causa calambres musculares, fatiga, arritmias cardiacas, y puede contribuir a osteoporosis, diabetes tipo 2 e hipertension.",
  "deficienciaEn": "Causes muscle cramps, fatigue, cardiac arrhythmias, and may contribute to osteoporosis, type 2 diabetes, and hypertension.",
  "excesoEs": "Dosis altas de suplementos causan diarrea, nauseas. Exceso severo causa hipotension, debilidad muscular y paro cardiaco.",
  "excesoEn": "High supplement doses cause diarrhea, nausea. Severe excess causes hypotension, muscle weakness, and cardiac arrest.",
  "sintomasDeficienciaEs": ["Calambres musculares", "Temblores", "Nauseas", "Fatiga", "Entumecimiento", "Arritmias cardiacas"],
  "sintomasDeficienciaEn": ["Muscle cramps", "Tremors", "Nausea", "Fatigue", "Numbness", "Cardiac arrhythmias"],
  "grupoRiesgoEs": ["Diabeticos tipo 2", "Alcoholicos", "Personas con enfermedades gastrointestinales", "Adultos mayores", "Usuarios de diureticos"],
  "grupoRiesgoEn": ["Type 2 diabetics", "Alcoholics", "People with gastrointestinal diseases", "Elderly adults", "Diuretic users"],
  "categoria": "minerales"
},
{
  "id": "potasio",
  "nombreEs": "Potasio",
  "nombreEn": "Potassium",
  "tipoEs": "Mineral esencial (macromineral/electrolito)",
  "tipoEn": "Essential mineral (macromineral/electrolyte)",
  "funcionEs": "Electrolito esencial para la funcion cardiaca, contraccion muscular, transmision nerviosa y equilibrio de fluidos.",
  "funcionEn": "Essential electrolyte for cardiac function, muscle contraction, nerve transmission, and fluid balance.",
  "fuentesEs": ["Platano", "Papa/patata", "Espinacas", "Frijoles", "Aguacate", "Naranja", "Tomate"],
  "fuentesEn": ["Banana", "Potato", "Spinach", "Beans", "Avocado", "Orange", "Tomato"],
  "cantidadDiariaRecomendada": "2600-3400 mg/dia",
  "deficienciaEs": "La hipokalemia causa debilidad muscular, calambres, arritmias cardiacas potencialmente fatales y paralisis.",
  "deficienciaEn": "Hypokalemia causes muscle weakness, cramps, potentially fatal cardiac arrhythmias, and paralysis.",
  "excesoEs": "La hiperkalemia es potencialmente mortal: arritmias cardiacas, paro cardiaco. Comun en insuficiencia renal.",
  "excesoEn": "Hyperkalemia is potentially fatal: cardiac arrhythmias, cardiac arrest. Common in kidney failure.",
  "sintomasDeficienciaEs": ["Debilidad muscular", "Calambres", "Fatiga", "Estrenimiento", "Palpitaciones", "Arritmias cardiacas"],
  "sintomasDeficienciaEn": ["Muscle weakness", "Cramps", "Fatigue", "Constipation", "Palpitations", "Cardiac arrhythmias"],
  "grupoRiesgoEs": ["Usuarios de diureticos", "Personas con diarrea cronica", "Pacientes con bulimia", "Personas con sudoracion excesiva"],
  "grupoRiesgoEn": ["Diuretic users", "People with chronic diarrhea", "Bulimia patients", "People with excessive sweating"],
  "categoria": "minerales"
},
{
  "id": "sodio",
  "nombreEs": "Sodio",
  "nombreEn": "Sodium",
  "tipoEs": "Mineral esencial (macromineral/electrolito)",
  "tipoEn": "Essential mineral (macromineral/electrolyte)",
  "funcionEs": "Electrolito principal del liquido extracelular. Regula volumen sanguineo, presion arterial, equilibrio acido-base y funcion nerviosa.",
  "funcionEn": "Main extracellular fluid electrolyte. Regulates blood volume, blood pressure, acid-base balance, and nerve function.",
  "fuentesEs": ["Sal de mesa", "Alimentos procesados", "Pan", "Queso", "Sopas enlatadas", "Embutidos"],
  "fuentesEn": ["Table salt", "Processed foods", "Bread", "Cheese", "Canned soups", "Deli meats"],
  "cantidadDiariaRecomendada": "<2300 mg/dia (ideal <1500 mg para hipertensos)",
  "deficienciaEs": "La hiponatremia causa confusion, nauseas, convulsiones y edema cerebral. Puede ocurrir por exceso de agua o uso de diureticos.",
  "deficienciaEn": "Hyponatremia causes confusion, nausea, seizures, and brain edema. Can occur from excess water intake or diuretic use.",
  "excesoEs": "El exceso cronico causa hipertension arterial, enfermedad cardiaca, accidente cerebrovascular y dano renal.",
  "excesoEn": "Chronic excess causes high blood pressure, heart disease, stroke, and kidney damage.",
  "sintomasDeficienciaEs": ["Nauseas y vomitos", "Dolor de cabeza", "Confusion", "Fatiga", "Calambres", "Convulsiones (severo)"],
  "sintomasDeficienciaEn": ["Nausea and vomiting", "Headache", "Confusion", "Fatigue", "Cramps", "Seizures (severe)"],
  "grupoRiesgoEs": ["Atletas de resistencia", "Adultos mayores con polidipsia", "Usuarios de diureticos tiazidicos", "Pacientes con SIADH"],
  "grupoRiesgoEn": ["Endurance athletes", "Elderly with polydipsia", "Thiazide diuretic users", "SIADH patients"],
  "categoria": "minerales"
},
{
  "id": "selenio",
  "nombreEs": "Selenio",
  "nombreEn": "Selenium",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Componente de selenoproteinas antioxidantes (glutatión peroxidasa). Esencial para funcion tiroidea, reproduccion e inmunidad.",
  "funcionEn": "Component of antioxidant selenoproteins (glutathione peroxidase). Essential for thyroid function, reproduction, and immunity.",
  "fuentesEs": ["Nueces de Brasil", "Atun", "Sardinas", "Huevos", "Arroz integral", "Pollo"],
  "fuentesEn": ["Brazil nuts", "Tuna", "Sardines", "Eggs", "Brown rice", "Chicken"],
  "cantidadDiariaRecomendada": "55 mcg/dia",
  "deficienciaEs": "Causa enfermedad de Keshan (miocardiopatia) y enfermedad de Kashin-Beck (osteoartropatia). Afecta la funcion tiroidea.",
  "deficienciaEn": "Causes Keshan disease (cardiomyopathy) and Kashin-Beck disease (osteoarthropathy). Affects thyroid function.",
  "excesoEs": "La selenosis causa aliento a ajo, caida del cabello, unas fragiles, fatiga, irritabilidad y dano nervioso.",
  "excesoEn": "Selenosis causes garlic breath, hair loss, brittle nails, fatigue, irritability, and nerve damage.",
  "sintomasDeficienciaEs": ["Debilidad muscular", "Fatiga", "Problemas tiroideos", "Sistema inmune debilitado", "Infertilidad"],
  "sintomasDeficienciaEn": ["Muscle weakness", "Fatigue", "Thyroid problems", "Weakened immune system", "Infertility"],
  "grupoRiesgoEs": ["Personas en regiones con suelo bajo en selenio", "Pacientes con dialisis", "Personas con VIH", "Pacientes con enfermedad de Crohn"],
  "grupoRiesgoEn": ["People in selenium-poor soil regions", "Dialysis patients", "People with HIV", "Crohn's disease patients"],
  "categoria": "minerales"
},
{
  "id": "yodo",
  "nombreEs": "Yodo",
  "nombreEn": "Iodine",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Componente esencial de las hormonas tiroideas (T3 y T4) que regulan el metabolismo, crecimiento y desarrollo del cerebro.",
  "funcionEn": "Essential component of thyroid hormones (T3 and T4) that regulate metabolism, growth, and brain development.",
  "fuentesEs": ["Sal yodada", "Algas marinas", "Pescado", "Mariscos", "Lacteos", "Huevos"],
  "fuentesEn": ["Iodized salt", "Seaweed", "Fish", "Shellfish", "Dairy", "Eggs"],
  "cantidadDiariaRecomendada": "150 mcg/dia (220-290 mcg embarazo/lactancia)",
  "deficienciaEs": "Causa bocio, hipotiroidismo y cretinismo (retraso mental severo en ninos). Es la causa prevenible mas comun de discapacidad intelectual.",
  "deficienciaEn": "Causes goiter, hypothyroidism, and cretinism (severe mental retardation in children). Most common preventable cause of intellectual disability.",
  "excesoEs": "El exceso puede causar tanto hipertiroidismo como hipotiroidismo, tiroiditis y bocio.",
  "excesoEn": "Excess can cause both hyperthyroidism and hypothyroidism, thyroiditis, and goiter.",
  "sintomasDeficienciaEs": ["Agrandamiento de tiroides (bocio)", "Aumento de peso", "Fatiga", "Sensibilidad al frio", "Piel seca", "Problemas cognitivos"],
  "sintomasDeficienciaEn": ["Thyroid enlargement (goiter)", "Weight gain", "Fatigue", "Cold sensitivity", "Dry skin", "Cognitive problems"],
  "grupoRiesgoEs": ["Embarazadas", "Personas en regiones sin sal yodada", "Veganos", "Personas que no consumen lacteos ni mariscos"],
  "grupoRiesgoEn": ["Pregnant women", "People in regions without iodized salt", "Vegans", "People who avoid dairy and seafood"],
  "categoria": "minerales"
},
{
  "id": "fosforo",
  "nombreEs": "Fosforo",
  "nombreEn": "Phosphorus",
  "tipoEs": "Mineral esencial (macromineral)",
  "tipoEn": "Essential mineral (macromineral)",
  "funcionEs": "Componente de huesos, dientes, ADN, ARN y ATP. Esencial para el metabolismo energetico y equilibrio acido-base.",
  "funcionEn": "Component of bones, teeth, DNA, RNA, and ATP. Essential for energy metabolism and acid-base balance.",
  "fuentesEs": ["Carne", "Pescado", "Lacteos", "Nueces", "Legumbres", "Granos integrales"],
  "fuentesEn": ["Meat", "Fish", "Dairy", "Nuts", "Legumes", "Whole grains"],
  "cantidadDiariaRecomendada": "700 mg/dia",
  "deficienciaEs": "Rara en dietas normales. Causa debilidad osea, dolor oseo, perdida de apetito y raquitismo.",
  "deficienciaEn": "Rare in normal diets. Causes bone weakness, bone pain, loss of appetite, and rickets.",
  "excesoEs": "El exceso (comun en enfermedad renal) causa hiperfosfatemia, calcificacion vascular y riesgo cardiovascular.",
  "excesoEn": "Excess (common in kidney disease) causes hyperphosphatemia, vascular calcification, and cardiovascular risk.",
  "sintomasDeficienciaEs": ["Debilidad osea", "Dolor oseo", "Perdida de apetito", "Fatiga", "Rigidez articular"],
  "sintomasDeficienciaEn": ["Bone weakness", "Bone pain", "Loss of appetite", "Fatigue", "Joint stiffness"],
  "grupoRiesgoEs": ["Personas con uso cronico de antiacidos", "Alcoholicos", "Diabeticos no controlados", "Prematuros"],
  "grupoRiesgoEn": ["People with chronic antacid use", "Alcoholics", "Uncontrolled diabetics", "Premature infants"],
  "categoria": "minerales"
},
{
  "id": "cobre",
  "nombreEs": "Cobre",
  "nombreEn": "Copper",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Cofactor enzimatico para produccion de energia, metabolismo del hierro, formacion de tejido conectivo y funcion del sistema nervioso.",
  "funcionEn": "Enzymatic cofactor for energy production, iron metabolism, connective tissue formation, and nervous system function.",
  "fuentesEs": ["Higado", "Ostras", "Chocolate oscuro", "Semillas de girasol", "Anacardos/cajuil", "Lentejas"],
  "fuentesEn": ["Liver", "Oysters", "Dark chocolate", "Sunflower seeds", "Cashews", "Lentils"],
  "cantidadDiariaRecomendada": "900 mcg/dia",
  "deficienciaEs": "Causa anemia, neutropenia, anomalias oseas y del tejido conectivo. La enfermedad de Menkes es un trastorno genetico de absorcion de cobre.",
  "deficienciaEn": "Causes anemia, neutropenia, bone and connective tissue abnormalities. Menkes disease is a genetic copper absorption disorder.",
  "excesoEs": "La enfermedad de Wilson acumula cobre en higado y cerebro. El exceso agudo causa nauseas, vomitos y dano hepatico.",
  "excesoEn": "Wilson's disease accumulates copper in liver and brain. Acute excess causes nausea, vomiting, and liver damage.",
  "sintomasDeficienciaEs": ["Anemia", "Neutropenia", "Osteoporosis", "Problemas neurologicos", "Piel palida"],
  "sintomasDeficienciaEn": ["Anemia", "Neutropenia", "Osteoporosis", "Neurological problems", "Pale skin"],
  "grupoRiesgoEs": ["Personas con suplementacion excesiva de zinc", "Pacientes con cirugia bariatrica", "Prematuros", "Personas con malabsorcion"],
  "grupoRiesgoEn": ["People with excessive zinc supplementation", "Bariatric surgery patients", "Premature infants", "People with malabsorption"],
  "categoria": "minerales"
},
{
  "id": "manganeso",
  "nombreEs": "Manganeso",
  "nombreEn": "Manganese",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Cofactor de enzimas antioxidantes (SOD), metabolismo de aminoacidos, carbohidratos y colesterol. Importante para formacion osea.",
  "funcionEn": "Cofactor of antioxidant enzymes (SOD), amino acid, carbohydrate, and cholesterol metabolism. Important for bone formation.",
  "fuentesEs": ["Te", "Nueces", "Granos integrales", "Espinacas", "Pina", "Frijoles"],
  "fuentesEn": ["Tea", "Nuts", "Whole grains", "Spinach", "Pineapple", "Beans"],
  "cantidadDiariaRecomendada": "1.8-2.3 mg/dia",
  "deficienciaEs": "Rara. Puede causar crecimiento deficiente, anomalias oseas, intolerancia a la glucosa y alteracion del metabolismo lipidico.",
  "deficienciaEn": "Rare. May cause poor growth, bone abnormalities, glucose intolerance, and altered lipid metabolism.",
  "excesoEs": "La exposicion cronica (industrial) causa manganismo: sindrome similar a Parkinson con temblores y rigidez.",
  "excesoEn": "Chronic exposure (industrial) causes manganism: Parkinson-like syndrome with tremors and rigidity.",
  "sintomasDeficienciaEs": ["Debilidad osea", "Dermatitis", "Cabello debil", "Crecimiento lento en ninos"],
  "sintomasDeficienciaEn": ["Bone weakness", "Dermatitis", "Weak hair", "Slow growth in children"],
  "grupoRiesgoEs": ["Personas con nutricion parenteral sin suplemento", "Personas con epilepsia (algunos medicamentos)", "Osteoporoticos"],
  "grupoRiesgoEn": ["People on unsupplemented parenteral nutrition", "People with epilepsy (some medications)", "Osteoporotic individuals"],
  "categoria": "minerales"
}
]`;

const nutrientesRaw4 = `[
{
  "id": "proteinas",
  "nombreEs": "Proteinas",
  "nombreEn": "Proteins",
  "tipoEs": "Macronutriente",
  "tipoEn": "Macronutrient",
  "funcionEs": "Bloques de construccion del cuerpo. Forman musculos, enzimas, hormonas, anticuerpos y transportadores. Proporcionan 4 kcal/g.",
  "funcionEn": "Building blocks of the body. Form muscles, enzymes, hormones, antibodies, and transporters. Provide 4 kcal/g.",
  "fuentesEs": ["Carne", "Pescado", "Huevos", "Lacteos", "Legumbres", "Tofu", "Quinoa", "Nueces"],
  "fuentesEn": ["Meat", "Fish", "Eggs", "Dairy", "Legumes", "Tofu", "Quinoa", "Nuts"],
  "cantidadDiariaRecomendada": "0.8 g/kg/dia (46-56 g/dia promedio)",
  "deficienciaEs": "Causa kwashiorkor (edema, higado graso), marasmo (emaciacion extrema), debilidad muscular, retraso del crecimiento e inmunodeficiencia.",
  "deficienciaEn": "Causes kwashiorkor (edema, fatty liver), marasmus (extreme wasting), muscle weakness, growth retardation, and immunodeficiency.",
  "excesoEs": "El exceso cronico puede sobrecargar los rinones, aumentar excrecion de calcio y contribuir a enfermedad renal en personas susceptibles.",
  "excesoEn": "Chronic excess may overload kidneys, increase calcium excretion, and contribute to kidney disease in susceptible people.",
  "sintomasDeficienciaEs": ["Perdida muscular", "Edema", "Cabello debil y quebradizo", "Unas fragiles", "Infecciones frecuentes", "Fatiga"],
  "sintomasDeficienciaEn": ["Muscle wasting", "Edema", "Weak brittle hair", "Fragile nails", "Frequent infections", "Fatigue"],
  "grupoRiesgoEs": ["Ninos en paises en desarrollo", "Adultos mayores", "Personas hospitalizadas", "Veganos sin planificacion adecuada"],
  "grupoRiesgoEn": ["Children in developing countries", "Elderly adults", "Hospitalized patients", "Vegans without proper planning"],
  "categoria": "macronutrientes"
},
{
  "id": "carbohidratos",
  "nombreEs": "Carbohidratos",
  "nombreEn": "Carbohydrates",
  "tipoEs": "Macronutriente",
  "tipoEn": "Macronutrient",
  "funcionEs": "Principal fuente de energia del cuerpo (4 kcal/g). Combustible preferido del cerebro y musculos. Incluye azucares, almidones y fibra.",
  "funcionEn": "Main energy source for the body (4 kcal/g). Preferred fuel for brain and muscles. Includes sugars, starches, and fiber.",
  "fuentesEs": ["Granos integrales", "Arroz", "Pan", "Pasta", "Frutas", "Verduras", "Legumbres", "Papa/patata"],
  "fuentesEn": ["Whole grains", "Rice", "Bread", "Pasta", "Fruits", "Vegetables", "Legumes", "Potato"],
  "cantidadDiariaRecomendada": "45-65% de calorias totales (225-325 g en dieta de 2000 kcal)",
  "deficienciaEs": "Causa cetosis, fatiga, mareos, mal aliento, perdida de masa muscular (el cuerpo usa proteina como energia).",
  "deficienciaEn": "Causes ketosis, fatigue, dizziness, bad breath, muscle mass loss (body uses protein for energy).",
  "excesoEs": "El exceso causa obesidad, resistencia a la insulina, diabetes tipo 2, caries dental e hiper trigliceridemia.",
  "excesoEn": "Excess causes obesity, insulin resistance, type 2 diabetes, dental caries, and hypertriglyceridemia.",
  "sintomasDeficienciaEs": ["Fatiga extrema", "Mareos", "Mal aliento", "Dificultad para concentrarse", "Dolor de cabeza", "Estrenimiento"],
  "sintomasDeficienciaEn": ["Extreme fatigue", "Dizziness", "Bad breath", "Difficulty concentrating", "Headache", "Constipation"],
  "grupoRiesgoEs": ["Personas en dietas muy bajas en carbohidratos", "Atletas sin adecuada ingesta", "Personas con trastornos alimentarios"],
  "grupoRiesgoEn": ["People on very low-carb diets", "Athletes with inadequate intake", "People with eating disorders"],
  "categoria": "macronutrientes"
},
{
  "id": "grasas",
  "nombreEs": "Grasas (Lipidos)",
  "nombreEn": "Fats (Lipids)",
  "tipoEs": "Macronutriente",
  "tipoEn": "Macronutrient",
  "funcionEs": "Fuente concentrada de energia (9 kcal/g). Esenciales para absorcion de vitaminas liposolubles, aislamiento termico y proteccion de organos.",
  "funcionEn": "Concentrated energy source (9 kcal/g). Essential for fat-soluble vitamin absorption, thermal insulation, and organ protection.",
  "fuentesEs": ["Aceite de oliva", "Aguacate", "Nueces", "Semillas", "Pescado graso", "Mantequilla", "Aceite de coco"],
  "fuentesEn": ["Olive oil", "Avocado", "Nuts", "Seeds", "Fatty fish", "Butter", "Coconut oil"],
  "cantidadDiariaRecomendada": "20-35% de calorias totales (44-78 g en dieta de 2000 kcal)",
  "deficienciaEs": "Causa deficiencia de acidos grasos esenciales: piel seca y escamosa, mala cicatrizacion, caida del cabello y problemas hormonales.",
  "deficienciaEn": "Causes essential fatty acid deficiency: dry scaly skin, poor wound healing, hair loss, and hormonal problems.",
  "excesoEs": "El exceso causa obesidad, enfermedad cardiovascular, diabetes tipo 2, higado graso y ciertos canceres.",
  "excesoEn": "Excess causes obesity, cardiovascular disease, type 2 diabetes, fatty liver, and certain cancers.",
  "sintomasDeficienciaEs": ["Piel seca y escamosa", "Caida del cabello", "Mala cicatrizacion", "Problemas de vision", "Fatiga", "Irregularidades menstruales"],
  "sintomasDeficienciaEn": ["Dry scaly skin", "Hair loss", "Poor wound healing", "Vision problems", "Fatigue", "Menstrual irregularities"],
  "grupoRiesgoEs": ["Personas con dietas extremadamente bajas en grasa", "Pacientes con malabsorcion", "Personas con fibrosis quistica"],
  "grupoRiesgoEn": ["People on extremely low-fat diets", "Malabsorption patients", "People with cystic fibrosis"],
  "categoria": "macronutrientes"
},
{
  "id": "fibra",
  "nombreEs": "Fibra dietaria",
  "nombreEn": "Dietary fiber",
  "tipoEs": "Macronutriente (carbohidrato no digerible)",
  "tipoEn": "Macronutrient (non-digestible carbohydrate)",
  "funcionEs": "Promueve salud digestiva, regula glucosa sanguinea, reduce colesterol, alimenta bacterias beneficas del intestino y promueve saciedad.",
  "funcionEn": "Promotes digestive health, regulates blood glucose, reduces cholesterol, feeds beneficial gut bacteria, and promotes satiety.",
  "fuentesEs": ["Legumbres", "Granos integrales", "Verduras", "Frutas", "Semillas de chia", "Avena", "Brocoli"],
  "fuentesEn": ["Legumes", "Whole grains", "Vegetables", "Fruits", "Chia seeds", "Oats", "Broccoli"],
  "cantidadDiariaRecomendada": "25-38 g/dia",
  "deficienciaEs": "La ingesta insuficiente causa estrenimiento, hemorroides, diverticulosis, mayor riesgo de cancer colorrectal y mala salud intestinal.",
  "deficienciaEn": "Insufficient intake causes constipation, hemorrhoids, diverticulosis, higher colorectal cancer risk, and poor gut health.",
  "excesoEs": "El exceso rapido causa hinchazón, gases, calambres abdominales y puede reducir absorcion de minerales.",
  "excesoEn": "Rapid excess causes bloating, gas, abdominal cramps, and may reduce mineral absorption.",
  "sintomasDeficienciaEs": ["Estrenimiento", "Hinchazón", "Hambre frecuente", "Fluctuaciones de glucosa", "Colesterol elevado"],
  "sintomasDeficienciaEn": ["Constipation", "Bloating", "Frequent hunger", "Glucose fluctuations", "Elevated cholesterol"],
  "grupoRiesgoEs": ["Personas con dietas procesadas", "Ninos con dietas limitadas", "Adultos mayores con poca variedad alimentaria"],
  "grupoRiesgoEn": ["People on processed diets", "Children with limited diets", "Elderly with low dietary variety"],
  "categoria": "macronutrientes"
},
{
  "id": "agua",
  "nombreEs": "Agua",
  "nombreEn": "Water",
  "tipoEs": "Macronutriente esencial",
  "tipoEn": "Essential macronutrient",
  "funcionEs": "Solvente universal del cuerpo. Regula temperatura, transporta nutrientes, elimina desechos, lubrica articulaciones y protege organos.",
  "funcionEn": "Universal body solvent. Regulates temperature, transports nutrients, removes waste, lubricates joints, and protects organs.",
  "fuentesEs": ["Agua potable", "Frutas (sandia, naranja)", "Verduras (pepino, lechuga)", "Sopas", "Leche", "Infusiones"],
  "fuentesEn": ["Drinking water", "Fruits (watermelon, orange)", "Vegetables (cucumber, lettuce)", "Soups", "Milk", "Herbal teas"],
  "cantidadDiariaRecomendada": "2.7-3.7 L/dia (incluye agua de alimentos)",
  "deficienciaEs": "La deshidratacion causa sed intensa, orina oscura, confusion, mareos, taquicardia y puede ser fatal en casos severos.",
  "deficienciaEn": "Dehydration causes intense thirst, dark urine, confusion, dizziness, tachycardia, and can be fatal in severe cases.",
  "excesoEs": "La sobrehidratacion causa hiponatremia dilucionaria: nauseas, confusion, convulsiones y edema cerebral potencialmente mortal.",
  "excesoEn": "Overhydration causes dilutional hyponatremia: nausea, confusion, seizures, and potentially fatal brain edema.",
  "sintomasDeficienciaEs": ["Sed intensa", "Boca seca", "Orina oscura y escasa", "Fatiga", "Mareos", "Dolor de cabeza"],
  "sintomasDeficienciaEn": ["Intense thirst", "Dry mouth", "Dark scanty urine", "Fatigue", "Dizziness", "Headache"],
  "grupoRiesgoEs": ["Adultos mayores (disminucion de sensacion de sed)", "Ninos pequenos", "Atletas", "Personas con diarrea o vomitos"],
  "grupoRiesgoEn": ["Elderly (decreased thirst sensation)", "Young children", "Athletes", "People with diarrhea or vomiting"],
  "categoria": "macronutrientes"
},
{
  "id": "omega-3",
  "nombreEs": "Acidos grasos Omega-3",
  "nombreEn": "Omega-3 fatty acids",
  "tipoEs": "Acido graso esencial poliinsaturado",
  "tipoEn": "Essential polyunsaturated fatty acid",
  "funcionEs": "Antiinflamatorio potente. Esencial para desarrollo cerebral, salud cardiovascular, funcion retiniana y regulacion inmunologica.",
  "funcionEn": "Potent anti-inflammatory. Essential for brain development, cardiovascular health, retinal function, and immune regulation.",
  "fuentesEs": ["Salmon", "Sardinas", "Caballa", "Semillas de chia", "Linaza", "Nueces de castilla", "Aceite de canola"],
  "fuentesEn": ["Salmon", "Sardines", "Mackerel", "Chia seeds", "Flaxseed", "Walnuts", "Canola oil"],
  "cantidadDiariaRecomendada": "250-500 mg EPA+DHA/dia (1.1-1.6 g ALA/dia)",
  "deficienciaEs": "Asociada a mayor riesgo cardiovascular, deterioro cognitivo, depresion, piel seca y problemas de vision.",
  "deficienciaEn": "Associated with higher cardiovascular risk, cognitive decline, depression, dry skin, and vision problems.",
  "excesoEs": "Dosis muy altas (>3 g/dia) pueden aumentar riesgo de sangrado y suprimir funcion inmune.",
  "excesoEn": "Very high doses (>3 g/day) may increase bleeding risk and suppress immune function.",
  "sintomasDeficienciaEs": ["Piel seca y escamosa", "Fatiga", "Mala concentracion", "Dolor articular", "Cambios de humor", "Ojos secos"],
  "sintomasDeficienciaEn": ["Dry scaly skin", "Fatigue", "Poor concentration", "Joint pain", "Mood changes", "Dry eyes"],
  "grupoRiesgoEs": ["Personas que no consumen pescado", "Veganos", "Mujeres embarazadas con baja ingesta", "Personas con dietas altas en omega-6"],
  "grupoRiesgoEn": ["People who do not eat fish", "Vegans", "Pregnant women with low intake", "People on high omega-6 diets"],
  "categoria": "acidos-grasos"
},
{
  "id": "omega-6",
  "nombreEs": "Acidos grasos Omega-6",
  "nombreEn": "Omega-6 fatty acids",
  "tipoEs": "Acido graso esencial poliinsaturado",
  "tipoEn": "Essential polyunsaturated fatty acid",
  "funcionEs": "Componente de membranas celulares, precursor de eicosanoides proinflamatorios. Necesario en cantidades adecuadas pero en balance con omega-3.",
  "funcionEn": "Cell membrane component, precursor of pro-inflammatory eicosanoids. Needed in adequate amounts but balanced with omega-3.",
  "fuentesEs": ["Aceite de girasol", "Aceite de maiz", "Aceite de soya", "Nueces", "Semillas de girasol", "Carne de ave"],
  "fuentesEn": ["Sunflower oil", "Corn oil", "Soybean oil", "Nuts", "Sunflower seeds", "Poultry"],
  "cantidadDiariaRecomendada": "11-17 g/dia (proporcion omega-6:omega-3 ideal 4:1 o menor)",
  "deficienciaEs": "Rara en dietas occidentales. Causa piel seca, caida del cabello, mala cicatrizacion y susceptibilidad a infecciones.",
  "deficienciaEn": "Rare in Western diets. Causes dry skin, hair loss, poor wound healing, and infection susceptibility.",
  "excesoEs": "El exceso (comun en dietas modernas) promueve inflamacion cronica, asociada a enfermedades cardiovasculares y autoinmunes.",
  "excesoEn": "Excess (common in modern diets) promotes chronic inflammation, associated with cardiovascular and autoimmune diseases.",
  "sintomasDeficienciaEs": ["Piel seca", "Dermatitis", "Caida del cabello", "Problemas reproductivos", "Mala cicatrizacion"],
  "sintomasDeficienciaEn": ["Dry skin", "Dermatitis", "Hair loss", "Reproductive problems", "Poor wound healing"],
  "grupoRiesgoEs": ["Personas con dietas muy bajas en grasa", "Personas con malabsorcion de grasas"],
  "grupoRiesgoEn": ["People on very low-fat diets", "People with fat malabsorption"],
  "categoria": "acidos-grasos"
},
{
  "id": "probioticos",
  "nombreEs": "Probioticos",
  "nombreEn": "Probiotics",
  "tipoEs": "Microorganismos beneficos vivos",
  "tipoEn": "Beneficial live microorganisms",
  "funcionEs": "Bacterias beneficas que mantienen la salud del microbioma intestinal, mejoran digestion, refuerzan inmunidad y producen vitaminas.",
  "funcionEn": "Beneficial bacteria that maintain gut microbiome health, improve digestion, boost immunity, and produce vitamins.",
  "fuentesEs": ["Yogur natural", "Kefir", "Chucrut", "Kimchi", "Miso", "Tempeh", "Kombucha"],
  "fuentesEn": ["Natural yogurt", "Kefir", "Sauerkraut", "Kimchi", "Miso", "Tempeh", "Kombucha"],
  "cantidadDiariaRecomendada": "No establecida oficialmente. Estudios sugieren 1-10 mil millones de UFC/dia",
  "deficienciaEs": "La disbiosis intestinal causa problemas digestivos, sistema inmune debilitado, inflamacion cronica y posibles trastornos del animo.",
  "deficienciaEn": "Gut dysbiosis causes digestive problems, weakened immune system, chronic inflammation, and possible mood disorders.",
  "excesoEs": "Generalmente seguro. En personas inmunocomprometidas puede causar sepsis. Puede causar gases temporales al inicio.",
  "excesoEn": "Generally safe. In immunocompromised people may cause sepsis. May cause temporary gas initially.",
  "sintomasDeficienciaEs": ["Distension abdominal", "Diarrea o estrenimiento", "Infecciones frecuentes", "Fatiga", "Problemas de piel"],
  "sintomasDeficienciaEn": ["Abdominal bloating", "Diarrhea or constipation", "Frequent infections", "Fatigue", "Skin problems"],
  "grupoRiesgoEs": ["Personas que usan antibioticos frecuentemente", "Personas con dietas procesadas", "Personas con estres cronico"],
  "grupoRiesgoEn": ["People who use antibiotics frequently", "People on processed diets", "People with chronic stress"],
  "categoria": "funcionales"
},
{
  "id": "prebioticos",
  "nombreEs": "Prebioticos",
  "nombreEn": "Prebiotics",
  "tipoEs": "Fibras fermentables no digeribles",
  "tipoEn": "Non-digestible fermentable fibers",
  "funcionEs": "Alimento para las bacterias beneficas del intestino. Promueven crecimiento de bifidobacterias y lactobacilos, mejoran absorcion mineral.",
  "funcionEn": "Food for beneficial gut bacteria. Promote growth of bifidobacteria and lactobacilli, improve mineral absorption.",
  "fuentesEs": ["Ajo", "Cebolla", "Puerro", "Esparragos", "Platano verde", "Alcachofa", "Avena", "Linaza"],
  "fuentesEn": ["Garlic", "Onion", "Leek", "Asparagus", "Green banana", "Artichoke", "Oats", "Flaxseed"],
  "cantidadDiariaRecomendada": "3-5 g/dia de fibra prebiotica",
  "deficienciaEs": "La falta de prebioticos empobrece el microbioma, reduciendo la diversidad bacteriana y debilitando la barrera intestinal.",
  "deficienciaEn": "Lack of prebiotics impoverishes the microbiome, reducing bacterial diversity and weakening the intestinal barrier.",
  "excesoEs": "El exceso causa gases, hinchazon abdominal y diarrea. Introducir gradualmente.",
  "excesoEn": "Excess causes gas, abdominal bloating, and diarrhea. Introduce gradually.",
  "sintomasDeficienciaEs": ["Mala digestion", "Estrenimiento", "Hinchazon", "Sistema inmune debilitado", "Mala absorcion de minerales"],
  "sintomasDeficienciaEn": ["Poor digestion", "Constipation", "Bloating", "Weakened immune system", "Poor mineral absorption"],
  "grupoRiesgoEs": ["Personas con dietas bajas en fibra", "Personas con dietas muy procesadas", "Personas que evitan vegetales"],
  "grupoRiesgoEn": ["People on low-fiber diets", "People on highly processed diets", "People who avoid vegetables"],
  "categoria": "funcionales"
},
{
  "id": "antioxidantes",
  "nombreEs": "Antioxidantes",
  "nombreEn": "Antioxidants",
  "tipoEs": "Compuestos protectores diversos",
  "tipoEn": "Diverse protective compounds",
  "funcionEs": "Neutralizan radicales libres que danan celulas. Protegen contra envejecimiento, cancer, enfermedades cardiacas y neurodegenerativas.",
  "funcionEn": "Neutralize free radicals that damage cells. Protect against aging, cancer, heart disease, and neurodegenerative diseases.",
  "fuentesEs": ["Arandanos", "Chocolate oscuro", "Nueces", "Frijoles", "Alcachofas", "Te verde", "Curcuma", "Granada"],
  "fuentesEn": ["Blueberries", "Dark chocolate", "Nuts", "Beans", "Artichokes", "Green tea", "Turmeric", "Pomegranate"],
  "cantidadDiariaRecomendada": "No hay dosis unica. Se recomienda consumir 5-9 porciones de frutas y verduras coloridas al dia.",
  "deficienciaEs": "El deficit de antioxidantes aumenta estres oxidativo, acelerando envejecimiento celular y riesgo de enfermedades cronicas.",
  "deficienciaEn": "Antioxidant deficit increases oxidative stress, accelerating cellular aging and chronic disease risk.",
  "excesoEs": "Suplementos en dosis altas pueden ser prooxidantes. Mega dosis de beta-caroteno aumentan riesgo de cancer pulmonar en fumadores.",
  "excesoEn": "High-dose supplements can be pro-oxidant. Mega doses of beta-carotene increase lung cancer risk in smokers.",
  "sintomasDeficienciaEs": ["Envejecimiento prematuro", "Inflamacion cronica", "Fatiga", "Mala cicatrizacion", "Mayor susceptibilidad a enfermedades"],
  "sintomasDeficienciaEn": ["Premature aging", "Chronic inflammation", "Fatigue", "Poor wound healing", "Greater disease susceptibility"],
  "grupoRiesgoEs": ["Fumadores", "Personas con dietas bajas en frutas y verduras", "Personas con exposicion solar excesiva", "Personas con estres cronico"],
  "grupoRiesgoEn": ["Smokers", "People with low fruit and vegetable intake", "People with excessive sun exposure", "People with chronic stress"],
  "categoria": "funcionales"
}
]`;

const nutrientesRaw5 = `[
{
  "id": "vitamina-b4-colina",
  "nombreEs": "Colina (antes Vitamina B4)",
  "nombreEn": "Choline (formerly Vitamin B4)",
  "tipoEs": "Nutriente esencial similar a vitamina",
  "tipoEn": "Essential vitamin-like nutrient",
  "funcionEs": "Precursor de acetilcolina (neurotransmisor). Esencial para funcion hepatica, desarrollo cerebral, metabolismo de grasas y estructura de membranas celulares.",
  "funcionEn": "Precursor of acetylcholine (neurotransmitter). Essential for liver function, brain development, fat metabolism, and cell membrane structure.",
  "fuentesEs": ["Huevos (yema)", "Higado", "Soya", "Pollo", "Pescado", "Brocoli", "Coliflor"],
  "fuentesEn": ["Eggs (yolk)", "Liver", "Soy", "Chicken", "Fish", "Broccoli", "Cauliflower"],
  "cantidadDiariaRecomendada": "425-550 mg/dia",
  "deficienciaEs": "Causa higado graso no alcoholico, dano muscular y puede afectar el desarrollo cerebral fetal durante el embarazo.",
  "deficienciaEn": "Causes non-alcoholic fatty liver, muscle damage, and may affect fetal brain development during pregnancy.",
  "excesoEs": "Dosis >3.5 g/dia causan olor corporal a pescado, sudoracion excesiva, hipotension y dano hepatico.",
  "excesoEn": "Doses >3.5 g/day cause fishy body odor, excessive sweating, hypotension, and liver damage.",
  "sintomasDeficienciaEs": ["Fatiga", "Problemas de memoria", "Dano hepatico", "Debilidad muscular", "Problemas de concentracion"],
  "sintomasDeficienciaEn": ["Fatigue", "Memory problems", "Liver damage", "Muscle weakness", "Concentration problems"],
  "grupoRiesgoEs": ["Mujeres embarazadas", "Veganos", "Personas con polimorfismos de MTHFR", "Atletas de resistencia"],
  "grupoRiesgoEn": ["Pregnant women", "Vegans", "People with MTHFR polymorphisms", "Endurance athletes"],
  "categoria": "vitaminas"
},
{
  "id": "cromo",
  "nombreEs": "Cromo",
  "nombreEn": "Chromium",
  "tipoEs": "Mineral traza esencial",
  "tipoEn": "Essential trace mineral",
  "funcionEs": "Potencia la accion de la insulina y participa en el metabolismo de carbohidratos, grasas y proteinas. Puede mejorar la sensibilidad a la insulina.",
  "funcionEn": "Enhances insulin action and participates in carbohydrate, fat, and protein metabolism. May improve insulin sensitivity.",
  "fuentesEs": ["Brocoli", "Uvas", "Carne de res", "Granos integrales", "Levadura nutricional", "Papa/patata"],
  "fuentesEn": ["Broccoli", "Grapes", "Beef", "Whole grains", "Nutritional yeast", "Potato"],
  "cantidadDiariaRecomendada": "20-35 mcg/dia",
  "deficienciaEs": "Puede contribuir a intolerancia a la glucosa, resistencia a la insulina y aumento de colesterol y trigliceridos.",
  "deficienciaEn": "May contribute to glucose intolerance, insulin resistance, and increased cholesterol and triglycerides.",
  "excesoEs": "La toxicidad por suplementos es rara pero puede causar dano renal y hepatico. El cromo hexavalente (industrial) es cancerigeno.",
  "excesoEn": "Supplement toxicity is rare but may cause kidney and liver damage. Hexavalent chromium (industrial) is carcinogenic.",
  "sintomasDeficienciaEs": ["Intolerancia a la glucosa", "Niveles altos de azucar", "Fatiga", "Aumento de colesterol", "Neuropatia periferica"],
  "sintomasDeficienciaEn": ["Glucose intolerance", "High blood sugar levels", "Fatigue", "Increased cholesterol", "Peripheral neuropathy"],
  "grupoRiesgoEs": ["Diabeticos", "Adultos mayores", "Atletas con entrenamiento intenso", "Personas con dietas altas en azucar refinado"],
  "grupoRiesgoEn": ["Diabetics", "Elderly adults", "Athletes with intense training", "People on high refined sugar diets"],
  "categoria": "minerales"
}
]`;

// Parse all nutrient chunks and combine
const nutrientesArray: NutrienteInfo[] = [
  ...JSON.parse(nutrientesRaw) as NutrienteInfo[],
  ...JSON.parse(nutrientesRaw2) as NutrienteInfo[],
  ...JSON.parse(nutrientesRaw3) as NutrienteInfo[],
  ...JSON.parse(nutrientesRaw4) as NutrienteInfo[],
  ...JSON.parse(nutrientesRaw5) as NutrienteInfo[]
];

export const NUTRIENTES: NutrienteInfo[] = nutrientesArray;

// ============================================================
// DATOS DE DIETAS ESPECIALES (20+)
// ============================================================

const dietasRaw1 = `[
{
  "id": "dieta-dash",
  "nombreEs": "Dieta DASH (Enfoques Dieteticos para Detener la Hipertension)",
  "nombreEn": "DASH Diet (Dietary Approaches to Stop Hypertension)",
  "descripcionEs": "Plan alimenticio disenado especificamente para reducir la presion arterial. Enfatiza frutas, verduras, granos integrales, proteinas magras y lacteos bajos en grasa, limitando sodio, grasas saturadas y azucares.",
  "descripcionEn": "Eating plan specifically designed to lower blood pressure. Emphasizes fruits, vegetables, whole grains, lean proteins, and low-fat dairy, limiting sodium, saturated fats, and sugars.",
  "indicadaParaEs": ["Hipertension arterial", "Prevencion de enfermedad cardiovascular", "Reduccion de colesterol", "Salud renal"],
  "indicadaParaEn": ["High blood pressure", "Cardiovascular disease prevention", "Cholesterol reduction", "Kidney health"],
  "alimentosPermitidosEs": ["Frutas frescas", "Verduras variadas", "Granos integrales", "Pollo y pescado", "Lacteos bajos en grasa", "Nueces y legumbres"],
  "alimentosPermitidosEn": ["Fresh fruits", "Various vegetables", "Whole grains", "Chicken and fish", "Low-fat dairy", "Nuts and legumes"],
  "alimentosEvitarEs": ["Sal y alimentos con alto sodio", "Carnes grasas", "Bebidas azucaradas", "Dulces y postres", "Alimentos procesados", "Alcohol en exceso"],
  "alimentosEvitarEn": ["Salt and high-sodium foods", "Fatty meats", "Sugary drinks", "Sweets and desserts", "Processed foods", "Excessive alcohol"],
  "beneficiosEs": ["Reduce presion arterial en 8-14 mmHg", "Reduce colesterol LDL", "Disminuye riesgo de accidente cerebrovascular", "Promueve perdida de peso"],
  "beneficiosEn": ["Reduces blood pressure by 8-14 mmHg", "Lowers LDL cholesterol", "Decreases stroke risk", "Promotes weight loss"],
  "riesgosEs": ["Puede ser dificil de seguir inicialmente", "Posible aumento de gases por fibra", "Requiere planificacion de comidas"],
  "riesgosEn": ["May be difficult to follow initially", "Possible increased gas from fiber", "Requires meal planning"],
  "menuEjemploEs": ["Desayuno: Avena con frutas y leche descremada", "Almuerzo: Ensalada de pollo con quinoa y vegetales", "Cena: Salmon al horno con brocoli y arroz integral", "Merienda: Yogur natural con nueces"],
  "menuEjemploEn": ["Breakfast: Oatmeal with fruits and skim milk", "Lunch: Chicken salad with quinoa and vegetables", "Dinner: Baked salmon with broccoli and brown rice", "Snack: Natural yogurt with nuts"],
  "evidenciaCientifica": "Nivel A - Multiples ensayos clinicos aleatorizados demuestran eficacia significativa. Recomendada por AHA, ACC y NIH."
},
{
  "id": "dieta-mediterranea",
  "nombreEs": "Dieta Mediterranea",
  "nombreEn": "Mediterranean Diet",
  "descripcionEs": "Patron alimentario basado en la cocina tradicional de paises mediterraneos. Rica en aceite de oliva, frutas, verduras, pescado, legumbres y granos integrales. Consumo moderado de vino tinto.",
  "descripcionEn": "Eating pattern based on traditional cuisine of Mediterranean countries. Rich in olive oil, fruits, vegetables, fish, legumes, and whole grains. Moderate red wine consumption.",
  "indicadaParaEs": ["Prevencion cardiovascular", "Diabetes tipo 2", "Deterioro cognitivo", "Sindrome metabolico", "Prevencion de cancer"],
  "indicadaParaEn": ["Cardiovascular prevention", "Type 2 diabetes", "Cognitive decline", "Metabolic syndrome", "Cancer prevention"],
  "alimentosPermitidosEs": ["Aceite de oliva extra virgen", "Pescado y mariscos", "Frutas y verduras abundantes", "Legumbres", "Nueces y semillas", "Granos integrales", "Hierbas y especias"],
  "alimentosPermitidosEn": ["Extra virgin olive oil", "Fish and seafood", "Abundant fruits and vegetables", "Legumes", "Nuts and seeds", "Whole grains", "Herbs and spices"],
  "alimentosEvitarEs": ["Carnes rojas (limitar)", "Alimentos procesados", "Azucares refinados", "Mantequilla (usar aceite de oliva)", "Bebidas azucaradas"],
  "alimentosEvitarEn": ["Red meats (limit)", "Processed foods", "Refined sugars", "Butter (use olive oil)", "Sugary drinks"],
  "beneficiosEs": ["Reduce riesgo cardiovascular 30%", "Mejora sensibilidad a la insulina", "Protege funcion cognitiva", "Reduce inflamacion cronica", "Promueve longevidad"],
  "beneficiosEn": ["Reduces cardiovascular risk by 30%", "Improves insulin sensitivity", "Protects cognitive function", "Reduces chronic inflammation", "Promotes longevity"],
  "riesgosEs": ["Costo potencialmente mayor", "Consumo de alcohol no recomendado para todos", "Requiere preparacion de comidas frescas"],
  "riesgosEn": ["Potentially higher cost", "Alcohol consumption not recommended for everyone", "Requires fresh meal preparation"],
  "menuEjemploEs": ["Desayuno: Pan integral con aceite de oliva y tomate", "Almuerzo: Ensalada griega con garbanzos y atun", "Cena: Pollo a la plancha con verduras asadas y aceite de oliva", "Merienda: Frutas frescas con almendras"],
  "menuEjemploEn": ["Breakfast: Whole grain bread with olive oil and tomato", "Lunch: Greek salad with chickpeas and tuna", "Dinner: Grilled chicken with roasted vegetables and olive oil", "Snack: Fresh fruits with almonds"],
  "evidenciaCientifica": "Nivel A - Estudio PREDIMED y multiples metaanalisis. Evidencia robusta para prevencion cardiovascular y diabetes."
},
{
  "id": "dieta-baja-sodio",
  "nombreEs": "Dieta baja en sodio",
  "nombreEn": "Low-sodium diet",
  "descripcionEs": "Restriccion de ingesta de sodio a menos de 2000 mg/dia. Fundamental para el manejo de hipertension, insuficiencia cardiaca y enfermedad renal.",
  "descripcionEn": "Sodium intake restriction to less than 2000 mg/day. Fundamental for managing hypertension, heart failure, and kidney disease.",
  "indicadaParaEs": ["Hipertension arterial", "Insuficiencia cardiaca", "Enfermedad renal cronica", "Cirrosis con ascitis", "Edema"],
  "indicadaParaEn": ["High blood pressure", "Heart failure", "Chronic kidney disease", "Cirrhosis with ascites", "Edema"],
  "alimentosPermitidosEs": ["Frutas frescas", "Verduras sin sal", "Carnes frescas sin procesar", "Granos integrales", "Hierbas y especias como sazonador", "Aceite de oliva"],
  "alimentosPermitidosEn": ["Fresh fruits", "Unsalted vegetables", "Fresh unprocessed meats", "Whole grains", "Herbs and spices as seasoning", "Olive oil"],
  "alimentosEvitarEs": ["Sal de mesa", "Sopas enlatadas", "Embutidos y carnes procesadas", "Comida rapida", "Salsas comerciales", "Quesos curados", "Encurtidos"],
  "alimentosEvitarEn": ["Table salt", "Canned soups", "Deli meats and processed meats", "Fast food", "Commercial sauces", "Aged cheeses", "Pickles"],
  "beneficiosEs": ["Reduce presion arterial", "Disminuye retencion de liquidos", "Mejora funcion cardiaca", "Protege rinones"],
  "beneficiosEn": ["Reduces blood pressure", "Decreases fluid retention", "Improves heart function", "Protects kidneys"],
  "riesgosEs": ["Puede resultar insipida al inicio", "Riesgo de hiponatremia si restriccion excesiva", "Dificultad al comer fuera de casa"],
  "riesgosEn": ["May taste bland initially", "Risk of hyponatremia if overly restricted", "Difficulty eating out"],
  "menuEjemploEs": ["Desayuno: Avena con canela y frutas frescas", "Almuerzo: Ensalada de pollo con limon y hierbas", "Cena: Pescado al vapor con verduras sazonadas con ajo y limon", "Merienda: Manzana con mantequilla de almendras sin sal"],
  "menuEjemploEn": ["Breakfast: Oatmeal with cinnamon and fresh fruit", "Lunch: Chicken salad with lemon and herbs", "Dinner: Steamed fish with garlic and lemon-seasoned vegetables", "Snack: Apple with unsalted almond butter"],
  "evidenciaCientifica": "Nivel A - Guias de AHA y ESC recomiendan restriccion de sodio para hipertension e insuficiencia cardiaca."
},
{
  "id": "dieta-diabetes",
  "nombreEs": "Dieta para diabetes",
  "nombreEn": "Diabetic diet",
  "descripcionEs": "Plan alimenticio que controla los niveles de glucosa en sangre mediante el manejo de carbohidratos, porciones y horarios de comida regulares. Personalizada segun tipo de diabetes y tratamiento.",
  "descripcionEn": "Eating plan that controls blood glucose levels through carbohydrate management, portion control, and regular meal timing. Personalized based on diabetes type and treatment.",
  "indicadaParaEs": ["Diabetes tipo 1", "Diabetes tipo 2", "Diabetes gestacional", "Prediabetes", "Resistencia a la insulina"],
  "indicadaParaEn": ["Type 1 diabetes", "Type 2 diabetes", "Gestational diabetes", "Prediabetes", "Insulin resistance"],
  "alimentosPermitidosEs": ["Verduras sin almidon", "Granos integrales en porciones controladas", "Proteinas magras", "Grasas saludables", "Frutas en moderacion", "Legumbres"],
  "alimentosPermitidosEn": ["Non-starchy vegetables", "Whole grains in controlled portions", "Lean proteins", "Healthy fats", "Fruits in moderation", "Legumes"],
  "alimentosEvitarEs": ["Bebidas azucaradas", "Dulces y postres", "Pan blanco y arroz blanco", "Jugos de fruta", "Alimentos fritos", "Cereales azucarados"],
  "alimentosEvitarEn": ["Sugary drinks", "Sweets and desserts", "White bread and white rice", "Fruit juices", "Fried foods", "Sugary cereals"],
  "beneficiosEs": ["Control de glucosa en sangre", "Reduce hemoglobina A1c", "Previene complicaciones diabeticas", "Promueve peso saludable", "Mejora perfil lipidico"],
  "beneficiosEn": ["Blood glucose control", "Reduces hemoglobin A1c", "Prevents diabetic complications", "Promotes healthy weight", "Improves lipid profile"],
  "riesgosEs": ["Riesgo de hipoglucemia si restriccion excesiva con insulina", "Puede ser compleja de seguir", "Requiere monitoreo constante"],
  "riesgosEn": ["Hypoglycemia risk if over-restricted with insulin", "Can be complex to follow", "Requires constant monitoring"],
  "menuEjemploEs": ["Desayuno: Huevos revueltos con espinacas y pan integral", "Almuerzo: Pechuga de pollo con ensalada y quinoa", "Cena: Salmon con brocoli al vapor y batata pequena", "Merienda: Nueces con rodajas de pepino"],
  "menuEjemploEn": ["Breakfast: Scrambled eggs with spinach and whole grain toast", "Lunch: Chicken breast with salad and quinoa", "Dinner: Salmon with steamed broccoli and small sweet potato", "Snack: Nuts with cucumber slices"],
  "evidenciaCientifica": "Nivel A - ADA recomienda terapia nutricional individualizada. Reduce A1c 0.5-2% segun adherencia."
},
{
  "id": "dieta-sin-gluten",
  "nombreEs": "Dieta sin gluten (celiaca)",
  "nombreEn": "Gluten-free diet (celiac)",
  "descripcionEs": "Eliminacion completa del gluten (proteina en trigo, cebada y centeno). Es el unico tratamiento para la enfermedad celiaca y puede beneficiar a personas con sensibilidad al gluten no celiaca.",
  "descripcionEn": "Complete elimination of gluten (protein in wheat, barley, and rye). The only treatment for celiac disease and may benefit people with non-celiac gluten sensitivity.",
  "indicadaParaEs": ["Enfermedad celiaca", "Sensibilidad al gluten no celiaca", "Dermatitis herpetiforme", "Ataxia por gluten"],
  "indicadaParaEn": ["Celiac disease", "Non-celiac gluten sensitivity", "Dermatitis herpetiformis", "Gluten ataxia"],
  "alimentosPermitidosEs": ["Arroz", "Maiz", "Quinoa", "Papa/patata", "Frutas y verduras", "Carne y pescado frescos", "Legumbres", "Amaranto"],
  "alimentosPermitidosEn": ["Rice", "Corn", "Quinoa", "Potato", "Fruits and vegetables", "Fresh meat and fish", "Legumes", "Amaranth"],
  "alimentosEvitarEs": ["Trigo (pan, pasta, galletas)", "Cebada", "Centeno", "Avena contaminada", "Cerveza regular", "Salsas con gluten", "Alimentos procesados con gluten oculto"],
  "alimentosEvitarEn": ["Wheat (bread, pasta, cookies)", "Barley", "Rye", "Contaminated oats", "Regular beer", "Sauces with gluten", "Processed foods with hidden gluten"],
  "beneficiosEs": ["Curacion de la mucosa intestinal", "Resolucion de sintomas gastrointestinales", "Mejora absorcion de nutrientes", "Reduce riesgo de linfoma en celiacos"],
  "beneficiosEn": ["Intestinal mucosa healing", "Resolution of GI symptoms", "Improved nutrient absorption", "Reduces lymphoma risk in celiacs"],
  "riesgosEs": ["Deficiencias de fibra, hierro y vitaminas B si no se planifica", "Productos sin gluten pueden ser altos en azucar y grasa", "Contaminacion cruzada"],
  "riesgosEn": ["Fiber, iron, and B vitamin deficiencies if unplanned", "Gluten-free products may be high in sugar and fat", "Cross-contamination"],
  "menuEjemploEs": ["Desayuno: Tortilla de huevo con verduras y fruta", "Almuerzo: Pollo a la plancha con arroz y ensalada", "Cena: Filete de pescado con quinoa y verduras asadas", "Merienda: Yogur con frutas y semillas de chia"],
  "menuEjemploEn": ["Breakfast: Vegetable omelet with fruit", "Lunch: Grilled chicken with rice and salad", "Dinner: Fish fillet with quinoa and roasted vegetables", "Snack: Yogurt with fruits and chia seeds"],
  "evidenciaCientifica": "Nivel A - Unico tratamiento basado en evidencia para enfermedad celiaca. Guias ACG, ESPGHAN."
}
]`;

const dietasRaw2 = `[
{
  "id": "dieta-baja-fodmap",
  "nombreEs": "Dieta baja en FODMAP",
  "nombreEn": "Low-FODMAP diet",
  "descripcionEs": "Elimina temporalmente carbohidratos fermentables de cadena corta (oligosacaridos, disacaridos, monosacaridos y polioles) para aliviar sintomas del sindrome de intestino irritable.",
  "descripcionEn": "Temporarily eliminates short-chain fermentable carbohydrates (oligosaccharides, disaccharides, monosaccharides, and polyols) to relieve irritable bowel syndrome symptoms.",
  "indicadaParaEs": ["Sindrome de intestino irritable (SII)", "Distension abdominal cronica", "SIBO", "Enfermedad inflamatoria intestinal (coadyuvante)"],
  "indicadaParaEn": ["Irritable bowel syndrome (IBS)", "Chronic abdominal bloating", "SIBO", "Inflammatory bowel disease (adjunct)"],
  "alimentosPermitidosEs": ["Arroz", "Papa/patata", "Zanahoria", "Pepino", "Pollo", "Pescado", "Huevos", "Platano firme", "Naranja", "Espinacas"],
  "alimentosPermitidosEn": ["Rice", "Potato", "Carrot", "Cucumber", "Chicken", "Fish", "Eggs", "Firm banana", "Orange", "Spinach"],
  "alimentosEvitarEs": ["Ajo y cebolla", "Trigo en exceso", "Manzana y pera", "Leche (lactosa)", "Miel", "Legumbres", "Coliflor", "Champiñones"],
  "alimentosEvitarEn": ["Garlic and onion", "Excess wheat", "Apple and pear", "Milk (lactose)", "Honey", "Legumes", "Cauliflower", "Mushrooms"],
  "beneficiosEs": ["Alivia hinchazón en 70% de pacientes con SII", "Reduce dolor abdominal", "Mejora habitos intestinales", "Identifica desencadenantes alimentarios"],
  "beneficiosEn": ["Relieves bloating in 70% of IBS patients", "Reduces abdominal pain", "Improves bowel habits", "Identifies food triggers"],
  "riesgosEs": ["Es restrictiva y dificil de seguir", "No debe ser permanente", "Puede reducir bacterias beneficas si se prolonga", "Requiere guia profesional"],
  "riesgosEn": ["Restrictive and hard to follow", "Should not be permanent", "May reduce beneficial bacteria if prolonged", "Requires professional guidance"],
  "menuEjemploEs": ["Desayuno: Huevos con espinacas y pan sin gluten", "Almuerzo: Pollo a la plancha con arroz y zanahoria", "Cena: Salmon con papa al horno y pepino", "Merienda: Platano firme con mantequilla de mani"],
  "menuEjemploEn": ["Breakfast: Eggs with spinach and gluten-free bread", "Lunch: Grilled chicken with rice and carrots", "Dinner: Salmon with baked potato and cucumber", "Snack: Firm banana with peanut butter"],
  "evidenciaCientifica": "Nivel A - Estudios de la Universidad de Monash. Eficacia demostrada en 70-75% de pacientes con SII."
},
{
  "id": "dieta-renal",
  "nombreEs": "Dieta renal",
  "nombreEn": "Renal diet",
  "descripcionEs": "Restriccion de sodio, potasio, fosforo y proteinas para proteger los rinones en personas con enfermedad renal cronica. Se ajusta segun el estadio de la enfermedad.",
  "descripcionEn": "Restriction of sodium, potassium, phosphorus, and protein to protect kidneys in people with chronic kidney disease. Adjusted based on disease stage.",
  "indicadaParaEs": ["Enfermedad renal cronica (estadios 3-5)", "Pacientes en dialisis", "Post-trasplante renal", "Insuficiencia renal aguda"],
  "indicadaParaEn": ["Chronic kidney disease (stages 3-5)", "Dialysis patients", "Post-kidney transplant", "Acute kidney injury"],
  "alimentosPermitidosEs": ["Manzana", "Arándanos", "Col/repollo", "Pimiento rojo", "Arroz blanco", "Pan blanco", "Pollo en porciones controladas"],
  "alimentosPermitidosEn": ["Apple", "Blueberries", "Cabbage", "Red bell pepper", "White rice", "White bread", "Chicken in controlled portions"],
  "alimentosEvitarEs": ["Platano (alto en potasio)", "Naranja", "Tomate", "Papa/patata", "Lacteos (fosforo)", "Nueces", "Granos integrales", "Chocolate"],
  "alimentosEvitarEn": ["Banana (high potassium)", "Orange", "Tomato", "Potato", "Dairy (phosphorus)", "Nuts", "Whole grains", "Chocolate"],
  "beneficiosEs": ["Retarda progresion de enfermedad renal", "Controla niveles de electrolitos", "Reduce acumulacion de toxinas", "Mejora calidad de vida en dialisis"],
  "beneficiosEn": ["Slows kidney disease progression", "Controls electrolyte levels", "Reduces toxin buildup", "Improves quality of life on dialysis"],
  "riesgosEs": ["Muy restrictiva", "Riesgo de desnutricion", "Requiere supervision de nefrologo y nutricionista", "Puede causar perdida muscular"],
  "riesgosEn": ["Very restrictive", "Malnutrition risk", "Requires nephrologist and dietitian supervision", "May cause muscle wasting"],
  "menuEjemploEs": ["Desayuno: Pan blanco con mermelada y clara de huevo", "Almuerzo: Pollo con arroz y col salteada", "Cena: Pescado blanco con pimiento y pasta", "Merienda: Manzana con galletas bajas en sodio"],
  "menuEjemploEn": ["Breakfast: White bread with jam and egg white", "Lunch: Chicken with rice and sauteed cabbage", "Dinner: White fish with peppers and pasta", "Snack: Apple with low-sodium crackers"],
  "evidenciaCientifica": "Nivel A - Guias KDIGO y NKF recomiendan manejo nutricional como pilar del tratamiento renal."
},
{
  "id": "dieta-baja-colesterol",
  "nombreEs": "Dieta baja en colesterol",
  "nombreEn": "Low-cholesterol diet",
  "descripcionEs": "Limita la ingesta de grasas saturadas, grasas trans y colesterol dietetico para reducir el colesterol LDL en sangre y el riesgo cardiovascular.",
  "descripcionEn": "Limits intake of saturated fats, trans fats, and dietary cholesterol to reduce blood LDL cholesterol and cardiovascular risk.",
  "indicadaParaEs": ["Hipercolesterolemia", "Enfermedad coronaria", "Aterosclerosis", "Despues de evento cardiovascular", "Prevencion cardiovascular"],
  "indicadaParaEn": ["Hypercholesterolemia", "Coronary artery disease", "Atherosclerosis", "After cardiovascular event", "Cardiovascular prevention"],
  "alimentosPermitidosEs": ["Avena", "Legumbres", "Nueces", "Aceite de oliva", "Pescado graso", "Frutas", "Verduras", "Soya"],
  "alimentosPermitidosEn": ["Oats", "Legumes", "Nuts", "Olive oil", "Fatty fish", "Fruits", "Vegetables", "Soy"],
  "alimentosEvitarEs": ["Carnes grasas", "Embutidos", "Mantequilla", "Queso graso", "Frituras", "Bolleria industrial", "Visceras"],
  "alimentosEvitarEn": ["Fatty meats", "Cold cuts", "Butter", "Full-fat cheese", "Fried foods", "Industrial pastries", "Organ meats"],
  "beneficiosEs": ["Reduce colesterol LDL 10-20%", "Disminuye riesgo de infarto", "Mejora salud arterial", "Puede reducir necesidad de estatinas"],
  "beneficiosEn": ["Reduces LDL cholesterol 10-20%", "Decreases heart attack risk", "Improves arterial health", "May reduce need for statins"],
  "riesgosEs": ["Insuficiente por si sola para hipercolesterolemia familiar", "Puede ser restrictiva socialmente", "Requiere leer etiquetas cuidadosamente"],
  "riesgosEn": ["Insufficient alone for familial hypercholesterolemia", "Can be socially restrictive", "Requires careful label reading"],
  "menuEjemploEs": ["Desayuno: Avena con linaza y arandanos", "Almuerzo: Lentejas con ensalada y aceite de oliva", "Cena: Salmon con espinacas y quinoa", "Merienda: Nueces y manzana"],
  "menuEjemploEn": ["Breakfast: Oatmeal with flaxseed and blueberries", "Lunch: Lentils with salad and olive oil", "Dinner: Salmon with spinach and quinoa", "Snack: Walnuts and apple"],
  "evidenciaCientifica": "Nivel A - ATP III y guias ACC/AHA recomiendan cambios dieteticos como primera linea de tratamiento."
},
{
  "id": "dieta-antiinflamatoria",
  "nombreEs": "Dieta antiinflamatoria",
  "nombreEn": "Anti-inflammatory diet",
  "descripcionEs": "Patron alimentario que minimiza alimentos proinflamatorios y maximiza antioxidantes, omega-3 y fitonutrientes para reducir la inflamacion cronica sistemica.",
  "descripcionEn": "Eating pattern that minimizes pro-inflammatory foods and maximizes antioxidants, omega-3s, and phytonutrients to reduce chronic systemic inflammation.",
  "indicadaParaEs": ["Artritis reumatoide", "Enfermedades autoinmunes", "Sindrome metabolico", "Dolor cronico", "Envejecimiento saludable"],
  "indicadaParaEn": ["Rheumatoid arthritis", "Autoimmune diseases", "Metabolic syndrome", "Chronic pain", "Healthy aging"],
  "alimentosPermitidosEs": ["Pescado graso (salmon, sardinas)", "Aceite de oliva extra virgen", "Curcuma y jengibre", "Frutas del bosque", "Vegetales de hoja verde", "Nueces", "Te verde"],
  "alimentosPermitidosEn": ["Fatty fish (salmon, sardines)", "Extra virgin olive oil", "Turmeric and ginger", "Berries", "Leafy green vegetables", "Nuts", "Green tea"],
  "alimentosEvitarEs": ["Azucar refinado", "Harinas blancas", "Aceites de semillas refinados", "Alimentos ultraprocesados", "Carnes procesadas", "Alcohol en exceso", "Grasas trans"],
  "alimentosEvitarEn": ["Refined sugar", "White flours", "Refined seed oils", "Ultra-processed foods", "Processed meats", "Excessive alcohol", "Trans fats"],
  "beneficiosEs": ["Reduce marcadores inflamatorios (PCR, IL-6)", "Alivia dolor articular", "Mejora salud cardiovascular", "Puede reducir riesgo de cancer"],
  "beneficiosEn": ["Reduces inflammatory markers (CRP, IL-6)", "Relieves joint pain", "Improves cardiovascular health", "May reduce cancer risk"],
  "riesgosEs": ["Puede ser costosa", "Requiere cambio de habitos significativo", "No sustituye tratamiento medico para condiciones autoinmunes"],
  "riesgosEn": ["Can be expensive", "Requires significant habit changes", "Does not replace medical treatment for autoimmune conditions"],
  "menuEjemploEs": ["Desayuno: Batido de espinacas con arandanos y semillas de chia", "Almuerzo: Sardinas con ensalada mixta y aceite de oliva", "Cena: Curry de pollo con curcuma, jengibre y verduras", "Merienda: Te verde con nueces y chocolate oscuro"],
  "menuEjemploEn": ["Breakfast: Spinach smoothie with blueberries and chia seeds", "Lunch: Sardines with mixed salad and olive oil", "Dinner: Chicken curry with turmeric, ginger, and vegetables", "Snack: Green tea with walnuts and dark chocolate"],
  "evidenciaCientifica": "Nivel B - Evidencia creciente de multiples estudios observacionales y algunos ensayos clinicos."
},
{
  "id": "dieta-reflujo-gerd",
  "nombreEs": "Dieta para reflujo gastroesofagico (ERGE)",
  "nombreEn": "GERD diet (Gastroesophageal reflux)",
  "descripcionEs": "Evita alimentos que relajan el esfinter esofagico inferior o irritan la mucosa esofagica para reducir sintomas de acidez y reflujo.",
  "descripcionEn": "Avoids foods that relax the lower esophageal sphincter or irritate esophageal mucosa to reduce heartburn and reflux symptoms.",
  "indicadaParaEs": ["Enfermedad por reflujo gastroesofagico", "Esofagitis", "Esofago de Barrett", "Hernia hiatal", "Acidez cronica"],
  "indicadaParaEn": ["Gastroesophageal reflux disease", "Esophagitis", "Barrett's esophagus", "Hiatal hernia", "Chronic heartburn"],
  "alimentosPermitidosEs": ["Avena", "Jengibre", "Verduras verdes", "Platano", "Melon", "Pollo magro", "Pescado", "Arroz"],
  "alimentosPermitidosEn": ["Oatmeal", "Ginger", "Green vegetables", "Banana", "Melon", "Lean chicken", "Fish", "Rice"],
  "alimentosEvitarEs": ["Cafe y te con cafeina", "Chocolate", "Menta", "Tomate y salsas de tomate", "Citricos", "Alimentos picantes", "Frituras", "Alcohol", "Cebolla cruda"],
  "alimentosEvitarEn": ["Coffee and caffeinated tea", "Chocolate", "Mint", "Tomato and tomato sauces", "Citrus", "Spicy foods", "Fried foods", "Alcohol", "Raw onion"],
  "beneficiosEs": ["Reduce frecuencia de reflujo", "Mejora calidad del sueno", "Puede disminuir necesidad de medicamentos", "Protege el esofago"],
  "beneficiosEn": ["Reduces reflux frequency", "Improves sleep quality", "May decrease medication need", "Protects the esophagus"],
  "riesgosEs": ["Restricciones pueden ser dificiles de mantener", "Desencadenantes varian entre personas", "No elimina reflujo en todos los casos"],
  "riesgosEn": ["Restrictions can be hard to maintain", "Triggers vary between individuals", "Does not eliminate reflux in all cases"],
  "menuEjemploEs": ["Desayuno: Avena con platano y miel (poca)", "Almuerzo: Pechuga de pollo con arroz y brocoli", "Cena: Pescado al horno con verduras suaves (3 horas antes de dormir)", "Merienda: Melon con yogur natural"],
  "menuEjemploEn": ["Breakfast: Oatmeal with banana and a little honey", "Lunch: Chicken breast with rice and broccoli", "Dinner: Baked fish with mild vegetables (3 hours before bed)", "Snack: Melon with natural yogurt"],
  "evidenciaCientifica": "Nivel B - Guias ACG recomiendan modificaciones dieteticas como parte del manejo de ERGE."
}
]`;

const dietasRaw3 = `[
{
  "id": "dieta-vegetariana",
  "nombreEs": "Dieta vegetariana",
  "nombreEn": "Vegetarian diet",
  "descripcionEs": "Excluye carne, aves y pescado, pero permite huevos (ovo) y/o lacteos (lacto). Rica en alimentos de origen vegetal con multiples variantes.",
  "descripcionEn": "Excludes meat, poultry, and fish but allows eggs (ovo) and/or dairy (lacto). Rich in plant-based foods with multiple variants.",
  "indicadaParaEs": ["Prevencion cardiovascular", "Control de peso", "Prevencion de diabetes tipo 2", "Salud ambiental", "Razones eticas"],
  "indicadaParaEn": ["Cardiovascular prevention", "Weight management", "Type 2 diabetes prevention", "Environmental health", "Ethical reasons"],
  "alimentosPermitidosEs": ["Legumbres", "Granos integrales", "Verduras y frutas", "Huevos (ovo-vegetariano)", "Lacteos (lacto-vegetariano)", "Nueces y semillas", "Tofu y tempeh"],
  "alimentosPermitidosEn": ["Legumes", "Whole grains", "Vegetables and fruits", "Eggs (ovo-vegetarian)", "Dairy (lacto-vegetarian)", "Nuts and seeds", "Tofu and tempeh"],
  "alimentosEvitarEs": ["Carne roja", "Pollo y aves", "Pescado y mariscos", "Gelatina animal", "Caldos de carne"],
  "alimentosEvitarEn": ["Red meat", "Chicken and poultry", "Fish and seafood", "Animal gelatin", "Meat broths"],
  "beneficiosEs": ["Menor riesgo cardiovascular", "Menor riesgo de diabetes tipo 2", "IMC mas bajo en promedio", "Menor huella ambiental"],
  "beneficiosEn": ["Lower cardiovascular risk", "Lower type 2 diabetes risk", "Lower average BMI", "Smaller environmental footprint"],
  "riesgosEs": ["Posible deficiencia de B12, hierro, zinc, omega-3", "Requiere planificacion cuidadosa", "Riesgo de proteina incompleta si no se combinan alimentos"],
  "riesgosEn": ["Possible B12, iron, zinc, omega-3 deficiency", "Requires careful planning", "Risk of incomplete protein if foods not combined"],
  "menuEjemploEs": ["Desayuno: Tostada integral con aguacate y huevo", "Almuerzo: Bowl de garbanzos con quinoa y verduras", "Cena: Pasta integral con salsa de tomate y lentejas", "Merienda: Yogur con frutas y granola"],
  "menuEjemploEn": ["Breakfast: Whole grain toast with avocado and egg", "Lunch: Chickpea bowl with quinoa and vegetables", "Dinner: Whole grain pasta with tomato sauce and lentils", "Snack: Yogurt with fruits and granola"],
  "evidenciaCientifica": "Nivel A - Posicion de la AND: dieta vegetariana bien planificada es saludable y nutricionalmente adecuada."
},
{
  "id": "dieta-vegana",
  "nombreEs": "Dieta vegana",
  "nombreEn": "Vegan diet",
  "descripcionEs": "Excluye todos los productos de origen animal: carne, lacteos, huevos, miel. Basada exclusivamente en alimentos vegetales.",
  "descripcionEn": "Excludes all animal products: meat, dairy, eggs, honey. Based exclusively on plant foods.",
  "indicadaParaEs": ["Prevencion cardiovascular", "Control de peso", "Razones eticas y ambientales", "Reduccion de inflamacion"],
  "indicadaParaEn": ["Cardiovascular prevention", "Weight management", "Ethical and environmental reasons", "Inflammation reduction"],
  "alimentosPermitidosEs": ["Legumbres", "Granos integrales", "Frutas y verduras", "Nueces y semillas", "Tofu, tempeh, seitán", "Leches vegetales fortificadas", "Levadura nutricional"],
  "alimentosPermitidosEn": ["Legumes", "Whole grains", "Fruits and vegetables", "Nuts and seeds", "Tofu, tempeh, seitan", "Fortified plant milks", "Nutritional yeast"],
  "alimentosEvitarEs": ["Carne y pescado", "Lacteos", "Huevos", "Miel", "Gelatina", "Cualquier producto animal"],
  "alimentosEvitarEn": ["Meat and fish", "Dairy", "Eggs", "Honey", "Gelatin", "Any animal product"],
  "beneficiosEs": ["Menor riesgo de enfermedad cardiaca", "Menor huella de carbono", "Puede mejorar sensibilidad a insulina", "Mayor ingesta de fibra y antioxidantes"],
  "beneficiosEn": ["Lower heart disease risk", "Smaller carbon footprint", "May improve insulin sensitivity", "Higher fiber and antioxidant intake"],
  "riesgosEs": ["Deficiencia de B12 casi segura sin suplemento", "Riesgo de deficiencia de hierro, calcio, zinc, omega-3, vitamina D", "Proteina puede ser insuficiente sin planificacion"],
  "riesgosEn": ["B12 deficiency almost certain without supplement", "Risk of iron, calcium, zinc, omega-3, vitamin D deficiency", "Protein may be insufficient without planning"],
  "menuEjemploEs": ["Desayuno: Batido de espinacas, platano, leche de almendra y linaza", "Almuerzo: Tacos de frijoles negros con aguacate y salsa", "Cena: Curry de garbanzos con arroz integral y verduras", "Merienda: Hummus con palitos de zanahoria"],
  "menuEjemploEn": ["Breakfast: Spinach, banana, almond milk, and flaxseed smoothie", "Lunch: Black bean tacos with avocado and salsa", "Dinner: Chickpea curry with brown rice and vegetables", "Snack: Hummus with carrot sticks"],
  "evidenciaCientifica": "Nivel B - Evidencia apoya beneficios cardiovasculares. Suplementacion de B12 es obligatoria. Posicion AND favorable si bien planificada."
},
{
  "id": "dieta-cetogenica",
  "nombreEs": "Dieta cetogenica (keto)",
  "nombreEn": "Ketogenic diet (keto)",
  "descripcionEs": "Dieta muy baja en carbohidratos (<50 g/dia), alta en grasas y moderada en proteinas que induce cetosis. El cuerpo usa cetonas como combustible principal.",
  "descripcionEn": "Very low-carbohydrate diet (<50 g/day), high in fats and moderate in protein that induces ketosis. The body uses ketones as primary fuel.",
  "indicadaParaEs": ["Epilepsia refractaria (uso medico original)", "Perdida de peso", "Diabetes tipo 2 (con supervision)", "Sindrome metabolico"],
  "indicadaParaEn": ["Refractory epilepsy (original medical use)", "Weight loss", "Type 2 diabetes (with supervision)", "Metabolic syndrome"],
  "alimentosPermitidosEs": ["Aguacate", "Aceite de oliva y coco", "Carne y pescado", "Huevos", "Queso", "Nueces", "Verduras bajas en carbohidratos", "Mantequilla"],
  "alimentosPermitidosEn": ["Avocado", "Olive oil and coconut oil", "Meat and fish", "Eggs", "Cheese", "Nuts", "Low-carb vegetables", "Butter"],
  "alimentosEvitarEs": ["Pan y cereales", "Arroz y pasta", "Azucar y dulces", "Frutas (excepto bayas en pequenas cantidades)", "Legumbres", "Tuberculos", "Leche"],
  "alimentosEvitarEn": ["Bread and cereals", "Rice and pasta", "Sugar and sweets", "Fruits (except berries in small amounts)", "Legumes", "Root vegetables", "Milk"],
  "beneficiosEs": ["Rapida perdida de peso inicial", "Reduce convulsiones en epilepsia", "Puede mejorar control glucemico", "Reduce trigliceridos"],
  "beneficiosEn": ["Rapid initial weight loss", "Reduces seizures in epilepsy", "May improve glycemic control", "Reduces triglycerides"],
  "riesgosEs": ["Gripe cetogenica inicial", "Estrenimiento", "Mal aliento", "Calculos renales", "Aumento de colesterol LDL en algunos", "No recomendada a largo plazo sin supervision", "Deficiencias nutricionales"],
  "riesgosEn": ["Initial keto flu", "Constipation", "Bad breath", "Kidney stones", "LDL cholesterol increase in some", "Not recommended long-term without supervision", "Nutritional deficiencies"],
  "menuEjemploEs": ["Desayuno: Huevos con aguacate y tocino", "Almuerzo: Ensalada con pollo, aceite de oliva y queso", "Cena: Salmon con esparragos en mantequilla", "Merienda: Nueces de macadamia y queso"],
  "menuEjemploEn": ["Breakfast: Eggs with avocado and bacon", "Lunch: Salad with chicken, olive oil, and cheese", "Dinner: Salmon with asparagus in butter", "Snack: Macadamia nuts and cheese"],
  "evidenciaCientifica": "Nivel A para epilepsia. Nivel B para perdida de peso a corto plazo. Evidencia limitada a largo plazo."
},
{
  "id": "dieta-embarazo",
  "nombreEs": "Dieta para el embarazo",
  "nombreEn": "Pregnancy diet",
  "descripcionEs": "Plan alimenticio que asegura nutrientes adecuados para el desarrollo fetal y la salud materna. Enfasis en acido folico, hierro, calcio, DHA y proteinas.",
  "descripcionEn": "Eating plan ensuring adequate nutrients for fetal development and maternal health. Emphasis on folic acid, iron, calcium, DHA, and protein.",
  "indicadaParaEs": ["Embarazo", "Planificacion preconcepcional", "Embarazo de alto riesgo"],
  "indicadaParaEn": ["Pregnancy", "Preconception planning", "High-risk pregnancy"],
  "alimentosPermitidosEs": ["Verduras de hoja verde (folato)", "Carne bien cocida", "Salmon bajo en mercurio", "Lacteos pasteurizados", "Legumbres", "Huevos bien cocidos", "Frutas variadas", "Granos integrales"],
  "alimentosPermitidosEn": ["Leafy green vegetables (folate)", "Well-cooked meat", "Low-mercury salmon", "Pasteurized dairy", "Legumes", "Well-cooked eggs", "Varied fruits", "Whole grains"],
  "alimentosEvitarEs": ["Pescado alto en mercurio (tiburon, pez espada)", "Carne cruda o poco cocida", "Quesos blandos no pasteurizados", "Alcohol (ninguna cantidad segura)", "Exceso de cafeina (>200 mg)", "Sushi crudo"],
  "alimentosEvitarEn": ["High-mercury fish (shark, swordfish)", "Raw or undercooked meat", "Unpasteurized soft cheeses", "Alcohol (no safe amount)", "Excess caffeine (>200 mg)", "Raw sushi"],
  "beneficiosEs": ["Desarrollo fetal optimo", "Prevencion de defectos del tubo neural", "Reduccion de parto prematuro", "Peso saludable al nacer", "Salud materna"],
  "beneficiosEn": ["Optimal fetal development", "Neural tube defect prevention", "Reduced preterm birth", "Healthy birth weight", "Maternal health"],
  "riesgosEs": ["Aumento excesivo de peso si no se controlan porciones", "Deficiencias si dieta es inadecuada", "Riesgo de listeriosis con alimentos crudos"],
  "riesgosEn": ["Excessive weight gain if portions not controlled", "Deficiencies if diet is inadequate", "Listeriosis risk with raw foods"],
  "menuEjemploEs": ["Desayuno: Avena con frutas y leche fortificada", "Almuerzo: Pollo con espinacas, garbanzos y arroz integral", "Cena: Salmon al horno con brocoli y batata", "Merienda: Yogur con nueces y semillas"],
  "menuEjemploEn": ["Breakfast: Oatmeal with fruits and fortified milk", "Lunch: Chicken with spinach, chickpeas, and brown rice", "Dinner: Baked salmon with broccoli and sweet potato", "Snack: Yogurt with nuts and seeds"],
  "evidenciaCientifica": "Nivel A - Guias de ACOG, OMS y ADA. Suplementacion de acido folico tiene evidencia de nivel A para prevencion de defectos del tubo neural."
},
{
  "id": "dieta-lactancia",
  "nombreEs": "Dieta para lactancia",
  "nombreEn": "Breastfeeding diet",
  "descripcionEs": "Alimentacion que apoya la produccion de leche materna de calidad. Requiere calorias adicionales (450-500 kcal/dia) y nutrientes especificos.",
  "descripcionEn": "Nutrition that supports quality breast milk production. Requires additional calories (450-500 kcal/day) and specific nutrients.",
  "indicadaParaEs": ["Madres lactantes", "Lactancia exclusiva", "Lactancia prolongada"],
  "indicadaParaEn": ["Breastfeeding mothers", "Exclusive breastfeeding", "Extended breastfeeding"],
  "alimentosPermitidosEs": ["Salmon y pescado bajo en mercurio", "Huevos", "Avena (galactagogo)", "Verduras variadas", "Frutas", "Legumbres", "Agua abundante", "Lacteos"],
  "alimentosPermitidosEn": ["Salmon and low-mercury fish", "Eggs", "Oats (galactagogue)", "Various vegetables", "Fruits", "Legumes", "Plenty of water", "Dairy"],
  "alimentosEvitarEs": ["Alcohol", "Exceso de cafeina", "Pescado alto en mercurio", "Alimentos que causen colicos en el bebe (evaluar individualmente)"],
  "alimentosEvitarEn": ["Alcohol", "Excess caffeine", "High-mercury fish", "Foods causing infant colic (evaluate individually)"],
  "beneficiosEs": ["Leche materna de calidad optima", "Recuperacion postparto", "Suficiente DHA para desarrollo cerebral del bebe", "Energia adecuada para la madre"],
  "beneficiosEn": ["Optimal quality breast milk", "Postpartum recovery", "Sufficient DHA for baby's brain development", "Adequate energy for mother"],
  "riesgosEs": ["Deficiencia de nutrientes si dieta insuficiente", "Deshidratacion si no se bebe suficiente agua", "Paso de alergenos a leche materna"],
  "riesgosEn": ["Nutrient deficiency if diet insufficient", "Dehydration if not drinking enough water", "Allergen passage to breast milk"],
  "menuEjemploEs": ["Desayuno: Avena con semillas de chia y frutas", "Almuerzo: Ensalada con salmon, quinoa y aguacate", "Cena: Pollo con verduras variadas y arroz integral", "Merienda: Almendras con fruta y agua"],
  "menuEjemploEn": ["Breakfast: Oatmeal with chia seeds and fruits", "Lunch: Salad with salmon, quinoa, and avocado", "Dinner: Chicken with mixed vegetables and brown rice", "Snack: Almonds with fruit and water"],
  "evidenciaCientifica": "Nivel B - OMS recomienda lactancia exclusiva 6 meses. Guias de AND y AAP apoyan nutricion materna adecuada."
},
{
  "id": "dieta-ninos",
  "nombreEs": "Dieta para ninos",
  "nombreEn": "Children's diet",
  "descripcionEs": "Alimentacion equilibrada que cubre las necesidades de crecimiento y desarrollo de ninos (2-12 anos). Enfatiza variedad, porciones apropiadas y habitos saludables.",
  "descripcionEn": "Balanced nutrition covering growth and development needs of children (ages 2-12). Emphasizes variety, appropriate portions, and healthy habits.",
  "indicadaParaEs": ["Crecimiento infantil saludable", "Prevencion de obesidad infantil", "Desarrollo cognitivo", "Prevencion de caries"],
  "indicadaParaEn": ["Healthy childhood growth", "Childhood obesity prevention", "Cognitive development", "Cavity prevention"],
  "alimentosPermitidosEs": ["Frutas y verduras variadas", "Leche y lacteos", "Granos integrales", "Proteinas magras", "Huevos", "Legumbres", "Agua como bebida principal"],
  "alimentosPermitidosEn": ["Varied fruits and vegetables", "Milk and dairy", "Whole grains", "Lean proteins", "Eggs", "Legumes", "Water as main beverage"],
  "alimentosEvitarEs": ["Bebidas azucaradas", "Comida rapida frecuente", "Dulces en exceso", "Jugos artificiales", "Alimentos ultraprocesados", "Exceso de sal"],
  "alimentosEvitarEn": ["Sugary drinks", "Frequent fast food", "Excess candy", "Artificial juices", "Ultra-processed foods", "Excess salt"],
  "beneficiosEs": ["Crecimiento optimo", "Desarrollo cerebral adecuado", "Huesos y dientes fuertes", "Habitos alimenticios saludables para la vida", "Prevencion de obesidad"],
  "beneficiosEn": ["Optimal growth", "Adequate brain development", "Strong bones and teeth", "Healthy eating habits for life", "Obesity prevention"],
  "riesgosEs": ["Ninos selectivos pueden tener deficiencias", "Exceso de pantalla durante comidas", "Presion para comer puede causar aversion"],
  "riesgosEn": ["Picky eaters may have deficiencies", "Excess screen time during meals", "Pressure to eat can cause aversion"],
  "menuEjemploEs": ["Desayuno: Cereal integral con leche y fruta", "Almuerzo: Pollo con arroz, frijoles y ensalada", "Cena: Pasta integral con salsa de tomate y queso", "Merienda: Manzana con mantequilla de mani"],
  "menuEjemploEn": ["Breakfast: Whole grain cereal with milk and fruit", "Lunch: Chicken with rice, beans, and salad", "Dinner: Whole grain pasta with tomato sauce and cheese", "Snack: Apple with peanut butter"],
  "evidenciaCientifica": "Nivel A - AAP y OMS proporcionan guias nutricionales pediatricas basadas en evidencia robusta."
},
{
  "id": "dieta-adultos-mayores",
  "nombreEs": "Dieta para adultos mayores",
  "nombreEn": "Elderly nutrition diet",
  "descripcionEs": "Alimentacion adaptada a las necesidades cambiantes del envejecimiento: mayor proteina para prevenir sarcopenia, vitamina D, calcio, B12 y fibra adecuada.",
  "descripcionEn": "Nutrition adapted to changing needs of aging: higher protein to prevent sarcopenia, vitamin D, calcium, B12, and adequate fiber.",
  "indicadaParaEs": ["Adultos mayores de 65 anos", "Prevencion de sarcopenia", "Prevencion de osteoporosis", "Deterioro cognitivo leve"],
  "indicadaParaEn": ["Adults over 65", "Sarcopenia prevention", "Osteoporosis prevention", "Mild cognitive decline"],
  "alimentosPermitidosEs": ["Proteinas de alta calidad (huevo, pescado, pollo)", "Lacteos fortificados", "Frutas blandas", "Verduras cocidas", "Granos integrales", "Caldo de hueso"],
  "alimentosPermitidosEn": ["High-quality proteins (egg, fish, chicken)", "Fortified dairy", "Soft fruits", "Cooked vegetables", "Whole grains", "Bone broth"],
  "alimentosEvitarEs": ["Alimentos muy duros si hay problemas dentales", "Exceso de sodio", "Alcohol en exceso", "Alimentos muy azucarados"],
  "alimentosEvitarEn": ["Very hard foods if dental problems", "Excess sodium", "Excessive alcohol", "Very sugary foods"],
  "beneficiosEs": ["Previene perdida muscular", "Mantiene densidad osea", "Mejora funcion cognitiva", "Fortalece sistema inmune", "Mejora calidad de vida"],
  "beneficiosEn": ["Prevents muscle loss", "Maintains bone density", "Improves cognitive function", "Strengthens immune system", "Improves quality of life"],
  "riesgosEs": ["Disminucion del apetito puede causar desnutricion", "Interacciones con medicamentos multiples", "Dificultad para masticar o deglutir"],
  "riesgosEn": ["Decreased appetite may cause malnutrition", "Interactions with multiple medications", "Difficulty chewing or swallowing"],
  "menuEjemploEs": ["Desayuno: Huevos revueltos con pan integral y fruta", "Almuerzo: Sopa de pollo con verduras y arroz", "Cena: Pescado al horno con pure de papa y espinacas", "Merienda: Yogur con frutas blandas"],
  "menuEjemploEn": ["Breakfast: Scrambled eggs with whole grain bread and fruit", "Lunch: Chicken soup with vegetables and rice", "Dinner: Baked fish with mashed potatoes and spinach", "Snack: Yogurt with soft fruits"],
  "evidenciaCientifica": "Nivel A - ESPEN, AND y AGS proporcionan guias nutricionales geriatricas basadas en evidencia."
},
{
  "id": "dieta-deportistas",
  "nombreEs": "Dieta para deportistas",
  "nombreEn": "Sports nutrition diet",
  "descripcionEs": "Alimentacion disenada para optimizar rendimiento atletico, recuperacion y composicion corporal. Ajustada segun tipo de deporte, intensidad y metas.",
  "descripcionEn": "Nutrition designed to optimize athletic performance, recovery, and body composition. Adjusted based on sport type, intensity, and goals.",
  "indicadaParaEs": ["Atletas competitivos", "Deportistas recreativos activos", "Recuperacion de lesiones deportivas", "Aumento de masa muscular"],
  "indicadaParaEn": ["Competitive athletes", "Active recreational athletes", "Sports injury recovery", "Muscle mass gain"],
  "alimentosPermitidosEs": ["Carbohidratos complejos (arroz, pasta, avena)", "Proteinas magras (pollo, pescado, huevo)", "Frutas (energía rapida)", "Verduras", "Batata/camote", "Leche con chocolate (recuperacion)"],
  "alimentosPermitidosEn": ["Complex carbohydrates (rice, pasta, oats)", "Lean proteins (chicken, fish, egg)", "Fruits (quick energy)", "Vegetables", "Sweet potato", "Chocolate milk (recovery)"],
  "alimentosEvitarEs": ["Alimentos grasos antes de entrenar", "Alcohol", "Exceso de fibra pre-competencia", "Alimentos nuevos dia de competencia"],
  "alimentosEvitarEn": ["Fatty foods before training", "Alcohol", "Excess fiber pre-competition", "New foods on competition day"],
  "beneficiosEs": ["Mejora rendimiento 3-15%", "Acelera recuperacion", "Reduce riesgo de lesiones", "Mantiene composicion corporal optima"],
  "beneficiosEn": ["Improves performance 3-15%", "Accelerates recovery", "Reduces injury risk", "Maintains optimal body composition"],
  "riesgosEs": ["Sobrealimentacion puede causar aumento de grasa", "Restriccion excesiva causa RED-S", "Suplementos no regulados pueden ser peligrosos"],
  "riesgosEn": ["Overfeeding may cause fat gain", "Excessive restriction causes RED-S", "Unregulated supplements can be dangerous"],
  "menuEjemploEs": ["Desayuno: Avena con platano, huevos y jugo de naranja", "Pre-entreno: Pan con miel y platano", "Post-entreno: Batido de proteina con fruta", "Cena: Pasta con pollo, verduras y aceite de oliva"],
  "menuEjemploEn": ["Breakfast: Oatmeal with banana, eggs, and orange juice", "Pre-workout: Bread with honey and banana", "Post-workout: Protein shake with fruit", "Dinner: Pasta with chicken, vegetables, and olive oil"],
  "evidenciaCientifica": "Nivel A - ISSN, ACSM y IOC proporcionan guias de nutricion deportiva basadas en evidencia solida."
},
{
  "id": "dieta-anemia",
  "nombreEs": "Dieta para anemia",
  "nombreEn": "Anemia diet",
  "descripcionEs": "Plan alimenticio enfocado en aumentar la ingesta de hierro, vitamina B12, folato y vitamina C para tratar y prevenir la anemia nutricional.",
  "descripcionEn": "Eating plan focused on increasing iron, vitamin B12, folate, and vitamin C intake to treat and prevent nutritional anemia.",
  "indicadaParaEs": ["Anemia ferropenica", "Anemia megaloblastica", "Anemia por deficiencia de B12", "Anemia en embarazo", "Post-hemorragia"],
  "indicadaParaEn": ["Iron-deficiency anemia", "Megaloblastic anemia", "B12 deficiency anemia", "Pregnancy anemia", "Post-hemorrhage"],
  "alimentosPermitidosEs": ["Carne roja magra", "Higado", "Espinacas", "Lentejas", "Cereales fortificados con hierro", "Naranja (vitamina C con hierro)", "Huevos"],
  "alimentosPermitidosEn": ["Lean red meat", "Liver", "Spinach", "Lentils", "Iron-fortified cereals", "Orange (vitamin C with iron)", "Eggs"],
  "alimentosEvitarEs": ["Te y cafe con las comidas (inhiben absorcion de hierro)", "Exceso de lacteos con comidas ricas en hierro", "Antiacidos cerca de comidas"],
  "alimentosEvitarEn": ["Tea and coffee with meals (inhibit iron absorption)", "Excess dairy with iron-rich meals", "Antacids near meals"],
  "beneficiosEs": ["Aumenta niveles de hemoglobina", "Restaura reservas de hierro", "Mejora energia y concentracion", "Reduce sintomas de anemia"],
  "beneficiosEn": ["Increases hemoglobin levels", "Restores iron stores", "Improves energy and concentration", "Reduces anemia symptoms"],
  "riesgosEs": ["Exceso de hierro puede causar hemocromatosis", "Suplementos de hierro causan estrenimiento", "Hierro no hemo vegetal tiene menor absorcion"],
  "riesgosEn": ["Excess iron can cause hemochromatosis", "Iron supplements cause constipation", "Plant non-heme iron has lower absorption"],
  "menuEjemploEs": ["Desayuno: Cereal fortificado con jugo de naranja", "Almuerzo: Carne roja con espinacas y limon", "Cena: Lentejas con arroz y ensalada con pimiento rojo", "Merienda: Frutas citricas con almendras"],
  "menuEjemploEn": ["Breakfast: Fortified cereal with orange juice", "Lunch: Red meat with spinach and lemon", "Dinner: Lentils with rice and salad with red pepper", "Snack: Citrus fruits with almonds"],
  "evidenciaCientifica": "Nivel A - OMS y ASH recomiendan suplementacion y modificacion dietetica como tratamiento de primera linea."
},
{
  "id": "ayuno-intermitente",
  "nombreEs": "Ayuno intermitente",
  "nombreEn": "Intermittent fasting",
  "descripcionEs": "Patron alimentario que alterna periodos de ayuno y alimentacion. Los metodos mas comunes: 16:8 (16 horas ayuno, 8 horas comida), 5:2 (5 dias normales, 2 dias con 500 kcal).",
  "descripcionEn": "Eating pattern alternating fasting and eating periods. Most common methods: 16:8 (16 hours fasting, 8 hours eating), 5:2 (5 normal days, 2 days at 500 kcal).",
  "indicadaParaEs": ["Perdida de peso", "Resistencia a la insulina", "Sindrome metabolico", "Salud metabolica general"],
  "indicadaParaEn": ["Weight loss", "Insulin resistance", "Metabolic syndrome", "General metabolic health"],
  "alimentosPermitidosEs": ["Durante ventana de alimentacion: todos los alimentos saludables", "Agua, te y cafe sin azucar durante ayuno", "Comidas balanceadas y nutritivas"],
  "alimentosPermitidosEn": ["During eating window: all healthy foods", "Water, tea, and unsweetened coffee during fasting", "Balanced and nutritious meals"],
  "alimentosEvitarEs": ["Atracones al romper el ayuno", "Comida chatarra durante la ventana", "Bebidas calorias durante el ayuno"],
  "alimentosEvitarEn": ["Binge eating when breaking fast", "Junk food during the window", "Caloric drinks during fasting"],
  "beneficiosEs": ["Perdida de peso y grasa visceral", "Mejora sensibilidad a insulina", "Autofagia celular", "Puede mejorar marcadores inflamatorios"],
  "beneficiosEn": ["Weight and visceral fat loss", "Improved insulin sensitivity", "Cellular autophagy", "May improve inflammatory markers"],
  "riesgosEs": ["No recomendado para embarazadas, ninos ni personas con trastornos alimentarios", "Puede causar irritabilidad y dificultad de concentracion", "Riesgo de atracones", "Puede afectar ciclo menstrual"],
  "riesgosEn": ["Not recommended for pregnant women, children, or people with eating disorders", "May cause irritability and poor concentration", "Binge eating risk", "May affect menstrual cycle"],
  "menuEjemploEs": ["12:00 (romper ayuno): Huevos con aguacate, espinacas y pan integral", "15:00: Pollo con quinoa, verduras y aceite de oliva", "19:30: Salmon con batata y ensalada", "20:00: Inicia periodo de ayuno"],
  "menuEjemploEn": ["12:00 (break fast): Eggs with avocado, spinach, and whole grain bread", "15:00: Chicken with quinoa, vegetables, and olive oil", "19:30: Salmon with sweet potato and salad", "20:00: Fasting period begins"],
  "evidenciaCientifica": "Nivel B - Evidencia creciente para perdida de peso y salud metabolica. Estudios a largo plazo aun limitados."
}
]`;

const dietasArray: DietaEspecial[] = [
  ...JSON.parse(dietasRaw1) as DietaEspecial[],
  ...JSON.parse(dietasRaw2) as DietaEspecial[],
  ...JSON.parse(dietasRaw3) as DietaEspecial[]
];

export const DIETAS_ESPECIALES: DietaEspecial[] = dietasArray;

// ============================================================
// DATOS DE ALIMENTOS SALUDABLES / SUPERFOODS (30+)
// ============================================================

const alimentosRaw1 = `[
{
  "id": "salmon",
  "nombreEs": "Salmon",
  "nombreEn": "Salmon",
  "grupoEs": "Pescados y mariscos",
  "grupoEn": "Fish and seafood",
  "beneficiosEs": ["Rico en omega-3 EPA y DHA", "Protege salud cardiovascular", "Apoya desarrollo cerebral", "Antiinflamatorio natural", "Fuente de vitamina D"],
  "beneficiosEn": ["Rich in omega-3 EPA and DHA", "Protects cardiovascular health", "Supports brain development", "Natural anti-inflammatory", "Vitamin D source"],
  "nutrientesClave": ["Omega-3", "Proteina", "Vitamina D", "Selenio", "Vitamina B12"],
  "porcion": "85 g (3 oz)",
  "calorias": 177,
  "consejosPreparacionEs": ["Al horno con limon y hierbas", "A la plancha con especias", "Evitar freir para conservar omega-3", "No sobrecocer para mantener jugosidad"],
  "consejosPreparacionEn": ["Baked with lemon and herbs", "Grilled with spices", "Avoid frying to preserve omega-3", "Do not overcook to maintain juiciness"]
},
{
  "id": "brocoli",
  "nombreEs": "Brocoli",
  "nombreEn": "Broccoli",
  "grupoEs": "Verduras cruciferas",
  "grupoEn": "Cruciferous vegetables",
  "beneficiosEs": ["Rico en sulforafano (anticancerigeno)", "Alto en vitamina C y K", "Fuente de fibra", "Contiene compuestos antiinflamatorios", "Apoya desintoxicacion hepatica"],
  "beneficiosEn": ["Rich in sulforaphane (anticancer)", "High in vitamin C and K", "Fiber source", "Contains anti-inflammatory compounds", "Supports liver detoxification"],
  "nutrientesClave": ["Vitamina C", "Vitamina K", "Folato", "Fibra", "Sulforafano"],
  "porcion": "1 taza (91 g)",
  "calorias": 31,
  "consejosPreparacionEs": ["Al vapor 3-5 minutos para conservar nutrientes", "Saltear brevemente con ajo", "Comer crudo en ensaladas con limon", "Evitar hervir largo tiempo"],
  "consejosPreparacionEn": ["Steam 3-5 minutes to preserve nutrients", "Briefly sautee with garlic", "Eat raw in salads with lemon", "Avoid boiling for long"]
},
{
  "id": "arandanos",
  "nombreEs": "Arandanos",
  "nombreEn": "Blueberries",
  "grupoEs": "Frutas/bayas",
  "grupoEn": "Fruits/berries",
  "beneficiosEs": ["Uno de los alimentos con mas antioxidantes", "Mejora memoria y funcion cognitiva", "Reduce presion arterial", "Antiinflamatorio", "Protege contra dano al ADN"],
  "beneficiosEn": ["One of the most antioxidant-rich foods", "Improves memory and cognitive function", "Reduces blood pressure", "Anti-inflammatory", "Protects against DNA damage"],
  "nutrientesClave": ["Antocianinas", "Vitamina C", "Vitamina K", "Fibra", "Manganeso"],
  "porcion": "1 taza (148 g)",
  "calorias": 84,
  "consejosPreparacionEs": ["Comer frescos como snack", "Agregar a avena o yogur", "Congelados conservan nutrientes", "Licuados con espinacas y platano"],
  "consejosPreparacionEn": ["Eat fresh as snack", "Add to oatmeal or yogurt", "Frozen ones preserve nutrients", "Blend with spinach and banana"]
},
{
  "id": "espinacas",
  "nombreEs": "Espinacas",
  "nombreEn": "Spinach",
  "grupoEs": "Verduras de hoja verde",
  "grupoEn": "Leafy green vegetables",
  "beneficiosEs": ["Muy alta en hierro y folato", "Rica en luteina para salud ocular", "Contiene nitratos que mejoran presion arterial", "Fuente de magnesio", "Bajo en calorias, alto en nutrientes"],
  "beneficiosEn": ["Very high in iron and folate", "Rich in lutein for eye health", "Contains nitrates that improve blood pressure", "Magnesium source", "Low calorie, high nutrient"],
  "nutrientesClave": ["Hierro", "Folato", "Vitamina K", "Vitamina A", "Magnesio", "Luteina"],
  "porcion": "1 taza cruda (30 g)",
  "calorias": 7,
  "consejosPreparacionEs": ["Crudas en ensaladas con limon (mejora absorcion de hierro)", "Salteadas con ajo y aceite de oliva", "En batidos verdes", "Al vapor brevemente"],
  "consejosPreparacionEn": ["Raw in salads with lemon (improves iron absorption)", "Sauteed with garlic and olive oil", "In green smoothies", "Briefly steamed"]
},
{
  "id": "quinoa",
  "nombreEs": "Quinoa",
  "nombreEn": "Quinoa",
  "grupoEs": "Pseudocereales/granos",
  "grupoEn": "Pseudocereals/grains",
  "beneficiosEs": ["Proteina completa (todos los aminoacidos esenciales)", "Sin gluten naturalmente", "Alto en fibra y magnesio", "Indice glucemico bajo", "Fuente de hierro vegetal"],
  "beneficiosEn": ["Complete protein (all essential amino acids)", "Naturally gluten-free", "High in fiber and magnesium", "Low glycemic index", "Plant iron source"],
  "nutrientesClave": ["Proteina completa", "Fibra", "Magnesio", "Hierro", "Manganeso"],
  "porcion": "1 taza cocida (185 g)",
  "calorias": 222,
  "consejosPreparacionEs": ["Enjuagar antes de cocinar para quitar saponinas", "Cocinar como arroz (2:1 agua)", "Usar como base de ensaladas", "Sustituir arroz blanco"],
  "consejosPreparacionEn": ["Rinse before cooking to remove saponins", "Cook like rice (2:1 water)", "Use as salad base", "Substitute for white rice"]
},
{
  "id": "aguacate",
  "nombreEs": "Aguacate",
  "nombreEn": "Avocado",
  "grupoEs": "Frutas",
  "grupoEn": "Fruits",
  "beneficiosEs": ["Rico en grasas monoinsaturadas saludables", "Reduce colesterol LDL", "Alto en potasio (mas que platano)", "Mejora absorcion de nutrientes liposolubles", "Fuente de fibra"],
  "beneficiosEn": ["Rich in healthy monounsaturated fats", "Lowers LDL cholesterol", "High in potassium (more than banana)", "Improves fat-soluble nutrient absorption", "Fiber source"],
  "nutrientesClave": ["Grasas monoinsaturadas", "Potasio", "Fibra", "Vitamina K", "Folato"],
  "porcion": "1/2 aguacate mediano (68 g)",
  "calorias": 114,
  "consejosPreparacionEs": ["En tostadas con limon y sal", "Guacamole con tomate y cilantro", "En ensaladas y bowls", "En batidos para cremosidad"],
  "consejosPreparacionEn": ["On toast with lemon and salt", "Guacamole with tomato and cilantro", "In salads and bowls", "In smoothies for creaminess"]
},
{
  "id": "nueces",
  "nombreEs": "Nueces de castilla",
  "nombreEn": "Walnuts",
  "grupoEs": "Frutos secos",
  "grupoEn": "Nuts",
  "beneficiosEs": ["Mayor contenido de omega-3 entre frutos secos", "Mejora salud cerebral y memoria", "Reduce colesterol e inflamacion", "Rica en antioxidantes", "Apoya microbioma intestinal"],
  "beneficiosEn": ["Highest omega-3 content among nuts", "Improves brain health and memory", "Reduces cholesterol and inflammation", "Rich in antioxidants", "Supports gut microbiome"],
  "nutrientesClave": ["Omega-3 (ALA)", "Cobre", "Manganeso", "Vitamina E", "Polifenoles"],
  "porcion": "28 g (1 oz, ~7 nueces)",
  "calorias": 185,
  "consejosPreparacionEs": ["Comer crudas como snack", "Agregar a ensaladas y avena", "Tostar ligeramente para realzar sabor", "Picar sobre yogur"],
  "consejosPreparacionEn": ["Eat raw as snack", "Add to salads and oatmeal", "Lightly toast to enhance flavor", "Chop over yogurt"]
},
{
  "id": "semillas-chia",
  "nombreEs": "Semillas de chia",
  "nombreEn": "Chia seeds",
  "grupoEs": "Semillas",
  "grupoEn": "Seeds",
  "beneficiosEs": ["Altisimas en fibra (34 g por 100 g)", "Rica fuente de omega-3 vegetal", "Absorben 12x su peso en agua (hidratan)", "Alto en calcio vegetal", "Ayudan a controlar glucosa"],
  "beneficiosEn": ["Extremely high in fiber (34 g per 100 g)", "Rich plant omega-3 source", "Absorb 12x their weight in water (hydrating)", "High in plant calcium", "Help control glucose"],
  "nutrientesClave": ["Fibra", "Omega-3 (ALA)", "Calcio", "Magnesio", "Fosforo"],
  "porcion": "2 cucharadas (28 g)",
  "calorias": 138,
  "consejosPreparacionEs": ["Remojar en agua o leche (pudin de chia)", "Agregar a batidos", "Espolvorear sobre ensaladas y yogur", "Mezclar en avena"],
  "consejosPreparacionEn": ["Soak in water or milk (chia pudding)", "Add to smoothies", "Sprinkle over salads and yogurt", "Mix into oatmeal"]
},
{
  "id": "ajo",
  "nombreEs": "Ajo",
  "nombreEn": "Garlic",
  "grupoEs": "Verduras/condimentos",
  "grupoEn": "Vegetables/seasonings",
  "beneficiosEs": ["Contiene alicina con propiedades antimicrobianas", "Reduce presion arterial", "Mejora perfil de colesterol", "Fortalece sistema inmune", "Propiedades anticancerigenas"],
  "beneficiosEn": ["Contains allicin with antimicrobial properties", "Reduces blood pressure", "Improves cholesterol profile", "Strengthens immune system", "Anticancer properties"],
  "nutrientesClave": ["Alicina", "Manganeso", "Vitamina B6", "Vitamina C", "Selenio"],
  "porcion": "3 dientes (9 g)",
  "calorias": 13,
  "consejosPreparacionEs": ["Picar y dejar reposar 10 min antes de cocinar (activa alicina)", "Agregar al final de la coccion para maximo beneficio", "Crudo en aderezos", "Asado entero para sabor suave"],
  "consejosPreparacionEn": ["Chop and let sit 10 min before cooking (activates allicin)", "Add at end of cooking for maximum benefit", "Raw in dressings", "Roasted whole for mild flavor"]
},
{
  "id": "curcuma",
  "nombreEs": "Curcuma",
  "nombreEn": "Turmeric",
  "grupoEs": "Especias",
  "grupoEn": "Spices",
  "beneficiosEs": ["Contiene curcumina, potente antiinflamatorio", "Antioxidante poderoso", "Puede mejorar funcion cerebral", "Alivia dolor articular", "Potencial anticancerigeno"],
  "beneficiosEn": ["Contains curcumin, potent anti-inflammatory", "Powerful antioxidant", "May improve brain function", "Relieves joint pain", "Potential anticancer properties"],
  "nutrientesClave": ["Curcumina", "Hierro", "Manganeso", "Fibra"],
  "porcion": "1 cucharadita (3 g)",
  "calorias": 9,
  "consejosPreparacionEs": ["Siempre combinar con pimienta negra (aumenta absorcion 2000%)", "Agregar grasa (aceite de oliva) para mejor absorcion", "Leche dorada (golden milk)", "En curries y sopas"],
  "consejosPreparacionEn": ["Always combine with black pepper (increases absorption 2000%)", "Add fat (olive oil) for better absorption", "Golden milk", "In curries and soups"]
}
]`;

const alimentosRaw2 = `[
{
  "id": "jengibre",
  "nombreEs": "Jengibre",
  "nombreEn": "Ginger",
  "grupoEs": "Especias/raices",
  "grupoEn": "Spices/roots",
  "beneficiosEs": ["Alivia nauseas y vomitos (embarazo, quimioterapia)", "Antiinflamatorio natural", "Mejora digestion", "Puede reducir dolor muscular", "Ayuda a controlar glucosa"],
  "beneficiosEn": ["Relieves nausea and vomiting (pregnancy, chemotherapy)", "Natural anti-inflammatory", "Improves digestion", "May reduce muscle pain", "Helps control glucose"],
  "nutrientesClave": ["Gingerol", "Vitamina B6", "Magnesio", "Potasio"],
  "porcion": "1 cucharada rallado (6 g)",
  "calorias": 5,
  "consejosPreparacionEs": ["Te de jengibre fresco para nauseas", "Rallado en sopas y salteados", "En batidos con limon", "Jengibre confitado como snack (con moderacion)"],
  "consejosPreparacionEn": ["Fresh ginger tea for nausea", "Grated in soups and stir-fries", "In smoothies with lemon", "Candied ginger as snack (in moderation)"]
},
{
  "id": "aceite-oliva",
  "nombreEs": "Aceite de oliva extra virgen",
  "nombreEn": "Extra virgin olive oil",
  "grupoEs": "Aceites y grasas",
  "grupoEn": "Oils and fats",
  "beneficiosEs": ["Pilar de la dieta mediterranea", "Rico en polifenoles y oleocanthal (antiinflamatorio)", "Reduce riesgo cardiovascular", "Mejora perfil lipidico", "Protege funcion cognitiva"],
  "beneficiosEn": ["Pillar of Mediterranean diet", "Rich in polyphenols and oleocanthal (anti-inflammatory)", "Reduces cardiovascular risk", "Improves lipid profile", "Protects cognitive function"],
  "nutrientesClave": ["Grasas monoinsaturadas", "Vitamina E", "Polifenoles", "Oleocanthal"],
  "porcion": "1 cucharada (15 mL)",
  "calorias": 119,
  "consejosPreparacionEs": ["Usar en crudo para aderezos", "Cocinar a temperatura media", "Guardar en lugar oscuro y fresco", "Elegir envases oscuros"],
  "consejosPreparacionEn": ["Use raw for dressings", "Cook at medium temperature", "Store in dark cool place", "Choose dark containers"]
},
{
  "id": "legumbres",
  "nombreEs": "Legumbres (frijoles, lentejas, garbanzos)",
  "nombreEn": "Legumes (beans, lentils, chickpeas)",
  "grupoEs": "Leguminosas",
  "grupoEn": "Legumes",
  "beneficiosEs": ["Excelente fuente de proteina vegetal", "Muy altas en fibra", "Bajo indice glucemico", "Reducen colesterol", "Economicas y versatiles"],
  "beneficiosEn": ["Excellent plant protein source", "Very high in fiber", "Low glycemic index", "Lower cholesterol", "Affordable and versatile"],
  "nutrientesClave": ["Proteina", "Fibra", "Hierro", "Folato", "Potasio", "Magnesio"],
  "porcion": "1/2 taza cocidas (90 g)",
  "calorias": 115,
  "consejosPreparacionEs": ["Remojar la noche anterior (reduce gases)", "Cocinar en olla de presion para ahorrar tiempo", "En sopas, guisos y ensaladas", "Hummus de garbanzos como dip"],
  "consejosPreparacionEn": ["Soak overnight (reduces gas)", "Cook in pressure cooker to save time", "In soups, stews, and salads", "Chickpea hummus as dip"]
},
{
  "id": "avena",
  "nombreEs": "Avena",
  "nombreEn": "Oats",
  "grupoEs": "Cereales integrales",
  "grupoEn": "Whole grains",
  "beneficiosEs": ["Rica en beta-glucano (reduce colesterol)", "Estabiliza glucosa sanguinea", "Alta en fibra soluble", "Promueve saciedad prolongada", "Fuente de energia sostenida"],
  "beneficiosEn": ["Rich in beta-glucan (lowers cholesterol)", "Stabilizes blood sugar", "High in soluble fiber", "Promotes prolonged satiety", "Sustained energy source"],
  "nutrientesClave": ["Beta-glucano", "Fibra soluble", "Manganeso", "Fosforo", "Magnesio"],
  "porcion": "1/2 taza seca (40 g)",
  "calorias": 150,
  "consejosPreparacionEs": ["Avena nocturna (overnight oats) con leche y frutas", "Cocinar con canela y platano", "En batidos para fibra extra", "Galletas de avena caseras"],
  "consejosPreparacionEn": ["Overnight oats with milk and fruits", "Cook with cinnamon and banana", "In smoothies for extra fiber", "Homemade oat cookies"]
},
{
  "id": "batata-camote",
  "nombreEs": "Batata/Camote",
  "nombreEn": "Sweet potato",
  "grupoEs": "Tuberculos",
  "grupoEn": "Tubers",
  "beneficiosEs": ["Rica en beta-caroteno (provitamina A)", "Indice glucemico mas bajo que papa blanca", "Alta en fibra", "Fuente de vitamina C y potasio", "Antioxidante natural"],
  "beneficiosEn": ["Rich in beta-carotene (provitamin A)", "Lower glycemic index than white potato", "High in fiber", "Source of vitamin C and potassium", "Natural antioxidant"],
  "nutrientesClave": ["Beta-caroteno", "Vitamina A", "Fibra", "Vitamina C", "Potasio"],
  "porcion": "1 mediana (130 g)",
  "calorias": 112,
  "consejosPreparacionEs": ["Al horno con piel para maximo nutriente", "Pure de batata como acompanamiento", "En sopas y guisos", "Chips de batata al horno (snack saludable)"],
  "consejosPreparacionEn": ["Baked with skin for maximum nutrients", "Mashed sweet potato as side", "In soups and stews", "Baked sweet potato chips (healthy snack)"]
},
{
  "id": "tomate",
  "nombreEs": "Tomate",
  "nombreEn": "Tomato",
  "grupoEs": "Frutas/verduras",
  "grupoEn": "Fruits/vegetables",
  "beneficiosEs": ["Rico en licopeno (antioxidante anticancerigeno)", "Licopeno se absorbe mejor cocido", "Fuente de vitamina C y potasio", "Protege salud de la piel", "Reduce riesgo de cancer de prostata"],
  "beneficiosEn": ["Rich in lycopene (anticancer antioxidant)", "Lycopene better absorbed when cooked", "Source of vitamin C and potassium", "Protects skin health", "Reduces prostate cancer risk"],
  "nutrientesClave": ["Licopeno", "Vitamina C", "Potasio", "Vitamina K", "Folato"],
  "porcion": "1 mediano (123 g)",
  "calorias": 22,
  "consejosPreparacionEs": ["Cocinar con aceite de oliva (aumenta absorcion de licopeno)", "Salsa de tomate casera", "En ensaladas con albahaca", "Tomates cherry como snack"],
  "consejosPreparacionEn": ["Cook with olive oil (increases lycopene absorption)", "Homemade tomato sauce", "In salads with basil", "Cherry tomatoes as snack"]
},
{
  "id": "yogur-natural",
  "nombreEs": "Yogur natural",
  "nombreEn": "Natural yogurt",
  "grupoEs": "Lacteos fermentados",
  "grupoEn": "Fermented dairy",
  "beneficiosEs": ["Fuente de probioticos vivos", "Alto en calcio y proteina", "Mejora salud digestiva", "Fortalece sistema inmune", "Mejor tolerado que leche por intolerantes a lactosa"],
  "beneficiosEn": ["Source of live probiotics", "High in calcium and protein", "Improves digestive health", "Strengthens immune system", "Better tolerated than milk by lactose intolerant"],
  "nutrientesClave": ["Probioticos", "Calcio", "Proteina", "Vitamina B12", "Potasio"],
  "porcion": "1 taza (245 g)",
  "calorias": 149,
  "consejosPreparacionEs": ["Elegir sin azucar anadida", "Con frutas y granola para desayuno", "Base para aderezos saludables", "Marinada para pollo (ablanda la carne)"],
  "consejosPreparacionEn": ["Choose without added sugar", "With fruits and granola for breakfast", "Base for healthy dressings", "Chicken marinade (tenderizes meat)"]
},
{
  "id": "huevos",
  "nombreEs": "Huevos",
  "nombreEn": "Eggs",
  "grupoEs": "Proteinas animales",
  "grupoEn": "Animal proteins",
  "beneficiosEs": ["Proteina completa de alta calidad", "Ricos en colina (desarrollo cerebral)", "Contienen luteina y zeaxantina (salud ocular)", "Fuente de vitamina D", "Economicos y versatiles"],
  "beneficiosEn": ["Complete high-quality protein", "Rich in choline (brain development)", "Contain lutein and zeaxanthin (eye health)", "Vitamin D source", "Affordable and versatile"],
  "nutrientesClave": ["Proteina", "Colina", "Vitamina D", "Vitamina B12", "Selenio", "Luteina"],
  "porcion": "1 huevo grande (50 g)",
  "calorias": 72,
  "consejosPreparacionEs": ["Hervidos para snack portatil", "Revueltos con verduras", "Poché sobre tostada integral", "No descartar la yema (contiene la mayoria de nutrientes)"],
  "consejosPreparacionEn": ["Boiled for portable snack", "Scrambled with vegetables", "Poached on whole grain toast", "Do not discard the yolk (contains most nutrients)"]
},
{
  "id": "almendras",
  "nombreEs": "Almendras",
  "nombreEn": "Almonds",
  "grupoEs": "Frutos secos",
  "grupoEn": "Nuts",
  "beneficiosEs": ["Altas en vitamina E (antioxidante)", "Reducen colesterol LDL", "Fuente de magnesio y calcio", "Promueven saciedad", "Benefician salud de la piel"],
  "beneficiosEn": ["High in vitamin E (antioxidant)", "Reduce LDL cholesterol", "Source of magnesium and calcium", "Promote satiety", "Benefit skin health"],
  "nutrientesClave": ["Vitamina E", "Magnesio", "Calcio", "Fibra", "Proteina"],
  "porcion": "28 g (1 oz, ~23 almendras)",
  "calorias": 164,
  "consejosPreparacionEs": ["Crudas o tostadas como snack", "Leche de almendras casera", "Mantequilla de almendras en tostadas", "En ensaladas para crujencia"],
  "consejosPreparacionEn": ["Raw or toasted as snack", "Homemade almond milk", "Almond butter on toast", "In salads for crunch"]
},
{
  "id": "te-verde",
  "nombreEs": "Te verde",
  "nombreEn": "Green tea",
  "grupoEs": "Bebidas",
  "grupoEn": "Beverages",
  "beneficiosEs": ["Rico en catequinas (EGCG) antioxidantes", "Puede mejorar metabolismo", "Protege funcion cerebral", "Reduce riesgo de ciertos canceres", "Propiedades antiinflamatorias"],
  "beneficiosEn": ["Rich in catechins (EGCG) antioxidants", "May improve metabolism", "Protects brain function", "Reduces certain cancer risks", "Anti-inflammatory properties"],
  "nutrientesClave": ["EGCG", "Catequinas", "L-teanina", "Cafeina (moderada)"],
  "porcion": "1 taza (240 mL)",
  "calorias": 2,
  "consejosPreparacionEs": ["Agua a 70-80°C (no hirviendo)", "Infusionar 2-3 minutos", "No agregar azucar", "2-3 tazas al dia para beneficios optimos"],
  "consejosPreparacionEn": ["Water at 70-80°C (not boiling)", "Steep 2-3 minutes", "Do not add sugar", "2-3 cups daily for optimal benefits"]
}
]`;

const alimentosRaw3 = `[
{
  "id": "sardinas",
  "nombreEs": "Sardinas",
  "nombreEn": "Sardines",
  "grupoEs": "Pescados y mariscos",
  "grupoEn": "Fish and seafood",
  "beneficiosEs": ["Ricas en omega-3 y calcio (con espinas)", "Bajo en mercurio", "Fuente de vitamina D y B12", "Economicas y sostenibles", "Proteina completa de alta calidad"],
  "beneficiosEn": ["Rich in omega-3 and calcium (with bones)", "Low in mercury", "Source of vitamin D and B12", "Affordable and sustainable", "Complete high-quality protein"],
  "nutrientesClave": ["Omega-3", "Calcio", "Vitamina D", "Vitamina B12", "Selenio"],
  "porcion": "1 lata (92 g)",
  "calorias": 191,
  "consejosPreparacionEs": ["En tostada con aguacate y limon", "En ensaladas mediterraneas", "Con pasta y tomate", "Elegir en aceite de oliva"],
  "consejosPreparacionEn": ["On toast with avocado and lemon", "In Mediterranean salads", "With pasta and tomato", "Choose in olive oil"]
},
{
  "id": "kale",
  "nombreEs": "Kale/Col rizada",
  "nombreEn": "Kale",
  "grupoEs": "Verduras de hoja verde",
  "grupoEn": "Leafy green vegetables",
  "beneficiosEs": ["Uno de los vegetales mas densos en nutrientes", "Muy alta en vitamina K, C y A", "Contiene kaempferol y quercetina", "Rica en calcio vegetal", "Baja en calorias"],
  "beneficiosEn": ["One of the most nutrient-dense vegetables", "Very high in vitamin K, C, and A", "Contains kaempferol and quercetin", "Rich in plant calcium", "Low in calories"],
  "nutrientesClave": ["Vitamina K", "Vitamina C", "Vitamina A", "Calcio", "Potasio"],
  "porcion": "1 taza picada (67 g)",
  "calorias": 33,
  "consejosPreparacionEs": ["Masajear con aceite y limon para suavizar", "Chips de kale al horno", "En batidos verdes", "Salteada con ajo"],
  "consejosPreparacionEn": ["Massage with oil and lemon to soften", "Baked kale chips", "In green smoothies", "Sauteed with garlic"]
},
{
  "id": "garbanzos",
  "nombreEs": "Garbanzos",
  "nombreEn": "Chickpeas",
  "grupoEs": "Leguminosas",
  "grupoEn": "Legumes",
  "beneficiosEs": ["Excelente fuente de proteina vegetal y fibra", "Bajo indice glucemico", "Ricos en folato y hierro", "Versatiles en la cocina", "Promueven saciedad"],
  "beneficiosEn": ["Excellent plant protein and fiber source", "Low glycemic index", "Rich in folate and iron", "Versatile in cooking", "Promote satiety"],
  "nutrientesClave": ["Proteina", "Fibra", "Folato", "Hierro", "Manganeso"],
  "porcion": "1/2 taza cocidos (82 g)",
  "calorias": 134,
  "consejosPreparacionEs": ["Hummus casero", "Asados al horno con especias (snack crujiente)", "En curries y ensaladas", "En sopas y guisos"],
  "consejosPreparacionEn": ["Homemade hummus", "Oven-roasted with spices (crunchy snack)", "In curries and salads", "In soups and stews"]
},
{
  "id": "linaza",
  "nombreEs": "Linaza/Semillas de lino",
  "nombreEn": "Flaxseed",
  "grupoEs": "Semillas",
  "grupoEn": "Seeds",
  "beneficiosEs": ["Mayor fuente vegetal de omega-3 (ALA)", "Rica en lignanos (fitoestrogenos protectores)", "Muy alta en fibra soluble e insoluble", "Reduce colesterol", "Puede ayudar en estrenimiento"],
  "beneficiosEn": ["Highest plant source of omega-3 (ALA)", "Rich in lignans (protective phytoestrogens)", "Very high in soluble and insoluble fiber", "Lowers cholesterol", "May help with constipation"],
  "nutrientesClave": ["Omega-3 (ALA)", "Lignanos", "Fibra", "Magnesio", "Vitamina B1"],
  "porcion": "2 cucharadas molidas (14 g)",
  "calorias": 74,
  "consejosPreparacionEs": ["Siempre moler antes de consumir (enteras no se digieren)", "Agregar a batidos y avena", "Sustituir huevo en reposteria vegana (1:3 con agua)", "Refrigerar molida para preservar omega-3"],
  "consejosPreparacionEn": ["Always grind before consuming (whole ones are not digested)", "Add to smoothies and oatmeal", "Substitute egg in vegan baking (1:3 with water)", "Refrigerate ground to preserve omega-3"]
},
{
  "id": "naranja",
  "nombreEs": "Naranja",
  "nombreEn": "Orange",
  "grupoEs": "Frutas citricas",
  "grupoEn": "Citrus fruits",
  "beneficiosEs": ["Excelente fuente de vitamina C", "Rica en flavonoides (hesperidina)", "Mejora absorcion de hierro", "Fortalece sistema inmune", "Fuente de folato"],
  "beneficiosEn": ["Excellent vitamin C source", "Rich in flavonoids (hesperidin)", "Improves iron absorption", "Strengthens immune system", "Folate source"],
  "nutrientesClave": ["Vitamina C", "Folato", "Potasio", "Hesperidina", "Fibra"],
  "porcion": "1 mediana (131 g)",
  "calorias": 62,
  "consejosPreparacionEs": ["Comer entera mejor que en jugo (conserva fibra)", "Combinar con alimentos ricos en hierro", "En ensaladas con espinacas", "Ralladura en cocina (flavonoides en cascara)"],
  "consejosPreparacionEn": ["Eat whole rather than juiced (preserves fiber)", "Combine with iron-rich foods", "In salads with spinach", "Zest in cooking (flavonoids in peel)"]
},
{
  "id": "platano",
  "nombreEs": "Platano/Banana",
  "nombreEn": "Banana",
  "grupoEs": "Frutas",
  "grupoEn": "Fruits",
  "beneficiosEs": ["Rica fuente de potasio", "Energia rapida natural para deportistas", "Contiene triptofano (precursor de serotonina)", "Los verdes son ricos en almidon resistente (prebiotico)", "Facil de digerir"],
  "beneficiosEn": ["Rich potassium source", "Natural quick energy for athletes", "Contains tryptophan (serotonin precursor)", "Green ones rich in resistant starch (prebiotic)", "Easy to digest"],
  "nutrientesClave": ["Potasio", "Vitamina B6", "Vitamina C", "Magnesio", "Fibra"],
  "porcion": "1 mediano (118 g)",
  "calorias": 105,
  "consejosPreparacionEs": ["Snack ideal pre-entreno", "Congelado en batidos (cremosidad natural)", "Rodajas sobre avena o yogur", "Platano maduro con canela al horno"],
  "consejosPreparacionEn": ["Ideal pre-workout snack", "Frozen in smoothies (natural creaminess)", "Slices over oatmeal or yogurt", "Ripe banana with cinnamon baked"]
},
{
  "id": "granada",
  "nombreEs": "Granada",
  "nombreEn": "Pomegranate",
  "grupoEs": "Frutas",
  "grupoEn": "Fruits",
  "beneficiosEs": ["Altisima en antioxidantes (punicalaginas)", "Reduce presion arterial", "Antiinflamatoria potente", "Puede mejorar memoria", "Protege salud arterial"],
  "beneficiosEn": ["Extremely high in antioxidants (punicalagins)", "Reduces blood pressure", "Potent anti-inflammatory", "May improve memory", "Protects arterial health"],
  "nutrientesClave": ["Punicalaginas", "Vitamina C", "Vitamina K", "Folato", "Potasio"],
  "porcion": "1/2 taza de arilos (87 g)",
  "calorias": 72,
  "consejosPreparacionEs": ["Arilos sobre ensaladas y yogur", "Jugo de granada natural (sin azucar)", "Decorar platos y postres", "Guardar arilos en congelador"],
  "consejosPreparacionEn": ["Arils over salads and yogurt", "Natural pomegranate juice (no sugar)", "Garnish dishes and desserts", "Store arils in freezer"]
},
{
  "id": "cacao",
  "nombreEs": "Cacao / Chocolate oscuro",
  "nombreEn": "Cacao / Dark chocolate",
  "grupoEs": "Superalimentos",
  "grupoEn": "Superfoods",
  "beneficiosEs": ["Muy alto en antioxidantes (flavanoles)", "Mejora flujo sanguineo y presion arterial", "Puede mejorar funcion cognitiva", "Rico en magnesio y hierro", "Mejora estado de animo"],
  "beneficiosEn": ["Very high in antioxidants (flavanols)", "Improves blood flow and blood pressure", "May improve cognitive function", "Rich in magnesium and iron", "Improves mood"],
  "nutrientesClave": ["Flavanoles", "Magnesio", "Hierro", "Cobre", "Manganeso"],
  "porcion": "28 g chocolate >70% cacao",
  "calorias": 170,
  "consejosPreparacionEs": ["Elegir >70% cacao para maximos beneficios", "1-2 onzas al dia es suficiente", "Cacao en polvo sin azucar en batidos", "Evitar chocolate con leche (menos beneficios)"],
  "consejosPreparacionEn": ["Choose >70% cacao for maximum benefits", "1-2 ounces daily is sufficient", "Unsweetened cocoa powder in smoothies", "Avoid milk chocolate (fewer benefits)"]
},
{
  "id": "kefir",
  "nombreEs": "Kefir",
  "nombreEn": "Kefir",
  "grupoEs": "Lacteos fermentados",
  "grupoEn": "Fermented dairy",
  "beneficiosEs": ["Contiene hasta 61 cepas de probioticos", "Mayor diversidad probiotica que yogur", "Mejora digestion de lactosa", "Fortalece salud osea", "Refuerza sistema inmune"],
  "beneficiosEn": ["Contains up to 61 probiotic strains", "Greater probiotic diversity than yogurt", "Improves lactose digestion", "Strengthens bone health", "Boosts immune system"],
  "nutrientesClave": ["Probioticos", "Calcio", "Proteina", "Vitamina B12", "Vitamina K2"],
  "porcion": "1 taza (240 mL)",
  "calorias": 104,
  "consejosPreparacionEs": ["Beber solo o en batidos", "Se puede hacer en casa con granos de kefir", "Sustituir leche en recetas", "Elegir sin azucar anadida"],
  "consejosPreparacionEn": ["Drink alone or in smoothies", "Can be made at home with kefir grains", "Substitute milk in recipes", "Choose without added sugar"]
},
{
  "id": "remolacha",
  "nombreEs": "Remolacha/Betabel",
  "nombreEn": "Beetroot",
  "grupoEs": "Verduras/raices",
  "grupoEn": "Vegetables/roots",
  "beneficiosEs": ["Rica en nitratos que mejoran rendimiento atletico", "Reduce presion arterial", "Mejora flujo sanguineo cerebral", "Fuente de folato y manganeso", "Propiedades antiinflamatorias"],
  "beneficiosEn": ["Rich in nitrates that improve athletic performance", "Reduces blood pressure", "Improves cerebral blood flow", "Source of folate and manganese", "Anti-inflammatory properties"],
  "nutrientesClave": ["Nitratos", "Folato", "Manganeso", "Potasio", "Vitamina C", "Betaina"],
  "porcion": "1 taza cocida (136 g)",
  "calorias": 59,
  "consejosPreparacionEs": ["Jugo de remolacha 2-3 horas antes de ejercicio", "Asada al horno con aceite de oliva", "Rallada cruda en ensaladas", "En hummus de remolacha"],
  "consejosPreparacionEn": ["Beetroot juice 2-3 hours before exercise", "Oven-roasted with olive oil", "Grated raw in salads", "In beetroot hummus"]
},
{
  "id": "moras-acai",
  "nombreEs": "Acai / Moras de acai",
  "nombreEn": "Acai berries",
  "grupoEs": "Frutas/bayas",
  "grupoEn": "Fruits/berries",
  "beneficiosEs": ["Altisimas en antocianinas antioxidantes", "Puede mejorar perfil lipidico", "Antiinflamatoria", "Rica en fibra", "Puede mejorar funcion cognitiva"],
  "beneficiosEn": ["Extremely high in antioxidant anthocyanins", "May improve lipid profile", "Anti-inflammatory", "Rich in fiber", "May improve cognitive function"],
  "nutrientesClave": ["Antocianinas", "Fibra", "Grasas saludables", "Calcio", "Vitamina A"],
  "porcion": "100 g de pulpa",
  "calorias": 70,
  "consejosPreparacionEs": ["Bowls de acai con frutas y granola", "Pulpa congelada en batidos", "Evitar versiones con mucha azucar anadida", "Combinar con platano y frutas del bosque"],
  "consejosPreparacionEn": ["Acai bowls with fruits and granola", "Frozen pulp in smoothies", "Avoid versions with lots of added sugar", "Combine with banana and berries"]
}
]`;

const alimentosArray: AlimentoSaludable[] = [
  ...JSON.parse(alimentosRaw1) as AlimentoSaludable[],
  ...JSON.parse(alimentosRaw2) as AlimentoSaludable[],
  ...JSON.parse(alimentosRaw3) as AlimentoSaludable[]
];

export const ALIMENTOS_SALUDABLES: AlimentoSaludable[] = alimentosArray;

// ============================================================
// FUNCIONES DE BUSQUEDA / SEARCH HELPERS
// ============================================================

/**
 * Buscar nutriente por texto libre (nombre, tipo, funcion).
 * Search nutrients by free text (name, type, function).
 */
export function buscarNutriente(query: string): NutrienteInfo[] {
  const q = query.toLowerCase();
  return NUTRIENTES.filter(n =>
    n.nombreEs.toLowerCase().includes(q) ||
    n.nombreEn.toLowerCase().includes(q) ||
    n.tipoEs.toLowerCase().includes(q) ||
    n.tipoEn.toLowerCase().includes(q) ||
    n.funcionEs.toLowerCase().includes(q) ||
    n.funcionEn.toLowerCase().includes(q) ||
    n.id.toLowerCase().includes(q) ||
    n.categoria.toLowerCase().includes(q)
  );
}

/**
 * Obtener dietas recomendadas para una condicion medica.
 * Get recommended diets for a medical condition.
 */
export function getDietaPorCondicion(condicion: string): DietaEspecial[] {
  const q = condicion.toLowerCase();
  return DIETAS_ESPECIALES.filter(d =>
    d.indicadaParaEs.some(i => i.toLowerCase().includes(q)) ||
    d.indicadaParaEn.some(i => i.toLowerCase().includes(q)) ||
    d.nombreEs.toLowerCase().includes(q) ||
    d.nombreEn.toLowerCase().includes(q) ||
    d.descripcionEs.toLowerCase().includes(q) ||
    d.descripcionEn.toLowerCase().includes(q)
  );
}

/**
 * Obtener alimentos saludables por grupo alimenticio.
 * Get healthy foods by food group.
 */
export function getAlimentosPorGrupo(grupo: string): AlimentoSaludable[] {
  const q = grupo.toLowerCase();
  return ALIMENTOS_SALUDABLES.filter(a =>
    a.grupoEs.toLowerCase().includes(q) ||
    a.grupoEn.toLowerCase().includes(q) ||
    a.nombreEs.toLowerCase().includes(q) ||
    a.nombreEn.toLowerCase().includes(q)
  );
}

/**
 * Obtener nutrientes filtrados por tipo (vitamina, mineral, macro, etc).
 * Get nutrients filtered by type (vitamin, mineral, macro, etc).
 */
export function getNutrientesPorTipo(tipo: string): NutrienteInfo[] {
  const q = tipo.toLowerCase();
  return NUTRIENTES.filter(n =>
    n.tipoEs.toLowerCase().includes(q) ||
    n.tipoEn.toLowerCase().includes(q) ||
    n.categoria.toLowerCase().includes(q)
  );
}
