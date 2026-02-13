import { EducationalContent } from '../../../types';

export const hipArthroplasty: EducationalContent = {
  id: 'ortho-hip-arthroplasty',
  type: 'topic',
  name: 'Hip Arthroplasty (Hip Replacement)',
  nameEs: 'Artroplastia de cadera (reemplazo de cadera)',
  alternateNames: ['Total hip replacement', 'THA', 'Hip hemiarthroplasty', 'Hip resurfacing'],

  levels: {
    1: {
      level: 1,
      summary: 'Hip replacement surgery removes the damaged parts of the hip joint and replaces them with artificial parts made of metal, plastic, or ceramic.',
      explanation: `Hip replacement is one of the most successful surgeries in medicine. It is done when hip arthritis causes so much pain that daily activities become very difficult.

**When Is It Needed?**
- Hip pain that keeps you awake at night
- Pain that limits walking, climbing stairs, or getting dressed
- Pain not helped by medications or physical therapy
- X-rays show severe joint damage

**What Happens During Surgery:**
The surgeon removes the damaged ball (top of the thigh bone) and socket (hip bone) and replaces them with smooth artificial parts. Surgery takes about 1-2 hours.

**Recovery:**
- You will walk with a walker the day of or day after surgery
- Most people go home in 1-2 days
- A cane is used for 2-4 weeks
- Driving resumes at 4-6 weeks
- Full recovery takes 3-6 months

**The artificial hip typically lasts 20-30 years.**`,
      keyTerms: [
        { term: 'arthroplasty', definition: 'Surgery to replace a damaged joint with an artificial one' },
        { term: 'prosthesis', definition: 'An artificial body part, like the metal and plastic hip replacement' },
      ],
      analogies: ['Think of a hip replacement like replacing a rusty door hinge with a brand-new smooth one — the door swings freely again.'],
      patientCounselingPoints: ['You will walk the same day or next day after surgery.', 'Follow hip precautions to avoid dislocation: do not cross your legs or bend your hip past 90 degrees for the first 6 weeks.', 'Most people return to normal activities within 3 months.'],
    },
    2: {
      level: 2,
      summary: 'Total hip arthroplasty replaces the femoral head and acetabulum with prosthetic components. It is the definitive treatment for end-stage hip arthritis.',
      explanation: `**Types of Hip Replacement:**
- **Total hip arthroplasty (THA):** Replaces both the ball (femoral head) and socket (acetabulum) — most common
- **Hemiarthroplasty:** Replaces only the femoral head — used mainly for femoral neck fractures in elderly patients
- **Hip resurfacing:** Caps the femoral head instead of removing it — less common, mainly for younger active males

**Component Materials:**
- **Femoral stem:** Titanium or cobalt-chrome, press-fit (cementless) or cemented
- **Femoral head:** Ceramic or metal
- **Acetabular shell:** Titanium with polyethylene, ceramic, or metal liner
- **Bearing surfaces:** Metal-on-polyethylene (most common), ceramic-on-ceramic (lowest wear), ceramic-on-polyethylene

**Surgical Approaches:**
- Posterior (most common traditionally): through gluteus maximus
- Anterior (direct anterior): between muscles, faster early recovery
- Lateral: through gluteus medius

**Complications:**
- Dislocation (1-3%)
- Infection (1%)
- Blood clots (DVT/PE)
- Leg length discrepancy
- Loosening over time`,
      keyTerms: [
        { term: 'THA', definition: 'Total hip arthroplasty — replacement of both ball and socket of the hip joint' },
        { term: 'hemiarthroplasty', definition: 'Replacement of only the femoral head, leaving the natural acetabulum' },
        { term: 'bearing surface', definition: 'The materials that glide against each other in the artificial joint' },
        { term: 'cementless fixation', definition: 'Press-fit implant that relies on bone growing into a porous surface for stability' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hip arthroplasty involves biomechanical restoration of the hip center, leg length, and offset. Approach selection, bearing choice, and fixation method impact long-term outcomes.',
      explanation: `**Preoperative Planning:**
Templating on calibrated X-rays (AP pelvis and lateral hip) determines component size, neck cut level, and planned leg length. The goal is to restore the anatomic hip center of rotation, femoral offset (distance from center of femoral head to axis of femoral canal), and leg length equality.

**Fixation Principles:**
- **Cemented:** Polymethyl methacrylate (PMMA) creates immediate fixation. Indicated for osteoporotic bone, Dorr type C femoral canals. Risk: cement implantation syndrome (hypotension, hypoxia from fat embolism during cement pressurization).
- **Cementless:** Porous-coated or hydroxyapatite-coated surfaces allow bony ingrowth over 6-12 weeks. Preferred in younger patients with good bone quality. Requires initial press-fit stability.

**Approach-Specific Considerations:**
- **Direct anterior:** Internervous plane (femoral nerve/superior gluteal nerve). Lower dislocation rate but higher risk of lateral femoral cutaneous nerve injury and femoral fracture during learning curve.
- **Posterior:** Higher dislocation rate (mitigated by capsular repair). Excellent exposure for complex cases.
- **Anterolateral:** Low dislocation rate but abductor damage risk (Trendelenburg gait).

**Bearing Surface Tribology:**
- Cross-linked polyethylene: volumetric wear <50 mm3/year, 20+ year survivorship
- Ceramic-on-ceramic: near-zero wear, risk of squeaking (1-10%) and catastrophic fracture (rare)
- Dual mobility: constrained cup design reducing dislocation to <1%, increasingly used for fractures and revision

**Outcomes:**
10-year survivorship >95% for primary THA. Harris Hip Score and HOOS-JR track functional outcomes.`,
      keyTerms: [
        { term: 'femoral offset', definition: 'Perpendicular distance from femoral canal axis to the center of the femoral head; critical for abductor tension' },
        { term: 'Dorr classification', definition: 'Classification of proximal femoral bone quality (A=cortical, B=intermediate, C=stovepipe/osteoporotic)' },
        { term: 'dual mobility', definition: 'Cup design with two articulating surfaces that significantly reduces dislocation risk' },
        { term: 'tribology', definition: 'Study of friction, wear, and lubrication between interacting surfaces' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced hip arthroplasty management includes complex primary THA, periprosthetic joint infection diagnosis and treatment, instability management, and revision surgery principles.',
      explanation: `**Periprosthetic Joint Infection (PJI):**
Diagnosis based on MSIS criteria (2018 update): major criteria (two positive cultures with same organism OR sinus tract) or combined minor criteria (elevated serum CRP >10 mg/L, ESR >30, synovial WBC >3000, synovial PMN% >80%, alpha-defensin positive, elevated D-dimer, single positive culture). Treatment:
- Acute (<4 weeks from surgery or <3 weeks of symptoms): DAIR (debridement, antibiotics, implant retention) with modular exchange
- Chronic: Two-stage exchange arthroplasty (explant, antibiotic spacer for 6-12 weeks, reimplantation after infection clearance)

**Instability Management:**
Dislocation rate 1-3% for primary THA. Risk factors: posterior approach (without capsular repair), neuromuscular disease, cognitive impairment, prior hip surgery. Options: closed reduction, bracing, revision with larger head, constrained liner, dual mobility cup, or trochanteric advancement.

**Periprosthetic Fracture (Vancouver Classification):**
- AG/AL: Greater/lesser trochanter — conservative or fixation based on displacement
- B1: Around stem, stem well-fixed — ORIF with cerclage wires and plate
- B2: Around stem, stem loose — revision stem (long, distally fitting)
- B3: Stem loose with poor bone stock — revision with structural allograft or tumor prosthesis
- C: Below stem — standard fracture fixation

**Adverse Local Tissue Reaction (ALTR):**
Metal-on-metal bearings and taper corrosion can cause metallosis. Serum cobalt/chromium levels >7 ppb warrant cross-sectional imaging (MARS MRI). Treatment: revision with non-metal bearing surfaces.`,
      keyTerms: [
        { term: 'MSIS criteria', definition: 'Musculoskeletal Infection Society diagnostic criteria for periprosthetic joint infection' },
        { term: 'alpha-defensin', definition: 'Synovial fluid biomarker with 97% sensitivity and 97% specificity for PJI' },
        { term: 'DAIR', definition: 'Debridement, antibiotics, and implant retention — treatment for acute PJI' },
        { term: 'ALTR', definition: 'Adverse local tissue reaction from metal debris causing pseudotumor and soft tissue damage' },
      ],
      clinicalNotes: 'Alpha-defensin is the single best synovial test for PJI. When in doubt, aspirate the joint before any revision surgery. Hold antibiotics for at least 2 weeks before aspiration to optimize culture yield.',
    },
    5: {
      level: 5,
      summary: 'Professional-level hip arthroplasty integrates registries, robotics, patient-specific implants, and value-based care models. Complex revision and limb salvage require mastery of bone loss management.',
      explanation: `**Registry Data and Outcomes:**
National joint registries (AJRR, NJR, AOANJRR) provide survivorship data for specific implants. Key findings: cementless THA in patients <55 has 82% 25-year survivorship; cemented THA in patients >75 has excellent results. Cross-linked polyethylene dramatically reduced wear-related revision. Ceramic-on-ceramic has lowest revision rate for any cause.

**Robotic-Assisted THA:**
Systems (Mako, ROSA) use preoperative CT-based 3D planning for acetabular cup placement within target zones (Lewinnek safe zone: 40+/-10 degrees inclination, 15+/-10 degrees anteversion). Studies show improved cup placement accuracy but unclear benefit on clinical outcomes or survivorship. Cost-effectiveness remains debated.

**Complex Revision — Acetabular Bone Loss (Paprosky Classification):**
- Type I: Supportive columns, minimal bone loss — standard cementless cup
- Type IIA-C: Cavitary/segmental defects with intact columns — jumbo cup, augments, or cup-cage
- Type IIIA: Severe bone loss, Kohler line intact — custom triflange implant or trabecular metal augments with cage
- Type IIIB: Kohler line breached, pelvic discontinuity — reconstruction with cage, cup-cage, or custom implant with structural allograft

**Value-Based Care:**
- Bundled payment models incentivize complication reduction
- Same-day discharge THA increasingly common for appropriate patients (ASA I-II, adequate home support)
- CJR (Comprehensive Joint Replacement) model: 90-day episode cost accountability
- Outpatient THA: CMS removed THA from inpatient-only list in 2020

**Emerging Directions:**
- Cementless short stems for bone-conserving primary THA (metaphyseal fixation)
- Highly cross-linked vitamin E-infused polyethylene for improved oxidation resistance
- Augmented reality navigation for cup and stem placement
- Machine learning prediction models for implant survivorship and complication risk`,
      keyTerms: [
        { term: 'Paprosky classification', definition: 'System classifying acetabular bone loss in revision THA based on defect location and column integrity' },
        { term: 'Lewinnek safe zone', definition: 'Target range for acetabular cup positioning: 40+/-10 degrees inclination, 15+/-10 degrees anteversion' },
        { term: 'pelvic discontinuity', definition: 'Complete separation of superior and inferior hemipelvis through the acetabulum — the most challenging revision scenario' },
        { term: 'CJR model', definition: 'CMS Comprehensive Joint Replacement bundled payment model holding hospitals accountable for 90-day episode costs' },
      ],
      clinicalNotes: 'In complex acetabular revision, intraoperative assessment of column integrity is paramount. If both columns are deficient (Paprosky IIIB), structural support with a cage or custom implant is mandatory before cup placement.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-tha-lancet', type: 'article', title: 'Total hip arthroplasty', source: 'Lancet. 2007;370(9597):1508-1519', license: 'Proprietary' },
    { id: 'cit-pji-msis', type: 'article', title: '2018 Definition of Periprosthetic Joint Infection', source: 'J Arthroplasty. 2018;33(5):1309-1314', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-knee-arthroplasty', targetType: 'topic', relationship: 'sibling', label: 'Knee Arthroplasty' },
    { targetId: 'ortho-hip-osteoarthritis', targetType: 'condition', relationship: 'parent', label: 'Hip Osteoarthritis' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'arthroplasty', 'hip replacement'],
    keywords: ['THA', 'hemiarthroplasty', 'PJI', 'revision THA', 'Paprosky', 'bearing surface'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default hipArthroplasty;
