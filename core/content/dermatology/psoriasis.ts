/**
 * Psoriasis - Contenido Educativo Completo Bilingue
 *
 * Tipos de psoriasis, desencadenantes, escalera terapeutica, biologicos.
 * Psoriasis types, triggers, treatment ladder, biologics.
 *
 * Covers: plaque, guttate, inverse, pustular, erythrodermic, PsA, IL-23/IL-17 axis, biologics
 */

import { EducationalContent } from '../types';

export const psoriasis: EducationalContent = {
  id: 'derm-psoriasis',
  type: 'condition',
  name: 'Psoriasis',
  nameEs: 'Psoriasis',
  alternateNames: [
    'Psoriasis en Placas', 'Plaque Psoriasis',
    'Psoriasis Guttata', 'Guttate Psoriasis',
    'Artritis Psoriasica', 'Psoriatic Arthritis',
    'PsO', 'PsA',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La psoriasis es una enfermedad de la piel que causa parches rojos, gruesos y escamosos. Ocurre porque el sistema inmunitario ataca por error las celulas sanas de la piel, haciendolas crecer demasiado rapido. No es contagiosa y tiene muchos tratamientos efectivos. | Psoriasis is a skin disease that causes red, thick, scaly patches. It happens because the immune system mistakenly attacks healthy skin cells, making them grow too fast. It is not contagious and has many effective treatments.',
      explanation: `## Que es la psoriasis | What is psoriasis

La psoriasis es una enfermedad que hace que la piel crezca mucho mas rapido de lo normal. Normalmente, las celulas de la piel se renuevan en un mes. Con psoriasis, esto pasa en solo unos dias. Las celulas se acumulan y forman parches gruesos y escamosos.
Psoriasis is a disease that makes skin grow much faster than normal. Normally, skin cells renew in about a month. With psoriasis, this happens in just a few days. Cells pile up and form thick, scaly patches.

### Como se ve | What it looks like
- Parches rojos cubiertos con escamas plateadas o blancas | Red patches covered with silver or white scales
- Piel seca que puede agrietarse y sangrar | Dry skin that may crack and bleed
- Picazon, ardor o dolor | Itching, burning, or pain
- Unas gruesas o con hoyuelos | Thick or pitted nails

### Donde aparece (lugares mas comunes) | Where it appears (most common areas)
- Codos y rodillas | Elbows and knees
- Cuero cabelludo | Scalp
- Espalda baja | Lower back
- Unas | Nails

### Tipos mas comunes | Most common types
- **Psoriasis en placas:** parches grandes y rojos con escamas (el mas comun, 80-90%) | **Plaque psoriasis:** large red patches with scales (most common, 80-90%)
- **Psoriasis guttata (en gotas):** muchas manchas pequenas que aparecen de repente, a veces despues de una infeccion de garganta | **Guttate psoriasis:** many small spots appearing suddenly, sometimes after a throat infection
- **Psoriasis inversa:** parches lisos y rojos en pliegues de la piel (axilas, ingle) | **Inverse psoriasis:** smooth red patches in skin folds (armpits, groin)

### Que empeora la psoriasis (desencadenantes) | What worsens psoriasis (triggers)
- Estres | Stress
- Lesiones en la piel (cortadas, raspaduras, quemaduras solares) | Skin injuries (cuts, scrapes, sunburns)
- Infecciones (como faringitis estreptococica) | Infections (like strep throat)
- Clima frio y seco | Cold, dry weather
- Algunos medicamentos | Some medications
- Fumar y alcohol | Smoking and alcohol

### Tratamiento | Treatment
- Cremas y unguentos medicados | Medicated creams and ointments
- Fototerapia (luz UV especial) | Phototherapy (special UV light)
- Medicamentos orales o inyectados para casos moderados-severos | Oral or injected medications for moderate-severe cases
- Cremas hidratantes todos los dias | Moisturizers every day

### Importante | Important
- La psoriasis va y viene (brotes y remisiones) | Psoriasis comes and goes (flares and remissions)
- No tiene cura, pero hay tratamientos muy efectivos | There is no cure, but there are very effective treatments
- Algunas personas tambien pueden tener dolor en las articulaciones (artritis psoriasica) | Some people may also have joint pain (psoriatic arthritis)`,
      keyTerms: [
        { term: 'Psoriasis', definition: 'Enfermedad de la piel que causa parches gruesos, rojos y escamosos porque las celulas crecen demasiado rapido. | Skin disease causing thick, red, scaly patches because cells grow too fast.' },
        { term: 'Placa | Plaque', definition: 'Parche elevado y plano en la piel, cubierto de escamas. | Raised, flat patch on the skin, covered with scales.' },
        { term: 'Escamas | Scales', definition: 'Copos secos plateados que se forman sobre las placas de psoriasis. | Dry, silvery flakes that form on psoriasis plaques.' },
        { term: 'Brote | Flare', definition: 'Cuando la psoriasis empeora de repente. | When psoriasis suddenly gets worse.' },
        { term: 'Artritis psoriasica | Psoriatic arthritis', definition: 'Dolor e inflamacion en las articulaciones que puede ocurrir con la psoriasis. | Pain and inflammation in joints that can occur with psoriasis.' },
      ],
      analogies: [
        'En la psoriasis, las celulas de la piel son como autos pasando un semaforo demasiado rapido: se acumulan porque se mueven sin control. | In psoriasis, skin cells are like cars running through a traffic light too fast: they pile up because they move uncontrolled.',
        'Las escamas son como hojas que se acumulan mas rapido de lo que puedes recogerlas. | Scales are like leaves piling up faster than you can rake them.',
        'El sistema inmune en la psoriasis es como una alarma de incendios que suena cuando no hay fuego. | The immune system in psoriasis is like a fire alarm going off when there is no fire.',
      ],
      examples: [
        'Una persona nota parches gruesos y escamosos en los codos que empeoran en invierno. | A person notices thick, scaly patches on their elbows that worsen in winter.',
        'Un nino desarrolla muchas manchas rojas pequenas dos semanas despues de una infeccion de garganta — psoriasis guttata. | A child develops many small red spots two weeks after a throat infection — guttate psoriasis.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La psoriasis es una enfermedad inflamatoria cronica inmunomediada con hiperproliferacion epidermica y distintas variantes clinicas. Afecta al 2-3% de la poblacion y se asocia con comorbilidades sistemicas incluyendo artritis psoriasica, enfermedad cardiovascular y sindrome metabolico. El eje IL-23/IL-17 es central en su patogenia. | Psoriasis is a chronic immune-mediated inflammatory disease with epidermal hyperproliferation and distinct clinical variants. It affects 2-3% of the population and is associated with systemic comorbidities including psoriatic arthritis, cardiovascular disease, and metabolic syndrome. The IL-23/IL-17 axis is central to its pathogenesis.',
      explanation: `## Variantes clinicas | Clinical Variants

**Psoriasis en placas (80-90%) | Plaque psoriasis (80-90%):**
- Placas eritematosas bien delimitadas con escama plateada | Well-demarcated erythematous plaques with silvery scale
- Distribucion simetrica: codos, rodillas, cuero cabelludo, lumbosacra | Symmetrical: elbows, knees, scalp, lumbosacral

**Psoriasis guttata | Guttate psoriasis:**
- Papulas pequenas (0.5-1.5 cm) en forma de gota | Small drop-like papules (0.5-1.5 cm)
- Inicio subito, frecuentemente post-estreptococo | Sudden onset, often post-streptococcal
- Comun en ninos y adultos jovenes | Common in children and young adults
- Puede resolverse espontaneamente o progresar a psoriasis en placas | May resolve spontaneously or progress to plaque psoriasis

**Psoriasis inversa (flexural) | Inverse (flexural) psoriasis:**
- Pliegues: axilas, ingle, intergluteo, inframamario | Folds: axillae, groin, intergluteal, inframammary
- Minima escama por humedad | Minimal scale due to moisture
- Placas eritematosas brillantes | Shiny erythematous plaques

**Psoriasis pustulosa | Pustular psoriasis:**
- Pustulas esteriles | Sterile pustules
- Localizada (palmoplantar) o generalizada (von Zumbusch) | Localized (palmoplantar) or generalized (von Zumbusch)
- Forma generalizada: EMERGENCIA MEDICA | Generalized form: MEDICAL EMERGENCY

**Psoriasis eritrodermica | Erythrodermic psoriasis:**
- Eritema generalizado >90% de superficie corporal | Generalized erythema >90% BSA
- EMERGENCIA MEDICA (hipotermia, infeccion, falla cardiaca de alto gasto) | MEDICAL EMERGENCY (hypothermia, infection, high-output cardiac failure)

## Signos clinicos clasicos | Classic Clinical Signs
- **Signo de Auspitz:** sangrado puntiforme al retirar la escama | Pinpoint bleeding when scale is removed
- **Fenomeno de Koebner:** psoriasis en sitios de trauma cutaneo | Psoriasis at sites of skin trauma
- **Cambios ungueales:** pitting, onicólisis, manchas de aceite | Nail changes: pitting, onycholysis, oil drop spots

## Artritis psoriasica (PsA) | Psoriatic Arthritis (PsA)
- Afecta ~30% de los pacientes con psoriasis | Affects ~30% of psoriasis patients
- Puede preceder, acompanar o seguir a la enfermedad cutanea | May precede, accompany, or follow skin disease
- Patrones: oligoarticular, poliarticular, interfalangica distal, espondilitica, artritis mutilans | Patterns: oligoarticular, polyarticular, distal interphalangeal, spondylitic, arthritis mutilans

## Patofisiologia basica | Basic Pathophysiology
- Celulas dendriticas producen IL-12 e IL-23 | Dendritic cells produce IL-12 and IL-23
- Celulas Th17 producen IL-17A, IL-17F, IL-22 | Th17 cells produce IL-17A, IL-17F, IL-22
- Celulas Th1 producen IFN-gamma, TNF-alpha | Th1 cells produce IFN-gamma, TNF-alpha
- Resultado: hiperproliferacion de queratinocitos | Result: keratinocyte hyperproliferation
- Recambio epidermico: 3-5 dias vs normal 28 dias | Epidermal turnover: 3-5 days vs normal 28 days

## Tratamiento escalonado | Step-Wise Treatment

**Leve (BSA <5%) | Mild (BSA <5%):**
- Corticosteroides topicos | Topical corticosteroids
- Analogos de vitamina D (calcipotriol) | Vitamin D analogues (calcipotriene)
- Productos de combinacion | Combination products

**Moderada-severa | Moderate-severe:**
- Fototerapia (NB-UVB) | Phototherapy (NB-UVB)
- Sistemicos convencionales: metotrexato, ciclosporina, apremilast | Conventional systemics: methotrexate, cyclosporine, apremilast
- Biologicos: anti-TNF, anti-IL-17, anti-IL-23 | Biologics: anti-TNF, anti-IL-17, anti-IL-23

## Comorbilidades | Comorbidities
- Artritis psoriasica | Psoriatic arthritis
- Enfermedad cardiovascular | Cardiovascular disease
- Sindrome metabolico | Metabolic syndrome
- Enfermedad inflamatoria intestinal | Inflammatory bowel disease
- Depresion y ansiedad | Depression and anxiety`,
      keyTerms: [
        { term: 'Psoriasis en placas | Plaque psoriasis', definition: 'La forma mas comun con placas gruesas y escamosas; 80-90% de los casos. | Most common form with thick, scaly plaques; 80-90% of cases.', pronunciation: 'plak soh-RY-ah-sis' },
        { term: 'Psoriasis guttata | Guttate psoriasis', definition: 'Lesiones pequenas en forma de gota, frecuentemente post-estreptococo. | Small drop-shaped lesions, often post-streptococcal.', pronunciation: 'GUH-tate' },
        { term: 'Signo de Auspitz | Auspitz sign', definition: 'Sangrado puntiforme al retirar la escama de psoriasis. | Pinpoint bleeding when psoriasis scale is removed.', pronunciation: 'OWS-pitz' },
        { term: 'Fenomeno de Koebner | Koebner phenomenon', definition: 'Desarrollo de psoriasis en sitios de lesion cutanea. | Development of psoriasis at sites of skin injury.', pronunciation: 'KEB-ner' },
        { term: 'Eje IL-23/IL-17 | IL-23/IL-17 axis', definition: 'Via inmunologica central que impulsa la psoriasis. | Central immunologic pathway driving psoriasis.' },
        { term: 'BSA (Superficie Corporal)', definition: 'Area de piel afectada; la palma del paciente = 1% BSA. | Affected skin area; patient palm = 1% BSA.' },
      ],
      examples: [
        'Un joven de 25 anos desarrolla multiples manchitas rojas 2 semanas despues de faringitis estreptococica — psoriasis guttata. | A 25-year-old develops multiple small red spots 2 weeks after strep throat — guttate psoriasis.',
        'Un paciente nota que la psoriasis aparece donde se rasca la piel — fenomeno de Koebner. | A patient notices psoriasis appearing where they scratch the skin — Koebner phenomenon.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La patogenesis de la psoriasis involucra el eje IL-23/IL-17, susceptibilidad genetica (HLA-Cw6) y desencadenantes ambientales. La histopatologia muestra acantosis regular, paraqueratosis, microabscesos de Munro y vasos dilatados. El PASI es el estandar de evaluacion. Los biologicos anti-IL-23 (guselkumab, risankizumab) emergieron como altamente efectivos con excelente perfil de seguridad. | Psoriasis pathogenesis involves the IL-23/IL-17 axis, genetic susceptibility (HLA-Cw6), and environmental triggers. Histopathology shows regular acanthosis, parakeratosis, Munro microabscesses, and dilated vessels. PASI is the assessment standard. Anti-IL-23 biologics (guselkumab, risankizumab) have emerged as highly effective with excellent safety profiles.',
      explanation: `## Inmunopatogenesis | Immunopathogenesis

### Fase de iniciacion | Initiation phase
- Desencadenante (trauma, infeccion) activa queratinocitos y celulas dendriticas | Trigger (trauma, infection) activates keratinocytes and dendritic cells
- LL-37 (catelicidina) forma complejos con DNA/RNA propios, activando TLR7/9 | LL-37 (cathelicidin) complexes with self-DNA/RNA, activating TLR7/9
- Celulas dendriticas mieloides producen IL-12 e IL-23 | Myeloid dendritic cells produce IL-12 and IL-23

### Fase de amplificacion | Amplification phase
- IL-23 promueve diferenciacion y supervivencia de Th17 | IL-23 promotes Th17 differentiation and survival
- Th17 producen IL-17A, IL-17F, IL-22 | Th17 produce IL-17A, IL-17F, IL-22
- IL-17 actua sobre queratinocitos: quimiocinas, peptidos antimicrobianos, proliferacion | IL-17 acts on keratinocytes: chemokines, antimicrobial peptides, proliferation

### Histopatologia | Histopathology
- Acantosis con elongacion regular de crestas epiteliales | Acanthosis with regular rete ridge elongation
- Paraqueratosis (nucleos retenidos en estrato corneo) | Parakeratosis (nuclei retained in stratum corneum)
- Perdida de capa granulosa | Loss of granular layer
- Microabscesos de Munro (neutrofilos en estrato corneo) | Munro microabscesses (neutrophils in stratum corneum)
- Pustulas de Kogoj (pustulas espongiformes en capa espinosa) | Kogoj pustules (spongiform pustules in spinous layer)
- Capilares dilatados y tortuosos en papilas dermicas | Dilated, tortuous capillaries in dermal papillae
- Adelgazamiento suprapapilar | Suprapapillary thinning

### Genetica | Genetics
- **HLA-Cw6 (PSORS1):** asociacion mas fuerte; riesgo 10x | Strongest association; 10x risk
  - Asociado con inicio temprano y psoriasis guttata | Associated with early onset and guttate psoriasis
- **HLA-B27:** asociado con artritis psoriasica | Associated with psoriatic arthritis
- **IL23R, IL12B:** via IL-23 | IL-23 pathway
- **CARD14:** senalizacion NF-kB en queratinocitos | Keratinocyte NF-kB signaling

## Evaluacion clinica | Clinical Assessment

**PASI (Psoriasis Area and Severity Index):**
- Evalua eritema, induracion, escama en 4 regiones corporales | Assesses erythema, induration, scale in 4 body regions
- Ponderado por area | Weighted by area
- PASI 75 = 75% de mejoria (referencia de eficacia) | PASI 75 = 75% improvement (efficacy benchmark)
- PASI 90 = nuevo estandar de eficacia | PASI 90 = new efficacy standard

**DLQI (Dermatology Life Quality Index):**
- 10 preguntas sobre impacto en calidad de vida | 10 questions about quality of life impact
- >10: impacto severo | >10: severe impact

## Tratamiento detallado | Detailed Treatment

### Topicos | Topicals

**Corticosteroides:**
| Potencia | Ejemplo | Uso | Potency | Example | Use |
|----------|---------|-----|---------|---------|-----|
| Super-alta | Clobetasol | Placas gruesas, palmas (corto plazo) | Super-high | Clobetasol | Thick plaques, palms (short-term) |
| Alta | Betametasona dipropionato | Placas corporales | High | Betamethasone dipropionate | Body plaques |
| Media | Triamcinolona | Mantenimiento | Medium | Triamcinolone | Maintenance |
| Baja | Hidrocortisona | Cara, pliegues | Low | Hydrocortisone | Face, folds |

**Otros topicos | Other topicals:**
- Calcipotriol/betametasona (Enstilar, Taclonex): combinacion mas efectiva | Most effective combination
- Tazaroteno (retinoide) | Tazarotene (retinoid)
- Roflumilast (espuma PDE4i) | Roflumilast (PDE4i foam)
- Tapinarof (agonista AhR) | Tapinarof (AhR agonist)

### Fototerapia | Phototherapy
- NB-UVB (311-313 nm): primera linea; 2-3x/semana | NB-UVB (311-313 nm): first-line; 2-3x/week
- PUVA: mas efectiva pero mas carcinogenica | PUVA: more effective but more carcinogenic
- Laser excimer (308 nm): UVB dirigida para placas limitadas | Excimer laser (308 nm): targeted UVB for limited plaques

### Sistemicos convencionales | Conventional Systemics
| Agente | Mecanismo | Monitoreo | Agent | Mechanism | Monitoring |
|--------|-----------|-----------|-------|-----------|-----------|
| Metotrexato | Antifolato, antiinflamatorio | LFTs, CBC | Methotrexate | Antifolate, anti-inflammatory | LFTs, CBC |
| Ciclosporina | Inhibidor de calcineurina | PA, Cr, K+ | Cyclosporine | Calcineurin inhibitor | BP, Cr, K+ |
| Acitretina | Retinoide | Lipidos, LFTs, teratogenico 3 anos | Acitretin | Retinoid | Lipids, LFTs, teratogenic 3 years |
| Apremilast | Inhibidor de PDE4 | Peso, animo | Apremilast | PDE4 inhibitor | Weight, mood |

### Biologicos | Biologics

**Anti-TNF:** Etanercept, infliximab, adalimumab, certolizumab
- PASI 75: 50-70% | PASI 75 rates: 50-70%
- Riesgo: infecciones, reactivacion TB latente | Risk: infections, latent TB reactivation

**Anti-IL-17:** Secukinumab, ixekizumab, brodalumab
- PASI 90: 60-70% | PASI 90 rates: 60-70%
- Riesgo: infecciones por Candida, exacerbacion de EII | Risk: Candida infections, IBD exacerbation

**Anti-IL-23 (anti-p19):** Guselkumab, tildrakizumab, risankizumab
- PASI 90: 70%+ | PASI 90 rates: 70%+
- Excelente perfil de seguridad | Excellent safety profile
- Dosificacion menos frecuente (cada 8-12 semanas tras carga) | Less frequent dosing (q8-12 weeks after loading)

**Anti-IL-12/23 (anti-p40):** Ustekinumab
- Bloquea IL-12 e IL-23 | Blocks both IL-12 and IL-23
- Dosificado por peso | Weight-based dosing`,
      keyTerms: [
        { term: 'PASI', definition: 'Psoriasis Area and Severity Index: medida clinica estandar; PASI 75 = 75% de mejoria. | Standard clinical measure; PASI 75 = 75% improvement.' },
        { term: 'Microabsceso de Munro | Munro microabscess', definition: 'Coleccion de neutrofilos en el estrato corneo; hallazgo histopatologico caracteristico de psoriasis. | Neutrophil collection in stratum corneum; characteristic histopathologic finding.' },
        { term: 'HLA-Cw6 (PSORS1)', definition: 'Locus de susceptibilidad principal para psoriasis; riesgo 10x. | Major psoriasis susceptibility locus; 10x risk.' },
        { term: 'NB-UVB', definition: 'Ultravioleta B de banda estrecha (311-313nm); fototerapia de primera linea. | Narrowband ultraviolet B (311-313nm); first-line phototherapy.' },
        { term: 'Anti-IL-23 (anti-p19)', definition: 'Biologicos que bloquean la subunidad p19 de IL-23 (guselkumab, risankizumab); alta eficacia y excelente seguridad. | Biologics blocking IL-23 p19 subunit; high efficacy and excellent safety.' },
        { term: 'Acantosis | Acanthosis', definition: 'Engrosamiento de la epidermis; hallazgo histologico de la psoriasis. | Epidermal thickening; histologic finding in psoriasis.' },
      ],
      clinicalNotes: 'HLA-Cw6 positivo predice mejor respuesta a ustekinumab. Los anti-IL-17 pueden empeorar EII: evitar en pacientes con historia de EII. Los anti-IL-23 emergieron como primera linea por eficacia y seguridad. Tamizar psoriasis moderada-severa para artritis psoriasica con PEST u otra herramienta. Considerar riesgo CV como objetivo del tratamiento. | HLA-Cw6 positivity predicts better ustekinumab response. Anti-IL-17 can worsen IBD: avoid in IBD history. Anti-IL-23 emerged as first-line due to efficacy and safety. Screen moderate-severe psoriasis for PsA with PEST. Consider CV risk as a treatment target.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de psoriasis integra medicina de precision, optimizacion biologica, manejo de falla terapeutica y reduccion integral del riesgo cardiovascular. Las celulas T de memoria residentes en tejido (TRM) explican la recurrencia en las mismas localizaciones. La terapia anti-IL-23 a largo plazo puede depletar TRM patogenicas. Los criterios CASPAR clasifican la artritis psoriasica. | Advanced psoriasis management integrates precision medicine, biologic optimization, treatment failure management, and comprehensive cardiovascular risk reduction. Tissue-resident memory T cells (TRM) explain recurrence at the same locations. Long-term anti-IL-23 therapy may deplete pathogenic TRM. CASPAR criteria classify psoriatic arthritis.',
      explanation: `## Patofisiologia avanzada | Advanced Pathophysiology

### Celulas T de memoria residentes en tejido (TRM) | Tissue-Resident Memory T Cells (TRM)
- Celulas CD8+ CD103+ TRM persisten en placas resueltas | CD8+ CD103+ TRM cells persist in resolved plaques
- Producen IL-17A al ser reestimuladas | Produce IL-17A upon restimulation
- Explican la recurrencia en las mismas localizaciones | Explain recurrence at same locations
- Meta emergente: modificacion de enfermedad (no solo supresion) | Emerging goal: disease modification (not just suppression)
- Bloqueo prolongado de IL-23 puede depletar TRM patogenicas | Prolonged IL-23 blockade may deplete pathogenic TRM

### Inflamacion sistemica — "Marcha psoriasica" | Systemic Inflammation — "Psoriatic March"
- Inflamacion cutanea cronica → citocinas sistemicas (TNF, IL-6, IL-1) | Chronic skin inflammation → systemic cytokines
- Promueven: resistencia a insulina, disfuncion endotelial, aterosclerosis | Promote: insulin resistance, endothelial dysfunction, atherosclerosis
- 18F-FDG PET muestra inflamacion aortica correlacionada con severidad cutanea | Aortic inflammation correlated with skin severity
- Biologicos pueden mejorar biomarcadores vasculares | Biologics may improve vascular biomarkers

### Correlaciones genetico-fenotipicas | Genetic-Phenotype Correlations
| Factor genetico | Fenotipo | Genetic factor | Phenotype |
|----------------|---------|----------------|-----------|
| HLA-Cw6+ | Inicio temprano, guttata, mejor a ustekinumab | HLA-Cw6+ | Early onset, guttate, better to ustekinumab |
| HLA-Cw6- | Inicio tardio, puede favorecer anti-IL-17 | HLA-Cw6- | Late onset, may favor anti-IL-17 |
| CARD14 | Psoriasis pustulosa generalizada | CARD14 | Generalized pustular psoriasis |
| IL36RN | Psoriasis pustulosa generalizada (DITRA) | IL36RN | Generalized pustular psoriasis (DITRA) |

## Algoritmo de seleccion biologica | Biologic Selection Algorithm

| Escenario clinico | Agente preferido | Clinical scenario | Preferred agent |
|-------------------|-----------------|-------------------|-----------------|
| Psoriasis + PsA | Anti-TNF o anti-IL-17 | Psoriasis + PsA | Anti-TNF or anti-IL-17 |
| Psoriasis + EII | Anti-TNF (NO anti-IL-17) | Psoriasis + IBD | Anti-TNF (NOT anti-IL-17) |
| Psoriasis + EM | NO anti-TNF | Psoriasis + MS | NOT anti-TNF |
| Severa sin comorbilidades | Anti-IL-23 (eficacia + seguridad) | Severe, no comorbidities | Anti-IL-23 (efficacy + safety) |
| Respuesta rapida necesaria | Anti-IL-17 | Rapid response needed | Anti-IL-17 |

## Manejo de falla biologica | Managing Biologic Failure

**No respuesta primaria (sin mejoria semana 12-16) | Primary non-response:**
- Confirmar diagnostico | Confirm diagnosis
- Evaluar adherencia | Assess adherence
- Buscar anticuerpos neutralizantes | Check for neutralizing antibodies
- Cambiar mecanismo de accion | Switch mechanism of action

**Perdida de respuesta secundaria | Secondary loss of response:**
- Frecuentemente por anticuerpos anti-farmaco | Often due to anti-drug antibodies
- Opciones: aumentar dosis, agregar metotrexato (reduce inmunogenicidad), cambiar agente | Options: increase dose, add methotrexate (reduces immunogenicity), switch agent

## Situaciones especiales | Special Situations

**Psoriasis pustulosa generalizada (GPP) | Generalized Pustular Psoriasis:**
- EMERGENCIA MEDICA | MEDICAL EMERGENCY
- Patogenesis: via IL-36 (distinta de psoriasis en placas) | Pathogenesis: IL-36 pathway (distinct from plaque)
- Spesolimab (anti-IL-36R): aprobado para brotes de GPP | Spesolimab (anti-IL-36R): approved for GPP flares

**Psoriasis eritrodermica | Erythrodermic psoriasis:**
- Hospitalizar si inestable | Hospitalize if unstable
- Ciclosporina frecuentemente primera linea | Cyclosporine often first-line
- Infliximab para inicio rapido | Infliximab for rapid onset

## Artritis psoriasica — Criterios CASPAR | PsA — CASPAR Criteria
- Enfermedad articular inflamatoria + 3+ puntos | Inflammatory articular disease + 3+ points
- Psoriasis (actual 2, historia 1), cambios ungueales (1), dactilitis (1), FR negativo (1), formacion osea yuxtaarticular en Rx (1) | Psoriasis (current 2, history 1), nail changes (1), dactylitis (1), negative RF (1), juxta-articular bone formation on X-ray (1)

## Riesgo cardiovascular | Cardiovascular Risk
- Psoriasis severa: ~50% mayor riesgo de IM | Severe psoriasis: ~50% increased MI risk
- Psoriasis = factor de riesgo CV independiente | Psoriasis = independent CV risk factor
- Tamizaje: lipidos, glucosa, PA, IMC | Screening: lipids, glucose, BP, BMI
- Biologicos pueden reducir riesgo CV (datos observacionales) | Biologics may reduce CV risk (observational data)`,
      keyTerms: [
        { term: 'TRM (Celulas T de memoria residentes) | Tissue-resident memory T cells', definition: 'Celulas T no circulantes que persisten en la piel y promueven recurrencia local. | Non-circulating T cells persisting in skin driving local recurrence.' },
        { term: 'Spesolimab', definition: 'Anticuerpo anti-IL-36R aprobado para brotes de psoriasis pustulosa generalizada. | Anti-IL-36R antibody approved for generalized pustular psoriasis flares.', pronunciation: 'speh-SOL-ih-mab' },
        { term: 'Criterios CASPAR | CASPAR criteria', definition: 'Criterios de clasificacion para artritis psoriasica. | Classification criteria for psoriatic arthritis.' },
        { term: 'Marcha psoriasica | Psoriatic march', definition: 'Teoria de que la inflamacion cutanea cronica impulsa comorbilidades sistemicas (CV, metabolicas). | Theory that chronic skin inflammation drives systemic comorbidities (CV, metabolic).' },
        { term: 'Anticuerpos anti-farmaco | Anti-drug antibodies', definition: 'Respuesta inmune a medicamentos biologicos que puede reducir la eficacia. | Immune response to biologic medications that can reduce efficacy.' },
        { term: 'Dactilitis | Dactylitis', definition: 'Inflamacion difusa de un dedo ("dedo en salchicha"); comun en artritis psoriasica. | Diffuse finger inflammation ("sausage digit"); common in PsA.' },
      ],
      clinicalNotes: 'Los anti-IL-23 pueden lograr modificacion verdadera de la enfermedad via deplecion de TRM: evidencia emergente de remision sostenida sin farmaco. Para PsA con afectacion axial, usar anti-TNF o anti-IL-17 (NO anti-IL-23). GPP es geneticamente distinta de psoriasis en placas (via IL-36) y tiene tratamiento especifico (spesolimab). La reduccion del riesgo CV es un objetivo terapeutico: los biologicos pueden ayudar mas alla de la piel. | Anti-IL-23 may achieve true disease modification via TRM depletion: emerging evidence for sustained off-drug remission. For PsA with axial involvement, use anti-TNF or anti-IL-17 (NOT anti-IL-23). GPP is genetically distinct from plaque psoriasis (IL-36 pathway) with specific treatment (spesolimab). CV risk reduction is a treatment target: biologics may help beyond skin.',
    },

    5: {
      level: 5,
      summary:
        'La ciencia traslacional de la psoriasis se centra en modificacion de enfermedad (deplecion de TRM via bloqueo prolongado de IL-23), inhibidores selectivos de TYK2 (deucravacitinib), bimekizumab (anti-IL-17A/F dual), eje intestino-piel, y farmacogenomica. La terapia treat-to-target busca PASI <=1 o IGA 0/1. Los biosimilares y la medicina basada en valor estan transformando la accesibilidad. | Psoriasis translational science focuses on disease modification (TRM depletion via prolonged IL-23 blockade), selective TYK2 inhibitors (deucravacitinib), bimekizumab (dual anti-IL-17A/F), gut-skin axis, and pharmacogenomics. Treat-to-target therapy aims for PASI <=1 or IGA 0/1. Biosimilars and value-based medicine are transforming accessibility.',
      explanation: `## Ciencia traslacional | Translational Science

### Matices del eje IL-23/IL-17 | IL-23/IL-17 Axis Nuances

**Biologia de IL-23 | IL-23 Biology:**
- Heterodimero: p19 + p40 | Heterodimer: p19 + p40
- IL-23R en celulas Th17, ILC3, celulas T gamma-delta | IL-23R on Th17, ILC3, gamma-delta T cells
- Critica para supervivencia de Th17 (NO para diferenciacion inicial) | Critical for Th17 survival (NOT for initial differentiation)

**Por que los anti-IL-23 son superiores | Why anti-IL-23 excels:**
- Bloquean upstream de IL-17 | Block upstream of IL-17
- Permiten que Th17 se "reinicien" sin senal de supervivencia | Allow Th17 to "reset" without survival signal
- No inmunosuprimen directamente (el bloqueo de IL-17 si) | Don't directly immunosuppress (IL-17 blockade does)
- Potencial para modificacion de enfermedad | Potential for disease modification

**Familia IL-17 | IL-17 Family:**
- IL-17A: mediador principal | Primary mediator
- IL-17F: similar pero menos potente | Similar but less potent
- IL-17C: derivado de queratinocitos, asa autocrina | Keratinocyte-derived, autocrine loop
- IL-17E (IL-25): diferente, via Th2 | Different, Th2 pathway

### Modificacion de enfermedad y TRM | Disease Modification and TRM
- Inhibicion prolongada de IL-23 puede depletar TRM con el tiempo | Prolonged IL-23 inhibition may deplete TRM over time
- Datos preliminares: remision sostenida sin tratamiento en algunos pacientes | Preliminary data: sustained off-treatment remission in some patients
- Meta: remision libre de farmaco (modificacion verdadera) | Goal: drug-free remission (true modification)

### Farmacogenomica | Pharmacogenomics
| Marcador genetico | Asociacion | Genetic marker | Association |
|-------------------|-----------|----------------|-------------|
| HLA-Cw6 | Mejor respuesta a ustekinumab | HLA-Cw6 | Better ustekinumab response |
| IL23R rs11209026 | Mejor respuesta a anti-IL-23 | IL23R rs11209026 | Better anti-IL-23 response |
| TNFAIP3 | Respuesta variable a anti-TNF | TNFAIP3 | Variable anti-TNF response |

## Terapias emergentes | Emerging Therapeutics

### Inhibidores de TYK2 | TYK2 Inhibitors
- **Deucravacitinib:** inhibidor oral selectivo de TYK2 | Oral selective TYK2 inhibitor
- TYK2 media senalizacion de IL-23, IL-12, IFN tipo I | TYK2 mediates IL-23, IL-12, type I IFN signaling
- Oral, una vez al dia | Oral, once daily
- Eficacia similar a biologicos; menos EA que inhibidores de JAK | Efficacy similar to biologics; fewer AEs than JAK inhibitors
- No requiere monitoreo de laboratorio | No lab monitoring required

### Bloqueo dual IL-17A/F | Dual IL-17A/F Blockade
- **Bimekizumab:** bloquea IL-17A e IL-17F | Blocks both IL-17A and IL-17F
- Tasas de PASI 100 superiores a anti-IL-17A solo | Higher PASI 100 rates than IL-17A alone
- Aprobado (FDA 2024) | FDA approved (2024)
- Mas infecciones por Candida | More Candida infections

### Otros blancos | Other Targets
- **Inhibidores de RORgammaT:** bloquean transcripcion de Th17 | Block Th17 transcription
- **Inhibidores orales de IL-17:** en desarrollo | In development

### Eje intestino-piel | Gut-Skin Axis
- Microbioma intestinal alterado en psoriasis | Altered gut microbiome in psoriasis
- Metabolitos (SCFA) pueden influir en inflamacion | Metabolites (SCFA) may influence inflammation
- GLP-1 agonistas: perdida de peso mejora psoriasis | GLP-1 agonists: weight loss improves psoriasis
- Cirugia bariatrica: puede mejorar dramaticamente la psoriasis | Bariatric surgery: can dramatically improve psoriasis

## Manejo complejo | Complex Management

### Psoriasis inducida por farmacos | Drug-Induced Psoriasis
- Betabloqueadores, litio, antipaludicos, interferones | Beta-blockers, lithium, antimalarials, interferons
- Inhibidores de checkpoint (PD-1, CTLA-4) | Checkpoint inhibitors (PD-1, CTLA-4)

### Psoriasis paradojica por biologicos | Paradoxical Psoriasis from Biologics
- Psoriasis nueva o empeorada durante terapia anti-TNF | New or worsened psoriasis on TNF inhibitor
- Frecuentemente palmoplantar o cuero cabelludo | Often palmoplantar or scalp
- Mecanismo: desequilibrio TNF/IFN-alpha | Mechanism: TNF/IFN-alpha imbalance
- Manejo: topicos, cambio de clase biologica | Management: topicals, switch biologic class

### Psoriasis en embarazo | Psoriasis in Pregnancy
- Mejora en ~50%, empeora en ~25% | Improves in ~50%, worsens in ~25%
- Preferidos: corticosteroides topicos, NB-UVB, certolizumab (transferencia placentaria minima) | Preferred: topical steroids, NB-UVB, certolizumab (minimal placental transfer)
- Evitar: metotrexato (teratogenico), acitretina (teratogenico 3 anos) | Avoid: methotrexate (teratogenic), acitretin (teratogenic 3 years)

## Calidad de atencion | Quality of Care

### Treat-to-target | Treat-to-Target
- Metas: PASI <=1 o IGA 0/1, BSA <=1%, DLQI <=1 | Targets: PASI <=1 or IGA 0/1, BSA <=1%, DLQI <=1
- Evaluar semana 12-16: si no en meta, optimizar/cambiar | Assess week 12-16: if not at target, optimize/switch

### Biosimilares y acceso | Biosimilars and Access
- Disponibles para etanercept, infliximab, adalimumab | Available for etanercept, infliximab, adalimumab
- Ahorro significativo en costos | Significant cost savings
- Contratacion basada en valor (pago por resultados) | Value-based contracting (payment by outcomes)

### Atencion multidisciplinaria | Multidisciplinary Care
- Dermatologia, reumatologia (PsA), cardiologia (riesgo CV) | Dermatology, rheumatology (PsA), cardiology (CV risk)
- Psicologia/psiquiatria, nutricion/manejo de peso | Psychology/psychiatry, nutrition/weight management`,
      keyTerms: [
        { term: 'Deucravacitinib', definition: 'Inhibidor oral selectivo de TYK2 para psoriasis; eficacia similar a biologicos, perfil de seguridad favorable vs JAKi. | Oral selective TYK2 inhibitor for psoriasis; biologic-like efficacy, favorable safety vs JAKi.', pronunciation: 'doo-KRAV-ah-ti-nib' },
        { term: 'Bimekizumab', definition: 'Biologico que bloquea IL-17A e IL-17F; mayores tasas de PASI 100. | Biologic blocking IL-17A and IL-17F; highest PASI 100 rates.', pronunciation: 'bih-meh-KIZ-oo-mab' },
        { term: 'RORgammaT', definition: 'Factor de transcripcion maestro para celulas Th17; blanco terapeutico emergente. | Master transcription factor for Th17 cells; emerging therapeutic target.' },
        { term: 'Psoriasis paradojica | Paradoxical psoriasis', definition: 'Psoriasis nueva o empeorada durante terapia anti-TNF. | New or worsened psoriasis during anti-TNF therapy.' },
        { term: 'Treat-to-target', definition: 'Enfoque terapeutico que ajusta tratamiento hasta alcanzar metas predefinidas (PASI <=1). | Therapeutic approach adjusting treatment until predefined goals are achieved.' },
        { term: 'TYK2', definition: 'Tirosina quinasa 2; media senalizacion de IL-23, IL-12, IFN tipo I; blanco de deucravacitinib. | Tyrosine kinase 2; mediates IL-23, IL-12, type I IFN signaling; target of deucravacitinib.' },
      ],
      clinicalNotes: 'Los anti-IL-23 pueden lograr modificacion verdadera de enfermedad via deplecion de TRM: evidencia emergente de remision sostenida sin farmaco. Deucravacitinib (TYK2i) ofrece opcion oral con eficacia similar a biologicos y sin monitoreo de laboratorio. Bimekizumab (anti-IL-17A/F) logra las mayores tasas de PASI 100 pero mas candidiasis. Certolizumab tiene transferencia placentaria minima y es el biologico preferido en embarazo. La psoriasis paradojica por anti-TNF requiere reconocimiento y cambio de clase. El riesgo CV es un objetivo terapeutico; los biosimilares mejoran la accesibilidad. | Anti-IL-23 may achieve true disease modification via TRM depletion: emerging evidence for sustained off-drug remission. Deucravacitinib (TYK2i) offers oral option with biologic-like efficacy and no lab monitoring. Bimekizumab (anti-IL-17A/F) achieves highest PASI 100 rates but more candidiasis. Certolizumab has minimal placental transfer and is preferred biologic in pregnancy. Paradoxical psoriasis from anti-TNF requires recognition and class switch. CV risk is a treatment target; biosimilars improve accessibility.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aad-psoriasis-guidelines-2024',
      type: 'guideline',
      title: 'Joint AAD-NPF Guidelines of Care for the Management of Psoriasis with Systemic Therapy',
      authors: ['Menter, A.', 'et al.'],
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'fitzpatrick-psoriasis',
      type: 'textbook',
      title: 'Fitzpatrick\'s Dermatology, 9th Edition — Psoriasis',
      authors: ['Kang, S.', 'Amagai, M.'],
      source: 'McGraw-Hill Education',
    },
    {
      id: 'bolognia-psoriasis',
      type: 'textbook',
      title: 'Dermatology (Bolognia) — Psoriasis',
      source: 'Elsevier',
      chapter: '8',
    },
    {
      id: 'arenas-psoriasis',
      type: 'textbook',
      title: 'Dermatologia: Atlas, diagnostico y tratamiento, 7a edicion — Psoriasis',
      authors: ['Arenas, R.'],
      source: 'McGraw-Hill Interamericana',
    },
  ],

  crossReferences: [
    { targetId: 'derm-dermatitis-eczema', targetType: 'condition', relationship: 'related', label: 'Dermatitis y eccema | Dermatitis and eczema' },
    { targetId: 'derm-cancer-piel-skin-cancer', targetType: 'condition', relationship: 'see-also', label: 'Cancer de piel | Skin cancer' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'parent', label: 'Anatomia de la piel | Skin anatomy' },
  ],

  tags: {
    systems: ['integumentary', 'immune', 'musculoskeletal'],
    topics: ['dermatology', 'psoriasis', 'immunology', 'rheumatology'],
    keywords: [
      'psoriasis', 'psoriasis en placas', 'plaque psoriasis',
      'artritis psoriasica', 'psoriatic arthritis',
      'IL-23', 'IL-17', 'biologicos', 'biologics',
      'PASI', 'deucravacitinib', 'bimekizumab',
      'guselkumab', 'risankizumab',
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

export default psoriasis;
