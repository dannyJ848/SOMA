/**
 * Orthodontics - Comprehensive Educational Content
 *
 * Covers malocclusion, braces and other appliances, treatment timing,
   and the role of orthodontics in correcting dental and skeletal
   discrepancies.
 */

import { EducationalContent } from '../types';

export const orthodontics: EducationalContent = {
  id: 'topic-orthodontics',
  type: 'topic',
  name: 'Orthodontics',
  nameEs: 'Ortodoncia',
  alternateNames: [
    'Braces',
    'Malocclusion',
    'Teeth Straightening',
    'Dental Alignment',
    'Occlusal Correction',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Orthodontics is the branch of dentistry that corrects teeth and jaw alignment problems. Braces, clear aligners, and other appliances move teeth gradually to improve appearance, function, and oral health.',
      explanation: `**What is Orthodontics?**

Orthodontics is a specialty of dentistry that focuses on straightening teeth and correcting jaw problems. An orthodontist is a dentist who has completed additional training (2-3 years) to become an expert in moving teeth.

**Common Problems Orthodontics Treats:**

- **Crooked teeth** - Teeth that don't line up properly
- **Crowding** - Too many teeth for the space available
- **Spacing** - Gaps between teeth
- **Overbite** - Upper front teeth stick out too far
- **Underbite** - Lower teeth extend past upper teeth
- **Crossbite** - Teeth don't match when biting
- **Open bite** - Front teeth don't touch when biting

**Types of Orthodontic Treatment:**

**1. Traditional Braces**
- Metal brackets on each tooth
- Wires connecting the brackets
- Rubber bands (sometimes)
- Most common type
- Work for almost all problems

**2. Clear Aligners (like Invisalign)**
- Clear plastic trays
- Removable for eating and cleaning
- Nearly invisible
- Work for mild to moderate problems
- Must be worn 20-22 hours per day

**3. Other Appliances:**
- Palatal expander: Widens upper jaw
- Headgear: Corrects bite problems
- Retainers: Hold teeth in place after treatment

**How Long Does Treatment Take?**
- Usually 18-24 months for braces
- Some cases: 12 months
- Complex cases: 3 years or more
- Clear aligners: Similar timeline for many cases

**When to Start:**
- Age 7: First orthodontic evaluation
- Some problems treated early (ages 7-10)
- Most treatment: Ages 11-15 (most permanent teeth)
- Adults: Treatment works at any age!

**Benefits of Straight Teeth:**
- Easier to clean (fewer cavities and gum disease)
- Better chewing and speech
- Less wear on teeth
- More confident smile
- Better long-term oral health`,
      keyTerms: [
        { term: 'orthodontics', definition: 'Dental specialty focused on straightening teeth and correcting bite problems' },
        { term: 'malocclusion', definition: 'Bad bite; teeth that don\'t fit together properly' },
        { term: 'braces', definition: 'Metal brackets and wires used to straighten teeth' },
        { term: 'aligners', definition: 'Clear plastic trays that gradually move teeth' },
        { term: 'retainer', definition: 'Appliance worn after braces to hold teeth in place' },
      ],
      analogies: [
        'Braces are like train tracks - they guide each tooth (like train cars) to the right position.',
        'Moving teeth is like moving a house - it takes slow, steady pressure to get there safely.',
      ],
      examples: [
        'Someone with a large overbite might have "buck teeth" that stick out.',
        'Clear aligners are popular with adults who don\'t want visible braces.',
      ],
      patientCounselingPoints: [
        'Children should have their first orthodontic evaluation by age 7',
        'Orthodontic treatment is successful at any age - adults can benefit too',
        'Wearing retainers after treatment is essential to prevent teeth from shifting back',
      ],
    },
    2: {
      level: 2,
      summary: 'Malocclusion affects 50-75% of the population and ranges from mild to severe. Orthodontic treatment uses biomechanical forces to move teeth through bone. Treatment timing depends on the problem type and patient age.',
      explanation: `## Malocclusion Classification

**Angle's Classification (Based on Molar Relationship):**

*Class I (Neutrocclusion):*
- Mesio-buccal cusp of maxillary first molar occludes with mesio-buccal groove of mandibular first molar
- Normal molar relationship
- May have crowding, spacing, or other problems
- Most common: ~50% of population

*Class II (Distocclusion):*
- Lower molar distal to normal
- Mesio-buccal cusp of maxillary first molar mesial to mesio-buccal groove of mandibular first molar
- Division 1: Protruding maxillary incisors
- Division 2: Lingually inclined maxillary incisors
- AKA: "Overbite", "retrognathic mandible"
- ~25% of population

*Class III (Mesioclusion):*
- Lower molar mesial to normal
- Mesio-buccal cusp of maxillary first molar distal to mesio-buccal groove of mandibular first molar
- AKA: "Underbite", "prognathic mandible"
- ~5-10% of population

**Other Classifications:**

*Sagittal (Anteroposterior):*
- Overjet: Horizontal overlap of incisors
- Normal: 2-3 mm
- Increased: Class II tendency
- Reverse: Class III tendency

*Vertical:*
- Overbite: Vertical overlap of incisors
- Normal: 2-3 mm
- Deep bite: >4-5 mm
- Open bite: No vertical overlap

*Transverse:*
- Crossbite: Posterior teeth buccal/lingual to opposing teeth
- Posterior crossbite
- Anterior crossbite
- Scissor bite: Complete transverse discrepancy

## Orthodontic Appliances

**Fixed Appliances:**

*Traditional Braces:*
- Metal brackets bonded to teeth
- Archwires provide force
- Ligatures (wires or elastics) hold wire in bracket
- Self-ligating: Door mechanism (no ties needed)
- Ceramic brackets: Tooth-colored option

*Components:*
- Brackets: Attach to teeth, have slot for wire
- Bands: Metal rings around molars
- Archwires: Provide forces (NiTi, stainless steel, beta-titanium)
- Ligatures: Hold wire in bracket
- Elastics: Rubber bands for correction

**Removable Appliances:**

*Clear Aligners (Invisalign, etc.):*
- Series of clear plastic trays
- Each tray moves teeth slightly
- Changed every 1-2 weeks
- Removable for eating/cleaning
- Compliance dependent (20-22 hrs/day)
- Indicated for mild-moderate cases

*Other Removable:*
- Hawley retainer
- Essix retainer
- Expansion appliances
- Bite plates
- Functional appliances

**Auxiliary Appliances:**

*Palatal Expander:*
- Rapid maxillary expansion (RME)
- Widens maxillary arch
- Separates midpalatal suture
- Used for crossbite, crowding

*Headgear:*
- Extraoral force
- Corrects Class II
- Distalizes maxillary molars
- Compliance dependent

*Herbst Appliance:*
- Functional appliance
- Advances mandible
- Corrects Class II
- Fixed (compliance built-in)

## Treatment Timing

**Early Treatment (Phase I):**
- Ages 7-10
- Mixed dentition
- Skeletal problems
- Severe malocclusion
- Examples: Crossbite, severe crowding, protrusion

**Comprehensive Treatment (Phase II):**
- Ages 11-15 (most common)
- Permanent dentition
- Full braces/aligners
- Most orthodontic treatment

**Adult Treatment:**
- Any age after growth complete
- Teeth still move
- Slower, more discomfort
- May need surgical correction for skeletal problems

**Surgical Orthodontics:**
- Severe skeletal discrepancies
- Growth complete
- Combined: Orthodontics + jaw surgery
- Examples: Severe Class II/III, open bite, asymmetry

## Mechanisms of Tooth Movement

**Bone Remodeling:**
- Pressure side: Bone resorption (osteoclasts)
- Tension side: Bone deposition (osteoblasts)
- Tooth moves through bone
- Rate: ~1 mm/month

**Types of Tooth Movement:**
- Tipping: Crown moves, root follows
- Translation: Crown and root move together
- Rotation: Turning around long axis
- Intrusion: Moving into bone
- Extrusion: Moving out of bone
- Bodily movement: Most difficult

## Retention

**Why Teeth Relapse:**
- Gum fibers pull back
- Bone remodels
- Soft tissue memory
- Growth continues

**Retainer Types:**

*Hawley Retainer:*
- Acrylic + wire
- Durable, adjustable
- Visible

*Essix Retainer:*
- Clear plastic
- Invisible
- Less durable

*Fixed Retainer:*
- Bonded wire behind teeth
- Usually lower anterior
- Permanent retention
- Flossing challenge

**Retention Duration:**
- First year: Full-time wear
- Second year+: Nights only
- Many: Indefinite night wear
- Fixed: As long as it lasts`,
      keyTerms: [
        { term: 'malocclusion', definition: 'Improper alignment of teeth' },
        { term: 'overjet', definition: 'Horizontal distance between upper and lower incisors' },
        { term: 'overbite', definition: 'Vertical overlap of upper incisors over lower incisors' },
        { term: 'crossbite', definition: 'Abnormal buccolingual relationship of opposing teeth' },
        { term: 'relapse', definition: 'Return of teeth toward original position after treatment' },
      ],
      analogies: [
        'Orthodontic treatment is like bending a paperclip - it needs slow, steady pressure to reshape.',
        'Retention is like letting a cast set - bones and tissues need to harden in the new position.',
      ],
      clinicalNotes: 'Class I malocclusion is most common. Early treatment (Phase I) not always necessary - many problems treated more efficiently in permanent dentition. Adult orthodontics increasingly common - 25% of orthodontic patients are adults. Retention is lifelong.',
      patientCounselingPoints: [
        'Orthodontic treatment takes 18-24 months on average',
        'Wearing elastics as instructed is crucial for good results',
        'Retainers must be worn as directed or teeth will shift back',
        'Adult treatment works great but takes slightly longer than teens',
      ],
    },
    3: {
      level: 3,
      summary: 'Contemporary orthodontics employs biomechanical principles to move teeth through alveolar bone via osteoclast/osteoblast-mediated remodeling. Treatment planning integrates dental, skeletal, and soft tissue analyses with evidence-based timing considerations.',
      explanation: `## Biomechanics of Tooth Movement

**Histologic Mechanisms:**

*Pressure Side:*
- Compression of periodontal ligament
- Blood flow reduction
- Cell death (hyalinization)
- Osteoclast recruitment
- Frontal resorption: Direct
- Undermining resorption: Indirect

*Tension Side:*
- Periodontal ligament stretching
- Increased blood flow
- Osteoblast activity
- Bone deposition
- Trabecular bone formation

*Optimal Force:*
- Light, continuous force
- Enough to stimulate cellular response
- Not enough to cause hyalinization
- Capillary pressure threshold
- Heavy force: Delayed movement (wait for repair)

**Optimal Force Ranges:**
- Tipping: 35-60 g
- Translation: 70-120 g
- Intrusion: 15-25 g
- Extrusion: 35-60 g
- Rotation: 35-60 g

**Types of Tooth Movement:**

1. **Tipping:** Crown moves, root follows later
   - Easiest movement
   - Moment-to-force ratio low

2. **Translation (Bodily):** Crown and root move together
   - Most difficult
   - Requires counter-torque
   - Moment-to-force ratio ~10:1

3. **Rotation:** Turning around long axis
   - Requires couple
   - Relapse tendency high
   - Overcorrection needed

4. **Intrusion:** Moving tooth into bone
   - High risk: Root resorption
   - Limited movement possible
   - Light forces essential

5. **Extrusion:** Moving tooth out of bone
   - Relapse tendency high
   - Esthetic concerns (gingiva)

6. **Bodily movement:** Most stable
   - Center of rotation at infinity
   - Requires precise mechanics

## Cephalometric Analysis

**Lateral Cephalogram:**
- Standardized radiograph
- Skeletal and dental relationships
- Growth prediction
- Treatment planning

**Common Measurements:**

*Skeletal:*
- SNA: Maxillary position relative to cranial base
- SNB: Mandibular position relative to cranial base
- ANB: Difference (skeletal pattern)
- Normal: SNA 82°, SNB 80°, ANB 2°
- Class II: Increased ANB
- Class III: Decreased/negative ANB

*Vertical:*
- FMA: Frankfort-mandibular plane angle
- Lower anterior facial height
- Normal: FMA 25°
- High angle: Long face tendency
- Low angle: Short face tendency

*Dental:*
- U1 to SN: Upper incisor inclination
- L1 to MP: Lower incisor inclination
- Interincisal angle
- Overbite, overjet measurements

**Soft Tissue:**
- Lip position
- Nasolabial angle
- Chin position
- Esthetic line (E-line)

## Treatment Planning

**Problem List:**
- Skeletal: AP, vertical, transverse
- Dental: Crowding, spacing, angulation
- Occlusal: Crossbite, open bite, deep bite
- Esthetic: Concerns, expectations
- Functional: Speech, chewing, airway

**Treatment Options:**

*Extraction vs. Non-extraction:*
- Extraction: Severe crowding, protrusion, skeletal discrepancy
- Non-extraction: Mild-moderate crowding, expansion possible
- Usually extract premolars (first or second)
- Decision based on profile, lip competence, stability

*Expansion:*
- Slow expansion: Orthodontic forces only
- Rapid expansion: Separates midpalatal suture
- Age dependent: <15 years for RME success
- Surgical expansion for adults

*Surgical Correction:*
- Orthognathic surgery
- Severe skeletal discrepancies
- Growth complete
- Combined pre- and post-surgical orthodontics
- Le Fort I maxillary surgery
- Mandibular sagittal split osteotomy (BSSO)

## Airway Considerations

**Obstructive Sleep Apnea (OSA):**
- Orthodontics role: Expansion
- Mandibular advancement appliances
- Can improve airway in some cases
- Not primary treatment for OSA
- Screen for OSA in orthodontic patients

**Mouth Breathing:**
- Effects on facial development
- Long face pattern
- Narrow maxillary arch
- Posterior crossbite
- Early intervention beneficial

## Adjunctive Procedures

**Interproximal Reduction (IPR):**
- Enamel stripping
- Create space without extraction
- 0.2-0.5 mm per contact
- Safe: Leave adequate enamel
- Reduces black triangles

**Traction:**
- Elastics: Various configurations
- Class II, Class III, vertical
- Patient compliance critical
- Wear 22+ hours/day ideal

**Temporary Anchorage Devices (TADs):**
- Mini-implants
- Skeletal anchorage
- Eliminates unwanted tooth movement
- Enables previously impossible movements
- Placed by orthodontist
- Removed after use

## Specific Malocclusions

**Class II Correction:**
- Growth modification: Functional appliances
- Camouflage: Extraction, distalization
- Surgical: Mandibular advancement

**Class III Correction:**
- Protraction face mask (growth)
- Chin cup (growth)
- Decompensation: Pre-surgical
- Surgical: Mandibular setback, maxillary advancement

**Open Bite:**
- Anterior: Tongue thrusting, habits
- Posterior: Skeletal
- Treatment: Extrusion, molar intrusion, surgery
- Habit elimination essential

**Deep Bite:**
- Anterior intrusion
- Posterior extrusion
- Correction depends on skeletal pattern

## Long-Term Considerations

**Stability:**
- Relapse tendency varies by problem
- Retention protocols differ
- Some changes lifelong retention
- Growth changes after treatment

**Root Resorption:**
- Shortening of root ends
- Common: Mild, clinically insignificant
- Severe: Rare, problematic
- Risk factors: Trauma, genetics, treatment duration
- Monitoring: Radiographs

**Periodontal Effects:**
- Gingival recession possible
- Dehiscence, fenestration
- Mucogingival considerations
- Orthodontics can improve periodontal health

**TMJ Considerations:**
- Orthodontics does not cause TMD
- Does not reliably treat TMD
- May help in some cases
- May worsen in some cases
- Controversial area`,
      keyTerms: [
        { term: 'hyalinization', definition: 'Tissue death from excessive pressure during tooth movement' },
        { term: 'SNA/SNB/ANB', definition: 'Cephalometric angular measurements for skeletal relationships' },
        { term: 'orthognathic surgery', definition: 'Jaw surgery to correct skeletal discrepancies' },
        { term: 'TADs', definition: 'Temporary anchorage devices; mini-screws for skeletal anchorage' },
        { term: 'IPR', definition: 'Interproximal reduction; enamel stripping to create space' },
      ],
      clinicalNotes: 'Root resorption occurs in most patients but is clinically insignificant in most. Severe resorption (<2mm remaining) rare but serious. TADs have revolutionized treatment possibilities. Functional appliances effective during growth only.',
      patientCounselingPoints: [
        'Orthodontic treatment takes 18-24 months on average - patience is key',
        'Compliance with elastics and other instructions directly affects results',
        'Retainers must be worn as directed - relapse is common without retention',
        'Adult treatment works but takes longer and may have slight discomfort',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern orthodontics incorporates digital workflow, 3D imaging, CBCT analysis, and computer-aided design/manufacturing. Molecular mechanisms of tooth movement continue to be elucidated, with potential for accelerated treatment and improved outcomes.',
      explanation: `## Digital Orthodontics

**Digital Workflow:**

*Intraoral Scanning:*
- Replaces alginate impressions
- Digital models
- Immediate visualization
- Patient acceptance improved
- Accuracy comparable/traditional

*3D Printing:*
- Physical models from digital scans
- Indirect bonding trays
- Surgical guides
- Retainers, aligners
- Appliances fabricated chairside

*CBCT (Cone Beam CT):*
- 3D visualization
- Root position, angulation
- Airway assessment
- Temporomandibular joints
- Impacted canines
- Root resorption evaluation
- Radiation dose consideration

*Computer-Aided Design:*
- Treatment planning software
- Virtual tooth movement
- Prediction visualization
- Multiple treatment options
- Patient communication tool

**Digital Appliances:**

*Customized Braces:*
- SureSmile, Insignia
- CAD/CAM brackets
- Wires bent by robot
- Reduced treatment time?
- Improved efficiency?
- Evidence ongoing

*Clear Aligner Evolution:*
- Invisalign, ClearCorrect, others
- Improved materials
- Better attachments
- Expanded indications
- Complex cases now possible
- Predictability improved

*3D-Printed Appliances:*
- Expanders
- Habit appliances
- Space maintainers
- Indirect bonding trays
- Rapid prototyping

## Accelerated Orthodontics

**Corticotomy-Assisted:**
- Selective alveolar decortication
- Regional acceleratory phenomenon (RAP)
- Temporary demineralization
- Faster tooth movement
- Reduces treatment time 30-50%
- Surgical procedure required

**Piezocision:**
- Minimally invasive corticotomy
- Flapless technique
- Outpatient procedure
- Shorter recovery
- Similar RAP effect

**Vibration/Acceleration Devices:**
- AcceleDent, Propel (off market 2020)
- Low-frequency vibration
- Mechanism: Enhanced cellular activity?
- Evidence: Inconclusive
- Not widely adopted

**Low-Level Laser Therapy:**
- Photobiomodulation
- May accelerate tooth movement
- Reduces inflammation?
- Evidence limited

**Pharmacologic Approaches:**
- Relaxin: Softens collagen?
- Vitamin C: Fibroblast activity
- Prostaglandin inhibitors: Reduce discomfort?
- Not standard of care

## Temporary Anchorage Devices (TADs)

**Types:**
- Miniscrews: 1.2-2.0 mm diameter
- Miniplates: Larger, more stable
- Zygomatic anchors
- Interpretable versions

**Placement Sites:**
- Buccal alveolar: Between roots
- Palatal: Midpalatal, paramedian
- Infrazygomatic: High buccal
- Retromolar: Posterior mandible
- Edentulous ridges

**Applications:**
- Molar distalization
- Anchorage reinforcement
- Intrusion/extrusion
- Asymmetric movements
- Eliminates extractions in some cases
- Enables previously impossible movements

**Success Factors:**
- Bone quality
- Placement technique
- Load applied
- Patient factors (age, hygiene)
- Success rate: ~85%

## Emerging Technologies

**AI in Orthodontics:**
- Automated diagnosis
- Treatment prediction
- Outcome estimation
- Progress monitoring
- Workflow optimization

**Robotics:**
- Wire bending robots
- Custom bracket placement
- Consistent force systems
- Reduced human error

**Smart Materials:**
- Shape-memory alloys
- Temperature-sensitive wires
- Longer activation intervals
- Fewer adjustments

**Tele-orthodontics:**
- Remote monitoring
- Virtual appointments
- Progress tracking
- Pandemic-accelerated
- HIPAA-compliant platforms

## Biomechanics Advances

**Finite Element Analysis:**
- Stress distribution modeling
- Optimal force calculation
- Root resorption prediction
- Treatment simulation

**Bone Biology Research:**
- RANKL/OPG pathway
- Osteoclast recruitment
- Inflammation mediators
- Potential pharmacologic acceleration

**Mechanotransduction:**
- Cellular response to mechanical force
- Cytokine production
- Gene expression changes
- Personalized force systems

## Evidence-Based Practice

**Timing of Treatment:**
- Early treatment: Not always beneficial
- Class II: Functional appliances during growth
- Class III: Early treatment may reduce severity
- Crowding: Usually delayed until permanent dentition

**Extraction vs. Non-extraction:**
- Controversial for decades
- Depends on individual case
- Soft tissue profile critical
- Long-term stability similar
- Evidence supports either approach

**Retention Protocols:**
- Lifelong retention increasingly common
- Relapse tendency varies
- Patient preference important
- Clear retainers popular
- Fixed retainers for lower anterior

**Orthodontics and TMD:**
- No causal relationship established
- Does not prevent or treat TMD
- Some patients benefit
- Some patients worsen
- Informed consent important

**Airway and Sleep Apnea:**
- Expansion may improve airway
- Mandibular advancement appliances
- Screening essential
- Not primary OSA treatment
- Collaboration with sleep physician`,
      keyTerms: [
        { term: 'RAP', definition: 'Regional acceleratory phenomenon; increased tissue activity after injury/surgery' },
        { term: 'CBCT', definition: 'Cone beam computed tomography; 3D dental imaging' },
        { term: 'photobiomodulation', definition: 'Use of light to modulate cellular function' },
        { term: 'mechanotransduction', definition: 'Cellular response to mechanical force' },
      ],
      clinicalNotes: 'Digital workflow becoming standard. CBCT should be used selectively due to radiation. TADs have expanded treatment possibilities dramatically. Evidence for accelerated techniques limited. Retention increasingly indefinite.',
    },
    5: {
      level: 5,
      summary: 'The future of orthodontics lies in precision biomechanics, molecular acceleration, AI-driven treatment planning, and customized biomaterials. Integration with sleep medicine, airway management, and interdisciplinary care will transform clinical practice.',
      explanation: `## Frontiers in Orthodontics

### Molecular Therapies

**Biomolecular Modulation:**
- RANKL inhibition to control resorption
- Osteoprotegerin enhancement
- Prostaglandin modulation
- Cytokine targeting
- Gene therapy approaches

**Stem Cell Applications:**
- Periodontal regeneration
- Bone graft alternatives
- Pulp regeneration for trauma
- Accelerated tooth movement
- Experimental stage

**Precision Medicine:**
- Genetic profiling for treatment response
- Biomarker-based protocols
- Personalized force systems
- Risk assessment tools

### AI and Machine Learning

**Treatment Planning:**
- Automated diagnosis
- Treatment option generation
- Outcome prediction
- Complication risk assessment
- Patient-specific protocols

**Progress Monitoring:**
- Automated analysis
- Deviation detection
- Predictive adjustments
- Reduced appointments

**Patient Communication:**
- Visual treatment simulations
- Progress tracking apps
- Virtual consultations
- Enhanced understanding

### Advanced Biomaterials

**Smart Archwires:**
- Shape memory alloys
- Temperature-sensitive
- Variable force delivery
- Longer intervals
- Personalized force profiles

**Surface-Modified Brackets:**
- Reduced friction
- Antibacterial coatings
- Improved bonding
- Faster treatment

**Bioactive Materials:**
- Enamel remineralization
- White spot lesion prevention
- Decalcification reduction
- Simultaneous treatment/prevention

### Customization Revolution

**Digitally Customized Appliances:**
- Patient-specific brackets
- Custom wires
- Optimized mechanics
- Reduced treatment time
- Improved efficiency

**3D-Printed Aligners:**
- Chairside fabrication
- Same-day delivery
- Cost reduction
- Design flexibility

### Interdisciplinary Integration

**Airway-Focused Orthodontics:**
- Sleep apnea screening
- Expansion for airway
- Collaboration with sleep medicine
- Standard of care evolution

**Surgical Orthodontics:**
- Virtual surgical planning
- 3D-printed splints
- Predictable outcomes
- Reduced morbidity

**Interdisciplinary Care:**
- Periodontics-orthodontics
- Prosthodontics-orthodontics
- Endodontics-orthodontics
- Team-based treatment planning

### Clinical Practice Transformation

**Digital-First Practice:**
- Intraoral scanner standard
- CBCT judicious use
- 3D printing in-office
- Cloud-based platforms
- AI integration

**Patient Experience:**
- Fewer appointments
- Shorter visits
- Remote monitoring
- Virtual check-ins
- Enhanced communication

**Outcome Measurement:**
- Standardized assessments
- Patient-reported outcomes
- Long-term follow-up
- Quality metrics

**Education and Training:**
- Digital skills essential
- Interdisciplinary collaboration
- Evidence-based practice
- Lifelong learning

### Global Perspectives

**Access to Care:**
- Teledentistry expansion
- Cost reduction strategies
- Simplified mechanics
- Public health orthodontics

**Standard of Care Evolution:**
- Evidence-based protocols
- Technology adoption
- Interdisciplinary care
- Patient-centric approaches

**Ethical Considerations:**
- Treatment indications
- Resource allocation
- Informed consent
- Privacy and data security

### Research Priorities

**Short-term:**
- Acceleration protocols
- Digital workflow optimization
- AI validation
- Patient experience improvement

**Mid-term:**
- Molecular therapies
- Biomechanics refinement
- Long-term outcome studies
- Cost-effectiveness research

**Long-term:**
- Gene therapy
- Regenerative approaches
- Predictive modeling
- Prevention of malocclusion`,
      keyTerms: [
        { term: 'gene therapy', definition: 'Introducing genetic material to treat disease' },
        { term: 'tele-orthodontics', definition: 'Remote delivery of orthodontic care' },
      ],
      clinicalNotes: `Future clinical practice:
1. AI will assist with diagnosis and treatment planning
2. Digital workflow will be standard of care
3. Accelerated protocols may become mainstream
4. Customized appliances will improve efficiency
5. Interdisciplinary care will be emphasized
6. Evidence-based practice will guide treatment decisions`,
    },
  },

  media: [
    {
      id: 'malocclusion-classes',
      type: 'diagram',
      filename: 'angle-classification.svg',
      title: 'Angle Classification of Malocclusion',
      description: 'Class I, II, and III malocclusion relationships',
    },
    {
      id: 'orthodontic-appliances',
      type: 'image',
      filename: 'braces-and-appliances.jpg',
      title: 'Orthodontic Appliances',
      description: 'Types of braces and orthodontic appliances',
    },
  ],

  citations: [
    {
      id: 'proffit-orthodontics',
      type: 'textbook',
      title: 'Contemporary Orthodontics',
      authors: ['Proffit, W.R.', 'Fields, H.W.', 'Sarver, D.M.'],
      source: 'Elsevier',
      chapter: 'Chapters 1-20',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
    { targetId: 'topic-tooth-eruption', targetType: 'topic', relationship: 'related', label: 'Tooth Eruption' },
    { targetId: 'topic-children-dental-care', targetType: 'topic', relationship: 'related', label: 'Children Dental Care' },
  ],

  tags: {
    systems: ['dental', 'skeletal'],
    structures: ['teeth', 'maxilla', 'mandible', 'tmj'],
    topics: ['orthodontics', 'occlusion', 'facial-growth', 'treatment-planning'],
    keywords: ['orthodontics', 'braces', 'malocclusion', 'aligners', 'retainer', 'class II', 'class III', 'crossbite'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default orthodontics;
