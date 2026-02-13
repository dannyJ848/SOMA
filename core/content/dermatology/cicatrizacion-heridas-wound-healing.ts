/**
 * Cicatrizacion de Heridas / Wound Healing - Contenido Educativo Completo Bilingue
 *
 * Fases de cicatrizacion, cuidado de heridas, heridas cronicas.
 * Wound healing phases, wound care, chronic wounds.
 *
 * Covers: hemostasis, inflammation, proliferation, remodeling, chronic wounds,
 * diabetic ulcers, venous ulcers, pressure injuries, negative pressure wound therapy
 */

import { EducationalContent } from '../types';

export const cicatrizacionHeridasWoundHealing: EducationalContent = {
  id: 'derm-cicatrizacion-heridas-wound-healing',
  type: 'process',
  name: 'Wound Healing | Cicatrizacion de Heridas',
  nameEs: 'Cicatrizacion de Heridas',
  alternateNames: [
    'Reparacion Tisular', 'Tissue Repair',
    'Cuidado de Heridas', 'Wound Care',
    'Heridas Cronicas', 'Chronic Wounds',
    'Ulceras Cutaneas', 'Skin Ulcers',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La cicatrizacion es el proceso natural del cuerpo para reparar una herida. Tiene cuatro fases: parar el sangrado, limpiar la herida (inflamacion), reconstruir el tejido y fortalecer la cicatriz. Algunas heridas no sanan bien (heridas cronicas) y necesitan atencion medica especial, especialmente en personas con diabetes o problemas de circulacion. | Wound healing is the body\'s natural process to repair a wound. It has four phases: stopping bleeding, cleaning the wound (inflammation), rebuilding tissue, and strengthening the scar. Some wounds do not heal well (chronic wounds) and need special medical attention, especially in people with diabetes or circulation problems.',
      explanation: `## Como sana una herida | How a wound heals

Cuando te cortas o te lastimas la piel, tu cuerpo inicia un proceso increible para repararse. Este proceso tiene cuatro pasos principales:
When you cut or injure your skin, your body starts an incredible process to repair itself. This process has four main steps:

### Paso 1: Parar el sangrado (Hemostasia) | Step 1: Stop the bleeding (Hemostasis)
- La sangre se espesa y forma un coagulo para detener el sangrado | Blood thickens and forms a clot to stop bleeding
- El coagulo actua como un "tapon" temporal | The clot acts as a temporary "plug"
- Esto ocurre en minutos | This happens in minutes

### Paso 2: Limpiar la herida (Inflamacion) | Step 2: Clean the wound (Inflammation)
- El area se pone roja, caliente e hinchada (esto es NORMAL) | The area gets red, warm, and swollen (this is NORMAL)
- Las celulas del sistema inmune llegan para limpiar bacterias y desechos | Immune cells arrive to clean bacteria and debris
- Dura 2-5 dias | Lasts 2-5 days

### Paso 3: Reconstruir (Proliferacion) | Step 3: Rebuild (Proliferation)
- El cuerpo construye nuevo tejido para llenar la herida | The body builds new tissue to fill the wound
- Se forman nuevos vasos sanguineos | New blood vessels form
- La piel nueva crece desde los bordes hacia el centro | New skin grows from the edges toward the center
- Dura semanas | Lasts weeks

### Paso 4: Fortalecer (Remodelacion) | Step 4: Strengthen (Remodeling)
- La cicatriz se vuelve mas fuerte con el tiempo | The scar becomes stronger over time
- Puede tomar meses o hasta anos | May take months or even years
- La cicatriz nunca es tan fuerte como la piel original (maximo 80%) | The scar is never as strong as original skin (maximum 80%)

### Cuidado basico de heridas | Basic wound care
- Lavar la herida con agua limpia | Wash the wound with clean water
- Aplicar presion para detener el sangrado | Apply pressure to stop bleeding
- Mantener la herida limpia y cubierta | Keep the wound clean and covered
- Cambiar vendajes regularmente | Change bandages regularly
- NO aplicar alcohol o peroxido de hidrogeno directamente (dana el tejido nuevo) | Do NOT apply alcohol or hydrogen peroxide directly (damages new tissue)

### Cuando ir al medico | When to see the doctor
- La herida no deja de sangrar | The wound won't stop bleeding
- La herida es profunda o los bordes estan separados | The wound is deep or edges are separated
- Hay signos de infeccion: mas rojo, caliente, pus, lineas rojas, fiebre | Signs of infection: more red, warm, pus, red lines, fever
- La herida no mejora en 1-2 semanas | The wound doesn't improve in 1-2 weeks
- Personas con diabetes deben revisar heridas en los pies TODOS los dias | People with diabetes should check foot wounds EVERY day`,
      keyTerms: [
        { term: 'Cicatrizacion | Wound healing', definition: 'Proceso natural del cuerpo para reparar una herida. | The body\'s natural process to repair a wound.' },
        { term: 'Coagulo | Clot', definition: 'Tapon de sangre que se forma para detener el sangrado. | Blood plug that forms to stop bleeding.' },
        { term: 'Inflamacion | Inflammation', definition: 'Enrojecimiento, calor e hinchazon alrededor de una herida; es la forma del cuerpo de limpiar y proteger. | Redness, warmth, and swelling around a wound; the body\'s way of cleaning and protecting.' },
        { term: 'Cicatriz | Scar', definition: 'Tejido nuevo que se forma para cerrar una herida; nunca es tan fuerte como la piel original. | New tissue that forms to close a wound; never as strong as original skin.' },
        { term: 'Herida cronica | Chronic wound', definition: 'Herida que no sana en el tiempo esperado (generalmente >4-6 semanas). | Wound that does not heal in the expected time (usually >4-6 weeks).' },
      ],
      analogies: [
        'La cicatrizacion es como reparar un agujero en una pared: primero tapas el hueco (coagulo), luego limpias los escombros (inflamacion), despues rellenas con yeso (proliferacion) y finalmente pintas y dejas secar (remodelacion). | Wound healing is like repairing a hole in a wall: first you plug the hole (clot), then clean the debris (inflammation), then fill with plaster (proliferation), and finally paint and let dry (remodeling).',
        'Las celulas inmunes son como un equipo de limpieza que llega a la herida para remover bacterias y desechos. | Immune cells are like a cleaning crew arriving at the wound to remove bacteria and debris.',
        'La cicatriz final es como un parche: funcional pero nunca identica a la piel original. | The final scar is like a patch: functional but never identical to the original skin.',
      ],
      examples: [
        'Una cortada en el dedo que forma una costra y sana en 1-2 semanas — cicatrizacion normal. | A finger cut that scabs over and heals in 1-2 weeks — normal healing.',
        'Una persona con diabetes con una ulcera en el pie que no sana en 2 meses — herida cronica que necesita atencion especializada. | A person with diabetes with a foot ulcer that doesn\'t heal in 2 months — chronic wound needing specialized care.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La cicatrizacion ocurre en cuatro fases superpuestas: hemostasia (plaquetas, fibrina), inflamacion (neutrofilos, macrofagos), proliferacion (fibroblastos, angiogenesis, colageno tipo III) y remodelacion (colageno tipo I, hasta 80% de fuerza tensil). Las heridas cronicas incluyen ulceras diabeticas, venosas, arteriales y por presion. Factores como diabetes, inmunosupresion, malnutricion e infeccion retrasan la cicatrizacion. | Wound healing occurs in four overlapping phases: hemostasis (platelets, fibrin), inflammation (neutrophils, macrophages), proliferation (fibroblasts, angiogenesis, type III collagen), and remodeling (type I collagen, up to 80% tensile strength). Chronic wounds include diabetic, venous, arterial, and pressure ulcers. Factors like diabetes, immunosuppression, malnutrition, and infection delay healing.',
      explanation: `## Cuatro fases de cicatrizacion | Four Phases of Wound Healing

### Fase 1: Hemostasia (minutos) | Phase 1: Hemostasis (minutes)
- Vasoconstriccion refleja (reduce sangrado) | Reflex vasoconstriction (reduces bleeding)
- Agregacion plaquetaria → tapon plaquetario | Platelet aggregation → platelet plug
- Cascada de coagulacion → red de fibrina | Coagulation cascade → fibrin mesh
- Las plaquetas liberan factores de crecimiento (PDGF, TGF-beta) que inician la reparacion | Platelets release growth factors initiating repair

### Fase 2: Inflamacion (dias 1-5) | Phase 2: Inflammation (days 1-5)
- **Neutrofilos (primeras 24-48 horas):** primera linea de defensa, eliminan bacterias y desechos | First line of defense, eliminate bacteria and debris
- **Macrofagos (dias 2-5):** celula MAS IMPORTANTE de la cicatrizacion | MOST IMPORTANT wound healing cell
  - Fagocitan desechos y bacterias | Phagocytize debris and bacteria
  - Producen factores de crecimiento (TGF-beta, VEGF, PDGF) | Produce growth factors
  - Dirigen la transicion a fase proliferativa | Direct transition to proliferative phase

### Fase 3: Proliferacion (dias 5-21) | Phase 3: Proliferation (days 5-21)
- **Fibroblastos:** producen colageno tipo III (temporal) y componentes de la matriz | Produce type III collagen (temporary) and matrix components
- **Angiogenesis:** formacion de nuevos vasos sanguineos (mediada por VEGF) | New blood vessel formation (VEGF-mediated)
- **Tejido de granulacion:** tejido rojo, humedo y granular que llena la herida | Red, moist, granular tissue filling the wound
- **Epitelizacion:** celulas epiteliales migran desde los bordes para cubrir la herida | Epithelial cells migrate from edges to cover the wound
- **Contraccion:** miofibroblastos reducen el tamano de la herida | Myofibroblasts reduce wound size

### Fase 4: Remodelacion (semanas a anos) | Phase 4: Remodeling (weeks to years)
- Colageno tipo III es reemplazado por colageno tipo I (mas fuerte) | Type III collagen replaced by type I (stronger)
- Reorganizacion de fibras de colageno | Collagen fiber reorganization
- Regresion vascular | Vascular regression
- Fuerza tensil maxima: 80% del tejido original (nunca 100%) | Maximum tensile strength: 80% of original (never 100%)
- Puede durar 1-2 anos | May last 1-2 years

## Tipos de heridas cronicas | Types of Chronic Wounds

### Ulcera diabetica del pie | Diabetic Foot Ulcer
- Localizacion: puntos de presion del pie (metatarsos, talon) | Location: foot pressure points (metatarsals, heel)
- Causas: neuropatia + enfermedad vascular + inmunodeficiencia | Causes: neuropathy + vascular disease + immunodeficiency
- Riesgo de amputacion si no se trata | Amputation risk if untreated
- Manejo: control glucemico, descarga de presion, debridamiento, cuidado de heridas | Management: glucose control, offloading, debridement, wound care

### Ulcera venosa | Venous Ulcer
- Localizacion: maleolo medial (tobillo interno) | Location: medial malleolus (inner ankle)
- Causa: insuficiencia venosa cronica → hipertension venosa | Cause: chronic venous insufficiency → venous hypertension
- Bordes irregulares, exudado, dermatitis perilesional | Irregular borders, exudate, perilesional dermatitis
- Manejo: compresion (terapia de compresion multicapa) es la BASE | Management: compression (multilayer compression therapy) is the FOUNDATION

### Ulcera arterial | Arterial Ulcer
- Localizacion: dedos del pie, areas distales, puntos de presion | Location: toes, distal areas, pressure points
- Causa: enfermedad arterial periferica (isquemia) | Cause: peripheral arterial disease (ischemia)
- Aspecto: bordes definidos, base palida, dolorosa | Appearance: defined borders, pale base, painful
- NO APLICAR COMPRESION (empeora la isquemia) | DO NOT APPLY COMPRESSION (worsens ischemia)
- ITB (indice tobillo-brazo) <0.8: derivar a vascular | ABI <0.8: refer to vascular

### Lesion por presion (escara) | Pressure Injury (decubitus)
- Estadios I-IV + inclasificable + lesion de tejido profundo | Stages I-IV + unstageable + deep tissue injury
- Localizaciones: sacro, talones, isquion, trocanter | Locations: sacrum, heels, ischium, trochanter
- Prevencion: reposicionamiento cada 2 horas, superficies de redistribucion de presion | Prevention: repositioning every 2 hours, pressure redistribution surfaces

## Factores que retrasan la cicatrizacion | Factors Delaying Healing
- Diabetes (neuropatia, isquemia, inmunosupresion) | Diabetes (neuropathy, ischemia, immunosuppression)
- Infeccion | Infection
- Malnutricion (proteinas, vitamina C, zinc) | Malnutrition (protein, vitamin C, zinc)
- Inmunosupresion (corticosteroides, quimioterapia) | Immunosuppression (corticosteroids, chemotherapy)
- Fumar (vasoconstriccion, reduce oxigeno) | Smoking (vasoconstriction, reduces oxygen)
- Edad avanzada | Advanced age
- Enfermedad vascular | Vascular disease`,
      keyTerms: [
        { term: 'Tejido de granulacion | Granulation tissue', definition: 'Tejido rojo, humedo y granular que llena una herida; compuesto de nuevos vasos sanguineos y fibroblastos. | Red, moist, granular tissue filling a wound; composed of new blood vessels and fibroblasts.' },
        { term: 'Colageno tipo III | Type III collagen', definition: 'Colageno temporal producido durante la fase proliferativa; despues es reemplazado por tipo I mas fuerte. | Temporary collagen produced during proliferative phase; later replaced by stronger type I.' },
        { term: 'Angiogenesis', definition: 'Formacion de nuevos vasos sanguineos; esencial para llevar oxigeno y nutrientes a la herida. | Formation of new blood vessels; essential for bringing oxygen and nutrients to the wound.' },
        { term: 'Miofibroblastos | Myofibroblasts', definition: 'Celulas que contraen la herida, reduciendo su tamano durante la cicatrizacion. | Cells that contract the wound, reducing its size during healing.' },
        { term: 'ITB (Indice tobillo-brazo) | ABI (Ankle-Brachial Index)', definition: 'Relacion de presion arterial tobillo/brazo; <0.8 sugiere enfermedad arterial periferica. | Ankle/arm blood pressure ratio; <0.8 suggests peripheral arterial disease.' },
        { term: 'Terapia de compresion | Compression therapy', definition: 'Base del tratamiento de ulceras venosas; vendajes multicapa que reducen la hipertension venosa. | Foundation of venous ulcer treatment; multilayer bandages reducing venous hypertension.' },
      ],
      analogies: [
        'Las cuatro fases de cicatrizacion son como una construccion: primero aseguras el area (hemostasia), luego limpias los escombros (inflamacion), construyes la estructura (proliferacion) y finalmente das los acabados (remodelacion). | The four healing phases are like construction: first secure the area (hemostasis), then clean debris (inflammation), build the structure (proliferation), and finally add finishing touches (remodeling).',
        'La angiogenesis es como construir carreteras hacia una ciudad nueva: los vasos sanguineos llevan materiales y trabajadores (oxigeno y celulas) a la herida. | Angiogenesis is like building roads to a new city: blood vessels carry materials and workers (oxygen and cells) to the wound.',
        'Una ulcera venosa sin compresion es como intentar vaciar una banera con el grifo abierto: la hipertension venosa sigue llenando la herida de liquido. | A venous ulcer without compression is like trying to empty a bathtub with the faucet on: venous hypertension keeps filling the wound with fluid.',
      ],
      examples: [
        'Paciente diabetico con ulcera en la planta del pie que no sana en 2 meses; necesita descarga de presion, control glucemico y cuidado especializado. | Diabetic patient with sole ulcer not healing in 2 months; needs offloading, glucose control, and specialized care.',
        'Mujer mayor con ulcera en el tobillo interno con edema y pigmentacion marron — ulcera venosa, necesita compresion. | Elderly woman with inner ankle ulcer with edema and brown pigmentation — venous ulcer, needs compression.',
        'Paciente encamado con area roja en el sacro que no palidece al presionar — lesion por presion estadio I. | Bedridden patient with red area on sacrum that does not blanch on pressure — stage I pressure injury.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La cicatrizacion de heridas involucra senalizacion molecular compleja (PDGF, TGF-beta, VEGF, FGF). Las heridas cronicas se caracterizan por exceso de proteasas (MMPs), deficiencia de factores de crecimiento y biofilm bacteriano. El tratamiento basado en el concepto TIME (Tissue, Infection/Inflammation, Moisture, Edge) optimiza la cicatrizacion. La terapia de presion negativa (NPWT), los sustitutos de piel y los factores de crecimiento topicos son terapias avanzadas. | Wound healing involves complex molecular signaling (PDGF, TGF-beta, VEGF, FGF). Chronic wounds are characterized by excess proteases (MMPs), growth factor deficiency, and bacterial biofilm. Treatment based on the TIME concept (Tissue, Infection/Inflammation, Moisture, Edge) optimizes healing. Negative pressure wound therapy (NPWT), skin substitutes, and topical growth factors are advanced therapies.',
      explanation: `## Senalizacion molecular de la cicatrizacion | Molecular Signaling in Wound Healing

### Factores de crecimiento clave | Key Growth Factors

| Factor | Fuente | Funcion | Factor | Source | Function |
|--------|--------|---------|--------|--------|---------|
| PDGF | Plaquetas, macrofagos | Quimiotaxis de fibroblastos, proliferacion | PDGF | Platelets, macrophages | Fibroblast chemotaxis, proliferation |
| TGF-beta | Plaquetas, macrofagos | Sintesis de colageno, regulacion inmune | TGF-beta | Platelets, macrophages | Collagen synthesis, immune regulation |
| VEGF | Macrofagos, queratinocitos | Angiogenesis | VEGF | Macrophages, keratinocytes | Angiogenesis |
| FGF | Fibroblastos, macrofagos | Proliferacion, angiogenesis | FGF | Fibroblasts, macrophages | Proliferation, angiogenesis |
| EGF | Plaquetas, macrofagos | Epitelizacion, proliferacion | EGF | Platelets, macrophages | Epithelialization, proliferation |
| IGF-1 | Fibroblastos | Sintesis de colageno | IGF-1 | Fibroblasts | Collagen synthesis |

### Interaccion macrofago-fibroblasto | Macrophage-Fibroblast Interaction
- Macrofagos M1 (proinflamatorios): fase temprana, eliminacion de patogenos | M1 (pro-inflammatory): early phase, pathogen elimination
- Macrofagos M2 (antiinflamatorios): fase tardia, promueven reparacion | M2 (anti-inflammatory): late phase, promote repair
- Transicion M1→M2 es critica; falla en esta transicion → herida cronica | M1→M2 transition is critical; failure → chronic wound

## Fisiopatologia de heridas cronicas | Chronic Wound Pathophysiology

### Concepto TIME | TIME Concept

**T — Tissue (Tejido no viable) | T — Tissue (non-viable):**
- Debridamiento: mecanico, enzimatico, autolitico, quirurgico, biologico (larvas) | Debridement: mechanical, enzymatic, autolytic, surgical, biological (maggots)
- Eliminar tejido necrotico y biofilm | Remove necrotic tissue and biofilm

**I — Infection/Inflammation (Infeccion/Inflamacion) | I — Infection/Inflammation:**
- Biofilm bacteriano presente en 60-80% de heridas cronicas | Bacterial biofilm present in 60-80% of chronic wounds
- Colonizacion → colonizacion critica → infeccion → sepsis | Colonization → critical colonization → infection → sepsis
- Antimicrobianos topicos: plata, yodo, miel medica (Medihoney) | Topical antimicrobials: silver, iodine, medical honey (Medihoney)
- Antibioticos sistemicos solo si infeccion clinica evidente | Systemic antibiotics only if clinical infection evident

**M — Moisture (Balance de humedad) | M — Moisture balance:**
- Demasiado seca → muerte celular | Too dry → cell death
- Demasiado humeda → maceracion | Too wet → maceration
- Apositos adecuados mantienen humedad optima | Appropriate dressings maintain optimal moisture

**E — Edge (Bordes de la herida) | E — Edge (wound edges):**
- Bordes epitelio que no avanza → evaluar y corregir | Non-advancing epithelial edges → evaluate and correct
- Considerar biopsia si no progresa (descartar malignidad: ulcera de Marjolin) | Consider biopsy if not progressing (rule out malignancy: Marjolin ulcer)

## Terapias avanzadas | Advanced Therapies

### Terapia de presion negativa (NPWT/VAC) | Negative Pressure Wound Therapy
- Aplica presion subatmosferica continua o intermitente sobre la herida | Applies continuous or intermittent subatmospheric pressure
- Mecanismo: reduce edema, promueve granulacion, elimina exudado | Mechanism: reduces edema, promotes granulation, removes exudate
- Indicaciones: heridas agudas complejas, injertos, heridas cronicas estancadas | Indications: complex acute wounds, grafts, stalled chronic wounds
- Contraindicaciones: tejido necrotico no desbridado, malignidad, fistulas no exploradas | Contraindications: non-debrided necrotic tissue, malignancy, unexplored fistulae

### Apositos avanzados | Advanced Dressings

| Tipo | Funcion | Indicacion | Type | Function | Indication |
|------|---------|-----------|------|---------|------------|
| Hidrocoloides | Absorben, ambiente humedo | Ulceras con exudado leve | Hydrocolloids | Absorb, moist environment | Low-exudate ulcers |
| Alginatos | Alta absorcion | Exudado abundante | Alginates | High absorption | Heavy exudate |
| Espumas | Absorcion, proteccion | Exudado moderado | Foams | Absorption, protection | Moderate exudate |
| Plata | Antimicrobiano | Heridas infectadas/biofilm | Silver | Antimicrobial | Infected wounds/biofilm |
| Miel medica | Antimicrobiano, debridamiento | Heridas infectadas, biofilm | Medical honey | Antimicrobial, debridement | Infected wounds, biofilm |

### Factores de crecimiento topicos | Topical Growth Factors
- Becaplermina (PDGF recombinante): aprobado para ulceras diabeticas neuropaticas | Becaplermin (recombinant PDGF): approved for neuropathic diabetic ulcers
- Aplicacion diaria en herida desbridada | Daily application on debrided wound

### Sustitutos de piel | Skin Substitutes
- Dermicos (acelulares): Integra, AlloDerm | Dermal (acellular): Integra, AlloDerm
- Celulares: Apligraf (bicapa con fibroblastos y queratinocitos), Dermagraft | Cellular: Apligraf (bilayer with fibroblasts and keratinocytes), Dermagraft

## Manejo de ulceras por tipo | Ulcer Management by Type

### Ulcera diabetica | Diabetic Ulcer
- Clasificacion de Wagner: grados 0-5 | Wagner classification: grades 0-5
- Descarga de presion (total contact cast: estandar de oro) | Offloading (total contact cast: gold standard)
- Control glucemico (HbA1c <7%) | Glucose control (HbA1c <7%)
- Evaluacion vascular (ITB, angiografia si necesario) | Vascular assessment (ABI, angiography if needed)
- Debridamiento agresivo | Aggressive debridement
- Equipo multidisciplinario: podiatria, vascular, endocrino, heridas | Multidisciplinary team

### Ulcera venosa | Venous Ulcer
- Compresion (30-40 mmHg): PILAR del tratamiento | Compression (30-40 mmHg): PILLAR of treatment
- Descartar componente arterial (ITB >0.8 para compresion segura) | Rule out arterial component (ABI >0.8 for safe compression)
- Pentoxifilina: beneficio aditivo | Pentoxifylline: additive benefit
- Considerar ablacion venosa en casos refractarios | Consider venous ablation in refractory cases`,
      keyTerms: [
        { term: 'Concepto TIME | TIME concept', definition: 'Marco para evaluacion de heridas: Tissue, Infection/Inflammation, Moisture, Edge. | Framework for wound assessment: Tissue, Infection/Inflammation, Moisture, Edge.' },
        { term: 'Biofilm', definition: 'Comunidad bacteriana adherente protegida por matriz extracelular; presente en 60-80% de heridas cronicas y muy resistente a antibioticos. | Adherent bacterial community protected by extracellular matrix; present in 60-80% of chronic wounds and highly antibiotic-resistant.' },
        { term: 'NPWT/VAC', definition: 'Terapia de presion negativa para heridas; promueve granulacion, reduce edema y exudado. | Negative pressure wound therapy; promotes granulation, reduces edema and exudate.' },
        { term: 'Becaplermina | Becaplermin', definition: 'PDGF recombinante humano topico; aprobado para ulceras diabeticas neuropaticas. | Topical recombinant human PDGF; approved for neuropathic diabetic ulcers.' },
        { term: 'Transicion M1→M2 | M1→M2 transition', definition: 'Cambio critico de macrofagos inflamatorios a reparadores; su fallo causa heridas cronicas. | Critical shift from inflammatory to reparative macrophages; failure causes chronic wounds.' },
        { term: 'Ulcera de Marjolin | Marjolin ulcer', definition: 'Carcinoma espinocelular que se desarrolla en una herida cronica de larga evolucion; requiere biopsia. | Squamous cell carcinoma developing in a long-standing chronic wound; requires biopsy.' },
      ],
      clinicalNotes: 'La transicion M1→M2 de macrofagos es critica; su fallo explica por que las heridas cronicas estan "atrapadas" en inflamacion. El biofilm es la causa subyacente de la mayoria de las heridas cronicas; requiere debridamiento repetido. NPWT es herramienta versatil pero NO usar sobre tejido necrotico o malignidad. Siempre medir ITB antes de aplicar compresion (ITB <0.8 = contraindicacion relativa). Herida cronica que no mejora en 4 semanas de tratamiento optimo → biopsia para descartar malignidad (Marjolin). | M1→M2 macrophage transition is critical; failure explains why chronic wounds are "stuck" in inflammation. Biofilm is the underlying cause of most chronic wounds; requires repeated debridement. NPWT is versatile but DO NOT use on necrotic tissue or malignancy. Always measure ABI before applying compression (ABI <0.8 = relative contraindication). Chronic wound not improving in 4 weeks of optimal treatment → biopsy to rule out malignancy (Marjolin).',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de heridas integra biologia de metaloproteinas de matriz (MMPs), microambiente de la herida, terapia basada en oxigeno hiperbarico, ingenieria tisular y bioimplantes. Las MMPs elevadas y los inhibidores tisulares (TIMPs) desequilibrados caracterizan las heridas cronicas. La oxigenoterapia hiperbarica (HBO) es adjunta para heridas diabeticas refractarias. Los clasificacion de lesiones por presion utiliza el sistema NPUAP/EPUAP. La compresion neumatica y la ablacion venosa son opciones para ulceras venosas complejas. | Advanced wound management integrates matrix metalloproteinase (MMP) biology, wound microenvironment, hyperbaric oxygen therapy, tissue engineering, and bioimplants. Elevated MMPs and imbalanced tissue inhibitors (TIMPs) characterize chronic wounds. Hyperbaric oxygen therapy (HBO) is adjunctive for refractory diabetic wounds. Pressure injury classification uses the NPUAP/EPUAP system. Pneumatic compression and venous ablation are options for complex venous ulcers.',
      explanation: `## Biologia molecular de heridas cronicas | Chronic Wound Molecular Biology

### Metaloproteinas de matriz (MMPs) | Matrix Metalloproteinases (MMPs)
- MMPs (colagenasas, gelatinasas, elastasas) estan ELEVADAS en heridas cronicas | MMPs are ELEVATED in chronic wounds
- Degradan factores de crecimiento y matrix extracelular | Degrade growth factors and extracellular matrix
- TIMPs (inhibidores tisulares de MMPs) estan DISMINUIDOS | TIMPs are DECREASED
- Desequilibrio MMP/TIMP → destruccion neta de tejido | MMP/TIMP imbalance → net tissue destruction
- Estrategias terapeuticas: moduladores de proteasas, apositos de colageno que secuestran MMPs | Therapeutic strategies: protease modulators, collagen dressings that sequester MMPs

### Microambiente de la herida cronica | Chronic Wound Microenvironment
- pH elevado (alcalino vs acido en heridas agudas) | Elevated pH (alkaline vs acidic in acute wounds)
- Hipoxia tisular (bajo oxigeno) | Tissue hypoxia (low oxygen)
- Biofilm maduro (comunidad polimicrobiana) | Mature biofilm (polymicrobial community)
- Senescencia celular de fibroblastos | Fibroblast cellular senescence
- Especies reactivas de oxigeno (ROS) excesivas → dano oxidativo | Excessive reactive oxygen species (ROS) → oxidative damage

### Senescencia de fibroblastos | Fibroblast Senescence
- Fibroblastos de heridas cronicas muestran fenotipo senescente | Chronic wound fibroblasts show senescent phenotype
- Reducida capacidad proliferativa y migratoria | Reduced proliferative and migratory capacity
- Disminucion de respuesta a factores de crecimiento | Decreased growth factor response
- Implicacion: incluso con tratamiento optimo, las celulas residentes pueden ser disfuncionales | Even with optimal treatment, resident cells may be dysfunctional

## Oxigenoterapia hiperbarica (HBO) | Hyperbaric Oxygen Therapy (HBO)

**Mecanismo | Mechanism:**
- Aumenta oxigeno disuelto en plasma (~10x) | Increases dissolved plasma oxygen (~10x)
- Promueve angiogenesis | Promotes angiogenesis
- Mejora funcion leucocitaria | Improves leukocyte function
- Reduce edema | Reduces edema
- Estimula factores de crecimiento | Stimulates growth factors

**Indicaciones en heridas | Wound Indications:**
- Ulceras diabeticas Wagner grado III+ refractarias | Refractory Wagner grade III+ diabetic ulcers
- Compromiso de injerto/colgajo | Compromised graft/flap
- Fasciitis necrotizante (adjunto a cirugia) | Necrotizing fasciitis (adjunct to surgery)
- Osteomielitis cronica | Chronic osteomyelitis

**Protocolo:** 90-120 min a 2.0-2.4 ATA, 20-40 sesiones | Protocol: 90-120 min at 2.0-2.4 ATA, 20-40 sessions

## Clasificacion avanzada de lesiones por presion | Advanced Pressure Injury Classification

**NPUAP/EPUAP | NPUAP/EPUAP:**

| Estadio | Descripcion | Stage | Description |
|---------|-------------|-------|-------------|
| I | Eritema que no palidece en piel intacta | I | Non-blanchable erythema on intact skin |
| II | Perdida parcial de espesor (dermis expuesta) | II | Partial-thickness loss (exposed dermis) |
| III | Perdida total de espesor (grasa visible, fascia cubierta) | III | Full-thickness loss (visible fat, covered fascia) |
| IV | Perdida total con hueso, tendon, musculo expuesto | IV | Full-thickness with exposed bone, tendon, muscle |
| Inclasificable | Base cubierta por escara o esfacelo | Unstageable | Base covered by eschar or slough |
| Lesion tisular profunda | Area decolorada intacta; dano subyacente | Deep tissue injury | Discolored intact area; underlying damage |

## Ingenieria tisular y terapias celulares | Tissue Engineering and Cell Therapies

### Sustitutos de piel — Detalle | Skin Substitutes — Detail

**Acelulares | Acellular:**
- Integra: matriz de colageno bovino + GAG + lamina de silicona | Bovine collagen + GAG matrix + silicone layer
- AlloDerm: dermis humana descelularizada | Decellularized human dermis
- Proveen andamio para invasion celular del huesped | Provide scaffold for host cell invasion

**Celulares | Cellular:**
- Apligraf: fibroblastos neonatales + queratinocitos en colageno bovino | Neonatal fibroblasts + keratinocytes in bovine collagen
- Dermagraft: fibroblastos neonatales en malla bioabsorbible | Neonatal fibroblasts in bioabsorbable mesh
- TheraSkin: aloinjerto criopreservado con celulas viables | Cryopreserved allograft with viable cells

### Plasma rico en plaquetas (PRP) | Platelet-Rich Plasma (PRP)
- Concentrado de plaquetas autologo | Autologous platelet concentrate
- Libera factores de crecimiento: PDGF, TGF-beta, VEGF | Releases growth factors
- Evidencia moderada para ulceras diabeticas | Moderate evidence for diabetic ulcers

## Herida cronica en poblacion geriatrica | Chronic Wounds in Geriatric Population
- Piel senil: atrofia dermica, reduccion de colageno, elastosis | Senile skin: dermal atrophy, reduced collagen, elastosis
- Cicatrizacion mas lenta (factor de edad) | Slower healing (age factor)
- Polifarmacia: corticosteroides, anticoagulantes afectan cicatrizacion | Polypharmacy: corticosteroids, anticoagulants affect healing
- Estado nutricional frecuentemente comprometido | Nutritional status often compromised
- Manejo integral: nutricion, movilizacion, superficies de alivio, cuidado de piel perilesional | Comprehensive management: nutrition, mobilization, support surfaces, perilesional skin care`,
      keyTerms: [
        { term: 'MMP (Metaloproteinas de matriz)', definition: 'Enzimas que degradan matriz extracelular y factores de crecimiento; elevadas en heridas cronicas, impiden cicatrizacion. | Enzymes degrading extracellular matrix and growth factors; elevated in chronic wounds, preventing healing.' },
        { term: 'TIMP (Inhibidores tisulares de MMP)', definition: 'Reguladores naturales de MMPs; disminuidos en heridas cronicas, causando destruccion neta. | Natural MMP regulators; decreased in chronic wounds, causing net destruction.' },
        { term: 'HBO (Oxigenoterapia hiperbarica)', definition: 'Terapia que aumenta oxigeno disuelto en plasma (~10x), promoviendo angiogenesis y cicatrizacion en heridas refractarias. | Therapy increasing dissolved plasma oxygen (~10x), promoting angiogenesis and healing in refractory wounds.' },
        { term: 'Senescencia de fibroblastos | Fibroblast senescence', definition: 'Estado en que los fibroblastos de heridas cronicas pierden capacidad proliferativa y respuesta a factores de crecimiento. | State where chronic wound fibroblasts lose proliferative capacity and growth factor response.' },
        { term: 'PRP (Plasma rico en plaquetas)', definition: 'Concentrado autologo de plaquetas que libera multiples factores de crecimiento para estimular cicatrizacion. | Autologous platelet concentrate releasing multiple growth factors to stimulate healing.' },
        { term: 'Ulcera de Marjolin | Marjolin ulcer', definition: 'Carcinoma espinocelular que surge en herida cronica de larga evolucion; biopsia obligatoria en heridas que no mejoran. | SCC arising in long-standing chronic wound; mandatory biopsy in non-improving wounds.' },
      ],
      clinicalNotes: 'El desequilibrio MMP/TIMP es central en la fisiopatologia de heridas cronicas; los apositos de colageno pueden secuestrar MMPs excesivas. HBO tiene evidencia para ulceras diabeticas Wagner III+ refractarias pero requiere sesiones multiples. Los sustitutos de piel son opciones cuando la cicatrizacion convencional falla. PRP tiene evidencia moderada pero creciente. Toda herida cronica que no responde a 4 semanas de tratamiento optimo debe biopsiarse para descartar malignidad (Marjolin). La senescencia de fibroblastos explica por que algunas heridas no responden a factores de crecimiento. | MMP/TIMP imbalance is central in chronic wound pathophysiology; collagen dressings can sequester excess MMPs. HBO has evidence for refractory Wagner III+ diabetic ulcers but requires multiple sessions. Skin substitutes are options when conventional healing fails. PRP has moderate but growing evidence. Any chronic wound not responding to 4 weeks of optimal treatment must be biopsied to rule out malignancy (Marjolin). Fibroblast senescence explains why some wounds don\'t respond to growth factors.',
    },

    5: {
      level: 5,
      summary:
        'La investigacion en cicatrizacion de heridas se centra en biomateriales inteligentes, terapia genica, bioimpresion 3D de piel, exosomas derivados de celulas madre mesenquimales, y modulacion epigenetica. La cicatrizacion patologica (queloides, cicatrices hipertroficas) involucra desregulacion de TGF-beta y exceso de colageno. Los biomarcadores moleculares y la inteligencia artificial estan transformando la evaluacion y pronostico de heridas. La medicina regenerativa busca regeneracion verdadera vs cicatrizacion (reparacion). | Wound healing research focuses on smart biomaterials, gene therapy, 3D skin bioprinting, mesenchymal stem cell-derived exosomes, and epigenetic modulation. Pathologic scarring (keloids, hypertrophic scars) involves TGF-beta dysregulation and collagen excess. Molecular biomarkers and artificial intelligence are transforming wound assessment and prognosis. Regenerative medicine seeks true regeneration vs scarring (repair).',
      explanation: `## Cicatrizacion patologica | Pathologic Scarring

### Cicatriz hipertrofica vs queloide | Hypertrophic Scar vs Keloid

| Caracteristica | Hipertrofica | Queloide | Feature | Hypertrophic | Keloid |
|---------------|-------------|---------|---------|-------------|--------|
| Extension | Dentro de bordes originales | Se extiende mas alla de la herida | Extent | Within original borders | Extends beyond wound |
| Regresion | Puede regresar espontaneamente | No regresa | Regression | May spontaneously regress | Does not regress |
| Genetica | Sin predisposicion etnica clara | Mas comun en piel oscura | Genetics | No clear ethnic predisposition | More common in dark skin |
| Recurrencia post-excision | Baja | Alta (50-80%) | Recurrence post-excision | Low | High (50-80%) |
| TGF-beta | Moderadamente elevado | Marcadamente elevado | TGF-beta | Moderately elevated | Markedly elevated |

### Fisiopatologia de queloides | Keloid Pathophysiology
- Exceso de deposicion de colageno tipo I y III | Excess type I and III collagen deposition
- TGF-beta1 y TGF-beta2 elevados; TGF-beta3 (antifibrotico) disminuido | TGF-beta1/2 elevated; TGF-beta3 (antifibrotic) decreased
- Fibroblastos queloideos: hiperproliferativos, resistentes a apoptosis | Keloid fibroblasts: hyperproliferative, apoptosis-resistant
- Hipoxia tisular → factor HIF-1alpha → profibrotico | Tissue hypoxia → HIF-1alpha → profibrotic
- Predisposicion genetica: loci en 2q23, 7p11, 15q21 | Genetic predisposition: loci at 2q23, 7p11, 15q21

### Tratamiento de queloides | Keloid Treatment
- Triamcinolona intralesional (primera linea): 10-40 mg/mL | Intralesional triamcinolone (first-line)
- Laminas de silicona / gel de silicona | Silicone sheets / gel
- Terapia de presion | Pressure therapy
- 5-FU intralesional | Intralesional 5-FU
- Crioterapia intralesional | Intralesional cryotherapy
- Excision + radiacion adjunta (prevenir recurrencia) | Excision + adjunct radiation
- Laser: PDL (pulsed dye laser), fraccionado | Laser: PDL, fractional

## Terapias regenerativas emergentes | Emerging Regenerative Therapies

### Exosomas de celulas madre mesenquimales (MSC) | MSC-Derived Exosomes
- Vesiculas extracelulares con factores de crecimiento, microARN, proteinas | Extracellular vesicles with growth factors, microRNA, proteins
- Promueven proliferacion de fibroblastos y angiogenesis | Promote fibroblast proliferation and angiogenesis
- Modulan inflamacion (transicion M1→M2) | Modulate inflammation (M1→M2 transition)
- Ventaja sobre terapia celular: sin riesgo de rechazo o tumorigenesis | Advantage over cell therapy: no rejection or tumorigenesis risk
- Ensayos clinicos en curso para heridas diabeticas | Clinical trials ongoing for diabetic wounds

### Bioimpresion 3D de piel | 3D Skin Bioprinting
- Deposicion capa por capa de celulas y biomateriales | Layer-by-layer deposition of cells and biomaterials
- Potencial para generar piel completa con apendices | Potential to generate complete skin with appendages
- Bioink: celulas vivas en hidrogeles de colageno/fibrina | Bioink: living cells in collagen/fibrin hydrogels
- In situ bioprinting: impresion directa sobre la herida en el paciente | In situ bioprinting: direct printing onto patient's wound
- Desafios: vascularizacion, complejidad de apendices, escalabilidad | Challenges: vascularization, appendage complexity, scalability

### Terapia genica | Gene Therapy
- Vectores que codifican PDGF, VEGF, KGF directamente en la herida | Vectors encoding growth factors directly in the wound
- Silenciamiento de genes profibroticos (TGF-beta1) para prevenir queloides | Silencing profibrotic genes (TGF-beta1) for keloid prevention
- CRISPR/Cas9: edicion genetica precisa de fibroblastos | Precise fibroblast gene editing
- Fase experimental | Experimental phase

### Modulacion epigenetica | Epigenetic Modulation
- Metilacion de DNA y modificacion de histonas alteradas en heridas cronicas | Altered DNA methylation and histone modifications in chronic wounds
- MicroARN reguladores de cicatrizacion | Wound healing regulatory microRNAs
  - miR-21: profibrotico (elevado en queloides) | Pro-fibrotic (elevated in keloids)
  - miR-29: antifibrotico (disminuido en queloides) | Anti-fibrotic (decreased in keloids)
  - miR-132: proangiogenico | Pro-angiogenic
- Potencial terapeutico: antimiRs, miRNA mimics | Therapeutic potential: antimiRs, miRNA mimics

## Biomateriales inteligentes | Smart Biomaterials

### Apositos con sensores | Sensor-Equipped Dressings
- pH, temperatura, humedad, oxigeno en tiempo real | Real-time pH, temperature, moisture, oxygen
- Deteccion temprana de infeccion (cambio de pH y temperatura) | Early infection detection (pH and temperature change)
- Liberacion controlada de farmacos en respuesta a estimulos | Controlled drug release in response to stimuli

### Hidrogeles inyectables | Injectable Hydrogels
- Liberacion sostenida de factores de crecimiento | Sustained growth factor release
- Andamios termosensibles que gelifican a temperatura corporal | Thermosensitive scaffolds gelling at body temperature
- Cargados con celulas madre o exosomas | Loaded with stem cells or exosomes

## Inteligencia artificial en heridas | AI in Wound Care
- Medicion automatizada de area y profundidad por fotografia | Automated area and depth measurement by photography
- Clasificacion automatica de tejido (granulacion, esfacelo, necrosis) | Automatic tissue classification (granulation, slough, necrosis)
- Prediccion de resultado terapeutico basado en algoritmos ML | Treatment outcome prediction based on ML algorithms
- Telemedicina y monitoreo remoto de heridas | Telemedicine and remote wound monitoring

## Regeneracion vs cicatrizacion | Regeneration vs Scarring
- Fetos (primer y segundo trimestre): cicatrizan SIN cicatriz (regeneracion verdadera) | Fetuses (first and second trimester): heal WITHOUT scar (true regeneration)
- Diferencias clave: menos inflamacion, perfil TGF-beta3 dominante, acido hialuronico alto | Key differences: less inflammation, dominant TGF-beta3 profile, high hyaluronic acid
- Axolotl: regeneracion completa de extremidades (modelo de estudio) | Axolotl: complete limb regeneration (study model)
- Meta de medicina regenerativa: recrear condiciones fetales de cicatrizacion | Regenerative medicine goal: recreate fetal healing conditions`,
      keyTerms: [
        { term: 'Queloide | Keloid', definition: 'Cicatriz patologica que se extiende mas alla de los bordes originales de la herida; TGF-beta elevado, resistente a tratamiento. | Pathologic scar extending beyond original wound borders; elevated TGF-beta, treatment-resistant.' },
        { term: 'Exosomas MSC | MSC exosomes', definition: 'Vesiculas extracelulares de celulas madre mesenquimales con potencial regenerativo; sin riesgo de rechazo. | Mesenchymal stem cell extracellular vesicles with regenerative potential; no rejection risk.' },
        { term: 'Bioimpresion 3D | 3D bioprinting', definition: 'Tecnologia que deposita celulas vivas y biomateriales capa por capa para crear tejido cutaneo funcional. | Technology depositing living cells and biomaterials layer-by-layer to create functional skin tissue.' },
        { term: 'miR-21 / miR-29', definition: 'MicroARN reguladores de fibrosis: miR-21 es profibrotico (elevado en queloides), miR-29 es antifibrotico (disminuido). | Fibrosis-regulating microRNAs: miR-21 is pro-fibrotic (elevated in keloids), miR-29 is anti-fibrotic (decreased).' },
        { term: 'Cicatrizacion fetal | Fetal scarring', definition: 'Los fetos cicatrizan sin cicatriz (regeneracion verdadera) gracias a un perfil antiinflamatorio dominado por TGF-beta3. | Fetuses heal without scar (true regeneration) thanks to an anti-inflammatory profile dominated by TGF-beta3.' },
        { term: 'In situ bioprinting', definition: 'Bioimpresion directa de celulas y biomateriales sobre la herida del paciente en tiempo real. | Direct bioprinting of cells and biomaterials onto the patient\'s wound in real time.' },
      ],
      clinicalNotes: 'Los queloides son mas comunes en piel oscura y tienen alta recurrencia post-excision (50-80%); la combinacion excision + radiacion ofrece los mejores resultados. Los exosomas de MSC representan la nueva frontera en terapia de heridas sin los riesgos de terapia celular directa. La bioimpresion 3D in situ es prometedora pero aun experimental. Los microARN (miR-21, miR-29) son blancos terapeuticos emergentes para fibrosis. La IA esta revolucionando la medicion y el monitoreo de heridas. La cicatrizacion fetal sin cicatriz (dominancia TGF-beta3, bajo inflamatorio) es el modelo para medicina regenerativa. Las laminas de silicona son el estandar de prevencion de cicatrices patologicas. | Keloids are more common in dark skin with high post-excision recurrence (50-80%); excision + radiation combination offers best results. MSC exosomes represent the new frontier in wound therapy without direct cell therapy risks. In situ 3D bioprinting is promising but still experimental. MicroRNAs (miR-21, miR-29) are emerging therapeutic targets for fibrosis. AI is revolutionizing wound measurement and monitoring. Fetal scarless healing (TGF-beta3 dominance, low inflammatory) is the model for regenerative medicine. Silicone sheets are the standard for pathologic scar prevention.',
    },
  },

  media: [],

  citations: [
    {
      id: 'wound-healing-gurtner',
      type: 'article',
      title: 'Wound repair and regeneration',
      authors: ['Gurtner, G.C.', 'Werner, S.', 'Barrandon, Y.', 'Longaker, M.T.'],
      source: 'Nature',
    },
    {
      id: 'fitzpatrick-wound-healing',
      type: 'textbook',
      title: 'Fitzpatrick\'s Dermatology, 9th Edition — Wound Healing',
      authors: ['Kang, S.', 'Amagai, M.'],
      source: 'McGraw-Hill Education',
    },
    {
      id: 'npuap-guidelines',
      type: 'guideline',
      title: 'Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline',
      authors: ['NPUAP/EPUAP/PPPIA'],
      source: 'NPUAP/EPUAP/PPPIA Guidelines',
    },
    {
      id: 'diabetic-foot-iwgdf',
      type: 'guideline',
      title: 'IWGDF Guidelines on the Prevention and Management of Diabetic Foot Disease',
      authors: ['International Working Group on the Diabetic Foot'],
      source: 'IWGDF Guidelines',
    },
    {
      id: 'keloid-treatment-review',
      type: 'article',
      title: 'Keloids and Hypertrophic Scars: Current and Emerging Treatment Strategies',
      authors: ['Lee, H.J.', 'Jang, Y.J.'],
      source: 'Annals of Plastic Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'derm-infecciones-cutaneas-skin-infections', targetType: 'condition', relationship: 'related', label: 'Infecciones cutaneas | Skin infections' },
    { targetId: 'derm-cancer-piel-skin-cancer', targetType: 'condition', relationship: 'see-also', label: 'Cancer de piel (Marjolin) | Skin cancer (Marjolin)' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'parent', label: 'Anatomia de la piel | Skin anatomy' },
    { targetId: 'derm-dermatitis-eczema', targetType: 'condition', relationship: 'related', label: 'Dermatitis y eccema | Dermatitis and eczema' },
  ],

  tags: {
    systems: ['integumentary', 'immune', 'cardiovascular'],
    topics: ['dermatology', 'wound-care', 'surgery', 'regenerative-medicine'],
    keywords: [
      'cicatrizacion', 'wound healing',
      'heridas cronicas', 'chronic wounds',
      'ulcera diabetica', 'diabetic ulcer',
      'ulcera venosa', 'venous ulcer',
      'lesion por presion', 'pressure injury',
      'queloides', 'keloids', 'cicatrices',
      'NPWT', 'terapia de presion negativa',
      'bioimpresion', 'bioprinting',
      'TIME', 'debridamiento',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default cicatrizacionHeridasWoundHealing;
