/**
 * Dental Emergencies - Comprehensive Educational Content
 *
 * Covers recognition and initial management of dental emergencies
 * including trauma, infections, pain, and hemorrhage with emphasis
 * on appropriate triage and when to seek emergency care.
 */

import { EducationalContent } from "../../types";

export const dentalEmergencies: EducationalContent = {
  id: "topic-dental-emergencies",
  type: "topic",
  name: "Dental Emergencies",
  nameEs: 'Emergencias Dentales',
  alternateNames: [
    "Dental Urgent Care",
    "Emergency Dental Care",
    "Acute Dental Problems",
  ],

  levels: {
    1: {
      level: 1,
      summary: "Dental emergencies are problems with your teeth, gums, or mouth that need quick attention. Some are very serious and need immediate care, while others can wait a day or two.",
      explanation: `**What Is a Dental Emergency?**

A dental emergency is when something happens to your teeth or mouth that causes a lot of pain, bleeding, or could get much worse without quick help.

**True Emergencies (Go to Emergency Room or Call 911):**
- Swelling in your face or neck that makes it hard to breathe or swallow
- Uncontrolled bleeding from your mouth
- Injury to your face or jaw, especially if you cannot open or close your mouth
- Tooth knocked completely out (bring the tooth with you!)

**Urgent Problems (Call Dentist Right Away):**
- Severe tooth pain that does not go away with pain medicine
- Broken tooth with sharp edges or pain
- Lost filling or crown
- Swelling in your gums or face
- Tooth that got pushed out of place

**Problems That Can Wait 1-2 Days:**
- Mild toothache
- Small chip in tooth with no pain
- Lost retainer or orthodontic wire poking

**What To Do If a Tooth Gets Knocked Out:**
1. Find the tooth
2. Pick it up by the white part (crown), NOT the root
3. Rinse gently with water if dirty - do not scrub!
4. Try to put it back in the hole (socket) if you can
5. If you cannot put it back, put it in milk or hold it in your cheek
6. Get to a dentist within 30 minutes if possible

**Managing Pain at Home:**
- Take over-the-counter pain medicine (like ibuprofen) as directed
- Apply a cold pack to your cheek (not directly on skin)
- Rinse with warm salt water
- Do NOT put aspirin directly on your gum - it can burn!`,
      keyTerms: [
        { term: "dental emergency", definition: "A problem with your teeth or mouth that needs quick attention from a dentist or doctor" },
        { term: "avulsion", definition: "When a tooth gets completely knocked out of your mouth" },
        { term: "abscess", definition: "A pocket of pus and infection, usually causing swelling and pain" },
        { term: "socket", definition: "The hole in your jaw bone where a tooth sits" },
        { term: "crown", definition: "The white part of the tooth you can see in your mouth" },
      ],
      analogies: [
        "A knocked-out tooth is like a fish out of water - it needs to get back in its socket quickly to survive.",
        "An abscess is like a pimple under your skin, but in your gum - it is full of infection that needs to come out.",
        "Think of milk as a special swimming pool that keeps a knocked-out tooth alive until you can get to the dentist.",
      ],
      examples: [
        "If your friend falls and knocks out a front tooth during a soccer game, put the tooth in milk and get to a dentist fast.",
        "If you have a toothache that wakes you up at night and your face starts swelling, call a dentist first thing in the morning.",
      ],
    },
    2: {
      level: 2,
      summary: "Dental emergencies range from life-threatening infections spreading to the airway to traumatic injuries requiring immediate intervention. Proper triage and initial management significantly affect outcomes.",
      explanation: `## Classification of Dental Emergencies

**Life-Threatening (Emergency Room/911):**
1. **Ludwig's angina**: Severe infection spreading under the tongue and throat
   - Signs: Difficulty breathing, drooling, neck swelling, fever
   - Can block airway - this is a medical emergency

2. **Uncontrolled hemorrhage**: Bleeding that does not stop with pressure
   - May indicate clotting disorder
   - Can cause significant blood loss

3. **Facial trauma with airway compromise**
   - Fractured jaw interfering with breathing
   - Multiple tooth avulsions with debris risk

**Urgent (Same-Day Dental Care):**
1. **Tooth avulsion (knocked out)**:
   - Success depends on time out of socket
   - Best outcomes if replanted within 30 minutes

2. **Dental abscess with facial swelling**:
   - Infection can spread rapidly
   - May need antibiotics and drainage

3. **Severe pain uncontrolled by medication**

4. **Dental trauma** (fractures, luxation injuries)

**Semi-Urgent (24-48 hours):**
- Moderate toothache
- Lost restoration (filling/crown)
- Minor chip without pain
- Orthodontic appliance problems

## Tooth Avulsion Management

**Steps for Permanent Tooth:**
| Step | Action | Rationale |
|------|--------|-----------|
| 1 | Handle by crown only | Avoid damaging periodontal ligament cells |
| 2 | Rinse briefly with water | Remove debris; do not scrub |
| 3 | Attempt replantation | Best chance of survival |
| 4 | If unable, store in milk | Maintains cell viability |
| 5 | Get to dentist immediately | Time is critical |

**Storage Media (best to worst):**
1. Hanks Balanced Salt Solution (Save-a-Tooth kit)
2. Milk
3. Saliva (in cheek or under tongue)
4. Saline
5. Water (worst - causes cell swelling)

**Important**: Do NOT replant baby teeth - risk of damaging developing permanent tooth

## Dental Infections

**Periapical Abscess:**
- Infection at the root tip
- Caused by bacteria entering through cavity or crack
- Symptoms: Severe pain, sensitivity to heat, swelling, bad taste

**Periodontal Abscess:**
- Infection in the gums alongside tooth
- More common in people with gum disease
- Symptoms: Swelling, pain when chewing, pus drainage

**Warning Signs of Spreading Infection:**
- Fever
- Difficulty swallowing
- Difficulty breathing
- Swelling extending to eye or neck
- Trismus (cannot open mouth)

## Pain Management

**Over-the-Counter Options:**
- Ibuprofen 400-800mg every 6-8 hours (with food)
- Acetaminophen 500-1000mg every 6 hours
- Combination: Ibuprofen + Acetaminophen alternating (more effective than either alone)

**What NOT To Do:**
- Do not place aspirin directly on gums (causes chemical burn)
- Avoid heat application to swelling (can worsen infection)
- Do not ignore spreading swelling`,
      keyTerms: [
        { term: "avulsion", definition: "Complete displacement of a tooth from its socket; dental emergency requiring immediate action" },
        { term: "Ludwig's angina", definition: "Severe bilateral infection of floor of mouth that can rapidly compromise airway", pronunciation: "LOOD-vigz an-JY-nah" },
        { term: "periapical abscess", definition: "Localized collection of pus at the root tip, usually from pulp necrosis" },
        { term: "periodontal abscess", definition: "Localized purulent infection in the gingival tissues; associated with periodontitis" },
        { term: "trismus", definition: "Limited mouth opening due to muscle spasm, often indicating spreading infection" },
        { term: "luxation", definition: "Displacement of tooth within socket without complete avulsion" },
      ],
      analogies: [
        "The periodontal ligament cells on an avulsed tooth are like a plant's roots - they need to stay moist to survive replantation.",
        "Ludwig's angina is like a fire spreading under the floor of a house - it can quickly become dangerous and needs immediate attention.",
      ],
    },
    3: {
      level: 3,
      summary: "Dental emergencies require systematic assessment based on airway compromise, hemorrhage control, infection severity, and tissue viability. Understanding anatomy, pathophysiology, and time-sensitive interventions optimizes patient outcomes.",
      explanation: `## Emergency Assessment Framework

**ABC Assessment:**
- **Airway**: Assess for obstruction, Ludwig's angina, facial fractures
- **Breathing**: Note respiratory distress, stridor, tripod positioning
- **Circulation**: Control hemorrhage, assess for shock

**Dental Emergency Categories:**

### 1. Airway-Compromising Infections

**Ludwig's Angina:**
- Bilateral submandibular space infection
- Rapidly progressive cellulitis
- Elevated/protruding tongue ("woody" floor of mouth)
- Management: IV antibiotics, airway management, surgical drainage
- Mortality: 8-10% even with treatment

**Retropharyngeal Abscess:**
- May result from dental infection spread
- Symptoms: Neck stiffness, muffled voice, drooling
- Risk of mediastinitis

**Parapharyngeal Space Infection:**
- Can cause carotid artery erosion
- Internal jugular vein thrombosis (Lemierre syndrome)

### 2. Dentoalveolar Trauma

**Tooth Fracture Classification (Ellis):**
| Class | Involvement | Clinical Appearance | Management |
|-------|-------------|---------------------|------------|
| I | Enamel only | White chip | Smooth edges, sealant |
| II | Enamel + dentin | Yellow dentin visible | Temporary coverage, restorative |
| III | Pulp exposure | Red/bleeding spot | Emergent pulp therapy |

**Luxation Injuries:**
- **Concussion**: Tender but not mobile or displaced
- **Subluxation**: Mobile but not displaced
- **Extrusion**: Partial avulsion, appears elongated
- **Lateral luxation**: Displaced labially or lingually
- **Intrusion**: Pushed into socket (worst prognosis)

**Avulsion Physiology:**
- Periodontal ligament (PDL) cell viability is key
- PDL cells die without moisture and proper pH
- Dry time >60 minutes: Poor prognosis (ankylosis, resorption)
- Optimal: Replant within 5 minutes

**Avulsion Splinting:**
- Flexible splint (wire + composite) for 2 weeks
- Non-rigid splinting allows physiologic movement
- Avoid prolonged splinting (promotes ankylosis)

### 3. Hemorrhage

**Post-Extraction Hemorrhage:**

*Local Measures:*
- Direct pressure with gauze (30 min)
- Hemostatic agents (Gelfoam, Surgicel, thrombin)
- Suturing
- Tranexamic acid mouthwash

*Systemic Considerations:*
- Anticoagulation status (warfarin, DOACs)
- Coagulopathies (hemophilia, von Willebrand)
- Liver disease
- Thrombocytopenia

**Reversal Considerations:**
- Warfarin: Vitamin K (slow), FFP, PCC (rapid)
- DOACs: Idarucizumab (dabigatran), andexanet alfa (Xa inhibitors)
- Consult hematology for inherited coagulopathies

### 4. Odontogenic Infections

**Microbiology:**
- Polymicrobial: Anaerobes + facultative organisms
- Common: Streptococcus viridans, Prevotella, Peptostreptococcus, Fusobacterium
- Spread along fascial planes of least resistance

**Fascial Spaces:**
| Primary Spaces | Secondary Spaces |
|----------------|------------------|
| Canine | Masseteric |
| Buccal | Pterygomandibular |
| Submandibular | Temporal |
| Sublingual | Lateral pharyngeal |
| Submental | Retropharyngeal |

**Severity Indicators:**
- Fever >101F (38.3C)
- Trismus <20mm opening
- Dysphagia
- Dysphonia
- Elevation/induration of floor of mouth
- Bilateral involvement
- Immunocompromise

**Empiric Antibiotics:**
- Outpatient: Amoxicillin-clavulanate or clindamycin
- Severe/hospitalized: Ampicillin-sulbactam IV or penicillin G + metronidazole
- Penicillin allergy: Clindamycin + metronidazole

### 5. Pain Crisis

**Acute Pulpitis:**
- Reversible: Brief pain to stimuli, no spontaneous pain
- Irreversible: Prolonged pain, spontaneous episodes, may wake from sleep
- Thermal testing helps differentiate

**Dry Socket (Alveolar Osteitis):**
- Occurs 2-5 days post-extraction
- Severe pain, empty socket, exposed bone
- Risk factors: Smoking, oral contraceptives, difficult extraction
- Management: Irrigation, medicated dressing (eugenol-based)`,
      keyTerms: [
        { term: "Ellis classification", definition: "Tooth fracture classification: Class I (enamel), Class II (dentin), Class III (pulp exposure)" },
        { term: "alveolar osteitis", definition: "Dry socket; loss of blood clot after extraction causing severe pain from exposed bone" },
        { term: "fascial space", definition: "Potential anatomic compartment where infection can spread; bounded by fascial layers" },
        { term: "PDL", definition: "Periodontal ligament; connective tissue attaching tooth to bone; cell viability critical for avulsion outcomes" },
        { term: "splinting", definition: "Stabilization of traumatized teeth using wire and composite; should be flexible and short-term" },
        { term: "irreversible pulpitis", definition: "Pulp inflammation beyond recovery; requires extraction or root canal therapy" },
      ],
      clinicalNotes: "Assess all dental trauma patients for associated injuries (cervical spine, facial fractures, head injury). Ludwig's angina requires immediate surgical consultation - do not wait for imaging if clinical signs are present. Post-avulsion splinting should be flexible (allow finger pressure movement); rigid splints increase ankylosis risk.",
    },
    4: {
      level: 4,
      summary: "Advanced dental emergency management integrates evidence-based trauma protocols, sophisticated understanding of infection pathophysiology, pharmacologic considerations, and coordination with emergency medicine and surgical specialties.",
      explanation: `## Trauma: Evidence-Based Protocols

**IADT Guidelines for Avulsion:**

*Closed Apex Teeth:*
| Extra-Alveolar Dry Time | Protocol |
|------------------------|----------|
| <60 min | Replant immediately; flexible splint 2 weeks |
| >60 min or unknown | Soak in 2% NaF for 20 min before replant; splint 4 weeks |

*Open Apex Teeth (immature):*
- Possibility of pulp revascularization
- Same protocols but monitor for revascularization vs necrosis
- If necrosis: Regenerative endodontics preferred

**Post-Replantation Protocol:**
1. Splint (flexible, 2 weeks for normal PDL; 4 weeks for dry)
2. Systemic antibiotics: Doxycycline or penicillin V for 7 days
3. Tetanus prophylaxis if indicated
4. Chlorhexidine rinses
5. Soft diet, avoid incising on affected tooth
6. Root canal treatment:
   - Closed apex: Initiate within 2 weeks (before inflammatory resorption)
   - Open apex: Monitor for revascularization

**Root Resorption Types:**
- **Surface resorption**: Self-limiting, minimal
- **Inflammatory resorption**: Bacterial products from necrotic pulp; treat with RCT
- **Replacement resorption (ankylosis)**: PDL death → replaced by bone; progressive

**Prognostic Factors for Avulsed Teeth:**
- Extra-alveolar dry time (most critical)
- Storage medium
- Root development stage
- Contamination
- Alveolar bone damage

## Odontogenic Infection: Deep Space Involvement

**Anatomic Pathways:**

*Maxillary Teeth:*
- Maxillary incisors → Canine space → Infraorbital
- Maxillary molars → Buccal space, infratemporal fossa
- Risk: Cavernous sinus thrombosis via facial vein

*Mandibular Teeth:*
- Mandibular molars → Submandibular space → Ludwig's angina
- Molar roots below mylohyoid: Direct submandibular spread
- Molar roots above mylohyoid: Sublingual first

**Cavernous Sinus Thrombosis:**
- Life-threatening complication of midface infections
- Symptoms: Orbital pain, proptosis, CN III/IV/VI palsies, meningismus
- Management: IV antibiotics, anticoagulation (controversial), surgical drainage

**Ludwig's Angina Management Algorithm:**
1. Secure airway (intubation may be difficult; prepare for surgical airway)
2. IV access, fluid resuscitation
3. Broad-spectrum IV antibiotics
4. CT imaging if stable (assess extent, guide drainage)
5. Surgical drainage with through-and-through drains
6. Source control (extraction or RCT of offending tooth)
7. ICU monitoring

**Necrotizing Fasciitis:**
- Rare but devastating complication
- Rapid tissue destruction, crepitus, bullae
- Requires aggressive surgical debridement
- Mortality: 20-40% even with treatment

## Pharmacology Considerations

**Antibiotic Dosing:**
| Agent | Dose | Duration | Notes |
|-------|------|----------|-------|
| Amoxicillin | 500mg TID | 5-7 days | First-line |
| Amoxicillin-clavulanate | 875/125mg BID | 5-7 days | Beta-lactamase coverage |
| Clindamycin | 300mg QID | 5-7 days | Penicillin allergy |
| Metronidazole | 500mg TID | 5-7 days | Anaerobic coverage (combine) |
| Azithromycin | 500mg x1, then 250mg QD | 5 days | Alternative if allergies |

**Analgesic Protocols:**

*Multimodal Approach:*
- Ibuprofen 400mg + Acetaminophen 500mg q6h (superior to opioid monotherapy)
- Consider celecoxib if GI concerns
- Topical benzocaine for mucosal pain

*When Opioids Indicated:*
- Severe trauma
- Post-surgical
- Use lowest effective dose, shortest duration
- Consider prescription drug monitoring program

**Local Anesthetic Considerations:**
- Infections reduce anesthetic efficacy (low tissue pH)
- Increased vascularity → rapid systemic absorption
- Consider nerve blocks proximal to infection site
- May need supplemental anesthesia techniques

## Pediatric Considerations

**Primary Tooth Avulsion:**
- Do NOT replant (risk to permanent successor)
- Radiograph to rule out intrusion
- Monitor for space loss
- Space maintainer if significant crowding risk

**Primary Tooth Intrusion:**
- Usually re-erupt spontaneously
- Monitor for color change, mobility, abscess
- Extract if interfering with permanent tooth development

**Permanent Tooth Injuries in Children:**
- Open apex teeth have better pulp survival potential
- Regenerative endodontics preferred over traditional apexification
- Long-term follow-up essential (growth, continued root development)

## Medically Complex Patients

**Anticoagulated Patients:**
- INR <3.5: Most procedures can proceed with local measures
- DOACs: Consider timing (hold if safe per cardiology)
- Bridging rarely indicated for dental procedures

**Bisphosphonate-Related Osteonecrosis (BRONJ/MRONJ):**
- IV bisphosphonates: Higher risk than oral
- Denosumab: Similar risk profile
- Prevention: Dental clearance before starting therapy
- Treatment: Conservative (antibiotics, rinses) vs surgical

**Immunocompromised Patients:**
- Lower threshold for admission
- Broader antibiotic coverage
- Antifungal consideration if prolonged antibiotics
- Close monitoring for deterioration`,
      keyTerms: [
        { term: "IADT", definition: "International Association of Dental Traumatology; publishes evidence-based guidelines for dental trauma management" },
        { term: "replacement resorption", definition: "Ankylosis; progressive replacement of tooth structure with bone following severe PDL damage" },
        { term: "inflammatory resorption", definition: "Root resorption caused by bacterial products from necrotic pulp; treated with root canal therapy" },
        { term: "cavernous sinus thrombosis", definition: "Life-threatening complication of facial infections; presents with orbital symptoms and cranial nerve palsies" },
        { term: "MRONJ", definition: "Medication-Related Osteonecrosis of the Jaw; complication of bisphosphonates/denosumab" },
        { term: "fasciotomy", definition: "Surgical incision through fascia to decompress compartments and drain infection" },
      ],
      clinicalNotes: "IADT guidelines recommend doxycycline (not penicillin) as first-line antibiotic post-avulsion based on evidence for reducing inflammatory resorption. Root canal timing is critical: delay beyond 2 weeks in closed apex teeth allows inflammatory resorption to establish. For anticoagulated patients, local hemostatic measures are usually sufficient; reversal agents should be reserved for life-threatening hemorrhage.",
    },
    5: {
      level: 5,
      summary: "Contemporary dental emergency care encompasses advanced airway management algorithms, translational research in tissue regeneration, antimicrobial stewardship principles, and multidisciplinary integration with trauma, infectious disease, and critical care services.",
      explanation: `## Airway Management in Dental Emergencies

**Difficult Airway Predictors:**
- Ludwig's angina: Floor of mouth elevation, trismus, neck swelling
- Angioedema: May be medication-induced (ACE inhibitors)
- Facial trauma: Blood, secretions, structural distortion
- Cervical spine injury: Immobilization constraints

**Airway Algorithm for Ludwig's Angina:**

*Initial Assessment:*
1. Stable with patent airway → Prepare for controlled intubation
2. Impending obstruction → Awake fiberoptic intubation
3. Cannot intubate → Surgical airway (tracheostomy preferred)

*Key Principles:*
- Avoid sedation until airway secured (risk of complete obstruction)
- Awake fiberoptic is gold standard if expertise available
- Surgical airway may be necessary as primary approach
- Have all options available before any attempt
- Anesthesiology, ENT, oral surgery involvement essential

**Angioedema Protocol:**
- Stop offending agent (ACE inhibitor most common cause)
- Hereditary angioedema: C1 inhibitor concentrate, icatibant, ecallantide
- Allergic: Epinephrine, steroids, antihistamines
- Airway management as above

## Regenerative Approaches to Dental Trauma

**Pulp Revascularization Research:**

*Current Understanding:*
- Blood clot provides scaffold for ingrowth
- Growth factors from dentin (TGF-β, BMPs) released during irrigation
- Apical stem cells (SCAPs) contribute to tissue regeneration
- Histologic studies: Often cementum-like/bone-like tissue, not true pulp

*Optimizing Outcomes:*
- Disinfection critical (triple antibiotic paste or calcium hydroxide)
- EDTA conditioning releases growth factors
- Blood clot past apex provides stem cells
- PRP/PRF scaffolds under investigation

**Future Directions:**
- Stem cell transplantation (DPSCs, SCAPs)
- Bioactive scaffolds
- Growth factor delivery systems
- Gene therapy approaches
- Whole tooth regeneration research (early stages)

## Antimicrobial Stewardship

**Evidence-Based Prescribing:**

*When Antibiotics ARE Indicated:*
- Spreading infection (swelling, fever, lymphadenopathy, trismus)
- Systemic involvement
- Immunocompromised patient
- Unable to achieve source control (delayed treatment)

*When Antibiotics NOT Indicated:*
- Localized abscess that can be drained
- Irreversible pulpitis (pain only, no infection)
- Dry socket (not infectious - inflammatory)
- Mild pericoronitis (local measures first)

**Duration Principles:**
- Most dental infections: 5-7 days (previously 10-14 days not supported)
- Reassess at 48-72 hours
- Shorter courses if source control achieved
- Longer if immunocompromised or slow response

**Resistance Concerns:**
- Penicillin resistance increasing in oral streptococci
- Clindamycin resistance rates vary geographically
- Avoid fluoroquinolones for odontogenic infections (poor anaerobic coverage, resistance concerns)
- Reserve carbapenems for severe, resistant infections

## Multidisciplinary Integration

**Trauma Team Coordination:**

*Dental trauma in polytrauma patient:*
1. Life-threatening injuries take priority
2. Document dental injuries for later treatment
3. Store avulsed teeth appropriately
4. Splint luxated teeth temporarily if accessible
5. Definitive dental care once stabilized
6. Communicate with trauma team about follow-up needs

**Infectious Disease Consultation:**
- Necrotizing fasciitis
- Sepsis from odontogenic source
- Failed outpatient therapy
- Immunocompromised host
- Unusual organisms
- MRSA concerns

**Critical Care Considerations:**
- Ludwig's angina: Often requires ICU admission
- Airway monitoring post-drainage
- Nutrition support (NPO, soft diet progression)
- Deep vein thrombosis prophylaxis
- Glycemic control (especially diabetics)

## Special Populations

**Emergency Dental Care in Pregnancy:**

*Principles:*
- Dental treatment safe in all trimesters
- Second trimester optimal for elective procedures
- Local anesthetics (lidocaine with epinephrine) safe
- Radiographs with shielding if indicated
- Avoid NSAIDs in third trimester (ductus arteriosus)

*Antibiotics:*
- Safe: Penicillins, cephalosporins, erythromycin (except estolate)
- Avoid: Tetracyclines (tooth staining), fluoroquinolones

**Oncology Patients:**

*Pre-Chemotherapy Evaluation:*
- Eliminate infection sources
- Extract teeth with poor prognosis
- Timing: 7-14 days before myelosuppression

*During Treatment:*
- Defer elective care during nadir
- ANC <1000: Antibiotic prophylaxis for invasive procedures
- Platelet <50,000: Transfusion consideration

*Post-Radiation (Head/Neck):*
- Osteoradionecrosis risk
- Hyperbaric oxygen before extractions (controversial)
- Lifelong considerations

## Quality Metrics and Outcomes

**Avulsion Outcomes Data:**
- Replantation within 5 min: 85-97% 5-year survival
- 6-20 min dry time: 65-70% survival
- >60 min dry time: <45% survival
- Predictors: PDL viability > root development stage > storage medium

**Infection Outcomes:**
- Ludwig's angina mortality: Decreased from 50% (pre-antibiotic era) to 8% current
- Deep space infections: 90% cure with appropriate antibiotics + drainage
- Necrotizing fasciitis: 20-40% mortality despite aggressive treatment

**Research Priorities:**
- Optimal storage media for avulsed teeth (HBSS alternatives)
- Regenerative endodontics vs traditional in mature teeth
- Biomarkers for infection severity prediction
- Point-of-care diagnostics for bacterial identification
- Antimicrobial resistance surveillance`,
      keyTerms: [
        { term: "SCAPs", definition: "Stem Cells from the Apical Papilla; multipotent cells at the apex of developing teeth involved in root formation and regeneration" },
        { term: "HBSS", definition: "Hanks Balanced Salt Solution; optimal storage medium for avulsed teeth maintaining PDL cell viability" },
        { term: "icatibant", definition: "Bradykinin B2 receptor antagonist for treatment of hereditary angioedema attacks" },
        { term: "necrotizing fasciitis", definition: "Rapidly progressive deep soft tissue infection requiring emergent surgical debridement" },
        { term: "osteoradionecrosis", definition: "Bone necrosis following radiation therapy; complicates dental extractions in radiated fields" },
        { term: "antimicrobial stewardship", definition: "Evidence-based approach to optimize antibiotic use, reduce resistance, and improve outcomes" },
      ],
      clinicalNotes: `Advanced clinical pearls:
1. Ludwig's angina: If patient cannot lie flat, airway is compromised - prepare for surgical airway before any sedation attempt
2. Avulsed teeth: HBSS (Save-a-Tooth) remains gold standard; recent studies suggest coconut water may be acceptable alternative
3. Antimicrobial stewardship: Most odontogenic infections respond to 5-7 days of antibiotics; source control (drainage/extraction) is the definitive treatment
4. Regenerative endodontics: Now standard of care for necrotic immature permanent teeth; outcomes superior to traditional apexification
5. Post-radiation extractions: Consult with radiation oncology; HBO evidence is mixed but consider for high-dose fields
6. Pregnancy: Do not defer urgent dental care - untreated infection poses greater risk than treatment
7. Anticoagulated patients: Local measures usually sufficient; coordinate with prescribing physician rather than empirically holding medications`,
    },
  },

  media: [
    {
      id: "tooth-avulsion-protocol",
      type: "diagram",
      filename: "avulsion-management-flowchart.svg",
      title: "Tooth Avulsion Management Protocol",
      description: "Step-by-step algorithm for managing avulsed permanent teeth",
    },
    {
      id: "ludwig-angina-ct",
      type: "image",
      filename: "ludwig-angina-ct-scan.jpg",
      title: "Ludwig's Angina CT Imaging",
      description: "Axial CT showing bilateral submandibular space infection with airway compromise",
    },
  ],

  citations: [
    {
      id: "iadt-guidelines",
      type: "article",
      title: "International Association of Dental Traumatology Guidelines for the Management of Traumatic Dental Injuries",
      authors: ["Fouad, A.F.", "Abbott, P.V.", "Tsilingaridis, G."],
      source: "Dental Traumatology",
      url: "https://iadt-dentaltrauma.org/guidelines/",
    },
    {
      id: "hupp-ellis",
      type: "textbook",
      title: "Contemporary Oral and Maxillofacial Surgery",
      authors: ["Hupp, J.R.", "Ellis, E.", "Tucker, M.R."],
      source: "Elsevier",
    },
  ],

  crossReferences: [
    { targetId: "topic-dental-trauma", targetType: "topic", relationship: "child", label: "Dental Trauma" },
    { targetId: "topic-dental-infections", targetType: "topic", relationship: "child", label: "Dental Infections" },
    { targetId: "structure-tooth-anatomy", targetType: "structure", relationship: "related", label: "Tooth Anatomy" },
    { targetId: "topic-pediatric-dental-care", targetType: "topic", relationship: "see-also", label: "Pediatric Dental Care" },
  ],

  tags: {
    systems: ["digestive", "dental"],
    structures: ["teeth", "gums", "oral cavity", "fascial spaces"],
    topics: ["emergency", "trauma", "infection", "pain management"],
    keywords: ["dental emergency", "avulsion", "abscess", "Ludwig angina", "tooth trauma", "dental pain"],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["emergency medicine", "surgery"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default dentalEmergencies;
