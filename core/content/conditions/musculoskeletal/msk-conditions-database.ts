/**
 * Musculoskeletal Conditions Database
 *
 * Comprehensive reference of musculoskeletal conditions with
 * bilingual clinical summaries and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MSKCategory =
  | 'degenerative'
  | 'metabolic'
  | 'spine'
  | 'shoulder'
  | 'nerve-compression'
  | 'chronic-pain';

export interface MSKConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: MSKCategory;
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

export const MSK_CONDITIONS: Record<string, MSKConditionEntry> = {

  'osteoarthritis': {
    id: 'osteoarthritis',
    name: 'Osteoarthritis',
    nameEs: 'Osteoartritis',
    category: 'degenerative',
    icd11: 'FA00',
    description: 'Progressive degenerative joint disease characterized by cartilage breakdown, subchondral bone changes, and inflammation. Most common form of arthritis, typically affecting weight-bearing joints and hands.',
    descriptionEs: 'Enfermedad articular degenerativa progresiva caracterizada por degradación del cartílago, cambios óseos subcondrales e inflamación. La forma más común de artritis, que típicamente afecta las articulaciones de carga y las manos.',
    riskFactors: ['Age >50', 'Obesity', 'Joint injury or overuse', 'Female sex', 'Genetics', 'Repetitive occupational stress', 'Malalignment'],
    pathophysiology: 'Mechanical stress and biochemical changes lead to cartilage degradation. Chondrocytes release inflammatory mediators and matrix metalloproteinases, causing extracellular matrix breakdown. Subchondral bone responds with sclerosis and osteophyte formation.',
    pathophysiologyEs: 'El estrés mecánico y los cambios bioquímicos conducen a la degradación del cartílago. Los condrocitos liberan mediadores inflamatorios y metaloproteinasas de matriz, causando degradación de la matriz extracelular. El hueso subcondral responde con esclerosis y formación de osteofitos.',
    symptoms: ['Joint pain worsened by activity, improved with rest', 'Morning stiffness <30 minutes', 'Crepitus with movement', 'Decreased range of motion', 'Joint swelling', 'Bony enlargement (Heberden and Bouchard nodes in hands)'],
    diagnostics: {
      tests: ['Clinical diagnosis primarily', 'ESR and CRP (normal or mildly elevated)', 'Synovial fluid analysis (non-inflammatory)'],
      imaging: ['X-ray (joint space narrowing, osteophytes, subchondral sclerosis, cysts)', 'MRI (cartilage loss, bone marrow edema if X-ray equivocal)'],
      criteria: ['ACR clinical criteria: age >50, morning stiffness <30 min, crepitus, bony tenderness, bony enlargement, no palpable warmth'],
    },
    treatment: {
      medications: ['Acetaminophen (first-line for mild pain)', 'NSAIDs (ibuprofen, naproxen)', 'Topical NSAIDs (diclofenac gel)', 'Intra-articular corticosteroid injections', 'Duloxetine (for refractory pain)'],
      procedures: ['Physical therapy', 'Intra-articular hyaluronic acid injections', 'Joint replacement (knee, hip arthroplasty)', 'Arthroscopy (limited role)'],
      lifestyle: ['Weight loss (reduces joint loading)', 'Low-impact exercise (swimming, cycling)', 'Assistive devices (cane, braces)', 'Heat/cold therapy'],
    },
    emergencySigns: ['Sudden severe joint pain with fever (rule out septic arthritis)', 'Inability to bear weight', 'Joint deformity after trauma', 'Signs of neurovascular compromise'],
    patientExplanation: 'Osteoarthritis is wear-and-tear arthritis where the cushioning cartilage in your joints gradually breaks down over time. Think of it like brake pads wearing down—the protective layer gets thinner, causing bone-on-bone friction. This leads to pain, stiffness, and swelling, especially after activity. While there is no cure, the good news is that weight loss, exercise, and pain medications can significantly improve symptoms. Staying active with low-impact exercises like swimming actually helps by strengthening the muscles around the joint.',
    patientExplanationEs: 'La osteoartritis es artritis por desgaste donde el cartílago amortiguador en sus articulaciones se degrada gradualmente con el tiempo. Piense en ello como pastillas de freno desgastándose—la capa protectora se adelgaza, causando fricción hueso con hueso. Esto lleva a dolor, rigidez e hinchazón, especialmente después de actividad. Aunque no hay cura, la buena noticia es que la pérdida de peso, el ejercicio y los medicamentos para el dolor pueden mejorar significativamente los síntomas. Mantenerse activo con ejercicios de bajo impacto como nadar realmente ayuda al fortalecer los músculos alrededor de la articulación.',
  },

  'osteoporosis': {
    id: 'osteoporosis',
    name: 'Osteoporosis',
    nameEs: 'Osteoporosis',
    category: 'metabolic',
    icd11: 'FB83',
    description: 'Systemic skeletal disease characterized by low bone mass and microarchitectural deterioration, increasing fracture risk. Silent disease until fracture occurs.',
    descriptionEs: 'Enfermedad esquelética sistémica caracterizada por baja masa ósea y deterioro microarquitectónico, aumentando el riesgo de fractura. Enfermedad silenciosa hasta que ocurre una fractura.',
    riskFactors: ['Postmenopausal women', 'Age >65', 'Low BMI', 'Smoking', 'Excess alcohol', 'Corticosteroid use', 'Vitamin D deficiency', 'Family history', 'Early menopause', 'Sedentary lifestyle'],
    pathophysiology: 'Imbalance between osteoblast-mediated bone formation and osteoclast-mediated bone resorption, favoring resorption. Estrogen deficiency in menopause accelerates bone loss. Results in decreased bone mineral density and trabecular microarchitecture disruption.',
    pathophysiologyEs: 'Desequilibrio entre la formación ósea mediada por osteoblastos y la resorción ósea mediada por osteoclastos, favoreciendo la resorción. La deficiencia de estrógeno en la menopausia acelera la pérdida ósea. Resulta en disminución de la densidad mineral ósea y disrupción de la microarquitectura trabecular.',
    symptoms: ['Often asymptomatic until fracture', 'Low-trauma fractures (hip, spine, wrist)', 'Loss of height', 'Kyphosis (dowager\'s hump)', 'Chronic back pain from vertebral compression fractures'],
    diagnostics: {
      tests: ['Serum calcium, phosphate, alkaline phosphatase', 'Vitamin D (25-OH-D)', 'TSH', 'CBC', 'FRAX score (10-year fracture risk)'],
      imaging: ['DEXA scan (T-score ≤-2.5 = osteoporosis, -1.0 to -2.5 = osteopenia)', 'Lateral spine X-ray (vertebral fractures)', 'VFA (vertebral fracture assessment)'],
      criteria: ['WHO criteria: T-score ≤-2.5 on DEXA, or low-trauma fracture with T-score ≤-1.0'],
    },
    treatment: {
      medications: ['Bisphosphonates (alendronate, risedronate—first-line)', 'Denosumab (if bisphosphonates not tolerated)', 'Teriparatide (anabolic for severe osteoporosis)', 'Raloxifene (postmenopausal women)', 'Calcium (1200 mg/day) and vitamin D (800-1000 IU/day)'],
      procedures: ['Vertebroplasty or kyphoplasty for painful vertebral fractures', 'Hip/wrist fracture surgical repair'],
      lifestyle: ['Weight-bearing exercise (walking, resistance training)', 'Fall prevention (home safety assessment)', 'Balance training (tai chi)', 'Smoking cessation', 'Limit alcohol'],
    },
    emergencySigns: ['Severe back pain after minor trauma (vertebral fracture)', 'Inability to stand after fall (hip fracture)', 'Sudden height loss', 'Neurological symptoms with back pain (cord compression)'],
    patientExplanation: 'Osteoporosis means your bones have become weak and brittle, like chalk instead of sturdy wood. Bones constantly rebuild themselves, but with osteoporosis, old bone breaks down faster than new bone forms. The danger is that bones can break from minor falls or even daily activities. The good news is that medications combined with calcium, vitamin D, and weight-bearing exercise can strengthen your bones and dramatically reduce fracture risk. Most importantly, taking steps to prevent falls—like removing tripping hazards at home—is crucial.',
    patientExplanationEs: 'La osteoporosis significa que sus huesos se han vuelto débiles y frágiles, como tiza en lugar de madera resistente. Los huesos se reconstruyen constantemente, pero con osteoporosis, el hueso viejo se degrada más rápido de lo que se forma hueso nuevo. El peligro es que los huesos pueden romperse por caídas menores o incluso actividades diarias. La buena noticia es que los medicamentos combinados con calcio, vitamina D y ejercicio de carga pueden fortalecer sus huesos y reducir dramáticamente el riesgo de fractura. Lo más importante es tomar medidas para prevenir caídas—como eliminar peligros de tropiezo en casa—es crucial.',
  },

  'herniated-disc-lumbar': {
    id: 'herniated-disc-lumbar',
    name: 'Herniated Disc (Lumbar)',
    nameEs: 'Hernia de Disco (Lumbar)',
    category: 'spine',
    icd11: 'FA92.0',
    description: 'Protrusion or extrusion of nucleus pulposus through the annulus fibrosus, often compressing nerve roots. Most common at L4-L5 and L5-S1 levels.',
    descriptionEs: 'Protrusión o extrusión del núcleo pulposo a través del anillo fibroso, a menudo comprimiendo las raíces nerviosas. Más común en los niveles L4-L5 y L5-S1.',
    riskFactors: ['Age 30-50', 'Obesity', 'Repetitive lifting or twisting', 'Prolonged sitting', 'Smoking', 'Sedentary lifestyle', 'Occupational heavy lifting'],
    pathophysiology: 'Degenerative changes weaken the annulus fibrosus, allowing nucleus pulposus herniation posterolaterally. Mechanical compression of nerve root causes radicular pain. Inflammatory mediators from disc material cause chemical radiculitis and nerve sensitization.',
    pathophysiologyEs: 'Cambios degenerativos debilitan el anillo fibroso, permitiendo la herniación del núcleo pulposo posterolateralmente. La compresión mecánica de la raíz nerviosa causa dolor radicular. Mediadores inflamatorios del material del disco causan radiculitis química y sensibilización nerviosa.',
    symptoms: ['Low back pain', 'Radicular leg pain (sciatica) worse than back pain', 'Numbness or tingling in dermatomal distribution', 'Weakness in affected myotome', 'Pain worsened by sitting, bending, Valsalva', 'Positive straight leg raise test'],
    diagnostics: {
      tests: ['Clinical examination (straight leg raise, neurological exam)', 'EMG/NCS (if diagnosis unclear or severe weakness)'],
      imaging: ['MRI lumbar spine (gold standard—disc herniation, nerve root compression)', 'CT myelography (if MRI contraindicated)', 'X-ray (rules out fracture, alignment issues)'],
      criteria: ['Clinical diagnosis: radicular pain in dermatomal pattern with positive provocative tests, confirmed by MRI'],
    },
    treatment: {
      medications: ['NSAIDs (ibuprofen, naproxen)', 'Muscle relaxants (cyclobenzaprine)', 'Neuropathic pain agents (gabapentin, pregabalin)', 'Oral corticosteroids (short course)', 'Epidural steroid injection'],
      procedures: ['Physical therapy', 'Microdiscectomy (surgery for refractory cases or cauda equina)', 'Laminectomy'],
      lifestyle: ['Activity modification (avoid bending, lifting)', 'Core strengthening exercises', 'Proper lifting mechanics', 'Weight loss', 'Short-term rest followed by gradual mobilization'],
    },
    emergencySigns: ['Cauda equina syndrome (bowel/bladder dysfunction, saddle anesthesia, bilateral leg weakness—surgical emergency)', 'Progressive motor weakness', 'Foot drop', 'Severe unrelenting pain'],
    patientExplanation: 'A herniated disc means the soft cushion between your spine bones has bulged out and is pressing on a nerve. Think of it like jelly squeezing out of a donut—the jelly (nucleus pulposus) pushes through the outer ring and irritates nearby nerves, causing pain down your leg. Most herniated discs heal on their own within 6-12 weeks with conservative treatment like physical therapy and medications. Surgery is only needed if you develop serious nerve problems or pain that does not improve. Staying active with gentle exercises actually helps recovery.',
    patientExplanationEs: 'Una hernia de disco significa que el cojín suave entre los huesos de su columna se ha abultado y está presionando un nervio. Piense en ello como gelatina saliendo de una dona—la gelatina (núcleo pulposo) empuja a través del anillo exterior e irrita los nervios cercanos, causando dolor por su pierna. La mayoría de las hernias de disco sanan por sí solas dentro de 6-12 semanas con tratamiento conservador como fisioterapia y medicamentos. La cirugía solo es necesaria si desarrolla problemas nerviosos graves o dolor que no mejora. Mantenerse activo con ejercicios suaves realmente ayuda a la recuperación.',
  },

  'rotator-cuff-tear': {
    id: 'rotator-cuff-tear',
    name: 'Rotator Cuff Tear',
    nameEs: 'Desgarro del Manguito Rotador',
    category: 'shoulder',
    icd11: 'FB01.2',
    description: 'Partial or complete tear of one or more rotator cuff tendons (supraspinatus most common), causing shoulder pain and weakness. Can be acute traumatic or chronic degenerative.',
    descriptionEs: 'Desgarro parcial o completo de uno o más tendones del manguito rotador (supraespinoso más común), causando dolor y debilidad en el hombro. Puede ser traumático agudo o degenerativo crónico.',
    riskFactors: ['Age >40', 'Repetitive overhead activities', 'Heavy lifting', 'Shoulder impingement', 'Smoking', 'Poor posture', 'Previous shoulder injury'],
    pathophysiology: 'Degenerative tendinopathy from repetitive microtrauma, impingement, and decreased vascularity with aging leads to tendon weakening. Acute tears occur with sudden force or trauma. Full-thickness tears allow communication between glenohumeral joint and subacromial bursa.',
    pathophysiologyEs: 'La tendinopatía degenerativa por microtrauma repetitivo, pinzamiento y disminución de la vascularidad con la edad conduce al debilitamiento del tendón. Los desgarros agudos ocurren con fuerza súbita o trauma. Los desgarros de espesor completo permiten comunicación entre la articulación glenohumeral y la bursa subacromial.',
    symptoms: ['Shoulder pain, worse at night and lying on affected side', 'Weakness with overhead activities', 'Painful arc (60-120 degrees abduction)', 'Positive drop arm test or empty can test', 'Atrophy of supraspinatus/infraspinatus muscles (chronic tears)', 'Catching or popping sensations'],
    diagnostics: {
      tests: ['Physical examination (painful arc, drop arm test, external rotation lag sign)', 'Neer and Hawkins impingement tests'],
      imaging: ['MRI shoulder (gold standard—tear size, retraction, muscle atrophy)', 'Ultrasound (cost-effective alternative)', 'X-ray (acromion morphology, calcifications, arthritic changes)'],
      criteria: ['Clinical examination findings confirmed by MRI or ultrasound showing partial or full-thickness tear'],
    },
    treatment: {
      medications: ['NSAIDs (ibuprofen, naproxen)', 'Subacromial corticosteroid injection'],
      procedures: ['Physical therapy (stretching and strengthening)', 'Arthroscopic rotator cuff repair (full-thickness tears in active patients)', 'Open repair (large, retracted tears)', 'Reverse total shoulder arthroplasty (irreparable tears with arthropathy)'],
      lifestyle: ['Activity modification (avoid overhead reaching)', 'Ice therapy', 'Gradual return to activities', 'Ergonomic adjustments'],
    },
    emergencySigns: ['Severe weakness or inability to lift arm after acute trauma', 'Signs of infection after injection or surgery', 'Neurovascular compromise', 'Complete loss of shoulder function'],
    patientExplanation: 'The rotator cuff is a group of four muscles and tendons that stabilize your shoulder and allow you to lift and rotate your arm. A tear means one or more of these tendons has ripped, either from overuse over time or from sudden injury. Small tears often heal with physical therapy and exercises to strengthen the surrounding muscles. Larger tears, especially in active people, may require surgery to reattach the tendon. Even after surgery, physical therapy is crucial for recovery. Most people regain good function, though it can take 4-6 months.',
    patientExplanationEs: 'El manguito rotador es un grupo de cuatro músculos y tendones que estabilizan su hombro y le permiten levantar y rotar el brazo. Un desgarro significa que uno o más de estos tendones se ha roto, ya sea por uso excesivo con el tiempo o por lesión súbita. Los desgarros pequeños a menudo sanan con fisioterapia y ejercicios para fortalecer los músculos circundantes. Los desgarros más grandes, especialmente en personas activas, pueden requerir cirugía para volver a unir el tendón. Incluso después de la cirugía, la fisioterapia es crucial para la recuperación. La mayoría de las personas recuperan buena función, aunque puede tomar 4-6 meses.',
  },

  'carpal-tunnel-syndrome': {
    id: 'carpal-tunnel-syndrome',
    name: 'Carpal Tunnel Syndrome',
    nameEs: 'Síndrome del Túnel Carpiano',
    category: 'nerve-compression',
    icd11: '8C10.0',
    description: 'Compression of the median nerve as it passes through the carpal tunnel at the wrist, causing hand numbness, tingling, and weakness. Most common entrapment neuropathy.',
    descriptionEs: 'Compresión del nervio mediano al pasar por el túnel carpiano en la muñeca, causando entumecimiento, hormigueo y debilidad en la mano. La neuropatía por atrapamiento más común.',
    riskFactors: ['Female sex (3x more common)', 'Age 30-60', 'Repetitive hand use', 'Pregnancy', 'Obesity', 'Diabetes', 'Hypothyroidism', 'Rheumatoid arthritis', 'Wrist fracture or trauma'],
    pathophysiology: 'Increased pressure within the carpal tunnel compresses the median nerve against the transverse carpal ligament. Nerve compression causes ischemia, demyelination, and axonal degeneration. Chronic compression leads to irreversible nerve damage and thenar muscle atrophy.',
    pathophysiologyEs: 'El aumento de presión dentro del túnel carpiano comprime el nervio mediano contra el ligamento carpiano transverso. La compresión nerviosa causa isquemia, desmielinización y degeneración axonal. La compresión crónica conduce a daño nervioso irreversible y atrofia muscular tenar.',
    symptoms: ['Numbness and tingling in thumb, index, middle, and radial half of ring finger', 'Symptoms worse at night or with hand use', 'Hand weakness and clumsiness (dropping objects)', 'Thenar atrophy (late finding)', 'Positive Phalen and Tinel tests', 'Symptoms relieved by shaking hand ("flick sign")'],
    diagnostics: {
      tests: ['Clinical diagnosis with physical exam (Phalen, Tinel, Durkan tests)', 'Nerve conduction studies and EMG (confirms diagnosis, assesses severity)', 'Rule out cervical radiculopathy, thoracic outlet syndrome'],
      imaging: ['MRI or ultrasound (if diagnosis unclear)', 'Wrist X-ray (if trauma or arthritis suspected)'],
      criteria: ['Clinical symptoms in median nerve distribution + abnormal nerve conduction studies showing prolonged distal motor latency or sensory latency'],
    },
    treatment: {
      medications: ['NSAIDs (symptom relief)', 'Corticosteroid injection (short-term relief)', 'Vitamin B6 (limited evidence)'],
      procedures: ['Wrist splinting (neutral position, especially at night)', 'Carpal tunnel release surgery (open or endoscopic—definitive treatment)', 'Physical therapy'],
      lifestyle: ['Ergonomic keyboard and mouse setup', 'Frequent breaks from repetitive activities', 'Wrist exercises and stretches', 'Weight loss if obese'],
    },
    emergencySigns: ['Rapid progression of weakness', 'Severe thenar atrophy (urgent surgical referral)', 'Acute traumatic median nerve injury', 'Inability to oppose thumb'],
    patientExplanation: 'Carpal tunnel syndrome happens when the median nerve gets squeezed as it passes through a narrow tunnel in your wrist. This nerve controls sensation in your thumb, index, middle, and half of your ring finger. Compression causes numbness, tingling, and eventually weakness. It is often worse at night because we tend to sleep with bent wrists. Mild cases respond to wrist splints worn at night and activity modifications. Severe cases or those with muscle wasting require surgery to release the pressure—a quick outpatient procedure with excellent success rates.',
    patientExplanationEs: 'El síndrome del túnel carpiano ocurre cuando el nervio mediano se comprime al pasar por un túnel estrecho en su muñeca. Este nervio controla la sensación en su pulgar, índice, medio y mitad del dedo anular. La compresión causa entumecimiento, hormigueo y eventualmente debilidad. A menudo es peor por la noche porque tendemos a dormir con las muñecas dobladas. Los casos leves responden a férulas de muñeca usadas por la noche y modificaciones de actividad. Los casos severos o aquellos con atrofia muscular requieren cirugía para liberar la presión—un procedimiento ambulatorio rápido con excelentes tasas de éxito.',
  },

  'fibromyalgia': {
    id: 'fibromyalgia',
    name: 'Fibromyalgia',
    nameEs: 'Fibromialgia',
    category: 'chronic-pain',
    icd11: 'MG30.0',
    description: 'Chronic widespread musculoskeletal pain syndrome with heightened pain sensitivity, often accompanied by fatigue, sleep disturbances, and cognitive symptoms. Affects central pain processing.',
    descriptionEs: 'Síndrome de dolor musculoesquelético crónico generalizado con sensibilidad al dolor aumentada, a menudo acompañado de fatiga, alteraciones del sueño y síntomas cognitivos. Afecta el procesamiento central del dolor.',
    riskFactors: ['Female sex (7:1 ratio)', 'Age 30-50', 'Family history', 'Autoimmune disease (lupus, RA)', 'Physical or emotional trauma', 'Mood disorders (depression, anxiety)', 'Sleep disorders'],
    pathophysiology: 'Central sensitization with altered pain processing in the CNS. Dysregulation of neurotransmitters (decreased serotonin and norepinephrine, elevated substance P). Abnormal pain amplification in the brain and spinal cord. Not an inflammatory or autoimmune condition.',
    pathophysiologyEs: 'Sensibilización central con procesamiento alterado del dolor en el SNC. Desregulación de neurotransmisores (disminución de serotonina y norepinefrina, elevación de sustancia P). Amplificación anormal del dolor en el cerebro y médula espinal. No es una condición inflamatoria ni autoinmune.',
    symptoms: ['Chronic widespread pain (>3 months in multiple body regions)', 'Fatigue and unrefreshing sleep', 'Cognitive dysfunction ("fibro fog")', 'Tender points (historical criteria)', 'Headaches', 'Irritable bowel symptoms', 'Mood disturbances', 'Allodynia and hyperalgesia'],
    diagnostics: {
      tests: ['Clinical diagnosis (no specific lab test)', 'CBC, ESR, CRP (to rule out inflammatory conditions)', 'TSH (rule out hypothyroidism)', 'Vitamin D', 'ACR 2016 criteria: Widespread Pain Index + Symptom Severity Scale'],
      imaging: ['Generally not needed (no structural abnormality)', 'MRI or X-ray only if red flags present'],
      criteria: ['2016 ACR criteria: Widespread pain in ≥4 of 5 regions, present ≥3 months, Widespread Pain Index ≥7 and Symptom Severity Scale ≥5 (or WPI 4-6 and SSS ≥9)'],
    },
    treatment: {
      medications: ['Duloxetine or milnacipran (SNRIs—FDA approved)', 'Pregabalin or gabapentin (FDA approved)', 'Low-dose amitriptyline (for sleep)', 'Avoid opioids (not effective)', 'Avoid NSAIDs alone (limited benefit)'],
      procedures: ['Cognitive behavioral therapy (CBT)', 'Physical therapy and graded exercise', 'Acupuncture', 'Multidisciplinary pain management'],
      lifestyle: ['Aerobic exercise (most effective—swimming, walking, cycling)', 'Sleep hygiene', 'Stress reduction (mindfulness, meditation)', 'Pacing activities', 'Support groups'],
    },
    emergencySigns: ['Sudden severe weakness (rule out other cause)', 'Fever with widespread pain (rule out infection)', 'New neurological symptoms', 'Suicidal ideation'],
    patientExplanation: 'Fibromyalgia is a real condition where your nervous system amplifies pain signals, making you feel pain more intensely. Think of it like a car alarm that is too sensitive—it goes off from minor triggers. Your pain is real, but tests come back normal because there is no tissue damage or inflammation. The condition affects pain processing in your brain and spinal cord. While there is no cure, a combination of medications, exercise (even though it may seem counterintuitive), and stress management can significantly improve symptoms. Regular gentle exercise is actually one of the most effective treatments.',
    patientExplanationEs: 'La fibromialgia es una condición real donde su sistema nervioso amplifica las señales de dolor, haciéndole sentir el dolor más intensamente. Piense en ello como una alarma de auto que es demasiado sensible—se activa con desencadenantes menores. Su dolor es real, pero las pruebas salen normales porque no hay daño tisular ni inflamación. La condición afecta el procesamiento del dolor en su cerebro y médula espinal. Aunque no hay cura, una combinación de medicamentos, ejercicio (aunque pueda parecer contraintuitivo) y manejo del estrés puede mejorar significativamente los síntomas. El ejercicio suave regular es en realidad uno de los tratamientos más efectivos.',
  },

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single MSK condition by ID. */
export function getMSKConditionById(id: string): MSKConditionEntry | undefined {
  return MSK_CONDITIONS[id];
}

/** Search MSK conditions by name, category, or any text field (case-insensitive). */
export function searchMSKConditions(query: string): MSKConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(MSK_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/** Filter MSK conditions by category. */
export function getMSKByCategory(category: MSKCategory): MSKConditionEntry[] {
  return Object.values(MSK_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of MSK conditions in the database. */
export function getMSKConditionCount(): number {
  return Object.keys(MSK_CONDITIONS).length;
}

/** Get all MSK conditions with a specific risk factor (case-insensitive). */
export function getMSKByRiskFactor(riskFactor: string): MSKConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(MSK_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}
