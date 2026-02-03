/**
 * Patient-Friendly Drug Mechanism Explanations
 *
 * Level 2 (high school reading level) explanations of how the top 20
 * most prescribed drug classes work. Each entry includes a simple analogy,
 * what the drug does in the body, common side effects explained simply,
 * and when NOT to take the medication.
 *
 * Intended for patient education in the SOMA medical education app.
 */

// ============================================
// Interface
// ============================================

export interface MechanismExplained {
  id: string;
  name: string;
  nameEs: string;
  drugClass: string;
  drugClassEs: string;
  analogy: string;
  analogyEs: string;
  whatItDoes: string;
  whatItDoesEs: string;
  commonSideEffects: string[];
  commonSideEffectsEs: string[];
  whenNotToTake: string[];
  whenNotToTakeEs: string[];
  safetyWarning?: string;
  safetyWarningEs?: string;
}

// ============================================
// Helper
// ============================================

/** Compact constructor to reduce boilerplate */
function me(
  id: string,
  name: string,
  nameEs: string,
  drugClass: string,
  drugClassEs: string,
  analogy: string,
  analogyEs: string,
  whatItDoes: string,
  whatItDoesEs: string,
  commonSideEffects: string[],
  commonSideEffectsEs: string[],
  whenNotToTake: string[],
  whenNotToTakeEs: string[],
  safetyWarning?: string,
  safetyWarningEs?: string,
): MechanismExplained {
  return {
    id, name, nameEs, drugClass, drugClassEs,
    analogy, analogyEs, whatItDoes, whatItDoesEs,
    commonSideEffects, commonSideEffectsEs,
    whenNotToTake, whenNotToTakeEs,
    ...(safetyWarning != null ? { safetyWarning, safetyWarningEs } : {}),
  };
}

// ============================================
// Database — Top 20 Drug Classes Explained
// ============================================

