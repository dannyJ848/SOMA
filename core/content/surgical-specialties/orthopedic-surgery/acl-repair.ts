/**
 * ACL Repair
 *
 * Surgical reconstruction of the anterior cruciate ligament using graft tissue.
 */

import { EducationalContent } from '../../types';

export const aclRepairContent: EducationalContent = {
  id: 'orthopedic-surgery-acl-repair',
  type: 'topic',
  name: 'ACL Reconstruction',
  alternateNames: ['ACL Repair', 'Anterior Cruciate Ligament Reconstruction', 'Knee Ligament Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'ACL reconstruction is surgery to replace a torn ACL in your knee with a graft. The ACL is a major ligament that helps stabilize your knee during sports and activities.',
      explanation: `## What Is the ACL?

The ACL (Anterior Cruciate Ligament) is one of the major ligaments in your knee. It connects your thigh bone to your shin bone and prevents your shin from sliding too far forward. It also helps with twisting movements.

## How Does It Tear?

**Common Causes:**
- Sudden stop or pivot during sports
- Landing awkwardly from a jump
- Direct blow to the knee
- Slowing down from running

**You Might Feel:**
- A "pop" at the time of injury
- Immediate knee instability (knee gives out)
- Severe pain
- Rapid swelling
- Difficulty bearing weight

## The Surgery

Since the ACL can't heal itself, the surgeon replaces it:

1. **Graft choice:** Uses tendon from elsewhere in your body or donor
2. **Tunnels:** Drill holes in thigh and shin bones
3. **Graft passage:** Pull graft through the tunnels
4. **Fixation:** Secure with screws or buttons
5. **Rehabilitation:** Months of PT to return to sports

## Graft Options

**Autograft (from your body):**
- Patellar tendon - gold standard, bone-bone healing
- Hamstring tendons - less painful front of knee, smaller incision
- Quad tendon - newer option, less problems

**Allograft (donor tissue):**
- No extra incision
- Faster surgery
- Slightly higher failure rate (especially in young athletes)

## Recovery Timeline

- **Weeks 1-2:** Crutches, brace, start motion
- **Weeks 3-6:** Regain strength, normal gait
- **Months 3-6:** Running, agility drills
- **Months 6-9:** Return to sports
- Full recovery: 9-12 months`,

      keyTerms: [
        { term: 'ACL', definition: 'Anterior Cruciate Ligament - prevents tibia from sliding forward on femur' },
        { term: 'Autograft', definition: 'Tissue taken from your own body to use as the graft' },
        { term: 'Allograft', definition: 'Tissue from a cadaver donor' },
        { term: 'Graft', definition: 'Tissue used to replace the torn ligament' },
      ],
      analogies: [
        'The ACL is like the knee\'s seatbelt - it keeps your shin bone from sliding forward.',
        'ACL reconstruction is like putting in a new rope when the old one broke.',
      ],
      examples: [
        'Soccer player pivots and tears ACL with a "pop"',
        'Skier lands awkwardly after a jump and injures ACL',
        'Basketball player plants foot and tears ACL',
      ],
    },

    2: {
      level: 2,
      summary: 'ACL reconstruction is indicated for active individuals with functional instability. Autograft (patellar or hamstring) is preferred for young athletes.',
      explanation: `## Indications for Surgery

**Acute ACL Tear:**
- Athletes planning to return to pivoting sports
- Functional instability despite rehab
- Combined injuries (meniscus, other ligaments)

**Chronic ACL Deficiency:**
- Recurrent giving way episodes
- Activity-limiting instability
- Early osteoarthritis changes

**Non-Surgical Management:**
- Sedentary individuals
- Partial tears
- Low-demand activities
- Bracing and physical therapy

## Graft Selection

**Patellar Tendon Autograft (BTB):**
- Bone plug at each end (bone-tunnel healing)
- Gold standard for athletes
- Harvest site pain (front of knee)
- Patellar fracture risk

**Hamstring Autograft (4-strand):**
- Gracilis and semitendinosus tendons
- Less anterior knee pain
- Smaller incision
- Slightly higher failure rate

**Quadriceps Tendon Autograft:**
- Large, strong graft
- Less donor site morbidity
- Newer technique

**Allograft:**
- No donor site morbidity
- Faster surgery
- Higher failure rate in young athletes
- Good for revision ACL or multi-ligament`,

      keyTerms: [
        { term: 'BTB', definition: 'Bone-Tendon-Bone - patellar tendon graft with bone plugs at each end' },
        { term: 'Functional instability', definition: 'Knee giving way during activities requiring cutting or pivoting' },
        { term: 'Donor site morbidity', definition: 'Problems at the place where graft was taken from (pain, weakness)' },
        { term: 'Revision ACL', definition: 'Second surgery when first ACL reconstruction fails' },
      ],
      analogies: [
        'BTB graft is like taking a post with fence still attached - the bone parts heal into the bone tunnels.',
        'Hamstring graft is like using braided rope instead of a single strand.',
      ],
      examples: [
        'College football player gets BTB autograft for return to play in 9 months',
        'Recreational athlete chooses hamstring to avoid kneeling pain',
        'Older adult with chronic instability gets allograft reconstruction',
      ],
      clinicalNotes: 'Preoperative rehabilitation (prehab) reduces postoperative stiffness and improves outcomes. Neuromuscular training reduces risk of contralateral ACL tear. Early motion (day 1) prevents arthrofibrosis.',
    },

    3: {
      level: 3,
      summary: 'ACL reconstruction provides excellent stability with 90%+ return to sports. Graft selection depends on patient activity level, prior surgery, and surgeon preference.',
      explanation: `## Surgical Techniques

**Anatomic ACL Reconstruction:**
- Reconstructs native ACL footprint
- Restores normal knee kinematics
- Standard technique currently

**Double-Bundle:**
- Reconstructs both AM and PL bundles
- Theoretically better rotation control
- More expensive, longer surgery
- Outcomes similar to single-bundle

**All-Inside:**
- Cortical button fixation
- Smaller incisions
- Drilling concerns about suspensory fixation
- Growing popularity

## Complications

**Graft Failure:**
- 3-5% for autografts
- 10-15% for allografts
- Higher in young athletes
- May need revision surgery

**Extension Loss:**
- Scar tissue limits straightening
- More common with autografts
- Aggressive PT essential

**Patellofemoral Pain:**
- Anterior knee pain (patellar tendon harvest)
- Can persist for months
- Less with hamstring graft

**Infection:**
- <1% with prophylactic antibiotics
- May require washout and graft removal

## Return to Sport

**Criteria:**
- Full range of motion
- No swelling
- Good strength (85-90% compared to other side)
- No pain or instability
- Functional testing (hop tests, agility)

**Timeline:**
- Non-pivoting sports: 4-6 months
- Pivoting sports: 6-9 months
- Contact sports: 9-12 months
- Professional athletes: May return sooner (6-8 months)

## Graft Failure Risk Factors

**Patient Factors:**
- Age <25: Higher failure rate
- High activity level
- Family history of ACL tear
- Increased posterior tibial slope`,

      keyTerms: [
        { term: 'AM/PL bundles', definition: 'Anteromedial and Posterolateral bundles - two functional bundles of the ACL' },
        { term: 'Anatomic footprint', definition: 'The exact locations where the ACL attaches to bone' },
        { term: 'Extension loss', definition: 'Cannot fully straighten the knee - due to scar tissue' },
        { term: 'Posterior tibial slope', definition: 'Angle of the shin bone - steeper slope increases graft stress' },
      ],
      analogies: [
        'Extension loss is like having a hinge that won\'t fully open.',
        'The posterior tibial slope is like a ramp - steeper ramp means more sliding.',
      ],
      examples: [
        'Soccer player returns at 7 months with functional brace',
        'Patient with steep tibial slope has higher graft failure risk',
        'Revision ACL using allograft due to tunnel widening from primary surgery',
      ],
      clinicalNotes: 'Meniscus repair at time of ACL reconstruction improves outcomes and reduces arthritis risk. Lateral meniscus is most important for stability. Pivot shift exam should be negative before return to sports.',
    },

    4: {
      level: 4,
      summary: 'ACL reconstruction outcomes are excellent with modern techniques. Anatomic reconstruction, secure fixation, and rehabilitation protocols maximize success.',
      explanation: `## Outcomes by Graft Type

**Patellar Tendon:**
- 90-95% return to pre-injury level
- Instrumented laxity <3mm in 90%
- 5-10% patellofemoral pain
- 5-10% extension loss

**Hamstring:**
- 85-90% return to pre-injury level
- Less anterior knee pain
- Slightly higher laxity
- Less extension loss

**Allograft:**
- 70-80% return to pre-injury level
- Higher failure in young athletes
- Good for revision, multi-ligament
- Donor site morbidity eliminated

## Meniscus Considerations

**Repairable tears:**
- Meniscus repair at time of ACL
- 75% heal when repaired
- Protects joint from arthritis

**Meniscectomy:**
- Removed meniscus = faster arthritis
- Medial meniscus is critical
- Lateral meniscus less important for stability

**Meniscal Transplant:**
- For symptomatic meniscus loss
- Young patients with pain
- 10-year survival: 50-70%

## Revision ACL Reconstruction

**Indications:**
- Graft failure (re-tear)
- Recurrent instability
- Painful hardware
- Tunnel malposition

**Challenges:**
- Bone tunnels widened
- Need for larger or different graft
- Often 2-incision technique
- Allograft often preferred

**Outcomes:**
- 80-85% return to sports
- Lower than primary (95%)
- Higher complication rate`,

      keyTerms: [
        { term: 'Instrumented laxity', definition: 'Measured looseness of the knee with special tools (KT-1000, Rolimeter)' },
        { term: 'Pivot shift', definition: 'Test for ACL function - shin slides forward on thigh when twisted' },
        { term: 'Meniscal transplant', definition: 'Transplanting donated meniscus into knee that lost its meniscus' },
        { term: 'Tunnel widening', definition: 'Bone holes enlarge over time, making graft loose' },
      ],
      analogies: [
        'The pivot shift is like a drawer sliding open - that\'s what happens when the ACL is torn.',
        'Tunnel widening is like a hole in drywall that gets too big for the anchor.',
      ],
      examples: [
        'Patient with failed hamstring ACL gets patellar tendon revision',
        'Athlete with meniscectomy develops early arthritis',
        'Someone with painful patellar button has it removed arthroscopically',
      ],
      clinicalNotes: 'Anatomic single-bundle reconstruction has largely replaced double-bundle due to similar outcomes with less morbidity. Anterior laxity <5mm and <2mm side-to-side difference is acceptable. Lateral extra-articular tenodesis can augment ACL reconstruction in revision cases.',
    },

    5: {
      level: 5,
      summary: 'ACL reconstruction has evolved from open surgery to minimally invasive anatomic reconstruction. Future directions include bridge-enhanced repair and bioenhanced healing.',
      explanation: `## Advanced Techniques

**Bridge-Enhanced ACL Repair:**
- Preserve native ACL tissue
- Suture augmentation with strong suture
- For proximal avulsion tears
- Early results promising
- May revolutionize ACL treatment

**BEAR (Bridge-Enhanced ACL Repair):**
- Stitched primary repair
- Extracellular matrix scaffold
- Powdered collagen
- Blood products (PRP, BMAC)
- Early motion promotes healing

## Bioenhancement

**Platelet-Rich Plasma (PRP):**
- Concentrated platelets
- Growth factors
- Theoretical benefit for graft healing
- Evidence limited

**Bone Marrow Aspirate Concentrate (BMAC):**
- Mesenchymal stem cells
- May accelerate graft incorporation
- Limited evidence

**Stem Cells:**
- Theoretical: Speed healing, improve incorporation
- Reality: Still experimental
- Cost and availability issues

## Controversies

**Timing of Surgery:**
- Immediate: Before swelling and stiffness
- Delayed (2-3 weeks): After resolution of inflammation
- Either is acceptable
- Early surgery may reduce muscle atrophy

**Quadriceps Strength:**
- Biggest predictor of function
- Quads weakness persists >1 year after surgery
- Eccentric strengthening essential
- Home exercise vs. supervised PT

**Single vs. Double Bundle:**
- Single: Standard, proven results
- Double: Theoretically better rotation
- RCTs show no clinical difference
- More cost, more time

## Future Directions

**Biodegradable Screws:**
- No hardware complications
- Disappear over time
- MRI artifacts eliminated

**Artificial Ligaments:**
- LARS, Synthetic ligaments
- Used primarily for revision
- Long-term data limited
- Infection risk if fails

**Genetic Screening:**
- Identify high-risk athletes
- Family history of ACL tears
- Targeted prevention programs`,

      keyTerms: [
        { term: 'Proximal avulsion', definition: 'ACL tears off the bone (femur side) instead of stretching in middle' },
        { term: 'Meniscectomy', definition: 'Surgical removal of part or all of the meniscus' },
        { term: 'PRP', definition: 'Platelet-Rich Plasma - concentrated platelets with growth factors' },
        { term: 'LARS', definition: 'Ligament Augmentation and Reconstruction System - artificial ACL' },
      ],
      analogies: [
        'Bridge-enhanced repair is like using patch kit instead of full replacement.',
        'Quadriceps weakness is like having a weak engine - the car doesn\'t accelerate well.',
      ],
      examples: [
        'Athlete with proximal ACL avulsion gets repair instead of reconstruction',
        'Patient gets PRP injection at graft site to promote healing',
        'LARS ligament used in revision with blown-out tunnels',
      ],
      clinicalNotes: 'The MOON trial compared patellar vs. hamstring grafts: no difference in outcomes at 2 years. The STABILITY trial compared single vs. double bundle: no difference in patient-reported outcomes. Current trend: use what surgeon is most comfortable with - technique less important than rehabilitation.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['orthopedic-surgery', 'acl', 'knee', 'sports-injury', 'ligament'],
    systems: ['musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery', 'orthopedics'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
