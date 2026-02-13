// =============================================================================
// Reumatologia Enciclopedia - Spanish-First Bilingual Medical Encyclopedia
// Module: Rheumatology
// Pattern: JSON.parse() to avoid TS2590 large-literal errors
// =============================================================================

export interface ReumatologiaEntry {
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
  complicacionesEs: string[];
  complicacionesEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const REUMATOLOGIA_ENTRIES: ReumatologiaEntry[] = JSON.parse(`[
  {
    "id": "lupus-eritematoso",
    "nombreEs": "Lupus Eritematoso Sistémico",
    "nombreEn": "Systemic Lupus Erythematosus",
    "descripcionEs": "El lupus eritematoso sistémico (LES) es una enfermedad autoinmune crónica en la que el sistema inmunológico ataca tejidos y órganos sanos del propio cuerpo. Puede afectar prácticamente cualquier sistema orgánico, incluyendo la piel, las articulaciones, los riñones, el cerebro, el corazón, los pulmones y las células sanguíneas. La enfermedad se caracteriza por períodos de exacerbación (brotes) alternados con períodos de remisión parcial o completa. El LES es significativamente más frecuente en mujeres en edad reproductiva, con una relación mujer-hombre de aproximadamente 9:1, y presenta mayor prevalencia en personas de ascendencia africana, hispana y asiática. La patogenia involucra la producción de autoanticuerpos, especialmente anticuerpos antinucleares (ANA) y anti-ADN de doble cadena (anti-dsDNA), que forman complejos inmunes y provocan inflamación y daño tisular en múltiples órganos.",
    "descripcionEn": "Systemic lupus erythematosus (SLE) is a chronic autoimmune disease in which the immune system attacks the body's own healthy tissues and organs. It can affect virtually any organ system, including the skin, joints, kidneys, brain, heart, lungs, and blood cells. The disease is characterized by periods of exacerbation (flares) alternating with periods of partial or complete remission. SLE is significantly more common in women of reproductive age, with a female-to-male ratio of approximately 9:1, and has higher prevalence in people of African, Hispanic, and Asian descent. The pathogenesis involves the production of autoantibodies, especially antinuclear antibodies (ANA) and anti-double-stranded DNA (anti-dsDNA) antibodies, which form immune complexes and cause inflammation and tissue damage in multiple organs.",
    "categoriaEs": "autoinmune sistémica",
    "categoriaEn": "systemic autoimmune",
    "sintomasEs": [
      "Erupción cutánea en forma de mariposa (eritema malar) en las mejillas y el puente nasal",
      "Dolor e inflamación articular (artritis no erosiva) que afecta principalmente manos, muñecas y rodillas",
      "Fatiga extrema y persistente que no mejora con el descanso",
      "Fiebre recurrente sin causa infecciosa identificable",
      "Fotosensibilidad con erupciones cutáneas tras exposición solar",
      "Úlceras orales o nasales generalmente indoloras",
      "Caída del cabello difusa o localizada (alopecia)",
      "Fenómeno de Raynaud con cambios de coloración en dedos de manos y pies",
      "Dolor torácico pleurítico por serositis (pleuritis o pericarditis)",
      "Hinchazón de tobillos y piernas por afectación renal (nefritis lúpica)",
      "Alteraciones neuropsiquiátricas como convulsiones, psicosis o deterioro cognitivo",
      "Anemia, leucopenia o trombocitopenia"
    ],
    "sintomasEn": [
      "Butterfly-shaped skin rash (malar rash) across the cheeks and bridge of the nose",
      "Joint pain and swelling (non-erosive arthritis) primarily affecting hands, wrists, and knees",
      "Extreme and persistent fatigue that does not improve with rest",
      "Recurrent fever without identifiable infectious cause",
      "Photosensitivity with skin rashes following sun exposure",
      "Oral or nasal ulcers that are usually painless",
      "Diffuse or localized hair loss (alopecia)",
      "Raynaud's phenomenon with color changes in fingers and toes",
      "Pleuritic chest pain from serositis (pleuritis or pericarditis)",
      "Ankle and leg swelling from kidney involvement (lupus nephritis)",
      "Neuropsychiatric disturbances including seizures, psychosis, or cognitive impairment",
      "Anemia, leukopenia, or thrombocytopenia"
    ],
    "causasEs": "El LES es una enfermedad multifactorial cuya causa exacta no se conoce completamente. Existe una fuerte predisposición genética, con asociaciones a genes del complejo mayor de histocompatibilidad (HLA-DR2 y HLA-DR3) y genes del sistema del complemento (C1q, C2, C4). Los factores hormonales desempeñan un papel importante, como lo demuestra la predominancia femenina y la relación con los estrógenos. Los desencadenantes ambientales incluyen la radiación ultravioleta, infecciones virales (especialmente el virus de Epstein-Barr), ciertos medicamentos (hidralazina, procainamida, isoniazida), el estrés físico y emocional, y el tabaquismo. La disfunción inmunológica fundamental implica una pérdida de la tolerancia inmunológica hacia antígenos propios, con producción excesiva de autoanticuerpos, formación de complejos inmunes, activación del complemento y daño tisular mediado por inflamación crónica.",
    "causasEn": "SLE is a multifactorial disease whose exact cause is not fully understood. There is a strong genetic predisposition, with associations to major histocompatibility complex genes (HLA-DR2 and HLA-DR3) and complement system genes (C1q, C2, C4). Hormonal factors play an important role, as demonstrated by the female predominance and the relationship with estrogens. Environmental triggers include ultraviolet radiation, viral infections (especially Epstein-Barr virus), certain medications (hydralazine, procainamide, isoniazid), physical and emotional stress, and smoking. The fundamental immunological dysfunction involves a loss of immune tolerance to self-antigens, with excessive production of autoantibodies, immune complex formation, complement activation, and tissue damage mediated by chronic inflammation.",
    "diagnosticoEs": "El diagnóstico del LES se basa en una combinación de criterios clínicos y de laboratorio. Los criterios de clasificación ACR/EULAR 2019 requieren un ANA positivo como criterio de entrada, seguido de criterios ponderados en dominios clínicos (constitucional, hematológico, neuropsiquiátrico, mucocutáneo, seroso, musculoesquelético, renal) e inmunológicos (anticuerpos antifosfolípidos, complemento, anticuerpos específicos de LES). Las pruebas de laboratorio esenciales incluyen ANA, anti-dsDNA, anti-Smith, niveles de complemento C3 y C4, hemograma completo, perfil renal, análisis de orina y velocidad de sedimentación globular. La biopsia renal es fundamental cuando se sospecha nefritis lúpica para clasificar la clase histológica (I-VI) y guiar el tratamiento. Otros estudios complementarios incluyen anticuerpos antifosfolípidos, anti-Ro/SSA, anti-La/SSB y prueba de Coombs directa.",
    "diagnosticoEn": "The diagnosis of SLE is based on a combination of clinical and laboratory criteria. The 2019 ACR/EULAR classification criteria require a positive ANA as an entry criterion, followed by weighted criteria across clinical domains (constitutional, hematologic, neuropsychiatric, mucocutaneous, serosal, musculoskeletal, renal) and immunological domains (antiphospholipid antibodies, complement, SLE-specific antibodies). Essential laboratory tests include ANA, anti-dsDNA, anti-Smith, complement levels C3 and C4, complete blood count, renal profile, urinalysis, and erythrocyte sedimentation rate. Renal biopsy is essential when lupus nephritis is suspected to classify the histological class (I-VI) and guide treatment. Other complementary studies include antiphospholipid antibodies, anti-Ro/SSA, anti-La/SSB, and direct Coombs test.",
    "tratamientoEs": "El tratamiento del LES es individualizado según la gravedad y los órganos afectados. La hidroxicloroquina es el pilar terapéutico fundamental recomendado para todos los pacientes con LES salvo contraindicación, ya que reduce los brotes, el daño orgánico acumulado, el riesgo trombótico y la mortalidad. Para manifestaciones leves (articulares, cutáneas), se utilizan antiinflamatorios no esteroideos (AINEs) y corticosteroides tópicos o en dosis bajas. Para enfermedad moderada se emplean metotrexato, azatioprina o micofenolato mofetilo. La nefritis lúpica clase III-V requiere terapia de inducción con micofenolato mofetilo o ciclofosfamida intravenosa, seguida de terapia de mantenimiento con micofenolato o azatioprina. El belimumab (anti-BLyS) y la voclosporina están aprobados como terapia adyuvante para nefritis lúpica. Anifrolumab (anti-interferón tipo I) está disponible para enfermedad moderada-severa refractaria. Los corticosteroides sistémicos se utilizan para controlar brotes agudos pero se busca minimizar su uso a largo plazo por sus efectos adversos. La protección solar estricta y la cesación tabáquica son medidas complementarias esenciales.",
    "tratamientoEn": "Treatment of SLE is individualized based on severity and affected organs. Hydroxychloroquine is the fundamental therapeutic cornerstone recommended for all SLE patients unless contraindicated, as it reduces flares, cumulative organ damage, thrombotic risk, and mortality. For mild manifestations (joint, cutaneous), nonsteroidal anti-inflammatory drugs (NSAIDs) and topical or low-dose corticosteroids are used. For moderate disease, methotrexate, azathioprine, or mycophenolate mofetil are employed. Class III-V lupus nephritis requires induction therapy with mycophenolate mofetil or intravenous cyclophosphamide, followed by maintenance therapy with mycophenolate or azathioprine. Belimumab (anti-BLyS) and voclosporin are approved as adjunctive therapy for lupus nephritis. Anifrolumab (anti-type I interferon) is available for moderate-to-severe refractory disease. Systemic corticosteroids are used to control acute flares but long-term use is minimized due to adverse effects. Strict sun protection and smoking cessation are essential complementary measures.",
    "prevencionEs": "No existe una prevención primaria conocida para el LES dado su componente genético y autoinmune. Sin embargo, se pueden prevenir los brotes mediante la protección solar rigurosa (protector solar SPF 50+, ropa protectora, evitar exposición solar directa), la adherencia estricta al tratamiento con hidroxicloroquina, evitar medicamentos que puedan inducir lupus, el manejo adecuado del estrés, el ejercicio regular moderado, una dieta equilibrada rica en omega-3 y vitamina D, la cesación tabáquica, la vacunación apropiada (evitando vacunas de virus vivos en pacientes inmunosuprimidos) y el seguimiento médico regular con monitorización de autoanticuerpos y función orgánica.",
    "prevencionEn": "There is no known primary prevention for SLE given its genetic and autoimmune component. However, flares can be prevented through rigorous sun protection (SPF 50+ sunscreen, protective clothing, avoiding direct sun exposure), strict adherence to hydroxychloroquine treatment, avoiding medications that can induce lupus, adequate stress management, regular moderate exercise, a balanced diet rich in omega-3 and vitamin D, smoking cessation, appropriate vaccination (avoiding live virus vaccines in immunosuppressed patients), and regular medical follow-up with monitoring of autoantibodies and organ function.",
    "complicacionesEs": [
      "Nefritis lúpica con progresión a enfermedad renal crónica o insuficiencia renal terminal",
      "Enfermedad cardiovascular acelerada (aterosclerosis prematura)",
      "Síndrome antifosfolípido con trombosis arterial o venosa y pérdidas gestacionales recurrentes",
      "Infecciones oportunistas por inmunosupresión terapéutica",
      "Necrosis avascular ósea (osteonecrosis), especialmente de la cabeza femoral",
      "Complicaciones obstétricas incluyendo preeclampsia, parto prematuro y lupus neonatal",
      "Linfoma y otras neoplasias con riesgo aumentado",
      "Daño orgánico acumulado irreversible por inflamación crónica"
    ],
    "complicacionesEn": [
      "Lupus nephritis with progression to chronic kidney disease or end-stage renal disease",
      "Accelerated cardiovascular disease (premature atherosclerosis)",
      "Antiphospholipid syndrome with arterial or venous thrombosis and recurrent pregnancy losses",
      "Opportunistic infections due to therapeutic immunosuppression",
      "Avascular bone necrosis (osteonecrosis), especially of the femoral head",
      "Obstetric complications including preeclampsia, preterm delivery, and neonatal lupus",
      "Lymphoma and other malignancies with increased risk",
      "Irreversible cumulative organ damage from chronic inflammation"
    ],
    "cuandoConsultarEs": "Consulte a un reumatólogo de inmediato si presenta erupción en forma de mariposa en la cara, dolor articular persistente en múltiples articulaciones, fatiga inexplicable acompañada de fiebre, orina espumosa o con sangre, dolor torácico al respirar profundamente, o si tiene antecedentes familiares de lupus y presenta síntomas sugestivos. Acuda a urgencias si experimenta dolor torácico intenso, dificultad respiratoria severa, convulsiones, confusión aguda, fiebre alta con inmunosupresión, o signos de trombosis (hinchazón súbita de una extremidad, dolor en pantorrilla).",
    "cuandoConsultarEn": "Consult a rheumatologist immediately if you develop a butterfly-shaped rash on the face, persistent joint pain in multiple joints, unexplained fatigue accompanied by fever, foamy or bloody urine, chest pain when breathing deeply, or if you have a family history of lupus and present suggestive symptoms. Go to the emergency room if you experience severe chest pain, severe difficulty breathing, seizures, acute confusion, high fever while on immunosuppression, or signs of thrombosis (sudden swelling of a limb, calf pain)."
  },
  {
    "id": "artritis-reumatoide",
    "nombreEs": "Artritis Reumatoide",
    "nombreEn": "Rheumatoid Arthritis",
    "descripcionEs": "La artritis reumatoide (AR) es una enfermedad autoinmune inflamatoria crónica que afecta predominantemente las articulaciones sinoviales de forma simétrica y bilateral. Se caracteriza por la inflamación persistente de la membrana sinovial (sinovitis), que puede provocar destrucción progresiva del cartílago articular y erosiones óseas, llevando a deformidades articulares irreversibles si no se trata adecuadamente. La AR afecta aproximadamente al 0.5-1% de la población mundial, con mayor prevalencia en mujeres (relación 3:1) y un pico de inicio entre los 30 y 60 años de edad. Además de las manifestaciones articulares, la AR es una enfermedad sistémica que puede producir afectación extraarticular en pulmones (enfermedad pulmonar intersticial), vasos sanguíneos (vasculitis reumatoide), ojos (escleritis, epiescleritis), corazón (pericarditis) y sistema hematológico. La intervención terapéutica temprana y agresiva ha demostrado ser fundamental para prevenir el daño articular irreversible.",
    "descripcionEn": "Rheumatoid arthritis (RA) is a chronic inflammatory autoimmune disease that predominantly affects synovial joints in a symmetric and bilateral pattern. It is characterized by persistent inflammation of the synovial membrane (synovitis), which can cause progressive destruction of articular cartilage and bone erosions, leading to irreversible joint deformities if not adequately treated. RA affects approximately 0.5-1% of the world population, with higher prevalence in women (3:1 ratio) and a peak onset between 30 and 60 years of age. Beyond joint manifestations, RA is a systemic disease that can produce extra-articular involvement in the lungs (interstitial lung disease), blood vessels (rheumatoid vasculitis), eyes (scleritis, episcleritis), heart (pericarditis), and hematologic system. Early and aggressive therapeutic intervention has proven fundamental in preventing irreversible joint damage.",
    "categoriaEs": "autoinmune articular",
    "categoriaEn": "articular autoimmune",
    "sintomasEs": [
      "Rigidez matutina prolongada (más de 30-60 minutos) en las articulaciones afectadas",
      "Dolor e inflamación simétrica de articulaciones pequeñas de manos y pies (metacarpofalángicas, interfalángicas proximales, metatarsofalángicas)",
      "Tumefacción articular con calor local y limitación funcional",
      "Fatiga generalizada y malestar sistémico",
      "Nódulos reumatoides subcutáneos firmes en superficies extensoras (codos, dedos)",
      "Deformidades articulares progresivas (desviación cubital, dedos en cuello de cisne, dedos en boutonnière)",
      "Síndrome del túnel carpiano por tenosinovitis de flexores",
      "Sequedad ocular y bucal (síndrome de Sjögren secundario)",
      "Febrícula intermitente y pérdida de peso involuntaria",
      "Limitación progresiva de la movilidad articular y la fuerza de prensión"
    ],
    "sintomasEn": [
      "Prolonged morning stiffness (more than 30-60 minutes) in affected joints",
      "Symmetric pain and swelling of small joints of hands and feet (metacarpophalangeal, proximal interphalangeal, metatarsophalangeal)",
      "Joint swelling with local warmth and functional limitation",
      "Generalized fatigue and systemic malaise",
      "Firm subcutaneous rheumatoid nodules on extensor surfaces (elbows, fingers)",
      "Progressive joint deformities (ulnar deviation, swan-neck fingers, boutonniere deformity)",
      "Carpal tunnel syndrome from flexor tenosynovitis",
      "Dry eyes and dry mouth (secondary Sjogren's syndrome)",
      "Intermittent low-grade fever and involuntary weight loss",
      "Progressive limitation of joint mobility and grip strength"
    ],
    "causasEs": "La artritis reumatoide es una enfermedad multifactorial que resulta de la interacción entre factores genéticos, ambientales e inmunológicos. La predisposición genética está fuertemente asociada al epítopo compartido de los alelos HLA-DRB1 (HLA-DR4, HLA-DR1), que confiere aproximadamente el 40% del riesgo genético. El tabaquismo es el factor de riesgo ambiental más importante y está particularmente asociado con la AR seropositiva (factor reumatoide y anticuerpos anti-CCP positivos). Otros factores ambientales incluyen infecciones periodontales (Porphyromonas gingivalis), exposiciones ocupacionales al sílice, y alteraciones del microbioma intestinal (Prevotella copri). La citrulinación de proteínas en las mucosas (pulmonar, oral, intestinal) genera neoantígenos que desencadenan la respuesta autoinmune en individuos genéticamente susceptibles. Las hormonas sexuales femeninas modulan la respuesta inmune y contribuyen a la mayor prevalencia en mujeres.",
    "causasEn": "Rheumatoid arthritis is a multifactorial disease resulting from the interaction between genetic, environmental, and immunological factors. Genetic predisposition is strongly associated with the shared epitope of HLA-DRB1 alleles (HLA-DR4, HLA-DR1), which confers approximately 40% of the genetic risk. Smoking is the most important environmental risk factor and is particularly associated with seropositive RA (rheumatoid factor and anti-CCP antibody positive). Other environmental factors include periodontal infections (Porphyromonas gingivalis), occupational silica exposure, and gut microbiome alterations (Prevotella copri). Citrullination of proteins at mucosal surfaces (pulmonary, oral, intestinal) generates neoantigens that trigger the autoimmune response in genetically susceptible individuals. Female sex hormones modulate the immune response and contribute to the higher prevalence in women.",
    "diagnosticoEs": "El diagnóstico de la AR se apoya en los criterios de clasificación ACR/EULAR 2010, que evalúan la afectación articular (número y tamaño de articulaciones comprometidas), serología (factor reumatoide y anticuerpos anti-péptido cíclico citrulinado [anti-CCP]), reactantes de fase aguda (velocidad de sedimentación globular y proteína C reactiva) y duración de los síntomas. Los anticuerpos anti-CCP tienen una especificidad superior al 95% y pueden detectarse años antes del inicio clínico. Las radiografías convencionales de manos y pies evalúan erosiones óseas y estrechamiento del espacio articular, aunque la ecografía musculoesquelética y la resonancia magnética son más sensibles para detectar sinovitis temprana, tenosinovitis y edema óseo subcondral. El hemograma puede mostrar anemia de enfermedad crónica y trombocitosis reactiva. Es importante excluir diagnósticos diferenciales como lupus, artritis psoriásica, artritis viral y artrosis erosiva.",
    "diagnosticoEn": "The diagnosis of RA is supported by the 2010 ACR/EULAR classification criteria, which evaluate joint involvement (number and size of affected joints), serology (rheumatoid factor and anti-cyclic citrullinated peptide [anti-CCP] antibodies), acute phase reactants (erythrocyte sedimentation rate and C-reactive protein), and symptom duration. Anti-CCP antibodies have a specificity greater than 95% and can be detected years before clinical onset. Conventional radiographs of hands and feet assess bone erosions and joint space narrowing, although musculoskeletal ultrasound and magnetic resonance imaging are more sensitive for detecting early synovitis, tenosynovitis, and subchondral bone edema. Complete blood count may show anemia of chronic disease and reactive thrombocytosis. It is important to exclude differential diagnoses such as lupus, psoriatic arthritis, viral arthritis, and erosive osteoarthritis.",
    "tratamientoEs": "El tratamiento de la AR sigue la estrategia de 'tratar hacia el objetivo' (treat-to-target), buscando la remisión clínica o la mínima actividad de la enfermedad. El metotrexato es el fármaco antirreumático modificador de la enfermedad (FAME) convencional de primera línea, generalmente iniciado a 15-25 mg semanales con suplementación de ácido fólico. Si no se alcanza el objetivo terapéutico en 3-6 meses, se pueden combinar FAMEs convencionales (metotrexato con leflunomida, sulfasalazina o hidroxicloroquina) o escalar a FAMEs biológicos: inhibidores de TNF-alfa (adalimumab, etanercept, infliximab, certolizumab, golimumab), anti-IL-6 (tocilizumab, sarilumab), modulador de coestimulación de células T (abatacept), o anti-CD20 (rituximab). Los inhibidores de JAK (tofacitinib, baricitinib, upadacitinib) representan FAMEs dirigidos orales. Los corticosteroides en dosis bajas (prednisona 5-7.5 mg/día) pueden usarse como terapia puente durante el inicio de los FAMEs, pero deben reducirse y suspenderse lo antes posible. La rehabilitación física y la terapia ocupacional son componentes esenciales del manejo integral.",
    "tratamientoEn": "RA treatment follows a 'treat-to-target' strategy, aiming for clinical remission or low disease activity. Methotrexate is the first-line conventional disease-modifying antirheumatic drug (DMARD), generally started at 15-25 mg weekly with folic acid supplementation. If the therapeutic target is not achieved in 3-6 months, conventional DMARDs can be combined (methotrexate with leflunomide, sulfasalazine, or hydroxychloroquine) or escalated to biologic DMARDs: TNF-alpha inhibitors (adalimumab, etanercept, infliximab, certolizumab, golimumab), anti-IL-6 (tocilizumab, sarilumab), T-cell costimulation modulator (abatacept), or anti-CD20 (rituximab). JAK inhibitors (tofacitinib, baricitinib, upadacitinib) represent targeted oral DMARDs. Low-dose corticosteroids (prednisone 5-7.5 mg/day) can be used as bridging therapy during DMARD initiation but should be tapered and discontinued as soon as possible. Physical rehabilitation and occupational therapy are essential components of comprehensive management.",
    "prevencionEs": "No existe prevención primaria definitiva para la AR, pero se pueden reducir los factores de riesgo modificables. La cesación tabáquica es la medida preventiva más importante, especialmente en personas con antecedentes familiares de AR o portadores del epítopo compartido HLA-DRB1. La salud periodontal adecuada mediante higiene bucal regular y tratamiento de la enfermedad periodontal puede reducir el riesgo. Mantener un peso saludable, una dieta rica en ácidos grasos omega-3 (pescado azul, nueces), consumo moderado de alcohol y actividad física regular se asocian con menor riesgo. La detección temprana de anticuerpos anti-CCP en familiares de primer grado de pacientes con AR permite identificar individuos en fase preclínica de la enfermedad. El diagnóstico y tratamiento precoces dentro de la ventana de oportunidad terapéutica (primeros 3-6 meses de síntomas) mejoran significativamente el pronóstico.",
    "prevencionEn": "There is no definitive primary prevention for RA, but modifiable risk factors can be reduced. Smoking cessation is the most important preventive measure, especially in people with a family history of RA or carriers of the HLA-DRB1 shared epitope. Adequate periodontal health through regular oral hygiene and treatment of periodontal disease may reduce risk. Maintaining a healthy weight, a diet rich in omega-3 fatty acids (oily fish, nuts), moderate alcohol consumption, and regular physical activity are associated with lower risk. Early detection of anti-CCP antibodies in first-degree relatives of RA patients allows identification of individuals in the preclinical phase of the disease. Early diagnosis and treatment within the therapeutic window of opportunity (first 3-6 months of symptoms) significantly improve prognosis.",
    "complicacionesEs": [
      "Destrucción articular progresiva con erosiones óseas y deformidades invalidantes",
      "Enfermedad cardiovascular acelerada (infarto de miocardio, accidente cerebrovascular)",
      "Enfermedad pulmonar intersticial y nódulos pulmonares reumatoides",
      "Osteoporosis generalizada por inflamación crónica y uso de corticosteroides",
      "Amiloidosis secundaria (AA) por inflamación crónica no controlada",
      "Linfoma (especialmente linfoma difuso de células B grandes) con riesgo aumentado",
      "Infecciones graves por inmunosupresión terapéutica",
      "Síndrome de Felty (esplenomegalia y neutropenia)",
      "Subluxación atlanto-axial cervical con riesgo de compresión medular",
      "Discapacidad funcional y pérdida de la capacidad laboral"
    ],
    "complicacionesEn": [
      "Progressive joint destruction with bone erosions and disabling deformities",
      "Accelerated cardiovascular disease (myocardial infarction, stroke)",
      "Interstitial lung disease and rheumatoid pulmonary nodules",
      "Generalized osteoporosis from chronic inflammation and corticosteroid use",
      "Secondary (AA) amyloidosis from uncontrolled chronic inflammation",
      "Lymphoma (especially diffuse large B-cell lymphoma) with increased risk",
      "Serious infections due to therapeutic immunosuppression",
      "Felty syndrome (splenomegaly and neutropenia)",
      "Cervical atlanto-axial subluxation with risk of spinal cord compression",
      "Functional disability and loss of work capacity"
    ],
    "cuandoConsultarEs": "Consulte a un médico o reumatólogo si presenta rigidez matutina que dura más de 30 minutos, inflamación persistente en articulaciones pequeñas de las manos o pies (especialmente si es simétrica), dolor articular que no mejora con analgésicos comunes, o si tiene antecedentes familiares de artritis reumatoide. Es importante buscar atención temprana ya que el tratamiento iniciado dentro de los primeros 3-6 meses de síntomas tiene los mejores resultados. Acuda a urgencias si presenta fiebre alta con articulación muy inflamada (para descartar artritis séptica), dificultad respiratoria progresiva, o síntomas neurológicos cervicales como entumecimiento o debilidad en extremidades.",
    "cuandoConsultarEn": "Consult a doctor or rheumatologist if you have morning stiffness lasting more than 30 minutes, persistent swelling in small joints of the hands or feet (especially if symmetric), joint pain that does not improve with common analgesics, or if you have a family history of rheumatoid arthritis. It is important to seek early care since treatment started within the first 3-6 months of symptoms has the best outcomes. Go to the emergency room if you develop high fever with a very swollen joint (to rule out septic arthritis), progressive breathing difficulty, or cervical neurological symptoms such as numbness or weakness in extremities."
  },
  {
    "id": "gota",
    "nombreEs": "Gota",
    "nombreEn": "Gout",
    "descripcionEs": "La gota es una artropatía inflamatoria causada por el depósito de cristales de urato monosódico (UMS) en las articulaciones y tejidos blandos periarticulares, como resultado de la hiperuricemia crónica. Es la artritis inflamatoria más frecuente en hombres adultos, con una prevalencia global que ha ido en aumento debido a cambios en la dieta y al incremento de la obesidad y las enfermedades metabólicas. La enfermedad se presenta típicamente como episodios de artritis aguda extremadamente dolorosa (ataques de gota), que tienden a recurrir con frecuencia creciente si no se trata la hiperuricemia subyacente. Con el tiempo, la gota no tratada puede progresar a artropatía crónica tofácea, con depósitos visibles de cristales (tofos) en articulaciones, tendones, bursas y tejido subcutáneo, produciendo destrucción articular y discapacidad. La gota se asocia estrechamente con el síndrome metabólico, la hipertensión arterial, la diabetes mellitus tipo 2, la enfermedad renal crónica y la enfermedad cardiovascular.",
    "descripcionEn": "Gout is an inflammatory arthropathy caused by the deposition of monosodium urate (MSU) crystals in joints and periarticular soft tissues, resulting from chronic hyperuricemia. It is the most common inflammatory arthritis in adult men, with a global prevalence that has been increasing due to dietary changes and the rise in obesity and metabolic diseases. The disease typically presents as episodes of extremely painful acute arthritis (gout attacks), which tend to recur with increasing frequency if the underlying hyperuricemia is not treated. Over time, untreated gout can progress to chronic tophaceous arthropathy, with visible crystal deposits (tophi) in joints, tendons, bursae, and subcutaneous tissue, causing joint destruction and disability. Gout is closely associated with metabolic syndrome, hypertension, type 2 diabetes mellitus, chronic kidney disease, and cardiovascular disease.",
    "categoriaEs": "cristales",
    "categoriaEn": "crystal-induced",
    "sintomasEs": [
      "Dolor articular agudo e intensísimo de inicio súbito, frecuentemente nocturno, que alcanza máxima intensidad en 12-24 horas",
      "Inflamación articular severa con enrojecimiento, calor local y tumefacción marcada",
      "Afectación preferente de la primera articulación metatarsofalángica (podagra) en el primer episodio",
      "Hipersensibilidad extrema al tacto en la articulación afectada (incluso el roce de la sábana es intolerable)",
      "Fiebre y malestar general durante los ataques agudos severos",
      "Tofos gotosos: nódulos subcutáneos blanquecinos en orejas, codos, dedos, tendón de Aquiles",
      "Afectación poliarticular en episodios recurrentes (tobillos, rodillas, muñecas, dedos)",
      "Descamación cutánea superficial durante la resolución del ataque agudo",
      "Rigidez articular y limitación de movilidad durante y entre ataques en enfermedad avanzada",
      "Cálculos renales de ácido úrico con cólico nefrítico"
    ],
    "sintomasEn": [
      "Acute and extremely intense joint pain of sudden onset, frequently nocturnal, reaching maximum intensity in 12-24 hours",
      "Severe joint inflammation with redness, local warmth, and marked swelling",
      "Preferential involvement of the first metatarsophalangeal joint (podagra) in the first episode",
      "Extreme tenderness to touch in the affected joint (even the brush of a bedsheet is intolerable)",
      "Fever and general malaise during severe acute attacks",
      "Gouty tophi: whitish subcutaneous nodules on ears, elbows, fingers, Achilles tendon",
      "Polyarticular involvement in recurrent episodes (ankles, knees, wrists, fingers)",
      "Superficial skin peeling during resolution of the acute attack",
      "Joint stiffness and limited mobility during and between attacks in advanced disease",
      "Uric acid kidney stones with renal colic"
    ],
    "causasEs": "La causa fundamental de la gota es la hiperuricemia crónica sostenida (ácido úrico sérico > 6.8 mg/dL), que supera el umbral de solubilidad del urato monosódico y permite la formación y depósito de cristales. La hiperuricemia resulta de una producción excesiva de ácido úrico (10% de los casos), una excreción renal disminuida (90% de los casos), o ambas. Los factores de riesgo incluyen dieta rica en purinas (carnes rojas, mariscos, vísceras), consumo excesivo de alcohol (especialmente cerveza y licores), bebidas azucaradas con fructosa, obesidad, síndrome metabólico, enfermedad renal crónica, y ciertos medicamentos (diuréticos tiazídicos y de asa, ciclosporina, aspirina en dosis bajas). La predisposición genética afecta principalmente a los transportadores renales de urato (URAT1, GLUT9, ABCG2). Los desencadenantes de ataques agudos incluyen traumatismos articulares, cirugía, deshidratación, infecciones, inicio o cambio de dosis de terapia hipouricemiante, y excesos dietéticos.",
    "causasEn": "The fundamental cause of gout is sustained chronic hyperuricemia (serum uric acid > 6.8 mg/dL), which exceeds the solubility threshold of monosodium urate and allows crystal formation and deposition. Hyperuricemia results from excessive uric acid production (10% of cases), decreased renal excretion (90% of cases), or both. Risk factors include a purine-rich diet (red meat, seafood, organ meats), excessive alcohol consumption (especially beer and spirits), fructose-sweetened beverages, obesity, metabolic syndrome, chronic kidney disease, and certain medications (thiazide and loop diuretics, cyclosporine, low-dose aspirin). Genetic predisposition primarily affects renal urate transporters (URAT1, GLUT9, ABCG2). Triggers for acute attacks include joint trauma, surgery, dehydration, infections, initiation or dose changes of urate-lowering therapy, and dietary excesses.",
    "diagnosticoEs": "El diagnóstico definitivo de gota se establece mediante la identificación de cristales de urato monosódico en el líquido sinovial o material aspirado de un tofo, observados como cristales con birrefringencia negativa bajo microscopio de luz polarizada compensada. En la práctica clínica, el diagnóstico puede realizarse con alta probabilidad basándose en la presentación clínica típica (podagra aguda), hiperuricemia y respuesta rápida a colchicina. Los criterios de clasificación ACR/EULAR 2015 integran hallazgos clínicos, de laboratorio e imagen. La ecografía musculoesquelética puede mostrar el signo de la doble contorno (depósito de cristales sobre el cartílago articular) y agregados hiperecoicos. La tomografía computarizada de energía dual (DECT) permite visualizar depósitos de urato con alta sensibilidad y especificidad. Los análisis de laboratorio incluyen ácido úrico sérico (puede ser normal durante el ataque agudo), función renal, perfil lipídico, glucemia y ácido úrico urinario de 24 horas. Es fundamental descartar artritis séptica, especialmente en artritis monoarticular aguda con fiebre.",
    "diagnosticoEn": "The definitive diagnosis of gout is established by identifying monosodium urate crystals in synovial fluid or material aspirated from a tophus, observed as crystals with negative birefringence under compensated polarized light microscopy. In clinical practice, the diagnosis can be made with high probability based on typical clinical presentation (acute podagra), hyperuricemia, and rapid response to colchicine. The 2015 ACR/EULAR classification criteria integrate clinical, laboratory, and imaging findings. Musculoskeletal ultrasound may show the double contour sign (crystal deposition on articular cartilage) and hyperechoic aggregates. Dual-energy computed tomography (DECT) allows visualization of urate deposits with high sensitivity and specificity. Laboratory tests include serum uric acid (may be normal during acute attack), renal function, lipid profile, blood glucose, and 24-hour urinary uric acid. It is essential to rule out septic arthritis, especially in acute monoarticular arthritis with fever.",
    "tratamientoEs": "El tratamiento de la gota se divide en manejo del ataque agudo y terapia hipouricemiante a largo plazo. Para los ataques agudos, se utilizan AINEs a dosis plenas (indometacina, naproxeno), colchicina en dosis bajas (1.2 mg seguido de 0.6 mg una hora después, luego 0.6 mg cada 12 horas) o corticosteroides orales (prednisona 30-40 mg/día durante 5-7 días) o intraarticulares. Los inhibidores de IL-1 (anakinra, canakinumab) son opciones para pacientes con contraindicaciones a las terapias convencionales. La terapia hipouricemiante (TLU) está indicada en pacientes con ataques recurrentes (dos o más al año), tofos, artropatía gotosa, nefrolitiasis por ácido úrico o ácido úrico sérico muy elevado. El alopurinol (inhibidor de xantina oxidasa) es el fármaco de primera línea, iniciando a dosis bajas (100 mg/día, 50 mg si hay enfermedad renal) y titulando hasta alcanzar un objetivo de ácido úrico sérico < 6 mg/dL (< 5 mg/dL si hay tofos). El febuxostat es una alternativa. Los uricosúricos (probenecid, lesinurad) pueden añadirse si no se alcanza el objetivo. La pegloticasa intravenosa se reserva para gota tofácea refractaria severa. Se debe utilizar profilaxis antiinflamatoria (colchicina 0.6 mg/día o AINEs) durante los primeros 3-6 meses de TLU para prevenir ataques paradójicos.",
    "tratamientoEn": "Gout treatment is divided into acute attack management and long-term urate-lowering therapy. For acute attacks, full-dose NSAIDs (indomethacin, naproxen), low-dose colchicine (1.2 mg followed by 0.6 mg one hour later, then 0.6 mg every 12 hours), or oral corticosteroids (prednisone 30-40 mg/day for 5-7 days) or intra-articular injections are used. IL-1 inhibitors (anakinra, canakinumab) are options for patients with contraindications to conventional therapies. Urate-lowering therapy (ULT) is indicated in patients with recurrent attacks (two or more per year), tophi, gouty arthropathy, uric acid nephrolithiasis, or very elevated serum uric acid. Allopurinol (xanthine oxidase inhibitor) is the first-line drug, starting at low doses (100 mg/day, 50 mg if renal disease) and titrating to achieve a serum uric acid target < 6 mg/dL (< 5 mg/dL if tophi are present). Febuxostat is an alternative. Uricosurics (probenecid, lesinurad) may be added if the target is not reached. Intravenous pegloticase is reserved for severe refractory tophaceous gout. Anti-inflammatory prophylaxis (colchicine 0.6 mg/day or NSAIDs) should be used during the first 3-6 months of ULT to prevent paradoxical attacks.",
    "prevencionEs": "La prevención de la gota y sus ataques incluye modificaciones dietéticas (limitar carnes rojas, mariscos, vísceras y alimentos ricos en purinas; reducir el consumo de alcohol, especialmente cerveza; evitar bebidas azucaradas con fructosa), mantener una hidratación adecuada (al menos 2 litros de agua al día), alcanzar y mantener un peso saludable mediante ejercicio regular y dieta equilibrada, favorecer el consumo de productos lácteos bajos en grasa (efecto uricosúrico protector), cerezas y vitamina C. Revisar y optimizar los medicamentos que pueden elevar el ácido úrico (diuréticos), y sustituirlos cuando sea posible por alternativas con efecto uricosúrico (losartán, fenofibrato). La adherencia estricta a la terapia hipouricemiante prescrita es fundamental para la prevención secundaria. Evitar los cambios bruscos de niveles de ácido úrico, que pueden desencadenar ataques.",
    "prevencionEn": "Prevention of gout and its attacks includes dietary modifications (limiting red meat, seafood, organ meats, and purine-rich foods; reducing alcohol consumption, especially beer; avoiding fructose-sweetened beverages), maintaining adequate hydration (at least 2 liters of water per day), achieving and maintaining a healthy weight through regular exercise and a balanced diet, favoring consumption of low-fat dairy products (protective uricosuric effect), cherries, and vitamin C. Review and optimize medications that may raise uric acid (diuretics), and substitute them when possible with alternatives that have a uricosuric effect (losartan, fenofibrate). Strict adherence to prescribed urate-lowering therapy is fundamental for secondary prevention. Avoid abrupt changes in uric acid levels, which can trigger attacks.",
    "complicacionesEs": [
      "Artropatía gotosa crónica tofácea con destrucción articular y deformidades",
      "Nefrolitiasis por cálculos de ácido úrico y nefropatía por uratos",
      "Enfermedad renal crónica por nefropatía gotosa o por comorbilidades asociadas",
      "Infecciones de tofos ulcerados con riesgo de sobreinfección bacteriana",
      "Síndrome del túnel carpiano y otras neuropatías compresivas por tofos",
      "Enfermedad cardiovascular acelerada (la gota es factor de riesgo cardiovascular independiente)",
      "Discapacidad funcional significativa con limitación de la movilidad y las actividades diarias",
      "Complicaciones del síndrome metabólico asociado (diabetes, hipertensión, dislipidemia)"
    ],
    "complicacionesEn": [
      "Chronic tophaceous gouty arthropathy with joint destruction and deformities",
      "Nephrolithiasis from uric acid stones and urate nephropathy",
      "Chronic kidney disease from gouty nephropathy or associated comorbidities",
      "Infections of ulcerated tophi with risk of bacterial superinfection",
      "Carpal tunnel syndrome and other compressive neuropathies from tophi",
      "Accelerated cardiovascular disease (gout is an independent cardiovascular risk factor)",
      "Significant functional disability with limitation of mobility and daily activities",
      "Complications of associated metabolic syndrome (diabetes, hypertension, dyslipidemia)"
    ],
    "cuandoConsultarEs": "Consulte a un médico si experimenta un episodio de dolor articular agudo e intenso de inicio súbito, especialmente en el dedo gordo del pie, tobillo o rodilla, con enrojecimiento e hinchazón marcada. Busque atención urgente si presenta fiebre alta junto con articulación muy inflamada (para descartar artritis séptica). Consulte a un reumatólogo si tiene episodios recurrentes de gota, si los ataques son cada vez más frecuentes o severos, si ha desarrollado nódulos (tofos) en articulaciones o tejidos blandos, o si el ácido úrico sérico permanece elevado a pesar del tratamiento. También debe consultar si tiene enfermedad renal crónica y necesita ajuste de la terapia hipouricemiante.",
    "cuandoConsultarEn": "Consult a doctor if you experience an episode of acute and intense joint pain of sudden onset, especially in the big toe, ankle, or knee, with marked redness and swelling. Seek urgent care if you have a high fever along with a very inflamed joint (to rule out septic arthritis). Consult a rheumatologist if you have recurrent gout episodes, if attacks are becoming more frequent or severe, if you have developed nodules (tophi) in joints or soft tissues, or if serum uric acid remains elevated despite treatment. You should also consult if you have chronic kidney disease and need adjustment of urate-lowering therapy."
  },
  {
    "id": "espondilitis-anquilosante",
    "nombreEs": "Espondilitis Anquilosante",
    "nombreEn": "Ankylosing Spondylitis",
    "descripcionEs": "La espondilitis anquilosante (EA) es una enfermedad inflamatoria crónica que pertenece al grupo de las espondiloartropatías y afecta principalmente al esqueleto axial, en particular las articulaciones sacroilíacas y la columna vertebral. Se caracteriza por inflamación crónica de las entesis (inserción de tendones y ligamentos en el hueso), que conduce progresivamente a la formación de nuevo hueso (sindesmofitos) y, en casos avanzados, a la fusión completa de la columna vertebral (anquilosis), dando lugar a la característica 'columna en caña de bambú'. La EA afecta predominantemente a hombres jóvenes, con un inicio típico entre los 15 y 30 años, y presenta una fuerte asociación con el antígeno leucocitario humano HLA-B27, presente en más del 90% de los pacientes. Además de la afectación axial, puede producir artritis periférica, uveítis anterior aguda, enfermedad inflamatoria intestinal, psoriasis y afectación cardíaca y pulmonar.",
    "descripcionEn": "Ankylosing spondylitis (AS) is a chronic inflammatory disease that belongs to the spondyloarthropathy group and primarily affects the axial skeleton, particularly the sacroiliac joints and the spine. It is characterized by chronic inflammation of entheses (insertion sites of tendons and ligaments into bone), which progressively leads to new bone formation (syndesmophytes) and, in advanced cases, complete fusion of the spine (ankylosis), resulting in the characteristic 'bamboo spine.' AS predominantly affects young men, with typical onset between 15 and 30 years of age, and has a strong association with human leukocyte antigen HLA-B27, present in more than 90% of patients. Beyond axial involvement, it can produce peripheral arthritis, acute anterior uveitis, inflammatory bowel disease, psoriasis, and cardiac and pulmonary involvement.",
    "categoriaEs": "espondiloartropatía",
    "categoriaEn": "spondyloarthropathy",
    "sintomasEs": [
      "Dolor lumbar inflamatorio crónico de inicio insidioso, que mejora con el ejercicio y empeora con el reposo",
      "Rigidez matutina severa de la columna vertebral que dura más de 30 minutos",
      "Dolor nocturno que obliga a levantarse de la cama, especialmente en la segunda mitad de la noche",
      "Dolor en nalgas alternante (sacroileítis bilateral)",
      "Limitación progresiva de la movilidad de la columna lumbar y dorsal",
      "Reducción de la expansión torácica por afectación de articulaciones costovertebrales",
      "Uveítis anterior aguda unilateral (ojo rojo doloroso con fotofobia y visión borrosa)",
      "Entesitis periférica (dolor en inserción del tendón de Aquiles, fascitis plantar)",
      "Artritis periférica asimétrica preferentemente de grandes articulaciones (caderas, rodillas, hombros)",
      "Fatiga significativa y deterioro de la calidad de vida",
      "Postura cifótica progresiva con pérdida de la lordosis lumbar"
    ],
    "sintomasEn": [
      "Chronic inflammatory low back pain of insidious onset that improves with exercise and worsens with rest",
      "Severe morning stiffness of the spine lasting more than 30 minutes",
      "Nocturnal pain that forces getting out of bed, especially in the second half of the night",
      "Alternating buttock pain (bilateral sacroiliitis)",
      "Progressive limitation of lumbar and thoracic spine mobility",
      "Reduced chest expansion from costovertebral joint involvement",
      "Acute unilateral anterior uveitis (painful red eye with photophobia and blurred vision)",
      "Peripheral enthesitis (Achilles tendon insertion pain, plantar fasciitis)",
      "Asymmetric peripheral arthritis preferentially affecting large joints (hips, knees, shoulders)",
      "Significant fatigue and deterioration of quality of life",
      "Progressive kyphotic posture with loss of lumbar lordosis"
    ],
    "causasEs": "La espondilitis anquilosante tiene una base genética fuerte, con el HLA-B27 como principal factor de susceptibilidad genética, aunque solo un 5-6% de los portadores de HLA-B27 desarrollan la enfermedad, lo que indica la participación de otros factores genéticos (ERAP1, IL-23R, RUNX3) y ambientales. La patogenia involucra la activación aberrante del sistema inmunitario innato y adaptativo en las entesis y las articulaciones sacroilíacas, con un papel central de las vías de IL-17 e IL-23. Se postula que el estrés mecánico en las entesis desencadena microlesiones que, en individuos genéticamente susceptibles, producen una respuesta inflamatoria desproporcionada. La disbiosis del microbioma intestinal, particularmente alteraciones en la microbiota ileal, puede contribuir a la patogenia a través de la activación inmune mucosa. Los factores ambientales incluyen infecciones gastrointestinales y genitourinarias previas, tabaquismo y estrés mecánico repetido.",
    "causasEn": "Ankylosing spondylitis has a strong genetic basis, with HLA-B27 as the main genetic susceptibility factor, although only 5-6% of HLA-B27 carriers develop the disease, indicating the involvement of other genetic factors (ERAP1, IL-23R, RUNX3) and environmental factors. The pathogenesis involves aberrant activation of the innate and adaptive immune systems at entheses and sacroiliac joints, with a central role for the IL-17 and IL-23 pathways. It is postulated that mechanical stress at entheses triggers microinjuries that, in genetically susceptible individuals, produce a disproportionate inflammatory response. Gut microbiome dysbiosis, particularly alterations in ileal microbiota, may contribute to pathogenesis through mucosal immune activation. Environmental factors include prior gastrointestinal and genitourinary infections, smoking, and repetitive mechanical stress.",
    "diagnosticoEs": "El diagnóstico de la EA se basa en los criterios de clasificación ASAS para espondiloartritis axial, que requieren la presencia de sacroileítis demostrada por imagen (radiografía o resonancia magnética) junto con al menos una característica clínica de espondiloartritis, o la presencia de HLA-B27 positivo junto con al menos dos características clínicas. La resonancia magnética de articulaciones sacroilíacas es la técnica más sensible para detectar inflamación activa (edema óseo subcondral) en fases tempranas, antes de que aparezcan cambios radiográficos. La radiografía simple muestra sacroileítis bilateral (ensanchamiento, esclerosis, erosiones, fusión), sindesmofitos y eventualmente anquilosis vertebral en fases avanzadas. Los análisis de laboratorio incluyen HLA-B27 (positivo en >90%), PCR y VSG (elevadas en 50-70%), y hemograma. La evaluación funcional mediante índices validados (BASDAI para actividad de enfermedad, BASFI para función) es esencial para el seguimiento clínico.",
    "diagnosticoEn": "The diagnosis of AS is based on the ASAS classification criteria for axial spondyloarthritis, which require the presence of sacroiliitis demonstrated by imaging (radiograph or MRI) along with at least one clinical feature of spondyloarthritis, or the presence of a positive HLA-B27 along with at least two clinical features. MRI of the sacroiliac joints is the most sensitive technique for detecting active inflammation (subchondral bone edema) in early stages, before radiographic changes appear. Plain radiographs show bilateral sacroiliitis (widening, sclerosis, erosions, fusion), syndesmophytes, and eventually vertebral ankylosis in advanced stages. Laboratory tests include HLA-B27 (positive in >90%), CRP and ESR (elevated in 50-70%), and complete blood count. Functional assessment using validated indices (BASDAI for disease activity, BASFI for function) is essential for clinical monitoring.",
    "tratamientoEs": "El tratamiento de la EA combina medidas farmacológicas y no farmacológicas. La fisioterapia y el ejercicio regular son componentes fundamentales del tratamiento, incluyendo ejercicios de estiramiento, fortalecimiento de la musculatura paravertebral y torácica, natación y ejercicios respiratorios para mantener la movilidad espinal y la expansión torácica. Los AINEs son el tratamiento farmacológico de primera línea y se ha demostrado que su uso continuo puede retardar la progresión radiográfica en algunos pacientes. Si los AINEs son insuficientes, los inhibidores de TNF-alfa (adalimumab, etanercept, infliximab, golimumab, certolizumab) son el tratamiento biológico de primera línea con evidencia sólida de eficacia sobre los síntomas, la inflamación objetiva y la calidad de vida. Los inhibidores de IL-17A (secukinumab, ixekizumab) representan una alternativa biológica efectiva, particularmente útil en pacientes con psoriasis concomitante. Los inhibidores de JAK (tofacitinib, upadacitinib) han demostrado eficacia en espondiloartritis axial. Los FAMEs convencionales (metotrexato, sulfasalazina) solo tienen eficacia en la artritis periférica, no en la enfermedad axial. Los corticosteroides sistémicos no son efectivos y se evitan; las inyecciones locales pueden ser útiles para entesitis o artritis periférica aislada. La cirugía (artroplastia de cadera, osteotomía correctora vertebral) se reserva para casos avanzados con deformidad severa o destrucción articular.",
    "tratamientoEn": "AS treatment combines pharmacological and non-pharmacological measures. Physical therapy and regular exercise are fundamental treatment components, including stretching exercises, paravertebral and thoracic muscle strengthening, swimming, and breathing exercises to maintain spinal mobility and chest expansion. NSAIDs are the first-line pharmacological treatment, and continuous use has been shown to potentially retard radiographic progression in some patients. If NSAIDs are insufficient, TNF-alpha inhibitors (adalimumab, etanercept, infliximab, golimumab, certolizumab) are the first-line biologic treatment with solid evidence of efficacy on symptoms, objective inflammation, and quality of life. IL-17A inhibitors (secukinumab, ixekizumab) represent an effective biologic alternative, particularly useful in patients with concomitant psoriasis. JAK inhibitors (tofacitinib, upadacitinib) have demonstrated efficacy in axial spondyloarthritis. Conventional DMARDs (methotrexate, sulfasalazine) are only effective for peripheral arthritis, not axial disease. Systemic corticosteroids are not effective and are avoided; local injections may be useful for isolated enthesitis or peripheral arthritis. Surgery (hip arthroplasty, corrective vertebral osteotomy) is reserved for advanced cases with severe deformity or joint destruction.",
    "prevencionEs": "No existe prevención primaria para la espondilitis anquilosante debido a su fuerte componente genético. Sin embargo, la detección precoz es clave para prevenir las complicaciones y la discapacidad. Se recomienda evaluar dolor lumbar inflamatorio crónico en adultos jóvenes, especialmente si son HLA-B27 positivos o tienen antecedentes familiares de espondiloartritis. Las medidas para prevenir la progresión incluyen mantener un programa de ejercicio físico regular (especialmente natación y ejercicios de extensión espinal), cesación tabáquica (el tabaquismo se asocia con mayor progresión radiográfica), mantener una postura correcta, dormir en posición supina sobre colchón firme, adherencia al tratamiento farmacológico y seguimiento reumatológico regular para ajustar el tratamiento según la actividad de la enfermedad.",
    "prevencionEn": "There is no primary prevention for ankylosing spondylitis due to its strong genetic component. However, early detection is key to preventing complications and disability. It is recommended to evaluate chronic inflammatory low back pain in young adults, especially if they are HLA-B27 positive or have a family history of spondyloarthritis. Measures to prevent progression include maintaining a regular physical exercise program (especially swimming and spinal extension exercises), smoking cessation (smoking is associated with greater radiographic progression), maintaining correct posture, sleeping supine on a firm mattress, adherence to pharmacological treatment, and regular rheumatology follow-up to adjust treatment according to disease activity.",
    "complicacionesEs": [
      "Anquilosis vertebral completa con deformidad cifótica severa y pérdida de función",
      "Fracturas vertebrales por osteoporosis o traumatismo mínimo en columna anquilosada (alto riesgo de lesión medular)",
      "Coxartrosis (artropatía destructiva de cadera) que requiere artroplastia total",
      "Uveítis anterior recurrente con riesgo de sinequias, glaucoma y pérdida visual",
      "Enfermedad inflamatoria intestinal (enfermedad de Crohn o colitis ulcerosa)",
      "Insuficiencia aórtica y trastornos de conducción cardíaca",
      "Fibrosis pulmonar apical (rara, en enfermedad avanzada)",
      "Síndrome de cauda equina por aracnoiditis (complicación rara pero grave)",
      "Amiloidosis secundaria por inflamación crónica no controlada",
      "Depresión y deterioro significativo de la calidad de vida"
    ],
    "complicacionesEn": [
      "Complete vertebral ankylosis with severe kyphotic deformity and loss of function",
      "Vertebral fractures from osteoporosis or minimal trauma in ankylosed spine (high risk of spinal cord injury)",
      "Hip arthropathy (destructive coxarthrosis) requiring total hip arthroplasty",
      "Recurrent anterior uveitis with risk of synechiae, glaucoma, and visual loss",
      "Inflammatory bowel disease (Crohn's disease or ulcerative colitis)",
      "Aortic regurgitation and cardiac conduction abnormalities",
      "Apical pulmonary fibrosis (rare, in advanced disease)",
      "Cauda equina syndrome from arachnoiditis (rare but serious complication)",
      "Secondary amyloidosis from uncontrolled chronic inflammation",
      "Depression and significant deterioration of quality of life"
    ],
    "cuandoConsultarEs": "Consulte a un reumatólogo si tiene dolor lumbar crónico de inicio antes de los 40 años que mejora con el ejercicio pero empeora con el reposo, rigidez matutina de más de 30 minutos, dolor nocturno en la espalda baja que mejora al levantarse, o si tiene antecedentes familiares de espondilitis anquilosante u otras espondiloartritis. También debe consultar si presenta episodios de ojo rojo doloroso (posible uveítis), dolor en el talón persistente (entesitis aquílea), o dolor en nalgas alternante. Acuda a urgencias si sufre un traumatismo con columna previamente anquilosada (alto riesgo de fractura inestable) o si presenta pérdida súbita de fuerza o sensibilidad en las extremidades.",
    "cuandoConsultarEn": "Consult a rheumatologist if you have chronic low back pain starting before age 40 that improves with exercise but worsens with rest, morning stiffness lasting more than 30 minutes, nighttime back pain that improves upon rising, or if you have a family history of ankylosing spondylitis or other spondyloarthritides. You should also consult if you experience episodes of painful red eye (possible uveitis), persistent heel pain (Achilles enthesitis), or alternating buttock pain. Go to the emergency room if you suffer trauma with a previously ankylosed spine (high risk of unstable fracture) or if you experience sudden loss of strength or sensation in the extremities."
  },
  {
    "id": "sindrome-sjogren",
    "nombreEs": "Síndrome de Sjögren",
    "nombreEn": "Sjogren's Syndrome",
    "descripcionEs": "El síndrome de Sjögren (SS) es una enfermedad autoinmune sistémica crónica caracterizada por la infiltración linfocitaria progresiva de las glándulas exocrinas, principalmente las glándulas salivales y lagrimales, lo que produce sequedad bucal (xerostomía) y ocular (xeroftalmía) como manifestaciones cardinales. El SS puede presentarse como enfermedad primaria (SS primario) o asociado a otra enfermedad autoinmune (SS secundario), más frecuentemente artritis reumatoide, lupus eritematoso sistémico o esclerosis sistémica. Es una de las enfermedades autoinmunes más prevalentes, afectando predominantemente a mujeres (relación 9:1) con un pico de incidencia entre los 40 y 60 años. Además de la sequedad glandular, el SS puede producir manifestaciones extraglandulares significativas que afectan articulaciones, pulmones, riñones, sistema nervioso periférico y central, piel y vasos sanguíneos. Notablemente, el SS conlleva un riesgo aumentado de 5-15 veces de desarrollar linfoma no Hodgkin, particularmente linfoma de la zona marginal de tipo MALT.",
    "descripcionEn": "Sjogren's syndrome (SS) is a chronic systemic autoimmune disease characterized by progressive lymphocytic infiltration of exocrine glands, primarily the salivary and lacrimal glands, producing oral dryness (xerostomia) and ocular dryness (xerophthalmia) as cardinal manifestations. SS can present as a primary disease (primary SS) or associated with another autoimmune disease (secondary SS), most frequently rheumatoid arthritis, systemic lupus erythematosus, or systemic sclerosis. It is one of the most prevalent autoimmune diseases, predominantly affecting women (9:1 ratio) with a peak incidence between 40 and 60 years of age. Beyond glandular dryness, SS can produce significant extraglandular manifestations affecting joints, lungs, kidneys, peripheral and central nervous system, skin, and blood vessels. Notably, SS carries a 5-15 fold increased risk of developing non-Hodgkin lymphoma, particularly marginal zone MALT-type lymphoma.",
    "categoriaEs": "autoinmune sistémica",
    "categoriaEn": "systemic autoimmune",
    "sintomasEs": [
      "Sequedad bucal (xerostomía) persistente que dificulta hablar, tragar y masticar alimentos secos",
      "Sequedad ocular (xeroftalmía) con sensación de arenilla, ardor y fatiga visual",
      "Inflamación recurrente de las glándulas parótidas (parotiditis)",
      "Caries dentales aceleradas y enfermedad periodontal por falta de saliva protectora",
      "Sequedad vaginal con dispareunia y mayor susceptibilidad a infecciones",
      "Sequedad cutánea generalizada y sequedad nasal con epistaxis",
      "Artralgia o artritis no erosiva de pequeñas articulaciones",
      "Fatiga profunda e incapacitante que afecta significativamente la calidad de vida",
      "Púrpura palpable y vasculitis cutánea de pequeños vasos",
      "Neuropatía periférica con parestesias, entumecimiento o dolor neuropático",
      "Tos seca persistente por sequedad traqueobronquial",
      "Fenómeno de Raynaud en un 15-30% de los pacientes"
    ],
    "sintomasEn": [
      "Persistent oral dryness (xerostomia) making it difficult to speak, swallow, and chew dry foods",
      "Ocular dryness (xerophthalmia) with gritty sensation, burning, and visual fatigue",
      "Recurrent parotid gland swelling (parotiditis)",
      "Accelerated dental caries and periodontal disease from lack of protective saliva",
      "Vaginal dryness with dyspareunia and increased susceptibility to infections",
      "Generalized skin dryness and nasal dryness with epistaxis",
      "Arthralgia or non-erosive arthritis of small joints",
      "Profound and incapacitating fatigue significantly affecting quality of life",
      "Palpable purpura and small vessel cutaneous vasculitis",
      "Peripheral neuropathy with paresthesias, numbness, or neuropathic pain",
      "Persistent dry cough from tracheobronchial dryness",
      "Raynaud's phenomenon in 15-30% of patients"
    ],
    "causasEs": "La causa del síndrome de Sjögren es multifactorial, involucrando predisposición genética, desencadenantes ambientales y desregulación inmunológica. Los factores genéticos incluyen asociaciones con HLA-DRB1, HLA-DQB1 y variantes en genes relacionados con la respuesta inmune (IRF5, STAT4, BLK). Las infecciones virales, particularmente por el virus de Epstein-Barr, citomegalovirus, virus de la hepatitis C y HTLV-1, se han implicado como posibles desencadenantes en individuos genéticamente susceptibles mediante mecanismos de mimetismo molecular. Los factores hormonales contribuyen a la predominancia femenina, con evidencia del papel de los estrógenos y la deficiencia de andrógenos en la fisiopatología glandular. La patogenia implica la infiltración de linfocitos T CD4+ y linfocitos B en las glándulas exocrinas, con producción de autoanticuerpos (anti-Ro/SSA, anti-La/SSB), activación del sistema del interferón tipo I, formación de centros germinales ectópicos en las glándulas salivales y destrucción progresiva del tejido glandular.",
    "causasEn": "The cause of Sjogren's syndrome is multifactorial, involving genetic predisposition, environmental triggers, and immune dysregulation. Genetic factors include associations with HLA-DRB1, HLA-DQB1, and variants in immune response-related genes (IRF5, STAT4, BLK). Viral infections, particularly Epstein-Barr virus, cytomegalovirus, hepatitis C virus, and HTLV-1, have been implicated as possible triggers in genetically susceptible individuals through molecular mimicry mechanisms. Hormonal factors contribute to the female predominance, with evidence for the role of estrogens and androgen deficiency in glandular pathophysiology. The pathogenesis involves infiltration of CD4+ T lymphocytes and B lymphocytes into exocrine glands, with production of autoantibodies (anti-Ro/SSA, anti-La/SSB), activation of the type I interferon system, formation of ectopic germinal centers in salivary glands, and progressive destruction of glandular tissue.",
    "diagnosticoEs": "El diagnóstico del SS se basa en los criterios de clasificación ACR/EULAR 2016, que incluyen una puntuación ponderada de cinco ítems: biopsia de glándula salival menor con sialadenitis linfocítica focal (puntuación de foco >= 1), anticuerpos anti-Ro/SSA positivos, puntuación de tinción ocular >= 5 (o puntuación de van Bijsterveld >= 4), test de Schirmer <= 5 mm/5 minutos, y flujo salival no estimulado <= 0.1 mL/minuto. Las pruebas de laboratorio incluyen ANA, anti-Ro/SSA y anti-La/SSB, factor reumatoide, niveles de inmunoglobulinas (hipergammaglobulinemia frecuente), complemento C3 y C4, hemograma, función renal y análisis de orina. La ecografía de glándulas salivales mayores muestra cambios característicos (hipoecogenicidad, áreas anecoicas intraparenquimatosas). Es fundamental la vigilancia de desarrollo de linfoma mediante monitorización clínica y de laboratorio (descenso del complemento, aparición de crioglobulinas, aumento de beta-2 microglobulina, aparición de componente monoclonal, agrandamiento glandular persistente).",
    "diagnosticoEn": "The diagnosis of SS is based on the 2016 ACR/EULAR classification criteria, which include a weighted score of five items: minor salivary gland biopsy with focal lymphocytic sialadenitis (focus score >= 1), positive anti-Ro/SSA antibodies, ocular staining score >= 5 (or van Bijsterveld score >= 4), Schirmer test <= 5 mm/5 minutes, and unstimulated salivary flow <= 0.1 mL/minute. Laboratory tests include ANA, anti-Ro/SSA and anti-La/SSB, rheumatoid factor, immunoglobulin levels (hypergammaglobulinemia frequent), complement C3 and C4, complete blood count, renal function, and urinalysis. Ultrasound of major salivary glands shows characteristic changes (hypoechogenicity, intraparenchymal anechoic areas). Vigilance for lymphoma development is essential through clinical and laboratory monitoring (complement decrease, appearance of cryoglobulins, increased beta-2 microglobulin, appearance of monoclonal component, persistent glandular enlargement).",
    "tratamientoEs": "El tratamiento del SS es principalmente sintomático para la sequedad, combinado con terapia inmunomoduladora para las manifestaciones sistémicas. Para la xeroftalmía se utilizan lágrimas artificiales sin conservantes, geles lubricantes, ciclosporina tópica ocular (Restasis) o lifitegrast (Xiidra), y en casos severos, oclusión de puntos lagrimales o lentes esclerales. Para la xerostomía se recomienda hidratación frecuente, sustitutos salivales, estimulantes del flujo salival (pilocarpina 5 mg tres veces al día o cevimelina 30 mg tres veces al día), cuidado dental riguroso con fluoruro tópico y chicles sin azúcar con xilitol. La hidroxicloroquina se utiliza para artralgia, fatiga y manifestaciones cutáneas. Para manifestaciones extraglandulares severas (vasculitis, neuropatía, glomerulonefritis, neumonitis intersticial) se emplean corticosteroides, metotrexato, azatioprina, micofenolato mofetilo o rituximab. La terapia con rituximab (anti-CD20) ha mostrado beneficio en manifestaciones sistémicas severas y puede reducir el riesgo de progresión linfoproliferativa. El belimumab está en investigación para esta indicación. El manejo multidisciplinario con oftalmología, odontología, y ginecología es esencial.",
    "tratamientoEn": "SS treatment is primarily symptomatic for dryness, combined with immunomodulatory therapy for systemic manifestations. For xerophthalmia, preservative-free artificial tears, lubricant gels, topical ocular cyclosporine (Restasis) or lifitegrast (Xiidra) are used, and in severe cases, punctal occlusion or scleral lenses. For xerostomia, frequent hydration, salivary substitutes, salivary flow stimulants (pilocarpine 5 mg three times daily or cevimeline 30 mg three times daily), rigorous dental care with topical fluoride, and sugar-free xylitol gum are recommended. Hydroxychloroquine is used for arthralgia, fatigue, and cutaneous manifestations. For severe extraglandular manifestations (vasculitis, neuropathy, glomerulonephritis, interstitial pneumonitis), corticosteroids, methotrexate, azathioprine, mycophenolate mofetil, or rituximab are employed. Rituximab (anti-CD20) therapy has shown benefit in severe systemic manifestations and may reduce the risk of lymphoproliferative progression. Belimumab is under investigation for this indication. Multidisciplinary management with ophthalmology, dentistry, and gynecology is essential.",
    "prevencionEs": "No existe prevención primaria para el síndrome de Sjögren. La prevención secundaria se centra en minimizar las complicaciones de la sequedad y detectar precozmente las manifestaciones sistémicas graves. Las medidas preventivas incluyen mantener una excelente higiene oral con visitas dentales cada 3-4 meses, uso regular de fluoruro tópico, evitar medicamentos que agraven la sequedad (antihistamínicos, antidepresivos tricíclicos, diuréticos, descongestionantes), uso de humidificador ambiental, protección ocular contra el viento y ambientes secos, uso de gafas de sol con protección lateral, evitar el tabaquismo y ambientes con humo, hidratación frecuente, y seguimiento reumatológico regular con monitorización de marcadores de linfoma. La vacunación apropiada es importante dado el estado de desregulación inmunológica.",
    "prevencionEn": "There is no primary prevention for Sjogren's syndrome. Secondary prevention focuses on minimizing complications of dryness and early detection of serious systemic manifestations. Preventive measures include maintaining excellent oral hygiene with dental visits every 3-4 months, regular use of topical fluoride, avoiding medications that worsen dryness (antihistamines, tricyclic antidepressants, diuretics, decongestants), using environmental humidifiers, eye protection against wind and dry environments, wearing wrap-around sunglasses, avoiding smoking and smoky environments, frequent hydration, and regular rheumatology follow-up with monitoring of lymphoma markers. Appropriate vaccination is important given the state of immune dysregulation.",
    "complicacionesEs": [
      "Linfoma no Hodgkin (especialmente linfoma MALT de zona marginal) con riesgo 5-15 veces mayor",
      "Queratoconjuntivitis sicca severa con úlceras corneales y pérdida visual",
      "Caries dentales masivas y pérdida dental prematura",
      "Neuropatía periférica sensorial dolorosa o neuropatía de fibras pequeñas",
      "Acidosis tubular renal distal (tipo 1) con nefrocalcinosis",
      "Neumonitis intersticial linfocítica y enfermedad pulmonar restrictiva",
      "Vasculitis cutánea y crioglobulinemia mixta",
      "Cirrosis biliar primaria y hepatitis autoinmune asociadas",
      "Tiroiditis autoinmune (enfermedad de Hashimoto) frecuentemente coexistente",
      "Depresión, deterioro cognitivo y reducción significativa de la calidad de vida"
    ],
    "complicacionesEn": [
      "Non-Hodgkin lymphoma (especially marginal zone MALT lymphoma) with 5-15 fold increased risk",
      "Severe keratoconjunctivitis sicca with corneal ulcers and visual loss",
      "Massive dental caries and premature tooth loss",
      "Painful sensory peripheral neuropathy or small fiber neuropathy",
      "Distal renal tubular acidosis (type 1) with nephrocalcinosis",
      "Lymphocytic interstitial pneumonitis and restrictive lung disease",
      "Cutaneous vasculitis and mixed cryoglobulinemia",
      "Associated primary biliary cirrhosis and autoimmune hepatitis",
      "Autoimmune thyroiditis (Hashimoto's disease) frequently coexistent",
      "Depression, cognitive impairment, and significant reduction in quality of life"
    ],
    "cuandoConsultarEs": "Consulte a un reumatólogo si presenta sequedad bucal y ocular persistente que no mejora con medidas habituales, caries dentales recurrentes inexplicables, inflamación de las glándulas parótidas, dolor articular asociado a sequedad, o si tiene otra enfermedad autoinmune y desarrolla síntomas de sequedad. Busque atención médica urgente si experimenta agrandamiento glandular unilateral rápido y persistente (posible linfoma), pérdida visual significativa, debilidad o entumecimiento progresivo en extremidades (neuropatía), dificultad respiratoria, o púrpura cutánea extensa. La evaluación oftalmológica regular es importante para detectar y tratar la afectación corneal precozmente.",
    "cuandoConsultarEn": "Consult a rheumatologist if you have persistent oral and ocular dryness that does not improve with usual measures, unexplained recurrent dental caries, parotid gland swelling, joint pain associated with dryness, or if you have another autoimmune disease and develop dryness symptoms. Seek urgent medical attention if you experience rapid and persistent unilateral glandular enlargement (possible lymphoma), significant visual loss, progressive weakness or numbness in extremities (neuropathy), breathing difficulty, or extensive cutaneous purpura. Regular ophthalmological evaluation is important to detect and treat corneal involvement early."
  },
  {
    "id": "esclerodermia",
    "nombreEs": "Esclerodermia (Esclerosis Sistémica)",
    "nombreEn": "Scleroderma (Systemic Sclerosis)",
    "descripcionEs": "La esclerodermia o esclerosis sistémica (ES) es una enfermedad autoinmune crónica del tejido conectivo caracterizada por tres procesos patológicos fundamentales: vasculopatía de pequeños vasos (daño microvascular), desregulación inmunológica con producción de autoanticuerpos y activación de linfocitos, y fibrosis excesiva y progresiva de la piel y órganos internos. La ES se clasifica en dos subtipos principales: esclerosis sistémica cutánea limitada (anteriormente síndrome de CREST) y esclerosis sistémica cutánea difusa, que difieren en la extensión de la afectación cutánea, el patrón de autoanticuerpos y las complicaciones orgánicas. Es una enfermedad relativamente rara (prevalencia de 250 por millón) que afecta predominantemente a mujeres (relación 4:1) con inicio típico entre los 30 y 50 años. La esclerodermia tiene la mortalidad más alta entre las enfermedades autoinmunes del tejido conectivo, principalmente por afectación pulmonar (enfermedad pulmonar intersticial e hipertensión arterial pulmonar), cardíaca y renal.",
    "descripcionEn": "Scleroderma or systemic sclerosis (SSc) is a chronic autoimmune connective tissue disease characterized by three fundamental pathological processes: small vessel vasculopathy (microvascular damage), immune dysregulation with autoantibody production and lymphocyte activation, and excessive and progressive fibrosis of the skin and internal organs. SSc is classified into two main subtypes: limited cutaneous systemic sclerosis (formerly CREST syndrome) and diffuse cutaneous systemic sclerosis, which differ in the extent of skin involvement, autoantibody pattern, and organ complications. It is a relatively rare disease (prevalence of 250 per million) predominantly affecting women (4:1 ratio) with typical onset between 30 and 50 years of age. Scleroderma has the highest mortality among autoimmune connective tissue diseases, primarily from pulmonary involvement (interstitial lung disease and pulmonary arterial hypertension), cardiac, and renal disease.",
    "categoriaEs": "autoinmune sistémica",
    "categoriaEn": "systemic autoimmune",
    "sintomasEs": [
      "Fenómeno de Raynaud con cambios tricolor en los dedos (blanco, azul, rojo) ante el frío o el estrés",
      "Engrosamiento y endurecimiento progresivo de la piel de los dedos (esclerodactilia) y la cara",
      "Úlceras digitales dolorosas y cicatrices puntiformes en pulpejos de los dedos (pitting scars)",
      "Disfagia por dismotilidad esofágica y reflujo gastroesofágico severo",
      "Disnea progresiva de esfuerzo por enfermedad pulmonar intersticial o hipertensión pulmonar",
      "Artralgia, mialgia y contracturas articulares por fibrosis periarticular",
      "Telangiectasias faciales y en manos",
      "Calcinosis subcutánea con depósitos de calcio dolorosos en dedos y articulaciones",
      "Microstomía (reducción de la apertura bucal) con dificultad para la higiene dental",
      "Crepitación tendinosa palpable (roce de fricción tendinosa)",
      "Fatiga severa y pérdida de peso involuntaria",
      "Hinchazón de dedos (dedos en salchicha o puffy fingers) como manifestación temprana"
    ],
    "sintomasEn": [
      "Raynaud's phenomenon with tricolor changes in fingers (white, blue, red) from cold or stress",
      "Progressive thickening and hardening of the skin of fingers (sclerodactyly) and face",
      "Painful digital ulcers and pitted fingertip scars (pitting scars)",
      "Dysphagia from esophageal dysmotility and severe gastroesophageal reflux",
      "Progressive exertional dyspnea from interstitial lung disease or pulmonary hypertension",
      "Arthralgia, myalgia, and joint contractures from periarticular fibrosis",
      "Facial and hand telangiectasias",
      "Subcutaneous calcinosis with painful calcium deposits in fingers and joints",
      "Microstomia (reduced mouth opening) with difficulty in dental hygiene",
      "Palpable tendon crepitus (tendon friction rubs)",
      "Severe fatigue and involuntary weight loss",
      "Finger swelling (sausage digits or puffy fingers) as an early manifestation"
    ],
    "causasEs": "La causa de la esclerosis sistémica no se conoce completamente, pero se considera resultado de la interacción entre susceptibilidad genética y desencadenantes ambientales. Los factores genéticos incluyen asociaciones con HLA-DRB1, HLA-DQB1 y variantes en genes del sistema inmune (IRF5, STAT4, BANK1, CD247). Los factores ambientales implicados incluyen exposición a sílice y polvo de sílice, solventes orgánicos (tricloroetileno, cloruro de vinilo), ciertos medicamentos (bleomicina), infecciones virales (citomegalovirus, parvovirus B19) y microquimerismo (persistencia de células fetales en la madre). La patogenia involucra un daño endotelial microvascular inicial que activa plaquetas y la cascada de coagulación, seguido de activación inmunológica con producción de autoanticuerpos específicos (anti-centrómero, anti-topoisomerasa I/anti-Scl-70, anti-RNA polimerasa III) y liberación de citoquinas profibróticas (TGF-beta, PDGF, CTGF, endotelina-1) que estimulan la proliferación de fibroblastos y la producción excesiva de colágeno y matriz extracelular.",
    "causasEn": "The cause of systemic sclerosis is not fully understood but is considered the result of interaction between genetic susceptibility and environmental triggers. Genetic factors include associations with HLA-DRB1, HLA-DQB1, and variants in immune system genes (IRF5, STAT4, BANK1, CD247). Implicated environmental factors include exposure to silica and silica dust, organic solvents (trichloroethylene, vinyl chloride), certain medications (bleomycin), viral infections (cytomegalovirus, parvovirus B19), and microchimerism (persistence of fetal cells in the mother). The pathogenesis involves initial microvascular endothelial damage that activates platelets and the coagulation cascade, followed by immune activation with production of specific autoantibodies (anti-centromere, anti-topoisomerase I/anti-Scl-70, anti-RNA polymerase III) and release of profibrotic cytokines (TGF-beta, PDGF, CTGF, endothelin-1) that stimulate fibroblast proliferation and excessive production of collagen and extracellular matrix.",
    "diagnosticoEs": "El diagnóstico de la ES se basa en los criterios de clasificación ACR/EULAR 2013, que ponderan la presencia de engrosamiento cutáneo de los dedos que se extiende proximal a las articulaciones metacarpofalángicas (criterio suficiente por sí solo), junto con criterios adicionales: engrosamiento cutáneo de los dedos (puffy fingers o esclerodactilia), lesiones en los pulpejos (úlceras o pitting scars), telangiectasias, capilares ungueales anormales (capilaroscopia con megacapilares, hemorragias, áreas avasculares), hipertensión arterial pulmonar o enfermedad pulmonar intersticial, fenómeno de Raynaud y autoanticuerpos específicos de ES. La capilaroscopia del lecho ungueal es una herramienta diagnóstica clave que muestra un patrón de esclerodermia (megacapilares, microhemorragias, pérdida capilar con áreas avasculares). Las pruebas de laboratorio incluyen ANA, anti-centrómero, anti-Scl-70 y anti-RNA polimerasa III. La evaluación de órganos internos requiere TC de alta resolución pulmonar, pruebas de función respiratoria con DLCO, ecocardiograma con estimación de presión sistólica de arteria pulmonar, manometría esofágica, y función renal con monitorización periódica de la presión arterial.",
    "diagnosticoEn": "The diagnosis of SSc is based on the 2013 ACR/EULAR classification criteria, which weigh the presence of skin thickening of the fingers extending proximal to the metacarpophalangeal joints (sufficient criterion on its own), along with additional criteria: skin thickening of fingers (puffy fingers or sclerodactyly), fingertip lesions (ulcers or pitting scars), telangiectasia, abnormal nailfold capillaries (capillaroscopy with megacapillaries, hemorrhages, avascular areas), pulmonary arterial hypertension or interstitial lung disease, Raynaud's phenomenon, and SSc-specific autoantibodies. Nailfold capillaroscopy is a key diagnostic tool showing a scleroderma pattern (megacapillaries, microhemorrhages, capillary loss with avascular areas). Laboratory tests include ANA, anti-centromere, anti-Scl-70, and anti-RNA polymerase III. Internal organ evaluation requires high-resolution pulmonary CT, pulmonary function tests with DLCO, echocardiogram with estimation of pulmonary artery systolic pressure, esophageal manometry, and renal function with periodic blood pressure monitoring.",
    "tratamientoEs": "No existe un tratamiento que cure la esclerosis sistémica, por lo que el manejo se centra en el tratamiento específico de cada órgano afectado y la prevención de complicaciones. Para el fenómeno de Raynaud se utilizan bloqueadores de canales de calcio (nifedipino), inhibidores de la fosfodiesterasa-5 (sildenafilo, tadalafilo) y, en casos severos con úlceras digitales, iloprost intravenoso y bosentán (antagonista del receptor de endotelina). La enfermedad pulmonar intersticial se trata con micofenolato mofetilo (primera línea), tocilizumab o nintedanib (antifibrótico); la ciclofosfamida se reserva para casos severos. El trasplante autólogo de células madre hematopoyéticas ha demostrado beneficio en ES difusa severa con afectación orgánica progresiva. La hipertensión arterial pulmonar requiere terapia combinada con inhibidores de la fosfodiesterasa-5, antagonistas del receptor de endotelina (bosentán, ambrisentán) y análogos de prostaciclina o estimuladores de guanilato ciclasa soluble (riociguat). La crisis renal esclerodérmica es una emergencia que requiere tratamiento inmediato con inhibidores de la enzima convertidora de angiotensina (captopril). El reflujo gastroesofágico se trata con inhibidores de la bomba de protones a dosis altas y medidas posturales. La fisioterapia, terapia ocupacional y ejercicios de movilidad facial y digital son componentes esenciales del manejo integral.",
    "tratamientoEn": "There is no cure for systemic sclerosis, so management focuses on organ-specific treatment and complication prevention. For Raynaud's phenomenon, calcium channel blockers (nifedipine), phosphodiesterase-5 inhibitors (sildenafil, tadalafil) are used, and in severe cases with digital ulcers, intravenous iloprost and bosentan (endothelin receptor antagonist). Interstitial lung disease is treated with mycophenolate mofetil (first-line), tocilizumab, or nintedanib (antifibrotic); cyclophosphamide is reserved for severe cases. Autologous hematopoietic stem cell transplant has demonstrated benefit in severe diffuse SSc with progressive organ involvement. Pulmonary arterial hypertension requires combination therapy with phosphodiesterase-5 inhibitors, endothelin receptor antagonists (bosentan, ambrisentan), and prostacyclin analogs or soluble guanylate cyclase stimulators (riociguat). Scleroderma renal crisis is an emergency requiring immediate treatment with angiotensin-converting enzyme inhibitors (captopril). Gastroesophageal reflux is treated with high-dose proton pump inhibitors and postural measures. Physical therapy, occupational therapy, and facial and digital mobility exercises are essential components of comprehensive management.",
    "prevencionEs": "No existe prevención primaria para la esclerosis sistémica. La prevención de complicaciones es el pilar fundamental del manejo. Se recomienda evitar la exposición al frío y usar guantes y ropa de abrigo para minimizar el fenómeno de Raynaud y prevenir úlceras digitales. Evitar la exposición ocupacional a sílice y solventes orgánicos. No fumar, ya que el tabaquismo empeora la vasculopatía. Monitorizar periódicamente la presión arterial y la función renal para detectar precozmente la crisis renal esclerodérmica. Realizar pruebas de función pulmonar y ecocardiograma anuales para la detección temprana de enfermedad pulmonar intersticial e hipertensión pulmonar. Mantener la movilidad articular y cutánea mediante ejercicio regular y fisioterapia. Vacunación apropiada, especialmente contra neumococo e influenza. Evitar medicamentos vasoconstrictores (betabloqueadores no selectivos, ergotaminas). La protección cutánea e hidratación regular son medidas complementarias importantes.",
    "prevencionEn": "There is no primary prevention for systemic sclerosis. Complication prevention is the fundamental pillar of management. Avoiding cold exposure and using gloves and warm clothing to minimize Raynaud's phenomenon and prevent digital ulcers is recommended. Avoid occupational exposure to silica and organic solvents. Do not smoke, as smoking worsens vasculopathy. Periodically monitor blood pressure and renal function for early detection of scleroderma renal crisis. Perform annual pulmonary function tests and echocardiograms for early detection of interstitial lung disease and pulmonary hypertension. Maintain joint and skin mobility through regular exercise and physical therapy. Appropriate vaccination, especially against pneumococcus and influenza. Avoid vasoconstrictor medications (nonselective beta-blockers, ergotamines). Skin protection and regular moisturizing are important complementary measures.",
    "complicacionesEs": [
      "Enfermedad pulmonar intersticial progresiva con insuficiencia respiratoria (principal causa de muerte)",
      "Hipertensión arterial pulmonar con insuficiencia cardíaca derecha",
      "Crisis renal esclerodérmica (emergencia hipertensiva con insuficiencia renal aguda y anemia hemolítica microangiopática)",
      "Úlceras digitales isquémicas recurrentes con riesgo de gangrena y amputación",
      "Disfagia severa con desnutrición por estenosis esofágica y dismotilidad",
      "Miocardiopatía fibrótica con arritmias y fallo cardíaco",
      "Malabsorción intestinal por sobrecrecimiento bacteriano en intestino fibrótico",
      "Calcinosis extensa e incapacitante con infecciones secundarias",
      "Contracturas articulares severas y discapacidad funcional",
      "Depresión y aislamiento social por la desfiguración y limitación funcional"
    ],
    "complicacionesEn": [
      "Progressive interstitial lung disease with respiratory failure (leading cause of death)",
      "Pulmonary arterial hypertension with right heart failure",
      "Scleroderma renal crisis (hypertensive emergency with acute renal failure and microangiopathic hemolytic anemia)",
      "Recurrent ischemic digital ulcers with risk of gangrene and amputation",
      "Severe dysphagia with malnutrition from esophageal stricture and dysmotility",
      "Fibrotic cardiomyopathy with arrhythmias and heart failure",
      "Intestinal malabsorption from bacterial overgrowth in fibrotic bowel",
      "Extensive and incapacitating calcinosis with secondary infections",
      "Severe joint contractures and functional disability",
      "Depression and social isolation from disfigurement and functional limitation"
    ],
    "cuandoConsultarEs": "Consulte a un reumatólogo si presenta fenómeno de Raynaud con cambios de coloración en los dedos acompañado de hinchazón de dedos, engrosamiento o endurecimiento progresivo de la piel, úlceras en los dedos que no cicatrizan, dificultad para tragar, o disnea de esfuerzo progresiva. Busque atención de urgencia inmediata si experimenta elevación súbita de la presión arterial con dolor de cabeza intenso y alteraciones visuales (posible crisis renal esclerodérmica), dificultad respiratoria aguda, dolor torácico, o dedos con cambios de coloración persistentes sin recuperación (posible isquemia digital crítica). La detección y tratamiento tempranos son cruciales para mejorar el pronóstico.",
    "cuandoConsultarEn": "Consult a rheumatologist if you have Raynaud's phenomenon with color changes in fingers accompanied by finger swelling, progressive thickening or hardening of the skin, non-healing finger ulcers, difficulty swallowing, or progressive exertional dyspnea. Seek immediate emergency care if you experience sudden blood pressure elevation with severe headache and visual disturbances (possible scleroderma renal crisis), acute breathing difficulty, chest pain, or fingers with persistent color changes without recovery (possible critical digital ischemia). Early detection and treatment are crucial for improving prognosis."
  },
  {
    "id": "vasculitis",
    "nombreEs": "Vasculitis (Visión General)",
    "nombreEn": "Vasculitis (Overview)",
    "descripcionEs": "Las vasculitis constituyen un grupo heterogéneo de enfermedades caracterizadas por la inflamación de los vasos sanguíneos, que puede afectar arterias, arteriolas, capilares, vénulas y venas de cualquier calibre y en cualquier localización del organismo. La inflamación vascular produce daño en la pared del vaso, que puede resultar en estenosis, oclusión, formación de aneurismas o rotura vascular, comprometiendo el flujo sanguíneo y causando isquemia o hemorragia en los tejidos irrigados. Según la nomenclatura del Consenso de Chapel Hill revisado en 2012, las vasculitis se clasifican por el tamaño predominante del vaso afectado: vasculitis de grandes vasos (arteritis de Takayasu, arteritis de células gigantes), vasculitis de vasos medianos (poliarteritis nodosa, enfermedad de Kawasaki), vasculitis de pequeños vasos asociadas a ANCA (granulomatosis con poliangeítis, poliangeítis microscópica, granulomatosis eosinofílica con poliangeítis) y vasculitis de pequeños vasos por complejos inmunes (vasculitis IgA, vasculitis crioglobulinémica, vasculitis anti-membrana basal glomerular). Las vasculitis pueden ser primarias (idiopáticas) o secundarias a infecciones, medicamentos, neoplasias u otras enfermedades autoinmunes.",
    "descripcionEn": "Vasculitides constitute a heterogeneous group of diseases characterized by inflammation of blood vessels, which can affect arteries, arterioles, capillaries, venules, and veins of any caliber and in any location in the body. Vascular inflammation causes damage to the vessel wall, which can result in stenosis, occlusion, aneurysm formation, or vascular rupture, compromising blood flow and causing ischemia or hemorrhage in the supplied tissues. According to the revised 2012 Chapel Hill Consensus nomenclature, vasculitides are classified by the predominant size of the affected vessel: large-vessel vasculitis (Takayasu arteritis, giant cell arteritis), medium-vessel vasculitis (polyarteritis nodosa, Kawasaki disease), small-vessel ANCA-associated vasculitis (granulomatosis with polyangiitis, microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis), and small-vessel immune complex vasculitis (IgA vasculitis, cryoglobulinemic vasculitis, anti-glomerular basement membrane vasculitis). Vasculitides can be primary (idiopathic) or secondary to infections, medications, malignancies, or other autoimmune diseases.",
    "categoriaEs": "vascular autoinmune",
    "categoriaEn": "autoimmune vascular",
    "sintomasEs": [
      "Síntomas constitucionales: fiebre, fatiga, pérdida de peso, malestar general y sudoración nocturna",
      "Manifestaciones cutáneas: púrpura palpable, livedo reticularis, úlceras cutáneas, nódulos subcutáneos, urticaria y gangrena digital",
      "Manifestaciones renales: hematuria, proteinuria, glomerulonefritis rápidamente progresiva con insuficiencia renal",
      "Manifestaciones pulmonares: hemoptisis, nódulos pulmonares, hemorragia alveolar difusa, infiltrados pulmonares",
      "Manifestaciones neurológicas: mononeuritis múltiple (neuropatía de nervios individuales), cefalea severa, accidente cerebrovascular, convulsiones",
      "Manifestaciones musculoesqueléticas: artralgia, mialgia, artritis",
      "Manifestaciones gastrointestinales: dolor abdominal, hemorragia digestiva, isquemia mesentérica, perforación intestinal",
      "Manifestaciones oculares: escleritis, epiescleritis, uveítis, pérdida visual por oclusión vascular retiniana o neuropatía óptica",
      "Manifestaciones otorrinolaringológicas: sinusitis crónica destructiva, otitis media serosa, pérdida auditiva, estenosis subglótica",
      "Claudicación mandibular y cefalea temporal en arteritis de células gigantes",
      "Asimetría de pulsos y soplos vasculares en vasculitis de grandes vasos"
    ],
    "sintomasEn": [
      "Constitutional symptoms: fever, fatigue, weight loss, general malaise, and night sweats",
      "Cutaneous manifestations: palpable purpura, livedo reticularis, skin ulcers, subcutaneous nodules, urticaria, and digital gangrene",
      "Renal manifestations: hematuria, proteinuria, rapidly progressive glomerulonephritis with renal failure",
      "Pulmonary manifestations: hemoptysis, pulmonary nodules, diffuse alveolar hemorrhage, pulmonary infiltrates",
      "Neurological manifestations: mononeuritis multiplex (individual nerve neuropathy), severe headache, stroke, seizures",
      "Musculoskeletal manifestations: arthralgia, myalgia, arthritis",
      "Gastrointestinal manifestations: abdominal pain, gastrointestinal bleeding, mesenteric ischemia, bowel perforation",
      "Ocular manifestations: scleritis, episcleritis, uveitis, visual loss from retinal vascular occlusion or optic neuropathy",
      "ENT manifestations: chronic destructive sinusitis, serous otitis media, hearing loss, subglottic stenosis",
      "Jaw claudication and temporal headache in giant cell arteritis",
      "Pulse asymmetry and vascular bruits in large-vessel vasculitis"
    ],
    "causasEs": "Las causas de las vasculitis varían según el tipo específico. Las vasculitis primarias son de etiología desconocida, aunque se reconocen múltiples mecanismos patogénicos. Las vasculitis asociadas a ANCA involucran anticuerpos contra enzimas de neutrófilos (proteinasa 3 o mieloperoxidasa) que activan neutrófilos y causan daño vascular directo. La arteritis de células gigantes involucra una respuesta inmune celular mediada por células T y macrófagos en la pared de la arteria temporal y aorta, posiblemente desencadenada por agentes infecciosos en individuos genéticamente susceptibles (HLA-DRB1*04). Las vasculitis por complejos inmunes resultan del depósito de complejos antígeno-anticuerpo en las paredes vasculares con activación del complemento. Las vasculitis secundarias pueden ser causadas por infecciones (hepatitis B con poliarteritis nodosa, hepatitis C con crioglobulinemia), medicamentos (alopurinol, hidralazina, propiltiouracilo), neoplasias (síndromes paraneoplásicos), y otras enfermedades autoinmunes (lupus, artritis reumatoide). Los factores de riesgo incluyen la edad (arteritis de células gigantes > 50 años), el sexo, la predisposición genética y las exposiciones ambientales.",
    "causasEn": "The causes of vasculitis vary by specific type. Primary vasculitides are of unknown etiology, although multiple pathogenic mechanisms are recognized. ANCA-associated vasculitides involve antibodies against neutrophil enzymes (proteinase 3 or myeloperoxidase) that activate neutrophils and cause direct vascular damage. Giant cell arteritis involves a cellular immune response mediated by T cells and macrophages in the wall of the temporal artery and aorta, possibly triggered by infectious agents in genetically susceptible individuals (HLA-DRB1*04). Immune complex vasculitides result from deposition of antigen-antibody complexes in vascular walls with complement activation. Secondary vasculitides can be caused by infections (hepatitis B with polyarteritis nodosa, hepatitis C with cryoglobulinemia), medications (allopurinol, hydralazine, propylthiouracil), malignancies (paraneoplastic syndromes), and other autoimmune diseases (lupus, rheumatoid arthritis). Risk factors include age (giant cell arteritis > 50 years), sex, genetic predisposition, and environmental exposures.",
    "diagnosticoEs": "El diagnóstico de vasculitis requiere un alto índice de sospecha clínica y generalmente se confirma mediante una combinación de hallazgos clínicos, de laboratorio, imagen y biopsia tisular. Los estudios de laboratorio incluyen hemograma, reactantes de fase aguda (VSG y PCR elevados), función renal, análisis de orina con sedimento (cilindros eritrocitarios, hematuria), ANCA (c-ANCA/anti-PR3 y p-ANCA/anti-MPO), crioglobulinas, complemento, serologías de hepatitis B y C, y hemocultivos para excluir endocarditis. La biopsia del tejido afectado (piel, riñón, nervio sural, arteria temporal, pulmón) es el estándar de referencia diagnóstico, mostrando infiltrado inflamatorio en la pared vascular, necrosis fibrinoide y vasculitis leucocitoclástica según el tipo. Los estudios de imagen incluyen la angiografía por TC o RM para vasculitis de grandes y medianos vasos (estenosis, oclusiones, aneurismas, engrosamiento mural), PET-TC con 18F-FDG para detectar inflamación vascular en arteritis de grandes vasos, y ecografía de arterias temporales (signo del halo). La angiografía convencional se reserva para casos seleccionados. La evaluación sistemática multiorgánica es esencial para determinar la extensión de la enfermedad.",
    "diagnosticoEn": "The diagnosis of vasculitis requires a high index of clinical suspicion and is generally confirmed through a combination of clinical, laboratory, imaging, and tissue biopsy findings. Laboratory studies include complete blood count, acute phase reactants (elevated ESR and CRP), renal function, urinalysis with sediment (red cell casts, hematuria), ANCA (c-ANCA/anti-PR3 and p-ANCA/anti-MPO), cryoglobulins, complement, hepatitis B and C serologies, and blood cultures to exclude endocarditis. Biopsy of affected tissue (skin, kidney, sural nerve, temporal artery, lung) is the diagnostic gold standard, showing inflammatory infiltrate in the vascular wall, fibrinoid necrosis, and leukocytoclastic vasculitis depending on the type. Imaging studies include CT or MR angiography for large and medium-vessel vasculitis (stenoses, occlusions, aneurysms, mural thickening), 18F-FDG PET-CT to detect vascular inflammation in large-vessel arteritis, and temporal artery ultrasound (halo sign). Conventional angiography is reserved for selected cases. Systematic multi-organ evaluation is essential to determine disease extent.",
    "tratamientoEs": "El tratamiento de las vasculitis depende del tipo específico, la severidad y los órganos afectados, pero generalmente sigue un esquema de terapia de inducción de la remisión seguida de terapia de mantenimiento. Para las vasculitis asociadas a ANCA con enfermedad severa (afectación renal o pulmonar), la inducción incluye corticosteroides en dosis altas (pulsos de metilprednisolona intravenosa seguidos de prednisona oral con reducción progresiva) combinados con rituximab (anti-CD20, actualmente preferido) o ciclofosfamida. El recambio plasmático se considera en hemorragia alveolar difusa severa o glomerulonefritis con creatinina > 5.7 mg/dL. Avacopan (inhibidor del receptor C5a del complemento) ha sido aprobado como alternativa a los corticosteroides en la fase de inducción. La terapia de mantenimiento de las vasculitis ANCA incluye rituximab (preferido), azatioprina o metotrexato durante al menos 2-4 años. Para la arteritis de células gigantes, se utilizan corticosteroides en dosis altas (prednisona 40-60 mg/día) con reducción gradual durante 1-2 años, y tocilizumab (anti-IL-6R) como ahorrador de corticosteroides. La arteritis de Takayasu se trata con corticosteroides y, si es necesario, metotrexato, azatioprina o agentes biológicos (anti-TNF, tocilizumab). Todas las vasculitis requieren monitorización estrecha de la actividad de la enfermedad, efectos adversos del tratamiento y prevención de infecciones oportunistas (profilaxis con trimetoprim-sulfametoxazol durante la inmunosupresión).",
    "tratamientoEn": "Treatment of vasculitis depends on the specific type, severity, and affected organs, but generally follows a scheme of remission induction therapy followed by maintenance therapy. For ANCA-associated vasculitis with severe disease (renal or pulmonary involvement), induction includes high-dose corticosteroids (intravenous methylprednisolone pulses followed by oral prednisone with progressive tapering) combined with rituximab (anti-CD20, currently preferred) or cyclophosphamide. Plasma exchange is considered in severe diffuse alveolar hemorrhage or glomerulonephritis with creatinine > 5.7 mg/dL. Avacopan (complement C5a receptor inhibitor) has been approved as an alternative to corticosteroids in the induction phase. Maintenance therapy for ANCA vasculitis includes rituximab (preferred), azathioprine, or methotrexate for at least 2-4 years. For giant cell arteritis, high-dose corticosteroids (prednisone 40-60 mg/day) with gradual taper over 1-2 years are used, and tocilizumab (anti-IL-6R) as a corticosteroid-sparing agent. Takayasu arteritis is treated with corticosteroids and, if needed, methotrexate, azathioprine, or biologic agents (anti-TNF, tocilizumab). All vasculitides require close monitoring of disease activity, treatment adverse effects, and prevention of opportunistic infections (prophylaxis with trimethoprim-sulfamethoxazole during immunosuppression).",
    "prevencionEs": "No existe prevención primaria para la mayoría de las vasculitis primarias. La prevención de las vasculitis secundarias incluye el tratamiento de las infecciones subyacentes (hepatitis B y C), evitar medicamentos conocidos como desencadenantes de vasculitis (alopurinol, hidralazina, propiltiouracilo en pacientes susceptibles), y el control de las enfermedades autoinmunes asociadas. La prevención de recaídas en vasculitis conocida es fundamental: adherencia estricta al tratamiento de mantenimiento, monitorización regular de ANCA y marcadores de actividad, evitar la reducción prematura de la inmunosupresión, vacunación apropiada (neumococo, influenza; evitar vacunas de virus vivos durante la inmunosupresión), profilaxis de infecciones oportunistas (Pneumocystis jirovecii) durante la inmunosupresión, y protección cardiovascular dado el riesgo aumentado de enfermedad aterosclerótica en pacientes con vasculitis crónica.",
    "prevencionEn": "There is no primary prevention for most primary vasculitides. Prevention of secondary vasculitis includes treatment of underlying infections (hepatitis B and C), avoiding medications known to trigger vasculitis (allopurinol, hydralazine, propylthiouracil in susceptible patients), and control of associated autoimmune diseases. Prevention of relapses in known vasculitis is fundamental: strict adherence to maintenance treatment, regular monitoring of ANCA and activity markers, avoiding premature reduction of immunosuppression, appropriate vaccination (pneumococcus, influenza; avoiding live virus vaccines during immunosuppression), prophylaxis of opportunistic infections (Pneumocystis jirovecii) during immunosuppression, and cardiovascular protection given the increased risk of atherosclerotic disease in patients with chronic vasculitis.",
    "complicacionesEs": [
      "Insuficiencia renal terminal que requiere diálisis o trasplante renal",
      "Hemorragia alveolar difusa potencialmente mortal",
      "Pérdida visual permanente (ceguera) por neuropatía óptica isquémica o vasculitis retiniana",
      "Accidente cerebrovascular y otras complicaciones neurológicas graves",
      "Isquemia mesentérica con perforación intestinal y abdomen agudo",
      "Aneurismas de la aorta y otros grandes vasos con riesgo de disección y rotura",
      "Estenosis subglótica con obstrucción de vía aérea (en granulomatosis con poliangeítis)",
      "Gangrena digital con necesidad de amputación",
      "Mononeuritis múltiple con discapacidad neurológica permanente",
      "Infecciones oportunistas graves como complicación del tratamiento inmunosupresor",
      "Neoplasias secundarias asociadas al uso prolongado de ciclofosfamida (cáncer de vejiga)",
      "Recaídas frecuentes con daño orgánico acumulativo"
    ],
    "complicacionesEn": [
      "End-stage renal disease requiring dialysis or kidney transplant",
      "Potentially fatal diffuse alveolar hemorrhage",
      "Permanent visual loss (blindness) from ischemic optic neuropathy or retinal vasculitis",
      "Stroke and other serious neurological complications",
      "Mesenteric ischemia with bowel perforation and acute abdomen",
      "Aortic and other large vessel aneurysms with risk of dissection and rupture",
      "Subglottic stenosis with airway obstruction (in granulomatosis with polyangiitis)",
      "Digital gangrene requiring amputation",
      "Mononeuritis multiplex with permanent neurological disability",
      "Serious opportunistic infections as a complication of immunosuppressive treatment",
      "Secondary malignancies associated with prolonged cyclophosphamide use (bladder cancer)",
      "Frequent relapses with cumulative organ damage"
    ],
    "cuandoConsultarEs": "Consulte a un reumatólogo si presenta fiebre inexplicable con pérdida de peso acompañada de cualquiera de los siguientes: púrpura palpable o lesiones cutáneas vasculíticas, sangre en la orina, sinusitis crónica destructiva con sangrado nasal, tos con sangre, dolor abdominal severo, entumecimiento o debilidad en una extremidad (mononeuritis), o cefalea temporal nueva en personas mayores de 50 años. Acuda a urgencias de inmediato si presenta hemoptisis masiva, dificultad respiratoria aguda, pérdida visual súbita, dolor torácico severo, síntomas de accidente cerebrovascular, dolor abdominal agudo intenso, o si tiene vasculitis conocida y desarrolla fiebre alta durante el tratamiento inmunosupresor. Las vasculitis son enfermedades potencialmente mortales que requieren diagnóstico y tratamiento urgente.",
    "cuandoConsultarEn": "Consult a rheumatologist if you have unexplained fever with weight loss accompanied by any of the following: palpable purpura or vasculitic skin lesions, blood in the urine, chronic destructive sinusitis with nasal bleeding, coughing up blood, severe abdominal pain, numbness or weakness in a limb (mononeuritis), or new temporal headache in people over 50 years old. Go to the emergency room immediately if you experience massive hemoptysis, acute breathing difficulty, sudden visual loss, severe chest pain, stroke symptoms, severe acute abdominal pain, or if you have known vasculitis and develop high fever during immunosuppressive treatment. Vasculitides are potentially life-threatening diseases requiring urgent diagnosis and treatment."
  }
]`);

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Busca entradas de reumatología por término (nombre o descripción, en español o inglés).
 * Searches rheumatology entries by term (name or description, in Spanish or English).
 */
export function buscarReumatologia(termino: string): ReumatologiaEntry[] {
  const t = termino.toLowerCase();
  return REUMATOLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

/**
 * Obtiene una entrada de reumatología por su ID único.
 * Gets a rheumatology entry by its unique ID.
 */
export function getReumatologiaById(
  id: string
): ReumatologiaEntry | undefined {
  return REUMATOLOGIA_ENTRIES.find((e) => e.id === id);
}

/**
 * Filtra entradas de reumatología por categoría (en español o inglés).
 * Filters rheumatology entries by category (in Spanish or English).
 */
export function getReumatologiaPorCategoria(
  categoria: string
): ReumatologiaEntry[] {
  const c = categoria.toLowerCase();
  return REUMATOLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}

/**
 * Obtiene todas las categorías únicas disponibles.
 * Gets all unique available categories.
 */
export function getCategoriasReumatologia(): {
  es: string[];
  en: string[];
} {
  const categoriasEs = Array.from(
    new Set(REUMATOLOGIA_ENTRIES.map((e) => e.categoriaEs))
  );
  const categoriasEn = Array.from(
    new Set(REUMATOLOGIA_ENTRIES.map((e) => e.categoriaEn))
  );
  return { es: categoriasEs, en: categoriasEn };
}

/**
 * Obtiene el número total de entradas en la enciclopedia.
 * Gets the total number of entries in the encyclopedia.
 */
export function getTotalReumatologia(): number {
  return REUMATOLOGIA_ENTRIES.length;
}
