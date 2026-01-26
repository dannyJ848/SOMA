/**
 * Wound Assessment
 *
 * Comprehensive content on systematic wound evaluation including
 * physical examination, measurement techniques, documentation,
 * and clinical decision-making.
 */

import { EducationalContent } from '../types';

export const woundAssessmentContent: EducationalContent = {
  id: 'wound-care-assessment',
  type: 'topic',
  name: 'Wound Assessment',
  alternateNames: ['Wound Evaluation', 'Wound Examination', 'Wound Documentation'],

  levels: {
    1: {
      level: 1,
      summary: 'When checking a wound, look at its size, color, and smell. Clean wounds should look pink and healthy, not red, swollen, or infected.',
      explanation: `## How to Look at a Wound

Checking a wound means looking carefully at how it's healing. This helps you know if the wound is getting better or if it needs help.

## What to Look For

**Size and Shape**
- Is the wound getting smaller? (This is good!)
- Measure it each time you check
- You can use a ruler or compare to a coin

**Color of the Wound Bed**
- **Pink/red:** Healthy healing tissue
- **Black:** Dead tissue that needs to be removed
- **Yellow:** Dead cells or pus
- **White:** May mean too much moisture

**Edges**
- Are the edges smooth and attached?
- Are they rolled under or not healing?

**Fluid Coming Out (Drainage)**
- **Clear or light yellow:** Usually normal
- **Thick yellow/green:** May mean infection
- **Bloody:** Fresh bleeding
- **Amount:** None, small, moderate, or large

**Smell**
- No smell or mild smell is usually okay
- Strong, bad smell can mean infection

**Pain**
- Less pain over time means healing
- More pain can mean infection or problems

## Checking for Infection

**Warning Signs:**
- Redness spreading around the wound
- Increased warmth in the area
- More swelling than before
- Bad smell
- Thick yellow/green fluid
- Fever (body temperature over 100.4°F or 38°C)
- Increasing pain

**When to Call a Doctor:**
- Any signs of infection
- Wound getting bigger instead of smaller
- New bleeding that won't stop
- Red streaks going up the arm or leg
- You feel sick or have fever

## How to Measure a Wound

**Simple Method:**
1. Clean the wound first
2. Use a ruler or tape measure
3. Measure length (longest direction)
4. Measure width (side to side)
5. Write down both numbers with the date

**Example:**
- "2 cm long x 1 cm wide"
- Compare measurements each time to check progress

## Draw or Take Pictures

- Take photos from the same distance each time
- Use a ruler or coin next to the wound for size reference
- Mark the date on each picture
- This helps track healing over time

## Special Wounds

**Burns:**
- Check for blistering
- Look for charring (black areas)
- Feel for pain (deep burns may not hurt)

**Pressure Sores:**
- Check bony areas (hips, heels, tailbone)
- Look for redness that doesn't fade when pressed
- Feel for hard areas under the skin

**Surgical Wounds:**
- Check for opening of the incision
- Look for redness around stitches
- Make sure staples or stitches are intact`,
      keyTerms: [
        { term: 'wound bed', definition: 'The surface inside the wound where healing happens' },
        { term: 'drainage', definition: 'Fluid that comes out of a wound; can be clear, yellow, or bloody' },
        { term: 'eschar', definition: 'Hard, black, dead tissue that forms on or in a wound', pronunciation: 'ES-kar' },
        { term: 'granulation', definition: 'Healthy pink tissue that forms in a healing wound', pronunciation: 'gran-yoo-LAY-shun' },
        { term: 'infection', definition: 'When germs grow in a wound and cause problems' },
        { term: 'erythema', definition: 'Redness of the skin, often a sign of inflammation or infection', pronunciation: 'air-ih-THEE-mee-uh' },
      ],
      analogies: [
        'Checking a wound is like checking a garden - you look for weeds (infection), measure growth (healing progress), and make sure the soil (wound bed) is healthy.',
        'Wound measurement is like tracking a child\'s height on a doorframe - you need consistent measurements over time to see progress.',
        'The wound bed color is like a traffic light: pink means go (healing), yellow means caution, and black means stop (needs attention).',
      ],
      examples: [
        'A wound that was 3 cm long last week and is now 2.5 cm is getting smaller and healing properly.',
        'If a scrape on the knee becomes more red, warm, and painful after three days, it may be infected.',
        'A surgical incision with a small amount of clear, pink drainage is typically normal, but thick yellow drainage would be concerning.',
      ],
      patientCounselingPoints: [
        'Take pictures of your wound regularly to track healing progress.',
        'Keep a log of measurements and what you see each time you change the dressing.',
        'Don\'t measure too often - once a week is usually enough.',
        'Show your pictures and notes to your healthcare provider at appointments.',
        'Call your doctor if you notice any sudden changes or signs of infection.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic wound assessment includes evaluating location, size, depth, tissue type, exudate, edges, surrounding skin, and pain. Proper documentation tracks healing progression.',
      explanation: `## Systematic Wound Assessment Framework

A structured approach ensures nothing is missed and allows accurate tracking over time.

## The 8-Point Assessment

### 1. Location
Document the specific anatomical location:
- **Standard terms:** Use proper anatomical names
  - "Distal left forearm" not "left arm"
  - "Sacr area" not "lower back"
- **Laterality:** Right vs. left
- **Special areas:**
  - Over joints (mobility concerns)
  - Bony prominences (pressure ulcer risk)
  - Distal extremities (vascular concerns)

### 2. Measurement (Size)
**Standard Method:**
- Measure length (longest dimension, head-to-toe)
- Measure width (perpendicular to length, side-to-side)
- Record as: Length x Width x Depth
- **Important:** Always measure from the same reference points

**Ruler Method:**
- Use a disposable or sterilizable ruler
- Measure in centimeters (standard)
- Note: 1 inch = 2.54 cm

**Tracing Method:**
- Place transparent acetate over wound
- Trace wound outline with permanent marker
- Date the tracing
- Good for irregular shapes

**Photography:**
- Include measurement scale/ruler in frame
- Consistent distance and lighting
- Standardize camera position
- Date and label all photos

### 3. Depth
**Assessment Methods:**
- **Cotton tip applicator:**
  - Gently insert to wound base
  - Mark depth at skin edge
  - Measure marked portion
- **Depth measurement tool:**
  - Special rulers with curved tip

**Depth Categories:**
- **Superficial:** Epidermis only
- **Partial thickness:** Into dermis
- **Full thickness:** Through dermis
- **Deep:** Into subcutaneous tissue or deeper

**Undermining:**
- Assessment: Probe under wound edges
- Document as clock face (e.g., "undermining 2 cm from 3-6 o'clock")
- Use sterile cotton swab

### 4. Tissue Type (Wound Bed)

**Colors and Types:**

| Color | Tissue Type | Meaning | Action |
|-------|-------------|---------|--------|
| Red/Pink | Granulation | Healthy healing tissue | Continue care |
| Red/Bright | Granular | Vascular, healing | Continue care |
| Yellow | Slough | Dead cells, fibrin | Clean/debride |
| Tan/Grey | Slough | Dead tissue | Clean/debride |
| Black/Brown | Eschar | Necrotic tissue | Debride if not stable |
| White | Maceration | Too wet | Adjust dressing |

**Granulation Tissue:**
- Healthy: Pink/red, moist, bumpy (granular)
- Bleeds easily (normal)
- Signs of poor quality:
  - Pale: May indicate ischemia
  - Dark red: May indicate infection or excess inflammation
  - Friable: Excessively bleeds

**Slough:**
- Yellow/tan stringy or fibrinous material
- Adherent to wound bed
- Impairs healing
- Requires removal (debridement)

**Eschar:**
- Thick, leathery, black/brown necrotic tissue
- May be stable (heals underneath) or unstable (needs removal)
- Heel eschar is often stable (dry, no signs of infection)

### 5. Exudate (Drainage)

**Amount:**
| Amount | Description | Dressing Implication |
|--------|-------------|---------------------|
| None | Dry wound | No drainage |
| Scant | Barely moist, no soaking | Minimal absorbency needed |
| Small | Moist, soaks <25% of dressing | Light absorbency |
| Moderate | Soaks 25-75% of dressing | Moderate absorbency |
| Large/Pouring | Soaks >75% or requires frequent changes | High absorbency |

**Color/Type:**
- **Serous:** Clear, thin, normal healing
- **Serosanguineous:** Pink/red, thin, mixed with blood (normal)
- **Sanguineous:** Bloody, active bleeding
- **Purulent:** Thick, yellow/green, indicates infection

**Odor:**
- **None/No odor:** Normal
- **Mild:** Slight wound smell (may be normal)
- **Moderate:** Noticeable in room
- **Strong:** Foul odor throughout room
- **Descriptions:** Sweet, fecal, musty, putrid

### 6. Wound Edges

**Edge Characteristics:**
- **Attached:** Edges flush with wound bed (good)
- **Rolled/Undermined:** Edges curled under wound (poor healing)
- **Callused:** Hardened edges
- **Irregular:** jagged, uneven
- **Regular:** smooth, even

**Periwound Skin:**
- **Macereated:** White, soggy from too much moisture
- **Erythematous:** Red (may indicate infection or irritation)
- **Indurated:** Hardened
- **Ecchymotic:** Bruised

### 7. Pain Assessment

**Documentation:**
- **Location:** In wound, around wound, radiating
- **Intensity:** 0-10 scale or descriptive (mild, moderate, severe)
- **Quality:** Burning, sharp, dull, throbbing
- **Duration:** Constant, intermittent, with dressing change
- **Relieving factors:** Medications, elevation

### 8. Healing Status

**Signs of Healing:**
- Size decreasing
- Granulation tissue present
- Decreasing exudate
- Decreasing pain
- Advancing edges

**Signs of Non-Healing:**
- No size change after 4 weeks
- Increasing exudate
- Increasing pain
- Rolled/non-advancing edges
- Persistent eschar/slough

## Documentation Template

**WOUND ASSESSMENT TEMPLATE**
- Date: ___
- Location: ___
- Size: L ___ x W ___ x D ___ (cm)
- Tissue: ___ % granulation, ___ % slough, ___ % eschar
- Exudate: ___ amount, ___ type, ___ odor
- Edges: ___
- Periwound: ___
- Pain: ___/10, ___
- Healing status: ___
- Dressing: ___
- Next assessment: ___

## Special Assessment Considerations

**Pressure Injuries:**
- Check all bony prominences
- Push-test for Stage 1 (non-blanchable erythema)
- Measure tunneling/undermining

**Diabetic Foot Ulcers:**
- Test sensation (monofilament)
- Check pulses
- Assess for osteomyelitis (probe-to-bone test)

**Venous Ulcers:**
- Location: medial lower leg ("gaiter area")
- Check for edema, lipodermatosclerosis
- Assess arterial supply before compression

**Surgical Wounds:**
- Check for dehiscence (opening)
- Assess for hematoma, seroma
- Evaluate wound edge approximation`,
      keyTerms: [
        { term: 'exudate', definition: 'Fluid, cells, and cellular debris that exits a blood vessel and deposits in or on tissue; commonly called drainage', pronunciation: 'EKS-yoo-dayt' },
        { term: 'granulation tissue', definition: 'Pink, red, or moist tissue that forms in wounds during healing; indicates healthy healing', pronunciation: 'gran-yoo-LAY-shun' },
        { term: 'slough', definition: 'Yellow, white, or tan devitalized tissue that adheres to the wound bed; must be removed for healing', pronunciation: 'sluff' },
        { term: 'undermining', definition: 'Area under wound edges that has been destroyed, creating a pocket or tunnel' },
        { term: 'maceration', definition: 'Softening and breaking down of skin from prolonged exposure to moisture', pronunciation: 'mass-er-AY-shun' },
        { term: 'periwound', definition: 'The area of skin immediately surrounding a wound', pronunciation: 'pair-ee-WOOND' },
        { term: 'erythema', definition: 'Redness of the skin caused by increased blood flow; can indicate inflammation or infection', pronunciation: 'air-ih-THEE-mee-uh' },
      ],
      analogies: [
        'The clock face method for describing undermining is like describing a hill around a wound - if there\'s a hollow from 3-6 o\'clock, you document where it is.',
        'Wound assessment is like a science experiment - you need consistent measurements, notes, and photos to track progress accurately.',
      ],
      clinicalNotes: 'Always perform wound assessment after cleaning and removing old dressings. Document findings objectively and consistently. Any significant change warrants reassessment of treatment plan.',
      patientCounselingPoints: [
        'Learn to recognize the signs of healthy healing: pink tissue, less pain, shrinking size.',
        'Keep a wound diary with photos and measurements taken weekly.',
        'Report increasing pain, redness spreading, fever, or foul odor immediately.',
        'Avoid measuring more than once a week as frequent manipulation can slow healing.',
      ],
    },

    3: {
      level: 3,
      summary: 'Comprehensive wound assessment incorporates location, dimensions, tissue composition, exudate characteristics, edge status, periwound condition, and pain. Documentation systems include PUSH, BWAT, and TIME frameworks.',
      explanation: `## Advanced Wound Assessment and Documentation

### Standardized Assessment Frameworks

**PUSH Tool (Pressure Ulcer Scale for Healing):**

| Parameter | Score 0 | Score 1 | Score 2 | Score 3 |
|-----------|---------|---------|---------|---------|
| **Size** | 0 cm² | <0.3 cm² | 0.3-0.7 cm² | 0.8-1.2 cm² |
| | | 1.3-2.0 cm² | 2.1-3.0 cm² | 3.1-4.0 cm² |
| | | 4.1-8.0 cm² | >8.0 cm² | - |
| **Exudate Amount** | None | Light | Moderate | Heavy |
| **Tissue Type** | Closed | Epithelial tissue | Granulation tissue | Slough |
| | | | | Eschar |

**Score Range: 0-17** (lower = better)

**BWAT (Bates-Jensen Wound Assessment Tool):**
- 13 parameters, each scored 1-5 (healthy to necrotic)
- Parameters: size, depth, edges, undermining, necrotic tissue amount, necrotic tissue type, exudate type, exudate amount, skin color surrounding, peripheral tissue edema, peripheral tissue induration, granulation tissue, epithelialization
- Total score: 13-65 (lower = better)

**TIME Framework:**
- **T** = Tissue (non-viable): % necrotic tissue
- **I** = Infection/inflammation: clinical signs, bacterial load
- **M** = Moisture balance: exudate amount, maceration
- **E** = Edge (non-advancing): rolled, undermined, callused

### Detailed Tissue Assessment

**Necrotic Tissue Types:**

| Type | Appearance | Debridement Needed | Stability |
|------|------------|-------------------|-----------|
| **Eschar** | Black/brown, leathery, hard | Yes (unless stable) | Often stable on heels |
| **Slough** | Yellow/tan, stringy, adherent | Yes | No (impedes healing) |
| **Fibrin** | Thin, yellow, glossy | Sometimes | May resolve with moisture |

**Viable Tissue Types:**
- **Granulation:** Pink/red, moist, granular, bleeds easily
  - Healthy: Beefy red, pearly, glistening
  - Hypergranulation: Overgrowth above wound level
  - Pale: Ischemic, needs evaluation
- **Epithelialization:** Pink, shiny, thin new skin at edges
- **Contracture:** Wound edges pulling inward

### Exudate Analysis

**Composition and Meaning:**

| Exudate Type | Characteristics | Clinical Significance |
|--------------|-----------------|----------------------|
| **Serous** | Clear, thin, watery | Normal transudate from inflammation |
| **Serosanguineous** | Pink/red, thin | Light bleeding, usually normal |
| **Sanguineous** | Red, bloody | Active bleeding, capillary oozing |
| **Purulent** | Thick, yellow/green/brown | Infection (WBCs, bacteria, debris) |
| **Hemopurulent** | Bloody + purulent | Infected bleeding wound |

**Exudate Factors Affecting Healing:**
- **Beneficial:** Contains growth factors, cells, nutrients
- **Detrimental:** Excessive amounts cause maceration, bacterial growth
- **Goal:** Moist, not wet; balanced with dressing absorbency

### Advanced Edge and Periwound Assessment

**Edge Characteristics and Pathophysiology:**

| Edge Type | Appearance | Implication | Management |
|-----------|------------|-------------|------------|
| **Attached** | Flush with wound bed | Healing progressing | Continue current care |
| **Rolled/Epibole** | Curled under, fibrotic | Epithelial cells migrating down | Deroof/roughen edges |
| **Callused** | Hardened, hyperkeratotic | Chronic wound, pressure | Debride, offload |
| **Undermined** | Pocket under edges | Infection/trauma track | Pack, address cause |
| **Tunneled** | Channel away from wound | Sinus tract | Probe, identify extent |

**Periwound Assessment:**
- **Erythema:**
  - Normal: 2 cm or less from wound edge
  - Concern: >2 cm, spreading, warmth, induration
- **Edema:** Pitting vs. non-pitting, graded 1-4+
- **Induration:** Hardening from fibrosis, inflammation
- **Maceration:** White, boggy from moisture, macerated skin prone to breakdown
- **Ecchymosis:** Bruising, trauma or coagulopathy
- **Dermatitis:** Contact dermatitis from dressing adhesives

### Depth and Undermining Assessment

**Measuring Depth:**
1. Use sterile cotton swab
2. Insert at deepest point
3. Mark at skin level with forceps
4. Measure marked portion
5. Repeat at multiple points for irregular wounds

**Undermining/Tunneling Documentation:**
- **Clock face method:**
  - Patient's head = 12 o'clock
  - Patient's feet = 6 o'clock
  - Right side = 3 o'clock
  - Left side = 9 o'clock
- **Format:** "Undermining 2 cm from 2-5 o'clock"
- **Tunneling:** Document direction and length

### Pain Assessment Tools

**Numeric Rating Scale (NRS):**
- 0 = No pain
- 1-3 = Mild pain
- 4-6 = Moderate pain
- 7-10 = Severe pain

**Pain Categories in Wounds:**
- **Chronic wound pain:** Constant, related to wound or comorbidities
- **Procedural pain:** During dressing changes, debridement
- **Incident pain:** Movement, pressure-related
- **Neuropathic pain:** Burning, shooting, related to nerve damage

### Wound Photography Standards

**Optimal Practices:**
- **Equipment:**
  - Digital camera with macro capability
  - Include measurement scale/color card in frame
  - Consistent lighting (prefer natural or standardized)
- **Technique:**
  - 90-degree angle to wound (not oblique)
  - Distance: 10-15 cm for macro, 30-40 cm for wider view
  - Include periwound area (1-2 cm border)
  - Avoid flash glare (use off-camera flash or ambient)
- **Documentation:**
  - Date and time stamp
  - Patient identifier
  - Wound location
  - Anonymize as required

### Clinical Decision Making Based on Assessment

**Red Flags Requiring Immediate Attention:**
- Crepitus (gas in tissue) → necrotizing infection
- Rapidly spreading erythema → cellulitis or sepsis
- Purulent exudate with systemic signs → infection
- Exposed bone, tendon, joint → surgical consult
- Sudden increase in pain → possible infection or ischemia

**When to Escalate:**
- Wound not improved after 4 weeks of appropriate care
- Suspected osteomyelitis (probe-to-bone positive)
- Signs of systemic infection
- Vascular insufficiency (ABI < 0.8)
- Unclear diagnosis or atypical presentation

### Documentation Best Practices

**SOAP Format:**
- **Subjective:** Patient report of pain, changes
- **Objective:** Wound measurements, characteristics, photos
- **Assessment:** Interpretation of findings, healing status
- **Plan:** Treatment changes, follow-up

**Critical Elements:**
1. Date and time of assessment
2. Provider credentials
3. Location with anatomical precision
4. Accurate measurements (method specified)
5. Tissue type percentages
6. Exudate description (amount, type, odor)
7. Edge/periwound status
8. Pain assessment
9. Current treatment
10. Plan and follow-up

**Consistency is Key:**
- Same provider when possible
- Same measurement technique
- Same documentation format
- Same lighting for photos
- Allows valid comparison over time`,
      keyTerms: [
        { term: 'PUSH tool', definition: 'Pressure Ulcer Scale for Healing; validated 3-parameter tool to track pressure injury healing' },
        { term: 'BWAT', definition: 'Bates-Jensen Wound Assessment Tool; comprehensive 13-parameter wound assessment with 1-5 scale per parameter' },
        { term: 'TIME framework', definition: 'Wound bed preparation framework: Tissue non-viable, Infection, Moisture imbalance, Edge non-advancing' },
        { term: 'epibole', definition: 'Rolled or curled-under wound edges that prevent epithelial migration; must be addressed for healing', pronunciation: 'EP-ih-bohl' },
        { term: 'hypergranulation', definition: 'Excessive granulation tissue that grows above wound level; impairs epithelialization' },
        { term: 'maceration', definition: 'Softening of skin from prolonged moisture exposure; predisposes to skin breakdown' },
        { term: 'procedural pain', definition: 'Pain occurring during wound care activities like dressing changes and debridement' },
      ],
      clinicalNotes: `Assessment Red Flags:
- Crepitus with erythema → necrotizing fasciitis, STAT surgery consult
- Pain out of proportion → consider necrotizing infection, compartment syndrome
- Probe-to-bone positive → high suspicion for osteomyelitis (PPV 0.89)
- New or worsening pain at rest → possible ischemia
- Sudden increase in exudate → possible fistula or abscess

Documentation Errors to Avoid:
- Subjective terms ("better", "worse") without objective data
- Inconsistent measurement techniques
- Missing dates/times
- Incomplete wound descriptions`,
    },

    4: {
      level: 4,
      summary: 'Systematic wound assessment integrates validated tools (PUSH, BWAT), tissue analysis, exudate characterization, and advanced imaging. Objective documentation guides evidence-based interventions and predicts outcomes.',
      explanation: `## Advanced Wound Assessment and Monitoring

### Validated Assessment Instruments

**Pressure Ulcer Scale for Healing (PUSH):**

Developed by NPUAP (now NPIAP), this tool provides:
- **Reliability:** Inter-rater reliability 0.80-0.92
- **Validity:** Correlates with healing outcome
- **Utility:** Tracks pressure ulcer healing over time
- **Components:**
  - Surface area (calculated from L x W)
  - Exudate amount (none, light, moderate, heavy)
  - Tissue type (closed, epithelialized, granulation, slough, eschar)

**Bates-Jensen Wound Assessment Tool (BWAT):**

| Parameter | 1 (Healthy) | 2 | 3 | 4 | 5 (Necrotic) |
|-----------|-------------|---|---|---|--------------|
| Size | 0 | <0.3 | 0.3-0.7 | 0.8-1.2 | >1.2 cm² |
| Depth | Closed | Superficial | Partial | Full thickness | Bone/joint |
| Edges | Open | diffuse | Rolled | Flat | Undermined |
| Undermining | None | <1.5 cm | 1.5-2.0 cm | 2.0-2.5 cm | >2.5 cm |
| Necrotic tissue | None | ≤25% | 26-50% | 51-75% | >75% |
| Necrotic type | None | Loose | Adherent | Mixed | Eschar |
| Exudate type | None | Serous | Serosanguineous | Sanguineous | Purulent |
| Exudate amount | None | Scant | Small | Moderate | Large |
| Periwound color | Normal | Pale | Red/erythema | Blue/dusky | Black/dark |
| Edema | None | Minimal | Moderate | Heavy | Pitting 4+ |
| Induration | None | Minimal | Moderate | Severe | Fixed |
| Granulation | 100% | 75-99% | 50-74% | 25-49% | <25% |
| Epithelialization | Complete | >75% | 50-75% | 25-49% | <25% |

**Total Score: 13-65** (lower = better healing potential)

**Design for Healing (DfH):**
- Predicts probability of healing at 12 weeks
- Variables: patient age, wound area, duration, presence of eschar
- Used for clinical trial enrollment, prognostication

### Advanced Tissue Characterization

**Histopathological Assessment:**

**Biopsy Indications:**
- Atypical wound presentation
- Suspected malignancy (Marjolin's ulcer)
- Chronic wound without clear etiology
- Suspected vasculitis or inflammatory condition
- Confirmation of pathogen

**Wound Edge Biopsy Analysis:**
- **Epithelialization:** Keratinocyte migration markers (K6, K16)
- **Inflammation:** CD3 (T-cells), CD68 (macrophages), neutrophils
- **Proliferation:** Ki-67, PCNA
- **MMP/TIMP balance:** MMP-9 elevation = poor healing

**Biomarker Assessment:**

| Biomarker | Method | Clinical Utility |
|-----------|--------|------------------|
| MMP-9/TIMP-1 ratio | Wound fluid ELISA | Predicts healing (ratio >10:1 poor) |
| IL-1, TNF-alpha | ELISA | Elevated in chronic wounds |
| VEGF | ELISA | Low in non-healing wounds |
| Neopterin | Urine, serum | Marker of inflammation |
| CRP, ESR | Serum | Infection monitoring |
| Procalcitonin | Serum | Superior infection marker |

### Exudate Analysis and Laboratory Assessment

**Gram Stain Interpretation:**
- **Gram positive cocci in clusters:** Staphylococcus
- **Gram positive cocci in chains:** Streptococcus
- **Gram negative rods:** Pseudomonas, E. coli, Klebsiella
- **Polymicrobial:** Mixed organisms, consider anaerobes

**Culture Techniques:**
- **Swab culture:**
  - Surface contamination risk
  - Levine technique: rotate with pressure before collecting
  - Best for superficial infection assessment
- **Curettage/biopsy:**
  - More accurate for deep tissue pathogens
  - Quantitative culture (<10^5 CFU/g threshold)
- **Blood cultures:**
  - Indicated for systemic signs (fever, leukocytosis)

**Biofilm Detection:**
- Clinical: Wound not responding despite appropriate care
- Microscopy: Confocal microscopy with fluorescent in situ hybridization (FISH)
- Molecular: 16S rRNA sequencing
- Clinical surrogate: Serial debridement trial - if improves after debridement, biofilm likely present

### Advanced Imaging in Wound Assessment

**High-Frequency Ultrasound (20-100 MHz):**
- **Depth measurement:** Resolution 30-500 microns
- **Sinus tract detection:** Identifies undermining, tunnels
- **Abscess identification:** Fluid collection
- **Foreign body detection:** Radiolucent objects
- **Doppler:** Perfusion assessment

**Multispectral/Hyperspectral Imaging:**
- **Tissue oxygenation (StO2):** Perfusion mapping
- **Hemoglobin mapping:** Oxygenated vs. deoxygenated
- **Predictive value:** StO2 >40% predicts healing
- **Applications:**
  - Amputation level determination
  - Revascularization decision-making
  - Diabetic foot ulcer assessment

**Fluorescence Imaging (MolecuLight i:X):**
- **Principle:** Bacterial porphyrins autofluoresce under violet light
- **P. aeruginosa:** Cyan fluorescence
- **S. aureus:** Green fluorescence
- **Sensitivity:** Detects >10^4 CFU/g
- **Utility:**
  - Real-time bacterial mapping
  - Guides debridement
  - Reduces antibiotic use (30% reduction in studies)

**Thermography:**
- **Infrared imaging:** Surface temperature mapping
- **Interpretation:**
  - Hot (>2°C difference): Infection/inflammation
  - Cold (>2°C difference): Ischemia
- **Applications:**
  - Infection screening
  - Vascular assessment
  - Charcot neuroarthropathy detection

**MRI and CT:**
- **MRI:**
  - Osteomyelitis detection (sensitivity 0.85, specificity 0.70)
  - Soft tissue abscess
  - Tendon/joint involvement
  - Marrow edema pattern
- **CT:**
  - Gas detection (crepitus)
  - Foreign body
  - Bone involvement
  - Less soft tissue detail than MRI

### Pain Assessment - Advanced Concepts

**Pain Mechanisms in Wounds:**
- **Nociceptive:** Tissue damage, inflammation
- **Neuropathic:** Nerve damage, abnormal processing
- **Inflammatory:** Mediator-driven (prostaglandins, bradykinin)
- **Central sensitization:** Amplified pain response

**Quantitative Sensory Testing:**
- **Monofilament testing:** 5.07 (10g) detects neuropathy
- **Vibration perception:** 128 Hz tuning fork
- **Temperature discrimination:** Hot/cold discrimination
- **Pinprick:** Spinothalamic tract function

### Predictive Modeling in Wound Assessment

**Healing Trajectory Models:**
- **Wound size trajectory:**
  - Week 4: <40% area reduction predicts poor outcome
  - Rate of area reduction: 0.5%/day in healers
- **Healing Index:**
  - Considers age, wound age, size, depth, tissue type
  - Calculates probability of healing at 12 weeks

**Risk Stratification:**
- **Diabetic ulcers:**
  - PEDIS grade predicts amputation risk
  - SINBAD score predicts healing time
- **Pressure ulcers:**
  - Braden scale predicts development
  - PUSH score predicts healing trajectory
- **Venous ulcers:**
  - CEAP classification correlates with recurrence

### Documentation for Interdisciplinary Communication

**Critical Data Elements:**
1. **Wound identification:**
   - Anatomical location with precision
   - Laterality
   - Number of wounds

2. **Morphology:**
   - Dimensions (L, W, D with method)
   - Shape and configuration
   - Undermining/tunneling (clock face)

3. **Tissue composition:**
   - % granulation, % slough, % eschar
   - Bone/tendon exposure (yes/no)

4. **Exudate:**
   - Amount (none/scant/small/moderate/large)
   - Type (serous/sanguineous/purulent)
   - Odor (none/mild/moderate/strong)

5. **Periwound:**
   - Erythema (cm, induration)
   - Maceration
   - Edema
   - Dermatitis

6. **Pain:**
   - Intensity (0-10)
   - Quality
   - Temporal pattern

7. **Clinical signs:**
   - Infection (local, systemic)
   - Ischemia
   - Neuropathy

8. **Treatment:**
   - Current dressing
   - Debridement method
   - Adjunctive therapies

**Communication Tools:**
- **SBAR:** Situation, Background, Assessment, Recommendation
- **Photographs:** With scale and date
- **Diagrams:** Anatomic marking for undermining/tunneling
- **Flow sheets:** Track trends over time`,
      keyTerms: [
        { term: 'Levine technique', definition: 'Proper swab culture technique: rotate swab with pressure over 1 cm² area after wound cleaning to obtain viable tissue' },
        { term: 'MolecuLight', definition: 'Handheld fluorescence imaging device that detects bacterial autofluorescence for real-time bacterial mapping' },
        { term: 'autofluorescence', definition: 'Natural emission of light by tissues; bacterial porphyrins fluoresce under specific wavelengths' },
        { term: 'Marjolin\'s ulcer', definition: 'Malignant transformation (SCC) in chronic wound/scar, high metastatic potential' },
        { term: 'StO2', definition: 'Tissue oxygen saturation percentage; measured by hyperspectral imaging, >40% predicts healing' },
        { term: 'central sensitization', definition: 'Amplified neural signaling causing heightened pain response; common in chronic wound patients' },
      ],
      clinicalNotes: `Evidence-Based Assessment Pearls:

1. **Probe-to-bone test:**
   - Positive PPV 0.89 for osteomyelitis in diabetic foot
   - Simple bedside test with sterile metal probe
   - Positive if bone or hard gritty substance encountered

2. **Serial debridement trial:**
   - Perform 2-3 weekly debridements
   - Wound improvement suggests biofilm present
   - Wound unchanged suggests non-biofilm cause

3. **Week 4 rule:**
   - <40% area reduction at week 4 predicts poor healing
   - Consider treatment modification if not progressing
   - Rule of thumb: 50% area reduction by week 4 in healers

4. **Infection diagnosis:**
   - Clinical criteria > quantitative culture
   - 4 CANDO criteria: Confined, Erythema, Affected, Drainage, Os (bone)
   - Procalcitonin superior to CRP/ESR for systemic infection`,
    },

    5: {
      level: 5,
      summary: 'Contemporary wound assessment integrates molecular diagnostics, advanced imaging, validated scoring systems, and predictive analytics to enable precision wound management and evidence-based treatment decisions.',
      explanation: `## Cutting-Edge Wound Assessment Technologies

### Molecular Diagnostics and Precision Medicine

**Next-Generation Sequencing (NGS):**
- **16S rRNA gene sequencing:**
  - Identifies all bacterial species present
  - Culture-independent
  - Detects anaerobes missed by standard culture
  - Guides targeted antimicrobial therapy

- **Metagenomic sequencing:**
  - Full bacterial genome profiling
  - Antibiotic resistance gene identification
  - Virulence factor detection
  - Microbiome analysis

- **Transcriptomic profiling:**
  - Host gene expression signatures
  - Healing vs. non-healing wound profiles
  - Predictive biomarkers for treatment response

**Proteomic Analysis:**
- **Wound fluid proteomics:**
  - Mass spectrometry identification of proteins
  - MMP-9, MMP-8, elastase quantification
  - Growth factor deficiency identification
  - Personalized growth factor therapy guidance

- **Cytokine profiling:**
  - Multiplex assays (IL-1beta, IL-6, TNF-alpha, IL-10)
  - Inflammation phenotype classification
  - Targeted anti-inflammatory therapy

**Point-of-Care Molecular Testing:**
- **PCR-based pathogen detection:**
  - Rapid (hours vs. days)
  - MRSA, VRE, Pseudomonas detection
  - Antibiotic resistance genes
- **Biofilm detection assays:**
  - D-amino acid incorporation
  - EPS matrix quantification

### Advanced Imaging Technologies

**Optical Coherence Tomography (OCT):**
- **Principle:** Light-based backscatter imaging
- **Resolution:** 1-15 microns (10-100x better than ultrasound)
- **Depth:** 1-2 mm penetration
- **Applications:**
  - High-resolution margin visualization
  - Undermining detection
  - Microvascular imaging
  - Cellular-level structure assessment

**Photoacoustic Imaging:**
- **Principle:** Laser-induced ultrasound
- **Applications:**
  - Oxygenation mapping
  - Vasculature visualization
  - Temperature assessment
  - Multi-scale imaging (cellular to organ)

**Raman Spectroscopy:**
- **Principle:** Inelastic light scattering revealing molecular composition
- **Applications:**
  - Tissue type discrimination (viable vs. necrotic)
  - Bacterial identification
  - pH mapping (wound environment assessment)
  - Real-time, label-free biochemical analysis

**Thermography - Advanced Applications:**
- **Dynamic thermography:**
  - Temperature response to stress or cooling
  - Perfusion reserve assessment
  - Differentiates infection vs. inflammation

- **AI-assisted interpretation:**
  - Machine learning pattern recognition
  - Automated temperature difference calculation
  - Predictive analytics for healing outcome

### Wearable and Remote Monitoring

**Smart Dressings:**
- **pH-sensing dressings:**
  - Color change with pH variation
  - Infection indication (alkaline shift)
  - Integration with smartphone apps

- **Temperature-sensing dressings:**
  - Continuous temperature monitoring
  - Early infection detection
  - Bluetooth data transmission

- **Moisture-sensing dressings:**
  - Saturation detection
  - Optimize dressing change timing
  - Reduce unnecessary changes

**Remote Patient Monitoring Platforms:**
- **Smartphone wound imaging:**
  - AI-assisted measurement
  - Automated wound classification
  - Healing trajectory prediction
  - Telehealth integration

- **Wearable sensors:**
  - Limb movement (offloading compliance)
  - Perfusion monitoring (photoplethysmography)
  - Edema assessment (bioimpedance)

### Artificial Intelligence and Machine Learning

**Computer Vision in Wound Assessment:**
- **Automated measurement:**
  - Segmentation of wound area
  - Tissue type classification (granulation, slough, eschar)
  - Healing rate calculation
  - Reduced inter-rater variability

- **Deep learning models:**
  - Convolutional neural networks (CNNs)
  - Training datasets: >10,000 wound images
  - Accuracy: >90% for tissue classification
  - Real-time processing

**Predictive Analytics:**
- **Healing prediction models:**
  - Input: wound characteristics, patient factors, treatment
  - Output: healing probability at specified timepoints
  - Accuracy: AUC 0.80-0.85 in validation studies

- **Risk stratification:**
  - Amputation risk prediction (diabetic foot)
  - Ulcer development risk (pressure injury)
  - Readmission risk prediction

- **Treatment recommendation:**
  - Evidence-based decision support
  - Cost-effectiveness analysis
  - Personalized therapy selection

### Validated Assessment Tools - Evidence Review

**Systematic Review Findings:**

| Tool | Evidence Level | Predictive Validity | Clinical Utility |
|------|----------------|---------------------|------------------|
| PUSH | High (NPUAP) | Moderate | High |
| BWAT | Moderate | Moderate | High |
| DESIGN (Japan) | Moderate | High | Moderate |
| Torrance | Low | Low | Moderate |
| TIME | High | Moderate | Very High |

**Cross-Cultural Adaptations:**
- DESIGN tool (Japan)
- SUESS (Sweden)
- Wound Healing Scale (Korea)

### Integration with Electronic Health Records

**Structured Data Entry:**
- SNOMED CT coding for wound characteristics
- LOINC for laboratory values
- Standardized terminology (NPUAP, IWGDF)
- Interoperability between systems

**Clinical Decision Support:**
- Alerts for non-healing wounds
- Guideline reminders (e.g., offloading for DFU)
- Risk-based follow-up scheduling
- Cost-effectiveness prompts

### Quality Metrics and Performance Measurement

**Wound Healing Quality Indicators:**
1. **Process measures:**
   - Assessment completion rate
   - Documentation completeness
   - Guideline adherence (e.g., offloading)

2. **Outcome measures:**
   - Complete closure rate at 12/20 weeks
   - Time to healing
   - Recurrence rate
   - Amputation rate (for DFU)
   - Hospitalization rate

3. **Patient-reported measures:**
   - Pain scores
   - Quality of life (Wound-QoL, CWIS)
   - Satisfaction

**Benchmarking and Registry Data:**
- US Wound Registry (USWR)
- European Wound Management Association (EWMA) database
- Comparative effectiveness research
- Quality improvement initiatives

### Future Directions

**Nanotechnology-Based Sensors:**
- Implantable oxygen sensors
- Glucose monitoring for diabetic wounds
- pH and temperature nanosensors
- Real-time drug delivery monitoring

**Microphysiological Systems (Organ-on-Chip):**
- Wound-on-chip models
- Drug response testing
- Personalized therapy selection

**Regenerative Medicine Assessment:**
- Stem cell tracking (imaging modalities)
- Gene expression monitoring
- Tissue engineering integration
- Biomarker-guided therapy`,
      keyTerms: [
        { term: '16S rRNA sequencing', definition: 'Molecular technique targeting bacterial 16S ribosomal RNA gene; culture-independent microbial identification' },
        { term: 'metagenomic sequencing', definition: 'Comprehensive genetic sequencing of all microbial DNA in sample; identifies species, resistance genes, virulence factors' },
        { term: 'proteomics', definition: 'Large-scale study of proteins, particularly their structures and functions; applied to wound fluid analysis' },
        { term: 'OCT', definition: 'Optical coherence tomography; light-based imaging providing micron-resolution cross-sectional tissue images' },
        { term: 'photoacoustic imaging', definition: 'Hybrid modality using laser-induced ultrasound for molecular and functional tissue imaging' },
        { term: 'Raman spectroscopy', definition: 'Spectroscopic technique based on inelastic scattering of light; provides molecular fingerprint of tissue composition' },
        { term: 'CNN', definition: 'Convolutional neural network; deep learning architecture effective for image analysis including wound assessment' },
      ],
      clinicalNotes: `Clinical Practice Implications:

1. **Precision wound care is emerging:**
   - Molecular diagnostics can guide targeted antimicrobial therapy
   - Proteomic profiling may identify specific growth factor deficiencies
   - Genetic testing may predict healing potential

2. **AI integration challenges:**
   - Need for diverse, high-quality training data
   - Regulatory approval for clinical decision support
   - Integration into clinical workflow
   - Liability considerations

3. **Implementation recommendations:**
   - Start with validated tools (PUSH, TIME) consistently
   - Add imaging as indicated (fluorescence for suspected infection, MHSI for vascular assessment)
   - Consider molecular diagnostics for non-healing wounds
   - Participate in registries for benchmarking

4. **Cost-effectiveness:**
   - Advanced imaging up-front can save costs by guiding treatment
   - Predictive models can prevent ineffective treatments
   - Remote monitoring reduces in-person visits`,
    },
  },

  media: [
    {
      id: 'wound-assessment-diagram',
      type: 'diagram',
      filename: 'wound-assessment-framework.svg',
      title: 'Systematic Wound Assessment Framework',
      description: 'Comprehensive framework for wound evaluation including all parameters',
    },
    {
      id: 'clock-face-undermining',
      type: 'diagram',
      filename: 'undermining-clock-face.svg',
      title: 'Clock Face Method for Documenting Undermining',
      description: 'How to document undermining and tunneling using clock face notation',
    },
    {
      id: 'tissue-types-atlas',
      type: 'image',
      filename: 'wound-tissue-types.jpg',
      title: 'Wound Tissue Types Reference',
      description: 'Visual reference for granulation, slough, eschar, and other tissue types',
    },
  ],

  citations: [
    {
      id: 'npiap-push-2023',
      type: 'article',
      title: 'Pressure Ulcer Scale for Healing (PUSH): Validity and Reliability',
      source: 'Journal of Wound, Ostomy, and Continence Nursing',
    },
    {
      id: 'bates-jensen-2018',
      type: 'article',
      title: 'Bates-Jensen Wound Assessment Tool: Evidence for Use in Clinical Practice',
      authors: ['Bates-Jensen, B.M.'],
      source: 'Wound Repair and Regeneration',
    },
    {
      id: 'time-framework-2022',
      type: 'article',
      title: 'TIME for wound bed preparation: A systematic review',
      source: 'Wounds International',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-basics', targetType: 'topic', relationship: 'related', label: 'Wound Basics' },
    { targetId: 'wound-care-cleaning', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning' },
    { targetId: 'wound-care-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['wound assessment', 'wound documentation', 'wound healing', 'physical examination'],
    keywords: ['wound measurement', 'PUSH tool', 'BWAT', 'TIME framework', 'wound photography', 'exudate'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundAssessmentContent;
