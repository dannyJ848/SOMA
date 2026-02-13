// =============================================================================
// SOMA Neumologia Enciclopedia — Spanish-First Bilingual
// Detailed Pulmonology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface NeumologiaEntry {
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

export const NEUMOLOGIA_ENTRIES: NeumologiaEntry[] = JSON.parse(`[
  {
    "id": "asma-bronquial",
    "nombreEs": "Asma Bronquial",
    "nombreEn": "Bronchial Asthma",
    "categoriaEs": "Obstructiva",
    "categoriaEn": "Obstructive",
    "descripcionEs": "El asma bronquial es una enfermedad inflamatoria cronica de las vias respiratorias que se caracteriza por episodios recurrentes de sibilancias, disnea, opresion toracica y tos. La inflamacion provoca hiperreactividad bronquial y obstruccion reversible del flujo aereo, lo cual significa que los bronquios se estrechan ante diversos estimulos como alergenos, ejercicio, aire frio o infecciones respiratorias. Afecta a aproximadamente 300 millones de personas en el mundo y es la enfermedad cronica mas comun en la infancia. El manejo adecuado permite a la mayoria de los pacientes llevar una vida normal y activa, pero el asma no controlada puede resultar en remodelacion permanente de las vias aereas y crisis potencialmente mortales.",
    "descripcionEn": "Bronchial asthma is a chronic inflammatory disease of the airways characterized by recurrent episodes of wheezing, dyspnea, chest tightness, and cough. The inflammation causes bronchial hyperreactivity and reversible airflow obstruction, meaning the bronchi narrow in response to various stimuli such as allergens, exercise, cold air, or respiratory infections. It affects approximately 300 million people worldwide and is the most common chronic disease in childhood. Proper management allows most patients to lead a normal and active life, but uncontrolled asthma can result in permanent airway remodeling and potentially fatal crises.",
    "sintomasEs": [
      "Sibilancias (silbido al respirar, especialmente al exhalar)",
      "Disnea o dificultad para respirar con sensacion de falta de aire",
      "Opresion toracica o sensacion de peso en el pecho",
      "Tos seca o productiva, frecuentemente peor en la noche o al amanecer",
      "Despertar nocturno por tos o dificultad respiratoria",
      "Empeoramiento de sintomas con ejercicio, aire frio, humo o alergenos",
      "Fatiga y limitacion en actividades fisicas",
      "Uso de musculos accesorios del cuello durante crisis severas"
    ],
    "sintomasEn": [
      "Wheezing (whistling sound when breathing, especially during exhalation)",
      "Dyspnea or difficulty breathing with sensation of air hunger",
      "Chest tightness or sensation of heaviness in the chest",
      "Dry or productive cough, frequently worse at night or early morning",
      "Nocturnal awakening due to cough or breathing difficulty",
      "Worsening symptoms with exercise, cold air, smoke, or allergens",
      "Fatigue and limitation in physical activities",
      "Use of accessory neck muscles during severe crises"
    ],
    "causasEs": "El asma es una enfermedad multifactorial con fuerte componente genetico y ambiental. Los principales factores incluyen predisposicion atopica (tendencia genetica a producir IgE excesiva ante alergenos), exposicion a alergenos inhalados (acaros del polvo, polen, caspa de animales, hongos), infecciones respiratorias virales en la infancia (especialmente virus sincitial respiratorio y rinovirus), exposicion al humo de tabaco (tanto activa como pasiva), contaminacion ambiental, obesidad, y factores ocupacionales como polvos industriales y quimicos. La hipotesis de la higiene sugiere que la falta de exposicion a microbios en la infancia temprana contribuye al aumento de asma en paises desarrollados.",
    "causasEn": "Asthma is a multifactorial disease with strong genetic and environmental components. The main factors include atopic predisposition (genetic tendency to produce excessive IgE against allergens), exposure to inhaled allergens (dust mites, pollen, animal dander, molds), viral respiratory infections in childhood (especially respiratory syncytial virus and rhinovirus), tobacco smoke exposure (both active and passive), environmental pollution, obesity, and occupational factors such as industrial dusts and chemicals. The hygiene hypothesis suggests that lack of exposure to microbes in early childhood contributes to the increase in asthma in developed countries.",
    "diagnosticoEs": "El diagnostico se basa en la historia clinica compatible (episodios recurrentes de sibilancias, tos y disnea) junto con pruebas de funcion pulmonar. La espirometria con prueba broncodilatadora es el estandar oro: se demuestra obstruccion (FEV1/FVC reducido) con reversibilidad significativa (aumento del FEV1 mayor o igual a 12% y 200 mL tras broncodilatador). El flujo espiratorio maximo (PEF) con medidor portatil permite monitoreo domiciliario; una variabilidad diurna mayor al 20% es sugestiva. La prueba de provocacion bronquial con metacolina se usa cuando la espirometria es normal pero hay sospecha clinica alta. Complementariamente se realizan pruebas de alergia (IgE total, IgE especificas, prick test), recuento de eosinofilos en sangre y esputo, y oxido nitrico exhalado fraccionado (FeNO) para evaluar inflamacion eosinofilica.",
    "diagnosticoEn": "Diagnosis is based on a compatible clinical history (recurrent episodes of wheezing, cough, and dyspnea) along with pulmonary function tests. Spirometry with bronchodilator testing is the gold standard: obstruction (reduced FEV1/FVC) with significant reversibility (FEV1 increase of 12% or more and 200 mL after bronchodilator) is demonstrated. Peak expiratory flow (PEF) with a portable meter allows home monitoring; diurnal variability greater than 20% is suggestive. Bronchial provocation testing with methacholine is used when spirometry is normal but clinical suspicion is high. Complementary tests include allergy testing (total IgE, specific IgE, skin prick test), blood and sputum eosinophil counts, and fractional exhaled nitric oxide (FeNO) to evaluate eosinophilic inflammation.",
    "tratamientoEs": "El tratamiento sigue un enfoque escalonado segun la severidad. Paso 1 (intermitente): corticoide inhalado a dosis baja mas formoterol a demanda (estrategia MART preferida por GINA) o salbutamol de rescate. Paso 2 (leve persistente): corticoide inhalado a dosis baja diario (budesonida 200-400 mcg/dia o equivalente). Paso 3 (moderada): corticoide inhalado a dosis baja mas agonista beta-2 de accion prolongada (LABA) como formoterol o salmeterol. Paso 4 (moderada-severa): corticoide inhalado a dosis media-alta mas LABA, considerar agregar tiotropio o montelukast. Paso 5 (severa): todo lo anterior mas biologicos (omalizumab anti-IgE, mepolizumab/benralizumab anti-IL5, dupilumab anti-IL4/IL13) segun fenotipo. La educacion del paciente en tecnica inhalatoria, plan de accion escrito, evitacion de desencadenantes y automanejo son pilares fundamentales. En crisis aguda: salbutamol nebulizado repetido, corticoides sistemicos (prednisona), oxigeno y en casos severos sulfato de magnesio intravenoso.",
    "tratamientoEn": "Treatment follows a stepwise approach according to severity. Step 1 (intermittent): low-dose inhaled corticosteroid plus formoterol as needed (MART strategy preferred by GINA) or rescue salbutamol. Step 2 (mild persistent): daily low-dose inhaled corticosteroid (budesonide 200-400 mcg/day or equivalent). Step 3 (moderate): low-dose inhaled corticosteroid plus long-acting beta-2 agonist (LABA) such as formoterol or salmeterol. Step 4 (moderate-severe): medium-to-high dose inhaled corticosteroid plus LABA, consider adding tiotropium or montelukast. Step 5 (severe): all of the above plus biologics (omalizumab anti-IgE, mepolizumab/benralizumab anti-IL5, dupilumab anti-IL4/IL13) according to phenotype. Patient education in inhaler technique, written action plan, trigger avoidance, and self-management are fundamental pillars. In acute crisis: repeated nebulized salbutamol, systemic corticosteroids (prednisone), oxygen, and in severe cases intravenous magnesium sulfate.",
    "prevencionEs": "La prevencion primaria incluye evitar la exposicion al humo de tabaco durante el embarazo y la infancia, fomentar la lactancia materna exclusiva durante al menos 6 meses, y mantener ambientes interiores libres de humedad y moho. La prevencion secundaria en pacientes diagnosticados se centra en evitar desencadenantes conocidos (alergenos, irritantes, aire frio), usar fundas antiacaros en colchones y almohadas, mantener la humedad interior por debajo del 50%, vacunarse anualmente contra la influenza y neumonianeumococica, realizar ejercicio regular con calentamiento previo adecuado, mantener un peso saludable, y adherirse al tratamiento controlador diario. Un plan de accion escrito personalizado reduce las visitas a urgencias y las hospitalizaciones.",
    "prevencionEn": "Primary prevention includes avoiding tobacco smoke exposure during pregnancy and childhood, encouraging exclusive breastfeeding for at least 6 months, and maintaining indoor environments free of moisture and mold. Secondary prevention in diagnosed patients focuses on avoiding known triggers (allergens, irritants, cold air), using dust mite-proof covers on mattresses and pillows, keeping indoor humidity below 50%, receiving annual influenza and pneumococcal vaccinations, performing regular exercise with adequate warm-up, maintaining a healthy weight, and adhering to daily controller treatment. A personalized written action plan reduces emergency visits and hospitalizations.",
    "complicacionesEs": [
      "Status asmaticus (crisis severa que no responde al tratamiento inicial)",
      "Remodelacion de las vias aereas con obstruccion fija irreversible",
      "Neumotorax durante crisis severas",
      "Insuficiencia respiratoria aguda que requiere ventilacion mecanica",
      "Efectos secundarios de corticoides sistemicos cronicos (osteoporosis, diabetes, cataratas)",
      "Impacto psicologico: ansiedad, depresion y limitacion de actividades",
      "Asma fatal: aproximadamente 250,000 muertes anuales en el mundo"
    ],
    "complicacionesEn": [
      "Status asthmaticus (severe crisis not responding to initial treatment)",
      "Airway remodeling with fixed irreversible obstruction",
      "Pneumothorax during severe crises",
      "Acute respiratory failure requiring mechanical ventilation",
      "Side effects of chronic systemic corticosteroids (osteoporosis, diabetes, cataracts)",
      "Psychological impact: anxiety, depression, and activity limitation",
      "Fatal asthma: approximately 250,000 annual deaths worldwide"
    ],
    "cuandoConsultarEs": "Busque atencion medica urgente si presenta dificultad para respirar severa que no mejora con el inhalador de rescate despues de 3 aplicaciones, si no puede completar frases por la falta de aire, si los labios o unas se tornan azulados (cianosis), si el PEF cae por debajo del 50% de su mejor valor personal, o si presenta somnolencia o confusion durante una crisis. Consulte a su medico si necesita usar el inhalador de rescate mas de 2 veces por semana, si despierta por sintomas nocturnos mas de 2 veces al mes, si ha necesido corticoides orales mas de 2 veces en el ultimo ano, o si sus actividades diarias estan siendo limitadas por el asma.",
    "cuandoConsultarEn": "Seek urgent medical attention if you experience severe difficulty breathing that does not improve with the rescue inhaler after 3 applications, if you cannot complete sentences due to shortness of breath, if your lips or nails turn bluish (cyanosis), if your PEF falls below 50% of your personal best, or if you experience drowsiness or confusion during a crisis. Consult your doctor if you need to use your rescue inhaler more than 2 times per week, if you wake up from nighttime symptoms more than 2 times per month, if you have needed oral corticosteroids more than 2 times in the last year, or if your daily activities are being limited by asthma."
  },
  {
    "id": "epoc",
    "nombreEs": "Enfermedad Pulmonar Obstructiva Cronica (EPOC)",
    "nombreEn": "Chronic Obstructive Pulmonary Disease (COPD)",
    "categoriaEs": "Obstructiva",
    "categoriaEn": "Obstructive",
    "descripcionEs": "La EPOC es una enfermedad pulmonar cronica y progresiva caracterizada por la limitacion persistente del flujo aereo que generalmente es progresiva y no completamente reversible. Incluye dos fenotipos principales: el enfisema (destruccion de los alveolos pulmonares con atrapamiento de aire) y la bronquitis cronica (inflamacion cronica de los bronquios con produccion excesiva de moco). Es la tercera causa de muerte a nivel mundial segun la OMS y representa una enorme carga de morbilidad y discapacidad. El tabaquismo es responsable del 80-90% de los casos, pero la exposicion a humo de biomasa (lena, carbon) es una causa importante en paises en desarrollo, especialmente en mujeres.",
    "descripcionEn": "COPD is a chronic and progressive lung disease characterized by persistent airflow limitation that is generally progressive and not fully reversible. It includes two main phenotypes: emphysema (destruction of lung alveoli with air trapping) and chronic bronchitis (chronic inflammation of the bronchi with excessive mucus production). It is the third leading cause of death worldwide according to the WHO and represents an enormous burden of morbidity and disability. Smoking is responsible for 80-90% of cases, but biomass smoke exposure (wood, coal) is an important cause in developing countries, especially in women.",
    "sintomasEs": [
      "Disnea progresiva (inicialmente con esfuerzo, luego en reposo)",
      "Tos cronica productiva con expectoracion mucopurulenta",
      "Sibilancias y opresion toracica",
      "Fatiga cronica y disminucion de la tolerancia al ejercicio",
      "Perdida de peso involuntaria en estadios avanzados (caquexia)",
      "Torax en barril (hiperinsuflacion) en enfisema avanzado",
      "Cianosis periferica en enfermedad severa",
      "Edema de miembros inferiores (cor pulmonale)"
    ],
    "sintomasEn": [
      "Progressive dyspnea (initially with exertion, later at rest)",
      "Chronic productive cough with mucopurulent sputum",
      "Wheezing and chest tightness",
      "Chronic fatigue and decreased exercise tolerance",
      "Unintentional weight loss in advanced stages (cachexia)",
      "Barrel chest (hyperinflation) in advanced emphysema",
      "Peripheral cyanosis in severe disease",
      "Lower extremity edema (cor pulmonale)"
    ],
    "causasEs": "La causa principal es el tabaquismo, responsable del 80-90% de los casos. El humo del tabaco provoca inflamacion cronica, destruccion del parenquima pulmonar y fibrosis de las vias aereas pequenas. Otras causas incluyen exposicion prolongada al humo de biomasa (lena, carbon, estiercol) usado para cocinar en paises en desarrollo, exposicion ocupacional a polvos organicos e inorganicos, gases y vapores quimicos, contaminacion ambiental del aire, y la deficiencia genetica de alfa-1 antitripsina (responsable del 1-5% de los casos, causa enfisema en personas jovenes no fumadoras). El desarrollo pulmonar deficiente en la infancia por desnutricion, infecciones repetidas o prematuridad tambien predispone a EPOC en la vida adulta.",
    "causasEn": "The main cause is smoking, responsible for 80-90% of cases. Tobacco smoke causes chronic inflammation, destruction of lung parenchyma, and fibrosis of small airways. Other causes include prolonged exposure to biomass smoke (wood, coal, dung) used for cooking in developing countries, occupational exposure to organic and inorganic dusts, gases and chemical vapors, ambient air pollution, and genetic alpha-1 antitrypsin deficiency (responsible for 1-5% of cases, causes emphysema in young non-smokers). Deficient lung development in childhood due to malnutrition, repeated infections, or prematurity also predisposes to COPD in adult life.",
    "diagnosticoEs": "El diagnostico requiere espirometria post-broncodilatador que demuestre una relacion FEV1/FVC menor a 0.70 persistente. La clasificacion de severidad de la obstruccion segun GOLD se basa en el FEV1 post-broncodilatador: GOLD 1 (leve) FEV1 mayor o igual a 80%, GOLD 2 (moderada) 50-79%, GOLD 3 (severa) 30-49%, GOLD 4 (muy severa) menor a 30%. La evaluacion combinada GOLD ABE integra sintomas (cuestionarios CAT o mMRC), exacerbaciones previas y FEV1. La radiografia de torax muestra hiperinsuflacion y aplanamiento diafragmatico. La TAC de torax es mas sensible para detectar enfisema y bronquiectasias. Se deben realizar gasometria arterial en enfermedad moderada-severa, niveles de alfa-1 antitripsina (al menos una vez), y recuento de eosinofilos en sangre para guiar el tratamiento con corticoides inhalados.",
    "diagnosticoEn": "Diagnosis requires post-bronchodilator spirometry demonstrating a persistent FEV1/FVC ratio less than 0.70. Obstruction severity classification according to GOLD is based on post-bronchodilator FEV1: GOLD 1 (mild) FEV1 80% or greater, GOLD 2 (moderate) 50-79%, GOLD 3 (severe) 30-49%, GOLD 4 (very severe) less than 30%. The combined GOLD ABE assessment integrates symptoms (CAT or mMRC questionnaires), previous exacerbations, and FEV1. Chest X-ray shows hyperinflation and diaphragmatic flattening. Chest CT is more sensitive for detecting emphysema and bronchiectasis. Arterial blood gases should be performed in moderate-severe disease, alpha-1 antitrypsin levels (at least once), and blood eosinophil count to guide inhaled corticosteroid treatment.",
    "tratamientoEs": "El cese del tabaquismo es la intervencion mas importante y la unica que modifica la progresion de la enfermedad; se debe ofrecer terapia de reemplazo de nicotina, vareniclina o bupropion. El tratamiento farmacologico escalonado incluye: Grupo A (pocos sintomas, pocas exacerbaciones): broncodilatador de accion corta a demanda. Grupo B (mas sintomas): broncodilatador de accion prolongada (LABA como formoterol/indacaterol o LAMA como tiotropio/umeclidinio). Grupo E (exacerbaciones frecuentes): LABA mas LAMA; si eosinofilos en sangre mayor o igual a 300, considerar triple terapia (LABA + LAMA + corticoide inhalado). Los tratamientos no farmacologicos son fundamentales: rehabilitacion pulmonar (ejercicio supervisado, educacion), oxigenoterapia domiciliaria si PaO2 menor a 55 mmHg, vacunacion anual contra influenza y neumococo, y en casos seleccionados cirugia de reduccion de volumen pulmonar o trasplante. Las exacerbaciones se tratan con broncodilatadores de accion corta, corticoides sistemicos por 5 dias y antibioticos si hay cambio en la purulencia del esputo.",
    "tratamientoEn": "Smoking cessation is the most important intervention and the only one that modifies disease progression; nicotine replacement therapy, varenicline, or bupropion should be offered. Stepwise pharmacological treatment includes: Group A (few symptoms, few exacerbations): short-acting bronchodilator as needed. Group B (more symptoms): long-acting bronchodilator (LABA such as formoterol/indacaterol or LAMA such as tiotropium/umeclidinium). Group E (frequent exacerbations): LABA plus LAMA; if blood eosinophils 300 or greater, consider triple therapy (LABA + LAMA + inhaled corticosteroid). Non-pharmacological treatments are fundamental: pulmonary rehabilitation (supervised exercise, education), home oxygen therapy if PaO2 less than 55 mmHg, annual influenza and pneumococcal vaccination, and in selected cases lung volume reduction surgery or transplant. Exacerbations are treated with short-acting bronchodilators, systemic corticosteroids for 5 days, and antibiotics if there is a change in sputum purulence.",
    "prevencionEs": "La prevencion primaria mas efectiva es no fumar nunca y evitar la exposicion al humo de tabaco ambiental. En entornos donde se usa biomasa para cocinar, la implementacion de estufas mejoradas con ventilacion adecuada reduce significativamente el riesgo. La proteccion respiratoria ocupacional adecuada con mascarillas certificadas es esencial en trabajadores expuestos a polvos y vapores. La deteccion temprana mediante espirometria en fumadores mayores de 40 anos permite intervenciones oportunas. La vacunacion contra influenza y neumococo reduce las exacerbaciones infecciosas. La rehabilitacion pulmonar precoz mejora la capacidad funcional y reduce hospitalizaciones. La reduccion de la contaminacion del aire ambiental es una estrategia de salud publica crucial.",
    "prevencionEn": "The most effective primary prevention is never smoking and avoiding environmental tobacco smoke exposure. In settings where biomass is used for cooking, implementation of improved stoves with adequate ventilation significantly reduces risk. Adequate occupational respiratory protection with certified masks is essential for workers exposed to dusts and vapors. Early detection through spirometry in smokers over 40 years allows timely interventions. Influenza and pneumococcal vaccination reduces infectious exacerbations. Early pulmonary rehabilitation improves functional capacity and reduces hospitalizations. Reduction of ambient air pollution is a crucial public health strategy.",
    "complicacionesEs": [
      "Exacerbaciones agudas frecuentes con hospitalizaciones repetidas",
      "Cor pulmonale (insuficiencia cardiaca derecha por hipertension pulmonar)",
      "Insuficiencia respiratoria cronica que requiere oxigeno domiciliario",
      "Neumotorax espontaneo (especialmente en enfisema bulloso)",
      "Cancer de pulmon (riesgo 2-5 veces mayor que en fumadores sin EPOC)",
      "Depresion y ansiedad (prevalencia del 40% en EPOC severa)",
      "Desnutricion y sarcopenia (perdida de masa muscular)",
      "Osteoporosis y fracturas vertebrales"
    ],
    "complicacionesEn": [
      "Frequent acute exacerbations with repeated hospitalizations",
      "Cor pulmonale (right heart failure from pulmonary hypertension)",
      "Chronic respiratory failure requiring home oxygen",
      "Spontaneous pneumothorax (especially in bullous emphysema)",
      "Lung cancer (2-5 times higher risk than in smokers without COPD)",
      "Depression and anxiety (40% prevalence in severe COPD)",
      "Malnutrition and sarcopenia (muscle mass loss)",
      "Osteoporosis and vertebral fractures"
    ],
    "cuandoConsultarEs": "Busque atencion medica urgente si presenta dificultad para respirar severa que empeora rapidamente, si no puede hablar frases completas por la disnea, si presenta confusion o somnolencia excesiva, si nota coloracion azulada de labios o dedos, o si tiene fiebre alta con aumento significativo de la expectoracion. Consulte a su medico si nota un aumento en la frecuencia o severidad de las exacerbaciones, si su medicacion habitual ya no le alivia los sintomas, si esta perdiendo peso sin proponerselo, si tiene hinchazon persistente en los tobillos, o si su necesidad de oxigeno esta aumentando.",
    "cuandoConsultarEn": "Seek urgent medical attention if you experience severe difficulty breathing that worsens rapidly, if you cannot speak complete sentences due to dyspnea, if you experience confusion or excessive drowsiness, if you notice bluish discoloration of lips or fingers, or if you have high fever with significant increase in sputum. Consult your doctor if you notice an increase in the frequency or severity of exacerbations, if your usual medication no longer relieves symptoms, if you are losing weight without trying, if you have persistent ankle swelling, or if your oxygen needs are increasing."
  },
  {
    "id": "neumonia-adquirida",
    "nombreEs": "Neumonia Adquirida en la Comunidad",
    "nombreEn": "Community-Acquired Pneumonia",
    "categoriaEs": "Infecciosa",
    "categoriaEn": "Infectious",
    "descripcionEs": "La neumonia adquirida en la comunidad (NAC) es una infeccion aguda del parenquima pulmonar que se adquiere fuera del ambiente hospitalario. Se manifiesta con infiltrados pulmonares nuevos en la radiografia de torax junto con sintomas respiratorios y signos de infeccion. Streptococcus pneumoniae (neumococo) sigue siendo el agente etiologico mas frecuente, aunque virus como SARS-CoV-2 e influenza son causas comunes. La NAC es la principal causa infecciosa de muerte a nivel mundial y la primera causa de hospitalizacion por enfermedad infecciosa en adultos. La mortalidad varia del 1% en pacientes ambulatorios hasta mas del 30% en quienes requieren cuidados intensivos.",
    "descripcionEn": "Community-acquired pneumonia (CAP) is an acute infection of the lung parenchyma acquired outside the hospital setting. It presents with new pulmonary infiltrates on chest X-ray along with respiratory symptoms and signs of infection. Streptococcus pneumoniae (pneumococcus) remains the most frequent etiologic agent, although viruses such as SARS-CoV-2 and influenza are common causes. CAP is the leading infectious cause of death worldwide and the primary cause of hospitalization for infectious disease in adults. Mortality ranges from 1% in outpatients to over 30% in those requiring intensive care.",
    "sintomasEs": [
      "Fiebre alta (mayor a 38.5 grados C) con escalofrios y sudoracion",
      "Tos productiva con expectoracion purulenta o herrumbrosa",
      "Dolor toracico pleuritico (punzante que empeora al respirar profundo o toser)",
      "Disnea o dificultad para respirar progresiva",
      "Taquipnea (frecuencia respiratoria mayor a 20 por minuto)",
      "Malestar general, fatiga intensa y mialgias",
      "En ancianos: confusion mental aguda sin fiebre prominente",
      "Crepitantes (estertores) a la auscultacion pulmonar"
    ],
    "sintomasEn": [
      "High fever (greater than 38.5 degrees C) with chills and sweating",
      "Productive cough with purulent or rusty sputum",
      "Pleuritic chest pain (sharp, worsening with deep breathing or coughing)",
      "Progressive dyspnea or difficulty breathing",
      "Tachypnea (respiratory rate greater than 20 per minute)",
      "General malaise, intense fatigue, and myalgias",
      "In elderly: acute mental confusion without prominent fever",
      "Crackles (rales) on pulmonary auscultation"
    ],
    "causasEs": "Los microorganismos alcanzan el pulmon por aspiracion de secreciones orofaringeas (mecanismo mas comun), inhalacion de aerosoles infectados o, raramente, por diseminacion hematogena. Los agentes causales mas frecuentes son: Streptococcus pneumoniae (30-40% de casos tipicos), Mycoplasma pneumoniae y Chlamydophila pneumoniae (20-30%, neumonias atipicas frecuentes en jovenes), Haemophilus influenzae (especialmente en EPOC), virus respiratorios (influenza, SARS-CoV-2, VSR, adenovirus), y Legionella pneumophila (asociada a torres de refrigeracion y viajes). Los factores de riesgo incluyen edad mayor a 65 anos, tabaquismo, alcoholismo, enfermedades cronicas (EPOC, diabetes, insuficiencia cardiaca), inmunosupresion, y mala higiene dental.",
    "causasEn": "Microorganisms reach the lung through aspiration of oropharyngeal secretions (most common mechanism), inhalation of infected aerosols, or rarely through hematogenous spread. The most frequent causative agents are: Streptococcus pneumoniae (30-40% of typical cases), Mycoplasma pneumoniae and Chlamydophila pneumoniae (20-30%, atypical pneumonias common in young adults), Haemophilus influenzae (especially in COPD), respiratory viruses (influenza, SARS-CoV-2, RSV, adenovirus), and Legionella pneumophila (associated with cooling towers and travel). Risk factors include age over 65, smoking, alcoholism, chronic diseases (COPD, diabetes, heart failure), immunosuppression, and poor dental hygiene.",
    "diagnosticoEs": "El diagnostico se basa en la presentacion clinica compatible mas un infiltrado nuevo en la radiografia de torax (consolidacion lobar, broncograma aereo o infiltrados parcheados). La evaluacion de severidad es crucial: el indice CURB-65 (Confusion, Urea elevada, frecuencia Respiratoria mayor o igual a 30, presion arterial Baja, edad mayor o igual a 65) guia la decision de hospitalizacion (0-1 ambulatorio, 2 hospitalizar, 3-5 considerar UCI). Los estudios complementarios incluyen: hemograma completo, PCR y procalcitonina (marcadores inflamatorios), hemocultivos (antes de antibioticos), antigeno urinario de neumococo y Legionella, tincion de Gram y cultivo de esputo, y panel viral respiratorio por PCR. La TAC de torax se reserva para casos complicados o cuando la radiografia es dudosa.",
    "diagnosticoEn": "Diagnosis is based on a compatible clinical presentation plus a new infiltrate on chest X-ray (lobar consolidation, air bronchogram, or patchy infiltrates). Severity assessment is crucial: the CURB-65 index (Confusion, elevated Urea, Respiratory rate 30 or greater, low Blood pressure, age 65 or greater) guides the hospitalization decision (0-1 outpatient, 2 hospitalize, 3-5 consider ICU). Complementary studies include: complete blood count, CRP and procalcitonin (inflammatory markers), blood cultures (before antibiotics), urinary pneumococcal and Legionella antigen, Gram stain and sputum culture, and respiratory viral panel by PCR. Chest CT is reserved for complicated cases or when X-ray is equivocal.",
    "tratamientoEs": "El tratamiento empirico depende de la severidad y factores de riesgo. Paciente ambulatorio sin comorbilidades: amoxicilina 1g cada 8 horas por 5-7 dias, o azitromicina 500mg dia 1 seguido de 250mg dias 2-5 si hay alergia a penicilina. Paciente ambulatorio con comorbilidades: amoxicilina-clavulanico mas azitromicina, o fluoroquinolona respiratoria (levofloxacino o moxifloxacino). Paciente hospitalizado en sala general: cefalosporina de tercera generacion (ceftriaxona 1-2g IV diario) mas macrolido (azitromicina 500mg IV diario). Paciente en UCI: cefalosporina de tercera generacion mas macrolido o fluoroquinolona; si se sospecha Pseudomonas, usar piperacilina-tazobactam o meropenem. La duracion del tratamiento es 5-7 dias en la mayoria de los casos, guiada por la estabilidad clinica. Se debe iniciar antibiotico dentro de las primeras 4 horas del diagnostico. Medidas de soporte: oxigeno suplementario para mantener saturacion mayor a 92%, hidratacion adecuada, y analgesia para el dolor pleuritico.",
    "tratamientoEn": "Empirical treatment depends on severity and risk factors. Outpatient without comorbidities: amoxicillin 1g every 8 hours for 5-7 days, or azithromycin 500mg day 1 followed by 250mg days 2-5 if penicillin allergic. Outpatient with comorbidities: amoxicillin-clavulanate plus azithromycin, or respiratory fluoroquinolone (levofloxacin or moxifloxacin). Hospitalized patient in general ward: third-generation cephalosporin (ceftriaxone 1-2g IV daily) plus macrolide (azithromycin 500mg IV daily). ICU patient: third-generation cephalosporin plus macrolide or fluoroquinolone; if Pseudomonas is suspected, use piperacillin-tazobactam or meropenem. Treatment duration is 5-7 days in most cases, guided by clinical stability. Antibiotics should be started within the first 4 hours of diagnosis. Supportive measures: supplemental oxygen to maintain saturation above 92%, adequate hydration, and analgesia for pleuritic pain.",
    "prevencionEs": "La vacunacion es la estrategia preventiva mas importante. La vacuna antineumococica conjugada (PCV15 o PCV20) se recomienda para todos los adultos mayores de 65 anos y para adultos de 19-64 anos con condiciones de riesgo (enfermedad pulmonar cronica, diabetes, enfermedad cardiaca, tabaquismo, alcoholismo, inmunosupresion). La vacunacion anual contra la influenza reduce las neumonias virales y las sobreinfecciones bacterianas. La vacunacion contra COVID-19 reduce significativamente las neumonias graves por SARS-CoV-2. Otras medidas incluyen el cese del tabaquismo, buena higiene dental y oral, lavado frecuente de manos, evitar contacto cercano con personas enfermas, y el manejo adecuado de enfermedades cronicas subyacentes.",
    "prevencionEn": "Vaccination is the most important preventive strategy. Pneumococcal conjugate vaccine (PCV15 or PCV20) is recommended for all adults over 65 years and for adults 19-64 years with risk conditions (chronic lung disease, diabetes, heart disease, smoking, alcoholism, immunosuppression). Annual influenza vaccination reduces viral pneumonias and bacterial superinfections. COVID-19 vaccination significantly reduces severe SARS-CoV-2 pneumonias. Other measures include smoking cessation, good dental and oral hygiene, frequent handwashing, avoiding close contact with sick individuals, and adequate management of underlying chronic diseases.",
    "complicacionesEs": [
      "Derrame pleural paraneumonico y empiema (acumulacion de pus en el espacio pleural)",
      "Absceso pulmonar (cavidad llena de pus dentro del pulmon)",
      "Sepsis y shock septico con falla multiorganica",
      "Sindrome de dificultad respiratoria aguda (SDRA)",
      "Insuficiencia respiratoria aguda que requiere ventilacion mecanica",
      "Neumonia necrotizante con destruccion del tejido pulmonar",
      "Complicaciones cardiovasculares (arritmias, infarto, insuficiencia cardiaca)"
    ],
    "complicacionesEn": [
      "Parapneumonic pleural effusion and empyema (pus accumulation in pleural space)",
      "Lung abscess (pus-filled cavity within the lung)",
      "Sepsis and septic shock with multiorgan failure",
      "Acute respiratory distress syndrome (ARDS)",
      "Acute respiratory failure requiring mechanical ventilation",
      "Necrotizing pneumonia with lung tissue destruction",
      "Cardiovascular complications (arrhythmias, infarction, heart failure)"
    ],
    "cuandoConsultarEs": "Busque atencion medica urgente si presenta fiebre alta persistente mayor a 39 grados C que no cede con antipireticos, dificultad para respirar significativa o empeoramiento progresivo, dolor toracico intenso, confusion o desorientacion, incapacidad para mantener la hidratacion oral, o si pertenece a un grupo de riesgo (mayor de 65 anos, enfermedad cronica, inmunosupresion). Regrese al medico si tras 48-72 horas de tratamiento antibiotico no hay mejoria o hay empeoramiento, si aparece expectoracion con sangre, o si los sintomas regresan despues de una mejoria inicial.",
    "cuandoConsultarEn": "Seek urgent medical attention if you have persistent high fever above 39 degrees C not responding to antipyretics, significant or progressively worsening difficulty breathing, intense chest pain, confusion or disorientation, inability to maintain oral hydration, or if you belong to a risk group (over 65, chronic disease, immunosuppression). Return to the doctor if after 48-72 hours of antibiotic treatment there is no improvement or worsening occurs, if bloody sputum appears, or if symptoms return after initial improvement."
  },
  {
    "id": "embolia-pulmonar",
    "nombreEs": "Embolia Pulmonar",
    "nombreEn": "Pulmonary Embolism",
    "categoriaEs": "Vascular",
    "categoriaEn": "Vascular",
    "descripcionEs": "La embolia pulmonar (EP) es la obstruccion aguda de una o mas arterias pulmonares por un trombo que generalmente se origina en las venas profundas de las extremidades inferiores (trombosis venosa profunda). Es la tercera causa de muerte cardiovascular despues del infarto y el accidente cerebrovascular. La EP forma parte del espectro de la enfermedad tromboembolica venosa (ETV) y su gravedad varia desde embolias subsegmentarias asintomaticas hasta embolias masivas que causan shock cardiogenico y muerte subita. Se estima que muchos casos no se diagnostican, lo que contribuye a una mortalidad significativa que podria prevenirse con diagnostico y tratamiento oportuno.",
    "descripcionEn": "Pulmonary embolism (PE) is the acute obstruction of one or more pulmonary arteries by a thrombus that usually originates in the deep veins of the lower extremities (deep vein thrombosis). It is the third leading cardiovascular cause of death after myocardial infarction and stroke. PE is part of the venous thromboembolism (VTE) spectrum, and its severity ranges from asymptomatic subsegmental emboli to massive emboli causing cardiogenic shock and sudden death. Many cases are estimated to go undiagnosed, contributing to significant mortality that could be prevented with timely diagnosis and treatment.",
    "sintomasEs": [
      "Disnea subita e inexplicable (sintoma mas comun, presente en el 80%)",
      "Dolor toracico pleuritico agudo que empeora con la inspiracion",
      "Taquicardia (frecuencia cardiaca mayor a 100 latidos por minuto)",
      "Hemoptisis (tos con sangre) en infartos pulmonares",
      "Sincope o presincope (en EP masiva)",
      "Hipotension arterial y shock (en EP masiva con compromiso hemodinamico)",
      "Dolor e hinchazon unilateral de la pierna (trombosis venosa profunda concomitante)",
      "Ansiedad y sensacion de muerte inminente"
    ],
    "sintomasEn": [
      "Sudden unexplained dyspnea (most common symptom, present in 80%)",
      "Acute pleuritic chest pain worsening with inspiration",
      "Tachycardia (heart rate greater than 100 beats per minute)",
      "Hemoptysis (coughing blood) in pulmonary infarctions",
      "Syncope or presyncope (in massive PE)",
      "Arterial hypotension and shock (in massive PE with hemodynamic compromise)",
      "Unilateral leg pain and swelling (concomitant deep vein thrombosis)",
      "Anxiety and feeling of impending doom"
    ],
    "causasEs": "La EP resulta de la triada de Virchow: estasis venosa, lesion endotelial e hipercoagulabilidad. Los factores de riesgo principales incluyen cirugia reciente (especialmente ortopedica de cadera o rodilla), inmovilizacion prolongada (hospitalizacion, viajes largos), cancer activo (especialmente pulmon, pancreas, ovario y cerebro), anticonceptivos orales y terapia hormonal con estrogenos, embarazo y puerperio, trombofilia hereditaria (factor V de Leiden, mutacion de protrombina G20210A, deficiencia de proteina C o S, sindrome antifosfolipido), obesidad, insuficiencia cardiaca, cateter venoso central, y antecedente personal de ETV previa. La trombosis venosa profunda proximal (por encima de la rodilla) es la fuente mas frecuente de embolos pulmonares.",
    "causasEn": "PE results from Virchow's triad: venous stasis, endothelial injury, and hypercoagulability. Major risk factors include recent surgery (especially hip or knee orthopedic), prolonged immobilization (hospitalization, long travel), active cancer (especially lung, pancreas, ovary, and brain), oral contraceptives and estrogen hormone therapy, pregnancy and postpartum, hereditary thrombophilia (Factor V Leiden, prothrombin G20210A mutation, protein C or S deficiency, antiphospholipid syndrome), obesity, heart failure, central venous catheter, and personal history of prior VTE. Proximal deep vein thrombosis (above the knee) is the most frequent source of pulmonary emboli.",
    "diagnosticoEs": "El enfoque diagnostico depende de la probabilidad clinica pre-test evaluada con la escala de Wells o Geneva revisada. Si la probabilidad es baja-intermedia, se solicita dimero-D (un resultado negativo con alta sensibilidad excluye EP). Si el dimero-D es positivo o la probabilidad clinica es alta, se realiza angiotomografia computarizada (angio-TAC) pulmonar, que es el estudio de imagen de primera eleccion con sensibilidad y especificidad mayores al 95%. El ecocardiograma es util en EP masiva con inestabilidad hemodinamica, mostrando dilatacion del ventriculo derecho. El ultrasonido Doppler venoso de miembros inferiores confirma TVP concomitante. La gammagrafia de ventilacion/perfusion es alternativa en pacientes con alergia al contraste o insuficiencia renal. Los marcadores de mal pronostico incluyen troponinas elevadas, BNP elevado, y disfuncion del ventriculo derecho.",
    "diagnosticoEn": "The diagnostic approach depends on pre-test clinical probability assessed with the Wells or revised Geneva score. If probability is low-intermediate, D-dimer is ordered (a negative result with high sensitivity excludes PE). If D-dimer is positive or clinical probability is high, computed tomography pulmonary angiography (CTPA) is performed, which is the first-choice imaging study with sensitivity and specificity greater than 95%. Echocardiography is useful in massive PE with hemodynamic instability, showing right ventricular dilation. Venous Doppler ultrasound of the lower extremities confirms concomitant DVT. Ventilation/perfusion lung scintigraphy is an alternative in patients with contrast allergy or renal insufficiency. Poor prognosis markers include elevated troponins, elevated BNP, and right ventricular dysfunction.",
    "tratamientoEs": "La anticoagulacion es el pilar del tratamiento. En EP no masiva se inicia heparina de bajo peso molecular (enoxaparina 1 mg/kg subcutanea cada 12 horas) o heparina no fraccionada IV, con transicion a anticoagulantes orales directos (DOACs: rivaroxaban o apixaban como primera linea, que permiten inicio directo sin heparina) o warfarina (con INR objetivo de 2-3). La duracion minima es 3 meses; se extiende indefinidamente si el riesgo de recurrencia es alto (ETV no provocada, cancer, trombofilia). En EP masiva con shock: tromboliticos sistemicos (alteplasa 100 mg IV en 2 horas) son el tratamiento de eleccion, junto con soporte hemodinamico. En EP masiva cuando la trombolisis falla o esta contraindicada: embolectomia quirurgica o intervencion percutanea dirigida por cateter. Los filtros de vena cava inferior se reservan para pacientes con contraindicacion absoluta para anticoagulacion o EP recurrente a pesar de anticoagulacion adecuada.",
    "tratamientoEn": "Anticoagulation is the cornerstone of treatment. In non-massive PE, low-molecular-weight heparin (enoxaparin 1 mg/kg subcutaneous every 12 hours) or IV unfractionated heparin is started, with transition to direct oral anticoagulants (DOACs: rivaroxaban or apixaban as first line, which allow direct initiation without heparin) or warfarin (target INR 2-3). Minimum duration is 3 months; it is extended indefinitely if recurrence risk is high (unprovoked VTE, cancer, thrombophilia). In massive PE with shock: systemic thrombolytics (alteplase 100 mg IV over 2 hours) are the treatment of choice, along with hemodynamic support. In massive PE when thrombolysis fails or is contraindicated: surgical embolectomy or catheter-directed percutaneous intervention. Inferior vena cava filters are reserved for patients with absolute contraindication to anticoagulation or recurrent PE despite adequate anticoagulation.",
    "prevencionEs": "La tromboprofilaxis es esencial en pacientes de riesgo. En pacientes quirurgicos de riesgo moderado-alto: heparina de bajo peso molecular profilactica (enoxaparina 40 mg subcutanea diaria) o compresion neumatica intermitente. En pacientes medicos hospitalizados con movilidad reducida: tromboprofilaxis farmacologica segun escala de riesgo (Padua). La deambulacion temprana postoperatoria es fundamental. En viajes largos (mayor a 4-6 horas): ejercicios de flexion plantar, hidratacion adecuada, evitar ropa ajustada, y medias de compresion graduada en personas de riesgo. La suspension oportuna de anticonceptivos orales antes de cirugias programadas reduce el riesgo. Pacientes con cancer activo en quimioterapia pueden requerir tromboprofilaxis ambulatoria con DOACs.",
    "prevencionEn": "Thromboprophylaxis is essential in at-risk patients. In moderate-to-high risk surgical patients: prophylactic low-molecular-weight heparin (enoxaparin 40 mg subcutaneous daily) or intermittent pneumatic compression. In hospitalized medical patients with reduced mobility: pharmacological thromboprophylaxis according to risk score (Padua). Early postoperative ambulation is fundamental. On long trips (greater than 4-6 hours): plantar flexion exercises, adequate hydration, avoid tight clothing, and graduated compression stockings in at-risk individuals. Timely discontinuation of oral contraceptives before scheduled surgeries reduces risk. Patients with active cancer on chemotherapy may require outpatient thromboprophylaxis with DOACs.",
    "complicacionesEs": [
      "Shock cardiogenico y muerte subita en EP masiva",
      "Hipertension pulmonar trombo-embolica cronica (HPTEC)",
      "Infarto pulmonar con necrosis del tejido",
      "Insuficiencia cardiaca derecha aguda",
      "Recurrencia de ETV a pesar del tratamiento",
      "Sangrado mayor por anticoagulacion (incidencia 1-3% anual)",
      "Sindrome post-trombotico en la pierna afectada"
    ],
    "complicacionesEn": [
      "Cardiogenic shock and sudden death in massive PE",
      "Chronic thromboembolic pulmonary hypertension (CTEPH)",
      "Pulmonary infarction with tissue necrosis",
      "Acute right heart failure",
      "VTE recurrence despite treatment",
      "Major bleeding from anticoagulation (1-3% annual incidence)",
      "Post-thrombotic syndrome in the affected leg"
    ],
    "cuandoConsultarEs": "La embolia pulmonar es una emergencia medica. Llame al servicio de emergencias (911) inmediatamente si presenta dificultad para respirar subita e inexplicable, dolor toracico agudo que empeora al respirar, desmayo o perdida de conciencia, o tos con sangre. Busque atencion medica urgente si tiene una pierna hinchada y dolorosa junto con dificultad respiratoria, si tiene factores de riesgo conocidos (cirugia reciente, inmovilizacion, cancer) y desarrolla disnea nueva, o si esta en tratamiento anticoagulante y presenta signos de sangrado mayor (sangre en orina, heces negras, sangrado que no se detiene).",
    "cuandoConsultarEn": "Pulmonary embolism is a medical emergency. Call emergency services (911) immediately if you experience sudden unexplained difficulty breathing, acute chest pain worsening with breathing, fainting or loss of consciousness, or coughing blood. Seek urgent medical attention if you have a swollen painful leg along with respiratory difficulty, if you have known risk factors (recent surgery, immobilization, cancer) and develop new dyspnea, or if you are on anticoagulant treatment and present signs of major bleeding (blood in urine, black stools, bleeding that does not stop)."
  },
  {
    "id": "tuberculosis-pulmonar",
    "nombreEs": "Tuberculosis Pulmonar",
    "nombreEn": "Pulmonary Tuberculosis",
    "categoriaEs": "Infecciosa",
    "categoriaEn": "Infectious",
    "descripcionEs": "La tuberculosis (TB) pulmonar es una enfermedad infecciosa causada por Mycobacterium tuberculosis que afecta principalmente los pulmones. Se transmite por via aerea a traves de goticulas de aerosol expulsadas por pacientes con TB pulmonar activa al toser, estornudar o hablar. Es una de las enfermedades infecciosas mas mortiferas del mundo, causando aproximadamente 1.3 millones de muertes anuales. Tras la infeccion inicial, la mayoria de las personas desarrollan TB latente (asintomatica y no contagiosa); solo el 5-10% progresa a TB activa durante su vida, pero este riesgo aumenta dramaticamente en personas con VIH, desnutricion o inmunosupresion. El diagnostico y tratamiento oportunos son cruciales tanto para el paciente como para la salud publica.",
    "descripcionEn": "Pulmonary tuberculosis (TB) is an infectious disease caused by Mycobacterium tuberculosis that primarily affects the lungs. It is transmitted through the air via aerosol droplets expelled by patients with active pulmonary TB when coughing, sneezing, or speaking. It is one of the deadliest infectious diseases in the world, causing approximately 1.3 million deaths annually. After initial infection, most people develop latent TB (asymptomatic and non-contagious); only 5-10% progress to active TB during their lifetime, but this risk increases dramatically in people with HIV, malnutrition, or immunosuppression. Timely diagnosis and treatment are crucial both for the patient and for public health.",
    "sintomasEs": [
      "Tos cronica persistente por mas de 2-3 semanas (signo cardinal)",
      "Hemoptisis (expectoracion con sangre o esputo hemoptoico)",
      "Fiebre vespertina de bajo grado con sudoracion nocturna profusa",
      "Perdida de peso involuntaria significativa y anorexia",
      "Fatiga cronica y malestar general progresivo",
      "Dolor toracico pleuritico (si hay compromiso pleural)",
      "Disnea progresiva en enfermedad avanzada o bilateral",
      "Adenopatias cervicales o supraclaviculares en algunas presentaciones"
    ],
    "sintomasEn": [
      "Chronic persistent cough for more than 2-3 weeks (cardinal sign)",
      "Hemoptysis (blood-tinged sputum or frank hemoptysis)",
      "Low-grade evening fever with profuse night sweats",
      "Significant unintentional weight loss and anorexia",
      "Chronic fatigue and progressive general malaise",
      "Pleuritic chest pain (if pleural involvement)",
      "Progressive dyspnea in advanced or bilateral disease",
      "Cervical or supraclavicular lymphadenopathy in some presentations"
    ],
    "causasEs": "El agente causal es Mycobacterium tuberculosis, un bacilo acido-alcohol resistente de crecimiento lento. La transmision ocurre exclusivamente por via aerea: una persona con TB pulmonar activa al toser genera goticulas microscropicas (1-5 micras) que permanecen suspendidas en el aire durante horas y pueden ser inhaladas por contactos cercanos. Los factores de riesgo para la infeccion incluyen contacto cercano y prolongado con un caso de TB activa, hacinamiento, y trabajo en instituciones cerradas (prisiones, albergues). Los factores de riesgo para progresar de TB latente a activa incluyen: infeccion por VIH (el mas importante, aumenta el riesgo 20-30 veces), desnutricion, diabetes mellitus, silicosis, insuficiencia renal cronica, tratamiento inmunosupresor (corticoides, anti-TNF), alcoholismo, tabaquismo, y edad extrema (ninos pequenos y ancianos).",
    "causasEn": "The causative agent is Mycobacterium tuberculosis, a slow-growing acid-fast bacillus. Transmission occurs exclusively through the airborne route: a person with active pulmonary TB when coughing generates microscopic droplets (1-5 microns) that remain suspended in the air for hours and can be inhaled by close contacts. Risk factors for infection include close and prolonged contact with an active TB case, overcrowding, and work in closed institutions (prisons, shelters). Risk factors for progressing from latent to active TB include: HIV infection (the most important, increases risk 20-30 fold), malnutrition, diabetes mellitus, silicosis, chronic renal failure, immunosuppressive treatment (corticosteroids, anti-TNF), alcoholism, smoking, and extreme age (young children and elderly).",
    "diagnosticoEs": "El diagnostico requiere un alto indice de sospecha clinica. La baciloscopia de esputo (tincion de Ziehl-Neelsen) con al menos 2-3 muestras de esputo matutino es el metodo mas accesible; detecta bacilos acido-alcohol resistentes pero tiene sensibilidad limitada (50-80%). El GeneXpert MTB/RIF (Xpert) es una prueba molecular rapida (resultados en 2 horas) que detecta M. tuberculosis y resistencia a rifampicina simultaneamente; es la prueba inicial recomendada por la OMS. El cultivo en medio de Lowenstein-Jensen o medio liquido (MGIT) es el estandar de oro, pero tarda 2-8 semanas. La radiografia de torax tipicamente muestra infiltrados en lobulos superiores, cavernas, y nodulos; patron miliar en TB diseminada. La prueba de tuberculina (PPD/Mantoux) y los ensayos de liberacion de interferon gamma (IGRA: QuantiFERON, T-SPOT) detectan TB latente pero no distinguen entre latente y activa. Las pruebas de sensibilidad a farmacos son esenciales para guiar el tratamiento.",
    "diagnosticoEn": "Diagnosis requires a high index of clinical suspicion. Sputum smear microscopy (Ziehl-Neelsen stain) with at least 2-3 early morning sputum samples is the most accessible method; it detects acid-fast bacilli but has limited sensitivity (50-80%). GeneXpert MTB/RIF (Xpert) is a rapid molecular test (results in 2 hours) that simultaneously detects M. tuberculosis and rifampicin resistance; it is the WHO-recommended initial test. Culture on Lowenstein-Jensen medium or liquid medium (MGIT) is the gold standard but takes 2-8 weeks. Chest X-ray typically shows upper lobe infiltrates, cavities, and nodules; miliary pattern in disseminated TB. Tuberculin skin test (PPD/Mantoux) and interferon-gamma release assays (IGRA: QuantiFERON, T-SPOT) detect latent TB but do not distinguish between latent and active. Drug susceptibility testing is essential to guide treatment.",
    "tratamientoEs": "El tratamiento estandar de TB pulmonar sensible consiste en dos fases: Fase intensiva (2 meses): cuatro farmacos diarios — isoniazida (H), rifampicina (R), pirazinamida (Z) y etambutol (E) — conocido como esquema HRZE. Fase de continuacion (4 meses): isoniazida mas rifampicina diarios (HR). La duracion total es 6 meses. El tratamiento debe ser supervisado (estrategia DOTS — Tratamiento Directamente Observado) para asegurar adherencia y prevenir resistencia. Se debe agregar piridoxina (vitamina B6) 25-50 mg diarios para prevenir neuropatia periferica por isoniazida. Los controles de esputo a los 2 y 5 meses evaluan la respuesta al tratamiento. Para TB multirresistente (MDR-TB, resistente a isoniazida y rifampicina) se utilizan esquemas prolongados (18-20 meses) con farmacos de segunda linea: bedaquilina, linezolid, fluoroquinolonas (levofloxacino, moxifloxacino), clofazimina. El tratamiento de TB latente con isoniazida por 9 meses o rifampicina por 4 meses reduce el riesgo de progresion a TB activa en contactos expuestos.",
    "tratamientoEn": "Standard treatment for drug-susceptible pulmonary TB consists of two phases: Intensive phase (2 months): four daily drugs — isoniazid (H), rifampicin (R), pyrazinamide (Z), and ethambutol (E) — known as the HRZE regimen. Continuation phase (4 months): daily isoniazid plus rifampicin (HR). Total duration is 6 months. Treatment must be supervised (DOTS strategy — Directly Observed Treatment) to ensure adherence and prevent resistance. Pyridoxine (vitamin B6) 25-50 mg daily should be added to prevent isoniazid peripheral neuropathy. Sputum checks at 2 and 5 months evaluate treatment response. For multidrug-resistant TB (MDR-TB, resistant to isoniazid and rifampicin), prolonged regimens (18-20 months) with second-line drugs are used: bedaquiline, linezolid, fluoroquinolones (levofloxacin, moxifloxacin), clofazimine. Treatment of latent TB with isoniazid for 9 months or rifampicin for 4 months reduces the risk of progression to active TB in exposed contacts.",
    "prevencionEs": "La vacuna BCG (Bacillus Calmette-Guerin) se administra al nacer en paises endemicos y protege contra formas severas de TB infantil (meningitis tuberculosa y TB miliar), aunque su eficacia contra TB pulmonar en adultos es variable (0-80%). La deteccion y tratamiento oportuno de casos activos es la medida mas importante para interrumpir la transmision. El estudio de contactos cercanos con prueba de tuberculina o IGRA y tratamiento de TB latente previene nuevos casos. Las medidas de control de infecciones incluyen: aislamiento respiratorio del paciente con TB sospechada o confirmada, uso de mascarillas N95 por el personal de salud, ventilacion adecuada de espacios cerrados, y luz ultravioleta germicida en areas de alto riesgo. El tamizaje de TB en personas con VIH y el tratamiento preventivo con isoniazida son componentes esenciales de la atencion del VIH.",
    "prevencionEn": "BCG vaccine (Bacillus Calmette-Guerin) is given at birth in endemic countries and protects against severe childhood TB forms (tuberculous meningitis and miliary TB), although its efficacy against adult pulmonary TB is variable (0-80%). Detection and timely treatment of active cases is the most important measure to interrupt transmission. Contact investigation of close contacts with tuberculin or IGRA testing and latent TB treatment prevents new cases. Infection control measures include: respiratory isolation of patients with suspected or confirmed TB, N95 mask use by healthcare workers, adequate ventilation of enclosed spaces, and germicidal ultraviolet light in high-risk areas. TB screening in people with HIV and preventive isoniazid treatment are essential components of HIV care.",
    "complicacionesEs": [
      "Hemoptisis masiva potencialmente mortal por erosion de vasos pulmonares",
      "Destruccion parenquimatosa extensa con fibrosis pulmonar residual",
      "TB miliar (diseminacion hematogena a multiples organos)",
      "Meningitis tuberculosa (complicacion extrapulmonar mas grave)",
      "Empiema tuberculoso y fistula broncopleural",
      "TB multirresistente (MDR-TB) y extensivamente resistente (XDR-TB)",
      "Aspergiloma (bola fungica) en cavernas residuales",
      "Estenosis bronquial y bronquiectasias post-tuberculosas"
    ],
    "complicacionesEn": [
      "Potentially fatal massive hemoptysis from pulmonary vessel erosion",
      "Extensive parenchymal destruction with residual pulmonary fibrosis",
      "Miliary TB (hematogenous dissemination to multiple organs)",
      "Tuberculous meningitis (most severe extrapulmonary complication)",
      "Tuberculous empyema and bronchopleural fistula",
      "Multidrug-resistant TB (MDR-TB) and extensively drug-resistant (XDR-TB)",
      "Aspergilloma (fungal ball) in residual cavities",
      "Bronchial stenosis and post-tuberculous bronchiectasis"
    ],
    "cuandoConsultarEs": "Consulte a un medico si tiene tos persistente por mas de 2-3 semanas sin otra causa evidente, especialmente si se acompana de fiebre, sudoracion nocturna y perdida de peso. Busque atencion urgente si presenta hemoptisis (sangre en el esputo), fiebre alta persistente, dificultad respiratoria severa, o dolor toracico intenso. Es especialmente importante buscar atencion inmediata si ha tenido contacto cercano con alguien diagnosticado con TB, si vive con VIH, si es inmunosuprimido, o si ha viajado recientemente a areas con alta incidencia de TB. Si esta en tratamiento para TB, consulte si presenta vision borrosa (etambutol), ictericia o dolor abdominal (hepatotoxicidad), o adormecimiento de manos y pies (neuropatia).",
    "cuandoConsultarEn": "Consult a doctor if you have a persistent cough for more than 2-3 weeks without another evident cause, especially if accompanied by fever, night sweats, and weight loss. Seek urgent attention if you present hemoptysis (blood in sputum), persistent high fever, severe breathing difficulty, or intense chest pain. It is especially important to seek immediate attention if you have had close contact with someone diagnosed with TB, if you live with HIV, if you are immunosuppressed, or if you have recently traveled to areas with high TB incidence. If you are on TB treatment, consult if you experience blurred vision (ethambutol), jaundice or abdominal pain (hepatotoxicity), or numbness in hands and feet (neuropathy)."
  },
  {
    "id": "cancer-pulmon",
    "nombreEs": "Cancer de Pulmon",
    "nombreEn": "Lung Cancer",
    "categoriaEs": "Oncologica",
    "categoriaEn": "Oncological",
    "descripcionEs": "El cancer de pulmon es el crecimiento descontrolado de celulas malignas en el tejido pulmonar. Es el cancer mas mortal del mundo, responsable de aproximadamente 1.8 millones de muertes anuales. Se clasifica en dos tipos principales: cancer de pulmon de celulas no pequenas (CPCNP, 85% de los casos) que incluye adenocarcinoma, carcinoma epidermoide y carcinoma de celulas grandes; y cancer de pulmon de celulas pequenas (CPCP, 15%) que es mas agresivo y con mayor tendencia a metastasis tempranas. El tabaquismo es la causa del 85% de los casos. La deteccion temprana con TAC de baja dosis en poblaciones de riesgo ha demostrado reducir la mortalidad, pero la mayoria de los casos se diagnostican en estadios avanzados cuando las opciones curativas son limitadas.",
    "descripcionEn": "Lung cancer is the uncontrolled growth of malignant cells in lung tissue. It is the deadliest cancer in the world, responsible for approximately 1.8 million deaths annually. It is classified into two main types: non-small cell lung cancer (NSCLC, 85% of cases) which includes adenocarcinoma, squamous cell carcinoma, and large cell carcinoma; and small cell lung cancer (SCLC, 15%) which is more aggressive with a greater tendency for early metastasis. Smoking is the cause of 85% of cases. Early detection with low-dose CT in at-risk populations has been shown to reduce mortality, but most cases are diagnosed at advanced stages when curative options are limited.",
    "sintomasEs": [
      "Tos persistente nueva o cambio en una tos cronica preexistente",
      "Hemoptisis (expectoracion con sangre, incluso en pequena cantidad)",
      "Disnea progresiva y dolor toracico persistente",
      "Ronquera por paralisis del nervio laringeo recurrente",
      "Perdida de peso involuntaria mayor al 5% del peso corporal",
      "Dolor oseo (metastasis oseas), cefalea persistente (metastasis cerebrales)",
      "Sindrome de vena cava superior (edema facial, ingurgitacion yugular)",
      "Sindrome de Pancoast (dolor en hombro y brazo por tumor del vertice pulmonar)",
      "Sindrome paraneoplasico: hipercalcemia, SIADH, sindrome de Cushing"
    ],
    "sintomasEn": [
      "New persistent cough or change in a pre-existing chronic cough",
      "Hemoptysis (blood-tinged sputum, even in small amounts)",
      "Progressive dyspnea and persistent chest pain",
      "Hoarseness from recurrent laryngeal nerve paralysis",
      "Unintentional weight loss greater than 5% of body weight",
      "Bone pain (bone metastases), persistent headache (brain metastases)",
      "Superior vena cava syndrome (facial edema, jugular distension)",
      "Pancoast syndrome (shoulder and arm pain from lung apex tumor)",
      "Paraneoplastic syndrome: hypercalcemia, SIADH, Cushing syndrome"
    ],
    "causasEs": "El tabaquismo es la causa principal, responsable del 85% de los canceres de pulmon. El riesgo depende de la duracion e intensidad del consumo y se cuantifica en paquetes-ano. Despues de dejar de fumar, el riesgo disminuye gradualmente pero nunca regresa completamente al de un no fumador. El tabaquismo pasivo (humo de segunda mano) aumenta el riesgo 20-30%. Otros factores incluyen exposicion al radon (segunda causa mas comun, un gas radioactivo natural del suelo), asbesto (efecto sinergico con tabaco), contaminacion del aire, exposicion ocupacional a arsenico, cromo, niquel y berilio, radioterapia toracica previa, fibrosis pulmonar, y predisposicion genetica. El adenocarcinoma es el tipo mas comun en no fumadores y se asocia con mutaciones conductoras (EGFR, ALK, ROS1, KRAS) que son blancos terapeuticos.",
    "causasEn": "Smoking is the main cause, responsible for 85% of lung cancers. Risk depends on duration and intensity of consumption and is quantified in pack-years. After quitting smoking, risk gradually decreases but never fully returns to that of a non-smoker. Passive smoking (secondhand smoke) increases risk by 20-30%. Other factors include radon exposure (second most common cause, a natural radioactive soil gas), asbestos (synergistic effect with tobacco), air pollution, occupational exposure to arsenic, chromium, nickel, and beryllium, prior thoracic radiation therapy, pulmonary fibrosis, and genetic predisposition. Adenocarcinoma is the most common type in non-smokers and is associated with driver mutations (EGFR, ALK, ROS1, KRAS) that are therapeutic targets.",
    "diagnosticoEs": "El tamizaje con TAC de baja dosis se recomienda anualmente en adultos de 50-80 anos con historial de tabaquismo de 20 o mas paquetes-ano (fumadores actuales o que dejaron en los ultimos 15 anos). Ante sospecha clinica, la TAC de torax con contraste es el estudio inicial. El diagnostico definitivo requiere confirmacion histologica mediante biopsia: broncoscopia con biopsia transbronquial (lesiones centrales), biopsia percutanea guiada por TAC (lesiones perifericas), mediastinoscopia o EBUS (ganglios mediastinicos), o biopsia quirurgica. El estudio molecular es esencial en adenocarcinoma avanzado para identificar mutaciones conductoras (EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK) y expresion de PD-L1. La estadificacion incluye TAC de torax-abdomen-pelvis, PET-CT, y RM cerebral. El sistema TNM determina el estadio (I-IV) y guia el tratamiento.",
    "diagnosticoEn": "Screening with low-dose CT is recommended annually for adults aged 50-80 with a smoking history of 20 or more pack-years (current smokers or those who quit within the past 15 years). With clinical suspicion, contrast-enhanced chest CT is the initial study. Definitive diagnosis requires histological confirmation by biopsy: bronchoscopy with transbronchial biopsy (central lesions), CT-guided percutaneous biopsy (peripheral lesions), mediastinoscopy or EBUS (mediastinal nodes), or surgical biopsy. Molecular testing is essential in advanced adenocarcinoma to identify driver mutations (EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK) and PD-L1 expression. Staging includes chest-abdomen-pelvis CT, PET-CT, and brain MRI. The TNM system determines stage (I-IV) and guides treatment.",
    "tratamientoEs": "El tratamiento depende del tipo histologico y estadio. CPCNP estadio I-II: cirugia (lobectomia con linfadenectomia mediastinica) es el tratamiento curativo; quimioterapia adyuvante con cisplatino en estadio II y IIIA seleccionado; osimertinib adyuvante si mutacion EGFR positiva. Estadio III: quimiorradioterapia concurrente seguida de durvalumab (inmunoterapia de consolidacion). Estadio IV: el tratamiento se guia por biomarcadores moleculares — terapias dirigidas para mutaciones conductoras (osimertinib para EGFR, alectinib/lorlatinib para ALK, sotorasib/adagrasib para KRAS G12C), inmunoterapia con inhibidores de checkpoint (pembrolizumab, nivolumab, atezolizumab) segun PD-L1, o quimioterapia basada en platino combinada con inmunoterapia. CPCP: quimioterapia con cisplatino/carboplatino mas etoposido con inmunoterapia (atezolizumab/durvalumab), radioterapia toracica concurrente en enfermedad limitada, y radioterapia craneal profilactica. Cuidados paliativos y manejo del dolor son componentes esenciales en enfermedad avanzada.",
    "tratamientoEn": "Treatment depends on histological type and stage. NSCLC stage I-II: surgery (lobectomy with mediastinal lymphadenectomy) is the curative treatment; adjuvant cisplatin-based chemotherapy in stage II and selected IIIA; adjuvant osimertinib if EGFR mutation positive. Stage III: concurrent chemoradiation followed by durvalumab (consolidation immunotherapy). Stage IV: treatment is guided by molecular biomarkers — targeted therapies for driver mutations (osimertinib for EGFR, alectinib/lorlatinib for ALK, sotorasib/adagrasib for KRAS G12C), checkpoint inhibitor immunotherapy (pembrolizumab, nivolumab, atezolizumab) based on PD-L1, or platinum-based chemotherapy combined with immunotherapy. SCLC: chemotherapy with cisplatin/carboplatin plus etoposide with immunotherapy (atezolizumab/durvalumab), concurrent thoracic radiation in limited disease, and prophylactic cranial irradiation. Palliative care and pain management are essential components in advanced disease.",
    "prevencionEs": "No fumar es la medida preventiva mas importante; evitar el tabaquismo previene el 85% de los canceres de pulmon. Los programas de cesacion tabaquica con farmacoterapia (vareniclina, terapia de reemplazo de nicotina, bupropion) y consejeria conductual deben ofrecerse activamente a todos los fumadores. Evitar la exposicion al humo de segunda mano. Realizar pruebas de radon en el hogar y mitigarlo si los niveles son elevados (mayor a 4 pCi/L). Cumplir con normas de proteccion ocupacional en industrias con exposicion a carcinogenos. Participar en programas de tamizaje con TAC de baja dosis si se cumplen los criterios de elegibilidad. Una dieta rica en frutas y verduras puede tener un efecto protector modesto. Reducir la exposicion a contaminantes ambientales.",
    "prevencionEn": "Not smoking is the most important preventive measure; avoiding tobacco prevents 85% of lung cancers. Smoking cessation programs with pharmacotherapy (varenicline, nicotine replacement therapy, bupropion) and behavioral counseling should be actively offered to all smokers. Avoid secondhand smoke exposure. Test for radon in the home and mitigate if levels are elevated (greater than 4 pCi/L). Comply with occupational protection standards in industries with carcinogen exposure. Participate in low-dose CT screening programs if eligibility criteria are met. A diet rich in fruits and vegetables may have a modest protective effect. Reduce exposure to environmental pollutants.",
    "complicacionesEs": [
      "Metastasis a cerebro (cefalea, convulsiones, deficit neurologico focal)",
      "Metastasis oseas (dolor, fracturas patologicas, hipercalcemia)",
      "Metastasis hepaticas y suprarrenales",
      "Derrame pleural maligno recurrente",
      "Sindrome de vena cava superior (obstruccion del retorno venoso)",
      "Hemoptisis masiva potencialmente mortal",
      "Sindrome paraneoplasico (SIADH, hipercalcemia, sindrome de Lambert-Eaton)",
      "Compresion medular por metastasis vertebrales"
    ],
    "complicacionesEn": [
      "Brain metastases (headache, seizures, focal neurological deficit)",
      "Bone metastases (pain, pathological fractures, hypercalcemia)",
      "Hepatic and adrenal metastases",
      "Recurrent malignant pleural effusion",
      "Superior vena cava syndrome (venous return obstruction)",
      "Potentially fatal massive hemoptysis",
      "Paraneoplastic syndrome (SIADH, hypercalcemia, Lambert-Eaton syndrome)",
      "Spinal cord compression from vertebral metastases"
    ],
    "cuandoConsultarEs": "Consulte a un medico lo antes posible si presenta tos persistente por mas de 3 semanas sin causa evidente, si tose sangre (aunque sea en pequena cantidad), si nota ronquera persistente o cambio en la voz, si tiene dolor toracico que no se resuelve, si esta perdiendo peso sin explicacion, o si tiene un historial de tabaquismo significativo. Busque atencion urgente si presenta dificultad respiratoria severa, hinchazon de cara y cuello (sindrome de vena cava superior), dolor oseo intenso o nuevo, debilidad en las piernas o perdida del control de esfinteres (compresion medular), o cefalea intensa con vision borrosa o convulsiones (metastasis cerebral).",
    "cuandoConsultarEn": "Consult a doctor as soon as possible if you have a persistent cough for more than 3 weeks without an evident cause, if you cough up blood (even in small amounts), if you notice persistent hoarseness or voice change, if you have chest pain that does not resolve, if you are losing weight without explanation, or if you have a significant smoking history. Seek urgent attention if you experience severe breathing difficulty, swelling of face and neck (superior vena cava syndrome), intense or new bone pain, leg weakness or loss of sphincter control (spinal cord compression), or severe headache with blurred vision or seizures (brain metastasis)."
  },
  {
    "id": "fibrosis-pulmonar",
    "nombreEs": "Fibrosis Pulmonar",
    "nombreEn": "Pulmonary Fibrosis",
    "categoriaEs": "Intersticial",
    "categoriaEn": "Interstitial",
    "descripcionEs": "La fibrosis pulmonar es un grupo de enfermedades pulmonares intersticiales caracterizadas por cicatrizacion progresiva e irreversible del tejido pulmonar. La forma mas comun y devastadora es la fibrosis pulmonar idiopatica (FPI), que tiene causa desconocida y un pronostico desfavorable con una supervivencia mediana de 3-5 anos tras el diagnostico. La fibrosis causa rigidez pulmonar, perdida de la capacidad de intercambio gaseoso y disnea progresiva. Otras causas de fibrosis incluyen enfermedades autoinmunes (artritis reumatoide, esclerodermia), exposiciones ambientales y ocupacionales (asbestosis, silicosis), medicamentos (amiodarona, metotrexato, bleomicina), y radioterapia. El diagnostico temprano y la referencia oportuna a un neumologo especializado son fundamentales para optimizar el manejo.",
    "descripcionEn": "Pulmonary fibrosis is a group of interstitial lung diseases characterized by progressive and irreversible scarring of lung tissue. The most common and devastating form is idiopathic pulmonary fibrosis (IPF), which has an unknown cause and an unfavorable prognosis with median survival of 3-5 years after diagnosis. The fibrosis causes lung stiffness, loss of gas exchange capacity, and progressive dyspnea. Other causes of fibrosis include autoimmune diseases (rheumatoid arthritis, scleroderma), environmental and occupational exposures (asbestosis, silicosis), medications (amiodarone, methotrexate, bleomycin), and radiation therapy. Early diagnosis and timely referral to a specialized pulmonologist are fundamental to optimize management.",
    "sintomasEs": [
      "Disnea de esfuerzo progresiva (sintoma principal, empeora gradualmente)",
      "Tos seca persistente y no productiva",
      "Crepitantes bibasales tipo velcro a la auscultacion (signo clasico)",
      "Acropaquia o dedos en palillo de tambor (hipocratismo digital)",
      "Fatiga cronica y disminucion progresiva de la capacidad funcional",
      "Cianosis peribucal y de extremidades en fases avanzadas",
      "Perdida de peso gradual",
      "Desaturacion significativa con el ejercicio (caida de SpO2)"
    ],
    "sintomasEn": [
      "Progressive exertional dyspnea (main symptom, gradually worsening)",
      "Persistent dry non-productive cough",
      "Bibasilar velcro-like crackles on auscultation (classic sign)",
      "Clubbing of fingers (digital hippocratism)",
      "Chronic fatigue and progressive decrease in functional capacity",
      "Perioral and extremity cyanosis in advanced stages",
      "Gradual weight loss",
      "Significant desaturation with exercise (SpO2 drop)"
    ],
    "causasEs": "La fibrosis pulmonar idiopatica (FPI) tiene causa desconocida, pero se asocia con edad avanzada (tipicamente mayores de 60 anos), sexo masculino, tabaquismo previo, reflujo gastroesofagico, y predisposicion genetica (mutaciones en genes de telomerasa como TERT y TERC, y en genes de mucina como MUC5B). Se cree que resulta de microlesiones repetidas del epitelio alveolar con reparacion aberrante que genera fibrosis en lugar de regeneracion normal. Causas conocidas de fibrosis pulmonar incluyen: enfermedades del tejido conectivo (esclerodermia, artritis reumatoide, sindrome de Sjogren, dermatomiositis), neumonitis por hipersensibilidad cronica (exposicion a aves, hongos, quimicos), neumoconiosis ocupacionales (asbestosis, silicosis, beriliosis), farmacos (bleomicina, amiodarona, nitrofurantoina, metotrexato), y fibrosis post-radioterapia.",
    "causasEn": "Idiopathic pulmonary fibrosis (IPF) has an unknown cause but is associated with advanced age (typically over 60), male sex, prior smoking, gastroesophageal reflux, and genetic predisposition (mutations in telomerase genes such as TERT and TERC, and mucin genes like MUC5B). It is believed to result from repeated micro-injuries to the alveolar epithelium with aberrant repair that generates fibrosis instead of normal regeneration. Known causes of pulmonary fibrosis include: connective tissue diseases (scleroderma, rheumatoid arthritis, Sjogren syndrome, dermatomyositis), chronic hypersensitivity pneumonitis (exposure to birds, molds, chemicals), occupational pneumoconiosis (asbestosis, silicosis, berylliosis), drugs (bleomycin, amiodarone, nitrofurantoin, methotrexate), and post-radiation fibrosis.",
    "diagnosticoEs": "El patron tipico de FPI en TAC de alta resolucion (TCAR) es la neumonia intersticial usual (NIU): reticulacion bibasal de predominio periferico, bronquiectasias por traccion, y panal de abejas (honeycombing) con minimo vidrio esmerilado. Si el patron de TCAR es tipico, no se requiere biopsia. Si el patron es indeterminado, se necesita discusion multidisciplinaria y posiblemente biopsia pulmonar quirurgica (VATS) o criobiopsia transbronquial. Las pruebas de funcion pulmonar muestran patron restrictivo: capacidad vital forzada (FVC) reducida, FEV1/FVC normal o elevado, y difusion de monoxido de carbono (DLCO) significativamente reducida. La caminata de 6 minutos evalua la capacidad funcional y la desaturacion con esfuerzo. Se deben realizar serologias para enfermedades autoinmunes (ANA, factor reumatoide, anti-CCP, anti-Scl-70) para descartar causas conocidas. La referencia a un centro especializado con equipo multidisciplinario es esencial.",
    "diagnosticoEn": "The typical IPF pattern on high-resolution CT (HRCT) is usual interstitial pneumonia (UIP): bibasilar reticular pattern with peripheral predominance, traction bronchiectasis, and honeycombing with minimal ground glass. If the HRCT pattern is typical, biopsy is not required. If the pattern is indeterminate, multidisciplinary discussion and possibly surgical lung biopsy (VATS) or transbronchial cryobiopsy is needed. Pulmonary function tests show a restrictive pattern: reduced forced vital capacity (FVC), normal or elevated FEV1/FVC, and significantly reduced carbon monoxide diffusing capacity (DLCO). The 6-minute walk test evaluates functional capacity and exertional desaturation. Serologies for autoimmune diseases (ANA, rheumatoid factor, anti-CCP, anti-Scl-70) should be performed to rule out known causes. Referral to a specialized center with a multidisciplinary team is essential.",
    "tratamientoEs": "Para la FPI, dos farmacos antifibroticos han demostrado reducir la progresion: pirfenidona (801 mg tres veces al dia con alimentos) y nintedanib (150 mg dos veces al dia con alimentos). Ambos reducen la caida de la FVC en aproximadamente un 50%, pero no curan la enfermedad ni revierten la fibrosis existente. Los efectos secundarios principales de pirfenidona son fotosensibilidad y molestias gastrointestinales; de nintedanib, diarrea. El manejo integral incluye: oxigenoterapia suplementaria si SpO2 en reposo menor a 88% o con el ejercicio, rehabilitacion pulmonar (mejora calidad de vida y capacidad de ejercicio), vacunacion contra influenza y neumococo, tratamiento del reflujo gastroesofagico, y soporte nutricional. El trasplante pulmonar es la unica opcion curativa y debe considerarse tempranamente en pacientes elegibles (generalmente menores de 65 anos sin comorbilidades significativas). Los cuidados paliativos deben integrarse desde el diagnostico para manejo de disnea y planificacion anticipada de cuidados.",
    "tratamientoEn": "For IPF, two antifibrotic drugs have been shown to slow progression: pirfenidone (801 mg three times daily with food) and nintedanib (150 mg twice daily with food). Both reduce FVC decline by approximately 50%, but they do not cure the disease or reverse existing fibrosis. Main side effects of pirfenidone are photosensitivity and gastrointestinal discomfort; of nintedanib, diarrhea. Comprehensive management includes: supplemental oxygen therapy if resting SpO2 below 88% or with exercise, pulmonary rehabilitation (improves quality of life and exercise capacity), influenza and pneumococcal vaccination, gastroesophageal reflux treatment, and nutritional support. Lung transplantation is the only curative option and should be considered early in eligible patients (generally under 65 years without significant comorbidities). Palliative care should be integrated from diagnosis for dyspnea management and advance care planning.",
    "prevencionEs": "Dado que la FPI es idiopatica, no existe una prevencion primaria especifica. Sin embargo, el cese del tabaquismo reduce significativamente el riesgo de desarrollar fibrosis pulmonar. La prevencion de causas conocidas incluye: proteccion respiratoria adecuada en ambientes con exposicion a asbesto, silice y otros polvos inorganicos; eliminacion de exposiciones a antigenos causantes de neumonitis por hipersensibilidad (aves, hongos, humidificadores contaminados); monitoreo con pruebas de funcion pulmonar en pacientes que reciben medicamentos potencialmente fibrosantes (amiodarona, metotrexato, bleomicina); y seguimiento pulmonar en pacientes que reciben radioterapia toracica. La deteccion temprana de enfermedad intersticial en pacientes con enfermedades autoinmunes permite intervenciones oportunas.",
    "prevencionEn": "Since IPF is idiopathic, there is no specific primary prevention. However, smoking cessation significantly reduces the risk of developing pulmonary fibrosis. Prevention of known causes includes: adequate respiratory protection in environments with asbestos, silica, and other inorganic dust exposure; elimination of exposures to antigens causing hypersensitivity pneumonitis (birds, molds, contaminated humidifiers); monitoring with pulmonary function tests in patients receiving potentially fibrogenic medications (amiodarone, methotrexate, bleomycin); and pulmonary follow-up in patients receiving thoracic radiation therapy. Early detection of interstitial disease in patients with autoimmune diseases allows timely interventions.",
    "complicacionesEs": [
      "Insuficiencia respiratoria cronica progresiva",
      "Hipertension pulmonar secundaria con cor pulmonale",
      "Exacerbacion aguda de FPI (deterioro rapido catastrofico, mortalidad mayor al 50%)",
      "Cancer de pulmon (riesgo aumentado en pacientes con FPI)",
      "Neumotorax espontaneo",
      "Infecciones pulmonares oportunistas (especialmente durante inmunosupresion)",
      "Depresion y ansiedad por enfermedad cronica progresiva",
      "Dependencia de oxigeno y limitacion severa de actividades"
    ],
    "complicacionesEn": [
      "Progressive chronic respiratory failure",
      "Secondary pulmonary hypertension with cor pulmonale",
      "Acute IPF exacerbation (rapid catastrophic deterioration, mortality over 50%)",
      "Lung cancer (increased risk in IPF patients)",
      "Spontaneous pneumothorax",
      "Opportunistic pulmonary infections (especially during immunosuppression)",
      "Depression and anxiety from progressive chronic disease",
      "Oxygen dependence and severe activity limitation"
    ],
    "cuandoConsultarEs": "Consulte a su medico si nota dificultad para respirar progresiva con actividades que antes toleraba bien, si tiene tos seca persistente sin causa aparente, si nota que sus dedos estan cambiando de forma (acropaquia), o si ha sido diagnosticado con una enfermedad autoinmune y desarrolla sintomas respiratorios nuevos. Busque atencion urgente si experimenta empeoramiento rapido de la dificultad respiratoria en dias a semanas (posible exacerbacion aguda), si su saturacion de oxigeno cae por debajo del 90%, si presenta fiebre con empeoramiento respiratorio, o si tiene dolor toracico agudo subito (posible neumotorax). Si ya tiene diagnostico de fibrosis pulmonar, contacte a su equipo medico ante cualquier cambio en sus sintomas basales.",
    "cuandoConsultarEn": "Consult your doctor if you notice progressive difficulty breathing with activities you previously tolerated well, if you have persistent dry cough without apparent cause, if you notice your fingers are changing shape (clubbing), or if you have been diagnosed with an autoimmune disease and develop new respiratory symptoms. Seek urgent attention if you experience rapid worsening of breathing difficulty over days to weeks (possible acute exacerbation), if your oxygen saturation drops below 90%, if you have fever with respiratory worsening, or if you have sudden acute chest pain (possible pneumothorax). If you already have a pulmonary fibrosis diagnosis, contact your medical team about any change in your baseline symptoms."
  },
  {
    "id": "neumotorax",
    "nombreEs": "Neumotorax",
    "nombreEn": "Pneumothorax",
    "categoriaEs": "Pleural",
    "categoriaEn": "Pleural",
    "descripcionEs": "El neumotorax es la presencia de aire en el espacio pleural (entre la pleura visceral que recubre el pulmon y la pleura parietal que recubre la pared toracica), lo que causa un colapso parcial o total del pulmon afectado. Puede ser espontaneo primario (sin enfermedad pulmonar subyacente, tipico en hombres jovenes altos y delgados), espontaneo secundario (asociado a enfermedad pulmonar como EPOC, fibrosis o TB), traumatico (por herida penetrante o trauma cerrado), o iatrogenico (tras procedimientos como puncion venosa central o biopsia pulmonar). El neumotorax a tension es una emergencia vital en la que el aire acumulado comprime el mediastino y compromete el retorno venoso, causando shock obstructivo y paro cardiaco si no se trata inmediatamente.",
    "descripcionEn": "Pneumothorax is the presence of air in the pleural space (between the visceral pleura covering the lung and the parietal pleura lining the chest wall), causing partial or total collapse of the affected lung. It can be primary spontaneous (without underlying lung disease, typical in tall thin young men), secondary spontaneous (associated with lung disease such as COPD, fibrosis, or TB), traumatic (from penetrating wound or blunt trauma), or iatrogenic (after procedures such as central venous puncture or lung biopsy). Tension pneumothorax is a life-threatening emergency in which accumulated air compresses the mediastinum and compromises venous return, causing obstructive shock and cardiac arrest if not treated immediately.",
    "sintomasEs": [
      "Dolor toracico agudo unilateral de inicio subito (sintoma mas comun)",
      "Disnea subita de intensidad variable segun el tamano del neumotorax",
      "Disminucion o ausencia del murmullo vesicular en el lado afectado",
      "Timpanismo a la percusion del hemitorax afectado",
      "Taquicardia y taquipnea",
      "En neumotorax a tension: hipotension severa, desviacion traqueal contralateral, ingurgitacion yugular",
      "Enfisema subcutaneo (crepitacion a la palpacion del cuello o torax)",
      "Inquietud, ansiedad y sensacion de opresion toracica"
    ],
    "sintomasEn": [
      "Sudden onset unilateral sharp chest pain (most common symptom)",
      "Sudden dyspnea of variable intensity depending on pneumothorax size",
      "Decreased or absent breath sounds on the affected side",
      "Tympanic percussion note over the affected hemithorax",
      "Tachycardia and tachypnea",
      "In tension pneumothorax: severe hypotension, contralateral tracheal deviation, jugular venous distension",
      "Subcutaneous emphysema (crepitus on palpation of neck or chest)",
      "Restlessness, anxiety, and sensation of chest tightness"
    ],
    "causasEs": "El neumotorax espontaneo primario se produce por ruptura de blebs o bullas subpleurales apicales, frecuente en hombres jovenes (20-30 anos), altos, delgados y fumadores. El neumotorax espontaneo secundario ocurre en el contexto de enfermedad pulmonar: EPOC con enfisema (causa mas comun), fibrosis pulmonar, neumonia necrotizante, tuberculosis cavitaria, cancer de pulmon, fibrosis quistica, linfangioleiomiomatosis (en mujeres en edad fertil), y neumonia por Pneumocystis jirovecii en VIH. El neumotorax traumatico resulta de fracturas costales con laceracion pleural, heridas penetrantes (arma blanca o de fuego), o barotrauma por ventilacion mecanica. El neumotorax iatrogenico puede ocurrir tras puncion venosa subclavia o yugular, toracocentesis, biopsia pulmonar transbronquial o percutanea, y acupuntura toracica.",
    "causasEn": "Primary spontaneous pneumothorax is produced by rupture of apical subpleural blebs or bullae, frequent in young men (20-30 years), tall, thin, and smokers. Secondary spontaneous pneumothorax occurs in the context of lung disease: COPD with emphysema (most common cause), pulmonary fibrosis, necrotizing pneumonia, cavitary tuberculosis, lung cancer, cystic fibrosis, lymphangioleiomyomatosis (in women of childbearing age), and Pneumocystis jirovecii pneumonia in HIV. Traumatic pneumothorax results from rib fractures with pleural laceration, penetrating wounds (stab or gunshot), or barotrauma from mechanical ventilation. Iatrogenic pneumothorax can occur after subclavian or jugular venous puncture, thoracentesis, transbronchial or percutaneous lung biopsy, and thoracic acupuncture.",
    "diagnosticoEs": "La radiografia de torax en inspiracion es el estudio inicial: muestra la linea de pleura visceral separada de la pared toracica con ausencia de trama pulmonar entre ambas. El tamano se estima midiendo la distancia entre el apice pulmonar y la cupula toracica; una distancia mayor a 2 cm en el apice o mayor a 3 cm a nivel hiliar indica neumotorax grande. La TAC de torax es mas sensible que la radiografia y es el estandar para cuantificar el tamano con precision, detectar blebs/bullas, y planificar tratamiento en casos recurrentes. En neumotorax a tension el diagnostico es CLINICO y el tratamiento no debe retrasarse por obtener imagenes; los signos incluyen hipotension, desviacion traqueal, ausencia de ruidos respiratorios, e ingurgitacion yugular. La ecografia pulmonar point-of-care (ausencia de deslizamiento pulmonar y punto pulmonar) es util en urgencias y trauma.",
    "diagnosticoEn": "Inspiratory chest X-ray is the initial study: it shows the visceral pleural line separated from the chest wall with absence of lung markings between them. Size is estimated by measuring the distance between the lung apex and the thoracic cupola; a distance greater than 2 cm at the apex or greater than 3 cm at the hilar level indicates a large pneumothorax. Chest CT is more sensitive than X-ray and is the standard for precisely quantifying size, detecting blebs/bullae, and planning treatment in recurrent cases. In tension pneumothorax, diagnosis is CLINICAL and treatment should not be delayed for imaging; signs include hypotension, tracheal deviation, absent breath sounds, and jugular venous distension. Point-of-care lung ultrasound (absent lung sliding and lung point) is useful in emergency and trauma settings.",
    "tratamientoEs": "El tratamiento depende del tipo, tamano y sintomas. Neumotorax espontaneo primario pequeno (menor a 2 cm) en paciente estable: observacion con oxigeno suplementario a alto flujo (acelera la reabsorcion del aire) y radiografia de control en 4-6 horas. Neumotorax grande o sintomatico: aspiracion manual con aguja (14-16G en segundo espacio intercostal, linea medioclavicular) como primera intervencion; si fracasa, colocacion de tubo de toracostomia (drenaje pleural) conectado a sello de agua con o sin aspiracion. Neumotorax a tension: descompresion inmediata con aguja en segundo espacio intercostal linea medioclavicular, seguida de tubo de toracostomia. Neumotorax secundario: generalmente requiere drenaje pleural dado el compromiso funcional. Para prevencion de recurrencias (riesgo de 30-50% tras el primer episodio): pleurodesis quimica (talco) o cirugia toracoscopica (VATS) con reseccion de bullas y pleurodesis mecanica, especialmente tras un segundo episodio o en pacientes con alto riesgo ocupacional (pilotos, buzos).",
    "tratamientoEn": "Treatment depends on type, size, and symptoms. Small primary spontaneous pneumothorax (less than 2 cm) in a stable patient: observation with high-flow supplemental oxygen (accelerates air reabsorption) and follow-up X-ray in 4-6 hours. Large or symptomatic pneumothorax: manual needle aspiration (14-16G in second intercostal space, midclavicular line) as first intervention; if unsuccessful, thoracostomy tube placement (pleural drain) connected to water seal with or without suction. Tension pneumothorax: immediate needle decompression in second intercostal space midclavicular line, followed by thoracostomy tube. Secondary pneumothorax: generally requires pleural drainage given functional compromise. For recurrence prevention (30-50% risk after first episode): chemical pleurodesis (talc) or thoracoscopic surgery (VATS) with bulla resection and mechanical pleurodesis, especially after a second episode or in patients with high occupational risk (pilots, divers).",
    "prevencionEs": "El cese del tabaquismo es la medida preventiva mas importante para el neumotorax espontaneo primario, ya que el riesgo de neumotorax es 20 veces mayor en fumadores de mas de 20 cigarrillos diarios comparado con no fumadores. Tras un primer episodio, se recomienda evitar actividades de riesgo como el buceo (contraindicado de por vida a menos que se realice pleurodesis bilateral quirurgica) y los viajes aereos hasta que se confirme la resolucion completa por radiografia (generalmente esperar 2-6 semanas). Los pacientes con alto riesgo de recurrencia deben ser referidos tempranamente para pleurodesis o cirugia preventiva. En pacientes sometidos a procedimientos invasivos toracicos, la tecnica cuidadosa guiada por ecografia reduce el riesgo de neumotorax iatrogenico. El manejo adecuado de las enfermedades pulmonares subyacentes reduce el riesgo de neumotorax secundario.",
    "prevencionEn": "Smoking cessation is the most important preventive measure for primary spontaneous pneumothorax, as the risk of pneumothorax is 20 times higher in smokers of more than 20 cigarettes daily compared to non-smokers. After a first episode, avoiding high-risk activities such as diving (contraindicated for life unless bilateral surgical pleurodesis is performed) and air travel until complete resolution is confirmed by X-ray (generally wait 2-6 weeks) is recommended. Patients with high recurrence risk should be referred early for pleurodesis or preventive surgery. In patients undergoing invasive thoracic procedures, careful ultrasound-guided technique reduces the risk of iatrogenic pneumothorax. Adequate management of underlying lung diseases reduces the risk of secondary pneumothorax.",
    "complicacionesEs": [
      "Neumotorax a tension con colapso hemodinamico (emergencia vital)",
      "Neumotorax recurrente (30-50% de recurrencia tras primer episodio sin pleurodesis)",
      "Hemoneumotorax (sangrado asociado al neumotorax)",
      "Edema pulmonar por reexpansion (raro, tras drenaje rapido de neumotorax grande)",
      "Empiema o infeccion del espacio pleural",
      "Fistula broncopleural persistente (fuga aerea prolongada)",
      "Pulmón atrapado o encarcelado por fibrosis pleural",
      "Insuficiencia respiratoria aguda en neumotorax secundario"
    ],
    "complicacionesEn": [
      "Tension pneumothorax with hemodynamic collapse (life-threatening emergency)",
      "Recurrent pneumothorax (30-50% recurrence after first episode without pleurodesis)",
      "Hemopneumothorax (bleeding associated with pneumothorax)",
      "Re-expansion pulmonary edema (rare, after rapid drainage of large pneumothorax)",
      "Empyema or pleural space infection",
      "Persistent bronchopleural fistula (prolonged air leak)",
      "Trapped or incarcerated lung from pleural fibrosis",
      "Acute respiratory failure in secondary pneumothorax"
    ],
    "cuandoConsultarEs": "El neumotorax a tension es una emergencia que pone en peligro la vida. Llame al 911 inmediatamente si presenta dolor toracico subito con dificultad respiratoria severa, especialmente si se acompana de hipotension, mareo o perdida de conciencia. Busque atencion medica urgente si experimenta dolor toracico agudo de inicio subito con sensacion de falta de aire, si nota enfisema subcutaneo (crepitacion bajo la piel del cuello o pecho), o si ha tenido un trauma toracico y desarrolla sintomas respiratorios. Si ya ha tenido un neumotorax previo, consulte ante cualquier recurrencia de dolor toracico agudo o disnea subita. Los buzos y pilotos deben buscar evaluacion especializada antes de regresar a sus actividades.",
    "cuandoConsultarEn": "Tension pneumothorax is a life-threatening emergency. Call 911 immediately if you experience sudden chest pain with severe breathing difficulty, especially if accompanied by hypotension, dizziness, or loss of consciousness. Seek urgent medical attention if you experience sudden onset acute chest pain with sensation of air hunger, if you notice subcutaneous emphysema (crepitus under the skin of neck or chest), or if you have had a chest trauma and develop respiratory symptoms. If you have had a previous pneumothorax, consult for any recurrence of acute chest pain or sudden dyspnea. Divers and pilots should seek specialized evaluation before returning to their activities."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarNeumologia(termino: string): NeumologiaEntry[] {
  const t = termino.toLowerCase();
  return NEUMOLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getNeumologiaById(id: string): NeumologiaEntry | undefined {
  return NEUMOLOGIA_ENTRIES.find((e) => e.id === id);
}

export function getNeumologiaPorCategoria(categoria: string): NeumologiaEntry[] {
  const c = categoria.toLowerCase();
  return NEUMOLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
