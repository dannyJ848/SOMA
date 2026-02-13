/**
 * Anticoagulantes / Anticoagulants - Comprehensive Educational Content
 *
 * Covers warfarin, heparin (UFH/LMWH), direct oral anticoagulants (DOACs),
 * and antiplatelet agents. Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const anticoagulantesAnticoagulants: EducationalContent = {
  id: 'pharmacology-anticoagulantes-anticoagulants',
  type: 'topic',
  name: 'Anticoagulantes | Anticoagulants',
  nameEs: 'Anticoagulantes',
  alternateNames: [
    'Medicamentos para adelgazar la sangre | Blood thinners',
    'Terapia antitrombotica | Antithrombotic therapy',
    'Antiagregantes plaquetarios | Antiplatelet agents',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los anticoagulantes son medicamentos que ayudan a prevenir coagulos de sangre peligrosos. Incluyen warfarina (Coumadin), heparina, y medicamentos mas nuevos como rivaroxaban (Xarelto) y apixaban (Eliquis). | Anticoagulants are medications that help prevent dangerous blood clots. They include warfarin (Coumadin), heparin, and newer medications like rivaroxaban (Xarelto) and apixaban (Eliquis).',
      explanation: `## Que son los anticoagulantes? | What are anticoagulants?

Los anticoagulantes son medicamentos que evitan que la sangre forme coagulos peligrosos. Los coagulos de sangre pueden causar ataques al corazon, derrames cerebrales, y problemas en las piernas y los pulmones. | Anticoagulants are medications that prevent blood from forming dangerous clots. Blood clots can cause heart attacks, strokes, and problems in the legs and lungs.

### Tipos de medicamentos | Types of medications

**1. Warfarina (Coumadin)**
- Pastilla que se toma una vez al dia | Pill taken once daily
- Necesita examenes de sangre regulares (INR) para verificar la dosis | Needs regular blood tests (INR) to check the dose
- Muchos alimentos y medicamentos afectan como funciona | Many foods and medications affect how it works
- Las verduras verdes (vitamina K) pueden reducir su efecto | Green vegetables (vitamin K) can reduce its effect

**2. Heparina**
- Se da por inyeccion en el hospital o inyecciones en el abdomen en casa | Given by injection in the hospital or belly injections at home
- Las inyecciones en casa se llaman "heparina de bajo peso molecular" (como enoxaparina/Lovenox) | Home injections are called "low molecular weight heparin" (like enoxaparin/Lovenox)
- Funciona rapidamente | Works quickly

**3. Anticoagulantes orales directos (ACOD) | Direct Oral Anticoagulants (DOACs)**
- Rivaroxaban (Xarelto), apixaban (Eliquis), dabigatran (Pradaxa), edoxaban (Savaysa)
- No necesitan examenes de sangre regulares | Do not need regular blood tests
- Menos interacciones con alimentos | Fewer food interactions
- Son mas faciles de usar que la warfarina | Easier to use than warfarin

**4. Antiplaquetarios | Antiplatelets**
- Aspirina y clopidogrel (Plavix)
- Evitan que las plaquetas (celulas de la sangre) se peguen juntas | Prevent platelets (blood cells) from sticking together
- Se usan para prevenir ataques al corazon y despues de stents cardiacos | Used to prevent heart attacks and after heart stents

### Reglas de seguridad | Safety rules

- **Sangrado:** El riesgo principal es sangrar mas facilmente | **Bleeding:** The main risk is bleeding more easily
- Informe a TODOS sus doctores y dentistas que toma anticoagulantes | Tell ALL your doctors and dentists you take anticoagulants
- Busque atencion medica si: sangrado que no para, sangre en la orina/heces, moretones grandes, dolor de cabeza severo | Seek medical attention if: bleeding that won't stop, blood in urine/stool, large bruises, severe headache
- **Use un brazalete de alerta medica** | **Wear a medical alert bracelet**
- No tome aspirina u otros AINEs sin preguntar a su doctor | Do not take aspirin or other NSAIDs without asking your doctor`,
      keyTerms: [
        {
          term: 'anticoagulante | anticoagulant',
          definition:
            'Medicamento que evita que la sangre forme coagulos peligrosos | Medication that prevents blood from forming dangerous clots',
        },
        {
          term: 'coagulo de sangre | blood clot',
          definition:
            'Masa de sangre espesa que puede bloquear los vasos sanguineos | Thick mass of blood that can block blood vessels',
        },
        {
          term: 'INR',
          definition:
            'Examen de sangre que mide que tan rapido coagula su sangre cuando toma warfarina | Blood test that measures how fast your blood clots when taking warfarin',
        },
        {
          term: 'plaquetas | platelets',
          definition:
            'Celulas pequenas en la sangre que ayudan a formar coagulos para detener el sangrado | Small blood cells that help form clots to stop bleeding',
        },
      ],
      analogies: [
        'Los anticoagulantes son como poner un guardia que evita que se formen "tapones" (coagulos) en las tuberias (vasos sanguineos). | Anticoagulants are like putting a guard to prevent "plugs" (clots) from forming in the pipes (blood vessels).',
        'La warfarina necesita examenes de sangre regulares como un carro necesita revisiones del aceite - para asegurarse de que todo funciona bien. | Warfarin needs regular blood tests like a car needs oil checks - to make sure everything is working well.',
        'Los antiplaquetarios hacen que las plaquetas sean "resbalosas" para que no se peguen juntas y formen un tapon. | Antiplatelets make platelets "slippery" so they don\'t stick together and form a plug.',
      ],
      examples: [
        'Su doctor le receta apixaban (Eliquis) porque tiene fibrilacion auricular. Tomelo dos veces al dia con o sin comida. | Your doctor prescribes apixaban (Eliquis) because you have atrial fibrillation. Take it twice daily with or without food.',
        'Despues de ponerle un stent en el corazon, necesitara tomar aspirina y clopidogrel (Plavix) juntos por al menos un ano. | After getting a heart stent, you will need to take aspirin and clopidogrel (Plavix) together for at least one year.',
      ],
      patientCounselingPoints: [
        'Lleve siempre una tarjeta que diga que toma anticoagulantes | Always carry a card saying you take anticoagulants',
        'Si toma warfarina, mantenga una dieta consistente en vitamina K | If taking warfarin, maintain a consistent vitamin K diet',
        'Nunca deje de tomar su anticoagulante sin hablar con su doctor primero | Never stop taking your anticoagulant without talking to your doctor first',
      ],
    },

    2: {
      level: 2,
      summary:
        'La terapia antitrombotica incluye anticoagulantes (warfarina, heparinas, DOACs) que actuan sobre la cascada de coagulacion, y antiplaquetarios (aspirina, inhibidores P2Y12) que previenen la agregacion plaquetaria, con indicaciones distintas en trombosis venosa vs. arterial y perfiles de seguridad que requieren monitoreo de sangrado. | Antithrombotic therapy includes anticoagulants (warfarin, heparins, DOACs) acting on the coagulation cascade, and antiplatelets (aspirin, P2Y12 inhibitors) preventing platelet aggregation, with distinct indications in venous vs. arterial thrombosis and safety profiles requiring bleeding monitoring.',
      explanation: `## La cascada de coagulacion simplificada | Simplified Coagulation Cascade

La sangre forma coagulos a traves de una serie de reacciones en cadena (cascada): | Blood forms clots through a chain of reactions (cascade):

**Via intrinseca:** XII → XI → IX → (con factor VIII) → **X** | Intrinsic pathway
**Via extrinseca:** Factor tisular + VII → **X** | Extrinsic pathway
**Via comun:** X → trombina (II) → **fibrina** → coagulo | Common pathway

Cada anticoagulante bloquea diferentes pasos de esta cascada. | Each anticoagulant blocks different steps in this cascade.

### Warfarina | Warfarin

**Mecanismo | Mechanism:**
- Inhibe la vitamina K, necesaria para producir factores II, VII, IX, X | Inhibits vitamin K, needed for factors II, VII, IX, X
- Efecto completo tarda 3-5 dias | Full effect takes 3-5 days

**Monitoreo con INR | INR Monitoring:**

| INR | Significado |
|-----|------------|
| 1.0 | Normal (sin anticoagulacion) |
| 2.0-3.0 | Meta para FA, TVP/EP |
| 2.5-3.5 | Meta para valvula mecanica (mitral) |
| > 4.0 | Riesgo elevado de sangrado |

**Interacciones importantes | Important Interactions:**
- Vitamina K (verduras verdes): reduce efecto | Vitamin K: reduces effect
- Antibioticos (metronidazol, TMP-SMX, fluconazol): aumentan efecto | Antibiotics: increase effect
- Amiodarona: aumenta efecto significativamente | Amiodarone: significantly increases effect
- Alcohol excesivo: aumenta efecto | Excessive alcohol: increases effect

### Heparinas | Heparins

| Tipo | Administracion | Monitoreo | Ejemplo |
|------|---------------|-----------|---------|
| HNF (no fraccionada) | IV o SC | PTT activado (aPTT) | Heparina sodica |
| HBPM | SC (1-2 veces/dia) | Anti-Xa (casos especiales) | Enoxaparina (Lovenox) |

**Complicaciones | Complications:**
- Sangrado | Bleeding
- Trombocitopenia inducida por heparina (TIH/HIT) | Heparin-induced thrombocytopenia
- Osteoporosis (uso prolongado) | Osteoporosis (prolonged use)
- Antidoto HNF: protamina | UFH antidote: protamine

### Anticoagulantes orales directos (DOACs) | Direct Oral Anticoagulants

| DOAC | Diana | Dosis habitual | Excrecion |
|------|-------|---------------|-----------|
| Dabigatran | Trombina (IIa) | 150 mg BID | 80% renal |
| Rivaroxaban | Factor Xa | 20 mg diario (con comida) | 33% renal |
| Apixaban | Factor Xa | 5 mg BID | 27% renal |
| Edoxaban | Factor Xa | 60 mg diario | 50% renal |

**Ventajas sobre warfarina | Advantages over warfarin:**
- No requieren monitoreo de INR rutinario | No routine INR monitoring
- Menos interacciones alimentarias | Fewer food interactions
- Inicio de accion rapido (horas, no dias) | Rapid onset (hours, not days)
- Menor riesgo de hemorragia intracraneal | Lower intracranial hemorrhage risk

**Agentes de reversion | Reversal Agents:**
- Dabigatran: idarucizumab (Praxbind) | Specific reversal
- Anti-Xa (rivaroxaban, apixaban, edoxaban): andexanet alfa (Andexxa) | Factor Xa inhibitor reversal
- Alternativa universal: concentrado de complejo protrombinico (CCP/PCC) | Universal alternative

### Antiplaquetarios | Antiplatelets

| Farmaco | Mecanismo | Uso principal |
|---------|-----------|---------------|
| Aspirina | Inhibidor de COX-1 (irreversible) | Prevencion CV primaria/secundaria |
| Clopidogrel (Plavix) | Inhibidor P2Y12 (irreversible) | SCA, post-stent |
| Prasugrel (Effient) | Inhibidor P2Y12 (mas potente) | SCA con intervencion |
| Ticagrelor (Brilinta) | Inhibidor P2Y12 (reversible) | SCA |

**Terapia antiplaquetaria dual (DAPT):**
- Aspirina + inhibidor P2Y12 | Aspirin + P2Y12 inhibitor
- Post-stent coronario: 6-12 meses (metalico desnudo: 1 mes) | Post-coronary stent: 6-12 months
- Sindrome coronario agudo: 12 meses | Acute coronary syndrome: 12 months

### Indicaciones principales | Main Indications

| Indicacion | Tratamiento preferido |
|------------|----------------------|
| Fibrilacion auricular (no valvular) | DOAC (preferido) o warfarina |
| Trombosis venosa profunda | DOAC o warfarina + heparina inicial |
| Embolia pulmonar | DOAC o warfarina + heparina inicial |
| Valvula mecanica | Warfarina (DOACs CONTRAINDICADOS) |
| Sindrome coronario agudo | DAPT (aspirina + inhibidor P2Y12) |
| Post-stent | DAPT por 6-12 meses |`,
      keyTerms: [
        {
          term: 'cascada de coagulacion | coagulation cascade',
          definition:
            'Serie de reacciones enzimaticas en cadena que resultan en la formacion de un coagulo de fibrina | Series of chain enzymatic reactions resulting in fibrin clot formation',
        },
        {
          term: 'INR (razon normalizada internacional) | INR (international normalized ratio)',
          definition:
            'Medida estandarizada del tiempo de coagulacion; meta de 2.0-3.0 para la mayoria de indicaciones de warfarina | Standardized measure of clotting time; target 2.0-3.0 for most warfarin indications',
        },
        {
          term: 'DOAC (anticoagulante oral directo) | DOAC (direct oral anticoagulant)',
          definition:
            'Anticoagulantes que inhiben directamente trombina (dabigatran) o factor Xa (rivaroxaban, apixaban, edoxaban) | Anticoagulants directly inhibiting thrombin or factor Xa',
        },
        {
          term: 'HIT (trombocitopenia inducida por heparina) | HIT (heparin-induced thrombocytopenia)',
          definition:
            'Complicacion inmune de la heparina donde las plaquetas bajan y, paradojicamente, aumenta el riesgo de coagulos | Immune complication of heparin where platelets drop and, paradoxically, clotting risk increases',
        },
        {
          term: 'DAPT (terapia antiplaquetaria dual) | DAPT (dual antiplatelet therapy)',
          definition:
            'Combinacion de aspirina + inhibidor P2Y12; estandar despues de sindrome coronario agudo y colocacion de stent | Combination of aspirin + P2Y12 inhibitor; standard after ACS and stenting',
        },
      ],
      analogies: [
        'La cascada de coagulacion es como una fila de dominos - los anticoagulantes quitan piezas especificas para que la reaccion no se complete. | The coagulation cascade is like a line of dominoes - anticoagulants remove specific pieces so the reaction doesn\'t complete.',
        'La warfarina es como reducir la produccion en la fabrica de coagulos (necesita dias). Los DOACs son como bloquear directamente a los trabajadores (efecto inmediato). | Warfarin is like reducing production at the clot factory (takes days). DOACs directly block the workers (immediate effect).',
      ],
    },

    3: {
      level: 3,
      summary:
        'La terapia antitrombotica se fundamenta en la comprension de la hemostasia (primaria y secundaria), con anticoagulantes que inhiben factores de coagulacion especificos (warfarina via vitamina K, heparinas via antitrombina, DOACs via inhibicion directa de IIa/Xa) y antiplaquetarios que bloquean vias de activacion plaquetaria (COX-1, P2Y12, GPIIb/IIIa), con seleccion guiada por indicacion clinica, riesgo de sangrado (HAS-BLED), y evidencia de ensayos clinicos. | Antithrombotic therapy is based on understanding hemostasis (primary and secondary), with anticoagulants inhibiting specific coagulation factors and antiplatelets blocking platelet activation pathways, with selection guided by clinical indication, bleeding risk, and clinical trial evidence.',
      explanation: `## Hemostasia: revision detallada | Hemostasis: Detailed Review

### Hemostasia primaria (plaquetas) | Primary Hemostasis

1. **Adhesion:** Plaquetas se adhieren al colageno subendotelial via GPIb/IX/V + factor von Willebrand (FvW) | Platelets adhere to subendothelial collagen via GPIb/IX/V + vWF
2. **Activacion:** ADP, tromboxano A2 (TXA2), trombina activan plaquetas | ADP, TXA2, thrombin activate platelets
3. **Agregacion:** GPIIb/IIIa activada une fibrinogeno entre plaquetas | Activated GPIIb/IIIa binds fibrinogen between platelets
4. **Tapon plaquetario formado** | Platelet plug formed

### Hemostasia secundaria (cascada de coagulacion) | Secondary Hemostasis

**Via intrinseca (medida por aPTT):**
- XII → XIIa → XI → XIa → IX → IXa + VIIIa → **Xasa**

**Via extrinseca (medida por PT/INR):**
- Factor tisular (TF) + VII → VIIa + TF → **Xasa**

**Via comun:**
- Xa + Va → complejo protrombinasa → trombina (IIa) → fibrina → coagulo estable (con factor XIIIa) | Xa + Va → prothrombinase complex → thrombin → fibrin → stable clot

### Anticoagulantes naturales | Natural Anticoagulants
- **Antitrombina (AT):** Inhibe trombina, IXa, Xa (potenciada 1000x por heparina) | Inhibits thrombin, IXa, Xa (enhanced 1000x by heparin)
- **Proteina C/S:** Inactivan Va y VIIIa | Inactivate Va and VIIIa
- **TFPI:** Inhibe complejo TF-VIIa | Inhibits TF-VIIa complex

## Farmacologia detallada | Detailed Pharmacology

### Warfarina: mecanismo molecular | Warfarin: Molecular Mechanism

- Inhibe VKORC1 (vitamina K epoxido reductasa) | Inhibits VKORC1
- Sin vitamina K reducida, factores II, VII, IX, X no pueden ser gamma-carboxilados → inactivos | Without reduced vitamin K, factors cannot be gamma-carboxylated → inactive
- Proteina C y S tambien dependen de vitamina K → efecto protrombotico inicial paradojico | Protein C and S also vitamin K-dependent → paradoxical initial prothrombotic effect
- Por eso se requiere "puente" con heparina al inicio | Why heparin "bridge" is required at initiation

**Farmacocinetica | Pharmacokinetics:**
- Absorcion: > 90% biodisponibilidad oral | > 90% oral bioavailability
- Union a proteinas: 99% (albumina) | 99% protein bound
- Metabolismo: CYP2C9 (S-warfarina, mas potente) y CYP3A4 (R-warfarina) | Metabolism: CYP2C9 and CYP3A4
- Vida media: 36-42 horas | Half-life: 36-42 hours
- Efecto completo: 3-5 dias (vida media del factor II) | Full effect: 3-5 days

**Farmacogenetica | Pharmacogenetics:**
- CYP2C9 *2, *3: metabolizadores lentos (menor dosis requerida) | Slow metabolizers (lower dose needed)
- VKORC1 -1639G>A: mayor sensibilidad (menor dosis) | Higher sensitivity (lower dose)
- Algoritmos de dosificacion farmacogenetica disponibles (warfarindosing.org) | Pharmacogenetic dosing algorithms available

### Heparinas: mecanismo y diferencias | Heparins: Mechanism and Differences

**HNF (heparina no fraccionada):**
- Se une a antitrombina → cambio conformacional → potenciacion de inhibicion de trombina (IIa) Y Xa | Binds antithrombin → conformational change → potentiates thrombin AND Xa inhibition
- Requiere cadena de ≥ 18 sacaaridos para inhibir trombina (formacion de complejo ternario) | Requires ≥ 18 saccharide chain for thrombin inhibition
- Monitoreo: aPTT (meta 1.5-2.5x control) o anti-Xa (0.3-0.7 U/mL) | Monitoring: aPTT or anti-Xa
- Antidoto: protamina (neutralizacion completa) | Antidote: protamine (complete neutralization)

**HBPM (heparina de bajo peso molecular):**
- Cadenas mas cortas → predominantemente anti-Xa (relacion anti-Xa:anti-IIa = 3:1) | Shorter chains → predominantly anti-Xa
- Farmacocinetica predecible → dosis fija por peso, sin monitoreo rutinario | Predictable PK → weight-based dosing, no routine monitoring
- Monitoreo con anti-Xa solo en: obesidad extrema, ERC, embarazo | Anti-Xa monitoring only in: extreme obesity, CKD, pregnancy
- Protamina: neutralizacion parcial (~60% de actividad anti-Xa) | Protamine: partial neutralization

### DOACs: farmacologia comparativa | DOACs: Comparative Pharmacology

| Parametro | Dabigatran | Rivaroxaban | Apixaban | Edoxaban |
|-----------|-----------|-------------|----------|----------|
| Diana | Trombina (IIa) | Factor Xa | Factor Xa | Factor Xa |
| Biodisponibilidad | 6-7% | 66-100%* | 50% | 62% |
| Tmax | 1-2h | 2-4h | 3-4h | 1-2h |
| Vida media | 12-17h | 5-13h | 12h | 10-14h |
| Excrecion renal | 80% | 33% | 27% | 50% |
| Con comida | No afecta | *Con comida (20mg) | No afecta | No afecta |
| Reversion especifica | Idarucizumab | Andexanet alfa | Andexanet alfa | Andexanet alfa |

### Trombocitopenia inducida por heparina (TIH) | Heparin-Induced Thrombocytopenia (HIT)

**Fisiopatologia | Pathophysiology:**
- Heparina + factor plaquetario 4 (PF4) → complejo antigenico | Heparin + PF4 → antigenic complex
- Anticuerpos IgG contra complejo H-PF4 | IgG antibodies against H-PF4 complex
- Activacion plaquetaria masiva → trombosis PARADOJICA + trombocitopenia | Massive platelet activation → PARADOXICAL thrombosis + thrombocytopenia

**Diagnostico | Diagnosis:**
- Score 4T para probabilidad pre-test | 4T score for pre-test probability
- Inmunoensayo anti-PF4 (alta sensibilidad) → SRA (alta especificidad) | Anti-PF4 immunoassay → SRA
- Plaquetas bajan 50% del basal, tipicamente dia 5-10 | Platelets drop 50% from baseline, typically day 5-10

**Tratamiento | Treatment:**
- Suspender TODA heparina (incluyendo lavados de lineas) | Stop ALL heparin
- Anticoagulante alternativo: argatroban (insuficiencia hepatica: reducir dosis), bivalirudina, fondaparinux | Alternative: argatroban, bivalirudin, fondaparinux
- NO transfundir plaquetas (empeora trombosis) | Do NOT transfuse platelets

## Evaluacion de riesgo | Risk Assessment

### CHA₂DS₂-VASc (indicacion de anticoagulacion en FA) | CHA₂DS₂-VASc (AF anticoagulation indication)

| Factor | Puntos |
|--------|--------|
| Insuficiencia cardiaca (C) | 1 |
| Hipertension (H) | 1 |
| Edad ≥ 75 (A₂) | 2 |
| Diabetes (D) | 1 |
| ACV/AIT previo (S₂) | 2 |
| Enfermedad vascular (V) | 1 |
| Edad 65-74 (A) | 1 |
| Sexo femenino (Sc) | 1 |

Anticoagulacion recomendada si ≥ 2 en hombres, ≥ 3 en mujeres | Anticoagulation recommended if ≥ 2 men, ≥ 3 women

### HAS-BLED (riesgo de sangrado) | HAS-BLED (bleeding risk)

H: Hipertension, A: Funcion renal/hepatica Anormal, S: Stroke, B: Sangrado previo, L: INR Labil, E: Edad > 65, D: Drogas/alcohol | Each 1 point; ≥ 3 = high bleeding risk (modify risk factors, not withhold anticoagulation)`,
      keyTerms: [
        {
          term: 'VKORC1 (vitamina K epoxido reductasa) | VKORC1',
          definition:
            'Enzima diana de la warfarina; necesaria para reciclar vitamina K y activar factores de coagulacion II, VII, IX, X | Warfarin target enzyme; needed to recycle vitamin K and activate coagulation factors',
        },
        {
          term: 'antitrombina | antithrombin',
          definition:
            'Inhibidor natural de la coagulacion; su actividad es potenciada 1000x por heparina; inhibe trombina, Xa, IXa | Natural coagulation inhibitor; activity enhanced 1000x by heparin',
        },
        {
          term: 'TIH (trombocitopenia inducida por heparina) | HIT',
          definition:
            'Complicacion inmunomediada grave de la heparina: anticuerpos anti-PF4 causan activacion plaquetaria, trombocitopenia, y trombosis paradojica | Severe immune complication: anti-PF4 antibodies cause platelet activation, thrombocytopenia, and paradoxical thrombosis',
        },
        {
          term: 'CHA₂DS₂-VASc',
          definition:
            'Score para evaluar riesgo de ACV en fibrilacion auricular y decidir necesidad de anticoagulacion; ≥ 2 en hombres indica anticoagulacion | Score to evaluate stroke risk in AF and determine need for anticoagulation',
        },
        {
          term: 'idarucizumab (Praxbind) | idarucizumab',
          definition:
            'Anticuerpo monoclonal que revierte especificamente el efecto del dabigatran; administracion IV de 5g, efecto en minutos | Monoclonal antibody specifically reversing dabigatran; 5g IV, effect in minutes',
        },
        {
          term: 'andexanet alfa (Andexxa) | andexanet alfa',
          definition:
            'Factor Xa recombinante inactivado que actua como senuelo para revertir inhibidores de Xa (rivaroxaban, apixaban) | Inactivated recombinant factor Xa acting as decoy to reverse Xa inhibitors',
        },
      ],
      clinicalNotes:
        'En fibrilacion auricular no valvular, los DOACs son preferidos sobre warfarina (menor riesgo de sangrado intracraneal, sin monitoreo). Apixaban tiene el mejor perfil de seguridad general (ARISTOTLE). Warfarina sigue siendo necesaria en valvulas mecanicas (DOACs contraindicados - RE-ALIGN trial). En TIH, suspenda TODA heparina inmediatamente e inicie anticoagulante alternativo. Nunca transfunda plaquetas en TIH. Use CHA₂DS₂-VASc para indicacion y HAS-BLED para identificar factores de riesgo modificables, no para negar anticoagulacion. | In non-valvular AF, DOACs are preferred over warfarin. Warfarin remains necessary for mechanical valves. In HIT, stop ALL heparin immediately. Use CHA₂DS₂-VASc for indication and HAS-BLED to identify modifiable risk factors, not to deny anticoagulation.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de la anticoagulacion requiere comprension de la hemostasia basada en celulas, farmacocinetica/farmacodinamica individualizada de anticoagulantes, manejo perioperatorio, reversion de urgencia, anticoagulacion en poblaciones especiales (ERC, cancer, obesidad, embarazo), y decision clinica en escenarios complejos como la triple terapia antitrombotica. | Advanced anticoagulation management requires understanding cell-based hemostasis, individualized PK/PD, perioperative management, urgent reversal, anticoagulation in special populations, and clinical decision-making in complex scenarios like triple antithrombotic therapy.',
      explanation: `## Modelo de hemostasia basado en celulas | Cell-Based Hemostasis Model

### Mas alla de la cascada clasica | Beyond the Classic Cascade

El modelo basado en celulas organiza la hemostasia en tres fases superpuestas: | The cell-based model organizes hemostasis into three overlapping phases:

**1. Fase de iniciacion (celulas portadoras de factor tisular):**
- TF + VIIa → pequenas cantidades de Xa y trombina | Small amounts of Xa and thrombin
- Trombina insuficiente para fibrina, pero suficiente para activar plaquetas | Insufficient thrombin for fibrin, but enough to activate platelets

**2. Fase de amplificacion (superficie plaquetaria):**
- Plaquetas activadas → superficie para ensamblaje de complejos | Activated platelet surface for complex assembly
- Trombina activa V, VIII, XI en la superficie plaquetaria | Thrombin activates V, VIII, XI on platelet surface

**3. Fase de propagacion:**
- Complejos tenasa (IXa/VIIIa) y protrombinasa (Xa/Va) en superficie plaquetaria | Tenase and prothrombinase complexes on platelet surface
- Generacion explosiva de trombina ("thrombin burst") | Explosive thrombin generation
- Conversion masiva de fibrinogeno a fibrina → coagulo estable | Massive fibrinogen to fibrin conversion

Este modelo explica por que los DOACs (anti-Xa, anti-IIa) son efectivos: bloquean la fase de propagacion directamente. | This model explains why DOACs are effective: they directly block the propagation phase.

## Farmacologia avanzada | Advanced Pharmacology

### DOACs en poblaciones especiales | DOACs in Special Populations

**Enfermedad renal cronica | Chronic Kidney Disease:**

| DOAC | CrCl ≥ 50 | CrCl 30-49 | CrCl 15-29 | CrCl < 15 |
|------|-----------|-----------|-----------|-----------|
| Apixaban | 5 mg BID | 5 mg BID | 5 mg BID* | Considerar* |
| Rivaroxaban | 20 mg | 15 mg | Precaucion | Evitar |
| Dabigatran | 150 mg BID | 150 mg BID | Evitar | Evitar |
| Edoxaban | 60 mg | 30 mg | Precaucion | Evitar |

*Apixaban: unico DOAC con datos en dialisis (estudio RENAL-AF); 5 mg BID reducido a 2.5 mg BID si ≥ 2 de: edad ≥ 80, peso ≤ 60 kg, creatinina ≥ 1.5 | *Only DOAC with dialysis data

**Cancer (tromboembolismo asociado a cancer) | Cancer-Associated VTE:**
- DOACs (rivaroxaban, edoxaban, apixaban) superiores a HBPM en ensayos recientes | DOACs superior to LMWH in recent trials
- HOKUSAI-VTE Cancer, SELECT-D, Caravaggio | Key trials
- Precaucion: mayor sangrado GI con DOACs en cancer GI/genitourinario | Caution: higher GI bleeding with DOACs in GI/GU cancer
- Apixaban: menor riesgo de sangrado en cancer (Caravaggio) | Lowest bleeding risk in cancer

**Obesidad | Obesity:**
- ISTH: DOACs aceptables con IMC ≤ 40 kg/m² o peso ≤ 120 kg | Acceptable with BMI ≤ 40 or weight ≤ 120 kg
- Datos emergentes sugieren eficacia en obesidad morbida | Emerging data suggest efficacy in morbid obesity
- Monitoreo con niveles anti-Xa o DTT si preocupacion | Monitor with anti-Xa or DTT if concerned

### Manejo perioperatorio | Perioperative Management

**Warfarina:**
- Suspender 5 dias antes de cirugia | Stop 5 days before surgery
- Bridging con HBPM solo si alto riesgo trombotico (BRIDGE trial: bridging NO beneficioso en FA de riesgo moderado) | Bridging only if high thrombotic risk
- Reiniciar 12-24h post-procedimiento si hemostasia adecuada | Restart 12-24h post-procedure if adequate hemostasis

**DOACs:**
- Suspender 24-48h antes (dependiendo del DOAC, funcion renal, y riesgo de sangrado del procedimiento) | Stop 24-48h before
- Procedimiento de bajo riesgo de sangrado: omitir 1 dosis | Low bleeding risk: skip 1 dose
- Procedimiento de alto riesgo: omitir 2-3 dosis | High bleeding risk: skip 2-3 doses
- NO necesitan bridging | Do NOT need bridging

### Reversion de urgencia | Urgent Reversal

| Anticoagulante | Agente de reversion | Dosis | Notas |
|---------------|---------------------|-------|-------|
| Warfarina | Vitamina K IV + CCP 4-factor | VitK 10 mg IV + CCP segun INR | CCP: efecto inmediato; VitK: efecto en 6-24h |
| HNF | Protamina | 1 mg por 100 U de heparina (ultima dosis) | Reversion completa |
| HBPM | Protamina | 1 mg por 1 mg enoxaparina | Reversion parcial (~60%) |
| Dabigatran | Idarucizumab | 5 g IV (2 dosis de 2.5 g) | Reversion completa en 15 min |
| Anti-Xa DOAC | Andexanet alfa | Bolo + infusion de 2h | Costo elevado; alternativa: CCP |

## Escenarios clinicos complejos | Complex Clinical Scenarios

### Triple terapia antitrombotica | Triple Antithrombotic Therapy

Paciente con FA + stent coronario: necesita anticoagulante + DAPT | Patient with AF + stent: needs anticoagulant + DAPT

**Estrategia actual (basada en WOEST, PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS):**
- Triple terapia (AC + aspirina + P2Y12) por el menor tiempo posible (1 semana a 1 mes) | Triple therapy for shortest time possible
- Luego doble terapia: AC + P2Y12 (preferiblemente clopidogrel) por 6-12 meses | Then dual: AC + P2Y12 for 6-12 months
- Luego AC solo de por vida | Then AC alone lifelong
- AUGUSTUS: Apixaban + P2Y12 (sin aspirina) fue la estrategia mas segura | Apixaban + P2Y12 (no aspirin) was the safest strategy

### Trombosis asociada al sindrome antifosfolipido (SAF) | Antiphospholipid Syndrome Thrombosis

- Warfarina sigue siendo el estandar (INR 2-3, o 3-4 en SAF triple-positivo) | Warfarin remains standard
- DOACs inferiores en SAF triple-positivo (TRAPS trial: mayor riesgo de trombosis arterial) | DOACs inferior in triple-positive APS
- DOACs pueden considerarse en SAF de bajo riesgo (un solo anticuerpo, venoso) | DOACs may be considered in low-risk APS

### Trombosis venosa cerebral (TVC) | Cerebral Venous Thrombosis

- Heparina inicialmente (incluso con hemorragia intracraneal asociada) | Heparin initially (even with associated intracranial hemorrhage)
- Transicion a warfarina o DOAC (ACTION-CVT trial: DOACs no-inferiores) | Transition to warfarin or DOAC
- Duracion: 3-12 meses segun factores de riesgo | Duration: 3-12 months based on risk factors`,
      keyTerms: [
        {
          term: 'modelo de hemostasia basado en celulas | cell-based hemostasis model',
          definition:
            'Marco conceptual que organiza la coagulacion en tres fases (iniciacion, amplificacion, propagacion) en superficies celulares, reemplazando el modelo clasico de cascada | Framework organizing coagulation into three phases on cell surfaces, replacing the classic cascade model',
        },
        {
          term: 'thrombin burst (generacion explosiva de trombina)',
          definition:
            'Fase de propagacion donde complejos tenasa y protrombinasa en la superficie plaquetaria generan cantidades masivas de trombina | Propagation phase where tenase and prothrombinase complexes on platelet surface generate massive thrombin amounts',
        },
        {
          term: 'bridging (terapia puente)',
          definition:
            'Uso de heparina/HBPM durante la suspension perioperatoria de warfarina; BRIDGE trial demostro que no es beneficioso en FA de riesgo moderado | Use of heparin during perioperative warfarin suspension; BRIDGE trial showed not beneficial in moderate-risk AF',
        },
        {
          term: 'CCP 4-factor (concentrado de complejo protrombinico) | 4-factor PCC',
          definition:
            'Contiene factores II, VII, IX, X concentrados; revierte warfarina inmediatamente; tambien usado como alternativa universal para reversion de DOACs | Contains concentrated factors II, VII, IX, X; immediately reverses warfarin',
        },
        {
          term: 'AUGUSTUS trial',
          definition:
            'Ensayo que demostro que apixaban + P2Y12 (sin aspirina) es la estrategia mas segura en pacientes con FA que requieren terapia antiplaquetaria por SCA/stent | Trial showing apixaban + P2Y12 (without aspirin) is safest strategy in AF patients needing antiplatelet therapy',
        },
        {
          term: 'sindrome antifosfolipido (SAF) | antiphospholipid syndrome (APS)',
          definition:
            'Enfermedad autoinmune protrombotica donde los DOACs son inferiores a warfarina en pacientes triple-positivos (TRAPS trial) | Autoimmune prothrombotic disease where DOACs are inferior to warfarin in triple-positive patients',
        },
      ],
      clinicalNotes:
        'El manejo perioperatorio de anticoagulantes es una situacion clinica frecuente. Para warfarina, el BRIDGE trial cambio la practica: ya no se hace bridging rutinario en FA. Los DOACs son mas simples: suspender 24-48h, no bridging. En triple terapia (FA + stent), minimice la duracion de triple a 1 semana-1 mes y use la estrategia AUGUSTUS (apixaban + clopidogrel sin aspirina). Warfarina sigue siendo necesaria en valvulas mecanicas y SAF triple-positivo. En cancer-VTE, apixaban es el DOAC preferido por su menor tasa de sangrado GI. | Perioperative management is common. BRIDGE trial changed practice for warfarin. DOACs are simpler. In triple therapy, use AUGUSTUS strategy. Warfarin remains necessary for mechanical valves and triple-positive APS.',
    },

    5: {
      level: 5,
      summary:
        'La prescripcion antitrombotica basada en evidencia integra el modelo celular de hemostasia, farmacogenetica de anticoagulantes (CYP2C9, VKORC1 para warfarina; P-gp, CYP3A4 para DOACs), ensayos clinicos pivotales (RE-LY, ROCKET AF, ARISTOTLE, ENGAGE AF), terapias emergentes (factor XIa como objetivo, DOAC + anti-XIa, reversal agents universales), y optimizacion en escenarios clinicos complejos mediante medicina de precision. | Evidence-based antithrombotic prescribing integrates the cell-based hemostasis model, anticoagulant pharmacogenetics, pivotal trials, emerging therapies (factor XIa as target, novel reversal agents), and optimization in complex clinical scenarios through precision medicine.',
      explanation: `## Farmacogenetica de anticoagulantes | Anticoagulant Pharmacogenetics

### Warfarina: dosificacion de precision | Warfarin: Precision Dosing

**Variantes geneticas clave | Key Genetic Variants:**

| Gen | Variante | Efecto en dosis | Frecuencia |
|-----|---------|-----------------|------------|
| CYP2C9 | *2 (R144C) | Reduccion 17% | 8-13% (europeos) |
| CYP2C9 | *3 (I359L) | Reduccion 37% | 6-10% (europeos) |
| VKORC1 | -1639G>A | Reduccion 25-30% | 37% (europeos), 89% (asiaticos) |
| CYP4F2 | V433M | Aumento 8% | 30% (europeos) |

- Algoritmos farmacogeneticos (IWPC, GAGE) integran genotipo + clinica para predecir dosis | Pharmacogenetic algorithms integrate genotype + clinical data
- GIFT trial: dosificacion farmacogenetica redujo INR > 4 y sangrado en cirugia ortopedica | GIFT trial: pharmacogenetic dosing reduced supratherapeutic INR
- COAG trial: beneficio inconsistente en poblaciones diversas | COAG trial: inconsistent benefit in diverse populations
- CPIC y DPWG guidelines recomiendan genotipado cuando es factible | CPIC and DPWG guidelines recommend genotyping when feasible

### DOACs: interacciones farmacocineticas de precision | DOACs: Precision PK Interactions

**P-glicoproteina (P-gp) y CYP3A4:**
- Todos los DOACs son sustratos de P-gp | All DOACs are P-gp substrates
- Rivaroxaban y apixaban tambien metabolizados por CYP3A4 | Also CYP3A4 metabolized

| Interaccion | Efecto | Manejo clinico |
|-------------|--------|----------------|
| Inhibidores P-gp + CYP3A4 fuertes (ketoconazol, ritonavir) | Aumento de niveles de DOAC | Contraindicado con rivaroxaban/apixaban; precaucion con dabigatran |
| Inductores P-gp + CYP3A4 (rifampicina, carbamazepina) | Reduccion significativa de niveles | Evitar con todos los DOACs |
| Amiodarona, verapamilo, dronedarona | Aumento moderado | Ajustar dosis (dabigatran 110 mg BID con verapamilo) |

## Ensayos clinicos pivotales | Pivotal Clinical Trials

### DOACs vs. warfarina en fibrilacion auricular | DOACs vs. Warfarin in AF

| Estudio | DOAC | n | Stroke/embolia vs. W | Sangrado mayor vs. W | Mortalidad | HIC vs. W |
|---------|------|---|---------------------|---------------------|------------|-----------|
| RE-LY | Dabigatran 150 | 18,113 | Superior (-35%) | Similar | NS | -60% |
| ROCKET AF | Rivaroxaban | 14,264 | No-inferior | Similar | NS | -33% |
| ARISTOTLE | Apixaban | 18,201 | Superior (-21%) | Superior (-31%) | Superior (-11%) | -58% |
| ENGAGE AF | Edoxaban 60 | 21,105 | No-inferior | Superior (-20%) | NS | -53% |

**Conclusiones clave | Key Conclusions:**
- Todos los DOACs: reduccion consistente de HIC (~50% menos) | All DOACs: consistent ICH reduction
- Apixaban: mejor perfil general (eficacia + seguridad) | Best overall profile
- Dabigatran 150 mg: mas efectivo contra stroke pero mas sangrado GI | Most effective against stroke but more GI bleeding
- Edoxaban: mejor evidencia en dosis reducida (30 mg) para poblaciones fragiles | Best evidence for reduced dose in frail populations

## Terapias emergentes y futuras | Emerging and Future Therapies

### Factor XIa como objetivo terapeutico | Factor XIa as Therapeutic Target

**Racional | Rationale:**
- Factor XI contribuye a trombosis patologica pero es menos importante para hemostasia fisiologica | Factor XI contributes to pathological thrombosis but is less important for physiological hemostasis
- Deficiencia de factor XI (hemofilia C): riesgo tromboembolico reducido, sangrado quirurgico leve | Factor XI deficiency: reduced thromboembolic risk, mild surgical bleeding
- Objetivo: anticoagulacion sin aumento significativo de sangrado | Goal: anticoagulation without significant bleeding increase

**Agentes en desarrollo | Agents in Development:**

| Agente | Tipo | Fase | Estudio clave |
|--------|------|------|---------------|
| Abelacimab | Anticuerpo anti-FXI | III | ANDES-AF (enrollando) |
| Asundexian | Inhibidor oral FXIa | III | OCEANIC-AF (suspendido por falta de eficacia vs. apixaban) |
| Milvexian | Inhibidor oral FXIa | III | LIBREXIA-AF (enrollando) |
| Fesomersen (IONIS-FXI-LRx) | ASO anti-FXI | II | Resultados prometedores en ortopedia |

- OCEANIC-AF (asundexian): descontinuado por ineficacia vs. apixaban → cuestion sobre si la inhibicion de FXIa sola es suficiente en FA | Discontinued for inefficacy vs. apixaban
- ANDES-AF (abelacimab): anticuerpo con mayor grado de inhibicion de FXI; resultados pendientes | Higher degree of FXI inhibition; results pending
- Mejor perspectiva: prevencion de trombosis en dispositivos medicos, post-operatorio | Best perspective: device thrombosis prevention, post-operative

### Agentes de reversion universales en desarrollo | Universal Reversal Agents in Development

- **Ciraparantag (PER977/arazyme):** Molecula pequena que revierte DOACs, heparina, y HBPM | Small molecule reversing DOACs, heparin, and LMWH
  - Mecanismo: union directa al anticoagulante mediante puentes de hidrogeno | Direct anticoagulant binding
  - Fase III en curso | Phase III ongoing
  - Ventaja: agente universal vs. reversion especifica | Universal agent vs. specific reversal

### Anticoagulacion guiada por biomarcadores y IA | Biomarker and AI-Guided Anticoagulation

- Niveles de DOAC en tiempo real (point-of-care) para decisiones de urgencia | Real-time DOAC levels for emergency decisions
- Modelos de aprendizaje automatico para prediccion de sangrado y trombosis | Machine learning models for bleeding and thrombosis prediction
- Algoritmos de IA para dosificacion de warfarina (superando algoritmos farmacogeneticos) | AI algorithms for warfarin dosing
- Integracion con datos genomicos, clinicos, y de monitoreo ambulatorio | Integration with genomic, clinical, and ambulatory monitoring data

## Controversias y debates actuales | Current Controversies and Debates

### Duracion de anticoagulacion en TEV | VTE Anticoagulation Duration

- TEV provocado: 3 meses | Provoked VTE: 3 months
- TEV no provocado: debate sobre duracion indefinida | Unprovoked VTE: debate on indefinite duration
- Biomarcadores de recurrencia: D-dimero residual (PROLONG), trombosis residual, score HERDOO2 | Recurrence biomarkers
- Dosis reducida para extension: EINSTEIN CHOICE (rivaroxaban 10 mg), AMPLIFY-EXT (apixaban 2.5 mg) | Reduced dose for extension

### DOACs en valvulas mecanicas | DOACs in Mechanical Valves
- RE-ALIGN: dabigatran INFERIOR a warfarina (mas trombosis y sangrado) → DOACs contraindicados | DOACs contraindicated
- Investigacion en nuevas protesis valvulares "DOAC-compatibles" | Research in new "DOAC-compatible" prosthetic valves
- Valvulas bioprotesicas: DOACs aceptables (RIVER trial: rivaroxaban no inferior en bioprotesis mitral) | Bioprosthetic valves: DOACs acceptable

### Terapia guiada por genotipo vs. fenotipo | Genotype vs. Phenotype-Guided Therapy
- Tendencia hacia monitoreo de niveles de DOAC (anti-Xa especifico, DTT) en situaciones clinicas especificas | Trend toward DOAC level monitoring in specific situations
- Aplicabilidad limitada de farmacogenetica para DOACs (vs. utilidad establecida en warfarina) | Limited pharmacogenetic applicability for DOACs
- El futuro: integracion de multiples datos para prescripcion personalizada | Future: multi-data integration for personalized prescribing`,
      keyTerms: [
        {
          term: 'factor XIa como diana terapeutica | factor XIa as therapeutic target',
          definition:
            'Estrategia emergente para anticoagulacion con minimo sangrado, basada en la observacion de que FXI es mas importante en trombosis patologica que en hemostasia fisiologica; resultados mixtos en ensayos (OCEANIC-AF negativo, ANDES-AF pendiente) | Emerging anticoagulation strategy with minimal bleeding; mixed trial results',
        },
        {
          term: 'ciraparantag (PER977) | ciraparantag',
          definition:
            'Agente de reversion universal en desarrollo que se une directamente a DOACs y heparinas mediante puentes de hidrogeno; potencial para reemplazar multiples agentes de reversion especificos | Universal reversal agent binding directly to DOACs and heparins; potential to replace multiple specific agents',
        },
        {
          term: 'farmacogenetica de warfarina | warfarin pharmacogenetics',
          definition:
            'Variantes en CYP2C9 (*2, *3) y VKORC1 (-1639G>A) que afectan metabolismo y sensibilidad; explican ~50% de variabilidad en dosis; algoritmos CPIC/DPWG disponibles | CYP2C9 and VKORC1 variants affecting metabolism and sensitivity; explain ~50% of dose variability',
        },
        {
          term: 'ARISTOTLE trial',
          definition:
            'Ensayo pivotal que demostro superioridad de apixaban sobre warfarina en eficacia (stroke), seguridad (sangrado), y mortalidad en FA; base para la preferencia clinica por apixaban | Pivotal trial showing apixaban superiority over warfarin in efficacy, safety, and mortality in AF',
        },
        {
          term: 'modelo celular de hemostasia | cell-based hemostasis model',
          definition:
            'Modelo contemporaneo que reemplaza la cascada clasica intrinseca/extrinseca; organiza la coagulacion en fases de iniciacion, amplificacion, y propagacion en superficies celulares | Contemporary model replacing classic cascade; organizes coagulation into initiation, amplification, and propagation phases on cell surfaces',
        },
        {
          term: 'P-glicoproteina (P-gp) | P-glycoprotein',
          definition:
            'Transportador de eflujo intestinal y renal que afecta la absorcion y eliminacion de todos los DOACs; sus inhibidores e inductores causan interacciones clinicamente significativas | Intestinal and renal efflux transporter affecting all DOAC absorption and elimination; its inhibitors and inducers cause clinically significant interactions',
        },
      ],
      clinicalNotes:
        'La anticoagulacion se encuentra en un punto de inflexion con la investigacion en inhibidores de FXIa. Aunque OCEANIC-AF fue negativo, ANDES-AF con abelacimab (mayor grado de inhibicion) podria cambiar el panorama. Por ahora, apixaban sigue siendo el DOAC preferido en FA por su perfil de eficacia/seguridad (ARISTOTLE). La farmacogenetica de warfarina tiene utilidad establecida pero implementacion limitada; para DOACs, el monitoreo de niveles (no farmacogenetica) es la herramienta de precision actual. En la practica, priorice DOACs sobre warfarina excepto en valvulas mecanicas y SAF triple-positivo. Use CCP 4-factor como alternativa universal de reversion cuando los agentes especificos no estan disponibles. La duracion de anticoagulacion en TEV no provocado debe individualizarse usando herramientas predictivas (D-dimero, HERDOO2) y dosis reducida para extension (apixaban 2.5 BID). | Anticoagulation is at an inflection point with FXIa inhibitor research. Apixaban remains preferred DOAC in AF. Warfarin pharmacogenetics has established utility. Prioritize DOACs over warfarin except in mechanical valves and triple-positive APS. VTE duration should be individualized.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aristotle-trial',
      type: 'journal',
      title: 'Apixaban versus Warfarin in Patients with Atrial Fibrillation (ARISTOTLE)',
      authors: ['Granger CB', 'Alexander JH', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1107039',
    },
    {
      id: 'chest-antithrombotic-2024',
      type: 'guideline',
      title: 'CHEST Guideline on Antithrombotic Therapy for VTE Disease',
      authors: ['Stevens SM', 'Woller SC', 'et al.'],
      source: 'CHEST',
    },
    {
      id: 'augustus-trial',
      type: 'journal',
      title: 'Antithrombotic Therapy after Acute Coronary Syndrome or PCI in Atrial Fibrillation (AUGUSTUS)',
      authors: ['Lopes RD', 'Heizer G', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'hoffman-hemostasis',
      type: 'textbook',
      title: 'Hematology: Basic Principles and Practice',
      authors: ['Hoffman R', 'Benz EJ', 'et al.'],
      source: 'Elsevier',
      chapter: 'Overview of Hemostasis and Thrombosis',
    },
    {
      id: 'goodman-gilman-coagulation',
      type: 'textbook',
      title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
      source: 'McGraw-Hill Education',
      chapter: 'Blood Coagulation and Anticoagulant, Fibrinolytic, and Antiplatelet Drugs',
    },
  ],

  crossReferences: [
    {
      targetId: 'pharmacology-antihipertensivos-antihypertensives',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Antihipertensivos | Antihypertensives',
    },
    {
      targetId: 'condition-atrial-fibrillation',
      targetType: 'condition',
      relationship: 'related',
      label: 'Fibrilacion auricular | Atrial Fibrillation',
    },
    {
      targetId: 'condition-deep-vein-thrombosis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trombosis venosa profunda | Deep Vein Thrombosis',
    },
    {
      targetId: 'condition-pulmonary-embolism',
      targetType: 'condition',
      relationship: 'related',
      label: 'Embolia pulmonar | Pulmonary Embolism',
    },
    {
      targetId: 'condition-heart-failure',
      targetType: 'condition',
      relationship: 'related',
      label: 'Insuficiencia cardiaca | Heart Failure',
    },
    {
      targetId: 'pharmacology-analgesicos-analgesics',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Analgesicos (interacciones con AINEs) | Analgesics (NSAID interactions)',
    },
  ],

  tags: {
    systems: ['hematology', 'cardiovascular', 'pharmacology'],
    topics: ['pharmacology', 'hematology', 'cardiology', 'anticoagulation'],
    keywords: [
      'anticoagulantes',
      'warfarina',
      'heparina',
      'DOACs',
      'apixaban',
      'rivaroxaban',
      'dabigatran',
      'antiplaquearios',
      'fibrilacion auricular',
      'trombosis',
      'hemostasia',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine', 'hematology'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anticoagulantesAnticoagulants;
