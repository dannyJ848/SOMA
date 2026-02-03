/**
 * Fractures - Musculoskeletal Conditions
 *
 * Comprehensive content on fracture types, healing processes,
 * treatment modalities, and complication management.
 */

import { EducationalContent } from '../../types';

export const fractures: EducationalContent = {
  id: 'conditions-fractures',
  type: 'condition',
  name: 'Fractures',
  alternateNames: ['Broken Bone', 'Bone Fracture', 'Fracture', 'Bone Injury'],

  levels: {
    1: {
      level: 1,
      summary: 'A fracture is a broken bone, usually caused by injury, and treated by keeping the bone still while it heals.',
      explanation: `## What Is a Fracture?

A fracture is another word for a broken bone. It happens when more force is applied to the bone than it can handle.

**Types of fractures:**
- Simple fracture: Bone breaks but doesn't damage surrounding tissue
- Compound fracture: Broken bone breaks through the skin
- Greenstick fracture: Bone bends and cracks but doesn't break completely (common in children)
- Comminuted fracture: Bone breaks into three or more pieces

## What Causes Fractures?

**Common causes:**
- Falls (especially in older adults)
- Car accidents
- Sports injuries
- Direct blow to the bone
- Overuse or stress fractures (from repeated stress)
- Osteoporosis (weak bones)

**Risk factors:**
- Older age (bones become more brittle)
- Osteoporosis
- Playing contact sports
- Certain medications (steroids)
- Smoking
- Poor nutrition

## Symptoms of a Fracture

**Common signs:**
- Severe pain at the injury site
- Swelling and bruising
- Unable to move the injured part
- Deformity (limb looks wrong or bent)
- Grating sensation when moving the injured area
- In open fractures: Bone visible through wound

## What Happens When You Break a Bone?

\`\`\`
The healing process:
1. Immediately: Blood clot forms around the break
2. Days later: Soft callus forms (soft tissue bridge)
3. Weeks later: Hard callus forms (hard bone tissue)
4. Months later: Bone remodels and strengthens
\`\`\`

## Diagnosis

**How doctors find fractures:**
- X-ray (most common test)
- Physical examination
- CT scan (for complex fractures)
- MRI (for stress fractures or hidden injuries)

## Treatment

**Common treatments:**

**Cast or Splint:**
- Keeps bone still while healing
- Holds bone in correct position
- Usually worn for several weeks to months

**Immobilization:**
- Slings for arm fractures
- Crutches for leg fractures
- Walker boot for ankle/foot fractures

**Reduction:**
- Moving bones back into proper position
- May be done without surgery (closed reduction)
- May require surgery (open reduction)

**Surgery:**
- Plates, screws, or rods to hold bone together
- External fixation (pins outside the body)
- Joint replacement (for severe fractures)

**Medications:**
- Pain relievers for discomfort
- Antibiotics for open fractures
- Tetanus shot if needed

## Healing Time

**How long fractures take to heal:**

| Location | Typical Healing Time |
|----------|---------------------|
| Finger/hand | 3-6 weeks |
| Wrist | 6-8 weeks |
| Forearm | 6-10 weeks |
| Upper arm | 6-12 weeks |
| Collarbone | 6-12 weeks |
| Ribs | 4-6 weeks |
| Hip | 12+ weeks |
| Thigh bone | 12-24 weeks |
| Lower leg | 12-16 weeks |
| Ankle | 6-10 weeks |

**Factors affecting healing:**
- Age (children heal faster)
- Nutrition (calcium, vitamin D)
- Smoking (slows healing)
- Location and severity
- Overall health

## Possible Complications

**Complications of fractures:**
- Infection (especially with open fractures)
- Poor healing or non-union (doesn't heal properly)
- Healing in wrong position (malunion)
- Blood clots (especially leg fractures)
- Nerve or blood vessel damage
- Stiff joints from immobilization
- Muscle weakness from not using the limb

## Recovery and Rehabilitation

**After the bone heals:**
- Physical therapy to regain strength and movement
- Gradual return to normal activities
- Exercises to prevent stiffness
- Building up muscle that weakened during healing

## Prevention

**Tips to prevent fractures:**
- Wear protective gear during sports
- Keep bones strong with calcium and vitamin D
- Exercise to maintain bone and muscle strength
- Prevent falls (especially in older adults)
- Don't smoke (weakens bones)
- Use seatbelts in cars
- Keep your home safe (remove tripping hazards)`,
      keyTerms: [
        { term: 'fracture', definition: 'A break or crack in a bone' },
        { term: 'cast', definition: 'A hard shell that holds a broken bone in place while it heals' },
        { term: 'reduction', definition: 'Moving broken bone pieces back into correct position' },
        { term: 'callus', definition: 'Hard tissue that forms around a broken bone during healing' },
        { term: 'open fracture', definition: 'Broken bone that punctures through the skin; higher infection risk' },
        { term: 'stress fracture', definition: 'Small crack in bone from repeated stress rather than single injury' },
      ],
      analogies: [
        'A broken bone is like a cracked sidewalk - it needs to be held in place while new concrete fills the crack.',
        'Healing a fracture is like repairing a broken bridge - first you stabilize it, then rebuild it stronger.',
        'Bone healing is like knitting a sweater back together - it takes time and patience, but the result can be as good as new.',
      ],
      examples: [
        'A child who falls off a playground swing and breaks their arm has a typical fracture.',
        'An older woman who trips on a rug and breaks her hip may have osteoporosis-related fracture.',
        'A runner who develops gradual foot pain during training may have a stress fracture.',
        'Someone in a car accident with a bone sticking out through the skin has an open (compound) fracture.',
      ],
      patientCounselingPoints: [
        'Follow all instructions for cast care - keep it dry, don\'t stick anything inside it.',
        'Don\'t test the fracture by wiggling or putting weight on it too soon.',
        'Take calcium and vitamin D as recommended to help healing.',
        'If you smoke, try to quit - it significantly slows bone healing.',
        'Physical therapy is crucial after the cast comes off to regain full function.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fractures are classified by pattern, displacement, and soft tissue involvement, with healing proceeding through inflammatory, reparative, and remodeling phases managed by immobilization or surgical fixation.',
      explanation: `## Fracture Classification

**By Soft Tissue Involvement:**
\`\`\`
Closed fracture:
- Skin intact over fracture
- Lower infection risk
- Most common type

Open (compound) fracture:
- Skin broken over fracture
- Bone exposed to environment
- Higher infection risk
- Orthopedic emergency
- Gustilo-Anderson classification guides treatment
\`\`\`

**By Fracture Pattern:**

| Pattern | Description | Common Locations |
|---------|-------------|------------------|
| Transverse | Perpendicular to bone shaft | Tibia, femur |
| Oblique | Angled across bone | Fibula, humerus |
| Spiral | Twisting injury around bone | Tibia (skiing) |
| Comminuted | 3+ fragments | Femur, calcaneus |
| Impacted | Fragments pushed together | Distal radius, femoral neck |
| Avulsion | tendon pulls bone fragment | Ankle, finger |
| Greenstick | Incomplete break, bends | Pediatric long bones |
| Torus (buckle) | Cortex buckles | Pediatric distal radius |

**By Displacement:**
- Non-displaced: Bones still aligned
- Displaced: Bones out of alignment
- Angulated: Bone fragments at an angle
- Shortened: Overlap of bone fragments
- Rotated: Bone fragment twisted

**Anatomic Descriptors:**
- Anatomic: Aligns with original position
- Extra-articular: Doesn't enter joint
- Intra-articular: Involves joint surface
- Epiphyseal: Through growth plate (Salter-Harris in children)

## Normal Bone Healing

**Phases of Fracture Healing:**

\`\`\`
1. Inflammatory Phase (0-2 weeks):
   - Hematoma formation at fracture site
   - Inflammatory cells arrive
   - Phagocytes remove debris
   - Granulation tissue forms

2. Reparative Phase (2-6 weeks):
   - Soft callus formation (fibrocartilage)
   - Hard callus formation (woven bone)
   - Cartilage calcifies
   - Bridging of fracture gap

3. Remodeling Phase (6 weeks - 2 years):
   - Woven bone → lamellar bone
   - Trabecular remodeling
   - Cortex restoration
   - Strength returns to normal
\`\`\`

**Primary vs. Secondary Healing:**

\`\`\`
Primary healing (with rigid fixation):
- Direct Haversian remodeling
- No callus formation
- Requires absolute stability
- Seen with plate/screw fixation

Secondary healing (with relative stability):
- Callus formation
- More common
- Occurs with cast, external fixation, intramedullary nail
- Requires some motion at fracture site
\`\`\`

## Diagnostic Approach

**Imaging:**

\`\`\`
X-ray (first-line):
- Two views (AP and lateral) minimum
- Include joint above and below fracture
- Assess alignment, displacement, pattern
- Follow-up X-rays monitor healing

CT scan:
- Complex fractures (intra-articular, pelvis, spine)
- Surgical planning
- 3D reconstruction

MRI:
- Occult fractures (not seen on X-ray)
- Stress fractures (early detection)
- Soft tissue/ligament assessment

Bone scan:
- Stress fractures (nuclear medicine)
- Whole-body survey
- Less commonly used now
\`\`\`

## Treatment Principles

**Reduction:**

\`\`\`
Closed reduction:
- Manipulate bones without surgery
- Done under sedation or anesthesia
- Confirmed with X-ray
- Maintained with cast/splint

Open reduction:
- Surgical exposure of fracture
- Direct visualization
- Hardware for fixation
- For displaced/unstable fractures
\`\`\`

**Immobilization Methods:**

| Method | Indications | Typical Duration |
|--------|-------------|------------------|
| Cast/splint | Non-displaced or post-reduction | 4-12 weeks |
| Splint | Initial, soft swelling | 1-3 weeks then cast |
- Slings | Clavicle, proximal humerus | 4-8 weeks |
- Crutches | Lower extremity non-weight bearing | 6-12 weeks |
- Boot | Ankle, foot, tibia | 6-10 weeks |

**Surgical Fixation:**

\`\`\`
Indications for surgery:
- Displaced intra-articular fractures
- Unable to maintain alignment
- Multiple fractures
- Open fractures
- Fractures with vascular injury
- Pathologic fractures
- Failed nonoperative management

Fixation methods:
- Internal fixation: Plates, screws, intramedullary nails
- External fixation: Pins outside body connected to frame
- Replacement: Arthroplasty for hip fractures in elderly
\`\`\`

## Common Fractures

**Upper Extremity:**

\`\`\`
Distal radius (wrist):
- FOOSH injury (fall on outstretched hand)
- Colles fracture: Dorsal displacement
- Smith fracture: Volar displacement
- Treatment: Reduction +/- pinning, ORIF if displaced

Clavicle:
- Fall on shoulder
- Most common pediatric fracture
- Midshaft most common
- Treatment: Sling vs surgery based on displacement

Proximal humerus:
- Fall in elderly
- Neer classification: Number of parts
- Treatment: Most nonoperative initially

Hip fractures:
- Elderly, fall
- Femoral neck vs intertrochanteric
- Surgical emergency in elderly
- Treatment: ORIF or hemiarthroplasty
\`\`\`

**Lower Extremity:**

\`\`\`
Tibial shaft:
- High energy trauma (MVC) or sports
- Open fracture risk (little soft tissue coverage)
- Treatment: Intramedullary nail

Ankle:
- Twisting injury
- Weber classification based on fibula fracture level
- Unstable: Surgical fixation

Fifth metatarsal:
- Inversion ankle injury
- Jones fracture: Poor healing, surgical
- Proximal base: Avulsion, heals well
\`\`\`

## Complications

**Early Complications:**
- Compartment syndrome: Orthopedic emergency
- Vascular injury
- Nerve injury
- Infection (open fractures, surgical site)
- Skin necrosis

**Late Complications:**
- Non-union: No healing after 6-9 months
- Malunion: Healed in wrong position
- Delayed union: Slower than expected healing
- Avascular necrosis: Bone loses blood supply
- Post-traumatic arthritis
- Complex regional pain syndrome
- Myositis ossificans: Abnormal bone formation`,
      keyTerms: [
        { term: 'non-displaced', definition: 'Fracture where bone fragments remain in proper alignment' },
        { term: 'comminuted', definition: 'Fracture with bone broken into three or more pieces' },
        { term: 'intra-articular', definition: 'Fracture that extends into the joint surface' },
        { term: 'compartment syndrome', definition: 'Increased pressure in fascial compartment; can cause muscle and nerve damage' },
        { term: 'avascular necrosis', definition: 'Bone tissue death from interrupted blood supply' },
        { term: 'ORIF', definition: 'Open reduction internal fixation; surgical treatment of fracture' },
        { term: 'FOOSH', definition: 'Fall on outstretched hand; common mechanism of wrist injury' },
      ],
      analogies: [
        'The three phases of fracture healing are like construction: clearing the site (inflammatory), building the frame (reparative), and finishing the interior (remodeling).',
      ],
      patientCounselingPoints: [
        'Follow weight-bearing restrictions strictly - putting weight too early can displace the fracture.',
        'Keep the cast dry - water can cause skin problems and weaken the cast.',
        'Call your doctor if you have increasing pain, numbness, or swelling - these could be signs of complications.',
        'Physical therapy after cast removal helps restore joint mobility and muscle strength.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fracture management requires accurate pattern classification, understanding of healing biology, appropriate fixation selection based on biomechanics, and vigilance for complications like compartment syndrome and non-union.',
      explanation: `## Detailed Classification Systems

**Gustilo-Anderson Open Fracture Classification:**

\`\`\`
Type I:
- Wound <1 cm
- Minimal soft tissue damage
- Clean, from inside out

Type II:
- Wound 1-10 cm
- Moderate soft tissue damage
- Adequate soft tissue coverage

Type III:
- Wound >10 cm OR
- Extensive soft tissue crushing OR
- Segmental fracture OR
- High-energy trauma

Subtypes:
- IIIA: Adequate soft tissue coverage despite extensive damage
- IIIB: Extensive soft tissue loss, requires coverage procedure
- IIIC: Associated with vascular injury requiring repair

Clinical implications:
- Type I: Wound closure, ORIF within 24 hours
- Type II: Wound care, ORIF within 24 hours
- Type III: Serial debridements, delayed fixation
\`\`\`

**Salter-Harris Classification (Pediatric Physeal Fractures):**

\`\`\`
Type I: Separation through physis
- Prognosis: Excellent (5% growth disturbance)

Type II: Metaphysis + physis
- Prognosis: Good (5% growth disturbance)
- Most common type

Type III: Physis + epiphysis to joint
- Prognosis: Fair (30% growth disturbance)
- Requires anatomic reduction

Type IV: Metaphysis + physis + epiphysis
- Prognosis: Poor (40% growth disturbance)
- Surgical reduction required

Type V: Crush injury to physis
- Prognosis: Very poor (near 100% growth disturbance)
- Diagnosis often retrospective

Type VI: Peripheral physis injury (rare)
- Periosteal stripping of physis
- Poor prognosis, growth arrest
\`\`\`

**Schatzker Classification (Tibial Plateau Fractures):**

| Type | Description | Stability |
|------|-------------|-----------|
| I | Lateral plateau split depression | Stable |
| II | Lateral plateau split + depression | Unstable |
| III | Lateral pure depression | Stable/Unstable |
| IV | Medial plateau | Unstable |
| V | Bicondylar | Unstable |
| VI | Metaphyseal dissociation | Unstable |

**Neer Classification (Proximal Humerus):**
- Based on number of parts (one, two, three, or four parts)
- One part = minimal displacement
- Surgical indication: Displacement >1 cm or angulation >45°

## Healing Biology

**Inflammatory Phase (Days 1-7):**

\`\`\`
Events:
- Hematoma formation: Fracture hematoma contains growth factors
- Hypoxia: Triggers angiogenesis
- Inflammatory cell recruitment: Neutrophils, macrophages
- Growth factor release: PDGF, TGF-beta, FGF, BMPs
- Mesenchymal stem cell recruitment

Clinical significance:
- NSAIDs may impair healing (inhibit prostaglandins)
- Smoking impairs healing (vasoconstriction, hypoxia)
- Diabetes impairs healing (microvascular disease)
- Steroids impair healing (inhibit inflammation)
\`\`\`

**Reparative Phase (Weeks 1-6):**

\`\`\`
Soft callus (weeks 1-3):
- Periosteal callus formation
- Fibrocartilage deposition
- Visible on X-ray at 2-3 weeks
- Weak, needs protection

Hard callus (weeks 3-6):
- Cartilage calcification
- Woven bone deposition
- Clinical union (pain-free, stable)
- Visible bridging on X-ray

Factors enhancing repair:
- Motion (controlled): Stimulates callus
- Weight bearing: Stimulates bone formation
- Adequate nutrition: Protein, calories, calcium
- Vitamin D: Calcium absorption
\`\`\`

**Remodeling Phase (Weeks 6 - 2 years):**

\`\`\`
Processes:
- Woven bone → lamellar bone
- Trabecular organization along stress lines
- Cortex thickening
- Medullary canal reformation

Clinical significance:
- Fracture site remains visible for years
- Bone eventually returns to normal strength
- Remodeling guided by Wolff law (bone adapts to stress)
- Patients can usually return to activities at clinical union
\`\`\`

## Surgical Decision-Making

**Biomechanics of Fixation:**

\`\`\`
Absolute stability (no motion at fracture):
- Anatomic reduction
- Compression plating
- Lag screws
- Primary bone healing (Haversian remodeling)
- Indicated: Articular fractures, simple fractures

Relative stability (controlled motion):
- Intramedullary nails
- Bridge plating
- External fixation
- Secondary bone healing (callus formation)
- Indicated: Comminuted, segmental fractures

Load sharing vs load bearing:
- Load sharing: Implant + bone share load (nails, bridge plates)
- Load bearing: Implant carries all load (conventional plates)
\`\`\`

**Fixation Selection:**

\`\`\`
Intramedullary nailing:
- Indications: Femoral, tibial, humeral shaft fractures
- Advantages: Load sharing, minimally invasive, early mobilization
- Disadvantages: Radiation exposure, cost

Plating:
- Indications: Articular fractures, metaphyseal fractures
- Advantages: Anatomic reduction, direct visualization
- Disadvantages: More extensive dissection, load bearing

External fixation:
- Indications: Open fractures, temporary stabilization, damage control
- Advantages: Minimal soft tissue disruption
- Disadvantages: Pin care, risk of infection, not durable long-term

Joint replacement:
- Indications: Displaced femoral neck in elderly, severe articular injury
- Advantages: Immediate weight bearing, rapid rehabilitation
- Disadvantages: Invasive, limited implant lifespan
\`\`\`

## Complications: Recognition and Management

**Compartment Syndrome:**

\`\`\`
Pathophysiology:
- Increased pressure within fascial compartment
- Compromises perfusion >30 mmHg
- Muscle ischemia, nerve damage within hours
- Can occur with or without fracture

Classic signs (5 P's):
- Pain: Out of proportion, worsens with stretch
- Pallor: May be late finding
- Paresthesias: Numbness, tingling
- Paralysis: Late finding, indicates permanent damage
- Pulselessness: Late finding, indicates severe ischemia

Diagnosis:
- Clinical suspicion is key
- Compartment pressure measurement (controversial threshold)
- Delta pressure (diastolic - compartment) <30 mmHg

Treatment:
- Surgical emergency: Fasciotomy within 6 hours
- Two-incision technique for leg
- Wound closure delayed (skin graft often needed)
- Neglect: Volkmann contracture, amputation
\`\`\`

**Non-Union:**

\`\`\`
Definition: No healing after 6-9 months with no progression for 3 months

Types:
- Hypertrophic: Elephant foot, mechanical instability
- Atrophic: No callus, poor biology
- Oligotrophic: Some callus, reduced biology

Risk factors:
- Inadequate fixation
- Soft tissue interposition
- Infection
- Poor nutrition
- Smoking
- Diabetes
- Medications (NSAIDs, steroids)

Treatment:
- Hypertrophic: Stabilize (exchange nailing, plating)
- Atrophic: Stabilize + biologic augmentation (BMP, bone graft)
- Infected: Debridement, antibiotics, stabilization
\`\`\`

**Avascular Necrosis:**

\`\`\`
Mechanism: Interrupted blood supply to bone fragment

Common locations:
- Femoral head (hip fracture/dislocation)
- Scaphoid (proximal pole fracture)
- Talus (neck fracture)
- Lunate (Kienbock disease)

Diagnosis:
- X-ray: Subchondral collapse (late finding)
- MRI: Early detection (weeks before X-ray)

Treatment:
- Early: Protected weight bearing, core decompression
- Late: Joint replacement, fusion

Prevention:
- Anatomic reduction of high-risk fractures
- Early fixation of femoral neck fractures
- No weight bearing on high-risk fractures
\`\`\``,
      keyTerms: [
        { term: 'Wolff law', definition: 'Bone remodels along lines of mechanical stress' },
        { term: 'clinical union', definition: 'Fracture is stable and pain-free but not fully healed on X-ray' },
        { term: 'hypertrophic non-union', definition: 'Non-union with abundant callus due to mechanical instability' },
        { term: 'atrophic non-union', definition: 'Non-union with minimal callus due to poor biology' },
        { term: 'core decompression', definition: 'Procedure to relieve pressure in bone with avascular necrosis' },
      ],
      clinicalNotes: 'High-energy open fractures (Gustilo III) require serial debridements every 48-72 hours until clean. Delay primary closure to prevent infection. Compartment syndrome is a clinical diagnosis - don\'t wait for imaging or pressure measurements if clinical suspicion is high.',
    },
    4: {
      level: 4,
      summary: 'Complex fracture management addresses polytrauma, periarticular injuries, difficult fracture patterns, non-union reconstruction, and implant-related complications while applying advanced fixation techniques and considering patient-specific factors.',
      explanation: `## High-Energy and Complex Fractures

**Polytrauma Management:**

\`\`\`
Damage control orthopedics:
- Initial: External fixation of long bone fractures
- Goals: Hemodynamic stability, bleeding control
- Second look: Definitive fixation when patient stable
- Timeline: Usually 5-14 days later

Indications for damage control:
- ISS >40 (or 40-50 depending on protocol)
- Hypothermia (<35°C)
- Coagulopathy
- Acidosis (pH <7.25)
- Multiple long bone fractures
- Thoracic/abdominal injuries needing surgery

Timing of definitive fixation:
- Early (<24 hours) for: Isolated fractures, healthy patients
- Delayed for: Patients with "borderline" physiology, chest injury, head injury
\`\`\`

**Pelvic and Acetabular Fractures:**

\`\`\`
Pelvic ring injuries:
- Young-Burgess classification: APC, LC, VS, CM patterns
- Hemodynamic instability from venous bleeding
- Emergent: Pelvic binder, angiography, external fixation
- Definitive: Percutaneous screw fixation or plating

Acetabular fractures:
- Judet-Letournel classification: 10 patterns
- Goal: Anatomic reduction to prevent post-traumatic arthritis
- Surgical approach: Based on fracture pattern
- Outcomes: Depends on quality of reduction, initial cartilage damage
\`\`\`

**Periarticular Fractures:**

\`\`\`
Principles:
- Anatomic reduction mandatory (<2 mm step-off)
- Joint congruity restored
- Early range of motion to prevent stiffness
- High risk of post-traumatic arthritis

Tibial plateau:
- Meniscal attachment assessment (MR arthrogram)
- Elevated fragment depression: Buttress plate
- Split depression: Bone graft + buttress plate
- Return to function: 3-6 months

Pilon (distal tibia) fractures:
- High energy, soft tissue compromise
- External fixation first (span the joint)
- Delayed ORIF (10-21 days) for soft tissue recovery
- High complication rate: Stiffness, non-union, PTA

Distal radius intra-articular:
- Requires anatomic reduction
- Volar plate fixation (standard)
- Dorsal approach for selected patterns
- Early wrist motion
\`\`\`

## Challenging Fracture Patterns

**Periprosthetic Fractures:**

\`\`\`
Periprosthetic femur fracture:
- Vancouver classification: A (trochanteric), B (around stem), C (distal to stem)
- Type B1: Well-fixed stem → ORIF with cables/plates
- Type B2: Loose stem → Revision arthroplasty
- Type B3: Loose stem with bone loss → Revision with augment

Treatment challenges:
- Osteoporotic bone
- Stress risers from implant
- Limited fixation options
- Poor bone quality
- Comorbidities in elderly population
\`\`\`

**Periprosthetic hip dislocation with fracture:**
- Highly unstable
- Requires revision with constrained liner or dual mobility

**Pathologic Fractures:**

\`\`\`
Metastatic disease:
- Breast, lung, prostate, renal, myeloma most common
- Assessment: Mirels scale for fracture risk
- Treatment: Prophylactic fixation vs fracture fixation
- Principles: Cement augmentation, durable fixation
- Life expectancy guides treatment aggressiveness

Primary bone tumors:
- Biopsy before definitive treatment
- Wide resection for malignancy
- Reconstruction options: Allograft, endoprosthesis, amputation

Metabolic bone disease:
- Osteomalacia, hyperparathyroidism, Paget disease
- Treat underlying cause
- Consider medical management before fixation
\`\`\`

**Non-Union Reconstruction:**

\`\`\`
Preoperative planning:
- Identify cause: Mechanical vs biologic vs infection
- Imaging: X-ray, CT scan for deformity assessment
- Infection workup: ESR/CRP, aspiration if indicated
- Vascular assessment if limb ischemia suspected

Surgical options:
- Exchange nailing: For hypertrophic non-union
- Plating with bone graft: For atrophic non-union
- Ilizarov transport: For bone defects, infected non-union
- Vascularized fibula graft: For large defects
- Amputation: Last resort for failed reconstruction

Adjuncts:
- BMP-2: Expensive but effective
- Bone graft: Autograft (gold standard) vs allograft
- Bone graft substitutes: Calcium phosphate, coral
- Stem cell concentrate: Emerging evidence
\`\`\`

## Implant-Related Complications

**Hardware Failure:**

\`\`\`
Causes:
- Delayed or non-union leading to fatigue failure
- Inadequate implant (too small, wrong type)
- Early weight bearing
- Poor bone quality
- Technical error

Prevention:
- Adequate fixation for fracture pattern
- Patient education on weight bearing
- Regular follow-up
- Early intervention for delayed union

Management:
- If united: Hardware removal acceptable
- If non-united: Revision fixation + bone graft
- Exchange to larger construct
- Consider alternative fixation method
\`\`\`

**Hardware Irritation:**

\`\`\`
Common locations:
- Distal femur plate (quadriceps adhesion)
- Proximal tibia plate (pes anserinus bursitis)
- Dorsal wrist plates (extensor tendon irritation)
- Clavicle plates (prominent hardware)

Management:
- Observation: If symptoms tolerable
- Hardware removal: After fracture union (usually 12-18 months)
- Earlier removal: If causing pain, tendon irritation
- Risks: Refracture, anesthesia, infection
\`\`\`

**Infection:**

\`\`\`
Acute postoperative infection:
- <6 weeks from surgery
- Debridement, antibiotics, irrigation, retention (DAIR)
- Linezolid + rifampin (if staph)
- 6 weeks IV antibiotics

Chronic infection:
- >6 weeks, or unrecognized acute
- Radical debridement
- Resection of infected non-union
- Antibiotic spacer
- IV antibiotics (6-8 weeks)
- Reconstruction: Autograft, sometimes amputation

Diagnosis:
- ESR, CRP: Screening
- Aspirate: For organism ID
- Biopsy: If prior antibiotics
- Intraoperative cultures: Minimum 3-5 samples
\`\`\`

## Malunion and Deformity Correction

**Deformity Analysis:**

\`\`\`
Malunion definition:
- Healed in unacceptable position
- May be functional (asymptomatic)
- May require correction

Deformity parameters:
- Length: Shortening
- Alignment: Varus/valgus, procurvatum/recurvatum
- Rotation: Internal/external
- Translation: Lateral/medial, anterior/posterior

Clinical significance:
- Joint orientation affects load distribution
- Malalignment predisposes to arthritis
- Rotational malunion affects function
- Shortening may require lift
\`\`\`

**Osteotomy for Correction:**

\`\`\`
Indications:
- Symptomatic malunion
- Post-traumatic arthritis correction
- Deformity preventing function

Techniques:
- Opening wedge: With bone graft
- Closing wedge: Without bone graft
- Dome osteotomy: Rotation
- Correction at malunion site vs remote

Planning:
- Full-length standing X-rays
- Contralateral comparison
- Preoperative calculation of correction
- Precontoured plates, external fixation
\`\`\``,
      keyTerms: [
        { term: 'damage control orthopedics', definition: 'Temporary external fixation with definitive surgery delayed until patient stabilizes' },
        { term: 'ISS', definition: 'Injury Severity Score; measure of overall trauma severity' },
        { term: 'Mirels scale', definition: 'Scoring system for pathologic fracture risk in bone metastases' },
        { term: 'DAIR', definition: 'Debridement, antibiotics, irrigation, and retention; treatment for acute postoperative infection' },
        { term: 'malunion', definition: 'Fracture that healed in unsatisfactory position' },
      ],
      clinicalNotes: `Complex Fracture Management Pearls:

1. Polytrauma: External fixation first, definitive fixation when patient stable (usually 5-14 days)

2. Open fractures: Serial debridements every 48-72 hours until clean wound

3. Non-union treatment must address the cause (instability vs biology vs infection)

4. Periprosthetic fractures: Implant stability determines treatment (fix vs revise)

5. Postoperative fever within first 48 hours is usually atelectasis, not infection

6. Tibial plateau fractures: Meniscal tears occur in 50%+; assess preoperatively

7. Pilon fractures: Wait for wrinkle sign before definitive surgery (soft tissue recovery)

8. Infection treatment: Minimum 3-5 intraoperative cultures for accurate diagnosis

9. Hardware removal not routine: Remove only if symptomatic and united

10. Malunion correction: Plan with full-length standing films, compare to normal side`,
    },
    5: {
      level: 5,
      summary: 'Contemporary fracture care implements minimally invasive techniques, personalized fixation strategies, enhanced recovery protocols, biologic augmentation, and evidence-based complication management while navigating cost-effectiveness and value-based care.',
      explanation: `## Advanced Surgical Techniques

**Minimally Invasive Osteosynthesis:**

\`\`\`
Principles:
- Preserve fracture hematoma (healing biology)
- Minimize soft tissue stripping
- Indirect reduction techniques
- Percutaneous implant application
- Early mobilization

Examples:
- MIPO (minimally invasive plate osteosynthesis)
- Percutaneous screw fixation
- Tibial nailing with suprapatellar portal
- Volar plate for distal radius through small incision

Advantages:
- Lower infection rates
- Faster healing
- Less blood loss
- Earlier mobilization
- Better cosmesis

Challenges:
- Fluoroscopy time (radiation exposure)
- Steep learning curve
- Requires indirect reduction skills
- May need open conversion if can't reduce
\`\`\`

**Intramedullary Nail Evolution:**

\`\`\`
Advances:
- Expanded indications (proximal femur, humerus)
- Multiplanar locking (screw options)
- Titanium alloys (better strength, MRI compatibility)
- Cannulated nails (guide wire assistance)
- CE marked nails (EU standards affecting US)

Specialized nails:
- Tibial nailing: Suprapatellar approach
- Femoral nailing: Trochanteric entry
- Humerus nails: Proximal multiplanar locking
- Distal radius nails: Volar T-shaped nails

Controversies:
- Reamed vs nonreamed tibial nails: Most data supports reaming
- Static vs dynamic locking: Dynamic allows compression
- Nail removal: Increasingly uncommon
\`\`\`

## Enhanced Recovery and Rehabilitation

**Preoperative Optimization:**

\`\`\`
Perioperative medicine:
- Anemia correction (iron, EPO if needed)
- Nutrition optimization (protein, calorie)
- Diabetes management (glucose control)
- Smoking cessation (critical for healing)
- Medication review (hold anticoagulants, optimize chronic meds)
- Frailty assessment

Prehabilitation:
- Pre-surgery strengthening
- Patient education on postoperative course
- Setting expectations: Return to function, pain, rehab
- Planning discharge needs: Equipment, home safety
\`\`\`

**Postoperative Protocols:**

\`\`\`
Pain management:
- Multimodal approach: NSAIDs, acetaminophen, regional anesthesia
- Opioid-sparing: Minimize use, early discontinuation
- Nerve blocks: Single shot or catheter
- Local infiltration: Exparel (liposomal bupivacaine)

Early mobilization:
- Same-day or POD1 for most
- Prevents DVT, pneumonia, deconditioning
- Improves patient satisfaction
- Reduces length of stay

Thromboprophylaxis:
- Chemical: Aspirin, LMWH, DOACs
- Mechanical: SCDs, compression stockings
- Duration: 28-35 days for hip/knee arthroplasty
- Controversy duration for fracture fixation

Discharge planning:
- Early PT/OT involvement
- DME (durable medical equipment) arranged
- Home health vs SNF vs rehab
- Follow-up scheduled before discharge
\`\`\`

## Biologic Augmentation

**Bone Healing Enhancers:**

\`\`\`
BMPs (Bone Morphogenetic Proteins):
- BMP-2 (INFUSE): FDA approved for tibial non-union, ALIF spine
- BMP-7 (OP-1): FDA approved for long bone non-unions
- Mechanism: Stimulates mesenchymal stem cell differentiation
- Cost: Very expensive ($5,000-$10,000 per dose)
- Controversy: Off-label use, cancer risk concerns

Bone graft options:
- Autograft (iliac crest): Gold standard, limited supply, donor site morbidity
- Allograft (cadaveric): Readily available, no donor site, disease risk
- Bone graft substitutes: Calcium phosphate, coral, synthetic
- Vascularized fibula: For large defects, microvascular transfer

Stem cell therapy:
- BMAC (bone marrow aspirate concentrate)
- MSCs (mesenchymal stem cells)
- Expensive, limited evidence
- FDA regulations evolving
\`\`\`

**Platelet-Rich Plasma:**
- Concentrated autologous platelets
- Growth factors: PDGF, TGF-beta, VEGF
- Limited evidence for fracture healing
- More evidence for tendinopathy, osteoarthritis
- Cost-effectiveness questionable

## Special Populations

**Geriatric Trauma:**

\`\`\`
Hip fracture protocols:
- Rapid medical optimization
- Surgery within 24-48 hours
- Regional anesthesia preferred
- Multidisciplinary care (orthopedics, medicine, geriatrics)
- Early mobilization (POD1)
- Fall prevention assessment
- Osteoporosis treatment

Comanagement:
- Hospitalist comanagement improves outcomes
- Standardized order sets
- Early surgery = better outcomes
- Reduced complications, length of stay

Osteoporosis management:
- Start during admission: Calcium, vitamin D
- DEXA if not recent
- Endocrine consult for osteoporosis
- Anti-resorptive or anabolic therapy post-op
\`\`\`

**Pediatric Considerations:**

\`\`\`
Physeal injuries:
- Salter-Harris V and VI: Poor prognosis
- Growth arrest: May require later osteotomy
- Remodeling potential: Children can correct angulation

Treatment differences:
- Faster healing: Shorter immobilization
- Remodeling: Accept more angulation
- Growth plate: Avoid crossing with hardware if possible
- Anesthesia: Often required for reduction
\`\`\`

## Value and Quality

**Cost-Effectiveness:**

\`\`\`
High-value interventions:
- Early surgery for hip fractures
- DVT prophylaxis
- Multimodal pain management
- Preoperative optimization
- Bundle payment models

Low-value care:
- Routine bone stimulators
- Indiscriminate use of BMP
- Prolonged IV antibiotics for clean surgery
- Routine hardware removal
- Multiple imaging for monitoring
\`\`\`

**Quality Metrics:**

\`\`\`
Process measures:
- Time to surgery (hip fractures)
- DVT prophylaxis within 24 hours
- Multimodal pain management
- Opioid prescribing at discharge

Outcome measures:
- Hospital readmission (30-day)
- Surgical site infection
- Return to OR
- Patient-reported outcomes (PROMs)
- Mortality (30-day, 1-year)
\`\`\`

## Future Directions

**Augmented Reality and Navigation:**

\`\`\`
Fluoroscopy navigation:
- Reduce radiation exposure
- More accurate screw placement
- Expensive, limited availability

Robotic-assisted surgery:
- Robotic arm for screw placement
- Early adoption in spine
- Potential for fracture applications

3D printing:
- Preoperative planning models
- Patient-specific implants
- Custom guides for osteotomies
\`\`\`

**Machine Learning Applications:**
- Predict nonunion risk
- Predict surgical complications
- Personalize treatment plans
- optimize length of stay`,
      keyTerms: [
        { term: 'MIPO', definition: 'Minimally invasive plate osteosynthesis; plate fixation through small incisions to preserve biology' },
        { term: 'BMAC', definition: 'Bone marrow aspirate concentrate; source of mesenchymal stem cells' },
        { term: 'multimodal pain management', definition: 'Using multiple non-opioid analgesics to minimize opioid use' },
        { term: 'PROMs', definition: 'Patient-reported outcome measures; questionnaires assessing health status from patient perspective' },
      ],
      clinicalNotes: `Advanced Practice Insights:

1. Damage control orthopedics has saved lives - don't rush definitive fixation in unstable trauma patients

2. BMP is expensive and should be reserved for true non-unions, not routine use

3. Regional anesthesia and multimodal pain management reduce opioid use and improve outcomes

4. Preoperative optimization (anemia, nutrition, diabetes) is as important as the surgery itself

5. Geriatric hip fracture patients need comanagement - early surgery and early mobilization save lives

6. Minimally invasive techniques preserve biology but require advanced skills and fluoroscopy time

7. Hardware removal should be exception, not rule - patient counseling on symptoms helps

8. Infection treatment requires multiple intraoperative cultures (minimum 3-5) for accurate diagnosis

9. Non-union treatment must address underlying cause (instability, biology, infection) not just fix bone

10. Value-based care means doing what works - not every new technology is an improvement`,
    },
  },

  media: [
    {
      id: 'fracture-types',
      type: 'diagram',
      filename: 'fracture-types.svg',
      title: 'Fracture Pattern Classification',
      description: 'Visual guide to transverse, oblique, spiral, comminuted, and avulsion fractures',
    },
    {
      id: 'fracture-healing',
      type: 'diagram',
      filename: 'fracture-healing.svg',
      title: 'Fracture Healing Phases',
      description: 'Inflammatory, reparative, and remodeling phases with timeline',
    },
    {
      id: 'salter-harris',
      type: 'diagram',
      filename: 'salter-harris.svg',
      title: 'Salter-Harris Classification',
      description: 'Types I-VI pediatric growth plate fractures',
    },
  ],

  citations: [
    {
      id: 'ota-fracture-classification',
      type: 'article',
      title: 'Fracture and Dislocation Classification Compendium',
      authors: ['Marsh JL', 'Stongo TF', 'Agel J', 'et al.'],
      source: 'Journal of Orthopaedic Trauma',
    },
    {
      id: 'aaos-basic-course',
      type: 'article',
      title: 'Orthopaedic Basic Science and Management of Musculoskeletal Conditions',
      authors: ['Bucholz RW', 'Courtney CM', 'Czaja A'],
      source: 'AAOS',
    },
  ],

  crossReferences: [
    { targetId: 'conditions-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'conditions-tendinopathy', targetType: 'condition', relationship: 'related', label: 'Tendinopathy' },
    { targetId: 'conditions-low-back-pain', targetType: 'condition', relationship: 'related', label: 'Low Back Pain' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'surgery', 'emergency-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'emergency-medicine', 'orthopedics', 'trauma'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fractures;
