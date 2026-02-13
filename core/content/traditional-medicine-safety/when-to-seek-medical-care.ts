import { EducationalContent } from '../types';

export const whenToSeekMedicalCareContent: EducationalContent = {
  id: 'topic-when-to-seek-medical-care',
  type: 'topic',
  name: 'When to Seek Medical Care',
  nameEs: 'Cuando Buscar Atencion Medica',
  alternateNames: [
    'When to See a Doctor',
    'Emergency Warning Signs',
    'Red Flags for Medical Attention',
    'Cuando Ir al Doctor',
    'Senales de Emergencia',
  ],
  levels: {
    level1: {
      title: 'When Should You Go to a Doctor? Warning Signs Everyone Should Know',
      titleEs: 'Cuando Debe Ir al Doctor? Senales de Advertencia que Todos Deben Conocer',
      readingLevel: '8th-grade',
      content: `
## Knowing When Home Remedies Are Not Enough

Many families in our communities have used home remedies and traditional healing for
generations. Chamomile tea for a stomachache, sobadas for muscle pain, or a limpia to
feel spiritually renewed — these practices are part of our culture and many of them
are helpful. But there are times when your body is telling you that something more
serious is going on, and you need a doctor's help right away.

Think of it like fixing things around your house. You can change a light bulb or tighten
a loose screw yourself. But if you smell gas or see sparks coming from the walls, you
call a professional immediately because waiting could be dangerous. Your body works the
same way — some problems you can manage at home, but others need professional help fast.

### Warning Signs That Mean "Go to the Doctor Now"

These symptoms are like a fire alarm for your body. If you or someone in your family
has any of these, do not wait — seek medical help immediately:

**Heart and Breathing Emergencies**
- Chest pain, pressure, or tightness (especially with sweating, nausea, or arm pain)
- Sudden trouble breathing or shortness of breath that comes on quickly
- Lips or fingernails turning blue or gray

**Brain and Nerve Emergencies**
- Sudden confusion, trouble speaking, or not making sense
- Sudden severe headache that is the worst headache of your life
- One side of the face drooping, arm weakness, or sudden loss of balance (stroke signs)
- Fainting or losing consciousness
- Seizures (convulsions) in someone who does not normally have them

**Bleeding and Injury Emergencies**
- Bleeding that does not stop after 10 minutes of firm pressure
- Vomiting blood or having bloody or black stools
- Serious injuries from falls, car accidents, or other trauma

**Other Urgent Situations**
- High fever (over 103 degrees F / 39.4 degrees C) that does not come down with medicine
- Signs of severe allergic reaction: swelling of face/throat, trouble breathing, full-body hives
- Severe abdominal pain that gets worse, especially on the right side
- Signs of dehydration: no urination for 8+ hours, extreme thirst, dizziness, dry mouth
- In babies: high fever, not eating, not waking up normally, bulging soft spot on head

### When Home Remedies Can Wait but a Doctor Visit Is Still Needed

Some problems are not emergencies but should not be ignored. Plan to see a doctor within
a few days if you have:

- A cough that lasts more than 3 weeks
- Pain that does not improve after a week of home treatment
- A wound that is red, swollen, warm, or leaking pus (signs of infection)
- Unexplained weight loss
- Blood in your urine
- A mole or skin spot that changes color, size, or shape
- Feelings of sadness or worry that make it hard to go about your daily life

### The Most Important Rule

**Using traditional remedies while waiting to see if something gets better is okay for
mild symptoms. But never use home remedies as a reason to avoid going to the doctor for
serious symptoms.** Your abuelita's remedies and your doctor's treatments can work together,
but for dangerous situations, the doctor must come first.
      `,
      contentEs: `
## Saber Cuando los Remedios Caseros No Son Suficientes

Muchas familias en nuestras comunidades han usado remedios caseros y sanacion tradicional
por generaciones. Te de manzanilla para el dolor de estomago, sobadas para el dolor muscular,
o una limpia para sentirse espiritualmente renovado — estas practicas son parte de nuestra
cultura y muchas de ellas son utiles. Pero hay momentos en que su cuerpo le esta diciendo
que algo mas serio esta pasando, y necesita la ayuda de un doctor de inmediato.

### Senales de Advertencia que Significan "Vaya al Doctor Ahora"

- Dolor, presion o apriete en el pecho
- Problemas repentinos para respirar
- Confusion repentina o dificultad para hablar
- El peor dolor de cabeza de su vida
- Sangrado que no para despues de 10 minutos de presion firme
- Fiebre alta (mas de 103 grados F) que no baja con medicina
- Senales de reaccion alergica severa

### La Regla Mas Importante

Usar remedios tradicionales mientras espera para ver si algo mejora esta bien para sintomas
leves. Pero nunca use remedios caseros como razon para evitar ir al doctor por sintomas serios.
      `,
      patientCounselingPoints: [
        'Traditional remedies and modern medicine are partners, not competitors — use both, but know when the doctor must come first.',
        'Chest pain, sudden trouble breathing, signs of stroke (face drooping, arm weakness, speech difficulty), and uncontrolled bleeding are always emergencies — call 911 immediately.',
        'High fever in babies under 3 months old is always an emergency, even if the baby seems otherwise okay.',
        'If you are unsure whether something is an emergency, it is always better to go to the doctor and find out it was nothing than to stay home and find out it was something serious.',
        'You will not get in trouble for going to the emergency room regardless of your insurance or immigration status — emergency rooms must treat everyone by law (EMTALA).',
        'Keep a list of emergency numbers on your refrigerator: 911, Poison Control (1-800-222-1222), and your doctor\'s after-hours number.',
      ],
      keyTerms: [
        { term: 'Emergency', definition: 'A medical situation where waiting could cause permanent harm or death; requires immediate professional help, usually by calling 911 or going to an emergency room.' },
        { term: 'Stroke', definition: 'When blood flow to part of the brain is blocked or a blood vessel in the brain bursts; signs include face drooping, arm weakness, and speech difficulty. Remember FAST: Face, Arms, Speech, Time.' },
        { term: 'Dehydration', definition: 'When your body loses more water than it takes in, causing dangerous drops in blood pressure and organ function; common in children with diarrhea or vomiting.' },
        { term: 'EMTALA', definition: 'A federal law (Emergency Medical Treatment and Labor Act) that requires emergency rooms to treat anyone who comes in, regardless of ability to pay or immigration status.' },
        { term: 'Anaphylaxis', definition: 'A severe, life-threatening allergic reaction that can cause throat swelling, trouble breathing, and a dangerous drop in blood pressure; requires immediate treatment with epinephrine.' },
      ],
    },
    level2: {
      title: 'Recognizing Medical Emergencies: When Traditional Remedies Need to Step Aside',
      titleEs: 'Reconociendo Emergencias Medicas: Cuando los Remedios Tradicionales Necesitan Dar Paso',
      readingLevel: 'high-school',
      content: `
## Understanding the Difference Between Self-Treatable and Serious Conditions

Traditional and home remedies have been used in Latino communities for centuries, and many
have genuine therapeutic value. Chamomile (manzanilla) does have anti-inflammatory properties,
peppermint (hierba buena) can genuinely soothe digestive discomfort, and the emotional support
provided by spiritual practices like limpias has documented psychological benefits. However,
the human body can develop conditions that no amount of traditional treatment can address,
and recognizing these situations quickly can save lives.

The key concept is **triage** — the medical term for sorting health problems by how urgently
they need professional attention. Think of it as three categories:

### Category 1: Call 911 or Go to the Emergency Room Immediately

These conditions involve potential organ damage or death within minutes to hours:

**Cardiovascular Emergencies**
- Chest pain or pressure lasting more than 5 minutes, especially with radiation to the arm,
  jaw, or back, sweating, or nausea — these are classic heart attack symptoms
- Sudden onset of irregular or racing heartbeat with dizziness or fainting
- Severe shortness of breath at rest

**Neurological Emergencies**
- Sudden onset of FAST symptoms (Face drooping, Arm weakness, Speech difficulty, Time to
  call 911) — these indicate stroke, where every minute of delay costs brain cells
- Sudden worst headache of life with stiff neck (possible brain hemorrhage or meningitis)
- Seizures in someone without a seizure disorder
- Loss of consciousness or altered mental status

**Severe Infections**
- Fever above 103 degrees F that does not respond to acetaminophen or ibuprofen, especially with
  confusion, rapid breathing, or a rash that does not blanch when pressed
- Any fever in an infant under 3 months old
- Signs of sepsis: feeling extremely ill, rapid heart rate, shaking chills, mottled skin

**Poisoning and Toxicity**
- Suspected ingestion of a toxic substance (including some traditional remedies containing
  lead, mercury, or unknown compounds)
- Severe allergic reaction with throat swelling or breathing difficulty

### Category 2: See a Doctor Within 24-48 Hours

These are situations where delay of a few days is unlikely to cause permanent harm but that
need professional evaluation soon:

- Fever lasting more than 3 days, even if not extremely high
- New, unexplained pain that is moderate to severe
- Worsening of a chronic condition despite home management
- Signs of infection in a wound: increasing redness spreading outward, warmth, pus, red
  streaks extending from the wound
- Persistent vomiting or diarrhea lasting more than 24 hours (12 hours in children or elderly)
- Urinary symptoms: burning, frequency, blood in urine, back pain
- New onset of significant swelling in legs or feet

### Category 3: Schedule a Routine Appointment

These are health changes that should be evaluated but are not time-sensitive:

- Chronic fatigue lasting more than a month
- Gradual weight changes without explanation
- Persistent mild joint or muscle pain not responding to home remedies
- Changes in skin lesions (moles, spots)
- Routine screening needs (blood pressure, diabetes, cancer screening)
- Mental health concerns: persistent anxiety, depression, sleep problems

### Why Timing Matters: Real-World Consequences of Delay

Understanding why these categories exist helps motivate timely action:

- **Heart attack**: Treatments like clot-busting drugs and angioplasty work best within the
  first 90 minutes. Every 30 minutes of delay reduces survival chances.
- **Stroke**: The clot-dissolving drug tPA must be given within 4.5 hours of symptom onset.
  The phrase "time is brain" reflects that 1.9 million neurons die every minute during a stroke.
- **Appendicitis**: A swollen appendix can burst within 24-72 hours, turning a manageable
  surgery into a life-threatening infection.
- **Sepsis**: Mortality increases 7-8% for every hour that antibiotics are delayed once
  sepsis is identified.

### The Role of Traditional Remedies During Medical Emergencies

Traditional remedies are **not appropriate** as primary treatment for any Category 1 condition.
However, they can still play a supportive role:

- Prayer and spiritual support can reduce anxiety while waiting for or receiving medical care
- Gentle massage (sobada) of non-injured areas can provide comfort
- Chamomile or mint tea can soothe the spirit (but should not replace IV fluids for dehydration)
- A limpia after medical treatment can help with emotional processing and recovery

The goal is integration, not replacement: let the doctors handle the medical emergency, and let
traditional practices support the emotional and spiritual healing alongside.
      `,
      contentEs: `
## Entendiendo la Diferencia Entre Condiciones Autotratables y Serias

Los remedios tradicionales y caseros se han usado en comunidades latinas por siglos, y muchos
tienen valor terapeutico genuino. Sin embargo, el cuerpo humano puede desarrollar condiciones
que ningun tratamiento tradicional puede abordar, y reconocer estas situaciones rapidamente
puede salvar vidas.

### Categoria 1: Llame al 911 o Vaya a la Sala de Emergencias Inmediatamente

Estas condiciones involucran posible dano a organos o muerte dentro de minutos a horas:
emergencias cardiovasculares, neurologicas, infecciones severas, y envenenamiento.

### Categoria 2: Vea a un Doctor Dentro de 24-48 Horas

Fiebre que dura mas de 3 dias, dolor nuevo e inexplicable, senales de infeccion en heridas.

### El Papel de los Remedios Tradicionales Durante Emergencias Medicas

Los remedios tradicionales pueden jugar un papel de apoyo emocional y espiritual junto con
el tratamiento medico, pero no deben reemplazar la atencion de emergencia.
      `,
      patientCounselingPoints: [
        'Learn the FAST test for stroke: Face drooping, Arm weakness, Speech difficulty, Time to call 911 — memorize this and teach it to your family members.',
        'For heart attacks, the clot-busting treatment works best within 90 minutes; for strokes, the window is 4.5 hours — every minute counts, so never "wait to see if it gets better" with these symptoms.',
        'A fever in a baby under 3 months old is always an emergency, even if the baby does not seem very sick — their immune systems cannot fight infections the way older children can.',
        'Traditional remedies can support your emotional and spiritual well-being during and after a medical emergency, but they should complement professional care, not replace it.',
        'If someone has taken a traditional remedy and develops sudden severe symptoms, bring the product container to the emergency room so doctors know what they are dealing with.',
        'You can call Poison Control (1-800-222-1222) any time, 24 hours a day, 7 days a week, with questions about whether a substance someone swallowed is dangerous — they have Spanish-speaking staff available.',
      ],
      keyTerms: [
        { term: 'Triage', definition: 'The process of sorting patients or health problems by how urgently they need treatment; used in emergency rooms and helpful as a personal decision-making framework.' },
        { term: 'Sepsis', definition: 'A life-threatening condition where the body\'s response to infection damages its own organs; symptoms include high fever, rapid heart rate, confusion, and feeling extremely ill.' },
        { term: 'tPA (tissue plasminogen activator)', definition: 'A clot-dissolving medication used to treat strokes and some heart attacks; must be given within a narrow time window to be effective and safe.' },
        { term: 'Blanching', definition: 'When a rash temporarily disappears under pressure (such as pressing a glass against the skin); a rash that does not blanch may indicate a more serious condition like meningitis.' },
        { term: 'FAST', definition: 'An acronym for stroke recognition: Face drooping, Arm weakness, Speech difficulty, Time to call 911; the most widely recommended public stroke screening tool.' },
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act — a federal law requiring all emergency departments to provide stabilizing treatment regardless of insurance status, citizenship, or ability to pay.' },
      ],
    },
    level3: {
      title: 'Clinical Red Flags and Decision Frameworks: Integrating Traditional Medicine Awareness into Urgent Care Assessment',
      titleEs: 'Senales de Alerta Clinica y Marcos de Decision: Integrando la Conciencia de Medicina Tradicional en la Evaluacion de Atencion Urgente',
      readingLevel: 'college',
      content: `
## Systematic Approach to Identifying Medical Emergencies in the Context of Traditional Medicine Use

Healthcare decisions in Latino communities are often influenced by a complex interplay of
traditional healing beliefs, family dynamics, prior experiences with the healthcare system
(both positive and negative), economic considerations, and immigration-related concerns.
A systematic understanding of clinical red flags — symptoms and signs that indicate
potentially life-threatening conditions — is essential for anyone bridging the gap between
traditional and conventional medicine.

### Pathophysiological Basis of Emergency Warning Signs

Understanding why certain symptoms are emergencies requires basic knowledge of what is
happening inside the body:

**Cardiovascular Red Flags**

Chest pain with autonomic symptoms (sweating, nausea, pallor) suggests acute coronary
syndrome — either unstable angina or myocardial infarction. The pathophysiology involves
acute thrombotic occlusion of a coronary artery, leading to myocardial ischemia and,
if untreated, irreversible necrosis of cardiac tissue. The time-dependent nature of
myocardial salvage underlies the "door-to-balloon" target of 90 minutes for percutaneous
coronary intervention (PCI).

Key considerations for Latino populations:
- Atypical presentations are more common in women, diabetics, and elderly patients — groups
  that may attribute symptoms to indigestion (empacho) or anxiety (susto/nervios)
- Diabetic neuropathy can mask chest pain, making nausea, fatigue, or shortness of breath
  the predominant symptoms
- Cultural stoicism ("aguantar" — to endure) may delay presentation

**Neurological Red Flags**

Sudden-onset focal neurological deficits (hemiparesis, aphasia, visual field cuts) indicate
acute cerebrovascular events. Ischemic stroke results from thrombotic or embolic occlusion
of a cerebral artery, while hemorrhagic stroke involves vessel rupture. The penumbra
concept — salvageable tissue surrounding the core infarct — provides the biological basis
for time-critical intervention.

Cultural considerations:
- Stroke symptoms may be attributed to "aire" (cold air entering the body) or spiritual
  causes, leading to initial treatment with limpias or sobadas rather than emergency care
- Language barriers compound the challenge: aphasia may be mistaken for a language issue
  in bilingual patients
- The "thunderclap headache" of subarachnoid hemorrhage may be treated with herbal analgesics,
  delaying diagnosis of a neurosurgical emergency

**Infectious Disease Red Flags**

Systemic inflammatory response syndrome (SIRS) progressing to sepsis represents a cascade
of immune dysregulation where the body's response to infection becomes self-destructive.
The Sequential Organ Failure Assessment (SOFA) and quick SOFA (qSOFA) scores provide
clinical frameworks for identifying patients at risk for sepsis-related mortality.

Cultural considerations:
- Febrile illness may be initially treated with herbal antipyretics (willow bark, fever
  grass, linden flower/tilo)
- Meningeal signs in children may be attributed to "caida de mollera" (fallen fontanelle),
  a traditional folk illness concept that overlaps with severe dehydration
- Community-acquired infections may be undertreated if patients lack primary care access
  and rely solely on traditional healers for initial management

### Decision Framework: Traditional Remedy Use and the "Red Flag" Overlay

A practical framework for community health educators and bilingual healthcare navigators:

**Step 1: Identify the presenting complaint and the traditional remedy being used**
Document what symptoms prompted the use of traditional remedies and which specific
remedies are being used, including preparation methods and doses.

**Step 2: Screen for red flag symptoms using body-system checklist**

| Body System | Red Flag Symptoms | Common Traditional Attribution |
|------------|-------------------|-------------------------------|
| Cardiovascular | Chest pain, palpitations, syncope | Susto, empacho, nervios |
| Neurological | Sudden weakness, speech change, worst headache | Aire, mal de ojo, spiritual attack |
| Respiratory | Acute dyspnea, cyanosis, hemoptysis | Pasmo, cold/hot imbalance |
| Gastrointestinal | Hematemesis, melena, acute abdomen | Empacho, bilis, coraje |
| Infectious | High fever with altered sensorium, petechial rash | Caida de mollera, fever herbs |
| Pediatric | Fever <3mo, lethargy, bulging fontanelle, seizure | Caida de mollera, empacho, mal de ojo |

**Step 3: Apply urgency classification**
- If any red flag is present: direct to emergency services immediately
- If concerning but non-emergent: facilitate urgent care or same-day clinic appointment
- If no red flags: support continued traditional management with scheduled follow-up

**Step 4: Bridge communication**
Help the patient communicate their traditional remedy use to the medical team. This
information is clinically relevant because:
- Some remedies contain pharmacologically active compounds
- Some remedies contain toxic contaminants (lead, mercury)
- Remedy use provides context for the timeline of illness and prior treatment attempts

### Quantifying Delay: The Cost of Waiting

Research on treatment delays in time-sensitive conditions demonstrates the consequences
of delayed presentation:

- **Acute MI**: Each 30-minute delay in reperfusion increases 1-year mortality by approximately 7.5%
- **Acute ischemic stroke**: The number needed to treat (NNT) with tPA increases from 4.5
  at 90 minutes to 14 at 270 minutes — early treatment helps 3 times as many patients
- **Sepsis**: Each hour of delay in antibiotic administration after hypotension onset increases
  mortality by approximately 7.6%
- **Appendicitis**: Risk of perforation increases by 5% per 12-hour delay after 36 hours
  of symptom onset

These statistics underscore that the decision to seek medical care is itself a medical
intervention — one with measurable impact on outcomes.
      `,
      contentEs: `
## Enfoque Sistematico para Identificar Emergencias Medicas en el Contexto del Uso de Medicina Tradicional

Las decisiones de salud en las comunidades latinas estan frecuentemente influenciadas por
una interaccion compleja de creencias de sanacion tradicional, dinamicas familiares,
experiencias previas con el sistema de salud, consideraciones economicas y preocupaciones
relacionadas con la inmigracion.

### Marco de Decision: Uso de Remedios Tradicionales y Senales de Alerta

Paso 1: Identificar los sintomas y los remedios tradicionales que se estan usando.
Paso 2: Buscar senales de alerta usando una lista de verificacion por sistema corporal.
Paso 3: Aplicar clasificacion de urgencia.
Paso 4: Facilitar la comunicacion con el equipo medico sobre el uso de remedios tradicionales.

### Cuantificando la Demora: El Costo de Esperar

Cada 30 minutos de retraso en el tratamiento de un infarto aumenta la mortalidad a un ano
en aproximadamente 7.5%. Cada hora de retraso en antibioticos durante sepsis aumenta la
mortalidad en aproximadamente 7.6%.
      `,
      patientCounselingPoints: [
        'Understanding the pathophysiology behind emergency warning signs helps explain why time-critical conditions cannot be managed with traditional remedies alone.',
        'Cultural concepts like susto, empacho, and aire may overlap with serious medical conditions — learning to distinguish between benign cultural attributions and dangerous symptoms is a critical health literacy skill.',
        'The concept of the stroke penumbra — salvageable brain tissue that dies with each passing minute — provides a powerful, evidence-based argument for immediate emergency care over traditional treatment for acute neurological symptoms.',
        'Community health educators and promotores de salud should be trained in red flag recognition to serve as bridges between traditional healing and emergency medical systems.',
      ],
      keyTerms: [
        { term: 'Acute coronary syndrome (ACS)', definition: 'A spectrum of conditions resulting from sudden reduction of blood flow to the heart, including unstable angina and myocardial infarction; characterized by chest pain, autonomic symptoms, and ECG changes.' },
        { term: 'Penumbra', definition: 'The area of brain tissue surrounding a stroke core that is damaged but potentially salvageable if blood flow is restored quickly; the biological basis for time-critical stroke treatment.' },
        { term: 'qSOFA (quick Sequential Organ Failure Assessment)', definition: 'A bedside clinical score using altered mental status, respiratory rate greater than or equal to 22, and systolic blood pressure less than or equal to 100 mmHg to identify patients at risk for sepsis-related mortality.' },
        { term: 'Caida de mollera', definition: 'A traditional folk illness concept meaning "fallen fontanelle" in infants; the symptoms described (sunken soft spot, irritability, poor feeding) overlap significantly with clinical dehydration and meningitis.' },
        { term: 'Door-to-balloon time', definition: 'The interval from emergency department arrival to percutaneous coronary intervention (balloon inflation) in acute MI; the target of 90 minutes reflects the time-dependent nature of myocardial salvage.' },
        { term: 'Atypical presentation', definition: 'When a serious condition presents without its classic symptoms; more common in women, elderly, and diabetic patients, and a significant cause of delayed care-seeking in these populations.' },
      ],
    },
    level4: {
      title: 'Advanced Emergency Recognition in Culturally Complex Clinical Settings: Bridging Traditional Medicine and Acute Care',
      titleEs: 'Reconocimiento Avanzado de Emergencias en Entornos Clinicos Culturalmente Complejos: Uniendo la Medicina Tradicional y la Atencion Aguda',
      readingLevel: 'graduate',
      content: `
## Clinical Decision-Making Framework for Emergency Presentations Complicated by Traditional Medicine Use

The intersection of traditional medicine use and emergency medical decision-making presents
a multifaceted clinical challenge that requires integration of biomedical knowledge,
cultural competency, and systems-level awareness. This section provides an advanced
framework for clinicians and health system leaders addressing this intersection.

### Differential Diagnosis Considerations When Traditional Remedies Are Involved

When patients present with acute symptoms and a history of traditional remedy use, the
differential diagnosis must expand to include:

**1. The underlying condition that prompted traditional remedy use**
Many patients initiate traditional remedies in response to genuine prodromal or early
symptoms of serious conditions. A patient using hierbabuena for "stomach problems" may
have early appendicitis; one using rue (ruda) for "menstrual regulation" may have an
ectopic pregnancy. The traditional remedy use provides a temporal marker for symptom onset
that may predate the acute presentation by days or weeks.

**2. Adverse effects of the traditional remedy itself**
Certain traditional preparations carry intrinsic toxicity:
- Lead-containing remedies (azarcon, greta): acute lead encephalopathy presenting with
  seizures, altered mental status, and abdominal pain
- Mercury-containing preparations: acute mercurialism with GI symptoms, renal failure
- Aristolochic acid-containing herbs: acute interstitial nephritis and urothelial carcinoma
- Pyrrolizidine alkaloid-containing herbs (comfrey, coltsfoot): hepatic veno-occlusive disease
- Ruda (rue) in pregnancy: hemorrhagic complications due to abortifacient effects

**3. Herb-drug interactions complicating existing pharmacotherapy**
Patients often use traditional remedies concurrently with prescription medications,
creating interaction risks detailed in the herbal-remedy-interactions content module.
In the emergency setting, unrecognized interactions may present as:
- Apparent drug failure (e.g., breakthrough seizures in a patient whose anticonvulsant
  levels are reduced by St. John's wort)
- Apparent drug toxicity (e.g., bleeding in a warfarin patient also taking garlic supplements)
- Serotonin syndrome in patients combining SSRIs with tryptophan-containing or MAO-inhibiting herbs

### Risk Stratification in the Context of Health Disparities

Latino patients face structural barriers that compound the clinical urgency of emergency
recognition:

**Access barriers**
- Uninsured rates among Latino adults remain higher than for non-Hispanic white adults
- Fear of immigration enforcement at healthcare facilities (despite EMTALA protections)
  creates a powerful disincentive to seek emergency care
- Geographic barriers in agricultural and rural communities with limited emergency services
- Language discordance between patients and emergency medical services

**Health literacy factors**
- Symptom attribution to folk illness categories may delay recognition of biomedical emergencies
- Distrust of the healthcare system based on prior negative experiences (dismissive treatment,
  discrimination, or deportation fears) reduces willingness to seek care
- Family decision-making dynamics may require consensus among multiple family members before
  presenting to emergency care, introducing delays

**Epidemiological context**
- Higher prevalence of undiagnosed diabetes in Latino populations increases the proportion
  of patients with atypical cardiac and neurological presentations
- Higher prevalence of certain conditions (gestational diabetes, preeclampsia in Latina women)
  requires heightened screening vigilance
- Occupational health risks (agricultural pesticide exposure, heat-related illness) may
  interact with traditional remedy use

### Implementing Culturally Responsive Emergency Triage Protocols

Health systems serving significant Latino populations should implement protocols that
address the traditional medicine dimension:

**In the pre-hospital setting (911 dispatch and EMS)**
- Spanish-language dispatch capability with cultural competency training
- EMS assessment tools that include screening for traditional remedy use and ingestion
- Field toxicology protocols for common traditional remedy toxicants (lead, mercury, herbal
  preparations)

**In the emergency department**
- Bilingual intake forms that specifically ask about remedios, hierbas, tes, and limpias
  in addition to "medications and supplements"
- Toxicology consultation pathways for suspected traditional remedy toxicity
- Cultural mediator or patient navigator availability for complex cases involving traditional
  healing
- EMTALA compliance training emphasizing that fear-of-deportation-related delay is a
  recognized contributor to excess morbidity and mortality

**In community health outreach**
- Promotores de salud training on emergency warning sign recognition and the "red flag
  overlay" framework
- Community-based CPR and first aid training adapted for cultural context
- Distribution of bilingual emergency recognition materials through churches, community
  centers, and botanicas
- Integration of emergency awareness messaging into traditional healer networks

### Medicolegal Considerations

Clinicians should be aware of medicolegal dimensions:
- Documentation of traditional remedy use is essential for both clinical management and
  medicolegal protection
- Mandatory reporting obligations for suspected child abuse may be triggered by
  lead-containing remedy administration to children (requiring sensitive, culturally
  informed navigation)
- Informed consent discussions about treatment plans should acknowledge and address
  patients' desire to continue traditional practices where safe
      `,
      contentEs: `
## Marco de Toma de Decisiones Clinicas para Presentaciones de Emergencia Complicadas por el Uso de Medicina Tradicional

La interseccion del uso de medicina tradicional y la toma de decisiones medicas de emergencia
presenta un desafio clinico multifacetico que requiere la integracion de conocimiento
biomedico, competencia cultural y conciencia a nivel de sistemas.

### Consideraciones de Diagnostico Diferencial

Cuando los pacientes presentan sintomas agudos e historia de uso de remedios tradicionales,
el diagnostico diferencial debe expandirse para incluir la condicion subyacente, los efectos
adversos del remedio mismo, y las interacciones hierba-medicamento.

### Implementando Protocolos de Triaje de Emergencia Culturalmente Responsivos

Los sistemas de salud que sirven a poblaciones latinas significativas deben implementar
protocolos que aborden la dimension de la medicina tradicional en los entornos prehospitalario,
de emergencia y de alcance comunitario.
      `,
      clinicalNotes: [
        'When a patient presents with acute symptoms and a history of traditional remedy use, the differential must include the underlying condition, adverse effects of the remedy itself, and herb-drug interactions complicating existing pharmacotherapy.',
        'Lead encephalopathy from azarcon/greta can mimic other acute neurological conditions — always consider traditional remedy toxicity in Latino patients presenting with seizures, altered mental status, or abdominal pain of unclear etiology.',
        'Fear of immigration enforcement is a documented contributor to delayed emergency care-seeking in Latino populations; EMTALA training should explicitly address this barrier and institutions should develop clear policies affirming safe access.',
        'Atypical cardiac presentations are more prevalent in diabetic patients, and undiagnosed diabetes is more common in Latino populations — maintain a low threshold for cardiac workup even with non-classic symptom profiles.',
        'Document traditional remedy use in the medical record as clinical information (for drug interaction assessment and toxicology) — not as a judgment of the patient\'s health beliefs.',
        'Mandatory reporting obligations for pediatric lead exposure from traditional remedies require culturally sensitive navigation to maintain the therapeutic alliance while protecting the child.',
      ],
      keyTerms: [
        { term: 'Prodromal symptoms', definition: 'Early, often nonspecific symptoms that precede the full clinical presentation of a disease; patients may initiate traditional remedies during this phase, providing a timeline marker for disease onset.' },
        { term: 'Hepatic veno-occlusive disease (VOD)', definition: 'Obstruction of small hepatic veins causing liver damage; can be caused by pyrrolizidine alkaloids found in traditional herbal preparations such as comfrey and coltsfoot.' },
        { term: 'Serotonin syndrome', definition: 'A potentially life-threatening condition caused by excess serotonergic activity, presenting with agitation, hyperthermia, clonus, and autonomic instability; can result from combining prescription antidepressants with serotonergic herbs.' },
        { term: 'Cultural mediator', definition: 'A trained individual who bridges communication and understanding between patients from traditional cultural backgrounds and biomedical healthcare providers, going beyond language translation to address health belief differences.' },
        { term: 'Promotores de salud', definition: 'Community health workers embedded in Latino communities who serve as trusted bridges between communities and healthcare systems; effective vehicles for emergency recognition education.' },
        { term: 'EMTALA (Emergency Medical Treatment and Labor Act)', definition: 'Federal law requiring Medicare-participating hospitals to provide emergency screening and stabilization regardless of insurance status, citizenship, or ability to pay; a critical protection for undocumented immigrants.' },
      ],
    },
    level5: {
      title: 'Systems-Level Analysis: Emergency Care Access, Traditional Medicine, and Health Equity in Latino Populations',
      titleEs: 'Analisis a Nivel de Sistemas: Acceso a Atencion de Emergencia, Medicina Tradicional y Equidad en Salud en Poblaciones Latinas',
      readingLevel: 'professional',
      content: `
## Structural Determinants of Emergency Care Delay in Traditional Medicine-Using Populations

The clinical imperative of timely emergency care access intersects with structural health
inequities in ways that disproportionately affect Latino and other minority populations
who rely on traditional medicine. This systems-level analysis examines the epidemiology of
emergency care delay, the policy architecture governing access, and evidence-based
interventions to reduce delay-related morbidity and mortality.

### Epidemiology of Emergency Care Delay in Latino Populations

**Quantifying the Delay**

Multiple studies have documented significantly longer pre-hospital delays among Latino
patients for time-critical conditions:
- Acute MI: Latino patients have a median symptom-to-door time approximately 30-60 minutes
  longer than non-Hispanic white patients (Lauer et al., 2017)
- Stroke: Spanish-speaking patients are less likely to arrive within the tPA treatment window
  and more likely to present beyond 24 hours from symptom onset (Cruz-Flores et al., 2011)
- Pediatric emergencies: Latino children are more likely to have delays in care for conditions
  like appendicitis, resulting in higher perforation rates (Ponsky et al., 2004)

**Contributing Factors (Multivariate Analysis)**
Research identifies several independent predictors of emergency care delay in Latino populations:
1. Use of traditional/home remedies as initial treatment (OR 2.1-3.4)
2. Lack of health insurance (OR 1.8-2.5)
3. Limited English proficiency (OR 1.5-2.3)
4. Fear of immigration consequences (OR 1.7-2.8 in undocumented populations)
5. Attribution of symptoms to folk illness categories (OR 1.4-2.1)
6. Geographic distance to emergency facility (OR 1.3-1.9 per 10 miles)
7. Previous negative healthcare experiences (OR 1.5-2.0)

These factors interact synergistically — a patient with multiple barriers faces
compounded delay that can be clinically catastrophic for time-sensitive conditions.

### Policy Architecture and Its Impact

**Immigration Enforcement and Healthcare Access**

The chilling effect of immigration enforcement on healthcare utilization is well-documented:
- Emergency department visits among Latino patients decreased significantly in jurisdictions
  with aggressive immigration enforcement policies
- Prenatal care utilization among Latina women declined following high-profile enforcement
  actions, with downstream effects on maternal and neonatal outcomes
- EMTALA provides legal protection for emergency care access, but awareness of this
  protection is low among undocumented immigrants and their families

**Insurance Coverage Gaps**
- The Affordable Care Act excluded undocumented immigrants from marketplace coverage
- State-level Emergency Medicaid provides limited coverage for acute emergency treatment
  but does not cover follow-up or preventive care
- The "public charge" rule (and fear of its application) deters even eligible immigrants
  from seeking coverage

**Language Access Requirements**
- Title VI of the Civil Rights Act requires language access in federally funded healthcare
- Compliance is inconsistent, particularly in pre-hospital settings (911 dispatch, EMS)
- Medical interpreter availability in emergency departments varies significantly by
  institution and time of day
- Telephonic interpretation, while widely available, introduces communication challenges
  in acute clinical scenarios

### Evidence-Based Interventions to Reduce Emergency Care Delay

**Community-Level Interventions**

1. *Promotor/a-based emergency education programs*
   - RCT evidence supports promotor-delivered cardiovascular emergency education in
     increasing 911 utilization and reducing symptom-to-door times in Latino communities
   - Programs that integrate respect for traditional medicine while teaching emergency
     recognition show higher engagement and retention than programs that dismiss
     traditional practices
   - Cost-effectiveness analyses suggest favorable ICERs relative to other cardiovascular
     risk reduction interventions

2. *Community paramedicine models*
   - Extended-scope paramedic programs that provide community health navigation alongside
     emergency response have shown promise in bridging traditional and emergency medicine
   - Integration of community paramedics with promotores de salud networks increases
     geographic and cultural reach

3. *Botanica-based health outreach*
   - Botanicas (shops selling traditional remedies) serve as informal health information
     hubs in Latino communities
   - Pilot programs placing emergency recognition materials and trained health navigators
     in botanicas have demonstrated feasibility and community acceptance

**Health System-Level Interventions**

1. *Culturally adapted emergency department protocols*
   - Implementation of bilingual, culturally adapted intake processes
   - Integration of traditional remedy screening into medication reconciliation
   - Cultural competency training for ED staff with specific focus on traditional medicine
   - Sanctuary policies that explicitly separate healthcare from immigration enforcement

2. *Technology solutions*
   - Spanish-language symptom checker applications with emergency triage functionality
   - Telehealth pre-triage with bilingual providers to reduce inappropriate ED avoidance
   - Integration of traditional remedy databases into EHR clinical decision support

3. *Community health worker integration*
   - Formal integration of promotores de salud into emergency department care teams
   - Training promotores in first aid, CPR, and emergency recognition with cultural adaptation
   - Establishing referral pathways from traditional healers to emergency services

### Research Priorities

The evidence base for interventions at this intersection remains limited. Priority areas include:
- Prospective cohort studies quantifying the contribution of traditional remedy use to
  emergency care delay across conditions
- Randomized trials of culturally adapted emergency recognition education programs
- Implementation science research on integrating traditional medicine awareness into
  emergency department workflows
- Health economic analyses of community health worker programs targeting emergency delay
- Qualitative research on traditional healer perspectives regarding emergency referral
  and collaboration with biomedical systems
      `,
      contentEs: `
## Determinantes Estructurales del Retraso en la Atencion de Emergencia en Poblaciones que Usan Medicina Tradicional

El imperativo clinico del acceso oportuno a la atencion de emergencia se intersecta con
inequidades estructurales de salud de maneras que afectan desproporcionadamente a las
poblaciones latinas y otras poblaciones minoritarias que dependen de la medicina tradicional.

### Epidemiologia del Retraso en la Atencion de Emergencia

Multiples estudios han documentado retrasos prehospitalarios significativamente mas largos
entre pacientes latinos para condiciones donde el tiempo es critico, con contribuyentes
independientes que incluyen uso de remedios tradicionales, falta de seguro, dominio
limitado del ingles y miedo a consecuencias migratorias.

### Intervenciones Basadas en Evidencia

Las intervenciones a nivel comunitario incluyen programas de educacion de emergencia
basados en promotores, modelos de paramedicina comunitaria y alcance en botanicas. Las
intervenciones a nivel de sistema incluyen protocolos culturalmente adaptados y soluciones
tecnologicas.
      `,
      clinicalNotes: [
        'Latino patients experience median symptom-to-door times 30-60 minutes longer than non-Hispanic white patients for acute MI, with traditional remedy use as initial treatment identified as an independent predictor (OR 2.1-3.4) of delay.',
        'The synergistic interaction of multiple delay factors (traditional remedy use, insurance status, language barriers, immigration fears) creates compounded risk that is clinically catastrophic for time-sensitive conditions — assess and address all barriers simultaneously.',
        'Promotor/a-based emergency education programs that integrate respect for traditional medicine while teaching emergency recognition show higher engagement than programs dismissing traditional practices — cultural humility enhances rather than impedes emergency preparedness.',
        'Botanicas represent underutilized but high-potential venues for emergency recognition education in Latino communities; pilot programs demonstrate feasibility and community acceptance.',
        'Implementation of sanctuary policies in healthcare settings and explicit communication of EMTALA protections are evidence-based strategies to reduce immigration-fear-related emergency care delay.',
        'The evidence base for interventions at the traditional medicine-emergency care intersection remains limited; prioritize prospective cohort studies and randomized trials of culturally adapted emergency education programs.',
      ],
      keyTerms: [
        { term: 'Symptom-to-door time', definition: 'The interval from onset of symptoms to arrival at an emergency department; a critical metric for time-sensitive conditions where longer intervals correlate directly with increased mortality and morbidity.' },
        { term: 'Chilling effect', definition: 'In healthcare access, the deterrent impact of immigration enforcement policies on healthcare utilization by immigrant populations, even when legal protections like EMTALA exist.' },
        { term: 'Community paramedicine', definition: 'An expanded-scope model of paramedicine in which paramedics provide community health services including health education, chronic disease management, and navigation, bridging gaps between emergency and primary care systems.' },
        { term: 'Public charge rule', definition: 'A federal immigration regulation that considers an immigrant\'s use of public benefits in admissibility decisions; fear of public charge determination deters eligible immigrants from seeking healthcare coverage and services.' },
        { term: 'ICER (incremental cost-effectiveness ratio)', definition: 'A health economic metric comparing the additional cost of an intervention to its additional health benefit; used to evaluate whether community-based emergency education programs represent good value for health systems.' },
        { term: 'Implementation science', definition: 'The study of methods to promote the adoption and integration of evidence-based practices into routine care; essential for translating emergency care delay interventions from research settings to real-world healthcare systems.' },
      ],
    },
  },
  media: [],
  citations: [
    {
      id: 'nhlbi-heart-attack-signs-2023',
      title: 'Heart Attack Signs and Symptoms',
      authors: ['National Heart, Lung, and Blood Institute'],
      source: 'NHLBI Health Topics, National Institutes of Health',
      year: 2023,
      type: 'website',
      url: 'https://www.nhlbi.nih.gov/health/heart-attack/symptoms',
    },
    {
      id: 'cdc-stroke-signs-2023',
      title: 'Stroke Signs and Symptoms',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC Stroke Information',
      year: 2023,
      type: 'website',
      url: 'https://www.cdc.gov/stroke/signs-symptoms/',
    },
    {
      id: 'medlineplus-when-to-use-er-2023',
      title: 'When to Use the Emergency Room',
      authors: ['MedlinePlus'],
      source: 'MedlinePlus Medical Encyclopedia, National Library of Medicine',
      year: 2023,
      type: 'website',
      url: 'https://medlineplus.gov/ency/patientinstructions/000593.htm',
    },
    {
      id: 'cruz-flores-stroke-hispanics-2011',
      title: 'Racial-Ethnic Disparities in Stroke Care: The American Experience',
      authors: ['Cruz-Flores, S.', 'Rabinstein, A.', 'Biller, J.'],
      source: 'Stroke, 42(7), 2091-2116',
      year: 2011,
      type: 'journal',
    },
  ],
  crossReferences: [
    { contentId: 'topic-herbal-remedy-interactions', relationship: 'related' },
    { contentId: 'topic-talking-to-doctor-about-remedies', relationship: 'related' },
    { contentId: 'topic-lead-in-remedies-azarcon-greta', relationship: 'related' },
    { contentId: 'topic-combining-traditional-western', relationship: 'prerequisite' },
  ],
  tags: [
    'emergency-recognition',
    'medical-emergencies',
    'traditional-medicine',
    'latino-health',
    'health-literacy',
    'patient-safety',
    'cultural-competency',
    'health-equity',
    'EMTALA',
    'community-health',
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
