/**
 * Enfermedades Exantematicas de la Infancia / Childhood Exanthems
 *
 * Contenido educativo bilingue (espanol primero) sobre las enfermedades
 * exantematicas clasicas de la infancia: sarampion, varicela, roseola,
 * enfermedad mano-pie-boca, rubeola, eritema infeccioso, y escarlatina.
 *
 * Bilingual educational content (Spanish-first) on classic childhood
 * exanthems: measles, varicella, roseola, hand-foot-mouth disease,
 * rubella, erythema infectiosum, and scarlet fever.
 */

import { EducationalContent } from '../types';

export const ENFERMEDADES_EXANTEMATICAS_CHILDHOOD_EXANTHEMS: EducationalContent = {
  id: 'pediatrics-enfermedades-exantematicas-exanthems',
  type: 'topic',
  name: 'Childhood Exanthems | Enfermedades Exantematicas de la Infancia',
  nameEs: 'Enfermedades Exantematicas de la Infancia',
  alternateNames: [
    'Sarpullidos de la infancia',
    'Childhood rashes',
    'Exantemas virales',
    'Viral exanthems',
    'Enfermedades eruptivas',
    'Eruptive diseases',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las enfermedades exantematicas son infecciones comunes en ninos que causan sarpullido (granitos o manchas en la piel) junto con fiebre. La mayoria mejoran solas, pero es importante saber cuando llevar al nino al doctor. Algunas se pueden prevenir con vacunas. | Childhood exanthems are common infections in children that cause rashes (bumps or spots on the skin) along with fever. Most get better on their own, but it is important to know when to take the child to the doctor. Some can be prevented with vaccines.',
      explanation: `## Explicacion Simple para Padres

Muchos ninos tienen enfermedades que causan **sarpullido** (granitos, manchas o ampollitas en la piel). La mayoria no son graves, pero algunas necesitan atencion medica rapida.

### Las enfermedades mas comunes con sarpullido

**1. Sarampion (Measles)**
- **Como se ve:** Manchas rojas planas que empiezan en la cara y bajan al cuerpo
- **Otros sintomas:** Fiebre MUY alta (>104F/40C), tos, ojos rojos, mucosidad nasal
- **Es grave?** SI puede ser grave. Puede causar neumonia y dano cerebral
- **Se previene?** SI, con la vacuna MMR
- **Importante:** Si su hijo NO esta vacunado y tiene estos sintomas, llame al doctor DE INMEDIATO

**2. Varicela (Chickenpox)**
- **Como se ve:** Ampollitas con agua que dan comezon, primero en el tronco, luego se extienden. Salen en "oleadas" (nuevas y viejas al mismo tiempo)
- **Otros sintomas:** Fiebre leve, malestar general
- **Es grave?** Generalmente no, pero puede complicarse en bebes, embarazadas y personas con defensas bajas
- **Se previene?** SI, con la vacuna de varicela

**3. Roseola (Roséola / Sexta enfermedad)**
- **Como se ve:** Manchas rosadas que aparecen DESPUES de que baja la fiebre (primero fiebre, luego sarpullido)
- **Otros sintomas:** Fiebre alta por 3-5 dias, luego el sarpullido cuando baja la fiebre
- **Es grave?** Generalmente NO. Mas comun entre los 6 meses y 2 anos
- **Se previene?** No hay vacuna, pero casi todos los ninos la tienen y se recuperan bien

**4. Enfermedad mano-pie-boca (Hand-Foot-Mouth Disease)**
- **Como se ve:** Ampollitas pequenas en las manos, pies, y dentro de la boca (tambien nalgas a veces)
- **Otros sintomas:** Fiebre, dolor de garganta, el nino no quiere comer por las llagas en la boca
- **Es grave?** Generalmente NO, pero las llagas en la boca son muy molestas
- **Se previene?** No hay vacuna. Se contagia por contacto y es muy comun en guarderias

**5. Quinta enfermedad (Erythema infectiosum / Parvovirus B19)**
- **Como se ve:** Mejillas muy rojas ("cara abofeteada"), luego sarpullido en forma de encaje en brazos y piernas
- **Otros sintomas:** Puede tener fiebre leve antes del sarpullido
- **Es grave?** Generalmente NO, excepto en embarazadas (puede afectar al bebe)

### Cuando llevar al nino al doctor URGENTE

- Fiebre muy alta (>104F/40C) que no baja con medicamento
- El nino se ve MUY enfermo, no responde, o esta muy somnoliento
- Sarpullido que NO desaparece al presionar (puede ser meningitis: EMERGENCIA)
- Dificultad para respirar
- No puede tragar liquidos por mas de 12 horas
- El sarpullido se extiende muy rapido o tiene ampollas grandes
- El nino tiene las defensas bajas (cancer, trasplante, etc.)

### Cuidados en casa

- Mantenga al nino comodo con Tylenol o ibuprofeno para la fiebre y el dolor
- Para la comezon de la varicela: bano de avena, locion de calamina
- Para las llagas de la boca: liquidos frios, paletas de hielo, evitar alimentos acidos
- Mantengalo hidratado: ofrezca liquidos frecuentemente
- El nino es contagioso: no lo lleve a la escuela hasta que el doctor diga que puede

---
## Simple Explanation for Parents

[The Spanish section above covers the five most common childhood exanthems with visual descriptions, severity assessment, vaccine prevention, emergency warning signs, and home care instructions.]`,
      keyTerms: [
        {
          term: 'sarpullido / exantema | rash / exanthem',
          definition:
            'Granitos, manchas rojas o ampollitas que salen en la piel. En los ninos, frecuentemente son causados por virus y mejoran solos. | Bumps, red spots, or blisters that appear on the skin. In children, they are frequently caused by viruses and get better on their own.',
          pronunciation: 'sar-poo-YEE-doh / ek-san-TEH-mah',
        },
        {
          term: 'contagioso | contagious',
          definition:
            'Que se puede pasar de una persona a otra. Los ninos con sarpullido generalmente son contagiosos y no deben ir a la escuela. | Can be passed from one person to another. Children with rashes are generally contagious and should not go to school.',
          pronunciation: 'kon-tah-hee-OH-soh',
        },
        {
          term: 'ampollita / vesicula | blister / vesicle',
          definition:
            'Un granito lleno de liquido claro, como una burbuja pequena en la piel. Se ve en varicela y enfermedad mano-pie-boca. | A bump filled with clear fluid, like a small bubble on the skin. Seen in chickenpox and hand-foot-mouth disease.',
          pronunciation: 'am-poh-YEE-tah / beh-SEE-koo-lah',
        },
        {
          term: 'vacuna MMR | MMR vaccine',
          definition:
            'Vacuna que protege contra tres enfermedades: sarampion, paperas y rubeola. Se da a los 12-15 meses y otra vez a los 4-6 anos. | Vaccine that protects against three diseases: measles, mumps, and rubella. Given at 12-15 months and again at 4-6 years.',
          pronunciation: 'bah-KOO-nah eme-eme-ERREH',
        },
      ],
      analogies: [
        'La varicela es como palomitas de maiz: las ampollitas van saliendo en oleadas, unas nuevas mientras otras ya se estan secando. | Chickenpox is like popcorn: the blisters come out in waves, some new ones while others are already drying up.',
        'La roseola tiene un patron tipico: primero la fiebre alta (como un volcan), y cuando el volcan se apaga, aparece el sarpullido. | Roseola has a typical pattern: first the high fever (like a volcano), and when the volcano goes out, the rash appears.',
      ],
      examples: [
        'Un nino de 15 meses tiene fiebre alta por 4 dias. Al dia 5, la fiebre baja de repente y aparece un sarpullido rosado en el cuerpo. Esto es tipico de roseola y no necesita tratamiento especial. | A 15-month-old has high fever for 4 days. On day 5, the fever suddenly drops and a pink rash appears on the body. This is typical of roseola and does not need special treatment.',
        'En la guarderia hay varios ninos con granitos en las manos y llagas en la boca. Esto es enfermedad mano-pie-boca, muy comun en guarderias. | At the daycare several children have bumps on their hands and sores in their mouths. This is hand-foot-mouth disease, very common in daycares.',
      ],
      patientCounselingPoints: [
        'Si su hijo tiene sarpullido con fiebre, llame a su doctor para saber si necesita verlo. | If your child has a rash with fever, call your doctor to know if they need to be seen.',
        'NO de aspirina a ninos con varicela o gripe: puede causar una complicacion grave llamada sindrome de Reye. | Do NOT give aspirin to children with chickenpox or flu: it can cause a serious complication called Reye syndrome.',
        'Para la comezon: bano tibio con avena, NO bano caliente. La locion de calamina tambien ayuda. | For itching: lukewarm bath with oatmeal, NOT hot bath. Calamine lotion also helps.',
        'Las vacunas MMR y varicela previenen dos de estas enfermedades. Mantener las vacunas al dia es la mejor proteccion. | MMR and varicella vaccines prevent two of these diseases. Keeping vaccines up to date is the best protection.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Los exantemas clasicos de la infancia se clasifican numericamente del 1 al 6 e incluyen sarampion, escarlatina, rubeola, enfermedad de Filatov-Dukes, eritema infeccioso y roseola. Cada uno tiene un patron de sarpullido, periodo de incubacion, y contagiosidad caracteristicos que permiten el diagnostico clinico. Se distinguen por la morfologia (maculopapular vs. vesicular), distribucion, progresion, y hallazgos asociados. | Classic childhood exanthems are numbered 1 through 6 and include measles, scarlet fever, rubella, Filatov-Dukes disease, erythema infectiosum, and roseola. Each has a characteristic rash pattern, incubation period, and contagiousness enabling clinical diagnosis. They are distinguished by morphology (maculopapular vs. vesicular), distribution, progression, and associated findings.',
      explanation: `## Explicacion Intermedia | Intermediate Explanation

### Clasificacion Numerica Clasica de los Exantemas | Classic Numerical Classification

| Numero | Enfermedad | Agente | Nombre Alternativo |
|--------|-----------|--------|-------------------|
| 1ra enfermedad | Sarampion | Virus del sarampion (Paramyxovirus) | Measles, rubeola (no confundir con rubella) |
| 2da enfermedad | Escarlatina | Streptococcus grupo A (toxina eritrogenica) | Scarlet fever |
| 3ra enfermedad | Rubeola | Virus de la rubeola (Togavirus) | German measles, sarampion aleman |
| 4ta enfermedad | Enfermedad de Filatov-Dukes | Debatida (probablemente ya no reconocida) | Cuarta enfermedad |
| 5ta enfermedad | Eritema infeccioso | Parvovirus B19 | Fifth disease, "cara abofeteada" |
| 6ta enfermedad | Roseola infantil | HHV-6 (herpesvirus humano 6) | Exantema subito, roseola infantum |

### Exantemas Principales: Detalles Clinicos

#### 1. Sarampion (Measles)

| Caracteristica | Detalle |
|---------------|---------|
| Agente | Virus del sarampion (genero Morbillivirus, familia Paramyxoviridae) |
| Transmision | Aerosol/gotas respiratorias. EXTREMADAMENTE contagioso (R0 = 12-18) |
| Incubacion | 10-14 dias |
| Prodromos | 2-4 dias de fiebre alta, tos, coriza, conjuntivitis (las 3 "C" en ingles: cough, coryza, conjunctivitis) |
| Enantema | Manchas de Koplik: puntos blancos azulados en mucosa bucal (patologo GNOMONICO: aparecen 2 dias antes del sarpullido) |
| Exantema | Maculopapular, eritematoso, empieza en cara/linea del cabello, desciende cefalocaudalmente en 3 dias |
| Descamacion | Fina, en el orden en que aparecio |
| Contagiosidad | Desde 4 dias antes hasta 4 dias despues del sarpullido |
| Complicaciones | Neumonia (causa #1 de muerte), encefalitis, otitis media, panencefalitis esclerosante subaguda (SSPE) |
| Prevencion | Vacuna MMR (2 dosis: 12-15m y 4-6a) |

#### 2. Varicela (Chickenpox)

| Caracteristica | Detalle |
|---------------|---------|
| Agente | Virus varicela-zoster (VZV, Herpesviridae) |
| Transmision | Aerosol + contacto directo con lesiones. Muy contagioso |
| Incubacion | 14-21 dias (tipicamente 14-16) |
| Exantema | Vesiculas pruriginosas sobre base eritematosa ("gota de rocio sobre petalo de rosa"). Progresion: macula -> papula -> vesicula -> pustula -> costra. Lesiones en DIFERENTES ESTADIOS simultaneamente ("cielo estrellado"). Distribucion centripeta (tronco > extremidades). |
| Contagiosidad | Desde 1-2 dias antes del sarpullido hasta que TODAS las lesiones esten costrosas |
| Complicaciones | Sobreinfeccion bacteriana (S. aureus, GAS), encefalitis cerebelosa, neumonia por VZV (adultos), sindrome de Reye (si recibe aspirina) |
| Prevencion | Vacuna de varicela (2 dosis: 12-15m y 4-6a) |
| Nota | Reactivacion posterior = herpes zoster (culebrilla/shingles) |

#### 3. Roseola Infantil (Exantema Subito)

| Caracteristica | Detalle |
|---------------|---------|
| Agente | HHV-6B (principal) o HHV-7 |
| Edad tipica | 6 meses - 2 anos (95% antes de los 3 anos) |
| Incubacion | 9-10 dias |
| Presentacion | Fiebre ALTA (hasta 40.5C) por 3-5 dias, nino se ve relativamente bien a pesar de la fiebre |
| Exantema | Maculopapular rosado, aparece CUANDO LA FIEBRE BAJA ("fiebre primero, sarpullido despues"). Tronco -> extremidades. No pruriginoso. Dura 1-3 dias. |
| Complicaciones | Convulsiones febriles (causa mas comun en <2 anos), encefalitis (rara) |
| Tratamiento | Sintomatico. No requiere antivirales. |

#### 4. Enfermedad Mano-Pie-Boca (Hand-Foot-Mouth Disease, HFMD)

| Caracteristica | Detalle |
|---------------|---------|
| Agente | Coxsackie A16 (clasico) o Enterovirus A71 (mas grave) |
| Transmision | Fecal-oral, gotas respiratorias, contacto con lesiones |
| Incubacion | 3-6 dias |
| Exantema | Vesiculas pequenas ovaladas con halo eritematoso en palmas, plantas, y region perioral. Afecta dorso de manos y pies tambien. |
| Enantema | Ulceras dolorosas en mucosa bucal, paladar, lengua (a menudo el sintoma que mas molesta) |
| Edad tipica | <5 anos, epidemias en guarderias |
| Complicaciones | Onicomadesis (caida de unas 1-2 meses despues), encefalitis/meningitis (EV-A71), miocarditis (rara) |
| Tratamiento | Sintomatico: analgesicos, liquidos frios. "Magic mouthwash" (combinacion de Maalox + difenhidramina + lidocaina) |

#### 5. Eritema Infeccioso (Quinta Enfermedad)

| Caracteristica | Detalle |
|---------------|---------|
| Agente | Parvovirus B19 |
| Transmision | Gotas respiratorias |
| Incubacion | 4-14 dias |
| Fase 1 | Viremia con sintomas inespecificos (fiebre, cefalea). El paciente es contagioso AQUI, no cuando sale el sarpullido. |
| Fase 2 | Eritema facial bilateral intenso ("cara abofeteada" / "slapped cheek") |
| Fase 3 | Exantema reticular (en encaje/lattice pattern) en extremidades y tronco. Puede reaparecer con sol, calor o bano. |
| Complicaciones | Crisis aplasica transitoria en drepanocitosis/anemias hemoliticas, hydrops fetalis (infeccion in utero), artritis/artralgias (adultos) |
| Importante | Cuando sale el sarpullido, el nino YA NO es contagioso |

#### 6. Escarlatina (Scarlet Fever)

| Caracteristica | Detalle |
|---------------|---------|
| Agente | Streptococcus pyogenes (Grupo A), toxina eritrogenica (SpeA, SpeB, SpeC) |
| Precedida por | Faringitis estreptococica |
| Exantema | Eritema difuso con textura aspera "como papel de lija" (sandpaper rash). Palidez perioral. Lineas de Pastia (petequias lineales en pliegues). |
| Enantema | Lengua en fresa: primero cubierta blanca (fresa blanca), luego papilas rojas prominentes (fresa roja) |
| Descamacion | Descamacion fina del tronco, luego gruesa en manos y pies (1-3 semanas despues) |
| Complicaciones NO SUPURATIVAS | Fiebre reumatica (2-4 semanas despues), glomerulonefritis post-estreptococica |
| Tratamiento | Antibioticos: penicilina V o amoxicilina x 10 dias (previene fiebre reumatica) |

---
## Intermediate Explanation

[The above covers the classic numerical classification of childhood exanthems (1st through 6th disease), plus varicella and HFMD, with detailed clinical characteristics including causative agents, incubation periods, rash morphology and distribution, contagiousness windows, complications, and treatment for each.]`,
      keyTerms: [
        {
          term: 'manchas de Koplik | Koplik spots',
          definition:
            'Puntos blancos-azulados sobre base eritematosa en la mucosa bucal, patognomonicos de sarampion. Aparecen 2 dias antes del sarpullido y permiten el diagnostico temprano. | Bluish-white spots on erythematous base on buccal mucosa, pathognomonic of measles. Appear 2 days before the rash and allow early diagnosis.',
          pronunciation: 'MAHN-chas deh KOP-lik',
        },
        {
          term: 'distribucion centripeta vs centrifuga | centripetal vs centrifugal',
          definition:
            'Centripeta: mas lesiones en el centro del cuerpo (tronco), tipico de varicela. Centrifuga: mas en extremidades, tipico de viruela. Esta distincion historicamente era crucial. | Centripetal: more lesions on body center (trunk), typical of chickenpox. Centrifugal: more on extremities, typical of smallpox. This distinction was historically crucial.',
          pronunciation: 'sen-TREE-peh-tah / sen-TREE-foo-gah',
        },
        {
          term: 'exantema subito | exanthem subitum',
          definition:
            'Nombre medico de la roseola infantil. "Subito" porque el sarpullido aparece subitamente cuando baja la fiebre, no durante la fiebre como en otras enfermedades. | Medical name for infantile roseola. "Subitum" because the rash appears suddenly when the fever breaks, not during the fever as in other diseases.',
          pronunciation: 'ek-san-TEH-mah SOO-bee-toh',
        },
        {
          term: 'lengua en fresa | strawberry tongue',
          definition:
            'Hallazgo clasico de escarlatina: lengua con papilas prominentes y eritematosas que le dan apariencia de fresa. Primero "fresa blanca" (cubierta), luego "fresa roja" (sin cubierta). Tambien se ve en Kawasaki. | Classic finding of scarlet fever: tongue with prominent erythematous papillae giving strawberry appearance. First "white strawberry" (coated), then "red strawberry" (uncoated). Also seen in Kawasaki.',
          pronunciation: 'LEN-gwah en FREH-sah',
        },
        {
          term: 'onicomadesis | onychomadesis',
          definition:
            'Caida de las unas que ocurre 1-2 meses despues de enfermedad mano-pie-boca. Es benigna y las unas crecen nuevamente. Causa alarma en los padres pero no requiere tratamiento. | Nail shedding occurring 1-2 months after hand-foot-mouth disease. It is benign and nails regrow. Causes alarm in parents but requires no treatment.',
          pronunciation: 'oh-nee-koh-mah-DEH-sees',
        },
      ],
      analogies: [
        'Las lesiones de varicela en diferentes estadios son como un "cielo estrellado": si miras el cielo, ves estrellas brillantes (vesiculas nuevas), estrellas opacas (pustulas) y nubes (costras), todas al mismo tiempo. | Chickenpox lesions in different stages are like a "starry sky": if you look at the sky, you see bright stars (new vesicles), dim stars (pustules), and clouds (crusts), all at the same time.',
        'La roseola sigue la regla de "la calma despues de la tormenta": la fiebre alta es la tormenta, y el sarpullido rosado es la calma que viene cuando todo termina. | Roseola follows the rule of "the calm after the storm": the high fever is the storm, and the pink rash is the calm that comes when it is all over.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La patogenesis de los exantemas infantiles involucra mecanismos virales directos (citolisis por VZV, tropismo epitelial), respuesta inmune mediada (sarampion, eritema infeccioso), y toxinas bacterianas (escarlatina). El diagnostico diferencial incluye Kawasaki, meningococcemia, Stevens-Johnson y purpura de Henoch-Schonlein. La inmunizacion ha cambiado dramaticamente la epidemiologia. | Childhood exanthem pathogenesis involves direct viral mechanisms (VZV cytolysis, epithelial tropism), immune-mediated response (measles, erythema infectiosum), and bacterial toxins (scarlet fever). The differential includes Kawasaki, meningococcemia, Stevens-Johnson, and Henoch-Schonlein purpura. Immunization has dramatically changed the epidemiology.',
      explanation: `## Explicacion Nivel Universitario | College-Level Explanation

### Patogenesis de los Exantemas | Exanthem Pathogenesis

| Enfermedad | Mecanismo del Exantema |
|-----------|----------------------|
| Sarampion | Infeccion directa de celulas endoteliales + respuesta inmune celular (infiltrado perivascular de linfocitos T CD4+ y CD8+). Inmunosupresion transitoria (depleta celulas T de memoria por meses). |
| Varicela | Citolisis directa de queratinocitos por VZV -> degeneracion balonizante -> formacion de vesiculas intraepidermicas. Celulas multinucleadas gigantes (celulas de Tzanck). |
| Roseola | Probable respuesta inmune (no viral directa): el sarpullido aparece cuando la respuesta inmune controla la viremia. HHV-6 establece latencia en monocitos/macrofagos. |
| HFMD | Tropismo viral por queratinocitos de epitelio estratificado (palmas/plantas/mucosa oral). EV-A71 tiene neurotropismo adicional. |
| Eritema infeccioso | Fase 1 (viremia): infeccion de precursores eritroides (tropismo por receptor P globosido). Fase 2-3 (exantema): deposito de COMPLEJOS INMUNES (anticuerpo-antigeno) en piel y articulaciones. |
| Escarlatina | Toxina eritrogenica (superantigeno SpeA/B/C): activacion policlonal de celulas T -> liberacion masiva de citoquinas -> vasodilatacion y eritema difuso. |

### Diagnostico Diferencial Critico: "El Sarpullido que NO es Benigno" | Critical Differentials

**Exantemas que ponen en peligro la vida:**

| Condicion | Hallazgos Clave | Urgencia |
|-----------|----------------|---------|
| Meningococcemia | Petequias/purpura que NO desaparecen con presion (prueba del vaso). Rapida progresion. Shock. | EMERGENCIA: antibioticos IV inmediatos |
| Enfermedad de Kawasaki | Fiebre >=5 dias + conjuntivitis bilateral no purulenta + cambios en labios/mucosa oral + linfadenopatia cervical + cambios en extremidades + exantema polimorfo. <5 anos. | URGENTE: IVIG + aspirina para prevenir aneurismas coronarios |
| Sindrome de Stevens-Johnson/NET | Lesiones en diana atipicas, ampollas, desprendimiento epidermico, compromiso mucoso (oral, ocular, genital). Antecedente de medicamento. | EMERGENCIA: UCI, manejo como quemado |
| Purpura de Henoch-Schonlein (IgA) | Purpura palpable en extremidades inferiores y nalgas + dolor abdominal + artritis + hematuria. | URGENTE: evaluacion renal |
| Sindrome de piel escaldada estafilococica (SSSS) | Eritema difuso doloroso + desprendimiento de la piel en capas (signo de Nikolsky+). Neonatos/lactantes. S. aureus toxina exfoliativa. | URGENTE: antibioticos antiestafilococicos |

**Prueba del vaso (glass test/blanching test):**
- Presionar un vaso transparente sobre el sarpullido
- Si las manchas DESAPARECEN con presion = blanqueable = probablemente benigno (viral)
- Si las manchas NO desaparecen = NO blanqueable = petequias/purpura = posible meningococcemia u otra vasculitis = EMERGENCIA

### Evaluacion Diagnostica | Diagnostic Workup

| Test | Cuando Usarlo |
|------|--------------|
| Clinico (historia + examen) | Suficiente para la mayoria de los exantemas virales clasicos |
| Serologia IgM/IgG | Sarampion, rubeola, parvovirus B19 (confirmar diagnostico) |
| PCR viral | Sarampion (de urgencia para salud publica), enterovirus, VZV en inmunosuprimidos |
| Prueba de Tzanck | Frotis de base de vesicula: celulas multinucleadas gigantes en VZV/HSV (rapida pero baja sensibilidad) |
| DFA (inmunofluorescencia directa) | VZV, HSV: mas sensible que Tzanck |
| Hemograma | Leucocitosis con eosinofilia: reaccion a medicamento. Leucopenia: viral. Neutrofilia + desvio: bacteriano. |
| Anti-estreptolisina O (ASO), anti-DNasa B | Confirmar infeccion estreptococica reciente (escarlatina) |
| Cultivo de garganta/test rapido de strep | Escarlatina: confirmar faringitis estreptococica |

### Complicaciones Especificas por Enfermedad | Disease-Specific Complications

**Sarampion - Complicaciones en detalle:**
- Neumonia (causa #1 de muerte en sarampion): neumonitis de celulas gigantes (Hecht)
- Encefalitis aguda post-sarampion: 1/1,000 casos, mortalidad 15%, secuelas 25%
- SSPE (Panencefalitis Esclerosante Subaguda): 7-10 anos despues, siempre fatal. Riesgo: 1/10,000 (1/600 si sarampion <2 anos)
- Ceguera por queratitis: comun en paises en desarrollo con deficiencia de vitamina A
- Supresion inmune prolongada: depleta celulas T de memoria por 2-3 anos ("amnesia inmunologica")

**Varicela - Complicaciones:**
- Sobreinfeccion bacteriana: celulitis, fascitis necrotizante (GAS), impetigo (S. aureus)
- Encefalitis cerebelosa (ataxia cerebelosa aguda): mas comun en ninos, buen pronostico
- Neumonia por VZV: mas comun y grave en adultos y embarazadas
- Varicela neonatal: si la madre desarrolla varicela 5 dias antes a 2 dias despues del parto = grave (25-30% mortalidad sin tratamiento)
- Varicela congenita: si infeccion materna en semanas 8-20 = cicatrices cutaneas, atrofia de extremidades, defectos oculares

**Parvovirus B19 - Poblaciones de riesgo:**
- Drepanocitosis/anemias hemoliticas: crisis aplasica transitoria (reticulocitos = 0, Hb cae rapido)
- Embarazadas: hidrops fetalis (infeccion de precursores eritroides fetales), riesgo de muerte fetal
- Inmunosuprimidos: aplasia pura de serie roja cronica

### Tratamiento y Manejo | Treatment

| Enfermedad | Tratamiento |
|-----------|-------------|
| Sarampion | Vitamina A (reduce mortalidad 50% en paises en desarrollo). Aislamiento aereo. Profilaxis post-exposicion: MMR <72h o Ig <6 dias. |
| Varicela | Sintomatico en ninos sanos. Aciclovir oral en >12 anos, inmunosuprimidos, enfermedad cronica. Aciclovir IV si complicaciones. NO aspirina (Reye). |
| Roseola | Sintomatico. Antipirecticos para fiebre. |
| HFMD | Sintomatico: analgesicos, liquidos frios, "magic mouthwash". |
| Eritema infeccioso | Sintomatico. Monitorizar Hb en pacientes con hemolisis cronica. |
| Escarlatina | Penicilina V o amoxicilina x 10 dias (OBLIGATORIO para prevenir fiebre reumatica). Cefalosporinas si alergia no-anafilactica. Azitromicina si anafilaxia a penicilina. |

---
## College-Level Explanation

[The above covers pathogenesis mechanisms for each exanthem, critical differential diagnoses including life-threatening conditions, diagnostic workup, disease-specific complications, and evidence-based treatment protocols.]`,
      keyTerms: [
        {
          term: 'superantigeno | superantigen',
          definition:
            'Toxina que activa celulas T de forma policlonal sin necesidad de procesamiento por APC convencional. Se une directamente al MHC-II y al TCR. En escarlatina, las toxinas SpeA/B/C actuan como superantigenos causando liberacion masiva de citoquinas. | Toxin that activates T cells polyclonally without conventional APC processing. Binds directly to MHC-II and TCR. In scarlet fever, SpeA/B/C toxins act as superantigens causing massive cytokine release.',
          pronunciation: 'SOO-per-an-TEE-heh-noh',
        },
        {
          term: 'amnesia inmunologica | immune amnesia',
          definition:
            'Fenomeno descubierto en sarampion: el virus depleta celulas T y B de memoria preexistentes, "borrando" la inmunidad a patogenos previamente encontrados. Dura 2-3 anos post-sarampion. Explica el aumento de mortalidad por otras infecciones post-sarampion. | Phenomenon discovered in measles: the virus depletes pre-existing memory T and B cells, "erasing" immunity to previously encountered pathogens. Lasts 2-3 years post-measles. Explains increased mortality from other infections post-measles.',
          pronunciation: 'am-NEH-see-ah een-moo-noh-LOH-hee-kah',
        },
        {
          term: 'SSPE | Panencefalitis Esclerosante Subaguda',
          definition:
            'Complicacion tardia y siempre fatal del sarampion que ocurre 7-10 anos despues de la infeccion. Causada por virus defectivo del sarampion persistente en el SNC. Riesgo: 1/10,000 (1/600 si sarampion <2 anos). Prevención: vacunacion. | Late, always fatal complication of measles occurring 7-10 years after infection. Caused by persistent defective measles virus in the CNS. Risk: 1/10,000 (1/600 if measles <2 years). Prevention: vaccination.',
          pronunciation: 'ese-ese-peh-eh',
        },
        {
          term: 'prueba del vaso / glass test',
          definition:
            'Tecnica de presionar un vaso transparente sobre lesiones cutaneas. Si las lesiones desaparecen con presion (blanqueables), probablemente son virales/benignas. Si NO desaparecen (no blanqueables), son petequias/purpura y requieren evaluacion urgente por meningococcemia. | Technique of pressing a clear glass on skin lesions. If lesions disappear with pressure (blanchable), they are probably viral/benign. If they do NOT disappear (non-blanchable), they are petechiae/purpura requiring urgent evaluation for meningococcemia.',
          pronunciation: 'PROO-eh-bah del BAH-soh',
        },
        {
          term: 'celulas de Tzanck | Tzanck cells',
          definition:
            'Celulas epiteliales multinucleadas gigantes observadas en frotis de base de vesicula, indicativas de infeccion por VZV o HSV. Rapida pero con baja sensibilidad (60-70%). Reemplazada por DFA y PCR. | Multinucleated giant epithelial cells seen on vesicle base smear, indicative of VZV or HSV infection. Rapid but low sensitivity (60-70%). Replaced by DFA and PCR.',
          pronunciation: 'SEH-loo-lahs deh TSANK',
        },
      ],
      clinicalNotes:
        'La regla clinica mas importante en exantemas: todo sarpullido NO blanqueable (petequial/purpurico) en un nino con fiebre es meningococcemia hasta probar lo contrario. La prueba del vaso toma 5 segundos y puede salvar una vida. En sarampion, la "amnesia inmunologica" recien descubierta (2019) explica por que la mortalidad por OTRAS infecciones aumenta en los 2-3 anos post-sarampion: el virus borra la memoria inmunologica previa. Esto da un argumento adicional potente para la vacunacion. En escarlatina, el tratamiento con antibioticos es OBLIGATORIO no para la escarlatina en si, sino para prevenir la fiebre reumatica. Los antibioticos deben completarse 10 dias incluso si el nino mejora antes. | The most important clinical rule in exanthems: any NON-blanchable rash (petechial/purpuric) in a febrile child is meningococcemia until proven otherwise. The glass test takes 5 seconds and can save a life. In measles, recently discovered "immune amnesia" (2019) explains why mortality from OTHER infections increases in the 2-3 years post-measles: the virus erases prior immune memory. This provides an additional powerful argument for vaccination. In scarlet fever, antibiotic treatment is MANDATORY not for the scarlet fever itself, but to prevent rheumatic fever. Antibiotics must be completed for 10 days even if the child improves earlier.',
    },

    4: {
      level: 4,
      summary:
        'La virologia molecular y la inmunopatogenesis de los exantemas infantiles involucran mecanismos sofisticados de evasion inmune (proteina NS1 del sarampion inhibiendo senalizacion IFN, latencia de VZV en ganglio dorsal), respuesta inmune innata y adaptativa, y la base molecular de la especificidad de tropismo tisular. La enfermedad de Kawasaki como mimetizador de exantemas infecciosos requiere conocimiento del diagnostico y manejo para prevenir complicaciones coronarias. | Molecular virology and immunopathogenesis of childhood exanthems involve sophisticated immune evasion mechanisms (measles NS1 protein inhibiting IFN signaling, VZV dorsal ganglion latency), innate and adaptive immune responses, and the molecular basis of tissue tropism specificity. Kawasaki disease as an infectious exanthem mimicker requires knowledge of diagnosis and management to prevent coronary complications.',
      explanation: `## Explicacion de Posgrado | Graduate-Level Explanation

### Virologia Molecular de los Exantemas | Molecular Virology

**Sarampion - Evasion inmune:**
| Proteina Viral | Funcion en Evasion Inmune |
|---------------|--------------------------|
| V protein | Inhibe senalizacion de IFN tipo I (bloquea STAT1/STAT2) |
| C protein | Previene activacion de MDA5 (sensor de RNA viral) |
| P protein | Interfiere con senalizacion de IFN-gamma (STAT1) |
| H (hemaglutinina) | Receptor de entrada: CD150/SLAM (celulas inmunes) y Nectin-4 (epitelio) |
| N (nucleoproteina) | Secuestra IRF3, bloquea activacion de IFN |

**Mecanismo de la "amnesia inmunologica":**
\`\`\`
Virus sarampion entra via CD150/SLAM en celulas inmunes de memoria
        |
Infecta y destruye celulas T y B de memoria preexistentes
        |
Se pierde la memoria inmunologica a patogenos previamente encontrados
        |
Duracion: 2-3 anos post-sarampion
        |
Consecuencia: aumento de mortalidad por infecciones "no relacionadas"
        |
Estudio Mina et al. (Science 2019): el sarampion "reinicia" el sistema inmune
\`\`\`

**VZV - Latencia y reactivacion:**
- Latencia en ganglios de la raiz dorsal y ganglios de pares craneales
- Mecanismo: circularizacion del genoma viral, expresion limitada a LATs (latency-associated transcripts)
- Reactivacion: inmunosupresion, estres, envejecimiento -> disminucion de inmunidad celular VZV-especifica
- Reactivacion = herpes zoster (dermatoma unico, dolor neuropatico)
- Vacuna recombinante (Shingrix) para adultos >=50 previene zoster

**Enterovirus A71 - Neurotropismo:**
- Receptor de entrada: SCARB2 (scavenger receptor B2) y PSGL-1
- A diferencia de Coxsackie A16, EV-A71 tiene tropismo por SNC
- Puede causar: encefalitis del tronco encefalico, paralisis flacida aguda, edema pulmonar neurogenico
- Brotes epidemicos en Asia con mortalidad significativa (Taiwan 1998, China 2008)
- Vacuna disponible en China pero no en otros paises

### Enfermedad de Kawasaki: El Gran Mimetizador | Kawasaki Disease

**Criterios diagnosticos (AHA/AAP 2017):**

Fiebre >= 5 dias + >= 4 de los siguientes:
1. Conjuntivitis bilateral NO purulenta (respeta zona perilimbar)
2. Cambios en labios/mucosa oral: labios fisurados/rojos, lengua en fresa, eritema orofaringeo
3. Linfadenopatia cervical >= 1.5 cm (generalmente unilateral)
4. Exantema polimorfo (maculopapular, morbiliforme, o eritrodermia; NUNCA vesicular)
5. Cambios en extremidades: eritema/edema palmoplantar (agudo), descamacion periungueal (subagudo)

**Kawasaki incompleto/atipico:**
- Fiebre >= 5 dias + 2-3 criterios + marcadores inflamatorios elevados (PCR >= 3, VSG >= 40)
- Requiere ecocardiograma para evaluar arterias coronarias
- Mas comun en lactantes <6 meses (que tienen mayor riesgo de aneurismas)

**Tratamiento:**
| Fase | Tratamiento | Proposito |
|------|-----------|-----------|
| Aguda | IVIG 2 g/kg dosis unica + Aspirina 80-100 mg/kg/dia | Reducir inflamacion, prevenir aneurismas coronarios |
| Subaguda | Aspirina 3-5 mg/kg/dia por 6-8 semanas | Antiagregacion plaquetaria |
| Refractaria | Segunda dosis IVIG, infliximab, ciclosporina, o pulsos de metilprednisolona | Kawasaki resistente a IVIG (10-20%) |

**Nota CRITICA:** Sin tratamiento, 25% de los ninos con Kawasaki desarrollan aneurismas coronarios. Con IVIG oportuna, el riesgo baja a 3-5%. Es la causa adquirida #1 de enfermedad cardiaca en ninos en paises desarrollados.

### Inmunopatogenesis Comparada | Comparative Immunopathogenesis

| Exantema | Mecanismo Inmune Predominante | Marcador Diagnostico |
|---------|------------------------------|---------------------|
| Sarampion | Celular (CD4+/CD8+) + inmunosupresion viral | IgM anti-sarampion, PCR |
| Varicela | Celular (CD8+ citotoxica) + humoral (anti-gE IgG) | DFA, PCR, Tzanck (baja S) |
| Roseola | Inmunomediado (exantema post-viremia) | IgM anti-HHV-6, PCR (raro necesario) |
| HFMD | Citolisis directa + respuesta innata (IFN) | Clinico; PCR si complicaciones |
| Eritema infeccioso | Complejos inmunes (IC) en fase de exantema | IgM anti-B19, PCR |
| Escarlatina | Superantigeno -> tormenta de citoquinas | Cultivo/test rapido strep, ASO |
| Kawasaki | Activacion inmune innata + adaptativa (desconocido) | No hay test diagnostico; clinico |

### Enfoque Diagnostico Sistematico del Nino con Fiebre + Sarpullido | Systematic Approach

\`\`\`
Nino con fiebre + exantema
        |
Paso 1: Blanqueable? (prueba del vaso)
    NO -> Petequial/purpurico -> Hemograma URGENTE + hemocultivos + antibioticos IV empiricos (meningococcemia hasta probar lo contrario)
    SI -> Continuar evaluacion
        |
Paso 2: Morfologia del exantema?
    Maculopapular: sarampion, rubeola, roseola, eritema infeccioso, escarlatina, reaccion a medicamento
    Vesicular: varicela, HFMD, HSV, impetigo bulloso
    Urticariforme: reaccion alergica, infeccion viral
        |
Paso 3: Distribucion?
    Centripeta (tronco): varicela, roseola
    Centrifuga (extremidades): HFMD, eritema infeccioso, Henoch-Schonlein
    Cefalocaudal: sarampion
    Generalizada con textura de lija: escarlatina
        |
Paso 4: Relacion fiebre-exantema?
    Fiebre CON exantema: sarampion, varicela, escarlatina, HFMD
    Fiebre ANTES del exantema (exantema cuando baja fiebre): roseola
    Exantema SIN fiebre activa: eritema infeccioso (fase 2-3)
        |
Paso 5: Considerar Kawasaki si fiebre >= 5 dias + criterios parciales
\`\`\`

---
## Graduate-Level Explanation

[The above covers molecular virology of measles immune evasion and VZV latency, immune amnesia mechanism, EV-A71 neurotropism, Kawasaki disease diagnosis and management (including incomplete Kawasaki), comparative immunopathogenesis, and a systematic diagnostic algorithm for the febrile child with rash.]`,
      keyTerms: [
        {
          term: 'amnesia inmunologica del sarampion | measles immune amnesia',
          definition:
            'Fenomeno donde el virus del sarampion destruye celulas T y B de memoria preexistentes via infeccion de celulas CD150/SLAM+, "borrando" la inmunidad a patogenos previamente encontrados. Dura 2-3 anos. Descrito molecularmente por Mina et al., Science 2019. | Phenomenon where measles virus destroys pre-existing memory T and B cells via infection of CD150/SLAM+ cells, "erasing" immunity to previously encountered pathogens. Lasts 2-3 years. Molecularly described by Mina et al., Science 2019.',
          pronunciation: 'am-NEH-see-ah een-moo-noh-LOH-hee-kah',
        },
        {
          term: 'Kawasaki incompleto | incomplete Kawasaki',
          definition:
            'Presentacion de Kawasaki con fiebre >= 5 dias pero solo 2-3 criterios clasicos. Mas comun en lactantes <6 meses. Requiere marcadores inflamatorios + ecocardiograma para diagnostico. Alto riesgo de aneurismas coronarios si no se trata. | Kawasaki presentation with fever >= 5 days but only 2-3 classic criteria. More common in infants <6 months. Requires inflammatory markers + echocardiogram for diagnosis. High risk of coronary aneurysms if untreated.',
          pronunciation: 'kah-wah-SAH-kee een-kom-PLEH-toh',
        },
        {
          term: 'superantigeno estreptococico | streptococcal superantigen',
          definition:
            'Toxinas eritrogenicas (SpeA, SpeB, SpeC) de S. pyogenes que se unen directamente a MHC-II y TCR sin procesamiento convencional, activando hasta 20% de celulas T (vs. 0.01% en respuesta normal). Causa escarlatina y sindrome de shock toxico estreptococico. | Erythrogenic toxins (SpeA, SpeB, SpeC) of S. pyogenes that bind directly to MHC-II and TCR without conventional processing, activating up to 20% of T cells (vs. 0.01% in normal response). Causes scarlet fever and streptococcal toxic shock syndrome.',
          pronunciation: 'SOO-per-an-TEE-heh-noh',
        },
        {
          term: 'latencia viral | viral latency',
          definition:
            'Estado en que el genoma viral persiste en la celula huesped sin replicacion activa. VZV permanece latente en ganglios de la raiz dorsal; la reactivacion causa herpes zoster. Mecanismo: circularizacion del genoma + expresion limitada a LATs. | State where the viral genome persists in the host cell without active replication. VZV remains latent in dorsal root ganglia; reactivation causes herpes zoster. Mechanism: genome circularization + expression limited to LATs.',
          pronunciation: 'lah-TEN-see-ah bee-RAHL',
        },
      ],
      clinicalNotes:
        'En la practica, Kawasaki incompleto/atipico es el diagnostico mas frecuentemente perdido en lactantes con fiebre prolongada. Todo lactante <6 meses con fiebre >= 5 dias y al menos 2 criterios debe tener ecocardiograma y marcadores inflamatorios. Sin IVIG oportuna, el riesgo de aneurisma coronario es del 25%. La amnesia inmunologica post-sarampion tiene implicaciones profundas: un brote de sarampion no solo causa mortalidad directa, sino que "reinicia" la inmunidad de la poblacion a otros patogenos, potencialmente causando brotes secundarios de otras enfermedades durante 2-3 anos. En contexto clinico con familias hispanas/latinas, las abuelas pueden referirse a la varicela como "viruela loca" (no confundir con viruela verdadera/smallpox) y a la escarlatina como "fiebre escarlata". | In practice, incomplete/atypical Kawasaki is the most frequently missed diagnosis in infants with prolonged fever. Any infant <6 months with fever >= 5 days and at least 2 criteria should have echocardiogram and inflammatory markers. Without timely IVIG, coronary aneurysm risk is 25%. Post-measles immune amnesia has profound implications: a measles outbreak not only causes direct mortality but "resets" population immunity to other pathogens, potentially causing secondary outbreaks of other diseases for 2-3 years. In clinical context with Hispanic/Latino families, grandmothers may refer to chickenpox as "viruela loca" (not to be confused with true smallpox) and scarlet fever as "fiebre escarlata".',
    },

    5: {
      level: 5,
      summary:
        'La frontera de los exantemas pediatricos incluye la re-emergencia del sarampion como amenaza global por caidas en cobertura vacunal, el descubrimiento molecular de la amnesia inmunologica y sus implicaciones para politicas de salud publica, la epidemiologia cambiante de los enterovirus con emergencia de cepas neurotropicas, protocolos actualizados de Kawasaki con algoritmos de tratamiento para enfermedad refractaria, y el impacto del diagnostico molecular (NGS, metagenomics) en la identificacion de exantemas atipicos. | The frontier of pediatric exanthems includes measles re-emergence as a global threat from declining vaccine coverage, molecular discovery of immune amnesia and its public health policy implications, changing enterovirus epidemiology with neurotropic strain emergence, updated Kawasaki protocols with refractory disease treatment algorithms, and the impact of molecular diagnostics (NGS, metagenomics) on identifying atypical exanthems.',
      explanation: `## Explicacion Profesional (Nivel MD) | MD/Professional-Level Explanation

### Re-emergencia del Sarampion: Crisis Global | Measles Re-emergence

**Datos globales alarmantes:**
| Indicador | 2023-2024 |
|-----------|-----------|
| Casos reportados globalmente | 321,000+ (aumento 79% vs. 2022) |
| Paises con brotes grandes (>1,000 casos) | 57 |
| Cobertura global MCV1 (1a dosis) | 83% (vs. 86% pre-pandemia) |
| Cobertura global MCV2 (2a dosis) | 74% |
| Ninos "zero-dose" para sarampion | 22 millones/ano sin MCV1 |
| Muertes estimadas por sarampion | 136,000 (2022, OMS) |

**Factores contribuyentes:**
1. Retroceso de cobertura por pandemia COVID-19 (servicios interrumpidos)
2. Hesitacion vacunal amplificada por redes sociales
3. Fragilidad de sistemas de salud en paises en conflicto
4. Umbral de inmunidad de rebano extremadamente alto (95%) debido al R0 de 12-18
5. Acumulacion de susceptibles: cada ano sin cobertura agrega una cohorte

**Implicaciones de la amnesia inmunologica (Mina et al., Science 2019):**
- Estudio de 77 ninos antes/despues de sarampion: perdieron 11-73% de su repertorio de anticuerpos
- Comparado con controles (VZV, influenza): sin perdida
- Implicacion: cada caso de sarampion no solo causa dano directo, sino que "reinicia" la inmunidad, aumentando mortalidad por TODAS las causas infecciosas durante 2-3 anos
- Argumento de salud publica: la vacunacion contra sarampion previene mas muertes de las directamente atribuibles al sarampion

### Enterovirus: Epidemiologia Cambiante | Changing Enterovirus Epidemiology

**EV-A71 y EV-D68: patogenos emergentes pediatricos:**

| Virus | Presentacion | Complicaciones Graves | Epidemiologia |
|-------|-------------|----------------------|--------------|
| EV-A71 | HFMD clasica | Encefalitis de tronco (romboencefalitis), paralisis flacida, edema pulmonar neurogenico | Brotes epidemicos en Asia; vacuna disponible solo en China |
| EV-D68 | Enfermedad respiratoria | Mielitis flacida aguda (AFM): paralisis similar a polio | Brotes bienales (2014, 2016, 2018, 2022 en EE.UU.) |
| CV-A6 | HFMD atipica | Onicomadesis, presentacion mas extensa que CV-A16 | Cada vez mas prevalente |

**Mielitis flacida aguda (AFM):**
- Entidad clinica definida en 2014 (CDC): paralisis flacida aguda con lesion de sustancia gris en medula espinal
- Asociacion temporal con EV-D68 (no confirmacion causal definitiva por dificultad de detectar virus en LCR)
- Incidencia pico: ninos 3-5 anos, otono (patron bienal)
- Sin tratamiento establecido: IVIG, plasmaferesis, fluoxetina (experimental)
- Recuperacion funcional: variable, muchos con deficits permanentes

### Kawasaki: Protocolos Actualizados 2024-2025 | Updated Kawasaki Protocols

**Algoritmo de manejo de Kawasaki refractario:**
\`\`\`
IVIG 2 g/kg + Aspirina alta dosis
        |
Fiebre persiste >36h post-IVIG?
    NO -> Continuar aspirina baja dosis x 6-8 semanas + ecocardiograma seriado
    SI -> Kawasaki refractario (10-20% de casos)
        |
Segunda dosis IVIG 2 g/kg
        |
Fiebre persiste?
    NO -> Continuar manejo
    SI -> Opciones de rescate:
        |
    1. Infliximab (anti-TNF-alpha) 5 mg/kg: mejor evidencia actual
    2. Metilprednisolona IV pulsos (30 mg/kg x 3 dias)
    3. Ciclosporina (si resistente a todo lo anterior)
    4. Anakinra (anti-IL-1): uso emergente
\`\`\`

**Factores de riesgo de aneurismas coronarios (Score de Kobayashi, adaptado):**
- Edad <12 meses
- Sodio <133 mEq/L
- AST >100 U/L
- Neutrofilos >80%
- PCR >10 mg/dL
- Plaquetas <300,000
- Dia de enfermedad al tratamiento >=5
- Albumina <3.0 g/dL

**Seguimiento a largo plazo de aneurismas coronarios:**
| Clasificacion Z-score | Seguimiento | Medicacion |
|----------------------|-------------|------------|
| Z <2.5 (normal/dilatacion) | Ecocardiograma a 4-6 semanas, luego al ano | Aspirina baja dosis x 6-8 semanas |
| Z 2.5-5 (aneurisma pequeno) | Ecocardiograma cada 6 meses | Aspirina baja dosis indefinida |
| Z 5-10 (aneurisma mediano) | Ecocardiograma cada 3-6 meses, angio-CT/MRI | Aspirina + anticoagulacion |
| Z >=10 (aneurisma gigante) | Cardiologo pediatrico, angiografia, revascularizacion? | Anticoagulacion formal, restriccion de actividad |

### Diagnosticos Moleculares de Nueva Generacion | Next-Gen Molecular Diagnostics

**Impacto de NGS/metagenomics en exantemas atipicos:**
- Metagenomic next-generation sequencing (mNGS) de suero/plasma puede identificar patogenos no sospechados
- Util en: paciente inmunosuprimido con exantema atipico, brotes nosocomiales, exantemas sin diagnostico con evaluacion convencional negativa
- Caso paradigmatico: identificacion de nuevos virus (astrovirus neurotropico, arenavirus) mediante mNGS en pacientes con encefalitis de causa desconocida
- Limitaciones: costo ($2,000-5,000 por test), disponibilidad limitada, tiempo de resultado (3-7 dias), interpretacion compleja (contaminantes vs. patogeno verdadero)

### Impacto en Poblacion Hispana/Latina | Impact on Hispanic/Latino Populations

**Consideraciones especificas:**
- Brotes de sarampion afectan desproporcionadamente a comunidades con baja cobertura vacunal
- Familias inmigrantes recientes pueden no tener documentacion vacunal: serologias o revacunacion
- En America Latina, la variante predominante de HFMD es EV-A71: mayor riesgo de complicaciones neurologicas
- Terminologia cultural: "alfombrilla" (sarampion en algunos paises), "viruela loca" (varicela), "roseola" (a veces confundida con "ronchas")
- Remedios caseros para el sarpullido (sabila, manzanilla topica): reconocer y no desestimar, pero asegurar que no interfieran con evaluacion medica
- Acceso a aciclovir y IVIG puede ser limitado en paises de ingreso bajo y medio

---
## MD/Professional-Level Explanation

[The above covers measles re-emergence crisis with global data, immune amnesia implications for public health policy, changing enterovirus epidemiology including AFM, updated Kawasaki protocols with refractory disease algorithms, next-generation molecular diagnostics, and specific considerations for Hispanic/Latino populations.]`,
      keyTerms: [
        {
          term: 'mielitis flacida aguda (AFM) | acute flaccid myelitis',
          definition:
            'Entidad clinica definida por CDC en 2014: paralisis flacida aguda con lesion de sustancia gris en medula espinal, asociada temporalmente a EV-D68. Patron bienal en EE.UU. Sin tratamiento establecido. Puede causar paralisis permanente similar a poliomielitis. | CDC-defined clinical entity (2014): acute flaccid paralysis with spinal cord gray matter lesion, temporally associated with EV-D68. Biennial pattern in US. No established treatment. May cause permanent polio-like paralysis.',
          pronunciation: 'mee-eh-LEE-tees FLAH-see-dah ah-GOO-dah',
        },
        {
          term: 'Kawasaki refractario | refractory Kawasaki',
          definition:
            'Persistencia de fiebre >36 horas post-IVIG inicial (10-20% de casos). Opciones de rescate: segunda IVIG, infliximab (anti-TNF-alpha, mejor evidencia actual), metilprednisolona IV, ciclosporina, o anakinra (anti-IL-1, emergente). Mayor riesgo de aneurismas coronarios. | Persistent fever >36 hours post-initial IVIG (10-20% of cases). Rescue options: second IVIG, infliximab (anti-TNF-alpha, best current evidence), IV methylprednisolone, cyclosporine, or anakinra (anti-IL-1, emerging). Higher coronary aneurysm risk.',
          pronunciation: 'kah-wah-SAH-kee reh-frak-TAH-ree-oh',
        },
        {
          term: 'metagenomica (mNGS) | metagenomic next-generation sequencing',
          definition:
            'Secuenciacion no sesgada de todo el material genetico en una muestra clinica para identificar cualquier patogeno presente sin necesidad de hipotesis previa. Util en exantemas atipicos en inmunosuprimidos y brotes de etiologia desconocida. Costo: $2,000-5,000. | Unbiased sequencing of all genetic material in a clinical sample to identify any pathogen present without prior hypothesis. Useful in atypical exanthems in immunosuppressed patients and outbreaks of unknown etiology. Cost: $2,000-5,000.',
          pronunciation: 'meh-tah-heh-NOH-mee-kah',
        },
        {
          term: 'Z-score coronario | coronary Z-score',
          definition:
            'Medida estandarizada del diametro de arterias coronarias ajustada por superficie corporal. En Kawasaki: Z <2.5 normal, 2.5-5 aneurisma pequeno, 5-10 mediano, >=10 gigante. Determina intensidad del seguimiento y tratamiento a largo plazo. | Standardized measure of coronary artery diameter adjusted for body surface area. In Kawasaki: Z <2.5 normal, 2.5-5 small aneurysm, 5-10 medium, >=10 giant. Determines follow-up intensity and long-term treatment.',
          pronunciation: 'SEH-tah SKOR koh-roh-NAH-ree-oh',
        },
      ],
      clinicalNotes:
        'La re-emergencia del sarampion es una crisis de salud publica activa. Con un R0 de 12-18 y un umbral de inmunidad de rebano del 95%, incluso pequenas caidas en cobertura causan brotes. La amnesia inmunologica agrega una dimension previamente no reconocida: cada caso de sarampion "borra" 2-3 anos de inmunidad adquirida a otros patogenos, causando un efecto dominó de aumento de mortalidad por todas las causas infecciosas. En el manejo de Kawasaki, el infliximab ha emergido como la mejor opcion para enfermedad refractaria a IVIG (meta-analisis 2023). Todo lactante <6 meses con fiebre prolongada y algunos criterios de Kawasaki debe evaluarse agresivamente: este grupo tiene la mayor tasa de enfermedad incompleta Y la mayor tasa de aneurismas. La AFM por EV-D68 representa la "nueva polio" y es un reto diagnostico y terapeutico sin solucion actual. Para familias hispanas/latinas, reconocer la terminologia cultural (alfombrilla, viruela loca) y remedios caseros (sabila) mejora la comunicacion clinica y la confianza del paciente. | Measles re-emergence is an active public health crisis. With an R0 of 12-18 and 95% herd immunity threshold, even small coverage drops cause outbreaks. Immune amnesia adds a previously unrecognized dimension: each measles case "erases" 2-3 years of acquired immunity to other pathogens, causing a domino effect of increased all-cause infectious mortality. In Kawasaki management, infliximab has emerged as the best option for IVIG-refractory disease (2023 meta-analysis). All infants <6 months with prolonged fever and some Kawasaki criteria must be aggressively evaluated: this group has the highest rate of incomplete disease AND the highest aneurysm rate. AFM from EV-D68 represents the "new polio" and is a diagnostic and therapeutic challenge without current solution. For Hispanic/Latino families, recognizing cultural terminology (alfombrilla, viruela loca) and home remedies (aloe vera) improves clinical communication and patient trust.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-nelson-infectious',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - Infectious Diseases',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
      chapter: 'Part XVI: Infectious Diseases',
    },
    {
      id: 'ref-aap-redbook-exanthems',
      type: 'textbook',
      title: 'Red Book: 2024-2027 Report of the Committee on Infectious Diseases',
      authors: ['American Academy of Pediatrics'],
      source: 'AAP, 33rd Edition',
    },
    {
      id: 'ref-mina-immune-amnesia',
      type: 'journal',
      title: 'Measles virus infection diminishes preexisting antibodies that offer protection from other pathogens',
      authors: ['Mina, M.J.', 'Kula, T.', 'Leng, Y.'],
      source: 'Science, 2019; 366(6465):599-606',
    },
    {
      id: 'ref-aha-kawasaki-2017',
      type: 'guideline',
      title: 'Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease',
      authors: ['McCrindle, B.W.', 'Rowley, A.H.', 'Newburger, J.W.'],
      source: 'Circulation, 2017; 135(17):e927-e999',
    },
    {
      id: 'ref-who-measles-2024',
      type: 'website',
      title: 'Global Measles and Rubella Update',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-vacunacion-immunization-schedule',
      targetType: 'topic',
      relationship: 'related',
      label: 'Vacunacion Pediatrica | Pediatric Immunization',
    },
    {
      targetId: 'pediatrics-desarrollo-infantil-child-development',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Desarrollo Infantil | Child Development',
    },
    {
      targetId: 'pediatrics-neonatologia-basica-neonatology',
      targetType: 'topic',
      relationship: 'related',
      label: 'Neonatologia Basica | Basic Neonatology',
    },
  ],

  tags: {
    systems: ['immune', 'integumentary'],
    topics: [
      'pediatrics',
      'infectious disease',
      'dermatology',
      'immunology',
      'emergency medicine',
    ],
    keywords: [
      'exantemas',
      'childhood rashes',
      'sarampion',
      'measles',
      'varicela',
      'chickenpox',
      'roseola',
      'mano-pie-boca',
      'hand-foot-mouth',
      'eritema infeccioso',
      'fifth disease',
      'escarlatina',
      'scarlet fever',
      'Kawasaki',
      'manchas de Koplik',
      'amnesia inmunologica',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
