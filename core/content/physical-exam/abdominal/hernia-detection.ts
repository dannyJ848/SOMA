/**
 * Hernia Detection - Physical Examination
 */

import { EducationalContent } from '../../types';

export const herniaDetection: EducationalContent = {
  id: 'abdominal-hernia-detection',
  type: 'topic',
  name: 'Hernia Detection Examination',
  alternateNames: ['Hernia Exam', 'Hernia Assessment', 'Groin Examination'],

  levels: {
    1: {
      level: 1,
      summary: 'A hernia exam checks for bulges where organs or tissue push through weak spots in the muscle wall, most commonly in the groin or belly button.',
      explanation: `## What Is a Hernia?

A hernia happens when an organ or fatty tissue squeezes through a weak spot in a surrounding muscle or connective tissue. It is like a tire bulging through a weak spot in the outer rubber.

### Common Types of Hernias

**Groin Hernias:**
- **Inguinal hernia** - Most common type, in the groin
- Happens more often in men
- Can cause a bulge that gets bigger when coughing

**Belly Button Hernia:**
- **Umbilical hernia** - Near or at the navel
- Common in babies
- Can happen in adults too

**Surgical Scar Hernia:**
- **Incisional hernia** - Where a previous surgery was done
- The scar tissue is weaker than normal muscle

### How Doctors Check for Hernias

**Visual Inspection:**
- Look for visible bulges
- Compare both sides of the groin
- Check for asymmetry

**The Cough Test:**
- Doctor places finger over the area
- Patient coughs or strains
- Hernia often bulges outward with pressure

**Gentle Palpation:**
- Doctor feels for the hernia opening
- Checks if it can be pushed back in
- Feels the size of the opening

### When Hernias Are Dangerous

Most hernias are not emergencies, but seek help if:
- The bulge becomes very painful
- It cannot be pushed back in
- The skin over it changes color
- You feel sick with vomiting

These signs may mean the hernia is stuck (strangulated), which is an emergency.`,

      keyTerms: [
        { term: 'hernia', definition: 'A bulge of tissue through a weak spot in muscle' },
        { term: 'inguinal', definition: 'Related to the groin area' },
        { term: 'umbilical', definition: 'Related to the belly button' },
        { term: 'strangulated', definition: 'When a hernia is stuck and blood supply is cut off' },
        { term: 'reducible', definition: 'A hernia that can be pushed back in' },
      ],

      analogies: [
        'A hernia is like a bubble in wallpaper - the surface pushes through a weak spot.',
        'The abdominal wall is like a fence - a hernia is where the fence has a hole.',
        'A strangulated hernia is like a garden hose with a kink - nothing can get through.',
      ],

      examples: [
        'A bulge in the groin that appears when lifting heavy objects is likely an inguinal hernia.',
        'A soft bulge at the belly button in a baby is usually an umbilical hernia.',
        'A bulge near an old surgery scar suggests an incisional hernia.',
      ],

      patientCounselingPoints: [
        'Most hernias are not dangerous but should be checked by a doctor.',
        'Avoid heavy lifting if you suspect a hernia.',
        'Surgery is often needed to fix a hernia permanently.',
        'Seek immediate care if a hernia becomes painful and cannot be pushed in.',
      ],
    },

    2: {
      level: 2,
      summary: 'Hernia examination systematically assesses for abdominal wall defects through inspection, palpation, and provocative maneuvers to identify reducible, incarcerated, or strangulated hernias.',
      explanation: `## Types of Hernias

### By Location

| Type | Location | Frequency | Notes |
|------|----------|-----------|-------|
| Inguinal | Groin | 75% of hernias | Direct or indirect |
| Femoral | Below groin crease | 3-5% | More common in women |
| Umbilical | Umbilicus | 10% | Common in infants |
| Incisional | Surgical scar | 10-15% | Post-operative complication |
| Epigastric | Midline above umbilicus | 3-5% | Through linea alba |
| Spigelian | Lateral rectus border | Rare | Below umbilicus |
| Obturator | Pelvic floor | Rare | Obturator foramen |

### Examination Technique

**Patient Positioning:**
- Supine for initial exam
- Standing for better visualization
- May need to strain (cough, Valsalva)

**Inspection:**
- Observe both groins simultaneously
- Look for visible or palpable bulges
- Note asymmetry
- Check for skin changes (erythema, discoloration)

**Palpation:**
- Place finger on pubic tubercle
- Ask patient to cough or strain
- Feel for bulge or impulse
- Assess size of defect
- Determine if reducible

### Clinical Classification

**Reducible:**
- Can be pushed back into abdomen
- Usually asymptomatic or mild discomfort
- Elective repair appropriate

**Incarcerated:**
- Cannot be reduced
- Not necessarily strangulated
- May have pain and nausea
- Urgent evaluation needed

**Strangulated:**
- Blood supply compromised
- Severe pain
- Skin changes (red, purple)
- Systemic symptoms (fever, tachycardia)
- Surgical emergency`,

      keyTerms: [
        { term: 'incarcerated', definition: 'Hernia that cannot be pushed back but still has blood supply' },
        { term: 'direct inguinal hernia', definition: 'Hernia through Hesselbach triangle, medial to epigastric vessels' },
        { term: 'indirect inguinal hernia', definition: 'Hernia through inguinal canal, lateral to epigastric vessels' },
        { term: 'femoral hernia', definition: 'Hernia through femoral canal below inguinal ligament' },
        { term: 'linea alba', definition: 'Midline fibrous structure connecting abdominal muscles' },
      ],

      analogies: [
        'The inguinal canal is like a tunnel - indirect hernias enter the tunnel, direct hernias push through the wall beside it.',
        'Reducing a hernia is like pushing a mouse back into its hole.',
      ],

      examples: [
        'Indirect inguinal hernia: bulge lateral to pubic tubercle, may extend into scrotum.',
        'Femoral hernia: bulge below inguinal ligament, medial to femoral pulse.',
        'Strangulated hernia: firm, tender, non-reducible with overlying skin changes.',
      ],

      clinicalNotes: 'Femoral hernias have highest risk of strangulation due to narrow neck. Always examine both groins as hernias can be bilateral.',
    },

    3: {
      level: 3,
      summary: 'Advanced hernia examination differentiates hernia types, assesses for complications, and guides surgical decision-making.',
      explanation: `## Differentiating Inguinal Hernias

### Anatomical Differences

**Indirect Inguinal Hernia:**
- Origin: Deep inguinal ring (lateral to epigastric vessels)
- Path: Through inguinal canal, may enter scrotum
- Common in infants, young adults
- Congenital predisposition
- Exam: Bulge at or above inguinal crease, lateral

**Direct Inguinal Hernia:**
- Origin: Hesselbach triangle (medial to epigastric vessels)
- Path: Pushes directly through abdominal wall
- Common in older adults
- Acquired weakness
- Exam: Bulge above inguinal crease, medial

### Special Examination Techniques

**Digital Examination:**
1. Place little finger in inguinal canal (inverted)
2. Patient coughs
3. Feel for impulse on fingertip (indirect)
4. Feel for impulse on pad of finger (direct)

**Differentiating Examination:**
- Reduce hernia, apply pressure over deep ring
- Ask patient to cough
- If hernia reappears: direct (not controlled)
- If controlled: indirect

### Complications Assessment

**Signs of Strangulation:**
- Severe, constant pain
- Non-reducible
- Tense, tender hernia
- Skin erythema or ecchymosis
- Bowel obstruction symptoms
- Systemic toxicity signs

**Richter Hernia:**
- Only part of bowel circumference trapped
- May not cause obstruction
- High risk of strangulation
- Difficult to diagnose

**Sliding Hernia:**
- Part of hernia sac is organ (usually colon or bladder)
- Cannot be fully reduced
- Risk of organ injury during surgery

### Pediatric Considerations

**Umbilical Hernias:**
- Common, usually close spontaneously by age 5
- Surgical repair if persists >5 years or complications
- Incarceration rare

**Inguinal Hernias:**
- More common in premature infants
- Higher risk of incarceration
- Repair recommended when diagnosed
- Contralateral side often explored`,

      keyTerms: [
        { term: 'Hesselbach triangle', definition: 'Area bounded by inguinal ligament, rectus sheath, and inferior epigastric vessels' },
        { term: 'deep inguinal ring', definition: 'Internal opening of inguinal canal' },
        { term: 'Richter hernia', definition: 'Hernia involving only part of bowel wall' },
        { term: 'sliding hernia', definition: 'Hernia where part of sac is formed by organ' },
        { term: 'Littre hernia', definition: 'Hernia containing Meckel diverticulum' },
      ],

      analogies: [
        'Indirect hernia takes the scenic route through the canal; direct takes the shortcut through the wall.',
        'A Richter hernia is like sticking your hand through a fence - the fence closes on your wrist.',
      ],

      examples: [
        'Groin bulge that goes into the scrotum suggests indirect inguinal hernia.',
        'Medial bulge that does not enter scrotum suggests direct inguinal hernia.',
        'Bulge below inguinal ligament in a woman suggests femoral hernia.',
      ],

      clinicalNotes: 'Incarcerated femoral hernia in a woman is strangulated until proven otherwise.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of hernia examination with management decisions, surgical planning, and complex case evaluation.',
      explanation: `## Surgical Decision Making

**Indications for Repair:**
- Symptomatic hernia
- Any femoral hernia (high strangulation risk)
- Inguinal hernia with risk factors
- Elective repair preferred over emergency

**Contraindications to Immediate Repair:**
- Ascites (high recurrence)
- Active infection
- Severe comorbidities
- Uncontrolled cough (COPD)

**Repair Techniques:**

| Technique | Approach | Mesh | Recurrence |
|-----------|----------|------|------------|
| Lichtenstein | Open | Yes | <2% |
| Laparoscopic TEP | Laparoscopic | Yes | <2% |
| Laparoscopic TAPP | Laparoscopic | Yes | <2% |
| Shouldice | Open | No | 5-10% |

### Complex Hernias

**Recurrent Hernia:**
- Higher risk with each repair
- Consider different approach (laparoscopic after open)
- May need component separation
- Biological mesh in contaminated field

**Incisional Hernia Risk Factors:**
- Wound infection
- Obesity
- Diabetes
- Steroid use
- Smoking
- Emergency surgery

**Large Ventral Hernias:**
- Loss of domain (bowel outside abdomen chronically)
- Component separation techniques
- May need preoperative tissue expanders

### Special Populations

**Pregnancy:**
- Groin masses may be round ligament varices
- Defer repair unless strangulated
- Cesarean can include hernia repair

**Ascites:**
- Control ascites before repair
- Transjugular intrahepatic portosystemic shunt (TIPS)
- High recurrence rate
- Consider palliative care

**Post-Prostatectomy:**
- Inguinal hernia risk increased
- Timing of repair controversial
- May develop after robot-assisted surgery`,

      keyTerms: [
        { term: 'component separation', definition: 'Surgical technique to mobilize abdominal wall layers' },
        { term: 'loss of domain', definition: 'Condition where abdominal contents chronically outside cavity' },
        { term: 'TEP', definition: 'Totally extraperitoneal laparoscopic approach' },
        { term: 'TAPP', definition: 'Transabdominal preperitoneal laparoscopic approach' },
      ],

      clinicalNotes: 'Watchful waiting acceptable for minimally symptomatic inguinal hernias in men, but 70% eventually require surgery.',
    },

    5: {
      level: 5,
      summary: 'Expert-level hernia management including complex repairs, emergent situations, and evidence-based surgical outcomes.',
      explanation: `## Advanced Hernia Surgery

**Complex Abdominal Wall Reconstruction:**
- Loss of domain hernias
- Enterocutaneous fistula with hernia
- Infected mesh removal
- Biological vs synthetic mesh decisions

**Emergency Hernia Management:**

**Strangulated Hernia Protocol:**
1. Resuscitation and antibiotics
2. Laboratory evaluation (lactate, WBC)
3. CT if diagnosis uncertain
4. Broad-spectrum antibiotics
5. Urgent surgery

**Bowel Viability Assessment:**
- Color, peristalsis, pulsation
- Doppler assessment
- Fluorescein dye
- Second-look laparotomy if marginal

**Mesh in Contaminated Field:**
- Synthetic mesh generally avoided
- Biologic mesh preferred
- High recurrence rates
- Component separation without mesh option

### Evidence-Based Outcomes

**Laparoscopic vs Open:**
- Faster recovery with laparoscopic
- Less chronic pain
- Higher recurrence in learning curve
- Better for bilateral and recurrent

**Mesh vs Non-Mesh:**
- Mesh reduces recurrence significantly
- Chronic pain concern with mesh
- Lightweight, large pore mesh preferred

### Rare Hernia Types

**Obturator Hernia:**
- Elderly, thin women
- Howship-Romberg sign (thigh pain)
- High mortality if missed
- CT diagnostic

**Lumbar Hernia:**
- Grynfeltt (superior) or Petit (inferior) triangle
- Flank bulge
- Often missed

**Sciatic Hernia:**
- Pelvic hernia through sciatic foramen
- Rare, difficult diagnosis
- May compress sciatic nerve`,

      keyTerms: [
        { term: 'enterocutaneous fistula', definition: 'Abnormal connection between bowel and skin' },
        { term: 'Howship-Romberg sign', definition: 'Thigh pain with obturator hernia' },
        { term: 'Grynfeltt hernia', definition: 'Lumbar hernia through superior triangle' },
      ],

      clinicalNotes: 'Obturator hernia has mortality rate >50% if strangulated and missed. Consider in elderly woman with small bowel obstruction and no prior surgery.',
    },
  },

  media: [],

  citations: [
    {
      id: 'schwartz-hernia',
      type: 'textbook',
      title: 'Schwartz Principles of Surgery',
      source: 'McGraw-Hill',
    },
  ],

  crossReferences: [
    { targetId: 'abdominal-inspection-palpation', targetType: 'topic', relationship: 'sibling', label: 'Abdominal Inspection' },
    { targetId: 'surgery-abdominal-wall', targetType: 'topic', relationship: 'related', label: 'Abdominal Wall Surgery' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['physical-examination', 'surgery'],
    keywords: ['hernia', 'inguinal', 'femoral', 'umbilical', 'strangulated'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default herniaDetection;
