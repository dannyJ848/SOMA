/**
 * SOMA Dental Encyclopedia - Enciclopedia Dental
 * Spanish-first bilingual dental and oral health education content
 * 30 comprehensive entries covering dental conditions, prevention, and treatment
 *
 * Uses JSON.parse() pattern to avoid TS2590 "Expression produces a union type
 * that is too complex to represent" errors with large literal arrays.
 */

// ─── Interface ───────────────────────────────────────────────────────────────

export interface DentalEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  categoriaEs: string;
  categoriaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  causasEs: string[];
  causasEn: string[];
  tratamientoEs: string[];
  tratamientoEn: string[];
  prevencionEs: string[];
  prevencionEn: string[];
  cuandoVerDentistaEs: string[];
  cuandoVerDentistaEn: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const dentalEnciclopedia: DentalEntry[] = JSON.parse(`[
  {
    "id": "caries-dental",
    "nombreEs": "Caries Dental",
    "nombreEn": "Dental Cavities (Tooth Decay)",
    "categoriaEs": "Condiciones Comunes",
    "categoriaEn": "Common Conditions",
    "descripcionEs": "Las caries dentales son zonas danadas permanentemente en la superficie dura de los dientes que se convierten en pequenas aberturas u orificios. Son causadas por bacterias, consumo frecuente de azucares y falta de higiene bucal adecuada. Son una de las afecciones de salud mas comunes en el mundo.",
    "descripcionEn": "Dental cavities are permanently damaged areas on the hard surface of teeth that develop into tiny openings or holes. They are caused by bacteria, frequent sugar consumption, and inadequate oral hygiene. They are one of the most common health conditions worldwide.",
    "sintomasEs": ["Dolor de muelas espontaneo o sin causa aparente", "Sensibilidad dental al comer o beber algo dulce, caliente o frio", "Manchas marrones, negras o blancas en la superficie del diente", "Dolor al morder", "Hoyos u orificios visibles en los dientes"],
    "sintomasEn": ["Spontaneous toothache or pain without apparent cause", "Tooth sensitivity when eating or drinking sweet, hot, or cold items", "Brown, black, or white stains on tooth surface", "Pain when biting down", "Visible pits or holes in teeth"],
    "causasEs": ["Acumulacion de placa bacteriana", "Consumo frecuente de alimentos y bebidas azucaradas", "Cepillado inadecuado o infrecuente", "Falta de fluor", "Boca seca (xerostomia)"],
    "causasEn": ["Bacterial plaque buildup", "Frequent consumption of sugary foods and drinks", "Inadequate or infrequent brushing", "Lack of fluoride", "Dry mouth (xerostomia)"],
    "tratamientoEs": ["Empastes (obturaciones) con resina o amalgama", "Coronas dentales para caries extensas", "Tratamiento de conducto si la pulpa esta afectada", "Extraccion dental en casos severos", "Aplicacion de fluor en etapas tempranas"],
    "tratamientoEn": ["Fillings (restorations) with resin or amalgam", "Dental crowns for extensive cavities", "Root canal treatment if pulp is affected", "Tooth extraction in severe cases", "Fluoride application in early stages"],
    "prevencionEs": ["Cepillarse los dientes al menos dos veces al dia con pasta dental con fluor", "Usar hilo dental diariamente", "Limitar alimentos y bebidas azucaradas", "Visitar al dentista regularmente", "Considerar selladores dentales"],
    "prevencionEn": ["Brush teeth at least twice daily with fluoride toothpaste", "Floss daily", "Limit sugary foods and beverages", "Visit the dentist regularly", "Consider dental sealants"],
    "cuandoVerDentistaEs": ["Dolor persistente en un diente", "Sensibilidad que no desaparece", "Manchas oscuras visibles en los dientes", "Mal aliento constante", "Visitas de rutina cada 6 meses"],
    "cuandoVerDentistaEn": ["Persistent tooth pain", "Sensitivity that does not go away", "Visible dark spots on teeth", "Constant bad breath", "Routine visits every 6 months"]
  },
  {
    "id": "gingivitis",
    "nombreEs": "Gingivitis",
    "nombreEn": "Gingivitis",
    "categoriaEs": "Condiciones Comunes",
    "categoriaEn": "Common Conditions",
    "descripcionEs": "La gingivitis es una forma leve de enfermedad de las encias que causa irritacion, enrojecimiento e inflamacion de la parte de las encias que rodea la base de los dientes. Es importante tratarla a tiempo porque puede progresar a periodontitis, una enfermedad mucho mas grave.",
    "descripcionEn": "Gingivitis is a mild form of gum disease that causes irritation, redness, and swelling of the gingiva, the part of your gum around the base of your teeth. It is important to treat it promptly because it can progress to periodontitis, a much more serious disease.",
    "sintomasEs": ["Encias rojas, inflamadas o hinchadas", "Encias que sangran facilmente al cepillarse o usar hilo dental", "Mal aliento persistente", "Encias retraidas", "Encias sensibles al tacto"],
    "sintomasEn": ["Red, swollen, or puffy gums", "Gums that bleed easily when brushing or flossing", "Persistent bad breath", "Receding gums", "Gums tender to the touch"],
    "causasEs": ["Acumulacion de placa dental", "Mala higiene bucal", "Tabaquismo", "Cambios hormonales", "Diabetes no controlada"],
    "causasEn": ["Dental plaque buildup", "Poor oral hygiene", "Smoking", "Hormonal changes", "Uncontrolled diabetes"],
    "tratamientoEs": ["Limpieza dental profesional", "Mejora de la higiene bucal diaria", "Enjuague bucal antibacteriano", "Tratamiento de factores contribuyentes", "Seguimiento dental regular"],
    "tratamientoEn": ["Professional dental cleaning", "Improved daily oral hygiene", "Antibacterial mouthwash", "Treatment of contributing factors", "Regular dental follow-up"],
    "prevencionEs": ["Cepillado correcto dos veces al dia", "Uso diario de hilo dental", "Visitas dentales regulares", "No fumar", "Dieta equilibrada"],
    "prevencionEn": ["Proper brushing twice daily", "Daily flossing", "Regular dental visits", "Avoid smoking", "Balanced diet"],
    "cuandoVerDentistaEs": ["Sangrado de encias al cepillarse", "Encias rojas o inflamadas persistentes", "Mal aliento que no mejora", "Encias que se separan de los dientes"],
    "cuandoVerDentistaEn": ["Bleeding gums when brushing", "Persistent red or swollen gums", "Bad breath that does not improve", "Gums pulling away from teeth"]
  },
  {
    "id": "periodontitis",
    "nombreEs": "Periodontitis (Enfermedad Periodontal)",
    "nombreEn": "Periodontitis (Periodontal Disease)",
    "categoriaEs": "Condiciones Comunes",
    "categoriaEn": "Common Conditions",
    "descripcionEs": "La periodontitis es una infeccion grave de las encias que dana el tejido blando y, sin tratamiento, puede destruir el hueso que sostiene los dientes. Puede hacer que los dientes se aflojen o se pierdan. Es comun pero prevenible y generalmente es resultado de una mala higiene bucal.",
    "descripcionEn": "Periodontitis is a serious gum infection that damages soft tissue and, without treatment, can destroy the bone supporting your teeth. It can cause teeth to loosen or lead to tooth loss. It is common but largely preventable and usually the result of poor oral hygiene.",
    "sintomasEs": ["Encias inflamadas de color rojo purpura", "Sangrado frecuente de las encias", "Pus entre los dientes y las encias", "Dientes flojos o con movilidad", "Dolor al masticar", "Perdida osea visible en radiografias"],
    "sintomasEn": ["Swollen purplish-red gums", "Frequent gum bleeding", "Pus between teeth and gums", "Loose or mobile teeth", "Pain when chewing", "Visible bone loss on X-rays"],
    "causasEs": ["Gingivitis no tratada", "Acumulacion de sarro bajo las encias", "Tabaquismo", "Predisposicion genetica", "Enfermedades sistemicas como diabetes"],
    "causasEn": ["Untreated gingivitis", "Tartar buildup below the gumline", "Smoking", "Genetic predisposition", "Systemic diseases such as diabetes"],
    "tratamientoEs": ["Raspado y alisado radicular (limpieza profunda)", "Antibioticos topicos u orales", "Cirugia periodontal de colgajo", "Injertos de tejido blando o hueso", "Mantenimiento periodontal continuo"],
    "tratamientoEn": ["Scaling and root planing (deep cleaning)", "Topical or oral antibiotics", "Flap periodontal surgery", "Soft tissue or bone grafts", "Ongoing periodontal maintenance"],
    "prevencionEs": ["Higiene bucal rigurosa diaria", "Limpiezas dentales profesionales regulares", "Dejar de fumar", "Controlar la diabetes y otras enfermedades", "Alimentacion rica en vitaminas C y D"],
    "prevencionEn": ["Rigorous daily oral hygiene", "Regular professional dental cleanings", "Quit smoking", "Control diabetes and other conditions", "Diet rich in vitamins C and D"],
    "cuandoVerDentistaEs": ["Encias que sangran con frecuencia", "Dientes que se sienten flojos", "Cambio en la mordida", "Retraccion notable de las encias", "Mal aliento severo persistente"],
    "cuandoVerDentistaEn": ["Frequently bleeding gums", "Teeth that feel loose", "Change in bite alignment", "Notable gum recession", "Severe persistent bad breath"]
  },
  {
    "id": "mal-aliento-halitosis",
    "nombreEs": "Mal Aliento (Halitosis)",
    "nombreEn": "Bad Breath (Halitosis)",
    "categoriaEs": "Condiciones Comunes",
    "categoriaEn": "Common Conditions",
    "descripcionEs": "La halitosis o mal aliento es un problema comun que puede causar angustia significativa. Se estima que afecta a una de cada cuatro personas de manera regular. Puede ser causada por multiples factores, desde la higiene bucal deficiente hasta condiciones medicas subyacentes.",
    "descripcionEn": "Halitosis or bad breath is a common problem that can cause significant distress. It is estimated to affect one in four people regularly. It can be caused by multiple factors, from poor oral hygiene to underlying medical conditions.",
    "sintomasEs": ["Olor desagradable persistente de la boca", "Sabor metalico o amargo constante", "Lengua con capa blanca o amarillenta", "Boca seca frecuente"],
    "sintomasEn": ["Persistent unpleasant mouth odor", "Constant metallic or bitter taste", "White or yellowish coating on tongue", "Frequent dry mouth"],
    "causasEs": ["Bacterias en la lengua y entre los dientes", "Enfermedad de las encias", "Boca seca", "Alimentos como ajo y cebolla", "Tabaquismo", "Ciertas condiciones medicas como reflujo gastrico"],
    "causasEn": ["Bacteria on tongue and between teeth", "Gum disease", "Dry mouth", "Foods like garlic and onion", "Smoking", "Certain medical conditions like acid reflux"],
    "tratamientoEs": ["Mejorar la higiene bucal incluyendo limpieza de lengua", "Tratar la enfermedad de encias si existe", "Hidratacion adecuada", "Enjuagues bucales antibacterianos", "Tratar condiciones medicas subyacentes"],
    "tratamientoEn": ["Improve oral hygiene including tongue cleaning", "Treat gum disease if present", "Adequate hydration", "Antibacterial mouthwashes", "Treat underlying medical conditions"],
    "prevencionEs": ["Cepillar dientes y lengua dos veces al dia", "Usar hilo dental diariamente", "Beber suficiente agua", "Evitar el tabaco", "Visitar al dentista regularmente"],
    "prevencionEn": ["Brush teeth and tongue twice daily", "Floss daily", "Drink enough water", "Avoid tobacco", "Visit dentist regularly"],
    "cuandoVerDentistaEs": ["Mal aliento que no mejora con buena higiene", "Encias que sangran o duelen", "Boca seca persistente", "Sabor extrano constante en la boca"],
    "cuandoVerDentistaEn": ["Bad breath that does not improve with good hygiene", "Bleeding or painful gums", "Persistent dry mouth", "Constant strange taste in mouth"]
  },
  {
    "id": "sensibilidad-dental",
    "nombreEs": "Sensibilidad Dental",
    "nombreEn": "Tooth Sensitivity",
    "categoriaEs": "Condiciones Comunes",
    "categoriaEn": "Common Conditions",
    "descripcionEs": "La sensibilidad dental ocurre cuando la dentina, la capa debajo del esmalte, queda expuesta. Esto causa dolor o molestia aguda y temporal al consumir alimentos o bebidas frias, calientes, dulces o acidas, o incluso al respirar aire frio.",
    "descripcionEn": "Tooth sensitivity occurs when dentin, the layer beneath enamel, becomes exposed. This causes sharp, temporary pain or discomfort when consuming cold, hot, sweet, or acidic foods and drinks, or even when breathing cold air.",
    "sintomasEs": ["Dolor agudo y breve al comer o beber algo frio o caliente", "Molestia al consumir alimentos dulces o acidos", "Dolor al cepillarse los dientes", "Sensibilidad al aire frio"],
    "sintomasEn": ["Sharp brief pain when eating or drinking cold or hot items", "Discomfort when consuming sweet or acidic foods", "Pain when brushing teeth", "Sensitivity to cold air"],
    "causasEs": ["Cepillado agresivo que desgasta el esmalte", "Retraccion de las encias", "Enfermedad de las encias", "Dientes agrietados", "Rechinar los dientes (bruxismo)", "Blanqueamiento dental excesivo"],
    "causasEn": ["Aggressive brushing that wears down enamel", "Gum recession", "Gum disease", "Cracked teeth", "Teeth grinding (bruxism)", "Excessive dental whitening"],
    "tratamientoEs": ["Pasta dental para dientes sensibles con nitrato de potasio", "Aplicacion de fluor profesional", "Selladores o resinas en areas expuestas", "Injerto de encia para retraccion severa", "Ferula nocturna si hay bruxismo"],
    "tratamientoEn": ["Desensitizing toothpaste with potassium nitrate", "Professional fluoride application", "Sealants or bonding on exposed areas", "Gum graft for severe recession", "Night guard if bruxism is present"],
    "prevencionEs": ["Usar cepillo de cerdas suaves", "Cepillarse con tecnica suave y circular", "Evitar alimentos altamente acidos en exceso", "Usar pasta dental con fluor", "No usar los dientes como herramientas"],
    "prevencionEn": ["Use a soft-bristle toothbrush", "Brush with gentle circular technique", "Avoid highly acidic foods in excess", "Use fluoride toothpaste", "Do not use teeth as tools"],
    "cuandoVerDentistaEs": ["Sensibilidad que empeora o no mejora", "Dolor al morder o masticar", "Dolor espontaneo en un diente especifico", "Sensibilidad despues de un tratamiento dental"],
    "cuandoVerDentistaEn": ["Sensitivity that worsens or does not improve", "Pain when biting or chewing", "Spontaneous pain in a specific tooth", "Sensitivity after a dental treatment"]
  },
  {
    "id": "absceso-dental",
    "nombreEs": "Absceso Dental",
    "nombreEn": "Dental Abscess",
    "categoriaEs": "Infecciones",
    "categoriaEn": "Infections",
    "descripcionEs": "Un absceso dental es una acumulacion de pus causada por una infeccion bacteriana en el diente o la encia. Puede ocurrir en la punta de la raiz (periapical) o en la encia junto a la raiz (periodontal). Es una urgencia dental que requiere atencion inmediata para evitar complicaciones graves.",
    "descripcionEn": "A dental abscess is a pocket of pus caused by a bacterial infection in the tooth or gum. It can occur at the root tip (periapical) or in the gum beside the root (periodontal). It is a dental emergency requiring immediate attention to prevent serious complications.",
    "sintomasEs": ["Dolor de muelas intenso, pulsatil y constante", "Hinchazon en la cara o mejilla", "Sensibilidad al calor y al frio", "Fiebre", "Ganglios linfaticos inflamados en el cuello", "Sabor amargo y mal olor en la boca"],
    "sintomasEn": ["Severe, throbbing, constant toothache", "Swelling in face or cheek", "Sensitivity to heat and cold", "Fever", "Swollen lymph nodes in neck", "Bitter taste and foul odor in mouth"],
    "causasEs": ["Caries dental profunda no tratada", "Traumatismo dental previo", "Enfermedad periodontal avanzada", "Tratamiento dental fallido"],
    "causasEn": ["Deep untreated dental cavity", "Previous dental trauma", "Advanced periodontal disease", "Failed dental treatment"],
    "tratamientoEs": ["Drenaje del absceso", "Antibioticos para controlar la infeccion", "Tratamiento de conducto para salvar el diente", "Extraccion del diente si no es salvable", "Analgesicos para el dolor"],
    "tratamientoEn": ["Abscess drainage", "Antibiotics to control infection", "Root canal treatment to save the tooth", "Tooth extraction if not salvageable", "Pain relievers for pain management"],
    "prevencionEs": ["Tratar las caries a tiempo", "Mantener buena higiene bucal", "Visitas dentales regulares", "Usar protector bucal en deportes de contacto"],
    "prevencionEn": ["Treat cavities promptly", "Maintain good oral hygiene", "Regular dental visits", "Use mouthguard in contact sports"],
    "cuandoVerDentistaEs": ["Dolor intenso que no cede con analgesicos", "Hinchazon en cara, cuello o bajo el ojo", "Fiebre con dolor dental", "Dificultad para tragar o respirar (urgencia medica)"],
    "cuandoVerDentistaEn": ["Severe pain unrelieved by pain medication", "Swelling in face, neck, or under the eye", "Fever with dental pain", "Difficulty swallowing or breathing (medical emergency)"]
  },
  {
    "id": "celulitis-facial-dental",
    "nombreEs": "Celulitis Facial de Origen Dental",
    "nombreEn": "Facial Cellulitis of Dental Origin",
    "categoriaEs": "Infecciones",
    "categoriaEn": "Infections",
    "descripcionEs": "La celulitis facial de origen dental es una infeccion bacteriana difusa del tejido blando de la cara que se origina a partir de una infeccion dental no tratada. Es una condicion potencialmente peligrosa que puede extenderse rapidamente y comprometer las vias respiratorias.",
    "descripcionEn": "Facial cellulitis of dental origin is a diffuse bacterial infection of the soft tissue of the face originating from an untreated dental infection. It is a potentially dangerous condition that can spread rapidly and compromise the airway.",
    "sintomasEs": ["Hinchazon severa y difusa de la cara", "Piel enrojecida y caliente al tacto", "Fiebre alta", "Dolor intenso", "Dificultad para abrir la boca (trismus)", "Malestar general"],
    "sintomasEn": ["Severe diffuse facial swelling", "Red and warm skin to the touch", "High fever", "Intense pain", "Difficulty opening mouth (trismus)", "General malaise"],
    "causasEs": ["Absceso dental no tratado", "Infeccion despues de extraccion dental", "Fractura mandibular infectada", "Infeccion de muela del juicio parcialmente erupcionada"],
    "causasEn": ["Untreated dental abscess", "Infection after tooth extraction", "Infected jaw fracture", "Infection of partially erupted wisdom tooth"],
    "tratamientoEs": ["Antibioticos intravenosos de amplio espectro", "Hospitalizacion en casos severos", "Drenaje quirurgico si hay coleccion de pus", "Tratamiento de la causa dental subyacente", "Manejo del dolor"],
    "tratamientoEn": ["Broad-spectrum intravenous antibiotics", "Hospitalization in severe cases", "Surgical drainage if pus collection present", "Treatment of underlying dental cause", "Pain management"],
    "prevencionEs": ["No ignorar infecciones dentales", "Tratar abscesos dentales de inmediato", "Mantener buena salud dental general", "Buscar atencion dental ante dolor persistente"],
    "prevencionEn": ["Do not ignore dental infections", "Treat dental abscesses immediately", "Maintain good overall dental health", "Seek dental care for persistent pain"],
    "cuandoVerDentistaEs": ["Hinchazon facial que empeora rapidamente", "Fiebre con hinchazon facial", "Dificultad para respirar o tragar (emergencia)", "Hinchazon que se extiende al cuello"],
    "cuandoVerDentistaEn": ["Facial swelling that worsens rapidly", "Fever with facial swelling", "Difficulty breathing or swallowing (emergency)", "Swelling extending to the neck"]
  },
  {
    "id": "bruxismo",
    "nombreEs": "Bruxismo",
    "nombreEn": "Bruxism (Teeth Grinding)",
    "categoriaEs": "Condiciones Estructurales",
    "categoriaEn": "Structural Conditions",
    "descripcionEs": "El bruxismo es una condicion en la que una persona aprieta o rechina los dientes de forma inconsciente, ya sea durante el dia o durante el sueno. Puede causar desgaste dental, dolor mandibular y dolores de cabeza. El bruxismo nocturno se considera un trastorno del movimiento relacionado con el sueno.",
    "descripcionEn": "Bruxism is a condition in which a person unconsciously clenches or grinds their teeth, either during the day or during sleep. It can cause tooth wear, jaw pain, and headaches. Sleep bruxism is considered a sleep-related movement disorder.",
    "sintomasEs": ["Rechinar o apretar los dientes audible durante el sueno", "Dientes aplanados, fracturados o astillados", "Dolor o rigidez en la mandibula", "Dolores de cabeza frecuentes especialmente al despertar", "Dolor de oido sin infeccion"],
    "sintomasEn": ["Audible grinding or clenching during sleep", "Flattened, fractured, or chipped teeth", "Jaw pain or stiffness", "Frequent headaches especially upon waking", "Ear pain without infection"],
    "causasEs": ["Estres y ansiedad", "Malocclusion dental", "Trastornos del sueno como apnea", "Consumo excesivo de cafeina o alcohol", "Ciertos medicamentos como antidepresivos"],
    "causasEn": ["Stress and anxiety", "Dental malocclusion", "Sleep disorders like apnea", "Excessive caffeine or alcohol consumption", "Certain medications such as antidepressants"],
    "tratamientoEs": ["Ferula o guarda oclusal nocturna", "Tecnicas de manejo del estres", "Correccion de la malocclusion", "Terapia cognitivo-conductual", "Relajantes musculares en casos severos"],
    "tratamientoEn": ["Night guard or occlusal splint", "Stress management techniques", "Malocclusion correction", "Cognitive behavioral therapy", "Muscle relaxants in severe cases"],
    "prevencionEs": ["Manejar el estres de manera saludable", "Evitar cafeina y alcohol antes de dormir", "Relajar la mandibula conscientemente durante el dia", "Mantener buena postura", "Dormir adecuadamente"],
    "prevencionEn": ["Manage stress in healthy ways", "Avoid caffeine and alcohol before bed", "Consciously relax jaw during the day", "Maintain good posture", "Get adequate sleep"],
    "cuandoVerDentistaEs": ["Dientes visiblemente desgastados", "Dolor mandibular o facial cronico", "Su pareja nota que rechina los dientes de noche", "Dolores de cabeza matutinos frecuentes"],
    "cuandoVerDentistaEn": ["Visibly worn teeth", "Chronic jaw or facial pain", "Partner notices nighttime teeth grinding", "Frequent morning headaches"]
  },
  {
    "id": "maloclusion",
    "nombreEs": "Maloclusion",
    "nombreEn": "Malocclusion",
    "categoriaEs": "Condiciones Estructurales",
    "categoriaEn": "Structural Conditions",
    "descripcionEs": "La maloclusion se refiere a la alineacion incorrecta de los dientes cuando la mandibula esta cerrada. Incluye condiciones como mordida cruzada, sobremordida, mordida abierta y apisonamiento dental. Puede afectar la masticacion, el habla y la estetica.",
    "descripcionEn": "Malocclusion refers to incorrect alignment of the teeth when the jaw is closed. It includes conditions such as crossbite, overbite, open bite, and dental crowding. It can affect chewing, speech, and aesthetics.",
    "sintomasEs": ["Dientes torcidos o apisonados", "Mordida que no se siente correcta", "Dificultad para masticar o morder", "Problemas del habla", "Respiracion bucal habitual"],
    "sintomasEn": ["Crooked or crowded teeth", "Bite that does not feel correct", "Difficulty chewing or biting", "Speech problems", "Habitual mouth breathing"],
    "causasEs": ["Herencia genetica", "Habitos de la infancia como chupar dedo", "Perdida temprana de dientes de leche", "Uso prolongado de biberon o chupete", "Traumatismo facial"],
    "causasEn": ["Genetic inheritance", "Childhood habits like thumb sucking", "Early loss of baby teeth", "Prolonged bottle or pacifier use", "Facial trauma"],
    "tratamientoEs": ["Ortodoncia con brackets o alineadores transparentes", "Aparatos funcionales en ninos", "Extraccion de dientes en casos de apisonamiento severo", "Cirugia ortognatica en casos severos en adultos", "Retenedores despues del tratamiento"],
    "tratamientoEn": ["Orthodontics with braces or clear aligners", "Functional appliances in children", "Tooth extraction in severe crowding cases", "Orthognathic surgery in severe adult cases", "Retainers after treatment"],
    "prevencionEs": ["Eliminar habitos de succion del pulgar tempranamente", "Visitas dentales tempranas desde el primer ano", "Mantener los dientes de leche saludables", "Usar protector bucal en deportes"],
    "prevencionEn": ["Eliminate thumb sucking habits early", "Early dental visits from age one", "Keep baby teeth healthy", "Use mouthguard in sports"],
    "cuandoVerDentistaEs": ["Dientes notablemente torcidos o apisonados", "Dificultad para masticar o hablar", "Dolor en la mandibula", "Respiracion por la boca", "Evaluacion ortodontica a los 7 anos"],
    "cuandoVerDentistaEn": ["Noticeably crooked or crowded teeth", "Difficulty chewing or speaking", "Jaw pain", "Mouth breathing", "Orthodontic evaluation at age 7"]
  },
  {
    "id": "diente-impactado-muelas-juicio",
    "nombreEs": "Diente Impactado (Muelas del Juicio)",
    "nombreEn": "Impacted Tooth (Wisdom Teeth)",
    "categoriaEs": "Condiciones Estructurales",
    "categoriaEn": "Structural Conditions",
    "descripcionEs": "Un diente impactado es aquel que no ha erupcionado completamente a su posicion normal en la arcada dental. Las muelas del juicio (terceros molares) son los dientes que con mas frecuencia quedan impactados, ya que suelen erupcionar entre los 17 y 25 anos cuando no hay suficiente espacio.",
    "descripcionEn": "An impacted tooth is one that has not fully erupted into its normal position in the dental arch. Wisdom teeth (third molars) are the most commonly impacted teeth, as they usually erupt between ages 17 and 25 when there is not enough space.",
    "sintomasEs": ["Dolor en la parte posterior de la boca", "Hinchazon de la encia sobre la muela", "Dificultad para abrir la boca", "Mal sabor o mal aliento", "Dolor que se extiende al oido o cabeza"],
    "sintomasEn": ["Pain in the back of the mouth", "Swelling of the gum over the molar", "Difficulty opening mouth", "Bad taste or bad breath", "Pain radiating to ear or head"],
    "causasEs": ["Falta de espacio en la mandibula", "Angulo de erupcion incorrecto", "Obstruccion por otros dientes", "Genetica y tamano de la mandibula"],
    "causasEn": ["Lack of space in the jaw", "Incorrect eruption angle", "Obstruction by other teeth", "Genetics and jaw size"],
    "tratamientoEs": ["Extraccion quirurgica de la muela del juicio", "Antibioticos si hay infeccion", "Manejo del dolor postoperatorio", "Irrigacion y limpieza del area", "Observacion con radiografias periodicas si no hay sintomas"],
    "tratamientoEn": ["Surgical extraction of wisdom tooth", "Antibiotics if infection present", "Postoperative pain management", "Irrigation and cleaning of the area", "Observation with periodic X-rays if asymptomatic"],
    "prevencionEs": ["Evaluacion dental regular con radiografias", "Deteccion temprana en la adolescencia", "Extraccion preventiva si se anticipa impactacion"],
    "prevencionEn": ["Regular dental evaluation with X-rays", "Early detection in adolescence", "Preventive extraction if impaction is anticipated"],
    "cuandoVerDentistaEs": ["Dolor en la zona de las muelas del juicio", "Hinchazon o enrojecimiento en la encia posterior", "Dificultad para abrir la boca", "Infeccion recurrente en la zona"],
    "cuandoVerDentistaEn": ["Pain in the wisdom tooth area", "Swelling or redness in the back gum", "Difficulty opening mouth", "Recurring infection in the area"]
  },
  {
    "id": "aftas-bucales",
    "nombreEs": "Aftas Bucales (Ulceras Aftosas)",
    "nombreEn": "Canker Sores (Aphthous Ulcers)",
    "categoriaEs": "Condiciones Orales",
    "categoriaEn": "Oral Conditions",
    "descripcionEs": "Las aftas son pequenas ulceras superficiales que aparecen en los tejidos blandos de la boca o en la base de las encias. A diferencia del herpes labial, no son contagiosas ni aparecen en la superficie de los labios. Son dolorosas pero generalmente se curan solas en una o dos semanas.",
    "descripcionEn": "Canker sores are small, shallow ulcers that develop on the soft tissues in the mouth or at the base of the gums. Unlike cold sores, they are not contagious and do not appear on the lip surface. They are painful but generally heal on their own in one to two weeks.",
    "sintomasEs": ["Llagas redondas u ovaladas con centro blanco o amarillo y borde rojo", "Dolor o ardor antes de que aparezca la llaga", "Dificultad para comer o hablar", "En casos severos, fiebre y malestar general"],
    "sintomasEn": ["Round or oval sores with white or yellow center and red border", "Pain or burning before the sore appears", "Difficulty eating or speaking", "In severe cases, fever and general malaise"],
    "causasEs": ["Estres emocional", "Lesion menor en la boca por mordedura o cepillado fuerte", "Deficiencias nutricionales (hierro, zinc, B12, folato)", "Sensibilidad a ciertos alimentos", "Cambios hormonales"],
    "causasEn": ["Emotional stress", "Minor mouth injury from biting or hard brushing", "Nutritional deficiencies (iron, zinc, B12, folate)", "Sensitivity to certain foods", "Hormonal changes"],
    "tratamientoEs": ["Enjuagues bucales medicados", "Gel o pasta topica con anestesico", "Suplementos vitaminicos si hay deficiencias", "Cauterizacion en casos severos", "Medicamentos sistemicos para aftas recurrentes severas"],
    "tratamientoEn": ["Medicated mouth rinses", "Topical gel or paste with anesthetic", "Vitamin supplements if deficiencies present", "Cauterization in severe cases", "Systemic medications for severe recurrent sores"],
    "prevencionEs": ["Evitar alimentos que irriten la boca", "Manejar el estres", "Mantener una dieta equilibrada", "Usar cepillo de cerdas suaves", "Evitar pastas dentales con lauril sulfato de sodio"],
    "prevencionEn": ["Avoid foods that irritate the mouth", "Manage stress", "Maintain a balanced diet", "Use a soft-bristle toothbrush", "Avoid toothpastes with sodium lauryl sulfate"],
    "cuandoVerDentistaEs": ["Aftas inusualmente grandes", "Aftas que no sanan en tres semanas", "Aftas que se extienden a los labios", "Fiebre alta acompanando las aftas", "Aftas frecuentes y recurrentes"],
    "cuandoVerDentistaEn": ["Unusually large canker sores", "Sores that do not heal in three weeks", "Sores extending to the lips", "High fever accompanying sores", "Frequent recurring sores"]
  },
  {
    "id": "herpes-labial",
    "nombreEs": "Herpes Labial (Fuegos)",
    "nombreEn": "Cold Sores (Oral Herpes)",
    "categoriaEs": "Condiciones Orales",
    "categoriaEn": "Oral Conditions",
    "descripcionEs": "El herpes labial, conocido comunmente como fuegos o ampollas febriles, son grupos de pequenas ampollas llenas de liquido que aparecen sobre o alrededor de los labios. Son causadas por el virus del herpes simple tipo 1 (VHS-1) y son muy contagiosas.",
    "descripcionEn": "Cold sores, commonly known as fever blisters, are clusters of small fluid-filled blisters that appear on or around the lips. They are caused by herpes simplex virus type 1 (HSV-1) and are highly contagious.",
    "sintomasEs": ["Hormigueo o ardor antes de que aparezcan las ampollas", "Ampollas pequenas llenas de liquido en los labios", "Las ampollas se rompen y forman costras", "Dolor e irritacion en el area", "Primer episodio puede incluir fiebre y dolor de garganta"],
    "sintomasEn": ["Tingling or burning before blisters appear", "Small fluid-filled blisters on lips", "Blisters break open and form crusts", "Pain and irritation in the area", "First episode may include fever and sore throat"],
    "causasEs": ["Virus del herpes simple tipo 1 (VHS-1)", "Reactivacion por estres, fatiga o enfermedad", "Exposicion excesiva al sol", "Sistema inmunologico debilitado", "Cambios hormonales"],
    "causasEn": ["Herpes simplex virus type 1 (HSV-1)", "Reactivation by stress, fatigue, or illness", "Excessive sun exposure", "Weakened immune system", "Hormonal changes"],
    "tratamientoEs": ["Antivirales orales como aciclovir o valaciclovir", "Cremas antivirales topicas", "Analgesicos para el dolor", "Compresas frias para aliviar la molestia", "En casos severos, antivirales intravenosos"],
    "tratamientoEn": ["Oral antivirals such as acyclovir or valacyclovir", "Topical antiviral creams", "Pain relievers", "Cold compresses for comfort", "In severe cases, intravenous antivirals"],
    "prevencionEs": ["Evitar contacto directo con personas con herpes activo", "No compartir utensilios, toallas o productos labiales", "Usar protector solar en los labios", "Manejar el estres", "Tomar antivirales preventivos si los brotes son frecuentes"],
    "prevencionEn": ["Avoid direct contact with people with active cold sores", "Do not share utensils, towels, or lip products", "Use sunscreen on lips", "Manage stress", "Take preventive antivirals if outbreaks are frequent"],
    "cuandoVerDentistaEs": ["Brotes frecuentes (mas de seis al ano)", "Herpes labial que no sana en dos semanas", "Ampollas cerca de los ojos", "Fiebre alta o sintomas severos", "Sistema inmunologico comprometido"],
    "cuandoVerDentistaEn": ["Frequent outbreaks (more than six per year)", "Cold sore not healing in two weeks", "Blisters near the eyes", "High fever or severe symptoms", "Compromised immune system"]
  },
  {
    "id": "candidiasis-oral",
    "nombreEs": "Candidiasis Oral (Algodoncillo)",
    "nombreEn": "Oral Candidiasis (Thrush)",
    "categoriaEs": "Condiciones Orales",
    "categoriaEn": "Oral Conditions",
    "descripcionEs": "La candidiasis oral es una infeccion por hongos del genero Candida, especialmente Candida albicans, que produce lesiones de color blanco cremoso en la lengua, las mejillas internas y a veces en las encias, amigdalas y el paladar. Es comun en bebes, personas mayores y personas con el sistema inmune debilitado.",
    "descripcionEn": "Oral candidiasis is a fungal infection caused by Candida species, especially Candida albicans, producing creamy white lesions on the tongue, inner cheeks, and sometimes on the gums, tonsils, and roof of the mouth. It is common in infants, elderly people, and those with weakened immune systems.",
    "sintomasEs": ["Placas blancas cremosas en la lengua y mejillas internas", "Enrojecimiento o dolor debajo de las placas", "Sensacion de algodoncillo en la boca", "Perdida del gusto", "Dolor al comer o tragar", "Grietas en las comisuras de los labios"],
    "sintomasEn": ["Creamy white patches on tongue and inner cheeks", "Redness or soreness beneath patches", "Cottony feeling in the mouth", "Loss of taste", "Pain when eating or swallowing", "Cracking at corners of the mouth"],
    "causasEs": ["Uso de antibioticos que alteran la flora bucal", "Sistema inmunologico debilitado", "Diabetes no controlada", "Uso de dentaduras postizas mal ajustadas", "Uso de corticosteroides inhalados", "Boca seca"],
    "causasEn": ["Antibiotic use that disrupts oral flora", "Weakened immune system", "Uncontrolled diabetes", "Ill-fitting dentures", "Use of inhaled corticosteroids", "Dry mouth"],
    "tratamientoEs": ["Antifungicos topicos como nistatina", "Antifungicos orales como fluconazol en casos severos", "Enjuagues bucales antifungicos", "Ajuste de dentaduras si es necesario", "Tratar la causa subyacente"],
    "tratamientoEn": ["Topical antifungals such as nystatin", "Oral antifungals such as fluconazole in severe cases", "Antifungal mouth rinses", "Denture adjustment if needed", "Treat underlying cause"],
    "prevencionEs": ["Buena higiene bucal", "Enjuagarse la boca despues de usar inhaladores de corticosteroides", "Limpiar las dentaduras diariamente", "Controlar la diabetes", "Limitar el consumo de azucar"],
    "prevencionEn": ["Good oral hygiene", "Rinse mouth after using corticosteroid inhalers", "Clean dentures daily", "Control diabetes", "Limit sugar intake"],
    "cuandoVerDentistaEs": ["Placas blancas que no desaparecen", "Dolor al comer o tragar", "Candidiasis recurrente", "Sospecha de sistema inmune debilitado"],
    "cuandoVerDentistaEn": ["White patches that do not go away", "Pain when eating or swallowing", "Recurrent candidiasis", "Suspected weakened immune system"]
  },
  {
    "id": "liquen-plano-oral",
    "nombreEs": "Liquen Plano Oral",
    "nombreEn": "Oral Lichen Planus",
    "categoriaEs": "Condiciones Orales",
    "categoriaEn": "Oral Conditions",
    "descripcionEs": "El liquen plano oral es una condicion inflamatoria cronica que afecta las membranas mucosas de la boca. Se manifiesta como lineas blancas en forma de encaje, parches rojos e inflamados o llagas abiertas. No es contagioso y se cree que es una respuesta autoinmune.",
    "descripcionEn": "Oral lichen planus is a chronic inflammatory condition affecting the mucous membranes of the mouth. It presents as white lacy lines, red inflamed patches, or open sores. It is not contagious and is believed to be an autoimmune response.",
    "sintomasEs": ["Lineas blancas reticulares en mejillas o lengua", "Parches rojos inflamados y dolorosos", "Ulceras abiertas en la mucosa bucal", "Ardor o dolor al comer alimentos picantes o acidos", "Sensacion de sequedad o aspereza en la boca"],
    "sintomasEn": ["White lacy lines on cheeks or tongue", "Red inflamed painful patches", "Open sores on oral mucosa", "Burning or pain when eating spicy or acidic foods", "Dry or rough feeling in the mouth"],
    "causasEs": ["Respuesta autoinmune del sistema inmunologico", "Reaccion a ciertos medicamentos", "Estres", "Asociacion con hepatitis C", "Causa exacta desconocida"],
    "causasEn": ["Autoimmune response", "Reaction to certain medications", "Stress", "Association with hepatitis C", "Exact cause unknown"],
    "tratamientoEs": ["Corticosteroides topicos para reducir inflamacion", "Inmunosupresores en casos severos", "Retinoides topicos", "Monitoreo regular por riesgo de transformacion maligna", "Manejo del dolor"],
    "tratamientoEn": ["Topical corticosteroids to reduce inflammation", "Immunosuppressants in severe cases", "Topical retinoids", "Regular monitoring for malignant transformation risk", "Pain management"],
    "prevencionEs": ["No se puede prevenir directamente", "Evitar irritantes como tabaco y alcohol", "Manejar el estres", "Mantener buena higiene bucal", "Seguimiento regular con el dentista"],
    "prevencionEn": ["Cannot be directly prevented", "Avoid irritants like tobacco and alcohol", "Manage stress", "Maintain good oral hygiene", "Regular follow-up with dentist"],
    "cuandoVerDentistaEs": ["Manchas blancas o rojas persistentes en la boca", "Llagas que no sanan", "Dolor o ardor al comer", "Cambios en lesiones existentes"],
    "cuandoVerDentistaEn": ["Persistent white or red patches in mouth", "Sores that do not heal", "Pain or burning when eating", "Changes in existing lesions"]
  },
  {
    "id": "leucoplasia",
    "nombreEs": "Leucoplasia",
    "nombreEn": "Leukoplakia",
    "categoriaEs": "Condiciones Orales",
    "categoriaEn": "Oral Conditions",
    "descripcionEs": "La leucoplasia se manifiesta como parches blancos gruesos en las encias, la parte interna de las mejillas, el piso de la boca y a veces la lengua. Estos parches no pueden rasparse facilmente. Aunque generalmente es benigna, ciertos tipos pueden mostrar signos tempranos de cancer.",
    "descripcionEn": "Leukoplakia appears as thick, white patches on the gums, inside of the cheeks, floor of the mouth, and sometimes the tongue. These patches cannot be easily scraped off. Although generally benign, certain types may show early signs of cancer.",
    "sintomasEs": ["Parches blancos o grisaceos que no se pueden raspar", "Textura irregular o plana", "Areas engrosadas o endurecidas", "Generalmente indolora", "En leucoplasia vellosa, parches con pliegues en los lados de la lengua"],
    "sintomasEn": ["White or grayish patches that cannot be scraped off", "Irregular or flat texture", "Thickened or hardened areas", "Generally painless", "In hairy leukoplakia, folded patches on sides of tongue"],
    "causasEs": ["Tabaquismo o uso de tabaco masticable", "Consumo excesivo de alcohol", "Irritacion cronica por dientes asperos o dentaduras", "Virus de Epstein-Barr (leucoplasia vellosa)", "Inmunosupresion"],
    "causasEn": ["Smoking or chewing tobacco use", "Excessive alcohol consumption", "Chronic irritation from rough teeth or dentures", "Epstein-Barr virus (hairy leukoplakia)", "Immunosuppression"],
    "tratamientoEs": ["Eliminar la fuente de irritacion", "Dejar de fumar y reducir alcohol", "Biopsia para descartar displasia o cancer", "Remocion quirurgica de parches sospechosos", "Seguimiento regular"],
    "tratamientoEn": ["Remove source of irritation", "Stop smoking and reduce alcohol", "Biopsy to rule out dysplasia or cancer", "Surgical removal of suspicious patches", "Regular follow-up"],
    "prevencionEs": ["No fumar ni usar tabaco en ninguna forma", "Limitar el consumo de alcohol", "Mantener dientes y restauraciones lisas", "Dieta rica en frutas y verduras antioxidantes"],
    "prevencionEn": ["Do not smoke or use tobacco in any form", "Limit alcohol consumption", "Keep teeth and restorations smooth", "Diet rich in antioxidant fruits and vegetables"],
    "cuandoVerDentistaEs": ["Cualquier parche blanco persistente en la boca", "Cambios en lesiones existentes", "Parches que se vuelven rojos o ulcerados", "Lesiones que no desaparecen en dos semanas"],
    "cuandoVerDentistaEn": ["Any persistent white patch in the mouth", "Changes in existing lesions", "Patches that become red or ulcerated", "Lesions that do not disappear in two weeks"]
  },
  {
    "id": "caries-de-biberon",
    "nombreEs": "Caries de Biberon (Caries de la Primera Infancia)",
    "nombreEn": "Baby Bottle Tooth Decay (Early Childhood Caries)",
    "categoriaEs": "Pediatria Dental",
    "categoriaEn": "Pediatric Dentistry",
    "descripcionEs": "Las caries de biberon son un tipo de caries dental severa que afecta a los dientes de leche de ninos muy pequenos, generalmente menores de seis anos. Se asocia frecuentemente con el uso prolongado del biberon con liquidos azucarados, especialmente durante la noche.",
    "descripcionEn": "Baby bottle tooth decay is a type of severe tooth decay affecting primary teeth of very young children, usually under six years old. It is frequently associated with prolonged bottle use with sugary liquids, especially at night.",
    "sintomasEs": ["Manchas blancas en los dientes frontales superiores (etapa inicial)", "Dientes con manchas marrones o negras", "Dientes que se fracturan o desmoronan", "Dolor dental en el nino", "Inflamacion de las encias alrededor de los dientes afectados"],
    "sintomasEn": ["White spots on upper front teeth (early stage)", "Teeth with brown or black stains", "Teeth that fracture or crumble", "Dental pain in the child", "Gum swelling around affected teeth"],
    "causasEs": ["Dormir con biberon de leche, jugo o liquidos azucarados", "Uso prolongado del biberon mas alla del primer ano", "Falta de limpieza bucal en bebes y ninos pequenos", "Transmision de bacterias de madre a hijo al compartir cubiertos", "Dieta alta en azucares"],
    "causasEn": ["Sleeping with a bottle of milk, juice, or sugary liquids", "Prolonged bottle use beyond the first year", "Lack of oral cleaning in infants and toddlers", "Bacteria transmission from mother to child by sharing utensils", "High-sugar diet"],
    "tratamientoEs": ["Fluor topico en etapas tempranas", "Restauraciones dentales (empastes)", "Coronas de acero inoxidable en dientes muy danados", "Extraccion en casos severos", "Tratamiento bajo sedacion o anestesia general si es necesario"],
    "tratamientoEn": ["Topical fluoride in early stages", "Dental restorations (fillings)", "Stainless steel crowns on severely damaged teeth", "Extraction in severe cases", "Treatment under sedation or general anesthesia if needed"],
    "prevencionEs": ["No acostar al nino con biberon de liquidos azucarados", "Limpiar las encias del bebe con una gasa humeda despues de alimentarlo", "Iniciar cepillado con la erupcion del primer diente", "Primera visita dental al cumplir un ano", "Destetar del biberon entre los 12 y 18 meses"],
    "prevencionEn": ["Do not put child to bed with a bottle of sugary liquids", "Clean baby gums with a damp cloth after feeding", "Start brushing with eruption of first tooth", "First dental visit by age one", "Wean from bottle between 12 and 18 months"],
    "cuandoVerDentistaEs": ["Manchas blancas o marrones en dientes de leche", "El nino se queja de dolor dental", "Dientes de leche que se rompen o desmoronan", "Primera visita al cumplir un ano de edad"],
    "cuandoVerDentistaEn": ["White or brown spots on baby teeth", "Child complains of tooth pain", "Baby teeth breaking or crumbling", "First visit by age one"]
  },
  {
    "id": "erupcion-dental",
    "nombreEs": "Erupcion Dental (Denticion)",
    "nombreEn": "Tooth Eruption (Teething)",
    "categoriaEs": "Pediatria Dental",
    "categoriaEn": "Pediatric Dentistry",
    "descripcionEs": "La erupcion dental es el proceso natural por el cual los dientes emergen a traves de las encias. Los dientes de leche generalmente comienzan a erupcionar alrededor de los seis meses de edad, y los dientes permanentes reemplazan a los de leche entre los seis y doce anos.",
    "descripcionEn": "Tooth eruption is the natural process by which teeth emerge through the gums. Primary teeth usually begin erupting around six months of age, and permanent teeth replace primary teeth between ages six and twelve.",
    "sintomasEs": ["Irritabilidad y llanto en bebes", "Encias inflamadas y sensibles", "Babeo excesivo", "Deseo de morder objetos", "Dificultad para dormir", "Leve aumento de temperatura (no fiebre alta)"],
    "sintomasEn": ["Irritability and crying in infants", "Swollen and tender gums", "Excessive drooling", "Desire to chew on objects", "Difficulty sleeping", "Slight temperature increase (not high fever)"],
    "causasEs": ["Proceso natural del desarrollo", "Movimiento de los dientes a traves del hueso y la encia", "En adultos, erupcion de muelas del juicio"],
    "causasEn": ["Natural developmental process", "Movement of teeth through bone and gum tissue", "In adults, wisdom tooth eruption"],
    "tratamientoEs": ["Mordedores frios para bebes", "Masaje suave de las encias con un dedo limpio", "Analgesicos infantiles apropiados para la edad si hay dolor significativo", "Gel para encias (sin benzocaina en menores de 2 anos)", "Paciencia y consuelo"],
    "tratamientoEn": ["Cold teething rings for babies", "Gentle gum massage with a clean finger", "Age-appropriate infant pain relievers for significant pain", "Gum gel (no benzocaine under age 2)", "Patience and comfort"],
    "prevencionEs": ["No requiere prevencion ya que es un proceso natural", "Mantener limpias las encias del bebe", "Proporcionar objetos seguros para morder", "Iniciar habitos de higiene bucal tempranamente"],
    "prevencionEn": ["Prevention not needed as it is a natural process", "Keep baby gums clean", "Provide safe objects to chew on", "Start oral hygiene habits early"],
    "cuandoVerDentistaEs": ["Fiebre alta durante la denticion", "El bebe rehusa comer por varios dias", "Dientes que no erupcionan segun el calendario esperado", "Quistes o hematomas en la encia"],
    "cuandoVerDentistaEn": ["High fever during teething", "Baby refuses to eat for several days", "Teeth not erupting according to expected timeline", "Cysts or hematomas on the gum"]
  },
  {
    "id": "ortodoncia",
    "nombreEs": "Ortodoncia",
    "nombreEn": "Orthodontics",
    "categoriaEs": "Pediatria Dental",
    "categoriaEn": "Pediatric Dentistry",
    "descripcionEs": "La ortodoncia es la especialidad dental que diagnostica, previene y trata las irregularidades dentales y faciales, incluyendo dientes mal alineados y problemas de la mordida. El tratamiento mas comun involucra brackets, alineadores transparentes y otros aparatos.",
    "descripcionEn": "Orthodontics is the dental specialty that diagnoses, prevents, and treats dental and facial irregularities, including misaligned teeth and bite problems. The most common treatment involves braces, clear aligners, and other appliances.",
    "sintomasEs": ["Dientes apisonados o torcidos", "Espacios excesivos entre dientes", "Sobremordida o mordida insuficiente", "Mordida cruzada", "Dificultad para masticar correctamente"],
    "sintomasEn": ["Crowded or crooked teeth", "Excessive spacing between teeth", "Overbite or underbite", "Crossbite", "Difficulty chewing properly"],
    "causasEs": ["Genetica y herencia", "Perdida temprana de dientes de leche", "Habitos como chuparse el dedo", "Respiracion bucal cronica", "Traumatismos dentales en la infancia"],
    "causasEn": ["Genetics and heredity", "Early loss of baby teeth", "Habits like thumb sucking", "Chronic mouth breathing", "Childhood dental trauma"],
    "tratamientoEs": ["Brackets metalicos o ceramicos", "Alineadores transparentes removibles", "Aparatos de expansion palatina", "Retenedores despues del tratamiento activo", "Cirugia ortognatica en casos severos"],
    "tratamientoEn": ["Metal or ceramic braces", "Removable clear aligners", "Palatal expanders", "Retainers after active treatment", "Orthognathic surgery in severe cases"],
    "prevencionEs": ["Eliminar habitos orales perjudiciales tempranamente", "Mantener los dientes de leche saludables", "Evaluacion ortodontica a los 7 anos", "Usar protector bucal en deportes", "Tratar la respiracion bucal tempranamente"],
    "prevencionEn": ["Eliminate harmful oral habits early", "Keep baby teeth healthy", "Orthodontic evaluation at age 7", "Use mouthguard in sports", "Treat mouth breathing early"],
    "cuandoVerDentistaEs": ["Dientes visiblemente torcidos o apisonados", "Problemas para masticar o morder", "Respiracion habitual por la boca", "Evaluacion recomendada a los 7 anos de edad"],
    "cuandoVerDentistaEn": ["Visibly crooked or crowded teeth", "Problems chewing or biting", "Habitual mouth breathing", "Evaluation recommended at age 7"]
  },
  {
    "id": "blanqueamiento-dental",
    "nombreEs": "Blanqueamiento Dental",
    "nombreEn": "Teeth Whitening",
    "categoriaEs": "Cosmetica Dental",
    "categoriaEn": "Cosmetic Dentistry",
    "descripcionEs": "El blanqueamiento dental es un procedimiento cosmetico que aclara el color de los dientes eliminando manchas y decoloracion. Se puede realizar profesionalmente en el consultorio dental o con productos supervisados para uso en casa. Es importante entender sus limitaciones y posibles efectos secundarios.",
    "descripcionEn": "Teeth whitening is a cosmetic procedure that lightens tooth color by removing stains and discoloration. It can be performed professionally in the dental office or with supervised products for home use. It is important to understand its limitations and possible side effects.",
    "sintomasEs": ["Dientes amarillentos o manchados", "Decoloracion por alimentos, bebidas o tabaco", "Oscurecimiento natural por envejecimiento"],
    "sintomasEn": ["Yellowish or stained teeth", "Discoloration from food, beverages, or tobacco", "Natural darkening from aging"],
    "causasEs": ["Consumo de cafe, te, vino tinto o refrescos oscuros", "Tabaquismo", "Envejecimiento natural del esmalte", "Ciertos medicamentos como tetraciclina", "Traumatismo dental", "Exceso de fluor durante el desarrollo dental"],
    "causasEn": ["Consumption of coffee, tea, red wine, or dark sodas", "Smoking", "Natural enamel aging", "Certain medications like tetracycline", "Dental trauma", "Excess fluoride during tooth development"],
    "tratamientoEs": ["Blanqueamiento profesional en consultorio con peroxido de hidrogeno", "Ferulas de blanqueamiento con gel para uso en casa", "Pastas dentales blanqueadoras (efecto leve)", "Microabrasion para manchas superficiales", "Carillas si el blanqueamiento no es efectivo"],
    "tratamientoEn": ["Professional in-office whitening with hydrogen peroxide", "Whitening trays with gel for home use", "Whitening toothpastes (mild effect)", "Microabrasion for surface stains", "Veneers if whitening is not effective"],
    "prevencionEs": ["Limitar alimentos y bebidas que manchan los dientes", "Enjuagarse la boca despues de consumir cafe o vino", "No fumar", "Mantener buena higiene bucal", "Limpiezas dentales profesionales regulares"],
    "prevencionEn": ["Limit foods and beverages that stain teeth", "Rinse mouth after consuming coffee or wine", "Do not smoke", "Maintain good oral hygiene", "Regular professional dental cleanings"],
    "cuandoVerDentistaEs": ["Antes de iniciar cualquier tratamiento blanqueador", "Sensibilidad despues del blanqueamiento", "Resultados desiguales o manchas persistentes", "Para evaluar si es candidato al blanqueamiento"],
    "cuandoVerDentistaEn": ["Before starting any whitening treatment", "Sensitivity after whitening", "Uneven results or persistent stains", "To evaluate candidacy for whitening"]
  },
  {
    "id": "carillas-dentales",
    "nombreEs": "Carillas Dentales",
    "nombreEn": "Dental Veneers",
    "categoriaEs": "Cosmetica Dental",
    "categoriaEn": "Cosmetic Dentistry",
    "descripcionEs": "Las carillas dentales son laminas delgadas de porcelana o resina compuesta que se adhieren a la superficie frontal de los dientes para mejorar su apariencia. Pueden cambiar el color, la forma, el tamano o la longitud de los dientes y son una opcion popular en odontologia cosmetica.",
    "descripcionEn": "Dental veneers are thin shells of porcelain or composite resin bonded to the front surface of teeth to improve their appearance. They can change tooth color, shape, size, or length and are a popular option in cosmetic dentistry.",
    "sintomasEs": ["Dientes descoloridos que no responden al blanqueamiento", "Dientes astillados o fracturados", "Dientes con forma irregular", "Espacios entre los dientes", "Dientes ligeramente torcidos"],
    "sintomasEn": ["Discolored teeth unresponsive to whitening", "Chipped or fractured teeth", "Irregularly shaped teeth", "Gaps between teeth", "Slightly crooked teeth"],
    "causasEs": ["Desgaste natural del esmalte", "Traumatismo dental", "Genetica que afecta forma o color dental", "Manchas por tetraciclina u otros medicamentos", "Deseo de mejorar la estetica dental"],
    "causasEn": ["Natural enamel wear", "Dental trauma", "Genetics affecting tooth shape or color", "Tetracycline or other medication stains", "Desire to improve dental aesthetics"],
    "tratamientoEs": ["Carillas de porcelana (mas duraderas, aspecto natural)", "Carillas de resina compuesta (menos invasivas, mas economicas)", "Preparacion minima del diente en carillas de contacto", "Proceso de dos a tres citas con el dentista", "Cuidado como dientes naturales mas protector nocturno"],
    "tratamientoEn": ["Porcelain veneers (more durable, natural appearance)", "Composite resin veneers (less invasive, more affordable)", "Minimal tooth preparation for contact lenses veneers", "Two to three appointment process with the dentist", "Care like natural teeth plus night guard"],
    "prevencionEs": ["Proteger los dientes de traumatismos", "No usar los dientes para abrir objetos", "Usar protector bucal si hay bruxismo", "Mantener buena higiene bucal", "Evitar morder alimentos muy duros con los dientes frontales"],
    "prevencionEn": ["Protect teeth from trauma", "Do not use teeth to open objects", "Use mouthguard if bruxism is present", "Maintain good oral hygiene", "Avoid biting very hard foods with front teeth"],
    "cuandoVerDentistaEs": ["Interes en mejorar la estetica dental", "Dientes manchados que no aclaran con blanqueamiento", "Dientes astillados o fracturados", "Para evaluar si es candidato a carillas"],
    "cuandoVerDentistaEn": ["Interest in improving dental aesthetics", "Stained teeth unresponsive to whitening", "Chipped or fractured teeth", "To evaluate candidacy for veneers"]
  },
  {
    "id": "implantes-dentales",
    "nombreEs": "Implantes Dentales",
    "nombreEn": "Dental Implants",
    "categoriaEs": "Cosmetica Dental",
    "categoriaEn": "Cosmetic Dentistry",
    "descripcionEs": "Los implantes dentales son raices artificiales de titanio que se colocan quirurgicamente en el hueso maxilar para soportar dientes de reemplazo. Son la opcion mas avanzada y duradera para reemplazar dientes perdidos, ofreciendo una solucion que se ve, se siente y funciona como dientes naturales.",
    "descripcionEn": "Dental implants are artificial titanium roots surgically placed into the jawbone to support replacement teeth. They are the most advanced and durable option for replacing lost teeth, offering a solution that looks, feels, and functions like natural teeth.",
    "sintomasEs": ["Uno o mas dientes faltantes", "Dentadura postiza incomoda o inestable", "Hueso maxilar suficiente para soportar el implante", "Encias saludables"],
    "sintomasEn": ["One or more missing teeth", "Uncomfortable or unstable denture", "Sufficient jawbone to support the implant", "Healthy gums"],
    "causasEs": ["Perdida dental por caries avanzada", "Enfermedad periodontal severa", "Traumatismo o accidente dental", "Fracaso de un puente dental previo", "Agenesia dental (ausencia congenita de dientes)"],
    "causasEn": ["Tooth loss from advanced decay", "Severe periodontal disease", "Dental trauma or accident", "Failure of a previous dental bridge", "Dental agenesis (congenital absence of teeth)"],
    "tratamientoEs": ["Evaluacion completa con radiografias y tomografia", "Colocacion quirurgica del implante de titanio", "Periodo de oseointegracion de 3 a 6 meses", "Colocacion del pilar y la corona definitiva", "Posible injerto oseo previo si el hueso es insuficiente"],
    "tratamientoEn": ["Complete evaluation with X-rays and CT scan", "Surgical placement of titanium implant", "Osseointegration period of 3 to 6 months", "Placement of abutment and final crown", "Possible prior bone graft if bone is insufficient"],
    "prevencionEs": ["Mantener buena salud dental para evitar perdida de dientes", "Tratar las caries y enfermedad periodontal tempranamente", "Usar protector bucal en deportes de contacto", "No fumar, ya que el tabaquismo reduce el exito del implante"],
    "prevencionEn": ["Maintain good dental health to prevent tooth loss", "Treat cavities and periodontal disease early", "Use mouthguard in contact sports", "Do not smoke as smoking reduces implant success"],
    "cuandoVerDentistaEs": ["Cuando falta uno o mas dientes", "Cuando una dentadura postiza es incomoda", "Para evaluacion de candidatura a implantes", "Dolor o movilidad en un implante existente"],
    "cuandoVerDentistaEn": ["When one or more teeth are missing", "When a denture is uncomfortable", "For implant candidacy evaluation", "Pain or mobility in an existing implant"]
  },
  {
    "id": "diente-fracturado",
    "nombreEs": "Diente Fracturado",
    "nombreEn": "Fractured Tooth",
    "categoriaEs": "Emergencias Dentales",
    "categoriaEn": "Dental Emergencies",
    "descripcionEs": "Una fractura dental puede variar desde una pequena grieta en el esmalte hasta una fractura completa que expone el nervio del diente. La gravedad del tratamiento depende de la extension y ubicacion de la fractura. Es una de las emergencias dentales mas comunes.",
    "descripcionEn": "A tooth fracture can range from a small crack in the enamel to a complete fracture exposing the tooth nerve. Treatment severity depends on the extent and location of the fracture. It is one of the most common dental emergencies.",
    "sintomasEs": ["Dolor al morder o masticar", "Sensibilidad al calor, frio o dulce", "Dolor intermitente que va y viene", "Hinchazon de la encia alrededor del diente", "Un pedazo visible del diente roto"],
    "sintomasEn": ["Pain when biting or chewing", "Sensitivity to heat, cold, or sweet", "Intermittent pain that comes and goes", "Gum swelling around the tooth", "A visible piece of broken tooth"],
    "causasEs": ["Morder alimentos muy duros", "Traumatismo por caida o golpe", "Caries que debilitan la estructura dental", "Bruxismo (rechinar los dientes)", "Cambios bruscos de temperatura en la boca"],
    "causasEn": ["Biting very hard foods", "Trauma from a fall or blow", "Cavities weakening tooth structure", "Bruxism (teeth grinding)", "Sudden temperature changes in the mouth"],
    "tratamientoEs": ["Resina compuesta para grietas menores", "Corona dental para fracturas mas grandes", "Tratamiento de conducto si la pulpa esta expuesta", "Extraccion si la fractura es vertical en la raiz", "Ferula temporal para estabilizar el diente"],
    "tratamientoEn": ["Composite resin for minor cracks", "Dental crown for larger fractures", "Root canal if pulp is exposed", "Extraction if fracture is vertical in the root", "Temporary splint to stabilize the tooth"],
    "prevencionEs": ["No morder hielo, dulces duros u objetos", "Usar protector bucal en deportes", "Usar ferula nocturna si hay bruxismo", "Tratar las caries a tiempo para evitar debilitamiento", "No usar los dientes como herramientas"],
    "prevencionEn": ["Do not bite ice, hard candy, or objects", "Use mouthguard in sports", "Use night guard if bruxism is present", "Treat cavities promptly to prevent weakening", "Do not use teeth as tools"],
    "cuandoVerDentistaEs": ["Dolor al morder (puede indicar fractura no visible)", "Pedazo de diente roto (guardar el fragmento)", "Sensibilidad que no mejora", "Hinchazon o sangrado en la zona"],
    "cuandoVerDentistaEn": ["Pain when biting (may indicate invisible fracture)", "Piece of broken tooth (save the fragment)", "Sensitivity that does not improve", "Swelling or bleeding in the area"]
  },
  {
    "id": "avulsion-dental",
    "nombreEs": "Avulsion Dental (Diente Completamente Desprendido)",
    "nombreEn": "Dental Avulsion (Completely Knocked-Out Tooth)",
    "categoriaEs": "Emergencias Dentales",
    "categoriaEn": "Dental Emergencies",
    "descripcionEs": "La avulsion dental ocurre cuando un diente es completamente desprendido de su alveolo por un traumatismo. Es una verdadera emergencia dental donde el tiempo es critico. Si se actua rapidamente (idealmente dentro de 30 minutos), el diente puede reimplantarse exitosamente.",
    "descripcionEn": "Dental avulsion occurs when a tooth is completely knocked out of its socket by trauma. It is a true dental emergency where time is critical. If acted upon quickly (ideally within 30 minutes), the tooth can be successfully reimplanted.",
    "sintomasEs": ["Diente completamente fuera de la boca", "Sangrado del alveolo vacio", "Dolor intenso en el area", "Hinchazon de labio o encia", "Posible dano en tejidos blandos circundantes"],
    "sintomasEn": ["Tooth completely out of the mouth", "Bleeding from the empty socket", "Intense pain in the area", "Lip or gum swelling", "Possible damage to surrounding soft tissues"],
    "causasEs": ["Accidentes deportivos", "Caidas", "Accidentes automovilisticos", "Peleas o violencia", "Accidentes infantiles durante el juego"],
    "causasEn": ["Sports accidents", "Falls", "Motor vehicle accidents", "Fights or violence", "Childhood play accidents"],
    "tratamientoEs": ["Reimplantacion inmediata del diente (si es permanente)", "Tomar el diente solo por la corona, nunca por la raiz", "Enjuagar suavemente con leche o solucion salina si esta sucio", "Mantener el diente en leche, saliva o solucion salina si no se puede reimplantar de inmediato", "Ferulizacion del diente reimplantado por 2 semanas", "Seguimiento para posible tratamiento de conducto"],
    "tratamientoEn": ["Immediate reimplantation of tooth (if permanent)", "Handle tooth only by the crown, never the root", "Gently rinse with milk or saline if dirty", "Keep tooth in milk, saliva, or saline if cannot reimplant immediately", "Splinting of reimplanted tooth for 2 weeks", "Follow-up for possible root canal treatment"],
    "prevencionEs": ["Usar protector bucal en deportes de contacto", "Usar cinturon de seguridad en vehiculos", "Supervisar a ninos durante actividades de riesgo", "Tratar dientes debilitados antes de que sean vulnerables"],
    "prevencionEn": ["Use mouthguard in contact sports", "Use seatbelt in vehicles", "Supervise children during high-risk activities", "Treat weakened teeth before they become vulnerable"],
    "cuandoVerDentistaEs": ["Inmediatamente, cada minuto cuenta", "Ir a urgencias dentales o sala de emergencias", "Llevar el diente en leche o solucion salina", "No reimplantar dientes de leche en ninos"],
    "cuandoVerDentistaEn": ["Immediately, every minute counts", "Go to dental emergency or emergency room", "Bring the tooth in milk or saline", "Do not reimplant baby teeth in children"]
  },
  {
    "id": "dolor-muelas-agudo",
    "nombreEs": "Dolor de Muelas Agudo",
    "nombreEn": "Acute Toothache",
    "categoriaEs": "Emergencias Dentales",
    "categoriaEn": "Dental Emergencies",
    "descripcionEs": "El dolor de muelas agudo es un dolor intenso y repentino en o alrededor de un diente. Puede ser senyal de multiples problemas dentales, desde una caries profunda hasta un absceso. El dolor dental severo siempre requiere evaluacion profesional para identificar y tratar la causa.",
    "descripcionEn": "An acute toothache is intense, sudden pain in or around a tooth. It can signal multiple dental problems, from a deep cavity to an abscess. Severe dental pain always requires professional evaluation to identify and treat the cause.",
    "sintomasEs": ["Dolor agudo, pulsatil o constante", "Dolor que empeora al acostarse", "Sensibilidad extrema al calor o frio", "Hinchazon de la cara o encia", "Fiebre en algunos casos", "Mal sabor de boca si hay infeccion"],
    "sintomasEn": ["Sharp, throbbing, or constant pain", "Pain that worsens when lying down", "Extreme sensitivity to heat or cold", "Swelling of the face or gum", "Fever in some cases", "Bad taste in mouth if infection present"],
    "causasEs": ["Caries dental profunda", "Absceso dental", "Diente fracturado", "Empaste o corona danada", "Erupcion de muela del juicio", "Sinusitis (puede simular dolor dental)"],
    "causasEn": ["Deep dental cavity", "Dental abscess", "Fractured tooth", "Damaged filling or crown", "Wisdom tooth eruption", "Sinusitis (can mimic dental pain)"],
    "tratamientoEs": ["Analgesicos como ibuprofeno o acetaminofen", "Enjuague con agua tibia y sal", "Aplicar compresa fria en la mejilla", "Buscar atencion dental urgente", "Evitar alimentos muy calientes, frios o duros", "No aplicar aspirina directamente sobre la encia"],
    "tratamientoEn": ["Pain relievers such as ibuprofen or acetaminophen", "Warm saltwater rinse", "Apply cold compress to the cheek", "Seek urgent dental care", "Avoid very hot, cold, or hard foods", "Do not apply aspirin directly on the gum"],
    "prevencionEs": ["Buena higiene bucal diaria", "Visitas dentales regulares", "Tratar las caries tempranamente", "No ignorar dolor dental leve", "Usar protector bucal en deportes"],
    "prevencionEn": ["Good daily oral hygiene", "Regular dental visits", "Treat cavities early", "Do not ignore mild dental pain", "Use mouthguard in sports"],
    "cuandoVerDentistaEs": ["Dolor dental que dura mas de un dia", "Fiebre acompanada de dolor dental", "Hinchazon en la cara o cuello", "Dificultad para abrir la boca", "Dolor que no responde a analgesicos"],
    "cuandoVerDentistaEn": ["Dental pain lasting more than one day", "Fever accompanying dental pain", "Swelling in the face or neck", "Difficulty opening the mouth", "Pain unresponsive to pain relievers"]
  },
  {
    "id": "salud-oral-cardiaca",
    "nombreEs": "Relacion Salud Oral y Salud Cardiaca",
    "nombreEn": "Oral Health and Heart Health Connection",
    "categoriaEs": "Salud Sistemica",
    "categoriaEn": "Systemic Health",
    "descripcionEs": "Existe una relacion significativa entre la salud oral y la salud cardiovascular. Las bacterias de la enfermedad periodontal pueden entrar al torrente sanguineo y contribuir a la inflamacion de los vasos sanguineos, aumentando el riesgo de enfermedad cardiaca y accidente cerebrovascular.",
    "descripcionEn": "There is a significant connection between oral health and cardiovascular health. Bacteria from periodontal disease can enter the bloodstream and contribute to blood vessel inflammation, increasing the risk of heart disease and stroke.",
    "sintomasEs": ["Enfermedad periodontal avanzada", "Sangrado frecuente de encias", "Infecciones dentales recurrentes", "Inflamacion cronica de las encias"],
    "sintomasEn": ["Advanced periodontal disease", "Frequent gum bleeding", "Recurring dental infections", "Chronic gum inflammation"],
    "causasEs": ["Bacterias periodontales que entran al torrente sanguineo", "Inflamacion cronica sistemica originada en la boca", "Placa arterial que contiene bacterias orales", "Respuesta inmunologica inflamatoria descontrolada"],
    "causasEn": ["Periodontal bacteria entering the bloodstream", "Chronic systemic inflammation originating in the mouth", "Arterial plaque containing oral bacteria", "Uncontrolled inflammatory immune response"],
    "tratamientoEs": ["Tratar activamente la enfermedad periodontal", "Mantener salud oral optima", "Informar al cardiologo sobre problemas dentales", "Informar al dentista sobre condiciones cardiacas", "Profilaxis antibiotica antes de procedimientos dentales si es necesario"],
    "tratamientoEn": ["Actively treat periodontal disease", "Maintain optimal oral health", "Inform cardiologist about dental problems", "Inform dentist about cardiac conditions", "Antibiotic prophylaxis before dental procedures if needed"],
    "prevencionEs": ["Cepillarse y usar hilo dental diariamente", "Visitas dentales regulares", "Tratar la enfermedad de encias tempranamente", "No fumar", "Controlar la presion arterial y el colesterol", "Dieta saludable para el corazon y los dientes"],
    "prevencionEn": ["Brush and floss daily", "Regular dental visits", "Treat gum disease early", "Do not smoke", "Control blood pressure and cholesterol", "Heart-healthy and tooth-healthy diet"],
    "cuandoVerDentistaEs": ["Si tiene enfermedad cardiaca, mantenga visitas dentales regulares", "Informe a su dentista de todos sus medicamentos cardiacos", "Sangrado excesivo o persistente de encias", "Antes de cirugia cardiaca, complete tratamiento dental"],
    "cuandoVerDentistaEn": ["If you have heart disease, maintain regular dental visits", "Tell your dentist about all cardiac medications", "Excessive or persistent gum bleeding", "Before cardiac surgery, complete dental treatment"]
  },
  {
    "id": "diabetes-salud-oral",
    "nombreEs": "Diabetes y Salud Oral",
    "nombreEn": "Diabetes and Oral Health",
    "categoriaEs": "Salud Sistemica",
    "categoriaEn": "Systemic Health",
    "descripcionEs": "La diabetes y la salud oral tienen una relacion bidireccional. La diabetes aumenta el riesgo de enfermedad periodontal, y la enfermedad periodontal puede dificultar el control de la glucosa en sangre. Las personas con diabetes necesitan cuidado dental especialmente riguroso.",
    "descripcionEn": "Diabetes and oral health have a bidirectional relationship. Diabetes increases the risk of periodontal disease, and periodontal disease can make blood glucose control more difficult. People with diabetes need especially rigorous dental care.",
    "sintomasEs": ["Encias que sangran o estan inflamadas", "Boca seca frecuente", "Infecciones bucales recurrentes incluyendo candidiasis", "Cicatrizacion lenta despues de procedimientos dentales", "Sabor metalico o alteracion del gusto", "Ardor en la boca"],
    "sintomasEn": ["Bleeding or swollen gums", "Frequent dry mouth", "Recurring oral infections including thrush", "Slow healing after dental procedures", "Metallic taste or taste alteration", "Burning sensation in the mouth"],
    "causasEs": ["Niveles elevados de glucosa en sangre que favorecen crecimiento bacteriano", "Reduccion del flujo sanguineo a las encias", "Respuesta inmunologica alterada", "Boca seca por medicamentos o la propia diabetes", "Mayor susceptibilidad a infecciones"],
    "causasEn": ["Elevated blood glucose levels promoting bacterial growth", "Reduced blood flow to the gums", "Altered immune response", "Dry mouth from medications or diabetes itself", "Increased susceptibility to infections"],
    "tratamientoEs": ["Control estricto de la glucosa en sangre", "Limpiezas dentales mas frecuentes (cada 3-4 meses)", "Tratamiento agresivo de la enfermedad periodontal", "Productos para la boca seca", "Comunicacion estrecha entre dentista y endocrinologo"],
    "tratamientoEn": ["Strict blood glucose control", "More frequent dental cleanings (every 3-4 months)", "Aggressive treatment of periodontal disease", "Dry mouth products", "Close communication between dentist and endocrinologist"],
    "prevencionEs": ["Mantener la hemoglobina glicosilada (HbA1c) bajo control", "Cepillarse y usar hilo dental meticulosamente", "Visitas dentales cada 3-4 meses", "No fumar", "Mantenerse bien hidratado", "Informar al dentista sobre su diabetes y medicamentos"],
    "prevencionEn": ["Keep glycated hemoglobin (HbA1c) under control", "Brush and floss meticulously", "Dental visits every 3-4 months", "Do not smoke", "Stay well hydrated", "Inform dentist about your diabetes and medications"],
    "cuandoVerDentistaEs": ["Al ser diagnosticado con diabetes", "Encias que sangran o estan inflamadas", "Boca seca persistente", "Infecciones orales que no sanan", "Cada 3-4 meses para mantenimiento"],
    "cuandoVerDentistaEn": ["When diagnosed with diabetes", "Bleeding or swollen gums", "Persistent dry mouth", "Oral infections that do not heal", "Every 3-4 months for maintenance"]
  },
  {
    "id": "tecnica-cepillado",
    "nombreEs": "Tecnica Correcta de Cepillado",
    "nombreEn": "Proper Brushing Technique",
    "categoriaEs": "Prevencion",
    "categoriaEn": "Prevention",
    "descripcionEs": "El cepillado correcto de los dientes es la base de una buena salud oral. Una tecnica adecuada con el cepillo correcto y la frecuencia apropiada puede prevenir caries, enfermedad de las encias y otros problemas dentales. Muchas personas cepillan sus dientes incorrectamente sin saberlo.",
    "descripcionEn": "Proper tooth brushing is the foundation of good oral health. An adequate technique with the right brush and appropriate frequency can prevent cavities, gum disease, and other dental problems. Many people brush their teeth incorrectly without knowing it.",
    "sintomasEs": ["Acumulacion de placa visible", "Sangrado de encias al cepillarse", "Mal aliento a pesar de cepillarse", "Caries frecuentes", "Retraccion de encias por cepillado agresivo"],
    "sintomasEn": ["Visible plaque buildup", "Gum bleeding when brushing", "Bad breath despite brushing", "Frequent cavities", "Gum recession from aggressive brushing"],
    "causasEs": ["Cepillado demasiado rapido (menos de 2 minutos)", "Uso de cepillo con cerdas duras", "Movimientos horizontales agresivos", "No cepillar todas las superficies del diente", "No reemplazar el cepillo cada 3 meses"],
    "causasEn": ["Brushing too quickly (less than 2 minutes)", "Using a hard-bristle toothbrush", "Aggressive horizontal movements", "Not brushing all tooth surfaces", "Not replacing the toothbrush every 3 months"],
    "tratamientoEs": ["Tecnica de Bass modificada: colocar el cepillo en angulo de 45 grados contra la encia", "Movimientos circulares suaves y cortos", "Cepillar durante al menos 2 minutos", "Cepillar todas las superficies: exterior, interior y de masticacion", "Cepillar la lengua suavemente", "Usar cepillo de cerdas suaves"],
    "tratamientoEn": ["Modified Bass technique: place brush at 45-degree angle against the gumline", "Gentle short circular motions", "Brush for at least 2 minutes", "Brush all surfaces: outer, inner, and chewing surfaces", "Gently brush the tongue", "Use a soft-bristle toothbrush"],
    "prevencionEs": ["Cepillarse dos veces al dia, manana y noche", "Usar pasta dental con fluor", "Reemplazar el cepillo cada 3 meses o cuando las cerdas se abran", "Considerar un cepillo electrico con temporizador", "No compartir cepillos dentales"],
    "prevencionEn": ["Brush twice daily, morning and night", "Use fluoride toothpaste", "Replace toothbrush every 3 months or when bristles fray", "Consider an electric toothbrush with timer", "Do not share toothbrushes"],
    "cuandoVerDentistaEs": ["Si tiene dudas sobre su tecnica de cepillado", "Si las encias sangran regularmente al cepillarse", "Si desarrolla caries frecuentemente a pesar de cepillarse", "Consulta de rutina cada 6 meses"],
    "cuandoVerDentistaEn": ["If unsure about your brushing technique", "If gums regularly bleed when brushing", "If cavities develop frequently despite brushing", "Routine checkup every 6 months"]
  },
  {
    "id": "uso-hilo-dental",
    "nombreEs": "Uso de Hilo Dental",
    "nombreEn": "Dental Flossing",
    "categoriaEs": "Prevencion",
    "categoriaEn": "Prevention",
    "descripcionEs": "El uso de hilo dental es esencial para eliminar la placa y los restos de alimentos de entre los dientes y debajo de la linea de las encias, areas donde el cepillo no puede llegar. Solo el cepillado limpia aproximadamente el 60 por ciento de las superficies dentales.",
    "descripcionEn": "Dental flossing is essential for removing plaque and food debris from between teeth and below the gumline, areas the toothbrush cannot reach. Brushing alone cleans approximately 60 percent of tooth surfaces.",
    "sintomasEs": ["Sangrado de encias al iniciar el uso de hilo dental", "Acumulacion de sarro entre los dientes", "Mal aliento persistente", "Caries entre los dientes (interproximales)"],
    "sintomasEn": ["Gum bleeding when starting to floss", "Tartar buildup between teeth", "Persistent bad breath", "Cavities between teeth (interproximal)"],
    "causasEs": ["No usar hilo dental permite acumulacion de placa entre dientes", "La placa no removida se convierte en sarro", "Bacterias atrapadas causan caries y enfermedad de encias", "El cepillo no alcanza el espacio entre dientes"],
    "causasEn": ["Not flossing allows plaque buildup between teeth", "Unremoved plaque turns into tartar", "Trapped bacteria cause cavities and gum disease", "The toothbrush cannot reach between teeth"],
    "tratamientoEs": ["Usar aproximadamente 45 centimetros de hilo dental", "Enrollar el hilo alrededor de los dedos medios", "Deslizar suavemente entre los dientes con movimiento de vaiven", "Curvar el hilo en forma de C alrededor de cada diente", "Mover el hilo arriba y abajo contra la superficie del diente", "Usar una seccion limpia para cada espacio"],
    "tratamientoEn": ["Use approximately 18 inches of dental floss", "Wrap floss around middle fingers", "Gently slide between teeth with a sawing motion", "Curve floss in a C shape around each tooth", "Move floss up and down against the tooth surface", "Use a clean section for each space"],
    "prevencionEs": ["Usar hilo dental al menos una vez al dia", "Ser constante aunque las encias sangren inicialmente", "Probar diferentes tipos de hilo dental para encontrar el mas comodo", "Considerar palillos interdentales o irrigadores bucales como alternativa", "Hacer del hilo dental un habito antes de cepillarse"],
    "prevencionEn": ["Floss at least once daily", "Be consistent even if gums bleed initially", "Try different types of floss to find the most comfortable", "Consider interdental picks or water flossers as alternatives", "Make flossing a habit before brushing"],
    "cuandoVerDentistaEs": ["Si las encias sangran despues de varias semanas de usar hilo dental", "Si tiene dificultad para pasar el hilo entre los dientes", "Para aprender la tecnica correcta de uso del hilo dental"],
    "cuandoVerDentistaEn": ["If gums bleed after several weeks of flossing", "If you have difficulty getting floss between teeth", "To learn the correct flossing technique"]
  },
  {
    "id": "fluoruro",
    "nombreEs": "Fluoruro y Salud Dental",
    "nombreEn": "Fluoride and Dental Health",
    "categoriaEs": "Prevencion",
    "categoriaEn": "Prevention",
    "descripcionEs": "El fluoruro es un mineral natural que fortalece el esmalte dental y ayuda a prevenir las caries. Se encuentra en el agua fluorada, pastas dentales, enjuagues bucales y tratamientos profesionales. Su uso adecuado es una de las estrategias mas efectivas para la prevencion de caries a nivel mundial.",
    "descripcionEn": "Fluoride is a natural mineral that strengthens tooth enamel and helps prevent cavities. It is found in fluoridated water, toothpastes, mouth rinses, and professional treatments. Its proper use is one of the most effective cavity prevention strategies worldwide.",
    "sintomasEs": ["Caries frecuentes pueden indicar falta de fluor", "Esmalte dental debil o con erosion", "Manchas blancas en etapas tempranas de caries"],
    "sintomasEn": ["Frequent cavities may indicate fluoride deficiency", "Weak or eroding enamel", "White spots in early stages of decay"],
    "causasEs": ["Agua sin fluoruro", "No usar pasta dental con fluor", "Consumo excesivo de alimentos acidos", "Condiciones que reducen el flujo salival"],
    "causasEn": ["Non-fluoridated water", "Not using fluoride toothpaste", "Excessive consumption of acidic foods", "Conditions that reduce saliva flow"],
    "tratamientoEs": ["Usar pasta dental con fluor (1000-1500 ppm para adultos)", "Barniz de fluor profesional cada 3-6 meses", "Enjuague bucal con fluor", "Suplementos de fluor en areas sin agua fluorada (bajo prescripcion)", "Cantidad del tamano de un grano de arroz para ninos menores de 3 anos"],
    "tratamientoEn": ["Use fluoride toothpaste (1000-1500 ppm for adults)", "Professional fluoride varnish every 3-6 months", "Fluoride mouth rinse", "Fluoride supplements in non-fluoridated areas (by prescription)", "Rice grain-sized amount for children under 3"],
    "prevencionEs": ["Usar pasta dental con fluor desde la erupcion del primer diente", "Beber agua fluorada cuando este disponible", "Aplicaciones profesionales de fluor regularmente", "Supervisar a ninos pequenos para evitar que traguen pasta dental", "Consultar al dentista sobre necesidades individuales de fluor"],
    "prevencionEn": ["Use fluoride toothpaste from first tooth eruption", "Drink fluoridated water when available", "Regular professional fluoride applications", "Supervise young children to avoid swallowing toothpaste", "Consult dentist about individual fluoride needs"],
    "cuandoVerDentistaEs": ["Para evaluar si necesita mas fluor", "Si vive en area sin agua fluorada", "Ninos en riesgo alto de caries", "Para aplicaciones profesionales de fluor"],
    "cuandoVerDentistaEn": ["To evaluate if you need more fluoride", "If you live in a non-fluoridated area", "Children at high risk for cavities", "For professional fluoride applications"]
  },
  {
    "id": "selladores-dentales",
    "nombreEs": "Selladores Dentales",
    "nombreEn": "Dental Sealants",
    "categoriaEs": "Prevencion",
    "categoriaEn": "Prevention",
    "descripcionEs": "Los selladores dentales son recubrimientos delgados de resina plastica que se aplican sobre las superficies de masticacion de los dientes posteriores (premolares y molares) para prevenir la acumulacion de bacterias y restos de alimentos en las fisuras y fosas naturales del diente.",
    "descripcionEn": "Dental sealants are thin plastic resin coatings applied to the chewing surfaces of back teeth (premolars and molars) to prevent the accumulation of bacteria and food debris in the natural pits and fissures of the tooth.",
    "sintomasEs": ["Fisuras profundas en molares y premolares", "Historial de caries en superficies de masticacion", "Dientes posteriores recien erupcionados en ninos"],
    "sintomasEn": ["Deep fissures in molars and premolars", "History of cavities on chewing surfaces", "Newly erupted back teeth in children"],
    "causasEs": ["Anatomia natural de los dientes con fisuras profundas", "Dificultad para limpiar las fisuras con el cepillo", "Alto riesgo de caries individual"],
    "causasEn": ["Natural tooth anatomy with deep fissures", "Difficulty cleaning fissures with toothbrush", "High individual cavity risk"],
    "tratamientoEs": ["Limpieza de la superficie del diente", "Aplicacion de acido grabador para preparar la superficie", "Aplicacion del sellador liquido sobre las fisuras", "Polimerizacion con luz especial", "Proceso rapido e indoloro sin necesidad de anestesia", "Verificacion periodica del sellador"],
    "tratamientoEn": ["Cleaning the tooth surface", "Application of etching acid to prepare the surface", "Application of liquid sealant over fissures", "Curing with special light", "Quick and painless process without anesthesia needed", "Periodic sealant check"],
    "prevencionEs": ["Aplicar selladores en los primeros molares permanentes (6 anos)", "Aplicar en segundos molares permanentes (12 anos)", "Considerar en premolares si hay alto riesgo de caries", "Mantener buena higiene bucal aun con selladores", "Revisiones periodicas para verificar integridad del sellador"],
    "prevencionEn": ["Apply sealants on first permanent molars (age 6)", "Apply on second permanent molars (age 12)", "Consider for premolars if high cavity risk", "Maintain good oral hygiene even with sealants", "Periodic checkups to verify sealant integrity"],
    "cuandoVerDentistaEs": ["Cuando erupcionan los primeros molares permanentes del nino", "Si el nino tiene alto riesgo de caries", "Para evaluar si los selladores existentes necesitan reemplazo"],
    "cuandoVerDentistaEn": ["When child's first permanent molars erupt", "If child has high cavity risk", "To evaluate if existing sealants need replacement"]
  },
  {
    "id": "limpieza-profesional",
    "nombreEs": "Limpieza Dental Profesional",
    "nombreEn": "Professional Dental Cleaning",
    "categoriaEs": "Prevencion",
    "categoriaEn": "Prevention",
    "descripcionEs": "La limpieza dental profesional, conocida como profilaxis dental, es un procedimiento realizado por un dentista o higienista dental para eliminar la placa, el sarro y las manchas que no pueden eliminarse con el cepillado y el hilo dental solos. Se recomienda generalmente cada seis meses.",
    "descripcionEn": "Professional dental cleaning, known as dental prophylaxis, is a procedure performed by a dentist or dental hygienist to remove plaque, tartar, and stains that cannot be removed by brushing and flossing alone. It is generally recommended every six months.",
    "sintomasEs": ["Sarro visible en los dientes", "Manchas en los dientes", "Mal aliento persistente", "Sangrado de encias", "Sensacion de rugosidad en los dientes"],
    "sintomasEn": ["Visible tartar on teeth", "Stains on teeth", "Persistent bad breath", "Gum bleeding", "Rough feeling on teeth"],
    "causasEs": ["La placa se endurece y forma sarro que solo un profesional puede eliminar", "Las manchas se acumulan gradualmente", "Areas dificiles de alcanzar con cepillado regular"],
    "causasEn": ["Plaque hardens into tartar that only a professional can remove", "Stains accumulate gradually", "Hard-to-reach areas with regular brushing"],
    "tratamientoEs": ["Eliminacion de sarro con instrumentos ultrasonicos y manuales", "Pulido dental para eliminar manchas superficiales", "Aplicacion de fluor profesional", "Evaluacion de la salud de las encias", "Radiografias periodicas para detectar problemas ocultos", "Educacion personalizada sobre higiene bucal"],
    "tratamientoEn": ["Tartar removal with ultrasonic and hand instruments", "Dental polishing to remove surface stains", "Professional fluoride application", "Gum health evaluation", "Periodic X-rays to detect hidden problems", "Personalized oral hygiene education"],
    "prevencionEs": ["Programar limpiezas cada 6 meses (o mas frecuente si lo indica el dentista)", "Mantener buena higiene bucal entre visitas", "Informar al dentista sobre cambios en su salud general", "No esperar a tener dolor para visitar al dentista"],
    "prevencionEn": ["Schedule cleanings every 6 months (or more frequently if dentist recommends)", "Maintain good oral hygiene between visits", "Inform dentist about changes in overall health", "Do not wait for pain to visit the dentist"],
    "cuandoVerDentistaEs": ["Cada 6 meses para limpieza de rutina", "Mas frecuentemente si tiene enfermedad periodontal", "Si nota acumulacion de sarro", "Antes de procedimientos medicos importantes"],
    "cuandoVerDentistaEn": ["Every 6 months for routine cleaning", "More frequently if you have periodontal disease", "If you notice tartar buildup", "Before important medical procedures"]
  }
]`);

