/**
 * Tooth Extraction - Comprehensive Educational Content
 *
 * Covers indications, techniques, complications, and healing
 * for dental extractions at all complexity levels.
 */

import { EducationalContent } from '../../types';

export const toothExtraction: EducationalContent = {
  id: 'procedure-tooth-extraction',
  type: 'topic',
  name: 'Tooth Extraction',
  nameEs: 'Extraccion Dental',
  alternateNames: [
    'Dental Extraction',
    'Tooth Removal',
    'Exodontia',
    'Pulling a Tooth',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Tooth extraction is when a dentist or oral surgeon removes a tooth from your mouth. It may be needed if a tooth is badly damaged, infected, or crowding other teeth.',
      explanation: `**What Is a Tooth Extraction?**

A tooth extraction means removing a tooth from your mouth. Sometimes a tooth is too damaged or sick to be saved, so it needs to come out.

**Why Would You Need a Tooth Extracted?**

- **Severe decay**: A cavity so big the tooth cannot be fixed
- **Infection**: The tooth is infected and cannot be treated
- **Gum disease**: The gums and bone cannot hold the tooth anymore
- **Broken tooth**: The tooth is broken too badly to repair
- **Crowding**: Not enough room for all your teeth (often for braces)
- **Wisdom teeth**: They are stuck or causing problems

**What Happens During an Extraction?**

1. **Numbing**: The dentist gives you medicine so you do not feel pain
2. **Loosening**: The dentist gently rocks the tooth to loosen it
3. **Removing**: The tooth is lifted out of its socket
4. **Gauze**: You bite on gauze to stop bleeding

**Two Types of Extractions:**

**Simple Extraction:**
- For teeth you can see in your mouth
- The dentist uses tools to loosen and lift the tooth
- Usually quick and easy

**Surgical Extraction:**
- For teeth that are broken or stuck under the gum
- May need a small cut in the gum
- Wisdom teeth often need this type

**After the Extraction:**

**Do:**
- Bite on gauze for 30-45 minutes
- Use ice on your face (20 minutes on, 20 off)
- Eat soft foods
- Take pain medicine as directed
- Rest for a day

**Do NOT:**
- Spit forcefully
- Use a straw (the sucking can pull out the blood clot)
- Smoke
- Touch the area with your tongue or fingers
- Rinse your mouth vigorously for 24 hours

**Healing:**

- Bleeding should stop within a few hours
- Swelling is normal for 2-3 days
- Full healing takes 1-2 weeks
- The hole fills in with new bone over months`,
      keyTerms: [
        { term: 'extraction', definition: 'Removing a tooth from your mouth' },
        { term: 'socket', definition: 'The hole in the jawbone where the tooth was' },
        { term: 'blood clot', definition: 'A clump of blood that forms in the socket to help healing' },
        { term: 'wisdom teeth', definition: 'The last teeth to come in, in the very back of your mouth' },
        { term: 'surgical extraction', definition: 'When a small cut is needed to remove a tooth' },
      ],
      analogies: [
        'A blood clot in the socket is like a scab on a cut - it protects the area while it heals.',
        'Removing a tooth is like gently wiggling a fence post until it comes free from the ground.',
        'Using a straw after an extraction is like trying to keep a bandage on while pulling it - it can make things worse.',
      ],
      examples: [
        'If you have a badly broken tooth that cannot be fixed with a crown, it may need to be extracted.',
        'Many teenagers have their wisdom teeth extracted because there is not enough room in their mouths.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tooth extraction involves removal of a tooth from its alveolar socket. Techniques range from simple to surgical, with success depending on proper technique, hemostasis, and post-operative care to prevent complications like dry socket.',
      explanation: `## Indications for Extraction

**Non-Restorable Teeth:**
- Extensive caries
- Severe periodontal disease
- Vertical root fracture
- Failed endodontic treatment
- Tooth resorption

**Other Indications:**
- Orthodontic treatment planning
- Impacted teeth
- Pre-prosthetic preparation
- Pre-radiation therapy
- Supernumerary teeth

## Types of Extractions

**Simple (Closed) Extraction:**

| Characteristic | Description |
|----------------|-------------|
| Visibility | Tooth fully erupted, visible |
| Technique | Forceps and elevators only |
| Incision | None required |
| Bone removal | None |
| Time | Usually 20-30 minutes |

**Surgical (Open) Extraction:**

| Characteristic | Description |
|----------------|-------------|
| Visibility | Tooth impacted or broken |
| Technique | Flap, bone removal, sectioning |
| Incision | Required |
| Bone removal | Often necessary |
| Time | 30-60+ minutes |

## Simple Extraction Technique

**Instruments:**

*Elevators:*
- Break periodontal ligament fibers
- Elevate tooth in socket
- Types: Straight, curved, paired

*Forceps:*
- Grasp crown or root
- Specific designs for each tooth
- Apply controlled force

**Steps:**
1. Administer local anesthesia
2. Luxate with elevator (break PDL attachment)
3. Apply forceps to crown
4. Grasp tooth firmly
5. Apply rotational and bucco-lingual forces
6. Deliver tooth from socket
7. Inspect root(s) for completeness
8. Compress socket (reduce expansion)
9. Place gauze, instruct patient to bite

## Post-Extraction Healing

**Stages:**

| Time | Event |
|------|-------|
| Minutes | Blood clot formation |
| Days 1-3 | Inflammatory phase |
| Days 4-7 | Granulation tissue |
| Weeks 2-3 | Epithelial coverage |
| Weeks 4+ | Bone regeneration begins |
| Months 3-6 | Socket remodeling complete |

**Alveolar Ridge Resorption:**
- Always occurs after extraction
- Greatest in first 3-6 months
- More on buccal than lingual
- May impact future implant placement

## Complications

**Dry Socket (Alveolar Osteitis):**

*Risk Factors:*
- Smoking (most significant)
- Oral contraceptives
- Difficult extraction
- Poor oral hygiene
- History of dry socket

*Symptoms:*
- Severe pain starting day 2-4
- Empty socket (clot lost)
- Visible bone
- Bad taste/odor
- Pain radiating to ear

*Treatment:*
- Irrigation with saline
- Medicated dressing (eugenol-based)
- Analgesics
- May need repeated dressing changes

**Other Complications:**

| Complication | Management |
|--------------|------------|
| Excessive bleeding | Additional gauze, hemostatic agents |
| Root tip fracture | Retrieve if accessible, or leave if small/deep |
| Tuberosity fracture | May need to smooth bone |
| Sinus communication | Special care, avoid blowing nose |
| Nerve damage | Usually temporary; monitor |
| Jaw fracture | Rare; surgical repair |

## Post-Operative Instructions

**First 24 Hours:**
- Bite on gauze 30-45 minutes
- No rinsing, spitting, or straws
- No smoking
- Cold compress for swelling
- Soft diet
- Pain medication as prescribed

**After 24 Hours:**
- Gentle warm salt water rinses
- Continue soft diet
- Avoid extraction site when brushing
- No smoking for at least 72 hours

**When to Call Dentist:**
- Bleeding that does not stop
- Severe pain after day 3
- Fever
- Difficulty swallowing or breathing
- Numbness persisting >24 hours`,
      keyTerms: [
        { term: 'alveolar osteitis', definition: 'Dry socket; painful condition when blood clot is lost from extraction site' },
        { term: 'luxation', definition: 'Loosening the tooth by breaking periodontal ligament fibers' },
        { term: 'elevator', definition: 'Instrument used to break periodontal attachment and elevate tooth' },
        { term: 'forceps', definition: 'Instrument used to grasp and remove tooth from socket' },
        { term: 'oroantral communication', definition: 'Opening between mouth and maxillary sinus after upper molar extraction' },
        { term: 'hemostasis', definition: 'Stopping bleeding; achieved with pressure, sutures, or hemostatic agents' },
      ],
      analogies: [
        'Luxating a tooth with an elevator is like prying a rock out of the ground - you break the connections holding it in place.',
        'Dry socket is like losing the protective scab on a wound - the raw bone is exposed and painful.',
        'The blood clot is like a natural bandage that protects the socket while new tissue grows underneath.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exodontia requires understanding of dental anatomy, biomechanical principles, surgical technique, and healing biology. Complications can be minimized through proper assessment, technique, and post-operative management.',
      explanation: `## Anatomical Considerations

**Root Anatomy by Tooth:**

| Tooth | Roots | Anatomy Notes |
|-------|-------|---------------|
| Maxillary incisors | 1 | Thin buccal bone |
| Maxillary canines | 1 (long) | Often longest root |
| Maxillary premolars | 1-2 | Proximity to sinus |
| Maxillary molars | 3 (MB, DB, P) | Sinus relationship |
| Mandibular incisors | 1 | Thin roots |
| Mandibular premolars | 1 | May have 2 canals |
| Mandibular molars | 2 (M, D) | IAN proximity |

**Anatomic Hazards:**

*Maxilla:*
- Maxillary sinus proximity
- Nasopalatine vessels/nerve
- Greater palatine vessels

*Mandible:*
- Inferior alveolar nerve
- Mental nerve/foramen
- Lingual nerve
- Submandibular space

## Surgical Extraction Principles

**Flap Design:**

| Type | Indication | Description |
|------|------------|-------------|
| Envelope | Limited access needed | Sulcular incision only |
| Three-corner | Moderate access | Sulcular + one vertical release |
| Four-corner | Maximum access | Sulcular + two vertical releases |

*Principles:*
- Base wider than free margin (blood supply)
- Avoid vital structures
- Include keratinized tissue
- Full-thickness to bone

**Bone Removal:**

*Indications:*
- Impacted teeth
- Ankylosis
- Hypercementosis
- Limited access

*Technique:*
- High-speed handpiece with bur
- Copious irrigation
- Avoid thermal damage
- Remove only what is necessary

**Tooth Sectioning:**

*Indications:*
- Multi-rooted teeth
- Divergent roots
- Curved roots
- Preserve bone

*Technique:*
- Section at furcation
- Separate roots
- Remove individually
- Less bone removal needed

## Impacted Third Molars

**Classification (Pell and Gregory):**

*Relationship to Ramus:*
| Class | Description |
|-------|-------------|
| I | Space between ramus and 2nd molar |
| II | Half of crown covered by ramus |
| III | Fully within ramus |

*Depth:*
| Position | Description |
|----------|-------------|
| A | Occlusal plane level |
| B | Between occlusal and cervical |
| C | Below cervical line of 2nd molar |

**Angulation (Winter):**
- Mesioangular (most common, easiest)
- Vertical
- Horizontal
- Distoangular (most difficult)

**Surgical Approach:**

1. Anesthesia (IAN block + long buccal)
2. Flap reflection
3. Bone removal (buccal, distal, occlusal)
4. Sectioning if needed
5. Elevation and delivery
6. Socket debridement
7. Irrigation
8. Primary closure (usually)

## Complications - Advanced Management

**Oroantral Communication (OAC):**

*Diagnosis:*
- Positive nose-blow test
- Visible communication
- Air/fluid passage

*Management by Size:*
| Size | Treatment |
|------|-----------|
| <2mm | Usually heals spontaneously |
| 2-6mm | Buccal advancement flap |
| >6mm | Buccal fat pad, palatal flap |

*Post-Op Instructions:*
- Nasal decongestants
- No nose blowing
- Sneeze with mouth open
- No straws
- Antibiotics (coverage for sinus flora)

**Inferior Alveolar Nerve Injury:**

*Risk Factors:*
- Impacted 3rd molars
- Root proximity to canal
- Surgical difficulty

*Presentation:*
- Numbness of lower lip, chin
- Altered sensation
- Most recover (weeks to months)

*Prevention:*
- Pre-operative CBCT if indicated
- Coronectomy consideration
- Careful surgical technique

**Root Tip Management:**

*Leave if:*
- <3mm
- Deep (risk to nerve/sinus)
- Not infected
- Asymptomatic

*Remove if:*
- Infected
- Patient symptomatic
- Pre-radiation
- Implant planned
- Easily accessible

## Medically Complex Patients

**Anticoagulation:**

| Situation | Recommendation |
|-----------|----------------|
| Warfarin INR <3.5 | Proceed with local measures |
| Warfarin INR >3.5 | Consult physician |
| DOACs | Timing considerations; local measures usually sufficient |
| Dual antiplatelet | Consult; usually proceed |

*Local Hemostatic Measures:*
- Pressure with gauze
- Gelfoam, Surgicel
- Sutures
- Tranexamic acid mouthwash

**Bisphosphonates/Denosumab:**

*Risk Assessment:*
- IV > oral bisphosphonates
- Duration of therapy
- Concurrent corticosteroids

*Prevention:*
- Pre-treatment dental clearance
- Atraumatic technique
- Primary closure
- Antibiotics (controversial)
- Informed consent`,
      keyTerms: [
        { term: 'Pell and Gregory classification', definition: 'System classifying impacted third molars by ramus relationship and depth' },
        { term: 'coronectomy', definition: 'Intentional removal of crown only, leaving roots to avoid nerve injury' },
        { term: 'OAC', definition: 'Oroantral communication; opening between oral cavity and maxillary sinus' },
        { term: 'hypercementosis', definition: 'Excessive cementum deposition on root; complicates extraction' },
        { term: 'ankylosis', definition: 'Fusion of tooth to bone; no periodontal ligament' },
        { term: 'buccal fat pad', definition: 'Adipose tissue used for closure of large oroantral communications' },
      ],
      clinicalNotes: 'Mesioangular impactions are typically easiest; distoangular most difficult. CBCT indicated when radiographs show root-canal superimposition. Coronectomy is viable alternative when roots intimate with IAN canal. Most anticoagulated patients can be managed with local measures without medication changes.',
    },
    4: {
      level: 4,
      summary: 'Advanced exodontia integrates evidence-based protocols, understanding of healing biology, management of complex medical conditions, and techniques for socket preservation and immediate implant placement.',
      explanation: `## Evidence-Based Protocols

**Third Molar Extraction:**

*Indications for Removal:*
- Pericoronitis (recurrent)
- Caries (unrestorable)
- Periodontal defect on 2nd molar
- Pathology (cyst, tumor)
- Orthodontic requirement
- Pre-prosthetic

*Prophylactic Removal (Controversy):*
- AAOMS supports early removal of impacted teeth
- Cochrane: Insufficient evidence for asymptomatic removal
- Shared decision-making approach

**Antibiotic Prophylaxis:**

*Not Routinely Indicated For:*
- Simple extractions
- Healthy patients

*Consider For:*
- Surgical extractions in immunocompromised
- High-risk cardiac conditions (per AHA)
- Significant pericoronitis
- Prolonged procedure with bone removal

**Corticosteroid Use:**

*Third Molar Surgery:*
| Outcome | Evidence |
|---------|----------|
| Swelling reduction | Strong |
| Trismus reduction | Moderate |
| Pain reduction | Moderate |

*Regimens:*
- Dexamethasone 8mg pre-op (most studied)
- May continue 4mg for 2 days
- Submucosal injection effective

## Socket Healing Biology

**Healing Phases - Detailed:**

*Inflammatory Phase (Days 1-7):*
- Platelet aggregation, clot formation
- Neutrophil infiltration (peak day 2)
- Macrophage transition (days 3-4)
- Angiogenesis initiation
- Growth factor release (PDGF, TGF-β, VEGF)

*Proliferative Phase (Days 7-21):*
- Granulation tissue formation
- Epithelial migration over surface
- Woven bone formation begins
- Osteoclasts resorb bundle bone

*Remodeling Phase (Weeks 3-Months):*
- Woven bone → lamellar bone
- Socket fills with new bone
- External resorption continues
- Final ridge shape at 6-12 months

**Ridge Resorption:**

*Pattern:*
- Horizontal: 29-63% at 6 months
- Vertical: 11-22% at 6 months
- Buccal > lingual resorption
- Mandible > maxilla

*Factors Affecting:*
| More Resorption | Less Resorption |
|-----------------|-----------------|
| Multiple extractions | Single tooth |
| Traumatic extraction | Atraumatic technique |
| Thin buccal plate | Thick buccal bone |
| Immediate denture | No denture |
| No preservation | Socket grafting |

## Socket Preservation

**Rationale:**
- Maintain ridge dimensions
- Facilitate future implant placement
- Reduce need for augmentation
- Better prosthetic outcomes

**Techniques:**

*Bone Grafting:*
| Material | Source | Properties |
|----------|--------|------------|
| Autograft | Patient | Osteogenic, limited supply |
| Allograft | Human donor | Osteoconductive |
| Xenograft | Bovine/porcine | Slow resorption |
| Alloplast | Synthetic | Varies by type |

*Barrier Membranes:*
- Resorbable (collagen): 4-6 weeks barrier
- Non-resorbable (PTFE): Requires removal
- Cover graft to prevent soft tissue ingrowth

**Evidence:**
- Grafting reduces horizontal resorption by ~50%
- Vertical preservation less predictable
- Type of graft material may not significantly differ
- Primary closure improves outcomes

## Immediate Implant Placement

**Advantages:**
- Reduced treatment time
- One surgical procedure
- Patient preference
- May preserve ridge dimensions

**Requirements:**
| Factor | Requirement |
|--------|-------------|
| Infection | Absence of acute infection |
| Bone | Adequate apical bone for stability |
| Socket | Intact buccal wall preferred |
| Soft tissue | Sufficient for closure/healing |

**Considerations:**
- Jumping gap (implant-socket wall distance)
- Graft placement in gap
- Immediate vs delayed loading
- Provisional restoration options

## Complex Medical Scenarios

**MRONJ Risk Management:**

*Risk Stratification:*
| Risk | Therapy | Management |
|------|---------|------------|
| Low | Oral BP <4 years | Standard extraction |
| Moderate | Oral BP >4 years, comorbidities | Conservative approach |
| High | IV BP, concurrent steroids | Consider alternatives |

*Surgical Protocol:*
- Informed consent discussing risk
- Atraumatic technique
- Socket debridement
- Primary closure
- Antibiotics (perioperative)
- Close follow-up

**Radiation Patients:**

*Pre-Radiation:*
- Extract questionable teeth
- Allow 14-21 days healing before XRT
- Aggressive dental management

*Post-Radiation:*
- Risk of osteoradionecrosis
- Avoid extraction if possible
- If needed: Antibiotics, HBO controversial
- Conservative approach

**Bleeding Disorders:**

*Inherited Coagulopathies:*
- Factor replacement (consult hematology)
- Antifibrinolytic agents (tranexamic acid)
- Local measures

*Acquired (Anticoagulation):*
- Generally do not stop/bridge for dental procedures
- Local hemostatic measures effective
- Reversal agents for severe bleeding only`,
      keyTerms: [
        { term: 'socket preservation', definition: 'Grafting and membrane techniques to maintain ridge dimensions after extraction' },
        { term: 'bundle bone', definition: 'Tooth-dependent alveolar bone that resorbs after extraction' },
        { term: 'jumping gap', definition: 'Space between implant and socket wall requiring graft material' },
        { term: 'MRONJ', definition: 'Medication-Related Osteonecrosis of the Jaw; complication of antiresorptive therapy' },
        { term: 'osteoradionecrosis', definition: 'Bone necrosis following radiation therapy; complicates extraction' },
        { term: 'HBO', definition: 'Hyperbaric oxygen therapy; controversial adjunct for extraction in radiated patients' },
      ],
      clinicalNotes: 'Socket preservation significantly reduces horizontal ridge resorption - consider for future implant sites. Immediate implant placement requires careful case selection; intact buccal wall and absence of active infection are key. Current evidence supports continuing anticoagulation for dental extractions with local hemostatic measures. MRONJ risk requires thorough discussion and documentation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary exodontia research explores molecular mechanisms of socket healing, biomaterial development for ridge preservation, precision approaches to complex extractions, and regenerative strategies for minimizing post-extraction deformity.',
      explanation: `## Molecular Healing Biology

**Signaling Cascades:**

*Early Phase:*
| Factor | Source | Function |
|--------|--------|----------|
| PDGF | Platelets | Fibroblast migration |
| TGF-β | Platelets, macrophages | Matrix synthesis |
| VEGF | Multiple | Angiogenesis |
| IL-1β, TNF-α | Macrophages | Inflammation regulation |

*Bone Formation Phase:*
| Factor | Function |
|--------|----------|
| BMP-2/7 | Osteoblast differentiation |
| Wnt signaling | Osteogenesis regulation |
| RANK/RANKL/OPG | Bone remodeling |

**Bundle Bone Dynamics:**

*Mechanism of Resorption:*
- Bundle bone is tooth-dependent
- PDL fibers insert into bundle bone
- Loss of PDL → loss of stimulus
- Osteoclast-mediated resorption
- Cannot be prevented, only minimized

## Biomaterial Advances

**Novel Graft Materials:**

*Bioactive Materials:*
| Type | Mechanism | Evidence |
|------|-----------|----------|
| Growth factor-loaded | BMP-2 incorporation | Limited clinical data |
| Strontium-substituted | Enhanced osteogenesis | Emerging |
| Nano-hydroxyapatite | Improved osteoconduction | Moderate |
| 3D-printed scaffolds | Customized architecture | Research phase |

**Membrane Technology:**

*Evolution:*
- First generation: PTFE (non-resorbable)
- Second generation: Collagen (resorbable)
- Third generation: Bioactive, growth factor-loaded

*Active Barrier Concepts:*
- Growth factor release
- Antimicrobial properties
- Enhanced cell recruitment
- Improved angiogenesis

**PRF (Platelet-Rich Fibrin):**

*Advantages:*
- Autologous
- Growth factor concentrate
- Fibrin scaffold
- Easy preparation

*Applications:*
- Socket preservation
- Soft tissue healing
- Membrane function
- Combined with bone graft

*Evidence:*
- Improved soft tissue healing
- Possible ridge preservation benefit
- Reduced dry socket incidence
- More studies needed

## Precision Exodontia

**Computer-Guided Extraction:**

*Applications:*
- Complex impactions
- Nerve proximity
- Planned immediate implant
- Orthodontic extractions

*Technology:*
- CBCT-based planning
- 3D-printed surgical guides
- Virtual surgery simulation
- Real-time navigation (emerging)

**Minimally Invasive Techniques:**

*Physics Forceps:*
- Bumper mechanism
- Rotational force
- Reduced buccal bone trauma
- May preserve ridge better

*Piezosurgery:*
- Ultrasonic bone cutting
- Selective tissue cutting
- Preserves soft tissue
- Reduced thermal damage

*Vertical Extraction System:*
- Purely vertical force
- No buccal expansion
- Preserves bone and soft tissue
- Selected cases

## Complex Extractions

**Ankylosis Management:**

*Diagnosis:*
- Absence of PDL space on radiograph
- High percussion sound
- No mobility

*Technique:*
- Tooth sectioning essential
- Periotome to break fusion
- Piezosurgery useful
- Trough cutting around root
- Patience and technique over force

**Third Molar Complications - Prevention:**

*IAN Injury Prevention:*
| Risk Factor | Radiographic Sign | Strategy |
|-------------|-------------------|----------|
| Root contact | Narrowing, darkening | CBCT, coronectomy |
| Canal deflection | Root deviation | Staged approach |
| Superimposition | Cannot assess | CBCT assessment |

*Coronectomy Outcomes:*
- IAN injury: <1% vs 5-8% with extraction
- Root migration: Common but rarely problematic
- Need for re-intervention: ~5%
- Contraindicated if mobile or infected

## Future Directions

**Socket Engineering:**

*Cell-Based Approaches:*
- Stem cell seeding of scaffolds
- Autologous bone marrow cells
- Periosteal cell harvest
- Early research phase

*Smart Biomaterials:*
- Drug-eluting grafts
- Growth factor release kinetics
- Responsive materials
- Antimicrobial properties

**Predictive Analytics:**

*Machine Learning Applications:*
- Surgical difficulty prediction
- Complication risk assessment
- Healing outcome prediction
- Treatment planning optimization

## Quality Metrics

**Outcome Measures:**

| Metric | Target |
|--------|--------|
| Dry socket rate | <5% |
| Nerve injury (3rd molar) | <2% permanent |
| OAC closure success | >95% |
| Socket preservation success | >90% bone fill |

**Research Priorities:**

1. Optimal socket preservation protocols
2. Prevention of ridge resorption
3. Immediate implant outcomes long-term
4. MRONJ prevention strategies
5. Nerve injury prevention and treatment
6. Biomaterial development`,
      keyTerms: [
        { term: 'PRF', definition: 'Platelet-Rich Fibrin; autologous blood concentrate for enhanced healing' },
        { term: 'piezosurgery', definition: 'Ultrasonic bone cutting technique that preserves soft tissue' },
        { term: 'physics forceps', definition: 'Extraction instrument using bumper mechanism for vertical force application' },
        { term: 'coronectomy', definition: 'Intentional partial removal leaving roots when IAN injury risk is high' },
        { term: 'RANK/RANKL/OPG', definition: 'Receptor Activator of Nuclear factor Kappa-B signaling system regulating bone remodeling' },
        { term: 'bundle bone', definition: 'Tooth-dependent alveolar bone containing PDL fiber insertions; resorbs after extraction' },
      ],
      clinicalNotes: `Research translation priorities:
1. Socket preservation significantly reduces ridge resorption - should be standard for implant sites
2. PRF shows promise for soft tissue healing and may reduce dry socket
3. Coronectomy is evidence-based alternative when IAN injury risk is high
4. Piezosurgery and vertical extraction techniques may preserve more bone
5. Current graft materials show similar outcomes - technique may matter more
6. Computer-guided approaches emerging for complex cases
7. MRONJ prevention requires pre-treatment dental evaluation and risk stratification
8. Local hemostatic measures sufficient for most anticoagulated patients`,
    },
  },

  media: [
    {
      id: 'extraction-technique',
      type: 'diagram',
      filename: 'extraction-technique-steps.svg',
      title: 'Simple Extraction Technique',
      description: 'Step-by-step illustration of simple extraction procedure',
    },
    {
      id: 'impaction-classification',
      type: 'diagram',
      filename: 'third-molar-classification.svg',
      title: 'Third Molar Classification',
      description: 'Pell and Gregory classification of impacted third molars',
    },
  ],

  citations: [
    {
      id: 'hupp-oral-surgery',
      type: 'textbook',
      title: 'Contemporary Oral and Maxillofacial Surgery',
      authors: ['Hupp, J.R.', 'Ellis, E.', 'Tucker, M.R.'],
      source: 'Elsevier',
    },
    {
      id: 'cochrane-third-molar',
      type: 'article',
      title: 'Surgical removal versus retention for the management of asymptomatic impacted wisdom teeth',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-emergencies', targetType: 'topic', relationship: 'related', label: 'Dental Emergencies' },
    { targetId: 'procedure-dental-implants', targetType: 'topic', relationship: 'see-also', label: 'Dental Implants' },
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
  ],

  tags: {
    systems: ['dental', 'digestive'],
    structures: ['teeth', 'alveolar bone', 'oral cavity'],
    topics: ['treatment', 'oral surgery', 'extraction'],
    keywords: ['tooth extraction', 'exodontia', 'wisdom teeth', 'dry socket', 'oral surgery'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: true,
      shelf: ['surgery', 'dentistry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default toothExtraction;
