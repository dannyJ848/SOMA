// =============================================================================
// SOMA Inmunologia Enciclopedia — Spanish-First Bilingual
// Immunology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface InmunologiaEntry {
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

export const INMUNOLOGIA_ENTRIES: InmunologiaEntry[] = JSON.parse(`[
  {
    "id": "vih-sida",
    "nombreEs": "VIH/SIDA (Virus de Inmunodeficiencia Humana / Sindrome de Inmunodeficiencia Adquirida)",
    "nombreEn": "HIV/AIDS (Human Immunodeficiency Virus / Acquired Immunodeficiency Syndrome)",
    "descripcionEs": "El VIH es un retrovirus que ataca y destruye progresivamente los linfocitos T CD4+, celulas fundamentales del sistema inmunitario adaptativo. Sin tratamiento, la infeccion evoluciona a traves de etapas clinicas hasta el SIDA, definido por un recuento de CD4 inferior a 200 celulas/microlitro o la aparicion de infecciones oportunistas. La terapia antirretroviral combinada (TAR) ha transformado el VIH de una enfermedad mortal a una condicion cronica manejable, permitiendo a las personas vivir con una esperanza de vida cercana a la normal. La transmision ocurre a traves de fluidos corporales como sangre, semen, secreciones vaginales y leche materna, y la prevencion incluye el uso de preservativos, profilaxis preexposicion (PrEP) y el tratamiento como prevencion (indetectable = intransmisible).",
    "descripcionEn": "HIV is a retrovirus that progressively attacks and destroys CD4+ T lymphocytes, fundamental cells of the adaptive immune system. Without treatment, the infection progresses through clinical stages to AIDS, defined by a CD4 count below 200 cells/microliter or the development of opportunistic infections. Combined antiretroviral therapy (ART) has transformed HIV from a fatal disease to a manageable chronic condition, allowing individuals to live with near-normal life expectancy. Transmission occurs through body fluids such as blood, semen, vaginal secretions, and breast milk, and prevention includes condom use, pre-exposure prophylaxis (PrEP), and treatment as prevention (undetectable = untransmittable).",
    "categoriaEs": "Inmunodeficiencia adquirida",
    "categoriaEn": "Acquired immunodeficiency",
    "sintomasEs": [
      "Fase aguda: fiebre, faringitis, linfadenopatia generalizada, erupcion cutanea maculopapular",
      "Fatiga persistente y perdida de peso inexplicable",
      "Sudoracion nocturna profusa",
      "Diarrea cronica de mas de un mes de duracion",
      "Linfadenopatia generalizada persistente",
      "Infecciones oportunistas recurrentes (candidiasis oral, herpes zoster)",
      "Leucoplasia vellosa oral",
      "Trombocitopenia y anemia",
      "Deterioro cognitivo y neuropatia periferica en etapas avanzadas",
      "Sarcoma de Kaposi u otros tumores asociados al SIDA"
    ],
    "sintomasEn": [
      "Acute phase: fever, pharyngitis, generalized lymphadenopathy, maculopapular rash",
      "Persistent fatigue and unexplained weight loss",
      "Profuse night sweats",
      "Chronic diarrhea lasting more than one month",
      "Persistent generalized lymphadenopathy",
      "Recurrent opportunistic infections (oral candidiasis, herpes zoster)",
      "Oral hairy leukoplakia",
      "Thrombocytopenia and anemia",
      "Cognitive decline and peripheral neuropathy in advanced stages",
      "Kaposi sarcoma or other AIDS-defining malignancies"
    ],
    "causasEs": "El VIH-1 y VIH-2 son retrovirus de la familia Lentiviridae que se transmiten por contacto sexual sin proteccion (vaginal, anal u oral), exposicion a sangre contaminada (agujas compartidas, transfusiones no controladas), transmision vertical de madre a hijo durante el embarazo, parto o lactancia, y exposicion ocupacional a fluidos corporales. El virus utiliza la proteina gp120 para unirse al receptor CD4 y los correceptores CCR5 o CXCR4, integrando su genoma en el ADN del huesped mediante la transcriptasa inversa y la integrasa viral.",
    "causasEn": "HIV-1 and HIV-2 are retroviruses of the Lentiviridae family transmitted through unprotected sexual contact (vaginal, anal, or oral), exposure to contaminated blood (shared needles, unscreened transfusions), vertical transmission from mother to child during pregnancy, delivery, or breastfeeding, and occupational exposure to body fluids. The virus uses the gp120 protein to bind to the CD4 receptor and CCR5 or CXCR4 co-receptors, integrating its genome into host DNA via reverse transcriptase and viral integrase.",
    "diagnosticoEs": "El diagnostico se realiza mediante pruebas de tamizaje de cuarta generacion que detectan simultaneamente anticuerpos anti-VIH-1/2 y antigeno p24, seguidas de pruebas confirmatorias de diferenciacion de anticuerpos. La prueba de carga viral por PCR cuantifica el ARN viral en plasma y es esencial para el monitoreo del tratamiento. El recuento de linfocitos CD4 establece el grado de inmunosupresion. Las pruebas rapidas de anticuerpos permiten resultados en 20 minutos y las pruebas de autoevaluacion en saliva estan disponibles para uso domiciliario. El periodo de ventana puede ser de 10-33 dias con pruebas de cuarta generacion.",
    "diagnosticoEn": "Diagnosis is made using fourth-generation screening tests that simultaneously detect HIV-1/2 antibodies and p24 antigen, followed by confirmatory antibody differentiation tests. Viral load testing by PCR quantifies plasma viral RNA and is essential for treatment monitoring. CD4 lymphocyte count establishes the degree of immunosuppression. Rapid antibody tests provide results in 20 minutes and oral self-testing kits are available for home use. The window period can be 10-33 days with fourth-generation tests.",
    "tratamientoEs": "La terapia antirretroviral combinada (TAR) es el pilar del tratamiento y debe iniciarse lo antes posible tras el diagnostico, independientemente del recuento de CD4. Los regimenes de primera linea actuales incluyen inhibidores de la integrasa (dolutegravir, bictegravir) combinados con dos inhibidores nucleosidos de la transcriptasa inversa (tenofovir/emtricitabina o abacavir/lamivudina). Existen formulaciones de comprimido unico diario (Biktarvy, Triumeq) que mejoran la adherencia. Los inyectables de accion prolongada (cabotegravir/rilpivirina) se administran cada dos meses. La adherencia al tratamiento es fundamental para evitar resistencia viral. Se requiere monitoreo regular de carga viral, CD4, funcion renal y hepatica, y perfil metabolico.",
    "tratamientoEn": "Combined antiretroviral therapy (ART) is the cornerstone of treatment and should be initiated as soon as possible after diagnosis, regardless of CD4 count. Current first-line regimens include integrase inhibitors (dolutegravir, bictegravir) combined with two nucleoside reverse transcriptase inhibitors (tenofovir/emtricitabine or abacavir/lamivudine). Single-tablet daily regimens (Biktarvy, Triumeq) improve adherence. Long-acting injectables (cabotegravir/rilpivirine) are administered every two months. Treatment adherence is critical to prevent viral resistance. Regular monitoring of viral load, CD4, renal and hepatic function, and metabolic profile is required.",
    "prevencionEs": "La prevencion incluye el uso consistente de preservativos (masculinos o femeninos), la profilaxis preexposicion (PrEP) con tenofovir/emtricitabina diario o inyectable de cabotegravir cada dos meses para personas en alto riesgo, la profilaxis postexposicion (PEP) iniciada dentro de las 72 horas tras una exposicion de riesgo, el tamizaje universal de sangre y hemoderivados, programas de intercambio de jeringas, el tratamiento como prevencion (las personas con carga viral indetectable no transmiten el virus), y la prevencion de la transmision materno-infantil con TAR durante el embarazo y parto.",
    "prevencionEn": "Prevention includes consistent condom use (male or female), pre-exposure prophylaxis (PrEP) with daily tenofovir/emtricitabine or injectable cabotegravir every two months for high-risk individuals, post-exposure prophylaxis (PEP) initiated within 72 hours after risk exposure, universal blood and blood product screening, needle exchange programs, treatment as prevention (people with undetectable viral load do not transmit the virus), and prevention of mother-to-child transmission with ART during pregnancy and delivery.",
    "complicacionesEs": [
      "Infecciones oportunistas: neumonia por Pneumocystis jirovecii, toxoplasmosis cerebral, tuberculosis diseminada",
      "Neoplasias asociadas: sarcoma de Kaposi, linfoma no Hodgkin, carcinoma cervical invasivo",
      "Encefalopatia por VIH y demencia asociada",
      "Nefropatia asociada al VIH",
      "Enfermedad cardiovascular acelerada",
      "Sindrome de reconstitucion inmune (IRIS) al iniciar TAR",
      "Lipodistrofia y sindrome metabolico por TAR",
      "Osteoporosis y fracturas",
      "Coinfeccion con hepatitis B y C"
    ],
    "complicacionesEn": [
      "Opportunistic infections: Pneumocystis jirovecii pneumonia, cerebral toxoplasmosis, disseminated tuberculosis",
      "Associated malignancies: Kaposi sarcoma, non-Hodgkin lymphoma, invasive cervical carcinoma",
      "HIV encephalopathy and associated dementia",
      "HIV-associated nephropathy",
      "Accelerated cardiovascular disease",
      "Immune reconstitution inflammatory syndrome (IRIS) upon ART initiation",
      "Lipodystrophy and metabolic syndrome from ART",
      "Osteoporosis and fractures",
      "Hepatitis B and C co-infection"
    ],
    "cuandoConsultarEs": "Consulte inmediatamente si ha tenido una posible exposicion al VIH (para PEP dentro de 72 horas), si presenta fiebre prolongada inexplicable, perdida de peso significativa, infecciones recurrentes o inusuales, o si tiene factores de riesgo y no se ha realizado una prueba de deteccion. Las personas diagnosticadas deben acudir de urgencia si presentan fiebre alta con inmunodepresion severa, dificultad respiratoria, cefalea intensa con confusion, o convulsiones.",
    "cuandoConsultarEn": "Seek immediate consultation if you have had a possible HIV exposure (for PEP within 72 hours), if you experience prolonged unexplained fever, significant weight loss, recurrent or unusual infections, or if you have risk factors and have not been screened. Diagnosed individuals should seek urgent care if they develop high fever with severe immunosuppression, respiratory difficulty, severe headache with confusion, or seizures."
  },
  {
    "id": "inmunodeficiencia-primaria",
    "nombreEs": "Inmunodeficiencia Primaria (IDP)",
    "nombreEn": "Primary Immunodeficiency (PID)",
    "descripcionEs": "Las inmunodeficiencias primarias son un grupo heterogeneo de mas de 450 trastornos geneticos que afectan el desarrollo o la funcion del sistema inmunitario. Estas condiciones resultan en una susceptibilidad aumentada a infecciones recurrentes, graves o por organismos oportunistas desde edades tempranas. Pueden afectar la inmunidad humoral (deficiencia de anticuerpos, como la inmunodeficiencia comun variable o la agammaglobulinemia ligada al X), la inmunidad celular (como el sindrome de DiGeorge), o ambas (como la inmunodeficiencia combinada severa, SCID). El diagnostico temprano es crucial ya que muchas de estas condiciones son tratables con terapia de reemplazo de inmunoglobulinas, trasplante de celulas madre hematopoyeticas o, mas recientemente, terapia genica.",
    "descripcionEn": "Primary immunodeficiencies are a heterogeneous group of more than 450 genetic disorders affecting the development or function of the immune system. These conditions result in increased susceptibility to recurrent, severe, or opportunistic infections from early ages. They can affect humoral immunity (antibody deficiency, such as common variable immunodeficiency or X-linked agammaglobulinemia), cellular immunity (such as DiGeorge syndrome), or both (such as severe combined immunodeficiency, SCID). Early diagnosis is crucial as many of these conditions are treatable with immunoglobulin replacement therapy, hematopoietic stem cell transplantation, or, more recently, gene therapy.",
    "categoriaEs": "Inmunodeficiencia congenita",
    "categoriaEn": "Congenital immunodeficiency",
    "sintomasEs": [
      "Infecciones sinopulmonares recurrentes (mas de 4 otitis, 2 sinusitis o 2 neumonias al ano)",
      "Infecciones que requieren antibioticos intravenosos o que no responden a antibioticos orales",
      "Dos o mas infecciones graves como meningitis, osteomielitis o sepsis",
      "Falla de medro en lactantes y ninos",
      "Abscesos recurrentes en piel u organos profundos",
      "Candidiasis oral persistente despues del primer ano de vida",
      "Diarrea cronica con malabsorcion",
      "Historia familiar de inmunodeficiencia o muertes tempranas inexplicables",
      "Necesidad de antibioticos intravenosos para resolver infecciones",
      "Complicaciones por vacunas de virus vivos (BCG, rotavirus)"
    ],
    "sintomasEn": [
      "Recurrent sinopulmonary infections (more than 4 ear infections, 2 sinusitis, or 2 pneumonias per year)",
      "Infections requiring intravenous antibiotics or unresponsive to oral antibiotics",
      "Two or more serious infections such as meningitis, osteomyelitis, or sepsis",
      "Failure to thrive in infants and children",
      "Recurrent abscesses in skin or deep organs",
      "Persistent oral candidiasis after the first year of life",
      "Chronic diarrhea with malabsorption",
      "Family history of immunodeficiency or unexplained early deaths",
      "Need for intravenous antibiotics to clear infections",
      "Complications from live virus vaccines (BCG, rotavirus)"
    ],
    "causasEs": "Las inmunodeficiencias primarias son causadas por mutaciones geneticas hereditarias que afectan diferentes componentes del sistema inmune. La herencia puede ser autosomica recesiva (la mas comun), ligada al cromosoma X (afecta predominantemente a varones), autosomica dominante, o por mutaciones de novo. Las mutaciones pueden afectar la produccion de anticuerpos (defectos de celulas B), la funcion de celulas T, la fagocitosis (enfermedad granulomatosa cronica), el sistema del complemento, o la regulacion inmunitaria. El tamizaje neonatal mediante los TREC (circulos de escision del receptor de celulas T) permite la deteccion temprana de SCID.",
    "causasEn": "Primary immunodeficiencies are caused by inherited genetic mutations affecting different components of the immune system. Inheritance can be autosomal recessive (most common), X-linked (predominantly affecting males), autosomal dominant, or de novo mutations. Mutations can affect antibody production (B-cell defects), T-cell function, phagocytosis (chronic granulomatous disease), the complement system, or immune regulation. Neonatal screening using TRECs (T-cell receptor excision circles) enables early detection of SCID.",
    "diagnosticoEs": "La evaluacion inicial incluye hemograma completo con diferencial, niveles de inmunoglobulinas sericas (IgG, IgA, IgM, IgE), respuesta de anticuerpos a vacunas (tetanos, neumococo), y subpoblaciones de linfocitos por citometria de flujo (CD3, CD4, CD8, CD19, CD16/56). Las pruebas avanzadas incluyen funcion de celulas T (proliferacion a mitogenos y antigenos), actividad del complemento (CH50, AH50), estallido oxidativo de neutrofilos (DHR), y estudios geneticos moleculares dirigidos o secuenciacion del exoma completo. El tamizaje neonatal de TREC es ahora obligatorio en muchos paises para detectar SCID.",
    "diagnosticoEn": "Initial evaluation includes complete blood count with differential, serum immunoglobulin levels (IgG, IgA, IgM, IgE), antibody responses to vaccines (tetanus, pneumococcus), and lymphocyte subsets by flow cytometry (CD3, CD4, CD8, CD19, CD16/56). Advanced testing includes T-cell function (proliferation to mitogens and antigens), complement activity (CH50, AH50), neutrophil oxidative burst (DHR), and targeted molecular genetic studies or whole exome sequencing. Neonatal TREC screening is now mandatory in many countries to detect SCID.",
    "tratamientoEs": "El tratamiento depende del tipo especifico de inmunodeficiencia. La terapia de reemplazo con inmunoglobulinas (intravenosa cada 3-4 semanas o subcutanea semanal) es fundamental para las deficiencias de anticuerpos. El trasplante de celulas madre hematopoyeticas (medula osea) es curativo para SCID y otras inmunodeficiencias severas. La terapia genica esta aprobada para ADA-SCID y en ensayos clinicos para otros tipos. La profilaxis antimicrobiana (antibioticos, antimicoticos, antivirales) previene infecciones. El interferon gamma se usa en la enfermedad granulomatosa cronica. Las vacunas de virus vivos estan contraindicadas en la mayoria de las IDP. El manejo multidisciplinario incluye neumologia, gastroenterologia y vigilancia de autoinmunidad y malignidad.",
    "tratamientoEn": "Treatment depends on the specific type of immunodeficiency. Immunoglobulin replacement therapy (intravenous every 3-4 weeks or subcutaneous weekly) is fundamental for antibody deficiencies. Hematopoietic stem cell transplantation (bone marrow) is curative for SCID and other severe immunodeficiencies. Gene therapy is approved for ADA-SCID and in clinical trials for other types. Antimicrobial prophylaxis (antibiotics, antifungals, antivirals) prevents infections. Interferon gamma is used in chronic granulomatous disease. Live virus vaccines are contraindicated in most PIDs. Multidisciplinary management includes pulmonology, gastroenterology, and surveillance for autoimmunity and malignancy.",
    "prevencionEs": "Las inmunodeficiencias primarias son geneticas y no se pueden prevenir directamente, pero el diagnostico y tratamiento tempranos previenen complicaciones graves. El tamizaje neonatal para SCID permite la intervencion antes de que ocurran infecciones potencialmente mortales. El consejo genetico es fundamental para familias afectadas, ya que puede orientar sobre el riesgo de recurrencia y opciones reproductivas como el diagnostico genetico preimplantacional. Los portadores asintomaticos pueden ser identificados mediante pruebas geneticas. La vacunacion completa de los contactos cercanos proporciona proteccion indirecta al paciente.",
    "prevencionEn": "Primary immunodeficiencies are genetic and cannot be directly prevented, but early diagnosis and treatment prevent serious complications. Neonatal screening for SCID allows intervention before life-threatening infections occur. Genetic counseling is fundamental for affected families, as it can guide recurrence risk and reproductive options such as preimplantation genetic diagnosis. Asymptomatic carriers can be identified through genetic testing. Complete vaccination of close contacts provides indirect protection to the patient.",
    "complicacionesEs": [
      "Bronquiectasias por infecciones pulmonares recurrentes",
      "Enfermedad pulmonar cronica y fibrosis",
      "Manifestaciones autoinmunes (citopenias, artritis, enfermedad inflamatoria intestinal)",
      "Linfoproliferacion y riesgo aumentado de linfoma",
      "Enfermedad granulomatosa no infecciosa",
      "Enteropatia cronica y malabsorcion",
      "Retraso del crecimiento y desarrollo en ninos",
      "Infecciones diseminadas por vacunas vivas (BCGosis)"
    ],
    "complicacionesEn": [
      "Bronchiectasis from recurrent pulmonary infections",
      "Chronic lung disease and fibrosis",
      "Autoimmune manifestations (cytopenias, arthritis, inflammatory bowel disease)",
      "Lymphoproliferation and increased lymphoma risk",
      "Non-infectious granulomatous disease",
      "Chronic enteropathy and malabsorption",
      "Growth and developmental delay in children",
      "Disseminated infections from live vaccines (BCGosis)"
    ],
    "cuandoConsultarEs": "Consulte si su hijo presenta infecciones recurrentes que son mas frecuentes, mas graves o mas prolongadas de lo esperado, si necesita antibioticos intravenosos repetidamente, si hay antecedentes familiares de inmunodeficiencia o muertes infantiles inexplicables, si presenta falla de medro, o si ha tenido complicaciones tras vacunas de virus vivos. Los adultos deben consultar ante neumonias recurrentes, sinusitis cronicas que no responden a tratamiento, o diarrea cronica inexplicable.",
    "cuandoConsultarEn": "Consult if your child has recurrent infections that are more frequent, severe, or prolonged than expected, if intravenous antibiotics are repeatedly needed, if there is a family history of immunodeficiency or unexplained infant deaths, if failure to thrive is present, or if there have been complications after live virus vaccines. Adults should consult for recurrent pneumonias, chronic sinusitis unresponsive to treatment, or unexplained chronic diarrhea."
  },
  {
    "id": "enfermedad-autoinmune-general",
    "nombreEs": "Enfermedad Autoinmune (Vision General)",
    "nombreEn": "Autoimmune Disease (Overview)",
    "descripcionEs": "Las enfermedades autoinmunes son un grupo de mas de 80 condiciones cronicas en las cuales el sistema inmunitario pierde la tolerancia a los tejidos propios y los ataca erroneamente, causando inflamacion y dano tisular. Pueden ser organo-especificas (como la tiroiditis de Hashimoto o la diabetes tipo 1) o sistemicas (como el lupus eritematoso sistemico o la artritis reumatoide). Afectan aproximadamente al 5-8% de la poblacion y son mas frecuentes en mujeres. La patogenia involucra una interaccion compleja entre predisposicion genetica (genes HLA y otros), factores ambientales (infecciones, microbioma, toxinas) y desregulacion inmunitaria, resultando en la activacion de linfocitos T y B autorreactivos y la produccion de autoanticuerpos.",
    "descripcionEn": "Autoimmune diseases are a group of more than 80 chronic conditions in which the immune system loses tolerance to self-tissues and mistakenly attacks them, causing inflammation and tissue damage. They can be organ-specific (such as Hashimoto thyroiditis or type 1 diabetes) or systemic (such as systemic lupus erythematosus or rheumatoid arthritis). They affect approximately 5-8% of the population and are more common in women. Pathogenesis involves a complex interaction between genetic predisposition (HLA genes and others), environmental factors (infections, microbiome, toxins), and immune dysregulation, resulting in the activation of autoreactive T and B lymphocytes and autoantibody production.",
    "categoriaEs": "Autoinmune",
    "categoriaEn": "Autoimmune",
    "sintomasEs": [
      "Fatiga cronica debilitante que no mejora con el descanso",
      "Dolor articular y muscular difuso, frecuentemente migratorio",
      "Fiebre baja recurrente sin causa infecciosa identificada",
      "Erupciones cutaneas que pueden variar segun la enfermedad especifica",
      "Fenomeno de Raynaud (dedos blancos o azules con el frio)",
      "Inflamacion articular con rigidez matutina prolongada (>1 hora)",
      "Ulceras orales o nasales recurrentes",
      "Sequedad de ojos y boca (sindrome de Sjogren)",
      "Alopecia difusa o en parches",
      "Sintomas que fluctuan con periodos de exacerbacion y remision"
    ],
    "sintomasEn": [
      "Debilitating chronic fatigue not improved by rest",
      "Diffuse joint and muscle pain, frequently migratory",
      "Recurrent low-grade fever without identified infectious cause",
      "Skin rashes that may vary depending on the specific disease",
      "Raynaud phenomenon (white or blue fingers with cold exposure)",
      "Joint inflammation with prolonged morning stiffness (>1 hour)",
      "Recurrent oral or nasal ulcers",
      "Dry eyes and mouth (Sjogren syndrome)",
      "Diffuse or patchy hair loss",
      "Symptoms that fluctuate with periods of exacerbation and remission"
    ],
    "causasEs": "La causa exacta de las enfermedades autoinmunes es multifactorial. La predisposicion genetica juega un papel fundamental, particularmente los genes del complejo mayor de histocompatibilidad (HLA), con ciertos alelos asociados a enfermedades especificas (HLA-B27 con espondilitis anquilosante, HLA-DR4 con artritis reumatoide). Los factores ambientales incluyen infecciones virales (Epstein-Barr, citomegalovirus) que pueden desencadenar autoinmunidad por mimetismo molecular, exposicion a toxinas ambientales, disbiosis del microbioma intestinal, deficiencia de vitamina D, tabaquismo, y estres. Los factores hormonales explican la predominancia femenina (estrogenos pueden potenciar la respuesta inmune). La perdida de mecanismos de tolerancia central y periferica permite que celulas autorreactivas escapen al control inmunologico.",
    "causasEn": "The exact cause of autoimmune diseases is multifactorial. Genetic predisposition plays a fundamental role, particularly major histocompatibility complex (HLA) genes, with certain alleles associated with specific diseases (HLA-B27 with ankylosing spondylitis, HLA-DR4 with rheumatoid arthritis). Environmental factors include viral infections (Epstein-Barr, cytomegalovirus) that can trigger autoimmunity through molecular mimicry, environmental toxin exposure, gut microbiome dysbiosis, vitamin D deficiency, smoking, and stress. Hormonal factors explain the female predominance (estrogens can enhance immune response). Loss of central and peripheral tolerance mechanisms allows autoreactive cells to escape immune control.",
    "diagnosticoEs": "El diagnostico requiere una combinacion de presentacion clinica, pruebas de laboratorio y, en ocasiones, biopsia tisular. Las pruebas iniciales incluyen marcadores inflamatorios (VSG, PCR), hemograma completo, perfil metabolico, y anticuerpos antinucleares (ANA) como prueba de tamizaje. Los anticuerpos especificos orientan el diagnostico: anti-ADN de doble cadena y anti-Smith para lupus, anti-CCP y factor reumatoide para artritis reumatoide, anti-TPO para tiroiditis de Hashimoto, anti-transglutaminasa para enfermedad celiaca. La evaluacion de complemento (C3, C4), inmunoglobulinas, subpoblaciones linfocitarias y citoquinas ayuda a caracterizar la actividad inmunologica. La biopsia renal, cutanea o de glandulas salivales puede ser necesaria para confirmar el diagnostico.",
    "diagnosticoEn": "Diagnosis requires a combination of clinical presentation, laboratory tests, and sometimes tissue biopsy. Initial tests include inflammatory markers (ESR, CRP), complete blood count, metabolic panel, and antinuclear antibodies (ANA) as a screening test. Specific antibodies guide the diagnosis: anti-double-stranded DNA and anti-Smith for lupus, anti-CCP and rheumatoid factor for rheumatoid arthritis, anti-TPO for Hashimoto thyroiditis, anti-transglutaminase for celiac disease. Complement evaluation (C3, C4), immunoglobulins, lymphocyte subsets, and cytokines help characterize immune activity. Renal, skin, or salivary gland biopsy may be needed to confirm diagnosis.",
    "tratamientoEs": "El tratamiento de las enfermedades autoinmunes se basa en modular la respuesta inmunitaria y controlar la inflamacion. Los antiinflamatorios no esteroideos (AINEs) se usan para sintomas leves. Los corticosteroides (prednisona) son potentes antiinflamatorios para brotes agudos, pero su uso cronico conlleva efectos adversos significativos. Los inmunomoduladores convencionales incluyen metotrexato, azatioprina, micofenolato de mofetilo e hidroxicloroquina. Los agentes biologicos representan un avance terapeutico importante: anti-TNF (adalimumab, infliximab), anti-CD20 (rituximab), anti-IL-6 (tocilizumab), anti-IL-17 (secukinumab), y abatacept (CTLA-4-Ig). Los inhibidores de JAK (tofacitinib, baricitinib) son moleculas pequenas orales que bloquean senales intracelulares. El manejo incluye proteccion solar, ejercicio regular, manejo del estres, y vacunacion apropiada antes de iniciar inmunosupresion.",
    "tratamientoEn": "Treatment of autoimmune diseases is based on modulating the immune response and controlling inflammation. Nonsteroidal anti-inflammatory drugs (NSAIDs) are used for mild symptoms. Corticosteroids (prednisone) are potent anti-inflammatory agents for acute flares, but chronic use carries significant adverse effects. Conventional immunomodulators include methotrexate, azathioprine, mycophenolate mofetil, and hydroxychloroquine. Biologic agents represent an important therapeutic advance: anti-TNF (adalimumab, infliximab), anti-CD20 (rituximab), anti-IL-6 (tocilizumab), anti-IL-17 (secukinumab), and abatacept (CTLA-4-Ig). JAK inhibitors (tofacitinib, baricitinib) are oral small molecules that block intracellular signals. Management includes sun protection, regular exercise, stress management, and appropriate vaccination before starting immunosuppression.",
    "prevencionEs": "No existe una forma definitiva de prevenir las enfermedades autoinmunes, pero se pueden reducir los factores de riesgo modificables. Mantener un estilo de vida saludable con dieta antiinflamatoria rica en frutas, verduras, acidos grasos omega-3 y fibra, realizar ejercicio regular moderado, mantener niveles adecuados de vitamina D, evitar el tabaquismo, manejar el estres mediante tecnicas de relajacion, mindfulness o terapia psicologica, y mantener un microbioma intestinal saludable mediante dieta diversa y evitando el uso innecesario de antibioticos. La deteccion temprana de autoanticuerpos en personas con factores de riesgo puede permitir una intervencion precoz.",
    "prevencionEn": "There is no definitive way to prevent autoimmune diseases, but modifiable risk factors can be reduced. Maintaining a healthy lifestyle with an anti-inflammatory diet rich in fruits, vegetables, omega-3 fatty acids, and fiber, engaging in regular moderate exercise, maintaining adequate vitamin D levels, avoiding smoking, managing stress through relaxation techniques, mindfulness, or psychological therapy, and maintaining a healthy gut microbiome through diverse diet and avoiding unnecessary antibiotic use. Early detection of autoantibodies in at-risk individuals may allow early intervention.",
    "complicacionesEs": [
      "Dano organico progresivo e irreversible si no se trata (nefritis lupica, destruccion articular)",
      "Efectos adversos de la inmunosupresion cronica: infecciones oportunistas, osteoporosis, diabetes",
      "Riesgo aumentado de enfermedad cardiovascular acelerada",
      "Sindrome de superposicion: desarrollo de multiples enfermedades autoinmunes simultaneas",
      "Linfoma y otras neoplasias asociadas a inflamacion cronica",
      "Amiloidosis secundaria por inflamacion prolongada",
      "Discapacidad funcional y deterioro de la calidad de vida",
      "Complicaciones del embarazo (perdidas fetales recurrentes, preeclampsia)"
    ],
    "complicacionesEn": [
      "Progressive irreversible organ damage if untreated (lupus nephritis, joint destruction)",
      "Adverse effects of chronic immunosuppression: opportunistic infections, osteoporosis, diabetes",
      "Increased risk of accelerated cardiovascular disease",
      "Overlap syndrome: development of multiple simultaneous autoimmune diseases",
      "Lymphoma and other malignancies associated with chronic inflammation",
      "Secondary amyloidosis from prolonged inflammation",
      "Functional disability and deterioration of quality of life",
      "Pregnancy complications (recurrent fetal loss, preeclampsia)"
    ],
    "cuandoConsultarEs": "Consulte si presenta fatiga cronica inexplicable, dolor articular persistente con rigidez matutina, erupciones cutaneas recurrentes (especialmente en cara con forma de mariposa), fenomeno de Raynaud, ulceras orales recurrentes, perdida de cabello inexplicable, o si tiene antecedentes familiares de enfermedades autoinmunes y desarrolla sintomas sugestivos. Busque atencion urgente si presenta fiebre alta con inmunosupresion, dificultad respiratoria, dolor toracico, hematuria, o debilidad muscular severa de inicio rapido.",
    "cuandoConsultarEn": "Consult if you experience unexplained chronic fatigue, persistent joint pain with morning stiffness, recurrent skin rashes (especially butterfly-shaped facial rash), Raynaud phenomenon, recurrent oral ulcers, unexplained hair loss, or if you have a family history of autoimmune diseases and develop suggestive symptoms. Seek urgent care if you develop high fever with immunosuppression, respiratory difficulty, chest pain, hematuria, or rapidly progressive severe muscle weakness."
  },
  {
    "id": "rechazo-trasplante",
    "nombreEs": "Rechazo de Trasplante",
    "nombreEn": "Transplant Rejection",
    "descripcionEs": "El rechazo de trasplante es una respuesta inmunitaria del receptor contra el organo o tejido trasplantado, reconocido como extrano debido a la incompatibilidad de antigenos del complejo mayor de histocompatibilidad (HLA). Existen tres tipos principales: el rechazo hiperagudo (minutos a horas, mediado por anticuerpos preformados), el rechazo agudo (dias a meses, mediado por celulas T y/o anticuerpos), y el rechazo cronico (meses a anos, con fibrosis progresiva y perdida de funcion). El manejo requiere un equilibrio delicado entre la inmunosupresion suficiente para prevenir el rechazo y evitar la inmunosupresion excesiva que predisponga a infecciones y cancer. Los avances en tipificacion HLA, pruebas de compatibilidad cruzada y protocolos de inmunosupresion han mejorado significativamente la supervivencia de los injertos.",
    "descripcionEn": "Transplant rejection is an immune response by the recipient against the transplanted organ or tissue, recognized as foreign due to major histocompatibility complex (HLA) antigen incompatibility. There are three main types: hyperacute rejection (minutes to hours, mediated by preformed antibodies), acute rejection (days to months, mediated by T cells and/or antibodies), and chronic rejection (months to years, with progressive fibrosis and function loss). Management requires a delicate balance between sufficient immunosuppression to prevent rejection and avoiding excessive immunosuppression that predisposes to infections and cancer. Advances in HLA typing, crossmatch testing, and immunosuppression protocols have significantly improved graft survival.",
    "categoriaEs": "Trasplante",
    "categoriaEn": "Transplant",
    "sintomasEs": [
      "Fiebre sin causa infecciosa identificada",
      "Dolor o sensibilidad sobre el organo trasplantado",
      "Disminucion de la funcion del organo (creatinina elevada en trasplante renal, enzimas hepaticas elevadas en trasplante hepatico)",
      "Disminucion del gasto urinario en trasplante renal",
      "Fatiga, malestar general y perdida de apetito",
      "Edema y aumento de peso por retencion de liquidos",
      "Ictericia en trasplante hepatico",
      "Disnea en trasplante pulmonar o cardiaco",
      "Hipertension de nuevo inicio o empeoramiento",
      "Marcadores inflamatorios elevados"
    ],
    "sintomasEn": [
      "Fever without identified infectious cause",
      "Pain or tenderness over the transplanted organ",
      "Decreased organ function (elevated creatinine in renal transplant, elevated liver enzymes in hepatic transplant)",
      "Decreased urine output in renal transplant",
      "Fatigue, malaise, and loss of appetite",
      "Edema and weight gain from fluid retention",
      "Jaundice in liver transplant",
      "Dyspnea in lung or cardiac transplant",
      "New-onset or worsening hypertension",
      "Elevated inflammatory markers"
    ],
    "causasEs": "El rechazo se produce porque el sistema inmunitario del receptor reconoce los antigenos HLA del donante como extranos. Los linfocitos T del receptor reconocen directamente las moleculas HLA del donante (alorreconocimiento directo) o reconocen peptidos del donante presentados por celulas presentadoras de antigenos propias (alorreconocimiento indirecto). Los factores de riesgo incluyen: incompatibilidad HLA significativa, sensibilizacion previa (anticuerpos anti-HLA por transfusiones, embarazos previos o trasplantes anteriores), incumplimiento del regimen inmunosupresor, y factores del donante como isquemia fria prolongada o donante fallecido. La respuesta humoral mediada por anticuerpos contra antigenos del donante (rechazo mediado por anticuerpos) es particularmente dificil de tratar.",
    "causasEn": "Rejection occurs because the recipient's immune system recognizes the donor's HLA antigens as foreign. Recipient T lymphocytes directly recognize donor HLA molecules (direct allorecognition) or recognize donor peptides presented by self antigen-presenting cells (indirect allorecognition). Risk factors include: significant HLA incompatibility, prior sensitization (anti-HLA antibodies from transfusions, previous pregnancies, or prior transplants), non-adherence to immunosuppressive regimen, and donor factors such as prolonged cold ischemia time or deceased donor. Antibody-mediated humoral response against donor antigens (antibody-mediated rejection) is particularly difficult to treat.",
    "diagnosticoEs": "El diagnostico requiere una combinacion de vigilancia clinica, pruebas de laboratorio y biopsia del injerto. Los marcadores serologicos incluyen cambios en la funcion del organo (creatinina para rinon, enzimas hepaticas para higado, funcion pulmonar para pulmon). Los anticuerpos donante-especificos (DSA) se detectan mediante pruebas de fase solida (Luminex). La biopsia del injerto es el estandar de oro, clasificada segun criterios de Banff internacionales. Las nuevas herramientas no invasivas incluyen ADN libre de donante en sangre (dd-cfDNA), perfiles de expresion genica, y biomarcadores urinarios. La biopsia de protocolo (programada, sin sospecha clinica) permite detectar rechazo subclinico antes de que ocurra dano irreversible.",
    "diagnosticoEn": "Diagnosis requires a combination of clinical surveillance, laboratory tests, and graft biopsy. Serological markers include changes in organ function (creatinine for kidney, liver enzymes for liver, pulmonary function for lung). Donor-specific antibodies (DSA) are detected by solid-phase assays (Luminex). Graft biopsy is the gold standard, classified according to international Banff criteria. New non-invasive tools include donor-derived cell-free DNA in blood (dd-cfDNA), gene expression profiles, and urinary biomarkers. Protocol biopsy (scheduled, without clinical suspicion) allows detection of subclinical rejection before irreversible damage occurs.",
    "tratamientoEs": "El rechazo agudo celular se trata con pulsos de metilprednisolona intravenosa (500-1000 mg diarios por 3 dias) y optimizacion de la inmunosupresion de mantenimiento. Los casos resistentes a esteroides requieren globulina antitimocitica (ATG). El rechazo mediado por anticuerpos se trata con plasmaferesis para remover anticuerpos circulantes, inmunoglobulina intravenosa (IVIG), rituximab (anti-CD20) para deplecionar celulas B, y en algunos casos bortezomib (inhibidor de proteosoma) o eculizumab (anti-C5). La inmunosupresion de mantenimiento tipicamente incluye un inhibidor de calcineurina (tacrolimus), un antimetabolito (micofenolato de mofetilo), y corticosteroides a dosis bajas. El rechazo cronico tiene opciones terapeuticas limitadas y puede requerir retrasplante.",
    "tratamientoEn": "Acute cellular rejection is treated with intravenous methylprednisolone pulses (500-1000 mg daily for 3 days) and optimization of maintenance immunosuppression. Steroid-resistant cases require antithymocyte globulin (ATG). Antibody-mediated rejection is treated with plasmapheresis to remove circulating antibodies, intravenous immunoglobulin (IVIG), rituximab (anti-CD20) to deplete B cells, and in some cases bortezomib (proteasome inhibitor) or eculizumab (anti-C5). Maintenance immunosuppression typically includes a calcineurin inhibitor (tacrolimus), an antimetabolite (mycophenolate mofetil), and low-dose corticosteroids. Chronic rejection has limited therapeutic options and may require retransplantation.",
    "prevencionEs": "La prevencion del rechazo comienza con la seleccion optima del donante mediante tipificacion HLA y prueba de compatibilidad cruzada negativa. La terapia de induccion con basiliximab (anti-CD25) o ATG se administra perioperatoriamente. La adherencia estricta al regimen inmunosupresor de mantenimiento es crucial; los niveles sanguineos de tacrolimus deben monitorearse regularmente. La educacion del paciente sobre la importancia de tomar la medicacion exactamente como se prescribe, los signos de alerta de rechazo, y la necesidad de seguimiento medico regular son fundamentales. Se deben evitar interacciones farmacologicas que alteren los niveles de inmunosupresores. La desensibilizacion pretrasplante puede realizarse en pacientes altamente sensibilizados.",
    "prevencionEn": "Rejection prevention begins with optimal donor selection through HLA typing and negative crossmatch testing. Induction therapy with basiliximab (anti-CD25) or ATG is administered perioperatively. Strict adherence to the maintenance immunosuppressive regimen is crucial; tacrolimus blood levels must be regularly monitored. Patient education about the importance of taking medication exactly as prescribed, warning signs of rejection, and the need for regular medical follow-up are fundamental. Drug interactions that alter immunosuppressant levels must be avoided. Pretransplant desensitization can be performed in highly sensitized patients.",
    "complicacionesEs": [
      "Perdida del injerto requiriendo retrasplante o retorno a dialisis",
      "Infecciones oportunistas por inmunosupresion: CMV, BK virus, Pneumocystis, aspergilosis",
      "Neoplasias asociadas a inmunosupresion: linfoma post-trasplante (PTLD), cancer de piel",
      "Nefrotoxicidad por inhibidores de calcineurina",
      "Diabetes post-trasplante",
      "Enfermedad cardiovascular acelerada",
      "Disfuncion cronica del aloinjerto con fibrosis progresiva",
      "Recurrencia de la enfermedad original en el injerto"
    ],
    "complicacionesEn": [
      "Graft loss requiring retransplantation or return to dialysis",
      "Opportunistic infections from immunosuppression: CMV, BK virus, Pneumocystis, aspergillosis",
      "Immunosuppression-associated malignancies: post-transplant lymphoproliferative disorder (PTLD), skin cancer",
      "Calcineurin inhibitor nephrotoxicity",
      "Post-transplant diabetes",
      "Accelerated cardiovascular disease",
      "Chronic allograft dysfunction with progressive fibrosis",
      "Recurrence of original disease in the graft"
    ],
    "cuandoConsultarEs": "Los pacientes trasplantados deben contactar a su equipo de trasplante inmediatamente si presentan fiebre mayor de 38 grados, dolor o sensibilidad sobre el organo trasplantado, disminucion de la produccion de orina (en trasplante renal), ictericia o heces palidas (en trasplante hepatico), dificultad respiratoria nueva (en trasplante pulmonar), edema significativo, malestar general inexplicable, o si han omitido dosis de inmunosupresores. La deteccion temprana del rechazo mejora significativamente las posibilidades de revertirlo.",
    "cuandoConsultarEn": "Transplant patients should contact their transplant team immediately if they develop fever above 38 degrees, pain or tenderness over the transplanted organ, decreased urine output (in renal transplant), jaundice or pale stools (in liver transplant), new respiratory difficulty (in lung transplant), significant edema, unexplained malaise, or if they have missed immunosuppressant doses. Early detection of rejection significantly improves the chances of reversing it."
  },
  {
    "id": "inmunoterapia-cancer",
    "nombreEs": "Inmunoterapia del Cancer",
    "nombreEn": "Cancer Immunotherapy",
    "descripcionEs": "La inmunoterapia del cancer es un enfoque terapeutico revolucionario que utiliza o potencia el sistema inmunitario del propio paciente para reconocer y destruir celulas tumorales. A diferencia de la quimioterapia convencional, que ataca directamente las celulas en division, la inmunoterapia modula la respuesta inmune para superar los mecanismos de evasion inmunitaria del tumor. Las principales modalidades incluyen los inhibidores de puntos de control inmunitario (anti-PD-1, anti-PD-L1, anti-CTLA-4), la terapia con celulas T con receptor de antigeno quimerico (CAR-T), las vacunas terapeuticas contra el cancer, las citoquinas, y los virus oncoliticos. La inmunoterapia ha demostrado respuestas duraderas y potencialmente curativas en multiples tipos de cancer avanzado, transformando el pronostico de melanoma metastasico, cancer de pulmon y otros tumores.",
    "descripcionEn": "Cancer immunotherapy is a revolutionary therapeutic approach that uses or enhances the patient's own immune system to recognize and destroy tumor cells. Unlike conventional chemotherapy, which directly attacks dividing cells, immunotherapy modulates the immune response to overcome tumor immune evasion mechanisms. Major modalities include immune checkpoint inhibitors (anti-PD-1, anti-PD-L1, anti-CTLA-4), chimeric antigen receptor T-cell therapy (CAR-T), therapeutic cancer vaccines, cytokines, and oncolytic viruses. Immunotherapy has demonstrated durable and potentially curative responses in multiple types of advanced cancer, transforming the prognosis of metastatic melanoma, lung cancer, and other tumors.",
    "categoriaEs": "Oncoinmunologia",
    "categoriaEn": "Oncoimmunology",
    "sintomasEs": [
      "Efectos adversos inmunomediados: colitis (diarrea, dolor abdominal, sangre en heces)",
      "Hepatitis autoinmune (elevacion de transaminasas, ictericia)",
      "Dermatitis (erupcion cutanea, prurito, vitiligo)",
      "Neumonitis (tos, disnea, hipoxia)",
      "Endocrinopatias: tiroiditis, hipofisitis, insuficiencia suprarrenal, diabetes tipo 1",
      "Nefritis (elevacion de creatinina, proteinuria)",
      "Miocarditis (dolor toracico, arritmias, insuficiencia cardiaca)",
      "Neurotoxicidad: neuropatia, encefalitis, miastenia gravis",
      "Sindrome de liberacion de citoquinas (fiebre, hipotension, taquicardia) con CAR-T",
      "Artritis y mialgias inflamatorias"
    ],
    "sintomasEn": [
      "Immune-mediated adverse effects: colitis (diarrhea, abdominal pain, bloody stools)",
      "Autoimmune hepatitis (elevated transaminases, jaundice)",
      "Dermatitis (skin rash, pruritus, vitiligo)",
      "Pneumonitis (cough, dyspnea, hypoxia)",
      "Endocrinopathies: thyroiditis, hypophysitis, adrenal insufficiency, type 1 diabetes",
      "Nephritis (elevated creatinine, proteinuria)",
      "Myocarditis (chest pain, arrhythmias, heart failure)",
      "Neurotoxicity: neuropathy, encephalitis, myasthenia gravis",
      "Cytokine release syndrome (fever, hypotension, tachycardia) with CAR-T",
      "Inflammatory arthritis and myalgias"
    ],
    "causasEs": "La necesidad de inmunoterapia surge porque los tumores desarrollan multiples mecanismos para evadir la vigilancia inmunitaria. Las celulas tumorales sobreexpresan ligandos inhibitorios como PD-L1 que desactivan las celulas T citotoxicas, reclutan celulas inmunosupresoras como linfocitos T reguladores y celulas mieloides supresoras, secretan citoquinas inmunosupresoras como TGF-beta e IL-10, y reducen la expresion de antigenos tumorales y moleculas HLA clase I. Los tumores con alta carga mutacional (melanoma, cancer de pulmon por tabaquismo, tumores con inestabilidad microsatelital) tienden a responder mejor a la inmunoterapia porque generan mas neoantigenoss reconocibles por el sistema inmune.",
    "causasEn": "The need for immunotherapy arises because tumors develop multiple mechanisms to evade immune surveillance. Tumor cells overexpress inhibitory ligands like PD-L1 that deactivate cytotoxic T cells, recruit immunosuppressive cells such as regulatory T lymphocytes and myeloid-derived suppressor cells, secrete immunosuppressive cytokines like TGF-beta and IL-10, and reduce expression of tumor antigens and HLA class I molecules. Tumors with high mutational burden (melanoma, smoking-related lung cancer, microsatellite instability tumors) tend to respond better to immunotherapy because they generate more neoantigens recognizable by the immune system.",
    "diagnosticoEs": "La seleccion de pacientes para inmunoterapia requiere evaluacion de biomarcadores predictivos. La expresion de PD-L1 en tejido tumoral por inmunohistoquimica es un biomarcador aprobado para varios tipos de cancer. La inestabilidad de microsatelites (MSI-H) o la deficiencia de reparacion de emparejamiento erroneo (dMMR) predicen respuesta a anti-PD-1 independientemente del tipo tumoral. La carga mutacional tumoral (TMB) medida por secuenciacion de nueva generacion es otro biomarcador emergente. La evaluacion del microambiente tumoral, la infiltracion de celulas T, y el perfil de expresion genica inmunitaria ayudan a predecir la respuesta. El monitoreo durante el tratamiento incluye imagenes seriadas (considerando la pseudoprogresion), marcadores tumorales, y vigilancia activa de eventos adversos inmunomediados.",
    "diagnosticoEn": "Patient selection for immunotherapy requires evaluation of predictive biomarkers. PD-L1 expression in tumor tissue by immunohistochemistry is an approved biomarker for several cancer types. Microsatellite instability-high (MSI-H) or mismatch repair deficiency (dMMR) predict response to anti-PD-1 regardless of tumor type. Tumor mutational burden (TMB) measured by next-generation sequencing is another emerging biomarker. Assessment of the tumor microenvironment, T-cell infiltration, and immune gene expression profile help predict response. Monitoring during treatment includes serial imaging (considering pseudoprogression), tumor markers, and active surveillance for immune-mediated adverse events.",
    "tratamientoEs": "Los inhibidores de puntos de control son el pilar de la inmunoterapia moderna: pembrolizumab y nivolumab (anti-PD-1), atezolizumab y durvalumab (anti-PD-L1), e ipilimumab (anti-CTLA-4), usados solos o en combinacion. La terapia CAR-T utiliza celulas T del paciente modificadas geneticamente para expresar un receptor quimerico que reconoce antigenos tumorales especificos (CD19 para leucemias y linfomas de celulas B). Las vacunas terapeuticas incluyen sipuleucel-T para cancer de prostata. Las citoquinas como IL-2 e interferon alfa se usan en melanoma y cancer renal. Los eventos adversos inmunomediados se manejan con corticosteroides e inmunosupresores adicionales segun la gravedad. El sindrome de liberacion de citoquinas por CAR-T se trata con tocilizumab (anti-IL-6) y corticosteroides. La combinacion de inmunoterapia con quimioterapia, radioterapia o terapias dirigidas esta ampliando las indicaciones.",
    "tratamientoEn": "Immune checkpoint inhibitors are the cornerstone of modern immunotherapy: pembrolizumab and nivolumab (anti-PD-1), atezolizumab and durvalumab (anti-PD-L1), and ipilimumab (anti-CTLA-4), used alone or in combination. CAR-T therapy uses patient T cells genetically modified to express a chimeric receptor recognizing specific tumor antigens (CD19 for B-cell leukemias and lymphomas). Therapeutic vaccines include sipuleucel-T for prostate cancer. Cytokines like IL-2 and interferon alpha are used in melanoma and renal cancer. Immune-mediated adverse events are managed with corticosteroids and additional immunosuppressants based on severity. Cytokine release syndrome from CAR-T is treated with tocilizumab (anti-IL-6) and corticosteroids. Combining immunotherapy with chemotherapy, radiotherapy, or targeted therapies is expanding indications.",
    "prevencionEs": "La prevencion de los eventos adversos inmunomediados de la inmunoterapia requiere educacion del paciente sobre los posibles sintomas, monitorizacion clinica y analitica regular antes de cada ciclo de tratamiento, y un alto indice de sospecha por parte del equipo medico. Los pacientes deben ser evaluados para enfermedades autoinmunes preexistentes antes de iniciar el tratamiento, ya que estas pueden exacerbarse. Se recomienda la evaluacion basal de funcion tiroidea, hepatica, renal y suprarrenal. La vacunacion debe actualizarse antes de iniciar la inmunoterapia. Las guias clinicas proporcionan algoritmos de manejo escalonado para cada tipo de evento adverso, desde la observacion y tratamiento sintomatico hasta la suspension del tratamiento y el uso de inmunosupresion agresiva.",
    "prevencionEn": "Prevention of immune-mediated adverse events from immunotherapy requires patient education about possible symptoms, regular clinical and laboratory monitoring before each treatment cycle, and a high index of suspicion by the medical team. Patients should be evaluated for pre-existing autoimmune diseases before starting treatment, as these may be exacerbated. Baseline assessment of thyroid, hepatic, renal, and adrenal function is recommended. Vaccination should be updated before starting immunotherapy. Clinical guidelines provide stepwise management algorithms for each type of adverse event, from observation and symptomatic treatment to treatment discontinuation and aggressive immunosuppression.",
    "complicacionesEs": [
      "Eventos adversos inmunomediados graves: colitis perforante, hepatitis fulminante, miocarditis fatal",
      "Endocrinopatias permanentes que requieren reemplazo hormonal de por vida",
      "Neumonitis severa que puede requerir ventilacion mecanica",
      "Sindrome de liberacion de citoquinas grave con falla multiorganica (CAR-T)",
      "Neurotoxicidad asociada a celulas inmunes efectoras (ICANS) con CAR-T",
      "Pseudoprogresion tumoral que puede confundirse con progresion real",
      "Reacciones de hiperprogresion en algunos pacientes",
      "Aplasia de celulas B prolongada despues de CAR-T anti-CD19"
    ],
    "complicacionesEn": [
      "Severe immune-mediated adverse events: perforating colitis, fulminant hepatitis, fatal myocarditis",
      "Permanent endocrinopathies requiring lifelong hormone replacement",
      "Severe pneumonitis potentially requiring mechanical ventilation",
      "Severe cytokine release syndrome with multiorgan failure (CAR-T)",
      "Immune effector cell-associated neurotoxicity syndrome (ICANS) with CAR-T",
      "Tumor pseudoprogression that can be confused with true progression",
      "Hyperprogression reactions in some patients",
      "Prolonged B-cell aplasia after anti-CD19 CAR-T"
    ],
    "cuandoConsultarEs": "Los pacientes en tratamiento con inmunoterapia deben contactar a su oncologo inmediatamente si presentan diarrea persistente o con sangre, dificultad respiratoria o tos nueva, ictericia o dolor abdominal, erupciones cutaneas extensas, dolor toracico o palpitaciones, cefalea intensa, confusion o cambios de vision, fatiga extrema con hipotension, debilidad muscular progresiva, o fiebre alta. No deben esperar a la siguiente cita programada, ya que los eventos adversos inmunomediados pueden progresar rapidamente y requieren intervencion temprana.",
    "cuandoConsultarEn": "Patients on immunotherapy should contact their oncologist immediately if they experience persistent or bloody diarrhea, respiratory difficulty or new cough, jaundice or abdominal pain, extensive skin rashes, chest pain or palpitations, severe headache, confusion or vision changes, extreme fatigue with hypotension, progressive muscle weakness, or high fever. They should not wait for the next scheduled appointment, as immune-mediated adverse events can progress rapidly and require early intervention."
  },
  {
    "id": "enfermedad-injerto-huesped",
    "nombreEs": "Enfermedad Injerto contra Huesped (EICH)",
    "nombreEn": "Graft-versus-Host Disease (GvHD)",
    "descripcionEs": "La enfermedad injerto contra huesped es una complicacion potencialmente mortal del trasplante alogenico de celulas madre hematopoyeticas (medula osea) en la que los linfocitos T del donante reconocen los tejidos del receptor como extranos y los atacan. Se presenta en dos formas principales: aguda (tipicamente en los primeros 100 dias post-trasplante, afectando piel, higado y tracto gastrointestinal) y cronica (despues de los 100 dias, con manifestaciones que se asemejan a enfermedades autoinmunes y pueden afectar practicamente cualquier organo). La EICH aguda ocurre en el 30-50% de los trasplantes alogenicos con donante compatible y en mayor porcentaje con donantes no emparentados. Paradojicamente, un grado leve de EICH puede asociarse a un efecto beneficioso de injerto contra leucemia (GvL) que reduce la recaida tumoral.",
    "descripcionEn": "Graft-versus-host disease is a potentially fatal complication of allogeneic hematopoietic stem cell (bone marrow) transplantation in which donor T lymphocytes recognize recipient tissues as foreign and attack them. It presents in two main forms: acute (typically within the first 100 days post-transplant, affecting skin, liver, and gastrointestinal tract) and chronic (after 100 days, with manifestations resembling autoimmune diseases that can affect virtually any organ). Acute GvHD occurs in 30-50% of matched related donor allogeneic transplants and at higher rates with unrelated donors. Paradoxically, a mild degree of GvHD may be associated with a beneficial graft-versus-leukemia (GvL) effect that reduces tumor relapse.",
    "categoriaEs": "Trasplante",
    "categoriaEn": "Transplant",
    "sintomasEs": [
      "EICH aguda cutanea: erupcion maculopapular eritematosa que comienza en palmas, plantas y orejas, pudiendo progresar a eritrodermia generalizada con ampollas",
      "EICH aguda hepatica: ictericia, elevacion de bilirrubina y fosfatasa alcalina, hepatomegalia dolorosa",
      "EICH aguda gastrointestinal: diarrea acuosa profusa (puede superar 2 litros/dia), nausea, vomito, dolor abdominal tipo colico, sangrado digestivo",
      "EICH cronica cutanea: cambios tipo liquen plano, esclerosis cutanea tipo esclerodermia, despigmentacion",
      "EICH cronica oral: ulceras orales, xerostomia, cambios tipo liquen en mucosa oral",
      "EICH cronica ocular: queratoconjuntivitis sicca severa, fotofobia",
      "EICH cronica pulmonar: bronquiolitis obliterante con disnea progresiva",
      "EICH cronica musculoesqueletica: fascitis, contracturas articulares, miositis",
      "EICH cronica genital: estenosis vaginal, fimosis",
      "Perdida de peso, caquexia y disminucion severa de calidad de vida"
    ],
    "sintomasEn": [
      "Acute cutaneous GvHD: erythematous maculopapular rash starting on palms, soles, and ears, potentially progressing to generalized erythroderma with blisters",
      "Acute hepatic GvHD: jaundice, elevated bilirubin and alkaline phosphatase, painful hepatomegaly",
      "Acute gastrointestinal GvHD: profuse watery diarrhea (may exceed 2 liters/day), nausea, vomiting, crampy abdominal pain, gastrointestinal bleeding",
      "Chronic cutaneous GvHD: lichen planus-like changes, scleroderma-like skin sclerosis, depigmentation",
      "Chronic oral GvHD: oral ulcers, xerostomia, lichen-like mucosal changes",
      "Chronic ocular GvHD: severe keratoconjunctivitis sicca, photophobia",
      "Chronic pulmonary GvHD: bronchiolitis obliterans with progressive dyspnea",
      "Chronic musculoskeletal GvHD: fasciitis, joint contractures, myositis",
      "Chronic genital GvHD: vaginal stenosis, phimosis",
      "Weight loss, cachexia, and severe quality of life reduction"
    ],
    "causasEs": "La EICH se produce cuando los linfocitos T del donante, presentes en el injerto de celulas madre, reconocen como extranos los antigenos HLA menores (y a veces mayores) del receptor. Se requieren tres condiciones clasicas (criterios de Billingham): el injerto debe contener celulas inmunocompetentes, el receptor debe expresar antigenos ausentes en el donante, y el receptor debe ser incapaz de montar una respuesta eficaz contra las celulas del donante (por estar inmunosuprimido). Los factores de riesgo incluyen: incompatibilidad HLA, diferencia de sexo (donante mujer para receptor masculino), edad avanzada del receptor, fuente de celulas madre (sangre periferica > medula osea > cordon umbilical), regimen de acondicionamiento mieloablativo, y profilaxis inadecuada.",
    "causasEn": "GvHD occurs when donor T lymphocytes, present in the stem cell graft, recognize minor (and sometimes major) HLA antigens of the recipient as foreign. Three classic conditions are required (Billingham criteria): the graft must contain immunocompetent cells, the recipient must express antigens absent in the donor, and the recipient must be unable to mount an effective response against donor cells (due to immunosuppression). Risk factors include: HLA incompatibility, sex mismatch (female donor to male recipient), advanced recipient age, stem cell source (peripheral blood > bone marrow > cord blood), myeloablative conditioning regimen, and inadequate prophylaxis.",
    "diagnosticoEs": "El diagnostico se basa en la presentacion clinica en el contexto temporal apropiado post-trasplante, confirmado por biopsia del organo afectado. La biopsia de piel muestra apoptosis de queratinocitos basales con infiltrado linfocitico, la biopsia hepatica muestra dano de conductos biliares, y la biopsia intestinal muestra apoptosis de celulas de las criptas. La EICH aguda se clasifica en grados I-IV segun la severidad de afectacion cutanea, hepatica y gastrointestinal. La EICH cronica se clasifica como leve, moderada o severa segun los criterios del NIH. Los biomarcadores emergentes incluyen ST2, REG3-alfa, TNFR1 y elafina, que pueden ayudar a predecir severidad y respuesta al tratamiento.",
    "diagnosticoEn": "Diagnosis is based on clinical presentation in the appropriate post-transplant temporal context, confirmed by biopsy of the affected organ. Skin biopsy shows basal keratinocyte apoptosis with lymphocytic infiltrate, liver biopsy shows bile duct damage, and intestinal biopsy shows crypt cell apoptosis. Acute GvHD is graded I-IV based on severity of cutaneous, hepatic, and gastrointestinal involvement. Chronic GvHD is classified as mild, moderate, or severe according to NIH criteria. Emerging biomarkers include ST2, REG3-alpha, TNFR1, and elafin, which may help predict severity and treatment response.",
    "tratamientoEs": "La EICH aguda grado I generalmente se maneja con corticosteroides topicos. Los grados II-IV requieren metilprednisolona sistemica (1-2 mg/kg/dia) como primera linea. La EICH resistente a esteroides es un desafio terapeutico; las opciones incluyen ruxolitinib (inhibidor de JAK1/2, aprobado para EICH aguda y cronica), micofenolato de mofetilo, fotoferesis extracorporea, anticuerpos anti-TNF, y sirolimus. Para la EICH cronica, la primera linea es prednisona con o sin inhibidor de calcineurina, con ruxolitinib, ibrutinib (inhibidor de BTK), o belumosudil (inhibidor de ROCK2) para casos refractarios. La fotoferesis extracorporea es eficaz en EICH cronica cutanea y oral. El manejo de soporte incluye nutricion parenteral, cuidado de piel, lagrimas artificiales, fisioterapia, y prevencion de infecciones.",
    "tratamientoEn": "Grade I acute GvHD is generally managed with topical corticosteroids. Grades II-IV require systemic methylprednisolone (1-2 mg/kg/day) as first line. Steroid-refractory GvHD is a therapeutic challenge; options include ruxolitinib (JAK1/2 inhibitor, approved for acute and chronic GvHD), mycophenolate mofetil, extracorporeal photopheresis, anti-TNF antibodies, and sirolimus. For chronic GvHD, first line is prednisone with or without calcineurin inhibitor, with ruxolitinib, ibrutinib (BTK inhibitor), or belumosudil (ROCK2 inhibitor) for refractory cases. Extracorporeal photopheresis is effective for cutaneous and oral chronic GvHD. Supportive management includes parenteral nutrition, skin care, artificial tears, physical therapy, and infection prevention.",
    "prevencionEs": "La profilaxis estandar de EICH incluye la combinacion de un inhibidor de calcineurina (tacrolimus o ciclosporina) con metotrexato a dosis bajas o micofenolato de mofetilo administrados los primeros meses post-trasplante. La ciclofosfamida post-trasplante (dias +3 y +4) ha revolucionado el trasplante haploidentico, permitiendo usar donantes familiares parcialmente compatibles con tasas bajas de EICH. La deplecion de celulas T del injerto reduce la EICH pero puede aumentar la recaida y falla del injerto. La seleccion del donante optimo (HLA identico, edad joven, mismo sexo), la fuente de celulas madre (cordon umbilical asociado a menos EICH cronica), y el regimen de acondicionamiento de intensidad reducida tambien minimizan el riesgo.",
    "prevencionEn": "Standard GvHD prophylaxis includes the combination of a calcineurin inhibitor (tacrolimus or cyclosporine) with low-dose methotrexate or mycophenolate mofetil administered in the first months post-transplant. Post-transplant cyclophosphamide (days +3 and +4) has revolutionized haploidentical transplantation, allowing the use of partially matched family donors with low GvHD rates. T-cell depletion from the graft reduces GvHD but may increase relapse and graft failure. Optimal donor selection (HLA identical, young age, same sex), stem cell source (cord blood associated with less chronic GvHD), and reduced-intensity conditioning regimens also minimize risk.",
    "complicacionesEs": [
      "Falla multiorganica y muerte en EICH aguda severa (grado IV: mortalidad >90%)",
      "Bronquiolitis obliterante: dano pulmonar irreversible con insuficiencia respiratoria cronica",
      "Esclerosis cutanea incapacitante con contracturas articulares",
      "Insuficiencia hepatica por EICH hepatica cronica",
      "Inmunodeficiencia profunda y prolongada con riesgo de infecciones oportunistas graves",
      "Sindrome de ojo seco severo con riesgo de ulceracion corneal",
      "Estenosis esofagica y malnutricion cronica",
      "Deterioro severo de la calidad de vida y discapacidad funcional"
    ],
    "complicacionesEn": [
      "Multiorgan failure and death in severe acute GvHD (grade IV: >90% mortality)",
      "Bronchiolitis obliterans: irreversible lung damage with chronic respiratory failure",
      "Disabling cutaneous sclerosis with joint contractures",
      "Hepatic failure from chronic hepatic GvHD",
      "Profound and prolonged immunodeficiency with risk of serious opportunistic infections",
      "Severe dry eye syndrome with risk of corneal ulceration",
      "Esophageal stenosis and chronic malnutrition",
      "Severe quality of life deterioration and functional disability"
    ],
    "cuandoConsultarEs": "Los pacientes post-trasplante de medula osea deben reportar inmediatamente cualquier erupcion cutanea nueva, diarrea (especialmente acuosa o con sangre), nausea o vomito persistentes, ictericia, dolor abdominal, tos o dificultad respiratoria, sequedad ocular severa, ulceras orales, perdida de peso inexplicable, o fiebre. Es crucial no atribuir estos sintomas a causas banales, ya que la EICH requiere diagnostico y tratamiento tempranos para prevenir progresion a formas severas e irreversibles.",
    "cuandoConsultarEn": "Post-bone marrow transplant patients should immediately report any new skin rash, diarrhea (especially watery or bloody), persistent nausea or vomiting, jaundice, abdominal pain, cough or respiratory difficulty, severe eye dryness, oral ulcers, unexplained weight loss, or fever. It is crucial not to attribute these symptoms to benign causes, as GvHD requires early diagnosis and treatment to prevent progression to severe and irreversible forms."
  },
  {
    "id": "angioedema-hereditario",
    "nombreEs": "Angioedema Hereditario (AEH)",
    "nombreEn": "Hereditary Angioedema (HAE)",
    "descripcionEs": "El angioedema hereditario es un trastorno genetico raro causado por la deficiencia o disfuncion del inhibidor de C1 esterasa (C1-INH), una proteina reguladora del sistema del complemento, la via de las cininas y la cascada de coagulacion. La deficiencia de C1-INH resulta en la produccion excesiva de bradicinina, que causa permeabilidad vascular aumentada y episodios recurrentes de edema subcutaneo o submucoso grave sin urticaria. Los ataques pueden afectar extremidades, cara, tracto gastrointestinal (causando dolor abdominal severo que puede simular abdomen quirurgico) y, lo mas peligroso, la laringe (con riesgo de asfixia). Se distinguen tres tipos: tipo I (85%, niveles bajos de C1-INH), tipo II (15%, niveles normales pero funcion reducida), y tipo III (raro, relacionado con mutaciones del factor XII, predominantemente en mujeres).",
    "descripcionEn": "Hereditary angioedema is a rare genetic disorder caused by deficiency or dysfunction of C1 esterase inhibitor (C1-INH), a regulatory protein of the complement system, kinin pathway, and coagulation cascade. C1-INH deficiency results in excessive bradykinin production, causing increased vascular permeability and recurrent episodes of severe subcutaneous or submucosal edema without urticaria. Attacks can affect extremities, face, gastrointestinal tract (causing severe abdominal pain that may mimic surgical abdomen), and most dangerously, the larynx (with risk of asphyxiation). Three types are distinguished: type I (85%, low C1-INH levels), type II (15%, normal levels but reduced function), and type III (rare, related to factor XII mutations, predominantly in women).",
    "categoriaEs": "Complemento",
    "categoriaEn": "Complement",
    "sintomasEs": [
      "Edema localizado no pruriginoso de aparicion gradual (horas) en extremidades, cara, genitales",
      "Dolor abdominal severo tipo colico con nausea y vomito por edema de pared intestinal",
      "Edema laringeo: ronquera progresiva, disfagia, estridor, riesgo de obstruccion completa de via aerea",
      "Los ataques duran tipicamente 2-5 dias sin tratamiento",
      "Prodromo en algunos pacientes: erupcion tipo eritema marginado (no urticaria)",
      "Ataques de frecuencia variable: desde semanales hasta pocos al ano",
      "Ausencia de urticaria (diferencia clave con angioedema alergico)",
      "El edema NO responde a antihistaminicos, corticosteroides ni epinefrina",
      "Ascitis y derrame pleural durante ataques abdominales severos",
      "Los ataques pueden ser desencadenados por estres, trauma, infecciones, procedimientos dentales o estrogenos"
    ],
    "sintomasEn": [
      "Localized non-pruritic edema of gradual onset (hours) in extremities, face, genitals",
      "Severe crampy abdominal pain with nausea and vomiting from intestinal wall edema",
      "Laryngeal edema: progressive hoarseness, dysphagia, stridor, risk of complete airway obstruction",
      "Attacks typically last 2-5 days without treatment",
      "Prodrome in some patients: erythema marginatum-like rash (not urticaria)",
      "Attacks of variable frequency: from weekly to a few per year",
      "Absence of urticaria (key difference from allergic angioedema)",
      "Edema does NOT respond to antihistamines, corticosteroids, or epinephrine",
      "Ascites and pleural effusion during severe abdominal attacks",
      "Attacks can be triggered by stress, trauma, infections, dental procedures, or estrogens"
    ],
    "causasEs": "El angioedema hereditario tipos I y II es causado por mutaciones autosomicas dominantes en el gen SERPING1 que codifica el inhibidor de C1 esterasa (C1-INH), localizado en el cromosoma 11. En el tipo I, las mutaciones causan produccion insuficiente de proteina C1-INH; en el tipo II, la proteina se produce en cantidades normales pero es disfuncional. El tipo III esta asociado a mutaciones en el gen del factor XII de la coagulacion (F12), el gen de la angiopoyetina-1 (ANGPT1), del plasminogeno (PLG), o de la quinina B1 (KNG1), y afecta predominantemente a mujeres. La deficiencia de C1-INH lleva a la activacion descontrolada de la calicreina plasmatica, generando bradicinina en exceso, que actua sobre los receptores B2 del endotelio vascular causando vasodilatacion y aumento de permeabilidad capilar. Los desencadenantes incluyen trauma fisico, estres emocional, infecciones, procedimientos quirurgicos o dentales, y estrogenos exogenos.",
    "causasEn": "Hereditary angioedema types I and II are caused by autosomal dominant mutations in the SERPING1 gene encoding C1 esterase inhibitor (C1-INH), located on chromosome 11. In type I, mutations cause insufficient C1-INH protein production; in type II, the protein is produced in normal quantities but is dysfunctional. Type III is associated with mutations in the coagulation factor XII gene (F12), angiopoietin-1 gene (ANGPT1), plasminogen (PLG), or kininogen B1 (KNG1), and predominantly affects women. C1-INH deficiency leads to uncontrolled activation of plasma kallikrein, generating excess bradykinin, which acts on B2 receptors of vascular endothelium causing vasodilation and increased capillary permeability. Triggers include physical trauma, emotional stress, infections, surgical or dental procedures, and exogenous estrogens.",
    "diagnosticoEs": "El diagnostico se sospecha ante episodios recurrentes de angioedema sin urticaria, historia familiar de angioedema, dolor abdominal recurrente inexplicable, o angioedema que no responde a antihistaminicos ni corticosteroides. Las pruebas de laboratorio incluyen: nivel de C4 (disminuido entre y durante los ataques — prueba de tamizaje mas util), nivel cuantitativo de C1-INH (bajo en tipo I), nivel funcional de C1-INH (bajo en tipos I y II), y nivel de C1q (normal en hereditario, bajo en adquirido). El diagnostico genetico confirma la mutacion especifica. Los niveles de C4 son un marcador economico y accesible que esta disminuido en >95% de los pacientes con AEH, incluso entre ataques. Se recomienda el tamizaje de familiares de primer grado.",
    "diagnosticoEn": "Diagnosis is suspected with recurrent episodes of angioedema without urticaria, family history of angioedema, unexplained recurrent abdominal pain, or angioedema unresponsive to antihistamines or corticosteroids. Laboratory tests include: C4 level (decreased between and during attacks — most useful screening test), quantitative C1-INH level (low in type I), functional C1-INH level (low in types I and II), and C1q level (normal in hereditary, low in acquired). Genetic testing confirms the specific mutation. C4 levels are an economical and accessible marker that is decreased in >95% of HAE patients, even between attacks. Screening of first-degree relatives is recommended.",
    "tratamientoEs": "El tratamiento se divide en manejo de ataques agudos, profilaxis a corto plazo y profilaxis a largo plazo. Para ataques agudos: concentrado de C1-INH derivado de plasma (Berinert, Cinryze) o recombinante (Ruconest) por via intravenosa, icatibant (antagonista del receptor B2 de bradicinina) subcutaneo, o ecallantida (inhibidor de calicreina) subcutanea. El tratamiento debe administrarse lo antes posible, idealmente autoadministrado por el paciente. Los ataques laringeos son una emergencia medica que puede requerir intubacion o traqueotomia. La profilaxis a largo plazo incluye: lanadelumab (anticuerpo anti-calicreina, subcutaneo cada 2-4 semanas), berotralstat (inhibidor oral de calicreina diario), concentrado de C1-INH subcutaneo profilactico (Haegarda). Los antihistaminicos, corticosteroides y epinefrina NO son eficaces. Los androgenos atenuados (danazol) se usan cada vez menos por sus efectos adversos.",
    "tratamientoEn": "Treatment is divided into acute attack management, short-term prophylaxis, and long-term prophylaxis. For acute attacks: plasma-derived C1-INH concentrate (Berinert, Cinryze) or recombinant (Ruconest) intravenously, icatibant (bradykinin B2 receptor antagonist) subcutaneously, or ecallantide (kallikrein inhibitor) subcutaneously. Treatment should be administered as soon as possible, ideally self-administered by the patient. Laryngeal attacks are a medical emergency that may require intubation or tracheotomy. Long-term prophylaxis includes: lanadelumab (anti-kallikrein antibody, subcutaneous every 2-4 weeks), berotralstat (daily oral kallikrein inhibitor), subcutaneous prophylactic C1-INH concentrate (Haegarda). Antihistamines, corticosteroids, and epinephrine are NOT effective. Attenuated androgens (danazol) are used decreasingly due to adverse effects.",
    "prevencionEs": "La prevencion de ataques incluye la identificacion y evitacion de desencadenantes personales, la profilaxis a largo plazo con lanadelumab, berotralstat o C1-INH subcutaneo para pacientes con ataques frecuentes o severos, y la profilaxis a corto plazo con concentrado de C1-INH intravenoso antes de procedimientos quirurgicos o dentales. Los pacientes deben evitar inhibidores de la ECA (pueden precipitar ataques) y estrogenos exogenos (anticonceptivos orales, terapia de reemplazo hormonal). El consejo genetico es importante dado el patron de herencia autosomico dominante (50% de probabilidad de transmision a cada hijo). Cada paciente debe tener siempre disponible al menos dos dosis de medicacion de rescate y un plan de accion personalizado para emergencias.",
    "prevencionEn": "Attack prevention includes identification and avoidance of personal triggers, long-term prophylaxis with lanadelumab, berotralstat, or subcutaneous C1-INH for patients with frequent or severe attacks, and short-term prophylaxis with intravenous C1-INH concentrate before surgical or dental procedures. Patients should avoid ACE inhibitors (can precipitate attacks) and exogenous estrogens (oral contraceptives, hormone replacement therapy). Genetic counseling is important given the autosomal dominant inheritance pattern (50% probability of transmission to each child). Each patient should always have at least two rescue medication doses available and a personalized emergency action plan.",
    "complicacionesEs": [
      "Muerte por asfixia en ataques laringeos no tratados (mortalidad historica del 30% antes de terapias especificas)",
      "Cirugia abdominal innecesaria por confusion con abdomen agudo quirurgico",
      "Retraso diagnostico (promedio 8-12 anos desde el inicio de sintomas)",
      "Discapacidad por ataques frecuentes que afectan la asistencia escolar y laboral",
      "Ansiedad y depresion por la imprevisibilidad de los ataques",
      "Complicaciones de procedimientos de emergencia innecesarios",
      "Efectos adversos de androgenos a largo plazo: hepatotoxicidad, virilizacion, dislipidemia"
    ],
    "complicacionesEn": [
      "Death from asphyxiation in untreated laryngeal attacks (historical 30% mortality before specific therapies)",
      "Unnecessary abdominal surgery due to confusion with surgical acute abdomen",
      "Diagnostic delay (average 8-12 years from symptom onset)",
      "Disability from frequent attacks affecting school and work attendance",
      "Anxiety and depression due to attack unpredictability",
      "Complications from unnecessary emergency procedures",
      "Long-term androgen adverse effects: hepatotoxicity, virilization, dyslipidemia"
    ],
    "cuandoConsultarEs": "Busque atencion medica de emergencia ante cualquier signo de afectacion de la via aerea: ronquera, cambio de voz, dificultad para tragar, sensacion de opresion en la garganta, o estridor. Consulte a su especialista si los ataques aumentan en frecuencia o severidad, si la profilaxis actual no es efectiva, antes de cualquier procedimiento quirurgico o dental, ante un embarazo planificado, o si familiares presentan sintomas sugestivos. Todo paciente con AEH debe tener acceso inmediato a medicacion de rescate y un plan de emergencia que incluya instrucciones para el personal medico sobre el tratamiento especifico.",
    "cuandoConsultarEn": "Seek emergency medical care for any sign of airway involvement: hoarseness, voice change, difficulty swallowing, throat tightness, or stridor. Consult your specialist if attacks increase in frequency or severity, if current prophylaxis is not effective, before any surgical or dental procedure, for a planned pregnancy, or if family members develop suggestive symptoms. Every HAE patient should have immediate access to rescue medication and an emergency plan that includes instructions for medical personnel about specific treatment."
  }
]`);

// ── Helper functions ────────────────────────────────────────────────

export function buscarInmunologia(termino: string): InmunologiaEntry[] {
  const t = termino.toLowerCase();
  return INMUNOLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getInmunologiaById(id: string): InmunologiaEntry | undefined {
  return INMUNOLOGIA_ENTRIES.find((e) => e.id === id);
}

export function getInmunologiaPorCategoria(categoria: string): InmunologiaEntry[] {
  const c = categoria.toLowerCase();
  return INMUNOLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
