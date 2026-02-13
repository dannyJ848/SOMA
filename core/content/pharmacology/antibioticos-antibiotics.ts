/**
 * Antibioticos / Antibiotics - Comprehensive Educational Content
 *
 * Covers major antibiotic classes: penicillins, cephalosporins,
 * fluoroquinolones, and macrolides. Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const antibioticosAntibiotics: EducationalContent = {
  id: 'pharmacology-antibioticos-antibiotics',
  type: 'topic',
  name: 'Antibioticos | Antibiotics',
  nameEs: 'Antibioticos',
  alternateNames: [
    'Antimicrobianos | Antimicrobials',
    'Agentes antibacterianos | Antibacterial agents',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los antibioticos son medicamentos que matan o detienen el crecimiento de bacterias que causan infecciones. | Antibiotics are medications that kill or stop the growth of bacteria that cause infections.',
      explanation: `## Que son los antibioticos? | What are antibiotics?

Los antibioticos son medicinas que luchan contra las infecciones causadas por bacterias. No funcionan contra virus como el resfriado comun o la gripe. | Antibiotics are medicines that fight infections caused by bacteria. They do not work against viruses like the common cold or flu.

### Tipos principales | Main types

**1. Penicilinas | Penicillins**
- Uno de los antibioticos mas antiguos y mas usados | One of the oldest and most commonly used antibiotics
- Ejemplo: amoxicilina, que se usa para infecciones de oido y garganta | Example: amoxicillin, used for ear and throat infections
- Algunos vienen en liquido con sabor para ninos | Some come in flavored liquid for children

**2. Cefalosporinas | Cephalosporins**
- Similares a las penicilinas pero mas fuertes | Similar to penicillins but stronger
- Se usan cuando las penicilinas no funcionan | Used when penicillins don't work
- Ejemplo: cefalexina para infecciones de piel | Example: cephalexin for skin infections

**3. Fluoroquinolonas | Fluoroquinolones**
- Antibioticos mas fuertes para infecciones serias | Stronger antibiotics for serious infections
- Ejemplo: ciprofloxacino para infecciones urinarias | Example: ciprofloxacin for urinary infections
- Solo se deben usar cuando otros antibioticos no funcionan | Should only be used when other antibiotics don't work

**4. Macrolidos | Macrolides**
- Buenos para personas alergicas a la penicilina | Good for people allergic to penicillin
- Ejemplo: azitromicina (el "Z-pack") | Example: azithromycin (the "Z-pack")
- Se usan para infecciones de pulmones y garganta | Used for lung and throat infections

### Reglas importantes | Important rules

- **Termine todo el tratamiento** aunque se sienta mejor | **Finish the entire course** even if you feel better
- **No comparta** sus antibioticos con nadie | **Do not share** your antibiotics with anyone
- **Tomelos a la hora correcta** cada dia | **Take them at the right time** each day
- Si olvida una dosis, tomela lo antes posible | If you miss a dose, take it as soon as possible

### Efectos secundarios comunes | Common side effects
- Diarrea o malestar estomacal | Diarrhea or upset stomach
- Nauseas | Nausea
- Sarpullido (puede indicar alergia) | Rash (may indicate allergy)

### Cuando llamar al doctor | When to call the doctor
- Dificultad para respirar o hinchazon de la cara | Difficulty breathing or swelling of the face
- Sarpullido severo | Severe rash
- Diarrea con sangre | Diarrhea with blood`,
      keyTerms: [
        {
          term: 'antibiotico | antibiotic',
          definition:
            'Medicina que mata o detiene las bacterias | Medicine that kills or stops bacteria',
        },
        {
          term: 'bacteria | bacteria',
          definition:
            'Organismos microscopicos que pueden causar infecciones | Microscopic organisms that can cause infections',
        },
        {
          term: 'resistencia | resistance',
          definition:
            'Cuando las bacterias ya no responden a un antibiotico | When bacteria no longer respond to an antibiotic',
        },
        {
          term: 'alergia | allergy',
          definition:
            'Reaccion negativa del cuerpo al medicamento | Negative reaction of the body to the medication',
        },
      ],
      analogies: [
        'Los antibioticos son como soldados que luchan contra los invasores (bacterias) en su cuerpo. | Antibiotics are like soldiers fighting invaders (bacteria) in your body.',
        'Tomar antibioticos para un virus es como usar un paraguas dentro de la casa - no ayuda. | Taking antibiotics for a virus is like using an umbrella indoors - it doesn\'t help.',
        'No terminar sus antibioticos es como dejar la puerta abierta - las bacterias mas fuertes pueden regresar. | Not finishing your antibiotics is like leaving the door open - the stronger bacteria can come back.',
      ],
      examples: [
        'La amoxicilina es el antibiotico que su doctor puede recetar para una infeccion de oido en su hijo. | Amoxicillin is the antibiotic your doctor may prescribe for your child\'s ear infection.',
        'Si le dicen que tome el antibiotico por 10 dias, tomelo los 10 dias aunque se sienta bien al dia 3. | If told to take the antibiotic for 10 days, take it all 10 days even if you feel fine by day 3.',
      ],
      patientCounselingPoints: [
        'Siempre termine todo el tratamiento de antibioticos | Always finish the entire antibiotic course',
        'No use antibioticos sobrantes de otra persona | Do not use leftover antibiotics from another person',
        'Informe a su doctor sobre alergias antes de empezar | Tell your doctor about allergies before starting',
      ],
    },

    2: {
      level: 2,
      summary:
        'Los antibioticos se clasifican por su estructura quimica y mecanismo de accion, incluyendo beta-lactamicos (penicilinas, cefalosporinas), fluoroquinolonas, y macrolidos, cada uno con espectro de actividad y usos clinicos distintos. | Antibiotics are classified by their chemical structure and mechanism of action, including beta-lactams (penicillins, cephalosporins), fluoroquinolones, and macrolides, each with distinct spectra and clinical uses.',
      explanation: `## Clasificacion de antibioticos | Antibiotic Classification

### Beta-lactamicos | Beta-lactams

Los antibioticos beta-lactamicos comparten un anillo beta-lactamico en su estructura. Incluyen las penicilinas y cefalosporinas. | Beta-lactam antibiotics share a beta-lactam ring in their structure. They include penicillins and cephalosporins.

**Penicilinas | Penicillins:**

| Tipo | Ejemplo | Uso principal |
|------|---------|---------------|
| Natural | Penicilina G/V | Streptococcus, sifilis |
| Aminopenicilina | Amoxicilina, ampicilina | Otitis, sinusitis, ITU |
| Anti-estafilococica | Dicloxacilina, nafcilina | Infecciones por Staph sensible |
| Amplio espectro | Piperacilina/tazobactam | Infecciones hospitalarias graves |

- **Mecanismo | Mechanism:** Inhiben la sintesis de la pared celular bacteriana | Inhibit bacterial cell wall synthesis
- **Alergia cruzada | Cross-allergy:** ~2% con cefalosporinas | ~2% with cephalosporins
- **Reaccion alergica | Allergic reaction:** Desde sarpullido hasta anafilaxia | From rash to anaphylaxis

**Cefalosporinas | Cephalosporins:**

| Generacion | Ejemplo | Espectro |
|------------|---------|----------|
| 1ra | Cefalexina, cefazolina | Gram+ bueno, Gram- limitado |
| 2da | Cefuroxima, cefoxitina | Gram+ y Gram- moderado |
| 3ra | Ceftriaxona, ceftazidima | Gram- amplio, menos Gram+ |
| 4ta | Cefepima | Gram+ y Gram- amplio |
| 5ta | Ceftarolina | MRSA y Gram- |

### Fluoroquinolonas | Fluoroquinolones

- **Mecanismo | Mechanism:** Inhiben la ADN girasa y topoisomerasa IV | Inhibit DNA gyrase and topoisomerase IV
- **Ejemplos | Examples:** Ciprofloxacino, levofloxacino, moxifloxacino
- **Usos | Uses:** Infecciones urinarias, respiratorias, abdominales | Urinary, respiratory, abdominal infections
- **Advertencia FDA | FDA Warning:** Riesgo de tendinitis, ruptura del tendon de Aquiles, neuropatia periferica | Risk of tendinitis, Achilles tendon rupture, peripheral neuropathy
- **Espectro | Spectrum:** Gram-negativos (cipro), respiratorios incluyendo atipicos (levo, moxi)

### Macrolidos | Macrolides

- **Mecanismo | Mechanism:** Inhiben la sintesis de proteinas al unirse a la subunidad ribosomal 50S | Inhibit protein synthesis by binding to the 50S ribosomal subunit
- **Ejemplos | Examples:** Azitromicina, claritromicina, eritromicina
- **Usos | Uses:** Neumonia adquirida en comunidad, infecciones atipicas, profilaxis de MAC | Community-acquired pneumonia, atypical infections, MAC prophylaxis
- **Efectos secundarios | Side effects:** Prolongacion QT, molestias GI (especialmente eritromicina) | QT prolongation, GI upset (especially erythromycin)

### Conceptos clave | Key Concepts

**Bactericida vs. bacteriostatico | Bactericidal vs. bacteriostatic:**
- Bactericida = mata bacterias (penicilinas, cefalosporinas, fluoroquinolonas) | Bactericidal = kills bacteria
- Bacteriostatico = detiene su crecimiento (macrolidos a dosis normales) | Bacteriostatic = stops growth

**Espectro de actividad | Spectrum of activity:**
- Espectro estrecho = pocas bacterias | Narrow spectrum = few bacteria
- Espectro amplio = muchas bacterias | Broad spectrum = many bacteria`,
      keyTerms: [
        {
          term: 'beta-lactamico | beta-lactam',
          definition:
            'Clase de antibioticos con un anillo beta-lactamico; incluye penicilinas y cefalosporinas | Class of antibiotics with a beta-lactam ring; includes penicillins and cephalosporins',
          pronunciation: 'BEH-tah lak-TAH-mee-ko',
        },
        {
          term: 'espectro de actividad | spectrum of activity',
          definition:
            'El rango de bacterias contra las cuales un antibiotico es efectivo | The range of bacteria against which an antibiotic is effective',
        },
        {
          term: 'bactericida | bactericidal',
          definition:
            'Que mata las bacterias | That which kills bacteria',
        },
        {
          term: 'bacteriostatico | bacteriostatic',
          definition:
            'Que detiene el crecimiento de las bacterias sin matarlas | That which stops bacterial growth without killing them',
        },
        {
          term: 'resistencia antimicrobiana | antimicrobial resistance',
          definition:
            'Cuando las bacterias cambian y ya no son afectadas por los antibioticos | When bacteria change and are no longer affected by antibiotics',
        },
      ],
      analogies: [
        'Los beta-lactamicos atacan la "armadura" (pared celular) de las bacterias, haciendo que exploten. | Beta-lactams attack the "armor" (cell wall) of bacteria, making them burst.',
        'Las generaciones de cefalosporinas son como niveles en un videojuego - cada generacion puede vencer enemigos mas dificiles (Gram-negativos). | Cephalosporin generations are like levels in a video game - each generation can defeat tougher enemies (Gram-negatives).',
      ],
    },

    3: {
      level: 3,
      summary:
        'Los antibioticos actuan a traves de mecanismos especificos (inhibicion de pared celular, sintesis proteica, replicacion de ADN) con perfiles farmacocineticos distintos, patrones de resistencia crecientes, y consideraciones clinicas que guian la seleccion empirica y dirigida. | Antibiotics act through specific mechanisms (cell wall inhibition, protein synthesis, DNA replication) with distinct pharmacokinetic profiles, growing resistance patterns, and clinical considerations guiding empiric and targeted selection.',
      explanation: `## Mecanismos de accion detallados | Detailed Mechanisms of Action

### Inhibidores de la pared celular | Cell Wall Inhibitors

**Penicilinas y cefalosporinas (beta-lactamicos):**
- Se unen a las proteinas de union a penicilina (PBPs) | Bind to penicillin-binding proteins (PBPs)
- Inhiben la transpeptidacion (entrecruzamiento del peptidoglucano) | Inhibit transpeptidation (peptidoglycan cross-linking)
- Efecto bactericida dependiente del tiempo | Time-dependent bactericidal effect
- Activacion de autolisinas endogenas | Activation of endogenous autolysins

**Resistencia a beta-lactamicos | Beta-lactam Resistance:**
1. Produccion de beta-lactamasas (mas comun) | Beta-lactamase production (most common)
2. Alteracion de PBPs (ej: MRSA tiene PBP2a) | Altered PBPs (e.g., MRSA has PBP2a)
3. Disminucion de permeabilidad (porinas) | Decreased permeability (porins)
4. Bombas de eflujo | Efflux pumps

**Inhibidores de beta-lactamasas | Beta-lactamase Inhibitors:**
- Acido clavulanico (amoxicilina/clavulanato) | Clavulanic acid (amoxicillin/clavulanate)
- Sulbactam (ampicilina/sulbactam) | Sulbactam (ampicillin/sulbactam)
- Tazobactam (piperacilina/tazobactam) | Tazobactam (piperacillin/tazobactam)
- Avibactam (ceftazidima/avibactam) - activo contra KPC | Avibactam (ceftazidime/avibactam) - active against KPC

### Inhibidores de sintesis proteica | Protein Synthesis Inhibitors

**Macrolidos (subunidad 50S):**
- Bloquean la translocacion del ribosoma | Block ribosomal translocation
- Azitromicina: vida media larga (~68h), concentracion intracelular alta | Azithromycin: long half-life (~68h), high intracellular concentration
- Claritromicina: inhibidor de CYP3A4, multiples interacciones | Clarithromycin: CYP3A4 inhibitor, multiple interactions
- Eritromicina: agonista del receptor de motilina (procinesis) | Erythromycin: motilin receptor agonist (prokinesis)

### Inhibidores de la replicacion de ADN | DNA Replication Inhibitors

**Fluoroquinolonas:**
- Inhiben ADN girasa (Gram-negativos) y topoisomerasa IV (Gram-positivos) | Inhibit DNA gyrase (Gram-negatives) and topoisomerase IV (Gram-positives)
- Efecto bactericida dependiente de concentracion | Concentration-dependent bactericidal effect
- Excelente biodisponibilidad oral (~90%) | Excellent oral bioavailability (~90%)
- Buena penetracion tisular incluyendo hueso y prostata | Good tissue penetration including bone and prostate

**Clasificacion por "generaciones" | Classification by "generations":**

| Generacion | Agente | Espectro distintivo |
|------------|--------|---------------------|
| 2da | Ciprofloxacino | Gram- fuerte, Pseudomonas |
| 3ra | Levofloxacino | Respiratorio (neumococo) |
| 4ta | Moxifloxacino | Anaerobios, mayor Gram+ |

## Farmacocinetica clinica | Clinical Pharmacokinetics

### Actividad dependiente de tiempo vs. concentracion | Time-dependent vs. Concentration-dependent Activity

**Dependiente del tiempo (beta-lactamicos, macrolidos):**
- Objetivo: maximizar T > MIC (tiempo sobre la concentracion minima inhibitoria) | Goal: maximize T > MIC
- Dosificacion frecuente o infusion prolongada | Frequent dosing or extended infusion
- Ejemplo: T > MIC > 50% del intervalo = eficacia optima para beta-lactamicos | Example: T > MIC > 50% of interval = optimal efficacy for beta-lactams

**Dependiente de concentracion (fluoroquinolonas):**
- Objetivo: maximizar Cmax/MIC o AUC/MIC | Goal: maximize Cmax/MIC or AUC/MIC
- Dosis altas con intervalos mas largos | Higher doses with longer intervals
- AUC/MIC > 125 para Gram-negativos | AUC/MIC > 125 for Gram-negatives

## Resistencia antimicrobiana | Antimicrobial Resistance

### Organismos resistentes clave | Key Resistant Organisms

| Organismo | Resistencia | Tratamiento |
|-----------|-------------|-------------|
| MRSA | Beta-lactamicos | Vancomicina, TMP-SMX, doxiciclina |
| ESBL E. coli/Klebsiella | Cefalosporinas | Carbapenems |
| Pseudomonas resistente | Multiples | Ceftazidima-avibactam, ceftolozano-tazobactam |
| VRE | Vancomicina | Linezolid, daptomicina |

### Estrategias de antibiograma | Antibiogram Strategies
- Revisar antibiograma institucional para terapia empirica | Review institutional antibiogram for empiric therapy
- De-escalar segun cultivos y sensibilidades | De-escalate based on cultures and sensitivities
- Stewardship antimicrobiano | Antimicrobial stewardship

## Interacciones medicamentosas clave | Key Drug Interactions

| Antibiotico | Interaccion | Efecto |
|-------------|-------------|--------|
| Claritromicina | Estatinas (CYP3A4) | Riesgo de rabdomiolisis |
| Fluoroquinolonas | Cationes (Ca, Mg, Fe, Al) | Absorcion reducida |
| Fluoroquinolonas | Warfarina | INR aumentado |
| Macrolidos | QT-prolongantes | Arritmia |
| Metronidazol | Alcohol | Reaccion tipo disulfiram |`,
      keyTerms: [
        {
          term: 'proteinas de union a penicilina (PBPs) | penicillin-binding proteins (PBPs)',
          definition:
            'Enzimas bacterianas objetivo de los beta-lactamicos; esenciales para la sintesis de peptidoglucano | Bacterial enzymes targeted by beta-lactams; essential for peptidoglycan synthesis',
        },
        {
          term: 'MIC (concentracion minima inhibitoria) | MIC (minimum inhibitory concentration)',
          definition:
            'Menor concentracion de antibiotico que inhibe el crecimiento bacteriano visible | Lowest antibiotic concentration that inhibits visible bacterial growth',
        },
        {
          term: 'ESBL (beta-lactamasa de espectro extendido) | ESBL (extended-spectrum beta-lactamase)',
          definition:
            'Enzima bacteriana que confiere resistencia a cefalosporinas de 3ra generacion | Bacterial enzyme conferring resistance to 3rd-generation cephalosporins',
        },
        {
          term: 'stewardship antimicrobiano | antimicrobial stewardship',
          definition:
            'Uso optimizado de antibioticos para mejorar resultados y reducir resistencia | Optimized use of antibiotics to improve outcomes and reduce resistance',
        },
        {
          term: 'de-escalacion | de-escalation',
          definition:
            'Cambiar de terapia empirica amplia a terapia dirigida estrecha | Switching from broad empiric therapy to narrow targeted therapy',
        },
        {
          term: 'antibiograma | antibiogram',
          definition:
            'Resumen institucional de patrones de sensibilidad antibiotica | Institutional summary of antibiotic susceptibility patterns',
        },
      ],
      clinicalNotes:
        'Al seleccionar antibioticos, considere el sitio de infeccion, organismos probables, patrones locales de resistencia, alergias del paciente, funcion renal/hepatica, e interacciones medicamentosas. Siempre de-escale cuando tenga datos de cultivos. | When selecting antibiotics, consider infection site, likely organisms, local resistance patterns, patient allergies, renal/hepatic function, and drug interactions. Always de-escalate when culture data is available.',
    },

    4: {
      level: 4,
      summary:
        'La seleccion optima de antibioticos requiere comprension de farmacodinamica (PK/PD), mecanismos moleculares de resistencia, optimizacion de dosificacion basada en MIC, y manejo de infecciones complejas incluyendo bacterias multirresistentes, con enfasis en principios de stewardship. | Optimal antibiotic selection requires understanding of pharmacodynamics (PK/PD), molecular resistance mechanisms, MIC-based dosing optimization, and management of complex infections including multidrug-resistant bacteria, with emphasis on stewardship principles.',
      explanation: `## Farmacodinamica avanzada (PK/PD) | Advanced Pharmacodynamics

### Indices PK/PD y optimizacion de dosis | PK/PD Indices and Dose Optimization

**Beta-lactamicos (dependientes del tiempo):**
- Indice principal: fT > MIC | Primary index: fT > MIC
- Objetivo para bacterias Gram-negativas: fT > MIC 60-70% | Target for Gram-negatives: fT > MIC 60-70%
- Objetivo para bacterias Gram-positivas: fT > MIC 40-50% | Target for Gram-positives: fT > MIC 40-50%
- Infusion prolongada (3-4h) de piperacilina/tazobactam y meropenem mejora fT > MIC | Extended infusion (3-4h) of pip/tazo and meropenem improves fT > MIC
- Infusion continua: maximiza fT > MIC pero requiere estabilidad del farmaco | Continuous infusion: maximizes fT > MIC but requires drug stability

**Fluoroquinolonas (dependientes de concentracion):**
- Indice principal: AUC₂₄/MIC y Cmax/MIC | Primary indices: AUC₂₄/MIC and Cmax/MIC
- Gram-negativos: AUC₂₄/MIC > 125 (predictor de cura) | Gram-negatives: AUC₂₄/MIC > 125 (predictor of cure)
- Gram-positivos: AUC₂₄/MIC > 30-40 | Gram-positives: AUC₂₄/MIC > 30-40
- Mutant prevention concentration (MPC): concentracion que previene seleccion de mutantes resistentes | Mutant prevention concentration (MPC): concentration preventing selection of resistant mutants

**Macrolidos (dependientes de AUC/tiempo):**
- Indice principal: AUC₂₄/MIC | Primary index: AUC₂₄/MIC
- Azitromicina: concentracion intracelular en macrofagos 10-100x superior a serica | Azithromycin: intracellular concentration in macrophages 10-100x higher than serum
- Relevancia en patogenos intracelulares: Legionella, Chlamydia, Mycoplasma | Relevance in intracellular pathogens

### Monitoreo terapeutico de farmacos (TDM) | Therapeutic Drug Monitoring (TDM)

Aunque no es rutinario para estas clases, TDM se usa para:
- Vancomicina: AUC/MIC 400-600 (objetivo actualizado, no solo niveles valle) | Vancomycin: AUC/MIC 400-600 (updated target, not just trough levels)
- Aminoglucosidos: Cmax/MIC > 8-10, niveles valle < 1 mg/L | Aminoglycosides: Cmax/MIC > 8-10, trough levels < 1 mg/L
- Beta-lactamicos en UCI: TDM emergente para optimizacion | Beta-lactams in ICU: emerging TDM for optimization

## Mecanismos moleculares de resistencia | Molecular Resistance Mechanisms

### Beta-lactamasas: Clasificacion de Ambler | Ambler Classification

| Clase | Tipo | Ejemplo | Sustrato | Inhibidor |
|-------|------|---------|----------|-----------|
| A | Serina | TEM, SHV, KPC, CTX-M | Penicilinas, cefalosporinas | Clavulanato, avibactam |
| B | Metalo | NDM, VIM, IMP | Todos beta-lactamicos menos aztreonam | Sin inhibidor clinico |
| C | Serina | AmpC | Cefalosporinas | Avibactam |
| D | Serina | OXA | Variado | Avibactam (algunas) |

**KPC (Klebsiella pneumoniae carbapenemasa):**
- Confiere resistencia a todos los beta-lactamicos incluyendo carbapenems | Confers resistance to all beta-lactams including carbapenems
- Tratamiento: ceftazidima-avibactam, meropenem-vaborbactam, imipenem-relebactam | Treatment: ceftazidime-avibactam, meropenem-vaborbactam, imipenem-relebactam

**NDM (New Delhi metalo-beta-lactamasa):**
- Hidroliza todos los beta-lactamicos excepto aztreonam | Hydrolyzes all beta-lactams except aztreonam
- Combinacion aztreonam + ceftazidima-avibactam como estrategia emergente | Combination aztreonam + ceftazidime-avibactam as emerging strategy

### Resistencia en Gram-positivos | Gram-positive Resistance

**MRSA (mecA/mecC):**
- PBP2a codificada por gen mecA en cassette SCCmec | PBP2a encoded by mecA gene in SCCmec cassette
- Baja afinidad por beta-lactamicos convencionales | Low affinity for conventional beta-lactams
- Ceftarolina: cefalosporina anti-MRSA (se une a PBP2a) | Ceftaroline: anti-MRSA cephalosporin (binds PBP2a)

**VRE (vanA, vanB):**
- vanA: resistencia a vancomicina y teicoplanina (alto nivel) | vanA: resistance to vancomycin and teicoplanin (high level)
- vanB: resistencia solo a vancomicina (inducible) | vanB: resistance to vancomycin only (inducible)

### Resistencia en fluoroquinolonas | Fluoroquinolone Resistance
- Mutaciones puntuales en gyrA y parC | Point mutations in gyrA and parC
- Mediada por plasmidos: genes qnr, aac(6')-Ib-cr | Plasmid-mediated: qnr genes, aac(6')-Ib-cr
- Bombas de eflujo (ej: AcrAB-TolC en E. coli) | Efflux pumps (e.g., AcrAB-TolC in E. coli)

## Manejo de infecciones complejas | Management of Complex Infections

### Infecciones por organismos multirresistentes (MDR) | MDR Organism Infections

**Principios de tratamiento | Treatment Principles:**
1. Terapia combinada para infecciones graves por MDR | Combination therapy for severe MDR infections
2. Optimizacion PK/PD con infusiones prolongadas | PK/PD optimization with extended infusions
3. Consulta con infectologia | Infectious disease consultation
4. Terapia dirigida segun cultivos y sensibilidades | Targeted therapy based on cultures and sensitivities

### Infecciones especificas | Specific Infections

**Neumonia adquirida en la comunidad (NAC) | Community-Acquired Pneumonia (CAP):**
- Ambulatoria sin comorbilidades: amoxicilina o doxiciclina | Outpatient without comorbidities: amoxicillin or doxycycline
- Ambulatoria con comorbilidades: amoxicilina/clavulanato + macrolido o fluoroquinolona respiratoria | Outpatient with comorbidities: amoxicillin/clavulanate + macrolide or respiratory fluoroquinolone
- Hospitalizado: beta-lactamico + macrolido o fluoroquinolona respiratoria | Hospitalized: beta-lactam + macrolide or respiratory fluoroquinolone

**Infeccion urinaria complicada (ITUc) | Complicated UTI:**
- Empirico: fluoroquinolona o cefalosporina de 3ra gen IV | Empiric: fluoroquinolone or 3rd gen cephalosporin IV
- ESBL: carbapenems como eriapenem (primer escogencia) | ESBL: carbapenems such as ertapenem (first choice)
- Ajustar segun urocultivo | Adjust based on urine culture

## Principios de stewardship | Stewardship Principles

1. **Procalcitonina** para guiar duracion de antibioticos en infecciones respiratorias | **Procalcitonin** to guide antibiotic duration in respiratory infections
2. **Duracion acortada**: Evidencia creciente para 5-7 dias en muchas infecciones (vs. 10-14 dias tradicionales) | **Shortened duration**: Growing evidence for 5-7 days in many infections
3. **Switch IV a oral**: Transicion temprana cuando es clinicamente apropiado (OPAT - terapia antibiotica parenteral ambulatoria) | **IV to oral switch**: Early transition when clinically appropriate
4. **Antibiogramas** institucionales actualizados anualmente | **Antibiograms** updated annually`,
      keyTerms: [
        {
          term: 'fT > MIC | fT > MIC',
          definition:
            'Fraccion del intervalo de dosificacion donde la concentracion libre supera la MIC; parametro clave para beta-lactamicos | Fraction of dosing interval where free concentration exceeds MIC; key parameter for beta-lactams',
        },
        {
          term: 'AUC₂₄/MIC',
          definition:
            'Area bajo la curva en 24 horas dividida por la MIC; parametro clave para fluoroquinolonas y vancomicina | Area under the curve over 24 hours divided by MIC; key parameter for fluoroquinolones and vancomycin',
        },
        {
          term: 'KPC (carbapenemasa de Klebsiella pneumoniae) | KPC',
          definition:
            'Beta-lactamasa de clase A que confiere resistencia a carbapenems; amenaza critica de resistencia | Class A beta-lactamase conferring carbapenem resistance; critical resistance threat',
        },
        {
          term: 'infusion prolongada | extended infusion',
          definition:
            'Administracion de beta-lactamicos en 3-4 horas para maximizar fT > MIC | Administration of beta-lactams over 3-4 hours to maximize fT > MIC',
        },
        {
          term: 'NDM (New Delhi metalo-beta-lactamasa) | NDM',
          definition:
            'Metalo-beta-lactamasa de clase B que hidroliza todos los beta-lactamicos excepto aztreonam | Class B metallo-beta-lactamase hydrolyzing all beta-lactams except aztreonam',
        },
        {
          term: 'MPC (concentracion de prevencion de mutantes) | MPC (mutant prevention concentration)',
          definition:
            'Concentracion de antibiotico que previene el crecimiento de mutantes resistentes de primer paso | Antibiotic concentration that prevents growth of first-step resistant mutants',
        },
      ],
      clinicalNotes:
        'La optimizacion PK/PD es especialmente critica en pacientes de UCI con farmacocinetica alterada (aumento del volumen de distribucion, cambios en aclaramiento renal). Las infusiones prolongadas de beta-lactamicos deben ser estandar en UCI. Para organismos productores de carbapenemasas, la terapia combinada y la consulta con infectologia son esenciales. | PK/PD optimization is especially critical in ICU patients with altered pharmacokinetics (increased volume of distribution, changes in renal clearance). Extended infusions of beta-lactams should be standard in ICU. For carbapenemase-producing organisms, combination therapy and infectious disease consultation are essential.',
    },

    5: {
      level: 5,
      summary:
        'La prescripcion basada en evidencia de antibioticos integra genomica de resistencia, modelado PK/PD poblacional con simulacion de Monte Carlo, enfoques novedosos contra MDR (combinaciones beta-lactamico/inhibidor de nueva generacion, cefiderocol, terapia con fagos), y estrategias globales de stewardship para contener la crisis de resistencia antimicrobiana. | Evidence-based antibiotic prescribing integrates resistance genomics, population PK/PD modeling with Monte Carlo simulation, novel anti-MDR approaches (next-generation beta-lactam/inhibitor combinations, cefiderocol, phage therapy), and global stewardship strategies to contain the antimicrobial resistance crisis.',
      explanation: `## Farmacocinetica y farmacodinamica de precision | Precision Pharmacokinetics and Pharmacodynamics

### Simulacion de Monte Carlo | Monte Carlo Simulation

La simulacion de Monte Carlo utiliza datos PK poblacionales y distribucion de MICs para calcular la probabilidad de alcanzar objetivos PK/PD (probability of target attainment, PTA): | Monte Carlo simulation uses population PK data and MIC distributions to calculate the probability of target attainment (PTA):

- **Input:** Parametros PK poblacionales (variabilidad interindividual), distribucion de MICs | Population PK parameters (interindividual variability), MIC distributions
- **Output:** PTA para diferentes regimenes de dosificacion | PTA for different dosing regimens
- **Aplicacion:** Seleccion de regimenes empiricos optimos y puntos de corte PK/PD | Optimal empiric regimen selection and PK/PD breakpoints
- **Ejemplo:** Simulaciones de Monte Carlo demostraron que la infusion prolongada de pip/tazo 4.5g q8h logra PTA > 90% para MIC ≤ 16 mg/L vs. < 70% con infusion de 30 min | Monte Carlo simulations showed extended infusion pip/tazo 4.5g q8h achieves PTA > 90% for MIC ≤ 16 mg/L vs. < 70% with 30-min infusion

### Poblaciones especiales | Special Populations

**Pacientes criticos (UCI):**
- Aumento del volumen de distribucion (Vd) por edema, fluidos IV | Increased volume of distribution (Vd) from edema, IV fluids
- Augmented renal clearance (ARC): ClCr > 130 mL/min en pacientes jovenes/traumatizados | ARC: ClCr > 130 mL/min in young/trauma patients
- Requiere dosis de carga y potencialmente dosis mas altas | Requires loading doses and potentially higher doses
- TDM emergente para beta-lactamicos en UCI (estudios DALI, TARGET) | Emerging TDM for beta-lactams in ICU (DALI, TARGET studies)

**Obesidad morbida:**
- Vd aumentado para farmacos hidrofilicos | Increased Vd for hydrophilic drugs
- Dosificacion basada en peso ajustado para aminoglucosidos | Adjusted body weight-based dosing for aminoglycosides
- Beta-lactamicos: considerar dosis mas altas y/o infusiones prolongadas | Beta-lactams: consider higher doses and/or extended infusions

**Insuficiencia renal y dialisis:**
- Beta-lactamicos: eliminacion renal predominante; ajustar dosis | Beta-lactams: predominantly renal elimination; adjust dose
- Fluoroquinolonas: variable (levofloxacino renal, moxifloxacino hepatico) | Fluoroquinolones: variable (levofloxacin renal, moxifloxacin hepatic)
- Hemodialisis intermitente vs. CRRT: dosificacion muy diferente | Intermittent hemodialysis vs. CRRT: very different dosing

## Nuevos antibioticos y enfoques terapeuticos | Novel Antibiotics and Therapeutic Approaches

### Nuevas combinaciones beta-lactamico/inhibidor | New Beta-lactam/Inhibitor Combinations

| Agente | Inhibidor | Clase Ambler | Indicacion principal |
|--------|-----------|--------------|----------------------|
| Ceftazidima-avibactam | Avibactam (DBO) | A, C, D (algunas) | KPC, AmpC, OXA-48 |
| Meropenem-vaborbactam | Vaborbactam (boronico) | A (KPC) | KPC |
| Imipenem-relebactam | Relebactam (DBO) | A, C | KPC, AmpC |
| Ceftolozano-tazobactam | Tazobactam | A | Pseudomonas MDR |
| Aztreonam-avibactam* | Avibactam | A, B*, C, D | MBL (NDM) - en desarrollo |

*Aztreonam + ceftazidima-avibactam se usa off-label como puente hasta la aprobacion formal | *Aztreonam + ceftazidime-avibactam used off-label as bridge until formal approval

### Cefiderocol | Cefiderocol
- Cefalosporina siderofera: usa transportadores de hierro para penetrar porinas | Siderophore cephalosporin: uses iron transporters to penetrate porins
- Estable frente a todas las clases de beta-lactamasas (A, B, C, D) | Stable against all beta-lactamase classes (A, B, C, D)
- CREDIBLE-CR trial: mortalidad similar a mejor terapia disponible en infecciones por carbapenem-resistentes | CREDIBLE-CR trial: similar mortality to best available therapy in carbapenem-resistant infections
- Indicado para ITU complicadas y neumonias hospitalarias por Gram-negativos MDR | Indicated for complicated UTI and hospital-acquired pneumonia from MDR Gram-negatives

### Terapia con bacteriofagos | Bacteriophage Therapy
- Virus que infectan y lisan bacterias especificas | Viruses that infect and lyse specific bacteria
- Requiere identificacion del fago adecuado para cada cepa | Requires identification of appropriate phage for each strain
- Uso compasivo en infecciones MDR refractarias (FDA IND) | Compassionate use in refractory MDR infections (FDA IND)
- Desafios: estandarizacion, produccion GMP, resistencia a fagos | Challenges: standardization, GMP production, phage resistance
- Combinacion de fago + antibiotico (PAS: phage-antibiotic synergy) | Phage + antibiotic combination (PAS: phage-antibiotic synergy)

### Nuevos mecanismos en investigacion | Novel Mechanisms Under Investigation
- **Inhibidores de LpxC:** Atacan la biosintesis de lipido A en Gram-negativos | Target lipid A biosynthesis in Gram-negatives
- **Inhibidores de FabI (triclosan analogos):** Sintesis de acidos grasos | Fatty acid synthesis
- **Peptidos antimicrobianos:** Perturbacion de membrana, actividad inmunomoduladora | Membrane disruption, immunomodulatory activity
- **Terapia anti-virulencia:** Bloquear factores de virulencia sin matar bacterias | Block virulence factors without killing bacteria

## Genomica de resistencia y epidemiologia molecular | Resistance Genomics and Molecular Epidemiology

### Secuenciacion del genoma completo (WGS) | Whole Genome Sequencing

- Identificacion rapida de genes de resistencia | Rapid identification of resistance genes
- Rastreo de brotes nosocomiales | Nosocomial outbreak tracking
- Prediccion de susceptibilidad fenotipica a partir de genotipo | Phenotypic susceptibility prediction from genotype
- Vigilancia en tiempo real de resistencia emergente | Real-time surveillance of emerging resistance

### Resistoma global | Global Resistome
- Genes de resistencia en ambiente, agricultura, y clinica interconectados | Resistance genes in environment, agriculture, and clinic interconnected
- Enfoque One Health para la resistencia antimicrobiana | One Health approach to antimicrobial resistance
- Transmision horizontal de genes de resistencia via plasmidos, transposones, integrones | Horizontal transfer of resistance genes via plasmids, transposons, integrons

## Stewardship basado en evidencia | Evidence-Based Stewardship

### Ensayos clinicos clave | Key Clinical Trials

| Estudio | Hallazgo | Impacto clinico |
|---------|----------|-----------------|
| ACORN (NEJM 2024) | Aminopenicilinas no-inferiores a cefalosporinas en sepsis urinaria | De-escalacion mas agresiva |
| MERINO | Pip/tazo inferior a meropenem en ESBL-E bacteremia | Carbapenems necesarios para ESBL |
| ARLG ACORN-UTI | Tratamiento corto (5d) no-inferior en ITU complicada | Reduccion de duracion |
| PIRATE | Pip/tazo vs. meropenem en AmpC bacteremia | Carbapenems preferidos |
| ProACT | Procalcitonina no redujo uso de ATB en infecciones respiratorias bajas | Limitaciones de PCT |

### Inteligencia artificial en seleccion de antibioticos | AI in Antibiotic Selection
- Modelos predictivos de resistencia basados en datos clinicos | Predictive resistance models based on clinical data
- Optimizacion de regimenes mediante aprendizaje automatico | Regimen optimization through machine learning
- Sistemas de soporte de decision clinica integrados en HCE | Clinical decision support systems integrated in EHR
- Ejemplo: Algoritmos que predicen produccion de ESBL con > 85% de precision usando datos clinicos | Example: Algorithms predicting ESBL production with > 85% accuracy using clinical data

### Crisis global de resistencia | Global Resistance Crisis
- Se estima 10 millones de muertes anuales atribuibles a AMR para 2050 | Estimated 10 million annual deaths attributable to AMR by 2050
- Pipeline de nuevos antibioticos insuficiente | Insufficient new antibiotic pipeline
- Incentivos economicos (PASTEUR Act, modelos de suscripcion) para desarrollo de nuevos antibioticos | Economic incentives (PASTEUR Act, subscription models) for new antibiotic development
- Estrategias de prevencion: vacunacion, control de infecciones, saneamiento | Prevention strategies: vaccination, infection control, sanitation`,
      keyTerms: [
        {
          term: 'simulacion de Monte Carlo | Monte Carlo simulation',
          definition:
            'Metodo estadistico que usa datos PK poblacionales y distribuciones de MIC para calcular la probabilidad de alcanzar objetivos farmacodinamicos | Statistical method using population PK data and MIC distributions to calculate probability of achieving pharmacodynamic targets',
        },
        {
          term: 'PTA (probabilidad de alcanzar el objetivo) | PTA (probability of target attainment)',
          definition:
            'Probabilidad de que un regimen de dosificacion alcance el indice PK/PD requerido para eficacia | Probability that a dosing regimen achieves the PK/PD index required for efficacy',
        },
        {
          term: 'cefiderocol',
          definition:
            'Cefalosporina siderofera estable frente a todas las clases de beta-lactamasas; usa transportadores de hierro para penetrar la membrana externa | Siderophore cephalosporin stable against all beta-lactamase classes; uses iron transporters to penetrate the outer membrane',
        },
        {
          term: 'terapia con fagos | phage therapy',
          definition:
            'Uso de bacteriofagos (virus que infectan bacterias) para tratar infecciones bacterianas refractarias | Use of bacteriophages (viruses that infect bacteria) to treat refractory bacterial infections',
        },
        {
          term: 'resistoma | resistome',
          definition:
            'Conjunto total de genes de resistencia en un ambiente o microbioma dado | Total set of resistance genes in a given environment or microbiome',
        },
        {
          term: 'augmented renal clearance (ARC)',
          definition:
            'Aclaramiento renal supranormal (ClCr > 130 mL/min) comun en pacientes criticos jovenes, resultando en subdosificacion de antibioticos de eliminacion renal | Supranormal renal clearance common in young critical patients, resulting in underdosing of renally eliminated antibiotics',
        },
      ],
      clinicalNotes:
        'En la era de creciente resistencia, la prescripcion antibiotica debe integrarse con diagnostico rapido (MALDI-TOF, PCR, WGS), optimizacion PK/PD individualizada, y principios de stewardship. Para infecciones por productores de carbapenemasas, se requiere conocimiento de la epidemiologia local (KPC vs. NDM vs. OXA-48) para seleccionar la terapia empirica optima. Las infusiones prolongadas de beta-lactamicos y el TDM emergente representan el estandar de cuidado en UCI. Los nuevos agentes como cefiderocol y las combinaciones de nueva generacion ofrecen opciones para infecciones previamente intratables, pero su uso debe ser juicioso para preservar su eficacia. | In the era of growing resistance, antibiotic prescribing must integrate rapid diagnostics (MALDI-TOF, PCR, WGS), individualized PK/PD optimization, and stewardship principles. For carbapenemase-producing infections, knowledge of local epidemiology (KPC vs. NDM vs. OXA-48) is needed to select optimal empiric therapy. Extended beta-lactam infusions and emerging TDM represent the standard of care in ICU. Novel agents like cefiderocol and next-generation combinations offer options for previously untreatable infections, but their use must be judicious to preserve efficacy.',
    },
  },

  media: [],

  citations: [
    {
      id: 'sanford-guide-2024',
      type: 'guideline',
      title: 'The Sanford Guide to Antimicrobial Therapy 2024',
      authors: ['Gilbert DN', 'et al.'],
      source: 'Antimicrobial Therapy Inc.',
    },
    {
      id: 'mandell-infectious-disease',
      type: 'textbook',
      title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases',
      authors: ['Bennett JE', 'Dolin R', 'Blaser MJ'],
      source: 'Elsevier',
      chapter: 'Antibacterial Agents',
    },
    {
      id: 'idsa-cap-guidelines-2019',
      type: 'guideline',
      title: 'Diagnosis and Treatment of Adults with Community-acquired Pneumonia',
      authors: ['Metlay JP', 'Waterer GW', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.201908-1581ST',
    },
    {
      id: 'who-amr-report',
      type: 'article',
      title: 'Global Antimicrobial Resistance and Use Surveillance System (GLASS) Report',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9789240062702',
    },
    {
      id: 'goodman-gilman-pharmacology',
      type: 'textbook',
      title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
      source: 'McGraw-Hill Education',
      chapter: 'Chemotherapy of Infectious Diseases',
    },
  ],

  crossReferences: [
    {
      targetId: 'pharmacology-analgesicos-analgesics',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Analgesicos | Analgesics',
    },
    {
      targetId: 'condition-pneumonia',
      targetType: 'condition',
      relationship: 'related',
      label: 'Neumonia | Pneumonia',
    },
    {
      targetId: 'condition-sepsis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Sepsis',
    },
    {
      targetId: 'condition-urinary-tract-infection',
      targetType: 'condition',
      relationship: 'related',
      label: 'Infeccion del tracto urinario | Urinary Tract Infection',
    },
    {
      targetId: 'pharmacology-anticoagulantes-anticoagulants',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Anticoagulantes | Anticoagulants',
    },
  ],

  tags: {
    systems: ['infectious-disease', 'pharmacology'],
    topics: ['pharmacology', 'antimicrobials', 'infectious-disease', 'stewardship'],
    keywords: [
      'antibioticos',
      'penicilina',
      'cefalosporina',
      'fluoroquinolona',
      'macrolido',
      'resistencia antimicrobiana',
      'beta-lactamico',
      'MRSA',
      'ESBL',
      'stewardship',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'emergency medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default antibioticosAntibiotics;