export const MECHANISMS_EXPLAINED: Record<string, MechanismExplained> = {

  // ── 1. Statins ────────────────────────────────

  statins: me(
    'statins',
    'Statins (Cholesterol-Lowering)',
    'Estatinas (reductoras de colesterol)',
    'HMG-CoA Reductase Inhibitors',
    'Inhibidores de la HMG-CoA reductasa',
    'Think of your liver as a cholesterol factory. Statins turn down the factory\'s main machine, so your liver makes less cholesterol. When the liver needs more cholesterol, it pulls it out of your blood — and that lowers your cholesterol levels.',
    'Piensa en tu higado como una fabrica de colesterol. Las estatinas bajan la velocidad de la maquina principal, asi que tu higado produce menos colesterol. Cuando necesita mas, lo saca de tu sangre, y eso baja tus niveles.',
    'Statins block an enzyme in the liver that is needed to make cholesterol. With less cholesterol being made, your liver grabs cholesterol from your bloodstream instead. This lowers the "bad" cholesterol (LDL) that can clog your arteries and lead to heart attacks or strokes.',
    'Las estatinas bloquean una enzima del higado que se necesita para producir colesterol. Con menos colesterol producido, tu higado toma colesterol de la sangre. Esto baja el colesterol "malo" (LDL) que puede tapar tus arterias y causar infartos o derrames.',
    [
      'Muscle aches or soreness — your muscles may feel tired or achy, like after a workout you did not do',
      'Upset stomach — mild nausea or diarrhea when you first start',
      'Headache — usually mild and goes away on its own',
    ],
    [
      'Dolor o molestia muscular — tus musculos pueden sentirse cansados o adoloridos, como despues de hacer ejercicio sin haberlo hecho',
      'Malestar estomacal — nausea leve o diarrea al comenzar',
      'Dolor de cabeza — generalmente leve y desaparece solo',
    ],
    [
      'If you are pregnant or trying to become pregnant — statins can harm the baby',
      'If you have serious liver problems — your doctor should check your liver first',
      'If you have unexplained muscle pain — tell your doctor right away',
    ],
    [
      'Si estas embarazada o intentando quedar embarazada — las estatinas pueden danar al bebe',
      'Si tienes problemas graves del higado — tu doctor debe revisarlo primero',
      'Si tienes dolor muscular sin explicacion — dile a tu doctor de inmediato',
    ],
  ),

  // ── 2. ACE Inhibitors ────────────────────────

  ace_inhibitors: me(
    'ace_inhibitors',
    'ACE Inhibitors (Blood Pressure)',
    'Inhibidores de la ECA (presion arterial)',
    'Angiotensin-Converting Enzyme Inhibitors',
    'Inhibidores de la enzima convertidora de angiotensina',
    'Imagine your blood vessels are garden hoses. Your body makes a chemical (angiotensin II) that squeezes those hoses tighter, raising pressure. ACE inhibitors stop that chemical from being made, so the hoses relax and blood flows more easily.',
    'Imagina que tus vasos sanguineos son mangueras de jardin. Tu cuerpo produce un quimico (angiotensina II) que aprieta esas mangueras, subiendo la presion. Los inhibidores de la ECA evitan que se produzca ese quimico, asi las mangueras se relajan y la sangre fluye mejor.',
    'ACE inhibitors block the body from making a hormone called angiotensin II that tightens blood vessels. When blood vessels relax and widen, blood pressure drops. This also makes it easier for the heart to pump blood. These medicines can protect the kidneys, especially in people with diabetes.',
    'Los inhibidores de la ECA evitan que el cuerpo produzca una hormona llamada angiotensina II que aprieta los vasos sanguineos. Cuando los vasos se relajan y se abren, la presion baja. Esto tambien facilita el bombeo del corazon. Estos medicamentos pueden proteger los rinones, especialmente en personas con diabetes.',
    [
      'Dry cough — a persistent tickle in the throat that makes you cough; happens in about 1 in 10 people',
      'Dizziness — especially when standing up quickly, because blood pressure drops',
      'High potassium levels — you may not feel this, but your doctor checks it with blood tests',
    ],
    [
      'Tos seca — un cosquilleo constante en la garganta que te hace toser; le pasa a 1 de cada 10 personas',
      'Mareo — especialmente al levantarte rapido, porque la presion baja',
      'Niveles altos de potasio — puede que no lo sientas, pero tu doctor lo revisa con analisis de sangre',
    ],
    [
      'If you are pregnant or planning to become pregnant — can cause serious harm to the baby',
      'If you have ever had severe swelling of the face, lips, or throat from this medicine (angioedema)',
      'If you have very narrowed arteries going to both kidneys',
    ],
    [
      'Si estas embarazada o planeas estarlo — puede causar dano grave al bebe',
      'Si alguna vez tuviste hinchazon severa de la cara, labios o garganta por este medicamento (angioedema)',
      'Si tienes las arterias muy estrechas en ambos rinones',
    ],
  ),

  // ── 3. Beta-Blockers ─────────────────────────

  beta_blockers: me(
    'beta_blockers',
    'Beta-Blockers (Heart Rate & Blood Pressure)',
    'Betabloqueantes (frecuencia cardiaca y presion arterial)',
    'Beta-Adrenergic Blockers',
    'Bloqueadores beta-adrenergicos',
    'Your heart has tiny "gas pedals" called beta receptors. Adrenaline pushes those pedals to make the heart beat faster and harder. Beta-blockers cover those pedals so adrenaline cannot reach them, keeping your heart slow and steady.',
    'Tu corazon tiene pequenos "aceleradores" llamados receptores beta. La adrenalina pisa esos aceleradores para que el corazon lata mas rapido y fuerte. Los betabloqueantes cubren esos aceleradores para que la adrenalina no los alcance, manteniendo tu corazon lento y estable.',
    'Beta-blockers block the effects of adrenaline (the "fight or flight" hormone) on the heart. This makes the heart beat slower and with less force, which lowers blood pressure. It also means the heart needs less oxygen, which helps people with chest pain or heart failure.',
    'Los betabloqueantes bloquean los efectos de la adrenalina (la hormona de "luchar o huir") en el corazon. Esto hace que el corazon lata mas lento y con menos fuerza, bajando la presion arterial. Tambien significa que el corazon necesita menos oxigeno, lo que ayuda a personas con dolor de pecho o insuficiencia cardiaca.',
    [
      'Feeling tired or sluggish — since the heart is beating more gently, you may have less energy',
      'Cold hands and feet — less blood flow reaches your fingers and toes',
      'Dizziness — from slower heart rate and lower blood pressure',
      'Weight gain — may happen in some people over time',
    ],
    [
      'Sentirse cansado o sin energia — como el corazon late mas suave, puedes tener menos energia',
      'Manos y pies frios — llega menos sangre a tus dedos',
      'Mareo — por la frecuencia cardiaca mas lenta y la presion mas baja',
      'Aumento de peso — puede pasar en algunas personas con el tiempo',
    ],
    [
      'If you have very severe asthma — some beta-blockers can tighten your airways',
      'If your heart rate is already very slow (under 50 beats per minute)',
      'Do NOT stop suddenly — always taper off slowly with your doctor\'s help, or your heart may race dangerously',
    ],
    [
      'Si tienes asma muy severa — algunos betabloqueantes pueden apretar tus vias respiratorias',
      'Si tu frecuencia cardiaca ya es muy lenta (menos de 50 latidos por minuto)',
      'NO dejes de tomarlo de repente — siempre reduce la dosis poco a poco con ayuda de tu doctor, o tu corazon podria acelerarse peligrosamente',
    ],
  ),

  // ── 4. Metformin ──────────────────────────────

  metformin: me(
    'metformin',
    'Metformin (Blood Sugar Control)',
    'Metformina (control de azucar en sangre)',
    'Biguanides',
    'Biguanidas',
    'Think of your liver as a sugar warehouse that keeps shipping out sugar even when your blood already has too much. Metformin tells the warehouse to slow down shipments. It also helps your muscles use the sugar that is already in your blood more efficiently.',
    'Piensa en tu higado como un almacen de azucar que sigue enviando azucar aunque tu sangre ya tenga demasiada. La metformina le dice al almacen que reduzca los envios. Tambien ayuda a tus musculos a usar el azucar que ya esta en tu sangre de manera mas eficiente.',
    'Metformin works in three ways: it tells the liver to make less sugar, it helps your muscles and cells take in more sugar from the blood, and it slows sugar absorption from food. Unlike some other diabetes medicines, it does not cause low blood sugar on its own and does not cause weight gain.',
    'La metformina funciona de tres formas: le dice al higado que produzca menos azucar, ayuda a tus musculos y celulas a tomar mas azucar de la sangre, y retrasa la absorcion de azucar de los alimentos. A diferencia de otros medicamentos para diabetes, no causa azucar baja por si sola y no causa aumento de peso.',
    [
      'Upset stomach — nausea, diarrhea, or bloating, especially when you first start (taking it with food helps)',
      'Metallic taste — some people notice a metal-like taste in their mouth',
      'Low vitamin B12 — with long-term use, your body may absorb less of this vitamin',
    ],
    [
      'Malestar estomacal — nausea, diarrea o hinchazon, especialmente al empezar (tomarla con comida ayuda)',
      'Sabor metalico — algunas personas notan un sabor a metal en la boca',
      'Vitamina B12 baja — con uso prolongado, tu cuerpo puede absorber menos de esta vitamina',
    ],
    [
      'If your kidneys are not working well (your doctor checks this with blood tests)',
      'If you are about to have a medical scan with contrast dye — stop metformin before and after',
      'If you are severely dehydrated or have a serious infection',
    ],
    [
      'Si tus rinones no funcionan bien (tu doctor lo revisa con analisis de sangre)',
      'Si te van a hacer un estudio con medio de contraste — deja la metformina antes y despues',
      'Si estas severamente deshidratado o tienes una infeccion grave',
    ],
  ),

  // ── 5. SSRIs ──────────────────────────────────

  ssris: me(
    'ssris',
    'SSRIs (Antidepressants)',
    'ISRS (antidepresivos)',
    'Selective Serotonin Reuptake Inhibitors',
    'Inhibidores selectivos de la recaptacion de serotonina',
    'Brain cells talk to each other using chemical messengers. Serotonin is one of those messengers that helps you feel calm and happy. Normally the sending cell sucks serotonin back up too quickly. SSRIs block that vacuum, so serotonin stays around longer and keeps working.',
    'Las celulas del cerebro se comunican con mensajeros quimicos. La serotonina es uno de esos mensajeros que te ayuda a sentirte tranquilo y feliz. Normalmente la celula que la envia la reabsorbe muy rapido. Los ISRS bloquean esa aspiradora, asi la serotonina se queda mas tiempo y sigue funcionando.',
    'SSRIs increase the amount of serotonin available in the brain. Serotonin helps regulate mood, sleep, and anxiety. By keeping more serotonin active between brain cells, these medicines gradually improve depression and anxiety. They take 4 to 6 weeks to reach their full effect because the brain needs time to adjust.',
    'Los ISRS aumentan la cantidad de serotonina disponible en el cerebro. La serotonina ayuda a regular el animo, el sueno y la ansiedad. Al mantener mas serotonina activa entre las celulas del cerebro, estos medicamentos mejoran gradualmente la depresion y la ansiedad. Tardan de 4 a 6 semanas en alcanzar su efecto completo porque el cerebro necesita tiempo para ajustarse.',
    [
      'Nausea or upset stomach — common in the first week or two, then usually improves',
      'Trouble sleeping or feeling drowsy — may go either way depending on the person',
      'Sexual side effects — lower sex drive or difficulty with orgasm',
      'Headache — usually mild and temporary',
    ],
    [
      'Nausea o malestar estomacal — comun en las primeras una o dos semanas, luego suele mejorar',
      'Problemas para dormir o sentir sueno — puede ir en cualquier direccion segun la persona',
      'Efectos sexuales — menos deseo sexual o dificultad para el orgasmo',
      'Dolor de cabeza — generalmente leve y temporal',
    ],
    [
      'If you are taking an MAO inhibitor (another type of antidepressant) — the combination is dangerous',
      'Do NOT stop suddenly — taper slowly with your doctor to avoid withdrawal symptoms like dizziness and irritability',
      'Tell your doctor right away if you feel more depressed or have thoughts of self-harm, especially in the first few weeks',
    ],
    [
      'Si tomas un inhibidor de la MAO (otro tipo de antidepresivo) — la combinacion es peligrosa',
      'NO dejes de tomarlo de repente — reduce la dosis poco a poco con tu doctor para evitar sintomas de abstinencia como mareo e irritabilidad',
      'Dile a tu doctor de inmediato si te sientes mas deprimido o tienes pensamientos de hacerte dano, especialmente en las primeras semanas',
    ],
    'Young people under 25 may have increased thoughts of suicide when first starting SSRIs. Close monitoring is essential during the first weeks of treatment.',
    'Los jovenes menores de 25 anos pueden tener mas pensamientos suicidas al empezar los ISRS. Es esencial vigilar de cerca durante las primeras semanas de tratamiento.',
  ),

  // ── 6. PPIs ───────────────────────────────────

  ppis: me(
    'ppis',
    'PPIs (Stomach Acid Reducers)',
    'IBP (reductores de acido estomacal)',
    'Proton Pump Inhibitors',
    'Inhibidores de la bomba de protones',
    'Your stomach has millions of tiny acid pumps that spray acid to digest food. PPIs switch off those pumps. It is like turning off a sprinkler — once the pump is off, it stays off until your body builds a new one, so acid stays low for a full day or more.',
    'Tu estomago tiene millones de pequenas bombas de acido que rocian acido para digerir la comida. Los IBP apagan esas bombas. Es como apagar un aspersor — una vez que la bomba se apaga, se queda apagada hasta que tu cuerpo construye una nueva, asi el acido se mantiene bajo por un dia completo o mas.',
    'PPIs shut down the acid-making pumps in the stomach lining. With much less acid, heartburn improves, ulcers can heal, and the esophagus (the tube from your mouth to your stomach) is protected from acid damage. They work best when taken 30 to 60 minutes before eating.',
    'Los IBP apagan las bombas productoras de acido en el revestimiento del estomago. Con mucho menos acido, la acidez mejora, las ulceras pueden sanar y el esofago (el tubo de la boca al estomago) queda protegido del dano por acido. Funcionan mejor si se toman de 30 a 60 minutos antes de comer.',
    [
      'Headache — the most common side effect, usually mild',
      'Diarrhea or constipation — your digestion may change slightly',
      'Low magnesium or B12 — with long-term use, your body may have trouble absorbing certain nutrients',
      'Slightly higher risk of stomach infections — acid normally kills germs in food',
    ],
    [
      'Dolor de cabeza — el efecto secundario mas comun, generalmente leve',
      'Diarrea o estrenimiento — tu digestion puede cambiar un poco',
      'Magnesio o B12 bajos — con uso prolongado, tu cuerpo puede tener dificultad para absorber ciertos nutrientes',
      'Riesgo ligeramente mayor de infecciones estomacales — el acido normalmente mata germenes en la comida',
    ],
    [
      'If you have been using them for more than 8 weeks without your doctor\'s approval — long-term use needs monitoring',
      'Do not stop suddenly after long-term use — your stomach may make extra acid temporarily (rebound)',
      'If you take certain HIV medicines (like rilpivirine) — PPIs reduce their absorption',
    ],
    [
      'Si los has usado por mas de 8 semanas sin aprobacion de tu doctor — el uso prolongado necesita vigilancia',
      'No los dejes de repente despues de uso prolongado — tu estomago puede producir acido extra temporalmente (rebote)',
      'Si tomas ciertos medicamentos para VIH (como rilpivirina) — los IBP reducen su absorcion',
    ],
  ),

  // ── 7. NSAIDs ─────────────────────────────────

  nsaids: me(
    'nsaids',
    'NSAIDs (Pain & Inflammation)',
    'AINEs (dolor e inflamacion)',
    'Nonsteroidal Anti-Inflammatory Drugs',
    'Antiinflamatorios no esteroideos',
    'When you get hurt, your body makes chemicals called prostaglandins that cause pain, swelling, and fever — like an alarm system. NSAIDs turn down that alarm by blocking the enzyme (COX) that makes prostaglandins. Less alarm means less pain and swelling.',
    'Cuando te lastimas, tu cuerpo produce quimicos llamados prostaglandinas que causan dolor, hinchazon y fiebre — como un sistema de alarma. Los AINEs bajan esa alarma al bloquear la enzima (COX) que produce prostaglandinas. Menos alarma significa menos dolor e hinchazon.',
    'NSAIDs block an enzyme called COX that your body uses to make prostaglandins. Prostaglandins cause inflammation, pain, and fever. By reducing them, NSAIDs relieve headaches, muscle aches, arthritis, and bring down fevers. Common examples are ibuprofen (Advil) and naproxen (Aleve).',
    'Los AINEs bloquean una enzima llamada COX que tu cuerpo usa para producir prostaglandinas. Las prostaglandinas causan inflamacion, dolor y fiebre. Al reducirlas, los AINEs alivian dolores de cabeza, dolores musculares, artritis y bajan la fiebre. Ejemplos comunes son ibuprofeno (Advil) y naproxeno (Aleve).',
    [
      'Stomach irritation or ulcers — prostaglandins also protect your stomach lining, so blocking them can cause stomach pain or bleeding',
      'Kidney strain — these medicines affect blood flow to the kidneys, especially if you are dehydrated',
      'Higher blood pressure — because they cause your body to hold on to more salt and water',
      'Increased heart risk — with long-term, high-dose use',
    ],
    [
      'Irritacion estomacal o ulceras — las prostaglandinas tambien protegen el revestimiento del estomago, asi que bloquearlas puede causar dolor estomacal o sangrado',
      'Esfuerzo renal — estos medicamentos afectan el flujo de sangre a los rinones, especialmente si estas deshidratado',
      'Presion arterial mas alta — porque hacen que tu cuerpo retenga mas sal y agua',
      'Mayor riesgo cardiaco — con uso prolongado en dosis altas',
    ],
    [
      'If you have stomach ulcers or a history of stomach bleeding',
      'If you have serious kidney problems',
      'If you just had heart bypass surgery',
      'In the last 3 months of pregnancy',
      'Avoid mixing different NSAIDs together — this does not help more but increases side effects',
    ],
    [
      'Si tienes ulceras estomacales o antecedentes de sangrado estomacal',
      'Si tienes problemas graves de rinon',
      'Si acabas de tener una cirugia de bypass cardiaco',
      'En los ultimos 3 meses de embarazo',
      'Evita mezclar diferentes AINEs — esto no ayuda mas pero aumenta los efectos secundarios',
    ],
  ),

  // ── 8. Antihistamines ─────────────────────────

  antihistamines: me(
    'antihistamines',
    'Antihistamines (Allergy Relief)',
    'Antihistaminicos (alivio de alergias)',
    'Histamine H1 Receptor Antagonists',
    'Antagonistas del receptor H1 de histamina',
    'When you are near something you are allergic to (like pollen), your body releases a chemical called histamine. Histamine is like a fire alarm — it makes your nose run, eyes itch, and skin swell. Antihistamines plug up the alarm so histamine cannot set it off.',
    'Cuando estas cerca de algo a lo que eres alergico (como el polen), tu cuerpo libera un quimico llamado histamina. La histamina es como una alarma de incendio — hace que tu nariz gotee, tus ojos piquen y tu piel se hinche. Los antihistaminicos tapan la alarma para que la histamina no la active.',
    'Antihistamines block histamine from attaching to its receptors in your nose, eyes, skin, and lungs. This stops the sneezing, itching, runny nose, and hives that allergies cause. Newer ones (like cetirizine and loratadine) cause less drowsiness than older ones (like diphenhydramine/Benadryl).',
    'Los antihistaminicos evitan que la histamina se adhiera a sus receptores en la nariz, ojos, piel y pulmones. Esto detiene los estornudos, la picazon, la nariz que gotea y la urticaria que causan las alergias. Los mas nuevos (como cetirizina y loratadina) causan menos sueno que los mas antiguos (como difenhidramina/Benadryl).',
    [
      'Drowsiness — especially with older antihistamines like Benadryl; newer ones are much better about this',
      'Dry mouth and dry eyes — because they reduce secretions throughout the body',
      'Dizziness — more likely in older adults',
    ],
    [
      'Somnolencia — especialmente con antihistaminicos antiguos como Benadryl; los mas nuevos son mucho mejores en esto',
      'Boca seca y ojos secos — porque reducen las secreciones en todo el cuerpo',
      'Mareo — mas probable en adultos mayores',
    ],
    [
      'If you are driving or operating machinery — especially with the older drowsy-making types',
      'If you have severe kidney or liver problems — the dose may need to be lowered',
      'Avoid alcohol with older antihistamines — it makes the drowsiness much worse',
    ],
    [
      'Si vas a conducir o manejar maquinaria — especialmente con los tipos antiguos que dan sueno',
      'Si tienes problemas severos de rinon o higado — la dosis puede necesitar ser mas baja',
      'Evita el alcohol con antihistaminicos antiguos — empeora mucho la somnolencia',
    ],
  ),

  // ── 9. Antibiotics (Penicillins) ──────────────

  antibiotics_penicillins: me(
    'antibiotics_penicillins',
    'Penicillin-Type Antibiotics',
    'Antibioticos tipo penicilina',
    'Penicillins (Beta-Lactams)',
    'Penicilinas (betalactamicos)',
    'Bacteria are like tiny balloons with tough outer walls. Penicillin-type antibiotics stop bacteria from building those walls. Without a strong wall, the bacteria swell up and burst, like an over-inflated water balloon.',
    'Las bacterias son como pequenos globos con paredes exteriores duras. Los antibioticos tipo penicilina evitan que las bacterias construyan esas paredes. Sin una pared fuerte, las bacterias se hinchan y revientan, como un globo de agua demasiado inflado.',
    'Penicillins kill bacteria by blocking an enzyme they need to build their protective cell wall. Without a complete wall, bacteria cannot survive and they break apart. These are some of the safest and most commonly used antibiotics, including amoxicillin. They work against many common infections like strep throat, ear infections, and sinus infections.',
    'Las penicilinas matan bacterias al bloquear una enzima que necesitan para construir su pared celular protectora. Sin una pared completa, las bacterias no pueden sobrevivir y se rompen. Estos son algunos de los antibioticos mas seguros y usados, incluyendo la amoxicilina. Funcionan contra muchas infecciones comunes como amigdalitis estreptococica, otitis y sinusitis.',
    [
      'Diarrhea — antibiotics kill both bad and helpful bacteria in the gut',
      'Nausea — mild stomach upset is common',
      'Rash — a mild skin rash can occur, though a true allergy is less common than most people think',
      'Yeast infections — because the balance of bacteria in your body changes',
    ],
    [
      'Diarrea — los antibioticos matan tanto bacterias malas como las utiles del intestino',
      'Nausea — es comun un leve malestar estomacal',
      'Sarpullido — puede ocurrir un sarpullido leve, aunque una alergia verdadera es menos comun de lo que la gente cree',
      'Infecciones por hongos — porque el equilibrio de bacterias en tu cuerpo cambia',
    ],
    [
      'If you have had a true allergic reaction to penicillin (hives, throat swelling, difficulty breathing)',
      'Always finish the full course of antibiotics, even if you feel better — stopping early can create resistant bacteria',
    ],
    [
      'Si has tenido una reaccion alergica verdadera a la penicilina (urticaria, hinchazon de garganta, dificultad para respirar)',
      'Siempre termina el curso completo de antibioticos, aunque te sientas mejor — dejar antes puede crear bacterias resistentes',
    ],
  ),

  // ── 10. Antibiotics (Macrolides) ──────────────

  antibiotics_macrolides: me(
    'antibiotics_macrolides',
    'Macrolide Antibiotics (e.g., Azithromycin)',
    'Antibioticos macrolidos (ej. azitromicina)',
    'Macrolides',
    'Macrolidos',
    'Bacteria need to build proteins to survive and multiply, like a factory needs workers. Macrolides jam the bacteria\'s protein-building machinery (the ribosome). Without new proteins, bacteria cannot grow or repair themselves.',
    'Las bacterias necesitan producir proteinas para sobrevivir y multiplicarse, como una fabrica necesita trabajadores. Los macrolidos atascan la maquinaria de produccion de proteinas de la bacteria (el ribosoma). Sin nuevas proteinas, las bacterias no pueden crecer ni repararse.',
    'Macrolides attach to the part of the bacterial cell that makes proteins (the ribosome) and block it. Without new proteins, bacteria stop growing and the immune system can clear them. Azithromycin (Z-pack) is the most well-known example. These are often used when someone is allergic to penicillin.',
    'Los macrolidos se adhieren a la parte de la celula bacteriana que produce proteinas (el ribosoma) y la bloquean. Sin nuevas proteinas, las bacterias dejan de crecer y el sistema inmune puede eliminarlas. La azitromicina (Z-pack) es el ejemplo mas conocido. Se usan frecuentemente cuando alguien es alergico a la penicilina.',
    [
      'Stomach cramps, nausea, or diarrhea — the most common complaints',
      'Unusual taste in the mouth — some people notice a bitter or metallic taste',
      'Heart rhythm changes — rare, but they can slightly affect the heart\'s electrical signals',
    ],
    [
      'Calambres estomacales, nausea o diarrea — las quejas mas comunes',
      'Sabor inusual en la boca — algunas personas notan un sabor amargo o metalico',
      'Cambios en el ritmo cardiaco — raro, pero pueden afectar ligeramente las senales electricas del corazon',
    ],
    [
      'If you have a heart condition that causes abnormal heart rhythms (long QT syndrome)',
      'If you have had liver problems from taking macrolides before',
      'Tell your doctor about all other medicines — macrolides can interact with many drugs',
    ],
    [
      'Si tienes una condicion cardiaca que causa ritmos anormales del corazon (sindrome de QT largo)',
      'Si has tenido problemas del higado por tomar macrolidos antes',
      'Dile a tu doctor sobre todos tus otros medicamentos — los macrolidos pueden interactuar con muchas drogas',
    ],
  ),

  // ── 11. Antibiotics (Fluoroquinolones) ────────

  antibiotics_fluoroquinolones: me(
    'antibiotics_fluoroquinolones',
    'Fluoroquinolone Antibiotics (e.g., Ciprofloxacin)',
    'Antibioticos fluoroquinolonas (ej. ciprofloxacino)',
    'Fluoroquinolones',
    'Fluoroquinolonas',
    'Bacteria need to unwind and copy their DNA to reproduce, like unzipping and photocopying a zipper. Fluoroquinolones break the "unzipper" tool (called DNA gyrase), so the DNA gets tangled and the bacteria cannot multiply.',
    'Las bacterias necesitan desenrollar y copiar su ADN para reproducirse, como abrir y fotocopiar un cierre. Las fluoroquinolonas rompen la herramienta que "abre el cierre" (llamada ADN girasa), asi el ADN se enreda y las bacterias no pueden multiplicarse.',
    'Fluoroquinolones damage the enzymes bacteria use to copy their DNA. Without being able to replicate their genetic instructions, the bacteria die. These are powerful antibiotics used for serious infections like complicated urinary tract infections, pneumonia, and bone infections. They should be reserved for when safer antibiotics will not work.',
    'Las fluoroquinolonas danan las enzimas que las bacterias usan para copiar su ADN. Sin poder replicar sus instrucciones geneticas, las bacterias mueren. Son antibioticos potentes usados para infecciones serias como infecciones urinarias complicadas, neumonia e infecciones de huesos. Deben reservarse para cuando los antibioticos mas seguros no funcionan.',
    [
      'Tendon pain or damage — tendons (especially the Achilles) can become inflamed or even tear',
      'Nerve tingling or numbness — may affect hands and feet and can sometimes be long-lasting',
      'Dizziness and confusion — some people feel light-headed or mentally foggy',
      'Sensitivity to sunlight — sunburn happens more easily',
    ],
    [
      'Dolor o dano en tendones — los tendones (especialmente el de Aquiles) pueden inflamarse o incluso romperse',
      'Hormigueo o entumecimiento — puede afectar manos y pies y a veces puede ser duradero',
      'Mareo y confusion — algunas personas se sienten aturdidas o con mente nublada',
      'Sensibilidad al sol — las quemaduras solares ocurren mas facilmente',
    ],
    [
      'If you have a history of tendon problems or are over 60',
      'If you have myasthenia gravis (a muscle weakness disorder) — can make it much worse',
      'If a simpler antibiotic would treat your infection — these should be used as a last resort for routine infections',
      'Stop immediately if you feel tendon pain, numbness, or muscle weakness',
    ],
    [
      'Si tienes antecedentes de problemas en tendones o eres mayor de 60 anos',
      'Si tienes miastenia gravis (un trastorno de debilidad muscular) — puede empeorarla mucho',
      'Si un antibiotico mas simple trataria tu infeccion — estos deben usarse como ultimo recurso para infecciones rutinarias',
      'Deja de tomarlo inmediatamente si sientes dolor en tendones, entumecimiento o debilidad muscular',
    ],
    'The FDA has issued serious warnings about fluoroquinolones. They can cause lasting damage to tendons, nerves, and muscles. Use only when no safer antibiotic is available.',
    'La FDA ha emitido advertencias serias sobre las fluoroquinolonas. Pueden causar dano duradero a tendones, nervios y musculos. Usar solo cuando no hay un antibiotico mas seguro disponible.',
  ),

  // ── 12. Blood Thinners (Warfarin) ─────────────

  blood_thinners_warfarin: me(
    'blood_thinners_warfarin',
    'Warfarin (Blood Thinner)',
    'Warfarina (anticoagulante)',
    'Vitamin K Antagonist',
    'Antagonista de la vitamina K',
    'Your body uses vitamin K to make clotting proteins that stop bleeding. Warfarin blocks vitamin K recycling, like removing the supply of bricks from a wall-building crew. Without enough clotting proteins, your blood takes longer to clot, preventing dangerous clots.',
    'Tu cuerpo usa vitamina K para producir proteinas de coagulacion que detienen el sangrado. La warfarina bloquea el reciclaje de vitamina K, como quitar el suministro de ladrillos a un equipo de construccion. Sin suficientes proteinas de coagulacion, tu sangre tarda mas en coagularse, previniendo coagulos peligrosos.',
    'Warfarin blocks the liver from using vitamin K to make clotting factors (proteins that help blood clot). This prevents blood clots from forming in veins or on heart valves. It is used to prevent strokes in people with irregular heart rhythms (atrial fibrillation), deep vein clots, and in people with mechanical heart valves. It requires regular blood tests (INR) to make sure the dose is right.',
    'La warfarina bloquea al higado de usar vitamina K para producir factores de coagulacion (proteinas que ayudan a la sangre a coagularse). Esto previene que se formen coagulos en venas o valvulas del corazon. Se usa para prevenir derrames en personas con ritmos cardiacos irregulares (fibrilacion auricular), coagulos en venas profundas y en personas con valvulas cardiacas mecanicas. Requiere analisis de sangre regulares (INR) para asegurar que la dosis sea correcta.',
    [
      'Bleeding or bruising easily — the main risk because the blood is slower to clot',
      'Nosebleeds or bleeding gums',
      'Dangerous bleeding — in rare cases, internal bleeding can occur (watch for blood in urine or dark/black stools)',
    ],
    [
      'Sangrado o moretones facilmente — el riesgo principal porque la sangre tarda mas en coagularse',
      'Sangrado nasal o de encias',
      'Sangrado peligroso — en casos raros, puede ocurrir sangrado interno (vigila sangre en orina o heces oscuras/negras)',
    ],
    [
      'If you are pregnant — warfarin can cause birth defects',
      'If you have active bleeding (ulcers, recent surgery)',
      'You MUST keep a consistent diet in terms of vitamin K foods (green leafy vegetables) — sudden changes affect how the medicine works',
      'Many medications and supplements interact with warfarin — always tell ALL your doctors and pharmacists',
    ],
    [
      'Si estas embarazada — la warfarina puede causar defectos de nacimiento',
      'Si tienes sangrado activo (ulceras, cirugia reciente)',
      'DEBES mantener una dieta consistente en cuanto a alimentos con vitamina K (vegetales de hoja verde) — cambios repentinos afectan como funciona el medicamento',
      'Muchos medicamentos y suplementos interactuan con la warfarina — siempre dile a TODOS tus doctores y farmaceuticos',
    ],
  ),

  // ── 13. Blood Thinners (DOACs) ────────────────

  blood_thinners_doacs: me(
    'blood_thinners_doacs',
    'DOACs (Newer Blood Thinners)',
    'ACODs (anticoagulantes mas nuevos)',
    'Direct Oral Anticoagulants',
    'Anticoagulantes orales directos',
    'Blood clotting works like a chain of dominoes — one protein activates the next until a clot forms. DOACs directly block one specific domino in that chain (either factor Xa or thrombin), so the chain reaction cannot finish and dangerous clots cannot form.',
    'La coagulacion funciona como una cadena de dominos — una proteina activa a la siguiente hasta que se forma un coagulo. Los ACODs bloquean directamente un domino especifico en esa cadena (factor Xa o trombina), asi la reaccion en cadena no puede terminar y no se forman coagulos peligrosos.',
    'DOACs (like apixaban/Eliquis and rivaroxaban/Xarelto) directly block a specific clotting factor in the blood. Unlike warfarin, they work at a predictable level and do not need regular blood tests or strict diet changes. They are used to prevent strokes and treat blood clots.',
    'Los ACODs (como apixaban/Eliquis y rivaroxaban/Xarelto) bloquean directamente un factor de coagulacion especifico en la sangre. A diferencia de la warfarina, funcionan a un nivel predecible y no necesitan analisis de sangre regulares ni cambios estrictos en la dieta. Se usan para prevenir derrames y tratar coagulos.',
    [
      'Bleeding or bruising — same main risk as warfarin, since the blood clots more slowly',
      'Upset stomach — especially with dabigatran (Pradaxa)',
      'Minor bleeding — like nosebleeds or longer bleeding from cuts',
    ],
    [
      'Sangrado o moretones — el mismo riesgo principal que la warfarina, ya que la sangre coagula mas lento',
      'Malestar estomacal — especialmente con dabigatran (Pradaxa)',
      'Sangrado menor — como sangrado nasal o sangrado mas largo por cortaduras',
    ],
    [
      'If you have mechanical heart valves — DOACs do not work safely for this condition; warfarin is needed',
      'If your kidneys are not working well — the body clears DOACs through the kidneys',
      'If you have active serious bleeding',
      'Do NOT skip doses — missing even one dose increases your risk of a blood clot',
    ],
    [
      'Si tienes valvulas cardiacas mecanicas — los ACODs no funcionan de forma segura para esta condicion; se necesita warfarina',
      'Si tus rinones no funcionan bien — el cuerpo elimina los ACODs a traves de los rinones',
      'Si tienes sangrado serio activo',
      'NO saltes dosis — perder incluso una dosis aumenta tu riesgo de un coagulo',
    ],
  ),

  // ── 14. Bronchodilators ───────────────────────

  bronchodilators: me(
    'bronchodilators',
    'Bronchodilators (Airway Openers)',
    'Broncodilatadores (abridores de vias aereas)',
    'Beta-2 Agonists and Anticholinergics',
    'Agonistas beta-2 y anticolinergicos',
    'The airways in your lungs are like flexible tubes surrounded by tiny muscles. During asthma or COPD, those muscles squeeze tight, making the tubes narrow and breathing hard. Bronchodilators tell those muscles to relax and open up, like unclenching a fist.',
    'Las vias aereas en tus pulmones son como tubos flexibles rodeados de musculos diminutos. Durante el asma o EPOC, esos musculos se aprietan, haciendo los tubos estrechos y dificultando la respiracion. Los broncodilatadores les dicen a esos musculos que se relajen y se abran, como abrir un puno cerrado.',
    'Bronchodilators relax the muscles around the airways in the lungs, making them wider so air flows more easily. Quick-acting ones (like albuterol) work in minutes for sudden breathing problems. Long-acting ones are taken daily to keep airways open. They are the main treatment for asthma attacks and COPD.',
    'Los broncodilatadores relajan los musculos alrededor de las vias aereas en los pulmones, haciendolas mas anchas para que el aire fluya mejor. Los de accion rapida (como el albuterol) funcionan en minutos para problemas repentinos. Los de accion prolongada se toman a diario para mantener las vias abiertas. Son el tratamiento principal para ataques de asma y EPOC.',
    [
      'Shaky hands (tremor) — the medicine stimulates muscles, so hands may tremble slightly',
      'Fast heartbeat — because the medicine can also slightly speed up the heart',
      'Nervousness or jitteriness — a feeling like you had too much caffeine',
      'Dry mouth or throat — especially with inhaled anticholinergic types',
    ],
    [
      'Manos temblorosas (temblor) — el medicamento estimula musculos, asi que las manos pueden temblar ligeramente',
      'Latidos rapidos — porque el medicamento tambien puede acelerar un poco el corazon',
      'Nerviosismo o inquietud — una sensacion como si hubieras tomado demasiada cafeina',
      'Boca o garganta seca — especialmente con los tipos anticolinergicos inhalados',
    ],
    [
      'If you are using your rescue inhaler more than twice a week — your condition is not well controlled and you need to see your doctor',
      'Long-acting bronchodilators should NOT be used alone for asthma — they must be combined with an anti-inflammatory inhaler',
      'If you have a serious heart rhythm problem — use with caution',
    ],
    [
      'Si usas tu inhalador de rescate mas de dos veces por semana — tu condicion no esta bien controlada y necesitas ver a tu doctor',
      'Los broncodilatadores de accion prolongada NO deben usarse solos para el asma — deben combinarse con un inhalador antiinflamatorio',
      'Si tienes un problema serio de ritmo cardiaco — usar con precaucion',
    ],
  ),

  // ── 15. Diuretics ─────────────────────────────

  diuretics: me(
    'diuretics',
    'Diuretics (Water Pills)',
    'Diureticos (pastillas de agua)',
    'Diuretics (Thiazides, Loop, Potassium-Sparing)',
    'Diureticos (tiazidicos, de asa, ahorradores de potasio)',
    'Your kidneys are like filters that decide what stays in your blood and what goes out as urine. Diuretics tell the kidneys to let more salt and water pass through into the urine. Less fluid in the blood means less pressure on your blood vessels and less swelling.',
    'Tus rinones son como filtros que deciden que se queda en la sangre y que sale como orina. Los diureticos le dicen a los rinones que dejen pasar mas sal y agua a la orina. Menos liquido en la sangre significa menos presion en tus vasos sanguineos y menos hinchazon.',
    'Diuretics make the kidneys remove extra salt and water from the body by increasing urine output. This lowers blood pressure by reducing the volume of fluid in the blood vessels. They also reduce swelling (edema) in the legs, lungs, or belly caused by heart failure, kidney disease, or liver problems. There are mild types (hydrochlorothiazide) and strong types (furosemide/Lasix).',
    'Los diureticos hacen que los rinones eliminen sal y agua extra del cuerpo al aumentar la produccion de orina. Esto baja la presion arterial al reducir el volumen de liquido en los vasos sanguineos. Tambien reducen la hinchazon (edema) en piernas, pulmones o abdomen causada por insuficiencia cardiaca, enfermedad renal o problemas del higado. Hay tipos suaves (hidroclorotiazida) y tipos fuertes (furosemida/Lasix).',
    [
      'Frequent urination — this is expected; take them in the morning so you are not up all night',
      'Dizziness or lightheadedness — from lower blood pressure and less fluid',
      'Low potassium — can cause muscle cramps or weakness (your doctor monitors this)',
      'Dehydration — if you lose too much fluid, you may feel very thirsty or weak',
    ],
    [
      'Orinar frecuentemente — esto es esperado; tomatelos en la manana para no estar despierto toda la noche',
      'Mareo o aturdimiento — por la presion mas baja y menos liquido',
      'Potasio bajo — puede causar calambres o debilidad muscular (tu doctor lo vigila)',
      'Deshidratacion — si pierdes demasiado liquido, puedes sentir mucha sed o debilidad',
    ],
    [
      'If you are severely dehydrated or have very low blood pressure',
      'If your electrolytes (potassium, sodium) are dangerously low — needs blood tests to check',
      'If you have kidney failure that has stopped producing urine',
    ],
    [
      'Si estas severamente deshidratado o tienes presion arterial muy baja',
      'Si tus electrolitos (potasio, sodio) estan peligrosamente bajos — se necesitan analisis de sangre',
      'Si tienes insuficiencia renal que ha dejado de producir orina',
    ],
  ),

  // ── 16. Calcium Channel Blockers ──────────────

  calcium_channel_blockers: me(
    'calcium_channel_blockers',
    'Calcium Channel Blockers (Blood Pressure & Heart)',
    'Bloqueadores de canales de calcio (presion arterial y corazon)',
    'Calcium Channel Blockers',
    'Bloqueadores de los canales de calcio',
    'Muscles need calcium to squeeze tight — including the muscles around blood vessels and in the heart. Calcium channel blockers are like bouncers at a club door: they stop calcium from entering muscle cells. With less calcium getting in, blood vessels relax and the heart beats more gently.',
    'Los musculos necesitan calcio para apretarse — incluyendo los musculos alrededor de los vasos sanguineos y en el corazon. Los bloqueadores de canales de calcio son como porteros en la puerta de un club: impiden que el calcio entre a las celulas musculares. Con menos calcio entrando, los vasos sanguineos se relajan y el corazon late mas suavemente.',
    'These medicines block calcium from entering the muscle cells in blood vessel walls and the heart. When calcium is blocked, blood vessels relax and widen, lowering blood pressure. Some types (like verapamil and diltiazem) also slow the heart rate. Others (like amlodipine) mainly relax blood vessels without slowing the heart as much.',
    'Estos medicamentos bloquean la entrada de calcio a las celulas musculares de las paredes de los vasos sanguineos y el corazon. Cuando se bloquea el calcio, los vasos se relajan y se ensanchan, bajando la presion. Algunos tipos (como verapamilo y diltiazem) tambien reducen la frecuencia cardiaca. Otros (como amlodipino) principalmente relajan los vasos sin reducir tanto el ritmo cardiaco.',
    [
      'Swollen ankles — fluid can collect in the feet and legs; this is not dangerous but can be uncomfortable',
      'Constipation — especially with verapamil',
      'Feeling flushed or warm — because blood vessels are dilating',
      'Dizziness — from lowered blood pressure',
      'Headache — especially when first starting',
    ],
    [
      'Tobillos hinchados — el liquido puede acumularse en pies y piernas; no es peligroso pero puede ser incomodo',
      'Estrenimiento — especialmente con verapamilo',
      'Sentir calor o rubor — porque los vasos sanguineos se estan dilatando',
      'Mareo — por la presion arterial mas baja',
      'Dolor de cabeza — especialmente al empezar',
    ],
    [
      'If you have severe heart failure — some types can make it worse',
      'If you already have a very slow heart rate — verapamil and diltiazem can slow it further',
      'Avoid grapefruit juice — it can dangerously increase the amount of medicine in your blood',
      'Do not crush or break extended-release tablets',
    ],
    [
      'Si tienes insuficiencia cardiaca severa — algunos tipos pueden empeorarla',
      'Si ya tienes un ritmo cardiaco muy lento — verapamilo y diltiazem pueden hacerlo mas lento',
      'Evita el jugo de toronja — puede aumentar peligrosamente la cantidad de medicamento en tu sangre',
      'No tritures ni rompas las tabletas de liberacion prolongada',
    ],
  ),

  // ── 17. Thyroid Medications ───────────────────

  thyroid_levothyroxine: me(
    'thyroid_levothyroxine',
    'Levothyroxine (Thyroid Replacement)',
    'Levotiroxina (reemplazo tiroideo)',
    'Thyroid Hormone Replacement',
    'Reemplazo de hormona tiroidea',
    'Your thyroid gland is like a thermostat that controls your body\'s speed — how fast you burn energy, how fast your heart beats, and how warm you feel. When the thyroid is underactive, everything slows down. Levothyroxine is an exact copy of the hormone your thyroid should be making, bringing your thermostat back to normal.',
    'Tu glandula tiroides es como un termostato que controla la velocidad de tu cuerpo — que tan rapido quemas energia, que tan rapido late tu corazon y que tan caliente te sientes. Cuando la tiroides esta poco activa, todo se hace lento. La levotiroxina es una copia exacta de la hormona que tu tiroides deberia producir, regresando tu termostato a lo normal.',
    'Levothyroxine replaces the thyroid hormone (T4) that your body is not making enough of. Once in your body, it is converted to the active form (T3) that every cell needs to function at the right speed. It treats symptoms of hypothyroidism like fatigue, weight gain, feeling cold, dry skin, and brain fog.',
    'La levotiroxina reemplaza la hormona tiroidea (T4) que tu cuerpo no produce en cantidad suficiente. Una vez en tu cuerpo, se convierte en la forma activa (T3) que cada celula necesita para funcionar a la velocidad correcta. Trata sintomas del hipotiroidismo como fatiga, aumento de peso, sentir frio, piel seca y mente nublada.',
    [
      'Most side effects mean the dose is too high — including fast heartbeat, feeling anxious, trembling, or losing weight too quickly',
      'Hair loss — can happen temporarily when first starting, then usually stops',
      'Headache — typically when adjusting the dose',
    ],
    [
      'La mayoria de los efectos secundarios significan que la dosis es muy alta — incluyendo latidos rapidos, sentirse ansioso, temblor o perder peso muy rapido',
      'Caida de cabello — puede pasar temporalmente al empezar, luego suele detenerse',
      'Dolor de cabeza — tipicamente al ajustar la dosis',
    ],
    [
      'Take on an empty stomach, 30 to 60 minutes before breakfast — food reduces absorption',
      'Do not take with calcium, iron supplements, or antacids — wait at least 4 hours between them',
      'If you have untreated adrenal gland problems — these must be treated first',
      'Be consistent with your brand — switching between brands can change how much medicine you absorb',
    ],
    [
      'Tomar con el estomago vacio, 30 a 60 minutos antes del desayuno — la comida reduce la absorcion',
      'No tomar con calcio, suplementos de hierro o antiacidos — espera al menos 4 horas entre ellos',
      'Si tienes problemas de glandulas suprarrenales sin tratar — estos deben tratarse primero',
      'Se consistente con tu marca — cambiar entre marcas puede cambiar cuanto medicamento absorbes',
    ],
  ),

  // ── 18. Gabapentin/Pregabalin ─────────────────

  gabapentinoids: me(
    'gabapentinoids',
    'Gabapentin & Pregabalin (Nerve Pain)',
    'Gabapentina y pregabalina (dolor nervioso)',
    'Gabapentinoids (Calcium Channel Alpha-2-Delta Ligands)',
    'Gabapentinoides (ligandos alfa-2-delta de canales de calcio)',
    'Damaged nerves send constant pain signals, like a car alarm that will not stop. Gabapentin and pregabalin calm those overexcited nerves by reducing the release of pain signals at nerve endings. They do not stop normal nerve messages — they just quiet the false alarms.',
    'Los nervios danados envian senales constantes de dolor, como una alarma de carro que no para. La gabapentina y pregabalina calman esos nervios sobreexcitados al reducir la liberacion de senales de dolor en las terminaciones nerviosas. No detienen los mensajes nerviosos normales — solo silencian las falsas alarmas.',
    'These medicines work by attaching to a specific part of nerve cells (the alpha-2-delta subunit) that controls the release of pain chemicals. By reducing the release of these chemicals, they calm overactive nerves that send pain signals even when there is no new injury. They are used for nerve pain from diabetes, shingles, fibromyalgia, and seizures.',
    'Estos medicamentos funcionan al adherirse a una parte especifica de las celulas nerviosas (la subunidad alfa-2-delta) que controla la liberacion de quimicos del dolor. Al reducir la liberacion de estos quimicos, calman los nervios hiperactivos que envian senales de dolor incluso cuando no hay una lesion nueva. Se usan para dolor nervioso por diabetes, herpes zoster, fibromialgia y convulsiones.',
    [
      'Drowsiness and dizziness — the most common effects, especially when starting or increasing the dose',
      'Feeling "foggy" or having trouble concentrating',
      'Weight gain — can happen over time',
      'Swelling of hands and feet',
    ],
    [
      'Somnolencia y mareo — los efectos mas comunes, especialmente al empezar o aumentar la dosis',
      'Sentirse "nublado" o tener problemas para concentrarse',
      'Aumento de peso — puede pasar con el tiempo',
      'Hinchazon de manos y pies',
    ],
    [
      'Do not stop suddenly after regular use — taper slowly over at least a week to avoid seizures or withdrawal symptoms',
      'If you have severe kidney problems — the dose must be lowered because the kidneys clear this medicine',
      'Be careful driving or using machinery until you know how it affects you',
      'Avoid alcohol — it increases drowsiness significantly',
    ],
    [
      'No dejes de tomarlo de repente despues de uso regular — reduce la dosis lentamente durante al menos una semana para evitar convulsiones o sintomas de abstinencia',
      'Si tienes problemas severos de rinon — la dosis debe bajarse porque los rinones eliminan este medicamento',
      'Ten cuidado al conducir o usar maquinaria hasta que sepas como te afecta',
      'Evita el alcohol — aumenta mucho la somnolencia',
    ],
  ),

  // ── 19. Benzodiazepines ───────────────────────

  benzodiazepines: me(
    'benzodiazepines',
    'Benzodiazepines (Anxiety & Sedation)',
    'Benzodiacepinas (ansiedad y sedacion)',
    'Benzodiazepines (GABA-A Modulators)',
    'Benzodiacepinas (moduladores GABA-A)',
    'Your brain has a natural braking system using a chemical called GABA — it slows things down and keeps you calm. Benzodiazepines are like pressing harder on that brake pedal. They boost GABA\'s calming effect, making you feel relaxed, less anxious, and sleepy.',
    'Tu cerebro tiene un sistema de frenos natural usando un quimico llamado GABA — desacelera las cosas y te mantiene calmado. Las benzodiacepinas son como pisar mas fuerte ese pedal de freno. Aumentan el efecto calmante del GABA, haciendote sentir relajado, menos ansioso y con sueno.',
    'Benzodiazepines enhance the effect of GABA, the brain\'s main calming chemical. GABA works by opening channels that let negative charges into brain cells, making them less likely to fire. Benzodiazepines make GABA work more efficiently at these channels. This reduces anxiety, relaxes muscles, prevents seizures, and promotes sleep.',
    'Las benzodiacepinas aumentan el efecto del GABA, el principal quimico calmante del cerebro. El GABA funciona abriendo canales que dejan entrar cargas negativas a las celulas cerebrales, haciendolas menos propensas a activarse. Las benzodiacepinas hacen que el GABA funcione mas eficientemente en estos canales. Esto reduce la ansiedad, relaja musculos, previene convulsiones y promueve el sueno.',
    [
      'Drowsiness and sedation — feeling very sleepy, especially at first',
      'Memory problems — difficulty forming new memories while taking the medicine',
      'Poor coordination and falls — especially dangerous in older adults',
      'Dependence — your body gets used to the medicine and you may need more over time',
    ],
    [
      'Somnolencia y sedacion — sentir mucho sueno, especialmente al principio',
      'Problemas de memoria — dificultad para formar nuevos recuerdos mientras tomas el medicamento',
      'Mala coordinacion y caidas — especialmente peligroso en adultos mayores',
      'Dependencia — tu cuerpo se acostumbra al medicamento y puedes necesitar mas con el tiempo',
    ],
    [
      'NEVER stop suddenly after taking regularly for more than a few weeks — sudden withdrawal can cause life-threatening seizures; always taper slowly with your doctor',
      'Do NOT mix with alcohol or opioids — this combination can stop your breathing',
      'If you have sleep apnea or severe breathing problems',
      'If you are pregnant — can harm the baby',
      'These are meant for short-term use only — long-term use leads to dependence',
    ],
    [
      'NUNCA dejes de tomarlo de repente despues de tomarlo regularmente por mas de unas semanas — la abstinencia repentina puede causar convulsiones que amenazan la vida; siempre reduce la dosis lentamente con tu doctor',
      'NO mezclar con alcohol u opioides — esta combinacion puede detener tu respiracion',
      'Si tienes apnea del sueno o problemas severos de respiracion',
      'Si estas embarazada — puede danar al bebe',
      'Estos son para uso a corto plazo solamente — el uso prolongado lleva a dependencia',
    ],
    'Benzodiazepines carry a high risk of physical dependence and withdrawal. They should be used at the lowest dose for the shortest time possible. Never combine with opioids or alcohol.',
    'Las benzodiacepinas tienen un alto riesgo de dependencia fisica y abstinencia. Deben usarse en la dosis mas baja por el menor tiempo posible. Nunca combinar con opioides o alcohol.',
  ),

  // ── 20. Opioids ───────────────────────────────

  opioids: me(
    'opioids',
    'Opioids (Strong Pain Relief)',
    'Opioides (alivio fuerte del dolor)',
    'Opioid Receptor Agonists',
    'Agonistas del receptor opioide',
    'Your brain and spinal cord have natural "volume knobs" for pain called opioid receptors. Your body makes its own painkillers (endorphins) that turn these knobs down. Opioid medicines mimic endorphins but are much stronger — they turn the pain volume way down. The problem is, your body quickly gets used to them and wants more.',
    'Tu cerebro y medula espinal tienen "perillas de volumen" naturales para el dolor llamadas receptores opioides. Tu cuerpo produce sus propios analgesicos (endorfinas) que bajan estas perillas. Los medicamentos opioides imitan a las endorfinas pero son mucho mas fuertes — bajan mucho el volumen del dolor. El problema es que tu cuerpo se acostumbra rapidamente y quiere mas.',
    'Opioids attach to specific receptors in the brain, spinal cord, and other parts of the body to block pain signals. They also trigger the release of dopamine, creating a feeling of well-being. Common examples include morphine, oxycodone, and hydrocodone. They are used for severe pain (after surgery, cancer, serious injuries) when other pain medicines are not enough.',
    'Los opioides se adhieren a receptores especificos en el cerebro, medula espinal y otras partes del cuerpo para bloquear senales de dolor. Tambien activan la liberacion de dopamina, creando una sensacion de bienestar. Ejemplos comunes incluyen morfina, oxicodona e hidrocodona. Se usan para dolor severo (despues de cirugia, cancer, lesiones graves) cuando otros analgesicos no son suficientes.',
    [
      'Constipation — opioids slow down the gut; this happens to almost everyone and does not go away with time',
      'Nausea and vomiting — common when first starting, usually improves',
      'Drowsiness — feeling very sleepy, especially at higher doses',
      'Slowed breathing — at high doses, breathing can become dangerously slow',
      'Tolerance — over time, you need more medicine for the same pain relief',
      'Dependence and addiction — the body becomes physically dependent, and some people develop addiction',
    ],
    [
      'Estrenimiento — los opioides hacen lento el intestino; esto le pasa a casi todos y no desaparece con el tiempo',
      'Nausea y vomito — comun al empezar, usualmente mejora',
      'Somnolencia — sentir mucho sueno, especialmente en dosis altas',
      'Respiracion lenta — en dosis altas, la respiracion puede volverse peligrosamente lenta',
      'Tolerancia — con el tiempo, necesitas mas medicamento para el mismo alivio del dolor',
      'Dependencia y adiccion — el cuerpo se vuelve fisicamente dependiente, y algunas personas desarrollan adiccion',
    ],
    [
      'NEVER take more than prescribed — overdose can stop your breathing and be fatal',
      'Do NOT mix with alcohol, benzodiazepines, or sleeping pills — this is the most common cause of opioid overdose deaths',
      'Keep naloxone (Narcan) accessible if prescribed opioids — it can reverse an overdose and save a life',
      'If you have severe breathing problems or sleep apnea',
      'Store safely and dispose of unused pills — opioid theft and misuse is a serious problem',
      'These should be used at the lowest dose for the shortest time possible',
    ],
    [
      'NUNCA tomes mas de lo recetado — la sobredosis puede detener tu respiracion y ser fatal',
      'NO mezclar con alcohol, benzodiacepinas o pastillas para dormir — esta es la causa mas comun de muertes por sobredosis de opioides',
      'Ten naloxona (Narcan) accesible si te recetan opioides — puede revertir una sobredosis y salvar una vida',
      'Si tienes problemas severos de respiracion o apnea del sueno',
      'Guarda de forma segura y desecha las pastillas sin usar — el robo y mal uso de opioides es un problema grave',
      'Deben usarse en la dosis mas baja por el menor tiempo posible',
    ],
    'CRITICAL SAFETY WARNING: Opioids carry a serious risk of addiction, overdose, and death. Always have naloxone (Narcan) available. Never share your medicine. Call 911 immediately if someone shows signs of overdose (slow breathing, blue lips, unresponsive).',
    'ADVERTENCIA CRITICA DE SEGURIDAD: Los opioides tienen un riesgo serio de adiccion, sobredosis y muerte. Siempre ten naloxona (Narcan) disponible. Nunca compartas tu medicamento. Llama al 911 inmediatamente si alguien muestra signos de sobredosis (respiracion lenta, labios azules, sin respuesta).',
  ),

  // ── 21. Insulin ───────────────────────────────

  insulin: me(
    'insulin',
    'Insulin (Diabetes)',
    'Insulina (diabetes)',
    'Insulin (Exogenous Hormone Replacement)',
    'Insulina (reemplazo hormonal exogeno)',
    'Sugar from food floats in your blood, but it cannot get inside your cells without a key. Insulin is that key — it unlocks the door on each cell so sugar can enter and be used for energy. In diabetes, either the body does not make insulin (Type 1) or the cells ignore it (Type 2). Injected insulin provides the key your body is missing.',
    'El azucar de la comida flota en tu sangre, pero no puede entrar a tus celulas sin una llave. La insulina es esa llave — abre la puerta de cada celula para que el azucar entre y se use como energia. En la diabetes, el cuerpo no produce insulina (Tipo 1) o las celulas la ignoran (Tipo 2). La insulina inyectada proporciona la llave que tu cuerpo necesita.',
    'Insulin is a hormone normally made by the pancreas. It allows sugar (glucose) to move from the blood into cells for energy. Without enough insulin, sugar builds up in the blood and causes damage over time. Injected insulin comes in fast-acting types (for meals) and long-acting types (background coverage). Proper dosing is critical to avoid blood sugar that is too high or too low.',
    'La insulina es una hormona normalmente producida por el pancreas. Permite que el azucar (glucosa) se mueva de la sangre a las celulas para obtener energia. Sin suficiente insulina, el azucar se acumula en la sangre y causa dano con el tiempo. La insulina inyectada viene en tipos de accion rapida (para comidas) y de accion prolongada (cobertura de fondo). La dosificacion correcta es critica para evitar azucar en sangre demasiado alta o baja.',
    [
      'Low blood sugar (hypoglycemia) — the biggest risk; causes shakiness, sweating, confusion, and can be dangerous if severe',
      'Weight gain — insulin helps cells absorb sugar, which can lead to weight increase',
      'Injection site reactions — redness, swelling, or lumps where you inject',
      'Swelling — some people notice puffiness in hands or feet when first starting',
    ],
    [
      'Azucar baja en sangre (hipoglucemia) — el mayor riesgo; causa temblor, sudoracion, confusion y puede ser peligroso si es severo',
      'Aumento de peso — la insulina ayuda a las celulas a absorber azucar, lo que puede llevar a aumento de peso',
      'Reacciones en el sitio de inyeccion — enrojecimiento, hinchazon o bultos donde te inyectas',
      'Hinchazon — algunas personas notan inflamacion en manos o pies al empezar',
    ],
    [
      'NEVER skip insulin if you have Type 1 diabetes — you need it to survive',
      'Always carry a source of fast sugar (juice, glucose tablets) in case of low blood sugar',
      'Store insulin properly — keep unused vials in the refrigerator; do not freeze; in-use pens can be at room temperature',
      'Rotate injection sites — always injecting in the same spot can cause lumps that affect absorption',
      'If you are sick or not eating — talk to your doctor about dose adjustments (sick-day rules)',
    ],
    [
      'NUNCA omitas la insulina si tienes diabetes Tipo 1 — la necesitas para sobrevivir',
      'Siempre lleva una fuente de azucar rapida (jugo, tabletas de glucosa) en caso de azucar baja',
      'Almacena la insulina correctamente — guarda los viales sin usar en el refrigerador; no congeles; las plumas en uso pueden estar a temperatura ambiente',
      'Rota los sitios de inyeccion — inyectarte siempre en el mismo lugar puede causar bultos que afectan la absorcion',
      'Si estas enfermo o no estas comiendo — habla con tu doctor sobre ajustes de dosis (reglas de dias enfermos)',
    ],
    'Low blood sugar (hypoglycemia) is a medical emergency. Symptoms include shaking, sweating, fast heartbeat, and confusion. If severe, the person may pass out. Always keep fast-acting sugar nearby and teach people around you how to help.',
    'El azucar baja en sangre (hipoglucemia) es una emergencia medica. Los sintomas incluyen temblor, sudoracion, latidos rapidos y confusion. Si es severa, la persona puede desmayarse. Siempre ten azucar de accion rapida cerca y ensena a las personas a tu alrededor como ayudar.',
  ),

  // ── 22. Corticosteroids ───────────────────────

  corticosteroids: me(
    'corticosteroids',
    'Corticosteroids (Inflammation & Immune System)',
    'Corticosteroides (inflamacion y sistema inmune)',
    'Systemic Corticosteroids (Glucocorticoids)',
    'Corticosteroides sistemicos (glucocorticoides)',
    'Your immune system is like a security team. Sometimes it overreacts and causes too much inflammation — like guards attacking your own building. Corticosteroids are a powerful "stand down" order that tells the whole security team to calm down. This stops inflammation fast but also leaves you more open to real threats (infections).',
    'Tu sistema inmune es como un equipo de seguridad. A veces reacciona exageradamente y causa demasiada inflamacion — como guardias atacando tu propio edificio. Los corticosteroides son una poderosa orden de "alto" que le dice a todo el equipo que se calme. Esto detiene la inflamacion rapido pero tambien te deja mas vulnerable a amenazas reales (infecciones).',
    'Corticosteroids (like prednisone and dexamethasone) are powerful anti-inflammatory medicines that mimic cortisol, a hormone your body makes naturally. They turn off the genes that cause inflammation and turn on genes that reduce it. They treat asthma flares, allergic reactions, autoimmune diseases, and many other conditions. Short courses are generally safe; long-term use requires careful monitoring.',
    'Los corticosteroides (como prednisona y dexametasona) son medicamentos antiinflamatorios potentes que imitan el cortisol, una hormona que tu cuerpo produce naturalmente. Apagan los genes que causan inflamacion y encienden genes que la reducen. Tratan crisis de asma, reacciones alergicas, enfermedades autoinmunes y muchas otras condiciones. Cursos cortos son generalmente seguros; el uso prolongado requiere vigilancia cuidadosa.',
    [
      'Increased appetite and weight gain — steroids make you hungry and your body stores more fat',
      'Mood changes — feeling irritable, anxious, or having trouble sleeping',
      'High blood sugar — steroids raise blood sugar, even in people without diabetes',
      'Weakened bones (osteoporosis) — with long-term use, bones become thinner',
      'Weakened immune system — you catch infections more easily',
      'Puffy face and thin skin — with prolonged use',
    ],
    [
      'Aumento de apetito y peso — los esteroides te dan hambre y tu cuerpo almacena mas grasa',
      'Cambios de animo — sentirse irritable, ansioso o tener problemas para dormir',
      'Azucar alta en sangre — los esteroides suben el azucar, incluso en personas sin diabetes',
      'Huesos debilitados (osteoporosis) — con uso prolongado, los huesos se vuelven mas delgados',
      'Sistema inmune debilitado — te contagias de infecciones mas facilmente',
      'Cara hinchada y piel delgada — con uso prolongado',
    ],
    [
      'Do NOT stop suddenly after taking for more than a few days — your body stops making its own cortisol and needs time to restart; stopping suddenly can be dangerous',
      'If you have an active infection that is not being treated — steroids weaken the immune system',
      'Tell your doctor if you have diabetes — steroids will raise your blood sugar',
      'Avoid live vaccines while on high-dose steroids',
    ],
    [
      'NO dejes de tomarlo de repente despues de tomarlo por mas de unos dias — tu cuerpo deja de producir su propio cortisol y necesita tiempo para reactivarse; dejarlo de repente puede ser peligroso',
      'Si tienes una infeccion activa que no esta siendo tratada — los esteroides debilitan el sistema inmune',
      'Dile a tu doctor si tienes diabetes — los esteroides subiran tu azucar en sangre',
      'Evita vacunas vivas mientras tomas dosis altas de esteroides',
    ],
  ),

  // ── 23. Immunosuppressants ────────────────────

  immunosuppressants: me(
    'immunosuppressants',
    'Immunosuppressants (Transplant & Autoimmune)',
    'Inmunosupresores (trasplante y autoinmune)',
    'Immunosuppressive Agents',
    'Agentes inmunosupresores',
    'After an organ transplant, your immune system sees the new organ as a foreign invader and tries to destroy it — like a guard throwing out a new employee. Immunosuppressants teach the guards to accept the newcomer. In autoimmune diseases, the guards attack your own body, and these medicines tell them to stand down.',
    'Despues de un trasplante de organo, tu sistema inmune ve al nuevo organo como un invasor extranjero e intenta destruirlo — como un guardia expulsando a un empleado nuevo. Los inmunosupresores ensenan a los guardias a aceptar al recien llegado. En enfermedades autoinmunes, los guardias atacan tu propio cuerpo, y estos medicamentos les dicen que se detengan.',
    'Immunosuppressants reduce the activity of the immune system. After transplants, they prevent the body from rejecting the new organ. In autoimmune diseases (like lupus, rheumatoid arthritis, or inflammatory bowel disease), they stop the immune system from attacking the body\'s own tissues. Different types work in different ways — some block specific immune cells, others reduce immune chemical signals. Examples include tacrolimus, cyclosporine, mycophenolate, and azathioprine.',
    'Los inmunosupresores reducen la actividad del sistema inmune. Despues de trasplantes, previenen que el cuerpo rechace el nuevo organo. En enfermedades autoinmunes (como lupus, artritis reumatoide o enfermedad inflamatoria intestinal), evitan que el sistema inmune ataque los propios tejidos del cuerpo. Diferentes tipos funcionan de diferentes maneras — algunos bloquean celulas inmunes especificas, otros reducen senales quimicas inmunes. Ejemplos incluyen tacrolimus, ciclosporina, micofenolato y azatioprina.',
    [
      'Higher risk of infections — since the immune system is weakened, you catch colds, flu, and other infections more easily and they can be more serious',
      'Higher risk of certain cancers over time — especially skin cancer, because the immune system normally helps catch early cancers',
      'Kidney problems — some of these medicines (tacrolimus, cyclosporine) can stress the kidneys',
      'Stomach upset — nausea, diarrhea, or vomiting',
      'Tremor or headache — especially with tacrolimus',
    ],
    [
      'Mayor riesgo de infecciones — ya que el sistema inmune esta debilitado, te contagias mas facilmente de resfriados, gripe y otras infecciones, y pueden ser mas graves',
      'Mayor riesgo de ciertos canceres con el tiempo — especialmente cancer de piel, porque el sistema inmune normalmente ayuda a detectar canceres tempranos',
      'Problemas renales — algunos de estos medicamentos (tacrolimus, ciclosporina) pueden estresar los rinones',
      'Malestar estomacal — nausea, diarrea o vomito',
      'Temblor o dolor de cabeza — especialmente con tacrolimus',
    ],
    [
      'NEVER stop taking these without your doctor\'s approval — especially after a transplant, stopping can cause organ rejection within days',
      'Avoid live vaccines — your weakened immune system cannot handle them safely',
      'Report any signs of infection right away (fever, cough, sore throat, pain when urinating) — what might be minor for others can be serious for you',
      'Wear sunscreen and protective clothing — your skin cancer risk is higher',
      'Avoid grapefruit — it interacts with many immunosuppressants',
      'Take at the same time every day — blood levels need to stay consistent',
    ],
    [
      'NUNCA dejes de tomar estos sin aprobacion de tu doctor — especialmente despues de un trasplante, dejar de tomarlos puede causar rechazo del organo en dias',
      'Evita vacunas vivas — tu sistema inmune debilitado no puede manejarlas de forma segura',
      'Reporta cualquier signo de infeccion de inmediato (fiebre, tos, dolor de garganta, dolor al orinar) — lo que podria ser menor para otros puede ser grave para ti',
      'Usa protector solar y ropa protectora — tu riesgo de cancer de piel es mayor',
      'Evita la toronja — interactua con muchos inmunosupresores',
      'Tomar a la misma hora todos los dias — los niveles en sangre necesitan mantenerse consistentes',
    ],
    'Transplant patients must take immunosuppressants for life. Missing doses can lead to organ rejection. Always carry a list of your medicines and wear a medical alert bracelet.',
    'Los pacientes trasplantados deben tomar inmunosupresores de por vida. Omitir dosis puede llevar al rechazo del organo. Siempre lleva una lista de tus medicamentos y usa una pulsera de alerta medica.',
  ),
};

