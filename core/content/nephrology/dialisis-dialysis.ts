import { EducationalContent } from '../types';

export const dialisisDialysis: EducationalContent = {
  id: 'condition-dialisis-dialysis',
  type: 'condition',
  name: 'Dialysis',
  nameEs: 'Diálisis',
  alternateNames: ['Hemodiálisis', 'Hemodialysis', 'Diálisis Peritoneal', 'Peritoneal Dialysis', 'Terapia de Reemplazo Renal', 'Renal Replacement Therapy', 'RRT'],
  levels: {
    1: {
      level: 1,
      summary: 'La diálisis es un tratamiento que limpia la sangre cuando los riñones ya no pueden hacerlo por sí mismos. | Dialysis is a treatment that cleans the blood when the kidneys can no longer do it on their own.',
      explanation: `## Explicación

### ¿Qué es la diálisis?

Cuando los riñones dejan de funcionar correctamente, los desechos y el exceso de agua se acumulan en la sangre. La diálisis es un tratamiento que hace el trabajo de los riñones: **limpia la sangre y elimina el exceso de líquido**.

Piensa en la diálisis como un riñón artificial. Así como un filtro de agua limpia el agua sucia, la diálisis filtra la sangre para quitar las sustancias dañinas.

### ¿Por qué se necesita la diálisis?

Se necesita diálisis cuando los riñones han perdido casi toda su función (generalmente en la **Etapa 5 de la enfermedad renal crónica**). Sin diálisis o un trasplante de riñón, las toxinas se acumulan y pueden causar problemas graves e incluso la muerte.

### Tipos de diálisis

Hay dos tipos principales:

#### 1. Hemodiálisis (HD)
- La sangre sale del cuerpo a través de un tubo, pasa por una máquina que la filtra y regresa limpia al cuerpo
- Generalmente se hace en un centro de diálisis **3 veces por semana**, durante **3-4 horas** cada sesión
- Se necesita un acceso en el brazo (llamado **fístula**) o un catéter especial

#### 2. Diálisis Peritoneal (DP)
- Se coloca un tubo suave en el abdomen (barriga)
- Se introduce un líquido especial que absorbe los desechos y el exceso de agua
- Después de unas horas, el líquido se drena y se reemplaza con líquido nuevo
- Se puede hacer **en casa**, incluso durante la noche mientras duermes

### ¿Es permanente la diálisis?

En la mayoría de los casos de enfermedad renal crónica, la diálisis es un tratamiento **de por vida** a menos que se reciba un trasplante de riñón. Sin embargo, en casos de lesión renal aguda, la diálisis puede ser temporal hasta que los riñones se recuperen.

---
## Explanation

### What is dialysis?

When the kidneys stop working properly, waste and excess water build up in the blood. Dialysis is a treatment that does the kidneys' job: **it cleans the blood and removes excess fluid**.

Think of dialysis as an artificial kidney. Just like a water filter cleans dirty water, dialysis filters the blood to remove harmful substances.

### Why is dialysis needed?

Dialysis is needed when the kidneys have lost almost all their function (usually at **Stage 5 of chronic kidney disease**). Without dialysis or a kidney transplant, toxins build up and can cause serious problems and even death.

### Types of dialysis

There are two main types:

#### 1. Hemodialysis (HD)
- Blood leaves the body through a tube, passes through a machine that filters it, and returns clean to the body
- Usually done at a dialysis center **3 times per week**, for **3-4 hours** each session
- A special access point in the arm (called a **fistula**) or a special catheter is needed

#### 2. Peritoneal Dialysis (PD)
- A soft tube is placed in the abdomen (belly)
- A special fluid is put in that absorbs waste and excess water
- After a few hours, the fluid is drained and replaced with new fluid
- Can be done **at home**, even overnight while sleeping

### Is dialysis permanent?

In most cases of chronic kidney disease, dialysis is a **lifelong** treatment unless a kidney transplant is received. However, in cases of acute kidney injury, dialysis may be temporary until the kidneys recover.`,
      keyTerms: [
        { term: 'diálisis / dialysis', definition: 'Tratamiento que limpia la sangre y elimina el exceso de líquido cuando los riñones no pueden hacerlo. | Treatment that cleans the blood and removes excess fluid when the kidneys cannot.' },
        { term: 'hemodiálisis / hemodialysis', definition: 'Tipo de diálisis donde la sangre se filtra fuera del cuerpo a través de una máquina. | Type of dialysis where blood is filtered outside the body through a machine.' },
        { term: 'diálisis peritoneal / peritoneal dialysis', definition: 'Tipo de diálisis que usa la membrana del abdomen como filtro natural. | Type of dialysis that uses the abdominal membrane as a natural filter.' },
        { term: 'fístula / fistula', definition: 'Conexión creada por cirugía entre una arteria y una vena en el brazo para la hemodiálisis. | Surgically created connection between an artery and vein in the arm for hemodialysis.' },
        { term: 'catéter / catheter', definition: 'Tubo flexible que se inserta en una vena grande para acceso de diálisis. | Flexible tube inserted into a large vein for dialysis access.' },
        { term: 'trasplante / transplant', definition: 'Cirugía para recibir un riñón sano de otra persona, que puede reemplazar la diálisis. | Surgery to receive a healthy kidney from another person, which can replace dialysis.' },
      ],
      analogies: [
        'La diálisis funciona como una lavadora para tu sangre: así como la lavadora limpia la ropa sucia, la diálisis limpia tu sangre de desechos. | Dialysis works like a washing machine for your blood: just as a washing machine cleans dirty clothes, dialysis cleans your blood of waste.',
        'La fístula para hemodiálisis es como una autopista especial para la sangre: permite que fluya rápidamente hacia la máquina y de regreso. | The hemodialysis fistula is like a special highway for blood: it allows blood to flow quickly to the machine and back.',
      ],
      examples: [
        'Un paciente con diabetes que desarrolló insuficiencia renal va al centro de diálisis tres veces por semana para hemodiálisis mientras espera un trasplante. | A patient with diabetes who developed kidney failure goes to the dialysis center three times a week for hemodialysis while waiting for a transplant.',
        'Una madre trabajadora elige diálisis peritoneal porque puede hacerla en casa durante la noche y seguir con su rutina diaria. | A working mother chooses peritoneal dialysis because she can do it at home overnight and continue with her daily routine.',
      ],
      patientCounselingPoints: [
        'Asista a todas sus citas de diálisis. Faltar puede ser peligroso porque las toxinas se acumulan rápidamente. | Attend all your dialysis appointments. Missing them can be dangerous because toxins build up quickly.',
        'Siga las recomendaciones de dieta y líquidos de su equipo de diálisis. | Follow the diet and fluid recommendations from your dialysis team.',
        'Cuide su acceso de diálisis (fístula o catéter): manténgalo limpio y no permita que le tomen la presión o extraigan sangre de ese brazo. | Take care of your dialysis access (fistula or catheter): keep it clean and do not allow blood pressure or blood draws from that arm.',
        'Reporte cualquier signo de infección: enrojecimiento, hinchazón, calor o secreción en el sitio del acceso. | Report any signs of infection: redness, swelling, warmth, or drainage at the access site.',
        'Pregunte a su equipo sobre la posibilidad de un trasplante de riñón como opción de tratamiento. | Ask your team about the possibility of a kidney transplant as a treatment option.',
      ],
    },
    2: {
      level: 2,
      summary: 'La hemodiálisis y la diálisis peritoneal difieren en mecanismo, acceso, esquema y complicaciones; la elección depende del estilo de vida del paciente, la anatomía y las comorbilidades. | Hemodialysis and peritoneal dialysis differ in mechanism, access, schedule, and complications; the choice depends on patient lifestyle, anatomy, and comorbidities.',
      explanation: `## Explicación

### Principios de la Diálisis

La diálisis funciona por dos mecanismos principales:
- **Difusión**: Los solutos (desechos) se mueven del área de alta concentración (sangre) al área de baja concentración (líquido de diálisis) a través de una membrana semipermeable
- **Ultrafiltración**: El exceso de agua se elimina aplicando presión a través de la membrana

### Hemodiálisis (HD) en Detalle

#### Acceso Vascular
Se necesita un acceso que permita un flujo de sangre alto (300-500 mL/min):

1. **Fístula arteriovenosa (FAV)** - PREFERIDA
   - Conexión quirúrgica directa entre arteria y vena (típicamente en el brazo)
   - Necesita 6-8 semanas para madurar antes de usarse
   - Menor tasa de infección y mayor duración
   - Complicaciones: fallo de maduración, estenosis, aneurisma, síndrome de robo

2. **Injerto arteriovenoso (IAV)**
   - Tubo sintético conectando arteria y vena
   - Se puede usar en 2-3 semanas
   - Mayor tasa de trombosis e infección que la fístula
   - Opción cuando la anatomía no permite una fístula

3. **Catéter venoso central (CVC)**
   - Tubo insertado en vena yugular interna, subclavia o femoral
   - Se puede usar inmediatamente (acceso de emergencia)
   - Mayor riesgo de infección (bacteriemia) y estenosis venosa central
   - Solo para uso temporal o cuando otras opciones fallan

#### Proceso de Hemodiálisis
- La sangre se extrae del acceso vascular a 300-500 mL/min
- Pasa por un dializador (riñón artificial) con miles de fibras huecas
- El dializado (líquido de limpieza) fluye en dirección contraria a la sangre
- Los desechos pasan de la sangre al dializado por difusión
- La sangre limpia regresa al paciente

#### Complicaciones de la HD
- **Hipotensión intradialítica**: La complicación más común (~20-30% de sesiones)
- **Calambres musculares**: Por remoción rápida de líquidos y electrolitos
- **Síndrome de desequilibrio**: Cefalea, náuseas, confusión por cambios osmolares rápidos
- **Infecciones del acceso**: Especialmente con catéteres

### Diálisis Peritoneal (DP) en Detalle

#### Tipos de DP
1. **DPCA (Diálisis Peritoneal Continua Ambulatoria)**
   - 4 intercambios manuales al día
   - Cada intercambio: drenar líquido viejo, infundir 2-2.5L de dializado nuevo
   - El líquido permanece 4-6 horas durante el día, 8-10 horas en la noche

2. **DPA (Diálisis Peritoneal Automatizada)**
   - Una máquina cicladora realiza intercambios automáticamente durante la noche
   - 8-10 horas mientras el paciente duerme
   - Mayor flexibilidad durante el día

#### Catéter de Tenckhoff
- Tubo de silicón colocado quirúrgicamente en la cavidad peritoneal
- Tiene dos cuffs (manguitos) de dacron que anclan el catéter y previenen infecciones
- El orificio de salida debe mantenerse limpio y seco

#### Complicaciones de la DP
- **Peritonitis**: Infección del peritoneo; causa dolor abdominal, líquido turbio, fiebre
- **Infección del sitio de salida**: Enrojecimiento, secreción purulenta alrededor del catéter
- **Hernias**: Por el aumento de presión intraabdominal
- **Fuga de dializado**: Alrededor del catéter o a través de defectos de la pared abdominal

### HD vs DP: Comparación

| Característica | Hemodiálisis | Diálisis Peritoneal |
|---------------|-------------|-------------------|
| Lugar | Centro de diálisis | Casa |
| Frecuencia | 3x/semana, 3-4h | Diario, continua |
| Independencia | Menor | Mayor |
| Función renal residual | Se pierde más rápido | Se preserva mejor |
| Dieta | Más restrictiva | Menos restrictiva |
| Infección | Bacteriemia | Peritonitis |

---
## Explanation

### Principles of Dialysis

Dialysis works through two main mechanisms:
- **Diffusion**: Solutes (waste) move from high concentration (blood) to low concentration (dialysate) across a semipermeable membrane
- **Ultrafiltration**: Excess water is removed by applying pressure across the membrane

### Hemodialysis (HD) in Detail

#### Vascular Access
An access allowing high blood flow (300-500 mL/min) is needed:
1. **Arteriovenous fistula (AVF)** - PREFERRED: Direct surgical connection; needs 6-8 weeks to mature
2. **Arteriovenous graft (AVG)**: Synthetic tube; can be used in 2-3 weeks; higher thrombosis risk
3. **Central venous catheter (CVC)**: Immediate use; highest infection risk; temporary use

#### Hemodialysis Process
Blood is drawn at 300-500 mL/min through a dialyzer with hollow fibers. Dialysate flows countercurrent. Waste passes from blood to dialysate by diffusion.

#### HD Complications
- Intradialytic hypotension (most common, ~20-30% of sessions)
- Muscle cramps, disequilibrium syndrome, access infections

### Peritoneal Dialysis (PD) in Detail

#### Types
1. **CAPD**: 4 manual exchanges daily
2. **APD**: Automated cycler performs exchanges overnight

#### PD Complications
- Peritonitis, exit-site infections, hernias, dialysate leaks

### HD vs PD Comparison

| Feature | Hemodialysis | Peritoneal Dialysis |
|---------|-------------|-------------------|
| Location | Dialysis center | Home |
| Frequency | 3x/week, 3-4h | Daily, continuous |
| Independence | Less | More |
| Residual function | Lost faster | Better preserved |
| Diet | More restrictive | Less restrictive |
| Infection | Bacteremia | Peritonitis |`,
      keyTerms: [
        { term: 'difusión / diffusion', definition: 'Movimiento de solutos de alta a baja concentración a través de una membrana; mecanismo principal de diálisis. | Movement of solutes from high to low concentration across a membrane; main dialysis mechanism.' },
        { term: 'ultrafiltración / ultrafiltration', definition: 'Remoción de exceso de agua mediante presión a través de la membrana de diálisis. | Removal of excess water by pressure across the dialysis membrane.' },
        { term: 'fístula arteriovenosa / arteriovenous fistula', definition: 'Acceso vascular preferido para HD; conexión directa arteria-vena con menor riesgo de infección. | Preferred vascular access for HD; direct artery-vein connection with lowest infection risk.' },
        { term: 'injerto arteriovenoso / arteriovenous graft', definition: 'Tubo sintético que conecta arteria y vena cuando la fístula no es posible. | Synthetic tube connecting artery and vein when a fistula is not possible.' },
        { term: 'catéter venoso central / central venous catheter', definition: 'Tubo en vena grande para acceso inmediato de diálisis; mayor riesgo de infección. | Tube in a large vein for immediate dialysis access; highest infection risk.' },
        { term: 'peritonitis', definition: 'Infección de la membrana peritoneal; complicación principal de la diálisis peritoneal. | Infection of the peritoneal membrane; main complication of peritoneal dialysis.' },
        { term: 'DPCA / CAPD', definition: 'Diálisis peritoneal continua ambulatoria; intercambios manuales 4 veces al día. | Continuous ambulatory peritoneal dialysis; manual exchanges 4 times daily.' },
        { term: 'DPA / APD', definition: 'Diálisis peritoneal automatizada; cicladora nocturna automática. | Automated peritoneal dialysis; automated overnight cycler.' },
        { term: 'hipotensión intradialítica / intradialytic hypotension', definition: 'Caída de presión arterial durante la hemodiálisis; complicación más común. | Blood pressure drop during hemodialysis; most common complication.' },
      ],
      clinicalNotes: 'La iniciativa "Fistula First" promueve la creación de fístula AV como acceso preferido. Planificar el acceso cuando la TFG se acerque a 15-20 mL/min. Los catéteres venosos centrales se asocian con bacteriemia en 2-5 por 1,000 días-catéter. La peritonitis en DP tiene una incidencia meta de <0.5 episodios por año-paciente. | The "Fistula First" initiative promotes AVF as preferred access. Plan access when GFR approaches 15-20 mL/min. CVCs are associated with bacteremia at 2-5 per 1,000 catheter-days. PD peritonitis target incidence is <0.5 episodes per patient-year.',
    },
    3: {
      level: 3,
      summary: 'La adecuación de diálisis se mide por Kt/V y URR; el manejo incluye control de volumen, corrección de anemia, manejo de EMO-ERC, y prevención de complicaciones del acceso vascular. | Dialysis adequacy is measured by Kt/V and URR; management includes volume control, anemia correction, CKD-MBD management, and vascular access complication prevention.',
      explanation: `## Explicación

### Adecuación de Diálisis

#### Hemodiálisis
- **Kt/V**: K = depuración del dializador, t = tiempo de diálisis, V = volumen de distribución de urea
- Meta: Kt/V ≥ 1.4 por sesión (ensayo HEMO)
- **URR (Tasa de Reducción de Urea)**: Meta ≥ 70%
- URR = (Urea pre - Urea post) / Urea pre x 100
- El ensayo HEMO (2002) no mostró beneficio con dosis de HD más altas que el mínimo recomendado

#### Diálisis Peritoneal
- **Kt/V semanal**: Meta ≥ 1.7 (ensayo ADEMEX: no hay beneficio con Kt/V >1.7)
- La función renal residual (FRR) contribuye significativamente a la depuración total
- Prueba de equilibrio peritoneal (PET): clasifica el tipo de transporte peritoneal
  - **Transportador alto**: Absorbe glucosa rápidamente, pierde ultrafiltración; mejor con DPA (tiempos de permanencia cortos)
  - **Transportador bajo**: Absorción lenta; necesita tiempos de permanencia largos; mejor con DPCA
  - **Transportador promedio-alto/promedio-bajo**: Pueden usar cualquier modalidad

### Prescripción de Hemodiálisis

#### Componentes de la Prescripción
- **Flujo sanguíneo (Qb)**: 300-500 mL/min; mayor flujo = mejor depuración
- **Flujo de dializado (Qd)**: 500-800 mL/min; típicamente el doble del Qb
- **Tiempo**: 3-4 horas estándar; extensible para mejor control de fósforo y volumen
- **Dializador**: Tamaño y tipo de membrana (alta eficiencia, alto flujo)
- **Composición del dializado**: Sodio (138-140), potasio (2-3), calcio (2.5-3.0), bicarbonato (32-38)
- **Tasa de ultrafiltración (UF)**: Meta <13 mL/kg/h para minimizar hipotensión; exceder este límite aumenta mortalidad

#### Anticoagulación
- Heparina no fraccionada: Bolo + infusión durante la sesión
- Heparina de bajo peso molecular: Alternativa
- Diálisis sin heparina: Para pacientes con alto riesgo de sangrado; requiere enjuagues frecuentes del circuito

### Manejo del Peso Seco

- **Peso seco**: Peso corporal al que el paciente está normovolémico sin síntomas de hipotensión
- La ganancia de peso interdialítica debe ser <2.5 kg (idealmente <4% del peso seco)
- Evaluación: examen físico, radiografía de tórax, bioimpedancia (BIS), diámetro de vena cava inferior por ecografía
- La sobrehydratación crónica se asocia con hipertrofia ventricular izquierda, hipertensión y mortalidad

### Complicaciones del Acceso Vascular

#### Fístula AV
- **Fallo de maduración** (20-40%): Fístula no desarrolla flujo ni tamaño adecuados; causas incluyen estenosis de vena de salida, vasos pequeños, enfermedad arterial
- **Estenosis**: Estrechamiento de la vena de salida; tratamiento: angioplastia con balón o revisión quirúrgica
- **Trombosis**: Oclusión aguda; tratamiento: trombectomía mecánica o farmacológica
- **Aneurisma/pseudoaneurisma**: Por cannulación repetida en el mismo sitio; rotar sitios de punción (técnica de escalera de cuerda)
- **Síndrome de robo**: Isquemia de la mano por desvío de sangre arterial; síntomas: dolor, frialdad, palidez distal
- **Insuficiencia cardíaca de alto gasto**: Fístulas con flujo >2L/min pueden causar sobrecarga cardíaca

#### Catéter Venoso Central
- **Bacteriemia asociada a catéter**: Staphylococcus aureus y epidermidis más comunes
- **Trombosis del catéter**: Disfunción por fibrina o trombo intraluminal; alteplasa como trombolítico
- **Estenosis venosa central**: Complicación tardía, especialmente con catéteres subclavios

### Prescripción de Diálisis Peritoneal

#### Soluciones de Dializado
- **Dextrosa**: Agente osmótico convencional (1.5%, 2.5%, 4.25%); concentraciones mayores = más ultrafiltración
- **Icodextrina**: Polímero de glucosa; absorción lenta; ideal para permanencia larga (nocturna en DPCA, diurna en DPA)
- **Aminoácidos**: Alternativa a dextrosa; beneficio nutricional; uso limitado por acidosis
- pH y buffer: Soluciones de lactato (estándar) vs bicarbonato/lactato (menor dolor infusional, mejor biocompatibilidad)

#### Peritonitis en DP
- Diagnóstico: ≥2 de 3 criterios: dolor abdominal, líquido turbio (>100 leucocitos/μL con >50% PMN), cultivo positivo
- Organismos más comunes: estafilococos coagulasa-negativos, S. aureus, estreptococos
- Tratamiento: antibióticos intraperitoneales (vancomicina o cefalosporina de 1ra gen + cobertura gram-negativa)
- Retiro del catéter: peritonitis refractaria (>5 días), fúngica, micobacteriana, o recurrente

---
## Explanation

### Dialysis Adequacy

#### Hemodialysis
- **Kt/V**: Target ≥ 1.4 per session (HEMO trial)
- **URR**: Target ≥ 70%
- HEMO trial (2002) showed no benefit of higher HD doses beyond minimum

#### Peritoneal Dialysis
- **Weekly Kt/V**: Target ≥ 1.7 (ADEMEX trial)
- PET test classifies peritoneal transport type (high, low, average)

### Hemodialysis Prescription
- Blood flow 300-500 mL/min, dialysate flow 500-800 mL/min
- UF rate target <13 mL/kg/h to minimize hypotension
- Anticoagulation with heparin; heparin-free for high bleeding risk

### Dry Weight Management
- Interdialytic weight gain should be <2.5 kg
- Assessment: physical exam, bioimpedance, IVC diameter on ultrasound

### Vascular Access Complications
- AVF: maturation failure (20-40%), stenosis, thrombosis, steal syndrome
- CVC: bacteremia, catheter thrombosis, central venous stenosis

### PD Prescription
- Dextrose solutions (1.5%, 2.5%, 4.25%), icodextrin for long dwells
- Peritonitis: diagnosed by abdominal pain, cloudy fluid, positive culture; treated with IP antibiotics`,
      keyTerms: [
        { term: 'Kt/V', definition: 'Medida de adecuación de diálisis; K=depuración, t=tiempo, V=volumen de distribución de urea; meta ≥1.4 en HD. | Dialysis adequacy measure; K=clearance, t=time, V=urea distribution volume; target ≥1.4 in HD.' },
        { term: 'URR / tasa de reducción de urea', definition: 'Porcentaje de reducción de urea durante una sesión de HD; meta ≥70%. | Percentage of urea reduction during an HD session; target ≥70%.' },
        { term: 'PET / prueba de equilibrio peritoneal', definition: 'Prueba que clasifica la velocidad de transporte de la membrana peritoneal para optimizar la prescripción de DP. | Test classifying peritoneal membrane transport rate to optimize PD prescription.' },
        { term: 'peso seco / dry weight', definition: 'Peso corporal al que el paciente está normovolémico sin hipotensión; meta de la ultrafiltración. | Body weight at which patient is normovolemic without hypotension; ultrafiltration target.' },
        { term: 'icodextrina / icodextrin', definition: 'Polímero de glucosa usado como agente osmótico en DP para permanencias largas. | Glucose polymer used as osmotic agent in PD for long dwells.' },
        { term: 'síndrome de robo / steal syndrome', definition: 'Isquemia de la mano por desvío de sangre arterial hacia la fístula AV. | Hand ischemia from arterial blood diversion into the AV fistula.' },
        { term: 'estenosis venosa central / central venous stenosis', definition: 'Estrechamiento de venas centrales por uso previo de catéteres; complica futuros accesos. | Narrowing of central veins from prior catheter use; complicates future access.' },
        { term: 'peritonitis', definition: 'Infección de la cavidad peritoneal; diagnóstico por dolor, líquido turbio y cultivo positivo. | Peritoneal cavity infection; diagnosed by pain, cloudy fluid, and positive culture.' },
        { term: 'tasa de ultrafiltración / ultrafiltration rate', definition: 'Velocidad de remoción de líquido durante HD; meta <13 mL/kg/h para minimizar complicaciones. | Rate of fluid removal during HD; target <13 mL/kg/h to minimize complications.' },
      ],
      clinicalNotes: 'La tasa de UF >13 mL/kg/h se asocia con mayor mortalidad. La creación de FAV debe planificarse 6 meses antes del inicio esperado de diálisis. La peritonitis por gram-negativos o polimicrobiana sugiere patología intraabdominal y requiere evaluación quirúrgica. El ensayo HEMO (2002) no mostró beneficio de Kt/V alto (1.65) vs estándar (1.25). | UF rate >13 mL/kg/h is associated with increased mortality. AVF creation should be planned 6 months before expected dialysis start. Gram-negative or polymicrobial peritonitis suggests intra-abdominal pathology requiring surgical evaluation. HEMO trial showed no benefit of high (1.65) vs standard (1.25) Kt/V.',
    },
    4: {
      level: 4,
      summary: 'Conceptos avanzados de diálisis incluyen modalidades extendidas/intensivas, hemodiafiltración, diálisis incremental, manejo del transporte peritoneal, y patología del acceso vascular complejo. | Advanced dialysis concepts include extended/intensive modalities, hemodiafiltration, incremental dialysis, peritoneal transport management, and complex vascular access pathology.',
      explanation: `## Explicación

### Modalidades Avanzadas de Hemodiálisis

#### HD Nocturna
- 6-8 horas, 3-6 noches por semana en domicilio o centro
- Beneficios demostrados: mejor control de fósforo (eliminación de quelantes en muchos pacientes), mejor control de PA, regresión de HVI, mejor calidad de vida
- Ensayo FHN Nocturno: HD frecuente nocturna mejoró la HVI y el compuesto de salud física

#### HD Diaria Corta
- 2-3 horas, 5-6 días por semana
- Mejor manejo de líquidos, menor ganancia interdialítica
- Ensayo FHN Diario: mejoró HVI y compuesto de salud física vs HD convencional

#### Hemodiafiltración (HDF)
- Combina difusión (hemodiálisis) + convección (hemofiltración)
- La convección mejora la eliminación de moléculas medianas (beta-2-microglobulina, FGF-23)
- **HDF en línea**: Produce líquido de sustitución a partir del dializado purificado; volumen de convección >23L/sesión
- Ensayo CONVINCE (2023): HDF de alto volumen redujo mortalidad por todas las causas en 23% vs HD de alto flujo convencional (primer ensayo en demostrar beneficio de mortalidad)
- Ensayo ESHOL: Reducción de mortalidad cardiovascular con HDF de alto volumen
- Requisitos: agua ultrapura, monitores con módulo de HDF, acceso vascular con flujo adecuado

### Diálisis Incremental

#### Concepto
- Inicio con 2 sesiones de HD por semana en lugar de 3, aprovechando la función renal residual (FRR)
- Objetivo: preservar FRR, mejorar calidad de vida, reducir carga de tratamiento
- Kt/V combinado (diálisis + renal residual) debe alcanzar la meta estándar
- Transición a 3x/semana cuando FRR declina (típicamente TFGr <3-5 mL/min)

#### Evidencia
- Ensayo IHDIP (en curso): primer ensayo controlado aleatorizado evaluando HD incremental
- Estudios observacionales muestran que la HD incremental no es inferior en resultados y puede preservar mejor la FRR
- KDOQI 2015 reconoce la HD incremental como opción válida

### Fisiopatología del Transporte Peritoneal

#### Modelo de Tres Poros
- **Poros ultra-pequeños (acuaporina-1)**: Solo permiten paso de agua; responsables del ~40% de la ultrafiltración con dextrosa
- **Poros pequeños**: Permiten paso de solutos pequeños y agua; responsables de la mayoría de la difusión de solutos
- **Poros grandes**: Permiten paso de macromoléculas (proteínas); contribuyen mínimamente al transporte

#### Fallo de Ultrafiltración
- Definición: UF <400 mL con permanencia de 4h usando dextrosa 4.25%
- Tipo 1 (transportador alto): Absorción rápida de glucosa y disipación del gradiente osmótico; tratar con permanencias cortas (DPA) e icodextrina
- Tipo 2 (descenso de acuaporina-1): Reducción del transporte libre de solutos; asociado con inflamación peritoneal crónica
- Tipo 3 (disminución de área de superficie efectiva): Por adhesiones peritoneales o esclerosis
- Tipo 4 (absorción linfática aumentada): Aumenta la reabsorción de dializado

#### Esclerosis Peritoneal Encapsulante (EPE)
- Complicación rara pero devastadora; incidencia aumenta después de 5-8 años de DP
- Fibrosis y encapsulación del intestino por una membrana peritoneal engrosada
- Presentación: obstrucción intestinal, abdomen cocoon, malnutrición, ascitis hemorrágica
- Factores de riesgo: duración prolongada de DP, episodios frecuentes de peritonitis, uso de soluciones bioincompatibles
- Tratamiento: cirugía (enterólisis), tamoxifeno (controvertido), corticosteroides, soporte nutricional
- Prevención: considerar transferencia a HD después de 5-8 años en DP

### Patología Avanzada del Acceso Vascular

#### Maduración de la Fístula AV
- Regla de los 6: Para uso exitoso, la FAV debe tener flujo >600 mL/min, diámetro de vena >6mm, profundidad <6mm, a las 6 semanas post-creación
- Fallo de maduración: 20-40% de FAVs; causas incluyen estenosis de la anastomosis, vasos accesorios que roban flujo, enfermedad arterial inflow
- Intervenciones: angioplastia de estenosis, ligadura de vasos accesorios, superficialización

#### Acceso Vascular para Poblaciones Difíciles
- **Acceso agotado**: Cuando se agotan los sitios convencionales de brazo; opciones incluyen FAV de miembro inferior (arteria femoral-vena safena), injerto AV de muslo, catéter translumbar, catéter transhepático
- **Mapeo vascular preoperatorio**: Ecografía Doppler con mapeo venoso y arterial; mejora la tasa de éxito de FAV
- **HeRO (Hybrid graft-Endovascular Outflow)**: Dispositivo para pacientes con estenosis venosa central; componente de injerto + stent-graft de flujo de salida

#### Infección del Acceso
- Bacteriemia asociada a catéter: tasas 2-5/1,000 días-catéter con catéter no tunelizado; 0.5-2/1,000 con tunelizado
- Protocolo de bloqueo antibiótico del catéter: gentamicina o vancomicina en el espacio muerto del catéter entre sesiones; reduce infecciones ~50%
- Endocarditis: complicación de bacteriemia por S. aureus; requiere ecocardiograma transesofágico y tratamiento prolongado

---
## Explanation

### Advanced Hemodialysis Modalities

#### Nocturnal HD: 6-8 hours, 3-6 nights/week; better phosphorus control, BP control, LVH regression
#### Short Daily HD: 2-3 hours, 5-6 days/week; better fluid management

#### Hemodiafiltration (HDF)
- Combines diffusion + convection for better middle molecule clearance
- CONVINCE trial (2023): High-volume HDF reduced all-cause mortality by 23% vs conventional high-flux HD
- Requires ultrapure water and HDF-capable monitors

### Incremental Dialysis
- Starting with 2 HD sessions/week using residual kidney function
- Transition to 3x/week when RKF declines (typically rGFR <3-5 mL/min)

### Peritoneal Transport Physiology
- Three-pore model: ultra-small (aquaporin-1), small pores (solute transport), large pores (macromolecules)
- UF failure types and management strategies

#### Encapsulating Peritoneal Sclerosis (EPS)
- Rare devastating complication after 5-8 years of PD; bowel encapsulation by thickened peritoneal membrane
- Treatment: surgery, tamoxifen (controversial), steroids

### Advanced Vascular Access Pathology
- Rule of 6s for AVF maturation
- Options for exhausted access: lower extremity AVF, HeRO device
- Catheter antibiotic lock protocol reduces infections ~50%`,
      keyTerms: [
        { term: 'hemodiafiltración / hemodiafiltration', definition: 'Modalidad que combina difusión y convección para mejor eliminación de moléculas medianas; ensayo CONVINCE mostró 23% reducción de mortalidad. | Modality combining diffusion and convection for better middle molecule clearance; CONVINCE trial showed 23% mortality reduction.' },
        { term: 'diálisis incremental / incremental dialysis', definition: 'Inicio de HD con 2 sesiones/semana aprovechando la función renal residual; transición a 3x/semana cuando FRR declina. | Starting HD with 2 sessions/week using residual kidney function; transitioning to 3x/week when RKF declines.' },
        { term: 'modelo de tres poros / three-pore model', definition: 'Modelo fisiológico del transporte peritoneal: poros ultrapequeños (agua), pequeños (solutos) y grandes (macromoléculas). | Physiological model of peritoneal transport: ultra-small (water), small (solutes), and large pores (macromolecules).' },
        { term: 'esclerosis peritoneal encapsulante / encapsulating peritoneal sclerosis', definition: 'Complicación rara y devastadora de DP prolongada con fibrosis y encapsulación intestinal. | Rare devastating complication of prolonged PD with fibrosis and bowel encapsulation.' },
        { term: 'fallo de ultrafiltración / ultrafiltration failure', definition: 'UF <400 mL con permanencia 4h usando dextrosa 4.25%; requiere evaluación del tipo de transporte. | UF <400 mL with 4h dwell using 4.25% dextrose; requires transport type evaluation.' },
        { term: 'regla de los 6 / rule of 6s', definition: 'Criterios de maduración de FAV: flujo >600 mL/min, diámetro >6mm, profundidad <6mm, a 6 semanas. | AVF maturation criteria: flow >600 mL/min, diameter >6mm, depth <6mm, at 6 weeks.' },
        { term: 'HeRO', definition: 'Dispositivo híbrido injerto-endovascular para pacientes con estenosis venosa central y acceso agotado. | Hybrid graft-endovascular outflow device for patients with central venous stenosis and exhausted access.' },
        { term: 'bloqueo antibiótico del catéter / catheter antibiotic lock', definition: 'Instilación de antibiótico en el espacio muerto del catéter entre sesiones; reduce infecciones ~50%. | Antibiotic instillation in catheter dead space between sessions; reduces infections ~50%.' },
        { term: 'ensayo CONVINCE / CONVINCE trial', definition: 'Primer ensayo que demostró reducción de mortalidad con HDF de alto volumen vs HD convencional (2023). | First trial demonstrating mortality reduction with high-volume HDF vs conventional HD (2023).' },
        { term: 'acuaporina-1 / aquaporin-1', definition: 'Canal de agua en la membrana peritoneal responsable del ~40% de la ultrafiltración con dextrosa. | Water channel in peritoneal membrane responsible for ~40% of dextrose-driven ultrafiltration.' },
      ],
      clinicalNotes: 'El ensayo CONVINCE (2023) es el primer ensayo que demuestra beneficio de mortalidad de HDF sobre HD convencional, con volumen de convección >23L/sesión. La diálisis incremental es una opción validada que preserva mejor la FRR. La EPE debe sospecharse en pacientes con >5 años de DP que desarrollan síntomas obstructivos intestinales. El protocolo de bloqueo antibiótico del catéter reduce significativamente las bacteriemias asociadas a catéter. | The CONVINCE trial (2023) is the first trial demonstrating mortality benefit of HDF over conventional HD, with convection volume >23L/session. Incremental dialysis is a validated option that better preserves RKF. EPS should be suspected in patients with >5 years of PD developing bowel obstructive symptoms. Catheter antibiotic lock protocol significantly reduces catheter-associated bacteremia.',
    },
    5: {
      level: 5,
      summary: 'Temas expertos incluyen riñón artificial portátil/implantable, medicina de precisión en diálisis, terapias extracorpóreas especializadas, manejo conservador sin diálisis, y avances en bioingeniería del acceso vascular. | Expert topics include portable/implantable artificial kidney, precision dialysis medicine, specialized extracorporeal therapies, conservative non-dialytic management, and vascular access bioengineering advances.',
      explanation: `## Explicación

### El Riñón Artificial: Dispositivos del Futuro

#### Riñón Artificial Portátil (WAK - Wearable Artificial Kidney)
- Dispositivo miniaturizado de hemodiálisis que el paciente lleva puesto
- Permite diálisis continua ambulatoria (simula más la fisiología renal normal)
- Ensayo clínico del WAK (2023-2025): dispositivo de ~5 kg; 24h de diálisis continua
- Desafíos técnicos: miniaturización de la bomba de sangre, adsorbentes para regenerar el dializado, anticoagulación prolongada, fuente de energía

#### Riñón Bioartificial Implantable (Proyecto UCSF)
- Dos componentes: hemofiltro de nanoporos de silicio + biorreactor de células tubulares renales
- El hemofiltro usa membranas de nanoporos de silicio para ultrafiltración pasiva (impulsada por presión arterial, sin bomba)
- El biorreactor con células tubulares renales humanas recrea funciones endocrinas y metabólicas (reabsorción, secreción de eritropoyetina, activación de vitamina D)
- Estado actual: estudios preclínicos en modelos animales grandes; ensayos humanos fase 1 planificados
- Si tiene éxito, eliminaría la necesidad de diálisis externa y de inmunosupresión del trasplante

#### Diálisis con Sorbentes
- Sistemas de regeneración de dializado usando cartuchos de sorbentes (carbón, zirconio, urea)
- REDY (REcirculating DialYsis): sistema histórico que regenera dializado; base del WAK
- Desafío principal: degradación de urea (enzima ureasa convierte urea en amonio, luego capturado por fosfato de zirconio)

### Medicina de Precisión en Diálisis

#### Individualización de la Prescripción
- **Modelado cinético de la urea (UKM)**: Ajuste matemático de la prescripción usando datos pre/post de BUN, peso y tiempo
- **Modelado de sodio**: Perfiles de sodio del dializado para minimizar hipotensión y sed intradialítica
- **Biofeedback**: Monitores con retroalimentación automática de tasa de UF basada en volumen sanguíneo relativo (RBV)
- **Hemodiálisis guiada por temperatura (isotérmica)**: Reduce la temperatura del dializado para prevenir hipotensión intradialítica; MyTEMP trial (2022): la retroalimentación térmica no redujo mortalidad pero sí redujo episodios de hipotensión

#### Biomarcadores de Resultado en Diálisis
- **Beta-2-microglobulina**: Molécula mediana; asociada con amiloidosis dialítica; mejor eliminación con HDF
- **FGF-23**: Predictor independiente de mortalidad en diálisis; reducido por HDF de alto volumen
- **Proteína C reactiva (PCR)**: Marcador de inflamación crónica; la inflamación es principal predictor de mortalidad en diálisis
- **Pentraxina-3**: Marcador inflamatorio más específico que PCR; predictor de eventos cardiovasculares en HD
- El estado inflamatorio-malnutrición (MIA syndrome: Malnutrition-Inflammation-Atherosclerosis) es el principal determinante de mortalidad en diálisis

### Terapias Extracorpóreas Especializadas

#### CRRT (Terapia de Reemplazo Renal Continua)
- Para pacientes hemodinámicamente inestables en UCI
- Modalidades: CVVH (hemofiltración), CVVHD (hemodiálisis), CVVHDF (hemodiafiltración)
- Dosis: efluente 20-25 mL/kg/h (ensayos RENAL y ATN)
- Ventajas: remoción gradual de solutos y fluidos; menor inestabilidad hemodinámica
- Anticoagulación regional con citrato: quelación de calcio en el circuito; preferida sobre heparina en UCI

#### SLED (Diálisis de Baja Eficiencia Sostenida)
- Alternativa intermedia entre HD convencional y CRRT
- 6-12 horas con flujos más bajos (Qb 200 mL/min, Qd 300 mL/min)
- Similar eficacia y seguridad que CRRT; menor costo y complejidad

#### Terapias de Adsorción
- **Citosorb**: Adsorbente de citoquinas para sepsis; elimina IL-6, IL-10, TNF-alfa
- **Hemoperfusión**: Paso de sangre a través de columnas de carbón o resina; para intoxicaciones
- **Plasmaféresis terapéutica (TPE)**: Separación y recambio de plasma; para SHU atípico, síndrome de Goodpasture, mieloma con cast nephropathy
- **MARS/Prometheus**: Sistemas de soporte hepático extracorpóreo para insuficiencia hepática aguda; combinan diálisis con adsorción de toxinas unidas a albúmina

### Manejo Conservador sin Diálisis

#### Concepto
- Opción para pacientes con ERC avanzada que eligen no iniciar diálisis
- Enfoque en calidad de vida, manejo de síntomas, y cuidados paliativos
- Más común en pacientes ancianos (>75 años) con múltiples comorbilidades

#### Evidencia
- Estudios observacionales muestran que el beneficio de supervivencia de diálisis se atenúa significativamente en pacientes >80 años con alto índice de comorbilidad
- El Surprise Question ("¿Le sorprendería si este paciente muriera en los próximos 12 meses?") ayuda a identificar pacientes que podrían no beneficiarse de diálisis
- Score de Rasgos Clínicos (Clinical Features Score) y calculadora de supervivencia de KDOQI ayudan en la toma de decisiones compartida

#### Componentes del Manejo Conservador
- Control de síntomas urémicos: prurito (gabapentina, naltrexona), náuseas, fatiga
- Manejo del dolor: evitar AINEs y opioides con metabolitos renales; preferir fentanilo, metadona
- Restricción moderada de líquidos y sodio para manejo de edema
- Continuación de quelantes de potasio y fósforo según síntomas
- Apoyo psicosocial y espiritual; planificación anticipada de cuidados
- Referencia a cuidados paliativos y hospicio

### Avances en Bioingeniería del Acceso Vascular

#### Injertos Bioingeniados
- **Injertos de matriz extracelular descelularizada (Humacyte HAV)**: Injerto tubular cultivado a partir de células de músculo liso en andamiaje descelularizado
- Ventajas: no requiere inmunosupresión, se remodela in vivo, menor riesgo de infección vs injertos sintéticos
- Ensayo fase 3 (2024): resultados comparables a injertos ePTFE con menor tasa de infección

#### Endofístula (WavelinQ/Ellipsys)
- Creación percutánea de fístula AV usando dispositivo de ablación térmica o catéter de corte
- No requiere cirugía abierta; se realiza bajo guía ecográfica o fluoroscópica
- FAV creadas en el antebrazo proximal (anastomosis radial-cubital o en la tabaquera anatómica)
- Ventajas: procedimiento ambulatorio, recuperación rápida, menor dolor
- Limitaciones: requiere anatomía favorable, tasas de maduración variables

---
## Explanation

### The Artificial Kidney: Future Devices

#### Wearable Artificial Kidney (WAK)
- Miniaturized continuous ambulatory HD device (~5 kg)
- Challenges: pump miniaturization, sorbent dialysate regeneration, prolonged anticoagulation

#### Implantable Bioartificial Kidney (UCSF Project)
- Silicon nanopore hemofilter + renal tubular cell bioreactor
- Passive ultrafiltration driven by arterial pressure; tubular cells for endocrine/metabolic function
- Would eliminate need for external dialysis and transplant immunosuppression

### Precision Dialysis Medicine
- Urea kinetic modeling, sodium profiling, biofeedback UF, isothermal dialysis
- MyTEMP trial: thermal feedback reduced hypotension but not mortality
- MIA syndrome as key mortality determinant in dialysis

### Specialized Extracorporeal Therapies
- CRRT for hemodynamically unstable ICU patients (dose 20-25 mL/kg/h)
- SLED as intermediate modality
- Adsorption therapies: CytoSorb, hemoperfusion, TPE, MARS/Prometheus

### Conservative Non-Dialytic Management
- Option for elderly patients with high comorbidity burden
- Focus on symptom management, palliative care, advance care planning
- Survival benefit of dialysis attenuates significantly in patients >80 with high comorbidity

### Vascular Access Bioengineering
- Humacyte HAV: decellularized bioengineered graft; no immunosuppression needed
- Endofistula (WavelinQ/Ellipsys): percutaneous AVF creation without open surgery`,
      keyTerms: [
        { term: 'riñón artificial portátil / wearable artificial kidney', definition: 'Dispositivo miniaturizado de HD que permite diálisis continua ambulatoria. | Miniaturized HD device allowing continuous ambulatory dialysis.' },
        { term: 'riñón bioartificial / bioartificial kidney', definition: 'Dispositivo implantable con hemofiltro de nanoporos y biorreactor de células tubulares (Proyecto UCSF). | Implantable device with nanopore hemofilter and tubular cell bioreactor (UCSF Project).' },
        { term: 'CRRT / terapia de reemplazo renal continua', definition: 'Diálisis continua para pacientes hemodinámicamente inestables en UCI; modalidades incluyen CVVH, CVVHD, CVVHDF. | Continuous dialysis for hemodynamically unstable ICU patients; modalities include CVVH, CVVHD, CVVHDF.' },
        { term: 'SLED', definition: 'Diálisis de baja eficiencia sostenida; alternativa intermedia entre HD convencional y CRRT. | Sustained low-efficiency dialysis; intermediate alternative between conventional HD and CRRT.' },
        { term: 'CytoSorb', definition: 'Dispositivo de adsorción de citoquinas para sepsis; elimina IL-6, IL-10, TNF-alfa del circuito. | Cytokine adsorption device for sepsis; removes IL-6, IL-10, TNF-alpha from the circuit.' },
        { term: 'manejo conservador / conservative management', definition: 'Opción de no iniciar diálisis con enfoque en calidad de vida, manejo de síntomas y cuidados paliativos. | Option not to initiate dialysis with focus on quality of life, symptom management, and palliative care.' },
        { term: 'síndrome MIA / MIA syndrome', definition: 'Malnutrición-Inflamación-Aterosclerosis; principal determinante de mortalidad en diálisis. | Malnutrition-Inflammation-Atherosclerosis; key mortality determinant in dialysis.' },
        { term: 'Humacyte HAV', definition: 'Injerto vascular bioingeniado de matriz descelularizada; no requiere inmunosupresión. | Bioengineered decellularized matrix vascular graft; no immunosuppression needed.' },
        { term: 'endofístula / endofistula', definition: 'Creación percutánea de fístula AV sin cirugía abierta usando dispositivo WavelinQ o Ellipsys. | Percutaneous AVF creation without open surgery using WavelinQ or Ellipsys device.' },
        { term: 'anticoagulación regional con citrato / regional citrate anticoagulation', definition: 'Quelación de calcio en el circuito de CRRT; preferida sobre heparina en UCI. | Calcium chelation in CRRT circuit; preferred over heparin in ICU.' },
      ],
      clinicalNotes: 'El ensayo CONVINCE establece la HDF de alto volumen (>23L de convección) como modalidad de elección cuando disponible. El manejo conservador es una opción ética y válida para pacientes ancianos con alta carga de comorbilidad; requiere toma de decisiones compartida. Los injertos bioingeniados (Humacyte) representan un avance significativo para pacientes con acceso vascular agotado. La CRRT con anticoagulación regional con citrato es el estándar en UCI. | The CONVINCE trial establishes high-volume HDF (>23L convection) as the modality of choice when available. Conservative management is an ethical and valid option for elderly patients with high comorbidity burden; requires shared decision-making. Bioengineered grafts (Humacyte) represent a significant advance for patients with exhausted vascular access. CRRT with regional citrate anticoagulation is the ICU standard.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'KDOQI Clinical Practice Guideline for Hemodialysis Adequacy: 2015 Update',
      authors: ['National Kidney Foundation'],
      source: 'American Journal of Kidney Diseases',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Effect of Hemodiafiltration or Hemodialysis on Mortality in Kidney Failure (CONVINCE)',
      authors: ['Blankestijn PJ', 'Vernez A', 'Bots MJ', 'et al.'],
      source: 'New England Journal of Medicine 2023; 389:700-709',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury (STARRT-AKI)',
      authors: ['STARRT-AKI Investigators'],
      source: 'New England Journal of Medicine 2020; 383:240-251',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Effect of Dialysis Dose and Membrane Flux in Maintenance Hemodialysis (HEMO Study)',
      authors: ['Eknoyan G', 'Beck GJ', 'Cheung AK', 'et al.'],
      source: 'New England Journal of Medicine 2002; 347:2010-2019',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-5',
      type: 'textbook',
      title: 'Handbook of Dialysis, 5th Edition',
      authors: ['Daugirdas JT', 'Blake PG', 'Ing TS'],
      source: 'Wolters Kluwer',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'condition-enfermedad-renal-cronica-ckd', targetType: 'condition', relationship: 'related', label: 'ERC como indicación para diálisis / CKD as indication for dialysis' },
    { targetId: 'condition-lesion-renal-aguda-aki', targetType: 'condition', relationship: 'related', label: 'LRA que requiere diálisis / AKI requiring dialysis' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['nephrology'],
    keywords: [
      'diálisis', 'dialysis', 'hemodiálisis', 'hemodialysis', 'diálisis peritoneal',
      'peritoneal dialysis', 'fístula', 'fistula', 'acceso vascular', 'vascular access',
      'Kt/V', 'adecuación', 'adequacy', 'peritonitis', 'hemodiafiltración',
      'hemodiafiltration', 'CRRT', 'catéter', 'catheter', 'peso seco', 'dry weight',
      'ultrafiltración', 'ultrafiltration', 'riñón artificial', 'artificial kidney',
    ],
    clinicalRelevance: 'high',
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
