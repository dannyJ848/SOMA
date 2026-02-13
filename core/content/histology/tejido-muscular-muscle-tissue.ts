/**
 * Tejido Muscular | Muscle Tissue - Comprehensive Histology Content
 *
 * Covers skeletal, smooth, and cardiac muscle histology, ultrastructure, and pathology.
 * Spanish-first bilingual content for the SOMA medical education platform.
 */

import { EducationalContent } from '../types';

export const tejidoMuscularContent: EducationalContent = {
  id: 'histology-tejido-muscular',
  type: 'topic',
  name: 'Tejido Muscular | Muscle Tissue',
  nameEs: 'Tejido Muscular',
  alternateNames: ['Músculo', 'Muscle', 'Tejido contráctil', 'Contractile tissue'],
  fmaId: 'FMA:9641',

  levels: {
    1: {
      level: 1,
      summary: 'El tejido muscular está formado por células especiales que pueden contraerse (acortarse) para producir movimiento, como los motores de tu cuerpo. | Muscle tissue is made of special cells that can contract (shorten) to produce movement, like your body\'s motors.',
      explanation: `## Los Motores de Tu Cuerpo | Your Body's Motors

Imagina que tu cuerpo es un robot. Para que el robot pueda moverse, caminar, agarrar cosas e incluso bombear sangre, necesita motores. ¡El tejido muscular es exactamente eso: los motores de tu cuerpo! | Imagine your body is a robot. For the robot to move, walk, grab things, and even pump blood, it needs motors. Muscle tissue is exactly that: your body's motors!

**Tres tipos de "motores" | Three types of "motors":**

1. **Músculo esquelético (voluntario)** - Los músculos que usas para moverte, correr y levantar cosas. Tú los controlas con tu cerebro. | Skeletal muscle (voluntary) - The muscles you use to move, run, and lift things. You control them with your brain.
   - Se llama "esquelético" porque se pega a tus huesos | Called "skeletal" because it attaches to your bones
   - Ejemplo: Bíceps, cuádriceps, abdominales | Example: Biceps, quadriceps, abs

2. **Músculo liso (involuntario)** - Los músculos que trabajan sin que pienses en ello. Están en tus órganos internos. | Smooth muscle (involuntary) - Muscles that work without you thinking about it. They are in your internal organs.
   - Mueven la comida por tu intestino | Move food through your intestines
   - Controlan el tamaño de tus vasos sanguíneos | Control the size of your blood vessels

3. **Músculo cardíaco (del corazón)** - El músculo especial que forma tu corazón. Late sin parar durante toda tu vida. | Cardiac muscle (heart) - The special muscle forming your heart. It beats nonstop your entire life.
   - No se cansa como los otros músculos | It doesn't tire out like other muscles
   - Late automáticamente: no necesitas pensarlo | Beats automatically: you don't need to think about it

**¿Cómo funcionan? | How do they work?**

Todas las células musculares tienen "cuerdas" microscópicas dentro de ellas. Cuando el cerebro (o una señal automática) da la orden, estas cuerdas se deslizan unas sobre otras, haciendo que la célula se acorte. ¡Millones de células acortándose juntas producen el movimiento! | All muscle cells have microscopic "ropes" inside them. When the brain (or an automatic signal) gives the command, these ropes slide over each other, making the cell shorten. Millions of cells shortening together produce movement!`,
      keyTerms: [
        { term: 'músculo esquelético | skeletal muscle', definition: 'El músculo unido a los huesos que mueves voluntariamente, como cuando levantas el brazo | The muscle attached to bones that you move voluntarily, like when you raise your arm' },
        { term: 'músculo liso | smooth muscle', definition: 'El músculo de los órganos internos que trabaja automáticamente, como el que mueve la comida por el intestino | Internal organ muscle that works automatically, like the one moving food through the intestine' },
        { term: 'músculo cardíaco | cardiac muscle', definition: 'El músculo especial del corazón que late sin parar | The special heart muscle that beats nonstop' },
        { term: 'contracción | contraction', definition: 'Cuando un músculo se acorta para producir fuerza o movimiento | When a muscle shortens to produce force or movement' },
      ],
      analogies: [
        'El músculo esquelético es como un elástico grueso: se puede estirar y volver a su tamaño original. | Skeletal muscle is like a thick rubber band: it can stretch and snap back to its original size.',
        'El músculo liso es como un robot automático que sigue trabajando sin necesitar que lo controles. | Smooth muscle is like an automatic robot that keeps working without needing you to control it.',
        'El músculo cardíaco es como una batería recargable que nunca se apaga: late más de 100,000 veces al día. | Cardiac muscle is like a rechargeable battery that never turns off: it beats more than 100,000 times a day.',
      ],
      examples: [
        'Cuando haces una lagartija (push-up), tus músculos esqueléticos de los brazos y pecho se contraen para levantarte del suelo. | When you do a push-up, your arm and chest skeletal muscles contract to lift you off the ground.',
        'Cuando comes, el músculo liso de tu esófago e intestinos empuja la comida sin que tú pienses en ello. | When you eat, the smooth muscle in your esophagus and intestines pushes food along without you thinking about it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Los tres tipos de tejido muscular difieren en estructura (estriado vs. liso), control (voluntario vs. involuntario), y ubicación, pero todos comparten el mecanismo básico de contracción mediante proteínas de actina y miosina. | The three types of muscle tissue differ in structure (striated vs. smooth), control (voluntary vs. involuntary), and location, but all share the basic contraction mechanism using actin and myosin proteins.',
      explanation: `## Comparación de los Tres Tipos de Músculo | Comparison of the Three Muscle Types

### Tabla comparativa | Comparison table

| Característica | Esquelético | Liso | Cardíaco |
|---------------|-------------|------|----------|
| Estrías | Sí | No | Sí |
| Núcleos | Multinucleado (periféricos) | Uninucleado (central) | 1-2 núcleos (centrales) |
| Control | Voluntario | Involuntario | Involuntario |
| Forma | Fibras largas cilíndricas | Células fusiformes | Células ramificadas |
| Velocidad de contracción | Rápida | Lenta | Intermedia |
| Fatiga | Se fatiga | No se fatiga fácilmente | No se fatiga |
| Regeneración | Limitada (células satélite) | Buena | Muy limitada |

### 1. Músculo Esquelético | Skeletal Muscle

**Estructura | Structure:**
- Fibras musculares: Células multinucleadas muy largas (hasta 30 cm) | Muscle fibers: Very long multinucleated cells (up to 30 cm)
- Estriaciones visibles: Bandas claras y oscuras por el patrón de actina y miosina | Visible striations: Light and dark bands from actin and myosin pattern
- Núcleos en la periferia de la célula | Nuclei at cell periphery

**Organización | Organization:**
- Fibra muscular → Fascículo → Músculo | Muscle fiber → Fascicle → Muscle
- Endomisio: Rodea cada fibra | Endomysium: Surrounds each fiber
- Perimisio: Rodea cada fascículo | Perimysium: Surrounds each fascicle
- Epimisio: Rodea todo el músculo | Epimysium: Surrounds entire muscle

**La unidad contráctil: El sarcómero | The contractile unit: The sarcomere**
- Banda A: Zona oscura con miosina (filamentos gruesos) | A band: Dark zone with myosin (thick filaments)
- Banda I: Zona clara con solo actina (filamentos delgados) | I band: Light zone with only actin (thin filaments)
- Línea Z: Borde del sarcómero; la actina se ancla aquí | Z line: Sarcomere boundary; actin anchors here
- Zona H: Centro del sarcómero, solo miosina | H zone: Sarcomere center, myosin only
- Línea M: Centro exacto del sarcómero | M line: Exact center of sarcomere

**Contracción (modelo del filamento deslizante) | Contraction (sliding filament model):**
1. Señal nerviosa llega a la unión neuromuscular | Nerve signal reaches neuromuscular junction
2. Se libera acetilcolina → despolarización de la fibra | Acetylcholine released → fiber depolarization
3. Calcio sale del retículo sarcoplásmico | Calcium released from sarcoplasmic reticulum
4. Calcio se une a troponina → tropomiosina se mueve → sitios de unión en actina expuestos | Calcium binds troponin → tropomyosin moves → actin binding sites exposed
5. Cabezas de miosina se unen a actina y tiran (golpe de poder) | Myosin heads bind actin and pull (power stroke)
6. El sarcómero se acorta | Sarcomere shortens

### 2. Músculo Liso | Smooth Muscle

**Estructura | Structure:**
- Células fusiformes (en forma de huso) de 20-500 μm | Spindle-shaped cells, 20-500 μm
- Un solo núcleo central | Single central nucleus
- Sin estrías visibles (filamentos no están tan ordenados) | No visible striations (filaments are less organized)
- Cuerpos densos: Equivalentes de las líneas Z | Dense bodies: Equivalents of Z lines

**Contracción | Contraction:**
- Usa calmodulina en lugar de troponina | Uses calmodulin instead of troponin
- Calcio + calmodulina activan la quinasa de la cadena ligera de miosina (MLCK) | Calcium + calmodulin activate myosin light chain kinase (MLCK)
- Contracción más lenta pero sostenida | Slower but sustained contraction

**Ubicaciones | Locations:**
- Paredes de vasos sanguíneos (túnica media) | Blood vessel walls (tunica media)
- Tracto gastrointestinal (peristalsis) | GI tract (peristalsis)
- Vías respiratorias (bronquios) | Airways (bronchi)
- Útero, vejiga, iris del ojo | Uterus, bladder, iris of the eye

### 3. Músculo Cardíaco | Cardiac Muscle

**Estructura | Structure:**
- Células ramificadas con 1-2 núcleos centrales | Branched cells with 1-2 central nuclei
- Estrías presentes (sarcómeros como el esquelético) | Striations present (sarcomeres like skeletal)
- **Discos intercalares**: Uniones especializadas entre células cardíacas | Intercalated discs: Specialized junctions between cardiac cells
  - Desmosomas: Resistencia mecánica | Desmosomes: Mechanical strength
  - Uniones de hendidura (gap junctions): Transmisión eléctrica rápida | Gap junctions: Rapid electrical transmission

**Características especiales | Special characteristics:**
- Automatismo: Genera su propio ritmo eléctrico (nódulo SA) | Automaticity: Generates its own electrical rhythm (SA node)
- Sincitio funcional: Las uniones gap permiten que todo el corazón se contraiga como una unidad | Functional syncytium: Gap junctions allow entire heart to contract as one unit
- Alta densidad de mitocondrias (~40% del volumen celular): Gran demanda energética | High mitochondrial density (~40% cell volume): High energy demand
- Metabolismo aeróbico obligatorio | Obligatory aerobic metabolism`,
      keyTerms: [
        { term: 'sarcómero | sarcomere', definition: 'Unidad contráctil básica del músculo estriado; se extiende de línea Z a línea Z; se acorta durante la contracción | Basic contractile unit of striated muscle; Z line to Z line; shortens during contraction', pronunciation: 'sar-KOH-meh-roh' },
        { term: 'actina | actin', definition: 'Proteína del filamento delgado; se une a la miosina durante la contracción | Thin filament protein; binds myosin during contraction' },
        { term: 'miosina | myosin', definition: 'Proteína del filamento grueso; sus cabezas tiran de la actina para producir contracción | Thick filament protein; its heads pull actin to produce contraction' },
        { term: 'discos intercalares | intercalated discs', definition: 'Uniones especializadas entre células del músculo cardíaco que permiten la conducción eléctrica y la resistencia mecánica | Specialized junctions between cardiac muscle cells allowing electrical conduction and mechanical strength' },
        { term: 'troponina | troponin', definition: 'Proteína reguladora del músculo estriado; el calcio se une a la troponina C para iniciar la contracción | Regulatory protein of striated muscle; calcium binds troponin C to initiate contraction' },
        { term: 'células satélite | satellite cells', definition: 'Células madre del músculo esquelético que pueden activarse para reparar fibras dañadas | Skeletal muscle stem cells that can activate to repair damaged fibers' },
        { term: 'calmodulina | calmodulin', definition: 'Proteína que une calcio en el músculo liso; activa la MLCK para iniciar la contracción | Calcium-binding protein in smooth muscle; activates MLCK to initiate contraction' },
      ],
      analogies: [
        'El sarcómero funciona como un telescopio retráctil: los filamentos se deslizan uno sobre otro para acortarse, pero ninguno cambia de longitud. | The sarcomere works like a retractable telescope: filaments slide over each other to shorten, but none change in length.',
        'Los discos intercalares del corazón son como los enchufes eléctricos entre células: permiten que la corriente pase de una a otra para que todo el corazón late junto. | Intercalated discs are like electrical plugs between cells: they allow current to flow from one to another so the whole heart beats together.',
      ],
      examples: [
        'Cuando un corredor se lesiona un músculo (desgarro), las células satélite se activan para reparar las fibras dañadas. | When a runner injures a muscle (tear), satellite cells activate to repair the damaged fibers.',
        'El broncoespasmo en el asma ocurre porque el músculo liso de los bronquios se contrae excesivamente, cerrando las vías aéreas. | Bronchospasm in asthma occurs because the smooth muscle of bronchi contracts excessively, closing the airways.',
      ],
    },
    3: {
      level: 3,
      summary: 'La ultraestructura muscular revela un sistema altamente organizado: el acoplamiento excitación-contracción depende del sistema de túbulos T y retículo sarcoplásmico, mientras que los tipos de fibras musculares (I, IIa, IIx) determinan las propiedades funcionales del músculo. | Muscle ultrastructure reveals a highly organized system: excitation-contraction coupling depends on the T-tubule and sarcoplasmic reticulum system, while muscle fiber types (I, IIa, IIx) determine functional muscle properties.',
      explanation: `## Ultraestructura y Fisiología Muscular | Muscle Ultrastructure and Physiology

### Acoplamiento Excitación-Contracción | Excitation-Contraction Coupling

**Músculo esquelético | Skeletal muscle:**

1. **Potencial de acción** en la membrana (sarcolema) se propaga al interior por **túbulos T** (invaginaciones del sarcolema) | Action potential on membrane (sarcolemma) propagates inward via T-tubules
2. **Tríada**: Un túbulo T + dos cisternas terminales del retículo sarcoplásmico (RS) | Triad: One T-tubule + two terminal cisternae of SR
3. El receptor de dihidropiridina (DHPR) en el túbulo T actúa como **sensor de voltaje** | DHPR in T-tubule acts as voltage sensor
4. Interacción mecánica directa DHPR → receptor de rianodina (RyR1) en el RS | Direct mechanical interaction DHPR → ryanodine receptor (RyR1) in SR
5. RyR1 se abre → liberación masiva de Ca²⁺ al citoplasma | RyR1 opens → massive Ca²⁺ release to cytoplasm
6. Ca²⁺ se une a **troponina C** → cambio conformacional → tropomiosina se desplaza | Ca²⁺ binds troponin C → conformational change → tropomyosin displacement
7. Exposición de sitios de unión en actina → **puentes cruzados** de miosina | Actin binding sites exposed → myosin cross-bridges
8. **Ciclo de puentes cruzados**: Unión → golpe de poder (ADP+Pi liberados) → ATP se une → desprendimiento → re-cocking | Cross-bridge cycle: Binding → power stroke → ATP binding → detachment → re-cocking
9. Relajación: SERCA (Ca²⁺-ATPasa) bombea Ca²⁺ de vuelta al RS | Relaxation: SERCA pumps Ca²⁺ back to SR

**Músculo cardíaco (diferencias clave) | Cardiac muscle (key differences):**
- DHPR funciona como canal de Ca²⁺ tipo L (no solo sensor) | DHPR functions as L-type Ca²⁺ channel (not just sensor)
- Ca²⁺ externo → "calcium-induced calcium release" (CICR) vía RyR2 | External Ca²⁺ → CICR via RyR2
- Díada (no tríada): Un túbulo T + una cisterna del RS | Dyad (not triad): One T-tubule + one SR cisterna

**Músculo liso (regulación diferente) | Smooth muscle (different regulation):**
1. Ca²⁺ entra por canales tipo L y se libera del RS vía IP3 | Ca²⁺ enters via L-type channels and released from SR via IP3
2. Ca²⁺ + calmodulina → complejo activo | Ca²⁺ + calmodulin → active complex
3. Complejo activa MLCK (quinasa de cadena ligera de miosina) | Complex activates MLCK
4. MLCK fosforila la cadena ligera de miosina → contracción | MLCK phosphorylates myosin light chain → contraction
5. Relajación: MLCP (fosfatasa) desfosforila miosina | Relaxation: MLCP dephosphorylates myosin
6. **Mecanismo de cierre (latch state)**: Mantiene tono con bajo consumo de ATP | Latch state: Maintains tone with low ATP consumption

### Tipos de Fibras Musculares Esqueléticas | Skeletal Muscle Fiber Types

| Propiedad | Tipo I (lentas) | Tipo IIa (rápidas oxidativas) | Tipo IIx (rápidas glucolíticas) |
|-----------|----------------|------------------------------|-------------------------------|
| Color | Rojo | Rojo | Blanco |
| Miosina (MHC) | MHC-I | MHC-IIa | MHC-IIx |
| Metabolismo | Oxidativo (aeróbico) | Oxidativo-glucolítico | Glucolítico (anaeróbico) |
| Mitocondrias | Muchas | Muchas | Pocas |
| Mioglobina | Alta | Alta | Baja |
| Velocidad de contracción | Lenta | Rápida | Muy rápida |
| Resistencia a fatiga | Alta | Intermedia | Baja |
| Función | Postura, resistencia | Velocidad + resistencia | Fuerza explosiva |

### Proteínas del Sarcómero | Sarcomeric Proteins

**Filamento delgado | Thin filament:**
- Actina-F (doble hélice de actina-G polimerizada) | F-actin (polymerized G-actin double helix)
- Tropomiosina: Cubre sitios de unión en reposo | Tropomyosin: Covers binding sites at rest
- Complejo troponina: TnT (une tropomiosina), TnI (inhibe), TnC (une Ca²⁺) | Troponin complex: TnT (binds tropomyosin), TnI (inhibits), TnC (binds Ca²⁺)
- Nebulina: Regula longitud del filamento delgado | Nebulin: Regulates thin filament length

**Filamento grueso | Thick filament:**
- Miosina II: 2 cadenas pesadas + 4 cadenas ligeras | Myosin II: 2 heavy chains + 4 light chains
- Cabeza globular: Actividad ATPasa y sitio de unión a actina | Globular head: ATPase activity and actin binding site

**Proteínas accesorias | Accessory proteins:**
- **Titina**: Molécula elástica gigante (Z → M); mantiene miosina centrada, da elasticidad pasiva | Titin: Giant elastic molecule (Z → M); keeps myosin centered, provides passive elasticity
- **Distrofina**: Conecta actina del sarcómero con la MEC a través del complejo distroglucano | Dystrophin: Connects sarcomeric actin to ECM via dystroglycan complex
- **α-actinina**: Ancla actina a la línea Z | Anchors actin to Z line

### Unión Neuromuscular | Neuromuscular Junction

- Neurona motora α libera acetilcolina (ACh) en la hendidura sináptica | α motor neuron releases ACh in synaptic cleft
- ACh se une a receptores nicotínicos en la placa motora | ACh binds nicotinic receptors at motor end plate
- Canal catiónico no selectivo → corriente de placa terminal → potencial de acción muscular | Non-selective cation channel → end plate current → muscle action potential
- Acetilcolinesterasa (AChE): Degrada ACh → termina la señal | AChE degrades ACh → terminates signal
- Unidad motora: Una neurona motora + todas las fibras que inerva | Motor unit: One motor neuron + all fibers it innervates`,
      keyTerms: [
        { term: 'tríada | triad', definition: 'Estructura formada por un túbulo T flanqueado por dos cisternas terminales del RS; sitio del acoplamiento excitación-contracción en músculo esquelético | Structure of one T-tubule flanked by two terminal cisternae of SR; excitation-contraction coupling site in skeletal muscle' },
        { term: 'receptor de rianodina (RyR) | ryanodine receptor', definition: 'Canal de Ca²⁺ del RS; RyR1 en músculo esquelético (activación mecánica), RyR2 en músculo cardíaco (CICR) | SR Ca²⁺ channel; RyR1 in skeletal (mechanical activation), RyR2 in cardiac (CICR)' },
        { term: 'SERCA', definition: 'Ca²⁺-ATPasa del retículo sarcoplásmico; bombea Ca²⁺ de vuelta al RS para permitir la relajación | SR Ca²⁺-ATPase; pumps Ca²⁺ back to SR for relaxation' },
        { term: 'distrofina | dystrophin', definition: 'Proteína citoesquelética que conecta el sarcómero con la matriz extracelular; su ausencia causa distrofia muscular de Duchenne | Cytoskeletal protein connecting sarcomere to ECM; its absence causes Duchenne muscular dystrophy' },
        { term: 'titina | titin', definition: 'Proteína más grande del cuerpo humano; actúa como resorte molecular que da elasticidad pasiva al músculo y centra la miosina en el sarcómero | Largest protein in the human body; acts as molecular spring providing passive muscle elasticity and centering myosin' },
        { term: 'MLCK | myosin light chain kinase', definition: 'Quinasa activada por Ca²⁺-calmodulina que fosforila la miosina para iniciar la contracción del músculo liso | Ca²⁺-calmodulin-activated kinase phosphorylating myosin to initiate smooth muscle contraction' },
        { term: 'unidad motora | motor unit', definition: 'Una neurona motora α y todas las fibras musculares que inerva; unidades pequeñas para movimientos finos, grandes para fuerza | One α motor neuron and all muscle fibers it innervates; small units for fine movement, large for strength' },
      ],
      clinicalNotes: 'La hipertermia maligna es una emergencia farmacogenética por mutación en RyR1 que causa liberación descontrolada de Ca²⁺ con exposición a anestésicos halogenados; tratamiento: dantroleno (bloquea RyR1). El curare y los bloqueadores neuromusculares compiten con ACh en los receptores nicotínicos. Los inhibidores de AChE (neostigmina) se usan para revertir el bloqueo neuromuscular y tratar la miastenia gravis. La troponina I y T cardíacas son biomarcadores altamente sensibles y específicos de daño miocárdico (infarto). | Malignant hyperthermia is a pharmacogenetic emergency from RyR1 mutation causing uncontrolled Ca²⁺ release with halogenated anesthetics; treatment: dantrolene (blocks RyR1). Curare and neuromuscular blockers compete with ACh at nicotinic receptors. AChE inhibitors (neostigmine) reverse neuromuscular blockade and treat myasthenia gravis. Cardiac troponin I and T are highly sensitive and specific biomarkers of myocardial injury (infarction).',
    },
    4: {
      level: 4,
      summary: 'La biología muscular avanzada integra plasticidad de fibras mediada por señalización (mTOR, PGC-1α, calcineurina), remodelación por carga mecánica, patogénesis molecular de miopatías hereditarias (distrofinopatías, canalopatías), y mecanismos de insuficiencia cardíaca a nivel del sarcómero. | Advanced muscle biology integrates signaling-mediated fiber plasticity (mTOR, PGC-1α, calcineurin), load-induced remodeling, molecular pathogenesis of hereditary myopathies (dystrophinopathies, channelopathies), and heart failure mechanisms at the sarcomere level.',
      explanation: `## Biología Muscular Avanzada | Advanced Muscle Biology

### Plasticidad Muscular y Señalización | Muscle Plasticity and Signaling

**Hipertrofia (vía anabólica) | Hypertrophy (anabolic pathway):**
- Estímulo mecánico + IGF-1 → PI3K/Akt → **mTORC1** → S6K1 + 4E-BP1 | Mechanical stimulus + IGF-1 → PI3K/Akt → mTORC1 → S6K1 + 4E-BP1
- ↑ Síntesis proteica, ↑ ribosomas, ↑ área transversal de fibras | Increased protein synthesis, ribosomes, fiber cross-sectional area
- Miostatina (GDF-8): Inhibidor endógeno del crecimiento muscular; activa Smad2/3 → inhibe mTOR | Myostatin (GDF-8): Endogenous muscle growth inhibitor; activates Smad2/3 → inhibits mTOR
- Inhibidores de miostatina en desarrollo para sarcopenia y atrofia | Myostatin inhibitors in development for sarcopenia and atrophy

**Atrofia (vía catabólica) | Atrophy (catabolic pathway):**
- Inactividad, denervación, glucocorticoides → FoxO → **atroginas** (MAFbx/MuRF1) | Inactivity, denervation, glucocorticoids → FoxO → atrogenes
- Vía ubiquitina-proteasoma: Degradación selectiva de proteínas sarcoméricas | Ubiquitin-proteasome pathway: Selective sarcomeric protein degradation
- Autofagia: Reciclaje de organelos dañados | Autophagy: Damaged organelle recycling
- Sarcopenia: Pérdida de masa muscular asociada al envejecimiento; FoxO/mTOR desbalanceados | Sarcopenia: Age-associated muscle mass loss; FoxO/mTOR imbalanced

**Adaptación a resistencia (endurance) | Endurance adaptation:**
- Ejercicio aeróbico → Ca²⁺ sostenido → CaMK → calcineurina → **PGC-1α** (coactivador transcripcional) | Aerobic exercise → sustained Ca²⁺ → CaMK → calcineurin → PGC-1α
- PGC-1α → biogénesis mitocondrial, genes oxidativos, switch Tipo II → Tipo I | PGC-1α → mitochondrial biogenesis, oxidative genes, Type II → Type I switch
- AMPK: Sensor energético que activa PGC-1α en deficiencia de ATP | AMPK: Energy sensor activating PGC-1α in ATP deficiency

### Regeneración Muscular | Muscle Regeneration

**Células satélite (Pax7+) | Satellite cells (Pax7+):**
- Ubicación: Entre el sarcolema y la lámina basal de la fibra | Location: Between sarcolemma and fiber basal lamina
- Quiescentes en estado basal; se activan por daño | Quiescent at baseline; activated by damage
- Activación: Pax7+ → MyoD+ (mioblasto) → Miogenina+ (miocito) → Fusión (fibra regenerada) | Activation: Pax7+ → MyoD+ (myoblast) → Myogenin+ (myocyte) → Fusion (regenerated fiber)
- Autorrenovación: Proporción regresa a quiescencia (Pax7+/MyoD−) | Self-renewal: Proportion returns to quiescence
- Disminución con envejecimiento: Contribuye a sarcopenia | Declines with aging: Contributes to sarcopenia

**Factores reguladores miogénicos (MRFs) | Myogenic regulatory factors:**
- MyoD y Myf5: Especificación miogénica | Myogenic specification
- Miogenina y MRF4: Diferenciación terminal | Terminal differentiation
- Modelo jerárquico: Pax3/7 → MyoD/Myf5 → Miogenina → MRF4 | Hierarchical model

### Distrofinopatías | Dystrophinopathies

**Complejo distrofina-glucoproteínas (DGC) | Dystrophin-glycoprotein complex:**
- Distrofina conecta actina intracelular → distroglucanos → laminina-α2 de la MEC | Dystrophin connects intracellular actin → dystroglycans → laminin-α2 in ECM
- Función: Estabilización mecánica del sarcolema durante la contracción | Function: Mechanical sarcolemma stabilization during contraction

**Distrofia muscular de Duchenne (DMD) | Duchenne muscular dystrophy:**
- Mutaciones con pérdida de marco en gen DMD (Xp21.2) → ausencia de distrofina | Frameshift mutations in DMD gene (Xp21.2) → absent dystrophin
- Patología: Necrosis → regeneración → fibrosis → reemplazo adiposo | Pathology: Necrosis → regeneration → fibrosis → fatty replacement
- CK sérica muy elevada; biopsia muestra ausencia de distrofina por IHQ | Highly elevated serum CK; biopsy shows absent dystrophin by IHC
- Tratamiento: Glucocorticoides, terapia génica (exon skipping, micro-distrofina AAV) | Treatment: Glucocorticoids, gene therapy (exon skipping, AAV micro-dystrophin)

**Distrofia muscular de Becker (BMD) | Becker muscular dystrophy:**
- Mutaciones en marco → distrofina truncada pero parcialmente funcional | In-frame mutations → truncated but partially functional dystrophin
- Fenotipo más leve, inicio tardío | Milder phenotype, later onset

### Canalopatías Musculares | Muscle Channelopathies

| Enfermedad | Canal | Gen | Clínica |
|-----------|-------|-----|---------|
| Parálisis periódica hipocalémica | Nav1.4 / Cav1.1 | SCN4A / CACNA1S | Ataques de debilidad con hipocalemia |
| Parálisis periódica hipercalémica | Nav1.4 | SCN4A | Ataques con hipercalemia; miotonía |
| Miotonía congénita (Thomsen/Becker) | ClC-1 | CLCN1 | Rigidez al inicio del movimiento |
| Síndrome de QT largo tipo 1 | KCNQ1 (Kv7.1) | KCNQ1 | Arritmia por acortamiento de IKs cardíaco |

### Mecanismos de Insuficiencia Cardíaca a Nivel Sarcomérico | Sarcomeric Mechanisms of Heart Failure

**Miocardiopatía hipertrófica (MCH) | Hypertrophic cardiomyopathy (HCM):**
- Mutaciones sarcoméricas: MYH7 (β-MHC, 40%), MYBPC3 (MyBP-C, 40%) | Sarcomeric mutations: MYH7 (40%), MYBPC3 (40%)
- Histopatología: Desorganización miofibrilar (disarray), fibrosis intersticial | Histopathology: Myofibrillar disarray, interstitial fibrosis
- Hipercontractilidad → disfunción diastólica → obstrucción del tracto de salida (LVOT) | Hypercontractility → diastolic dysfunction → LVOT obstruction
- Mavacamten: Inhibidor alostérico de miosina cardíaca; reduce la obstrucción del TSVI | Mavacamten: Allosteric cardiac myosin inhibitor; reduces LVOT obstruction

**Miocardiopatía dilatada (MCD) | Dilated cardiomyopathy (DCM):**
- Mutaciones en TTN (titina, 20-25%), LMNA (lamina, 6%), DMD, DES, entre otras | TTN mutations (titin, 20-25%), LMNA (lamin, 6%), DMD, DES, among others
- Titina truncada → reducción de la fuerza pasiva y contractilidad | Truncated titin → reduced passive force and contractility
- Histopatología: Dilatación, adelgazamiento de paredes, fibrosis difusa | Histopathology: Dilation, wall thinning, diffuse fibrosis`,
      keyTerms: [
        { term: 'mTORC1', definition: 'Complejo quinasa central de la vía anabólica muscular; integra señales de carga mecánica, nutrientes y factores de crecimiento para estimular síntesis proteica | Central kinase complex of the muscle anabolic pathway; integrates mechanical load, nutrient, and growth factor signals to stimulate protein synthesis' },
        { term: 'PGC-1α', definition: 'Coactivador transcripcional maestro de la biogénesis mitocondrial y el metabolismo oxidativo; su inducción por ejercicio media la adaptación de resistencia | Master transcriptional coactivator of mitochondrial biogenesis and oxidative metabolism; exercise-induced activation mediates endurance adaptation' },
        { term: 'miostatina (GDF-8) | myostatin', definition: 'Factor inhibidor del crecimiento muscular de la superfamilia TGF-β; su bloqueo produce hipertrofia marcada; blanco terapéutico en sarcopenia | TGF-β superfamily muscle growth inhibitor; its blockade produces marked hypertrophy; therapeutic target in sarcopenia' },
        { term: 'Pax7', definition: 'Factor de transcripción marcador de células satélite quiescentes; esencial para el mantenimiento del pool de células madre musculares | Quiescent satellite cell marker transcription factor; essential for muscle stem cell pool maintenance' },
        { term: 'mavacamten', definition: 'Inhibidor alostérico selectivo de la miosina cardíaca β (MYH7); aprobado por FDA para MCH obstructiva sintomática; reduce contractilidad excesiva | Selective allosteric cardiac β-myosin (MYH7) inhibitor; FDA-approved for symptomatic obstructive HCM; reduces excessive contractility' },
        { term: 'distrofinopatía | dystrophinopathy', definition: 'Enfermedad causada por mutaciones en el gen DMD; Duchenne (ausencia de distrofina) y Becker (distrofina truncada) son los dos extremos del espectro | Disease from DMD gene mutations; Duchenne (absent dystrophin) and Becker (truncated dystrophin) are the two ends of the spectrum' },
      ],
      clinicalNotes: 'La troponina T de alta sensibilidad (hs-TnT) detecta daño miocárdico mínimo y estratifica riesgo en SCA. Las terapias génicas para DMD incluyen eteplirsen (exon 51 skipping, aprobado FDA con evidencia limitada), delandistrogene moxeparvovec (micro-distrofina AAV, aprobación acelerada 2023). Mavacamten representa la primera terapia dirigida al sarcómero en MCH. La biopsia muscular con inmunohistoquímica para distrofina, sarcoglucanos y merosina es fundamental para el diagnóstico diferencial de distrofias musculares. | High-sensitivity troponin T detects minimal myocardial damage and risk-stratifies ACS. DMD gene therapies include eteplirsen and delandistrogene moxeparvovec. Mavacamten is the first sarcomere-targeted therapy in HCM. Muscle biopsy with IHC for dystrophin, sarcoglycans, and merosin is fundamental for differential diagnosis of muscular dystrophies.',
    },
    5: {
      level: 5,
      summary: 'La histopatología muscular clínica avanzada abarca el diagnóstico diferencial de miopatías inflamatorias, la clasificación molecular de rabdomiosarcomas, la cardiomiopatía arritmogénica, la patología del músculo liso vascular en la aterosclerosis, y terapias emergentes de edición génica y bioingeniería muscular. | Advanced clinical muscle histopathology encompasses the differential diagnosis of inflammatory myopathies, molecular rhabdomyosarcoma classification, arrhythmogenic cardiomyopathy, vascular smooth muscle pathology in atherosclerosis, and emerging gene editing and muscle bioengineering therapies.',
      explanation: `## Histopatología Muscular Clínica Avanzada | Advanced Clinical Muscle Histopathology

### Miopatías Inflamatorias: Diagnóstico Histopatológico | Inflammatory Myopathies: Histopathological Diagnosis

| Enfermedad | Patrón inflamatorio | IHQ | Anticuerpos |
|-----------|---------------------|-----|-------------|
| Dermatomiositis | Perimisial, perivascular; atrofia perifascicular | C5b-9 en capilares, MHC-I perifascicular | Anti-Mi-2, anti-MDA5, anti-NXP-2, anti-TIF1-γ |
| Polimiositis | Endomisial; CD8+ invadiendo fibras no necróticas | MHC-I difuso, CD8+ | Anti-Jo-1, anti-SRP, anti-PL-7 |
| Miopatía necrotizante inmunomediada (IMNM) | Necrosis + regeneración; mínimo infiltrado | MHC-I, C5b-9 en sarcolema | Anti-HMGCR, anti-SRP |
| Miositis por cuerpos de inclusión (IBM) | Endomisial; vacuolas ribeteadas; inclusiones amiloides | p62, TDP-43 | Anti-cN1A |

**Algoritmo diagnóstico | Diagnostic algorithm:**
1. CK sérica + EMG + RM muscular (edema en STIR) | Serum CK + EMG + muscle MRI (STIR edema)
2. Panel de autoanticuerpos específicos de miositis (MSA) | Myositis-specific autoantibody panel
3. Biopsia muscular con tinciones especiales + IHQ + microscopía electrónica | Muscle biopsy with special stains + IHC + electron microscopy
4. Tinciones histoquímicas: COX/SDH (defectos mitocondriales), esterasa, ATPasa pH 4.3/9.4 (tipificación de fibras) | Histochemical stains: COX/SDH, esterase, ATPase

### Rabdomiosarcoma: Clasificación y Patología Molecular | Rhabdomyosarcoma: Classification and Molecular Pathology

**Subtipos principales | Main subtypes:**

1. **Embrionario (ERMS)**: 60% de casos; niños <10 años | Embryonal: 60%; children <10 years
   - Histología: Células pequeñas a estrelladas con estroma mixoide | Small to stellate cells with myxoid stroma
   - Variante botrioide: Masa polipoidea subepitelial ("racimo de uvas") | Botryoid variant: Subepithelial polypoid mass ("cluster of grapes")
   - Molecular: Pérdida de heterocigosidad 11p15.5; mutaciones RAS | LOH 11p15.5; RAS mutations

2. **Alveolar (ARMS)**: 20-25%; adolescentes | Alveolar: 20-25%; adolescents
   - Histología: Nidos de células redondas separados por septos fibrosos (patrón "alveolar") | Nests of round cells separated by fibrous septa
   - t(2;13)(q35;q14): PAX3-FOXO1 (60%); t(1;13): PAX7-FOXO1 (20%) | Translocations: PAX3-FOXO1, PAX7-FOXO1
   - Fusión-positivo: Peor pronóstico; fusión-negativo: Se comporta como embrionario | Fusion-positive: Worse prognosis; fusion-negative: Behaves like embryonal

3. **Pleomórfico**: Adultos; diagnóstico de exclusión | Pleomorphic: Adults; diagnosis of exclusion

**Marcadores IHQ | IHC markers:**
- Desmina, MyoD1, miogenina (nuclear; miogenina difusa sugiere alveolar) | Desmin, MyoD1, myogenin (nuclear; diffuse myogenin suggests alveolar)
- INI1 preservado (excluye tumor rabdoide) | INI1 preserved (excludes rhabdoid tumor)

### Miocardiopatía Arritmogénica del Ventrículo Derecho (MAVD) | Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC)

**Patogénesis molecular | Molecular pathogenesis:**
- Mutaciones desmosómicas: PKP2 (placofilina-2, 40%), DSP (desmoplaquina), DSG2 (desmogleína-2), DSC2 (desmocolina-2), JUP (placoglobina) | Desmosomal mutations: PKP2, DSP, DSG2, DSC2, JUP
- Pérdida de adhesión mecánica → muerte celular → reemplazo fibroadiposo | Loss of mechanical adhesion → cell death → fibroadipose replacement
- Supresión de la vía Wnt/β-catenina → adipogénesis (switch a PPARγ) | Suppression of Wnt/β-catenin → adipogenesis (PPARγ switch)

**Histopatología | Histopathology:**
- Reemplazo fibroadiposo transmural del miocardio (>3% en una muestra) | Transmural fibroadipose myocardial replacement (>3% in a sample)
- Criterios modificados de Task Force (2010): Mayor + menor = diagnóstico | Modified Task Force criteria: Major + minor = diagnosis
- Triángulo de displasia: Tracto de entrada, tracto de salida, ápex del VD | Dysplasia triangle: Inflow, outflow, RV apex

### Músculo Liso Vascular en Aterosclerosis | Vascular Smooth Muscle in Atherosclerosis

**Switch fenotípico de CML | SMC phenotypic switch:**
- **Contráctil** (diferenciado): α-SMA+, SM-MHC+, SM22α+; función contráctil | Contractile (differentiated): Contractile function
- **Sintético** (desdiferenciado): Proliferativo, migratorio, produce MEC | Synthetic (dedifferentiated): Proliferative, migratory, produces ECM
- Regulación: Miocardina/SRF → fenotipo contráctil; PDGF-BB, KLF4 → fenotipo sintético | Regulation: Myocardin/SRF → contractile; PDGF-BB, KLF4 → synthetic

**Roles en la aterosclerosis | Roles in atherosclerosis:**
- CML migran de la media a la íntima | SMCs migrate from media to intima
- Forman la capa fibrosa de la placa aterosclerótica (protectora) | Form protective fibrous cap of atherosclerotic plaque
- CML-derivadas pueden adoptar fenotipo macrófago-like (células espumosas) | SMC-derived cells can adopt macrophage-like phenotype (foam cells)
- Apoptosis de CML → adelgazamiento de la capa fibrosa → placa vulnerable → ruptura → trombosis | SMC apoptosis → fibrous cap thinning → vulnerable plaque → rupture → thrombosis

### Terapias Emergentes | Emerging Therapies

**Edición génica en miopatías | Gene editing in myopathies:**
- CRISPR/Cas9 para saltar exones mutados en DMD (exon 44, 45, 51, 53) | Exon skipping in DMD
- Base editing: Corrección de mutaciones puntuales sin cortes de doble hebra | Point mutation correction without double-strand breaks
- Prime editing: Corrección precisa de deleciones e inserciones | Precise correction of deletions and insertions
- Desafíos: Entrega in vivo (AAV9 miotropo), inmunogenicidad de Cas9, edición off-target | Challenges: In vivo delivery, Cas9 immunogenicity, off-target editing

**Bioingeniería muscular | Muscle bioengineering:**
- Organoides musculares a partir de iPSCs: Modelado de enfermedades in vitro | Muscle organoids from iPSCs: In vitro disease modeling
- Scaffolds de matriz descelularizada + MSCs/mioblastos para reparación de defectos volumétricos | Decellularized matrix scaffolds + MSCs/myoblasts for volumetric defect repair
- Ingeniería de parches cardíacos: Cardiomiocitos derivados de iPSCs + biomateriales → terapia de IC | Cardiac patches: iPSC-derived cardiomyocytes + biomaterials → HF therapy
- Músculo cultivado in vitro con inervación y vascularización funcional | In vitro cultured muscle with functional innervation and vascularization`,
      keyTerms: [
        { term: 'atrofia perifascicular | perifascicular atrophy', definition: 'Hallazgo histopatológico patognomónico de dermatomiositis; atrofia de fibras en la periferia de los fascículos por microangiopatía mediada por complemento | Pathognomonic dermatomyositis finding; fiber atrophy at fascicle periphery from complement-mediated microangiopathy' },
        { term: 'PAX3-FOXO1', definition: 'Transcrito de fusión del rabdomiosarcoma alveolar por t(2;13); oncoproteína con actividad transcripcional aberrante; marcador pronóstico adverso | Alveolar rhabdomyosarcoma fusion transcript from t(2;13); aberrant transcriptional oncoprotein; adverse prognostic marker' },
        { term: 'anti-HMGCR', definition: 'Anticuerpo asociado a miopatía necrotizante inmunomediada, frecuentemente desencadenada por estatinas; la miopatía persiste tras suspender el fármaco | IMNM-associated antibody, frequently triggered by statins; myopathy persists after drug discontinuation' },
        { term: 'placofilina-2 (PKP2) | plakophilin-2', definition: 'Proteína desmosómica cuyas mutaciones causan ~40% de MAVD; alteran adhesión mecánica y señalización Wnt en cardiomiocitos | Desmosomal protein whose mutations cause ~40% of ARVC; disrupt mechanical adhesion and Wnt signaling in cardiomyocytes' },
        { term: 'switch fenotípico de CML | SMC phenotypic switch', definition: 'Transición de células de músculo liso vascular del fenotipo contráctil al sintético; evento clave en aterosclerosis y reestenosis | Transition of vascular SMCs from contractile to synthetic phenotype; key event in atherosclerosis and restenosis' },
        { term: 'miocardina | myocardin', definition: 'Coactivador transcripcional de SRF que mantiene el fenotipo contráctil diferenciado de las CML; su regulación negativa contribuye a la aterosclerosis | SRF transcriptional coactivator maintaining differentiated contractile SMC phenotype; its downregulation contributes to atherosclerosis' },
      ],
      clinicalNotes: `Correlaciones histopatológicas clínicas avanzadas | Advanced clinical histopathological correlations:

1. **Miopatías inflamatorias**: Los anticuerpos específicos de miositis (MSA) predicen fenotipo clínico, pronóstico y riesgo de malignidad (anti-TIF1-γ en DM del adulto: screening oncológico). La biopsia muscular con IHQ para MHC-I, C5b-9, CD8 es indispensable para clasificación. | MSAs predict clinical phenotype, prognosis, and malignancy risk. Muscle biopsy with IHC is indispensable for classification.

2. **Rabdomiosarcoma**: La detección de PAX3/PAX7-FOXO1 por FISH/RT-PCR es mandatoria; el status de fusión supera al subtipo histológico como predictor pronóstico. La miogenina nuclear difusa en IHQ sugiere ARMS fusión-positivo. | PAX3/PAX7-FOXO1 detection is mandatory; fusion status surpasses histological subtype as prognostic predictor.

3. **MAVD**: Diagnóstico integrado (Task Force 2010): ECG, RM cardíaca (reemplazo fibroadiposo en secuencias T1), genética (panel desmosómico), y biopsia endomiocárdica (reservada para casos equívocos). | Integrated diagnosis: ECG, cardiac MRI, genetics, and endomyocardial biopsy (reserved for equivocal cases).

4. **Terapia génica muscular**: Delandistrogene moxeparvovec (Elevidys) es la primera terapia génica aprobada para DMD; entrega micro-distrofina vía AAV-rh74. Resultados funcionales mixtos; durabilidad a largo plazo en investigación. | First gene therapy approved for DMD; delivers micro-dystrophin via AAV-rh74. Mixed functional results; long-term durability under investigation.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ross-histology-muscle',
      type: 'textbook',
      title: 'Ross Histología: Texto y Atlas',
      authors: ['Pawlina W', 'Ross MH'],
      source: 'Wolters Kluwer',
      chapter: 'Tejido Muscular',
    },
    {
      id: 'guyton-muscle-physiology',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: 'Contraction of Skeletal Muscle',
    },
    {
      id: 'robbins-muscle',
      type: 'textbook',
      title: 'Robbins & Cotran Patología Estructural y Funcional',
      authors: ['Kumar V', 'Abbas AK', 'Aster JC'],
      source: 'Elsevier',
      chapter: 'Peripheral Nerve and Skeletal Muscle',
    },
    {
      id: 'who-soft-tissue-rms',
      type: 'guideline',
      title: 'WHO Classification of Tumours: Soft Tissue and Bone Tumours, 5th Edition',
      source: 'World Health Organization / IARC',
    },
    {
      id: 'braunwald-heart-disease',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine',
      authors: ['Libby P', 'Bonow RO', 'Mann DL', 'Tomaselli GF'],
      source: 'Elsevier',
      chapter: 'Cardiomyopathies',
    },
  ],

  crossReferences: [
    { targetId: 'histology-tejido-epitelial', targetType: 'topic', relationship: 'sibling', label: 'Tejido Epitelial | Epithelial Tissue' },
    { targetId: 'histology-tejido-conectivo', targetType: 'topic', relationship: 'sibling', label: 'Tejido Conectivo | Connective Tissue' },
    { targetId: 'histology-tejido-nervioso', targetType: 'topic', relationship: 'sibling', label: 'Tejido Nervioso | Nervous Tissue' },
    { targetId: 'histology-histologia-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Histología Cardiovascular' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Sistema Cardiovascular | Cardiovascular System' },
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'related', label: 'Sistema Musculoesquelético | Musculoskeletal System' },
    { targetId: 'condition-muscular-dystrophy', targetType: 'condition', relationship: 'see-also', label: 'Distrofia Muscular | Muscular Dystrophy' },
    { targetId: 'condition-cardiomyopathy', targetType: 'condition', relationship: 'see-also', label: 'Miocardiopatías | Cardiomyopathies' },
  ],

  tags: {
    systems: ['musculoskeletal', 'cardiovascular'],
    topics: ['histology', 'muscle tissue', 'physiology', 'pathology', 'neuromuscular'],
    keywords: ['músculo esquelético', 'skeletal muscle', 'músculo liso', 'smooth muscle', 'músculo cardíaco', 'cardiac muscle', 'sarcómero', 'sarcomere', 'distrofina', 'dystrophin', 'troponina', 'troponin', 'miopatía', 'rabdomiosarcoma'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'medicine', 'surgery', 'neurology'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tejidoMuscularContent;