// ============================================
// Utility Functions
// ============================================

/**
 * Retrieve a mechanism explanation by its ID.
 * Returns undefined if not found.
 */
export function getMechanismExplained(id: string): MechanismExplained | undefined {
  return MECHANISMS_EXPLAINED[id];
}

/**
 * Search mechanism explanations by a case-insensitive query string.
 * Matches against name, nameEs, drugClass, analogy, and whatItDoes.
 */
export function searchMechanisms(query: string): MechanismExplained[] {
  const q = query.toLowerCase();
  return Object.values(MECHANISMS_EXPLAINED).filter((entry) => {
    return (
      entry.name.toLowerCase().includes(q) ||
      entry.nameEs.toLowerCase().includes(q) ||
      entry.drugClass.toLowerCase().includes(q) ||
      entry.drugClassEs.toLowerCase().includes(q) ||
      entry.analogy.toLowerCase().includes(q) ||
      entry.whatItDoes.toLowerCase().includes(q)
    );
  });
}

/**
 * Get all mechanism explanations as an array.
 */
export function getAllMechanisms(): MechanismExplained[] {
  return Object.values(MECHANISMS_EXPLAINED);
}

/**
 * Get total number of mechanism explanations in the database.
 */
export function getMechanismCount(): number {
  return Object.keys(MECHANISMS_EXPLAINED).length;
}
