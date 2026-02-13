/**
 * Musculoskeletal Conditions Database
 *
 * Comprehensive reference for ~30 musculoskeletal conditions spanning
 * degenerative, inflammatory, metabolic-bone, soft-tissue, fracture,
 * spine, sports-injury, and congenital categories.
 *
 * Designed for SOMA medical education — each entry includes ICD-11 codes,
 * pathophysiology, clinical features, diagnostics, treatment options,
 * complications, patient-friendly explanations, and emergency signs.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MSKCategory =
  | 'degenerative'
  | 'inflammatory'
  | 'metabolic-bone'
  | 'soft-tissue'
  | 'fracture'
  | 'spine'
  | 'sports-injury'
  | 'congenital';

export interface MusculoskeletalEntry {
  id: string;
  name: string;
  nameEs: string;
  category: MSKCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const msk = (
  id: string,
  name: string,
  nameEs: string,
  category: MSKCategory,
  icd11: string,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): MusculoskeletalEntry => ({
  id,
  name,
  nameEs,
  category,
  icd11,
  description,
  pathophysiology,
  clinicalFeatures,
  diagnostics,
  treatment,
  complications,
  patientExplanation,
  emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const MUSCULOSKELETAL_CONDITIONS: Record<string, MusculoskeletalEntry> = {

  // =========================================================================
  // DEGENERATIVE
  // =========================================================================

  osteoarthritis: msk(
    'msk-osteoarthritis',
    'Osteoarthritis',
    'Osteoartritis',
    'degenerative',
    'FA00',
    'Progressive cartilage degradation of synovial joints leading to pain, stiffness, and functional impairment.',
    'Imbalance between cartilage matrix synthesis and degradation mediated by MMPs and aggrecanases. Subchondral bone remodeling, osteophyte formation, and low-grade synovial inflammation perpetuate joint damage.',
    [
      'Joint pain worsened by activity, improved with rest',
      'Morning stiffness lasting less than 30 minutes',
      'Crepitus on movement',
      'Bony enlargement (Heberden and Bouchard nodes in hands)',
      'Reduced range of motion',
    ],
    [
      'Weight-bearing radiographs: joint space narrowing, osteophytes, subchondral sclerosis and cysts',
      'MRI for early detection of cartilage loss and bone marrow lesions',
      'Clinical diagnosis based on ACR criteria',
    ],
    [
      'Weight management and aerobic exercise',
      'Physical therapy and strengthening programs',
      'Topical NSAIDs (first-line for knee/hand OA)',
      'Oral NSAIDs or acetaminophen',
      'Intra-articular corticosteroid injections',
      'Total joint arthroplasty for refractory disease',
    ],
    [
      'Progressive joint destruction and disability',
      'Muscle weakness and deconditioning',
      'Falls and fractures in elderly patients',
      'Depression related to chronic pain',
    ],
    'Osteoarthritis is wear-and-tear damage to the smooth cushion (cartilage) inside your joints. Over time the cushion thins, bones rub together, and the joint becomes painful and stiff. Staying active and maintaining a healthy weight are the best ways to slow it down.',
    [
      'Sudden joint locking preventing weight-bearing',
      'Acute worsening suggesting septic arthritis (fever, hot swollen joint)',
    ],
  ),

  degenerative_disc_disease: msk(
    'msk-degenerative-disc-disease',
    'Degenerative Disc Disease',
    'Enfermedad degenerativa del disco',
    'degenerative',
    'FA80',
    'Age-related deterioration of intervertebral discs causing axial back or neck pain.',
    'Loss of disc proteoglycans leads to dehydration, reduced disc height, and annular fissuring. Endplate changes alter nutrient diffusion. Inflammatory mediators from the degrading nucleus pulposus sensitize nociceptors in the outer annulus.',
    [
      'Chronic low-grade axial back or neck pain',
      'Pain worsened by prolonged sitting or flexion',
      'Intermittent episodes of acute exacerbation',
      'Stiffness after inactivity',
      'Pain relieved with position change or walking',
    ],
    [
      'MRI showing disc desiccation (dark disc on T2), disc height loss, Modic endplate changes',
      'Plain radiographs: disc space narrowing, osteophytes',
      'Provocative discography (rarely used, controversial)',
    ],
    [
      'Physical therapy focusing on core stabilization',
      'NSAIDs and muscle relaxants for flares',
      'Activity modification and ergonomic adjustments',
      'Epidural steroid injections for radicular symptoms',
      'Spinal fusion or disc replacement for refractory cases',
    ],
    [
      'Disc herniation causing radiculopathy',
      'Spinal stenosis',
      'Chronic pain syndrome',
      'Reduced mobility and deconditioning',
    ],
    'As you age, the rubbery discs between your spinal bones lose water and become thinner. This can cause back or neck pain, especially when sitting for long periods. Strengthening your core muscles and staying active help support your spine.',
    [
      'Progressive leg weakness or numbness (cauda equina concern)',
      'Bowel or bladder dysfunction',
    ],
  ),

  meniscal_degeneration: msk(
    'msk-meniscal-degeneration',
    'Degenerative Meniscal Tear',
    'Rotura meniscal degenerativa',
    'degenerative',
    'FB55.1',
    'Age-related meniscal tearing without significant acute trauma, often associated with knee osteoarthritis.',
    'Chronic mechanical loading causes collagen fiber disruption and mucoid degeneration within the meniscus. Progressive loss of hoop stress resistance leads to horizontal cleavage or complex tear patterns.',
    [
      'Intermittent knee pain along the joint line',
      'Mechanical catching or locking',
      'Knee swelling after activity',
      'Pain with squatting or twisting',
      'Gradual onset without clear injury',
    ],
    [
      'MRI: intrasubstance signal reaching articular surface',
      'Joint line tenderness on examination',
      'McMurray and Thessaly tests',
      'Plain radiographs to assess for concurrent OA',
    ],
    [
      'Physical therapy focusing on quadriceps strengthening',
      'NSAIDs and ice for symptom control',
      'Activity modification',
      'Arthroscopic partial meniscectomy if mechanical symptoms persist',
      'Conservative management preferred when concurrent OA is present',
    ],
    [
      'Accelerated knee OA following meniscectomy',
      'Persistent mechanical symptoms',
      'Quadriceps atrophy',
    ],
    'The meniscus is a rubbery pad in your knee that acts as a shock absorber. With age, it can develop small tears even without a major injury. Strengthening the muscles around the knee usually helps more than surgery for this type of tear.',
    [
      'Locked knee unable to extend (displaced bucket-handle fragment)',
    ],
  ),

  // =========================================================================
  // INFLAMMATORY
  // =========================================================================

  rheumatoid_arthritis: msk(
    'msk-rheumatoid-arthritis',
    'Rheumatoid Arthritis',
    'Artritis reumatoide',
    'inflammatory',
    'FA20',
    'Chronic systemic autoimmune disease primarily affecting synovial joints, causing erosive polyarthritis.',
    'Autoimmune activation (CD4+ T-cells, B-cells producing RF and anti-CCP) triggers synovial hyperplasia (pannus). Pannus invades cartilage and bone via MMPs and osteoclasts. TNF-alpha, IL-1, and IL-6 drive inflammation and systemic manifestations.',
    [
      'Symmetric polyarthritis of small joints (MCPs, PIPs, wrists)',
      'Morning stiffness lasting more than 60 minutes',
      'Joint swelling with boggy synovitis',
      'Swan-neck and boutonniere deformities (late)',
      'Rheumatoid nodules',
      'Systemic features: fatigue, low-grade fever, weight loss',
    ],
    [
      'RF and anti-CCP antibodies',
      'Elevated ESR and CRP',
      'Radiographs: periarticular osteopenia, joint erosions, joint space narrowing',
      'Ultrasound or MRI for early synovitis detection',
      'ACR/EULAR 2010 classification criteria',
    ],
    [
      'Early initiation of DMARDs (methotrexate first-line)',
      'Biologic DMARDs: TNF inhibitors, IL-6 inhibitors, B-cell depletion, JAK inhibitors',
      'Short-course glucocorticoids as bridge therapy',
      'NSAIDs for symptom relief',
      'Physical and occupational therapy',
      'Joint replacement for end-stage disease',
    ],
    [
      'Joint destruction and disability',
      'Atlantoaxial subluxation',
      'Interstitial lung disease',
      'Accelerated atherosclerosis',
      'Secondary amyloidosis',
      'Increased infection risk from immunosuppression',
    ],
    'Rheumatoid arthritis is a condition in which your immune system mistakenly attacks the lining of your joints, causing pain, swelling, and stiffness — especially in the hands and wrists. Early treatment with disease-modifying medications can prevent permanent joint damage.',
    [
      'Neck pain with neurologic symptoms (atlantoaxial instability)',
      'New shortness of breath (interstitial lung disease)',
      'Signs of serious infection while on immunosuppressive therapy',
    ],
  ),

  gout: msk(
    'msk-gout',
    'Gout',
    'Gota',
    'inflammatory',
    'FA25.0',
    'Crystal arthropathy caused by deposition of monosodium urate crystals in joints and soft tissues.',
    'Chronic hyperuricemia (serum urate > 6.8 mg/dL) leads to MSU crystal formation in joints. Crystal phagocytosis by macrophages activates NLRP3 inflammasome, triggering IL-1beta release and intense neutrophilic inflammation.',
    [
      'Acute monoarticular arthritis (classically first MTP — podagra)',
      'Rapid onset of severe pain, erythema, warmth, and swelling',
      'Intercritical periods between attacks',
      'Tophi in chronic disease (ears, olecranon, fingers)',
      'Polyarticular presentation possible in advanced disease',
    ],
    [
      'Synovial fluid analysis: negatively birefringent needle-shaped MSU crystals',
      'Serum uric acid (may be normal during acute flare)',
      'Dual-energy CT for tophus detection',
      'Plain radiographs: punched-out erosions with overhanging edges (late)',
      'Renal function and metabolic panel',
    ],
    [
      'Acute flare: NSAIDs, colchicine, or glucocorticoids',
      'Urate-lowering therapy: allopurinol (first-line), febuxostat',
      'Uricosuric agents: probenecid (if underexcretor)',
      'Pegloticase for refractory tophaceous gout',
      'Dietary modification: limit purines, alcohol, fructose',
      'Flare prophylaxis with low-dose colchicine when starting ULT',
    ],
    [
      'Chronic tophaceous gout with joint destruction',
      'Urate nephropathy and nephrolithiasis',
      'Association with metabolic syndrome and cardiovascular disease',
      'Superimposed septic arthritis',
    ],
    'Gout happens when a waste product called uric acid builds up and forms tiny sharp crystals inside a joint, usually the big toe. It causes sudden, intense pain and swelling. Medicine can lower uric acid levels and prevent future attacks.',
    [
      'Fever with hot swollen joint (must exclude septic arthritis)',
      'Inability to bear weight',
    ],
  ),

  ankylosing_spondylitis: msk(
    'msk-ankylosing-spondylitis',
    'Ankylosing Spondylitis',
    'Espondilitis anquilosante',
    'inflammatory',
    'FA93.0',
    'Chronic inflammatory spondyloarthropathy primarily affecting the sacroiliac joints and spine, leading to progressive stiffness and fusion.',
    'HLA-B27-associated IL-23/IL-17 axis dysregulation drives entheseal inflammation and new bone formation. Chronic enthesitis and osteitis lead to syndesmophyte formation, progressive ankylosis, and the classic "bamboo spine".',
    [
      'Inflammatory low back pain (insidious onset before age 40, improved with exercise)',
      'Morning stiffness lasting more than 30 minutes',
      'Sacroiliac tenderness',
      'Reduced spinal mobility (Schober test)',
      'Extra-articular features: anterior uveitis, enthesitis, dactylitis',
      'Chest wall restriction with reduced lung expansion',
    ],
    [
      'Pelvic radiograph: sacroiliitis (bilateral, symmetric)',
      'MRI sacroiliac joints: bone marrow edema (early)',
      'HLA-B27 testing (supportive, not diagnostic)',
      'Elevated CRP/ESR',
      'ASAS classification criteria',
    ],
    [
      'NSAIDs (first-line, continuous use if active disease)',
      'TNF inhibitors (adalimumab, etanercept) for NSAID-refractory disease',
      'IL-17 inhibitors (secukinumab)',
      'Physical therapy and daily stretching program',
      'Posture training and swimming',
      'Surgery for severe kyphotic deformity (rare)',
    ],
    [
      'Spinal fusion leading to rigid kyphotic deformity',
      'Spinal fractures with minor trauma (chalk-stick fracture)',
      'Cauda equina syndrome (rare)',
      'Aortic regurgitation and cardiac conduction defects',
      'Restrictive lung disease',
      'Anterior uveitis causing vision loss',
    ],
    'Ankylosing spondylitis is a type of arthritis that mainly affects the spine and pelvis. Over time, inflammation can cause the bones of the spine to fuse together, reducing flexibility. Staying active with stretching and exercise is essential, and medications can control the inflammation.',
    [
      'Sudden severe back pain after minor trauma (fracture of fused spine)',
      'Acute eye pain or vision change (uveitis)',
      'New neurologic deficits in the legs',
    ],
  ),

  psoriatic_arthritis: msk(
    'msk-psoriatic-arthritis',
    'Psoriatic Arthritis',
    'Artritis psoriásica',
    'inflammatory',
    'FA21',
    'Inflammatory arthritis associated with psoriasis, presenting with diverse joint patterns including enthesitis and dactylitis.',
    'IL-23/IL-17 immune axis drives synovial inflammation, enthesitis, and new bone formation. Mechanical stress at entheses amplifies inflammation. Shared genetic susceptibility (HLA-B27, IL-23R) links skin and joint disease.',
    [
      'Asymmetric oligoarthritis or polyarthritis',
      'Dactylitis (sausage digits)',
      'Enthesitis (Achilles, plantar fascia)',
      'DIP joint involvement',
      'Nail changes: pitting, onycholysis, oil-drop sign',
      'Axial involvement in 40% of patients',
    ],
    [
      'Clinical diagnosis (CASPAR criteria)',
      'Radiographs: pencil-in-cup deformity, periostitis, enthesophytes',
      'MRI or ultrasound for enthesitis and early synovitis',
      'RF typically negative; anti-CCP occasionally positive',
      'Skin biopsy if psoriasis is subtle',
    ],
    [
      'Methotrexate for peripheral arthritis',
      'TNF inhibitors or IL-17 inhibitors for moderate-to-severe disease',
      'IL-12/23 inhibitor (ustekinumab)',
      'JAK inhibitors (tofacitinib)',
      'NSAIDs for mild disease',
      'Topical therapies for skin involvement',
    ],
    [
      'Arthritis mutilans (severe destructive form)',
      'Progressive joint damage and disability',
      'Cardiovascular disease risk',
      'Uveitis',
      'Inflammatory bowel disease association',
    ],
    'Psoriatic arthritis is joint inflammation that occurs in some people with the skin condition psoriasis. It can make joints painful and swollen and sometimes causes sausage-like swelling of entire fingers or toes. Treatment with modern medications can control both the skin and joint symptoms.',
    [
      'Rapidly progressive joint destruction',
      'Acute red eye or vision changes (uveitis)',
    ],
  ),

  // =========================================================================
  // METABOLIC BONE
  // =========================================================================

  osteoporosis: msk(
    'msk-osteoporosis',
    'Osteoporosis',
    'Osteoporosis',
    'metabolic-bone',
    'FB83.1',
    'Systemic skeletal disease characterized by low bone mass and microarchitectural deterioration, leading to increased fracture risk.',
    'Imbalance favoring osteoclastic resorption over osteoblastic formation. Estrogen deficiency (postmenopausal), aging, calcium/vitamin D insufficiency, and secondary causes accelerate bone loss. Trabecular thinning and cortical porosity reduce bone strength.',
    [
      'Often clinically silent until fracture occurs',
      'Loss of height and progressive thoracic kyphosis',
      'Vertebral compression fractures (may be asymptomatic)',
      'Fragility fractures of hip, wrist, or spine with minimal trauma',
      'Chronic back pain from vertebral wedging',
    ],
    [
      'DXA scan: T-score of -2.5 or below at hip or spine',
      'FRAX score for 10-year fracture probability',
      'Vertebral fracture assessment on DXA or lateral spine radiograph',
      'Labs: calcium, phosphorus, vitamin D, PTH, TSH, basic metabolic panel',
      'Consider bone turnover markers (CTX, P1NP)',
    ],
    [
      'Calcium (1000-1200 mg/day) and vitamin D (800-1000 IU/day)',
      'Weight-bearing and resistance exercise',
      'Bisphosphonates (alendronate, zoledronic acid) — first-line',
      'Denosumab (RANK-L inhibitor)',
      'Anabolic agents: teriparatide, romosozumab for high-risk patients',
      'Fall prevention strategies',
    ],
    [
      'Hip fractures with high morbidity and mortality in elderly',
      'Vertebral fractures causing kyphosis and chronic pain',
      'Atypical femoral fractures (rare, with prolonged bisphosphonate use)',
      'Osteonecrosis of jaw (rare, with bisphosphonates or denosumab)',
      'Rebound bone loss after denosumab discontinuation',
    ],
    'Osteoporosis means your bones have become thinner and more fragile, making them easier to break. It develops silently over years. A bone density scan can detect it early, and medications along with calcium, vitamin D, and exercise can strengthen your bones.',
    [
      'Sudden severe hip or back pain after a minor fall (fragility fracture)',
      'Loss of bowel or bladder control after vertebral fracture (cord compression)',
    ],
  ),

  pagets_disease: msk(
    'msk-pagets-disease',
    'Paget Disease of Bone',
    'Enfermedad de Paget ósea',
    'metabolic-bone',
    'FB84',
    'Chronic skeletal disorder of excessive and disorganized bone remodeling, resulting in enlarged, deformed, and weakened bones.',
    'Paramyxovirus-like inclusions and genetic factors (SQSTM1 mutations) trigger hyperactive osteoclasts. Accelerated resorption is followed by disorganized woven bone formation with a mosaic (jigsaw-puzzle) pattern on histology.',
    [
      'Often asymptomatic (incidental finding of elevated alkaline phosphatase)',
      'Bone pain at affected sites',
      'Skeletal deformity: bowing of tibia, skull enlargement',
      'Hearing loss (cochlear involvement)',
      'Warmth over affected bone due to increased vascularity',
    ],
    [
      'Markedly elevated serum alkaline phosphatase',
      'Radiographs: cortical thickening, coarsened trabeculae, lytic and sclerotic areas',
      'Bone scan for polyostotic involvement',
      'Serum calcium and phosphorus typically normal',
      'Biopsy if osteosarcoma suspected',
    ],
    [
      'Bisphosphonates (zoledronic acid preferred for potency)',
      'Calcitonin (less effective, second-line)',
      'Analgesics for pain management',
      'Orthopedic intervention for fractures or deformity',
      'Monitoring alkaline phosphatase to assess treatment response',
    ],
    [
      'Pathologic fractures through pagetic bone',
      'Osteosarcoma (rare but most feared, less than 1%)',
      'High-output cardiac failure from increased bone vascularity',
      'Cranial nerve compression (deafness)',
      'Spinal stenosis',
    ],
    'Paget disease causes certain bones to grow larger and weaker than normal because the body breaks down and rebuilds bone too quickly. Many people have no symptoms. When treatment is needed, a single infusion of medication can normalize bone activity for years.',
    [
      'New severe bone pain at a pagetic site (possible osteosarcoma)',
      'Signs of heart failure (dyspnea, edema) in polyostotic disease',
      'Progressive neurologic deficits from spinal involvement',
    ],
  ),

  rickets_osteomalacia: msk(
    'msk-rickets-osteomalacia',
    'Rickets / Osteomalacia',
    'Raquitismo / Osteomalacia',
    'metabolic-bone',
    'FB80.0',
    'Defective bone mineralization due to vitamin D deficiency or phosphate depletion; rickets in children, osteomalacia in adults.',
    'Vitamin D deficiency impairs intestinal calcium absorption, triggering secondary hyperparathyroidism. Elevated PTH maintains serum calcium at the expense of bone. Insufficient calcium-phosphate product prevents hydroxyapatite crystal deposition in osteoid.',
    [
      'Children: bowing of legs, widened wrists and ankles, rachitic rosary, craniotabes',
      'Adults: diffuse bone pain and tenderness, proximal muscle weakness',
      'Fractures with minimal trauma',
      'Waddling gait',
      'Dental abnormalities in children',
    ],
    [
      'Serum 25-hydroxyvitamin D (low), calcium (low/normal), phosphorus (low)',
      'Elevated alkaline phosphatase and PTH',
      'Radiographs: widened growth plates, cupping and fraying of metaphyses (children); Looser zones (adults)',
      'DXA may show low BMD',
    ],
    [
      'Vitamin D supplementation (cholecalciferol or ergocalciferol)',
      'Calcium supplementation',
      'Phosphate replacement for phosphate-wasting forms',
      'Burosumab for X-linked hypophosphatemia',
      'Treatment of underlying cause (malabsorption, renal disease)',
    ],
    [
      'Skeletal deformity (permanent if untreated in childhood)',
      'Growth retardation',
      'Hypocalcemic seizures',
      'Pathologic fractures',
      'Secondary hyperparathyroidism',
    ],
    'Rickets (in children) and osteomalacia (in adults) occur when bones do not get enough vitamin D or calcium to harden properly. This makes bones soft and weak. Taking vitamin D and calcium supplements usually corrects the problem.',
    [
      'Seizures or tetany from severe hypocalcemia',
      'Pathologic fracture',
    ],
  ),

  // =========================================================================
  // SOFT TISSUE
  // =========================================================================

  carpal_tunnel_syndrome: msk(
    'msk-carpal-tunnel-syndrome',
    'Carpal Tunnel Syndrome',
    'Síndrome del túnel carpiano',
    'soft-tissue',
    'FB56.2',
    'Compression neuropathy of the median nerve at the wrist, causing pain, numbness, and weakness in the hand.',
    'Increased pressure within the carpal tunnel (bounded by carpal bones and transverse carpal ligament) compresses the median nerve. Flexor tenosynovitis, edema, or anatomic variants reduce tunnel volume. Chronic compression leads to demyelination and axonal loss.',
    [
      'Numbness and tingling in thumb, index, middle, and radial half of ring finger',
      'Nocturnal symptoms waking patient from sleep',
      'Weakness of thumb abduction and opposition (late)',
      'Thenar eminence atrophy (advanced)',
      'Positive Phalen and Tinel signs',
    ],
    [
      'Nerve conduction studies and electromyography (gold standard)',
      'Phalen test: wrist flexion for 60 seconds reproduces symptoms',
      'Tinel sign: tapping over carpal tunnel',
      'Ultrasound: median nerve cross-sectional area at wrist',
      'MRI rarely needed',
    ],
    [
      'Wrist splinting in neutral position (especially at night)',
      'Activity modification and ergonomic assessment',
      'Corticosteroid injection into carpal tunnel',
      'NSAIDs for mild symptoms',
      'Carpal tunnel release surgery for refractory or severe cases',
    ],
    [
      'Permanent median nerve damage with thenar atrophy',
      'Chronic pain',
      'Loss of fine motor function',
      'Pillar pain after surgical release (usually temporary)',
    ],
    'Carpal tunnel syndrome happens when a nerve in your wrist gets squeezed inside a narrow tunnel. This causes numbness, tingling, and sometimes weakness in your hand, often worse at night. A wrist brace can help, and a minor surgery can open the tunnel if needed.',
    [
      'Sudden onset of complete hand numbness (consider acute compression)',
      'Progressive thenar atrophy with functional loss',
    ],
  ),

  rotator_cuff_tendinopathy: msk(
    'msk-rotator-cuff-tendinopathy',
    'Rotator Cuff Tendinopathy',
    'Tendinopatía del manguito rotador',
    'soft-tissue',
    'FB54.0',
    'Degenerative or overuse-related damage to rotator cuff tendons, ranging from tendinosis to partial or complete tears.',
    'Repetitive overhead use and age-related tendon degeneration cause collagen disorganization, hypoxic changes, and failed healing response. Subacromial impingement may contribute through mechanical compression of the supraspinatus against the acromion.',
    [
      'Shoulder pain with overhead activities',
      'Night pain when lying on affected side',
      'Painful arc between 60 and 120 degrees of abduction',
      'Weakness with arm elevation or external rotation (tear)',
      'Positive Neer and Hawkins impingement signs',
    ],
    [
      'Shoulder radiographs: subacromial sclerosis, acromial spur, superior humeral migration (large tear)',
      'Ultrasound: dynamic assessment of tendon integrity',
      'MRI: gold standard for tear size and retraction',
      'Examination: empty can test (supraspinatus), external rotation lag (infraspinatus)',
    ],
    [
      'Physical therapy with progressive rotator cuff strengthening',
      'Activity modification and avoidance of overhead aggravators',
      'NSAIDs for pain and inflammation',
      'Subacromial corticosteroid injection',
      'Arthroscopic rotator cuff repair for full-thickness tears with functional deficit',
    ],
    [
      'Tear progression from partial to full thickness',
      'Rotator cuff arthropathy (chronic massive tear with OA)',
      'Frozen shoulder (adhesive capsulitis)',
      'Chronic weakness and disability',
    ],
    'The rotator cuff is a group of four tendons that hold your shoulder in place and let you lift your arm. Over time or with repetitive use, these tendons can weaken and tear. Physical therapy to strengthen the shoulder muscles is the most important treatment.',
    [
      'Acute traumatic shoulder weakness following a fall (acute tear in younger patient)',
      'Complete inability to raise the arm',
    ],
  ),

  plantar_fasciitis: msk(
    'msk-plantar-fasciitis',
    'Plantar Fasciitis',
    'Fascitis plantar',
    'soft-tissue',
    'FB57.3',
    'Degenerative enthesopathy of the plantar fascia at its calcaneal origin, causing heel pain.',
    'Repetitive microtrauma at the plantar fascia enthesis leads to collagen degeneration (fasciosis) rather than true inflammation. Risk factors include obesity, pes planus, calf tightness, and prolonged standing. Heel spur formation is a secondary finding.',
    [
      'Sharp stabbing heel pain with first steps in the morning',
      'Pain after prolonged standing or sitting',
      'Tenderness at the medial calcaneal tubercle',
      'Pain worsened by dorsiflexion of toes (windlass test)',
      'Gradual onset, often bilateral',
    ],
    [
      'Clinical diagnosis based on history and examination',
      'Radiographs: heel spur (incidental, not diagnostic)',
      'Ultrasound: thickened plantar fascia (> 4 mm)',
      'MRI: rarely needed, for differential diagnosis',
    ],
    [
      'Calf and plantar fascia stretching exercises',
      'Supportive footwear with arch support',
      'NSAIDs for pain relief',
      'Night splint to maintain dorsiflexion',
      'Corticosteroid injection (limit frequency to reduce rupture risk)',
      'Extracorporeal shock wave therapy for refractory cases',
    ],
    [
      'Plantar fascia rupture (especially after corticosteroid injection)',
      'Chronic heel pain syndrome',
      'Compensatory gait changes causing knee or hip problems',
    ],
    'Plantar fasciitis is the most common cause of heel pain. The tough band of tissue on the bottom of your foot becomes irritated where it attaches to the heel bone. Stretching your calf muscles and wearing supportive shoes are the keys to recovery.',
    [
      'Sudden pop followed by acute arch pain (plantar fascia rupture)',
    ],
  ),

  fibromyalgia: msk(
    'msk-fibromyalgia',
    'Fibromyalgia',
    'Fibromialgia',
    'soft-tissue',
    'MJ53',
    'Chronic widespread pain disorder characterized by central sensitization, fatigue, and cognitive dysfunction.',
    'Central sensitization with augmented pain processing in the CNS. Altered descending inhibitory pathways, elevated substance P in CSF, and dysfunction of serotonin and norepinephrine neurotransmission. Associated with hypothalamic-pituitary-adrenal axis dysregulation and autonomic dysfunction.',
    [
      'Widespread pain above and below the waist, bilateral, for more than 3 months',
      'Fatigue and unrefreshing sleep',
      'Cognitive dysfunction (fibro fog)',
      'Tender points (historical criteria) or widespread pain index',
      'Comorbid headaches, IBS, TMJ dysfunction, depression',
    ],
    [
      'Clinical diagnosis using ACR 2010/2011 criteria (WPI and SS score)',
      'Normal inflammatory markers (ESR, CRP)',
      'Normal radiographs and labs (used to exclude other diagnoses)',
      'Thyroid function to exclude hypothyroidism',
    ],
    [
      'Patient education and cognitive behavioral therapy',
      'Graded aerobic exercise program',
      'Duloxetine or milnacipran (SNRIs)',
      'Pregabalin or gabapentin',
      'Amitriptyline for sleep and pain',
      'Sleep hygiene optimization',
    ],
    [
      'Chronic disability and reduced quality of life',
      'Depression and anxiety',
      'Opioid dependence if inappropriately prescribed',
      'Social isolation',
    ],
    'Fibromyalgia causes widespread body pain, fatigue, and trouble thinking clearly. The nervous system becomes overly sensitive to pain signals. Regular gentle exercise, good sleep habits, and certain medications can significantly improve symptoms.',
    [
      'New focal neurologic symptoms (suggests alternative diagnosis)',
      'Suicidal ideation in the context of chronic pain and depression',
    ],
  ),

  // =========================================================================
  // FRACTURE
  // =========================================================================

  hip_fracture: msk(
    'msk-hip-fracture',
    'Hip Fracture',
    'Fractura de cadera',
    'fracture',
    'FB32',
    'Fracture of the proximal femur, most commonly in osteoporotic elderly patients after a fall.',
    'Low-energy trauma to osteoporotic bone causes fracture of the femoral neck (intracapsular) or intertrochanteric/subtrochanteric region (extracapsular). Femoral neck fractures disrupt retinacular blood supply to the femoral head, risking avascular necrosis.',
    [
      'Inability to bear weight after a fall',
      'Shortened and externally rotated lower extremity',
      'Groin or hip pain',
      'Ecchymosis may appear delayed',
      'Occult fractures may present with vague hip pain only',
    ],
    [
      'AP pelvis and lateral hip radiograph',
      'MRI if radiographs negative but high clinical suspicion (occult fracture)',
      'CT scan as alternative to MRI',
      'Pre-operative labs: CBC, metabolic panel, coagulation, type and screen',
      'ECG and chest radiograph for surgical clearance',
    ],
    [
      'Femoral neck (non-displaced): internal fixation with screws',
      'Femoral neck (displaced): hemiarthroplasty or total hip arthroplasty',
      'Intertrochanteric: sliding hip screw or intramedullary nail',
      'Surgery within 24-48 hours improves outcomes',
      'DVT prophylaxis',
      'Early mobilization and physical therapy',
      'Initiate osteoporosis treatment post-fracture',
    ],
    [
      'Avascular necrosis of femoral head (intracapsular fractures)',
      'Nonunion or malunion',
      'DVT and pulmonary embolism',
      'Surgical site infection',
      'Mortality: 20-30% within 1 year in elderly',
      'Loss of independence',
    ],
    'A hip fracture is a break in the upper part of the thigh bone, usually from a fall. It almost always requires surgery to repair. Getting moving again quickly after surgery is very important for recovery. Treating osteoporosis helps prevent future fractures.',
    [
      'Signs of hemorrhagic shock (subtrochanteric fractures can cause significant blood loss)',
      'Neurovascular compromise of the lower extremity',
      'Chest pain or dyspnea post-injury (fat embolism or PE)',
    ],
  ),

  colles_fracture: msk(
    'msk-colles-fracture',
    'Colles Fracture (Distal Radius Fracture)',
    'Fractura de Colles (fractura de radio distal)',
    'fracture',
    'FB21.0',
    'Extra-articular fracture of the distal radius with dorsal displacement, classically from a fall on an outstretched hand.',
    'Axial loading on a dorsiflexed wrist transmits force through the scaphoid to the distal radius. In osteoporotic bone, the distal radial metaphysis fails in compression dorsally and tension volarly, creating the characteristic dorsal tilt and "dinner fork" deformity.',
    [
      'Wrist pain and swelling after a fall on outstretched hand (FOOSH)',
      'Dinner fork deformity (dorsal displacement)',
      'Tenderness at the distal radius',
      'Limited wrist range of motion',
      'Possible median nerve symptoms from swelling',
    ],
    [
      'PA and lateral wrist radiographs',
      'CT scan for intra-articular extension or pre-operative planning',
      'Assess radial height, radial inclination, volar tilt, and ulnar variance',
      'Evaluate for associated ulnar styloid fracture or scapholunate injury',
    ],
    [
      'Closed reduction and casting for stable, extra-articular fractures',
      'Volar locking plate fixation for unstable or intra-articular fractures',
      'External fixation or percutaneous pinning in select cases',
      'Early finger ROM exercises to prevent stiffness',
      'Physical therapy after immobilization',
    ],
    [
      'Malunion with persistent dorsal tilt',
      'Median nerve compression (acute carpal tunnel)',
      'Extensor pollicis longus tendon rupture',
      'Complex regional pain syndrome (CRPS)',
      'Post-traumatic arthritis of the wrist',
    ],
    'A Colles fracture is a broken wrist, usually from falling onto an outstretched hand. The break occurs at the end of the forearm bone (radius) near the wrist. Most heal well with a cast or, if the bone is out of position, a small operation with a plate and screws.',
    [
      'Numbness or tingling in the fingers (median nerve compression)',
      'Open fracture with bone visible through skin',
      'Absent radial pulse or signs of compartment syndrome',
    ],
  ),

  stress_fracture: msk(
    'msk-stress-fracture',
    'Stress Fracture',
    'Fractura por estrés',
    'fracture',
    'FB00.1',
    'Overuse injury causing micro-damage accumulation in bone that outpaces remodeling capacity.',
    'Repetitive sub-maximal loading creates microcracks in cortical bone. When bone remodeling cannot keep pace with damage accumulation, a stress reaction develops, progressing to a fracture line. Risk factors include sudden training increases, relative energy deficiency, and female athlete triad.',
    [
      'Activity-related pain that resolves with rest (early)',
      'Pain at rest and with normal walking (advanced)',
      'Localized tenderness and possible swelling',
      'Common sites: metatarsals, tibia, femoral neck, navicular',
      'Pain with hopping or vibration (tuning fork test)',
    ],
    [
      'Plain radiographs (may be normal for 2-3 weeks)',
      'MRI: bone marrow edema (most sensitive early study)',
      'Bone scan: increased focal uptake',
      'Labs: vitamin D, calcium, thyroid function, consider bone density in at-risk patients',
      'Assess for female athlete triad or RED-S',
    ],
    [
      'Activity modification and relative rest (low-impact cross-training)',
      'Protective weight-bearing for high-risk sites (femoral neck, navicular)',
      'Pneumatic brace or walking boot for lower extremity fractures',
      'Correct nutritional deficiencies (calcium, vitamin D)',
      'Gradual return to activity over 6-8 weeks',
      'Surgical fixation for high-risk fractures with non-union potential',
    ],
    [
      'Complete fracture if activity continues',
      'Non-union (especially navicular and fifth metatarsal)',
      'Femoral neck displacement requiring surgical fixation',
      'Recurrence with premature return to activity',
    ],
    'A stress fracture is a tiny crack in a bone caused by repetitive impact, common in runners and athletes. The bone needs time to heal, so rest from the aggravating activity is essential. Proper nutrition and gradual training increases help prevent them.',
    [
      'Groin pain in a runner (femoral neck stress fracture — risk of displacement)',
      'Inability to bear weight',
    ],
  ),

  // =========================================================================
  // SPINE
  // =========================================================================

  lumbar_disc_herniation: msk(
    'msk-lumbar-disc-herniation',
    'Lumbar Disc Herniation',
    'Hernia de disco lumbar',
    'spine',
    'FA81.1',
    'Protrusion or extrusion of nucleus pulposus through a deficient annulus fibrosus, compressing a spinal nerve root.',
    'Annular tear allows nucleus pulposus to herniate posterolaterally, compressing the traversing nerve root (e.g., L4-L5 disc compresses L5 root). Chemical irritation from nuclear material induces an inflammatory response (TNF-alpha, IL-6) that amplifies radicular pain.',
    [
      'Unilateral radicular leg pain (sciatica) worse than back pain',
      'Dermatomal numbness or paresthesias',
      'Positive straight leg raise test',
      'Motor weakness in myotomal distribution',
      'Pain worsened by sitting, coughing, or Valsalva maneuver',
    ],
    [
      'MRI lumbar spine (study of choice): disc morphology and nerve compression',
      'Clinical correlation essential (asymptomatic herniations are common)',
      'CT myelography if MRI contraindicated',
      'EMG/NCS for unclear cases or to assess chronicity',
    ],
    [
      'Conservative management for 6-8 weeks (resolves in 90% of cases)',
      'NSAIDs and short-course oral corticosteroids',
      'Physical therapy with McKenzie exercises and core stabilization',
      'Epidural steroid injections for persistent radiculopathy',
      'Microdiscectomy for refractory symptoms or progressive neurologic deficit',
    ],
    [
      'Cauda equina syndrome (surgical emergency)',
      'Chronic radiculopathy',
      'Foot drop (L5 root compression)',
      'Recurrent disc herniation after surgery',
    ],
    'A disc herniation occurs when the soft center of a spinal disc pushes through a crack in the outer layer and presses on a nearby nerve. This often causes sciatica — pain shooting down one leg. Most cases improve with time, physical therapy, and pain medication.',
    [
      'Bowel or bladder incontinence or retention (cauda equina syndrome)',
      'Saddle area numbness',
      'Rapidly progressive bilateral leg weakness',
      'Severe or worsening motor deficit',
    ],
  ),

  spinal_stenosis: msk(
    'msk-spinal-stenosis',
    'Lumbar Spinal Stenosis',
    'Estenosis espinal lumbar',
    'spine',
    'FA8Z',
    'Narrowing of the spinal canal causing compression of the cauda equina, typically from degenerative changes.',
    'Degenerative hypertrophy of facet joints and ligamentum flavum, combined with disc bulging and osteophyte formation, narrows the central canal, lateral recesses, and neural foramina. Compression of cauda equina and its blood supply causes neurogenic claudication.',
    [
      'Neurogenic claudication: bilateral leg pain, heaviness, or numbness with walking',
      'Symptoms relieved by sitting or leaning forward (shopping cart sign)',
      'Gradual onset in patients over 60',
      'Wide-based gait',
      'Normal distal pulses (differentiates from vascular claudication)',
    ],
    [
      'MRI lumbar spine: central canal narrowing, ligamentum flavum hypertrophy',
      'CT myelography if MRI contraindicated',
      'Standing or flexion-extension radiographs for spondylolisthesis',
      'Ankle-brachial index to exclude peripheral vascular disease',
    ],
    [
      'Physical therapy focusing on flexion-based exercises',
      'NSAIDs and gabapentin or pregabalin for neuropathic pain',
      'Epidural steroid injections for symptom relief',
      'Walking aids and activity pacing',
      'Laminectomy (with or without fusion) for refractory neurogenic claudication',
    ],
    [
      'Progressive functional decline and reduced walking distance',
      'Falls due to lower extremity weakness',
      'Cauda equina syndrome (rare, acute-on-chronic)',
      'Post-surgical complications: adjacent segment disease, instability',
    ],
    'Spinal stenosis is a narrowing of the space inside the lower spine that puts pressure on the nerves. It causes leg pain or heaviness when walking that is relieved by sitting down or bending forward. Physical therapy helps, and surgery to create more space may be needed if symptoms are severe.',
    [
      'Acute onset of bilateral leg weakness',
      'New bowel or bladder dysfunction',
      'Progressive inability to walk',
    ],
  ),

  spondylolisthesis: msk(
    'msk-spondylolisthesis',
    'Spondylolisthesis',
    'Espondilolistesis',
    'spine',
    'FA82.0',
    'Forward slippage of one vertebra relative to the one below, most commonly at L5-S1 or L4-L5.',
    'Isthmic type: bilateral pars interarticularis defects (spondylolysis) from repetitive hyperextension allow vertebral body to slip forward. Degenerative type: facet joint and disc degeneration in older adults leads to segmental instability and anterior translation.',
    [
      'Low back pain worsened by extension and activity',
      'Hamstring tightness',
      'Palpable step-off at the affected level (high-grade slips)',
      'Radiculopathy if nerve root compression present',
      'Waddling gait in severe cases',
    ],
    [
      'Lateral lumbar radiograph: forward vertebral displacement graded I-IV (Meyerding)',
      'Oblique radiographs: "Scotty dog" sign with pars defect',
      'MRI for nerve root compression assessment',
      'CT scan for bony detail and pars defect confirmation',
      'Flexion-extension views for dynamic instability',
    ],
    [
      'Activity modification and avoidance of hyperextension',
      'Physical therapy focusing on core stabilization and flexion exercises',
      'NSAIDs and analgesics',
      'Bracing for acute pars fractures in young athletes',
      'Spinal fusion for high-grade or symptomatic refractory slips',
    ],
    [
      'Progressive slip and neurologic compromise',
      'Cauda equina syndrome (rare)',
      'Chronic low back pain',
      'Spinal deformity and sagittal imbalance',
    ],
    'Spondylolisthesis means one of your spine bones has slipped forward over the bone below it. It often happens at the base of the spine and can cause back pain or leg symptoms. Most cases are managed with exercises to stabilize the spine.',
    [
      'Progressive neurologic deficit in the legs',
      'Bowel or bladder dysfunction',
      'Rapidly worsening slip in an adolescent',
    ],
  ),

  cervical_radiculopathy: msk(
    'msk-cervical-radiculopathy',
    'Cervical Radiculopathy',
    'Radiculopatía cervical',
    'spine',
    'FB56.0',
    'Compression or irritation of a cervical nerve root causing arm pain, weakness, or numbness.',
    'Disc herniation (younger patients) or foraminal stenosis from uncovertebral and facet joint osteophytes (older patients) compress the exiting nerve root. Inflammatory mediators from disc material contribute to radicular pain. C6 and C7 roots are most commonly affected.',
    [
      'Neck pain radiating into the arm in a dermatomal pattern',
      'Numbness or paresthesias in the hand or fingers',
      'Upper extremity weakness in myotomal distribution',
      'Pain worsened by neck extension and ipsilateral rotation (Spurling test)',
      'Diminished deep tendon reflexes at the affected level',
    ],
    [
      'MRI cervical spine (study of choice)',
      'Spurling test: axial compression with extension and rotation reproduces radicular pain',
      'CT myelography if MRI contraindicated',
      'EMG/NCS after 3-4 weeks for diagnostic uncertainty',
      'Plain radiographs for foraminal narrowing and alignment',
    ],
    [
      'Conservative management for 6-12 weeks (most cases resolve)',
      'NSAIDs and short-course oral corticosteroids',
      'Cervical collar for acute pain (short-term use)',
      'Physical therapy with cervical traction and strengthening',
      'Cervical epidural steroid injection',
      'Anterior cervical discectomy and fusion (ACDF) for refractory cases',
    ],
    [
      'Progressive myelopathy from central cord compression',
      'Persistent weakness or numbness',
      'Chronic pain syndrome',
      'Vertebral artery injury (rare, with manipulation)',
    ],
    'Cervical radiculopathy is a pinched nerve in the neck that sends pain, numbness, or weakness down one arm. It often comes from a worn disc or bone spur pressing on the nerve. Most cases improve with time, physical therapy, and medication.',
    [
      'Gait difficulty or bilateral hand clumsiness (myelopathy)',
      'Bowel or bladder changes',
      'Rapidly progressive arm weakness',
    ],
  ),

  // =========================================================================
  // SPORTS INJURY
  // =========================================================================

  acl_tear: msk(
    'msk-acl-tear',
    'Anterior Cruciate Ligament (ACL) Tear',
    'Rotura del ligamento cruzado anterior (LCA)',
    'sports-injury',
    'FB55.0',
    'Disruption of the ACL, most commonly from non-contact pivoting or deceleration injuries.',
    'Non-contact mechanism: sudden deceleration, pivot, or landing with the knee in valgus and internal rotation stresses the ACL beyond its tensile strength. The ACL has poor intrinsic healing due to its intra-articular, synovial environment with limited blood supply.',
    [
      'Audible pop at the time of injury',
      'Rapid knee swelling within hours (hemarthrosis)',
      'Sensation of the knee giving way',
      'Positive Lachman test (most sensitive) and anterior drawer test',
      'Positive pivot shift test (most specific)',
    ],
    [
      'MRI: ACL fiber disruption, bone bruise pattern (lateral femoral condyle and posterolateral tibial plateau)',
      'Lachman test: anterior tibial translation with soft endpoint',
      'KT-1000 arthrometer for objective laxity measurement',
      'Radiographs: Segond fracture (lateral capsular avulsion, pathognomonic)',
      'Assess for associated meniscal and collateral ligament injuries',
    ],
    [
      'ACL reconstruction with autograft (patellar tendon, hamstring, quadriceps) for active patients',
      'Pre-operative physical therapy (prehab) to optimize outcomes',
      'Structured rehabilitation protocol over 9-12 months',
      'Non-operative management with bracing and PT for low-demand patients',
      'Criteria-based return to sport (strength, hop tests, psychological readiness)',
    ],
    [
      'Recurrent knee instability and giving way',
      'Secondary meniscal tears from chronic instability',
      'Early-onset post-traumatic OA',
      'Graft failure or re-rupture (5-15%)',
      'Contralateral ACL tear risk (especially in young athletes)',
    ],
    'The ACL is one of the main stabilizing ligaments inside your knee. It often tears during a sudden twist or pivot, causing a pop and rapid swelling. Many active people choose surgery to reconstruct the ligament, followed by several months of rehabilitation.',
    [
      'Locked knee (associated meniscal tear with displaced fragment)',
      'Vascular injury with knee dislocation (popliteal artery)',
      'Inability to bear weight with gross deformity',
    ],
  ),

  lateral_ankle_sprain: msk(
    'msk-lateral-ankle-sprain',
    'Lateral Ankle Sprain',
    'Esguince lateral de tobillo',
    'sports-injury',
    'FB51.0',
    'Injury to the lateral ankle ligaments, most commonly the ATFL, from inversion and plantar flexion force.',
    'Inversion mechanism stretches or tears the lateral ligament complex (ATFL first, then CFL, then PTFL). Grade I: stretch without macroscopic tear; Grade II: partial tear with moderate laxity; Grade III: complete rupture with instability.',
    [
      'Pain and swelling over the lateral malleolus',
      'Difficulty bearing weight',
      'Ecchymosis below and anterior to the lateral malleolus',
      'Positive anterior drawer test of ankle (ATFL)',
      'Positive talar tilt test (CFL)',
    ],
    [
      'Ottawa Ankle Rules to determine need for radiographs',
      'Radiographs: rule out fibula fracture, osteochondral injury',
      'MRI for suspected high-grade injury or persistent instability',
      'Stress radiographs for chronic instability evaluation',
    ],
    [
      'RICE protocol (rest, ice, compression, elevation) initially',
      'Early weight-bearing as tolerated with ankle brace',
      'Functional rehabilitation emphasizing proprioception and peroneal strengthening',
      'NSAIDs for pain and swelling',
      'Surgical ligament repair or reconstruction for chronic instability',
    ],
    [
      'Chronic ankle instability (20-40% of sprains)',
      'Osteochondral lesion of the talus',
      'Peroneal tendon injury',
      'Recurrent sprains',
    ],
    'An ankle sprain happens when you roll your ankle inward, stretching or tearing the ligaments on the outside. While common and often mild, proper rehabilitation with balance exercises is important to prevent re-injury and chronic instability.',
    [
      'Inability to bear weight (possible fracture — apply Ottawa rules)',
      'Gross deformity (dislocation)',
      'Numbness or loss of pulse in the foot',
    ],
  ),

  achilles_tendon_rupture: msk(
    'msk-achilles-tendon-rupture',
    'Achilles Tendon Rupture',
    'Rotura del tendón de Aquiles',
    'sports-injury',
    'FB52.0',
    'Complete disruption of the Achilles tendon, typically 2-6 cm above the calcaneal insertion in a zone of relative hypovascularity.',
    'Pre-existing tendon degeneration (tendinosis) weakens the Achilles tendon. Sudden eccentric loading during push-off exceeds tensile strength, causing rupture in the watershed zone of reduced blood supply. Fluoroquinolone use and corticosteroid injections increase risk.',
    [
      'Sudden sharp pain in the back of the ankle like being kicked',
      'Audible pop at the time of injury',
      'Inability to plantarflex the foot or stand on tiptoe',
      'Palpable gap in the tendon (may be obscured by swelling)',
      'Positive Thompson test (no plantarflexion with calf squeeze)',
    ],
    [
      'Thompson test: absence of passive plantarflexion when calf is squeezed',
      'Palpable gap 2-6 cm proximal to calcaneal insertion',
      'Ultrasound: tendon discontinuity, gap measurement',
      'MRI: extent of rupture and retraction (if diagnosis unclear)',
      'Radiographs to exclude calcaneal avulsion fracture',
    ],
    [
      'Surgical repair for active patients (lower re-rupture rate)',
      'Non-operative functional rehabilitation with early weight-bearing in equinus boot',
      'Progressive rehabilitation over 4-6 months',
      'Eccentric strengthening exercises (Alfredson protocol) in rehabilitation',
      'Gradual return to sport at 6-9 months',
    ],
    [
      'Re-rupture (2-5% surgical, 10-12% non-operative)',
      'Wound complications after surgery (sural nerve injury, infection)',
      'Calf weakness and reduced push-off strength',
      'DVT from immobilization',
    ],
    'The Achilles tendon is the thick cord connecting your calf muscles to your heel bone. When it ruptures, you feel a sudden snap at the back of your ankle and cannot push off your foot. It can be treated with surgery or a special boot — both followed by months of rehabilitation.',
    [
      'Signs of compartment syndrome (severe pain, tight calf)',
      'DVT symptoms (calf swelling, redness) during immobilization',
    ],
  ),

  meniscal_tear_acute: msk(
    'msk-meniscal-tear-acute',
    'Acute Meniscal Tear',
    'Rotura meniscal aguda',
    'sports-injury',
    'FB55.1',
    'Traumatic tear of the meniscus from twisting injury to a flexed, weight-bearing knee.',
    'Rotational force on a flexed knee traps and tears the meniscus. Longitudinal (bucket-handle), radial, and flap tears occur depending on the direction of force. Peripheral tears (red zone) have better healing potential due to blood supply. Medial meniscus tears are more common due to its firm capsular attachment.',
    [
      'Knee pain along the joint line after a twisting injury',
      'Delayed swelling over 24 hours (compared to ACL hemarthrosis)',
      'Mechanical catching, locking, or giving way',
      'Pain with deep flexion or squatting',
      'Positive McMurray test (click with rotation during extension)',
    ],
    [
      'MRI: gold standard for meniscal tear diagnosis and morphology',
      'McMurray test and joint line tenderness on examination',
      'Thessaly test at 20 degrees of knee flexion',
      'Radiographs to exclude fracture or loose body',
    ],
    [
      'Meniscal repair for peripheral tears in young patients (preserve meniscus)',
      'Arthroscopic partial meniscectomy for irreparable tears',
      'Conservative management with PT for small, stable tears',
      'Rehabilitation focused on quadriceps strengthening and ROM',
      'Meniscal transplant for symptomatic total meniscectomy in young patients',
    ],
    [
      'Locked knee requiring urgent arthroscopy (bucket-handle tear)',
      'Post-meniscectomy osteoarthritis',
      'Meniscal repair failure and re-tear',
      'Persistent effusions',
    ],
    'The meniscus is a C-shaped piece of cartilage in your knee that cushions and stabilizes the joint. A sudden twist can tear it, causing pain, swelling, and sometimes locking. When possible, surgeons try to repair the tear rather than remove it to protect the knee long-term.',
    [
      'Completely locked knee that will not straighten',
      'Concurrent signs of ligament injury (gross instability)',
    ],
  ),

  // =========================================================================
  // CONGENITAL
  // =========================================================================

  developmental_dysplasia_hip: msk(
    'msk-developmental-dysplasia-hip',
    'Developmental Dysplasia of the Hip (DDH)',
    'Displasia del desarrollo de la cadera',
    'congenital',
    'LB72.0',
    'Spectrum of hip joint abnormalities ranging from acetabular dysplasia to frank dislocation, presenting in infancy.',
    'Multifactorial etiology involving ligamentous laxity (maternal estrogen), mechanical factors (breech position, oligohydramnios), and genetic predisposition. Inadequate acetabular coverage allows the femoral head to subluxate or dislocate, preventing normal joint development.',
    [
      'Positive Ortolani maneuver (hip clunk with reduction of dislocated hip)',
      'Positive Barlow maneuver (hip dislocatable with posterior force)',
      'Asymmetric thigh skin folds',
      'Apparent limb length discrepancy',
      'Limited hip abduction (after 3 months)',
      'Galeazzi sign: unequal knee heights when hips and knees are flexed',
    ],
    [
      'Ultrasound (Graf method): standard for infants under 4-6 months',
      'AP pelvis radiograph after 4-6 months (femoral head ossification)',
      'Clinical screening at every well-child visit',
      'Risk factors: breech presentation, female sex, family history, first-born',
    ],
    [
      'Pavlik harness for infants up to 6 months (maintains hip in flexion and abduction)',
      'Closed reduction and spica casting if Pavlik fails',
      'Open reduction for late presentation or failed closed reduction',
      'Pelvic osteotomy (Salter, Pemberton) for residual dysplasia',
      'Monitoring with serial imaging',
    ],
    [
      'Avascular necrosis of femoral head (from treatment)',
      'Residual dysplasia leading to early-onset OA',
      'Limb length discrepancy',
      'Gait abnormalities',
      'Need for total hip arthroplasty in early adulthood',
    ],
    'DDH means the baby hip joint did not form properly, so the ball does not sit snugly in its socket. When caught early, a special harness worn for a few weeks keeps the hip in the right position while it develops normally. That is why doctors check every baby hip at checkups.',
    [
      'Irreducible hip dislocation in a newborn',
      'Signs of avascular necrosis during harness treatment (stop immediately)',
    ],
  ),

  clubfoot: msk(
    'msk-clubfoot',
    'Clubfoot (Talipes Equinovarus)',
    'Pie equinovaro (pie zambo)',
    'congenital',
    'LB73.0',
    'Congenital foot deformity combining hindfoot equinus, hindfoot varus, forefoot adductus, and midfoot cavus.',
    'Complex deformity of multifactorial origin involving abnormal tendon insertions, medial soft tissue contracture, and abnormal tarsal bone morphology. Genetic factors (PITX1 gene) and environmental influences contribute. The talus is medially rotated and plantar flexed with navicular and calcaneus displaced medially.',
    [
      'Rigid equinovarus deformity evident at birth',
      'Hindfoot in equinus (pointed down) and varus (turned in)',
      'Forefoot adducted and supinated',
      'Medial crease and posterior crease',
      'Calf muscle atrophy on affected side',
      'Bilateral in 50% of cases',
    ],
    [
      'Clinical diagnosis at birth (prenatal ultrasound can detect)',
      'Pirani or Dimeglio scoring systems for severity classification',
      'Radiographs: AP and lateral of foot for Kite angle and talocalcaneal angle',
      'Exclude syndromic causes (arthrogryposis, spina bifida)',
    ],
    [
      'Ponseti method: serial casting (gold standard, weekly casts correcting components sequentially)',
      'Percutaneous Achilles tenotomy for residual equinus (in 80-90% of cases)',
      'Foot abduction brace after casting (23 hours/day, then nighttime until age 4)',
      'Posteromedial release for resistant or recurrent clubfoot',
      'Tibialis anterior tendon transfer for dynamic supination recurrence',
    ],
    [
      'Recurrence (10-40%, usually from non-compliance with bracing)',
      'Overcorrection (rocker-bottom foot)',
      'Residual deformity requiring additional procedures',
      'Stiffness and arthritis in adulthood',
    ],
    'Clubfoot is a condition present at birth where a baby foot is turned inward and downward. It is not painful for the baby. The Ponseti method uses a series of gentle casts over several weeks to gradually straighten the foot, followed by a brace to keep it corrected.',
    [
      'Rigid deformity with skin breakdown from improperly applied cast',
      'Circulatory compromise in a casted foot',
    ],
  ),

  osteogenesis_imperfecta: msk(
    'msk-osteogenesis-imperfecta',
    'Osteogenesis Imperfecta',
    'Osteogénesis imperfecta',
    'congenital',
    'LD24.0',
    'Heritable disorder of connective tissue caused by defective type I collagen, resulting in bone fragility and recurrent fractures.',
    'Mutations in COL1A1 or COL1A2 genes cause quantitative or qualitative defects in type I collagen, the major structural protein of bone, skin, and tendons. Defective collagen reduces bone matrix quality, leading to thin cortices, decreased trabecular bone, and markedly reduced fracture resistance.',
    [
      'Recurrent fractures with minimal trauma (may present in infancy)',
      'Blue sclerae (type I, most common)',
      'Short stature',
      'Dentinogenesis imperfecta (opalescent teeth)',
      'Joint hypermobility',
      'Progressive hearing loss (adolescence/adulthood)',
      'Wormian bones on skull radiographs',
    ],
    [
      'Clinical and family history of fragility fractures',
      'Radiographs: osteopenia, thin cortices, deformities from healed fractures',
      'DXA: low BMD for age',
      'Genetic testing (COL1A1/COL1A2 mutations)',
      'Biochemical analysis of collagen from skin biopsy (less common now)',
      'Differentiate from non-accidental injury in children',
    ],
    [
      'Bisphosphonates (IV pamidronate in children, zoledronic acid in adults)',
      'Orthopedic management of fractures (intramedullary rodding for long bones)',
      'Physical therapy to maximize mobility and strength',
      'Calcium and vitamin D supplementation',
      'Hearing aids for conductive hearing loss',
      'Multidisciplinary care (genetics, orthopedics, endocrinology, ENT)',
    ],
    [
      'Severe skeletal deformity and short stature',
      'Basilar invagination (brainstem compression)',
      'Respiratory failure from restrictive lung disease (severe types)',
      'Progressive hearing loss',
      'Perinatal death in type II (lethal form)',
    ],
    'Osteogenesis imperfecta, sometimes called brittle bone disease, is an inherited condition where the protein that gives bones their strength (collagen) is not made properly. This makes bones very fragile. Treatments include medication to strengthen bones and careful orthopedic care.',
    [
      'Fracture in an infant or child (distinguish from non-accidental injury)',
      'Respiratory distress in severe forms',
      'Neurologic symptoms suggesting basilar invagination',
    ],
  ),

  scoliosis: msk(
    'msk-scoliosis',
    'Adolescent Idiopathic Scoliosis',
    'Escoliosis idiopática del adolescente',
    'congenital',
    'FA90.0',
    'Lateral curvature of the spine greater than 10 degrees by Cobb angle, presenting during adolescence without identifiable cause.',
    'Etiology is multifactorial: genetic predisposition, asymmetric growth of vertebral bodies during the adolescent growth spurt, and possible neuromuscular imbalance. The curve is three-dimensional with lateral curvature, vertebral rotation, and sagittal plane changes.',
    [
      'Trunk asymmetry noted during screening',
      'Prominent rib hump on forward bend (Adam test)',
      'Uneven shoulder heights or waistline asymmetry',
      'Usually painless in adolescents',
      'Right thoracic curve is the most common pattern',
      'Curve progression risk highest during rapid growth',
    ],
    [
      'Standing PA full-spine radiograph with Cobb angle measurement',
      'Adam forward bend test with scoliometer',
      'Risser sign for skeletal maturity assessment',
      'MRI if atypical features (pain, left thoracic curve, rapid progression, neurologic signs)',
      'Genetic testing emerging for curve progression risk',
    ],
    [
      'Observation with serial radiographs for curves under 25 degrees',
      'Bracing (TLSO) for curves 25-40 degrees in skeletally immature patients',
      'Spinal fusion for curves over 45-50 degrees',
      'Physical therapy (Schroth method) as adjunct to bracing',
      'Growing rods or vertebral body tethering for young children',
    ],
    [
      'Curve progression (especially before skeletal maturity)',
      'Cardiopulmonary compromise with severe thoracic curves (> 80 degrees)',
      'Chronic back pain in adulthood',
      'Cosmetic concerns and psychological impact',
      'Surgical complications: neurologic injury, infection, implant failure',
    ],
    'Scoliosis is a sideways curve of the spine that most often appears during the teenage growth spurt. Mild curves just need monitoring, while moderate curves may need a brace to prevent worsening. Surgery is only needed for severe curves.',
    [
      'Rapid curve progression (more than 10 degrees between visits)',
      'Neurologic symptoms (suggests non-idiopathic cause — needs MRI)',
      'Respiratory difficulty with severe thoracic curve',
    ],
  ),

  // =========================================================================
  // ADDITIONAL — MIXED CATEGORIES
  // =========================================================================

  septic_arthritis: msk(
    'msk-septic-arthritis',
    'Septic Arthritis',
    'Artritis séptica',
    'inflammatory',
    'FA01',
    'Acute bacterial infection of a joint, most commonly caused by Staphylococcus aureus, requiring urgent drainage.',
    'Hematogenous spread (most common), direct inoculation, or contiguous spread introduces bacteria into the synovial space. The joint lacks a basement membrane, facilitating bacterial entry. Proteolytic enzymes, bacterial toxins, and the inflammatory response rapidly destroy articular cartilage within 24-48 hours.',
    [
      'Acute monoarticular swelling, warmth, erythema (knee most common)',
      'Severe pain with any passive range of motion',
      'Fever and systemic toxicity',
      'Refusal to bear weight or move the joint',
      'Risk factors: prosthetic joint, immunosuppression, IV drug use, prior joint disease',
    ],
    [
      'Synovial fluid aspiration (mandatory): WBC > 50,000 with >75% PMNs, positive gram stain and culture',
      'Blood cultures (positive in 50%)',
      'Elevated ESR, CRP, and WBC',
      'Radiographs: joint effusion, soft tissue swelling (early); destruction (late)',
      'MRI for suspected hip or SI joint involvement',
    ],
    [
      'Empiric IV antibiotics after joint aspiration (vancomycin + third-gen cephalosporin)',
      'Urgent surgical drainage or serial arthrocentesis',
      'Arthroscopic lavage preferred for large joints',
      'Open surgical drainage for hip or prosthetic joints',
      'Transition to oral antibiotics after clinical improvement (total 3-4 weeks)',
      'Physical therapy after infection control',
    ],
    [
      'Rapid cartilage destruction if drainage delayed',
      'Osteomyelitis from contiguous spread',
      'Sepsis and septic shock',
      'Joint ankylosis and permanent stiffness',
      'Prosthetic joint infection requiring explantation',
    ],
    'Septic arthritis is a serious infection inside a joint that causes sudden severe pain, swelling, and fever. It is a medical emergency because the infection can destroy the joint cartilage within days. Treatment requires antibiotics and draining the infected fluid from the joint.',
    [
      'Hot, swollen joint with fever (requires immediate aspiration)',
      'Hemodynamic instability (sepsis)',
      'Prosthetic joint with new warmth, pain, or drainage',
    ],
  ),

  polymyalgia_rheumatica: msk(
    'msk-polymyalgia-rheumatica',
    'Polymyalgia Rheumatica',
    'Polimialgia reumática',
    'inflammatory',
    'FA24.1',
    'Inflammatory condition of older adults causing bilateral shoulder and hip girdle pain and stiffness with markedly elevated inflammatory markers.',
    'Immune-mediated inflammation of synovial structures, bursae, and tendon sheaths around the shoulders and hips. IL-6 is a key cytokine driver. Strong association with giant cell arteritis (GCA) — 15-20% of PMR patients develop GCA.',
    [
      'Bilateral shoulder and hip girdle pain and stiffness',
      'Morning stiffness lasting more than 45 minutes',
      'Difficulty raising arms above the head or rising from a chair',
      'Constitutional symptoms: fatigue, malaise, low-grade fever, weight loss',
      'Rapid onset (days to weeks) in patients over 50',
    ],
    [
      'Markedly elevated ESR (often > 40-50 mm/hr) and CRP',
      'Dramatic and rapid response to low-dose glucocorticoids (diagnostic and therapeutic)',
      'Ultrasound: bilateral subdeltoid bursitis, biceps tenosynovitis',
      'Exclude: RA, myositis, malignancy, hypothyroidism, infection',
      'Screen for GCA symptoms (headache, jaw claudication, visual changes)',
    ],
    [
      'Prednisone 12.5-25 mg/day (rapid response expected within 1-3 days)',
      'Gradual taper over 12-24 months',
      'Methotrexate as steroid-sparing agent for relapse or difficult taper',
      'IL-6 inhibitors (tocilizumab) for refractory cases',
      'Calcium, vitamin D, and bone protection during corticosteroid therapy',
    ],
    [
      'Corticosteroid side effects (osteoporosis, diabetes, infections)',
      'Disease relapse during taper (40-50%)',
      'Development of giant cell arteritis (risk of vision loss)',
      'Underdiagnosis or misdiagnosis as fibromyalgia',
    ],
    'Polymyalgia rheumatica causes severe stiffness and aching in the shoulders and hips, especially in the morning. It affects people over 50 and blood tests show high inflammation. A low dose of steroid medication usually brings dramatic relief within a day or two.',
    [
      'New severe headache, jaw pain, or visual disturbance (giant cell arteritis — risk of permanent vision loss)',
      'No response to prednisone (reconsider diagnosis)',
    ],
  ),

  compartment_syndrome: msk(
    'msk-compartment-syndrome',
    'Acute Compartment Syndrome',
    'Síndrome compartimental agudo',
    'fracture',
    'FB56.4',
    'Surgical emergency in which increased pressure within a closed fascial compartment compromises perfusion and viability of tissues.',
    'Hemorrhage or edema within an unyielding fascial compartment raises intracompartmental pressure above capillary perfusion pressure. Ischemia of muscle and nerve ensues within hours. The anterior compartment of the leg (tibial fractures) is the most common site.',
    [
      'Pain out of proportion to injury (cardinal feature)',
      'Pain with passive stretch of muscles in the affected compartment',
      'Tense, swollen compartment on palpation',
      'Paresthesias (early nerve ischemia)',
      'Pulselessness is a LATE finding — do not wait for it',
      'Most common after tibial shaft fractures',
    ],
    [
      'Clinical diagnosis — do not delay treatment for testing',
      'Intracompartmental pressure measurement (Stryker monitor): > 30 mmHg or within 30 mmHg of diastolic (delta pressure)',
      'Serial examinations in at-risk patients',
      'High suspicion in obtunded patients with long bone fractures',
    ],
    [
      'Emergency fasciotomy (definitive treatment)',
      'Two-incision four-compartment fasciotomy for the leg',
      'Remove all constrictive dressings, casts, or splints',
      'Keep limb at heart level (do not elevate)',
      'Delayed primary closure or skin grafting of fasciotomy wounds',
    ],
    [
      'Volkmann ischemic contracture (forearm) or claw toes (leg)',
      'Muscle necrosis and rhabdomyolysis',
      'Acute kidney injury from myoglobinuria',
      'Permanent nerve injury',
      'Amputation in severe cases',
      'Infection of necrotic tissue',
    ],
    'Compartment syndrome is a dangerous condition in which swelling inside a tight muscle compartment cuts off blood flow. It most often happens after a broken bone. It causes severe pain and is a surgical emergency — the muscle covering must be opened to release the pressure.',
    [
      'Severe pain out of proportion to injury',
      'Pain with passive toe or finger extension',
      'Numbness or tingling developing after a fracture',
      'Tense swollen limb after injury',
    ],
  ),

  de_quervain_tenosynovitis: msk(
    'msk-de-quervain-tenosynovitis',
    'De Quervain Tenosynovitis',
    'Tenosinovitis de De Quervain',
    'soft-tissue',
    'FB54.1',
    'Stenosing tenosynovitis of the first dorsal compartment tendons (APL and EPB) at the radial styloid.',
    'Thickening of the extensor retinaculum over the first dorsal compartment constricts the abductor pollicis longus and extensor pollicis brevis tendons. Repetitive thumb and wrist motion causes fibrous tendon sheath thickening. Common in new mothers (repetitive lifting of infant) and with smartphone overuse.',
    [
      'Pain at the radial aspect of the wrist near the radial styloid',
      'Pain with thumb gripping and pinching',
      'Swelling over the first dorsal compartment',
      'Positive Finkelstein test (pain with ulnar deviation of fist-clenched wrist)',
      'Crepitus with thumb motion',
    ],
    [
      'Clinical diagnosis based on history and Finkelstein test',
      'Ultrasound: tendon sheath thickening and effusion',
      'Radiographs to exclude CMC joint arthritis or scaphoid pathology',
    ],
    [
      'Thumb spica splint',
      'NSAIDs',
      'Corticosteroid injection into the first dorsal compartment (70-80% effective)',
      'Activity modification',
      'Surgical release of the first dorsal compartment for refractory cases',
    ],
    [
      'Chronic pain with failed conservative treatment',
      'Tendon subluxation after surgical release',
      'Superficial radial nerve injury (during injection or surgery)',
    ],
    'De Quervain tenosynovitis is a painful condition affecting the tendons on the thumb side of the wrist. It hurts when you grip, pinch, or twist your wrist. A splint and a corticosteroid injection usually resolve it.',
    [
      'Sudden loss of thumb extension (tendon rupture, rare)',
    ],
  ),

  trigger_finger: msk(
    'msk-trigger-finger',
    'Trigger Finger (Stenosing Tenosynovitis)',
    'Dedo en gatillo (tenosinovitis estenosante)',
    'soft-tissue',
    'FB54.2',
    'Stenosing tenosynovitis of a flexor tendon at the A1 pulley causing catching, locking, or triggering of the digit.',
    'Thickening of the A1 pulley and swelling of the flexor tendon create a size mismatch. The tendon catches as it passes through the narrowed pulley, producing triggering. Repetitive gripping, diabetes, and RA are risk factors. The ring and middle fingers and thumb are most commonly affected.',
    [
      'Painful clicking or snapping of the finger during flexion or extension',
      'Finger locking in flexed position requiring passive extension',
      'Tender nodule at the base of the finger (A1 pulley)',
      'Morning stiffness of the digit',
      'Pain at the MCP joint with gripping',
    ],
    [
      'Clinical diagnosis (triggering or palpable nodule)',
      'Ultrasound: A1 pulley thickening and tendon abnormality',
      'Classification: Grade I (pain) through IV (fixed contracture)',
    ],
    [
      'Activity modification and splinting',
      'NSAIDs',
      'Corticosteroid injection at the A1 pulley (first-line, effective in 60-90%)',
      'Percutaneous or open A1 pulley release for refractory cases',
    ],
    [
      'Fixed flexion contracture (chronic)',
      'Bow-stringing of the tendon after excessive pulley release',
      'Stiffness after surgery',
      'Recurrence',
    ],
    'Trigger finger causes one of your fingers to catch or lock when you bend it, sometimes snapping straight like pulling a trigger. It is caused by swelling around the tendon in your finger. A steroid injection at the base of the finger fixes it most of the time.',
    [
      'Locked finger that cannot be passively extended (may need urgent release)',
    ],
  ),

  osteomyelitis: msk(
    'msk-osteomyelitis',
    'Osteomyelitis',
    'Osteomielitis',
    'inflammatory',
    'FB70',
    'Infection of bone, most commonly caused by Staphylococcus aureus, via hematogenous spread or contiguous infection.',
    'Bacteria colonize bone via hematogenous seeding (children: metaphysis; adults: vertebral bodies) or direct inoculation (open fractures, surgery). Infection triggers inflammatory response, vascular thrombosis, and bone necrosis. Necrotic bone (sequestrum) harbors bacteria and is impervious to antibiotics.',
    [
      'Localized bone pain, tenderness, and warmth',
      'Fever and malaise (acute); may be absent in chronic',
      'Erythema and swelling over the affected bone',
      'Non-healing wound or draining sinus tract (chronic)',
      'Children: limping, refusal to bear weight, irritability',
    ],
    [
      'MRI (most sensitive and specific imaging study)',
      'Blood cultures (positive in 50% of hematogenous cases)',
      'Elevated ESR, CRP, and WBC',
      'Bone biopsy with culture (gold standard for pathogen identification)',
      'Radiographs: periosteal reaction and lytic changes (delayed 10-14 days)',
      'Nuclear bone scan or tagged WBC scan if MRI contraindicated',
    ],
    [
      'Prolonged IV antibiotics (4-6 weeks; culture-directed)',
      'Empiric coverage for S. aureus (nafcillin or vancomycin for MRSA)',
      'Surgical debridement for chronic osteomyelitis, sequestrum, or abscess',
      'Dead space management (antibiotic beads, muscle flaps)',
      'Vascular assessment and optimization in diabetic foot infections',
    ],
    [
      'Chronic osteomyelitis with relapse',
      'Pathologic fracture through infected bone',
      'Septic arthritis from contiguous spread',
      'Growth disturbance if physeal plate involved (children)',
      'Amputation in refractory cases (diabetic foot)',
    ],
    'Osteomyelitis is a bone infection usually caused by bacteria. It causes deep bone pain, swelling, and fever. Treatment requires several weeks of strong antibiotics and sometimes surgery to remove infected bone. In diabetes, foot infections can lead to osteomyelitis.',
    [
      'High fever with severe bone pain in a child (acute hematogenous osteomyelitis)',
      'Sepsis signs with bone infection',
      'Rapidly spreading infection in a diabetic foot',
    ],
  ),

  dupuytren_contracture: msk(
    'msk-dupuytren-contracture',
    'Dupuytren Contracture',
    'Contractura de Dupuytren',
    'soft-tissue',
    'FB57.0',
    'Progressive fibroproliferative disorder of the palmar fascia causing flexion contractures of the digits.',
    'Myofibroblast proliferation in the palmar fascia produces excess collagen (type III), forming nodules and cords. The disease progresses from palmar nodules to pretendinous cords that contract, pulling digits into fixed flexion. The ring and little fingers are most commonly affected. Strong genetic component with autosomal dominant penetrance.',
    [
      'Painless palmar nodule (early)',
      'Progressive thickening of palmar fascia into palpable cords',
      'Flexion contracture of MCP and PIP joints',
      'Ring and little fingers most commonly affected',
      'Hueston tabletop test positive (cannot flatten hand on table)',
      'Bilateral in 45% of cases',
    ],
    [
      'Clinical diagnosis (palpable cords and contracture)',
      'Tabletop test for functional assessment',
      'Document MCP and PIP contracture angles',
      'No imaging typically needed',
    ],
    [
      'Observation for nodules without contracture',
      'Collagenase Clostridium histolyticum injection (enzymatic fasciotomy)',
      'Needle aponeurotomy (percutaneous fasciotomy)',
      'Limited fasciectomy for MCP contracture over 30 degrees or any PIP contracture',
      'Dermofasciectomy with skin graft for recurrent disease',
      'Hand therapy post-intervention',
    ],
    [
      'Recurrence after treatment (40-70%)',
      'PIP joint contracture is more difficult to correct than MCP',
      'Digital nerve or artery injury during surgery',
      'Skin flap necrosis',
      'Complex regional pain syndrome',
    ],
    'Dupuytren contracture is a condition where thick tissue forms in the palm of your hand and slowly pulls one or more fingers into a bent position. It is not painful but can interfere with daily activities. Several treatments can release the contracted fingers.',
    [
      'Rapidly progressive contracture (may indicate aggressive diathesis)',
    ],
  ),

  calcium_pyrophosphate_disease: msk(
    'msk-cppd',
    'Calcium Pyrophosphate Deposition Disease (Pseudogout)',
    'Enfermedad por depósito de pirofosfato cálcico (pseudogota)',
    'inflammatory',
    'FA25.1',
    'Crystal arthropathy caused by deposition of calcium pyrophosphate dihydrate crystals in joints, causing acute or chronic inflammation.',
    'CPPD crystals deposit in articular cartilage (chondrocalcinosis) and are shed into the joint space, triggering NLRP3 inflammasome activation and neutrophilic inflammation similar to gout. Associated with aging, hemochromatosis, hyperparathyroidism, and hypomagnesemia.',
    [
      'Acute mono- or oligoarticular arthritis (pseudogout attack, knee most common)',
      'Acute inflammation mimicking gout or septic arthritis',
      'Chronic polyarthritis mimicking RA or OA (pseudo-RA, pseudo-OA)',
      'Asymptomatic chondrocalcinosis on radiographs',
      'Crowned dens syndrome (CPPD deposition around the odontoid)',
    ],
    [
      'Synovial fluid analysis: weakly positively birefringent rhomboid CPP crystals',
      'Radiographs: chondrocalcinosis (linear calcification in cartilage), especially knee menisci, wrist TFCC, pubic symphysis',
      'Screen for metabolic causes: calcium, PTH, ferritin, iron studies, magnesium',
      'Joint aspiration mandatory to exclude infection',
    ],
    [
      'Acute: NSAIDs, colchicine, or intra-articular corticosteroid injection',
      'Prophylaxis: low-dose colchicine for recurrent attacks',
      'Treat underlying metabolic disorder if present',
      'Methotrexate or hydroxychloroquine for chronic inflammatory CPPD',
      'No effective crystal-dissolving therapy available',
    ],
    [
      'Chronic arthropathy mimicking OA with more rapid destruction',
      'Crowned dens syndrome causing severe neck pain',
      'Joint destruction requiring arthroplasty',
      'Missed underlying metabolic disorder (hemochromatosis)',
    ],
    'Pseudogout is caused by a different type of crystal (calcium pyrophosphate) building up in joints and causing sudden painful attacks, most often in the knee. Unlike gout, there is no medication to lower crystal levels, but anti-inflammatory treatments control the attacks well.',
    [
      'Fever with acutely swollen joint (must exclude septic arthritis)',
      'Acute neck pain and stiffness (crowned dens syndrome — exclude meningitis)',
    ],
  ),

  systemic_lupus_msk: msk(
    'msk-lupus-msk',
    'Systemic Lupus Erythematosus (Musculoskeletal Manifestations)',
    'Lupus eritematoso sistémico (manifestaciones musculoesqueléticas)',
    'inflammatory',
    'FA21.Z',
    'Non-erosive arthritis and myalgias occurring in systemic lupus erythematosus, affecting over 90% of patients.',
    'Immune complex deposition and complement activation in synovial tissue drive non-destructive inflammation. Unlike RA, the inflammatory infiltrate rarely produces pannus or erosions. Jaccoud arthropathy results from ligamentous and capsular laxity rather than bony destruction. Avascular necrosis is associated with corticosteroid use.',
    [
      'Symmetric polyarthralgia and polyarthritis (hands, wrists, knees)',
      'Non-erosive, reducible deformities (Jaccoud arthropathy)',
      'Morning stiffness',
      'Myalgias and muscle weakness',
      'Tenosynovitis and tendon rupture',
      'Associated extra-articular features: malar rash, oral ulcers, serositis, nephritis',
    ],
    [
      'ANA (sensitive, not specific), anti-dsDNA, anti-Smith (specific)',
      'Complement levels (C3, C4) — low in active disease',
      'Radiographs: non-erosive arthritis (unlike RA)',
      'Differentiate from RA by absence of erosions and RF/anti-CCP positivity',
      'MRI for AVN screening in patients on long-term corticosteroids',
    ],
    [
      'Hydroxychloroquine (cornerstone of SLE therapy)',
      'NSAIDs for mild arthritis and myalgias',
      'Low-dose glucocorticoids for flares',
      'Methotrexate for refractory arthritis',
      'Belimumab or anifrolumab for active disease',
      'Avoidance of prolonged high-dose corticosteroids',
    ],
    [
      'Avascular necrosis (hip most common, corticosteroid-associated)',
      'Jaccoud deformity impairing hand function',
      'Tendon rupture',
      'Drug side effects (hydroxychloroquine retinal toxicity)',
      'Lupus flare involving kidneys, CNS, or blood',
    ],
    'Lupus can cause joint pain and swelling that looks like rheumatoid arthritis, but it usually does not permanently damage the joints. The treatment focuses on controlling the overactive immune system with medications like hydroxychloroquine, which also protects against organ damage.',
    [
      'New rash, kidney problems, or confusion (lupus flare)',
      'Sudden hip or knee pain (avascular necrosis)',
      'Signs of serious infection while on immunosuppressive therapy',
    ],
  ),

  avascular_necrosis: msk(
    'msk-avascular-necrosis',
    'Avascular Necrosis (Osteonecrosis)',
    'Necrosis avascular (osteonecrosis)',
    'degenerative',
    'FB83.0',
    'Death of bone tissue due to interruption of blood supply, most commonly affecting the femoral head.',
    'Disruption of osseous blood supply (traumatic or atraumatic) causes ischemic necrosis of subchondral bone. Dead bone cannot remodel, leading to structural weakening, subchondral fracture, and joint surface collapse. Corticosteroid use and alcohol are the most common non-traumatic causes.',
    [
      'Insidious onset of groin or hip pain',
      'Pain with weight-bearing and internal rotation',
      'Limited range of motion as disease progresses',
      'Often bilateral (60% in non-traumatic cases)',
      'May be asymptomatic early (detected on MRI)',
    ],
    [
      'MRI: gold standard — shows bone marrow edema and double-line sign (pathognomonic)',
      'Radiographs: crescent sign (subchondral fracture), sclerosis, femoral head collapse (late)',
      'Ficat and Arlet staging (I-IV) or ARCO classification',
      'Labs to evaluate risk factors (lipids, coagulation, inflammatory markers)',
    ],
    [
      'Protected weight-bearing in early stages',
      'Bisphosphonates to slow disease progression (limited evidence)',
      'Core decompression for pre-collapse stages',
      'Vascularized fibular graft for young patients',
      'Total hip arthroplasty for femoral head collapse with pain',
      'Address modifiable risk factors (reduce corticosteroids, alcohol cessation)',
    ],
    [
      'Femoral head collapse and secondary OA',
      'Contralateral hip involvement',
      'Need for total hip arthroplasty at a young age',
      'Post-surgical complications (infection, dislocation)',
    ],
    'Avascular necrosis means the bone tissue dies because it loses its blood supply, most often in the hip. It can happen after a fracture, from steroid medications, or heavy alcohol use. Early detection with MRI is important because treatment works best before the bone collapses.',
    [
      'Sudden onset of severe hip pain (femoral head collapse)',
      'Inability to bear weight',
    ],
  ),

};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search musculoskeletal conditions by name, description, clinical features,
 * or pathophysiology. Case-insensitive partial match.
 */
