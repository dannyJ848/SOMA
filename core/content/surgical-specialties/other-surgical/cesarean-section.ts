/**
 * Cesarean Section
 *
 * Surgical delivery of a baby through incisions in the abdomen and uterus.
 */

import { EducationalContent } from '../../types';

export const cesareanSectionContent: EducationalContent = {
  id: 'ob-gyn-cesarean-section',
  type: 'topic',
  name: 'Cesarean Section',
  alternateNames: ['C-Section', 'C/S', 'Cesarean Delivery'],

  levels: {
    1: {
      level: 1,
      summary: 'A cesarean section is surgery to deliver a baby through cuts in the belly and uterus. It\'s done when vaginal delivery isn\'t possible or safe for the mother or baby.',
      explanation: `## What Is a C-Section?

A C-section is when a surgeon delivers a baby through cuts in the abdomen (belly) and uterus (womb) instead of through the vagina. The baby is delivered through these openings.

## Why Is It Needed?

**For the Baby:**
- Baby is in wrong position (breech, sideways)
- Baby is too big for the birth canal
- Baby\'s heart rate shows distress
- Placenta problems

**For the Mother:**
- Placenta blocks the cervix (placenta previa)
- Health conditions make vaginal birth risky
- Active herpes outbreak
- Previous C-section (sometimes)

## What Happens During Surgery?

1. **Anesthesia:** Spinal or epidural (you're awake but numb from waist down)
2. **Incision:** Horizontal cut just above the pubic hair line (bikini cut)
3. **Uterus opened:** Another incision to reach the baby
4. **Baby delivered:** Head, then body
5. **Placenta removed:** Delivered through the same opening
6. **Sewing up:** Uterus and belly closed with stitches

## Recovery

- Hospital stay: 2-4 days
- First day: Rest, breastfeed when possible
- Moving: Walking as soon as possible
- Lifting: No heavy lifting for 6 weeks
- Driving: Usually okay after 2 weeks (off pain meds)
- Full recovery: 6 weeks`,

      keyTerms: [
        { term: 'Breech', definition: 'Baby positioned buttocks or feet first instead of head first' },
        { term: 'Epidural', definition: 'Medicine injected near spine to numb belly and legs' },
        { term: 'Placenta previa', definition: 'Placenta covering the cervix, making vaginal birth dangerous' },
        { term: 'Incision', definition: 'Surgical cut through skin and tissues' },
      ],
      analogies: [
        'A breech baby is like trying to pull a sweater out through the neck - doesn\'t work well.',
        'The epidural is like turning off sensation from the waist down while staying awake.',
      ],
      examples: [
        'First-time mom whose baby hasn\'t dropped after 24 hours of labor',
        'Mom whose baby has dropped heart rate needs emergency C-section',
        'Woman with placenta previa diagnosed on ultrasound',
      ],
    },

    2: {
      level: 2,
      summary: 'C-section is the most common major surgery in women worldwide. Indications include failure to progress, fetal distress, malpresentation, and prior C-section with classical scar.',
      explanation: `## Indications

**Emergency (Urgent Delivery Needed):**
- Fetal distress: Baby not getting enough oxygen
- Placental abruption: Placenta separates from uterus too early
- Cord prolapse: Cord comes out before baby
- Uterine rupture: Uterus tears during labor

**Elective (Planned Ahead):**
- Prior C-section with classical incision
- Breech presentation
- Placenta previa
- Certain infections (herpes, HIV with high viral load)
- Multiple gestation (triplets+, sometimes triplets)
- Macrosomia (baby >4500g/10lb)

**Failure to Progress:**
- Cervix stops dilating
- Baby doesn\'t descend despite pushing
- Usually after adequate trial of labor

## Incision Types

**Low Transverse (Pfannenstiel):**
- Horizontal "bikini line" incision
- Preferred, cosmetically favorable
- May limit future C-sections

**Classical (Vertical):**
- Up-down incision from belly button to pubis
- Faster entry, more bleeding
- Weaker scar, higher rupture risk in future pregnancies

## Anesthesia

**Spinal/Epidural:**
- Preferred for most C-sections
- Mother is awake
- Baby is exposed to less medication

**General Anesthesia:**
- Emergency when baby must be delivered fast
- Mother prefers to be asleep
- Contraindications to neuraxial anesthesia`,

      keyTerms: [
        { term: 'Dystocia', definition: 'Difficult or abnormal labor - failure to progress' },
        { term: 'Macrosomia', definition: 'Baby weighing more than 4000-4500g (about 9-10 pounds)' },
        { term: 'Prolapsed cord', definition: 'Umbilical cord comes out before baby, compressing cord and cutting off oxygen' },
        { term: 'Neuraxial', definition: 'Anesthesia around spine (spinal/epidural)' },
      ],
      analogies: [
        'Cord prolapse is like stepping on a hose - it cuts off the flow.',
        'Classical incision is like unzipping a jacket vertically - quick but leaves a weak seam.',
      ],
      examples: [
        'First-time mom with prolonged labor and no cervical change after 6 hours',
        'Baby in frank breech position (buttocks first) gets scheduled C-section',
        'Woman with herpes outbreak gets C-section to prevent newborn infection',
      ],
      clinicalNotes: 'One prior low-transverse C-section: 60-80% can attempt VBAC (vaginal birth after C-section). Classical incision: TOLAC (trial of labor after C-section) contraindicated due to uterine rupture risk (1%).',
    },

    3: {
      level: 3,
      summary: 'C-section rate in the US is ~32%. Risks include infection, hemorrhage, DVT, injury to adjacent organs, and future placenta complications.',
      explanation: `## Surgical Steps

1. **Anesthesia and Prep**
   - Antibiotics within 60 minutes
   - Skin antisepsis
   - Foley catheter

2. **Incision**
   - Enter peritoneum
   - Bladder flap to protect

3. **Uterine Incision**
   - Low transverse incision
   - Be careful of bladder

4. **Delivery**
   - Head delivered
   - Suction mouth/nose
   - Body delivered
   - Cord clamped

5. **Placenta**
   - Manual removal
   - Cord traction (gentle)
   - Uterus exteriorized to check

6. **Closure**
   - Uterine suture (1 or 2 layer)
   - Peritoneum may be left open
   - Fascia closure
   - Skin closure (staples or sutures)

## Complications

**Immediate:**
- Hemorrhage: 1-6% (more for repeat C-section)
- Infection: 2-7% (endometritis, wound)
- Surgical injury: <1% (bladder, ureter, bowel)
- Anesthesia complications

**Delayed:**
- DVT/PE: 0.5-1%
- Wound separation
- Ileus: temporary bowel slowdown

**Future Pregnancies:**
- Placenta previa: 1-3% (vs. 0.3% after vaginal)
- Placenta accreta: 0.1% after one C-section, 7% after 3+
- Uterine rupture: 0.5-1% during VBAC

## VBAC Considerations

**Candidates for VBAC:**
- One prior low-transverse C-section
- Favorable pelvis
- No contraindications

**Success Rate:**
- 60-80% VBAC success
- Higher if prior vaginal delivery
- Lower if prior C-section was for dystocia

**Contraindications to VBAC:**
- Classical uterine incision
- Prior uterine rupture
- Contraindication to vaginal delivery`,

      keyTerms: [
        { term: 'Endometritis', definition: 'Infection of the uterine lining after C-section' },
        { term: 'Placenta accreta', definition: 'Placenta grows into uterine muscle, can cause severe bleeding' },
        { term: 'VBAC', definition: 'Vaginal Birth After Cesarean - attempting vaginal birth after prior C-section' },
        { term: 'TOLAC', definition: 'Trial of Labor After Cesarean - attempting VBAC' },
        { term: 'Dystocia', definition: 'Abnormal or difficult labor - failure to progress' },
      ],
      analogies: [
        'Placenta accreta is like tree roots growing into concrete - very hard to separate.',
        'VBAC is like giving the body a second chance to do it the natural way.',
      ],
      examples: [
        'Woman with 2 prior C-sections has high risk of accreta',
        'Patient with placenta previa needs C-section regardless of prior C-sections',
        'Someone with prior classical incision cannot attempt VBAC',
      ],
      clinicalNotes: 'Preoperative antibiotics (cefazolin, or clindamycin + gentamicin for penicillin allergy) reduce infection 50%. Skin prep with chlorhexidine-alcohol is superior to iodine alone. Bladder catheter reduces risk of injury. Early feeding (within 4 hours) improves satisfaction and reduces hospital stay.',
    },

    4: {
      level: 4,
      summary: 'C-section is major abdominal surgery with short-term and long-term implications. Decision-making should balance maternal, fetal, and future pregnancy considerations.',
      explanation: `## Maternal Morbidity

**Compared to Vaginal Delivery:**
- Mortality: 3x higher (but still very low)
- Hemorrhage: More blood loss
- Infection: Endometritis, wound infections
- Blood clots: Higher DVT/PE risk
- Longer recovery and hospital stay

**Long-Term Risks:**
- Adhesions from scar tissue
- Placenta previa in future pregnancies
- Placenta accreta risk increases with each C-section
- Uterine rupture risk in VBAC

## Neonatal Risks

**Respiratory:**
- Transient tachypnea of newborn
- Respiratory distress syndrome
- NICU admission 5-10%

**Injury:**
- Laceration from surgical incision (1-2%)
- Bruising or swelling

**Benefit:**
- May reduce birth trauma compared to difficult vaginal delivery

## Economic Considerations

**Cost:**
- C-section: $15,000-30,000 (US)
- Vaginal birth: $5,000-10,000 (US)
- Significant healthcare expenditure

**Elective Indications Debate:**
- C-section on maternal request: controversial
- Liability concerns drive C-section rates
- Elective C-section > 39 weeks has neonatal risk

## Ethical Considerations

**Maternal Autonomy:**
- Right to choose delivery method
- Informed consent about risks
- Balancing patient choice with medical judgment

**Resource Allocation:**
- Operating room and staff time
- NICU bed availability
- Healthcare system costs

**Future Fertility:**
- Many women want large families
- Multiple C-sections increase complications
- Counseling essential`,

      keyTerms: [
        { term: 'Transient tachypnea', definition: 'Fast breathing in newborn from retained fluid, resolves in 24-48 hours' },
        { term: 'Adhesions', definition: 'Scar tissue that causes organs to stick together internally' },
        { term: 'NICU', definition: 'Neonatal Intensive Care Unit - for sick newborns' },
        { term: 'Maternal autonomy', definition: 'A woman\'s right to make decisions about her body and birth' },
      ],
      analogies: [
        'Adhesions are like internal scar tissue that glues organs together like tape.',
        'Transient tachypnea is like baby lungs being "waterlogged" from birth - they need to dry out.',
      ],
      examples: [
        'Baby born at 38 weeks by scheduled C-section has TTN and needs oxygen for 2 days',
        'Woman with 3 C-sections has placenta accreta requiring hysterectomy',
        'Low-risk first-time mom requests C-section - ethical debate about appropriateness',
      ],
      clinicalNotes: 'Labor dystocia accounts for 50% of C-sections. "Failed induction" often reflects unrealistic expectations. Bishop score predicts induction success. Cephalopelvic disproportion (baby too big for pelvis) is common indication.',
    },

    5: {
      level: 5,
      summary: 'C-section rates vary widely (15-40%) across countries and institutions. Efforts to safely reduce primary C-section rates focus on labor support, second opinions, and avoiding elective C-sections before 39 weeks.',
      explanation: `## Reducing C-Section Rates

**Successful Strategies:**
- Continuous labor support (doula)
- Change providers if suggested for "failure to progress"
- Avoid elective inductions before 41 weeks
- External cephalic version for breech
- Delayed pushing for 1-2 hours

**Reasons for Rising C-Section Rates:**
- Liability concerns (2-3x legal costs for bad outcomes vs. C-section)
- Electronic fetal monitoring (increased interventions)
- Declining VBAC availability
- Patient preference (convenience, fear of pain)

## Future Pregnancies

**After One C-Section:**
- VBAC success: 60-80%
- Repeat C-section rate: 80-90%
- Placenta previa: 1-3%
- Placenta accreta: 0.1-1%

**After Multiple C-Sections:**
- VBAC: Generally not offered
- Placenta accreta: 7% after 3+
- Surgical complications increase
- Blood loss greater with each surgery

## Surgical Innovations

**Misgav-Ladavola (Misgav) Method:**
- Extraction of baby through small uterine incision
- Enlarging uterine incision after delivery
- Results in smaller uterine scar
- May reduce future rupture risk

**Natural C-Section:**
- "Gentle C-section" movement
- Slower delivery, less trauma
- Perineum support
- Immediate skin-to-skin

**Reduced Port C-Section:**
- Smaller incision (6-8cm)
- Less pain, faster recovery
- Limited uptake

## Controversies

**C-Section on Maternal Request:**
- Ethics of performing major surgery without medical indication
- Patient autonomy vs. beneficence
- ACOG 2020: \"ethical\" if informed consent
- Varies by country and hospital

**Elective C-Section Timing:**
- Before 39 weeks: Higher respiratory morbidity
- Optimal timing: 39 weeks + (scheduled induction)
- Balancing convenience and neonatal safety`,

      keyTerms: [
        { term: 'External cephalic version', definition: 'Turning breech baby to head position by manipulating belly from outside' },
        { term: 'Bishop score', definition: 'Cervical readiness score predicting likelihood of successful induction' },
        { term: 'Cephalopelvic disproportion', definition: 'Baby too large for birth canal - mismatch between baby and pelvis' },
        { term: 'Misgav-Ladavola', definition: 'Technique to deliver through smaller uterine incision, enlarging after baby out' },
      ],
      analogies: [
        'Bishop score is like a checklist for how ready the cervix is for labor.',
        'Cephalopelvic disproportion is like trying to fit a square peg in a round hole.',
      ],
      examples: [
        'Nulliparous woman scheduled for C-section at 38 weeks - NICU admission for TTN',
        'Patient with Bishop score of 4 has <40% chance of successful induction',
        'Woman wants VBAC but hospital bans it - must change providers or hospital',
      ],
      clinicalNotes: 'The ARRIVE trial (2021) showed planned C-section at 39 weeks had lower composite morbidity than planned C-section at 38 weeks. C-section at 39 weeks is as safe as vaginal birth for mother, but baby respiratory risks still slightly higher. \"Elective\" should mean planned at appropriate gestational age, not convenience.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['obstetrics', 'c-section', 'cesarean', 'delivery', 'labor'],
    systems: ['reproductive'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['ob-gyn'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
