/**
 * Biological Self - Sports Medicine Specialty Database
 * Comprehensive reference for sports injuries, prevention, and rehabilitation
 */

import type { EducationalContent } from '../../types.js';

// --- Types ---

export type SportsMedicineCategory =
  | 'overuse-injury'
  | 'acute-traumatic'
  | 'concussion'
  | 'prevention'
  | 'rehabilitation'
  | 'performance'
  | 'pediatric-sports'
  | 'return-to-play';

export interface SportsMedicineEntry {
  id: string;
  name: string;
  nameEs: string;
  category: SportsMedicineCategory;
  icd11Code?: string;
  summary: string;
  anatomy: string;
  mechanism: string;
  symptoms: string[];
  diagnosis: string;
  treatment: string;
  prevention: string;
  returnToPlay: string;
  athleteTip: string;
}

// --- Compact Helper ---

const sme = (
  id: string, name: string, nameEs: string, category: SportsMedicineCategory,
  icd11Code: string | undefined, summary: string, anatomy: string, mechanism: string,
  symptoms: string[], diagnosis: string, treatment: string, prevention: string,
  returnToPlay: string, athleteTip: string,
): SportsMedicineEntry => ({
  id, name, nameEs, category, icd11Code, summary, anatomy, mechanism,
  symptoms, diagnosis, treatment, prevention, returnToPlay, athleteTip,
});

// --- Sports Medicine Database ---

