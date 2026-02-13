/**
 * Biological Self - Orthopedics Specialty Database
 * Compact reference of 31 orthopedic conditions across 10 subcategories
 */

// --- Types ---

export type OrthoSubcategory =
  | 'spine' | 'shoulder' | 'elbow' | 'hand-wrist' | 'hip'
  | 'knee' | 'ankle-foot' | 'fracture' | 'sports-injury' | 'pediatric-ortho';

export interface OrthoEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory: OrthoSubcategory;
  summary: string;
  anatomy: string;
  mechanism: string;
  symptoms: string[];
  physicalExam: string[];
  imaging: string;
  treatment: string;
  surgicalIndications: string;
  rehabilitation: string;
  returnToActivity: string;
  patientTip: string;
}

// --- Compact Helper ---

const orth = (
  id: string, name: string, nameEs: string, subcategory: OrthoSubcategory,
  summary: string, anatomy: string, mechanism: string,
  symptoms: string[], physicalExam: string[], imaging: string,
  treatment: string, surgicalIndications: string, rehabilitation: string,
  returnToActivity: string, patientTip: string,
): OrthoEntry => ({
  id, name, nameEs, subcategory, summary, anatomy, mechanism,
  symptoms, physicalExam, imaging, treatment, surgicalIndications,
  rehabilitation, returnToActivity, patientTip,
});