export function searchMusculoskeletalConditions(
  query: string,
): MusculoskeletalEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return Object.values(MUSCULOSKELETAL_CONDITIONS).filter((entry) => {
    const searchableText = [
      entry.name,
      entry.nameEs,
      entry.id,
      entry.description,
      entry.pathophysiology,
      entry.patientExplanation,
      ...entry.clinicalFeatures,
      ...entry.diagnostics,
      ...entry.treatment,
      ...entry.complications,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(q);
  });
}

/**
 * Filter musculoskeletal conditions by one or more categories.
 */
export function filterByMSKCategory(
  categories: MSKCategory | MSKCategory[],
): MusculoskeletalEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(MUSCULOSKELETAL_CONDITIONS).filter((entry) =>
    cats.includes(entry.category),
  );
}

/**
 * Retrieve a single musculoskeletal condition by its record key or id field.
 */
export function getMusculoskeletalCondition(
  key: string,
): MusculoskeletalEntry | undefined {
  // Try direct record key first
  if (MUSCULOSKELETAL_CONDITIONS[key]) {
    return MUSCULOSKELETAL_CONDITIONS[key];
  }
  // Fall back to searching by id field
  return Object.values(MUSCULOSKELETAL_CONDITIONS).find(
    (entry) => entry.id === key,
  );
}

/**
 * Get all unique categories represented in the database.
 */
export function getAvailableMSKCategories(): MSKCategory[] {
  const categories = new Set<MSKCategory>(
    Object.values(MUSCULOSKELETAL_CONDITIONS).map((entry) => entry.category),
  );
  return Array.from(categories).sort();
}

/**
 * Get a count of conditions per category.
 */
export function getMSKCategoryCounts(): Record<MSKCategory, number> {
  const counts = {} as Record<MSKCategory, number>;
  for (const entry of Object.values(MUSCULOSKELETAL_CONDITIONS)) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
}
