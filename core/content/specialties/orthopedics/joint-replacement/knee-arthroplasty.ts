import { EducationalContent } from '../../../types';

export const kneeArthroplasty: EducationalContent = {
  id: 'ortho-knee-arthroplasty',
  type: 'topic',
  name: 'Knee Arthroplasty (Knee Replacement)',
  nameEs: 'Artroplastia de rodilla (reemplazo de rodilla)',
  alternateNames: ['Total knee replacement', 'TKA', 'Unicompartmental knee', 'Partial knee replacement'],

  levels: {
    1: {
      level: 1,
      summary: 'Knee replacement surgery removes damaged cartilage and bone from the knee joint and replaces the surfaces with metal and plastic parts.',
      explanation: `Knee replacement is a very common and successful surgery for people with severe knee arthritis that has not improved with other treatments.

**When Is It Needed?**
- Knee pain that interferes with daily activities (walking, stairs, getting up from a chair)
- Pain at rest or at night
- Knee stiffness that limits bending or straightening
- Other treatments (medications, injections, therapy) have stopped working

**What Happens:**
The surgeon removes the damaged surfaces of the knee bones and replaces them with smooth metal and plastic parts. The surgery takes about 1-2 hours.

**Recovery:**
- You will bend your knee and walk with help on the same day
- Most people go home in 1-2 days
- Physical therapy begins immediately
- Use a walker then cane for 2-6 weeks
- Driving at 4-6 weeks
- Full recovery takes 3-6 months

**The new knee typically lasts 20-25 years or longer.**`,
      keyTerms: [
        { term: 'knee replacement', definition: 'Surgery that puts smooth metal and plastic surfaces on the worn-out knee joint' },
        { term: 'cartilage', definition: 'The smooth, slippery covering on the ends of bones in a joint' },
      ],
      analogies: ['A knee replacement is like resurfacing a worn-out road — the underlying structure stays, but the surface is made smooth again.'],
      patientCounselingPoints: ['Physical therapy is the most important part of recovery.', 'Bending your knee is essential — aim for 90 degrees by 2 weeks and 120 degrees by 6 weeks.', 'Ice and elevate after exercises to manage swelling.'],
    },
    2: {
      level: 2,
      summary: 'Total knee arthroplasty resurfaces the femoral condyles, tibial plateau, and optionally the patella. Unicompartmental knee arthroplasty addresses isolated single-compartment disease.',
      explanation: `**Types of Knee Replacement:**
- **Total knee arthroplasty (TKA):** Resurfaces all three compartments (medial, lateral, patellofemoral). Most common type.
- **Unicompartmental (partial) knee arthroplasty (UKA):** Resurfaces only the damaged compartment. Faster recovery but stricter indications.
- **Patellofemoral arthroplasty:** Replaces only the kneecap groove. Uncommon, for isolated patellofemoral arthritis in younger patients.

**Components:**
- **Femoral component:** Cobalt-chrome metal cap over the femoral condyles
- **Tibial component:** Metal tray with polyethylene insert on the tibia
- **Patellar component (optional):** Polyethylene button cemented to the patella
- **Polyethylene insert:** Ultra-high molecular weight polyethylene (UHMWPE) bearing surface

**Key Surgical Steps:**
1. Bone cuts using alignment guides or robotic assistance
2. Ligament balancing (equal tension in flexion and extension)
3. Trial components to check alignment, stability, and range of motion
4. Cement fixation of final components (most common)

**Risks:**
- Infection (1-2%)
- Stiffness (may need manipulation under anesthesia)
- Blood clots (DVT/PE)
- Persistent pain (10-20% have some residual dissatisfaction)
- Loosening over time`,
      keyTerms: [
        { term: 'TKA', definition: 'Total knee arthroplasty — replacement of all three knee compartments' },
        { term: 'UKA', definition: 'Unicompartmental knee arthroplasty — replacement of a single compartment' },
        { term: 'ligament balancing', definition: 'Surgical technique to ensure equal tension on medial and lateral sides in flexion and extension' },
        { term: 'polyethylene', definition: 'Durable plastic material used as the bearing surface in knee replacements' },
      ],
    },
    3: {
      level: 3,
      summary: 'TKA success depends on proper alignment, ligament balancing, and component positioning. Mechanical and kinematic alignment philosophies offer different approaches to restoring native knee biomechanics.',
      explanation: `**Alignment Philosophy:**
- **Mechanical alignment (traditional):** Cuts made perpendicular to the mechanical axis of the femur and tibia. Goal: neutral hip-knee-ankle (HKA) angle. Requires ligament releases to create a rectangular flexion-extension gap.
- **Kinematic alignment:** Restores the patient's native joint line and constitutional alignment. Reduces need for soft tissue releases. Growing evidence for improved satisfaction but concerns about extreme outlier alignment.

**Constraint Spectrum:**
- CR (cruciate-retaining): preserves PCL, allows femoral rollback
- PS (posterior-stabilized): substitutes PCL with a post-cam mechanism
- VVC (varus-valgus constrained): for moderate ligament deficiency
- Hinged: for severe ligament loss or complex revision

**Indications for UKA:**
Isolated medial (most common) or lateral compartment arthritis, intact ACL, correctable deformity (<10 degrees), BMI <35, age >60 (controversial). Mobile-bearing (Oxford) vs. fixed-bearing designs.

**Patella Management:**
Resurface vs. not resurface is debated. Most North American surgeons resurface. Risks of resurfacing: fracture, avascular necrosis, clunk syndrome. Risks of not resurfacing: anterior knee pain, secondary resurfacing.

**Outcomes:**
- TKA: 95% 10-year survivorship, 85% 20-year survivorship
- UKA: 90% 10-year survivorship but higher revision rate than TKA
- 80% of patients are satisfied; 20% report residual symptoms despite well-functioning implants`,
      keyTerms: [
        { term: 'mechanical alignment', definition: 'Traditional philosophy targeting neutral hip-knee-ankle axis with perpendicular bone cuts' },
        { term: 'kinematic alignment', definition: 'Alignment philosophy that restores native joint line orientation and constitutional limb alignment' },
        { term: 'post-cam mechanism', definition: 'In PS TKA, a tibial post engages a femoral cam to substitute for the resected PCL during deep flexion' },
        { term: 'constraint', definition: 'Degree of inherent stability built into the prosthesis design, from minimal (CR) to maximal (hinged)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced TKA topics include robotic-assisted surgery, management of the stiff or painful TKA, aseptic loosening, and the differential diagnosis of the unhappy knee replacement.',
      explanation: `**The Painful TKA — Systematic Evaluation:**
20% of TKA patients have some dissatisfaction. Systematic workup:
1. History: timing of pain (immediate vs. delayed), location, mechanical symptoms
2. Labs: ESR, CRP to screen for infection
3. Imaging: weight-bearing AP, lateral, skyline X-rays; long-leg alignment films
4. Aspiration: cell count (>3000 WBC, >80% PMNs), culture, alpha-defensin
5. Advanced imaging: bone scan (loosening), CT (rotation), SPECT-CT

**Differential Diagnosis:**
- Infection (PJI): persistent pain, wound drainage, elevated inflammatory markers
- Aseptic loosening: progressive radiolucent lines >2mm, component migration
- Instability: mid-flexion, flexion, or extension instability from ligament imbalance
- Malalignment: component rotation errors (femoral internal rotation causes patellofemoral problems)
- Patella maltracking: lateral subluxation, tilt, clunk syndrome
- Stiffness (arthrofibrosis): <90 degrees flexion at 3 months — consider MUA
- Extra-articular: hip pathology, spine (L3-4 radiculopathy), vascular claudication
- Soft tissue impingement: retained osteophytes, prominent cement
- Allergy: rare metal hypersensitivity (nickel, cobalt, chromium) — patch testing

**Manipulation Under Anesthesia (MUA):**
Indicated for stiffness <90 degrees flexion at 6-12 weeks post-op. Success rate higher when performed early (<12 weeks). Technique: gentle controlled flexion to break adhesions. Risk: periprosthetic fracture, wound complications.

**Robotic-Assisted TKA:**
Systems (Mako, ROSA, NAVIO) use preoperative CT or intraoperative mapping for bone cut planning. Evidence shows improved component positioning accuracy. Long-term clinical outcome superiority over conventional TKA not yet demonstrated.`,
      keyTerms: [
        { term: 'arthrofibrosis', definition: 'Excessive scar tissue formation causing painful stiffness after knee surgery' },
        { term: 'MUA', definition: 'Manipulation under anesthesia — controlled forced flexion to break adhesions in a stiff knee' },
        { term: 'SPECT-CT', definition: 'Combined bone scintigraphy and CT for localizing the source of pain in a painful arthroplasty' },
        { term: 'radiolucent line', definition: 'Dark line on X-ray at the bone-cement or bone-implant interface, suggesting loosening if progressive and >2mm' },
      ],
      clinicalNotes: 'Always rule out infection first in a painful TKA. Obtain ESR, CRP, and joint aspirate before any revision surgery. Alpha-defensin is the most accurate single synovial fluid test.',
    },
    5: {
      level: 5,
      summary: 'Professional-level TKA encompasses revision surgery strategies, bone loss management, registry outcomes, and integration of robotics, sensors, and personalized implants.',
      explanation: `**Revision TKA — Bone Loss Management (AORI Classification):**
- Type 1: Intact metaphyseal bone — standard revision components
- Type 2A: Damaged metaphyseal bone, one condyle/plateau — augments (metal wedges or blocks)
- Type 2B: Damaged metaphyseal bone, both condyles/plateaux — augments + stems
- Type 3: Deficient metaphyseal segment — structural allograft, cone (tantalum metaphyseal cone), sleeve, or tumor prosthesis (megaprosthesis)

**Fixation in Revision:**
Stems should bypass defects by two cortical diameters. Press-fit vs. cemented stems based on canal quality. Offset stems allow independent stem and component positioning. Tantalum cones and sleeves provide metaphyseal fixation and fill defects.

**Sensor Technology:**
Intraoperative smart sensors (VERASENSE) measure medial and lateral compartment pressures throughout ROM to quantify soft tissue balance. Data suggests balanced knees (within 15 lbs difference) have lower revision rates.

**Registry Insights:**
- AJRR: >150,000 TKA procedures annually. Most common revision reasons: infection (25%), aseptic loosening (20%), instability (15%), periprosthetic fracture (8%), pain (8%)
- Younger patients (<55) have higher revision rates (1.5-2x) compared to older patients
- Cemented TKA remains gold standard; cementless TKA showing improved early results with newer designs
- UKA revision to TKA has outcomes inferior to primary TKA but superior to revision TKA

**Current Evidence:**
- TOPKAT trial: TKA vs. UKA — TKA had modestly better Oxford Knee Scores at 5 years, but UKA had faster recovery
- FUNCTION trial (ongoing): kinematic vs. mechanical alignment long-term outcomes
- Tourniquet use: evidence shifting toward limited tourniquet use (cementation only) or no tourniquet — reduced pain and faster recovery

**Future Directions:**
- Patient-specific cutting guides and custom implants (3D-printed from CT data)
- Cementless TKA with 3D-printed porous titanium surfaces
- Smart implants with embedded sensors for continuous post-op monitoring
- Enhanced recovery after surgery (ERAS) protocols enabling same-day discharge TKA`,
      keyTerms: [
        { term: 'AORI classification', definition: 'Anderson Orthopaedic Research Institute system for classifying bone defects in revision TKA' },
        { term: 'tantalum cone', definition: 'Highly porous metal device for filling metaphyseal bone defects and providing fixation in revision TKA' },
        { term: 'VERASENSE', definition: 'Intraoperative smart sensor for quantifying soft tissue balance by measuring compartment pressures' },
        { term: 'TOPKAT', definition: 'Total or Partial Knee Arthroplasty Trial — UK RCT comparing TKA to UKA' },
      ],
      clinicalNotes: 'In revision TKA, always plan for worse bone loss than imaging suggests. Have augments, cones, and the next-size-up stems available. Exposure is critical — consider tibial tubercle osteotomy for stiff knees.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-tka-jbjs', type: 'article', title: 'Total Knee Arthroplasty', source: 'J Bone Joint Surg Am. 2009;91(Suppl 5):52-55', license: 'Proprietary' },
    { id: 'cit-topkat', type: 'article', title: 'TOPKAT: Total or Partial Knee Arthroplasty Trial', source: 'Lancet. 2019;394(10200):746-756', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-hip-arthroplasty', targetType: 'topic', relationship: 'sibling', label: 'Hip Arthroplasty' },
    { targetId: 'ortho-knee-osteoarthritis', targetType: 'condition', relationship: 'parent', label: 'Knee Osteoarthritis' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'arthroplasty', 'knee replacement'],
    keywords: ['TKA', 'UKA', 'revision TKA', 'robotic surgery', 'alignment', 'ligament balance'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default kneeArthroplasty;
