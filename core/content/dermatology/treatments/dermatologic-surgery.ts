/**
 * Dermatologic Surgery
 *
 * Minor surgical procedures performed on the skin.
 */

import { EducationalContent } from '../../types';

export const dermatologicSurgeryContent: EducationalContent = {
  id: 'dermatology-treatment-surgery',
  type: 'concept',
  name: 'Dermatologic Surgery',
  alternateNames: ['Minor Skin Surgery', 'Dermatologic Procedures', 'Skin Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Dermatologic surgery includes small procedures to remove skin growths, check for cancer, and repair skin. It is usually done in a doctor\'s office.',
      explanation: `## What Is Dermatologic Surgery?

Dermatologic surgery means small operations on the skin. Doctors do these to:
- Remove skin growths
- Check if something is cancer
- Fix skin after an injury
- Make skin look better

## Common Procedures

**Biopsy:**
- Taking a small sample of skin
- Sent to lab for testing
- Helps find out what a spot is

**Excision:**
- Cutting out a spot or growth
- Stitches close the skin
- Used for moles and skin cancers

**Cryotherapy:**
- Freezing a spot with cold spray
- Used for warts and pre-cancers
- Blister forms and heals

**Curettage:**
- Scraping off a spot
- Often combined with freezing
- Used for certain skin cancers

## Before Surgery

- Tell doctor about medicines you take
- Tell about allergies
- Ask questions about the procedure
- Follow instructions about eating/drinking

## After Surgery

- Keep area clean
- Follow wound care instructions
- Watch for signs of infection
- Return for stitch removal if needed`,

      keyTerms: [
        { term: 'Biopsy', definition: 'Taking a small sample for testing' },
        { term: 'Excision', definition: 'Cutting out a spot or growth' },
        { term: 'Cryotherapy', definition: 'Freezing treatment using extreme cold' },
        { term: 'Curettage', definition: 'Scraping off skin tissue' },
        { term: 'Stitches', definition: 'Threads used to close a wound' },
      ],
      analogies: [
        'A biopsy is like taking a taste test - a small sample tells you about the whole dish.',
        'Cryotherapy is like using cold to put out a small fire on the skin.',
      ],
      examples: [
        'Doctor removes suspicious mole with small excision',
        'Freezing spray used to treat wart on finger',
        'Skin biopsy taken to check for skin cancer',
      ],
    },

    2: {
      level: 2,
      summary: 'Dermatologic surgery encompasses diagnostic and therapeutic procedures. These office-based surgeries treat benign and malignant skin conditions.',
      explanation: `## Diagnostic Procedures

**Shave Biopsy:**
- Blade removes superficial tissue
- No stitches needed
- Good for raised lesions
- Diagnostic only (not therapeutic)

**Punch Biopsy:**
- Circular blade (3-8mm)
- Full-thickness sample
- One or two stitches
- Best for inflammatory conditions

**Incisional Biopsy:**
- Wedge of large lesion
- Preserves architecture
- Multiple samples if needed

**Excisional Biopsy:**
- Removes entire lesion
- Therapeutic and diagnostic
- Standard for suspected melanoma

## Therapeutic Procedures

**Elliptical Excision:**
- Football-shaped removal
- Linear closure
- Best cosmetic result
- Standard for skin cancer

**Cryosurgery:**
- Liquid nitrogen (-196C)
- Freeze-thaw cycles
- Used for actinic keratoses, warts, seborrheic keratoses
- No anesthesia needed

**Electrosurgery:**
- Electrical current destroys tissue
- Electrodesiccation and curettage (ED&C)
- Used for superficial skin cancers
- Cauterizes bleeding

**Mohs Micrographic Surgery:**
- Layer-by-layer removal
- Immediate microscopic examination
- Tissue-sparing technique
- Highest cure rate for skin cancer

## Anesthesia

**Local anesthesia:**
- Lidocaine most common
- Numbs area for procedure
- Brief stinging on injection
- Safe for most patients`,

      keyTerms: [
        { term: 'Mohs surgery', definition: 'Precise technique removing skin cancer layer by layer' },
        { term: 'Electrodesiccation', definition: 'Using electricity to destroy tissue' },
        { term: 'Actinic keratosis', definition: 'Rough, scaly patch from sun damage' },
        { term: 'Seborrheic keratosis', definition: 'Benign waxy skin growth' },
        { term: 'Melanoma', definition: 'Serious type of skin cancer' },
      ],
      analogies: [
        'Mohs surgery is like peeling an onion layer by layer - checking each layer until clear.',
        'Punch biopsy is like using a cookie cutter - takes a perfect circle sample.',
      ],
      examples: [
        '4mm punch biopsy of rash for dermatitis diagnosis',
        'Elliptical excision of basal cell carcinoma on nose',
        'ED&C for superficial basal cell carcinoma on back',
      ],
      clinicalNotes: 'Shave biopsy inappropriate for suspected melanoma - cannot measure Breslow depth. Punch biopsy preferred for inflammatory conditions to see full dermis. Mohs surgery indicated for high-risk skin cancers in cosmetically sensitive areas.',
    },

    3: {
      level: 3,
      summary: 'Dermatologic surgery requires knowledge of anatomy, histology, and closure techniques. Proper patient selection and technique minimize complications.',
      explanation: `## Wound Healing and Repair

**Primary Intention:**
- Edges approximated with sutures
- Fastest healing
- Best cosmetic result
- Requires adequate tissue mobility

**Secondary Intention:**
- Wound left open to heal
- Granulation tissue fills defect
- Longer healing time
- Used when closure not possible

**Tertiary Intention:**
- Delayed primary closure
- Wound initially left open
- Closed after infection controlled

## Suture Techniques

**Simple Interrupted:**
- Individual stitches
- Precise edge alignment
- Easy to remove selectively

**Running/Continuous:**
- Single long suture
- Faster closure
- If breaks, entire line loosens

**Vertical Mattress:**
- Everting suture
- Good for high-tension areas
- More visible marks

**Subcuticular:**
- Intradermal placement
- Best cosmetic result
- More time-consuming

## Complications

**Early:**
- Bleeding/hematoma
- Infection
- Wound dehiscence
- Nerve injury

**Late:**
- Hypertrophic scar
- Keloid formation
- Spread scar
- Dyspigmentation

## Special Sites

**Face:**
- Relaxed skin tension lines
- Cosmetic units
- Nose, eyelid, lip considerations
- Flaps and grafts common

**Scalp:**
- Galea for deep sutures
- Hair-bearing considerations
- Undermining often needed

**Lower leg:**
- Poor healing due to blood flow
- Higher infection risk
- Consider secondary intention

**Hand:**
- Functional importance
- Tendon/nerve proximity
- Splinting considerations`,

      keyTerms: [
        { term: 'Approximated', definition: 'Brought together and aligned' },
        { term: 'Granulation tissue', definition: 'New connective tissue that forms in healing wounds' },
        { term: 'Dehiscence', definition: 'Wound opening after closure' },
        { term: 'Undermining', definition: 'Loosening tissue beneath skin to allow movement' },
        { term: 'Hematoma', definition: 'Collection of blood outside vessels' },
        { term: 'Dyspigmentation', definition: 'Abnormal skin color change' },
      ],
      analogies: [
        'Suture techniques are like different sewing stitches - each has a specific purpose.',
        'Undermining is like loosening a carpet - allows it to stretch and move.',
      ],
      examples: [
        'Complex closure with flap repair after skin cancer removal on nose',
        'Secondary intention healing for wound on lower leg',
        'Subcuticular sutures for cosmetic closure on face',
      ],
      clinicalNotes: 'Anticoagulation increases bleeding risk but does not require discontinuation for minor procedures. Pressure dressing more important than stopping anticoagulation. Prophylactic antibiotics rarely needed for clean dermatologic surgery.',
    },

    4: {
      level: 4,
      summary: 'Dermatologic surgery integrates oncologic principles with cosmetic outcomes. Advanced techniques like Mohs surgery and reconstruction optimize results.',
      explanation: `## Mohs Micrographic Surgery

**Indications:**
- High-risk basal cell carcinoma
- Recurrent skin cancers
- Poorly defined margins
- Cosmetically sensitive areas
- Rapidly growing tumors

**Technique:**
1. Tumor debulking
2. First Mohs layer with beveled edges
3. Tissue mapping and processing
4. Horizontal frozen sections
5. 100% margin examination
6. Repeat until clear
7. Reconstruction

**Advantages:**
- Highest cure rates
- Tissue conservation
- Immediate margin assessment
- Same-day reconstruction

**Reconstruction Options:**
- Primary closure
- Healing by secondary intention
- Local flap
- Skin graft

## Flap Reconstruction

**Advancement Flap:**
- Moves tissue straight forward
- Simple design
- Good for cheek, forehead

**Rotation Flap:**
- Arc-shaped incision
- Rotates tissue into defect
- Scalp, cheek applications

**Transposition Flap:**
- Moves tissue across bridge
- Rhombic flap common
- Nasal sidewall, temple

**Island Pedicle Flap:**
- Subcutaneous blood supply
- No skin bridge
- Complex movements possible

## Skin Grafts

**Split-Thickness:**
- Epidermis + partial dermis
- Takes better, more contraction
- Donor site heals faster
- Used for large defects

**Full-Thickness:**
- Entire epidermis and dermis
- Better cosmetic match
- More durable
- Requires closure of donor site

## Preoperative Assessment

**Medical History:**
- Anticoagulation status
- Bleeding disorders
- Immunosuppression
- Diabetes control
- Prior radiation

**Medications to Note:**
- Anticoagulants (continue usually)
- Antiplatelet agents
- Immunosuppressants
- Herbal supplements (stop if possible)

**Allergy Assessment:**
- Local anesthetics
- Topical antibiotics
- Adhesive products
- Latex`,

      keyTerms: [
        { term: 'Mohs layer', definition: 'Thin tissue layer removed during Mohs surgery' },
        { term: 'Beveled edges', definition: 'Angled cut that facilitates tissue processing' },
        { term: 'Advancement flap', definition: 'Tissue moved directly forward into defect' },
        { term: 'Transposition flap', definition: 'Tissue moved over intervening skin into defect' },
        { term: 'Split-thickness graft', definition: 'Graft containing epidermis and upper dermis' },
      ],
      analogies: [
        'Mohs surgery mapping is like a treasure map - precise orientation to find cancer roots.',
        'Flap movement is like moving furniture - sliding pieces to fill empty spaces.',
      ],
      examples: [
        'Mohs surgery for recurrent basal cell carcinoma on nose',
        'Bilobed transposition flap for nasal tip defect',
        'Full-thickness skin graft for nasal ala reconstruction',
      ],
      clinicalNotes: 'Mohs cure rates: BCC 98-99%, SCC 95-97%. Reconstruction can be done by Mohs surgeon or referral to plastic surgery/otolaryngology. Consider delayed reconstruction if extensive or complex. Photography important for documentation.',
    },

    5: {
      level: 5,
      summary: 'Dermatologic surgery requires mastery of anatomy, oncology, and reconstruction. Evidence-based approaches optimize oncologic and aesthetic outcomes.',
      explanation: `## Oncologic Principles

**Margin Assessment:**
- Bread loafing vs en face
- Mohs processing advantages
- Permanent vs frozen section
- Cytokeratin staining

**High-Risk Features:**
- Perineural invasion
- Lymphovascular invasion
- Poor differentiation
- Recurrence history
- Immunosuppression

**Staging:**
- AJCC criteria
- Tumor thickness
- Ulceration status
- Mitotic rate
- Sentinel node considerations

## Advanced Techniques

**Complex Flaps:**
- Paramedian forehead flap
- Cheek rotation advancement
- Nasolabial interpolation
- Multi-stage procedures

**Tissue Expansion:**
- Gradual skin stretching
- Large congenital nevi
- Scar revision
- Requires multiple stages

**Laser Surgery:**
- CO2 laser ablation
- Vascular lesion treatment
- Scar revision
- Precise tissue removal

## Quality and Safety

**Accreditation:**
- Joint Commission standards
- Office-based surgery regulations
- Equipment requirements
- Emergency preparedness

**Quality Metrics:**
- Complication rates
- Patient satisfaction
- Recurrence rates
- Cosmetic outcomes

**Informed Consent:**
- Procedure explanation
- Risk discussion
- Alternative options
- Expected outcomes
- Photography consent

## Research and Innovation

**Image-Guided Surgery:**
- Reflectance confocal microscopy
- Optical coherence tomography
- Real-time margin assessment
- Non-invasive alternatives

**Artificial Intelligence:**
- Margin prediction
- Reconstruction planning
- Outcome prediction
- Quality assurance

**Regenerative Approaches:**
- Acellular dermal matrices
- Growth factor applications
- Stem cell therapies
- Enhanced healing protocols

## Special Considerations

**Transplant Patients:**
- High skin cancer burden
- Aggressive behavior
- Frequent surveillance
- Prevention counseling

**Genodermatoses:**
- Basal cell nevus syndrome
- Xeroderma pigmentosum
- Dysplastic nevus syndrome
- Multidisciplinary care

**Patient-Reported Outcomes:**
- FACE-Q scales
- SCQOLIT
- Functional assessments
- Psychological impact`,

      keyTerms: [
        { term: 'Perineural invasion', definition: 'Cancer cells tracking along nerves' },
        { term: 'En face processing', definition: 'Examining entire margin surface in Mohs' },
        { term: 'Paramedian forehead flap', definition: 'Forehead tissue transferred to nose' },
        { term: 'Tissue expansion', definition: 'Gradual stretching to create extra skin' },
        { term: 'Sentinel node', definition: 'First lymph node draining a tumor area' },
      ],
      analogies: [
        'Perineural invasion is like cancer hitchhiking on nerve highways to spread.',
        'Tissue expansion is like slowly stretching a balloon - skin grows to fill the space.',
      ],
      examples: [
        'Complex nasal reconstruction after extensive skin cancer removal',
        'Tissue expansion for large congenital nevus removal',
        'Image-guided margin assessment in challenging skin cancer case',
      ],
      clinicalNotes: 'AJCC 8th edition staging for melanoma emphasizes tumor thickness, ulceration, and mitotic rate. Consider sentinel lymph node biopsy for melanoma >0.8mm or with high-risk features. Multidisciplinary tumor boards valuable for complex cases.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'dermatology-skin-cancer', targetType: 'topic', relationship: 'related', label: 'Surgical treatment' },
    { targetId: 'dermatology-treatment-steroids', targetType: 'concept', relationship: 'related', label: 'Intralesional use' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'surgery', 'procedures', 'skin-cancer'],
    keywords: ['surgery', 'biopsy', 'excision', 'Mohs', 'cryotherapy', 'flap', 'graft'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology', 'surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
