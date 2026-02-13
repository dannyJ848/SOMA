/**
 * Dental Pain Management - Comprehensive Educational Content
 *
 * Covers understanding dental pain, home remedies, OTC medications,
 * when to seek emergency care, pain after dental procedures, and
 * managing dental pain in low-income communities without easy
 * access to a dentist.
 */

import { EducationalContent } from '../types';

export const dentalPainManagementContent: EducationalContent = {
  id: 'topic-dental-pain-management',
  type: 'topic',
  name: 'Dental Pain Management',
  nameEs: 'Manejo del Dolor Dental',
  alternateNames: [
    'Toothache Relief',
    'Managing Tooth Pain',
    'Dental Pain Relief',
    'Oral Pain Management',
    'Toothache Home Remedies',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Tooth pain is your body telling you something is wrong. While you wait to see a dentist, there are safe ways to manage pain at home using common medications and simple remedies. Knowing what to do can make a big difference.',
      explanation: `**Understanding and Managing Tooth Pain**

A toothache can be one of the most miserable experiences. The pain can make it hard to eat, sleep, work, or think about anything else. If you cannot get to a dentist right away — maybe because of cost, no insurance, or a long wait for an appointment — there are things you can do at home to manage the pain safely.

**Why Do Teeth Hurt?**

Teeth hurt for different reasons:
- **Cavities (tooth decay)**: Bacteria eat holes in the tooth. When the hole gets deep enough to reach the nerve, it hurts
- **Cracked or broken tooth**: A crack lets hot, cold, and bacteria reach the sensitive inside of the tooth
- **Infection (abscess)**: Bacteria get inside the tooth or gum and cause a pocket of pus that creates pressure and pain
- **Gum disease**: Infected gums can make teeth loose and sore
- **Sensitive teeth**: Worn-down enamel or receding gums expose the sensitive layer underneath (dentin)
- **Wisdom teeth**: Teeth coming in at the back of the mouth can cause pain, especially if there is not enough room

**The Best Home Pain Relievers (Over-the-Counter)**

The most effective approach is combining two types of pain medicine — this works better than either one alone:

**The Dentist-Recommended Combo:**
1. **Ibuprofen (Advil, Motrin)** — Take 400-600 mg every 6 hours with food
2. **Acetaminophen (Tylenol)** — Take 500-1000 mg every 6 hours

You can take these at the SAME time. They work in different ways, so together they provide stronger relief than either alone. Studies show this combo works as well as many prescription pain pills.

**Important Safety Rules:**
- Do NOT take more than 3,200 mg of ibuprofen in 24 hours
- Do NOT take more than 3,000 mg of acetaminophen in 24 hours
- Take ibuprofen with food to protect your stomach
- Do NOT give aspirin to children under 18
- If you have kidney problems, stomach ulcers, or are pregnant, talk to a pharmacist before taking ibuprofen
- Store-brand versions work the same as name brands and cost much less

**Affordable Pain Medicine Costs:**
| Medicine | Store Brand Cost | Name Brand Cost |
|---|---|---|
| Ibuprofen (50 tablets) | $2-4 | $6-10 |
| Acetaminophen (50 tablets) | $2-4 | $6-10 |
| Orajel (benzocaine gel) | $4-6 | $7-10 |

**Simple Home Remedies That Actually Help:**

1. **Warm salt water rinse**: Mix 1/2 teaspoon of salt in 8 oz of warm water. Swish gently for 30 seconds, then spit out. Do this 3-4 times a day. Salt water reduces swelling and kills some bacteria.

2. **Cold compress**: Put ice or a bag of frozen vegetables wrapped in a towel on the outside of your cheek for 15 minutes on, 15 minutes off. This reduces swelling and numbs pain.

3. **Benzocaine gel (Orajel)**: Apply directly to the painful area for temporary numbness. Follow package directions. Do NOT use on children under 2 years old.

4. **Keep your head elevated**: When lying down, prop your head up with extra pillows. This reduces blood pressure to the area and decreases throbbing.

5. **Avoid trigger foods**: Stay away from very hot, very cold, sweet, or acidic foods and drinks that make the pain worse. Stick to lukewarm, soft foods.

6. **Clove oil**: A traditional remedy that contains eugenol, a natural numbing agent. Put a tiny amount on a cotton ball and hold it against the sore tooth. Available at most pharmacies for $3-5.

**What NOT to Do:**
- Do NOT put aspirin directly on the gum (this burns the tissue and makes things worse)
- Do NOT ignore a fever with tooth pain (this can mean a serious infection)
- Do NOT use someone else's antibiotics (wrong antibiotic or dose can be harmful and not help)
- Do NOT ignore swelling in your face, neck, or under your jaw
- Do NOT rely on alcohol to numb the pain (it does not work well and can interact with pain medicine)

**When to Get Help RIGHT AWAY (Go to the Emergency Room):**

These are signs of a serious or dangerous infection:
- Swelling in your face, jaw, or neck that is getting bigger
- Difficulty breathing or swallowing
- Fever over 101 degrees F (38.3 degrees C) with tooth pain
- You cannot open your mouth
- Swelling around or under your eye
- Uncontrollable bleeding from the mouth

These are dental emergencies. If you cannot afford a dentist, go to the emergency room. An ER visit for a life-threatening dental infection is covered by most emergency Medicaid programs, even without insurance.

**Getting Dental Care When You Cannot Afford It:**

- **Community health centers (FQHCs)**: Charge based on income, accept Medicaid, see patients without insurance
- **Dental schools**: Offer reduced-cost care supervised by experienced dentists
- **Free dental events**: Mission of Mercy, Remote Area Medical, and Give Kids A Smile events
- **Call 211**: Connects you to local resources for affordable dental care
- **Hospital dental clinics**: Some hospitals have emergency dental clinics with sliding-fee scales`,
      keyTerms: [
        { term: 'abscess', definition: 'A pocket of pus caused by a bacterial infection — in the mouth, it forms near a tooth root or in the gums and can cause severe pain and swelling' },
        { term: 'ibuprofen', definition: 'An over-the-counter anti-inflammatory pain medicine (brand names Advil, Motrin) that reduces both pain and swelling — especially effective for tooth pain' },
        { term: 'acetaminophen', definition: 'An over-the-counter pain and fever reducer (brand name Tylenol) that works differently from ibuprofen and can be safely combined with it for stronger pain relief' },
        { term: 'benzocaine', definition: 'A numbing gel (brand name Orajel) that you apply directly to a painful spot in the mouth for temporary relief — not for children under 2' },
        { term: 'cavity', definition: 'A hole in the tooth caused by bacteria that produce acid — when the hole gets deep enough to reach the nerve, it causes pain' },
      ],
      analogies: [
        'A tooth abscess is like a balloon being inflated inside your jaw — the pressure builds and builds, which is why the pain is so intense. Antibiotics and drainage let the air out of the balloon.',
        'Taking ibuprofen and acetaminophen together for tooth pain is like fighting a fire with both water and foam — they attack the problem in different ways, so together they work much better than either alone.',
        'Tooth sensitivity is like having a scratch on your phone screen — the protective layer (enamel) is damaged, so things that wouldn\'t normally bother it now cause discomfort.',
        'A salt water rinse is like cleaning a wound — it won\'t fix the problem, but it washes away bacteria and reduces swelling while you wait for proper treatment.',
      ],
      examples: [
        'Carlos has a toothache at 10 PM and cannot see a dentist until Friday. He takes 600 mg of ibuprofen and 500 mg of acetaminophen, uses a cold compress on his cheek, and rinses with warm salt water. The pain goes from an 8 to a 4, and he is able to sleep.',
        'Leticia noticed swelling in her jaw and a fever of 102 degrees F. She went to the ER, where they diagnosed an abscess and gave her antibiotics. The ER social worker helped her apply for emergency Medicaid to cover the visit.',
        'The Ramirez family keeps a $5 dental pain kit at home: store-brand ibuprofen, store-brand acetaminophen, salt, and a tube of Orajel. This has helped manage two toothaches while waiting for FQHC appointments.',
      ],
      patientCounselingPoints: [
        'The ibuprofen-plus-acetaminophen combination is what dentists recommend as the first choice for tooth pain — it works as well as many prescription medications',
        'Store-brand pain medications contain the exact same active ingredients as name brands and cost much less — always check the generic option',
        'A toothache is your body telling you something needs to be fixed — pain management buys time, but the underlying cause still needs dental treatment',
        'If you have swelling, fever, or difficulty breathing with tooth pain, this is a medical emergency — go to the ER even if you have no insurance',
        'Warm salt water rinses are free and genuinely help — they reduce bacteria and inflammation while you wait for your dental appointment',
        'Never put aspirin directly on your gums — this is a common folk remedy that actually burns the tissue and makes things worse',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental pain management combines pharmacologic approaches (NSAID-acetaminophen combinations, topical anesthetics) with non-pharmacologic strategies (cold therapy, salt water irrigation, behavioral modifications) to control symptoms while awaiting definitive dental treatment. Understanding pain mechanisms, appropriate OTC dosing, red flags for serious infections, and post-procedural pain expectations empowers patients to manage dental pain safely and effectively.',
      explanation: `## Pharmacology of Dental Pain Management

**Understanding Dental Pain Pathways:**

Dental pain originates from:
1. **Pulpal pain**: Stimulation of nerve fibers within the tooth pulp (A-delta fibers for sharp pain, C-fibers for dull/aching pain)
2. **Periodontal pain**: Inflammation of the periodontal ligament and surrounding tissues
3. **Periapical pain**: Infection/inflammation at the tooth root apex
4. **Referred pain**: Pain felt in teeth that originates from TMJ, sinuses, or other structures

The pain cascade involves:
- Tissue damage releases inflammatory mediators (prostaglandins, bradykinin, histamine)
- Prostaglandins sensitize nerve endings, lowering the pain threshold
- Inflammatory swelling creates pressure on nerve fibers
- Bacterial toxins directly irritate nerve tissue

**First-Line OTC Pain Management — The Evidence:**

**Ibuprofen + Acetaminophen Combination:**

This is the most evidence-supported approach for dental pain:

| Regimen | Pain Relief Score (0-10 scale) | Duration |
|---|---|---|
| Ibuprofen 400 mg alone | 4-5 reduction | 4-6 hours |
| Acetaminophen 1000 mg alone | 3-4 reduction | 4-6 hours |
| Ibuprofen 400 mg + Acetaminophen 1000 mg | 6-7 reduction | 6-8 hours |
| Oxycodone 5 mg + Acetaminophen 325 mg | 4-5 reduction | 4-6 hours |

Key finding: The ibuprofen + acetaminophen combination provides BETTER pain relief than opioid combinations with fewer side effects.

**Ibuprofen — Detailed Pharmacology:**
- Mechanism: Non-selective COX inhibitor; blocks prostaglandin synthesis, reducing inflammation and pain
- Dental dosing: 400-600 mg every 6 hours (max 2,400 mg/day for OTC, 3,200 mg/day under medical supervision)
- Onset: 30-60 minutes; peak effect: 1-2 hours
- Take with food to reduce GI side effects
- Contraindications: Active peptic ulcer, severe kidney disease, third trimester of pregnancy, aspirin-exacerbated respiratory disease
- Drug interactions: Avoid with blood thinners (warfarin), lithium, methotrexate
- Cost: $0.04-0.08 per tablet (generic)

**Acetaminophen — Detailed Pharmacology:**
- Mechanism: Central COX inhibition and modulation of endocannabinoid system; reduces pain and fever without significant anti-inflammatory effect
- Dental dosing: 500-1,000 mg every 6 hours (max 3,000 mg/day; 2,000 mg/day if liver concerns)
- Onset: 30-45 minutes; peak effect: 1-2 hours
- Hepatotoxicity risk: Primary concern at doses >4,000 mg/day or with alcohol use
- Safer than ibuprofen for patients with kidney disease, ulcers, or bleeding disorders
- Cost: $0.03-0.06 per tablet (generic)

**Topical Anesthetics:**
- Benzocaine 20% (Orajel): Direct nerve blockade; onset 1-2 minutes; duration 15-30 minutes
- Lidocaine 2% viscous: Longer duration than benzocaine (30-45 minutes)
- Benzocaine warning: Risk of methemoglobinemia, especially in children under 2 — FDA advises against use in this age group
- Clove oil (eugenol): Natural topical analgesic; onset 2-5 minutes; irritant in high concentrations

## Non-Pharmacologic Pain Management

**Cold Therapy (Cryotherapy):**
- Apply cold pack externally to cheek over affected area
- Protocol: 15 minutes on, 15 minutes off, repeat as needed
- Mechanism: Vasoconstriction reduces edema; cold slows nerve conduction velocity, reducing pain signal transmission
- Most effective for acute trauma, post-surgical swelling, and periapical inflammation
- Do NOT apply ice directly to skin (risk of frostbite); wrap in cloth or towel

**Warm Salt Water Irrigation:**
- Formulation: 1/2 teaspoon (3 g) salt per 8 oz (240 mL) warm water (approximates physiologic saline)
- Mechanism: Osmotic effect draws fluid from swollen tissues; mechanical lavage removes debris and bacteria
- Frequency: 4-6 times daily, especially after meals
- Evidence: Reduces bacterial load and promotes healing in soft tissue wounds and post-extraction sites
- Cost: Essentially free

**Elevation and Positioning:**
- Elevate head 30-45 degrees during sleep (extra pillows)
- Reduces hydrostatic pressure to the head, decreasing edema and throbbing
- Particularly effective at night when lying flat worsens dental pain

**Dietary Modifications:**
- Avoid temperature extremes (hot coffee, ice cream) that trigger pulpal sensitivity
- Avoid sweet foods that provoke osmotic pain in exposed dentin
- Avoid acidic foods (citrus, tomatoes, vinegar) that irritate exposed surfaces
- Soft, lukewarm foods minimize mechanical and thermal stimulation

## Recognizing Dental Emergencies

**Ludwig Angina — A Life-Threatening Dental Emergency:**
- Bilateral submandibular space infection, usually from mandibular molar infection
- Signs: Firm swelling under the jaw, tongue elevation, difficulty swallowing, drooling, fever
- Danger: Can obstruct airway → death if untreated
- Action: Emergency room IMMEDIATELY — this is a surgical emergency

**Periorbital/Orbital Cellulitis from Dental Origin:**
- Upper tooth infections can spread to the orbital region
- Signs: Swelling around the eye, fever, pain with eye movement, vision changes
- Danger: Can spread to the brain (cavernous sinus thrombosis)
- Action: Emergency room IMMEDIATELY

**Cavernous Sinus Thrombosis:**
- Extremely rare but fatal complication of maxillary dental infections
- Infected blood clot in the cavernous sinus (venous structure at the base of the brain)
- Signs: Severe headache, high fever, eye swelling, cranial nerve deficits
- Mortality: 20-30% even with treatment

**Red Flags for Emergency Referral:**
- Rapidly spreading facial swelling
- Trismus (inability to open mouth)
- Fever > 101 degrees F (38.3 degrees C)
- Difficulty breathing or swallowing
- Altered mental status
- Eye swelling or vision changes from dental origin

## Post-Procedural Pain Management

**After Tooth Extraction:**
- Peak pain: 6-12 hours after local anesthetic wears off
- Duration: 3-5 days, with gradual improvement
- Management: Ibuprofen 400-600 mg + acetaminophen 500-1000 mg every 6 hours for the first 48 hours
- Dry socket (alveolar osteitis) risk: 2-5% for routine extractions, 20-30% for impacted wisdom teeth
- Dry socket signs: Severe, worsening pain starting 2-4 days after extraction; bad taste; visible bone in socket

**After Root Canal:**
- Mild to moderate discomfort for 2-5 days is normal
- Severe or worsening pain after 3-4 days may indicate complication
- Pre-medication with ibuprofen 600 mg before the procedure reduces post-operative pain

**After Dental Fillings:**
- Sensitivity to hot, cold, and pressure for 1-2 weeks is normal
- Persistent sharp pain when biting may indicate high spot on filling (needs adjustment)
- Pain that wakes you at night or worsens progressively is NOT normal — call the dentist`,
      keyTerms: [
        { term: 'COX inhibitor', definition: 'Cyclooxygenase inhibitor — ibuprofen blocks this enzyme to prevent the production of prostaglandins, which are chemicals that cause inflammation, pain, and fever' },
        { term: 'Ludwig angina', definition: 'A rapidly spreading, life-threatening infection of the floor of the mouth, usually originating from a lower molar tooth infection, that can obstruct the airway' },
        { term: 'dry socket (alveolar osteitis)', definition: 'A painful complication after tooth extraction where the blood clot in the socket is lost or dissolves, exposing the underlying bone to air, food, and bacteria' },
        { term: 'pulpitis', definition: 'Inflammation of the dental pulp (nerve tissue inside the tooth), classified as reversible (mild, stimulus-dependent pain) or irreversible (severe, spontaneous pain requiring root canal or extraction)' },
        { term: 'methemoglobinemia', definition: 'A dangerous condition where hemoglobin cannot carry oxygen effectively, rarely caused by topical benzocaine — the reason it should not be used in children under 2' },
        { term: 'periapical abscess', definition: 'A collection of pus at the tip of a tooth root caused by bacterial infection spreading from the tooth pulp into surrounding bone' },
      ],
      patientCounselingPoints: [
        'Ibuprofen combined with acetaminophen is more effective than prescription opioid painkillers for most dental pain — and much safer',
        'If you just had a tooth extracted, avoid using a straw, spitting, or smoking for 72 hours — these actions can dislodge the blood clot and cause a painful dry socket',
        'Some sensitivity after a filling or root canal is normal for 1-2 weeks, but pain that worsens over time or wakes you at night needs a follow-up visit',
        'Facial swelling that is spreading, fever, or difficulty swallowing with tooth pain are signs of a dangerous infection — seek emergency care immediately',
        'Taking ibuprofen 30-60 minutes BEFORE a dental procedure reduces pain after the numbing wears off — ask your dentist about pre-medication',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental pain management is grounded in the pharmacology of peripheral and central pain pathways, the pathophysiology of pulpal and periapical inflammation, evidence-based analgesic protocols, and the clinical differentiation of reversible vs. irreversible pulpitis. The superiority of non-opioid analgesic combinations over opioids for most dental pain has important implications for the opioid crisis and prescribing practices.',
      explanation: `## Neurobiology of Dental Pain

**Trigeminal Nerve and Dental Innervation:**

Dental pain is transmitted via branches of the trigeminal nerve (CN V):
- **Maxillary division (V2)**: Innervates upper teeth via superior alveolar nerves (posterior, middle, anterior)
- **Mandibular division (V3)**: Innervates lower teeth via inferior alveolar nerve and its terminal branch (mental nerve)

**Pulpal Nociception:**

The dental pulp contains one of the highest densities of sensory nerve fibers in the body:
- **A-delta fibers**: Myelinated, fast-conducting; responsible for sharp, well-localized pain (e.g., response to cold stimulus on exposed dentin)
- **C-fibers**: Unmyelinated, slow-conducting; responsible for dull, aching, poorly localized pain (e.g., throbbing pain from pulpitis or abscess)
- Hydrodynamic theory (Brannstrom): Fluid movement in dentinal tubules stimulates A-delta nerve endings — explains dentin sensitivity to thermal, osmotic, and tactile stimuli

**Peripheral Sensitization:**

When pulpal tissue is injured or inflamed:
1. Damaged cells release potassium ions, bradykinin, and ATP
2. Mast cells degranulate, releasing histamine and serotonin
3. COX-2 upregulation leads to prostaglandin E2 (PGE2) and prostacyclin (PGI2) production
4. PGE2 sensitizes nociceptor terminals, lowering activation threshold
5. Result: Stimuli that were previously sub-threshold now cause pain (allodynia) and normal stimuli cause exaggerated pain (hyperalgesia)

**Central Sensitization:**

Persistent nociceptive input from inflamed dental pulp leads to:
1. Increased excitability of trigeminal nucleus caudalis neurons in the brainstem
2. Wind-up phenomenon: Progressive amplification of pain signaling
3. Expansion of receptive fields: Pain may be perceived in adjacent teeth or referred to the ear, temple, or jaw
4. NMDA receptor activation plays a key role in maintaining central sensitization
5. Clinical relevance: This is why severe toothaches can become diffuse and difficult to localize

## Clinical Classification of Dental Pain

**Pulpal Diagnoses and Pain Characteristics:**

| Diagnosis | Stimulus | Pain Character | Duration | Treatment |
|---|---|---|---|---|
| Normal pulp | Cold stimulus | Brief, sharp | Seconds | No treatment |
| Reversible pulpitis | Cold, sweet | Sharp, localized | Stops when stimulus removed | Remove caries, place restoration |
| Irreversible pulpitis (symptomatic) | Spontaneous or cold-triggered | Severe, throbbing, diffuse | Lingers minutes to hours; may wake patient | Root canal or extraction |
| Pulp necrosis | May not respond to cold | Dull ache, pressure | Variable; may be pain-free until abscess develops | Root canal or extraction |
| Acute periapical abscess | Pressure, biting | Severe, throbbing, well-localized to tooth | Constant; worsens over time | Drainage, root canal or extraction, antibiotics if spreading |
| Chronic periapical abscess | Usually minimal | Mild or none; may have draining fistula | Intermittent or continuous low-grade | Root canal or extraction |

**The Key Diagnostic Question:** Does the pain linger after the stimulus is removed?
- **No lingering** → Reversible pulpitis → May be saved with restoration
- **Lingering/spontaneous** → Irreversible pulpitis → Needs root canal or extraction

## Evidence-Based Analgesic Protocols

**The Ibuprofen-Acetaminophen Combination — Detailed Evidence:**

Multiple systematic reviews and meta-analyses support this combination:

Moore et al. (JADA, 2018): Systematic review of 460+ studies
- Ibuprofen 400 mg + acetaminophen 1,000 mg provided the highest proportion of patients with >50% pain relief (NNT 1.5)
- Superior to all tested opioid combinations including hydrocodone, oxycodone, and codeine with acetaminophen
- Fewer adverse effects than any opioid combination

ADA Clinical Practice Guideline (2023):
- Strong recommendation for ibuprofen + acetaminophen as first-line for acute dental pain
- Conditional recommendation against routine opioid prescribing for dental pain
- If opioid is needed (rare): lowest effective dose for shortest duration (typically <3 days)

**Stepped Approach to Dental Pain Management:**

| Step | Regimen | Indication |
|---|---|---|
| Step 1 | Ibuprofen 200-400 mg q6h | Mild pain |
| Step 2 | Ibuprofen 400-600 mg + Acetaminophen 500-1000 mg q6h | Moderate pain |
| Step 3 | Step 2 + topical benzocaine/lidocaine | Moderate-severe pain |
| Step 4 | Step 2 + short course opioid (if non-opioid fails) | Severe pain unresponsive to above |

**Pre-emptive Analgesia:**
- Taking ibuprofen 600 mg 30-60 minutes before a dental procedure significantly reduces post-operative pain
- Mechanism: Blocking COX before tissue injury prevents prostaglandin cascade from initiating
- Number needed to treat (NNT) = 2.4 for pre-operative ibuprofen vs. post-operative

**NSAIDs — Comparative Pharmacology for Dental Pain:**

| NSAID | Dose | Onset | Duration | Notes |
|---|---|---|---|---|
| Ibuprofen | 400-600 mg | 30 min | 6-8 hr | Best evidence for dental pain; safest GI profile |
| Naproxen | 250-500 mg | 30-60 min | 8-12 hr | Longer duration; good for overnight pain |
| Diclofenac | 50 mg | 15-30 min | 6-8 hr | Fast onset; available OTC in some formulations |
| Ketorolac | 10 mg PO | 30-60 min | 4-6 hr | Most potent oral NSAID; limited to 5 days |
| Celecoxib | 200-400 mg | 30-60 min | 12-24 hr | COX-2 selective; lower GI risk; prescription only |

## The Dental Pain-Opioid Crisis Connection

**Dental Prescribing and Opioid Initiation:**

- Dentists are the #1 prescriber of opioids to adolescents and young adults in the US
- 37% of initial opioid prescriptions for young adults come from dentists
- 6.5% of patients receiving dental opioid prescriptions develop persistent opioid use
- Wisdom tooth extraction is the #1 procedure leading to opioid initiation in youth

**Evidence Against Routine Opioid Prescribing:**

1. Opioid combinations are NOT more effective than ibuprofen + acetaminophen for dental pain
2. Opioids cause constipation, nausea, drowsiness, and respiratory depression
3. Short-term dental prescriptions (3-7 day supply) can initiate long-term opioid use disorder
4. Dental opioid prescriptions contribute to the community supply available for diversion
5. Low-income communities bear a disproportionate burden of opioid addiction and overdose

**Opioid Stewardship in Dentistry:**

- Default to ibuprofen + acetaminophen for all dental pain
- Opioid prescribing reserved for: failed non-opioid therapy, allergy to both NSAIDs and acetaminophen, or specific medical contraindications
- If opioid is prescribed: 3 days maximum, lowest dose, immediate-release only, no refills
- PDMP (Prescription Drug Monitoring Program) check before prescribing
- Patient education about risks, safe storage, and disposal

## Antibiotics in Dental Pain Management

**When Antibiotics Are Needed:**
- Spreading cellulitis (facial swelling extending beyond the tooth area)
- Systemic signs of infection (fever > 101F, malaise, lymphadenopathy)
- Immunocompromised patient with dental infection
- Pericoronitis with trismus or systemic symptoms

**When Antibiotics Are NOT Needed:**
- Toothache without swelling or fever (pain is from inflammation, not spreading infection)
- Localized abscess that can be drained
- Irreversible pulpitis (the treatment is root canal or extraction, not antibiotics)
- Sensitivity after dental procedures

**First-Line Dental Antibiotics:**
- Amoxicillin 500 mg TID x 7 days (first choice)
- Penicillin VK 500 mg QID x 7 days (alternative)
- Penicillin allergy: Clindamycin 300 mg TID x 7 days or Azithromycin 500 mg day 1, 250 mg days 2-5

Key principle: Antibiotics manage the infection but do not cure the problem. The tooth still needs definitive treatment (root canal, extraction, or drainage).`,
      keyTerms: [
        { term: 'peripheral sensitization', definition: 'Increased sensitivity of pain-detecting nerve endings at the site of injury/inflammation due to chemical mediators like prostaglandins, lowering the threshold for pain activation' },
        { term: 'central sensitization', definition: 'Amplification of pain signaling in the central nervous system (brainstem/spinal cord) that occurs after persistent nociceptive input, causing pain to spread beyond the original site and normal stimuli to feel painful' },
        { term: 'NNT (number needed to treat)', definition: 'The number of patients who need to receive a treatment for one patient to benefit — lower NNT means more effective treatment; ibuprofen + acetaminophen has NNT of 1.5 for dental pain' },
        { term: 'pre-emptive analgesia', definition: 'Taking pain medication before a procedure to block the inflammatory cascade before it starts, resulting in less post-operative pain than waiting until after' },
        { term: 'reversible vs. irreversible pulpitis', definition: 'Reversible: pulp inflammation that can heal if the cause is removed (filling); irreversible: inflammation beyond recovery, requiring root canal or extraction — distinguished by whether pain lingers after stimulus removal' },
        { term: 'PDMP', definition: 'Prescription Drug Monitoring Program — a state-run electronic database that tracks controlled substance prescriptions to identify patients at risk for opioid misuse and prevent doctor-shopping' },
      ],
      analogies: [
        'Central sensitization is like turning up the volume on a microphone — the same signal (pain) gets amplified so much that even quiet sounds (light touch) become painfully loud.',
        'Pre-emptive analgesia is like sandbagging before a flood — if you block the inflammatory cascade before tissue injury, the resulting pain wave is much smaller.',
        'Antibiotics for a toothache without infection are like calling the fire department for a candle — the problem is inflammation (the flame), not a spreading fire (infection).',
      ],
      examples: [
        'A randomized controlled trial of 460 patients after third molar extraction found ibuprofen 400 mg + acetaminophen 1000 mg provided 34% more pain relief than hydrocodone 10 mg + acetaminophen 650 mg, with fewer adverse effects.',
        'An FQHC dental program implemented an opioid stewardship policy using ibuprofen + acetaminophen as first-line. Opioid prescriptions dropped 82% with no increase in patient callbacks for uncontrolled pain.',
        'A patient presented with a toothache and was given antibiotics by an urgent care provider. The pain persisted because the cause was irreversible pulpitis (nerve inflammation), not infection. The pain resolved only after the FQHC dentist performed a root canal.',
      ],
      patientCounselingPoints: [
        'Ibuprofen combined with acetaminophen has been proven in large studies to work better than opioid painkillers for dental pain — and without the addiction risk',
        'Taking ibuprofen before your dental procedure (with your dentist\'s approval) can significantly reduce the pain you feel afterward',
        'Antibiotics do not cure toothaches — they only help if there is a spreading infection. The tooth itself still needs treatment from a dentist.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced dental pain management requires understanding the molecular mechanisms of nociception, the pharmacokinetics and pharmacodynamics of analgesic agents in the trigeminal system, the neurobiology of pain chronification, evidence-based prescribing algorithms, and the public health implications of dental-origin opioid prescribing. Integration of multimodal analgesia protocols, anxiety management, and social determinant-informed care planning is essential for safe-net practice.',
      explanation: `## Molecular Mechanisms of Dental Nociception

**Ion Channels in Pulpal Pain:**

1. **TRPV1 (Transient Receptor Potential Vanilloid 1):**
   - Activated by heat (>43C), capsaicin, and acidic pH (<6.0)
   - Upregulated in inflamed pulp tissue
   - Mediates the burning, throbbing quality of irreversible pulpitis pain
   - Therapeutic target: TRPV1 antagonists are in development for dental pain

2. **TRPA1 (Transient Receptor Potential Ankyrin 1):**
   - Cold-sensitive channel activated below 17C
   - Also activated by inflammatory mediators (bradykinin, prostaglandins)
   - Mediates cold sensitivity in exposed dentin and reversible pulpitis
   - Co-expressed with TRPV1 on C-fiber nociceptors

3. **Nav1.7 and Nav1.8 (Voltage-Gated Sodium Channels):**
   - Nav1.7: Critical for pain initiation; gain-of-function mutations cause erythromelalgia
   - Nav1.8: TTX-resistant; important for sustained pain transmission in C-fibers
   - Local anesthetics (lidocaine, articaine) block these channels
   - Expression is upregulated in inflamed dental pulp

4. **ASIC (Acid-Sensing Ion Channels):**
   - Activated by extracellular acidosis (pH <7.0) in inflamed tissue
   - Tissue pH in dental abscess can drop to 5.0-6.0
   - Explains why local anesthetics are less effective in infected tissue (acidic environment shifts anesthetic equilibrium toward ionized, non-penetrating form)

**Inflammatory Mediators in Dental Pain:**

| Mediator | Source | Role | Therapeutic Target |
|---|---|---|---|
| PGE2 | COX-2 in macrophages, fibroblasts | Sensitizes nociceptors, vasodilation | NSAIDs (COX inhibitors) |
| Bradykinin | Plasma kallikrein cascade | Direct nociceptor activation | Kallikrein inhibitors (investigational) |
| TNF-alpha | Macrophages | Pro-inflammatory; upregulates COX-2, IL-1 | Anti-TNF agents (not used for dental) |
| IL-1beta | Macrophages, pulp fibroblasts | Amplifies inflammatory cascade | IL-1 receptor antagonist (investigational) |
| NGF | Schwann cells, fibroblasts | Promotes neuronal sensitization and sprouting | Anti-NGF antibodies (tanezumab — not for dental) |
| Substance P | C-fiber terminals (antidromic release) | Neurogenic inflammation, vasodilation | NK-1 receptor antagonists (investigational) |
| CGRP | Trigeminal C-fibers | Vasodilation, neurogenic inflammation | CGRP antagonists (used for migraine; dental application investigational) |

## Advanced Pharmacologic Management

**Multimodal Analgesia — Pharmacologic Rationale:**

The principle of multimodal analgesia is to target multiple points in the pain pathway simultaneously:

1. **Peripheral (COX inhibition)**: Ibuprofen blocks PGE2 production at the site of inflammation
2. **Central (central COX + endocannabinoid)**: Acetaminophen modulates central pain processing
3. **Local (sodium channel blockade)**: Topical anesthetics block nerve signal transmission
4. **Adjunctive (anxiolysis)**: Addressing anxiety component reduces pain perception via descending inhibitory pathways

**Pharmacokinetic Optimization:**

- Ibuprofen liqui-gels (solubilized) reach peak plasma concentration 30-60 minutes faster than tablets
- Taking ibuprofen on an empty stomach increases speed of absorption but increases GI side effect risk
- Acetaminophen extended-release (ER) formulations provide 8-hour coverage but slower onset
- Staggering doses (ibuprofen at hours 0 and 6; acetaminophen at hours 3 and 9) provides more consistent analgesia than simultaneous dosing

**When Non-Opioid Fails — Risk-Stratified Opioid Prescribing:**

For the rare cases requiring opioid analgesia:
1. Screen for opioid use disorder risk: Personal/family history of substance abuse, psychiatric comorbidity, concurrent benzodiazepine use
2. Check PDMP before prescribing
3. Prescribe: Immediate-release oxycodone 2.5-5 mg q6h PRN x 3 days maximum (8-12 tablets)
4. Continue ibuprofen + acetaminophen baseline (opioid supplements, not replaces)
5. Provide naloxone prescription if risk factors present
6. Follow-up within 72 hours to reassess pain and ensure definitive treatment plan
7. Document rationale for opioid prescribing in chart

**Dental Anxiety and Pain Perception:**

Pain perception is modulated by psychological state:
- Dental anxiety increases pain perception by 30-50% (measured by experimental pain thresholds)
- Catastrophizing predicts post-operative pain intensity better than the procedure itself
- Descending inhibitory pathways (periaqueductal gray → nucleus raphe magnus → trigeminal nucleus caudalis) modulate pain signal transmission
- Anxiety suppresses descending inhibition, amplifying pain signals
- Interventions: Pre-procedural counseling, explain-show-do technique, nitrous oxide, anxiolytic pharmacotherapy when appropriate

## Pain in Specific Dental Emergencies

**Cracked Tooth Syndrome:**
- Incomplete fracture of a vital tooth
- Sharp pain on biting (release phase), sensitivity to cold, difficulty localizing
- Diagnosis: Tooth sleuth (selective biting test), transillumination, dye staining
- Management: Ranges from bonding/crown to root canal to extraction depending on fracture extent

**Acute Necrotizing Ulcerative Gingivitis (ANUG/Trench Mouth):**
- Painful, rapidly progressive destruction of interdental papillae
- Associated with stress, malnutrition, immunosuppression, smoking
- Pathognomonic: Punched-out interdental papillae, pseudomembrane, fetor oris
- Pain management: Gentle debridement, chlorhexidine rinse, ibuprofen, metronidazole if severe
- Prevalence: Higher in low-income populations with limited access to preventive care

**Trigeminal Neuralgia vs. Dental Pain:**
- Can mimic dental pain, leading to unnecessary dental procedures
- Characteristics: Electric shock-like pain, triggered by light touch to face, unilateral, follows V2 or V3 distribution
- Duration: Seconds to 2 minutes per episode (dental pain is typically sustained)
- Red flag: Patient reports tooth extraction did not resolve the pain, or pain persists after multiple dental treatments
- Management: Carbamazepine (first-line), then oxcarbazepine; microvascular decompression for refractory cases

**Pericoronitis:**
- Inflammation of soft tissue around a partially erupted tooth (usually mandibular third molar)
- Can progress to submandibular or parapharyngeal space infection
- Mild: Salt water rinses, irrigation under operculum, ibuprofen
- Moderate: Add antibiotics (amoxicillin or metronidazole)
- Severe (trismus, dysphagia, fever): Hospitalization, IV antibiotics, possible surgical drainage`,
      keyTerms: [
        { term: 'TRPV1', definition: 'Transient Receptor Potential Vanilloid 1 — a heat and acid-sensitive ion channel on dental nociceptors that is upregulated in pulpitis and mediates throbbing, burning dental pain' },
        { term: 'descending inhibitory pathways', definition: 'Neural circuits from the brainstem (PAG, RVM) that modulate pain signal transmission in the trigeminal nucleus — suppressed by anxiety, enhanced by positive expectations and analgesics' },
        { term: 'pKa-pH theory', definition: 'Principle explaining why local anesthetics are less effective in infected tissue: acidic environment shifts the anesthetic molecule to its ionized (non-lipophilic) form, preventing penetration through the nerve membrane' },
        { term: 'tooth sleuth', definition: 'A diagnostic device used to isolate biting force on individual cusps to identify a cracked tooth — the patient bites on the device, and sharp pain on release indicates a crack' },
        { term: 'multimodal analgesia', definition: 'Pain management strategy using multiple agents targeting different mechanisms simultaneously to achieve superior pain relief with lower doses of each individual agent' },
      ],
      clinicalNotes: `Advanced clinical protocols for dental pain management in safety-net settings:
1. Implement a standardized non-opioid analgesic protocol for all post-procedural pain: Ibuprofen 400-600 mg + Acetaminophen 500-1000 mg q6h for 48-72 hours as baseline
2. Pre-procedural anxiety screening (Modified Dental Anxiety Scale) helps predict patients needing additional pain management or sedation
3. When local anesthesia fails in the presence of acute pulpitis: Consider supplemental techniques — intraosseous injection (Stabident/X-Tip), intrapulpal injection, or PDL injection; alkalinized lidocaine (adding sodium bicarbonate) may improve efficacy in mildly acidic tissue
4. SDF application to exposed dentin in symptomatic teeth can provide pain relief within 24-48 hours while waiting for definitive treatment — a critical strategy in FQHCs with long wait times
5. For patients presenting to the ED with dental pain: Partner with the ED to implement a dental pain pathway that provides appropriate non-opioid analgesia + FQHC referral rather than opioid prescriptions
6. Track opioid prescribing rates as a quality metric for the dental program — target <5% of post-operative patients receiving opioids
7. Manage dental anxiety as a chronic condition in safety-net patients: Document anxiety level, build trust over successive visits, offer behavioral techniques before pharmacologic anxiolysis`,
    },
    5: {
      level: 5,
      summary: 'Expert-level dental pain management encompasses the translational neuroscience of trigeminal nociception, advanced pharmacogenomic considerations in analgesic prescribing, the intersection of dental pain management with the opioid epidemic, emerging non-opioid analgesic targets, and the implementation science of pain management protocols in safety-net dental settings. The field is evolving toward precision pain management informed by individual risk profiles, genetic variations, and social determinants.',
      explanation: `## Translational Neuroscience of Dental Pain

**Peripheral-Central Transition in Dental Pain Chronification:**

Acute dental pain is typically nociceptive and resolves with treatment. However, chronification can occur through:

1. **Ectopic discharge**: Nerve fibers damaged by dental procedures or chronic pulpitis develop spontaneous activity through upregulated Nav1.3 channels
2. **Glial activation**: Satellite glial cells in the trigeminal ganglion and microglia in the trigeminal nucleus caudalis release pro-inflammatory cytokines (IL-1beta, TNF-alpha), maintaining neuronal hyperexcitability
3. **Epigenetic changes**: Persistent pain can induce histone modifications and DNA methylation changes in trigeminal neurons, altering gene expression patterns that maintain pain signaling long after the original stimulus resolves
4. **Central cortical reorganization**: Chronic dental pain produces measurable changes in somatosensory cortex representation and thalamo-cortical connectivity (demonstrated via fMRI)

**Atypical Odontalgia (Persistent Dentoalveolar Pain Disorder):**
- Chronic pain in a tooth or extraction site without identifiable dental pathology
- Prevalence: 3-6% of patients after endodontic therapy
- Pathophysiology: Peripheral nerve injury → peripheral/central sensitization → chronic neuropathic pain
- Diagnosis of exclusion: Requires ruling out cracked tooth, missed canal, referred pain, trigeminal neuralgia
- Treatment: Tricyclic antidepressants (amitriptyline 10-75 mg nightly), gabapentinoids, topical capsaicin, CBT
- NOT treated with dental procedures — multiple unnecessary treatments are common before diagnosis

## Pharmacogenomics of Dental Pain Management

**CYP2D6 Polymorphisms and Analgesic Response:**

CYP2D6 metabolizes codeine → morphine, tramadol → O-desmethyltramadol, and hydrocodone → hydromorphone:

| CYP2D6 Phenotype | Prevalence | Clinical Impact |
|---|---|---|
| Ultra-rapid metabolizer | 1-10% (varies by ethnicity) | Excessive active metabolite; increased risk of toxicity and respiratory depression from codeine; AVOID codeine/tramadol |
| Extensive metabolizer | 70-80% | Normal metabolism; standard dosing |
| Intermediate metabolizer | 10-15% | Reduced active metabolite; may have subtherapeutic response to codeine |
| Poor metabolizer | 5-10% | No active metabolite produced; codeine and tramadol are ineffective for pain relief |

Clinical relevance: Up to 10% of patients receive NO pain relief from codeine due to CYP2D6 poor metabolizer status. This is one more reason ibuprofen + acetaminophen is preferred — their efficacy is not dependent on CYP2D6.

**CYP2C9 and Ibuprofen Metabolism:**
- CYP2C9 poor metabolizers (1-3% of population) have reduced ibuprofen clearance
- Higher plasma concentrations increase risk of GI bleeding and renal effects
- *2 and *3 variant alleles are most common; prevalence varies by ethnicity
- Clinical implication: Standard dosing is safe for most patients, but be aware in patients reporting unusual sensitivity to NSAIDs

## Dental Pain and the Opioid Epidemic — Systems Analysis

**The Dental-Opioid Pipeline — Epidemiologic Data:**

1. Dental prescriptions account for 12% of all immediate-release opioid prescriptions in the US
2. 22% of patients receiving wisdom tooth opioid prescriptions have unused pills — contributing to household supply for diversion
3. Persistent opioid use (>90 days) develops in 6.5% of dental opioid recipients
4. Risk factors for persistent use: Prior substance abuse, concurrent benzodiazepine, high initial dose, depression, socioeconomic disadvantage
5. Low-income communities have higher rates of opioid initiation from dental prescriptions AND higher rates of overdose
6. Adolescents exposed to dental opioids have a 33% higher likelihood of subsequent opioid misuse

**Policy and Regulatory Response:**

- ADA policy statement (2018): Dentists should consider NSAIDs as first-line; limit opioids to 7-day supply
- State mandates: Multiple states now limit first-time opioid prescriptions to 3-7 days
- PDMP mandates: Most states require PDMP check before prescribing controlled substances
- Continuing education: Many states require mandatory opioid prescribing education for dental license renewal
- Insurance formulary changes: Some payers require step therapy (non-opioid trial) before covering dental opioid prescriptions

**FQHC Opioid Stewardship Programs:**

Best practices for safety-net dental settings:
1. Clinic-wide default order set: Ibuprofen 600 mg + Acetaminophen 1000 mg q6h for 48-72 hours
2. Provider dashboard tracking opioid prescribing rates
3. Mandatory PDMP check integrated into EHR workflow
4. Clinical decision support alerts for high-risk patients
5. Partnership with on-site behavioral health for pain + substance use disorder co-management
6. Community naloxone distribution for patients at risk
7. Warm handoff to medication-assisted treatment (MAT) for patients identified with OUD

## Emerging Non-Opioid Analgesic Targets

**Pipeline Agents for Dental Pain:**

1. **Nav1.7 Selective Inhibitors:**
   - Highly specific sodium channel blockers that target pain without affecting motor function or CNS
   - Multiple agents in Phase II-III trials
   - Potential to provide opioid-equivalent analgesia without addiction risk
   - Dental pain trials are commonly used as proof-of-concept for analgesic development

2. **CGRP Antagonists (Gepants):**
   - Currently approved for migraine (rimegepant, ubrogepant, atogepant)
   - CGRP is released from trigeminal C-fibers during dental inflammation
   - Dental pain trials exploring efficacy for pulpitis and post-extraction pain
   - Could address the neurogenic inflammation component that NSAIDs do not fully target

3. **TRPV1 Antagonists:**
   - Target the heat/acid-sensitive channel upregulated in pulpitis
   - Early agents had hyperthermia side effects; newer selective agents in development
   - Intranasal or topical formulations may avoid systemic side effects

4. **Biologic Agents:**
   - Anti-NGF antibodies (tanezumab, fasinumab): Highly effective for chronic pain but safety concerns (rapidly progressive osteoarthritis)
   - Anti-TNF alpha for severe periapical inflammation: Conceptual but not practical for dental use
   - Platelet-rich fibrin (PRF) in extraction sockets: Reduces post-operative pain and accelerates healing; low cost if centrifuge available

5. **Resolvins and Specialized Pro-Resolving Mediators (SPMs):**
   - Endogenous lipid mediators that actively resolve inflammation rather than just blocking it
   - Resolvin E1 and D1 demonstrated analgesic effects in animal models of dental pain
   - Represent a paradigm shift from anti-inflammatory to pro-resolution therapeutics
   - May be supplemented through omega-3 fatty acid intake (EPA/DHA are precursors)

## Implementation Science for Pain Protocols

**Implementing Non-Opioid First Protocols in Safety-Net Settings:**

Evidence from implementation studies:
1. Provider education alone reduces opioid prescribing by 10-20%
2. Default order sets (non-opioid as default) reduce opioid prescribing by 40-60%
3. Peer comparison (showing providers their opioid prescribing rates vs. colleagues) adds 10-15% reduction
4. EHR clinical decision support alerts add 5-10% reduction
5. Combined multicomponent interventions achieve 70-85% reduction in dental opioid prescribing

Barriers in safety-net settings:
- Patient expectations ("I need something stronger")
- Implicit bias (assuming low-income patients are more likely to misuse opioids, leading to either over-prescribing to avoid confrontation OR under-treating pain)
- Provider training gaps in non-pharmacologic pain management
- Limited access to anxiolytic modalities (nitrous oxide, oral conscious sedation)
- Time pressure: Counseling about pain expectations takes time that productivity-focused schedules may not accommodate

**Equity Considerations:**

- Black and Hispanic patients are more likely to have dental pain undertreated compared to white patients
- Conversely, these populations are also more likely to be exposed to dental-origin opioids in some settings
- Trauma-informed approach: Many safety-net patients have complex relationships with pain, authority, and healthcare systems
- Cultural humility: Pain expression varies across cultures; standardized protocols must be applied equitably, not uniformly`,
      keyTerms: [
        { term: 'atypical odontalgia', definition: 'Chronic dental pain without identifiable pathology, now termed Persistent Dentoalveolar Pain Disorder — a neuropathic condition caused by nerve injury or central sensitization that requires pharmacologic management, not dental procedures' },
        { term: 'specialized pro-resolving mediators', definition: 'Endogenous lipid-derived molecules (resolvins, protectins, maresins) that actively promote the resolution of inflammation rather than simply blocking it — representing a paradigm shift in pain management' },
        { term: 'CYP2D6 polymorphism', definition: 'Genetic variation in the CYP2D6 enzyme affecting metabolism of codeine, tramadol, and hydrocodone — up to 10% of patients are poor metabolizers who receive no analgesic benefit from codeine' },
        { term: 'ectopic discharge', definition: 'Spontaneous nerve impulse generation from damaged or regenerating nerve fibers, contributing to chronic pain after dental procedures through upregulated sodium channel expression' },
        { term: 'Nav1.7 channel', definition: 'Voltage-gated sodium channel critical for pain initiation in peripheral nociceptors — a high-priority drug target for developing non-opioid analgesics with multiple agents in clinical trials' },
      ],
      clinicalNotes: `Expert-level synthesis for dental pain management in safety-net populations:
1. Implement clinic-wide non-opioid-first protocols with default order sets — evidence shows 70-85% reduction in opioid prescribing without worsening pain outcomes
2. Screen for opioid use disorder at dental intake: use validated instruments (TAPS, DAST-10) and establish warm handoff pathways to MAT programs
3. Chronic dental pain (>3 months) in the absence of identifiable pathology should raise suspicion for atypical odontalgia — refer to orofacial pain specialist rather than performing additional procedures
4. Pre-emptive analgesia should be standard of care for all surgical dental procedures: Ibuprofen 600 mg 1 hour pre-operatively
5. Address the equity paradox: Ensure non-opioid protocols do not result in undertreated pain for minority and low-income patients — monitor pain outcome metrics stratified by demographics
6. Advocate for dental program access to nitrous oxide and oral conscious sedation — these modalities reduce anxiety-amplified pain and can decrease reliance on post-operative analgesics
7. Partner with pharmacy schools and programs to provide patient education on safe OTC analgesic use, particularly for patients with limited health literacy
8. Track post-operative pain callbacks as a quality metric — low callback rates validate non-opioid protocols; high rates may indicate need for protocol refinement or patient education improvement`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ada-opioid-guidelines',
      type: 'guideline',
      title: 'ADA Clinical Practice Guideline for Management of Acute Dental Pain',
      authors: ['American Dental Association'],
      source: 'Journal of the American Dental Association',
      chapter: '2023',
      url: 'https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/oral-analgesics-for-acute-dental-pain',
    },
    {
      id: 'cdc-dental-opioids',
      type: 'website',
      title: 'Opioid Prescribing in Dentistry',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC Oral Health',
      url: 'https://www.cdc.gov/oral-health/hcp/dental-opioid-prescribing/',
    },
    {
      id: 'medlineplus-toothache',
      type: 'website',
      title: 'Toothaches',
      authors: ['U.S. National Library of Medicine'],
      source: 'MedlinePlus',
      url: 'https://medlineplus.gov/ency/article/003067.htm',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-emergency-guide', targetType: 'topic', relationship: 'related', label: 'Dental Emergency Guide' },
    { targetId: 'topic-dental-clinics-fqhc', targetType: 'topic', relationship: 'related', label: 'Dental Clinics and Community Health Centers' },
  ],

  tags: {
    systems: ['dental-health'],
    topics: ['dental', 'oral-health', 'pain-management', 'pharmacology'],
    keywords: [
      'toothache', 'dental pain', 'ibuprofen', 'acetaminophen', 'opioid stewardship',
      'abscess', 'pulpitis', 'home remedies', 'OTC pain relief', 'dental emergency',
      'low-income', 'affordable pain management',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default dentalPainManagementContent;
