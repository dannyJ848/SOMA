/**
 * Enfermedad de Crohn / Crohn's Disease - Comprehensive Bilingual Educational Content
 *
 * La enfermedad de Crohn es una enfermedad inflamatoria intestinal crónica que puede
 * afectar cualquier parte del tracto gastrointestinal, desde la boca hasta el ano.
 * Se caracteriza por inflamación transmural, formación de granulomas y un curso
 * recurrente-remitente.
 *
 * Crohn's disease is a chronic inflammatory bowel disease that can affect any part of
 * the gastrointestinal tract. It is characterized by transmural inflammation, granuloma
 * formation, and a relapsing-remitting course.
 */

import { EducationalContent } from '../types';

export const enfermedadCrohnCrohns: EducationalContent = {
  id: 'condition-enfermedad-crohn',
  type: 'condition',
  name: "Crohn's Disease",
  nameEs: 'Enfermedad de Crohn',
  alternateNames: [
    'Ileitis Regional',
    'Enteritis Regional',
    'Ileocolitis de Crohn',
    'Regional Enteritis',
    'Regional Ileitis',
    'Granulomatous Colitis',
    'Crohn Ileocolitis',
  ],
  hpoId: 'HP:0100280',

  levels: {
    // =====================================================================
    // LEVEL 1 - 8th Grade / Octavo Grado
    // =====================================================================
    1: {
      level: 1,
      summary:
        'La enfermedad de Crohn causa inflamación (hinchazón) en el sistema digestivo, especialmente en los intestinos. Puede causar dolor de barriga, diarrea y cansancio. No tiene cura pero se puede controlar. | Crohn\'s disease causes inflammation (swelling) in the digestive system, especially the intestines. It can cause belly pain, diarrhea, and tiredness. There is no cure, but it can be managed.',
      explanation: `## Explicación

La enfermedad de Crohn es una condición que hace que partes de tu sistema digestivo se inflamen (se hinchen y se irriten). El sistema digestivo es el camino que sigue la comida desde tu boca hasta que sale de tu cuerpo.

**¿Qué pasa en el cuerpo?**

Normalmente, tu sistema de defensa (sistema inmune) protege tu cuerpo de gérmenes. En la enfermedad de Crohn, este sistema se confunde y ataca a tu propio intestino, causando hinchazón y dolor.

**¿Dónde afecta?**

Puede afectar cualquier parte del sistema digestivo, pero lo más común es que afecte:
- El final del intestino delgado (íleon)
- El comienzo del intestino grueso (colon)

**¿Qué síntomas causa?**

- Dolor de barriga, especialmente después de comer
- Diarrea frecuente (a veces con sangre)
- Mucho cansancio
- Perder peso sin querer
- Fiebre baja
- Llagas en la boca
- A veces dolor en las articulaciones

**¿Se puede curar?**

No tiene cura, pero hay medicinas que ayudan a controlar la inflamación y a sentirse mejor. Los síntomas van y vienen: a veces te sientes bien (remisión) y otras veces los síntomas empeoran (brote).

**¿Qué puedes hacer?**

- Tomar tus medicinas como te las receta el doctor
- Comer alimentos que no irriten tu estómago
- Descansar lo suficiente
- Hablar con tu doctor si los síntomas empeoran

---
## Explanation

Crohn's disease is a condition that causes parts of your digestive system to become inflamed (swollen and irritated). The digestive system is the path food follows from your mouth until it leaves your body.

**What happens in the body?**

Normally, your defense system (immune system) protects your body from germs. In Crohn's disease, this system gets confused and attacks your own intestine, causing swelling and pain.

**Where does it affect?**

It can affect any part of the digestive system, but most commonly affects:
- The end of the small intestine (ileum)
- The beginning of the large intestine (colon)

**What symptoms does it cause?**

- Belly pain, especially after eating
- Frequent diarrhea (sometimes with blood)
- Feeling very tired
- Losing weight without trying
- Low fever
- Mouth sores
- Sometimes joint pain

**Can it be cured?**

There is no cure, but medicines help control inflammation and feel better. Symptoms come and go: sometimes you feel good (remission) and other times symptoms worsen (flare).

**What can you do?**

- Take your medicines as prescribed
- Eat foods that don't irritate your stomach
- Rest enough
- Tell your doctor if symptoms get worse`,
      keyTerms: [
        {
          term: 'inflamación / inflammation',
          definition:
            'Cuando una parte del cuerpo se hincha, enrojece y duele. Es la respuesta del cuerpo a una lesión o problema. | When a part of the body becomes swollen, red, and painful. It is the body\'s response to injury or a problem.',
        },
        {
          term: 'sistema inmune / immune system',
          definition:
            'El sistema de defensa del cuerpo que nos protege de gérmenes y enfermedades. | The body\'s defense system that protects us from germs and diseases.',
        },
        {
          term: 'intestino / intestine',
          definition:
            'El tubo largo dentro de tu barriga que procesa la comida y absorbe los nutrientes. | The long tube inside your belly that processes food and absorbs nutrients.',
        },
        {
          term: 'remisión / remission',
          definition:
            'Cuando los síntomas de la enfermedad desaparecen o mejoran mucho. | When disease symptoms disappear or greatly improve.',
        },
        {
          term: 'brote / flare',
          definition:
            'Cuando los síntomas de la enfermedad empeoran después de un tiempo de sentirse bien. | When disease symptoms worsen after a period of feeling well.',
        },
      ],
      analogies: [
        'Imagina que tu intestino es un jardín. En la enfermedad de Crohn, el sistema de defensa del cuerpo es como un jardinero confundido que arranca las flores buenas pensando que son malas hierbas. | Imagine your intestine is a garden. In Crohn\'s disease, the body\'s defense system is like a confused gardener pulling out good flowers thinking they are weeds.',
        'Los brotes y las remisiones son como el clima: a veces hay tormentas (brotes) y a veces hay días soleados (remisión). No puedes controlar el clima, pero puedes llevar paraguas. | Flares and remissions are like weather: sometimes there are storms (flares) and sometimes sunny days (remission). You can\'t control the weather, but you can carry an umbrella.',
      ],
      examples: [
        'Un estudiante con enfermedad de Crohn puede sentirse bien durante semanas o meses, y luego de repente tener dolor de barriga y diarrea por varios días. | A student with Crohn\'s disease might feel fine for weeks or months, then suddenly have belly pain and diarrhea for several days.',
        'Una persona con Crohn puede necesitar ir al baño muchas más veces al día que una persona sana, especialmente durante un brote. | A person with Crohn\'s may need to go to the bathroom many more times per day than a healthy person, especially during a flare.',
      ],
      patientCounselingPoints: [
        'Es muy importante tomar las medicinas todos los días, incluso cuando te sientes bien, para prevenir brotes. | It is very important to take medicines every day, even when you feel well, to prevent flares.',
        'Lleva un diario de lo que comes para identificar qué alimentos empeoran tus síntomas. | Keep a food diary to identify which foods worsen your symptoms.',
        'No tengas miedo de hablar con tu doctor sobre cómo te sientes, incluyendo tu estado de ánimo. | Don\'t be afraid to talk to your doctor about how you feel, including your mood.',
        'Puedes vivir una vida activa y plena con la enfermedad de Crohn si sigues tu tratamiento. | You can live an active and full life with Crohn\'s disease if you follow your treatment.',
      ],
    },

    // =====================================================================
    // LEVEL 2 - High School / Preparatoria
    // =====================================================================
    2: {
      level: 2,
      summary:
        'La enfermedad de Crohn es una enfermedad inflamatoria intestinal (EII) autoinmune crónica que afecta el tracto gastrointestinal con inflamación que atraviesa toda la pared intestinal. Se clasifica por localización y comportamiento, y se maneja con inmunosupresores y biológicos. | Crohn\'s disease is a chronic autoimmune inflammatory bowel disease (IBD) that affects the GI tract with inflammation through the full intestinal wall. It is classified by location and behavior and managed with immunosuppressants and biologics.',
      explanation: `## Explicación

### ¿Qué es la Enfermedad de Crohn?

La enfermedad de Crohn pertenece al grupo de las enfermedades inflamatorias intestinales (EII), junto con la colitis ulcerosa. Es una condición crónica donde el sistema inmunológico ataca el tracto digestivo, causando inflamación profunda.

### Características Importantes

**Inflamación transmural:** A diferencia de la colitis ulcerosa, la inflamación en Crohn atraviesa todas las capas de la pared intestinal (mucosa, submucosa, muscular y serosa).

**Lesiones salteadas:** La inflamación no es continua; hay áreas enfermas junto a áreas sanas ("skip lesions").

**Cualquier parte del tracto GI:** Aunque es más común en el íleon terminal y el colon, puede afectar desde la boca hasta el ano.

### Clasificación de Montreal

**Por edad de diagnóstico:**
- A1: Menores de 16 años
- A2: Entre 17 y 40 años
- A3: Mayores de 40 años

**Por localización:**
- L1: Íleon terminal
- L2: Colon
- L3: Ileocolónica
- L4: Tracto GI superior

**Por comportamiento:**
- B1: No estenosante, no penetrante (inflamatorio)
- B2: Estenosante (causa estrechamiento)
- B3: Penetrante (forma fístulas)
- p: Enfermedad perianal

### Síntomas

**Síntomas intestinales:**
- Dolor abdominal (típicamente en el cuadrante inferior derecho)
- Diarrea crónica (generalmente sin sangre)
- Pérdida de peso involuntaria
- Fístulas (conexiones anormales entre órganos)
- Enfermedad perianal (abscesos, fístulas anales)

**Síntomas extraintestinales:**
- Articulaciones: Artritis
- Piel: Eritema nodoso, pioderma gangrenoso
- Ojos: Uveítis, epiescleritis
- Hígado: Colangitis esclerosante primaria (más común en colitis ulcerosa)
- Huesos: Osteoporosis

### Diagnóstico

- **Colonoscopia con biopsias:** Estándar de oro. Muestra úlceras profundas, patrón de empedrado, granulomas no caseificantes.
- **Estudios de imagen:** Enterografía por TC o RM para evaluar intestino delgado.
- **Laboratorio:** PCR elevada, VSG elevada, anemia, calprotectina fecal elevada.

### Tratamiento

**Para inducir remisión (durante brotes):**
- Corticosteroides (prednisona, budesonida) para controlar la inflamación rápidamente
- Nutrición enteral exclusiva (especialmente en niños)

**Para mantener remisión:**
- Inmunomoduladores: Azatioprina, metotrexato
- Biológicos anti-TNF: Infliximab, adalimumab
- Biológicos anti-integrinas: Vedolizumab
- Biológicos anti-IL-12/23: Ustekinumab

**Cirugía:**
- No es curativa pero puede ser necesaria para complicaciones
- Resección intestinal para estenosis o fístulas
- Se intenta conservar la mayor cantidad de intestino posible

---
## Explanation

### What is Crohn's Disease?

Crohn's disease belongs to the inflammatory bowel disease (IBD) group, along with ulcerative colitis. It is a chronic condition where the immune system attacks the digestive tract, causing deep inflammation.

### Important Characteristics

**Transmural inflammation:** Unlike ulcerative colitis, Crohn's inflammation goes through all layers of the intestinal wall (mucosa, submucosa, muscularis, and serosa).

**Skip lesions:** The inflammation is not continuous; there are diseased areas next to healthy areas.

**Any part of the GI tract:** Although most common in the terminal ileum and colon, it can affect from the mouth to the anus.

### Montreal Classification

**By age at diagnosis:**
- A1: Under 16 years
- A2: Between 17 and 40 years
- A3: Over 40 years

**By location:**
- L1: Terminal ileum
- L2: Colon
- L3: Ileocolonic
- L4: Upper GI tract

**By behavior:**
- B1: Non-stricturing, non-penetrating (inflammatory)
- B2: Stricturing (causes narrowing)
- B3: Penetrating (forms fistulas)
- p: Perianal disease

### Treatment

**To induce remission (during flares):**
- Corticosteroids (prednisone, budesonide) for rapid inflammation control
- Exclusive enteral nutrition (especially in children)

**To maintain remission:**
- Immunomodulators: Azathioprine, methotrexate
- Anti-TNF biologics: Infliximab, adalimumab
- Anti-integrin biologics: Vedolizumab
- Anti-IL-12/23 biologics: Ustekinumab

**Surgery:**
- Not curative but may be needed for complications
- Intestinal resection for strictures or fistulas
- Goal is to preserve as much bowel as possible`,
      keyTerms: [
        {
          term: 'enfermedad inflamatoria intestinal (EII) / inflammatory bowel disease (IBD)',
          definition:
            'Grupo de enfermedades que causan inflamación crónica del tracto digestivo; incluye Crohn y colitis ulcerosa. | Group of diseases causing chronic inflammation of the digestive tract; includes Crohn\'s and ulcerative colitis.',
        },
        {
          term: 'inflamación transmural / transmural inflammation',
          definition:
            'Inflamación que atraviesa todas las capas de la pared intestinal, característica de Crohn. | Inflammation that goes through all layers of the intestinal wall, characteristic of Crohn\'s.',
        },
        {
          term: 'lesiones salteadas / skip lesions',
          definition:
            'Áreas de inflamación separadas por tejido normal, típico de la enfermedad de Crohn. | Areas of inflammation separated by normal tissue, typical of Crohn\'s disease.',
        },
        {
          term: 'granuloma no caseificante / non-caseating granuloma',
          definition:
            'Agrupación de células inmunes en el tejido, hallazgo histológico común en Crohn. | Cluster of immune cells in tissue, a common histologic finding in Crohn\'s.',
        },
        {
          term: 'fístula / fistula',
          definition:
            'Conexión anormal entre dos órganos o entre un órgano y la piel, complicación de Crohn. | Abnormal connection between two organs or between an organ and the skin, a complication of Crohn\'s.',
          pronunciation: 'FEES-too-lah',
        },
        {
          term: 'calprotectina fecal / fecal calprotectin',
          definition:
            'Proteína en las heces que indica inflamación intestinal; útil para monitorear la actividad de la enfermedad. | Protein in stool indicating intestinal inflammation; useful for monitoring disease activity.',
        },
      ],
      analogies: [
        'La inflamación transmural en Crohn es como una inundación que no solo moja la superficie de una casa, sino que penetra las paredes, el piso y los cimientos. En la colitis ulcerosa, solo se moja la pintura superficial. | Transmural inflammation in Crohn\'s is like a flood that doesn\'t just wet the surface of a house but penetrates the walls, floor, and foundation. In ulcerative colitis, only the surface paint gets wet.',
        'Las lesiones salteadas son como baches en una carretera: no toda la carretera está dañada, pero hay secciones malas entre secciones buenas. | Skip lesions are like potholes on a road: not the whole road is damaged, but there are bad sections between good sections.',
      ],
      examples: [
        'Un paciente de 25 años con dolor en el cuadrante inferior derecho, diarrea crónica y pérdida de peso podría inicialmente confundirse con apendicitis, pero la colonoscopia revela inflamación ileal con granulomas. | A 25-year-old patient with right lower quadrant pain, chronic diarrhea, and weight loss could initially be confused with appendicitis, but colonoscopy reveals ileal inflammation with granulomas.',
      ],
      patientCounselingPoints: [
        'Los medicamentos biológicos pueden parecer fuertes, pero son muy efectivos para controlar la enfermedad y prevenir cirugías. No los dejes de tomar sin hablar con tu doctor. | Biologic medications may seem strong, but they are very effective at controlling the disease and preventing surgeries. Don\'t stop taking them without talking to your doctor.',
        'Fumar empeora significativamente la enfermedad de Crohn. Dejar de fumar es una de las cosas más importantes que puedes hacer. | Smoking significantly worsens Crohn\'s disease. Quitting smoking is one of the most important things you can do.',
      ],
    },

    // =====================================================================
    // LEVEL 3 - College / Universidad
    // =====================================================================
    3: {
      level: 3,
      summary:
        'La enfermedad de Crohn es una EII crónica mediada por la inmunidad con inflamación transmural granulomatosa que puede afectar cualquier segmento del tracto GI. La patogénesis involucra desregulación inmune, factores genéticos (NOD2/CARD15), microbioma alterado y factores ambientales. El manejo sigue estrategias de tratamiento dirigido al objetivo ("treat-to-target"). | Crohn\'s disease is a chronic immune-mediated IBD with granulomatous transmural inflammation affecting any GI segment. Pathogenesis involves immune dysregulation, genetic factors (NOD2/CARD15), altered microbiome, and environmental triggers. Management follows treat-to-target strategies.',
      explanation: `## Explicación

### Patogénesis

La enfermedad de Crohn resulta de una interacción compleja entre cuatro factores principales:

**1. Genética**
- Gen NOD2/CARD15 (cromosoma 16): Primera asociación genética identificada
  - Receptor intracelular de peptidoglicano bacteriano
  - Variantes asociadas con enfermedad ileal y fenotipo estenosante
- Más de 200 loci de susceptibilidad identificados (GWAS)
- Genes importantes: ATG16L1 (autofagia), IL23R, IRGM
- Concordancia en gemelos monozigóticos: ~50% (vs ~10% en dizigóticos)

**2. Microbioma Intestinal**
- Disbiosis: reducción de diversidad bacteriana
- Disminución de Firmicutes (especialmente Faecalibacterium prausnitzii)
- Aumento de Enterobacteriaceae
- Adherencia invasiva de E. coli (AIEC)
- Defecto en el manejo inmune de bacterias comensales

**3. Sistema Inmunológico**
- Respuesta inmune innata defectuosa → activación adaptativa excesiva
- Respuesta Th1/Th17 predominante
- Citocinas clave: TNF-alfa, IL-12, IL-23, IL-17, IFN-gamma
- Defecto en la función de barrera epitelial
- Deficiencia de autofagia en células de Paneth

**4. Factores Ambientales**
- Tabaquismo: Factor de riesgo modificable más importante
  - Aumenta riesgo 2x
  - Empeora curso clínico y recurrencia postquirúrgica
- Antibióticos en la infancia
- Dieta occidental (alta en grasas procesadas, baja en fibra)
- AINES (pueden precipitar brotes)
- Apendicectomía (controversial)

### Histopatología

**Hallazgos característicos:**
- Granulomas no caseificantes (30-50% de las biopsias)
- Inflamación transmural con agregados linfoides
- Fisuras profundas y úlceras aftoides
- Fibrosis submucosa
- Hiperplasia de células de Paneth (en el colon)
- Preservación de la arquitectura de las criptas (vs distorsión en CU)

### Diagnóstico Avanzado

**Endoscopia:**
- Ileocolonoscopia con biopsias escalonadas
- SES-CD (Simple Endoscopic Score for Crohn's Disease) para cuantificar actividad
- Hallazgos: úlceras longitudinales, aspecto de empedrado, estenosis, fístulas

**Enterografía por RM (ERM):**
- Modalidad preferida para evaluar intestino delgado
- Evalúa: engrosamiento mural, realce, edema, estenosis, fístulas, abscesos
- Sin radiación ionizante (importante en pacientes jóvenes)

**Cápsula endoscópica:**
- Evalúa intestino delgado no accesible por endoscopia
- Contraindicada si hay estenosis conocida (riesgo de retención)
- Índice de Lewis para cuantificar lesiones

**Biomarcadores:**
- PCR y VSG: Marcadores de inflamación sistémica
- Calprotectina fecal: Correlaciona con actividad endoscópica (>250 mcg/g sugiere enfermedad activa)
- Lactoferrina fecal: Alternativa a calprotectina
- ASCA+ / pANCA-: Patrón serológico sugestivo de Crohn (vs CU)

### Manejo Terapéutico

**Estrategia "Treat-to-Target":**
- Objetivo primario: Curación mucosa (endoscópica)
- Objetivos intermedios: Normalización de PCR y calprotectina
- Ajustar tratamiento según respuesta objetiva
- Monitoreo regular con biomarcadores y endoscopia

**Terapia Escalonada vs. Top-Down:**
- Step-up tradicional: 5-ASA → corticoides → inmunomoduladores → biológicos
- Top-down: Biológicos tempranos en enfermedad de alto riesgo
  - Factores de alto riesgo: edad joven, enfermedad perianal, estenosis, necesidad temprana de corticoides

**Medicamentos Biológicos:**
- Anti-TNF: Infliximab (IV), adalimumab (SC), certolizumab pegol (SC)
  - Monitoreo de niveles y anticuerpos anti-fármaco
  - Combinación con inmunomodulador mejora eficacia
- Anti-integrina: Vedolizumab (selectivo intestinal)
  - Perfil de seguridad favorable
  - Puede ser más lento en inicio de acción
- Anti-IL-12/23: Ustekinumab
  - Eficaz en pacientes naïve y expuestos a anti-TNF
- Anti-IL-23 selectivo: Risankizumab, guselkumab
  - Nueva generación con mayor selectividad

**Inhibidores de JAK:**
- Upadacitinib: Aprobado para Crohn
- Vía oral, inicio de acción rápido
- Riesgo de eventos tromboembólicos y herpes zóster

---
## Explanation

### Pathogenesis

Crohn's disease results from complex interaction among four main factors:

**1. Genetics**
- NOD2/CARD15 gene (chromosome 16): First genetic association identified
- Over 200 susceptibility loci identified (GWAS)
- Key genes: ATG16L1 (autophagy), IL23R, IRGM
- Monozygotic twin concordance: ~50%

**2. Intestinal Microbiome**
- Dysbiosis: reduced bacterial diversity
- Decreased Firmicutes (especially F. prausnitzii)
- Increased Enterobacteriaceae
- Adherent-invasive E. coli (AIEC)

**3. Immune System**
- Defective innate immune response → excessive adaptive activation
- Th1/Th17 predominant response
- Key cytokines: TNF-alpha, IL-12, IL-23, IL-17, IFN-gamma
- Epithelial barrier dysfunction
- Autophagy deficiency in Paneth cells

**4. Environmental Factors**
- Smoking: Most important modifiable risk factor (2x risk increase)
- Childhood antibiotics
- Western diet (high processed fat, low fiber)
- NSAIDs (can precipitate flares)

### Therapeutic Management

**Treat-to-Target Strategy:**
- Primary target: Mucosal healing (endoscopic)
- Intermediate targets: CRP and calprotectin normalization
- Adjust treatment based on objective response
- Regular monitoring with biomarkers and endoscopy

**Biologic Medications:**
- Anti-TNF: Infliximab, adalimumab, certolizumab pegol
- Anti-integrin: Vedolizumab (gut-selective)
- Anti-IL-12/23: Ustekinumab
- Anti-IL-23 selective: Risankizumab, guselkumab
- JAK inhibitors: Upadacitinib`,
      keyTerms: [
        {
          term: 'NOD2/CARD15',
          definition:
            'Gen en el cromosoma 16 que codifica un receptor de inmunidad innata; las variantes aumentan susceptibilidad a Crohn ileal. | Gene on chromosome 16 encoding an innate immunity receptor; variants increase susceptibility to ileal Crohn\'s.',
        },
        {
          term: 'disbiosis / dysbiosis',
          definition:
            'Desequilibrio en la composición del microbioma intestinal asociado con enfermedades inflamatorias. | Imbalance in intestinal microbiome composition associated with inflammatory diseases.',
        },
        {
          term: 'calprotectina fecal / fecal calprotectin',
          definition:
            'Proteína neutrofílica en heces que sirve como biomarcador no invasivo de inflamación intestinal; >250 mcg/g sugiere enfermedad activa. | Neutrophilic protein in stool serving as non-invasive biomarker of intestinal inflammation; >250 mcg/g suggests active disease.',
        },
        {
          term: 'curación mucosa / mucosal healing',
          definition:
            'Ausencia de úlceras y erosiones en la endoscopia; objetivo terapéutico primario en la estrategia treat-to-target. | Absence of ulcers and erosions on endoscopy; primary therapeutic target in treat-to-target strategy.',
        },
        {
          term: 'SES-CD',
          definition:
            'Simple Endoscopic Score for Crohn\'s Disease; sistema de puntuación que cuantifica la actividad endoscópica de la enfermedad. | Simple Endoscopic Score for Crohn\'s Disease; scoring system quantifying endoscopic disease activity.',
        },
        {
          term: 'ASCA / pANCA',
          definition:
            'Anticuerpos séricos: ASCA positivo y pANCA negativo sugieren Crohn; el patrón inverso sugiere colitis ulcerosa. | Serum antibodies: positive ASCA and negative pANCA suggest Crohn\'s; the inverse pattern suggests ulcerative colitis.',
        },
      ],
      clinicalNotes:
        'La calprotectina fecal es una herramienta invaluable para monitorear la actividad de la enfermedad sin endoscopia. Un valor <150 mcg/g generalmente indica remisión endoscópica. La monitorización terapéutica de fármacos (TDM) para biológicos anti-TNF optimiza resultados: niveles de infliximab >5 mcg/mL y adalimumab >7.5 mcg/mL se asocian con mejores tasas de remisión. | Fecal calprotectin is an invaluable tool for monitoring disease activity without endoscopy. A value <150 mcg/g generally indicates endoscopic remission. Therapeutic drug monitoring (TDM) for anti-TNF biologics optimizes outcomes: infliximab levels >5 mcg/mL and adalimumab >7.5 mcg/mL are associated with better remission rates.',
    },

    // =====================================================================
    // LEVEL 4 - Graduate / Posgrado
    // =====================================================================
    4: {
      level: 4,
      summary:
        'El manejo avanzado de la enfermedad de Crohn requiere fenotipificación precisa, estratificación de riesgo, monitorización terapéutica de fármacos biológicos, y decisiones complejas sobre terapia combinada, manejo quirúrgico y prevención de recurrencia postoperatoria. Las terapias emergentes incluyen inhibidores selectivos de IL-23, moduladores de S1P e inhibidores de JAK. | Advanced Crohn\'s management requires precise phenotyping, risk stratification, therapeutic drug monitoring of biologics, and complex decisions on combination therapy, surgical management, and postoperative recurrence prevention. Emerging therapies include selective IL-23 inhibitors, S1P modulators, and JAK inhibitors.',
      explanation: `## Explicación

### Estratificación de Riesgo y Tratamiento Personalizado

**Factores de Alto Riesgo para Enfermedad Discapacitante:**
- Edad joven al diagnóstico (<30 años)
- Enfermedad perianal al diagnóstico
- Comportamiento estenosante o penetrante
- Enfermedad extensa del intestino delgado (>100 cm)
- Úlceras profundas en endoscopia
- Necesidad de corticosteroides en el primer brote
- Antecedente de resección quirúrgica
- Tabaquismo activo

**Implicación terapéutica:**
- Pacientes de alto riesgo → terapia biológica temprana (top-down)
- Pacientes de bajo riesgo → escalonamiento convencional puede ser apropiado
- Monitorización frecuente con biomarcadores en todos los pacientes

### Monitorización Terapéutica de Fármacos (TDM)

**TDM Reactiva (ante pérdida de respuesta):**
- Medir niveles del fármaco y anticuerpos anti-fármaco (ADA)
- Nivel bajo + ADA negativo → aumentar dosis o acortar intervalo
- Nivel bajo + ADA positivo → cambiar a otro agente de la misma clase o diferente
- Nivel adecuado + ADA negativo → cambiar de mecanismo de acción

**TDM Proactiva (durante remisión):**
- Optimizar niveles hacia rangos terapéuticos óptimos
- Infliximab: >5 mcg/mL (algunos sugieren >7-10 en enfermedad perianal)
- Adalimumab: >7.5 mcg/mL
- Vedolizumab: >12 mcg/mL (inducción), >10 mcg/mL (mantenimiento)
- Ustekinumab: >4.5 mcg/mL

**Estudios de soporte:**
- TAXIT: TDM reactiva mejora remisión bioquímica
- PAILOT: TDM proactiva reduce brotes en pacientes pediátricos con anti-TNF
- PRECISION: TDM proactiva en Crohn con biosimilares

### Manejo de Complicaciones Específicas

**Enfermedad Perianal:**
- Clasificación: Fístulas simples vs complejas
- Evaluación: RM pélvica + examen bajo anestesia (EBA)
- Tratamiento:
  - Antibióticos (ciprofloxacino + metronidazol) + setón de drenaje
  - Biológicos anti-TNF (infliximab tiene mejor evidencia)
  - Combinación: Setón + anti-TNF → retiro secuencial del setón
  - Tratamiento local avanzado: Darvadstrocel (células madre alogénicas)
  - Cirugía definitiva: Fistulotomía (simples), colgajo de avance (complejas)

**Enfermedad Estenosante:**
- Diferenciar estenosis inflamatoria vs fibrótica
  - Inflamatoria: Realce en TC/RM, responde a terapia médica
  - Fibrótica: Sin realce, requiere intervención mecánica
- Dilatación endoscópica con balón: Estenosis cortas (<5 cm), accesibles
- Estricturoplastia: Conserva intestino, indicada en estenosis múltiples o intestino corto
- Resección: Estenosis complejas, sospecha de displasia

**Enfermedad del Intestino Delgado Extensa:**
- Riesgo de síndrome de intestino corto
- Priorizar terapia médica agresiva
- Estricturoplastia sobre resección cuando sea posible
- Nutrición enteral como terapia complementaria

### Recurrencia Postoperatoria

**Epidemiología:**
- 70-90% recurrencia endoscópica al año sin profilaxis
- 50% recurrencia clínica a 5 años

**Puntuación de Rutgeerts (recurrencia endoscópica en anastomosis ileocolónica):**
- i0: Sin lesiones
- i1: ≤5 úlceras aftoides
- i2: >5 úlceras aftoides o lesiones salteadas
- i3: Ileitis aftosa difusa
- i4: Inflamación difusa con úlceras grandes, nódulos, estenosis

**Profilaxis Postoperatoria:**
- Factores de riesgo: Tabaquismo, enfermedad penetrante, resección previa, ausencia de profilaxis
- Bajo riesgo: Mesalazina o sin profilaxis con monitoreo endoscópico a 6-12 meses
- Alto riesgo: Anti-TNF o inmunomoduladores desde el postoperatorio temprano
- Monitoreo: Ileocolonoscopia a 6-12 meses para guiar tratamiento

### Terapias Emergentes y Combinaciones

**Inhibidores Selectivos de IL-23:**
- Risankizumab: Eficacia demostrada en inducción y mantenimiento
- Guselkumab: Resultados prometedores en estudios fase 3
- Mirikizumab: En desarrollo para Crohn

**Combinación de Biológicos:**
- Vedolizumab + anti-TNF: Datos limitados pero prometedores
- Anti-IL-23 + anti-TNF: Estudios en curso
- Justificación: Mecanismos complementarios en enfermedad refractaria

**Moduladores de S1P:**
- Ozanimod: Aprobado para colitis ulcerosa, en estudio para Crohn
- Etrasimod: Estudios fase 3 en curso

**Inhibidores de JAK:**
- Upadacitinib: Aprobado para Crohn
- Filgotinib: Resultados mixtos en Crohn
- Consideraciones de seguridad: Eventos tromboembólicos, herpes zóster, malignidad (especialmente >65 años)

---
## Explanation

### Risk Stratification and Personalized Treatment

High-risk patients (young age, perianal disease, stricturing/penetrating behavior, extensive small bowel disease, deep ulcers) benefit from early biologic therapy. Therapeutic drug monitoring (TDM) - both reactive and proactive - optimizes biologic efficacy.

### Management of Specific Complications

**Perianal Disease:** Pelvic MRI + exam under anesthesia, seton drainage + anti-TNF, sequential seton removal, advanced local therapies (darvadstrocel).

**Stricturing Disease:** Differentiate inflammatory vs fibrotic, endoscopic balloon dilation for short strictures, strictureplasty to conserve bowel, resection for complex strictures.

### Postoperative Recurrence

70-90% endoscopic recurrence at 1 year without prophylaxis. Rutgeerts score guides management. High-risk patients need early anti-TNF or immunomodulator prophylaxis. Ileocolonoscopy at 6-12 months guides treatment.

### Emerging Therapies

Selective IL-23 inhibitors (risankizumab, guselkumab), JAK inhibitors (upadacitinib), S1P modulators (ozanimod), and biologic combination strategies.`,
      keyTerms: [
        {
          term: 'monitorización terapéutica de fármacos (TDM)',
          definition:
            'Medición de niveles séricos del fármaco biológico y anticuerpos anti-fármaco para optimizar la dosificación y guiar decisiones clínicas. | Measurement of serum biologic drug levels and anti-drug antibodies to optimize dosing and guide clinical decisions.',
        },
        {
          term: 'puntuación de Rutgeerts / Rutgeerts score',
          definition:
            'Sistema de clasificación endoscópica (i0-i4) que evalúa la recurrencia de Crohn en la anastomosis ileocolónica después de cirugía. | Endoscopic classification system (i0-i4) evaluating Crohn\'s recurrence at the ileocolonic anastomosis after surgery.',
        },
        {
          term: 'estricturoplastia / strictureplasty',
          definition:
            'Técnica quirúrgica que ensancha una estenosis intestinal sin resecar intestino, preservando la longitud intestinal. | Surgical technique that widens an intestinal stricture without resecting bowel, preserving intestinal length.',
        },
        {
          term: 'darvadstrocel',
          definition:
            'Terapia con células madre mesenquimales alogénicas aprobada para fístulas perianales complejas refractarias en enfermedad de Crohn. | Allogeneic mesenchymal stem cell therapy approved for refractory complex perianal fistulas in Crohn\'s disease.',
        },
        {
          term: 'anticuerpos anti-fármaco (ADA)',
          definition:
            'Anticuerpos que el cuerpo produce contra medicamentos biológicos, reduciendo su eficacia y potencialmente causando reacciones. | Antibodies the body produces against biologic medications, reducing their efficacy and potentially causing reactions.',
        },
        {
          term: 'inhibidores selectivos de IL-23 / selective IL-23 inhibitors',
          definition:
            'Nueva generación de biológicos que bloquean solo la subunidad p19 de IL-23, con mayor selectividad que los anti-IL-12/23. | New generation of biologics blocking only the p19 subunit of IL-23, with greater selectivity than anti-IL-12/23.',
        },
      ],
      clinicalNotes:
        'La TDM proactiva está ganando aceptación como estándar de cuidado para anti-TNF. Los niveles terapéuticos se asocian con mejores resultados a largo plazo. En enfermedad perianal, la RM pélvica con protocolo de fístula es mandatoria antes de cualquier intervención quirúrgica. La combinación de setón + infliximab tiene las mejores tasas de cierre de fístulas. Para recurrencia postoperatoria, la ileocolonoscopia a 6-12 meses con ajuste terapéutico basado en Rutgeerts score (treat-to-target endoscópico) reduce la recurrencia clínica. | Proactive TDM is gaining acceptance as standard of care for anti-TNF. Therapeutic levels are associated with better long-term outcomes. In perianal disease, pelvic MRI with fistula protocol is mandatory before any surgical intervention. The combination of seton + infliximab has the best fistula closure rates. For postoperative recurrence, ileocolonoscopy at 6-12 months with therapeutic adjustment based on Rutgeerts score (endoscopic treat-to-target) reduces clinical recurrence.',
    },

    // =====================================================================
    // LEVEL 5 - MD/Professional
    // =====================================================================
    5: {
      level: 5,
      summary:
        'El manejo contemporáneo de Crohn integra medicina de precisión, biomarcadores avanzados, inmunofenotipificación, algoritmos de selección terapéutica basados en evidencia, manejo multidisciplinario de enfermedad compleja y estrategias de tratamiento emergentes incluyendo terapia celular, terapia dual biológica y enfoques basados en el microbioma. | Contemporary Crohn\'s management integrates precision medicine, advanced biomarkers, immunophenotyping, evidence-based therapeutic selection algorithms, multidisciplinary complex disease management, and emerging treatment strategies including cell therapy, dual biologic therapy, and microbiome-based approaches.',
      explanation: `## Explicación

### Ensayos Clínicos Fundamentales y Cambio de Práctica

**SONIC Trial (2010):**
- Infliximab + azatioprina > infliximab solo > azatioprina sola
- Estableció la terapia combinada como estándar para Crohn moderado-severo
- Remisión libre de corticosteroides a semana 26: 57% combo vs 44% IFX vs 30% AZA

**CALM Trial (2017):**
- Tight control (tratamiento guiado por biomarcadores) > manejo clínico convencional
- Curación mucosa significativamente mayor con tight control
- Validó la estrategia treat-to-target con calprotectina y PCR

**ADVANCE/MOTIVATE/FORTIFY (Risankizumab):**
- Eficacia superior a placebo en inducción (45-50% remisión clínica)
- Mantenimiento de remisión endoscópica sostenida
- Perfil de seguridad favorable vs anti-TNF

**GALAXI (Guselkumab):**
- Anti-IL-23 selectivo con resultados prometedores fase 2/3
- Combinación IV inducción → SC mantenimiento
- Eficaz en pacientes expuestos a anti-TNF

**U-EXCEL/U-EXCEED/U-ENDURE (Upadacitinib):**
- JAK1 inhibidor selectivo
- Eficacia en pacientes bio-naïve y bio-expuestos
- Remisión endoscópica: ~35-40% en mantenimiento
- Vigilancia de seguridad: herpes zóster, eventos CV, TEV

### Algoritmos de Selección Terapéutica Contemporáneos

**Primera línea en enfermedad moderada-severa:**
1. Anti-TNF (infliximab o adalimumab) + inmunomodulador
   - Mayor evidencia a largo plazo
   - TDM bien establecida
   - Biosimilares disponibles → menor costo
2. Vedolizumab
   - Perfil de seguridad superior
   - Preferido en pacientes con riesgo de infección
   - Puede ser inferior en enfermedad del intestino delgado
3. Ustekinumab
   - Eficaz en múltiples fenotipos
   - Dosificación conveniente (SC cada 8-12 semanas)
   - Buena opción en fallo a anti-TNF

**Segunda línea (tras fallo biológico):**
1. Cambio de mecanismo de acción
   - Fallo a anti-TNF → IL-23 inhibidor o vedolizumab
   - Fallo a vedolizumab → anti-TNF o IL-23 inhibidor
2. Upadacitinib
   - Alternativa oral en fallo a biológicos
   - Inicio de acción rápido
3. Risankizumab o guselkumab
   - Alta eficacia en pacientes bio-expuestos

**Enfermedad refractaria multitratada:**
- Considerar terapia biológica dual
- Evaluar componente quirúrgico (enfermedad localizada resecable)
- Ensayos clínicos
- TPMT antes de iniciar tiopurinas
- Optimización nutricional como adyuvante

### Terapia Biológica Dual

**Combinaciones publicadas:**
- Vedolizumab + adalimumab: Mayor evidencia; vedolizumab gut-selective minimiza toxicidad sistémica
- Vedolizumab + ustekinumab: Series de casos con resultados favorables
- Ustekinumab + anti-TNF: Experiencia limitada

**Indicaciones potenciales:**
- Enfermedad refractaria a monoterapia biológica
- Manifestaciones extraintestinales que requieren biológico sistémico + intestinal
- Enfermedad perianal refractaria
- EII + comorbilidad autoinmune (ej: psoriasis)

**Consideraciones:**
- Evidencia limitada a series de casos y cohortes retrospectivas
- Mayor riesgo teórico de infección
- Necesidad de monitoreo infeccioso estrecho
- Costos significativos

### Biomarcadores Avanzados y Medicina de Precisión

**Predicción de Respuesta Terapéutica:**
- Oncostatin M (OSM): Elevado predice fallo a anti-TNF
- TREM-1: Asociado con respuesta a infliximab
- Perfil de expresión génica mucosa: Investigación activa
- Machine learning aplicado a datos multiómicos

**Curación Histológica como Nuevo Objetivo:**
- Va más allá de la curación endoscópica
- Remisión histológica: Ausencia de infiltrado inflamatorio significativo
- Asociada con menor riesgo de recaída a largo plazo
- Índices: Geboes score, Nancy Index, Robarts Histopathology Index

**Curación Transmural:**
- Normalización del engrosamiento de la pared intestinal en RM/US
- Objetivo más estricto que curación endoscópica
- Asociada con mejores resultados a largo plazo
- Ultrasonido intestinal como herramienta de monitoreo no invasiva

### Manejo Quirúrgico Avanzado

**Resección Laparoscópica:**
- Estándar para resecciones ileocecales y colonos
- Menor morbilidad, recuperación más rápida
- Mismo índice de recurrencia que cirugía abierta

**Estricturoplastia Avanzada:**
- Técnica de Michelassi (side-to-side): Para estenosis >10 cm
- Heineke-Mikulicz: Estenosis cortas (<10 cm)
- Finney: Estenosis intermedias

**Manejo del Intestino Corto Post-resección:**
- Definición: <200 cm de intestino delgado remanente
- Nutrición parenteral domiciliaria
- Análogos de GLP-2 (teduglutida)
- Trasplante intestinal en casos seleccionados

### Vigilancia de Cáncer Colorrectal

- Colonoscopia de vigilancia 8-10 años después del diagnóstico
- Cromoendoscopia o imágenes de alta definición
- Biopsias dirigidas de lesiones
- Intervalo: Cada 1-5 años según factores de riesgo
- Mayor riesgo: Colitis extensa, colangitis esclerosante primaria, antecedente familiar
- Displasia: Resección endoscópica si posible; colectomía si no resecable

### Fronteras de Investigación

**Microbioma Terapéutico:**
- Trasplante de microbiota fecal (TMF): Resultados mixtos en Crohn
- Consorcios bacterianos definidos: En desarrollo
- Modulación dietética del microbioma (dieta de exclusión de Crohn)

**Terapia Celular:**
- Células madre mesenquimales para fístulas perianales (darvadstrocel)
- Investigación en terapia celular sistémica para enfermedad luminal
- CAR-T regulatorios: Fase preclínica

**Inteligencia Artificial:**
- Detección automatizada de lesiones endoscópicas
- Predicción de brotes mediante wearables y datos del paciente
- Optimización de dosis de biológicos mediante modelos farmacocinéticos

---
## Explanation

### Landmark Clinical Trials and Practice Changes

SONIC established combination therapy (infliximab + azathioprine). CALM validated treat-to-target with biomarkers. ADVANCE/MOTIVATE/FORTIFY demonstrated risankizumab efficacy. U-EXCEL/U-EXCEED/U-ENDURE showed upadacitinib efficacy in bio-naive and bio-exposed patients.

### Contemporary Therapeutic Selection Algorithms

First-line moderate-severe: Anti-TNF + immunomodulator, vedolizumab, or ustekinumab based on phenotype and risk factors. Second-line: Switch mechanism of action. Refractory: Consider dual biologic therapy, surgery, or clinical trials.

### Advanced Biomarkers and Precision Medicine

Oncostatin M predicts anti-TNF failure. Mucosal gene expression profiling under investigation. Histologic healing and transmural healing as emerging therapeutic targets beyond mucosal healing.

### Research Frontiers

Microbiome therapeutics (FMT, defined bacterial consortia, Crohn's exclusion diet), cell therapy (MSCs, regulatory CAR-T), AI-driven endoscopic detection and flare prediction.`,
      keyTerms: [
        {
          term: 'oncostatin M (OSM)',
          definition:
            'Citocina cuya expresión elevada en la mucosa se asocia con resistencia a anti-TNF; potencial biomarcador predictivo de respuesta terapéutica. | Cytokine whose elevated mucosal expression is associated with anti-TNF resistance; potential predictive biomarker of therapeutic response.',
        },
        {
          term: 'curación transmural / transmural healing',
          definition:
            'Normalización del engrosamiento de la pared intestinal en imágenes transversales (RM/US); objetivo terapéutico más estricto que la curación mucosa. | Normalization of bowel wall thickening on cross-sectional imaging (MRI/US); stricter therapeutic target than mucosal healing.',
        },
        {
          term: 'SONIC trial',
          definition:
            'Ensayo clínico fundamental que demostró superioridad de infliximab + azatioprina sobre cada agente solo en Crohn moderado-severo. | Landmark trial demonstrating superiority of infliximab + azathioprine over either agent alone in moderate-severe Crohn\'s.',
        },
        {
          term: 'terapia biológica dual / dual biologic therapy',
          definition:
            'Uso simultáneo de dos agentes biológicos con mecanismos de acción diferentes para enfermedad refractaria; evidencia emergente. | Simultaneous use of two biologic agents with different mechanisms of action for refractory disease; emerging evidence.',
        },
        {
          term: 'dieta de exclusión de Crohn / Crohn\'s Disease Exclusion Diet (CDED)',
          definition:
            'Dieta terapéutica que excluye alimentos asociados con disbiosis e inflamación intestinal; eficacia demostrada en inducción de remisión, especialmente en pediatría. | Therapeutic diet excluding foods associated with dysbiosis and intestinal inflammation; demonstrated efficacy in remission induction, especially in pediatrics.',
        },
        {
          term: 'estricturoplastia de Michelassi',
          definition:
            'Técnica side-to-side isoperistáltica para estenosis largas (>10 cm) que preserva la longitud intestinal. | Side-to-side isoperistaltic technique for long strictures (>10 cm) that preserves bowel length.',
        },
      ],
      clinicalNotes:
        'Puntos clave para la práctica clínica avanzada:\n\n1. **Selección de biológico:** Considerar fenotipo de enfermedad, exposición previa, comorbilidades y preferencia del paciente. Anti-TNF sigue siendo primera línea con mayor evidencia, pero IL-23 inhibidores muestran eficacia comparable con mejor perfil de seguridad.\n\n2. **TDM proactiva:** Implementar desde el inicio de la terapia biológica. Los niveles target son dinámicos y pueden necesitar ser más altos en enfermedad activa que en mantenimiento.\n\n3. **Enfermedad perianal:** La RM pélvica es mandatoria. La combinación setón + anti-TNF con TDM proactiva es el estándar actual. Darvadstrocel es opción para fístulas refractarias.\n\n4. **Recurrencia postoperatoria:** Ileocolonoscopia a 6-12 meses es MANDATORIA. Ajustar tratamiento según Rutgeerts score. Los anti-TNF son los más efectivos para prevención.\n\n5. **Terapia dual:** Reservar para enfermedad refractaria verdadera después de optimización de monoterapia. Monitoreo infeccioso riguroso.\n\n| Key clinical practice points:\n\n1. **Biologic selection:** Consider disease phenotype, prior exposure, comorbidities, and patient preference. Anti-TNF remains first-line with most evidence, but IL-23 inhibitors show comparable efficacy with better safety profile.\n\n2. **Proactive TDM:** Implement from the start of biologic therapy. Target levels are dynamic and may need to be higher in active disease than maintenance.\n\n3. **Perianal disease:** Pelvic MRI is mandatory. Seton + anti-TNF combination with proactive TDM is current standard. Darvadstrocel is an option for refractory fistulas.\n\n4. **Postoperative recurrence:** Ileocolonoscopy at 6-12 months is MANDATORY. Adjust treatment per Rutgeerts score. Anti-TNFs are most effective for prevention.\n\n5. **Dual therapy:** Reserve for truly refractory disease after monotherapy optimization. Rigorous infection monitoring.',
    },
  },

  media: [
    {
      id: 'crohn-gi-tract-distribution',
      type: 'diagram',
      filename: 'crohn-gi-distribution.svg',
      title: 'Distribución de la Enfermedad de Crohn en el Tracto GI / Crohn\'s Disease GI Tract Distribution',
      description:
        'Áreas más comúnmente afectadas por la enfermedad de Crohn en el tracto gastrointestinal',
    },
    {
      id: 'crohn-transmural-inflammation',
      type: 'diagram',
      filename: 'crohn-transmural-layers.svg',
      title: 'Inflamación Transmural vs Mucosa / Transmural vs Mucosal Inflammation',
      description:
        'Comparación de la inflamación transmural de Crohn con la inflamación superficial de la colitis ulcerosa',
    },
    {
      id: 'crohn-complications-diagram',
      type: 'diagram',
      filename: 'crohn-complications.svg',
      title: 'Complicaciones de la Enfermedad de Crohn / Crohn\'s Disease Complications',
      description:
        'Fístulas, estenosis, abscesos y manifestaciones extraintestinales',
    },
  ],

  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Harrison\'s Principles of Internal Medicine, 21st Edition - Inflammatory Bowel Disease',
      authors: ['Loscalzo, J.', 'Fauci, A.S.', 'Kasper, D.L.'],
      source: 'McGraw-Hill Education',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'AGA Clinical Practice Update on Management of Crohn\'s Disease After Surgery',
      authors: ['Nguyen, G.C.', 'Loftus, E.V.', 'et al.'],
      source: 'Gastroenterology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'ECCO Guidelines on Therapeutics in Crohn\'s Disease: Medical Treatment',
      authors: ['Torres, J.', 'Bonovas, S.', 'et al.'],
      source: 'Journal of Crohn\'s and Colitis',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'SONIC Trial: Infliximab, Azathioprine, or Combination Therapy for Crohn\'s Disease',
      authors: ['Colombel, J.F.', 'Sandborn, W.J.', 'et al.'],
      source: 'New England Journal of Medicine',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'condition-colitis-ulcerosa', targetType: 'condition', relationship: 'sibling', label: 'Colitis Ulcerosa / Ulcerative Colitis' },
    { targetId: 'condition-enfermedad-hepatica', targetType: 'condition', relationship: 'related', label: 'Enfermedad Hepática / Liver Disease' },
    { targetId: 'condition-sindrome-intestino-irritable', targetType: 'condition', relationship: 'related', label: 'Síndrome del Intestino Irritable / IBS' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopia / Colonoscopy' },
    { targetId: 'condition-gi-cancers', targetType: 'condition', relationship: 'related', label: 'Neoplasia GI / GI Neoplasia' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'inflammatory-bowel-disease', 'autoimmune', 'immunology'],
    keywords: [
      'enfermedad de Crohn',
      'Crohn\'s disease',
      'EII',
      'IBD',
      'inflamación transmural',
      'transmural inflammation',
      'granuloma',
      'fístula',
      'fistula',
      'biológicos',
      'biologics',
      'anti-TNF',
      'infliximab',
      'adalimumab',
      'vedolizumab',
      'ustekinumab',
      'calprotectina',
      'calprotectin',
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

export default enfermedadCrohnCrohns;
