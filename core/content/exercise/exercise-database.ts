// =============================================================================
// Biological Self — Exercise Science & Rehabilitation Database
// 40+ entries covering aerobic, strength, flexibility, balance, rehabilitation,
// disease-specific, population-specific, and principles categories
// =============================================================================

export type ExerciseCategory =
  | 'aerobic'
  | 'strength'
  | 'flexibility'
  | 'balance'
  | 'rehabilitation'
  | 'disease-specific'
  | 'population-specific'
  | 'principles';

export interface ExerciseEntry {
  id: string;
  name: string;
  nameEs: string;
  category: ExerciseCategory;
  summary: string;
  benefits: string[];
  guidelines: string;
  contraindications: string[];
  modifications: string;
  targetHeartRate?: string;
  duration?: string;
  frequency?: string;
  progressionTips: string;
  safetyTips: string[];
  patientTip: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------
function ex(
  id: string, name: string, nameEs: string, category: ExerciseCategory,
  summary: string, benefits: string[], guidelines: string,
  contraindications: string[], modifications: string,
  progressionTips: string, safetyTips: string[], patientTip: string,
  opts?: { targetHeartRate?: string; duration?: string; frequency?: string }
): ExerciseEntry {
  return {
    id, name, nameEs, category, summary, benefits, guidelines,
    contraindications, modifications, progressionTips, safetyTips, patientTip,
    ...opts,
  };
}

// ---------------------------------------------------------------------------
// EXERCISE DATABASE
// ---------------------------------------------------------------------------

export const EXERCISE_ENTRIES: Record<string, ExerciseEntry> = {

  // =========================================================================
  // AEROBIC (6)
  // =========================================================================

  'walking-program': ex(
    'walking-program', 'Walking Program', 'Programa de caminata', 'aerobic',
    'Structured walking for cardiovascular health and general fitness. The most accessible form of aerobic exercise suitable for nearly all populations.',
    ['Improves cardiovascular endurance', 'Supports weight management', 'Reduces blood pressure', 'Enhances mood and mental health', 'Low joint impact'],
    'AHA recommends 150 min/week moderate-intensity aerobic activity; brisk walking (3.0-4.5 mph) meets this threshold.',
    ['Severe peripheral vascular disease', 'Unstable angina', 'Acute lower extremity injury'],
    'Use a walker or trekking poles for stability; reduce speed or duration for deconditioned patients; flat terrain for joint issues.',
    'Increase duration by 5-10 min/week before increasing pace. Progress from 10-min bouts to sustained 30-min sessions.',
    ['Wear supportive shoes', 'Walk in well-lit areas', 'Stay hydrated', 'Warm up with 5 min slow walking'],
    'Start with just 10 minutes a day and build up gradually; consistency matters more than intensity.',
    { targetHeartRate: '50-70% HRmax', duration: '30-60 min', frequency: '5 days/week' }
  ),

  'running-jogging': ex(
    'running-jogging', 'Running / Jogging', 'Correr / Trotar', 'aerobic',
    'Moderate-to-vigorous aerobic exercise that builds cardiovascular fitness, bone density, and endurance.',
    ['High calorie expenditure', 'Improves VO2 max', 'Strengthens bones and joints', 'Reduces cardiovascular disease risk', 'Boosts mental health'],
    'ACSM recommends 75 min/week vigorous-intensity or 150 min/week moderate-intensity aerobic activity.',
    ['Severe osteoarthritis of weight-bearing joints', 'Acute stress fracture', 'Uncontrolled cardiac arrhythmia', 'Unstable angina'],
    'Transition to run-walk intervals; use cushioned shoes; choose softer surfaces like tracks or trails.',
    'Follow the 10% rule: increase weekly mileage by no more than 10%. Alternate hard and easy days.',
    ['Proper footwear is essential', 'Avoid running through sharp pain', 'Warm up and cool down', 'Hydrate before and after'],
    'A run-walk approach (e.g., run 2 min, walk 1 min) is an excellent way to build up safely.',
    { targetHeartRate: '60-85% HRmax', duration: '20-60 min', frequency: '3-5 days/week' }
  ),

  'swimming': ex(
    'swimming', 'Swimming', 'Natacion', 'aerobic',
    'Full-body aerobic exercise performed in water, providing resistance with minimal joint stress.',
    ['Non-weight-bearing cardiovascular workout', 'Engages upper and lower body muscles', 'Excellent for arthritis and joint conditions', 'Improves lung capacity', 'Reduces fall risk through improved balance'],
    'AHA includes swimming in recommended 150 min/week moderate-intensity aerobic activity.',
    ['Open wounds or skin infections', 'Uncontrolled seizure disorder', 'Severe cardiac disease without clearance', 'Ear infections (certain strokes)'],
    'Use kickboard or pool noodle; water walking in shallow end; aqua aerobics classes for group support.',
    'Increase lap count or duration by 10% weekly. Add different strokes to challenge new muscle groups.',
    ['Never swim alone', 'Know your skill level', 'Avoid hyperventilating before underwater swimming', 'Shower before entering pool'],
    'Swimming is one of the best exercises for people with joint pain since water supports your body weight.',
    { targetHeartRate: '50-80% HRmax', duration: '20-45 min', frequency: '3-5 days/week' }
  ),

  'cycling': ex(
    'cycling', 'Cycling', 'Ciclismo', 'aerobic',
    'Low-impact aerobic exercise using a bicycle (outdoor or stationary) that builds cardiovascular fitness and lower-body strength.',
    ['Low joint impact', 'Builds quadriceps and hamstring strength', 'Improves cardiovascular health', 'Effective for weight management', 'Can be adapted to stationary bike'],
    'ACSM recommends cycling at moderate intensity as part of 150 min/week aerobic goal.',
    ['Severe balance impairment (outdoor)', 'Acute knee injury', 'Perineal or prostate conditions requiring seat modification'],
    'Use a recumbent bike for back support; adjust seat height to prevent knee strain; use stationary bike for balance concerns.',
    'Increase ride duration before intensity. Add hills or resistance gradually. Consider interval training after base fitness.',
    ['Wear a helmet outdoors', 'Ensure proper bike fit', 'Use lights and reflective gear at dusk', 'Start on flat routes'],
    'A stationary bike is a great option if balance or outdoor conditions are a concern.',
    { targetHeartRate: '55-80% HRmax', duration: '30-60 min', frequency: '3-5 days/week' }
  ),

  'hiit-basics': ex(
    'hiit-basics', 'HIIT Basics', 'Fundamentos de HIIT', 'aerobic',
    'High-Intensity Interval Training alternates short bursts of vigorous exercise with recovery periods for maximal cardiovascular benefit in less time.',
    ['Time-efficient', 'Improves VO2 max rapidly', 'Enhances insulin sensitivity', 'Promotes fat loss', 'Boosts metabolic rate post-exercise (EPOC)'],
    'ACSM recognizes HIIT as an effective method; 75 min/week of vigorous activity meets guidelines. Typical ratio 1:1 to 1:3 work-to-rest.',
    ['Uncontrolled hypertension', 'Recent cardiac event', 'Untrained individuals without medical clearance', 'Severe joint disease'],
    'Reduce work interval intensity or duration; extend rest periods; use low-impact movements like cycling instead of jumping.',
    'Start with longer rest intervals (1:3 ratio) and progress to 1:1. Increase work interval intensity before shortening rest.',
    ['Medical clearance for beginners over 40', 'Adequate warm-up is critical', 'Stop if dizzy or chest pain', 'Limit to 2-3 sessions per week'],
    'HIIT is not for everyone. Build a base of regular moderate exercise for at least 4-6 weeks before starting intervals.',
    { targetHeartRate: '80-95% HRmax during work intervals', duration: '15-30 min total', frequency: '2-3 days/week' }
  ),

  'dance-aerobics': ex(
    'dance-aerobics', 'Dance / Aerobics', 'Baile / Aerobicos', 'aerobic',
    'Rhythmic movement-based aerobic exercise that combines coordination, balance, and cardiovascular conditioning in a group or solo setting.',
    ['Improves coordination and agility', 'Cardiovascular conditioning', 'Social engagement reduces isolation', 'Enhances cognitive function through choreography', 'Enjoyable and sustainable'],
    'AHA counts dance as moderate-intensity aerobic activity toward the 150 min/week recommendation.',
    ['Severe balance disorder without support', 'Acute lower extremity injury', 'Uncontrolled vertigo'],
    'Chair-based dance for seated participants; low-impact modifications removing jumps; slower tempo music for beginners.',
    'Start with simple step patterns; add arm movements after mastering footwork; progress to faster tempos.',
    ['Wear supportive shoes', 'Clear floor space of obstacles', 'Hydrate frequently', 'Modify moves if joints hurt'],
    'Dancing is exercise that does not feel like exercise. Find a style you enjoy and you will stick with it.',
    { targetHeartRate: '50-80% HRmax', duration: '30-60 min', frequency: '3-5 days/week' }
  ),

  // =========================================================================
  // STRENGTH (5)
  // =========================================================================

  'bodyweight-exercises': ex(
    'bodyweight-exercises', 'Bodyweight Exercises', 'Ejercicios con peso corporal', 'strength',
    'Resistance training using only body weight for load, including push-ups, squats, lunges, and planks.',
    ['No equipment needed', 'Functional movement patterns', 'Improves muscular endurance', 'Builds core stability', 'Can be done anywhere'],
    'ACSM recommends resistance training 2-3 days/week targeting all major muscle groups.',
    ['Acute joint inflammation', 'Unstable fracture', 'Severe osteoporosis (high-impact movements)'],
    'Wall push-ups instead of floor; partial squats with chair support; modified planks on knees.',
    'Add repetitions before sets. Progress from assisted to full movement. Increase time under tension.',
    ['Maintain proper form over quantity', 'Breathe consistently; avoid holding breath', 'Rest 48 hours between same muscle groups'],
    'Push-ups, squats, and planks are the foundation of strength. Master form before adding difficulty.',
    { duration: '20-40 min', frequency: '2-3 days/week' }
  ),

  'resistance-bands': ex(
    'resistance-bands', 'Resistance Bands', 'Bandas de resistencia', 'strength',
    'Elastic band-based resistance training providing variable resistance through a full range of motion.',
    ['Portable and inexpensive', 'Joint-friendly variable resistance', 'Suitable for rehabilitation', 'Targets stabilizer muscles', 'Progressive resistance with band colors'],
    'ACSM includes elastic resistance as effective strength training; 2-3 days/week, 2-4 sets of 8-15 reps per exercise.',
    ['Latex allergy (use latex-free bands)', 'Acute tendon tear', 'Severe pain with resistance'],
    'Use lighter resistance bands; reduce range of motion; perform exercises seated for stability.',
    'Progress from lighter to heavier bands. Increase reps before resistance. Add pauses at peak contraction.',
    ['Inspect bands for tears before use', 'Secure anchor points', 'Control the return phase', 'Replace worn bands'],
    'Resistance bands are excellent for home exercise and travel. Different colors indicate different resistance levels.',
    { duration: '20-30 min', frequency: '2-3 days/week' }
  ),

  'free-weights-basics': ex(
    'free-weights-basics', 'Free Weights Basics', 'Fundamentos de pesas libres', 'strength',
    'Strength training with dumbbells, barbells, and kettlebells that develops functional strength and muscle mass.',
    ['Builds muscle mass and bone density', 'Improves functional strength', 'Enhances metabolic rate', 'Develops stabilizer muscles', 'Versatile exercise options'],
    'ACSM recommends 2-4 sets of 8-12 reps for strength, 15-20 reps for endurance, at 60-80% 1RM.',
    ['Uncontrolled hypertension (heavy lifting)', 'Acute herniated disc', 'Unstable joint', 'Aortic aneurysm'],
    'Use lighter weights with higher reps; machines for guided movement; seated exercises for balance issues.',
    'Increase weight by 5-10% when you can complete all sets with good form. Progress exercises from simple to compound.',
    ['Use a spotter for heavy lifts', 'Never lock joints under load', 'Exhale on exertion', 'Start with lighter weights to learn form'],
    'Good form is more important than heavy weight. Consider a session with a trainer to learn proper technique.',
    { duration: '30-60 min', frequency: '2-4 days/week' }
  ),

  'machine-training': ex(
    'machine-training', 'Machine Training', 'Entrenamiento con maquinas', 'strength',
    'Resistance training using gym machines that provide guided movement paths and adjustable resistance.',
    ['Safer for beginners', 'Isolates specific muscles', 'Guided movement reduces injury risk', 'Easy to adjust resistance', 'Suitable for rehabilitation'],
    'ACSM guidelines apply: 2-3 days/week, 2-4 sets, 8-12 reps for major muscle groups.',
    ['Acute joint injury in targeted area', 'Range-of-motion restrictions not accommodated by machine', 'Post-surgical weight restrictions'],
    'Reduce weight; limit range of motion on machine settings; use unilateral machines for asymmetric strength.',
    'Increase resistance by the smallest increment when current weight allows full set completion with good form.',
    ['Adjust seat and settings to your body', 'Use full range of motion', 'Control the weight; avoid momentum', 'Wipe equipment after use'],
    'Machines are a great starting point for strength training since they guide your movement and reduce injury risk.',
    { duration: '30-45 min', frequency: '2-3 days/week' }
  ),

  'core-strengthening': ex(
    'core-strengthening', 'Core Strengthening', 'Fortalecimiento del core', 'strength',
    'Exercises targeting abdominal, back, and pelvic floor muscles essential for posture, stability, and injury prevention.',
    ['Reduces low back pain', 'Improves posture and balance', 'Enhances functional movement', 'Supports spinal stability', 'Prevents falls in older adults'],
    'ACSM recommends core exercises as part of a comprehensive resistance training program 2-3 days/week.',
    ['Acute low back injury', 'Abdominal hernia', 'Diastasis recti (modify exercises)', 'Recent abdominal surgery'],
    'Start with pelvic tilts and bird-dogs; avoid sit-ups for back pain; use stability ball for support.',
    'Progress from isometric holds to dynamic movements. Increase hold duration before adding resistance.',
    ['Avoid holding breath during core work', 'Stop if sharp back pain occurs', 'Engage pelvic floor with abdominal exercises', 'Maintain neutral spine'],
    'A strong core is the foundation for all movement. Even 5-10 minutes of core work daily makes a big difference.',
    { duration: '10-20 min', frequency: '3-5 days/week' }
  ),

  // =========================================================================
  // FLEXIBILITY (4)
  // =========================================================================

  'static-stretching': ex(
    'static-stretching', 'Static Stretching', 'Estiramiento estatico', 'flexibility',
    'Holding a muscle in a lengthened position for a sustained period to improve flexibility and range of motion.',
    ['Improves flexibility', 'Reduces muscle tension', 'Aids post-exercise recovery', 'May reduce injury risk', 'Promotes relaxation'],
    'ACSM recommends flexibility exercises 2-3 days/week (daily is most effective), holding each stretch 15-60 seconds.',
    ['Acute muscle strain or tear', 'Unstable joint', 'Stretching into sharp pain', 'Hypermobility syndromes (avoid overstretching)'],
    'Use a towel or strap to extend reach; perform stretches seated or lying down; reduce hold time for acute stiffness.',
    'Increase hold duration from 15 to 30 to 60 seconds. Progress depth of stretch gradually over weeks.',
    ['Never bounce during static stretches', 'Stretch warm muscles (after exercise or warm-up)', 'Breathe deeply and relax into the stretch', 'Stretch to mild tension, not pain'],
    'Hold each stretch gently for at least 15-30 seconds. Stretching should feel like a comfortable pull, never sharp pain.',
    { duration: '10-20 min', frequency: '2-3 days/week, ideally daily' }
  ),

  'dynamic-stretching': ex(
    'dynamic-stretching', 'Dynamic Stretching', 'Estiramiento dinamico', 'flexibility',
    'Active movements that take joints through their full range of motion to prepare muscles for activity.',
    ['Optimal pre-exercise warm-up', 'Improves functional range of motion', 'Activates neuromuscular pathways', 'Increases blood flow to muscles', 'Enhances performance'],
    'ACSM supports dynamic stretching as part of a warm-up routine before aerobic or resistance training.',
    ['Acute joint injury', 'Severe pain with movement', 'Unstable fracture'],
    'Reduce range of motion; slow the movement speed; use support (wall or chair) for balance during leg swings.',
    'Increase range of motion and movement speed gradually. Add multi-planar movements as coordination improves.',
    ['Controlled movements, not ballistic', 'Perform after a brief cardiovascular warm-up', 'Match movements to the activity that follows'],
    'Do dynamic stretches like leg swings and arm circles before exercise, and save static stretches for after.',
    { duration: '5-10 min', frequency: 'Before each exercise session' }
  ),

  'yoga-basics': ex(
    'yoga-basics', 'Yoga Basics', 'Fundamentos de yoga', 'flexibility',
    'Mind-body practice combining physical postures, breathing techniques, and meditation to improve flexibility, strength, and well-being.',
    ['Improves flexibility and balance', 'Reduces stress and anxiety', 'Enhances body awareness', 'Builds functional strength', 'Supports chronic pain management'],
    'AHA recognizes yoga as beneficial for cardiovascular health; ACSM supports it for flexibility and stress management.',
    ['Uncontrolled glaucoma (inversions)', 'Severe osteoporosis (forward folds)', 'Acute disc herniation', 'Late pregnancy (certain poses)'],
    'Chair yoga for mobility limitations; use blocks and straps for support; avoid inversions with blood pressure issues.',
    'Start with beginner classes. Hold poses longer before attempting advanced variations. Add new poses gradually.',
    ['Communicate limitations to instructor', 'Use props without shame', 'Avoid competitive mindset', 'Modify or skip poses that cause pain'],
    'Yoga is not about touching your toes. It is about what you learn on the way down. Start where you are.',
    { duration: '30-60 min', frequency: '2-5 days/week' }
  ),

  'foam-rolling': ex(
    'foam-rolling', 'Foam Rolling', 'Rodillo de espuma', 'flexibility',
    'Self-myofascial release technique using a cylindrical foam roller to reduce muscle tension, improve mobility, and aid recovery.',
    ['Reduces muscle soreness (DOMS)', 'Improves range of motion temporarily', 'Increases blood flow to tissues', 'Cost-effective self-massage', 'Prepares muscles for stretching'],
    'ACSM acknowledges foam rolling as a recovery tool; 1-2 min per muscle group, pre- or post-exercise.',
    ['Over bony prominences', 'Acute injury or bruising', 'Deep vein thrombosis', 'Anticoagulant therapy (bruising risk)'],
    'Use a softer roller; reduce body weight on roller using hands; avoid tender areas initially.',
    'Progress from a soft roller to a firmer one. Increase pressure gradually. Add targeted trigger-point work.',
    ['Roll slowly, 1 inch per second', 'Avoid rolling directly over joints or spine', 'Breathe through discomfort', 'Limit each area to 1-2 minutes'],
    'Foam rolling should feel like a deep massage, not torture. If it is too intense, put less weight on the roller.',
    { duration: '10-15 min', frequency: '3-7 days/week' }
  ),

  // =========================================================================
  // BALANCE (3)
  // =========================================================================

  'fall-prevention-exercises': ex(
    'fall-prevention-exercises', 'Fall Prevention Exercises', 'Ejercicios de prevencion de caidas', 'balance',
    'Structured exercises to improve postural stability, lower-body strength, and reaction time to reduce fall risk in older adults.',
    ['Reduces fall risk by up to 30%', 'Improves confidence in mobility', 'Strengthens ankles and hips', 'Enhances proprioception', 'Maintains independence'],
    'CDC STEADI program and ACSM recommend multicomponent balance training 3+ days/week for fall-risk populations.',
    ['Acute vertigo episode', 'Severe orthostatic hypotension without management', 'Unhealed lower extremity fracture'],
    'Hold onto a sturdy chair or counter; perform exercises near a wall; seated balance exercises for high-risk individuals.',
    'Progress from double-leg to single-leg stance. Reduce hand support. Add dynamic movements like tandem walking.',
    ['Clear exercise area of tripping hazards', 'Have a sturdy support nearby', 'Wear non-slip footwear', 'Exercise when alert, not drowsy'],
    'Practicing balance exercises daily, even for a few minutes, can significantly reduce your risk of falling.',
    { duration: '15-30 min', frequency: '3-7 days/week' }
  ),

  'single-leg-balance': ex(
    'single-leg-balance', 'Single-Leg Balance', 'Equilibrio en una pierna', 'balance',
    'Standing on one leg to challenge proprioception, ankle stability, and core engagement essential for gait and fall prevention.',
    ['Improves ankle proprioception', 'Strengthens hip stabilizers', 'Enhances gait stability', 'Simple to perform anywhere', 'Identifies asymmetry between legs'],
    'ACSM includes single-leg stance as a standard balance assessment and training exercise.',
    ['Acute ankle sprain', 'Non-weight-bearing status', 'Severe neuropathy without support'],
    'Start near a wall or counter; touch fingertip to support; progress to eyes-closed only when stable.',
    'Hold for 10s, then 20s, then 30s. Progress from eyes open to eyes closed. Add head turns or arm movements.',
    ['Stand near a wall or sturdy furniture', 'Keep a slight bend in the standing knee', 'Focus eyes on a fixed point', 'Engage core muscles'],
    'Try standing on one leg while brushing your teeth. Small daily habits build lasting balance improvements.',
    { duration: '5-10 min', frequency: 'Daily' }
  ),

  'tai-chi-basics': ex(
    'tai-chi-basics', 'Tai Chi Basics', 'Fundamentos de tai chi', 'balance',
    'Ancient Chinese martial art practiced as a slow, flowing movement sequence that improves balance, flexibility, and mental calm.',
    ['Reduces fall risk in older adults (strong evidence)', 'Improves balance and coordination', 'Reduces stress and anxiety', 'Low-impact and joint-friendly', 'Enhances cognitive function'],
    'AHA and ACSM recognize tai chi for balance improvement; studies show 40-60% fall reduction in older adults.',
    ['Acute lower extremity injury', 'Severe orthostatic hypotension', 'Acute vertigo'],
    'Seated tai chi for wheelchair users; reduce stance depth; simplify movement sequence for cognitive impairment.',
    'Start with basic forms (8-form tai chi). Progress to longer sequences. Deepen stances as strength improves.',
    ['Wear flat, non-slip shoes', 'Practice on a level surface', 'Move slowly and deliberately', 'Hydrate before and after'],
    'Tai chi is like meditation in motion. The slow, gentle movements are deceptively effective at building balance.',
    { duration: '30-60 min', frequency: '2-5 days/week' }
  ),

  // =========================================================================
  // REHABILITATION (6)
  // =========================================================================

  'cardiac-rehabilitation': ex(
    'cardiac-rehabilitation', 'Cardiac Rehabilitation', 'Rehabilitacion cardiaca', 'rehabilitation',
    'Medically supervised exercise and education program for patients recovering from heart attack, heart surgery, or heart failure.',
    ['Reduces cardiac mortality by 20-25%', 'Improves exercise tolerance', 'Reduces hospital readmissions', 'Supports lifestyle modification', 'Manages cardiovascular risk factors'],
    'AHA/ACSM: Phase I (inpatient), Phase II (outpatient supervised, 36 sessions), Phase III (maintenance). ECG-monitored exercise.',
    ['Unstable angina', 'Decompensated heart failure', 'Uncontrolled arrhythmia', 'Acute myocarditis', 'Severe aortic stenosis'],
    'Lower intensity and shorter duration; use RPE instead of heart rate for beta-blocker patients; seated exercises initially.',
    'Progress intensity using the Karvonen formula. Advance from supervised to independent exercise over 12 weeks.',
    ['Always carry nitroglycerin if prescribed', 'Know warning signs: chest pain, dizziness, excessive dyspnea', 'Monitor heart rate and blood pressure', 'Do not exercise if feeling unwell'],
    'Cardiac rehab is one of the most effective treatments after a heart event. Attend every session if possible.',
    { targetHeartRate: '40-80% HRR per physician prescription', duration: '30-60 min', frequency: '3-5 days/week' }
  ),

  'pulmonary-rehabilitation': ex(
    'pulmonary-rehabilitation', 'Pulmonary Rehabilitation', 'Rehabilitacion pulmonar', 'rehabilitation',
    'Comprehensive program of exercise, education, and behavior change for patients with chronic respiratory disease.',
    ['Reduces dyspnea', 'Improves exercise capacity', 'Enhances quality of life', 'Reduces hospitalizations', 'Improves self-management skills'],
    'ATS/ERS guidelines: minimum 8 weeks, ideally 12+ weeks, combining aerobic and strength training with education.',
    ['Unstable cardiac disease', 'Acute exacerbation of COPD (defer until stable)', 'Severe pulmonary hypertension', 'Oxygen saturation <85% despite supplemental O2'],
    'Use supplemental oxygen during exercise; interval training for severely limited patients; seated exercises with arm ergometry.',
    'Increase duration before intensity. Progress from interval to continuous training. Use Borg dyspnea scale (target 3-5/10).',
    ['Monitor oxygen saturation during exercise', 'Use pursed-lip breathing during exertion', 'Stop if SpO2 drops below 88%', 'Carry rescue inhaler'],
    'Breathing exercises like pursed-lip breathing can help you feel less short of breath during activity.',
    { duration: '20-60 min', frequency: '3-5 days/week for 8-12 weeks' }
  ),

  'post-stroke-exercise': ex(
    'post-stroke-exercise', 'Post-Stroke Exercise', 'Ejercicio post-ictus', 'rehabilitation',
    'Targeted exercise program to restore motor function, cardiovascular fitness, and independence after stroke.',
    ['Improves motor recovery', 'Reduces spasticity', 'Restores functional independence', 'Reduces recurrent stroke risk', 'Combats post-stroke depression'],
    'AHA/ASA: aerobic 3-5 days/week, strength 2-3 days/week, flexibility daily. Begin as soon as medically stable.',
    ['Unstable cardiac condition', 'Acute DVT', 'Uncontrolled seizures', 'Severe cognitive impairment preventing safe exercise'],
    'Paretic-side support with bracing; task-specific training; body-weight-supported treadmill; aquatic therapy.',
    'Progress from assisted to active to resisted movements. Increase task complexity. Emphasize affected side.',
    ['Fall prevention measures essential', 'Monitor blood pressure response', 'Watch for fatigue and frustration', 'Ensure safe environment for balance deficits'],
    'Recovery continues for months and years after stroke. Every bit of movement practice helps your brain rewire.',
    { duration: '20-60 min', frequency: '3-5 days/week' }
  ),

  'post-joint-replacement': ex(
    'post-joint-replacement', 'Post-Joint Replacement', 'Ejercicio post-reemplazo articular', 'rehabilitation',
    'Rehabilitation exercise protocol following hip or knee replacement surgery to restore range of motion, strength, and function.',
    ['Restores joint range of motion', 'Rebuilds muscle strength', 'Returns patients to daily activities', 'Reduces stiffness and swelling', 'Prevents blood clots through early mobilization'],
    'AAOS and ACSM: early mobilization within 24 hours; progressive ROM and strengthening over 6-12 weeks.',
    ['Wound infection or dehiscence', 'Suspected prosthesis loosening', 'DVT (until anticoagulated)', 'Exceeding surgeon hip precautions'],
    'Use assistive devices (walker/cane); elevate limb for swelling; ice after exercise; follow hip precaution protocols.',
    'Progress from ROM exercises to weight-bearing strengthening. Walk further each day. Add stairs and functional tasks.',
    ['Follow surgeon hip/knee precautions strictly', 'Use ice after exercise sessions', 'Report increased swelling or warmth', 'Do not push through sharp pain'],
    'Doing your exercises consistently, even when sore, is the key to a successful recovery from joint replacement.',
    { duration: '20-45 min', frequency: '2-3 times daily initially, then daily' }
  ),

  'low-back-pain-exercises': ex(
    'low-back-pain-exercises', 'Low Back Pain Exercises', 'Ejercicios para dolor lumbar', 'rehabilitation',
    'Therapeutic exercises to reduce pain, improve function, and prevent recurrence of nonspecific low back pain.',
    ['Reduces pain and disability', 'Strengthens spinal stabilizers', 'Improves flexibility', 'Prevents recurrence', 'Reduces need for medications'],
    'ACP/ACSM: exercise is first-line treatment for chronic low back pain. Core stability, flexibility, and aerobic exercise recommended.',
    ['Cauda equina syndrome (emergency)', 'Spinal fracture', 'Progressive neurological deficit', 'Severe acute disc herniation with radiculopathy'],
    'Start with pain-free range only; avoid flexion if disc-related; avoid extension if stenosis; use aquatic exercise for severe pain.',
    'Progress from gentle mobility to core stability to functional strengthening. Gradually increase activity tolerance.',
    ['Avoid prolonged bed rest', 'Stop exercises that increase radiating leg pain', 'Maintain neutral spine during exercises', 'Apply ice or heat as needed'],
    'Movement is medicine for back pain. Gentle activity is usually better than complete rest.',
    { duration: '15-30 min', frequency: 'Daily' }
  ),

  'shoulder-rehabilitation': ex(
    'shoulder-rehabilitation', 'Shoulder Rehabilitation', 'Rehabilitacion de hombro', 'rehabilitation',
    'Progressive exercise program for shoulder injuries including rotator cuff tears, impingement, frozen shoulder, and post-surgical recovery.',
    ['Restores range of motion', 'Strengthens rotator cuff and scapular stabilizers', 'Reduces pain', 'Returns overhead function', 'Prevents re-injury'],
    'AAOS recommends structured physical therapy for most shoulder conditions before considering surgery.',
    ['Acute fracture', 'Suspected full-thickness rotator cuff tear (surgical evaluation first)', 'Shoulder dislocation (unstabilized)', 'Post-surgical precautions not yet cleared'],
    'Pendulum exercises for acute phase; pulley-assisted ROM; isometrics before isotonic exercises; avoid overhead work initially.',
    'Progress from passive ROM to active-assisted to active to resisted exercises. Add functional movements last.',
    ['Respect pain limits', 'Avoid sleeping on affected shoulder', 'Apply ice after exercises', 'Do not rush overhead strengthening'],
    'Shoulder recovery takes patience. Small, consistent daily exercises produce better results than occasional intense sessions.',
    { duration: '15-30 min', frequency: '1-2 times daily' }
  ),

  // =========================================================================
  // DISEASE-SPECIFIC (8)
  // =========================================================================

  'exercise-with-diabetes': ex(
    'exercise-with-diabetes', 'Exercise with Diabetes', 'Ejercicio con diabetes', 'disease-specific',
    'Exercise prescription and safety considerations for patients with type 1 and type 2 diabetes mellitus.',
    ['Improves insulin sensitivity', 'Lowers HbA1c by 0.5-0.7%', 'Reduces cardiovascular risk', 'Supports weight management', 'Improves mood and energy'],
    'ADA: 150 min/week moderate aerobic + resistance training 2-3 days/week. No more than 2 consecutive days without exercise.',
    ['Blood glucose >250 mg/dL with ketones', 'Hypoglycemia unawareness (exercise with partner)', 'Proliferative retinopathy (avoid Valsalva)', 'Peripheral neuropathy (avoid high-impact)'],
    'Monitor blood glucose before, during, and after exercise; carry fast-acting carbohydrate; adjust insulin/medications with provider.',
    'Start with 10-15 min sessions and build to 30-60 min. Add resistance training after aerobic base established.',
    ['Check blood glucose before exercise', 'Carry glucose tablets or juice', 'Wear medical ID', 'Inspect feet daily if neuropathy present', 'Hydrate well'],
    'Exercise works like medicine for diabetes. It helps your body use insulin better and can lower your blood sugar.',
    { targetHeartRate: '50-70% HRmax; RPE 11-13', duration: '30-60 min', frequency: '5-7 days/week' }
  ),

  'exercise-with-heart-failure': ex(
    'exercise-with-heart-failure', 'Exercise with Heart Failure', 'Ejercicio con insuficiencia cardiaca', 'disease-specific',
    'Safe exercise guidelines for patients with chronic heart failure to improve functional capacity and quality of life.',
    ['Improves exercise tolerance', 'Reduces hospitalization', 'Enhances quality of life', 'Improves autonomic function', 'Reduces inflammatory markers'],
    'AHA/HFSA: supervised exercise recommended for stable HF (NYHA II-III). HF-ACTION trial supports safety and benefit.',
    ['Decompensated heart failure', 'Unstable angina', 'Severe aortic stenosis', 'Recent ICD firing', 'New or worsening symptoms'],
    'Start at very low intensity; interval training with frequent rest; seated exercises for severe limitation; RPE-guided.',
    'Very gradual progression: increase duration by 1-2 min per session. Target 30-45 min over several months.',
    ['Stop if weight gain >2 lbs overnight (fluid retention)', 'Monitor daily weight', 'Report increased dyspnea or edema', 'Exercise at same time daily'],
    'Even small amounts of exercise can help your heart work more efficiently. Start slow and be patient with progress.',
    { targetHeartRate: '40-70% HRR; RPE 11-14', duration: '15-45 min (build up)', frequency: '3-5 days/week' }
  ),

  'exercise-with-copd': ex(
    'exercise-with-copd', 'Exercise with COPD', 'Ejercicio con EPOC', 'disease-specific',
    'Exercise strategies for patients with chronic obstructive pulmonary disease to improve dyspnea, endurance, and daily function.',
    ['Reduces breathlessness', 'Improves functional capacity', 'Enhances quality of life', 'Reduces exacerbation frequency', 'Increases muscle strength'],
    'GOLD guidelines: exercise training is the cornerstone of pulmonary rehabilitation for COPD at all stages.',
    ['Acute exacerbation (defer until stable)', 'SpO2 <85% despite supplemental O2', 'Unstable cardiovascular disease', 'Severe pulmonary hypertension'],
    'Use supplemental O2 if prescribed; interval training; upper-limb exercises to reduce dyspnea with ADLs; pursed-lip breathing.',
    'Use Borg dyspnea scale (target 3-5/10). Increase duration before intensity. Add resistance training progressively.',
    ['Use pursed-lip breathing during exertion', 'Monitor oxygen saturation', 'Avoid extreme heat or cold', 'Carry rescue inhaler', 'Plan rest periods'],
    'Feeling short of breath during exercise is expected and safe at moderate levels. Pursed-lip breathing helps.',
    { duration: '20-45 min (interval OK)', frequency: '3-5 days/week' }
  ),

  'exercise-with-arthritis': ex(
    'exercise-with-arthritis', 'Exercise with Arthritis', 'Ejercicio con artritis', 'disease-specific',
    'Exercise recommendations for osteoarthritis and rheumatoid arthritis to maintain joint function, reduce pain, and improve mobility.',
    ['Reduces joint pain and stiffness', 'Maintains range of motion', 'Strengthens periarticular muscles', 'Improves function and independence', 'Reduces disability'],
    'ACR/EULAR: regular physical activity strongly recommended for all arthritis types. Low-impact aerobic + strength training.',
    ['Acute joint flare (reduce intensity)', 'Unstable joint', 'Severe joint deformity affecting safety', 'Active inflammatory episode (modify intensity)'],
    'Aquatic exercise for joint off-loading; range-of-motion exercises during flares; avoid high-impact during active inflammation.',
    'Start with range-of-motion, add strengthening, then low-impact aerobic. Progress based on symptom response.',
    ['Exercise when joints are least stiff (often afternoon)', 'Apply heat before and ice after exercise', 'Listen to your body: mild discomfort OK, sharp pain stop', 'Respect the 2-hour pain rule'],
    'The 2-hour pain rule: if joint pain increases and lasts more than 2 hours after exercise, you did too much. Reduce next time.',
    { duration: '20-45 min', frequency: '3-5 days/week' }
  ),

  'exercise-with-osteoporosis': ex(
    'exercise-with-osteoporosis', 'Exercise with Osteoporosis', 'Ejercicio con osteoporosis', 'disease-specific',
    'Weight-bearing and resistance exercises to maintain bone density and reduce fracture risk in osteoporosis.',
    ['Maintains or improves bone mineral density', 'Reduces fall risk', 'Improves balance and posture', 'Strengthens muscles supporting bones', 'Reduces fracture risk'],
    'NOF/ACSM: weight-bearing aerobic 30 min most days + resistance training 2-3 days/week + balance exercises daily.',
    ['Severe osteoporosis with vertebral fractures (avoid forward flexion)', 'Acute fracture', 'Excessive spinal loading'],
    'Avoid forward spinal flexion and twisting; use resistance bands instead of heavy weights; emphasize balance and posture.',
    'Progress resistance training gradually. Add weight-bearing impact exercises (walking, stair climbing) as tolerated.',
    ['Avoid exercises with spinal flexion (sit-ups, toe touches)', 'Ensure home safety to prevent falls', 'Proper footwear for stability', 'Maintain good posture during exercises'],
    'Weight-bearing exercise tells your bones to stay strong. Walking, dancing, and light weights all help.',
    { duration: '30-45 min', frequency: '5+ days/week weight-bearing; 2-3 days/week strength' }
  ),

  'exercise-during-pregnancy': ex(
    'exercise-during-pregnancy', 'Exercise During Pregnancy', 'Ejercicio durante el embarazo', 'disease-specific',
    'Safe exercise guidelines for healthy pregnant women to maintain fitness, manage weight gain, and support maternal-fetal health.',
    ['Reduces gestational diabetes risk', 'Manages healthy weight gain', 'Reduces back pain', 'Improves mood and sleep', 'May shorten labor duration'],
    'ACOG: 150 min/week moderate-intensity exercise for healthy pregnancies. Continue pre-pregnancy exercise with modifications.',
    ['Placenta previa', 'Preeclampsia', 'Cervical insufficiency', 'Preterm labor risk', 'Ruptured membranes', 'Severe anemia'],
    'Avoid supine exercises after first trimester; avoid contact sports; reduce intensity as pregnancy progresses; pelvic floor focus.',
    'Listen to body signals; reduce intensity if unable to hold conversation; modify as belly grows; switch to low-impact.',
    ['Avoid overheating', 'Stay well hydrated', 'Avoid supine position after 1st trimester', 'Stop if bleeding, dizziness, or contractions occur', 'Avoid high-altitude exercise if unacclimatized'],
    'Exercise during pregnancy is safe and beneficial for most women. Talk to your OB about what is right for you.',
    { targetHeartRate: 'RPE 12-14 (talk test)', duration: '30 min', frequency: '5 days/week' }
  ),

  'exercise-with-obesity': ex(
    'exercise-with-obesity', 'Exercise with Obesity', 'Ejercicio con obesidad', 'disease-specific',
    'Exercise strategies for individuals with obesity focusing on sustainable activity, joint protection, and gradual progression.',
    ['Supports weight loss and maintenance', 'Improves metabolic health', 'Reduces comorbidity risk', 'Enhances mood and self-efficacy', 'Improves cardiovascular fitness'],
    'ACSM: progress to 200-300 min/week moderate activity for weight loss; combine with dietary intervention.',
    ['Severe orthopedic limitations', 'Uncontrolled cardiac disease', 'Exercise-induced bronchospasm (manage first)'],
    'Non-weight-bearing options (swimming, cycling, seated exercises); shorter bouts accumulated through the day; supportive footwear.',
    'Start with 10-min sessions, 3x/day. Build to continuous 30-60 min. Add resistance training after initial conditioning.',
    ['Start slowly to prevent injury', 'Choose low-impact activities initially', 'Wear moisture-wicking clothing', 'Hydrate frequently', 'Celebrate consistency over intensity'],
    'Any movement counts. Three 10-minute walks equal one 30-minute walk. Find activities you enjoy and build from there.',
    { targetHeartRate: '40-60% HRR initially', duration: '150-300 min/week goal', frequency: '5-7 days/week' }
  ),

  'exercise-with-parkinsons': ex(
    'exercise-with-parkinsons', 'Exercise with Parkinson\'s', 'Ejercicio con Parkinson', 'disease-specific',
    'Targeted exercise programs for Parkinson\'s disease addressing bradykinesia, rigidity, balance impairment, and functional decline.',
    ['Improves gait speed and stride length', 'Reduces rigidity', 'Improves balance and reduces falls', 'May slow disease progression (emerging evidence)', 'Enhances quality of life'],
    'ACSM/AAN: multicomponent exercise including aerobic, resistance, balance, and flexibility training. High intensity may be neuroprotective.',
    ['Severe orthostatic hypotension', 'Uncontrolled freezing episodes (modify environment)', 'Cognitive impairment affecting safety (supervise)'],
    'Use external cues (lines on floor, metronome) for gait; large-amplitude movements (LSVT BIG); dance programs (tango).',
    'Start with supervised sessions. Progress exercise intensity as tolerated. Emphasize amplitude of movement.',
    ['Exercise during "on" medication periods', 'Fall-proof the exercise area', 'Use auditory or visual cues for movement', 'Exercise with a partner when possible'],
    'Research shows exercise is one of the most effective treatments for Parkinson\'s. Programs like boxing and dance show strong benefits.',
    { duration: '30-60 min', frequency: '3-5 days/week' }
  ),

  // =========================================================================
  // POPULATION-SPECIFIC (4)
  // =========================================================================

  'pediatric-physical-activity': ex(
    'pediatric-physical-activity', 'Pediatric Physical Activity', 'Actividad fisica pediatrica', 'population-specific',
    'Physical activity guidelines for children ages 6-12 emphasizing play, motor skill development, and establishing lifelong habits.',
    ['Builds strong bones and muscles', 'Develops motor skills and coordination', 'Supports healthy weight', 'Improves attention and academic performance', 'Fosters social skills'],
    'WHO/CDC: 60 min/day moderate-to-vigorous activity including aerobic, muscle-strengthening, and bone-strengthening 3 days/week each.',
    ['Acute illness', 'Unhealed fractures', 'Uncontrolled asthma during exercise', 'Cardiac conditions without clearance'],
    'Shorter activity bouts; structured play instead of formal exercise; adaptive sports for disabilities.',
    'Focus on fun and variety. Introduce new sports and activities regularly. Build endurance through active play.',
    ['Adequate hydration during play', 'Proper protective equipment for sports', 'Sun protection outdoors', 'Supervision appropriate for age and activity'],
    'Children do not need formal exercise programs. Active play, sports, and outdoor exploration are the best activities.',
    { duration: '60+ min/day', frequency: 'Daily' }
  ),

  'adolescent-athlete': ex(
    'adolescent-athlete', 'Adolescent Athlete', 'Atleta adolescente', 'population-specific',
    'Exercise and training guidelines for adolescent athletes addressing growth considerations, injury prevention, and appropriate training loads.',
    ['Develops athletic skills', 'Builds confidence and teamwork', 'Supports bone development', 'Establishes fitness habits', 'Reduces future chronic disease risk'],
    'ACSM/AAP: sport specialization delay until age 15-16; multi-sport participation recommended; adequate rest and recovery.',
    ['Open growth plates with heavy lifting (modify)', 'Overtraining syndrome', 'Female athlete triad (energy, menstrual, bone)', 'Concussion return-to-play protocol'],
    'Age-appropriate resistance training (bodyweight and light loads); sport sampling over specialization; mandatory rest days.',
    'Follow the 10% rule for training volume. Prioritize technique over load. Ensure 1-2 rest days per week minimum.',
    ['Screen for overtraining symptoms', 'Ensure adequate nutrition and sleep', 'Follow concussion protocols', 'Monitor for growth-related injuries', 'Encourage rest days'],
    'Young athletes perform best when they play multiple sports, get enough sleep, and take rest days seriously.',
    { duration: 'Sport-specific', frequency: 'No more than 5 days/week organized sport; 1-2 rest days minimum' }
  ),

  'older-adult-exercise': ex(
    'older-adult-exercise', 'Older Adult Exercise', 'Ejercicio para adultos mayores', 'population-specific',
    'Comprehensive exercise guidelines for adults aged 65+ addressing sarcopenia, fall prevention, functional independence, and chronic disease management.',
    ['Prevents sarcopenia and frailty', 'Reduces fall risk', 'Maintains cognitive function', 'Preserves functional independence', 'Manages chronic conditions'],
    'ACSM/AHA: 150 min/week moderate aerobic + 2 days/week strength + balance training for fall-risk individuals. Reduce sedentary time.',
    ['Unstable medical condition', 'Acute illness', 'Severe cognitive impairment without supervision', 'Uncontrolled pain'],
    'Chair-based exercises; reduce intensity and duration; longer warm-up and cool-down; supervised group classes.',
    'Progress very gradually. Prioritize consistency over intensity. Address weakest domain first (usually balance or strength).',
    ['Get medical clearance for new programs', 'Rise slowly to prevent orthostatic hypotension', 'Exercise in a safe environment', 'Stay hydrated', 'Stop if chest pain or dizziness'],
    'It is never too late to start exercising. Even small amounts of activity improve strength, balance, and quality of life.',
    { targetHeartRate: '40-60% HRR; RPE 10-13', duration: '20-60 min', frequency: '5 days/week aerobic; 2+ days/week strength' }
  ),

  'exercise-pregnancy-population': ex(
    'exercise-pregnancy-population', 'Exercise During Pregnancy (Population)', 'Ejercicio durante el embarazo (poblacion)', 'population-specific',
    'Population-level physical activity guidance for pregnant and postpartum women including trimester-specific adaptations and postpartum return.',
    ['Reduces gestational diabetes by 25-30%', 'Lowers preeclampsia risk', 'Supports postpartum recovery', 'Reduces postpartum depression risk', 'Maintains cardiovascular fitness'],
    'ACOG/WHO: 150 min/week moderate activity throughout pregnancy unless contraindicated. Postpartum: resume gradually after clearance.',
    ['Absolute contraindications per ACOG (preeclampsia, placenta previa, cervical insufficiency)', 'Heavy vaginal bleeding', 'Preterm labor'],
    'Each trimester needs specific modifications; postpartum pelvic floor rehab before high-impact; diastasis recti screening.',
    'First trimester: maintain pre-pregnancy routine. Second: modify supine and balance work. Third: reduce intensity. Postpartum: rebuild gradually.',
    ['Pelvic floor exercises throughout pregnancy', 'Avoid contact sports and fall-risk activities', 'Adequate caloric intake for exercise', 'Postpartum clearance before returning to exercise'],
    'Your body is doing incredible work during pregnancy. Gentle exercise supports both you and your baby.',
    { targetHeartRate: 'Talk test / RPE 12-14', duration: '30 min most days', frequency: '5 days/week' }
  ),

  // =========================================================================
  // PRINCIPLES (4)
  // =========================================================================

  'fitt-principle': ex(
    'fitt-principle', 'FITT Principle', 'Principio FITT', 'principles',
    'Framework for exercise prescription: Frequency, Intensity, Time, and Type. The foundation of all exercise programming.',
    ['Provides structured exercise planning', 'Individualizes exercise prescription', 'Facilitates safe progression', 'Applies to all fitness components', 'Standard clinical framework'],
    'ACSM uses FITT-VP (adding Volume and Progression) as the standard exercise prescription framework.',
    ['None (framework, not exercise)', 'Misapplication can cause overtraining'],
    'Adjust each FITT component independently. Reduce one component to increase another for variety.',
    'Change only one FITT variable at a time. Increase by no more than 10% per week for any single variable.',
    ['Individualize each component', 'Account for medical conditions', 'Reassess regularly', 'Document and track changes'],
    'Think of FITT as your exercise recipe: how often (Frequency), how hard (Intensity), how long (Time), and what kind (Type).',
    { frequency: 'Variable per goal', duration: 'Variable per goal' }
  ),

  'progressive-overload': ex(
    'progressive-overload', 'Progressive Overload', 'Sobrecarga progresiva', 'principles',
    'The principle of gradually increasing exercise demand to drive continued physiological adaptation and avoid plateaus.',
    ['Drives continued fitness gains', 'Prevents training plateaus', 'Builds strength systematically', 'Applies to all exercise types', 'Reduces injury risk vs. sudden increases'],
    'ACSM: systematic progression in frequency, intensity, duration, or complexity to maintain overload as fitness improves.',
    ['Active injury or illness', 'Overtraining syndrome (reduce load)', 'Insufficient recovery between sessions'],
    'Micro-load with fractional weight plates; increase reps before weight; extend time before intensity for aerobic.',
    'Increase volume or intensity by 5-10% per week. Periodize with deload weeks every 4-6 weeks.',
    ['Progress only one variable at a time', 'Allow adequate recovery', 'Recognize signs of overtraining', 'Track workouts to monitor progression'],
    'Your body adapts to what you ask it to do. Gradually asking it to do a little more is the key to getting stronger.',
  ),

  'exercise-prescription-basics': ex(
    'exercise-prescription-basics', 'Exercise Prescription Basics', 'Fundamentos de prescripcion de ejercicio', 'principles',
    'Clinical approach to prescribing exercise as medicine, including assessment, goal setting, and individualized programming.',
    ['Standardizes exercise recommendations', 'Considers medical history and limitations', 'Sets measurable goals', 'Integrates with medical treatment plans', 'Improves patient adherence'],
    'ACSM Exercise is Medicine initiative: pre-participation health screening, FITT-VP prescription, regular follow-up and adjustment.',
    ['Exercise not appropriate for unstable acute conditions', 'Requires individualized medical clearance process'],
    'Simplified prescriptions for low-literacy patients; visual exercise handouts; group programs for social support.',
    'Reassess every 4-6 weeks. Modify prescription based on progress, tolerance, and changing medical status.',
    ['Complete pre-participation screening', 'Start conservatively', 'Set realistic and specific goals', 'Build in follow-up and accountability'],
    'Ask your doctor to write you an exercise prescription just like a medication prescription. It makes exercise feel more official and important.',
  ),

  'rpe-scale': ex(
    'rpe-scale', 'RPE Scale (Rating of Perceived Exertion)', 'Escala RPE (Escala de esfuerzo percibido)', 'principles',
    'Subjective scale (Borg 6-20 or Modified 0-10) for monitoring exercise intensity based on perceived effort, useful when heart rate monitoring is impractical.',
    ['No equipment needed', 'Accounts for medication effects on HR', 'Valid for all populations', 'Correlates with physiological markers', 'Easy to teach and apply'],
    'ACSM: RPE is a valid adjunct or alternative to heart rate for prescribing and monitoring exercise intensity. Borg 12-14 = moderate.',
    ['None (monitoring tool)', 'May be unreliable in patients with altered perception (cognitive impairment)'],
    'Use simplified 0-10 scale for easier understanding; combine with talk test for validation; visual analog scales for language barriers.',
    'Patients learn to calibrate RPE with experience. Reassess perceived exertion as fitness improves since same effort becomes easier.',
    ['Teach scale before exercise', 'Anchor endpoints with examples', 'Use consistently across sessions', 'Combine with other intensity measures for accuracy'],
    'On a scale of 0-10, aim for a 3-5 during moderate exercise. You should be able to talk but not sing.',
  ),
};

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

const entriesArray = Object.values(EXERCISE_ENTRIES);

export function getExerciseEntry(id: string): ExerciseEntry | undefined {
  return EXERCISE_ENTRIES[id];
}

export function searchExercises(query: string): ExerciseEntry[] {
  const q = query.toLowerCase();
  return entriesArray.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.summary.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q) ||
    e.benefits.some(b => b.toLowerCase().includes(q)) ||
    e.guidelines.toLowerCase().includes(q)
  );
}

export function getExercisesByCategory(category: ExerciseCategory): ExerciseEntry[] {
  return entriesArray.filter(e => e.category === category);
}

export function getExerciseCount(): number {
  return entriesArray.length;
}
