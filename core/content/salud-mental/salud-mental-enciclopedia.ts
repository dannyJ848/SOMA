// =============================================================================
// SOMA Salud Mental Enciclopedia — Spanish-First Bilingual
// Mental Health & Wellness Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface SaludMentalEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  categoriaEs: string;
  categoriaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  causasFactoresEs: string[];
  causasFactoresEn: string[];
  tratamientosEs: string[];
  tratamientosEn: string[];
  terapiasEs: string[];
  terapiasEn: string[];
  medicamentosComunes?: string[];
  estrategiasAutoayudaEs: string[];
  estrategiasAutoayudaEn: string[];
  recursosApoyoEs: string[];
  recursosApoyoEn: string[];
  mitosRealidadesEs: string[];
  mitosRealidadesEn: string[];
  cuandoBuscarAyudaEs: string[];
  cuandoBuscarAyudaEn: string[];
  lineaCrisis?: string;
  afectaPoblacion: string;
  edadComun?: string;
}

export interface TecnicaBienestar {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  pasosEs: string[];
  pasosEn: string[];
  duracion: string;
  evidenciaEs: string;
  evidenciaEn: string;
  paraQueCondiciones: string[];
  categoria: string;
}

const saludMentalCondiciones: SaludMentalEntry[] = JSON.parse(`[
  {
    "id": "sm-depresion-mayor",
    "nombreEs": "Depresion Mayor",
    "nombreEn": "Major Depressive Disorder",
    "categoriaEs": "Trastornos del Estado de Animo",
    "categoriaEn": "Mood Disorders",
    "descripcionEs": "Trastorno del estado de animo caracterizado por tristeza persistente, perdida de interes y cambios en el funcionamiento diario durante al menos 2 semanas. Es una de las principales causas de discapacidad a nivel mundial.",
    "descripcionEn": "Mood disorder characterized by persistent sadness, loss of interest, and changes in daily functioning for at least 2 weeks. It is one of the leading causes of disability worldwide.",
    "sintomasEs": ["Tristeza persistente o vacio emocional", "Perdida de interes o placer en actividades (anhedonia)", "Cambios en apetito y peso", "Insomnio o hipersomnia", "Fatiga y perdida de energia", "Dificultad para concentrarse", "Pensamientos de muerte o suicidio"],
    "sintomasEn": ["Persistent sadness or emotional emptiness", "Loss of interest or pleasure in activities (anhedonia)", "Changes in appetite and weight", "Insomnia or hypersomnia", "Fatigue and energy loss", "Difficulty concentrating", "Thoughts of death or suicide"],
    "causasFactoresEs": ["Desequilibrio de neurotransmisores (serotonina, norepinefrina)", "Historia familiar de depresion", "Eventos traumaticos o estresantes", "Enfermedades cronicas", "Aislamiento social"],
    "causasFactoresEn": ["Neurotransmitter imbalance (serotonin, norepinephrine)", "Family history of depression", "Traumatic or stressful events", "Chronic diseases", "Social isolation"],
    "tratamientosEs": ["Psicoterapia (terapia cognitivo-conductual)", "Antidepresivos ISRS como primera linea", "Combinacion de terapia y medicacion", "Ejercicio fisico regular", "Terapia electroconvulsiva para casos resistentes"],
    "tratamientosEn": ["Psychotherapy (cognitive behavioral therapy)", "SSRI antidepressants as first line", "Combination of therapy and medication", "Regular physical exercise", "Electroconvulsive therapy for resistant cases"],
    "terapiasEs": ["Terapia cognitivo-conductual (TCC)", "Terapia interpersonal", "Activacion conductual", "Terapia psicodinamica"],
    "terapiasEn": ["Cognitive behavioral therapy (CBT)", "Interpersonal therapy", "Behavioral activation", "Psychodynamic therapy"],
    "medicamentosComunes": ["Sertralina", "Fluoxetina", "Escitalopram", "Venlafaxina", "Bupropion"],
    "estrategiasAutoayudaEs": ["Mantener rutina de sueno regular", "Ejercicio aerobico 30 min/dia", "Mantener contacto social", "Evitar alcohol y drogas", "Diario de gratitud"],
    "estrategiasAutoayudaEn": ["Maintain regular sleep routine", "Aerobic exercise 30 min/day", "Maintain social contact", "Avoid alcohol and drugs", "Gratitude journal"],
    "recursosApoyoEs": ["Linea de crisis: 988 (Suicide & Crisis Lifeline)", "Grupos de apoyo para depresion", "Aplicaciones de salud mental", "Terapia en linea"],
    "recursosApoyoEn": ["Crisis line: 988 (Suicide & Crisis Lifeline)", "Depression support groups", "Mental health apps", "Online therapy"],
    "mitosRealidadesEs": ["Mito: Es solo tristeza. Realidad: Es una enfermedad medica con base biologica.", "Mito: Solo les pasa a personas debiles. Realidad: Afecta a cualquier persona independientemente de su fuerza."],
    "mitosRealidadesEn": ["Myth: It's just sadness. Reality: It's a medical illness with biological basis.", "Myth: Only happens to weak people. Reality: Affects anyone regardless of strength."],
    "cuandoBuscarAyudaEs": ["Tristeza que dura mas de 2 semanas", "Pensamientos de muerte o suicidio", "Incapacidad para funcionar en trabajo o relaciones", "Uso de alcohol o drogas para sentirse mejor"],
    "cuandoBuscarAyudaEn": ["Sadness lasting more than 2 weeks", "Thoughts of death or suicide", "Inability to function at work or relationships", "Using alcohol or drugs to feel better"],
    "lineaCrisis": "988 (Suicide & Crisis Lifeline)",
    "afectaPoblacion": "7% de adultos anualmente",
    "edadComun": "18-25 anos (mayor prevalencia)"
  },
  {
    "id": "sm-ansiedad-generalizada",
    "nombreEs": "Trastorno de Ansiedad Generalizada",
    "nombreEn": "Generalized Anxiety Disorder",
    "categoriaEs": "Trastornos de Ansiedad",
    "categoriaEn": "Anxiety Disorders",
    "descripcionEs": "Preocupacion excesiva y persistente sobre multiples aspectos de la vida diaria que resulta dificil de controlar. Los sintomas deben estar presentes la mayoria de los dias durante al menos 6 meses para el diagnostico.",
    "descripcionEn": "Excessive and persistent worry about multiple aspects of daily life that is difficult to control. Symptoms must be present most days for at least 6 months for diagnosis.",
    "sintomasEs": ["Preocupacion excesiva e incontrolable", "Inquietud o sensacion de estar al limite", "Fatiga facil", "Dificultad para concentrarse", "Tension muscular", "Problemas de sueno", "Irritabilidad"],
    "sintomasEn": ["Excessive uncontrollable worry", "Restlessness or feeling on edge", "Easy fatigue", "Difficulty concentrating", "Muscle tension", "Sleep problems", "Irritability"],
    "causasFactoresEs": ["Predisposicion genetica", "Desequilibrio de GABA y serotonina", "Experiencias traumaticas en la infancia", "Personalidad perfeccionista", "Estres cronico"],
    "causasFactoresEn": ["Genetic predisposition", "GABA and serotonin imbalance", "Childhood traumatic experiences", "Perfectionist personality", "Chronic stress"],
    "tratamientosEs": ["Terapia cognitivo-conductual (primera linea)", "ISRS o IRSN", "Buspirona", "Tecnicas de relajacion", "Ejercicio regular"],
    "tratamientosEn": ["Cognitive behavioral therapy (first line)", "SSRIs or SNRIs", "Buspirone", "Relaxation techniques", "Regular exercise"],
    "terapiasEs": ["TCC con reestructuracion cognitiva", "Terapia de aceptacion y compromiso (ACT)", "Mindfulness basado en reduccion de estres"],
    "terapiasEn": ["CBT with cognitive restructuring", "Acceptance and commitment therapy (ACT)", "Mindfulness-based stress reduction"],
    "medicamentosComunes": ["Sertralina", "Escitalopram", "Venlafaxina", "Buspirona", "Duloxetina"],
    "estrategiasAutoayudaEs": ["Limitar cafeina y alcohol", "Tecnica de respiracion 4-7-8", "Ejercicio diario", "Meditacion mindfulness", "Limitar consumo de noticias"],
    "estrategiasAutoayudaEn": ["Limit caffeine and alcohol", "4-7-8 breathing technique", "Daily exercise", "Mindfulness meditation", "Limit news consumption"],
    "recursosApoyoEs": ["Linea de ayuda SAMHSA: 1-800-662-4357", "Grupos de apoyo para ansiedad", "Apps: Calm, Headspace"],
    "recursosApoyoEn": ["SAMHSA helpline: 1-800-662-4357", "Anxiety support groups", "Apps: Calm, Headspace"],
    "mitosRealidadesEs": ["Mito: Solo hay que relajarse. Realidad: Es un trastorno neurobiologico que requiere tratamiento.", "Mito: La ansiedad no es seria. Realidad: Puede ser incapacitante."],
    "mitosRealidadesEn": ["Myth: Just relax. Reality: It's a neurobiological disorder requiring treatment.", "Myth: Anxiety isn't serious. Reality: It can be debilitating."],
    "cuandoBuscarAyudaEs": ["Preocupacion que interfiere con el trabajo o relaciones", "Sintomas fisicos persistentes sin causa medica", "Uso de sustancias para calmar la ansiedad"],
    "cuandoBuscarAyudaEn": ["Worry interfering with work or relationships", "Persistent physical symptoms without medical cause", "Using substances to calm anxiety"],
    "afectaPoblacion": "3.1% de adultos",
    "edadComun": "30 anos (edad media de inicio)"
  },
  {
    "id": "sm-trastorno-panico",
    "nombreEs": "Trastorno de Panico",
    "nombreEn": "Panic Disorder",
    "categoriaEs": "Trastornos de Ansiedad",
    "categoriaEn": "Anxiety Disorders",
    "descripcionEs": "Ataques de panico recurrentes e inesperados seguidos de preocupacion persistente por futuros ataques o cambios de comportamiento para evitarlos. Los ataques alcanzan su pico en 10 minutos y simulan un infarto.",
    "descripcionEn": "Recurrent unexpected panic attacks followed by persistent worry about future attacks or behavioral changes to avoid them. Attacks peak within 10 minutes and mimic a heart attack.",
    "sintomasEs": ["Palpitaciones o taquicardia", "Sudoracion y temblor", "Sensacion de falta de aire", "Dolor o presion en el pecho", "Nauseas o malestar abdominal", "Miedo a morir o volverse loco", "Entumecimiento u hormigueo"],
    "sintomasEn": ["Palpitations or tachycardia", "Sweating and trembling", "Shortness of breath sensation", "Chest pain or pressure", "Nausea or abdominal discomfort", "Fear of dying or going crazy", "Numbness or tingling"],
    "causasFactoresEs": ["Predisposicion genetica", "Hiperactividad del sistema nervioso simpatico", "Interpretacion catastrofica de sensaciones corporales", "Estres acumulado", "Consumo de cafeina o estimulantes"],
    "causasFactoresEn": ["Genetic predisposition", "Sympathetic nervous system hyperactivity", "Catastrophic interpretation of body sensations", "Accumulated stress", "Caffeine or stimulant consumption"],
    "tratamientosEs": ["TCC con exposicion interoceptiva", "ISRS (primera linea farmacologica)", "Benzodiacepinas solo para uso a corto plazo", "Educacion sobre la naturaleza del panico"],
    "tratamientosEn": ["CBT with interoceptive exposure", "SSRIs (first-line pharmacological)", "Benzodiazepines only for short-term use", "Education about the nature of panic"],
    "terapiasEs": ["TCC con reestructuracion cognitiva", "Exposicion interoceptiva gradual", "Terapia de desensibilizacion"],
    "terapiasEn": ["CBT with cognitive restructuring", "Gradual interoceptive exposure", "Desensitization therapy"],
    "medicamentosComunes": ["Sertralina", "Paroxetina", "Fluoxetina", "Alprazolam (corto plazo)"],
    "estrategiasAutoayudaEs": ["Respiracion diafragmatica durante el ataque", "Recordar que el ataque pasara en minutos", "No huir de la situacion", "Tecnica de grounding 5-4-3-2-1"],
    "estrategiasAutoayudaEn": ["Diaphragmatic breathing during attack", "Remember the attack will pass in minutes", "Do not flee the situation", "5-4-3-2-1 grounding technique"],
    "recursosApoyoEs": ["Linea de crisis 988", "Grupos de apoyo ADAA"],
    "recursosApoyoEn": ["988 crisis line", "ADAA support groups"],
    "mitosRealidadesEs": ["Mito: Un ataque de panico puede matarte. Realidad: Es muy desagradable pero no es peligroso.", "Mito: Significa que estas loco. Realidad: Es un trastorno tratable."],
    "mitosRealidadesEn": ["Myth: A panic attack can kill you. Reality: Very unpleasant but not dangerous.", "Myth: Means you're crazy. Reality: It's a treatable disorder."],
    "cuandoBuscarAyudaEs": ["Ataques de panico recurrentes", "Evitacion de lugares por miedo a tener un ataque", "Ir a urgencias repetidamente pensando que es infarto"],
    "cuandoBuscarAyudaEn": ["Recurrent panic attacks", "Avoiding places for fear of having an attack", "Going to ER repeatedly thinking it's a heart attack"],
    "afectaPoblacion": "2-3% de adultos",
    "edadComun": "20-30 anos"
  },
  {
    "id": "sm-tept",
    "nombreEs": "Trastorno de Estres Postraumatico (TEPT)",
    "nombreEn": "Post-Traumatic Stress Disorder (PTSD)",
    "categoriaEs": "Trastornos Relacionados con Trauma",
    "categoriaEn": "Trauma-Related Disorders",
    "descripcionEs": "Trastorno que se desarrolla despues de experimentar o presenciar un evento traumatico. Se caracteriza por reexperimentacion del trauma, evitacion, alteraciones cognitivas negativas e hiperactivacion. Puede ser cronico sin tratamiento.",
    "descripcionEn": "Disorder developing after experiencing or witnessing a traumatic event. Characterized by trauma re-experiencing, avoidance, negative cognitive alterations, and hyperarousal. Can become chronic without treatment.",
    "sintomasEs": ["Flashbacks y pesadillas del trauma", "Evitacion de recordatorios del evento", "Hiperalerta y respuesta exagerada de sobresalto", "Entumecimiento emocional", "Irritabilidad y dificultad para dormir", "Pensamientos negativos persistentes sobre uno mismo o el mundo"],
    "sintomasEn": ["Flashbacks and trauma nightmares", "Avoidance of event reminders", "Hypervigilance and exaggerated startle response", "Emotional numbing", "Irritability and sleep difficulty", "Persistent negative thoughts about self or world"],
    "causasFactoresEs": ["Exposicion a evento traumatico (combate, abuso, accidente)", "Trauma infantil", "Falta de apoyo social post-trauma", "Historia de trastornos mentales previos", "Trauma repetido o prolongado"],
    "causasFactoresEn": ["Exposure to traumatic event (combat, abuse, accident)", "Childhood trauma", "Lack of post-trauma social support", "History of prior mental disorders", "Repeated or prolonged trauma"],
    "tratamientosEs": ["Terapia de procesamiento cognitivo (CPT)", "Exposicion prolongada (PE)", "EMDR (desensibilizacion por movimientos oculares)", "ISRS (sertralina, paroxetina aprobados)", "Prazosin para pesadillas"],
    "tratamientosEn": ["Cognitive processing therapy (CPT)", "Prolonged exposure (PE)", "EMDR (eye movement desensitization and reprocessing)", "SSRIs (sertraline, paroxetine approved)", "Prazosin for nightmares"],
    "terapiasEs": ["CPT", "Exposicion prolongada", "EMDR", "Terapia de grupo para trauma"],
    "terapiasEn": ["CPT", "Prolonged exposure", "EMDR", "Group therapy for trauma"],
    "medicamentosComunes": ["Sertralina", "Paroxetina", "Prazosin (pesadillas)", "Venlafaxina"],
    "estrategiasAutoayudaEs": ["Tecnicas de grounding cuando hay flashbacks", "Mantener rutina diaria estable", "Ejercicio fisico regular", "Tecnicas de respiracion para hiperactivacion"],
    "estrategiasAutoayudaEn": ["Grounding techniques during flashbacks", "Maintain stable daily routine", "Regular physical exercise", "Breathing techniques for hyperarousal"],
    "recursosApoyoEs": ["Linea de veteranos: 1-800-273-8255 opcion 1", "RAINN (abuso sexual): 1-800-656-4673", "988 Linea de crisis"],
    "recursosApoyoEn": ["Veterans crisis line: 1-800-273-8255 press 1", "RAINN (sexual abuse): 1-800-656-4673", "988 Crisis line"],
    "mitosRealidadesEs": ["Mito: Solo les pasa a soldados. Realidad: Cualquier persona puede desarrollar TEPT.", "Mito: Deberian superarlo. Realidad: Es una condicion medica que requiere tratamiento."],
    "mitosRealidadesEn": ["Myth: Only happens to soldiers. Reality: Anyone can develop PTSD.", "Myth: They should get over it. Reality: It's a medical condition requiring treatment."],
    "cuandoBuscarAyudaEs": ["Sintomas que duran mas de 1 mes despues del trauma", "Flashbacks o pesadillas que interfieren con la vida diaria", "Uso de alcohol o drogas para lidiar con el trauma"],
    "cuandoBuscarAyudaEn": ["Symptoms lasting more than 1 month after trauma", "Flashbacks or nightmares interfering with daily life", "Using alcohol or drugs to cope with trauma"],
    "afectaPoblacion": "6-8% de la poblacion general en su vida",
    "edadComun": "Cualquier edad tras exposicion a trauma"
  },
  {
    "id": "sm-trastorno-bipolar",
    "nombreEs": "Trastorno Bipolar",
    "nombreEn": "Bipolar Disorder",
    "categoriaEs": "Trastornos del Estado de Animo",
    "categoriaEn": "Mood Disorders",
    "descripcionEs": "Trastorno caracterizado por episodios de mania (o hipomania en bipolar II) alternando con episodios depresivos. La mania incluye euforia, energia excesiva, impulsividad y reduccion de la necesidad de dormir. Es una condicion cronica que requiere tratamiento de por vida.",
    "descripcionEn": "Disorder characterized by episodes of mania (or hypomania in bipolar II) alternating with depressive episodes. Mania includes euphoria, excessive energy, impulsivity, and reduced need for sleep. It's a chronic condition requiring lifelong treatment.",
    "sintomasEs": ["Mania: euforia o irritabilidad extrema", "Reduccion de necesidad de sueno (3-4 horas)", "Habla rapida y pensamientos acelerados", "Conductas impulsivas de riesgo (gastos, sexo, inversiones)", "Grandiosidad o autoestima inflada", "Depresion: igual que depresion mayor"],
    "sintomasEn": ["Mania: extreme euphoria or irritability", "Reduced need for sleep (3-4 hours)", "Rapid speech and racing thoughts", "Risky impulsive behaviors (spending, sex, investments)", "Grandiosity or inflated self-esteem", "Depression: same as major depression"],
    "causasFactoresEs": ["Fuerte componente genetico (hereditario)", "Desequilibrio de neurotransmisores", "Alteraciones en ritmo circadiano", "Estres como desencadenante de episodios"],
    "causasFactoresEn": ["Strong genetic component (hereditary)", "Neurotransmitter imbalance", "Circadian rhythm alterations", "Stress as episode trigger"],
    "tratamientosEs": ["Estabilizadores del animo (litio como gold standard)", "Anticonvulsivantes (valproato, lamotrigina)", "Antipsicoticos atipicos", "Psicoeducacion", "Terapia de ritmo social e interpersonal"],
    "tratamientosEn": ["Mood stabilizers (lithium as gold standard)", "Anticonvulsants (valproate, lamotrigine)", "Atypical antipsychotics", "Psychoeducation", "Interpersonal and social rhythm therapy"],
    "terapiasEs": ["Psicoeducacion (fundamental)", "Terapia de ritmo social", "TCC adaptada para bipolar", "Terapia familiar"],
    "terapiasEn": ["Psychoeducation (fundamental)", "Social rhythm therapy", "CBT adapted for bipolar", "Family therapy"],
    "medicamentosComunes": ["Litio", "Valproato", "Lamotrigina", "Quetiapina", "Aripiprazol"],
    "estrategiasAutoayudaEs": ["Mantener horario de sueno estricto", "Monitorear cambios de humor diariamente", "Evitar alcohol y drogas completamente", "Tomar medicamentos sin interrupcion", "Identificar senales tempranas de mania"],
    "estrategiasAutoayudaEn": ["Maintain strict sleep schedule", "Monitor mood changes daily", "Avoid alcohol and drugs completely", "Take medications without interruption", "Identify early warning signs of mania"],
    "recursosApoyoEs": ["DBSA (Depression and Bipolar Support Alliance)", "NAMI (National Alliance on Mental Illness)", "988 linea de crisis"],
    "recursosApoyoEn": ["DBSA (Depression and Bipolar Support Alliance)", "NAMI (National Alliance on Mental Illness)", "988 crisis line"],
    "mitosRealidadesEs": ["Mito: Son solo cambios de humor normales. Realidad: Los episodios son severos y pueden durar semanas.", "Mito: No necesitan medicacion si se sienten bien. Realidad: Suspender medicamentos causa recaidas."],
    "mitosRealidadesEn": ["Myth: Just normal mood swings. Reality: Episodes are severe and can last weeks.", "Myth: Don't need medication if feeling well. Reality: Stopping medications causes relapses."],
    "cuandoBuscarAyudaEs": ["Episodio de no dormir por dias con conductas impulsivas", "Alternancia entre depresion severa y periodos de euforia", "Conductas de riesgo durante mania"],
    "cuandoBuscarAyudaEn": ["Episode of not sleeping for days with impulsive behaviors", "Alternating between severe depression and euphoria periods", "Risky behaviors during mania"],
    "afectaPoblacion": "2.8% de adultos (tipo I y II combinados)",
    "edadComun": "18-25 anos (primer episodio)"
  },
  {
    "id": "sm-toc",
    "nombreEs": "Trastorno Obsesivo-Compulsivo (TOC)",
    "nombreEn": "Obsessive-Compulsive Disorder (OCD)",
    "categoriaEs": "Trastornos Obsesivo-Compulsivos",
    "categoriaEn": "Obsessive-Compulsive Disorders",
    "descripcionEs": "Trastorno caracterizado por obsesiones (pensamientos intrusivos recurrentes) y compulsiones (comportamientos repetitivos para aliviar la ansiedad). Consume significativo tiempo diario y causa angustia marcada.",
    "descripcionEn": "Disorder characterized by obsessions (recurrent intrusive thoughts) and compulsions (repetitive behaviors to relieve anxiety). Consumes significant daily time and causes marked distress.",
    "sintomasEs": ["Obsesiones de contaminacion y lavado excesivo de manos", "Obsesiones de duda y verificacion repetida", "Necesidad de simetria y orden", "Pensamientos intrusivos inaceptables (agresivos, sexuales)", "Rituales que consumen >1 hora diaria"],
    "sintomasEn": ["Contamination obsessions and excessive hand washing", "Doubt obsessions and repeated checking", "Need for symmetry and order", "Unacceptable intrusive thoughts (aggressive, sexual)", "Rituals consuming >1 hour daily"],
    "causasFactoresEs": ["Disfuncion de circuitos cortico-estriado-talamo-corticales", "Componente genetico significativo", "Alteracion serotoninergica", "Factores ambientales y estres"],
    "causasFactoresEn": ["Cortico-striato-thalamo-cortical circuit dysfunction", "Significant genetic component", "Serotonergic alteration", "Environmental factors and stress"],
    "tratamientosEs": ["Exposicion con prevencion de respuesta (EPR) — gold standard", "ISRS a dosis altas (mayores que para depresion)", "Clomipramina si ISRS no funcionan", "Combinacion EPR + medicacion"],
    "tratamientosEn": ["Exposure and response prevention (ERP) — gold standard", "SSRIs at high doses (higher than for depression)", "Clomipramine if SSRIs fail", "Combination ERP + medication"],
    "terapiasEs": ["EPR (exposicion con prevencion de respuesta)", "TCC con componentes de EPR", "Terapia de grupo para TOC"],
    "terapiasEn": ["ERP (exposure and response prevention)", "CBT with ERP components", "Group therapy for OCD"],
    "medicamentosComunes": ["Fluoxetina (dosis altas)", "Fluvoxamina", "Sertralina", "Clomipramina"],
    "estrategiasAutoayudaEs": ["No realizar los rituales compulsivos (con guia terapeutica)", "Educarse sobre el TOC", "Ejercicio regular", "Llevar diario de obsesiones y compulsiones"],
    "estrategiasAutoayudaEn": ["Resist performing compulsive rituals (with therapeutic guidance)", "Educate yourself about OCD", "Regular exercise", "Keep diary of obsessions and compulsions"],
    "recursosApoyoEs": ["IOCDF (International OCD Foundation)", "Grupos de apoyo OCD"],
    "recursosApoyoEn": ["IOCDF (International OCD Foundation)", "OCD support groups"],
    "mitosRealidadesEs": ["Mito: TOC es solo ser ordenado. Realidad: Es un trastorno que causa sufrimiento severo.", "Mito: Es cuestion de voluntad. Realidad: Los circuitos cerebrales estan alterados."],
    "mitosRealidadesEn": ["Myth: OCD is just being neat. Reality: It's a disorder causing severe suffering.", "Myth: It's a matter of willpower. Reality: Brain circuits are altered."],
    "cuandoBuscarAyudaEs": ["Rituales que consumen mas de 1 hora al dia", "Incapacidad para funcionar normalmente", "Angustia significativa por los pensamientos intrusivos"],
    "cuandoBuscarAyudaEn": ["Rituals consuming more than 1 hour daily", "Inability to function normally", "Significant distress from intrusive thoughts"],
    "afectaPoblacion": "1.2% de adultos",
    "edadComun": "19 anos (edad media de inicio)"
  },
  {
    "id": "sm-esquizofrenia",
    "nombreEs": "Esquizofrenia",
    "nombreEn": "Schizophrenia",
    "categoriaEs": "Trastornos Psicoticos",
    "categoriaEn": "Psychotic Disorders",
    "descripcionEs": "Trastorno mental grave y cronico que afecta el pensamiento, percepcion y comportamiento. Se caracteriza por sintomas positivos (alucinaciones, delirios) y negativos (aplanamiento afectivo, aislamiento). Requiere tratamiento de por vida.",
    "descripcionEn": "Serious chronic mental disorder affecting thinking, perception, and behavior. Characterized by positive symptoms (hallucinations, delusions) and negative symptoms (flat affect, withdrawal). Requires lifelong treatment.",
    "sintomasEs": ["Alucinaciones (principalmente auditivas)", "Delirios (persecucion, grandiosidad)", "Pensamiento desorganizado", "Comportamiento catatonico o desorganizado", "Sintomas negativos: aplanamiento afectivo, alogia, abulia", "Deterioro cognitivo"],
    "sintomasEn": ["Hallucinations (primarily auditory)", "Delusions (persecution, grandiosity)", "Disorganized thinking", "Catatonic or disorganized behavior", "Negative symptoms: flat affect, alogia, avolition", "Cognitive deterioration"],
    "causasFactoresEs": ["Fuerte predisposicion genetica", "Alteracion dopaminergica y glutamatergica", "Complicaciones perinatales", "Uso de cannabis en adolescencia", "Estres psicosocial como desencadenante"],
    "causasFactoresEn": ["Strong genetic predisposition", "Dopaminergic and glutamatergic alteration", "Perinatal complications", "Cannabis use in adolescence", "Psychosocial stress as trigger"],
    "tratamientosEs": ["Antipsicoticos atipicos (primera linea)", "Clozapina para casos resistentes", "Rehabilitacion psicosocial", "Apoyo comunitario y empleo asistido", "Educacion familiar"],
    "tratamientosEn": ["Atypical antipsychotics (first line)", "Clozapine for resistant cases", "Psychosocial rehabilitation", "Community support and supported employment", "Family education"],
    "terapiasEs": ["Rehabilitacion cognitiva", "Entrenamiento en habilidades sociales", "Terapia familiar", "TCC para psicosis"],
    "terapiasEn": ["Cognitive rehabilitation", "Social skills training", "Family therapy", "CBT for psychosis"],
    "medicamentosComunes": ["Risperidona", "Olanzapina", "Aripiprazol", "Clozapina", "Paliperidona LAI"],
    "estrategiasAutoayudaEs": ["Tomar medicacion sin interrupcion", "Mantener rutina diaria estructurada", "Evitar drogas y alcohol completamente", "Identificar senales tempranas de recaida"],
    "estrategiasAutoayudaEn": ["Take medication without interruption", "Maintain structured daily routine", "Avoid drugs and alcohol completely", "Identify early signs of relapse"],
    "recursosApoyoEs": ["NAMI", "Programas de rehabilitacion psicosocial", "Grupos de apoyo para familias"],
    "recursosApoyoEn": ["NAMI", "Psychosocial rehabilitation programs", "Family support groups"],
    "mitosRealidadesEs": ["Mito: Las personas con esquizofrenia son violentas. Realidad: Son mas victimas que perpetradores de violencia.", "Mito: Es personalidad multiple. Realidad: Son trastornos completamente diferentes."],
    "mitosRealidadesEn": ["Myth: People with schizophrenia are violent. Reality: They are more victims than perpetrators of violence.", "Myth: It's multiple personality. Reality: Completely different disorders."],
    "cuandoBuscarAyudaEs": ["Escuchar voces o ver cosas que otros no ven", "Creencias firmemente sostenidas que no tienen base en la realidad", "Deterioro marcado en funcionamiento social y laboral"],
    "cuandoBuscarAyudaEn": ["Hearing voices or seeing things others don't see", "Firmly held beliefs with no basis in reality", "Marked deterioration in social and occupational functioning"],
    "afectaPoblacion": "1% de la poblacion mundial",
    "edadComun": "18-25 (hombres), 25-35 (mujeres)"
  },
  {
    "id": "sm-tdah-adultos",
    "nombreEs": "TDAH en Adultos",
    "nombreEn": "Adult ADHD",
    "categoriaEs": "Trastornos del Neurodesarrollo",
    "categoriaEn": "Neurodevelopmental Disorders",
    "descripcionEs": "Trastorno neurobiologico que persiste desde la infancia a la vida adulta en 50-60% de casos. Se manifiesta con dificultad para mantener atencion, hiperactividad interna e impulsividad que afectan el funcionamiento laboral y social.",
    "descripcionEn": "Neurobiological disorder persisting from childhood to adulthood in 50-60% of cases. Manifests with difficulty maintaining attention, internal hyperactivity, and impulsivity affecting occupational and social functioning.",
    "sintomasEs": ["Dificultad para concentrarse en tareas prolongadas", "Procrastinacion cronica", "Desorganizacion (perder objetos, olvidar citas)", "Inquietud interna o necesidad de movimiento", "Impulsividad en decisiones", "Dificultad para esperar turno en conversaciones"],
    "sintomasEn": ["Difficulty concentrating on prolonged tasks", "Chronic procrastination", "Disorganization (losing objects, forgetting appointments)", "Internal restlessness or need for movement", "Impulsivity in decisions", "Difficulty waiting turn in conversations"],
    "causasFactoresEs": ["Herencia genetica (76% de variabilidad)", "Alteracion de dopamina y norepinefrina prefrontal", "Diferencias estructurales cerebrales", "Nacimiento prematuro o bajo peso"],
    "causasFactoresEn": ["Genetic inheritance (76% of variability)", "Prefrontal dopamine and norepinephrine alteration", "Structural brain differences", "Premature birth or low birth weight"],
    "tratamientosEs": ["Estimulantes (metilfenidato, anfetaminas) — primera linea", "No estimulantes (atomoxetina, guanfacina)", "TCC adaptada para TDAH", "Coaching para TDAH", "Estrategias organizativas"],
    "tratamientosEn": ["Stimulants (methylphenidate, amphetamines) — first line", "Non-stimulants (atomoxetine, guanfacine)", "CBT adapted for ADHD", "ADHD coaching", "Organizational strategies"],
    "terapiasEs": ["TCC para TDAH adulto", "Coaching especializado", "Entrenamiento en habilidades organizativas"],
    "terapiasEn": ["CBT for adult ADHD", "Specialized coaching", "Organizational skills training"],
    "medicamentosComunes": ["Metilfenidato", "Lisdexanfetamina", "Atomoxetina", "Guanfacina"],
    "estrategiasAutoayudaEs": ["Usar agenda y alarmas", "Dividir tareas grandes en pasos pequenos", "Ejercicio aerobico diario", "Ambiente de trabajo sin distracciones", "Rutinas predecibles"],
    "estrategiasAutoayudaEn": ["Use planner and alarms", "Break large tasks into small steps", "Daily aerobic exercise", "Distraction-free work environment", "Predictable routines"],
    "recursosApoyoEs": ["CHADD (Children and Adults with ADHD)", "Grupos de apoyo para adultos con TDAH"],
    "recursosApoyoEn": ["CHADD (Children and Adults with ADHD)", "Support groups for adults with ADHD"],
    "mitosRealidadesEs": ["Mito: El TDAH solo existe en ninos. Realidad: Persiste en adultos en 50-60% de casos.", "Mito: Es falta de disciplina. Realidad: Es una diferencia neurobiologica."],
    "mitosRealidadesEn": ["Myth: ADHD only exists in children. Reality: Persists in adults in 50-60% of cases.", "Myth: It's lack of discipline. Reality: It's a neurobiological difference."],
    "cuandoBuscarAyudaEs": ["Bajo rendimiento laboral persistente pese a esfuerzo", "Problemas de relaciones por impulsividad o desatencion", "Historia de TDAH en la infancia con problemas actuales"],
    "cuandoBuscarAyudaEn": ["Persistent low work performance despite effort", "Relationship problems from impulsivity or inattention", "Childhood ADHD history with current problems"],
    "afectaPoblacion": "4.4% de adultos",
    "edadComun": "Diagnostico en adultos tipicamente 30-40 anos"
  },
  {
    "id": "sm-anorexia",
    "nombreEs": "Anorexia Nerviosa",
    "nombreEn": "Anorexia Nervosa",
    "categoriaEs": "Trastornos de Conducta Alimentaria",
    "categoriaEn": "Eating Disorders",
    "descripcionEs": "Trastorno alimentario grave con restriccion extrema de ingesta calorica, miedo intenso a ganar peso y distorsion de la imagen corporal. Tiene la tasa de mortalidad mas alta de todos los trastornos psiquiatricos.",
    "descripcionEn": "Severe eating disorder with extreme caloric intake restriction, intense fear of gaining weight, and body image distortion. Has the highest mortality rate of all psychiatric disorders.",
    "sintomasEs": ["Restriccion severa de alimentos", "Peso significativamente bajo (IMC <17.5)", "Miedo intenso a engordar pese a estar delgado", "Distorsion de imagen corporal", "Amenorrea (perdida de menstruacion)", "Ejercicio excesivo compulsivo"],
    "sintomasEn": ["Severe food restriction", "Significantly low weight (BMI <17.5)", "Intense fear of gaining weight despite being thin", "Body image distortion", "Amenorrhea (loss of menstruation)", "Excessive compulsive exercise"],
    "causasFactoresEs": ["Factores geneticos y biologicos", "Presion cultural por delgadez", "Perfeccionismo y baja autoestima", "Trauma o abuso", "Deportes o actividades que enfatizan peso"],
    "causasFactoresEn": ["Genetic and biological factors", "Cultural pressure for thinness", "Perfectionism and low self-esteem", "Trauma or abuse", "Sports or activities emphasizing weight"],
    "tratamientosEs": ["Rehabilitacion nutricional (prioridad)", "Terapia basada en familia (Maudsley) para adolescentes", "TCC mejorada (TCC-E) para adultos", "Hospitalizacion si hay inestabilidad medica", "Tratamiento de complicaciones medicas"],
    "tratamientosEn": ["Nutritional rehabilitation (priority)", "Family-based therapy (Maudsley) for adolescents", "Enhanced CBT (CBT-E) for adults", "Hospitalization if medically unstable", "Treatment of medical complications"],
    "terapiasEs": ["TCC-E", "Terapia basada en familia", "Terapia de aceptacion y compromiso"],
    "terapiasEn": ["CBT-E", "Family-based therapy", "Acceptance and commitment therapy"],
    "medicamentosComunes": ["Olanzapina (evidencia limitada para ganancia de peso)", "ISRS para comorbilidades ansiosas/depresivas"],
    "estrategiasAutoayudaEs": ["Aceptar que es una enfermedad, no una eleccion", "Seguir plan de alimentacion con nutriologo", "Evitar redes sociales toxicas sobre imagen corporal"],
    "estrategiasAutoayudaEn": ["Accept it's an illness, not a choice", "Follow meal plan with nutritionist", "Avoid toxic social media about body image"],
    "recursosApoyoEs": ["NEDA (National Eating Disorders Association): 1-800-931-2237", "Grupos de apoyo para trastornos alimentarios"],
    "recursosApoyoEn": ["NEDA (National Eating Disorders Association): 1-800-931-2237", "Eating disorders support groups"],
    "mitosRealidadesEs": ["Mito: Solo afecta a mujeres jovenes. Realidad: Afecta a todos los generos y edades.", "Mito: Es vanidad. Realidad: Es una enfermedad mental seria con base biologica."],
    "mitosRealidadesEn": ["Myth: Only affects young women. Reality: Affects all genders and ages.", "Myth: It's vanity. Reality: It's a serious mental illness with biological basis."],
    "cuandoBuscarAyudaEs": ["Perdida de peso rapida o significativa", "Obsesion con comida, calorias y peso", "Desmayos, palpitaciones o debilidad extrema"],
    "cuandoBuscarAyudaEn": ["Rapid or significant weight loss", "Obsession with food, calories and weight", "Fainting, palpitations or extreme weakness"],
    "afectaPoblacion": "0.3-1% de mujeres, 0.1% de hombres",
    "edadComun": "15-19 anos"
  },
  {
    "id": "sm-fobia-social",
    "nombreEs": "Trastorno de Ansiedad Social (Fobia Social)",
    "nombreEn": "Social Anxiety Disorder (Social Phobia)",
    "categoriaEs": "Trastornos de Ansiedad",
    "categoriaEn": "Anxiety Disorders",
    "descripcionEs": "Miedo intenso y persistente a situaciones sociales donde la persona puede ser observada, evaluada o juzgada. Va mucho mas alla de la timidez normal y causa evitacion significativa de situaciones sociales.",
    "descripcionEn": "Intense persistent fear of social situations where the person may be observed, evaluated, or judged. Goes far beyond normal shyness and causes significant avoidance of social situations.",
    "sintomasEs": ["Miedo intenso a ser juzgado o humillado", "Evitacion de hablar en publico, comer frente a otros", "Ansiedad anticipatoria dias antes de eventos sociales", "Ruborizarse, sudar, temblar en situaciones sociales", "Nauseas o voz temblorosa al hablar"],
    "sintomasEn": ["Intense fear of being judged or humiliated", "Avoidance of public speaking, eating in front of others", "Anticipatory anxiety days before social events", "Blushing, sweating, trembling in social situations", "Nausea or shaky voice when speaking"],
    "causasFactoresEs": ["Predisposicion genetica", "Amigdala hiperactiva", "Experiencias de bullying o humillacion", "Estilo de crianza sobreprotector", "Temperamento inhibido en la infancia"],
    "causasFactoresEn": ["Genetic predisposition", "Hyperactive amygdala", "Bullying or humiliation experiences", "Overprotective parenting style", "Inhibited childhood temperament"],
    "tratamientosEs": ["TCC con exposicion gradual", "ISRS (paroxetina, sertralina)", "Entrenamiento en habilidades sociales", "Beta-bloqueadores para ansiedad de rendimiento"],
    "tratamientosEn": ["CBT with gradual exposure", "SSRIs (paroxetine, sertraline)", "Social skills training", "Beta-blockers for performance anxiety"],
    "terapiasEs": ["TCC con exposicion", "Terapia de grupo", "Entrenamiento en habilidades sociales"],
    "terapiasEn": ["CBT with exposure", "Group therapy", "Social skills training"],
    "medicamentosComunes": ["Paroxetina", "Sertralina", "Venlafaxina", "Propranolol (situacional)"],
    "estrategiasAutoayudaEs": ["Exposicion gradual a situaciones sociales temidas", "Desafiar pensamientos negativos automaticos", "Practicar habilidades sociales", "Reducir conductas de seguridad"],
    "estrategiasAutoayudaEn": ["Gradual exposure to feared social situations", "Challenge automatic negative thoughts", "Practice social skills", "Reduce safety behaviors"],
    "recursosApoyoEs": ["ADAA (Anxiety and Depression Association of America)", "Grupos de terapia para ansiedad social"],
    "recursosApoyoEn": ["ADAA (Anxiety and Depression Association of America)", "Social anxiety therapy groups"],
    "mitosRealidadesEs": ["Mito: Es solo timidez. Realidad: Es un trastorno incapacitante que limita oportunidades.", "Mito: Se supera con la edad. Realidad: Sin tratamiento tiende a cronificarse."],
    "mitosRealidadesEn": ["Myth: It's just shyness. Reality: It's a debilitating disorder limiting opportunities.", "Myth: It goes away with age. Reality: Without treatment it tends to become chronic."],
    "cuandoBuscarAyudaEs": ["Evitacion de situaciones sociales que limita trabajo o educacion", "Aislamiento social progresivo", "Uso de alcohol para enfrentar situaciones sociales"],
    "cuandoBuscarAyudaEn": ["Avoidance of social situations limiting work or education", "Progressive social isolation", "Using alcohol to face social situations"],
    "afectaPoblacion": "7% de adultos",
    "edadComun": "13 anos (edad media de inicio)"
  },
  {
    "id": "sm-insomnio",
    "nombreEs": "Insomnio Cronico",
    "nombreEn": "Chronic Insomnia",
    "categoriaEs": "Trastornos del Sueno",
    "categoriaEn": "Sleep Disorders",
    "descripcionEs": "Dificultad para iniciar o mantener el sueno, o despertar temprano sin poder volver a dormir, al menos 3 noches por semana durante 3 meses. Afecta significativamente el funcionamiento diurno y aumenta riesgo de depresion y ansiedad.",
    "descripcionEn": "Difficulty initiating or maintaining sleep, or early awakening without being able to fall back asleep, at least 3 nights per week for 3 months. Significantly affects daytime functioning and increases depression and anxiety risk.",
    "sintomasEs": ["Dificultad para conciliar el sueno (>30 min)", "Despertares nocturnos frecuentes", "Despertar muy temprano sin poder dormir mas", "Fatiga diurna y somnolencia", "Irritabilidad y dificultad para concentrarse"],
    "sintomasEn": ["Difficulty falling asleep (>30 min)", "Frequent nighttime awakenings", "Early morning awakening unable to sleep more", "Daytime fatigue and sleepiness", "Irritability and difficulty concentrating"],
    "causasFactoresEs": ["Hiperalerta del sistema nervioso", "Malos habitos de sueno", "Estres y preocupaciones", "Depresion y ansiedad comorbida", "Dolor cronico"],
    "causasFactoresEn": ["Nervous system hyperarousal", "Poor sleep habits", "Stress and worries", "Comorbid depression and anxiety", "Chronic pain"],
    "tratamientosEs": ["TCC para insomnio (TCC-I) — primera linea", "Restriccion de sueno", "Control de estimulos", "Higiene del sueno", "Medicamentos solo a corto plazo si necesario"],
    "tratamientosEn": ["CBT for insomnia (CBT-I) — first line", "Sleep restriction", "Stimulus control", "Sleep hygiene", "Medications only short-term if necessary"],
    "terapiasEs": ["TCC-I (terapia cognitivo-conductual para insomnio)", "Restriccion de tiempo en cama", "Control de estimulos"],
    "terapiasEn": ["CBT-I (cognitive behavioral therapy for insomnia)", "Sleep time restriction", "Stimulus control"],
    "medicamentosComunes": ["Zolpidem (corto plazo)", "Suvorexant", "Melatonina", "Trazodona (dosis baja)"],
    "estrategiasAutoayudaEs": ["Horario fijo de dormir y despertar", "No pantallas 1 hora antes de dormir", "Habitacion oscura, fresca y silenciosa", "No cafeina despues de las 2pm", "No siestas largas durante el dia"],
    "estrategiasAutoayudaEn": ["Fixed sleep and wake schedule", "No screens 1 hour before bed", "Dark, cool, quiet bedroom", "No caffeine after 2pm", "No long daytime naps"],
    "recursosApoyoEs": ["Apps de meditacion para dormir", "Programas de TCC-I en linea"],
    "recursosApoyoEn": ["Sleep meditation apps", "Online CBT-I programs"],
    "mitosRealidadesEs": ["Mito: Los somniferos son la solucion. Realidad: La TCC-I es mas efectiva a largo plazo.", "Mito: Solo necesitas 5 horas. Realidad: La mayoria de adultos necesita 7-9 horas."],
    "mitosRealidadesEn": ["Myth: Sleeping pills are the solution. Reality: CBT-I is more effective long-term.", "Myth: You only need 5 hours. Reality: Most adults need 7-9 hours."],
    "cuandoBuscarAyudaEs": ["Dificultad para dormir que dura mas de 3 meses", "Somnolencia diurna que afecta trabajo o conduccion", "Uso regular de alcohol o medicamentos para dormir"],
    "cuandoBuscarAyudaEn": ["Sleep difficulty lasting more than 3 months", "Daytime sleepiness affecting work or driving", "Regular use of alcohol or medications to sleep"],
    "afectaPoblacion": "10-15% de adultos (cronico)",
    "edadComun": "Aumenta con la edad, mas comun en mujeres"
  },
  {
    "id": "sm-adiccion-sustancias",
    "nombreEs": "Trastorno por Uso de Sustancias",
    "nombreEn": "Substance Use Disorder",
    "categoriaEs": "Trastornos por Uso de Sustancias",
    "categoriaEn": "Substance Use Disorders",
    "descripcionEs": "Patron desadaptativo de uso de sustancias que lleva a deterioro o malestar clinicamente significativo. Se caracteriza por perdida de control, tolerancia, abstinencia y continuacion del uso pese a consecuencias negativas.",
    "descripcionEn": "Maladaptive pattern of substance use leading to clinically significant impairment or distress. Characterized by loss of control, tolerance, withdrawal, and continued use despite negative consequences.",
    "sintomasEs": ["Deseo intenso o necesidad de consumir (craving)", "Incapacidad de reducir o controlar el uso", "Tolerancia: necesidad de mas cantidad para el mismo efecto", "Sintomas de abstinencia al dejar", "Abandono de actividades sociales o laborales por el uso", "Uso continuado pese a problemas de salud o legales"],
    "sintomasEn": ["Intense desire or need to consume (craving)", "Inability to reduce or control use", "Tolerance: need for more for same effect", "Withdrawal symptoms when stopping", "Abandonment of social or work activities due to use", "Continued use despite health or legal problems"],
    "causasFactoresEs": ["Predisposicion genetica (40-60%)", "Alteracion del sistema de recompensa cerebral", "Trauma o adversidad en la infancia", "Trastornos mentales comorbidos", "Presion social y disponibilidad"],
    "causasFactoresEn": ["Genetic predisposition (40-60%)", "Brain reward system alteration", "Childhood trauma or adversity", "Comorbid mental disorders", "Social pressure and availability"],
    "tratamientosEs": ["Desintoxicacion medica supervisada", "Terapia motivacional", "TCC para prevencion de recaidas", "Medicamentos asistidos (naltrexona, buprenorfina, metadona)", "Programas de 12 pasos", "Comunidades terapeuticas"],
    "tratamientosEn": ["Supervised medical detoxification", "Motivational therapy", "CBT for relapse prevention", "Medication-assisted treatment (naltrexone, buprenorphine, methadone)", "12-step programs", "Therapeutic communities"],
    "terapiasEs": ["Entrevista motivacional", "TCC para adicciones", "Manejo de contingencias", "Terapia familiar"],
    "terapiasEn": ["Motivational interviewing", "CBT for addictions", "Contingency management", "Family therapy"],
    "medicamentosComunes": ["Naltrexona (alcohol/opioides)", "Buprenorfina (opioides)", "Metadona (opioides)", "Acamprosato (alcohol)", "Vareniclina (tabaco)"],
    "estrategiasAutoayudaEs": ["Asistir a grupos de apoyo (AA, NA)", "Identificar y evitar desencadenantes", "Desarrollar red de apoyo sobria", "Actividades saludables de reemplazo"],
    "estrategiasAutoayudaEn": ["Attend support groups (AA, NA)", "Identify and avoid triggers", "Develop sober support network", "Healthy replacement activities"],
    "recursosApoyoEs": ["SAMHSA: 1-800-662-4357", "AA (Alcoholicos Anonimos)", "NA (Narcoticos Anonimos)"],
    "recursosApoyoEn": ["SAMHSA: 1-800-662-4357", "AA (Alcoholics Anonymous)", "NA (Narcotics Anonymous)"],
    "mitosRealidadesEs": ["Mito: Es falta de voluntad. Realidad: Es una enfermedad cronica del cerebro.", "Mito: Tocar fondo es necesario. Realidad: El tratamiento temprano es mas efectivo."],
    "mitosRealidadesEn": ["Myth: It's lack of willpower. Reality: It's a chronic brain disease.", "Myth: Hitting rock bottom is necessary. Reality: Early treatment is more effective."],
    "cuandoBuscarAyudaEs": ["Incapacidad de dejar de usar pese a intentarlo", "Problemas legales, laborales o familiares por el uso", "Sintomas de abstinencia al intentar dejar"],
    "cuandoBuscarAyudaEn": ["Inability to stop using despite trying", "Legal, work, or family problems from use", "Withdrawal symptoms when trying to quit"],
    "lineaCrisis": "SAMHSA: 1-800-662-4357",
    "afectaPoblacion": "20+ millones en EE.UU.",
    "edadComun": "18-25 anos (mayor prevalencia de uso)"
  }
]`);