// --- Ortho Database ---
export const ORTHO_ENTRIES: Record<string, OrthoEntry> = {
  // --- SPINE (4) ---

  'lumbar-disc-herniation': orth(
    'lumbar-disc-herniation', 'Lumbar Disc Herniation', 'Hernia de disco lumbar', 'spine',
    'Displacement of intervertebral disc material compressing adjacent nerve roots, most common at L4-L5 and L5-S1.',
    'Intervertebral discs consist of a gelatinous nucleus pulposus surrounded by a fibrous annulus fibrosus, acting as shock absorbers between vertebral bodies.',
    'Repetitive flexion-rotation loading, heavy lifting with poor mechanics, or age-related disc degeneration weakens the annulus allowing nucleus herniation.',
    ['Radicular leg pain (sciatica) worse with sitting', 'Numbness or tingling in a dermatomal pattern', 'Lower back pain', 'Weakness in affected myotome'],
    ['Positive straight leg raise (Lasegue test)', 'Dermatomal sensory deficit', 'Reduced deep tendon reflexes (ankle or knee)', 'Cross-over straight leg raise for specificity'],
    'MRI is gold standard showing disc protrusion and nerve compression. X-rays for bony alignment. CT myelogram if MRI contraindicated.',
    'Conservative first: NSAIDs, physical therapy focusing on McKenzie extension exercises, epidural steroid injections. 90% improve within 6 weeks.',
    'Cauda equina syndrome (emergency), progressive neurological deficit, intractable pain after 6-12 weeks conservative care.',
    'Core stabilization program, nerve gliding exercises, gradual return to flexion activities over 8-12 weeks.',
    '6-12 weeks for conservative management; 3-6 months post-discectomy for full activities.',
    'Avoid prolonged sitting and heavy lifting early on. Walking is often the best initial exercise for disc herniations.',
  ),

  'cervical-radiculopathy': orth(
    'cervical-radiculopathy', 'Cervical Radiculopathy', 'Radiculopatia cervical', 'spine',
    'Compression or irritation of a cervical nerve root causing arm pain, numbness, or weakness in a specific nerve distribution.',
    'Cervical nerve roots exit above their corresponding vertebra (C6 root exits at C5-C6). Uncovertebral and facet joints can narrow the foramen.',
    'Disc herniation in younger patients; foraminal stenosis from spondylosis in older patients. Trauma or repetitive neck strain may contribute.',
    ['Radiating arm pain following a dermatomal pattern', 'Neck pain with head rotation', 'Hand numbness or clumsiness', 'Shoulder blade pain'],
    ['Spurling test (axial compression with extension and rotation)', 'Upper limb tension test', 'Specific myotome and dermatome testing', 'Distraction test relieves symptoms'],
    'MRI of cervical spine is preferred. CT with 3D reconstruction for bony foraminal stenosis. EMG/NCS after 3 weeks to confirm.',
    'Cervical collar for short-term comfort, NSAIDs, cervical traction, physical therapy focusing on postural correction and deep neck flexor strengthening.',
    'Progressive myelopathy signs, motor weakness not improving after 6 weeks, MRI-confirmed significant cord compression.',
    'Isometric cervical strengthening, scapular stabilization, nerve mobilization, ergonomic workstation optimization.',
    '6-12 weeks conservative care; 3-4 months post-anterior cervical discectomy and fusion (ACDF) for desk work.',
    'Keep your computer screen at eye level and take breaks every 30 minutes. A rolled towel behind your neck can support the natural curve while sleeping.',
  ),

  'spinal-stenosis': orth(
    'spinal-stenosis', 'Spinal Stenosis', 'Estenosis espinal', 'spine',
    'Narrowing of the spinal canal causing neurogenic claudication with walking and standing, most common in the lumbar region.',
    'The central canal, lateral recesses, and foramina can narrow from disc bulging, facet hypertrophy, ligamentum flavum thickening, and spondylolisthesis.',
    'Degenerative changes accumulate over decades. Congenital short pedicles predispose. Spondylolisthesis worsens central and foraminal narrowing.',
    ['Bilateral leg heaviness or pain with walking (neurogenic claudication)', 'Relief with sitting or bending forward (shopping cart sign)', 'Lower back stiffness', 'Balance difficulty'],
    ['Wide-based gait observed', 'Symptoms reproduced with lumbar extension', 'Romberg test may be positive', 'Bicycle test differentiates from vascular claudication'],
    'MRI shows canal dimensions, disc and ligament changes. CT myelogram for surgical planning. Standing X-rays assess alignment and spondylolisthesis.',
    'Activity modification, flexion-based physical therapy, epidural steroid injections, NSAIDs. Cycling and swimming are well tolerated.',
    'Failure of 3-6 months conservative care with functional limitation, progressive neurological deficits, or bladder dysfunction.',
    'Flexion-bias exercises, aquatic therapy, stationary cycling, core strengthening with neutral spine, balance training.',
    'Gradual; many patients manage long-term with exercise. Post-laminectomy: 3-6 months for full recovery.',
    'Leaning forward slightly while walking (like pushing a cart) can relieve symptoms. Staying active with low-impact exercise is key.',
  ),

  'compression-fracture': orth(
    'compression-fracture', 'Vertebral Compression Fracture', 'Fractura por compresion vertebral', 'spine',
    'Collapse of a vertebral body, most often thoracolumbar junction (T11-L2), commonly from osteoporosis or trauma.',
    'Vertebral body bears axial load. Osteoporotic bone fails under normal loads. Anterior column typically collapses producing wedge deformity.',
    'Low-energy fall or even coughing/sneezing in osteoporotic patients. High-energy axial load or flexion in trauma. Pathologic from metastatic disease.',
    ['Acute midline back pain at fracture level', 'Pain worsened by standing and movement', 'Height loss over time', 'Thoracic kyphosis progression'],
    ['Point tenderness over spinous process', 'Pain with axial loading', 'Assess for neurological deficits (rare in osteoporotic fractures)', 'Measure height and compare to previous'],
    'X-rays show vertebral height loss and wedging. MRI with STIR sequence distinguishes acute from chronic. CT for burst fracture assessment. DEXA for osteoporosis.',
    'Bracing (TLSO), analgesics, early mobilization, osteoporosis treatment (bisphosphonates, calcium, vitamin D). Calcitonin for acute pain.',
    'Vertebroplasty or kyphoplasty for severe pain refractory to 2-4 weeks conservative care. Posterior fusion for unstable burst fractures.',
    'Extension-based exercises, postural training to reduce kyphosis, weight-bearing exercise for bone density, fall prevention program.',
    '6-12 weeks for fracture healing; ongoing bone health management. Gradual return to activities avoiding heavy lifting.',
    'Focus on preventing future fractures: get a bone density test, take calcium and vitamin D, and do weight-bearing exercises regularly.',
  ),
  // --- SHOULDER (3) ---

  'rotator-cuff-tear': orth(
    'rotator-cuff-tear', 'Rotator Cuff Tear', 'Desgarro del manguito rotador', 'shoulder',
    'Partial or complete tear of one or more rotator cuff tendons, most commonly supraspinatus, causing pain and weakness with overhead activities.',
    'Four muscles (supraspinatus, infraspinatus, teres minor, subscapularis) form a tendon cuff stabilizing the humeral head in the glenoid.',
    'Degenerative tears from chronic impingement and tendon aging (most common). Acute tears from falls on outstretched hand or forceful overhead motions.',
    ['Shoulder pain at night lying on affected side', 'Weakness with overhead reaching', 'Pain with arm elevation above 90 degrees', 'Difficulty with activities like hair brushing'],
    ['Painful arc between 60-120 degrees', 'Positive drop arm test (supraspinatus)', 'External rotation weakness (infraspinatus)', 'Lift-off test (subscapularis)', 'Empty can test'],
    'X-rays for bony abnormalities and acromion morphology. MRI is gold standard for tear size and retraction. Ultrasound is cost-effective for experienced operators.',
    'Partial tears and low-demand patients: PT focusing on rotator cuff and periscapular strengthening, NSAIDs, subacromial corticosteroid injection.',
    'Full-thickness tear in active patients, failed 3-6 months conservative care, acute traumatic tear in young patients, significant functional impairment.',
    'Sling for 4-6 weeks post-repair, passive ROM progressing to active, rotator cuff strengthening starting at 3 months, full strengthening by 4-6 months.',
    'Desk work in 1-2 weeks post-op; overhead sports 6-9 months. Conservative: improvement over 6-12 weeks of therapy.',
    'Ice after activity, sleep with a pillow under your arm for comfort, and be patient with recovery — rotator cuff healing takes time.',
  ),

  'shoulder-impingement': orth(
    'shoulder-impingement', 'Shoulder Impingement Syndrome', 'Sindrome de pinzamiento del hombro', 'shoulder',
    'Compression of rotator cuff tendons and subacromial bursa beneath the acromion during overhead arm elevation.',
    'Subacromial space contains supraspinatus tendon and bursa between the acromion above and humeral head below, normally 10-15mm in height.',
    'Repetitive overhead activities, poor scapular mechanics, hooked acromion morphology, rotator cuff weakness allowing superior humeral head migration.',
    ['Anterior-lateral shoulder pain with overhead reaching', 'Pain with reaching behind back', 'Night pain on affected side', 'Gradual onset over weeks to months'],
    ['Positive Neer impingement sign (passive forward flexion)', 'Positive Hawkins-Kennedy test (internal rotation at 90 flexion)', 'Painful arc 60-120 degrees', 'Jobe test for supraspinatus'],
    'X-rays (outlet view) to assess acromion type and acromioclavicular joint. MRI if symptoms persist to rule out rotator cuff tear. Ultrasound for dynamic assessment.',
    'Activity modification, NSAIDs, subacromial corticosteroid injection, physical therapy emphasizing posterior capsule stretching and scapular stabilization.',
    'Refractory symptoms after 3-6 months of appropriate conservative care; arthroscopic subacromial decompression with acromioplasty considered.',
    'Rotator cuff strengthening (external rotation emphasis), scapular retraction exercises, posterior capsule stretching, postural correction.',
    '4-8 weeks with consistent therapy for most patients. Post-arthroscopy: 3-4 months for overhead sports.',
    'Avoid repetitive overhead reaching when possible. Strengthening the muscles around your shoulder blade is just as important as the rotator cuff.',
  ),

  'frozen-shoulder': orth(
    'frozen-shoulder', 'Frozen Shoulder (Adhesive Capsulitis)', 'Hombro congelado (capsulitis adhesiva)', 'shoulder',
    'Progressive painful restriction of both active and passive shoulder motion due to capsular inflammation and fibrosis.',
    'The glenohumeral joint capsule, particularly the inferior pouch (axillary recess) and coracohumeral ligament, becomes thickened and contracted.',
    'Idiopathic in most cases. Associated with diabetes (10-20% prevalence), thyroid disease, and prolonged immobilization. Inflammatory phase precedes fibrotic phase.',
    ['Progressive shoulder stiffness over weeks to months', 'Severe pain early (freezing phase)', 'Inability to reach behind back or overhead', 'Sleep disruption from pain'],
    ['Global loss of passive ROM (hallmark finding)', 'External rotation most restricted', 'Pain at end range of available motion', 'No weakness once pain controlled'],
    'X-rays to exclude arthritis. MRI shows thickened capsule and reduced axillary recess volume. Arthrography shows decreased joint capacity (<10ml).',
    'Freezing phase: analgesics, gentle ROM. Frozen phase: aggressive stretching, intra-articular corticosteroid injection, hydrodilatation. Thawing phase: progressive strengthening.',
    'Manipulation under anesthesia for refractory cases after 6+ months. Arthroscopic capsular release for severe contracture.',
    'Pendulum exercises, wall walks, cross-body stretches, sleeper stretches, progressive active-assisted then active ROM, eventual strengthening.',
    'Self-limited (12-36 months typical course). Active intervention can shorten to 6-9 months. Full recovery expected in most cases.',
    'Consistency is key — gentle daily stretching is more effective than aggressive occasional sessions. Diabetic patients may have a longer course.',
  ),
  // --- ELBOW (2) ---

  'tennis-elbow': orth(
    'tennis-elbow', 'Lateral Epicondylitis (Tennis Elbow)', 'Epicondilitis lateral (codo de tenista)', 'elbow',
    'Overuse tendinopathy of the common extensor origin at the lateral epicondyle, primarily affecting extensor carpi radialis brevis.',
    'Common extensor tendons (ECRB, EDC, ECU) originate at the lateral epicondyle. ECRB is most vulnerable due to its position beneath EDC.',
    'Repetitive wrist extension and gripping activities. Not limited to tennis — common in manual laborers, typists, and anyone with repetitive forearm use.',
    ['Lateral elbow pain radiating down forearm', 'Pain with gripping (opening jars, handshakes)', 'Gradual onset over weeks', 'Morning stiffness at elbow'],
    ['Point tenderness over lateral epicondyle', 'Pain with resisted wrist extension (Cozen test)', 'Pain with resisted middle finger extension (Maudsley test)', 'Full passive ROM'],
    'Clinical diagnosis primarily. X-rays to exclude other pathology. Ultrasound shows tendon thickening and hypoechogenicity. MRI for refractory cases.',
    'Activity modification, counterforce brace (forearm strap), eccentric wrist extension exercises, NSAIDs. Corticosteroid injection for short-term relief only.',
    'Rarely needed (<5%). Debridement of degenerated ECRB tendon considered after 6-12 months failed conservative care.',
    'Eccentric wrist extension with light dumbbell (Tyler twist with FlexBar), progressive grip strengthening, forearm stretching.',
    '6-12 months for full recovery with consistent therapy. 80-95% resolve without surgery.',
    'Use a forearm strap 2 inches below the elbow during aggravating activities. Ice for 15 minutes after activity.',
  ),

  'golfers-elbow': orth(
    'golfers-elbow', 'Medial Epicondylitis (Golfer\'s Elbow)', 'Epicondilitis medial (codo de golfista)', 'elbow',
    'Overuse tendinopathy of the common flexor-pronator origin at the medial epicondyle, less common than lateral epicondylitis.',
    'Common flexor tendons (pronator teres, FCR, palmaris longus, FDS) originate at the medial epicondyle. Ulnar nerve runs in the cubital tunnel just posterior.',
    'Repetitive wrist flexion, forearm pronation, and gripping. Common in golf, throwing sports, racquet sports, and occupational overhead hammering.',
    ['Medial elbow pain with gripping or wrist flexion', 'Pain radiating into forearm', 'Weakness of grip', 'Numbness in ring/small fingers if ulnar nerve involved'],
    ['Point tenderness at medial epicondyle', 'Pain with resisted wrist flexion and pronation', 'Assess ulnar nerve (Tinel at cubital tunnel)', 'Valgus stress test to exclude UCL injury'],
    'Clinical diagnosis. X-rays to exclude medial epicondyle avulsion. Ultrasound or MRI for refractory cases or ulnar nerve assessment.',
    'Similar to lateral epicondylitis: activity modification, wrist splint, eccentric exercises, NSAIDs. Caution with injections near ulnar nerve.',
    'Rare. Debridement of degenerated tendon and possible ulnar nerve transposition if concurrent neuropathy, after 6-12 months failed conservative care.',
    'Eccentric wrist flexion exercises, progressive grip strengthening, forearm pronator stretching, gradual sport-specific retraining.',
    '3-6 months with conservative care for most patients. May take up to 12 months for complete resolution.',
    'Warm up forearm muscles before activity. If tingling in your ring and small fingers develops, report this — it may indicate ulnar nerve involvement.',
  ),
  // --- HAND/WRIST (3) ---

  'carpal-tunnel': orth(
    'carpal-tunnel', 'Carpal Tunnel Syndrome', 'Sindrome del tunel carpiano', 'hand-wrist',
    'Compression of the median nerve within the carpal tunnel causing hand numbness, tingling, and weakness in the median nerve distribution.',
    'The carpal tunnel is bound by carpal bones dorsally and the transverse carpal ligament volarly. It contains 9 flexor tendons and the median nerve.',
    'Increased pressure from tenosynovitis, fluid retention (pregnancy, hypothyroidism), repetitive wrist flexion/extension, wrist fracture malunion, or idiopathic.',
    ['Numbness and tingling in thumb, index, middle, and radial ring finger', 'Night symptoms (waking with numb hands)', 'Dropping objects', 'Thenar atrophy in advanced cases'],
    ['Positive Phalen test (wrist flexion for 60 seconds)', 'Positive Tinel sign at carpal tunnel', 'Two-point discrimination testing', 'Thenar muscle strength and bulk assessment'],
    'Electrodiagnostic studies (EMG/NCS) confirm diagnosis and grade severity. Ultrasound shows nerve swelling (cross-section >10mm2). X-rays if fracture suspected.',
    'Night wrist splint in neutral position, activity modification, NSAIDs, corticosteroid injection into carpal tunnel. Nerve gliding exercises.',
    'Failed conservative care after 3-6 months, thenar atrophy, severe electrodiagnostic findings, constant numbness affecting function.',
    'Nerve and tendon gliding exercises, grip strengthening after surgical release, scar massage post-operatively, ergonomic modifications.',
    'Splinting relief in 2-4 weeks. Post-carpal tunnel release: grip strength returns in 6-12 weeks, full recovery 3-6 months.',
    'Wear your wrist splint at night — most nerve compression happens during sleep. Keep your wrists in a neutral position when typing or using a mouse.',
  ),

  'trigger-finger': orth(
    'trigger-finger', 'Trigger Finger (Stenosing Tenosynovitis)', 'Dedo en gatillo (tenosinovitis estenosante)', 'hand-wrist',
    'Stenosis of the A1 pulley of a flexor tendon causing painful clicking, catching, or locking of the affected digit during flexion.',
    'Flexor tendons glide through a series of annular and cruciform pulleys. The A1 pulley at the metacarpal head is the most common site of narrowing.',
    'Repetitive gripping activities cause tendon inflammation and thickening. More common in diabetics, women over 50, and patients with rheumatoid arthritis.',
    ['Painful clicking or snapping during finger bending', 'Finger locking in flexed position requiring passive extension', 'Morning stiffness of the finger', 'Tender nodule at the base of the finger in the palm'],
    ['Palpable nodule over A1 pulley at distal palmar crease', 'Triggering or locking with active flexion/extension', 'Tenderness at metacarpal head (palm side)', 'Assess all digits and both hands'],
    'Clinical diagnosis. No imaging typically needed. X-rays if concerned about underlying joint pathology. Ultrasound can show tendon thickening and pulley abnormalities.',
    'Activity modification, buddy splinting or MCP extension splint, NSAIDs, corticosteroid injection into tendon sheath (70-90% effective with one or two injections).',
    'Failed 2-3 corticosteroid injections, locked digit that cannot be passively extended, diabetic patients (lower injection success rate).',
    'Gentle active ROM exercises after injection or surgery, tendon gliding exercises, grip strengthening at 2-4 weeks post-operatively.',
    'Post-injection: days to 2 weeks. Post-A1 pulley release surgery: 2-4 weeks for light use, 6 weeks for full grip activities.',
    'Gently massage the nodule at the base of your finger several times daily. Corticosteroid injection is very effective and worth trying before considering surgery.',
  ),

  'de-quervain': orth(
    'de-quervain', 'De Quervain\'s Tenosynovitis', 'Tenosinovitis de De Quervain', 'hand-wrist',
    'Inflammation of the first dorsal compartment tendons (APL and EPB) at the radial styloid causing radial-sided wrist pain.',
    'The first dorsal compartment contains the abductor pollicis longus (APL) and extensor pollicis brevis (EPB) tendons passing over the radial styloid.',
    'Repetitive thumb use with ulnar deviation (e.g., lifting a baby, texting). Common in new mothers and those with repetitive pinch-grip activities.',
    ['Radial-sided wrist pain worse with thumb use', 'Pain radiating up the forearm or into the thumb', 'Swelling over the radial styloid', 'Difficulty gripping or pinching'],
    ['Positive Finkelstein test (ulnar deviation with thumb in fist)', 'Tenderness and swelling over first dorsal compartment', 'Pain with resisted thumb extension and abduction', 'Eichhoff test (modified Finkelstein)'],
    'Clinical diagnosis. X-rays to exclude scaphoid fracture or CMC arthritis. Ultrasound can show tendon sheath thickening and septation within the compartment.',
    'Thumb spica splint, activity modification, NSAIDs, corticosteroid injection into first dorsal compartment (up to 80% effective). Avoid repetitive thumb motions.',
    'Failed 1-2 corticosteroid injections, persistent symptoms after 3-6 months conservative care. First dorsal compartment release surgery.',
    'Thumb ROM exercises after immobilization, progressive grip and pinch strengthening, tendon gliding exercises, ergonomic modifications.',
    'Post-injection: 2-4 weeks. Post-surgical release: 4-6 weeks for light activities, 2-3 months for full use.',
    'If you are a new parent, try supporting the baby\'s head with your palm instead of just your thumb. A thumb spica brace can provide significant relief.',
  ),
  // --- HIP (3) ---

  'hip-osteoarthritis': orth(
    'hip-osteoarthritis', 'Hip Osteoarthritis', 'Artrosis de cadera', 'hip',
    'Degenerative joint disease of the hip with progressive cartilage loss, osteophyte formation, and joint space narrowing causing pain and disability.',
    'The hip is a ball-and-socket joint with articular cartilage covering the femoral head and acetabulum. Labrum deepens the socket and aids stability.',
    'Primary: age-related wear, genetic predisposition, obesity. Secondary: hip dysplasia, Legg-Calve-Perthes, femoroacetabular impingement, trauma, avascular necrosis.',
    ['Groin pain (most specific location)', 'Stiffness especially in the morning (less than 30 minutes)', 'Difficulty with stairs, putting on shoes/socks', 'Progressive decreased walking distance'],
    ['Antalgic gait (shortened stance phase)', 'Reduced internal rotation (earliest and most sensitive)', 'Log roll test reproduces groin pain', 'Trendelenburg sign if abductor weakness', 'FABER test positive'],
    'Weight-bearing X-rays (AP pelvis and lateral hip) show joint space narrowing, osteophytes, subchondral sclerosis, and cysts. MRI for early OA or labral pathology.',
    'Weight management, low-impact exercise (swimming, cycling), PT for hip strengthening and ROM, NSAIDs or acetaminophen, cane in contralateral hand, intra-articular corticosteroid injection.',
    'Failed conservative care with significant functional limitation, night pain disturbing sleep, radiographic evidence of advanced arthritis. Total hip arthroplasty.',
    'Hip abductor and quadriceps strengthening, aquatic therapy, flexibility exercises, gait training, fall prevention.',
    'Conservative management is ongoing. Post-total hip replacement: 6 weeks for driving, 3 months for most activities, 6-12 months for full recovery.',
    'Keeping active is the best medicine for hip arthritis. Use a cane in the opposite hand. Swimming and cycling are excellent exercises that spare the hip joint.',
  ),

  'hip-fracture': orth(
    'hip-fracture', 'Hip Fracture', 'Fractura de cadera', 'hip',
    'Fracture of the proximal femur (femoral neck or intertrochanteric), a major cause of morbidity and mortality in elderly patients.',
    'Proximal femur includes the femoral head, neck, and trochanters. Blood supply via medial femoral circumflex artery is vulnerable in neck fractures (avascular necrosis risk).',
    'Low-energy fall in osteoporotic elderly patients (most common). High-energy trauma in younger patients. Stress fractures in runners and military recruits.',
    ['Inability to bear weight after fall', 'Hip and groin pain', 'Shortened and externally rotated leg (displaced fractures)', 'May have only vague hip pain in non-displaced fractures'],
    ['Leg length discrepancy (shortened)', 'External rotation deformity', 'Pain with axial loading and log roll', 'Unable to perform straight leg raise', 'Assess neurovascular status'],
    'X-rays (AP pelvis and cross-table lateral) diagnostic in most cases. MRI for occult fractures when X-rays negative but clinical suspicion high. CT for surgical planning.',
    'Surgical fixation is standard of care for almost all hip fractures. Medical optimization within 24-48 hours. DVT prophylaxis, pain management, early mobilization.',
    'Nearly all hip fractures require surgery. Femoral neck: hemiarthroplasty (elderly) or fixation (young). Intertrochanteric: cephalomedullary nail or sliding hip screw.',
    'Early weight bearing as tolerated, gait training with walker progressing to cane, hip strengthening, balance training, fall prevention strategies.',
    'Partial weight bearing immediately post-op. Walker for 4-6 weeks, cane for 6-12 weeks. Pre-fracture function level reached in 3-6 months (many never fully recover).',
    'Surgery is almost always necessary and should be done within 48 hours. Early movement after surgery is critical. Focus on fall prevention to prevent future fractures.',
  ),

  'labral-tear': orth(
    'labral-tear', 'Hip Labral Tear', 'Desgarro del labrum de cadera', 'hip',
    'Tear of the fibrocartilaginous labrum lining the acetabular rim, often associated with femoroacetabular impingement (FAI).',
    'The labrum is a fibrocartilaginous ring attached to the acetabular rim, deepening the socket by 22% and providing a suction seal for joint stability.',
    'Femoroacetabular impingement (cam or pincer type), hip dysplasia, trauma, repetitive pivoting or twisting motions. Common in athletes and dancers.',
    ['Deep anterior groin pain or catching sensation', 'Pain with prolonged sitting', 'Clicking or locking of the hip', 'Sharp pain with pivoting or twisting motions'],
    ['Anterior impingement test (FADIR: flexion, adduction, internal rotation)', 'FABER test positive', 'Log roll reproduces symptoms', 'Assess for cam or pincer morphology on exam'],
    'X-rays to assess bony morphology (cam or pincer lesion, dysplasia). MR arthrography (MRA) is gold standard for labral tears with 90%+ sensitivity.',
    'Activity modification, NSAIDs, PT focusing on hip stability and addressing muscle imbalances, intra-articular injection (diagnostic and therapeutic).',
    'Failed 3-6 months conservative care with confirmed labral tear on MRA. Hip arthroscopy for labral repair (preferred over debridement) and FAI correction.',
    'Protected weight bearing for 2-4 weeks post-arthroscopy, stationary cycling at 1 week, progressive hip strengthening at 6 weeks, sport-specific training at 3-4 months.',
    'Conservative: 6-12 weeks. Post-arthroscopy: 4-6 months for return to sport. Full recovery up to 9-12 months.',
    'Avoid deep squats and positions that cause the catching or clicking sensation. Strengthening the hip muscles can significantly reduce symptoms.',
  ),
  // --- KNEE (4) ---

  'acl-tear': orth(
    'acl-tear', 'ACL Tear', 'Desgarro del ligamento cruzado anterior', 'knee',
    'Rupture of the anterior cruciate ligament, the primary restraint to anterior tibial translation, common in pivoting sports.',
    'The ACL runs from the posterolateral femoral condyle to the anteromedial tibial plateau, preventing anterior translation and rotational instability.',
    'Non-contact pivot or deceleration (70%), valgus force with rotation, hyperextension. More common in females (3-5x) due to anatomy, hormones, and neuromuscular factors.',
    ['Audible pop at time of injury', 'Rapid knee swelling within hours (hemarthrosis)', 'Feeling of knee instability or "giving way"', 'Inability to continue playing'],
    ['Positive Lachman test (most sensitive)', 'Positive anterior drawer test', 'Positive pivot shift test (most specific)', 'Assess for associated meniscus and MCL injury (O\'Donoghue triad)'],
    'MRI is 95%+ sensitive and specific. X-rays to exclude fracture (Segond fracture is pathognomonic). MRI also evaluates menisci, cartilage, and other ligaments.',
    'Acute: RICE, crutches, hinged knee brace, early ROM. Long-term decision between reconstruction and conservative (rehab-focused) management based on patient factors.',
    'Active patients who want to return to cutting/pivoting sports, recurrent instability despite rehabilitation, associated repairable meniscus tear.',
    'Pre-hab before surgery (regain ROM and quad strength), post-op progressive protocol: ROM weeks 1-6, strengthening months 2-4, running at 4-6 months, sport-specific 6-9 months.',
    'Return to sport: 9-12 months post-reconstruction with objective criteria (quad strength >90% limb symmetry, hop tests, functional assessment). Non-operative: 3-6 months of rehab.',
    'Whether you choose surgery or not, rehabilitation is the most important factor. Pre-surgery exercises improve post-surgical outcomes significantly.',
  ),

  'meniscus-tear': orth(
    'meniscus-tear', 'Meniscus Tear', 'Desgarro de menisco', 'knee',
    'Tear of the medial or lateral meniscus, C-shaped fibrocartilage structures that provide shock absorption, stability, and load distribution in the knee.',
    'Medial and lateral menisci sit on the tibial plateau. Outer third (red zone) has blood supply and healing potential; inner two-thirds (white zone) is avascular.',
    'Acute twisting injury in young athletes. Degenerative tears from age-related wear in patients over 40 (may occur with minimal trauma like squatting).',
    ['Knee pain along the joint line', 'Mechanical catching or locking (bucket handle tear)', 'Swelling (often delayed 24 hours)', 'Pain with squatting or twisting'],
    ['Joint line tenderness (medial or lateral)', 'Positive McMurray test (click with rotation during extension)', 'Positive Thessaly test', 'Assess for associated ligament injury and effusion'],
    'MRI is 90-95% sensitive and specific. X-rays to evaluate joint space and arthritis. Standing X-rays for alignment assessment.',
    'Degenerative tears: PT, NSAIDs, activity modification (equal outcomes to surgery at 1-2 years). Acute traumatic tears: RICE initially, then determine repair vs. conservative.',
    'Locked knee (bucket handle tear — urgent), repairable tear in young patient (red zone), failed 6-8 weeks conservative care with mechanical symptoms.',
    'Post-meniscectomy: immediate weight bearing, ROM and quad strengthening. Post-repair: protected weight bearing 4-6 weeks, no deep flexion for 3 months.',
    'Post-partial meniscectomy: 4-6 weeks. Post-meniscus repair: 3-6 months (slower to protect repair). Conservative: 6-12 weeks of therapy.',
    'Not all meniscus tears need surgery. Many degenerative tears in patients over 40 respond well to physical therapy alone.',
  ),

  'knee-osteoarthritis': orth(
    'knee-osteoarthritis', 'Knee Osteoarthritis', 'Artrosis de rodilla', 'knee',
    'Degenerative joint disease of the knee with cartilage loss, osteophyte formation, and joint space narrowing. Most common joint affected by OA.',
    'The knee has three compartments: medial tibiofemoral (most commonly affected), lateral tibiofemoral, and patellofemoral. Menisci and cartilage distribute load.',
    'Age-related wear, obesity (3-6x risk), previous knee injury (ACL, meniscus), malalignment (varus increases medial compartment load), genetic predisposition.',
    ['Pain worse with weight bearing and activity', 'Morning stiffness lasting less than 30 minutes', 'Crepitus with movement', 'Progressive stiffness and reduced ROM', 'Bony enlargement of the knee'],
    ['Crepitus with ROM', 'Bony enlargement at joint margins', 'Joint line tenderness', 'Varus or valgus malalignment', 'Assess for effusion (patellar ballottement)'],
    'Weight-bearing X-rays (standing AP, lateral, Rosenberg/PA flexion view). Kellgren-Lawrence grading (0-4). MRI not routinely needed for diagnosis.',
    'Core treatments: exercise (quad strengthening critical), weight loss, PT. Medications: topical NSAIDs, oral NSAIDs, acetaminophen. Injections: corticosteroid, hyaluronic acid, PRP.',
    'Failed conservative care with significant functional limitation and radiographic evidence. Total knee arthroplasty (TKA) or unicompartmental for isolated disease.',
    'Quadriceps and hamstring strengthening, low-impact aerobic exercise, ROM exercises, balance training, aquatic therapy, weight management.',
    'Conservative: ongoing management. Post-TKA: walking day of surgery, driving at 4-6 weeks, most activities by 3 months, full recovery 6-12 months.',
    'Losing even 10 pounds significantly reduces knee pain. Quad strengthening is the single most important exercise — it acts like a shock absorber for your knee.',
  ),

  'patellofemoral-syndrome': orth(
    'patellofemoral-syndrome', 'Patellofemoral Pain Syndrome', 'Sindrome de dolor patelofemoral', 'knee',
    'Anterior knee pain arising from the patellofemoral joint, the most common cause of knee pain in young active patients and adolescents.',
    'The patella tracks in the trochlear groove of the femur. VMO (vastus medialis obliquus) and lateral retinaculum control patellar tracking.',
    'Multifactorial: quadriceps weakness (especially VMO), tight lateral structures, hip abductor weakness, overuse, increased Q-angle, flat feet.',
    ['Anterior knee pain worse with stairs (especially descending)', 'Pain with prolonged sitting (theater sign)', 'Pain with squatting or kneeling', 'Occasional knee buckling or giving way'],
    ['Patellar compression test (Clarke test)', 'Patellar tilt and glide assessment', 'J-sign (lateral patellar tracking)', 'Assess VMO atrophy and hip abductor strength', 'Q-angle measurement'],
    'Clinical diagnosis primarily. X-rays (sunrise/Merchant view) for patellar tilt or subluxation. MRI if symptoms persist to evaluate cartilage and rule out other pathology.',
    'PT is the cornerstone: VMO strengthening, hip abductor strengthening, IT band and quad stretching, patellar taping (McConnell). Activity modification, NSAIDs, foot orthotics if needed.',
    'Rarely surgical. Lateral retinacular release for severe tilt (controversial). Tibial tubercle transfer for recurrent subluxation with malalignment.',
    'Progressive quad strengthening (emphasis on VMO), hip strengthening (gluteus medius), hamstring and IT band stretching, closed-chain exercises preferred.',
    '6-12 weeks with consistent PT. Full return to sports once pain-free with sport-specific activities. Long-term maintenance exercises recommended.',
    'Strengthen your hips, not just your quads — weak hip muscles are a hidden cause of kneecap pain. Avoid deep squats and lunges until pain improves.',
  ),
  // --- ANKLE/FOOT (3) ---

  'ankle-sprain': orth(
    'ankle-sprain', 'Ankle Sprain (Grading)', 'Esguince de tobillo (clasificacion)', 'ankle-foot',
    'Ligament injury of the ankle, most commonly lateral (ATFL), graded I (stretch), II (partial tear), III (complete tear).',
    'Lateral ligaments: ATFL (weakest, most commonly injured), CFL, PTFL. Medial: deltoid ligament (stronger). Syndesmosis: anterior/posterior tibiofibular ligaments.',
    'Inversion mechanism for lateral sprains (85%). Eversion for medial/deltoid. External rotation for syndesmotic (high ankle sprain). Uneven surfaces, prior sprains.',
    ['Lateral ankle pain and swelling after twisting injury', 'Difficulty bearing weight (grade II-III)', 'Bruising appearing within 24-48 hours', 'Feeling of ankle instability'],
    ['Anterior drawer test (ATFL)', 'Talar tilt test (CFL)', 'Squeeze test (syndesmosis)', 'Ottawa ankle rules for X-ray decision', 'Palpate base of 5th metatarsal and navicular'],
    'X-rays per Ottawa rules (bony tenderness, inability to bear weight). Stress X-rays for chronic instability. MRI for persistent symptoms or suspected syndesmotic injury.',
    'Grade I: RICE, early weight bearing, ankle brace. Grade II: walking boot for 1-2 weeks, then brace. Grade III: walking boot 2-4 weeks. All grades: PT for proprioception and strengthening.',
    'Chronic lateral ankle instability after 3-6 months of rehab (modified Brostrom repair). Syndesmotic injuries may need fixation. Osteochondral lesions.',
    'Early ankle ROM exercises, progressive weight bearing, peroneal strengthening, proprioception training (balance board), sport-specific agility drills.',
    'Grade I: 1-2 weeks. Grade II: 3-6 weeks. Grade III: 6-12 weeks. High ankle sprain: 6-12 weeks. Return when able to hop pain-free.',
    'Ankle sprains are not "just sprains" — proper rehabilitation prevents chronic instability. Balance board exercises are the single best prevention tool.',
  ),

  'plantar-fasciitis': orth(
    'plantar-fasciitis', 'Plantar Fasciitis', 'Fascitis plantar', 'ankle-foot',
    'Degeneration and microtearing of the plantar fascia at its calcaneal origin, the most common cause of heel pain in adults.',
    'The plantar fascia is a thick fibrous band running from the medial calcaneal tuberosity to the metatarsal heads, supporting the medial longitudinal arch.',
    'Repetitive loading with risk factors: obesity, prolonged standing, tight Achilles tendon, flat feet or high arches, sudden increase in activity.',
    ['Sharp heel pain with first morning steps (start-up pain)', 'Pain after prolonged sitting then standing', 'Pain at medial calcaneal tuberosity', 'Gradual improvement with walking then returns after prolonged activity'],
    ['Point tenderness at medial calcaneal tuberosity', 'Pain with passive dorsiflexion of toes (windlass test)', 'Tight Achilles tendon/gastrocnemius', 'Assess arch height and foot pronation'],
    'Clinical diagnosis. X-rays may show heel spur (not causative, found in 50% asymptomatic patients). Ultrasound shows thickened fascia (>4mm). MRI for refractory cases.',
    'Stretching (calf and plantar fascia), supportive footwear, heel cups or arch support orthotics, night splint, NSAIDs, ice massage. Corticosteroid injection cautiously (rupture risk).',
    'Very rarely needed. Partial plantar fasciotomy or gastrocnemius recession after 12 months of failed conservative care. ESWT (extracorporeal shock wave therapy) is an intermediate option.',
    'Plantar fascia-specific stretching (towel curls, marble pickups), calf stretching (gastrocnemius and soleus), intrinsic foot strengthening, gradual return to impact activities.',
    '6-12 months for full resolution with consistent conservative care. 90% improve without surgery. Night splinting accelerates recovery.',
    'Stretch your calves and roll a frozen water bottle under your foot before getting out of bed. Never walk barefoot on hard surfaces during recovery.',
  ),

  'achilles-tendinopathy': orth(
    'achilles-tendinopathy', 'Achilles Tendinopathy', 'Tendinopatia del tendon de Aquiles', 'ankle-foot',
    'Chronic degenerative condition of the Achilles tendon (not primarily inflammatory), presenting as midsubstance or insertional pain.',
    'The Achilles tendon is the largest tendon, formed by the gastrocnemius and soleus. The watershed zone (2-6cm above insertion) has poorest blood supply.',
    'Overuse with repetitive loading (runners), sudden increase in training intensity or hill work, tight calf muscles, fluoroquinolone antibiotics, age-related degeneration.',
    ['Posterior heel or mid-calf pain during and after activity', 'Morning stiffness in the tendon', 'Gradual onset and progressive worsening', 'Tendon thickening or nodularity'],
    ['Tendon thickening at midsubstance (2-6cm above insertion)', 'Royal London Hospital test (pain with palpation decreases with dorsiflexion)', 'Thompson test negative (rules out rupture)', 'Assess calf flexibility and single-leg heel raise ability'],
    'Clinical diagnosis. Ultrasound shows tendon thickening, hypoechoic areas, and neovascularization. MRI for surgical planning or if diagnosis uncertain. X-rays for insertional calcification.',
    'Eccentric calf exercises (Alfredson protocol: 180 reps/day for 12 weeks), activity modification, heel lifts, avoid flat shoes, NSAIDs for short-term only. Avoid corticosteroid injection (rupture risk).',
    'Failed 6 months of eccentric loading program. Options include debridement, FHL tendon transfer (insertional), or minimally invasive procedures like TENEX.',
    'Eccentric heel drops (straight and bent knee), progressive calf strengthening, gradual return-to-running program, gait analysis and retraining.',
    '3-6 months with Alfredson eccentric protocol. 12+ months for some patients. Return to running gradually using 10% rule for weekly mileage increase.',
    'Eccentric heel drops are the gold standard treatment — do them consistently even though they may initially increase soreness. Patience is essential.',
  ),
  // --- FRACTURES (4) ---

  'colles-fracture': orth(
    'colles-fracture', 'Colles Fracture (Distal Radius)', 'Fractura de Colles (radio distal)', 'fracture',
    'Dorsally displaced, dorsally angulated fracture of the distal radius metaphysis, producing the classic "dinner fork" deformity.',
    'The distal radius articulates with the scaphoid and lunate (radiocarpal joint) and the ulna (DRUJ). It bears 80% of axial load across the wrist.',
    'Fall on outstretched hand (FOOSH) with wrist in extension. Bimodal: younger patients (high energy) and elderly osteoporotic patients (low energy fall).',
    ['Wrist pain and swelling after fall', 'Visible deformity (dorsal displacement)', 'Inability to grip or move wrist', 'Numbness in median nerve distribution possible'],
    ['Dorsal displacement and dinner fork deformity', 'Tenderness over distal radius', 'Assess median nerve function (acute carpal tunnel)', 'Evaluate DRUJ stability', 'Check for associated ulnar styloid fracture'],
    'PA and lateral X-rays of the wrist. Assess radial height, radial inclination, volar tilt, and ulnar variance. CT for intra-articular fractures and surgical planning.',
    'Non-displaced/stable: closed reduction and casting (sugar tong splint then short arm cast) for 6 weeks. Monitor with weekly X-rays for first 2-3 weeks for displacement.',
    'Intra-articular displacement >2mm, dorsal tilt >10 degrees, radial shortening >3mm, or loss of reduction. Volar locking plate fixation is most common.',
    'Finger and elbow ROM immediately, wrist ROM at cast removal or 6 weeks post-surgery, progressive grip strengthening, occupational therapy for fine motor tasks.',
    'Cast removal at 6 weeks; functional use by 8-10 weeks. Post-surgical fixation: earlier ROM (2 weeks). Full strength returns at 3-6 months.',
    'Keep your fingers moving while in a cast to prevent stiffness. Elevate above heart level for the first week to minimize swelling.',
  ),

  'ankle-fracture': orth(
    'ankle-fracture', 'Ankle Fracture', 'Fractura de tobillo', 'fracture',
    'Fracture of the malleoli (lateral fibula, medial tibia, posterior tibia), classified by Weber (fibula level) or Lauge-Hansen (mechanism).',
    'The ankle mortise is formed by the tibial plafond, medial malleolus, and lateral malleolus. Stability depends on bony and ligamentous integrity of the ring.',
    'Rotational forces on the planted foot. Supination-external rotation is the most common mechanism. Falls, sports injuries, and motor vehicle accidents.',
    ['Ankle pain and inability to bear weight', 'Rapid swelling and bruising', 'Visible deformity if displaced', 'Pain over malleoli and deltoid ligament'],
    ['Point tenderness over fracture site', 'Assess for medial clear space widening (deltoid injury)', 'Evaluate syndesmosis (squeeze test, external rotation test)', 'Check neurovascular status and skin integrity (open fracture)'],
    'AP, lateral, and mortise view X-rays. CT for complex fracture patterns, posterior malleolus involvement, and surgical planning. Stress views if ligament injury suspected.',
    'Stable, non-displaced (Weber A, isolated lateral malleolus): short leg cast or walking boot for 6 weeks with weight bearing as tolerated.',
    'Unstable patterns (bimalleolar, trimalleolar, displaced), talar shift >2mm, Weber B/C with syndesmotic injury. ORIF with plate and screws.',
    'Early ankle ROM when fixation stable, progressive weight bearing, calf and peroneal strengthening, proprioception training, gait normalization.',
    'Non-operative: 6-8 weeks in boot. Post-ORIF: weight bearing at 6 weeks, full activities at 3-4 months, hardware removal if symptomatic at 1 year.',
    'Elevate and ice for the first 48-72 hours to control swelling. Once allowed, move your ankle to prevent stiffness — gentle motion aids healing.',
  ),

  'stress-fracture': orth(
    'stress-fracture', 'Stress Fracture', 'Fractura por estres', 'fracture',
    'Overuse injury where repetitive submaximal loading exceeds the bone remodeling capacity, most common in the tibia and metatarsals.',
    'Bone continuously remodels in response to mechanical load (Wolff\'s law). When osteoclastic resorption outpaces osteoblastic formation, microdamage accumulates.',
    'Sudden increase in training volume or intensity, change in surface or footwear, biomechanical factors, female athlete triad (low energy availability, menstrual dysfunction, low BMD).',
    ['Activity-related pain that improves with rest', 'Gradual onset localized pain', 'Pain progresses from end-of-activity to during-activity to rest pain', 'Mild localized swelling'],
    ['Point tenderness over fracture site', 'Positive hop test (single-leg hop reproduces pain)', 'Tuning fork or ultrasound test (low sensitivity)', 'Fulcrum test for femoral shaft stress fractures'],
    'X-rays often initially normal (may show periosteal reaction at 2-3 weeks). MRI is gold standard (shows bone edema early). Bone scan sensitive but less specific.',
    'Activity modification (relative rest), protected weight bearing if needed, address risk factors (nutrition, vitamin D, calcium, training errors). Classify as low-risk vs. high-risk.',
    'High-risk stress fractures (femoral neck tension side, anterior tibia, navicular, 5th metatarsal base) may require surgical fixation. Most others heal conservatively.',
    'Maintain fitness with non-impact activities (swimming, cycling), gradual return-to-running program starting at 50% and increasing 10% per week.',
    'Low-risk (tibial shaft, metatarsal): 6-8 weeks. High-risk (navicular, 5th metatarsal): 8-12 weeks. Femoral neck: 12-16 weeks. Return when pain-free with impact.',
    'Do not push through bone pain — early diagnosis leads to faster recovery. Ensure adequate calcium (1000-1200mg) and vitamin D (1000-2000 IU) intake daily.',
  ),

  'growth-plate-fracture': orth(
    'growth-plate-fracture', 'Pediatric Growth Plate Fracture (Salter-Harris)', 'Fractura de placa de crecimiento (Salter-Harris)', 'fracture',
    'Fracture involving the physis (growth plate) in children, classified by Salter-Harris system (Types I-V) with risk of growth disturbance.',
    'The physis (growth plate) is the weakest link in the pediatric musculoskeletal system. It has zones of resting, proliferating, hypertrophic, and provisional calcification cartilage.',
    'Trauma in children and adolescents. The hypertrophic zone is weakest. Same forces that cause ligament injuries in adults cause physeal fractures in children.',
    ['Pain and swelling around a joint after injury', 'Refusal to bear weight or use the extremity', 'Tenderness directly over the growth plate', 'Possible angular deformity'],
    ['Point tenderness over the physis (not the ligament)', 'Assess for angular deformity', 'Test ligament stability (may be intact despite fracture)', 'Compare to uninjured side', 'Neurovascular assessment'],
    'X-rays (AP and lateral, comparison views of uninjured side helpful). SH I may have normal X-rays (clinical diagnosis). MRI for suspected occult physeal injury. CT for complex fractures.',
    'SH I and II (most common, 75%): closed reduction and casting with good prognosis. SH III and IV: anatomic reduction required (often surgical) due to articular involvement.',
    'Salter-Harris III and IV fractures typically require ORIF for anatomic articular and physeal reduction. Displaced SH II fractures not reducible closed.',
    'Early ROM of adjacent joints, progressive weight bearing per fracture stability, age-appropriate strengthening, monitor for growth disturbance.',
    'SH I-II: 4-6 weeks in cast. SH III-IV: 6-8 weeks. Follow-up X-rays at 6-12 months to monitor for growth arrest. Full activities when healed and pain-free.',
    'Growth plate injuries in children need careful follow-up to ensure normal growth continues. Follow-up X-rays at 6 and 12 months are important to detect growth problems early.',
  ),
  // --- SPORTS INJURIES (3) ---

  'concussion': orth(
    'concussion', 'Concussion Management', 'Manejo de conmocion cerebral', 'sports-injury',
    'Mild traumatic brain injury from biomechanical forces causing functional (not structural) brain disturbance, requiring graded return-to-play protocol.',
    'The brain floats in cerebrospinal fluid within the skull. Acceleration-deceleration forces cause neuronal stretching and ionic/metabolic cascade disruption.',
    'Direct blow to the head, face, or neck. Indirect force transmitted to the head. Sports (football, soccer, hockey), falls, and motor vehicle accidents.',
    ['Headache (most common symptom)', 'Dizziness and balance problems', 'Confusion and difficulty concentrating', 'Nausea', 'Sensitivity to light and noise', 'Feeling foggy or slowed down'],
    ['SCAT6 (Sport Concussion Assessment Tool)', 'Neurological exam (cranial nerves, coordination)', 'Balance assessment (modified BESS)', 'Cognitive screening (orientation, memory, concentration)', 'Cervical spine assessment'],
    'CT for red flags (loss of consciousness >30 sec, seizure, worsening symptoms, focal deficits). Routine imaging is normal in concussion. MRI for prolonged symptoms.',
    'Physical and cognitive rest for 24-48 hours, then gradual return-to-learn and return-to-play protocols. Symptom-limited activity. Acetaminophen for headache (avoid NSAIDs initially).',
    'N/A for concussion. Neurosurgical consultation for intracranial hemorrhage, skull fracture, or deteriorating neurological status.',
    'Graduated return-to-play: symptom-limited activity, light aerobic exercise, sport-specific drills, non-contact training, full-contact practice, return to competition.',
    'Minimum 24-48 hours symptom-free before starting graded return-to-play. Each step takes minimum 24 hours. Most resolve in 10-14 days (adults), up to 4 weeks (adolescents).',
    'There is no way to "tough out" a concussion — rest and gradual return are essential. Do not return to play the same day as a suspected concussion.',
  ),

  'hamstring-strain': orth(
    'hamstring-strain', 'Hamstring Strain', 'Desgarro de isquiotibiales', 'sports-injury',
    'Muscle strain of the hamstring group (biceps femoris most common), graded I-III by severity, with high recurrence rate.',
    'Three muscles: biceps femoris (long and short heads), semimembranosus, semitendinosus. They cross both hip and knee joints (except short head of biceps).',
    'Eccentric overload during terminal swing phase of sprinting. Risk factors: previous hamstring injury (#1 risk factor), poor flexibility, strength imbalances, inadequate warm-up.',
    ['Sudden posterior thigh pain during sprinting or kicking', 'Popping sensation (grade II-III)', 'Difficulty walking (grade II-III)', 'Bruising extending distally over 24-48 hours'],
    ['Tenderness along hamstring muscle belly or proximal tendon', 'Pain and weakness with resisted knee flexion', 'Reduced passive straight leg raise compared to uninjured side', 'Palpable defect in grade III tears'],
    'Clinical diagnosis for most. MRI for proximal tendon avulsions, elite athletes, or recurrent injuries. Ultrasound for muscle belly tears. X-rays for ischial tuberosity avulsion.',
    'Grade I: RICE, gentle stretching, early progressive strengthening. Grade II: crutches as needed, progressive rehab. Grade III: consider surgical repair if complete proximal avulsion.',
    'Complete proximal tendon avulsion with >2cm retraction, especially in young active patients. Chronic refractory tendinopathy at ischial tuberosity.',
    'Progressive hamstring strengthening emphasizing eccentrics (Nordic hamstring exercise), hip extensor strengthening, sport-specific drills, running progression.',
    'Grade I: 1-3 weeks. Grade II: 4-8 weeks. Grade III: 3-6 months (longer if surgical). Criteria-based return: pain-free sprinting, >90% strength symmetry.',
    'The Nordic hamstring exercise is the gold standard for prevention and rehabilitation. Prior hamstring injury is the biggest risk factor — complete your rehab fully before returning.',
  ),

  'shin-splints': orth(
    'shin-splints', 'Shin Splints (Medial Tibial Stress Syndrome)', 'Periostitis tibial (sindrome de estres tibial medial)', 'sports-injury',
    'Exercise-induced pain along the posteromedial tibial border from periosteal inflammation, the most common cause of exertional leg pain in runners.',
    'The tibialis posterior, soleus, and flexor digitorum longus attach along the posteromedial tibial border. Traction periostitis occurs at these insertions.',
    'Sudden increase in running volume or intensity, running on hard surfaces, improper footwear, overpronation, weak hip abductors and calf muscles.',
    ['Diffuse pain along the medial tibial border (middle-distal third)', 'Pain at start of activity that may warm up initially', 'Progressive pain that eventually persists during activity', 'Mild swelling along the tibia'],
    ['Diffuse tenderness along >5cm of posteromedial tibial border (distinguishes from stress fracture)', 'Pain with resisted plantarflexion', 'Assess foot pronation and arch height', 'Evaluate running shoes for wear pattern'],
    'Clinical diagnosis. X-rays to exclude stress fracture. MRI shows periosteal edema along the tibial border (vs. focal marrow edema in stress fracture). Bone scan shows linear uptake.',
    'Relative rest (reduce running by 50%), cross-training with low-impact activities, ice massage, calf stretching and eccentric strengthening, arch support orthotics if overpronation present.',
    'Not applicable. Chronic exertional compartment syndrome (a different diagnosis) may require fasciotomy if confirmed by compartment pressure testing.',
    'Calf raises (eccentric emphasis), toe raises, hip abductor strengthening, arch strengthening exercises, gradual return-to-running program.',
    '2-6 weeks with activity modification. Gradual return to running: start with run-walk intervals, increase by no more than 10% per week.',
    'Do not increase your running mileage by more than 10% per week. Replace running shoes every 300-500 miles. Strengthening your calves is the best prevention.',
  ),
  // --- PEDIATRIC ORTHOPEDICS (2) ---

  'ddh': orth(
    'ddh', 'Developmental Dysplasia of the Hip (DDH)', 'Displasia del desarrollo de cadera (DDC)', 'pediatric-ortho',
    'Spectrum of hip abnormalities ranging from mild acetabular dysplasia to complete dislocation, detected through newborn screening.',
    'The neonatal hip is largely cartilaginous. The acetabulum develops in response to the concentric presence of the femoral head. Dysplasia leads to shallow socket.',
    'Multifactorial: ligamentous laxity (maternal hormones), breech positioning, firstborn status, female sex (4-8x), family history, swaddling with hips extended.',
    ['Detected on newborn screening exam', 'Asymmetric thigh skin folds', 'Leg length discrepancy', 'Limited hip abduction in older infants', 'Waddling gait if missed (walking age)'],
    ['Barlow test (provocative — dislocates unstable hip)', 'Ortolani test (reduction — relocates dislocated hip)', 'Galeazzi sign (apparent femoral shortening)', 'Limited abduction after 3 months of age', 'Klisic test'],
    'Ultrasound for infants under 4-6 months (Graf classification). X-rays after 4-6 months when ossification center appears. Shenton line disruption, acetabular index measurement.',
    'Pavlik harness for infants 0-6 months (90% success rate for Ortolani-positive hips). Maintains flexion and abduction. Weekly ultrasound monitoring.',
    'Failed Pavlik harness treatment, late presentation (>6 months), irreducible dislocation. Closed reduction under anesthesia with spica cast, or open reduction if needed.',
    'Supervised hip ROM after harness or cast removal, age-appropriate developmental activities, hip abduction exercises, monitor for avascular necrosis.',
    'Pavlik harness: worn full-time for 6-12 weeks, then weaning. Post-surgical: spica cast for 6-12 weeks. Monitor until skeletal maturity for residual dysplasia.',
    'Proper swaddling allows hip flexion and abduction — the legs should not be wrapped straight. Early detection and treatment leads to excellent outcomes.',
  ),

  'osgood-schlatter': orth(
    'osgood-schlatter', 'Osgood-Schlatter Disease', 'Enfermedad de Osgood-Schlatter', 'pediatric-ortho',
    'Traction apophysitis of the tibial tubercle at the patellar tendon insertion, occurring during adolescent growth spurts.',
    'The tibial tubercle is a secondary ossification center where the patellar tendon inserts. During growth, this apophysis is the weakest link in the extensor mechanism.',
    'Repetitive traction from the patellar tendon during jumping, running, and kneeling activities combined with rapid skeletal growth. Common in active adolescents ages 10-15.',
    ['Anterior knee pain at the tibial tubercle', 'Pain worse with running, jumping, kneeling, and stair climbing', 'Prominent or swollen tibial tubercle', 'Pain relieved with rest'],
    ['Point tenderness and swelling at tibial tubercle', 'Pain with resisted knee extension', 'Prominent tibial tubercle (bony bump)', 'Full knee ROM', 'Tight quadriceps (Ely test)'],
    'Clinical diagnosis. X-rays show fragmentation or prominence of the tibial tubercle apophysis. X-rays mainly to exclude other pathology (tumor, fracture).',
    'Activity modification (not complete rest), ice after activity, quad and hamstring stretching, patellar tendon strap, NSAIDs for flares. Protective knee pad for kneeling.',
    'Exceedingly rare. Excision of painful ossicle considered only after skeletal maturity if persistent symptoms despite prolonged conservative care.',
    'Quadriceps and hamstring stretching, progressive lower extremity strengthening, activity modification rather than complete sports restriction.',
    'Self-limited condition resolving with skeletal maturity (typically 12-18 months). Symptoms may wax and wane with activity levels. The bump may persist permanently.',
    'This is a self-limiting condition that will resolve when growth is complete. Your child does not need to stop all sports — just manage activity levels to keep pain tolerable.',
  ),
};

// --- Query Functions ---

/** Get a single ortho entry by ID */
export function getOrthoEntry(id: string): OrthoEntry | undefined {
  return ORTHO_ENTRIES[id];
}

/** Search entries by keyword across name, summary, anatomy, and symptoms */
export function searchOrtho(query: string): OrthoEntry[] {
  const q = query.toLowerCase();
  return Object.values(ORTHO_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.summary.toLowerCase().includes(q) ||
    e.anatomy.toLowerCase().includes(q) ||
    e.symptoms.some(s => s.toLowerCase().includes(q))
  );
}

/** Get all entries for a given subcategory */
export function getOrthoBySubcategory(sub: OrthoSubcategory): OrthoEntry[] {
  return Object.values(ORTHO_ENTRIES).filter(e => e.subcategory === sub);
}

/** Get total count of entries */
export function getOrthoCount(): number {
  return Object.keys(ORTHO_ENTRIES).length;
}
