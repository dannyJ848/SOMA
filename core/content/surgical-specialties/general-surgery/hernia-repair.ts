/**
 * Hernia Repair
 *
 * Surgical repair of abdominal wall defects where organs push through weak spots.
 */

import { EducationalContent } from '../../types';

export const herniaRepairContent: EducationalContent = {
  id: 'surgical-hernia-repair',
  type: 'topic',
  name: 'Hernia Repair',
  alternateNames: ['Herniorrhaphy', 'Inguinal Hernia Repair', 'Incisional Hernia Repair'],

  levels: {
    1: {
      level: 1,
      summary: 'Hernia repair is surgery to fix a hole in your abdominal muscles where something (usually intestine) is poking through. This causes a bulge that can be painful and dangerous.',
      explanation: `## What Is a Hernia?

A hernia is when an organ or tissue pushes through a weak spot in the muscle or tissue that usually holds it in place. Think of it like a tire with a weak spot where the inner tube bulges out.

## Common Types

**Inguinal Hernia (Most Common):**
- In the groin area (crease crease)
- Can be direct (into canal) or indirect (through canal)
- More common in men than women

**Incisional Hernia:**
- Through a scar from previous surgery
- Bulge near surgical incision

**Umbilical Hernia:**
- Belly button area
- Common in babies (usually closes on its own)
- Adults may need repair

**Ventral/Incisional:**
- Midline defect in abdominal muscles
- Can be congenital or from surgery

## Why Repair Is Important

**Strangulation Risk:**
- Tissue can get squeezed tight
- Blood supply gets cut off
- Tissue dies (gangrene) - life-threatening!

**Pain and Discomfort:**
- Bulge gets larger with activity
- Can interfere with work, exercise
- Quality of life suffers

## The Surgery

**Laparoscopic (Most Common):**
- Small cuts, camera
- Mesh patch placed over defect
- Recurrence rate lower

**Open:**
- Larger incision
- No mesh needed for small hernias
- May use mesh for larger defects`,

      keyTerms: [
        { term: 'Inguinal canal', definition: 'Passage in the groin where structures (cord, vessels) enter abdomen' },
        { term: 'Strangulation', definition: 'When hernia contents get squeezed so tight that blood supply is cut off' },
        { term: 'Gangrene', definition: 'Tissue death from lack of blood supply' },
      ],
      analogies: [
        'A strangulated hernia is like putting a tight rubber band on your finger - it cuts off the circulation.',
        'Mesh is like a patch that reinforces a weak spot in clothing.',
      ],
      examples: [
        'Groin bulge that gets painful with lifting',
        'Bowel obstruction from hernia trapping intestine',
        'Previous surgery site develops bulge',
      ],
    },

    2: {
      level: 2,
      summary: 'Hernia repair is indicated for symptomatic hernias or those at risk of strangulation. Watchful waiting is appropriate for small, asymptomatic inguinal hernias.',
      explanation: `## Indications for Repair

**Symptomatic:**
- Painful bulge
- Interferes with activities
- Enlarging over time

**High Risk for Strangulation:**
- Femoral hernias (high risk!)
- Direct inguinal hernias
- Unable to reduce hernia
- Incarcerated >12 hours

**Contraindications to Repair:**
- Asymptomatic small reducible hernia
- Patient too high-risk for surgery
- Patient prefers observation

## Types of Repair

**Inguinal Hernia Repair:**
- Lichtenstein (tension-free mesh repair): Gold standard
- Bassini (tension repair): Suture approximation
- Shouldice: Multi-layer sutured repair
- Laparoscopic vs. open: Similar recurrence, shorter recovery with laparoscopic

**Ventral Hernia:**
- Primary (congenital): Repaired in children
- Underlying defect in abdominal wall
- Tension repair or mesh
- Incisional: Often requires mesh reinforcement

## Mesh Options

**Synthetic:**
- Polypropylene (most common)
- Heavier weight for large defects
- Lightweight for inguinal hernias

**Biological:**
- Animal or human tissue
- Expensive
- Used in contaminated fields

**Component Separation:**
- Composite mesh
- Prevents adhesions`,

      keyTerms: [
        { term: 'Reducible', definition: 'Hernia can be pushed back into the belly by pressing on it' },
        { term: 'Incarcerated', definition: 'Hernia cannot be pushed back - tissue trapped inside' },
        { term: 'Lichtenstein', definition: 'Flat mesh placed over defect with no tension (gold standard)' },
        { term: 'Bassini repair', definition: 'Suturing the edges of the defect together' },
      ],
      analogies: [
        'Incarcerated hernia is like trapping your finger in a Chinese finger trap - the more you pull, the tighter it gets.',
        'Tension-free repair is like patching a hole with matching fabric that doesn\'t pull at the edges.',
      ],
      examples: [
        'Groin hernia that can\'t be pushed back - incarcerated',
        'Previous C-section with bulge at incision site',
        'Premature baby with umbilical hernia',
      ],
      clinicalNotes: 'Watchful waiting is safe for asymptomatic or minimally symptomatic hernias. Emergency repair needed for strangulation, perforation, or sepsis. Recurrence rate: 1-2% with mesh, 5-10% without mesh.',
    },

    3: {
      level: 3,
      summary: 'Laparoscopic hernia repair has lower recurrence rates and faster recovery compared to open repair. Mesh placement and fixation technique are critical to prevent recurrence.',
      explanation: `## Surgical Technique

**Inguinal Hernia:**
1. Dissect sac off cord (in males)
2. Reduce hernia back into abdomen
3. Identify direct vs. indirect
4. Place mesh over defect
5. Secure mesh with sutures or tacks
6. Close

**Ventral Hernia:**
- Separate components from subcutaneous tissue
- Determine fascial defect size
- Close defect primarily or reinforce with mesh
- Component separation technique reduces wound complications

## Mesh Fixation

**Sutures:**
- Permanent (prolene, Prolene) - Number 1 (Ethicon), 2-0 (Covidien)
- Four-point fixation for inguinal
- Suture through mesh into muscle

**Tacks:**
- Spiral tacks for open ventral hernias
- Fixation to bone (tacks into bone)
- Quick, secure fixation
- Can be visible/palpable under skin

**Glue:**
- Fibrin sealant
- Adjunct to sutures
- Expensive, not sufficient alone

## Complications

**Early (<30 days):**
- Wound infection: 1-3%
- Hematoma/seroma: 5-10%
- Urinary retention (men): 2-5%
- Testicular atrophy (direct repair): <1%

**Late (>30 days):**
- Recurrence: 1-2% with mesh, 5-10% without
- Chronic pain: 5-10%
- Mesh infection: <1% (may require mesh removal)
- Nerve injury: 0.5-2% (rare, chronic pain)`,

      keyTerms: [
        { term: 'Seroma', definition: 'Clear fluid collection that accumulates under the skin after surgery' },
        { term: 'Hematoma', definition: 'Collection of blood in tissues after surgery' },
        { term: 'Testicular atrophy', definition: 'Shrinkage of testicle from injury to blood supply during surgery' },
        { term: 'Preperitoneal approach', definition: 'Placing mesh behind abdominal muscles but in front of hernia sac' },
      ],
      analogies: [
        'Testicular atrophy is like when a plant doesn\'t get water - it shrivels up.',
        'Seroma is like a blister fluid pocket that forms after surgery.',
      ],
      examples: [
        'Patient with recurrent inguinal hernia after mesh repair needs larger mesh',
        'Open hernia repair with extensive dissection develops seroma',
        'Patient has direct inguinal hernia found intraoperatively',
      ],
      clinicalNotes: 'Postop urinary retention is more common with spinal or epidural anesthesia. Consider local anesthesia with long-acting bupivacaine or no opioids. Chronic postoperative pain may be from nerve entrapment or mesh irritation rather than the hernia itself.',
    },

    4: {
      level: 4,
      summary: 'Mesh selection and fixation technique depend on hernia type, size, and patient factors. Biological and composite meshes may reduce complications in selected cases.',
      explanation: `## Mesh Selection

**Heavyweight Polypropylene:**
- Large pores (>1mm)
- Strong, incorporates tissue ingrowth
- Can be palpable/discomforting
- Not for inguinal hernias

**Lightweight Polypropylene:**
- Smaller pores (<0.5mm)
- Less inflammatory, more flexible
- Standard for inguinal hernias
- Can\'t be felt through skin

**Large Pore Polypropylene:**
- For ventral/repair
- Reduces recurrence
- More expensive

**Composite/Biological:**
- PTFE or biological coating
- Reduces adhesion formation
- Used in contamination risk
- Expensive

## Recurrence Risk Factors

**Patient Factors:**
- COPD, chronic cough
- Constipation/straining
- Obesity
- Ascites
- Smoking
- Poor nutrition

**Surgical Factors:**
- No mesh used - 10x recurrence risk
- Mesh size too small
- Inadequate fixation
- Tissue quality

## Complications by Type

**Inguinal:**
- Recurrence: 1-2% with mesh
- Nerve injury (ilioinguinal, iliohypogastric)
- Vascular injury to cord
- Testicular atrophy (direct repair)

**Ventral:**
- Wound complications: 10-20%
- Recurrence: <5% with mesh
- Seroma formation
- Mesh extrusion`,

      keyTerms: [
        { term: 'PTFE', definition: 'Polytetrafluoroethylene - Gore-Tex material used in some meshes' },
        { term: 'Ilioinguinal nerve', definition: 'Sensory nerve to groin skin and scrotum, often injured during hernia repair' },
        { term: 'Iliohypogastric nerve', definition: 'Motor nerve to cremaster muscle, injury causes testicle to sit higher' },
        { term: 'Ascites', definition: 'Abnormal fluid collection in abdomen, usually from liver disease' },
      ],
      analogies: [
        'The ilioinguinal nerve provides sensation to the groin - like a sensor wire.',
        'Ascites increases abdominal pressure and pushes on hernia repairs.',
      ],
      examples: [
        'COPD patient with chronic cough gets recurrence after mesh repair',
        'Direct inguinal hernia repair results in testicular atrophy',
        'Large ventral hernia requires larger mesh and stronger fixation',
      ],
      clinicalNotes: 'Laparoscopic inguinal hernia repair has better outcomes than open: faster recovery, less pain, similar recurrence. However, learning curve is steeper. For very large hernias (scrotal), open approach with large mesh may be better.',
    },

    5: {
      level: 5,
      summary: 'Hernia repair techniques continue to evolution. Laparoscopic repair with lightweight mesh is standard for most inguinal hernias.',
      explanation: `## Advanced Techniques

**Laparoscopic Inguinal:**
- TEP (Transabdominal Preperitoneal)
- TAPP (Transabdominal Preperitoneal Plus)
- Totally Extraperitoneal (TEP)
- TEP and TAPP have lower recurrence than TEP

**Robotic Repair:**
- 3D visualization
- Easier for large hernias
- Precise mesh placement
- Longer OR time, higher cost
- Similar outcomes to laparoscopic

**Component Separation:**
- Separate mesh from components
- Reduces wound complications
- Useful in large ventral hernias
- Increases cost

## Controversies

**Routine Contralateral Exploration:**
- Look for hernia on opposite side
- 20-30% of inguinal hernias are bilateral
- Controversial: Many repair both, some explore only
- Consider patient factors (age, occupation)

**Watchful Waiting:**
- Safe for small asymptomatic hernias
- 2-5% incarceration rate per year
- Men: 27% lifetime risk of incarceration
- Women: 3% lifetime risk
- Individualized decision

## Outcomes

**Quality of Life:**
- Pain relief: 90-95%
- Return to work: 2-4 weeks
- Heavy lifting: 4-6 weeks
- Recurrence: 1-2% (mesh), 5-10% (no mesh)

**Sexual Function:**
- Temporary changes (3-6 months)
- Pain, ejaculation discomfort, libido reduced
- Long-term outcomes: Usually normal`,

      keyTerms: [
        { term: 'TEP', definition: 'Totally Extraperitoneal - laparoscopic repair from outside the peritoneum' },
        { term: 'TAPP', definition: 'Transabdominal Preperitoneal Plus - laparoscopic repair through peritoneum' },
        { term: 'Preperitoneal', definition: 'Between the muscle and the lining of the abdomen (peritoneum)' },
        { term: 'Extraperitoneal', definition: 'Outside the abdominal lining' },
      ],
      analogies: [
        'Watchful waiting is like monitoring a crack in your wall - only fix if it\'s getting worse.',
        'Bilateral exploration is like checking both tires when one is flat - might as well fix both.',
      ],
      examples: [
        'Patient with bilateral inguinal hernias has both repaired at once',
        'Elderly patient with small asymptomatic hernia chooses observation',
        'Robotic repair used for very large scrotal hernia',
      ],
      clinicalNotes: 'The European Hernia Society classification system guides management based on size and location. Type I: lateral, Type II: medial, Type III: pantaloon, Type IV: giant. Giant (>10cm) hernias often need component separation and may require biological mesh.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['surgery', 'hernia', 'inguinal-hernia', 'ventral-hernia', 'mesh'],
    systems: ['musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