const tecnicasBienestar: TecnicaBienestar[] = JSON.parse(`[
  {
    "id": "tb-mindfulness",
    "nombreEs": "Meditacion Mindfulness",
    "nombreEn": "Mindfulness Meditation",
    "descripcionEs": "Practica de atencion plena al momento presente sin juicio. Reduce la reactividad emocional y mejora la regulacion del estres mediante la observacion consciente de pensamientos y sensaciones.",
    "descripcionEn": "Practice of full attention to the present moment without judgment. Reduces emotional reactivity and improves stress regulation through conscious observation of thoughts and sensations.",
    "pasosEs": ["Sentarse comodamente con espalda recta", "Cerrar los ojos y enfocarse en la respiracion", "Observar pensamientos sin juzgarlos ni seguirlos", "Redirigir atencion a la respiracion cuando la mente divague", "Comenzar con 5 minutos e ir aumentando gradualmente"],
    "pasosEn": ["Sit comfortably with straight back", "Close eyes and focus on breathing", "Observe thoughts without judging or following them", "Redirect attention to breathing when mind wanders", "Start with 5 minutes and gradually increase"],
    "duracion": "10-30 minutos diarios",
    "evidenciaEs": "Evidencia fuerte: reduce ansiedad, depresion y estres. Meta-analisis muestran efectos moderados a grandes.",
    "evidenciaEn": "Strong evidence: reduces anxiety, depression and stress. Meta-analyses show moderate to large effects.",
    "paraQueCondiciones": ["sm-depresion-mayor", "sm-ansiedad-generalizada", "sm-insomnio", "sm-tept"],
    "categoria": "Meditacion"
  },
  {
    "id": "tb-respiracion-diafragmatica",
    "nombreEs": "Respiracion Diafragmatica",
    "nombreEn": "Diaphragmatic Breathing",
    "descripcionEs": "Tecnica de respiracion profunda que activa el sistema nervioso parasimpatico, reduciendo la respuesta de lucha o huida. Es la herramienta mas rapida para calmar la ansiedad aguda.",
    "descripcionEn": "Deep breathing technique that activates the parasympathetic nervous system, reducing the fight-or-flight response. It is the fastest tool for calming acute anxiety.",
    "pasosEs": ["Colocar una mano en el pecho y otra en el abdomen", "Inhalar lentamente por la nariz contando hasta 4 (el abdomen sube)", "Sostener la respiracion contando hasta 2", "Exhalar lentamente por la boca contando hasta 6", "Repetir 5-10 ciclos"],
    "pasosEn": ["Place one hand on chest and another on abdomen", "Inhale slowly through nose counting to 4 (abdomen rises)", "Hold breath counting to 2", "Exhale slowly through mouth counting to 6", "Repeat 5-10 cycles"],
    "duracion": "3-5 minutos (efecto inmediato)",
    "evidenciaEs": "Evidencia fuerte: activa el nervio vago y reduce cortisol. Eficaz para ataques de panico.",
    "evidenciaEn": "Strong evidence: activates vagus nerve and reduces cortisol. Effective for panic attacks.",
    "paraQueCondiciones": ["sm-trastorno-panico", "sm-ansiedad-generalizada", "sm-tept"],
    "categoria": "Respiracion"
  },
  {
    "id": "tb-relajacion-muscular-progresiva",
    "nombreEs": "Relajacion Muscular Progresiva",
    "nombreEn": "Progressive Muscle Relaxation",
    "descripcionEs": "Tecnica que consiste en tensar y relajar sistematicamente grupos musculares para reducir la tension fisica asociada a la ansiedad y el estres. Desarrollada por Edmund Jacobson.",
    "descripcionEn": "Technique involving systematically tensing and relaxing muscle groups to reduce physical tension associated with anxiety and stress. Developed by Edmund Jacobson.",
    "pasosEs": ["Acostarse o sentarse comodamente", "Comenzar por los pies: tensar musculos 5 segundos", "Relajar y notar la diferencia por 15 segundos", "Subir al siguiente grupo muscular (pantorrillas, muslos, etc.)", "Completar todo el cuerpo hasta la cara"],
    "pasosEn": ["Lie down or sit comfortably", "Start with feet: tense muscles for 5 seconds", "Relax and notice the difference for 15 seconds", "Move to next muscle group (calves, thighs, etc.)", "Complete entire body up to face"],
    "duracion": "15-20 minutos",
    "evidenciaEs": "Evidencia moderada-fuerte para reduccion de ansiedad, insomnio y tension muscular cronica.",
    "evidenciaEn": "Moderate-strong evidence for reduction of anxiety, insomnia, and chronic muscle tension.",
    "paraQueCondiciones": ["sm-ansiedad-generalizada", "sm-insomnio", "sm-trastorno-panico"],
    "categoria": "Relajacion"
  },
  {
    "id": "tb-grounding-54321",
    "nombreEs": "Tecnica de Grounding 5-4-3-2-1",
    "nombreEn": "5-4-3-2-1 Grounding Technique",
    "descripcionEs": "Tecnica de anclaje sensorial que ayuda a reconectarse con el presente durante episodios de ansiedad, panico o disociacion. Usa los cinco sentidos para distraer de pensamientos angustiantes.",
    "descripcionEn": "Sensory grounding technique that helps reconnect with the present during episodes of anxiety, panic, or dissociation. Uses five senses to distract from distressing thoughts.",
    "pasosEs": ["Identificar 5 cosas que puedes VER", "Identificar 4 cosas que puedes TOCAR", "Identificar 3 cosas que puedes OIR", "Identificar 2 cosas que puedes OLER", "Identificar 1 cosa que puedes SABOREAR"],
    "pasosEn": ["Identify 5 things you can SEE", "Identify 4 things you can TOUCH", "Identify 3 things you can HEAR", "Identify 2 things you can SMELL", "Identify 1 thing you can TASTE"],
    "duracion": "2-5 minutos",
    "evidenciaEs": "Evidencia moderada: ampliamente recomendada para TEPT, disociacion y ataques de panico.",
    "evidenciaEn": "Moderate evidence: widely recommended for PTSD, dissociation, and panic attacks.",
    "paraQueCondiciones": ["sm-tept", "sm-trastorno-panico", "sm-ansiedad-generalizada"],
    "categoria": "Grounding"
  },
  {
    "id": "tb-ejercicio-fisico",
    "nombreEs": "Ejercicio Fisico como Tratamiento",
    "nombreEn": "Exercise as Treatment",
    "descripcionEs": "El ejercicio aerobico regular tiene efectos antidepresivos y ansioliticos comparables a medicamentos en casos leves-moderados. Aumenta endorfinas, serotonina y BDNF (factor neurotrofico).",
    "descripcionEn": "Regular aerobic exercise has antidepressant and anxiolytic effects comparable to medications in mild-moderate cases. Increases endorphins, serotonin, and BDNF (neurotrophic factor).",
    "pasosEs": ["Elegir actividad que disfrutes (caminar, nadar, bicicleta)", "Comenzar con 15 minutos 3 veces por semana", "Aumentar gradualmente a 30-45 minutos 5 veces por semana", "Mantener intensidad moderada (puedes hablar pero no cantar)", "Ser consistente — la regularidad importa mas que la intensidad"],
    "pasosEn": ["Choose an activity you enjoy (walking, swimming, cycling)", "Start with 15 minutes 3 times per week", "Gradually increase to 30-45 minutes 5 times per week", "Maintain moderate intensity (can talk but not sing)", "Be consistent — regularity matters more than intensity"],
    "duracion": "30-45 minutos, 5 veces por semana",
    "evidenciaEs": "Evidencia fuerte: equivalente a ISRS para depresion leve-moderada. Reduce ansiedad y mejora sueno.",
    "evidenciaEn": "Strong evidence: equivalent to SSRIs for mild-moderate depression. Reduces anxiety and improves sleep.",
    "paraQueCondiciones": ["sm-depresion-mayor", "sm-ansiedad-generalizada", "sm-insomnio", "sm-tdah-adultos"],
    "categoria": "Ejercicio"
  },
  {
    "id": "tb-higiene-sueno",
    "nombreEs": "Higiene del Sueno",
    "nombreEn": "Sleep Hygiene",
    "descripcionEs": "Conjunto de practicas y habitos que promueven un sueno reparador. Es la base del tratamiento para insomnio y mejora la salud mental general al optimizar la calidad y duracion del sueno.",
    "descripcionEn": "Set of practices and habits promoting restorative sleep. It is the foundation of insomnia treatment and improves general mental health by optimizing sleep quality and duration.",
    "pasosEs": ["Horario fijo: dormir y despertar a la misma hora incluyendo fines de semana", "No cafeina despues de las 2pm", "No pantallas 1 hora antes de dormir (luz azul suprime melatonina)", "Habitacion: oscura, fresca (18-20C) y silenciosa", "Cama solo para dormir y actividad sexual", "No mirar el reloj durante la noche"],
    "pasosEn": ["Fixed schedule: sleep and wake at same time including weekends", "No caffeine after 2pm", "No screens 1 hour before bed (blue light suppresses melatonin)", "Bedroom: dark, cool (65-68F) and quiet", "Bed only for sleep and sexual activity", "Do not watch the clock during night"],
    "duracion": "Practica diaria continua",
    "evidenciaEs": "Evidencia moderada como componente de TCC-I. Mejora calidad del sueno en 2-4 semanas.",
    "evidenciaEn": "Moderate evidence as CBT-I component. Improves sleep quality in 2-4 weeks.",
    "paraQueCondiciones": ["sm-insomnio", "sm-depresion-mayor", "sm-ansiedad-generalizada"],
    "categoria": "Sueno"
  },
  {
    "id": "tb-journaling",
    "nombreEs": "Journaling Terapeutico",
    "nombreEn": "Therapeutic Journaling",
    "descripcionEs": "Escritura expresiva estructurada que ayuda a procesar emociones, identificar patrones de pensamiento y ganar perspectiva. Puede ser escritura libre o dirigida con preguntas especificas.",
    "descripcionEn": "Structured expressive writing that helps process emotions, identify thought patterns, and gain perspective. Can be free writing or directed with specific prompts.",
    "pasosEs": ["Reservar 15-20 minutos diarios", "Escribir sin censurar ni preocuparse por la gramatica", "Explorar pensamientos y emociones honestamente", "Identificar patrones recurrentes", "Escribir 3 cosas de gratitud al final"],
    "pasosEn": ["Set aside 15-20 minutes daily", "Write without censoring or worrying about grammar", "Explore thoughts and emotions honestly", "Identify recurring patterns", "Write 3 gratitude items at the end"],
    "duracion": "15-20 minutos diarios",
    "evidenciaEs": "Evidencia moderada: reduce sintomas depresivos y ansiosos. El journaling de gratitud mejora bienestar.",
    "evidenciaEn": "Moderate evidence: reduces depressive and anxious symptoms. Gratitude journaling improves wellbeing.",
    "paraQueCondiciones": ["sm-depresion-mayor", "sm-tept", "sm-ansiedad-generalizada"],
    "categoria": "Escritura Expresiva"
  },
  {
    "id": "tb-reestructuracion-cognitiva",
    "nombreEs": "Reestructuracion Cognitiva",
    "nombreEn": "Cognitive Restructuring",
    "descripcionEs": "Tecnica de TCC que identifica y modifica pensamientos distorsionados o irracionales. Reemplaza interpretaciones catastroficas por pensamientos mas equilibrados y realistas.",
    "descripcionEn": "CBT technique that identifies and modifies distorted or irrational thoughts. Replaces catastrophic interpretations with more balanced and realistic thoughts.",
    "pasosEs": ["Identificar la situacion que causa malestar", "Registrar el pensamiento automatico negativo", "Identificar la distorsion cognitiva (catastrofizacion, todo-o-nada, etc.)", "Buscar evidencia a favor y en contra del pensamiento", "Formular un pensamiento alternativo mas equilibrado"],
    "pasosEn": ["Identify the distressing situation", "Record the negative automatic thought", "Identify the cognitive distortion (catastrophizing, all-or-nothing, etc.)", "Look for evidence for and against the thought", "Formulate a more balanced alternative thought"],
    "duracion": "10-15 minutos por ejercicio",
    "evidenciaEs": "Evidencia fuerte: componente central de TCC. Reduce depresion, ansiedad y manejo de ira.",
    "evidenciaEn": "Strong evidence: core CBT component. Reduces depression, anxiety, and anger management.",
    "paraQueCondiciones": ["sm-depresion-mayor", "sm-ansiedad-generalizada", "sm-fobia-social", "sm-trastorno-panico"],
    "categoria": "Cognitiva"
  },
  {
    "id": "tb-yoga-terapeutico",
    "nombreEs": "Yoga Terapeutico",
    "nombreEn": "Therapeutic Yoga",
    "descripcionEs": "Practica que combina posturas fisicas, respiracion controlada y meditacion. Reduce el cortisol, aumenta el GABA y mejora la regulacion del sistema nervioso autonomo.",
    "descripcionEn": "Practice combining physical postures, controlled breathing, and meditation. Reduces cortisol, increases GABA, and improves autonomic nervous system regulation.",
    "pasosEs": ["Comenzar con clases para principiantes (Hatha yoga)", "Practicar 2-3 veces por semana", "Enfocarse en la respiracion durante las posturas", "No forzar posturas — respetar limites del cuerpo", "Incluir savasana (relajacion final) siempre"],
    "pasosEn": ["Start with beginner classes (Hatha yoga)", "Practice 2-3 times per week", "Focus on breathing during postures", "Do not force postures — respect body limits", "Always include savasana (final relaxation)"],
    "duracion": "30-60 minutos, 2-3 veces por semana",
    "evidenciaEs": "Evidencia moderada: reduce ansiedad y depresion. Especialmente util para TEPT y estres cronico.",
    "evidenciaEn": "Moderate evidence: reduces anxiety and depression. Especially useful for PTSD and chronic stress.",
    "paraQueCondiciones": ["sm-ansiedad-generalizada", "sm-tept", "sm-depresion-mayor", "sm-insomnio"],
    "categoria": "Cuerpo-Mente"
  },
  {
    "id": "tb-activacion-conductual",
    "nombreEs": "Planificacion de Actividades Agradables",
    "nombreEn": "Pleasant Activity Scheduling",
    "descripcionEs": "Tecnica de activacion conductual que programa actividades placenteras y con proposito para romper el ciclo de inactividad y bajo animo de la depresion. No esperar a tener ganas — actuar primero.",
    "descripcionEn": "Behavioral activation technique that schedules pleasant and purposeful activities to break the cycle of inactivity and low mood in depression. Do not wait to feel like it — act first.",
    "pasosEs": ["Hacer lista de actividades que antes eran placenteras", "Programar al menos 1 actividad agradable diaria", "Calificar estado de animo antes y despues (0-10)", "Aumentar gradualmente actividades", "No esperar motivacion — la motivacion sigue a la accion"],
    "pasosEn": ["Make list of previously pleasant activities", "Schedule at least 1 pleasant activity daily", "Rate mood before and after (0-10)", "Gradually increase activities", "Do not wait for motivation — motivation follows action"],
    "duracion": "Practica diaria continua",
    "evidenciaEs": "Evidencia fuerte: la activacion conductual es tan efectiva como TCC completa para depresion.",
    "evidenciaEn": "Strong evidence: behavioral activation is as effective as full CBT for depression.",
    "paraQueCondiciones": ["sm-depresion-mayor", "sm-ansiedad-generalizada"],
    "categoria": "Conductual"
  }
]`);

