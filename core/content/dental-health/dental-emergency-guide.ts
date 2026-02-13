/**
 * Dental Emergency Guide - Comprehensive Educational Content
 *
 * Covers knocked out teeth, dental abscess, broken teeth, pain management,
 * and when to seek immediate care versus home management.
 */

import { EducationalContent } from '../types';

export const dentalEmergencyGuideContent: EducationalContent = {
  id: 'topic-dental-emergency-guide',
  type: 'topic',
  name: 'Dental Emergency Guide',
  nameEs: 'Guia de Emergencias Dentales',
  alternateNames: [
    'Emergency Dental Care',
    'Dental Trauma First Aid',
    'Urgent Dental Problems',
    'Dental First Response',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Dental emergencies include knocked-out teeth, severe toothaches, broken teeth, and infections. Knowing what to do in the first few minutes can save your tooth and prevent serious health problems.',
      explanation: `**What Counts as a Dental Emergency?**

A dental emergency is any dental problem that needs immediate attention. Some emergencies are about saving a tooth, and others are about protecting your health.

**The Big 5 Dental Emergencies:**

**1. Knocked-Out Tooth (Avulsed Tooth)**

This is the most time-sensitive dental emergency. Every minute counts!

What to do:
- Find the tooth and pick it up by the white part (the crown), NEVER by the root
- If the tooth is dirty, gently rinse it with milk or saline — do NOT scrub it
- Try to put it back in the socket (the hole where it was) and bite down on a cloth to hold it in place
- If you can't put it back in, place the tooth in a cup of cold milk, saline, or saliva (spit into a cup)
- NEVER let the tooth dry out or put it in water
- Get to a dentist within 30 minutes — the sooner, the better

Think of the tooth like a plant — the root has living cells that need to stay moist. If they dry out, the tooth can't reattach.

**2. Severe Toothache**

What to do:
- Rinse your mouth with warm salt water (1/2 teaspoon salt in 8 oz water)
- Use dental floss gently to remove anything stuck between teeth
- Take over-the-counter pain medicine (ibuprofen works best for dental pain)
- Do NOT put aspirin directly on the gum — it can burn the tissue
- Apply a cold pack to the outside of your cheek if swollen
- See a dentist as soon as possible

**3. Broken or Cracked Tooth**

What to do:
- Rinse your mouth with warm water
- Save any broken pieces
- Apply a cold compress to reduce swelling
- If there's a sharp edge, cover it with dental wax or sugar-free gum to protect your tongue and cheek
- See a dentist within 24 hours

**4. Dental Abscess (Infection)**

This is the most DANGEROUS dental emergency because the infection can spread.

Warning signs:
- Severe, throbbing pain that won't go away
- Swelling in the face, jaw, or neck
- Fever
- Bad taste in your mouth (pus draining)
- Difficulty swallowing or breathing (GO TO THE ER IMMEDIATELY)

What to do:
- Rinse with warm salt water several times a day
- Take pain medicine
- If you have facial swelling, fever, or trouble breathing — go to the emergency room right away
- A dental abscess will NOT go away on its own — you need professional help

**5. Lost Filling or Crown**

What to do:
- If a filling falls out, you can temporarily fill the hole with sugar-free gum or dental cement from a drugstore
- If a crown comes off, try to slip it back on using denture adhesive or toothpaste as temporary glue
- See a dentist within a few days
- Don't chew on that side

**When to Go to the Emergency Room:**

Go to the ER if you have:
- Swelling spreading to your eye, neck, or under your jaw
- Fever with dental swelling
- Trouble breathing or swallowing
- Uncontrollable bleeding from the mouth
- A broken jaw
- Severe facial trauma

**Pain Management at Home:**

| Medicine | How Much | How Often | Notes |
|----------|----------|-----------|-------|
| Ibuprofen (Advil) | 400-600mg | Every 6-8 hours | Best for dental pain; take with food |
| Acetaminophen (Tylenol) | 500-1000mg | Every 6-8 hours | Avoid if you have liver problems |
| Combo (alternating) | Rotate between | Every 3-4 hours | Alternating gives best relief |

**Important: Do NOT ignore dental pain. It's your body telling you something is wrong.**`,
      keyTerms: [
        { term: 'avulsed tooth', definition: 'A tooth that has been completely knocked out of its socket' },
        { term: 'abscess', definition: 'A pocket of pus caused by a bacterial infection, usually very painful and dangerous if untreated' },
        { term: 'crown', definition: 'The visible white part of your tooth above the gumline, or an artificial cap placed over a damaged tooth' },
        { term: 'socket', definition: 'The hole in the jawbone where a tooth sits' },
        { term: 'dental cement', definition: 'A temporary filling material you can buy at a drugstore to cover a lost filling until you see a dentist' },
      ],
      analogies: [
        'A knocked-out tooth is like a plant pulled from soil — the longer the roots are exposed to air, the less likely it is to survive when replanted.',
        'A dental abscess is like a pressure cooker — the infection builds pressure, and if it doesn\'t get treated, it can burst and spread to dangerous areas.',
        'Your tooth\'s nerve is like a smoke detector — pain is the alarm telling you there\'s a problem that needs attention.',
      ],
      examples: [
        'A child gets hit in the mouth during soccer and a front tooth comes out — putting it in cold milk and getting to the dentist in 20 minutes can save the tooth.',
        'A person wakes up at 3am with severe throbbing pain and a swollen face — this is likely an abscess and needs professional care.',
        'Someone bites down on an olive pit and cracks a back tooth — covering sharp edges and seeing a dentist the next day is the right approach.',
      ],
      patientCounselingPoints: [
        'For a knocked-out tooth, time is critical — getting to a dentist within 30 minutes gives the best chance of saving the tooth',
        'NEVER put aspirin directly on a sore tooth or gum — it causes chemical burns',
        'Facial swelling with fever is a medical emergency — go to the ER, not an urgent care',
        'Keep a dental emergency kit at home: dental wax, temporary cement, salt, ibuprofen, and your dentist\'s after-hours number',
        'Dental pain that wakes you up at night usually means the problem is serious — don\'t wait to get help',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental emergencies range from traumatic injuries (avulsion, fractures) to infections (periapical abscess, cellulitis) requiring triage-based response. Proper first aid within the first 30-60 minutes can determine whether a tooth is saved or lost, and timely treatment of dental infections prevents life-threatening complications.',
      explanation: `## Classification of Dental Emergencies

**Emergency Triage Categories:**

| Category | Examples | Timeline |
|----------|----------|----------|
| Life-threatening | Ludwig angina, airway compromise, uncontrolled hemorrhage | Immediate ER |
| Urgent | Avulsed permanent tooth, dental abscess with cellulitis | Within hours |
| Semi-urgent | Fractured tooth with pulp exposure, acute pulpitis | Within 24 hours |
| Non-urgent | Lost filling, broken denture, minor chip | Within days |

## Traumatic Dental Injuries

### Tooth Avulsion (Knocked-Out Tooth)

**Permanent Teeth:**
- Most time-sensitive dental emergency
- Periodontal ligament (PDL) cells on root surface begin dying within minutes
- Optimal reimplantation within 5 minutes: ~85-97% success rate
- Reimplantation within 30 minutes: ~50-70% success rate
- Reimplantation after 60 minutes: significantly reduced prognosis
- Baby teeth should NOT be reimplanted (risk of damage to developing permanent tooth)

**First Aid Protocol:**
1. Handle tooth by crown only (do not touch root surface)
2. If contaminated, rinse gently with saline or milk (10 seconds maximum)
3. Reimplant if possible — push tooth into socket with gentle pressure
4. Have patient bite on gauze or cloth to stabilize
5. If unable to reimplant, store in (best to worst):
   - Hank's Balanced Salt Solution (Save-A-Tooth kit)
   - Cold milk
   - Saline
   - Patient's saliva (in a container)
   - NEVER water (hypotonic — damages PDL cells)
   - NEVER dry
6. Seek emergency dental care immediately

**At the Dentist:**
- Reimplantation under local anesthesia
- Splinting with flexible wire for 2 weeks
- Root canal treatment may be needed within 7-10 days
- Follow-up monitoring for ankylosis and root resorption

### Tooth Fractures (Ellis Classification)

| Class | Description | Symptoms | Urgency |
|-------|-------------|----------|---------|
| Ellis I | Enamel only (chip) | No pain, rough edge | Non-urgent; smooth/restore |
| Ellis II | Enamel + dentin (no pulp exposure) | Sensitivity to temperature/air | Semi-urgent; seal dentin within 24 hours |
| Ellis III | Enamel + dentin + pulp exposure | Severe pain, visible pink/red spot or bleeding | Urgent; treat within hours |

**Management by Class:**
- **Ellis I**: Smooth sharp edges, composite restoration if esthetic concern
- **Ellis II**: Cover exposed dentin with calcium hydroxide, glass ionomer, or composite; prevent bacterial contamination
- **Ellis III**: Direct pulp capping (if small exposure <1mm, seen within hours) or pulpotomy/root canal; urgent referral

### Luxation Injuries

| Type | Description | Management |
|------|-------------|------------|
| Concussion | Tooth tender but not mobile | Soft diet, monitor |
| Subluxation | Tooth mobile but not displaced | Soft diet, possible splinting |
| Lateral luxation | Tooth displaced laterally | Reposition, splint 4 weeks |
| Intrusion | Tooth pushed into socket | Allow re-eruption or orthodontic repositioning |
| Extrusion | Tooth partially out of socket | Reposition, splint 2 weeks |

## Dental Infections

### Periapical Abscess
- Originates from necrotic pulp tissue (dead nerve)
- Bacteria from caries reach the pulp → pulp necrosis → periapical infection
- Symptoms: Severe throbbing pain, sensitivity to pressure, possible swelling
- Treatment: Incision and drainage if fluctuant, root canal or extraction, antibiotics if systemic signs present

### Periodontal Abscess
- Originates from deep periodontal pocket
- May occur in patients with existing gum disease
- Symptoms: Localized swelling of gingiva, pain, possible pus drainage
- Treatment: Drainage, irrigation, scaling and root planing, antibiotics if needed

### Spreading Dental Infections — Life-Threatening Complications

**Fascial Space Infections:**
- Submandibular space → Ludwig angina (bilateral floor-of-mouth swelling, airway emergency)
- Buccal space → facial cellulitis
- Pterygomandibular space → trismus (difficulty opening mouth)
- Parapharyngeal space → potential airway compromise
- Retropharyngeal space → mediastinitis (life-threatening)
- Cavernous sinus → cavernous sinus thrombosis (rare but deadly)

**Red Flags Requiring ER Referral:**
- Difficulty breathing or swallowing (dyspnea/dysphagia)
- Elevated floor of mouth
- Bilateral submandibular swelling
- Fever >101°F (38.3°C) with dental swelling
- Trismus (unable to open mouth more than 20mm)
- Swelling extending to orbit (eye area) or neck
- Signs of sepsis (high heart rate, confusion, low blood pressure)
- Immunocompromised patient with dental infection

## Pain Management

**Pharmacological Approach:**

| Severity | First Line | Alternative | Notes |
|----------|-----------|-------------|-------|
| Mild | Ibuprofen 400mg q6h | Acetaminophen 500mg q6h | Take ibuprofen with food |
| Moderate | Ibuprofen 600mg q6h + Acetaminophen 500mg q6h (alternating) | Naproxen 500mg q12h | Combination more effective than either alone |
| Severe | Same as moderate + dental referral for definitive treatment | Short course opioid PRN (if necessary and prescribed) | NSAIDs are superior to opioids for most dental pain |

**Important Pain Management Notes:**
- NSAIDs (ibuprofen, naproxen) are the gold standard for dental pain — more effective than opioids for most dental conditions
- Combination ibuprofen + acetaminophen provides synergistic analgesia
- Topical benzocaine (Orajel) provides temporary numbing but can mask worsening infection
- Clove oil (eugenol) has mild analgesic and antiseptic properties
- Ice packs: 20 minutes on, 20 minutes off for swelling
- Warm salt water rinses for infection (1/2 tsp salt in 8 oz warm water)

## Prevention and Preparedness

**Dental Emergency Kit:**
- Dental wax (for sharp edges)
- Temporary filling material (available OTC)
- Save-A-Tooth preservation system (for avulsed teeth)
- Gauze pads
- Ibuprofen and acetaminophen
- Clove oil
- Small container with lid (for milk storage)
- Dentist and oral surgeon emergency contact numbers

**Mouth Guards for Sports:**
- Custom-fitted mouth guards reduce dental injury risk by up to 82%
- Recommended for all contact sports
- Also protective in non-contact sports with fall risk (cycling, skateboarding)`,
      keyTerms: [
        { term: 'avulsion', definition: 'Complete displacement of a tooth from its socket due to trauma' },
        { term: 'reimplantation', definition: 'Reinserting an avulsed tooth into its socket with the goal of restoring its function and vitality' },
        { term: 'Ellis classification', definition: 'System for categorizing tooth fractures by depth: Ellis I (enamel), Ellis II (dentin), Ellis III (pulp exposure)' },
        { term: 'Ludwig angina', definition: 'A rapidly spreading bilateral infection of the submandibular space that can cause airway obstruction — a life-threatening dental emergency' },
        { term: 'periapical abscess', definition: 'A collection of pus at the tip of a tooth root caused by bacterial infection of the dental pulp' },
        { term: 'cellulitis', definition: 'A spreading bacterial infection of soft tissues that causes diffuse swelling, redness, and warmth' },
      ],
      patientCounselingPoints: [
        'A knocked-out permanent tooth can be saved if reimplanted within 30 minutes — keep it moist in milk, never let it dry out',
        'Ibuprofen (Advil/Motrin) works better than most prescription pain pills for dental pain — take it with food',
        'Facial swelling that spreads rapidly, especially toward the neck or under the tongue, is a medical emergency requiring ER evaluation',
        'Baby teeth that are knocked out should NOT be put back in — doing so can damage the permanent tooth forming underneath',
        'A custom mouth guard from your dentist is far more protective than store-bought options for sports',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental emergencies encompass dentoalveolar trauma, odontogenic infections, and acute pain conditions requiring evidence-based triage, appropriate first aid, and timely definitive care. Management is guided by injury classification systems, infection severity assessment, and current pharmacological evidence for analgesia.',
      explanation: `## Dentoalveolar Trauma: Evidence-Based Management

**Epidemiology:**
- Dental trauma affects approximately 20-30% of children (primary dentition) and 6-34% of adolescents (permanent dentition)
- Peak incidence: 2-3 years (primary) and 8-11 years (permanent)
- Male-to-female ratio: approximately 2:1
- Most common teeth affected: Maxillary central incisors
- Sports account for ~33% of dental trauma; falls ~50%

### International Association of Dental Traumatology (IADT) Guidelines

**Avulsion Management — Permanent Teeth:**

*Extra-alveolar Dry Time (EADT) determines prognosis:*

| EADT | PDL Cell Viability | Expected Outcome |
|------|-------------------|------------------|
| <5 min | Excellent | Functional healing likely |
| 5-20 min | Good | Favorable prognosis if stored properly |
| 20-60 min (moist) | Fair | Surface resorption possible |
| >60 min or dry | Poor | Replacement resorption expected |

*Post-Reimplantation Protocol:*
1. Flexible splint (titanium or composite wire) for 2 weeks
2. Systemic antibiotics: Doxycycline 100mg BID x 7 days (adults) or Penicillin V (children)
3. Tetanus prophylaxis if indicated
4. Chlorhexidine rinse 0.12% BID for 2 weeks
5. Soft diet for 2 weeks
6. Root canal initiation: 7-10 days post-reimplantation (mature apex) or observation (open apex — potential revascularization)
7. Follow-up: 2 weeks, 4 weeks, 3 months, 6 months, annually for 5 years

*Soaking Protocol for Dry Storage >60 minutes:*
- Soak in 2.4% sodium fluoride for 20 minutes before reimplantation
- Purpose: Delay replacement resorption
- Endodontic treatment indicated prior to or within 2 weeks of reimplantation
- Discuss guarded prognosis with patient — tooth may eventually need extraction

**Avulsion — Primary Teeth:**
- Do NOT reimplant — risk to developing permanent tooth bud
- Monitor for infection
- Space maintenance if indicated
- Monitor eruption of permanent successor

### Crown Fractures: Advanced Management

**Ellis III (Pulp Exposure) — Detailed Protocol:**

| Condition | Exposure Size | Time Since Injury | Treatment |
|-----------|--------------|-------------------|-----------|
| Mature apex | <1mm | <24 hours | Direct pulp capping (MTA or calcium hydroxide) |
| Mature apex | >1mm | <24 hours | Partial pulpotomy (Cvek pulpotomy) |
| Mature apex | Any | >24 hours | Full pulpotomy or root canal |
| Open apex | Any | <48 hours | Partial pulpotomy (preserve vitality for apexogenesis) |
| Open apex | Any | >48 hours | Apexification or regenerative endodontics |

*Cvek Pulpotomy:*
- Remove 2mm of pulp tissue from exposure site
- Place MTA (mineral trioxide aggregate) over pulp
- Restore with composite
- Success rate: 85-97% in teeth with minimal contamination time
- Preserves pulp vitality and continued root development

### Root Fractures

**Classification by Location:**
1. **Apical third**: Best prognosis; often heals without intervention
2. **Middle third**: Moderate prognosis; flexible splint for 4 weeks
3. **Cervical third**: Worst prognosis; may require extraction

**Healing Patterns:**
- Hard tissue healing (callus formation): Best outcome
- Interposition of connective tissue: Acceptable
- Interposition of bone: Acceptable
- Interposition of granulation tissue (non-healing): Requires extraction of coronal fragment

### Alveolar Fractures
- Segment of bone displaced with attached teeth
- Management: Reposition, splint for 4-6 weeks (rigid splint)
- Monitor pulp vitality of involved teeth
- Surgical fixation may be needed for large segments

## Odontogenic Infections: Pathophysiology and Management

### Microbiology
- Polymicrobial: Aerobic and anaerobic bacteria
- Common pathogens:
  - Viridans group streptococci (S. anginosus group most pathogenic)
  - Prevotella spp.
  - Peptostreptococcus spp.
  - Fusobacterium spp.
  - Porphyromonas spp.
- Initial infection: Aerobic predominance
- Mature abscess: Anaerobic predominance
- Typical time from dental caries to abscess: Weeks to months

### Anatomic Pathways of Infection Spread

**The position of the tooth apex relative to muscle attachments determines the initial path of spread:**

| Tooth/Apex Position | Initial Space Involved | Can Spread To |
|---------------------|----------------------|---------------|
| Maxillary incisors | Vestibular (above buccinator attachment) | Canine space, nasolabial |
| Maxillary canine | Canine space | Infraorbital, periorbital |
| Maxillary molars (buccal) | Buccal space | Infratemporal fossa, orbit |
| Maxillary molars (palatal) | Palatal | Rare spread |
| Mandibular incisors | Vestibular or submental | Sublingual space |
| Mandibular premolars | Vestibular or buccal space | Submandibular |
| Mandibular molars (M1/M2) | Submandibular (below mylohyoid attachment) | Lateral pharyngeal |
| Mandibular molars (M3) | Pterygomandibular, submandibular | Parapharyngeal, retropharyngeal |

### Ludwig Angina — Critical Emergency

**Diagnostic Criteria:**
- Bilateral involvement of submandibular, sublingual, and submental spaces
- Gangrenous cellulitis (not abscess formation)
- Rapidly spreading, "woody" induration of floor of mouth
- Tongue elevation and posterior displacement
- Mortality: 8-10% even with treatment (historically >50%)

**Management:**
1. **Airway**: Secure immediately — may require fiberoptic intubation or tracheostomy
2. **IV antibiotics**: Ampicillin-sulbactam or clindamycin + metronidazole
3. **Surgical**: Incision and drainage through submandibular approach
4. **Source control**: Extract causative tooth when patient is stable
5. **ICU monitoring**: Airway assessment, IV fluids, serial imaging

### Antibiotic Selection for Dental Infections

| Scenario | First Line | Alternative | Duration |
|----------|-----------|-------------|----------|
| Localized periapical abscess (no systemic signs) | None (drainage/treatment only) | Amoxicillin 500mg TID if unable to treat | 5-7 days |
| Spreading infection/cellulitis | Amoxicillin 500mg TID | Clindamycin 300mg QID (if penicillin allergy) | 7-10 days |
| Severe/fascial space | Amoxicillin-clavulanate 875mg BID or IV Ampicillin-sulbactam | IV Clindamycin + Metronidazole | Until resolution |
| Immunocompromised patient | Lower threshold for antibiotics; consult infectious disease | Culture and sensitivity | Guided by culture |

**Key Principles:**
- Antibiotics alone do NOT resolve dental infections — source control (drainage, root canal, or extraction) is essential
- Unnecessary antibiotic prescribing contributes to antimicrobial resistance
- Drainage is the definitive treatment for abscess
- Incision and drainage technique: Incise at most dependent point, blunt dissection to break loculations, irrigate, place drain

## Pharmacology of Dental Pain Management

**NSAID Mechanism in Dental Pain:**
- Dental pain is primarily inflammatory (prostaglandin-mediated)
- COX-1/COX-2 inhibition by NSAIDs directly targets the pain mechanism
- Superior to opioids for inflammatory dental pain (multiple RCTs)
- Peripheral and central analgesic effects

**Evidence for Combination Therapy:**
- Ibuprofen 400mg + Acetaminophen 500mg provides NNT of 1.5 (number needed to treat for 50% pain relief)
- Superior to opioid combinations (hydrocodone/acetaminophen NNT: 2.7)
- Ibuprofen + acetaminophen combination recommended by ADA as first-line for acute dental pain
- Pre-emptive analgesia (dosing before procedure) improves post-operative pain control`,
      keyTerms: [
        { term: 'IADT', definition: 'International Association of Dental Traumatology — organization that publishes evidence-based guidelines for management of dental trauma' },
        { term: 'PDL cells', definition: 'Periodontal ligament cells — living cells on the tooth root surface critical for reattachment after reimplantation; begin dying within minutes of drying' },
        { term: 'MTA', definition: 'Mineral trioxide aggregate — biocompatible cement used for pulp capping, pulpotomy, and root-end procedures; promotes hard tissue formation' },
        { term: 'Cvek pulpotomy', definition: 'Partial pulpotomy technique removing only 2mm of exposed pulp tissue to preserve vitality, with 85-97% success rate' },
        { term: 'NNT', definition: 'Number needed to treat — the number of patients who need to receive a treatment for one patient to achieve the desired outcome' },
        { term: 'fascial space infection', definition: 'Spread of odontogenic infection into anatomic fascial spaces of the head and neck, with potential for airway compromise and mediastinitis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management of dental emergencies integrates dental traumatology guidelines, surgical principles of infection management, evidence-based pharmacotherapy, and understanding of anatomic pathways of infection dissemination. Clinical decision-making is guided by injury classification, time-dependent protocols, and severity-based triage systems.',
      explanation: `## Advanced Dental Traumatology

### Pulp Biology After Trauma

**Revascularization Potential:**
- Teeth with open apices (immature root development) have significantly higher revascularization potential
- Apical foramen >1mm allows vascular ingrowth
- Revascularization process takes 30-60 days
- Monitoring via cold testing, electric pulp testing, and laser Doppler flowmetry
- Transient loss of pulp response is common and does not indicate necrosis

**Pulp Necrosis After Trauma — Risk Factors:**
- Mature (closed) apex: Higher risk of necrosis after luxation
- Lateral luxation and intrusion: Highest necrosis rates (58-85%)
- Extrusive luxation: Moderate risk (26-64%)
- Subluxation: Lower risk (6-16%)
- Concurrent crown fracture: Variable impact depending on pulp exposure

**Monitoring Protocol:**
- Pulp sensitivity testing at 2 weeks, 4 weeks, 3 months, 6 months, annually
- Radiographic assessment for periapical pathology, root resorption, ankylosis
- Color change: Progressive gray discoloration may indicate necrosis (but transient discoloration from hemosiderin is possible without necrosis)
- Crown discoloration + periapical radiolucency = necrosis confirmed → root canal indicated

### Root Resorption After Reimplantation

| Type | Mechanism | Radiographic Appearance | Management |
|------|-----------|------------------------|------------|
| Surface resorption | Minor PDL damage, self-limiting | Small irregularities on root surface | Observation; usually self-repairs |
| Inflammatory resorption | Infected necrotic pulp + PDL damage | Periapical radiolucency + root irregularity | Immediate root canal with Ca(OH)₂ |
| Replacement resorption (ankylosis) | Extensive PDL damage, bone replaces root | Loss of PDL space, root blends with bone | No treatment stops progression; infraposition likely |

**Decoronation (for ankylosed teeth in growing patients):**
- When infraposition is >1mm in adolescent patients
- Remove crown, leave root submerged
- Maintains alveolar ridge height for future implant
- Guided bone regeneration concept

### Regenerative Endodontics for Traumatized Immature Teeth

**Revascularization Protocol (AAE Position Statement):**
1. Access cavity, gentle irrigation (NaOCl 1.5%, EDTA 17%)
2. Intracanal medicament: Triple antibiotic paste (ciprofloxacin, metronidazole, minocycline) or Ca(OH)₂ for 2-4 weeks
3. Remove medicament, induce bleeding into canal (lacerate periapical tissue)
4. Place collagen matrix or PRF (platelet-rich fibrin) scaffold
5. Seal with MTA or Biodentine
6. Restore with composite

**Expected Outcomes:**
- Resolution of apical pathology: ~90%
- Continued root development: ~75%
- Positive pulp testing response: ~50%
- True regeneration vs. repair tissue remains debated
- Histologic studies show variable tissue types: Cementum-like, bone-like, PDL-like

## Advanced Infection Management

### Severity Assessment: Infection Severity Score

**Clinical Assessment Parameters:**

| Parameter | Mild | Moderate | Severe |
|-----------|------|----------|--------|
| Temperature | <38°C | 38-39°C | >39°C |
| Trismus | None | 20-30mm opening | <20mm opening |
| Swelling | Localized, fluctuant | Diffuse, indurated | Spreading, bilateral |
| Dysphagia | None | Mild difficulty | Significant, drooling |
| Dyspnea | None | None | Present — AIRWAY EMERGENCY |
| Dehydration | None | Mild | Moderate to severe |
| WBC | Normal | Elevated | Significantly elevated or depressed |

### Imaging for Odontogenic Infections

**Modalities:**
- **Panoramic radiograph**: First-line for identifying causative tooth
- **CBCT**: Superior for localization of abscess and relationship to vital structures
- **CT with contrast**: Gold standard for deep space infections; defines extent and guides surgical planning
- **MRI**: Soft tissue detail; useful for retropharyngeal and mediastinal involvement
- **Ultrasound**: Point-of-care for superficial abscess localization; guides needle aspiration

### Surgical Principles for Incision and Drainage

**Pre-operative Assessment:**
- Identify fluctuance (mature abscess) vs. induration (cellulitis)
- Fluctuant: I&D indicated
- Indurated: May need antibiotics first to allow localization, or immediate surgical exploration for severe cases

**Technique:**
1. Adequate anesthesia (block anesthesia preferred; local infiltration in infected tissue is less effective due to low pH)
2. Incision at most dependent point of the abscess (gravity-dependent drainage)
3. Through mucosa and periosteum for intraoral approach
4. Blunt dissection with hemostat to break loculations
5. Culture and sensitivity specimen if indicated (severe infection, immunocompromised, treatment failure)
6. Irrigate with saline or dilute povidone-iodine
7. Place drain (Penrose drain or rubber dam strip) secured with suture
8. Source control: Extract tooth or initiate root canal

**Post-operative Management:**
- Drain removal in 24-48 hours (or when drainage ceases)
- Daily wound assessment
- Continue antibiotics if indicated
- Adequate hydration and nutrition
- Re-evaluate in 48 hours — if no improvement, consider CT imaging and broader antibiotic coverage

### Antibiotic Resistance Considerations

**Emerging Resistance Patterns:**
- Beta-lactamase producing Prevotella spp. increasing (up to 40-60% in some studies)
- Penicillin-resistant viridans streptococci: 15-30%
- Clindamycin resistance: Generally low but increasing
- Metronidazole-resistant anaerobes: Very rare
- Empiric amoxicillin-clavulanate addresses most beta-lactamase producing organisms

**Antibiotic Stewardship in Dentistry:**
- Only ~10% of dental infections truly require systemic antibiotics
- Drainage and source control are the primary treatment for dental abscesses
- ADA guidelines emphasize limiting antibiotic prescriptions
- Dentists prescribe ~10% of all outpatient antibiotics — significant stewardship opportunity

## Medicolegal Considerations in Dental Emergencies

**Documentation Requirements:**
- Time of injury
- Mechanism of injury
- Time of initial treatment
- Tooth storage medium and duration
- Examination findings (mobility, percussion, vitality, radiographic)
- Treatment rendered
- Prognosis discussed with patient/guardian
- Follow-up plan documented

**Standard of Care:**
- Following IADT guidelines establishes standard of care
- Failure to reimplant viable avulsed tooth within appropriate timeframe
- Failure to recognize spreading infection and refer
- Inadequate informed consent for guarded prognosis
- Failure to provide appropriate follow-up schedule`,
      keyTerms: [
        { term: 'decoronation', definition: 'Surgical removal of the crown of an ankylosed tooth while leaving the root submerged to maintain alveolar bone height for future prosthetic options' },
        { term: 'regenerative endodontics', definition: 'Biologically-based procedures designed to replace damaged pulp-dentin complex with living tissue capable of continued root development' },
        { term: 'replacement resorption', definition: 'Progressive resorption of tooth root and replacement by bone (ankylosis); occurs when PDL is extensively damaged, rendering the tooth non-restorable' },
        { term: 'PRF', definition: 'Platelet-rich fibrin — autologous blood concentrate used as scaffold in regenerative procedures; contains growth factors that promote tissue healing' },
        { term: 'Biodentine', definition: 'Tricalcium silicate cement used as dentin substitute and pulp capping material; faster setting and improved mechanical properties compared to MTA' },
      ],
      clinicalNotes: `Clinical decision-making for dental emergencies:
1. Avulsion: Extra-alveolar dry time is the single most important prognostic factor — prioritize moist storage and rapid reimplantation
2. For immature teeth with pulp exposure, partial pulpotomy (Cvek) preserves vitality and allows continued root development — avoid root canal if possible
3. Regenerative endodontics for necrotic immature teeth has replaced apexification as standard of care in many programs
4. Antibiotics alone will not resolve dental abscesses — always pursue source control (I&D, root canal, or extraction)
5. Ludwig angina: Airway management supersedes all other considerations; prepare for surgical airway if fiberoptic intubation fails
6. Clindamycin resistance is increasing — consider amoxicillin-clavulanate as first-line for penicillin-eligible patients with moderate-severe infections
7. Document thoroughly — dental trauma cases frequently involve medicolegal considerations`,
    },
    5: {
      level: 5,
      summary: 'Management of complex dental emergencies requires integration of current evidence from dental traumatology, surgical infection management, regenerative biology, and critical care principles. Emerging approaches include biomarker-guided antibiotic therapy, advanced regenerative protocols, and precision medicine approaches to infection management.',
      explanation: `## Current Evidence and Controversies in Dental Emergency Management

### Dental Trauma Research Frontiers

**Cryopreservation of Avulsed Teeth:**
- Experimental protocols for banking avulsed teeth at -196°C
- PDL cell viability maintained for extended periods
- Potential for delayed reimplantation
- Not yet clinically available; research stage
- Challenges: Cell damage during freezing/thawing, cost, logistics

**Stem Cell Applications:**
- Dental pulp stem cells (DPSCs) from avulsed teeth can be harvested and banked
- Potential applications: Pulp regeneration, PDL regeneration, alveolar bone augmentation
- SHED (stem cells from human exfoliated deciduous teeth): Source of multipotent stem cells
- Clinical trials for pulp regeneration using autologous DPSCs are ongoing

**Growth Factor Therapies:**
- EMD (Enamel Matrix Derivative): Applied to root surface before reimplantation to promote PDL healing
- PDGF, BMP-2: Under investigation for promoting root surface healing
- PRP/PRF: Autologous growth factor concentrates as reimplantation adjuncts
- Evidence is currently limited to animal studies and small clinical trials

**Advanced Splinting Materials:**
- Wire-composite splints: Current standard
- Fiber-reinforced composite: Flexible, tooth-colored, biocompatible
- 3D-printed customized splints: Emerging technology
- Optimal splinting duration remains debated (IADT recommends 2 weeks for avulsion)

### Regenerative Endodontics: Current State and Future Directions

**Histologic Evidence:**
- Revascularization procedures produce repair tissue, not true pulp regeneration
- Tissue ingrowth is predominantly cementum-like, bone-like, and PDL-like
- True dentin-pulp complex regeneration has not been reliably achieved clinically
- Cell homing vs. cell transplantation approaches under investigation

**Scaffold-Based Approaches (Research Stage):**
- Injectable hydrogels with embedded growth factors
- Decellularized ECM scaffolds
- 3D-printed scaffolds mimicking pulp architecture
- Nanofibrous scaffolds for directed cell growth
- Smart scaffolds with controlled release kinetics

**Cell-Based Approaches (Research Stage):**
- Autologous DPSC transplantation into instrumented canals
- Induced pluripotent stem cells (iPSCs) differentiated to odontoblast-like cells
- Exosome-based therapy (cell-free approach)
- Gene therapy for odontoblast differentiation

**Challenges to Clinical Translation:**
- Regulatory pathway for stem cell therapies
- Cost and scalability
- Long-term outcomes unknown
- Standardization of protocols
- Patient selection criteria

### Advanced Infection Management

**Molecular Diagnostics for Odontogenic Infections:**
- Real-time PCR for pathogen identification (results in hours vs. days for culture)
- Next-generation sequencing for polymicrobial infections
- Antimicrobial resistance gene detection
- Point-of-care molecular testing under development
- Potential to guide targeted antibiotic selection

**Biomarker-Guided Antibiotic Duration:**
- Procalcitonin (PCT): Low utility for localized dental infections
- C-reactive protein (CRP): Useful for monitoring treatment response in severe infections
- Serial WBC and CRP trending to guide antibiotic duration
- Novel biomarkers under investigation: Presepsin, IL-6, sTREM-1

**Necrotizing Fasciitis of Dental Origin:**
- Rare but rapidly fatal (mortality 20-40%)
- Risk factors: Diabetes, immunosuppression, alcoholism
- Clinical: Rapidly spreading pain out of proportion, crepitus, skin necrosis
- Imaging: CT with gas tracking in fascial planes
- Management: Aggressive surgical debridement, broad-spectrum IV antibiotics (piperacillin-tazobactam + vancomycin + clindamycin), ICU admission
- Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score for clinical suspicion

**Descending Necrotizing Mediastinitis:**
- Most lethal complication of dental infection (mortality 25-40%)
- Pathway: Retropharyngeal space → posterior mediastinum (via danger space)
- Presentation: Chest pain, dyspnea, subcutaneous emphysema
- Imaging: CT chest with contrast showing mediastinal widening, gas, fluid
- Management: Cervical + thoracic drainage, broad-spectrum antibiotics, ICU
- Requires cardiothoracic surgery involvement

### Pharmacogenomics in Dental Pain Management

**Relevant Genetic Variants:**
- CYP2D6 polymorphisms: Affect codeine/tramadol metabolism
  - Poor metabolizers: No analgesic effect from codeine (7-10% of population)
  - Ultra-rapid metabolizers: Excessive opioid effect, respiratory depression risk
- CYP2C9 polymorphisms: Affect NSAID metabolism
  - Poor metabolizers: Increased bleeding risk with NSAIDs
- OPRM1 (mu-opioid receptor) variants: Affect opioid sensitivity
- COMT (catechol-O-methyltransferase) variants: Affect pain perception and analgesic response
- Clinical utility: Limited but growing; pharmacogenomic testing may guide analgesic selection in future

**Opioid-Free Dental Pain Management Protocols:**
- ADA policy statement supports non-opioid first-line management
- Ibuprofen 400mg + Acetaminophen 500mg is non-inferior to opioid combinations for most dental procedures
- Pre-emptive multimodal analgesia: NSAID + acetaminophen given 1 hour pre-procedure
- Long-acting local anesthetics (bupivacaine, liposomal bupivacaine) extend post-procedural analgesia
- Dexamethasone: Adjunctive anti-inflammatory reduces post-surgical pain and swelling

### Artificial Intelligence in Dental Emergency Triage

**Current Applications:**
- AI-powered triage chatbots for dental symptom assessment
- Machine learning algorithms for radiographic caries and periapical pathology detection
- Natural language processing for dental emergency call center triage
- Predictive models for infection severity and hospitalization risk

**Validation Studies:**
- AI caries detection: Sensitivity 75-95%, specificity 80-95% depending on model
- Periapical pathology detection: AUC 0.85-0.95 in recent studies
- Triage accuracy: Limited validation data; promising but not yet replacing clinical judgment
- Bias concerns: Training data may not represent diverse patient populations

### Systems-Level Emergency Preparedness

**Hospital-Dental Integration:**
- Emergency department dental protocols: Standardized assessment and referral pathways
- On-call dental coverage at trauma centers
- Teledentistry consultation for ED providers
- Dental emergency protocols for mass casualty events

**Public Health Considerations:**
- Dental emergency visit tracking for surveillance
- Community dental emergency preparedness planning
- Disaster dentistry protocols (identification, treatment prioritization)
- Social vulnerability indices to predict dental emergency burden

**Quality Metrics:**
- Time from avulsion to reimplantation
- Antibiotic stewardship metrics for dental infections
- ED dental visit diversion rates
- Post-emergency follow-up completion rates
- Patient-reported outcome measures for dental trauma`,
      keyTerms: [
        { term: 'DPSC', definition: 'Dental pulp stem cells — multipotent mesenchymal stem cells derived from dental pulp tissue with regenerative potential for dentin, bone, and neural tissue' },
        { term: 'LRINEC score', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis — a scoring system using lab values (WBC, hemoglobin, sodium, glucose, CRP, creatinine) to aid diagnosis of necrotizing fasciitis' },
        { term: 'descending necrotizing mediastinitis', definition: 'Life-threatening spread of head/neck infection into the mediastinum via deep cervical fascial spaces, with mortality of 25-40%' },
        { term: 'CYP2D6', definition: 'Cytochrome P450 2D6 — liver enzyme critical for metabolism of codeine and other opioids; genetic polymorphisms affect analgesic efficacy and safety' },
        { term: 'cell homing', definition: 'Regenerative strategy that recruits endogenous stem cells to the site of injury using growth factors and scaffolds, without external cell transplantation' },
      ],
      clinicalNotes: `Advanced clinical considerations:
1. Regenerative endodontics has transformed management of necrotic immature teeth — triple antibiotic paste or Ca(OH)₂ followed by blood clot scaffold and MTA barrier is the current standard
2. For severe odontogenic infections: CT with contrast is essential for surgical planning; do not rely on clinical exam alone for deep space infections
3. Descending necrotizing mediastinitis has 25-40% mortality even with treatment — maintain high clinical suspicion in any dental infection with chest symptoms
4. Pharmacogenomic considerations are relevant when prescribing codeine (CYP2D6 poor/ultra-rapid metabolizers) — prefer ibuprofen + acetaminophen as first-line
5. AI-assisted radiographic interpretation is emerging as a clinical tool but should complement, not replace, clinical judgment
6. Document timing meticulously in all dental trauma cases — minutes matter for avulsion prognosis, and medicolegal review is common
7. Necrotizing fasciitis from dental origin: LRINEC score ≥6 warrants urgent surgical exploration regardless of clinical appearance`,
    },
  },

  media: [],

  citations: [
    {
      id: 'iadt-guidelines-2020',
      type: 'guideline',
      title: 'International Association of Dental Traumatology Guidelines for the Management of Traumatic Dental Injuries',
      authors: ['Fouad, A.F.', 'Abbott, P.V.', 'Tsilingaridis, G.'],
      source: 'Dental Traumatology',
      chapter: '2020',
    },
    {
      id: 'ada-pain-management',
      type: 'guideline',
      title: 'ADA Clinical Practice Guidelines: Management of Acute Dental Pain',
      authors: ['American Dental Association'],
      source: 'Journal of the American Dental Association',
      chapter: '2023',
    },
    {
      id: 'andersson-dental-trauma',
      type: 'textbook',
      title: 'Textbook and Color Atlas of Traumatic Injuries to the Teeth',
      authors: ['Andersson, L.', 'Andreasen, J.O.', 'Day, P.'],
      source: 'Wiley-Blackwell',
      chapter: 'Chapters 1-30',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-pain-management', targetType: 'topic', relationship: 'related', label: 'Dental Pain Management' },
    { targetId: 'topic-accessing-dental-no-insurance', targetType: 'topic', relationship: 'related', label: 'Accessing Dental Care Without Insurance' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['tooth', 'alveolar-bone', 'periodontal-ligament'],
    topics: ['emergency-medicine', 'trauma', 'infection', 'pain-management', 'pharmacology'],
    keywords: ['dental emergency', 'avulsion', 'abscess', 'tooth fracture', 'Ludwig angina', 'dental trauma', 'dental pain'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default dentalEmergencyGuideContent;