export const SPORTS_MEDICINE_ENTRIES: Record<string, SportsMedicineEntry> = {
  // --- OVERUSE INJURIES (6) ---

  'patellar-tendinopathy': sme(
    'patellar-tendinopathy', 'Patellar Tendinopathy (Jumper\'s Knee)', 'Tendinopatia rotuliana (rodilla de saltador)', 'overuse-injury',
    'FB53.0', 'Overuse injury of the patellar tendon at its insertion on the inferior pole of the patella, common in jumping sports.',
    'The patellar tendon connects the patella to the tibial tuberosity. It transmits force from the quadriceps to extend the knee.',
    'Repetitive eccentric loading during landing from jumps. Microtears exceed healing capacity, leading to tendon degeneration.',
    ['Anterior knee pain below patella', 'Pain with jumping, landing, or stairs', 'Morning stiffness that improves with activity', 'Localized tenderness at inferior patellar pole'],
    'Clinical exam with tenderness at tendon insertion. Ultrasound shows tendon thickening and hypoechogenicity. MRI for refractory cases.',
    'Eccentric loading exercises (decline squats), activity modification, patellar strap, shockwave therapy. Avoid corticosteroid injections.',
    'Gradual load progression, proper landing mechanics, quadriceps flexibility, adequate rest between training sessions.',
    'When pain-free with sport-specific activities, quadriceps strength >90% of contralateral, hop testing symmetrical. Typically 6-12 weeks.',
    'Eccentric exercises are the gold standard. Do them even if they initially increase soreness. Consistency is more important than intensity.',
  ),

  'achilles-tendinopathy-sports': sme(
    'achilles-tendinopathy-sports', 'Achilles Tendinopathy', 'Tendinopatia del tendon de Aquiles', 'overuse-injury',
    'FB53.1', 'Degenerative condition of the Achilles tendon, the most common overuse injury in recreational runners.',
    'The Achilles tendon connects the gastrocnemius-soleus complex to the calcaneus. Watershed zone 2-6cm above insertion has poorest blood supply.',
    'Overuse with repetitive loading, sudden training changes, tight calf muscles, poor footwear, training on hard surfaces.',
    ['Posterior heel pain at start of activity', 'Morning stiffness in tendon', 'Tendon thickening or nodularity', 'Pain that improves then worsens with activity'],
    'Royal London Hospital test. Ultrasound shows tendon thickening, hypoechoic areas, neovascularization. MRI for surgical planning.',
    'Alfredson eccentric protocol (180 reps/day, 12 weeks), heel lifts, activity modification. Avoid corticosteroid injections due to rupture risk.',
    'Gradual training progression (10% rule), proper footwear, calf flexibility program, avoid training on hard surfaces exclusively.',
    'When pain-free with daily activities, can perform single-leg heel raises, and gradual return to running with walk-run progression.',
    'The Alfredson eccentric protocol requires dedication. Do the exercises even if they initially increase soreness. Results come after 8-12 weeks.',
  ),

  'plantar-fasciitis-sports': sme(
    'plantar-fasciitis-sports', 'Plantar Fasciitis', 'Fascitis plantar', 'overuse-injury',
    'FB53.2', 'Degeneration of the plantar fascia at its calcaneal insertion, the most common cause of heel pain in adults.',
    'The plantar fascia is a thick fibrous band from medial calcaneal tuberosity to metatarsal heads, supporting the medial longitudinal arch.',
    'Repetitive loading with risk factors: obesity, prolonged standing, tight Achilles tendon, flat feet or high arches, sudden activity increase.',
    ['Sharp heel pain with first morning steps', 'Pain after prolonged sitting then standing', 'Tenderness at medial calcaneal tuberosity', 'Pain improves with walking then returns'],
    'Windlass test (pain with passive toe dorsiflexion). Ultrasound shows fascia thickening >4mm. X-rays may show heel spur (not causative).',
    'Stretching (calf and plantar fascia), supportive footwear, heel cups, night splint, orthotics. Corticosteroid injection only if refractory.',
    'Maintain healthy weight, supportive shoes, gradual activity progression, calf stretching routine, avoid barefoot walking on hard surfaces.',
    'When pain-free with first morning steps and can walk/run without pain. Recovery typically 6-12 months but most improve without surgery.',
    'Roll a frozen water bottle under your foot before getting out of bed. Never walk barefoot on hard surfaces during recovery.',
  ),

  'medial-tibial-stress-syndrome': sme(
    'medial-tibial-stress-syndrome', 'Medial Tibial Stress Syndrome (Shin Splints)', 'Sindrome de estres tibial medial', 'overuse-injury',
    'FB53.3', 'Exercise-induced pain along the posteromedial border of the tibia, common in runners and jumping athletes.',
    'The posteromedial tibia is the attachment site for the soleus, flexor digitorum longus, and posterior tibialis muscles.',
    'Repetitive traction forces on tibial periosteum, training errors (sudden increase in intensity/volume), biomechanical factors (overpronation).',
    ['Dull aching pain along medial tibia', 'Pain at beginning of activity that may improve then worsen', 'Tenderness over 5cm+ of tibial border', 'No focal bony tenderness'],
    'Clinical diagnosis based on history and diffuse tenderness. X-rays normal. MRI distinguishes from stress fracture (linear signal vs. diffuse edema).',
    'Relative rest, ice, NSAIDs, calf stretching, biomechanical correction (orthotics), gradual return to activity. Address training errors.',
    'Gradual training progression, proper footwear for foot type, run on softer surfaces, calf strengthening, avoid sudden mileage increases.',
    'When pain-free with walking and daily activities, can jog without pain, and no tenderness to palpation. Typically 2-6 weeks.',
    'This is a warning sign. If ignored, it can progress to a stress fracture. Reduce training load and address the underlying cause immediately.',
  ),

  'rotator-cuff-tendinopathy': sme(
    'rotator-cuff-tendinopathy', 'Rotator Cuff Tendinopathy', 'Tendinopatia del manguito rotador', 'overuse-injury',
    'FB53.4', 'Degenerative condition of the rotator cuff tendons, most commonly supraspinatus, from repetitive overhead activities.',
    'The rotator cuff consists of four muscles (supraspinatus, infraspinatus, teres minor, subscapularis) stabilizing the glenohumeral joint.',
    'Repetitive overhead activities (swimming, throwing, tennis), impingement under acromion, poor scapular mechanics, age-related degeneration.',
    ['Anterolateral shoulder pain with overhead activity', 'Night pain when lying on affected side', 'Painful arc 60-120 degrees', 'Weakness with overhead reaching'],
    'Positive Neer and Hawkins tests. X-rays show acromion morphology. Ultrasound or MRI confirms tendon degeneration and rules out tear.',
    'Activity modification, physical therapy (posterior capsule stretching, scapular stabilization, rotator cuff strengthening), subacromial injection.',
    'Proper throwing mechanics, scapular strengthening program, avoid sudden increases in overhead activity, adequate rest between sessions.',
    'When pain-free with sport-specific activities, full painless ROM, and rotator cuff strength >90% of contralateral. Typically 6-12 weeks.',
    'Strengthen your shoulder blade muscles as much as your rotator cuff. Scapular stabilization is key to preventing recurrence.',
  ),

  'iliotibial-band-syndrome': sme(
    'iliotibial-band-syndrome', 'Iliotibial Band Syndrome', 'Sindrome de la banda iliotibial', 'overuse-injury',
    'FB53.5', 'Lateral knee pain caused by friction of the IT band over the lateral femoral condyle, common in runners.',
    'The IT band is a thick fascial band running from the iliac crest to the lateral tibia. It crosses the lateral femoral epicondyle with knee flexion.',
    'Repetitive knee flexion-extension (running, cycling). Tight IT band, weak hip abductors, downhill running, increased mileage, worn shoes.',
    ['Sharp or burning lateral knee pain', 'Pain worsens at specific knee angle (usually 20-30 degrees flexion)', 'Pain with downhill running', 'Tenderness over lateral femoral condyle'],
    'Noble compression test (pain with pressure over lateral femoral condyle at 30 degrees flexion). MRI shows IT band thickening if refractory.',
    'Activity modification, IT band stretching, foam rolling, hip abductor strengthening (gluteus medius), gait analysis, orthotics if indicated.',
    'Hip strengthening program, gradual mileage increase, replace running shoes regularly, avoid excessive downhill running early in training.',
    'When pain-free with running at normal pace and distance. Address hip abductor weakness to prevent recurrence. Typically 4-8 weeks.',
    'Strengthen your hip muscles, not just your knees. Weak gluteus medius is a major contributor to IT band syndrome.',
  ),

  // --- ACUTE TRAUMATIC INJURIES (7) ---

  'acl-tear-sports': sme(
    'acl-tear-sports', 'ACL Tear', 'Desgarro del ligamento cruzado anterior', 'acute-traumatic',
    'NC94.2', 'Rupture of the anterior cruciate ligament, primary restraint to anterior tibial translation, common in pivoting sports.',
    'The ACL runs from posterolateral femoral condyle to anteromedial tibial plateau, preventing anterior translation and rotational instability.',
    'Non-contact pivot or deceleration with valgus force and rotation. More common in females (3-5x) due to anatomy and neuromuscular factors.',
    ['Audible pop at injury', 'Rapid swelling within hours (hemarthrosis)', 'Feeling of instability or "giving way"', 'Inability to continue activity'],
    'Positive Lachman (most sensitive), anterior drawer, and pivot shift tests. MRI confirms diagnosis and evaluates menisci/cartilage.',
    'Acute: RICE, early ROM. Decision: reconstruction for active patients wanting return to pivoting sports; rehabilitation-focused for others.',
    'Neuromuscular training programs, proper landing mechanics, strengthen hip/core, avoid valgus collapse during jumping/cutting.',
    'Post-reconstruction: 9-12 months with objective criteria (quad strength >90%, hop tests, functional assessment). Non-op: 3-6 months.',
    'Prehab before surgery significantly improves outcomes. Focus on regaining full ROM and quad strength before your surgery date.',
  ),

  'ankle-sprain-sports': sme(
    'ankle-sprain-sports', 'Ankle Sprain', 'Esguince de tobillo', 'acute-traumatic',
    'NC95.1', 'Ligament injury of the ankle, most commonly lateral (ATFL), graded I-III based on severity.',
    'Lateral ligaments: ATFL (most commonly injured), CFL, PTFL. Medial: deltoid ligament. Syndesmosis connects tibia and fibula.',
    'Inversion mechanism (85%) for lateral sprains. Uneven surfaces, prior sprains, poor proprioception, fatigue.',
    ['Lateral ankle pain and swelling', 'Difficulty bearing weight (grades II-III)', 'Bruising within 24-48 hours', 'Feeling of instability'],
    'Ottawa ankle rules for X-ray. Anterior drawer and talar tilt tests. MRI for persistent symptoms or suspected syndesmotic injury.',
    'Grade I: early weight bearing, brace. Grade II: walking boot 1-2 weeks. Grade III: boot 2-4 weeks. All need PT for proprioception.',
    'Balance/proprioception training, ankle taping/bracing, proper footwear, neuromuscular training, address previous injuries.',
    'Grade I: 1-2 weeks. Grade II: 3-6 weeks. Grade III: 6-12 weeks. Return when able to hop pain-free and complete sport-specific drills.',
    'Complete your rehabilitation. Ankle sprains have high recurrence if not properly rehabilitated. Balance exercises are the best prevention.',
  ),

  'concussion-mild': sme(
    'concussion-mild', 'Concussion (Mild Traumatic Brain Injury)', 'Conmocion cerebral (lesion cerebral traumatica leve)', 'acute-traumatic',
    'NA07', 'Functional brain disturbance from biomechanical forces, causing transient neurological dysfunction without structural damage.',
    'The brain floats in CSF within the skull. Acceleration-deceleration forces cause neuronal stretching and metabolic cascade disruption.',
    'Direct blow to head, face, or neck. Indirect force transmitted to head. Common in contact sports, falls, and collisions.',
    ['Headache, dizziness, confusion', 'Balance problems, nausea', 'Sensitivity to light or noise', 'Memory difficulties, "foggy" feeling'],
    'Clinical diagnosis. SCAT5 assessment. Neurocognitive testing. CT/MRI only if red flags (severe headache, seizures, focal deficits).',
    'Physical and cognitive rest initially, then gradual return to activity. No same-day return to play. Multidisciplinary approach.',
    'Proper technique, protective equipment, rule enforcement, neck strengthening, vision training, education on recognition.',
    'Graduated return-to-play protocol: symptom-limited activity, light aerobic, sport-specific, non-contact, full-contact, return. Minimum 24 hours per stage.',
    'Never hide symptoms to return to play. Second impact syndrome can be fatal. Full recovery before return is essential.',
  ),

  'shoulder-dislocation': sme(
    'shoulder-dislocation', 'Shoulder Dislocation', 'Luxacion de hombro', 'acute-traumatic',
    'NC94.1', 'Complete separation of humeral head from glenoid fossa, most commonly anterior (95%).',
    'The glenohumeral joint is a shallow ball-and-socket relying on rotator cuff and labrum for stability. High mobility sacrifices stability.',
    'Anterior dislocation: abduction, external rotation, extension (throwing motion). Posterior: fall on outstretched hand, seizures.',
    ['Severe shoulder pain and deformity', 'Arm held in protective position', 'Numbness/tingling if axillary nerve injured', 'Visible squared-off shoulder'],
    'Clinical diagnosis confirmed by X-rays (AP, scapular Y, axillary views). MRI for Bankart/SLAP tears post-reduction.',
    'Prompt closed reduction with analgesia/sedation. Immobilization 2-3 weeks. PT for rotator cuff strengthening. Surgery for recurrence.',
    'Rotator cuff strengthening, proprioceptive training, proper tackling/throwing technique, avoid positions of vulnerability.',
    'Non-operative: 6-12 weeks for return to sport. Post-surgical stabilization: 4-6 months. High recurrence in young athletes (>90%).',
    'Young athletes (under 25) have high recurrence rates. Consider surgical stabilization after first dislocation if high-risk sport.',
  ),

  'meniscus-tear-sports': sme(
    'meniscus-tear-sports', 'Meniscus Tear', 'Desgarro de menisco', 'acute-traumatic',
    'NC94.0', 'Tear of the medial or lateral meniscus, C-shaped fibrocartilage providing shock absorption and stability.',
    'Medial and lateral menisci sit on tibial plateau. Outer third (red zone) has blood supply; inner two-thirds (white zone) is avascular.',
    'Acute twisting with flexion in young athletes. Degenerative tears in older athletes with minimal trauma.',
    ['Knee pain along joint line', 'Mechanical catching or locking', 'Swelling (often delayed 24 hours)', 'Pain with squatting or twisting'],
    'Joint line tenderness, positive McMurray and Thessaly tests. MRI is 90-95% sensitive and specific for tear characterization.',
    'Degenerative: PT, activity modification. Acute traumatic: RICE initially, then decision on repair vs. meniscectomy based on tear type/location.',
    'Neuromuscular training, proper landing mechanics, strengthen quadriceps/hamstrings, avoid sudden pivoting on planted foot.',
    'Post-meniscectomy: 4-6 weeks. Post-meniscus repair: 3-6 months. Conservative: 6-12 weeks when pain-free with activity.',
    'Not all meniscus tears need surgery. Degenerative tears often respond well to physical therapy alone. Protect the meniscus - it\'s precious.',
  ),

  'hamstring-strain': sme(
    'hamstring-strain', 'Hamstring Strain', 'Distension isquiotibial', 'acute-traumatic',
    'NC94.3', 'Muscle-tendon injury of the posterior thigh, most commonly the biceps femoris long head.',
    'The hamstrings (biceps femoris, semitendinosus, semimembranosus) originate on ischial tuberosity and flex knee/extend hip.',
    'High-speed running, especially during acceleration or deceleration. Hamstring inflexibility, strength imbalance (quad/hamstring ratio).',
    ['Sudden posterior thigh pain during sprinting', 'Audible pop in severe cases', 'Pain with resisted knee flexion', 'Bruising in severe cases'],
    'Palpation of site of maximal tenderness. MRI or ultrasound for severe or recurrent injuries to assess tear location and percentage.',
    'RICE initially, then gradual reloading with pain-guided progression. Avoid aggressive stretching early. Eccentric strengthening critical.',
    'Hamstring flexibility program, eccentric strengthening (Nordic hamstring curls), maintain quad/hamstring strength ratio >60%, proper warm-up.',
    'Grade I: 2-3 weeks. Grade II: 3-6 weeks. Grade III: 2-3 months. High recurrence rate (12-30%) without proper rehabilitation.',
    'Nordic hamstring curls are the best prevention exercise. Do them consistently throughout your season, not just after an injury.',
  ),

  'acromioclavicular-sprain': sme(
    'acromioclavicular-sprain', 'Acromioclavicular (AC) Joint Sprain', 'Esguince acromioclavicular', 'acute-traumatic',
    'NC94.4', 'Ligamentous injury of the AC joint (shoulder separation), graded I-VI based on severity.',
    'The AC joint connects the clavicle to the acromion. Stabilized by AC ligaments and coracoclavicular (CC) ligaments (conoid and trapezoid).',
    'Direct blow to shoulder (fall on point of shoulder), often in contact sports (football, hockey, rugby, cycling).',
    ['Pain on top of shoulder', 'Visible deformity with higher grades (step-off)', 'Pain with cross-body adduction', 'Tenderness over AC joint'],
    'Clinical diagnosis. X-rays with Zanca view (10-15 degrees cephalic tilt) best visualizes AC joint. Weighted views controversial.',
    'Grades I-II: sling, activity modification, PT. Grades III-VI: surgical consideration based on patient factors and activity level.',
    'Protective padding for contact sports, proper falling technique, strengthen shoulder stabilizers.',
    'Grades I-II: 2-6 weeks. Grade III: variable, may return 6-12 weeks if non-op. Post-surgical: 3-4 months.',
    'Most Grade I-II injuries heal well without surgery. The cosmetic deformity of Grade III does not affect function in most cases.',
  ),

  // --- CONCUSSION AND HEAD INJURIES (2) ---

  'concussion-management': sme(
    'concussion-management', 'Concussion Management Protocol', 'Protocolo de manejo de conmocion cerebral', 'concussion',
    'NA07', 'Standardized approach to concussion evaluation, treatment, and return-to-play decisions.',
    'Complex neurometabolic cascade following head trauma affecting ion channels, neurotransmission, and cerebral blood flow.',
    'Direct or indirect biomechanical forces to head, face, or neck causing transient neurological dysfunction.',
    ['Headache, dizziness, nausea', 'Cognitive fog, memory issues', 'Sleep disturbances', 'Emotional changes, irritability'],
    'SCAT5 (Sport Concussion Assessment Tool), vestibular-ocular assessment, neurocognitive testing (ImPACT), symptom checklists.',
    'Initial physical and cognitive rest 24-48 hours, then gradual symptom-limited return to activity. Multidisciplinary care.',
    'Protective equipment, proper technique, rule changes, education for athletes/coaches/parents on recognition and reporting.',
    '6-step graduated return: (1) symptom-limited activity, (2) light aerobic, (3) sport-specific, (4) non-contact training, (5) full-contact practice, (6) return to play. Minimum 24 hours per step.',
    'When in doubt, sit them out. No same-day return to play. Athletes must be symptom-free at rest and with exertion before return.',
  ),

  'second-impact-syndrome': sme(
    'second-impact-syndrome', 'Second Impact Syndrome', 'Sindrome del segundo impacto', 'concussion',
    'NA07.1', 'Catastrophic brain swelling occurring when a second concussion occurs before full recovery from first.',
    'Loss of cerebral autoregulation following initial concussion leads to malignant cerebral edema with second impact.',
    'Second head trauma while still symptomatic from prior concussion or before full metabolic recovery.',
    ['Second head impact while recovering', 'Sudden collapse or deterioration', 'Dilated pupil, respiratory failure', 'Often fatal or permanently disabling'],
    'Clinical history of recent concussion. CT shows diffuse cerebral edema, loss of gray-white differentiation, compressed ventricles.',
    'Emergency: airway protection, hyperventilation, osmotic therapy, decompressive craniectomy. Often fatal despite aggressive care.',
    'Strict adherence to return-to-play protocols, no same-day return, education on reporting symptoms, baseline testing.',
    'Not applicable - this is a catastrophic event. Prevention through proper concussion management is the only approach.',
    'This is why we have return-to-play protocols. Never hide symptoms to return to sport. Second impact syndrome is often fatal.',
  ),

  // --- RETURN-TO-PLAY PROTOCOLS (3) ---

  'graduated-return-to-play': sme(
    'graduated-return-to-play', 'Graduated Return-to-Play Protocol', 'Protocolo de retorno gradual al juego', 'return-to-play',
    undefined, 'Six-step protocol for safe return to sport after concussion, requiring 24 hours symptom-free at each stage.',
    'Neurometabolic recovery requires gradual reintroduction of physiologic stress while monitoring for symptom recurrence.',
    'Following concussion or other significant injury requiring stepwise return to full athletic participation.',
    ['Need for structured return plan', 'Monitoring for symptom recurrence', 'Assessment at each stage', 'Medical clearance required'],
    'Symptom assessment at each stage. Heart rate monitoring. Functional testing specific to sport. Comparison to baseline if available.',
    'Stage 1: Symptom-limited activity. Stage 2: Light aerobic exercise. Stage 3: Sport-specific exercise. Stage 4: Non-contact training drills. Stage 5: Full-contact practice. Stage 6: Return to play.',
    'Baseline testing for comparison, education on symptoms, established medical relationships for clearance.',
    'Minimum 24 hours at each stage. Return to previous stage if symptoms recur. Medical clearance required before Stage 5.',
    'Do not skip steps. If symptoms return, stop and return to previous stage. Patience prevents prolonged recovery and catastrophic outcomes.',
  ),

  'post-injury-rehabilitation': sme(
    'post-injury-rehabilitation', 'Post-Injury Rehabilitation Phases', 'Fases de rehabilitacion post-lesion', 'rehabilitation',
    undefined, 'Structured rehabilitation progression through phases of healing: protection, restoration, strengthening, and return.',
    'Tissue healing progresses through inflammatory, proliferative, and remodeling phases requiring appropriate interventions at each stage.',
    'Following acute sports injury requiring tissue healing and functional restoration.',
    ['Acute injury requiring rehabilitation', 'Need for progressive loading', 'Functional deficits', 'Return-to-sport goals'],
    'Assessment of tissue healing stage, functional movement screening, strength testing, sport-specific movement analysis.',
    'Phase 1 (Protection): RICE, protected ROM. Phase 2 (Restoration): Full ROM, early loading. Phase 3 (Strengthening): Progressive resistance, proprioception. Phase 4 (Return): Sport-specific training, power development.',
    'Proper acute management, early referral to rehabilitation, patient education on tissue healing timeline.',
    'Varies by tissue type: Muscle strains 2-8 weeks, Ligament sprains 2-12 weeks, Fractures 6-12+ weeks, Tendinopathy 12+ weeks.',
    'Respect the tissue healing timeline. Trying to rush back increases re-injury risk significantly. Let the body heal.',
  ),

  'return-to-play-criteria': sme(
    'return-to-play-criteria', 'Return-to-Play Decision Criteria', 'Criterios de decision para retorno al juego', 'return-to-play',
    undefined, 'Objective and subjective criteria to determine readiness for return to sport after injury.',
    'Multiple systems must be assessed: tissue integrity, neuromuscular control, cardiovascular fitness, psychological readiness.',
    'Athlete nearing completion of rehabilitation following sports injury.',
    ['Near completion of rehabilitation', 'Question about readiness for full sport', 'Need for objective assessment', 'Fear of re-injury'],
    'Clinical examination, functional testing (hop tests, agility drills), sport-specific movement assessment, psychological readiness scales.',
    'Clearance based on: (1) No pain/swelling, (2) Full ROM, (3) Strength >90% of contralateral, (4) Successful functional testing, (5) Psychological readiness, (6) Medical clearance.',
    'Comprehensive rehabilitation program, psychological support, graduated return protocol, clear communication.',
    'When all criteria met: typically 80-100% of normal rehabilitation timeline depending on injury type and sport demands.',
    'You need more than just pain-free to return. Strength, agility, and confidence are equally important. Trust the process.',
  ),

  // --- PREVENTION STRATEGIES (2) ---

  'injury-prevention-program': sme(
    'injury-prevention-program', 'Sports Injury Prevention Programs', 'Programas de prevencion de lesiones deportivas', 'prevention',
    undefined, 'Evidence-based neuromuscular training programs to reduce sports injuries, particularly ACL and lower extremity injuries.',
    'Neuromuscular control, proprioception, strength, and movement patterns can be improved to reduce injury risk.',
    'Participation in sports with injury risk, particularly pivoting/cutting sports (soccer, basketball, football).',
    ['High-risk sport participation', 'Prior injury history', 'Biomechanical risk factors', 'Team or individual athlete'],
    'Movement screening (FMS), biomechanical analysis, strength and flexibility assessment, landing mechanics evaluation.',
    'Programs like FIFA 11+, PEP, Sportmetrics: dynamic warm-up, strengthening, plyometrics, balance training, proper technique education.',
    'Implement FIFA 11+ or similar program 2-3x/week, proper warm-up routines, technique coaching, equipment checks.',
    'Ongoing throughout season. Can reduce ACL injuries by 50-80% when performed consistently.',
    'Prevention programs work. FIFA 11+ takes 15-20 minutes and can reduce injuries by over 50%. Make it part of your routine.',
  ),

  'periodization-training': sme(
    'periodization-training', 'Training Periodization', 'Periodizacion del entrenamiento', 'performance',
    undefined, 'Planned variation of training volume and intensity to optimize performance and minimize overuse injuries.',
    'Athletic adaptation requires appropriate stress and recovery. Excessive load without recovery leads to overreaching and overtraining.',
    'Athletes in training, particularly those with high training volumes or multiple competitive seasons.',
    ['Stagnant performance', 'Persistent fatigue', 'Frequent illness', 'Irritability, sleep disturbances'],
    'Training logs, performance metrics, heart rate variability, subjective wellness questionnaires, biomarker monitoring if available.',
    'Macrocycle (season), mesocycle (3-6 weeks), microcycle (week). Progressive overload with planned recovery weeks.',
    'Annual training plan, incorporate rest days and deload weeks, monitor training load (acute:chronic workload ratio), sleep and nutrition emphasis.',
    'Ongoing throughout athletic career. Deload every 3-4 weeks. Reduce load by 40-50% for 1 week.',
    'Rest is when you get stronger. Training breaks you down; recovery builds you up. Plan your recovery as carefully as your training.',
  ),

  // --- PEDIATRIC SPORTS (2) ---

  'little-league-elbow': sme(
    'little-league-elbow', 'Little League Elbow (Medial Epicondyle Apophysitis)', 'Codo de ligas menores', 'pediatric-sports',
    'FB53.6', 'Overuse injury of the medial epicondylar apophysis from repetitive valgus stress in young throwers.',
    'The medial epicondyle is the origin of the flexor-pronator group and attachment of the ulnar collateral ligament. Apophysis is weaker than ligament in children.',
    'Repetitive throwing (especially curveballs/sliders), poor mechanics, excessive pitch counts, year-round baseball without rest.',
    ['Medial elbow pain during/after throwing', 'Decreased throwing velocity or accuracy', 'Swelling at medial epicondyle', 'Pain with resisted wrist flexion'],
    'X-rays may show widening or fragmentation of apophysis. MRI for refractory cases. Clinical diagnosis in most cases.',
    'Absolute rest from throwing 4-6 weeks minimum, then gradual return with strict pitch count limits. Never corticosteroid injection.',
    'Pitch count limits, proper mechanics, avoid curveballs until skeletal maturity, 2-3 month break from throwing yearly, play multiple sports.',
    'When pain-free, X-rays show healing, and gradual return completed with strict pitch limits. Typically 6-12 weeks total.',
    'This is a warning sign. If ignored, it can lead to permanent deformity. Follow pitch counts strictly and take breaks from throwing.',
  ),

  'osgood-schlatter': sme(
    'osgood-schlatter', 'Osgood-Schlatter Disease', 'Enfermedad de Osgood-Schlatter', 'pediatric-sports',
    'FB53.7', 'Traction apophysitis of the tibial tuberosity from repetitive quadriceps contraction in adolescents.',
    'The tibial tuberosity is the insertion of the patellar tendon. During growth spurts, the apophysis is vulnerable to traction forces.',
    'Rapid growth spurt with repetitive jumping/running sports. Strong quadriceps pulling on immature apophysis.',
    ['Anterior knee pain below patella', 'Worse with running, jumping, kneeling', 'Prominent, tender tibial tuberosity', 'Bilateral in 20-30%'],
    'Clinical diagnosis. X-rays show fragmentation or irregularity of tibial tuberosity. Ultrasound confirms if needed.',
    'Activity modification (not complete rest), ice, NSAIDs, quadriceps/hamstring stretching, patellar strap, physical therapy.',
    'Maintain quadriceps flexibility, gradual return to activity, patellar strap during sports, avoid prolonged rest which weakens muscles.',
    'Self-limited condition. Pain typically resolves with growth plate closure. Can continue sports if pain manageable. 6-24 months typical.',
    'This is a growth-related condition that resolves when you stop growing. Modify activity but do not need to stop sports completely.',
  ),
};

