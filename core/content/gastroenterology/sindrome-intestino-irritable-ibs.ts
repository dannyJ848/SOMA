/**
 * Síndrome del Intestino Irritable / Irritable Bowel Syndrome (IBS)
 * Comprehensive Bilingual Educational Content
 *
 * El SII es el trastorno funcional gastrointestinal más común, afectando al 10-15%
 * de la población mundial. Se caracteriza por dolor abdominal recurrente asociado
 * con cambios en el hábito intestinal sin patología orgánica identificable.
 *
 * IBS is the most common functional gastrointestinal disorder, affecting 10-15%
 * of the global population. It is characterized by recurrent abdominal pain
 * associated with changes in bowel habits without identifiable organic pathology.
 */

import { EducationalContent } from '../types';

export const sindromeIntestinoIrritableIbs: EducationalContent = {
  id: 'condition-sindrome-intestino-irritable',
  type: 'condition',
  name: 'Irritable Bowel Syndrome (IBS)',
  nameEs: 'Síndrome del Intestino Irritable (SII)',
  alternateNames: [
    'SII',
    'IBS',
    'Colon Irritable',
    'Colitis Nerviosa',
    'Colon Espástico',
    'Spastic Colon',
    'Nervous Colitis',
    'Functional Bowel Disorder',
  ],

  levels: {
    // =====================================================================
    // LEVEL 1 - 8th Grade / Octavo Grado
    // =====================================================================
    1: {
      level: 1,
      summary:
        'El síndrome del intestino irritable (SII o colon irritable) causa dolor de barriga, hinchazón y problemas para ir al baño (diarrea, estreñimiento o ambos). No daña los intestinos pero puede ser muy molesto. Se puede controlar con dieta, manejo del estrés y medicinas. | Irritable bowel syndrome (IBS or irritable colon) causes belly pain, bloating, and bathroom problems (diarrhea, constipation, or both). It does not damage the intestines but can be very bothersome. It can be managed with diet, stress management, and medicines.',
      explanation: `## Explicación

El síndrome del intestino irritable, o "colon irritable" como muchas personas lo conocen, es una condición muy común que afecta cómo funciona tu intestino. Es importante saber que NO es una enfermedad que dañe tus intestinos.

**¿Qué pasa en tu cuerpo?**

En las personas con SII, los intestinos son más sensibles de lo normal. Cosas que normalmente no causan dolor (como la comida moviéndose por el intestino o el gas) pueden causar mucho dolor. También los intestinos pueden moverse demasiado rápido (causando diarrea) o demasiado lento (causando estreñimiento).

**¿Cuáles son los síntomas?**

- Dolor de barriga o calambres (generalmente mejora después de ir al baño)
- Hinchazón de la barriga (sentirse como un globo)
- Diarrea (heces blandas o líquidas)
- Estreñimiento (dificultad para evacuar)
- Gases excesivos
- Moco en las heces
- Sensación de evacuación incompleta

**¿Qué lo puede empeorar?**

- Estrés y ansiedad
- Ciertos alimentos (cada persona es diferente)
- Comer demasiado rápido o comidas muy grandes
- Cambios hormonales (menstruación)
- No dormir bien
- Infecciones intestinales previas

**¿Qué puedes hacer para sentirte mejor?**

- Identificar y evitar los alimentos que te causan problemas
- Comer comidas más pequeñas y más frecuentes
- Beber suficiente agua
- Hacer ejercicio regularmente
- Manejar el estrés (respiración profunda, meditación, yoga)
- Dormir bien
- Hablar con tu doctor sobre medicinas que pueden ayudar

**Importante:**

- El SII NO causa cáncer ni daña los intestinos
- Muchas personas tienen SII: no estás solo/a
- Es una condición real, no imaginaria
- Se puede vivir bien con SII una vez que aprendes a manejarlo

---
## Explanation

Irritable bowel syndrome, or "irritable colon" as many people know it, is a very common condition that affects how your intestines work. It does NOT damage your intestines.

**What happens?** In IBS, the intestines are more sensitive than normal. Things that normally don't cause pain can cause a lot of discomfort. The intestines may move too fast (diarrhea) or too slow (constipation).

**Symptoms:** Belly pain/cramps (usually better after bathroom), bloating, diarrhea, constipation, excessive gas, mucus in stool.

**What makes it worse?** Stress, certain foods, eating too fast, hormonal changes, poor sleep, previous gut infections.

**What helps?** Identifying trigger foods, smaller meals, water, exercise, stress management, good sleep, medications.

**Important:** IBS does NOT cause cancer. It is a real condition. Many people have it. You can live well with it.`,
      keyTerms: [
        {
          term: 'síndrome del intestino irritable (SII) / irritable bowel syndrome (IBS)',
          definition:
            'Condición común que causa dolor de barriga, hinchazón y cambios en las evacuaciones sin dañar los intestinos. | Common condition causing belly pain, bloating, and changes in bowel movements without damaging the intestines.',
        },
        {
          term: 'estreñimiento / constipation',
          definition:
            'Dificultad para evacuar (ir al baño); las heces son duras y es difícil expulsarlas. | Difficulty having bowel movements; stools are hard and difficult to pass.',
        },
        {
          term: 'diarrea / diarrhea',
          definition:
            'Evacuaciones (heces) blandas o líquidas que ocurren con más frecuencia de lo normal. | Loose or watery bowel movements that happen more often than normal.',
        },
        {
          term: 'hinchazón abdominal / bloating',
          definition:
            'Sensación de que tu barriga está llena de aire o más grande de lo normal. | Feeling that your belly is full of air or bigger than normal.',
        },
        {
          term: 'estrés / stress',
          definition:
            'Tensión física o emocional que puede empeorar los síntomas del SII porque el cerebro y el intestino están conectados. | Physical or emotional tension that can worsen IBS symptoms because the brain and gut are connected.',
        },
      ],
      analogies: [
        'El intestino de una persona con SII es como una alarma de coche demasiado sensible: se activa con cosas que normalmente no deberían activarla (como un gato pasando cerca). El intestino envía señales de dolor cuando no debería. | The gut of a person with IBS is like an overly sensitive car alarm: it goes off for things that normally shouldn\'t trigger it (like a cat walking by). The gut sends pain signals when it shouldn\'t.',
        'La conexión cerebro-intestino en el SII es como un teléfono descompuesto: los mensajes entre tu cerebro y tu intestino se confunden, y el estrés en tu cabeza se convierte en dolor en tu barriga. | The brain-gut connection in IBS is like a broken telephone: messages between your brain and gut get mixed up, and stress in your head becomes pain in your belly.',
      ],
      examples: [
        'Una estudiante que siempre tiene dolor de barriga y diarrea antes de los exámenes importantes puede tener SII activado por el estrés. | A student who always gets belly pain and diarrhea before important exams may have stress-triggered IBS.',
        'Alguien que nota que siempre se hincha después de comer pan o leche puede tener SII que se activa con ciertos alimentos (aunque no tiene alergia real a esos alimentos). | Someone who notices they always bloat after eating bread or milk may have IBS triggered by certain foods (even though they don\'t have a real allergy to those foods).',
      ],
      patientCounselingPoints: [
        'El SII es una condición real y común. No es "todo en tu cabeza" aunque el estrés puede empeorarlo. | IBS is a real and common condition. It\'s not "all in your head" even though stress can make it worse.',
        'Llevar un diario de comidas y síntomas puede ayudarte a identificar qué alimentos te causan problemas. | Keeping a food and symptom diary can help you identify which foods cause you problems.',
        'El ejercicio regular (caminar, nadar, bicicleta) puede mejorar mucho los síntomas del SII. | Regular exercise (walking, swimming, biking) can greatly improve IBS symptoms.',
        'Si los síntomas empeoran mucho, pierdes peso, ves sangre en las heces o tienes fiebre, ve al doctor. Estos síntomas NO son del SII y necesitan evaluación. | If symptoms worsen a lot, you lose weight, see blood in stool, or have fever, see your doctor. These symptoms are NOT from IBS and need evaluation.',
      ],
    },

    // =====================================================================
    // LEVEL 2 - High School / Preparatoria
    // =====================================================================
    2: {
      level: 2,
      summary:
        'El SII es un trastorno funcional gastrointestinal diagnosticado por los criterios de Roma IV. Se clasifica en subtipos según el patrón de heces (SII-D diarrea, SII-E estreñimiento, SII-M mixto). La fisiopatología involucra hipersensibilidad visceral, dismotilidad y alteración del eje cerebro-intestino. El tratamiento incluye dieta baja en FODMAPs, antiespasmódicos y terapias dirigidas al subtipo. | IBS is a functional gastrointestinal disorder diagnosed by Rome IV criteria. It is classified into subtypes by stool pattern (IBS-D diarrhea, IBS-C constipation, IBS-M mixed). Pathophysiology involves visceral hypersensitivity, dysmotility, and brain-gut axis alteration. Treatment includes low-FODMAP diet, antispasmodics, and subtype-directed therapies.',
      explanation: `## Explicación

### ¿Qué es un Trastorno Funcional?

Un trastorno funcional significa que hay síntomas reales pero no se encuentra daño visible en los órganos. En el SII, los intestinos se ven normales en estudios (endoscopia, biopsias) pero funcionan de manera anormal.

### Criterios de Roma IV (Diagnóstico)

Dolor abdominal recurrente, en promedio al menos 1 día/semana en los últimos 3 meses, asociado con 2 o más de los siguientes:
1. Relacionado con la defecación (mejora o empeora al evacuar)
2. Asociado con cambio en la frecuencia de deposiciones
3. Asociado con cambio en la forma/consistencia de deposiciones

Los síntomas deben haber comenzado al menos 6 meses antes del diagnóstico.

### Subtipos de SII

**Escala de Bristol (forma de las heces):**
- Tipo 1-2: Duras (estreñimiento)
- Tipo 3-4: Normales
- Tipo 5-7: Blandas/líquidas (diarrea)

**Clasificación:**
- **SII-D (Diarrea predominante):** >25% de deposiciones tipo 6-7, <25% tipo 1-2
- **SII-E o SII-C (Estreñimiento predominante):** >25% de deposiciones tipo 1-2, <25% tipo 6-7
- **SII-M (Mixto):** >25% tipo 1-2 Y >25% tipo 6-7
- **SII-U (No clasificado):** No cumple criterios para D, C o M

### Fisiopatología

**1. Hipersensibilidad Visceral:**
- Los nervios del intestino son más sensibles de lo normal
- Perciben la distensión normal como dolor
- Umbral de dolor disminuido a la distensión rectal con balón

**2. Dismotilidad:**
- Contracciones intestinales anormales (demasiado rápidas o lentas)
- En SII-D: Tránsito acelerado
- En SII-C: Tránsito lento
- Contracciones de alta amplitud asociadas con dolor

**3. Eje Cerebro-Intestino:**
- Comunicación bidireccional entre el sistema nervioso central y el entérico
- El estrés amplifica las señales de dolor intestinal
- Alteraciones en el procesamiento central del dolor
- Neurotransmisores clave: Serotonina (5-HT), GABA

**4. Otros factores:**
- SII post-infeccioso: Después de gastroenteritis aguda (~10% desarrollan SII)
- Microbioma alterado (disbiosis)
- Aumento de permeabilidad intestinal
- Activación inmune de bajo grado en la mucosa
- Factores psicológicos: Ansiedad, depresión, estrés crónico

### Diagnóstico

**Basado en síntomas (Roma IV) + exclusión de señales de alarma:**

**Señales de alarma (descartan SII):**
- Inicio después de los 50 años
- Pérdida de peso involuntaria
- Sangrado rectal
- Anemia
- Antecedente familiar de CCR, EII o enfermedad celíaca
- Síntomas nocturnos que despiertan al paciente
- Masa abdominal palpable

**Estudios mínimos:**
- Hemograma completo
- PCR o calprotectina fecal (para descartar EII)
- Serología para enfermedad celíaca (anti-tTG IgA)
- Hormona tiroidea si diarrea predominante

### Tratamiento

**Dieta:**
- Dieta baja en FODMAPs (bajo supervisión de nutricionista)
  - FODMAPs: Fermentable Oligosaccharides, Disaccharides, Monosaccharides And Polyols
  - Fases: Eliminación (2-6 semanas) → Reintroducción → Personalización
- Fibra soluble (psyllium): Beneficio en SII-C
- Evitar disparadores individuales identificados

**Medicamentos por subtipo:**

Para SII-D:
- Loperamida: Controla diarrea (no mejora dolor)
- Eluxadolina: Agonista mu-opioide/antagonista delta
- Rifaximina: Antibiótico no absorbible (ciclos de 14 días)
- Alosetron: Antagonista 5-HT3 (mujeres con SII-D severo)

Para SII-C:
- Fibra soluble (psyllium)
- Linaclotida: Agonista de guanilato ciclasa C
- Plecanatida: Similar a linaclotida
- Lubiprostona: Activador de canales de cloruro
- Tegaserod: Agonista 5-HT4 (mujeres <65 años sin riesgo CV)

Para dolor:
- Antiespasmódicos (hioscina, diciclomina, mebeverina)
- Aceite de menta (enteric-coated peppermint oil)
- Antidepresivos tricíclicos en dosis bajas (amitriptilina 10-25 mg)
- ISRS para comorbilidad ansiosa/depresiva

**Terapias complementarias:**
- Terapia cognitivo-conductual (TCC)
- Hipnoterapia dirigida al intestino
- Yoga, meditación mindfulness
- Ejercicio regular

---
## Explanation

### What is a Functional Disorder?
Real symptoms but no visible organ damage. IBS intestines look normal on studies but function abnormally.

### Rome IV Criteria
Recurrent abdominal pain ≥1 day/week for 3 months, associated with defecation, change in stool frequency, or change in stool form. Symptoms onset ≥6 months before diagnosis.

### IBS Subtypes
IBS-D (diarrhea), IBS-C (constipation), IBS-M (mixed), IBS-U (unclassified) based on Bristol stool scale.

### Pathophysiology
Visceral hypersensitivity, dysmotility, brain-gut axis alteration, post-infectious triggers, dysbiosis, psychological factors.

### Treatment
Low-FODMAP diet, subtype-specific medications, antispasmodics, low-dose tricyclics, CBT, gut-directed hypnotherapy.`,
      keyTerms: [
        {
          term: 'criterios de Roma IV / Rome IV criteria',
          definition:
            'Criterios diagnósticos internacionales para el SII basados en síntomas: dolor abdominal recurrente asociado con defecación y cambios en el hábito intestinal. | International diagnostic criteria for IBS based on symptoms: recurrent abdominal pain associated with defecation and changes in bowel habits.',
        },
        {
          term: 'hipersensibilidad visceral / visceral hypersensitivity',
          definition:
            'Percepción aumentada de sensaciones intestinales normales como dolor; mecanismo central en la fisiopatología del SII. | Increased perception of normal intestinal sensations as pain; central mechanism in IBS pathophysiology.',
        },
        {
          term: 'FODMAPs',
          definition:
            'Oligosacáridos, Disacáridos, Monosacáridos y Polioles Fermentables; carbohidratos de cadena corta mal absorbidos que pueden empeorar síntomas del SII. | Fermentable Oligosaccharides, Disaccharides, Monosaccharides And Polyols; poorly absorbed short-chain carbohydrates that can worsen IBS symptoms.',
        },
        {
          term: 'eje cerebro-intestino / brain-gut axis',
          definition:
            'Sistema de comunicación bidireccional entre el sistema nervioso central y el sistema nervioso entérico; fundamental en la fisiopatología del SII. | Bidirectional communication system between the central and enteric nervous systems; fundamental in IBS pathophysiology.',
        },
        {
          term: 'escala de Bristol / Bristol stool scale',
          definition:
            'Clasificación de la forma de las heces del tipo 1 (más duras) al 7 (más líquidas); se usa para clasificar el subtipo de SII. | Classification of stool form from type 1 (hardest) to 7 (most liquid); used to classify IBS subtype.',
        },
        {
          term: 'SII post-infeccioso / post-infectious IBS',
          definition:
            'SII que se desarrolla después de una gastroenteritis aguda; ocurre en aproximadamente 10% de los pacientes. | IBS that develops after acute gastroenteritis; occurs in approximately 10% of patients.',
        },
      ],
      analogies: [
        'La hipersensibilidad visceral es como tener el volumen del dolor subido al máximo. Lo que normalmente se sentiría como una leve incomodidad (gas, comida moviéndose) se percibe como dolor intenso. | Visceral hypersensitivity is like having the pain volume turned up to maximum. What would normally feel like mild discomfort (gas, food moving) is perceived as intense pain.',
        'La dieta baja en FODMAPs funciona como un detective: primero eliminas todos los sospechosos (fase de eliminación) y luego los reintroduces uno por uno para descubrir al culpable. | The low-FODMAP diet works like a detective: first you eliminate all suspects (elimination phase) and then reintroduce them one by one to find the culprit.',
      ],
      examples: [
        'Una mujer de 28 años con dolor abdominal que mejora al evacuar, alternancia entre diarrea y estreñimiento, y empeoramiento con el estrés. Los laboratorios y la calprotectina son normales. Esto es SII-M (mixto). | A 28-year-old woman with abdominal pain that improves with bowel movements, alternation between diarrhea and constipation, and worsening with stress. Labs and calprotectin are normal. This is IBS-M (mixed).',
      ],
      patientCounselingPoints: [
        'La dieta baja en FODMAPs debe hacerse con guía profesional (nutricionista). No es para siempre; solo la fase de eliminación es estricta (2-6 semanas), luego se reintroducen alimentos gradualmente. | The low-FODMAP diet should be done with professional guidance (nutritionist). It\'s not forever; only the elimination phase is strict (2-6 weeks), then foods are gradually reintroduced.',
        'Los antidepresivos en dosis bajas para el SII NO significan que tu problema sea psicológico. Estos medicamentos actúan en los nervios del intestino para reducir el dolor. | Low-dose antidepressants for IBS do NOT mean your problem is psychological. These medications act on gut nerves to reduce pain.',
      ],
    },

    // =====================================================================
    // LEVEL 3 - College / Universidad
    // =====================================================================
    3: {
      level: 3,
      summary:
        'El SII es un trastorno de la interacción cerebro-intestino (DGBI) con fisiopatología multifactorial que incluye hipersensibilidad visceral, dismotilidad, activación inmune mucosa, disbiosis, aumento de permeabilidad intestinal y alteraciones en el procesamiento central del dolor. El diagnóstico es clínico (Roma IV) con estudios limitados para señales de alarma. El manejo integra dieta baja en FODMAPs, neuromoduladores, terapias dirigidas al subtipo y terapias psicológicas basadas en evidencia. | IBS is a disorder of gut-brain interaction (DGBI) with multifactorial pathophysiology including visceral hypersensitivity, dysmotility, mucosal immune activation, dysbiosis, increased intestinal permeability, and altered central pain processing. Diagnosis is clinical (Rome IV) with limited testing for alarm features. Management integrates low-FODMAP diet, neuromodulators, subtype-directed therapies, and evidence-based psychological therapies.',
      explanation: `## Explicación

### Fisiopatología Avanzada

**1. Hipersensibilidad Visceral y Procesamiento Central:**
- Distensión rectal con balón: Umbral de dolor reducido en 60% de pacientes con SII
- Hiperalgesia visceral: Respuesta exagerada a estímulos intestinales normales
- Alodinia visceral: Percepción de estímulos no dolorosos como dolor
- Neuroimagen funcional (fMRI):
  - Activación aumentada de corteza cingulada anterior, ínsula, corteza prefrontal
  - Deficiente modulación descendente del dolor
  - Similitudes con procesamiento de dolor en fibromialgia

**2. Serotonina (5-HT) y el Intestino:**
- 95% de la serotonina corporal está en el tracto GI
- Células enterocromafines liberan 5-HT en respuesta a estímulos luminales
- 5-HT3: Modula dolor visceral y motilidad (antagonistas para SII-D)
- 5-HT4: Estimula peristaltismo (agonistas para SII-C)
- SERT (transportador de recaptación de 5-HT): Polimorfismos asociados con SII

**3. Microbioma y SII:**
- Disbiosis: Alteración en composición y diversidad bacteriana
- Reducción de Lactobacillus y Bifidobacterium
- Aumento de Firmicutes/Bacteroidetes ratio en algunos estudios
- Producción alterada de ácidos grasos de cadena corta (AGCC)
- SIBO (sobrecrecimiento bacteriano del intestino delgado): Solapamiento con SII
  - Controversia sobre la relación causal vs comorbilidad
  - Test de aliento con lactulosa o glucosa

**4. Permeabilidad Intestinal y Activación Inmune:**
- "Leaky gut": Aumento de permeabilidad paracelular
- Mastocitos activados en mucosa (especialmente cerca de nervios)
- Liberación de mediadores: Histamina, triptasa, prostaglandinas
- Activación inmune de bajo grado (linfocitos intraepiteliales aumentados)
- SII post-infeccioso: Inflamación residual tras gastroenteritis

**5. Eje Microbioma-Cerebro-Intestino:**
- El microbioma produce neurotransmisores (GABA, serotonina precursores)
- Señalización vagal aferente
- Modulación del eje HPA (hipotálamo-pituitaria-adrenal)
- Estrés altera composición del microbioma
- Ansiedad/depresión como factores moduladores (no causales)

### Diagnóstico: Estrategia de Investigación Limitada

**Enfoque positivo:**
- Diagnosticar SII POR criterios (Roma IV), no por exclusión
- Minimizar estudios innecesarios que refuerzan ansiedad del paciente

**Estudios recomendados por subtipo:**

**Todos los subtipos:**
- Hemograma completo
- PCR o VSG
- Serología celíaca (anti-tTG IgA + IgA total)

**SII-D adicional:**
- Calprotectina fecal (descartar EII)
- Hormona tiroidea
- Considerar: Ácidos biliares en heces (malabsorción de ácidos biliares)
- SeHCAT test o C4 sérico si disponible

**SII-C adicional:**
- Considerar tránsito colónico si refractario
- Manometría anorrectal si sospecha de disinergia defecatoria

**Edad >45-50 o señales de alarma:**
- Colonoscopia

### Tratamiento Basado en Evidencia

**Dieta Baja en FODMAPs:**
- Eficacia: Mejora síntomas globales en 50-80% de pacientes
- Mecanismo: Reduce fermentación colónica, distensión luminal y producción de gas
- Protocolo de 3 fases: Eliminación → Reintroducción → Personalización
- Requiere guía de nutricionista entrenado
- Preocupación: Impacto en microbioma con restricción prolongada (reducción de Bifidobacterium)

**Neuromoduladores (antidepresivos en dosis bajas):**

*Antidepresivos tricíclicos (ATC):*
- Amitriptilina, nortriptilina, desipramina
- Dosis: 10-50 mg/noche (mucho menor que para depresión)
- Mecanismo: Modulación del dolor visceral, enlentecimiento del tránsito
- ATLANTIS Trial: Amitriptilina 10-30 mg superior a placebo en SII en atención primaria
- Mejor para SII-D (efecto constipante)
- NNT: 4.5 (efecto significativo)

*ISRS (Inhibidores selectivos de recaptación de serotonina):*
- Fluoxetina, citalopram, paroxetina
- Menos evidencia directa para dolor en SII
- Útiles cuando hay comorbilidad ansiosa/depresiva significativa
- Pueden acelerar tránsito (útil en SII-C)

*IRSN (Inhibidores de recaptación de serotonina y noradrenalina):*
- Duloxetina, venlafaxina
- Evidencia emergente para dolor visceral
- Útiles en SII con dolor predominante o superposición con fibromialgia

**Terapias Dirigidas al Subtipo - Evidencia:**

*Rifaximina (SII-D):*
- TARGET 1/2 Trials: Mejora global de síntomas
- Dosis: 550 mg 3 veces/día × 14 días
- Re-tratamiento efectivo si recurrencia
- Mecanismo: Modulación del microbioma, reducción de inflamación mucosa
- No absorbible → perfil de seguridad favorable

*Linaclotida (SII-C):*
- Agonista GC-C → aumenta secreción de cloruro y agua luminal
- También reduce dolor visceral (mecanismo extracelular de cGMP)
- Dosis: 290 mcg/día (SII-C) o 72 mcg (estreñimiento crónico)
- Tomar 30 min antes del desayuno en ayunas
- NNT: ~6

*Eluxadolina (SII-D):*
- Agonista mu-opioide / antagonista delta-opioide
- Reduce diarrea y dolor
- Contraindicado: Sin vesícula biliar (riesgo de pancreatitis), alcohol >3 bebidas/día

**Terapias Psicológicas Basadas en Evidencia:**
- Terapia cognitivo-conductual (TCC): NNT ~4
- Hipnoterapia dirigida al intestino: Eficacia sostenida a 5+ años
- Terapia de aceptación y compromiso (ACT)
- Mindfulness-based stress reduction

---
## Explanation

### Advanced Pathophysiology
Visceral hypersensitivity (reduced pain threshold on rectal balloon distension), serotonin dysregulation (95% of body 5-HT in GI tract), microbiome alterations (dysbiosis, SIBO overlap), increased intestinal permeability with low-grade mucosal immune activation, and microbiome-brain-gut axis dysfunction.

### Diagnostic Strategy
Positive diagnosis by Rome IV criteria (not diagnosis of exclusion). Limited testing for alarm features. Specific tests by subtype: celiac serology for all, calprotectin for IBS-D, bile acid testing if available.

### Evidence-Based Treatment
Low-FODMAP diet (50-80% improvement). Neuromodulators: TCAs (ATLANTIS trial: amitriptyline NNT 4.5). Subtype-directed: rifaximin for IBS-D, linaclotide for IBS-C. Psychological therapies: CBT (NNT ~4), gut-directed hypnotherapy.`,
      keyTerms: [
        {
          term: 'trastorno de la interacción cerebro-intestino (DGBI)',
          definition:
            'Nueva terminología (Roma IV) para trastornos funcionales GI; enfatiza la naturaleza bidireccional de la disfunción cerebro-intestino en lugar de llamarlos "funcionales". | New terminology (Rome IV) for functional GI disorders; emphasizes the bidirectional nature of brain-gut dysfunction rather than calling them "functional".',
        },
        {
          term: 'SIBO / SIBO',
          definition:
            'Sobrecrecimiento bacteriano del intestino delgado; condición con solapamiento significativo con SII; diagnóstico por test de aliento. | Small intestinal bacterial overgrowth; condition with significant overlap with IBS; diagnosed by breath test.',
        },
        {
          term: 'linaclotida / linaclotide',
          definition:
            'Agonista de guanilato ciclasa C que aumenta la secreción intestinal y reduce el dolor visceral; tratamiento para SII-C. | Guanylate cyclase C agonist that increases intestinal secretion and reduces visceral pain; treatment for IBS-C.',
        },
        {
          term: 'rifaximina / rifaximin',
          definition:
            'Antibiótico no absorbible que modula el microbioma intestinal; aprobado para SII-D con mejoría de dolor e hinchazón. | Non-absorbable antibiotic that modulates intestinal microbiome; approved for IBS-D with improvement of pain and bloating.',
        },
        {
          term: 'ATLANTIS Trial',
          definition:
            'Ensayo clínico que demostró eficacia de amitriptilina en dosis bajas (10-30 mg) para SII en atención primaria con NNT de 4.5. | Clinical trial demonstrating efficacy of low-dose amitriptyline (10-30 mg) for IBS in primary care with NNT of 4.5.',
        },
        {
          term: 'hipnoterapia dirigida al intestino / gut-directed hypnotherapy',
          definition:
            'Terapia psicológica con eficacia demostrada en SII; usa hipnosis para modular la sensibilidad visceral y la respuesta al dolor. | Psychological therapy with demonstrated efficacy in IBS; uses hypnosis to modulate visceral sensitivity and pain response.',
        },
      ],
      clinicalNotes:
        'El SII debe diagnosticarse POSITIVAMENTE por Roma IV, no por exclusión. Estudios excesivos pueden reforzar el comportamiento de enfermedad y empeorar los resultados. Los neuromoduladores (ATC en dosis bajas) son subutilizados; el ATLANTIS Trial valida amitriptilina en atención primaria. La calprotectina fecal <50 mcg/g tiene VPN >95% para descartar EII. La malabsorción de ácidos biliares es una causa tratable de diarrea que se confunde con SII-D en hasta 25-30% de los casos. | IBS should be POSITIVELY diagnosed by Rome IV, not by exclusion. Excessive testing can reinforce illness behavior and worsen outcomes. Neuromodulators (low-dose TCAs) are underutilized; ATLANTIS Trial validates amitriptyline in primary care. Fecal calprotectin <50 has >95% NPV for excluding IBD. Bile acid malabsorption is a treatable cause of diarrhea confused with IBS-D in up to 25-30% of cases.',
    },

    // =====================================================================
    // LEVEL 4 - Graduate / Posgrado
    // =====================================================================
    4: {
      level: 4,
      summary:
        'El manejo avanzado del SII requiere comprensión de la neurociencia del dolor visceral, farmacología de los neuromoduladores, identificación de fenotipos tratables dentro del espectro SII (malabsorción de ácidos biliares, SIBO, disinergia), y desarrollo de alianza terapéutica efectiva. Las nuevas terapias incluyen moduladores de ácidos biliares, tenapanor, y terapias dirigidas al microbioma. | Advanced IBS management requires understanding visceral pain neuroscience, neuromodulator pharmacology, identification of treatable phenotypes within the IBS spectrum (bile acid malabsorption, SIBO, dyssynergia), and effective therapeutic alliance development. New therapies include bile acid modulators, tenapanor, and microbiome-directed therapies.',
      explanation: `## Explicación

### Neurociencia del Dolor Visceral en SII

**Sensibilización Periférica:**
- Activación de nociceptores viscerales (fibras C aferentes)
- Mediadores de mastocitos cercanos a nervios: histamina, triptasa, NGF, prostaglandinas
- TRPV1 y receptores de capsaicina sobreexpresados en mucosa
- Canales de sodio Nav1.5 con variantes funcionales en SII

**Sensibilización Central:**
- Wind-up espinal: Amplificación de señales aferentes
- Facilitación descendente aumentada
- Reducción de inhibición descendente (DNIC deficiente)
- Procesamiento cortical alterado: fMRI muestra hiperactivación en ínsula, ACC, PFC
- Facilitación nociplástica: Nuevo concepto de dolor sin nocicepción clara

**Factores Psicosociales:**
- Modelo biopsicosocial: Factores biológicos, psicológicos y sociales interactúan
- Eventos adversos en la infancia (ACEs) aumentan riesgo de SII
- Catastrofización del dolor amplifica la experiencia dolorosa
- Hipervigilancia visceral
- Comorbilidad psiquiátrica: Ansiedad (40-60%), depresión (30-40%)

### Fenotipos Tratables Dentro del Espectro SII

**1. Malabsorción de Ácidos Biliares (MAB):**
- Prevalencia en SII-D: 25-30%
- Fisiopatología: Exceso de ácidos biliares en colon → secreción de agua y electrolitos
- Diagnóstico:
  - SeHCAT test (estándar de oro, no disponible en USA)
  - C4 sérico (7-alfa-hidroxi-4-colesten-3-ona): Elevado en MAB
  - FGF19 sérico: Bajo en MAB
  - Ensayo terapéutico con colestiramina
- Tratamiento: Secuestrantes de ácidos biliares (colestiramina, colestipol, colesevelam)
- Respuesta: 70-80% si MAB confirmada

**2. SIBO (Sobrecrecimiento Bacteriano):**
- Solapamiento significativo con SII-D e hinchazón
- Diagnóstico: Test de aliento con glucosa (más específico) o lactulosa (más sensible)
- Tratamiento: Rifaximina 550 mg TID × 14 días
- Recurrencia: Común; considerar causas estructurales/funcionales subyacentes
- Dietas elementales como alternativa

**3. Disinergia del Piso Pélvico:**
- Solapamiento con SII-C
- Contracción paradójica del puborrectal durante defecación
- Diagnóstico: Manometría anorrectal + test de expulsión del balón
- Tratamiento: Biofeedback anorrectal (eficacia >70%)

**4. Intolerancia a Carbohidratos Específicos:**
- Malabsorción de fructosa
- Malabsorción de lactosa
- Diagnóstico: Test de aliento de hidrógeno específico
- Tratamiento: Restricción dietética dirigida

### Farmacología Avanzada de Neuromoduladores

**Escalera de Neuromodulación:**

*Nivel 1 - Primera línea:*
- ATC dosis bajas (amitriptilina 10-30 mg) para SII-D/dolor predominante
- ISRS (fluoxetina 20 mg, citalopram 20 mg) para SII-C/comorbilidad afectiva

*Nivel 2 - Segunda línea:*
- IRSN (duloxetina 30-60 mg) para dolor visceral refractario
- Mirtazapina (15-30 mg) para náusea, pérdida de apetito, SII-D
- Combinación ATC + ISRS (con precaución)

*Nivel 3 - Tercera línea:*
- Pregabalina/gabapentina para dolor visceral refractario
- Combinaciones de neuromoduladores
- Consulta con psicogastroenterólogo

**Principios de prescripción:**
- "Start low, go slow": Iniciar con dosis mínima
- Efecto terapéutico: 4-6 semanas para evaluar
- Titulación gradual
- Explicar al paciente: "Esto actúa en los nervios del intestino, no es para depresión"
- Duración: Mínimo 6-12 meses una vez efectivo

### Terapias Emergentes

**Tenapanor (SII-C):**
- Inhibidor del intercambiador NHE3
- Reduce absorción de sodio y agua en el intestino
- Eficacia en dolor y estreñimiento
- Aprobado por FDA para SII-C

**Moduladores de Ácidos Biliares:**
- Odevixibat (inhibidor IBAT): En estudio para SII-C
- Tropifexor (agonista FXR): Modula pool de ácidos biliares

**Terapias Dirigidas al Microbioma:**
- Trasplante de microbiota fecal (TMF): Resultados mixtos pero algunos estudios positivos
- Probióticos específicos: Bifidobacterium infantis 35624 (mejor evidencia)
- Postbióticos y prebióticos personalizados
- SER-109 y consorcios definidos: En desarrollo

**Anticuerpos anti-CdtB y anti-vinculina:**
- Biomarcadores de SII post-infeccioso
- ibs-smart test: Distingue SII-D de EII con especificidad moderada
- Implicaciones terapéuticas en investigación

---
## Explanation

### Visceral Pain Neuroscience
Peripheral sensitization (mast cell mediators near nerves, TRPV1 overexpression), central sensitization (spinal wind-up, impaired descending inhibition), and nociplastic pain facilitation. Biopsychosocial model integrating biological, psychological, and social factors.

### Treatable Phenotypes
Bile acid malabsorption (25-30% of IBS-D, responds to sequestrants), SIBO (rifaximin), pelvic floor dyssynergia (biofeedback), specific carbohydrate intolerance (directed restriction).

### Neuromodulator Pharmacology
Escalation ladder: TCAs first-line for IBS-D/pain, SSRIs for IBS-C/affective comorbidity, SNRIs/mirtazapine second-line, pregabalin/gabapentin third-line. "Start low, go slow" principle.

### Emerging Therapies
Tenapanor (NHE3 inhibitor for IBS-C), bile acid modulators, microbiome-directed therapies (FMT, specific probiotics, defined consortia), anti-CdtB/anti-vinculin biomarkers.`,
      keyTerms: [
        {
          term: 'malabsorción de ácidos biliares (MAB) / bile acid malabsorption (BAM)',
          definition:
            'Causa tratable de diarrea presente en 25-30% de pacientes con SII-D; los ácidos biliares en exceso en el colon causan secreción de agua. Diagnóstico con SeHCAT, C4 sérico o ensayo terapéutico con colestiramina. | Treatable cause of diarrhea present in 25-30% of IBS-D patients; excess bile acids in colon cause water secretion. Diagnosis with SeHCAT, serum C4, or therapeutic trial with cholestyramine.',
        },
        {
          term: 'disinergia del piso pélvico / pelvic floor dyssynergia',
          definition:
            'Contracción paradójica de los músculos del piso pélvico durante la defecación; causa de estreñimiento que se solapa con SII-C y se trata con biofeedback. | Paradoxical contraction of pelvic floor muscles during defecation; cause of constipation overlapping with IBS-C treated with biofeedback.',
        },
        {
          term: 'neuromoduladores / neuromodulators',
          definition:
            'Medicamentos que modifican el procesamiento del dolor visceral; incluyen antidepresivos tricíclicos, ISRS, IRSN y gabapentinoides en dosis bajas. | Medications that modify visceral pain processing; include tricyclic antidepressants, SSRIs, SNRIs, and gabapentinoids at low doses.',
        },
        {
          term: 'tenapanor / tenapanor',
          definition:
            'Inhibidor del intercambiador NHE3; reduce absorción intestinal de sodio y agua; aprobado para SII-C con eficacia en dolor y estreñimiento. | NHE3 exchanger inhibitor; reduces intestinal sodium and water absorption; approved for IBS-C with efficacy for pain and constipation.',
        },
        {
          term: 'dolor nociplástico / nociplastic pain',
          definition:
            'Dolor que surge de la alteración del procesamiento nociceptivo sin evidencia clara de daño tisular o lesión nerviosa; concepto aplicable al SII. | Pain arising from altered nociceptive processing without clear evidence of tissue damage or nerve injury; concept applicable to IBS.',
        },
        {
          term: 'ibs-smart test',
          definition:
            'Prueba de biomarcadores séricos (anti-CdtB y anti-vinculina) que identifica SII post-infeccioso y ayuda a diferenciar SII-D de EII. | Serum biomarker test (anti-CdtB and anti-vinculin) identifying post-infectious IBS and helping differentiate IBS-D from IBD.',
        },
      ],
      clinicalNotes:
        'Puntos clave avanzados:\n\n1. **MAB subestimada:** Hasta 30% de SII-D puede ser MAB tratable con secuestrantes de ácidos biliares. Si C4 sérico o SeHCAT no están disponibles, un ensayo terapéutico con colestiramina 4g antes del desayuno × 2 semanas es razonable.\n\n2. **Neuromoduladores:** La amitriptilina en dosis baja es la terapia farmacológica con mejor evidencia para dolor en SII (ATLANTIS Trial, NNT 4.5). La comunicación al paciente es CLAVE: "Este medicamento actúa en los nervios de su intestino para bajar el volumen del dolor".\n\n3. **Disinergia:** Todo paciente con SII-C refractario a laxantes debe tener manometría anorrectal para descartar disinergia defecatoria. El biofeedback tiene tasa de éxito >70%.\n\n4. **Alianza terapéutica:** La relación médico-paciente es un factor pronóstico independiente en SII. Validar los síntomas, explicar la fisiopatología y establecer expectativas realistas. | Advanced key points: 1) BAM underestimated: up to 30% of IBS-D; therapeutic trial with cholestyramine if testing unavailable. 2) Low-dose amitriptyline best evidence for IBS pain (ATLANTIS, NNT 4.5); patient communication is KEY. 3) Dyssynergia: all refractory IBS-C patients need anorectal manometry; biofeedback >70% success. 4) Therapeutic alliance is an independent prognostic factor in IBS.',
    },

    // =====================================================================
    // LEVEL 5 - MD/Professional
    // =====================================================================
    5: {
      level: 5,
      summary:
        'El SII contemporáneo se conceptualiza como un trastorno de la interacción cerebro-intestino con múltiples vías fisiopatológicas que requieren evaluación individualizada y manejo multimodal. Los avances incluyen identificación de fenotipos basados en biomarcadores, terapias dirigidas al microbioma, farmacología de neuromodulación optimizada, terapias psicogastroenterológicas basadas en evidencia y medicina personalizada. Las fronteras incluyen terapia basada en el inmunoma intestinal, modulación vagal y digital therapeutics. | Contemporary IBS is conceptualized as a disorder of gut-brain interaction with multiple pathophysiologic pathways requiring individualized assessment and multimodal management. Advances include biomarker-based phenotyping, microbiome-directed therapies, optimized neuromodulation pharmacology, evidence-based psychogastroenterological therapies, and personalized medicine. Frontiers include intestinal immunome-based therapy, vagal modulation, and digital therapeutics.',
      explanation: `## Explicación

### Revisión de Evidencia de Ensayos Clave

**ATLANTIS Trial (Amitriptilina para SII en Atención Primaria, 2023):**
- RCT pragmático, n=463
- Amitriptilina titulada 10-30 mg/noche vs placebo
- IBS-SSS mejoró significativamente a 6 meses
- NNT para respuesta global: 4.5
- Efectos adversos: Boca seca, somnolencia (leves)
- Implicación: Valida el uso rutinario de ATC dosis baja en atención primaria

**TARGET 1/2 (Rifaximina para SII no estreñimiento, 2011):**
- Rifaximina 550 mg TID × 14 días
- Mejora global: 40.8% vs 31.2% placebo
- NNT: ~10
- Re-tratamiento efectivo en TARGET 3
- Seguridad: Sin resistencia antimicrobiana significativa

**Phase 3 Trials de Linaclotida (SII-C):**
- 290 mcg/día → mejoría de ABPM y CSBMs
- Efecto dual: Prosecretorio + analgésico visceral
- Diarrea como efecto adverso principal (20%)
- Tomar en ayunas 30 min antes del desayuno

**Ensayo de Tenapanor para SII-C:**
- T3MPO-1/T3MPO-2: Mejoría significativa en dolor y estreñimiento
- NHE3 inhibición: Mecanismo distinto a GC-C agonistas
- Alternativa para pacientes que no responden a linaclotida

**Gut-Directed Hypnotherapy Trials:**
- IMAGINAB: Hipnoterapia individual vs grupal vs educación
- Eficacia sostenida a 9-12 meses
- Efectos a largo plazo demostrados (>5 años en Manchester)
- Disponibilidad limitada pero apps digitales en desarrollo

### Estratificación por Biomarcadores

**Biomarcadores de Investigación:**
- Anti-CdtB / Anti-vinculina: SII post-infeccioso
  - CdtB (Cytolethal Distending Toxin B): Producida por bacterias patógenas
  - Mimetismo molecular con vinculina → autoinmunidad contra ICC
  - Especificidad ~90% para SII vs EII
  - ibs-smart test: Comercialmente disponible

- Permeabilidad intestinal:
  - Test de lactulosa/manitol: Investiga permeabilidad
  - Zonulina sérica: Marcador controversial
  - Biomarcadores fecales de inflamación de bajo grado

- Proteómica fecal y metabólómica:
  - Perfiles de metabolitos fecales distinguen subtipos
  - Ácidos biliares fecales para BAM
  - AGCC como marcadores de función del microbioma

**Tipificación del Microbioma:**
- Secuenciación 16S rRNA / metagenómica shotgun
- Enterotipos específicos asociados con respuesta a dieta/tratamiento
- Perfil metabólico del microbioma como predictor de respuesta a FODMAPs
- Desarrollo de terapias personalizadas basadas en microbioma

### Manejo Integrado Multimodal

**Algoritmo de Manejo Escalonado:**

*Paso 1 (Todos los pacientes):*
- Diagnóstico positivo con Roma IV
- Educación y validación
- Modificación dietética (fibra soluble → FODMAPs si necesario)
- Ejercicio regular
- Manejo del estrés básico

*Paso 2 (Síntomas persistentes):*
- Medicamentos dirigidos al subtipo:
  - SII-D: Loperamida → rifaximina → eluxadolina → evaluar MAB
  - SII-C: Fibra soluble → linaclotida/plecanatida → tenapanor → evaluar disinergia
  - Dolor: ATC dosis baja (amitriptilina) → IRSN → pregabalina
- Terapia psicológica basada en evidencia (TCC o hipnoterapia)

*Paso 3 (Refractario):*
- Combinaciones de neuromoduladores
- Referencia a psicogastroenterólogo
- Evaluar fenotipos tratables ocultos (MAB, disinergia, SIBO)
- Manometría anorrectal si SII-C
- Considerar ensayos clínicos

*Paso 4 (Multidisciplinario):*
- Equipo: Gastroenterólogo + psicólogo + nutricionista + fisioterapeuta pélvico
- Programa multidisciplinario de dolor
- Reevaluar diagnóstico (¿SII verdadero o solapamiento con otra condición?)

### Terapias Emergentes y Fronteras

**Modulación Vagal:**
- Estimulación del nervio vago transcutánea (tVNS)
- Estudios piloto muestran reducción del dolor visceral
- Modulación de la inflamación mucosa
- Dispositivos portátiles en desarrollo

**Digital Therapeutics:**
- Apps de TCC para SII (Zemedy, Mahana)
- Hipnoterapia digital (Nerva)
- Aprobación FDA como "digital therapeutic"
- Escalabilidad para problema de acceso a terapias psicológicas

**Inmunoterapia Mucosa:**
- Estabilizadores de mastocitos (ketotifeno, cromoglicato): Resultados mixtos
- Anti-IgE (omalizumab): Estudios piloto en SII
- Eosinófilos como diana terapéutica
- Identificación de pacientes con activación inmune mucosa como respondedores

**Trasplante de Microbiota Fecal (TMF):**
- Meta-análisis: Eficacia moderada, heterogeneidad alta
- Factores que influyen: Donante, vía de administración, preparación del receptor
- Consorcios bacterianos definidos como alternativa estandarizada
- Estudios de TMF superdor en curso

**Dieta de Eliminación Guiada por IgG4:**
- Controversial: IgG4 como marcador de tolerancia, no alergia
- Algunos estudios muestran beneficio vs dieta simulada
- No recomendada por guías actuales
- Investigación activa sobre mecanismos

---
## Explanation

### Key Trial Evidence
ATLANTIS (amitriptyline NNT 4.5 for IBS in primary care), TARGET (rifaximin for non-C IBS), linaclotide phase 3 (dual prosecretory + analgesic), tenapanor (NHE3 inhibitor for IBS-C), gut-directed hypnotherapy (sustained >5 year effects).

### Biomarker Stratification
Anti-CdtB/anti-vinculin for post-infectious IBS, fecal proteomics/metabolomics, microbiome typing for treatment prediction, intestinal permeability markers.

### Integrated Multimodal Management
Stepped-care algorithm from diet/lifestyle through subtype-directed medications and neuromodulators to multidisciplinary care. Always evaluate treatable phenotypes.

### Emerging Frontiers
Vagal modulation (tVNS), digital therapeutics (FDA-approved CBT apps), mucosal immunotherapy (mast cell stabilizers, anti-IgE), FMT with defined bacterial consortia, personalized microbiome-based therapy.`,
      keyTerms: [
        {
          term: 'dolor nociplástico / nociplastic pain',
          definition:
            'Tercer mecanismo de dolor (además de nociceptivo y neuropático); procesamiento aberrante del dolor sin lesión clara; concepto de la IASP aplicable al SII, fibromialgia y otros síndromes. | Third pain mechanism (beyond nociceptive and neuropathic); aberrant pain processing without clear injury; IASP concept applicable to IBS, fibromyalgia, and other syndromes.',
        },
        {
          term: 'psicogastroenterología / psychogastroenterology',
          definition:
            'Subespecialidad emergente que integra gastroenterología y psicología/psiquiatría para el manejo de DGBI; utiliza neuromoduladores y terapias psicológicas basadas en evidencia. | Emerging subspecialty integrating gastroenterology and psychology/psychiatry for DGBI management; uses neuromodulators and evidence-based psychological therapies.',
        },
        {
          term: 'digital therapeutics',
          definition:
            'Intervenciones terapéuticas basadas en software con evidencia clínica y aprobación regulatoria; incluyen apps de TCC e hipnoterapia para SII. | Software-based therapeutic interventions with clinical evidence and regulatory approval; include CBT and hypnotherapy apps for IBS.',
        },
        {
          term: 'estimulación vagal transcutánea (tVNS)',
          definition:
            'Neuromodulación no invasiva del nervio vago que puede reducir dolor visceral e inflamación mucosa; en investigación para SII. | Non-invasive vagus nerve neuromodulation that may reduce visceral pain and mucosal inflammation; under investigation for IBS.',
        },
        {
          term: 'anti-CdtB / anti-vinculina',
          definition:
            'Biomarcadores séricos de SII post-infeccioso; CdtB es una toxina bacteriana que causa autoinmunidad contra vinculina en las células intersticiales de Cajal, alterando la motilidad intestinal. | Serum biomarkers of post-infectious IBS; CdtB is a bacterial toxin causing autoimmunity against vinculin in interstitial cells of Cajal, altering intestinal motility.',
        },
        {
          term: 'ATLANTIS Trial',
          definition:
            'Ensayo pragmático multicéntrico (2023) que validó amitriptilina 10-30 mg como tratamiento efectivo para SII en atención primaria; NNT 4.5. Cambió la práctica al proporcionar evidencia de nivel 1 para neuromoduladores de primera línea. | Pragmatic multicenter trial (2023) validating amitriptyline 10-30 mg as effective IBS treatment in primary care; NNT 4.5. Changed practice by providing level 1 evidence for first-line neuromodulators.',
        },
      ],
      clinicalNotes:
        'Puntos de práctica MD/Especialista:\n\n1. **Diagnóstico positivo:** Roma IV permite diagnóstico con confianza. Minimizar estudios innecesarios. La calprotectina <50 descarta EII con VPN >95%. No repetir colonoscopias normales.\n\n2. **MAB:** Investigar activamente en todo SII-D. SeHCAT o C4 sérico si disponible; ensayo terapéutico con colestiramina si no. 25-30% de SII-D responderá.\n\n3. **ATLANTIS cambió la práctica:** Amitriptilina 10-30 mg/noche es primera línea farmacológica para dolor en SII. NNT 4.5. La comunicación al paciente es esencial: "actúa en los nervios del intestino".\n\n4. **Terapias psicológicas:** TCC e hipnoterapia dirigida al intestino tienen NNT comparable a fármacos (~4). Las digital therapeutics (Zemedy, Nerva) abordan el problema de acceso.\n\n5. **Enfoque multimodal:** El SII refractario casi siempre requiere combinación de dieta + fármaco + terapia psicológica. El equipo multidisciplinario es ideal.\n\n6. **Fenotipos ocultos:** MAB, disinergia, SIBO y malabsorción de carbohidratos son causas tratables que se esconden bajo el diagnóstico de SII. Buscarlos activamente en refractarios.\n\n7. **Alianza terapéutica:** La relación médico-paciente es un factor pronóstico independiente. Validar, educar y establecer expectativas realistas.\n\n| MD/Specialist practice points: 1) Positive Rome IV diagnosis; minimize unnecessary testing. 2) Actively investigate BAM in all IBS-D (25-30% will respond to sequestrants). 3) ATLANTIS changed practice: amitriptyline 10-30mg first-line for IBS pain; patient communication essential. 4) CBT and hypnotherapy NNT ~4; digital therapeutics address access. 5) Refractory IBS requires multimodal: diet + medication + psychological therapy. 6) Hidden phenotypes: BAM, dyssynergia, SIBO, carbohydrate malabsorption - actively seek in refractory cases. 7) Therapeutic alliance is independent prognostic factor.',
    },
  },

  media: [
    {
      id: 'ibs-brain-gut-axis',
      type: 'diagram',
      filename: 'ibs-brain-gut-axis.svg',
      title: 'Eje Cerebro-Intestino en SII / Brain-Gut Axis in IBS',
      description: 'Comunicación bidireccional entre sistema nervioso central y entérico',
    },
    {
      id: 'ibs-subtypes-bristol',
      type: 'diagram',
      filename: 'ibs-subtypes-bristol.svg',
      title: 'Subtipos de SII y Escala de Bristol / IBS Subtypes and Bristol Scale',
      description: 'Clasificación de SII según patrón de heces',
    },
    {
      id: 'ibs-treatment-algorithm',
      type: 'diagram',
      filename: 'ibs-treatment-algorithm.svg',
      title: 'Algoritmo de Tratamiento del SII / IBS Treatment Algorithm',
      description: 'Manejo escalonado por subtipo y severidad',
    },
  ],

  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Harrison\'s Principles of Internal Medicine, 21st Edition - Irritable Bowel Syndrome',
      authors: ['Loscalzo, J.', 'Fauci, A.S.', 'Kasper, D.L.'],
      source: 'McGraw-Hill Education',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'ACG Clinical Guideline: Management of Irritable Bowel Syndrome',
      authors: ['Lacy, B.E.', 'Pimentel, M.', 'et al.'],
      source: 'American Journal of Gastroenterology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'ATLANTIS Trial: Amitriptyline for IBS in Primary Care',
      authors: ['Ford, A.C.', 'Wright-Hughes, A.', 'et al.'],
      source: 'The Lancet',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Rome IV - Functional Gastrointestinal Disorders: Disorders of Gut-Brain Interaction',
      authors: ['Drossman, D.A.', 'Hasler, W.L.'],
      source: 'Gastroenterology',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'condition-enfermedad-crohn', targetType: 'condition', relationship: 'related', label: 'Enfermedad de Crohn / Crohn\'s Disease (diagnóstico diferencial)' },
    { targetId: 'condition-colitis-ulcerosa', targetType: 'condition', relationship: 'related', label: 'Colitis Ulcerosa / Ulcerative Colitis (diagnóstico diferencial)' },
    { targetId: 'condition-enfermedad-hepatica', targetType: 'condition', relationship: 'related', label: 'Enfermedad Hepática / Liver Disease' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopia / Colonoscopy' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'functional-disorders', 'neurogastroenterology', 'pain-medicine'],
    keywords: [
      'síndrome del intestino irritable',
      'irritable bowel syndrome',
      'SII',
      'IBS',
      'colon irritable',
      'DGBI',
      'Roma IV',
      'Rome IV',
      'FODMAPs',
      'hipersensibilidad visceral',
      'visceral hypersensitivity',
      'eje cerebro-intestino',
      'brain-gut axis',
      'neuromoduladores',
      'amitriptilina',
      'linaclotida',
      'rifaximina',
      'malabsorción de ácidos biliares',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default sindromeIntestinoIrritableIbs;
