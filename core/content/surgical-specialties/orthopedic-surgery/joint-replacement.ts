/**
 * Joint Replacement
 *
 * Surgical replacement of damaged joints with artificial components.
 */

import { EducationalContent } from '../../types';

export const jointReplacementContent: EducationalContent = {
  id: 'surgical-joint-replacement',
  type: 'topic',
  name: 'Joint Replacement',
  alternateNames: ['Arthroplasty', 'Total Joint Replacement', 'Joint Prosthesis'],

  levels: {
    1: {
      level: 1,
      summary: "Joint replacement is surgery to replace a damaged joint with an artificial one. It's most commonly done for hips and knees worn out from arthritis.",
      explanation: `## What Is Joint Replacement?

Joint replacement surgery removes a damaged joint and puts in a new artificial joint. The new joint works like a natural joint.

## Which Joints Can Be Replaced?

**Most Common:**
- Hip - very successful surgery
- Knee - very successful surgery
- Shoulder - good results

**Less Common:**
- Elbow
- Ankle
- Wrist
- Finger joints

## Why Is It Needed?

**Osteoarthritis (Wear and Tear):**
- Cartilage wears away
- Bone rubs on bone
- Pain, stiffness, swelling

**Other Reasons:**
- Rheumatoid arthritis
- Avascular necrosis (bone dies from poor blood supply)
- Broken bone that didn't heal right
- Cancer in the joint

## The Artificial Joint

**Made of:**
- Metal (titanium, cobalt-chrome)
- Plastic (polyethylene)
- Ceramic (sometimes)

**How Long It Lastes:**
- 15-20 years for most patients
- 90% still working after 15 years
- Some may need revision surgery later

## Recovery

- Hospital: 1-3 days (hip/knee)
- Walking: Same or next day
- Physical therapy: Weeks to months
- Return to normal: 3-6 months
- Low impact exercise: Encouraged (swimming, cycling)`,

      keyTerms: [
        { term: 'Arthritis', definition: 'Inflammation of joints causing pain, swelling, and stiffness' },
        { term: 'Cartilage', definition: 'Smooth tissue covering bone ends that allows joints to move smoothly' },
        { term: 'Prosthesis', definition: 'Artificial body part that replaces a missing or damaged part' },
        { term: 'Avascular necrosis', definition: 'Bone tissue death from poor blood supply' },
      ],
      analogies: [
        'Cartilage is like the smooth tread on a tire - when it wears away, you get a rough ride.',
        'Joint replacement is like replacing a worn-out hinge on a door.',
      ],
      examples: [
        '70-year-old with severe hip arthritis can barely walk',
        'Person with rheumatoid arthritis needs multiple joint replacements',
        'Athlete with hip necrosis from steroid use needs replacement',
      ],
    },

    2: {
      level: 2,
      summary: 'Joint replacement is indicated for end-stage arthritis refractory to conservative management. Hip and knee replacements have excellent outcomes with low complication rates.',
      explanation: `## Indications

**When to Consider Joint Replacement:**
- Severe pain that limits daily activities
- Pain not relieved by medications
- Stiffness that limits function
- Failed conservative treatments
- Sleep disturbed by pain
- Inability to work or enjoy life

**Contraindications:**
- Active infection
- Severe medical illness making surgery unsafe
- Patient unwilling to participate in rehab
- Asymptomatic arthritis (X线 findings alone)

## Hip Replacement Types

**Total Hip Arthroplasty (THA):**
- Replace both ball (femoral head) and socket (acetabulum)
- Gold standard for hip arthritis
- Excellent long-term results

**Hemiarthroplasty:**
- Replace only femoral head
- Used for hip fractures in elderly
- Native socket remains

**Hip Resurfacing:**
- Cap femoral head instead of replacing
- Bone-preserving
- Less common now due to complications

## Knee Replacement Types

**Total Knee Arthroplasty (TKA):**
- Replace all three compartments
- Most common
- Predictable pain relief

**Unicompartmental (Partial) Knee:**
- Replace only one compartment
- Less invasive, faster recovery
- For single compartment disease`,

      keyTerms: [
        { term: 'THA', definition: 'Total Hip Arthroplasty - complete hip replacement' },
        { term: 'TKA', definition: 'Total Knee Arthroplasty - complete knee replacement' },
        { term: 'Acetabulum', definition: 'Socket of the hip joint' },
        { term: 'Unicompartmental', definition: 'Involving only one of three knee compartments' },
      ],
      analogies: [
        'Hemiarthroplasty is like changing only the lightbulb, not the entire fixture.',
        'Partial knee is like fixing one flat tire instead of replacing all four.',
      ],
      examples: [
        'Elderly patient with hip fracture gets hemiarthroplasty',
        'Active 55-year-old with medial knee arthritis gets unicompartmental knee',
        'Patient with end-stage hip arthritis gets THA',
      ],
      clinicalNotes: 'Preoperative optimization: address anemia, nutrition, diabetes control. Urinary screening before joint replacement recommended. Dental clearance varies - most recent guidelines suggest no prophylactic antibiotics for routine dental work.',
    },

    3: {
      level: 3,
      summary: 'Joint replacement requires careful preoperative planning and postoperative rehabilitation. Complications include infection, DVT, dislocation, and periprosthetic fracture.',
      explanation: `## Surgical Approaches

**Hip:**
- Posterior (Moore): Most common, higher dislocation risk
- Direct anterior (Hueter): Muscle-sparing, faster recovery
- Lateral (Hardinge): Lower dislocation, abductor limp risk

**Knee:**
- Medial parapatellar: Standard approach
- Subvastus: Muscle-sparing
- Midvastus: Quadriceps-sparing

## Implant Fixation

**Cemented:**
- Polymethylmethacrylate (bone cement)
- Immediate fixation
- Older patients, poor bone quality
- Easier to revise

**Uncemented (Press-fit):**
- Porous coating for bone ingrowth
- Requires good bone quality
- Younger, active patients
- May loosen over time

**Hybrid:**
- Cemented femur, uncemented socket (hip)
- Combines advantages

## Complications

**Early (<3 months):**
- Infection: 0.5-2%
- DVT/PE: 1-3% (with prophylaxis)
- Dislocation: 1-3% (hip)
- Wound healing problems
- Nerve injury

**Late (>3 months):**
- Aseptic loosening: 10-15% at 15 years
- Periprosthetic fracture: 1-2%
- Instability
- Wear and osteolysis`,

      keyTerms: [
        { term: 'Periprosthetic', definition: 'Around the prosthesis or artificial joint' },
        { term: 'Aseptic loosening', definition: 'Implant becoming loose without infection' },
        { term: 'Osteolysis', definition: 'Bone loss around implant from particle debris' },
        { term: 'Press-fit', definition: 'Implant wedged tightly into bone without cement' },
      ],
      analogies: [
        "Aseptic loosening is like a tooth that becomes wiggly - it's still there but not secure.",
        'Osteolysis is like termites eating away at the wood around a nail.',
      ],
      examples: [
        'Hip dislocation after posterior approach - patient sat too low too soon',
        'Periprosthetic femur fracture after fall - needs revision surgery',
        'Aseptic loosening 10 years after TKA - requires revision',
      ],
      clinicalNotes: 'DVT prophylaxis essential: aspirin, warfarin, or LMWH for 4-6 weeks. Mechanical compression (SCDs) used in hospital. Tranexamic acid reduces blood loss and transfusion rates. Multimodal pain protocol reduces opioid use.',
    },

    4: {
      level: 4,
      summary: 'Joint replacement outcomes are excellent with proper patient selection and implant positioning. Revision surgery is more complex with higher complication rates.',
      explanation: `## Outcomes

**Hip Replacement:**
- 95% survivorship at 15 years
- 90% excellent/good results
- Patient satisfaction: >90%
- Return to sports: Possible for low impact

**Knee Replacement:**
- 90% survivorship at 15 years
- 85% pain relief
- Flexion to 110-120 degrees
- Some residual stiffness common

**Predictors of Success:**
- Appropriate indication
- Good bone quality
- Proper implant positioning
- Patient adherence to rehab
- Reasonable expectations

## Revision Surgery

**Indications:**
- Aseptic loosening
- Infection (2-stage)
- Periprosthetic fracture
- Instability/dislocation
- Implant wear/osteolysis

**Challenges:**
- Bone loss
- Soft tissue damage
- Scar tissue
- Limited implant options
- Longer surgery
- Higher complications
- Inferior outcomes

**Options:**
- Component exchange (simple)
- Revision stem/acetabular component
- Impaction bone grafting
- Tumor prosthesis for massive loss`,

      keyTerms: [
        { term: 'Impaction grafting', definition: 'Packing ground bone into bone defects before cementing' },
        { term: 'Tumor prosthesis', definition: 'Large implant replacing massive bone loss' },
        { term: '2-stage revision', definition: 'Infection treated by removing implant, waiting, then reimplanting' },
      ],
      analogies: [
        'Revision surgery is like remodeling a house - harder and more expensive than building new.',
        'Impaction grafting is like filling a hole with gravel before pouring concrete.',
      ],
      examples: [
        'Infected TKA treated with 2-stage revision - 6 weeks apart',
        'Massive bone loss requires tumor prosthesis',
        'Component exchange for isolated polyethylene wear',
      ],
      clinicalNotes: 'Periprosthetic joint infection (PJI) diagnosis: ESR/CRP, aspiration, culture. Treatment: debridement with retention if acute (<4 weeks), 2-stage exchange if chronic. Success rate 80-90% with proper treatment.',
    },

    5: {
      level: 5,
      summary: 'Joint replacement continues to evolve with improved materials, minimally invasive techniques, and enhanced recovery protocols. Custom implants and robotic-assisted surgery offer potential advantages.',
      explanation: `## Advanced Techniques

**Robotic-Assisted Surgery:**
- MAKO (Stryker), ROSA (Zimmer)
- More precise bone cuts
- Custom alignment
- Higher cost, longer OR time
- Uncertain long-term advantage

**Custom/Made-to-Measure Implants:**
- Conformis (knee)
- Patient-specific instrumentation
- Based on CT/MRI
- Potential for better fit
- Limited evidence of superiority

**Rapid Recovery Protocols:**
- Same-day discharge
- Multimodal analgesia
- Early mobilization
- Preoperative education
- Reduced hospital stay

## Controversies

**Alignment Philosophy:**
- Mechanical vs. kinematic alignment
- Mechanical: Restore neutral alignment
- Kinematic: Restore patient's natural anatomy
- Trending toward individualized

**Bearing Surfaces:**
- Metal-on-polyethylene (standard)
- Ceramic-on-ceramic (less wear, squeaking risk)
- Metal-on-metal (discontinued due to complications)

**Unicompartmental Knee:**
- Excellent if indications correct
- Higher revision rate than TKA
- Faster recovery, better function
- Requires expertise

## Future Directions

**3D Printed Implants:**
- Porous metal for bone ingrowth
- Custom shapes
- Complex geometries

**Biologic Resurfacing:**
- Fresh osteochondral allograft
- For young, active patients
- Delaying arthroplasty`,

      keyTerms: [
        { term: 'Kinematic alignment', definition: "Implant positioning that matches patient's natural anatomy" },
        { term: 'Mechanical alignment', definition: 'Implant positioning to create neutral mechanical axis' },
        { term: 'Bearing surface', definition: 'Material that contacts and moves against itself in joint' },
      ],
      analogies: [
        "Kinematic alignment is like customizing a car to match the driver's natural position.",
        'Mechanical alignment is like aligning a car perfectly to factory specs.',
      ],
      examples: [
        'Robotic-assisted TKA with kinematic alignment',
        'Young athlete gets osteochondral allograft to delay knee replacement',
        'Patient discharged same day after TKA with rapid recovery protocol',
      ],
      clinicalNotes: 'The obesity paradox: obese patients have higher complications but similar pain relief and satisfaction. Diabetes increases infection risk 2-3x. Smokers have higher complications - cessation 4+ weeks preop recommended. Corticosteroid injections within 3 months of surgery increase infection risk.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['surgery', 'orthopedics', 'joint-replacement', 'hip', 'knee', 'arthritis'],
    systems: ['musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
