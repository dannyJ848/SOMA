/**
 * Regional Anesthesia
 *
 * Spinal, epidural, and peripheral nerve block techniques for
 * regional anesthesia including indications, contraindications,
* and complications.
 */

import { EducationalContent } from '../types';

export const regionalAnesthesiaContent: EducationalContent = {
  id: 'anesthesia-regional',
  type: 'process',
  name: 'Regional Anesthesia',
  alternateNames: ['Neuraxial Anesthesia', 'Nerve Blocks', 'Conduction Anesthesia'],

  levels: {
    1: {
      level: 1,
      summary: 'Regional anesthesia numbs a specific area of your body so you can stay awake during surgery without feeling pain.',
      explanation: `Regional anesthesia is a way to numb just one part of your body for surgery. You stay awake but the area being operated on is completely numb.

**What Regional Anesthesia Does:**

- Blocks pain signals from a specific body region
- You remain awake and aware during surgery
- No breathing tube needed (unlike general anesthesia)
- Faster recovery after surgery

**Main Types of Regional Anesthesia:**

### 1. Spinal Anesthesia
- Medicine is injected near your spinal cord
- Used for surgeries below the waist (hips, legs, C-sections)
- Works very quickly
- Lasts 2-4 hours

### 2. Epidural Anesthesia
- Similar to spinal but with a tiny catheter (tube) left in place
- Can give more medicine over time
- Commonly used during childbirth
- Can last for hours or days

### 3. Nerve Blocks
- Medicine injected near specific nerves
- Numbs just one arm, leg, or area
- Used for shoulder, knee, hand surgeries
- Sometimes with ultrasound to find the nerve

**What It Feels Like:**

During the procedure:
1. You sit or lie on your side
2. Your back is cleaned with special soap
3. Numbing medicine is put on your skin (stings for a few seconds)
4. The anesthesia doctor places the block (you may feel pressure)
5. Within minutes, the area starts feeling numb

During surgery:
- You are awake and can talk
- You feel no pain in the numb area
- You might feel pressure or movement
- You can watch or listen to music if you want

**Benefits:**

- Less nausea after surgery
- Better pain control after surgery
- No sore throat from breathing tube
- Faster recovery (often can go home sooner)

**Risks:**

- Headache (rare but treatable)
- Temporary back soreness
- Very rarely, lasting nerve damage

**Who Should NOT Have Regional Anesthesia:**

- People with bleeding problems
- People with infections on their back
- People allergic to local anesthetics

Your doctor will choose the safest type of anesthesia for you!`,
      keyTerms: [
        { term: 'spinal anesthesia', definition: 'Medicine injected into the fluid around the spinal cord to numb the lower half of the body' },
        { term: 'epidural', definition: 'Medicine injected just outside the spinal cord covering, often with a catheter for continuous pain relief' },
        { term: 'nerve block', definition: 'Injection of numbing medicine near a specific nerve to block pain from one area of the body' },
        { term: 'catheter', definition: 'A thin, flexible tube that can be left in place to deliver medicine over time', pronunciation: 'KATH-uh-ter' },
        { term: 'ultrasound', definition: 'Imaging test that uses sound waves to help doctors see nerves during nerve blocks' },
      ],
      analogies: [
        'Regional anesthesia is like cutting the power to one room in your house - that area doesn\'t work while the rest of the house is normal.',
        'A spinal block is like turning off a switch - the numbness starts quickly and wears off gradually.',
      ],
      examples: [
        'A woman having a C-section can get spinal anesthesia and be awake for her baby\'s birth.',
        'Someone having knee surgery might get a femoral nerve block and have pain relief for 24 hours.',
        'A patient having hip surgery might have a spinal block plus sedation to relax.',
      ],
      patientCounselingPoints: [
        'Regional anesthesia lets you be awake during surgery, which many patients prefer.',
        'You might still feel pressure or movement, but you won\'t feel sharp pain.',
        'Tell your doctor immediately if you feel any pain during surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Regional anesthesia produces reversible loss of sensation in a specific body region by blocking nerve conduction, allowing surgery to be performed with the patient awake or sedated.',
      explanation: `Regional anesthesia involves injecting local anesthetic near nerves or the spinal cord to block pain signals from reaching the brain. The patient remains conscious but the surgical site is completely insensate.

## Neuraxial Anesthesia: Spinal and Epidural

### Spinal Anesthesia
**Technique:**
- Performed at lumbar spine (L3-L4 or L4-L5)
- Needle passes through ligaments to reach subarachnoid space
- Local anesthetic mixes with cerebrospinal fluid (CSF)
- Single injection; no catheter left in place

**Characteristics:**
- Onset: 2-5 minutes
- Duration: 1.5-4 hours (depends on drug used)
- Dense, reliable block
- Cannot be extended or topped up

**Indications:**
- Lower abdominal surgery (C-section, appendectomy, hernia repair)
- Lower extremity surgery (hip, knee, ankle)
- Urologic procedures (cystoscopy, prostate surgery)
- Perineal surgery (hemorrhoidectomy)

### Epidural Anesthesia
**Technique:**
- Similar placement to spinal
- Needle stops in epidural space (outside dura)
- Catheter threaded through needle
- Dura not punctured

**Characteristics:**
- Onset: 10-20 minutes
- Duration: Can be extended indefinitely via catheter
- Less dense block than spinal
- Can be "topped up" or infused continuously

**Indications:**
- Labor analgesia (most common use)
- Postoperative pain management (epidural infusion)
- Thoracic surgery (thoracic epidural)
- Major abdominal surgery as adjunct

## Peripheral Nerve Blocks

**Upper Extremity Blocks:**
- **Interscalene block** - Shoulder and upper arm surgery
- **Supraclavicular block** - Arm below shoulder, elbow, hand
- **Infraclavicular block** - Forearm, hand surgery
- **Axillary block** - Forearm, hand surgery

**Lower Extremity Blocks:**
- **Femoral nerve block** - Anterior thigh, knee surgery
- **Sciatic nerve block** - Posterior leg, foot surgery
- **Popliteal block** - Foot and ankle surgery
- **Ankle block** - Forefoot surgery

**Trunk Blocks:**
- **Transversus abdominis plane (TAP) block** - Abdominal wall
- **Rectus sheath block** - Midline abdominal procedures
- **Pectoral nerves (PECS) blocks** - Breast surgery

## Contraindications

**Absolute:**
- Patient refusal
- Infection at injection site
- Allergy to local anesthetics
- Coagulopathy or bleeding disorder (increased bleeding risk)

**Relative:**
- Severe hypovolemia
- Preexisting neurologic deficit
- Uncorrected coagulopathy
- Patient inability to cooperate

## Complications

**Common:**
- Hypotension (low blood pressure) - 30-50% with spinal
- Post-dural puncture headache (spinal headache) - 1-3%
- Back soreness
- Urinary retention (can't pee)

**Serious (rare):**
- Permanent nerve damage - <1 in 10,000
- Epidural hematoma (bleeding compressing spinal cord)
- Epidural abscess (infection)
- High or total spinal anesthesia (breathing muscles affected)
- Local anesthetic systemic toxicity (LAST)

## Equipment and Monitoring

**Needles:**
- Spinal: 25-27 gauge (very thin, pencil-point tip)
- Epidural: 16-18 gauge (larger, Tuohy tip)

**Ultrasound Guidance:**
- Standard for peripheral nerve blocks
- Increases success rate
- Reduces complications
- Allows visualization of nerves, vessels, needle

**Standard Monitoring:**
- Blood pressure, heart rate, oxygen saturation
- Same monitoring as general anesthesia required

## Combination Techniques

**Spinal-Epidural (CSE):**
- Both spinal and epidural catheter placed
- Immediate spinal block for surgery
- Epidural catheter for postoperative pain
- Common for labor and major orthopedic surgery

**Regional + Sedation:**
- Regional block for surgical anesthesia
- IV sedation for anxiolysis and amnesia
- Patient comfortable but breathing independently`,
      keyTerms: [
        { term: 'subarachnoid space', definition: 'Space containing cerebrospinal fluid that surrounds the spinal cord; target for spinal anesthesia' },
        { term: 'epidural space', definition: 'Space between the vertebral wall and the dura mater; contains fat and blood vessels; target for epidural anesthesia' },
        { term: 'post-dural puncture headache', definition: 'Severe headache caused by leakage of CSF through a hole in the dura after spinal tap or epidural complication' },
        { term: 'TAP block', definition: 'Transversus Abdominis Plane block - injection between abdominal muscles to numb the abdominal wall' },
        { term: 'local anesthetic systemic toxicity', definition: 'LAST - dangerous condition when local anesthetic enters bloodstream, causing seizures, cardiac arrhythmias, and possible arrest' },
      ],
      analogies: [
        'The epidural space is like a sleeve around the spinal cord - medicine injected there spreads slowly around the nerves.',
        'A nerve block is like putting a kink in a hose - nothing can flow past that point.',
      ],
      examples: [
        'Labor epidural: A catheter placed in the lower back provides continuous pain relief during childbirth.',
        'Shoulder surgery: Interscalene block numbs the shoulder so the patient can be awake during rotator cuff repair.',
        'Knee replacement: Femoral and sciatic nerve blocks provide excellent postoperative pain control.',
      ],
    },
    3: {
      level: 3,
      summary: 'Regional anesthesia exploits the anatomy of neural structures to deliver local anesthetics with precision, providing surgical anesthesia and prolonged postoperative analgesia while avoiding airway manipulation.',
      explanation: `## Neuraxial Anatomy

**Vertebral Levels:**
- Spinal cord ends at L1-L2 in adults
- Cauda equina extends below
- Lumbar puncture safe below L2
- Landmark: Tuffier's line (between iliac crests) = L4-L5

**Layers from Skin to Subarachnoid Space:**
1. Skin
2. Subcutaneous tissue
3. Supraspinous ligament
4. Interspinous ligament
5. Ligamentum flavum (major resistance)
6. Epidural space (contains fat, veins)
7. Dura mater (tough membrane)
8. Arachnoid mater
9. Subarachnoid space (CSF)

## Local Anesthetics for Neuraxial Anesthesia

**Spinal Anesthetic Agents:**

**Hyperbaric (heavy) Solutions:** (mixed with dextrose, sink in CSF)
- **Bupivacaine 0.75%**: 2-3 hours duration
- **Tetracaine 1%**: 3-5 hours duration
- **Lidocaine 5%**: 1-1.5 hours duration (rarely used - transient neurologic symptoms)

**Isobaric Solutions:**
- **Plain bupivacaine**: Less predictable spread
- **Preservative-free morphine**: Long-acting analgesia (12-24 hours)

**Additives:**
- **Epinephrine**: Prolongs duration, enhances quality
- **Fentanyl**: Improves quality without prolonging motor block
- **Clonidine**: Prolongs duration, causes sedation/hypotension

**Epidural Anesthetic Agents:**
- **Lidocaine 2%**: Intermediate duration (1-2 hours)
- **Bupivacaine 0.25-0.5%**: Long duration (2-4 hours)
- **Ropivacaine 0.2-0.75%**: Less cardiotoxic than bupivacaine
- **Chloroprocaine 2-3%**: Short duration, rapid metabolism (choice for epidural in laboring women)

## Peripheral Nerve Block Technique

**Nerve Stimulation:**
- Current applied to needle causes muscle twitch
- Closer to nerve = less current needed
- Goal: <0.5 mA for motor response

**Ultrasound-Guided Blocks:**
- Real-time visualization
- Identify nerves, vessels, surrounding structures
- Track needle path to target
- Confirm spread of injectate
- Lower risk of vascular puncture, nerve injury

**Injection Pressure Monitoring:**
- High opening pressure may indicate intraneural injection
- >20 psi = stop, reposition needle

## Specific Nerve Blocks

**Interscalene Block:**
- Target: Brachial plexus roots C5-C7
- Indications: Shoulder surgery, proximal humerus
- Complications: Phrenic nerve block (100% - diaphragm paralysis), Horner's syndrome, recurrent laryngeal nerve block

**Supraclavicular Block:**
- Target: Brachial plexus divisions
- Indications: Arm below shoulder, elbow, forearm, hand
- Risk: Pneumothorax (1-6%)

**Axillary Block:**
- Target: Brachial plexus cords
- Indications: Forearm, hand surgery
- Multiple injections needed (median, ulnar, radial, musculocutaneous)

**Femoral Nerve Block:**
- Target: Femoral nerve under inguinal ligament
- Indications: Anterior knee, thigh surgery
- Often combined with sciatic block

**Popliteal Sciatic Block:**
- Target: Sciatic nerve in popliteal fossa
- Indications: Foot, ankle surgery
- Patient may be prone or supine

## Physiologic Effects of Neuraxial Anesthesia

**Sympathetic Blockade:**
- Vasodilation → decreased venous return
- Decreased blood pressure (T4 level = maximal effect)
- Decreased heart rate (T1-T4 cardioaccelerator fibers blocked)

**Bradycardia Mechanisms:**
- Bezold-Jarisch reflex (decreased venous return)
- Blockade of cardioaccelerator fibers (T1-T4)
- Treatment: Phenylephrine, ephedrine, atropine

**Respiratory Effects:**
- Spinal: Minimal respiratory effect (phrenic nerve C3-5 unaffected)
- Epidural: High thoracic blocks can reduce intercostal muscle function
- Patient must be able to generate adequate tidal volume

**Gastrointestinal Effects:**
- Increased GI motility (sympathetic tone decreased)
- Reduced risk of postoperative ileus
- Nausea more common (hypotension, vagal stimulation)

**Urinary Effects:**
- Sacral blockade → urinary retention
- S2-S4 blockade → loss of bladder sensation and detrusor function
- May require bladder catheterization

## Contraindications in Detail

**Bleeding Risk:**
- INR >1.5, platelets <50,000 → avoid neuraxial
- Wait after anticoagulants:
  - Warfarin: Stop 5 days prior, INR must normalize
  - LMWH: 12 hours after prophylactic dose, 24 hours after therapeutic dose
  - Clopidogrel: Stop 7 days prior

**Infection:**
- Localized infection at puncture site → absolute
- Systemic infection (sepsis) → relative
- Bacteremia → risk of epidural abscess

**Neurologic Disease:**
- Preexisting deficits not absolute contraindication
- Document neurologic exam before block
- Multiple sclerosis: not contraindicated
- Guillain-Barre: controversial`,
      keyTerms: [
        { term: 'ligamentum flavum', definition: 'Yellow ligament connecting vertebrae; provides resistance during epidural placement - important landmark' },
        { term: 'hyperbaric', definition: 'Having greater density than CSF; hyperbaric spinal solutions sink in the spinal fluid and settle in dependent positions' },
        { term: 'phrenic nerve block', definition: 'Unintended paralysis of the diaphragm from interscalene block, reducing respiratory function by ~25%' },
        { term: 'Bezold-Jarisch reflex', definition: 'Vasovagal response to decreased ventricular filling, causing bradycardia and hypotension during neuraxial anesthesia' },
        { term: 'horner syndrome', definition: 'Triad of ptosis, miosis, and anhidrosis caused by interruption of sympathetic chain; possible complication of interscalene block' },
      ],
      clinicalNotes: 'The "pop" felt during epidural placement is the needle piercing the ligamentum flavum. This landmark is unreliable in 20-30% of cases - loss-of-resistance to saline or air is more reliable. Ultrasound guidance for neuraxial placement is increasing, especially in challenging patients (obesity, scoliosis, previous back surgery).',
    },
    4: {
      level: 4,
      summary: 'Regional anesthesia requires detailed knowledge of neuroanatomy, local anesthetic pharmacodynamics, and ultrasound guidance techniques to achieve successful nerve blockade while minimizing complications.',
      explanation: `## Advanced Regional Anesthesia Concepts

**Mechanism of Action:**
Local anesthetics block voltage-gated sodium channels, preventing action potential propagation:
- Nerve fibers differ in susceptibility
- Smaller diameter, myelinated fibers blocked first
- Order: pain (B) → temperature (Aδ) → touch (Aβ) → motor (α)
- Differential blockade explains why patients can feel pressure but not pain

## Neuroanatomy for Regional Blocks

**Brachial Plexus:**
- **Roots**: C5-T1 (between anterior and middle scalene)
- **Trunks**: In posterior triangle of neck
- **Divisions**: Posterior to clavicle
- **Cords**: Around axillary artery
- **Branches**: Terminal nerves to arm

**Lumbar Plexus:**
- Formed from L1-L4 (with contribution from T12)
- In psoas muscle
- Gives rise to: femoral, obturator, lateral femoral cutaneous, ilioinguinal, iliohypogastric

**Sciatic Nerve:**
- Largest nerve in body
- Formed from L4-S3 ventral rami
- Exits pelvis via greater sciatic foramen
- Divides into tibial and common peroneal nerves at popliteal fossa

## Ultrasound-Guided Regional Anesthesia

**Principles:**
- High-frequency linear transducer (10-15 MHz) for superficial nerves
- Low-frequency curvilinear transducer (2-5 MHz) for deep nerves
- Nerves appear hypoechoic (dark) with hyperechoic (bright) epineurium
- Requires understanding of cross-sectional anatomy

**Scan Optimizations:**
- Gain: Adjust brightness
- Depth: Nerve in center of image
- Focus: At level of nerve
- Compression: Identify vessels (compressible)

**Needle Approaches:**
- **In-plane**: Needle seen throughout path to nerve
- **Out-of-plane**: Needle seen as point only at target

**Complications of Ultrasound Guidance:**
- False confidence (inadequate training)
- Visualizing nerve but not critical structures (vessels, pleura)
- Intraneural injection not reliably detected

## Local Anesthetic Systemic Toxicity (LAST)

**Pathophysiology:**
- Accidental intravascular injection or rapid absorption
- Affects CNS and cardiovascular systems
- CNS more sensitive to local anesthetics

**Progression:**
1. Circumoral numbness, tinnitus, metallic taste
2. Agitation, slurred speech, muscle twitching
3. Seizures
4. Coma, respiratory arrest
5. Cardiovascular collapse (arrhythmias, hypotension)

**Treatment (2023 Updated Guidelines):**
1. **Airway**: Secure airway, give 100% O2, hyperventilate
2. **Seizures**: Benzodiazepines (propofol second-line)
3. **Lipid Emulsion Therapy**:
   - Bolus 20% lipid emulsion 1.5 mL/kg
   - Infusion 0.25 mL/kg/min
   - Continue until hemodynamic recovery
   - May require massive doses (up to 10 mL/kg)

**Prevention:**
- Aspirate before injection (negative aspiration doesn't rule out IV)
- Incremental dosing with repeated aspiration
- Use ultrasound guidance
- Monitor for early CNS symptoms

## Neuraxial Complications

**Post-Dural Puncture Headache (PDPH):**
- Incidence: Spinal needle 16G = 70%, 27G = <1%
- Mechanism: CSF leakage through dural defect → intracranial hypotension
- Clinical: Postural headache (worse upright, better lying flat)
- Prevention: Use pencil-point needle (Whitacre, Sprotte)
- Treatment: Caffeine, epidural blood patch (90% effective)

**Epidural Hematoma:**
- Incidence: <1 in 200,000 in obstetrics, higher in elderly on anticoagulation
- Signs: Back pain, progressive neurologic deficit, bowel/bladder dysfunction
- Diagnosis: MRI (not CT)
- Treatment: Surgical decompression within 8 hours for best outcome

**Epidural Abscess:**
- Risk factors: Prolonged catheter, immunocompromised, bacteremia
- Stages: Back pain → radicular pain → motor weakness → paralysis
- Treatment: Antibiotics, surgical drainage if neurologic deficits

**Cauda Equina Syndrome:**
- Permanent neurologic injury to nerve roots
- Associated with continuous spinal microcatheters (withdrawn from market)
- Also associated with hyperbaric lidocaine 5%
- Causes: Direct neurotoxicity, ischemia from high concentration

**Arachnoiditis:**
- Chronic inflammation of arachnoid mater
- Causes: Infection, blood, preservatives in local anesthetic
- Clinical: Chronic pain, paresthesias, weakness
- Treatment: Supportive; prevention is key

## Continuous Peripheral Nerve Blocks

**Technique:**
- Catheter placed adjacent to nerve
- Local anesthetic infused postoperatively
- Duration: Days to weeks

**Indications:**
- Major orthopedic surgery (shoulder, knee, ankle)
- Amputation surgery (prevent phantom limb pain)
- Patients who cannot tolerate systemic opioids

**Complications:**
- Catheter displacement or migration
- Infection (rare)
- Leakage of anesthetic

**Dosing Regimens:**
- Ropivacaine 0.2%: 5-10 mL/hr basal
- Patient-controlled option
- Usually continued 2-5 days`,
      keyTerms: [
        { term: 'differential blockade', definition: 'Sequential blockade of nerve fibers based on diameter and myelination; pain fibers blocked before motor fibers' },
        { term: 'LAST', definition: 'Local Anesthetic Systemic Toxicity - life-threatening condition from excessive local anesthetic in bloodstream; treated with lipid emulsion' },
        { term: 'epidural blood patch', definition: 'Injection of autologous blood into epidural space to seal dural puncture and treat post-dural puncture headache' },
        { term: 'cauda equina syndrome', definition: 'Neurologic deficit affecting multiple lumbar and sacral nerve roots; can complicate spinal anesthesia' },
        { term: 'arachnoiditis', definition: 'Chronic inflammatory condition of arachnoid mater causing pain and neurologic dysfunction' },
      ],
      clinicalNotes: 'Aspiration before injection is not reliable - 50% of intravascular placements have negative aspiration due to vessel collapse or needle bevel not in vessel lumen. Incremental injection with 3-5 mL aliquots and repeated aspiration is safer than single bolus. Lipid emulsion should be immediately available for any block using >20 mL lidocaine or >10 mL bupivacaine.',
    },
    5: {
      level: 5,
      summary: 'Regional anesthesia practice has evolved with ultrasound guidance, continuous catheter techniques, and enhanced recovery protocols, becoming integral to modern perioperative medicine and opioid-sparing pathways.',
      explanation: `## Contemporary Regional Anesthesia Practice

**Regional anesthesia** has transformed from an adjunct to a cornerstone of perioperative care, driven by:
- Opioid crisis (reducing postoperative opioid exposure)
- Enhanced Recovery After Surgery (ERAS) protocols
- Outpatient surgery expansion
- Improved outcomes with regional techniques

## Evidence-Based Practice

**Regional vs. General Anesthesia Outcomes:**

**Total Joint Arthroplasty:**
- Regional reduces length of stay by 1-2 days
- Lower 30-day readmission rates
- Fewer pulmonary complications
- Similar long-term functional outcomes

**Major Abdominal Surgery:**
- Thoracic epidural reduces ICU stay
- Earlier return of GI function
- Better postoperative pulmonary function (incentive spirometry)
- Controversial effect on cancer recurrence

**Breast Surgery:**
- PECS blocks reduce chronic pain after mastectomy
- Lower postoperative opioid requirements
- Improved patient satisfaction

## Advanced Techniques

**Erector Spinae Plane (ESP) Block:**
- Paraspinal interfascial plane block
- Cranial-caudal spread of local anesthetic
- Thoracic applications: mastectomy, rib fractures, thoracotomy
- Lumbar applications: hip surgery
- Advantages: Low complication risk, technically simple
- Limitations: Unpredictable spread, variable duration

**Quadratus Lumborum (QL) Block:**
- Anterior (QL1), lateral (QL2), posterior (QL3) approaches
- Abdominal wall and visceral analgesia
- Applications: Cesarean section, abdominal surgery, hip
- May reduce opioid requirements >50%

**Serratus Anterior Plane (SAP) Block:**
- Analgesia for lateral thoracotomy, rib fractures
- Alternative to thoracic epidural
- Fewer side effects (hypotension, urinary retention)

## Anticoagulation Guidelines (ASRA 2023)

**Neuraxial Guidelines:**
- DOACs: Stop 48-72h prior (varies by drug, renal function)
- Warfarin: Stop 5 days prior, INR must be normal
- LMWH prophylaxis: Wait 12h after last dose
- LMWH therapeutic: Wait 24h after last dose
- Fondaparinux: Stop 42h prior
- Antiplatelet agents: Most can continue (clopidogrel stop 7 days)

**Timing of Catheter Removal:**
- LMWH: Wait 12h after last dose before removal
- DOACs: Wait longer (drug-specific)
- Can restart 4-6h after catheter removal

**Deep Blocks (Non-Compressible):**
- More restrictive than neuraxial
- Most anticoagulants contraindicated
- Individual risk-benefit assessment

## ERAS and Regional Anesthesia

**Colorectal Surgery ERAS:**
- Thoracic epidural historically gold standard
- Intrathecal morphine + TAP blocks emerging alternative
- Goal: Avoid epidural-related hypotension
- Earlier mobilization possible with peripheral blocks

**Cesarean Delivery ERAS:**
- Spinal hyperbaric bupivacaine standard
- Intrathecal morphine for prolonged analgesia (12-24 hours)
- TAP block as adjunct (alternatives when spinal contraindicated)
- Multimodal: NSAIDs, acetaminophen, tramadol

## Outpatient Surgery Considerations

**Discharge Criteria with Regional Block:**
- Sensory blockade acceptable (patient can protect limb)
- Motor blockade must be resolved before discharge with crutches
- Adequate pain control with oral medications
- Patient education on protecting insensate limb
- Rescue oral opioid prescription

**Home Continuous Catheters:**
- Elastomeric pumps (ball pumps)
- Patient-controlled option
- Daily phone contact required
- Low infection rate (<3%)
- Patient satisfaction very high

## Pediatric Regional Anesthesia

**Considerations:**
- Often performed under general anesthesia
- Ultrasound guidance essential
- Lower weight-based doses required
- Awake blocks rarely feasible

**Common Pediatric Blocks:**
- Caudal epidural (most common)
- Ilioinguinal/iliohypogastric (hernia surgery)
- Extremity blocks for postoperative pain
- Erector spinae plane (increasing use)

**Safety:**
- LAST rare (weight-based dosing helps)
- Aspiration critical (higher cardiac output relative to weight)
- Lipid emulsion dosing based on weight

## Regional Anesthesia and Cancer Recurrence

**Proposed Mechanisms:**
- Volatile anesthetics promote tumor growth (NK cell inhibition)
- Regional anesthesia preserves immune function
- Opioids may suppress immune surveillance

**Evidence:**
- Retrospective studies suggest benefit
- Prospective RCTs ongoing
- No definitive recommendation yet
- May be tumor-type specific

## Future Directions

**Liposome Bupivacaine (Exparel):**
- Long-acting formulation (up to 72 hours)
- Expensive
- Cost-effectiveness debated
- May not offer advantage over standard bupivacaine for many blocks

**Cryoneurolysis:**
- Freeze nerve to provide prolonged analgesia
- Applications: knee, hip, thoracic wall
- Duration: Months
- Risk of nerve damage

**Peripheral Nerve Stimulation:**
- Implanted electrodes for chronic pain
- Targeted therapy
- Expensive but reusable

**Virtual Reality Training:**
- Ultrasound-guided block simulation
- Improves proficiency before patient contact
- Reduces learning curve

**Artificial Intelligence:**
- Automated nerve recognition in ultrasound images
- Predictive modeling for block success
- Real-time guidance during procedures`,
      keyTerms: [
        { term: 'ASRA', definition: 'American Society of Regional Anesthesia and Pain Medicine - professional society publishing evidence-based guidelines for regional anesthesia' },
        { term: 'ESPB', definition: 'Erector Spinae Plane Block - novel paraspinal block with expanding indications for thoracic and abdominal analgesia' },
        { term: 'QL block', definition: 'Quadratus Lumborum Block - deep abdominal wall block providing visceral and somatic analgesia' },
        { term: 'caudal epidural', definition: 'Epidural block performed via sacral hiatus; most common regional technique in pediatric anesthesia' },
        { term: 'cryoneurolysis', definition: 'Use of extreme cold to temporarily destroy nerve tissue, providing prolonged analgesia lasting months' },
      ],
      clinicalNotes: `Key practice updates 2023-2024:
1. Lipid emulsion 20% should be immediately available for ANY regional block
2. DOACs require longer interruption than warfarin (48-72h vs. 5 days)
3. Ultrasound guidance is standard of care for peripheral nerve blocks
4. Spinal ultrasound increasing for difficult patients (obesity, scoliosis)
5. ESP blocks have exploded in popularity despite limited high-quality evidence
6. Continuous catheters now routine in many ERAS protocols
7. Regional anesthesia selection increasingly influenced by oncologic considerations (immune preservation)`,
    },
  },

  media: [
    {
      id: 'neuraxial-anatomy',
      type: 'diagram',
      filename: 'spinal-epidural-anatomy.svg',
      title: 'Neuraxial Anatomy',
      description: 'Cross-sectional anatomy showing spinal canal, epidural space, and surrounding structures',
    },
    {
      id: 'brachial-plexus-diagram',
      type: 'diagram',
      filename: 'brachial-plexus-blocks.svg',
      title: 'Brachial Plexus Blocks',
      description: 'Anatomical diagram showing brachial plexus and block locations',
    },
  ],

  citations: [
    {
      id: 'asra-guidelines',
      type: 'article',
      title: 'Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy',
      source: 'American Society of Regional Anesthesia',
      url: 'https://www.asra.com/page/26',
      accessedDate: '2024-01-01',
    },
    {
      id: 'miller-regional',
      type: 'textbook',
      title: 'Regional Anesthesia',
      source: "Miller's Anesthesia",
      chapter: '35-40',
    },
    {
      id: 'hadzic-nerves',
      type: 'textbook',
      title: 'Hadzic\'s Peripheral Nerve Blocks',
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-local', targetType: 'topic', relationship: 'sibling', label: 'Local Anesthesia' },
    { targetId: 'nervous-structure-spinal-cord', targetType: 'structure', relationship: 'related', label: 'Spinal Cord' },
    { targetId: 'pain-management-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Pain Management' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['anesthesia', 'pain management', 'nerve blocks', 'procedures'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'anesthesiology'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default regionalAnesthesiaContent;
