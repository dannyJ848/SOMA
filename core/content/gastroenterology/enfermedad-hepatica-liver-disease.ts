/**
 * Enfermedad Hepática / Liver Disease - Comprehensive Bilingual Educational Content
 *
 * Contenido educativo integral sobre enfermedad hepática incluyendo cirrosis,
 * hepatitis viral, enfermedad hepática grasa asociada a disfunción metabólica (MASLD),
 * hepatitis autoinmune y complicaciones de la cirrosis.
 *
 * Comprehensive educational content on liver disease including cirrhosis,
 * viral hepatitis, metabolic dysfunction-associated steatotic liver disease (MASLD),
 * autoimmune hepatitis, and complications of cirrhosis.
 */

import { EducationalContent } from '../types';

export const enfermedadHepaticaLiverDisease: EducationalContent = {
  id: 'condition-enfermedad-hepatica',
  type: 'condition',
  name: 'Liver Disease',
  nameEs: 'Enfermedad Hepática',
  alternateNames: [
    'Cirrosis',
    'Cirrhosis',
    'Hepatitis',
    'Enfermedad Hepática Crónica',
    'Chronic Liver Disease',
    'Hepatopatía',
    'MASLD',
    'MAFLD',
    'Enfermedad Hepática Grasa',
    'Fatty Liver Disease',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El hígado es uno de los órganos más importantes del cuerpo. La enfermedad hepática ocurre cuando el hígado se daña por infecciones (hepatitis), alcohol, grasa o enfermedades del sistema inmune. Si no se trata, puede causar cicatrización permanente llamada cirrosis. | The liver is one of the most important organs in the body. Liver disease occurs when the liver is damaged by infections (hepatitis), alcohol, fat, or immune system diseases. If untreated, it can cause permanent scarring called cirrhosis.',
      explanation: `## Explicación

El hígado es como una fábrica enorme dentro de tu cuerpo, ubicada en el lado derecho de tu barriga debajo de las costillas. Es el órgano interno más grande y hace más de 500 trabajos diferentes.

**¿Qué hace el hígado?**

- Limpia la sangre de toxinas y sustancias dañinas
- Produce bilis para ayudar a digerir las grasas
- Almacena energía (glucosa) para cuando la necesitas
- Produce proteínas importantes para la sangre
- Ayuda a combatir infecciones
- Procesa las medicinas que tomas

**¿Qué es la enfermedad hepática?**

Cuando algo daña el hígado repetidamente, las células del hígado se lastiman y mueren. El hígado intenta repararse formando cicatrices. Si el daño continúa, cada vez hay más cicatrices y menos hígado funcionando bien.

**Causas principales:**

1. **Hepatitis viral:** Virus que atacan directamente al hígado (hepatitis A, B y C)
2. **Alcohol:** Beber demasiado alcohol daña las células del hígado
3. **Hígado graso:** Demasiada grasa acumulada en el hígado, generalmente por sobrepeso
4. **Enfermedades autoinmunes:** El sistema de defensa ataca al hígado por error

**¿Qué es la cirrosis?**

La cirrosis es cuando el hígado tiene tantas cicatrices que ya no puede funcionar bien. Es como si una esponja suave se convirtiera en una roca dura.

**Síntomas de enfermedad hepática:**

- Cansancio extremo
- Color amarillo en la piel y ojos (ictericia)
- Hinchazón de la barriga (ascitis)
- Hinchazón de las piernas
- Moretones fáciles
- Confusión mental
- Picazón en la piel

**¿Se puede prevenir?**

- No beber alcohol en exceso
- Vacunarse contra hepatitis A y B
- Mantener un peso saludable
- No compartir agujas
- Tomar medicinas solo como las receta el doctor

---
## Explanation

The liver is like a huge factory inside your body, located on the right side of your belly under the ribs. It is the largest internal organ and performs over 500 different jobs including cleaning blood, producing bile, storing energy, making blood proteins, fighting infections, and processing medicines.

**What is liver disease?** When something damages the liver repeatedly, liver cells get hurt and die. The liver tries to repair itself by forming scars. Continued damage leads to more scars and less functioning liver.

**Main causes:** Viral hepatitis (A, B, C), alcohol, fatty liver from overweight, and autoimmune diseases.

**What is cirrhosis?** When the liver has so many scars it can no longer work well.

**Prevention:** Limit alcohol, get vaccinated for hepatitis A and B, maintain healthy weight, don't share needles, take medicines only as prescribed.`,
      keyTerms: [
        {
          term: 'hígado / liver',
          definition:
            'El órgano interno más grande del cuerpo; limpia la sangre, produce bilis, almacena energía y hace muchas otras funciones vitales. | The body\'s largest internal organ; cleans blood, produces bile, stores energy, and performs many other vital functions.',
        },
        {
          term: 'cirrosis / cirrhosis',
          definition:
            'Cicatrización severa del hígado que impide que funcione bien. Es el resultado de daño hepático crónico. | Severe scarring of the liver that prevents it from working well. It is the result of chronic liver damage.',
          pronunciation: 'see-RROH-sis',
        },
        {
          term: 'hepatitis / hepatitis',
          definition:
            'Inflamación del hígado, puede ser causada por virus, alcohol, grasa o el sistema inmune. | Inflammation of the liver, can be caused by viruses, alcohol, fat, or the immune system.',
          pronunciation: 'eh-pah-TEE-tis',
        },
        {
          term: 'ictericia / jaundice',
          definition:
            'Color amarillo de la piel y los ojos causado por acumulación de bilirrubina cuando el hígado no funciona bien. | Yellow color of skin and eyes caused by bilirubin buildup when the liver is not working well.',
          pronunciation: 'ik-teh-REE-see-ah / JAWN-dis',
        },
        {
          term: 'bilis / bile',
          definition:
            'Líquido verde-amarillo producido por el hígado que ayuda a digerir las grasas de la comida. | Green-yellow fluid produced by the liver that helps digest fats in food.',
        },
      ],
      analogies: [
        'El hígado es como el filtro de agua de tu casa: limpia todo lo que pasa por él. Si el filtro se tapa con suciedad (cicatrices), el agua ya no sale limpia. | The liver is like your home\'s water filter: it cleans everything that passes through it. If the filter gets clogged with dirt (scars), the water no longer comes out clean.',
        'La cirrosis es como cuando una carretera se llena de baches. Al principio puedes esquivarlos, pero eventualmente hay tantos que no puedes pasar. | Cirrhosis is like a road filling up with potholes. At first you can dodge them, but eventually there are so many you can\'t get through.',
      ],
      examples: [
        'Una persona que bebe mucho alcohol durante muchos años puede desarrollar cirrosis porque el alcohol es tóxico para las células del hígado. | A person who drinks a lot of alcohol for many years can develop cirrhosis because alcohol is toxic to liver cells.',
        'Alguien con sobrepeso puede tener acumulación de grasa en el hígado (hígado graso) sin saberlo, porque al principio no causa síntomas. | Someone who is overweight may have fat buildup in the liver (fatty liver) without knowing it, because at first it causes no symptoms.',
      ],
      patientCounselingPoints: [
        'Si te diagnosticaron enfermedad del hígado, la cosa más importante que puedes hacer es NO beber alcohol. Incluso pequeñas cantidades pueden empeorar el daño. | If you are diagnosed with liver disease, the most important thing you can do is NOT drink alcohol. Even small amounts can worsen the damage.',
        'Muchas medicinas, incluyendo las que compras sin receta (como el acetaminofén/paracetamol), pueden dañar el hígado si se toman en exceso. Siempre consulta con tu doctor. | Many medications, including over-the-counter ones (like acetaminophen/paracetamol), can damage the liver if taken in excess. Always consult your doctor.',
        'La hepatitis B y C se pueden transmitir por contacto con sangre infectada. Es importante hacerse la prueba si tienes factores de riesgo. | Hepatitis B and C can be transmitted through contact with infected blood. It is important to get tested if you have risk factors.',
        'Mantener un peso saludable y hacer ejercicio regularmente son las mejores formas de prevenir el hígado graso. | Maintaining a healthy weight and exercising regularly are the best ways to prevent fatty liver.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La enfermedad hepática crónica progresa desde inflamación hasta fibrosis y finalmente cirrosis. Las causas principales son hepatitis viral (B y C), enfermedad hepática esteatósica asociada a disfunción metabólica (MASLD), alcohol y hepatitis autoinmune. La cirrosis se clasifica como compensada o descompensada según la presencia de complicaciones. | Chronic liver disease progresses from inflammation to fibrosis and finally cirrhosis. Main causes are viral hepatitis (B and C), metabolic dysfunction-associated steatotic liver disease (MASLD), alcohol, and autoimmune hepatitis. Cirrhosis is classified as compensated or decompensated based on complications.',
      explanation: `## Explicación

### Progresión de la Enfermedad Hepática

Hígado normal → Esteatosis (grasa) → Hepatitis/Inflamación → Fibrosis → Cirrosis → Carcinoma hepatocelular

### Causas Principales

**1. Hepatitis Viral:**

**Hepatitis B (VHB):**
- Transmisión: Sangre, sexual, perinatal (madre a hijo)
- Crónica en ~5% de adultos (90% de neonatos)
- Puede causar cirrosis y cáncer de hígado
- Prevenible con vacuna
- Tratamiento: Antivirales (entecavir, tenofovir)

**Hepatitis C (VHC):**
- Transmisión: Sangre (drogas IV, transfusiones antiguas)
- Crónica en 75-85% de infectados
- Causa más común de trasplante hepático históricamente
- NO hay vacuna
- Tratamiento: Antivirales de acción directa (AAD) curan >95% de los casos

**2. MASLD (antes llamada NAFLD/NASH):**
- Causa más común de enfermedad hepática en países occidentales
- Asociada a: Obesidad, diabetes tipo 2, síndrome metabólico, dislipidemia
- Espectro: Esteatosis simple → MASH (esteatohepatitis) → Fibrosis → Cirrosis
- Diagnóstico: Ecografía, elastografía, biopsia hepática
- Tratamiento: Pérdida de peso (7-10%), ejercicio, control de comorbilidades metabólicas

**3. Enfermedad Hepática por Alcohol:**
- Espectro: Esteatosis alcohólica → Hepatitis alcohólica → Cirrosis
- Hepatitis alcohólica aguda: Puede ser grave y mortal
- Tratamiento: Abstinencia absoluta de alcohol + soporte nutricional

**4. Hepatitis Autoinmune:**
- El sistema inmune ataca las células del hígado
- Más común en mujeres jóvenes
- Asociada a anticuerpos: ANA, anti-músculo liso (ASMA), anti-LKM1
- Tratamiento: Corticosteroides y azatioprina

### Cirrosis: Compensada vs Descompensada

**Cirrosis Compensada:**
- El hígado todavía funciona razonablemente bien
- Puede no tener síntomas obvios

**Cirrosis Descompensada (presencia de complicaciones):**
- **Ascitis:** Acumulación de líquido en el abdomen
- **Encefalopatía hepática:** Confusión mental, desorientación
- **Varices esofágicas sangrantes:** Venas dilatadas en el esófago que pueden romperse
- **Ictericia:** Coloración amarilla de piel y ojos
- **Síndrome hepatorrenal:** Fallo renal causado por la cirrosis

### Clasificación de Child-Pugh

Evalúa la función hepática usando 5 parámetros: Albúmina, bilirrubina, INR, ascitis y encefalopatía.
- Child A (5-6 puntos): Cirrosis compensada
- Child B (7-9 puntos): Compromiso funcional significativo
- Child C (10-15 puntos): Enfermedad hepática avanzada

### Estudios Diagnósticos

**Laboratorio:**
- AST, ALT (enzimas hepáticas - indican daño celular)
- Fosfatasa alcalina, GGT (indican obstrucción biliar)
- Bilirrubina, albúmina, INR (función hepática)
- Plaquetas bajas: Sugieren hipertensión portal/cirrosis

**Imagen:**
- Ecografía: Primera línea; detecta esteatosis, nódulos, ascitis
- Elastografía (FibroScan): Mide la rigidez hepática (correlaciona con fibrosis)
- TC/RM: Evalúa nódulos hepáticos, carcinoma hepatocelular

---
## Explanation

### Liver Disease Progression
Normal liver → Steatosis → Hepatitis/Inflammation → Fibrosis → Cirrhosis → Hepatocellular carcinoma.

### Main Causes
Viral hepatitis (B: vaccine preventable; C: curable with DAAs), MASLD (most common in western countries), alcoholic liver disease, and autoimmune hepatitis.

### Compensated vs Decompensated Cirrhosis
Compensated: functioning, may be asymptomatic. Decompensated: ascites, hepatic encephalopathy, variceal bleeding, jaundice, hepatorenal syndrome.

### Child-Pugh Classification
Assesses liver function: albumin, bilirubin, INR, ascites, encephalopathy. Class A (compensated), B (impairment), C (advanced).`,
      keyTerms: [
        {
          term: 'MASLD / MASLD',
          definition:
            'Enfermedad hepática esteatósica asociada a disfunción metabólica (antes NAFLD). Acumulación de grasa en el hígado relacionada con obesidad y síndrome metabólico. | Metabolic dysfunction-associated steatotic liver disease (formerly NAFLD). Fat accumulation in the liver related to obesity and metabolic syndrome.',
        },
        {
          term: 'fibrosis / fibrosis',
          definition:
            'Formación de tejido cicatricial en el hígado como respuesta al daño crónico. Es reversible en etapas tempranas. | Formation of scar tissue in the liver in response to chronic damage. Reversible in early stages.',
        },
        {
          term: 'elastografía / elastography',
          definition:
            'Técnica no invasiva (FibroScan) que mide la rigidez del hígado para estimar el grado de fibrosis sin biopsia. | Non-invasive technique (FibroScan) measuring liver stiffness to estimate fibrosis without biopsy.',
        },
        {
          term: 'ascitis / ascites',
          definition:
            'Acumulación de líquido en la cavidad abdominal; complicación común de la cirrosis descompensada. | Fluid accumulation in the abdominal cavity; common complication of decompensated cirrhosis.',
          pronunciation: 'ah-SEE-tis / ah-SY-teez',
        },
        {
          term: 'encefalopatía hepática / hepatic encephalopathy',
          definition:
            'Alteración de la función cerebral causada por toxinas (amonio) que el hígado enfermo no puede eliminar. | Altered brain function caused by toxins (ammonia) the diseased liver cannot eliminate.',
        },
        {
          term: 'antivirales de acción directa (AAD) / direct-acting antivirals (DAAs)',
          definition:
            'Medicamentos que curan la hepatitis C en >95% de los casos al inhibir directamente la replicación del virus. | Medications curing hepatitis C in >95% of cases by directly inhibiting viral replication.',
        },
      ],
      analogies: [
        'La progresión de la enfermedad hepática es como un edificio que se deteriora: primero aparecen grietas pequeñas (inflamación), luego parches que no son tan fuertes (fibrosis), y finalmente toda la estructura es más parche que edificio original (cirrosis). | Liver disease progression is like a building deteriorating: first small cracks (inflammation), then repair patches not as strong (fibrosis), finally more patch than original building (cirrhosis).',
        'La hipertensión portal es como un embotellamiento de tráfico: la sangre no puede pasar por el hígado endurecido, así que busca rutas alternativas (varices) que no están diseñadas para tanto tráfico. | Portal hypertension is like a traffic jam: blood can\'t pass through the hardened liver, so it finds alternative routes (varices) not designed for so much traffic.',
      ],
      examples: [
        'Un paciente de 50 años con diabetes, obesidad e hígado graso puede desarrollar fibrosis progresiva durante años sin síntomas. El FibroScan detecta la fibrosis antes de que aparezcan complicaciones. | A 50-year-old with diabetes, obesity, and fatty liver can develop progressive fibrosis for years without symptoms. FibroScan detects fibrosis before complications appear.',
      ],
      patientCounselingPoints: [
        'La hepatitis C ahora se puede CURAR con pastillas en 8-12 semanas. Si tiene factores de riesgo, hágase la prueba. | Hepatitis C can now be CURED with pills in 8-12 weeks. If you have risk factors, get tested.',
        'Para el hígado graso, perder el 7-10% de su peso corporal puede revertir la enfermedad. La dieta y el ejercicio son el tratamiento principal. | For fatty liver, losing 7-10% of body weight can reverse the disease. Diet and exercise are the main treatment.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La enfermedad hepática crónica involucra activación de células estelares hepáticas, fibrogénesis progresiva e hipertensión portal. El manejo incluye terapia etiológica específica, estadificación de fibrosis no invasiva, y manejo de complicaciones de la cirrosis. MASLD/MASH es la causa emergente principal con nuevas opciones terapéuticas. | Chronic liver disease involves hepatic stellate cell activation, progressive fibrogenesis, and portal hypertension. Management includes specific etiologic therapy, non-invasive fibrosis staging, and cirrhosis complications management. MASLD/MASH is the leading emerging cause with new treatment options.',
      explanation: `## Explicación

### Fisiopatología de la Fibrogénesis Hepática

**Células Estelares Hepáticas (HSC):**
- En estado quiescente: almacenan vitamina A
- Tras daño hepático: se activan y se convierten en miofibroblastos
- Producen colágeno tipo I y III (principal componente de la fibrosis)
- Señales activadoras: TGF-beta, PDGF, citocinas inflamatorias
- La fibrosis temprana es REVERSIBLE si se elimina la causa

**Secuencia de Fibrogénesis:**
1. Daño hepatocelular → muerte celular
2. Activación de células de Kupffer (macrófagos hepáticos)
3. Liberación de citocinas proinflamatorias y profibrogénicas
4. Activación de células estelares → miofibroblastos
5. Depósito de colágeno extracelular
6. Distorsión de la arquitectura hepática → nódulos de regeneración
7. Aumento de la resistencia vascular intrahepática → hipertensión portal

### Hipertensión Portal

**Definición:** Gradiente de presión venosa hepática (HVPG) >5 mmHg

**Clasificación:**
- 6-9 mmHg: Hipertensión portal subclínica
- ≥10 mmHg: Clínicamente significativa (varices, ascitis)
- ≥12 mmHg: Riesgo de sangrado variceal
- ≥20 mmHg: Predictor de fallo en control de sangrado

**Consecuencias:**
- Formación de colaterales portosistémicas (varices)
- Esplenomegalia con hiperesplenismo
- Ascitis
- Encefalopatía hepática portosistémica
- Síndrome hepatorrenal y hepatopulmonar

### MASLD/MASH - Actualización

**Nueva Nomenclatura (2023):**
- NAFLD → MASLD (Metabolic dysfunction-Associated Steatotic Liver Disease)
- NASH → MASH (Metabolic dysfunction-Associated Steatohepatitis)

**Diagnóstico:**
- FIB-4 Index: <1.3 (bajo riesgo), 1.3-2.67 (indeterminado), >2.67 (alto riesgo)
- Elastografía (VCTE/FibroScan): CAP para esteatosis, rigidez para fibrosis
- Biopsia hepática: Estándar de oro pero invasiva

**Tratamiento:**
- Pérdida de peso ≥7-10% (efecto más potente)
- Resmetirom: Primer fármaco aprobado por FDA para MASH con fibrosis
- Semaglutida (agonista GLP-1): Mejora MASH y beneficio cardiometabólico
- Pioglitazona: Mejora MASH en diabéticos y no diabéticos
- Vitamina E (800 UI/día): Mejora MASH en no diabéticos sin cirrosis

### Manejo de Complicaciones de la Cirrosis

**Ascitis:**
- Restricción de sodio (<2g/día) + espironolactona (100mg) +/- furosemida (40mg)
- Refractaria: Paracentesis terapéutica + albúmina IV
- TIPS en seleccionados
- PBE: PMN >250/mm3 en líquido ascítico → cefotaxima IV

**Varices Esofágicas:**
- Profilaxis primaria: Beta-bloqueadores no selectivos (carvedilol) O ligadura endoscópica
- Sangrado agudo: Restitución volumen + octreotida/terlipresina + ligadura + antibióticos
- Profilaxis secundaria: Beta-bloqueadores + ligadura; TIPS si fallo

**Encefalopatía Hepática:**
- Tratamiento: Lactulosa (objetivo 2-3 deposiciones blandas/día) + rifaximina (550mg 2x/día)
- Identificar y tratar precipitante
- NO restringir proteínas

**Vigilancia CHC:**
- Todo paciente con cirrosis: Ecografía + AFP cada 6 meses
- VHB crónico: Vigilancia incluso sin cirrosis si alto riesgo
- Nódulo sospechoso: TC/RM multifásica

---
## Explanation

### Hepatic Fibrogenesis
Hepatic stellate cells activate into myofibroblasts producing collagen. Sequence: hepatocellular damage → Kupffer cell activation → cytokine release → stellate cell activation → collagen deposition → portal hypertension.

### Portal Hypertension
HVPG >5 mmHg. Clinically significant at ≥10 mmHg. Consequences: varices, ascites, encephalopathy, hepatorenal syndrome.

### MASLD/MASH
New nomenclature (2023). FIB-4 for screening. Resmetirom first FDA-approved drug for MASH with fibrosis. Weight loss ≥7-10% most effective.

### Cirrhosis Complications
Ascites: sodium restriction + diuretics. Varices: beta-blockers or band ligation. Encephalopathy: lactulose + rifaximin. HCC surveillance: ultrasound + AFP every 6 months.`,
      keyTerms: [
        {
          term: 'células estelares hepáticas / hepatic stellate cells',
          definition:
            'Células que al activarse producen colágeno, siendo las principales responsables de la fibrosis hepática. | Cells that when activated produce collagen, being the main drivers of hepatic fibrosis.',
        },
        {
          term: 'HVPG',
          definition:
            'Gradiente de presión venosa hepática; >5 mmHg define hipertensión portal; ≥10 mmHg es clínicamente significativa. | Hepatic venous pressure gradient; >5 mmHg defines portal hypertension; ≥10 mmHg is clinically significant.',
        },
        {
          term: 'FIB-4 Index',
          definition:
            'Calculadora no invasiva usando edad, AST, ALT y plaquetas para estratificar riesgo de fibrosis avanzada. | Non-invasive calculator using age, AST, ALT, and platelets to stratify advanced fibrosis risk.',
        },
        {
          term: 'resmetirom',
          definition:
            'Agonista selectivo del receptor de hormona tiroidea beta; primer fármaco aprobado por FDA para MASH con fibrosis. | Selective thyroid hormone receptor beta agonist; first FDA-approved drug for MASH with fibrosis.',
        },
        {
          term: 'TIPS',
          definition:
            'Derivación portosistémica intrahepática transyugular; shunt entre vena porta y vena hepática para reducir presión portal. | Transjugular intrahepatic portosystemic shunt; between portal and hepatic veins to reduce portal pressure.',
        },
        {
          term: 'peritonitis bacteriana espontánea (PBE)',
          definition:
            'Infección del líquido ascítico sin fuente intraabdominal; diagnóstico: >250 PMN/mm3 en líquido ascítico. | Ascitic fluid infection without intra-abdominal source; diagnosis: >250 PMN/mm3 in ascitic fluid.',
        },
      ],
      clinicalNotes:
        'FIB-4 es la herramienta de tamizaje inicial más importante para fibrosis avanzada en atención primaria. FIB-4 <1.3 tiene VPN >90%. Resmetirom marca un cambio de paradigma como primera terapia farmacológica para MASH. Ecografía + AFP cada 6 meses es MANDATORIA en cirrosis para CHC. La PBE tiene mortalidad >20%; todo cirrótico con ascitis y fiebre/dolor/deterioro necesita paracentesis diagnóstica. | FIB-4 is the most important initial screening tool for advanced fibrosis in primary care. FIB-4 <1.3 has >90% NPV. Resmetirom is a paradigm shift as first pharmacologic MASH therapy. Ultrasound + AFP every 6 months MANDATORY in cirrhosis for HCC. SBP has >20% mortality; all cirrhosis patients with ascites and fever/pain/deterioration need diagnostic paracentesis.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de la enfermedad hepática requiere estadificación de fibrosis mediante algoritmos secuenciales, manejo basado en HVPG para hipertensión portal según Baveno VII, evaluación para trasplante hepático, y conocimiento de nuevas terapias para MASH (resmetirom, agonistas GLP-1, tirzepatida). | Advanced liver disease management requires sequential fibrosis staging algorithms, HVPG-based portal hypertension management per Baveno VII, liver transplant evaluation, and knowledge of new MASH therapies (resmetirom, GLP-1 agonists, tirzepatide).',
      explanation: `## Explicación

### Estadificación de Fibrosis - Algoritmos Secuenciales

**Paso 1 - Tamizaje (Atención Primaria):**
- FIB-4 Index:
  - <1.3: Riesgo bajo → repetir en 1-2 años
  - 1.3-2.67: Indeterminado → Paso 2
  - >2.67: Alto riesgo → referencia a hepatología

**Paso 2 - Confirmación:**
- Elastografía (VCTE/FibroScan):
  - <8 kPa: Sin fibrosis significativa (F0-F1)
  - 8-12 kPa: Fibrosis significativa posible (F2)
  - 12-25 kPa: Fibrosis avanzada (F3-F4)
  - >25 kPa: Cirrosis probable (F4)

**Paso 3 - Caracterización Avanzada:**
- Elastografía por RM (MRE): Mayor precisión
- ELF Test: Panel sérico (HA, PIIINP, TIMP-1)
- Biopsia hepática: Para diagnóstico incierto

### Manejo Basado en HVPG y Baveno VII (2022)

**Baveno VII Reglas Clave:**
- Elastografía <15 kPa + plaquetas >150,000: Muy bajo riesgo de varices significativas → evitar endoscopia
- Elastografía ≥20 kPa: Hipertensión portal clínicamente significativa probable
- Carvedilol como beta-bloqueador preferido

**Pre-primary Prophylaxis:**
- Carvedilol en HPCS (HVPG ≥10 mmHg o elastografía ≥25 kPa) INCLUSO sin varices
- PREDESCI Trial: Carvedilol reduce descompensación

### Síndrome Hepatorrenal (SHR)

**Clasificación (ICA 2019):**
- SHR-AKI: Aumento creatinina ≥0.3 mg/dL en 48h o ≥50% en 7 días
- SHR-CKD: eGFR <60 por >3 meses

**Tratamiento SHR-AKI:**
1. Suspender diuréticos y nefrotóxicos
2. Expansión con albúmina (1 g/kg/día x 2 días)
3. Terlipresina + albúmina (CONFIRM Trial)
4. Alternativa: Norepinefrina + albúmina (UCI)
5. Definitivo: Trasplante hepático

### MASH - Terapias Farmacológicas

**Resmetirom (Rezdiffra):**
- Agonista THR-beta selectivo
- MAESTRO-NASH: Mejora histológica + reduce fibrosis
- Aprobado FDA 2024 para MASH F2-F3

**Semaglutida (GLP-1):**
- Resolución MASH en 59% vs 17% placebo (fase 2)
- Beneficio metabólico integral

**Tirzepatida (GLP-1/GIP dual):**
- SYNERGY-NASH: Resolución MASH en 44-62%
- Mejoría de fibrosis en 51-74%

**Pipeline:** Agonistas FXR, inhibidores ACC, agonistas PPAR (lanifibranor)

### Trasplante Hepático

**Indicaciones:**
- Cirrosis descompensada (Child-Pugh ≥7, MELD ≥15)
- CHC dentro de criterios de Milán (1 nódulo ≤5cm o ≤3 nódulos ≤3cm)
- Falla hepática aguda
- Enfermedades metabólicas hepáticas

**MELD-Na Score:**
- Variables: Bilirrubina, INR, creatinina, sodio
- Determina prioridad en lista de trasplante
- Excepciones MELD: CHC (puntos estandarizados)

---
## Explanation

### Sequential Fibrosis Staging
Step 1: FIB-4 screening. Step 2: Elastography. Step 3: MRE, ELF test, or biopsy for uncertain cases.

### Baveno VII Portal Hypertension Management
Elastography + platelets to avoid unnecessary endoscopy. Carvedilol for pre-primary prophylaxis per PREDESCI trial.

### Hepatorenal Syndrome
New classification (SHR-AKI, SHR-CKD). Terlipressin + albumin standard (CONFIRM trial). Transplant is definitive.

### MASH Pharmacotherapy
Resmetirom (first approved), semaglutide, tirzepatide (exceptional phase 2 results). Pipeline includes FXR, ACC, PPAR agonists.`,
      keyTerms: [
        {
          term: 'Baveno VII',
          definition:
            'Consenso internacional (2022) que actualiza manejo de hipertensión portal; introduce elastografía + plaquetas para evitar endoscopia innecesaria y profilaxis pre-primaria con carvedilol. | International consensus (2022) updating portal hypertension management; uses elastography + platelets to avoid unnecessary endoscopy and carvedilol pre-primary prophylaxis.',
        },
        {
          term: 'SHR-AKI',
          definition:
            'Síndrome hepatorrenal con injuria renal aguda; fallo renal funcional en cirrosis por vasoconstricción renal severa. | Hepatorenal syndrome with acute kidney injury; functional renal failure in cirrhosis from severe renal vasoconstriction.',
        },
        {
          term: 'terlipresina / terlipressin',
          definition:
            'Análogo de vasopresina para SHR-AKI; causa vasoconstricción esplácnica para mejorar perfusión renal. | Vasopressin analogue for SHR-AKI; causes splanchnic vasoconstriction to improve renal perfusion.',
        },
        {
          term: 'MELD-Na',
          definition:
            'Sistema de puntuación para mortalidad a 90 días en enfermedad hepática terminal; usa bilirrubina, INR, creatinina y sodio para priorizar trasplante. | Scoring system for 90-day mortality in end-stage liver disease; uses bilirubin, INR, creatinine, sodium for transplant prioritization.',
        },
        {
          term: 'PREDESCI Trial',
          definition:
            'Ensayo que demostró que beta-bloqueadores en HPCS sin varices reducen descompensación hepática. | Trial showing beta-blockers in CSPH without varices reduce hepatic decompensation.',
        },
        {
          term: 'tirzepatida / tirzepatide',
          definition:
            'Agonista dual GLP-1/GIP con resolución de MASH en hasta 74% en estudios fase 2. | Dual GLP-1/GIP agonist with MASH resolution in up to 74% in phase 2 studies.',
        },
      ],
      clinicalNotes:
        'Puntos clave: 1) FIB-4 debe ser universal en pacientes con riesgo metabólico. 2) Baveno VII: elastografía <15 + plaquetas >150K = no endoscopia. 3) SHR-AKI: terlipresina + albúmina es estándar; monitorizar broncoespasmo. 4) MASH: resmetirom + semaglutida cambian el panorama; tirzepatida puede ser superior. 5) MASLD es indicación de trasplante de más rápido crecimiento; evaluación cardiometabólica pretrasplante es crucial. | Key points: 1) FIB-4 should be universal for metabolic risk patients. 2) Baveno VII: elastography <15 + platelets >150K = no endoscopy. 3) SHR-AKI: terlipressin + albumin standard; monitor bronchospasm. 4) MASH: resmetirom + semaglutide changing landscape; tirzepatide may be superior. 5) MASLD fastest growing transplant indication; cardiometabolic pre-transplant evaluation crucial.',
    },

    5: {
      level: 5,
      summary:
        'La hepatología contemporánea integra elastografía avanzada, biomarcadores séricos y evaluación hemodinámica para medicina de precisión. El manejo de hipertensión portal se basa en Baveno VII con profilaxis pre-primaria. MASH tiene opciones farmacológicas transformadoras. El trasplante evoluciona con perfusión ex-vivo y donante vivo. Las fronteras incluyen cura funcional de VHB, terapias anti-fibróticas y AI para patología digital. | Contemporary hepatology integrates advanced elastography, serum biomarkers, and hemodynamic assessment for precision medicine. Portal hypertension management based on Baveno VII with pre-primary prophylaxis. MASH has transformative pharmacologic options. Transplant evolves with ex-vivo perfusion and living donor. Frontiers include HBV functional cure, anti-fibrotic therapies, and AI for digital pathology.',
      explanation: `## Explicación

### Medicina de Precisión en Hepatología

**Biomarcadores Avanzados de Fibrosis:**
- Pro-C3 (neoepitopo de colágeno tipo III): Marcador de fibrogénesis activa
- ELF Score: HA + PIIINP + TIMP-1; validado para predicción de eventos hepáticos
- Mac-2 binding protein glycosylation isomer (M2BPGi): Marcador sérico
- Combinaciones multimarcador mejoran rendimiento diagnóstico

**Elastografía Multiparamétrica:**
- VCTE: Rigidez + CAP en una medición
- Elastografía por RM (MRE): Mayor precisión para estadificación
- MRI-PDFF: Cuantificación precisa de esteatosis
- Ultrasonido pSWE y 2D-SWE: Alternativas emergentes

**Evaluación Hemodinámica:**
- HVPG: Estándar de oro para hipertensión portal
- Elastografía esplénica: Correlaciona con HVPG (>40 kPa sugiere HPCS)
- Von Willebrand Factor Antigen (vWF-Ag): Marcador no invasivo de HPCS
- LSPS (LSM x Spleen size / Platelet count): Predicción de varices

### Hepatitis B - Cura Funcional

**Terapias en desarrollo:**
- siRNA: Bepirovirsen, JNJ-3989 → reducción sostenida de HBsAg
- Inhibidores de entrada capsular: Bulevirtida (aprobado para HDV)
- Inmunoterapia: Vacunas terapéuticas, checkpoint inhibitors, TLR agonistas
- NAPs (Nucleic Acid Polymers): REP 2139 + peg-IFN con tasas prometedoras
- Objetivo: Eliminación de cccDNA o silenciamiento transcripcional

### MASH - Integración de Evidencia

**Ensayos Fundamentales:**

**MAESTRO-NASH (Resmetirom):**
- Resolución MASH: 25.9% vs 9.7% placebo
- Mejoría fibrosis ≥1 estadio: 24.2% vs 14.2%
- Aprobado FDA 2024 para MASH F2-F3

**SYNERGY-NASH (Tirzepatida):**
- Resolución MASH: 44-62% vs 10% placebo
- Mejoría fibrosis: 51-74% vs 30%
- Fase 3 (HARMONY) en curso

**Algoritmo Terapéutico Propuesto:**
1. Todos: Cambios en estilo de vida (≥10% pérdida de peso)
2. F2-F3 sin diabetes: Resmetirom +/- vitamina E
3. F2-F3 con diabetes/obesidad: Semaglutida o tirzepatida + resmetirom
4. F4 compensada: Manejo dirigido + vigilancia CHC
5. Cirrosis descompensada: Manejo complicaciones + evaluación trasplante

### Trasplante Hepático - Avances

**Perfusión Ex-Vivo con Máquina:**
- Normotérmica: Evaluación funcional del injerto antes del implante
- Hipotérmica oxigenada: Mejora función del injerto marginal
- Amplía pool de donantes

**Donante Vivo:**
- Lóbulo derecho (adulto) o izquierdo (pediátrico)
- Menor tiempo en lista, mejor timing
- Riesgo donante: Mortalidad ~0.2-0.5%, morbilidad ~15-30%
- Criterio: Remanente hepático ≥30% del volumen total

**Criterios Expandidos para CHC:**
- Milán: 1 ≤5cm o ≤3 ≤3cm (clásicos)
- UCSF: Hasta 6.5cm nódulo único o ≤3 ≤4.5cm
- AFP Score: Incorpora AFP y velocidad de crecimiento
- Downstaging: Terapia locoregional para cumplir criterios
- RETREAT Score: Predice recurrencia post-trasplante

**MASLD como Indicación:**
- Causa de más rápido crecimiento
- Evaluación cardiometabólica pretrasplante rigurosa
- Recurrencia MASLD/MASH post-trasplante frecuente (80% esteatosis)

### Fronteras de Investigación

**Bioingeniería:** Organoides hepáticos, bioimpresión 3D, hepatocitos iPSC
**IA:** Patología digital, predicción de descompensación, radiómics
**Eje Intestino-Hígado:** TMF en encefalopatía, terapias dirigidas al microbioma
**Anti-fibróticos puros:** En investigación temprana

---
## Explanation

### Precision Hepatology
Advanced biomarkers (Pro-C3, ELF, M2BPGi), multiparametric elastography, splenic stiffness, vWF as non-invasive CSPH marker.

### HBV Functional Cure
siRNA, capsid inhibitors, immunotherapy, NAPs. cccDNA elimination as ultimate target.

### MASH Evidence Integration
Resmetirom (MAESTRO-NASH), tirzepatide (SYNERGY-NASH). Treatment algorithm by fibrosis stage and metabolic comorbidities.

### Transplant Advances
Ex-vivo perfusion expanding donor pool. Living donor. Expanded HCC criteria with AFP score. MASLD fastest-growing indication.

### Research Frontiers
Liver bioengineering, AI digital pathology, gut-liver axis therapeutics, pure anti-fibrotics.`,
      keyTerms: [
        {
          term: 'cccDNA',
          definition:
            'ADN circular covalentemente cerrado del VHB en el núcleo del hepatocito; responsable de persistencia viral y objetivo para cura funcional. | HBV covalently closed circular DNA in hepatocyte nucleus; responsible for viral persistence and target for functional cure.',
        },
        {
          term: 'perfusión ex-vivo normotérmica',
          definition:
            'Técnica que mantiene el injerto hepático a temperatura corporal antes del trasplante, permitiendo evaluación funcional y ampliando el pool de donantes. | Technique maintaining liver graft at body temperature before transplant, allowing functional assessment and expanding donor pool.',
        },
        {
          term: 'MRI-PDFF',
          definition:
            'Proton Density Fat Fraction por RM; cuantificación precisa de grasa hepática; estándar no invasivo para esteatosis. | MRI Proton Density Fat Fraction; precise liver fat quantification; non-invasive standard for steatosis.',
        },
        {
          term: 'RETREAT Score',
          definition:
            'Predice recurrencia de CHC post-trasplante usando AFP, tamaño tumoral y respuesta a terapia locoregional. | Predicts post-transplant HCC recurrence using AFP, tumor size, and locoregional therapy response.',
        },
        {
          term: 'elastografía esplénica / splenic elastography',
          definition:
            'Rigidez del bazo por elastografía; correlaciona con HVPG como marcador no invasivo de hipertensión portal clínicamente significativa. | Spleen stiffness by elastography; correlates with HVPG as non-invasive marker of clinically significant portal hypertension.',
        },
        {
          term: 'eje intestino-hígado / gut-liver axis',
          definition:
            'Comunicación bidireccional microbioma-hígado vía vena porta; disbiosis contribuye a inflamación y progresión hepática. | Bidirectional microbiome-liver communication via portal vein; dysbiosis contributes to inflammation and liver disease progression.',
        },
      ],
      clinicalNotes:
        'Puntos MD/Especialista:\n\n1. **Tamizaje poblacional:** FIB-4 universal en riesgo metabólico. Identificación temprana de MASLD con fibrosis es clave.\n\n2. **Baveno VII:** Regla elastografía <15 + plaquetas >150K solo si etiología tratada. Profilaxis pre-primaria con carvedilol es cambio de paradigma.\n\n3. **MASH:** Resmetirom primera línea F2-F3. GLP-1 agonistas abordan MASH + comorbilidades. Combinación es el futuro.\n\n4. **SHR-AKI:** Terlipresina efectiva pero riesgo de eventos adversos graves. Trasplante es definitivo.\n\n5. **Trasplante:** Perfusión ex-vivo amplía donantes. MASLD requiere evaluación cardiometabólica rigurosa. Recurrencia post-trasplante frecuente.\n\n6. **VHB:** siRNA + inmunoterapia puede lograr cura funcional. Entecavir/TAF siguen siendo estándar mientras tanto.\n\n| MD/Specialist points: 1) Universal FIB-4 for metabolic risk. 2) Baveno VII rule only if etiology treated; carvedilol pre-primary prophylaxis. 3) Resmetirom first-line MASH F2-F3; GLP-1 for metabolic approach; combination is future. 4) Terlipressin for SHR-AKI; transplant definitive. 5) Ex-vivo perfusion expanding donors; MASLD needs cardiometabolic evaluation. 6) HBV: siRNA + immunotherapy for functional cure.',
    },
  },

  media: [
    {
      id: 'liver-disease-progression',
      type: 'diagram',
      filename: 'liver-disease-progression.svg',
      title: 'Progresión de la Enfermedad Hepática / Liver Disease Progression',
      description: 'Desde hígado normal hasta cirrosis y carcinoma hepatocelular',
    },
    {
      id: 'portal-hypertension-diagram',
      type: 'diagram',
      filename: 'portal-hypertension-consequences.svg',
      title: 'Consecuencias de la Hipertensión Portal / Portal Hypertension Consequences',
      description: 'Varices, ascitis, esplenomegalia, encefalopatía',
    },
    {
      id: 'fibrosis-staging-algorithm',
      type: 'diagram',
      filename: 'fibrosis-staging-algorithm.svg',
      title: 'Algoritmo de Estadificación de Fibrosis / Fibrosis Staging Algorithm',
      description: 'FIB-4 → Elastografía → Biopsia secuencial',
    },
  ],

  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Schiff\'s Diseases of the Liver, 12th Edition',
      authors: ['Schiff, E.R.', 'Maddrey, W.C.', 'Reddy, K.R.'],
      source: 'Wiley-Blackwell',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Baveno VII Consensus on Portal Hypertension',
      authors: ['de Franchis, R.', 'Bosch, J.', 'et al.'],
      source: 'Journal of Hepatology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'AASLD Practice Guidance on MASLD',
      authors: ['Rinella, M.E.', 'Lazarus, J.V.', 'et al.'],
      source: 'Hepatology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'MAESTRO-NASH: Resmetirom for MASH with Liver Fibrosis',
      authors: ['Harrison, S.A.', 'Bedossa, P.', 'et al.'],
      source: 'New England Journal of Medicine',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'condition-enfermedad-crohn', targetType: 'condition', relationship: 'related', label: 'Enfermedad de Crohn / Crohn\'s Disease' },
    { targetId: 'condition-colitis-ulcerosa', targetType: 'condition', relationship: 'related', label: 'Colitis Ulcerosa (CEP) / Ulcerative Colitis (PSC)' },
    { targetId: 'condition-pancreatitis', targetType: 'condition', relationship: 'related', label: 'Pancreatitis / Pancreatitis' },
    { targetId: 'procedure-paracentesis', targetType: 'topic', relationship: 'see-also', label: 'Paracentesis / Paracentesis' },
    { targetId: 'structure-liver', targetType: 'structure', relationship: 'related', label: 'Anatomía Hepática / Liver Anatomy' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hepatobiliary'],
    topics: ['gastroenterology', 'hepatology', 'transplant-medicine', 'metabolic-disease'],
    keywords: [
      'enfermedad hepática',
      'liver disease',
      'cirrosis',
      'cirrhosis',
      'hepatitis',
      'MASLD',
      'MASH',
      'hígado graso',
      'fatty liver',
      'fibrosis',
      'hipertensión portal',
      'portal hypertension',
      'ascitis',
      'encefalopatía',
      'varices',
      'trasplante hepático',
      'liver transplant',
      'resmetirom',
      'semaglutida',
      'carcinoma hepatocelular',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default enfermedadHepaticaLiverDisease;
