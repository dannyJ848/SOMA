// =============================================================================
// SOMA Dermatologia Detallada Enciclopedia — Spanish-First Bilingual
// Detailed Dermatology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface DermatologiaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  causasEs: string;
  causasEn: string;
  diagnosticoEs: string;
  diagnosticoEn: string;
  tratamientoEs: string;
  tratamientoEn: string;
  prevencionEs: string;
  prevencionEn: string;
  factoresRiesgoEs: string[];
  factoresRiesgoEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const DERMATOLOGIA_ENTRIES: DermatologiaEntry[] = JSON.parse(`[
  {
    "id": "dermatitis-atopica",
    "nombreEs": "Dermatitis Atopica (Eccema)",
    "nombreEn": "Atopic Dermatitis (Eczema)",
    "categoriaEs": "Inflamatoria",
    "categoriaEn": "Inflammatory",
    "descripcionEs": "La dermatitis atopica es una enfermedad inflamatoria cronica de la piel caracterizada por brotes recurrentes de prurito intenso, enrojecimiento y descamacion. Es la forma mas comun de eccema y afecta hasta al 20% de los ninos y al 3% de los adultos a nivel mundial. La enfermedad resulta de una interaccion compleja entre la disfuncion de la barrera cutanea, la desregulacion inmunologica y factores ambientales. Los pacientes con dermatitis atopica frecuentemente presentan la triada atopica junto con asma y rinitis alergica. La deficiencia de filagrina, una proteina estructural clave de la epidermis, juega un papel central en la patogenesis al comprometer la integridad de la barrera cutanea y permitir la penetracion de alergenos e irritantes.",
    "descripcionEn": "Atopic dermatitis is a chronic inflammatory skin disease characterized by recurrent flares of intense itching, redness, and scaling. It is the most common form of eczema, affecting up to 20% of children and 3% of adults worldwide. The disease results from a complex interplay between skin barrier dysfunction, immune dysregulation, and environmental factors. Patients with atopic dermatitis frequently present the atopic triad alongside asthma and allergic rhinitis. Deficiency of filaggrin, a key structural protein of the epidermis, plays a central role in pathogenesis by compromising skin barrier integrity and allowing penetration of allergens and irritants.",
    "sintomasEs": [
      "Prurito intenso que empeora por la noche e interfiere con el sueno",
      "Piel seca, escamosa y agrietada de forma generalizada",
      "Placas eritematosas con bordes mal definidos",
      "Engrosamiento de la piel (liquenificacion) por rascado cronico",
      "Vesiculas pequenas que pueden supurar y formar costras en fases agudas",
      "Excoriaciones lineales por rascado repetitivo",
      "Afectacion tipica en pliegues de codos, rodillas, cuello y munecas",
      "Piel hiperpigmentada o hipopigmentada en areas afectadas cronicamente",
      "Dermatitis de manos con fisuras dolorosas"
    ],
    "sintomasEn": [
      "Intense itching that worsens at night and interferes with sleep",
      "Dry, scaly, and cracked skin in a generalized pattern",
      "Erythematous plaques with poorly defined borders",
      "Skin thickening (lichenification) from chronic scratching",
      "Small vesicles that may ooze and crust during acute flares",
      "Linear excoriations from repetitive scratching",
      "Typical involvement of elbow creases, knees, neck, and wrists",
      "Hyperpigmented or hypopigmented skin in chronically affected areas",
      "Hand dermatitis with painful fissures"
    ],
    "causasEs": "La dermatitis atopica es causada por una combinacion de factores geneticos, inmunologicos y ambientales. Las mutaciones en el gen de la filagrina (presente en hasta el 50% de los pacientes con DA moderada-severa) alteran la barrera cutanea. El sistema inmune muestra una respuesta Th2 predominante con elevacion de IgE, IL-4, IL-13 e IL-31. Los desencadenantes ambientales incluyen alergenos (acaros del polvo, polen, caspa de mascotas), irritantes quimicos (jabones, detergentes, solventes), estres emocional, cambios de temperatura y humedad, infecciones cutaneas (especialmente Staphylococcus aureus que coloniza la piel del 90% de los pacientes) y ciertos alimentos en lactantes.",
    "causasEn": "Atopic dermatitis is caused by a combination of genetic, immunological, and environmental factors. Mutations in the filaggrin gene (present in up to 50% of patients with moderate-to-severe AD) impair the skin barrier. The immune system shows a predominant Th2 response with elevation of IgE, IL-4, IL-13, and IL-31. Environmental triggers include allergens (dust mites, pollen, pet dander), chemical irritants (soaps, detergents, solvents), emotional stress, temperature and humidity changes, skin infections (especially Staphylococcus aureus which colonizes the skin of 90% of patients), and certain foods in infants.",
    "diagnosticoEs": "El diagnostico es clinico basado en los criterios de Hanifin y Rajka, que incluyen prurito, morfologia y distribucion tipica, curso cronico recidivante e historia personal o familiar de atopia. No existe una prueba de laboratorio especifica para confirmar el diagnostico. El nivel serico de IgE esta elevado en el 80% de los pacientes pero no es especifico. La biopsia cutanea rara vez es necesaria pero muestra espongiosis e infiltrado perivascular de linfocitos y eosinofilos. Se utilizan escalas como el SCORAD y el EASI para evaluar la severidad. Las pruebas de parche pueden ayudar a identificar dermatitis de contacto superpuesta.",
    "diagnosticoEn": "Diagnosis is clinical based on the Hanifin and Rajka criteria, which include pruritus, typical morphology and distribution, chronic relapsing course, and personal or family history of atopy. There is no specific laboratory test to confirm the diagnosis. Serum IgE level is elevated in 80% of patients but is not specific. Skin biopsy is rarely needed but shows spongiosis and perivascular infiltrate of lymphocytes and eosinophils. Scales such as SCORAD and EASI are used to assess severity. Patch testing may help identify superimposed contact dermatitis.",
    "tratamientoEs": "El tratamiento se basa en un enfoque escalonado. La base es la restauracion de la barrera cutanea con emolientes aplicados al menos dos veces al dia (ceramidas, vaselina). Para brotes leves a moderados se usan corticosteroides topicos de baja a mediana potencia (hidrocortisona 1%, mometasona). Los inhibidores de calcineurina topicos (tacrolimus, pimecrolimus) son alternativas para zonas sensibles como la cara. El crisaborol (inhibidor de PDE4) es otra opcion topica. Para casos moderados-severos, la fototerapia con UVB de banda estrecha es efectiva. Los inmunosupresores sistemicos incluyen ciclosporina, metotrexato y azatioprina. Los biologicos han revolucionado el tratamiento: dupilumab (anti-IL4/IL13) es el tratamiento biologico de primera linea aprobado para mayores de 6 meses. Los inhibidores de JAK orales (abrocitinib, upadacitinib) y topicos (ruxolitinib) representan las terapias mas recientes. Los antihistaminicos sedantes pueden ayudar con el prurito nocturno.",
    "tratamientoEn": "Treatment is based on a stepwise approach. The foundation is skin barrier restoration with emollients applied at least twice daily (ceramides, petrolatum). For mild to moderate flares, low to medium potency topical corticosteroids (hydrocortisone 1%, mometasone) are used. Topical calcineurin inhibitors (tacrolimus, pimecrolimus) are alternatives for sensitive areas like the face. Crisaborole (PDE4 inhibitor) is another topical option. For moderate-to-severe cases, narrowband UVB phototherapy is effective. Systemic immunosuppressants include cyclosporine, methotrexate, and azathioprine. Biologics have revolutionized treatment: dupilumab (anti-IL4/IL13) is the first-line biologic treatment approved for ages 6 months and older. Oral JAK inhibitors (abrocitinib, upadacitinib) and topical (ruxolitinib) represent the newest therapies. Sedating antihistamines may help with nighttime pruritus.",
    "prevencionEs": "La prevencion se centra en mantener la barrera cutanea intacta y evitar desencadenantes conocidos. Aplicar emolientes inmediatamente despues del bano (regla de los 3 minutos). Usar jabones suaves sin fragancias ni sulfatos. Mantener la temperatura ambiente fresca y estable. Usar ropa de algodon y evitar lana y fibras sinteticas. Lavar la ropa nueva antes de usarla. Mantener las unas cortas para minimizar el dano por rascado. Control ambiental de acaros del polvo con fundas antialacaros para almohadas y colchones. Manejar el estres con tecnicas de relajacion. En lactantes de alto riesgo, la aplicacion temprana de emolientes desde el nacimiento puede reducir la incidencia.",
    "prevencionEn": "Prevention focuses on maintaining an intact skin barrier and avoiding known triggers. Apply emollients immediately after bathing (3-minute rule). Use mild soaps without fragrances or sulfates. Maintain a cool and stable room temperature. Wear cotton clothing and avoid wool and synthetic fibers. Wash new clothes before wearing. Keep fingernails short to minimize scratching damage. Environmental control of dust mites with allergen-proof covers for pillows and mattresses. Manage stress with relaxation techniques. In high-risk infants, early emollient application from birth may reduce incidence.",
    "factoresRiesgoEs": [
      "Historia familiar de atopia (eccema, asma, rinitis alergica)",
      "Mutaciones en el gen de la filagrina",
      "Vivir en climas frios y secos",
      "Vivir en zonas urbanas con alta contaminacion",
      "Exposicion temprana a antibioticos en la infancia",
      "Nivel socioeconomico alto (hipotesis de la higiene)",
      "Sexo femenino (ligeramente mayor prevalencia)",
      "Nacimiento por cesarea"
    ],
    "factoresRiesgoEn": [
      "Family history of atopy (eczema, asthma, allergic rhinitis)",
      "Filaggrin gene mutations",
      "Living in cold and dry climates",
      "Living in urban areas with high pollution",
      "Early antibiotic exposure in infancy",
      "Higher socioeconomic status (hygiene hypothesis)",
      "Female sex (slightly higher prevalence)",
      "Cesarean section birth"
    ],
    "cuandoConsultarEs": "Consulte a un dermatologo si el prurito interfiere con el sueno o las actividades diarias, si aparecen signos de infeccion cutanea (costras amarillentas, pus, aumento del dolor, fiebre), si el eccema no mejora con tratamiento de venta libre en dos semanas, si se desarrollan lesiones extensas o generalizadas, si nota eccema herpetico (vesiculas agrupadas dolorosas sobre piel eczematosa — emergencia dermatologica), o si necesita corticosteroides topicos de forma continua por mas de dos semanas sin mejoria.",
    "cuandoConsultarEn": "Consult a dermatologist if itching interferes with sleep or daily activities, if signs of skin infection appear (yellowish crusts, pus, increased pain, fever), if eczema does not improve with over-the-counter treatment within two weeks, if extensive or generalized lesions develop, if you notice eczema herpeticum (grouped painful vesicles on eczematous skin — dermatologic emergency), or if you need continuous topical corticosteroids for more than two weeks without improvement."
  },
  {
    "id": "psoriasis",
    "nombreEs": "Psoriasis",
    "nombreEn": "Psoriasis",
    "categoriaEs": "Autoinmune",
    "categoriaEn": "Autoimmune",
    "descripcionEs": "La psoriasis es una enfermedad autoinmune cronica mediada por linfocitos T que afecta principalmente la piel pero tambien puede involucrar las articulaciones y otros organos. Se caracteriza por la hiperproliferacion acelerada de queratinocitos, donde el ciclo normal de recambio celular de 28 dias se reduce a solo 3-4 dias, produciendo la acumulacion de celulas cutaneas inmaduras en la superficie. Afecta aproximadamente al 2-3% de la poblacion mundial y tiene un impacto significativo en la calidad de vida. La psoriasis se asocia con comorbilidades importantes incluyendo artritis psoriasica, enfermedad cardiovascular, sindrome metabolico, depresion y enfermedad inflamatoria intestinal. El eje IL-23/Th17 es central en su patogenesis.",
    "descripcionEn": "Psoriasis is a chronic T-cell mediated autoimmune disease that primarily affects the skin but can also involve joints and other organs. It is characterized by accelerated hyperproliferation of keratinocytes, where the normal 28-day cell turnover cycle is reduced to just 3-4 days, producing accumulation of immature skin cells on the surface. It affects approximately 2-3% of the world population and has a significant impact on quality of life. Psoriasis is associated with important comorbidities including psoriatic arthritis, cardiovascular disease, metabolic syndrome, depression, and inflammatory bowel disease. The IL-23/Th17 axis is central to its pathogenesis.",
    "sintomasEs": [
      "Placas eritematosas bien definidas cubiertas de escamas plateadas gruesas",
      "Distribucion simetrica en codos, rodillas, cuero cabelludo y region sacra",
      "Fenomeno de Koebner: aparicion de lesiones en sitios de trauma cutaneo",
      "Signo de Auspitz: sangrado puntiforme al retirar las escamas",
      "Prurito de intensidad variable (presente en el 70-90% de los pacientes)",
      "Afectacion ungueal con pitting, onicorrexis, manchas de aceite y onicolisis",
      "Artritis psoriasica (dolor, rigidez e hinchazon articular en el 30%)",
      "Psoriasis inversa en pliegues cutaneos (ingles, axilas, submamario)",
      "Psoriasis gutata con multiples lesiones pequenas en gota tras infeccion estreptococica"
    ],
    "sintomasEn": [
      "Well-defined erythematous plaques covered with thick silvery scales",
      "Symmetrical distribution on elbows, knees, scalp, and sacral region",
      "Koebner phenomenon: appearance of lesions at sites of skin trauma",
      "Auspitz sign: pinpoint bleeding upon scale removal",
      "Variable intensity pruritus (present in 70-90% of patients)",
      "Nail involvement with pitting, onychorrhexis, oil drop spots, and onycholysis",
      "Psoriatic arthritis (joint pain, stiffness, and swelling in 30%)",
      "Inverse psoriasis in skin folds (groin, axillae, inframammary)",
      "Guttate psoriasis with multiple small drop-like lesions after streptococcal infection"
    ],
    "causasEs": "La psoriasis es causada por una activacion aberrante del sistema inmune innato y adaptativo en individuos geneticamente predispuestos. Se han identificado mas de 80 loci geneticos de susceptibilidad, siendo PSORS1 en el cromosoma 6p21 (que contiene HLA-Cw6) el mas importante, presente en el 50% de los pacientes. Las celulas dendriticas plasmocitoides producen IFN-alfa que activa las celulas dendriticas mieloides, las cuales secretan IL-12 e IL-23. La IL-23 estimula los linfocitos Th17 a producir IL-17A, IL-17F e IL-22, que causan la hiperproliferacion de queratinocitos y la inflamacion cronica. Los desencadenantes incluyen infecciones (estreptococo), estres, farmacos (litio, betabloqueadores, antimalaricos), trauma cutaneo, tabaquismo y consumo excesivo de alcohol.",
    "causasEn": "Psoriasis is caused by aberrant activation of the innate and adaptive immune system in genetically predisposed individuals. More than 80 genetic susceptibility loci have been identified, with PSORS1 on chromosome 6p21 (containing HLA-Cw6) being the most important, present in 50% of patients. Plasmacytoid dendritic cells produce IFN-alpha that activates myeloid dendritic cells, which secrete IL-12 and IL-23. IL-23 stimulates Th17 lymphocytes to produce IL-17A, IL-17F, and IL-22, which cause keratinocyte hyperproliferation and chronic inflammation. Triggers include infections (streptococcus), stress, medications (lithium, beta-blockers, antimalarials), skin trauma, smoking, and excessive alcohol consumption.",
    "diagnosticoEs": "El diagnostico es principalmente clinico basado en la morfologia y distribucion tipica de las lesiones. La biopsia cutanea confirma el diagnostico mostrando hiperplasia epidermica regular (acantosis), paraqueratosis, ausencia de capa granulosa, microabscesos de Munro (neutrofilos en estrato corneo) y capilares dilatados en las papilas dermicas. La dermatoscopia muestra un patron vascular puntiforme sobre fondo rojo. Se evalua la severidad con el PASI (Psoriasis Area and Severity Index) y el BSA (Body Surface Area). Los estudios complementarios incluyen VES, PCR, acido urico (elevado en psoriasis extensa), perfil metabolico y screening de hepatitis para planificar tratamiento sistemico.",
    "diagnosticoEn": "Diagnosis is primarily clinical based on typical lesion morphology and distribution. Skin biopsy confirms the diagnosis showing regular epidermal hyperplasia (acanthosis), parakeratosis, absent granular layer, Munro microabscesses (neutrophils in stratum corneum), and dilated capillaries in dermal papillae. Dermoscopy shows a dotted vascular pattern over a red background. Severity is assessed with PASI (Psoriasis Area and Severity Index) and BSA (Body Surface Area). Complementary studies include ESR, CRP, uric acid (elevated in extensive psoriasis), metabolic profile, and hepatitis screening for planning systemic treatment.",
    "tratamientoEs": "El tratamiento sigue un enfoque escalonado segun la severidad. Para psoriasis leve (BSA <3%): corticosteroides topicos de mediana-alta potencia, analogos de vitamina D (calcipotriol), combinaciones de calcipotriol/betametasona, retinoides topicos (tazaroteno) e inhibidores de calcineurina para cara y pliegues. Para psoriasis moderada (BSA 3-10%): fototerapia UVB de banda estrecha (2-3 sesiones/semana), excimer laser para lesiones localizadas. Para psoriasis moderada-severa (BSA >10% o impacto significativo): metotrexato oral (primera linea sistemica convencional), ciclosporina (uso a corto plazo), acitretina, apremilast (inhibidor de PDE4). Terapias biologicas: anti-TNF (adalimumab, etanercept), anti-IL17 (secukinumab, ixekizumab, bimekizumab), anti-IL23 (guselkumab, risankizumab, tildrakizumab), anti-IL12/23 (ustekinumab). Los inhibidores de TYK2 (deucravacitinib) representan la mas reciente opcion oral.",
    "tratamientoEn": "Treatment follows a stepwise approach based on severity. For mild psoriasis (BSA <3%): medium-to-high potency topical corticosteroids, vitamin D analogs (calcipotriol), calcipotriol/betamethasone combinations, topical retinoids (tazarotene), and calcineurin inhibitors for face and folds. For moderate psoriasis (BSA 3-10%): narrowband UVB phototherapy (2-3 sessions/week), excimer laser for localized lesions. For moderate-to-severe psoriasis (BSA >10% or significant impact): oral methotrexate (first-line conventional systemic), cyclosporine (short-term use), acitretin, apremilast (PDE4 inhibitor). Biologic therapies: anti-TNF (adalimumab, etanercept), anti-IL17 (secukinumab, ixekizumab, bimekizumab), anti-IL23 (guselkumab, risankizumab, tildrakizumab), anti-IL12/23 (ustekinumab). TYK2 inhibitors (deucravacitinib) represent the newest oral option.",
    "prevencionEs": "No existe una forma de prevenir la aparicion de psoriasis en individuos geneticamente predispuestos, pero se pueden prevenir los brotes. Evitar el estres mediante tecnicas de manejo como meditacion, ejercicio y terapia cognitivo-conductual. No fumar y limitar el consumo de alcohol significativamente. Mantener un peso saludable ya que la obesidad empeora la psoriasis y reduce la respuesta al tratamiento. Evitar medicamentos desencadenantes cuando sea posible. Tratar prontamente las infecciones estreptococicas. Proteger la piel de traumatismos para evitar el fenomeno de Koebner. Mantener la piel hidratada. Exposicion solar moderada puede ser beneficiosa pero evitar quemaduras solares.",
    "prevencionEn": "There is no way to prevent psoriasis onset in genetically predisposed individuals, but flares can be prevented. Avoid stress through management techniques such as meditation, exercise, and cognitive-behavioral therapy. Do not smoke and significantly limit alcohol consumption. Maintain a healthy weight as obesity worsens psoriasis and reduces treatment response. Avoid trigger medications when possible. Promptly treat streptococcal infections. Protect skin from trauma to avoid the Koebner phenomenon. Keep skin moisturized. Moderate sun exposure may be beneficial but avoid sunburns.",
    "factoresRiesgoEs": [
      "Historia familiar de psoriasis (riesgo del 50% si ambos padres afectados)",
      "Portador de HLA-Cw6 (psoriasis tipo I de inicio temprano)",
      "Tabaquismo activo (duplica el riesgo)",
      "Obesidad e indice de masa corporal elevado",
      "Consumo excesivo de alcohol",
      "Estres psicologico cronico",
      "Infecciones estreptococicas recurrentes",
      "Uso de ciertos farmacos (litio, betabloqueadores, antimalaricos, IFN-alfa)"
    ],
    "factoresRiesgoEn": [
      "Family history of psoriasis (50% risk if both parents affected)",
      "HLA-Cw6 carrier (type I early-onset psoriasis)",
      "Active smoking (doubles the risk)",
      "Obesity and elevated body mass index",
      "Excessive alcohol consumption",
      "Chronic psychological stress",
      "Recurrent streptococcal infections",
      "Use of certain medications (lithium, beta-blockers, antimalarials, IFN-alpha)"
    ],
    "cuandoConsultarEs": "Consulte a un dermatologo si presenta placas cutaneas que no responden a hidratantes despues de dos semanas, si el prurito afecta su calidad de vida o sueno, si nota dolor, rigidez o hinchazon articular (posible artritis psoriasica — referencia urgente a reumatologia), si la psoriasis cubre mas del 10% de la superficie corporal, si desarrolla psoriasis pustulosa generalizada o eritrodermia (emergencia dermatologica), si experimenta depresion o ansiedad relacionada con la enfermedad, o si el tratamiento actual deja de ser efectivo.",
    "cuandoConsultarEn": "Consult a dermatologist if you have skin plaques unresponsive to moisturizers after two weeks, if itching affects your quality of life or sleep, if you notice joint pain, stiffness, or swelling (possible psoriatic arthritis — urgent rheumatology referral), if psoriasis covers more than 10% of body surface area, if you develop generalized pustular psoriasis or erythroderma (dermatologic emergency), if you experience disease-related depression or anxiety, or if current treatment is no longer effective."
  },
  {
    "id": "acne-vulgar",
    "nombreEs": "Acne Vulgar",
    "nombreEn": "Acne Vulgaris",
    "categoriaEs": "Inflamatoria",
    "categoriaEn": "Inflammatory",
    "descripcionEs": "El acne vulgar es una enfermedad inflamatoria cronica de la unidad pilosebcea que afecta a casi el 85% de los adolescentes y puede persistir en la edad adulta. Se origina por la interaccion de cuatro factores patogenicos principales: hiperproduccion de sebo estimulada por androgenos, hiperqueratinizacion folicular que obstruye el poro, colonizacion por Cutibacterium acnes (antes Propionibacterium acnes) y la respuesta inflamatoria subsecuente. El acne tiene un impacto psicologico significativo, asociandose con baja autoestima, ansiedad, depresion y aislamiento social. Puede dejar cicatrices permanentes si no se trata adecuadamente. Las formas severas como el acne noduloquístico y el acne fulminans requieren intervencion dermatologica especializada.",
    "descripcionEn": "Acne vulgaris is a chronic inflammatory disease of the pilosebaceous unit that affects nearly 85% of adolescents and can persist into adulthood. It originates from the interaction of four main pathogenic factors: androgen-stimulated sebum overproduction, follicular hyperkeratinization that obstructs the pore, colonization by Cutibacterium acnes (formerly Propionibacterium acnes), and the subsequent inflammatory response. Acne has significant psychological impact, being associated with low self-esteem, anxiety, depression, and social isolation. It can leave permanent scars if not adequately treated. Severe forms such as nodulocystic acne and acne fulminans require specialized dermatologic intervention.",
    "sintomasEs": [
      "Comedones abiertos (puntos negros) y cerrados (puntos blancos)",
      "Papulas inflamatorias rojas y dolorosas al tacto",
      "Pustulas con centro purulento amarillento-blanco",
      "Nodulos profundos, firmes y dolorosos mayores de 5mm",
      "Quistes fluctuantes con contenido purulento",
      "Hiperpigmentacion postinflamatoria (mas comun en pieles oscuras)",
      "Cicatrices atroficas (picahielo, onduladas, rodantes) y cicatrices hipertroficas",
      "Distribucion en cara (frente, mejillas, menton), espalda, pecho y hombros",
      "Brotes premenstruales en mujeres (acne hormonal)"
    ],
    "sintomasEn": [
      "Open comedones (blackheads) and closed comedones (whiteheads)",
      "Red inflammatory papules tender to touch",
      "Pustules with yellowish-white purulent center",
      "Deep, firm, painful nodules greater than 5mm",
      "Fluctuant cysts with purulent content",
      "Post-inflammatory hyperpigmentation (more common in darker skin)",
      "Atrophic scars (ice-pick, boxcar, rolling) and hypertrophic scars",
      "Distribution on face (forehead, cheeks, chin), back, chest, and shoulders",
      "Premenstrual flares in women (hormonal acne)"
    ],
    "causasEs": "El acne resulta de la convergencia de multiples factores. Los androgenos (testosterona y dihidrotestosterona) estimulan las glandulas sebaceas durante la pubertad, aumentando la produccion de sebo. La hiperqueratinizacion del infundibulo folicular forma el microcomedón, la lesion precursora. Cutibacterium acnes prolifera en el ambiente anaerobico rico en lipidos del foliculo obstruido, activando la inmunidad innata a traves de receptores TLR-2 y produccion de IL-1, IL-8, TNF-alfa y metaloproteinas de matriz. Los factores contribuyentes incluyen genetica (concordancia del 81% en gemelos identicos), dieta con alto indice glucemico, productos lacteos, estres (a traves del eje CRH-prolactina), cosmeticos comedogenicos, ciertos medicamentos (corticosteroides, litio, anticonvulsivos) y trastornos hormonales (sindrome de ovario poliquistico).",
    "causasEn": "Acne results from the convergence of multiple factors. Androgens (testosterone and dihydrotestosterone) stimulate sebaceous glands during puberty, increasing sebum production. Hyperkeratinization of the follicular infundibulum forms the microcomedo, the precursor lesion. Cutibacterium acnes proliferates in the anaerobic lipid-rich environment of the obstructed follicle, activating innate immunity through TLR-2 receptors and production of IL-1, IL-8, TNF-alpha, and matrix metalloproteinases. Contributing factors include genetics (81% concordance in identical twins), high glycemic index diet, dairy products, stress (through the CRH-prolactin axis), comedogenic cosmetics, certain medications (corticosteroids, lithium, anticonvulsants), and hormonal disorders (polycystic ovary syndrome).",
    "diagnosticoEs": "El diagnostico es clinico basado en la presencia de comedones, papulas, pustulas, nodulos o quistes en areas con alta densidad de glandulas sebaceas. Se clasifica por severidad: leve (comedones predominantes con pocas papulopustulas), moderado (numerosas papulopustulas con algunos nodulos) y severo (nodulos y quistes multiples, afectacion extensa). La escala de Global Acne Grading System (GAGS) o la clasificacion de Leeds son herramientas utiles. Los laboratorios no son rutinarios pero se solicitan en mujeres con signos de hiperandrogenismo: testosterona libre, DHEA-S, 17-hidroxiprogesterona y ecografia pelvica. Se debe descartar acne inducido por farmacos, rosácea, foliculitis y dermatitis perioral.",
    "diagnosticoEn": "Diagnosis is clinical based on the presence of comedones, papules, pustules, nodules, or cysts in areas with high sebaceous gland density. It is classified by severity: mild (predominantly comedones with few papulopustules), moderate (numerous papulopustules with some nodules), and severe (multiple nodules and cysts, extensive involvement). The Global Acne Grading System (GAGS) or Leeds classification are useful tools. Labs are not routine but are ordered in women with signs of hyperandrogenism: free testosterone, DHEA-S, 17-hydroxyprogesterone, and pelvic ultrasound. Drug-induced acne, rosacea, folliculitis, and perioral dermatitis should be ruled out.",
    "tratamientoEs": "Acne leve: retinoides topicos (adapaleno 0.1-0.3%, tretinoina) como base del tratamiento para normalizar la queratinizacion, combinados con peroxido de benzoilo (2.5-5%) que es antibacteriano y no genera resistencia. Acne moderado: agregar antibioticos topicos (clindamicina) siempre combinados con peroxido de benzoilo para prevenir resistencia, o antibioticos orales (doxiciclina 100mg/dia, minociclina) por periodos limitados de 3-4 meses. En mujeres: anticonceptivos orales combinados (etinilestradiol/drospirenona) o espironolactona (75-150mg/dia) como antiandrógeno. Acne severo: isotretinoina oral (0.5-1mg/kg/dia por 5-6 meses) es el unico tratamiento que actua sobre los cuatro mecanismos patogenicos y puede inducir remisiones prolongadas. Requiere monitoreo de lipidos, hepatico y prueba de embarazo mensual. Para cicatrices: peelings quimicos, microagujas, laser fraccionado, rellenos con acido hialuronico y subcision.",
    "tratamientoEn": "Mild acne: topical retinoids (adapalene 0.1-0.3%, tretinoin) as the foundation of treatment to normalize keratinization, combined with benzoyl peroxide (2.5-5%) which is antibacterial and does not generate resistance. Moderate acne: add topical antibiotics (clindamycin) always combined with benzoyl peroxide to prevent resistance, or oral antibiotics (doxycycline 100mg/day, minocycline) for limited periods of 3-4 months. In women: combined oral contraceptives (ethinylestradiol/drospirenone) or spironolactone (75-150mg/day) as antiandrogen. Severe acne: oral isotretinoin (0.5-1mg/kg/day for 5-6 months) is the only treatment that acts on all four pathogenic mechanisms and can induce prolonged remissions. Requires lipid, liver monitoring, and monthly pregnancy test. For scars: chemical peels, microneedling, fractional laser, hyaluronic acid fillers, and subcision.",
    "prevencionEs": "No es posible prevenir completamente el acne en individuos predispuestos, pero se puede reducir la severidad. Lavar la cara dos veces al dia con un limpiador suave (pH 5.5). No manipular ni exprimir las lesiones para evitar cicatrices e infeccion. Usar productos no comedogenicos y oil-free. Aplicar proteccion solar no comedogenica diariamente. Mantener una dieta con bajo indice glucemico rica en frutas, verduras y acidos grasos omega-3. Reducir el consumo de lacteos si se sospecha asociacion. Manejar el estres. Usar retinoides topicos como mantenimiento despues del tratamiento activo para prevenir recaidas. Cambiar fundas de almohada frecuentemente.",
    "prevencionEn": "It is not possible to completely prevent acne in predisposed individuals, but severity can be reduced. Wash face twice daily with a gentle cleanser (pH 5.5). Do not pick or squeeze lesions to avoid scars and infection. Use non-comedogenic and oil-free products. Apply non-comedogenic sunscreen daily. Maintain a low glycemic index diet rich in fruits, vegetables, and omega-3 fatty acids. Reduce dairy consumption if an association is suspected. Manage stress. Use topical retinoids as maintenance after active treatment to prevent relapse. Change pillowcases frequently.",
    "factoresRiesgoEs": [
      "Antecedentes familiares de acne severo",
      "Pubertad y cambios hormonales",
      "Sindrome de ovario poliquistico",
      "Uso de cosmeticos comedogenicos u oleosos",
      "Dieta con alto indice glucemico y exceso de lacteos",
      "Estres cronico",
      "Uso de esteroides anabolicos",
      "Exposicion ocupacional a aceites y grasas industriales"
    ],
    "factoresRiesgoEn": [
      "Family history of severe acne",
      "Puberty and hormonal changes",
      "Polycystic ovary syndrome",
      "Use of comedogenic or oily cosmetics",
      "High glycemic index diet and excess dairy",
      "Chronic stress",
      "Anabolic steroid use",
      "Occupational exposure to industrial oils and greases"
    ],
    "cuandoConsultarEs": "Consulte a un dermatologo si el acne no mejora despues de 8-12 semanas de tratamiento de venta libre, si presenta nodulos o quistes dolorosos profundos, si esta desarrollando cicatrices, si el acne causa angustia emocional significativa o afecta la autoestima, si es mujer con signos de exceso de androgenos (hirsutismo, irregularidades menstruales, caida del cabello), si sospecha acne inducido por medicamentos, o si desea discutir el uso de isotretinoina para casos resistentes.",
    "cuandoConsultarEn": "Consult a dermatologist if acne does not improve after 8-12 weeks of over-the-counter treatment, if you have deep painful nodules or cysts, if scarring is developing, if acne causes significant emotional distress or affects self-esteem, if you are a woman with signs of androgen excess (hirsutism, menstrual irregularities, hair loss), if drug-induced acne is suspected, or if you wish to discuss isotretinoin use for resistant cases."
  },
  {
    "id": "melanoma",
    "nombreEs": "Melanoma",
    "nombreEn": "Melanoma",
    "categoriaEs": "Oncologica",
    "categoriaEn": "Oncological",
    "descripcionEs": "El melanoma es el cancer de piel mas agresivo, originado en los melanocitos, las celulas productoras de pigmento. Aunque representa solo el 1% de los canceres cutaneos, es responsable de la gran mayoria de las muertes por cancer de piel. Su incidencia ha aumentado dramaticamente en las ultimas decadas, con mas de 300,000 casos nuevos anuales a nivel mundial. El melanoma tiene una alta capacidad metastasica, pudiendo diseminarse a ganglios linfaticos, pulmones, higado, cerebro y huesos. Sin embargo, la deteccion temprana ofrece tasas de supervivencia a 5 anos superiores al 99% en estadio I. Los avances recientes en inmunoterapia y terapia dirigida han revolucionado el pronostico del melanoma metastasico, transformando una enfermedad uniformemente fatal en una potencialmente curable.",
    "descripcionEn": "Melanoma is the most aggressive skin cancer, originating in melanocytes, the pigment-producing cells. Although it represents only 1% of skin cancers, it is responsible for the vast majority of skin cancer deaths. Its incidence has increased dramatically in recent decades, with over 300,000 new cases annually worldwide. Melanoma has a high metastatic capacity, potentially spreading to lymph nodes, lungs, liver, brain, and bones. However, early detection offers 5-year survival rates exceeding 99% in stage I. Recent advances in immunotherapy and targeted therapy have revolutionized the prognosis of metastatic melanoma, transforming a uniformly fatal disease into a potentially curable one.",
    "sintomasEs": [
      "Lesion pigmentada nueva o cambio en un lunar existente (regla ABCDE)",
      "Asimetria: una mitad no es igual a la otra",
      "Bordes irregulares, dentados, mal definidos o con muescas",
      "Color heterogeneo con multiples tonalidades (marron, negro, rojo, blanco, azul)",
      "Diametro mayor de 6mm (tamano de un borrador de lapiz)",
      "Evolucion: cualquier cambio en tamano, forma, color o sintomas",
      "Prurito, sangrado o ulceracion de una lesion pigmentada",
      "Signo del patito feo: lesion que se ve diferente a los demas lunares del paciente",
      "Melanoma amelanotico: nodulo rosado o rojo sin pigmento visible"
    ],
    "sintomasEn": [
      "New pigmented lesion or change in an existing mole (ABCDE rule)",
      "Asymmetry: one half is not equal to the other",
      "Irregular, jagged, poorly defined, or notched borders",
      "Heterogeneous color with multiple shades (brown, black, red, white, blue)",
      "Diameter greater than 6mm (size of a pencil eraser)",
      "Evolution: any change in size, shape, color, or symptoms",
      "Itching, bleeding, or ulceration of a pigmented lesion",
      "Ugly duckling sign: lesion that looks different from the patient's other moles",
      "Amelanotic melanoma: pink or red nodule without visible pigment"
    ],
    "causasEs": "El principal factor causal es la radiacion ultravioleta (UV) del sol y camas de bronceado artificial. La exposicion intermitente intensa (quemaduras solares, especialmente en la infancia y adolescencia) confiere mayor riesgo que la exposicion cronica. La radiacion UV causa dano directo al ADN de los melanocitos, generando mutaciones en genes criticos. La mutacion BRAF V600E esta presente en el 40-50% de los melanomas y activa la via de señalizacion MAPK/ERK de forma constitutiva. Otras mutaciones frecuentes incluyen NRAS (15-20%), NF1 (10-15%) y KIT (en melanomas acrales y mucosos). La inmunosupresion, el sindrome de nevus displasicos y la predisposicion genetica (mutaciones en CDKN2A, CDK4, MC1R) tambien contribuyen.",
    "causasEn": "The main causative factor is ultraviolet (UV) radiation from the sun and artificial tanning beds. Intense intermittent exposure (sunburns, especially during childhood and adolescence) confers greater risk than chronic exposure. UV radiation causes direct DNA damage in melanocytes, generating mutations in critical genes. The BRAF V600E mutation is present in 40-50% of melanomas and constitutively activates the MAPK/ERK signaling pathway. Other frequent mutations include NRAS (15-20%), NF1 (10-15%), and KIT (in acral and mucosal melanomas). Immunosuppression, dysplastic nevus syndrome, and genetic predisposition (CDKN2A, CDK4, MC1R mutations) also contribute.",
    "diagnosticoEs": "La dermatoscopia es la herramienta inicial clave que permite visualizar estructuras subsuperficiales y aumenta la precision diagnostica en un 30%. Toda lesion sospechosa debe ser biopsiada — biopsia excisional con margenes de 1-3mm es el estandar. La biopsia por afeitado o punch no es recomendable si se sospecha melanoma por la necesidad de medir la profundidad de Breslow. El informe patologico debe incluir: grosor de Breslow (principal factor pronostico), presencia de ulceracion, tasa mitotica, invasion linfovascular, estado de margenes y microsatelitosis. La estadificacion incluye biopsia de ganglio centinela para melanomas >0.8mm o con ulceracion, TAC/PET para estadios III-IV, y resonancia de cerebro. Biomarcadores sericos como LDH y S100B se elevan en enfermedad avanzada.",
    "diagnosticoEn": "Dermoscopy is the key initial tool that allows visualization of subsurface structures and increases diagnostic accuracy by 30%. All suspicious lesions must be biopsied — excisional biopsy with 1-3mm margins is the standard. Shave or punch biopsy is not recommended if melanoma is suspected due to the need to measure Breslow depth. The pathology report must include: Breslow thickness (main prognostic factor), presence of ulceration, mitotic rate, lymphovascular invasion, margin status, and microsatellitosis. Staging includes sentinel lymph node biopsy for melanomas >0.8mm or with ulceration, CT/PET for stages III-IV, and brain MRI. Serum biomarkers such as LDH and S100B are elevated in advanced disease.",
    "tratamientoEs": "El tratamiento depende del estadio. Melanoma in situ: escision con margenes de 5mm. Melanoma invasivo: escision amplia con margenes de 1cm (Breslow <=1mm) o 2cm (Breslow >2mm). La biopsia de ganglio centinela se realiza simultaneamente. Estadio III (afectacion ganglionar): linfadenectomia completa ya no es estandar; se prefiere terapia adyuvante con inhibidores de checkpoint inmune (nivolumab, pembrolizumab) por 1 ano o terapia dirigida BRAF/MEK (dabrafenib/trametinib) si la mutacion BRAF esta presente. Estadio IV (metastasico): inmunoterapia de primera linea con combinacion nivolumab + ipilimumab (anti-PD1 + anti-CTLA4) logra supervivencia a 5 anos del 50%. La terapia dirigida BRAF/MEK es alternativa con respuestas rapidas. La combinacion de inmunoterapia neoadyuvante esta emergiendo como nuevo paradigma. Radioterapia y cirugia de metastasis se usan en casos seleccionados.",
    "tratamientoEn": "Treatment depends on the stage. Melanoma in situ: excision with 5mm margins. Invasive melanoma: wide excision with 1cm margins (Breslow <=1mm) or 2cm (Breslow >2mm). Sentinel lymph node biopsy is performed simultaneously. Stage III (nodal involvement): complete lymphadenectomy is no longer standard; adjuvant therapy with immune checkpoint inhibitors (nivolumab, pembrolizumab) for 1 year or BRAF/MEK targeted therapy (dabrafenib/trametinib) if BRAF mutation is present is preferred. Stage IV (metastatic): first-line immunotherapy with nivolumab + ipilimumab combination (anti-PD1 + anti-CTLA4) achieves 5-year survival of 50%. BRAF/MEK targeted therapy is an alternative with rapid responses. Neoadjuvant immunotherapy combination is emerging as a new paradigm. Radiation and metastasis surgery are used in selected cases.",
    "prevencionEs": "La prevencion primaria es fundamental y puede prevenir la mayoria de los melanomas. Evitar la exposicion solar durante las horas pico (10am-4pm). Usar protector solar de amplio espectro SPF 30+ reaplicado cada 2 horas y despues de nadar o sudar. Usar ropa protectora, sombrero de ala ancha y gafas con proteccion UV. Nunca usar camas de bronceado artificial (aumentan el riesgo de melanoma un 75% antes de los 35 anos). Realizar autoexamenes mensuales de la piel (regla ABCDE y signo del patito feo). Examenes dermatologicos anuales con dermatoscopia, especialmente en individuos de alto riesgo. Fotografía corporal total de referencia en pacientes con multiples nevos atipicos.",
    "prevencionEn": "Primary prevention is fundamental and can prevent most melanomas. Avoid sun exposure during peak hours (10am-4pm). Use broad-spectrum SPF 30+ sunscreen reapplied every 2 hours and after swimming or sweating. Wear protective clothing, wide-brimmed hat, and UV-protective sunglasses. Never use artificial tanning beds (increases melanoma risk by 75% before age 35). Perform monthly skin self-examinations (ABCDE rule and ugly duckling sign). Annual dermatologic examinations with dermoscopy, especially in high-risk individuals. Total body reference photography in patients with multiple atypical nevi.",
    "factoresRiesgoEs": [
      "Piel clara, cabello rubio o rojo, ojos claros (fototipos I-II)",
      "Historia de quemaduras solares severas, especialmente antes de los 18 anos",
      "Uso de camas de bronceado artificial",
      "Mas de 50 nevos melanociticos comunes",
      "Presencia de nevos displasicos o atipicos",
      "Historia personal o familiar de melanoma",
      "Inmunosupresion (trasplante, VIH, farmacos inmunosupresores)",
      "Sindrome de nevos displasicos familiares (mutacion CDKN2A)"
    ],
    "factoresRiesgoEn": [
      "Fair skin, blonde or red hair, light eyes (phototypes I-II)",
      "History of severe sunburns, especially before age 18",
      "Use of artificial tanning beds",
      "More than 50 common melanocytic nevi",
      "Presence of dysplastic or atypical nevi",
      "Personal or family history of melanoma",
      "Immunosuppression (transplant, HIV, immunosuppressive drugs)",
      "Familial dysplastic nevus syndrome (CDKN2A mutation)"
    ],
    "cuandoConsultarEs": "Consulte a un dermatologo de forma urgente si nota un lunar nuevo que crece rapidamente, si un lunar existente cambia de forma, color o tamano, si una lesion pigmentada sangra, pica o se ulcera sin trauma, si tiene un lunar que cumple uno o mas criterios ABCDE, si identifica una lesion que se ve diferente al resto de sus lunares (signo del patito feo), si tiene historia familiar de melanoma y multiples nevos atipicos, si aparece un nodulo rosado de crecimiento rapido sin pigmento evidente, o si encuentra una lesion pigmentada en las unas, palmas o plantas de los pies.",
    "cuandoConsultarEn": "Consult a dermatologist urgently if you notice a rapidly growing new mole, if an existing mole changes in shape, color, or size, if a pigmented lesion bleeds, itches, or ulcerates without trauma, if you have a mole meeting one or more ABCDE criteria, if you identify a lesion that looks different from the rest of your moles (ugly duckling sign), if you have a family history of melanoma and multiple atypical nevi, if a rapidly growing pink nodule appears without evident pigment, or if you find a pigmented lesion on nails, palms, or soles of feet."
  },
  {
    "id": "urticaria",
    "nombreEs": "Urticaria (Ronchas)",
    "nombreEn": "Urticaria (Hives)",
    "categoriaEs": "Alergica",
    "categoriaEn": "Allergic",
    "descripcionEs": "La urticaria es una reaccion vascular de la piel caracterizada por la aparicion de habones (ronchas) eritematosos, edematosos y pruriginosos que resultan de la degranulacion de mastocitos cutaneos y la liberacion de histamina y otros mediadores inflamatorios. Las lesiones individuales son transitorias, durando tipicamente de 30 minutos a 24 horas, y no dejan marca residual. Se clasifica como aguda (menos de 6 semanas) o cronica (6 semanas o mas). La urticaria aguda es extremadamente comun, afectando al 15-25% de la poblacion al menos una vez en la vida. La urticaria cronica espontanea afecta al 0.5-1% de la poblacion y puede persistir por anos. El angioedema, que involucra las capas profundas de la piel, acompana a la urticaria en el 40% de los casos.",
    "descripcionEn": "Urticaria is a vascular skin reaction characterized by the appearance of erythematous, edematous, and pruritic wheals (hives) resulting from degranulation of cutaneous mast cells and release of histamine and other inflammatory mediators. Individual lesions are transient, typically lasting 30 minutes to 24 hours, and leave no residual mark. It is classified as acute (less than 6 weeks) or chronic (6 weeks or more). Acute urticaria is extremely common, affecting 15-25% of the population at least once in a lifetime. Chronic spontaneous urticaria affects 0.5-1% of the population and can persist for years. Angioedema, which involves deeper skin layers, accompanies urticaria in 40% of cases.",
    "sintomasEs": [
      "Habones (ronchas) rosados o rojos elevados de tamano variable",
      "Prurito intenso que empeora por la noche y con el calor",
      "Lesiones transitorias que cambian de ubicacion en horas",
      "Angioedema: hinchazon profunda de labios, parpados, manos, pies o genitales",
      "Dermografismo: aparicion de habones al rascar o presionar la piel",
      "Sensacion de ardor o quemazón en las lesiones",
      "En casos severos: dificultad para respirar si hay edema laringeo",
      "Habones gigantes que pueden confluir formando placas extensas",
      "Malestar general y fatiga asociados en urticaria cronica"
    ],
    "sintomasEn": [
      "Pink or red raised wheals (hives) of variable size",
      "Intense itching that worsens at night and with heat",
      "Transient lesions that change location within hours",
      "Angioedema: deep swelling of lips, eyelids, hands, feet, or genitals",
      "Dermatographism: appearance of wheals upon scratching or pressing the skin",
      "Burning or stinging sensation in the lesions",
      "In severe cases: difficulty breathing if laryngeal edema is present",
      "Giant wheals that may coalesce forming extensive plaques",
      "General malaise and fatigue associated with chronic urticaria"
    ],
    "causasEs": "La urticaria aguda es mediada por IgE en la mayoria de los casos: alergenos alimentarios (mariscos, nueces, huevos, leche, trigo), medicamentos (antibioticos betalactamicos, AINEs, opioides), picaduras de insectos y latex activan los mastocitos via IgE. Los AINEs pueden causar urticaria no alergica por inhibicion de COX-1. Las infecciones virales son la causa mas comun en ninos. La urticaria cronica espontanea es autoinmune en el 30-50% de los casos, con autoanticuerpos IgG contra el receptor de alta afinidad de IgE (FceRI) o contra la IgE misma. Otras causas incluyen urticaria fisica (presion, frio, calor, solar, vibracion), urticaria colinergica (por sudoracion), urticaria por contacto, y raramente mastocitosis o vasculitis urticariana.",
    "causasEn": "Acute urticaria is IgE-mediated in most cases: food allergens (shellfish, nuts, eggs, milk, wheat), medications (beta-lactam antibiotics, NSAIDs, opioids), insect stings, and latex activate mast cells via IgE. NSAIDs can cause non-allergic urticaria through COX-1 inhibition. Viral infections are the most common cause in children. Chronic spontaneous urticaria is autoimmune in 30-50% of cases, with IgG autoantibodies against the high-affinity IgE receptor (FceRI) or against IgE itself. Other causes include physical urticaria (pressure, cold, heat, solar, vibration), cholinergic urticaria (from sweating), contact urticaria, and rarely mastocytosis or urticarial vasculitis.",
    "diagnosticoEs": "El diagnostico es clinico en la mayoria de los casos. Para urticaria aguda: anamnesis detallada buscando desencadenantes (alimentos, farmacos, infecciones). Las pruebas cutaneas o IgE especifica solo se solicitan cuando hay historia sugestiva de alergeno especifico. Para urticaria cronica: hemograma, VES, PCR, TSH y anticuerpos antitiroideos (asociacion frecuente con tiroiditis autoinmune), prueba de suero autologo (detecta autoanticuerpos funcionales), complemento y triptasa si se sospecha mastocitosis. La actividad se evalua con el UAS7 (Urticaria Activity Score 7). La biopsia se reserva para lesiones que duran mas de 24 horas, dejan marca purpurica o duelen mas que pican (descartar vasculitis urticariana). La provocacion con estimulos fisicos confirma urticarias inducibles.",
    "diagnosticoEn": "Diagnosis is clinical in most cases. For acute urticaria: detailed history seeking triggers (foods, drugs, infections). Skin tests or specific IgE are only ordered when history suggests a specific allergen. For chronic urticaria: complete blood count, ESR, CRP, TSH and antithyroid antibodies (frequent association with autoimmune thyroiditis), autologous serum skin test (detects functional autoantibodies), complement and tryptase if mastocytosis is suspected. Activity is assessed with UAS7 (Urticaria Activity Score 7). Biopsy is reserved for lesions lasting more than 24 hours, leaving purpuric marks, or that hurt more than itch (rule out urticarial vasculitis). Provocation with physical stimuli confirms inducible urticarias.",
    "tratamientoEs": "El tratamiento de primera linea son los antihistaminicos H1 de segunda generacion no sedantes (cetirizina, loratadina, bilastina, fexofenadina) a dosis estandar. Si no hay respuesta en 2-4 semanas, se aumenta la dosis hasta 4 veces la dosis estandar (aprobado en guias internacionales). Si persiste refractaria, se agrega omalizumab (anti-IgE, 300mg subcutaneo cada 4 semanas), que es altamente efectivo en urticaria cronica espontanea con respuesta en el 70-90% de los pacientes. La ciclosporina (3-5mg/kg/dia) es opcion de tercera linea. Para angioedema agudo severo: epinefrina intramuscular si hay compromiso de via aerea, corticosteroides sistemicos por ciclos cortos (5-7 dias maximo para brotes agudos). Evitar aspirina y AINEs que frecuentemente exacerban la urticaria. Identificar y eliminar desencadenantes cuando sea posible.",
    "tratamientoEn": "First-line treatment is second-generation non-sedating H1 antihistamines (cetirizine, loratadine, bilastine, fexofenadine) at standard doses. If no response within 2-4 weeks, increase the dose up to 4 times the standard dose (approved in international guidelines). If still refractory, add omalizumab (anti-IgE, 300mg subcutaneous every 4 weeks), which is highly effective in chronic spontaneous urticaria with response in 70-90% of patients. Cyclosporine (3-5mg/kg/day) is a third-line option. For severe acute angioedema: intramuscular epinephrine if airway compromise is present, systemic corticosteroids for short courses (5-7 days maximum for acute flares). Avoid aspirin and NSAIDs which frequently exacerbate urticaria. Identify and eliminate triggers when possible.",
    "prevencionEs": "Identificar y evitar los desencadenantes especificos documentados. Llevar un diario de sintomas para identificar patrones y posibles alergenos. Evitar la aspirina y los AINEs a menos que sean estrictamente necesarios, ya que exacerban la urticaria en el 30% de los pacientes. Evitar cambios bruscos de temperatura. Usar ropa holgada para evitar presion sobre la piel. Manejar el estres ya que es un factor agravante reconocido. Evitar el alcohol que puede empeorar los sintomas. Los pacientes con riesgo de anafilaxia deben portar siempre autoinyector de epinefrina. En urticaria inducible, evitar el estimulo especifico (frio, presion, calor, ejercicio intenso).",
    "prevencionEn": "Identify and avoid specific documented triggers. Keep a symptom diary to identify patterns and potential allergens. Avoid aspirin and NSAIDs unless strictly necessary, as they exacerbate urticaria in 30% of patients. Avoid sudden temperature changes. Wear loose clothing to avoid pressure on the skin. Manage stress as it is a recognized aggravating factor. Avoid alcohol which can worsen symptoms. Patients at risk of anaphylaxis should always carry an epinephrine auto-injector. In inducible urticaria, avoid the specific stimulus (cold, pressure, heat, intense exercise).",
    "factoresRiesgoEs": [
      "Historia personal de alergias o atopia",
      "Sexo femenino (2:1 en urticaria cronica)",
      "Enfermedades autoinmunes (tiroiditis de Hashimoto, lupus)",
      "Infecciones cronicas (Helicobacter pylori, hepatitis)",
      "Uso frecuente de AINEs",
      "Estres emocional cronico",
      "Historia de reacciones alergicas previas a alimentos o medicamentos",
      "Exposicion ocupacional a alergenos (latex en personal de salud)"
    ],
    "factoresRiesgoEn": [
      "Personal history of allergies or atopy",
      "Female sex (2:1 ratio in chronic urticaria)",
      "Autoimmune diseases (Hashimoto thyroiditis, lupus)",
      "Chronic infections (Helicobacter pylori, hepatitis)",
      "Frequent NSAID use",
      "Chronic emotional stress",
      "History of previous allergic reactions to foods or medications",
      "Occupational exposure to allergens (latex in healthcare workers)"
    ],
    "cuandoConsultarEs": "Busque atencion de emergencia inmediata si presenta dificultad para respirar, hinchazon de lengua o garganta, sensacion de opresion en el pecho, mareo o desmayo junto con las ronchas (posible anafilaxia). Consulte a un dermatologo o alergologo si la urticaria dura mas de 6 semanas, si los antihistaminicos de venta libre no controlan los sintomas, si el angioedema es recurrente, si las lesiones individuales duran mas de 24 horas o dejan marcas (posible vasculitis), si la urticaria es desencadenada por ejercicio o temperaturas extremas, o si los episodios recurrentes interfieren con su calidad de vida.",
    "cuandoConsultarEn": "Seek immediate emergency attention if you experience difficulty breathing, tongue or throat swelling, chest tightness, dizziness or fainting along with hives (possible anaphylaxis). Consult a dermatologist or allergist if urticaria lasts more than 6 weeks, if over-the-counter antihistamines do not control symptoms, if angioedema is recurrent, if individual lesions last more than 24 hours or leave marks (possible vasculitis), if urticaria is triggered by exercise or extreme temperatures, or if recurrent episodes interfere with your quality of life."
  },
  {
    "id": "rosacea",
    "nombreEs": "Rosacea",
    "nombreEn": "Rosacea",
    "categoriaEs": "Inflamatoria",
    "categoriaEn": "Inflammatory",
    "descripcionEs": "La rosacea es una enfermedad inflamatoria cronica de la piel facial que afecta predominantemente a adultos de piel clara entre los 30 y 50 anos. Se manifiesta con enrojecimiento facial persistente, telangiectasias, papulas y pustulas inflamatorias, y en casos avanzados, cambios fimaticos con engrosamiento del tejido. Afecta a aproximadamente 5% de la poblacion mundial y es mas comun en personas de ascendencia norte europea. La rosacea tiene un curso cronico con periodos de exacerbacion y remision, y aunque no es curable, es altamente tratable. Tiene un impacto psicosocial significativo, con estudios que muestran tasas elevadas de verguenza, ansiedad social y baja autoestima. La rosacea ocular, que afecta los ojos y parpados, esta presente en hasta el 50% de los pacientes y puede preceder a las manifestaciones cutaneas.",
    "descripcionEn": "Rosacea is a chronic inflammatory skin disease of the face that predominantly affects fair-skinned adults between ages 30 and 50. It manifests with persistent facial redness, telangiectasias, inflammatory papules and pustules, and in advanced cases, phymatous changes with tissue thickening. It affects approximately 5% of the world population and is more common in people of northern European descent. Rosacea has a chronic course with periods of exacerbation and remission, and while not curable, it is highly treatable. It has significant psychosocial impact, with studies showing elevated rates of embarrassment, social anxiety, and low self-esteem. Ocular rosacea, affecting the eyes and eyelids, is present in up to 50% of patients and can precede cutaneous manifestations.",
    "sintomasEs": [
      "Eritema centrofacial persistente (mejillas, nariz, menton, frente)",
      "Flushing o rubor transitorio frecuente desencadenado por estimulos",
      "Telangiectasias visibles (vasos sanguineos dilatados) en mejillas y nariz",
      "Papulas y pustulas inflamatorias sin comedones (a diferencia del acne)",
      "Ardor, escozor y sensibilidad cutanea aumentada",
      "Rinofima: engrosamiento progresivo de la nariz con textura nodular",
      "Rosacea ocular: ojos rojos, secos, con sensacion de cuerpo extrano",
      "Blefaritis y chalazion recurrentes",
      "Edema facial solido persistente (enfermedad de Morbihan) en casos raros"
    ],
    "sintomasEn": [
      "Persistent centrofacial erythema (cheeks, nose, chin, forehead)",
      "Frequent transient flushing triggered by stimuli",
      "Visible telangiectasias (dilated blood vessels) on cheeks and nose",
      "Inflammatory papules and pustules without comedones (unlike acne)",
      "Burning, stinging, and increased skin sensitivity",
      "Rhinophyma: progressive nose thickening with nodular texture",
      "Ocular rosacea: red, dry eyes with foreign body sensation",
      "Recurrent blepharitis and chalazion",
      "Persistent solid facial edema (Morbihan disease) in rare cases"
    ],
    "causasEs": "La etiologia de la rosacea es multifactorial e incompletamente comprendida. La desregulacion del sistema inmune innato juega un papel central: los peptidos de catelicidina (LL-37), producidos en exceso en la piel rosaceica, promueven inflamacion y angiogenesis. El acaro Demodex folliculorum, presente en mayor densidad en la piel rosaceica (5-10 veces mas que en piel normal), y su bacteria simbionte Bacillus oleronius contribuyen a la activacion inmune. La disfuncion neurovascular con hiperreactividad de los receptores vanilloides TRPV1 y TRPA1 explica el flushing y la sensacion de ardor. Los factores desencadenantes incluyen radiacion UV, temperaturas extremas, alimentos picantes, alcohol (especialmente vino tinto), estres emocional, ejercicio intenso, productos topicos irritantes y ciertos medicamentos vasodilatadores.",
    "causasEn": "The etiology of rosacea is multifactorial and incompletely understood. Dysregulation of the innate immune system plays a central role: cathelicidin peptides (LL-37), overproduced in rosacea skin, promote inflammation and angiogenesis. The Demodex folliculorum mite, present at higher density in rosacea skin (5-10 times more than in normal skin), and its symbiotic bacterium Bacillus oleronius contribute to immune activation. Neurovascular dysfunction with hyperreactivity of vanilloid receptors TRPV1 and TRPA1 explains flushing and burning sensation. Triggering factors include UV radiation, extreme temperatures, spicy foods, alcohol (especially red wine), emotional stress, intense exercise, irritating topical products, and certain vasodilating medications.",
    "diagnosticoEs": "El diagnostico es clinico basado en los criterios de consenso de la National Rosacea Society y la clasificacion fenotipica actualizada de ROSCO. Los fenotipos diagnosticos incluyen: eritema centrofacial fijo y cambios fimaticos. Los fenotipos mayores incluyen: flushing, papulas/pustulas inflamatorias, telangiectasias y manifestaciones oculares. No existen pruebas de laboratorio especificas. La dermatoscopia muestra vasos poligonales en panal. La biopsia rara vez es necesaria pero se considera para descartar lupus eritematoso, dermatitis seborreica o carcinoma basocelular. El conteo de Demodex (>5 por cm2 en raspado estandarizado) apoya el diagnostico. Se debe realizar una evaluacion oftalmologica en pacientes con sintomas oculares.",
    "diagnosticoEn": "Diagnosis is clinical based on National Rosacea Society consensus criteria and the updated ROSCO phenotypic classification. Diagnostic phenotypes include: fixed centrofacial erythema and phymatous changes. Major phenotypes include: flushing, inflammatory papules/pustules, telangiectasias, and ocular manifestations. There are no specific laboratory tests. Dermoscopy shows polygonal vessel network in honeycomb pattern. Biopsy is rarely needed but is considered to rule out lupus erythematosus, seborrheic dermatitis, or basal cell carcinoma. Demodex count (>5 per cm2 on standardized scraping) supports the diagnosis. Ophthalmologic evaluation should be performed in patients with ocular symptoms.",
    "tratamientoEs": "El tratamiento es fenotipo-dirigido. Para eritema persistente: brimonidina gel 0.33% (agonista alfa-2 vasoconstrictor topico, efecto en 30 min), oximetazolina crema 1%. Para papulas/pustulas: ivermectina crema 1% (primera linea, antiparasitario y antiinflamatorio), metronidazol topico 0.75-1%, acido azelaico 15%. Para casos moderados-severos: doxiciclina 40mg de liberacion modificada (dosis antiinflamatoria subantimicrobiana) es el tratamiento oral de primera linea. Isotretinoina a dosis bajas (0.25-0.5mg/kg/dia) para casos refractarios. Para telangiectasias: laser de colorante pulsado (PDL) o luz pulsada intensa (IPL). Para rinofima: ablacion con laser CO2 o cirugia. Para rosacea ocular: higiene palpebral, lagrimas artificiales, doxiciclina oral, y ciclosporina topica oftalmica 0.05% en casos severos.",
    "tratamientoEn": "Treatment is phenotype-directed. For persistent erythema: brimonidine gel 0.33% (topical alpha-2 agonist vasoconstrictor, onset in 30 min), oxymetazoline cream 1%. For papules/pustules: ivermectin cream 1% (first line, antiparasitic and anti-inflammatory), topical metronidazole 0.75-1%, azelaic acid 15%. For moderate-to-severe cases: doxycycline 40mg modified-release (subantimicrobial anti-inflammatory dose) is the first-line oral treatment. Low-dose isotretinoin (0.25-0.5mg/kg/day) for refractory cases. For telangiectasias: pulsed dye laser (PDL) or intense pulsed light (IPL). For rhinophyma: CO2 laser ablation or surgery. For ocular rosacea: eyelid hygiene, artificial tears, oral doxycycline, and topical ophthalmic cyclosporine 0.05% in severe cases.",
    "prevencionEs": "La prevencion se centra en identificar y evitar los desencadenantes individuales. Llevar un diario de brotes para identificar patrones personales. Usar proteccion solar de amplio espectro SPF 30+ con filtros fisicos (oxido de zinc, dioxido de titanio) ya que los filtros quimicos pueden irritar. Evitar productos con alcohol, fragancias, mentol, hamamelis y acido glicolico. Usar limpiadores suaves y humectantes con ceramidas. Proteger la cara del viento y temperaturas extremas. Consumir bebidas a temperatura ambiente en vez de muy calientes. Evitar alimentos picantes si son desencadenantes. Limitar el alcohol, especialmente vino tinto. Usar ventiladores en ambientes calurosos. El manejo del estres es importante ya que el 79% de los pacientes lo identifican como desencadenante.",
    "prevencionEn": "Prevention focuses on identifying and avoiding individual triggers. Keep a flare diary to identify personal patterns. Use broad-spectrum SPF 30+ sunscreen with physical filters (zinc oxide, titanium dioxide) as chemical filters can be irritating. Avoid products with alcohol, fragrances, menthol, witch hazel, and glycolic acid. Use gentle cleansers and ceramide-containing moisturizers. Protect face from wind and extreme temperatures. Drink beverages at room temperature instead of very hot. Avoid spicy foods if they are triggers. Limit alcohol, especially red wine. Use fans in hot environments. Stress management is important as 79% of patients identify it as a trigger.",
    "factoresRiesgoEs": [
      "Piel clara y ascendencia norte europea (celtica, escandinava)",
      "Sexo femenino (mas frecuente), aunque rinofima es mas comun en hombres",
      "Edad entre 30 y 50 anos",
      "Historia familiar de rosacea",
      "Fototipo I-II de Fitzpatrick",
      "Exposicion solar cronica",
      "Consumo regular de alcohol",
      "Helicobacter pylori (asociacion debatida pero reportada)"
    ],
    "factoresRiesgoEn": [
      "Fair skin and northern European descent (Celtic, Scandinavian)",
      "Female sex (more frequent), though rhinophyma is more common in men",
      "Age between 30 and 50 years",
      "Family history of rosacea",
      "Fitzpatrick phototype I-II",
      "Chronic sun exposure",
      "Regular alcohol consumption",
      "Helicobacter pylori (debated but reported association)"
    ],
    "cuandoConsultarEs": "Consulte a un dermatologo si presenta enrojecimiento facial persistente que no desaparece, si desarrolla papulas o pustulas en la cara sin comedones, si la piel facial es extremadamente sensible a productos topicos comunes, si experimenta ardor o escozor facial frecuente, si nota cambios en la forma o tamano de la nariz (posible rinofima), si tiene ojos rojos cronicos, secos o con sensacion de cuerpo extrano (posible rosacea ocular), si el enrojecimiento facial afecta su autoestima o interacciones sociales, o si ha sido diagnosticado con acne pero el tratamiento estandar empeora su condicion.",
    "cuandoConsultarEn": "Consult a dermatologist if you have persistent facial redness that does not resolve, if you develop facial papules or pustules without comedones, if facial skin is extremely sensitive to common topical products, if you experience frequent facial burning or stinging, if you notice changes in nose shape or size (possible rhinophyma), if you have chronically red, dry eyes or foreign body sensation (possible ocular rosacea), if facial redness affects your self-esteem or social interactions, or if you have been diagnosed with acne but standard treatment worsens your condition."
  },
  {
    "id": "dermatitis-contacto",
    "nombreEs": "Dermatitis de Contacto",
    "nombreEn": "Contact Dermatitis",
    "categoriaEs": "Alergica",
    "categoriaEn": "Allergic",
    "descripcionEs": "La dermatitis de contacto es una reaccion inflamatoria de la piel causada por el contacto directo con sustancias externas. Existen dos tipos principales: la dermatitis de contacto irritativa (DCI), que representa el 80% de los casos y resulta del dano directo a la barrera cutanea por sustancias quimicas sin mediacion inmunologica; y la dermatitis de contacto alergica (DCA), que constituye el 20% restante y es una reaccion de hipersensibilidad tipo IV mediada por celulas T. La DCI es mas comun en entornos ocupacionales, mientras que la DCA requiere sensibilizacion previa y puede desarrollarse contra miles de sustancias diferentes. Es una de las enfermedades cutaneas ocupacionales mas frecuentes, con un enorme impacto socioeconomico por ausentismo laboral y discapacidad.",
    "descripcionEn": "Contact dermatitis is an inflammatory skin reaction caused by direct contact with external substances. There are two main types: irritant contact dermatitis (ICD), which represents 80% of cases and results from direct damage to the skin barrier by chemicals without immune mediation; and allergic contact dermatitis (ACD), which constitutes the remaining 20% and is a type IV hypersensitivity reaction mediated by T cells. ICD is more common in occupational settings, while ACD requires prior sensitization and can develop against thousands of different substances. It is one of the most frequent occupational skin diseases, with enormous socioeconomic impact from work absenteeism and disability.",
    "sintomasEs": [
      "Eritema y edema en el area de contacto con la sustancia causal",
      "Vesiculas y ampollas que pueden supurar liquido seroso claro",
      "Prurito intenso (mas prominente en dermatitis alergica que irritativa)",
      "Descamacion y fisuras dolorosas en formas cronicas",
      "Distribucion geometrica o lineal que refleja el patron de contacto",
      "Liquenificacion y engrosamiento en exposiciones cronicas repetidas",
      "Dermatitis de manos con eccema seco y agrietado en DCI cronica",
      "Reaccion id (autoeczematizacion): diseminacion a distancia del contacto original",
      "Ardor y dolor mas que prurito en la forma irritativa aguda"
    ],
    "sintomasEn": [
      "Erythema and edema in the area of contact with the causative substance",
      "Vesicles and blisters that may ooze clear serous fluid",
      "Intense itching (more prominent in allergic than irritant form)",
      "Scaling and painful fissures in chronic forms",
      "Geometric or linear distribution reflecting the contact pattern",
      "Lichenification and thickening in chronic repeated exposures",
      "Hand dermatitis with dry, cracked eczema in chronic ICD",
      "Id reaction (autoeczematization): distant spread from original contact site",
      "Burning and pain more than itching in acute irritant form"
    ],
    "causasEs": "La DCI es causada por sustancias que danan directamente la barrera cutanea: detergentes, jabones, solventes organicos, acidos, bases, agua (exposicion prolongada), fricciones repetidas y microtraumatismos. Los irritantes fuertes causan reaccion inmediata, mientras que los debiles causan DCI cronica acumulativa. La DCA es causada por haptenos (moleculas pequenas) que penetran la piel, se unen a proteinas y forman alergenos completos que activan las celulas T de memoria. Los alergenos de contacto mas comunes son: niquel (bisuteria, cinturones, celulares), fragancias (cosmeticos, perfumes), conservantes (metilisotiazolinona), cromo (cemento, cuero), resinas epoxi, caucho/latex, PPD (tintes de cabello), formaldehido, neomicina topica, y alergenos de plantas (hiedra venenosa/urushiol con reactividad cruzada con mango y anacardo).",
    "causasEn": "ICD is caused by substances that directly damage the skin barrier: detergents, soaps, organic solvents, acids, bases, water (prolonged exposure), repeated friction, and microtrauma. Strong irritants cause immediate reaction, while weak irritants cause chronic cumulative ICD. ACD is caused by haptens (small molecules) that penetrate the skin, bind to proteins, and form complete allergens that activate memory T cells. The most common contact allergens are: nickel (costume jewelry, belt buckles, cell phones), fragrances (cosmetics, perfumes), preservatives (methylisothiazolinone), chromium (cement, leather), epoxy resins, rubber/latex, PPD (hair dyes), formaldehyde, topical neomycin, and plant allergens (poison ivy/urushiol with cross-reactivity to mango and cashew).",
    "diagnosticoEs": "La historia clinica detallada es la herramienta diagnostica mas importante: cronologia, localizacion anatomica, exposiciones ocupacionales y de ocio, cosmeticos, y mejoria durante vacaciones. Las pruebas epicutaneas (pruebas del parche) son el estandar oro para diagnosticar DCA: se aplican series estandar y especializadas de alergenos en la espalda durante 48 horas, con lecturas a las 48h, 72h y 96h (o dia 7). La serie basal incluye 30-80 alergenos segun la region. El ROAT (Repeated Open Application Test) confirma la relevancia clinica de un resultado positivo. La biopsia muestra espongiosis en fase aguda y acantosis con hiperqueratosis en fase cronica pero no diferencia DCI de DCA. Los tests de provocacion con irritantes ayudan en el diagnostico de DCI cuando hay duda.",
    "diagnosticoEn": "Detailed clinical history is the most important diagnostic tool: chronology, anatomical location, occupational and leisure exposures, cosmetics, and improvement during vacations. Epicutaneous tests (patch tests) are the gold standard for diagnosing ACD: standard and specialized allergen series are applied to the back for 48 hours, with readings at 48h, 72h, and 96h (or day 7). The baseline series includes 30-80 allergens depending on the region. ROAT (Repeated Open Application Test) confirms the clinical relevance of a positive result. Biopsy shows spongiosis in the acute phase and acanthosis with hyperkeratosis in the chronic phase but does not differentiate ICD from ACD. Irritant provocation tests help in ICD diagnosis when doubt exists.",
    "tratamientoEs": "El pilar fundamental es la identificacion y evitacion estricta del agente causal. Para la fase aguda con vesiculas y supuracion: compresas humedas con solucion salina o agua de Burow (acetato de aluminio), seguidas de corticosteroides topicos de mediana-alta potencia (betametasona valerato 0.1%, clobetasol para lesiones gruesas en manos/pies). Los inhibidores de calcineurina (tacrolimus, pimecrolimus) son utiles para uso prolongado en cara y pliegues. Para la DCI cronica de manos: programa intensivo de restauracion de barrera con emolientes ricos en ceramidas, uso de guantes de vinilo o nitrilo (no latex) con guantes de algodon debajo, y evitacion estricta de irritantes. Para DCA severa o extensa: prednisona oral en curso descendente de 2-3 semanas (no ciclos cortos que causan rebote). Fototerapia UVB o PUVA para formas cronicas de manos. En DCA ocupacional: reubicacion laboral si la evitacion del alergeno no es posible.",
    "tratamientoEn": "The fundamental pillar is identification and strict avoidance of the causative agent. For the acute phase with vesicles and oozing: wet compresses with saline or Burow's solution (aluminum acetate), followed by medium-to-high potency topical corticosteroids (betamethasone valerate 0.1%, clobetasol for thick lesions on hands/feet). Calcineurin inhibitors (tacrolimus, pimecrolimus) are useful for prolonged use on face and folds. For chronic hand ICD: intensive barrier restoration program with ceramide-rich emollients, use of vinyl or nitrile gloves (not latex) with cotton gloves underneath, and strict irritant avoidance. For severe or extensive ACD: oral prednisone in a tapering course over 2-3 weeks (not short courses that cause rebound). UVB or PUVA phototherapy for chronic hand forms. In occupational ACD: job relocation if allergen avoidance is not possible.",
    "prevencionEs": "La prevencion primaria incluye el uso de equipos de proteccion personal adecuados en el trabajo (guantes, cremas barrera, ropa protectora). Evitar el contacto innecesario con irritantes y alergenos conocidos. Usar productos hipoalergenicos y sin fragancias. Hidratar la piel regularmente con emolientes, especialmente despues del lavado de manos. Preferir guantes de nitrilo sobre los de latex. En industrias de riesgo, implementar programas de educacion y vigilancia dermatologica. Para pacientes con DCA diagnosticada: proporcionar una lista escrita de los alergenos a evitar y sus fuentes (incluyendo reactividad cruzada). Usar aplicaciones moviles como SkinSafe o ContactDerm para verificar la composicion de productos. Seleccionar joyas de acero inoxidable, titanio u oro de alta pureza si hay alergia al niquel.",
    "prevencionEn": "Primary prevention includes the use of adequate personal protective equipment at work (gloves, barrier creams, protective clothing). Avoid unnecessary contact with known irritants and allergens. Use hypoallergenic and fragrance-free products. Moisturize skin regularly with emollients, especially after handwashing. Prefer nitrile gloves over latex. In high-risk industries, implement education and dermatologic surveillance programs. For patients with diagnosed ACD: provide a written list of allergens to avoid and their sources (including cross-reactivity). Use mobile applications like SkinSafe or ContactDerm to verify product composition. Select stainless steel, titanium, or high-purity gold jewelry if nickel allergy is present.",
    "factoresRiesgoEs": [
      "Ocupaciones con exposicion a irritantes (peluqueria, limpieza, salud, construccion, metalurgia)",
      "Lavado de manos frecuente (>20 veces/dia) o uso excesivo de geles alcoholados",
      "Dermatitis atopica previa (barrera cutanea comprometida aumenta riesgo de DCI)",
      "Exposicion ocupacional a cromo, niquel, epoxi o cemento humedo",
      "Uso frecuente de bisuteria con niquel",
      "Uso de multiples productos cosmeticos y fragancias",
      "Piel clara y delgada (mas susceptible a irritantes)",
      "Clima frio y seco que debilita la barrera cutanea"
    ],
    "factoresRiesgoEn": [
      "Occupations with irritant exposure (hairdressing, cleaning, healthcare, construction, metalworking)",
      "Frequent handwashing (>20 times/day) or excessive use of alcohol-based sanitizers",
      "Prior atopic dermatitis (compromised skin barrier increases ICD risk)",
      "Occupational exposure to chromium, nickel, epoxy, or wet cement",
      "Frequent use of nickel-containing costume jewelry",
      "Use of multiple cosmetic products and fragrances",
      "Fair and thin skin (more susceptible to irritants)",
      "Cold and dry climate that weakens the skin barrier"
    ],
    "cuandoConsultarEs": "Consulte a un dermatologo si sospecha que una sustancia especifica esta causando su dermatitis pero no puede identificarla, si la dermatitis de manos interfiere con su trabajo o actividades diarias, si necesita pruebas del parche para identificar alergenos especificos, si la dermatitis no mejora despues de eliminar el contacto sospechoso durante 2-3 semanas, si desarrolla infeccion secundaria (aumento del dolor, fiebre, pus, expansion rapida del enrojecimiento), si la erupcion se extiende a areas que no estuvieron en contacto directo, o si necesita una evaluacion de enfermedad cutanea ocupacional para documentacion legal o cambio de puesto de trabajo.",
    "cuandoConsultarEn": "Consult a dermatologist if you suspect a specific substance is causing your dermatitis but cannot identify it, if hand dermatitis interferes with your work or daily activities, if you need patch testing to identify specific allergens, if dermatitis does not improve after eliminating suspected contact for 2-3 weeks, if secondary infection develops (increased pain, fever, pus, rapid redness expansion), if the rash extends to areas not in direct contact, or if you need an occupational skin disease evaluation for legal documentation or job reassignment."
  },
  {
    "id": "herpes-zoster",
    "nombreEs": "Herpes Zoster (Culebrilla)",
    "nombreEn": "Herpes Zoster (Shingles)",
    "categoriaEs": "Infecciosa",
    "categoriaEn": "Infectious",
    "descripcionEs": "El herpes zoster es una enfermedad causada por la reactivacion del virus varicela-zoster (VVZ) que permanece latente en los ganglios sensoriales dorsales despues de la infeccion primaria por varicela. Cuando la inmunidad celular disminuye por la edad, inmunosupresion o estres, el virus se reactiva, viaja por el nervio sensorial y produce una erupcion vesicular dolorosa en el dermatoma correspondiente. Afecta a aproximadamente 1 de cada 3 personas en su vida, con una incidencia que aumenta marcadamente despues de los 50 anos. La complicacion mas temida es la neuralgia posherpetica (NPH), un dolor neuropatico cronico debilitante que persiste meses o anos despues de la resolucion de la erupcion. El herpes zoster oftalmico, que involucra la rama V1 del trigemino, puede causar ceguera si no se trata oportunamente.",
    "descripcionEn": "Herpes zoster is a disease caused by reactivation of the varicella-zoster virus (VZV) that remains latent in dorsal sensory ganglia after primary varicella infection. When cellular immunity decreases due to age, immunosuppression, or stress, the virus reactivates, travels along the sensory nerve, and produces a painful vesicular eruption in the corresponding dermatome. It affects approximately 1 in 3 people in their lifetime, with incidence markedly increasing after age 50. The most feared complication is postherpetic neuralgia (PHN), a debilitating chronic neuropathic pain persisting months or years after rash resolution. Herpes zoster ophthalmicus, involving the V1 branch of the trigeminal nerve, can cause blindness if not treated promptly.",
    "sintomasEs": [
      "Dolor prodromico urente, lancinante o electrico en el dermatoma afectado 1-5 dias antes de la erupcion",
      "Erupcion unilateral de vesiculas agrupadas sobre base eritematosa en banda",
      "Distribucion estrictamente dermatomica que no cruza la linea media",
      "Dermatomas mas afectados: toracicos (T3-L2 en 50%), trigemino (V1), cervicales",
      "Vesiculas que evolucionan a pustulas y costras en 7-10 dias",
      "Dolor neuropatico intenso que puede ser invalidante",
      "Alodinia (dolor al tacto ligero como el roce de la ropa)",
      "Hiperestesia y parestesias en la zona afectada",
      "Signos de Hutchinson (vesiculas en la punta de la nariz): indica zoster oftalmico con riesgo ocular"
    ],
    "sintomasEn": [
      "Prodromal burning, lancinating, or electric pain in the affected dermatome 1-5 days before the rash",
      "Unilateral eruption of grouped vesicles on an erythematous base in a band pattern",
      "Strictly dermatomal distribution that does not cross the midline",
      "Most affected dermatomes: thoracic (T3-L2 in 50%), trigeminal (V1), cervical",
      "Vesicles evolving to pustules and crusts in 7-10 days",
      "Intense neuropathic pain that can be debilitating",
      "Allodynia (pain from light touch such as clothing rubbing)",
      "Hyperesthesia and paresthesias in the affected area",
      "Hutchinson sign (vesicles on the tip of the nose): indicates ophthalmic zoster with ocular risk"
    ],
    "causasEs": "La causa es la reactivacion del virus varicela-zoster (VVZ, herpesvirus humano 3) desde su estado de latencia en los ganglios de las raices dorsales o en los ganglios de nervios craneales. Tras la varicela primaria, el virus persiste de por vida en forma latente. La reactivacion ocurre cuando la inmunidad celular especifica contra VVZ disminuye por debajo de un umbral critico. Los factores que precipitan la reactivacion incluyen: envejecimiento (principal factor — la inmunidad celular declina naturalmente con la edad), inmunosupresion (VIH/SIDA, quimioterapia, trasplante de organos, corticosteroides cronicos, biologicos anti-TNF), estres fisico o emocional severo, trauma local en el dermatoma, y radiacion. A diferencia de la varicela, el herpes zoster no se adquiere por contacto con un paciente con zoster, pero un paciente con zoster puede transmitir varicela a personas no inmunizadas.",
    "causasEn": "The cause is reactivation of varicella-zoster virus (VZV, human herpesvirus 3) from its latent state in dorsal root ganglia or cranial nerve ganglia. After primary varicella, the virus persists lifelong in latent form. Reactivation occurs when specific cellular immunity against VZV falls below a critical threshold. Factors precipitating reactivation include: aging (main factor — cellular immunity naturally declines with age), immunosuppression (HIV/AIDS, chemotherapy, organ transplant, chronic corticosteroids, anti-TNF biologics), severe physical or emotional stress, local trauma to the dermatome, and radiation. Unlike varicella, herpes zoster is not acquired by contact with a zoster patient, but a zoster patient can transmit varicella to non-immunized individuals.",
    "diagnosticoEs": "El diagnostico es principalmente clinico cuando la presentacion es tipica (vesiculas agrupadas unilaterales en distribucion dermatomica con dolor). La confirmacion de laboratorio se reserva para presentaciones atipicas o pacientes inmunocomprometidos: PCR del liquido vesicular para ADN de VVZ es el metodo mas sensible y especifico (95-100%). La inmunofluorescencia directa (IFD) del raspado de la base de las vesiculas detecta antigenos virales. El test de Tzanck (celulas gigantes multinucleadas) es rapido pero no diferencia VVZ de herpes simple. La serologia no es util para el diagnostico agudo. En zoster oftalmico: evaluacion oftalmologica urgente con lampara de hendidura. En zoster otico (sindrome de Ramsay Hunt): evaluar paralisis facial, hipoacusia y vesiculas en el pabellon auricular. La diseminacion cutanea (>20 lesiones fuera del dermatoma) o afectacion visceral sugiere inmunosupresion severa.",
    "diagnosticoEn": "Diagnosis is primarily clinical when the presentation is typical (unilateral grouped vesicles in dermatomal distribution with pain). Laboratory confirmation is reserved for atypical presentations or immunocompromised patients: PCR of vesicular fluid for VZV DNA is the most sensitive and specific method (95-100%). Direct immunofluorescence (DIF) of scrapings from the vesicle base detects viral antigens. The Tzanck test (multinucleated giant cells) is rapid but does not differentiate VZV from herpes simplex. Serology is not useful for acute diagnosis. In ophthalmic zoster: urgent ophthalmologic evaluation with slit lamp. In otic zoster (Ramsay Hunt syndrome): evaluate facial paralysis, hearing loss, and vesicles on the auricle. Cutaneous dissemination (>20 lesions outside the dermatome) or visceral involvement suggests severe immunosuppression.",
    "tratamientoEs": "El tratamiento antiviral debe iniciarse dentro de las primeras 72 horas del inicio de la erupcion (idealmente antes) para reducir la duracion, severidad y riesgo de neuralgia posherpetica. Valaciclovir 1g tres veces al dia por 7 dias es la primera linea oral (mejor biodisponibilidad que aciclovir). Alternativas: famciclovir 500mg tres veces al dia por 7 dias, o aciclovir 800mg cinco veces al dia por 7 dias. En inmunocomprometidos o zoster diseminado: aciclovir intravenoso 10mg/kg cada 8 horas. Para el dolor agudo: escalonamiento analgesico con paracetamol, AINEs, gabapentina o pregabalina (desde el inicio para prevenir NPH), y opioides de corta accion si es necesario. Para neuralgia posherpetica: gabapentina (300-3600mg/dia), pregabalina (150-600mg/dia), parches de lidocaina 5%, parches de capsaicina 8%, duloxetina, amitriptilina en dosis bajas, y opioides como ultima opcion. Corticosteroides orales (prednisona) junto con antivirales pueden reducir el dolor agudo y acortar la duracion en pacientes sin contraindicaciones. Cuidado local de las lesiones con compresas humedas y prevencion de sobreinfeccion bacteriana.",
    "tratamientoEn": "Antiviral treatment must be initiated within the first 72 hours of rash onset (ideally sooner) to reduce duration, severity, and risk of postherpetic neuralgia. Valacyclovir 1g three times daily for 7 days is the first-line oral option (better bioavailability than acyclovir). Alternatives: famciclovir 500mg three times daily for 7 days, or acyclovir 800mg five times daily for 7 days. In immunocompromised or disseminated zoster: intravenous acyclovir 10mg/kg every 8 hours. For acute pain: analgesic escalation with acetaminophen, NSAIDs, gabapentin or pregabalin (from onset to prevent PHN), and short-acting opioids if necessary. For postherpetic neuralgia: gabapentin (300-3600mg/day), pregabalin (150-600mg/day), lidocaine 5% patches, capsaicin 8% patches, duloxetine, low-dose amitriptyline, and opioids as a last resort. Oral corticosteroids (prednisone) together with antivirals may reduce acute pain and shorten duration in patients without contraindications. Local wound care with wet compresses and prevention of bacterial superinfection.",
    "prevencionEs": "La vacunacion es la estrategia preventiva mas efectiva. La vacuna recombinante adyuvada (Shingrix) es la recomendada para adultos mayores de 50 anos y adultos inmunocomprometidos mayores de 18 anos. Se administra en dos dosis intramusculares separadas por 2-6 meses y tiene una eficacia superior al 90% para prevenir el herpes zoster y la neuralgia posherpetica, manteniendo proteccion por al menos 10 anos. Shingrix es superior a la antigua vacuna viva atenuada (Zostavax, ya discontinuada en muchos paises). Los pacientes que han tenido un episodio de zoster deben vacunarse despues de la resolucion para prevenir recurrencias. En pacientes inmunocomprometidos, optimizar la terapia inmunosupresora cuando sea posible. El inicio temprano de antivirales dentro de las 72 horas de la erupcion reduce el riesgo de neuralgia posherpetica.",
    "prevencionEn": "Vaccination is the most effective preventive strategy. The adjuvanted recombinant vaccine (Shingrix) is recommended for adults over 50 years and immunocompromised adults over 18 years. It is administered in two intramuscular doses separated by 2-6 months and has efficacy exceeding 90% for preventing herpes zoster and postherpetic neuralgia, maintaining protection for at least 10 years. Shingrix is superior to the old live attenuated vaccine (Zostavax, already discontinued in many countries). Patients who have had a zoster episode should be vaccinated after resolution to prevent recurrences. In immunocompromised patients, optimize immunosuppressive therapy when possible. Early antiviral initiation within 72 hours of rash onset reduces the risk of postherpetic neuralgia.",
    "factoresRiesgoEs": [
      "Edad mayor de 50 anos (riesgo aumenta exponencialmente con la edad)",
      "Inmunosupresion: VIH/SIDA, quimioterapia, trasplante de organos",
      "Uso cronico de corticosteroides o inmunosupresores",
      "Terapia biologica (anti-TNF, inhibidores de JAK)",
      "Enfermedades autoinmunes (lupus, artritis reumatoide)",
      "Diabetes mellitus",
      "Estres fisico severo o trauma",
      "Neoplasias hematologicas (linfoma, leucemia)"
    ],
    "factoresRiesgoEn": [
      "Age over 50 years (risk increases exponentially with age)",
      "Immunosuppression: HIV/AIDS, chemotherapy, organ transplant",
      "Chronic use of corticosteroids or immunosuppressants",
      "Biologic therapy (anti-TNF, JAK inhibitors)",
      "Autoimmune diseases (lupus, rheumatoid arthritis)",
      "Diabetes mellitus",
      "Severe physical stress or trauma",
      "Hematologic malignancies (lymphoma, leukemia)"
    ],
    "cuandoConsultarEs": "Busque atencion medica inmediata si sospecha herpes zoster — el tratamiento antiviral es mas efectivo si se inicia dentro de las primeras 72 horas. Acuda a urgencias si presenta vesiculas en la punta de la nariz o alrededor del ojo (riesgo de ceguera por zoster oftalmico), si desarrolla paralisis facial con vesiculas en el oido (sindrome de Ramsay Hunt), si las lesiones se diseminan mas alla de un solo dermatoma, si presenta fiebre alta, confusion o rigidez de nuca (posible meningitis o encefalitis), o si es inmunocomprometido. Consulte si el dolor persiste despues de que las lesiones cutaneas hayan sanado (neuralgia posherpetica), si no esta vacunado y tiene mas de 50 anos, o si ha tenido contacto cercano con un paciente con zoster y no ha tenido varicela ni esta vacunado.",
    "cuandoConsultarEn": "Seek immediate medical attention if you suspect herpes zoster — antiviral treatment is most effective when started within the first 72 hours. Go to the emergency room if you have vesicles on the tip of the nose or around the eye (risk of blindness from ophthalmic zoster), if you develop facial paralysis with vesicles on the ear (Ramsay Hunt syndrome), if lesions disseminate beyond a single dermatome, if you develop high fever, confusion, or neck stiffness (possible meningitis or encephalitis), or if you are immunocompromised. Consult if pain persists after skin lesions have healed (postherpetic neuralgia), if you are unvaccinated and over 50 years old, or if you have had close contact with a zoster patient and have not had varicella or been vaccinated."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarDermatologia(termino: string): DermatologiaEntry[] {
  const t = termino.toLowerCase();
  return DERMATOLOGIA_ENTRIES.filter(e =>
    e.nombreEs.toLowerCase().includes(t) ||
    e.nombreEn.toLowerCase().includes(t) ||
    e.descripcionEs.toLowerCase().includes(t) ||
    e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getDermatologiaById(id: string): DermatologiaEntry | undefined {
  return DERMATOLOGIA_ENTRIES.find(e => e.id === id);
}

export function getDermatologiaPorCategoria(categoria: string): DermatologiaEntry[] {
  const c = categoria.toLowerCase();
  return DERMATOLOGIA_ENTRIES.filter(e =>
    e.categoriaEs.toLowerCase().includes(c) ||
    e.categoriaEn.toLowerCase().includes(c)
  );
}
