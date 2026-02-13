/**
 * Neonatologia Basica / Basic Neonatology
 *
 * Contenido educativo bilingue (espanol primero) sobre la evaluacion del
 * recien nacido, puntaje APGAR, examen neonatal, problemas neonatales comunes,
 * ictericia neonatal, y cuidados del recien nacido.
 *
 * Bilingual educational content (Spanish-first) on newborn assessment,
 * APGAR score, neonatal examination, common neonatal problems,
 * neonatal jaundice, and newborn care.
 */

import { EducationalContent } from '../types';

export const NEONATOLOGIA_BASICA_BASIC_NEONATOLOGY: EducationalContent = {
  id: 'pediatrics-neonatologia-basica-neonatology',
  type: 'topic',
  name: 'Basic Neonatology | Neonatologia Basica',
  nameEs: 'Neonatologia Basica',
  alternateNames: [
    'Cuidado del recien nacido',
    'Newborn care',
    'Evaluacion neonatal',
    'Neonatal assessment',
    'Periodo neonatal',
    'Neonatal period',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Cuando nace un bebe, los doctores lo evaluan para asegurarse de que este sano. Le dan un puntaje llamado APGAR al minuto y a los 5 minutos de nacido. Tambien lo revisan de pies a cabeza y le hacen pruebas importantes. La mayoria de los bebes estan sanos, pero algunos necesitan atencion especial. | When a baby is born, doctors evaluate them to make sure they are healthy. They give a score called APGAR at 1 and 5 minutes of life. They also examine them head to toe and do important tests. Most babies are healthy, but some need special attention.',
      explanation: `## Explicacion Simple para Padres

Cuando su bebe nace, el equipo medico hace varias cosas para asegurarse de que este sano. Aqui le explicamos que esperar.

### El Puntaje APGAR

Es una evaluacion rapida que hacen al minuto y a los 5 minutos de nacido. Evalua 5 cosas:
- **A** - Apariencia (color de la piel)
- **P** - Pulso (latidos del corazon)
- **G** - Gestos/muecas (reaccion a estimulos)
- **A** - Actividad (tono muscular)
- **R** - Respiracion

Cada cosa se califica de 0 a 2. Un puntaje de 7-10 a los 5 minutos es normal.

### El primer examen del bebe

El doctor revisara:
- **Cabeza:** La forma (puede estar alargada por el parto, es normal), la fontanela ("mollera", el punto suave arriba de la cabeza)
- **Ojos:** Que ambos ojos se vean normales
- **Corazon:** Que no tenga soplos (sonidos anormales)
- **Pulmones:** Que respire bien
- **Abdomen:** Que este suave, que el cordon umbilical se vea bien
- **Caderas:** Que las caderas esten bien formadas (maniobra de Barlow/Ortolani)
- **Piel:** Color, marcas de nacimiento
- **Genitales:** Que se vean normales
- **Reflejos:** Que tenga reflejos normales de recien nacido

### Pruebas importantes que le hacen al bebe

- **Tamizaje neonatal (prueba del talon):** Se saca una gotita de sangre del talon para buscar enfermedades raras pero tratables (hipotiroidismo, fenilcetonuria, drepanocitosis, etc.)
- **Prueba de oximetria:** Un sensor en el pie mide el oxigeno en la sangre para detectar problemas del corazon
- **Prueba de audicion:** Para asegurarse de que oye bien

### Problemas comunes del recien nacido

**Ictericia (piel amarilla):**
- MUY comun: afecta al 60% de los bebes
- Causada por una sustancia llamada bilirrubina que el higado del bebe todavia no procesa bien
- Generalmente es normal y se resuelve sola
- Si es muy intensa, se trata con "luces azules" (fototerapia)
- Llame al doctor si: piel muy amarilla, bebe no come, muy somnoliento, o ictericia antes de las 24 horas

**Cordon umbilical:**
- Mantenerlo limpio y seco
- Se cae solo en 1-3 semanas
- Un poco de olor y secrecion es normal
- Llame al doctor si: enrojecimiento alrededor, mal olor fuerte, o sangrado activo

**Sarpullido del recien nacido:**
- Eritema toxico: manchas rojas con puntito blanco, MUY comun, es normal
- Milia: puntitos blancos en la nariz, son normales y desaparecen solos
- Acne neonatal: granitos en la cara, normal, no apretar

**Alimentacion:**
- El bebe debe comer cada 2-3 horas (8-12 veces al dia)
- Amamantar es lo ideal si es posible
- En las primeras 24 horas, la cantidad es muy pequena y eso es normal
- Senales de que esta comiendo bien: 6+ panales mojados al dia despues del dia 4, ganando peso

### Cuando llamar al doctor URGENTE

- No come en mas de 4 horas
- Temperatura >100.4F (38C) o <97.7F (36.5C)
- Piel azulada (labios, cara)
- Respiracion rapida o dificultad para respirar
- Llanto inconsolable por horas
- No tiene panales mojados en 8+ horas
- Vomito en proyectil (no es lo mismo que "devolver un poquito")
- Ictericia intensa antes de las 24 horas de vida

---
## Simple Explanation for Parents

[The Spanish section above covers APGAR scoring, the first newborn exam, newborn screening tests, common problems (jaundice, umbilical cord care, rashes, feeding), and emergency warning signs for new parents.]`,
      keyTerms: [
        {
          term: 'APGAR | APGAR score',
          definition:
            'Evaluacion rapida del bebe al nacer que mide 5 cosas: color de piel, latidos del corazon, reflejos, tono muscular y respiracion. Se hace al minuto y a los 5 minutos. Puntaje de 7-10 es normal. | Quick newborn evaluation measuring 5 things: skin color, heartbeat, reflexes, muscle tone, and breathing. Done at 1 and 5 minutes. Score of 7-10 is normal.',
          pronunciation: 'AP-gar',
        },
        {
          term: 'ictericia neonatal | neonatal jaundice',
          definition:
            'Color amarillo de la piel y ojos del bebe causado por una sustancia llamada bilirrubina. Es muy comun (60% de bebes) y generalmente se resuelve sola. Si es severa, se trata con luces especiales. | Yellow color of baby skin and eyes caused by a substance called bilirubin. Very common (60% of babies) and usually resolves on its own. If severe, treated with special lights.',
          pronunciation: 'eek-teh-REE-see-ah neh-oh-nah-TAHL',
        },
        {
          term: 'fontanela (mollera) | fontanelle (soft spot)',
          definition:
            'El punto suave en la parte de arriba de la cabeza del bebe donde los huesos del craneo no se han unido todavia. Es normal y se cierra entre los 12-18 meses. | The soft spot on top of the baby head where skull bones have not yet joined. It is normal and closes between 12-18 months.',
          pronunciation: 'fon-tah-NEH-lah (moh-YEH-rah)',
        },
        {
          term: 'tamizaje neonatal (prueba del talon) | newborn screening (heel stick)',
          definition:
            'Prueba de sangre del talon del bebe para detectar enfermedades raras pero tratables. Se hace entre las 24-48 horas de vida. Puede salvar la vida de su bebe si se detecta algo temprano. | Blood test from the baby heel to detect rare but treatable diseases. Done between 24-48 hours of life. Can save your baby life if something is detected early.',
          pronunciation: 'tah-mee-SAH-heh neh-oh-nah-TAHL',
        },
      ],
      analogies: [
        'El puntaje APGAR es como una boleta de calificaciones rapida para el bebe: le dice al doctor que tan bien le esta yendo al bebe en sus primeros minutos de vida. | The APGAR score is like a quick report card for the baby: it tells the doctor how well the baby is doing in their first minutes of life.',
        'La fontanela (mollera) es como una ventana que permite que la cabeza del bebe sea flexible para pasar por el canal de parto y que el cerebro crezca. Se cierra cuando ya no la necesita. | The fontanelle (soft spot) is like a window that allows the baby head to be flexible for passing through the birth canal and for the brain to grow. It closes when it is no longer needed.',
        'La ictericia es como un filtro amarillo: el higado del bebe todavia esta aprendiendo a limpiar la sangre. Las luces azules ayudan a descomponer la bilirrubina mientras el higado madura. | Jaundice is like a yellow filter: the baby liver is still learning to clean the blood. Blue lights help break down bilirubin while the liver matures.',
      ],
      examples: [
        'Un bebe nace llorando fuerte, rosado, con buen tono muscular. Su APGAR es 8 al minuto y 9 a los 5 minutos. Esto es excelente. | A baby is born crying strongly, pink, with good muscle tone. Their APGAR is 8 at 1 minute and 9 at 5 minutes. This is excellent.',
        'Al dia 3, la piel del bebe se ve un poco amarilla. El doctor mide la bilirrubina y esta en nivel normal alto. Le dice que le de sol indirecto y que lo amamante frecuentemente. | On day 3, the baby skin looks a little yellow. The doctor measures bilirubin and it is at high normal level. They tell the parent to give indirect sunlight and breastfeed frequently.',
      ],
      patientCounselingPoints: [
        'Ponga al bebe "piel con piel" sobre su pecho despues de nacer: esto ayuda a regular su temperatura, respiracion y promueve la lactancia. | Place the baby "skin to skin" on your chest after birth: this helps regulate their temperature, breathing, and promotes breastfeeding.',
        'La cabeza del bebe puede verse alargada o con un "chichon" (caput succedaneum) despues del parto vaginal. Esto es completamente normal y se resuelve en dias. | The baby head may look elongated or have a bump (caput succedaneum) after vaginal delivery. This is completely normal and resolves in days.',
        'La prueba del talon es IMPORTANTISIMA. No la rechace. Detecta enfermedades que si se tratan temprano no causan dano, pero si no se tratan pueden causar discapacidad o muerte. | The heel prick test is VERY IMPORTANT. Do not refuse it. It detects diseases that if treated early cause no harm, but if untreated can cause disability or death.',
        'La fiebre en un recien nacido (<28 dias) es SIEMPRE una emergencia. Lleve al bebe al hospital inmediatamente si la temperatura es >100.4F (38C). | Fever in a newborn (<28 days) is ALWAYS an emergency. Take the baby to the hospital immediately if temperature is >100.4F (38C).',
        'Para dormir: siempre BOCA ARRIBA, en superficie firme, sin cobijas, almohadas ni peluches en la cuna. Esto previene la muerte subita (SIDS). | For sleeping: always on their BACK, on a firm surface, without blankets, pillows, or stuffed animals in the crib. This prevents sudden infant death (SIDS).',
      ],
    },

    2: {
      level: 2,
      summary:
        'La evaluacion neonatal sistematica incluye el puntaje APGAR, el examen fisico completo del recien nacido, la clasificacion por edad gestacional (pretermino, termino, postermino) y peso (PEG, AEG, GEG), el tamizaje neonatal universal, y el reconocimiento de problemas comunes como ictericia fisiologica, hallazgos cutaneos benignos, y las causas de ingreso a UCIN. | Systematic neonatal assessment includes APGAR scoring, complete newborn physical exam, classification by gestational age (preterm, term, post-term) and weight (SGA, AGA, LGA), universal newborn screening, and recognition of common issues like physiological jaundice, benign skin findings, and NICU admission causes.',
      explanation: `## Explicacion Intermedia | Intermediate Explanation

### Puntaje APGAR | APGAR Score

| Componente | 0 Puntos | 1 Punto | 2 Puntos |
|-----------|---------|---------|---------|
| **A**pariencia (color) | Azulado/palido | Cuerpo rosado, extremidades azuladas (acrocianosis) | Completamente rosado |
| **P**ulso (FC) | Ausente | <100 lpm | >=100 lpm |
| **G**estos (irritabilidad refleja) | Sin respuesta | Mueca/llanto debil | Tos, estornudo, llanto vigoroso |
| **A**ctividad (tono muscular) | Flacido | Alguna flexion de extremidades | Movimiento activo, buena flexion |
| **R**espiracion | Ausente | Lenta, irregular, llanto debil | Llanto fuerte, respiracion regular |

**Interpretacion:**
- 7-10: Normal (la mayoria de los bebes)
- 4-6: Requiere estimulacion, posiblemente oxigeno
- 0-3: Requiere reanimacion inmediata

**Importante:** El APGAR no determina el pronostico neurologico a largo plazo. No se usa para decidir reanimacion (se inicia reanimacion basada en evaluacion clinica, no se espera al APGAR).

### Clasificacion del Recien Nacido | Newborn Classification

**Por edad gestacional:**
| Clasificacion | Semanas de Gestacion |
|--------------|---------------------|
| Pretermino extremo | <28 semanas |
| Muy pretermino | 28-31 semanas |
| Pretermino moderado/tardio | 32-36 semanas |
| Termino | 37-41 semanas |
| Postermino | >=42 semanas |

**Por peso al nacer:**
| Clasificacion | Peso |
|--------------|------|
| Extremo bajo peso | <1000 g |
| Muy bajo peso | 1000-1499 g |
| Bajo peso | 1500-2499 g |
| Normal | 2500-3999 g |
| Macrosomia | >=4000 g |

**Por peso en relacion con edad gestacional (curvas de Fenton/Intergrowth-21):**
- PEG (Pequeno para Edad Gestacional): <percentil 10
- AEG (Adecuado para Edad Gestacional): percentil 10-90
- GEG (Grande para Edad Gestacional): >percentil 90

### Examen Fisico del Recien Nacido | Newborn Physical Exam

**Cabeza:**
- Fontanela anterior: diamante, 2-4 cm, se cierra 12-18 meses
- Fontanela posterior: triangular, <1 cm, se cierra 2-3 meses
- Caput succedaneum: edema del cuero cabelludo que cruza suturas (benigno, se resuelve en dias)
- Cefalohematoma: hematoma subperiostico que NO cruza suturas (se resuelve en semanas-meses)
- Craneosinostosis: cierre prematuro de suturas (requiere referencia)

**Ojos:**
- Reflejo rojo bilateral: debe estar presente (ausencia = catarata congenita o retinoblastoma)
- Hemorragia subconjuntival: comun post-parto vaginal, benigna

**Corazon:**
- FC normal: 120-160 lpm
- Soplos del primer dia: la mayoria son benignos (cierre del ductus)
- Soplos persistentes: requieren ecocardiograma

**Abdomen:**
- Cordon umbilical: 2 arterias + 1 vena (arteria umbilical unica: asociacion con anomalias renales)
- Examinar por masa (tumor de Wilms, neuroblastoma), hepatoesplenomegalia

**Caderas:**
- Maniobra de Barlow: intenta luxar la cadera (positiva = inestable)
- Maniobra de Ortolani: reduce una cadera luxada (positiva = "clic" de reduccion)
- Factores de riesgo DDC: sexo femenino, presentacion pelvica, antecedente familiar

**Genitales:**
- Masculino: verificar descenso testicular bilateral, meato uretral en posicion
- Femenino: flujo blanquecino o sangrado minimo = retiro de estrogenos maternos (normal)

### Hallazgos Cutaneos Benignos del Recien Nacido | Benign Skin Findings

| Hallazgo | Descripcion | Significado |
|---------|-------------|------------|
| Eritema toxico neonatorum | Maculas eritematosas con pustula central, aparecen dia 1-3 | Benigno, se resuelve en dias |
| Milia | Papulas blancas 1-2 mm en nariz/mejillas | Quistes de queratina, se resuelven en semanas |
| Mancha mongolica (melanocitosis dermica) | Mancha azul-grisacea en sacro/nalgas | MUY comun en ninos hispanos/latinos, asiaticos, afroamericanos. Benigna. NO confundir con moreton |
| Hemangioma infantil | Lesion vascular roja/rosada, aparece semanas 1-4 | Crece primeros 6 meses, involuciona. Si es peri-ocular o >5, evaluar por PHACE |
| Nevo simple (mancha salmon) | Mancha rosada plana en nuca, parpados, glabela | "Picada de ciguena" (nuca) o "beso de angel" (frente). Benigno |

### Ictericia Neonatal | Neonatal Jaundice

**Ictericia fisiologica vs. patologica:**
| Caracteristica | Fisiologica | Patologica |
|---------------|-------------|-----------|
| Inicio | >24 horas de vida | <24 horas de vida |
| Pico | Dia 3-5 (termino), dia 5-7 (pretermino) | Variable |
| Bilirrubina total | <12-15 mg/dL en termino | >percentil 95 en nomograma de Bhutani |
| Bilirrubina directa | Normal (<1 mg/dL o <20% del total) | Elevada (>1 mg/dL o >20%) = SIEMPRE patologica |
| Duracion | <2 semanas | >2 semanas |
| Causas | Inmadurez hepatica, aumento de produccion | Hemolisis (ABO, Rh), sepsis, metabolica |

**Nomograma de Bhutani:**
- Grafica bilirrubina serica vs. horas de vida
- Clasifica el riesgo en zonas: bajo, intermedio-bajo, intermedio-alto, alto
- Guia las decisiones de fototerapia y seguimiento

### Tamizaje Neonatal Universal | Universal Newborn Screening

**Condiciones comunmente tamizadas (varia por estado/pais):**
| Categoria | Ejemplos |
|-----------|----------|
| Endocrinas | Hipotiroidismo congenito, hiperplasia suprarrenal congenita (CAH) |
| Aminoacidopatias | Fenilcetonuria (PKU), enfermedad de la orina de jarabe de arce |
| Acidos grasos | MCAD, VLCAD, LCHAD |
| Acidos organicos | Acidemia propionica, acidemia metilmalonica |
| Hemoglobinopatias | Drepanocitosis, talasemia |
| Otros | Fibrosis quistica, inmunodeficiencia combinada severa (SCID), galactosemia |

**Tamizajes adicionales:**
- Oximetria de pulso critica (CCHD): detecta cardiopatias congenitas criticas
- Tamizaje auditivo universal: OEA (otoemisiones acusticas) o BERA (potenciales evocados)

---
## Intermediate Explanation

[The above covers APGAR scoring with interpretation, newborn classification by gestational age and weight, systematic physical exam findings (head, eyes, heart, abdomen, hips, genitals, skin), physiological vs. pathological jaundice with the Bhutani nomogram, and universal newborn screening programs.]`,
      keyTerms: [
        {
          term: 'cefalohematoma vs. caput succedaneum',
          definition:
            'Cefalohematoma: hematoma subperiostico que NO cruza suturas, aparece horas despues del parto, se resuelve en semanas. Caput: edema del cuero cabelludo que SI cruza suturas, presente al nacer, se resuelve en dias. | Cephalohematoma: subperiosteal hematoma that does NOT cross sutures, appears hours after delivery, resolves in weeks. Caput: scalp edema that DOES cross sutures, present at birth, resolves in days.',
          pronunciation: 'seh-fah-loh-eh-mah-TOH-mah',
        },
        {
          term: 'nomograma de Bhutani | Bhutani nomogram',
          definition:
            'Grafica que relaciona el nivel de bilirrubina con las horas de vida del recien nacido para clasificar el riesgo de hiperbilirrubinemia severa y guiar la decision de fototerapia y seguimiento. | Graph relating bilirubin level with newborn hours of life to classify risk of severe hyperbilirubinemia and guide phototherapy and follow-up decisions.',
          pronunciation: 'BOO-tah-nee',
        },
        {
          term: 'mancha mongolica (melanocitosis dermica) | Mongolian spot (dermal melanocytosis)',
          definition:
            'Mancha azul-grisacea en region sacra/nalgas, extremadamente comun en ninos hispanos, asiaticos y afroamericanos (>90%). Benigna, se desvanece con la edad. Importante: NO confundir con moreton ni reportar como maltrato. | Blue-gray patch on sacral/buttock region, extremely common in Hispanic, Asian, and African American infants (>90%). Benign, fades with age. Important: do NOT confuse with bruise or report as abuse.',
          pronunciation: 'MAHN-chah mon-GOH-lee-kah',
        },
        {
          term: 'displasia del desarrollo de la cadera (DDC) | developmental dysplasia of the hip (DDH)',
          definition:
            'Espectro de anomalias de la cadera desde inestabilidad hasta luxacion completa. Se detecta con maniobras de Barlow (luxa) y Ortolani (reduce). Factores de riesgo: sexo femenino, presentacion pelvica, antecedente familiar. Tratamiento temprano con arnes de Pavlik. | Spectrum of hip abnormalities from instability to complete dislocation. Detected with Barlow (dislocates) and Ortolani (reduces) maneuvers. Risk factors: female sex, breech presentation, family history. Early treatment with Pavlik harness.',
          pronunciation: 'dees-PLAH-see-ah deh kah-DEH-rah',
        },
      ],
      analogies: [
        'El nomograma de Bhutani es como un GPS para la bilirrubina: te dice exactamente donde estas (nivel de bilirrubina + edad del bebe) y si estas en zona segura o de riesgo. | The Bhutani nomogram is like a GPS for bilirubin: it tells you exactly where you are (bilirubin level + baby age) and whether you are in a safe or risk zone.',
        'Las maniobras de Barlow y Ortolani son como probar una bisagra: Barlow empuja la cadera para ver si se sale (luxa), y Ortolani intenta regresarla a su lugar (reduce). Si se mueve, la cadera necesita tratamiento. | Barlow and Ortolani maneuvers are like testing a hinge: Barlow pushes the hip to see if it comes out (dislocates), and Ortolani tries to put it back (reduces). If it moves, the hip needs treatment.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La evaluacion neonatal avanzada integra la transicion cardiopulmonar al nacer (cierre del foramen oval, cierre del ductus arterioso, caida de la resistencia vascular pulmonar), la fisiologia de la ictericia y el metabolismo de la bilirrubina, la edad gestacional estimada por examen fisico (Ballard), el protocolo de reanimacion neonatal (NRP), y las patologias neonatales que requieren reconocimiento inmediato. | Advanced neonatal assessment integrates cardiopulmonary transition at birth (foramen ovale closure, ductus arteriosus closure, pulmonary vascular resistance drop), jaundice physiology and bilirubin metabolism, gestational age estimation by physical exam (Ballard), neonatal resuscitation protocol (NRP), and neonatal pathologies requiring immediate recognition.',
      explanation: `## Explicacion Nivel Universitario | College-Level Explanation

### Transicion Cardiopulmonar al Nacer | Cardiopulmonary Transition

**Circulacion fetal -> Circulacion neonatal:**

\`\`\`
FETAL:                                    NEONATAL:
Placenta es el organo de intercambio      Pulmones asumen intercambio gaseoso
        |                                         |
Shunts fetales abiertos:                  Shunts se cierran:
1. Ductus venoso (flujo umbilical->VCI)   1. Ductus venoso se cierra (dias 3-7)
2. Foramen oval (AD->AI)                  2. Foramen oval se cierra funcionalmente
3. Ductus arterioso (AP->Aorta)           3. Ductus arterioso se cierra (24-72h)
        |                                         |
RVP alta, RVS baja                        RVP cae, RVS sube (al pinzar cordon)
Pulmones reciben 10% del gasto cardiaco   Pulmones reciben 100% del gasto cardiaco
\`\`\`

**Mecanismos del cierre del ductus arterioso:**
1. Aumento de la PaO2 al nacer -> constriccion del musculo liso ductal
2. Caida de prostaglandina E2 (PGE2) que mantenia el ductus abierto
3. Si no cierra -> Ductus Arterioso Persistente (DAP/PDA)
4. Tratamiento del DAP: indometacina o ibuprofeno (inhiben COX -> reducen PGE2)
5. Si se NECESITA mantener abierto (cardiopatia ductus-dependiente): alprostadil (PGE1 IV)

### Protocolo de Reanimacion Neonatal (NRP) | Neonatal Resuscitation

**Algoritmo NRP (8a edicion, AAP 2021-actualizado):**

\`\`\`
Nacimiento
    |
Preguntas iniciales:
1. Es de termino? (>=34 semanas)
2. Tiene buen tono?
3. Respira o llora?
    |
SI a las 3 -> Cuidados de rutina: piel con piel, secar, estimular
NO a alguna -> Mesa de reanimacion
    |
Pasos iniciales (30 segundos): calentar, posicionar via aerea, secar, estimular
    |
Evaluar: respira? FC >=100?
    SI -> Cuidados post-reanimacion
    NO -> VPP (ventilacion a presion positiva) con aire al 21-30%
    |
30 segundos de VPP -> Evaluar FC
    FC >=100, respira -> Cuidados post-reanimacion
    FC 60-99 -> Optimizar VPP (MR SOPA*), considerar intubacion
    FC <60 -> Compresiones toracicas 3:1 + VPP con O2 100%
    |
FC <60 a pesar de compresiones + VPP efectiva -> Epinefrina IV/IO (0.01-0.03 mg/kg)
\`\`\`

**MR SOPA (optimizacion de VPP):**
- **M**ask adjustment (ajustar mascara)
- **R**eposition (reposicionar via aerea)
- **S**uction (aspirar)
- **O**pen mouth (abrir boca)
- **P**ressure increase (aumentar presion)
- **A**irway alternative (via aerea alternativa: tubo endotraqueal o mascara laringea)

### Metabolismo de la Bilirrubina e Ictericia | Bilirubin Metabolism

**Via metabolica:**
\`\`\`
Hemoglobina (de globulos rojos envejecidos/hemolizados)
        | (hemo-oxigenasa)
Biliverdina
        | (biliverdina reductasa)
Bilirrubina indirecta (no conjugada, liposoluble, neurotoxica)
        | (transportada unida a albumina en sangre)
Higado: captacion por hepatocito
        | (UDP-glucuronosiltransferasa / UGT1A1)
Bilirrubina directa (conjugada, hidrosoluble, no toxica)
        | (excretada a bilis -> intestino)
Intestino: eliminacion en heces
        | PERO: beta-glucuronidasa intestinal reconvierte a indirecta
Circulacion enterohepatica (recirculacion al higado)
\`\`\`

**Por que los recien nacidos hacen ictericia?**
1. Mayor masa de globulos rojos (Hb fetal -> policitemia relativa)
2. Vida media del eritrocito fetal mas corta (70-90 dias vs. 120 en adulto)
3. UGT1A1 hepatica inmadura (actividad <1% al nacer, madura en semanas)
4. Mayor circulacion enterohepatica (flora intestinal escasa, mas beta-glucuronidasa)
5. Menor ingesta calórica en primeros dias (menor motilidad intestinal)

**Fototerapia:**
- Mecanismo: luz azul (430-490 nm) convierte bilirrubina en lumirrubina (isomero hidrosoluble excretable sin conjugacion)
- Indicaciones: segun nomograma de Bhutani y guias AAP 2022
- Fototerapia intensiva: irradiancia >= 30 mcW/cm2/nm
- Exanguinotransfusion: si bilirrubina alcanza niveles criticos a pesar de fototerapia o si hay signos de kernicterus

**Kernícterus (encefalopatia bilirubinica):**
- Deposito de bilirrubina no conjugada en ganglios basales, hipocampo, nucleos de pares craneales
- Factores de riesgo: prematurez, hemolisis, hipoalbuminemia, acidosis, sepsis
- Clinica aguda: letargia, hipotonia, llanto agudo, convulsiones, opistótonos
- Secuelas cronicas: paralisis cerebral atetoide, sordera neurosensorial, parálisis de la mirada vertical

### Edad Gestacional por Examen Fisico (Ballard Score) | Gestational Age Assessment

**Criterios de madurez neuromuscular (6):** postura, ventana cuadrada de la muneca, retroceso del brazo, angulo popliteo, signo de la bufanda, talon-oreja

**Criterios de madurez fisica (7):** piel, lanugo, superficie plantar, mama, ojo/oreja, genitales masculinos, genitales femeninos

- Puntaje total se correlaciona con edad gestacional (20-44 semanas)
- Precision: +/- 2 semanas
- Mejor realizarlo en las primeras 12-24 horas de vida

### Patologias Neonatales de Reconocimiento Inmediato | Emergent Neonatal Conditions

| Condicion | Presentacion Clave | Accion Inmediata |
|-----------|-------------------|-----------------|
| Atresia esofagica | Salivacion excesiva, imposibilidad de pasar sonda orogastrica | Sonda en bolsa esofagica, aspiracion continua, cirugia |
| Hernia diafragmatica | Dificultad respiratoria, abdomen escafoide, ruidos intestinales en torax | NO ventilar con bolsa-mascara, intubar, sonda OG |
| Neumotorax a tension | Dificultad respiratoria subita, desviacion traqueal | Descompresion con aguja, tubo pleural |
| Gastrosquisis/onfalocele | Asas intestinales expuestas | Cubrir con gasa humeda esteril, referencia quirurgica |
| Cardiopatia ductus-dependiente | Cianosis que no mejora con oxigeno, shock al cerrar ductus | PGE1 (alprostadil IV), ecocardiograma urgente |
| Fiebre neonatal (<28 dias) | Temperatura >38C en recien nacido | Hemocultivos, PL, urocultivo, antibioticos empiricos IV |

---
## College-Level Explanation

[The above covers fetal-to-neonatal cardiopulmonary transition, NRP algorithm with MR SOPA, bilirubin metabolism pathway, phototherapy mechanism, kernicterus, Ballard gestational age assessment, and emergent neonatal conditions requiring immediate recognition.]`,
      keyTerms: [
        {
          term: 'ductus arterioso persistente (DAP/PDA) | patent ductus arteriosus',
          definition:
            'Comunicacion persistente entre la aorta y la arteria pulmonar que normalmente se cierra en las primeras 24-72 horas. En prematuros, la falta de cierre causa shunt izquierda-derecha, sobrecarga pulmonar y potencialmente insuficiencia cardiaca. Tratamiento: indometacina/ibuprofeno. | Persistent communication between aorta and pulmonary artery that normally closes in first 24-72 hours. In premature infants, failure to close causes left-to-right shunt, pulmonary overload, and potentially heart failure. Treatment: indomethacin/ibuprofen.',
          pronunciation: 'DOOK-toos ar-teh-ree-OH-soh',
        },
        {
          term: 'kernicterus (encefalopatia bilirubinica) | kernicterus',
          definition:
            'Dano cerebral irreversible por deposito de bilirrubina no conjugada en ganglios basales, hipocampo y nucleos de pares craneales. Causa paralisis cerebral atetoide, sordera neurosensorial y paralisis de la mirada vertical. Prevenible con fototerapia oportuna. | Irreversible brain damage from unconjugated bilirubin deposition in basal ganglia, hippocampus, and cranial nerve nuclei. Causes athetoid cerebral palsy, sensorineural deafness, and vertical gaze palsy. Preventable with timely phototherapy.',
          pronunciation: 'ker-NIK-teh-roos',
        },
        {
          term: 'NRP (Programa de Reanimacion Neonatal) | Neonatal Resuscitation Program',
          definition:
            'Protocolo estandarizado de la AAP para la reanimacion del recien nacido. Secuencia: pasos iniciales -> VPP (ventilacion) -> compresiones toracicas -> epinefrina. La mayoria de los RN solo necesitan pasos iniciales (secado, estimulacion). | Standardized AAP protocol for newborn resuscitation. Sequence: initial steps -> PPV (ventilation) -> chest compressions -> epinephrine. Most newborns only need initial steps (drying, stimulation).',
          pronunciation: 'ene-erre-peh',
        },
        {
          term: 'Ballard Score | puntaje de Ballard',
          definition:
            'Sistema de evaluacion de la edad gestacional basado en criterios de madurez neuromuscular (6) y madurez fisica (7). Precision de +/- 2 semanas. Debe realizarse en las primeras 12-24 horas de vida para maxima precision. | Gestational age assessment system based on neuromuscular maturity (6) and physical maturity (7) criteria. Accuracy of +/- 2 weeks. Should be performed in the first 12-24 hours for maximum accuracy.',
          pronunciation: 'BAH-lard',
        },
        {
          term: 'circulacion enterohepatica | enterohepatic circulation',
          definition:
            'Recirculacion de bilirrubina del intestino al higado. En recien nacidos es mayor por beta-glucuronidasa intestinal elevada y flora intestinal escasa, contribuyendo a la ictericia fisiologica. | Recirculation of bilirubin from intestine to liver. In newborns it is increased due to elevated intestinal beta-glucuronidase and scarce intestinal flora, contributing to physiological jaundice.',
          pronunciation: 'en-teh-roh-eh-PAH-tee-kah',
        },
      ],
      clinicalNotes:
        'En el NRP, el paso mas importante es la ventilacion efectiva. El 90% de los recien nacidos solo necesitan pasos iniciales; del 10% restante, la mayoria responde a VPP sola. Solo <1% necesita compresiones y <0.1% necesita epinefrina. MR SOPA es un mnemotecnico invaluable para resolver ventilacion inefectiva antes de escalar a compresiones. En la ictericia, la bilirrubina directa >1 mg/dL o >20% del total es SIEMPRE patologica (colestasis) y requiere evaluacion urgente (atresia biliar, infeccion TORCH, metabolica). La mancha mongolica es extremadamente comun en ninos hispanos/latinos (>90%) y debe documentarse en el expediente para evitar que sea confundida con moreton por maltrato infantil. | In NRP, the most important step is effective ventilation. 90% of newborns only need initial steps; of the remaining 10%, most respond to PPV alone. Only <1% need compressions and <0.1% need epinephrine. MR SOPA is an invaluable mnemonic for troubleshooting ineffective ventilation before escalating to compressions. In jaundice, direct bilirubin >1 mg/dL or >20% of total is ALWAYS pathological (cholestasis) and requires urgent evaluation (biliary atresia, TORCH infection, metabolic). Mongolian spot is extremely common in Hispanic/Latino infants (>90%) and must be documented in the chart to prevent confusion with bruising from child abuse.',
    },

    4: {
      level: 4,
      summary:
        'La neonatologia avanzada integra la fisiopatologia de la prematurez (EMH/SDR, DBP, ECN, HIV/IVH, ROP), la termorregulacion neonatal y el estres por frio, la enfermedad hemolitica del recien nacido (incompatibilidad Rh y ABO), el protocolo de evaluacion del recien nacido febril (protocolo de Rochester/Philadelphia/Boston), y la farmacologia neonatal con sus particularidades farmacocineticas. | Advanced neonatology integrates prematurity pathophysiology (RDS, BPD, NEC, IVH, ROP), neonatal thermoregulation and cold stress, hemolytic disease of the newborn (Rh and ABO incompatibility), febrile newborn evaluation protocol (Rochester/Philadelphia/Boston), and neonatal pharmacology with its pharmacokinetic particularities.',
      explanation: `## Explicacion de Posgrado | Graduate-Level Explanation

### Complicaciones de la Prematurez | Complications of Prematurity

| Complicacion | Fisiopatologia | Edad Gestacional de Riesgo | Prevencion/Tratamiento |
|-------------|---------------|---------------------------|----------------------|
| SDR/EMH (Sindrome de Dificultad Respiratoria) | Deficiencia de surfactante -> colapso alveolar | <34 semanas (pico <28 sem) | Esteroides prenatales (betametasona), surfactante exogeno, CPAP |
| DBP (Displasia Broncopulmonar) | Dano inflamatorio + desarrollo pulmonar interrumpido | <28 semanas | Minimizar O2 y barotrauma, cafeina, vitamina A |
| ECN (Enterocolitis Necrosante) | Isquemia intestinal + respuesta inflamatoria + bacterias | <32 semanas (especialmente <28) | Leche materna (protectora), probioticos (evidencia creciente) |
| HIV/IVH (Hemorragia Intraventricular) | Fragilidad de la matriz germinal + fluctuaciones del flujo cerebral | <32 semanas | Manejo suave, evitar fluctuaciones de PA, indometacina profilactica (controversia) |
| ROP (Retinopatia del Prematuro) | Vasculogenesis retiniana incompleta + hiperoxia | <32 semanas, <1500 g | Mantener SpO2 89-94%, tamizaje oftalmologico, laser/anti-VEGF |

**Clasificacion de HIV/IVH:**
| Grado | Hallazgo |
|-------|---------|
| I | Hemorragia limitada a la matriz germinal |
| II | Hemorragia intraventricular sin dilatacion ventricular |
| III | Hemorragia intraventricular CON dilatacion ventricular |
| IV | Hemorragia con infarto parenquimatoso (infarto venoso periventricular) |

**Surfactante pulmonar:**
- Composicion: 90% lipidos (dipalmitoilfosfatidilcolina principal) + 10% proteinas (SP-A, SP-B, SP-C, SP-D)
- Funcion: reduce tension superficial alveolar, previene colapso al final de la espiracion
- Produccion: neumocitos tipo II, a partir de semana 20 pero suficiente desde semana 34-36
- Aceleracion: corticosteroides prenatales aumentan produccion (betametasona 12 mg IM x 2 dosis, 24h aparte)
- Marcador de madurez: relacion lecitina/esfingomielina (L/S) >2.0 = madurez

### Termorregulacion Neonatal | Neonatal Thermoregulation

**Mecanismos de perdida de calor:**
| Mecanismo | Descripcion | Prevencion |
|-----------|-------------|-----------|
| Evaporacion | Perdida de calor por evaporacion de liquido de la piel (principal al nacer) | Secar inmediatamente, gorro |
| Conduccion | Transferencia de calor a superficie fria (bascula, colchon) | Precalentar superficies |
| Conveccion | Perdida de calor al aire ambiente | Mantener temperatura de sala >25C |
| Radiacion | Perdida de calor a objetos frios cercanos (paredes, ventanas) | Incubadora de doble pared, calentador radiante |

**Respuesta al frio en el recien nacido:**
- Los RN NO pueden hacer escalofrios (shivering)
- Usan termogenesis de la grasa parda (brown fat thermogenesis)
- Grasa parda: localizada en region interescapular, perirrenal, periespinal
- Mecanismo: UCP1 (uncoupling protein 1) desacopla la fosforilacion oxidativa -> genera calor
- Prematuros: escasa grasa parda -> hipotermia rapida -> acidosis metabolica -> vasoconstriccion pulmonar -> hipoxia

### Enfermedad Hemolitica del Recien Nacido | Hemolytic Disease of the Newborn

**Incompatibilidad Rh:**
| Aspecto | Detalle |
|---------|---------|
| Mecanismo | Madre Rh(-) se sensibiliza a antigeno D de eritrocitos Rh(+) del feto. IgG anti-D cruza placenta -> hemolisis fetal. |
| Primer embarazo | Generalmente NO afectado (sensibilizacion ocurre en el parto) |
| Embarazos subsiguientes | Respuesta anamnesiica (IgG) -> hemolisis severa |
| Prevencion | RhoGAM (anti-D) a las 28 semanas y dentro de 72h post-parto |
| Presentacion severa | Hidrops fetalis: edema generalizado, ascitis, derrame pleural, anemia severa |
| Diagnostico | Coombs directo (+) en RN, Coombs indirecto (+) en madre |

**Incompatibilidad ABO:**
| Aspecto | Detalle |
|---------|---------|
| Mecanismo | Madre tipo O tiene anti-A y anti-B IgG naturales que cruzan placenta |
| Severidad | Generalmente LEVE (comparada con Rh) |
| Primer embarazo | PUEDE afectarse (anticuerpos naturales preexistentes) |
| Diagnostico | Coombs directo debilmente (+) o (-), esferocitos en frotis |
| Tratamiento | Fototerapia; rara vez exanguinotransfusion |

### Evaluacion del Recien Nacido Febril (<28 dias) | Febrile Neonate Evaluation

**Principio fundamental:** La fiebre en un recien nacido es sepsis hasta probar lo contrario.

**Protocolo clasico de evaluacion completa:**
1. Hemograma con diferencial
2. Hemocultivos (2 sets)
3. Analisis y cultivo de orina (por cateterizacion, NO bolsa)
4. Puncion lumbar (LCR: cultivo, celularidad, glucosa, proteinas)
5. Procalcitonina y/o PCR
6. Iniciar antibioticos empiricos SIN esperar resultados: ampicilina + gentamicina (o + cefotaxima si sospecha meningitis)

**Estratificacion de riesgo (criterios de bajo riesgo para manejo ambulatorio):**
| Criterio | Rochester | Philadelphia | Boston |
|---------|----------|-------------|--------|
| Edad | 0-60 dias | 29-60 dias | 28-89 dias |
| Aspecto | Bien | Bien | Bien |
| Sin foco | Si | Si | Si |
| GB | 5,000-15,000 | <15,000 | <20,000 |
| Bandas | <1,500 | <0.2 ratio | - |
| AO (orina) | <10 WBC/hpf | <10 WBC/hpf | <10 WBC/hpf |
| LCR | - | <8 WBC/mm3 | <10 WBC/mm3 |
| Manejo bajo riesgo | Ambulatorio sin ABx | Ambulatorio con ceftriaxona IM | Ambulatorio con ceftriaxona IM |

**Nota:** El recien nacido <28 dias SIEMPRE debe tener evaluacion completa + antibioticos IV + hospitalizacion, independientemente de criterios de bajo riesgo.

---
## Graduate-Level Explanation

[The above covers prematurity complications (RDS, BPD, NEC, IVH, ROP) with pathophysiology, neonatal thermoregulation mechanisms, hemolytic disease of the newborn (Rh and ABO incompatibility), and febrile neonate evaluation protocols with risk stratification criteria.]`,
      keyTerms: [
        {
          term: 'surfactante pulmonar | pulmonary surfactant',
          definition:
            'Mezcla de lipidos (90%, DPPC predominante) y proteinas (SP-A/B/C/D) producida por neumocitos tipo II que reduce la tension superficial alveolar, previniendo el colapso. Deficiente en prematuros <34 semanas, causando SDR. Betametasona prenatal acelera su produccion. | Lipid (90%, DPPC predominant) and protein (SP-A/B/C/D) mixture produced by type II pneumocytes reducing alveolar surface tension, preventing collapse. Deficient in premature infants <34 weeks, causing RDS. Prenatal betamethasone accelerates production.',
          pronunciation: 'soor-fak-TAHN-teh',
        },
        {
          term: 'enterocolitis necrosante (ECN/NEC) | necrotizing enterocolitis',
          definition:
            'Emergencia gastrointestinal del prematuro: isquemia intestinal + invasion bacteriana -> necrosis intestinal. Factores protectores: leche materna, probioticos. Presentacion: distension abdominal, sangre en heces, neumatosis intestinal en Rx. | Premature infant GI emergency: intestinal ischemia + bacterial invasion -> intestinal necrosis. Protective factors: breast milk, probiotics. Presentation: abdominal distension, bloody stools, pneumatosis intestinalis on X-ray.',
          pronunciation: 'en-teh-roh-koh-LEE-tees neh-kroh-SAHN-teh',
        },
        {
          term: 'RhoGAM (inmunoglobulina anti-D) | anti-D immunoglobulin',
          definition:
            'Inmunoglobulina anti-D administrada a madres Rh negativas a las 28 semanas de gestacion y dentro de 72 horas post-parto para prevenir la sensibilizacion y la enfermedad hemolitica en embarazos futuros. Una de las intervenciones preventivas mas exitosas en medicina. | Anti-D immunoglobulin given to Rh negative mothers at 28 weeks gestation and within 72 hours post-partum to prevent sensitization and hemolytic disease in future pregnancies. One of the most successful preventive interventions in medicine.',
          pronunciation: 'roh-GAM',
        },
        {
          term: 'grasa parda / termogenesis sin escalofrio | brown fat / non-shivering thermogenesis',
          definition:
            'Mecanismo unico del recien nacido para generar calor sin escalofrios. La grasa parda (interescapular, perirrenal) contiene UCP1 que desacopla la fosforilacion oxidativa mitocondrial para producir calor directamente. Prematuros tienen poca grasa parda y son vulnerables a hipotermia. | Unique newborn mechanism for generating heat without shivering. Brown fat (interscapular, perirenal) contains UCP1 that uncouples mitochondrial oxidative phosphorylation to produce heat directly. Premature infants have little brown fat and are vulnerable to hypothermia.',
          pronunciation: 'GRAH-sah PAHR-dah',
        },
      ],
      clinicalNotes:
        'El manejo del prematuro es un equilibrio constante: el oxigeno es necesario para la vida pero toxico para la retina (ROP) y los pulmones (DBP). Los targets de SpO2 de 89-94% en prematuros extremos son mas estrechos que en cualquier otra poblacion. La leche materna es la "medicina" mas efectiva en la UCIN: reduce ECN en un 50-80%, reduce sepsis tardia, y mejora neurodesarrollo. En familias hispanas/latinas, las madres de prematuros pueden sentir culpa ("fue por algo que hice") y necesitan consejeria culturalmente competente. La mancha mongolica debe documentarse meticulosamente en neonatos hispanos/latinos para evitar reportes incorrectos de maltrato. En el RN febril <28 dias, NUNCA dar el alta sin evaluacion completa + antibioticos IV + hospitalizacion, incluso si "se ve bien": la sepsis neonatal puede progresar a shock en horas. | Premature infant management is a constant balance: oxygen is necessary for life but toxic to the retina (ROP) and lungs (BPD). SpO2 targets of 89-94% in extreme premature infants are tighter than in any other population. Breast milk is the most effective "medicine" in the NICU: reduces NEC by 50-80%, reduces late-onset sepsis, and improves neurodevelopment. In Hispanic/Latino families, mothers of premature infants may feel guilt ("it was something I did") and need culturally competent counseling. Mongolian spots must be meticulously documented in Hispanic/Latino neonates to avoid incorrect abuse reports. In the febrile newborn <28 days, NEVER discharge without complete evaluation + IV antibiotics + hospitalization, even if they "look well": neonatal sepsis can progress to shock in hours.',
    },

    5: {
      level: 5,
      summary:
        'La frontera de la neonatologia integra la medicina de precision neonatal (farmacogenomica, secuenciacion rapida del genoma en la UCIN), los avances en neuroproteccion (hipotermia terapeutica, eritropoyetina, celulas madre mesenquimales), la revolucion del microbioma intestinal neonatal, nuevos paradigmas en el manejo respiratorio (ventilacion no invasiva de alto flujo, cafeina temprana), y las inequidades en resultados neonatales en poblaciones hispanas/latinas. | The frontier of neonatology integrates neonatal precision medicine (pharmacogenomics, rapid genome sequencing in the NICU), advances in neuroprotection (therapeutic hypothermia, erythropoietin, mesenchymal stem cells), the neonatal gut microbiome revolution, new respiratory management paradigms (high-flow non-invasive ventilation, early caffeine), and inequities in neonatal outcomes in Hispanic/Latino populations.',
      explanation: `## Explicacion Profesional (Nivel MD) | MD/Professional-Level Explanation

### Medicina de Precision Neonatal | Neonatal Precision Medicine

**Secuenciacion rapida del genoma en la UCIN:**
| Aspecto | Detalle |
|---------|---------|
| Indicacion | RN critico con fenotipo no diagnosticado, malformaciones multiples, enfermedad metabolica sospechada |
| Tecnologia | Rapid whole genome sequencing (rWGS): resultado en 24-48 horas (vs. semanas para WGS convencional) |
| Rendimiento diagnostico | 25-45% en RN criticos no diagnosticados |
| Impacto | Cambio de manejo en 30-70% de los diagnosticados (dirigir tratamiento, evitar procedimientos inutiles, consejeria familiar) |
| Costo-efectividad | $5,000-10,000 por test; costo-efectivo si evita hospitalizacion prolongada sin diagnostico |
| Proyectos | NSIGHT (NIH), Rady Children's rWGS program, UK 100,000 Genomes Project |

**Farmacogenomica neonatal:**
| Farmaco | Gen | Variante | Implicacion |
|---------|-----|---------|-------------|
| Codeina/morfina | CYP2D6 | Metabolizadores ultra-rapidos | Toxicidad opioide en madres lactantes -> paso al RN |
| Fenitoina | CYP2C9, HLA-B*1502 | Metabolizadores lentos, alelo HLA | Toxicidad, Stevens-Johnson en asiticos/hispanos |
| Cafeina | CYP1A2 | Variantes de actividad | Metabolismo variable -> ajustar dosis |
| Midazolam | CYP3A4/5 | Ontogenia variable | Prematuros metabolizan mas lento |

### Neuroproteccion Neonatal | Neonatal Neuroprotection

**Hipotermia terapeutica (enfriamiento controlado):**
| Aspecto | Protocolo |
|---------|-----------|
| Indicacion | Encefalopatia hipoxico-isquemica (EHI) moderada-severa en RN >= 36 semanas |
| Criterios | pH <7.0 o deficit de base >= 16, O Apgar <= 5 a los 10 min + signos de encefalopatia |
| Protocolo | Enfriamiento a 33.5C (corporal total) o 34.5C (cerebral selectivo) por 72 horas |
| Inicio | Dentro de las primeras 6 horas de vida |
| NNT | ~7 (1 de cada 7 tratados evita muerte o discapacidad severa) |
| Mecanismo | Reduce metabolismo cerebral, excitotoxicidad glutamatergica, apoptosis, inflamacion |

**Terapias neuroprotectoras emergentes (adjuntas a hipotermia):**
| Terapia | Mecanismo | Estado |
|---------|-----------|--------|
| Eritropoyetina (EPO) alta dosis | Anti-inflamatoria, anti-apoptotica, promueve neurogenesis | Fase 3 (resultados HEAL trial: NO beneficio adicional) |
| Melatonina | Antioxidante, anti-inflamatorio, proteccion mitocondrial | Fase 2 (prometedor) |
| Xenon inhalado | Antagonista NMDA, reduce excitotoxicidad | Fase 2 (logisticamente complejo) |
| Alopurinol | Inhibidor de xantina oxidasa, reduce radicales libres | Fase 3 (ALBINO trial: resultados pendientes) |
| Celulas madre mesenquimales (MSC) | Paracrino: modulacion inmune, neurotrofico | Fase 1/2 |
| Magnesio sulfato prenatal | Neuroproteccion del prematuro <32 semanas | Evidencia establecida (meta-analisis) |

### Microbioma Neonatal: La Nueva Frontera | Neonatal Microbiome

**Factores que moldean el microbioma neonatal:**
| Factor | Efecto | Evidencia |
|--------|--------|-----------|
| Modo de parto | Vaginal: Lactobacillus, Prevotella. Cesarea: Staphylococcus, Clostridium | Fuerte (Dominguez-Bello, 2010) |
| Alimentacion | Leche materna: Bifidobacterium predominante. Formula: mayor diversidad, menos Bifido | Fuerte |
| Antibioticos (RN o madre) | Reduccion dramatica de diversidad, dominancia de patobiontes | Fuerte |
| UCIN (hospitalizacion prolongada) | Colonizacion nosocomial, reduccion de diversidad | Fuerte |
| Contacto piel con piel | Transferencia de microbioma materno | Moderada |
| Probioticos | Reduccion de ECN en prematuros (L. rhamnosus, B. infantis) | Meta-analisis positivos |

**Implicaciones clinicas:**
- Leche materna contiene >200 oligosacaridos (HMOs) que son PREBIOTICOS especificos para Bifidobacterium
- La disbiosis neonatal (colonizacion temprana con Clostridioides, Klebsiella, Enterococcus) se asocia con riesgo de ECN, sepsis tardia, y sensibilizacion alergica
- "Seeding vaginal" (transferencia de flora vaginal al RN nacido por cesarea): controvertido, no recomendado por AAP

### Nuevos Paradigmas en Manejo Respiratorio | Respiratory Management Evolution

| Paradigma Antiguo | Paradigma Nuevo | Evidencia |
|-------------------|----------------|-----------|
| Intubacion y surfactante inmediato | CPAP nasal + surfactante selectivo (tecnica INSURE o LISA) | RCTs (COIN, SUPPORT, VON) |
| Oxigeno libre en sala de partos | Aire al 21% para RN a termino, 21-30% para prematuros | NRP 8a edicion |
| Ventilacion mecanica prolongada | Extubacion rapida a CPAP, cafeina temprana | Meta-analisis CAP trial |
| Targets SpO2 altos (>95%) | SpO2 89-94% en prematuros extremos | BOOST II, COT, SUPPORT |
| Corticosteroides postnatales evitados | Dexametasona o hidrocortisona baja dosis en ventilador-dependiente | DART trial, PREMILOC |

**LISA (Less Invasive Surfactant Administration):**
- Tecnica: cateter fino insertado en traquea bajo visualizacion directa mientras el RN respira espontaneamente en CPAP
- Ventaja: evita intubacion y ventilacion mecanica
- Evidencia: reduce DBP y muerte vs. INSURE en prematuros <28 semanas (meta-analisis 2023)

### Disparidades en Resultados Neonatales | Neonatal Outcome Disparities

**Datos en poblacion hispana/latina en EE.UU.:**
| Indicador | Hispanas | No-Hispanas Blancas |
|-----------|---------|-------------------|
| Tasa de prematurez | 10.1% | 9.4% |
| Tasa de bajo peso al nacer | 7.6% | 7.0% |
| Mortalidad neonatal | 3.2/1,000 | 3.1/1,000 |
| Mortalidad infantil | 4.8/1,000 | 4.6/1,000 |
| Acceso a UCIN nivel III-IV | Menor (areas rurales/desatendidas) | Referencia |
| Recepcion de esteroides prenatales | Menor (presentacion tardia) | Referencia |
| Lactancia materna exclusiva al alta | Mayor (58% vs. 50%) | Referencia |

**Paradoja hispana neonatal:**
- A pesar de menor status socioeconomico, menor acceso a cuidado prenatal, y menor seguro medico, las madres hispanas (especialmente mexicanas) tienen resultados neonatales COMPARABLES o incluso ligeramente mejores que las blancas no hispanas
- Factores protectores hipoteticos: redes familiares fuertes (familismo), menor tabaquismo, dieta, factores geneticos protectores
- La "ventaja" se pierde en generaciones subsecuentes nacidas en EE.UU. (aculturacion)
- Puertorriquenas: NO muestran esta paradoja (resultados peores)

**Estrategias para mejorar resultados:**
- Acceso a cuidado prenatal temprano y en espanol
- Promotoras de salud para educacion prenatal y apoyo a lactancia
- Regionalizacion perinatal: asegurar que embarazos de alto riesgo se atiendan en hospitales con UCIN nivel III-IV
- Apoyo a lactancia materna culturalmente competente
- Seguimiento de prematuros con servicios de intervencion temprana bilingues

---
## MD/Professional-Level Explanation

[The above covers neonatal precision medicine including rapid genome sequencing in the NICU, therapeutic hypothermia and emerging neuroprotective therapies, the neonatal microbiome revolution, evolving respiratory management paradigms (LISA, early caffeine, CPAP-first approach), and neonatal outcome disparities in Hispanic/Latino populations including the Hispanic paradox.]`,
      keyTerms: [
        {
          term: 'secuenciacion rapida del genoma (rWGS) | rapid whole genome sequencing',
          definition:
            'Tecnologia que secuencia el genoma completo del recien nacido critico en 24-48 horas. Rendimiento diagnostico del 25-45% en RN no diagnosticados. Cambia el manejo en 30-70% de los diagnosticados. Modelo transformador para la UCIN. | Technology sequencing the critically ill newborn entire genome in 24-48 hours. Diagnostic yield of 25-45% in undiagnosed newborns. Changes management in 30-70% of those diagnosed. Transformative NICU model.',
          pronunciation: 'seh-koo-en-see-ah-see-OHN RAH-pee-dah',
        },
        {
          term: 'hipotermia terapeutica | therapeutic hypothermia',
          definition:
            'Enfriamiento controlado a 33.5C por 72 horas para neonatos con encefalopatia hipoxico-isquemica moderada-severa. NNT = 7 (1 de cada 7 evita muerte o discapacidad). Debe iniciarse dentro de las primeras 6 horas. Mecanismo: reduce excitotoxicidad, apoptosis, e inflamacion. | Controlled cooling to 33.5C for 72 hours for neonates with moderate-severe hypoxic-ischemic encephalopathy. NNT = 7 (1 in 7 prevents death or disability). Must be initiated within the first 6 hours. Mechanism: reduces excitotoxicity, apoptosis, and inflammation.',
          pronunciation: 'ee-poh-TER-mee-ah teh-rah-PEH-oo-tee-kah',
        },
        {
          term: 'LISA (administracion menos invasiva de surfactante) | Less Invasive Surfactant Administration',
          definition:
            'Tecnica de administracion de surfactante mediante cateter fino en traquea mientras el prematuro respira espontaneamente en CPAP, evitando intubacion. Meta-analisis 2023: reduce DBP y muerte vs. INSURE. Nuevo estandar de cuidado en muchas UCIN. | Surfactant administration technique using thin catheter in trachea while premature infant breathes spontaneously on CPAP, avoiding intubation. 2023 meta-analysis: reduces BPD and death vs. INSURE. New standard of care in many NICUs.',
          pronunciation: 'LEE-sah',
        },
        {
          term: 'paradoja hispana neonatal | Hispanic neonatal paradox',
          definition:
            'Fenomeno epidemiologico donde madres hispanas (especialmente mexicanas), a pesar de menor status socioeconomico y acceso a cuidado prenatal, tienen resultados neonatales comparables o mejores que las blancas no hispanas. Factores protectores: familismo, menor tabaquismo, factores geneticos. Se pierde con aculturacion. | Epidemiological phenomenon where Hispanic mothers (especially Mexican), despite lower socioeconomic status and prenatal care access, have comparable or better neonatal outcomes than non-Hispanic whites. Protective factors: familism, lower smoking, genetic factors. Lost with acculturation.',
          pronunciation: 'pah-rah-DOH-hah ees-PAH-nee-kah',
        },
      ],
      clinicalNotes:
        'La secuenciacion rapida del genoma esta transformando la UCIN: en el programa de Rady Children\'s, rWGS tiene un rendimiento diagnostico del 43% en RN criticos no diagnosticados, con cambio de manejo en el 72% de los diagnosticados. El costo ($5,000-10,000) se compensa con la reduccion de "odisea diagnostica" y hospitalizaciones prolongadas. La hipotermia terapeutica es uno de los avances mas impactantes de la neonatologia moderna (NNT = 7), pero requiere inicio dentro de 6 horas. El HEAL trial (EPO adjunta a hipotermia) fue negativo, lo que ha redirigido la investigacion neuroprotectora hacia melatonina y celulas madre. LISA esta reemplazando a INSURE como metodo preferido de administracion de surfactante en prematuros. La paradoja hispana neonatal es real pero NO universal (no aplica a puertorriquenas) y se pierde con aculturacion. El factor protector mas estudiado es el familismo: las redes familiares fuertes proporcionan apoyo emocional, instrumental y nutricional. La lactancia materna exclusiva al alta es MAYOR en hispanas (58%) que en blancas (50%) y debe apoyarse activamente. | Rapid genome sequencing is transforming the NICU: in Rady Children\'s program, rWGS has a 43% diagnostic yield in undiagnosed critical newborns, with management change in 72% of those diagnosed. Cost ($5,000-10,000) is offset by reducing the "diagnostic odyssey" and prolonged hospitalizations. Therapeutic hypothermia is one of modern neonatology\'s most impactful advances (NNT = 7), but requires initiation within 6 hours. The HEAL trial (EPO adjunct to hypothermia) was negative, redirecting neuroprotective research toward melatonin and stem cells. LISA is replacing INSURE as the preferred surfactant delivery method in premature infants. The Hispanic neonatal paradox is real but NOT universal (does not apply to Puerto Ricans) and is lost with acculturation. The most studied protective factor is familism: strong family networks provide emotional, instrumental, and nutritional support. Exclusive breastfeeding at discharge is HIGHER in Hispanic women (58%) than whites (50%) and should be actively supported.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-nrp-8th',
      type: 'guideline',
      title: 'Neonatal Resuscitation Program (NRP) 8th Edition',
      authors: ['American Academy of Pediatrics', 'American Heart Association'],
      source: 'AAP/AHA',
    },
    {
      id: 'ref-nelson-neonatology',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - The Fetus and the Neonatal Infant',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
      chapter: 'Part XI: The Fetus and the Neonatal Infant',
    },
    {
      id: 'ref-aap-jaundice-2022',
      type: 'guideline',
      title: 'Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation',
      authors: ['American Academy of Pediatrics'],
      source: 'Pediatrics, 2022',
    },
    {
      id: 'ref-hypothermia-cochrane',
      type: 'journal',
      title: 'Therapeutic hypothermia for neonatal encephalopathy',
      authors: ['Jacobs, S.E.', 'Berg, M.', 'Hunt, R.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'ref-rwgs-nicu',
      type: 'journal',
      title: 'Rapid Whole Genome Sequencing in Critically Ill Neonates',
      authors: ['Kingsmore, S.F.', 'Cakici, J.A.', 'Clark, M.M.'],
      source: 'New England Journal of Medicine, 2023',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-desarrollo-infantil-child-development',
      targetType: 'topic',
      relationship: 'related',
      label: 'Desarrollo Infantil | Child Development',
    },
    {
      targetId: 'pediatrics-vacunacion-immunization-schedule',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Vacunacion Pediatrica | Pediatric Immunization',
    },
    {
      targetId: 'pediatrics-asma-pediatrico-asthma',
      targetType: 'topic',
      relationship: 'related',
      label: 'Asma Pediatrico | Pediatric Asthma',
    },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'nervous', 'digestive'],
    topics: [
      'pediatrics',
      'neonatology',
      'resuscitation',
      'jaundice',
      'prematurity',
      'neuroprotection',
      'microbiome',
    ],
    keywords: [
      'neonatologia',
      'neonatology',
      'APGAR',
      'recien nacido',
      'newborn',
      'ictericia',
      'jaundice',
      'bilirrubina',
      'kernicterus',
      'NRP',
      'reanimacion neonatal',
      'prematuro',
      'surfactante',
      'hipotermia terapeutica',
      'tamizaje neonatal',
      'mancha mongolica',
      'ductus arterioso',
      'LISA',
      'paradoja hispana',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine', 'obstetrics'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
