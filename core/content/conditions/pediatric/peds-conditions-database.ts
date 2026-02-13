/**
 * Pediatric Conditions Database
 *
 * Comprehensive reference of pediatric conditions with clinical summaries,
 * bilingual names (English/Spanish), ICD-11 codes, patient education, and
 * treatment guidance for common pediatric emergencies and conditions.
 *
 * SOMA Medical Education Platform
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PedsCategory =
  | 'respiratory'
  | 'cardiovascular'
  | 'gastrointestinal'
  | 'neurological'
  | 'infectious';

export interface PedsConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: PedsCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PEDS_CONDITIONS: Record<string, PedsConditionEntry> = {

  'croup': {
    id: 'croup',
    name: 'Croup (Laryngotracheobronchitis)',
    nameEs: 'Crup (Laringotraqueobronquitis)',
    category: 'respiratory',
    icd11: 'CA07',
    description: 'Viral upper airway infection causing inflammation of larynx and trachea, leading to characteristic barky cough and stridor. Most common in children 6 months to 3 years.',
    descriptionEs: 'Infección viral del tracto respiratorio superior que causa inflamación de laringe y tráquea, produciendo tos perruna característica y estridor. Más común en niños de 6 meses a 3 años.',
    riskFactors: [
      'Age 6 months to 3 years',
      'Fall and winter months',
      'Parainfluenza virus infection',
      'Male sex (slight predominance)',
      'History of previous croup episodes'
    ],
    pathophysiology: 'Parainfluenza virus (75% of cases) causes inflammation and edema of subglottic region, leading to airway narrowing. Negative pressure during inspiration exacerbates collapse, producing inspiratory stridor.',
    pathophysiologyEs: 'El virus parainfluenza (75% de casos) causa inflamación y edema de región subglótica, provocando estrechamiento de vías respiratorias. Presión negativa durante inspiración agrava colapso, produciendo estridor inspiratorio.',
    symptoms: ['Barky "seal-like" cough', 'Hoarse voice', 'Inspiratory stridor', 'Low-grade fever', 'Rhinorrhea', 'Symptoms worse at night', 'Respiratory distress'],
    diagnostics: {
      tests: ['Clinical diagnosis based on history and exam', 'Oxygen saturation monitoring', 'Westley Croup Score (severity assessment)'],
      imaging: ['AP neck X-ray showing "steeple sign" (if diagnosis uncertain)', 'Lateral neck X-ray to rule out epiglottitis or foreign body'],
      criteria: ['Barky cough + stridor + hoarseness = clinical diagnosis', 'Mild: occasional barky cough, no stridor at rest', 'Moderate: frequent cough, stridor at rest', 'Severe: stridor + retractions + agitation']
    },
    treatment: {
      medications: ['Dexamethasone 0.6 mg/kg PO/IM single dose (first-line)', 'Prednisolone 1-2 mg/kg if dexamethasone unavailable', 'Nebulized racemic epinephrine 0.5 mL (moderate-severe)', 'Acetaminophen/ibuprofen for fever'],
      procedures: ['Cool mist humidification', 'Supplemental oxygen if SpO2 <92%', 'Observation 2-4 hours after epinephrine', 'Intubation if respiratory failure (rare)'],
      lifestyle: ['Keep child calm (crying worsens symptoms)', 'Exposure to cool night air', 'Upright positioning', 'Adequate hydration', 'Avoid irritants and smoke']
    },
    emergencySigns: ['Stridor at rest not improving', 'Severe retractions (subcostal, intercostal)', 'Cyanosis or bluish lips', 'Drooling or difficulty swallowing', 'Inability to speak or cry', 'SpO2 <92%', 'Altered mental status'],
    patientExplanation: 'Croup is a viral infection that makes the airway in your child\'s throat swell, creating that distinctive barky cough that sounds like a seal. When they breathe in, the narrowed airway makes a high-pitched sound called stridor. It can be scary to hear, but most cases are mild. A single dose of steroid medicine (dexamethasone) reduces swelling and usually makes breathing easier within hours. Cool air can help open the airway—many parents find relief by taking their child outside into the cool night air or running a cool mist humidifier. Most children improve in 2-3 days.',
    patientExplanationEs: 'El crup es una infección viral que hace que las vías respiratorias en la garganta de su hijo se inflamen, creando esa tos perruna distintiva que suena como una foca. Cuando respiran, la vía respiratoria estrecha hace un sonido agudo llamado estridor. Puede ser aterrador de escuchar, pero la mayoría de los casos son leves. Una dosis única de medicina con esteroides (dexametasona) reduce la inflamación y usualmente facilita la respiración en horas. El aire frío puede ayudar a abrir la vía respiratoria—muchos padres encuentran alivio llevando a su hijo afuera al aire fresco de la noche o usando un humidificador de vapor frío. La mayoría de los niños mejoran en 2-3 días.'
  },

  'bronchiolitis': {
    id: 'bronchiolitis',
    name: 'Bronchiolitis',
    nameEs: 'Bronquiolitis',
    category: 'respiratory',
    icd11: 'CA43',
    description: 'Acute viral lower respiratory tract infection causing inflammation and obstruction of small airways (bronchioles). Most commonly caused by RSV in infants under 2 years.',
    descriptionEs: 'Infección viral aguda del tracto respiratorio inferior que causa inflamación y obstrucción de vías respiratorias pequeñas (bronquiolos). Comúnmente causada por VRS en menores de 2 años.',
    riskFactors: [
      'Age <2 years (peak 2-6 months)',
      'Prematurity (<37 weeks)',
      'Chronic lung disease',
      'Congenital heart disease',
      'Immunodeficiency',
      'Daycare attendance',
      'Exposure to tobacco smoke',
      'Winter/early spring season'
    ],
    pathophysiology: 'RSV (70% of cases) infects bronchiolar epithelium, causing inflammation, edema, mucus production, and epithelial necrosis. This leads to small airway obstruction, air trapping, atelectasis, and V/Q mismatch.',
    pathophysiologyEs: 'VRS (70% de casos) infecta epitelio bronquiolar, causando inflamación, edema, producción de moco y necrosis epitelial. Esto provoca obstrucción de vías respiratorias pequeñas, atrapamiento de aire, atelectasia y desajuste V/Q.',
    symptoms: ['Rhinorrhea and nasal congestion', 'Cough (may be paroxysmal)', 'Wheezing and crackles', 'Tachypnea', 'Retractions (intercostal, subcostal)', 'Nasal flaring', 'Difficulty feeding', 'Low-grade fever', 'Apnea (especially <6 months)'],
    diagnostics: {
      tests: ['Clinical diagnosis (history + exam)', 'RSV rapid antigen or PCR (if needed for cohorting)', 'Pulse oximetry', 'ABG if severe respiratory distress', 'Viral panel if immunocompromised'],
      imaging: ['Chest X-ray: hyperinflation, peribronchial thickening, patchy atelectasis (not routinely needed)', 'Consider if severe or atypical presentation'],
      criteria: ['Age <2 years + first wheezing episode + viral URI symptoms + crackles/wheeze on exam', 'Severity: mild (feeding well, minimal distress), moderate (some feeding difficulty, tachypnea), severe (unable to feed, SpO2 <90%, marked distress)']
    },
    treatment: {
      medications: ['Supportive care only (no bronchodilators or steroids proven effective)', 'Oxygen for SpO2 <90%', 'IV fluids if poor oral intake (<50-75% normal)', 'Nirsevimab (monoclonal antibody) for prevention in eligible infants'],
      procedures: ['Nasal suctioning (bulb or deep suction)', 'High-flow nasal cannula if severe', 'CPAP/BiPAP if worsening', 'Mechanical ventilation if respiratory failure (rare)'],
      lifestyle: ['Small frequent feeds', 'Elevate head of bed 30 degrees', 'Avoid smoke exposure', 'Hand hygiene to prevent spread', 'Cool mist humidifier']
    },
    emergencySigns: ['Respiratory rate >60 breaths/min', 'SpO2 <90% on room air', 'Severe retractions', 'Grunting', 'Apnea episodes', 'Cyanosis', 'Lethargy or altered mental status', 'Dehydration (refusing all feeds, no wet diapers >8 hours)'],
    patientExplanation: 'Bronchiolitis is a viral infection that inflames the tiny airways in your baby\'s lungs, making breathing difficult and causing wheezing. It\'s very common—almost all children get it by age 2. The virus that usually causes it is called RSV. Symptoms peak around days 3-5 and can last 1-2 weeks. There\'s no antibiotic or medication that cures it; the body has to fight the virus on its own. Treatment focuses on keeping your baby comfortable: clearing the nose with suction, giving small frequent feeds, and providing oxygen if needed. Watch their breathing—if they\'re breathing fast, struggling to breathe, or refusing to eat, call your doctor. A new preventive shot (nirsevimab) is now available for infants.',
    patientExplanationEs: 'La bronquiolitis es una infección viral que inflama las vías respiratorias pequeñas en los pulmones de su bebé, dificultando la respiración y causando sibilancias. Es muy común—casi todos los niños la contraen antes de los 2 años. El virus que usualmente la causa se llama VRS. Los síntomas alcanzan su punto máximo alrededor de los días 3-5 y pueden durar 1-2 semanas. No hay antibiótico o medicamento que la cure; el cuerpo debe combatir el virus solo. El tratamiento se enfoca en mantener cómodo a su bebé: limpiar la nariz con succión, dar comidas pequeñas y frecuentes, y proporcionar oxígeno si es necesario. Observe su respiración—si respiran rápido, luchan por respirar, o rechazan comer, llame a su médico. Una nueva vacuna preventiva (nirsevimab) está disponible para bebés.'
  },

  'kawasaki-disease': {
    id: 'kawasaki-disease',
    name: 'Kawasaki Disease',
    nameEs: 'Enfermedad de Kawasaki',
    category: 'cardiovascular',
    icd11: '4A44.0',
    description: 'Acute systemic vasculitis of unknown etiology affecting medium-sized arteries, particularly coronary arteries. Leading cause of acquired heart disease in children in developed countries.',
    descriptionEs: 'Vasculitis sistémica aguda de etiología desconocida que afecta arterias de tamaño mediano, particularmente arterias coronarias. Causa principal de enfermedad cardíaca adquirida en niños en países desarrollados.',
    riskFactors: [
      'Age 6 months to 5 years (peak 1-2 years)',
      'Asian ancestry (especially Japanese)',
      'Male sex (1.5:1 ratio)',
      'Winter and spring seasons',
      'Family history of Kawasaki disease'
    ],
    pathophysiology: 'Unknown trigger causes widespread vasculitis of medium-sized muscular arteries. Inflammatory cascade damages endothelium, leading to aneurysm formation in coronary arteries (25% if untreated). Immune activation involves T-cells and cytokine release.',
    pathophysiologyEs: 'Desencadenante desconocido causa vasculitis generalizada de arterias musculares medianas. Cascada inflamatoria daña endotelio, provocando formación de aneurismas en arterias coronarias (25% si no se trata). Activación inmune involucra células T y liberación de citoquinas.',
    symptoms: ['Fever >5 days (hallmark)', 'Bilateral conjunctival injection (non-purulent)', 'Oral mucosa changes (strawberry tongue, cracked lips)', 'Polymorphous rash (trunk and extremities)', 'Extremity changes (erythema, edema of hands/feet)', 'Cervical lymphadenopathy (>1.5 cm)', 'Irritability', 'Perineal desquamation'],
    diagnostics: {
      tests: ['Clinical diagnosis: fever ≥5 days + 4/5 criteria', 'ESR >40 mm/hr', 'CRP elevated', 'CBC (leukocytosis, thrombocytosis after week 2)', 'Elevated transaminases', 'Hypoalbuminemia', 'Sterile pyuria'],
      imaging: ['Echocardiogram (baseline, 2 weeks, 6-8 weeks)', 'Look for coronary artery dilation/aneurysms', 'ECG (may show arrhythmias)', 'Chest X-ray if carditis suspected'],
      criteria: ['AHA criteria: Fever ≥5 days + 4 of 5: bilateral conjunctivitis, oral changes, rash, extremity changes, cervical lymphadenopathy', 'Incomplete KD: fever + <4 criteria but echo shows coronary abnormalities']
    },
    treatment: {
      medications: ['IVIG 2 g/kg IV infusion over 10-12 hours (within 10 days of fever onset)', 'High-dose aspirin 80-100 mg/kg/day divided QID until fever resolves', 'Low-dose aspirin 3-5 mg/kg/day continued for 6-8 weeks', 'Corticosteroids if IVIG-resistant', 'Infliximab for refractory cases'],
      procedures: ['Cardiac monitoring', 'Repeat echocardiogram at 2 weeks and 6-8 weeks', 'Coronary angiography if large aneurysms', 'Long-term cardiology follow-up if coronary involvement'],
      lifestyle: ['Avoid live vaccines for 11 months after IVIG', 'Regular cardiology follow-up', 'Activity restrictions if coronary aneurysms', 'Good hydration during acute phase']
    },
    emergencySigns: ['Persistent fever despite IVIG', 'Chest pain or dyspnea', 'Altered mental status', 'Signs of heart failure (tachycardia, gallop, hepatomegaly)', 'Severe irritability', 'Shock'],
    patientExplanation: 'Kawasaki disease is an illness where blood vessels throughout the body become inflamed, especially the arteries around the heart. We don\'t know what causes it, but it\'s not contagious. The main concern is that inflammation can damage the coronary arteries, creating weak spots (aneurysms) that could affect heart function. That\'s why it\'s so important to diagnose and treat it quickly—within the first 10 days of fever. Treatment with IVIG (antibodies given through an IV) and aspirin dramatically reduces the risk of heart damage from 25% to less than 5%. Most children recover completely with no lasting heart problems if treated promptly. Your child will need echocardiograms to monitor their heart for several weeks.',
    patientExplanationEs: 'La enfermedad de Kawasaki es una condición donde los vasos sanguíneos en todo el cuerpo se inflaman, especialmente las arterias alrededor del corazón. No sabemos qué la causa, pero no es contagiosa. La preocupación principal es que la inflamación puede dañar las arterias coronarias, creando puntos débiles (aneurismas) que podrían afectar la función cardíaca. Por eso es tan importante diagnosticarla y tratarla rápidamente—dentro de los primeros 10 días de fiebre. El tratamiento con IVIG (anticuerpos administrados por IV) y aspirina reduce dramáticamente el riesgo de daño cardíaco de 25% a menos de 5%. La mayoría de los niños se recuperan completamente sin problemas cardíacos duraderos si se tratan prontamente. Su hijo necesitará ecocardiogramas para monitorear su corazón durante varias semanas.'
  },

  'febrile-seizures': {
    id: 'febrile-seizures',
    name: 'Febrile Seizures',
    nameEs: 'Convulsiones Febriles',
    category: 'neurological',
    icd11: '8A61.0',
    description: 'Seizures associated with fever in children 6 months to 5 years without CNS infection, metabolic abnormality, or history of afebrile seizures. Most common pediatric seizure disorder.',
    descriptionEs: 'Convulsiones asociadas con fiebre en niños de 6 meses a 5 años sin infección del SNC, anomalía metabólica o historia de convulsiones afebriles. Trastorno convulsivo pediátrico más común.',
    riskFactors: [
      'Age 6 months to 5 years',
      'Family history of febrile seizures (20-30%)',
      'Fever >38°C (100.4°F)',
      'Rapid temperature rise',
      'Viral infection (HHV-6, influenza)',
      'Recent immunization (MMR, DTaP)',
      'Daycare attendance'
    ],
    pathophysiology: 'Developing brain has lower seizure threshold; fever (especially rapid rise) temporarily destabilizes neuronal membranes. Genetic predisposition involves sodium and GABA receptor genes. Not caused by height of fever but by rate of temperature change.',
    pathophysiologyEs: 'El cerebro en desarrollo tiene umbral convulsivo más bajo; la fiebre (especialmente aumento rápido) desestabiliza temporalmente las membranas neuronales. Predisposición genética involucra genes de receptores de sodio y GABA. No causada por altura de fiebre sino por tasa de cambio de temperatura.',
    symptoms: ['Generalized tonic-clonic seizure', 'Loss of consciousness', 'Rhythmic jerking of extremities', 'Eyes rolling back', 'Postictal drowsiness', 'Fever >38°C', 'Seizure duration <15 minutes (simple)', 'Multiple seizures in 24h (complex)'],
    diagnostics: {
      tests: ['Clinical diagnosis after excluding other causes', 'Blood glucose (rule out hypoglycemia)', 'Electrolytes if prolonged seizure or concerning history', 'Blood culture if toxic-appearing', 'No routine labs needed for simple febrile seizure'],
      imaging: ['CT/MRI not routinely indicated', 'Neuroimaging if focal neurological deficits persist', 'Consider if signs of increased ICP or trauma'],
      criteria: ['Simple: age 6mo-5y, fever present, generalized, <15 min, single in 24h, no neurological deficits', 'Complex: focal features, >15 min, multiple in 24h, or postictal deficits', 'LP indicated if <12 months or signs of meningitis']
    },
    treatment: {
      medications: ['Antipyretics (acetaminophen 15 mg/kg or ibuprofen 10 mg/kg) for comfort', 'Treat underlying infection if bacterial', 'Benzodiazepines (rectal diazepam 0.5 mg/kg) for prolonged seizure >5 min', 'Daily prophylaxis NOT recommended for simple febrile seizures'],
      procedures: ['Airway positioning during seizure', 'Protect from injury (do not restrain)', 'Recovery position after seizure', 'Observation until fully alert', 'LP if signs of meningitis or <12 months'],
      lifestyle: ['Parent education and reassurance', 'Fever management plan', 'Safety during future febrile illnesses', 'Swimming supervision if history of febrile seizures']
    },
    emergencySigns: ['Seizure lasting >5 minutes', 'Multiple seizures without regaining consciousness', 'Difficulty breathing', 'Persistent altered mental status after seizure', 'Stiff neck or bulging fontanelle', 'Focal neurological deficits', 'Age <6 months or >5 years with febrile seizure'],
    patientExplanation: 'A febrile seizure is a convulsion triggered by fever, usually when temperature rises quickly. They look terrifying but are generally harmless and don\'t cause brain damage. About 1 in 25 children will have a febrile seizure before age 5. The immature brain is simply more sensitive to fever. Most febrile seizures are "simple"—they last less than 15 minutes, involve the whole body, and don\'t happen again that day. If your child has one, stay calm, place them on their side, don\'t put anything in their mouth, and time the seizure. Most stop on their own in 1-2 minutes. Having a febrile seizure doesn\'t mean your child has epilepsy—only 2-4% will develop epilepsy later. About 1 in 3 children who have one febrile seizure will have another with a future fever.',
    patientExplanationEs: 'Una convulsión febril es una convulsión desencadenada por fiebre, usualmente cuando la temperatura sube rápidamente. Se ven aterradoras pero generalmente son inofensivas y no causan daño cerebral. Aproximadamente 1 de cada 25 niños tendrá una convulsión febril antes de los 5 años. El cerebro inmaduro simplemente es más sensible a la fiebre. La mayoría de las convulsiones febriles son "simples"—duran menos de 15 minutos, involucran todo el cuerpo, y no ocurren nuevamente ese día. Si su hijo tiene una, mantenga la calma, colóquelo de lado, no ponga nada en su boca, y mida el tiempo de la convulsión. La mayoría se detienen solas en 1-2 minutos. Tener una convulsión febril no significa que su hijo tiene epilepsia—solo 2-4% desarrollarán epilepsia después. Aproximadamente 1 de cada 3 niños que tienen una convulsión febril tendrán otra con una fiebre futura.'
  },

  'pyloric-stenosis': {
    id: 'pyloric-stenosis',
    name: 'Pyloric Stenosis',
    nameEs: 'Estenosis Pilórica',
    category: 'gastrointestinal',
    icd11: 'DA94.0',
    description: 'Hypertrophy of pyloric muscle causing gastric outlet obstruction. Classic presentation is non-bilious projectile vomiting in infant 3-5 weeks old.',
    descriptionEs: 'Hipertrofia del músculo pilórico causando obstrucción de salida gástrica. Presentación clásica es vómito proyectil no bilioso en bebé de 3-5 semanas de edad.',
    riskFactors: [
      'Male sex (4:1 ratio)',
      'First-born child',
      'Caucasian ethnicity',
      'Family history (10% if parent affected)',
      'Maternal erythromycin use',
      'Infant erythromycin exposure',
      'Bottle-feeding',
      'Age 3-5 weeks'
    ],
    pathophysiology: 'Progressive hypertrophy and hyperplasia of pyloric smooth muscle (especially circular layer) causes narrowing of pyloric channel. Gastric outlet obstruction leads to progressive vomiting and dehydration. Chronic vomiting causes hypochloremic hypokalemic metabolic alkalosis.',
    pathophysiologyEs: 'Hipertrofia progresiva e hiperplasia del músculo liso pilórico (especialmente capa circular) causa estrechamiento del canal pilórico. Obstrucción de salida gástrica provoca vómitos progresivos y deshidratación. Vómito crónico causa alcalosis metabólica hipoclorémica hipopotasémica.',
    symptoms: ['Non-bilious projectile vomiting (after feeds)', 'Vomiting progressive in frequency/intensity', 'Hungry after vomiting (eager to refeed)', 'Weight loss or failure to gain weight', 'Dehydration', 'Visible gastric peristaltic waves (left to right)', 'Palpable "olive" mass in RUQ', 'Decreased stools', 'Irritability'],
    diagnostics: {
      tests: ['Electrolytes (hypochloremic hypokalemic metabolic alkalosis)', 'BMP showing elevated HCO3, low Cl, low K', 'Elevated indirect bilirubin (mild)', 'Clinical exam (palpable olive mass in 60-80%)'],
      imaging: ['Abdominal ultrasound (first-line): pyloric muscle thickness >3-4 mm, length >14-16 mm, diameter >13 mm', 'Upper GI series (if US inconclusive): "string sign" or "shoulder sign"'],
      criteria: ['Clinical triad: non-bilious projectile vomiting + palpable olive + visible peristalsis', 'US criteria: muscle thickness >3 mm, length >16 mm']
    },
    treatment: {
      medications: ['IV fluid resuscitation (NS or LR bolus)', 'Electrolyte repletion (correct alkalosis and hypokalemia before surgery)', 'Maintenance IV fluids', 'No role for medical management—surgery is definitive'],
      procedures: ['Pyloromyotomy (Ramstedt procedure)—surgical division of hypertrophied muscle', 'Laparoscopic approach preferred', 'NPO before surgery', 'Gradual feeding advancement post-op (start 4-6h after surgery)'],
      lifestyle: ['Post-op: small frequent feeds, gradually increase volume', 'Expect some vomiting first 24-48h post-op (normal)', 'Full feeds usually by 24-48h', 'Complete recovery expected']
    },
    emergencySigns: ['Severe dehydration (sunken fontanelle, no tears, dry mucosa)', 'Lethargy or decreased responsiveness', 'No urine output >8 hours', 'Bilious vomiting (suggests malrotation, not pyloric stenosis)', 'Bloody stools', 'Severe electrolyte abnormalities'],
    patientExplanation: 'Pyloric stenosis happens when the muscle at the bottom of the stomach (the pylorus) becomes too thick, blocking food from leaving the stomach. This causes your baby to vomit forcefully after feeding—the vomit may shoot across the room (projectile). It typically starts around 3-5 weeks of age. Your baby is hungry and wants to eat again right after vomiting because the food never made it to the intestines. The good news is this is completely curable with a simple surgery called pyloromyotomy. The surgeon makes a small cut in the thickened muscle to open the channel. Most babies can start eating again within hours after surgery and go home in 1-2 days. This is a one-time fix—once corrected, it doesn\'t come back.',
    patientExplanationEs: 'La estenosis pilórica ocurre cuando el músculo en la parte inferior del estómago (el píloro) se vuelve demasiado grueso, bloqueando la salida de alimentos del estómago. Esto hace que su bebé vomite con fuerza después de comer—el vómito puede dispararse a través del cuarto (proyectil). Típicamente comienza alrededor de las 3-5 semanas de edad. Su bebé tiene hambre y quiere comer nuevamente justo después de vomitar porque la comida nunca llegó a los intestinos. La buena noticia es que esto es completamente curable con una cirugía simple llamada piloromiotomía. El cirujano hace un pequeño corte en el músculo engrosado para abrir el canal. La mayoría de los bebés pueden comenzar a comer nuevamente en horas después de la cirugía e irse a casa en 1-2 días. Esta es una solución única—una vez corregida, no regresa.'
  },

  'intussusception': {
    id: 'intussusception',
    name: 'Intussusception',
    nameEs: 'Invaginación Intestinal',
    category: 'gastrointestinal',
    icd11: 'DB31',
    description: 'Telescoping of one bowel segment into adjacent segment, causing intestinal obstruction and vascular compromise. Surgical emergency. Most common cause of bowel obstruction in children 6-36 months.',
    descriptionEs: 'Telescopaje de un segmento intestinal dentro de segmento adyacente, causando obstrucción intestinal y compromiso vascular. Emergencia quirúrgica. Causa más común de obstrucción intestinal en niños de 6-36 meses.',
    riskFactors: [
      'Age 6-36 months (peak 5-9 months)',
      'Male sex (3:2 ratio)',
      'Recent viral illness',
      'Meckel\'s diverticulum',
      'Intestinal polyps',
      'Henoch-Schönlein purpura',
      'Cystic fibrosis',
      'Rotavirus vaccine (slightly increased risk first week)'
    ],
    pathophysiology: 'Proximal bowel segment (intussusceptum) telescopes into distal segment (intussuscipiens), most commonly ileocolic (90%). Lymphoid hyperplasia from viral infection acts as lead point. Mesenteric compression causes venous obstruction, edema, ischemia, and potential necrosis/perforation if untreated.',
    pathophysiologyEs: 'Segmento intestinal proximal (intususcepción) se telescopa en segmento distal (intususcipiente), más comúnmente ileocólico (90%). Hiperplasia linfoide por infección viral actúa como punto de origen. Compresión mesentérica causa obstrucción venosa, edema, isquemia y necrosis/perforación potencial si no se trata.',
    symptoms: ['Sudden onset colicky abdominal pain (intermittent, severe)', 'Inconsolable crying, drawing knees to chest', 'Vomiting (may become bilious)', '"Currant jelly" stools (blood and mucus)', 'Palpable sausage-shaped mass (RUQ)', 'Lethargy between pain episodes (concerning sign)', 'Abdominal distension'],
    diagnostics: {
      tests: ['Clinical suspicion from triad: colicky pain + vomiting + currant jelly stools', 'Only 20% have classic triad at presentation', 'Stool guaiac (may be positive)', 'CBC (leukocytosis if necrosis)'],
      imaging: ['Abdominal ultrasound (first-line, 98% sensitive): "target sign" or "doughnut sign" on transverse, "pseudo-kidney sign" on longitudinal', 'Abdominal X-ray: nonspecific (absence of gas in RLQ, soft tissue mass)', 'Contrast enema (diagnostic and therapeutic)'],
      criteria: ['US findings: intussusception if bowel-within-bowel seen, outer diameter >3 cm, length >3.5 cm', 'Clinical diagnosis supported by imaging']
    },
    treatment: {
      medications: ['IV fluid resuscitation (NS bolus 20 mL/kg)', 'NPO status', 'NG tube decompression if significant vomiting', 'IV antibiotics if signs of perforation/peritonitis', 'Analgesia (IV morphine)'],
      procedures: ['Air or saline enema reduction (first-line if no peritonitis, 80-90% success)', 'Fluoroscopy or ultrasound-guided reduction', 'Surgical reduction if enema fails or contraindications', 'Bowel resection if necrotic segment', 'Observation 24h after reduction (10% recurrence rate)'],
      lifestyle: ['NPO until reduction successful', 'Gradual feeding advancement after reduction', 'Observation for recurrence symptoms', 'No specific long-term restrictions']
    },
    emergencySigns: ['Signs of peritonitis (rigid abdomen, guarding)', 'Hemodynamic instability or shock', 'Altered mental status or lethargy', 'Bloody stools', 'Bilious vomiting', 'Prolonged symptoms >24 hours (increased necrosis risk)', 'Failed enema reduction'],
    patientExplanation: 'Intussusception is when part of the intestine slides into the next section, like a telescope collapsing. This blocks the intestine and cuts off blood supply to that area. It\'s the most common cause of bowel obstruction in babies and toddlers. The classic signs are sudden severe belly pain that comes and goes (your baby may seem fine between episodes), vomiting, and bloody mucus in the stool that looks like currant jelly. Many babies become very sleepy between pain episodes—this is actually a worrying sign. The good news is that if caught early, doctors can usually fix it without surgery using an air or water enema to push the bowel back into place (like un-telescoping). This works 80-90% of the time. If it doesn\'t work, surgery is needed. The key is getting to the hospital quickly—the sooner it\'s treated, the better the outcome.',
    patientExplanationEs: 'La invaginación intestinal es cuando parte del intestino se desliza dentro de la siguiente sección, como un telescopio colapsándose. Esto bloquea el intestino y corta el suministro de sangre a esa área. Es la causa más común de obstrucción intestinal en bebés y niños pequeños. Los signos clásicos son dolor abdominal severo repentino que va y viene (su bebé puede parecer bien entre episodios), vómito, y moco sanguinolento en las heces que parece jalea de grosellas. Muchos bebés se vuelven muy somnolientos entre episodios de dolor—esto en realidad es una señal preocupante. La buena noticia es que si se detecta temprano, los médicos usualmente pueden arreglarlo sin cirugía usando un enema de aire o agua para empujar el intestino de vuelta a su lugar (como des-telescopiar). Esto funciona 80-90% del tiempo. Si no funciona, se necesita cirugía. La clave es llegar al hospital rápidamente—entre más pronto se trate, mejor el resultado.'
  }

};

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/**
 * Search pediatric conditions by query string
 * Searches across name, description, symptoms, and risk factors
 */
export function searchPedsConditions(query: string): PedsConditionEntry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(PEDS_CONDITIONS).filter(condition =>
    condition.name.toLowerCase().includes(lowerQuery) ||
    condition.nameEs.toLowerCase().includes(lowerQuery) ||
    condition.description.toLowerCase().includes(lowerQuery) ||
    condition.symptoms.some(s => s.toLowerCase().includes(lowerQuery)) ||
    condition.riskFactors.some(rf => rf.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get condition by ID
 */
export function getPedsConditionById(id: string): PedsConditionEntry | undefined {
  return PEDS_CONDITIONS[id];
}

/**
 * Get all conditions by category
 */
export function getPedsConditionsByCategory(category: PedsCategory): PedsConditionEntry[] {
  return Object.values(PEDS_CONDITIONS).filter(c => c.category === category);
}

/**
 * Get all condition IDs
 */
export function getAllPedsConditionIds(): string[] {
  return Object.keys(PEDS_CONDITIONS);
}