export { saludMentalCondiciones, tecnicasBienestar };

// -----------------------------------------------------------------------------
// HELPER FUNCTIONS
// -----------------------------------------------------------------------------

export function buscarSaludMental(query: string): SaludMentalEntry[] {
  const q = query.toLowerCase();
  return saludMentalCondiciones.filter(c =>
    c.nombreEs.toLowerCase().includes(q) ||
    c.nombreEn.toLowerCase().includes(q) ||
    c.categoriaEs.toLowerCase().includes(q) ||
    c.categoriaEn.toLowerCase().includes(q) ||
    c.descripcionEs.toLowerCase().includes(q) ||
    c.descripcionEn.toLowerCase().includes(q)
  );
}

export function getSaludMentalById(id: string): SaludMentalEntry | undefined {
  return saludMentalCondiciones.find(c => c.id === id);
}

export function getSaludMentalPorCategoria(cat: string): SaludMentalEntry[] {
  const q = cat.toLowerCase();
  return saludMentalCondiciones.filter(c =>
    c.categoriaEs.toLowerCase().includes(q) ||
    c.categoriaEn.toLowerCase().includes(q)
  );
}

export function getTecnicasBienestar(): TecnicaBienestar[] {
  return tecnicasBienestar;
}

export function getTecnicasPorCondicion(condicionId: string): TecnicaBienestar[] {
  return tecnicasBienestar.filter(t => t.paraQueCondiciones.includes(condicionId));
}