// ─── Search and Filter Functions ─────────────────────────────────────────────

/**
 * Busca entradas dentales por texto en nombres, descripciones, sintomas,
 * causas, tratamiento o prevencion (busca en ambos idiomas).
 *
 * Searches dental entries by text across names, descriptions, symptoms,
 * causes, treatment, or prevention (searches both languages).
 */
export function buscarDental(consulta: string): DentalEntry[] {
  const termino = consulta.toLowerCase().trim();
  if (!termino) return [];

  return dentalEnciclopedia.filter((entry) => {
    const campos: string[] = [
      entry.nombreEs,
      entry.nombreEn,
      entry.categoriaEs,
      entry.categoriaEn,
      entry.descripcionEs,
      entry.descripcionEn,
      ...entry.sintomasEs,
      ...entry.sintomasEn,
      ...entry.causasEs,
      ...entry.causasEn,
      ...entry.tratamientoEs,
      ...entry.tratamientoEn,
      ...entry.prevencionEs,
      ...entry.prevencionEn,
      ...entry.cuandoVerDentistaEs,
      ...entry.cuandoVerDentistaEn,
    ];
    return campos.some((campo) => campo.toLowerCase().includes(termino));
  });
}

/**
 * Obtiene una entrada dental por su ID unico.
 * Retrieves a dental entry by its unique ID.
 */
export function getDentalById(id: string): DentalEntry | undefined {
  return dentalEnciclopedia.find((entry) => entry.id === id);
}

/**
 * Filtra entradas dentales por categoria (busca en ambos idiomas).
 * Filters dental entries by category (searches both languages).
 */
export function getDentalPorCategoria(categoria: string): DentalEntry[] {
  const cat = categoria.toLowerCase().trim();
  if (!cat) return [];

  return dentalEnciclopedia.filter(
    (entry) =>
      entry.categoriaEs.toLowerCase().includes(cat) ||
      entry.categoriaEn.toLowerCase().includes(cat)
  );
}
