/**
 * Colitis Ulcerosa / Ulcerative Colitis - Comprehensive Bilingual Educational Content
 *
 * La colitis ulcerosa es una enfermedad inflamatoria intestinal crónica que afecta
 * exclusivamente al colon y recto con inflamación continua limitada a la mucosa.
 * Se caracteriza por diarrea sanguinolenta, urgencia rectal y un curso recurrente-remitente.
 *
 * Ulcerative colitis is a chronic inflammatory bowel disease affecting exclusively
 * the colon and rectum with continuous mucosal inflammation. It is characterized by
 * bloody diarrhea, rectal urgency, and a relapsing-remitting course.
 */

import { EducationalContent } from '../types';

export const colitisUlcerosaUlcerativeColitis: EducationalContent = {
  id: 'condition-colitis-ulcerosa',
  type: 'condition',
  name: 'Ulcerative Colitis',
  nameEs: 'Colitis Ulcerosa',
  alternateNames: [
    'CU',
    'UC',
    'Colitis Ulcerativa',
    'Proctocolitis Ulcerosa',
    'Rectocolitis Ulcerosa Hemorrágica',
    'Ulcerative Proctocolitis',
  ],
  hpoId: 'HP:0100279',

  levels: {
    // =====================================================================
    // LEVEL 1 - 8th Grade / Octavo Grado
    // =====================================================================
    1: {
      level: 1,
      summary:
        'La colitis ulcerosa causa inflamación y llagas en el intestino grueso (colon) y el recto. Esto produce diarrea con sangre, dolor de barriga y necesidad urgente de ir al baño. No tiene cura pero se puede controlar con medicinas. | Ulcerative colitis causes inflammation and sores in the large intestine (colon) and rectum. This causes bloody diarrhea, belly pain, and urgent need to use the bathroom. There is no cure, but it can be controlled with medicine.',
      explanation: `## Explicación

La colitis ulcerosa es una enfermedad que causa hinchazón y llagas (úlceras) dentro del intestino grueso. El intestino grueso es la última parte del sistema digestivo, donde el cuerpo absorbe agua y forma las heces.

**¿Qué pasa en el cuerpo?**

El sistema de defensa del cuerpo (sistema inmune) se confunde y ataca el revestimiento interno del intestino grueso. Esto causa:
- Hinchazón (inflamación)
- Llagas pequeñas (úlceras) que sangran
- Producción excesiva de moco

**¿Cuáles son los síntomas principales?**

- Diarrea con sangre (el síntoma más común)
- Dolor de barriga, generalmente del lado izquierdo
- Necesidad urgente de ir al baño (a veces no llegas a tiempo)
- Ir al baño muchas veces al día (a veces más de 10 veces)
- Cansancio extremo
- Perder peso sin querer
- A veces fiebre

**¿En qué se diferencia de la enfermedad de Crohn?**

- La colitis ulcerosa SOLO afecta al intestino grueso y recto
- La inflamación es continua (no hay áreas sanas en medio)
- Solo afecta la capa superficial del intestino

**¿Cómo se trata?**

- Medicinas para reducir la inflamación
- Medicinas que calman el sistema inmune
- En casos muy severos, puede ser necesario quitar el colon con cirugía
- La cirugía puede curar la enfermedad porque se quita el órgano afectado

**¿Cuándo debes buscar ayuda urgente?**

- Mucha sangre en las heces
- Dolor de barriga muy fuerte
- Fiebre alta
- Ir al baño más de 6 veces al día con sangre

---
## Explanation

Ulcerative colitis is a disease that causes swelling and sores (ulcers) inside the large intestine. The large intestine is the last part of the digestive system, where the body absorbs water and forms stool.

**What happens in the body?**

The body's defense system (immune system) gets confused and attacks the inner lining of the large intestine. This causes inflammation, small bleeding sores, and excess mucus production.

**What are the main symptoms?**

- Bloody diarrhea (most common symptom)
- Belly pain, usually on the left side
- Urgent need to use the bathroom
- Going to the bathroom many times a day
- Extreme tiredness
- Weight loss
- Sometimes fever

**How is it different from Crohn's disease?**

- UC ONLY affects the large intestine and rectum
- The inflammation is continuous (no healthy areas in between)
- Only affects the superficial layer of the intestine

**How is it treated?**

- Medicines to reduce inflammation
- Medicines that calm the immune system
- In very severe cases, surgery may be needed to remove the colon
- Surgery can cure the disease because the affected organ is removed`,
      keyTerms: [
        {
          term: 'colon / colon',
          definition:
            'El intestino grueso; el tubo largo donde se absorbe agua y se forman las heces antes de salir del cuerpo. | The large intestine; the long tube where water is absorbed and stool is formed before leaving the body.',
        },
        {
          term: 'úlcera / ulcer',
          definition:
            'Una llaga o herida abierta en el revestimiento del intestino que puede sangrar. | An open sore or wound in the lining of the intestine that can bleed.',
        },
        {
          term: 'recto / rectum',
          definition:
            'La última parte del intestino grueso, justo antes del ano. | The last part of the large intestine, just before the anus.',
        },
        {
          term: 'diarrea sanguinolenta / bloody diarrhea',
          definition:
            'Heces líquidas o muy blandas que tienen sangre mezclada; el síntoma más característico de la colitis ulcerosa. | Loose or very soft stools that have blood mixed in; the most characteristic symptom of ulcerative colitis.',
        },
        {
          term: 'urgencia rectal / rectal urgency',
          definition:
            'Necesidad repentina e intensa de ir al baño, a veces sin poder esperar. | Sudden and intense need to go to the bathroom, sometimes unable to wait.',
        },
      ],
      analogies: [
        'Imagina que el interior de tu intestino grueso es como la pared de una casa. En la colitis ulcerosa, la pintura y el yeso de la pared se dañan (úlceras), dejando la pared cruda y sangrando. | Imagine the inside of your large intestine is like a house wall. In ulcerative colitis, the paint and plaster get damaged (ulcers), leaving the wall raw and bleeding.',
        'La urgencia de ir al baño en la colitis ulcerosa es como una alarma de incendio: es tan intensa que tienes que actuar inmediatamente. | The urgency to go to the bathroom in ulcerative colitis is like a fire alarm: it\'s so intense that you have to act immediately.',
      ],
      examples: [
        'Una persona con colitis ulcerosa puede notar que sus heces tienen sangre roja brillante, especialmente durante un brote. Esto ocurre porque las úlceras en el colon sangran. | A person with ulcerative colitis may notice their stool has bright red blood, especially during a flare. This happens because the ulcers in the colon bleed.',
        'Alguien con CU puede necesitar saber dónde están los baños en todos los lugares que visita, porque la urgencia rectal puede aparecer sin aviso. | Someone with UC may need to know where bathrooms are in every place they visit, because rectal urgency can appear without warning.',
      ],
      patientCounselingPoints: [
        'Toma tus medicinas todos los días, incluso cuando te sientes bien. Esto ayuda a prevenir brotes. | Take your medicines every day, even when you feel well. This helps prevent flares.',
        'Si ves mucha sangre en las heces o tienes más de 6 deposiciones al día, llama a tu doctor inmediatamente. | If you see a lot of blood in your stool or have more than 6 bowel movements per day, call your doctor immediately.',
        'Es normal sentir frustración o tristeza con esta enfermedad. Buscar apoyo emocional o grupos de apoyo puede ayudar mucho. | It\'s normal to feel frustration or sadness with this disease. Seeking emotional support or support groups can help a lot.',
        'La colitis ulcerosa no es causada por estrés ni por algo que hiciste mal. Es una enfermedad del sistema inmune. | Ulcerative colitis is not caused by stress or something you did wrong. It is an immune system disease.',
      ],
    },

    // =====================================================================
    // LEVEL 2 - High School / Preparatoria
    // =====================================================================
    2: {
      level: 2,
      summary:
        'La colitis ulcerosa es una EII crónica con inflamación continua limitada a la mucosa del colon y recto, que se extiende proximalmente desde el recto. Se clasifica por extensión (proctitis, colitis izquierda, pancolitis) y severidad. El tratamiento escalonado va desde aminosalicilatos hasta biológicos y cirugía. | Ulcerative colitis is a chronic IBD with continuous mucosal inflammation of the colon and rectum, extending proximally from the rectum. It is classified by extent (proctitis, left-sided colitis, pancolitis) and severity. Step-up treatment ranges from aminosalicylates to biologics and surgery.',
      explanation: `## Explicación

### Características Principales

**Inflamación continua y superficial:**
- Comienza SIEMPRE en el recto y se extiende hacia arriba de forma continua
- Solo afecta la mucosa y submucosa (capas superficiales)
- NO hay lesiones salteadas (a diferencia de Crohn)
- NO forma fístulas ni granulomas

### Clasificación de Montreal por Extensión

- **E1 - Proctitis ulcerosa:** Solo el recto (30% de los pacientes)
- **E2 - Colitis izquierda (distal):** Hasta el ángulo esplénico (40%)
- **E3 - Colitis extensa (pancolitis):** Más allá del ángulo esplénico (30%)

### Clasificación por Severidad (Criterios de Truelove y Witts)

| Criterio | Leve | Moderada | Severa |
|----------|------|----------|--------|
| Deposiciones/día | <4 | 4-6 | >6 |
| Sangre en heces | Intermitente | Frecuente | Continua |
| Temperatura | Normal | ≤37.8°C | >37.8°C |
| Frecuencia cardíaca | Normal | ≤90 lpm | >90 lpm |
| Hemoglobina | Normal | >10.5 g/dL | <10.5 g/dL |
| VSG | <20 | 20-30 | >30 |

### Síntomas

**Intestinales:**
- Diarrea sanguinolenta con moco (síntoma cardinal)
- Urgencia rectal y tenesmo
- Dolor abdominal tipo cólico (cuadrante inferior izquierdo)
- Incontinencia fecal
- Deposiciones nocturnas

**Extraintestinales (hasta 40% de pacientes):**
- Articulares: Artritis periférica, espondilitis anquilosante, sacroileitis
- Cutáneas: Eritema nodoso, pioderma gangrenoso
- Oculares: Uveitis anterior, epiescleritis
- Hepatobiliares: Colangitis esclerosante primaria (CEP)
- Hematológicas: Anemia, trombocitosis, eventos tromboembólicos

### Diagnóstico

**Colonoscopia con biopsias:**
- Estándar de oro para diagnóstico
- Hallazgos: Eritema difuso, pérdida del patrón vascular, friabilidad, úlceras superficiales, pseudopólipos
- Biopsias: Distorsión de criptas, abscesos de criptas, depleción de células caliciformes

**Laboratorio:**
- Hemograma: Anemia, trombocitosis, leucocitosis
- PCR y VSG elevadas
- Calprotectina fecal elevada
- Albúmina baja en enfermedad severa
- Serología: pANCA positivo (60-70%), ASCA negativo

**Estudios de imagen:**
- Radiografía simple de abdomen: Excluir megacolon tóxico
- TC de abdomen: Engrosamiento mural, colitis severa, complicaciones

### Tratamiento por Extensión y Severidad

**Proctitis (E1):**
- Primera línea: Mesalazina tópica (supositorios)
- Segunda línea: Combinación oral + tópica
- Respuesta esperada: Alta con terapia tópica sola

**Colitis izquierda (E2):**
- Primera línea: Mesalazina oral + tópica (enemas)
- Si no responde: Corticosteroides orales para inducción
- Mantenimiento: Mesalazina oral + tópica

**Pancolitis (E3) leve-moderada:**
- Mesalazina oral dosis alta + tópica
- Si no responde: Corticosteroides orales
- Mantenimiento: Mesalazina, tiopurinas o biológicos

**Colitis severa (cualquier extensión):**
- Hospitalización
- Corticosteroides IV (metilprednisolona o hidrocortisona)
- Si no responde en 3-5 días: Infliximab IV o ciclosporina IV
- Si no responde a rescate: Colectomía

**Mantenimiento:**
- Aminosalicilatos (mesalazina): Primera línea para enfermedad leve-moderada
- Tiopurinas (azatioprina): Para pacientes dependientes de esteroides
- Biológicos: Anti-TNF, vedolizumab, ustekinumab
- Inhibidores de JAK: Tofacitinib, upadacitinib
- Moduladores de S1P: Ozanimod, etrasimod

---
## Explanation

### Key Characteristics

UC inflammation always starts in the rectum and extends proximally in a continuous pattern. It only affects the mucosa and submucosa. No skip lesions, no fistulas, no granulomas.

### Montreal Classification by Extent

E1: Proctitis (rectum only), E2: Left-sided (to splenic flexure), E3: Extensive/pancolitis (beyond splenic flexure).

### Treatment by Extent and Severity

Proctitis: topical mesalazine. Left-sided: oral + topical mesalazine. Pancolitis: high-dose oral + topical mesalazine. Severe: IV corticosteroids, rescue therapy (infliximab/cyclosporine), or colectomy. Maintenance: aminosalicylates, thiopurines, biologics, JAK inhibitors, or S1P modulators.`,
      keyTerms: [
        {
          term: 'aminosalicilatos (5-ASA) / aminosalicylates',
          definition:
            'Medicamentos antiinflamatorios (como la mesalazina) que actúan directamente en la pared del colon; tratamiento de primera línea para CU leve-moderada. | Anti-inflammatory medications (like mesalazine) that act directly on the colon wall; first-line treatment for mild-moderate UC.',
        },
        {
          term: 'proctitis / proctitis',
          definition:
            'Colitis ulcerosa que afecta solo al recto; la forma más limitada de la enfermedad. | Ulcerative colitis affecting only the rectum; the most limited form of the disease.',
        },
        {
          term: 'pancolitis / pancolitis',
          definition:
            'Colitis ulcerosa que se extiende más allá del ángulo esplénico; la forma más extensa. | Ulcerative colitis extending beyond the splenic flexure; the most extensive form.',
        },
        {
          term: 'megacolon tóxico / toxic megacolon',
          definition:
            'Dilatación aguda del colon (>6 cm) con toxicidad sistémica; complicación grave que puede requerir cirugía de emergencia. | Acute colonic dilation (>6 cm) with systemic toxicity; serious complication that may require emergency surgery.',
          pronunciation: 'MEH-gah-KOH-lon',
        },
        {
          term: 'tenesmo / tenesmus',
          definition:
            'Sensación de necesidad constante de evacuar, incluso cuando el recto está vacío. | Sensation of constant need to have a bowel movement, even when the rectum is empty.',
          pronunciation: 'teh-NEZ-moh',
        },
        {
          term: 'pseudopólipos / pseudopolyps',
          definition:
            'Islotes de mucosa regenerada entre áreas ulceradas que parecen pólipos; indican inflamación crónica previa. | Islands of regenerated mucosa between ulcerated areas that resemble polyps; indicate prior chronic inflammation.',
        },
      ],
      analogies: [
        'La inflamación en CU es como pintar una pared empezando desde abajo (recto) y subiendo. Siempre es continua; nunca hay saltos. En Crohn, es como si alguien salpicara pintura al azar en diferentes partes de la pared. | UC inflammation is like painting a wall starting from the bottom (rectum) and going up. It\'s always continuous; never with gaps. In Crohn\'s, it\'s like someone randomly splattering paint on different parts of the wall.',
        'Los abscesos de criptas son como pequeños volcanes dentro de las glándulas del colon que se llenan de células inmunes y pus. | Crypt abscesses are like tiny volcanoes inside the colon glands that fill up with immune cells and pus.',
      ],
      examples: [
        'Un paciente de 30 años con diarrea sanguinolenta de 4 semanas, urgencia rectal y tenesmo. La colonoscopia muestra inflamación continua desde el recto hasta el ángulo esplénico: colitis izquierda (E2). | A 30-year-old patient with 4 weeks of bloody diarrhea, rectal urgency, and tenesmus. Colonoscopy shows continuous inflammation from rectum to splenic flexure: left-sided colitis (E2).',
      ],
      patientCounselingPoints: [
        'Los aminosalicilatos tópicos (supositorios y enemas) son muy efectivos y tienen pocos efectos secundarios. No los dejes de usar aunque los síntomas mejoren. | Topical aminosalicylates (suppositories and enemas) are very effective with few side effects. Don\'t stop using them even when symptoms improve.',
        'Si tomas esteroides, NUNCA los dejes de golpe. Siempre se deben reducir gradualmente bajo supervisión médica. | If you take steroids, NEVER stop them suddenly. They must always be gradually reduced under medical supervision.',
      ],
    },

    // =====================================================================
    // LEVEL 3 - College / Universidad
    // =====================================================================
    3: {
      level: 3,
      summary:
        'La colitis ulcerosa involucra una respuesta inmune aberrante con predominio Th2 contra antígenos luminales en individuos genéticamente susceptibles. La estrategia terapéutica actual sigue el paradigma treat-to-target con objetivos de curación endoscópica e histológica. La colitis aguda severa requiere un algoritmo de rescate estructurado con decisión quirúrgica oportuna. | Ulcerative colitis involves an aberrant Th2-predominant immune response against luminal antigens in genetically susceptible individuals. Current therapeutic strategy follows the treat-to-target paradigm with endoscopic and histologic healing targets. Acute severe colitis requires a structured rescue algorithm with timely surgical decision-making.',
      explanation: `## Explicación

### Patogénesis Molecular

**Respuesta Inmune:**
- Predominio Th2 (a diferencia de Th1/Th17 en Crohn)
- Citocinas clave: IL-5, IL-13, IL-33, TNF-alfa
- IL-13 causa apoptosis de células epiteliales y disfunción de barrera
- Células NKT atípicas producen IL-13 en exceso
- Activación de vía JAK-STAT (diana de inhibidores de JAK)

**Genética:**
- HLA-DRB1*0103: Asociado con enfermedad severa y resistente
- Más de 200 loci de susceptibilidad compartidos con Crohn
- Genes de barrera epitelial: ECM1, HNF4A, CDH1
- Concordancia en gemelos monozigóticos: ~15% (menor que Crohn ~50%)

**Barrera Epitelial:**
- Defecto en la capa de moco (MUC2 disminuido)
- Aumento de permeabilidad de uniones estrechas
- Pérdida de células caliciformes
- Disbiosis: Reducción de Akkermansia muciniphila y productores de butirato

**Factores Ambientales:**
- Tabaquismo: Factor PROTECTOR (a diferencia de Crohn)
  - Ex-fumadores tienen mayor riesgo que nunca fumadores
  - Mecanismo: Nicotina modula producción de moco y respuesta inmune
- Apendicectomía: Factor protector (especialmente si realizada antes de los 20 años)
- Dieta occidental, estrés, infecciones como disparadores de brotes

### Evaluación de Actividad

**Índices Clínicos:**
- Mayo Score Parcial (no invasivo):
  - Frecuencia de deposiciones (0-3)
  - Sangrado rectal (0-3)
  - Evaluación global del médico (0-3)
  - Total: 0-9

**Índices Endoscópicos:**
- Mayo Endoscopic Subscore (MES):
  - 0: Normal o enfermedad inactiva
  - 1: Eritema leve, patrón vascular disminuido, friabilidad leve
  - 2: Eritema marcado, ausencia de patrón vascular, friabilidad, erosiones
  - 3: Sangrado espontáneo, ulceración
- UCEIS (Ulcerative Colitis Endoscopic Index of Severity):
  - Patrón vascular (0-2)
  - Sangrado (0-3)
  - Erosiones/úlceras (0-3)

**Índices Histológicos:**
- Nancy Index: 5 grados (0-4)
- Geboes Score: Evaluación detallada de la actividad histológica
- Robarts Histopathology Index (RHI)

### Manejo de la Colitis Aguda Severa (CAS)

**Criterios diagnósticos (Truelove y Witts severo):**
- ≥6 deposiciones sanguinolentas/día + al menos uno de:
  - Temperatura >37.8°C
  - FC >90 lpm
  - Hb <10.5 g/dL
  - VSG >30 mm/h

**Protocolo de manejo (Días 1-3):**
1. Hospitalización
2. Corticosteroides IV: Metilprednisolona 60 mg/día o hidrocortisona 100 mg IV c/6-8h
3. Tromboprofilaxis (HBPM): Alto riesgo tromboembólico en CAS
4. Excluir infección por C. difficile y CMV
5. Radiografía abdominal diaria: Vigilar megacolon tóxico
6. Evitar: Opioides, anticolinérgicos, antidiarreicos (riesgo de megacolon)
7. Nutrición: Dieta según tolerancia; NPO solo si megacolon o necesidad quirúrgica
8. Consulta quirúrgica temprana

**Evaluación al Día 3 (Criterios de Oxford/Travis):**
- Si >8 deposiciones/día O 3-8 deposiciones + PCR >45 mg/L:
  - Probabilidad de colectomía ~85%
  - Iniciar terapia de rescate O colectomía

**Terapia de Rescate:**
- Infliximab IV: Dosis estándar (5 mg/kg) o acelerada (3 dosis en primeras 24 horas en protocolos seleccionados)
- Ciclosporina IV: 2 mg/kg/día con monitoreo de niveles
- NO combinar ambos agentes de rescate (riesgo de inmunosupresión excesiva)

**Indicaciones de Colectomía Urgente:**
- Megacolon tóxico con deterioro
- Perforación
- Hemorragia masiva
- Fallo a terapia médica de rescate

### Curación Histológica como Objetivo Terapéutico

**Definición:**
- Ausencia de neutrófilos en el epitelio y lámina propia
- Resolución de distorsión de criptas
- Restauración de células caliciformes

**Importancia clínica:**
- Curación histológica reduce riesgo de recaída más que la curación endoscópica sola
- Menor riesgo de displasia/cáncer colorrectal
- Objetivo cada vez más incorporado en ensayos clínicos

---
## Explanation

### Molecular Pathogenesis

Th2-predominant immune response with key cytokines IL-5, IL-13, IL-33. IL-13 causes epithelial apoptosis and barrier dysfunction. Genetic susceptibility includes HLA-DRB1*0103 and epithelial barrier genes. Smoking is uniquely protective in UC.

### Acute Severe Colitis Management

Structured protocol: IV corticosteroids days 1-3, Oxford criteria assessment at day 3, rescue therapy (infliximab IV or cyclosporine IV) or colectomy. Daily abdominal X-ray to monitor for toxic megacolon. Early surgical consultation essential.

### Histologic Healing

Emerging therapeutic target beyond endoscopic healing. Absence of neutrophilic infiltration and restoration of crypt architecture. Associated with reduced relapse and dysplasia risk.`,
      keyTerms: [
        {
          term: 'criterios de Oxford/Travis',
          definition:
            'Criterios al día 3 de corticosteroides IV que predicen necesidad de colectomía: >8 deposiciones/día o 3-8 deposiciones + PCR >45 mg/L. | Day 3 IV corticosteroid criteria predicting colectomy need: >8 stools/day or 3-8 stools + CRP >45 mg/L.',
        },
        {
          term: 'Mayo Endoscopic Subscore (MES)',
          definition:
            'Escala de 0-3 que clasifica la severidad endoscópica de la colitis ulcerosa; MES 0-1 se considera curación mucosa. | 0-3 scale classifying endoscopic severity of ulcerative colitis; MES 0-1 is considered mucosal healing.',
        },
        {
          term: 'UCEIS',
          definition:
            'Ulcerative Colitis Endoscopic Index of Severity; índice validado que evalúa patrón vascular, sangrado y erosiones/úlceras. | Ulcerative Colitis Endoscopic Index of Severity; validated index assessing vascular pattern, bleeding, and erosions/ulcers.',
        },
        {
          term: 'colitis aguda severa (CAS) / acute severe colitis (ASC)',
          definition:
            'Emergencia gastroenterológica con ≥6 deposiciones sanguinolentas/día más signos sistémicos; requiere hospitalización y manejo agresivo. | Gastroenterological emergency with ≥6 bloody stools/day plus systemic signs; requires hospitalization and aggressive management.',
        },
        {
          term: 'curación histológica / histologic healing',
          definition:
            'Resolución de la inflamación microscópica; objetivo terapéutico emergente que se asocia con menores tasas de recaída. | Resolution of microscopic inflammation; emerging therapeutic target associated with lower relapse rates.',
        },
        {
          term: 'MUC2',
          definition:
            'Mucina principal de la capa protectora de moco del colon; su producción está reducida en la colitis ulcerosa, comprometiendo la barrera epitelial. | Main mucin of the protective colonic mucus layer; its production is reduced in ulcerative colitis, compromising the epithelial barrier.',
        },
      ],
      clinicalNotes:
        'La colitis aguda severa es una EMERGENCIA. El retraso en el tratamiento aumenta la mortalidad. Puntos clave: 1) Corticosteroides IV desde el ingreso, 2) Tromboprofilaxis SIEMPRE (la CAS es un estado protrombótico), 3) Excluir C. difficile y CMV, 4) Evaluación quirúrgica temprana, 5) Aplicar criterios de Oxford al día 3 para decidir rescate vs colectomía, 6) NO retrasar la colectomía si el paciente no responde al rescate. | Acute severe colitis is an EMERGENCY. Treatment delay increases mortality. Key points: 1) IV corticosteroids from admission, 2) Thromboprophylaxis ALWAYS (ASC is a prothrombotic state), 3) Exclude C. difficile and CMV, 4) Early surgical evaluation, 5) Apply Oxford criteria at day 3, 6) Do NOT delay colectomy if patient fails rescue therapy.',
    },

    // =====================================================================
    // LEVEL 4 - Graduate / Posgrado
    // =====================================================================
    4: {
      level: 4,
      summary:
        'El manejo avanzado de la colitis ulcerosa requiere selección óptima de terapia avanzada basada en fenotipo, velocidad de respuesta necesaria y perfil de seguridad. Las nuevas terapias (inhibidores de JAK, moduladores de S1P, anti-IL-23) amplían las opciones. La pouch ileoanal (IPAA) ofrece cura quirúrgica pero conlleva riesgo de pouchitis. El cáncer colorrectal asociado a CU requiere vigilancia con cromoendoscopia. | Advanced UC management requires optimal advanced therapy selection based on phenotype, required speed of response, and safety profile. New therapies (JAK inhibitors, S1P modulators, anti-IL-23) expand options. Ileal pouch-anal anastomosis (IPAA) offers surgical cure but carries pouchitis risk. UC-associated colorectal cancer requires chromoendoscopy surveillance.',
      explanation: `## Explicación

### Selección de Terapia Avanzada

**Factores que influyen en la selección:**

| Factor | Anti-TNF | Vedolizumab | Tofacitinib/Upadacitinib | Ozanimod/Etrasimod | Ustekinumab |
|--------|----------|-------------|--------------------------|---------------------|-------------|
| Velocidad de acción | Rápida | Intermedia | Rápida | Intermedia | Intermedia |
| Uso en CAS | Sí (rescate) | No | No bien estudiado | No | No |
| Enfermedad extraintestinal | Excelente | Pobre | Buena (articulaciones) | Limitada | Buena |
| Vía de administración | IV/SC | IV/SC | Oral | Oral | IV/SC |
| Riesgo infeccioso | Moderado | Bajo | Moderado | Bajo-Moderado | Bajo |
| Riesgo de malignidad | Bajo-Moderado | Bajo | En estudio (>65 años) | Bajo | Bajo |

**Posicionamiento terapéutico actual:**

- Primera línea biológica: Anti-TNF o vedolizumab (según fenotipo)
- Fallo a anti-TNF: Vedolizumab, tofacitinib/upadacitinib, o ustekinumab
- Necesidad de respuesta rápida: Anti-TNF o JAK inhibidor
- Preocupación por seguridad: Vedolizumab (selectivo intestinal)
- Manifestaciones extraintestinales: Anti-TNF o ustekinumab

### Inhibidores de JAK en CU

**Tofacitinib:**
- Inhibidor pan-JAK (JAK1/3 predominante)
- OCTAVE Induction: Remisión a semana 8: 18.5% vs 8.2% placebo
- OCTAVE Sustain: Remisión a semana 52: 34.3% (5mg) y 40.6% (10mg) vs 11.1% placebo
- Riesgos: Herpes zóster (especialmente >65 años), eventos tromboembólicos, infecciones

**Upadacitinib:**
- Inhibidor selectivo JAK1
- Mayor selectividad teórica → mejor perfil de seguridad
- Eficacia demostrada en pacientes bio-expuestos
- Aprobado para CU moderada-severa

### Moduladores del Receptor de Esfingosina-1-Fosfato (S1P)

**Ozanimod:**
- Modulador selectivo S1P1/S1P5
- Secuestra linfocitos en ganglios linfáticos
- TRUE NORTH: Remisión clínica a semana 10: 18.4% vs 6.0% placebo
- Mantenimiento a semana 52: 37.0% vs 18.5% placebo
- Requiere titulación por riesgo de bradicardia (evaluación cardíaca basal)
- Oral, una vez al día

**Etrasimod:**
- Modulador S1P1/S1P4/S1P5
- ELEVATE UC 52/12: Resultados positivos fase 3
- Aprobado por FDA 2023
- No requiere primera dosis monitorizada (a diferencia de fingolimod)

### Manejo Quirúrgico

**Proctocolectomía restauradora con IPAA (pouch ileoanal):**
- Procedimiento de elección para CU refractaria o con displasia
- Cirugía en 2-3 tiempos (con ileostomía temporal)
- Función: 4-8 deposiciones/día, generalmente sin incontinencia significativa

**Complicaciones del Pouch:**
- Pouchitis (hasta 50% de pacientes)
  - Aguda: Antibióticos (ciprofloxacino y/o metronidazol)
  - Crónica: Probióticos (VSL#3), inmunosupresores, biológicos
  - Refractaria: Descartar enfermedad de Crohn del pouch
- Cuffitis: Inflamación de la zona de transición anal
- Estenosis anastomótica
- Fístula del pouch
- Fallo del pouch (necesidad de ileostomía permanente): 5-10%

**Consideraciones especiales:**
- Descartar Crohn antes de realizar IPAA (riesgo de fallo si diagnóstico incorrecto)
- Evaluar función del esfínter anal (especialmente en mayores)
- Asesoramiento sobre fertilidad (la cirugía puede reducir fertilidad en mujeres)

### Vigilancia de Cáncer Colorrectal (CCR)

**Riesgo aumentado:**
- 2-5x mayor que población general
- Factores de riesgo: Duración >8-10 años, extensión (pancolitis), CEP concomitante, antecedente familiar, pseudopólipos, inflamación persistente

**Protocolo de vigilancia:**
- Iniciar 8 años después del diagnóstico de colitis extensa
- Cromoendoscopia con biopsias dirigidas (preferida) O
- Endoscopia de alta definición con biopsias aleatorias cada 10 cm
- Intervalo: Anual si alto riesgo (CEP, displasia previa), cada 2-3 años si bajo riesgo

**Manejo de displasia:**
- Lesión visible resecable: Resección endoscópica completa + vigilancia estrecha
- Displasia invisible o multifocal: Colectomía recomendada
- Displasia de alto grado: Colectomía recomendada

### Colangitis Esclerosante Primaria (CEP) y CU

- 75% de pacientes con CEP tienen CU
- CU asociada a CEP tiene fenotipo diferente: Más extensa pero menos sintomática
- Mayor riesgo de CCR (especialmente colon derecho)
- Mayor riesgo de colangiocarcinoma
- Ácido ursodesoxicólico: Posible efecto quimiopreventivo (controversial)
- Vigilancia anual con colonoscopia desde el diagnóstico de CEP

---
## Explanation

### Advanced Therapy Selection

Anti-TNF for rapid response and extraintestinal manifestations. Vedolizumab for safety-conscious approach. JAK inhibitors (tofacitinib, upadacitinib) for oral option with rapid onset. S1P modulators (ozanimod, etrasimod) as new oral options. Selection based on phenotype, prior exposures, speed requirements, and safety profile.

### Surgical Management

Restorative proctocolectomy with IPAA is curative. Pouchitis occurs in up to 50%. Rule out Crohn's before IPAA. Consider fertility implications.

### Colorectal Cancer Surveillance

Start 8 years after extensive colitis diagnosis. Chromoendoscopy preferred. Annual if high-risk (PSC, prior dysplasia). Colectomy for invisible/multifocal dysplasia or high-grade dysplasia.`,
      keyTerms: [
        {
          term: 'IPAA (Ileal Pouch-Anal Anastomosis)',
          definition:
            'Procedimiento quirúrgico curativo donde se crea un reservorio con el íleon (pouch en J) que se conecta al ano, eliminando el colon enfermo y preservando la continencia. | Curative surgical procedure where a reservoir is created from the ileum (J-pouch) connected to the anus, removing the diseased colon while preserving continence.',
        },
        {
          term: 'pouchitis / pouchitis',
          definition:
            'Inflamación del reservorio ileal después de IPAA; la complicación más frecuente del pouch. | Inflammation of the ileal reservoir after IPAA; the most common pouch complication.',
        },
        {
          term: 'moduladores de S1P / S1P modulators',
          definition:
            'Fármacos orales que secuestran linfocitos en los ganglios linfáticos al modular receptores de esfingosina-1-fosfato, reduciendo la migración de células inmunes al intestino. | Oral drugs that sequester lymphocytes in lymph nodes by modulating sphingosine-1-phosphate receptors, reducing immune cell migration to the gut.',
        },
        {
          term: 'cromoendoscopia / chromoendoscopy',
          definition:
            'Técnica endoscópica que usa tinciones (índigo carmín, azul de metileno) para mejorar la detección de lesiones displásicas planas en la vigilancia de CCR. | Endoscopic technique using dyes (indigo carmine, methylene blue) to enhance detection of flat dysplastic lesions in CRC surveillance.',
        },
        {
          term: 'colangitis esclerosante primaria (CEP) / primary sclerosing cholangitis (PSC)',
          definition:
            'Enfermedad hepática autoinmune asociada a CU (75%) con fibrosis progresiva de conductos biliares; aumenta riesgo de CCR y colangiocarcinoma. | Autoimmune liver disease associated with UC (75%) with progressive bile duct fibrosis; increases risk of CRC and cholangiocarcinoma.',
        },
        {
          term: 'criterios de Oxford al día 3',
          definition:
            'Regla de predicción que al día 3 de corticosteroides IV identifica pacientes con alta probabilidad de necesitar colectomía (>8 deposiciones/día O 3-8 + PCR >45). | Prediction rule that at day 3 of IV corticosteroids identifies patients with high probability of needing colectomy (>8 stools/day OR 3-8 + CRP >45).',
        },
      ],
      clinicalNotes:
        'Puntos clave de práctica avanzada:\n\n1. **Selección terapéutica:** No existe un biológico universalmente superior. La selección debe considerar fenotipo, necesidad de velocidad de respuesta, manifestaciones extraintestinales, perfil de seguridad y preferencia del paciente (oral vs inyectable).\n\n2. **JAK inhibidores:** Precaución en >65 años, pacientes con factores de riesgo cardiovascular o tromboembólico, y fumadores actuales. FDA requiere evaluación de riesgos antes de prescribir.\n\n3. **CAS y rescate:** Si los criterios de Oxford al día 3 son positivos, NO esperar más. Iniciar rescate inmediato. El retraso en la decisión quirúrgica aumenta la mortalidad.\n\n4. **IPAA:** SIEMPRE descartar enfermedad de Crohn antes de la cirugía. Revisar biopsias preoperatorias cuidadosamente. La enfermedad de Crohn del pouch tiene peor pronóstico.\n\n5. **CEP:** Vigilancia colonoscópica anual desde el diagnóstico, independientemente de la duración de la CU. Mayor riesgo de CCR en colon derecho. | Advanced practice key points: 1) No universally superior biologic; selection must consider phenotype, speed needs, extraintestinal manifestations, safety, and patient preference. 2) JAK inhibitors: caution in >65, CV/TE risk factors, current smokers. 3) ASC rescue: if Oxford criteria positive at day 3, do NOT wait further. 4) IPAA: ALWAYS rule out Crohn\'s before surgery. 5) PSC: annual colonoscopic surveillance from diagnosis.',
    },

    // =====================================================================
    // LEVEL 5 - MD/Professional
    // =====================================================================
    5: {
      level: 5,
      summary:
        'La colitis ulcerosa contemporánea se maneja con paradigmas de treat-to-target que integran curación endoscópica, histológica y transmural. Los algoritmos de rescate para CAS se basan en predictores validados. Las terapias emergentes (anti-IL-23, S1P, combinaciones) y los biomarcadores avanzados están transformando el manejo. La medicina de precisión busca la selección terapéutica individualizada. | Contemporary UC management uses treat-to-target paradigms integrating endoscopic, histologic, and transmural healing. ASC rescue algorithms rely on validated predictors. Emerging therapies (anti-IL-23, S1P, combinations) and advanced biomarkers are transforming management. Precision medicine aims for individualized therapeutic selection.',
      explanation: `## Explicación

### Ensayos Clínicos Fundamentales

**UC SUCCESS (Infliximab + Azatioprina):**
- Combo > IFX solo > AZA sola en CU moderada-severa
- Remisión libre de corticosteroides a semana 16: 39.7% combo vs 22.1% IFX vs 23.7% AZA
- Curación mucosa: 62.8% combo vs 54.6% IFX vs 36.8% AZA

**GEMINI 1 (Vedolizumab):**
- Respuesta a semana 6: 47.1% vs 25.5% placebo
- Remisión a semana 52: 41.8% (q8w) vs 15.9% placebo
- Perfil de seguridad favorable; eficacia selectiva intestinal

**UNIFI (Ustekinumab):**
- Remisión clínica a semana 8 (inducción IV): 15.6% vs 5.3% placebo
- Remisión a semana 44 (SC q8w): 38.4% vs 24.0% placebo
- Eficaz en pacientes bio-expuestos

**OCTAVE (Tofacitinib):**
- Primer JAK inhibidor aprobado para CU
- Remisión a semana 8: 18.5% vs 8.2% placebo
- Beneficio mantenido a semana 52
- Señal de seguridad: herpes zóster, eventos CV (estudio ORAL Surveillance en AR)

**TRUE NORTH (Ozanimod):**
- Modulador S1P oral
- Remisión clínica a semana 10: 18.4% vs 6.0%
- Remisión endoscópica a semana 52: 29.6% vs 14.1%

**ELEVATE UC (Etrasimod):**
- S1P modulador de segunda generación
- Remisión clínica a semana 12: 27% vs 15% placebo
- Mantenimiento a semana 52: 32.1% vs 6.7%

**LUCENT (Mirikizumab - anti-IL-23 p19):**
- Remisión clínica a semana 12: 24.2% vs 13.3% placebo
- Curación endoscópica a semana 52: 52.2% vs 25.6%
- Eficaz en bio-naïve y bio-exposed

### Algoritmo de Colitis Aguda Severa - Protocolos Actualizados

**Evaluación Inicial (horas 0-24):**
1. Confirmar diagnóstico de CAS (criterios de Truelove y Witts)
2. Coprocultivo + toxina C. difficile + CMV (biopsia si sospecha)
3. Radiografía abdominal basal
4. Laboratorio: HC, BMP, hepatograma, VSG, PCR, albúmina, lactato
5. Iniciar: Metilprednisolona 60 mg IV/día o hidrocortisona 100 mg IV q6-8h
6. Tromboprofilaxis: Enoxaparina 40 mg SC/día
7. Consulta quirúrgica temprana
8. Suspender opioides, anticolinérgicos, loperamida, NSAIDs

**Monitoreo Diario (Días 1-3):**
- Frecuencia de deposiciones y sangrado
- Signos vitales, exploración abdominal
- Radiografía abdominal (diámetro cecal >5.5 cm o transverso >6 cm = megacolon)
- PCR diaria

**Decisión al Día 3 - Algoritmo Oxford/ECCO:**
- Respuesta: Continuar IV → transición a oral → planificar terapia de mantenimiento
- No respuesta (Oxford positivo):
  - Opción A: Infliximab 5 mg/kg IV (puede repetir día 3 y semana 2)
  - Opción B: Ciclosporina 2 mg/kg/día IV (nivel diana 150-250 ng/mL)
  - Opción C: Colectomía subtotal

**Protocolo de Infliximab Acelerado:**
- Dosis 1: Día 0 (5 mg/kg)
- Dosis 2: Día 3 (si respuesta inadecuada)
- Dosis 3: Semana 2
- Evidencia: Serie de casos sugieren beneficio, pero sin RCT definitivo
- Racional: Pérdida fecal de proteínas reduce niveles séricos de IFX en CAS

**Predictores de Fallo a Terapia de Rescate:**
- Albúmina <20 g/L al ingreso
- PCR persistentemente elevada a día 3
- Dilatación colónica en radiografía
- Necesidad de transfusión
- Ausencia de mejoría en frecuencia de deposiciones a día 5-7

### Medicina de Precisión y Biomarcadores Emergentes

**Predicción de Respuesta a Anti-TNF:**
- TREM-1 soluble: Predictor de respuesta a infliximab
- Perfil de expresión génica mucosa: Firmas molecular asociadas con respuesta
- Oncostatin M: Elevado → probable fallo a anti-TNF
- Microbioma fecal: Composición bacteriana específica asociada con respuesta

**Biomarcadores de Curación:**
- Calprotectina fecal <150 mcg/g: Correlaciona con curación endoscópica
- Calprotectina <50 mcg/g: Se asocia con curación histológica
- Ultrasonido intestinal: Monitoreo no invasivo de engrosamiento mural
- Proteómica sérica: En investigación

**Curación Profunda (Deep Remission):**
- Combinación de: Remisión clínica + curación endoscópica + curación histológica + normalización de biomarcadores
- Asociada con los mejores resultados a largo plazo
- Objetivo cada vez más realista con terapias modernas

### Terapia Combinada y Secuencial

**Combinaciones de Biológicos:**
- Vedolizumab + anti-TNF: Mayor evidencia publicada
- Vedolizumab + ustekinumab: Series de casos favorables
- JAK inhibidor + biológico: Datos emergentes

**Estrategia de Ciclo de Biológicos (Biologic Cycling):**
- Cambio dentro de clase: IFX → adalimumab (eficacia moderada)
- Cambio de mecanismo: Más efectivo que cycling intra-clase
- Algoritmo basado en TDM: Nivel bajo sin ADA → optimizar dosis; nivel bajo con ADA → cambiar agente; nivel adecuado → cambiar mecanismo

### Fronteras de Investigación

**Terapias en desarrollo:**
- Anti-TL1A: Ensayos fase 3 prometedores (tulisokibart)
- Inhibidores de PDE4 (apremilast): Eficacia moderada
- Oligonucleótidos antisentido (alicaforsen): Tópico para pouchitis
- Trasplante de microbiota fecal: Estudios con resultados mixtos pero prometedores
- Terapia celular: Células Treg expandidas

**Inteligencia Artificial en CU:**
- Detección automatizada de actividad endoscópica (Mayo score por AI)
- Predicción de brotes mediante datos longitudinales
- Optimización de dosificación farmacológica
- Estratificación de riesgo de CCR

---
## Explanation

### Landmark Clinical Trials

UC SUCCESS established combo therapy. GEMINI 1 validated vedolizumab. OCTAVE established tofacitinib. TRUE NORTH/ELEVATE validated S1P modulators. LUCENT demonstrated mirikizumab efficacy. Each trial expanded the therapeutic armamentarium.

### Acute Severe Colitis Algorithm

Structured Day 0-3 protocol with Oxford criteria decision point. Accelerated infliximab dosing considered for fecal protein loss. Validated predictors guide colectomy timing.

### Precision Medicine

Soluble TREM-1, oncostatin M, mucosal gene expression, and microbiome profiling as predictive biomarkers. Deep remission (clinical + endoscopic + histologic + biomarker normalization) as ultimate target.

### Research Frontiers

Anti-TL1A (tulisokibart), FMT with promising results, AI-driven endoscopic scoring and flare prediction, expanded regulatory T-cell therapy.`,
      keyTerms: [
        {
          term: 'curación profunda (deep remission)',
          definition:
            'Combinación de remisión clínica, curación endoscópica, curación histológica y normalización de biomarcadores; el objetivo terapéutico más ambicioso en CU. | Combination of clinical remission, endoscopic healing, histologic healing, and biomarker normalization; the most ambitious therapeutic target in UC.',
        },
        {
          term: 'protocolo de infliximab acelerado / accelerated infliximab protocol',
          definition:
            'Dosificación intensificada de infliximab (3 dosis en 2 semanas) en CAS para compensar la pérdida fecal de proteínas y alcanzar niveles terapéuticos más rápido. | Intensified infliximab dosing (3 doses in 2 weeks) in ASC to compensate for fecal protein loss and achieve therapeutic levels faster.',
        },
        {
          term: 'anti-TL1A',
          definition:
            'Nueva clase terapéutica que bloquea la citocina TL1A (TNF-like ligand 1A), involucrada en la inflamación intestinal y fibrosis; tulisokibart es el agente más avanzado en desarrollo. | New therapeutic class blocking cytokine TL1A (TNF-like ligand 1A), involved in intestinal inflammation and fibrosis; tulisokibart is the most advanced agent in development.',
        },
        {
          term: 'TREM-1 soluble',
          definition:
            'Receptor desencadenante expresado en células mieloides; los niveles séricos elevados predicen respuesta favorable a infliximab en CU. | Triggering receptor expressed on myeloid cells; elevated serum levels predict favorable response to infliximab in UC.',
        },
        {
          term: 'mirikizumab',
          definition:
            'Anticuerpo monoclonal anti-IL-23 (subunidad p19) aprobado para CU; demuestra eficacia en inducción y mantenimiento incluyendo pacientes bio-expuestos. | Anti-IL-23 monoclonal antibody (p19 subunit) approved for UC; demonstrates efficacy in induction and maintenance including bio-exposed patients.',
        },
        {
          term: 'tulisokibart',
          definition:
            'Anticuerpo monoclonal anti-TL1A en fase 3 de desarrollo; representa un nuevo mecanismo de acción para EII con resultados prometedores en CU y posiblemente en fibrosis intestinal. | Anti-TL1A monoclonal antibody in phase 3 development; represents a new mechanism of action for IBD with promising results in UC and potentially in intestinal fibrosis.',
        },
      ],
      clinicalNotes:
        'Puntos de práctica clínica MD/especialista:\n\n1. **CAS:** Protocolo estructurado con decisiones al día 3. El infliximab acelerado puede ser superior al estándar en CAS (compensar pérdida fecal de proteínas). La ciclosporina es alternativa válida pero requiere experiencia en monitoreo de niveles. NO combinar IFX + ciclosporina.\n\n2. **Selección de terapia avanzada:** Considerar un enfoque basado en redes y meta-análisis para comparar eficacia. En CU bio-naïve, infliximab, vedolizumab y upadacitinib tienen las mayores tasas de remisión endoscópica. En bio-exposed, upadacitinib y los anti-IL-23 muestran superioridad.\n\n3. **Vigilancia CCR:** La cromoendoscopia con biopsias dirigidas es SUPERIOR a las biopsias aleatorias. En pacientes con CEP, la vigilancia debe ser anual desde el diagnóstico. La displasia invisible en CU es una indicación de colectomía.\n\n4. **Pouchitis crónica:** Descartar Crohn del pouch (hasta 10% de IPAA desarrollan patrón Crohn-like). Vedolizumab y anti-TNF tienen datos emergentes para pouchitis refractaria.\n\n5. **Biomarcadores:** Calprotectina <50 mcg/g como objetivo de curación histológica. Integrar ultrasonido intestinal en el monitoreo no invasivo. TDM proactiva para anti-TNF desde el inicio. | MD/Specialist practice points: 1) ASC structured protocol with day 3 decisions. Accelerated IFX may be superior (compensate fecal protein loss). 2) Network meta-analyses for therapy selection. In bio-naive: IFX, vedolizumab, upadacitinib top; in bio-exposed: upadacitinib, anti-IL-23 superior. 3) CRC surveillance: chromoendoscopy with targeted biopsies SUPERIOR. PSC patients: annual from diagnosis. 4) Chronic pouchitis: rule out Crohn\'s of pouch (10%). 5) Calprotectin <50 as histologic healing target. Proactive TDM from start.',
    },
  },

  media: [
    {
      id: 'uc-colon-inflammation-pattern',
      type: 'diagram',
      filename: 'uc-continuous-inflammation.svg',
      title: 'Patrón de Inflamación Continua en CU / Continuous Inflammation Pattern in UC',
      description: 'Distribución de la inflamación desde el recto hacia proximal en colitis ulcerosa',
    },
    {
      id: 'uc-vs-crohn-comparison',
      type: 'diagram',
      filename: 'uc-vs-crohn-table.svg',
      title: 'Comparación CU vs Crohn / UC vs Crohn\'s Comparison',
      description: 'Tabla comparativa de las principales diferencias entre colitis ulcerosa y enfermedad de Crohn',
    },
    {
      id: 'uc-endoscopic-findings',
      type: 'diagram',
      filename: 'uc-endoscopy-mayo.svg',
      title: 'Hallazgos Endoscópicos y Mayo Score / Endoscopic Findings and Mayo Score',
      description: 'Apariencia endoscópica de la CU según grado de actividad (Mayo 0-3)',
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
      title: 'ACG Clinical Guideline: Ulcerative Colitis in Adults',
      authors: ['Rubin, D.T.', 'Ananthakrishnan, A.N.', 'et al.'],
      source: 'American Journal of Gastroenterology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'ECCO Guidelines on Therapeutics in Ulcerative Colitis',
      authors: ['Raine, T.', 'Bonovas, S.', 'et al.'],
      source: 'Journal of Crohn\'s and Colitis',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'STRIDE-II: Selecting Therapeutic Targets in IBD',
      authors: ['Turner, D.', 'Ricciuto, A.', 'et al.'],
      source: 'Gastroenterology',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'condition-enfermedad-crohn', targetType: 'condition', relationship: 'sibling', label: 'Enfermedad de Crohn / Crohn\'s Disease' },
    { targetId: 'condition-enfermedad-hepatica', targetType: 'condition', relationship: 'related', label: 'Enfermedad Hepática / Liver Disease (CEP)' },
    { targetId: 'condition-gi-cancers', targetType: 'condition', relationship: 'related', label: 'Cáncer Colorrectal / Colorectal Cancer' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopia / Colonoscopy' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'inflammatory-bowel-disease', 'autoimmune', 'immunology'],
    keywords: [
      'colitis ulcerosa',
      'ulcerative colitis',
      'CU',
      'UC',
      'EII',
      'IBD',
      'diarrea sanguinolenta',
      'bloody diarrhea',
      'aminosalicilatos',
      'mesalazina',
      'infliximab',
      'vedolizumab',
      'tofacitinib',
      'ozanimod',
      'colectomía',
      'IPAA',
      'colitis aguda severa',
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

export default colitisUlcerosaUlcerativeColitis;
