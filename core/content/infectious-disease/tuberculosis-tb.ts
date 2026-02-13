import { EducationalContent } from '../types';

export const tuberculosisTb: EducationalContent = {
  id: 'condition-tuberculosis-tb',
  type: 'condition',
  name: 'Tuberculosis (TB)',
  nameEs: 'Tuberculosis (TB)',
  alternateNames: ['TB', 'Tisis', 'Consumption', 'Mycobacterial disease', 'Enfermedad micobacteriana', 'TB pulmonar', 'Pulmonary tuberculosis'],
  levels: {
    1: {
      level: 1,
      summary: 'La tuberculosis es una enfermedad causada por una bacteria que generalmente afecta los pulmones. Se transmite por el aire cuando una persona enferma tose o estornuda. Es curable con tratamiento adecuado. | Tuberculosis is a disease caused by a bacterium that usually affects the lungs. It is transmitted through the air when a sick person coughs or sneezes. It is curable with proper treatment.',
      explanation: `## Explicacion

La tuberculosis (TB) es una enfermedad infecciosa causada por una bacteria llamada Mycobacterium tuberculosis. Esta bacteria viaja por el aire de persona a persona. Cuando alguien con TB activa tose, estornuda o habla, libera pequenas gotas con bacterias que otra persona puede inhalar.

**Lo mas importante sobre la TB:**
La TB puede estar en tu cuerpo de dos formas:
- **TB latente (dormida):** Las bacterias estan en tu cuerpo pero tu sistema inmune las mantiene controladas. NO te sientes enfermo y NO puedes contagiar a otros. Sin embargo, la bacteria puede "despertar" en el futuro.
- **TB activa (enfermedad):** Las bacterias estan multiplicandose y causando dano. TE sientes enfermo y PUEDES contagiar a otros.

**Senales de TB activa:**
- Tos que dura mas de 2-3 semanas
- Tos con sangre
- Dolor en el pecho
- Perdida de peso sin razon
- Fiebre y sudores nocturnos
- Sentirse muy cansado
- Perdida de apetito

**Como se diagnostica:**
- Prueba en la piel (prueba del PPD o Mantoux): se inyecta una pequena cantidad de liquido en el brazo y se revisa en 2-3 dias
- Prueba de sangre (IGRA): un analisis de sangre que detecta la infeccion
- Radiografia de torax: para ver si los pulmones estan afectados
- Muestra de esputo (flema): para buscar las bacterias

**Tratamiento:**
- La TB se cura con antibioticos, pero el tratamiento es LARGO — generalmente 6 meses
- Los medicamentos mas comunes son: isoniazida, rifampicina, pirazinamida y etambutol
- Es MUY IMPORTANTE tomar todos los medicamentos por el tiempo completo
- Dejar el tratamiento a medias puede crear bacterias resistentes que son mucho mas dificiles de curar

**DOTS (Tratamiento Acortado Directamente Observado):**
Un trabajador de salud observa al paciente tomar sus medicinas para asegurar que complete el tratamiento.

**Prevencion:**
- La vacuna BCG se da a los bebes en muchos paises
- Si tienes TB latente, tu medico puede darte medicinas para prevenir que se active

---
## Explanation

Tuberculosis (TB) is an infectious disease caused by a bacterium called Mycobacterium tuberculosis. This bacterium travels through the air from person to person. When someone with active TB coughs, sneezes, or talks, they release tiny droplets with bacteria that another person can breathe in.

**The most important thing about TB:**
TB can exist in your body in two forms:
- **Latent TB (sleeping):** The bacteria are in your body but your immune system keeps them controlled. You do NOT feel sick and you CANNOT spread it to others. However, the bacteria can "wake up" in the future.
- **Active TB (disease):** The bacteria are multiplying and causing damage. You DO feel sick and you CAN spread it to others.

**Signs of active TB:**
- Cough lasting more than 2-3 weeks
- Coughing up blood
- Chest pain
- Weight loss without reason
- Fever and night sweats
- Feeling very tired
- Loss of appetite

**How it is diagnosed:**
- Skin test (PPD or Mantoux test): a small amount of liquid is injected into the arm and checked in 2-3 days
- Blood test (IGRA): a blood test that detects the infection
- Chest X-ray: to see if the lungs are affected
- Sputum sample (phlegm): to look for the bacteria

**Treatment:**
- TB is cured with antibiotics, but treatment is LONG — usually 6 months
- The most common medicines are: isoniazid, rifampin, pyrazinamide, and ethambutol
- It is VERY IMPORTANT to take all medicines for the full time
- Stopping treatment early can create resistant bacteria that are much harder to cure

**DOTS (Directly Observed Therapy, Short-course):**
A health worker watches the patient take their medicines to ensure they complete treatment.

**Prevention:**
- The BCG vaccine is given to babies in many countries
- If you have latent TB, your doctor can give you medicines to prevent it from becoming active`,
      keyTerms: [
        { term: 'Tuberculosis (TB)', definition: 'Enfermedad infecciosa causada por una bacteria que generalmente ataca los pulmones y se transmite por el aire. | Infectious disease caused by a bacterium that usually attacks the lungs and is transmitted through the air.' },
        { term: 'TB latente / Latent TB', definition: 'Cuando las bacterias de TB estan en tu cuerpo pero dormidas; no te sientes enfermo y no puedes contagiar a otros. | When TB bacteria are in your body but dormant; you do not feel sick and cannot spread it to others.' },
        { term: 'TB activa / Active TB', definition: 'Cuando las bacterias de TB se multiplican y causan enfermedad; te sientes enfermo y puedes contagiar a otros. | When TB bacteria multiply and cause disease; you feel sick and can spread it to others.' },
        { term: 'DOTS', definition: 'Programa donde un trabajador de salud observa directamente al paciente tomar sus medicinas para asegurar que complete el tratamiento. | Program where a health worker directly watches the patient take their medicines to ensure treatment completion.' },
        { term: 'BCG', definition: 'Vacuna contra la tuberculosis que se da a los bebes en muchos paises para protegerlos de las formas mas graves de TB. | Tuberculosis vaccine given to babies in many countries to protect them from the most severe forms of TB.' }
      ],
      analogies: [
        'La TB latente es como una semilla enterrada en la tierra que no ha germinado todavia. Con las condiciones correctas (como un sistema inmune debilitado), la semilla puede germinar y convertirse en TB activa. | Latent TB is like a seed buried in the ground that has not sprouted yet. With the right conditions (like a weakened immune system), the seed can sprout and become active TB.',
        'El tratamiento de la TB es como un curso escolar de 6 meses. Si dejas de ir a la mitad, no aprendes lo suficiente y tienes que empezar de nuevo, pero ahora es mas dificil. | TB treatment is like a 6-month school course. If you stop going halfway, you do not learn enough and have to start over, but now it is harder.'
      ],
      examples: [
        'Un hombre de 40 anos que ha tenido tos por un mes, ha perdido 5 kilos sin dieta, y suda mucho por las noches necesita una evaluacion para tuberculosis. | A 40-year-old man who has had a cough for a month, lost 5 kilos without dieting, and sweats a lot at night needs to be evaluated for tuberculosis.',
        'Una mujer con VIH que tiene PPD positivo pero no tiene sintomas ni cambios en la radiografia tiene TB latente y debe recibir tratamiento preventivo. | A woman with HIV who has a positive PPD but no symptoms or X-ray changes has latent TB and should receive preventive treatment.'
      ],
      patientCounselingPoints: [
        'Es esencial que tome TODOS los medicamentos durante TODO el tiempo que el doctor indique, aunque se sienta mejor antes. Dejar el tratamiento a medias puede ser muy peligroso. | It is essential that you take ALL medicines for the ENTIRE time the doctor indicates, even if you feel better sooner. Stopping treatment early can be very dangerous.',
        'La TB activa se transmite por el aire. Cubra su boca al toser y use mascarilla hasta que el doctor le diga que ya no es contagioso (generalmente 2-3 semanas de tratamiento). | Active TB spreads through the air. Cover your mouth when coughing and wear a mask until the doctor tells you that you are no longer contagious (usually 2-3 weeks of treatment).',
        'Si tiene efectos secundarios como nauseas, vision borrosa, o la piel amarilla, avise a su medico inmediatamente pero NO deje de tomar los medicamentos por su cuenta. | If you have side effects like nausea, blurred vision, or yellow skin, notify your doctor immediately but do NOT stop taking the medicines on your own.',
        'Todos los miembros de su hogar deben ser evaluados para TB si usted tiene TB activa. | All members of your household should be tested for TB if you have active TB.'
      ]
    },
    2: {
      level: 2,
      summary: 'La tuberculosis, causada por Mycobacterium tuberculosis, es la principal causa de muerte por un agente infeccioso unico a nivel mundial. Se distingue entre infeccion latente (LTBI) y enfermedad activa. El diagnostico combina pruebas inmunologicas, imagen y microbiologia. El tratamiento estandar (RHZE x 2 meses + RH x 4 meses) es altamente efectivo pero requiere adherencia estricta bajo DOTS. | Tuberculosis, caused by Mycobacterium tuberculosis, is the leading cause of death from a single infectious agent globally. It is distinguished between latent infection (LTBI) and active disease. Diagnosis combines immunological tests, imaging, and microbiology. Standard treatment (RHZE x 2 months + RH x 4 months) is highly effective but requires strict adherence under DOTS.',
      explanation: `## Explicacion

La tuberculosis (TB) es una enfermedad infecciosa causada por Mycobacterium tuberculosis (Mtb), un bacilo acido-alcohol resistente (BAAR) que crece lentamente. Es una de las enfermedades infecciosas mas antiguas y mortiferas de la humanidad.

**Epidemiologia:**
- Aproximadamente 10 millones de casos nuevos y 1.3 millones de muertes por ano (OMS)
- Mayor carga en paises de bajos y medianos ingresos: India, China, Indonesia, Filipinas, Pakistan, Nigeria
- Coinfeccion TB-VIH: el VIH es el principal factor de riesgo para progresar de TB latente a activa
- Se estima que una cuarta parte de la poblacion mundial tiene TB latente

**Transmision:**
- Via aerea por nucleos de gotas (droplet nuclei) de 1-5 micras
- Producidos al toser, estornudar, cantar o hablar
- Las gotas pueden permanecer suspendidas en el aire por horas
- La transmision requiere contacto prolongado en espacios cerrados
- Factores que aumentan transmisibilidad: tos frecuente, cavernas pulmonares, bacilifero con baciloscopia positiva

**Patogenesis basica:**

*Infeccion primaria:*
1. Inhalacion de Mtb que llega a los alveolos
2. Los macrofagos alveolares fagocitan la bacteria
3. Mtb sobrevive dentro de los macrofagos (parasito intracelular)
4. La bacteria se multiplica lentamente dentro de los macrofagos
5. Respuesta inmune celular (linfocitos T CD4+) se desarrolla en 2-12 semanas
6. Formacion de granulomas: estructura organizada de macrofagos, celulas epitelioides, celulas gigantes de Langhans, y linfocitos que contienen la infeccion
7. En la mayoria (90-95%): la infeccion queda contenida — TB latente
8. En 5-10%: la infeccion progresa a TB activa (mayor riesgo en primeros 2 anos)

*Factores de riesgo para progresion a TB activa:*
- VIH/SIDA (riesgo anual 5-15% vs. 5-10% de por vida en VIH negativos)
- Inmunosupresion: biologicos anti-TNF, corticosteroides, quimioterapia
- Diabetes mellitus
- Insuficiencia renal cronica / dialisis
- Silicosis
- Desnutricion
- Edad extrema (ninos < 5 anos, ancianos)
- Tabaquismo
- Uso de drogas IV

**Diagnostico:**

*Pruebas para infeccion (latente o activa):*
- Prueba cutanea de tuberculina (PPD / Mantoux):
  - Inyeccion intradermica de PPD, lectura a 48-72 horas
  - Positivo: >= 5 mm (VIH, contactos, inmunosuprimidos), >= 10 mm (otros factores de riesgo), >= 15 mm (bajo riesgo)
  - Limitaciones: reaccion cruzada con BCG y micobacterias no tuberculosas
- IGRA (Interferon-Gamma Release Assay):
  - QuantiFERON-TB Gold Plus o T-SPOT.TB
  - Mide liberacion de interferon-gamma por linfocitos T al estimularlos con antigenos especificos de Mtb (ESAT-6, CFP-10)
  - No tiene reaccion cruzada con BCG — preferido en vacunados con BCG

*Pruebas para enfermedad activa:*
- Radiografia de torax:
  - TB primaria: infiltrado en lobulos medios/inferiores, linfadenopatia hiliar
  - TB de reactivacion: infiltrados apicales, cavernas, fibrosis
  - TB en VIH: patron atipico, puede ser normal, patron miliar
- Baciloscopia (tincion BAAR / Ziehl-Neelsen):
  - Rapida y barata, pero baja sensibilidad (50-80%)
  - Requiere 5,000-10,000 bacilos/mL para ser positiva
- Cultivo (estandar de oro):
  - Medio solido Lowenstein-Jensen: crecimiento en 4-8 semanas
  - Medio liquido BACTEC MGIT: crecimiento en 1-3 semanas
  - Permite antibiograma
- Xpert MTB/RIF (GeneXpert):
  - PCR automatizada que detecta Mtb Y resistencia a rifampicina en 2 horas
  - Sensibilidad 85-99% (mayor si baciloscopia positiva)
  - Recomendado por OMS como prueba inicial

**Tratamiento estandar (TB sensible):**

*Fase intensiva (2 meses):*
- Isoniazida (H) + Rifampicina (R) + Pirazinamida (Z) + Etambutol (E)
- Esquema RHZE

*Fase de continuacion (4 meses):*
- Isoniazida (H) + Rifampicina (R)
- Esquema RH

*Total: 6 meses (mínimo)*

*DOTS (Directly Observed Therapy, Short-course):*
- Estrategia de la OMS para asegurar adherencia
- Un trabajador de salud observa la ingesta de cada dosis
- Reduce abandono, recaidas y desarrollo de resistencia
- Componentes: compromiso politico, diagnostico por baciloscopia, tratamiento estandar supervisado, suministro regular de medicamentos, sistema de registro y reporte

*Efectos adversos importantes:*
- Isoniazida: hepatotoxicidad, neuropatia periferica (prevenible con piridoxina B6)
- Rifampicina: hepatotoxicidad, interacciones medicamentosas (inductor CYP450), coloracion naranja de fluidos
- Pirazinamida: hepatotoxicidad (principal causa en los primeros 2 meses), hiperuricemia
- Etambutol: neuritis optica (riesgo dosis-dependiente)

**Tratamiento de TB latente (LTBI):**
- Isoniazida 9 meses (regimen clasico)
- Isoniazida + rifapentina semanal x 12 semanas (3HP) — preferido actualmente
- Rifampicina 4 meses (alternativa)
- Indicado en: contactos de TB activa, VIH positivos, inmunosuprimidos, conversores recientes de PPD/IGRA

---
## Explanation

Tuberculosis (TB) is an infectious disease caused by Mycobacterium tuberculosis (Mtb), an acid-fast bacillus (AFB) that grows slowly. It is one of the oldest and deadliest infectious diseases in human history.

**Epidemiology:**
- Approximately 10 million new cases and 1.3 million deaths per year (WHO)
- Greatest burden in low- and middle-income countries: India, China, Indonesia, Philippines, Pakistan, Nigeria
- TB-HIV coinfection: HIV is the main risk factor for progressing from latent to active TB
- An estimated one-quarter of the world's population has latent TB

**Transmission:**
- Airborne via droplet nuclei of 1-5 microns
- Produced when coughing, sneezing, singing, or talking
- Droplets can remain suspended in air for hours
- Transmission requires prolonged contact in enclosed spaces
- Factors increasing transmissibility: frequent cough, pulmonary cavities, smear-positive sputum

**Basic pathogenesis:**

*Primary infection:*
1. Inhalation of Mtb reaching the alveoli
2. Alveolar macrophages phagocytize the bacteria
3. Mtb survives inside macrophages (intracellular parasite)
4. Bacteria multiply slowly inside macrophages
5. Cellular immune response (CD4+ T lymphocytes) develops in 2-12 weeks
6. Granuloma formation: organized structure of macrophages, epithelioid cells, Langhans giant cells, and lymphocytes containing the infection
7. In most (90-95%): infection is contained — latent TB
8. In 5-10%: infection progresses to active TB (highest risk in first 2 years)

*Risk factors for progression to active TB:*
- HIV/AIDS (annual risk 5-15% vs. 5-10% lifetime in HIV-negative)
- Immunosuppression: anti-TNF biologics, corticosteroids, chemotherapy
- Diabetes mellitus
- Chronic renal failure / dialysis
- Silicosis
- Malnutrition
- Extreme age (children < 5 years, elderly)
- Smoking
- IV drug use

**Diagnosis:**

*Tests for infection (latent or active):*
- Tuberculin skin test (PPD / Mantoux):
  - Intradermal PPD injection, read at 48-72 hours
  - Positive: >= 5 mm (HIV, contacts, immunosuppressed), >= 10 mm (other risk factors), >= 15 mm (low risk)
  - Limitations: cross-reaction with BCG and nontuberculous mycobacteria
- IGRA (Interferon-Gamma Release Assay):
  - QuantiFERON-TB Gold Plus or T-SPOT.TB
  - Measures interferon-gamma release by T lymphocytes when stimulated with Mtb-specific antigens (ESAT-6, CFP-10)
  - No cross-reaction with BCG — preferred in BCG-vaccinated

*Tests for active disease:*
- Chest X-ray:
  - Primary TB: mid/lower lobe infiltrate, hilar lymphadenopathy
  - Reactivation TB: apical infiltrates, cavities, fibrosis
  - TB in HIV: atypical pattern, may be normal, miliary pattern
- AFB smear (Ziehl-Neelsen stain):
  - Quick and inexpensive, but low sensitivity (50-80%)
  - Requires 5,000-10,000 bacilli/mL to be positive
- Culture (gold standard):
  - Lowenstein-Jensen solid media: growth in 4-8 weeks
  - BACTEC MGIT liquid media: growth in 1-3 weeks
  - Allows susceptibility testing
- Xpert MTB/RIF (GeneXpert):
  - Automated PCR detecting Mtb AND rifampin resistance in 2 hours
  - Sensitivity 85-99% (higher if smear-positive)
  - Recommended by WHO as initial test

**Standard treatment (drug-susceptible TB):**

*Intensive phase (2 months):*
- Isoniazid (H) + Rifampin (R) + Pyrazinamide (Z) + Ethambutol (E)
- RHZE regimen

*Continuation phase (4 months):*
- Isoniazid (H) + Rifampin (R)
- RH regimen

*Total: 6 months (minimum)*

*DOTS (Directly Observed Therapy, Short-course):*
- WHO strategy to ensure adherence
- A health worker observes the ingestion of each dose
- Reduces abandonment, relapse, and resistance development
- Components: political commitment, smear microscopy diagnosis, standardized supervised treatment, regular drug supply, recording and reporting system

*Important adverse effects:*
- Isoniazid: hepatotoxicity, peripheral neuropathy (preventable with pyridoxine B6)
- Rifampin: hepatotoxicity, drug interactions (CYP450 inducer), orange discoloration of fluids
- Pyrazinamide: hepatotoxicity (main cause in first 2 months), hyperuricemia
- Ethambutol: optic neuritis (dose-dependent risk)

**Latent TB infection (LTBI) treatment:**
- Isoniazid 9 months (classic regimen)
- Isoniazid + rifapentine weekly x 12 weeks (3HP) — currently preferred
- Rifampin 4 months (alternative)
- Indicated in: active TB contacts, HIV-positive, immunosuppressed, recent PPD/IGRA converters`,
      keyTerms: [
        { term: 'Mycobacterium tuberculosis (Mtb)', definition: 'Bacteria acido-alcohol resistente de crecimiento lento que causa la tuberculosis; sobrevive dentro de los macrofagos del huesped. | Slow-growing acid-fast bacterium that causes tuberculosis; survives inside host macrophages.' },
        { term: 'Granuloma', definition: 'Estructura organizada de celulas inmunes (macrofagos, celulas epitelioides, celulas gigantes) que rodea y contiene las bacterias de TB. | Organized structure of immune cells (macrophages, epithelioid cells, giant cells) that surrounds and contains TB bacteria.' },
        { term: 'IGRA', definition: 'Ensayo de liberacion de interferon-gamma: prueba de sangre que detecta infeccion por TB midiendo la respuesta inmune a antigenos especificos de Mtb; no se afecta por vacunacion BCG. | Interferon-Gamma Release Assay: blood test detecting TB infection by measuring immune response to Mtb-specific antigens; not affected by BCG vaccination.' },
        { term: 'GeneXpert / Xpert MTB/RIF', definition: 'Prueba molecular automatizada que detecta TB y resistencia a rifampicina en 2 horas; recomendada por la OMS como prueba inicial. | Automated molecular test detecting TB and rifampin resistance in 2 hours; recommended by WHO as initial test.' },
        { term: 'RHZE', definition: 'Abreviatura del regimen estandar de fase intensiva: Rifampicina, Isoniazida, Pirazinamida, Etambutol durante 2 meses. | Abbreviation for standard intensive phase regimen: Rifampin, Isoniazid, Pyrazinamide, Ethambutol for 2 months.' },
        { term: 'Baciloscopia / AFB smear', definition: 'Examen microscopico del esputo con tincion de Ziehl-Neelsen para detectar bacilos acido-alcohol resistentes; rapido pero de baja sensibilidad. | Microscopic sputum examination with Ziehl-Neelsen stain to detect acid-fast bacilli; rapid but low sensitivity.' },
        { term: '3HP', definition: 'Regimen de tratamiento de TB latente: Isoniazida + Rifapentina semanal por 12 semanas (12 dosis totales); actualmente preferido por su corta duracion y buena adherencia. | Latent TB treatment regimen: Isoniazid + Rifapentine weekly for 12 weeks (12 total doses); currently preferred for its short duration and good adherence.' }
      ],
      analogies: [
        'El granuloma es como una prision de alta seguridad que tu sistema inmune construye alrededor de las bacterias de TB para evitar que se escapen y se multipliquen. | The granuloma is like a maximum-security prison that your immune system builds around TB bacteria to prevent them from escaping and multiplying.',
        'La diferencia entre TB latente y activa es como la diferencia entre un volcan dormido y un volcan en erupcion. El volcan dormido puede parecer inofensivo, pero bajo las condiciones correctas, puede hacer erupcion. | The difference between latent and active TB is like the difference between a dormant volcano and an erupting one. The dormant volcano may seem harmless, but under the right conditions, it can erupt.'
      ],
      examples: [
        'Un paciente con VIH y CD4 de 150 que tiene tos cronica, fiebre y perdida de peso debe evaluarse con GeneXpert y radiografia de torax como prioridad, ya que el VIH aumenta enormemente el riesgo de TB activa. | An HIV patient with CD4 of 150 who has chronic cough, fever, and weight loss should be evaluated with GeneXpert and chest X-ray as priority, since HIV greatly increases the risk of active TB.',
        'Un trabajador de salud con conversion reciente de PPD (de negativo a positivo) sin sintomas debe recibir tratamiento para TB latente con el regimen 3HP (12 semanas). | A healthcare worker with recent PPD conversion (negative to positive) without symptoms should receive latent TB treatment with the 3HP regimen (12 weeks).'
      ],
      patientCounselingPoints: [
        'El tratamiento dura 6 meses pero es esencial completarlo. Si deja de tomar los medicamentos antes de tiempo, la bacteria puede volverse resistente y necesitara tratamiento mucho mas largo y dificil. | Treatment lasts 6 months but completing it is essential. If you stop taking medicines early, the bacteria can become resistant and you will need much longer and harder treatment.',
        'La rifampicina hara que su orina, lagrimas y sudor se vuelvan de color naranja — esto es normal y no es peligroso. Puede manchar los lentes de contacto. | Rifampin will turn your urine, tears, and sweat orange — this is normal and not dangerous. It may stain contact lenses.'
      ]
    },
    3: {
      level: 3,
      summary: 'La tuberculosis es una enfermedad granulomatosa cronica causada por Mycobacterium tuberculosis, cuya patogenesis depende de la interaccion entre la inmunidad celular del huesped (linfocitos T CD4+, macrofagos activados) y los mecanismos de evasion del patogeno. El diagnostico integra pruebas inmunologicas, moleculares y microbiologicas. El tratamiento estandar RHZE/RH bajo DOTS es altamente efectivo, pero la TB multidrogoresistente (MDR-TB) representa un desafio creciente. | Tuberculosis is a chronic granulomatous disease caused by Mycobacterium tuberculosis, whose pathogenesis depends on the interaction between host cellular immunity (CD4+ T lymphocytes, activated macrophages) and pathogen evasion mechanisms. Diagnosis integrates immunological, molecular, and microbiological tests. Standard RHZE/RH treatment under DOTS is highly effective, but multidrug-resistant TB (MDR-TB) represents a growing challenge.',
      explanation: `## Explicacion

**Microbiologia de Mycobacterium tuberculosis:**

*Caracteristicas del organismo:*
- Bacilo acido-alcohol resistente (BAAR): pared celular rica en acidos micolicos
- Crecimiento extremadamente lento: tiempo de duplicacion 15-20 horas (vs. 20 minutos para E. coli)
- Aerobio estricto: prefiere areas con alta tension de oxigeno (apices pulmonares)
- No produce toxinas: la patologia es causada por la respuesta inmune del huesped
- Complejo M. tuberculosis: incluye M. tuberculosis, M. bovis, M. africanum, M. microti, M. canettii

*Estructura de la pared celular:*
- Capa interna: peptidoglicano
- Arabinogalactano: conecta peptidoglicano con acidos micolicos
- Acidos micolicos: cadenas largas de acidos grasos (60-90 carbonos) — responsables de la acido-alcohol resistencia
- Capa externa lipidica: lipoarabinomanano (LAM), factor cuerda (trehalosa dimicolato)
- Esta pared compleja explica: resistencia a desecacion, resistencia a muchos antibioticos, lento crecimiento, evasion inmune

**Inmunopatogenesis detallada:**

*Infeccion primaria y formacion del granuloma:*
1. Mtb llega a alveolos y es fagocitado por macrofagos alveolares
2. Mtb bloquea la fusion fagosoma-lisosoma (sobrevive intracelularmente)
3. Macrofagos infectados secretan IL-12 e IL-18
4. Celulas dendriticas presentan antigenos de Mtb a linfocitos T en ganglios linfaticos
5. Respuesta Th1: linfocitos T CD4+ producen IFN-gamma
6. IFN-gamma activa macrofagos (macrofagos activados = celulas epitelioides)
7. Formacion del granuloma caseoso:
   - Centro: necrosis caseosa (material lipidico-proteico)
   - Anillo intermedio: macrofagos activados (epitelioides) y celulas gigantes multinucleadas de Langhans
   - Periferia: linfocitos T y B, fibroblastos
8. El granuloma contiene la infeccion pero no la esteriliza — bacterias persistentes latentes

*Reactivacion:*
- Inmunosupresion (VIH, anti-TNF, corticosteroides) debilita el granuloma
- Las bacterias latentes se reactivan y multiplican
- Necrosis caseosa se licua, formando cavernas (cavidades llenas de aire con miles de millones de bacilos)
- Las cavernas comunican con bronquios — el paciente se vuelve altamente contagioso

*TB primaria vs. reactivacion:*
| Caracteristica | TB Primaria | TB Reactivacion |
|---|---|---|
| Localizacion | Lobulos medios/inferiores | Apices (segmentos apicales y posteriores) |
| Linfadenopatia | Hiliar/mediastinal (frecuente) | Infrecuente |
| Cavernas | Infrecuentes | Frecuentes |
| Baciloscopia | Frecuentemente negativa | Frecuentemente positiva |
| Contagiosidad | Baja | Alta |

**Diagnostico avanzado:**

*Xpert MTB/RIF Ultra (segunda generacion):*
- Mayor sensibilidad que Xpert MTB/RIF original (especialmente en VIH y TB paucibacilar)
- Detecta mutaciones en gen rpoB (resistencia a rifampicina) en < 2 horas
- "Trace" positivo: categoria intermedia que requiere evaluacion clinica

*Line Probe Assays (LPA):*
- GenoType MTBDRplus: detecta resistencia a isoniazida (katG, inhA) y rifampicina (rpoB)
- GenoType MTBDRsl: detecta resistencia a fluoroquinolonas (gyrA, gyrB) y aminoglucosidos (rrs)
- Rapido (5 horas), pero requiere muestra BAAR-positiva o cultivo

*Otros diagnosticos:*
- Adenosin deaminasa (ADA): elevada en TB pleural (> 40 U/L), pericardica y meningea
- Cultivo con antibiograma fenotipico: sigue siendo esencial para resistencia completa
- Histopatologia: granulomas caseificantes con celulas de Langhans — sugiere TB pero no es patognomonico

**TB extrapulmonar (15-20% de casos, mas comun en VIH):**
- TB ganglionar (linfadenitis): forma extrapulmonar mas comun
- TB pleural: dolor pleuritico, derrame exudativo linfocitico, ADA elevada
- TB meningea: meningitis subaguda, LCR linfocitico con glucosa baja, mortalidad alta
- TB miliar: diseminacion hematogena, patron radiologico "mijo" (pequeños nodulos difusos)
- TB osea (Mal de Pott): espondilodiscitis de columna toracica, absceso paravertebral
- TB genitourinaria: piuria esteril, hematuria, infertilidad

**TB multidrogoresistente (MDR-TB):**
- Definicion: resistencia al menos a isoniazida Y rifampicina
- Prevalencia: ~500,000 nuevos casos/ano (OMS)
- Tratamiento: regimenes de 9-20 meses con farmacos de segunda linea
- Regimen BPaL: Bedaquilina + Pretomanid + Linezolid (aprobado para TB-XDR y MDR-TB sin opciones)
- Mortalidad significativamente mayor que TB sensible

**TB extensamente resistente (XDR-TB):**
- Definicion actualizada (OMS 2021): MDR-TB + resistencia a fluoroquinolonas + al menos uno entre bedaquilina o linezolid
- Opciones terapeuticas muy limitadas
- Mortalidad > 50% en muchos contextos

---
## Explanation

**Microbiology of Mycobacterium tuberculosis:**

*Organism characteristics:*
- Acid-fast bacillus (AFB): cell wall rich in mycolic acids
- Extremely slow growth: doubling time 15-20 hours (vs. 20 minutes for E. coli)
- Strict aerobe: prefers areas with high oxygen tension (lung apices)
- Does not produce toxins: pathology is caused by the host immune response
- M. tuberculosis complex: includes M. tuberculosis, M. bovis, M. africanum, M. microti, M. canettii

*Cell wall structure:*
- Inner layer: peptidoglycan
- Arabinogalactan: connects peptidoglycan with mycolic acids
- Mycolic acids: long fatty acid chains (60-90 carbons) — responsible for acid-fastness
- Outer lipid layer: lipoarabinomannan (LAM), cord factor (trehalose dimycolate)
- This complex wall explains: desiccation resistance, resistance to many antibiotics, slow growth, immune evasion

**Detailed immunopathogenesis:**

*Primary infection and granuloma formation:*
1. Mtb reaches alveoli and is phagocytized by alveolar macrophages
2. Mtb blocks phagosome-lysosome fusion (survives intracellularly)
3. Infected macrophages secrete IL-12 and IL-18
4. Dendritic cells present Mtb antigens to T lymphocytes in lymph nodes
5. Th1 response: CD4+ T lymphocytes produce IFN-gamma
6. IFN-gamma activates macrophages (activated macrophages = epithelioid cells)
7. Caseous granuloma formation:
   - Center: caseous necrosis (lipid-protein material)
   - Intermediate ring: activated macrophages (epithelioid) and Langhans multinucleated giant cells
   - Periphery: T and B lymphocytes, fibroblasts
8. Granuloma contains infection but does not sterilize it — persistent latent bacteria

*Reactivation:*
- Immunosuppression (HIV, anti-TNF, corticosteroids) weakens the granuloma
- Latent bacteria reactivate and multiply
- Caseous necrosis liquefies, forming cavities (air-filled spaces with billions of bacilli)
- Cavities communicate with bronchi — patient becomes highly contagious

*Primary TB vs. reactivation:*
| Feature | Primary TB | Reactivation TB |
|---|---|---|
| Location | Mid/lower lobes | Apices (apical and posterior segments) |
| Lymphadenopathy | Hilar/mediastinal (frequent) | Infrequent |
| Cavities | Infrequent | Frequent |
| AFB smear | Frequently negative | Frequently positive |
| Contagiousness | Low | High |

**Advanced diagnostics:**

*Xpert MTB/RIF Ultra (second generation):*
- Greater sensitivity than original Xpert MTB/RIF (especially in HIV and paucibacillary TB)
- Detects rpoB gene mutations (rifampin resistance) in < 2 hours
- "Trace" positive: intermediate category requiring clinical evaluation

*Line Probe Assays (LPA):*
- GenoType MTBDRplus: detects resistance to isoniazid (katG, inhA) and rifampin (rpoB)
- GenoType MTBDRsl: detects resistance to fluoroquinolones (gyrA, gyrB) and aminoglycosides (rrs)
- Rapid (5 hours), but requires AFB-positive sample or culture

*Other diagnostics:*
- Adenosine deaminase (ADA): elevated in pleural TB (> 40 U/L), pericardial and meningeal
- Culture with phenotypic susceptibility testing: still essential for complete resistance profiling
- Histopathology: caseating granulomas with Langhans cells — suggests TB but not pathognomonic

**Extrapulmonary TB (15-20% of cases, more common in HIV):**
- TB lymphadenitis: most common extrapulmonary form
- Pleural TB: pleuritic pain, lymphocytic exudative effusion, elevated ADA
- TB meningitis: subacute meningitis, lymphocytic CSF with low glucose, high mortality
- Miliary TB: hematogenous dissemination, "millet seed" radiographic pattern (small diffuse nodules)
- Bone TB (Pott's disease): spondylodiscitis of thoracic spine, paravertebral abscess
- Genitourinary TB: sterile pyuria, hematuria, infertility

**Multidrug-resistant TB (MDR-TB):**
- Definition: resistance to at least isoniazid AND rifampin
- Prevalence: ~500,000 new cases/year (WHO)
- Treatment: 9-20 month regimens with second-line drugs
- BPaL regimen: Bedaquiline + Pretomanid + Linezolid (approved for XDR-TB and MDR-TB without options)
- Significantly higher mortality than drug-susceptible TB

**Extensively drug-resistant TB (XDR-TB):**
- Updated definition (WHO 2021): MDR-TB + resistance to fluoroquinolones + at least one of bedaquiline or linezolid
- Very limited therapeutic options
- Mortality > 50% in many settings`,
      keyTerms: [
        { term: 'Acidos micolicos / Mycolic acids', definition: 'Cadenas de acidos grasos de 60-90 carbonos en la pared celular de Mtb; responsables de la acido-alcohol resistencia, resistencia a desecacion y muchas propiedades de virulencia. | 60-90 carbon fatty acid chains in the Mtb cell wall; responsible for acid-fastness, desiccation resistance, and many virulence properties.' },
        { term: 'Granuloma caseoso / Caseous granuloma', definition: 'Estructura inmune organizada con centro de necrosis caseosa, anillo de macrofagos epitelioides y celulas gigantes de Langhans, y periferia de linfocitos; la lesion patologica caracteristica de la TB. | Organized immune structure with center of caseous necrosis, ring of epithelioid macrophages and Langhans giant cells, and periphery of lymphocytes; the characteristic pathological lesion of TB.' },
        { term: 'MDR-TB / TB multidrogoresistente', definition: 'Tuberculosis resistente al menos a isoniazida Y rifampicina; requiere tratamiento prolongado con farmacos de segunda linea y tiene peor pronostico. | Tuberculosis resistant to at least isoniazid AND rifampin; requires prolonged treatment with second-line drugs and has worse prognosis.' },
        { term: 'BPaL', definition: 'Regimen revolucionario para TB-XDR: Bedaquilina (inhibidor de ATP sintasa), Pretomanid (nitroimidazol), Linezolid (inhibidor de sintesis proteica); alta eficacia en ensayos clinicos. | Revolutionary regimen for XDR-TB: Bedaquiline (ATP synthase inhibitor), Pretomanid (nitroimidazole), Linezolid (protein synthesis inhibitor); high efficacy in clinical trials.' },
        { term: 'Factor cuerda / Cord factor', definition: 'Trehalosa dimicolato: glicolipido de la superficie de Mtb que induce la formacion de granulomas, inhibe la migracion de leucocitos y contribuye a la virulencia. | Trehalose dimycolate: Mtb surface glycolipid that induces granuloma formation, inhibits leukocyte migration, and contributes to virulence.' },
        { term: 'Xpert MTB/RIF Ultra', definition: 'PCR automatizada de segunda generacion con sensibilidad mejorada para detectar Mtb y resistencia a rifampicina; prueba diagnostica inicial recomendada por la OMS. | Second-generation automated PCR with improved sensitivity for detecting Mtb and rifampin resistance; WHO-recommended initial diagnostic test.' },
        { term: 'ADA / Adenosin deaminasa', definition: 'Enzima elevada en fluidos serosos (pleural, pericardico, LCR) con TB; > 40 U/L en liquido pleural tiene alta sensibilidad para TB pleural. | Enzyme elevated in serous fluids (pleural, pericardial, CSF) with TB; > 40 U/L in pleural fluid has high sensitivity for pleural TB.' }
      ],
      clinicalNotes: `**Notas clinicas:**
- Antes de iniciar anti-TNF (infliximab, adalimumab, etanercept), SIEMPRE realizar cribado de TB latente con IGRA o PPD — la reactivacion bajo anti-TNF puede ser fulminante
- En TB meningea, agregar dexametasona al regimen RHZE — demostrado reducir mortalidad (ensayo Thwaites)
- La TB miliar puede presentarse con pancitopenia (afectacion de medula osea) y debe incluirse en el diferencial de fiebre de origen desconocido con patron miliar
- El complejo primario de Ghon (foco de Ghon + ganglios linfaticos calcificados) en radiografia indica TB primaria previa curada
- Monitorizar funcion hepatica (AST/ALT) al inicio y mensualmente durante los primeros 2 meses; si transaminasas > 3x LSN con sintomas o > 5x sin sintomas, suspender hepatotoxicos
- La isoniazida es acetilada por NAT2: acetiladores rapidos pueden tener niveles subterapeuticos; acetiladores lentos mayor riesgo de hepatotoxicidad
- En VIH + TB, iniciar antiretrovirales 2-8 semanas despues de RHZE (riesgo de sindrome inflamatorio de reconstitución inmune — IRIS)

**Clinical notes:**
- Before starting anti-TNF (infliximab, adalimumab, etanercept), ALWAYS screen for latent TB with IGRA or PPD — reactivation under anti-TNF can be fulminant
- In TB meningitis, add dexamethasone to the RHZE regimen — demonstrated mortality reduction (Thwaites trial)
- Miliary TB can present with pancytopenia (bone marrow involvement) and should be included in the differential of fever of unknown origin with miliary pattern
- Ghon complex (Ghon focus + calcified lymph nodes) on X-ray indicates prior healed primary TB
- Monitor liver function (AST/ALT) at baseline and monthly during first 2 months; if transaminases > 3x ULN with symptoms or > 5x without symptoms, discontinue hepatotoxic agents
- Isoniazid is acetylated by NAT2: rapid acetylators may have subtherapeutic levels; slow acetylators have higher hepatotoxicity risk
- In HIV + TB, start antiretrovirals 2-8 weeks after RHZE (risk of immune reconstitution inflammatory syndrome — IRIS)`
    },
    4: {
      level: 4,
      summary: 'La tuberculosis es una enfermedad paradigmatica de inmunologia aplicada, donde la interaccion entre Mtb y el sistema inmune celular (eje IL-12/IFN-gamma, macrofagos activados, formacion de granulomas) determina el espectro clinico. Los avances en diagnosticos moleculares (WGS, Xpert Ultra), regimenes acortados (BPaL, TBTC Study 31) y farmacologia de segunda linea estan transformando el manejo de TB resistente. | Tuberculosis is a paradigmatic disease of applied immunology, where the interaction between Mtb and cellular immunity (IL-12/IFN-gamma axis, activated macrophages, granuloma formation) determines the clinical spectrum. Advances in molecular diagnostics (WGS, Xpert Ultra), shortened regimens (BPaL, TBTC Study 31), and second-line pharmacology are transforming resistant TB management.',
      explanation: `## Explicacion

**Mecanismos moleculares de evasion inmune de Mtb:**

*Supervivencia intracelular en macrofagos:*
- Bloqueo de fusion fagosoma-lisosoma: Mtb secreta proteinas (EsxH/EsxG del sistema ESX-3) que interfieren con la maquinaria ESCRT del huesped
- Inhibicion de acidificacion fagosomal: Mtb produce PtpA (tirosina fosfatasa) que excluye la ATPasa vacuolar
- Escape al citosol: el sistema de secrecion ESX-1 (que incluye ESAT-6 y CFP-10) perfora la membrana fagosomal
- Mtb en el citosol activa la via cGAS-STING, induciendo respuesta de interferones tipo I (paradojicamente beneficiosa para Mtb)
- Inhibicion de autofagia: Mtb produce Eis (enhanced intracellular survival) que acetila proteinas de autofagia
- Modulacion de muerte celular: Mtb induce necrosis (que libera bacterias) en vez de apoptosis (que las contendria)

*Manipulacion de la respuesta inmune:*
- LAM (lipoarabinomanano) inhibe la activacion de macrofagos mediada por IFN-gamma
- PDIM (dimetil ftiocerol) protege contra ROS y NO dentro del macrofago
- Mtb induce IL-10 y TGF-beta (citoquinas antiinflamatorias) que limitan la respuesta Th1
- Reprogramacion metabolica del macrofago: Mtb altera el metabolismo del macrofago hacia vias que favorecen su supervivencia (via metilcitrato, ciclo del glioxilato)

**Inmunologia del granuloma a nivel molecular:**

*Estructura y funcion:*
- El granuloma NO es simplemente una barrera pasiva: es un microambiente dinamico
- Heterogeneidad de macrofagos: macrofagos M1 (proinflamatorios, bactericidas) y M2 (antiinflamatorios, permisivos)
- Celulas T reguladoras (Treg) en la periferia del granuloma limitan la respuesta inmune — beneficio para Mtb
- Hipoxia en el centro del granuloma: activa el regulon DosR de Mtb (genes de dormancia)
- Neovascularizacion: el granuloma induce angiogenesis — Mtb puede manipular esto para obtener nutrientes

*La decision: contencion vs. progresion:*
- IFN-gamma suficiente + TNF-alfa equilibrado = granuloma estable = TB latente
- Deficit de IFN-gamma (VIH) o TNF-alfa (anti-TNF) = granuloma inestable = reactivacion
- Exceso de TNF-alfa = necrosis caseosa extensa = cavitacion = TB activa cavitaria

**Farmacologia avanzada de antituberculosos:**

*Farmacos de primera linea — mecanismos detallados:*
- Isoniazida (H): profarmaco activado por KatG (catalasa-peroxidasa); el radical isonicotinoil acido inhibe InhA (enoil-ACP reductasa), bloqueando sintesis de acidos micolicos
  - Resistencia: mutaciones en katG (alta nivel) o promotor inhA (bajo nivel)
  - Bactericida contra bacilos metabolicamente activos
- Rifampicina (R): inhibe la RNA polimerasa (subunidad beta, gen rpoB)
  - Bactericida, mata "persisters" esterilizante
  - Resistencia: mutaciones en RRDR (Rifampin Resistance Determining Region) del gen rpoB
  - Potente inductor de CYP3A4, CYP2C9: reduce niveles de ARV, anticoagulantes, anticonceptivos
- Pirazinamida (Z): profarmaco activado por pncA (pirazinamidasa); acido pirazinoico disrumpe potencial de membrana y metabolismo energetico
  - Unica actividad contra bacilos en ambientes acidos (dentro de fagosomas y caseum)
  - Actividad "esterilizante" que permite acortar tratamiento a 6 meses
  - Resistencia: mutaciones en pncA (muy diversas)
- Etambutol (E): inhibe arabinosiltransferasa EmbB, bloqueando sintesis de arabinogalactano
  - Bacteriostatico
  - Se agrega para prevenir resistencia emergente; se retira cuando antibiograma confirma susceptibilidad

*Farmacos clave de segunda linea y nuevos:*
- Bedaquilina: inhibidor de ATP sintasa (subunidad c del complejo F0F1)
  - Primera nueva clase de antituberculosos en 40 anos
  - Vida media: 5.5 meses; prolongacion de QTc como efecto adverso
- Pretomanid: nitroimidazol; actividad contra bacilos replicantes y no replicantes
  - Mecanismo dual: inhibe sintesis de acidos micolicos + dona NO intracelular en condiciones anaerobicas
- Linezolid: inhibidor de sintesis proteica (subunidad 23S ribosomal)
  - Toxicidad significativa a largo plazo: mielosupresion (60-70%), neuropatia periferica (30%)
  - Dosis en TB: 600 mg/dia (menor que en otras infecciones)
- Delamanid: otro nitroimidazol con actividad contra Mtb resistente
- Fluoroquinolonas (moxifloxacino, levofloxacino): pilares del tratamiento de MDR-TB
  - Resistencia: mutaciones en gyrA/gyrB

**Regimenes de tratamiento innovadores:**

*BPaL (TB-PRACTECAL, ZeNix):*
- Bedaquilina + Pretomanid + Linezolid (con o sin moxifloxacino)
- Duracion: 6-9 meses para MDR/XDR-TB (vs. 9-20 meses previos)
- Tasa de cura: 89-93% en TB-PRACTECAL
- Revolucionario para TB altamente resistente

*TBTC Study 31/ACTG A5349 (TB sensible):*
- Regimen de 4 meses con rifapentina + moxifloxacino + isoniazida + pirazinamida
- No inferior al regimen estandar de 6 meses
- Potencial para acortar el tratamiento estandar a nivel global

*1HP (TB latente):*
- Isoniazida + Rifapentina diaria x 1 mes
- Ultra-corto para TB latente
- Ensayo BRIEF TB: no inferior a 9 meses de isoniazida en VIH+

**Coinfeccion TB-VIH — manejo integrado:**
- Iniciar RHZE inmediatamente
- Iniciar ARV:
  - CD4 < 50: dentro de 2 semanas
  - CD4 >= 50: dentro de 8 semanas
- IRIS paradojico: empeoramiento clinico tras inicio de ARV (fiebre, linfadenopatia, nuevos infiltrados)
  - Ocurre en 10-40% de coinfeccion TB-VIH
  - Manejo: continuar TB tx + ARV, NSAIDs, corticosteroides si severo
- Interacciones rifampicina-ARV: usar efavirenz o dolutegravir a dosis doble (50 mg c/12h)

---
## Explanation

**Molecular mechanisms of Mtb immune evasion:**

*Intracellular survival in macrophages:*
- Blocking phagosome-lysosome fusion: Mtb secretes proteins (EsxH/EsxG from ESX-3 system) interfering with host ESCRT machinery
- Inhibition of phagosomal acidification: Mtb produces PtpA (tyrosine phosphatase) excluding vacuolar ATPase
- Escape to cytosol: ESX-1 secretion system (including ESAT-6 and CFP-10) perforates phagosomal membrane
- Mtb in cytosol activates cGAS-STING pathway, inducing type I interferon response (paradoxically beneficial for Mtb)
- Autophagy inhibition: Mtb produces Eis (enhanced intracellular survival) that acetylates autophagy proteins
- Cell death modulation: Mtb induces necrosis (releasing bacteria) instead of apoptosis (which would contain them)

*Immune response manipulation:*
- LAM (lipoarabinomannan) inhibits IFN-gamma-mediated macrophage activation
- PDIM (phthiocerol dimycocerosate) protects against ROS and NO within macrophage
- Mtb induces IL-10 and TGF-beta (anti-inflammatory cytokines) limiting Th1 response
- Macrophage metabolic reprogramming: Mtb alters macrophage metabolism toward pathways favoring its survival (methylcitrate pathway, glyoxylate cycle)

**Granuloma immunology at the molecular level:**

*Structure and function:*
- The granuloma is NOT simply a passive barrier: it is a dynamic microenvironment
- Macrophage heterogeneity: M1 macrophages (proinflammatory, bactericidal) and M2 (anti-inflammatory, permissive)
- Regulatory T cells (Treg) at granuloma periphery limit immune response — beneficial for Mtb
- Hypoxia at granuloma center: activates Mtb DosR regulon (dormancy genes)
- Neovascularization: granuloma induces angiogenesis — Mtb can manipulate this for nutrients

*The decision: containment vs. progression:*
- Sufficient IFN-gamma + balanced TNF-alpha = stable granuloma = latent TB
- IFN-gamma deficit (HIV) or TNF-alpha (anti-TNF) = unstable granuloma = reactivation
- Excess TNF-alpha = extensive caseous necrosis = cavitation = cavitary active TB

**Advanced pharmacology of anti-TB drugs:**

*First-line drugs — detailed mechanisms:*
- Isoniazid (H): prodrug activated by KatG (catalase-peroxidase); isonicotinic acid radical inhibits InhA (enoyl-ACP reductase), blocking mycolic acid synthesis
  - Resistance: katG mutations (high level) or inhA promoter (low level)
  - Bactericidal against metabolically active bacilli
- Rifampin (R): inhibits RNA polymerase (beta subunit, rpoB gene)
  - Bactericidal, kills "persisters" — sterilizing
  - Resistance: mutations in RRDR (Rifampin Resistance Determining Region) of rpoB gene
  - Potent CYP3A4, CYP2C9 inducer: reduces levels of ARVs, anticoagulants, contraceptives
- Pyrazinamide (Z): prodrug activated by pncA (pyrazinamidase); pyrazinoic acid disrupts membrane potential and energy metabolism
  - Unique activity against bacilli in acidic environments (within phagosomes and caseum)
  - "Sterilizing" activity allowing treatment shortening to 6 months
  - Resistance: pncA mutations (highly diverse)
- Ethambutol (E): inhibits arabinosyltransferase EmbB, blocking arabinogalactan synthesis
  - Bacteriostatic
  - Added to prevent emergent resistance; discontinued when susceptibility confirmed

*Key second-line and new drugs:*
- Bedaquiline: ATP synthase inhibitor (subunit c of F0F1 complex)
  - First new TB drug class in 40 years
  - Half-life: 5.5 months; QTc prolongation as adverse effect
- Pretomanid: nitroimidazole; activity against replicating and non-replicating bacilli
  - Dual mechanism: inhibits mycolic acid synthesis + donates intracellular NO under anaerobic conditions
- Linezolid: protein synthesis inhibitor (23S ribosomal subunit)
  - Significant long-term toxicity: myelosuppression (60-70%), peripheral neuropathy (30%)
  - TB dose: 600 mg/day (lower than in other infections)
- Delamanid: another nitroimidazole with activity against resistant Mtb
- Fluoroquinolones (moxifloxacin, levofloxacin): pillars of MDR-TB treatment
  - Resistance: gyrA/gyrB mutations

**Innovative treatment regimens:**

*BPaL (TB-PRACTECAL, ZeNix):*
- Bedaquiline + Pretomanid + Linezolid (with or without moxifloxacin)
- Duration: 6-9 months for MDR/XDR-TB (vs. 9-20 months previously)
- Cure rate: 89-93% in TB-PRACTECAL
- Revolutionary for highly resistant TB

*TBTC Study 31/ACTG A5349 (drug-susceptible TB):*
- 4-month regimen with rifapentine + moxifloxacin + isoniazid + pyrazinamide
- Non-inferior to standard 6-month regimen
- Potential to shorten standard treatment globally

*1HP (latent TB):*
- Isoniazid + Rifapentine daily x 1 month
- Ultra-short for latent TB
- BRIEF TB trial: non-inferior to 9 months of isoniazid in HIV+

**TB-HIV coinfection — integrated management:**
- Start RHZE immediately
- Start ART:
  - CD4 < 50: within 2 weeks
  - CD4 >= 50: within 8 weeks
- Paradoxical IRIS: clinical worsening after ART initiation (fever, lymphadenopathy, new infiltrates)
  - Occurs in 10-40% of TB-HIV coinfection
  - Management: continue TB tx + ART, NSAIDs, corticosteroids if severe
- Rifampin-ART interactions: use efavirenz or dolutegravir at double dose (50 mg q12h)`,
      keyTerms: [
        { term: 'Sistema ESX-1 / ESX-1 secretion system', definition: 'Sistema de secrecion tipo VII de Mtb que exporta ESAT-6 y CFP-10, perforando la membrana fagosomal y permitiendo el escape bacteriano al citosol; esencial para la virulencia. | Type VII secretion system of Mtb exporting ESAT-6 and CFP-10, perforating the phagosomal membrane and allowing bacterial escape to cytosol; essential for virulence.' },
        { term: 'Regulon DosR / DosR regulon', definition: 'Conjunto de ~50 genes de Mtb activados en condiciones de hipoxia y oxido nitrico; permiten la transicion a un estado de dormancia metabolica dentro del granuloma. | Set of ~50 Mtb genes activated under hypoxia and nitric oxide conditions; allow transition to a state of metabolic dormancy within the granuloma.' },
        { term: 'KatG', definition: 'Catalasa-peroxidasa de Mtb que activa la isoniazida (profarmaco); mutaciones en katG son la causa mas comun de resistencia de alto nivel a isoniazida. | Mtb catalase-peroxidase that activates isoniazid (prodrug); katG mutations are the most common cause of high-level isoniazid resistance.' },
        { term: 'RRDR / Region Determinante de Resistencia a Rifampicina', definition: 'Region de 81 pares de bases del gen rpoB donde > 95% de mutaciones que confieren resistencia a rifampicina estan localizadas; objetivo de las pruebas moleculares rapidas. | 81 base-pair region of the rpoB gene where > 95% of mutations conferring rifampin resistance are located; target of rapid molecular tests.' },
        { term: 'IRIS / Sindrome Inflamatorio de Reconstitucion Inmune', definition: 'Empeoramiento paradojico de TB al iniciar antiretrovirales en pacientes con VIH; resultado de la restauracion inmune que desenmascara o exacerba la inflamacion contra Mtb. | Paradoxical worsening of TB upon starting antiretrovirals in HIV patients; result of immune restoration that unmasks or exacerbates inflammation against Mtb.' },
        { term: 'Bedaquilina / Bedaquiline', definition: 'Inhibidor de la ATP sintasa micobacteriana (subunidad c); primera nueva clase de farmaco antituberculoso en 40 anos; pilar del regimen BPaL para MDR/XDR-TB. | Mycobacterial ATP synthase inhibitor (c subunit); first new TB drug class in 40 years; pillar of the BPaL regimen for MDR/XDR-TB.' },
        { term: 'Pretomanid', definition: 'Nitroimidazol biciclico con mecanismo dual: inhibe sintesis de acidos micolicos en condiciones aerobicas y dona oxido nitrico en condiciones anaerobicas; activo contra bacilos replicantes y no replicantes. | Bicyclic nitroimidazole with dual mechanism: inhibits mycolic acid synthesis under aerobic conditions and donates nitric oxide under anaerobic conditions; active against replicating and non-replicating bacilli.' }
      ],
      clinicalNotes: `**Notas clinicas avanzadas:**
- Bedaquilina prolonga el QTc: monitorizar ECG basal, a las 2, 12 y 24 semanas; suspender si QTcF > 500 ms; precaucion con otros farmacos que prolongan QTc
- Linezolid en TB: monitorizar hemograma semanal las primeras 8 semanas, luego mensual; considerar reduccion a 300 mg/dia si mielosupresion o neuropatia
- La resistencia a rifampicina detectada por GeneXpert puede ser falso positivo en areas de baja prevalencia de MDR-TB — confirmar con cultivo y antibiograma fenotipico
- "Pre-XDR TB": MDR-TB con resistencia adicional a fluoroquinolonas; manejo con BPaL
- En TB meningea, el tratamiento se extiende a 9-12 meses; ajustar penetracion de farmacos a LCR: isoniazida y pirazinamida penetran bien; rifampicina y etambutol pobremente
- La TB pericardica puede causar pericarditis constrictiva; los corticosteroides adyuvantes son controversiales (ensayo IMPI: no beneficio claro)
- Embarazo y TB: RHZE es seguro; estreptomicina contraindicada (ototoxicidad fetal); evitar pirazinamida solo si la OMS local no la recomienda

**Advanced clinical notes:**
- Bedaquiline prolongs QTc: monitor ECG at baseline, 2, 12, and 24 weeks; discontinue if QTcF > 500 ms; caution with other QTc-prolonging drugs
- Linezolid in TB: monitor CBC weekly for first 8 weeks, then monthly; consider dose reduction to 300 mg/day if myelosuppression or neuropathy
- Rifampin resistance detected by GeneXpert may be false positive in low MDR-TB prevalence areas — confirm with culture and phenotypic susceptibility
- "Pre-XDR TB": MDR-TB with additional fluoroquinolone resistance; manage with BPaL
- In TB meningitis, treatment extends to 9-12 months; adjust for CSF drug penetration: isoniazid and pyrazinamide penetrate well; rifampin and ethambutol poorly
- TB pericarditis can cause constrictive pericarditis; adjunctive corticosteroids are controversial (IMPI trial: no clear benefit)
- Pregnancy and TB: RHZE is safe; streptomycin contraindicated (fetal ototoxicity); avoid pyrazinamide only if local WHO guidelines do not recommend it`
    },
    5: {
      level: 5,
      summary: 'La tuberculosis representa un modelo de cronicidad infecciosa donde las interacciones a nivel genomico entre las poblaciones heterogeneas de Mtb (replicantes, persistentes, dormantes) y las respuestas inmunes compartimentalizadas del huesped determinan el espectro clinico. La era post-genomica esta habilitando secuenciacion del genoma completo para prediccion de resistencia, biomarcadores transcriptomicos para tratamiento de precision, vacunas de nueva generacion, y la promesa de regimenes pan-TB universalmente efectivos de corta duracion. | Tuberculosis represents a model of infectious chronicity where genomic-level interactions between heterogeneous Mtb populations (replicating, persisting, dormant) and compartmentalized host immune responses determine the clinical spectrum. The post-genomic era is enabling whole-genome sequencing for resistance prediction, transcriptomic biomarkers for precision treatment, next-generation vaccines, and the promise of universally effective short-duration pan-TB regimens.',
      explanation: `## Explicacion

**Biologia de persistencia de Mtb:**

*Poblaciones bacterianas heterogeneas:*
- Mtb no existe como una poblacion homogenea: coexisten subpoblaciones con diferente estado metabolico
- Bacilos replicantes activos: objetivo de isoniazida y rifampicina
- Bacilos de crecimiento lento en ambientes acidos: objetivo de pirazinamida
- Bacilos "persistentes" (persisters): metabolicamente activos pero tolerantes a antibioticos
  - No son geneticamente resistentes — el mecanismo es fenotipico (tolerancia)
  - Contribuyen a la necesidad de tratamiento prolongado (6+ meses)
- Bacilos dormantes (DosR-regulados): minima actividad metabolica, dentro del caseum hipoxido
  - Solo pretomanid tiene actividad demostrada contra bacilos en condiciones estrictamente anaerobicas

*Mecanismos moleculares de persistencia:*
- Sistemas toxina-antitoxina (TA): > 80 sistemas TA en el genoma de Mtb; las toxinas frenan el crecimiento bacteriano, induciendo un estado de quasi-dormancia
- Lipid body accumulation: Mtb acumula triacilgliceroles (TAG) como reserva energetica durante la dormancia
- Fenotipos "lipid-loaded" (espumosos): macrofagos cargados de lipidos en el granuloma proporcionan acidos grasos como fuente de carbono para Mtb
- Resuscitation-promoting factors (Rpf): muramidases que reactivan bacilos dormantes; posibles dianas terapeuticas

**Genomica aplicada y medicina de precision en TB:**

*Secuenciacion del genoma completo (WGS):*
- WGS directamente de muestra clinica: identificacion de especie, linaje, y todos los genes de resistencia en un solo ensayo
- Catalogo de mutaciones de resistencia: WHO 2021 mutation catalogue con > 300 mutaciones catalogadas para 13 farmacos
- Prediccion genotipica de resistencia: concordancia > 95% con fenotipico para rifampicina e isoniazida; menor para otros farmacos
- WGS para epidemiologia: reconstruccion de cadenas de transmision con resolucion de nucleotido unico (SNP)
- Turnaround time: 5-7 dias desde cultivo, 1-3 dias de secuenciacion

*Biomarcadores transcriptomicos:*
- Firmas de RNA del huesped: perfiles de expresion genica en sangre que distinguen TB activa de latente
  - Firma de Zak (16 genes): predice progresion de TB latente a activa hasta 12 meses antes de sintomas
  - RISK11: firma simplificada de 11 genes en investigacion como tamizaje poblacional
  - Potencial: identificar pacientes con TB latente que realmente progresan (5-10%) para tratamiento selectivo
- Biomarcadores de respuesta al tratamiento:
  - Mbatch: firma transcriptomica que predice respuesta favorable o fallo terapeutico
  - Potencial para personalizar duracion del tratamiento

*Farmacogomica:*
- NAT2 y metabolismo de isoniazida: genotipo determina velocidad de acetilacion
  - Acetiladores lentos: mayor riesgo de hepatotoxicidad
  - Acetiladores rapidos: posible necesidad de dosis mas altas
- CYP2B6 y metabolismo de efavirenz en coinfeccion TB-VIH: polimorfismos afectan niveles y toxicidad

**Vacunas de nueva generacion:**

*Limitaciones de BCG:*
- Eficacia altamente variable contra TB pulmonar en adultos (0-80%)
- Protege contra TB miliar y meningea en ninos
- No previene infeccion ni reactivacion de TB latente

*Candidatos en desarrollo clinico:*
- M72/AS01E (GSK): vacuna de subunidad proteica + adyuvante AS01
  - Ensayo fase 2b: 50% eficacia para prevenir progresion de TB latente a activa
  - Potencialmente la primera nueva vacuna de TB en un siglo
  - Fase 3 en curso
- BCG revacunacion: ensayo de Sudafrica mostro 45% proteccion contra infeccion sostenida en adolescentes
- MTBVAC: cepa viva atenuada de Mtb humana (no BCG que es M. bovis)
  - Potencialmente mas inmunogenica que BCG al presentar antigenos humanos
- VPM1002: BCG recombinante con listeriolisina O para mejorar procesamiento antigenico
- ID93 + GLA-SE: vacuna de subunidad multivalente, ensayos fase 2
- H56:IC31: vacuna de subunidad que incluye antigenos de dormancia (Ag85B, ESAT-6, Rv2660c)

*Estrategias vacunales innovadoras:*
- BCG intravenosa: estudios en primates no humanos mostraron proteccion esterilizante (sin precedentes) — ensayo en humanos en planificacion
- CMV como vector viral: vector de citomegalovirus expresando antigenos de Mtb; proteccion potente en primates
- mRNA vaccines: plataformas de mRNA (BioNTech BNT164) entraron en ensayos fase 1 para TB

**Regimenes pan-TB universales — el horizonte:**

*Concepto de pan-TB:*
- Un regimen efectivo contra TB sensible Y resistente (incluyendo MDR/XDR)
- Eliminaria la necesidad de pruebas de susceptibilidad antes del tratamiento
- BPaL se acerca a este concepto para TB resistente

*Regimenes en investigacion:*
- STAND: pretomanid + moxifloxacino + pirazinamida (TB sensible en 4 meses)
- SimpliciTB: pretomanid + moxifloxacino + bedaquilina + pirazinamida (pan-TB en 4 meses)
- EndTB: multiples combinaciones de nuevos farmacos en ensayos adaptativos
- TRUNCATE-TB: ensayo de estrategia de tratamiento acortado a 2 meses con monitoreo intensivo y retratamiento si recaida

**Desafios de eliminacion de TB:**

*Estrategia End TB de la OMS (meta 2035):*
- Reduccion de 95% en muertes por TB (vs. 2015)
- Reduccion de 90% en incidencia
- Cero familias afectadas por costos catastroficos por TB
- Pilares: atencion centrada en el paciente, politicas de apoyo, investigacion e innovacion

*Barreras para la eliminacion:*
- El enorme reservorio de TB latente (2 billones de personas)
- Resistencia antimicrobiana creciente
- Impacto del COVID-19 en programas de TB (retroceso de anos de progreso)
- Estigma asociado a la TB
- Financiamiento insuficiente para investigacion y programas de control
- Necesidad de diagnosticos point-of-care verdaderos (prueba de triaje basada en biomarcadores)

---
## Explanation

**Mtb persistence biology:**

*Heterogeneous bacterial populations:*
- Mtb does not exist as a homogeneous population: subpopulations with different metabolic states coexist
- Actively replicating bacilli: target of isoniazid and rifampin
- Slow-growing bacilli in acidic environments: target of pyrazinamide
- "Persister" bacilli: metabolically active but antibiotic-tolerant
  - Not genetically resistant — mechanism is phenotypic (tolerance)
  - Contribute to the need for prolonged treatment (6+ months)
- Dormant bacilli (DosR-regulated): minimal metabolic activity, within hypoxic caseum
  - Only pretomanid has demonstrated activity against bacilli under strictly anaerobic conditions

*Molecular mechanisms of persistence:*
- Toxin-antitoxin (TA) systems: > 80 TA systems in Mtb genome; toxins slow bacterial growth, inducing a quasi-dormancy state
- Lipid body accumulation: Mtb accumulates triacylglycerols (TAG) as energy reserve during dormancy
- "Lipid-loaded" (foamy) phenotypes: lipid-laden macrophages in the granuloma provide fatty acids as carbon source for Mtb
- Resuscitation-promoting factors (Rpf): muramidases that reactivate dormant bacilli; potential therapeutic targets

**Applied genomics and precision medicine in TB:**

*Whole-genome sequencing (WGS):*
- WGS directly from clinical sample: species identification, lineage, and all resistance genes in a single assay
- Resistance mutation catalogue: WHO 2021 mutation catalogue with > 300 catalogued mutations for 13 drugs
- Genotypic resistance prediction: > 95% concordance with phenotypic for rifampin and isoniazid; lower for other drugs
- WGS for epidemiology: transmission chain reconstruction with single-nucleotide resolution (SNP)
- Turnaround time: 5-7 days from culture, 1-3 days sequencing

*Transcriptomic biomarkers:*
- Host RNA signatures: blood gene expression profiles distinguishing active from latent TB
  - Zak signature (16 genes): predicts progression from latent to active TB up to 12 months before symptoms
  - RISK11: simplified 11-gene signature under investigation for population screening
  - Potential: identify LTBI patients who will actually progress (5-10%) for selective treatment
- Treatment response biomarkers:
  - Mbatch: transcriptomic signature predicting favorable response or treatment failure
  - Potential to personalize treatment duration

*Pharmacogenomics:*
- NAT2 and isoniazid metabolism: genotype determines acetylation rate
  - Slow acetylators: higher hepatotoxicity risk
  - Rapid acetylators: possible need for higher doses
- CYP2B6 and efavirenz metabolism in TB-HIV coinfection: polymorphisms affect levels and toxicity

**Next-generation vaccines:**

*BCG limitations:*
- Highly variable efficacy against adult pulmonary TB (0-80%)
- Protects against miliary and meningeal TB in children
- Does not prevent infection or latent TB reactivation

*Candidates in clinical development:*
- M72/AS01E (GSK): protein subunit vaccine + AS01 adjuvant
  - Phase 2b trial: 50% efficacy for preventing latent to active TB progression
  - Potentially the first new TB vaccine in a century
  - Phase 3 ongoing
- BCG revaccination: South Africa trial showed 45% protection against sustained infection in adolescents
- MTBVAC: live attenuated human Mtb strain (not BCG which is M. bovis)
  - Potentially more immunogenic than BCG by presenting human antigens
- VPM1002: recombinant BCG with listeriolysin O to improve antigen processing
- ID93 + GLA-SE: multivalent subunit vaccine, phase 2 trials
- H56:IC31: subunit vaccine including dormancy antigens (Ag85B, ESAT-6, Rv2660c)

*Innovative vaccine strategies:*
- Intravenous BCG: non-human primate studies showed sterilizing protection (unprecedented) — human trial in planning
- CMV as viral vector: cytomegalovirus vector expressing Mtb antigens; potent protection in primates
- mRNA vaccines: mRNA platforms (BioNTech BNT164) entered phase 1 trials for TB

**Universal pan-TB regimens — the horizon:**

*Pan-TB concept:*
- A regimen effective against drug-susceptible AND resistant TB (including MDR/XDR)
- Would eliminate the need for susceptibility testing before treatment
- BPaL approaches this concept for resistant TB

*Regimens under investigation:*
- STAND: pretomanid + moxifloxacin + pyrazinamide (drug-susceptible TB in 4 months)
- SimpliciTB: pretomanid + moxifloxacin + bedaquiline + pyrazinamide (pan-TB in 4 months)
- EndTB: multiple new drug combinations in adaptive trials
- TRUNCATE-TB: shortened treatment strategy trial to 2 months with intensive monitoring and retreatment if relapse

**TB elimination challenges:**

*WHO End TB Strategy (2035 target):*
- 95% reduction in TB deaths (vs. 2015)
- 90% reduction in incidence
- Zero families facing catastrophic costs from TB
- Pillars: patient-centered care, supportive policies, research and innovation

*Barriers to elimination:*
- The enormous latent TB reservoir (2 billion people)
- Growing antimicrobial resistance
- COVID-19 impact on TB programs (years of progress setback)
- TB-associated stigma
- Insufficient funding for research and control programs
- Need for true point-of-care diagnostics (biomarker-based triage test)`,
      keyTerms: [
        { term: 'Sistemas toxina-antitoxina (TA) / Toxin-antitoxin systems', definition: 'Mas de 80 modulos genomicos en Mtb donde la toxina frena el crecimiento bacteriano; contribuyen a la formacion de bacterias persistentes fenotipicamente tolerantes a antibioticos. | Over 80 genomic modules in Mtb where the toxin slows bacterial growth; contribute to formation of persister bacteria phenotypically tolerant to antibiotics.' },
        { term: 'Firma de Zak / Zak signature', definition: 'Perfil de expresion de 16 genes del huesped en sangre periferica que puede predecir la progresion de TB latente a activa hasta 12 meses antes de la aparicion de sintomas; potencial herramienta para tratamiento preventivo dirigido. | 16-gene host expression profile in peripheral blood that can predict progression from latent to active TB up to 12 months before symptom onset; potential tool for targeted preventive treatment.' },
        { term: 'M72/AS01E', definition: 'Vacuna de subunidad proteica (antigeno M72 + adyuvante AS01) que demostro 50% de eficacia para prevenir TB activa en personas con TB latente; potencialmente la primera nueva vacuna de TB en un siglo, actualmente en fase 3. | Protein subunit vaccine (M72 antigen + AS01 adjuvant) demonstrating 50% efficacy in preventing active TB in people with latent TB; potentially the first new TB vaccine in a century, currently in phase 3.' },
        { term: 'Pan-TB / Regimen pan-TB', definition: 'Concepto de un regimen antimicrobiano efectivo contra todos los patrones de resistencia de Mtb, eliminando la necesidad de pruebas de susceptibilidad previas; BPaL y SimpliciTB se acercan a este paradigma. | Concept of an antimicrobial regimen effective against all Mtb resistance patterns, eliminating the need for prior susceptibility testing; BPaL and SimpliciTB approach this paradigm.' },
        { term: 'WGS / Secuenciacion del genoma completo', definition: 'Secuenciacion de todo el genoma de Mtb que permite identificacion de especie, linaje filogenetico, todos los genes de resistencia conocidos y reconstruccion de cadenas de transmision en un solo ensayo. | Sequencing of the entire Mtb genome enabling species identification, phylogenetic lineage, all known resistance genes, and transmission chain reconstruction in a single assay.' },
        { term: 'Resuscitation-promoting factors (Rpf)', definition: 'Muramidases producidas por Mtb que degradan la pared celular de bacilos dormantes, promoviendo su salida de dormancia; posibles dianas para prevenir la reactivacion de TB latente. | Muramidases produced by Mtb that degrade dormant bacilli cell wall, promoting their exit from dormancy; potential targets to prevent latent TB reactivation.' },
        { term: 'SimpliciTB', definition: 'Regimen en investigacion (pretomanid + moxifloxacino + bedaquilina + pirazinamida) con el potencial de ser un regimen pan-TB universal de 4 meses, efectivo contra TB sensible y resistente. | Investigational regimen (pretomanid + moxifloxacin + bedaquiline + pyrazinamide) with the potential to be a universal 4-month pan-TB regimen, effective against susceptible and resistant TB.' }
      ],
      clinicalNotes: `**Notas clinicas de nivel experto:**

*Controversias y desarrollos recientes:*
- El ensayo TBTC Study 31 demostro no inferioridad de un regimen de 4 meses (rifapentina + moxifloxacino) vs. 6 meses estandar para TB sensible — potencial para cambiar la practica global
- La BCG intravenosa en primates no humanos mostro proteccion esterilizante sin precedentes: > 90% de animales sin Mtb detectable; ensayo en humanos en preparacion
- La WGS esta reemplazando las pruebas fenotipicas de susceptibilidad en centros de referencia; catalogo OMS de mutaciones (2a edicion) proporciona framework para interpretacion estandarizada
- Los "target regimen profiles" de la OMS definen los requisitos para futuros regimenes: pan-TB, <= 2 meses, <= 3 farmacos, actividad oral
- La TB en la era del COVID-19: caida de notificaciones, interrupciones en suministro, exceso de mortalidad por TB no diagnosticada
- Ensayo STREAM stage 2 demostro que un regimen oral de 9 meses para MDR-TB es no inferior al regimen inyectable largo

*Perlas avanzadas:*
- Paradoja del granuloma: los granulomas pueden beneficiar tanto al huesped (contencion) como al patogeno (proteccion contra inmunidad, ambiente para dormancia)
- Las estatinas como adyuvantes en TB: modulan la autofagia y la formacion de cuerpos lipidicos; ensayos en fase temprana
- Host-directed therapies (HDT): imatinib (activacion de autofagia), metformina (mejora eliminacion bacteriana por macrofagos), vitamina D (induce catelicidina LL-37) — todas en investigacion como adyuvantes
- La eliminacion de TB requiere tanto herramientas nuevas (vacunas, diagnosticos point-of-care, regimenes cortos) como implementacion universal de las existentes

**Expert-level clinical notes:**

*Controversies and recent developments:*
- TBTC Study 31 demonstrated non-inferiority of a 4-month regimen (rifapentine + moxifloxacin) vs. standard 6 months for drug-susceptible TB — potential to change global practice
- Intravenous BCG in non-human primates showed unprecedented sterilizing protection: > 90% of animals with no detectable Mtb; human trial in preparation
- WGS is replacing phenotypic susceptibility testing at reference centers; WHO mutation catalogue (2nd edition) provides framework for standardized interpretation
- WHO "target regimen profiles" define requirements for future regimens: pan-TB, <= 2 months, <= 3 drugs, oral activity
- TB in the COVID-19 era: notification decline, supply interruptions, excess mortality from undiagnosed TB
- STREAM stage 2 trial demonstrated that a 9-month all-oral MDR-TB regimen is non-inferior to the longer injectable regimen

*Advanced pearls:*
- Granuloma paradox: granulomas can benefit both host (containment) and pathogen (protection from immunity, dormancy environment)
- Statins as TB adjuncts: modulate autophagy and lipid body formation; early-phase trials
- Host-directed therapies (HDT): imatinib (autophagy activation), metformin (improves macrophage bacterial killing), vitamin D (induces cathelicidin LL-37) — all under investigation as adjuncts
- TB elimination requires both new tools (vaccines, point-of-care diagnostics, short regimens) and universal implementation of existing ones`
    }
  },
  media: [],
  citations: [
    { id: 'ref-1', type: 'article', title: 'WHO consolidated guidelines on tuberculosis. Module 4: treatment - drug-susceptible tuberculosis treatment', authors: ['World Health Organization'], source: 'WHO, Geneva. 2022', license: 'CC BY 4.0' },
    { id: 'ref-2', type: 'article', title: 'Treatment of Highly Drug-Resistant Pulmonary Tuberculosis (TB-PRACTECAL)', authors: ['Nyang\'wa BT', 'Berry C', '";";";";";";"; "; et al.'], source: 'New England Journal of Medicine. 2022;387(1):58-68', license: 'CC BY 4.0' },
    { id: 'ref-3', type: 'article', title: 'Four-Month Rifapentine Regimen for Pulmonary Tuberculosis (TBTC Study 31/ACTG A5349)', authors: ['Dorman SE', 'Nahid P', 'Kurbatova EV', 'et al.'], source: 'New England Journal of Medicine. 2021;384(18):1705-1718', license: 'CC BY 4.0' },
    { id: 'ref-4', type: 'article', title: 'Prevention of M. tuberculosis Infection with H4:IC31 Vaccine or BCG Revaccination', authors: ['Nemes E', 'Geldenhuys H', 'Rozot V', 'et al.'], source: 'New England Journal of Medicine. 2018;379(2):138-149', license: 'CC BY 4.0' },
    { id: 'ref-5', type: 'textbook', title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases, 9th Edition', authors: ['Bennett JE', 'Dolin R', 'Blaser MJ'], source: 'Elsevier', chapter: 'Mycobacterium tuberculosis', license: 'CC BY 4.0' },
    { id: 'ref-6', type: 'article', title: 'Catalogue of mutations in Mycobacterium tuberculosis complex and their association with drug resistance', authors: ['World Health Organization'], source: 'WHO, Geneva. 2021', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-neumonia-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia - Differential diagnosis of pulmonary TB' },
    { targetId: 'condition-sepsis-septicemia', targetType: 'condition', relationship: 'related', label: 'Sepsis - Complication of disseminated/miliary TB' }
  ],
  tags: {
    systems: ['respiratory', 'immune', 'musculoskeletal', 'nervous', 'renal'],
    topics: ['infectious-disease', 'pulmonology', 'public-health', 'global-health'],
    keywords: ['tuberculosis', 'TB', 'Mycobacterium tuberculosis', 'TB latente', 'latent TB', 'MDR-TB', 'XDR-TB', 'BPaL', 'DOTS', 'granuloma', 'IGRA', 'PPD', 'GeneXpert', 'BCG', 'RHZE', 'isoniazida', 'rifampicina', 'bedaquilina'],
    clinicalRelevance: 'critical'
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