// --- Database Functions ---

export function getSportsMedicineEntry(id: string): SportsMedicineEntry | undefined {
  return SPORTS_MEDICINE_ENTRIES[id];
}

export function searchSportsMedicine(query: string): SportsMedicineEntry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(SPORTS_MEDICINE_ENTRIES).filter(entry =>
    entry.name.toLowerCase().includes(lowerQuery) ||
    entry.nameEs.toLowerCase().includes(lowerQuery) ||
    entry.summary.toLowerCase().includes(lowerQuery) ||
    entry.symptoms.some(s => s.toLowerCase().includes(lowerQuery))
  );
}

export function getSportsMedicineByCategory(category: SportsMedicineCategory): SportsMedicineEntry[] {
  return Object.values(SPORTS_MEDICINE_ENTRIES).filter(entry => entry.category === category);
}

export function getSportsMedicineCount(): number {
  return Object.keys(SPORTS_MEDICINE_ENTRIES).length;
}

// --- Educational Content ---

export const sportsMedicineOverviewContent: EducationalContent = {
  id: 'sports-medicine-overview',
  type: 'topic',
  name: 'Sports Medicine',
  nameEs: 'Medicina del Deporte',
  levels: {
    1: {
      level: 1,
      summary: 'Sports medicine helps athletes stay healthy, prevent injuries, and recover after getting hurt.',
      explanation: 'Sports medicine is a special area of healthcare that focuses on keeping people active and helping them recover from sports injuries. Doctors and other healthcare providers work with athletes of all ages and skill levels. They help treat injuries like sprains, strains, and broken bones. They also teach athletes how to prevent injuries through proper training and conditioning. Whether you are a professional athlete or just play for fun, sports medicine can help you stay active and healthy.',
      keyTerms: [
        { term: 'sports medicine', definition: 'Healthcare focused on physical activity, exercise, and sports injuries' },
        { term: 'athlete', definition: 'A person who plays sports or exercises regularly' },
        { term: 'injury', definition: 'Damage to the body from accidents or overuse' },
      ],
      analogies: ['Sports medicine is like having a mechanic for your body to keep it running smoothly.'],
      examples: ['A basketball player sprains their ankle and needs treatment and rehab to get back on the court.'],
      patientCounselingPoints: ['Stay active but listen to your body', 'Warm up before exercise', 'Rest when you feel pain'],
    },
    2: {
      level: 2,
      summary: 'Sports medicine combines medical knowledge with exercise science to treat and prevent athletic injuries.',
      explanation: 'Sports medicine is a medical specialty that combines principles of medicine, exercise physiology, and biomechanics to help athletes perform at their best while staying healthy. Sports medicine physicians treat a wide range of conditions including acute injuries like fractures and dislocations, overuse injuries like tendinitis and stress fractures, and medical conditions that affect athletic performance. They also play a key role in injury prevention through proper training recommendations, equipment guidance, and identification of risk factors. The field works with athletes at all levels, from youth sports to professional athletics, as well as active individuals who want to maintain fitness.',
      keyTerms: [
        { term: 'biomechanics', definition: 'The study of how forces affect the human body during movement' },
        { term: 'exercise physiology', definition: 'Study of how the body responds to physical activity' },
        { term: 'overuse injury', definition: 'Damage from repetitive stress without adequate recovery time' },
        { term: 'tendinitis', definition: 'Inflammation or irritation of a tendon' },
      ],
      analogies: ['Sports medicine is like preventive maintenance for a car - regular care prevents breakdowns.'],
      examples: ['A marathon runner develops knee pain from overtraining and receives a structured rehab program to return to running safely.'],
    },
    3: {
      level: 3,
      summary: 'Sports medicine is a multidisciplinary field addressing the medical needs of physically active individuals through injury treatment, prevention, and performance optimization.',
      explanation: 'Sports medicine encompasses the comprehensive care of athletes and active individuals, integrating orthopedics, primary care, exercise physiology, nutrition, and psychology. The specialty addresses acute traumatic injuries (sprains, strains, fractures, dislocations), overuse conditions (tendinopathies, stress fractures, apophysitis), medical issues affecting performance (asthma, cardiac conditions, heat illness), and concussion management. Sports medicine physicians utilize evidence-based rehabilitation protocols, employ diagnostic imaging appropriately, and implement return-to-play criteria that balance healing timelines with competitive demands. The field emphasizes injury prevention through neuromuscular training, biomechanical assessment, and load management strategies.',
      keyTerms: [
        { term: 'tendinopathy', definition: 'Pathological condition of a tendon characterized by degeneration and failed healing response' },
        { term: 'apophysitis', definition: 'Inflammation of a bony growth center where tendons attach, occurring in growing athletes' },
        { term: 'neuromuscular training', definition: 'Exercises that improve coordination, balance, and movement patterns to prevent injury' },
        { term: 'return-to-play criteria', definition: 'Objective measures determining when an athlete can safely resume sport participation' },
      ],
      clinicalNotes: 'Sports medicine requires understanding both the biomechanics of sport-specific movements and the physiological demands of different activities.',
    },
    4: {
      level: 4,
      summary: 'Sports medicine applies principles of exercise physiology, biomechanics, and musculoskeletal pathology to optimize athletic performance while minimizing injury risk through evidence-based prevention and treatment strategies.',
      explanation: 'Sports medicine represents a convergence of medical disciplines addressing the unique physiological demands and injury patterns of athletic populations. The specialty requires expertise in musculoskeletal pathology, cardiovascular and pulmonary exercise physiology, nutritional biochemistry, and neurocognitive function. Key clinical competencies include differentiation of overuse tissue failure patterns (tendon, bone, cartilage), management of exertional medical conditions, and application of periodization principles to optimize training adaptations while preventing overreaching and overtraining syndrome. Contemporary sports medicine increasingly utilizes biomechanical analysis, load monitoring technologies, and individualized risk stratification to implement targeted prevention strategies. The field navigates complex ethical considerations surrounding performance enhancement, return-to-play decision-making under competitive pressure, and the long-term health consequences of repetitive head trauma and extreme endurance exercise.',
      keyTerms: [
        { term: 'overtraining syndrome', definition: 'Persistent performance decrement with disturbances in mood state and neuroendocrine function requiring weeks to months for recovery' },
        { term: 'tissue homeostasis', definition: 'Balance between tissue load and tissue capacity; disruption leads to overuse injury' },
        { term: 'neuroplasticity', definition: 'Ability of the nervous system to reorganize pathways; relevant to motor learning and concussion recovery' },
        { term: 'allostatic load', definition: 'Cumulative wear and tear on biological systems from chronic stress exposure including training load' },
      ],
      clinicalNotes: 'Evidence-based return-to-play decisions require integrating tissue healing timelines, functional capacity assessments, psychological readiness, and risk stratification for reinjury.',
    },
    5: {
      level: 5,
      summary: 'Sports medicine integrates molecular mechanisms of tissue adaptation, advanced biomechanical modeling, and population-level injury epidemiology to deliver precision care optimizing athletic longevity and performance while advancing the field through clinical research.',
      explanation: 'Modern sports medicine operates at the intersection of clinical practice and translational science, leveraging advances in molecular biology, wearable sensor technology, and data analytics. The pathophysiology of overuse injuries is understood through the lens of mechanobiology - how mechanical forces modulate cellular signaling pathways controlling tissue remodeling. Tendinopathy represents a failed healing response characterized by disorganized collagen, increased ground substance, and neovascularization rather than simple inflammation. Bone stress injuries demonstrate a continuum from stress reaction to frank fracture based on the relationship between microdamage accumulation and remodeling capacity. Current research frontiers include genetic polymorphisms affecting soft tissue healing, advanced imaging biomarkers for early pathology detection, and artificial intelligence applications for injury prediction. The specialty grapples with complex issues including the appropriate use of biologic therapies (PRP, stem cells), long-term neurodegenerative consequences of repetitive head impacts, and ethical frameworks for elite youth athlete development.',
      keyTerms: [
        { term: 'mechanobiology', definition: 'Study of how mechanical forces influence cellular behavior and tissue remodeling through mechanotransduction' },
        { term: 'neovascularization', definition: 'Formation of new blood vessels; implicated in tendinopathy pathophysiology and potential therapeutic target' },
        { term: 'collagen fibrillogenesis', definition: 'Process of collagen fiber formation; disrupted in tendinopathy leading to matrix disorganization' },
        { term: 'anabolic resistance', definition: 'Blunted muscle protein synthesis response to amino acid intake; relevant to aging athletes and overtraining' },
      ],
      clinicalNotes: 'Future directions include personalized training prescriptions based on genetic profiles, real-time load monitoring with machine learning algorithms for injury prediction, and regenerative therapies targeting specific molecular pathways in tissue repair.',
    },
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'DeLee & Drez\'s Orthopaedic Sports Medicine', source: 'Elsevier', license: 'Copyright' },
    { id: '2', type: 'article', title: 'ACL Injury Prevention Programs', source: 'American Journal of Sports Medicine', license: 'Copyright' },
  ],
  crossReferences: [
    { targetId: 'orthopedics', targetType: 'system', relationship: 'related' },
    { targetId: 'physical-medicine', targetType: 'system', relationship: 'related' },
  ],
  tags: {
    systems: ['musculoskeletal', 'neurological', 'cardiovascular'],
    topics: ['sports-medicine', 'injury-prevention', 'rehabilitation'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
