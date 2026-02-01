import { EducationalContent } from '../../../types';

export const aclAndMeniscus: EducationalContent = {
  id: 'ortho-acl-meniscus-injuries',
  type: 'condition',
  name: 'ACL Tears and Meniscus Injuries',
  nameEs: 'Desgarros del LCA y lesiones de menisco',
  alternateNames: ['Anterior cruciate ligament tear', 'Meniscal tear', 'Knee ligament injury'],

  levels: {
    1: {
      level: 1,
      summary: 'The ACL is a ligament in the knee that keeps it stable. It can tear during sports, causing the knee to feel loose. The meniscus is a rubbery cushion that can also tear, causing pain and catching.',
      explanation: `**ACL Tear:**
The ACL (anterior cruciate ligament) is a strong band inside the knee that prevents it from sliding forward and twisting. It often tears during sports that involve cutting, pivoting, or sudden stops.

**How It Happens:**
- Landing awkwardly from a jump
- Suddenly changing direction while running
- Direct contact to the knee (less common)
- Most people hear or feel a "pop"

**Meniscus Tear:**
The meniscus is a C-shaped piece of rubbery cartilage that acts as a shock absorber between the thigh bone and shin bone. Each knee has two menisci.

**Symptoms:**
- Knee swelling and pain
- Feeling like the knee is "giving out" (ACL)
- Catching or locking sensation (meniscus)
- Pain with squatting or twisting

**Treatment:**
- Not everyone needs surgery
- Physical therapy is important for both
- Young athletes who want to return to cutting sports usually benefit from ACL reconstruction
- Meniscus tears may heal on their own or need arthroscopic surgery`,
      keyTerms: [
        { term: 'ACL', definition: 'A strong band inside the knee that prevents it from wobbling and twisting' },
        { term: 'meniscus', definition: 'A rubbery cushion in the knee that absorbs shock between the bones' },
        { term: 'arthroscopy', definition: 'Minimally invasive surgery using a small camera inside the joint' },
      ],
      analogies: ['The ACL is like a seat belt for your knee — it stops the bones from sliding too far.', 'The meniscus is like a washer between two bolts, spreading out the pressure.'],
      patientCounselingPoints: ['Physical therapy is critical whether or not you have surgery.', 'Full recovery from ACL surgery takes 9-12 months.', 'Many meniscus tears in adults over 40 respond well to therapy alone.'],
    },
    2: {
      level: 2,
      summary: 'ACL tears are common sports injuries requiring decisions about reconstruction vs. rehabilitation. Meniscus tears are classified by location, pattern, and vascularity, which determine treatment.',
      explanation: `**ACL Injury Mechanism:**
70% are non-contact: cutting, pivoting, deceleration, or landing with the knee in valgus (knock-kneed position) and internal rotation. Women are 3-5 times more likely to tear their ACL due to anatomical (wider pelvis, narrower intercondylar notch), hormonal (estrogen effect on ligament laxity), and neuromuscular factors.

**ACL Physical Exam:**
- Lachman test: most sensitive (anterior translation with knee at 20-30 degrees flexion)
- Anterior drawer test: anterior translation at 90 degrees flexion
- Pivot shift: most specific (reproduces the subluxation event)

**ACL Treatment Decision:**
- Reconstruction recommended for: active patients wanting to return to cutting/pivoting sports, recurrent instability, associated repairable meniscus tear
- Conservative (rehab) appropriate for: lower-demand patients, those willing to modify activities, no instability with daily activities

**Meniscus Tear Classification:**
- By location: red zone (outer 1/3, has blood supply, can heal), red-white zone (middle), white zone (inner 2/3, no blood supply, poor healing)
- By pattern: longitudinal, radial, horizontal cleavage, bucket handle (locks knee), complex/degenerative
- By cause: acute traumatic (young athletes) vs. degenerative (over 40, minimal trauma)

**Meniscus Treatment:**
- Repair (suturing) for tears in the red zone, especially in young patients or with concurrent ACL reconstruction
- Partial meniscectomy (remove torn portion) for irreparable tears — immediate weight bearing
- Conservative (therapy, NSAIDs) for stable degenerative tears — outcomes equal to surgery at 2 years`,
      keyTerms: [
        { term: 'Lachman test', definition: 'The most sensitive physical exam test for ACL tear, testing anterior translation at 20-30 degrees of knee flexion' },
        { term: 'pivot shift test', definition: 'Physical exam test that reproduces the subluxation event of an ACL-deficient knee' },
        { term: 'red zone', definition: 'Outer third of meniscus with blood supply where tears have healing potential' },
        { term: 'bucket handle tear', definition: 'A large longitudinal meniscus tear that flips into the joint, causing mechanical locking' },
      ],
    },
    3: {
      level: 3,
      summary: 'ACL reconstruction techniques, graft choices, and rehabilitation protocols are evolving. Meniscus preservation is increasingly emphasized to prevent long-term arthritis.',
      explanation: `**ACL Reconstruction — Graft Options:**
- **Bone-patellar tendon-bone (BTB) autograft:** Gold standard for high-demand athletes. Bone-to-bone healing. Risk: anterior knee pain, kneeling pain, patellar fracture.
- **Hamstring autograft (gracilis + semitendinosus):** Less donor-site morbidity. Soft tissue-to-bone healing (slower). Risk: hamstring weakness, tunnel widening.
- **Quadriceps tendon autograft:** Gaining popularity. Strong graft, less anterior knee pain than BTB. Bone block optional.
- **Allograft:** Used for revision, multi-ligament, and low-demand patients. Higher re-tear rates in young active patients (IRB, achilles, tibialis anterior).

**Tunnel Positioning:**
Anatomic reconstruction places tunnels at the native ACL footprint. Femoral tunnel at the center of the lateral wall of the intercondylar notch. Tibial tunnel posterior to the anterior horn of the lateral meniscus. Non-anatomic placement is the most common cause of graft failure.

**Rehabilitation Protocol (Accelerated):**
- Weeks 0-2: brace, crutches, quad sets, straight leg raises, ROM 0-90 degrees
- Weeks 2-6: progressive ROM to full, stationary bike, closed-chain exercises
- Months 2-4: leg press, step-ups, balance training
- Months 4-6: running progression (straight line)
- Months 6-9: sport-specific agility, cutting, pivoting drills
- Months 9-12: return-to-sport testing (quad strength >90% LSI, hop tests >90%, psychological readiness)

**Meniscus Preservation Strategies:**
Meniscectomy leads to peak contact stress increase of 235% (total) or 65% (partial), accelerating arthritis. Emphasis on repair when possible. Meniscus root repair for root tears (equivalent to meniscectomy biomechanically if not repaired). Meniscal transplantation (allograft) for post-meniscectomy patients <50 with symptoms.

**ACL + Meniscus Combined Injuries:**
Meniscus repair performed with ACL reconstruction has better healing rates (>90%) than isolated meniscus repair (~60-70%), likely due to the hemarthrosis providing growth factors.`,
      keyTerms: [
        { term: 'BTB autograft', definition: 'Bone-patellar tendon-bone graft harvested from the patient\'s own knee, considered gold standard for ACL reconstruction' },
        { term: 'anatomic reconstruction', definition: 'ACL tunnel placement at the native footprint for biomechanically superior knee kinematics' },
        { term: 'LSI', definition: 'Limb symmetry index — ratio of injured to uninjured limb performance, >90% required for return to sport' },
        { term: 'meniscus root tear', definition: 'Tear at the tibial attachment of the meniscus, functionally equivalent to total meniscectomy' },
      ],
    },
    4: {
      level: 4,
      summary: 'Complex knee ligament injuries, ACL revision strategies, anterolateral ligament reconstruction, and the role of biologic augmentation represent advanced topics in sports knee surgery.',
      explanation: `**Multi-Ligament Knee Injury (Knee Dislocation):**
Defined as disruption of 2 or more major knee ligaments. Often associated with knee dislocation. Schenck classification: KD-I (ACL/PCL + one collateral), KD-II (ACL + PCL), KD-III (ACL + PCL + one collateral), KD-IV (all four ligaments), KD-V (periarticular fracture-dislocation).

**Vascular Emergency:** Popliteal artery injury in 7-40% of knee dislocations. Mandatory vascular exam (ABI; if <0.9, CT angiography). Warm ischemia time >6 hours leads to amputation.

**ACL Revision Surgery:**
Re-tear rates after primary ACL reconstruction: 3-8% graft rupture + 8-12% contralateral ACL tear. Revision indications: traumatic re-rupture, technical error (tunnel malposition — most common cause). Two-stage revision if tunnels need bone grafting due to widening. Graft choice: allograft or contralateral autograft. Outcomes inferior to primary reconstruction.

**Anterolateral Ligament (ALL) and Lateral Extra-Articular Tenodesis:**
The ALL is a distinct ligament on the anterolateral knee contributing to rotational stability. Modified Lemaire lateral extra-articular tenodesis or ALL reconstruction added to ACL reconstruction in high-risk patients (pivot shift grade 3, revision ACL, generalized laxity, young high-demand athletes). STABILITY trial showed significantly reduced re-tear rate (ACL + LET: 4% vs. ACL alone: 11%).

**Biologic Augmentation:**
- PRP: some evidence for improved healing of partial ACL tears and meniscus repair
- Stem cells (bone marrow aspirate concentrate): theoretical for meniscus healing and cartilage repair
- Internal brace (InternalBrace): suture tape augmentation for ACL repair (BEAR trial), primary repair with scaffold — emerging technology for proximal ACL tears

**Meniscus Transplantation:**
Allograft meniscal transplantation for symptomatic post-meniscectomy patients <50 without advanced arthritis. Size-matched donor meniscus. Bridge-in-slot or bone plug fixation. 70-80% good-to-excellent outcomes at 10 years. Does not prevent arthritis progression.`,
      keyTerms: [
        { term: 'Schenck classification', definition: 'System for classifying multi-ligament knee injuries based on which ligaments are disrupted' },
        { term: 'ABI', definition: 'Ankle-brachial index — ratio of ankle to arm blood pressure used to screen for vascular injury in knee dislocation' },
        { term: 'STABILITY trial', definition: 'RCT showing ACL reconstruction + lateral extra-articular tenodesis reduces re-tear rate in high-risk patients' },
        { term: 'InternalBrace', definition: 'Suture tape augmentation technique used for primary ACL repair or augmentation of reconstruction' },
      ],
      clinicalNotes: 'Every knee dislocation requires emergent vascular assessment. Obtain ABI and if <0.9, proceed to CT angiography immediately. Document popliteal pulse before and after reduction.',
    },
    5: {
      level: 5,
      summary: 'Professional management of ACL and meniscus injuries integrates evidence from landmark trials, registry data, biologic strategies, and individualized return-to-sport algorithms.',
      explanation: `**Landmark ACL Evidence:**
- **KANON trial:** No difference in outcomes between early ACL reconstruction + rehab vs. structured rehab with optional delayed reconstruction at 2 and 5 years. However, 51% of rehab-first group eventually had reconstruction.
- **STABILITY trial:** ACL + lateral extra-articular tenodesis (LET) reduced clinical graft failure from 11% to 4% in high-risk patients (<25 years, competitive sports, pivot shift grade 2+).
- **MOON cohort:** Largest prospective ACL cohort (>7,000 patients). BTB autograft associated with lower re-tear rate (3.6%) compared to hamstring (6.2%) and allograft (9.6%) at 6 years.
- **BEAR trial:** Bridge-enhanced ACL repair with autologous blood and bovine collagen scaffold showed non-inferior outcomes to ACLR at 2 years for proximal tears. May preserve native ACL proprioception.

**Meniscus Evidence:**
- **FIDELITY trial:** Partial meniscectomy no better than sham surgery for degenerative meniscal tears at 2 years (confirmed by multiple RCTs: ESCAPE, METEOR)
- Meniscus root repair: failure to repair root tear leads to equivalent biomechanical effect as total meniscectomy. Repair restores 60-80% of contact mechanics.

**Return-to-Sport Decision Making:**
Evidence-based criteria: time from surgery >9 months (some advocate >12 months — re-tear rate decreases 51% for each month delay in RTS up to 9 months), quad strength LSI >90%, hop test battery LSI >90%, ACL-RSI psychological readiness score >56. Despite meeting criteria, second ACL injury rate remains 15-25% in young athletes returning to high-risk sports.

**Prevention Programs:**
FIFA 11+, PEP program, Sportsmetrics: neuromuscular training programs reduce ACL injury risk by 50-70% in female athletes. Key components: plyometrics, balance training, hip and core strengthening, landing mechanics.

**Future Directions:**
- Meniscal scaffold (Actifit, CMI) for segmental meniscal loss
- Personalized return-to-sport algorithms integrating biomechanics, neurocognitive testing, and psychosocial readiness
- Genetic risk profiling for ACL injury susceptibility (COL1A1, COL5A1 polymorphisms)
- ACL repair with biologic augmentation gaining ground for appropriate tear patterns`,
      keyTerms: [
        { term: 'KANON trial', definition: 'Swedish RCT comparing early ACL reconstruction to structured rehabilitation with optional delayed reconstruction' },
        { term: 'MOON cohort', definition: 'Multicenter Orthopaedic Outcomes Network — largest prospective ACL reconstruction cohort study' },
        { term: 'BEAR trial', definition: 'Bridge-Enhanced ACL Repair trial evaluating scaffold-based ACL repair vs. reconstruction' },
        { term: 'FIFA 11+', definition: 'Evidence-based neuromuscular warm-up program reducing ACL and lower extremity injury risk by 30-70%' },
      ],
      clinicalNotes: 'For young competitive athletes, BTB autograft with lateral extra-articular tenodesis provides the lowest re-tear rate. Delay return to cutting/pivoting sports until at least 9 months with objective criteria met.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-stability', type: 'article', title: 'STABILITY Trial: ACL Reconstruction with and without LET', source: 'N Engl J Med. 2022;386(22):2099-2109', license: 'Proprietary' },
    { id: 'cit-moon', type: 'article', title: 'MOON Cohort: ACL Graft Choice and Outcomes', source: 'Am J Sports Med. 2014;42(10):2301-2310', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-rotator-cuff-sports', targetType: 'condition', relationship: 'sibling', label: 'Rotator Cuff and Shoulder Sports Injuries' },
    { targetId: 'ortho-acl-tear', targetType: 'condition', relationship: 'related', label: 'ACL Tear (Database Entry)' },
    { targetId: 'ortho-meniscus-tear', targetType: 'condition', relationship: 'related', label: 'Meniscus Tear (Database Entry)' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'sports medicine', 'knee'],
    keywords: ['ACL', 'meniscus', 'reconstruction', 'arthroscopy', 'return to sport', 'graft selection'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default aclAndMeniscus;
