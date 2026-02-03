import { EducationalContent } from '../../../types';

export const scoliosisDeformity: EducationalContent = {
  id: 'ortho-scoliosis-deformity',
  type: 'condition',
  name: 'Scoliosis and Spinal Deformity',
  nameEs: 'Escoliosis y deformidad espinal',
  alternateNames: ['Spinal curvature', 'Adolescent idiopathic scoliosis', 'AIS', 'Kyphosis', 'Adult deformity'],

  levels: {
    1: {
      level: 1,
      summary: 'Scoliosis is a sideways curve of the spine that most often develops during the growth spurt before puberty. Most curves are mild, but some need bracing or surgery.',
      explanation: `**What Is Scoliosis?**
Normally, your spine is straight when viewed from behind. Scoliosis means the spine curves sideways, making an "S" or "C" shape. It is most commonly found in preteens and teenagers.

**How Is It Detected?**
- School screening or a parent noticing uneven shoulders or hips
- The Adam's forward bend test: bending forward reveals a rib hump on one side
- X-rays measure the angle of the curve (Cobb angle)

**How Severe Is It?**
- **Mild (10-25 degrees):** Watch and wait with periodic X-rays
- **Moderate (25-45 degrees):** Bracing may be recommended to prevent worsening during growth
- **Severe (over 45-50 degrees):** Surgery may be needed

**Important Facts:**
- Most scoliosis is painless in teenagers
- The cause is usually unknown (idiopathic) — it is NOT caused by heavy backpacks or bad posture
- Girls are more likely to have curves that progress and need treatment
- Mild scoliosis does not limit physical activity or sports`,
      keyTerms: [
        { term: 'scoliosis', definition: 'A sideways curve of the spine, usually shaped like an "S" or "C"' },
        { term: 'Cobb angle', definition: 'The measurement of how many degrees the spine is curved, used to decide treatment' },
        { term: 'brace', definition: 'A hard shell worn around the torso to keep a spinal curve from getting worse during growth' },
      ],
      analogies: ['Think of scoliosis like a tree that has grown slightly to one side — it is still strong, just not perfectly straight.'],
      patientCounselingPoints: ['Scoliosis is not caused by anything you did wrong.', 'Most mild curves never need surgery.', 'Wearing the brace as prescribed is important — it works best when worn consistently.'],
    },
    2: {
      level: 2,
      summary: 'Adolescent idiopathic scoliosis is the most common type. Management is guided by curve magnitude, skeletal maturity (Risser sign), and growth remaining. Bracing reduces surgical rates.',
      explanation: `**Types of Scoliosis:**
- **Idiopathic (80%):** No known cause. Adolescent form (10-18 years) is most common. Genetic component.
- **Congenital:** Vertebral malformation present at birth (hemivertebra, unsegmented bar)
- **Neuromuscular:** From cerebral palsy, muscular dystrophy, or spinal cord injury
- **Degenerative (adult):** From disc and facet joint degeneration in older adults

**Assessment:**
- Cobb angle: measured on standing PA X-ray from the most tilted vertebrae above and below the curve apex
- Risser sign (0-5): amount of iliac crest ossification; indicates growth remaining
  - Risser 0: significant growth remaining (highest risk of progression)
  - Risser 4-5: minimal growth remaining (low risk of progression)
- Curve pattern: right thoracic most common in AIS

**Treatment Guidelines (AIS):**
| Cobb Angle | Risser | Treatment |
|-----------|--------|-----------|
| <25 degrees | Any | Observation every 4-6 months |
| 25-45 degrees | 0-2 | Bracing (Boston, Rigo-Cheneau) |
| >45-50 degrees | Any | Surgical correction (posterior spinal fusion) |

**BrAIST Trial:** Bracing significantly reduces progression to surgical threshold (72% success vs. 48% observation). Wearing >12 hours/day showed dose-response benefit.

**When to Get MRI:**
- Curve convex to the LEFT thoracic (atypical pattern)
- Curve in a child under 10
- Rapid curve progression
- Neurological symptoms (pain, weakness, bowel/bladder issues)
- These may indicate an underlying cause (syringomyelia, tethered cord, tumor)`,
      keyTerms: [
        { term: 'Risser sign', definition: 'X-ray marker of skeletal maturity based on iliac crest ossification, graded 0-5' },
        { term: 'Cobb angle', definition: 'Standard radiographic measurement of scoliosis curve magnitude in degrees' },
        { term: 'posterior spinal fusion', definition: 'Surgery using metal rods and screws to straighten and fuse the curved spine' },
        { term: 'BrAIST trial', definition: 'Bracing in Adolescent Idiopathic Scoliosis Trial — proved bracing effectiveness in preventing curve progression' },
      ],
    },
    3: {
      level: 3,
      summary: 'Scoliosis management requires understanding curve classification (Lenke), selective fusion strategies, and the biomechanics of deformity correction with instrumentation.',
      explanation: `**Lenke Classification (AIS):**
Based on three components:
1. Curve type (1-6): defines which curves are structural (require fusion) vs. compensatory
   - Type 1: Main thoracic (most common)
   - Type 5: Thoracolumbar/lumbar
   - Type 3: Double major (thoracic + lumbar)
2. Lumbar modifier (A, B, C): based on CSVL (center sacral vertical line) relationship to lumbar apex
3. Sagittal modifier (-, N, +): based on T5-T12 kyphosis

Classification guides fusion level selection — fuse structural curves, spare compensatory curves to preserve motion.

**Surgical Principles:**
- Posterior spinal fusion (PSF) with pedicle screw instrumentation: gold standard
- Selective thoracic fusion for Lenke 1C curves: preserves lumbar motion
- Anterior approach: rare today, sometimes for thoracolumbar/lumbar curves
- Vertebral body tethering (VBT): fusionless, growth-modulating technique for skeletally immature patients with moderate curves — allows continued growth and motion

**Intraoperative Considerations:**
- Pedicle screw placement: freehand technique or navigation-assisted. Thoracic screws require understanding of pedicle morphology.
- Correction maneuvers: rod rotation (derotation), direct vertebral rotation, cantilever bending, translation
- Neuromonitoring: SSEPs and MEPs throughout to detect cord injury. Wake-up test if monitoring changes occur.

**Curve Progression Risk Factors:**
Female sex, younger age at diagnosis, Risser 0-1, larger curve at presentation, and double curves are the strongest predictors. Genetic testing (ScoliScore) attempted but has not been widely adopted due to variable predictive accuracy.

**Congenital Scoliosis:**
Failure of formation (hemivertebra — worst prognosis for progression) or failure of segmentation (unilateral unsegmented bar — worst prognosis, especially with contralateral hemivertebra). Treatment: observation, hemivertebra excision, or growing rod/VEPTR for young children.`,
      keyTerms: [
        { term: 'Lenke classification', definition: 'Comprehensive AIS classification system guiding surgical fusion levels based on curve type, lumbar modifier, and sagittal profile' },
        { term: 'vertebral body tethering', definition: 'Fusionless growth-modulating technique using a flexible cord on the convex side to slow curve progression' },
        { term: 'selective fusion', definition: 'Strategy of fusing only structural curves while preserving compensatory curves and motion segments' },
        { term: 'hemivertebra', definition: 'Congenital wedge-shaped vertebra from failure of formation causing progressive scoliosis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Complex deformity management includes early-onset scoliosis strategies, adult deformity correction with sagittal balance restoration, and complication prevention in long construct surgery.',
      explanation: `**Early-Onset Scoliosis (EOS):**
Diagnosed before age 10. Concern: thoracic insufficiency syndrome — progressive deformity restricts lung development. Treatment strategies preserve growth:
- Serial casting (Mehta): effective for infantile curves <60 degrees
- Growing rods (traditional or magnetically controlled — MAGEC): distracted every 4-6 months
- VEPTR (vertical expandable prosthetic titanium rib): for thoracic insufficiency
- Shilla technique: apical fusion with gliding non-locking screws at ends allowing growth
Goal: delay definitive fusion until age 10+ to allow thoracic growth.

**Adult Spinal Deformity:**
Distinct from AIS. Presents with pain and functional limitation (not cosmesis). SRS-Schwab classification incorporates sagittal parameters: PI-LL mismatch, SVA, and pelvic tilt.

**Surgical Planning (Adult):**
Align restoration targets: PI-LL <10 degrees, SVA <5cm, PT <25 degrees. Under-correction correlates with worse outcomes and higher revision rates. Upper instrumented vertebra (UIV) selection critical — stopping at the thoracolumbar junction (T10-L2) risks proximal junctional kyphosis (PJK, 20-40% incidence). PJK risk factors: older age, osteoporosis, greater correction, long fusions, disruption of posterior ligament complex.

**Complications of Deformity Surgery:**
- Proximal junctional kyphosis/failure (PJK/PJF): most common reason for revision
- Neurological injury (0.5-2%): managed with intraoperative monitoring
- Pseudarthrosis (5-15%): nonunion of fusion mass, more common in long constructs and smokers
- Rod fracture: indicates pseudarthrosis or excessive stress
- Infection (2-8%): higher in long constructs, neuromuscular patients, and revision surgery
- Flatback syndrome: loss of lumbar lordosis causing forward lean

**3-Column Osteotomies:**
- Smith-Petersen osteotomy (SPO): posterior column only, 10 degrees per level
- Pedicle subtraction osteotomy (PSO): closes wedge through all 3 columns, 30-35 degrees per level. Major blood loss risk.
- Vertebral column resection (VCR): removes entire vertebral body, maximum correction. Reserved for severe rigid deformity. Highest complication rate (20-40% neurological risk).`,
      keyTerms: [
        { term: 'thoracic insufficiency syndrome', definition: 'Inability of the thorax to support normal lung growth and respiration due to progressive spinal deformity' },
        { term: 'proximal junctional kyphosis', definition: 'Kyphotic angulation developing above the upper end of a spinal fusion construct' },
        { term: 'MAGEC rod', definition: 'Magnetically controlled growing rod that can be lengthened non-invasively using an external magnet' },
        { term: 'pseudarthrosis', definition: 'Failed bony fusion at the surgical site, often presenting as persistent pain or hardware failure' },
      ],
      clinicalNotes: 'Proximal junctional kyphosis is the most common complication of adult deformity surgery. Prophylactic measures include vertebral cement augmentation at UIV and UIV+1, avoiding UIV at the thoracolumbar junction, and preserving posterior ligaments.',
    },
    5: {
      level: 5,
      summary: 'Professional-level deformity management integrates registry data, novel fusionless techniques, robotic navigation, and evidence-based approaches to complex revision and multi-level reconstruction.',
      explanation: `**Current Evidence:**
- **BrAIST (2013):** Bracing reduces surgical rates from 52% to 28% in AIS 25-40 degrees. Dose-response: >12 hours/day most effective. Changed clinical practice toward bracing.
- **Harms Study Group data:** Selective thoracic fusion for Lenke 1C curves allows spontaneous lumbar correction. Overcorrection of thoracic curve risks lumbar decompensation.
- **Adult deformity outcomes (ISSG):** Surgical treatment improves ODI scores by 15+ points (exceeding MCID). However, major complication rate is 20-40% for long constructs. Patient selection is critical.
- **VBT registry:** Early results promising for curves 35-65 degrees in Risser 0-2 patients. 85% avoid fusion at 3 years. Long-term data pending.

**Sagittal Alignment Evidence:**
GAP (Global Alignment and Proportion) score improves on Schwab targets by incorporating individual patient proportional correction goals. Proportional (individualized) alignment strategies may reduce mechanical complications compared to population-based targets.

**Novel Techniques:**
- ApiFix: minimally invasive posterior dynamic device for moderate AIS (40-60 degrees). Single intervertebral fusion with periapical modulation. Limited long-term data.
- Tether (VBT) with disc release: for larger curves requiring augmented correction
- Shape memory alloy rods: self-correcting rods that straighten with body temperature (experimental)
- Patient-specific rod bending using 3D planning software

**Neuromuscular Scoliosis:**
Unique challenges: poor bone quality, pelvic obliquity, respiratory compromise, high infection rate (8-15%). Fusion typically extends to pelvis (Galveston technique, S2-alar-iliac screws). Unit rod or segmental instrumentation. Medical optimization (nutrition, pulmonary function) is critical.

**Scheuermann's Kyphosis:**
Vertebral wedging >5 degrees in 3+ consecutive vertebrae (Sorensen criteria). Thoracic kyphosis >70-80 degrees with pain refractory to PT may warrant posterior fusion. Anterior release rarely needed with modern all-posterior techniques.

**Registry and Quality Improvement:**
SRS morbidity and mortality database provides benchmarking. Patient-reported outcomes (SRS-22r, ODI) guide surgical decision-making. Risk calculators (ACS NSQIP, spine-specific tools) help counsel patients on individualized complication risk.`,
      keyTerms: [
        { term: 'GAP score', definition: 'Global Alignment and Proportion score — individualized sagittal alignment targets based on pelvic morphology' },
        { term: 'S2-alar-iliac screws', definition: 'Modern technique for pelvic fixation in long constructs, providing superior fixation with lower profile than Galveston technique' },
        { term: 'Scheuermann kyphosis', definition: 'Structural thoracic kyphosis from vertebral wedging >5 degrees in 3+ consecutive vertebrae during adolescence' },
        { term: 'SRS-22r', definition: 'Scoliosis Research Society validated patient-reported outcome measure assessing function, pain, self-image, and mental health' },
      ],
      clinicalNotes: 'For adult deformity, individualized alignment targets (GAP score) are replacing population-based targets. Under-correction remains the most common surgical error — but overcorrection of the thoracolumbar junction risks PJK. Balance is key.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-braist', type: 'article', title: 'BrAIST: Bracing in Adolescent Idiopathic Scoliosis Trial', source: 'N Engl J Med. 2013;369(16):1512-1521', license: 'Proprietary' },
    { id: 'cit-lenke', type: 'article', title: 'Lenke Classification System for Adolescent Idiopathic Scoliosis', source: 'J Bone Joint Surg Am. 2001;83(8):1169-1181', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-disc-herniation-stenosis', targetType: 'condition', relationship: 'sibling', label: 'Disc Herniation and Spinal Stenosis' },
    { targetId: 'ortho-compression-fracture', targetType: 'condition', relationship: 'see-also', label: 'Vertebral Compression Fracture' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'spine', 'deformity'],
    keywords: ['scoliosis', 'kyphosis', 'Lenke', 'bracing', 'spinal fusion', 'sagittal balance', 'AIS', 'adult deformity'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'pediatrics'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default scoliosisDeformity;
