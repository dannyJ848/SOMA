/**
 * Dermatologic Procedures - Dermatology Treatments
 *
 * Comprehensive coverage of procedural dermatology including biopsies,
 * excisions, cryotherapy, and cosmetic procedures.
 */

import { EducationalContent } from '../../types';

export const dermatologicProceduresContent: EducationalContent = {
  id: 'dermatology-procedures',
  type: 'concept',
  name: 'Dermatologic Procedures',
  alternateNames: ['Skin Procedures', 'Procedural Dermatology', 'Cutaneous Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Dermatologic procedures are treatments done on the skin, such as removing moles or skin cancers, freezing warts, or taking small samples of skin to diagnose problems.',
      explanation: `## What Are Dermatologic Procedures?

Dermatologic procedures are medical treatments performed on the skin. They can be done in a doctor's office and help diagnose or treat skin problems.

### Common Types of Procedures

**Skin Biopsy:**
- Taking a small piece of skin
- To look at under a microscope
- Helps diagnose skin conditions
- Done with numbing medicine

**Excision (Cutting Out):**
- Removing a mole or growth
- Cutting around it completely
- Stitches to close the wound
- Sent to lab for testing

**Cryotherapy (Freezing):**
- Using liquid nitrogen
- Very cold spray or contact
- Destroys abnormal cells
- Used for warts and precancers

**Electrosurgery:**
- Using electric current
- Burns away abnormal tissue
- Stops bleeding
- Treats skin growths

### Why These Are Done

**Diagnosis:**
- To find out what a spot is
- To check if something is cancer
- To identify rashes

**Treatment:**
- Remove skin cancers
- Get rid of warts
- Remove unwanted moles
- Treat precancerous spots

### What to Expect

**Before:**
- Area is cleaned
- Numbing medicine is given
- You may feel a pinch or sting
- Wait for numbness

**During:**
- Should not feel pain
- May feel pressure
- Usually takes minutes
- Stay still

**After:**
- Keep wound clean
- Follow bandage instructions
- Watch for infection signs
- Stitches removed later (if needed)

### Healing

**Normal Healing:**
- Some redness is normal
- May have bruising
- Scab forms and falls off
- Scarring varies by location

**When to Call Doctor:**
- Heavy bleeding
- Signs of infection (pus, increasing pain)
- Fever
- Stitches come open

### Types of Scars

**Minimal Scarring:**
- Small procedures
- Face heals well
- Good wound care helps

**More Visible Scars:**
- Larger excisions
- Chest and shoulders
- Some people scar more`,
      keyTerms: [
        { term: 'biopsy', definition: 'Taking a small sample of skin to look at under a microscope' },
        { term: 'excision', definition: 'Cutting out a skin growth or lesion completely' },
        { term: 'cryotherapy', definition: 'Using extreme cold (liquid nitrogen) to destroy abnormal skin' },
        { term: 'numbing medicine', definition: 'Local anesthetic injected to prevent pain during a procedure' },
        { term: 'stitches', definition: 'Thread used to close a wound and help it heal' },
      ],
      analogies: [
        'A skin biopsy is like taking a core sample from the earth to see what is underneath.',
        'Cryotherapy freezing is like frost killing weeds in a garden.',
        'Excision is like cutting out a bad spot from a piece of fruit to save the rest.',
      ],
      examples: [
        'A doctor might do a shave biopsy of a changing mole to check if it is concerning.',
        'Liquid nitrogen is sprayed on a wart for a few seconds to freeze and destroy it.',
      ],
      patientCounselingPoints: [
        'Tell your doctor about blood thinners or other medications',
        'Keep the area clean and dry as instructed',
        'Some scarring is normal but usually fades over time',
        'Call if you see signs of infection like increasing redness or pus',
      ],
    },
    2: {
      level: 2,
      summary: 'Dermatologic procedures include diagnostic biopsies, therapeutic excisions, cryosurgery, electrosurgery, and wound care techniques with attention to proper technique and wound healing.',
      explanation: `## Diagnostic Procedures

### Skin Biopsy Types

**Shave Biopsy:**
- Superficial tangential cut
- Using blade or razor blade
- Good for raised lesions
- Minimal scarring

**Punch Biopsy:**
- Circular cutting tool
- 2-6 mm diameter
- Full-thickness sample
- Often requires sutures

**Excisional Biopsy:**
- Complete lesion removal
- Includes margin
- Elliptical shape
- Requires closure

**Incisional Biopsy:**
- Partial lesion sampling
- For large lesions
- Diagnostic portion only

### Biopsy Technique

**Preparation:**
- Informed consent
- Mark lesion before anesthesia
- Photograph if needed

**Anesthesia:**
- Lidocaine with epinephrine (usually)
- Buffering reduces pain
- Wait for effect (2-5 minutes)

**Execution:**
- Stabilize tissue
- Proper orientation
- Adequate depth
- Handle tissue gently

**Specimen Handling:**
- Formalin fixation
- Proper labeling
- Orientation marking
- Requisition completion

## Therapeutic Procedures

### Cryotherapy

**Mechanism:**
- Rapid freezing causes ice crystal formation
- Tissue necrosis
- Immune response to damaged cells

**Technique:**
- Freeze-thaw cycles
- Freeze time varies by lesion
- Longer freeze for thicker lesions
- Ensure adequate freeze halo

**Indications:**
- Actinic keratoses
- Warts
- Seborrheic keratoses
- Some skin cancers (superficial)

**Side Effects:**
- Pain
- Blistering
- Hypopigmentation
- Nerve damage (prolonged freeze)

### Electrosurgery

**Types:**
- Electrodesiccation (low power, spark)
- Electrofulguration (surface destruction)
- Electrocoagulation (deeper, contact)
- Electrosection (cutting current)

**Uses:**
- Hemostasis
- Destruction of small lesions
- Curettage combination
- Skin tag removal

### Curettage

**Technique:**
- Curette tool (spoon-shaped)
- Scrapes soft tissue
- Different texture than normal skin
- Often combined with electrodesiccation

**ED&C (Electrodesiccation and Curettage):**
- Curettage removes tumor
- Electrodesiccation destroys base
- Repeat 2-3 cycles
- Used for superficial BCC, SCC in situ

### Excision Technique

**Ellipse Design:**
- 3:1 length to width ratio
- Parallel to relaxed skin tension lines
- Adequate margins
- Plan for closure

**Margins:**
- Benign lesions: minimal (1-2 mm)
- BCC: 4 mm
- SCC: 4-6 mm
- Melanoma: based on Breslow depth

**Closure:**
- Primary (side-to-side)
- Second intention (heal open)
- Grafts
- Flaps

### Wound Care

**First Intention:**
- Sutured closure
- Keep clean and dry initially
- May shower after 24-48 hours
- Suture removal by location

**Second Intention:**
- Wound left open
- Daily wound care
- Moist healing environment
- Takes weeks to heal

**Suture Removal Timing:**
- Face: 5-7 days
- Scalp: 7-10 days
- Trunk: 10-14 days
- Extremities: 14 days

### Complications

**Bleeding:**
- Apply pressure
- May need recauterization
- Hematoma evacuation

**Infection:**
- Signs: increasing pain, redness, drainage
- Culture if suspicious
- Antibiotics

**Dehiscence:**
- Wound opens
- Usually heals by second intention
- May need reclosure

**Scarring:**
- Hypertrophic scar
- Keloid
- Atrophic scar
- Location-dependent`,
      keyTerms: [
        { term: 'shave biopsy', definition: 'Superficial biopsy using a blade to remove raised lesions tangentially' },
        { term: 'punch biopsy', definition: 'Full-thickness biopsy using a circular cutting tool' },
        { term: 'electrodesiccation', definition: 'Using electrical current to destroy tissue superficially' },
        { term: 'curettage', definition: 'Scraping tissue with a spoon-shaped instrument' },
        { term: 'relaxed skin tension lines', definition: 'Natural skin fold lines along which scars heal best' },
      ],
      analogies: [
        'A punch biopsy is like using a cookie cutter to get a complete sample.',
        'Curettage is like using a melon baller to scoop out soft tissue.',
        'Relaxed skin tension lines are like the grain of wood - go with them for best results.',
      ],
      examples: [
        'ED&C with three cycles is performed for a superficial basal cell carcinoma on the trunk.',
        'A 4 mm punch biopsy is taken from a suspicious pigmented lesion for histologic evaluation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced dermatologic surgery includes Mohs micrographic surgery, reconstructive techniques, proper margin assessment, and specialized approaches for complex lesions.',
      explanation: `## Mohs Micrographic Surgery

### Technique

**Principles:**
- Complete margin examination
- Tissue-sparing
- Highest cure rates
- Same-day surgery

**Process:**
1. Debulk visible tumor
2. Take thin layer with beveled edges
3. Map and color-code tissue
4. Freeze and section horizontally
5. Examine all margins
6. If positive, take more tissue from that area
7. Repeat until clear

**Mapping:**
- Precise orientation
- Color coding
- Detailed documentation
- Guides subsequent stages

### Indications

**Mohs Appropriate Use Criteria:**
- High-risk BCC and SCC
- Recurrent tumors
- Areas requiring tissue conservation
- Poorly defined margins
- Perineural invasion

**High-Risk Locations:**
- H-zone of face
- Periocular
- Nose
- Ears
- Lips
- Genitalia

### Histologic Processing

**Frozen Sections:**
- Rapid processing
- Horizontal sectioning
- Complete margin assessment
- Interpretation challenges

**Quality Factors:**
- Tissue flatness
- Section quality
- Staining
- Reader expertise

## Reconstructive Surgery

### Wound Closure Options

**Primary Closure:**
- Side-to-side
- Layered closure
- M-plasty for dog ears
- Undermining techniques

**Secondary Intention:**
- Appropriate locations
- Excellent cosmesis in concave areas
- Daily wound care
- Prolonged healing

**Flaps:**
- Advancement
- Rotation
- Transposition
- Interpolation (staged)

**Grafts:**
- Full-thickness skin graft
- Split-thickness skin graft
- Composite grafts
- Donor site selection

### Flap Design

**Advancement Flaps:**
- Tissue moved directly forward
- V-Y, Y-V modifications
- A-T, O-T closures

**Rotation Flaps:**
- Arc of rotation
- Back cut if needed
- Recruitment of laxity

**Transposition Flaps:**
- Rhombic (Limberg)
- Bilobed
- Banner flap
- Z-plasty

**Interpolation:**
- Pedicle crosses skin
- Staged procedure
- Forehead flap (nasal reconstruction)
- Melolabial flap

### Graft Techniques

**Full-Thickness:**
- Include dermis completely
- Better color match
- Less contraction
- Limited donor sites

**Donor Sites:**
- Preauricular
- Postauricular
- Supraclavicular
- Upper eyelid

**Graft Survival:**
- Serum imbibition (24-48 hours)
- Inosculation (48-72 hours)
- Revascularization (day 4-7)
- Bolster dressing important

## Special Techniques

### Nail Surgery

**Digital Block:**
- Ring block technique
- Wing block
- Without epinephrine (controversial)
- Adequate anesthesia essential

**Nail Unit Biopsy:**
- Matrix biopsy
- Nail bed biopsy
- Lateral longitudinal excision
- Avulsion considerations

**Matricectomy:**
- Chemical (phenol)
- Surgical
- For chronic ingrown nails

### Scar Revision

**Timing:**
- Allow 6-12 months maturation
- Intralesional steroids first
- Silicone therapy

**Techniques:**
- Z-plasty (length, redirect)
- W-plasty (irregular pattern)
- Geometric broken line
- Serial excision

### Dermabrasion/Dermaplaning

**Indications:**
- Scar revision
- Acne scarring
- Rhinophyma

**Technique:**
- Wire brush or diamond fraise
- Remove to upper/mid dermis
- Re-epithelialization from adnexa

## Complications Management

### Bleeding**
- Identify vessel
- Cautery or ligation
- Pressure
- Consider coagulopathy

### Infection

**Risk Factors:**
- Below knee location
- Wedge excisions of ear/lip
- Contaminated wounds
- Immunosuppression

**Management:**
- Culture
- Antibiotics
- Wound care
- Consider opening wound

### Flap Necrosis

**Prevention:**
- Appropriate flap design
- Minimize tension
- Adequate blood supply
- Smoking cessation

**Treatment:**
- Conservative management initially
- Debridement
- Secondary intention or revision`,
      keyTerms: [
        { term: 'Mohs surgery', definition: 'Surgical technique with complete margin examination and tissue sparing' },
        { term: 'interpolation flap', definition: 'Flap with pedicle crossing intervening skin, requiring staged division' },
        { term: 'inosculation', definition: 'Anastomosis of graft vessels with recipient bed vessels' },
        { term: 'Z-plasty', definition: 'Technique to lengthen or redirect scars using triangular transposition flaps' },
        { term: 'H-zone', definition: 'High-risk cosmetic and functional zone of the face where Mohs is preferred' },
      ],
      clinicalNotes: 'Mohs surgery achieves cure rates of 99% for primary BCC and 94-97% for recurrent BCC, compared to 90-95% and 85-90% respectively for standard excision.',
    },
    4: {
      level: 4,
      summary: 'Expert procedural dermatology encompasses complex reconstructive techniques, management of complications, perioperative optimization, and integration with multidisciplinary oncologic care.',
      explanation: `## Complex Reconstruction

### Nasal Reconstruction

**Subunit Principle:**
- Nine nasal subunits
- Replace entire subunit when >50% involved
- Better cosmetic outcome
- Natural junction lines

**Techniques by Defect:**
- Small: primary, FTSG
- Medium: bilobed, nasolabial
- Large: forehead flap (paramedian)

**Paramedian Forehead Flap:**
- Most reliable for large defects
- Based on supratrochlear artery
- Three-stage procedure
- Excellent color and texture match

**Cartilage Grafts:**
- Structural support
- Septal cartilage
- Auricular cartilage
- Rib cartilage (large defects)

### Periocular Reconstruction

**Considerations:**
- Lid function preservation
- Globe protection
- Tear drainage
- Cosmesis secondary

**Lower Lid:**
- Small: primary
- Medium: Tenzel, Mustarde
- Full-thickness: Hughes tarsoconjunctival

**Upper Lid:**
- More mobile
- Cutler-Beard for full-thickness
- Excess can be recruited

**Medial Canthus:**
- Glabellar flaps
- Rhombic flaps
- FTSG
- Avoid disrupting lacrimal system

### Lip Reconstruction

**Principles:**
- Maintain function
- Preserve sphincter
- Oral competence
- Cosmesis

**Techniques:**
- <1/3: primary
- 1/3-2/3: local flaps (Abbe, Estlander)
- >2/3: regional/free flaps

### Ear Reconstruction

**Challenges:**
- Complex anatomy
- Limited tissue
- Cartilage framework

**Techniques:**
- Wedge excision (helical defects)
- Antia-Buch (moderate)
- Staged reconstruction (large)

## Perioperative Care

### Anticoagulation Management

**Current Guidelines:**
- Continue aspirin for most procedures
- Continue warfarin for low-risk surgery
- Individual risk assessment
- Communication with prescribing physician

**High-Risk Situations:**
- Mechanical heart valves
- Recent PE/DVT
- Atrial fibrillation with high stroke risk
- Bridging decisions

### Cardiac Device Management

**Pacemakers:**
- Usually can use electrosurgery
- Bipolar preferred
- Keep away from device
- Magnet use varies by device

**ICDs:**
- Higher risk of inappropriate shock
- Consider disabling before procedure
- Cardiology coordination
- External defibrillator available

### Infection Prevention

**Prophylactic Antibiotics:**
- Not routine for most procedures
- Consider for high-risk situations:
  - Prosthetic joints (controversial)
  - Prosthetic heart valves
  - Immunosuppression
  - High-risk locations

**Evidence:**
- Most dermatologic surgery low risk
- Oral flora risk for lip/nose
- Below-knee wounds higher risk

## Oncologic Integration

### Multidisciplinary Tumor Boards

**Components:**
- Dermatology
- Surgical oncology
- Radiation oncology
- Medical oncology
- Pathology

**Complex Cases:**
- Large/advanced tumors
- Perineural invasion
- Nodal disease
- Recurrent tumors

### Sentinel Lymph Node Biopsy

**Indications:**
- Melanoma (based on Breslow depth)
- High-risk SCC (controversial)
- Merkel cell carcinoma

**Technique:**
- Preoperative lymphoscintigraphy
- Intraoperative gamma probe
- Isosulfan blue dye
- Histologic examination

### Adjuvant Therapy

**Radiation:**
- Positive margins (unable to re-excise)
- Perineural invasion
- Large nerve involvement
- Nodal disease

**Systemic Therapy:**
- Advanced melanoma (checkpoint inhibitors)
- Locally advanced BCC (hedgehog inhibitors)
- Advanced SCC (cemiplimab, pembrolizumab)

## Quality and Safety

### Outcome Tracking

**Metrics:**
- Cure rates
- Complication rates
- Recurrence rates
- Patient satisfaction

**Registries:**
- Mohs surgery registries
- Quality improvement programs
- Benchmarking

### Medicolegal Considerations

**Documentation:**
- Informed consent
- Procedure notes
- Pathology correlation
- Follow-up plans

**Risk Management:**
- Communication
- Appropriate expectations
- Complication management
- Disclosure

### Emerging Technologies

**Margin Assessment:**
- Reflectance confocal microscopy
- Optical coherence tomography
- Ex vivo fluorescence
- AI-assisted pathology

**Reconstruction:**
- 3D printing
- Computer-aided design
- Virtual planning
- Tissue engineering`,
      keyTerms: [
        { term: 'subunit principle', definition: 'Reconstruction concept of replacing entire cosmetic subunits for optimal appearance' },
        { term: 'paramedian forehead flap', definition: 'Workhorse flap for nasal reconstruction based on supratrochlear artery' },
        { term: 'Hughes flap', definition: 'Tarsoconjunctival advancement flap for lower eyelid reconstruction' },
        { term: 'sentinel lymph node biopsy', definition: 'Technique to identify and sample first draining lymph node for staging' },
        { term: 'hedgehog inhibitors', definition: 'Targeted therapy for advanced BCC (vismodegib, sonidegib)' },
      ],
      clinicalNotes: 'For patients on anticoagulation, current evidence supports continuing aspirin and warfarin for most dermatologic procedures with appropriate hemostasis techniques. The risk of thrombotic events from stopping often outweighs bleeding risk.',
    },
    5: {
      level: 5,
      summary: 'Expert-level procedural dermatology integrates cutting-edge techniques, technology-assisted surgery, comprehensive reconstructive algorithms, and health systems optimization for complex cutaneous oncology.',
      explanation: `## Expert Procedural Dermatology

### Advanced Mohs Concepts

**Immunohistochemistry in Mohs:**
- Cytokeratin stains (AE1/AE3)
- MART-1/Melan-A for melanoma
- BerEP4 for BCC
- p63 for SCC

**Mohs for Melanoma:**
- MART-1 or Melan-A staining
- Slow Mohs (permanent sections)
- Rush permanent sections
- Stage-specific margins

**Special Tumors:**
- Dermatofibrosarcoma protuberans
- Microcystic adnexal carcinoma
- Merkel cell carcinoma (controversial)
- Extramammary Paget disease

### Complex Flap Design

**Cervicofacial Flaps:**
- Large cheek defects
- Extensive advancement
- Layered closure
- Staged when needed

**Free Flaps:**
- When local tissue inadequate
- Radial forearm
- Anterolateral thigh
- Microvascular expertise required

**Tissue Expansion:**
- Delayed reconstruction
- Large defects
- Forehead, scalp
- Expander placement and inflation

### Perineural Invasion Management

**Detection:**
- Clinical nerve symptoms
- Histologic identification
- Named nerve involvement

**Imaging:**
- MRI for nerve tracking
- CT for bone involvement
- PET for extensive disease

**Treatment:**
- Mohs to clear margin
- Radiation if named nerve
- Multidisciplinary approach

### Technology Integration

**Intraoperative Imaging:**
- Reflectance confocal microscopy
- Optical coherence tomography
- Multiphoton microscopy
- Real-time margin assessment

**Digital Pathology:**
- Whole slide imaging
- Remote consultation
- AI-assisted detection
- Quality assurance

**3D Planning:**
- Complex reconstructions
- Implant design
- Virtual surgery
- Patient communication

### Reconstructive Algorithms

**Decision Making:**
- Defect analysis (location, depth, size)
- Adjacent tissue availability
- Patient factors
- Functional requirements
- Aesthetic units

**Reconstructive Ladder:**
- Second intention
- Primary closure
- Grafts
- Local flaps
- Regional flaps
- Free flaps

**Reconstructive Elevator:**
- Jump to optimal choice
- Not always sequential
- Outcome-focused
- Experience-guided

### Quality Improvement

**Outcome Databases:**
- Cure rate tracking
- Complication monitoring
- Long-term follow-up
- Benchmarking

**Process Improvement:**
- Workflow optimization
- Efficiency measures
- Patient satisfaction
- Continuous learning

### Training and Education

**Fellowship Programs:**
- ACGME-accredited
- Mohs and procedural training
- Reconstructive skills
- Research integration

**Simulation:**
- Suturing techniques
- Flap design
- Virtual reality
- Competency assessment

### Health Systems

**Resource Utilization:**
- Same-day reconstruction
- Efficiency metrics
- Cost-effectiveness
- Access optimization

**Care Coordination:**
- Multidisciplinary clinics
- Tumor board integration
- Survivorship programs
- Navigation support

### Research Frontiers

**Margin Assessment:**
- Ex vivo confocal
- Fluorescence-guided surgery
- Mass spectrometry
- AI pathology

**Wound Healing:**
- Growth factors
- Stem cell therapy
- Scaffold technologies
- Regenerative medicine

**Immunology:**
- Perioperative immunotherapy
- Neoadjuvant treatment
- Biomarkers
- Personalized approaches

### Global Dermatologic Surgery

**Training Programs:**
- International rotations
- Surgical missions
- Telemedicine support
- Skill transfer

**Access Issues:**
- Equipment availability
- Anesthesia resources
- Pathology support
- Follow-up challenges

**Innovation:**
- Low-resource techniques
- Appropriate technology
- Task-sharing models
- Sustainable programs

### Future Directions

**Artificial Intelligence:**
- Image analysis
- Margin prediction
- Outcome modeling
- Decision support

**Robotics:**
- Precision surgery
- Microsurgery applications
- Training tools
- Remote surgery

**Personalized Medicine:**
- Genetic risk assessment
- Response prediction
- Targeted therapy selection
- Surveillance optimization`,
      keyTerms: [
        { term: 'reflectance confocal microscopy', definition: 'Real-time optical imaging for non-invasive margin assessment' },
        { term: 'slow Mohs', definition: 'Modified Mohs technique using permanent sections, often for melanoma' },
        { term: 'reconstructive elevator', definition: 'Concept of selecting optimal reconstruction rather than sequential ladder approach' },
        { term: 'MART-1', definition: 'Melanoma antigen recognized by T cells; immunostain used in melanoma Mohs surgery' },
        { term: 'cervicofacial flap', definition: 'Large advancement-rotation flap for extensive cheek reconstruction' },
      ],
      clinicalNotes: `Key clinical insights in expert procedural dermatology:

1. **Mohs margin interpretation:** Epithelial atypia at margins does not always indicate residual tumor. Correlation with clinical context and immunohistochemistry when needed guides appropriate management.

2. **Anticoagulation:** Meta-analyses support continuing warfarin for most dermatologic procedures with appropriate hemostasis. Stopping increases stroke risk without substantially reducing bleeding events.

3. **Melanoma margins:** For melanoma-in-situ Mohs, MART-1 staining helps identify subtle melanocytes. The 9 mm clinical margin achieves histologic clearance in most cases.

4. **Complex reconstruction:** The reconstructive elevator concept encourages selecting the optimal technique rather than exhausting simpler options. A forehead flap may be the best first choice for large nasal defects.

5. **Perineural invasion:** Named nerve involvement (>0.1 mm diameter) carries worse prognosis and may warrant adjuvant radiation even with clear Mohs margins.

6. **Quality metrics:** Mohs surgeons should track cure rates, recurrence, and complications. Benchmarking against published data identifies improvement opportunities.

7. **Technology adoption:** Intraoperative imaging technologies (RCM, OCT) show promise for real-time margin assessment but require validation and workflow integration before widespread adoption.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'roenigk-mohs',
      type: 'textbook',
      title: 'Roenigk\'s Dermatologic Surgery',
      authors: ['Rohrer TE', 'Cook JL', 'Nguyen TH'],
      source: 'Informa Healthcare',
    },
    {
      id: 'aad-skin-surgery',
      type: 'website',
      title: 'Appropriate Use Criteria for Mohs Micrographic Surgery',
      authors: ['American Academy of Dermatology'],
      source: 'AAD',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-cancer', targetType: 'condition', relationship: 'related', label: 'Skin Cancer' },
    { targetId: 'dermatology-bcc', targetType: 'condition', relationship: 'related', label: 'Basal Cell Carcinoma' },
    { targetId: 'dermatology-scc', targetType: 'condition', relationship: 'related', label: 'Squamous Cell Carcinoma' },
    { targetId: 'dermatology-melanoma', targetType: 'condition', relationship: 'related', label: 'Melanoma' },
  ],

  tags: {
    systems: ['dermatology'],
    topics: ['surgery', 'dermatology', 'oncology'],
    keywords: ['Mohs surgery', 'biopsy', 'excision', 'cryotherapy', 'flaps', 'skin cancer'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['dermatology', 'surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default dermatologicProceduresContent;
