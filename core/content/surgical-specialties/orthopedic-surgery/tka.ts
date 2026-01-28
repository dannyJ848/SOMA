/**
 * Total Knee Arthroplasty
 *
 * Surgical replacement of the knee joint with artificial components.
 */

import { EducationalContent } from '../../types';

export const tkaContent: EducationalContent = {
  id: 'orthopedic-surgery-tka',
  type: 'topic',
  name: 'Total Knee Arthroplasty',
  alternateNames: ['TKA', 'Knee Replacement', 'Total Knee Replacement'],

  levels: {
    1: {
      level: 1,
      summary: 'Total knee arthroplasty (TKA) is surgery to replace a damaged knee joint with artificial parts. It\'s done for severe arthritis when other treatments don\'t provide relief.',
      explanation: `## What Is a Knee Replacement?

Your knee joint is where your thigh bone (femur) meets your shin bone (tibia). The ends of these bones are covered in smooth cartilage that lets them glide against each other. When this cartilage wears away, bone rubs on bone - and that hurts!

In knee replacement surgery, the surgeon:
1. Removes the damaged cartilage and a small amount of bone
2. Replaces the ends with metal parts
3. Adds a plastic spacer between them so they glide smoothly
4. May also replace the undersurface of the kneecap (patella)

## Why Do People Need This?

**Osteoarthritis:** Wear and tear over time (most common)
**Rheumatoid arthritis:** Autoimmune joint destruction
**Post-traumatic arthritis:** After a bad knee injury
**Avascular necrosis:** Bone dies from poor blood supply

## What Does the New Knee Look Like?

- Femoral component: Metal cap for thigh bone
- Tibial component: Metal tray for shin bone
- Polyethylene insert: Plastic spacer between them
- Patellar component: Plastic button for kneecap (sometimes)

## Recovery Timeline

**Hospital:** 1-3 days
**Walker:** 1-2 weeks
**Cane:** 2-4 weeks
**Normal activities:** 4-6 weeks
**Full recovery:** 3-6 months

Most people have much less pain and can walk much better after healing!`,

      keyTerms: [
        { term: 'Osteoarthritis', definition: 'Wear-and-tear arthritis where cartilage breaks down over time' },
        { term: 'Rheumatoid arthritis', definition: 'Autoimmune disease causing joint inflammation and damage' },
        { term: 'Prosthesis', definition: 'Artificial body part that replaces a missing or damaged part' },
        { term: 'Polyethylene', definition: 'Durable plastic used as the spacer in joint replacements' },
      ],
      analogies: [
        'Your knee joint is like a car\'s shock absorber - when it wears out, every bump is painful.',
        'Knee replacement is like putting new tires on a car - smooth ride again!',
      ],
      examples: [
        'A 70-year-old with severe knee arthritis can barely walk a block',
        'Someone whose knee keeps giving out needs surgery to prevent falls',
        'A person who wakes up with knee pain every night needs relief',
      ],
    },

    2: {
      level: 2,
      summary: 'TKA is indicated for end-stage arthritis with pain and functional limitation unresponsive to conservative measures. The procedure involves resurfacing the femur, tibia, and often the patella.',
      explanation: `## Indications

**Absolute Indications:**
- Severe pain that limits daily activities
- Night pain that interrupts sleep
- Functional limitation (can\'t walk more than 1-2 blocks)
- Failure of conservative management (NSAIDs, injections, PT)
- Radiographic evidence of bone-on-bone arthritis

**Contraindications:**
- Active infection (absolute)
- Remote infection (relative)
- Poor skin condition
- Morbid obesity (relative)
- Neuropathic joint (Charcot arthropathy)

## Surgical Approach

**Median Parapatellar:**
- Most common approach
- Retinacular release often needed
- Excellent exposure

**Midvastus:**
- Muscle-sparing option
- Less quadriceps disruption
- Faster early recovery

**Subvastus:**
- Most muscle-sparing
- Technically demanding
- Limited extension of exposure

## Component Design

**Fixed-Bearing:**
- PE tibial insert fixed to tray
- Proven longevity
- Less expensive

**Mobile-Bearing (Rotating Platform):**
- PE insert rotates on tibial tray
- Theoretically reduces wear and improves flexion
- More expensive, higher complication rate

**Posterior-Stabilized (PS):**
- Cam and post mechanism replaces PCL
- For knees with PCL deficiency or deformity
- Greater range of motion potential

**Cruciate-Retaining (CR):**
- Preserves PCL function
- More natural kinematics
- Requires intact PCL and minimal deformity`,

      keyTerms: [
        { term: 'PCL', definition: 'Posterior Cruciate Ligament - one of the major stabilizing ligaments of the knee' },
        { term: 'Osteotomy', definition: 'Cutting bone to realign joint - sometimes done instead of or before knee replacement' },
        { term: 'Malalignment', definition: 'Poor alignment of the leg bones (knock-knee or bow-leg) that accelerates arthritis' },
        { term: 'Range of motion', definition: 'How far a joint can move in different directions' },
      ],
      analogies: [
        'A PCL-deficient knee is like a car without a rear stabilizer - it can still drive but feels unstable.',
      ],
      examples: [
        'Varus (bow-leg) knee needs ligament release during TKA',
        'Young patient (age 50) might get osteotomy instead of TKA to preserve native knee',
        'Posterior-stabilized implant chosen for PCL-deficient knee',
      ],
      clinicalNotes: 'Preoperative education classes reduce anxiety and improve outcomes. Femoral nerve block and adductor canal block are preferred over epidural for earlier mobilization. Cryotherapy and compression devices reduce swelling and pain.',
    },

    3: {
      level: 3,
      summary: 'Modern TKA provides excellent pain relief and functional improvement with 15-20 year implant survivorship of 90-95%. Proper alignment, soft tissue balance, and ligament stability are critical.',
      explanation: `## Implant Longevity

**Survivorship:**
- 15-year survival: 90-95%
- 20-year survival: 85-90%
- Revision rate: 0.5-1% per year
- Younger patients have higher revision rates

**Reasons for Revision:**
- Polyethylene wear (most common early reason)
- Loosening
- Infection
- Instability
- Stiffness

## Soft Tissue Balance

**Coronal Plane:**
- Varus/valgus correction
- Medial release for varus deformity
- Lateral release for valgus deformity
- Gap balancing essential

**Flexion/Extension Gap:**
- Should be equal (rectangular gaps)
- PCL release or sacrifice if needed
- Osteophyte removal critical

**Patellofemoral:**
- Patellar resurfacing controversial
- Lateral release if tight
- Proper component rotation prevents maltracking

## Postoperative Management

**Immediate (0-6 weeks):**
- Weight-bearing as tolerated
- Knee motion: 0-130° goal
- VTE prophylaxis essential (aspirin or anticoagulation)
- Pain management (multimodal)

**Intermediate (6-12 weeks):**
- Progressive strengthening
- Gait training
- Activity advancement
- Most patients feel "normal" by 3 months

**Long-term (>3 months):**
- No high-impact activities
- Avoid running, jumping, contact sports
- Walking, swimming, cycling encouraged
- Low-impact sports (tennis, golf, skiing) usually okay`,

      keyTerms: [
        { term: 'VTE', definition: 'Venous Thromboembolism - blood clots in veins, can travel to lungs (PE)' },
        { term: 'Maltracking', definition: 'When the kneecap doesn\'t slide smoothly in its groove' },
        { term: 'Loosening', definition: 'Implant becomes loose from bone, causing pain and requiring revision surgery' },
        { term: 'Multimodal analgesia', definition: 'Using several types of pain control together (NSAIDs, nerve blocks, ice) to reduce opioid use' },
      ],
      analogies: [
        'Soft tissue balance is like tuning a guitar - needs to be just right to play properly.',
        'Polyethylene wear is like tire tread wearing down - eventually needs replacement.',
      ],
      examples: [
        'Patient with 3° varus deformity needs medial release and constrained implant',
        'Aspirin alone insufficient for VTE prophylaxis in high-risk patient, needs rivaroxaban',
        'Stiff TKA needs manipulation under anesthesia to break up scar tissue',
      ],
      clinicalNotes: 'Obesity (BMI >40) increases infection risk 3-4x. Smoking increases complication and revision rates. Both should be addressed preoperatively. Periarticular injection (liposomal bupivacaine, steroid, epinephrine) significantly reduces postoperative pain and opioid use.',
    },

    4: {
      level: 4,
      summary: 'TKA outcomes depend on patient factors, implant selection, and surgical technique. Complications include infection, DVT, PE, stiffness, instability, and persistent pain.',
      explanation: `## Complications

**Early (<3 months):**

*Infection (0.5-2%):*
- Superficial: Oral antibiotics
- Deep: Surgical washout, component exchange
- MRSA/MRSE increasing

*DVT/PE (1-3% without prophylaxis):*
- DVT: 5-10% with chemoprophylaxis
- Fatal PE: 0.1-0.5%
- Aspirin, rivaroxaban, warfarin options

*Stiffness (arthrofibrosis):*
- Manipulation under anesthesia
- Arthroscopic lysis of adhesions
- Physical therapy critical

**Late (>3 months):**

*Loosening:*
- Painful weight-bearing
- Radiolucency on x-ray
- Requires revision surgery

*Instability:*
- Ligament imbalance
- Component malposition
- May need constrained or hinged implant

*Polyethylene wear:*
- Osteolysis from wear debris
- Asymptomatic until bone loss severe

## Risk Factors

**Modifiable:**
- Obesity: Infection, wound issues
- Smoking: Poor healing, infection
- Diabetes: Infection risk, stiffness
- Poor nutrition: Wound problems

**Non-modifiable:**
- Age: Younger patients more active, higher stress on implant
- Genetics: Some people form more scar tissue
- Prior knee surgery: Scarring, deformity

## Outcomes

**Pain Relief:**
- 85-90% have complete or near-complete relief
- Residual pain may be from other joints (hip, spine)

**Function:**
- Range of motion: 0-110° typical (down from 135° pre-op)
- Stairs: Most can do normally
- Squatting: Limited compared to native knee

**Satisfaction:**
- 85-90% satisfied with result
- 10-15% regret surgery
- Preop counseling about expectations critical`,

      keyTerms: [
        { term: 'Osteolysis', definition: 'Bone loss caused by reaction to plastic wear debris from implant' },
        { term: 'Arthrofibrosis', definition: 'Excessive scar tissue formation in joint causing stiffness' },
        { term: 'Radiolucency', definition: 'Dark line on x-ray around implant indicating bone loss or loosening' },
        { term: 'Manipulation under anesthesia', definition: 'Forcing knee to bend to break up scar tissue' },
      ],
      analogies: [
        'Osteolysis is like termites eating the wood around the implant - invisible until serious damage.',
        'Arthrofibrosis is like internal scar tissue that freezes the joint in place.',
      ],
      examples: [
        'Diabetic patient gets deep wound infection requiring washout and IV antibiotics',
        'Smoker has poor wound healing and wound breakdown',
        'Obese patient with BMI 45 has 3x higher infection risk',
      ],
      clinicalNotes: 'Constrained or hinged implants have higher failure rates and should be used only when necessary (severe deformity, ligament insufficiency). Computer-assisted navigation may improve alignment but cost-effectiveness is debated.',
    },

    5: {
      level: 5,
      summary: 'TKA is one of the most successful orthopedic procedures with excellent long-term outcomes. Robotic-assisted and custom implants are evolving technologies.',
      explanation: `## Advanced Techniques

**Robotic-Assisted TKA:**
- MAKO, ROSA, NAVIO systems
- Potential for more accurate bone cuts
- Better ligament balancing
- Higher cost, longer OR time
- Outcomes: Slightly better alignment, questionable clinical significance

**Custom (Patient-Specific) Implants:**
- Preop MRI/CT guides
- Custom cutting jigs
- Reduced OR time (maybe)
- Higher cost
- Long-term data lacking

**Partial Knee Replacement:**
- Unicompartmental (UKA)
- Patellofemoral (PFA)
- Bi-unicondylar
- Better kinematics, faster recovery
- Higher revision rate if arthritis progresses

## Controversies

**Bilateral Simultaneous vs. Staged:**
- Simultaneous: Both at once, higher cardiac stress risk
- Staged: 2 surgeries, 2 hospital stays
- Young healthy patients: Simultaneous acceptable
- Older/comorbid: Staged preferred

**Patellar Resurfacing:**
- Not always done (depends on surgeon preference)
- Resurface if patella damaged or maltracking
- Not resurfacing: OK if cartilage good, no pain
- Similar outcomes either way

**Posterior-Stabilized vs. Cruciate-Retaining:**
- PS: More predictable, addresses PCL deficiency
- CR: More natural feel, requires intact PCL
- Similar survivorship at 15 years

## Future Directions

**Sensor-Embedded Implants:**
- Measure range of motion, gait parameters
- Early detection of problems
- Still experimental

**3D-Printed Implants:**
- Custom for tumor or revision surgery
- Patient-specific for difficult anatomy
- Expensive but promising

**Augmented Reality:**
- Overlay bone cuts on surgeon\'s view
- Navigation without bulky equipment
- Early adoption stage`,

      keyTerms: [
        { term: 'Unicompartmental', definition: 'Replacing only one compartment (medial or lateral) of the knee instead of all three' },
        { term: 'Bi-unicondylar', definition: 'Replacing two compartments of the knee while preserving one' },
        { term: 'Kinematics', definition: 'How the joint moves and functions mechanically' },
      ],
      analogies: [
        'Unicompartmental knee is like fixing one bad tire instead of replacing all four - less work but may need more later.',
        'Robotic assistance is like having a GPS guide you through the surgery.',
      ],
      examples: [
        'Active 55-year-old gets medial UKA - faster recovery, feels more natural',
        'Patient with severe valgus deformity needs constrained implant for stability',
        'Robotic TKA achieves perfect alignment but costs $3000 more',
      ],
      clinicalNotes: 'Preoperative education classes, same-day surgery pathways, and outpatient TKA are improving outcomes and reducing costs. Enhanced recovery pathways (ERAS) with multimodal analgesia, early mobilization, and optimal nutrition are standard of care.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['orthopedic-surgery', 'joint-replacement', 'knee', 'osteoarthritis'],
    systems: ['musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
