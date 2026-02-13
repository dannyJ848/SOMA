/**
 * Histología Cardiovascular | Cardiovascular Histology - Comprehensive Content
 *
 * Covers heart wall layers, artery/vein/capillary histology, and vascular pathology.
 * Spanish-first bilingual content for the SOMA medical education platform.
 */

import { EducationalContent } from '../types';

export const histologiaCardiovascularContent: EducationalContent = {
  id: 'histology-histologia-cardiovascular',
  type: 'topic',
  name: 'Histología Cardiovascular | Cardiovascular Histology',
  nameEs: 'Histología Cardiovascular',
  alternateNames: ['Histología del corazón y vasos', 'Heart and vessel histology', 'Histología vascular', 'Vascular histology'],
  fmaId: 'FMA:7161',

  levels: {
    1: {
      level: 1,
      summary: 'El corazón y los vasos sanguíneos están hechos de capas especiales de tejido que les permiten bombear sangre y transportarla por todo el cuerpo, como tuberías con paredes inteligentes. | The heart and blood vessels are made of special tissue layers that let them pump blood and transport it through the whole body, like pipes with smart walls.',
      explanation: `## Las Tuberías Inteligentes de Tu Cuerpo | Your Body's Smart Pipes

Imagina que tu sistema circulatorio es como el sistema de tuberías de un edificio muy grande. Pero a diferencia de las tuberías normales, estas están vivas y pueden cambiar de tamaño. | Imagine your circulatory system is like the plumbing in a very large building. But unlike normal pipes, these are alive and can change size!

**El corazón: La bomba central | The heart: The central pump**

El corazón tiene tres capas, como un sándwich: | The heart has three layers, like a sandwich:
1. **Endocardio** (capa interna) - El "papel tapiz" liso por dentro, para que la sangre fluya sin pegarse | The smooth "wallpaper" inside, so blood flows without sticking
2. **Miocardio** (capa media) - El "músculo" grueso que se contrae para bombear | The thick "muscle" that contracts to pump
3. **Epicardio** (capa externa) - La "envoltura" protectora del corazón | The protective "wrapping" of the heart

**Los vasos sanguíneos: Tres tipos de "tuberías" | Blood vessels: Three types of "pipes"**

1. **Arterias** - Las tuberías de alta presión que llevan sangre del corazón al cuerpo | High-pressure pipes carrying blood from heart to body
   - Paredes gruesas y elásticas | Thick, elastic walls
   - Como una manguera de bombero: resiste la presión | Like a fire hose: resists pressure

2. **Venas** - Las tuberías de baja presión que devuelven la sangre al corazón | Low-pressure pipes returning blood to heart
   - Paredes más delgadas que las arterias | Thinner walls than arteries
   - Tienen "puertas de un solo sentido" (válvulas) para que la sangre no regrese | Have "one-way doors" (valves) so blood doesn't go backwards

3. **Capilares** - Las tuberías más pequeñitas, tan delgadas que solo pasa una célula a la vez | The tiniest pipes, so thin only one cell passes at a time
   - Aquí se intercambian oxígeno, nutrientes y desechos | Where oxygen, nutrients, and waste are exchanged
   - Como una red de riego que llega a cada planta (célula) del jardín | Like an irrigation network reaching every plant (cell) in the garden

**Cada vaso sanguíneo tiene tres capas, como un tubo dentro de un tubo dentro de un tubo | Each blood vessel has three layers, like a tube within a tube within a tube:**
- **Íntima** (interior): Capa lisa | Smooth inner layer
- **Media** (medio): Músculo y material elástico | Muscle and elastic material
- **Adventicia** (exterior): Tejido protector | Protective tissue`,
      keyTerms: [
        { term: 'arteria | artery', definition: 'Vaso sanguíneo con paredes gruesas y elásticas que lleva sangre del corazón al resto del cuerpo | Blood vessel with thick, elastic walls carrying blood from the heart to the rest of the body' },
        { term: 'vena | vein', definition: 'Vaso sanguíneo con paredes más delgadas que devuelve la sangre al corazón; tiene válvulas | Blood vessel with thinner walls returning blood to the heart; has valves' },
        { term: 'capilar | capillary', definition: 'El vaso sanguíneo más pequeño; donde se intercambia oxígeno y nutrientes con las células | The smallest blood vessel; where oxygen and nutrients are exchanged with cells' },
        { term: 'miocardio | myocardium', definition: 'La capa muscular gruesa del corazón que lo hace bombear | The thick muscle layer of the heart that makes it pump' },
      ],
      analogies: [
        'Las arterias son como mangueras de bombero: gruesas y resistentes para aguantar la presión. Las venas son como mangueras de jardín: más delgadas y flexibles. | Arteries are like fire hoses: thick and strong to handle pressure. Veins are like garden hoses: thinner and more flexible.',
        'Los capilares son como las últimas ramitas de un árbol: son tan delgados que los nutrientes pueden salir a las células (las hojas). | Capillaries are like the tiniest twigs of a tree: so thin that nutrients can exit to the cells (the leaves).',
        'Las válvulas de las venas son como las puertas del metro: solo dejan pasar en una dirección. | Vein valves are like subway doors: they only let you pass in one direction.',
      ],
      examples: [
        'Cuando te toman la presión arterial, miden qué tan fuerte empuja la sangre contra las paredes de las arterias. | When they take your blood pressure, they measure how strongly blood pushes against artery walls.',
        'Las várices ocurren cuando las válvulas de las venas de las piernas dejan de funcionar bien y la sangre se acumula. | Varicose veins happen when leg vein valves stop working well and blood pools.',
      ],
    },
    2: {
      level: 2,
      summary: 'La pared del corazón (endocardio, miocardio, epicardio) y de los vasos (íntima, media, adventicia) tienen capas histológicas específicas que determinan sus propiedades mecánicas; las arterias se clasifican en elásticas, musculares y arteriolas, mientras que los capilares tienen tres tipos según su permeabilidad (continuo, fenestrado, sinusoidal). | The heart wall (endocardium, myocardium, epicardium) and vessel wall (intima, media, adventitia) have specific histological layers determining their mechanical properties; arteries are classified as elastic, muscular, and arterioles, while capillaries have three types by permeability (continuous, fenestrated, sinusoidal).',
      explanation: `## Histología del Corazón y los Vasos | Heart and Vessel Histology

### Pared del Corazón | Heart Wall

**1. Endocardio | Endocardium:**
- Endotelio (epitelio plano simple) sobre tejido conectivo subendotelial | Endothelium (simple squamous) over subendothelial connective tissue
- Capa subendocárdica: Contiene el sistema de conducción (fibras de Purkinje) | Subendocardial layer: Contains conduction system (Purkinje fibers)
- Las válvulas cardíacas son extensiones del endocardio | Heart valves are endocardial extensions

**2. Miocardio | Myocardium:**
- Músculo cardíaco estriado con discos intercalares | Striated cardiac muscle with intercalated discs
- La capa más gruesa; responsable de la contracción | Thickest layer; responsible for contraction
- Ventrículo izquierdo: Más grueso (~1.5 cm) porque bombea a todo el cuerpo | Left ventricle: Thicker (~1.5 cm) because it pumps to whole body
- Rica red capilar (un capilar por cada fibra muscular) | Rich capillary network (one capillary per muscle fiber)

**3. Epicardio (pericardio visceral) | Epicardium (visceral pericardium):**
- Mesotelio (epitelio plano simple) sobre tejido conectivo | Mesothelium over connective tissue
- Contiene tejido adiposo, arterias coronarias y venas | Contains adipose tissue, coronary arteries, and veins
- Produce líquido pericárdico para lubricación | Produces pericardial fluid for lubrication

### Estructura General de los Vasos Sanguíneos | General Blood Vessel Structure

**Tres túnicas (capas) | Three tunics (layers):**

| Túnica | Componentes | Función |
|--------|------------|---------|
| Íntima | Endotelio + membrana basal + subendotelio | Superficie antitromótica, regulación del tono vascular |
| Media | Músculo liso + fibras elásticas | Contracción/relajación, mantiene presión |
| Adventicia | Tejido conectivo + vasa vasorum + nervios | Soporte, nutrición de la pared externa |

**Láminas elásticas | Elastic laminae:**
- Lámina elástica interna (LEI): Entre íntima y media | Between intima and media
- Lámina elástica externa (LEE): Entre media y adventicia | Between media and adventitia

### Tipos de Arterias | Artery Types

**1. Arterias elásticas (de conducción) | Elastic (conducting) arteries:**
- Aorta, carótidas, ilíacas, pulmonares | Aorta, carotid, iliac, pulmonary
- Media con muchas láminas elásticas concéntricas (40-70 capas en aorta) | Media with many concentric elastic laminae
- Función: Efecto Windkessel (amortiguan la presión sistólica) | Windkessel effect (dampen systolic pressure)

**2. Arterias musculares (de distribución) | Muscular (distributing) arteries:**
- Radial, femoral, coronarias, cerebrales | Radial, femoral, coronary, cerebral
- Media predominantemente de músculo liso (hasta 40 capas) | Media predominantly smooth muscle
- LEI y LEE prominentes | Prominent IEL and EEL
- Función: Regulan el flujo sanguíneo a órganos específicos | Regulate blood flow to specific organs

**3. Arteriolas | Arterioles:**
- Diámetro: 10-100 μm | Diameter: 10-100 μm
- 1-3 capas de músculo liso | 1-3 layers of smooth muscle
- **Principales vasos de resistencia** (controlan la presión arterial) | Main resistance vessels (control blood pressure)

### Tipos de Capilares | Capillary Types

| Tipo | Estructura | Ubicación | Permeabilidad |
|------|-----------|-----------|---------------|
| Continuo | Endotelio sin poros; uniones estrechas | Músculo, pulmón, SNC (BHE) | Baja |
| Fenestrado | Poros de 60-80 nm con diafragma | Riñón (glomérulo), intestino, glándulas endocrinas | Intermedia |
| Sinusoidal (discontinuo) | Grandes espacios entre células; membrana basal discontinua | Hígado, bazo, médula ósea | Alta |

### Venas | Veins

- Paredes más delgadas que arterias del mismo calibre | Thinner walls than arteries of same caliber
- Más luz (lumen) en relación a la pared | Larger lumen relative to wall
- Menos músculo liso y tejido elástico en la media | Less smooth muscle and elastic tissue in media
- Válvulas venosas: Pliegues de la íntima que impiden reflujo | Venous valves: Intimal folds preventing reflux
- Vénulas: Sitio principal de migración leucocitaria (diapédesis) en inflamación | Venules: Main site of leukocyte migration in inflammation

### Comparación Arteria vs. Vena | Artery vs. Vein Comparison

| Característica | Arteria | Vena |
|---------------|---------|------|
| Pared | Gruesa | Delgada |
| Luz | Pequeña, circular | Grande, irregular |
| Músculo liso | Abundante | Escaso |
| Fibras elásticas | Abundantes | Escasas |
| Válvulas | No | Sí (excepto venas del tronco) |
| En corte histológico | Circular, colapsada parcialmente | Aplanada, colapsada |`,
      keyTerms: [
        { term: 'endotelio | endothelium', definition: 'Capa de células planas que reviste el interior de todos los vasos sanguíneos y el corazón; mantiene la sangre fluida y regula el tono vascular | Flat cell layer lining all blood vessels and the heart; keeps blood fluid and regulates vascular tone', pronunciation: 'en-doh-TEH-lee-oh' },
        { term: 'túnica media | tunica media', definition: 'Capa muscular y elástica de los vasos sanguíneos; más gruesa en arterias que en venas; controla el diámetro del vaso | Muscular and elastic layer of blood vessels; thicker in arteries; controls vessel diameter' },
        { term: 'vasa vasorum', definition: 'Pequeños vasos sanguíneos que nutren la pared de los vasos grandes; literalmente "vasos de los vasos" | Small blood vessels nourishing the wall of large vessels; literally "vessels of the vessels"', pronunciation: 'VAH-sah vah-SOH-rum' },
        { term: 'arteria elástica | elastic artery', definition: 'Arteria grande (aorta, carótida) con muchas capas elásticas que amortiguan la presión del latido cardíaco (efecto Windkessel) | Large artery with many elastic layers dampening heartbeat pressure (Windkessel effect)' },
        { term: 'capilar fenestrado | fenestrated capillary', definition: 'Capilar con poros en su pared que permiten el paso de moléculas; se encuentra en riñón, intestino y glándulas endocrinas | Capillary with wall pores allowing molecule passage; found in kidney, intestine, and endocrine glands' },
        { term: 'capilar sinusoidal | sinusoidal capillary', definition: 'Capilar con grandes espacios entre sus células y membrana basal discontinua; máxima permeabilidad; presente en hígado, bazo y médula ósea | Capillary with large spaces between cells and discontinuous basement membrane; maximum permeability; in liver, spleen, bone marrow' },
      ],
      analogies: [
        'La aorta es como un globo grueso que se infla con cada latido y luego se desinfla lentamente para mantener el flujo: eso es el efecto Windkessel. | The aorta is like a thick balloon that inflates with each heartbeat and slowly deflates to maintain flow: that is the Windkessel effect.',
        'Las arteriolas son como las llaves de agua de tu casa: controlando cuánto se abren o cierran, regulan cuánta sangre llega a cada parte del cuerpo. | Arterioles are like your house faucets: by controlling how open or closed they are, they regulate how much blood reaches each body part.',
      ],
      examples: [
        'En el riñón, los capilares del glomérulo son fenestrados para permitir la filtración de la sangre y producir orina. | In the kidney, glomerular capillaries are fenestrated to allow blood filtration and produce urine.',
        'En el hígado, los sinusoides tienen grandes espacios para que las proteínas plasmáticas producidas por los hepatocitos pasen fácilmente a la sangre. | In the liver, sinusoids have large spaces so plasma proteins produced by hepatocytes pass easily into the blood.',
      ],
    },
    3: {
      level: 3,
      summary: 'La histología cardiovascular detallada revela un endotelio funcionalmente activo que regula hemostasia, tono vascular (NO, endotelina) e inflamación; la composición específica de la matriz y el músculo liso varía entre segmentos vasculares, y la organización miocárdica incluye cardiomiocitos, fibroblastos cardíacos, células endoteliales y una especializada red de conducción. | Detailed cardiovascular histology reveals a functionally active endothelium regulating hemostasis, vascular tone (NO, endothelin), and inflammation; specific matrix and smooth muscle composition varies between vascular segments, and myocardial organization includes cardiomyocytes, cardiac fibroblasts, endothelial cells, and a specialized conduction network.',
      explanation: `## Histología Cardiovascular Detallada | Detailed Cardiovascular Histology

### El Endotelio como Órgano Funcional | Endothelium as a Functional Organ

**Funciones endoteliales | Endothelial functions:**

1. **Regulación del tono vascular | Vascular tone regulation:**
   - **Vasodilatadores**: Óxido nítrico (NO, vía eNOS), prostaciclina (PGI₂), EDHF | Vasodilators: NO, PGI₂, EDHF
   - **Vasoconstrictores**: Endotelina-1 (ET-1), tromboxano A₂ (TXA₂), angiotensina II local | Vasoconstrictors: ET-1, TXA₂, local Ang II
   - **eNOS**: L-arginina + O₂ → NO + L-citrulina (cofactor: BH4) | eNOS: L-arginine + O₂ → NO + L-citrulline
   - NO activa guanilato ciclasa soluble en CML → cGMP → relajación | NO activates soluble guanylate cyclase in SMC → cGMP → relaxation
   - Sildenafil inhibe PDE5 (degrada cGMP) → prolonga vasodilatación | Sildenafil inhibits PDE5 → prolongs vasodilation

2. **Regulación hemostática | Hemostatic regulation:**
   - **Antitrombótica** (estado basal): Trombomodulina, heparán sulfato, TFPI, t-PA, NO, PGI₂ | Antithrombotic (baseline): Thrombomodulin, heparan sulfate, TFPI, t-PA, NO, PGI₂
   - **Protrombótica** (activación): Factor von Willebrand (FvW), factor tisular (TF), PAI-1 | Prothrombotic (activation): vWF, TF, PAI-1
   - FvW almacenado en cuerpos de Weibel-Palade; se libera con estrés/inflamación | vWF stored in Weibel-Palade bodies; released with stress/inflammation

3. **Inflamación y permeabilidad | Inflammation and permeability:**
   - Activación: IL-1, TNF-α → NF-κB → E-selectina, VCAM-1, ICAM-1 | Activation: IL-1, TNF-α → NF-κB → E-selectina, VCAM-1, ICAM-1
   - Cascada de adhesión leucocitaria: Rolling (selectinas) → adhesión (integrinas) → diapédesis (PECAM-1) | Leukocyte adhesion cascade: Rolling → adhesion → diapedesis

### Histología Arterial Detallada | Detailed Arterial Histology

**Aorta (arteria elástica) | Aorta (elastic artery):**
- Íntima: Endotelio + subendotelio con colágeno y fibras elásticas | Intima: Endothelium + subendothelium
- Media: 40-70 unidades lamelares elásticas (elastina + colágeno + CML + GAGs) | Media: 40-70 elastic lamellar units
- Cada unidad lamelar: ~2 mm de espesor; nutrida por difusión hasta ~29 laminillas, luego requiere vasa vasorum | Each lamellar unit ~2mm; diffusion-fed up to ~29 lamellae, then requires vasa vasorum
- Adventicia: Relativamente delgada; vasa vasorum, nervorum | Adventitia: Relatively thin

**Arteria coronaria (muscular) | Coronary artery (muscular):**
- LEI prominente y ondulada (colapsa en cortes histológicos) | Prominent, undulated IEL
- Media: 20-40 capas de CML con colágeno y elastina intercalados | Media: 20-40 SMC layers with intercalated collagen and elastin
- LEE discernible | Discernible EEL
- Adventicia con vasa vasorum y nervios simpáticos/parasimpáticos | Adventitia with vasa vasorum and sympathetic/parasympathetic nerves

### Organización Celular del Miocardio | Myocardial Cellular Organization

**Composición celular | Cellular composition:**
- Cardiomiocitos: ~30% de las células pero ~70-80% del volumen | Cardiomyocytes: ~30% of cells but ~70-80% of volume
- Células endoteliales: ~45% de las células totales | Endothelial cells: ~45% of total cells
- Fibroblastos cardíacos: ~15-20% | Cardiac fibroblasts: ~15-20%
- Células inmunes residentes (macrófagos): ~5-10% | Resident immune cells (macrophages): ~5-10%

**Sistema de conducción cardíaco | Cardiac conduction system:**
- Nódulo SA: Células P (pacemaker) y células transicionales; irrigado por arteria del nódulo SA (rama de la RCA en 60%) | SA node: P cells and transitional cells
- Nódulo AV: Estructura similar al SA; retrasa el impulso ~0.1 s | AV node: Similar to SA; delays impulse ~0.1 s
- Haz de His y ramas: Cardiomiocitos especializados en el tabique interventricular | Bundle of His and branches: Specialized cardiomyocytes in interventricular septum
- Fibras de Purkinje: Células grandes, pálidas, ricas en glucógeno, con pocas miofibrillas; conducción rápida (4 m/s) | Purkinje fibers: Large, pale, glycogen-rich cells with few myofibrils; fast conduction

### Válvulas Cardíacas | Heart Valves

**Estructura trilaminar | Trilaminar structure:**
- **Fibrosa**: Colágeno denso (lado de presión alta: aórtico/ventricular) | Dense collagen (high-pressure side)
- **Espongiosa**: Proteoglucanos y GAGs (amortiguación) | Proteoglycans and GAGs (shock absorption)
- **Ventricular/auricular**: Fibras elásticas (lado de baja presión) | Elastic fibers (low-pressure side)

- Cubiertas por endotelio en ambas superficies | Covered by endothelium on both surfaces
- Avascular: Nutrición por difusión (espesor <1 mm) | Avascular: Diffusion-fed (thickness <1 mm)
- Células intersticiales valvulares (VICs): Fibroblastos especializados que mantienen la matriz | Valvular interstitial cells: Specialized fibroblasts maintaining matrix

### Microcirculación | Microcirculation

**Unidad microvascular | Microvascular unit:**
- Arteriola terminal → metaarteriola → esfínter precapilar → capilares → vénulas postcapilares | Terminal arteriole → metarteriole → precapillary sphincter → capillaries → postcapillary venules
- Esfínter precapilar: CML única que controla flujo individual a cada capilar | Precapillary sphincter: Single SMC controlling individual capillary flow
- Vénulas postcapilares: Sitio primario de extravasación leucocitaria | Postcapillary venules: Primary site of leukocyte extravasation

**Pericitos | Pericytes:**
- Células murales que rodean capilares y vénulas | Mural cells surrounding capillaries and venules
- Comparten membrana basal con el endotelio | Share basement membrane with endothelium
- Regulan permeabilidad, flujo sanguíneo, angiogénesis | Regulate permeability, blood flow, angiogenesis
- En el SNC: Componente esencial de la BHE | In CNS: Essential BBB component`,
      keyTerms: [
        { term: 'óxido nítrico (NO) | nitric oxide', definition: 'Vasodilatador endotelial producido por eNOS a partir de L-arginina; activa guanilato ciclasa → cGMP en el músculo liso; protege contra trombosis y aterosclerosis | Endothelial vasodilator produced by eNOS from L-arginine; activates guanylate cyclase → cGMP in smooth muscle; protects against thrombosis and atherosclerosis' },
        { term: 'endotelina-1 (ET-1) | endothelin-1', definition: 'Vasoconstrictor más potente producido por el endotelio; actúa sobre receptores ETA (CML, vasoconstricción) y ETB (endotelio, libera NO); elevada en hipertensión pulmonar | Most potent endothelium-produced vasoconstrictor; elevated in pulmonary hypertension' },
        { term: 'cuerpos de Weibel-Palade | Weibel-Palade bodies', definition: 'Organelos de almacenamiento exclusivos del endotelio que contienen factor von Willebrand y P-selectina; su exocitosis es la primera respuesta endotelial a la lesión | Endothelium-exclusive storage organelles containing vWF and P-selectin; their exocytosis is the first endothelial response to injury' },
        { term: 'unidad lamelar | lamellar unit', definition: 'Unidad estructural repetitiva de la arteria elástica: lámina elástica + CML + colágeno + GAGs; la aorta tiene 40-70 unidades | Repetitive structural unit of elastic artery: elastic lamina + SMC + collagen + GAGs; aorta has 40-70 units' },
        { term: 'fibras de Purkinje | Purkinje fibers', definition: 'Cardiomiocitos especializados en conducción: más grandes, pálidos, ricos en glucógeno, con pocas miofibrillas; conducen a 4 m/s (vs. 0.5 m/s en miocardio de trabajo) | Conduction-specialized cardiomyocytes: larger, pale, glycogen-rich, few myofibrils; conduct at 4 m/s' },
        { term: 'pericitos | pericytes', definition: 'Células murales que envuelven capilares y vénulas; regulan permeabilidad, flujo y angiogénesis; esenciales para la BHE y la estabilidad vascular | Mural cells wrapping capillaries and venules; regulate permeability, flow, and angiogenesis; essential for BBB and vascular stability' },
        { term: 'células intersticiales valvulares (VICs) | valvular interstitial cells', definition: 'Fibroblastos especializados que mantienen la matriz de las válvulas cardíacas; su diferenciación a miofibroblastos u osteoblastos contribuye a valvulopatía degenerativa | Specialized fibroblasts maintaining heart valve matrix; differentiation to myofibroblasts or osteoblasts contributes to degenerative valve disease' },
      ],
      clinicalNotes: 'La disfunción endotelial (↓NO, ↑ET-1, ↑ROS) es el evento inicial de la aterosclerosis. Los nitratos orgánicos (nitroglicerina) y el sildenafil actúan amplificando la vía del NO/cGMP. La arteriosclerosis de Mönckeberg es la calcificación de la media de arterias musculares, diferente de la aterosclerosis (íntima). Los aneurismas aórticos se asocian a degradación de elastina y colágeno de la media (MMPs). Los pericitos disfuncionales contribuyen a la retinopatía diabética (pérdida de pericitos → microaneurismas). | Endothelial dysfunction is the initiating event of atherosclerosis. Organic nitrates and sildenafil amplify the NO/cGMP pathway. Mönckeberg arteriosclerosis is medial calcification of muscular arteries. Aortic aneurysms are associated with medial elastin/collagen degradation. Dysfunctional pericytes contribute to diabetic retinopathy.',
    },
    4: {
      level: 4,
      summary: 'La biología vascular avanzada integra la heterogeneidad endotelial, la mecanobiología del shear stress y la mecanotransducción endotelial, la aterogénesis como proceso histopatológico progresivo, la remodelación vascular, y los mecanismos moleculares de angiogénesis y linfangiogénesis. | Advanced vascular biology integrates endothelial heterogeneity, shear stress mechanobiology and endothelial mechanotransduction, atherogenesis as a progressive histopathological process, vascular remodeling, and molecular mechanisms of angiogenesis and lymphangiogenesis.',
      explanation: `## Biología Vascular Avanzada | Advanced Vascular Biology

### Heterogeneidad Endotelial | Endothelial Heterogeneity

**Endotelio arterial vs. venoso | Arterial vs. venous endothelium:**
- **Arterial**: EphB4−/ephrinB2+; alto shear stress; más NO; fenotipo antiaterotrombótico | High shear stress; more NO; antiatherothrombotic phenotype
- **Venoso**: EphB4+/ephrinB2−; bajo shear stress; más vWF y P-selectina; fenotipo proinflamatorio | Low shear stress; more vWF and P-selectin; proinflammatory phenotype
- **Sinusoidal hepático**: LYVE-1+, stabilin-2+; sin membrana basal; fenotipo tolerogénico | Without basement membrane; tolerogenic phenotype
- **BHE cerebral**: Uniones estrechas (claudina-5), transportadores de eflujo (P-gp, BCRP); mínima transcitosis | Tight junctions, efflux transporters; minimal transcytosis

**Transcriptómica de célula única endotelial | Endothelial single-cell transcriptomics:**
- Ha revelado >15 subpoblaciones endoteliales diferentes según órgano y segmento vascular | Has revealed >15 different endothelial subpopulations by organ and vascular segment
- Endotelio "activado" vs. "quiescente" con perfiles transcripcionales distintos | "Activated" vs. "quiescent" with distinct transcriptional profiles

### Mecanotransducción Endotelial | Endothelial Mechanotransduction

**Shear stress y aterosclerosis | Shear stress and atherosclerosis:**
- **Shear stress laminar alto** (>15 dynas/cm²): Protector → KLF2/4 → eNOS↑, trombomodulina↑, NF-κB↓ | Protective → KLF2/4 → eNOS↑, thrombomodulin↑, NF-κB↓
- **Shear stress bajo/oscilatorio** (<4 dynas/cm²): Proaterogénico → NF-κB↑, VCAM-1↑, ROS↑ | Proatherogenic → NF-κB↑, VCAM-1↑, ROS↑
- Las placas ateroscleróticas se forman preferentemente en bifurcaciones y curvaturas donde el flujo es perturbado | Plaques preferentially form at bifurcations and curvatures

**Mecanosensores | Mechanosensors:**
- Glicocálix endotelial: Capa de glucoproteínas que detecta flujo; degradado en sepsis → fuga vascular | Endothelial glycocalyx: Flow-sensing glycoprotein layer; degraded in sepsis → vascular leak
- Complejo PECAM-1/VE-cadherina/VEGFR2: Sensor mecánico principal en uniones | Main mechanical sensor at junctions
- Piezo1: Canal iónico mecanosensible; detecta shear stress → Ca²⁺ → eNOS | Mechanosensitive ion channel; detects shear stress
- Cilios primarios endoteliales: Detectan flujo en segmentos de bajo shear | Detect flow in low-shear segments

### Aterogénesis: Histopatología Progresiva | Atherogenesis: Progressive Histopathology

**Clasificación de la AHA (lesiones tipo I-VI) | AHA classification:**

1. **Tipo I (lesión inicial)**: Células espumosas aisladas en la íntima; macrófagos con LDL oxidado | Isolated foam cells in intima
2. **Tipo II (estría grasa)**: Acúmulos de células espumosas → estría grasa (fatty streak); visible macroscópicamente; REVERSIBLE | Foam cell accumulations; REVERSIBLE
3. **Tipo III (preateroma)**: Gotas lipídicas extracelulares debajo de la estría | Extracellular lipid droplets below the streak
4. **Tipo IV (ateroma)**: Núcleo lipídico bien definido; CML migran y proliferan | Well-defined lipid core; SMC migration/proliferation
5. **Tipo V (fibroateroma)**: Capa fibrosa sobre el núcleo lipídico; CML + colágeno | Fibrous cap over lipid core; SMC + collagen
   - Va: Núcleo lipídico predominante
   - Vb: Calcificación predominante
   - Vc: Fibrosis predominante
6. **Tipo VI (lesión complicada)**: Ruptura/erosión de placa, hemorragia intraplaca, trombosis | Plaque rupture/erosion, intraplaque hemorrhage, thrombosis

**Placa vulnerable vs. estable | Vulnerable vs. stable plaque:**

| Característica | Placa vulnerable | Placa estable |
|---------------|-----------------|---------------|
| Capa fibrosa | Delgada (<65 μm) | Gruesa |
| Núcleo lipídico | Grande (>40% área) | Pequeño |
| Macrófagos | Abundantes | Escasos |
| CML en la capa fibrosa | Pocas, apoptóticas | Abundantes, viables |
| Colágeno | Degradado (MMPs↑) | Abundante |
| Neovascularización | Presente (vasa plaquorum) | Mínima |

### Remodelación Vascular | Vascular Remodeling

**Remodelación arterial | Arterial remodeling:**
- **Remodelación compensatoria (positiva/expansiva)**: La arteria se agranda para mantener la luz a pesar de la placa (ley de Glagov) | Artery enlarges to maintain lumen despite plaque
- **Remodelación constrictiva (negativa)**: La arteria se encoge → estenosis → isquemia | Artery shrinks → stenosis → ischemia
- Remodelación post-angioplastia: Hiperplasia neointimal + remodelación constrictiva → reestenosis | Post-angioplasty: Neointimal hyperplasia + constrictive remodeling → restenosis
- Stents liberadores de fármacos (sirolimus, everolimus): Inhiben proliferación de CML | Drug-eluting stents: Inhibit SMC proliferation

### Angiogénesis y Linfangiogénesis | Angiogenesis and Lymphangiogenesis

**Angiogénesis por brote (sprouting) | Sprouting angiogenesis:**
1. Hipoxia → HIF-1α → VEGF-A | Hypoxia → HIF-1α → VEGF-A
2. VEGF-A se une a VEGFR2 en células "tip" → migración, filopodios | VEGF-A binds VEGFR2 in tip cells → migration, filopodia
3. Células "tip" seleccionadas por Notch-DLL4: DLL4 alta → tip cell; Notch activado → stalk cell | Tip/stalk selection by Notch-DLL4
4. Células "stalk" proliferan → elongación del brote | Stalk cells proliferate → sprout elongation
5. Anastomosis → formación de lumen → flujo sanguíneo | Anastomosis → lumen formation → blood flow
6. Estabilización: PDGF-BB recluta pericitos; Ang1/Tie2 madura vasos | Stabilization: PDGF-BB recruits pericytes

**Linfangiogénesis | Lymphangiogenesis:**
- VEGF-C/VEGF-D → VEGFR3 (en células endoteliales linfáticas) | VEGF-C/D → VEGFR3 in lymphatic ECs
- Prox1: Factor de transcripción maestro de identidad linfática | Master transcription factor of lymphatic identity
- Vasos linfáticos tumorales: Vía de metástasis → anti-VEGFR3 como terapia | Tumor lymphatics: Metastasis route → anti-VEGFR3 therapy`,
      keyTerms: [
        { term: 'KLF2 | Krüppel-like factor 2', definition: 'Factor de transcripción inducido por shear stress laminar que activa eNOS y trombomodulina y suprime NF-κB; mediador central de la ateroprotección por flujo | Laminar shear stress-induced transcription factor activating eNOS and thrombomodulin, suppressing NF-κB; central mediator of flow-dependent atheroprotection' },
        { term: 'glicocálix endotelial | endothelial glycocalyx', definition: 'Capa de glucoproteínas, proteoglucanos y GAGs en la superficie luminal endotelial; sensor de flujo y barrera de permeabilidad; su degradación en sepsis y diabetes causa fuga vascular | Glycoprotein, proteoglycan, and GAG layer on luminal endothelial surface; flow sensor and permeability barrier; degradation in sepsis and diabetes causes vascular leak' },
        { term: 'Piezo1', definition: 'Canal iónico mecanosensible endotelial que transforma la fuerza del flujo sanguíneo en señales de Ca²⁺ → activación de eNOS; blanco terapéutico emergente en hipertensión | Endothelial mechanosensitive ion channel converting blood flow force into Ca²⁺ signals → eNOS activation; emerging therapeutic target in hypertension' },
        { term: 'placa vulnerable | vulnerable plaque', definition: 'Placa aterosclerótica con capa fibrosa delgada (<65 μm), núcleo lipídico grande, y abundantes macrófagos; alto riesgo de ruptura → trombosis → infarto | Atherosclerotic plaque with thin fibrous cap, large lipid core, abundant macrophages; high rupture risk → thrombosis → infarction' },
        { term: 'Notch-DLL4', definition: 'Vía de señalización que selecciona células "tip" vs. "stalk" durante la angiogénesis por brote; DLL4 alta → célula líder (tip); Notch activado en vecinas → célula seguidora (stalk) | Signaling pathway selecting tip vs. stalk cells during sprouting angiogenesis' },
        { term: 'ley de Glagov | Glagov\'s law', definition: 'Observación de que las arterias se remodelan expansivamente para compensar el crecimiento de la placa aterosclerótica, manteniendo la luz hasta que la placa ocupa ~40% del área de la LEI | Observation that arteries remodel expansively to compensate for plaque growth, maintaining the lumen until plaque occupies ~40% of IEL area' },
      ],
      clinicalNotes: 'El shear stress bajo/oscilatorio explica por qué la aterosclerosis es una enfermedad focal (bifurcaciones, curvaturas). Comprender la placa vulnerable ha llevado al uso de terapia intensiva con estatinas para estabilizar placas (↑colágeno, ↓inflamación, ↓núcleo lipídico). Los stents liberadores de fármacos han reducido la reestenosis de ~30% (stents metálicos) a <10%. Los inhibidores de VEGF (bevacizumab, ramucirumab) son antiangiogénicos usados en oncología, pero causan hipertensión y alteran la cicatrización. El glicocálix endotelial degradado en sepsis es un blanco terapéutico emergente. | Low/oscillatory shear stress explains why atherosclerosis is a focal disease. Understanding vulnerable plaque has led to intensive statin therapy. Drug-eluting stents reduced restenosis from ~30% to <10%. VEGF inhibitors are antiangiogenics used in oncology.',
    },
    5: {
      level: 5,
      summary: 'La histopatología cardiovascular clínica avanzada integra la vasculopatía del trasplante, la patología de dispositivos cardiovasculares implantados, la clasificación molecular de tumores cardíacos, biomarcadores de imagen para caracterización de placa in vivo, y las fronteras de la ingeniería de tejidos cardiovasculares y corazones bioartificiales. | Advanced clinical cardiovascular histopathology integrates transplant vasculopathy, implanted cardiovascular device pathology, molecular cardiac tumor classification, imaging biomarkers for in vivo plaque characterization, and the frontiers of cardiovascular tissue engineering and bioartificial hearts.',
      explanation: `## Histopatología Cardiovascular Clínica Avanzada | Advanced Clinical Cardiovascular Histopathology

### Biopsia Endomiocárdica: Indicaciones y Hallazgos | Endomyocardial Biopsy: Indications and Findings

**Indicaciones principales | Main indications:**
- Rechazo postrasplante cardíaco (gold standard) | Post-cardiac transplant rejection
- Miocarditis fulminante/sospechada | Fulminant/suspected myocarditis
- Miocardiopatía restrictiva/infiltrativa | Restrictive/infiltrative cardiomyopathy
- Tumores cardíacos | Cardiac tumors

**Rechazo del trasplante cardíaco (clasificación ISHLT) | Cardiac transplant rejection:**

| Grado | Hallazgo | Tratamiento |
|-------|---------|-------------|
| 0R | Sin rechazo | Observación |
| 1R (leve) | Infiltrado perivascular/intersticial focal; sin necrosis | Ajustar inmunosupresión |
| 2R (moderado) | Infiltrado multifocal con daño miocitario | Pulso de metilprednisolona |
| 3R (severo) | Infiltrado difuso con necrosis miocitaria | ATG/OKT3, plasmaféresis |
| pAMR (mediado por anticuerpos) | C4d+ en capilares, CD68+ intravascular | Plasmaféresis, IVIg, rituximab |

**Vasculopatía del aloinjerto cardíaco (CAV) | Cardiac allograft vasculopathy:**
- Hiperplasia neointimal difusa y concéntrica (no focal como aterosclerosis) | Diffuse, concentric neointimal hyperplasia
- Afecta todo el árbol coronario (epicárdico + intramural) | Affects entire coronary tree
- Patogénesis: Rechazo crónico mediado por anticuerpos anti-HLA donante → disfunción endotelial → proliferación neointimal | Chronic antibody-mediated rejection → endothelial dysfunction → neointimal proliferation
- Diagnóstico: Angiografía coronaria anual + IVUS (más sensible que angiografía) | Diagnosis: Annual coronary angiography + IVUS

### Patología de Dispositivos Cardiovasculares | Cardiovascular Device Pathology

**Válvulas protésicas | Prosthetic valves:**
- **Biológicas (porcinas/bovinas)**: Degeneración calcificante progresiva; vida media 10-20 años; histología: calcificación, fibrosis, trombos | Progressive calcific degeneration; 10-20 year lifespan
- **Mecánicas**: No degeneran pero requieren anticoagulación de por vida; histología: pannus (tejido fibroso que crece sobre el anillo) | Don't degenerate but require lifelong anticoagulation; pannus growth
- **TAVI (implante transcatéter)**: Trombosis subclínica de valvas (HALT/RELM en TC); significado clínico en debate | Subclinical leaflet thrombosis; clinical significance debated

**Stents coronarios | Coronary stents:**
- **Stent metálico (BMS)**: Endotelización completa en 3-6 meses; hiperplasia neointimal en 20-30% | Complete endothelialization in 3-6 months; neointimal hyperplasia 20-30%
- **Stent liberador de fármacos (DES)**: Retraso en endotelización → riesgo de trombosis tardía; necesidad de DAPT prolongada | Delayed endothelialization → late thrombosis risk; prolonged DAPT needed
- **Neoaterosclerosis intra-stent**: Infiltración de células espumosas y placas vulnerables DENTRO del stent; causa de fallo tardío | Foam cell infiltration within stent; cause of late failure
- OCT (tomografía de coherencia óptica): Visualiza endotelización, neoaterosclerosis in vivo | Visualizes endothelialization, neoatherosclerosis in vivo

### Tumores Cardíacos | Cardiac Tumors

**Tumores cardíacos primarios (raros; 0.02% en autopsias) | Primary cardiac tumors:**

| Tumor | Frecuencia | Ubicación | Histología |
|-------|-----------|-----------|------------|
| Mixoma | 50% de primarios | Aurícula izquierda (70%) | Células estrelladas en estroma mixoide; vasos, hemosiderina |
| Fibroelastoma papilar | 2° más frecuente | Válvulas aórtica/mitral | Proyecciones papilares con centro de tejido conectivo |
| Rabdomioma | Más frecuente en niños | Ventrículos | Células "araña" con glucógeno; asociado a esclerosis tuberosa (TSC1/TSC2) |
| Angiosarcoma | Sarcoma cardíaco más frecuente | Aurícula derecha | Canales vasculares irregulares; CD31+, ERG+ |

**Metástasis cardíacas | Cardiac metastases:**
- 20-40× más frecuentes que tumores primarios | 20-40× more frequent than primary tumors
- Pericardio >> miocardio > endocardio | Pericardium >> myocardium > endocardium
- Tumores con mayor afinidad cardíaca: Melanoma, pulmón, mama, linfoma | Tumors with highest cardiac affinity: Melanoma, lung, breast, lymphoma

### Caracterización de Placa In Vivo | In Vivo Plaque Characterization

**Modalidades de imagen intravascular | Intravascular imaging modalities:**
- **IVUS**: Resolución ~150 μm; mide carga de placa, remodelación | Measures plaque burden, remodeling
- **OCT**: Resolución ~10 μm; visualiza capa fibrosa, trombo, macrófagos | Visualizes fibrous cap, thrombus, macrophages
- **NIRS (espectroscopía infrarroja)**: Detecta núcleo lipídico (lipid core burden index, LCBI) | Detects lipid core

**Imagen molecular de placa | Molecular plaque imaging:**
- PET con ¹⁸F-FDG: Inflamación de la placa (macrófagos activados) | Plaque inflammation
- PET con ¹⁸F-NaF: Microcalcificación activa (osteoblast-like activity) | Active microcalcification
- RM de alta resolución con gadolinio: Composición de placa carotídea (hemorragia intraplaca, núcleo lipídico) | Carotid plaque composition

### Fronteras: Ingeniería de Tejidos Cardiovasculares | Frontiers: Cardiovascular Tissue Engineering

**Válvulas cardíacas bioartificiales | Bioartificial heart valves:**
- Scaffolds de polímeros biodegradables + células autólogas (VICs, ECs) → recelularización | Biodegradable polymer scaffolds + autologous cells → recellularization
- Válvulas descelularizadas: Remoción celular preservando la MEC; recelularización con células del paciente | Decellularized valves: Cell removal preserving ECM; recellularization with patient cells
- Objetivo: Válvula con capacidad de crecimiento y remodelación (pediatría) | Goal: Valve with growth and remodeling capacity (pediatrics)

**Injertos vasculares de ingeniería tisular | Tissue-engineered vascular grafts:**
- iPSCs → diferenciación a CML y endotelio → siembra en scaffold tubular | iPSCs → SMC and endothelium differentiation → tubular scaffold seeding
- Bioimpresión 3D de vasos con perfusión funcional | 3D bioprinting of vessels with functional perfusion
- Humacyte (injerto vascular acelular): CML humanas cultivadas en scaffold → decelularización → injerto off-the-shelf; en ensayos clínicos para acceso vascular en hemodiálisis | Acellular vascular graft in clinical trials for hemodialysis access

**Corazón bioartificial | Bioartificial heart:**
- Corazón porcino descelularizado como scaffold → recelularización con iPSCs humanas | Decellularized porcine heart → recellularization with human iPSCs
- Organoides cardíacos (cardioids): Autoorganización de cardiomiocitos + endotelio + epicardio derivados de iPSCs | Cardiac organoids: Self-organization of iPSC-derived cardiomyocytes + endothelium + epicardium
- Bioimpresión 4D: Estructura + función temporal (contracción) | 4D bioprinting: Structure + temporal function (contraction)
- Desafío pendiente: Vascularización completa del constructo a escala de órgano | Pending challenge: Complete vascularization at organ scale`,
      keyTerms: [
        { term: 'vasculopatía del aloinjerto (CAV) | cardiac allograft vasculopathy', definition: 'Enfermedad vascular crónica del corazón trasplantado con hiperplasia neointimal difusa y concéntrica; causa principal de muerte tardía postrasplante; diagnóstico con IVUS | Chronic vascular disease of transplanted heart with diffuse concentric neointimal hyperplasia; main cause of late post-transplant death' },
        { term: 'neoaterosclerosis intra-stent | in-stent neoatherosclerosis', definition: 'Desarrollo de placas ateroscleróticas dentro del stent coronario; mecanismo de fallo muy tardío (>1 año); diagnosticada por OCT como placas lipídicas o calcificadas en la neointima | Atherosclerotic plaque development within coronary stent; very late failure mechanism; diagnosed by OCT' },
        { term: 'OCT (tomografía de coherencia óptica) | optical coherence tomography', definition: 'Imagen intravascular con resolución de ~10 μm; gold standard para medir grosor de capa fibrosa, detectar erosión/ruptura de placa y evaluar endotelización de stent | Intravascular imaging with ~10 μm resolution; gold standard for fibrous cap thickness, plaque erosion/rupture detection, and stent endothelialization assessment' },
        { term: 'mixoma cardíaco | cardiac myxoma', definition: 'Tumor cardíaco primario más frecuente; 70% en aurícula izquierda; células estrelladas en estroma mixoide con vasos; puede causar embolización o simular estenosis mitral | Most frequent primary cardiac tumor; 70% in left atrium; stellate cells in myxoid stroma; can cause embolization or mimic mitral stenosis' },
        { term: 'C4d', definition: 'Producto de degradación del complemento depositado en capilares miocárdicos; marcador diagnóstico de rechazo humoral (mediado por anticuerpos) del trasplante cardíaco | Complement degradation product deposited in myocardial capillaries; diagnostic marker of humoral (antibody-mediated) cardiac transplant rejection' },
        { term: 'cardioids', definition: 'Organoides cardíacos autoorganizados derivados de iPSCs que recapitulan la estructura multicelular y la función contráctil del corazón in vitro; plataforma emergente para modelado de enfermedades y pruebas de fármacos | Self-organized cardiac organoids from iPSCs recapitulating multicellular structure and contractile function in vitro; emerging platform for disease modeling and drug testing' },
      ],
      clinicalNotes: `Correlaciones histopatológicas cardiovasculares clínicas avanzadas | Advanced clinical cardiovascular histopathological correlations:

1. **Biopsia endomiocárdica**: La clasificación ISHLT 2004 (revisada 2013) es el estándar para monitorizar rechazo. C4d+ identifica rechazo humoral que requiere tratamiento dirigido (plasmaféresis + IVIg + rituximab). GeneExpression Profiling (AlloMap) puede reducir la frecuencia de biopsias en pacientes de bajo riesgo. | ISHLT classification is the standard for rejection monitoring. C4d+ identifies humoral rejection requiring targeted treatment.

2. **Neoaterosclerosis**: Es la causa más frecuente de fallo muy tardío de stent (>5 años); la OCT ha revolucionado su detección; terapia intensiva con estatinas y, en casos seleccionados, re-intervención con stent o bypass. | Most frequent cause of very late stent failure; OCT has revolutionized detection.

3. **Tumores cardíacos**: El rabdomioma cardíaco en niños obliga al screening de esclerosis tuberosa (mutaciones TSC1/TSC2); muchos regresan espontáneamente. Los mixomas requieren excisión quirúrgica por riesgo embólico y pueden recurrir (complejo de Carney: PRKAR1A). | Cardiac rhabdomyoma in children mandates tuberous sclerosis screening. Myxomas require surgical excision for embolic risk.

4. **Imagen molecular de placa**: ¹⁸F-NaF PET identifica placas con microcalcificación activa ("hot plaques") que tienen mayor riesgo de eventos cardiovasculares; potencial para guiar la intensificación terapéutica personalizada más allá del score de calcio. | ¹⁸F-NaF PET identifies plaques with active microcalcification with higher cardiovascular event risk.

5. **Ingeniería tisular cardiovascular**: Los injertos vasculares de Humacyte (ATEV) han demostrado patencia comparable a injertos de PTFE en acceso de hemodiálisis en ensayos fase III; la recelularización in vivo por células del huésped es un hallazgo clave. | Humacyte vascular grafts have shown patency comparable to PTFE in hemodialysis access trials.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ross-histology-cv',
      type: 'textbook',
      title: 'Ross Histología: Texto y Atlas',
      authors: ['Pawlina W', 'Ross MH'],
      source: 'Wolters Kluwer',
      chapter: 'Sistema Cardiovascular',
    },
    {
      id: 'junqueira-cv',
      type: 'textbook',
      title: 'Histología Básica: Texto y Atlas',
      authors: ['Junqueira LC', 'Carneiro J', 'Abrahamsohn P'],
      source: 'McGraw-Hill',
      chapter: 'Sistema Circulatorio',
    },
    {
      id: 'robbins-cv-pathology',
      type: 'textbook',
      title: 'Robbins & Cotran Patología Estructural y Funcional',
      authors: ['Kumar V', 'Abbas AK', 'Aster JC'],
      source: 'Elsevier',
      chapter: 'Blood Vessels and The Heart',
    },
    {
      id: 'braunwald-vascular',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine',
      authors: ['Libby P', 'Bonow RO', 'Mann DL', 'Tomaselli GF'],
      source: 'Elsevier',
      chapter: 'Vascular Biology and Atherosclerosis',
    },
    {
      id: 'ishlt-rejection-grading',
      type: 'guideline',
      title: 'The International Society for Heart and Lung Transplantation: Revised Grading of Cardiac Allograft Rejection',
      source: 'Journal of Heart and Lung Transplantation',
      authors: ['Stewart S', 'et al.'],
    },
    {
      id: 'libby-atherosclerosis',
      type: 'journal',
      title: 'The changing landscape of atherosclerosis',
      authors: ['Libby P'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/s41586-021-03392-8',
    },
  ],

  crossReferences: [
    { targetId: 'histology-tejido-epitelial', targetType: 'topic', relationship: 'related', label: 'Tejido Epitelial (Endotelio) | Epithelial Tissue (Endothelium)' },
    { targetId: 'histology-tejido-muscular', targetType: 'topic', relationship: 'related', label: 'Tejido Muscular (Músculo cardíaco y liso) | Muscle Tissue (Cardiac and smooth)' },
    { targetId: 'histology-tejido-conectivo', targetType: 'topic', relationship: 'related', label: 'Tejido Conectivo (Matriz vascular) | Connective Tissue (Vascular matrix)' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Sistema Cardiovascular | Cardiovascular System' },
    { targetId: 'condition-atherosclerosis', targetType: 'condition', relationship: 'see-also', label: 'Aterosclerosis | Atherosclerosis' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'see-also', label: 'Enfermedad Coronaria | Coronary Artery Disease' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'see-also', label: 'Insuficiencia Cardíaca | Heart Failure' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['histology', 'cardiovascular', 'vascular biology', 'pathology', 'endothelium'],
    keywords: ['endotelio', 'endothelium', 'arteria', 'artery', 'vena', 'vein', 'capilar', 'capillary', 'miocardio', 'myocardium', 'aterosclerosis', 'atherosclerosis', 'angiogénesis', 'angiogenesis', 'stent', 'trasplante cardíaco'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'medicine', 'surgery', 'cardiology'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default histologiaCardiovascularContent;
